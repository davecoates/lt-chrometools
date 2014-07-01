(ns lt.plugins.chrometools.filewatch
  (:refer-clojure :exclude [send])
  (:require [lt.objs.editor                  :as editor]
            [lt.object                       :as object]
            [lt.objs.files :as files]
            [lt.plugins.chrometools   :as ct :refer [send handle-cb next-id]]
            [lt.plugins.js]
            [lt.objs.clients :as clients]
            [lt.plugins.chrometools.devtools :as devtools]
            [lt.objs.notifos :as notifos]
            [clojure.string :as string]
            [lt.objs.opener :as opener]
            [lt.util.dom :as dom]
            )
  (:require-macros [lt.macros :refer [behavior defui]]))


(def fs (js/require "fs"))

(defn js-file-read
  "Called when JS file has been read"
  [client script err data]
  (if err
    (do
      (notifos/set-msg! (str "Failed to read file " (:url script)))
      (println err))
    (send client {:id (next-id)
                  :method "Debugger.setScriptSource"
                  :params {:scriptId (:scriptId script) :scriptSource data}}
          (fn [r]
            (if-let [error (:error r)]
              (do
                (notifos/set-msg! (str "Failed to update remote source for file file " (:url script)))
                (println error))
              (notifos/set-msg! (str "Updated source for file " (:url script))))))))

(defn js-file-change
  [client path]
  "Called when javascript file is modified"
  (when-let [script (ct/find-script client path)]
    (.readFile fs path "utf8" (partial js-file-read client (-> script vals first)))))

(defn css-file-change
  [client path]
  "Called when CSS file is modified"
  (.readFile fs path "utf8" (fn [err data]
                              data
                              ; TODO: This is simplistic and doesn't actually replace existing
                              ; styles. Need to search for existing CSS file and replace if exist.
                              (object/raise client :editor.eval.css! {:data {:path path :code data}}))))

(defn listener
  "Listener for watch-file. Calls relevant change function based on file type."
  [{:keys [client path is-dir]} e filename]
  (println filename)
  (when (and (= e "rename")
             client
             (-> @client :connected))
    (if (and (empty? filename) is-dir)
      ;; If we have no filename and the path is a director then we can do nothing
      ;; Advise user to watch individual files instead
      (notifos/set-msg! "Sorry, watches on directories are not supported on your OS. Try watching individual files instead.")
      (let [path (if is-dir
                   (string/join "/" (conj (string/split path "/") filename))
                   path)
            ext (files/ext path)]
        (case ext
          "js" (js-file-change client path)
          "css" (css-file-change client path)
          nil
        )))))



(defn watch-file
  "Watch a file or directory for change. Note that this doesn't watch recursively."
  [client path]
  (let [watcher (.watch fs path (partial listener {:is-dir (files/dir? path)
                                                   :client client
                                                   :path path
                                                   }))]
    (object/update! client [:file-watches] assoc path watcher)))


(defn unwatch-file
  [client path]
  (when-let [watcher (get-in @client [:file-watches path])]
    (.close watcher)
    (object/update! client [:file-watches] dissoc path)))


(behavior ::watch-path
          :triggers #{:select-path!}
          :reaction (fn [obj paths client]
                      (doseq [path (string/split paths ";")]
                        (watch-file client path))))


(object/object* ::opener
                :tags #{:watch-opener}
                :triggers #{}
                :open-files #{}
                :behaviors [::watch-path]
                :init (fn [this]))


(def opener (object/create ::opener))

(def active-dialog nil)

(defui input [type event client]
  [:input {:type "file" type true :multiple true :style "display:none;"}]
  :change (fn []
            (this-as me
                     (when-not (empty? (dom/val me))
                       (object/raise opener event (dom/val me) client)))))



(defn open-folder
  [client]
  (set! active-dialog (input :nwdirectory :select-path! client))
  (dom/trigger active-dialog :click))

(defn open-file
  [client]
  (set! active-dialog (input :file :select-path! client))
  (dom/trigger active-dialog :click))
