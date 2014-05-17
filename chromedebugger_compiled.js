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
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.sidebar.clients');
goog.require('fetch.core');
goog.require('fetch.core');
lt.plugins.chromedebugger.remote_server = cljs.core.atom.call(null,null);
lt.plugins.chromedebugger.server_input = (function server_input(){var e__8223__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"host:port",new cljs.core.Keyword(null,"value","value",1125876963),"localhost:"], null)], null));var seq__10506_10630 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",1111509066),(function (){return lt.objs.context.in_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
}),new cljs.core.Keyword(null,"blur","blur",1016931289),(function (){return lt.objs.context.out_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
})], null)));var chunk__10507_10631 = null;var count__10508_10632 = 0;var i__10509_10633 = 0;while(true){
if((i__10509_10633 < count__10508_10632))
{var vec__10510_10634 = cljs.core._nth.call(null,chunk__10507_10631,i__10509_10633);var ev__8224__auto___10635 = cljs.core.nth.call(null,vec__10510_10634,0,null);var func__8225__auto___10636 = cljs.core.nth.call(null,vec__10510_10634,1,null);lt.util.dom.on.call(null,e__8223__auto__,ev__8224__auto___10635,func__8225__auto___10636);
{
var G__10637 = seq__10506_10630;
var G__10638 = chunk__10507_10631;
var G__10639 = count__10508_10632;
var G__10640 = (i__10509_10633 + 1);
seq__10506_10630 = G__10637;
chunk__10507_10631 = G__10638;
count__10508_10632 = G__10639;
i__10509_10633 = G__10640;
continue;
}
} else
{var temp__4092__auto___10641 = cljs.core.seq.call(null,seq__10506_10630);if(temp__4092__auto___10641)
{var seq__10506_10642__$1 = temp__4092__auto___10641;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10506_10642__$1))
{var c__7563__auto___10643 = cljs.core.chunk_first.call(null,seq__10506_10642__$1);{
var G__10644 = cljs.core.chunk_rest.call(null,seq__10506_10642__$1);
var G__10645 = c__7563__auto___10643;
var G__10646 = cljs.core.count.call(null,c__7563__auto___10643);
var G__10647 = 0;
seq__10506_10630 = G__10644;
chunk__10507_10631 = G__10645;
count__10508_10632 = G__10646;
i__10509_10633 = G__10647;
continue;
}
} else
{var vec__10511_10648 = cljs.core.first.call(null,seq__10506_10642__$1);var ev__8224__auto___10649 = cljs.core.nth.call(null,vec__10511_10648,0,null);var func__8225__auto___10650 = cljs.core.nth.call(null,vec__10511_10648,1,null);lt.util.dom.on.call(null,e__8223__auto__,ev__8224__auto___10649,func__8225__auto___10650);
{
var G__10651 = cljs.core.next.call(null,seq__10506_10642__$1);
var G__10652 = null;
var G__10653 = 0;
var G__10654 = 0;
seq__10506_10630 = G__10651;
chunk__10507_10631 = G__10652;
count__10508_10632 = G__10653;
i__10509_10633 = G__10654;
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
lt.plugins.chromedebugger.connect_to_remote = (function connect_to_remote(server){var vec__10513 = clojure.string.split.call(null,server,":");var host = cljs.core.nth.call(null,vec__10513,0,null);var port = cljs.core.nth.call(null,vec__10513,1,null);if(cljs.core.truth_((function (){var and__6803__auto__ = host;if(cljs.core.truth_(and__6803__auto__))
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
sock.onmessage = (function (p1__10514_SHARP_){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"message","message",1968829305),lt.util.cljs.js__GT_clj.call(null,JSON.parse(p1__10514_SHARP_.data),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true));
});
sock.onerror = (function (p1__10515_SHARP_){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"error","error",1110689146),p1__10515_SHARP_);
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
var send__delegate = function (client,m,p__10516){var vec__10518 = p__10516;var cb = cljs.core.nth.call(null,vec__10518,0,null);if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))))
{return lt.plugins.chromedebugger.send_STAR_.call(null,client,m,cb);
} else
{return lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1121848451)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [client,m,cb], null));
}
};
var send = function (client,m,var_args){
var p__10516 = null;if (arguments.length > 2) {
  p__10516 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return send__delegate.call(this,client,m,p__10516);};
send.cljs$lang$maxFixedArity = 2;
send.cljs$lang$applyTo = (function (arglist__10655){
var client = cljs.core.first(arglist__10655);
arglist__10655 = cljs.core.next(arglist__10655);
var m = cljs.core.first(arglist__10655);
var p__10516 = cljs.core.rest(arglist__10655);
return send__delegate(client,m,p__10516);
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
lt.plugins.chromedebugger.__BEH__close = (function __BEH__close(this$){var temp__4092__auto___10656 = new cljs.core.Keyword(null,"socket","socket",4411822821).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___10656))
{var socket_10657 = temp__4092__auto___10656;socket_10657.close();
} else
{}
cljs.core.swap_BANG_.call(null,lt.plugins.chromedebugger.connected_tabs,cljs.core.dissoc,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));
return lt.objs.clients.rem_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","close","lt.plugins.chromedebugger/close",3740144484),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.__BEH__close,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close!","close!",3951350939),null], null), null));
lt.plugins.chromedebugger.__BEH__clear_queue_on_connect = (function __BEH__clear_queue_on_connect(this$){var seq__10523 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"queue","queue",1121848451).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var chunk__10524 = null;var count__10525 = 0;var i__10526 = 0;while(true){
if((i__10526 < count__10525))
{var msg = cljs.core._nth.call(null,chunk__10524,i__10526);cljs.core.apply.call(null,lt.plugins.chromedebugger.send,msg);
{
var G__10658 = seq__10523;
var G__10659 = chunk__10524;
var G__10660 = count__10525;
var G__10661 = (i__10526 + 1);
seq__10523 = G__10658;
chunk__10524 = G__10659;
count__10525 = G__10660;
i__10526 = G__10661;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10523);if(temp__4092__auto__)
{var seq__10523__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10523__$1))
{var c__7563__auto__ = cljs.core.chunk_first.call(null,seq__10523__$1);{
var G__10662 = cljs.core.chunk_rest.call(null,seq__10523__$1);
var G__10663 = c__7563__auto__;
var G__10664 = cljs.core.count.call(null,c__7563__auto__);
var G__10665 = 0;
seq__10523 = G__10662;
chunk__10524 = G__10663;
count__10525 = G__10664;
i__10526 = G__10665;
continue;
}
} else
{var msg = cljs.core.first.call(null,seq__10523__$1);cljs.core.apply.call(null,lt.plugins.chromedebugger.send,msg);
{
var G__10666 = cljs.core.next.call(null,seq__10523__$1);
var G__10667 = null;
var G__10668 = 0;
var G__10669 = 0;
seq__10523 = G__10666;
chunk__10524 = G__10667;
count__10525 = G__10668;
i__10526 = G__10669;
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
lt.plugins.chromedebugger.lttools_str = "\n\n  window.lttools = {\n    watch: function(exp, meta) {\n      if (!window.lttools.watchers[meta.ev]) {\n        window.lttools.watchers[meta.ev] = {};\n      }\n      window.lttools.watchers[meta.ev][meta.id] = {\n        exp: exp,\n        meta: meta\n      };\n    },\n    watchers: {}\n  };\n  ";
lt.plugins.chromedebugger.__BEH__init_tab = (function __BEH__init_tab(this$){lt.plugins.chromedebugger.send.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chromedebugger.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Runtime.enable"], null));
lt.plugins.chromedebugger.send.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chromedebugger.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Console.enable"], null));
lt.plugins.chromedebugger.send.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chromedebugger.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.enable"], null),(function (){return lt.plugins.chromedebugger.send.call(null,this$,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chromedebugger.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Runtime.evaluate",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expression","expression",3513419274),lt.plugins.chromedebugger.lttools_str], null)], null));
}));
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
lt.plugins.chromedebugger.__BEH__handle_error = (function __BEH__handle_error(this$,event){if(cljs.core.not_EQ_.call(null,1,lt.plugins.chromedebugger.socket.readyState))
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"close!","close!",3951350939));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","handle-error","lt.plugins.chromedebugger/handle-error",2328107769),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.__BEH__handle_error,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",1110689146),null], null), null));
lt.plugins.chromedebugger.dismiss_button = (function dismiss_button(obj){var e__8223__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tab-close","span.tab-close",4094760846),"x"], null));var seq__10533_10670 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"remove-label","remove-label",3359640541));
})], null)));var chunk__10534_10671 = null;var count__10535_10672 = 0;var i__10536_10673 = 0;while(true){
if((i__10536_10673 < count__10535_10672))
{var vec__10537_10674 = cljs.core._nth.call(null,chunk__10534_10671,i__10536_10673);var ev__8224__auto___10675 = cljs.core.nth.call(null,vec__10537_10674,0,null);var func__8225__auto___10676 = cljs.core.nth.call(null,vec__10537_10674,1,null);lt.util.dom.on.call(null,e__8223__auto__,ev__8224__auto___10675,func__8225__auto___10676);
{
var G__10677 = seq__10533_10670;
var G__10678 = chunk__10534_10671;
var G__10679 = count__10535_10672;
var G__10680 = (i__10536_10673 + 1);
seq__10533_10670 = G__10677;
chunk__10534_10671 = G__10678;
count__10535_10672 = G__10679;
i__10536_10673 = G__10680;
continue;
}
} else
{var temp__4092__auto___10681 = cljs.core.seq.call(null,seq__10533_10670);if(temp__4092__auto___10681)
{var seq__10533_10682__$1 = temp__4092__auto___10681;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10533_10682__$1))
{var c__7563__auto___10683 = cljs.core.chunk_first.call(null,seq__10533_10682__$1);{
var G__10684 = cljs.core.chunk_rest.call(null,seq__10533_10682__$1);
var G__10685 = c__7563__auto___10683;
var G__10686 = cljs.core.count.call(null,c__7563__auto___10683);
var G__10687 = 0;
seq__10533_10670 = G__10684;
chunk__10534_10671 = G__10685;
count__10535_10672 = G__10686;
i__10536_10673 = G__10687;
continue;
}
} else
{var vec__10538_10688 = cljs.core.first.call(null,seq__10533_10682__$1);var ev__8224__auto___10689 = cljs.core.nth.call(null,vec__10538_10688,0,null);var func__8225__auto___10690 = cljs.core.nth.call(null,vec__10538_10688,1,null);lt.util.dom.on.call(null,e__8223__auto__,ev__8224__auto___10689,func__8225__auto___10690);
{
var G__10691 = cljs.core.next.call(null,seq__10533_10682__$1);
var G__10692 = null;
var G__10693 = 0;
var G__10694 = 0;
seq__10533_10670 = G__10691;
chunk__10534_10671 = G__10692;
count__10535_10672 = G__10693;
i__10536_10673 = G__10694;
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
lt.plugins.chromedebugger.reconnect_button = (function reconnect_button(label,tab){var e__8223__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"reconnect-chrome button"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),[cljs.core.str("Reconnect: "),cljs.core.str(new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(tab))].join('')], null),lt.plugins.chromedebugger.dismiss_button.call(null,label)], null));var seq__10545_10695 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (e){var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"chrome.client.remote","chrome.client.remote",4091478727));return lt.plugins.chromedebugger.connect_tab.call(null,client,tab);
})], null)));var chunk__10546_10696 = null;var count__10547_10697 = 0;var i__10548_10698 = 0;while(true){
if((i__10548_10698 < count__10547_10697))
{var vec__10549_10699 = cljs.core._nth.call(null,chunk__10546_10696,i__10548_10698);var ev__8224__auto___10700 = cljs.core.nth.call(null,vec__10549_10699,0,null);var func__8225__auto___10701 = cljs.core.nth.call(null,vec__10549_10699,1,null);lt.util.dom.on.call(null,e__8223__auto__,ev__8224__auto___10700,func__8225__auto___10701);
{
var G__10702 = seq__10545_10695;
var G__10703 = chunk__10546_10696;
var G__10704 = count__10547_10697;
var G__10705 = (i__10548_10698 + 1);
seq__10545_10695 = G__10702;
chunk__10546_10696 = G__10703;
count__10547_10697 = G__10704;
i__10548_10698 = G__10705;
continue;
}
} else
{var temp__4092__auto___10706 = cljs.core.seq.call(null,seq__10545_10695);if(temp__4092__auto___10706)
{var seq__10545_10707__$1 = temp__4092__auto___10706;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10545_10707__$1))
{var c__7563__auto___10708 = cljs.core.chunk_first.call(null,seq__10545_10707__$1);{
var G__10709 = cljs.core.chunk_rest.call(null,seq__10545_10707__$1);
var G__10710 = c__7563__auto___10708;
var G__10711 = cljs.core.count.call(null,c__7563__auto___10708);
var G__10712 = 0;
seq__10545_10695 = G__10709;
chunk__10546_10696 = G__10710;
count__10547_10697 = G__10711;
i__10548_10698 = G__10712;
continue;
}
} else
{var vec__10550_10713 = cljs.core.first.call(null,seq__10545_10707__$1);var ev__8224__auto___10714 = cljs.core.nth.call(null,vec__10550_10713,0,null);var func__8225__auto___10715 = cljs.core.nth.call(null,vec__10550_10713,1,null);lt.util.dom.on.call(null,e__8223__auto__,ev__8224__auto___10714,func__8225__auto___10715);
{
var G__10716 = cljs.core.next.call(null,seq__10545_10707__$1);
var G__10717 = null;
var G__10718 = 0;
var G__10719 = 0;
seq__10545_10695 = G__10716;
chunk__10546_10696 = G__10717;
count__10547_10697 = G__10718;
i__10548_10698 = G__10719;
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
lt.plugins.chromedebugger.__BEH__remove_label = (function __BEH__remove_label(this$,that){var id = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var labels = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"reconnect-label","reconnect-label",3615163504));var seq__10557 = cljs.core.seq.call(null,labels);var chunk__10559 = null;var count__10560 = 0;var i__10561 = 0;while(true){
if((i__10561 < count__10560))
{var label = cljs.core._nth.call(null,chunk__10559,i__10561);if(cljs.core.truth_((function (){var and__6803__auto__ = label;if(cljs.core.truth_(and__6803__auto__))
{return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,label))),id);
} else
{return and__6803__auto__;
}
})()))
{lt.object.raise.call(null,label,new cljs.core.Keyword(null,"remove-label","remove-label",3359640541));
{
var G__10720 = seq__10557;
var G__10721 = chunk__10559;
var G__10722 = count__10560;
var G__10723 = (i__10561 + 1);
seq__10557 = G__10720;
chunk__10559 = G__10721;
count__10560 = G__10722;
i__10561 = G__10723;
continue;
}
} else
{{
var G__10724 = seq__10557;
var G__10725 = chunk__10559;
var G__10726 = count__10560;
var G__10727 = (i__10561 + 1);
seq__10557 = G__10724;
chunk__10559 = G__10725;
count__10560 = G__10726;
i__10561 = G__10727;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10557);if(temp__4092__auto__)
{var seq__10557__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10557__$1))
{var c__7563__auto__ = cljs.core.chunk_first.call(null,seq__10557__$1);{
var G__10728 = cljs.core.chunk_rest.call(null,seq__10557__$1);
var G__10729 = c__7563__auto__;
var G__10730 = cljs.core.count.call(null,c__7563__auto__);
var G__10731 = 0;
seq__10557 = G__10728;
chunk__10559 = G__10729;
count__10560 = G__10730;
i__10561 = G__10731;
continue;
}
} else
{var label = cljs.core.first.call(null,seq__10557__$1);if(cljs.core.truth_((function (){var and__6803__auto__ = label;if(cljs.core.truth_(and__6803__auto__))
{return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",1014018823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,label))),id);
} else
{return and__6803__auto__;
}
})()))
{lt.object.raise.call(null,label,new cljs.core.Keyword(null,"remove-label","remove-label",3359640541));
{
var G__10732 = cljs.core.next.call(null,seq__10557__$1);
var G__10733 = null;
var G__10734 = 0;
var G__10735 = 0;
seq__10557 = G__10732;
chunk__10559 = G__10733;
count__10560 = G__10734;
i__10561 = G__10735;
continue;
}
} else
{{
var G__10736 = cljs.core.next.call(null,seq__10557__$1);
var G__10737 = null;
var G__10738 = 0;
var G__10739 = 0;
seq__10557 = G__10736;
chunk__10559 = G__10737;
count__10560 = G__10738;
i__10561 = G__10739;
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
lt.plugins.chromedebugger.tab_preview = (function tab_preview(action,tab){var e__8223__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),new cljs.core.Keyword(null,"faviconUrl","faviconUrl",4346893869).cljs$core$IFn$_invoke$arity$1(tab)], null)], null),new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(tab)], null));var seq__10569_10740 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (e){var temp__4092__auto___10744 = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"popup","popup",1120756766));if(cljs.core.truth_(temp__4092__auto___10744))
{var p_10745 = temp__4092__auto___10744;lt.object.raise.call(null,p_10745,new cljs.core.Keyword(null,"close!","close!",3951350939));
} else
{}
return action.call(null,tab);
})], null)));var chunk__10570_10741 = null;var count__10571_10742 = 0;var i__10572_10743 = 0;while(true){
if((i__10572_10743 < count__10571_10742))
{var vec__10573_10746 = cljs.core._nth.call(null,chunk__10570_10741,i__10572_10743);var ev__8224__auto___10747 = cljs.core.nth.call(null,vec__10573_10746,0,null);var func__8225__auto___10748 = cljs.core.nth.call(null,vec__10573_10746,1,null);lt.util.dom.on.call(null,e__8223__auto__,ev__8224__auto___10747,func__8225__auto___10748);
{
var G__10749 = seq__10569_10740;
var G__10750 = chunk__10570_10741;
var G__10751 = count__10571_10742;
var G__10752 = (i__10572_10743 + 1);
seq__10569_10740 = G__10749;
chunk__10570_10741 = G__10750;
count__10571_10742 = G__10751;
i__10572_10743 = G__10752;
continue;
}
} else
{var temp__4092__auto___10753 = cljs.core.seq.call(null,seq__10569_10740);if(temp__4092__auto___10753)
{var seq__10569_10754__$1 = temp__4092__auto___10753;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10569_10754__$1))
{var c__7563__auto___10755 = cljs.core.chunk_first.call(null,seq__10569_10754__$1);{
var G__10756 = cljs.core.chunk_rest.call(null,seq__10569_10754__$1);
var G__10757 = c__7563__auto___10755;
var G__10758 = cljs.core.count.call(null,c__7563__auto___10755);
var G__10759 = 0;
seq__10569_10740 = G__10756;
chunk__10570_10741 = G__10757;
count__10571_10742 = G__10758;
i__10572_10743 = G__10759;
continue;
}
} else
{var vec__10574_10760 = cljs.core.first.call(null,seq__10569_10754__$1);var ev__8224__auto___10761 = cljs.core.nth.call(null,vec__10574_10760,0,null);var func__8225__auto___10762 = cljs.core.nth.call(null,vec__10574_10760,1,null);lt.util.dom.on.call(null,e__8223__auto__,ev__8224__auto___10761,func__8225__auto___10762);
{
var G__10763 = cljs.core.next.call(null,seq__10569_10754__$1);
var G__10764 = null;
var G__10765 = 0;
var G__10766 = 0;
seq__10569_10740 = G__10763;
chunk__10570_10741 = G__10764;
count__10571_10742 = G__10765;
i__10572_10743 = G__10766;
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
return (function (p1__10575_SHARP_){return lt.plugins.chromedebugger.tab_preview.call(null,action,p1__10575_SHARP_);
});})(action))
,cljs.core.filter.call(null,((function (action){
return (function (p1__10576_SHARP_){return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p1__10576_SHARP_),"page")) && ((cljs.core.deref.call(null,lt.plugins.chromedebugger.connected_tabs).call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__10576_SHARP_)) == null));
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
lt.plugins.chromedebugger.remove_script_BANG_ = (function remove_script_BANG_(client,path,id){var vec__10579 = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__10577_SHARP_){return cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"scriptId","scriptId",606324408).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__10577_SHARP_)));
}),lt.plugins.chromedebugger.find_script.call(null,client,path)));var k = cljs.core.nth.call(null,vec__10579,0,null);var v = cljs.core.nth.call(null,vec__10579,1,null);return lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scripts","scripts",2940419194),lt.objs.files.basename.call(null,path)], null),cljs.core.dissoc,k);
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
lt.plugins.chromedebugger.desc = (function desc(this$,obj){var e__8223__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",1013907482),lt.plugins.chromedebugger.__GT_name.call(null,obj)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(obj))?[cljs.core.str(": "),cljs.core.str(new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(obj)))].join(''):null)], null));var seq__10586_10767 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){if(cljs.core.truth_(new cljs.core.Keyword(null,"open","open",1017321916).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
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
})], null)));var chunk__10587_10768 = null;var count__10588_10769 = 0;var i__10589_10770 = 0;while(true){
if((i__10589_10770 < count__10588_10769))
{var vec__10590_10771 = cljs.core._nth.call(null,chunk__10587_10768,i__10589_10770);var ev__8224__auto___10772 = cljs.core.nth.call(null,vec__10590_10771,0,null);var func__8225__auto___10773 = cljs.core.nth.call(null,vec__10590_10771,1,null);lt.util.dom.on.call(null,e__8223__auto__,ev__8224__auto___10772,func__8225__auto___10773);
{
var G__10774 = seq__10586_10767;
var G__10775 = chunk__10587_10768;
var G__10776 = count__10588_10769;
var G__10777 = (i__10589_10770 + 1);
seq__10586_10767 = G__10774;
chunk__10587_10768 = G__10775;
count__10588_10769 = G__10776;
i__10589_10770 = G__10777;
continue;
}
} else
{var temp__4092__auto___10778 = cljs.core.seq.call(null,seq__10586_10767);if(temp__4092__auto___10778)
{var seq__10586_10779__$1 = temp__4092__auto___10778;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10586_10779__$1))
{var c__7563__auto___10780 = cljs.core.chunk_first.call(null,seq__10586_10779__$1);{
var G__10781 = cljs.core.chunk_rest.call(null,seq__10586_10779__$1);
var G__10782 = c__7563__auto___10780;
var G__10783 = cljs.core.count.call(null,c__7563__auto___10780);
var G__10784 = 0;
seq__10586_10767 = G__10781;
chunk__10587_10768 = G__10782;
count__10588_10769 = G__10783;
i__10589_10770 = G__10784;
continue;
}
} else
{var vec__10591_10785 = cljs.core.first.call(null,seq__10586_10779__$1);var ev__8224__auto___10786 = cljs.core.nth.call(null,vec__10591_10785,0,null);var func__8225__auto___10787 = cljs.core.nth.call(null,vec__10591_10785,1,null);lt.util.dom.on.call(null,e__8223__auto__,ev__8224__auto___10786,func__8225__auto___10787);
{
var G__10788 = cljs.core.next.call(null,seq__10586_10779__$1);
var G__10789 = null;
var G__10790 = 0;
var G__10791 = 0;
seq__10586_10767 = G__10788;
chunk__10587_10768 = G__10789;
count__10588_10769 = G__10790;
i__10589_10770 = G__10791;
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
lt.plugins.chromedebugger.props = (function props(this$,children){var e__8223__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7532__auto__ = (function iter__10602(s__10603){return (new cljs.core.LazySeq(null,(function (){var s__10603__$1 = s__10603;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10603__$1);if(temp__4092__auto__)
{var s__10603__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10603__$2))
{var c__7530__auto__ = cljs.core.chunk_first.call(null,s__10603__$2);var size__7531__auto__ = cljs.core.count.call(null,c__7530__auto__);var b__10605 = cljs.core.chunk_buffer.call(null,size__7531__auto__);if((function (){var i__10604 = 0;while(true){
if((i__10604 < size__7531__auto__))
{var c = cljs.core._nth.call(null,c__7530__auto__,i__10604);cljs.core.chunk_append.call(null,b__10605,(cljs.core.truth_((function (){var and__6803__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c)),"object");if(and__6803__auto__)
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
var G__10792 = (i__10604 + 1);
i__10604 = G__10792;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10605),iter__10602.call(null,cljs.core.chunk_rest.call(null,s__10603__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10605),null);
}
} else
{var c = cljs.core.first.call(null,s__10603__$2);return cljs.core.cons.call(null,(cljs.core.truth_((function (){var and__6803__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c)),"object");if(and__6803__auto__)
{return new cljs.core.Keyword(null,"objectId","objectId",1104399404).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c));
} else
{return and__6803__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),lt.object.__GT_content.call(null,lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","inspector-object","lt.plugins.chromedebugger/inspector-object",4656861767),new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),c))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",1013907482),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(c)], null),": ",(function (){var or__6815__auto__ = new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c));if(cljs.core.truth_(or__6815__auto__))
{return or__6815__auto__;
} else
{return [cljs.core.str(lt.plugins.chromedebugger.format_value.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(c)))].join('');
}
})()], null)),iter__10602.call(null,cljs.core.rest.call(null,s__10603__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7532__auto__.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1017277949),lt.plugins.chromedebugger.i_compare,children));
})()], null));var seq__10606_10793 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10607_10794 = null;var count__10608_10795 = 0;var i__10609_10796 = 0;while(true){
if((i__10609_10796 < count__10608_10795))
{var vec__10610_10797 = cljs.core._nth.call(null,chunk__10607_10794,i__10609_10796);var ev__8224__auto___10798 = cljs.core.nth.call(null,vec__10610_10797,0,null);var func__8225__auto___10799 = cljs.core.nth.call(null,vec__10610_10797,1,null);lt.util.dom.on.call(null,e__8223__auto__,ev__8224__auto___10798,func__8225__auto___10799);
{
var G__10800 = seq__10606_10793;
var G__10801 = chunk__10607_10794;
var G__10802 = count__10608_10795;
var G__10803 = (i__10609_10796 + 1);
seq__10606_10793 = G__10800;
chunk__10607_10794 = G__10801;
count__10608_10795 = G__10802;
i__10609_10796 = G__10803;
continue;
}
} else
{var temp__4092__auto___10804 = cljs.core.seq.call(null,seq__10606_10793);if(temp__4092__auto___10804)
{var seq__10606_10805__$1 = temp__4092__auto___10804;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10606_10805__$1))
{var c__7563__auto___10806 = cljs.core.chunk_first.call(null,seq__10606_10805__$1);{
var G__10807 = cljs.core.chunk_rest.call(null,seq__10606_10805__$1);
var G__10808 = c__7563__auto___10806;
var G__10809 = cljs.core.count.call(null,c__7563__auto___10806);
var G__10810 = 0;
seq__10606_10793 = G__10807;
chunk__10607_10794 = G__10808;
count__10608_10795 = G__10809;
i__10609_10796 = G__10810;
continue;
}
} else
{var vec__10611_10811 = cljs.core.first.call(null,seq__10606_10805__$1);var ev__8224__auto___10812 = cljs.core.nth.call(null,vec__10611_10811,0,null);var func__8225__auto___10813 = cljs.core.nth.call(null,vec__10611_10811,1,null);lt.util.dom.on.call(null,e__8223__auto__,ev__8224__auto___10812,func__8225__auto___10813);
{
var G__10814 = cljs.core.next.call(null,seq__10606_10805__$1);
var G__10815 = null;
var G__10816 = 0;
var G__10817 = 0;
seq__10606_10793 = G__10814;
chunk__10607_10794 = G__10815;
count__10608_10795 = G__10816;
i__10609_10796 = G__10817;
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
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),(function (){var pred__10615 = cljs.core._EQ_;var expr__10616 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(pred__10615.call(null,"object",expr__10616)))
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
lt.plugins.chromedebugger.clear_unused_inspectors = (function clear_unused_inspectors(){var seq__10624 = cljs.core.seq.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"inspector.object","inspector.object",1285492104)));var chunk__10626 = null;var count__10627 = 0;var i__10628 = 0;while(true){
if((i__10628 < count__10627))
{var obj = cljs.core._nth.call(null,chunk__10626,i__10628);if((cljs.core.not.call(null,lt.object.__GT_content.call(null,obj))) || (cljs.core.not.call(null,lt.util.dom.parents.call(null,lt.object.__GT_content.call(null,obj),new cljs.core.Keyword(null,"body","body",1016933652)))))
{lt.object.destroy_BANG_.call(null,obj);
{
var G__10818 = seq__10624;
var G__10819 = chunk__10626;
var G__10820 = count__10627;
var G__10821 = (i__10628 + 1);
seq__10624 = G__10818;
chunk__10626 = G__10819;
count__10627 = G__10820;
i__10628 = G__10821;
continue;
}
} else
{{
var G__10822 = seq__10624;
var G__10823 = chunk__10626;
var G__10824 = count__10627;
var G__10825 = (i__10628 + 1);
seq__10624 = G__10822;
chunk__10626 = G__10823;
count__10627 = G__10824;
i__10628 = G__10825;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10624);if(temp__4092__auto__)
{var seq__10624__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10624__$1))
{var c__7563__auto__ = cljs.core.chunk_first.call(null,seq__10624__$1);{
var G__10826 = cljs.core.chunk_rest.call(null,seq__10624__$1);
var G__10827 = c__7563__auto__;
var G__10828 = cljs.core.count.call(null,c__7563__auto__);
var G__10829 = 0;
seq__10624 = G__10826;
chunk__10626 = G__10827;
count__10627 = G__10828;
i__10628 = G__10829;
continue;
}
} else
{var obj = cljs.core.first.call(null,seq__10624__$1);if((cljs.core.not.call(null,lt.object.__GT_content.call(null,obj))) || (cljs.core.not.call(null,lt.util.dom.parents.call(null,lt.object.__GT_content.call(null,obj),new cljs.core.Keyword(null,"body","body",1016933652)))))
{lt.object.destroy_BANG_.call(null,obj);
{
var G__10830 = cljs.core.next.call(null,seq__10624__$1);
var G__10831 = null;
var G__10832 = 0;
var G__10833 = 0;
seq__10624 = G__10830;
chunk__10626 = G__10831;
count__10627 = G__10832;
i__10628 = G__10833;
continue;
}
} else
{{
var G__10834 = cljs.core.next.call(null,seq__10624__$1);
var G__10835 = null;
var G__10836 = 0;
var G__10837 = 0;
seq__10624 = G__10834;
chunk__10626 = G__10835;
count__10627 = G__10836;
i__10628 = G__10837;
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