if(!lt.util.load.provided_QMARK_('lt.plugins.chromedebugger')) {
goog.provide('lt.plugins.chromedebugger');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('lt.util.cljs');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('lt.plugins.js');
goog.require('lt.objs.context');
goog.require('lt.objs.popup');
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
goog.require('lt.objs.clients.devtools');
goog.require('lt.objs.files');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('clojure.string');
goog.require('lt.objs.clients.devtools');
goog.require('crate.binding');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('cljs.reader');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.objs.clients.ws');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.sidebar.clients');
goog.require('fetch.core');
goog.require('fetch.core');
lt.plugins.chromedebugger.remote_server = cljs.core.atom.call(null,null);
lt.plugins.chromedebugger.server_input = (function server_input(){var e__7793__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"host:port",new cljs.core.Keyword(null,"value","value",1125876963),"localhost:"], null)], null));var seq__16179_16319 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",1111509066),((function (e__7793__auto__){
return (function (){return lt.objs.context.in_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
});})(e__7793__auto__))
,new cljs.core.Keyword(null,"blur","blur",1016931289),((function (e__7793__auto__){
return (function (){return lt.objs.context.out_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
});})(e__7793__auto__))
], null)));var chunk__16180_16320 = null;var count__16181_16321 = 0;var i__16182_16322 = 0;while(true){
if((i__16182_16322 < count__16181_16321))
{var vec__16183_16323 = cljs.core._nth.call(null,chunk__16180_16320,i__16182_16322);var ev__7794__auto___16324 = cljs.core.nth.call(null,vec__16183_16323,0,null);var func__7795__auto___16325 = cljs.core.nth.call(null,vec__16183_16323,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___16324,func__7795__auto___16325);
{
var G__16326 = seq__16179_16319;
var G__16327 = chunk__16180_16320;
var G__16328 = count__16181_16321;
var G__16329 = (i__16182_16322 + 1);
seq__16179_16319 = G__16326;
chunk__16180_16320 = G__16327;
count__16181_16321 = G__16328;
i__16182_16322 = G__16329;
continue;
}
} else
{var temp__4092__auto___16330 = cljs.core.seq.call(null,seq__16179_16319);if(temp__4092__auto___16330)
{var seq__16179_16331__$1 = temp__4092__auto___16330;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16179_16331__$1))
{var c__7112__auto___16332 = cljs.core.chunk_first.call(null,seq__16179_16331__$1);{
var G__16333 = cljs.core.chunk_rest.call(null,seq__16179_16331__$1);
var G__16334 = c__7112__auto___16332;
var G__16335 = cljs.core.count.call(null,c__7112__auto___16332);
var G__16336 = 0;
seq__16179_16319 = G__16333;
chunk__16180_16320 = G__16334;
count__16181_16321 = G__16335;
i__16182_16322 = G__16336;
continue;
}
} else
{var vec__16184_16337 = cljs.core.first.call(null,seq__16179_16331__$1);var ev__7794__auto___16338 = cljs.core.nth.call(null,vec__16184_16337,0,null);var func__7795__auto___16339 = cljs.core.nth.call(null,vec__16184_16337,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___16338,func__7795__auto___16339);
{
var G__16340 = cljs.core.next.call(null,seq__16179_16331__$1);
var G__16341 = null;
var G__16342 = 0;
var G__16343 = 0;
seq__16179_16319 = G__16340;
chunk__16180_16320 = G__16341;
count__16181_16321 = G__16342;
i__16182_16322 = G__16343;
continue;
}
}
} else
{}
}
break;
}
return e__7793__auto__;
});
lt.plugins.chromedebugger.connect_to_remote = (function connect_to_remote(server){var vec__16186 = clojure.string.split.call(null,server,":");var host = cljs.core.nth.call(null,vec__16186,0,null);var port = cljs.core.nth.call(null,vec__16186,1,null);if(cljs.core.truth_((function (){var and__6352__auto__ = host;if(cljs.core.truth_(and__6352__auto__))
{return port;
} else
{return and__6352__auto__;
}
})()))
{var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"chrome.client.remote","chrome.client.remote",4091478727));var url = [cljs.core.str("http://"),cljs.core.str(server),cljs.core.str("/json")].join('');cljs.core.reset_BANG_.call(null,lt.plugins.chromedebugger.remote_server,server);
lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"port","port",1017351155),port,new cljs.core.Keyword(null,"host","host",1017112858),host,new cljs.core.Keyword(null,"tabs-url","tabs-url",4418269714),url,new cljs.core.Keyword(null,"name","name",1017277949),"Chrome Remote Debugger"], null));
return lt.object.raise.call(null,client,new cljs.core.Keyword(null,"connect!","connect!",4735997929),url);
} else
{return null;
}
});
lt.plugins.chromedebugger.remote_connect = (function remote_connect(){var input = lt.plugins.chromedebugger.server_input.call(null);var p = lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Connect to Chrome using remote debuging protocol.",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"In order to connect to chrome you must start it with the --remote-debugging-port option."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),"Server: "], null),input], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"cancel"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"connect",new cljs.core.Keyword(null,"action","action",3885920680),((function (input){
return (function (){return lt.plugins.chromedebugger.connect_to_remote.call(null,lt.util.dom.val.call(null,input));
});})(input))
], null)], null)], null));lt.util.dom.focus.call(null,input);
return input.setSelectionRange(1000,1000);
});
lt.objs.sidebar.clients.add_connector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Chrome (Remote Debugging Protocol)",new cljs.core.Keyword(null,"desc","desc",1016984067),"Enter in the host:port address of remote debugging server to connect to",new cljs.core.Keyword(null,"connect","connect",1965255772),(function (){if(cljs.core.truth_(cljs.core.deref.call(null,lt.plugins.chromedebugger.remote_server)))
{return lt.plugins.chromedebugger.connect_to_remote.call(null,cljs.core.deref.call(null,lt.plugins.chromedebugger.remote_server));
} else
{return lt.plugins.chromedebugger.remote_connect.call(null);
}
})], null));
lt.plugins.chromedebugger.socket = (function socket(this$,url){var sock = (new WebSocket(url));sock.onopen = ((function (sock){
return (function (){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connected","connected",4729661051),true], null));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"connect","connect",1965255772));
});})(sock))
;
sock.onmessage = ((function (sock){
return (function (p1__16187_SHARP_){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"message","message",1968829305),lt.util.cljs.js__GT_clj.call(null,JSON.parse(p1__16187_SHARP_.data),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true));
});})(sock))
;
sock.onerror = ((function (sock){
return (function (p1__16188_SHARP_){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"error","error",1110689146),p1__16188_SHARP_);
});})(sock))
;
return sock;
});
lt.plugins.chromedebugger.send_STAR_ = (function send_STAR_(client,m,cb){new cljs.core.Keyword(null,"socket","socket",4411822821).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)).send(JSON.stringify(cljs.core.clj__GT_js.call(null,m)));
if(cljs.core.truth_(cb))
{return cljs.core.swap_BANG_.call(null,lt.plugins.chromedebugger.cbs,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(m),cb);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
lt.plugins.chromedebugger.send = (function() { 
var send__delegate = function (client,m,p__16189){var vec__16191 = p__16189;var cb = cljs.core.nth.call(null,vec__16191,0,null);if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))))
{return lt.plugins.chromedebugger.send_STAR_.call(null,client,m,cb);
} else
{return lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1121848451)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [client,m,cb], null));
}
};
var send = function (client,m,var_args){
var p__16189 = null;if (arguments.length > 2) {
  p__16189 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return send__delegate.call(this,client,m,p__16189);};
send.cljs$lang$maxFixedArity = 2;
send.cljs$lang$applyTo = (function (arglist__16344){
var client = cljs.core.first(arglist__16344);
arglist__16344 = cljs.core.next(arglist__16344);
var m = cljs.core.first(arglist__16344);
var p__16189 = cljs.core.rest(arglist__16344);
return send__delegate(client,m,p__16189);
});
send.cljs$core$IFn$_invoke$arity$variadic = send__delegate;
return send;
})()
;
lt.plugins.chromedebugger.__BEH__connect_BANG_ = (function __BEH__connect_BANG_(this$,url){cljs.core.println.call(null,this$);
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connected","connected",4729661051),true], null));
var xhr = fetch.core.xhr.call(null,url,cljs.core.PersistentArrayMap.EMPTY,(function (d){if(cljs.core.truth_(cljs.core.not_empty.call(null,d)))
{return lt.plugins.chromedebugger.select_tab.call(null,this$,lt.util.cljs.js__GT_clj.call(null,JSON.parse(d),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true));
} else
{cljs.core.reset_BANG_.call(null,lt.plugins.chromedebugger.remote_server,null);
lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"We couldn't connect.",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),"There was a problem connecting. Check the port and make\n                                                              sure chrome was launched with the --remote-debugging-port option"], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"close"], null)], null)], null));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"close!","close!",3951350939));
}
}));return null;
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","connect!","lt.plugins.chromedebugger/connect!",4683025637),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.__BEH__connect_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connect!","connect!",4735997929),null], null), null));
lt.plugins.chromedebugger.__BEH__close = (function __BEH__close(this$){var temp__4092__auto___16345 = new cljs.core.Keyword(null,"socket","socket",4411822821).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___16345))
{var socket_16346 = temp__4092__auto___16345;socket_16346.close();
} else
{}
cljs.core.swap_BANG_.call(null,lt.plugins.chromedebugger.connected_tabs,cljs.core.dissoc,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));
return lt.objs.clients.rem_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","close","lt.plugins.chromedebugger/close",3740144484),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.__BEH__close,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close!","close!",3951350939),null], null), null));
lt.plugins.chromedebugger.__BEH__clear_queue_on_connect = (function __BEH__clear_queue_on_connect(this$){var seq__16196 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"queue","queue",1121848451).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var chunk__16197 = null;var count__16198 = 0;var i__16199 = 0;while(true){
if((i__16199 < count__16198))
{var msg = cljs.core._nth.call(null,chunk__16197,i__16199);cljs.core.apply.call(null,lt.plugins.chromedebugger.send,msg);
{
var G__16347 = seq__16196;
var G__16348 = chunk__16197;
var G__16349 = count__16198;
var G__16350 = (i__16199 + 1);
seq__16196 = G__16347;
chunk__16197 = G__16348;
count__16198 = G__16349;
i__16199 = G__16350;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16196);if(temp__4092__auto__)
{var seq__16196__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16196__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__16196__$1);{
var G__16351 = cljs.core.chunk_rest.call(null,seq__16196__$1);
var G__16352 = c__7112__auto__;
var G__16353 = cljs.core.count.call(null,c__7112__auto__);
var G__16354 = 0;
seq__16196 = G__16351;
chunk__16197 = G__16352;
count__16198 = G__16353;
i__16199 = G__16354;
continue;
}
} else
{var msg = cljs.core.first.call(null,seq__16196__$1);cljs.core.apply.call(null,lt.plugins.chromedebugger.send,msg);
{
var G__16355 = cljs.core.next.call(null,seq__16196__$1);
var G__16356 = null;
var G__16357 = 0;
var G__16358 = 0;
seq__16196 = G__16355;
chunk__16197 = G__16356;
count__16198 = G__16357;
i__16199 = G__16358;
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
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","clear-queue-on-connect","lt.plugins.chromedebugger/clear-queue-on-connect",2292323492),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.__BEH__clear_queue_on_connect,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connect","connect",1965255772),null], null), null));
lt.plugins.chromedebugger.load_lttools = (function load_lttools(){return [cljs.core.str("\n  (function () {\n    function loadScript(sScriptSrc) {\n      var oHead = document.getElementsByTagName('head')[0];\n      var oScript = document.createElement('script');\n      oScript.setAttribute('src',sScriptSrc);\n      oScript.setAttribute('type','text/javascript');\n      oScript.setAttribute('id','lt_ws');\n      oHead.appendChild(oScript);\n    }\n    loadScript('http://localhost:"),cljs.core.str(lt.objs.clients.ws.port),cljs.core.str("/socket.io/lighttable/ws.js');\n  }());\n  ")].join('');
});
lt.plugins.chromedebugger.inject_lttools = (function inject_lttools(client){return lt.plugins.chromedebugger.send.call(null,client,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chromedebugger.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Runtime.evaluate",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expression","expression",3513419274),lt.plugins.chromedebugger.load_lttools.call(null)], null)], null),(function (r){return cljs.core.println.call(null,r);
}));
});
lt.plugins.chromedebugger.__BEH__init_tab = (function __BEH__init_tab(this$){lt.plugins.chromedebugger.send.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chromedebugger.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Runtime.enable"], null));
lt.plugins.chromedebugger.send.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chromedebugger.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Console.enable"], null));
lt.plugins.chromedebugger.send.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chromedebugger.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.enable"], null),lt.plugins.chromedebugger.inject_lttools.call(null,this$));
return lt.plugins.chromedebugger.send.call(null,this$,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chromedebugger.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Network.setCacheDisabled",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cacheDisabled","cacheDisabled",3367083920),true], null)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","init-tab","lt.plugins.chromedebugger/init-tab",3912607684),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.__BEH__init_tab,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connect","connect",1965255772),null], null), null));
lt.plugins.chromedebugger.__BEH__print_messages = (function __BEH__print_messages(this$,m){return null;
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","print-messages","lt.plugins.chromedebugger/print-messages",2844634320),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.__BEH__print_messages,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",1968829305),null], null), null));
lt.plugins.chromedebugger.__BEH__handle_message = (function __BEH__handle_message(this$,m){var temp__4090__auto__ = cljs.core.deref.call(null,lt.plugins.chromedebugger.cbs).call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(m));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;cb.call(null,m);
return cljs.core.swap_BANG_.call(null,lt.plugins.chromedebugger.cbs,cljs.core.dissoc,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(m));
} else
{if(cljs.core.truth_(new cljs.core.Keyword(null,"method","method",4231316563).cljs$core$IFn$_invoke$arity$1(m)))
{return lt.object.raise.call(null,this$,cljs.core.keyword.call(null,new cljs.core.Keyword(null,"method","method",4231316563).cljs$core$IFn$_invoke$arity$1(m)),m);
} else
{return null;
}
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","handle-message","lt.plugins.chromedebugger/handle-message",3727577018),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.__BEH__handle_message,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",1968829305),null], null), null));
lt.plugins.chromedebugger.is_data_uri_QMARK_ = (function is_data_uri_QMARK_(uri){var data_uri_prefix = "data:application/json";return cljs.core._EQ_.call(null,data_uri_prefix,uri.substr(0,data_uri_prefix.length));
});
lt.plugins.chromedebugger.store_source_map = (function store_source_map(client,url,params,sm){var params__$1 = cljs.core.assoc.call(null,params,new cljs.core.Keyword(null,"sourceMap","sourceMap",3610443443),sm);var seq__16204 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"sources","sources",3286994730).cljs$core$IFn$_invoke$arity$1(sm));var chunk__16205 = null;var count__16206 = 0;var i__16207 = 0;while(true){
if((i__16207 < count__16206))
{var source = cljs.core._nth.call(null,chunk__16205,i__16207);lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scripts","scripts",2940419194)], null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.files.basename.call(null,source),url], null),params__$1);
{
var G__16359 = seq__16204;
var G__16360 = chunk__16205;
var G__16361 = count__16206;
var G__16362 = (i__16207 + 1);
seq__16204 = G__16359;
chunk__16205 = G__16360;
count__16206 = G__16361;
i__16207 = G__16362;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16204);if(temp__4092__auto__)
{var seq__16204__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16204__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__16204__$1);{
var G__16363 = cljs.core.chunk_rest.call(null,seq__16204__$1);
var G__16364 = c__7112__auto__;
var G__16365 = cljs.core.count.call(null,c__7112__auto__);
var G__16366 = 0;
seq__16204 = G__16363;
chunk__16205 = G__16364;
count__16206 = G__16365;
i__16207 = G__16366;
continue;
}
} else
{var source = cljs.core.first.call(null,seq__16204__$1);lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scripts","scripts",2940419194)], null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.files.basename.call(null,source),url], null),params__$1);
{
var G__16367 = cljs.core.next.call(null,seq__16204__$1);
var G__16368 = null;
var G__16369 = 0;
var G__16370 = 0;
seq__16204 = G__16367;
chunk__16205 = G__16368;
count__16206 = G__16369;
i__16207 = G__16370;
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
lt.plugins.chromedebugger.load_source_map = (function load_source_map(client,params){var sm_filename = new cljs.core.Keyword(null,"sourceMapURL","sourceMapURL",2152324576).cljs$core$IFn$_invoke$arity$1(params);var url = new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(params);var base = url.replace(/\/[^\/]*$/,"/");var sm_url = [cljs.core.str(base),cljs.core.str(sm_filename)].join('');if(lt.plugins.chromedebugger.is_data_uri_QMARK_.call(null,sm_filename))
{var data = lt.util.cljs.js__GT_clj.call(null,JSON.parse(atob(cljs.core.second.call(null,sm_url.split(",")))),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);return lt.plugins.chromedebugger.store_source_map.call(null,client,url,params,data);
} else
{return fetch.core.xhr.call(null,sm_url,cljs.core.PersistentArrayMap.EMPTY,((function (sm_filename,url,base,sm_url){
return (function (d){var temp__4092__auto__ = lt.util.cljs.js__GT_clj.call(null,JSON.parse(d),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);if(cljs.core.truth_(temp__4092__auto__))
{var data = temp__4092__auto__;return lt.plugins.chromedebugger.store_source_map.call(null,client,url,params,data);
} else
{return null;
}
});})(sm_filename,url,base,sm_url))
);
}
});
lt.plugins.chromedebugger.__BEH__script_parsed = (function __BEH__script_parsed(this$,s){var params = new cljs.core.Keyword(null,"params","params",4313443576).cljs$core$IFn$_invoke$arity$1(s);var source_map_url = new cljs.core.Keyword(null,"sourceMapURL","sourceMapURL",2152324576).cljs$core$IFn$_invoke$arity$1(params);var url = new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(params);if(cljs.core.truth_(source_map_url))
{lt.plugins.chromedebugger.load_source_map.call(null,this$,params);
} else
{}
return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scripts","scripts",2940419194)], null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.files.basename.call(null,url),url], null),new cljs.core.Keyword(null,"params","params",4313443576).cljs$core$IFn$_invoke$arity$1(s));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","script-parsed","lt.plugins.chromedebugger/script-parsed",3639184937),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.__BEH__script_parsed,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Debugger.scriptParsed","Debugger.scriptParsed",1050864827),null], null), null));
lt.plugins.chromedebugger.__BEH__console_log = (function __BEH__console_log(this$,m){return null;
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","console-log","lt.plugins.chromedebugger/console-log",1725923246),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.__BEH__console_log,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Console.messageAdded","Console.messageAdded",4767739906),null], null), null));
lt.plugins.chromedebugger.__BEH__inspector_detached = (function __BEH__inspector_detached(this$,m){lt.util.dom.prepend.call(null,lt.object.__GT_content.call(null,lt.objs.editor.pool.last_active.call(null)),lt.object.__GT_content.call(null,lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","reconnect-label","lt.plugins.chromedebugger/reconnect-label",3578800222),new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))));
if(cljs.core._EQ_.call(null,"replaced_with_devtools",new cljs.core.Keyword(null,"reason","reason",4373906870).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",4313443576).cljs$core$IFn$_invoke$arity$1(m))))
{cljs.core.println.call(null,"Dev tools opened: connection closed");
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"close!","close!",3951350939));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","inspector-detached","lt.plugins.chromedebugger/inspector-detached",2205204468),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.__BEH__inspector_detached,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Inspector.detached","Inspector.detached",2812434459),null], null), null));
lt.plugins.chromedebugger.__BEH__handle_page_reload = (function __BEH__handle_page_reload(this$,m){return lt.plugins.chromedebugger.inject_lttools.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","handle-page-reload","lt.plugins.chromedebugger/handle-page-reload",3570340554),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.__BEH__handle_page_reload,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Debugger.globalObjectCleared","Debugger.globalObjectCleared",1710200527),null], null), null));
lt.plugins.chromedebugger.__BEH__handle_error = (function __BEH__handle_error(this$,event){if(cljs.core.not_EQ_.call(null,1,lt.plugins.chromedebugger.socket.readyState))
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"close!","close!",3951350939));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","handle-error","lt.plugins.chromedebugger/handle-error",2328107769),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.__BEH__handle_error,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",1110689146),null], null), null));
lt.plugins.chromedebugger.__BEH__cljs_result_inspector = (function __BEH__cljs_result_inspector(editor,res){var meta = new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res);var loc = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"end-line","end-line",2693041432).cljs$core$IFn$_invoke$arity$1(meta) - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"end-column","end-column",3799845882).cljs$core$IFn$_invoke$arity$1(meta),new cljs.core.Keyword(null,"start-line","start-line",3689311729),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(meta) - 1)], null);var str_result = (cljs.core.truth_(new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res))?new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res):"undefined");return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),str_result,loc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",4328760836)," = "], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","cljs-result-inspector","lt.plugins.chromedebugger/cljs-result-inspector",927244058),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.__BEH__cljs_result_inspector,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.cljs.result.inspector","editor.eval.cljs.result.inspector",2330385955),null], null), null));
lt.plugins.chromedebugger.eval_cljs = (function eval_cljs(client,msg,cb){return lt.plugins.chromedebugger.send.call(null,client,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chromedebugger.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Runtime.evaluate",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expression","expression",3513419274),new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(msg)], null)], null),cb);
});
lt.plugins.chromedebugger.cljs_eval_cb = (function cljs_eval_cb(client,msg,form,r){var result = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(r);var error_QMARK_ = (function (){var or__6364__auto__ = (result == null);if(or__6364__auto__)
{return or__6364__auto__;
} else
{return new cljs.core.Keyword(null,"wasThrown","wasThrown",3712175619).cljs$core$IFn$_invoke$arity$1(result);
}
})();var error = (function (){var or__6364__auto__ = new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(result);if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(result));
}
})();var meta = new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(form);var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"result-type","result-type",4725630556),"inspector");var result__$1 = lt.plugins.chromedebugger.inspector__GT_result.call(null,client,r);var result__$2 = cljs.core.assoc.call(null,result__$1,new cljs.core.Keyword(null,"meta","meta",1017252215),meta__$1,new cljs.core.Keyword(null,"no-inspect","no-inspect",887813498),true);if(cljs.core.truth_(error_QMARK_))
{return lt.plugins.chromedebugger.handle_cb.call(null,new cljs.core.Keyword(null,"cb","cb",1013907409).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"editor.eval.cljs.exception","editor.eval.cljs.exception",4479049174),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ex","ex",1013907493),error,new cljs.core.Keyword(null,"meta","meta",1017252215),cljs.core.merge.call(null,new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(form))], null));
} else
{return lt.plugins.chromedebugger.handle_cb.call(null,new cljs.core.Keyword(null,"cb","cb",1013907409).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"editor.eval.cljs.result","editor.eval.cljs.result",1580065178),result__$2);
}
});
lt.plugins.chromedebugger.__BEH__cljs_exec = (function __BEH__cljs_exec(this$,msg,form){var temp__4092__auto__ = lt.object.by_id.call(null,new cljs.core.Keyword(null,"cb","cb",1013907409).cljs$core$IFn$_invoke$arity$1(msg));if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var info = new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg);var seq__16212 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(info));var chunk__16213 = null;var count__16214 = 0;var i__16215 = 0;while(true){
if((i__16215 < count__16214))
{var form__$1 = cljs.core._nth.call(null,chunk__16213,i__16215);var cb_16371 = cljs.core.partial.call(null,lt.plugins.chromedebugger.cljs_eval_cb,this$,msg,form__$1);lt.plugins.chromedebugger.eval_cljs.call(null,this$,form__$1,cb_16371);
{
var G__16372 = seq__16212;
var G__16373 = chunk__16213;
var G__16374 = count__16214;
var G__16375 = (i__16215 + 1);
seq__16212 = G__16372;
chunk__16213 = G__16373;
count__16214 = G__16374;
i__16215 = G__16375;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__16212);if(temp__4092__auto____$1)
{var seq__16212__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16212__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__16212__$1);{
var G__16376 = cljs.core.chunk_rest.call(null,seq__16212__$1);
var G__16377 = c__7112__auto__;
var G__16378 = cljs.core.count.call(null,c__7112__auto__);
var G__16379 = 0;
seq__16212 = G__16376;
chunk__16213 = G__16377;
count__16214 = G__16378;
i__16215 = G__16379;
continue;
}
} else
{var form__$1 = cljs.core.first.call(null,seq__16212__$1);var cb_16380 = cljs.core.partial.call(null,lt.plugins.chromedebugger.cljs_eval_cb,this$,msg,form__$1);lt.plugins.chromedebugger.eval_cljs.call(null,this$,form__$1,cb_16380);
{
var G__16381 = cljs.core.next.call(null,seq__16212__$1);
var G__16382 = null;
var G__16383 = 0;
var G__16384 = 0;
seq__16212 = G__16381;
chunk__16213 = G__16382;
count__16214 = G__16383;
i__16215 = G__16384;
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
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","cljs-exec","lt.plugins.chromedebugger/cljs-exec",4579828592),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.__BEH__cljs_exec,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.cljs.exec!","editor.eval.cljs.exec!",743618999),null], null), null));
lt.plugins.chromedebugger.dismiss_button = (function dismiss_button(obj){var e__7793__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tab-close","span.tab-close",4094760846),"x"], null));var seq__16222_16385 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7793__auto__){
return (function (){return lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"remove-label","remove-label",3359640541));
});})(e__7793__auto__))
], null)));var chunk__16223_16386 = null;var count__16224_16387 = 0;var i__16225_16388 = 0;while(true){
if((i__16225_16388 < count__16224_16387))
{var vec__16226_16389 = cljs.core._nth.call(null,chunk__16223_16386,i__16225_16388);var ev__7794__auto___16390 = cljs.core.nth.call(null,vec__16226_16389,0,null);var func__7795__auto___16391 = cljs.core.nth.call(null,vec__16226_16389,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___16390,func__7795__auto___16391);
{
var G__16392 = seq__16222_16385;
var G__16393 = chunk__16223_16386;
var G__16394 = count__16224_16387;
var G__16395 = (i__16225_16388 + 1);
seq__16222_16385 = G__16392;
chunk__16223_16386 = G__16393;
count__16224_16387 = G__16394;
i__16225_16388 = G__16395;
continue;
}
} else
{var temp__4092__auto___16396 = cljs.core.seq.call(null,seq__16222_16385);if(temp__4092__auto___16396)
{var seq__16222_16397__$1 = temp__4092__auto___16396;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16222_16397__$1))
{var c__7112__auto___16398 = cljs.core.chunk_first.call(null,seq__16222_16397__$1);{
var G__16399 = cljs.core.chunk_rest.call(null,seq__16222_16397__$1);
var G__16400 = c__7112__auto___16398;
var G__16401 = cljs.core.count.call(null,c__7112__auto___16398);
var G__16402 = 0;
seq__16222_16385 = G__16399;
chunk__16223_16386 = G__16400;
count__16224_16387 = G__16401;
i__16225_16388 = G__16402;
continue;
}
} else
{var vec__16227_16403 = cljs.core.first.call(null,seq__16222_16397__$1);var ev__7794__auto___16404 = cljs.core.nth.call(null,vec__16227_16403,0,null);var func__7795__auto___16405 = cljs.core.nth.call(null,vec__16227_16403,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___16404,func__7795__auto___16405);
{
var G__16406 = cljs.core.next.call(null,seq__16222_16397__$1);
var G__16407 = null;
var G__16408 = 0;
var G__16409 = 0;
seq__16222_16385 = G__16406;
chunk__16223_16386 = G__16407;
count__16224_16387 = G__16408;
i__16225_16388 = G__16409;
continue;
}
}
} else
{}
}
break;
}
return e__7793__auto__;
});
lt.plugins.chromedebugger.reconnect_button = (function reconnect_button(label,tab){var e__7793__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"reconnect-chrome button"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),[cljs.core.str("Reconnect: "),cljs.core.str(new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(tab))].join('')], null),lt.plugins.chromedebugger.dismiss_button.call(null,label)], null));var seq__16234_16410 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7793__auto__){
return (function (e){var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"chrome.client.remote","chrome.client.remote",4091478727));return lt.plugins.chromedebugger.connect_tab.call(null,client,tab);
});})(e__7793__auto__))
], null)));var chunk__16235_16411 = null;var count__16236_16412 = 0;var i__16237_16413 = 0;while(true){
if((i__16237_16413 < count__16236_16412))
{var vec__16238_16414 = cljs.core._nth.call(null,chunk__16235_16411,i__16237_16413);var ev__7794__auto___16415 = cljs.core.nth.call(null,vec__16238_16414,0,null);var func__7795__auto___16416 = cljs.core.nth.call(null,vec__16238_16414,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___16415,func__7795__auto___16416);
{
var G__16417 = seq__16234_16410;
var G__16418 = chunk__16235_16411;
var G__16419 = count__16236_16412;
var G__16420 = (i__16237_16413 + 1);
seq__16234_16410 = G__16417;
chunk__16235_16411 = G__16418;
count__16236_16412 = G__16419;
i__16237_16413 = G__16420;
continue;
}
} else
{var temp__4092__auto___16421 = cljs.core.seq.call(null,seq__16234_16410);if(temp__4092__auto___16421)
{var seq__16234_16422__$1 = temp__4092__auto___16421;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16234_16422__$1))
{var c__7112__auto___16423 = cljs.core.chunk_first.call(null,seq__16234_16422__$1);{
var G__16424 = cljs.core.chunk_rest.call(null,seq__16234_16422__$1);
var G__16425 = c__7112__auto___16423;
var G__16426 = cljs.core.count.call(null,c__7112__auto___16423);
var G__16427 = 0;
seq__16234_16410 = G__16424;
chunk__16235_16411 = G__16425;
count__16236_16412 = G__16426;
i__16237_16413 = G__16427;
continue;
}
} else
{var vec__16239_16428 = cljs.core.first.call(null,seq__16234_16422__$1);var ev__7794__auto___16429 = cljs.core.nth.call(null,vec__16239_16428,0,null);var func__7795__auto___16430 = cljs.core.nth.call(null,vec__16239_16428,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___16429,func__7795__auto___16430);
{
var G__16431 = cljs.core.next.call(null,seq__16234_16422__$1);
var G__16432 = null;
var G__16433 = 0;
var G__16434 = 0;
seq__16234_16410 = G__16431;
chunk__16235_16411 = G__16432;
count__16236_16412 = G__16433;
i__16237_16413 = G__16434;
continue;
}
}
} else
{}
}
break;
}
return e__7793__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","reconnect-label","lt.plugins.chromedebugger/reconnect-label",3578800222),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reconnect-label","reconnect-label",3615163504),null], null), null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,tab){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab","tab",1014018823),tab], null));
return lt.plugins.chromedebugger.reconnect_button.call(null,this$,tab);
}));
lt.plugins.chromedebugger.__BEH__on_remove_reconnect_label = (function __BEH__on_remove_reconnect_label(this$){return lt.object.destroy_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","on-remove-reconnect-label","lt.plugins.chromedebugger/on-remove-reconnect-label",4215127993),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.__BEH__on_remove_reconnect_label,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remove-label","remove-label",3359640541),null], null), null));
lt.plugins.chromedebugger.__BEH__remove_label = (function __BEH__remove_label(this$,that){var id = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var labels = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"reconnect-label","reconnect-label",3615163504));var seq__16246 = cljs.core.seq.call(null,labels);var chunk__16248 = null;var count__16249 = 0;var i__16250 = 0;while(true){
if((i__16250 < count__16249))
{var label = cljs.core._nth.call(null,chunk__16248,i__16250);if(cljs.core.truth_((function (){var and__6352__auto__ = label;if(cljs.core.truth_(and__6352__auto__))
{return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,label))),id);
} else
{return and__6352__auto__;
}
})()))
{lt.object.raise.call(null,label,new cljs.core.Keyword(null,"remove-label","remove-label",3359640541));
{
var G__16435 = seq__16246;
var G__16436 = chunk__16248;
var G__16437 = count__16249;
var G__16438 = (i__16250 + 1);
seq__16246 = G__16435;
chunk__16248 = G__16436;
count__16249 = G__16437;
i__16250 = G__16438;
continue;
}
} else
{{
var G__16439 = seq__16246;
var G__16440 = chunk__16248;
var G__16441 = count__16249;
var G__16442 = (i__16250 + 1);
seq__16246 = G__16439;
chunk__16248 = G__16440;
count__16249 = G__16441;
i__16250 = G__16442;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16246);if(temp__4092__auto__)
{var seq__16246__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16246__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__16246__$1);{
var G__16443 = cljs.core.chunk_rest.call(null,seq__16246__$1);
var G__16444 = c__7112__auto__;
var G__16445 = cljs.core.count.call(null,c__7112__auto__);
var G__16446 = 0;
seq__16246 = G__16443;
chunk__16248 = G__16444;
count__16249 = G__16445;
i__16250 = G__16446;
continue;
}
} else
{var label = cljs.core.first.call(null,seq__16246__$1);if(cljs.core.truth_((function (){var and__6352__auto__ = label;if(cljs.core.truth_(and__6352__auto__))
{return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,label))),id);
} else
{return and__6352__auto__;
}
})()))
{lt.object.raise.call(null,label,new cljs.core.Keyword(null,"remove-label","remove-label",3359640541));
{
var G__16447 = cljs.core.next.call(null,seq__16246__$1);
var G__16448 = null;
var G__16449 = 0;
var G__16450 = 0;
seq__16246 = G__16447;
chunk__16248 = G__16448;
count__16249 = G__16449;
i__16250 = G__16450;
continue;
}
} else
{{
var G__16451 = cljs.core.next.call(null,seq__16246__$1);
var G__16452 = null;
var G__16453 = 0;
var G__16454 = 0;
seq__16246 = G__16451;
chunk__16248 = G__16452;
count__16249 = G__16453;
i__16250 = G__16454;
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
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","remove-label","lt.plugins.chromedebugger/remove-label",1696276689),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.__BEH__remove_label,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connect","connect",1965255772),null], null), null));
lt.plugins.chromedebugger.tab_preview = (function tab_preview(action,tab){var e__7793__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),new cljs.core.Keyword(null,"faviconUrl","faviconUrl",4346893869).cljs$core$IFn$_invoke$arity$1(tab)], null)], null),new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(tab)], null));var seq__16258_16455 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7793__auto__){
return (function (e){var temp__4092__auto___16459 = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"popup","popup",1120756766));if(cljs.core.truth_(temp__4092__auto___16459))
{var p_16460 = temp__4092__auto___16459;lt.object.raise.call(null,p_16460,new cljs.core.Keyword(null,"close!","close!",3951350939));
} else
{}
return action.call(null,tab);
});})(e__7793__auto__))
], null)));var chunk__16259_16456 = null;var count__16260_16457 = 0;var i__16261_16458 = 0;while(true){
if((i__16261_16458 < count__16260_16457))
{var vec__16262_16461 = cljs.core._nth.call(null,chunk__16259_16456,i__16261_16458);var ev__7794__auto___16462 = cljs.core.nth.call(null,vec__16262_16461,0,null);var func__7795__auto___16463 = cljs.core.nth.call(null,vec__16262_16461,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___16462,func__7795__auto___16463);
{
var G__16464 = seq__16258_16455;
var G__16465 = chunk__16259_16456;
var G__16466 = count__16260_16457;
var G__16467 = (i__16261_16458 + 1);
seq__16258_16455 = G__16464;
chunk__16259_16456 = G__16465;
count__16260_16457 = G__16466;
i__16261_16458 = G__16467;
continue;
}
} else
{var temp__4092__auto___16468 = cljs.core.seq.call(null,seq__16258_16455);if(temp__4092__auto___16468)
{var seq__16258_16469__$1 = temp__4092__auto___16468;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16258_16469__$1))
{var c__7112__auto___16470 = cljs.core.chunk_first.call(null,seq__16258_16469__$1);{
var G__16471 = cljs.core.chunk_rest.call(null,seq__16258_16469__$1);
var G__16472 = c__7112__auto___16470;
var G__16473 = cljs.core.count.call(null,c__7112__auto___16470);
var G__16474 = 0;
seq__16258_16455 = G__16471;
chunk__16259_16456 = G__16472;
count__16260_16457 = G__16473;
i__16261_16458 = G__16474;
continue;
}
} else
{var vec__16263_16475 = cljs.core.first.call(null,seq__16258_16469__$1);var ev__7794__auto___16476 = cljs.core.nth.call(null,vec__16263_16475,0,null);var func__7795__auto___16477 = cljs.core.nth.call(null,vec__16263_16475,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___16476,func__7795__auto___16477);
{
var G__16478 = cljs.core.next.call(null,seq__16258_16469__$1);
var G__16479 = null;
var G__16480 = 0;
var G__16481 = 0;
seq__16258_16455 = G__16478;
chunk__16259_16456 = G__16479;
count__16260_16457 = G__16480;
i__16261_16458 = G__16481;
continue;
}
}
} else
{}
}
break;
}
return e__7793__auto__;
});
lt.plugins.chromedebugger.connect_tab = (function connect_tab(client,tab){lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"socket","socket",4411822821),lt.plugins.chromedebugger.socket.call(null,client,new cljs.core.Keyword(null,"webSocketDebuggerUrl","webSocketDebuggerUrl",667502233).cljs$core$IFn$_invoke$arity$1(tab)),new cljs.core.Keyword(null,"commands","commands",4706336250),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"editor.eval.cljs.exec","editor.eval.cljs.exec",866638030),null,new cljs.core.Keyword(null,"editor.eval.js","editor.eval.js",1847417804),null], null), null),new cljs.core.Keyword(null,"tab","tab",1014018823),tab,new cljs.core.Keyword(null,"name","name",1017277949),[cljs.core.str("Chrome: "),cljs.core.str(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(tab))].join(''),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"chrome.client.remote","chrome.client.remote",4091478727)], null));
return cljs.core.swap_BANG_.call(null,lt.plugins.chromedebugger.connected_tabs,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(tab),client);
});
lt.plugins.chromedebugger.select_tab = (function select_tab(client,tabs){var action = cljs.core.partial.call(null,lt.plugins.chromedebugger.connect_tab,client);var p = lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Select which tab to attach to",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul#chrome-tabs","ul#chrome-tabs",1003516535),cljs.core.map.call(null,((function (action){
return (function (p1__16264_SHARP_){return lt.plugins.chromedebugger.tab_preview.call(null,action,p1__16264_SHARP_);
});})(action))
,cljs.core.filter.call(null,((function (action){
return (function (p1__16265_SHARP_){return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p1__16265_SHARP_),"page")) && ((cljs.core.deref.call(null,lt.plugins.chromedebugger.connected_tabs).call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__16265_SHARP_)) == null));
});})(action))
,tabs))], null)], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"cancel",new cljs.core.Keyword(null,"action","action",3885920680),((function (action){
return (function (){return lt.object.raise.call(null,client,new cljs.core.Keyword(null,"close!","close!",3951350939));
});})(action))
], null)], null)], null));return null;
});
lt.plugins.chromedebugger.handle_cb = (function handle_cb(cbid,command,data){return lt.object.raise.call(null,lt.objs.clients.clients,new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cbid,command,data], null));
});
lt.plugins.chromedebugger.eval_js_form = (function eval_js_form(this$,msg){var data = cljs.core.assoc.call(null,new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"code","code",1016963423),new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg)));lt.plugins.chromedebugger.eval_js.call(null,this$,data,((function (data){
return (function (res){var result = lt.plugins.chromedebugger.inspector__GT_result.call(null,this$,res);var req = new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg);var result__$1 = cljs.core.assoc.call(null,result,new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(req),new cljs.core.Keyword(null,"no-inspect","no-inspect",887813498),true);if(cljs.core.not.call(null,new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(result__$1)))
{return lt.plugins.chromedebugger.handle_cb.call(null,new cljs.core.Keyword(null,"cb","cb",1013907409).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"editor.eval.js.result","editor.eval.js.result",3021062051),result__$1);
} else
{return lt.plugins.chromedebugger.handle_cb.call(null,new cljs.core.Keyword(null,"cb","cb",1013907409).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"editor.eval.js.exception","editor.eval.js.exception",723801901),result__$1);
}
});})(data))
);
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"editor.eval.js.change-live!","editor.eval.js.change-live!",3424692446),msg);
});
lt.plugins.chromedebugger.find_script = (function find_script(client,path){var found_QMARK_ = cljs.core.get.call(null,cljs.core.deref.call(null,client).call(null,new cljs.core.Keyword(null,"scripts","scripts",2940419194)),lt.objs.files.basename.call(null,path));return found_QMARK_;
});
lt.plugins.chromedebugger.script_exists_QMARK_ = (function script_exists_QMARK_(client,id,cb){return lt.plugins.chromedebugger.send.call(null,client,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chromedebugger.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.canSetScriptSource",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scriptId","scriptId",606324408),id], null)], null),(function (res){return cb.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res)));
}));
});
lt.plugins.chromedebugger.remove_script_BANG_ = (function remove_script_BANG_(client,path,id){var vec__16268 = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__16266_SHARP_){return cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__16266_SHARP_)));
}),lt.plugins.chromedebugger.find_script.call(null,client,path)));var k = cljs.core.nth.call(null,vec__16268,0,null);var v = cljs.core.nth.call(null,vec__16268,1,null);return lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scripts","scripts",2940419194),lt.objs.files.basename.call(null,path)], null),cljs.core.dissoc,k);
});
lt.plugins.chromedebugger.must_eval_file_QMARK_ = (function must_eval_file_QMARK_(client,msg){if(cljs.core.truth_(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg))))
{return (cljs.core.not.call(null,new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg)))) || (cljs.core.not.call(null,lt.plugins.chromedebugger.find_script.call(null,client,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg)))));
} else
{return null;
}
});
/**
* Get current call frame id from client. Will only be available is debugger is
* active and paused
*/
lt.plugins.chromedebugger.__GT_call_frame_id = (function __GT_call_frame_id(client){var temp__4092__auto__ = new cljs.core.Keyword(null,"debug-panel","debug-panel",2661178748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client));if(cljs.core.truth_(temp__4092__auto__))
{var panel = temp__4092__auto__;cljs.core.println.call(null,new cljs.core.Keyword(null,"selected-frame","selected-frame",1773798189).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"debugger","debugger",1561716627).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,panel))));
return new cljs.core.Keyword(null,"callFrameId","callFrameId",4288173724).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selected-frame","selected-frame",1773798189).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"debugger","debugger",1561716627).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,panel))));
} else
{return null;
}
});
lt.plugins.chromedebugger.eval_js = (function eval_js(client,msg,cb){var temp__4090__auto__ = lt.plugins.chromedebugger.__GT_call_frame_id.call(null,client);if(cljs.core.truth_(temp__4090__auto__))
{var call_frame = temp__4090__auto__;return lt.plugins.chromedebugger.send.call(null,client,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chromedebugger.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.evaluateOnCallFrame",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"callFrameId","callFrameId",4288173724),call_frame,new cljs.core.Keyword(null,"expression","expression",3513419274),new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(msg)], null)], null),cb);
} else
{return lt.plugins.chromedebugger.send.call(null,client,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chromedebugger.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Runtime.evaluate",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expression","expression",3513419274),new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(msg)], null)], null),cb);
}
});
lt.plugins.chromedebugger.changelive_BANG_ = (function changelive_BANG_(client,obj,path,code,cb,else$){var temp__4090__auto__ = lt.plugins.chromedebugger.find_script.call(null,client,path);if(cljs.core.truth_(temp__4090__auto__))
{var s = temp__4090__auto__;var id = new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.vals.call(null,s)));return lt.plugins.chromedebugger.script_exists_QMARK_.call(null,client,id,((function (id,s,temp__4090__auto__){
return (function (exists_QMARK_){if(cljs.core.not.call(null,exists_QMARK_))
{lt.plugins.chromedebugger.remove_script_BANG_.call(null,client,path,id);
return changelive_BANG_.call(null,client,obj,path,code,cb,else$);
} else
{cljs.core.println.call(null,"set script source",id);
lt.object.merge_BANG_.call(null,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"script-id","script-id",1263804623),id], null));
return lt.plugins.chromedebugger.send.call(null,client,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chromedebugger.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.setScriptSource",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scriptId","scriptId",606324408),id,new cljs.core.Keyword(null,"scriptSource","scriptSource",3711898680),code], null)], null),cb);
}
});})(id,s,temp__4090__auto__))
);
} else
{return else$.call(null);
}
});
lt.plugins.chromedebugger.__BEH__handle_send_BANG_ = (function __BEH__handle_send_BANG_(this$,msg){return lt.object.raise.call(null,this$,cljs.core.keyword.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",1964298941).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str("!")].join('')),msg);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","handle-send!","lt.plugins.chromedebugger/handle-send!",2323942312),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.__BEH__handle_send_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"send!","send!",1123226891),null], null), null));
lt.plugins.chromedebugger.__BEH__js_eval = (function __BEH__js_eval(this$,msg){if(cljs.core.truth_(lt.plugins.chromedebugger.must_eval_file_QMARK_.call(null,this$,msg)))
{var temp__4092__auto__ = lt.object.by_id.call(null,new cljs.core.Keyword(null,"cb","cb",1013907409).cljs$core$IFn$_invoke$arity$1(msg));if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var data = new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg);var data__$1 = cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"code","code",1016963423),[cljs.core.str(lt.objs.editor.__GT_val.call(null,ed)),cljs.core.str("\n\n//# sourceURL="),cljs.core.str(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(data))].join(''));return lt.plugins.chromedebugger.eval_js.call(null,this$,data__$1,((function (data,data__$1,ed,temp__4092__auto__){
return (function (res){return lt.plugins.chromedebugger.eval_js_form.call(null,this$,msg);
});})(data,data__$1,ed,temp__4092__auto__))
);
} else
{return null;
}
} else
{return lt.plugins.chromedebugger.eval_js_form.call(null,this$,msg);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","js-eval","lt.plugins.chromedebugger/js-eval",3330297468),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.__BEH__js_eval,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.js!","editor.eval.js!",1083020921),null], null), null));
lt.plugins.chromedebugger.__BEH__change_live = (function __BEH__change_live(this$,msg){var temp__4092__auto__ = lt.object.by_id.call(null,new cljs.core.Keyword(null,"cb","cb",1013907409).cljs$core$IFn$_invoke$arity$1(msg));if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;if(cljs.core.truth_(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg))))
{var code = new cljs.core.Keyword(null,"full-source","full-source",2886038667).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg));var code__$1 = (((code == null))?lt.plugins.watches.watched_range(ed,null,null,lt.plugins.js.src__GT_watch):code);cljs.core.println.call(null,code__$1);
return lt.plugins.chromedebugger.changelive_BANG_.call(null,this$,ed,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg)),code__$1,((function (code,code__$1,ed,temp__4092__auto__){
return (function (res){cljs.core.println.call(null,res);
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(res)))
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
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","change-live","lt.plugins.chromedebugger/change-live",3588596819),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.__BEH__change_live,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.js.change-live!","editor.eval.js.change-live!",3424692446),null], null), null));
lt.plugins.chromedebugger.cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
lt.plugins.chromedebugger.id = cljs.core.atom.call(null,0);
lt.plugins.chromedebugger.next_id = (function next_id(){return cljs.core.swap_BANG_.call(null,lt.plugins.chromedebugger.id,cljs.core.inc);
});
lt.plugins.chromedebugger.connected_tabs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
lt.plugins.chromedebugger.format_value = (function format_value(v){var val = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(v);if(cljs.core._EQ_.call(null,val,"undefined"))
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
lt.plugins.chromedebugger.i_compare = (function i_compare(a,b){var ia = a.indexOf("__");var ib = b.indexOf("__");if((cljs.core._EQ_.call(null,ia,-1)) && (cljs.core._EQ_.call(null,ib,-1)))
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
lt.plugins.chromedebugger.__GT_name = (function __GT_name(obj){var n = (function (){var or__6364__auto__ = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(obj);if(cljs.core.truth_(or__6364__auto__))
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
lt.plugins.chromedebugger.desc = (function desc(this$,obj){var e__7793__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",1013907482),lt.plugins.chromedebugger.__GT_name.call(null,obj)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(obj))?[cljs.core.str(": "),cljs.core.str(new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(obj)))].join(''):null)], null));var seq__16275_16482 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7793__auto__){
return (function (){if(cljs.core.truth_(new cljs.core.Keyword(null,"open","open",1017321916).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",1017321916),false], null));
} else
{lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",1017321916),true], null));
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"children","children",2673430897).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return null;
} else
{return lt.plugins.chromedebugger.send.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),1,new cljs.core.Keyword(null,"method","method",4231316563),"Runtime.getProperties",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"objectId","objectId",1104399404),(function (){var or__6364__auto__ = new cljs.core.Keyword(null,"objectId","objectId",1104399404).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(obj));if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return new cljs.core.Keyword(null,"objectId","objectId",1104399404).cljs$core$IFn$_invoke$arity$1(obj);
}
})(),new cljs.core.Keyword(null,"ownProperties","ownProperties",1958141131),true], null)], null),((function (e__7793__auto__){
return (function (d){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",2673430897),new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(d))], null));
});})(e__7793__auto__))
);
}
}
});})(e__7793__auto__))
], null)));var chunk__16276_16483 = null;var count__16277_16484 = 0;var i__16278_16485 = 0;while(true){
if((i__16278_16485 < count__16277_16484))
{var vec__16279_16486 = cljs.core._nth.call(null,chunk__16276_16483,i__16278_16485);var ev__7794__auto___16487 = cljs.core.nth.call(null,vec__16279_16486,0,null);var func__7795__auto___16488 = cljs.core.nth.call(null,vec__16279_16486,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___16487,func__7795__auto___16488);
{
var G__16489 = seq__16275_16482;
var G__16490 = chunk__16276_16483;
var G__16491 = count__16277_16484;
var G__16492 = (i__16278_16485 + 1);
seq__16275_16482 = G__16489;
chunk__16276_16483 = G__16490;
count__16277_16484 = G__16491;
i__16278_16485 = G__16492;
continue;
}
} else
{var temp__4092__auto___16493 = cljs.core.seq.call(null,seq__16275_16482);if(temp__4092__auto___16493)
{var seq__16275_16494__$1 = temp__4092__auto___16493;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16275_16494__$1))
{var c__7112__auto___16495 = cljs.core.chunk_first.call(null,seq__16275_16494__$1);{
var G__16496 = cljs.core.chunk_rest.call(null,seq__16275_16494__$1);
var G__16497 = c__7112__auto___16495;
var G__16498 = cljs.core.count.call(null,c__7112__auto___16495);
var G__16499 = 0;
seq__16275_16482 = G__16496;
chunk__16276_16483 = G__16497;
count__16277_16484 = G__16498;
i__16278_16485 = G__16499;
continue;
}
} else
{var vec__16280_16500 = cljs.core.first.call(null,seq__16275_16494__$1);var ev__7794__auto___16501 = cljs.core.nth.call(null,vec__16280_16500,0,null);var func__7795__auto___16502 = cljs.core.nth.call(null,vec__16280_16500,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___16501,func__7795__auto___16502);
{
var G__16503 = cljs.core.next.call(null,seq__16275_16494__$1);
var G__16504 = null;
var G__16505 = 0;
var G__16506 = 0;
seq__16275_16482 = G__16503;
chunk__16276_16483 = G__16504;
count__16277_16484 = G__16505;
i__16278_16485 = G__16506;
continue;
}
}
} else
{}
}
break;
}
return e__7793__auto__;
});
lt.plugins.chromedebugger.props = (function props(this$,children){var e__7793__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7081__auto__ = (function iter__16291(s__16292){return (new cljs.core.LazySeq(null,(function (){var s__16292__$1 = s__16292;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16292__$1);if(temp__4092__auto__)
{var s__16292__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16292__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__16292__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__16294 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__16293 = 0;while(true){
if((i__16293 < size__7080__auto__))
{var c = cljs.core._nth.call(null,c__7079__auto__,i__16293);cljs.core.chunk_append.call(null,b__16294,(cljs.core.truth_((function (){var and__6352__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c)),"object");if(and__6352__auto__)
{return new cljs.core.Keyword(null,"objectId","objectId",1104399404).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c));
} else
{return and__6352__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),lt.object.__GT_content.call(null,lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","inspector-object","lt.plugins.chromedebugger/inspector-object",4656861767),new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),c))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",1013907482),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(c)], null),": ",(function (){var or__6364__auto__ = new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c));if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return [cljs.core.str(lt.plugins.chromedebugger.format_value.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c)))].join('');
}
})()], null)));
{
var G__16507 = (i__16293 + 1);
i__16293 = G__16507;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16294),iter__16291.call(null,cljs.core.chunk_rest.call(null,s__16292__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16294),null);
}
} else
{var c = cljs.core.first.call(null,s__16292__$2);return cljs.core.cons.call(null,(cljs.core.truth_((function (){var and__6352__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c)),"object");if(and__6352__auto__)
{return new cljs.core.Keyword(null,"objectId","objectId",1104399404).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c));
} else
{return and__6352__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),lt.object.__GT_content.call(null,lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","inspector-object","lt.plugins.chromedebugger/inspector-object",4656861767),new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),c))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",1013907482),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(c)], null),": ",(function (){var or__6364__auto__ = new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c));if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return [cljs.core.str(lt.plugins.chromedebugger.format_value.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c)))].join('');
}
})()], null)),iter__16291.call(null,cljs.core.rest.call(null,s__16292__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7081__auto__.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1017277949),lt.plugins.chromedebugger.i_compare,children));
})()], null));var seq__16295_16508 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__16296_16509 = null;var count__16297_16510 = 0;var i__16298_16511 = 0;while(true){
if((i__16298_16511 < count__16297_16510))
{var vec__16299_16512 = cljs.core._nth.call(null,chunk__16296_16509,i__16298_16511);var ev__7794__auto___16513 = cljs.core.nth.call(null,vec__16299_16512,0,null);var func__7795__auto___16514 = cljs.core.nth.call(null,vec__16299_16512,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___16513,func__7795__auto___16514);
{
var G__16515 = seq__16295_16508;
var G__16516 = chunk__16296_16509;
var G__16517 = count__16297_16510;
var G__16518 = (i__16298_16511 + 1);
seq__16295_16508 = G__16515;
chunk__16296_16509 = G__16516;
count__16297_16510 = G__16517;
i__16298_16511 = G__16518;
continue;
}
} else
{var temp__4092__auto___16519 = cljs.core.seq.call(null,seq__16295_16508);if(temp__4092__auto___16519)
{var seq__16295_16520__$1 = temp__4092__auto___16519;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16295_16520__$1))
{var c__7112__auto___16521 = cljs.core.chunk_first.call(null,seq__16295_16520__$1);{
var G__16522 = cljs.core.chunk_rest.call(null,seq__16295_16520__$1);
var G__16523 = c__7112__auto___16521;
var G__16524 = cljs.core.count.call(null,c__7112__auto___16521);
var G__16525 = 0;
seq__16295_16508 = G__16522;
chunk__16296_16509 = G__16523;
count__16297_16510 = G__16524;
i__16298_16511 = G__16525;
continue;
}
} else
{var vec__16300_16526 = cljs.core.first.call(null,seq__16295_16520__$1);var ev__7794__auto___16527 = cljs.core.nth.call(null,vec__16300_16526,0,null);var func__7795__auto___16528 = cljs.core.nth.call(null,vec__16300_16526,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___16527,func__7795__auto___16528);
{
var G__16529 = cljs.core.next.call(null,seq__16295_16520__$1);
var G__16530 = null;
var G__16531 = 0;
var G__16532 = 0;
seq__16295_16508 = G__16529;
chunk__16296_16509 = G__16530;
count__16297_16510 = G__16531;
i__16298_16511 = G__16532;
continue;
}
}
} else
{}
}
break;
}
return e__7793__auto__;
});
lt.plugins.chromedebugger.__GT_open = (function __GT_open(this$){if(cljs.core.truth_(new cljs.core.Keyword(null,"open","open",1017321916).cljs$core$IFn$_invoke$arity$1(this$)))
{return "inspector-object open";
} else
{return "inspector-object";
}
});
lt.plugins.chromedebugger.inspector__GT_result = (function inspector__GT_result(client,o){var res = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(o);var data = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res);if(cljs.core.truth_(new cljs.core.Keyword(null,"wasThrown","wasThrown",3712175619).cljs$core$IFn$_invoke$arity$1(res)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ex","ex",1013907493),new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(data)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),(function (){var pred__16304 = cljs.core._EQ_;var expr__16305 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(pred__16304.call(null,"object",expr__16305)))
{return lt.object.__GT_content.call(null,lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","inspector-object","lt.plugins.chromedebugger/inspector-object",4656861767),client,data));
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
lt.plugins.chromedebugger.clear_unused_inspectors = (function clear_unused_inspectors(){var seq__16313 = cljs.core.seq.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"inspector.object","inspector.object",1285492104)));var chunk__16315 = null;var count__16316 = 0;var i__16317 = 0;while(true){
if((i__16317 < count__16316))
{var obj = cljs.core._nth.call(null,chunk__16315,i__16317);if((cljs.core.not.call(null,lt.object.__GT_content.call(null,obj))) || (cljs.core.not.call(null,lt.util.dom.parents.call(null,lt.object.__GT_content.call(null,obj),new cljs.core.Keyword(null,"body","body",1016933652)))))
{lt.object.destroy_BANG_.call(null,obj);
{
var G__16533 = seq__16313;
var G__16534 = chunk__16315;
var G__16535 = count__16316;
var G__16536 = (i__16317 + 1);
seq__16313 = G__16533;
chunk__16315 = G__16534;
count__16316 = G__16535;
i__16317 = G__16536;
continue;
}
} else
{{
var G__16537 = seq__16313;
var G__16538 = chunk__16315;
var G__16539 = count__16316;
var G__16540 = (i__16317 + 1);
seq__16313 = G__16537;
chunk__16315 = G__16538;
count__16316 = G__16539;
i__16317 = G__16540;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16313);if(temp__4092__auto__)
{var seq__16313__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16313__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__16313__$1);{
var G__16541 = cljs.core.chunk_rest.call(null,seq__16313__$1);
var G__16542 = c__7112__auto__;
var G__16543 = cljs.core.count.call(null,c__7112__auto__);
var G__16544 = 0;
seq__16313 = G__16541;
chunk__16315 = G__16542;
count__16316 = G__16543;
i__16317 = G__16544;
continue;
}
} else
{var obj = cljs.core.first.call(null,seq__16313__$1);if((cljs.core.not.call(null,lt.object.__GT_content.call(null,obj))) || (cljs.core.not.call(null,lt.util.dom.parents.call(null,lt.object.__GT_content.call(null,obj),new cljs.core.Keyword(null,"body","body",1016933652)))))
{lt.object.destroy_BANG_.call(null,obj);
{
var G__16545 = cljs.core.next.call(null,seq__16313__$1);
var G__16546 = null;
var G__16547 = 0;
var G__16548 = 0;
seq__16313 = G__16545;
chunk__16315 = G__16546;
count__16316 = G__16547;
i__16317 = G__16548;
continue;
}
} else
{{
var G__16549 = cljs.core.next.call(null,seq__16313__$1);
var G__16550 = null;
var G__16551 = 0;
var G__16552 = 0;
seq__16313 = G__16549;
chunk__16315 = G__16550;
count__16316 = G__16551;
i__16317 = G__16552;
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
lt.plugins.chromedebugger.__BEH__clean_inspectors_timer = (function __BEH__clean_inspectors_timer(this$){return lt.plugins.chromedebugger.every.call(null,60000,lt.plugins.chromedebugger.clear_unused_inspectors);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","clean-inspectors-timer","lt.plugins.chromedebugger/clean-inspectors-timer",1192631172),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.__BEH__clean_inspectors_timer,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",1017141378),null], null), null));
lt.plugins.chromedebugger.__BEH__clear_inspector_object = (function __BEH__clear_inspector_object(this$){var temp__4092__auto__ = (function (){var or__6364__auto__ = new cljs.core.Keyword(null,"objectId","objectId",1104399404).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return new cljs.core.Keyword(null,"objectId","objectId",1104399404).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var id = temp__4092__auto__;return lt.plugins.chromedebugger.send.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chromedebugger.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Runtime.releaseObject",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"objectId","objectId",1104399404),id], null)], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","clear-inspector-object","lt.plugins.chromedebugger/clear-inspector-object",872941255),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.__BEH__clear_inspector_object,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"destroy","destroy",2571277164),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","inspector-object","lt.plugins.chromedebugger/inspector-object",4656861767),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspector.object","inspector.object",1285492104),null], null), null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,client,m){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",3951159101),client,new cljs.core.Keyword(null,"info","info",1017141280),m], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),crate.binding.bound.call(null,this$,lt.plugins.chromedebugger.__GT_open)], null),lt.plugins.chromedebugger.desc.call(null,this$,m),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),crate.binding.bound.call(null,crate.binding.subatom.call(null,this$,new cljs.core.Keyword(null,"children","children",2673430897)),cljs.core.partial.call(null,lt.plugins.chromedebugger.props,this$))], null)], null);
}));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.chromedebugger.debugger')) {
goog.provide('lt.plugins.chromedebugger.debugger$');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('crate.binding');
goog.require('lt.objs.plugins');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.files');
goog.require('lt.plugins.chromedebugger');
goog.require('lt.util.dom');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.plugins.chromedebugger');
goog.require('lt.objs.files');
goog.require('lt.objs.plugins');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('clojure.string');
goog.require('crate.binding');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('clojure.set');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.editor');
lt.plugins.chromedebugger.debugger$.source_map = require(lt.objs.plugins.local_module.call(null,"ChromeDebugger","source-map"));
lt.plugins.chromedebugger.debugger$.SourceMapConsumer = lt.plugins.chromedebugger.debugger$.source_map.SourceMapConsumer;
lt.plugins.chromedebugger.debugger$.make_marker = (function make_marker(){var div = document.createElement("div");div.style.color = "red";
div.innerHTML = "\u25CF";
return div;
});
lt.plugins.chromedebugger.debugger$.set_marker = (function() {
var set_marker = null;
var set_marker__2 = (function (ed,line){return set_marker.call(null,ed,line,lt.plugins.chromedebugger.debugger$.make_marker.call(null));
});
var set_marker__3 = (function (ed,line,marker){var cm = lt.objs.editor.__GT_cm_ed.call(null,ed);var line__$1 = (line - 1);lt.plugins.chromedebugger.debugger$.add_breakpoints_gutter.call(null,ed);
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
lt.plugins.chromedebugger.debugger$.remove_marker = (function remove_marker(ed,line){return lt.plugins.chromedebugger.debugger$.set_marker.call(null,ed,line,null);
});
lt.plugins.chromedebugger.debugger$.toggle_marker = (function() {
var toggle_marker = null;
var toggle_marker__2 = (function (ed,line){return toggle_marker.call(null,ed,line,lt.plugins.chromedebugger.debugger$.make_marker);
});
var toggle_marker__3 = (function (ed,line,make){var cm = lt.objs.editor.__GT_cm_ed.call(null,ed);var line__$1 = (line - 1);var info = cm.lineInfo(line__$1);var marked_QMARK_ = info.gutterMarkers;lt.plugins.chromedebugger.debugger$.add_breakpoints_gutter.call(null,ed);
return cm.setGutterMarker(line__$1,"breakpoints",(cljs.core.truth_(marked_QMARK_)?null:make.call(null)));
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
lt.plugins.chromedebugger.debugger$.generated_position = (function generated_position(path,source_pos,sm){return cljs.core.js__GT_clj.call(null,(new lt.plugins.chromedebugger.debugger$.SourceMapConsumer(cljs.core.clj__GT_js.call(null,sm))).generatedPositionFor({"column": new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(source_pos), "line": new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(source_pos), "source": path}));
});
/**
* Set breakpoint on client for script matching path at position pos
* 
* pos is a map with at least :line, possibly :ch (not used yet)
* 
*/
lt.plugins.chromedebugger.debugger$.set_breakpoint = (function set_breakpoint(client,path,pos,cb){var temp__4090__auto__ = lt.plugins.chromedebugger.find_script.call(null,client,path);if(cljs.core.truth_(temp__4090__auto__))
{var s = temp__4090__auto__;var id = new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.vals.call(null,s)));var sm = new cljs.core.Keyword(null,"sourceMap","sourceMap",3610443443).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.vals.call(null,s)));var location = (cljs.core.truth_(sm)?(function (){var gen_pos = lt.plugins.chromedebugger.debugger$.generated_position.call(null,path,pos,sm);var line = (gen_pos.line - 1);var column = gen_pos.column;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lineNumber","lineNumber",684762063),line,new cljs.core.Keyword(null,"columnNumber","columnNumber",4716049841),column,new cljs.core.Keyword(null,"scriptId","scriptId",606324408),id], null);
})():new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lineNumber","lineNumber",684762063),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"scriptId","scriptId",606324408),id], null));return lt.plugins.chromedebugger.script_exists_QMARK_.call(null,client,id,((function (id,sm,location,s,temp__4090__auto__){
return (function (exists_QMARK_){cljs.core.println.call(null,"exists?");
if(cljs.core.not.call(null,exists_QMARK_))
{lt.plugins.chromedebugger.remove_script_BANG_.call(null,client,path,id);
return set_breakpoint.call(null,lt.plugins.chromedebugger.debugger$.this$,path,pos);
} else
{return lt.plugins.chromedebugger.send.call(null,client,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chromedebugger.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.setBreakpoint",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"location","location",2914947879),location], null)], null),((function (id,sm,location,s,temp__4090__auto__){
return (function (r){cljs.core.println.call(null,"done: ",r);
var error = new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(r);var success_QMARK_ = (error == null);return cb.call(null,success_QMARK_,((success_QMARK_)?new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(r):error));
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
lt.plugins.chromedebugger.debugger$.remove_breakpoint = (function remove_breakpoint(client,breakpoint,cb){return lt.plugins.chromedebugger.send.call(null,client,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chromedebugger.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.removeBreakpoint",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"breakpointId","breakpointId",1584171102),new cljs.core.Keyword(null,"breakpointId","breakpointId",1584171102).cljs$core$IFn$_invoke$arity$1(breakpoint)], null)], null),cb);
});
lt.plugins.chromedebugger.debugger$.get_breakpoint = (function get_breakpoint(client,path,pos){return cljs.core.get.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"breakpoints","breakpoints",3249057300).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)),path),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos));
});
/**
* Does specified editor have breakpoints gutter?
*/
lt.plugins.chromedebugger.debugger$.breakpoints_gutter_QMARK_ = (function breakpoints_gutter_QMARK_(ed){return cljs.core.not_EQ_.call(null,lt.objs.editor.__GT_cm_ed.call(null,ed).options.gutters.indexOf("breakpoints"),-1);
});
/**
* Add breakpoints gutter to specified editor if it doesn't already exist
*/
lt.plugins.chromedebugger.debugger$.add_breakpoints_gutter = (function add_breakpoints_gutter(ed){if(lt.plugins.chromedebugger.debugger$.breakpoints_gutter_QMARK_.call(null,ed))
{return null;
} else
{return lt.objs.editor.add_gutter.call(null,ed,"breakpoints",5);
}
});
/**
* Remove breakpoints gutter from specified editor
*/
lt.plugins.chromedebugger.debugger$.remove_breakpoints_gutter = (function remove_breakpoints_gutter(ed){return lt.objs.editor.remove_gutter.call(null,ed,"breakpoints");
});
lt.plugins.chromedebugger.debugger$.breakpoints = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
lt.plugins.chromedebugger.debugger$.__BEH__add_breakpoint_marker = (function __BEH__add_breakpoint_marker(ed,m){cljs.core.println.call(null,"lets set the marker");
lt.plugins.chromedebugger.debugger$.set_marker.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(m)));
return cljs.core.println.call(null,"add breakpoint marker",m);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger.debugger","add-breakpoint-marker","lt.plugins.chromedebugger.debugger/add-breakpoint-marker",3395383380),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.debugger$.__BEH__add_breakpoint_marker,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"breakpoint-set","breakpoint-set",3578693624),null], null), null));
lt.plugins.chromedebugger.debugger$.__BEH__remove_breakpoint_marker = (function __BEH__remove_breakpoint_marker(ed,m){return lt.plugins.chromedebugger.debugger$.remove_marker.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(m)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger.debugger","remove-breakpoint-marker","lt.plugins.chromedebugger.debugger/remove-breakpoint-marker",969202231),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.debugger$.__BEH__remove_breakpoint_marker,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"breakpoint-removed","breakpoint-removed",1169175030),null], null), null));
lt.plugins.chromedebugger.debugger$.__BEH__toggle_breakpoint = (function __BEH__toggle_breakpoint(this$,m){cljs.core.println.call(null,"toggle breakpoint!");
var pos = lt.objs.editor.__GT_cursor.call(null,this$);var pos__$1 = cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos) + 1));var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var client = lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.js","editor.eval.js",1847417804),new cljs.core.Keyword(null,"origin","origin",4300251800),this$], null));var breakpoint = lt.plugins.chromedebugger.debugger$.get_breakpoint.call(null,client,path,pos__$1);cljs.core.println.call(null,(cljs.core.truth_(breakpoint)?1:0));
if(cljs.core.truth_(breakpoint))
{return lt.plugins.chromedebugger.debugger$.remove_breakpoint.call(null,client,breakpoint,((function (pos,pos__$1,path,client,breakpoint){
return (function (r){lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"breakpoint-removed","breakpoint-removed",1169175030),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"pos","pos",1014015430),pos__$1], null));
cljs.core.swap_BANG_.call(null,lt.plugins.chromedebugger.debugger$.breakpoints,cljs.core.dissoc,new cljs.core.Keyword(null,"breakpointId","breakpointId",1584171102).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,cljs.core.deref.call(null,client),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"breakpoints","breakpoints",3249057300),path,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos__$1)], null))));
lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"breakpoints","breakpoints",3249057300),path], null),cljs.core.dissoc,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos__$1));
return cljs.core.println.call(null,"removed!!!!",r);
});})(pos,pos__$1,path,client,breakpoint))
);
} else
{return lt.plugins.chromedebugger.debugger$.set_breakpoint.call(null,client,path,pos__$1,((function (pos,pos__$1,path,client,breakpoint){
return (function (success_QMARK_,result){cljs.core.println.call(null,"cb: ",success_QMARK_,result);
if(cljs.core.truth_(success_QMARK_))
{lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"breakpoint-set","breakpoint-set",3578693624),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"breakpoint","breakpoint",2332931939),result,new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"pos","pos",1014015430),pos__$1], null));
cljs.core.swap_BANG_.call(null,lt.plugins.chromedebugger.debugger$.breakpoints,cljs.core.assoc,new cljs.core.Keyword(null,"breakpointId","breakpointId",1584171102).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"pos","pos",1014015430),pos__$1,new cljs.core.Keyword(null,"breakpoint","breakpoint",2332931939),result,new cljs.core.Keyword(null,"origin","origin",4300251800),this$], null));
return lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"breakpoints","breakpoints",3249057300)], null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos__$1)], null),result);
} else
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"breakpoint-set-error","breakpoint-set-error",2405527923),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"pos","pos",1014015430),pos__$1,new cljs.core.Keyword(null,"message","message",1968829305),result], null));
}
});})(pos,pos__$1,path,client,breakpoint))
);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger.debugger","toggle-breakpoint","lt.plugins.chromedebugger.debugger/toggle-breakpoint",1839610804),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.debugger$.__BEH__toggle_breakpoint,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toggle-breakpoint!","toggle-breakpoint!",1944001737),null], null), null));
lt.plugins.chromedebugger.debugger$.jump_to_bp = (function jump_to_bp(bp_id){var breakpoint = cljs.core.get.call(null,cljs.core.deref.call(null,lt.plugins.chromedebugger.debugger$.breakpoints),bp_id);var origin = new cljs.core.Keyword(null,"origin","origin",4300251800).cljs$core$IFn$_invoke$arity$1(breakpoint);if(cljs.core.truth_(breakpoint))
{var cm = lt.objs.editor.__GT_cm_ed.call(null,origin);var line = (new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(breakpoint)) - 1);lt.object.update_BANG_.call(null,origin,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chrome-debugger","chrome-debugger",1103806854)], null),cljs.core.assoc,new cljs.core.Keyword(null,"paused-at","paused-at",1843746980),line);
cm.addLineClass(line,"background","breakpoint-paused");
return lt.object.raise.call(null,origin,new cljs.core.Keyword(null,"focus!","focus!",4039653819));
} else
{return null;
}
});
lt.plugins.chromedebugger.debugger$.get_scripts = (function get_scripts(client,id){var iter__7081__auto__ = (function iter__14829(s__14830){return (new cljs.core.LazySeq(null,(function (){var s__14830__$1 = s__14830;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14830__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__14840 = cljs.core.first.call(null,xs__4579__auto__);var _ = cljs.core.nth.call(null,vec__14840,0,null);var vs = cljs.core.nth.call(null,vec__14840,1,null);var iterys__7077__auto__ = ((function (s__14830__$1,vec__14840,_,vs,xs__4579__auto__,temp__4092__auto__){
return (function iter__14831(s__14832){return (new cljs.core.LazySeq(null,((function (s__14830__$1,vec__14840,_,vs,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__14832__$1 = s__14832;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__14832__$1);if(temp__4092__auto____$1)
{var s__14832__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14832__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__14832__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__14834 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__14833 = 0;while(true){
if((i__14833 < size__7080__auto__))
{var vec__14843 = cljs.core._nth.call(null,c__7079__auto__,i__14833);var ___$1 = cljs.core.nth.call(null,vec__14843,0,null);var vvs = cljs.core.nth.call(null,vec__14843,1,null);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(vvs),id))
{cljs.core.chunk_append.call(null,b__14834,vvs);
{
var G__14900 = (i__14833 + 1);
i__14833 = G__14900;
continue;
}
} else
{{
var G__14901 = (i__14833 + 1);
i__14833 = G__14901;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14834),iter__14831.call(null,cljs.core.chunk_rest.call(null,s__14832__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14834),null);
}
} else
{var vec__14844 = cljs.core.first.call(null,s__14832__$2);var ___$1 = cljs.core.nth.call(null,vec__14844,0,null);var vvs = cljs.core.nth.call(null,vec__14844,1,null);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(vvs),id))
{return cljs.core.cons.call(null,vvs,iter__14831.call(null,cljs.core.rest.call(null,s__14832__$2)));
} else
{{
var G__14902 = cljs.core.rest.call(null,s__14832__$2);
s__14832__$1 = G__14902;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__14830__$1,vec__14840,_,vs,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__14830__$1,vec__14840,_,vs,xs__4579__auto__,temp__4092__auto__))
;var fs__7078__auto__ = cljs.core.seq.call(null,iterys__7077__auto__.call(null,vs));if(fs__7078__auto__)
{return cljs.core.concat.call(null,fs__7078__auto__,iter__14829.call(null,cljs.core.rest.call(null,s__14830__$1)));
} else
{{
var G__14903 = cljs.core.rest.call(null,s__14830__$1);
s__14830__$1 = G__14903;
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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger.debugger","debug-panel","lt.plugins.chromedebugger.debugger/debug-panel",2304889268),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"debug.panel","debug.panel",2689807899),null], null), null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,client,editor){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",3951159101),client,new cljs.core.Keyword(null,"debugger","debugger",1561716627),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"paused?","paused?",4518674499),false], null)], null));
return lt.util.dom.prepend.call(null,lt.object.__GT_content.call(null,editor),lt.plugins.chromedebugger.debugger$.debug_panel.call(null,this$));
}));
lt.plugins.chromedebugger.debugger$.debug_panel_resume = (function debug_panel_resume(this$){var e__7793__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"resume"], null),crate.binding.bound.call(null,this$,(function (p1__14845_SHARP_){if(cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",4518674499).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"debugger","debugger",1561716627).cljs$core$IFn$_invoke$arity$1(p1__14845_SHARP_))))
{return "\u25B6";
} else
{return "=";
}
}))], null));var seq__14852_14904 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7793__auto__){
return (function (){var c = (cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",4518674499).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"debugger","debugger",1561716627).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))?new cljs.core.Keyword(null,"resume-debugger","resume-debugger",4240016691):new cljs.core.Keyword(null,"pause-debugger","pause-debugger",1706137994));var editor = lt.objs.editor.pool.last_active.call(null);var client = new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return lt.objs.sidebar.command.exec_BANG_.call(null,c,editor,client);
});})(e__7793__auto__))
], null)));var chunk__14853_14905 = null;var count__14854_14906 = 0;var i__14855_14907 = 0;while(true){
if((i__14855_14907 < count__14854_14906))
{var vec__14856_14908 = cljs.core._nth.call(null,chunk__14853_14905,i__14855_14907);var ev__7794__auto___14909 = cljs.core.nth.call(null,vec__14856_14908,0,null);var func__7795__auto___14910 = cljs.core.nth.call(null,vec__14856_14908,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___14909,func__7795__auto___14910);
{
var G__14911 = seq__14852_14904;
var G__14912 = chunk__14853_14905;
var G__14913 = count__14854_14906;
var G__14914 = (i__14855_14907 + 1);
seq__14852_14904 = G__14911;
chunk__14853_14905 = G__14912;
count__14854_14906 = G__14913;
i__14855_14907 = G__14914;
continue;
}
} else
{var temp__4092__auto___14915 = cljs.core.seq.call(null,seq__14852_14904);if(temp__4092__auto___14915)
{var seq__14852_14916__$1 = temp__4092__auto___14915;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14852_14916__$1))
{var c__7112__auto___14917 = cljs.core.chunk_first.call(null,seq__14852_14916__$1);{
var G__14918 = cljs.core.chunk_rest.call(null,seq__14852_14916__$1);
var G__14919 = c__7112__auto___14917;
var G__14920 = cljs.core.count.call(null,c__7112__auto___14917);
var G__14921 = 0;
seq__14852_14904 = G__14918;
chunk__14853_14905 = G__14919;
count__14854_14906 = G__14920;
i__14855_14907 = G__14921;
continue;
}
} else
{var vec__14857_14922 = cljs.core.first.call(null,seq__14852_14916__$1);var ev__7794__auto___14923 = cljs.core.nth.call(null,vec__14857_14922,0,null);var func__7795__auto___14924 = cljs.core.nth.call(null,vec__14857_14922,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___14923,func__7795__auto___14924);
{
var G__14925 = cljs.core.next.call(null,seq__14852_14916__$1);
var G__14926 = null;
var G__14927 = 0;
var G__14928 = 0;
seq__14852_14904 = G__14925;
chunk__14853_14905 = G__14926;
count__14854_14906 = G__14927;
i__14855_14907 = G__14928;
continue;
}
}
} else
{}
}
break;
}
return e__7793__auto__;
});
lt.plugins.chromedebugger.debugger$.__GT_scope_variables = (function __GT_scope_variables(panel,vars){if(cljs.core.truth_(vars))
{var iter__7081__auto__ = (function iter__14862(s__14863){return (new cljs.core.LazySeq(null,(function (){var s__14863__$1 = s__14863;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14863__$1);if(temp__4092__auto__)
{var s__14863__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14863__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__14863__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__14865 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__14864 = 0;while(true){
if((i__14864 < size__7080__auto__))
{var var$ = cljs.core._nth.call(null,c__7079__auto__,i__14864);cljs.core.chunk_append.call(null,b__14865,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(lt.plugins.chromedebugger.inspector__GT_result.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,panel)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),new cljs.core.Keyword(null,"object","object",4285503153).cljs$core$IFn$_invoke$arity$1(var$)], null)], null))));
{
var G__14929 = (i__14864 + 1);
i__14864 = G__14929;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14865),iter__14862.call(null,cljs.core.chunk_rest.call(null,s__14863__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14865),null);
}
} else
{var var$ = cljs.core.first.call(null,s__14863__$2);return cljs.core.cons.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(lt.plugins.chromedebugger.inspector__GT_result.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,panel)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),new cljs.core.Keyword(null,"object","object",4285503153).cljs$core$IFn$_invoke$arity$1(var$)], null)], null))),iter__14862.call(null,cljs.core.rest.call(null,s__14863__$2)));
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
lt.plugins.chromedebugger.debugger$.__GT_call_frame_name = (function __GT_call_frame_name(frame){var n = new cljs.core.Keyword(null,"functionName","functionName",802531829).cljs$core$IFn$_invoke$arity$1(frame);if(cljs.core.empty_QMARK_.call(null,n))
{return "(anonymous function)";
} else
{return n;
}
});
lt.plugins.chromedebugger.debugger$.call_frame = (function call_frame(panel,frame){var e__7793__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),cljs.core.PersistentArrayMap.EMPTY,lt.plugins.chromedebugger.debugger$.__GT_call_frame_name.call(null,frame)], null));var seq__14872_14930 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7793__auto__){
return (function (){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"debugger","debugger",1561716627).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,panel))));
lt.object.update_BANG_.call(null,panel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debugger","debugger",1561716627)], null),cljs.core.assoc,new cljs.core.Keyword(null,"scope-variables","scope-variables",1703262384),new cljs.core.Keyword(null,"scopeChain","scopeChain",796553279).cljs$core$IFn$_invoke$arity$1(frame),new cljs.core.Keyword(null,"selected-frame","selected-frame",1773798189),frame);
return console.log("??",cljs.core.clj__GT_js.call(null,frame));
});})(e__7793__auto__))
], null)));var chunk__14873_14931 = null;var count__14874_14932 = 0;var i__14875_14933 = 0;while(true){
if((i__14875_14933 < count__14874_14932))
{var vec__14876_14934 = cljs.core._nth.call(null,chunk__14873_14931,i__14875_14933);var ev__7794__auto___14935 = cljs.core.nth.call(null,vec__14876_14934,0,null);var func__7795__auto___14936 = cljs.core.nth.call(null,vec__14876_14934,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___14935,func__7795__auto___14936);
{
var G__14937 = seq__14872_14930;
var G__14938 = chunk__14873_14931;
var G__14939 = count__14874_14932;
var G__14940 = (i__14875_14933 + 1);
seq__14872_14930 = G__14937;
chunk__14873_14931 = G__14938;
count__14874_14932 = G__14939;
i__14875_14933 = G__14940;
continue;
}
} else
{var temp__4092__auto___14941 = cljs.core.seq.call(null,seq__14872_14930);if(temp__4092__auto___14941)
{var seq__14872_14942__$1 = temp__4092__auto___14941;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14872_14942__$1))
{var c__7112__auto___14943 = cljs.core.chunk_first.call(null,seq__14872_14942__$1);{
var G__14944 = cljs.core.chunk_rest.call(null,seq__14872_14942__$1);
var G__14945 = c__7112__auto___14943;
var G__14946 = cljs.core.count.call(null,c__7112__auto___14943);
var G__14947 = 0;
seq__14872_14930 = G__14944;
chunk__14873_14931 = G__14945;
count__14874_14932 = G__14946;
i__14875_14933 = G__14947;
continue;
}
} else
{var vec__14877_14948 = cljs.core.first.call(null,seq__14872_14942__$1);var ev__7794__auto___14949 = cljs.core.nth.call(null,vec__14877_14948,0,null);var func__7795__auto___14950 = cljs.core.nth.call(null,vec__14877_14948,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___14949,func__7795__auto___14950);
{
var G__14951 = cljs.core.next.call(null,seq__14872_14942__$1);
var G__14952 = null;
var G__14953 = 0;
var G__14954 = 0;
seq__14872_14930 = G__14951;
chunk__14873_14931 = G__14952;
count__14874_14932 = G__14953;
i__14875_14933 = G__14954;
continue;
}
}
} else
{}
}
break;
}
return e__7793__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger.debugger","editor","lt.plugins.chromedebugger.debugger/editor",965018199),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"editor.inline-result","editor.inline-result",1965420162),null,new cljs.core.Keyword(null,"editor.javascript","editor.javascript",4365456384),null,new cljs.core.Keyword(null,"editor","editor",4001043679),null,new cljs.core.Keyword(null,"editor.keys.normal","editor.keys.normal",2927389330),null], null), null),new cljs.core.Keyword(null,"init","init",1017141378),(function (obj,info){var edi = lt.objs.editor.make.call(null,info);lt.object.merge_BANG_.call(null,obj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ed","ed",1013907473),edi,new cljs.core.Keyword(null,"doc","doc",1014003882),new cljs.core.Keyword(null,"doc","doc",1014003882).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.dissoc.call(null,info,new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"doc","doc",1014003882))], null));
lt.objs.editor.wrap_object_events.call(null,edi,obj);
return lt.objs.editor.__GT_elem.call(null,edi);
}));
lt.plugins.chromedebugger.debugger$.__GT_call_frames = (function __GT_call_frames(panel,frames){if(cljs.core.truth_(frames))
{var iter__7081__auto__ = (function iter__14882(s__14883){return (new cljs.core.LazySeq(null,(function (){var s__14883__$1 = s__14883;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14883__$1);if(temp__4092__auto__)
{var s__14883__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14883__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__14883__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__14885 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__14884 = 0;while(true){
if((i__14884 < size__7080__auto__))
{var frame = cljs.core._nth.call(null,c__7079__auto__,i__14884);cljs.core.chunk_append.call(null,b__14885,lt.plugins.chromedebugger.debugger$.call_frame.call(null,panel,frame));
{
var G__14955 = (i__14884 + 1);
i__14884 = G__14955;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14885),iter__14882.call(null,cljs.core.chunk_rest.call(null,s__14883__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14885),null);
}
} else
{var frame = cljs.core.first.call(null,s__14883__$2);return cljs.core.cons.call(null,lt.plugins.chromedebugger.debugger$.call_frame.call(null,panel,frame),iter__14882.call(null,cljs.core.rest.call(null,s__14883__$2)));
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
* Get classes to apply to call frames list
*/
lt.plugins.chromedebugger.debugger$.__GT_call_frames_class = (function __GT_call_frames_class(call_frames){return [cljs.core.str("call-frames"),cljs.core.str(((cljs.core.empty_QMARK_.call(null,call_frames))?" empty":null))].join('');
});
lt.plugins.chromedebugger.debugger$.last_ed_mime = (function last_ed_mime(){return new cljs.core.Keyword(null,"mime","mime",1017255846).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.editor.pool.last_active.call(null))));
});
lt.plugins.chromedebugger.debugger$.get_ed_tags = (function() {
var get_ed_tags = null;
var get_ed_tags__0 = (function (){return get_ed_tags.call(null,lt.objs.editor.pool.last_active.call(null));
});
var get_ed_tags__1 = (function (ed){var type_name = new cljs.core.Keyword(null,"type-name","type-name",1486910640).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));return new cljs.core.Keyword(null,"tags","tags",1017456523).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"types","types",1124748267).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.files.files_obj)),type_name));
});
get_ed_tags = function(ed){
switch(arguments.length){
case 0:
return get_ed_tags__0.call(this);
case 1:
return get_ed_tags__1.call(this,ed);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_ed_tags.cljs$core$IFn$_invoke$arity$0 = get_ed_tags__0;
get_ed_tags.cljs$core$IFn$_invoke$arity$1 = get_ed_tags__1;
return get_ed_tags;
})()
;
lt.plugins.chromedebugger.debugger$.debug_panel = (function debug_panel(this$){var e__7793__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"debug-panel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),cljs.core.PersistentArrayMap.EMPTY,"Debugger"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"controls"], null),lt.plugins.chromedebugger.debugger$.debug_panel_resume.call(null,this$)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Call Stack"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),crate.binding.bound.call(null,crate.binding.subatom.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debugger","debugger",1561716627),new cljs.core.Keyword(null,"call-frames","call-frames",3247219303)], null)),lt.plugins.chromedebugger.debugger$.__GT_call_frames_class)], null),crate.binding.bound.call(null,crate.binding.subatom.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debugger","debugger",1561716627),new cljs.core.Keyword(null,"call-frames","call-frames",3247219303)], null)),(function (p1__14886_SHARP_){return lt.plugins.chromedebugger.debugger$.__GT_call_frames.call(null,this$,p1__14886_SHARP_);
}))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Scope Variables"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"scope-variables"], null),crate.binding.bound.call(null,crate.binding.subatom.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debugger","debugger",1561716627),new cljs.core.Keyword(null,"scope-variables","scope-variables",1703262384)], null)),(function (p1__14887_SHARP_){return lt.plugins.chromedebugger.debugger$.__GT_scope_variables.call(null,this$,p1__14887_SHARP_);
}))], null),(function (){var ed = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger.debugger","editor","lt.plugins.chromedebugger.debugger/editor",965018199),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mime","mime",1017255846),lt.plugins.chromedebugger.debugger$.last_ed_mime.call(null)], null));var tags = lt.plugins.chromedebugger.debugger$.get_ed_tags.call(null);lt.object.add_tags.call(null,ed,tags);
return lt.object.__GT_content.call(null,ed);
})()], null));var seq__14894_14956 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__14895_14957 = null;var count__14896_14958 = 0;var i__14897_14959 = 0;while(true){
if((i__14897_14959 < count__14896_14958))
{var vec__14898_14960 = cljs.core._nth.call(null,chunk__14895_14957,i__14897_14959);var ev__7794__auto___14961 = cljs.core.nth.call(null,vec__14898_14960,0,null);var func__7795__auto___14962 = cljs.core.nth.call(null,vec__14898_14960,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___14961,func__7795__auto___14962);
{
var G__14963 = seq__14894_14956;
var G__14964 = chunk__14895_14957;
var G__14965 = count__14896_14958;
var G__14966 = (i__14897_14959 + 1);
seq__14894_14956 = G__14963;
chunk__14895_14957 = G__14964;
count__14896_14958 = G__14965;
i__14897_14959 = G__14966;
continue;
}
} else
{var temp__4092__auto___14967 = cljs.core.seq.call(null,seq__14894_14956);if(temp__4092__auto___14967)
{var seq__14894_14968__$1 = temp__4092__auto___14967;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14894_14968__$1))
{var c__7112__auto___14969 = cljs.core.chunk_first.call(null,seq__14894_14968__$1);{
var G__14970 = cljs.core.chunk_rest.call(null,seq__14894_14968__$1);
var G__14971 = c__7112__auto___14969;
var G__14972 = cljs.core.count.call(null,c__7112__auto___14969);
var G__14973 = 0;
seq__14894_14956 = G__14970;
chunk__14895_14957 = G__14971;
count__14896_14958 = G__14972;
i__14897_14959 = G__14973;
continue;
}
} else
{var vec__14899_14974 = cljs.core.first.call(null,seq__14894_14968__$1);var ev__7794__auto___14975 = cljs.core.nth.call(null,vec__14899_14974,0,null);var func__7795__auto___14976 = cljs.core.nth.call(null,vec__14899_14974,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___14975,func__7795__auto___14976);
{
var G__14977 = cljs.core.next.call(null,seq__14894_14968__$1);
var G__14978 = null;
var G__14979 = 0;
var G__14980 = 0;
seq__14894_14956 = G__14977;
chunk__14895_14957 = G__14978;
count__14896_14958 = G__14979;
i__14897_14959 = G__14980;
continue;
}
}
} else
{}
}
break;
}
return e__7793__auto__;
});
lt.plugins.chromedebugger.debugger$.__BEH__debug_panel_destroyed = (function __BEH__debug_panel_destroyed(this$){return cljs.core.println.call(null,"destroy!!");
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger.debugger","debug-panel-destroyed","lt.plugins.chromedebugger.debugger/debug-panel-destroyed",1170916736),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.debugger$.__BEH__debug_panel_destroyed,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"destroy","destroy",2571277164),null], null), null));
lt.plugins.chromedebugger.debugger$.__BEH__create_panel_on_connect = (function __BEH__create_panel_on_connect(this$){var editor = lt.objs.editor.pool.last_active.call(null);var panel = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger.debugger","debug-panel","lt.plugins.chromedebugger.debugger/debug-panel",2304889268),this$,editor);return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"debug-panel","debug-panel",2661178748),panel], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger.debugger","create-panel-on-connect","lt.plugins.chromedebugger.debugger/create-panel-on-connect",853243008),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.debugger$.__BEH__create_panel_on_connect,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connect","connect",1965255772),null], null), null));
lt.plugins.chromedebugger.debugger$.__BEH__remove_panel_on_disconnect = (function __BEH__remove_panel_on_disconnect(this$,client){var temp__4092__auto__ = new cljs.core.Keyword(null,"debug-panel","debug-panel",2661178748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto__))
{var panel = temp__4092__auto__;return lt.object.destroy_BANG_.call(null,panel);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger.debugger","remove-panel-on-disconnect","lt.plugins.chromedebugger.debugger/remove-panel-on-disconnect",4450331682),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.debugger$.__BEH__remove_panel_on_disconnect,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disconnect","disconnect",1544309774),null], null), null));
lt.plugins.chromedebugger.debugger$.__BEH__debugger_paused = (function __BEH__debugger_paused(this$,s){var params = new cljs.core.Keyword(null,"params","params",4313443576).cljs$core$IFn$_invoke$arity$1(s);var reason = new cljs.core.Keyword(null,"reason","reason",4373906870).cljs$core$IFn$_invoke$arity$1(params);var breakpoint = cljs.core.first.call(null,new cljs.core.Keyword(null,"hitBreakpoints","hitBreakpoints",929618049).cljs$core$IFn$_invoke$arity$1(params));var call_frames = new cljs.core.Keyword(null,"callFrames","callFrames",2227904534).cljs$core$IFn$_invoke$arity$1(params);var editor = lt.objs.editor.pool.last_active.call(null);console.log(cljs.core.clj__GT_js.call(null,s));
var scope_chain_14981 = cljs.core.js__GT_clj.call(null,new cljs.core.Keyword(null,"scopeChain","scopeChain",796553279).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,call_frames)));var panel_14982 = new cljs.core.Keyword(null,"debug-panel","debug-panel",2661178748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));lt.object.update_BANG_.call(null,panel_14982,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debugger","debugger",1561716627)], null),cljs.core.assoc,new cljs.core.Keyword(null,"paused?","paused?",4518674499),true,new cljs.core.Keyword(null,"call-frames","call-frames",3247219303),call_frames);
if(cljs.core.truth_(breakpoint))
{return lt.plugins.chromedebugger.debugger$.jump_to_bp.call(null,breakpoint);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger.debugger","debugger-paused","lt.plugins.chromedebugger.debugger/debugger-paused",3540433732),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.debugger$.__BEH__debugger_paused,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Debugger.paused","Debugger.paused",1114783469),null], null), null));
lt.plugins.chromedebugger.debugger$.__BEH__debugger_resumed = (function __BEH__debugger_resumed(this$){var line = cljs.core.get_in.call(null,cljs.core.deref.call(null,this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chrome-debugger","chrome-debugger",1103806854),new cljs.core.Keyword(null,"paused-at","paused-at",1843746980)], null));var cm = lt.objs.editor.__GT_cm_ed.call(null,this$);return cm.removeLineClass(line,"background","breakpoint-paused");
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger.debugger","debugger-resumed","lt.plugins.chromedebugger.debugger/debugger-resumed",4198221717),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.debugger$.__BEH__debugger_resumed,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"debugger-resumed","debugger-resumed",833902493),null], null), null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"toggle-breakpoint","toggle-breakpoint",3260664700),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Toggle Breakpoint",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var editor = lt.objs.editor.pool.last_active.call(null);var pos = lt.objs.editor.__GT_cursor.call(null,editor);return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"toggle-breakpoint!","toggle-breakpoint!",1944001737));
})], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"resume-debugger","resume-debugger",4240016691),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Debugger - Resume",new cljs.core.Keyword(null,"exec","exec",1017031683),(function() {
var G__14983 = null;
var G__14983__0 = (function (){var editor = lt.objs.editor.pool.last_active.call(null);var client = lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.js","editor.eval.js",1847417804),new cljs.core.Keyword(null,"origin","origin",4300251800),editor], null));return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"resume-debugger","resume-debugger",4240016691),editor,client);
});
var G__14983__2 = (function (editor,client){return lt.plugins.chromedebugger.send.call(null,client,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chromedebugger.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.resume"], null),(function (r){lt.object.update_BANG_.call(null,new cljs.core.Keyword(null,"debug-panel","debug-panel",2661178748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debugger","debugger",1561716627)], null),cljs.core.assoc,new cljs.core.Keyword(null,"paused?","paused?",4518674499),false,new cljs.core.Keyword(null,"scope-variables","scope-variables",1703262384),null,new cljs.core.Keyword(null,"call-frames","call-frames",3247219303),null);
return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"debugger-resumed","debugger-resumed",833902493));
}));
});
G__14983 = function(editor,client){
switch(arguments.length){
case 0:
return G__14983__0.call(this);
case 2:
return G__14983__2.call(this,editor,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__14983;
})()
], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"pause-debugger","pause-debugger",1706137994),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Debugger - Pause",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var editor = lt.objs.editor.pool.last_active.call(null);var client = lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.js","editor.eval.js",1847417804),new cljs.core.Keyword(null,"origin","origin",4300251800),editor], null));return lt.plugins.chromedebugger.send.call(null,client,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chromedebugger.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.pause"], null),((function (editor,client){
return (function (r){return cljs.core.println.call(null,r);
});})(editor,client))
);
})], null));
}

//# sourceMappingURL=chromedebugger_compiled.js.map