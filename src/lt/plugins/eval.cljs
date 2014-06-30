(ns lt.plugins.chrometools.eval
  (:refer-clojure :exclude [send])
  (:require [lt.objs.editor                  :as editor]
            [lt.object                       :as object]
            [lt.objs.files :as files]
            [lt.plugins.chrometools   :as ct :refer [send handle-cb next-id]]
            [lt.plugins.js]
            [lt.plugins.chrometools.devtools :as devtools]
            [clojure.string :as string]
            )
  (:require-macros [lt.macros :refer [behavior defui]]))


(defn eval-js [client msg cb]
  (if-let [call-frame (ct/->call-frame-id client)]
    ;; If we are paused in the debugger execute on the currently selected call
    ;; frame. Call frame is selected on the debug panel.
    (send client
          {:id (next-id)
           :method "Debugger.evaluateOnCallFrame"
           :params {:callFrameId call-frame :expression (:code msg)}}
          cb)
    (send client
          {:id (next-id)
           :method "Runtime.evaluate"
           :params {:expression (:code msg)}}
          cb)))


(defn eval-js-form [this msg]
  (let [data (assoc (:data msg) :code (-> msg :data :code))]
    (eval-js  this data
                            (fn [res]
                                (let [result (devtools/inspector->result this res)
                                      req (:data msg)
                                      result (assoc result :meta (:meta req) :no-inspect true)]
                                  (if-not (:ex result)
                                    (handle-cb (:cb msg) :editor.eval.js.result result)
                                    (handle-cb (:cb msg) :editor.eval.js.exception result)))))
    (object/raise this :editor.eval.js.change-live! msg)))


(defn changelive! [client obj path code cb else]
  (if-let [s (ct/find-script client path)]
    (let [id (-> s vals first :scriptId)]
      (ct/script-exists? client id
                      (fn [exists?]
                        (if-not exists?
                          (do (ct/remove-script! client path id) (changelive! client obj path code cb else))
                          (do
                            (object/merge! obj {:script-id id})
                            ;;TODO: handle multiples
                            (send client {:id (next-id) :method "Debugger.setScriptSource" :params {:scriptId id :scriptSource code}}
                                  cb))))))
    (else)))

(defn extra-escape [code]
  (-> code
      (string/replace  "\\" "\\\\")
      (string/replace "\n" "\\n")
      (string/replace "'" "\\'")))


(defn css-eval-message
  [path code]
  (str "
       var name = \"" (string/replace path #"[/.]" "_" "_") "\";
       var existing = document.querySelector(\"#\" + name);

      if(existing) {
        existing.parentNode.removeChild(existing);
      }

      var neue = document.createElement(\"style\");
      neue.id = name;
      neue.type = \"text/css\";
      neue.innerHTML = \""(extra-escape code) "\";

      document.head.appendChild(neue);
"))

(behavior ::css-eval
                  :triggers #{:editor.eval.css!}
                  :reaction (fn [this msg]
                              (let [css-msg (css-eval-message (-> msg :data :path) (-> msg :data :code))]
                                css-msg
                              (send this {:id (next-id) :method "Runtime.evaluate" :params {:expression  css-msg}}
                                    (fn [r]
                                      r
                                      )))
                              ))


(behavior ::js-eval
                  :triggers #{:editor.eval.js!}
                  :reaction (fn [this msg]
                              (if (ct/must-eval-file? this msg)
                                (when-let [ed (object/by-id (:cb msg))]
                                  (let [data (:data msg)
                                        data (assoc data :code (str (editor/->val ed) "\n\n//# sourceURL=" (-> data :path)))]
                                    (eval-js this  data (fn [res]
                                                          (eval-js-form this msg)))))
                                (eval-js-form this msg))))

(behavior ::change-live
                  :triggers #{:editor.eval.js.change-live!}
                  :reaction (fn [this msg]
                              (when-let [ed (object/by-id (:cb msg))]
                                (when (-> msg :data :path)
                                  ;; Don't really know the best way to do this. If :full-source is
                                  ;; available use that - this allows things like coffeescript to
                                  ;; pass through compiled javascript.
                                  (let [code (-> msg :data :full-source)
                                        code (if (nil? code)
                                               (js/lt.plugins.watches.watched-range ed nil nil lt.plugins.js/src->watch)
                                               code)]
                                    (changelive! this ed (-> msg :data :path)
                                               code
                                               (fn [res]
                                                 (if (:error res)
                                                   (object/raise ed :editor.eval.js.change-live.error (:error res))
                                                   ;;TODO: check for exception, otherwise, assume success
                                                   (object/raise ed :editor.eval.js.change-live.success)))
                                                 identity))))))



;;;; ClojureScript support
(behavior ::cljs-result-inspector
          :triggers #{:editor.eval.cljs.result.inspector}
          :reaction (fn [editor res]
                      (let [meta (:meta res)
                            loc {:line (dec (:end-line meta)) :ch (:end-column meta)
                                 :start-line (dec (:line meta))}]
                          (let [str-result (if (:result res)
                                             (:result res)
                                             "undefined")]
                            (object/raise editor :editor.result str-result loc {:prefix " = "})))))



(defn eval-cljs [client msg cb]
  (send client {:id (next-id) :method "Runtime.evaluate" :params {:expression (:code  msg)}}
        cb))


(defn cljs-eval-cb [client msg form r]
  (let [result (:result r)
        error? (or (nil? result) (:wasThrown result))
        error (or (:error result) (-> result :result :description))
        meta (:meta form)
        meta (assoc meta :result-type "inspector")
        result (devtools/inspector->result client r)
        result (assoc result :meta meta :no-inspect true)]
    (if error?
      (handle-cb (:cb msg) :editor.eval.cljs.exception {:ex error
                                                        :meta (merge (:meta msg) (:meta form))})
      (handle-cb (:cb msg)
                 :editor.eval.cljs.result result))))

(behavior ::cljs-exec
                  :triggers #{:editor.eval.cljs.exec!}
                  :reaction (fn [this msg form]
                              (when-let [ed (object/by-id (:cb msg))]
                                  (let [info (:data msg)]
                                    (doseq [form (:results info)]
                                      (let [cb (partial cljs-eval-cb this msg form)]
                                        (eval-cljs this form cb)))))))

