(ns lt.plugins.chromedebugger
  (:refer-clojure :exclude [send])
  (:require [cljs.reader :as reader]
            [lt.objs.sidebar.clients :as scl]
            [lt.objs.files :as files]
            [lt.objs.popup :as popup]
            [lt.objs.context :as ctx]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.object :as object]
            [lt.objs.clients :as clients]
            [lt.objs.eval :as eval]
            [fetch.core :as fetch]
            [lt.objs.clients.devtools :as devtools]
            [lt.objs.notifos :as notifos]
            [lt.util.dom :as dom]
            [lt.plugins.js]
            [lt.objs.clients.ws :as ws]
            [lt.util.cljs :refer [wait js->clj]]
            [crate.binding :refer [bound subatom]]
            [clojure.string :as string])
  (:require-macros [lt.macros :refer [behavior defui]]))


;;;; Connector

;; Contains remote server details in form hostname:port
(def remote-server (atom nil))

(defui server-input []
  [:input {:type "text" :placeholder "host:port" :value "localhost:"}]
  :focus (fn []
           (ctx/in! :popup.input))
  :blur (fn []
          (ctx/out! :popup.input)))

(defn connect-to-remote [server]
  "Connect to remote debugging interface specified by server (host:port)

  Saves server in remote-server var for next connection attempt. On failure
  this is reset. "
  (let [[host port] (string/split server ":")]
    (when (and host port)
      (let [client (clients/client! :chrome.client.remote)
            url (str "http://" server "/json") ]
        ; Save settings
        (reset! remote-server server)
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
                               (if @remote-server
                                 (connect-to-remote @remote-server)
                                 (remote-connect)))})



(defn socket [this url]
  "Establish connection to url against client this"
  (let [sock (js/WebSocket. url)]
    (set! (.-onopen sock) #(do
                             (object/merge! this {:connected true})
                             (object/raise this :connect)))
    (set! (.-onmessage sock) #(object/raise this
                                            :message
                                            (-> (js/JSON.parse (.-data %))
                                                (js->clj :keywordize-keys true))))
    (set! (.-onerror sock) #(object/raise this
                                          :error %))
    sock))


(defn send* [client m cb]
  "Make actual send call to connection. See send below."
  (.send (:socket @client) (js/JSON.stringify (clj->js m)))
  (when cb
    (swap! cbs assoc (:id m) cb)))


(defn send [client m & [cb]]
  "Send message m to client with optional callback

  Queues callbacks if no connection available
  "
  (if (:connected @client)
    (send* client m cb)
    (object/update! client [:queue] conj [client m cb])))



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


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
                                         (reset! remote-server nil)
                                         (popup/popup! {:header "We couldn't connect."
                                                       :body [:span "There was a problem connecting. Check the port and make
                                                              sure chrome was launched with the --remote-debugging-port option"]
                                                       :buttons [{:label "close"}]})
                                         (object/raise this :close!)))))])))


(behavior ::close
          :triggers #{:close!}
          :reaction (fn [this]
                      (when-let [socket (:socket @this)]
                        (.close socket))
                      (swap! connected-tabs dissoc (-> @this :tab :id))
                      (clients/rem! this)))


;; Clears message queue when socket connection is established to a particular tab
(behavior ::clear-queue-on-connect
          :triggers #{:connect}
          :reaction (fn [this]
                      (doseq [msg (:queue @this)]
                        (apply send msg))))


;; Raw js to send through to load lttools. We use same implementation as
;; the remote browser websocket connection.
;; TODO: This is problematic in that it opens a new connection that shows
;; in the available connection list (and so could be manually disconnected)
(defn load-lttools [] (str "
  (function () {
    function loadScript(sScriptSrc) {
      var oHead = document.getElementsByTagName('head')[0];
      var oScript = document.createElement('script');
      oScript.setAttribute('src',sScriptSrc);
      oScript.setAttribute('type','text/javascript');
      oScript.setAttribute('id','lt_ws');
      oHead.appendChild(oScript);
    }
    loadScript('http://localhost:" ws/port "/socket.io/lighttable/ws.js');
  }());
  "))


(defn inject-lttools [client]
  (send client {:id (next-id)
              :method "Runtime.evaluate"
              :params {:expression (load-lttools)}}
        (fn [r] (println r))
        ))

;; Called when a tab has been selected for debugging
(behavior ::init-tab
           :triggers #{:connect}
           :reaction (fn [this]
                       (println this)
                       ;; Copy lttools object from browser utils. This gives us
                       ;; things like JS watches.
                       (send this {:id (next-id) :method "Runtime.enable"})
                       (send this {:id (next-id) :method "Console.enable"})
                       (send this {:id (next-id) :method "Debugger.enable"}
                             (inject-lttools this))
                       (send this {:id (next-id) :method "Network.setCacheDisabled" :params {:cacheDisabled true}})))

(behavior ::print-messages
          :triggers #{:message}
          :reaction (fn [this m]
                      (println "Message " (:method m) (:id m))
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


(defn is-data-uri? [uri]
  (let [data-uri-prefix "data:application/json"]
        data-uri? (= data-uri-prefix (.substr  uri 0 (.-length data-uri-prefix)))))


(defn store-source-map
  [client url params sm]
  (doseq [source (:sources sm)]
    (object/update! client [:scripts] assoc-in [source url] params)))


(defn load-source-map [client params]
  "Load source map (sm-filename) for specified url"
  (let [sm-filename (:sourceMapURL params)
        url (:url params)
        base (.replace url #"/[^/]*$" "/")
        sm-url (str base sm-filename)]
    (if (is-data-uri? sm-url)
      ;; Assuming string will be base64 encoded
      ;; eg. data:application/json;base64,...
      (when-let [data (js/JSON.parse (js/atob (second (.split sm-url ",")) :keywordize-keys true))]
        (store-source-map client url params data))
      (fetch/xhr sm-url {}
               (fn [d]
                 (when-let [data (js->clj (js/JSON.parse d) :keywordize-keys true)]
                   (store-source-map client url params data)))))))



(behavior ::script-parsed
          :triggers #{:Debugger.scriptParsed}
          :reaction (fn [this s]
                      (let [params (:params s)
                            source-map-url (:sourceMapURL params)
                            url (:url params)]
                        (when source-map-url
                          (load-source-map this params))
                        (object/update! this [:scripts] assoc-in [(files/basename url) url] (:params s)))))

(behavior ::console-log
          :triggers #{:Console.messageAdded}
          :reaction (fn [this m]
                      ;; TODO
                      nil))


(behavior ::inspector-detached
           :triggers #{:Inspector.detached}
           :reaction (fn [this m]
                       ;; Add a floating button to page with option
                       ;; to reconnect or cancel.
                       ;; TODO: Where to put this button? Option to dismiss required
                       (dom/prepend (object/->content (pool/last-active))
                                    (object/->content (object/create ::reconnect-label (:tab @this))))
                                    ;(reconnect-button (:tab @this)))
                       (when (= "replaced_with_devtools" (-> m :params :reason))
                         (println "Dev tools opened: connection closed"))
                       (object/raise this :close!)))


(behavior ::handle-page-reload
           :triggers #{:Debugger.globalObjectCleared}
           :reaction (fn [this m]
                       ;; When page is refreshed we must inject lttools again
                       (inject-lttools this)))


(behavior ::handle-error
          :triggers #{:error}
          :reaction (fn [this event]
                      ;; When not open...
                      (when (not= 1 (.-readyState socket))
                        (object/raise this :close!))))



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
        result (inspector->result client r)
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


;;; Reconnect button gives user option to reconnect to a tab
;;; that was forcefully disconnected (often due to opening devtools)
(defui dismiss-button [obj]
  [:span.tab-close "x"]
  :click (fn [] (object/raise obj :remove-label)))


(defui reconnect-button [label tab]
  [:div {:class "reconnect-chrome button"}
   [:button  (str "Reconnect: " (:title tab))]
   (dismiss-button label)]
  :click (fn [e]
           (let [client (clients/client! :chrome.client.remote)]
             (connect-tab client tab))))


(object/object* ::reconnect-label
                :tags #{:reconnect-label}
                :init (fn [this tab]
                        (object/merge! this {:tab tab})
                        (reconnect-button this tab)))


(behavior ::on-remove-reconnect-label
          :triggers #{:remove-label}
          :reaction (fn [this]
                      (object/destroy! this)))


;; On connection remove any reconnection labels that may be still
;; exist for that tab
(behavior ::remove-label
          :triggers #{:connect}
          :reaction (fn [this that]
                      (let [id (-> @this :tab :id)
                            labels (object/by-tag :reconnect-label)]
                        (doseq [label labels
                                :when (and label (= (-> @label :tab :id) id))]
                          (object/raise label :remove-label)))))



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
                                     ;:editor.eval.html
                                     ;:editor.eval.css
                                     }
                         :tab tab
                         :name (str "Chrome: " (:url tab))
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
                         :buttons [{:label "cancel"
                                    :action #(object/raise client :close!) }]})]))


(defn handle-cb [cbid command data]
  (object/raise clients/clients :message [cbid command data]))


(defn eval-js-form [this msg]
  (let [data (assoc (:data msg) :code (-> msg :data :code))]
    (eval-js  this data
                            (fn [res]
                                (let [result (inspector->result this res)
                                      req (:data msg)
                                      result (assoc result :meta (:meta req) :no-inspect true)]
                                  (if-not (:ex result)
                                    (handle-cb (:cb msg) :editor.eval.js.result result)
                                    (handle-cb (:cb msg) :editor.eval.js.exception result)))))
    (object/raise this :editor.eval.js.change-live! msg)))


(defn find-script [client path]
  (let [found? (-> (@client :scripts)
                   (get (files/basename path)))]
    found?))

(defn script-exists? [client id cb]
  (send client {:id (next-id) :method "Debugger.canSetScriptSource" :params {:scriptId id}}
        (fn [res]
          (cb (-> res :result :result)))))

(defn remove-script! [client path id]
  (let [[k v] (first (filter #(= id (:scriptId (second %))) (find-script client path)))]
    (object/update! client [:scripts (files/basename path)] dissoc k)))


(defn must-eval-file? [client msg]
  ;;we eval the whole file if there's no meta, or this file isn't loaded in the current page
  (when (-> msg :data :path)
    (or (not (-> msg :data :meta))
        (not (find-script client (-> msg :data :path))))))


(defn eval-js [client msg cb]
  (send client {:id (next-id) :method "Runtime.evaluate" :params {:expression (:code msg)}}
        cb))

(defn changelive! [client obj path code cb else]
  (println "changelive")
  (if-let [s (find-script client path)]
    (let [id (-> s vals first :scriptId)]
      (script-exists? client id
                      (fn [exists?]
                        (if-not exists?
                          (do (remove-script! client path id) (changelive! client obj path code cb else))
                          (do
                            (println "set script source" id)
                            (object/merge! obj {:script-id id})
                            ;;TODO: handle multiples
                            (send client {:id (next-id) :method "Debugger.setScriptSource" :params {:scriptId id :scriptSource code}}
                                  cb))))))
    (else)))

(behavior ::handle-send!
                  :triggers #{:send!}
                  :reaction (fn [this msg]
                              (object/raise this (keyword (str (:command msg) "!")) msg)
                              ))


(behavior ::js-eval
                  :triggers #{:editor.eval.js!}
                  :reaction (fn [this msg]
                              (if (must-eval-file? this msg)
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
                                                 (println res)
                                                 (if (:error res)
                                                   (object/raise ed :editor.eval.js.change-live.error (:error res))
                                                   ;;TODO: check for exception, otherwise, assume success
                                                   (object/raise ed :editor.eval.js.change-live.success)))
                                                 identity))))))


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




;;*********************************************************
;; Inspectors (copied from devtools.cljs)
;;*********************************************************


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

(defui desc [this obj]
  [:h2 [:em (->name obj)] (when (:value obj) (str ": " (-> obj :value :description)))]
  :click (fn []
           (if (:open @this)
             (object/merge! this {:open false})
             (do
               (object/merge! this {:open true})
               (when-not (seq (:children @this))
                 (send (:client @this) {:id 1 :method "Runtime.getProperties" :params {:objectId (or (-> obj :value :objectId) (:objectId obj)) :ownProperties true}}
                       (fn [d]
                         (object/merge! this {:children (-> d :result :result)}))))))))

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
                                             :info m})
                        [:div {:class (bound this ->open)}
                         (desc this m)
                         [:div
                          (bound (subatom this :children) (partial props this))]]))
