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
lt.plugins.chromedebugger.server_input = (function server_input(){var e__7793__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"host:port",new cljs.core.Keyword(null,"value","value",1125876963),"localhost:"], null)], null));var seq__16559_16699 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",1111509066),((function (e__7793__auto__){
return (function (){return lt.objs.context.in_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
});})(e__7793__auto__))
,new cljs.core.Keyword(null,"blur","blur",1016931289),((function (e__7793__auto__){
return (function (){return lt.objs.context.out_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
});})(e__7793__auto__))
], null)));var chunk__16560_16700 = null;var count__16561_16701 = 0;var i__16562_16702 = 0;while(true){
if((i__16562_16702 < count__16561_16701))
{var vec__16563_16703 = cljs.core._nth.call(null,chunk__16560_16700,i__16562_16702);var ev__7794__auto___16704 = cljs.core.nth.call(null,vec__16563_16703,0,null);var func__7795__auto___16705 = cljs.core.nth.call(null,vec__16563_16703,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___16704,func__7795__auto___16705);
{
var G__16706 = seq__16559_16699;
var G__16707 = chunk__16560_16700;
var G__16708 = count__16561_16701;
var G__16709 = (i__16562_16702 + 1);
seq__16559_16699 = G__16706;
chunk__16560_16700 = G__16707;
count__16561_16701 = G__16708;
i__16562_16702 = G__16709;
continue;
}
} else
{var temp__4092__auto___16710 = cljs.core.seq.call(null,seq__16559_16699);if(temp__4092__auto___16710)
{var seq__16559_16711__$1 = temp__4092__auto___16710;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16559_16711__$1))
{var c__7112__auto___16712 = cljs.core.chunk_first.call(null,seq__16559_16711__$1);{
var G__16713 = cljs.core.chunk_rest.call(null,seq__16559_16711__$1);
var G__16714 = c__7112__auto___16712;
var G__16715 = cljs.core.count.call(null,c__7112__auto___16712);
var G__16716 = 0;
seq__16559_16699 = G__16713;
chunk__16560_16700 = G__16714;
count__16561_16701 = G__16715;
i__16562_16702 = G__16716;
continue;
}
} else
{var vec__16564_16717 = cljs.core.first.call(null,seq__16559_16711__$1);var ev__7794__auto___16718 = cljs.core.nth.call(null,vec__16564_16717,0,null);var func__7795__auto___16719 = cljs.core.nth.call(null,vec__16564_16717,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___16718,func__7795__auto___16719);
{
var G__16720 = cljs.core.next.call(null,seq__16559_16711__$1);
var G__16721 = null;
var G__16722 = 0;
var G__16723 = 0;
seq__16559_16699 = G__16720;
chunk__16560_16700 = G__16721;
count__16561_16701 = G__16722;
i__16562_16702 = G__16723;
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
lt.plugins.chromedebugger.connect_to_remote = (function connect_to_remote(server){var vec__16566 = clojure.string.split.call(null,server,":");var host = cljs.core.nth.call(null,vec__16566,0,null);var port = cljs.core.nth.call(null,vec__16566,1,null);if(cljs.core.truth_((function (){var and__6352__auto__ = host;if(cljs.core.truth_(and__6352__auto__))
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
return (function (p1__16567_SHARP_){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"message","message",1968829305),lt.util.cljs.js__GT_clj.call(null,JSON.parse(p1__16567_SHARP_.data),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true));
});})(sock))
;
sock.onerror = ((function (sock){
return (function (p1__16568_SHARP_){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"error","error",1110689146),p1__16568_SHARP_);
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
var send__delegate = function (client,m,p__16569){var vec__16571 = p__16569;var cb = cljs.core.nth.call(null,vec__16571,0,null);if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))))
{return lt.plugins.chromedebugger.send_STAR_.call(null,client,m,cb);
} else
{return lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1121848451)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [client,m,cb], null));
}
};
var send = function (client,m,var_args){
var p__16569 = null;if (arguments.length > 2) {
  p__16569 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return send__delegate.call(this,client,m,p__16569);};
send.cljs$lang$maxFixedArity = 2;
send.cljs$lang$applyTo = (function (arglist__16724){
var client = cljs.core.first(arglist__16724);
arglist__16724 = cljs.core.next(arglist__16724);
var m = cljs.core.first(arglist__16724);
var p__16569 = cljs.core.rest(arglist__16724);
return send__delegate(client,m,p__16569);
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
lt.plugins.chromedebugger.__BEH__close = (function __BEH__close(this$){var temp__4092__auto___16725 = new cljs.core.Keyword(null,"socket","socket",4411822821).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___16725))
{var socket_16726 = temp__4092__auto___16725;socket_16726.close();
} else
{}
cljs.core.swap_BANG_.call(null,lt.plugins.chromedebugger.connected_tabs,cljs.core.dissoc,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));
return lt.objs.clients.rem_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","close","lt.plugins.chromedebugger/close",3740144484),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.__BEH__close,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close!","close!",3951350939),null], null), null));
lt.plugins.chromedebugger.__BEH__clear_queue_on_connect = (function __BEH__clear_queue_on_connect(this$){var seq__16576 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"queue","queue",1121848451).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var chunk__16577 = null;var count__16578 = 0;var i__16579 = 0;while(true){
if((i__16579 < count__16578))
{var msg = cljs.core._nth.call(null,chunk__16577,i__16579);cljs.core.apply.call(null,lt.plugins.chromedebugger.send,msg);
{
var G__16727 = seq__16576;
var G__16728 = chunk__16577;
var G__16729 = count__16578;
var G__16730 = (i__16579 + 1);
seq__16576 = G__16727;
chunk__16577 = G__16728;
count__16578 = G__16729;
i__16579 = G__16730;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16576);if(temp__4092__auto__)
{var seq__16576__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16576__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__16576__$1);{
var G__16731 = cljs.core.chunk_rest.call(null,seq__16576__$1);
var G__16732 = c__7112__auto__;
var G__16733 = cljs.core.count.call(null,c__7112__auto__);
var G__16734 = 0;
seq__16576 = G__16731;
chunk__16577 = G__16732;
count__16578 = G__16733;
i__16579 = G__16734;
continue;
}
} else
{var msg = cljs.core.first.call(null,seq__16576__$1);cljs.core.apply.call(null,lt.plugins.chromedebugger.send,msg);
{
var G__16735 = cljs.core.next.call(null,seq__16576__$1);
var G__16736 = null;
var G__16737 = 0;
var G__16738 = 0;
seq__16576 = G__16735;
chunk__16577 = G__16736;
count__16578 = G__16737;
i__16579 = G__16738;
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
lt.plugins.chromedebugger.store_source_map = (function store_source_map(client,url,params,sm){var params__$1 = cljs.core.assoc.call(null,params,new cljs.core.Keyword(null,"sourceMap","sourceMap",3610443443),sm);var seq__16584 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"sources","sources",3286994730).cljs$core$IFn$_invoke$arity$1(sm));var chunk__16585 = null;var count__16586 = 0;var i__16587 = 0;while(true){
if((i__16587 < count__16586))
{var source = cljs.core._nth.call(null,chunk__16585,i__16587);lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scripts","scripts",2940419194)], null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.files.basename.call(null,source),url], null),params__$1);
{
var G__16739 = seq__16584;
var G__16740 = chunk__16585;
var G__16741 = count__16586;
var G__16742 = (i__16587 + 1);
seq__16584 = G__16739;
chunk__16585 = G__16740;
count__16586 = G__16741;
i__16587 = G__16742;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16584);if(temp__4092__auto__)
{var seq__16584__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16584__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__16584__$1);{
var G__16743 = cljs.core.chunk_rest.call(null,seq__16584__$1);
var G__16744 = c__7112__auto__;
var G__16745 = cljs.core.count.call(null,c__7112__auto__);
var G__16746 = 0;
seq__16584 = G__16743;
chunk__16585 = G__16744;
count__16586 = G__16745;
i__16587 = G__16746;
continue;
}
} else
{var source = cljs.core.first.call(null,seq__16584__$1);lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scripts","scripts",2940419194)], null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.files.basename.call(null,source),url], null),params__$1);
{
var G__16747 = cljs.core.next.call(null,seq__16584__$1);
var G__16748 = null;
var G__16749 = 0;
var G__16750 = 0;
seq__16584 = G__16747;
chunk__16585 = G__16748;
count__16586 = G__16749;
i__16587 = G__16750;
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
{var ed = temp__4092__auto__;var info = new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg);var seq__16592 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(info));var chunk__16593 = null;var count__16594 = 0;var i__16595 = 0;while(true){
if((i__16595 < count__16594))
{var form__$1 = cljs.core._nth.call(null,chunk__16593,i__16595);var cb_16751 = cljs.core.partial.call(null,lt.plugins.chromedebugger.cljs_eval_cb,this$,msg,form__$1);lt.plugins.chromedebugger.eval_cljs.call(null,this$,form__$1,cb_16751);
{
var G__16752 = seq__16592;
var G__16753 = chunk__16593;
var G__16754 = count__16594;
var G__16755 = (i__16595 + 1);
seq__16592 = G__16752;
chunk__16593 = G__16753;
count__16594 = G__16754;
i__16595 = G__16755;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__16592);if(temp__4092__auto____$1)
{var seq__16592__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16592__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__16592__$1);{
var G__16756 = cljs.core.chunk_rest.call(null,seq__16592__$1);
var G__16757 = c__7112__auto__;
var G__16758 = cljs.core.count.call(null,c__7112__auto__);
var G__16759 = 0;
seq__16592 = G__16756;
chunk__16593 = G__16757;
count__16594 = G__16758;
i__16595 = G__16759;
continue;
}
} else
{var form__$1 = cljs.core.first.call(null,seq__16592__$1);var cb_16760 = cljs.core.partial.call(null,lt.plugins.chromedebugger.cljs_eval_cb,this$,msg,form__$1);lt.plugins.chromedebugger.eval_cljs.call(null,this$,form__$1,cb_16760);
{
var G__16761 = cljs.core.next.call(null,seq__16592__$1);
var G__16762 = null;
var G__16763 = 0;
var G__16764 = 0;
seq__16592 = G__16761;
chunk__16593 = G__16762;
count__16594 = G__16763;
i__16595 = G__16764;
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
lt.plugins.chromedebugger.dismiss_button = (function dismiss_button(obj){var e__7793__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tab-close","span.tab-close",4094760846),"x"], null));var seq__16602_16765 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7793__auto__){
return (function (){return lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"remove-label","remove-label",3359640541));
});})(e__7793__auto__))
], null)));var chunk__16603_16766 = null;var count__16604_16767 = 0;var i__16605_16768 = 0;while(true){
if((i__16605_16768 < count__16604_16767))
{var vec__16606_16769 = cljs.core._nth.call(null,chunk__16603_16766,i__16605_16768);var ev__7794__auto___16770 = cljs.core.nth.call(null,vec__16606_16769,0,null);var func__7795__auto___16771 = cljs.core.nth.call(null,vec__16606_16769,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___16770,func__7795__auto___16771);
{
var G__16772 = seq__16602_16765;
var G__16773 = chunk__16603_16766;
var G__16774 = count__16604_16767;
var G__16775 = (i__16605_16768 + 1);
seq__16602_16765 = G__16772;
chunk__16603_16766 = G__16773;
count__16604_16767 = G__16774;
i__16605_16768 = G__16775;
continue;
}
} else
{var temp__4092__auto___16776 = cljs.core.seq.call(null,seq__16602_16765);if(temp__4092__auto___16776)
{var seq__16602_16777__$1 = temp__4092__auto___16776;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16602_16777__$1))
{var c__7112__auto___16778 = cljs.core.chunk_first.call(null,seq__16602_16777__$1);{
var G__16779 = cljs.core.chunk_rest.call(null,seq__16602_16777__$1);
var G__16780 = c__7112__auto___16778;
var G__16781 = cljs.core.count.call(null,c__7112__auto___16778);
var G__16782 = 0;
seq__16602_16765 = G__16779;
chunk__16603_16766 = G__16780;
count__16604_16767 = G__16781;
i__16605_16768 = G__16782;
continue;
}
} else
{var vec__16607_16783 = cljs.core.first.call(null,seq__16602_16777__$1);var ev__7794__auto___16784 = cljs.core.nth.call(null,vec__16607_16783,0,null);var func__7795__auto___16785 = cljs.core.nth.call(null,vec__16607_16783,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___16784,func__7795__auto___16785);
{
var G__16786 = cljs.core.next.call(null,seq__16602_16777__$1);
var G__16787 = null;
var G__16788 = 0;
var G__16789 = 0;
seq__16602_16765 = G__16786;
chunk__16603_16766 = G__16787;
count__16604_16767 = G__16788;
i__16605_16768 = G__16789;
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
lt.plugins.chromedebugger.reconnect_button = (function reconnect_button(label,tab){var e__7793__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"reconnect-chrome button"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),[cljs.core.str("Reconnect: "),cljs.core.str(new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(tab))].join('')], null),lt.plugins.chromedebugger.dismiss_button.call(null,label)], null));var seq__16614_16790 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7793__auto__){
return (function (e){var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"chrome.client.remote","chrome.client.remote",4091478727));return lt.plugins.chromedebugger.connect_tab.call(null,client,tab);
});})(e__7793__auto__))
], null)));var chunk__16615_16791 = null;var count__16616_16792 = 0;var i__16617_16793 = 0;while(true){
if((i__16617_16793 < count__16616_16792))
{var vec__16618_16794 = cljs.core._nth.call(null,chunk__16615_16791,i__16617_16793);var ev__7794__auto___16795 = cljs.core.nth.call(null,vec__16618_16794,0,null);var func__7795__auto___16796 = cljs.core.nth.call(null,vec__16618_16794,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___16795,func__7795__auto___16796);
{
var G__16797 = seq__16614_16790;
var G__16798 = chunk__16615_16791;
var G__16799 = count__16616_16792;
var G__16800 = (i__16617_16793 + 1);
seq__16614_16790 = G__16797;
chunk__16615_16791 = G__16798;
count__16616_16792 = G__16799;
i__16617_16793 = G__16800;
continue;
}
} else
{var temp__4092__auto___16801 = cljs.core.seq.call(null,seq__16614_16790);if(temp__4092__auto___16801)
{var seq__16614_16802__$1 = temp__4092__auto___16801;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16614_16802__$1))
{var c__7112__auto___16803 = cljs.core.chunk_first.call(null,seq__16614_16802__$1);{
var G__16804 = cljs.core.chunk_rest.call(null,seq__16614_16802__$1);
var G__16805 = c__7112__auto___16803;
var G__16806 = cljs.core.count.call(null,c__7112__auto___16803);
var G__16807 = 0;
seq__16614_16790 = G__16804;
chunk__16615_16791 = G__16805;
count__16616_16792 = G__16806;
i__16617_16793 = G__16807;
continue;
}
} else
{var vec__16619_16808 = cljs.core.first.call(null,seq__16614_16802__$1);var ev__7794__auto___16809 = cljs.core.nth.call(null,vec__16619_16808,0,null);var func__7795__auto___16810 = cljs.core.nth.call(null,vec__16619_16808,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___16809,func__7795__auto___16810);
{
var G__16811 = cljs.core.next.call(null,seq__16614_16802__$1);
var G__16812 = null;
var G__16813 = 0;
var G__16814 = 0;
seq__16614_16790 = G__16811;
chunk__16615_16791 = G__16812;
count__16616_16792 = G__16813;
i__16617_16793 = G__16814;
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
lt.plugins.chromedebugger.__BEH__remove_label = (function __BEH__remove_label(this$,that){var id = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var labels = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"reconnect-label","reconnect-label",3615163504));var seq__16626 = cljs.core.seq.call(null,labels);var chunk__16628 = null;var count__16629 = 0;var i__16630 = 0;while(true){
if((i__16630 < count__16629))
{var label = cljs.core._nth.call(null,chunk__16628,i__16630);if(cljs.core.truth_((function (){var and__6352__auto__ = label;if(cljs.core.truth_(and__6352__auto__))
{return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,label))),id);
} else
{return and__6352__auto__;
}
})()))
{lt.object.raise.call(null,label,new cljs.core.Keyword(null,"remove-label","remove-label",3359640541));
{
var G__16815 = seq__16626;
var G__16816 = chunk__16628;
var G__16817 = count__16629;
var G__16818 = (i__16630 + 1);
seq__16626 = G__16815;
chunk__16628 = G__16816;
count__16629 = G__16817;
i__16630 = G__16818;
continue;
}
} else
{{
var G__16819 = seq__16626;
var G__16820 = chunk__16628;
var G__16821 = count__16629;
var G__16822 = (i__16630 + 1);
seq__16626 = G__16819;
chunk__16628 = G__16820;
count__16629 = G__16821;
i__16630 = G__16822;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16626);if(temp__4092__auto__)
{var seq__16626__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16626__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__16626__$1);{
var G__16823 = cljs.core.chunk_rest.call(null,seq__16626__$1);
var G__16824 = c__7112__auto__;
var G__16825 = cljs.core.count.call(null,c__7112__auto__);
var G__16826 = 0;
seq__16626 = G__16823;
chunk__16628 = G__16824;
count__16629 = G__16825;
i__16630 = G__16826;
continue;
}
} else
{var label = cljs.core.first.call(null,seq__16626__$1);if(cljs.core.truth_((function (){var and__6352__auto__ = label;if(cljs.core.truth_(and__6352__auto__))
{return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,label))),id);
} else
{return and__6352__auto__;
}
})()))
{lt.object.raise.call(null,label,new cljs.core.Keyword(null,"remove-label","remove-label",3359640541));
{
var G__16827 = cljs.core.next.call(null,seq__16626__$1);
var G__16828 = null;
var G__16829 = 0;
var G__16830 = 0;
seq__16626 = G__16827;
chunk__16628 = G__16828;
count__16629 = G__16829;
i__16630 = G__16830;
continue;
}
} else
{{
var G__16831 = cljs.core.next.call(null,seq__16626__$1);
var G__16832 = null;
var G__16833 = 0;
var G__16834 = 0;
seq__16626 = G__16831;
chunk__16628 = G__16832;
count__16629 = G__16833;
i__16630 = G__16834;
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
lt.plugins.chromedebugger.tab_preview = (function tab_preview(action,tab){var e__7793__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),new cljs.core.Keyword(null,"faviconUrl","faviconUrl",4346893869).cljs$core$IFn$_invoke$arity$1(tab)], null)], null),new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(tab)], null));var seq__16638_16835 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7793__auto__){
return (function (e){var temp__4092__auto___16839 = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"popup","popup",1120756766));if(cljs.core.truth_(temp__4092__auto___16839))
{var p_16840 = temp__4092__auto___16839;lt.object.raise.call(null,p_16840,new cljs.core.Keyword(null,"close!","close!",3951350939));
} else
{}
return action.call(null,tab);
});})(e__7793__auto__))
], null)));var chunk__16639_16836 = null;var count__16640_16837 = 0;var i__16641_16838 = 0;while(true){
if((i__16641_16838 < count__16640_16837))
{var vec__16642_16841 = cljs.core._nth.call(null,chunk__16639_16836,i__16641_16838);var ev__7794__auto___16842 = cljs.core.nth.call(null,vec__16642_16841,0,null);var func__7795__auto___16843 = cljs.core.nth.call(null,vec__16642_16841,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___16842,func__7795__auto___16843);
{
var G__16844 = seq__16638_16835;
var G__16845 = chunk__16639_16836;
var G__16846 = count__16640_16837;
var G__16847 = (i__16641_16838 + 1);
seq__16638_16835 = G__16844;
chunk__16639_16836 = G__16845;
count__16640_16837 = G__16846;
i__16641_16838 = G__16847;
continue;
}
} else
{var temp__4092__auto___16848 = cljs.core.seq.call(null,seq__16638_16835);if(temp__4092__auto___16848)
{var seq__16638_16849__$1 = temp__4092__auto___16848;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16638_16849__$1))
{var c__7112__auto___16850 = cljs.core.chunk_first.call(null,seq__16638_16849__$1);{
var G__16851 = cljs.core.chunk_rest.call(null,seq__16638_16849__$1);
var G__16852 = c__7112__auto___16850;
var G__16853 = cljs.core.count.call(null,c__7112__auto___16850);
var G__16854 = 0;
seq__16638_16835 = G__16851;
chunk__16639_16836 = G__16852;
count__16640_16837 = G__16853;
i__16641_16838 = G__16854;
continue;
}
} else
{var vec__16643_16855 = cljs.core.first.call(null,seq__16638_16849__$1);var ev__7794__auto___16856 = cljs.core.nth.call(null,vec__16643_16855,0,null);var func__7795__auto___16857 = cljs.core.nth.call(null,vec__16643_16855,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___16856,func__7795__auto___16857);
{
var G__16858 = cljs.core.next.call(null,seq__16638_16849__$1);
var G__16859 = null;
var G__16860 = 0;
var G__16861 = 0;
seq__16638_16835 = G__16858;
chunk__16639_16836 = G__16859;
count__16640_16837 = G__16860;
i__16641_16838 = G__16861;
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
return (function (p1__16644_SHARP_){return lt.plugins.chromedebugger.tab_preview.call(null,action,p1__16644_SHARP_);
});})(action))
,cljs.core.filter.call(null,((function (action){
return (function (p1__16645_SHARP_){return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p1__16645_SHARP_),"page")) && ((cljs.core.deref.call(null,lt.plugins.chromedebugger.connected_tabs).call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__16645_SHARP_)) == null));
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
lt.plugins.chromedebugger.remove_script_BANG_ = (function remove_script_BANG_(client,path,id){var vec__16648 = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__16646_SHARP_){return cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__16646_SHARP_)));
}),lt.plugins.chromedebugger.find_script.call(null,client,path)));var k = cljs.core.nth.call(null,vec__16648,0,null);var v = cljs.core.nth.call(null,vec__16648,1,null);return lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scripts","scripts",2940419194),lt.objs.files.basename.call(null,path)], null),cljs.core.dissoc,k);
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
lt.plugins.chromedebugger.desc = (function desc(this$,obj){var e__7793__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",1013907482),lt.plugins.chromedebugger.__GT_name.call(null,obj)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(obj))?[cljs.core.str(": "),cljs.core.str(new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(obj)))].join(''):null)], null));var seq__16655_16862 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7793__auto__){
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
], null)));var chunk__16656_16863 = null;var count__16657_16864 = 0;var i__16658_16865 = 0;while(true){
if((i__16658_16865 < count__16657_16864))
{var vec__16659_16866 = cljs.core._nth.call(null,chunk__16656_16863,i__16658_16865);var ev__7794__auto___16867 = cljs.core.nth.call(null,vec__16659_16866,0,null);var func__7795__auto___16868 = cljs.core.nth.call(null,vec__16659_16866,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___16867,func__7795__auto___16868);
{
var G__16869 = seq__16655_16862;
var G__16870 = chunk__16656_16863;
var G__16871 = count__16657_16864;
var G__16872 = (i__16658_16865 + 1);
seq__16655_16862 = G__16869;
chunk__16656_16863 = G__16870;
count__16657_16864 = G__16871;
i__16658_16865 = G__16872;
continue;
}
} else
{var temp__4092__auto___16873 = cljs.core.seq.call(null,seq__16655_16862);if(temp__4092__auto___16873)
{var seq__16655_16874__$1 = temp__4092__auto___16873;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16655_16874__$1))
{var c__7112__auto___16875 = cljs.core.chunk_first.call(null,seq__16655_16874__$1);{
var G__16876 = cljs.core.chunk_rest.call(null,seq__16655_16874__$1);
var G__16877 = c__7112__auto___16875;
var G__16878 = cljs.core.count.call(null,c__7112__auto___16875);
var G__16879 = 0;
seq__16655_16862 = G__16876;
chunk__16656_16863 = G__16877;
count__16657_16864 = G__16878;
i__16658_16865 = G__16879;
continue;
}
} else
{var vec__16660_16880 = cljs.core.first.call(null,seq__16655_16874__$1);var ev__7794__auto___16881 = cljs.core.nth.call(null,vec__16660_16880,0,null);var func__7795__auto___16882 = cljs.core.nth.call(null,vec__16660_16880,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___16881,func__7795__auto___16882);
{
var G__16883 = cljs.core.next.call(null,seq__16655_16874__$1);
var G__16884 = null;
var G__16885 = 0;
var G__16886 = 0;
seq__16655_16862 = G__16883;
chunk__16656_16863 = G__16884;
count__16657_16864 = G__16885;
i__16658_16865 = G__16886;
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
lt.plugins.chromedebugger.props = (function props(this$,children){var e__7793__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7081__auto__ = (function iter__16671(s__16672){return (new cljs.core.LazySeq(null,(function (){var s__16672__$1 = s__16672;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16672__$1);if(temp__4092__auto__)
{var s__16672__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16672__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__16672__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__16674 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__16673 = 0;while(true){
if((i__16673 < size__7080__auto__))
{var c = cljs.core._nth.call(null,c__7079__auto__,i__16673);cljs.core.chunk_append.call(null,b__16674,(cljs.core.truth_((function (){var and__6352__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c)),"object");if(and__6352__auto__)
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
var G__16887 = (i__16673 + 1);
i__16673 = G__16887;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16674),iter__16671.call(null,cljs.core.chunk_rest.call(null,s__16672__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16674),null);
}
} else
{var c = cljs.core.first.call(null,s__16672__$2);return cljs.core.cons.call(null,(cljs.core.truth_((function (){var and__6352__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c)),"object");if(and__6352__auto__)
{return new cljs.core.Keyword(null,"objectId","objectId",1104399404).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c));
} else
{return and__6352__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),lt.object.__GT_content.call(null,lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","inspector-object","lt.plugins.chromedebugger/inspector-object",4656861767),new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),c))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",1013907482),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(c)], null),": ",(function (){var or__6364__auto__ = new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c));if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return [cljs.core.str(lt.plugins.chromedebugger.format_value.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c)))].join('');
}
})()], null)),iter__16671.call(null,cljs.core.rest.call(null,s__16672__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7081__auto__.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1017277949),lt.plugins.chromedebugger.i_compare,children));
})()], null));var seq__16675_16888 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__16676_16889 = null;var count__16677_16890 = 0;var i__16678_16891 = 0;while(true){
if((i__16678_16891 < count__16677_16890))
{var vec__16679_16892 = cljs.core._nth.call(null,chunk__16676_16889,i__16678_16891);var ev__7794__auto___16893 = cljs.core.nth.call(null,vec__16679_16892,0,null);var func__7795__auto___16894 = cljs.core.nth.call(null,vec__16679_16892,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___16893,func__7795__auto___16894);
{
var G__16895 = seq__16675_16888;
var G__16896 = chunk__16676_16889;
var G__16897 = count__16677_16890;
var G__16898 = (i__16678_16891 + 1);
seq__16675_16888 = G__16895;
chunk__16676_16889 = G__16896;
count__16677_16890 = G__16897;
i__16678_16891 = G__16898;
continue;
}
} else
{var temp__4092__auto___16899 = cljs.core.seq.call(null,seq__16675_16888);if(temp__4092__auto___16899)
{var seq__16675_16900__$1 = temp__4092__auto___16899;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16675_16900__$1))
{var c__7112__auto___16901 = cljs.core.chunk_first.call(null,seq__16675_16900__$1);{
var G__16902 = cljs.core.chunk_rest.call(null,seq__16675_16900__$1);
var G__16903 = c__7112__auto___16901;
var G__16904 = cljs.core.count.call(null,c__7112__auto___16901);
var G__16905 = 0;
seq__16675_16888 = G__16902;
chunk__16676_16889 = G__16903;
count__16677_16890 = G__16904;
i__16678_16891 = G__16905;
continue;
}
} else
{var vec__16680_16906 = cljs.core.first.call(null,seq__16675_16900__$1);var ev__7794__auto___16907 = cljs.core.nth.call(null,vec__16680_16906,0,null);var func__7795__auto___16908 = cljs.core.nth.call(null,vec__16680_16906,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___16907,func__7795__auto___16908);
{
var G__16909 = cljs.core.next.call(null,seq__16675_16900__$1);
var G__16910 = null;
var G__16911 = 0;
var G__16912 = 0;
seq__16675_16888 = G__16909;
chunk__16676_16889 = G__16910;
count__16677_16890 = G__16911;
i__16678_16891 = G__16912;
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
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),(function (){var pred__16684 = cljs.core._EQ_;var expr__16685 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(pred__16684.call(null,"object",expr__16685)))
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
lt.plugins.chromedebugger.clear_unused_inspectors = (function clear_unused_inspectors(){var seq__16693 = cljs.core.seq.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"inspector.object","inspector.object",1285492104)));var chunk__16695 = null;var count__16696 = 0;var i__16697 = 0;while(true){
if((i__16697 < count__16696))
{var obj = cljs.core._nth.call(null,chunk__16695,i__16697);if((cljs.core.not.call(null,lt.object.__GT_content.call(null,obj))) || (cljs.core.not.call(null,lt.util.dom.parents.call(null,lt.object.__GT_content.call(null,obj),new cljs.core.Keyword(null,"body","body",1016933652)))))
{lt.object.destroy_BANG_.call(null,obj);
{
var G__16913 = seq__16693;
var G__16914 = chunk__16695;
var G__16915 = count__16696;
var G__16916 = (i__16697 + 1);
seq__16693 = G__16913;
chunk__16695 = G__16914;
count__16696 = G__16915;
i__16697 = G__16916;
continue;
}
} else
{{
var G__16917 = seq__16693;
var G__16918 = chunk__16695;
var G__16919 = count__16696;
var G__16920 = (i__16697 + 1);
seq__16693 = G__16917;
chunk__16695 = G__16918;
count__16696 = G__16919;
i__16697 = G__16920;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16693);if(temp__4092__auto__)
{var seq__16693__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16693__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__16693__$1);{
var G__16921 = cljs.core.chunk_rest.call(null,seq__16693__$1);
var G__16922 = c__7112__auto__;
var G__16923 = cljs.core.count.call(null,c__7112__auto__);
var G__16924 = 0;
seq__16693 = G__16921;
chunk__16695 = G__16922;
count__16696 = G__16923;
i__16697 = G__16924;
continue;
}
} else
{var obj = cljs.core.first.call(null,seq__16693__$1);if((cljs.core.not.call(null,lt.object.__GT_content.call(null,obj))) || (cljs.core.not.call(null,lt.util.dom.parents.call(null,lt.object.__GT_content.call(null,obj),new cljs.core.Keyword(null,"body","body",1016933652)))))
{lt.object.destroy_BANG_.call(null,obj);
{
var G__16925 = cljs.core.next.call(null,seq__16693__$1);
var G__16926 = null;
var G__16927 = 0;
var G__16928 = 0;
seq__16693 = G__16925;
chunk__16695 = G__16926;
count__16696 = G__16927;
i__16697 = G__16928;
continue;
}
} else
{{
var G__16929 = cljs.core.next.call(null,seq__16693__$1);
var G__16930 = null;
var G__16931 = 0;
var G__16932 = 0;
seq__16693 = G__16929;
chunk__16695 = G__16930;
count__16696 = G__16931;
i__16697 = G__16932;
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
lt.plugins.chromedebugger.debugger$.get_scripts = (function get_scripts(client,id){var iter__7081__auto__ = (function iter__17534(s__17535){return (new cljs.core.LazySeq(null,(function (){var s__17535__$1 = s__17535;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17535__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__17545 = cljs.core.first.call(null,xs__4579__auto__);var _ = cljs.core.nth.call(null,vec__17545,0,null);var vs = cljs.core.nth.call(null,vec__17545,1,null);var iterys__7077__auto__ = ((function (s__17535__$1,vec__17545,_,vs,xs__4579__auto__,temp__4092__auto__){
return (function iter__17536(s__17537){return (new cljs.core.LazySeq(null,((function (s__17535__$1,vec__17545,_,vs,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__17537__$1 = s__17537;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__17537__$1);if(temp__4092__auto____$1)
{var s__17537__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__17537__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__17537__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__17539 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__17538 = 0;while(true){
if((i__17538 < size__7080__auto__))
{var vec__17548 = cljs.core._nth.call(null,c__7079__auto__,i__17538);var ___$1 = cljs.core.nth.call(null,vec__17548,0,null);var vvs = cljs.core.nth.call(null,vec__17548,1,null);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(vvs),id))
{cljs.core.chunk_append.call(null,b__17539,vvs);
{
var G__17605 = (i__17538 + 1);
i__17538 = G__17605;
continue;
}
} else
{{
var G__17606 = (i__17538 + 1);
i__17538 = G__17606;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17539),iter__17536.call(null,cljs.core.chunk_rest.call(null,s__17537__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17539),null);
}
} else
{var vec__17549 = cljs.core.first.call(null,s__17537__$2);var ___$1 = cljs.core.nth.call(null,vec__17549,0,null);var vvs = cljs.core.nth.call(null,vec__17549,1,null);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(vvs),id))
{return cljs.core.cons.call(null,vvs,iter__17536.call(null,cljs.core.rest.call(null,s__17537__$2)));
} else
{{
var G__17607 = cljs.core.rest.call(null,s__17537__$2);
s__17537__$1 = G__17607;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__17535__$1,vec__17545,_,vs,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__17535__$1,vec__17545,_,vs,xs__4579__auto__,temp__4092__auto__))
;var fs__7078__auto__ = cljs.core.seq.call(null,iterys__7077__auto__.call(null,vs));if(fs__7078__auto__)
{return cljs.core.concat.call(null,fs__7078__auto__,iter__17534.call(null,cljs.core.rest.call(null,s__17535__$1)));
} else
{{
var G__17608 = cljs.core.rest.call(null,s__17535__$1);
s__17535__$1 = G__17608;
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
lt.plugins.chromedebugger.debugger$.debug_panel_resume = (function debug_panel_resume(this$){var e__7793__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"resume"], null),crate.binding.bound.call(null,this$,(function (p1__17550_SHARP_){if(cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",4518674499).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"debugger","debugger",1561716627).cljs$core$IFn$_invoke$arity$1(p1__17550_SHARP_))))
{return "\u25B6";
} else
{return "=";
}
}))], null));var seq__17557_17609 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7793__auto__){
return (function (){var c = (cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",4518674499).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"debugger","debugger",1561716627).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))?new cljs.core.Keyword(null,"resume-debugger","resume-debugger",4240016691):new cljs.core.Keyword(null,"pause-debugger","pause-debugger",1706137994));var editor = lt.objs.editor.pool.last_active.call(null);var client = new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return lt.objs.sidebar.command.exec_BANG_.call(null,c,editor,client);
});})(e__7793__auto__))
], null)));var chunk__17558_17610 = null;var count__17559_17611 = 0;var i__17560_17612 = 0;while(true){
if((i__17560_17612 < count__17559_17611))
{var vec__17561_17613 = cljs.core._nth.call(null,chunk__17558_17610,i__17560_17612);var ev__7794__auto___17614 = cljs.core.nth.call(null,vec__17561_17613,0,null);var func__7795__auto___17615 = cljs.core.nth.call(null,vec__17561_17613,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___17614,func__7795__auto___17615);
{
var G__17616 = seq__17557_17609;
var G__17617 = chunk__17558_17610;
var G__17618 = count__17559_17611;
var G__17619 = (i__17560_17612 + 1);
seq__17557_17609 = G__17616;
chunk__17558_17610 = G__17617;
count__17559_17611 = G__17618;
i__17560_17612 = G__17619;
continue;
}
} else
{var temp__4092__auto___17620 = cljs.core.seq.call(null,seq__17557_17609);if(temp__4092__auto___17620)
{var seq__17557_17621__$1 = temp__4092__auto___17620;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17557_17621__$1))
{var c__7112__auto___17622 = cljs.core.chunk_first.call(null,seq__17557_17621__$1);{
var G__17623 = cljs.core.chunk_rest.call(null,seq__17557_17621__$1);
var G__17624 = c__7112__auto___17622;
var G__17625 = cljs.core.count.call(null,c__7112__auto___17622);
var G__17626 = 0;
seq__17557_17609 = G__17623;
chunk__17558_17610 = G__17624;
count__17559_17611 = G__17625;
i__17560_17612 = G__17626;
continue;
}
} else
{var vec__17562_17627 = cljs.core.first.call(null,seq__17557_17621__$1);var ev__7794__auto___17628 = cljs.core.nth.call(null,vec__17562_17627,0,null);var func__7795__auto___17629 = cljs.core.nth.call(null,vec__17562_17627,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___17628,func__7795__auto___17629);
{
var G__17630 = cljs.core.next.call(null,seq__17557_17621__$1);
var G__17631 = null;
var G__17632 = 0;
var G__17633 = 0;
seq__17557_17609 = G__17630;
chunk__17558_17610 = G__17631;
count__17559_17611 = G__17632;
i__17560_17612 = G__17633;
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
{var iter__7081__auto__ = (function iter__17567(s__17568){return (new cljs.core.LazySeq(null,(function (){var s__17568__$1 = s__17568;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17568__$1);if(temp__4092__auto__)
{var s__17568__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17568__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__17568__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__17570 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__17569 = 0;while(true){
if((i__17569 < size__7080__auto__))
{var var$ = cljs.core._nth.call(null,c__7079__auto__,i__17569);cljs.core.chunk_append.call(null,b__17570,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(lt.plugins.chromedebugger.inspector__GT_result.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,panel)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),new cljs.core.Keyword(null,"object","object",4285503153).cljs$core$IFn$_invoke$arity$1(var$)], null)], null))));
{
var G__17634 = (i__17569 + 1);
i__17569 = G__17634;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17570),iter__17567.call(null,cljs.core.chunk_rest.call(null,s__17568__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17570),null);
}
} else
{var var$ = cljs.core.first.call(null,s__17568__$2);return cljs.core.cons.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(lt.plugins.chromedebugger.inspector__GT_result.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,panel)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),new cljs.core.Keyword(null,"object","object",4285503153).cljs$core$IFn$_invoke$arity$1(var$)], null)], null))),iter__17567.call(null,cljs.core.rest.call(null,s__17568__$2)));
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
lt.plugins.chromedebugger.debugger$.call_frame = (function call_frame(panel,frame){var e__7793__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),cljs.core.PersistentArrayMap.EMPTY,lt.plugins.chromedebugger.debugger$.__GT_call_frame_name.call(null,frame)], null));var seq__17577_17635 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7793__auto__){
return (function (){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"debugger","debugger",1561716627).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,panel))));
lt.object.update_BANG_.call(null,panel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debugger","debugger",1561716627)], null),cljs.core.assoc,new cljs.core.Keyword(null,"scope-variables","scope-variables",1703262384),new cljs.core.Keyword(null,"scopeChain","scopeChain",796553279).cljs$core$IFn$_invoke$arity$1(frame),new cljs.core.Keyword(null,"selected-frame","selected-frame",1773798189),frame);
return console.log("??",cljs.core.clj__GT_js.call(null,frame));
});})(e__7793__auto__))
], null)));var chunk__17578_17636 = null;var count__17579_17637 = 0;var i__17580_17638 = 0;while(true){
if((i__17580_17638 < count__17579_17637))
{var vec__17581_17639 = cljs.core._nth.call(null,chunk__17578_17636,i__17580_17638);var ev__7794__auto___17640 = cljs.core.nth.call(null,vec__17581_17639,0,null);var func__7795__auto___17641 = cljs.core.nth.call(null,vec__17581_17639,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___17640,func__7795__auto___17641);
{
var G__17642 = seq__17577_17635;
var G__17643 = chunk__17578_17636;
var G__17644 = count__17579_17637;
var G__17645 = (i__17580_17638 + 1);
seq__17577_17635 = G__17642;
chunk__17578_17636 = G__17643;
count__17579_17637 = G__17644;
i__17580_17638 = G__17645;
continue;
}
} else
{var temp__4092__auto___17646 = cljs.core.seq.call(null,seq__17577_17635);if(temp__4092__auto___17646)
{var seq__17577_17647__$1 = temp__4092__auto___17646;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17577_17647__$1))
{var c__7112__auto___17648 = cljs.core.chunk_first.call(null,seq__17577_17647__$1);{
var G__17649 = cljs.core.chunk_rest.call(null,seq__17577_17647__$1);
var G__17650 = c__7112__auto___17648;
var G__17651 = cljs.core.count.call(null,c__7112__auto___17648);
var G__17652 = 0;
seq__17577_17635 = G__17649;
chunk__17578_17636 = G__17650;
count__17579_17637 = G__17651;
i__17580_17638 = G__17652;
continue;
}
} else
{var vec__17582_17653 = cljs.core.first.call(null,seq__17577_17647__$1);var ev__7794__auto___17654 = cljs.core.nth.call(null,vec__17582_17653,0,null);var func__7795__auto___17655 = cljs.core.nth.call(null,vec__17582_17653,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___17654,func__7795__auto___17655);
{
var G__17656 = cljs.core.next.call(null,seq__17577_17647__$1);
var G__17657 = null;
var G__17658 = 0;
var G__17659 = 0;
seq__17577_17635 = G__17656;
chunk__17578_17636 = G__17657;
count__17579_17637 = G__17658;
i__17580_17638 = G__17659;
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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger.debugger","editor","lt.plugins.chromedebugger.debugger/editor",965018199),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"editor.inline-result","editor.inline-result",1965420162),null,new cljs.core.Keyword(null,"editor","editor",4001043679),null,new cljs.core.Keyword(null,"editor.keys.normal","editor.keys.normal",2927389330),null], null), null),new cljs.core.Keyword(null,"init","init",1017141378),(function (obj,info){var edi = lt.objs.editor.make.call(null,info);lt.object.merge_BANG_.call(null,obj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ed","ed",1013907473),edi,new cljs.core.Keyword(null,"doc","doc",1014003882),new cljs.core.Keyword(null,"doc","doc",1014003882).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.dissoc.call(null,info,new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"doc","doc",1014003882))], null));
lt.objs.editor.wrap_object_events.call(null,edi,obj);
return lt.objs.editor.__GT_elem.call(null,edi);
}));
lt.plugins.chromedebugger.debugger$.__GT_call_frames = (function __GT_call_frames(panel,frames){if(cljs.core.truth_(frames))
{var iter__7081__auto__ = (function iter__17587(s__17588){return (new cljs.core.LazySeq(null,(function (){var s__17588__$1 = s__17588;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17588__$1);if(temp__4092__auto__)
{var s__17588__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17588__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__17588__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__17590 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__17589 = 0;while(true){
if((i__17589 < size__7080__auto__))
{var frame = cljs.core._nth.call(null,c__7079__auto__,i__17589);cljs.core.chunk_append.call(null,b__17590,lt.plugins.chromedebugger.debugger$.call_frame.call(null,panel,frame));
{
var G__17660 = (i__17589 + 1);
i__17589 = G__17660;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17590),iter__17587.call(null,cljs.core.chunk_rest.call(null,s__17588__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17590),null);
}
} else
{var frame = cljs.core.first.call(null,s__17588__$2);return cljs.core.cons.call(null,lt.plugins.chromedebugger.debugger$.call_frame.call(null,panel,frame),iter__17587.call(null,cljs.core.rest.call(null,s__17588__$2)));
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
lt.plugins.chromedebugger.debugger$.debug_panel = (function debug_panel(this$){var e__7793__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"debug-panel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),cljs.core.PersistentArrayMap.EMPTY,"Debugger"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"controls"], null),lt.plugins.chromedebugger.debugger$.debug_panel_resume.call(null,this$)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Call Stack"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),crate.binding.bound.call(null,crate.binding.subatom.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debugger","debugger",1561716627),new cljs.core.Keyword(null,"call-frames","call-frames",3247219303)], null)),lt.plugins.chromedebugger.debugger$.__GT_call_frames_class)], null),crate.binding.bound.call(null,crate.binding.subatom.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debugger","debugger",1561716627),new cljs.core.Keyword(null,"call-frames","call-frames",3247219303)], null)),(function (p1__17591_SHARP_){return lt.plugins.chromedebugger.debugger$.__GT_call_frames.call(null,this$,p1__17591_SHARP_);
}))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Scope Variables"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"scope-variables"], null),crate.binding.bound.call(null,crate.binding.subatom.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debugger","debugger",1561716627),new cljs.core.Keyword(null,"scope-variables","scope-variables",1703262384)], null)),(function (p1__17592_SHARP_){return lt.plugins.chromedebugger.debugger$.__GT_scope_variables.call(null,this$,p1__17592_SHARP_);
}))], null),(function (){var ed = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger.debugger","editor","lt.plugins.chromedebugger.debugger/editor",965018199),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mime","mime",1017255846),lt.plugins.chromedebugger.debugger$.last_ed_mime.call(null)], null));var tags = lt.plugins.chromedebugger.debugger$.get_ed_tags.call(null);lt.object.update_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client","client",3951159101)], null),cljs.core.assoc,new cljs.core.Keyword(null,"default","default",2558708147),new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
lt.object.add_tags.call(null,ed,tags);
return lt.object.__GT_content.call(null,ed);
})()], null));var seq__17599_17661 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__17600_17662 = null;var count__17601_17663 = 0;var i__17602_17664 = 0;while(true){
if((i__17602_17664 < count__17601_17663))
{var vec__17603_17665 = cljs.core._nth.call(null,chunk__17600_17662,i__17602_17664);var ev__7794__auto___17666 = cljs.core.nth.call(null,vec__17603_17665,0,null);var func__7795__auto___17667 = cljs.core.nth.call(null,vec__17603_17665,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___17666,func__7795__auto___17667);
{
var G__17668 = seq__17599_17661;
var G__17669 = chunk__17600_17662;
var G__17670 = count__17601_17663;
var G__17671 = (i__17602_17664 + 1);
seq__17599_17661 = G__17668;
chunk__17600_17662 = G__17669;
count__17601_17663 = G__17670;
i__17602_17664 = G__17671;
continue;
}
} else
{var temp__4092__auto___17672 = cljs.core.seq.call(null,seq__17599_17661);if(temp__4092__auto___17672)
{var seq__17599_17673__$1 = temp__4092__auto___17672;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17599_17673__$1))
{var c__7112__auto___17674 = cljs.core.chunk_first.call(null,seq__17599_17673__$1);{
var G__17675 = cljs.core.chunk_rest.call(null,seq__17599_17673__$1);
var G__17676 = c__7112__auto___17674;
var G__17677 = cljs.core.count.call(null,c__7112__auto___17674);
var G__17678 = 0;
seq__17599_17661 = G__17675;
chunk__17600_17662 = G__17676;
count__17601_17663 = G__17677;
i__17602_17664 = G__17678;
continue;
}
} else
{var vec__17604_17679 = cljs.core.first.call(null,seq__17599_17673__$1);var ev__7794__auto___17680 = cljs.core.nth.call(null,vec__17604_17679,0,null);var func__7795__auto___17681 = cljs.core.nth.call(null,vec__17604_17679,1,null);lt.util.dom.on.call(null,e__7793__auto__,ev__7794__auto___17680,func__7795__auto___17681);
{
var G__17682 = cljs.core.next.call(null,seq__17599_17673__$1);
var G__17683 = null;
var G__17684 = 0;
var G__17685 = 0;
seq__17599_17661 = G__17682;
chunk__17600_17662 = G__17683;
count__17601_17663 = G__17684;
i__17602_17664 = G__17685;
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
var scope_chain_17686 = cljs.core.js__GT_clj.call(null,new cljs.core.Keyword(null,"scopeChain","scopeChain",796553279).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,call_frames)));var panel_17687 = new cljs.core.Keyword(null,"debug-panel","debug-panel",2661178748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));lt.object.update_BANG_.call(null,panel_17687,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debugger","debugger",1561716627)], null),cljs.core.assoc,new cljs.core.Keyword(null,"paused?","paused?",4518674499),true,new cljs.core.Keyword(null,"call-frames","call-frames",3247219303),call_frames);
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
var G__17688 = null;
var G__17688__0 = (function (){var editor = lt.objs.editor.pool.last_active.call(null);var client = lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.js","editor.eval.js",1847417804),new cljs.core.Keyword(null,"origin","origin",4300251800),editor], null));return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"resume-debugger","resume-debugger",4240016691),editor,client);
});
var G__17688__2 = (function (editor,client){return lt.plugins.chromedebugger.send.call(null,client,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chromedebugger.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.resume"], null),(function (r){lt.object.update_BANG_.call(null,new cljs.core.Keyword(null,"debug-panel","debug-panel",2661178748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debugger","debugger",1561716627)], null),cljs.core.assoc,new cljs.core.Keyword(null,"paused?","paused?",4518674499),false,new cljs.core.Keyword(null,"scope-variables","scope-variables",1703262384),null,new cljs.core.Keyword(null,"call-frames","call-frames",3247219303),null);
return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"debugger-resumed","debugger-resumed",833902493));
}));
});
G__17688 = function(editor,client){
switch(arguments.length){
case 0:
return G__17688__0.call(this);
case 2:
return G__17688__2.call(this,editor,client);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__17688;
})()
], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"pause-debugger","pause-debugger",1706137994),new cljs.core.Keyword(null,"desc","desc",1016984067),"Chrome: Debugger - Pause",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var editor = lt.objs.editor.pool.last_active.call(null);var client = lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.js","editor.eval.js",1847417804),new cljs.core.Keyword(null,"origin","origin",4300251800),editor], null));return lt.plugins.chromedebugger.send.call(null,client,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chromedebugger.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.pause"], null),((function (editor,client){
return (function (r){return cljs.core.println.call(null,r);
});})(editor,client))
);
})], null));
}

//# sourceMappingURL=chromedebugger_compiled.js.map