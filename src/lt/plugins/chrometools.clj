(ns lt.plugins.chrometools)

(defmacro with-client
  [client & body]
   `(if (:connected @~client)
        ~(cons 'do body)
        (lt.object/update! ~client [:queue] conj (fn []
                                                   (println "in callback")
                                                   ~@body))))

(macroexpand '(with-client n
  (if false
    (println "ok")
    (println "yes"))
  (println "yo")
  (println "test")))
