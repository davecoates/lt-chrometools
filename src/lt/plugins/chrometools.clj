(ns lt.plugins.chrometools)

(defmacro with-client
  [client & body]
   `(if (:connected @~client)
        ~(cons 'do body)
        (lt.object/update! ~client [:queued-callbacks] conj (fn []
                                                              ~@body))))
