if(!lt.util.load.provided_QMARK_('lt.plugins.chromedebugger')) {
goog.provide('lt.plugins.chromedebugger');
goog.require('cljs.core');
goog.require('lt.util.cljs');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('lt.objs.context');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
goog.require('cljs.reader');
goog.require('lt.objs.context');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.util.cljs');
goog.require('lt.objs.files');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.clients');
goog.require('clojure.string');
goog.require('lt.object');
goog.require('cljs.reader');
goog.require('lt.object');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.sidebar.clients');
goog.require('fetch.core');
goog.require('fetch.core');
lt.plugins.chromedebugger.server_input = (function server_input(){var e__8224__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"host:port",new cljs.core.Keyword(null,"value","value",1125876963),"localhost:"], null)], null));var seq__8583_8617 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",1111509066),(function (){return lt.objs.context.in_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
}),new cljs.core.Keyword(null,"blur","blur",1016931289),(function (){return lt.objs.context.out_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
})], null)));var chunk__8584_8618 = null;var count__8585_8619 = 0;var i__8586_8620 = 0;while(true){
if((i__8586_8620 < count__8585_8619))
{var vec__8587_8621 = cljs.core._nth.call(null,chunk__8584_8618,i__8586_8620);var ev__8225__auto___8622 = cljs.core.nth.call(null,vec__8587_8621,0,null);var func__8226__auto___8623 = cljs.core.nth.call(null,vec__8587_8621,1,null);lt.util.dom.on.call(null,e__8224__auto__,ev__8225__auto___8622,func__8226__auto___8623);
{
var G__8624 = seq__8583_8617;
var G__8625 = chunk__8584_8618;
var G__8626 = count__8585_8619;
var G__8627 = (i__8586_8620 + 1);
seq__8583_8617 = G__8624;
chunk__8584_8618 = G__8625;
count__8585_8619 = G__8626;
i__8586_8620 = G__8627;
continue;
}
} else
{var temp__4092__auto___8628 = cljs.core.seq.call(null,seq__8583_8617);if(temp__4092__auto___8628)
{var seq__8583_8629__$1 = temp__4092__auto___8628;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8583_8629__$1))
{var c__7564__auto___8630 = cljs.core.chunk_first.call(null,seq__8583_8629__$1);{
var G__8631 = cljs.core.chunk_rest.call(null,seq__8583_8629__$1);
var G__8632 = c__7564__auto___8630;
var G__8633 = cljs.core.count.call(null,c__7564__auto___8630);
var G__8634 = 0;
seq__8583_8617 = G__8631;
chunk__8584_8618 = G__8632;
count__8585_8619 = G__8633;
i__8586_8620 = G__8634;
continue;
}
} else
{var vec__8588_8635 = cljs.core.first.call(null,seq__8583_8629__$1);var ev__8225__auto___8636 = cljs.core.nth.call(null,vec__8588_8635,0,null);var func__8226__auto___8637 = cljs.core.nth.call(null,vec__8588_8635,1,null);lt.util.dom.on.call(null,e__8224__auto__,ev__8225__auto___8636,func__8226__auto___8637);
{
var G__8638 = cljs.core.next.call(null,seq__8583_8629__$1);
var G__8639 = null;
var G__8640 = 0;
var G__8641 = 0;
seq__8583_8617 = G__8638;
chunk__8584_8618 = G__8639;
count__8585_8619 = G__8640;
i__8586_8620 = G__8641;
continue;
}
}
} else
{}
}
break;
}
return e__8224__auto__;
});
lt.plugins.chromedebugger.connect_to_remote = (function connect_to_remote(server){var vec__8590 = clojure.string.split.call(null,server,":");var host = cljs.core.nth.call(null,vec__8590,0,null);var port = cljs.core.nth.call(null,vec__8590,1,null);cljs.core.println.call(null,host,port);
if(cljs.core.truth_((function (){var and__6804__auto__ = host;if(cljs.core.truth_(and__6804__auto__))
{return port;
} else
{return and__6804__auto__;
}
})()))
{var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"chrome.client.remote","chrome.client.remote",4091478727));var url = [cljs.core.str("http://"),cljs.core.str(server),cljs.core.str("/json")].join('');lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"port","port",1017351155),port,new cljs.core.Keyword(null,"host","host",1017112858),host,new cljs.core.Keyword(null,"tabs-url","tabs-url",4418269714),url,new cljs.core.Keyword(null,"name","name",1017277949),[cljs.core.str("Chrome Remote Debugger: "),cljs.core.str(url)].join('')], null));
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
lt.objs.sidebar.clients.add_connector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Chrome (Remote Debugging Protocol)",new cljs.core.Keyword(null,"desc","desc",1016984067),"Enter in the host:port address of remote debugging server to connect to",new cljs.core.Keyword(null,"connect","connect",1965255772),(function (){return lt.plugins.chromedebugger.remote_connect.call(null);
})], null));
lt.plugins.chromedebugger.socket = (function socket(this$,url){var sock = (new WebSocket(url));sock.onopen = (function (){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connected","connected",4729661051),true], null));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"connect","connect",1965255772));
});
sock.onmessage = (function (p1__8591_SHARP_){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"message","message",1968829305),lt.util.cljs.js__GT_clj.call(null,JSON.parse(p1__8591_SHARP_.data),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true));
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
var send__delegate = function (client,m,p__8592){var vec__8594 = p__8592;var cb = cljs.core.nth.call(null,vec__8594,0,null);if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))))
{return lt.plugins.chromedebugger.send_STAR_.call(null,client,m,cb);
} else
{return lt.object.update_BANG_.call(null,client,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1121848451)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [client,m,cb], null));
}
};
var send = function (client,m,var_args){
var p__8592 = null;if (arguments.length > 2) {
  p__8592 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return send__delegate.call(this,client,m,p__8592);};
send.cljs$lang$maxFixedArity = 2;
send.cljs$lang$applyTo = (function (arglist__8642){
var client = cljs.core.first(arglist__8642);
arglist__8642 = cljs.core.next(arglist__8642);
var m = cljs.core.first(arglist__8642);
var p__8592 = cljs.core.rest(arglist__8642);
return send__delegate(client,m,p__8592);
});
send.cljs$core$IFn$_invoke$arity$variadic = send__delegate;
return send;
})()
;
lt.plugins.chromedebugger.__BEH__connect_BANG_ = (function __BEH__connect_BANG_(this$,url){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connected","connected",4729661051),true], null));
return fetch.core.xhr.call(null,url,cljs.core.PersistentArrayMap.EMPTY,(function (d){return lt.plugins.chromedebugger.select_tab.call(null,this$,lt.util.cljs.js__GT_clj.call(null,JSON.parse(d),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true));
}));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","connect!","lt.plugins.chromedebugger/connect!",4683025637),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.__BEH__connect_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connect!","connect!",4735997929),null], null), null));
lt.plugins.chromedebugger.__BEH__close = (function __BEH__close(this$){var temp__4092__auto___8643 = new cljs.core.Keyword(null,"socket","socket",4411822821).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8643))
{var socket_8644 = temp__4092__auto___8643;new cljs.core.Keyword(null,"socket","socket",4411822821).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)).close();
} else
{}
return lt.objs.clients.rem_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","close","lt.plugins.chromedebugger/close",3740144484),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.__BEH__close,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close!","close!",3951350939),null], null), null));
lt.plugins.chromedebugger.__BEH__clear_queue_on_connect = (function __BEH__clear_queue_on_connect(this$){var seq__8599 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"queue","queue",1121848451).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var chunk__8600 = null;var count__8601 = 0;var i__8602 = 0;while(true){
if((i__8602 < count__8601))
{var msg = cljs.core._nth.call(null,chunk__8600,i__8602);cljs.core.apply.call(null,lt.plugins.chromedebugger.send,msg);
{
var G__8645 = seq__8599;
var G__8646 = chunk__8600;
var G__8647 = count__8601;
var G__8648 = (i__8602 + 1);
seq__8599 = G__8645;
chunk__8600 = G__8646;
count__8601 = G__8647;
i__8602 = G__8648;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8599);if(temp__4092__auto__)
{var seq__8599__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8599__$1))
{var c__7564__auto__ = cljs.core.chunk_first.call(null,seq__8599__$1);{
var G__8649 = cljs.core.chunk_rest.call(null,seq__8599__$1);
var G__8650 = c__7564__auto__;
var G__8651 = cljs.core.count.call(null,c__7564__auto__);
var G__8652 = 0;
seq__8599 = G__8649;
chunk__8600 = G__8650;
count__8601 = G__8651;
i__8602 = G__8652;
continue;
}
} else
{var msg = cljs.core.first.call(null,seq__8599__$1);cljs.core.apply.call(null,lt.plugins.chromedebugger.send,msg);
{
var G__8653 = cljs.core.next.call(null,seq__8599__$1);
var G__8654 = null;
var G__8655 = 0;
var G__8656 = 0;
seq__8599 = G__8653;
chunk__8600 = G__8654;
count__8601 = G__8655;
i__8602 = G__8656;
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
lt.plugins.chromedebugger.__BEH__init_tab = (function __BEH__init_tab(this$){cljs.core.println.call(null,"lets go!");
lt.plugins.chromedebugger.send.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chromedebugger.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Console.enable"], null));
lt.plugins.chromedebugger.send.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chromedebugger.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Debugger.enable"], null));
return lt.plugins.chromedebugger.send.call(null,this$,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.chromedebugger.next_id.call(null),new cljs.core.Keyword(null,"method","method",4231316563),"Network.setCacheDisabled",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cacheDisabled","cacheDisabled",3367083920),true], null)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chromedebugger","init-tab","lt.plugins.chromedebugger/init-tab",3912607684),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chromedebugger.__BEH__init_tab,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connect","connect",1965255772),null], null), null));
lt.plugins.chromedebugger.__BEH__print_messages = (function __BEH__print_messages(this$,m){return cljs.core.println.call(null,"print messages",m);
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
lt.plugins.chromedebugger.tab_preview = (function tab_preview(action,tab){var e__8224__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),new cljs.core.Keyword(null,"faviconUrl","faviconUrl",4346893869).cljs$core$IFn$_invoke$arity$1(tab)], null)], null),new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(tab)], null));var seq__8609_8657 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return action.call(null,tab);
})], null)));var chunk__8610_8658 = null;var count__8611_8659 = 0;var i__8612_8660 = 0;while(true){
if((i__8612_8660 < count__8611_8659))
{var vec__8613_8661 = cljs.core._nth.call(null,chunk__8610_8658,i__8612_8660);var ev__8225__auto___8662 = cljs.core.nth.call(null,vec__8613_8661,0,null);var func__8226__auto___8663 = cljs.core.nth.call(null,vec__8613_8661,1,null);lt.util.dom.on.call(null,e__8224__auto__,ev__8225__auto___8662,func__8226__auto___8663);
{
var G__8664 = seq__8609_8657;
var G__8665 = chunk__8610_8658;
var G__8666 = count__8611_8659;
var G__8667 = (i__8612_8660 + 1);
seq__8609_8657 = G__8664;
chunk__8610_8658 = G__8665;
count__8611_8659 = G__8666;
i__8612_8660 = G__8667;
continue;
}
} else
{var temp__4092__auto___8668 = cljs.core.seq.call(null,seq__8609_8657);if(temp__4092__auto___8668)
{var seq__8609_8669__$1 = temp__4092__auto___8668;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8609_8669__$1))
{var c__7564__auto___8670 = cljs.core.chunk_first.call(null,seq__8609_8669__$1);{
var G__8671 = cljs.core.chunk_rest.call(null,seq__8609_8669__$1);
var G__8672 = c__7564__auto___8670;
var G__8673 = cljs.core.count.call(null,c__7564__auto___8670);
var G__8674 = 0;
seq__8609_8657 = G__8671;
chunk__8610_8658 = G__8672;
count__8611_8659 = G__8673;
i__8612_8660 = G__8674;
continue;
}
} else
{var vec__8614_8675 = cljs.core.first.call(null,seq__8609_8669__$1);var ev__8225__auto___8676 = cljs.core.nth.call(null,vec__8614_8675,0,null);var func__8226__auto___8677 = cljs.core.nth.call(null,vec__8614_8675,1,null);lt.util.dom.on.call(null,e__8224__auto__,ev__8225__auto___8676,func__8226__auto___8677);
{
var G__8678 = cljs.core.next.call(null,seq__8609_8669__$1);
var G__8679 = null;
var G__8680 = 0;
var G__8681 = 0;
seq__8609_8657 = G__8678;
chunk__8610_8658 = G__8679;
count__8611_8659 = G__8680;
i__8612_8660 = G__8681;
continue;
}
}
} else
{}
}
break;
}
return e__8224__auto__;
});
lt.plugins.chromedebugger.connect_tab = (function connect_tab(client,tab){cljs.core.println.call(null,"connect-tab");
lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"socket","socket",4411822821),lt.plugins.chromedebugger.socket.call(null,client,new cljs.core.Keyword(null,"webSocketDebuggerUrl","webSocketDebuggerUrl",667502233).cljs$core$IFn$_invoke$arity$1(tab)),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chrome.client.remote","chrome.client.remote",4091478727)], null),new cljs.core.Keyword(null,"commands","commands",4706336250),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"editor.eval.cljs.exec","editor.eval.cljs.exec",866638030),null,new cljs.core.Keyword(null,"editor.eval.css","editor.eval.css",1083014276),null,new cljs.core.Keyword(null,"editor.eval.js","editor.eval.js",1847417804),null,new cljs.core.Keyword(null,"editor.eval.html","editor.eval.html",3156465134),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"chrome.client.remote","chrome.client.remote",4091478727)], null));
return cljs.core.println.call(null,"connected",client);
});
lt.plugins.chromedebugger.select_tab = (function select_tab(client,tabs){var action = cljs.core.partial.call(null,lt.plugins.chromedebugger.connect_tab,client);var p = lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Select which tab to attach to",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul#chrome-tabs","ul#chrome-tabs",1003516535),cljs.core.map.call(null,((function (action){
return (function (p1__8615_SHARP_){return lt.plugins.chromedebugger.tab_preview.call(null,action,p1__8615_SHARP_);
});})(action))
,cljs.core.filter.call(null,((function (action){
return (function (p1__8616_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p1__8616_SHARP_),"page");
});})(action))
,tabs))], null)], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"cancel"], null)], null)], null));return null;
});
lt.plugins.chromedebugger.cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
lt.plugins.chromedebugger.id = cljs.core.atom.call(null,0);
lt.plugins.chromedebugger.next_id = (function next_id(){return cljs.core.swap_BANG_.call(null,lt.plugins.chromedebugger.id,cljs.core.inc);
});
new cljs.core.Keyword(null,"scripts","scripts",2940419194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.clients.by_name.call(null,"Chrome Remote Debugger: http://localhost:9222/json")));
}

//# sourceMappingURL=chromedebugger_compiled.js.map