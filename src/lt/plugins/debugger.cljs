(ns lt.plugins.chromedebugger.debugger
  (:require
   [lt.objs.clients           :as clients]
   [lt.object                 :as object]
   [lt.objs.sidebar.command   :as cmd]
   [lt.objs.editor.pool       :as pool]
   [lt.objs.editor            :as ed]
   [lt.objs.eval              :as eval]
   [lt.objs.plugins :as plugins]
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

@breakpoints

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



(behavior ::debugger-paused
          :triggers #{:Debugger.paused}
          :reaction (fn [this s]
                      (let [params (:params s)
                            reason (:reason params)
                            breakpoint (-> params :hitBreakpoints first)
                            call-frames (:callFrames params)]
                        (println "paused!!!" breakpoint)
                        (when breakpoint
                          (jump-to-bp breakpoint))
                      s
                      )))


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
              :exec (fn []
                     (let [editor (pool/last-active)
                           client (eval/get-client! {:command :editor.eval.js :origin editor})]
                       (chrome/send client {:id (chrome/next-id)
                                               :method "Debugger.resume"}
                                       (fn [r]
                                         (object/raise editor :debugger-resumed)))))})
