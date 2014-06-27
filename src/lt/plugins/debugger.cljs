(ns lt.plugins.chrometools.debugger
  (:require
   [clojure.set :refer [intersection]]
   [lt.objs.clients           :as clients]
   [lt.object                 :as object]
   [lt.objs.sidebar.command   :as cmd]
   [lt.objs.sidebar           :as sidebar]
   [lt.objs.editor.pool       :as pool]
   [lt.objs.editor            :as ed]
   [lt.objs.eval              :as eval]
   [lt.objs.files             :as files]
   [lt.objs.notifos :as notifos]
   [lt.objs.tabs :as tabs]
   [lt.objs.plugins :as plugins]
   [lt.util.dom :as dom]
   [crate.binding :refer [bound map-bound subatom]]
   [clojure.string            :as string]
   [clojure.set               :as cljset]
   [lt.util.cljs :refer [js->clj]]
   [lt.plugins.chrometools :as chrome]
   [lt.plugins.chrometools.devtools :as devtools])
  (:require-macros [lt.macros :refer [behavior defui]]
                   [lt.plugins.chrometools :refer [with-client]]
                   ))


(def source-map (js/require (plugins/local-module "ChromeTools" "source-map")))
(def SourceMapConsumer (.-SourceMapConsumer source-map))


;;; Breakpoint markers (shown in editor)

(defn make-marker []
  (let [div (.createElement js/document "div")]
    (set! (.-className div) "breakpoint-icon")
    ;(set! (.-innerHTML div) "▶")
    div))


(defn set-marker
  ([ed line] (set-marker ed line (make-marker)))
  ([ed line marker]
   (let [cm (ed/->cm-ed ed)
         line (dec line) ; Lines appear to be 0 indexed
         ]
     (if marker
       (.addLineClass cm line "wrap" "breakpoint")
       (.removeLineClass cm line "wrap" "breakpoint"))
     (.setGutterMarker cm line "breakpoints" marker))))


(defn remove-marker
  [ed line]
  (set-marker ed line nil))


(defn toggle-marker
  ([ed line] (toggle-marker ed line make-marker))
  ([ed line make]
   (let [cm (ed/->cm-ed ed)
         line (dec line) ; Lines appear to be 0 indexed
         info (.lineInfo cm line)
         marked? (.-gutterMarkers info)]
     (.setGutterMarker cm line "breakpoints" (if marked? nil (make))))))

(object/object* ::breakpoint
                :tags #{:debug.breakpoint}
                :init (fn [this ed client line]
                        (object/merge! this {:client client
                                             :editor ed
                                             :line line})
                        (set-marker ed line)))


(behavior ::breakpoint-destroyed
          :triggers #{:destroy}
          :reaction (fn [this]
                     (let [ed (:editor @this)
                           line (:line @this)
                           cm (ed/->cm-ed ed)]
                       (.removeLineClass cm (dec line) "background" "breakpoint-paused-bg")
                       (.removeLineClass cm (dec line) "wrapper" "breakpoint-paused")
                       (remove-marker ed line))))


;; If client is disconnected or page reloaded we need to clean up
;; any breakpoints (breakpoints set via API are not retained on page reload)
(behavior ::remove-breakpoints-on-disconnect
          :triggers #{:disconnect :Debugger.globalObjectCleared}
          :reaction (fn [this]
                      (doseq [obj (object/by-tag :debug.breakpoint)]
                        (when (= (:client @obj) this)
                            (object/destroy! obj)))))

(behavior ::add-breakpoints-gutter
          :triggers #{:init}
          :reaction (fn [ed]
                      (add-breakpoints-gutter ed)))




(defn get-matching-source
  "Get matching source for a file from a list of possible sources

   Chooses the first matching item comparing each component of the path

  eg path/test.coffee will match test.coffee or path/test.coffee
  "
  [sources path]
  (let  [parts (string/split path "/")]
    (first (for [source sources
                 :let [source-parts (filter not-empty (string/split source "/"))
                       l (count source-parts)
                       p (take-last l parts)
                       ]
                 :when (= p source-parts)]
             source))))

(defn original-position
  [pos sm]
  (let [smap (SourceMapConsumer. (clj->js sm))]
    pos
    (js->clj (.originalPositionFor smap (clj->js pos)) :keywordize-keys true)))
     ;(.eachMapping smap (fn [m]
 ;                  (.log js/console m)
  ;                 ))))




(defn generated-position
  [path source-pos sm]
  (let [smap (SourceMapConsumer. (clj->js sm))
        source (get-matching-source (.-sources smap) path)]
    (js->clj (.generatedPositionFor
              (SourceMapConsumer. (clj->js sm))
              #js {:source source :line (:line source-pos) :column (:ch source-pos)})
             :keywordize-keys true)))


;;; Set and remove breakpoints in Chrome
(defn set-breakpoint
  "Set breakpoint on client for script matching path at position pos

    pos is a map with at least :line, possibly :ch (not used yet)
  "
  [client path pos cb]
  (if-let [s (chrome/find-script client path)]
    (let [id (-> s vals first :scriptId)
          sm (-> s vals first :sourceMap)
          location (if sm
                     (let [gen-pos (generated-position path pos sm)
                           line (dec (:line gen-pos))
                           column (:column gen-pos)
                           ]
                       {:lineNumber line :columnNumber column :scriptId id})
                     {:lineNumber (:line pos) :scriptId id})
          ]
      (chrome/script-exists? client id
                             (fn [exists?]
                               (if-not exists?
                                 (do (chrome/remove-script! client path id) (set-breakpoint this path pos))
                                 (chrome/send client {:id (chrome/next-id)
                                                      :method "Debugger.setBreakpoint"
                                                      :params {:location location}}
                                              (fn [r]
                                                (let [error (:error r)
                                                      success? (nil? error)]
                                                  (cb success? (if success? (:result r) error)))))))))))


(defn remove-breakpoint
  "Remove breakpoint stored against specified client"
  [client breakpoint cb]
  (chrome/send client {:id (chrome/next-id)
                       :method "Debugger.removeBreakpoint"
                       :params {:breakpointId (:breakpointId breakpoint)}}
               cb))


(defn get-breakpoint
  [client path pos]
  "Get breakpoint set on 'client' for script identified by 'path' at line 'line'"
  ( -> @client :breakpoints (get path) (get (:line pos))))


;;; Breakpoint gutters

(defn breakpoints-gutter?
  "Does specified editor have breakpoints gutter?"
  [ed] (not= (.indexOf (-> (ed/->cm-ed ed) (.-options) .-gutters) "breakpoints") -1))


(defn add-breakpoints-gutter
  "Add breakpoints gutter to specified editor if it doesn't already exist"
  [ed]
    (ed/on ed "gutterClick" (fn [cm n]
                              (object/raise ed :toggle-breakpoint! {:line n})))
    (ed/add-gutter ed "breakpoints" 0))



(defn remove-breakpoints-gutter
  "Remove breakpoints gutter from specified editor"
  [ed]
  (ed/remove-gutter ed "breakpoints"))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def breakpoints (atom {}))


;;; Behaviors

(behavior ::add-breakpoint-marker
           :triggers #{:breakpoint-set}
           :reaction (fn [ed client m]
                       (notifos/set-msg! "Breakpoint set")
                       (object/create ::breakpoint ed client (-> m :pos :line))))


(behavior ::remove-breakpoint-marker
          :triggers #{:breakpoint-removed}
          :reaction (fn [ed m]
                      (remove-marker ed (-> m :pos :line))))


(behavior ::toggle-breakpoint
           :triggers #{:toggle-breakpoint!}
           :reaction (fn [this pos]
                       (println "toggle breakpoint...")
                       (let [pos (assoc pos :line (-> pos :line inc))
                             path (-> @this :info :path)
                             client (eval/get-client! {:command :chrome.remote.debug
                                                       :origin this
                                                       :create chrome/create-connection
                                                       })
                             breakpoint (get-breakpoint client path pos)]
                         (with-client client
                           (if breakpoint
                             (remove-breakpoint client breakpoint
                                              (fn [r]
                                                (object/raise this :breakpoint-removed
                                                              {:path path
                                                               :pos pos})
                                                (swap! breakpoints dissoc (-> (get-in @client [:breakpoints path (:line pos)]) :breakpointId))
                                                (object/update! client [:breakpoints path] dissoc (:line pos))
                                                (println "removed!!!!" r)))
                             (set-breakpoint client path pos
                                           (fn [success? result]
                                             (println "cb: " success? result)
                                             (if success?
                                               (do
                                                 (object/raise this :breakpoint-set
                                                               client
                                                               {:breakpoint result
                                                                :path path
                                                                :pos pos})
                                                 (swap! breakpoints assoc (:breakpointId result) {:path path :pos pos :breakpoint result :origin this})
                                                 (object/update! client [:breakpoints] assoc-in [path (:line pos)] result))
                                               (do
                                                 (notifos/set-msg! "Breakpoint could not be set")
                                                 (object/raise this :breakpoint-set-error
                                                               {:path path
                                                                :pos pos
                                                                :message result}))))))))))

(defn jump-to-line
  "Jump to a line in specified editor"
  [editor line paused?]
  (let [cm (ed/->cm-ed editor)]
    (when paused?
      (object/update! editor [:chrome-debugger] assoc :paused-at line)
      (.addLineClass cm line "wrapper" "breakpoint-paused")
      (.addLineClass cm line "background" "breakpoint-paused-bg"))
    (tabs/active! editor)
    (ed/move-cursor editor {:line line :ch 0})
    (ed/center-cursor editor)))


(defn jump-to-location
  "Jump to a location identified by a script, line and column number

  location is expected to be the :location value from a call frame returned
  over the chrome debugging protocol

  Supports source mapped locations.

  If paused? is true then the debugger is paused on that line and appropriate
  visual changes will be applied
  "
  [client location & paused?]
  (let [id (:scriptId location)
        script (chrome/find-script-by-id client id)
        sm (:sourceMap script)
        pos {:line (-> location :lineNumber inc) :column (:columnNumber location)}
        pos (if sm
              (original-position pos sm)
              (assoc pos :source (files/basename (:url script))))
        editor (get-editor-by-filename (:source pos))]
    (when editor
      (let [line (:line pos)
            cm (ed/->cm-ed editor)]
        (jump-to-line editor line paused?)))))


(defn jump-to-bp
  "Jump to editor / line where breakpoint identified by bp-id is set"
  [bp-id]
  (let [breakpoint (get @breakpoints bp-id)
        origin (:origin breakpoint)]
    (when breakpoint
      (let [line (-> breakpoint :pos :line dec)]
        (jump-to-line origin line true)))))


(defn get-scripts
  "Get scripts from client that have scriptId of id"
  [client id]
  (for [[_ vs] (:scripts @client) [_ vvs] vs :when (= (:scriptId vvs) id)] vvs))



;(object/destroy! (first (object/by-tag :debug.panel)))
;(def obj (object/create ::debug-panel {} (pool/last-active)))

;(do (object/update! obj [:debugger] assoc :paused? true) nil)

(defui debug-panel-resume [this]
  [:button {:class "resume"} (bound this #(if (-> % :debugger :paused?) "▶" "="))]
   :click (fn []
            (let [c (if (-> @this :debugger :paused?) :resume-debugger :pause-debugger)
                  editor (pool/last-active)
                  client (eval/get-client! {:command :chrome.remote.debug :origin editor})]
              (cmd/exec! c editor client))))


(defui debug-panel-stepover [this]
  [:button
   {:class "stepover"}  "↴"]
   :click (fn []
            (println "TODO")
            ))

(defui debug-panel-stepin [this]
  [:button
   {:class "stepinto"}  "↓"]
   :click (fn []
            (println "TODO")
            ))

(defui debug-panel-stepout [this]
  [:button
   {:class "stepout"}  "↑"]
   :click (fn []
            (println "TODO")
            ))



(defn ->var-description
  "Generate nice description for scope variables on stack frame

  eg. local => Local
      global => Global (Window)
  "
  [var]
  (let [type (:type var)
        desc (string/capitalize type)]
    desc))
    ;(if (= type "global")
    ;  (str desc " (" (-> var :object :className) ")")
    ;  desc)))


(defn ->scope-variables
  [panel vars]
  (when vars
    (let [client (eval/get-client! {:command :chrome.remote.debug :origin (pool/last-active)})]
    (for [var vars]
      ;; Set description to our var type - eg. local, global, closure etc rather than just Object etc
      (let [desc (->var-description var)
            className (-> var :object :className)
            var (assoc-in var [:object :name] desc)
            var (if (not= className "Object")
                  (assoc-in var [:object :value :description] className)
                  var)]
            (:result (devtools/inspector->result client {:result {:result (:object var)}})))))))

(defn location->source
  "Take a location and transform it to source position

  location is a map and must contain :scriptId, :lineNumber
  and :columnNumber

  Retuns map
    :source
    :line
    :column
  "
  [client location]
  (let [script (chrome/find-script-by-id client (:scriptId location))
        sm (:sourceMap script)
        pos {:line (-> location :lineNumber inc)
             :column (:columnNumber location)}]
    (if sm
      (original-position pos sm)
      (assoc pos :source (files/basename (:url script))))))

(defn ->call-frame-name
  [frame]
  (let [n (:functionName frame)]
    (if (empty? n) "(anonymous function)" n)))

;; Displays a call frame file name and location
(defui call-frame-location
  [panel frame]
  (let [location (location->source (:client @panel) (:location frame))]
    [:div {:class "source"}
     [:span {:class "source-file"}
      (:source location)]
     [:span {:class "source-location"}
      [:span {:class "source-line"}
       (:line location)]
       [:span {:class "source-col"}
       (:column location)]]]
    )
  :click (fn []
           (jump-to-location (:client @panel) (:location frame))))

(defui call-frame
  [panel frame]
  [:div {:class (bound debug-sidebar #(if (= (-> % :debugger :selected-frame) frame) "selected" ""))}
   [:div {:class "frame-name"}
    (->call-frame-name frame)]
   (call-frame-location panel frame)]
  :click (fn []
           (object/update! debug-sidebar [:debugger] assoc :scope-variables (:scopeChain frame)
                                                   :selected-frame frame)
           ))


;;;;;;;


;; Editor object for evaling code on currently selected call frame
(object/object* ::editor
                ;; Note: we add the actual type later (eg. :editor.javascript)
                ;; based on the current type
                :tags #{:editor :editor.inline-result :editor.keys.normal}
                :init (fn [obj info]
                        (let [edi (ed/make info)]
                          (object/merge! obj {:ed edi
                                              :doc (:doc info)
                                              :default-tags (:tags @obj)
                                              :info (dissoc info :content :doc)})
                          (ed/wrap-object-events edi obj)
                          (ed/->elem edi))))





;;;;;;;;;;;;;

(defn ->call-frames
  [panel frames]
  (when frames
    (for [frame frames]
      (call-frame panel frame))))

;(:debug-panel @(clients/by-id 300))

(declare debug-editor)
(declare debug-sidebar)

;(def debug-editor (object/create ::editor {}))


(behavior ::initialise-debug-bar
          :triggers #{:post-init}
          :reaction (fn [app]
                      ;; I'm sure this is bad form but needed way to delay creation. I'm assuming
                      ;; I should be using an atom instead
                      (def debug-editor (object/create ::editor {}))
                      (def debug-sidebar (object/create ::debug-panel))
                      (sidebar/add-item sidebar/rightbar debug-sidebar)))


(defn ->call-frames-class
  "Get classes to apply to call frames list"
  [call-frames]
  (str "call-frames" (when (empty? call-frames) " empty")))


(defn last-ed-mime []
  (-> @(pool/last-active) :info :mime))

(defn get-ed-tags
  ([] (get-ed-tags (pool/last-active)))
  ([ed]
  (let [type-name (-> @ed :info :type-name)]
    (-> @files/files-obj :types (get type-name) :tags))))


(defui debug-panel [this]
  [:div {:class "debug-panel"}
   ; This wrapper div exists as I couldn't work out how to apply classes to top
   ; level without overwriting the 'active' class that gets added by LT to show
   ; it in the sidebar
   [:div {:class (bound this #(if (-> % :debugger :paused?) "paused" "unpaused"))}
     [:h1 {} "Debugger"]
     [:div {:class "controls"}
      (debug-panel-resume this)
      (debug-panel-stepover this)
      (debug-panel-stepin this)
      (debug-panel-stepout this)
      ]
    [:div {:class "call-stack"}
     [:h2 "Call Stack"]
     [:div {:class (bound (subatom this [:debugger :call-frames]) ->call-frames-class)}
      (bound (subatom this [:debugger :call-frames]) #(->call-frames this %))]
     ]
    [:div {:class "variables"}
     [:h2 "Scope Variables"]
     [:div {:class "scope-variables"}
      (bound (subatom this [:debugger :scope-variables]) #(->scope-variables this %))]
     ]
    [:div {:class "debug-editor"}
     (object/->content debug-editor)]
     ; Create editor for evaluation on selected call frames. Set language to
     ; match current editor.
     ;(let [ed (object/create ::editor  {:mime (last-ed-mime)})
     ;      tags (get-ed-tags)]
     ;  (object/update! ed [:client] assoc :default (:client @this))
     ;  (object/add-tags ed tags)
     ;  (object/->content ed))
   ]])

;;; We have client which has a key :debug-panel which is a ::debug-panel
;;; object. This object creates the HTML and sets up bindings to update scope
;;; variables etc - they are bound to keys on the object (eg. :scope-variables)

(object/object* ::debug-panel
                :tags #{:debug.panel}
                :init (fn [this]
                        (object/merge! this {:debugger {:paused? false}})
                        (debug-panel this)))
                        ;(dom/prepend (object/->content editor) (debug-panel this))))


(behavior ::debug-panel-shown
          :triggers #{:show}
          :reaction (fn [this]
                      (let [client (eval/find-client {:command :chrome.remote.debug
                                                      :origin (pool/last-active)})]
                      (object/merge! this {:client client}))))


(defn ->chrome-clients
  "From sequence of clients those that are Chrome clients"
  [clients]
  (let [valid? (fn [client] (and (= (:type client) "LT-UI")
                                   (:connected client)))]
  (filter #(-> % deref valid?) clients)))

;(-> @(pool/last-active) :client vals ->chrome-clients)

;



(behavior ::debug-panel-destroyed
          :triggers #{:destroy}
          :reaction (fn [this]
                      (println "destroy!!")))


;; When a client connects we want to create a debug panel we can use to control
;; it (eg. pause & resume debugger)
;(behavior ::create-panel-on-connect
;          :triggers #{:connect}
;          :reaction (fn [this]
;                      (let [editor (pool/last-active)
;                            panel (object/create ::debug-panel this editor)]
;                        (object/merge! this {:debug-panel panel}))))

;; When client disconnects we need to remove the debug panel
(behavior ::remove-panel-on-disconnect
          :triggers #{:disconnect}
          :reaction (fn [this client]
                      (when-let [panel (:debug-panel @this)]
                        (object/destroy! panel))))


(defn set-syntax
  [editor type-name]
  "Set editor to syntax identifed by type-name"
  (pool/set-syntax editor(-> @files/files-obj :types (get type-name))))

(behavior ::debugger-paused
          :triggers #{:Debugger.paused}
          :reaction (fn [this s]
                      (let [params (:params s)
                            reason (:reason params)
                            breakpoint (-> params :hitBreakpoints first)
                            call-frames (:callFrames params)
                            ; TODO: This isn't necessarily true (could have changed tabs)
                            editor (pool/last-active)]

                        (set-syntax debug-editor (-> @editor :info :type-name))
                        (object/add-tags debug-editor (:default-tags @debug-editor))
                        (object/update! debug-editor [:client] assoc :default this)
                        (let [scope-chain (-> call-frames first :scopeChain js->clj)]
                          (object/update! debug-sidebar [:debugger] assoc
                                          :paused? true
                                          :call-frames call-frames
                                          ))
                        (object/raise sidebar/rightbar :show debug-sidebar)
                        (if breakpoint
                          (jump-to-bp breakpoint)
                          (jump-to-location this (-> call-frames first :location))))))





(defn get-editor-by-filename
  [filename]
  (first (filter #(= (-> @% :info :name) "cube.coffee")
                         (object/by-tag :editor))))



(behavior ::debugger-resumed
           :triggers #{:debugger-resumed}
           :reaction (fn [this]
                       (let [line (get-in @this [:chrome-debugger :paused-at])
                             cm (ed/->cm-ed this)]
                       (.removeLineClass cm line "wrapper" "breakpoint-paused"))))


;;; Commands

(cmd/command {:command :toggle-breakpoint
              :desc "Chrome: Toggle Breakpoint"
              :exec (fn []
                     (let [editor (pool/last-active)
                           pos (ed/->cursor editor)]
                       (object/raise editor :toggle-breakpoint! pos)))})



(cmd/command {:command :resume-debugger
              :desc "Chrome: Debugger - Resume"
              :exec (fn
                      ([]  (let [editor (pool/last-active)
                                 client (eval/get-client! {:command :chrome.remote.debug :origin editor})]
                             (cmd/exec! :resume-debugger editor client)))
                      ([editor client]
                       (chrome/send client {:id (chrome/next-id)
                                            :method "Debugger.resume"}
                                    (fn [r]
                                      (object/update! debug-sidebar [:debugger] assoc :paused? false :scope-variables nil :call-frames nil)
                                      (object/raise editor :debugger-resumed)))))})


(cmd/command {:command :toggle-debug-panel
              :desc "Chrome: Toggle Debug Panel"
              :exec (fn []
                      (object/raise sidebar/rightbar :toggle debug-sidebar))})

(cmd/exec! :toggle-debug-panel)

;(:type @(eval/find-client {:command :chrome.remote.debug :origin (pool/last-active) :create nil}))

;(count @clients/cs)



(cmd/command {:command :pause-debugger
              :desc "Chrome: Debugger - Pause"
              :exec (fn []
                     (let [editor (pool/last-active)
                           client (eval/get-client! {:command :chrome.remote.debug :origin editor})]
                       (chrome/send client {:id (chrome/next-id)
                                               :method "Debugger.pause"}
                                       (fn [r]
                                         (println r)))))})
