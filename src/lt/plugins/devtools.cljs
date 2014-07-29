(ns lt.plugins.chrometools.devtools
  (:require
   [lt.object    :as object]
   [lt.util.dom  :as dom]
   [lt.plugins.chrometools :refer [send next-id]]
   [crate.binding :refer [bound subatom]])
  (:require-macros [lt.macros :refer [behavior defui]]))



;;*********************************************************
;; Inspectors (copied from devtools.cljs)
;;*********************************************************


(defn make-inspector-object
  [& more]
  "Make an inspector object. Passes all arguments through to ::inspector-object"
  (apply (partial object/create ::inspector-object) more))

(defn format-value [v]
  (let [val (:value v)]
    (cond
     (= val "undefined") "undefined"
     (= (:type v) "string") (pr-str val)
     (or (true? val) (false? val)) (pr-str val)
     (or (nil? val)
         (empty? val)) "null"
     :else (:value v))))

(defn i-compare [a b]
  (let [ia (.indexOf a "__")
        ib (.indexOf b "__")]
    (if (and (= ia -1)
             (= ib -1))
      (compare a b)
      (cond
       (and (> ia -1)
            (> ib -1)) (compare a b)
       (> ia -1) 1
       :else -1))))

(defn ->name [obj]
  (let [n (or (-> obj :name) (-> obj :value :description) (:description obj) "UnknownObject")]
    (cond
     (> (.indexOf n "e.fn.e.init") -1) (str "jQuery" (subs n 11))
     :else n)))

(defn open-inspector [this obj]
  (object/merge! this {:open true})
  (when-not (seq (:children @this))
    (send (:client @this) {:id 1 :method "Runtime.getProperties" :params {:objectId (or (-> obj :value :objectId) (:objectId obj)) :ownProperties true}}
          (fn [d]
            (object/merge! this {:children (-> d :result :result)})))))

(defui desc [this obj]
  [:h2 [:em (->name obj)] (when (:value obj) (str ": " (-> obj :value :description)))]
  :click (fn []
           (if (:open @this)
             (object/merge! this {:open false})
             (open-inspector this obj))))

(defui props [this children]
  [:ul
   (for [c (sort-by :name i-compare children)]
     (do
       (if (and (= (-> c :value :type) "object")
                (-> c :value :objectId))
         [:li (object/->content (object/create ::inspector-object (:client @this) c))]
         [:li [:em (:name c)] ": " (or (-> c :value :description) (str (-> c :value format-value)))])))])

(defn ->open [this]
  (if (:open this)
    "inspector-object open"
    "inspector-object"))

(defn inspector->result [client o]
  (let [res (-> o :result)
        data (:result res)]
    (if (:wasThrown res)
      {:ex (:description data)}
      {:result (condp = (:type data)
                 "object" (object/->content (object/create ::inspector-object client data))
                 (or (:description data) (pr-str (:value data)))
                 )})))

(defn clear-unused-inspectors []
  (doseq [obj (object/by-tag :inspector.object)
          :when (or (not (object/->content obj))
                    (not (dom/parents (object/->content obj) :body)))]
    (object/destroy! obj)))


(behavior ::clean-inspectors-timer
          :triggers #{:init}
          :reaction (fn [this]
                      ;;Every minute clear extraneous inspectors
                      (every 60000 clear-unused-inspectors)
                      ))

(behavior ::clear-inspector-object
          :triggers #{:destroy}
          :reaction (fn [this]
                      (when-let [id (or (-> @this :info :value :objectId)
                                        (-> @this :info :objectId))]
                        (send (:client @this) {:id (next-id) :method "Runtime.releaseObject" :params {:objectId id}}))))

(object/object* ::inspector-object
                :tags #{:inspector.object}
                :init (fn [this client m]
                        (object/merge! this {:client client
                                             :open true
                                             :info m})
                        [:div {:class (bound this ->open)}
                                         (desc this m)
                                         [:div
                                          (bound (subatom this :children) (partial props this))]]
                          ))

(behavior ::auto-open-inspector-object
           :triggers #{:init}
           :reaction (fn [this client m]
                       this
                       (open-inspector this m)
           ))
