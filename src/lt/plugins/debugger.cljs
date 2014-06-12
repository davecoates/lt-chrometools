(ns lt.plugins.chromedebugger.debugger
  (:require
   [lt.objs.clients           :as clients]
   [lt.object                 :as object]
   [lt.objs.sidebar.command   :as cmd]
   [lt.objs.editor.pool       :as pool]
   [lt.objs.editor            :as ed]
   [lt.objs.eval              :as eval]
   [lt.objs.plugins :as plugins]
   [lt.util.dom :as dom]
   [crate.binding :refer [bound subatom]]
   [clojure.string            :as string]
   [lt.plugins.chromedebugger :as chrome])
  (:require-macros [lt.macros :refer [behavior defui]]))



(def source-map (js/require (plugins/local-module "ChromeDebugger" "source-map")))
(def SourceMapConsumer (.-SourceMapConsumer source-map))


;;; Breakpoint markers (shown in editor)

(defn make-marker []
  (let [div (.createElement js/document "div")]
    (set! (-> div .-style .-color) "red")
    (set! (.-innerHTML div) "●")
    div))


(defn set-marker
  ([ed line] (set-marker ed line (make-marker)))
  ([ed line marker]
   (let [cm (ed/->cm-ed ed)
         line (dec line) ; Lines appear to be 0 indexed
         ]
     (add-breakpoints-gutter ed)
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
     (add-breakpoints-gutter ed)
     (.setGutterMarker cm line "breakpoints" (if marked? nil (make))))))

(defn generated-position
  [path source-pos sm]
  (js->clj (.generatedPositionFor
            (SourceMapConsumer. (clj->js sm))
            #js {:source path :line (:line source-pos) :column (:ch source-pos)})))


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
                           line (dec (.-line gen-pos))
                           column (.-column gen-pos)
                           ]
                       {:lineNumber line :columnNumber column :scriptId id})
                     {:lineNumber (:line pos) :scriptId id})
          ]
      (chrome/script-exists? client id
                             (fn [exists?]
                               (println "exists?")
                               (if-not exists?
                                 (do (chrome/remove-script! client path id) (set-breakpoint this path pos))
                                 (chrome/send client {:id (chrome/next-id)
                                               :method "Debugger.setBreakpoint"
                                               :params {:location location}}
                                       (fn [r]
                                         (println "done: " r)
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
  (when-not (breakpoints-gutter? ed)
    (ed/add-gutter ed "breakpoints" 5)))


(defn remove-breakpoints-gutter
  "Remove breakpoints gutter from specified editor"
  [ed]
  (ed/remove-gutter ed "breakpoints"))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def breakpoints (atom {}))


;;; Behaviors

(behavior ::add-breakpoint-marker
           :triggers #{:breakpoint-set}
           :reaction (fn [ed m]
                       (println "lets set the marker")
                       (set-marker ed (-> m :pos :line))
                       (println "add breakpoint marker" m)))


(behavior ::remove-breakpoint-marker
          :triggers #{:breakpoint-removed}
          :reaction (fn [ed m]
                      (remove-marker ed (-> m :pos :line))))


(behavior ::toggle-breakpoint
           :triggers #{:toggle-breakpoint!}
           :reaction (fn [this m]
                       (println "toggle breakpoint!")
                       (let [pos (ed/->cursor this)
                             pos (assoc pos :line (-> pos :line inc))
                             path (-> @this :info :path)
                             client (eval/get-client! {:command :editor.eval.js :origin this})
                             breakpoint (get-breakpoint client path pos)]
                         (println (if breakpoint 1 0))
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
                                                               {:breakpoint result
                                                                :path path
                                                                :pos pos})
                                                 (swap! breakpoints assoc (:breakpointId result) {:path path :pos pos :breakpoint result :origin this})
                                                 (object/update! client [:breakpoints] assoc-in [path (:line pos)] result))
                                               (object/raise this :breakpoint-set-error
                                                             {:path path
                                                              :pos pos
                                                              :message result}))))))))

(defn jump-to-bp
  [bp-id]
  "Jump to editor / line where breakpoint identified by bp-id is set"
  (let [breakpoint (get @breakpoints bp-id)
        origin (:origin breakpoint)]
    (when breakpoint
      (let [cm (ed/->cm-ed origin)
            line (-> breakpoint :pos :line dec)]
        (object/update! origin [:chrome-debugger] assoc :paused-at line)
        (.addLineClass cm line "background" "breakpoint-paused")
        (object/raise origin :focus!)))))


(defn get-scripts
  [client id]
  "Get scripts from client that have scriptId of id"
  (for [[_ vs] (:scripts @client) [_ vvs] vs :when (= (:scriptId vvs) id)] vvs))



;;; We have client which has a key :debug-panel which is a ::debug-panel
;;; object. This object creates the HTML and sets up bindings to update scope
;;; variables etc - they are bound to keys on the object (eg. :scope-variables)

(object/object* ::debug-panel
                :tags #{:debug.panel}
                :init (fn [this client editor]
                        (object/merge! this {:client client :debugger {:paused? false}})
                        (dom/prepend (object/->content editor) (debug-panel this))))

;(object/destroy! (first (object/by-tag :debug.panel)))
;(def obj (object/create ::debug-panel {} (pool/last-active)))

;(do (object/update! obj [:debugger] assoc :paused? true) nil)

(defui debug-panel-resume [this]
  [:button {:class "resume"} (bound this #(if (-> % :debugger :paused?) "▶" "="))]
   :click (fn []
            (let [c (if (-> @this :debugger :paused?) :resume-debugger :pause-debugger)
                  editor (pool/last-active)
                  client (:client @this)]
              (cmd/exec! c editor client))))

(defn ->scope-variables
  [vars]
  (when vars
    (for [var vars]
      (:result (chrome/inspector->result this {:result {:result (:object var)}})))))

;(:debug-panel @(clients/by-id 300))


(defui debug-panel [this]
  [:div {:class "debug-panel"}
   [:h1 {} "Debugger"]
   [:div {:class "controls"}
    (debug-panel-resume this)]
   [:div {:class "scope-variables"} (bound (subatom this :scope-variables) ->scope-variables)]])


;; When a client connects we want to create a debug panel we can use to control
;; it (eg. pause & resume debugger)
(behavior ::create-panel-on-connect
          :triggers #{:connect}
          :reaction (fn [this]
                      (object/merge! this {:debug-panel (object/create ::debug-panel this (pool/last-active))})))

;; When client disconnects we need to remove the debug panel
(behavior ::remove-panel-on-disconnect
          :triggers #{:disconnect}
          :reaction (fn [this]
                      (when-let [panel (:debug-panel @this)]
                        (object/destroy! panel))))


(behavior ::debugger-paused
          :triggers #{:Debugger.paused}
          :reaction (fn [this s]
                      (let [params (:params s)
                            reason (:reason params)
                            breakpoint (-> params :hitBreakpoints first)
                            call-frames (:callFrames params)
                            ; TODO: This isn't necessarily true (could have changed tabs)
                            editor (pool/last-active)
                            ]
                        ;(.log js/console (clj->js (get-script this (:scriptId loc))))
                     ;   (when-let [p (dom/$ ".debug-panel")] (dom/remove p))
                        (let [;panel (debug-panel editor this)
                              scope-chain (-> call-frames first :scopeChain js->clj)
                              panel (:debug-panel @this)
                              ]
                          (object/update! panel [:debugger] assoc :paused? true)
                          (object/merge! panel {:scope-variables scope-chain}))
                        ;  (doseq [scope scope-chain]
                         ;     (dom/append panel
                          ;                 (:result (chrome/inspector->result this {:result {:result (:object scope)}})))))
                        (when breakpoint
                          (jump-to-bp breakpoint)))))


(behavior ::debugger-resumed
           :triggers #{:debugger-resumed}
           :reaction (fn [this]
                       (let [line (get-in @this [:chrome-debugger :paused-at])
                             cm (ed/->cm-ed this)]
                       (.removeLineClass cm line "background" "breakpoint-paused"))))


;;; Commands

(cmd/command {:command :toggle-breakpoint
              :desc "Chrome: Toggle Breakpoint"
              :exec (fn []
                     (let [editor (pool/last-active)
                           pos (ed/->cursor editor)]
                       (object/raise editor :toggle-breakpoint!)))})



(cmd/command {:command :resume-debugger
              :desc "Chrome: Debugger - Resume"
              :exec (fn
                      ([]  (let [editor (pool/last-active)
                                 client (eval/get-client! {:command :editor.eval.js :origin editor})]
                             (cmd/exec! :resume-debugger editor client)))
                      ([editor client]
                       (chrome/send client {:id (chrome/next-id)
                                            :method "Debugger.resume"}
                                    (fn [r]
                                      (object/update! (:debug-panel @client) [:debugger] assoc :paused? false)
                                      (object/raise editor :debugger-resumed)))))})


(cmd/command {:command :pause-debugger
              :desc "Chrome: Debugger - Pause"
              :exec (fn []
                     (let [editor (pool/last-active)
                           client (eval/get-client! {:command :editor.eval.js :origin editor})]
                       (chrome/send client {:id (chrome/next-id)
                                               :method "Debugger.pause"}
                                       (fn [r]
                                         (println r)))))})
