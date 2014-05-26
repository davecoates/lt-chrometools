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
lt.plugins.chromedebugger.server_input = (function server_input(){var e__7793__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"host:port",new cljs.core.Keyword(null,"value","value",1125876963),"localhost:"], null)], null));var seq__14499_14639 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",1111509066),((function (e__7793__auto__){
return (function (){return lt.objs.context.in_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
});})(e__7793__auto__))
,new cljs.core.Keyword(null,"blur","blur",1016931289),((function (e__7793__auto__){
return (function (){return lt.objs.context.out_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
});})(e__7793__auto__))
], null)));var chunk__14500_14640 = null;var count__14501_14641 = 0;var i__14502_14642 = 0;while(true){
if((i__14502_14642 < count__14501_14641))
{var vec__14503_14643 = cljs.core._nth.call(null,chunk__14500_14640,i__14502_14642);var ev__7794__auto___14644 = cljs.core.nth.call(null,vec__14503_14643,0,null);var func__7795__auto___14645 = cljs.core.nth.call(null,vec__14503_14643,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___14644,func__7795__auto___14645);
{
var G__14646 = seq__14499_14639;
var G__14647 = chunk__14500_14640;
var G__14648 = count__14501_14641;
var G__14649 = (i__14502_14642 + 1);
seq__14499_14639 = G__14646;
chunk__14500_14640 = G__14647;
count__14501_14641 = G__14648;
i__14502_14642 = G__14649;
continue;
}
} else
{var temp__4092__auto___14650 = cljs.core.seq.call(null,seq__14499_14639);if(temp__4092__auto___14650)
{var seq__14499_14651__$1 = temp__4092__auto___14650;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14499_14651__$1))
{var c__7112__auto___14652 = cljs.core.chunk_first.call(null,seq__14499_14651__$1);{
var G__14653 = cljs.core.chunk_rest.call(null,seq__14499_14651__$1);
var G__14654 = c__7112__auto___14652;
var G__14655 = cljs.core.count.call(null,c__7112__auto___14652);
var G__14656 = 0;
seq__14499_14639 = G__14653;
chunk__14500_14640 = G__14654;
count__14501_14641 = G__14655;
i__14502_14642 = G__14656;
continue;
}
} else
{var vec__14504_14657 = cljs.core.first.call(null,seq__14499_14651__$1);var ev__7794__auto___14658 = cljs.core.nth.call(null,vec__14504_14657,0,null);var func__7795__auto___14659 = cljs.core.nth.call(null,vec__14504_14657,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___14658,func__7795__auto___14659);
{
var G__14660 = cljs.core.next.call(null,seq__14499_14651__$1);
var G__14661 = null;
var G__14662 = 0;
var G__14663 = 0;
seq__14499_14639 = G__14660;
chunk__14500_14640 = G__14661;
count__14501_14641 = G__14662;
i__14502_14642 = G__14663;
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
lt.plugins.chromedebugger.connect_to_remote = (function connect_to_remote(server){var vec__14506 = clojure.string.split.call(null,server,":");var host = cljs.core.nth.call(null,vec__14506,0,null);var port = cljs.core.nth.call(null,vec__14506,1,null);if(cljs.core.truth_((function (){var and__6352__auto__ = host;if(cljs.core.truth_(and__6352__auto__))
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
return (function (p1__14507_SHARP_){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"message","message",1968829305),lt.util.cljs.js__GT_clj.call(null,JSON.parse(p1__14507_SHARP_.data),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true));
});})(sock))
;
sock.onerror = ((function (sock){
return (function (p1__14508_SHARP_){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"error","error",1110689146),p1__14508_SHARP_);
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
var send__delegate = function (client,m,p__14509){var vec__14511 = p__14509;var cb = cljs.core.nth.call(null,vec__14511,0,null);if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))))
{return lt.plugins.chromedebugger.send_STAR_.call(null,client,m,cb);
} else
{return lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1121848451)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [client,m,cb], null));
}
};
var send = function (client,m,var_args){
var p__14509 = null;if (arguments.length > 2) {
  p__14509 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return send__delegate.call(this,client,m,p__14509);};
send.cljs$lang$maxFixedArity = 2;
send.cljs$lang$applyTo = (function (arglist__14664){
var client = cljs.core.first(arglist__14664);
arglist__14664 = cljs.core.next(arglist__14664);
var m = cljs.core.first(arglist__14664);
var p__14509 = cljs.core.rest(arglist__14664);
return send__delegate(client,m,p__14509);
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
lt.plugins.chromedebugger.__BEH__close = (function __BEH__close(this$){var temp__4092__auto___14665 = new cljs.core.Keyword(null,"socket","socket",4411822821).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___14665))
{var socket_14666 = temp__4092__auto___14665;socket_14666.close();
} else
{}
cljs.core.swap_BANG_.call(null,lt.plugins.chromedebugger.connected_tabs,cljs.core.dissoc,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));
return lt.objs.clients.rem_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","close","lt.plugins.chromedebugger/close",3740144484),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.__BEH__close,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close!","close!",3951350939),null], null), null));
lt.plugins.chromedebugger.__BEH__clear_queue_on_connect = (function __BEH__clear_queue_on_connect(this$){var seq__14516 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"queue","queue",1121848451).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var chunk__14517 = null;var count__14518 = 0;var i__14519 = 0;while(true){
if((i__14519 < count__14518))
{var msg = cljs.core._nth.call(null,chunk__14517,i__14519);cljs.core.apply.call(null,lt.plugins.chromedebugger.send,msg);
{
var G__14667 = seq__14516;
var G__14668 = chunk__14517;
var G__14669 = count__14518;
var G__14670 = (i__14519 + 1);
seq__14516 = G__14667;
chunk__14517 = G__14668;
count__14518 = G__14669;
i__14519 = G__14670;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14516);if(temp__4092__auto__)
{var seq__14516__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14516__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__14516__$1);{
var G__14671 = cljs.core.chunk_rest.call(null,seq__14516__$1);
var G__14672 = c__7112__auto__;
var G__14673 = cljs.core.count.call(null,c__7112__auto__);
var G__14674 = 0;
seq__14516 = G__14671;
chunk__14517 = G__14672;
count__14518 = G__14673;
i__14519 = G__14674;
continue;
}
} else
{var msg = cljs.core.first.call(null,seq__14516__$1);cljs.core.apply.call(null,lt.plugins.chromedebugger.send,msg);
{
var G__14675 = cljs.core.next.call(null,seq__14516__$1);
var G__14676 = null;
var G__14677 = 0;
var G__14678 = 0;
seq__14516 = G__14675;
chunk__14517 = G__14676;
count__14518 = G__14677;
i__14519 = G__14678;
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
lt.plugins.chromedebugger.is_data_uri_QMARK_ = (function is_data_uri_QMARK_(uri){var data_uri_prefix = "data:application/json";return cljs.core._EQ_.call(null,data_uri_prefix,uri.substr(0,data_uri_prefix.length));
});
lt.plugins.chromedebugger.store_source_map = (function store_source_map(client,url,params,sm){var seq__14524 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"sources","sources",3286994730).cljs$core$IFn$_invoke$arity$1(sm));var chunk__14525 = null;var count__14526 = 0;var i__14527 = 0;while(true){
if((i__14527 < count__14526))
{var source = cljs.core._nth.call(null,chunk__14525,i__14527);lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scripts","scripts",2940419194)], null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.files.basename.call(null,source),url], null),params);
{
var G__14679 = seq__14524;
var G__14680 = chunk__14525;
var G__14681 = count__14526;
var G__14682 = (i__14527 + 1);
seq__14524 = G__14679;
chunk__14525 = G__14680;
count__14526 = G__14681;
i__14527 = G__14682;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14524);if(temp__4092__auto__)
{var seq__14524__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14524__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__14524__$1);{
var G__14683 = cljs.core.chunk_rest.call(null,seq__14524__$1);
var G__14684 = c__7112__auto__;
var G__14685 = cljs.core.count.call(null,c__7112__auto__);
var G__14686 = 0;
seq__14524 = G__14683;
chunk__14525 = G__14684;
count__14526 = G__14685;
i__14527 = G__14686;
continue;
}
} else
{var source = cljs.core.first.call(null,seq__14524__$1);lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scripts","scripts",2940419194)], null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.files.basename.call(null,source),url], null),params);
{
var G__14687 = cljs.core.next.call(null,seq__14524__$1);
var G__14688 = null;
var G__14689 = 0;
var G__14690 = 0;
seq__14524 = G__14687;
chunk__14525 = G__14688;
count__14526 = G__14689;
i__14527 = G__14690;
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
{var ed = temp__4092__auto__;var info = new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg);var seq__14532 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(info));var chunk__14533 = null;var count__14534 = 0;var i__14535 = 0;while(true){
if((i__14535 < count__14534))
{var form__$1 = cljs.core._nth.call(null,chunk__14533,i__14535);var cb_14691 = cljs.core.partial.call(null,lt.plugins.chromedebugger.cljs_eval_cb,this$,msg,form__$1);lt.plugins.chromedebugger.eval_cljs.call(null,this$,form__$1,cb_14691);
{
var G__14692 = seq__14532;
var G__14693 = chunk__14533;
var G__14694 = count__14534;
var G__14695 = (i__14535 + 1);
seq__14532 = G__14692;
chunk__14533 = G__14693;
count__14534 = G__14694;
i__14535 = G__14695;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__14532);if(temp__4092__auto____$1)
{var seq__14532__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14532__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__14532__$1);{
var G__14696 = cljs.core.chunk_rest.call(null,seq__14532__$1);
var G__14697 = c__7112__auto__;
var G__14698 = cljs.core.count.call(null,c__7112__auto__);
var G__14699 = 0;
seq__14532 = G__14696;
chunk__14533 = G__14697;
count__14534 = G__14698;
i__14535 = G__14699;
continue;
}
} else
{var form__$1 = cljs.core.first.call(null,seq__14532__$1);var cb_14700 = cljs.core.partial.call(null,lt.plugins.chromedebugger.cljs_eval_cb,this$,msg,form__$1);lt.plugins.chromedebugger.eval_cljs.call(null,this$,form__$1,cb_14700);
{
var G__14701 = cljs.core.next.call(null,seq__14532__$1);
var G__14702 = null;
var G__14703 = 0;
var G__14704 = 0;
seq__14532 = G__14701;
chunk__14533 = G__14702;
count__14534 = G__14703;
i__14535 = G__14704;
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
lt.plugins.chromedebugger.dismiss_button = (function dismiss_button(obj){var e__7793__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tab-close","span.tab-close",4094760846),"x"], null));var seq__14542_14705 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7793__auto__){
return (function (){return lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"remove-label","remove-label",3359640541));
});})(e__7793__auto__))
], null)));var chunk__14543_14706 = null;var count__14544_14707 = 0;var i__14545_14708 = 0;while(true){
if((i__14545_14708 < count__14544_14707))
{var vec__14546_14709 = cljs.core._nth.call(null,chunk__14543_14706,i__14545_14708);var ev__7794__auto___14710 = cljs.core.nth.call(null,vec__14546_14709,0,null);var func__7795__auto___14711 = cljs.core.nth.call(null,vec__14546_14709,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___14710,func__7795__auto___14711);
{
var G__14712 = seq__14542_14705;
var G__14713 = chunk__14543_14706;
var G__14714 = count__14544_14707;
var G__14715 = (i__14545_14708 + 1);
seq__14542_14705 = G__14712;
chunk__14543_14706 = G__14713;
count__14544_14707 = G__14714;
i__14545_14708 = G__14715;
continue;
}
} else
{var temp__4092__auto___14716 = cljs.core.seq.call(null,seq__14542_14705);if(temp__4092__auto___14716)
{var seq__14542_14717__$1 = temp__4092__auto___14716;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14542_14717__$1))
{var c__7112__auto___14718 = cljs.core.chunk_first.call(null,seq__14542_14717__$1);{
var G__14719 = cljs.core.chunk_rest.call(null,seq__14542_14717__$1);
var G__14720 = c__7112__auto___14718;
var G__14721 = cljs.core.count.call(null,c__7112__auto___14718);
var G__14722 = 0;
seq__14542_14705 = G__14719;
chunk__14543_14706 = G__14720;
count__14544_14707 = G__14721;
i__14545_14708 = G__14722;
continue;
}
} else
{var vec__14547_14723 = cljs.core.first.call(null,seq__14542_14717__$1);var ev__7794__auto___14724 = cljs.core.nth.call(null,vec__14547_14723,0,null);var func__7795__auto___14725 = cljs.core.nth.call(null,vec__14547_14723,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___14724,func__7795__auto___14725);
{
var G__14726 = cljs.core.next.call(null,seq__14542_14717__$1);
var G__14727 = null;
var G__14728 = 0;
var G__14729 = 0;
seq__14542_14705 = G__14726;
chunk__14543_14706 = G__14727;
count__14544_14707 = G__14728;
i__14545_14708 = G__14729;
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
lt.plugins.chromedebugger.reconnect_button = (function reconnect_button(label,tab){var e__7793__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"reconnect-chrome button"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),[cljs.core.str("Reconnect: "),cljs.core.str(new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(tab))].join('')], null),lt.plugins.chromedebugger.dismiss_button.call(null,label)], null));var seq__14554_14730 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7793__auto__){
return (function (e){var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"chrome.client.remote","chrome.client.remote",4091478727));return lt.plugins.chromedebugger.connect_tab.call(null,client,tab);
});})(e__7793__auto__))
], null)));var chunk__14555_14731 = null;var count__14556_14732 = 0;var i__14557_14733 = 0;while(true){
if((i__14557_14733 < count__14556_14732))
{var vec__14558_14734 = cljs.core._nth.call(null,chunk__14555_14731,i__14557_14733);var ev__7794__auto___14735 = cljs.core.nth.call(null,vec__14558_14734,0,null);var func__7795__auto___14736 = cljs.core.nth.call(null,vec__14558_14734,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___14735,func__7795__auto___14736);
{
var G__14737 = seq__14554_14730;
var G__14738 = chunk__14555_14731;
var G__14739 = count__14556_14732;
var G__14740 = (i__14557_14733 + 1);
seq__14554_14730 = G__14737;
chunk__14555_14731 = G__14738;
count__14556_14732 = G__14739;
i__14557_14733 = G__14740;
continue;
}
} else
{var temp__4092__auto___14741 = cljs.core.seq.call(null,seq__14554_14730);if(temp__4092__auto___14741)
{var seq__14554_14742__$1 = temp__4092__auto___14741;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14554_14742__$1))
{var c__7112__auto___14743 = cljs.core.chunk_first.call(null,seq__14554_14742__$1);{
var G__14744 = cljs.core.chunk_rest.call(null,seq__14554_14742__$1);
var G__14745 = c__7112__auto___14743;
var G__14746 = cljs.core.count.call(null,c__7112__auto___14743);
var G__14747 = 0;
seq__14554_14730 = G__14744;
chunk__14555_14731 = G__14745;
count__14556_14732 = G__14746;
i__14557_14733 = G__14747;
continue;
}
} else
{var vec__14559_14748 = cljs.core.first.call(null,seq__14554_14742__$1);var ev__7794__auto___14749 = cljs.core.nth.call(null,vec__14559_14748,0,null);var func__7795__auto___14750 = cljs.core.nth.call(null,vec__14559_14748,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___14749,func__7795__auto___14750);
{
var G__14751 = cljs.core.next.call(null,seq__14554_14742__$1);
var G__14752 = null;
var G__14753 = 0;
var G__14754 = 0;
seq__14554_14730 = G__14751;
chunk__14555_14731 = G__14752;
count__14556_14732 = G__14753;
i__14557_14733 = G__14754;
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
lt.plugins.chromedebugger.__BEH__remove_label = (function __BEH__remove_label(this$,that){var id = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var labels = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"reconnect-label","reconnect-label",3615163504));var seq__14566 = cljs.core.seq.call(null,labels);var chunk__14568 = null;var count__14569 = 0;var i__14570 = 0;while(true){
if((i__14570 < count__14569))
{var label = cljs.core._nth.call(null,chunk__14568,i__14570);if(cljs.core.truth_((function (){var and__6352__auto__ = label;if(cljs.core.truth_(and__6352__auto__))
{return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,label))),id);
} else
{return and__6352__auto__;
}
})()))
{lt.object.raise.call(null,label,new cljs.core.Keyword(null,"remove-label","remove-label",3359640541));
{
var G__14755 = seq__14566;
var G__14756 = chunk__14568;
var G__14757 = count__14569;
var G__14758 = (i__14570 + 1);
seq__14566 = G__14755;
chunk__14568 = G__14756;
count__14569 = G__14757;
i__14570 = G__14758;
continue;
}
} else
{{
var G__14759 = seq__14566;
var G__14760 = chunk__14568;
var G__14761 = count__14569;
var G__14762 = (i__14570 + 1);
seq__14566 = G__14759;
chunk__14568 = G__14760;
count__14569 = G__14761;
i__14570 = G__14762;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14566);if(temp__4092__auto__)
{var seq__14566__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14566__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__14566__$1);{
var G__14763 = cljs.core.chunk_rest.call(null,seq__14566__$1);
var G__14764 = c__7112__auto__;
var G__14765 = cljs.core.count.call(null,c__7112__auto__);
var G__14766 = 0;
seq__14566 = G__14763;
chunk__14568 = G__14764;
count__14569 = G__14765;
i__14570 = G__14766;
continue;
}
} else
{var label = cljs.core.first.call(null,seq__14566__$1);if(cljs.core.truth_((function (){var and__6352__auto__ = label;if(cljs.core.truth_(and__6352__auto__))
{return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,label))),id);
} else
{return and__6352__auto__;
}
})()))
{lt.object.raise.call(null,label,new cljs.core.Keyword(null,"remove-label","remove-label",3359640541));
{
var G__14767 = cljs.core.next.call(null,seq__14566__$1);
var G__14768 = null;
var G__14769 = 0;
var G__14770 = 0;
seq__14566 = G__14767;
chunk__14568 = G__14768;
count__14569 = G__14769;
i__14570 = G__14770;
continue;
}
} else
{{
var G__14771 = cljs.core.next.call(null,seq__14566__$1);
var G__14772 = null;
var G__14773 = 0;
var G__14774 = 0;
seq__14566 = G__14771;
chunk__14568 = G__14772;
count__14569 = G__14773;
i__14570 = G__14774;
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
lt.plugins.chromedebugger.tab_preview = (function tab_preview(action,tab){var e__7793__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),new cljs.core.Keyword(null,"faviconUrl","faviconUrl",4346893869).cljs$core$IFn$_invoke$arity$1(tab)], null)], null),new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(tab)], null));var seq__14578_14775 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7793__auto__){
return (function (e){var temp__4092__auto___14779 = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"popup","popup",1120756766));if(cljs.core.truth_(temp__4092__auto___14779))
{var p_14780 = temp__4092__auto___14779;lt.object.raise.call(null,p_14780,new cljs.core.Keyword(null,"close!","close!",3951350939));
} else
{}
return action.call(null,tab);
});})(e__7793__auto__))
], null)));var chunk__14579_14776 = null;var count__14580_14777 = 0;var i__14581_14778 = 0;while(true){
if((i__14581_14778 < count__14580_14777))
{var vec__14582_14781 = cljs.core._nth.call(null,chunk__14579_14776,i__14581_14778);var ev__7794__auto___14782 = cljs.core.nth.call(null,vec__14582_14781,0,null);var func__7795__auto___14783 = cljs.core.nth.call(null,vec__14582_14781,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___14782,func__7795__auto___14783);
{
var G__14784 = seq__14578_14775;
var G__14785 = chunk__14579_14776;
var G__14786 = count__14580_14777;
var G__14787 = (i__14581_14778 + 1);
seq__14578_14775 = G__14784;
chunk__14579_14776 = G__14785;
count__14580_14777 = G__14786;
i__14581_14778 = G__14787;
continue;
}
} else
{var temp__4092__auto___14788 = cljs.core.seq.call(null,seq__14578_14775);if(temp__4092__auto___14788)
{var seq__14578_14789__$1 = temp__4092__auto___14788;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14578_14789__$1))
{var c__7112__auto___14790 = cljs.core.chunk_first.call(null,seq__14578_14789__$1);{
var G__14791 = cljs.core.chunk_rest.call(null,seq__14578_14789__$1);
var G__14792 = c__7112__auto___14790;
var G__14793 = cljs.core.count.call(null,c__7112__auto___14790);
var G__14794 = 0;
seq__14578_14775 = G__14791;
chunk__14579_14776 = G__14792;
count__14580_14777 = G__14793;
i__14581_14778 = G__14794;
continue;
}
} else
{var vec__14583_14795 = cljs.core.first.call(null,seq__14578_14789__$1);var ev__7794__auto___14796 = cljs.core.nth.call(null,vec__14583_14795,0,null);var func__7795__auto___14797 = cljs.core.nth.call(null,vec__14583_14795,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___14796,func__7795__auto___14797);
{
var G__14798 = cljs.core.next.call(null,seq__14578_14789__$1);
var G__14799 = null;
var G__14800 = 0;
var G__14801 = 0;
seq__14578_14775 = G__14798;
chunk__14579_14776 = G__14799;
count__14580_14777 = G__14800;
i__14581_14778 = G__14801;
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
return (function (p1__14584_SHARP_){return lt.plugins.chromedebugger.tab_preview.call(null,action,p1__14584_SHARP_);
});})(action))
,cljs.core.filter.call(null,((function (action){
return (function (p1__14585_SHARP_){return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p1__14585_SHARP_),"page")) && ((cljs.core.deref.call(null,lt.plugins.chromedebugger.connected_tabs).call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__14585_SHARP_)) == null));
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
lt.plugins.chromedebugger.remove_script_BANG_ = (function remove_script_BANG_(client,path,id){var vec__14588 = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__14586_SHARP_){return cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__14586_SHARP_)));
}),lt.plugins.chromedebugger.find_script.call(null,client,path)));var k = cljs.core.nth.call(null,vec__14588,0,null);var v = cljs.core.nth.call(null,vec__14588,1,null);return lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scripts","scripts",2940419194),lt.objs.files.basename.call(null,path)], null),cljs.core.dissoc,k);
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
{var code = new cljs.core.Keyword(null,"full-source","full-source",2886038667).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg));var code__$1 = (((code == null))?lt.plugins.watches.watched_range(ed,null,null,lt.plugins.js.src__GT_watch):code);return lt.plugins.chromedebugger.changelive_BANG_.call(null,this$,ed,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg)),code__$1,((function (code,code__$1,ed,temp__4092__auto__){
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
lt.plugins.chromedebugger.desc = (function desc(this$,obj){var e__7793__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",1013907482),lt.plugins.chromedebugger.__GT_name.call(null,obj)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(obj))?[cljs.core.str(": "),cljs.core.str(new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(obj)))].join(''):null)], null));var seq__14595_14802 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7793__auto__){
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
], null)));var chunk__14596_14803 = null;var count__14597_14804 = 0;var i__14598_14805 = 0;while(true){
if((i__14598_14805 < count__14597_14804))
{var vec__14599_14806 = cljs.core._nth.call(null,chunk__14596_14803,i__14598_14805);var ev__7794__auto___14807 = cljs.core.nth.call(null,vec__14599_14806,0,null);var func__7795__auto___14808 = cljs.core.nth.call(null,vec__14599_14806,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___14807,func__7795__auto___14808);
{
var G__14809 = seq__14595_14802;
var G__14810 = chunk__14596_14803;
var G__14811 = count__14597_14804;
var G__14812 = (i__14598_14805 + 1);
seq__14595_14802 = G__14809;
chunk__14596_14803 = G__14810;
count__14597_14804 = G__14811;
i__14598_14805 = G__14812;
continue;
}
} else
{var temp__4092__auto___14813 = cljs.core.seq.call(null,seq__14595_14802);if(temp__4092__auto___14813)
{var seq__14595_14814__$1 = temp__4092__auto___14813;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14595_14814__$1))
{var c__7112__auto___14815 = cljs.core.chunk_first.call(null,seq__14595_14814__$1);{
var G__14816 = cljs.core.chunk_rest.call(null,seq__14595_14814__$1);
var G__14817 = c__7112__auto___14815;
var G__14818 = cljs.core.count.call(null,c__7112__auto___14815);
var G__14819 = 0;
seq__14595_14802 = G__14816;
chunk__14596_14803 = G__14817;
count__14597_14804 = G__14818;
i__14598_14805 = G__14819;
continue;
}
} else
{var vec__14600_14820 = cljs.core.first.call(null,seq__14595_14814__$1);var ev__7794__auto___14821 = cljs.core.nth.call(null,vec__14600_14820,0,null);var func__7795__auto___14822 = cljs.core.nth.call(null,vec__14600_14820,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___14821,func__7795__auto___14822);
{
var G__14823 = cljs.core.next.call(null,seq__14595_14814__$1);
var G__14824 = null;
var G__14825 = 0;
var G__14826 = 0;
seq__14595_14802 = G__14823;
chunk__14596_14803 = G__14824;
count__14597_14804 = G__14825;
i__14598_14805 = G__14826;
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
lt.plugins.chromedebugger.props = (function props(this$,children){var e__7793__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7081__auto__ = (function iter__14611(s__14612){return (new cljs.core.LazySeq(null,(function (){var s__14612__$1 = s__14612;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14612__$1);if(temp__4092__auto__)
{var s__14612__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14612__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__14612__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__14614 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__14613 = 0;while(true){
if((i__14613 < size__7080__auto__))
{var c = cljs.core._nth.call(null,c__7079__auto__,i__14613);cljs.core.chunk_append.call(null,b__14614,(cljs.core.truth_((function (){var and__6352__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c)),"object");if(and__6352__auto__)
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
var G__14827 = (i__14613 + 1);
i__14613 = G__14827;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14614),iter__14611.call(null,cljs.core.chunk_rest.call(null,s__14612__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14614),null);
}
} else
{var c = cljs.core.first.call(null,s__14612__$2);return cljs.core.cons.call(null,(cljs.core.truth_((function (){var and__6352__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c)),"object");if(and__6352__auto__)
{return new cljs.core.Keyword(null,"objectId","objectId",1104399404).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c));
} else
{return and__6352__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),lt.object.__GT_content.call(null,lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","inspector-object","lt.plugins.chromedebugger/inspector-object",4656861767),new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),c))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",1013907482),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(c)], null),": ",(function (){var or__6364__auto__ = new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c));if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return [cljs.core.str(lt.plugins.chromedebugger.format_value.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c)))].join('');
}
})()], null)),iter__14611.call(null,cljs.core.rest.call(null,s__14612__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7081__auto__.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1017277949),lt.plugins.chromedebugger.i_compare,children));
})()], null));var seq__14615_14828 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__14616_14829 = null;var count__14617_14830 = 0;var i__14618_14831 = 0;while(true){
if((i__14618_14831 < count__14617_14830))
{var vec__14619_14832 = cljs.core._nth.call(null,chunk__14616_14829,i__14618_14831);var ev__7794__auto___14833 = cljs.core.nth.call(null,vec__14619_14832,0,null);var func__7795__auto___14834 = cljs.core.nth.call(null,vec__14619_14832,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___14833,func__7795__auto___14834);
{
var G__14835 = seq__14615_14828;
var G__14836 = chunk__14616_14829;
var G__14837 = count__14617_14830;
var G__14838 = (i__14618_14831 + 1);
seq__14615_14828 = G__14835;
chunk__14616_14829 = G__14836;
count__14617_14830 = G__14837;
i__14618_14831 = G__14838;
continue;
}
} else
{var temp__4092__auto___14839 = cljs.core.seq.call(null,seq__14615_14828);if(temp__4092__auto___14839)
{var seq__14615_14840__$1 = temp__4092__auto___14839;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14615_14840__$1))
{var c__7112__auto___14841 = cljs.core.chunk_first.call(null,seq__14615_14840__$1);{
var G__14842 = cljs.core.chunk_rest.call(null,seq__14615_14840__$1);
var G__14843 = c__7112__auto___14841;
var G__14844 = cljs.core.count.call(null,c__7112__auto___14841);
var G__14845 = 0;
seq__14615_14828 = G__14842;
chunk__14616_14829 = G__14843;
count__14617_14830 = G__14844;
i__14618_14831 = G__14845;
continue;
}
} else
{var vec__14620_14846 = cljs.core.first.call(null,seq__14615_14840__$1);var ev__7794__auto___14847 = cljs.core.nth.call(null,vec__14620_14846,0,null);var func__7795__auto___14848 = cljs.core.nth.call(null,vec__14620_14846,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___14847,func__7795__auto___14848);
{
var G__14849 = cljs.core.next.call(null,seq__14615_14840__$1);
var G__14850 = null;
var G__14851 = 0;
var G__14852 = 0;
seq__14615_14828 = G__14849;
chunk__14616_14829 = G__14850;
count__14617_14830 = G__14851;
i__14618_14831 = G__14852;
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
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),(function (){var pred__14624 = cljs.core._EQ_;var expr__14625 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(pred__14624.call(null,"object",expr__14625)))
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
lt.plugins.chromedebugger.clear_unused_inspectors = (function clear_unused_inspectors(){var seq__14633 = cljs.core.seq.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"inspector.object","inspector.object",1285492104)));var chunk__14635 = null;var count__14636 = 0;var i__14637 = 0;while(true){
if((i__14637 < count__14636))
{var obj = cljs.core._nth.call(null,chunk__14635,i__14637);if((cljs.core.not.call(null,lt.object.__GT_content.call(null,obj))) || (cljs.core.not.call(null,lt.util.dom.parents.call(null,lt.object.__GT_content.call(null,obj),new cljs.core.Keyword(null,"body","body",1016933652)))))
{lt.object.destroy_BANG_.call(null,obj);
{
var G__14853 = seq__14633;
var G__14854 = chunk__14635;
var G__14855 = count__14636;
var G__14856 = (i__14637 + 1);
seq__14633 = G__14853;
chunk__14635 = G__14854;
count__14636 = G__14855;
i__14637 = G__14856;
continue;
}
} else
{{
var G__14857 = seq__14633;
var G__14858 = chunk__14635;
var G__14859 = count__14636;
var G__14860 = (i__14637 + 1);
seq__14633 = G__14857;
chunk__14635 = G__14858;
count__14636 = G__14859;
i__14637 = G__14860;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14633);if(temp__4092__auto__)
{var seq__14633__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14633__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__14633__$1);{
var G__14861 = cljs.core.chunk_rest.call(null,seq__14633__$1);
var G__14862 = c__7112__auto__;
var G__14863 = cljs.core.count.call(null,c__7112__auto__);
var G__14864 = 0;
seq__14633 = G__14861;
chunk__14635 = G__14862;
count__14636 = G__14863;
i__14637 = G__14864;
continue;
}
} else
{var obj = cljs.core.first.call(null,seq__14633__$1);if((cljs.core.not.call(null,lt.object.__GT_content.call(null,obj))) || (cljs.core.not.call(null,lt.util.dom.parents.call(null,lt.object.__GT_content.call(null,obj),new cljs.core.Keyword(null,"body","body",1016933652)))))
{lt.object.destroy_BANG_.call(null,obj);
{
var G__14865 = cljs.core.next.call(null,seq__14633__$1);
var G__14866 = null;
var G__14867 = 0;
var G__14868 = 0;
seq__14633 = G__14865;
chunk__14635 = G__14866;
count__14636 = G__14867;
i__14637 = G__14868;
continue;
}
} else
{{
var G__14869 = cljs.core.next.call(null,seq__14633__$1);
var G__14870 = null;
var G__14871 = 0;
var G__14872 = 0;
seq__14633 = G__14869;
chunk__14635 = G__14870;
count__14636 = G__14871;
i__14637 = G__14872;
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
goog.require('lt.objs.sidebar.command');
goog.require('lt.plugins.chromedebugger');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.plugins.chromedebugger');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('clojure.string');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.editor');
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
/**
* Set breakpoint on client for script matching path at position pos
* 
* pos is a map with at least :line, possibly :ch (not used yet)
* 
*/
lt.plugins.chromedebugger.debugger$.set_breakpoint = (function set_breakpoint(client,path,pos,cb){var temp__4090__auto__ = lt.plugins.chromedebugger.find_script.call(null,client,path);if(cljs.core.truth_(temp__4090__auto__))
{var s = temp__4090__auto__;var id = new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.vals.call(null,s)));var location = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lineNumber","lineNumber",684762063),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"scriptId","scriptId",606324408),id], null);return lt.plugins.chromedebugger.script_exists_QMARK_.call(null,client,id,((function (id,location,s,temp__4090__auto__){
return (function (exists_QMARK_){if(cljs.core.not.call(null,exists_QMARK_))
{lt.plugins.chromedebugger.remove_script_BANG_.call(null,client,path,id);
return set_breakpoint.call(null,lt.plugins.chromedebugger.debugger$.this$,path,pos);
} else
{return lt.plugins.chromedebugger.send.call(null,client,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chromedebugger.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.setBreakpoint",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"location","location",2914947879),location], null)], null),((function (id,location,s,temp__4090__auto__){
return (function (r){cljs.core.println.call(null,"done: ",r);
var error = new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(r);var success_QMARK_ = (error == null);return cb.call(null,success_QMARK_,((success_QMARK_)?new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(r):error));
});})(id,location,s,temp__4090__auto__))
);
}
});})(id,location,s,temp__4090__auto__))
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
cljs.core.deref.call(null,lt.plugins.chromedebugger.debugger$.breakpoints);
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
{var cm = lt.objs.editor.__GT_cm_ed.call(null,origin);cm.addLineClass((new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(breakpoint)) - 1),"background","breakpoint-paused");
return lt.object.raise.call(null,origin,new cljs.core.Keyword(null,"focus!","focus!",4039653819));
} else
{return null;
}
});
lt.plugins.chromedebugger.debugger$.__BEH__debugger_paused = (function __BEH__debugger_paused(this$,s){var params = new cljs.core.Keyword(null,"params","params",4313443576).cljs$core$IFn$_invoke$arity$1(s);var reason = new cljs.core.Keyword(null,"reason","reason",4373906870).cljs$core$IFn$_invoke$arity$1(params);var breakpoint = cljs.core.first.call(null,new cljs.core.Keyword(null,"hitBreakpoints","hitBreakpoints",929618049).cljs$core$IFn$_invoke$arity$1(params));var call_frames = new cljs.core.Keyword(null,"callFrames","callFrames",2227904534).cljs$core$IFn$_invoke$arity$1(params);if(cljs.core.truth_(breakpoint))
{lt.plugins.chromedebugger.debugger$.jump_to_bp.call(null,breakpoint);
} else
{}
return s;
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger.debugger","debugger-paused","lt.plugins.chromedebugger.debugger/debugger-paused",3540433732),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.debugger$.__BEH__debugger_paused,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Debugger.paused","Debugger.paused",1114783469),null], null), null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"toggle-breakpoint","toggle-breakpoint",3260664700),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Toggle Breakpoint",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var editor = lt.objs.editor.pool.last_active.call(null);var pos = lt.objs.editor.__GT_cursor.call(null,editor);return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"toggle-breakpoint!","toggle-breakpoint!",1944001737));
})], null));
}

//# sourceMappingURL=chromedebugger_compiled.js.map