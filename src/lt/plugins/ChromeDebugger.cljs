(ns lt.plugins.chromedebugger
  (:refer-clojure :exclude [send])
  (:require [cljs.reader :as reader]
            [lt.objs.sidebar.clients :as scl]
            [lt.objs.files :as files]
            [lt.objs.popup :as popup]
            [lt.objs.context :as ctx]
            [lt.objs.editor.pool :as pool]
            [lt.object :as object]
            [lt.objs.clients :as clients]
            [fetch.core :as fetch]
            [lt.util.dom :as dom]
            [lt.util.cljs :refer [js->clj]]
            [clojure.string :as string])
  (:require-macros [lt.macros :refer [behavior defui]]))


;; Add connector related

(defui server-input []
  [:input {:type "text" :placeholder "host:port" :value "localhost:"}]
  :focus (fn []
           (ctx/in! :popup.input))
  :blur (fn []
          (ctx/out! :popup.input)))

(defn connect-to-remote [server]
  "Connect to remote debugging interface specified by server (host:port)"
  (let [[host port] (string/split server ":")]
    (println host port)
    (when (and host port)
      (let [client (clients/client! :chrome.client.remote)
            url (str "http://" server "/json") ]
        (object/merge! client {:port port
                               :host host
                               :tabs-url url
                               :name "Chrome Remote Debugger"})
        (object/raise client :connect! url)))))

(defn remote-connect []
  "Display UI for entering server details"
  (let [input (server-input)
        p (popup/popup! {:header "Connect to Chrome using remote debuging protocol."
                         :body [:div
                                [:p "In order to connect to chrome you must start it with the --remote-debugging-port option."]
                                [:label "Server: "]
                                input
                                ]
                         :buttons [{:label "cancel"}
                                   {:label "connect"
                                    :action (fn []
                                              (connect-to-remote (dom/val input)))}]})]
    (dom/focus input)
    (.setSelectionRange input 1000 1000)))

(scl/add-connector {:name "Chrome (Remote Debugging Protocol)"
                    :desc "Enter in the host:port address of remote debugging server to connect to"
                    :connect (fn []
                               (remote-connect)
                               )})



(defn socket [this url]
  (let [sock (js/WebSocket. url)]
    (set! (.-onopen sock) #(do
                             (object/merge! this {:connected true})
                             (object/raise this :connect)))
    (set! (.-onmessage sock) #(object/raise this
                                            :message
                                            (-> (js/JSON.parse (.-data %))
                                                (js->clj :keywordize-keys true))))
    sock))


(defn send* [client m cb]
  (.send (:socket @client) (js/JSON.stringify (clj->js m)))
  (when cb
    (swap! cbs assoc (:id m) cb)))


(defn send [client m & [cb]]
  (if (:connected @client)
    (send* client m cb)
    (object/update! client [:queue] conj [client m cb])))



;;

;; Initially we try fetch the json list of available tabs to debug
(behavior ::connect!
          :triggers #{:connect!}
          :reaction (fn [this url]
                      (println this)
                      (object/merge! this {:connected true})
                      ;; When a connection occurs we then need to select a tab
                        (let [xhr (fetch/xhr url {}
                                   (fn [d]
                                     (if (not-empty d)
                                       (select-tab this (-> d js/JSON.parse (js->clj :keywordize-keys true)))
                                       (do
                                        (popup/popup! {:header "We couldn't connect."
                                                       :body [:span "There was a problem connecting. Check the port and make
                                                              sure chrome was launched with the --remote-debugging-port option"]
                                                       :buttons [{:label "close"}]})
                                         (object/raise this :close!)))))])))


(behavior ::close
          :triggers #{:close!}
          :reaction (fn [this]
                      (when-let [socket (:socket @this)]
                        (.close (:socket @this)))
                      (swap! connected-tabs dissoc (-> @this :tab :id))
                      (clients/rem! this)))


;; Clears message queue when socket connection is established to a particular tab
(behavior ::clear-queue-on-connect
          :triggers #{:connect}
          :reaction (fn [this]
                      (doseq [msg (:queue @this)]
                        (apply send msg))))

;; Called when a tab has been selected for debugging
(behavior ::init-tab
           :triggers #{:connect}
           :reaction (fn [this]
                       (send this {:id (next-id) :method "Console.enable"})
                       (send this {:id (next-id) :method "Debugger.enable"})
                       (send this {:id (next-id) :method "Network.setCacheDisabled" :params {:cacheDisabled true}})))

(behavior ::print-messages
          :triggers #{:message}
          :reaction (fn [this m]
                      ;(println "print messages" m)
                      ;(console/log (pr-str m))
                      ))
(behavior ::handle-message
          :triggers #{:message}
          :reaction (fn [this m]
                      (if-let [cb (@cbs (:id m))]
                        (do
                          (cb m)
                          (swap! cbs dissoc (:id m)))
                        (when (:method m)
                          (object/raise this (keyword (:method m)) m)))))

(behavior ::script-parsed
          :triggers #{:Debugger.scriptParsed}
          :reaction (fn [this s]
                      (let [url (-> s :params :url)]
                        (object/update! this [:scripts] assoc-in [(files/basename url) url] (:params s))
                        )))



;; Display preview of tab
(defui tab-preview [action tab]
  [:li [:img {:src (:faviconUrl tab)}] (:title tab)]
   :click (fn [e]
            ; Close popup if open
            (when-let [p (ctx/->obj :popup)]
              (object/raise p :close!))
            (action tab)))


(defn connect-tab [client tab]
  (object/merge! client {:socket (socket client (:webSocketDebuggerUrl tab))
                         :commands #{:editor.eval.cljs.exec
                                     :editor.eval.js
                                     :editor.eval.html
                                     :editor.eval.css}
                         :tab tab
                         :name (str "Chrome: " (:title tab))
                         :type :chrome.client.remote })
  (swap! connected-tabs assoc (:id tab) client))


(defn select-tab [client tabs]
  "Present list of tabs from active connection."
  (let [action (partial connect-tab client)
        p (popup/popup! {:header "Select which tab to attach to"
                         :body [:div
                                [:ul#chrome-tabs
                                 (map #(tab-preview action %)
                                      (filter #(and (= (:type %) "page")
                                                    (nil? (@connected-tabs (:id %))))
                                              tabs))]
                                ]
                         :buttons [{:label "cancel"}]})]))


; TODO: For a connection allow selection of a javascript file. Fetch script source
; and either map to existing file or create new buffer to allow live eval
;(cmd/command {:command :get-script-source
;              :desc "Chrome Debugger: Fetch Script Source"
;              :exec (fn [] )


;; List of pending callbacks. Dispatched by ::handle-message
(def cbs (atom {}))
(def id (atom 0))

(defn next-id []
  (swap! id inc))

;; List of connected clients indexed by tab id.
(def connected-tabs (atom {}))


;(do
;  (send c {:id (next-id) :method "Debugger.getScriptSource" :params {:scriptId "130"}} (fn [a] (println "result " a)))
;  "blah")

