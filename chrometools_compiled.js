if(!lt.util.load.provided_QMARK_('lt.plugins.chrometools')) {
goog.provide('lt.plugins.chrometools');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('lt.util.cljs');
goog.require('lt.util.js');
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
lt.plugins.chrometools.server_input = (function server_input(){var e__7761__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"host:port",new cljs.core.Keyword(null,"value","value",1125876963),"localhost:"], null)], null));var seq__7949_8086 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",1111509066),((function (e__7761__auto__){
return (function (){return lt.objs.context.in_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
});})(e__7761__auto__))
,new cljs.core.Keyword(null,"blur","blur",1016931289),((function (e__7761__auto__){
return (function (){return lt.objs.context.out_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
});})(e__7761__auto__))
], null)));var chunk__7950_8087 = null;var count__7951_8088 = 0;var i__7952_8089 = 0;while(true){
if((i__7952_8089 < count__7951_8088))
{var vec__7953_8090 = cljs.core._nth.call(null,chunk__7950_8087,i__7952_8089);var ev__7762__auto___8091 = cljs.core.nth.call(null,vec__7953_8090,0,null);var func__7763__auto___8092 = cljs.core.nth.call(null,vec__7953_8090,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___8091,func__7763__auto___8092);
{
var G__8093 = seq__7949_8086;
var G__8094 = chunk__7950_8087;
var G__8095 = count__7951_8088;
var G__8096 = (i__7952_8089 + 1);
seq__7949_8086 = G__8093;
chunk__7950_8087 = G__8094;
count__7951_8088 = G__8095;
i__7952_8089 = G__8096;
continue;
}
} else
{var temp__4092__auto___8097 = cljs.core.seq.call(null,seq__7949_8086);if(temp__4092__auto___8097)
{var seq__7949_8098__$1 = temp__4092__auto___8097;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7949_8098__$1))
{var c__7112__auto___8099 = cljs.core.chunk_first.call(null,seq__7949_8098__$1);{
var G__8100 = cljs.core.chunk_rest.call(null,seq__7949_8098__$1);
var G__8101 = c__7112__auto___8099;
var G__8102 = cljs.core.count.call(null,c__7112__auto___8099);
var G__8103 = 0;
seq__7949_8086 = G__8100;
chunk__7950_8087 = G__8101;
count__7951_8088 = G__8102;
i__7952_8089 = G__8103;
continue;
}
} else
{var vec__7954_8104 = cljs.core.first.call(null,seq__7949_8098__$1);var ev__7762__auto___8105 = cljs.core.nth.call(null,vec__7954_8104,0,null);var func__7763__auto___8106 = cljs.core.nth.call(null,vec__7954_8104,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___8105,func__7763__auto___8106);
{
var G__8107 = cljs.core.next.call(null,seq__7949_8098__$1);
var G__8108 = null;
var G__8109 = 0;
var G__8110 = 0;
seq__7949_8086 = G__8107;
chunk__7950_8087 = G__8108;
count__7951_8088 = G__8109;
i__7952_8089 = G__8110;
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
lt.plugins.chrometools.connect_to_remote = (function connect_to_remote(server,client){var vec__7956 = clojure.string.split.call(null,server,":");var host = cljs.core.nth.call(null,vec__7956,0,null);var port = cljs.core.nth.call(null,vec__7956,1,null);if(cljs.core.truth_((function (){var and__6352__auto__ = host;if(cljs.core.truth_(and__6352__auto__))
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
return (function (p1__7957_SHARP_){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"message","message",1968829305),lt.util.cljs.js__GT_clj.call(null,JSON.parse(p1__7957_SHARP_.data),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true));
});})(sock))
;
sock.onerror = ((function (sock){
return (function (p1__7958_SHARP_){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"error","error",1110689146),p1__7958_SHARP_);
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
var send__delegate = function (client,m,p__7959){var vec__7961 = p__7959;var cb = cljs.core.nth.call(null,vec__7961,0,null);if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))))
{return lt.plugins.chrometools.send_STAR_.call(null,client,m,cb);
} else
{return lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1121848451)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [client,m,cb], null));
}
};
var send = function (client,m,var_args){
var p__7959 = null;if (arguments.length > 2) {
  p__7959 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return send__delegate.call(this,client,m,p__7959);};
send.cljs$lang$maxFixedArity = 2;
send.cljs$lang$applyTo = (function (arglist__8111){
var client = cljs.core.first(arglist__8111);
arglist__8111 = cljs.core.next(arglist__8111);
var m = cljs.core.first(arglist__8111);
var p__7959 = cljs.core.rest(arglist__8111);
return send__delegate(client,m,p__7959);
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
lt.plugins.chrometools.__BEH__close = (function __BEH__close(this$){var temp__4092__auto___8112 = new cljs.core.Keyword(null,"socket","socket",4411822821).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8112))
{var socket_8113 = temp__4092__auto___8112;socket_8113.close();
} else
{}
cljs.core.swap_BANG_.call(null,lt.plugins.chrometools.connected_tabs,cljs.core.dissoc,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));
return lt.objs.clients.rem_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools","close","lt.plugins.chrometools/close",1334675834),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.__BEH__close,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close!","close!",3951350939),null], null), null));
lt.plugins.chrometools.__BEH__clear_queue_on_connect = (function __BEH__clear_queue_on_connect(this$){var seq__7970_8114 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"queue","queue",1121848451).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var chunk__7971_8115 = null;var count__7972_8116 = 0;var i__7973_8117 = 0;while(true){
if((i__7973_8117 < count__7972_8116))
{var msg_8118 = cljs.core._nth.call(null,chunk__7971_8115,i__7973_8117);cljs.core.apply.call(null,lt.plugins.chrometools.send,msg_8118);
{
var G__8119 = seq__7970_8114;
var G__8120 = chunk__7971_8115;
var G__8121 = count__7972_8116;
var G__8122 = (i__7973_8117 + 1);
seq__7970_8114 = G__8119;
chunk__7971_8115 = G__8120;
count__7972_8116 = G__8121;
i__7973_8117 = G__8122;
continue;
}
} else
{var temp__4092__auto___8123 = cljs.core.seq.call(null,seq__7970_8114);if(temp__4092__auto___8123)
{var seq__7970_8124__$1 = temp__4092__auto___8123;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7970_8124__$1))
{var c__7112__auto___8125 = cljs.core.chunk_first.call(null,seq__7970_8124__$1);{
var G__8126 = cljs.core.chunk_rest.call(null,seq__7970_8124__$1);
var G__8127 = c__7112__auto___8125;
var G__8128 = cljs.core.count.call(null,c__7112__auto___8125);
var G__8129 = 0;
seq__7970_8114 = G__8126;
chunk__7971_8115 = G__8127;
count__7972_8116 = G__8128;
i__7973_8117 = G__8129;
continue;
}
} else
{var msg_8130 = cljs.core.first.call(null,seq__7970_8124__$1);cljs.core.apply.call(null,lt.plugins.chrometools.send,msg_8130);
{
var G__8131 = cljs.core.next.call(null,seq__7970_8124__$1);
var G__8132 = null;
var G__8133 = 0;
var G__8134 = 0;
seq__7970_8114 = G__8131;
chunk__7971_8115 = G__8132;
count__7972_8116 = G__8133;
i__7973_8117 = G__8134;
continue;
}
}
} else
{}
}
break;
}
var temp__4092__auto__ = new cljs.core.Keyword(null,"queued-callbacks","queued-callbacks",3801666662).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto__))
{var cbs = temp__4092__auto__;return lt.util.js.wait.call(null,4500,((function (cbs,temp__4092__auto__){
return (function (){var seq__7974 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"queued-callbacks","queued-callbacks",3801666662).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var chunk__7975 = null;var count__7976 = 0;var i__7977 = 0;while(true){
if((i__7977 < count__7976))
{var cb = cljs.core._nth.call(null,chunk__7975,i__7977);cb.call(null);
{
var G__8135 = seq__7974;
var G__8136 = chunk__7975;
var G__8137 = count__7976;
var G__8138 = (i__7977 + 1);
seq__7974 = G__8135;
chunk__7975 = G__8136;
count__7976 = G__8137;
i__7977 = G__8138;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__7974);if(temp__4092__auto____$1)
{var seq__7974__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7974__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__7974__$1);{
var G__8139 = cljs.core.chunk_rest.call(null,seq__7974__$1);
var G__8140 = c__7112__auto__;
var G__8141 = cljs.core.count.call(null,c__7112__auto__);
var G__8142 = 0;
seq__7974 = G__8139;
chunk__7975 = G__8140;
count__7976 = G__8141;
i__7977 = G__8142;
continue;
}
} else
{var cb = cljs.core.first.call(null,seq__7974__$1);cb.call(null);
{
var G__8143 = cljs.core.next.call(null,seq__7974__$1);
var G__8144 = null;
var G__8145 = 0;
var G__8146 = 0;
seq__7974 = G__8143;
chunk__7975 = G__8144;
count__7976 = G__8145;
i__7977 = G__8146;
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
lt.plugins.chrometools.load_lttools = (function load_lttools(){return [cljs.core.str("\n  (function () {\n   function replacer(key, value) {\n    if(cache.length > 20) {\n      return;\n    }\n    if(window.jQuery && value instanceof jQuery) {\n      return \"[jQuery $(\" + value.selector + \")]\";\n    }\n    if(value instanceof Element) {\n      return \"[Element \" + value.tagName.toLowerCase() + (value.id != \"\" ? \"#\" : \"\") + value.id + \"]\";\n    }\n    if(typeof(value) == \"object\") {\n      if(cache.indexOf(value) > -1) {\n        return \"circular\";\n      }\n      cache.push(value);\n      return value;\n    }\n    if(typeof value == \"function\") {\n      return \"[function]\";\n    }\n    return value;\n  }\n\n  function safeStringify(res) {\n    cache = [];\n    return JSON.stringify(res, replacer);\n  }\n     window.lttools = {\n      watch: function(exp, meta) {\n        var w = {\n          exp: safeStringify(exp),\n          meta: meta\n        };\n        console.group(\""),cljs.core.str(lt.plugins.chrometools.lttools_group_name),cljs.core.str("\")\n        console.log(w);\n        console.groupEnd();\n      }\n    };\n }());\n  ")].join('');
});
lt.plugins.chrometools.inject_lttools = (function inject_lttools(client){return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Runtime.evaluate",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expression","expression",3513419274),lt.plugins.chrometools.load_lttools.call(null)], null)], null));
});
lt.plugins.chrometools.__BEH__init_tab = (function __BEH__init_tab(this$){lt.plugins.chrometools.send.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Runtime.enable"], null));
lt.plugins.chrometools.send.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Console.enable"], null));
lt.plugins.chrometools.send.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.enable"], null),lt.plugins.chrometools.inject_lttools.call(null,this$));
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
lt.plugins.chrometools.store_source_map = (function store_source_map(client,url,params,sm){var params__$1 = cljs.core.assoc.call(null,params,new cljs.core.Keyword(null,"sourceMap","sourceMap",3610443443),sm);var seq__7982 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"sources","sources",3286994730).cljs$core$IFn$_invoke$arity$1(sm));var chunk__7983 = null;var count__7984 = 0;var i__7985 = 0;while(true){
if((i__7985 < count__7984))
{var source = cljs.core._nth.call(null,chunk__7983,i__7985);lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scripts","scripts",2940419194)], null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.files.basename.call(null,source),url], null),params__$1);
{
var G__8147 = seq__7982;
var G__8148 = chunk__7983;
var G__8149 = count__7984;
var G__8150 = (i__7985 + 1);
seq__7982 = G__8147;
chunk__7983 = G__8148;
count__7984 = G__8149;
i__7985 = G__8150;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7982);if(temp__4092__auto__)
{var seq__7982__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7982__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__7982__$1);{
var G__8151 = cljs.core.chunk_rest.call(null,seq__7982__$1);
var G__8152 = c__7112__auto__;
var G__8153 = cljs.core.count.call(null,c__7112__auto__);
var G__8154 = 0;
seq__7982 = G__8151;
chunk__7983 = G__8152;
count__7984 = G__8153;
i__7985 = G__8154;
continue;
}
} else
{var source = cljs.core.first.call(null,seq__7982__$1);lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scripts","scripts",2940419194)], null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.files.basename.call(null,source),url], null),params__$1);
{
var G__8155 = cljs.core.next.call(null,seq__7982__$1);
var G__8156 = null;
var G__8157 = 0;
var G__8158 = 0;
seq__7982 = G__8155;
chunk__7983 = G__8156;
count__7984 = G__8157;
i__7985 = G__8158;
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
return (function (d){var temp__4092__auto__ = lt.util.cljs.js__GT_clj.call(null,JSON.parse(d),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);if(cljs.core.truth_(temp__4092__auto__))
{var data = temp__4092__auto__;lt.plugins.chrometools.store_source_map.call(null,client,url,params,data);
return cb.call(null,data);
} else
{return null;
}
});})(sm_filename,url,base,sm_url))
);
}
});
lt.plugins.chrometools.__BEH__script_parsed = (function __BEH__script_parsed(this$,s){var params = new cljs.core.Keyword(null,"params","params",4313443576).cljs$core$IFn$_invoke$arity$1(s);var source_map_url = new cljs.core.Keyword(null,"sourceMapURL","sourceMapURL",2152324576).cljs$core$IFn$_invoke$arity$1(params);var url = new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(params);if(cljs.core.truth_(source_map_url))
{return lt.plugins.chrometools.load_source_map.call(null,this$,params,((function (params,source_map_url,url){
return (function (sm){return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scripts","scripts",2940419194)], null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.files.basename.call(null,url),url], null),cljs.core.assoc.call(null,params,new cljs.core.Keyword(null,"sourceMap","sourceMap",3610443443),sm));
});})(params,source_map_url,url))
);
} else
{return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scripts","scripts",2940419194)], null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.files.basename.call(null,url),url], null),new cljs.core.Keyword(null,"params","params",4313443576).cljs$core$IFn$_invoke$arity$1(s));
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
lt.plugins.chrometools.dismiss_button = (function dismiss_button(obj){var e__7761__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tab-close","span.tab-close",4094760846),"x"], null));var seq__7992_8159 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7761__auto__){
return (function (){return lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"remove-label","remove-label",3359640541));
});})(e__7761__auto__))
], null)));var chunk__7993_8160 = null;var count__7994_8161 = 0;var i__7995_8162 = 0;while(true){
if((i__7995_8162 < count__7994_8161))
{var vec__7996_8163 = cljs.core._nth.call(null,chunk__7993_8160,i__7995_8162);var ev__7762__auto___8164 = cljs.core.nth.call(null,vec__7996_8163,0,null);var func__7763__auto___8165 = cljs.core.nth.call(null,vec__7996_8163,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___8164,func__7763__auto___8165);
{
var G__8166 = seq__7992_8159;
var G__8167 = chunk__7993_8160;
var G__8168 = count__7994_8161;
var G__8169 = (i__7995_8162 + 1);
seq__7992_8159 = G__8166;
chunk__7993_8160 = G__8167;
count__7994_8161 = G__8168;
i__7995_8162 = G__8169;
continue;
}
} else
{var temp__4092__auto___8170 = cljs.core.seq.call(null,seq__7992_8159);if(temp__4092__auto___8170)
{var seq__7992_8171__$1 = temp__4092__auto___8170;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7992_8171__$1))
{var c__7112__auto___8172 = cljs.core.chunk_first.call(null,seq__7992_8171__$1);{
var G__8173 = cljs.core.chunk_rest.call(null,seq__7992_8171__$1);
var G__8174 = c__7112__auto___8172;
var G__8175 = cljs.core.count.call(null,c__7112__auto___8172);
var G__8176 = 0;
seq__7992_8159 = G__8173;
chunk__7993_8160 = G__8174;
count__7994_8161 = G__8175;
i__7995_8162 = G__8176;
continue;
}
} else
{var vec__7997_8177 = cljs.core.first.call(null,seq__7992_8171__$1);var ev__7762__auto___8178 = cljs.core.nth.call(null,vec__7997_8177,0,null);var func__7763__auto___8179 = cljs.core.nth.call(null,vec__7997_8177,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___8178,func__7763__auto___8179);
{
var G__8180 = cljs.core.next.call(null,seq__7992_8171__$1);
var G__8181 = null;
var G__8182 = 0;
var G__8183 = 0;
seq__7992_8159 = G__8180;
chunk__7993_8160 = G__8181;
count__7994_8161 = G__8182;
i__7995_8162 = G__8183;
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
lt.plugins.chrometools.reconnect_button = (function reconnect_button(label,tab){var e__7761__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"reconnect-chrome button"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),[cljs.core.str("Reconnect: "),cljs.core.str(new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(tab))].join('')], null),lt.plugins.chrometools.dismiss_button.call(null,label)], null));var seq__8004_8184 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7761__auto__){
return (function (e){var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"chrome.client.remote","chrome.client.remote",4091478727));return lt.plugins.chrometools.connect_tab.call(null,client,tab);
});})(e__7761__auto__))
], null)));var chunk__8005_8185 = null;var count__8006_8186 = 0;var i__8007_8187 = 0;while(true){
if((i__8007_8187 < count__8006_8186))
{var vec__8008_8188 = cljs.core._nth.call(null,chunk__8005_8185,i__8007_8187);var ev__7762__auto___8189 = cljs.core.nth.call(null,vec__8008_8188,0,null);var func__7763__auto___8190 = cljs.core.nth.call(null,vec__8008_8188,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___8189,func__7763__auto___8190);
{
var G__8191 = seq__8004_8184;
var G__8192 = chunk__8005_8185;
var G__8193 = count__8006_8186;
var G__8194 = (i__8007_8187 + 1);
seq__8004_8184 = G__8191;
chunk__8005_8185 = G__8192;
count__8006_8186 = G__8193;
i__8007_8187 = G__8194;
continue;
}
} else
{var temp__4092__auto___8195 = cljs.core.seq.call(null,seq__8004_8184);if(temp__4092__auto___8195)
{var seq__8004_8196__$1 = temp__4092__auto___8195;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8004_8196__$1))
{var c__7112__auto___8197 = cljs.core.chunk_first.call(null,seq__8004_8196__$1);{
var G__8198 = cljs.core.chunk_rest.call(null,seq__8004_8196__$1);
var G__8199 = c__7112__auto___8197;
var G__8200 = cljs.core.count.call(null,c__7112__auto___8197);
var G__8201 = 0;
seq__8004_8184 = G__8198;
chunk__8005_8185 = G__8199;
count__8006_8186 = G__8200;
i__8007_8187 = G__8201;
continue;
}
} else
{var vec__8009_8202 = cljs.core.first.call(null,seq__8004_8196__$1);var ev__7762__auto___8203 = cljs.core.nth.call(null,vec__8009_8202,0,null);var func__7763__auto___8204 = cljs.core.nth.call(null,vec__8009_8202,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___8203,func__7763__auto___8204);
{
var G__8205 = cljs.core.next.call(null,seq__8004_8196__$1);
var G__8206 = null;
var G__8207 = 0;
var G__8208 = 0;
seq__8004_8184 = G__8205;
chunk__8005_8185 = G__8206;
count__8006_8186 = G__8207;
i__8007_8187 = G__8208;
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
lt.plugins.chrometools.__BEH__remove_label = (function __BEH__remove_label(this$,that){var id = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var labels = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"reconnect-label","reconnect-label",3615163504));var seq__8016 = cljs.core.seq.call(null,labels);var chunk__8018 = null;var count__8019 = 0;var i__8020 = 0;while(true){
if((i__8020 < count__8019))
{var label = cljs.core._nth.call(null,chunk__8018,i__8020);if(cljs.core.truth_((function (){var and__6352__auto__ = label;if(cljs.core.truth_(and__6352__auto__))
{return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,label))),id);
} else
{return and__6352__auto__;
}
})()))
{lt.object.raise.call(null,label,new cljs.core.Keyword(null,"remove-label","remove-label",3359640541));
{
var G__8209 = seq__8016;
var G__8210 = chunk__8018;
var G__8211 = count__8019;
var G__8212 = (i__8020 + 1);
seq__8016 = G__8209;
chunk__8018 = G__8210;
count__8019 = G__8211;
i__8020 = G__8212;
continue;
}
} else
{{
var G__8213 = seq__8016;
var G__8214 = chunk__8018;
var G__8215 = count__8019;
var G__8216 = (i__8020 + 1);
seq__8016 = G__8213;
chunk__8018 = G__8214;
count__8019 = G__8215;
i__8020 = G__8216;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8016);if(temp__4092__auto__)
{var seq__8016__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8016__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8016__$1);{
var G__8217 = cljs.core.chunk_rest.call(null,seq__8016__$1);
var G__8218 = c__7112__auto__;
var G__8219 = cljs.core.count.call(null,c__7112__auto__);
var G__8220 = 0;
seq__8016 = G__8217;
chunk__8018 = G__8218;
count__8019 = G__8219;
i__8020 = G__8220;
continue;
}
} else
{var label = cljs.core.first.call(null,seq__8016__$1);if(cljs.core.truth_((function (){var and__6352__auto__ = label;if(cljs.core.truth_(and__6352__auto__))
{return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,label))),id);
} else
{return and__6352__auto__;
}
})()))
{lt.object.raise.call(null,label,new cljs.core.Keyword(null,"remove-label","remove-label",3359640541));
{
var G__8221 = cljs.core.next.call(null,seq__8016__$1);
var G__8222 = null;
var G__8223 = 0;
var G__8224 = 0;
seq__8016 = G__8221;
chunk__8018 = G__8222;
count__8019 = G__8223;
i__8020 = G__8224;
continue;
}
} else
{{
var G__8225 = cljs.core.next.call(null,seq__8016__$1);
var G__8226 = null;
var G__8227 = 0;
var G__8228 = 0;
seq__8016 = G__8225;
chunk__8018 = G__8226;
count__8019 = G__8227;
i__8020 = G__8228;
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
lt.plugins.chrometools.tab_preview = (function tab_preview(action,tab){var e__7761__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),new cljs.core.Keyword(null,"faviconUrl","faviconUrl",4346893869).cljs$core$IFn$_invoke$arity$1(tab)], null)], null),new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(tab)], null));var seq__8028_8229 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7761__auto__){
return (function (e){var temp__4092__auto___8233 = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"popup","popup",1120756766));if(cljs.core.truth_(temp__4092__auto___8233))
{var p_8234 = temp__4092__auto___8233;lt.object.raise.call(null,p_8234,new cljs.core.Keyword(null,"close!","close!",3951350939));
} else
{}
return action.call(null,tab);
});})(e__7761__auto__))
], null)));var chunk__8029_8230 = null;var count__8030_8231 = 0;var i__8031_8232 = 0;while(true){
if((i__8031_8232 < count__8030_8231))
{var vec__8032_8235 = cljs.core._nth.call(null,chunk__8029_8230,i__8031_8232);var ev__7762__auto___8236 = cljs.core.nth.call(null,vec__8032_8235,0,null);var func__7763__auto___8237 = cljs.core.nth.call(null,vec__8032_8235,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___8236,func__7763__auto___8237);
{
var G__8238 = seq__8028_8229;
var G__8239 = chunk__8029_8230;
var G__8240 = count__8030_8231;
var G__8241 = (i__8031_8232 + 1);
seq__8028_8229 = G__8238;
chunk__8029_8230 = G__8239;
count__8030_8231 = G__8240;
i__8031_8232 = G__8241;
continue;
}
} else
{var temp__4092__auto___8242 = cljs.core.seq.call(null,seq__8028_8229);if(temp__4092__auto___8242)
{var seq__8028_8243__$1 = temp__4092__auto___8242;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8028_8243__$1))
{var c__7112__auto___8244 = cljs.core.chunk_first.call(null,seq__8028_8243__$1);{
var G__8245 = cljs.core.chunk_rest.call(null,seq__8028_8243__$1);
var G__8246 = c__7112__auto___8244;
var G__8247 = cljs.core.count.call(null,c__7112__auto___8244);
var G__8248 = 0;
seq__8028_8229 = G__8245;
chunk__8029_8230 = G__8246;
count__8030_8231 = G__8247;
i__8031_8232 = G__8248;
continue;
}
} else
{var vec__8033_8249 = cljs.core.first.call(null,seq__8028_8243__$1);var ev__7762__auto___8250 = cljs.core.nth.call(null,vec__8033_8249,0,null);var func__7763__auto___8251 = cljs.core.nth.call(null,vec__8033_8249,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___8250,func__7763__auto___8251);
{
var G__8252 = cljs.core.next.call(null,seq__8028_8243__$1);
var G__8253 = null;
var G__8254 = 0;
var G__8255 = 0;
seq__8028_8229 = G__8252;
chunk__8029_8230 = G__8253;
count__8030_8231 = G__8254;
i__8031_8232 = G__8255;
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
lt.plugins.chrometools.connect_tab = (function connect_tab(client,tab){lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"socket","socket",4411822821),lt.plugins.chrometools.socket.call(null,client,new cljs.core.Keyword(null,"webSocketDebuggerUrl","webSocketDebuggerUrl",667502233).cljs$core$IFn$_invoke$arity$1(tab)),new cljs.core.Keyword(null,"commands","commands",4706336250),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"editor.eval.cljs.exec","editor.eval.cljs.exec",866638030),null,new cljs.core.Keyword(null,"editor.eval.css","editor.eval.css",1083014276),null,new cljs.core.Keyword(null,"editor.eval.js","editor.eval.js",1847417804),null,new cljs.core.Keyword(null,"chrome.remote.debug","chrome.remote.debug",1380405521),null], null), null),new cljs.core.Keyword(null,"tab","tab",1014018823),tab,new cljs.core.Keyword(null,"name","name",1017277949),[cljs.core.str("Chrome: "),cljs.core.str(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(tab))].join(''),new cljs.core.Keyword(null,"type","type",1017479852),"Chrome"], null));
return cljs.core.swap_BANG_.call(null,lt.plugins.chrometools.connected_tabs,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(tab),client);
});
lt.plugins.chrometools.select_tab = (function select_tab(client,tabs){var action = cljs.core.partial.call(null,lt.plugins.chrometools.connect_tab,client);var p = lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Select which tab to attach to",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul#chrome-tabs","ul#chrome-tabs",1003516535),cljs.core.map.call(null,((function (action){
return (function (p1__8034_SHARP_){return lt.plugins.chrometools.tab_preview.call(null,action,p1__8034_SHARP_);
});})(action))
,cljs.core.filter.call(null,((function (action){
return (function (p1__8035_SHARP_){return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p1__8035_SHARP_),"page")) && ((cljs.core.deref.call(null,lt.plugins.chrometools.connected_tabs).call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__8035_SHARP_)) == null));
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
lt.plugins.chrometools.find_script_by_id = (function find_script_by_id(client,id){return cljs.core.first.call(null,(function (){var iter__7081__auto__ = (function iter__8052(s__8053){return (new cljs.core.LazySeq(null,(function (){var s__8053__$1 = s__8053;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8053__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__8063 = cljs.core.first.call(null,xs__4579__auto__);var basename = cljs.core.nth.call(null,vec__8063,0,null);var scripts = cljs.core.nth.call(null,vec__8063,1,null);var iterys__7077__auto__ = ((function (s__8053__$1,vec__8063,basename,scripts,xs__4579__auto__,temp__4092__auto__){
return (function iter__8054(s__8055){return (new cljs.core.LazySeq(null,((function (s__8053__$1,vec__8063,basename,scripts,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__8055__$1 = s__8055;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__8055__$1);if(temp__4092__auto____$1)
{var s__8055__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__8055__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__8055__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__8057 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__8056 = 0;while(true){
if((i__8056 < size__7080__auto__))
{var vec__8066 = cljs.core._nth.call(null,c__7079__auto__,i__8056);var _ = cljs.core.nth.call(null,vec__8066,0,null);var script = cljs.core.nth.call(null,vec__8066,1,null);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(script),id))
{cljs.core.chunk_append.call(null,b__8057,cljs.core.assoc.call(null,script,new cljs.core.Keyword(null,"basename","basename",3588138062),basename));
{
var G__8256 = (i__8056 + 1);
i__8056 = G__8256;
continue;
}
} else
{{
var G__8257 = (i__8056 + 1);
i__8056 = G__8257;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8057),iter__8054.call(null,cljs.core.chunk_rest.call(null,s__8055__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8057),null);
}
} else
{var vec__8067 = cljs.core.first.call(null,s__8055__$2);var _ = cljs.core.nth.call(null,vec__8067,0,null);var script = cljs.core.nth.call(null,vec__8067,1,null);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(script),id))
{return cljs.core.cons.call(null,cljs.core.assoc.call(null,script,new cljs.core.Keyword(null,"basename","basename",3588138062),basename),iter__8054.call(null,cljs.core.rest.call(null,s__8055__$2)));
} else
{{
var G__8258 = cljs.core.rest.call(null,s__8055__$2);
s__8055__$1 = G__8258;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__8053__$1,vec__8063,basename,scripts,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__8053__$1,vec__8063,basename,scripts,xs__4579__auto__,temp__4092__auto__))
;var fs__7078__auto__ = cljs.core.seq.call(null,iterys__7077__auto__.call(null,scripts));if(fs__7078__auto__)
{return cljs.core.concat.call(null,fs__7078__auto__,iter__8052.call(null,cljs.core.rest.call(null,s__8053__$1)));
} else
{{
var G__8259 = cljs.core.rest.call(null,s__8053__$1);
s__8053__$1 = G__8259;
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
lt.plugins.chrometools.remove_script_BANG_ = (function remove_script_BANG_(client,path,id){var vec__8070 = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__8068_SHARP_){return cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__8068_SHARP_)));
}),lt.plugins.chrometools.find_script.call(null,client,path)));var k = cljs.core.nth.call(null,vec__8070,0,null);var v = cljs.core.nth.call(null,vec__8070,1,null);return lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scripts","scripts",2940419194),lt.objs.files.basename.call(null,path)], null),cljs.core.dissoc,k);
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
make_inspector_object.cljs$lang$applyTo = (function (arglist__8754){
var more = cljs.core.seq(arglist__8754);
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
lt.plugins.chrometools.devtools.desc = (function desc(this$,obj){var e__7761__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",1013907482),lt.plugins.chrometools.devtools.__GT_name.call(null,obj)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(obj))?[cljs.core.str(": "),cljs.core.str(new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(obj)))].join(''):null)], null));var seq__8700_8755 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7761__auto__){
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
], null)));var chunk__8701_8756 = null;var count__8702_8757 = 0;var i__8703_8758 = 0;while(true){
if((i__8703_8758 < count__8702_8757))
{var vec__8704_8759 = cljs.core._nth.call(null,chunk__8701_8756,i__8703_8758);var ev__7762__auto___8760 = cljs.core.nth.call(null,vec__8704_8759,0,null);var func__7763__auto___8761 = cljs.core.nth.call(null,vec__8704_8759,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___8760,func__7763__auto___8761);
{
var G__8762 = seq__8700_8755;
var G__8763 = chunk__8701_8756;
var G__8764 = count__8702_8757;
var G__8765 = (i__8703_8758 + 1);
seq__8700_8755 = G__8762;
chunk__8701_8756 = G__8763;
count__8702_8757 = G__8764;
i__8703_8758 = G__8765;
continue;
}
} else
{var temp__4092__auto___8766 = cljs.core.seq.call(null,seq__8700_8755);if(temp__4092__auto___8766)
{var seq__8700_8767__$1 = temp__4092__auto___8766;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8700_8767__$1))
{var c__7112__auto___8768 = cljs.core.chunk_first.call(null,seq__8700_8767__$1);{
var G__8769 = cljs.core.chunk_rest.call(null,seq__8700_8767__$1);
var G__8770 = c__7112__auto___8768;
var G__8771 = cljs.core.count.call(null,c__7112__auto___8768);
var G__8772 = 0;
seq__8700_8755 = G__8769;
chunk__8701_8756 = G__8770;
count__8702_8757 = G__8771;
i__8703_8758 = G__8772;
continue;
}
} else
{var vec__8705_8773 = cljs.core.first.call(null,seq__8700_8767__$1);var ev__7762__auto___8774 = cljs.core.nth.call(null,vec__8705_8773,0,null);var func__7763__auto___8775 = cljs.core.nth.call(null,vec__8705_8773,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___8774,func__7763__auto___8775);
{
var G__8776 = cljs.core.next.call(null,seq__8700_8767__$1);
var G__8777 = null;
var G__8778 = 0;
var G__8779 = 0;
seq__8700_8755 = G__8776;
chunk__8701_8756 = G__8777;
count__8702_8757 = G__8778;
i__8703_8758 = G__8779;
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
lt.plugins.chrometools.devtools.props = (function props(this$,children){var e__7761__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7081__auto__ = (function iter__8716(s__8717){return (new cljs.core.LazySeq(null,(function (){var s__8717__$1 = s__8717;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8717__$1);if(temp__4092__auto__)
{var s__8717__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8717__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__8717__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__8719 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__8718 = 0;while(true){
if((i__8718 < size__7080__auto__))
{var c = cljs.core._nth.call(null,c__7079__auto__,i__8718);cljs.core.chunk_append.call(null,b__8719,(cljs.core.truth_((function (){var and__6352__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c)),"object");if(and__6352__auto__)
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
var G__8780 = (i__8718 + 1);
i__8718 = G__8780;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8719),iter__8716.call(null,cljs.core.chunk_rest.call(null,s__8717__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8719),null);
}
} else
{var c = cljs.core.first.call(null,s__8717__$2);return cljs.core.cons.call(null,(cljs.core.truth_((function (){var and__6352__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c)),"object");if(and__6352__auto__)
{return new cljs.core.Keyword(null,"objectId","objectId",1104399404).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c));
} else
{return and__6352__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),lt.object.__GT_content.call(null,lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.chrometools.devtools","inspector-object","lt.plugins.chrometools.devtools/inspector-object",4510787313),new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),c))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",1013907482),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(c)], null),": ",(function (){var or__6364__auto__ = new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c));if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return [cljs.core.str(lt.plugins.chrometools.devtools.format_value.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c)))].join('');
}
})()], null)),iter__8716.call(null,cljs.core.rest.call(null,s__8717__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7081__auto__.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1017277949),lt.plugins.chrometools.devtools.i_compare,children));
})()], null));var seq__8720_8781 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8721_8782 = null;var count__8722_8783 = 0;var i__8723_8784 = 0;while(true){
if((i__8723_8784 < count__8722_8783))
{var vec__8724_8785 = cljs.core._nth.call(null,chunk__8721_8782,i__8723_8784);var ev__7762__auto___8786 = cljs.core.nth.call(null,vec__8724_8785,0,null);var func__7763__auto___8787 = cljs.core.nth.call(null,vec__8724_8785,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___8786,func__7763__auto___8787);
{
var G__8788 = seq__8720_8781;
var G__8789 = chunk__8721_8782;
var G__8790 = count__8722_8783;
var G__8791 = (i__8723_8784 + 1);
seq__8720_8781 = G__8788;
chunk__8721_8782 = G__8789;
count__8722_8783 = G__8790;
i__8723_8784 = G__8791;
continue;
}
} else
{var temp__4092__auto___8792 = cljs.core.seq.call(null,seq__8720_8781);if(temp__4092__auto___8792)
{var seq__8720_8793__$1 = temp__4092__auto___8792;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8720_8793__$1))
{var c__7112__auto___8794 = cljs.core.chunk_first.call(null,seq__8720_8793__$1);{
var G__8795 = cljs.core.chunk_rest.call(null,seq__8720_8793__$1);
var G__8796 = c__7112__auto___8794;
var G__8797 = cljs.core.count.call(null,c__7112__auto___8794);
var G__8798 = 0;
seq__8720_8781 = G__8795;
chunk__8721_8782 = G__8796;
count__8722_8783 = G__8797;
i__8723_8784 = G__8798;
continue;
}
} else
{var vec__8725_8799 = cljs.core.first.call(null,seq__8720_8793__$1);var ev__7762__auto___8800 = cljs.core.nth.call(null,vec__8725_8799,0,null);var func__7763__auto___8801 = cljs.core.nth.call(null,vec__8725_8799,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___8800,func__7763__auto___8801);
{
var G__8802 = cljs.core.next.call(null,seq__8720_8793__$1);
var G__8803 = null;
var G__8804 = 0;
var G__8805 = 0;
seq__8720_8781 = G__8802;
chunk__8721_8782 = G__8803;
count__8722_8783 = G__8804;
i__8723_8784 = G__8805;
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
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),(function (){var pred__8729 = cljs.core._EQ_;var expr__8730 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(pred__8729.call(null,"object",expr__8730)))
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
lt.plugins.chrometools.devtools.clear_unused_inspectors = (function clear_unused_inspectors(){var seq__8738 = cljs.core.seq.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"inspector.object","inspector.object",1285492104)));var chunk__8740 = null;var count__8741 = 0;var i__8742 = 0;while(true){
if((i__8742 < count__8741))
{var obj = cljs.core._nth.call(null,chunk__8740,i__8742);if((cljs.core.not.call(null,lt.object.__GT_content.call(null,obj))) || (cljs.core.not.call(null,lt.util.dom.parents.call(null,lt.object.__GT_content.call(null,obj),new cljs.core.Keyword(null,"body","body",1016933652)))))
{lt.object.destroy_BANG_.call(null,obj);
{
var G__8806 = seq__8738;
var G__8807 = chunk__8740;
var G__8808 = count__8741;
var G__8809 = (i__8742 + 1);
seq__8738 = G__8806;
chunk__8740 = G__8807;
count__8741 = G__8808;
i__8742 = G__8809;
continue;
}
} else
{{
var G__8810 = seq__8738;
var G__8811 = chunk__8740;
var G__8812 = count__8741;
var G__8813 = (i__8742 + 1);
seq__8738 = G__8810;
chunk__8740 = G__8811;
count__8741 = G__8812;
i__8742 = G__8813;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8738);if(temp__4092__auto__)
{var seq__8738__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8738__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8738__$1);{
var G__8814 = cljs.core.chunk_rest.call(null,seq__8738__$1);
var G__8815 = c__7112__auto__;
var G__8816 = cljs.core.count.call(null,c__7112__auto__);
var G__8817 = 0;
seq__8738 = G__8814;
chunk__8740 = G__8815;
count__8741 = G__8816;
i__8742 = G__8817;
continue;
}
} else
{var obj = cljs.core.first.call(null,seq__8738__$1);if((cljs.core.not.call(null,lt.object.__GT_content.call(null,obj))) || (cljs.core.not.call(null,lt.util.dom.parents.call(null,lt.object.__GT_content.call(null,obj),new cljs.core.Keyword(null,"body","body",1016933652)))))
{lt.object.destroy_BANG_.call(null,obj);
{
var G__8818 = cljs.core.next.call(null,seq__8738__$1);
var G__8819 = null;
var G__8820 = 0;
var G__8821 = 0;
seq__8738 = G__8818;
chunk__8740 = G__8819;
count__8741 = G__8820;
i__8742 = G__8821;
continue;
}
} else
{{
var G__8822 = cljs.core.next.call(null,seq__8738__$1);
var G__8823 = null;
var G__8824 = 0;
var G__8825 = 0;
seq__8738 = G__8822;
chunk__8740 = G__8823;
count__8741 = G__8824;
i__8742 = G__8825;
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
goog.require('lt.objs.editor');
lt.plugins.chrometools.debugger$.source_map = require(lt.objs.plugins.local_module.call(null,"ChromeTools","source-map"));
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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools.debugger","breakpoint","lt.plugins.chrometools.debugger/breakpoint",3252601825),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"debug.breakpoint","debug.breakpoint",1844714974),null], null), null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,ed,client,line){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"client","client",3951159101),client,new cljs.core.Keyword(null,"editor","editor",4001043679),ed,new cljs.core.Keyword(null,"line","line",1017226086),line], null));
return lt.plugins.chrometools.debugger$.set_marker.call(null,ed,line);
}));
lt.plugins.chrometools.debugger$.__BEH__breakpoint_destroyed = (function __BEH__breakpoint_destroyed(this$){var ed = new cljs.core.Keyword(null,"editor","editor",4001043679).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var cm = lt.objs.editor.__GT_cm_ed.call(null,ed);cm.removeLineClass((line - 1),"background","breakpoint-paused-bg");
cm.removeLineClass((line - 1),"wrapper","breakpoint-paused");
return lt.plugins.chrometools.debugger$.remove_marker.call(null,ed,line);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools.debugger","breakpoint-destroyed","lt.plugins.chrometools.debugger/breakpoint-destroyed",1764082477),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.debugger$.__BEH__breakpoint_destroyed,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"destroy","destroy",2571277164),null], null), null));
lt.plugins.chrometools.debugger$.__BEH__remove_breakpoints_on_disconnect = (function __BEH__remove_breakpoints_on_disconnect(this$){var seq__8876 = cljs.core.seq.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"debug.breakpoint","debug.breakpoint",1844714974)));var chunk__8877 = null;var count__8878 = 0;var i__8879 = 0;while(true){
if((i__8879 < count__8878))
{var obj = cljs.core._nth.call(null,chunk__8877,i__8879);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)),this$))
{lt.object.destroy_BANG_.call(null,obj);
} else
{}
{
var G__9043 = seq__8876;
var G__9044 = chunk__8877;
var G__9045 = count__8878;
var G__9046 = (i__8879 + 1);
seq__8876 = G__9043;
chunk__8877 = G__9044;
count__8878 = G__9045;
i__8879 = G__9046;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8876);if(temp__4092__auto__)
{var seq__8876__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8876__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8876__$1);{
var G__9047 = cljs.core.chunk_rest.call(null,seq__8876__$1);
var G__9048 = c__7112__auto__;
var G__9049 = cljs.core.count.call(null,c__7112__auto__);
var G__9050 = 0;
seq__8876 = G__9047;
chunk__8877 = G__9048;
count__8878 = G__9049;
i__8879 = G__9050;
continue;
}
} else
{var obj = cljs.core.first.call(null,seq__8876__$1);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)),this$))
{lt.object.destroy_BANG_.call(null,obj);
} else
{}
{
var G__9051 = cljs.core.next.call(null,seq__8876__$1);
var G__9052 = null;
var G__9053 = 0;
var G__9054 = 0;
seq__8876 = G__9051;
chunk__8877 = G__9052;
count__8878 = G__9053;
i__8879 = G__9054;
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
return (function iter__8884(s__8885){return (new cljs.core.LazySeq(null,((function (parts){
return (function (){var s__8885__$1 = s__8885;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8885__$1);if(temp__4092__auto__)
{var s__8885__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8885__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__8885__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__8887 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__8886 = 0;while(true){
if((i__8886 < size__7080__auto__))
{var source = cljs.core._nth.call(null,c__7079__auto__,i__8886);var source_parts = cljs.core.filter.call(null,cljs.core.not_empty,clojure.string.split.call(null,source,"/"));var l = cljs.core.count.call(null,source_parts);var p = cljs.core.take_last.call(null,l,parts);if(cljs.core._EQ_.call(null,p,source_parts))
{cljs.core.chunk_append.call(null,b__8887,source);
{
var G__9055 = (i__8886 + 1);
i__8886 = G__9055;
continue;
}
} else
{{
var G__9056 = (i__8886 + 1);
i__8886 = G__9056;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8887),iter__8884.call(null,cljs.core.chunk_rest.call(null,s__8885__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8887),null);
}
} else
{var source = cljs.core.first.call(null,s__8885__$2);var source_parts = cljs.core.filter.call(null,cljs.core.not_empty,clojure.string.split.call(null,source,"/"));var l = cljs.core.count.call(null,source_parts);var p = cljs.core.take_last.call(null,l,parts);if(cljs.core._EQ_.call(null,p,source_parts))
{return cljs.core.cons.call(null,source,iter__8884.call(null,cljs.core.rest.call(null,s__8885__$2)));
} else
{{
var G__9057 = cljs.core.rest.call(null,s__8885__$2);
s__8885__$1 = G__9057;
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
{var s = temp__4090__auto__;var id = new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.vals.call(null,s)));var sm = new cljs.core.Keyword(null,"sourceMap","sourceMap",3610443443).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.vals.call(null,s)));var location = (cljs.core.truth_(sm)?(function (){var gen_pos = lt.plugins.chrometools.debugger$.generated_position.call(null,path,pos,sm);var line = (new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(gen_pos) - 1);var column = new cljs.core.Keyword(null,"column","column",3954034376).cljs$core$IFn$_invoke$arity$1(gen_pos);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lineNumber","lineNumber",684762063),(line - 1),new cljs.core.Keyword(null,"columnNumber","columnNumber",4716049841),column,new cljs.core.Keyword(null,"scriptId","scriptId",606324408),id], null);
})():new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lineNumber","lineNumber",684762063),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos) - 1),new cljs.core.Keyword(null,"scriptId","scriptId",606324408),id], null));return lt.plugins.chrometools.script_exists_QMARK_.call(null,client,id,((function (id,sm,location,s,temp__4090__auto__){
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
{return null;
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
lt.plugins.chrometools.debugger$.get_scripts = (function get_scripts(client,id){var iter__7081__auto__ = (function iter__8904(s__8905){return (new cljs.core.LazySeq(null,(function (){var s__8905__$1 = s__8905;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8905__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__8915 = cljs.core.first.call(null,xs__4579__auto__);var _ = cljs.core.nth.call(null,vec__8915,0,null);var vs = cljs.core.nth.call(null,vec__8915,1,null);var iterys__7077__auto__ = ((function (s__8905__$1,vec__8915,_,vs,xs__4579__auto__,temp__4092__auto__){
return (function iter__8906(s__8907){return (new cljs.core.LazySeq(null,((function (s__8905__$1,vec__8915,_,vs,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__8907__$1 = s__8907;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__8907__$1);if(temp__4092__auto____$1)
{var s__8907__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__8907__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__8907__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__8909 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__8908 = 0;while(true){
if((i__8908 < size__7080__auto__))
{var vec__8918 = cljs.core._nth.call(null,c__7079__auto__,i__8908);var ___$1 = cljs.core.nth.call(null,vec__8918,0,null);var vvs = cljs.core.nth.call(null,vec__8918,1,null);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(vvs),id))
{cljs.core.chunk_append.call(null,b__8909,vvs);
{
var G__9058 = (i__8908 + 1);
i__8908 = G__9058;
continue;
}
} else
{{
var G__9059 = (i__8908 + 1);
i__8908 = G__9059;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8909),iter__8906.call(null,cljs.core.chunk_rest.call(null,s__8907__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8909),null);
}
} else
{var vec__8919 = cljs.core.first.call(null,s__8907__$2);var ___$1 = cljs.core.nth.call(null,vec__8919,0,null);var vvs = cljs.core.nth.call(null,vec__8919,1,null);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(vvs),id))
{return cljs.core.cons.call(null,vvs,iter__8906.call(null,cljs.core.rest.call(null,s__8907__$2)));
} else
{{
var G__9060 = cljs.core.rest.call(null,s__8907__$2);
s__8907__$1 = G__9060;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__8905__$1,vec__8915,_,vs,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__8905__$1,vec__8915,_,vs,xs__4579__auto__,temp__4092__auto__))
;var fs__7078__auto__ = cljs.core.seq.call(null,iterys__7077__auto__.call(null,vs));if(fs__7078__auto__)
{return cljs.core.concat.call(null,fs__7078__auto__,iter__8904.call(null,cljs.core.rest.call(null,s__8905__$1)));
} else
{{
var G__9061 = cljs.core.rest.call(null,s__8905__$1);
s__8905__$1 = G__9061;
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
var bound_client__delegate = function (obj,path,f,p__8920){var vec__8923 = p__8920;var map__8924 = cljs.core.nth.call(null,vec__8923,0,null);var map__8924__$1 = ((cljs.core.seq_QMARK_.call(null,map__8924))?cljs.core.apply.call(null,cljs.core.hash_map,map__8924):map__8924);var always_call = cljs.core.get.call(null,map__8924__$1,new cljs.core.Keyword(null,"always-call","always-call",3320573646));var initial = cljs.core.get.call(null,map__8924__$1,new cljs.core.Keyword(null,"initial","initial",2962246326));return crate.binding.bound.call(null,obj,((function (vec__8923,map__8924,map__8924__$1,always_call,initial){
return (function (){var temp__4090__auto__ = new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj));if(cljs.core.truth_(temp__4090__auto__))
{var client = temp__4090__auto__;return f.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,client),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debugger","debugger",1561716627)], null),path)),client);
} else
{if(cljs.core.truth_(always_call))
{return f.call(null,null,null);
} else
{return initial;
}
}
});})(vec__8923,map__8924,map__8924__$1,always_call,initial))
);
};
var bound_client = function (obj,path,f,var_args){
var p__8920 = null;if (arguments.length > 3) {
  p__8920 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return bound_client__delegate.call(this,obj,path,f,p__8920);};
bound_client.cljs$lang$maxFixedArity = 3;
bound_client.cljs$lang$applyTo = (function (arglist__9062){
var obj = cljs.core.first(arglist__9062);
arglist__9062 = cljs.core.next(arglist__9062);
var path = cljs.core.first(arglist__9062);
arglist__9062 = cljs.core.next(arglist__9062);
var f = cljs.core.first(arglist__9062);
var p__8920 = cljs.core.rest(arglist__9062);
return bound_client__delegate(obj,path,f,p__8920);
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
{var iter__7081__auto__ = (function iter__8929(s__8930){return (new cljs.core.LazySeq(null,(function (){var s__8930__$1 = s__8930;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8930__$1);if(temp__4092__auto__)
{var s__8930__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8930__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__8930__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__8932 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__8931 = 0;while(true){
if((i__8931 < size__7080__auto__))
{var var$ = cljs.core._nth.call(null,c__7079__auto__,i__8931);cljs.core.chunk_append.call(null,b__8932,(function (){var desc = lt.plugins.chrometools.debugger$.__GT_var_description.call(null,var$);var className = new cljs.core.Keyword(null,"className","className",1004015509).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"object","object",4285503153).cljs$core$IFn$_invoke$arity$1(var$));var var$__$1 = cljs.core.assoc_in.call(null,var$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",4285503153),new cljs.core.Keyword(null,"name","name",1017277949)], null),desc);var var$__$2 = ((cljs.core.not_EQ_.call(null,className,"Object"))?cljs.core.assoc_in.call(null,var$__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",4285503153),new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"description","description",3584325486)], null),className):var$__$1);return new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(lt.plugins.chrometools.devtools.inspector__GT_result.call(null,client,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),new cljs.core.Keyword(null,"object","object",4285503153).cljs$core$IFn$_invoke$arity$1(var$__$2)], null)], null)));
})());
{
var G__9063 = (i__8931 + 1);
i__8931 = G__9063;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8932),iter__8929.call(null,cljs.core.chunk_rest.call(null,s__8930__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8932),null);
}
} else
{var var$ = cljs.core.first.call(null,s__8930__$2);return cljs.core.cons.call(null,(function (){var desc = lt.plugins.chrometools.debugger$.__GT_var_description.call(null,var$);var className = new cljs.core.Keyword(null,"className","className",1004015509).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"object","object",4285503153).cljs$core$IFn$_invoke$arity$1(var$));var var$__$1 = cljs.core.assoc_in.call(null,var$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",4285503153),new cljs.core.Keyword(null,"name","name",1017277949)], null),desc);var var$__$2 = ((cljs.core.not_EQ_.call(null,className,"Object"))?cljs.core.assoc_in.call(null,var$__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",4285503153),new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"description","description",3584325486)], null),className):var$__$1);return new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(lt.plugins.chrometools.devtools.inspector__GT_result.call(null,client,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),new cljs.core.Keyword(null,"object","object",4285503153).cljs$core$IFn$_invoke$arity$1(var$__$2)], null)], null)));
})(),iter__8929.call(null,cljs.core.rest.call(null,s__8930__$2)));
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
})());var seq__8939_9064 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7761__auto__){
return (function (){return lt.plugins.chrometools.debugger$.jump_to_location.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,panel)),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(frame));
});})(e__7761__auto__))
], null)));var chunk__8940_9065 = null;var count__8941_9066 = 0;var i__8942_9067 = 0;while(true){
if((i__8942_9067 < count__8941_9066))
{var vec__8943_9068 = cljs.core._nth.call(null,chunk__8940_9065,i__8942_9067);var ev__7762__auto___9069 = cljs.core.nth.call(null,vec__8943_9068,0,null);var func__7763__auto___9070 = cljs.core.nth.call(null,vec__8943_9068,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___9069,func__7763__auto___9070);
{
var G__9071 = seq__8939_9064;
var G__9072 = chunk__8940_9065;
var G__9073 = count__8941_9066;
var G__9074 = (i__8942_9067 + 1);
seq__8939_9064 = G__9071;
chunk__8940_9065 = G__9072;
count__8941_9066 = G__9073;
i__8942_9067 = G__9074;
continue;
}
} else
{var temp__4092__auto___9075 = cljs.core.seq.call(null,seq__8939_9064);if(temp__4092__auto___9075)
{var seq__8939_9076__$1 = temp__4092__auto___9075;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8939_9076__$1))
{var c__7112__auto___9077 = cljs.core.chunk_first.call(null,seq__8939_9076__$1);{
var G__9078 = cljs.core.chunk_rest.call(null,seq__8939_9076__$1);
var G__9079 = c__7112__auto___9077;
var G__9080 = cljs.core.count.call(null,c__7112__auto___9077);
var G__9081 = 0;
seq__8939_9064 = G__9078;
chunk__8940_9065 = G__9079;
count__8941_9066 = G__9080;
i__8942_9067 = G__9081;
continue;
}
} else
{var vec__8944_9082 = cljs.core.first.call(null,seq__8939_9076__$1);var ev__7762__auto___9083 = cljs.core.nth.call(null,vec__8944_9082,0,null);var func__7763__auto___9084 = cljs.core.nth.call(null,vec__8944_9082,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___9083,func__7763__auto___9084);
{
var G__9085 = cljs.core.next.call(null,seq__8939_9076__$1);
var G__9086 = null;
var G__9087 = 0;
var G__9088 = 0;
seq__8939_9064 = G__9085;
chunk__8940_9065 = G__9086;
count__8941_9066 = G__9087;
i__8942_9067 = G__9088;
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
lt.plugins.chrometools.debugger$.call_frame = (function call_frame(panel,frame){var e__7761__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),lt.plugins.chrometools.debugger$.bound_client.call(null,panel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-frame","selected-frame",1773798189)], null),(function (p1__8945_SHARP_){if(cljs.core._EQ_.call(null,p1__8945_SHARP_,frame))
{return "selected";
} else
{return "";
}
}))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"frame-name"], null),lt.plugins.chrometools.debugger$.__GT_call_frame_name.call(null,frame)], null),lt.plugins.chrometools.debugger$.call_frame_location.call(null,panel,frame)], null));var seq__8952_9089 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7761__auto__){
return (function (){var client = new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,panel));return lt.plugins.chrometools.debugger$.select_call_frame.call(null,client,frame);
});})(e__7761__auto__))
], null)));var chunk__8953_9090 = null;var count__8954_9091 = 0;var i__8955_9092 = 0;while(true){
if((i__8955_9092 < count__8954_9091))
{var vec__8956_9093 = cljs.core._nth.call(null,chunk__8953_9090,i__8955_9092);var ev__7762__auto___9094 = cljs.core.nth.call(null,vec__8956_9093,0,null);var func__7763__auto___9095 = cljs.core.nth.call(null,vec__8956_9093,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___9094,func__7763__auto___9095);
{
var G__9096 = seq__8952_9089;
var G__9097 = chunk__8953_9090;
var G__9098 = count__8954_9091;
var G__9099 = (i__8955_9092 + 1);
seq__8952_9089 = G__9096;
chunk__8953_9090 = G__9097;
count__8954_9091 = G__9098;
i__8955_9092 = G__9099;
continue;
}
} else
{var temp__4092__auto___9100 = cljs.core.seq.call(null,seq__8952_9089);if(temp__4092__auto___9100)
{var seq__8952_9101__$1 = temp__4092__auto___9100;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8952_9101__$1))
{var c__7112__auto___9102 = cljs.core.chunk_first.call(null,seq__8952_9101__$1);{
var G__9103 = cljs.core.chunk_rest.call(null,seq__8952_9101__$1);
var G__9104 = c__7112__auto___9102;
var G__9105 = cljs.core.count.call(null,c__7112__auto___9102);
var G__9106 = 0;
seq__8952_9089 = G__9103;
chunk__8953_9090 = G__9104;
count__8954_9091 = G__9105;
i__8955_9092 = G__9106;
continue;
}
} else
{var vec__8957_9107 = cljs.core.first.call(null,seq__8952_9101__$1);var ev__7762__auto___9108 = cljs.core.nth.call(null,vec__8957_9107,0,null);var func__7763__auto___9109 = cljs.core.nth.call(null,vec__8957_9107,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___9108,func__7763__auto___9109);
{
var G__9110 = cljs.core.next.call(null,seq__8952_9101__$1);
var G__9111 = null;
var G__9112 = 0;
var G__9113 = 0;
seq__8952_9089 = G__9110;
chunk__8953_9090 = G__9111;
count__8954_9091 = G__9112;
i__8955_9092 = G__9113;
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
lt.plugins.chrometools.debugger$.debug_panel_resume = (function debug_panel_resume(this$){var e__7761__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"resume"], null),lt.plugins.chrometools.debugger$.bound_client.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused?","paused?",4518674499)], null),(function (p1__8958_SHARP_){if(cljs.core.truth_(p1__8958_SHARP_))
{return "\u25B6";
} else
{return "=";
}
}))], null));var seq__8965_9114 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7761__auto__){
return (function (){var client = new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var c = (cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",4518674499).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"debugger","debugger",1561716627).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))))?new cljs.core.Keyword(null,"resume-debugger","resume-debugger",4240016691):new cljs.core.Keyword(null,"pause-debugger","pause-debugger",1706137994));return lt.objs.sidebar.command.exec_BANG_.call(null,c,client);
});})(e__7761__auto__))
], null)));var chunk__8966_9115 = null;var count__8967_9116 = 0;var i__8968_9117 = 0;while(true){
if((i__8968_9117 < count__8967_9116))
{var vec__8969_9118 = cljs.core._nth.call(null,chunk__8966_9115,i__8968_9117);var ev__7762__auto___9119 = cljs.core.nth.call(null,vec__8969_9118,0,null);var func__7763__auto___9120 = cljs.core.nth.call(null,vec__8969_9118,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___9119,func__7763__auto___9120);
{
var G__9121 = seq__8965_9114;
var G__9122 = chunk__8966_9115;
var G__9123 = count__8967_9116;
var G__9124 = (i__8968_9117 + 1);
seq__8965_9114 = G__9121;
chunk__8966_9115 = G__9122;
count__8967_9116 = G__9123;
i__8968_9117 = G__9124;
continue;
}
} else
{var temp__4092__auto___9125 = cljs.core.seq.call(null,seq__8965_9114);if(temp__4092__auto___9125)
{var seq__8965_9126__$1 = temp__4092__auto___9125;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8965_9126__$1))
{var c__7112__auto___9127 = cljs.core.chunk_first.call(null,seq__8965_9126__$1);{
var G__9128 = cljs.core.chunk_rest.call(null,seq__8965_9126__$1);
var G__9129 = c__7112__auto___9127;
var G__9130 = cljs.core.count.call(null,c__7112__auto___9127);
var G__9131 = 0;
seq__8965_9114 = G__9128;
chunk__8966_9115 = G__9129;
count__8967_9116 = G__9130;
i__8968_9117 = G__9131;
continue;
}
} else
{var vec__8970_9132 = cljs.core.first.call(null,seq__8965_9126__$1);var ev__7762__auto___9133 = cljs.core.nth.call(null,vec__8970_9132,0,null);var func__7763__auto___9134 = cljs.core.nth.call(null,vec__8970_9132,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___9133,func__7763__auto___9134);
{
var G__9135 = cljs.core.next.call(null,seq__8965_9126__$1);
var G__9136 = null;
var G__9137 = 0;
var G__9138 = 0;
seq__8965_9114 = G__9135;
chunk__8966_9115 = G__9136;
count__8967_9116 = G__9137;
i__8968_9117 = G__9138;
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
lt.plugins.chrometools.debugger$.reconnect_button = (function reconnect_button(this$){var e__7761__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"reconnect-button"], null),"Reconnect"], null));var seq__8977_9139 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7761__auto__){
return (function (){var tab = new cljs.core.Keyword(null,"reconnect-tab","reconnect-tab",3800973201).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"chrome.client.remote","chrome.client.remote",4091478727));cljs.core.swap_BANG_.call(null,this$,cljs.core.dissoc,new cljs.core.Keyword(null,"show-reconnect","show-reconnect",1351513081));
return lt.plugins.chrometools.connect_tab.call(null,client,tab);
});})(e__7761__auto__))
], null)));var chunk__8978_9140 = null;var count__8979_9141 = 0;var i__8980_9142 = 0;while(true){
if((i__8980_9142 < count__8979_9141))
{var vec__8981_9143 = cljs.core._nth.call(null,chunk__8978_9140,i__8980_9142);var ev__7762__auto___9144 = cljs.core.nth.call(null,vec__8981_9143,0,null);var func__7763__auto___9145 = cljs.core.nth.call(null,vec__8981_9143,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___9144,func__7763__auto___9145);
{
var G__9146 = seq__8977_9139;
var G__9147 = chunk__8978_9140;
var G__9148 = count__8979_9141;
var G__9149 = (i__8980_9142 + 1);
seq__8977_9139 = G__9146;
chunk__8978_9140 = G__9147;
count__8979_9141 = G__9148;
i__8980_9142 = G__9149;
continue;
}
} else
{var temp__4092__auto___9150 = cljs.core.seq.call(null,seq__8977_9139);if(temp__4092__auto___9150)
{var seq__8977_9151__$1 = temp__4092__auto___9150;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8977_9151__$1))
{var c__7112__auto___9152 = cljs.core.chunk_first.call(null,seq__8977_9151__$1);{
var G__9153 = cljs.core.chunk_rest.call(null,seq__8977_9151__$1);
var G__9154 = c__7112__auto___9152;
var G__9155 = cljs.core.count.call(null,c__7112__auto___9152);
var G__9156 = 0;
seq__8977_9139 = G__9153;
chunk__8978_9140 = G__9154;
count__8979_9141 = G__9155;
i__8980_9142 = G__9156;
continue;
}
} else
{var vec__8982_9157 = cljs.core.first.call(null,seq__8977_9151__$1);var ev__7762__auto___9158 = cljs.core.nth.call(null,vec__8982_9157,0,null);var func__7763__auto___9159 = cljs.core.nth.call(null,vec__8982_9157,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___9158,func__7763__auto___9159);
{
var G__9160 = cljs.core.next.call(null,seq__8977_9151__$1);
var G__9161 = null;
var G__9162 = 0;
var G__9163 = 0;
seq__8977_9139 = G__9160;
chunk__8978_9140 = G__9161;
count__8979_9141 = G__9162;
i__8980_9142 = G__9163;
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
lt.plugins.chrometools.debugger$.debug_panel_stepover = (function debug_panel_stepover(this$){var e__7761__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"stepover"], null),"\u21B4"], null));var seq__8989_9164 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7761__auto__){
return (function (){var client = new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"step-over","step-over",2312612519),client);
});})(e__7761__auto__))
], null)));var chunk__8990_9165 = null;var count__8991_9166 = 0;var i__8992_9167 = 0;while(true){
if((i__8992_9167 < count__8991_9166))
{var vec__8993_9168 = cljs.core._nth.call(null,chunk__8990_9165,i__8992_9167);var ev__7762__auto___9169 = cljs.core.nth.call(null,vec__8993_9168,0,null);var func__7763__auto___9170 = cljs.core.nth.call(null,vec__8993_9168,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___9169,func__7763__auto___9170);
{
var G__9171 = seq__8989_9164;
var G__9172 = chunk__8990_9165;
var G__9173 = count__8991_9166;
var G__9174 = (i__8992_9167 + 1);
seq__8989_9164 = G__9171;
chunk__8990_9165 = G__9172;
count__8991_9166 = G__9173;
i__8992_9167 = G__9174;
continue;
}
} else
{var temp__4092__auto___9175 = cljs.core.seq.call(null,seq__8989_9164);if(temp__4092__auto___9175)
{var seq__8989_9176__$1 = temp__4092__auto___9175;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8989_9176__$1))
{var c__7112__auto___9177 = cljs.core.chunk_first.call(null,seq__8989_9176__$1);{
var G__9178 = cljs.core.chunk_rest.call(null,seq__8989_9176__$1);
var G__9179 = c__7112__auto___9177;
var G__9180 = cljs.core.count.call(null,c__7112__auto___9177);
var G__9181 = 0;
seq__8989_9164 = G__9178;
chunk__8990_9165 = G__9179;
count__8991_9166 = G__9180;
i__8992_9167 = G__9181;
continue;
}
} else
{var vec__8994_9182 = cljs.core.first.call(null,seq__8989_9176__$1);var ev__7762__auto___9183 = cljs.core.nth.call(null,vec__8994_9182,0,null);var func__7763__auto___9184 = cljs.core.nth.call(null,vec__8994_9182,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___9183,func__7763__auto___9184);
{
var G__9185 = cljs.core.next.call(null,seq__8989_9176__$1);
var G__9186 = null;
var G__9187 = 0;
var G__9188 = 0;
seq__8989_9164 = G__9185;
chunk__8990_9165 = G__9186;
count__8991_9166 = G__9187;
i__8992_9167 = G__9188;
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
lt.plugins.chrometools.debugger$.debug_panel_stepin = (function debug_panel_stepin(this$){var e__7761__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"stepinto"], null),"\u2193"], null));var seq__9001_9189 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7761__auto__){
return (function (){var client = new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"step-into","step-into",2312426547),client);
});})(e__7761__auto__))
], null)));var chunk__9002_9190 = null;var count__9003_9191 = 0;var i__9004_9192 = 0;while(true){
if((i__9004_9192 < count__9003_9191))
{var vec__9005_9193 = cljs.core._nth.call(null,chunk__9002_9190,i__9004_9192);var ev__7762__auto___9194 = cljs.core.nth.call(null,vec__9005_9193,0,null);var func__7763__auto___9195 = cljs.core.nth.call(null,vec__9005_9193,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___9194,func__7763__auto___9195);
{
var G__9196 = seq__9001_9189;
var G__9197 = chunk__9002_9190;
var G__9198 = count__9003_9191;
var G__9199 = (i__9004_9192 + 1);
seq__9001_9189 = G__9196;
chunk__9002_9190 = G__9197;
count__9003_9191 = G__9198;
i__9004_9192 = G__9199;
continue;
}
} else
{var temp__4092__auto___9200 = cljs.core.seq.call(null,seq__9001_9189);if(temp__4092__auto___9200)
{var seq__9001_9201__$1 = temp__4092__auto___9200;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9001_9201__$1))
{var c__7112__auto___9202 = cljs.core.chunk_first.call(null,seq__9001_9201__$1);{
var G__9203 = cljs.core.chunk_rest.call(null,seq__9001_9201__$1);
var G__9204 = c__7112__auto___9202;
var G__9205 = cljs.core.count.call(null,c__7112__auto___9202);
var G__9206 = 0;
seq__9001_9189 = G__9203;
chunk__9002_9190 = G__9204;
count__9003_9191 = G__9205;
i__9004_9192 = G__9206;
continue;
}
} else
{var vec__9006_9207 = cljs.core.first.call(null,seq__9001_9201__$1);var ev__7762__auto___9208 = cljs.core.nth.call(null,vec__9006_9207,0,null);var func__7763__auto___9209 = cljs.core.nth.call(null,vec__9006_9207,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___9208,func__7763__auto___9209);
{
var G__9210 = cljs.core.next.call(null,seq__9001_9201__$1);
var G__9211 = null;
var G__9212 = 0;
var G__9213 = 0;
seq__9001_9189 = G__9210;
chunk__9002_9190 = G__9211;
count__9003_9191 = G__9212;
i__9004_9192 = G__9213;
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
lt.plugins.chrometools.debugger$.debug_panel_stepout = (function debug_panel_stepout(this$){var e__7761__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"stepout"], null),"\u2191"], null));var seq__9013_9214 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7761__auto__){
return (function (){var client = new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"step-out","step-out",2441271359),client);
});})(e__7761__auto__))
], null)));var chunk__9014_9215 = null;var count__9015_9216 = 0;var i__9016_9217 = 0;while(true){
if((i__9016_9217 < count__9015_9216))
{var vec__9017_9218 = cljs.core._nth.call(null,chunk__9014_9215,i__9016_9217);var ev__7762__auto___9219 = cljs.core.nth.call(null,vec__9017_9218,0,null);var func__7763__auto___9220 = cljs.core.nth.call(null,vec__9017_9218,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___9219,func__7763__auto___9220);
{
var G__9221 = seq__9013_9214;
var G__9222 = chunk__9014_9215;
var G__9223 = count__9015_9216;
var G__9224 = (i__9016_9217 + 1);
seq__9013_9214 = G__9221;
chunk__9014_9215 = G__9222;
count__9015_9216 = G__9223;
i__9016_9217 = G__9224;
continue;
}
} else
{var temp__4092__auto___9225 = cljs.core.seq.call(null,seq__9013_9214);if(temp__4092__auto___9225)
{var seq__9013_9226__$1 = temp__4092__auto___9225;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9013_9226__$1))
{var c__7112__auto___9227 = cljs.core.chunk_first.call(null,seq__9013_9226__$1);{
var G__9228 = cljs.core.chunk_rest.call(null,seq__9013_9226__$1);
var G__9229 = c__7112__auto___9227;
var G__9230 = cljs.core.count.call(null,c__7112__auto___9227);
var G__9231 = 0;
seq__9013_9214 = G__9228;
chunk__9014_9215 = G__9229;
count__9015_9216 = G__9230;
i__9016_9217 = G__9231;
continue;
}
} else
{var vec__9018_9232 = cljs.core.first.call(null,seq__9013_9226__$1);var ev__7762__auto___9233 = cljs.core.nth.call(null,vec__9018_9232,0,null);var func__7763__auto___9234 = cljs.core.nth.call(null,vec__9018_9232,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___9233,func__7763__auto___9234);
{
var G__9235 = cljs.core.next.call(null,seq__9013_9226__$1);
var G__9236 = null;
var G__9237 = 0;
var G__9238 = 0;
seq__9013_9214 = G__9235;
chunk__9014_9215 = G__9236;
count__9015_9216 = G__9237;
i__9016_9217 = G__9238;
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
{var iter__7081__auto__ = (function iter__9023(s__9024){return (new cljs.core.LazySeq(null,(function (){var s__9024__$1 = s__9024;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9024__$1);if(temp__4092__auto__)
{var s__9024__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9024__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__9024__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__9026 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__9025 = 0;while(true){
if((i__9025 < size__7080__auto__))
{var frame = cljs.core._nth.call(null,c__7079__auto__,i__9025);cljs.core.chunk_append.call(null,b__9026,lt.plugins.chrometools.debugger$.call_frame.call(null,panel,frame));
{
var G__9239 = (i__9025 + 1);
i__9025 = G__9239;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9026),iter__9023.call(null,cljs.core.chunk_rest.call(null,s__9024__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9026),null);
}
} else
{var frame = cljs.core.first.call(null,s__9024__$2);return cljs.core.cons.call(null,lt.plugins.chrometools.debugger$.call_frame.call(null,panel,frame),iter__9023.call(null,cljs.core.rest.call(null,s__9024__$2)));
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
lt.plugins.chrometools.debugger$.debug_panel = (function debug_panel(this$){var e__7761__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"debug-panel"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),lt.plugins.chrometools.debugger$.bound_client.call(null,this$,cljs.core.PersistentVector.EMPTY,cljs.core.partial.call(null,lt.plugins.chrometools.debugger$.debug_panel_classes,this$),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"always-call","always-call",3320573646),true], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),cljs.core.PersistentArrayMap.EMPTY,"Debugger"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"controls"], null),lt.plugins.chrometools.debugger$.debug_panel_resume.call(null,this$),lt.plugins.chrometools.debugger$.debug_panel_stepover.call(null,this$),lt.plugins.chrometools.debugger$.debug_panel_stepin.call(null,this$),lt.plugins.chrometools.debugger$.debug_panel_stepout.call(null,this$),lt.plugins.chrometools.debugger$.reconnect_button.call(null,this$)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"call-stack"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Call Stack"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),lt.plugins.chrometools.debugger$.bound_client.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-frames","call-frames",3247219303)], null),lt.plugins.chrometools.debugger$.__GT_call_frames_class)], null),lt.plugins.chrometools.debugger$.bound_client.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-frames","call-frames",3247219303)], null),(function (p1__9027_SHARP_){return lt.plugins.chrometools.debugger$.create_call_frames.call(null,this$,p1__9027_SHARP_);
}))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"variables"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Scope Variables"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"scope-variables"], null),lt.plugins.chrometools.debugger$.bound_client.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scope-variables","scope-variables",1703262384)], null),(function (p1__9028_SHARP_,p2__9029_SHARP_){return lt.plugins.chrometools.debugger$.__GT_scope_variables.call(null,p1__9028_SHARP_,p2__9029_SHARP_);
}))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"debug-editor"], null),lt.object.__GT_content.call(null,lt.plugins.chrometools.debugger$.debug_editor)], null)], null)], null));var seq__9036_9240 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9037_9241 = null;var count__9038_9242 = 0;var i__9039_9243 = 0;while(true){
if((i__9039_9243 < count__9038_9242))
{var vec__9040_9244 = cljs.core._nth.call(null,chunk__9037_9241,i__9039_9243);var ev__7762__auto___9245 = cljs.core.nth.call(null,vec__9040_9244,0,null);var func__7763__auto___9246 = cljs.core.nth.call(null,vec__9040_9244,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___9245,func__7763__auto___9246);
{
var G__9247 = seq__9036_9240;
var G__9248 = chunk__9037_9241;
var G__9249 = count__9038_9242;
var G__9250 = (i__9039_9243 + 1);
seq__9036_9240 = G__9247;
chunk__9037_9241 = G__9248;
count__9038_9242 = G__9249;
i__9039_9243 = G__9250;
continue;
}
} else
{var temp__4092__auto___9251 = cljs.core.seq.call(null,seq__9036_9240);if(temp__4092__auto___9251)
{var seq__9036_9252__$1 = temp__4092__auto___9251;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9036_9252__$1))
{var c__7112__auto___9253 = cljs.core.chunk_first.call(null,seq__9036_9252__$1);{
var G__9254 = cljs.core.chunk_rest.call(null,seq__9036_9252__$1);
var G__9255 = c__7112__auto___9253;
var G__9256 = cljs.core.count.call(null,c__7112__auto___9253);
var G__9257 = 0;
seq__9036_9240 = G__9254;
chunk__9037_9241 = G__9255;
count__9038_9242 = G__9256;
i__9039_9243 = G__9257;
continue;
}
} else
{var vec__9041_9258 = cljs.core.first.call(null,seq__9036_9252__$1);var ev__7762__auto___9259 = cljs.core.nth.call(null,vec__9041_9258,0,null);var func__7763__auto___9260 = cljs.core.nth.call(null,vec__9041_9258,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___9259,func__7763__auto___9260);
{
var G__9261 = cljs.core.next.call(null,seq__9036_9252__$1);
var G__9262 = null;
var G__9263 = 0;
var G__9264 = 0;
seq__9036_9240 = G__9261;
chunk__9037_9241 = G__9262;
count__9038_9242 = G__9263;
i__9039_9243 = G__9264;
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
var scope_chain_9265 = lt.util.cljs.js__GT_clj.call(null,new cljs.core.Keyword(null,"scopeChain","scopeChain",796553279).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,call_frames)));cljs.core.add_watch.call(null,this$,lt.plugins.chrometools.debugger$.watch_key,((function (scope_chain_9265,params,reason,breakpoint,call_frames,location,file_type){
return (function (_,___$1,___$2,___$3){return lt.object.merge_BANG_.call(null,lt.plugins.chrometools.debugger$.debug_sidebar,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refresh","refresh",2099349069),true], null));
});})(scope_chain_9265,params,reason,breakpoint,call_frames,location,file_type))
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
lt.plugins.chrometools.debugger$.__BEH__debugger_resumed = (function __BEH__debugger_resumed(client){var temp__4092__auto___9266 = cljs.core.get_in.call(null,cljs.core.deref.call(null,client),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debugger","debugger",1561716627),new cljs.core.Keyword(null,"paused-at","paused-at",1843746980)], null));if(cljs.core.truth_(temp__4092__auto___9266))
{var paused_at_9267 = temp__4092__auto___9266;lt.objs.editor.__GT_cm_ed.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(paused_at_9267)).removeLineClass(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(paused_at_9267),"wrapper","breakpoint-paused");
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
lt.plugins.chrometools.debugger$.get_editor_by_filename = (function get_editor_by_filename(filename){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__9042_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__9042_SHARP_))),filename);
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
var G__9268 = null;
var G__9268__0 = (function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"pause-debugger","pause-debugger",1706137994),lt.plugins.chrometools.debugger$.get_current_client.call(null));
});
var G__9268__1 = (function (client){return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.pause"], null),lt.plugins.chrometools.debugger$.display_error);
});
G__9268 = function(client){
switch(arguments.length){
case 0:
return G__9268__0.call(this);
case 1:
return G__9268__1.call(this,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9268;
})()
], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"resume-debugger","resume-debugger",4240016691),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Debugger - Resume",new cljs.core.Keyword(null,"exec","exec",1017031683),(function() {
var G__9269 = null;
var G__9269__0 = (function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"resume-debugger","resume-debugger",4240016691),lt.plugins.chrometools.debugger$.get_current_client.call(null));
});
var G__9269__1 = (function (client){return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.resume"], null),(function (result){var temp__4092__auto__ = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(result));if(cljs.core.truth_(temp__4092__auto__))
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
G__9269 = function(client){
switch(arguments.length){
case 0:
return G__9269__0.call(this);
case 1:
return G__9269__1.call(this,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9269;
})()
], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"step-into","step-into",2312426547),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Debugger - Step Into",new cljs.core.Keyword(null,"exec","exec",1017031683),(function() {
var G__9270 = null;
var G__9270__0 = (function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"step-into","step-into",2312426547),lt.plugins.chrometools.debugger$.get_current_client.call(null));
});
var G__9270__1 = (function (client){return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.stepInto"], null),lt.plugins.chrometools.debugger$.display_error);
});
G__9270 = function(client){
switch(arguments.length){
case 0:
return G__9270__0.call(this);
case 1:
return G__9270__1.call(this,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9270;
})()
], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"step-out","step-out",2441271359),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Debugger - Step Out",new cljs.core.Keyword(null,"exec","exec",1017031683),(function() {
var G__9271 = null;
var G__9271__0 = (function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"step-out","step-out",2441271359),lt.plugins.chrometools.debugger$.get_current_client.call(null));
});
var G__9271__1 = (function (client){return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.stepOut"], null),lt.plugins.chrometools.debugger$.display_error);
});
G__9271 = function(client){
switch(arguments.length){
case 0:
return G__9271__0.call(this);
case 1:
return G__9271__1.call(this,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9271;
})()
], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"step-over","step-over",2312612519),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Debugger - Step Over",new cljs.core.Keyword(null,"exec","exec",1017031683),(function() {
var G__9272 = null;
var G__9272__0 = (function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"step-over","step-over",2312612519),lt.plugins.chrometools.debugger$.get_current_client.call(null));
});
var G__9272__1 = (function (client){return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.stepOver"], null),lt.plugins.chrometools.debugger$.display_error);
});
G__9272 = function(client){
switch(arguments.length){
case 0:
return G__9272__0.call(this);
case 1:
return G__9272__1.call(this,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9272;
})()
], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"step-over","step-over",2312612519),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Debugger - Step Over",new cljs.core.Keyword(null,"exec","exec",1017031683),(function() {
var G__9273 = null;
var G__9273__0 = (function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"step-over","step-over",2312612519),lt.plugins.chrometools.debugger$.get_current_client.call(null));
});
var G__9273__1 = (function (client){return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.stepOver"], null),lt.plugins.chrometools.debugger$.display_error);
});
G__9273 = function(client){
switch(arguments.length){
case 0:
return G__9273__0.call(this);
case 1:
return G__9273__1.call(this,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9273;
})()
], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"activate-breakpoints","activate-breakpoints",4436508730),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Debugger - Activate Breakpoints",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function() {
var G__9274 = null;
var G__9274__0 = (function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"activate-breakpoints","activate-breakpoints",4436508730),lt.plugins.chrometools.debugger$.get_current_client.call(null));
});
var G__9274__1 = (function (client){return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.setBreakpointsActive",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),true], null)], null));
});
G__9274 = function(client){
switch(arguments.length){
case 0:
return G__9274__0.call(this);
case 1:
return G__9274__1.call(this,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9274;
})()
], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"deactivate-breakpoints","deactivate-breakpoints",2365948475),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Debugger - De-activate Breakpoints",new cljs.core.Keyword(null,"exec","exec",1017031683),(function() {
var G__9275 = null;
var G__9275__0 = (function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"activate-breakpoints","activate-breakpoints",4436508730),lt.plugins.chrometools.debugger$.get_current_client.call(null));
});
var G__9275__1 = (function (client){return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.setBreakpointsActive",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),false], null)], null));
});
G__9275 = function(client){
switch(arguments.length){
case 0:
return G__9275__0.call(this);
case 1:
return G__9275__1.call(this,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9275;
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
return (function (p1__7845_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__7845_SHARP_),name);
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
lt.plugins.chrometools.console.__BEH__console_log = (function __BEH__console_log(this$,m){var id = lt.object.__GT_id.call(null,this$);var type = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",4313443576).cljs$core$IFn$_invoke$arity$1(m)));var msg = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",4313443576).cljs$core$IFn$_invoke$arity$1(m));var msg__$1 = cljs.core.assoc.call(null,msg,new cljs.core.Keyword(null,"client","client",3951159101),this$);var group = lt.plugins.chrometools.console.get_current_group.call(null,id);var G__7847 = type;if(cljs.core._EQ_.call(null,"log",G__7847))
{if(cljs.core._EQ_.call(null,group,lt.plugins.chrometools.lttools_group_name))
{return lt.plugins.chrometools.console.handle_watch_result.call(null,this$,msg__$1);
} else
{return lt.plugins.chrometools.console.handle_log_msg.call(null,msg__$1);
}
} else
{if(cljs.core._EQ_.call(null,"endGroup",G__7847))
{return cljs.core.swap_BANG_.call(null,lt.plugins.chrometools.console.group_stack,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),cljs.core.pop);
} else
{if(cljs.core._EQ_.call(null,"startGroup",G__7847))
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
return (function iter__7852(s__7853){return (new cljs.core.LazySeq(null,((function (params,client){
return (function (){var s__7853__$1 = s__7853;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7853__$1);if(temp__4092__auto__)
{var s__7853__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7853__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__7853__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__7855 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__7854 = 0;while(true){
if((i__7854 < size__7080__auto__))
{var p = cljs.core._nth.call(null,c__7079__auto__,i__7854);cljs.core.chunk_append.call(null,b__7855,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.log-val","span.log-val",3645418982),(cljs.core.truth_((function (){var and__6352__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p),"object");if(and__6352__auto__)
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
var G__7884 = (i__7854 + 1);
i__7854 = G__7884;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7855),iter__7852.call(null,cljs.core.chunk_rest.call(null,s__7853__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7855),null);
}
} else
{var p = cljs.core.first.call(null,s__7853__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.log-val","span.log-val",3645418982),(cljs.core.truth_((function (){var and__6352__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p),"object");if(and__6352__auto__)
{var and__6352__auto____$1 = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p);if(cljs.core.truth_(and__6352__auto____$1))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p)));
} else
{return and__6352__auto____$1;
}
} else
{return and__6352__auto__;
}
})())?"null":((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p),"object"))?lt.object.__GT_content.call(null,lt.plugins.chrometools.devtools.make_inspector_object.call(null,client,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),p], null))):((new cljs.core.Keyword(null,"else","else",1017020587))?new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(p)):null)))], null),iter__7852.call(null,cljs.core.rest.call(null,s__7853__$2)));
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
lt.plugins.chrometools.console.frame = (function frame(f){var e__7761__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.url","td.url",4428724323),lt.objs.files.basename.call(null,new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(f))," [",new cljs.core.Keyword(null,"lineNumber","lineNumber",684762063).cljs$core$IFn$_invoke$arity$1(f),"]"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"functionName","functionName",802531829).cljs$core$IFn$_invoke$arity$1(f)))?"anonymous":new cljs.core.Keyword(null,"functionName","functionName",802531829).cljs$core$IFn$_invoke$arity$1(f))], null)], null));var seq__7862_7885 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__7863_7886 = null;var count__7864_7887 = 0;var i__7865_7888 = 0;while(true){
if((i__7865_7888 < count__7864_7887))
{var vec__7866_7889 = cljs.core._nth.call(null,chunk__7863_7886,i__7865_7888);var ev__7762__auto___7890 = cljs.core.nth.call(null,vec__7866_7889,0,null);var func__7763__auto___7891 = cljs.core.nth.call(null,vec__7866_7889,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___7890,func__7763__auto___7891);
{
var G__7892 = seq__7862_7885;
var G__7893 = chunk__7863_7886;
var G__7894 = count__7864_7887;
var G__7895 = (i__7865_7888 + 1);
seq__7862_7885 = G__7892;
chunk__7863_7886 = G__7893;
count__7864_7887 = G__7894;
i__7865_7888 = G__7895;
continue;
}
} else
{var temp__4092__auto___7896 = cljs.core.seq.call(null,seq__7862_7885);if(temp__4092__auto___7896)
{var seq__7862_7897__$1 = temp__4092__auto___7896;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7862_7897__$1))
{var c__7112__auto___7898 = cljs.core.chunk_first.call(null,seq__7862_7897__$1);{
var G__7899 = cljs.core.chunk_rest.call(null,seq__7862_7897__$1);
var G__7900 = c__7112__auto___7898;
var G__7901 = cljs.core.count.call(null,c__7112__auto___7898);
var G__7902 = 0;
seq__7862_7885 = G__7899;
chunk__7863_7886 = G__7900;
count__7864_7887 = G__7901;
i__7865_7888 = G__7902;
continue;
}
} else
{var vec__7867_7903 = cljs.core.first.call(null,seq__7862_7897__$1);var ev__7762__auto___7904 = cljs.core.nth.call(null,vec__7867_7903,0,null);var func__7763__auto___7905 = cljs.core.nth.call(null,vec__7867_7903,1,null);lt.util.dom.on.call(null,e__7761__auto__,ev__7762__auto___7904,func__7763__auto___7905);
{
var G__7906 = cljs.core.next.call(null,seq__7862_7897__$1);
var G__7907 = null;
var G__7908 = 0;
var G__7909 = 0;
seq__7862_7885 = G__7906;
chunk__7863_7886 = G__7907;
count__7864_7887 = G__7908;
i__7865_7888 = G__7909;
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
return (function (p1__7868_SHARP_){return cljs.core._EQ_.call(null,-1,text__$1.indexOf(p1__7868_SHARP_));
});})(text__$1))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["failed to load resource: http://app.kodowa.com"], null));
});
cljs.core._add_method.call(null,lt.plugins.chrometools.console.handle_log_msg,"error",(function (msg){if(lt.plugins.chrometools.console.valid_error_QMARK_.call(null,[cljs.core.str(new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str(": "),cljs.core.str(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(msg))].join('')))
{var top = cljs.core.first.call(null,new cljs.core.Keyword(null,"stackTrace","stackTrace",3040184079).cljs$core$IFn$_invoke$arity$1(msg));return lt.objs.console.verbatim.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",1013907517),new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(msg),(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(top))?null:[cljs.core.str(": "),cljs.core.str(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(msg))].join(''))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),(function (){var iter__7081__auto__ = ((function (top){
return (function iter__7869(s__7870){return (new cljs.core.LazySeq(null,((function (top){
return (function (){var s__7870__$1 = s__7870;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7870__$1);if(temp__4092__auto__)
{var s__7870__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7870__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__7870__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__7872 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__7871 = 0;while(true){
if((i__7871 < size__7080__auto__))
{var f = cljs.core._nth.call(null,c__7079__auto__,i__7871);cljs.core.chunk_append.call(null,b__7872,lt.plugins.chrometools.console.frame.call(null,f));
{
var G__7910 = (i__7871 + 1);
i__7871 = G__7910;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7872),iter__7869.call(null,cljs.core.chunk_rest.call(null,s__7870__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7872),null);
}
} else
{var f = cljs.core.first.call(null,s__7870__$2);return cljs.core.cons.call(null,lt.plugins.chrometools.console.frame.call(null,f),iter__7869.call(null,cljs.core.rest.call(null,s__7870__$2)));
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
cljs.core._add_method.call(null,lt.plugins.chrometools.console.handle_log_msg,"log",(function (msg){var stack = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__7873_SHARP_){return cljs.core.not_EQ_.call(null,lt.objs.files.basename.call(null,new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(p1__7873_SHARP_)),"bootstrap.js");
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
lt.plugins.chrometools.eval.extra_escape = (function extra_escape(code){return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,code,"\\","\\\\"),"\n","\\n"),"'","\\'");
});
lt.plugins.chrometools.eval.css_eval_message = (function css_eval_message(path,code){return [cljs.core.str("\n       var name = \""),cljs.core.str(clojure.string.replace.call(null,path,/[\/.]/,"_")),cljs.core.str("\";\n       var existing = document.querySelector(\"#\" + name);\n\n      if(existing) {\n        existing.parentNode.removeChild(existing);\n      }\n\n      var neue = document.createElement(\"style\");\n      neue.id = name;\n      neue.type = \"text/css\";\n      neue.innerHTML = \""),cljs.core.str(lt.plugins.chrometools.eval.extra_escape.call(null,code)),cljs.core.str("\";\n\n      document.head.appendChild(neue);\n")].join('');
});
lt.plugins.chrometools.eval.__BEH__css_eval = (function __BEH__css_eval(this$,msg){var css_msg = lt.plugins.chrometools.eval.css_eval_message.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg)),new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg)));return lt.plugins.chrometools.send.call(null,this$,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Runtime.evaluate",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expression","expression",3513419274),css_msg], null)], null),((function (css_msg){
return (function (r){return r;
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
{return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.eval.js.change-live.error","editor.eval.js.change-live.error",2227540897),new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(res));
} else
{return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.eval.js.change-live.success","editor.eval.js.change-live.success",2994410460));
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
{var ed = temp__4092__auto__;var info = new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg);var seq__8830 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(info));var chunk__8831 = null;var count__8832 = 0;var i__8833 = 0;while(true){
if((i__8833 < count__8832))
{var form__$1 = cljs.core._nth.call(null,chunk__8831,i__8833);var cb_8844 = cljs.core.partial.call(null,lt.plugins.chrometools.eval.cljs_eval_cb,this$,msg,form__$1);lt.plugins.chrometools.eval.eval_cljs.call(null,this$,form__$1,cb_8844);
{
var G__8845 = seq__8830;
var G__8846 = chunk__8831;
var G__8847 = count__8832;
var G__8848 = (i__8833 + 1);
seq__8830 = G__8845;
chunk__8831 = G__8846;
count__8832 = G__8847;
i__8833 = G__8848;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__8830);if(temp__4092__auto____$1)
{var seq__8830__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8830__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8830__$1);{
var G__8849 = cljs.core.chunk_rest.call(null,seq__8830__$1);
var G__8850 = c__7112__auto__;
var G__8851 = cljs.core.count.call(null,c__7112__auto__);
var G__8852 = 0;
seq__8830 = G__8849;
chunk__8831 = G__8850;
count__8832 = G__8851;
i__8833 = G__8852;
continue;
}
} else
{var form__$1 = cljs.core.first.call(null,seq__8830__$1);var cb_8853 = cljs.core.partial.call(null,lt.plugins.chrometools.eval.cljs_eval_cb,this$,msg,form__$1);lt.plugins.chrometools.eval.eval_cljs.call(null,this$,form__$1,cb_8853);
{
var G__8854 = cljs.core.next.call(null,seq__8830__$1);
var G__8855 = null;
var G__8856 = 0;
var G__8857 = 0;
seq__8830 = G__8854;
chunk__8831 = G__8855;
count__8832 = G__8856;
i__8833 = G__8857;
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