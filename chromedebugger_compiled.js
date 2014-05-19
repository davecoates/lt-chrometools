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
lt.plugins.chromedebugger.server_input = (function server_input(){var e__8223__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"host:port",new cljs.core.Keyword(null,"value","value",1125876963),"localhost:"], null)], null));var seq__13285_13417 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",1111509066),(function (){return lt.objs.context.in_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
}),new cljs.core.Keyword(null,"blur","blur",1016931289),(function (){return lt.objs.context.out_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
})], null)));var chunk__13286_13418 = null;var count__13287_13419 = 0;var i__13288_13420 = 0;while(true){
if((i__13288_13420 < count__13287_13419))
{var vec__13289_13421 = cljs.core._nth.call(null,chunk__13286_13418,i__13288_13420);var ev__8224__auto___13422 = cljs.core.nth.call(null,vec__13289_13421,0,null);var func__8225__auto___13423 = cljs.core.nth.call(null,vec__13289_13421,1,null);lt.util.dom.on.call(null,e__8223__auto__,ev__8224__auto___13422,func__8225__auto___13423);
{
var G__13424 = seq__13285_13417;
var G__13425 = chunk__13286_13418;
var G__13426 = count__13287_13419;
var G__13427 = (i__13288_13420 + 1);
seq__13285_13417 = G__13424;
chunk__13286_13418 = G__13425;
count__13287_13419 = G__13426;
i__13288_13420 = G__13427;
continue;
}
} else
{var temp__4092__auto___13428 = cljs.core.seq.call(null,seq__13285_13417);if(temp__4092__auto___13428)
{var seq__13285_13429__$1 = temp__4092__auto___13428;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13285_13429__$1))
{var c__7563__auto___13430 = cljs.core.chunk_first.call(null,seq__13285_13429__$1);{
var G__13431 = cljs.core.chunk_rest.call(null,seq__13285_13429__$1);
var G__13432 = c__7563__auto___13430;
var G__13433 = cljs.core.count.call(null,c__7563__auto___13430);
var G__13434 = 0;
seq__13285_13417 = G__13431;
chunk__13286_13418 = G__13432;
count__13287_13419 = G__13433;
i__13288_13420 = G__13434;
continue;
}
} else
{var vec__13290_13435 = cljs.core.first.call(null,seq__13285_13429__$1);var ev__8224__auto___13436 = cljs.core.nth.call(null,vec__13290_13435,0,null);var func__8225__auto___13437 = cljs.core.nth.call(null,vec__13290_13435,1,null);lt.util.dom.on.call(null,e__8223__auto__,ev__8224__auto___13436,func__8225__auto___13437);
{
var G__13438 = cljs.core.next.call(null,seq__13285_13429__$1);
var G__13439 = null;
var G__13440 = 0;
var G__13441 = 0;
seq__13285_13417 = G__13438;
chunk__13286_13418 = G__13439;
count__13287_13419 = G__13440;
i__13288_13420 = G__13441;
continue;
}
}
} else
{}
}
break;
}
return e__8223__auto__;
});
lt.plugins.chromedebugger.connect_to_remote = (function connect_to_remote(server){var vec__13292 = clojure.string.split.call(null,server,":");var host = cljs.core.nth.call(null,vec__13292,0,null);var port = cljs.core.nth.call(null,vec__13292,1,null);if(cljs.core.truth_((function (){var and__6803__auto__ = host;if(cljs.core.truth_(and__6803__auto__))
{return port;
} else
{return and__6803__auto__;
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
lt.plugins.chromedebugger.socket = (function socket(this$,url){var sock = (new WebSocket(url));sock.onopen = (function (){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connected","connected",4729661051),true], null));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"connect","connect",1965255772));
});
sock.onmessage = (function (p1__13293_SHARP_){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"message","message",1968829305),lt.util.cljs.js__GT_clj.call(null,JSON.parse(p1__13293_SHARP_.data),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true));
});
sock.onerror = (function (p1__13294_SHARP_){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"error","error",1110689146),p1__13294_SHARP_);
});
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
var send__delegate = function (client,m,p__13295){var vec__13297 = p__13295;var cb = cljs.core.nth.call(null,vec__13297,0,null);if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))))
{return lt.plugins.chromedebugger.send_STAR_.call(null,client,m,cb);
} else
{return lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1121848451)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [client,m,cb], null));
}
};
var send = function (client,m,var_args){
var p__13295 = null;if (arguments.length > 2) {
  p__13295 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return send__delegate.call(this,client,m,p__13295);};
send.cljs$lang$maxFixedArity = 2;
send.cljs$lang$applyTo = (function (arglist__13442){
var client = cljs.core.first(arglist__13442);
arglist__13442 = cljs.core.next(arglist__13442);
var m = cljs.core.first(arglist__13442);
var p__13295 = cljs.core.rest(arglist__13442);
return send__delegate(client,m,p__13295);
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
lt.plugins.chromedebugger.__BEH__close = (function __BEH__close(this$){var temp__4092__auto___13443 = new cljs.core.Keyword(null,"socket","socket",4411822821).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___13443))
{var socket_13444 = temp__4092__auto___13443;socket_13444.close();
} else
{}
cljs.core.swap_BANG_.call(null,lt.plugins.chromedebugger.connected_tabs,cljs.core.dissoc,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));
return lt.objs.clients.rem_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","close","lt.plugins.chromedebugger/close",3740144484),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.__BEH__close,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close!","close!",3951350939),null], null), null));
lt.plugins.chromedebugger.__BEH__clear_queue_on_connect = (function __BEH__clear_queue_on_connect(this$){var seq__13302 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"queue","queue",1121848451).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var chunk__13303 = null;var count__13304 = 0;var i__13305 = 0;while(true){
if((i__13305 < count__13304))
{var msg = cljs.core._nth.call(null,chunk__13303,i__13305);cljs.core.apply.call(null,lt.plugins.chromedebugger.send,msg);
{
var G__13445 = seq__13302;
var G__13446 = chunk__13303;
var G__13447 = count__13304;
var G__13448 = (i__13305 + 1);
seq__13302 = G__13445;
chunk__13303 = G__13446;
count__13304 = G__13447;
i__13305 = G__13448;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13302);if(temp__4092__auto__)
{var seq__13302__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13302__$1))
{var c__7563__auto__ = cljs.core.chunk_first.call(null,seq__13302__$1);{
var G__13449 = cljs.core.chunk_rest.call(null,seq__13302__$1);
var G__13450 = c__7563__auto__;
var G__13451 = cljs.core.count.call(null,c__7563__auto__);
var G__13452 = 0;
seq__13302 = G__13449;
chunk__13303 = G__13450;
count__13304 = G__13451;
i__13305 = G__13452;
continue;
}
} else
{var msg = cljs.core.first.call(null,seq__13302__$1);cljs.core.apply.call(null,lt.plugins.chromedebugger.send,msg);
{
var G__13453 = cljs.core.next.call(null,seq__13302__$1);
var G__13454 = null;
var G__13455 = 0;
var G__13456 = 0;
seq__13302 = G__13453;
chunk__13303 = G__13454;
count__13304 = G__13455;
i__13305 = G__13456;
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
lt.plugins.chromedebugger.__BEH__init_tab = (function __BEH__init_tab(this$){cljs.core.println.call(null,this$);
lt.plugins.chromedebugger.send.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chromedebugger.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Runtime.enable"], null));
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
lt.plugins.chromedebugger.load_source_map = (function load_source_map(client,params){var sm_filename = new cljs.core.Keyword(null,"sourceMapURL","sourceMapURL",2152324576).cljs$core$IFn$_invoke$arity$1(params);var url = new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(params);var base = url.replace(/\/[^\/]*$/,"/");var sm_url = [cljs.core.str(base),cljs.core.str(sm_filename)].join('');return fetch.core.xhr.call(null,sm_url,cljs.core.PersistentArrayMap.EMPTY,(function (d){var temp__4092__auto__ = lt.util.cljs.js__GT_clj.call(null,JSON.parse(d),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);if(cljs.core.truth_(temp__4092__auto__))
{var data = temp__4092__auto__;var seq__13310 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"sources","sources",3286994730).cljs$core$IFn$_invoke$arity$1(data));var chunk__13311 = null;var count__13312 = 0;var i__13313 = 0;while(true){
if((i__13313 < count__13312))
{var source = cljs.core._nth.call(null,chunk__13311,i__13313);lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scripts","scripts",2940419194)], null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source,url], null),params);
{
var G__13457 = seq__13310;
var G__13458 = chunk__13311;
var G__13459 = count__13312;
var G__13460 = (i__13313 + 1);
seq__13310 = G__13457;
chunk__13311 = G__13458;
count__13312 = G__13459;
i__13313 = G__13460;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__13310);if(temp__4092__auto____$1)
{var seq__13310__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13310__$1))
{var c__7563__auto__ = cljs.core.chunk_first.call(null,seq__13310__$1);{
var G__13461 = cljs.core.chunk_rest.call(null,seq__13310__$1);
var G__13462 = c__7563__auto__;
var G__13463 = cljs.core.count.call(null,c__7563__auto__);
var G__13464 = 0;
seq__13310 = G__13461;
chunk__13311 = G__13462;
count__13312 = G__13463;
i__13313 = G__13464;
continue;
}
} else
{var source = cljs.core.first.call(null,seq__13310__$1);lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scripts","scripts",2940419194)], null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source,url], null),params);
{
var G__13465 = cljs.core.next.call(null,seq__13310__$1);
var G__13466 = null;
var G__13467 = 0;
var G__13468 = 0;
seq__13310 = G__13465;
chunk__13311 = G__13466;
count__13312 = G__13467;
i__13313 = G__13468;
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
}));
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
lt.plugins.chromedebugger.__BEH__handle_page_reload = (function __BEH__handle_page_reload(this$,m){cljs.core.println.call(null,"blobal oject cleared");
return lt.plugins.chromedebugger.inject_lttools.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","handle-page-reload","lt.plugins.chromedebugger/handle-page-reload",3570340554),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.__BEH__handle_page_reload,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Debugger.globalObjectCleared","Debugger.globalObjectCleared",1710200527),null], null), null));
lt.plugins.chromedebugger.__BEH__handle_error = (function __BEH__handle_error(this$,event){if(cljs.core.not_EQ_.call(null,1,lt.plugins.chromedebugger.socket.readyState))
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"close!","close!",3951350939));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","handle-error","lt.plugins.chromedebugger/handle-error",2328107769),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.__BEH__handle_error,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",1110689146),null], null), null));
lt.plugins.chromedebugger.dismiss_button = (function dismiss_button(obj){var e__8223__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tab-close","span.tab-close",4094760846),"x"], null));var seq__13320_13469 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"remove-label","remove-label",3359640541));
})], null)));var chunk__13321_13470 = null;var count__13322_13471 = 0;var i__13323_13472 = 0;while(true){
if((i__13323_13472 < count__13322_13471))
{var vec__13324_13473 = cljs.core._nth.call(null,chunk__13321_13470,i__13323_13472);var ev__8224__auto___13474 = cljs.core.nth.call(null,vec__13324_13473,0,null);var func__8225__auto___13475 = cljs.core.nth.call(null,vec__13324_13473,1,null);lt.util.dom.on.call(null,e__8223__auto__,ev__8224__auto___13474,func__8225__auto___13475);
{
var G__13476 = seq__13320_13469;
var G__13477 = chunk__13321_13470;
var G__13478 = count__13322_13471;
var G__13479 = (i__13323_13472 + 1);
seq__13320_13469 = G__13476;
chunk__13321_13470 = G__13477;
count__13322_13471 = G__13478;
i__13323_13472 = G__13479;
continue;
}
} else
{var temp__4092__auto___13480 = cljs.core.seq.call(null,seq__13320_13469);if(temp__4092__auto___13480)
{var seq__13320_13481__$1 = temp__4092__auto___13480;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13320_13481__$1))
{var c__7563__auto___13482 = cljs.core.chunk_first.call(null,seq__13320_13481__$1);{
var G__13483 = cljs.core.chunk_rest.call(null,seq__13320_13481__$1);
var G__13484 = c__7563__auto___13482;
var G__13485 = cljs.core.count.call(null,c__7563__auto___13482);
var G__13486 = 0;
seq__13320_13469 = G__13483;
chunk__13321_13470 = G__13484;
count__13322_13471 = G__13485;
i__13323_13472 = G__13486;
continue;
}
} else
{var vec__13325_13487 = cljs.core.first.call(null,seq__13320_13481__$1);var ev__8224__auto___13488 = cljs.core.nth.call(null,vec__13325_13487,0,null);var func__8225__auto___13489 = cljs.core.nth.call(null,vec__13325_13487,1,null);lt.util.dom.on.call(null,e__8223__auto__,ev__8224__auto___13488,func__8225__auto___13489);
{
var G__13490 = cljs.core.next.call(null,seq__13320_13481__$1);
var G__13491 = null;
var G__13492 = 0;
var G__13493 = 0;
seq__13320_13469 = G__13490;
chunk__13321_13470 = G__13491;
count__13322_13471 = G__13492;
i__13323_13472 = G__13493;
continue;
}
}
} else
{}
}
break;
}
return e__8223__auto__;
});
lt.plugins.chromedebugger.reconnect_button = (function reconnect_button(label,tab){var e__8223__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"reconnect-chrome button"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),[cljs.core.str("Reconnect: "),cljs.core.str(new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(tab))].join('')], null),lt.plugins.chromedebugger.dismiss_button.call(null,label)], null));var seq__13332_13494 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (e){var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"chrome.client.remote","chrome.client.remote",4091478727));return lt.plugins.chromedebugger.connect_tab.call(null,client,tab);
})], null)));var chunk__13333_13495 = null;var count__13334_13496 = 0;var i__13335_13497 = 0;while(true){
if((i__13335_13497 < count__13334_13496))
{var vec__13336_13498 = cljs.core._nth.call(null,chunk__13333_13495,i__13335_13497);var ev__8224__auto___13499 = cljs.core.nth.call(null,vec__13336_13498,0,null);var func__8225__auto___13500 = cljs.core.nth.call(null,vec__13336_13498,1,null);lt.util.dom.on.call(null,e__8223__auto__,ev__8224__auto___13499,func__8225__auto___13500);
{
var G__13501 = seq__13332_13494;
var G__13502 = chunk__13333_13495;
var G__13503 = count__13334_13496;
var G__13504 = (i__13335_13497 + 1);
seq__13332_13494 = G__13501;
chunk__13333_13495 = G__13502;
count__13334_13496 = G__13503;
i__13335_13497 = G__13504;
continue;
}
} else
{var temp__4092__auto___13505 = cljs.core.seq.call(null,seq__13332_13494);if(temp__4092__auto___13505)
{var seq__13332_13506__$1 = temp__4092__auto___13505;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13332_13506__$1))
{var c__7563__auto___13507 = cljs.core.chunk_first.call(null,seq__13332_13506__$1);{
var G__13508 = cljs.core.chunk_rest.call(null,seq__13332_13506__$1);
var G__13509 = c__7563__auto___13507;
var G__13510 = cljs.core.count.call(null,c__7563__auto___13507);
var G__13511 = 0;
seq__13332_13494 = G__13508;
chunk__13333_13495 = G__13509;
count__13334_13496 = G__13510;
i__13335_13497 = G__13511;
continue;
}
} else
{var vec__13337_13512 = cljs.core.first.call(null,seq__13332_13506__$1);var ev__8224__auto___13513 = cljs.core.nth.call(null,vec__13337_13512,0,null);var func__8225__auto___13514 = cljs.core.nth.call(null,vec__13337_13512,1,null);lt.util.dom.on.call(null,e__8223__auto__,ev__8224__auto___13513,func__8225__auto___13514);
{
var G__13515 = cljs.core.next.call(null,seq__13332_13506__$1);
var G__13516 = null;
var G__13517 = 0;
var G__13518 = 0;
seq__13332_13494 = G__13515;
chunk__13333_13495 = G__13516;
count__13334_13496 = G__13517;
i__13335_13497 = G__13518;
continue;
}
}
} else
{}
}
break;
}
return e__8223__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","reconnect-label","lt.plugins.chromedebugger/reconnect-label",3578800222),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reconnect-label","reconnect-label",3615163504),null], null), null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,tab){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab","tab",1014018823),tab], null));
return lt.plugins.chromedebugger.reconnect_button.call(null,this$,tab);
}));
lt.plugins.chromedebugger.__BEH__on_remove_reconnect_label = (function __BEH__on_remove_reconnect_label(this$){return lt.object.destroy_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","on-remove-reconnect-label","lt.plugins.chromedebugger/on-remove-reconnect-label",4215127993),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.__BEH__on_remove_reconnect_label,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remove-label","remove-label",3359640541),null], null), null));
lt.plugins.chromedebugger.__BEH__remove_label = (function __BEH__remove_label(this$,that){var id = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var labels = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"reconnect-label","reconnect-label",3615163504));var seq__13344 = cljs.core.seq.call(null,labels);var chunk__13346 = null;var count__13347 = 0;var i__13348 = 0;while(true){
if((i__13348 < count__13347))
{var label = cljs.core._nth.call(null,chunk__13346,i__13348);if(cljs.core.truth_((function (){var and__6803__auto__ = label;if(cljs.core.truth_(and__6803__auto__))
{return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,label))),id);
} else
{return and__6803__auto__;
}
})()))
{lt.object.raise.call(null,label,new cljs.core.Keyword(null,"remove-label","remove-label",3359640541));
{
var G__13519 = seq__13344;
var G__13520 = chunk__13346;
var G__13521 = count__13347;
var G__13522 = (i__13348 + 1);
seq__13344 = G__13519;
chunk__13346 = G__13520;
count__13347 = G__13521;
i__13348 = G__13522;
continue;
}
} else
{{
var G__13523 = seq__13344;
var G__13524 = chunk__13346;
var G__13525 = count__13347;
var G__13526 = (i__13348 + 1);
seq__13344 = G__13523;
chunk__13346 = G__13524;
count__13347 = G__13525;
i__13348 = G__13526;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13344);if(temp__4092__auto__)
{var seq__13344__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13344__$1))
{var c__7563__auto__ = cljs.core.chunk_first.call(null,seq__13344__$1);{
var G__13527 = cljs.core.chunk_rest.call(null,seq__13344__$1);
var G__13528 = c__7563__auto__;
var G__13529 = cljs.core.count.call(null,c__7563__auto__);
var G__13530 = 0;
seq__13344 = G__13527;
chunk__13346 = G__13528;
count__13347 = G__13529;
i__13348 = G__13530;
continue;
}
} else
{var label = cljs.core.first.call(null,seq__13344__$1);if(cljs.core.truth_((function (){var and__6803__auto__ = label;if(cljs.core.truth_(and__6803__auto__))
{return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,label))),id);
} else
{return and__6803__auto__;
}
})()))
{lt.object.raise.call(null,label,new cljs.core.Keyword(null,"remove-label","remove-label",3359640541));
{
var G__13531 = cljs.core.next.call(null,seq__13344__$1);
var G__13532 = null;
var G__13533 = 0;
var G__13534 = 0;
seq__13344 = G__13531;
chunk__13346 = G__13532;
count__13347 = G__13533;
i__13348 = G__13534;
continue;
}
} else
{{
var G__13535 = cljs.core.next.call(null,seq__13344__$1);
var G__13536 = null;
var G__13537 = 0;
var G__13538 = 0;
seq__13344 = G__13535;
chunk__13346 = G__13536;
count__13347 = G__13537;
i__13348 = G__13538;
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
lt.plugins.chromedebugger.tab_preview = (function tab_preview(action,tab){var e__8223__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),new cljs.core.Keyword(null,"faviconUrl","faviconUrl",4346893869).cljs$core$IFn$_invoke$arity$1(tab)], null)], null),new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(tab)], null));var seq__13356_13539 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (e){var temp__4092__auto___13543 = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"popup","popup",1120756766));if(cljs.core.truth_(temp__4092__auto___13543))
{var p_13544 = temp__4092__auto___13543;lt.object.raise.call(null,p_13544,new cljs.core.Keyword(null,"close!","close!",3951350939));
} else
{}
return action.call(null,tab);
})], null)));var chunk__13357_13540 = null;var count__13358_13541 = 0;var i__13359_13542 = 0;while(true){
if((i__13359_13542 < count__13358_13541))
{var vec__13360_13545 = cljs.core._nth.call(null,chunk__13357_13540,i__13359_13542);var ev__8224__auto___13546 = cljs.core.nth.call(null,vec__13360_13545,0,null);var func__8225__auto___13547 = cljs.core.nth.call(null,vec__13360_13545,1,null);lt.util.dom.on.call(null,e__8223__auto__,ev__8224__auto___13546,func__8225__auto___13547);
{
var G__13548 = seq__13356_13539;
var G__13549 = chunk__13357_13540;
var G__13550 = count__13358_13541;
var G__13551 = (i__13359_13542 + 1);
seq__13356_13539 = G__13548;
chunk__13357_13540 = G__13549;
count__13358_13541 = G__13550;
i__13359_13542 = G__13551;
continue;
}
} else
{var temp__4092__auto___13552 = cljs.core.seq.call(null,seq__13356_13539);if(temp__4092__auto___13552)
{var seq__13356_13553__$1 = temp__4092__auto___13552;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13356_13553__$1))
{var c__7563__auto___13554 = cljs.core.chunk_first.call(null,seq__13356_13553__$1);{
var G__13555 = cljs.core.chunk_rest.call(null,seq__13356_13553__$1);
var G__13556 = c__7563__auto___13554;
var G__13557 = cljs.core.count.call(null,c__7563__auto___13554);
var G__13558 = 0;
seq__13356_13539 = G__13555;
chunk__13357_13540 = G__13556;
count__13358_13541 = G__13557;
i__13359_13542 = G__13558;
continue;
}
} else
{var vec__13361_13559 = cljs.core.first.call(null,seq__13356_13553__$1);var ev__8224__auto___13560 = cljs.core.nth.call(null,vec__13361_13559,0,null);var func__8225__auto___13561 = cljs.core.nth.call(null,vec__13361_13559,1,null);lt.util.dom.on.call(null,e__8223__auto__,ev__8224__auto___13560,func__8225__auto___13561);
{
var G__13562 = cljs.core.next.call(null,seq__13356_13553__$1);
var G__13563 = null;
var G__13564 = 0;
var G__13565 = 0;
seq__13356_13539 = G__13562;
chunk__13357_13540 = G__13563;
count__13358_13541 = G__13564;
i__13359_13542 = G__13565;
continue;
}
}
} else
{}
}
break;
}
return e__8223__auto__;
});
lt.plugins.chromedebugger.connect_tab = (function connect_tab(client,tab){lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"socket","socket",4411822821),lt.plugins.chromedebugger.socket.call(null,client,new cljs.core.Keyword(null,"webSocketDebuggerUrl","webSocketDebuggerUrl",667502233).cljs$core$IFn$_invoke$arity$1(tab)),new cljs.core.Keyword(null,"commands","commands",4706336250),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"editor.eval.cljs.exec","editor.eval.cljs.exec",866638030),null,new cljs.core.Keyword(null,"editor.eval.css","editor.eval.css",1083014276),null,new cljs.core.Keyword(null,"editor.eval.js","editor.eval.js",1847417804),null,new cljs.core.Keyword(null,"editor.eval.html","editor.eval.html",3156465134),null], null), null),new cljs.core.Keyword(null,"tab","tab",1014018823),tab,new cljs.core.Keyword(null,"name","name",1017277949),[cljs.core.str("Chrome: "),cljs.core.str(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(tab))].join(''),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"chrome.client.remote","chrome.client.remote",4091478727)], null));
return cljs.core.swap_BANG_.call(null,lt.plugins.chromedebugger.connected_tabs,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(tab),client);
});
lt.plugins.chromedebugger.select_tab = (function select_tab(client,tabs){var action = cljs.core.partial.call(null,lt.plugins.chromedebugger.connect_tab,client);var p = lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Select which tab to attach to",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul#chrome-tabs","ul#chrome-tabs",1003516535),cljs.core.map.call(null,((function (action){
return (function (p1__13362_SHARP_){return lt.plugins.chromedebugger.tab_preview.call(null,action,p1__13362_SHARP_);
});})(action))
,cljs.core.filter.call(null,((function (action){
return (function (p1__13363_SHARP_){return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p1__13363_SHARP_),"page")) && ((cljs.core.deref.call(null,lt.plugins.chromedebugger.connected_tabs).call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__13363_SHARP_)) == null));
});})(action))
,tabs))], null)], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"cancel",new cljs.core.Keyword(null,"action","action",3885920680),((function (action){
return (function (){return lt.object.raise.call(null,client,new cljs.core.Keyword(null,"close!","close!",3951350939));
});})(action))
], null)], null)], null));return null;
});
lt.plugins.chromedebugger.handle_cb = (function handle_cb(cbid,command,data){return lt.object.raise.call(null,lt.objs.clients.clients,new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cbid,command,data], null));
});
lt.plugins.chromedebugger.eval_js_form = (function eval_js_form(this$,msg){var data = cljs.core.assoc.call(null,new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"code","code",1016963423),new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg)));lt.plugins.chromedebugger.eval_js.call(null,this$,data,(function (res){var result = lt.plugins.chromedebugger.inspector__GT_result.call(null,this$,res);var req = new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg);var result__$1 = cljs.core.assoc.call(null,result,new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(req),new cljs.core.Keyword(null,"no-inspect","no-inspect",887813498),true);if(cljs.core.not.call(null,new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(result__$1)))
{return lt.plugins.chromedebugger.handle_cb.call(null,new cljs.core.Keyword(null,"cb","cb",1013907409).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"editor.eval.js.result","editor.eval.js.result",3021062051),result__$1);
} else
{return lt.plugins.chromedebugger.handle_cb.call(null,new cljs.core.Keyword(null,"cb","cb",1013907409).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"editor.eval.js.exception","editor.eval.js.exception",723801901),result__$1);
}
}));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"editor.eval.js.change-live!","editor.eval.js.change-live!",3424692446),msg);
});
lt.plugins.chromedebugger.find_script = (function find_script(client,path){var found_QMARK_ = cljs.core.get.call(null,cljs.core.deref.call(null,client).call(null,new cljs.core.Keyword(null,"scripts","scripts",2940419194)),lt.objs.files.basename.call(null,path));return found_QMARK_;
});
lt.plugins.chromedebugger.script_exists_QMARK_ = (function script_exists_QMARK_(client,id,cb){return lt.plugins.chromedebugger.send.call(null,client,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chromedebugger.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.canSetScriptSource",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scriptId","scriptId",606324408),id], null)], null),(function (res){return cb.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res)));
}));
});
lt.plugins.chromedebugger.remove_script_BANG_ = (function remove_script_BANG_(client,path,id){var vec__13366 = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__13364_SHARP_){return cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__13364_SHARP_)));
}),lt.plugins.chromedebugger.find_script.call(null,client,path)));var k = cljs.core.nth.call(null,vec__13366,0,null);var v = cljs.core.nth.call(null,vec__13366,1,null);return lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scripts","scripts",2940419194),lt.objs.files.basename.call(null,path)], null),cljs.core.dissoc,k);
});
lt.plugins.chromedebugger.must_eval_file_QMARK_ = (function must_eval_file_QMARK_(client,msg){if(cljs.core.truth_(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg))))
{return (cljs.core.not.call(null,new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg)))) || (cljs.core.not.call(null,lt.plugins.chromedebugger.find_script.call(null,client,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg)))));
} else
{return null;
}
});
lt.plugins.chromedebugger.eval_js = (function eval_js(client,msg,cb){return lt.plugins.chromedebugger.send.call(null,client,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chromedebugger.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Runtime.evaluate",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expression","expression",3513419274),new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(msg)], null)], null),cb);
});
lt.plugins.chromedebugger.changelive_BANG_ = (function changelive_BANG_(client,obj,path,code,cb,else$){cljs.core.println.call(null,"changelive");
var temp__4090__auto__ = lt.plugins.chromedebugger.find_script.call(null,client,path);if(cljs.core.truth_(temp__4090__auto__))
{var s = temp__4090__auto__;var id = new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.vals.call(null,s)));return lt.plugins.chromedebugger.script_exists_QMARK_.call(null,client,id,(function (exists_QMARK_){if(cljs.core.not.call(null,exists_QMARK_))
{lt.plugins.chromedebugger.remove_script_BANG_.call(null,client,path,id);
return changelive_BANG_.call(null,client,obj,path,code,cb,else$);
} else
{cljs.core.println.call(null,"set script source",id);
lt.object.merge_BANG_.call(null,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"script-id","script-id",1263804623),id], null));
return lt.plugins.chromedebugger.send.call(null,client,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chromedebugger.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.setScriptSource",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scriptId","scriptId",606324408),id,new cljs.core.Keyword(null,"scriptSource","scriptSource",3711898680),code], null)], null),cb);
}
}));
} else
{return else$.call(null);
}
});
lt.plugins.chromedebugger.__BEH__handle_send_BANG_ = (function __BEH__handle_send_BANG_(this$,msg){return lt.object.raise.call(null,this$,cljs.core.keyword.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",1964298941).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str("!")].join('')),msg);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","handle-send!","lt.plugins.chromedebugger/handle-send!",2323942312),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.__BEH__handle_send_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"send!","send!",1123226891),null], null), null));
lt.plugins.chromedebugger.__BEH__js_eval = (function __BEH__js_eval(this$,msg){if(cljs.core.truth_(lt.plugins.chromedebugger.must_eval_file_QMARK_.call(null,this$,msg)))
{var temp__4092__auto__ = lt.object.by_id.call(null,new cljs.core.Keyword(null,"cb","cb",1013907409).cljs$core$IFn$_invoke$arity$1(msg));if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var data = new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg);var data__$1 = cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"code","code",1016963423),[cljs.core.str(lt.objs.editor.__GT_val.call(null,ed)),cljs.core.str("\n\n//# sourceURL="),cljs.core.str(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(data))].join(''));return lt.plugins.chromedebugger.eval_js.call(null,this$,data__$1,(function (res){return lt.plugins.chromedebugger.eval_js_form.call(null,this$,msg);
}));
} else
{return null;
}
} else
{return lt.plugins.chromedebugger.eval_js_form.call(null,this$,msg);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","js-eval","lt.plugins.chromedebugger/js-eval",3330297468),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.__BEH__js_eval,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.js!","editor.eval.js!",1083020921),null], null), null));
lt.plugins.chromedebugger.__BEH__change_live = (function __BEH__change_live(this$,msg){cljs.core.println.call(null,msg);
var temp__4092__auto__ = lt.object.by_id.call(null,new cljs.core.Keyword(null,"cb","cb",1013907409).cljs$core$IFn$_invoke$arity$1(msg));if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;if(cljs.core.truth_(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg))))
{return lt.plugins.chromedebugger.changelive_BANG_.call(null,this$,ed,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg)),lt.plugins.watches.watched_range(ed,null,null,lt.plugins.js.src__GT_watch),(function (res){cljs.core.println.call(null,res);
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(res)))
{return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.eval.js.change-live.error","editor.eval.js.change-live.error",2227540897),new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(res));
} else
{return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.eval.js.change-live.success","editor.eval.js.change-live.success",2994410460));
}
}),cljs.core.identity);
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
lt.plugins.chromedebugger.__GT_name = (function __GT_name(obj){var n = (function (){var or__6815__auto__ = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(obj);if(cljs.core.truth_(or__6815__auto__))
{return or__6815__auto__;
} else
{var or__6815__auto____$1 = new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(obj));if(cljs.core.truth_(or__6815__auto____$1))
{return or__6815__auto____$1;
} else
{var or__6815__auto____$2 = new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(obj);if(cljs.core.truth_(or__6815__auto____$2))
{return or__6815__auto____$2;
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
lt.plugins.chromedebugger.desc = (function desc(this$,obj){var e__8223__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",1013907482),lt.plugins.chromedebugger.__GT_name.call(null,obj)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(obj))?[cljs.core.str(": "),cljs.core.str(new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(obj)))].join(''):null)], null));var seq__13373_13566 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){if(cljs.core.truth_(new cljs.core.Keyword(null,"open","open",1017321916).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",1017321916),false], null));
} else
{lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",1017321916),true], null));
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"children","children",2673430897).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return null;
} else
{return lt.plugins.chromedebugger.send.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),1,new cljs.core.Keyword(null,"method","method",4231316563),"Runtime.getProperties",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"objectId","objectId",1104399404),(function (){var or__6815__auto__ = new cljs.core.Keyword(null,"objectId","objectId",1104399404).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(obj));if(cljs.core.truth_(or__6815__auto__))
{return or__6815__auto__;
} else
{return new cljs.core.Keyword(null,"objectId","objectId",1104399404).cljs$core$IFn$_invoke$arity$1(obj);
}
})(),new cljs.core.Keyword(null,"ownProperties","ownProperties",1958141131),true], null)], null),(function (d){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",2673430897),new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(d))], null));
}));
}
}
})], null)));var chunk__13374_13567 = null;var count__13375_13568 = 0;var i__13376_13569 = 0;while(true){
if((i__13376_13569 < count__13375_13568))
{var vec__13377_13570 = cljs.core._nth.call(null,chunk__13374_13567,i__13376_13569);var ev__8224__auto___13571 = cljs.core.nth.call(null,vec__13377_13570,0,null);var func__8225__auto___13572 = cljs.core.nth.call(null,vec__13377_13570,1,null);lt.util.dom.on.call(null,e__8223__auto__,ev__8224__auto___13571,func__8225__auto___13572);
{
var G__13573 = seq__13373_13566;
var G__13574 = chunk__13374_13567;
var G__13575 = count__13375_13568;
var G__13576 = (i__13376_13569 + 1);
seq__13373_13566 = G__13573;
chunk__13374_13567 = G__13574;
count__13375_13568 = G__13575;
i__13376_13569 = G__13576;
continue;
}
} else
{var temp__4092__auto___13577 = cljs.core.seq.call(null,seq__13373_13566);if(temp__4092__auto___13577)
{var seq__13373_13578__$1 = temp__4092__auto___13577;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13373_13578__$1))
{var c__7563__auto___13579 = cljs.core.chunk_first.call(null,seq__13373_13578__$1);{
var G__13580 = cljs.core.chunk_rest.call(null,seq__13373_13578__$1);
var G__13581 = c__7563__auto___13579;
var G__13582 = cljs.core.count.call(null,c__7563__auto___13579);
var G__13583 = 0;
seq__13373_13566 = G__13580;
chunk__13374_13567 = G__13581;
count__13375_13568 = G__13582;
i__13376_13569 = G__13583;
continue;
}
} else
{var vec__13378_13584 = cljs.core.first.call(null,seq__13373_13578__$1);var ev__8224__auto___13585 = cljs.core.nth.call(null,vec__13378_13584,0,null);var func__8225__auto___13586 = cljs.core.nth.call(null,vec__13378_13584,1,null);lt.util.dom.on.call(null,e__8223__auto__,ev__8224__auto___13585,func__8225__auto___13586);
{
var G__13587 = cljs.core.next.call(null,seq__13373_13578__$1);
var G__13588 = null;
var G__13589 = 0;
var G__13590 = 0;
seq__13373_13566 = G__13587;
chunk__13374_13567 = G__13588;
count__13375_13568 = G__13589;
i__13376_13569 = G__13590;
continue;
}
}
} else
{}
}
break;
}
return e__8223__auto__;
});
lt.plugins.chromedebugger.props = (function props(this$,children){var e__8223__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7532__auto__ = (function iter__13389(s__13390){return (new cljs.core.LazySeq(null,(function (){var s__13390__$1 = s__13390;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__13390__$1);if(temp__4092__auto__)
{var s__13390__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13390__$2))
{var c__7530__auto__ = cljs.core.chunk_first.call(null,s__13390__$2);var size__7531__auto__ = cljs.core.count.call(null,c__7530__auto__);var b__13392 = cljs.core.chunk_buffer.call(null,size__7531__auto__);if((function (){var i__13391 = 0;while(true){
if((i__13391 < size__7531__auto__))
{var c = cljs.core._nth.call(null,c__7530__auto__,i__13391);cljs.core.chunk_append.call(null,b__13392,(cljs.core.truth_((function (){var and__6803__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c)),"object");if(and__6803__auto__)
{return new cljs.core.Keyword(null,"objectId","objectId",1104399404).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c));
} else
{return and__6803__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),lt.object.__GT_content.call(null,lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","inspector-object","lt.plugins.chromedebugger/inspector-object",4656861767),new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),c))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",1013907482),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(c)], null),": ",(function (){var or__6815__auto__ = new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c));if(cljs.core.truth_(or__6815__auto__))
{return or__6815__auto__;
} else
{return [cljs.core.str(lt.plugins.chromedebugger.format_value.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c)))].join('');
}
})()], null)));
{
var G__13591 = (i__13391 + 1);
i__13391 = G__13591;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13392),iter__13389.call(null,cljs.core.chunk_rest.call(null,s__13390__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13392),null);
}
} else
{var c = cljs.core.first.call(null,s__13390__$2);return cljs.core.cons.call(null,(cljs.core.truth_((function (){var and__6803__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c)),"object");if(and__6803__auto__)
{return new cljs.core.Keyword(null,"objectId","objectId",1104399404).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c));
} else
{return and__6803__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),lt.object.__GT_content.call(null,lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","inspector-object","lt.plugins.chromedebugger/inspector-object",4656861767),new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),c))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",1013907482),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(c)], null),": ",(function (){var or__6815__auto__ = new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c));if(cljs.core.truth_(or__6815__auto__))
{return or__6815__auto__;
} else
{return [cljs.core.str(lt.plugins.chromedebugger.format_value.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c)))].join('');
}
})()], null)),iter__13389.call(null,cljs.core.rest.call(null,s__13390__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7532__auto__.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1017277949),lt.plugins.chromedebugger.i_compare,children));
})()], null));var seq__13393_13592 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__13394_13593 = null;var count__13395_13594 = 0;var i__13396_13595 = 0;while(true){
if((i__13396_13595 < count__13395_13594))
{var vec__13397_13596 = cljs.core._nth.call(null,chunk__13394_13593,i__13396_13595);var ev__8224__auto___13597 = cljs.core.nth.call(null,vec__13397_13596,0,null);var func__8225__auto___13598 = cljs.core.nth.call(null,vec__13397_13596,1,null);lt.util.dom.on.call(null,e__8223__auto__,ev__8224__auto___13597,func__8225__auto___13598);
{
var G__13599 = seq__13393_13592;
var G__13600 = chunk__13394_13593;
var G__13601 = count__13395_13594;
var G__13602 = (i__13396_13595 + 1);
seq__13393_13592 = G__13599;
chunk__13394_13593 = G__13600;
count__13395_13594 = G__13601;
i__13396_13595 = G__13602;
continue;
}
} else
{var temp__4092__auto___13603 = cljs.core.seq.call(null,seq__13393_13592);if(temp__4092__auto___13603)
{var seq__13393_13604__$1 = temp__4092__auto___13603;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13393_13604__$1))
{var c__7563__auto___13605 = cljs.core.chunk_first.call(null,seq__13393_13604__$1);{
var G__13606 = cljs.core.chunk_rest.call(null,seq__13393_13604__$1);
var G__13607 = c__7563__auto___13605;
var G__13608 = cljs.core.count.call(null,c__7563__auto___13605);
var G__13609 = 0;
seq__13393_13592 = G__13606;
chunk__13394_13593 = G__13607;
count__13395_13594 = G__13608;
i__13396_13595 = G__13609;
continue;
}
} else
{var vec__13398_13610 = cljs.core.first.call(null,seq__13393_13604__$1);var ev__8224__auto___13611 = cljs.core.nth.call(null,vec__13398_13610,0,null);var func__8225__auto___13612 = cljs.core.nth.call(null,vec__13398_13610,1,null);lt.util.dom.on.call(null,e__8223__auto__,ev__8224__auto___13611,func__8225__auto___13612);
{
var G__13613 = cljs.core.next.call(null,seq__13393_13604__$1);
var G__13614 = null;
var G__13615 = 0;
var G__13616 = 0;
seq__13393_13592 = G__13613;
chunk__13394_13593 = G__13614;
count__13395_13594 = G__13615;
i__13396_13595 = G__13616;
continue;
}
}
} else
{}
}
break;
}
return e__8223__auto__;
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
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),(function (){var pred__13402 = cljs.core._EQ_;var expr__13403 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(pred__13402.call(null,"object",expr__13403)))
{return lt.object.__GT_content.call(null,lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","inspector-object","lt.plugins.chromedebugger/inspector-object",4656861767),client,data));
} else
{var or__6815__auto__ = new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(or__6815__auto__))
{return or__6815__auto__;
} else
{return cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(data));
}
}
})()], null);
}
});
lt.plugins.chromedebugger.clear_unused_inspectors = (function clear_unused_inspectors(){var seq__13411 = cljs.core.seq.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"inspector.object","inspector.object",1285492104)));var chunk__13413 = null;var count__13414 = 0;var i__13415 = 0;while(true){
if((i__13415 < count__13414))
{var obj = cljs.core._nth.call(null,chunk__13413,i__13415);if((cljs.core.not.call(null,lt.object.__GT_content.call(null,obj))) || (cljs.core.not.call(null,lt.util.dom.parents.call(null,lt.object.__GT_content.call(null,obj),new cljs.core.Keyword(null,"body","body",1016933652)))))
{lt.object.destroy_BANG_.call(null,obj);
{
var G__13617 = seq__13411;
var G__13618 = chunk__13413;
var G__13619 = count__13414;
var G__13620 = (i__13415 + 1);
seq__13411 = G__13617;
chunk__13413 = G__13618;
count__13414 = G__13619;
i__13415 = G__13620;
continue;
}
} else
{{
var G__13621 = seq__13411;
var G__13622 = chunk__13413;
var G__13623 = count__13414;
var G__13624 = (i__13415 + 1);
seq__13411 = G__13621;
chunk__13413 = G__13622;
count__13414 = G__13623;
i__13415 = G__13624;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13411);if(temp__4092__auto__)
{var seq__13411__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13411__$1))
{var c__7563__auto__ = cljs.core.chunk_first.call(null,seq__13411__$1);{
var G__13625 = cljs.core.chunk_rest.call(null,seq__13411__$1);
var G__13626 = c__7563__auto__;
var G__13627 = cljs.core.count.call(null,c__7563__auto__);
var G__13628 = 0;
seq__13411 = G__13625;
chunk__13413 = G__13626;
count__13414 = G__13627;
i__13415 = G__13628;
continue;
}
} else
{var obj = cljs.core.first.call(null,seq__13411__$1);if((cljs.core.not.call(null,lt.object.__GT_content.call(null,obj))) || (cljs.core.not.call(null,lt.util.dom.parents.call(null,lt.object.__GT_content.call(null,obj),new cljs.core.Keyword(null,"body","body",1016933652)))))
{lt.object.destroy_BANG_.call(null,obj);
{
var G__13629 = cljs.core.next.call(null,seq__13411__$1);
var G__13630 = null;
var G__13631 = 0;
var G__13632 = 0;
seq__13411 = G__13629;
chunk__13413 = G__13630;
count__13414 = G__13631;
i__13415 = G__13632;
continue;
}
} else
{{
var G__13633 = cljs.core.next.call(null,seq__13411__$1);
var G__13634 = null;
var G__13635 = 0;
var G__13636 = 0;
seq__13411 = G__13633;
chunk__13413 = G__13634;
count__13414 = G__13635;
i__13415 = G__13636;
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
lt.plugins.chromedebugger.__BEH__clear_inspector_object = (function __BEH__clear_inspector_object(this$){var temp__4092__auto__ = (function (){var or__6815__auto__ = new cljs.core.Keyword(null,"objectId","objectId",1104399404).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));if(cljs.core.truth_(or__6815__auto__))
{return or__6815__auto__;
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

//# sourceMappingURL=chromedebugger_compiled.js.map