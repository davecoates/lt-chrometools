(ns lt.plugins.chrometools.console
  (:require [lt.object :as object]
            [lt.objs.files :as files]
            [lt.objs.clients :as clients]
            [lt.objs.console :as console]
            [lt.plugins.chrometools :as chrome]
            [lt.plugins.chrometools.devtools :as devtools]
            [clojure.string :as string])
  (:require-macros [lt.macros :refer [behavior defui]]))


;;*********************************************************
;; Console copied from LightTable devtools.cljs with minor
;; changes (like to use the right client for inspector objects)
;;*********************************************************

;; Track current console group per client
;; Console groups are used internally to track watch messages
;; See ::console-log behavior below for more details
(def group-stack (atom {}))


(defn ->group-value
  "Extract group value from console log data"
  [msg]
  (-> msg :parameters first :value))


(defn get-current-group
  "Get current group for a client. Returns nil if no group."
  [client-id]
  (-> @group-stack (get client-id) peek))


;;;; Prop functions are for dealing with properties returned by Chrome Debugger
;;;; using Runtime.getProperties.
(defn get-prop-by-name
  "Get a property by name"
  [result name]
  (let [values (-> result :result :result)]
    (first (filter #(= (:name %) name) values))))


(defn format-value [v]
  (let [val (:value v)]
    val))


(defn prop->pair
  "Convert an individual property into key / value pair"
  [prop]
  (let [name (:name prop)]
    (when (not= name "__proto__")
      [(keyword name) (format-value (:value prop))])))


(defn props->map
  "Convert a list of properties into a map indexed by property name"
  [result]
  (let [values (-> result :result :result)]
    (into {} (map prop->pair values))))


(defn get-properties
  "Get runtime properties of object identified by object-id. Calls callback cb on completion"
  [client object-id cb]
  (chrome/send client {:id (chrome/next-id)
                       :method "Runtime.getProperties"
                       :params {:objectId object-id :ownProperties true}}
               (fn [d] (cb d))))


;;; A watch result is received as a console.log message. We expect an object
;;; with two keys: exp and meta. exp is the expression and is JSON encoded.
;;; meta is a regular object and so we need to fetch its properties which will
;;; tell us what watcher it is etc.
(defn handle-watch-result
  [client msg]
  (get-properties client (-> msg :parameters first :objectId)
                  (fn [d]
                    (let [exp (get-prop-by-name d "exp")
                          meta (get-prop-by-name d "meta")]
                      ;; Fill out meta properties
                      (get-properties client (-> meta :value :objectId)
                                      (fn [r]
                                        ;; Now we can raise watcher command against correct object
                                        (let [meta (props->map r)
                                              value {:result (->> exp :value :value (.parse js/JSON))}
                                              value (assoc value :meta meta)]
                                          (object/raise (object/by-id (:obj meta)) (-> meta :ev keyword) value))))))))



(behavior ::console-log
          :triggers #{:Console.messageAdded}
          :reaction (fn [this m]
                      (let [id (object/->id this)
                            type (-> m :params :message :type)
                            msg (-> m :params :message)
                            msg (assoc msg :client this)
                            group (get-current-group id)]
                        (case type
                          ;; Console log groups are used to identify watch messages.
                          ;; Any log that occurs during a group that matches lttools-group-name
                          ;; is considered a watch message and is handled seperately. Anything
                          ;; else is logged as normal.
                          "startGroup" (swap! group-stack update-in [id] conj (->group-value msg))
                          "endGroup" (swap! group-stack update-in [id] pop)
                          "log" (if (= group chrome/lttools-group-name)
                                  (handle-watch-result this msg)
                                  (handle-log-msg msg))))))



(defn msg->log [m]
  (let [params (:parameters m)
        client (:client m)]
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

