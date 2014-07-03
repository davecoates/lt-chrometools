if(!lt.util.load.provided_QMARK_('lt.plugins.chrometools')) {
goog.provide('lt.plugins.chrometools');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('lt.util.cljs');
goog.require('lt.util.js');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.util.js');
goog.require('lt.util.dom');
goog.require('lt.plugins.js');
goog.require('lt.objs.context');
goog.require('lt.objs.popup');
goog.require('lt.objs.cache');
goog.require('lt.objs.popup');
goog.require('cljs.reader');
goog.require('lt.objs.context');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.objs.clients.ws');
goog.require('lt.util.cljs');
goog.require('lt.objs.files');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.plugins');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('clojure.string');
goog.require('crate.binding');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('cljs.reader');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.objs.clients.ws');
goog.require('lt.objs.cache');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.sidebar.clients');
goog.require('fetch.core');
goog.require('fetch.core');
lt.plugins.chrometools.server_input = (function server_input(){var e__7761__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"host:port",new cljs.core.Keyword(null,"value","value",1125876963),"localhost:"], null)], null));var seq__8194_8322 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",1111509066),((function (e__7761__auto__){
return (function (){return lt.objs.context.in_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
});})(e__7761__auto__))
,new cljs.core.Keyword(null,"blur","blur",1016931289),((function (e__7761__auto__){
return (function (){return lt.objs.context.out_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
});})(e__7761__auto__))
], null)));var chunk__8195_8323 = null;var count__8196_8324 = 0;var i__8197_8325 = 0;while(true){
if((i__8197_8325 < count__8196_8324))
{var vec__8198_8326 = cljs.core._nth.call(null,chunk__8195_8323,i__8197_8325);var ev__7762__auto___8327 = cljs.core.nth.call(null,vec__8198_8326,0,null);var func__7763__auto___8328 = cljs.core.nth.call(null,vec__8198_8326,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___8327,func__7763__auto___8328);
{
var G__8329 = seq__8194_8322;
var G__8330 = chunk__8195_8323;
var G__8331 = count__8196_8324;
var G__8332 = (i__8197_8325 + 1);
seq__8194_8322 = G__8329;
chunk__8195_8323 = G__8330;
count__8196_8324 = G__8331;
i__8197_8325 = G__8332;
continue;
}
} else
{var temp__4092__auto___8333 = cljs.core.seq.call(null,seq__8194_8322);if(temp__4092__auto___8333)
{var seq__8194_8334__$1 = temp__4092__auto___8333;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8194_8334__$1))
{var c__7112__auto___8335 = cljs.core.chunk_first.call(null,seq__8194_8334__$1);{
var G__8336 = cljs.core.chunk_rest.call(null,seq__8194_8334__$1);
var G__8337 = c__7112__auto___8335;
var G__8338 = cljs.core.count.call(null,c__7112__auto___8335);
var G__8339 = 0;
seq__8194_8322 = G__8336;
chunk__8195_8323 = G__8337;
count__8196_8324 = G__8338;
i__8197_8325 = G__8339;
continue;
}
} else
{var vec__8199_8340 = cljs.core.first.call(null,seq__8194_8334__$1);var ev__7762__auto___8341 = cljs.core.nth.call(null,vec__8199_8340,0,null);var func__7763__auto___8342 = cljs.core.nth.call(null,vec__8199_8340,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___8341,func__7763__auto___8342);
{
var G__8343 = cljs.core.next.call(null,seq__8194_8334__$1);
var G__8344 = null;
var G__8345 = 0;
var G__8346 = 0;
seq__8194_8322 = G__8343;
chunk__8195_8323 = G__8344;
count__8196_8324 = G__8345;
i__8197_8325 = G__8346;
continue;
}
}
} else
{}
}
break;
}
return e__7761__auto__;
});
lt.plugins.chrometools.cache_key = new cljs.core.Keyword("lt.plugins.chrometools","chrome-debugger-server","lt.plugins.chrometools/chrome-debugger-server",4300429430);
lt.plugins.chrometools.connect_to_remote = (function connect_to_remote(server,client){var vec__8201 = clojure.string.split.call(null,server,":");var host = cljs.core.nth.call(null,vec__8201,0,null);var port = cljs.core.nth.call(null,vec__8201,1,null);if(cljs.core.truth_((function (){var and__6352__auto__ = host;if(cljs.core.truth_(and__6352__auto__))
{return port;
} else
{return and__6352__auto__;
}
})()))
{var client__$1 = (function (){var or__6364__auto__ = client;if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"chrome.client.remote","chrome.client.remote",4091478727));
}
})();var url = [cljs.core.str("http://"),cljs.core.str(server),cljs.core.str("/json")].join('');lt.objs.cache.store_BANG_.call(null,lt.plugins.chrometools.cache_key,server);
lt.object.merge_BANG_.call(null,client__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"port","port",1017351155),port,new cljs.core.Keyword(null,"host","host",1017112858),host,new cljs.core.Keyword(null,"tabs-url","tabs-url",4418269714),url,new cljs.core.Keyword(null,"name","name",1017277949),"Chrome"], null));
return lt.object.raise.call(null,client__$1,new cljs.core.Keyword(null,"connect!","connect!",4735997929),url);
} else
{return null;
}
});
/**
* Display UI for entering server details
*/
lt.plugins.chrometools.remote_connect = (function remote_connect(client){var input = lt.plugins.chrometools.server_input.call(null);var p = lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Connect to Chrome using remote debuging protocol.",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"In order to connect to chrome you must start it with the --remote-debugging-port option."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),"Server: "], null),input], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"cancel"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"connect",new cljs.core.Keyword(null,"action","action",3885920680),((function (input){
return (function (){return lt.plugins.chrometools.connect_to_remote.call(null,lt.util.dom.val.call(null,input),client);
});})(input))
], null)], null)], null));lt.util.dom.focus.call(null,input);
return input.setSelectionRange(1000,1000);
});
lt.plugins.chrometools.connector_name = "Chrome (Remote Debugging Protocol)";
lt.objs.sidebar.clients.add_connector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),lt.plugins.chrometools.connector_name,new cljs.core.Keyword(null,"desc","desc",1016984067),"Enter in the host:port address of remote debugging server to connect to",new cljs.core.Keyword(null,"connect","connect",1965255772),(function (client){var remote_server = lt.objs.cache.fetch.call(null,lt.plugins.chrometools.cache_key);if(cljs.core.truth_(remote_server))
{return lt.plugins.chrometools.connect_to_remote.call(null,remote_server,client);
} else
{return lt.plugins.chrometools.remote_connect.call(null,client);
}
})], null));
lt.plugins.chrometools.create_connection = (function create_connection(){var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"chrome.client.remote","chrome.client.remote",4091478727));new cljs.core.Keyword(null,"connect","connect",1965255772).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"connectors","connectors",4533225784).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.sidebar.clients.clients)),lt.plugins.chrometools.connector_name)).call(null,client);
cljs.core.swap_BANG_.call(null,client,cljs.core.assoc,new cljs.core.Keyword(null,"connected","connected",4729661051),false);
return client;
});
lt.plugins.chrometools.socket = (function socket(this$,url){var sock = (new WebSocket(url));sock.onopen = ((function (sock){
return (function (){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"connected","connected",4729661051),true,new cljs.core.Keyword(null,"scripts","scripts",2940419194),null,new cljs.core.Keyword(null,"debugger","debugger",1561716627),null], null));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"connect","connect",1965255772));
});})(sock))
;
sock.onmessage = ((function (sock){
return (function (p1__8202_SHARP_){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"message","message",1968829305),lt.util.cljs.js__GT_clj.call(null,JSON.parse(p1__8202_SHARP_.data),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true));
});})(sock))
;
sock.onerror = ((function (sock){
return (function (p1__8203_SHARP_){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"error","error",1110689146),p1__8203_SHARP_);
});})(sock))
;
return sock;
});
lt.plugins.chrometools.send_STAR_ = (function send_STAR_(client,m,cb){new cljs.core.Keyword(null,"socket","socket",4411822821).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)).send(JSON.stringify(cljs.core.clj__GT_js.call(null,m)));
if(cljs.core.truth_(cb))
{return cljs.core.swap_BANG_.call(null,lt.plugins.chrometools.cbs,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(m),cb);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
lt.plugins.chrometools.send = (function() { 
var send__delegate = function (client,m,p__8204){var vec__8206 = p__8204;var cb = cljs.core.nth.call(null,vec__8206,0,null);if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))))
{return lt.plugins.chrometools.send_STAR_.call(null,client,m,cb);
} else
{return lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1121848451)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [client,m,cb], null));
}
};
var send = function (client,m,var_args){
var p__8204 = null;if (arguments.length > 2) {
  p__8204 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return send__delegate.call(this,client,m,p__8204);};
send.cljs$lang$maxFixedArity = 2;
send.cljs$lang$applyTo = (function (arglist__8347){
var client = cljs.core.first(arglist__8347);
arglist__8347 = cljs.core.next(arglist__8347);
var m = cljs.core.first(arglist__8347);
var p__8204 = cljs.core.rest(arglist__8347);
return send__delegate(client,m,p__8204);
});
send.cljs$core$IFn$_invoke$arity$variadic = send__delegate;
return send;
})()
;
lt.plugins.chrometools.__BEH__connect_BANG_ = (function __BEH__connect_BANG_(this$,url){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connected","connected",4729661051),true], null));
var xhr = fetch.core.xhr.call(null,url,cljs.core.PersistentArrayMap.EMPTY,(function (d){if(cljs.core.truth_(cljs.core.not_empty.call(null,d)))
{return lt.plugins.chrometools.select_tab.call(null,this$,lt.util.cljs.js__GT_clj.call(null,JSON.parse(d),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true));
} else
{lt.objs.cache.store_BANG_.call(null,lt.plugins.chrometools.cache_key,null);
lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"We couldn't connect.",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),"There was a problem connecting. Check the port and make\n                                                              sure chrome was launched with the --remote-debugging-port option"], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"close"], null)], null)], null));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"close!","close!",3951350939));
}
}));return null;
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools","connect!","lt.plugins.chrometools/connect!",3870994175),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.__BEH__connect_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connect!","connect!",4735997929),null], null), null));
lt.plugins.chrometools.__BEH__close = (function __BEH__close(this$){var temp__4092__auto___8348 = new cljs.core.Keyword(null,"socket","socket",4411822821).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8348))
{var socket_8349 = temp__4092__auto___8348;socket_8349.close();
} else
{}
cljs.core.swap_BANG_.call(null,lt.plugins.chrometools.connected_tabs,cljs.core.dissoc,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));
return lt.objs.clients.rem_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools","close","lt.plugins.chrometools/close",1334675834),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.__BEH__close,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close!","close!",3951350939),null], null), null));
lt.plugins.chrometools.__BEH__clear_queue_on_connect = (function __BEH__clear_queue_on_connect(this$){var seq__8215_8350 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"queue","queue",1121848451).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var chunk__8216_8351 = null;var count__8217_8352 = 0;var i__8218_8353 = 0;while(true){
if((i__8218_8353 < count__8217_8352))
{var msg_8354 = cljs.core._nth.call(null,chunk__8216_8351,i__8218_8353);cljs.core.apply.call(null,lt.plugins.chrometools.send,msg_8354);
{
var G__8355 = seq__8215_8350;
var G__8356 = chunk__8216_8351;
var G__8357 = count__8217_8352;
var G__8358 = (i__8218_8353 + 1);
seq__8215_8350 = G__8355;
chunk__8216_8351 = G__8356;
count__8217_8352 = G__8357;
i__8218_8353 = G__8358;
continue;
}
} else
{var temp__4092__auto___8359 = cljs.core.seq.call(null,seq__8215_8350);if(temp__4092__auto___8359)
{var seq__8215_8360__$1 = temp__4092__auto___8359;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8215_8360__$1))
{var c__7112__auto___8361 = cljs.core.chunk_first.call(null,seq__8215_8360__$1);{
var G__8362 = cljs.core.chunk_rest.call(null,seq__8215_8360__$1);
var G__8363 = c__7112__auto___8361;
var G__8364 = cljs.core.count.call(null,c__7112__auto___8361);
var G__8365 = 0;
seq__8215_8350 = G__8362;
chunk__8216_8351 = G__8363;
count__8217_8352 = G__8364;
i__8218_8353 = G__8365;
continue;
}
} else
{var msg_8366 = cljs.core.first.call(null,seq__8215_8360__$1);cljs.core.apply.call(null,lt.plugins.chrometools.send,msg_8366);
{
var G__8367 = cljs.core.next.call(null,seq__8215_8360__$1);
var G__8368 = null;
var G__8369 = 0;
var G__8370 = 0;
seq__8215_8350 = G__8367;
chunk__8216_8351 = G__8368;
count__8217_8352 = G__8369;
i__8218_8353 = G__8370;
continue;
}
}
} else
{}
}
break;
}
var temp__4092__auto__ = new cljs.core.Keyword(null,"queued-callbacks","queued-callbacks",3801666662).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto__))
{var cbs = temp__4092__auto__;return lt.util.js.wait.call(null,500,((function (cbs,temp__4092__auto__){
return (function (){var seq__8219 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"queued-callbacks","queued-callbacks",3801666662).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var chunk__8220 = null;var count__8221 = 0;var i__8222 = 0;while(true){
if((i__8222 < count__8221))
{var cb = cljs.core._nth.call(null,chunk__8220,i__8222);cb.call(null);
{
var G__8371 = seq__8219;
var G__8372 = chunk__8220;
var G__8373 = count__8221;
var G__8374 = (i__8222 + 1);
seq__8219 = G__8371;
chunk__8220 = G__8372;
count__8221 = G__8373;
i__8222 = G__8374;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__8219);if(temp__4092__auto____$1)
{var seq__8219__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8219__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8219__$1);{
var G__8375 = cljs.core.chunk_rest.call(null,seq__8219__$1);
var G__8376 = c__7112__auto__;
var G__8377 = cljs.core.count.call(null,c__7112__auto__);
var G__8378 = 0;
seq__8219 = G__8375;
chunk__8220 = G__8376;
count__8221 = G__8377;
i__8222 = G__8378;
continue;
}
} else
{var cb = cljs.core.first.call(null,seq__8219__$1);cb.call(null);
{
var G__8379 = cljs.core.next.call(null,seq__8219__$1);
var G__8380 = null;
var G__8381 = 0;
var G__8382 = 0;
seq__8219 = G__8379;
chunk__8220 = G__8380;
count__8221 = G__8381;
i__8222 = G__8382;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(cbs,temp__4092__auto__))
);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools","clear-queue-on-connect","lt.plugins.chrometools/clear-queue-on-connect",3292104378),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.__BEH__clear_queue_on_connect,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connect","connect",1965255772),null], null), null));
lt.plugins.chrometools.lttools_group_name = "LTTOOLSWATCHER";
lt.plugins.chrometools.get_lttools_source = (function get_lttools_source(){var content = lt.objs.files.bomless_read.call(null,[cljs.core.str(lt.objs.plugins.find_plugin.call(null,"chrometools")),cljs.core.str("/src/lt/plugins/lttools.js")].join(''));return clojure.string.replace.call(null,content,"__LTTOOLS_GROUP_NAME__",lt.plugins.chrometools.lttools_group_name);
});
lt.plugins.chrometools.inject_lttools = (function inject_lttools(client){return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Runtime.evaluate",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expression","expression",3513419274),lt.plugins.chrometools.get_lttools_source.call(null)], null)], null));
});
lt.plugins.chrometools.__BEH__init_tab = (function __BEH__init_tab(this$){lt.plugins.chrometools.send.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Runtime.enable"], null));
lt.plugins.chrometools.send.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Console.enable"], null));
lt.plugins.chrometools.send.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.enable"], null),(function (_){return lt.plugins.chrometools.inject_lttools.call(null,this$);
}));
return lt.plugins.chrometools.send.call(null,this$,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Network.setCacheDisabled",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cacheDisabled","cacheDisabled",3367083920),true], null)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools","init-tab","lt.plugins.chrometools/init-tab",618085402),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.__BEH__init_tab,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connect","connect",1965255772),null], null), null));
lt.plugins.chrometools.__BEH__print_messages = (function __BEH__print_messages(this$,m){return null;
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools","print-messages","lt.plugins.chrometools/print-messages",3849277190),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.__BEH__print_messages,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",1968829305),null], null), null));
lt.plugins.chrometools.__BEH__handle_message = (function __BEH__handle_message(this$,m){var temp__4090__auto__ = cljs.core.deref.call(null,lt.plugins.chrometools.cbs).call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(m));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;cb.call(null,m);
return cljs.core.swap_BANG_.call(null,lt.plugins.chrometools.cbs,cljs.core.dissoc,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(m));
} else
{if(cljs.core.truth_(new cljs.core.Keyword(null,"method","method",4231316563).cljs$core$IFn$_invoke$arity$1(m)))
{return lt.object.raise.call(null,this$,cljs.core.keyword.call(null,new cljs.core.Keyword(null,"method","method",4231316563).cljs$core$IFn$_invoke$arity$1(m)),m);
} else
{return null;
}
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools","handle-message","lt.plugins.chrometools/handle-message",2983048244),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.__BEH__handle_message,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",1968829305),null], null), null));
lt.plugins.chrometools.is_data_uri_QMARK_ = (function is_data_uri_QMARK_(uri){var data_uri_prefix = "data:application/json";return cljs.core._EQ_.call(null,data_uri_prefix,uri.substr(0,data_uri_prefix.length));
});
lt.plugins.chrometools.store_source_map = (function store_source_map(client,url,params,sm){var params__$1 = cljs.core.assoc.call(null,params,new cljs.core.Keyword(null,"sourceMap","sourceMap",3610443443),sm);var seq__8227 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"sources","sources",3286994730).cljs$core$IFn$_invoke$arity$1(sm));var chunk__8228 = null;var count__8229 = 0;var i__8230 = 0;while(true){
if((i__8230 < count__8229))
{var source = cljs.core._nth.call(null,chunk__8228,i__8230);lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scripts","scripts",2940419194)], null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.files.basename.call(null,source),url], null),params__$1);
{
var G__8383 = seq__8227;
var G__8384 = chunk__8228;
var G__8385 = count__8229;
var G__8386 = (i__8230 + 1);
seq__8227 = G__8383;
chunk__8228 = G__8384;
count__8229 = G__8385;
i__8230 = G__8386;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8227);if(temp__4092__auto__)
{var seq__8227__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8227__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8227__$1);{
var G__8387 = cljs.core.chunk_rest.call(null,seq__8227__$1);
var G__8388 = c__7112__auto__;
var G__8389 = cljs.core.count.call(null,c__7112__auto__);
var G__8390 = 0;
seq__8227 = G__8387;
chunk__8228 = G__8388;
count__8229 = G__8389;
i__8230 = G__8390;
continue;
}
} else
{var source = cljs.core.first.call(null,seq__8227__$1);lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scripts","scripts",2940419194)], null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.files.basename.call(null,source),url], null),params__$1);
{
var G__8391 = cljs.core.next.call(null,seq__8227__$1);
var G__8392 = null;
var G__8393 = 0;
var G__8394 = 0;
seq__8227 = G__8391;
chunk__8228 = G__8392;
count__8229 = G__8393;
i__8230 = G__8394;
continue;
}
}
} else
{return null;
}
}
break;
}
});
lt.plugins.chrometools.load_source_map = (function load_source_map(client,params,cb){var sm_filename = new cljs.core.Keyword(null,"sourceMapURL","sourceMapURL",2152324576).cljs$core$IFn$_invoke$arity$1(params);var url = new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(params);var base = url.replace(/\/[^\/]*$/,"/");var sm_url = [cljs.core.str(base),cljs.core.str(sm_filename)].join('');if(lt.plugins.chrometools.is_data_uri_QMARK_.call(null,sm_filename))
{var data = lt.util.cljs.js__GT_clj.call(null,JSON.parse(atob(cljs.core.second.call(null,sm_url.split(",")))),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);lt.plugins.chrometools.store_source_map.call(null,client,url,params,data);
return cb.call(null,data);
} else
{return fetch.core.xhr.call(null,sm_url,cljs.core.PersistentArrayMap.EMPTY,((function (sm_filename,url,base,sm_url){
return (function (d,r){try{var temp__4092__auto__ = lt.util.cljs.js__GT_clj.call(null,JSON.parse(d),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);if(cljs.core.truth_(temp__4092__auto__))
{var data = temp__4092__auto__;lt.plugins.chrometools.store_source_map.call(null,client,url,params,data);
return cb.call(null,data);
} else
{return null;
}
}catch (e8232){var e = e8232;cljs.core.println.call(null,"Failed to parse source-map ",sm_url);
cljs.core.println.call(null,e);
return e;
}});})(sm_filename,url,base,sm_url))
);
}
});
lt.plugins.chrometools.__BEH__script_parsed = (function __BEH__script_parsed(this$,s){if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",4313443576).cljs$core$IFn$_invoke$arity$1(s)))))
{var params = new cljs.core.Keyword(null,"params","params",4313443576).cljs$core$IFn$_invoke$arity$1(s);var source_map_url = new cljs.core.Keyword(null,"sourceMapURL","sourceMapURL",2152324576).cljs$core$IFn$_invoke$arity$1(params);var url = new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(params);if(cljs.core.truth_(source_map_url))
{return lt.plugins.chrometools.load_source_map.call(null,this$,params,((function (params,source_map_url,url){
return (function (sm){return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scripts","scripts",2940419194)], null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.files.basename.call(null,url),url], null),cljs.core.assoc.call(null,params,new cljs.core.Keyword(null,"sourceMap","sourceMap",3610443443),sm));
});})(params,source_map_url,url))
);
} else
{return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scripts","scripts",2940419194)], null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.files.basename.call(null,url),url], null),new cljs.core.Keyword(null,"params","params",4313443576).cljs$core$IFn$_invoke$arity$1(s));
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools","script-parsed","lt.plugins.chrometools/script-parsed",3045291555),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.__BEH__script_parsed,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Debugger.scriptParsed","Debugger.scriptParsed",1050864827),null], null), null));
lt.plugins.chrometools.__BEH__handle_page_reload = (function __BEH__handle_page_reload(this$,m){return lt.plugins.chrometools.inject_lttools.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools","handle-page-reload","lt.plugins.chrometools/handle-page-reload",2846656772),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.__BEH__handle_page_reload,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Debugger.globalObjectCleared","Debugger.globalObjectCleared",1710200527),null], null), null));
lt.plugins.chrometools.__BEH__handle_error = (function __BEH__handle_error(this$,event){if(cljs.core.not_EQ_.call(null,1,lt.plugins.chrometools.socket.readyState))
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"close!","close!",3951350939));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools","handle-error","lt.plugins.chrometools/handle-error",3282026867),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.__BEH__handle_error,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",1110689146),null], null), null));
lt.plugins.chrometools.dismiss_button = (function dismiss_button(obj){var e__7761__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tab-close","span.tab-close",4094760846),"x"], null));var seq__8239_8395 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7761__auto__){
return (function (){return lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"remove-label","remove-label",3359640541));
});})(e__7761__auto__))
], null)));var chunk__8240_8396 = null;var count__8241_8397 = 0;var i__8242_8398 = 0;while(true){
if((i__8242_8398 < count__8241_8397))
{var vec__8243_8399 = cljs.core._nth.call(null,chunk__8240_8396,i__8242_8398);var ev__7762__auto___8400 = cljs.core.nth.call(null,vec__8243_8399,0,null);var func__7763__auto___8401 = cljs.core.nth.call(null,vec__8243_8399,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___8400,func__7763__auto___8401);
{
var G__8402 = seq__8239_8395;
var G__8403 = chunk__8240_8396;
var G__8404 = count__8241_8397;
var G__8405 = (i__8242_8398 + 1);
seq__8239_8395 = G__8402;
chunk__8240_8396 = G__8403;
count__8241_8397 = G__8404;
i__8242_8398 = G__8405;
continue;
}
} else
{var temp__4092__auto___8406 = cljs.core.seq.call(null,seq__8239_8395);if(temp__4092__auto___8406)
{var seq__8239_8407__$1 = temp__4092__auto___8406;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8239_8407__$1))
{var c__7112__auto___8408 = cljs.core.chunk_first.call(null,seq__8239_8407__$1);{
var G__8409 = cljs.core.chunk_rest.call(null,seq__8239_8407__$1);
var G__8410 = c__7112__auto___8408;
var G__8411 = cljs.core.count.call(null,c__7112__auto___8408);
var G__8412 = 0;
seq__8239_8395 = G__8409;
chunk__8240_8396 = G__8410;
count__8241_8397 = G__8411;
i__8242_8398 = G__8412;
continue;
}
} else
{var vec__8244_8413 = cljs.core.first.call(null,seq__8239_8407__$1);var ev__7762__auto___8414 = cljs.core.nth.call(null,vec__8244_8413,0,null);var func__7763__auto___8415 = cljs.core.nth.call(null,vec__8244_8413,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___8414,func__7763__auto___8415);
{
var G__8416 = cljs.core.next.call(null,seq__8239_8407__$1);
var G__8417 = null;
var G__8418 = 0;
var G__8419 = 0;
seq__8239_8395 = G__8416;
chunk__8240_8396 = G__8417;
count__8241_8397 = G__8418;
i__8242_8398 = G__8419;
continue;
}
}
} else
{}
}
break;
}
return e__7761__auto__;
});
lt.plugins.chrometools.reconnect_button = (function reconnect_button(label,tab){var e__7761__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"reconnect-chrome button"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),[cljs.core.str("Reconnect: "),cljs.core.str(new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(tab))].join('')], null),lt.plugins.chrometools.dismiss_button.call(null,label)], null));var seq__8251_8420 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7761__auto__){
return (function (e){var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"chrome.client.remote","chrome.client.remote",4091478727));return lt.plugins.chrometools.connect_tab.call(null,client,tab);
});})(e__7761__auto__))
], null)));var chunk__8252_8421 = null;var count__8253_8422 = 0;var i__8254_8423 = 0;while(true){
if((i__8254_8423 < count__8253_8422))
{var vec__8255_8424 = cljs.core._nth.call(null,chunk__8252_8421,i__8254_8423);var ev__7762__auto___8425 = cljs.core.nth.call(null,vec__8255_8424,0,null);var func__7763__auto___8426 = cljs.core.nth.call(null,vec__8255_8424,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___8425,func__7763__auto___8426);
{
var G__8427 = seq__8251_8420;
var G__8428 = chunk__8252_8421;
var G__8429 = count__8253_8422;
var G__8430 = (i__8254_8423 + 1);
seq__8251_8420 = G__8427;
chunk__8252_8421 = G__8428;
count__8253_8422 = G__8429;
i__8254_8423 = G__8430;
continue;
}
} else
{var temp__4092__auto___8431 = cljs.core.seq.call(null,seq__8251_8420);if(temp__4092__auto___8431)
{var seq__8251_8432__$1 = temp__4092__auto___8431;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8251_8432__$1))
{var c__7112__auto___8433 = cljs.core.chunk_first.call(null,seq__8251_8432__$1);{
var G__8434 = cljs.core.chunk_rest.call(null,seq__8251_8432__$1);
var G__8435 = c__7112__auto___8433;
var G__8436 = cljs.core.count.call(null,c__7112__auto___8433);
var G__8437 = 0;
seq__8251_8420 = G__8434;
chunk__8252_8421 = G__8435;
count__8253_8422 = G__8436;
i__8254_8423 = G__8437;
continue;
}
} else
{var vec__8256_8438 = cljs.core.first.call(null,seq__8251_8432__$1);var ev__7762__auto___8439 = cljs.core.nth.call(null,vec__8256_8438,0,null);var func__7763__auto___8440 = cljs.core.nth.call(null,vec__8256_8438,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___8439,func__7763__auto___8440);
{
var G__8441 = cljs.core.next.call(null,seq__8251_8432__$1);
var G__8442 = null;
var G__8443 = 0;
var G__8444 = 0;
seq__8251_8420 = G__8441;
chunk__8252_8421 = G__8442;
count__8253_8422 = G__8443;
i__8254_8423 = G__8444;
continue;
}
}
} else
{}
}
break;
}
return e__7761__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools","reconnect-label","lt.plugins.chrometools/reconnect-label",2855517336),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reconnect-label","reconnect-label",3615163504),null], null), null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,tab){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab","tab",1014018823),tab], null));
return lt.plugins.chrometools.reconnect_button.call(null,this$,tab);
}));
lt.plugins.chrometools.__BEH__on_remove_reconnect_label = (function __BEH__on_remove_reconnect_label(this$){return lt.object.destroy_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools","on-remove-reconnect-label","lt.plugins.chrometools/on-remove-reconnect-label",1411327027),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.__BEH__on_remove_reconnect_label,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remove-label","remove-label",3359640541),null], null), null));
lt.plugins.chrometools.__BEH__remove_label = (function __BEH__remove_label(this$,that){var id = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var labels = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"reconnect-label","reconnect-label",3615163504));var seq__8263 = cljs.core.seq.call(null,labels);var chunk__8265 = null;var count__8266 = 0;var i__8267 = 0;while(true){
if((i__8267 < count__8266))
{var label = cljs.core._nth.call(null,chunk__8265,i__8267);if(cljs.core.truth_((function (){var and__6352__auto__ = label;if(cljs.core.truth_(and__6352__auto__))
{return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,label))),id);
} else
{return and__6352__auto__;
}
})()))
{lt.object.raise.call(null,label,new cljs.core.Keyword(null,"remove-label","remove-label",3359640541));
{
var G__8445 = seq__8263;
var G__8446 = chunk__8265;
var G__8447 = count__8266;
var G__8448 = (i__8267 + 1);
seq__8263 = G__8445;
chunk__8265 = G__8446;
count__8266 = G__8447;
i__8267 = G__8448;
continue;
}
} else
{{
var G__8449 = seq__8263;
var G__8450 = chunk__8265;
var G__8451 = count__8266;
var G__8452 = (i__8267 + 1);
seq__8263 = G__8449;
chunk__8265 = G__8450;
count__8266 = G__8451;
i__8267 = G__8452;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8263);if(temp__4092__auto__)
{var seq__8263__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8263__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8263__$1);{
var G__8453 = cljs.core.chunk_rest.call(null,seq__8263__$1);
var G__8454 = c__7112__auto__;
var G__8455 = cljs.core.count.call(null,c__7112__auto__);
var G__8456 = 0;
seq__8263 = G__8453;
chunk__8265 = G__8454;
count__8266 = G__8455;
i__8267 = G__8456;
continue;
}
} else
{var label = cljs.core.first.call(null,seq__8263__$1);if(cljs.core.truth_((function (){var and__6352__auto__ = label;if(cljs.core.truth_(and__6352__auto__))
{return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,label))),id);
} else
{return and__6352__auto__;
}
})()))
{lt.object.raise.call(null,label,new cljs.core.Keyword(null,"remove-label","remove-label",3359640541));
{
var G__8457 = cljs.core.next.call(null,seq__8263__$1);
var G__8458 = null;
var G__8459 = 0;
var G__8460 = 0;
seq__8263 = G__8457;
chunk__8265 = G__8458;
count__8266 = G__8459;
i__8267 = G__8460;
continue;
}
} else
{{
var G__8461 = cljs.core.next.call(null,seq__8263__$1);
var G__8462 = null;
var G__8463 = 0;
var G__8464 = 0;
seq__8263 = G__8461;
chunk__8265 = G__8462;
count__8266 = G__8463;
i__8267 = G__8464;
continue;
}
}
}
} else
{return null;
}
}
break;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools","remove-label","lt.plugins.chrometools/remove-label",3639657259),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.__BEH__remove_label,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connect","connect",1965255772),null], null), null));
lt.plugins.chrometools.tab_preview = (function tab_preview(action,tab){var e__7761__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),new cljs.core.Keyword(null,"faviconUrl","faviconUrl",4346893869).cljs$core$IFn$_invoke$arity$1(tab)], null)], null),new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(tab)], null));var seq__8275_8465 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7761__auto__){
return (function (e){var temp__4092__auto___8469 = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"popup","popup",1120756766));if(cljs.core.truth_(temp__4092__auto___8469))
{var p_8470 = temp__4092__auto___8469;lt.object.raise.call(null,p_8470,new cljs.core.Keyword(null,"close!","close!",3951350939));
} else
{}
return action.call(null,tab);
});})(e__7761__auto__))
], null)));var chunk__8276_8466 = null;var count__8277_8467 = 0;var i__8278_8468 = 0;while(true){
if((i__8278_8468 < count__8277_8467))
{var vec__8279_8471 = cljs.core._nth.call(null,chunk__8276_8466,i__8278_8468);var ev__7762__auto___8472 = cljs.core.nth.call(null,vec__8279_8471,0,null);var func__7763__auto___8473 = cljs.core.nth.call(null,vec__8279_8471,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___8472,func__7763__auto___8473);
{
var G__8474 = seq__8275_8465;
var G__8475 = chunk__8276_8466;
var G__8476 = count__8277_8467;
var G__8477 = (i__8278_8468 + 1);
seq__8275_8465 = G__8474;
chunk__8276_8466 = G__8475;
count__8277_8467 = G__8476;
i__8278_8468 = G__8477;
continue;
}
} else
{var temp__4092__auto___8478 = cljs.core.seq.call(null,seq__8275_8465);if(temp__4092__auto___8478)
{var seq__8275_8479__$1 = temp__4092__auto___8478;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8275_8479__$1))
{var c__7112__auto___8480 = cljs.core.chunk_first.call(null,seq__8275_8479__$1);{
var G__8481 = cljs.core.chunk_rest.call(null,seq__8275_8479__$1);
var G__8482 = c__7112__auto___8480;
var G__8483 = cljs.core.count.call(null,c__7112__auto___8480);
var G__8484 = 0;
seq__8275_8465 = G__8481;
chunk__8276_8466 = G__8482;
count__8277_8467 = G__8483;
i__8278_8468 = G__8484;
continue;
}
} else
{var vec__8280_8485 = cljs.core.first.call(null,seq__8275_8479__$1);var ev__7762__auto___8486 = cljs.core.nth.call(null,vec__8280_8485,0,null);var func__7763__auto___8487 = cljs.core.nth.call(null,vec__8280_8485,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___8486,func__7763__auto___8487);
{
var G__8488 = cljs.core.next.call(null,seq__8275_8479__$1);
var G__8489 = null;
var G__8490 = 0;
var G__8491 = 0;
seq__8275_8465 = G__8488;
chunk__8276_8466 = G__8489;
count__8277_8467 = G__8490;
i__8278_8468 = G__8491;
continue;
}
}
} else
{}
}
break;
}
return e__7761__auto__;
});
lt.plugins.chrometools.connect_tab = (function connect_tab(client,tab){try{lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"socket","socket",4411822821),lt.plugins.chrometools.socket.call(null,client,new cljs.core.Keyword(null,"webSocketDebuggerUrl","webSocketDebuggerUrl",667502233).cljs$core$IFn$_invoke$arity$1(tab)),new cljs.core.Keyword(null,"commands","commands",4706336250),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"editor.eval.cljs.exec","editor.eval.cljs.exec",866638030),null,new cljs.core.Keyword(null,"editor.eval.css","editor.eval.css",1083014276),null,new cljs.core.Keyword(null,"editor.eval.js","editor.eval.js",1847417804),null,new cljs.core.Keyword(null,"chrome.remote.debug","chrome.remote.debug",1380405521),null], null), null),new cljs.core.Keyword(null,"tab","tab",1014018823),tab,new cljs.core.Keyword(null,"name","name",1017277949),[cljs.core.str("Chrome: "),cljs.core.str(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(tab))].join(''),new cljs.core.Keyword(null,"type","type",1017479852),"Chrome"], null));
return cljs.core.swap_BANG_.call(null,lt.plugins.chrometools.connected_tabs,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(tab),client);
}catch (e8282){var e = e8282;lt.object.raise.call(null,client,new cljs.core.Keyword(null,"close!","close!",3951350939));
lt.objs.notifos.set_msg_BANG_.call(null,"Failed to connect. Is dev tools open?");
return null;
}});
lt.plugins.chrometools.select_tab = (function select_tab(client,tabs){var action = cljs.core.partial.call(null,lt.plugins.chrometools.connect_tab,client);var p = lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Select which tab to attach to",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul#chrome-tabs","ul#chrome-tabs",1003516535),cljs.core.map.call(null,((function (action){
return (function (p1__8283_SHARP_){return lt.plugins.chrometools.tab_preview.call(null,action,p1__8283_SHARP_);
});})(action))
,cljs.core.filter.call(null,((function (action){
return (function (p1__8284_SHARP_){return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p1__8284_SHARP_),"page")) && ((cljs.core.deref.call(null,lt.plugins.chrometools.connected_tabs).call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__8284_SHARP_)) == null));
});})(action))
,tabs))], null)], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"cancel",new cljs.core.Keyword(null,"action","action",3885920680),((function (action){
return (function (){return lt.object.raise.call(null,client,new cljs.core.Keyword(null,"close!","close!",3951350939));
});})(action))
], null)], null)], null));return null;
});
lt.plugins.chrometools.handle_cb = (function handle_cb(cbid,command,data){return lt.object.raise.call(null,lt.objs.clients.clients,new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cbid,command,data], null));
});
/**
* Get longest common sequence from start of each sequence
*/
lt.plugins.chrometools.lcm_start = (function lcm_start(coll1,coll2){var i = 0;while(true){
if((cljs.core._EQ_.call(null,cljs.core.nth.call(null,coll1,i),cljs.core.nth.call(null,coll2,i))) && ((i < cljs.core.count.call(null,coll1))))
{{
var G__8492 = (i + 1);
i = G__8492;
continue;
}
} else
{return cljs.core.take.call(null,i,coll1);
}
break;
}
});
lt.plugins.chrometools.longest_path_match = (function longest_path_match(path,candidates){var path__GT_parts = (function (p){return cljs.core.drop.call(null,1,cljs.core.reverse.call(null,cljs.core.filter.call(null,cljs.core.not_empty,clojure.string.split.call(null,p,"/"))));
});var parts = path__GT_parts.call(null,path);var counts = cljs.core.map.call(null,((function (path__GT_parts,parts){
return (function (c){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",1108755585),cljs.core.count.call(null,lt.plugins.chrometools.lcm_start.call(null,parts,path__GT_parts.call(null,c))),new cljs.core.Keyword(null,"path","path",1017337751),c], null);
});})(path__GT_parts,parts))
,candidates);var n = new cljs.core.Keyword(null,"count","count",1108755585).cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.max_key,new cljs.core.Keyword(null,"count","count",1108755585)),counts));return cljs.core.map.call(null,new cljs.core.Keyword(null,"path","path",1017337751),cljs.core.filter.call(null,((function (path__GT_parts,parts,counts,n){
return (function (p1__8285_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"count","count",1108755585).cljs$core$IFn$_invoke$arity$1(p1__8285_SHARP_),n);
});})(path__GT_parts,parts,counts,n))
,counts));
});
lt.plugins.chrometools.find_script = (function find_script(client,path){var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,client).call(null,new cljs.core.Keyword(null,"scripts","scripts",2940419194)),lt.objs.files.basename.call(null,path));if(cljs.core.truth_(temp__4092__auto__))
{var scripts = temp__4092__auto__;var matches = cljs.core.set.call(null,lt.plugins.chrometools.longest_path_match.call(null,path,cljs.core.keys.call(null,scripts)));return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (matches,scripts,temp__4092__auto__){
return (function (p1__8286_SHARP_){return cljs.core.contains_QMARK_.call(null,matches,cljs.core.first.call(null,p1__8286_SHARP_));
});})(matches,scripts,temp__4092__auto__))
,scripts));
} else
{return null;
}
});
lt.plugins.chrometools.find_script_by_id = (function find_script_by_id(client,id){return cljs.core.first.call(null,(function (){var iter__7081__auto__ = (function iter__8303(s__8304){return (new cljs.core.LazySeq(null,(function (){var s__8304__$1 = s__8304;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8304__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__8314 = cljs.core.first.call(null,xs__4579__auto__);var basename = cljs.core.nth.call(null,vec__8314,0,null);var scripts = cljs.core.nth.call(null,vec__8314,1,null);var iterys__7077__auto__ = ((function (s__8304__$1,vec__8314,basename,scripts,xs__4579__auto__,temp__4092__auto__){
return (function iter__8305(s__8306){return (new cljs.core.LazySeq(null,((function (s__8304__$1,vec__8314,basename,scripts,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__8306__$1 = s__8306;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__8306__$1);if(temp__4092__auto____$1)
{var s__8306__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__8306__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__8306__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__8308 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__8307 = 0;while(true){
if((i__8307 < size__7080__auto__))
{var vec__8317 = cljs.core._nth.call(null,c__7079__auto__,i__8307);var _ = cljs.core.nth.call(null,vec__8317,0,null);var script = cljs.core.nth.call(null,vec__8317,1,null);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(script),id))
{cljs.core.chunk_append.call(null,b__8308,cljs.core.assoc.call(null,script,new cljs.core.Keyword(null,"basename","basename",3588138062),basename));
{
var G__8493 = (i__8307 + 1);
i__8307 = G__8493;
continue;
}
} else
{{
var G__8494 = (i__8307 + 1);
i__8307 = G__8494;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8308),iter__8305.call(null,cljs.core.chunk_rest.call(null,s__8306__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8308),null);
}
} else
{var vec__8318 = cljs.core.first.call(null,s__8306__$2);var _ = cljs.core.nth.call(null,vec__8318,0,null);var script = cljs.core.nth.call(null,vec__8318,1,null);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(script),id))
{return cljs.core.cons.call(null,cljs.core.assoc.call(null,script,new cljs.core.Keyword(null,"basename","basename",3588138062),basename),iter__8305.call(null,cljs.core.rest.call(null,s__8306__$2)));
} else
{{
var G__8495 = cljs.core.rest.call(null,s__8306__$2);
s__8306__$1 = G__8495;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__8304__$1,vec__8314,basename,scripts,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__8304__$1,vec__8314,basename,scripts,xs__4579__auto__,temp__4092__auto__))
;var fs__7078__auto__ = cljs.core.seq.call(null,iterys__7077__auto__.call(null,scripts));if(fs__7078__auto__)
{return cljs.core.concat.call(null,fs__7078__auto__,iter__8303.call(null,cljs.core.rest.call(null,s__8304__$1)));
} else
{{
var G__8496 = cljs.core.rest.call(null,s__8304__$1);
s__8304__$1 = G__8496;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7081__auto__.call(null,new cljs.core.Keyword(null,"scripts","scripts",2940419194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)));
})());
});
lt.plugins.chrometools.script_exists_QMARK_ = (function script_exists_QMARK_(client,id,cb){return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.canSetScriptSource",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scriptId","scriptId",606324408),id], null)], null),(function (res){return cb.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res)));
}));
});
lt.plugins.chrometools.remove_script_BANG_ = (function remove_script_BANG_(client,path,id){var vec__8321 = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__8319_SHARP_){return cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__8319_SHARP_)));
}),lt.plugins.chrometools.find_script.call(null,client,path)));var k = cljs.core.nth.call(null,vec__8321,0,null);var v = cljs.core.nth.call(null,vec__8321,1,null);return lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scripts","scripts",2940419194),lt.objs.files.basename.call(null,path)], null),cljs.core.dissoc,k);
});
lt.plugins.chrometools.must_eval_file_QMARK_ = (function must_eval_file_QMARK_(client,msg){if(cljs.core.truth_(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg))))
{return (cljs.core.not.call(null,new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg)))) || (cljs.core.not.call(null,lt.plugins.chrometools.find_script.call(null,client,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg)))));
} else
{return null;
}
});
/**
* Get current call frame id from client. Will only be available is debugger is
* active and paused
*/
lt.plugins.chrometools.__GT_call_frame_id = (function __GT_call_frame_id(client){var temp__4092__auto__ = new cljs.core.Keyword(null,"selected-frame","selected-frame",1773798189).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"debugger","debugger",1561716627).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)));if(cljs.core.truth_(temp__4092__auto__))
{var selected_frame = temp__4092__auto__;return new cljs.core.Keyword(null,"callFrameId","callFrameId",4288173724).cljs$core$IFn$_invoke$arity$1(selected_frame);
} else
{return null;
}
});
lt.plugins.chrometools.__BEH__handle_send_BANG_ = (function __BEH__handle_send_BANG_(this$,msg){return lt.object.raise.call(null,this$,cljs.core.keyword.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",1964298941).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str("!")].join('')),msg);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools","handle-send!","lt.plugins.chrometools/handle-send!",3261099966),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.__BEH__handle_send_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"send!","send!",1123226891),null], null), null));
lt.plugins.chrometools.cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
lt.plugins.chrometools.id = cljs.core.atom.call(null,0);
lt.plugins.chrometools.next_id = (function next_id(){return cljs.core.swap_BANG_.call(null,lt.plugins.chrometools.id,cljs.core.inc);
});
lt.plugins.chrometools.connected_tabs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(!lt.util.load.provided_QMARK_('lt.plugins.chrometools.devtools')) {
goog.provide('lt.plugins.chrometools.devtools');
goog.require('cljs.core');
goog.require('lt.plugins.chrometools');
goog.require('crate.binding');
goog.require('crate.binding');
goog.require('lt.plugins.chrometools');
goog.require('lt.util.dom');
goog.require('lt.util.dom');
goog.require('lt.object');
goog.require('lt.object');
/**
* @param {...*} var_args
*/
lt.plugins.chrometools.devtools.make_inspector_object = (function() { 
var make_inspector_object__delegate = function (more){return cljs.core.apply.call(null,cljs.core.partial.call(null,lt.object.create,new cljs.core.Keyword("lt.plugins.chrometools.devtools","inspector-object","lt.plugins.chrometools.devtools/inspector-object",4510787313)),more);
};
var make_inspector_object = function (var_args){
var more = null;if (arguments.length > 0) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return make_inspector_object__delegate.call(this,more);};
make_inspector_object.cljs$lang$maxFixedArity = 0;
make_inspector_object.cljs$lang$applyTo = (function (arglist__8995){
var more = cljs.core.seq(arglist__8995);
return make_inspector_object__delegate(more);
});
make_inspector_object.cljs$core$IFn$_invoke$arity$variadic = make_inspector_object__delegate;
return make_inspector_object;
})()
;
lt.plugins.chrometools.devtools.format_value = (function format_value(v){var val = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(v);if(cljs.core._EQ_.call(null,val,"undefined"))
{return "undefined";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(v),"string"))
{return cljs.core.pr_str.call(null,val);
} else
{if((val === true) || (val === false))
{return cljs.core.pr_str.call(null,val);
} else
{if(((val == null)) || (cljs.core.empty_QMARK_.call(null,val)))
{return "null";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(v);
} else
{return null;
}
}
}
}
}
});
lt.plugins.chrometools.devtools.i_compare = (function i_compare(a,b){var ia = a.indexOf("__");var ib = b.indexOf("__");if((cljs.core._EQ_.call(null,ia,-1)) && (cljs.core._EQ_.call(null,ib,-1)))
{return cljs.core.compare.call(null,a,b);
} else
{if(((ia > -1)) && ((ib > -1)))
{return cljs.core.compare.call(null,a,b);
} else
{if((ia > -1))
{return 1;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return -1;
} else
{return null;
}
}
}
}
});
lt.plugins.chrometools.devtools.__GT_name = (function __GT_name(obj){var n = (function (){var or__6364__auto__ = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(obj);if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{var or__6364__auto____$1 = new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(obj));if(cljs.core.truth_(or__6364__auto____$1))
{return or__6364__auto____$1;
} else
{var or__6364__auto____$2 = new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(obj);if(cljs.core.truth_(or__6364__auto____$2))
{return or__6364__auto____$2;
} else
{return "UnknownObject";
}
}
}
})();if((n.indexOf("e.fn.e.init") > -1))
{return [cljs.core.str("jQuery"),cljs.core.str(cljs.core.subs.call(null,n,11))].join('');
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return n;
} else
{return null;
}
}
});
lt.plugins.chrometools.devtools.desc = (function desc(this$,obj){var e__7761__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",1013907482),lt.plugins.chrometools.devtools.__GT_name.call(null,obj)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(obj))?[cljs.core.str(": "),cljs.core.str(new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(obj)))].join(''):null)], null));var seq__8941_8996 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7761__auto__){
return (function (){if(cljs.core.truth_(new cljs.core.Keyword(null,"open","open",1017321916).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",1017321916),false], null));
} else
{lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",1017321916),true], null));
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"children","children",2673430897).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return null;
} else
{return lt.plugins.chrometools.send.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),1,new cljs.core.Keyword(null,"method","method",4231316563),"Runtime.getProperties",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"objectId","objectId",1104399404),(function (){var or__6364__auto__ = new cljs.core.Keyword(null,"objectId","objectId",1104399404).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(obj));if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return new cljs.core.Keyword(null,"objectId","objectId",1104399404).cljs$core$IFn$_invoke$arity$1(obj);
}
})(),new cljs.core.Keyword(null,"ownProperties","ownProperties",1958141131),true], null)], null),((function (e__7761__auto__){
return (function (d){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",2673430897),new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(d))], null));
});})(e__7761__auto__))
);
}
}
});})(e__7761__auto__))
], null)));var chunk__8942_8997 = null;var count__8943_8998 = 0;var i__8944_8999 = 0;while(true){
if((i__8944_8999 < count__8943_8998))
{var vec__8945_9000 = cljs.core._nth.call(null,chunk__8942_8997,i__8944_8999);var ev__7762__auto___9001 = cljs.core.nth.call(null,vec__8945_9000,0,null);var func__7763__auto___9002 = cljs.core.nth.call(null,vec__8945_9000,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___9001,func__7763__auto___9002);
{
var G__9003 = seq__8941_8996;
var G__9004 = chunk__8942_8997;
var G__9005 = count__8943_8998;
var G__9006 = (i__8944_8999 + 1);
seq__8941_8996 = G__9003;
chunk__8942_8997 = G__9004;
count__8943_8998 = G__9005;
i__8944_8999 = G__9006;
continue;
}
} else
{var temp__4092__auto___9007 = cljs.core.seq.call(null,seq__8941_8996);if(temp__4092__auto___9007)
{var seq__8941_9008__$1 = temp__4092__auto___9007;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8941_9008__$1))
{var c__7112__auto___9009 = cljs.core.chunk_first.call(null,seq__8941_9008__$1);{
var G__9010 = cljs.core.chunk_rest.call(null,seq__8941_9008__$1);
var G__9011 = c__7112__auto___9009;
var G__9012 = cljs.core.count.call(null,c__7112__auto___9009);
var G__9013 = 0;
seq__8941_8996 = G__9010;
chunk__8942_8997 = G__9011;
count__8943_8998 = G__9012;
i__8944_8999 = G__9013;
continue;
}
} else
{var vec__8946_9014 = cljs.core.first.call(null,seq__8941_9008__$1);var ev__7762__auto___9015 = cljs.core.nth.call(null,vec__8946_9014,0,null);var func__7763__auto___9016 = cljs.core.nth.call(null,vec__8946_9014,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___9015,func__7763__auto___9016);
{
var G__9017 = cljs.core.next.call(null,seq__8941_9008__$1);
var G__9018 = null;
var G__9019 = 0;
var G__9020 = 0;
seq__8941_8996 = G__9017;
chunk__8942_8997 = G__9018;
count__8943_8998 = G__9019;
i__8944_8999 = G__9020;
continue;
}
}
} else
{}
}
break;
}
return e__7761__auto__;
});
lt.plugins.chrometools.devtools.props = (function props(this$,children){var e__7761__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7081__auto__ = (function iter__8957(s__8958){return (new cljs.core.LazySeq(null,(function (){var s__8958__$1 = s__8958;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8958__$1);if(temp__4092__auto__)
{var s__8958__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8958__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__8958__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__8960 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__8959 = 0;while(true){
if((i__8959 < size__7080__auto__))
{var c = cljs.core._nth.call(null,c__7079__auto__,i__8959);cljs.core.chunk_append.call(null,b__8960,(cljs.core.truth_((function (){var and__6352__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c)),"object");if(and__6352__auto__)
{return new cljs.core.Keyword(null,"objectId","objectId",1104399404).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c));
} else
{return and__6352__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),lt.object.__GT_content.call(null,lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.chrometools.devtools","inspector-object","lt.plugins.chrometools.devtools/inspector-object",4510787313),new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),c))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",1013907482),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(c)], null),": ",(function (){var or__6364__auto__ = new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c));if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return [cljs.core.str(lt.plugins.chrometools.devtools.format_value.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c)))].join('');
}
})()], null)));
{
var G__9021 = (i__8959 + 1);
i__8959 = G__9021;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8960),iter__8957.call(null,cljs.core.chunk_rest.call(null,s__8958__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8960),null);
}
} else
{var c = cljs.core.first.call(null,s__8958__$2);return cljs.core.cons.call(null,(cljs.core.truth_((function (){var and__6352__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c)),"object");if(and__6352__auto__)
{return new cljs.core.Keyword(null,"objectId","objectId",1104399404).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c));
} else
{return and__6352__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),lt.object.__GT_content.call(null,lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.chrometools.devtools","inspector-object","lt.plugins.chrometools.devtools/inspector-object",4510787313),new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),c))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",1013907482),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(c)], null),": ",(function (){var or__6364__auto__ = new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c));if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return [cljs.core.str(lt.plugins.chrometools.devtools.format_value.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c)))].join('');
}
})()], null)),iter__8957.call(null,cljs.core.rest.call(null,s__8958__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7081__auto__.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1017277949),lt.plugins.chrometools.devtools.i_compare,children));
})()], null));var seq__8961_9022 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8962_9023 = null;var count__8963_9024 = 0;var i__8964_9025 = 0;while(true){
if((i__8964_9025 < count__8963_9024))
{var vec__8965_9026 = cljs.core._nth.call(null,chunk__8962_9023,i__8964_9025);var ev__7762__auto___9027 = cljs.core.nth.call(null,vec__8965_9026,0,null);var func__7763__auto___9028 = cljs.core.nth.call(null,vec__8965_9026,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___9027,func__7763__auto___9028);
{
var G__9029 = seq__8961_9022;
var G__9030 = chunk__8962_9023;
var G__9031 = count__8963_9024;
var G__9032 = (i__8964_9025 + 1);
seq__8961_9022 = G__9029;
chunk__8962_9023 = G__9030;
count__8963_9024 = G__9031;
i__8964_9025 = G__9032;
continue;
}
} else
{var temp__4092__auto___9033 = cljs.core.seq.call(null,seq__8961_9022);if(temp__4092__auto___9033)
{var seq__8961_9034__$1 = temp__4092__auto___9033;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8961_9034__$1))
{var c__7112__auto___9035 = cljs.core.chunk_first.call(null,seq__8961_9034__$1);{
var G__9036 = cljs.core.chunk_rest.call(null,seq__8961_9034__$1);
var G__9037 = c__7112__auto___9035;
var G__9038 = cljs.core.count.call(null,c__7112__auto___9035);
var G__9039 = 0;
seq__8961_9022 = G__9036;
chunk__8962_9023 = G__9037;
count__8963_9024 = G__9038;
i__8964_9025 = G__9039;
continue;
}
} else
{var vec__8966_9040 = cljs.core.first.call(null,seq__8961_9034__$1);var ev__7762__auto___9041 = cljs.core.nth.call(null,vec__8966_9040,0,null);var func__7763__auto___9042 = cljs.core.nth.call(null,vec__8966_9040,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___9041,func__7763__auto___9042);
{
var G__9043 = cljs.core.next.call(null,seq__8961_9034__$1);
var G__9044 = null;
var G__9045 = 0;
var G__9046 = 0;
seq__8961_9022 = G__9043;
chunk__8962_9023 = G__9044;
count__8963_9024 = G__9045;
i__8964_9025 = G__9046;
continue;
}
}
} else
{}
}
break;
}
return e__7761__auto__;
});
lt.plugins.chrometools.devtools.__GT_open = (function __GT_open(this$){if(cljs.core.truth_(new cljs.core.Keyword(null,"open","open",1017321916).cljs$core$IFn$_invoke$arity$1(this$)))
{return "inspector-object open";
} else
{return "inspector-object";
}
});
lt.plugins.chrometools.devtools.inspector__GT_result = (function inspector__GT_result(client,o){var res = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(o);var data = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res);if(cljs.core.truth_(new cljs.core.Keyword(null,"wasThrown","wasThrown",3712175619).cljs$core$IFn$_invoke$arity$1(res)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ex","ex",1013907493),new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(data)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),(function (){var pred__8970 = cljs.core._EQ_;var expr__8971 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(pred__8970.call(null,"object",expr__8971)))
{return lt.object.__GT_content.call(null,lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.chrometools.devtools","inspector-object","lt.plugins.chrometools.devtools/inspector-object",4510787313),client,data));
} else
{var or__6364__auto__ = new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(data));
}
}
})()], null);
}
});
lt.plugins.chrometools.devtools.clear_unused_inspectors = (function clear_unused_inspectors(){var seq__8979 = cljs.core.seq.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"inspector.object","inspector.object",1285492104)));var chunk__8981 = null;var count__8982 = 0;var i__8983 = 0;while(true){
if((i__8983 < count__8982))
{var obj = cljs.core._nth.call(null,chunk__8981,i__8983);if((cljs.core.not.call(null,lt.object.__GT_content.call(null,obj))) || (cljs.core.not.call(null,lt.util.dom.parents.call(null,lt.object.__GT_content.call(null,obj),new cljs.core.Keyword(null,"body","body",1016933652)))))
{lt.object.destroy_BANG_.call(null,obj);
{
var G__9047 = seq__8979;
var G__9048 = chunk__8981;
var G__9049 = count__8982;
var G__9050 = (i__8983 + 1);
seq__8979 = G__9047;
chunk__8981 = G__9048;
count__8982 = G__9049;
i__8983 = G__9050;
continue;
}
} else
{{
var G__9051 = seq__8979;
var G__9052 = chunk__8981;
var G__9053 = count__8982;
var G__9054 = (i__8983 + 1);
seq__8979 = G__9051;
chunk__8981 = G__9052;
count__8982 = G__9053;
i__8983 = G__9054;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8979);if(temp__4092__auto__)
{var seq__8979__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8979__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8979__$1);{
var G__9055 = cljs.core.chunk_rest.call(null,seq__8979__$1);
var G__9056 = c__7112__auto__;
var G__9057 = cljs.core.count.call(null,c__7112__auto__);
var G__9058 = 0;
seq__8979 = G__9055;
chunk__8981 = G__9056;
count__8982 = G__9057;
i__8983 = G__9058;
continue;
}
} else
{var obj = cljs.core.first.call(null,seq__8979__$1);if((cljs.core.not.call(null,lt.object.__GT_content.call(null,obj))) || (cljs.core.not.call(null,lt.util.dom.parents.call(null,lt.object.__GT_content.call(null,obj),new cljs.core.Keyword(null,"body","body",1016933652)))))
{lt.object.destroy_BANG_.call(null,obj);
{
var G__9059 = cljs.core.next.call(null,seq__8979__$1);
var G__9060 = null;
var G__9061 = 0;
var G__9062 = 0;
seq__8979 = G__9059;
chunk__8981 = G__9060;
count__8982 = G__9061;
i__8983 = G__9062;
continue;
}
} else
{{
var G__9063 = cljs.core.next.call(null,seq__8979__$1);
var G__9064 = null;
var G__9065 = 0;
var G__9066 = 0;
seq__8979 = G__9063;
chunk__8981 = G__9064;
count__8982 = G__9065;
i__8983 = G__9066;
continue;
}
}
}
} else
{return null;
}
}
break;
}
});
lt.plugins.chrometools.devtools.__BEH__clean_inspectors_timer = (function __BEH__clean_inspectors_timer(this$){return lt.plugins.chrometools.devtools.every.call(null,60000,lt.plugins.chrometools.devtools.clear_unused_inspectors);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools.devtools","clean-inspectors-timer","lt.plugins.chrometools.devtools/clean-inspectors-timer",913399230),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.devtools.__BEH__clean_inspectors_timer,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",1017141378),null], null), null));
lt.plugins.chrometools.devtools.__BEH__clear_inspector_object = (function __BEH__clear_inspector_object(this$){var temp__4092__auto__ = (function (){var or__6364__auto__ = new cljs.core.Keyword(null,"objectId","objectId",1104399404).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return new cljs.core.Keyword(null,"objectId","objectId",1104399404).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var id = temp__4092__auto__;return lt.plugins.chrometools.send.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Runtime.releaseObject",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"objectId","objectId",1104399404),id], null)], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools.devtools","clear-inspector-object","lt.plugins.chrometools.devtools/clear-inspector-object",728183665),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.devtools.__BEH__clear_inspector_object,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"destroy","destroy",2571277164),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools.devtools","inspector-object","lt.plugins.chrometools.devtools/inspector-object",4510787313),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspector.object","inspector.object",1285492104),null], null), null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,client,m){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",3951159101),client,new cljs.core.Keyword(null,"info","info",1017141280),m], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),crate.binding.bound.call(null,this$,lt.plugins.chrometools.devtools.__GT_open)], null),lt.plugins.chrometools.devtools.desc.call(null,this$,m),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),crate.binding.bound.call(null,crate.binding.subatom.call(null,this$,new cljs.core.Keyword(null,"children","children",2673430897)),cljs.core.partial.call(null,lt.plugins.chrometools.devtools.props,this$))], null)], null);
}));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.chrometools.filewatch')) {
goog.provide('lt.plugins.chrometools.filewatch');
goog.require('cljs.core');
goog.require('lt.plugins.chrometools');
goog.require('lt.objs.files');
goog.require('lt.objs.opener');
goog.require('lt.plugins.chrometools');
goog.require('lt.util.dom');
goog.require('lt.plugins.js');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.util.dom');
goog.require('clojure.string');
goog.require('lt.plugins.chrometools.devtools');
goog.require('lt.objs.files');
goog.require('lt.objs.opener');
goog.require('lt.objs.clients');
goog.require('clojure.string');
goog.require('lt.plugins.chrometools.devtools');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.plugins.chrometools');
goog.require('lt.objs.clients');
lt.plugins.chrometools.filewatch.fs = require("fs");
/**
* Called when JS file has been read
*/
lt.plugins.chrometools.filewatch.js_file_read = (function js_file_read(client,script,err,data){if(cljs.core.truth_(err))
{lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Failed to read file "),cljs.core.str(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(script))].join(''));
return cljs.core.println.call(null,err);
} else
{return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.setScriptSource",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scriptId","scriptId",606324408),new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(script),new cljs.core.Keyword(null,"scriptSource","scriptSource",3711898680),data], null)], null),(function (r){var temp__4090__auto__ = new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(r);if(cljs.core.truth_(temp__4090__auto__))
{var error = temp__4090__auto__;lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Failed to update remote source for file file "),cljs.core.str(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(script))].join(''));
return cljs.core.println.call(null,error);
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Updated source for file "),cljs.core.str(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(script))].join(''));
}
}));
}
});
lt.plugins.chrometools.filewatch.js_file_change = (function js_file_change(client,path){var temp__4092__auto__ = lt.plugins.chrometools.find_script.call(null,client,path);if(cljs.core.truth_(temp__4092__auto__))
{var script = temp__4092__auto__;return lt.plugins.chrometools.filewatch.fs.readFile(path,"utf8",cljs.core.partial.call(null,lt.plugins.chrometools.filewatch.js_file_read,client,cljs.core.first.call(null,cljs.core.vals.call(null,script))));
} else
{return null;
}
});
lt.plugins.chrometools.filewatch.css_file_change = (function css_file_change(client,path){return lt.plugins.chrometools.filewatch.fs.readFile(path,"utf8",(function (err,data){return lt.object.raise.call(null,client,new cljs.core.Keyword(null,"editor.eval.css!","editor.eval.css!",3156315329),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"code","code",1016963423),data], null)], null));
}));
});
/**
* Listener for watch-file. Calls relevant change function based on file type.
*/
lt.plugins.chrometools.filewatch.listener = (function listener(p__9295,e,filename){var map__9298 = p__9295;var map__9298__$1 = ((cljs.core.seq_QMARK_.call(null,map__9298))?cljs.core.apply.call(null,cljs.core.hash_map,map__9298):map__9298);var is_dir = cljs.core.get.call(null,map__9298__$1,new cljs.core.Keyword(null,"is-dir","is-dir",4127610076));var path = cljs.core.get.call(null,map__9298__$1,new cljs.core.Keyword(null,"path","path",1017337751));var client = cljs.core.get.call(null,map__9298__$1,new cljs.core.Keyword(null,"client","client",3951159101));cljs.core.println.call(null,e,filename);
if(cljs.core.truth_((function (){var and__6352__auto__ = client;if(cljs.core.truth_(and__6352__auto__))
{return new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client));
} else
{return and__6352__auto__;
}
})()))
{if(cljs.core.truth_((function (){var and__6352__auto__ = cljs.core.empty_QMARK_.call(null,filename);if(and__6352__auto__)
{return is_dir;
} else
{return and__6352__auto__;
}
})()))
{return lt.objs.notifos.set_msg_BANG_.call(null,"Sorry, watches on directories are not supported on your OS. Try watching individual files instead.");
} else
{var path__$1 = (cljs.core.truth_(is_dir)?clojure.string.join.call(null,"/",cljs.core.conj.call(null,clojure.string.split.call(null,path,"/"),filename)):path);var ext = lt.objs.files.ext.call(null,path__$1);cljs.core.println.call(null,ext,path__$1);
var G__9299 = ext;if(cljs.core._EQ_.call(null,"css",G__9299))
{return lt.plugins.chrometools.filewatch.css_file_change.call(null,client,path__$1);
} else
{if(cljs.core._EQ_.call(null,"js",G__9299))
{return lt.plugins.chrometools.filewatch.js_file_change.call(null,client,path__$1);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
}
} else
{return null;
}
});
/**
* Watch a file or directory for change. Note that this doesn't watch recursively.
*/
lt.plugins.chrometools.filewatch.watch_file = (function watch_file(client,path){var watcher = lt.plugins.chrometools.filewatch.fs.watch(path,cljs.core.partial.call(null,lt.plugins.chrometools.filewatch.listener,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"is-dir","is-dir",4127610076),lt.objs.files.dir_QMARK_.call(null,path),new cljs.core.Keyword(null,"client","client",3951159101),client,new cljs.core.Keyword(null,"path","path",1017337751),path], null)));return lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-watches","file-watches",1924229598)], null),cljs.core.assoc,path,watcher);
});
lt.plugins.chrometools.filewatch.unwatch_file = (function unwatch_file(client,path){var temp__4092__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,client),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-watches","file-watches",1924229598),path], null));if(cljs.core.truth_(temp__4092__auto__))
{var watcher = temp__4092__auto__;watcher.close();
return lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-watches","file-watches",1924229598)], null),cljs.core.dissoc,path);
} else
{return null;
}
});
lt.plugins.chrometools.filewatch.__BEH__watch_path = (function __BEH__watch_path(obj,paths,client){var seq__9304 = cljs.core.seq.call(null,clojure.string.split.call(null,paths,";"));var chunk__9305 = null;var count__9306 = 0;var i__9307 = 0;while(true){
if((i__9307 < count__9306))
{var path = cljs.core._nth.call(null,chunk__9305,i__9307);lt.plugins.chrometools.filewatch.watch_file.call(null,client,path);
{
var G__9320 = seq__9304;
var G__9321 = chunk__9305;
var G__9322 = count__9306;
var G__9323 = (i__9307 + 1);
seq__9304 = G__9320;
chunk__9305 = G__9321;
count__9306 = G__9322;
i__9307 = G__9323;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9304);if(temp__4092__auto__)
{var seq__9304__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9304__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__9304__$1);{
var G__9324 = cljs.core.chunk_rest.call(null,seq__9304__$1);
var G__9325 = c__7112__auto__;
var G__9326 = cljs.core.count.call(null,c__7112__auto__);
var G__9327 = 0;
seq__9304 = G__9324;
chunk__9305 = G__9325;
count__9306 = G__9326;
i__9307 = G__9327;
continue;
}
} else
{var path = cljs.core.first.call(null,seq__9304__$1);lt.plugins.chrometools.filewatch.watch_file.call(null,client,path);
{
var G__9328 = cljs.core.next.call(null,seq__9304__$1);
var G__9329 = null;
var G__9330 = 0;
var G__9331 = 0;
seq__9304 = G__9328;
chunk__9305 = G__9329;
count__9306 = G__9330;
i__9307 = G__9331;
continue;
}
}
} else
{return null;
}
}
break;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools.filewatch","watch-path","lt.plugins.chrometools.filewatch/watch-path",4137327787),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.filewatch.__BEH__watch_path,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select-path!","select-path!",1962651645),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools.filewatch","opener","lt.plugins.chrometools.filewatch/opener",2871327391),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-opener","watch-opener",2250189479),null], null), null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"open-files","open-files",4556359846),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.chrometools.filewatch","watch-path","lt.plugins.chrometools.filewatch/watch-path",4137327787)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return null;
}));
lt.plugins.chrometools.filewatch.opener = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.chrometools.filewatch","opener","lt.plugins.chrometools.filewatch/opener",2871327391));
lt.plugins.chrometools.filewatch.active_dialog = null;
lt.plugins.chrometools.filewatch.input = (function input(type,event,client){var e__7761__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1017479852),"file",type,true,new cljs.core.Keyword(null,"multiple","multiple",1667733890),cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"file","file",1017047278)),new cljs.core.Keyword(null,"style","style",1123684643),"display:none;"], true, false)], null));var seq__9314_9332 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change","change",3947235106),((function (e__7761__auto__){
return (function (){var me = this;if(cljs.core.empty_QMARK_.call(null,lt.util.dom.val.call(null,me)))
{return null;
} else
{return lt.object.raise.call(null,lt.plugins.chrometools.filewatch.opener,event,lt.util.dom.val.call(null,me),client);
}
});})(e__7761__auto__))
], null)));var chunk__9315_9333 = null;var count__9316_9334 = 0;var i__9317_9335 = 0;while(true){
if((i__9317_9335 < count__9316_9334))
{var vec__9318_9336 = cljs.core._nth.call(null,chunk__9315_9333,i__9317_9335);var ev__7762__auto___9337 = cljs.core.nth.call(null,vec__9318_9336,0,null);var func__7763__auto___9338 = cljs.core.nth.call(null,vec__9318_9336,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___9337,func__7763__auto___9338);
{
var G__9339 = seq__9314_9332;
var G__9340 = chunk__9315_9333;
var G__9341 = count__9316_9334;
var G__9342 = (i__9317_9335 + 1);
seq__9314_9332 = G__9339;
chunk__9315_9333 = G__9340;
count__9316_9334 = G__9341;
i__9317_9335 = G__9342;
continue;
}
} else
{var temp__4092__auto___9343 = cljs.core.seq.call(null,seq__9314_9332);if(temp__4092__auto___9343)
{var seq__9314_9344__$1 = temp__4092__auto___9343;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9314_9344__$1))
{var c__7112__auto___9345 = cljs.core.chunk_first.call(null,seq__9314_9344__$1);{
var G__9346 = cljs.core.chunk_rest.call(null,seq__9314_9344__$1);
var G__9347 = c__7112__auto___9345;
var G__9348 = cljs.core.count.call(null,c__7112__auto___9345);
var G__9349 = 0;
seq__9314_9332 = G__9346;
chunk__9315_9333 = G__9347;
count__9316_9334 = G__9348;
i__9317_9335 = G__9349;
continue;
}
} else
{var vec__9319_9350 = cljs.core.first.call(null,seq__9314_9344__$1);var ev__7762__auto___9351 = cljs.core.nth.call(null,vec__9319_9350,0,null);var func__7763__auto___9352 = cljs.core.nth.call(null,vec__9319_9350,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___9351,func__7763__auto___9352);
{
var G__9353 = cljs.core.next.call(null,seq__9314_9344__$1);
var G__9354 = null;
var G__9355 = 0;
var G__9356 = 0;
seq__9314_9332 = G__9353;
chunk__9315_9333 = G__9354;
count__9316_9334 = G__9355;
i__9317_9335 = G__9356;
continue;
}
}
} else
{}
}
break;
}
return e__7761__auto__;
});
lt.plugins.chrometools.filewatch.open_folder = (function open_folder(client){lt.plugins.chrometools.filewatch.active_dialog = lt.plugins.chrometools.filewatch.input.call(null,new cljs.core.Keyword(null,"nwdirectory","nwdirectory",2339862070),new cljs.core.Keyword(null,"select-path!","select-path!",1962651645),client);
return lt.util.dom.trigger.call(null,lt.plugins.chrometools.filewatch.active_dialog,new cljs.core.Keyword(null,"click","click",1108654330));
});
lt.plugins.chrometools.filewatch.open_file = (function open_file(client){lt.plugins.chrometools.filewatch.active_dialog = lt.plugins.chrometools.filewatch.input.call(null,new cljs.core.Keyword(null,"file","file",1017047278),new cljs.core.Keyword(null,"select-path!","select-path!",1962651645),client);
return lt.util.dom.trigger.call(null,lt.plugins.chrometools.filewatch.active_dialog,new cljs.core.Keyword(null,"click","click",1108654330));
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.chrometools.debugger')) {
goog.provide('lt.plugins.chrometools.debugger$');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('crate.binding');
goog.require('lt.util.cljs');
goog.require('clojure.set');
goog.require('lt.objs.plugins');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('lt.objs.sidebar');
goog.require('lt.objs.tabs');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.util.dom');
goog.require('lt.objs.sidebar');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.plugins.chrometools');
goog.require('lt.plugins.chrometools.devtools');
goog.require('lt.util.cljs');
goog.require('lt.plugins.chrometools.filewatch');
goog.require('lt.objs.files');
goog.require('lt.objs.plugins');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('clojure.string');
goog.require('lt.plugins.chrometools.devtools');
goog.require('crate.binding');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('clojure.set');
goog.require('lt.objs.tabs');
goog.require('lt.plugins.chrometools');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.sidebar.command');
goog.require('lt.plugins.chrometools.filewatch');
goog.require('lt.objs.editor');
lt.plugins.chrometools.debugger$.source_map = require(lt.objs.plugins.local_module.call(null,"chrometools","source-map"));
lt.plugins.chrometools.debugger$.SourceMapConsumer = lt.plugins.chrometools.debugger$.source_map.SourceMapConsumer;
lt.plugins.chrometools.debugger$.make_marker = (function make_marker(){var div = document.createElement("div");div.className = "breakpoint-icon";
return div;
});
lt.plugins.chrometools.debugger$.set_marker = (function() {
var set_marker = null;
var set_marker__2 = (function (ed,line){return set_marker.call(null,ed,line,lt.plugins.chrometools.debugger$.make_marker.call(null));
});
var set_marker__3 = (function (ed,line,marker){var cm = lt.objs.editor.__GT_cm_ed.call(null,ed);var line__$1 = (line - 1);if(cljs.core.truth_(marker))
{cm.addLineClass(line__$1,"wrap","breakpoint");
} else
{cm.removeLineClass(line__$1,"wrap","breakpoint");
}
return cm.setGutterMarker(line__$1,"breakpoints",marker);
});
set_marker = function(ed,line,marker){
switch(arguments.length){
case 2:
return set_marker__2.call(this,ed,line);
case 3:
return set_marker__3.call(this,ed,line,marker);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_marker.cljs$core$IFn$_invoke$arity$2 = set_marker__2;
set_marker.cljs$core$IFn$_invoke$arity$3 = set_marker__3;
return set_marker;
})()
;
lt.plugins.chrometools.debugger$.remove_marker = (function remove_marker(ed,line){return lt.plugins.chrometools.debugger$.set_marker.call(null,ed,line,null);
});
lt.plugins.chrometools.debugger$.toggle_marker = (function() {
var toggle_marker = null;
var toggle_marker__2 = (function (ed,line){return toggle_marker.call(null,ed,line,lt.plugins.chrometools.debugger$.make_marker);
});
var toggle_marker__3 = (function (ed,line,make){var cm = lt.objs.editor.__GT_cm_ed.call(null,ed);var line__$1 = (line - 1);var info = cm.lineInfo(line__$1);var marked_QMARK_ = info.gutterMarkers;return cm.setGutterMarker(line__$1,"breakpoints",(cljs.core.truth_(marked_QMARK_)?null:make.call(null)));
});
toggle_marker = function(ed,line,make){
switch(arguments.length){
case 2:
return toggle_marker__2.call(this,ed,line);
case 3:
return toggle_marker__3.call(this,ed,line,make);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_marker.cljs$core$IFn$_invoke$arity$2 = toggle_marker__2;
toggle_marker.cljs$core$IFn$_invoke$arity$3 = toggle_marker__3;
return toggle_marker;
})()
;
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools.debugger","breakpoint","lt.plugins.chrometools.debugger/breakpoint",3252601825),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"debug.breakpoint","debug.breakpoint",1844714974),null], null), null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.chrometools.debugger","breakpoint-destroyed","lt.plugins.chrometools.debugger/breakpoint-destroyed",1764082477),null], null), null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,ed,client,line){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"client","client",3951159101),client,new cljs.core.Keyword(null,"editor","editor",4001043679),ed,new cljs.core.Keyword(null,"line","line",1017226086),line], null));
return lt.plugins.chrometools.debugger$.set_marker.call(null,ed,line);
}));
lt.plugins.chrometools.debugger$.__BEH__breakpoint_destroyed = (function __BEH__breakpoint_destroyed(this$){var ed = new cljs.core.Keyword(null,"editor","editor",4001043679).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var cm = lt.objs.editor.__GT_cm_ed.call(null,ed);cm.removeLineClass((line - 1),"background","breakpoint-paused-bg");
cm.removeLineClass((line - 1),"wrapper","breakpoint-paused");
return lt.plugins.chrometools.debugger$.remove_marker.call(null,ed,line);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools.debugger","breakpoint-destroyed","lt.plugins.chrometools.debugger/breakpoint-destroyed",1764082477),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.debugger$.__BEH__breakpoint_destroyed,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"destroy","destroy",2571277164),null], null), null));
lt.plugins.chrometools.debugger$.__BEH__remove_breakpoints_on_disconnect = (function __BEH__remove_breakpoints_on_disconnect(this$){var seq__8523 = cljs.core.seq.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"debug.breakpoint","debug.breakpoint",1844714974)));var chunk__8524 = null;var count__8525 = 0;var i__8526 = 0;while(true){
if((i__8526 < count__8525))
{var obj = cljs.core._nth.call(null,chunk__8524,i__8526);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)),this$))
{lt.object.destroy_BANG_.call(null,obj);
} else
{}
{
var G__8700 = seq__8523;
var G__8701 = chunk__8524;
var G__8702 = count__8525;
var G__8703 = (i__8526 + 1);
seq__8523 = G__8700;
chunk__8524 = G__8701;
count__8525 = G__8702;
i__8526 = G__8703;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8523);if(temp__4092__auto__)
{var seq__8523__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8523__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8523__$1);{
var G__8704 = cljs.core.chunk_rest.call(null,seq__8523__$1);
var G__8705 = c__7112__auto__;
var G__8706 = cljs.core.count.call(null,c__7112__auto__);
var G__8707 = 0;
seq__8523 = G__8704;
chunk__8524 = G__8705;
count__8525 = G__8706;
i__8526 = G__8707;
continue;
}
} else
{var obj = cljs.core.first.call(null,seq__8523__$1);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)),this$))
{lt.object.destroy_BANG_.call(null,obj);
} else
{}
{
var G__8708 = cljs.core.next.call(null,seq__8523__$1);
var G__8709 = null;
var G__8710 = 0;
var G__8711 = 0;
seq__8523 = G__8708;
chunk__8524 = G__8709;
count__8525 = G__8710;
i__8526 = G__8711;
continue;
}
}
} else
{return null;
}
}
break;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools.debugger","remove-breakpoints-on-disconnect","lt.plugins.chrometools.debugger/remove-breakpoints-on-disconnect",4709991750),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.debugger$.__BEH__remove_breakpoints_on_disconnect,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Debugger.globalObjectCleared","Debugger.globalObjectCleared",1710200527),null,new cljs.core.Keyword(null,"disconnect","disconnect",1544309774),null], null), null));
lt.plugins.chrometools.debugger$.__BEH__add_breakpoints_gutter = (function __BEH__add_breakpoints_gutter(ed){return lt.plugins.chrometools.debugger$.add_breakpoints_gutter.call(null,ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools.debugger","add-breakpoints-gutter","lt.plugins.chrometools.debugger/add-breakpoints-gutter",1467531074),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.debugger$.__BEH__add_breakpoints_gutter,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",1017141378),null], null), null));
/**
* Get matching source for a file from a list of possible sources
* 
* Chooses the first matching item comparing each component of the path
* 
* eg path/test.coffee will match test.coffee or path/test.coffee
* 
*/
lt.plugins.chrometools.debugger$.get_matching_source = (function get_matching_source(sources,path){var parts = clojure.string.split.call(null,path,"/");return cljs.core.first.call(null,(function (){var iter__7081__auto__ = ((function (parts){
return (function iter__8531(s__8532){return (new cljs.core.LazySeq(null,((function (parts){
return (function (){var s__8532__$1 = s__8532;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8532__$1);if(temp__4092__auto__)
{var s__8532__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8532__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__8532__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__8534 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__8533 = 0;while(true){
if((i__8533 < size__7080__auto__))
{var source = cljs.core._nth.call(null,c__7079__auto__,i__8533);var source_parts = cljs.core.filter.call(null,cljs.core.not_empty,clojure.string.split.call(null,source,"/"));var l = cljs.core.count.call(null,source_parts);var p = cljs.core.take_last.call(null,l,parts);if(cljs.core._EQ_.call(null,p,source_parts))
{cljs.core.chunk_append.call(null,b__8534,source);
{
var G__8712 = (i__8533 + 1);
i__8533 = G__8712;
continue;
}
} else
{{
var G__8713 = (i__8533 + 1);
i__8533 = G__8713;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8534),iter__8531.call(null,cljs.core.chunk_rest.call(null,s__8532__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8534),null);
}
} else
{var source = cljs.core.first.call(null,s__8532__$2);var source_parts = cljs.core.filter.call(null,cljs.core.not_empty,clojure.string.split.call(null,source,"/"));var l = cljs.core.count.call(null,source_parts);var p = cljs.core.take_last.call(null,l,parts);if(cljs.core._EQ_.call(null,p,source_parts))
{return cljs.core.cons.call(null,source,iter__8531.call(null,cljs.core.rest.call(null,s__8532__$2)));
} else
{{
var G__8714 = cljs.core.rest.call(null,s__8532__$2);
s__8532__$1 = G__8714;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(parts))
,null,null));
});})(parts))
;return iter__7081__auto__.call(null,sources);
})());
});
lt.plugins.chrometools.debugger$.original_position = (function original_position(pos,sm){var smap = (new lt.plugins.chrometools.debugger$.SourceMapConsumer(cljs.core.clj__GT_js.call(null,sm)));return lt.util.cljs.js__GT_clj.call(null,smap.originalPositionFor(cljs.core.clj__GT_js.call(null,pos)),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
lt.plugins.chrometools.debugger$.generated_position = (function generated_position(path,source_pos,sm){var smap = (new lt.plugins.chrometools.debugger$.SourceMapConsumer(cljs.core.clj__GT_js.call(null,sm)));var source = lt.plugins.chrometools.debugger$.get_matching_source.call(null,smap.sources,path);return lt.util.cljs.js__GT_clj.call(null,(new lt.plugins.chrometools.debugger$.SourceMapConsumer(cljs.core.clj__GT_js.call(null,sm))).generatedPositionFor({"column": new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(source_pos), "line": new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(source_pos), "source": source}),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
/**
* Set breakpoint on client for script matching path at position pos
* 
* pos is a map with at least :line, possibly :ch (not used yet)
* 
*/
lt.plugins.chrometools.debugger$.set_breakpoint = (function set_breakpoint(client,path,pos,cb){var temp__4090__auto__ = lt.plugins.chrometools.find_script.call(null,client,path);if(cljs.core.truth_(temp__4090__auto__))
{var s = temp__4090__auto__;var id = new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.vals.call(null,s)));var sm = new cljs.core.Keyword(null,"sourceMap","sourceMap",3610443443).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.vals.call(null,s)));var location = (cljs.core.truth_(sm)?(function (){var gen_pos = lt.plugins.chrometools.debugger$.generated_position.call(null,path,pos,sm);var line = (new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(gen_pos) - 1);var column = new cljs.core.Keyword(null,"column","column",3954034376).cljs$core$IFn$_invoke$arity$1(gen_pos);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lineNumber","lineNumber",684762063),line,new cljs.core.Keyword(null,"columnNumber","columnNumber",4716049841),column,new cljs.core.Keyword(null,"scriptId","scriptId",606324408),id], null);
})():new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lineNumber","lineNumber",684762063),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos) - 1),new cljs.core.Keyword(null,"scriptId","scriptId",606324408),id,new cljs.core.Keyword(null,"columnNumber","columnNumber",4716049841),3], null));return lt.plugins.chrometools.script_exists_QMARK_.call(null,client,id,((function (id,sm,location,s,temp__4090__auto__){
return (function (exists_QMARK_){if(cljs.core.not.call(null,exists_QMARK_))
{lt.plugins.chrometools.remove_script_BANG_.call(null,client,path,id);
return set_breakpoint.call(null,lt.plugins.chrometools.debugger$.this$,path,pos);
} else
{return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.setBreakpoint",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"location","location",2914947879),location], null)], null),((function (id,sm,location,s,temp__4090__auto__){
return (function (r){var error = new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(r);var success_QMARK_ = (error == null);return cb.call(null,success_QMARK_,((success_QMARK_)?new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(r):error));
});})(id,sm,location,s,temp__4090__auto__))
);
}
});})(id,sm,location,s,temp__4090__auto__))
);
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"Couldn't find script to set breakpoint in");
}
});
/**
* Remove breakpoint stored against specified client
*/
lt.plugins.chrometools.debugger$.remove_breakpoint = (function remove_breakpoint(client,breakpoint,cb){return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.removeBreakpoint",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"breakpointId","breakpointId",1584171102),new cljs.core.Keyword(null,"breakpointId","breakpointId",1584171102).cljs$core$IFn$_invoke$arity$1(breakpoint)], null)], null),cb);
});
lt.plugins.chrometools.debugger$.get_breakpoint = (function get_breakpoint(client,path,pos){return cljs.core.get.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"breakpoints","breakpoints",3249057300).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)),path),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos));
});
/**
* Does specified editor have breakpoints gutter?
*/
lt.plugins.chrometools.debugger$.breakpoints_gutter_QMARK_ = (function breakpoints_gutter_QMARK_(ed){return cljs.core.not_EQ_.call(null,lt.objs.editor.__GT_cm_ed.call(null,ed).options.gutters.indexOf("breakpoints"),-1);
});
/**
* Add breakpoints gutter to specified editor if it doesn't already exist
*/
lt.plugins.chrometools.debugger$.add_breakpoints_gutter = (function add_breakpoints_gutter(ed){lt.objs.editor.on.call(null,ed,"gutterClick",(function (cm,n){return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"toggle-breakpoint!","toggle-breakpoint!",1944001737),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),n], null));
}));
return lt.objs.editor.add_gutter.call(null,ed,"breakpoints",0);
});
/**
* Remove breakpoints gutter from specified editor
*/
lt.plugins.chrometools.debugger$.remove_breakpoints_gutter = (function remove_breakpoints_gutter(ed){return lt.objs.editor.remove_gutter.call(null,ed,"breakpoints");
});
lt.plugins.chrometools.debugger$.breakpoints = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
lt.plugins.chrometools.debugger$.__BEH__add_breakpoint_marker = (function __BEH__add_breakpoint_marker(ed,client,m){lt.objs.notifos.set_msg_BANG_.call(null,"Breakpoint set");
return lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.chrometools.debugger","breakpoint","lt.plugins.chrometools.debugger/breakpoint",3252601825),ed,client,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(m)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools.debugger","add-breakpoint-marker","lt.plugins.chrometools.debugger/add-breakpoint-marker",3012406106),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.debugger$.__BEH__add_breakpoint_marker,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"breakpoint-set","breakpoint-set",3578693624),null], null), null));
lt.plugins.chrometools.debugger$.__BEH__remove_breakpoint_marker = (function __BEH__remove_breakpoint_marker(ed,m){return lt.plugins.chrometools.debugger$.remove_marker.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(m)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools.debugger","remove-breakpoint-marker","lt.plugins.chrometools.debugger/remove-breakpoint-marker",523065469),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.debugger$.__BEH__remove_breakpoint_marker,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"breakpoint-removed","breakpoint-removed",1169175030),null], null), null));
lt.plugins.chrometools.debugger$.__BEH__toggle_breakpoint = (function __BEH__toggle_breakpoint(this$,pos){var pos__$1 = cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos) + 1));var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var client = lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"chrome.remote.debug","chrome.remote.debug",1380405521),new cljs.core.Keyword(null,"origin","origin",4300251800),this$,new cljs.core.Keyword(null,"create","create",3956577390),lt.plugins.chrometools.create_connection], null));var breakpoint = lt.plugins.chrometools.debugger$.get_breakpoint.call(null,client,path,pos__$1);if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))))
{if(cljs.core.truth_(breakpoint))
{return lt.plugins.chrometools.debugger$.remove_breakpoint.call(null,client,breakpoint,((function (pos__$1,path,client,breakpoint){
return (function (r){lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"breakpoint-removed","breakpoint-removed",1169175030),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"pos","pos",1014015430),pos__$1], null));
cljs.core.swap_BANG_.call(null,lt.plugins.chrometools.debugger$.breakpoints,cljs.core.dissoc,new cljs.core.Keyword(null,"breakpointId","breakpointId",1584171102).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,cljs.core.deref.call(null,client),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"breakpoints","breakpoints",3249057300),path,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos__$1)], null))));
return lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"breakpoints","breakpoints",3249057300),path], null),cljs.core.dissoc,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos__$1));
});})(pos__$1,path,client,breakpoint))
);
} else
{return lt.plugins.chrometools.debugger$.set_breakpoint.call(null,client,path,pos__$1,((function (pos__$1,path,client,breakpoint){
return (function (success_QMARK_,result){if(cljs.core.truth_(success_QMARK_))
{lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"breakpoint-set","breakpoint-set",3578693624),client,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"breakpoint","breakpoint",2332931939),result,new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"pos","pos",1014015430),pos__$1], null));
cljs.core.swap_BANG_.call(null,lt.plugins.chrometools.debugger$.breakpoints,cljs.core.assoc,new cljs.core.Keyword(null,"breakpointId","breakpointId",1584171102).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"pos","pos",1014015430),pos__$1,new cljs.core.Keyword(null,"breakpoint","breakpoint",2332931939),result,new cljs.core.Keyword(null,"origin","origin",4300251800),this$], null));
return lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"breakpoints","breakpoints",3249057300)], null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos__$1)], null),result);
} else
{lt.objs.notifos.set_msg_BANG_.call(null,"Breakpoint could not be set");
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"breakpoint-set-error","breakpoint-set-error",2405527923),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"pos","pos",1014015430),pos__$1,new cljs.core.Keyword(null,"message","message",1968829305),result], null));
}
});})(pos__$1,path,client,breakpoint))
);
}
} else
{return lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued-callbacks","queued-callbacks",3801666662)], null),cljs.core.conj,((function (pos__$1,path,client,breakpoint){
return (function (){if(cljs.core.truth_(breakpoint))
{return lt.plugins.chrometools.debugger$.remove_breakpoint.call(null,client,breakpoint,((function (pos__$1,path,client,breakpoint){
return (function (r){lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"breakpoint-removed","breakpoint-removed",1169175030),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"pos","pos",1014015430),pos__$1], null));
cljs.core.swap_BANG_.call(null,lt.plugins.chrometools.debugger$.breakpoints,cljs.core.dissoc,new cljs.core.Keyword(null,"breakpointId","breakpointId",1584171102).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,cljs.core.deref.call(null,client),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"breakpoints","breakpoints",3249057300),path,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos__$1)], null))));
return lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"breakpoints","breakpoints",3249057300),path], null),cljs.core.dissoc,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos__$1));
});})(pos__$1,path,client,breakpoint))
);
} else
{return lt.plugins.chrometools.debugger$.set_breakpoint.call(null,client,path,pos__$1,((function (pos__$1,path,client,breakpoint){
return (function (success_QMARK_,result){if(cljs.core.truth_(success_QMARK_))
{lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"breakpoint-set","breakpoint-set",3578693624),client,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"breakpoint","breakpoint",2332931939),result,new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"pos","pos",1014015430),pos__$1], null));
cljs.core.swap_BANG_.call(null,lt.plugins.chrometools.debugger$.breakpoints,cljs.core.assoc,new cljs.core.Keyword(null,"breakpointId","breakpointId",1584171102).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"pos","pos",1014015430),pos__$1,new cljs.core.Keyword(null,"breakpoint","breakpoint",2332931939),result,new cljs.core.Keyword(null,"origin","origin",4300251800),this$], null));
return lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"breakpoints","breakpoints",3249057300)], null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos__$1)], null),result);
} else
{lt.objs.notifos.set_msg_BANG_.call(null,"Breakpoint could not be set");
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"breakpoint-set-error","breakpoint-set-error",2405527923),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"pos","pos",1014015430),pos__$1,new cljs.core.Keyword(null,"message","message",1968829305),result], null));
}
});})(pos__$1,path,client,breakpoint))
);
}
});})(pos__$1,path,client,breakpoint))
);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools.debugger","toggle-breakpoint","lt.plugins.chrometools.debugger/toggle-breakpoint",4601853946),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.debugger$.__BEH__toggle_breakpoint,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toggle-breakpoint!","toggle-breakpoint!",1944001737),null], null), null));
/**
* Jump to a line in specified editor
*/
lt.plugins.chrometools.debugger$.jump_to_line = (function jump_to_line(client,editor,line,paused_QMARK_){var cm = lt.objs.editor.__GT_cm_ed.call(null,editor);if(cljs.core.truth_(paused_QMARK_))
{lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debugger","debugger",1561716627)], null),cljs.core.assoc,new cljs.core.Keyword(null,"paused-at","paused-at",1843746980),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ed","ed",1013907473),editor,new cljs.core.Keyword(null,"line","line",1017226086),line], null));
cm.addLineClass(line,"wrapper","breakpoint-paused");
cm.addLineClass(line,"background","breakpoint-paused-bg");
} else
{}
lt.objs.tabs.active_BANG_.call(null,editor);
lt.objs.editor.move_cursor.call(null,editor,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null));
return lt.objs.editor.center_cursor.call(null,editor);
});
/**
* Jump to a location identified by a script, line and column number
* 
* location is expected to be the :location value from a call frame returned
* over the chrome debugging protocol
* 
* Supports source mapped locations.
* 
* If paused? is true then the debugger is paused on that line and appropriate
* visual changes will be applied
* 
*/
lt.plugins.chrometools.debugger$.jump_to_location = (function() {
var jump_to_location = null;
var jump_to_location__2 = (function (client,location){return jump_to_location.call(null,client,location,false);
});
var jump_to_location__3 = (function (client,location,paused_QMARK_){var id = new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(location);var script = lt.plugins.chrometools.find_script_by_id.call(null,client,id);var sm = new cljs.core.Keyword(null,"sourceMap","sourceMap",3610443443).cljs$core$IFn$_invoke$arity$1(script);var pos = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"lineNumber","lineNumber",684762063).cljs$core$IFn$_invoke$arity$1(location) + 1),new cljs.core.Keyword(null,"column","column",3954034376),new cljs.core.Keyword(null,"columnNumber","columnNumber",4716049841).cljs$core$IFn$_invoke$arity$1(location)], null);var pos__$1 = (cljs.core.truth_(sm)?lt.plugins.chrometools.debugger$.original_position.call(null,pos,sm):cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"source","source",4412365709),lt.objs.files.basename.call(null,new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(script))));var editor = lt.plugins.chrometools.debugger$.get_editor_by_filename.call(null,new cljs.core.Keyword(null,"source","source",4412365709).cljs$core$IFn$_invoke$arity$1(pos__$1));if(cljs.core.truth_(editor))
{var line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos__$1);var cm = lt.objs.editor.__GT_cm_ed.call(null,editor);return lt.plugins.chrometools.debugger$.jump_to_line.call(null,client,editor,line,paused_QMARK_);
} else
{return null;
}
});
jump_to_location = function(client,location,paused_QMARK_){
switch(arguments.length){
case 2:
return jump_to_location__2.call(this,client,location);
case 3:
return jump_to_location__3.call(this,client,location,paused_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jump_to_location.cljs$core$IFn$_invoke$arity$2 = jump_to_location__2;
jump_to_location.cljs$core$IFn$_invoke$arity$3 = jump_to_location__3;
return jump_to_location;
})()
;
/**
* Jump to editor / line where breakpoint identified by bp-id is set
*/
lt.plugins.chrometools.debugger$.jump_to_bp = (function jump_to_bp(client,bp_id){var breakpoint = cljs.core.get.call(null,cljs.core.deref.call(null,lt.plugins.chrometools.debugger$.breakpoints),bp_id);var origin = new cljs.core.Keyword(null,"origin","origin",4300251800).cljs$core$IFn$_invoke$arity$1(breakpoint);if(cljs.core.truth_(breakpoint))
{var line = (new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(breakpoint)) - 1);return lt.plugins.chrometools.debugger$.jump_to_line.call(null,client,origin,line,true);
} else
{return null;
}
});
/**
* Get scripts from client that have scriptId of id
*/
lt.plugins.chrometools.debugger$.get_scripts = (function get_scripts(client,id){var iter__7081__auto__ = (function iter__8551(s__8552){return (new cljs.core.LazySeq(null,(function (){var s__8552__$1 = s__8552;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8552__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__8562 = cljs.core.first.call(null,xs__4579__auto__);var _ = cljs.core.nth.call(null,vec__8562,0,null);var vs = cljs.core.nth.call(null,vec__8562,1,null);var iterys__7077__auto__ = ((function (s__8552__$1,vec__8562,_,vs,xs__4579__auto__,temp__4092__auto__){
return (function iter__8553(s__8554){return (new cljs.core.LazySeq(null,((function (s__8552__$1,vec__8562,_,vs,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__8554__$1 = s__8554;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__8554__$1);if(temp__4092__auto____$1)
{var s__8554__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__8554__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__8554__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__8556 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__8555 = 0;while(true){
if((i__8555 < size__7080__auto__))
{var vec__8565 = cljs.core._nth.call(null,c__7079__auto__,i__8555);var ___$1 = cljs.core.nth.call(null,vec__8565,0,null);var vvs = cljs.core.nth.call(null,vec__8565,1,null);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(vvs),id))
{cljs.core.chunk_append.call(null,b__8556,vvs);
{
var G__8715 = (i__8555 + 1);
i__8555 = G__8715;
continue;
}
} else
{{
var G__8716 = (i__8555 + 1);
i__8555 = G__8716;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8556),iter__8553.call(null,cljs.core.chunk_rest.call(null,s__8554__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8556),null);
}
} else
{var vec__8566 = cljs.core.first.call(null,s__8554__$2);var ___$1 = cljs.core.nth.call(null,vec__8566,0,null);var vvs = cljs.core.nth.call(null,vec__8566,1,null);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(vvs),id))
{return cljs.core.cons.call(null,vvs,iter__8553.call(null,cljs.core.rest.call(null,s__8554__$2)));
} else
{{
var G__8717 = cljs.core.rest.call(null,s__8554__$2);
s__8554__$1 = G__8717;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__8552__$1,vec__8562,_,vs,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__8552__$1,vec__8562,_,vs,xs__4579__auto__,temp__4092__auto__))
;var fs__7078__auto__ = cljs.core.seq.call(null,iterys__7077__auto__.call(null,vs));if(fs__7078__auto__)
{return cljs.core.concat.call(null,fs__7078__auto__,iter__8551.call(null,cljs.core.rest.call(null,s__8552__$1)));
} else
{{
var G__8718 = cljs.core.rest.call(null,s__8552__$1);
s__8552__$1 = G__8718;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7081__auto__.call(null,new cljs.core.Keyword(null,"scripts","scripts",2940419194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)));
});
/**
* @param {...*} var_args
*/
lt.plugins.chrometools.debugger$.bound_client = (function() { 
var bound_client__delegate = function (obj,path,f,p__8567){var vec__8570 = p__8567;var map__8571 = cljs.core.nth.call(null,vec__8570,0,null);var map__8571__$1 = ((cljs.core.seq_QMARK_.call(null,map__8571))?cljs.core.apply.call(null,cljs.core.hash_map,map__8571):map__8571);var always_call = cljs.core.get.call(null,map__8571__$1,new cljs.core.Keyword(null,"always-call","always-call",3320573646));var initial = cljs.core.get.call(null,map__8571__$1,new cljs.core.Keyword(null,"initial","initial",2962246326));return crate.binding.bound.call(null,obj,((function (vec__8570,map__8571,map__8571__$1,always_call,initial){
return (function (){var temp__4090__auto__ = new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj));if(cljs.core.truth_(temp__4090__auto__))
{var client = temp__4090__auto__;return f.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,client),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debugger","debugger",1561716627)], null),path)),client);
} else
{if(cljs.core.truth_(always_call))
{return f.call(null,null,null);
} else
{return initial;
}
}
});})(vec__8570,map__8571,map__8571__$1,always_call,initial))
);
};
var bound_client = function (obj,path,f,var_args){
var p__8567 = null;if (arguments.length > 3) {
  p__8567 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return bound_client__delegate.call(this,obj,path,f,p__8567);};
bound_client.cljs$lang$maxFixedArity = 3;
bound_client.cljs$lang$applyTo = (function (arglist__8719){
var obj = cljs.core.first(arglist__8719);
arglist__8719 = cljs.core.next(arglist__8719);
var path = cljs.core.first(arglist__8719);
arglist__8719 = cljs.core.next(arglist__8719);
var f = cljs.core.first(arglist__8719);
var p__8567 = cljs.core.rest(arglist__8719);
return bound_client__delegate(obj,path,f,p__8567);
});
bound_client.cljs$core$IFn$_invoke$arity$variadic = bound_client__delegate;
return bound_client;
})()
;
/**
* Generate nice description for scope variables on stack frame
* 
* eg. local => Local
* global => Global (Window)
* 
*/
lt.plugins.chrometools.debugger$.__GT_var_description = (function __GT_var_description(var$){var type = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(var$);var desc = clojure.string.capitalize.call(null,type);return desc;
});
lt.plugins.chrometools.debugger$.__GT_scope_variables = (function __GT_scope_variables(vars,client){if(cljs.core.truth_(vars))
{var iter__7081__auto__ = (function iter__8576(s__8577){return (new cljs.core.LazySeq(null,(function (){var s__8577__$1 = s__8577;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8577__$1);if(temp__4092__auto__)
{var s__8577__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8577__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__8577__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__8579 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__8578 = 0;while(true){
if((i__8578 < size__7080__auto__))
{var var$ = cljs.core._nth.call(null,c__7079__auto__,i__8578);cljs.core.chunk_append.call(null,b__8579,(function (){var desc = lt.plugins.chrometools.debugger$.__GT_var_description.call(null,var$);var className = new cljs.core.Keyword(null,"className","className",1004015509).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"object","object",4285503153).cljs$core$IFn$_invoke$arity$1(var$));var var$__$1 = cljs.core.assoc_in.call(null,var$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",4285503153),new cljs.core.Keyword(null,"name","name",1017277949)], null),desc);var var$__$2 = ((cljs.core.not_EQ_.call(null,className,"Object"))?cljs.core.assoc_in.call(null,var$__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",4285503153),new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"description","description",3584325486)], null),className):var$__$1);return new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(lt.plugins.chrometools.devtools.inspector__GT_result.call(null,client,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),new cljs.core.Keyword(null,"object","object",4285503153).cljs$core$IFn$_invoke$arity$1(var$__$2)], null)], null)));
})());
{
var G__8720 = (i__8578 + 1);
i__8578 = G__8720;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8579),iter__8576.call(null,cljs.core.chunk_rest.call(null,s__8577__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8579),null);
}
} else
{var var$ = cljs.core.first.call(null,s__8577__$2);return cljs.core.cons.call(null,(function (){var desc = lt.plugins.chrometools.debugger$.__GT_var_description.call(null,var$);var className = new cljs.core.Keyword(null,"className","className",1004015509).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"object","object",4285503153).cljs$core$IFn$_invoke$arity$1(var$));var var$__$1 = cljs.core.assoc_in.call(null,var$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",4285503153),new cljs.core.Keyword(null,"name","name",1017277949)], null),desc);var var$__$2 = ((cljs.core.not_EQ_.call(null,className,"Object"))?cljs.core.assoc_in.call(null,var$__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",4285503153),new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"description","description",3584325486)], null),className):var$__$1);return new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(lt.plugins.chrometools.devtools.inspector__GT_result.call(null,client,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),new cljs.core.Keyword(null,"object","object",4285503153).cljs$core$IFn$_invoke$arity$1(var$__$2)], null)], null)));
})(),iter__8576.call(null,cljs.core.rest.call(null,s__8577__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7081__auto__.call(null,vars);
} else
{return null;
}
});
/**
* Take a location and transform it to source position
* 
* location is a map and must contain :scriptId, :lineNumber
* and :columnNumber
* 
* Retuns map
* :source
* :line
* :column
* 
*/
lt.plugins.chrometools.debugger$.location__GT_source = (function location__GT_source(client,location){var script = lt.plugins.chrometools.find_script_by_id.call(null,client,new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(location));var sm = new cljs.core.Keyword(null,"sourceMap","sourceMap",3610443443).cljs$core$IFn$_invoke$arity$1(script);var pos = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"lineNumber","lineNumber",684762063).cljs$core$IFn$_invoke$arity$1(location) + 1),new cljs.core.Keyword(null,"column","column",3954034376),new cljs.core.Keyword(null,"columnNumber","columnNumber",4716049841).cljs$core$IFn$_invoke$arity$1(location)], null);if(cljs.core.truth_(sm))
{return lt.plugins.chrometools.debugger$.original_position.call(null,pos,sm);
} else
{return cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"source","source",4412365709),lt.objs.files.basename.call(null,new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(script)));
}
});
lt.plugins.chrometools.debugger$.__GT_call_frame_name = (function __GT_call_frame_name(frame){var n = new cljs.core.Keyword(null,"functionName","functionName",802531829).cljs$core$IFn$_invoke$arity$1(frame);if(cljs.core.empty_QMARK_.call(null,n))
{return "(anonymous function)";
} else
{return n;
}
});
lt.plugins.chrometools.debugger$.select_call_frame = (function select_call_frame(client,frame){return lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debugger","debugger",1561716627)], null),cljs.core.assoc,new cljs.core.Keyword(null,"scope-variables","scope-variables",1703262384),new cljs.core.Keyword(null,"scopeChain","scopeChain",796553279).cljs$core$IFn$_invoke$arity$1(frame),new cljs.core.Keyword(null,"selected-frame","selected-frame",1773798189),frame);
});
lt.plugins.chrometools.debugger$.call_frame_location = (function call_frame_location(panel,frame){var e__7761__auto__ = crate.core.html.call(null,(function (){var location = lt.plugins.chrometools.debugger$.location__GT_source.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,panel)),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(frame));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"source"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"source-file"], null),new cljs.core.Keyword(null,"source","source",4412365709).cljs$core$IFn$_invoke$arity$1(location)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"source-location"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"source-line"], null),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(location)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"source-col"], null),new cljs.core.Keyword(null,"column","column",3954034376).cljs$core$IFn$_invoke$arity$1(location)], null)], null)], null);
})());var seq__8586_8721 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7761__auto__){
return (function (){return lt.plugins.chrometools.debugger$.jump_to_location.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,panel)),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(frame));
});})(e__7761__auto__))
], null)));var chunk__8587_8722 = null;var count__8588_8723 = 0;var i__8589_8724 = 0;while(true){
if((i__8589_8724 < count__8588_8723))
{var vec__8590_8725 = cljs.core._nth.call(null,chunk__8587_8722,i__8589_8724);var ev__7762__auto___8726 = cljs.core.nth.call(null,vec__8590_8725,0,null);var func__7763__auto___8727 = cljs.core.nth.call(null,vec__8590_8725,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___8726,func__7763__auto___8727);
{
var G__8728 = seq__8586_8721;
var G__8729 = chunk__8587_8722;
var G__8730 = count__8588_8723;
var G__8731 = (i__8589_8724 + 1);
seq__8586_8721 = G__8728;
chunk__8587_8722 = G__8729;
count__8588_8723 = G__8730;
i__8589_8724 = G__8731;
continue;
}
} else
{var temp__4092__auto___8732 = cljs.core.seq.call(null,seq__8586_8721);if(temp__4092__auto___8732)
{var seq__8586_8733__$1 = temp__4092__auto___8732;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8586_8733__$1))
{var c__7112__auto___8734 = cljs.core.chunk_first.call(null,seq__8586_8733__$1);{
var G__8735 = cljs.core.chunk_rest.call(null,seq__8586_8733__$1);
var G__8736 = c__7112__auto___8734;
var G__8737 = cljs.core.count.call(null,c__7112__auto___8734);
var G__8738 = 0;
seq__8586_8721 = G__8735;
chunk__8587_8722 = G__8736;
count__8588_8723 = G__8737;
i__8589_8724 = G__8738;
continue;
}
} else
{var vec__8591_8739 = cljs.core.first.call(null,seq__8586_8733__$1);var ev__7762__auto___8740 = cljs.core.nth.call(null,vec__8591_8739,0,null);var func__7763__auto___8741 = cljs.core.nth.call(null,vec__8591_8739,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___8740,func__7763__auto___8741);
{
var G__8742 = cljs.core.next.call(null,seq__8586_8733__$1);
var G__8743 = null;
var G__8744 = 0;
var G__8745 = 0;
seq__8586_8721 = G__8742;
chunk__8587_8722 = G__8743;
count__8588_8723 = G__8744;
i__8589_8724 = G__8745;
continue;
}
}
} else
{}
}
break;
}
return e__7761__auto__;
});
lt.plugins.chrometools.debugger$.call_frame = (function call_frame(panel,frame){var e__7761__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),lt.plugins.chrometools.debugger$.bound_client.call(null,panel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-frame","selected-frame",1773798189)], null),(function (p1__8592_SHARP_){if(cljs.core._EQ_.call(null,p1__8592_SHARP_,frame))
{return "selected";
} else
{return "";
}
}))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"frame-name"], null),lt.plugins.chrometools.debugger$.__GT_call_frame_name.call(null,frame)], null),lt.plugins.chrometools.debugger$.call_frame_location.call(null,panel,frame)], null));var seq__8599_8746 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7761__auto__){
return (function (){var client = new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,panel));return lt.plugins.chrometools.debugger$.select_call_frame.call(null,client,frame);
});})(e__7761__auto__))
], null)));var chunk__8600_8747 = null;var count__8601_8748 = 0;var i__8602_8749 = 0;while(true){
if((i__8602_8749 < count__8601_8748))
{var vec__8603_8750 = cljs.core._nth.call(null,chunk__8600_8747,i__8602_8749);var ev__7762__auto___8751 = cljs.core.nth.call(null,vec__8603_8750,0,null);var func__7763__auto___8752 = cljs.core.nth.call(null,vec__8603_8750,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___8751,func__7763__auto___8752);
{
var G__8753 = seq__8599_8746;
var G__8754 = chunk__8600_8747;
var G__8755 = count__8601_8748;
var G__8756 = (i__8602_8749 + 1);
seq__8599_8746 = G__8753;
chunk__8600_8747 = G__8754;
count__8601_8748 = G__8755;
i__8602_8749 = G__8756;
continue;
}
} else
{var temp__4092__auto___8757 = cljs.core.seq.call(null,seq__8599_8746);if(temp__4092__auto___8757)
{var seq__8599_8758__$1 = temp__4092__auto___8757;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8599_8758__$1))
{var c__7112__auto___8759 = cljs.core.chunk_first.call(null,seq__8599_8758__$1);{
var G__8760 = cljs.core.chunk_rest.call(null,seq__8599_8758__$1);
var G__8761 = c__7112__auto___8759;
var G__8762 = cljs.core.count.call(null,c__7112__auto___8759);
var G__8763 = 0;
seq__8599_8746 = G__8760;
chunk__8600_8747 = G__8761;
count__8601_8748 = G__8762;
i__8602_8749 = G__8763;
continue;
}
} else
{var vec__8604_8764 = cljs.core.first.call(null,seq__8599_8758__$1);var ev__7762__auto___8765 = cljs.core.nth.call(null,vec__8604_8764,0,null);var func__7763__auto___8766 = cljs.core.nth.call(null,vec__8604_8764,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___8765,func__7763__auto___8766);
{
var G__8767 = cljs.core.next.call(null,seq__8599_8758__$1);
var G__8768 = null;
var G__8769 = 0;
var G__8770 = 0;
seq__8599_8746 = G__8767;
chunk__8600_8747 = G__8768;
count__8601_8748 = G__8769;
i__8602_8749 = G__8770;
continue;
}
}
} else
{}
}
break;
}
return e__7761__auto__;
});
lt.plugins.chrometools.debugger$.debug_panel_resume = (function debug_panel_resume(this$){var e__7761__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"resume"], null),lt.plugins.chrometools.debugger$.bound_client.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused?","paused?",4518674499)], null),(function (p1__8605_SHARP_){if(cljs.core.truth_(p1__8605_SHARP_))
{return "\u25B6";
} else
{return "=";
}
}))], null));var seq__8612_8771 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7761__auto__){
return (function (){var client = new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var c = (cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",4518674499).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"debugger","debugger",1561716627).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))))?new cljs.core.Keyword(null,"resume-debugger","resume-debugger",4240016691):new cljs.core.Keyword(null,"pause-debugger","pause-debugger",1706137994));return lt.objs.sidebar.command.exec_BANG_.call(null,c,client);
});})(e__7761__auto__))
], null)));var chunk__8613_8772 = null;var count__8614_8773 = 0;var i__8615_8774 = 0;while(true){
if((i__8615_8774 < count__8614_8773))
{var vec__8616_8775 = cljs.core._nth.call(null,chunk__8613_8772,i__8615_8774);var ev__7762__auto___8776 = cljs.core.nth.call(null,vec__8616_8775,0,null);var func__7763__auto___8777 = cljs.core.nth.call(null,vec__8616_8775,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___8776,func__7763__auto___8777);
{
var G__8778 = seq__8612_8771;
var G__8779 = chunk__8613_8772;
var G__8780 = count__8614_8773;
var G__8781 = (i__8615_8774 + 1);
seq__8612_8771 = G__8778;
chunk__8613_8772 = G__8779;
count__8614_8773 = G__8780;
i__8615_8774 = G__8781;
continue;
}
} else
{var temp__4092__auto___8782 = cljs.core.seq.call(null,seq__8612_8771);if(temp__4092__auto___8782)
{var seq__8612_8783__$1 = temp__4092__auto___8782;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8612_8783__$1))
{var c__7112__auto___8784 = cljs.core.chunk_first.call(null,seq__8612_8783__$1);{
var G__8785 = cljs.core.chunk_rest.call(null,seq__8612_8783__$1);
var G__8786 = c__7112__auto___8784;
var G__8787 = cljs.core.count.call(null,c__7112__auto___8784);
var G__8788 = 0;
seq__8612_8771 = G__8785;
chunk__8613_8772 = G__8786;
count__8614_8773 = G__8787;
i__8615_8774 = G__8788;
continue;
}
} else
{var vec__8617_8789 = cljs.core.first.call(null,seq__8612_8783__$1);var ev__7762__auto___8790 = cljs.core.nth.call(null,vec__8617_8789,0,null);var func__7763__auto___8791 = cljs.core.nth.call(null,vec__8617_8789,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___8790,func__7763__auto___8791);
{
var G__8792 = cljs.core.next.call(null,seq__8612_8783__$1);
var G__8793 = null;
var G__8794 = 0;
var G__8795 = 0;
seq__8612_8771 = G__8792;
chunk__8613_8772 = G__8793;
count__8614_8773 = G__8794;
i__8615_8774 = G__8795;
continue;
}
}
} else
{}
}
break;
}
return e__7761__auto__;
});
lt.plugins.chrometools.debugger$.reconnect_button = (function reconnect_button(this$){var e__7761__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"reconnect-button"], null),"Reconnect"], null));var seq__8624_8796 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7761__auto__){
return (function (){var tab = new cljs.core.Keyword(null,"reconnect-tab","reconnect-tab",3800973201).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"chrome.client.remote","chrome.client.remote",4091478727));return lt.plugins.chrometools.connect_tab.call(null,client,tab);
});})(e__7761__auto__))
], null)));var chunk__8625_8797 = null;var count__8626_8798 = 0;var i__8627_8799 = 0;while(true){
if((i__8627_8799 < count__8626_8798))
{var vec__8628_8800 = cljs.core._nth.call(null,chunk__8625_8797,i__8627_8799);var ev__7762__auto___8801 = cljs.core.nth.call(null,vec__8628_8800,0,null);var func__7763__auto___8802 = cljs.core.nth.call(null,vec__8628_8800,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___8801,func__7763__auto___8802);
{
var G__8803 = seq__8624_8796;
var G__8804 = chunk__8625_8797;
var G__8805 = count__8626_8798;
var G__8806 = (i__8627_8799 + 1);
seq__8624_8796 = G__8803;
chunk__8625_8797 = G__8804;
count__8626_8798 = G__8805;
i__8627_8799 = G__8806;
continue;
}
} else
{var temp__4092__auto___8807 = cljs.core.seq.call(null,seq__8624_8796);if(temp__4092__auto___8807)
{var seq__8624_8808__$1 = temp__4092__auto___8807;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8624_8808__$1))
{var c__7112__auto___8809 = cljs.core.chunk_first.call(null,seq__8624_8808__$1);{
var G__8810 = cljs.core.chunk_rest.call(null,seq__8624_8808__$1);
var G__8811 = c__7112__auto___8809;
var G__8812 = cljs.core.count.call(null,c__7112__auto___8809);
var G__8813 = 0;
seq__8624_8796 = G__8810;
chunk__8625_8797 = G__8811;
count__8626_8798 = G__8812;
i__8627_8799 = G__8813;
continue;
}
} else
{var vec__8629_8814 = cljs.core.first.call(null,seq__8624_8808__$1);var ev__7762__auto___8815 = cljs.core.nth.call(null,vec__8629_8814,0,null);var func__7763__auto___8816 = cljs.core.nth.call(null,vec__8629_8814,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___8815,func__7763__auto___8816);
{
var G__8817 = cljs.core.next.call(null,seq__8624_8808__$1);
var G__8818 = null;
var G__8819 = 0;
var G__8820 = 0;
seq__8624_8796 = G__8817;
chunk__8625_8797 = G__8818;
count__8626_8798 = G__8819;
i__8627_8799 = G__8820;
continue;
}
}
} else
{}
}
break;
}
return e__7761__auto__;
});
lt.plugins.chrometools.debugger$.debug_panel_stepover = (function debug_panel_stepover(this$){var e__7761__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"stepover"], null),"\u21B4"], null));var seq__8636_8821 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7761__auto__){
return (function (){var client = new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"step-over","step-over",2312612519),client);
});})(e__7761__auto__))
], null)));var chunk__8637_8822 = null;var count__8638_8823 = 0;var i__8639_8824 = 0;while(true){
if((i__8639_8824 < count__8638_8823))
{var vec__8640_8825 = cljs.core._nth.call(null,chunk__8637_8822,i__8639_8824);var ev__7762__auto___8826 = cljs.core.nth.call(null,vec__8640_8825,0,null);var func__7763__auto___8827 = cljs.core.nth.call(null,vec__8640_8825,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___8826,func__7763__auto___8827);
{
var G__8828 = seq__8636_8821;
var G__8829 = chunk__8637_8822;
var G__8830 = count__8638_8823;
var G__8831 = (i__8639_8824 + 1);
seq__8636_8821 = G__8828;
chunk__8637_8822 = G__8829;
count__8638_8823 = G__8830;
i__8639_8824 = G__8831;
continue;
}
} else
{var temp__4092__auto___8832 = cljs.core.seq.call(null,seq__8636_8821);if(temp__4092__auto___8832)
{var seq__8636_8833__$1 = temp__4092__auto___8832;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8636_8833__$1))
{var c__7112__auto___8834 = cljs.core.chunk_first.call(null,seq__8636_8833__$1);{
var G__8835 = cljs.core.chunk_rest.call(null,seq__8636_8833__$1);
var G__8836 = c__7112__auto___8834;
var G__8837 = cljs.core.count.call(null,c__7112__auto___8834);
var G__8838 = 0;
seq__8636_8821 = G__8835;
chunk__8637_8822 = G__8836;
count__8638_8823 = G__8837;
i__8639_8824 = G__8838;
continue;
}
} else
{var vec__8641_8839 = cljs.core.first.call(null,seq__8636_8833__$1);var ev__7762__auto___8840 = cljs.core.nth.call(null,vec__8641_8839,0,null);var func__7763__auto___8841 = cljs.core.nth.call(null,vec__8641_8839,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___8840,func__7763__auto___8841);
{
var G__8842 = cljs.core.next.call(null,seq__8636_8833__$1);
var G__8843 = null;
var G__8844 = 0;
var G__8845 = 0;
seq__8636_8821 = G__8842;
chunk__8637_8822 = G__8843;
count__8638_8823 = G__8844;
i__8639_8824 = G__8845;
continue;
}
}
} else
{}
}
break;
}
return e__7761__auto__;
});
lt.plugins.chrometools.debugger$.debug_panel_stepin = (function debug_panel_stepin(this$){var e__7761__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"stepinto"], null),"\u2193"], null));var seq__8648_8846 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7761__auto__){
return (function (){var client = new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"step-into","step-into",2312426547),client);
});})(e__7761__auto__))
], null)));var chunk__8649_8847 = null;var count__8650_8848 = 0;var i__8651_8849 = 0;while(true){
if((i__8651_8849 < count__8650_8848))
{var vec__8652_8850 = cljs.core._nth.call(null,chunk__8649_8847,i__8651_8849);var ev__7762__auto___8851 = cljs.core.nth.call(null,vec__8652_8850,0,null);var func__7763__auto___8852 = cljs.core.nth.call(null,vec__8652_8850,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___8851,func__7763__auto___8852);
{
var G__8853 = seq__8648_8846;
var G__8854 = chunk__8649_8847;
var G__8855 = count__8650_8848;
var G__8856 = (i__8651_8849 + 1);
seq__8648_8846 = G__8853;
chunk__8649_8847 = G__8854;
count__8650_8848 = G__8855;
i__8651_8849 = G__8856;
continue;
}
} else
{var temp__4092__auto___8857 = cljs.core.seq.call(null,seq__8648_8846);if(temp__4092__auto___8857)
{var seq__8648_8858__$1 = temp__4092__auto___8857;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8648_8858__$1))
{var c__7112__auto___8859 = cljs.core.chunk_first.call(null,seq__8648_8858__$1);{
var G__8860 = cljs.core.chunk_rest.call(null,seq__8648_8858__$1);
var G__8861 = c__7112__auto___8859;
var G__8862 = cljs.core.count.call(null,c__7112__auto___8859);
var G__8863 = 0;
seq__8648_8846 = G__8860;
chunk__8649_8847 = G__8861;
count__8650_8848 = G__8862;
i__8651_8849 = G__8863;
continue;
}
} else
{var vec__8653_8864 = cljs.core.first.call(null,seq__8648_8858__$1);var ev__7762__auto___8865 = cljs.core.nth.call(null,vec__8653_8864,0,null);var func__7763__auto___8866 = cljs.core.nth.call(null,vec__8653_8864,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___8865,func__7763__auto___8866);
{
var G__8867 = cljs.core.next.call(null,seq__8648_8858__$1);
var G__8868 = null;
var G__8869 = 0;
var G__8870 = 0;
seq__8648_8846 = G__8867;
chunk__8649_8847 = G__8868;
count__8650_8848 = G__8869;
i__8651_8849 = G__8870;
continue;
}
}
} else
{}
}
break;
}
return e__7761__auto__;
});
lt.plugins.chrometools.debugger$.debug_panel_stepout = (function debug_panel_stepout(this$){var e__7761__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"stepout"], null),"\u2191"], null));var seq__8660_8871 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7761__auto__){
return (function (){var client = new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"step-out","step-out",2441271359),client);
});})(e__7761__auto__))
], null)));var chunk__8661_8872 = null;var count__8662_8873 = 0;var i__8663_8874 = 0;while(true){
if((i__8663_8874 < count__8662_8873))
{var vec__8664_8875 = cljs.core._nth.call(null,chunk__8661_8872,i__8663_8874);var ev__7762__auto___8876 = cljs.core.nth.call(null,vec__8664_8875,0,null);var func__7763__auto___8877 = cljs.core.nth.call(null,vec__8664_8875,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___8876,func__7763__auto___8877);
{
var G__8878 = seq__8660_8871;
var G__8879 = chunk__8661_8872;
var G__8880 = count__8662_8873;
var G__8881 = (i__8663_8874 + 1);
seq__8660_8871 = G__8878;
chunk__8661_8872 = G__8879;
count__8662_8873 = G__8880;
i__8663_8874 = G__8881;
continue;
}
} else
{var temp__4092__auto___8882 = cljs.core.seq.call(null,seq__8660_8871);if(temp__4092__auto___8882)
{var seq__8660_8883__$1 = temp__4092__auto___8882;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8660_8883__$1))
{var c__7112__auto___8884 = cljs.core.chunk_first.call(null,seq__8660_8883__$1);{
var G__8885 = cljs.core.chunk_rest.call(null,seq__8660_8883__$1);
var G__8886 = c__7112__auto___8884;
var G__8887 = cljs.core.count.call(null,c__7112__auto___8884);
var G__8888 = 0;
seq__8660_8871 = G__8885;
chunk__8661_8872 = G__8886;
count__8662_8873 = G__8887;
i__8663_8874 = G__8888;
continue;
}
} else
{var vec__8665_8889 = cljs.core.first.call(null,seq__8660_8883__$1);var ev__7762__auto___8890 = cljs.core.nth.call(null,vec__8665_8889,0,null);var func__7763__auto___8891 = cljs.core.nth.call(null,vec__8665_8889,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___8890,func__7763__auto___8891);
{
var G__8892 = cljs.core.next.call(null,seq__8660_8883__$1);
var G__8893 = null;
var G__8894 = 0;
var G__8895 = 0;
seq__8660_8871 = G__8892;
chunk__8661_8872 = G__8893;
count__8662_8873 = G__8894;
i__8663_8874 = G__8895;
continue;
}
}
} else
{}
}
break;
}
return e__7761__auto__;
});
/**
* Create call-frame UI elements
*/
lt.plugins.chrometools.debugger$.create_call_frames = (function create_call_frames(panel,frames){if(cljs.core.truth_(frames))
{var iter__7081__auto__ = (function iter__8670(s__8671){return (new cljs.core.LazySeq(null,(function (){var s__8671__$1 = s__8671;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8671__$1);if(temp__4092__auto__)
{var s__8671__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8671__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__8671__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__8673 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__8672 = 0;while(true){
if((i__8672 < size__7080__auto__))
{var frame = cljs.core._nth.call(null,c__7079__auto__,i__8672);cljs.core.chunk_append.call(null,b__8673,lt.plugins.chrometools.debugger$.call_frame.call(null,panel,frame));
{
var G__8896 = (i__8672 + 1);
i__8672 = G__8896;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8673),iter__8670.call(null,cljs.core.chunk_rest.call(null,s__8671__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8673),null);
}
} else
{var frame = cljs.core.first.call(null,s__8671__$2);return cljs.core.cons.call(null,lt.plugins.chrometools.debugger$.call_frame.call(null,panel,frame),iter__8670.call(null,cljs.core.rest.call(null,s__8671__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7081__auto__.call(null,frames);
} else
{return null;
}
});
/**
* Get classes to apply to call frames container
*/
lt.plugins.chrometools.debugger$.__GT_call_frames_class = (function __GT_call_frames_class(call_frames,client){return [cljs.core.str("call-frames"),cljs.core.str(((cljs.core.empty_QMARK_.call(null,call_frames))?" empty":null))].join('');
});
lt.plugins.chrometools.debugger$.connected_QMARK_ = (function connected_QMARK_(client){if(cljs.core.truth_(client))
{return new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client));
} else
{return null;
}
});
lt.plugins.chrometools.debugger$.debug_panel_classes = (function debug_panel_classes(panel,state,client){var classes = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",4518674499).cljs$core$IFn$_invoke$arity$1(state))?"paused":"unpaused")], null);var classes__$1 = cljs.core.conj.call(null,classes,(cljs.core.truth_(lt.plugins.chrometools.debugger$.connected_QMARK_.call(null,client))?"connected":"disconnected"));var classes__$2 = cljs.core.conj.call(null,classes__$1,(cljs.core.truth_(new cljs.core.Keyword(null,"show-reconnect","show-reconnect",1351513081).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,panel)))?"reconnect-available":null));return clojure.string.join.call(null," ",cljs.core.filter.call(null,cljs.core.identity,classes__$2));
});
lt.plugins.chrometools.debugger$.debug_panel = (function debug_panel(this$){var e__7761__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"debug-panel"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),lt.plugins.chrometools.debugger$.bound_client.call(null,this$,cljs.core.PersistentVector.EMPTY,cljs.core.partial.call(null,lt.plugins.chrometools.debugger$.debug_panel_classes,this$),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"always-call","always-call",3320573646),true], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),cljs.core.PersistentArrayMap.EMPTY,"Debugger"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"controls"], null),lt.plugins.chrometools.debugger$.debug_panel_resume.call(null,this$),lt.plugins.chrometools.debugger$.debug_panel_stepover.call(null,this$),lt.plugins.chrometools.debugger$.debug_panel_stepin.call(null,this$),lt.plugins.chrometools.debugger$.debug_panel_stepout.call(null,this$),lt.plugins.chrometools.debugger$.reconnect_button.call(null,this$)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"call-stack"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Call Stack"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),lt.plugins.chrometools.debugger$.bound_client.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-frames","call-frames",3247219303)], null),lt.plugins.chrometools.debugger$.__GT_call_frames_class)], null),lt.plugins.chrometools.debugger$.bound_client.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-frames","call-frames",3247219303)], null),(function (p1__8674_SHARP_){return lt.plugins.chrometools.debugger$.create_call_frames.call(null,this$,p1__8674_SHARP_);
}))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"variables"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Scope Variables"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"scope-variables"], null),lt.plugins.chrometools.debugger$.bound_client.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scope-variables","scope-variables",1703262384)], null),(function (p1__8675_SHARP_,p2__8676_SHARP_){return lt.plugins.chrometools.debugger$.__GT_scope_variables.call(null,p1__8675_SHARP_,p2__8676_SHARP_);
}))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"debug-editor"], null),lt.object.__GT_content.call(null,lt.plugins.chrometools.debugger$.debug_editor)], null)], null)], null));var seq__8683_8897 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8684_8898 = null;var count__8685_8899 = 0;var i__8686_8900 = 0;while(true){
if((i__8686_8900 < count__8685_8899))
{var vec__8687_8901 = cljs.core._nth.call(null,chunk__8684_8898,i__8686_8900);var ev__7762__auto___8902 = cljs.core.nth.call(null,vec__8687_8901,0,null);var func__7763__auto___8903 = cljs.core.nth.call(null,vec__8687_8901,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___8902,func__7763__auto___8903);
{
var G__8904 = seq__8683_8897;
var G__8905 = chunk__8684_8898;
var G__8906 = count__8685_8899;
var G__8907 = (i__8686_8900 + 1);
seq__8683_8897 = G__8904;
chunk__8684_8898 = G__8905;
count__8685_8899 = G__8906;
i__8686_8900 = G__8907;
continue;
}
} else
{var temp__4092__auto___8908 = cljs.core.seq.call(null,seq__8683_8897);if(temp__4092__auto___8908)
{var seq__8683_8909__$1 = temp__4092__auto___8908;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8683_8909__$1))
{var c__7112__auto___8910 = cljs.core.chunk_first.call(null,seq__8683_8909__$1);{
var G__8911 = cljs.core.chunk_rest.call(null,seq__8683_8909__$1);
var G__8912 = c__7112__auto___8910;
var G__8913 = cljs.core.count.call(null,c__7112__auto___8910);
var G__8914 = 0;
seq__8683_8897 = G__8911;
chunk__8684_8898 = G__8912;
count__8685_8899 = G__8913;
i__8686_8900 = G__8914;
continue;
}
} else
{var vec__8688_8915 = cljs.core.first.call(null,seq__8683_8909__$1);var ev__7762__auto___8916 = cljs.core.nth.call(null,vec__8688_8915,0,null);var func__7763__auto___8917 = cljs.core.nth.call(null,vec__8688_8915,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___8916,func__7763__auto___8917);
{
var G__8918 = cljs.core.next.call(null,seq__8683_8909__$1);
var G__8919 = null;
var G__8920 = 0;
var G__8921 = 0;
seq__8683_8897 = G__8918;
chunk__8684_8898 = G__8919;
count__8685_8899 = G__8920;
i__8686_8900 = G__8921;
continue;
}
}
} else
{}
}
break;
}
return e__7761__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools.debugger","editor","lt.plugins.chrometools.debugger/editor",510484829),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"editor.inline-result","editor.inline-result",1965420162),null,new cljs.core.Keyword(null,"editor","editor",4001043679),null,new cljs.core.Keyword(null,"editor.debugger","editor.debugger",1471152884),null,new cljs.core.Keyword(null,"editor.keys.normal","editor.keys.normal",2927389330),null], null), null),new cljs.core.Keyword(null,"init","init",1017141378),(function (obj,info){var edi = lt.objs.editor.make.call(null,info);lt.object.merge_BANG_.call(null,obj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ed","ed",1013907473),edi,new cljs.core.Keyword(null,"doc","doc",1014003882),new cljs.core.Keyword(null,"doc","doc",1014003882).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Keyword(null,"default-tags","default-tags",4612436887),new cljs.core.Keyword(null,"tags","tags",1017456523).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)),new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.dissoc.call(null,info,new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"doc","doc",1014003882))], null));
lt.objs.editor.wrap_object_events.call(null,edi,obj);
return lt.objs.editor.__GT_elem.call(null,edi);
}));
lt.plugins.chrometools.debugger$.__BEH__initialise_debug_bar = (function __BEH__initialise_debug_bar(app){lt.plugins.chrometools.debugger$.debug_editor = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.chrometools.debugger","editor","lt.plugins.chrometools.debugger/editor",510484829),cljs.core.PersistentArrayMap.EMPTY);
lt.plugins.chrometools.debugger$.debug_sidebar = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.chrometools.debugger","debug-panel","lt.plugins.chrometools.debugger/debug-panel",4002286074));
return lt.objs.sidebar.add_item.call(null,lt.objs.sidebar.rightbar,lt.plugins.chrometools.debugger$.debug_sidebar);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools.debugger","initialise-debug-bar","lt.plugins.chrometools.debugger/initialise-debug-bar",3304610295),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.debugger$.__BEH__initialise_debug_bar,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"post-init","post-init",2970371471),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools.debugger","debug-panel","lt.plugins.chrometools.debugger/debug-panel",4002286074),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"debug.panel","debug.panel",2689807899),null], null), null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client","client",3951159101),null], null));
return lt.plugins.chrometools.debugger$.debug_panel.call(null,this$);
}));
lt.plugins.chrometools.debugger$.watch_key = new cljs.core.Keyword(null,"chrome-debugger","chrome-debugger",1103806854);
lt.plugins.chrometools.debugger$.__BEH__update_panel_on_disconnect = (function __BEH__update_panel_on_disconnect(this$){cljs.core.remove_watch.call(null,this$,lt.plugins.chrometools.debugger$.watch_key);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.chrometools.debugger$.debug_sidebar)),this$))
{return cljs.core.swap_BANG_.call(null,lt.plugins.chrometools.debugger$.debug_sidebar,cljs.core.dissoc,new cljs.core.Keyword(null,"client","client",3951159101));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools.debugger","update-panel-on-disconnect","lt.plugins.chrometools.debugger/update-panel-on-disconnect",979079725),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.debugger$.__BEH__update_panel_on_disconnect,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disconnect","disconnect",1544309774),null], null), null));
lt.plugins.chrometools.debugger$.__BEH__update_panel_on_connect = (function __BEH__update_panel_on_connect(this$){if(cljs.core.truth_(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.chrometools.debugger$.debug_sidebar))))
{return null;
} else
{lt.object.merge_BANG_.call(null,lt.plugins.chrometools.debugger$.debug_sidebar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",3951159101),this$,new cljs.core.Keyword(null,"show-reconnect","show-reconnect",1351513081),false], null));
return cljs.core.add_watch.call(null,this$,lt.plugins.chrometools.debugger$.watch_key,(function (_,___$1,___$2,___$3){return lt.object.merge_BANG_.call(null,lt.plugins.chrometools.debugger$.debug_sidebar,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refresh","refresh",2099349069),true], null));
}));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools.debugger","update-panel-on-connect","lt.plugins.chrometools.debugger/update-panel-on-connect",1304382169),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.debugger$.__BEH__update_panel_on_connect,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connect","connect",1965255772),null], null), null));
/**
* Get file type for source file based on extension
* 
* Returns map if found
* 
*/
lt.plugins.chrometools.debugger$.source__GT_file_type = (function source__GT_file_type(source){var temp__4092__auto__ = lt.objs.files.ext.call(null,source);if(cljs.core.truth_(temp__4092__auto__))
{var ext = temp__4092__auto__;return lt.objs.files.ext__GT_type.call(null,cljs.core.keyword.call(null,clojure.string.lower_case.call(null,ext)));
} else
{return null;
}
});
lt.plugins.chrometools.debugger$.__BEH__debugger_paused = (function __BEH__debugger_paused(this$,s){var params = new cljs.core.Keyword(null,"params","params",4313443576).cljs$core$IFn$_invoke$arity$1(s);var reason = new cljs.core.Keyword(null,"reason","reason",4373906870).cljs$core$IFn$_invoke$arity$1(params);var breakpoint = cljs.core.first.call(null,new cljs.core.Keyword(null,"hitBreakpoints","hitBreakpoints",929618049).cljs$core$IFn$_invoke$arity$1(params));var call_frames = new cljs.core.Keyword(null,"callFrames","callFrames",2227904534).cljs$core$IFn$_invoke$arity$1(params);var location = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,call_frames));var file_type = lt.plugins.chrometools.debugger$.source__GT_file_type.call(null,new cljs.core.Keyword(null,"source","source",4412365709).cljs$core$IFn$_invoke$arity$1(lt.plugins.chrometools.debugger$.location__GT_source.call(null,this$,location)));lt.objs.editor.pool.set_syntax.call(null,lt.plugins.chrometools.debugger$.debug_editor,file_type);
lt.object.add_tags.call(null,lt.plugins.chrometools.debugger$.debug_editor,new cljs.core.Keyword(null,"default-tags","default-tags",4612436887).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.chrometools.debugger$.debug_editor)));
lt.object.update_BANG_.call(null,lt.plugins.chrometools.debugger$.debug_editor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client","client",3951159101)], null),cljs.core.assoc,new cljs.core.Keyword(null,"default","default",2558708147),this$);
var scope_chain_8922 = lt.util.cljs.js__GT_clj.call(null,new cljs.core.Keyword(null,"scopeChain","scopeChain",796553279).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,call_frames)));cljs.core.add_watch.call(null,this$,lt.plugins.chrometools.debugger$.watch_key,((function (scope_chain_8922,params,reason,breakpoint,call_frames,location,file_type){
return (function (_,___$1,___$2,___$3){return lt.object.merge_BANG_.call(null,lt.plugins.chrometools.debugger$.debug_sidebar,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refresh","refresh",2099349069),true], null));
});})(scope_chain_8922,params,reason,breakpoint,call_frames,location,file_type))
);
lt.object.merge_BANG_.call(null,lt.plugins.chrometools.debugger$.debug_sidebar,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client","client",3951159101),this$], null));
lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debugger","debugger",1561716627)], null),cljs.core.assoc,new cljs.core.Keyword(null,"paused?","paused?",4518674499),true,new cljs.core.Keyword(null,"call-frames","call-frames",3247219303),call_frames);
lt.plugins.chrometools.debugger$.select_call_frame.call(null,this$,cljs.core.first.call(null,call_frames));
lt.object.raise.call(null,lt.objs.sidebar.rightbar,new cljs.core.Keyword(null,"show","show",1017433711),lt.plugins.chrometools.debugger$.debug_sidebar);
if(cljs.core.truth_(breakpoint))
{return lt.plugins.chrometools.debugger$.jump_to_bp.call(null,this$,breakpoint);
} else
{return lt.plugins.chrometools.debugger$.jump_to_location.call(null,this$,new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,call_frames)),true);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools.debugger","debugger-paused","lt.plugins.chrometools.debugger/debugger-paused",2347448394),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.debugger$.__BEH__debugger_paused,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Debugger.paused","Debugger.paused",1114783469),null], null), null));
lt.plugins.chrometools.debugger$.__BEH__debugger_resumed = (function __BEH__debugger_resumed(client){var temp__4092__auto___8923 = cljs.core.get_in.call(null,cljs.core.deref.call(null,client),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debugger","debugger",1561716627),new cljs.core.Keyword(null,"paused-at","paused-at",1843746980)], null));if(cljs.core.truth_(temp__4092__auto___8923))
{var paused_at_8924 = temp__4092__auto___8923;lt.objs.editor.__GT_cm_ed.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(paused_at_8924)).removeLineClass(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(paused_at_8924),"wrapper","breakpoint-paused");
} else
{}
return lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debugger","debugger",1561716627)], null),cljs.core.assoc,new cljs.core.Keyword(null,"paused?","paused?",4518674499),false,new cljs.core.Keyword(null,"paused-at","paused-at",1843746980),null);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools.debugger","debugger-resumed","lt.plugins.chrometools.debugger/debugger-resumed",1669604383),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.debugger$.__BEH__debugger_resumed,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Debugger.resumed","Debugger.resumed",1733937308),null], null), null));
lt.plugins.chrometools.debugger$.__BEH__inspector_detached = (function __BEH__inspector_detached(this$,m){if(cljs.core._EQ_.call(null,"replaced_with_devtools",new cljs.core.Keyword(null,"reason","reason",4373906870).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",4313443576).cljs$core$IFn$_invoke$arity$1(m))))
{lt.object.merge_BANG_.call(null,lt.plugins.chrometools.debugger$.debug_sidebar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reconnect-tab","reconnect-tab",3800973201),new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"show-reconnect","show-reconnect",1351513081),true], null));
lt.objs.notifos.set_msg_BANG_.call(null,"Dev tools opened: connection closed");
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"close!","close!",3951350939));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools.debugger","inspector-detached","lt.plugins.chrometools.debugger/inspector-detached",3884603772),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.debugger$.__BEH__inspector_detached,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Inspector.detached","Inspector.detached",2812434459),null], null), null));
lt.plugins.chrometools.debugger$.get_editor_by_filename = (function get_editor_by_filename(filename){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__8689_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__8689_SHARP_))),filename);
}),lt.object.by_tag.call(null,new cljs.core.Keyword(null,"editor","editor",4001043679))));
});
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"toggle-breakpoint","toggle-breakpoint",3260664700),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Toggle Breakpoint",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var editor = lt.objs.editor.pool.last_active.call(null);var pos = lt.objs.editor.__GT_cursor.call(null,editor);return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"toggle-breakpoint!","toggle-breakpoint!",1944001737),pos);
})], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"toggle-debug-panel","toggle-debug-panel",1356123267),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Toggle Debug Panel",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.objs.sidebar.rightbar,new cljs.core.Keyword(null,"toggle","toggle",4440567494),lt.plugins.chrometools.debugger$.debug_sidebar);
})], null));
lt.plugins.chrometools.debugger$.get_current_client = (function get_current_client(){if(cljs.core.truth_(lt.plugins.chrometools.debugger$.debug_sidebar))
{return new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.chrometools.debugger$.debug_sidebar));
} else
{return null;
}
});
lt.plugins.chrometools.debugger$.display_error = (function display_error(msg){var temp__4092__auto__ = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(lt.plugins.chrometools.debugger$.result));if(cljs.core.truth_(temp__4092__auto__))
{var msg__$1 = temp__4092__auto__;return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Failed: "),cljs.core.str(msg__$1)].join(''));
} else
{return null;
}
});
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"pause-debugger","pause-debugger",1706137994),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Debugger - Pause",new cljs.core.Keyword(null,"exec","exec",1017031683),(function() {
var G__8925 = null;
var G__8925__0 = (function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"pause-debugger","pause-debugger",1706137994),lt.plugins.chrometools.debugger$.get_current_client.call(null));
});
var G__8925__1 = (function (client){return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.pause"], null),lt.plugins.chrometools.debugger$.display_error);
});
G__8925 = function(client){
switch(arguments.length){
case 0:
return G__8925__0.call(this);
case 1:
return G__8925__1.call(this,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8925;
})()
], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"resume-debugger","resume-debugger",4240016691),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Debugger - Resume",new cljs.core.Keyword(null,"exec","exec",1017031683),(function() {
var G__8926 = null;
var G__8926__0 = (function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"resume-debugger","resume-debugger",4240016691),lt.plugins.chrometools.debugger$.get_current_client.call(null));
});
var G__8926__1 = (function (client){return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.resume"], null),(function (result){var temp__4092__auto__ = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(result));if(cljs.core.truth_(temp__4092__auto__))
{var msg = temp__4092__auto__;if(cljs.core._EQ_.call(null,msg,"Can only perform operation while paused."))
{lt.objs.notifos.set_msg_BANG_.call(null,"Debugger not paused, cannot resume");
return lt.object.raise.call(null,new cljs.core.Keyword(null,"Debugger.resumed","Debugger.resumed",1733937308),client);
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Failed: "),cljs.core.str(msg)].join(''));
}
} else
{return null;
}
}));
});
G__8926 = function(client){
switch(arguments.length){
case 0:
return G__8926__0.call(this);
case 1:
return G__8926__1.call(this,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8926;
})()
], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"step-into","step-into",2312426547),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Debugger - Step Into",new cljs.core.Keyword(null,"exec","exec",1017031683),(function() {
var G__8927 = null;
var G__8927__0 = (function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"step-into","step-into",2312426547),lt.plugins.chrometools.debugger$.get_current_client.call(null));
});
var G__8927__1 = (function (client){return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.stepInto"], null),lt.plugins.chrometools.debugger$.display_error);
});
G__8927 = function(client){
switch(arguments.length){
case 0:
return G__8927__0.call(this);
case 1:
return G__8927__1.call(this,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8927;
})()
], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"step-out","step-out",2441271359),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Debugger - Step Out",new cljs.core.Keyword(null,"exec","exec",1017031683),(function() {
var G__8928 = null;
var G__8928__0 = (function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"step-out","step-out",2441271359),lt.plugins.chrometools.debugger$.get_current_client.call(null));
});
var G__8928__1 = (function (client){return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.stepOut"], null),lt.plugins.chrometools.debugger$.display_error);
});
G__8928 = function(client){
switch(arguments.length){
case 0:
return G__8928__0.call(this);
case 1:
return G__8928__1.call(this,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8928;
})()
], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"step-over","step-over",2312612519),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Debugger - Step Over",new cljs.core.Keyword(null,"exec","exec",1017031683),(function() {
var G__8929 = null;
var G__8929__0 = (function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"step-over","step-over",2312612519),lt.plugins.chrometools.debugger$.get_current_client.call(null));
});
var G__8929__1 = (function (client){return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.stepOver"], null),lt.plugins.chrometools.debugger$.display_error);
});
G__8929 = function(client){
switch(arguments.length){
case 0:
return G__8929__0.call(this);
case 1:
return G__8929__1.call(this,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8929;
})()
], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"step-over","step-over",2312612519),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Debugger - Step Over",new cljs.core.Keyword(null,"exec","exec",1017031683),(function() {
var G__8930 = null;
var G__8930__0 = (function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"step-over","step-over",2312612519),lt.plugins.chrometools.debugger$.get_current_client.call(null));
});
var G__8930__1 = (function (client){return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.stepOver"], null),lt.plugins.chrometools.debugger$.display_error);
});
G__8930 = function(client){
switch(arguments.length){
case 0:
return G__8930__0.call(this);
case 1:
return G__8930__1.call(this,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8930;
})()
], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"activate-breakpoints","activate-breakpoints",4436508730),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Debugger - Activate Breakpoints",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function() {
var G__8931 = null;
var G__8931__0 = (function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"activate-breakpoints","activate-breakpoints",4436508730),lt.plugins.chrometools.debugger$.get_current_client.call(null));
});
var G__8931__1 = (function (client){return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.setBreakpointsActive",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),true], null)], null));
});
G__8931 = function(client){
switch(arguments.length){
case 0:
return G__8931__0.call(this);
case 1:
return G__8931__1.call(this,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8931;
})()
], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"deactivate-breakpoints","deactivate-breakpoints",2365948475),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Debugger - De-activate Breakpoints",new cljs.core.Keyword(null,"exec","exec",1017031683),(function() {
var G__8932 = null;
var G__8932__0 = (function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"activate-breakpoints","activate-breakpoints",4436508730),lt.plugins.chrometools.debugger$.get_current_client.call(null));
});
var G__8932__1 = (function (client){return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.setBreakpointsActive",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),false], null)], null));
});
G__8932 = function(client){
switch(arguments.length){
case 0:
return G__8932__0.call(this);
case 1:
return G__8932__1.call(this,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8932;
})()
], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"watch-file","watch-file",867430188),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Watch file for changes",new cljs.core.Keyword(null,"exec","exec",1017031683),(function() {
var G__8933 = null;
var G__8933__0 = (function (){var client = lt.plugins.chrometools.debugger$.get_current_client.call(null);if(cljs.core.truth_(client))
{return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"watch-file","watch-file",867430188),client);
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"Connect a client before adding watches");
}
});
var G__8933__1 = (function (client){return lt.plugins.chrometools.filewatch.open_file.call(null,client);
});
G__8933 = function(client){
switch(arguments.length){
case 0:
return G__8933__0.call(this);
case 1:
return G__8933__1.call(this,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8933;
})()
], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"watch-folder","watch-folder",1991802526),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Watch folder for changes",new cljs.core.Keyword(null,"exec","exec",1017031683),(function() {
var G__8934 = null;
var G__8934__0 = (function (){var client = lt.plugins.chrometools.debugger$.get_current_client.call(null);if(cljs.core.truth_(client))
{return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"watch-folder","watch-folder",1991802526),client);
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"Connect a client before adding watches");
}
});
var G__8934__1 = (function (client){return lt.plugins.chrometools.filewatch.open_folder.call(null,client);
});
G__8934 = function(client){
switch(arguments.length){
case 0:
return G__8934__0.call(this);
case 1:
return G__8934__1.call(this,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8934;
})()
], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.chrometools.console')) {
goog.provide('lt.plugins.chrometools.console');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('clojure.string');
goog.require('lt.plugins.chrometools');
goog.require('lt.plugins.chrometools.devtools');
goog.require('lt.objs.files');
goog.require('lt.objs.clients');
goog.require('clojure.string');
goog.require('lt.plugins.chrometools.devtools');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.console');
goog.require('lt.plugins.chrometools');
goog.require('lt.objs.clients');
lt.plugins.chrometools.console.group_stack = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* Extract group value from console log data
*/
lt.plugins.chrometools.console.__GT_group_value = (function __GT_group_value(msg){return new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"parameters","parameters",1472640348).cljs$core$IFn$_invoke$arity$1(msg)));
});
/**
* Get current group for a client. Returns nil if no group.
*/
lt.plugins.chrometools.console.get_current_group = (function get_current_group(client_id){return cljs.core.peek.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,lt.plugins.chrometools.console.group_stack),client_id));
});
/**
* Get a property by name
*/
lt.plugins.chrometools.console.get_prop_by_name = (function get_prop_by_name(result,name){var values = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(result));return cljs.core.first.call(null,cljs.core.filter.call(null,((function (values){
return (function (p1__8122_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__8122_SHARP_),name);
});})(values))
,values));
});
lt.plugins.chrometools.console.format_value = (function format_value(v){var val = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(v);return val;
});
/**
* Convert an individual property into key / value pair
*/
lt.plugins.chrometools.console.prop__GT_pair = (function prop__GT_pair(prop){var name = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(prop);if(cljs.core.not_EQ_.call(null,name,"__proto__"))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,name),lt.plugins.chrometools.console.format_value.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(prop))], null);
} else
{return null;
}
});
/**
* Convert a list of properties into a map indexed by property name
*/
lt.plugins.chrometools.console.props__GT_map = (function props__GT_map(result){var values = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(result));return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,lt.plugins.chrometools.console.prop__GT_pair,values));
});
/**
* Get runtime properties of object identified by object-id. Calls callback cb on completion
*/
lt.plugins.chrometools.console.get_properties = (function get_properties(client,object_id,cb){return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Runtime.getProperties",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"objectId","objectId",1104399404),object_id,new cljs.core.Keyword(null,"ownProperties","ownProperties",1958141131),true], null)], null),(function (d){return cb.call(null,d);
}));
});
lt.plugins.chrometools.console.handle_watch_result = (function handle_watch_result(client,msg){return lt.plugins.chrometools.console.get_properties.call(null,client,new cljs.core.Keyword(null,"objectId","objectId",1104399404).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"parameters","parameters",1472640348).cljs$core$IFn$_invoke$arity$1(msg))),(function (d){var exp = lt.plugins.chrometools.console.get_prop_by_name.call(null,d,"exp");var meta = lt.plugins.chrometools.console.get_prop_by_name.call(null,d,"meta");return lt.plugins.chrometools.console.get_properties.call(null,client,new cljs.core.Keyword(null,"objectId","objectId",1104399404).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(meta)),((function (exp,meta){
return (function (r){var meta__$1 = lt.plugins.chrometools.console.props__GT_map.call(null,r);var value = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),JSON.parse(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(exp)))], null);var value__$1 = cljs.core.assoc.call(null,value,new cljs.core.Keyword(null,"meta","meta",1017252215),meta__$1);return lt.object.raise.call(null,lt.object.by_id.call(null,new cljs.core.Keyword(null,"obj","obj",1014014057).cljs$core$IFn$_invoke$arity$1(meta__$1)),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"ev","ev",1013907491).cljs$core$IFn$_invoke$arity$1(meta__$1)),value__$1);
});})(exp,meta))
);
}));
});
lt.plugins.chrometools.console.__BEH__console_log = (function __BEH__console_log(this$,m){var id = lt.object.__GT_id.call(null,this$);var type = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",4313443576).cljs$core$IFn$_invoke$arity$1(m)));var msg = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",4313443576).cljs$core$IFn$_invoke$arity$1(m));var msg__$1 = cljs.core.assoc.call(null,msg,new cljs.core.Keyword(null,"client","client",3951159101),this$);var group = lt.plugins.chrometools.console.get_current_group.call(null,id);var G__8124 = type;if(cljs.core._EQ_.call(null,"log",G__8124))
{if(cljs.core._EQ_.call(null,group,lt.plugins.chrometools.lttools_group_name))
{return lt.plugins.chrometools.console.handle_watch_result.call(null,this$,msg__$1);
} else
{return lt.plugins.chrometools.console.handle_log_msg.call(null,msg__$1);
}
} else
{if(cljs.core._EQ_.call(null,"endGroup",G__8124))
{return cljs.core.swap_BANG_.call(null,lt.plugins.chrometools.console.group_stack,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),cljs.core.pop);
} else
{if(cljs.core._EQ_.call(null,"startGroup",G__8124))
{return cljs.core.swap_BANG_.call(null,lt.plugins.chrometools.console.group_stack,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),cljs.core.conj,lt.plugins.chrometools.console.__GT_group_value.call(null,msg__$1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));
} else
{return null;
}
}
}
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools.console","console-log","lt.plugins.chrometools.console/console-log",1026065347),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.console.__BEH__console_log,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Console.messageAdded","Console.messageAdded",4767739906),null], null), null));
lt.plugins.chrometools.console.msg__GT_log = (function msg__GT_log(m){var params = new cljs.core.Keyword(null,"parameters","parameters",1472640348).cljs$core$IFn$_invoke$arity$1(m);var client = new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(m);var iter__7081__auto__ = ((function (params,client){
return (function iter__8129(s__8130){return (new cljs.core.LazySeq(null,((function (params,client){
return (function (){var s__8130__$1 = s__8130;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8130__$1);if(temp__4092__auto__)
{var s__8130__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8130__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__8130__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__8132 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__8131 = 0;while(true){
if((i__8131 < size__7080__auto__))
{var p = cljs.core._nth.call(null,c__7079__auto__,i__8131);cljs.core.chunk_append.call(null,b__8132,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.log-val","span.log-val",3645418982),(cljs.core.truth_((function (){var and__6352__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p),"object");if(and__6352__auto__)
{var and__6352__auto____$1 = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p);if(cljs.core.truth_(and__6352__auto____$1))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p)));
} else
{return and__6352__auto____$1;
}
} else
{return and__6352__auto__;
}
})())?"null":((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p),"object"))?lt.object.__GT_content.call(null,lt.plugins.chrometools.devtools.make_inspector_object.call(null,client,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),p], null))):((new cljs.core.Keyword(null,"else","else",1017020587))?new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(p)):null)))], null));
{
var G__8161 = (i__8131 + 1);
i__8131 = G__8161;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8132),iter__8129.call(null,cljs.core.chunk_rest.call(null,s__8130__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8132),null);
}
} else
{var p = cljs.core.first.call(null,s__8130__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.log-val","span.log-val",3645418982),(cljs.core.truth_((function (){var and__6352__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p),"object");if(and__6352__auto__)
{var and__6352__auto____$1 = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p);if(cljs.core.truth_(and__6352__auto____$1))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p)));
} else
{return and__6352__auto____$1;
}
} else
{return and__6352__auto__;
}
})())?"null":((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p),"object"))?lt.object.__GT_content.call(null,lt.plugins.chrometools.devtools.make_inspector_object.call(null,client,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),p], null))):((new cljs.core.Keyword(null,"else","else",1017020587))?new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(p)):null)))], null),iter__8129.call(null,cljs.core.rest.call(null,s__8130__$2)));
}
} else
{return null;
}
break;
}
});})(params,client))
,null,null));
});})(params,client))
;return iter__7081__auto__.call(null,params);
});
lt.plugins.chrometools.console.msg__GT_string = (function msg__GT_string(m){var params = new cljs.core.Keyword(null,"parameters","parameters",1472640348).cljs$core$IFn$_invoke$arity$1(m);return cljs.core.reduce.call(null,((function (params){
return (function (res,p){return [cljs.core.str(res),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p))].join('');
});})(params))
,"",params);
});
lt.plugins.chrometools.console.error__GT_string = (function error__GT_string(e){return [cljs.core.str("ERROR: "),cljs.core.str(new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(e)),cljs.core.str(": "),cljs.core.str(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(e)),cljs.core.str("\n"),cljs.core.str(cljs.core.reduce.call(null,(function (res,f){return [cljs.core.str(res),cljs.core.str("       "),cljs.core.str(lt.objs.files.basename.call(null,new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(f))),cljs.core.str(" ["),cljs.core.str(new cljs.core.Keyword(null,"lineNumber","lineNumber",684762063).cljs$core$IFn$_invoke$arity$1(f)),cljs.core.str("]: "),cljs.core.str(((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"functionName","functionName",802531829).cljs$core$IFn$_invoke$arity$1(f)))?"anonymous":new cljs.core.Keyword(null,"functionName","functionName",802531829).cljs$core$IFn$_invoke$arity$1(f))),cljs.core.str("\n")].join('');
}),"",new cljs.core.Keyword(null,"stackTrace","stackTrace",3040184079).cljs$core$IFn$_invoke$arity$1(e)))].join('');
});
lt.plugins.chrometools.console.frame = (function frame(f){var e__7761__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.url","td.url",4428724323),lt.objs.files.basename.call(null,new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(f))," [",new cljs.core.Keyword(null,"lineNumber","lineNumber",684762063).cljs$core$IFn$_invoke$arity$1(f),"]"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"functionName","functionName",802531829).cljs$core$IFn$_invoke$arity$1(f)))?"anonymous":new cljs.core.Keyword(null,"functionName","functionName",802531829).cljs$core$IFn$_invoke$arity$1(f))], null)], null));var seq__8139_8162 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8140_8163 = null;var count__8141_8164 = 0;var i__8142_8165 = 0;while(true){
if((i__8142_8165 < count__8141_8164))
{var vec__8143_8166 = cljs.core._nth.call(null,chunk__8140_8163,i__8142_8165);var ev__7762__auto___8167 = cljs.core.nth.call(null,vec__8143_8166,0,null);var func__7763__auto___8168 = cljs.core.nth.call(null,vec__8143_8166,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___8167,func__7763__auto___8168);
{
var G__8169 = seq__8139_8162;
var G__8170 = chunk__8140_8163;
var G__8171 = count__8141_8164;
var G__8172 = (i__8142_8165 + 1);
seq__8139_8162 = G__8169;
chunk__8140_8163 = G__8170;
count__8141_8164 = G__8171;
i__8142_8165 = G__8172;
continue;
}
} else
{var temp__4092__auto___8173 = cljs.core.seq.call(null,seq__8139_8162);if(temp__4092__auto___8173)
{var seq__8139_8174__$1 = temp__4092__auto___8173;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8139_8174__$1))
{var c__7112__auto___8175 = cljs.core.chunk_first.call(null,seq__8139_8174__$1);{
var G__8176 = cljs.core.chunk_rest.call(null,seq__8139_8174__$1);
var G__8177 = c__7112__auto___8175;
var G__8178 = cljs.core.count.call(null,c__7112__auto___8175);
var G__8179 = 0;
seq__8139_8162 = G__8176;
chunk__8140_8163 = G__8177;
count__8141_8164 = G__8178;
i__8142_8165 = G__8179;
continue;
}
} else
{var vec__8144_8180 = cljs.core.first.call(null,seq__8139_8174__$1);var ev__7762__auto___8181 = cljs.core.nth.call(null,vec__8144_8180,0,null);var func__7763__auto___8182 = cljs.core.nth.call(null,vec__8144_8180,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___8181,func__7763__auto___8182);
{
var G__8183 = cljs.core.next.call(null,seq__8139_8174__$1);
var G__8184 = null;
var G__8185 = 0;
var G__8186 = 0;
seq__8139_8162 = G__8183;
chunk__8140_8163 = G__8184;
count__8141_8164 = G__8185;
i__8142_8165 = G__8186;
continue;
}
}
} else
{}
}
break;
}
return e__7761__auto__;
});
lt.plugins.chrometools.console.handle_log_msg = (function (){var method_table__7222__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__7223__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__7224__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__7225__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__7226__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle-log-msg",new cljs.core.Keyword(null,"level","level",1116770038),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__7226__auto__,method_table__7222__auto__,prefer_table__7223__auto__,method_cache__7224__auto__,cached_hierarchy__7225__auto__));
})();
lt.plugins.chrometools.console.valid_error_QMARK_ = (function valid_error_QMARK_(text){var text__$1 = text.toLowerCase();return cljs.core.every_QMARK_.call(null,((function (text__$1){
return (function (p1__8145_SHARP_){return cljs.core._EQ_.call(null,-1,text__$1.indexOf(p1__8145_SHARP_));
});})(text__$1))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["failed to load resource: http://app.kodowa.com"], null));
});
cljs.core._add_method.call(null,lt.plugins.chrometools.console.handle_log_msg,"error",(function (msg){if(lt.plugins.chrometools.console.valid_error_QMARK_.call(null,[cljs.core.str(new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str(": "),cljs.core.str(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(msg))].join('')))
{var top = cljs.core.first.call(null,new cljs.core.Keyword(null,"stackTrace","stackTrace",3040184079).cljs$core$IFn$_invoke$arity$1(msg));return lt.objs.console.verbatim.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",1013907517),new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(msg),(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(top))?null:[cljs.core.str(": "),cljs.core.str(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(msg))].join(''))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),(function (){var iter__7081__auto__ = ((function (top){
return (function iter__8146(s__8147){return (new cljs.core.LazySeq(null,((function (top){
return (function (){var s__8147__$1 = s__8147;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8147__$1);if(temp__4092__auto__)
{var s__8147__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8147__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__8147__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__8149 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__8148 = 0;while(true){
if((i__8148 < size__7080__auto__))
{var f = cljs.core._nth.call(null,c__7079__auto__,i__8148);cljs.core.chunk_append.call(null,b__8149,lt.plugins.chrometools.console.frame.call(null,f));
{
var G__8187 = (i__8148 + 1);
i__8148 = G__8187;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8149),iter__8146.call(null,cljs.core.chunk_rest.call(null,s__8147__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8149),null);
}
} else
{var f = cljs.core.first.call(null,s__8147__$2);return cljs.core.cons.call(null,lt.plugins.chrometools.console.frame.call(null,f),iter__8146.call(null,cljs.core.rest.call(null,s__8147__$2)));
}
} else
{return null;
}
break;
}
});})(top))
,null,null));
});})(top))
;return iter__7081__auto__.call(null,new cljs.core.Keyword(null,"stackTrace","stackTrace",3040184079).cljs$core$IFn$_invoke$arity$1(msg));
})()], null)], null),"error",lt.plugins.chrometools.console.error__GT_string.call(null,msg));
} else
{return null;
}
}));
cljs.core._add_method.call(null,lt.plugins.chrometools.console.handle_log_msg,"log",(function (msg){var stack = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__8150_SHARP_){return cljs.core.not_EQ_.call(null,lt.objs.files.basename.call(null,new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(p1__8150_SHARP_)),"bootstrap.js");
}),new cljs.core.Keyword(null,"stackTrace","stackTrace",3040184079).cljs$core$IFn$_invoke$arity$1(msg)));var stack__$1 = ((cljs.core.not.call(null,stack))?cljs.core.first.call(null,new cljs.core.Keyword(null,"stackTrace","stackTrace",3040184079).cljs$core$IFn$_invoke$arity$1(msg)):stack);return lt.objs.console.loc_log.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",1017047278),lt.objs.files.basename.call(null,new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(stack__$1)),new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"lineNumber","lineNumber",684762063).cljs$core$IFn$_invoke$arity$1(stack__$1),new cljs.core.Keyword(null,"content","content",1965434859),lt.plugins.chrometools.console.msg__GT_log.call(null,msg),new cljs.core.Keyword(null,"str-content","str-content",1379403855),lt.plugins.chrometools.console.msg__GT_string.call(null,msg)], null));
}));
cljs.core._add_method.call(null,lt.plugins.chrometools.console.handle_log_msg,"warning",(function (msg){return lt.objs.console.loc_log.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",1017047278),lt.objs.files.basename.call(null,new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(msg)),new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"class","class",1108647146),"warning",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"str-content","str-content",1379403855),new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(msg)], null));
}));
cljs.core._add_method.call(null,lt.plugins.chrometools.console.handle_log_msg,new cljs.core.Keyword(null,"default","default",2558708147),(function (msg){return lt.objs.console.loc_log.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",1017047278),lt.objs.files.basename.call(null,new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(msg)),new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"str-content","str-content",1379403855),new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(msg)], null));
}));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.chrometools.eval')) {
goog.provide('lt.plugins.chrometools.eval');
goog.require('cljs.core');
goog.require('lt.plugins.chrometools');
goog.require('lt.objs.files');
goog.require('lt.plugins.chrometools');
goog.require('lt.plugins.js');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('clojure.string');
goog.require('lt.plugins.chrometools.devtools');
goog.require('lt.objs.files');
goog.require('clojure.string');
goog.require('lt.plugins.chrometools.devtools');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.plugins.chrometools');
lt.plugins.chrometools.eval.eval_js = (function eval_js(client,msg,cb){var temp__4090__auto__ = lt.plugins.chrometools.__GT_call_frame_id.call(null,client);if(cljs.core.truth_(temp__4090__auto__))
{var call_frame = temp__4090__auto__;return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.evaluateOnCallFrame",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"callFrameId","callFrameId",4288173724),call_frame,new cljs.core.Keyword(null,"expression","expression",3513419274),new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(msg)], null)], null),cb);
} else
{return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Runtime.evaluate",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expression","expression",3513419274),new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(msg)], null)], null),cb);
}
});
lt.plugins.chrometools.eval.eval_js_form = (function eval_js_form(this$,msg){var data = cljs.core.assoc.call(null,new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"code","code",1016963423),new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg)));lt.plugins.chrometools.eval.eval_js.call(null,this$,data,((function (data){
return (function (res){var result = lt.plugins.chrometools.devtools.inspector__GT_result.call(null,this$,res);var req = new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg);var result__$1 = cljs.core.assoc.call(null,result,new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(req),new cljs.core.Keyword(null,"no-inspect","no-inspect",887813498),true);if(cljs.core.not.call(null,new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(result__$1)))
{return lt.plugins.chrometools.handle_cb.call(null,new cljs.core.Keyword(null,"cb","cb",1013907409).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"editor.eval.js.result","editor.eval.js.result",3021062051),result__$1);
} else
{return lt.plugins.chrometools.handle_cb.call(null,new cljs.core.Keyword(null,"cb","cb",1013907409).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"editor.eval.js.exception","editor.eval.js.exception",723801901),result__$1);
}
});})(data))
);
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"editor.eval.js.change-live!","editor.eval.js.change-live!",3424692446),msg);
});
lt.plugins.chrometools.eval.changelive_BANG_ = (function changelive_BANG_(client,obj,path,code,cb,else$){var temp__4090__auto__ = lt.plugins.chrometools.find_script.call(null,client,path);if(cljs.core.truth_(temp__4090__auto__))
{var s = temp__4090__auto__;var id = new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.vals.call(null,s)));return lt.plugins.chrometools.script_exists_QMARK_.call(null,client,id,((function (id,s,temp__4090__auto__){
return (function (exists_QMARK_){if(cljs.core.not.call(null,exists_QMARK_))
{lt.plugins.chrometools.remove_script_BANG_.call(null,client,path,id);
return changelive_BANG_.call(null,client,obj,path,code,cb,else$);
} else
{lt.object.merge_BANG_.call(null,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"script-id","script-id",1263804623),id], null));
return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.setScriptSource",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scriptId","scriptId",606324408),id,new cljs.core.Keyword(null,"scriptSource","scriptSource",3711898680),code], null)], null),cb);
}
});})(id,s,temp__4090__auto__))
);
} else
{return else$.call(null);
}
});
lt.plugins.chrometools.eval.extra_escape = (function extra_escape(code){return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,code,"\\","\\\\"),"\n","\\n"),"\"","\\\""),"'","\\'");
});
lt.plugins.chrometools.eval.css_eval_message = (function css_eval_message(path,code){return [cljs.core.str("\n       var name = \""),cljs.core.str(clojure.string.replace.call(null,path,/[\/.]/,"_")),cljs.core.str("\";\n       var existing = document.querySelector(\"#\" + name);\n      // Remove existing that we have already added\n      if(existing) {\n        existing.parentNode.removeChild(existing);\n      }\n      // Also try removing existing stylesheet linked in document\n      lttools.removeStylesheet(\""),cljs.core.str(path),cljs.core.str("\");\n\n      var neue = document.createElement(\"style\");\n      neue.id = name;\n      neue.type = \"text/css\";\n      neue.innerHTML = \""),cljs.core.str(lt.plugins.chrometools.eval.extra_escape.call(null,code)),cljs.core.str("\";\n\n      document.head.appendChild(neue);\n")].join('');
});
lt.plugins.chrometools.eval.__BEH__css_eval = (function __BEH__css_eval(this$,msg){var css_msg = lt.plugins.chrometools.eval.css_eval_message.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg)),new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg)));return lt.plugins.chrometools.send.call(null,this$,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Runtime.evaluate",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expression","expression",3513419274),css_msg], null)], null),((function (css_msg){
return (function (r){return cljs.core.println.call(null,r);
});})(css_msg))
);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools.eval","css-eval","lt.plugins.chrometools.eval/css-eval",2119760476),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.eval.__BEH__css_eval,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.css!","editor.eval.css!",3156315329),null], null), null));
lt.plugins.chrometools.eval.__BEH__js_eval = (function __BEH__js_eval(this$,msg){if(cljs.core.truth_(lt.plugins.chrometools.must_eval_file_QMARK_.call(null,this$,msg)))
{var temp__4092__auto__ = lt.object.by_id.call(null,new cljs.core.Keyword(null,"cb","cb",1013907409).cljs$core$IFn$_invoke$arity$1(msg));if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var data = new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg);var data__$1 = cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"code","code",1016963423),[cljs.core.str(lt.objs.editor.__GT_val.call(null,ed)),cljs.core.str("\n\n//# sourceURL="),cljs.core.str(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(data))].join(''));return lt.plugins.chrometools.eval.eval_js.call(null,this$,data__$1,((function (data,data__$1,ed,temp__4092__auto__){
return (function (res){return lt.plugins.chrometools.eval.eval_js_form.call(null,this$,msg);
});})(data,data__$1,ed,temp__4092__auto__))
);
} else
{return null;
}
} else
{return lt.plugins.chrometools.eval.eval_js_form.call(null,this$,msg);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools.eval","js-eval","lt.plugins.chrometools.eval/js-eval",2259257822),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.eval.__BEH__js_eval,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.js!","editor.eval.js!",1083020921),null], null), null));
lt.plugins.chrometools.eval.__BEH__change_live = (function __BEH__change_live(this$,msg){var temp__4092__auto__ = lt.object.by_id.call(null,new cljs.core.Keyword(null,"cb","cb",1013907409).cljs$core$IFn$_invoke$arity$1(msg));if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;if(cljs.core.truth_(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg))))
{var code = new cljs.core.Keyword(null,"full-source","full-source",2886038667).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg));var code__$1 = (((code == null))?lt.plugins.watches.watched_range(ed,null,null,lt.plugins.js.src__GT_watch):code);return lt.plugins.chrometools.eval.changelive_BANG_.call(null,this$,ed,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg)),code__$1,((function (code,code__$1,ed,temp__4092__auto__){
return (function (res){if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(res)))
{lt.objs.notifos.set_msg_BANG_.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(res)));
return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.eval.js.change-live.error","editor.eval.js.change-live.error",2227540897),new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(res));
} else
{lt.objs.notifos.set_msg_BANG_.call(null,"LiveEdit Success: Script updated");
return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.eval.js.change-live.success","editor.eval.js.change-live.success",2994410460));
}
});})(code,code__$1,ed,temp__4092__auto__))
,cljs.core.identity);
} else
{return null;
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools.eval","change-live","lt.plugins.chrometools.eval/change-live",2754014613),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.eval.__BEH__change_live,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.js.change-live!","editor.eval.js.change-live!",3424692446),null], null), null));
lt.plugins.chrometools.eval.__BEH__cljs_result_inspector = (function __BEH__cljs_result_inspector(editor,res){var meta = new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res);var loc = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"end-line","end-line",2693041432).cljs$core$IFn$_invoke$arity$1(meta) - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"end-column","end-column",3799845882).cljs$core$IFn$_invoke$arity$1(meta),new cljs.core.Keyword(null,"start-line","start-line",3689311729),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(meta) - 1)], null);var str_result = (cljs.core.truth_(new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res))?new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res):"undefined");return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),str_result,loc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",4328760836)," = "], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools.eval","cljs-result-inspector","lt.plugins.chrometools.eval/cljs-result-inspector",4727339584),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.eval.__BEH__cljs_result_inspector,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.cljs.result.inspector","editor.eval.cljs.result.inspector",2330385955),null], null), null));
lt.plugins.chrometools.eval.eval_cljs = (function eval_cljs(client,msg,cb){return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Runtime.evaluate",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expression","expression",3513419274),new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(msg)], null)], null),cb);
});
lt.plugins.chrometools.eval.cljs_eval_cb = (function cljs_eval_cb(client,msg,form,r){var result = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(r);var error_QMARK_ = (function (){var or__6364__auto__ = (result == null);if(or__6364__auto__)
{return or__6364__auto__;
} else
{return new cljs.core.Keyword(null,"wasThrown","wasThrown",3712175619).cljs$core$IFn$_invoke$arity$1(result);
}
})();var error = (function (){var or__6364__auto__ = new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(result);if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(result));
}
})();var meta = new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(form);var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"result-type","result-type",4725630556),"inspector");var result__$1 = lt.plugins.chrometools.devtools.inspector__GT_result.call(null,client,r);var result__$2 = cljs.core.assoc.call(null,result__$1,new cljs.core.Keyword(null,"meta","meta",1017252215),meta__$1,new cljs.core.Keyword(null,"no-inspect","no-inspect",887813498),true);if(cljs.core.truth_(error_QMARK_))
{return lt.plugins.chrometools.handle_cb.call(null,new cljs.core.Keyword(null,"cb","cb",1013907409).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"editor.eval.cljs.exception","editor.eval.cljs.exception",4479049174),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ex","ex",1013907493),error,new cljs.core.Keyword(null,"meta","meta",1017252215),cljs.core.merge.call(null,new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(form))], null));
} else
{return lt.plugins.chrometools.handle_cb.call(null,new cljs.core.Keyword(null,"cb","cb",1013907409).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"editor.eval.cljs.result","editor.eval.cljs.result",1580065178),result__$2);
}
});
lt.plugins.chrometools.eval.__BEH__cljs_exec = (function __BEH__cljs_exec(this$,msg,form){var temp__4092__auto__ = lt.object.by_id.call(null,new cljs.core.Keyword(null,"cb","cb",1013907409).cljs$core$IFn$_invoke$arity$1(msg));if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var info = new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg);var seq__9071 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(info));var chunk__9072 = null;var count__9073 = 0;var i__9074 = 0;while(true){
if((i__9074 < count__9073))
{var form__$1 = cljs.core._nth.call(null,chunk__9072,i__9074);var cb_9085 = cljs.core.partial.call(null,lt.plugins.chrometools.eval.cljs_eval_cb,this$,msg,form__$1);lt.plugins.chrometools.eval.eval_cljs.call(null,this$,form__$1,cb_9085);
{
var G__9086 = seq__9071;
var G__9087 = chunk__9072;
var G__9088 = count__9073;
var G__9089 = (i__9074 + 1);
seq__9071 = G__9086;
chunk__9072 = G__9087;
count__9073 = G__9088;
i__9074 = G__9089;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__9071);if(temp__4092__auto____$1)
{var seq__9071__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9071__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__9071__$1);{
var G__9090 = cljs.core.chunk_rest.call(null,seq__9071__$1);
var G__9091 = c__7112__auto__;
var G__9092 = cljs.core.count.call(null,c__7112__auto__);
var G__9093 = 0;
seq__9071 = G__9090;
chunk__9072 = G__9091;
count__9073 = G__9092;
i__9074 = G__9093;
continue;
}
} else
{var form__$1 = cljs.core.first.call(null,seq__9071__$1);var cb_9094 = cljs.core.partial.call(null,lt.plugins.chrometools.eval.cljs_eval_cb,this$,msg,form__$1);lt.plugins.chrometools.eval.eval_cljs.call(null,this$,form__$1,cb_9094);
{
var G__9095 = cljs.core.next.call(null,seq__9071__$1);
var G__9096 = null;
var G__9097 = 0;
var G__9098 = 0;
seq__9071 = G__9095;
chunk__9072 = G__9096;
count__9073 = G__9097;
i__9074 = G__9098;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools.eval","cljs-exec","lt.plugins.chrometools.eval/cljs-exec",1697642098),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.eval.__BEH__cljs_exec,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.cljs.exec!","editor.eval.cljs.exec!",743618999),null], null), null));
}

//# sourceMappingURL=chrometools_compiled.js.map