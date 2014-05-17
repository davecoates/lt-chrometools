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
lt.plugins.chromedebugger.server_input = (function server_input(){var e__8223__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"host:port",new cljs.core.Keyword(null,"value","value",1125876963),"localhost:"], null)], null));var seq__11529_11653 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",1111509066),(function (){return lt.objs.context.in_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
}),new cljs.core.Keyword(null,"blur","blur",1016931289),(function (){return lt.objs.context.out_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
})], null)));var chunk__11530_11654 = null;var count__11531_11655 = 0;var i__11532_11656 = 0;while(true){
if((i__11532_11656 < count__11531_11655))
{var vec__11533_11657 = cljs.core._nth.call(null,chunk__11530_11654,i__11532_11656);var ev__8224__auto___11658 = cljs.core.nth.call(null,vec__11533_11657,0,null);var func__8225__auto___11659 = cljs.core.nth.call(null,vec__11533_11657,1,null);lt.util.dom.on.call(null,e__8223__auto__,ev__8224__auto___11658,func__8225__auto___11659);
{
var G__11660 = seq__11529_11653;
var G__11661 = chunk__11530_11654;
var G__11662 = count__11531_11655;
var G__11663 = (i__11532_11656 + 1);
seq__11529_11653 = G__11660;
chunk__11530_11654 = G__11661;
count__11531_11655 = G__11662;
i__11532_11656 = G__11663;
continue;
}
} else
{var temp__4092__auto___11664 = cljs.core.seq.call(null,seq__11529_11653);if(temp__4092__auto___11664)
{var seq__11529_11665__$1 = temp__4092__auto___11664;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11529_11665__$1))
{var c__7563__auto___11666 = cljs.core.chunk_first.call(null,seq__11529_11665__$1);{
var G__11667 = cljs.core.chunk_rest.call(null,seq__11529_11665__$1);
var G__11668 = c__7563__auto___11666;
var G__11669 = cljs.core.count.call(null,c__7563__auto___11666);
var G__11670 = 0;
seq__11529_11653 = G__11667;
chunk__11530_11654 = G__11668;
count__11531_11655 = G__11669;
i__11532_11656 = G__11670;
continue;
}
} else
{var vec__11534_11671 = cljs.core.first.call(null,seq__11529_11665__$1);var ev__8224__auto___11672 = cljs.core.nth.call(null,vec__11534_11671,0,null);var func__8225__auto___11673 = cljs.core.nth.call(null,vec__11534_11671,1,null);lt.util.dom.on.call(null,e__8223__auto__,ev__8224__auto___11672,func__8225__auto___11673);
{
var G__11674 = cljs.core.next.call(null,seq__11529_11665__$1);
var G__11675 = null;
var G__11676 = 0;
var G__11677 = 0;
seq__11529_11653 = G__11674;
chunk__11530_11654 = G__11675;
count__11531_11655 = G__11676;
i__11532_11656 = G__11677;
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
lt.plugins.chromedebugger.connect_to_remote = (function connect_to_remote(server){var vec__11536 = clojure.string.split.call(null,server,":");var host = cljs.core.nth.call(null,vec__11536,0,null);var port = cljs.core.nth.call(null,vec__11536,1,null);if(cljs.core.truth_((function (){var and__6803__auto__ = host;if(cljs.core.truth_(and__6803__auto__))
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
sock.onmessage = (function (p1__11537_SHARP_){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"message","message",1968829305),lt.util.cljs.js__GT_clj.call(null,JSON.parse(p1__11537_SHARP_.data),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true));
});
sock.onerror = (function (p1__11538_SHARP_){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"error","error",1110689146),p1__11538_SHARP_);
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
var send__delegate = function (client,m,p__11539){var vec__11541 = p__11539;var cb = cljs.core.nth.call(null,vec__11541,0,null);if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))))
{return lt.plugins.chromedebugger.send_STAR_.call(null,client,m,cb);
} else
{return lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1121848451)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [client,m,cb], null));
}
};
var send = function (client,m,var_args){
var p__11539 = null;if (arguments.length > 2) {
  p__11539 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return send__delegate.call(this,client,m,p__11539);};
send.cljs$lang$maxFixedArity = 2;
send.cljs$lang$applyTo = (function (arglist__11678){
var client = cljs.core.first(arglist__11678);
arglist__11678 = cljs.core.next(arglist__11678);
var m = cljs.core.first(arglist__11678);
var p__11539 = cljs.core.rest(arglist__11678);
return send__delegate(client,m,p__11539);
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
lt.plugins.chromedebugger.__BEH__close = (function __BEH__close(this$){var temp__4092__auto___11679 = new cljs.core.Keyword(null,"socket","socket",4411822821).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___11679))
{var socket_11680 = temp__4092__auto___11679;socket_11680.close();
} else
{}
cljs.core.swap_BANG_.call(null,lt.plugins.chromedebugger.connected_tabs,cljs.core.dissoc,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));
return lt.objs.clients.rem_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","close","lt.plugins.chromedebugger/close",3740144484),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.__BEH__close,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close!","close!",3951350939),null], null), null));
lt.plugins.chromedebugger.__BEH__clear_queue_on_connect = (function __BEH__clear_queue_on_connect(this$){var seq__11546 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"queue","queue",1121848451).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var chunk__11547 = null;var count__11548 = 0;var i__11549 = 0;while(true){
if((i__11549 < count__11548))
{var msg = cljs.core._nth.call(null,chunk__11547,i__11549);cljs.core.apply.call(null,lt.plugins.chromedebugger.send,msg);
{
var G__11681 = seq__11546;
var G__11682 = chunk__11547;
var G__11683 = count__11548;
var G__11684 = (i__11549 + 1);
seq__11546 = G__11681;
chunk__11547 = G__11682;
count__11548 = G__11683;
i__11549 = G__11684;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11546);if(temp__4092__auto__)
{var seq__11546__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11546__$1))
{var c__7563__auto__ = cljs.core.chunk_first.call(null,seq__11546__$1);{
var G__11685 = cljs.core.chunk_rest.call(null,seq__11546__$1);
var G__11686 = c__7563__auto__;
var G__11687 = cljs.core.count.call(null,c__7563__auto__);
var G__11688 = 0;
seq__11546 = G__11685;
chunk__11547 = G__11686;
count__11548 = G__11687;
i__11549 = G__11688;
continue;
}
} else
{var msg = cljs.core.first.call(null,seq__11546__$1);cljs.core.apply.call(null,lt.plugins.chromedebugger.send,msg);
{
var G__11689 = cljs.core.next.call(null,seq__11546__$1);
var G__11690 = null;
var G__11691 = 0;
var G__11692 = 0;
seq__11546 = G__11689;
chunk__11547 = G__11690;
count__11548 = G__11691;
i__11549 = G__11692;
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
lt.plugins.chromedebugger.load_lttools = [cljs.core.str("\n  (function () {\n    function loadScript(sScriptSrc) {\n      var oHead = document.getElementsByTagName('head')[0];\n      var oScript = document.createElement('script');\n      oScript.setAttribute('src',sScriptSrc);\n      oScript.setAttribute('type','text/javascript');\n      oScript.setAttribute('id','lt_ws');\n      oHead.appendChild(oScript);\n    }\n    loadScript('http://localhost:"),cljs.core.str(lt.objs.clients.ws.port),cljs.core.str("/socket.io/lighttable/ws.js');\n  }());\n  ")].join('');
lt.plugins.chromedebugger.inject_lttools = (function inject_lttools(client){return lt.plugins.chromedebugger.send.call(null,client,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chromedebugger.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Runtime.evaluate",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expression","expression",3513419274),lt.plugins.chromedebugger.load_lttools], null)], null),(function (r){return cljs.core.println.call(null,r);
}));
});
lt.plugins.chromedebugger.__BEH__init_tab = (function __BEH__init_tab(this$){cljs.core.println.call(null,this$);
lt.plugins.chromedebugger.send.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chromedebugger.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Runtime.enable"], null));
lt.plugins.chromedebugger.send.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chromedebugger.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Console.enable"], null));
lt.plugins.chromedebugger.send.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chromedebugger.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.enable"], null),lt.plugins.chromedebugger.inject_lttools.call(null,this$));
return lt.plugins.chromedebugger.send.call(null,this$,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chromedebugger.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Network.setCacheDisabled",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cacheDisabled","cacheDisabled",3367083920),true], null)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","init-tab","lt.plugins.chromedebugger/init-tab",3912607684),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.__BEH__init_tab,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connect","connect",1965255772),null], null), null));
lt.plugins.chromedebugger.__BEH__print_messages = (function __BEH__print_messages(this$,m){return cljs.core.println.call(null,"Message ",new cljs.core.Keyword(null,"method","method",4231316563).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(m));
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
lt.plugins.chromedebugger.__BEH__script_parsed = (function __BEH__script_parsed(this$,s){var url = new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",4313443576).cljs$core$IFn$_invoke$arity$1(s));return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scripts","scripts",2940419194)], null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.files.basename.call(null,url),url], null),new cljs.core.Keyword(null,"params","params",4313443576).cljs$core$IFn$_invoke$arity$1(s));
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
lt.plugins.chromedebugger.dismiss_button = (function dismiss_button(obj){var e__8223__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tab-close","span.tab-close",4094760846),"x"], null));var seq__11556_11693 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"remove-label","remove-label",3359640541));
})], null)));var chunk__11557_11694 = null;var count__11558_11695 = 0;var i__11559_11696 = 0;while(true){
if((i__11559_11696 < count__11558_11695))
{var vec__11560_11697 = cljs.core._nth.call(null,chunk__11557_11694,i__11559_11696);var ev__8224__auto___11698 = cljs.core.nth.call(null,vec__11560_11697,0,null);var func__8225__auto___11699 = cljs.core.nth.call(null,vec__11560_11697,1,null);lt.util.dom.on.call(null,e__8223__auto__,ev__8224__auto___11698,func__8225__auto___11699);
{
var G__11700 = seq__11556_11693;
var G__11701 = chunk__11557_11694;
var G__11702 = count__11558_11695;
var G__11703 = (i__11559_11696 + 1);
seq__11556_11693 = G__11700;
chunk__11557_11694 = G__11701;
count__11558_11695 = G__11702;
i__11559_11696 = G__11703;
continue;
}
} else
{var temp__4092__auto___11704 = cljs.core.seq.call(null,seq__11556_11693);if(temp__4092__auto___11704)
{var seq__11556_11705__$1 = temp__4092__auto___11704;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11556_11705__$1))
{var c__7563__auto___11706 = cljs.core.chunk_first.call(null,seq__11556_11705__$1);{
var G__11707 = cljs.core.chunk_rest.call(null,seq__11556_11705__$1);
var G__11708 = c__7563__auto___11706;
var G__11709 = cljs.core.count.call(null,c__7563__auto___11706);
var G__11710 = 0;
seq__11556_11693 = G__11707;
chunk__11557_11694 = G__11708;
count__11558_11695 = G__11709;
i__11559_11696 = G__11710;
continue;
}
} else
{var vec__11561_11711 = cljs.core.first.call(null,seq__11556_11705__$1);var ev__8224__auto___11712 = cljs.core.nth.call(null,vec__11561_11711,0,null);var func__8225__auto___11713 = cljs.core.nth.call(null,vec__11561_11711,1,null);lt.util.dom.on.call(null,e__8223__auto__,ev__8224__auto___11712,func__8225__auto___11713);
{
var G__11714 = cljs.core.next.call(null,seq__11556_11705__$1);
var G__11715 = null;
var G__11716 = 0;
var G__11717 = 0;
seq__11556_11693 = G__11714;
chunk__11557_11694 = G__11715;
count__11558_11695 = G__11716;
i__11559_11696 = G__11717;
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
lt.plugins.chromedebugger.reconnect_button = (function reconnect_button(label,tab){var e__8223__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"reconnect-chrome button"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),[cljs.core.str("Reconnect: "),cljs.core.str(new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(tab))].join('')], null),lt.plugins.chromedebugger.dismiss_button.call(null,label)], null));var seq__11568_11718 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (e){var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"chrome.client.remote","chrome.client.remote",4091478727));return lt.plugins.chromedebugger.connect_tab.call(null,client,tab);
})], null)));var chunk__11569_11719 = null;var count__11570_11720 = 0;var i__11571_11721 = 0;while(true){
if((i__11571_11721 < count__11570_11720))
{var vec__11572_11722 = cljs.core._nth.call(null,chunk__11569_11719,i__11571_11721);var ev__8224__auto___11723 = cljs.core.nth.call(null,vec__11572_11722,0,null);var func__8225__auto___11724 = cljs.core.nth.call(null,vec__11572_11722,1,null);lt.util.dom.on.call(null,e__8223__auto__,ev__8224__auto___11723,func__8225__auto___11724);
{
var G__11725 = seq__11568_11718;
var G__11726 = chunk__11569_11719;
var G__11727 = count__11570_11720;
var G__11728 = (i__11571_11721 + 1);
seq__11568_11718 = G__11725;
chunk__11569_11719 = G__11726;
count__11570_11720 = G__11727;
i__11571_11721 = G__11728;
continue;
}
} else
{var temp__4092__auto___11729 = cljs.core.seq.call(null,seq__11568_11718);if(temp__4092__auto___11729)
{var seq__11568_11730__$1 = temp__4092__auto___11729;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11568_11730__$1))
{var c__7563__auto___11731 = cljs.core.chunk_first.call(null,seq__11568_11730__$1);{
var G__11732 = cljs.core.chunk_rest.call(null,seq__11568_11730__$1);
var G__11733 = c__7563__auto___11731;
var G__11734 = cljs.core.count.call(null,c__7563__auto___11731);
var G__11735 = 0;
seq__11568_11718 = G__11732;
chunk__11569_11719 = G__11733;
count__11570_11720 = G__11734;
i__11571_11721 = G__11735;
continue;
}
} else
{var vec__11573_11736 = cljs.core.first.call(null,seq__11568_11730__$1);var ev__8224__auto___11737 = cljs.core.nth.call(null,vec__11573_11736,0,null);var func__8225__auto___11738 = cljs.core.nth.call(null,vec__11573_11736,1,null);lt.util.dom.on.call(null,e__8223__auto__,ev__8224__auto___11737,func__8225__auto___11738);
{
var G__11739 = cljs.core.next.call(null,seq__11568_11730__$1);
var G__11740 = null;
var G__11741 = 0;
var G__11742 = 0;
seq__11568_11718 = G__11739;
chunk__11569_11719 = G__11740;
count__11570_11720 = G__11741;
i__11571_11721 = G__11742;
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
lt.plugins.chromedebugger.__BEH__remove_label = (function __BEH__remove_label(this$,that){var id = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var labels = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"reconnect-label","reconnect-label",3615163504));var seq__11580 = cljs.core.seq.call(null,labels);var chunk__11582 = null;var count__11583 = 0;var i__11584 = 0;while(true){
if((i__11584 < count__11583))
{var label = cljs.core._nth.call(null,chunk__11582,i__11584);if(cljs.core.truth_((function (){var and__6803__auto__ = label;if(cljs.core.truth_(and__6803__auto__))
{return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,label))),id);
} else
{return and__6803__auto__;
}
})()))
{lt.object.raise.call(null,label,new cljs.core.Keyword(null,"remove-label","remove-label",3359640541));
{
var G__11743 = seq__11580;
var G__11744 = chunk__11582;
var G__11745 = count__11583;
var G__11746 = (i__11584 + 1);
seq__11580 = G__11743;
chunk__11582 = G__11744;
count__11583 = G__11745;
i__11584 = G__11746;
continue;
}
} else
{{
var G__11747 = seq__11580;
var G__11748 = chunk__11582;
var G__11749 = count__11583;
var G__11750 = (i__11584 + 1);
seq__11580 = G__11747;
chunk__11582 = G__11748;
count__11583 = G__11749;
i__11584 = G__11750;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11580);if(temp__4092__auto__)
{var seq__11580__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11580__$1))
{var c__7563__auto__ = cljs.core.chunk_first.call(null,seq__11580__$1);{
var G__11751 = cljs.core.chunk_rest.call(null,seq__11580__$1);
var G__11752 = c__7563__auto__;
var G__11753 = cljs.core.count.call(null,c__7563__auto__);
var G__11754 = 0;
seq__11580 = G__11751;
chunk__11582 = G__11752;
count__11583 = G__11753;
i__11584 = G__11754;
continue;
}
} else
{var label = cljs.core.first.call(null,seq__11580__$1);if(cljs.core.truth_((function (){var and__6803__auto__ = label;if(cljs.core.truth_(and__6803__auto__))
{return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,label))),id);
} else
{return and__6803__auto__;
}
})()))
{lt.object.raise.call(null,label,new cljs.core.Keyword(null,"remove-label","remove-label",3359640541));
{
var G__11755 = cljs.core.next.call(null,seq__11580__$1);
var G__11756 = null;
var G__11757 = 0;
var G__11758 = 0;
seq__11580 = G__11755;
chunk__11582 = G__11756;
count__11583 = G__11757;
i__11584 = G__11758;
continue;
}
} else
{{
var G__11759 = cljs.core.next.call(null,seq__11580__$1);
var G__11760 = null;
var G__11761 = 0;
var G__11762 = 0;
seq__11580 = G__11759;
chunk__11582 = G__11760;
count__11583 = G__11761;
i__11584 = G__11762;
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
lt.plugins.chromedebugger.tab_preview = (function tab_preview(action,tab){var e__8223__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),new cljs.core.Keyword(null,"faviconUrl","faviconUrl",4346893869).cljs$core$IFn$_invoke$arity$1(tab)], null)], null),new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(tab)], null));var seq__11592_11763 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (e){var temp__4092__auto___11767 = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"popup","popup",1120756766));if(cljs.core.truth_(temp__4092__auto___11767))
{var p_11768 = temp__4092__auto___11767;lt.object.raise.call(null,p_11768,new cljs.core.Keyword(null,"close!","close!",3951350939));
} else
{}
return action.call(null,tab);
})], null)));var chunk__11593_11764 = null;var count__11594_11765 = 0;var i__11595_11766 = 0;while(true){
if((i__11595_11766 < count__11594_11765))
{var vec__11596_11769 = cljs.core._nth.call(null,chunk__11593_11764,i__11595_11766);var ev__8224__auto___11770 = cljs.core.nth.call(null,vec__11596_11769,0,null);var func__8225__auto___11771 = cljs.core.nth.call(null,vec__11596_11769,1,null);lt.util.dom.on.call(null,e__8223__auto__,ev__8224__auto___11770,func__8225__auto___11771);
{
var G__11772 = seq__11592_11763;
var G__11773 = chunk__11593_11764;
var G__11774 = count__11594_11765;
var G__11775 = (i__11595_11766 + 1);
seq__11592_11763 = G__11772;
chunk__11593_11764 = G__11773;
count__11594_11765 = G__11774;
i__11595_11766 = G__11775;
continue;
}
} else
{var temp__4092__auto___11776 = cljs.core.seq.call(null,seq__11592_11763);if(temp__4092__auto___11776)
{var seq__11592_11777__$1 = temp__4092__auto___11776;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11592_11777__$1))
{var c__7563__auto___11778 = cljs.core.chunk_first.call(null,seq__11592_11777__$1);{
var G__11779 = cljs.core.chunk_rest.call(null,seq__11592_11777__$1);
var G__11780 = c__7563__auto___11778;
var G__11781 = cljs.core.count.call(null,c__7563__auto___11778);
var G__11782 = 0;
seq__11592_11763 = G__11779;
chunk__11593_11764 = G__11780;
count__11594_11765 = G__11781;
i__11595_11766 = G__11782;
continue;
}
} else
{var vec__11597_11783 = cljs.core.first.call(null,seq__11592_11777__$1);var ev__8224__auto___11784 = cljs.core.nth.call(null,vec__11597_11783,0,null);var func__8225__auto___11785 = cljs.core.nth.call(null,vec__11597_11783,1,null);lt.util.dom.on.call(null,e__8223__auto__,ev__8224__auto___11784,func__8225__auto___11785);
{
var G__11786 = cljs.core.next.call(null,seq__11592_11777__$1);
var G__11787 = null;
var G__11788 = 0;
var G__11789 = 0;
seq__11592_11763 = G__11786;
chunk__11593_11764 = G__11787;
count__11594_11765 = G__11788;
i__11595_11766 = G__11789;
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
lt.plugins.chromedebugger.connect_tab = (function connect_tab(client,tab){lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"socket","socket",4411822821),lt.plugins.chromedebugger.socket.call(null,client,new cljs.core.Keyword(null,"webSocketDebuggerUrl","webSocketDebuggerUrl",667502233).cljs$core$IFn$_invoke$arity$1(tab)),new cljs.core.Keyword(null,"commands","commands",4706336250),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"editor.eval.cljs.exec","editor.eval.cljs.exec",866638030),null,new cljs.core.Keyword(null,"editor.eval.css","editor.eval.css",1083014276),null,new cljs.core.Keyword(null,"editor.eval.js","editor.eval.js",1847417804),null,new cljs.core.Keyword(null,"editor.eval.html","editor.eval.html",3156465134),null], null), null),new cljs.core.Keyword(null,"tab","tab",1014018823),tab,new cljs.core.Keyword(null,"name","name",1017277949),[cljs.core.str("Chrome: "),cljs.core.str(new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(tab))].join(''),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"chrome.client.remote","chrome.client.remote",4091478727)], null));
return cljs.core.swap_BANG_.call(null,lt.plugins.chromedebugger.connected_tabs,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(tab),client);
});
lt.plugins.chromedebugger.select_tab = (function select_tab(client,tabs){var action = cljs.core.partial.call(null,lt.plugins.chromedebugger.connect_tab,client);var p = lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Select which tab to attach to",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul#chrome-tabs","ul#chrome-tabs",1003516535),cljs.core.map.call(null,((function (action){
return (function (p1__11598_SHARP_){return lt.plugins.chromedebugger.tab_preview.call(null,action,p1__11598_SHARP_);
});})(action))
,cljs.core.filter.call(null,((function (action){
return (function (p1__11599_SHARP_){return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p1__11599_SHARP_),"page")) && ((cljs.core.deref.call(null,lt.plugins.chromedebugger.connected_tabs).call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__11599_SHARP_)) == null));
});})(action))
,tabs))], null)], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"cancel"], null)], null)], null));return null;
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
lt.plugins.chromedebugger.remove_script_BANG_ = (function remove_script_BANG_(client,path,id){var vec__11602 = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__11600_SHARP_){return cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__11600_SHARP_)));
}),lt.plugins.chromedebugger.find_script.call(null,client,path)));var k = cljs.core.nth.call(null,vec__11602,0,null);var v = cljs.core.nth.call(null,vec__11602,1,null);return lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scripts","scripts",2940419194),lt.objs.files.basename.call(null,path)], null),cljs.core.dissoc,k);
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
lt.plugins.chromedebugger.__BEH__change_live = (function __BEH__change_live(this$,msg){var temp__4092__auto__ = lt.object.by_id.call(null,new cljs.core.Keyword(null,"cb","cb",1013907409).cljs$core$IFn$_invoke$arity$1(msg));if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;if(cljs.core.truth_(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg))))
{return lt.plugins.chromedebugger.changelive_BANG_.call(null,this$,ed,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg)),lt.plugins.watches.watched_range(ed,null,null,lt.plugins.js.src__GT_watch),(function (res){cljs.core.println.call(null,res);
return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.eval.js.change-live.success","editor.eval.js.change-live.success",2994410460));
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
lt.plugins.chromedebugger.desc = (function desc(this$,obj){var e__8223__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",1013907482),lt.plugins.chromedebugger.__GT_name.call(null,obj)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(obj))?[cljs.core.str(": "),cljs.core.str(new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(obj)))].join(''):null)], null));var seq__11609_11790 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){if(cljs.core.truth_(new cljs.core.Keyword(null,"open","open",1017321916).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
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
})], null)));var chunk__11610_11791 = null;var count__11611_11792 = 0;var i__11612_11793 = 0;while(true){
if((i__11612_11793 < count__11611_11792))
{var vec__11613_11794 = cljs.core._nth.call(null,chunk__11610_11791,i__11612_11793);var ev__8224__auto___11795 = cljs.core.nth.call(null,vec__11613_11794,0,null);var func__8225__auto___11796 = cljs.core.nth.call(null,vec__11613_11794,1,null);lt.util.dom.on.call(null,e__8223__auto__,ev__8224__auto___11795,func__8225__auto___11796);
{
var G__11797 = seq__11609_11790;
var G__11798 = chunk__11610_11791;
var G__11799 = count__11611_11792;
var G__11800 = (i__11612_11793 + 1);
seq__11609_11790 = G__11797;
chunk__11610_11791 = G__11798;
count__11611_11792 = G__11799;
i__11612_11793 = G__11800;
continue;
}
} else
{var temp__4092__auto___11801 = cljs.core.seq.call(null,seq__11609_11790);if(temp__4092__auto___11801)
{var seq__11609_11802__$1 = temp__4092__auto___11801;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11609_11802__$1))
{var c__7563__auto___11803 = cljs.core.chunk_first.call(null,seq__11609_11802__$1);{
var G__11804 = cljs.core.chunk_rest.call(null,seq__11609_11802__$1);
var G__11805 = c__7563__auto___11803;
var G__11806 = cljs.core.count.call(null,c__7563__auto___11803);
var G__11807 = 0;
seq__11609_11790 = G__11804;
chunk__11610_11791 = G__11805;
count__11611_11792 = G__11806;
i__11612_11793 = G__11807;
continue;
}
} else
{var vec__11614_11808 = cljs.core.first.call(null,seq__11609_11802__$1);var ev__8224__auto___11809 = cljs.core.nth.call(null,vec__11614_11808,0,null);var func__8225__auto___11810 = cljs.core.nth.call(null,vec__11614_11808,1,null);lt.util.dom.on.call(null,e__8223__auto__,ev__8224__auto___11809,func__8225__auto___11810);
{
var G__11811 = cljs.core.next.call(null,seq__11609_11802__$1);
var G__11812 = null;
var G__11813 = 0;
var G__11814 = 0;
seq__11609_11790 = G__11811;
chunk__11610_11791 = G__11812;
count__11611_11792 = G__11813;
i__11612_11793 = G__11814;
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
lt.plugins.chromedebugger.props = (function props(this$,children){var e__8223__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7532__auto__ = (function iter__11625(s__11626){return (new cljs.core.LazySeq(null,(function (){var s__11626__$1 = s__11626;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__11626__$1);if(temp__4092__auto__)
{var s__11626__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11626__$2))
{var c__7530__auto__ = cljs.core.chunk_first.call(null,s__11626__$2);var size__7531__auto__ = cljs.core.count.call(null,c__7530__auto__);var b__11628 = cljs.core.chunk_buffer.call(null,size__7531__auto__);if((function (){var i__11627 = 0;while(true){
if((i__11627 < size__7531__auto__))
{var c = cljs.core._nth.call(null,c__7530__auto__,i__11627);cljs.core.chunk_append.call(null,b__11628,(cljs.core.truth_((function (){var and__6803__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c)),"object");if(and__6803__auto__)
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
var G__11815 = (i__11627 + 1);
i__11627 = G__11815;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11628),iter__11625.call(null,cljs.core.chunk_rest.call(null,s__11626__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11628),null);
}
} else
{var c = cljs.core.first.call(null,s__11626__$2);return cljs.core.cons.call(null,(cljs.core.truth_((function (){var and__6803__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c)),"object");if(and__6803__auto__)
{return new cljs.core.Keyword(null,"objectId","objectId",1104399404).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c));
} else
{return and__6803__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),lt.object.__GT_content.call(null,lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","inspector-object","lt.plugins.chromedebugger/inspector-object",4656861767),new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),c))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",1013907482),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(c)], null),": ",(function (){var or__6815__auto__ = new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c));if(cljs.core.truth_(or__6815__auto__))
{return or__6815__auto__;
} else
{return [cljs.core.str(lt.plugins.chromedebugger.format_value.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c)))].join('');
}
})()], null)),iter__11625.call(null,cljs.core.rest.call(null,s__11626__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7532__auto__.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1017277949),lt.plugins.chromedebugger.i_compare,children));
})()], null));var seq__11629_11816 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__11630_11817 = null;var count__11631_11818 = 0;var i__11632_11819 = 0;while(true){
if((i__11632_11819 < count__11631_11818))
{var vec__11633_11820 = cljs.core._nth.call(null,chunk__11630_11817,i__11632_11819);var ev__8224__auto___11821 = cljs.core.nth.call(null,vec__11633_11820,0,null);var func__8225__auto___11822 = cljs.core.nth.call(null,vec__11633_11820,1,null);lt.util.dom.on.call(null,e__8223__auto__,ev__8224__auto___11821,func__8225__auto___11822);
{
var G__11823 = seq__11629_11816;
var G__11824 = chunk__11630_11817;
var G__11825 = count__11631_11818;
var G__11826 = (i__11632_11819 + 1);
seq__11629_11816 = G__11823;
chunk__11630_11817 = G__11824;
count__11631_11818 = G__11825;
i__11632_11819 = G__11826;
continue;
}
} else
{var temp__4092__auto___11827 = cljs.core.seq.call(null,seq__11629_11816);if(temp__4092__auto___11827)
{var seq__11629_11828__$1 = temp__4092__auto___11827;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11629_11828__$1))
{var c__7563__auto___11829 = cljs.core.chunk_first.call(null,seq__11629_11828__$1);{
var G__11830 = cljs.core.chunk_rest.call(null,seq__11629_11828__$1);
var G__11831 = c__7563__auto___11829;
var G__11832 = cljs.core.count.call(null,c__7563__auto___11829);
var G__11833 = 0;
seq__11629_11816 = G__11830;
chunk__11630_11817 = G__11831;
count__11631_11818 = G__11832;
i__11632_11819 = G__11833;
continue;
}
} else
{var vec__11634_11834 = cljs.core.first.call(null,seq__11629_11828__$1);var ev__8224__auto___11835 = cljs.core.nth.call(null,vec__11634_11834,0,null);var func__8225__auto___11836 = cljs.core.nth.call(null,vec__11634_11834,1,null);lt.util.dom.on.call(null,e__8223__auto__,ev__8224__auto___11835,func__8225__auto___11836);
{
var G__11837 = cljs.core.next.call(null,seq__11629_11828__$1);
var G__11838 = null;
var G__11839 = 0;
var G__11840 = 0;
seq__11629_11816 = G__11837;
chunk__11630_11817 = G__11838;
count__11631_11818 = G__11839;
i__11632_11819 = G__11840;
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
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),(function (){var pred__11638 = cljs.core._EQ_;var expr__11639 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(pred__11638.call(null,"object",expr__11639)))
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
lt.plugins.chromedebugger.clear_unused_inspectors = (function clear_unused_inspectors(){var seq__11647 = cljs.core.seq.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"inspector.object","inspector.object",1285492104)));var chunk__11649 = null;var count__11650 = 0;var i__11651 = 0;while(true){
if((i__11651 < count__11650))
{var obj = cljs.core._nth.call(null,chunk__11649,i__11651);if((cljs.core.not.call(null,lt.object.__GT_content.call(null,obj))) || (cljs.core.not.call(null,lt.util.dom.parents.call(null,lt.object.__GT_content.call(null,obj),new cljs.core.Keyword(null,"body","body",1016933652)))))
{lt.object.destroy_BANG_.call(null,obj);
{
var G__11841 = seq__11647;
var G__11842 = chunk__11649;
var G__11843 = count__11650;
var G__11844 = (i__11651 + 1);
seq__11647 = G__11841;
chunk__11649 = G__11842;
count__11650 = G__11843;
i__11651 = G__11844;
continue;
}
} else
{{
var G__11845 = seq__11647;
var G__11846 = chunk__11649;
var G__11847 = count__11650;
var G__11848 = (i__11651 + 1);
seq__11647 = G__11845;
chunk__11649 = G__11846;
count__11650 = G__11847;
i__11651 = G__11848;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11647);if(temp__4092__auto__)
{var seq__11647__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11647__$1))
{var c__7563__auto__ = cljs.core.chunk_first.call(null,seq__11647__$1);{
var G__11849 = cljs.core.chunk_rest.call(null,seq__11647__$1);
var G__11850 = c__7563__auto__;
var G__11851 = cljs.core.count.call(null,c__7563__auto__);
var G__11852 = 0;
seq__11647 = G__11849;
chunk__11649 = G__11850;
count__11650 = G__11851;
i__11651 = G__11852;
continue;
}
} else
{var obj = cljs.core.first.call(null,seq__11647__$1);if((cljs.core.not.call(null,lt.object.__GT_content.call(null,obj))) || (cljs.core.not.call(null,lt.util.dom.parents.call(null,lt.object.__GT_content.call(null,obj),new cljs.core.Keyword(null,"body","body",1016933652)))))
{lt.object.destroy_BANG_.call(null,obj);
{
var G__11853 = cljs.core.next.call(null,seq__11647__$1);
var G__11854 = null;
var G__11855 = 0;
var G__11856 = 0;
seq__11647 = G__11853;
chunk__11649 = G__11854;
count__11650 = G__11855;
i__11651 = G__11856;
continue;
}
} else
{{
var G__11857 = cljs.core.next.call(null,seq__11647__$1);
var G__11858 = null;
var G__11859 = 0;
var G__11860 = 0;
seq__11647 = G__11857;
chunk__11649 = G__11858;
count__11650 = G__11859;
i__11651 = G__11860;
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