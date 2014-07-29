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
lt.plugins.chrometools.server_input = (function server_input(){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"host:port",new cljs.core.Keyword(null,"value","value",1125876963),"localhost:"], null)], null));var seq__8009_8152 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",1111509066),((function (e__7755__auto__){
return (function (){return lt.objs.context.in_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
});})(e__7755__auto__))
,new cljs.core.Keyword(null,"blur","blur",1016931289),((function (e__7755__auto__){
return (function (){return lt.objs.context.out_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
});})(e__7755__auto__))
], null)));var chunk__8010_8153 = null;var count__8011_8154 = 0;var i__8012_8155 = 0;while(true){
if((i__8012_8155 < count__8011_8154))
{var vec__8013_8156 = cljs.core._nth.call(null,chunk__8010_8153,i__8012_8155);var ev__7756__auto___8157 = cljs.core.nth.call(null,vec__8013_8156,0,null);var func__7757__auto___8158 = cljs.core.nth.call(null,vec__8013_8156,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8157,func__7757__auto___8158);
{
var G__8159 = seq__8009_8152;
var G__8160 = chunk__8010_8153;
var G__8161 = count__8011_8154;
var G__8162 = (i__8012_8155 + 1);
seq__8009_8152 = G__8159;
chunk__8010_8153 = G__8160;
count__8011_8154 = G__8161;
i__8012_8155 = G__8162;
continue;
}
} else
{var temp__4092__auto___8163 = cljs.core.seq.call(null,seq__8009_8152);if(temp__4092__auto___8163)
{var seq__8009_8164__$1 = temp__4092__auto___8163;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8009_8164__$1))
{var c__7112__auto___8165 = cljs.core.chunk_first.call(null,seq__8009_8164__$1);{
var G__8166 = cljs.core.chunk_rest.call(null,seq__8009_8164__$1);
var G__8167 = c__7112__auto___8165;
var G__8168 = cljs.core.count.call(null,c__7112__auto___8165);
var G__8169 = 0;
seq__8009_8152 = G__8166;
chunk__8010_8153 = G__8167;
count__8011_8154 = G__8168;
i__8012_8155 = G__8169;
continue;
}
} else
{var vec__8014_8170 = cljs.core.first.call(null,seq__8009_8164__$1);var ev__7756__auto___8171 = cljs.core.nth.call(null,vec__8014_8170,0,null);var func__7757__auto___8172 = cljs.core.nth.call(null,vec__8014_8170,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8171,func__7757__auto___8172);
{
var G__8173 = cljs.core.next.call(null,seq__8009_8164__$1);
var G__8174 = null;
var G__8175 = 0;
var G__8176 = 0;
seq__8009_8152 = G__8173;
chunk__8010_8153 = G__8174;
count__8011_8154 = G__8175;
i__8012_8155 = G__8176;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.plugins.chrometools.cache_key = new cljs.core.Keyword("lt.plugins.chrometools","chrome-debugger-server","lt.plugins.chrometools/chrome-debugger-server",4300429430);
lt.plugins.chrometools.connect_to_remote = (function connect_to_remote(server,client){var vec__8016 = clojure.string.split.call(null,server,":");var host = cljs.core.nth.call(null,vec__8016,0,null);var port = cljs.core.nth.call(null,vec__8016,1,null);if(cljs.core.truth_((function (){var and__6352__auto__ = host;if(cljs.core.truth_(and__6352__auto__))
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
return (function (p1__8017_SHARP_){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"message","message",1968829305),lt.util.cljs.js__GT_clj.call(null,JSON.parse(p1__8017_SHARP_.data),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true));
});})(sock))
;
sock.onerror = ((function (sock){
return (function (p1__8018_SHARP_){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"error","error",1110689146),p1__8018_SHARP_);
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
var send__delegate = function (client,m,p__8019){var vec__8021 = p__8019;var cb = cljs.core.nth.call(null,vec__8021,0,null);if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))))
{return lt.plugins.chrometools.send_STAR_.call(null,client,m,cb);
} else
{return lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1121848451)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [client,m,cb], null));
}
};
var send = function (client,m,var_args){
var p__8019 = null;if (arguments.length > 2) {
  p__8019 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return send__delegate.call(this,client,m,p__8019);};
send.cljs$lang$maxFixedArity = 2;
send.cljs$lang$applyTo = (function (arglist__8177){
var client = cljs.core.first(arglist__8177);
arglist__8177 = cljs.core.next(arglist__8177);
var m = cljs.core.first(arglist__8177);
var p__8019 = cljs.core.rest(arglist__8177);
return send__delegate(client,m,p__8019);
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
lt.plugins.chrometools.__BEH__close = (function __BEH__close(this$){var temp__4092__auto___8178 = new cljs.core.Keyword(null,"socket","socket",4411822821).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8178))
{var socket_8179 = temp__4092__auto___8178;socket_8179.close();
} else
{}
cljs.core.swap_BANG_.call(null,lt.plugins.chrometools.connected_tabs,cljs.core.dissoc,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));
return lt.objs.clients.rem_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools","close","lt.plugins.chrometools/close",1334675834),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.__BEH__close,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close!","close!",3951350939),null], null), null));
lt.plugins.chrometools.__BEH__clear_queue_on_connect = (function __BEH__clear_queue_on_connect(this$){var seq__8030_8180 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"queue","queue",1121848451).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var chunk__8031_8181 = null;var count__8032_8182 = 0;var i__8033_8183 = 0;while(true){
if((i__8033_8183 < count__8032_8182))
{var msg_8184 = cljs.core._nth.call(null,chunk__8031_8181,i__8033_8183);cljs.core.apply.call(null,lt.plugins.chrometools.send,msg_8184);
{
var G__8185 = seq__8030_8180;
var G__8186 = chunk__8031_8181;
var G__8187 = count__8032_8182;
var G__8188 = (i__8033_8183 + 1);
seq__8030_8180 = G__8185;
chunk__8031_8181 = G__8186;
count__8032_8182 = G__8187;
i__8033_8183 = G__8188;
continue;
}
} else
{var temp__4092__auto___8189 = cljs.core.seq.call(null,seq__8030_8180);if(temp__4092__auto___8189)
{var seq__8030_8190__$1 = temp__4092__auto___8189;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8030_8190__$1))
{var c__7112__auto___8191 = cljs.core.chunk_first.call(null,seq__8030_8190__$1);{
var G__8192 = cljs.core.chunk_rest.call(null,seq__8030_8190__$1);
var G__8193 = c__7112__auto___8191;
var G__8194 = cljs.core.count.call(null,c__7112__auto___8191);
var G__8195 = 0;
seq__8030_8180 = G__8192;
chunk__8031_8181 = G__8193;
count__8032_8182 = G__8194;
i__8033_8183 = G__8195;
continue;
}
} else
{var msg_8196 = cljs.core.first.call(null,seq__8030_8190__$1);cljs.core.apply.call(null,lt.plugins.chrometools.send,msg_8196);
{
var G__8197 = cljs.core.next.call(null,seq__8030_8190__$1);
var G__8198 = null;
var G__8199 = 0;
var G__8200 = 0;
seq__8030_8180 = G__8197;
chunk__8031_8181 = G__8198;
count__8032_8182 = G__8199;
i__8033_8183 = G__8200;
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
return (function (){var seq__8034 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"queued-callbacks","queued-callbacks",3801666662).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var chunk__8035 = null;var count__8036 = 0;var i__8037 = 0;while(true){
if((i__8037 < count__8036))
{var cb = cljs.core._nth.call(null,chunk__8035,i__8037);cb.call(null);
{
var G__8201 = seq__8034;
var G__8202 = chunk__8035;
var G__8203 = count__8036;
var G__8204 = (i__8037 + 1);
seq__8034 = G__8201;
chunk__8035 = G__8202;
count__8036 = G__8203;
i__8037 = G__8204;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__8034);if(temp__4092__auto____$1)
{var seq__8034__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8034__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8034__$1);{
var G__8205 = cljs.core.chunk_rest.call(null,seq__8034__$1);
var G__8206 = c__7112__auto__;
var G__8207 = cljs.core.count.call(null,c__7112__auto__);
var G__8208 = 0;
seq__8034 = G__8205;
chunk__8035 = G__8206;
count__8036 = G__8207;
i__8037 = G__8208;
continue;
}
} else
{var cb = cljs.core.first.call(null,seq__8034__$1);cb.call(null);
{
var G__8209 = cljs.core.next.call(null,seq__8034__$1);
var G__8210 = null;
var G__8211 = 0;
var G__8212 = 0;
seq__8034 = G__8209;
chunk__8035 = G__8210;
count__8036 = G__8211;
i__8037 = G__8212;
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
lt.plugins.chrometools.__BEH__init_tab = (function __BEH__init_tab(this$){lt.plugins.chrometools.send.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Runtime.enable"], null),(function (_){return lt.plugins.chrometools.inject_lttools.call(null,this$);
}));
lt.plugins.chrometools.send.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Console.enable"], null));
lt.plugins.chrometools.send.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.enable"], null));
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
lt.plugins.chrometools.store_source_map = (function store_source_map(client,url,params,sm){var params__$1 = cljs.core.assoc.call(null,params,new cljs.core.Keyword(null,"sourceMap","sourceMap",3610443443),sm);var seq__8042 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"sources","sources",3286994730).cljs$core$IFn$_invoke$arity$1(sm));var chunk__8043 = null;var count__8044 = 0;var i__8045 = 0;while(true){
if((i__8045 < count__8044))
{var source = cljs.core._nth.call(null,chunk__8043,i__8045);lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scripts","scripts",2940419194)], null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.files.basename.call(null,source),url], null),params__$1);
{
var G__8213 = seq__8042;
var G__8214 = chunk__8043;
var G__8215 = count__8044;
var G__8216 = (i__8045 + 1);
seq__8042 = G__8213;
chunk__8043 = G__8214;
count__8044 = G__8215;
i__8045 = G__8216;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8042);if(temp__4092__auto__)
{var seq__8042__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8042__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8042__$1);{
var G__8217 = cljs.core.chunk_rest.call(null,seq__8042__$1);
var G__8218 = c__7112__auto__;
var G__8219 = cljs.core.count.call(null,c__7112__auto__);
var G__8220 = 0;
seq__8042 = G__8217;
chunk__8043 = G__8218;
count__8044 = G__8219;
i__8045 = G__8220;
continue;
}
} else
{var source = cljs.core.first.call(null,seq__8042__$1);lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scripts","scripts",2940419194)], null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.files.basename.call(null,source),url], null),params__$1);
{
var G__8221 = cljs.core.next.call(null,seq__8042__$1);
var G__8222 = null;
var G__8223 = 0;
var G__8224 = 0;
seq__8042 = G__8221;
chunk__8043 = G__8222;
count__8044 = G__8223;
i__8045 = G__8224;
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
}catch (e8047){var e = e8047;cljs.core.println.call(null,"Failed to parse source-map ",sm_url);
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
lt.plugins.chrometools.dismiss_button = (function dismiss_button(obj){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tab-close","span.tab-close",4094760846),"x"], null));var seq__8054_8225 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7755__auto__){
return (function (){return lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"remove-label","remove-label",3359640541));
});})(e__7755__auto__))
], null)));var chunk__8055_8226 = null;var count__8056_8227 = 0;var i__8057_8228 = 0;while(true){
if((i__8057_8228 < count__8056_8227))
{var vec__8058_8229 = cljs.core._nth.call(null,chunk__8055_8226,i__8057_8228);var ev__7756__auto___8230 = cljs.core.nth.call(null,vec__8058_8229,0,null);var func__7757__auto___8231 = cljs.core.nth.call(null,vec__8058_8229,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8230,func__7757__auto___8231);
{
var G__8232 = seq__8054_8225;
var G__8233 = chunk__8055_8226;
var G__8234 = count__8056_8227;
var G__8235 = (i__8057_8228 + 1);
seq__8054_8225 = G__8232;
chunk__8055_8226 = G__8233;
count__8056_8227 = G__8234;
i__8057_8228 = G__8235;
continue;
}
} else
{var temp__4092__auto___8236 = cljs.core.seq.call(null,seq__8054_8225);if(temp__4092__auto___8236)
{var seq__8054_8237__$1 = temp__4092__auto___8236;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8054_8237__$1))
{var c__7112__auto___8238 = cljs.core.chunk_first.call(null,seq__8054_8237__$1);{
var G__8239 = cljs.core.chunk_rest.call(null,seq__8054_8237__$1);
var G__8240 = c__7112__auto___8238;
var G__8241 = cljs.core.count.call(null,c__7112__auto___8238);
var G__8242 = 0;
seq__8054_8225 = G__8239;
chunk__8055_8226 = G__8240;
count__8056_8227 = G__8241;
i__8057_8228 = G__8242;
continue;
}
} else
{var vec__8059_8243 = cljs.core.first.call(null,seq__8054_8237__$1);var ev__7756__auto___8244 = cljs.core.nth.call(null,vec__8059_8243,0,null);var func__7757__auto___8245 = cljs.core.nth.call(null,vec__8059_8243,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8244,func__7757__auto___8245);
{
var G__8246 = cljs.core.next.call(null,seq__8054_8237__$1);
var G__8247 = null;
var G__8248 = 0;
var G__8249 = 0;
seq__8054_8225 = G__8246;
chunk__8055_8226 = G__8247;
count__8056_8227 = G__8248;
i__8057_8228 = G__8249;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.plugins.chrometools.reconnect_button = (function reconnect_button(label,tab){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"reconnect-chrome button"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),[cljs.core.str("Reconnect: "),cljs.core.str(new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(tab))].join('')], null),lt.plugins.chrometools.dismiss_button.call(null,label)], null));var seq__8066_8250 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7755__auto__){
return (function (e){var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"chrome.client.remote","chrome.client.remote",4091478727));return lt.plugins.chrometools.connect_tab.call(null,client,tab);
});})(e__7755__auto__))
], null)));var chunk__8067_8251 = null;var count__8068_8252 = 0;var i__8069_8253 = 0;while(true){
if((i__8069_8253 < count__8068_8252))
{var vec__8070_8254 = cljs.core._nth.call(null,chunk__8067_8251,i__8069_8253);var ev__7756__auto___8255 = cljs.core.nth.call(null,vec__8070_8254,0,null);var func__7757__auto___8256 = cljs.core.nth.call(null,vec__8070_8254,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8255,func__7757__auto___8256);
{
var G__8257 = seq__8066_8250;
var G__8258 = chunk__8067_8251;
var G__8259 = count__8068_8252;
var G__8260 = (i__8069_8253 + 1);
seq__8066_8250 = G__8257;
chunk__8067_8251 = G__8258;
count__8068_8252 = G__8259;
i__8069_8253 = G__8260;
continue;
}
} else
{var temp__4092__auto___8261 = cljs.core.seq.call(null,seq__8066_8250);if(temp__4092__auto___8261)
{var seq__8066_8262__$1 = temp__4092__auto___8261;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8066_8262__$1))
{var c__7112__auto___8263 = cljs.core.chunk_first.call(null,seq__8066_8262__$1);{
var G__8264 = cljs.core.chunk_rest.call(null,seq__8066_8262__$1);
var G__8265 = c__7112__auto___8263;
var G__8266 = cljs.core.count.call(null,c__7112__auto___8263);
var G__8267 = 0;
seq__8066_8250 = G__8264;
chunk__8067_8251 = G__8265;
count__8068_8252 = G__8266;
i__8069_8253 = G__8267;
continue;
}
} else
{var vec__8071_8268 = cljs.core.first.call(null,seq__8066_8262__$1);var ev__7756__auto___8269 = cljs.core.nth.call(null,vec__8071_8268,0,null);var func__7757__auto___8270 = cljs.core.nth.call(null,vec__8071_8268,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8269,func__7757__auto___8270);
{
var G__8271 = cljs.core.next.call(null,seq__8066_8262__$1);
var G__8272 = null;
var G__8273 = 0;
var G__8274 = 0;
seq__8066_8250 = G__8271;
chunk__8067_8251 = G__8272;
count__8068_8252 = G__8273;
i__8069_8253 = G__8274;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools","reconnect-label","lt.plugins.chrometools/reconnect-label",2855517336),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reconnect-label","reconnect-label",3615163504),null], null), null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,tab){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab","tab",1014018823),tab], null));
return lt.plugins.chrometools.reconnect_button.call(null,this$,tab);
}));
lt.plugins.chrometools.__BEH__on_remove_reconnect_label = (function __BEH__on_remove_reconnect_label(this$){return lt.object.destroy_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools","on-remove-reconnect-label","lt.plugins.chrometools/on-remove-reconnect-label",1411327027),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.__BEH__on_remove_reconnect_label,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remove-label","remove-label",3359640541),null], null), null));
lt.plugins.chrometools.__BEH__remove_label = (function __BEH__remove_label(this$,that){var id = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var labels = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"reconnect-label","reconnect-label",3615163504));var seq__8078 = cljs.core.seq.call(null,labels);var chunk__8080 = null;var count__8081 = 0;var i__8082 = 0;while(true){
if((i__8082 < count__8081))
{var label = cljs.core._nth.call(null,chunk__8080,i__8082);if(cljs.core.truth_((function (){var and__6352__auto__ = label;if(cljs.core.truth_(and__6352__auto__))
{return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,label))),id);
} else
{return and__6352__auto__;
}
})()))
{lt.object.raise.call(null,label,new cljs.core.Keyword(null,"remove-label","remove-label",3359640541));
{
var G__8275 = seq__8078;
var G__8276 = chunk__8080;
var G__8277 = count__8081;
var G__8278 = (i__8082 + 1);
seq__8078 = G__8275;
chunk__8080 = G__8276;
count__8081 = G__8277;
i__8082 = G__8278;
continue;
}
} else
{{
var G__8279 = seq__8078;
var G__8280 = chunk__8080;
var G__8281 = count__8081;
var G__8282 = (i__8082 + 1);
seq__8078 = G__8279;
chunk__8080 = G__8280;
count__8081 = G__8281;
i__8082 = G__8282;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8078);if(temp__4092__auto__)
{var seq__8078__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8078__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8078__$1);{
var G__8283 = cljs.core.chunk_rest.call(null,seq__8078__$1);
var G__8284 = c__7112__auto__;
var G__8285 = cljs.core.count.call(null,c__7112__auto__);
var G__8286 = 0;
seq__8078 = G__8283;
chunk__8080 = G__8284;
count__8081 = G__8285;
i__8082 = G__8286;
continue;
}
} else
{var label = cljs.core.first.call(null,seq__8078__$1);if(cljs.core.truth_((function (){var and__6352__auto__ = label;if(cljs.core.truth_(and__6352__auto__))
{return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,label))),id);
} else
{return and__6352__auto__;
}
})()))
{lt.object.raise.call(null,label,new cljs.core.Keyword(null,"remove-label","remove-label",3359640541));
{
var G__8287 = cljs.core.next.call(null,seq__8078__$1);
var G__8288 = null;
var G__8289 = 0;
var G__8290 = 0;
seq__8078 = G__8287;
chunk__8080 = G__8288;
count__8081 = G__8289;
i__8082 = G__8290;
continue;
}
} else
{{
var G__8291 = cljs.core.next.call(null,seq__8078__$1);
var G__8292 = null;
var G__8293 = 0;
var G__8294 = 0;
seq__8078 = G__8291;
chunk__8080 = G__8292;
count__8081 = G__8293;
i__8082 = G__8294;
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
lt.plugins.chrometools.tab_preview = (function tab_preview(action,tab){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),new cljs.core.Keyword(null,"faviconUrl","faviconUrl",4346893869).cljs$core$IFn$_invoke$arity$1(tab)], null)], null),new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(tab)], null));var seq__8090_8295 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7755__auto__){
return (function (e){var temp__4092__auto___8299 = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"popup","popup",1120756766));if(cljs.core.truth_(temp__4092__auto___8299))
{var p_8300 = temp__4092__auto___8299;lt.object.raise.call(null,p_8300,new cljs.core.Keyword(null,"close!","close!",3951350939));
} else
{}
return action.call(null,tab);
});})(e__7755__auto__))
], null)));var chunk__8091_8296 = null;var count__8092_8297 = 0;var i__8093_8298 = 0;while(true){
if((i__8093_8298 < count__8092_8297))
{var vec__8094_8301 = cljs.core._nth.call(null,chunk__8091_8296,i__8093_8298);var ev__7756__auto___8302 = cljs.core.nth.call(null,vec__8094_8301,0,null);var func__7757__auto___8303 = cljs.core.nth.call(null,vec__8094_8301,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8302,func__7757__auto___8303);
{
var G__8304 = seq__8090_8295;
var G__8305 = chunk__8091_8296;
var G__8306 = count__8092_8297;
var G__8307 = (i__8093_8298 + 1);
seq__8090_8295 = G__8304;
chunk__8091_8296 = G__8305;
count__8092_8297 = G__8306;
i__8093_8298 = G__8307;
continue;
}
} else
{var temp__4092__auto___8308 = cljs.core.seq.call(null,seq__8090_8295);if(temp__4092__auto___8308)
{var seq__8090_8309__$1 = temp__4092__auto___8308;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8090_8309__$1))
{var c__7112__auto___8310 = cljs.core.chunk_first.call(null,seq__8090_8309__$1);{
var G__8311 = cljs.core.chunk_rest.call(null,seq__8090_8309__$1);
var G__8312 = c__7112__auto___8310;
var G__8313 = cljs.core.count.call(null,c__7112__auto___8310);
var G__8314 = 0;
seq__8090_8295 = G__8311;
chunk__8091_8296 = G__8312;
count__8092_8297 = G__8313;
i__8093_8298 = G__8314;
continue;
}
} else
{var vec__8095_8315 = cljs.core.first.call(null,seq__8090_8309__$1);var ev__7756__auto___8316 = cljs.core.nth.call(null,vec__8095_8315,0,null);var func__7757__auto___8317 = cljs.core.nth.call(null,vec__8095_8315,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8316,func__7757__auto___8317);
{
var G__8318 = cljs.core.next.call(null,seq__8090_8309__$1);
var G__8319 = null;
var G__8320 = 0;
var G__8321 = 0;
seq__8090_8295 = G__8318;
chunk__8091_8296 = G__8319;
count__8092_8297 = G__8320;
i__8093_8298 = G__8321;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.plugins.chrometools.connect_tab = (function connect_tab(client,tab){try{lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"socket","socket",4411822821),lt.plugins.chrometools.socket.call(null,client,new cljs.core.Keyword(null,"webSocketDebuggerUrl","webSocketDebuggerUrl",667502233).cljs$core$IFn$_invoke$arity$1(tab)),new cljs.core.Keyword(null,"commands","commands",4706336250),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"editor.eval.cljs.exec","editor.eval.cljs.exec",866638030),null,new cljs.core.Keyword(null,"editor.eval.css","editor.eval.css",1083014276),null,new cljs.core.Keyword(null,"editor.eval.js","editor.eval.js",1847417804),null,new cljs.core.Keyword(null,"chrome.remote.debug","chrome.remote.debug",1380405521),null], null), null),new cljs.core.Keyword(null,"tab","tab",1014018823),tab,new cljs.core.Keyword(null,"name","name",1017277949),[cljs.core.str("Chrome: "),cljs.core.str(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(tab))].join(''),new cljs.core.Keyword(null,"type","type",1017479852),"Chrome"], null));
return cljs.core.swap_BANG_.call(null,lt.plugins.chrometools.connected_tabs,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(tab),client);
}catch (e8097){var e = e8097;lt.object.raise.call(null,client,new cljs.core.Keyword(null,"close!","close!",3951350939));
lt.objs.notifos.set_msg_BANG_.call(null,"Failed to connect. Is dev tools open?");
return null;
}});
lt.plugins.chrometools.select_tab = (function select_tab(client,tabs){var action = cljs.core.partial.call(null,lt.plugins.chrometools.connect_tab,client);var p = lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Select which tab to attach to",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul#chrome-tabs","ul#chrome-tabs",1003516535),cljs.core.map.call(null,((function (action){
return (function (p1__8098_SHARP_){return lt.plugins.chrometools.tab_preview.call(null,action,p1__8098_SHARP_);
});})(action))
,cljs.core.filter.call(null,((function (action){
return (function (p1__8099_SHARP_){return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p1__8099_SHARP_),"page")) && ((cljs.core.deref.call(null,lt.plugins.chrometools.connected_tabs).call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__8099_SHARP_)) == null));
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
lt.plugins.chrometools.lcm_start = (function lcm_start(coll1,coll2){var c1 = cljs.core.count.call(null,coll1);var c2 = cljs.core.count.call(null,coll2);var i = 0;while(true){
if((((i < c1)) && ((c1 < c2))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,coll1,i),cljs.core.nth.call(null,coll2,i))))
{{
var G__8322 = (i + 1);
i = G__8322;
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
return (function (p1__8100_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"count","count",1108755585).cljs$core$IFn$_invoke$arity$1(p1__8100_SHARP_),n);
});})(path__GT_parts,parts,counts,n))
,counts));
});
lt.plugins.chrometools.find_script = (function find_script(client,path){var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,client).call(null,new cljs.core.Keyword(null,"scripts","scripts",2940419194)),lt.objs.files.basename.call(null,path));if(cljs.core.truth_(temp__4092__auto__))
{var scripts = temp__4092__auto__;var matches = cljs.core.set.call(null,lt.plugins.chrometools.longest_path_match.call(null,path,cljs.core.keys.call(null,scripts)));return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (matches,scripts,temp__4092__auto__){
return (function (p1__8101_SHARP_){return cljs.core.contains_QMARK_.call(null,matches,cljs.core.first.call(null,p1__8101_SHARP_));
});})(matches,scripts,temp__4092__auto__))
,scripts));
} else
{return null;
}
});
lt.plugins.chrometools.find_script_by_id = (function find_script_by_id(client,id){return cljs.core.first.call(null,(function (){var iter__7081__auto__ = (function iter__8118(s__8119){return (new cljs.core.LazySeq(null,(function (){var s__8119__$1 = s__8119;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8119__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__8129 = cljs.core.first.call(null,xs__4579__auto__);var basename = cljs.core.nth.call(null,vec__8129,0,null);var scripts = cljs.core.nth.call(null,vec__8129,1,null);var iterys__7077__auto__ = ((function (s__8119__$1,vec__8129,basename,scripts,xs__4579__auto__,temp__4092__auto__){
return (function iter__8120(s__8121){return (new cljs.core.LazySeq(null,((function (s__8119__$1,vec__8129,basename,scripts,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__8121__$1 = s__8121;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__8121__$1);if(temp__4092__auto____$1)
{var s__8121__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__8121__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__8121__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__8123 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__8122 = 0;while(true){
if((i__8122 < size__7080__auto__))
{var vec__8132 = cljs.core._nth.call(null,c__7079__auto__,i__8122);var _ = cljs.core.nth.call(null,vec__8132,0,null);var script = cljs.core.nth.call(null,vec__8132,1,null);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(script),id))
{cljs.core.chunk_append.call(null,b__8123,cljs.core.assoc.call(null,script,new cljs.core.Keyword(null,"basename","basename",3588138062),basename));
{
var G__8323 = (i__8122 + 1);
i__8122 = G__8323;
continue;
}
} else
{{
var G__8324 = (i__8122 + 1);
i__8122 = G__8324;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8123),iter__8120.call(null,cljs.core.chunk_rest.call(null,s__8121__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8123),null);
}
} else
{var vec__8133 = cljs.core.first.call(null,s__8121__$2);var _ = cljs.core.nth.call(null,vec__8133,0,null);var script = cljs.core.nth.call(null,vec__8133,1,null);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(script),id))
{return cljs.core.cons.call(null,cljs.core.assoc.call(null,script,new cljs.core.Keyword(null,"basename","basename",3588138062),basename),iter__8120.call(null,cljs.core.rest.call(null,s__8121__$2)));
} else
{{
var G__8325 = cljs.core.rest.call(null,s__8121__$2);
s__8121__$1 = G__8325;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__8119__$1,vec__8129,basename,scripts,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__8119__$1,vec__8129,basename,scripts,xs__4579__auto__,temp__4092__auto__))
;var fs__7078__auto__ = cljs.core.seq.call(null,iterys__7077__auto__.call(null,scripts));if(fs__7078__auto__)
{return cljs.core.concat.call(null,fs__7078__auto__,iter__8118.call(null,cljs.core.rest.call(null,s__8119__$1)));
} else
{{
var G__8326 = cljs.core.rest.call(null,s__8119__$1);
s__8119__$1 = G__8326;
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
lt.plugins.chrometools.remove_script_BANG_ = (function remove_script_BANG_(client,path,id){var vec__8136 = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__8134_SHARP_){return cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__8134_SHARP_)));
}),lt.plugins.chrometools.find_script.call(null,client,path)));var k = cljs.core.nth.call(null,vec__8136,0,null);var v = cljs.core.nth.call(null,vec__8136,1,null);return lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scripts","scripts",2940419194),lt.objs.files.basename.call(null,path)], null),cljs.core.dissoc,k);
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
make_inspector_object.cljs$lang$applyTo = (function (arglist__9861){
var more = cljs.core.seq(arglist__9861);
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
lt.plugins.chrometools.devtools.open_inspector = (function open_inspector(this$,obj){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",1017321916),true], null));
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"children","children",2673430897).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return null;
} else
{return lt.plugins.chrometools.send.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),1,new cljs.core.Keyword(null,"method","method",4231316563),"Runtime.getProperties",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"objectId","objectId",1104399404),(function (){var or__6364__auto__ = new cljs.core.Keyword(null,"objectId","objectId",1104399404).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(obj));if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return new cljs.core.Keyword(null,"objectId","objectId",1104399404).cljs$core$IFn$_invoke$arity$1(obj);
}
})(),new cljs.core.Keyword(null,"ownProperties","ownProperties",1958141131),true], null)], null),(function (d){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",2673430897),new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(d))], null));
}));
}
});
lt.plugins.chrometools.devtools.desc = (function desc(this$,obj){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",1013907482),lt.plugins.chrometools.devtools.__GT_name.call(null,obj)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(obj))?[cljs.core.str(": "),cljs.core.str(new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(obj)))].join(''):null)], null));var seq__9817_9862 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7755__auto__){
return (function (){if(cljs.core.truth_(new cljs.core.Keyword(null,"open","open",1017321916).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",1017321916),false], null));
} else
{return lt.plugins.chrometools.devtools.open_inspector.call(null,this$,obj);
}
});})(e__7755__auto__))
], null)));var chunk__9818_9863 = null;var count__9819_9864 = 0;var i__9820_9865 = 0;while(true){
if((i__9820_9865 < count__9819_9864))
{var vec__9821_9866 = cljs.core._nth.call(null,chunk__9818_9863,i__9820_9865);var ev__7756__auto___9867 = cljs.core.nth.call(null,vec__9821_9866,0,null);var func__7757__auto___9868 = cljs.core.nth.call(null,vec__9821_9866,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9867,func__7757__auto___9868);
{
var G__9869 = seq__9817_9862;
var G__9870 = chunk__9818_9863;
var G__9871 = count__9819_9864;
var G__9872 = (i__9820_9865 + 1);
seq__9817_9862 = G__9869;
chunk__9818_9863 = G__9870;
count__9819_9864 = G__9871;
i__9820_9865 = G__9872;
continue;
}
} else
{var temp__4092__auto___9873 = cljs.core.seq.call(null,seq__9817_9862);if(temp__4092__auto___9873)
{var seq__9817_9874__$1 = temp__4092__auto___9873;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9817_9874__$1))
{var c__7112__auto___9875 = cljs.core.chunk_first.call(null,seq__9817_9874__$1);{
var G__9876 = cljs.core.chunk_rest.call(null,seq__9817_9874__$1);
var G__9877 = c__7112__auto___9875;
var G__9878 = cljs.core.count.call(null,c__7112__auto___9875);
var G__9879 = 0;
seq__9817_9862 = G__9876;
chunk__9818_9863 = G__9877;
count__9819_9864 = G__9878;
i__9820_9865 = G__9879;
continue;
}
} else
{var vec__9822_9880 = cljs.core.first.call(null,seq__9817_9874__$1);var ev__7756__auto___9881 = cljs.core.nth.call(null,vec__9822_9880,0,null);var func__7757__auto___9882 = cljs.core.nth.call(null,vec__9822_9880,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9881,func__7757__auto___9882);
{
var G__9883 = cljs.core.next.call(null,seq__9817_9874__$1);
var G__9884 = null;
var G__9885 = 0;
var G__9886 = 0;
seq__9817_9862 = G__9883;
chunk__9818_9863 = G__9884;
count__9819_9864 = G__9885;
i__9820_9865 = G__9886;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.plugins.chrometools.devtools.props = (function props(this$,children){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7081__auto__ = (function iter__9833(s__9834){return (new cljs.core.LazySeq(null,(function (){var s__9834__$1 = s__9834;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9834__$1);if(temp__4092__auto__)
{var s__9834__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9834__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__9834__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__9836 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__9835 = 0;while(true){
if((i__9835 < size__7080__auto__))
{var c = cljs.core._nth.call(null,c__7079__auto__,i__9835);cljs.core.chunk_append.call(null,b__9836,(cljs.core.truth_((function (){var and__6352__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c)),"object");if(and__6352__auto__)
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
var G__9887 = (i__9835 + 1);
i__9835 = G__9887;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9836),iter__9833.call(null,cljs.core.chunk_rest.call(null,s__9834__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9836),null);
}
} else
{var c = cljs.core.first.call(null,s__9834__$2);return cljs.core.cons.call(null,(cljs.core.truth_((function (){var and__6352__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c)),"object");if(and__6352__auto__)
{return new cljs.core.Keyword(null,"objectId","objectId",1104399404).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c));
} else
{return and__6352__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),lt.object.__GT_content.call(null,lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.chrometools.devtools","inspector-object","lt.plugins.chrometools.devtools/inspector-object",4510787313),new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),c))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",1013907482),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(c)], null),": ",(function (){var or__6364__auto__ = new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c));if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return [cljs.core.str(lt.plugins.chrometools.devtools.format_value.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c)))].join('');
}
})()], null)),iter__9833.call(null,cljs.core.rest.call(null,s__9834__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7081__auto__.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1017277949),lt.plugins.chrometools.devtools.i_compare,children));
})()], null));var seq__9837_9888 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9838_9889 = null;var count__9839_9890 = 0;var i__9840_9891 = 0;while(true){
if((i__9840_9891 < count__9839_9890))
{var vec__9841_9892 = cljs.core._nth.call(null,chunk__9838_9889,i__9840_9891);var ev__7756__auto___9893 = cljs.core.nth.call(null,vec__9841_9892,0,null);var func__7757__auto___9894 = cljs.core.nth.call(null,vec__9841_9892,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9893,func__7757__auto___9894);
{
var G__9895 = seq__9837_9888;
var G__9896 = chunk__9838_9889;
var G__9897 = count__9839_9890;
var G__9898 = (i__9840_9891 + 1);
seq__9837_9888 = G__9895;
chunk__9838_9889 = G__9896;
count__9839_9890 = G__9897;
i__9840_9891 = G__9898;
continue;
}
} else
{var temp__4092__auto___9899 = cljs.core.seq.call(null,seq__9837_9888);if(temp__4092__auto___9899)
{var seq__9837_9900__$1 = temp__4092__auto___9899;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9837_9900__$1))
{var c__7112__auto___9901 = cljs.core.chunk_first.call(null,seq__9837_9900__$1);{
var G__9902 = cljs.core.chunk_rest.call(null,seq__9837_9900__$1);
var G__9903 = c__7112__auto___9901;
var G__9904 = cljs.core.count.call(null,c__7112__auto___9901);
var G__9905 = 0;
seq__9837_9888 = G__9902;
chunk__9838_9889 = G__9903;
count__9839_9890 = G__9904;
i__9840_9891 = G__9905;
continue;
}
} else
{var vec__9842_9906 = cljs.core.first.call(null,seq__9837_9900__$1);var ev__7756__auto___9907 = cljs.core.nth.call(null,vec__9842_9906,0,null);var func__7757__auto___9908 = cljs.core.nth.call(null,vec__9842_9906,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9907,func__7757__auto___9908);
{
var G__9909 = cljs.core.next.call(null,seq__9837_9900__$1);
var G__9910 = null;
var G__9911 = 0;
var G__9912 = 0;
seq__9837_9888 = G__9909;
chunk__9838_9889 = G__9910;
count__9839_9890 = G__9911;
i__9840_9891 = G__9912;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
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
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),(function (){var pred__9846 = cljs.core._EQ_;var expr__9847 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(pred__9846.call(null,"object",expr__9847)))
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
lt.plugins.chrometools.devtools.clear_unused_inspectors = (function clear_unused_inspectors(){var seq__9855 = cljs.core.seq.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"inspector.object","inspector.object",1285492104)));var chunk__9857 = null;var count__9858 = 0;var i__9859 = 0;while(true){
if((i__9859 < count__9858))
{var obj = cljs.core._nth.call(null,chunk__9857,i__9859);if((cljs.core.not.call(null,lt.object.__GT_content.call(null,obj))) || (cljs.core.not.call(null,lt.util.dom.parents.call(null,lt.object.__GT_content.call(null,obj),new cljs.core.Keyword(null,"body","body",1016933652)))))
{lt.object.destroy_BANG_.call(null,obj);
{
var G__9913 = seq__9855;
var G__9914 = chunk__9857;
var G__9915 = count__9858;
var G__9916 = (i__9859 + 1);
seq__9855 = G__9913;
chunk__9857 = G__9914;
count__9858 = G__9915;
i__9859 = G__9916;
continue;
}
} else
{{
var G__9917 = seq__9855;
var G__9918 = chunk__9857;
var G__9919 = count__9858;
var G__9920 = (i__9859 + 1);
seq__9855 = G__9917;
chunk__9857 = G__9918;
count__9858 = G__9919;
i__9859 = G__9920;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9855);if(temp__4092__auto__)
{var seq__9855__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9855__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__9855__$1);{
var G__9921 = cljs.core.chunk_rest.call(null,seq__9855__$1);
var G__9922 = c__7112__auto__;
var G__9923 = cljs.core.count.call(null,c__7112__auto__);
var G__9924 = 0;
seq__9855 = G__9921;
chunk__9857 = G__9922;
count__9858 = G__9923;
i__9859 = G__9924;
continue;
}
} else
{var obj = cljs.core.first.call(null,seq__9855__$1);if((cljs.core.not.call(null,lt.object.__GT_content.call(null,obj))) || (cljs.core.not.call(null,lt.util.dom.parents.call(null,lt.object.__GT_content.call(null,obj),new cljs.core.Keyword(null,"body","body",1016933652)))))
{lt.object.destroy_BANG_.call(null,obj);
{
var G__9925 = cljs.core.next.call(null,seq__9855__$1);
var G__9926 = null;
var G__9927 = 0;
var G__9928 = 0;
seq__9855 = G__9925;
chunk__9857 = G__9926;
count__9858 = G__9927;
i__9859 = G__9928;
continue;
}
} else
{{
var G__9929 = cljs.core.next.call(null,seq__9855__$1);
var G__9930 = null;
var G__9931 = 0;
var G__9932 = 0;
seq__9855 = G__9929;
chunk__9857 = G__9930;
count__9858 = G__9931;
i__9859 = G__9932;
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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools.devtools","inspector-object","lt.plugins.chrometools.devtools/inspector-object",4510787313),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspector.object","inspector.object",1285492104),null], null), null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,client,m){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"client","client",3951159101),client,new cljs.core.Keyword(null,"open","open",1017321916),true,new cljs.core.Keyword(null,"info","info",1017141280),m], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),crate.binding.bound.call(null,this$,lt.plugins.chrometools.devtools.__GT_open)], null),lt.plugins.chrometools.devtools.desc.call(null,this$,m),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),crate.binding.bound.call(null,crate.binding.subatom.call(null,this$,new cljs.core.Keyword(null,"children","children",2673430897)),cljs.core.partial.call(null,lt.plugins.chrometools.devtools.props,this$))], null)], null);
}));
lt.plugins.chrometools.devtools.__BEH__auto_open_inspector_object = (function __BEH__auto_open_inspector_object(this$,client,m){return lt.plugins.chrometools.devtools.open_inspector.call(null,this$,m);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools.devtools","auto-open-inspector-object","lt.plugins.chrometools.devtools/auto-open-inspector-object",3555969788),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.devtools.__BEH__auto_open_inspector_object,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",1017141378),null], null), null));
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
lt.plugins.chrometools.filewatch.listener = (function listener(p__8919,e,filename){var map__8922 = p__8919;var map__8922__$1 = ((cljs.core.seq_QMARK_.call(null,map__8922))?cljs.core.apply.call(null,cljs.core.hash_map,map__8922):map__8922);var is_dir = cljs.core.get.call(null,map__8922__$1,new cljs.core.Keyword(null,"is-dir","is-dir",4127610076));var path = cljs.core.get.call(null,map__8922__$1,new cljs.core.Keyword(null,"path","path",1017337751));var client = cljs.core.get.call(null,map__8922__$1,new cljs.core.Keyword(null,"client","client",3951159101));if(cljs.core.truth_((function (){var and__6352__auto__ = client;if(cljs.core.truth_(and__6352__auto__))
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
{var path__$1 = (cljs.core.truth_(is_dir)?clojure.string.join.call(null,"/",cljs.core.conj.call(null,clojure.string.split.call(null,path,"/"),filename)):path);var ext = lt.objs.files.ext.call(null,path__$1);var G__8923 = ext;if(cljs.core._EQ_.call(null,"css",G__8923))
{return lt.plugins.chrometools.filewatch.css_file_change.call(null,client,path__$1);
} else
{if(cljs.core._EQ_.call(null,"js",G__8923))
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
lt.plugins.chrometools.filewatch.removed_watches = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
lt.plugins.chrometools.filewatch.__BEH__remove_watch_on_disconnect = (function __BEH__remove_watch_on_disconnect(client){var tab_id = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)));var seq__8930 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"file-watches","file-watches",1924229598).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)));var chunk__8931 = null;var count__8932 = 0;var i__8933 = 0;while(true){
if((i__8933 < count__8932))
{var vec__8934 = cljs.core._nth.call(null,chunk__8931,i__8933);var path = cljs.core.nth.call(null,vec__8934,0,null);var watcher = cljs.core.nth.call(null,vec__8934,1,null);cljs.core.swap_BANG_.call(null,lt.plugins.chrometools.filewatch.removed_watches,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tab_id], null),cljs.core.conj,path);
watcher.close();
{
var G__8974 = seq__8930;
var G__8975 = chunk__8931;
var G__8976 = count__8932;
var G__8977 = (i__8933 + 1);
seq__8930 = G__8974;
chunk__8931 = G__8975;
count__8932 = G__8976;
i__8933 = G__8977;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8930);if(temp__4092__auto__)
{var seq__8930__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8930__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8930__$1);{
var G__8978 = cljs.core.chunk_rest.call(null,seq__8930__$1);
var G__8979 = c__7112__auto__;
var G__8980 = cljs.core.count.call(null,c__7112__auto__);
var G__8981 = 0;
seq__8930 = G__8978;
chunk__8931 = G__8979;
count__8932 = G__8980;
i__8933 = G__8981;
continue;
}
} else
{var vec__8935 = cljs.core.first.call(null,seq__8930__$1);var path = cljs.core.nth.call(null,vec__8935,0,null);var watcher = cljs.core.nth.call(null,vec__8935,1,null);cljs.core.swap_BANG_.call(null,lt.plugins.chrometools.filewatch.removed_watches,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tab_id], null),cljs.core.conj,path);
watcher.close();
{
var G__8982 = cljs.core.next.call(null,seq__8930__$1);
var G__8983 = null;
var G__8984 = 0;
var G__8985 = 0;
seq__8930 = G__8982;
chunk__8931 = G__8983;
count__8932 = G__8984;
i__8933 = G__8985;
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
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools.filewatch","remove-watch-on-disconnect","lt.plugins.chrometools.filewatch/remove-watch-on-disconnect",574800971),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.filewatch.__BEH__remove_watch_on_disconnect,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disconnect","disconnect",1544309774),null], null), null));
lt.plugins.chrometools.filewatch.__BEH__add_watches_on_connect = (function __BEH__add_watches_on_connect(client){var temp__4092__auto__ = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)));if(cljs.core.truth_(temp__4092__auto__))
{var tab_id = temp__4092__auto__;var paths = cljs.core.get.call(null,cljs.core.deref.call(null,lt.plugins.chrometools.filewatch.removed_watches),tab_id);if(cljs.core.truth_(cljs.core.not_empty.call(null,paths)))
{var seq__8940_8986 = cljs.core.seq.call(null,paths);var chunk__8941_8987 = null;var count__8942_8988 = 0;var i__8943_8989 = 0;while(true){
if((i__8943_8989 < count__8942_8988))
{var path_8990 = cljs.core._nth.call(null,chunk__8941_8987,i__8943_8989);lt.plugins.chrometools.filewatch.watch_file.call(null,client,path_8990);
{
var G__8991 = seq__8940_8986;
var G__8992 = chunk__8941_8987;
var G__8993 = count__8942_8988;
var G__8994 = (i__8943_8989 + 1);
seq__8940_8986 = G__8991;
chunk__8941_8987 = G__8992;
count__8942_8988 = G__8993;
i__8943_8989 = G__8994;
continue;
}
} else
{var temp__4092__auto___8995__$1 = cljs.core.seq.call(null,seq__8940_8986);if(temp__4092__auto___8995__$1)
{var seq__8940_8996__$1 = temp__4092__auto___8995__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8940_8996__$1))
{var c__7112__auto___8997 = cljs.core.chunk_first.call(null,seq__8940_8996__$1);{
var G__8998 = cljs.core.chunk_rest.call(null,seq__8940_8996__$1);
var G__8999 = c__7112__auto___8997;
var G__9000 = cljs.core.count.call(null,c__7112__auto___8997);
var G__9001 = 0;
seq__8940_8986 = G__8998;
chunk__8941_8987 = G__8999;
count__8942_8988 = G__9000;
i__8943_8989 = G__9001;
continue;
}
} else
{var path_9002 = cljs.core.first.call(null,seq__8940_8996__$1);lt.plugins.chrometools.filewatch.watch_file.call(null,client,path_9002);
{
var G__9003 = cljs.core.next.call(null,seq__8940_8996__$1);
var G__9004 = null;
var G__9005 = 0;
var G__9006 = 0;
seq__8940_8986 = G__9003;
chunk__8941_8987 = G__9004;
count__8942_8988 = G__9005;
i__8943_8989 = G__9006;
continue;
}
}
} else
{}
}
break;
}
cljs.core.swap_BANG_.call(null,lt.plugins.chrometools.filewatch.removed_watches,cljs.core.dissoc,tab_id);
return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Re-added file watches on "),cljs.core.str(clojure.string.join.call(null,", ",paths))].join(''));
} else
{return null;
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools.filewatch","add-watches-on-connect","lt.plugins.chrometools.filewatch/add-watches-on-connect",3973912544),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.filewatch.__BEH__add_watches_on_connect,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connect","connect",1965255772),null], null), null));
lt.plugins.chrometools.filewatch.__BEH__watch_path = (function __BEH__watch_path(obj,paths,client){var seq__8948 = cljs.core.seq.call(null,clojure.string.split.call(null,paths,";"));var chunk__8949 = null;var count__8950 = 0;var i__8951 = 0;while(true){
if((i__8951 < count__8950))
{var path = cljs.core._nth.call(null,chunk__8949,i__8951);lt.plugins.chrometools.filewatch.watch_file.call(null,client,path);
{
var G__9007 = seq__8948;
var G__9008 = chunk__8949;
var G__9009 = count__8950;
var G__9010 = (i__8951 + 1);
seq__8948 = G__9007;
chunk__8949 = G__9008;
count__8950 = G__9009;
i__8951 = G__9010;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8948);if(temp__4092__auto__)
{var seq__8948__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8948__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8948__$1);{
var G__9011 = cljs.core.chunk_rest.call(null,seq__8948__$1);
var G__9012 = c__7112__auto__;
var G__9013 = cljs.core.count.call(null,c__7112__auto__);
var G__9014 = 0;
seq__8948 = G__9011;
chunk__8949 = G__9012;
count__8950 = G__9013;
i__8951 = G__9014;
continue;
}
} else
{var path = cljs.core.first.call(null,seq__8948__$1);lt.plugins.chrometools.filewatch.watch_file.call(null,client,path);
{
var G__9015 = cljs.core.next.call(null,seq__8948__$1);
var G__9016 = null;
var G__9017 = 0;
var G__9018 = 0;
seq__8948 = G__9015;
chunk__8949 = G__9016;
count__8950 = G__9017;
i__8951 = G__9018;
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
lt.plugins.chrometools.filewatch.input = (function input(type,event,client){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1017479852),"file",type,true,new cljs.core.Keyword(null,"multiple","multiple",1667733890),cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"file","file",1017047278)),new cljs.core.Keyword(null,"style","style",1123684643),"display:none;"], true, false)], null));var seq__8958_9019 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change","change",3947235106),((function (e__7755__auto__){
return (function (){var me = this;if(cljs.core.empty_QMARK_.call(null,lt.util.dom.val.call(null,me)))
{return null;
} else
{return lt.object.raise.call(null,lt.plugins.chrometools.filewatch.opener,event,lt.util.dom.val.call(null,me),client);
}
});})(e__7755__auto__))
], null)));var chunk__8959_9020 = null;var count__8960_9021 = 0;var i__8961_9022 = 0;while(true){
if((i__8961_9022 < count__8960_9021))
{var vec__8962_9023 = cljs.core._nth.call(null,chunk__8959_9020,i__8961_9022);var ev__7756__auto___9024 = cljs.core.nth.call(null,vec__8962_9023,0,null);var func__7757__auto___9025 = cljs.core.nth.call(null,vec__8962_9023,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9024,func__7757__auto___9025);
{
var G__9026 = seq__8958_9019;
var G__9027 = chunk__8959_9020;
var G__9028 = count__8960_9021;
var G__9029 = (i__8961_9022 + 1);
seq__8958_9019 = G__9026;
chunk__8959_9020 = G__9027;
count__8960_9021 = G__9028;
i__8961_9022 = G__9029;
continue;
}
} else
{var temp__4092__auto___9030 = cljs.core.seq.call(null,seq__8958_9019);if(temp__4092__auto___9030)
{var seq__8958_9031__$1 = temp__4092__auto___9030;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8958_9031__$1))
{var c__7112__auto___9032 = cljs.core.chunk_first.call(null,seq__8958_9031__$1);{
var G__9033 = cljs.core.chunk_rest.call(null,seq__8958_9031__$1);
var G__9034 = c__7112__auto___9032;
var G__9035 = cljs.core.count.call(null,c__7112__auto___9032);
var G__9036 = 0;
seq__8958_9019 = G__9033;
chunk__8959_9020 = G__9034;
count__8960_9021 = G__9035;
i__8961_9022 = G__9036;
continue;
}
} else
{var vec__8963_9037 = cljs.core.first.call(null,seq__8958_9031__$1);var ev__7756__auto___9038 = cljs.core.nth.call(null,vec__8963_9037,0,null);var func__7757__auto___9039 = cljs.core.nth.call(null,vec__8963_9037,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9038,func__7757__auto___9039);
{
var G__9040 = cljs.core.next.call(null,seq__8958_9031__$1);
var G__9041 = null;
var G__9042 = 0;
var G__9043 = 0;
seq__8958_9019 = G__9040;
chunk__8959_9020 = G__9041;
count__8960_9021 = G__9042;
i__8961_9022 = G__9043;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
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
lt.plugins.chrometools.debugger$.__BEH__remove_breakpoints_on_disconnect = (function __BEH__remove_breakpoints_on_disconnect(this$){var seq__8353 = cljs.core.seq.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"debug.breakpoint","debug.breakpoint",1844714974)));var chunk__8354 = null;var count__8355 = 0;var i__8356 = 0;while(true){
if((i__8356 < count__8355))
{var obj = cljs.core._nth.call(null,chunk__8354,i__8356);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)),this$))
{lt.object.destroy_BANG_.call(null,obj);
} else
{}
{
var G__8530 = seq__8353;
var G__8531 = chunk__8354;
var G__8532 = count__8355;
var G__8533 = (i__8356 + 1);
seq__8353 = G__8530;
chunk__8354 = G__8531;
count__8355 = G__8532;
i__8356 = G__8533;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8353);if(temp__4092__auto__)
{var seq__8353__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8353__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8353__$1);{
var G__8534 = cljs.core.chunk_rest.call(null,seq__8353__$1);
var G__8535 = c__7112__auto__;
var G__8536 = cljs.core.count.call(null,c__7112__auto__);
var G__8537 = 0;
seq__8353 = G__8534;
chunk__8354 = G__8535;
count__8355 = G__8536;
i__8356 = G__8537;
continue;
}
} else
{var obj = cljs.core.first.call(null,seq__8353__$1);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)),this$))
{lt.object.destroy_BANG_.call(null,obj);
} else
{}
{
var G__8538 = cljs.core.next.call(null,seq__8353__$1);
var G__8539 = null;
var G__8540 = 0;
var G__8541 = 0;
seq__8353 = G__8538;
chunk__8354 = G__8539;
count__8355 = G__8540;
i__8356 = G__8541;
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
return (function iter__8361(s__8362){return (new cljs.core.LazySeq(null,((function (parts){
return (function (){var s__8362__$1 = s__8362;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8362__$1);if(temp__4092__auto__)
{var s__8362__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8362__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__8362__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__8364 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__8363 = 0;while(true){
if((i__8363 < size__7080__auto__))
{var source = cljs.core._nth.call(null,c__7079__auto__,i__8363);var source_parts = cljs.core.filter.call(null,cljs.core.not_empty,clojure.string.split.call(null,source,"/"));var l = cljs.core.count.call(null,source_parts);var p = cljs.core.take_last.call(null,l,parts);if(cljs.core._EQ_.call(null,p,source_parts))
{cljs.core.chunk_append.call(null,b__8364,source);
{
var G__8542 = (i__8363 + 1);
i__8363 = G__8542;
continue;
}
} else
{{
var G__8543 = (i__8363 + 1);
i__8363 = G__8543;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8364),iter__8361.call(null,cljs.core.chunk_rest.call(null,s__8362__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8364),null);
}
} else
{var source = cljs.core.first.call(null,s__8362__$2);var source_parts = cljs.core.filter.call(null,cljs.core.not_empty,clojure.string.split.call(null,source,"/"));var l = cljs.core.count.call(null,source_parts);var p = cljs.core.take_last.call(null,l,parts);if(cljs.core._EQ_.call(null,p,source_parts))
{return cljs.core.cons.call(null,source,iter__8361.call(null,cljs.core.rest.call(null,s__8362__$2)));
} else
{{
var G__8544 = cljs.core.rest.call(null,s__8362__$2);
s__8362__$1 = G__8544;
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
lt.plugins.chrometools.debugger$.get_scripts = (function get_scripts(client,id){var iter__7081__auto__ = (function iter__8381(s__8382){return (new cljs.core.LazySeq(null,(function (){var s__8382__$1 = s__8382;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8382__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__8392 = cljs.core.first.call(null,xs__4579__auto__);var _ = cljs.core.nth.call(null,vec__8392,0,null);var vs = cljs.core.nth.call(null,vec__8392,1,null);var iterys__7077__auto__ = ((function (s__8382__$1,vec__8392,_,vs,xs__4579__auto__,temp__4092__auto__){
return (function iter__8383(s__8384){return (new cljs.core.LazySeq(null,((function (s__8382__$1,vec__8392,_,vs,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__8384__$1 = s__8384;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__8384__$1);if(temp__4092__auto____$1)
{var s__8384__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__8384__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__8384__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__8386 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__8385 = 0;while(true){
if((i__8385 < size__7080__auto__))
{var vec__8395 = cljs.core._nth.call(null,c__7079__auto__,i__8385);var ___$1 = cljs.core.nth.call(null,vec__8395,0,null);var vvs = cljs.core.nth.call(null,vec__8395,1,null);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(vvs),id))
{cljs.core.chunk_append.call(null,b__8386,vvs);
{
var G__8545 = (i__8385 + 1);
i__8385 = G__8545;
continue;
}
} else
{{
var G__8546 = (i__8385 + 1);
i__8385 = G__8546;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8386),iter__8383.call(null,cljs.core.chunk_rest.call(null,s__8384__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8386),null);
}
} else
{var vec__8396 = cljs.core.first.call(null,s__8384__$2);var ___$1 = cljs.core.nth.call(null,vec__8396,0,null);var vvs = cljs.core.nth.call(null,vec__8396,1,null);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(vvs),id))
{return cljs.core.cons.call(null,vvs,iter__8383.call(null,cljs.core.rest.call(null,s__8384__$2)));
} else
{{
var G__8547 = cljs.core.rest.call(null,s__8384__$2);
s__8384__$1 = G__8547;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__8382__$1,vec__8392,_,vs,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__8382__$1,vec__8392,_,vs,xs__4579__auto__,temp__4092__auto__))
;var fs__7078__auto__ = cljs.core.seq.call(null,iterys__7077__auto__.call(null,vs));if(fs__7078__auto__)
{return cljs.core.concat.call(null,fs__7078__auto__,iter__8381.call(null,cljs.core.rest.call(null,s__8382__$1)));
} else
{{
var G__8548 = cljs.core.rest.call(null,s__8382__$1);
s__8382__$1 = G__8548;
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
var bound_client__delegate = function (obj,path,f,p__8397){var vec__8400 = p__8397;var map__8401 = cljs.core.nth.call(null,vec__8400,0,null);var map__8401__$1 = ((cljs.core.seq_QMARK_.call(null,map__8401))?cljs.core.apply.call(null,cljs.core.hash_map,map__8401):map__8401);var always_call = cljs.core.get.call(null,map__8401__$1,new cljs.core.Keyword(null,"always-call","always-call",3320573646));var initial = cljs.core.get.call(null,map__8401__$1,new cljs.core.Keyword(null,"initial","initial",2962246326));return crate.binding.bound.call(null,obj,((function (vec__8400,map__8401,map__8401__$1,always_call,initial){
return (function (){var temp__4090__auto__ = new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj));if(cljs.core.truth_(temp__4090__auto__))
{var client = temp__4090__auto__;return f.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,client),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debugger","debugger",1561716627)], null),path)),client);
} else
{if(cljs.core.truth_(always_call))
{return f.call(null,null,null);
} else
{return initial;
}
}
});})(vec__8400,map__8401,map__8401__$1,always_call,initial))
);
};
var bound_client = function (obj,path,f,var_args){
var p__8397 = null;if (arguments.length > 3) {
  p__8397 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return bound_client__delegate.call(this,obj,path,f,p__8397);};
bound_client.cljs$lang$maxFixedArity = 3;
bound_client.cljs$lang$applyTo = (function (arglist__8549){
var obj = cljs.core.first(arglist__8549);
arglist__8549 = cljs.core.next(arglist__8549);
var path = cljs.core.first(arglist__8549);
arglist__8549 = cljs.core.next(arglist__8549);
var f = cljs.core.first(arglist__8549);
var p__8397 = cljs.core.rest(arglist__8549);
return bound_client__delegate(obj,path,f,p__8397);
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
{var iter__7081__auto__ = (function iter__8406(s__8407){return (new cljs.core.LazySeq(null,(function (){var s__8407__$1 = s__8407;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8407__$1);if(temp__4092__auto__)
{var s__8407__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8407__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__8407__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__8409 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__8408 = 0;while(true){
if((i__8408 < size__7080__auto__))
{var var$ = cljs.core._nth.call(null,c__7079__auto__,i__8408);cljs.core.chunk_append.call(null,b__8409,(function (){var desc = lt.plugins.chrometools.debugger$.__GT_var_description.call(null,var$);var className = new cljs.core.Keyword(null,"className","className",1004015509).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"object","object",4285503153).cljs$core$IFn$_invoke$arity$1(var$));var var$__$1 = cljs.core.assoc_in.call(null,var$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",4285503153),new cljs.core.Keyword(null,"name","name",1017277949)], null),desc);var var$__$2 = ((cljs.core.not_EQ_.call(null,className,"Object"))?cljs.core.assoc_in.call(null,var$__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",4285503153),new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"description","description",3584325486)], null),className):var$__$1);return new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(lt.plugins.chrometools.devtools.inspector__GT_result.call(null,client,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),new cljs.core.Keyword(null,"object","object",4285503153).cljs$core$IFn$_invoke$arity$1(var$__$2)], null)], null)));
})());
{
var G__8550 = (i__8408 + 1);
i__8408 = G__8550;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8409),iter__8406.call(null,cljs.core.chunk_rest.call(null,s__8407__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8409),null);
}
} else
{var var$ = cljs.core.first.call(null,s__8407__$2);return cljs.core.cons.call(null,(function (){var desc = lt.plugins.chrometools.debugger$.__GT_var_description.call(null,var$);var className = new cljs.core.Keyword(null,"className","className",1004015509).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"object","object",4285503153).cljs$core$IFn$_invoke$arity$1(var$));var var$__$1 = cljs.core.assoc_in.call(null,var$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",4285503153),new cljs.core.Keyword(null,"name","name",1017277949)], null),desc);var var$__$2 = ((cljs.core.not_EQ_.call(null,className,"Object"))?cljs.core.assoc_in.call(null,var$__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",4285503153),new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"description","description",3584325486)], null),className):var$__$1);return new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(lt.plugins.chrometools.devtools.inspector__GT_result.call(null,client,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),new cljs.core.Keyword(null,"object","object",4285503153).cljs$core$IFn$_invoke$arity$1(var$__$2)], null)], null)));
})(),iter__8406.call(null,cljs.core.rest.call(null,s__8407__$2)));
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
lt.plugins.chrometools.debugger$.call_frame_location = (function call_frame_location(panel,frame){var e__7755__auto__ = crate.core.html.call(null,(function (){var location = lt.plugins.chrometools.debugger$.location__GT_source.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,panel)),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(frame));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"source"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"source-file"], null),new cljs.core.Keyword(null,"source","source",4412365709).cljs$core$IFn$_invoke$arity$1(location)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"source-location"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"source-line"], null),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(location)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"source-col"], null),new cljs.core.Keyword(null,"column","column",3954034376).cljs$core$IFn$_invoke$arity$1(location)], null)], null)], null);
})());var seq__8416_8551 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7755__auto__){
return (function (){return lt.plugins.chrometools.debugger$.jump_to_location.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,panel)),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(frame));
});})(e__7755__auto__))
], null)));var chunk__8417_8552 = null;var count__8418_8553 = 0;var i__8419_8554 = 0;while(true){
if((i__8419_8554 < count__8418_8553))
{var vec__8420_8555 = cljs.core._nth.call(null,chunk__8417_8552,i__8419_8554);var ev__7756__auto___8556 = cljs.core.nth.call(null,vec__8420_8555,0,null);var func__7757__auto___8557 = cljs.core.nth.call(null,vec__8420_8555,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8556,func__7757__auto___8557);
{
var G__8558 = seq__8416_8551;
var G__8559 = chunk__8417_8552;
var G__8560 = count__8418_8553;
var G__8561 = (i__8419_8554 + 1);
seq__8416_8551 = G__8558;
chunk__8417_8552 = G__8559;
count__8418_8553 = G__8560;
i__8419_8554 = G__8561;
continue;
}
} else
{var temp__4092__auto___8562 = cljs.core.seq.call(null,seq__8416_8551);if(temp__4092__auto___8562)
{var seq__8416_8563__$1 = temp__4092__auto___8562;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8416_8563__$1))
{var c__7112__auto___8564 = cljs.core.chunk_first.call(null,seq__8416_8563__$1);{
var G__8565 = cljs.core.chunk_rest.call(null,seq__8416_8563__$1);
var G__8566 = c__7112__auto___8564;
var G__8567 = cljs.core.count.call(null,c__7112__auto___8564);
var G__8568 = 0;
seq__8416_8551 = G__8565;
chunk__8417_8552 = G__8566;
count__8418_8553 = G__8567;
i__8419_8554 = G__8568;
continue;
}
} else
{var vec__8421_8569 = cljs.core.first.call(null,seq__8416_8563__$1);var ev__7756__auto___8570 = cljs.core.nth.call(null,vec__8421_8569,0,null);var func__7757__auto___8571 = cljs.core.nth.call(null,vec__8421_8569,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8570,func__7757__auto___8571);
{
var G__8572 = cljs.core.next.call(null,seq__8416_8563__$1);
var G__8573 = null;
var G__8574 = 0;
var G__8575 = 0;
seq__8416_8551 = G__8572;
chunk__8417_8552 = G__8573;
count__8418_8553 = G__8574;
i__8419_8554 = G__8575;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.plugins.chrometools.debugger$.call_frame = (function call_frame(panel,frame){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),lt.plugins.chrometools.debugger$.bound_client.call(null,panel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-frame","selected-frame",1773798189)], null),(function (p1__8422_SHARP_){if(cljs.core._EQ_.call(null,p1__8422_SHARP_,frame))
{return "selected";
} else
{return "";
}
}))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"frame-name"], null),lt.plugins.chrometools.debugger$.__GT_call_frame_name.call(null,frame)], null),lt.plugins.chrometools.debugger$.call_frame_location.call(null,panel,frame)], null));var seq__8429_8576 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7755__auto__){
return (function (){var client = new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,panel));return lt.plugins.chrometools.debugger$.select_call_frame.call(null,client,frame);
});})(e__7755__auto__))
], null)));var chunk__8430_8577 = null;var count__8431_8578 = 0;var i__8432_8579 = 0;while(true){
if((i__8432_8579 < count__8431_8578))
{var vec__8433_8580 = cljs.core._nth.call(null,chunk__8430_8577,i__8432_8579);var ev__7756__auto___8581 = cljs.core.nth.call(null,vec__8433_8580,0,null);var func__7757__auto___8582 = cljs.core.nth.call(null,vec__8433_8580,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8581,func__7757__auto___8582);
{
var G__8583 = seq__8429_8576;
var G__8584 = chunk__8430_8577;
var G__8585 = count__8431_8578;
var G__8586 = (i__8432_8579 + 1);
seq__8429_8576 = G__8583;
chunk__8430_8577 = G__8584;
count__8431_8578 = G__8585;
i__8432_8579 = G__8586;
continue;
}
} else
{var temp__4092__auto___8587 = cljs.core.seq.call(null,seq__8429_8576);if(temp__4092__auto___8587)
{var seq__8429_8588__$1 = temp__4092__auto___8587;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8429_8588__$1))
{var c__7112__auto___8589 = cljs.core.chunk_first.call(null,seq__8429_8588__$1);{
var G__8590 = cljs.core.chunk_rest.call(null,seq__8429_8588__$1);
var G__8591 = c__7112__auto___8589;
var G__8592 = cljs.core.count.call(null,c__7112__auto___8589);
var G__8593 = 0;
seq__8429_8576 = G__8590;
chunk__8430_8577 = G__8591;
count__8431_8578 = G__8592;
i__8432_8579 = G__8593;
continue;
}
} else
{var vec__8434_8594 = cljs.core.first.call(null,seq__8429_8588__$1);var ev__7756__auto___8595 = cljs.core.nth.call(null,vec__8434_8594,0,null);var func__7757__auto___8596 = cljs.core.nth.call(null,vec__8434_8594,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8595,func__7757__auto___8596);
{
var G__8597 = cljs.core.next.call(null,seq__8429_8588__$1);
var G__8598 = null;
var G__8599 = 0;
var G__8600 = 0;
seq__8429_8576 = G__8597;
chunk__8430_8577 = G__8598;
count__8431_8578 = G__8599;
i__8432_8579 = G__8600;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.plugins.chrometools.debugger$.debug_panel_resume = (function debug_panel_resume(this$){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"resume"], null),lt.plugins.chrometools.debugger$.bound_client.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused?","paused?",4518674499)], null),(function (p1__8435_SHARP_){if(cljs.core.truth_(p1__8435_SHARP_))
{return "\u25B6";
} else
{return "=";
}
}))], null));var seq__8442_8601 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7755__auto__){
return (function (){var client = new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var c = (cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",4518674499).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"debugger","debugger",1561716627).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))))?new cljs.core.Keyword(null,"resume-debugger","resume-debugger",4240016691):new cljs.core.Keyword(null,"pause-debugger","pause-debugger",1706137994));return lt.objs.sidebar.command.exec_BANG_.call(null,c,client);
});})(e__7755__auto__))
], null)));var chunk__8443_8602 = null;var count__8444_8603 = 0;var i__8445_8604 = 0;while(true){
if((i__8445_8604 < count__8444_8603))
{var vec__8446_8605 = cljs.core._nth.call(null,chunk__8443_8602,i__8445_8604);var ev__7756__auto___8606 = cljs.core.nth.call(null,vec__8446_8605,0,null);var func__7757__auto___8607 = cljs.core.nth.call(null,vec__8446_8605,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8606,func__7757__auto___8607);
{
var G__8608 = seq__8442_8601;
var G__8609 = chunk__8443_8602;
var G__8610 = count__8444_8603;
var G__8611 = (i__8445_8604 + 1);
seq__8442_8601 = G__8608;
chunk__8443_8602 = G__8609;
count__8444_8603 = G__8610;
i__8445_8604 = G__8611;
continue;
}
} else
{var temp__4092__auto___8612 = cljs.core.seq.call(null,seq__8442_8601);if(temp__4092__auto___8612)
{var seq__8442_8613__$1 = temp__4092__auto___8612;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8442_8613__$1))
{var c__7112__auto___8614 = cljs.core.chunk_first.call(null,seq__8442_8613__$1);{
var G__8615 = cljs.core.chunk_rest.call(null,seq__8442_8613__$1);
var G__8616 = c__7112__auto___8614;
var G__8617 = cljs.core.count.call(null,c__7112__auto___8614);
var G__8618 = 0;
seq__8442_8601 = G__8615;
chunk__8443_8602 = G__8616;
count__8444_8603 = G__8617;
i__8445_8604 = G__8618;
continue;
}
} else
{var vec__8447_8619 = cljs.core.first.call(null,seq__8442_8613__$1);var ev__7756__auto___8620 = cljs.core.nth.call(null,vec__8447_8619,0,null);var func__7757__auto___8621 = cljs.core.nth.call(null,vec__8447_8619,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8620,func__7757__auto___8621);
{
var G__8622 = cljs.core.next.call(null,seq__8442_8613__$1);
var G__8623 = null;
var G__8624 = 0;
var G__8625 = 0;
seq__8442_8601 = G__8622;
chunk__8443_8602 = G__8623;
count__8444_8603 = G__8624;
i__8445_8604 = G__8625;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.plugins.chrometools.debugger$.reconnect_button = (function reconnect_button(this$){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"reconnect-button"], null),"Reconnect"], null));var seq__8454_8626 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7755__auto__){
return (function (){var tab = new cljs.core.Keyword(null,"reconnect-tab","reconnect-tab",3800973201).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"chrome.client.remote","chrome.client.remote",4091478727));return lt.plugins.chrometools.connect_tab.call(null,client,tab);
});})(e__7755__auto__))
], null)));var chunk__8455_8627 = null;var count__8456_8628 = 0;var i__8457_8629 = 0;while(true){
if((i__8457_8629 < count__8456_8628))
{var vec__8458_8630 = cljs.core._nth.call(null,chunk__8455_8627,i__8457_8629);var ev__7756__auto___8631 = cljs.core.nth.call(null,vec__8458_8630,0,null);var func__7757__auto___8632 = cljs.core.nth.call(null,vec__8458_8630,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8631,func__7757__auto___8632);
{
var G__8633 = seq__8454_8626;
var G__8634 = chunk__8455_8627;
var G__8635 = count__8456_8628;
var G__8636 = (i__8457_8629 + 1);
seq__8454_8626 = G__8633;
chunk__8455_8627 = G__8634;
count__8456_8628 = G__8635;
i__8457_8629 = G__8636;
continue;
}
} else
{var temp__4092__auto___8637 = cljs.core.seq.call(null,seq__8454_8626);if(temp__4092__auto___8637)
{var seq__8454_8638__$1 = temp__4092__auto___8637;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8454_8638__$1))
{var c__7112__auto___8639 = cljs.core.chunk_first.call(null,seq__8454_8638__$1);{
var G__8640 = cljs.core.chunk_rest.call(null,seq__8454_8638__$1);
var G__8641 = c__7112__auto___8639;
var G__8642 = cljs.core.count.call(null,c__7112__auto___8639);
var G__8643 = 0;
seq__8454_8626 = G__8640;
chunk__8455_8627 = G__8641;
count__8456_8628 = G__8642;
i__8457_8629 = G__8643;
continue;
}
} else
{var vec__8459_8644 = cljs.core.first.call(null,seq__8454_8638__$1);var ev__7756__auto___8645 = cljs.core.nth.call(null,vec__8459_8644,0,null);var func__7757__auto___8646 = cljs.core.nth.call(null,vec__8459_8644,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8645,func__7757__auto___8646);
{
var G__8647 = cljs.core.next.call(null,seq__8454_8638__$1);
var G__8648 = null;
var G__8649 = 0;
var G__8650 = 0;
seq__8454_8626 = G__8647;
chunk__8455_8627 = G__8648;
count__8456_8628 = G__8649;
i__8457_8629 = G__8650;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.plugins.chrometools.debugger$.debug_panel_stepover = (function debug_panel_stepover(this$){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"stepover"], null),"\u21B4"], null));var seq__8466_8651 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7755__auto__){
return (function (){var client = new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"step-over","step-over",2312612519),client);
});})(e__7755__auto__))
], null)));var chunk__8467_8652 = null;var count__8468_8653 = 0;var i__8469_8654 = 0;while(true){
if((i__8469_8654 < count__8468_8653))
{var vec__8470_8655 = cljs.core._nth.call(null,chunk__8467_8652,i__8469_8654);var ev__7756__auto___8656 = cljs.core.nth.call(null,vec__8470_8655,0,null);var func__7757__auto___8657 = cljs.core.nth.call(null,vec__8470_8655,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8656,func__7757__auto___8657);
{
var G__8658 = seq__8466_8651;
var G__8659 = chunk__8467_8652;
var G__8660 = count__8468_8653;
var G__8661 = (i__8469_8654 + 1);
seq__8466_8651 = G__8658;
chunk__8467_8652 = G__8659;
count__8468_8653 = G__8660;
i__8469_8654 = G__8661;
continue;
}
} else
{var temp__4092__auto___8662 = cljs.core.seq.call(null,seq__8466_8651);if(temp__4092__auto___8662)
{var seq__8466_8663__$1 = temp__4092__auto___8662;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8466_8663__$1))
{var c__7112__auto___8664 = cljs.core.chunk_first.call(null,seq__8466_8663__$1);{
var G__8665 = cljs.core.chunk_rest.call(null,seq__8466_8663__$1);
var G__8666 = c__7112__auto___8664;
var G__8667 = cljs.core.count.call(null,c__7112__auto___8664);
var G__8668 = 0;
seq__8466_8651 = G__8665;
chunk__8467_8652 = G__8666;
count__8468_8653 = G__8667;
i__8469_8654 = G__8668;
continue;
}
} else
{var vec__8471_8669 = cljs.core.first.call(null,seq__8466_8663__$1);var ev__7756__auto___8670 = cljs.core.nth.call(null,vec__8471_8669,0,null);var func__7757__auto___8671 = cljs.core.nth.call(null,vec__8471_8669,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8670,func__7757__auto___8671);
{
var G__8672 = cljs.core.next.call(null,seq__8466_8663__$1);
var G__8673 = null;
var G__8674 = 0;
var G__8675 = 0;
seq__8466_8651 = G__8672;
chunk__8467_8652 = G__8673;
count__8468_8653 = G__8674;
i__8469_8654 = G__8675;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.plugins.chrometools.debugger$.debug_panel_stepin = (function debug_panel_stepin(this$){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"stepinto"], null),"\u2193"], null));var seq__8478_8676 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7755__auto__){
return (function (){var client = new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"step-into","step-into",2312426547),client);
});})(e__7755__auto__))
], null)));var chunk__8479_8677 = null;var count__8480_8678 = 0;var i__8481_8679 = 0;while(true){
if((i__8481_8679 < count__8480_8678))
{var vec__8482_8680 = cljs.core._nth.call(null,chunk__8479_8677,i__8481_8679);var ev__7756__auto___8681 = cljs.core.nth.call(null,vec__8482_8680,0,null);var func__7757__auto___8682 = cljs.core.nth.call(null,vec__8482_8680,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8681,func__7757__auto___8682);
{
var G__8683 = seq__8478_8676;
var G__8684 = chunk__8479_8677;
var G__8685 = count__8480_8678;
var G__8686 = (i__8481_8679 + 1);
seq__8478_8676 = G__8683;
chunk__8479_8677 = G__8684;
count__8480_8678 = G__8685;
i__8481_8679 = G__8686;
continue;
}
} else
{var temp__4092__auto___8687 = cljs.core.seq.call(null,seq__8478_8676);if(temp__4092__auto___8687)
{var seq__8478_8688__$1 = temp__4092__auto___8687;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8478_8688__$1))
{var c__7112__auto___8689 = cljs.core.chunk_first.call(null,seq__8478_8688__$1);{
var G__8690 = cljs.core.chunk_rest.call(null,seq__8478_8688__$1);
var G__8691 = c__7112__auto___8689;
var G__8692 = cljs.core.count.call(null,c__7112__auto___8689);
var G__8693 = 0;
seq__8478_8676 = G__8690;
chunk__8479_8677 = G__8691;
count__8480_8678 = G__8692;
i__8481_8679 = G__8693;
continue;
}
} else
{var vec__8483_8694 = cljs.core.first.call(null,seq__8478_8688__$1);var ev__7756__auto___8695 = cljs.core.nth.call(null,vec__8483_8694,0,null);var func__7757__auto___8696 = cljs.core.nth.call(null,vec__8483_8694,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8695,func__7757__auto___8696);
{
var G__8697 = cljs.core.next.call(null,seq__8478_8688__$1);
var G__8698 = null;
var G__8699 = 0;
var G__8700 = 0;
seq__8478_8676 = G__8697;
chunk__8479_8677 = G__8698;
count__8480_8678 = G__8699;
i__8481_8679 = G__8700;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.plugins.chrometools.debugger$.debug_panel_stepout = (function debug_panel_stepout(this$){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"stepout"], null),"\u2191"], null));var seq__8490_8701 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7755__auto__){
return (function (){var client = new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"step-out","step-out",2441271359),client);
});})(e__7755__auto__))
], null)));var chunk__8491_8702 = null;var count__8492_8703 = 0;var i__8493_8704 = 0;while(true){
if((i__8493_8704 < count__8492_8703))
{var vec__8494_8705 = cljs.core._nth.call(null,chunk__8491_8702,i__8493_8704);var ev__7756__auto___8706 = cljs.core.nth.call(null,vec__8494_8705,0,null);var func__7757__auto___8707 = cljs.core.nth.call(null,vec__8494_8705,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8706,func__7757__auto___8707);
{
var G__8708 = seq__8490_8701;
var G__8709 = chunk__8491_8702;
var G__8710 = count__8492_8703;
var G__8711 = (i__8493_8704 + 1);
seq__8490_8701 = G__8708;
chunk__8491_8702 = G__8709;
count__8492_8703 = G__8710;
i__8493_8704 = G__8711;
continue;
}
} else
{var temp__4092__auto___8712 = cljs.core.seq.call(null,seq__8490_8701);if(temp__4092__auto___8712)
{var seq__8490_8713__$1 = temp__4092__auto___8712;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8490_8713__$1))
{var c__7112__auto___8714 = cljs.core.chunk_first.call(null,seq__8490_8713__$1);{
var G__8715 = cljs.core.chunk_rest.call(null,seq__8490_8713__$1);
var G__8716 = c__7112__auto___8714;
var G__8717 = cljs.core.count.call(null,c__7112__auto___8714);
var G__8718 = 0;
seq__8490_8701 = G__8715;
chunk__8491_8702 = G__8716;
count__8492_8703 = G__8717;
i__8493_8704 = G__8718;
continue;
}
} else
{var vec__8495_8719 = cljs.core.first.call(null,seq__8490_8713__$1);var ev__7756__auto___8720 = cljs.core.nth.call(null,vec__8495_8719,0,null);var func__7757__auto___8721 = cljs.core.nth.call(null,vec__8495_8719,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8720,func__7757__auto___8721);
{
var G__8722 = cljs.core.next.call(null,seq__8490_8713__$1);
var G__8723 = null;
var G__8724 = 0;
var G__8725 = 0;
seq__8490_8701 = G__8722;
chunk__8491_8702 = G__8723;
count__8492_8703 = G__8724;
i__8493_8704 = G__8725;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
/**
* Create call-frame UI elements
*/
lt.plugins.chrometools.debugger$.create_call_frames = (function create_call_frames(panel,frames){if(cljs.core.truth_(frames))
{var iter__7081__auto__ = (function iter__8500(s__8501){return (new cljs.core.LazySeq(null,(function (){var s__8501__$1 = s__8501;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8501__$1);if(temp__4092__auto__)
{var s__8501__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8501__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__8501__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__8503 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__8502 = 0;while(true){
if((i__8502 < size__7080__auto__))
{var frame = cljs.core._nth.call(null,c__7079__auto__,i__8502);cljs.core.chunk_append.call(null,b__8503,lt.plugins.chrometools.debugger$.call_frame.call(null,panel,frame));
{
var G__8726 = (i__8502 + 1);
i__8502 = G__8726;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8503),iter__8500.call(null,cljs.core.chunk_rest.call(null,s__8501__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8503),null);
}
} else
{var frame = cljs.core.first.call(null,s__8501__$2);return cljs.core.cons.call(null,lt.plugins.chrometools.debugger$.call_frame.call(null,panel,frame),iter__8500.call(null,cljs.core.rest.call(null,s__8501__$2)));
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
lt.plugins.chrometools.debugger$.debug_panel = (function debug_panel(this$){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"debug-panel"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),lt.plugins.chrometools.debugger$.bound_client.call(null,this$,cljs.core.PersistentVector.EMPTY,cljs.core.partial.call(null,lt.plugins.chrometools.debugger$.debug_panel_classes,this$),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"always-call","always-call",3320573646),true], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),cljs.core.PersistentArrayMap.EMPTY,"Debugger"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"controls"], null),lt.plugins.chrometools.debugger$.debug_panel_resume.call(null,this$),lt.plugins.chrometools.debugger$.debug_panel_stepover.call(null,this$),lt.plugins.chrometools.debugger$.debug_panel_stepin.call(null,this$),lt.plugins.chrometools.debugger$.debug_panel_stepout.call(null,this$),lt.plugins.chrometools.debugger$.reconnect_button.call(null,this$)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"call-stack"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Call Stack"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),lt.plugins.chrometools.debugger$.bound_client.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-frames","call-frames",3247219303)], null),lt.plugins.chrometools.debugger$.__GT_call_frames_class)], null),lt.plugins.chrometools.debugger$.bound_client.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-frames","call-frames",3247219303)], null),(function (p1__8504_SHARP_){return lt.plugins.chrometools.debugger$.create_call_frames.call(null,this$,p1__8504_SHARP_);
}))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"variables"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Scope Variables"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"scope-variables"], null),lt.plugins.chrometools.debugger$.bound_client.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scope-variables","scope-variables",1703262384)], null),(function (p1__8505_SHARP_,p2__8506_SHARP_){return lt.plugins.chrometools.debugger$.__GT_scope_variables.call(null,p1__8505_SHARP_,p2__8506_SHARP_);
}))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"debug-editor"], null),lt.object.__GT_content.call(null,lt.plugins.chrometools.debugger$.debug_editor)], null)], null)], null));var seq__8513_8727 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8514_8728 = null;var count__8515_8729 = 0;var i__8516_8730 = 0;while(true){
if((i__8516_8730 < count__8515_8729))
{var vec__8517_8731 = cljs.core._nth.call(null,chunk__8514_8728,i__8516_8730);var ev__7756__auto___8732 = cljs.core.nth.call(null,vec__8517_8731,0,null);var func__7757__auto___8733 = cljs.core.nth.call(null,vec__8517_8731,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8732,func__7757__auto___8733);
{
var G__8734 = seq__8513_8727;
var G__8735 = chunk__8514_8728;
var G__8736 = count__8515_8729;
var G__8737 = (i__8516_8730 + 1);
seq__8513_8727 = G__8734;
chunk__8514_8728 = G__8735;
count__8515_8729 = G__8736;
i__8516_8730 = G__8737;
continue;
}
} else
{var temp__4092__auto___8738 = cljs.core.seq.call(null,seq__8513_8727);if(temp__4092__auto___8738)
{var seq__8513_8739__$1 = temp__4092__auto___8738;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8513_8739__$1))
{var c__7112__auto___8740 = cljs.core.chunk_first.call(null,seq__8513_8739__$1);{
var G__8741 = cljs.core.chunk_rest.call(null,seq__8513_8739__$1);
var G__8742 = c__7112__auto___8740;
var G__8743 = cljs.core.count.call(null,c__7112__auto___8740);
var G__8744 = 0;
seq__8513_8727 = G__8741;
chunk__8514_8728 = G__8742;
count__8515_8729 = G__8743;
i__8516_8730 = G__8744;
continue;
}
} else
{var vec__8518_8745 = cljs.core.first.call(null,seq__8513_8739__$1);var ev__7756__auto___8746 = cljs.core.nth.call(null,vec__8518_8745,0,null);var func__7757__auto___8747 = cljs.core.nth.call(null,vec__8518_8745,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8746,func__7757__auto___8747);
{
var G__8748 = cljs.core.next.call(null,seq__8513_8739__$1);
var G__8749 = null;
var G__8750 = 0;
var G__8751 = 0;
seq__8513_8727 = G__8748;
chunk__8514_8728 = G__8749;
count__8515_8729 = G__8750;
i__8516_8730 = G__8751;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
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
lt.plugins.chrometools.debugger$.show_debug_sidebar = (function show_debug_sidebar(){if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.sidebar.rightbar)),lt.plugins.chrometools.debugger$.debug_sidebar))
{return lt.object.raise.call(null,lt.objs.sidebar.rightbar,new cljs.core.Keyword(null,"toggle","toggle",4440567494),lt.plugins.chrometools.debugger$.debug_sidebar);
} else
{return null;
}
});
lt.plugins.chrometools.debugger$.__BEH__debugger_paused = (function __BEH__debugger_paused(this$,s){var params = new cljs.core.Keyword(null,"params","params",4313443576).cljs$core$IFn$_invoke$arity$1(s);var reason = new cljs.core.Keyword(null,"reason","reason",4373906870).cljs$core$IFn$_invoke$arity$1(params);var breakpoint = cljs.core.first.call(null,new cljs.core.Keyword(null,"hitBreakpoints","hitBreakpoints",929618049).cljs$core$IFn$_invoke$arity$1(params));var call_frames = new cljs.core.Keyword(null,"callFrames","callFrames",2227904534).cljs$core$IFn$_invoke$arity$1(params);var location = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,call_frames));var file_type = lt.plugins.chrometools.debugger$.source__GT_file_type.call(null,new cljs.core.Keyword(null,"source","source",4412365709).cljs$core$IFn$_invoke$arity$1(lt.plugins.chrometools.debugger$.location__GT_source.call(null,this$,location)));lt.objs.editor.pool.set_syntax.call(null,lt.plugins.chrometools.debugger$.debug_editor,file_type);
lt.object.add_tags.call(null,lt.plugins.chrometools.debugger$.debug_editor,new cljs.core.Keyword(null,"default-tags","default-tags",4612436887).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.chrometools.debugger$.debug_editor)));
lt.object.update_BANG_.call(null,lt.plugins.chrometools.debugger$.debug_editor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client","client",3951159101)], null),cljs.core.assoc,new cljs.core.Keyword(null,"default","default",2558708147),this$);
var scope_chain_8752 = lt.util.cljs.js__GT_clj.call(null,new cljs.core.Keyword(null,"scopeChain","scopeChain",796553279).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,call_frames)));cljs.core.add_watch.call(null,this$,lt.plugins.chrometools.debugger$.watch_key,((function (scope_chain_8752,params,reason,breakpoint,call_frames,location,file_type){
return (function (_,___$1,___$2,___$3){return lt.object.merge_BANG_.call(null,lt.plugins.chrometools.debugger$.debug_sidebar,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refresh","refresh",2099349069),true], null));
});})(scope_chain_8752,params,reason,breakpoint,call_frames,location,file_type))
);
lt.object.merge_BANG_.call(null,lt.plugins.chrometools.debugger$.debug_sidebar,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client","client",3951159101),this$], null));
lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debugger","debugger",1561716627)], null),cljs.core.assoc,new cljs.core.Keyword(null,"paused?","paused?",4518674499),true,new cljs.core.Keyword(null,"call-frames","call-frames",3247219303),call_frames);
lt.plugins.chrometools.debugger$.select_call_frame.call(null,this$,cljs.core.first.call(null,call_frames));
lt.plugins.chrometools.debugger$.show_debug_sidebar.call(null);
if(cljs.core.truth_(breakpoint))
{return lt.plugins.chrometools.debugger$.jump_to_bp.call(null,this$,breakpoint);
} else
{return lt.plugins.chrometools.debugger$.jump_to_location.call(null,this$,new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,call_frames)),true);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chrometools.debugger","debugger-paused","lt.plugins.chrometools.debugger/debugger-paused",2347448394),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chrometools.debugger$.__BEH__debugger_paused,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Debugger.paused","Debugger.paused",1114783469),null], null), null));
lt.plugins.chrometools.debugger$.__BEH__debugger_resumed = (function __BEH__debugger_resumed(client){var temp__4092__auto___8753 = cljs.core.get_in.call(null,cljs.core.deref.call(null,client),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debugger","debugger",1561716627),new cljs.core.Keyword(null,"paused-at","paused-at",1843746980)], null));if(cljs.core.truth_(temp__4092__auto___8753))
{var paused_at_8754 = temp__4092__auto___8753;lt.objs.editor.__GT_cm_ed.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(paused_at_8754)).removeLineClass(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(paused_at_8754),"wrapper","breakpoint-paused");
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
lt.plugins.chrometools.debugger$.get_editor_by_filename = (function get_editor_by_filename(filename){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__8519_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__8519_SHARP_))),filename);
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
var G__8755 = null;
var G__8755__0 = (function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"pause-debugger","pause-debugger",1706137994),lt.plugins.chrometools.debugger$.get_current_client.call(null));
});
var G__8755__1 = (function (client){return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.pause"], null),lt.plugins.chrometools.debugger$.display_error);
});
G__8755 = function(client){
switch(arguments.length){
case 0:
return G__8755__0.call(this);
case 1:
return G__8755__1.call(this,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8755;
})()
], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"resume-debugger","resume-debugger",4240016691),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Debugger - Resume",new cljs.core.Keyword(null,"exec","exec",1017031683),(function() {
var G__8756 = null;
var G__8756__0 = (function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"resume-debugger","resume-debugger",4240016691),lt.plugins.chrometools.debugger$.get_current_client.call(null));
});
var G__8756__1 = (function (client){return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.resume"], null),(function (result){var temp__4092__auto__ = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(result));if(cljs.core.truth_(temp__4092__auto__))
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
G__8756 = function(client){
switch(arguments.length){
case 0:
return G__8756__0.call(this);
case 1:
return G__8756__1.call(this,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8756;
})()
], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"step-into","step-into",2312426547),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Debugger - Step Into",new cljs.core.Keyword(null,"exec","exec",1017031683),(function() {
var G__8757 = null;
var G__8757__0 = (function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"step-into","step-into",2312426547),lt.plugins.chrometools.debugger$.get_current_client.call(null));
});
var G__8757__1 = (function (client){return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.stepInto"], null),lt.plugins.chrometools.debugger$.display_error);
});
G__8757 = function(client){
switch(arguments.length){
case 0:
return G__8757__0.call(this);
case 1:
return G__8757__1.call(this,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8757;
})()
], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"step-out","step-out",2441271359),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Debugger - Step Out",new cljs.core.Keyword(null,"exec","exec",1017031683),(function() {
var G__8758 = null;
var G__8758__0 = (function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"step-out","step-out",2441271359),lt.plugins.chrometools.debugger$.get_current_client.call(null));
});
var G__8758__1 = (function (client){return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.stepOut"], null),lt.plugins.chrometools.debugger$.display_error);
});
G__8758 = function(client){
switch(arguments.length){
case 0:
return G__8758__0.call(this);
case 1:
return G__8758__1.call(this,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8758;
})()
], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"step-over","step-over",2312612519),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Debugger - Step Over",new cljs.core.Keyword(null,"exec","exec",1017031683),(function() {
var G__8759 = null;
var G__8759__0 = (function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"step-over","step-over",2312612519),lt.plugins.chrometools.debugger$.get_current_client.call(null));
});
var G__8759__1 = (function (client){return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.stepOver"], null),lt.plugins.chrometools.debugger$.display_error);
});
G__8759 = function(client){
switch(arguments.length){
case 0:
return G__8759__0.call(this);
case 1:
return G__8759__1.call(this,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8759;
})()
], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"step-over","step-over",2312612519),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Debugger - Step Over",new cljs.core.Keyword(null,"exec","exec",1017031683),(function() {
var G__8760 = null;
var G__8760__0 = (function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"step-over","step-over",2312612519),lt.plugins.chrometools.debugger$.get_current_client.call(null));
});
var G__8760__1 = (function (client){return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.stepOver"], null),lt.plugins.chrometools.debugger$.display_error);
});
G__8760 = function(client){
switch(arguments.length){
case 0:
return G__8760__0.call(this);
case 1:
return G__8760__1.call(this,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8760;
})()
], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"activate-breakpoints","activate-breakpoints",4436508730),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Debugger - Activate Breakpoints",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function() {
var G__8761 = null;
var G__8761__0 = (function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"activate-breakpoints","activate-breakpoints",4436508730),lt.plugins.chrometools.debugger$.get_current_client.call(null));
});
var G__8761__1 = (function (client){return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.setBreakpointsActive",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),true], null)], null));
});
G__8761 = function(client){
switch(arguments.length){
case 0:
return G__8761__0.call(this);
case 1:
return G__8761__1.call(this,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8761;
})()
], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"deactivate-breakpoints","deactivate-breakpoints",2365948475),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Debugger - De-activate Breakpoints",new cljs.core.Keyword(null,"exec","exec",1017031683),(function() {
var G__8762 = null;
var G__8762__0 = (function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"activate-breakpoints","activate-breakpoints",4436508730),lt.plugins.chrometools.debugger$.get_current_client.call(null));
});
var G__8762__1 = (function (client){return lt.plugins.chrometools.send.call(null,client,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chrometools.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.setBreakpointsActive",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),false], null)], null));
});
G__8762 = function(client){
switch(arguments.length){
case 0:
return G__8762__0.call(this);
case 1:
return G__8762__1.call(this,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8762;
})()
], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"watch-file","watch-file",867430188),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Watch file for changes",new cljs.core.Keyword(null,"exec","exec",1017031683),(function() {
var G__8763 = null;
var G__8763__0 = (function (){var client = lt.plugins.chrometools.debugger$.get_current_client.call(null);if(cljs.core.truth_(client))
{return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"watch-file","watch-file",867430188),client);
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"Connect a client before adding watches");
}
});
var G__8763__1 = (function (client){return lt.plugins.chrometools.filewatch.open_file.call(null,client);
});
G__8763 = function(client){
switch(arguments.length){
case 0:
return G__8763__0.call(this);
case 1:
return G__8763__1.call(this,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8763;
})()
], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"watch-folder","watch-folder",1991802526),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Watch folder for changes",new cljs.core.Keyword(null,"exec","exec",1017031683),(function() {
var G__8764 = null;
var G__8764__0 = (function (){var client = lt.plugins.chrometools.debugger$.get_current_client.call(null);if(cljs.core.truth_(client))
{return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"watch-folder","watch-folder",1991802526),client);
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"Connect a client before adding watches");
}
});
var G__8764__1 = (function (client){return lt.plugins.chrometools.filewatch.open_folder.call(null,client);
});
G__8764 = function(client){
switch(arguments.length){
case 0:
return G__8764__0.call(this);
case 1:
return G__8764__1.call(this,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8764;
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
return (function (p1__7905_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__7905_SHARP_),name);
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
lt.plugins.chrometools.console.__BEH__console_log = (function __BEH__console_log(this$,m){var id = lt.object.__GT_id.call(null,this$);var type = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",4313443576).cljs$core$IFn$_invoke$arity$1(m)));var msg = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",4313443576).cljs$core$IFn$_invoke$arity$1(m));var msg__$1 = cljs.core.assoc.call(null,msg,new cljs.core.Keyword(null,"client","client",3951159101),this$);var group = lt.plugins.chrometools.console.get_current_group.call(null,id);var G__7907 = type;if(cljs.core._EQ_.call(null,"log",G__7907))
{if(cljs.core._EQ_.call(null,group,lt.plugins.chrometools.lttools_group_name))
{return lt.plugins.chrometools.console.handle_watch_result.call(null,this$,msg__$1);
} else
{return lt.plugins.chrometools.console.handle_log_msg.call(null,msg__$1);
}
} else
{if(cljs.core._EQ_.call(null,"endGroup",G__7907))
{return cljs.core.swap_BANG_.call(null,lt.plugins.chrometools.console.group_stack,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),cljs.core.pop);
} else
{if(cljs.core._EQ_.call(null,"startGroup",G__7907))
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
return (function iter__7912(s__7913){return (new cljs.core.LazySeq(null,((function (params,client){
return (function (){var s__7913__$1 = s__7913;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7913__$1);if(temp__4092__auto__)
{var s__7913__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7913__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__7913__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__7915 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__7914 = 0;while(true){
if((i__7914 < size__7080__auto__))
{var p = cljs.core._nth.call(null,c__7079__auto__,i__7914);cljs.core.chunk_append.call(null,b__7915,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.log-val","span.log-val",3645418982),(cljs.core.truth_((function (){var and__6352__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p),"object");if(and__6352__auto__)
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
var G__7944 = (i__7914 + 1);
i__7914 = G__7944;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7915),iter__7912.call(null,cljs.core.chunk_rest.call(null,s__7913__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7915),null);
}
} else
{var p = cljs.core.first.call(null,s__7913__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.log-val","span.log-val",3645418982),(cljs.core.truth_((function (){var and__6352__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p),"object");if(and__6352__auto__)
{var and__6352__auto____$1 = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p);if(cljs.core.truth_(and__6352__auto____$1))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(p)));
} else
{return and__6352__auto____$1;
}
} else
{return and__6352__auto__;
}
})())?"null":((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p),"object"))?lt.object.__GT_content.call(null,lt.plugins.chrometools.devtools.make_inspector_object.call(null,client,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),p], null))):((new cljs.core.Keyword(null,"else","else",1017020587))?new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(p)):null)))], null),iter__7912.call(null,cljs.core.rest.call(null,s__7913__$2)));
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
lt.plugins.chrometools.console.frame = (function frame(f){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.url","td.url",4428724323),lt.objs.files.basename.call(null,new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(f))," [",new cljs.core.Keyword(null,"lineNumber","lineNumber",684762063).cljs$core$IFn$_invoke$arity$1(f),"]"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"functionName","functionName",802531829).cljs$core$IFn$_invoke$arity$1(f)))?"anonymous":new cljs.core.Keyword(null,"functionName","functionName",802531829).cljs$core$IFn$_invoke$arity$1(f))], null)], null));var seq__7922_7945 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__7923_7946 = null;var count__7924_7947 = 0;var i__7925_7948 = 0;while(true){
if((i__7925_7948 < count__7924_7947))
{var vec__7926_7949 = cljs.core._nth.call(null,chunk__7923_7946,i__7925_7948);var ev__7756__auto___7950 = cljs.core.nth.call(null,vec__7926_7949,0,null);var func__7757__auto___7951 = cljs.core.nth.call(null,vec__7926_7949,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___7950,func__7757__auto___7951);
{
var G__7952 = seq__7922_7945;
var G__7953 = chunk__7923_7946;
var G__7954 = count__7924_7947;
var G__7955 = (i__7925_7948 + 1);
seq__7922_7945 = G__7952;
chunk__7923_7946 = G__7953;
count__7924_7947 = G__7954;
i__7925_7948 = G__7955;
continue;
}
} else
{var temp__4092__auto___7956 = cljs.core.seq.call(null,seq__7922_7945);if(temp__4092__auto___7956)
{var seq__7922_7957__$1 = temp__4092__auto___7956;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7922_7957__$1))
{var c__7112__auto___7958 = cljs.core.chunk_first.call(null,seq__7922_7957__$1);{
var G__7959 = cljs.core.chunk_rest.call(null,seq__7922_7957__$1);
var G__7960 = c__7112__auto___7958;
var G__7961 = cljs.core.count.call(null,c__7112__auto___7958);
var G__7962 = 0;
seq__7922_7945 = G__7959;
chunk__7923_7946 = G__7960;
count__7924_7947 = G__7961;
i__7925_7948 = G__7962;
continue;
}
} else
{var vec__7927_7963 = cljs.core.first.call(null,seq__7922_7957__$1);var ev__7756__auto___7964 = cljs.core.nth.call(null,vec__7927_7963,0,null);var func__7757__auto___7965 = cljs.core.nth.call(null,vec__7927_7963,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___7964,func__7757__auto___7965);
{
var G__7966 = cljs.core.next.call(null,seq__7922_7957__$1);
var G__7967 = null;
var G__7968 = 0;
var G__7969 = 0;
seq__7922_7945 = G__7966;
chunk__7923_7946 = G__7967;
count__7924_7947 = G__7968;
i__7925_7948 = G__7969;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.plugins.chrometools.console.handle_log_msg = (function (){var method_table__7222__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__7223__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__7224__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__7225__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__7226__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle-log-msg",new cljs.core.Keyword(null,"level","level",1116770038),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__7226__auto__,method_table__7222__auto__,prefer_table__7223__auto__,method_cache__7224__auto__,cached_hierarchy__7225__auto__));
})();
lt.plugins.chrometools.console.valid_error_QMARK_ = (function valid_error_QMARK_(text){var text__$1 = text.toLowerCase();return cljs.core.every_QMARK_.call(null,((function (text__$1){
return (function (p1__7928_SHARP_){return cljs.core._EQ_.call(null,-1,text__$1.indexOf(p1__7928_SHARP_));
});})(text__$1))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["failed to load resource: http://app.kodowa.com"], null));
});
cljs.core._add_method.call(null,lt.plugins.chrometools.console.handle_log_msg,"error",(function (msg){if(lt.plugins.chrometools.console.valid_error_QMARK_.call(null,[cljs.core.str(new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str(": "),cljs.core.str(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(msg))].join('')))
{var top = cljs.core.first.call(null,new cljs.core.Keyword(null,"stackTrace","stackTrace",3040184079).cljs$core$IFn$_invoke$arity$1(msg));return lt.objs.console.verbatim.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",1013907517),new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(msg),(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(top))?null:[cljs.core.str(": "),cljs.core.str(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(msg))].join(''))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),(function (){var iter__7081__auto__ = ((function (top){
return (function iter__7929(s__7930){return (new cljs.core.LazySeq(null,((function (top){
return (function (){var s__7930__$1 = s__7930;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7930__$1);if(temp__4092__auto__)
{var s__7930__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7930__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__7930__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__7932 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__7931 = 0;while(true){
if((i__7931 < size__7080__auto__))
{var f = cljs.core._nth.call(null,c__7079__auto__,i__7931);cljs.core.chunk_append.call(null,b__7932,lt.plugins.chrometools.console.frame.call(null,f));
{
var G__7970 = (i__7931 + 1);
i__7931 = G__7970;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7932),iter__7929.call(null,cljs.core.chunk_rest.call(null,s__7930__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7932),null);
}
} else
{var f = cljs.core.first.call(null,s__7930__$2);return cljs.core.cons.call(null,lt.plugins.chrometools.console.frame.call(null,f),iter__7929.call(null,cljs.core.rest.call(null,s__7930__$2)));
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
cljs.core._add_method.call(null,lt.plugins.chrometools.console.handle_log_msg,"log",(function (msg){var stack = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__7933_SHARP_){return cljs.core.not_EQ_.call(null,lt.objs.files.basename.call(null,new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(p1__7933_SHARP_)),"bootstrap.js");
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
{var ed = temp__4092__auto__;var info = new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg);var seq__8891 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(info));var chunk__8892 = null;var count__8893 = 0;var i__8894 = 0;while(true){
if((i__8894 < count__8893))
{var form__$1 = cljs.core._nth.call(null,chunk__8892,i__8894);var cb_8905 = cljs.core.partial.call(null,lt.plugins.chrometools.eval.cljs_eval_cb,this$,msg,form__$1);lt.plugins.chrometools.eval.eval_cljs.call(null,this$,form__$1,cb_8905);
{
var G__8906 = seq__8891;
var G__8907 = chunk__8892;
var G__8908 = count__8893;
var G__8909 = (i__8894 + 1);
seq__8891 = G__8906;
chunk__8892 = G__8907;
count__8893 = G__8908;
i__8894 = G__8909;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__8891);if(temp__4092__auto____$1)
{var seq__8891__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8891__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8891__$1);{
var G__8910 = cljs.core.chunk_rest.call(null,seq__8891__$1);
var G__8911 = c__7112__auto__;
var G__8912 = cljs.core.count.call(null,c__7112__auto__);
var G__8913 = 0;
seq__8891 = G__8910;
chunk__8892 = G__8911;
count__8893 = G__8912;
i__8894 = G__8913;
continue;
}
} else
{var form__$1 = cljs.core.first.call(null,seq__8891__$1);var cb_8914 = cljs.core.partial.call(null,lt.plugins.chrometools.eval.cljs_eval_cb,this$,msg,form__$1);lt.plugins.chrometools.eval.eval_cljs.call(null,this$,form__$1,cb_8914);
{
var G__8915 = cljs.core.next.call(null,seq__8891__$1);
var G__8916 = null;
var G__8917 = 0;
var G__8918 = 0;
seq__8891 = G__8915;
chunk__8892 = G__8916;
count__8893 = G__8917;
i__8894 = G__8918;
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