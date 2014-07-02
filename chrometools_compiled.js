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
lt.plugins.chrometools.server_input = (function server_input(){var e__7802__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"host:port",new cljs.core.Keyword(null,"value","value",1125876963),"localhost:"], null)], null));var seq__8120_8244 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",1111509066),((function (e__7802__auto__){
return (function (){return lt.objs.context.in_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
});})(e__7802__auto__))
,new cljs.core.Keyword(null,"blur","blur",1016931289),((function (e__7802__auto__){
return (function (){return lt.objs.context.out_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
});})(e__7802__auto__))
], null)));var chunk__8121_8245 = null;var count__8122_8246 = 0;var i__8123_8247 = 0;while(true){
if((i__8123_8247 < count__8122_8246))
{var vec__8124_8248 = cljs.core._nth.call(null,chunk__8121_8245,i__8123_8247);var ev__7803__auto___8249 = cljs.core.nth.call(null,vec__8124_8248,0,null);var func__7804__auto___8250 = cljs.core.nth.call(null,vec__8124_8248,1,null);lt.util.dom.on.call(null,e__7802__auto__,ev__7803__auto___8249,func__7804__auto___8250);
{
var G__8251 = seq__8120_8244;
var G__8252 = chunk__8121_8245;
var G__8253 = count__8122_8246;
var G__8254 = (i__8123_8247 + 1);
seq__8120_8244 = G__8251;
chunk__8121_8245 = G__8252;
count__8122_8246 = G__8253;
i__8123_8247 = G__8254;
continue;
}
} else
{var temp__4092__auto___8255 = cljs.core.seq.call(null,seq__8120_8244);if(temp__4092__auto___8255)
{var seq__8120_8256__$1 = temp__4092__auto___8255;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8120_8256__$1))
{var c__7121__auto___8257 = cljs.core.chunk_first.call(null,seq__8120_8256__$1);{
var G__8258 = cljs.core.chunk_rest.call(null,seq__8120_8256__$1);
var G__8259 = c__7121__auto___8257;
var G__8260 = cljs.core.count.call(null,c__7121__auto___8257);
var G__8261 = 0;
seq__8120_8244 = G__8258;
chunk__8121_8245 = G__8259;
count__8122_8246 = G__8260;
i__8123_8247 = G__8261;
continue;
}
} else
{var vec__8125_8262 = cljs.core.first.call(null,seq__8120_8256__$1);var ev__7803__auto___8263 = cljs.core.nth.call(null,vec__8125_8262,0,null);var func__7804__auto___8264 = cljs.core.nth.call(null,vec__8125_8262,1,null);lt.util.dom.on.call(null,e__7802__auto__,ev__7803__auto___8263,func__7804__auto___8264);
{
var G__8265 = cljs.core.next.call(null,seq__8120_8256__$1);
var G__8266 = null;
var G__8267 = 0;
var G__8268 = 0;
seq__8120_8244 = G__8265;
chunk__8121_8245 = G__8266;
count__8122_8246 = G__8267;
i__8123_8247 = G__8268;
continue;
}
}
} else
{}
}
break;
}
return e__7802__auto__;
});
lt.plugins.chrometools.cache_key = new cljs.core.Keyword("lt.plugins.chrometools","chrome-debugger-server","lt.plugins.chrometools/chrome-debugger-server",4300429430);
lt.plugins.chrometools.connect_to_remote = (function connect_to_remote(server,client){var vec__8127 = clojure.string.split.call(null,server,":");var host = cljs.core.nth.call(null,vec__8127,0,null);var port = cljs.core.nth.call(null,vec__8127,1,null);if(cljs.core.truth_((function (){var and__6361__auto__ = host;if(cljs.core.truth_(and__6361__auto__))
{return port;
} else
{return and__6361__auto__;
}
})()))
{var client__$1 = (function (){var or__6373__auto__ = client;if(cljs.core.truth_(or__6373__auto__))
{return or__6373__auto__;
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
return (function (p1__8128_SHARP_){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"message","message",1968829305),lt.util.cljs.js__GT_clj.call(null,JSON.parse(p1__8128_SHARP_.data),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true));
});})(sock))
;
sock.onerror = ((function (sock){
return (function (p1__8129_SHARP_){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"error","error",1110689146),p1__8129_SHARP_);
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
var send__delegate = function (client,m,p__8130){var vec__8132 = p__8130;var cb = cljs.core.nth.call(null,vec__8132,0,null);if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))))
{return lt.plugins.chrometools.send_STAR_.call(null,client,m,cb);
} else
{return lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1121848451)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [client,m,cb], null));
}
};
var send = function (client,m,var_args){
var p__8130 = null;if (arguments.length > 2) {
  p__8130 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return send__delegate.call(this,client,m,p__8130);};
send.cljs$lang$maxFixedArity = 2;
send.cljs$lang$applyTo = (function (arglist__8269){
var client = cljs.core.first(arglist__8269);
arglist__8269 = cljs.core.next(arglist__8269);
var m = cljs.core.first(arglist__8269);
var p__8130 = cljs.core.rest(arglist__8269);
return send__delegate(client,m,p__8130);
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
lt.plugins.chrometools.__BEH__close = (function __BEH__close(this$){var temp__4092__auto___8270 = new cljs.core.Keyword(null,"socket","socket",4411822821).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8270))
{var socket_8271 = temp__4092__auto___8270;socket_8271.close();
} else
{}
cljs.core.swap_BANG_.call(null,lt.plugins.chrometools.connected_tabs,cljs.core.dissoc,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));
return lt.objs.clients.rem_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools","close","lt.plugins.chrometools/close",1334675834),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.__BEH__close,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close!","close!",3951350939),null], null), null));
lt.plugins.chrometools.__BEH__clear_queue_on_connect = (function __BEH__clear_queue_on_connect(this$){var seq__8141_8272 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"queue","queue",1121848451).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var chunk__8142_8273 = null;var count__8143_8274 = 0;var i__8144_8275 = 0;while(true){
if((i__8144_8275 < count__8143_8274))
{var msg_8276 = cljs.core._nth.call(null,chunk__8142_8273,i__8144_8275);cljs.core.apply.call(null,lt.plugins.chrometools.send,msg_8276);
{
var G__8277 = seq__8141_8272;
var G__8278 = chunk__8142_8273;
var G__8279 = count__8143_8274;
var G__8280 = (i__8144_8275 + 1);
seq__8141_8272 = G__8277;
chunk__8142_8273 = G__8278;
count__8143_8274 = G__8279;
i__8144_8275 = G__8280;
continue;
}
} else
{var temp__4092__auto___8281 = cljs.core.seq.call(null,seq__8141_8272);if(temp__4092__auto___8281)
{var seq__8141_8282__$1 = temp__4092__auto___8281;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8141_8282__$1))
{var c__7121__auto___8283 = cljs.core.chunk_first.call(null,seq__8141_8282__$1);{
var G__8284 = cljs.core.chunk_rest.call(null,seq__8141_8282__$1);
var G__8285 = c__7121__auto___8283;
var G__8286 = cljs.core.count.call(null,c__7121__auto___8283);
var G__8287 = 0;
seq__8141_8272 = G__8284;
chunk__8142_8273 = G__8285;
count__8143_8274 = G__8286;
i__8144_8275 = G__8287;
continue;
}
} else
{var msg_8288 = cljs.core.first.call(null,seq__8141_8282__$1);cljs.core.apply.call(null,lt.plugins.chrometools.send,msg_8288);
{
var G__8289 = cljs.core.next.call(null,seq__8141_8282__$1);
var G__8290 = null;
var G__8291 = 0;
var G__8292 = 0;
seq__8141_8272 = G__8289;
chunk__8142_8273 = G__8290;
count__8143_8274 = G__8291;
i__8144_8275 = G__8292;
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
return (function (){var seq__8145 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"queued-callbacks","queued-callbacks",3801666662).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var chunk__8146 = null;var count__8147 = 0;var i__8148 = 0;while(true){
if((i__8148 < count__8147))
{var cb = cljs.core._nth.call(null,chunk__8146,i__8148);cb.call(null);
{
var G__8293 = seq__8145;
var G__8294 = chunk__8146;
var G__8295 = count__8147;
var G__8296 = (i__8148 + 1);
seq__8145 = G__8293;
chunk__8146 = G__8294;
count__8147 = G__8295;
i__8148 = G__8296;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__8145);if(temp__4092__auto____$1)
{var seq__8145__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8145__$1))
{var c__7121__auto__ = cljs.core.chunk_first.call(null,seq__8145__$1);{
var G__8297 = cljs.core.chunk_rest.call(null,seq__8145__$1);
var G__8298 = c__7121__auto__;
var G__8299 = cljs.core.count.call(null,c__7121__auto__);
var G__8300 = 0;
seq__8145 = G__8297;
chunk__8146 = G__8298;
count__8147 = G__8299;
i__8148 = G__8300;
continue;
}
} else
{var cb = cljs.core.first.call(null,seq__8145__$1);cb.call(null);
{
var G__8301 = cljs.core.next.call(null,seq__8145__$1);
var G__8302 = null;
var G__8303 = 0;
var G__8304 = 0;
seq__8145 = G__8301;
chunk__8146 = G__8302;
count__8147 = G__8303;
i__8148 = G__8304;
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
lt.objs.files.exists_QMARK_.call(null,lt.objs.files.join.call(null,lt.objs.plugins.user_plugins_dir,"chrometools"));
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
lt.plugins.chrometools.store_source_map = (function store_source_map(client,url,params,sm){var params__$1 = cljs.core.assoc.call(null,params,new cljs.core.Keyword(null,"sourceMap","sourceMap",3610443443),sm);var seq__8153 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"sources","sources",3286994730).cljs$core$IFn$_invoke$arity$1(sm));var chunk__8154 = null;var count__8155 = 0;var i__8156 = 0;while(true){
if((i__8156 < count__8155))
{var source = cljs.core._nth.call(null,chunk__8154,i__8156);lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scripts","scripts",2940419194)], null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.files.basename.call(null,source),url], null),params__$1);
{
var G__8305 = seq__8153;
var G__8306 = chunk__8154;
var G__8307 = count__8155;
var G__8308 = (i__8156 + 1);
seq__8153 = G__8305;
chunk__8154 = G__8306;
count__8155 = G__8307;
i__8156 = G__8308;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8153);if(temp__4092__auto__)
{var seq__8153__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8153__$1))
{var c__7121__auto__ = cljs.core.chunk_first.call(null,seq__8153__$1);{
var G__8309 = cljs.core.chunk_rest.call(null,seq__8153__$1);
var G__8310 = c__7121__auto__;
var G__8311 = cljs.core.count.call(null,c__7121__auto__);
var G__8312 = 0;
seq__8153 = G__8309;
chunk__8154 = G__8310;
count__8155 = G__8311;
i__8156 = G__8312;
continue;
}
} else
{var source = cljs.core.first.call(null,seq__8153__$1);lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scripts","scripts",2940419194)], null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.files.basename.call(null,source),url], null),params__$1);
{
var G__8313 = cljs.core.next.call(null,seq__8153__$1);
var G__8314 = null;
var G__8315 = 0;
var G__8316 = 0;
seq__8153 = G__8313;
chunk__8154 = G__8314;
count__8155 = G__8315;
i__8156 = G__8316;
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
}catch (e8158){var e = e8158;cljs.core.println.call(null,"Failed to parse source-map ",sm_url);
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
lt.plugins.chrometools.dismiss_button = (function dismiss_button(obj){var e__7802__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tab-close","span.tab-close",4094760846),"x"], null));var seq__8165_8317 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7802__auto__){
return (function (){return lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"remove-label","remove-label",3359640541));
});})(e__7802__auto__))
], null)));var chunk__8166_8318 = null;var count__8167_8319 = 0;var i__8168_8320 = 0;while(true){
if((i__8168_8320 < count__8167_8319))
{var vec__8169_8321 = cljs.core._nth.call(null,chunk__8166_8318,i__8168_8320);var ev__7803__auto___8322 = cljs.core.nth.call(null,vec__8169_8321,0,null);var func__7804__auto___8323 = cljs.core.nth.call(null,vec__8169_8321,1,null);lt.util.dom.on.call(null,e__7802__auto__,ev__7803__auto___8322,func__7804__auto___8323);
{
var G__8324 = seq__8165_8317;
var G__8325 = chunk__8166_8318;
var G__8326 = count__8167_8319;
var G__8327 = (i__8168_8320 + 1);
seq__8165_8317 = G__8324;
chunk__8166_8318 = G__8325;
count__8167_8319 = G__8326;
i__8168_8320 = G__8327;
continue;
}
} else
{var temp__4092__auto___8328 = cljs.core.seq.call(null,seq__8165_8317);if(temp__4092__auto___8328)
{var seq__8165_8329__$1 = temp__4092__auto___8328;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8165_8329__$1))
{var c__7121__auto___8330 = cljs.core.chunk_first.call(null,seq__8165_8329__$1);{
var G__8331 = cljs.core.chunk_rest.call(null,seq__8165_8329__$1);
var G__8332 = c__7121__auto___8330;
var G__8333 = cljs.core.count.call(null,c__7121__auto___8330);
var G__8334 = 0;
seq__8165_8317 = G__8331;
chunk__8166_8318 = G__8332;
count__8167_8319 = G__8333;
i__8168_8320 = G__8334;
continue;
}
} else
{var vec__8170_8335 = cljs.core.first.call(null,seq__8165_8329__$1);var ev__7803__auto___8336 = cljs.core.nth.call(null,vec__8170_8335,0,null);var func__7804__auto___8337 = cljs.core.nth.call(null,vec__8170_8335,1,null);lt.util.dom.on.call(null,e__7802__auto__,ev__7803__auto___8336,func__7804__auto___8337);
{
var G__8338 = cljs.core.next.call(null,seq__8165_8329__$1);
var G__8339 = null;
var G__8340 = 0;
var G__8341 = 0;
seq__8165_8317 = G__8338;
chunk__8166_8318 = G__8339;
count__8167_8319 = G__8340;
i__8168_8320 = G__8341;
continue;
}
}
} else
{}
}
break;
}
return e__7802__auto__;
});
lt.plugins.chrometools.reconnect_button = (function reconnect_button(label,tab){var e__7802__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"reconnect-chrome button"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),[cljs.core.str("Reconnect: "),cljs.core.str(new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(tab))].join('')], null),lt.plugins.chrometools.dismiss_button.call(null,label)], null));var seq__8177_8342 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7802__auto__){
return (function (e){var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"chrome.client.remote","chrome.client.remote",4091478727));return lt.plugins.chrometools.connect_tab.call(null,client,tab);
});})(e__7802__auto__))
], null)));var chunk__8178_8343 = null;var count__8179_8344 = 0;var i__8180_8345 = 0;while(true){
if((i__8180_8345 < count__8179_8344))
{var vec__8181_8346 = cljs.core._nth.call(null,chunk__8178_8343,i__8180_8345);var ev__7803__auto___8347 = cljs.core.nth.call(null,vec__8181_8346,0,null);var func__7804__auto___8348 = cljs.core.nth.call(null,vec__8181_8346,1,null);lt.util.dom.on.call(null,e__7802__auto__,ev__7803__auto___8347,func__7804__auto___8348);
{
var G__8349 = seq__8177_8342;
var G__8350 = chunk__8178_8343;
var G__8351 = count__8179_8344;
var G__8352 = (i__8180_8345 + 1);
seq__8177_8342 = G__8349;
chunk__8178_8343 = G__8350;
count__8179_8344 = G__8351;
i__8180_8345 = G__8352;
continue;
}
} else
{var temp__4092__auto___8353 = cljs.core.seq.call(null,seq__8177_8342);if(temp__4092__auto___8353)
{var seq__8177_8354__$1 = temp__4092__auto___8353;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8177_8354__$1))
{var c__7121__auto___8355 = cljs.core.chunk_first.call(null,seq__8177_8354__$1);{
var G__8356 = cljs.core.chunk_rest.call(null,seq__8177_8354__$1);
var G__8357 = c__7121__auto___8355;
var G__8358 = cljs.core.count.call(null,c__7121__auto___8355);
var G__8359 = 0;
seq__8177_8342 = G__8356;
chunk__8178_8343 = G__8357;
count__8179_8344 = G__8358;
i__8180_8345 = G__8359;
continue;
}
} else
{var vec__8182_8360 = cljs.core.first.call(null,seq__8177_8354__$1);var ev__7803__auto___8361 = cljs.core.nth.call(null,vec__8182_8360,0,null);var func__7804__auto___8362 = cljs.core.nth.call(null,vec__8182_8360,1,null);lt.util.dom.on.call(null,e__7802__auto__,ev__7803__auto___8361,func__7804__auto___8362);
{
var G__8363 = cljs.core.next.call(null,seq__8177_8354__$1);
var G__8364 = null;
var G__8365 = 0;
var G__8366 = 0;
seq__8177_8342 = G__8363;
chunk__8178_8343 = G__8364;
count__8179_8344 = G__8365;
i__8180_8345 = G__8366;
continue;
}
}
} else
{}
}
break;
}
return e__7802__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools","reconnect-label","lt.plugins.chrometools/reconnect-label",2855517336),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reconnect-label","reconnect-label",3615163504),null], null), null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,tab){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab","tab",1014018823),tab], null));
return lt.plugins.chrometools.reconnect_button.call(null,this$,tab);
}));
lt.plugins.chrometools.__BEH__on_remove_reconnect_label = (function __BEH__on_remove_reconnect_label(this$){return lt.object.destroy_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools","on-remove-reconnect-label","lt.plugins.chrometools/on-remove-reconnect-label",1411327027),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.__BEH__on_remove_reconnect_label,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remove-label","remove-label",3359640541),null], null), null));
lt.plugins.chrometools.__BEH__remove_label = (function __BEH__remove_label(this$,that){var id = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var labels = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"reconnect-label","reconnect-label",3615163504));var seq__8189 = cljs.core.seq.call(null,labels);var chunk__8191 = null;var count__8192 = 0;var i__8193 = 0;while(true){
if((i__8193 < count__8192))
{var label = cljs.core._nth.call(null,chunk__8191,i__8193);if(cljs.core.truth_((function (){var and__6361__auto__ = label;if(cljs.core.truth_(and__6361__auto__))
{return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,label))),id);
} else
{return and__6361__auto__;
}
})()))
{lt.object.raise.call(null,label,new cljs.core.Keyword(null,"remove-label","remove-label",3359640541));
{
var G__8367 = seq__8189;
var G__8368 = chunk__8191;
var G__8369 = count__8192;
var G__8370 = (i__8193 + 1);
seq__8189 = G__8367;
chunk__8191 = G__8368;
count__8192 = G__8369;
i__8193 = G__8370;
continue;
}
} else
{{
var G__8371 = seq__8189;
var G__8372 = chunk__8191;
var G__8373 = count__8192;
var G__8374 = (i__8193 + 1);
seq__8189 = G__8371;
chunk__8191 = G__8372;
count__8192 = G__8373;
i__8193 = G__8374;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8189);if(temp__4092__auto__)
{var seq__8189__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8189__$1))
{var c__7121__auto__ = cljs.core.chunk_first.call(null,seq__8189__$1);{
var G__8375 = cljs.core.chunk_rest.call(null,seq__8189__$1);
var G__8376 = c__7121__auto__;
var G__8377 = cljs.core.count.call(null,c__7121__auto__);
var G__8378 = 0;
seq__8189 = G__8375;
chunk__8191 = G__8376;
count__8192 = G__8377;
i__8193 = G__8378;
continue;
}
} else
{var label = cljs.core.first.call(null,seq__8189__$1);if(cljs.core.truth_((function (){var and__6361__auto__ = label;if(cljs.core.truth_(and__6361__auto__))
{return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,label))),id);
} else
{return and__6361__auto__;
}
})()))
{lt.object.raise.call(null,label,new cljs.core.Keyword(null,"remove-label","remove-label",3359640541));
{
var G__8379 = cljs.core.next.call(null,seq__8189__$1);
var G__8380 = null;
var G__8381 = 0;
var G__8382 = 0;
seq__8189 = G__8379;
chunk__8191 = G__8380;
count__8192 = G__8381;
i__8193 = G__8382;
continue;
}
} else
{{
var G__8383 = cljs.core.next.call(null,seq__8189__$1);
var G__8384 = null;
var G__8385 = 0;
var G__8386 = 0;
seq__8189 = G__8383;
chunk__8191 = G__8384;
count__8192 = G__8385;
i__8193 = G__8386;
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
lt.plugins.chrometools.tab_preview = (function tab_preview(action,tab){var e__7802__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),new cljs.core.Keyword(null,"faviconUrl","faviconUrl",4346893869).cljs$core$IFn$_invoke$arity$1(tab)], null)], null),new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(tab)], null));var seq__8201_8387 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7802__auto__){
return (function (e){var temp__4092__auto___8391 = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"popup","popup",1120756766));if(cljs.core.truth_(temp__4092__auto___8391))
{var p_8392 = temp__4092__auto___8391;lt.object.raise.call(null,p_8392,new cljs.core.Keyword(null,"close!","close!",3951350939));
} else
{}
return action.call(null,tab);
});})(e__7802__auto__))
], null)));var chunk__8202_8388 = null;var count__8203_8389 = 0;var i__8204_8390 = 0;while(true){
if((i__8204_8390 < count__8203_8389))
{var vec__8205_8393 = cljs.core._nth.call(null,chunk__8202_8388,i__8204_8390);var ev__7803__auto___8394 = cljs.core.nth.call(null,vec__8205_8393,0,null);var func__7804__auto___8395 = cljs.core.nth.call(null,vec__8205_8393,1,null);lt.util.dom.on.call(null,e__7802__auto__,ev__7803__auto___8394,func__7804__auto___8395);
{
var G__8396 = seq__8201_8387;
var G__8397 = chunk__8202_8388;
var G__8398 = count__8203_8389;
var G__8399 = (i__8204_8390 + 1);
seq__8201_8387 = G__8396;
chunk__8202_8388 = G__8397;
count__8203_8389 = G__8398;
i__8204_8390 = G__8399;
continue;
}
} else
{var temp__4092__auto___8400 = cljs.core.seq.call(null,seq__8201_8387);if(temp__4092__auto___8400)
{var seq__8201_8401__$1 = temp__4092__auto___8400;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8201_8401__$1))
{var c__7121__auto___8402 = cljs.core.chunk_first.call(null,seq__8201_8401__$1);{
var G__8403 = cljs.core.chunk_rest.call(null,seq__8201_8401__$1);
var G__8404 = c__7121__auto___8402;
var G__8405 = cljs.core.count.call(null,c__7121__auto___8402);
var G__8406 = 0;
seq__8201_8387 = G__8403;
chunk__8202_8388 = G__8404;
count__8203_8389 = G__8405;
i__8204_8390 = G__8406;
continue;
}
} else
{var vec__8206_8407 = cljs.core.first.call(null,seq__8201_8401__$1);var ev__7803__auto___8408 = cljs.core.nth.call(null,vec__8206_8407,0,null);var func__7804__auto___8409 = cljs.core.nth.call(null,vec__8206_8407,1,null);lt.util.dom.on.call(null,e__7802__auto__,ev__7803__auto___8408,func__7804__auto___8409);
{
var G__8410 = cljs.core.next.call(null,seq__8201_8401__$1);
var G__8411 = null;
var G__8412 = 0;
var G__8413 = 0;
seq__8201_8387 = G__8410;
chunk__8202_8388 = G__8411;
count__8203_8389 = G__8412;
i__8204_8390 = G__8413;
continue;
}
}
} else
{}
}
break;
}
return e__7802__auto__;
});
lt.plugins.chrometools.connect_tab = (function connect_tab(client,tab){lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"socket","socket",4411822821),lt.plugins.chrometools.socket.call(null,client,new cljs.core.Keyword(null,"webSocketDebuggerUrl","webSocketDebuggerUrl",667502233).cljs$core$IFn$_invoke$arity$1(tab)),new cljs.core.Keyword(null,"commands","commands",4706336250),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"editor.eval.cljs.exec","editor.eval.cljs.exec",866638030),null,new cljs.core.Keyword(null,"editor.eval.css","editor.eval.css",1083014276),null,new cljs.core.Keyword(null,"editor.eval.js","editor.eval.js",1847417804),null,new cljs.core.Keyword(null,"chrome.remote.debug","chrome.remote.debug",1380405521),null], null), null),new cljs.core.Keyword(null,"tab","tab",1014018823),tab,new cljs.core.Keyword(null,"name","name",1017277949),[cljs.core.str("Chrome: "),cljs.core.str(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(tab))].join(''),new cljs.core.Keyword(null,"type","type",1017479852),"Chrome"], null));
return cljs.core.swap_BANG_.call(null,lt.plugins.chrometools.connected_tabs,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(tab),client);
});
lt.plugins.chrometools.select_tab = (function select_tab(client,tabs){var action = cljs.core.partial.call(null,lt.plugins.chrometools.connect_tab,client);var p = lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Select which tab to attach to",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul#chrome-tabs","ul#chrome-tabs",1003516535),cljs.core.map.call(null,((function (action){
return (function (p1__8207_SHARP_){return lt.plugins.chrometools.tab_preview.call(null,action,p1__8207_SHARP_);
});})(action))
,cljs.core.filter.call(null,((function (action){
return (function (p1__8208_SHARP_){return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p1__8208_SHARP_),"page")) && ((cljs.core.deref.call(null,lt.plugins.chrometools.connected_tabs).call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__8208_SHARP_)) == null));
});})(action))
,tabs))], null)], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"cancel",new cljs.core.Keyword(null,"action","action",3885920680),((function (action){
return (function (){return lt.object.raise.call(null,client,new cljs.core.Keyword(null,"close!","close!",3951350939));
});})(action))
], null)], null)], null));return null;
});
lt.plugins.chrometools.handle_cb = (function handle_cb(cbid,command,data){return lt.object.raise.call(null,lt.objs.clients.clients,new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cbid,command,data], null));
});
lt.plugins.chrometools.find_script = (function find_script(client,path){var found_QMARK_ = cljs.core.get.call(null,cljs.core.deref.call(null,client).call(null,new cljs.core.Keyword(null,"scripts","scripts",2940419194)),lt.objs.files.basename.call(null,path));return found_QMARK_;
});
lt.plugins.chrometools.find_script_by_id = (function find_script_by_id(client,id){return cljs.core.first.call(null,(function (){var iter__7090__auto__ = (function iter__8225(s__8226){return (new cljs.core.LazySeq(null,(function (){var s__8226__$1 = s__8226;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8226__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__8236 = cljs.core.first.call(null,xs__4579__auto__);var basename = cljs.core.nth.call(null,vec__8236,0,null);var scripts = cljs.core.nth.call(null,vec__8236,1,null);var iterys__7086__auto__ = ((function (s__8226__$1,vec__8236,basename,scripts,xs__4579__auto__,temp__4092__auto__){
return (function iter__8227(s__8228){return (new cljs.core.LazySeq(null,((function (s__8226__$1,vec__8236,basename,scripts,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__8228__$1 = s__8228;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__8228__$1);if(temp__4092__auto____$1)
{var s__8228__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__8228__$2))
{var c__7088__auto__ = cljs.core.chunk_first.call(null,s__8228__$2);var size__7089__auto__ = cljs.core.count.call(null,c__7088__auto__);var b__8230 = cljs.core.chunk_buffer.call(null,size__7089__auto__);if((function (){var i__8229 = 0;while(true){
if((i__8229 < size__7089__auto__))
{var vec__8239 = cljs.core._nth.call(null,c__7088__auto__,i__8229);var _ = cljs.core.nth.call(null,vec__8239,0,null);var script = cljs.core.nth.call(null,vec__8239,1,null);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(script),id))
{cljs.core.chunk_append.call(null,b__8230,cljs.core.assoc.call(null,script,new cljs.core.Keyword(null,"basename","basename",3588138062),basename));
{
var G__8414 = (i__8229 + 1);
i__8229 = G__8414;
continue;
}
} else
{{
var G__8415 = (i__8229 + 1);
i__8229 = G__8415;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8230),iter__8227.call(null,cljs.core.chunk_rest.call(null,s__8228__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8230),null);
}
} else
{var vec__8240 = cljs.core.first.call(null,s__8228__$2);var _ = cljs.core.nth.call(null,vec__8240,0,null);var script = cljs.core.nth.call(null,vec__8240,1,null);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(script),id))
{return cljs.core.cons.call(null,cljs.core.assoc.call(null,script,new cljs.core.Keyword(null,"basename","basename",3588138062),basename),iter__8227.call(null,cljs.core.rest.call(null,s__8228__$2)));
} else
{{
var G__8416 = cljs.core.rest.call(null,s__8228__$2);
s__8228__$1 = G__8416;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__8226__$1,vec__8236,basename,scripts,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__8226__$1,vec__8236,basename,scripts,xs__4579__auto__,temp__4092__auto__))
;var fs__7087__auto__ = cljs.core.seq.call(null,iterys__7086__auto__.call(null,scripts));if(fs__7087__auto__)
{return cljs.core.concat.call(null,fs__7087__auto__,iter__8225.call(null,cljs.core.rest.call(null,s__8226__$1)));
} else
{{
var G__8417 = cljs.core.rest.call(null,s__8226__$1);
s__8226__$1 = G__8417;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7090__auto__.call(null,new cljs.core.Keyword(null,"scripts","scripts",2940419194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)));
})());
});
lt.plugins.chrometools.script_exists_QMARK_ = (function script_exists_QMARK_(client,id,cb){return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.canSetScriptSource",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scriptId","scriptId",606324408),id], null)], null),(function (res){return cb.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res)));
}));
});
lt.plugins.chrometools.remove_script_BANG_ = (function remove_script_BANG_(client,path,id){var vec__8243 = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__8241_SHARP_){return cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__8241_SHARP_)));
}),lt.plugins.chrometools.find_script.call(null,client,path)));var k = cljs.core.nth.call(null,vec__8243,0,null);var v = cljs.core.nth.call(null,vec__8243,1,null);return lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scripts","scripts",2940419194),lt.objs.files.basename.call(null,path)], null),cljs.core.dissoc,k);
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
make_inspector_object.cljs$lang$applyTo = (function (arglist__8916){
var more = cljs.core.seq(arglist__8916);
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
lt.plugins.chrometools.devtools.__GT_name = (function __GT_name(obj){var n = (function (){var or__6373__auto__ = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(obj);if(cljs.core.truth_(or__6373__auto__))
{return or__6373__auto__;
} else
{var or__6373__auto____$1 = new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(obj));if(cljs.core.truth_(or__6373__auto____$1))
{return or__6373__auto____$1;
} else
{var or__6373__auto____$2 = new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(obj);if(cljs.core.truth_(or__6373__auto____$2))
{return or__6373__auto____$2;
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
lt.plugins.chrometools.devtools.desc = (function desc(this$,obj){var e__7802__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",1013907482),lt.plugins.chrometools.devtools.__GT_name.call(null,obj)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(obj))?[cljs.core.str(": "),cljs.core.str(new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(obj)))].join(''):null)], null));var seq__8862_8917 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7802__auto__){
return (function (){if(cljs.core.truth_(new cljs.core.Keyword(null,"open","open",1017321916).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",1017321916),false], null));
} else
{lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",1017321916),true], null));
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"children","children",2673430897).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return null;
} else
{return lt.plugins.chrometools.send.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),1,new cljs.core.Keyword(null,"method","method",4231316563),"Runtime.getProperties",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"objectId","objectId",1104399404),(function (){var or__6373__auto__ = new cljs.core.Keyword(null,"objectId","objectId",1104399404).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(obj));if(cljs.core.truth_(or__6373__auto__))
{return or__6373__auto__;
} else
{return new cljs.core.Keyword(null,"objectId","objectId",1104399404).cljs$core$IFn$_invoke$arity$1(obj);
}
})(),new cljs.core.Keyword(null,"ownProperties","ownProperties",1958141131),true], null)], null),((function (e__7802__auto__){
return (function (d){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",2673430897),new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(d))], null));
});})(e__7802__auto__))
);
}
}
});})(e__7802__auto__))
], null)));var chunk__8863_8918 = null;var count__8864_8919 = 0;var i__8865_8920 = 0;while(true){
if((i__8865_8920 < count__8864_8919))
{var vec__8866_8921 = cljs.core._nth.call(null,chunk__8863_8918,i__8865_8920);var ev__7803__auto___8922 = cljs.core.nth.call(null,vec__8866_8921,0,null);var func__7804__auto___8923 = cljs.core.nth.call(null,vec__8866_8921,1,null);lt.util.dom.on.call(null,e__7802__auto__,ev__7803__auto___8922,func__7804__auto___8923);
{
var G__8924 = seq__8862_8917;
var G__8925 = chunk__8863_8918;
var G__8926 = count__8864_8919;
var G__8927 = (i__8865_8920 + 1);
seq__8862_8917 = G__8924;
chunk__8863_8918 = G__8925;
count__8864_8919 = G__8926;
i__8865_8920 = G__8927;
continue;
}
} else
{var temp__4092__auto___8928 = cljs.core.seq.call(null,seq__8862_8917);if(temp__4092__auto___8928)
{var seq__8862_8929__$1 = temp__4092__auto___8928;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8862_8929__$1))
{var c__7121__auto___8930 = cljs.core.chunk_first.call(null,seq__8862_8929__$1);{
var G__8931 = cljs.core.chunk_rest.call(null,seq__8862_8929__$1);
var G__8932 = c__7121__auto___8930;
var G__8933 = cljs.core.count.call(null,c__7121__auto___8930);
var G__8934 = 0;
seq__8862_8917 = G__8931;
chunk__8863_8918 = G__8932;
count__8864_8919 = G__8933;
i__8865_8920 = G__8934;
continue;
}
} else
{var vec__8867_8935 = cljs.core.first.call(null,seq__8862_8929__$1);var ev__7803__auto___8936 = cljs.core.nth.call(null,vec__8867_8935,0,null);var func__7804__auto___8937 = cljs.core.nth.call(null,vec__8867_8935,1,null);lt.util.dom.on.call(null,e__7802__auto__,ev__7803__auto___8936,func__7804__auto___8937);
{
var G__8938 = cljs.core.next.call(null,seq__8862_8929__$1);
var G__8939 = null;
var G__8940 = 0;
var G__8941 = 0;
seq__8862_8917 = G__8938;
chunk__8863_8918 = G__8939;
count__8864_8919 = G__8940;
i__8865_8920 = G__8941;
continue;
}
}
} else
{}
}
break;
}
return e__7802__auto__;
});
lt.plugins.chrometools.devtools.props = (function props(this$,children){var e__7802__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7090__auto__ = (function iter__8878(s__8879){return (new cljs.core.LazySeq(null,(function (){var s__8879__$1 = s__8879;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8879__$1);if(temp__4092__auto__)
{var s__8879__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8879__$2))
{var c__7088__auto__ = cljs.core.chunk_first.call(null,s__8879__$2);var size__7089__auto__ = cljs.core.count.call(null,c__7088__auto__);var b__8881 = cljs.core.chunk_buffer.call(null,size__7089__auto__);if((function (){var i__8880 = 0;while(true){
if((i__8880 < size__7089__auto__))
{var c = cljs.core._nth.call(null,c__7088__auto__,i__8880);cljs.core.chunk_append.call(null,b__8881,(cljs.core.truth_((function (){var and__6361__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c)),"object");if(and__6361__auto__)
{return new cljs.core.Keyword(null,"objectId","objectId",1104399404).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c));
} else
{return and__6361__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),lt.object.__GT_content.call(null,lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.chrometools.devtools","inspector-object","lt.plugins.chrometools.devtools/inspector-object",4510787313),new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),c))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",1013907482),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(c)], null),": ",(function (){var or__6373__auto__ = new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c));if(cljs.core.truth_(or__6373__auto__))
{return or__6373__auto__;
} else
{return [cljs.core.str(lt.plugins.chrometools.devtools.format_value.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c)))].join('');
}
})()], null)));
{
var G__8942 = (i__8880 + 1);
i__8880 = G__8942;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8881),iter__8878.call(null,cljs.core.chunk_rest.call(null,s__8879__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8881),null);
}
} else
{var c = cljs.core.first.call(null,s__8879__$2);return cljs.core.cons.call(null,(cljs.core.truth_((function (){var and__6361__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c)),"object");if(and__6361__auto__)
{return new cljs.core.Keyword(null,"objectId","objectId",1104399404).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c));
} else
{return and__6361__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),lt.object.__GT_content.call(null,lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.chrometools.devtools","inspector-object","lt.plugins.chrometools.devtools/inspector-object",4510787313),new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),c))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",1013907482),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(c)], null),": ",(function (){var or__6373__auto__ = new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c));if(cljs.core.truth_(or__6373__auto__))
{return or__6373__auto__;
} else
{return [cljs.core.str(lt.plugins.chrometools.devtools.format_value.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c)))].join('');
}
})()], null)),iter__8878.call(null,cljs.core.rest.call(null,s__8879__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7090__auto__.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1017277949),lt.plugins.chrometools.devtools.i_compare,children));
})()], null));var seq__8882_8943 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8883_8944 = null;var count__8884_8945 = 0;var i__8885_8946 = 0;while(true){
if((i__8885_8946 < count__8884_8945))
{var vec__8886_8947 = cljs.core._nth.call(null,chunk__8883_8944,i__8885_8946);var ev__7803__auto___8948 = cljs.core.nth.call(null,vec__8886_8947,0,null);var func__7804__auto___8949 = cljs.core.nth.call(null,vec__8886_8947,1,null);lt.util.dom.on.call(null,e__7802__auto__,ev__7803__auto___8948,func__7804__auto___8949);
{
var G__8950 = seq__8882_8943;
var G__8951 = chunk__8883_8944;
var G__8952 = count__8884_8945;
var G__8953 = (i__8885_8946 + 1);
seq__8882_8943 = G__8950;
chunk__8883_8944 = G__8951;
count__8884_8945 = G__8952;
i__8885_8946 = G__8953;
continue;
}
} else
{var temp__4092__auto___8954 = cljs.core.seq.call(null,seq__8882_8943);if(temp__4092__auto___8954)
{var seq__8882_8955__$1 = temp__4092__auto___8954;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8882_8955__$1))
{var c__7121__auto___8956 = cljs.core.chunk_first.call(null,seq__8882_8955__$1);{
var G__8957 = cljs.core.chunk_rest.call(null,seq__8882_8955__$1);
var G__8958 = c__7121__auto___8956;
var G__8959 = cljs.core.count.call(null,c__7121__auto___8956);
var G__8960 = 0;
seq__8882_8943 = G__8957;
chunk__8883_8944 = G__8958;
count__8884_8945 = G__8959;
i__8885_8946 = G__8960;
continue;
}
} else
{var vec__8887_8961 = cljs.core.first.call(null,seq__8882_8955__$1);var ev__7803__auto___8962 = cljs.core.nth.call(null,vec__8887_8961,0,null);var func__7804__auto___8963 = cljs.core.nth.call(null,vec__8887_8961,1,null);lt.util.dom.on.call(null,e__7802__auto__,ev__7803__auto___8962,func__7804__auto___8963);
{
var G__8964 = cljs.core.next.call(null,seq__8882_8955__$1);
var G__8965 = null;
var G__8966 = 0;
var G__8967 = 0;
seq__8882_8943 = G__8964;
chunk__8883_8944 = G__8965;
count__8884_8945 = G__8966;
i__8885_8946 = G__8967;
continue;
}
}
} else
{}
}
break;
}
return e__7802__auto__;
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
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),(function (){var pred__8891 = cljs.core._EQ_;var expr__8892 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(pred__8891.call(null,"object",expr__8892)))
{return lt.object.__GT_content.call(null,lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.chrometools.devtools","inspector-object","lt.plugins.chrometools.devtools/inspector-object",4510787313),client,data));
} else
{var or__6373__auto__ = new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(or__6373__auto__))
{return or__6373__auto__;
} else
{return cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(data));
}
}
})()], null);
}
});
lt.plugins.chrometools.devtools.clear_unused_inspectors = (function clear_unused_inspectors(){var seq__8900 = cljs.core.seq.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"inspector.object","inspector.object",1285492104)));var chunk__8902 = null;var count__8903 = 0;var i__8904 = 0;while(true){
if((i__8904 < count__8903))
{var obj = cljs.core._nth.call(null,chunk__8902,i__8904);if((cljs.core.not.call(null,lt.object.__GT_content.call(null,obj))) || (cljs.core.not.call(null,lt.util.dom.parents.call(null,lt.object.__GT_content.call(null,obj),new cljs.core.Keyword(null,"body","body",1016933652)))))
{lt.object.destroy_BANG_.call(null,obj);
{
var G__8968 = seq__8900;
var G__8969 = chunk__8902;
var G__8970 = count__8903;
var G__8971 = (i__8904 + 1);
seq__8900 = G__8968;
chunk__8902 = G__8969;
count__8903 = G__8970;
i__8904 = G__8971;
continue;
}
} else
{{
var G__8972 = seq__8900;
var G__8973 = chunk__8902;
var G__8974 = count__8903;
var G__8975 = (i__8904 + 1);
seq__8900 = G__8972;
chunk__8902 = G__8973;
count__8903 = G__8974;
i__8904 = G__8975;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8900);if(temp__4092__auto__)
{var seq__8900__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8900__$1))
{var c__7121__auto__ = cljs.core.chunk_first.call(null,seq__8900__$1);{
var G__8976 = cljs.core.chunk_rest.call(null,seq__8900__$1);
var G__8977 = c__7121__auto__;
var G__8978 = cljs.core.count.call(null,c__7121__auto__);
var G__8979 = 0;
seq__8900 = G__8976;
chunk__8902 = G__8977;
count__8903 = G__8978;
i__8904 = G__8979;
continue;
}
} else
{var obj = cljs.core.first.call(null,seq__8900__$1);if((cljs.core.not.call(null,lt.object.__GT_content.call(null,obj))) || (cljs.core.not.call(null,lt.util.dom.parents.call(null,lt.object.__GT_content.call(null,obj),new cljs.core.Keyword(null,"body","body",1016933652)))))
{lt.object.destroy_BANG_.call(null,obj);
{
var G__8980 = cljs.core.next.call(null,seq__8900__$1);
var G__8981 = null;
var G__8982 = 0;
var G__8983 = 0;
seq__8900 = G__8980;
chunk__8902 = G__8981;
count__8903 = G__8982;
i__8904 = G__8983;
continue;
}
} else
{{
var G__8984 = cljs.core.next.call(null,seq__8900__$1);
var G__8985 = null;
var G__8986 = 0;
var G__8987 = 0;
seq__8900 = G__8984;
chunk__8902 = G__8985;
count__8903 = G__8986;
i__8904 = G__8987;
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
lt.plugins.chrometools.devtools.__BEH__clear_inspector_object = (function __BEH__clear_inspector_object(this$){var temp__4092__auto__ = (function (){var or__6373__auto__ = new cljs.core.Keyword(null,"objectId","objectId",1104399404).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));if(cljs.core.truth_(or__6373__auto__))
{return or__6373__auto__;
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
lt.plugins.chrometools.filewatch.listener = (function listener(p__9020,e,filename){var map__9023 = p__9020;var map__9023__$1 = ((cljs.core.seq_QMARK_.call(null,map__9023))?cljs.core.apply.call(null,cljs.core.hash_map,map__9023):map__9023);var is_dir = cljs.core.get.call(null,map__9023__$1,new cljs.core.Keyword(null,"is-dir","is-dir",4127610076));var path = cljs.core.get.call(null,map__9023__$1,new cljs.core.Keyword(null,"path","path",1017337751));var client = cljs.core.get.call(null,map__9023__$1,new cljs.core.Keyword(null,"client","client",3951159101));cljs.core.println.call(null,e,filename);
if(cljs.core.truth_((function (){var and__6361__auto__ = client;if(cljs.core.truth_(and__6361__auto__))
{return new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client));
} else
{return and__6361__auto__;
}
})()))
{if(cljs.core.truth_((function (){var and__6361__auto__ = cljs.core.empty_QMARK_.call(null,filename);if(and__6361__auto__)
{return is_dir;
} else
{return and__6361__auto__;
}
})()))
{return lt.objs.notifos.set_msg_BANG_.call(null,"Sorry, watches on directories are not supported on your OS. Try watching individual files instead.");
} else
{var path__$1 = (cljs.core.truth_(is_dir)?clojure.string.join.call(null,"/",cljs.core.conj.call(null,clojure.string.split.call(null,path,"/"),filename)):path);var ext = lt.objs.files.ext.call(null,path__$1);cljs.core.println.call(null,ext,path__$1);
var G__9024 = ext;if(cljs.core._EQ_.call(null,"css",G__9024))
{return lt.plugins.chrometools.filewatch.css_file_change.call(null,client,path__$1);
} else
{if(cljs.core._EQ_.call(null,"js",G__9024))
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
lt.plugins.chrometools.filewatch.__BEH__watch_path = (function __BEH__watch_path(obj,paths,client){var seq__9029 = cljs.core.seq.call(null,clojure.string.split.call(null,paths,";"));var chunk__9030 = null;var count__9031 = 0;var i__9032 = 0;while(true){
if((i__9032 < count__9031))
{var path = cljs.core._nth.call(null,chunk__9030,i__9032);lt.plugins.chrometools.filewatch.watch_file.call(null,client,path);
{
var G__9055 = seq__9029;
var G__9056 = chunk__9030;
var G__9057 = count__9031;
var G__9058 = (i__9032 + 1);
seq__9029 = G__9055;
chunk__9030 = G__9056;
count__9031 = G__9057;
i__9032 = G__9058;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9029);if(temp__4092__auto__)
{var seq__9029__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9029__$1))
{var c__7121__auto__ = cljs.core.chunk_first.call(null,seq__9029__$1);{
var G__9059 = cljs.core.chunk_rest.call(null,seq__9029__$1);
var G__9060 = c__7121__auto__;
var G__9061 = cljs.core.count.call(null,c__7121__auto__);
var G__9062 = 0;
seq__9029 = G__9059;
chunk__9030 = G__9060;
count__9031 = G__9061;
i__9032 = G__9062;
continue;
}
} else
{var path = cljs.core.first.call(null,seq__9029__$1);lt.plugins.chrometools.filewatch.watch_file.call(null,client,path);
{
var G__9063 = cljs.core.next.call(null,seq__9029__$1);
var G__9064 = null;
var G__9065 = 0;
var G__9066 = 0;
seq__9029 = G__9063;
chunk__9030 = G__9064;
count__9031 = G__9065;
i__9032 = G__9066;
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
lt.plugins.chrometools.filewatch.input = (function input(type,event,client){var e__7802__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1017479852),"file",type,true,new cljs.core.Keyword(null,"multiple","multiple",1667733890),cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"file","file",1017047278)),new cljs.core.Keyword(null,"style","style",1123684643),"display:none;"], true, false)], null));var seq__9039_9067 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change","change",3947235106),((function (e__7802__auto__){
return (function (){var me = this;if(cljs.core.empty_QMARK_.call(null,lt.util.dom.val.call(null,me)))
{return null;
} else
{return lt.object.raise.call(null,lt.plugins.chrometools.filewatch.opener,event,lt.util.dom.val.call(null,me),client);
}
});})(e__7802__auto__))
], null)));var chunk__9040_9068 = null;var count__9041_9069 = 0;var i__9042_9070 = 0;while(true){
if((i__9042_9070 < count__9041_9069))
{var vec__9043_9071 = cljs.core._nth.call(null,chunk__9040_9068,i__9042_9070);var ev__7803__auto___9072 = cljs.core.nth.call(null,vec__9043_9071,0,null);var func__7804__auto___9073 = cljs.core.nth.call(null,vec__9043_9071,1,null);lt.util.dom.on.call(null,e__7802__auto__,ev__7803__auto___9072,func__7804__auto___9073);
{
var G__9074 = seq__9039_9067;
var G__9075 = chunk__9040_9068;
var G__9076 = count__9041_9069;
var G__9077 = (i__9042_9070 + 1);
seq__9039_9067 = G__9074;
chunk__9040_9068 = G__9075;
count__9041_9069 = G__9076;
i__9042_9070 = G__9077;
continue;
}
} else
{var temp__4092__auto___9078 = cljs.core.seq.call(null,seq__9039_9067);if(temp__4092__auto___9078)
{var seq__9039_9079__$1 = temp__4092__auto___9078;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9039_9079__$1))
{var c__7121__auto___9080 = cljs.core.chunk_first.call(null,seq__9039_9079__$1);{
var G__9081 = cljs.core.chunk_rest.call(null,seq__9039_9079__$1);
var G__9082 = c__7121__auto___9080;
var G__9083 = cljs.core.count.call(null,c__7121__auto___9080);
var G__9084 = 0;
seq__9039_9067 = G__9081;
chunk__9040_9068 = G__9082;
count__9041_9069 = G__9083;
i__9042_9070 = G__9084;
continue;
}
} else
{var vec__9044_9085 = cljs.core.first.call(null,seq__9039_9079__$1);var ev__7803__auto___9086 = cljs.core.nth.call(null,vec__9044_9085,0,null);var func__7804__auto___9087 = cljs.core.nth.call(null,vec__9044_9085,1,null);lt.util.dom.on.call(null,e__7802__auto__,ev__7803__auto___9086,func__7804__auto___9087);
{
var G__9088 = cljs.core.next.call(null,seq__9039_9079__$1);
var G__9089 = null;
var G__9090 = 0;
var G__9091 = 0;
seq__9039_9067 = G__9088;
chunk__9040_9068 = G__9089;
count__9041_9069 = G__9090;
i__9042_9070 = G__9091;
continue;
}
}
} else
{}
}
break;
}
return e__7802__auto__;
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
lt.plugins.chrometools.debugger$.__BEH__remove_breakpoints_on_disconnect = (function __BEH__remove_breakpoints_on_disconnect(this$){var seq__8444 = cljs.core.seq.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"debug.breakpoint","debug.breakpoint",1844714974)));var chunk__8445 = null;var count__8446 = 0;var i__8447 = 0;while(true){
if((i__8447 < count__8446))
{var obj = cljs.core._nth.call(null,chunk__8445,i__8447);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)),this$))
{lt.object.destroy_BANG_.call(null,obj);
} else
{}
{
var G__8621 = seq__8444;
var G__8622 = chunk__8445;
var G__8623 = count__8446;
var G__8624 = (i__8447 + 1);
seq__8444 = G__8621;
chunk__8445 = G__8622;
count__8446 = G__8623;
i__8447 = G__8624;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8444);if(temp__4092__auto__)
{var seq__8444__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8444__$1))
{var c__7121__auto__ = cljs.core.chunk_first.call(null,seq__8444__$1);{
var G__8625 = cljs.core.chunk_rest.call(null,seq__8444__$1);
var G__8626 = c__7121__auto__;
var G__8627 = cljs.core.count.call(null,c__7121__auto__);
var G__8628 = 0;
seq__8444 = G__8625;
chunk__8445 = G__8626;
count__8446 = G__8627;
i__8447 = G__8628;
continue;
}
} else
{var obj = cljs.core.first.call(null,seq__8444__$1);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)),this$))
{lt.object.destroy_BANG_.call(null,obj);
} else
{}
{
var G__8629 = cljs.core.next.call(null,seq__8444__$1);
var G__8630 = null;
var G__8631 = 0;
var G__8632 = 0;
seq__8444 = G__8629;
chunk__8445 = G__8630;
count__8446 = G__8631;
i__8447 = G__8632;
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
lt.plugins.chrometools.debugger$.get_matching_source = (function get_matching_source(sources,path){var parts = clojure.string.split.call(null,path,"/");return cljs.core.first.call(null,(function (){var iter__7090__auto__ = ((function (parts){
return (function iter__8452(s__8453){return (new cljs.core.LazySeq(null,((function (parts){
return (function (){var s__8453__$1 = s__8453;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8453__$1);if(temp__4092__auto__)
{var s__8453__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8453__$2))
{var c__7088__auto__ = cljs.core.chunk_first.call(null,s__8453__$2);var size__7089__auto__ = cljs.core.count.call(null,c__7088__auto__);var b__8455 = cljs.core.chunk_buffer.call(null,size__7089__auto__);if((function (){var i__8454 = 0;while(true){
if((i__8454 < size__7089__auto__))
{var source = cljs.core._nth.call(null,c__7088__auto__,i__8454);var source_parts = cljs.core.filter.call(null,cljs.core.not_empty,clojure.string.split.call(null,source,"/"));var l = cljs.core.count.call(null,source_parts);var p = cljs.core.take_last.call(null,l,parts);if(cljs.core._EQ_.call(null,p,source_parts))
{cljs.core.chunk_append.call(null,b__8455,source);
{
var G__8633 = (i__8454 + 1);
i__8454 = G__8633;
continue;
}
} else
{{
var G__8634 = (i__8454 + 1);
i__8454 = G__8634;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8455),iter__8452.call(null,cljs.core.chunk_rest.call(null,s__8453__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8455),null);
}
} else
{var source = cljs.core.first.call(null,s__8453__$2);var source_parts = cljs.core.filter.call(null,cljs.core.not_empty,clojure.string.split.call(null,source,"/"));var l = cljs.core.count.call(null,source_parts);var p = cljs.core.take_last.call(null,l,parts);if(cljs.core._EQ_.call(null,p,source_parts))
{return cljs.core.cons.call(null,source,iter__8452.call(null,cljs.core.rest.call(null,s__8453__$2)));
} else
{{
var G__8635 = cljs.core.rest.call(null,s__8453__$2);
s__8453__$1 = G__8635;
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
;return iter__7090__auto__.call(null,sources);
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
lt.plugins.chrometools.debugger$.get_scripts = (function get_scripts(client,id){var iter__7090__auto__ = (function iter__8472(s__8473){return (new cljs.core.LazySeq(null,(function (){var s__8473__$1 = s__8473;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8473__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__8483 = cljs.core.first.call(null,xs__4579__auto__);var _ = cljs.core.nth.call(null,vec__8483,0,null);var vs = cljs.core.nth.call(null,vec__8483,1,null);var iterys__7086__auto__ = ((function (s__8473__$1,vec__8483,_,vs,xs__4579__auto__,temp__4092__auto__){
return (function iter__8474(s__8475){return (new cljs.core.LazySeq(null,((function (s__8473__$1,vec__8483,_,vs,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__8475__$1 = s__8475;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__8475__$1);if(temp__4092__auto____$1)
{var s__8475__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__8475__$2))
{var c__7088__auto__ = cljs.core.chunk_first.call(null,s__8475__$2);var size__7089__auto__ = cljs.core.count.call(null,c__7088__auto__);var b__8477 = cljs.core.chunk_buffer.call(null,size__7089__auto__);if((function (){var i__8476 = 0;while(true){
if((i__8476 < size__7089__auto__))
{var vec__8486 = cljs.core._nth.call(null,c__7088__auto__,i__8476);var ___$1 = cljs.core.nth.call(null,vec__8486,0,null);var vvs = cljs.core.nth.call(null,vec__8486,1,null);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(vvs),id))
{cljs.core.chunk_append.call(null,b__8477,vvs);
{
var G__8636 = (i__8476 + 1);
i__8476 = G__8636;
continue;
}
} else
{{
var G__8637 = (i__8476 + 1);
i__8476 = G__8637;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8477),iter__8474.call(null,cljs.core.chunk_rest.call(null,s__8475__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8477),null);
}
} else
{var vec__8487 = cljs.core.first.call(null,s__8475__$2);var ___$1 = cljs.core.nth.call(null,vec__8487,0,null);var vvs = cljs.core.nth.call(null,vec__8487,1,null);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(vvs),id))
{return cljs.core.cons.call(null,vvs,iter__8474.call(null,cljs.core.rest.call(null,s__8475__$2)));
} else
{{
var G__8638 = cljs.core.rest.call(null,s__8475__$2);
s__8475__$1 = G__8638;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__8473__$1,vec__8483,_,vs,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__8473__$1,vec__8483,_,vs,xs__4579__auto__,temp__4092__auto__))
;var fs__7087__auto__ = cljs.core.seq.call(null,iterys__7086__auto__.call(null,vs));if(fs__7087__auto__)
{return cljs.core.concat.call(null,fs__7087__auto__,iter__8472.call(null,cljs.core.rest.call(null,s__8473__$1)));
} else
{{
var G__8639 = cljs.core.rest.call(null,s__8473__$1);
s__8473__$1 = G__8639;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7090__auto__.call(null,new cljs.core.Keyword(null,"scripts","scripts",2940419194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)));
});
/**
* @param {...*} var_args
*/
lt.plugins.chrometools.debugger$.bound_client = (function() { 
var bound_client__delegate = function (obj,path,f,p__8488){var vec__8491 = p__8488;var map__8492 = cljs.core.nth.call(null,vec__8491,0,null);var map__8492__$1 = ((cljs.core.seq_QMARK_.call(null,map__8492))?cljs.core.apply.call(null,cljs.core.hash_map,map__8492):map__8492);var always_call = cljs.core.get.call(null,map__8492__$1,new cljs.core.Keyword(null,"always-call","always-call",3320573646));var initial = cljs.core.get.call(null,map__8492__$1,new cljs.core.Keyword(null,"initial","initial",2962246326));return crate.binding.bound.call(null,obj,((function (vec__8491,map__8492,map__8492__$1,always_call,initial){
return (function (){var temp__4090__auto__ = new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj));if(cljs.core.truth_(temp__4090__auto__))
{var client = temp__4090__auto__;return f.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,client),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debugger","debugger",1561716627)], null),path)),client);
} else
{if(cljs.core.truth_(always_call))
{return f.call(null,null,null);
} else
{return initial;
}
}
});})(vec__8491,map__8492,map__8492__$1,always_call,initial))
);
};
var bound_client = function (obj,path,f,var_args){
var p__8488 = null;if (arguments.length > 3) {
  p__8488 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return bound_client__delegate.call(this,obj,path,f,p__8488);};
bound_client.cljs$lang$maxFixedArity = 3;
bound_client.cljs$lang$applyTo = (function (arglist__8640){
var obj = cljs.core.first(arglist__8640);
arglist__8640 = cljs.core.next(arglist__8640);
var path = cljs.core.first(arglist__8640);
arglist__8640 = cljs.core.next(arglist__8640);
var f = cljs.core.first(arglist__8640);
var p__8488 = cljs.core.rest(arglist__8640);
return bound_client__delegate(obj,path,f,p__8488);
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
{var iter__7090__auto__ = (function iter__8497(s__8498){return (new cljs.core.LazySeq(null,(function (){var s__8498__$1 = s__8498;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8498__$1);if(temp__4092__auto__)
{var s__8498__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8498__$2))
{var c__7088__auto__ = cljs.core.chunk_first.call(null,s__8498__$2);var size__7089__auto__ = cljs.core.count.call(null,c__7088__auto__);var b__8500 = cljs.core.chunk_buffer.call(null,size__7089__auto__);if((function (){var i__8499 = 0;while(true){
if((i__8499 < size__7089__auto__))
{var var$ = cljs.core._nth.call(null,c__7088__auto__,i__8499);cljs.core.chunk_append.call(null,b__8500,(function (){var desc = lt.plugins.chrometools.debugger$.__GT_var_description.call(null,var$);var className = new cljs.core.Keyword(null,"className","className",1004015509).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"object","object",4285503153).cljs$core$IFn$_invoke$arity$1(var$));var var$__$1 = cljs.core.assoc_in.call(null,var$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",4285503153),new cljs.core.Keyword(null,"name","name",1017277949)], null),desc);var var$__$2 = ((cljs.core.not_EQ_.call(null,className,"Object"))?cljs.core.assoc_in.call(null,var$__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",4285503153),new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"description","description",3584325486)], null),className):var$__$1);return new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(lt.plugins.chrometools.devtools.inspector__GT_result.call(null,client,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),new cljs.core.Keyword(null,"object","object",4285503153).cljs$core$IFn$_invoke$arity$1(var$__$2)], null)], null)));
})());
{
var G__8641 = (i__8499 + 1);
i__8499 = G__8641;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8500),iter__8497.call(null,cljs.core.chunk_rest.call(null,s__8498__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8500),null);
}
} else
{var var$ = cljs.core.first.call(null,s__8498__$2);return cljs.core.cons.call(null,(function (){var desc = lt.plugins.chrometools.debugger$.__GT_var_description.call(null,var$);var className = new cljs.core.Keyword(null,"className","className",1004015509).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"object","object",4285503153).cljs$core$IFn$_invoke$arity$1(var$));var var$__$1 = cljs.core.assoc_in.call(null,var$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",4285503153),new cljs.core.Keyword(null,"name","name",1017277949)], null),desc);var var$__$2 = ((cljs.core.not_EQ_.call(null,className,"Object"))?cljs.core.assoc_in.call(null,var$__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",4285503153),new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"description","description",3584325486)], null),className):var$__$1);return new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(lt.plugins.chrometools.devtools.inspector__GT_result.call(null,client,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),new cljs.core.Keyword(null,"object","object",4285503153).cljs$core$IFn$_invoke$arity$1(var$__$2)], null)], null)));
})(),iter__8497.call(null,cljs.core.rest.call(null,s__8498__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7090__auto__.call(null,vars);
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
lt.plugins.chrometools.debugger$.call_frame_location = (function call_frame_location(panel,frame){var e__7802__auto__ = crate.core.html.call(null,(function (){var location = lt.plugins.chrometools.debugger$.location__GT_source.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,panel)),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(frame));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"source"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"source-file"], null),new cljs.core.Keyword(null,"source","source",4412365709).cljs$core$IFn$_invoke$arity$1(location)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"source-location"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"source-line"], null),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(location)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"source-col"], null),new cljs.core.Keyword(null,"column","column",3954034376).cljs$core$IFn$_invoke$arity$1(location)], null)], null)], null);
})());var seq__8507_8642 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7802__auto__){
return (function (){return lt.plugins.chrometools.debugger$.jump_to_location.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,panel)),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(frame));
});})(e__7802__auto__))
], null)));var chunk__8508_8643 = null;var count__8509_8644 = 0;var i__8510_8645 = 0;while(true){
if((i__8510_8645 < count__8509_8644))
{var vec__8511_8646 = cljs.core._nth.call(null,chunk__8508_8643,i__8510_8645);var ev__7803__auto___8647 = cljs.core.nth.call(null,vec__8511_8646,0,null);var func__7804__auto___8648 = cljs.core.nth.call(null,vec__8511_8646,1,null);lt.util.dom.on.call(null,e__7802__auto__,ev__7803__auto___8647,func__7804__auto___8648);
{
var G__8649 = seq__8507_8642;
var G__8650 = chunk__8508_8643;
var G__8651 = count__8509_8644;
var G__8652 = (i__8510_8645 + 1);
seq__8507_8642 = G__8649;
chunk__8508_8643 = G__8650;
count__8509_8644 = G__8651;
i__8510_8645 = G__8652;
continue;
}
} else
{var temp__4092__auto___8653 = cljs.core.seq.call(null,seq__8507_8642);if(temp__4092__auto___8653)
{var seq__8507_8654__$1 = temp__4092__auto___8653;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8507_8654__$1))
{var c__7121__auto___8655 = cljs.core.chunk_first.call(null,seq__8507_8654__$1);{
var G__8656 = cljs.core.chunk_rest.call(null,seq__8507_8654__$1);
var G__8657 = c__7121__auto___8655;
var G__8658 = cljs.core.count.call(null,c__7121__auto___8655);
var G__8659 = 0;
seq__8507_8642 = G__8656;
chunk__8508_8643 = G__8657;
count__8509_8644 = G__8658;
i__8510_8645 = G__8659;
continue;
}
} else
{var vec__8512_8660 = cljs.core.first.call(null,seq__8507_8654__$1);var ev__7803__auto___8661 = cljs.core.nth.call(null,vec__8512_8660,0,null);var func__7804__auto___8662 = cljs.core.nth.call(null,vec__8512_8660,1,null);lt.util.dom.on.call(null,e__7802__auto__,ev__7803__auto___8661,func__7804__auto___8662);
{
var G__8663 = cljs.core.next.call(null,seq__8507_8654__$1);
var G__8664 = null;
var G__8665 = 0;
var G__8666 = 0;
seq__8507_8642 = G__8663;
chunk__8508_8643 = G__8664;
count__8509_8644 = G__8665;
i__8510_8645 = G__8666;
continue;
}
}
} else
{}
}
break;
}
return e__7802__auto__;
});
lt.plugins.chrometools.debugger$.call_frame = (function call_frame(panel,frame){var e__7802__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),lt.plugins.chrometools.debugger$.bound_client.call(null,panel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-frame","selected-frame",1773798189)], null),(function (p1__8513_SHARP_){if(cljs.core._EQ_.call(null,p1__8513_SHARP_,frame))
{return "selected";
} else
{return "";
}
}))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"frame-name"], null),lt.plugins.chrometools.debugger$.__GT_call_frame_name.call(null,frame)], null),lt.plugins.chrometools.debugger$.call_frame_location.call(null,panel,frame)], null));var seq__8520_8667 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7802__auto__){
return (function (){var client = new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,panel));return lt.plugins.chrometools.debugger$.select_call_frame.call(null,client,frame);
});})(e__7802__auto__))
], null)));var chunk__8521_8668 = null;var count__8522_8669 = 0;var i__8523_8670 = 0;while(true){
if((i__8523_8670 < count__8522_8669))
{var vec__8524_8671 = cljs.core._nth.call(null,chunk__8521_8668,i__8523_8670);var ev__7803__auto___8672 = cljs.core.nth.call(null,vec__8524_8671,0,null);var func__7804__auto___8673 = cljs.core.nth.call(null,vec__8524_8671,1,null);lt.util.dom.on.call(null,e__7802__auto__,ev__7803__auto___8672,func__7804__auto___8673);
{
var G__8674 = seq__8520_8667;
var G__8675 = chunk__8521_8668;
var G__8676 = count__8522_8669;
var G__8677 = (i__8523_8670 + 1);
seq__8520_8667 = G__8674;
chunk__8521_8668 = G__8675;
count__8522_8669 = G__8676;
i__8523_8670 = G__8677;
continue;
}
} else
{var temp__4092__auto___8678 = cljs.core.seq.call(null,seq__8520_8667);if(temp__4092__auto___8678)
{var seq__8520_8679__$1 = temp__4092__auto___8678;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8520_8679__$1))
{var c__7121__auto___8680 = cljs.core.chunk_first.call(null,seq__8520_8679__$1);{
var G__8681 = cljs.core.chunk_rest.call(null,seq__8520_8679__$1);
var G__8682 = c__7121__auto___8680;
var G__8683 = cljs.core.count.call(null,c__7121__auto___8680);
var G__8684 = 0;
seq__8520_8667 = G__8681;
chunk__8521_8668 = G__8682;
count__8522_8669 = G__8683;
i__8523_8670 = G__8684;
continue;
}
} else
{var vec__8525_8685 = cljs.core.first.call(null,seq__8520_8679__$1);var ev__7803__auto___8686 = cljs.core.nth.call(null,vec__8525_8685,0,null);var func__7804__auto___8687 = cljs.core.nth.call(null,vec__8525_8685,1,null);lt.util.dom.on.call(null,e__7802__auto__,ev__7803__auto___8686,func__7804__auto___8687);
{
var G__8688 = cljs.core.next.call(null,seq__8520_8679__$1);
var G__8689 = null;
var G__8690 = 0;
var G__8691 = 0;
seq__8520_8667 = G__8688;
chunk__8521_8668 = G__8689;
count__8522_8669 = G__8690;
i__8523_8670 = G__8691;
continue;
}
}
} else
{}
}
break;
}
return e__7802__auto__;
});
lt.plugins.chrometools.debugger$.debug_panel_resume = (function debug_panel_resume(this$){var e__7802__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"resume"], null),lt.plugins.chrometools.debugger$.bound_client.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused?","paused?",4518674499)], null),(function (p1__8526_SHARP_){if(cljs.core.truth_(p1__8526_SHARP_))
{return "\u25B6";
} else
{return "=";
}
}))], null));var seq__8533_8692 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7802__auto__){
return (function (){var client = new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var c = (cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",4518674499).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"debugger","debugger",1561716627).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))))?new cljs.core.Keyword(null,"resume-debugger","resume-debugger",4240016691):new cljs.core.Keyword(null,"pause-debugger","pause-debugger",1706137994));return lt.objs.sidebar.command.exec_BANG_.call(null,c,client);
});})(e__7802__auto__))
], null)));var chunk__8534_8693 = null;var count__8535_8694 = 0;var i__8536_8695 = 0;while(true){
if((i__8536_8695 < count__8535_8694))
{var vec__8537_8696 = cljs.core._nth.call(null,chunk__8534_8693,i__8536_8695);var ev__7803__auto___8697 = cljs.core.nth.call(null,vec__8537_8696,0,null);var func__7804__auto___8698 = cljs.core.nth.call(null,vec__8537_8696,1,null);lt.util.dom.on.call(null,e__7802__auto__,ev__7803__auto___8697,func__7804__auto___8698);
{
var G__8699 = seq__8533_8692;
var G__8700 = chunk__8534_8693;
var G__8701 = count__8535_8694;
var G__8702 = (i__8536_8695 + 1);
seq__8533_8692 = G__8699;
chunk__8534_8693 = G__8700;
count__8535_8694 = G__8701;
i__8536_8695 = G__8702;
continue;
}
} else
{var temp__4092__auto___8703 = cljs.core.seq.call(null,seq__8533_8692);if(temp__4092__auto___8703)
{var seq__8533_8704__$1 = temp__4092__auto___8703;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8533_8704__$1))
{var c__7121__auto___8705 = cljs.core.chunk_first.call(null,seq__8533_8704__$1);{
var G__8706 = cljs.core.chunk_rest.call(null,seq__8533_8704__$1);
var G__8707 = c__7121__auto___8705;
var G__8708 = cljs.core.count.call(null,c__7121__auto___8705);
var G__8709 = 0;
seq__8533_8692 = G__8706;
chunk__8534_8693 = G__8707;
count__8535_8694 = G__8708;
i__8536_8695 = G__8709;
continue;
}
} else
{var vec__8538_8710 = cljs.core.first.call(null,seq__8533_8704__$1);var ev__7803__auto___8711 = cljs.core.nth.call(null,vec__8538_8710,0,null);var func__7804__auto___8712 = cljs.core.nth.call(null,vec__8538_8710,1,null);lt.util.dom.on.call(null,e__7802__auto__,ev__7803__auto___8711,func__7804__auto___8712);
{
var G__8713 = cljs.core.next.call(null,seq__8533_8704__$1);
var G__8714 = null;
var G__8715 = 0;
var G__8716 = 0;
seq__8533_8692 = G__8713;
chunk__8534_8693 = G__8714;
count__8535_8694 = G__8715;
i__8536_8695 = G__8716;
continue;
}
}
} else
{}
}
break;
}
return e__7802__auto__;
});
lt.plugins.chrometools.debugger$.reconnect_button = (function reconnect_button(this$){var e__7802__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"reconnect-button"], null),"Reconnect"], null));var seq__8545_8717 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7802__auto__){
return (function (){var tab = new cljs.core.Keyword(null,"reconnect-tab","reconnect-tab",3800973201).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"chrome.client.remote","chrome.client.remote",4091478727));cljs.core.swap_BANG_.call(null,this$,cljs.core.dissoc,new cljs.core.Keyword(null,"show-reconnect","show-reconnect",1351513081));
return lt.plugins.chrometools.connect_tab.call(null,client,tab);
});})(e__7802__auto__))
], null)));var chunk__8546_8718 = null;var count__8547_8719 = 0;var i__8548_8720 = 0;while(true){
if((i__8548_8720 < count__8547_8719))
{var vec__8549_8721 = cljs.core._nth.call(null,chunk__8546_8718,i__8548_8720);var ev__7803__auto___8722 = cljs.core.nth.call(null,vec__8549_8721,0,null);var func__7804__auto___8723 = cljs.core.nth.call(null,vec__8549_8721,1,null);lt.util.dom.on.call(null,e__7802__auto__,ev__7803__auto___8722,func__7804__auto___8723);
{
var G__8724 = seq__8545_8717;
var G__8725 = chunk__8546_8718;
var G__8726 = count__8547_8719;
var G__8727 = (i__8548_8720 + 1);
seq__8545_8717 = G__8724;
chunk__8546_8718 = G__8725;
count__8547_8719 = G__8726;
i__8548_8720 = G__8727;
continue;
}
} else
{var temp__4092__auto___8728 = cljs.core.seq.call(null,seq__8545_8717);if(temp__4092__auto___8728)
{var seq__8545_8729__$1 = temp__4092__auto___8728;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8545_8729__$1))
{var c__7121__auto___8730 = cljs.core.chunk_first.call(null,seq__8545_8729__$1);{
var G__8731 = cljs.core.chunk_rest.call(null,seq__8545_8729__$1);
var G__8732 = c__7121__auto___8730;
var G__8733 = cljs.core.count.call(null,c__7121__auto___8730);
var G__8734 = 0;
seq__8545_8717 = G__8731;
chunk__8546_8718 = G__8732;
count__8547_8719 = G__8733;
i__8548_8720 = G__8734;
continue;
}
} else
{var vec__8550_8735 = cljs.core.first.call(null,seq__8545_8729__$1);var ev__7803__auto___8736 = cljs.core.nth.call(null,vec__8550_8735,0,null);var func__7804__auto___8737 = cljs.core.nth.call(null,vec__8550_8735,1,null);lt.util.dom.on.call(null,e__7802__auto__,ev__7803__auto___8736,func__7804__auto___8737);
{
var G__8738 = cljs.core.next.call(null,seq__8545_8729__$1);
var G__8739 = null;
var G__8740 = 0;
var G__8741 = 0;
seq__8545_8717 = G__8738;
chunk__8546_8718 = G__8739;
count__8547_8719 = G__8740;
i__8548_8720 = G__8741;
continue;
}
}
} else
{}
}
break;
}
return e__7802__auto__;
});
lt.plugins.chrometools.debugger$.debug_panel_stepover = (function debug_panel_stepover(this$){var e__7802__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"stepover"], null),"\u21B4"], null));var seq__8557_8742 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7802__auto__){
return (function (){var client = new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"step-over","step-over",2312612519),client);
});})(e__7802__auto__))
], null)));var chunk__8558_8743 = null;var count__8559_8744 = 0;var i__8560_8745 = 0;while(true){
if((i__8560_8745 < count__8559_8744))
{var vec__8561_8746 = cljs.core._nth.call(null,chunk__8558_8743,i__8560_8745);var ev__7803__auto___8747 = cljs.core.nth.call(null,vec__8561_8746,0,null);var func__7804__auto___8748 = cljs.core.nth.call(null,vec__8561_8746,1,null);lt.util.dom.on.call(null,e__7802__auto__,ev__7803__auto___8747,func__7804__auto___8748);
{
var G__8749 = seq__8557_8742;
var G__8750 = chunk__8558_8743;
var G__8751 = count__8559_8744;
var G__8752 = (i__8560_8745 + 1);
seq__8557_8742 = G__8749;
chunk__8558_8743 = G__8750;
count__8559_8744 = G__8751;
i__8560_8745 = G__8752;
continue;
}
} else
{var temp__4092__auto___8753 = cljs.core.seq.call(null,seq__8557_8742);if(temp__4092__auto___8753)
{var seq__8557_8754__$1 = temp__4092__auto___8753;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8557_8754__$1))
{var c__7121__auto___8755 = cljs.core.chunk_first.call(null,seq__8557_8754__$1);{
var G__8756 = cljs.core.chunk_rest.call(null,seq__8557_8754__$1);
var G__8757 = c__7121__auto___8755;
var G__8758 = cljs.core.count.call(null,c__7121__auto___8755);
var G__8759 = 0;
seq__8557_8742 = G__8756;
chunk__8558_8743 = G__8757;
count__8559_8744 = G__8758;
i__8560_8745 = G__8759;
continue;
}
} else
{var vec__8562_8760 = cljs.core.first.call(null,seq__8557_8754__$1);var ev__7803__auto___8761 = cljs.core.nth.call(null,vec__8562_8760,0,null);var func__7804__auto___8762 = cljs.core.nth.call(null,vec__8562_8760,1,null);lt.util.dom.on.call(null,e__7802__auto__,ev__7803__auto___8761,func__7804__auto___8762);
{
var G__8763 = cljs.core.next.call(null,seq__8557_8754__$1);
var G__8764 = null;
var G__8765 = 0;
var G__8766 = 0;
seq__8557_8742 = G__8763;
chunk__8558_8743 = G__8764;
count__8559_8744 = G__8765;
i__8560_8745 = G__8766;
continue;
}
}
} else
{}
}
break;
}
return e__7802__auto__;
});
lt.plugins.chrometools.debugger$.debug_panel_stepin = (function debug_panel_stepin(this$){var e__7802__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"stepinto"], null),"\u2193"], null));var seq__8569_8767 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7802__auto__){
return (function (){var client = new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"step-into","step-into",2312426547),client);
});})(e__7802__auto__))
], null)));var chunk__8570_8768 = null;var count__8571_8769 = 0;var i__8572_8770 = 0;while(true){
if((i__8572_8770 < count__8571_8769))
{var vec__8573_8771 = cljs.core._nth.call(null,chunk__8570_8768,i__8572_8770);var ev__7803__auto___8772 = cljs.core.nth.call(null,vec__8573_8771,0,null);var func__7804__auto___8773 = cljs.core.nth.call(null,vec__8573_8771,1,null);lt.util.dom.on.call(null,e__7802__auto__,ev__7803__auto___8772,func__7804__auto___8773);
{
var G__8774 = seq__8569_8767;
var G__8775 = chunk__8570_8768;
var G__8776 = count__8571_8769;
var G__8777 = (i__8572_8770 + 1);
seq__8569_8767 = G__8774;
chunk__8570_8768 = G__8775;
count__8571_8769 = G__8776;
i__8572_8770 = G__8777;
continue;
}
} else
{var temp__4092__auto___8778 = cljs.core.seq.call(null,seq__8569_8767);if(temp__4092__auto___8778)
{var seq__8569_8779__$1 = temp__4092__auto___8778;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8569_8779__$1))
{var c__7121__auto___8780 = cljs.core.chunk_first.call(null,seq__8569_8779__$1);{
var G__8781 = cljs.core.chunk_rest.call(null,seq__8569_8779__$1);
var G__8782 = c__7121__auto___8780;
var G__8783 = cljs.core.count.call(null,c__7121__auto___8780);
var G__8784 = 0;
seq__8569_8767 = G__8781;
chunk__8570_8768 = G__8782;
count__8571_8769 = G__8783;
i__8572_8770 = G__8784;
continue;
}
} else
{var vec__8574_8785 = cljs.core.first.call(null,seq__8569_8779__$1);var ev__7803__auto___8786 = cljs.core.nth.call(null,vec__8574_8785,0,null);var func__7804__auto___8787 = cljs.core.nth.call(null,vec__8574_8785,1,null);lt.util.dom.on.call(null,e__7802__auto__,ev__7803__auto___8786,func__7804__auto___8787);
{
var G__8788 = cljs.core.next.call(null,seq__8569_8779__$1);
var G__8789 = null;
var G__8790 = 0;
var G__8791 = 0;
seq__8569_8767 = G__8788;
chunk__8570_8768 = G__8789;
count__8571_8769 = G__8790;
i__8572_8770 = G__8791;
continue;
}
}
} else
{}
}
break;
}
return e__7802__auto__;
});
lt.plugins.chrometools.debugger$.debug_panel_stepout = (function debug_panel_stepout(this$){var e__7802__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"stepout"], null),"\u2191"], null));var seq__8581_8792 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7802__auto__){
return (function (){var client = new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"step-out","step-out",2441271359),client);
});})(e__7802__auto__))
], null)));var chunk__8582_8793 = null;var count__8583_8794 = 0;var i__8584_8795 = 0;while(true){
if((i__8584_8795 < count__8583_8794))
{var vec__8585_8796 = cljs.core._nth.call(null,chunk__8582_8793,i__8584_8795);var ev__7803__auto___8797 = cljs.core.nth.call(null,vec__8585_8796,0,null);var func__7804__auto___8798 = cljs.core.nth.call(null,vec__8585_8796,1,null);lt.util.dom.on.call(null,e__7802__auto__,ev__7803__auto___8797,func__7804__auto___8798);
{
var G__8799 = seq__8581_8792;
var G__8800 = chunk__8582_8793;
var G__8801 = count__8583_8794;
var G__8802 = (i__8584_8795 + 1);
seq__8581_8792 = G__8799;
chunk__8582_8793 = G__8800;
count__8583_8794 = G__8801;
i__8584_8795 = G__8802;
continue;
}
} else
{var temp__4092__auto___8803 = cljs.core.seq.call(null,seq__8581_8792);if(temp__4092__auto___8803)
{var seq__8581_8804__$1 = temp__4092__auto___8803;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8581_8804__$1))
{var c__7121__auto___8805 = cljs.core.chunk_first.call(null,seq__8581_8804__$1);{
var G__8806 = cljs.core.chunk_rest.call(null,seq__8581_8804__$1);
var G__8807 = c__7121__auto___8805;
var G__8808 = cljs.core.count.call(null,c__7121__auto___8805);
var G__8809 = 0;
seq__8581_8792 = G__8806;
chunk__8582_8793 = G__8807;
count__8583_8794 = G__8808;
i__8584_8795 = G__8809;
continue;
}
} else
{var vec__8586_8810 = cljs.core.first.call(null,seq__8581_8804__$1);var ev__7803__auto___8811 = cljs.core.nth.call(null,vec__8586_8810,0,null);var func__7804__auto___8812 = cljs.core.nth.call(null,vec__8586_8810,1,null);lt.util.dom.on.call(null,e__7802__auto__,ev__7803__auto___8811,func__7804__auto___8812);
{
var G__8813 = cljs.core.next.call(null,seq__8581_8804__$1);
var G__8814 = null;
var G__8815 = 0;
var G__8816 = 0;
seq__8581_8792 = G__8813;
chunk__8582_8793 = G__8814;
count__8583_8794 = G__8815;
i__8584_8795 = G__8816;
continue;
}
}
} else
{}
}
break;
}
return e__7802__auto__;
});
/**
* Create call-frame UI elements
*/
lt.plugins.chrometools.debugger$.create_call_frames = (function create_call_frames(panel,frames){if(cljs.core.truth_(frames))
{var iter__7090__auto__ = (function iter__8591(s__8592){return (new cljs.core.LazySeq(null,(function (){var s__8592__$1 = s__8592;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8592__$1);if(temp__4092__auto__)
{var s__8592__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8592__$2))
{var c__7088__auto__ = cljs.core.chunk_first.call(null,s__8592__$2);var size__7089__auto__ = cljs.core.count.call(null,c__7088__auto__);var b__8594 = cljs.core.chunk_buffer.call(null,size__7089__auto__);if((function (){var i__8593 = 0;while(true){
if((i__8593 < size__7089__auto__))
{var frame = cljs.core._nth.call(null,c__7088__auto__,i__8593);cljs.core.chunk_append.call(null,b__8594,lt.plugins.chrometools.debugger$.call_frame.call(null,panel,frame));
{
var G__8817 = (i__8593 + 1);
i__8593 = G__8817;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8594),iter__8591.call(null,cljs.core.chunk_rest.call(null,s__8592__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8594),null);
}
} else
{var frame = cljs.core.first.call(null,s__8592__$2);return cljs.core.cons.call(null,lt.plugins.chrometools.debugger$.call_frame.call(null,panel,frame),iter__8591.call(null,cljs.core.rest.call(null,s__8592__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7090__auto__.call(null,frames);
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
lt.plugins.chrometools.debugger$.debug_panel = (function debug_panel(this$){var e__7802__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"debug-panel"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),lt.plugins.chrometools.debugger$.bound_client.call(null,this$,cljs.core.PersistentVector.EMPTY,cljs.core.partial.call(null,lt.plugins.chrometools.debugger$.debug_panel_classes,this$),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"always-call","always-call",3320573646),true], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),cljs.core.PersistentArrayMap.EMPTY,"Debugger"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"controls"], null),lt.plugins.chrometools.debugger$.debug_panel_resume.call(null,this$),lt.plugins.chrometools.debugger$.debug_panel_stepover.call(null,this$),lt.plugins.chrometools.debugger$.debug_panel_stepin.call(null,this$),lt.plugins.chrometools.debugger$.debug_panel_stepout.call(null,this$),lt.plugins.chrometools.debugger$.reconnect_button.call(null,this$)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"call-stack"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Call Stack"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),lt.plugins.chrometools.debugger$.bound_client.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-frames","call-frames",3247219303)], null),lt.plugins.chrometools.debugger$.__GT_call_frames_class)], null),lt.plugins.chrometools.debugger$.bound_client.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-frames","call-frames",3247219303)], null),(function (p1__8595_SHARP_){return lt.plugins.chrometools.debugger$.create_call_frames.call(null,this$,p1__8595_SHARP_);
}))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"variables"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Scope Variables"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"scope-variables"], null),lt.plugins.chrometools.debugger$.bound_client.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scope-variables","scope-variables",1703262384)], null),(function (p1__8596_SHARP_,p2__8597_SHARP_){return lt.plugins.chrometools.debugger$.__GT_scope_variables.call(null,p1__8596_SHARP_,p2__8597_SHARP_);
}))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"debug-editor"], null),lt.object.__GT_content.call(null,lt.plugins.chrometools.debugger$.debug_editor)], null)], null)], null));var seq__8604_8818 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8605_8819 = null;var count__8606_8820 = 0;var i__8607_8821 = 0;while(true){
if((i__8607_8821 < count__8606_8820))
{var vec__8608_8822 = cljs.core._nth.call(null,chunk__8605_8819,i__8607_8821);var ev__7803__auto___8823 = cljs.core.nth.call(null,vec__8608_8822,0,null);var func__7804__auto___8824 = cljs.core.nth.call(null,vec__8608_8822,1,null);lt.util.dom.on.call(null,e__7802__auto__,ev__7803__auto___8823,func__7804__auto___8824);
{
var G__8825 = seq__8604_8818;
var G__8826 = chunk__8605_8819;
var G__8827 = count__8606_8820;
var G__8828 = (i__8607_8821 + 1);
seq__8604_8818 = G__8825;
chunk__8605_8819 = G__8826;
count__8606_8820 = G__8827;
i__8607_8821 = G__8828;
continue;
}
} else
{var temp__4092__auto___8829 = cljs.core.seq.call(null,seq__8604_8818);if(temp__4092__auto___8829)
{var seq__8604_8830__$1 = temp__4092__auto___8829;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8604_8830__$1))
{var c__7121__auto___8831 = cljs.core.chunk_first.call(null,seq__8604_8830__$1);{
var G__8832 = cljs.core.chunk_rest.call(null,seq__8604_8830__$1);
var G__8833 = c__7121__auto___8831;
var G__8834 = cljs.core.count.call(null,c__7121__auto___8831);
var G__8835 = 0;
seq__8604_8818 = G__8832;
chunk__8605_8819 = G__8833;
count__8606_8820 = G__8834;
i__8607_8821 = G__8835;
continue;
}
} else
{var vec__8609_8836 = cljs.core.first.call(null,seq__8604_8830__$1);var ev__7803__auto___8837 = cljs.core.nth.call(null,vec__8609_8836,0,null);var func__7804__auto___8838 = cljs.core.nth.call(null,vec__8609_8836,1,null);lt.util.dom.on.call(null,e__7802__auto__,ev__7803__auto___8837,func__7804__auto___8838);
{
var G__8839 = cljs.core.next.call(null,seq__8604_8830__$1);
var G__8840 = null;
var G__8841 = 0;
var G__8842 = 0;
seq__8604_8818 = G__8839;
chunk__8605_8819 = G__8840;
count__8606_8820 = G__8841;
i__8607_8821 = G__8842;
continue;
}
}
} else
{}
}
break;
}
return e__7802__auto__;
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
var scope_chain_8843 = lt.util.cljs.js__GT_clj.call(null,new cljs.core.Keyword(null,"scopeChain","scopeChain",796553279).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,call_frames)));cljs.core.add_watch.call(null,this$,lt.plugins.chrometools.debugger$.watch_key,((function (scope_chain_8843,params,reason,breakpoint,call_frames,location,file_type){
return (function (_,___$1,___$2,___$3){return lt.object.merge_BANG_.call(null,lt.plugins.chrometools.debugger$.debug_sidebar,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refresh","refresh",2099349069),true], null));
});})(scope_chain_8843,params,reason,breakpoint,call_frames,location,file_type))
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
lt.plugins.chrometools.debugger$.__BEH__debugger_resumed = (function __BEH__debugger_resumed(client){var temp__4092__auto___8844 = cljs.core.get_in.call(null,cljs.core.deref.call(null,client),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debugger","debugger",1561716627),new cljs.core.Keyword(null,"paused-at","paused-at",1843746980)], null));if(cljs.core.truth_(temp__4092__auto___8844))
{var paused_at_8845 = temp__4092__auto___8844;lt.objs.editor.__GT_cm_ed.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(paused_at_8845)).removeLineClass(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(paused_at_8845),"wrapper","breakpoint-paused");
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
lt.plugins.chrometools.debugger$.get_editor_by_filename = (function get_editor_by_filename(filename){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__8610_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__8610_SHARP_))),filename);
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
var G__8846 = null;
var G__8846__0 = (function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"pause-debugger","pause-debugger",1706137994),lt.plugins.chrometools.debugger$.get_current_client.call(null));
});
var G__8846__1 = (function (client){return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.pause"], null),lt.plugins.chrometools.debugger$.display_error);
});
G__8846 = function(client){
switch(arguments.length){
case 0:
return G__8846__0.call(this);
case 1:
return G__8846__1.call(this,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8846;
})()
], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"resume-debugger","resume-debugger",4240016691),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Debugger - Resume",new cljs.core.Keyword(null,"exec","exec",1017031683),(function() {
var G__8847 = null;
var G__8847__0 = (function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"resume-debugger","resume-debugger",4240016691),lt.plugins.chrometools.debugger$.get_current_client.call(null));
});
var G__8847__1 = (function (client){return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.resume"], null),(function (result){var temp__4092__auto__ = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(result));if(cljs.core.truth_(temp__4092__auto__))
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
G__8847 = function(client){
switch(arguments.length){
case 0:
return G__8847__0.call(this);
case 1:
return G__8847__1.call(this,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8847;
})()
], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"step-into","step-into",2312426547),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Debugger - Step Into",new cljs.core.Keyword(null,"exec","exec",1017031683),(function() {
var G__8848 = null;
var G__8848__0 = (function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"step-into","step-into",2312426547),lt.plugins.chrometools.debugger$.get_current_client.call(null));
});
var G__8848__1 = (function (client){return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.stepInto"], null),lt.plugins.chrometools.debugger$.display_error);
});
G__8848 = function(client){
switch(arguments.length){
case 0:
return G__8848__0.call(this);
case 1:
return G__8848__1.call(this,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8848;
})()
], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"step-out","step-out",2441271359),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Debugger - Step Out",new cljs.core.Keyword(null,"exec","exec",1017031683),(function() {
var G__8849 = null;
var G__8849__0 = (function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"step-out","step-out",2441271359),lt.plugins.chrometools.debugger$.get_current_client.call(null));
});
var G__8849__1 = (function (client){return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.stepOut"], null),lt.plugins.chrometools.debugger$.display_error);
});
G__8849 = function(client){
switch(arguments.length){
case 0:
return G__8849__0.call(this);
case 1:
return G__8849__1.call(this,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8849;
})()
], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"step-over","step-over",2312612519),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Debugger - Step Over",new cljs.core.Keyword(null,"exec","exec",1017031683),(function() {
var G__8850 = null;
var G__8850__0 = (function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"step-over","step-over",2312612519),lt.plugins.chrometools.debugger$.get_current_client.call(null));
});
var G__8850__1 = (function (client){return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.stepOver"], null),lt.plugins.chrometools.debugger$.display_error);
});
G__8850 = function(client){
switch(arguments.length){
case 0:
return G__8850__0.call(this);
case 1:
return G__8850__1.call(this,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8850;
})()
], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"step-over","step-over",2312612519),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Debugger - Step Over",new cljs.core.Keyword(null,"exec","exec",1017031683),(function() {
var G__8851 = null;
var G__8851__0 = (function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"step-over","step-over",2312612519),lt.plugins.chrometools.debugger$.get_current_client.call(null));
});
var G__8851__1 = (function (client){return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.stepOver"], null),lt.plugins.chrometools.debugger$.display_error);
});
G__8851 = function(client){
switch(arguments.length){
case 0:
return G__8851__0.call(this);
case 1:
return G__8851__1.call(this,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8851;
})()
], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"activate-breakpoints","activate-breakpoints",4436508730),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Debugger - Activate Breakpoints",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function() {
var G__8852 = null;
var G__8852__0 = (function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"activate-breakpoints","activate-breakpoints",4436508730),lt.plugins.chrometools.debugger$.get_current_client.call(null));
});
var G__8852__1 = (function (client){return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.setBreakpointsActive",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),true], null)], null));
});
G__8852 = function(client){
switch(arguments.length){
case 0:
return G__8852__0.call(this);
case 1:
return G__8852__1.call(this,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8852;
})()
], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"deactivate-breakpoints","deactivate-breakpoints",2365948475),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Debugger - De-activate Breakpoints",new cljs.core.Keyword(null,"exec","exec",1017031683),(function() {
var G__8853 = null;
var G__8853__0 = (function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"activate-breakpoints","activate-breakpoints",4436508730),lt.plugins.chrometools.debugger$.get_current_client.call(null));
});
var G__8853__1 = (function (client){return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.setBreakpointsActive",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),false], null)], null));
});
G__8853 = function(client){
switch(arguments.length){
case 0:
return G__8853__0.call(this);
case 1:
return G__8853__1.call(this,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8853;
})()
], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"watch-file","watch-file",867430188),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Watch file for changes",new cljs.core.Keyword(null,"exec","exec",1017031683),(function() {
var G__8854 = null;
var G__8854__0 = (function (){var client = lt.plugins.chrometools.debugger$.get_current_client.call(null);if(cljs.core.truth_(client))
{return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"watch-file","watch-file",867430188),client);
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"Connect a client before adding watches");
}
});
var G__8854__1 = (function (client){return lt.plugins.chrometools.filewatch.open_file.call(null,client);
});
G__8854 = function(client){
switch(arguments.length){
case 0:
return G__8854__0.call(this);
case 1:
return G__8854__1.call(this,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8854;
})()
], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"watch-folder","watch-folder",1991802526),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Watch folder for changes",new cljs.core.Keyword(null,"exec","exec",1017031683),(function() {
var G__8855 = null;
var G__8855__0 = (function (){var client = lt.plugins.chrometools.debugger$.get_current_client.call(null);if(cljs.core.truth_(client))
{return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"watch-folder","watch-folder",1991802526),client);
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"Connect a client before adding watches");
}
});
var G__8855__1 = (function (client){return lt.plugins.chrometools.filewatch.open_folder.call(null,client);
});
G__8855 = function(client){
switch(arguments.length){
case 0:
return G__8855__0.call(this);
case 1:
return G__8855__1.call(this,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8855;
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
return (function (p1__8048_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__8048_SHARP_),name);
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
lt.plugins.chrometools.console.__BEH__console_log = (function __BEH__console_log(this$,m){var id = lt.object.__GT_id.call(null,this$);var type = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",4313443576).cljs$core$IFn$_invoke$arity$1(m)));var msg = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",4313443576).cljs$core$IFn$_invoke$arity$1(m));var msg__$1 = cljs.core.assoc.call(null,msg,new cljs.core.Keyword(null,"client","client",3951159101),this$);var group = lt.plugins.chrometools.console.get_current_group.call(null,id);var G__8050 = type;if(cljs.core._EQ_.call(null,"log",G__8050))
{if(cljs.core._EQ_.call(null,group,lt.plugins.chrometools.lttools_group_name))
{return lt.plugins.chrometools.console.handle_watch_result.call(null,this$,msg__$1);
} else
{return lt.plugins.chrometools.console.handle_log_msg.call(null,msg__$1);
}
} else
{if(cljs.core._EQ_.call(null,"endGroup",G__8050))
{return cljs.core.swap_BANG_.call(null,lt.plugins.chrometools.console.group_stack,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),cljs.core.pop);
} else
{if(cljs.core._EQ_.call(null,"startGroup",G__8050))
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
lt.plugins.chrometools.console.msg__GT_log = (function msg__GT_log(m){var params = new cljs.core.Keyword(null,"parameters","parameters",1472640348).cljs$core$IFn$_invoke$arity$1(m);var client = new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(m);var iter__7090__auto__ = ((function (params,client){
return (function iter__8055(s__8056){return (new cljs.core.LazySeq(null,((function (params,client){
return (function (){var s__8056__$1 = s__8056;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8056__$1);if(temp__4092__auto__)
{var s__8056__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8056__$2))
{var c__7088__auto__ = cljs.core.chunk_first.call(null,s__8056__$2);var size__7089__auto__ = cljs.core.count.call(null,c__7088__auto__);var b__8058 = cljs.core.chunk_buffer.call(null,size__7089__auto__);if((function (){var i__8057 = 0;while(true){
if((i__8057 < size__7089__auto__))
{var p = cljs.core._nth.call(null,c__7088__auto__,i__8057);cljs.core.chunk_append.call(null,b__8058,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.log-val","span.log-val",3645418982),(cljs.core.truth_((function (){var and__6361__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p),"object");if(and__6361__auto__)
{var and__6361__auto____$1 = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p);if(cljs.core.truth_(and__6361__auto____$1))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p)));
} else
{return and__6361__auto____$1;
}
} else
{return and__6361__auto__;
}
})())?"null":((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p),"object"))?lt.object.__GT_content.call(null,lt.plugins.chrometools.devtools.make_inspector_object.call(null,client,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),p], null))):((new cljs.core.Keyword(null,"else","else",1017020587))?new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(p)):null)))], null));
{
var G__8087 = (i__8057 + 1);
i__8057 = G__8087;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8058),iter__8055.call(null,cljs.core.chunk_rest.call(null,s__8056__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8058),null);
}
} else
{var p = cljs.core.first.call(null,s__8056__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.log-val","span.log-val",3645418982),(cljs.core.truth_((function (){var and__6361__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p),"object");if(and__6361__auto__)
{var and__6361__auto____$1 = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p);if(cljs.core.truth_(and__6361__auto____$1))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p)));
} else
{return and__6361__auto____$1;
}
} else
{return and__6361__auto__;
}
})())?"null":((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p),"object"))?lt.object.__GT_content.call(null,lt.plugins.chrometools.devtools.make_inspector_object.call(null,client,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),p], null))):((new cljs.core.Keyword(null,"else","else",1017020587))?new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(p)):null)))], null),iter__8055.call(null,cljs.core.rest.call(null,s__8056__$2)));
}
} else
{return null;
}
break;
}
});})(params,client))
,null,null));
});})(params,client))
;return iter__7090__auto__.call(null,params);
});
lt.plugins.chrometools.console.msg__GT_string = (function msg__GT_string(m){var params = new cljs.core.Keyword(null,"parameters","parameters",1472640348).cljs$core$IFn$_invoke$arity$1(m);return cljs.core.reduce.call(null,((function (params){
return (function (res,p){return [cljs.core.str(res),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p))].join('');
});})(params))
,"",params);
});
lt.plugins.chrometools.console.error__GT_string = (function error__GT_string(e){return [cljs.core.str("ERROR: "),cljs.core.str(new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(e)),cljs.core.str(": "),cljs.core.str(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(e)),cljs.core.str("\n"),cljs.core.str(cljs.core.reduce.call(null,(function (res,f){return [cljs.core.str(res),cljs.core.str("       "),cljs.core.str(lt.objs.files.basename.call(null,new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(f))),cljs.core.str(" ["),cljs.core.str(new cljs.core.Keyword(null,"lineNumber","lineNumber",684762063).cljs$core$IFn$_invoke$arity$1(f)),cljs.core.str("]: "),cljs.core.str(((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"functionName","functionName",802531829).cljs$core$IFn$_invoke$arity$1(f)))?"anonymous":new cljs.core.Keyword(null,"functionName","functionName",802531829).cljs$core$IFn$_invoke$arity$1(f))),cljs.core.str("\n")].join('');
}),"",new cljs.core.Keyword(null,"stackTrace","stackTrace",3040184079).cljs$core$IFn$_invoke$arity$1(e)))].join('');
});
lt.plugins.chrometools.console.frame = (function frame(f){var e__7802__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.url","td.url",4428724323),lt.objs.files.basename.call(null,new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(f))," [",new cljs.core.Keyword(null,"lineNumber","lineNumber",684762063).cljs$core$IFn$_invoke$arity$1(f),"]"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"functionName","functionName",802531829).cljs$core$IFn$_invoke$arity$1(f)))?"anonymous":new cljs.core.Keyword(null,"functionName","functionName",802531829).cljs$core$IFn$_invoke$arity$1(f))], null)], null));var seq__8065_8088 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8066_8089 = null;var count__8067_8090 = 0;var i__8068_8091 = 0;while(true){
if((i__8068_8091 < count__8067_8090))
{var vec__8069_8092 = cljs.core._nth.call(null,chunk__8066_8089,i__8068_8091);var ev__7803__auto___8093 = cljs.core.nth.call(null,vec__8069_8092,0,null);var func__7804__auto___8094 = cljs.core.nth.call(null,vec__8069_8092,1,null);lt.util.dom.on.call(null,e__7802__auto__,ev__7803__auto___8093,func__7804__auto___8094);
{
var G__8095 = seq__8065_8088;
var G__8096 = chunk__8066_8089;
var G__8097 = count__8067_8090;
var G__8098 = (i__8068_8091 + 1);
seq__8065_8088 = G__8095;
chunk__8066_8089 = G__8096;
count__8067_8090 = G__8097;
i__8068_8091 = G__8098;
continue;
}
} else
{var temp__4092__auto___8099 = cljs.core.seq.call(null,seq__8065_8088);if(temp__4092__auto___8099)
{var seq__8065_8100__$1 = temp__4092__auto___8099;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8065_8100__$1))
{var c__7121__auto___8101 = cljs.core.chunk_first.call(null,seq__8065_8100__$1);{
var G__8102 = cljs.core.chunk_rest.call(null,seq__8065_8100__$1);
var G__8103 = c__7121__auto___8101;
var G__8104 = cljs.core.count.call(null,c__7121__auto___8101);
var G__8105 = 0;
seq__8065_8088 = G__8102;
chunk__8066_8089 = G__8103;
count__8067_8090 = G__8104;
i__8068_8091 = G__8105;
continue;
}
} else
{var vec__8070_8106 = cljs.core.first.call(null,seq__8065_8100__$1);var ev__7803__auto___8107 = cljs.core.nth.call(null,vec__8070_8106,0,null);var func__7804__auto___8108 = cljs.core.nth.call(null,vec__8070_8106,1,null);lt.util.dom.on.call(null,e__7802__auto__,ev__7803__auto___8107,func__7804__auto___8108);
{
var G__8109 = cljs.core.next.call(null,seq__8065_8100__$1);
var G__8110 = null;
var G__8111 = 0;
var G__8112 = 0;
seq__8065_8088 = G__8109;
chunk__8066_8089 = G__8110;
count__8067_8090 = G__8111;
i__8068_8091 = G__8112;
continue;
}
}
} else
{}
}
break;
}
return e__7802__auto__;
});
lt.plugins.chrometools.console.handle_log_msg = (function (){var method_table__7231__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__7232__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__7233__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__7234__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__7235__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle-log-msg",new cljs.core.Keyword(null,"level","level",1116770038),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__7235__auto__,method_table__7231__auto__,prefer_table__7232__auto__,method_cache__7233__auto__,cached_hierarchy__7234__auto__));
})();
lt.plugins.chrometools.console.valid_error_QMARK_ = (function valid_error_QMARK_(text){var text__$1 = text.toLowerCase();return cljs.core.every_QMARK_.call(null,((function (text__$1){
return (function (p1__8071_SHARP_){return cljs.core._EQ_.call(null,-1,text__$1.indexOf(p1__8071_SHARP_));
});})(text__$1))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["failed to load resource: http://app.kodowa.com"], null));
});
cljs.core._add_method.call(null,lt.plugins.chrometools.console.handle_log_msg,"error",(function (msg){if(lt.plugins.chrometools.console.valid_error_QMARK_.call(null,[cljs.core.str(new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str(": "),cljs.core.str(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(msg))].join('')))
{var top = cljs.core.first.call(null,new cljs.core.Keyword(null,"stackTrace","stackTrace",3040184079).cljs$core$IFn$_invoke$arity$1(msg));return lt.objs.console.verbatim.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",1013907517),new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(msg),(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(top))?null:[cljs.core.str(": "),cljs.core.str(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(msg))].join(''))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),(function (){var iter__7090__auto__ = ((function (top){
return (function iter__8072(s__8073){return (new cljs.core.LazySeq(null,((function (top){
return (function (){var s__8073__$1 = s__8073;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8073__$1);if(temp__4092__auto__)
{var s__8073__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8073__$2))
{var c__7088__auto__ = cljs.core.chunk_first.call(null,s__8073__$2);var size__7089__auto__ = cljs.core.count.call(null,c__7088__auto__);var b__8075 = cljs.core.chunk_buffer.call(null,size__7089__auto__);if((function (){var i__8074 = 0;while(true){
if((i__8074 < size__7089__auto__))
{var f = cljs.core._nth.call(null,c__7088__auto__,i__8074);cljs.core.chunk_append.call(null,b__8075,lt.plugins.chrometools.console.frame.call(null,f));
{
var G__8113 = (i__8074 + 1);
i__8074 = G__8113;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8075),iter__8072.call(null,cljs.core.chunk_rest.call(null,s__8073__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8075),null);
}
} else
{var f = cljs.core.first.call(null,s__8073__$2);return cljs.core.cons.call(null,lt.plugins.chrometools.console.frame.call(null,f),iter__8072.call(null,cljs.core.rest.call(null,s__8073__$2)));
}
} else
{return null;
}
break;
}
});})(top))
,null,null));
});})(top))
;return iter__7090__auto__.call(null,new cljs.core.Keyword(null,"stackTrace","stackTrace",3040184079).cljs$core$IFn$_invoke$arity$1(msg));
})()], null)], null),"error",lt.plugins.chrometools.console.error__GT_string.call(null,msg));
} else
{return null;
}
}));
cljs.core._add_method.call(null,lt.plugins.chrometools.console.handle_log_msg,"log",(function (msg){var stack = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__8076_SHARP_){return cljs.core.not_EQ_.call(null,lt.objs.files.basename.call(null,new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(p1__8076_SHARP_)),"bootstrap.js");
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
lt.plugins.chrometools.eval.cljs_eval_cb = (function cljs_eval_cb(client,msg,form,r){var result = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(r);var error_QMARK_ = (function (){var or__6373__auto__ = (result == null);if(or__6373__auto__)
{return or__6373__auto__;
} else
{return new cljs.core.Keyword(null,"wasThrown","wasThrown",3712175619).cljs$core$IFn$_invoke$arity$1(result);
}
})();var error = (function (){var or__6373__auto__ = new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(result);if(cljs.core.truth_(or__6373__auto__))
{return or__6373__auto__;
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
{var ed = temp__4092__auto__;var info = new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg);var seq__8992 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(info));var chunk__8993 = null;var count__8994 = 0;var i__8995 = 0;while(true){
if((i__8995 < count__8994))
{var form__$1 = cljs.core._nth.call(null,chunk__8993,i__8995);var cb_9006 = cljs.core.partial.call(null,lt.plugins.chrometools.eval.cljs_eval_cb,this$,msg,form__$1);lt.plugins.chrometools.eval.eval_cljs.call(null,this$,form__$1,cb_9006);
{
var G__9007 = seq__8992;
var G__9008 = chunk__8993;
var G__9009 = count__8994;
var G__9010 = (i__8995 + 1);
seq__8992 = G__9007;
chunk__8993 = G__9008;
count__8994 = G__9009;
i__8995 = G__9010;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__8992);if(temp__4092__auto____$1)
{var seq__8992__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8992__$1))
{var c__7121__auto__ = cljs.core.chunk_first.call(null,seq__8992__$1);{
var G__9011 = cljs.core.chunk_rest.call(null,seq__8992__$1);
var G__9012 = c__7121__auto__;
var G__9013 = cljs.core.count.call(null,c__7121__auto__);
var G__9014 = 0;
seq__8992 = G__9011;
chunk__8993 = G__9012;
count__8994 = G__9013;
i__8995 = G__9014;
continue;
}
} else
{var form__$1 = cljs.core.first.call(null,seq__8992__$1);var cb_9015 = cljs.core.partial.call(null,lt.plugins.chrometools.eval.cljs_eval_cb,this$,msg,form__$1);lt.plugins.chrometools.eval.eval_cljs.call(null,this$,form__$1,cb_9015);
{
var G__9016 = cljs.core.next.call(null,seq__8992__$1);
var G__9017 = null;
var G__9018 = 0;
var G__9019 = 0;
seq__8992 = G__9016;
chunk__8993 = G__9017;
count__8994 = G__9018;
i__8995 = G__9019;
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