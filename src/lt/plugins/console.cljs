(ns lt.plugins.chrometools.console
  (:require [lt.object :as object]
            [lt.objs.files :as files]
            [lt.objs.console :as console]
            [lt.plugins.chrometools.devtools :as devtools]
            [clojure.string :as string])
  (:require-macros [lt.macros :refer [behavior defui]]))


;;*********************************************************
;; Console copied from LightTable devtools.cljs with minor
;; changes (like to use the right client for inspector objects)
;;*********************************************************

(behavior ::console-log
          :triggers #{:Console.messageAdded}
          :reaction (fn [this m]
                      (let [msg (-> m :params :message)
                            msg (assoc msg :client this)]
                        (handle-log-msg msg))))



(defn msg->log [m]
  (let [params (:parameters m)
        client (:client m)]
    (println m)
    (for [p params]
      (do
        [:span.log-val (cond
                        (and (= (:type p) "object") (:value p) (not (-> p :value :value))) "null"
                        (= (:type p) "object") (object/->content (devtools/make-inspector-object client {:value p}))
                        :else (:value p (:text p)))]))))

(defn msg->string [m]
  (let [params (:parameters m)]
    (reduce (fn [res p]
              (str res " " (:value p)))
            ""
            params)))

(defn error->string [e]
  (str
   "ERROR: "(:text e) ": " (:url e) "\n"
   (reduce (fn [res f]
             (str res "       " (files/basename (:url f)) " [" (:lineNumber f) "]: " (if (empty? (:functionName f))
                                                                                       "anonymous"
                                                                                       (:functionName f))
                  "\n"))
           ""
           (:stackTrace e))))

(defui frame [f]
  [:tr [:td.url (files/basename (:url f)) " [" (:lineNumber f) "]"] [:td (if (empty? (:functionName f))
                                                                           "anonymous"
                                                                           (:functionName f))]])

(defmulti handle-log-msg :level)

(defn valid-error? [text]
  (let [text (.toLowerCase text)]
    (every? #(= -1 (.indexOf text %)) ["failed to load resource: http://app.kodowa.com"])))

(defmethod handle-log-msg "error" [msg]
  (when (valid-error? (str (:text msg) ": " (:url msg)))
    (let [top (first (:stackTrace msg))]
      (console/verbatim [:div [:h3 (:text msg)
                               (when-not (:url top)
                                 (str ": " (:url msg)))]
                         [:table
                          (for [f (:stackTrace msg)]
                            (frame f)
                            )]]
                        "error" (error->string msg))
      )))

(defmethod handle-log-msg "log" [msg]
  (let [stack (first (filter #(not= (files/basename (:url %)) "bootstrap.js") (-> msg :stackTrace)))
        stack (if-not stack
                (first (-> msg :stackTrace))
                stack)]
    (console/loc-log {:file (files/basename (:url stack))
                      :line (:lineNumber stack)
                      :content (msg->log msg)
                      :str-content (msg->string msg)})))

(defmethod handle-log-msg "warning" [msg]
  (console/loc-log {:file (files/basename (:url msg))
                    :line (:line msg)
                    :class "warning"
                    :content (:text msg)
                    :str-content (:text msg)}))

(defmethod handle-log-msg :default [msg]
  (console/loc-log {:file (files/basename (:url msg))
                    :line (:line msg)
                    :content (:text msg)
                    :str-content (:text msg)}))

