!function(){function e(){var t=n(["\n  mutation CreateEvent($eventInsertObject: Event_insert_input! = {}) {\n    insert_Event_one(object: $eventInsertObject) {\n      randomUUID\n      bookingAvailableStartDateTime\n      bookingAvailableEndDateTime\n      eventStartDateTime\n      eventEndDateTime\n      eventDateTimeRange\n      bookingAvailabilityDateTimeRange\n      eventName\n      eventTopic\n      eventCategory\n      eventCapacity\n      eventDescription\n      eventMedium\n    }\n  }\n"]);return e=function(){return t},t}function t(){var e=n(["\n  # Get all future events.\n  subscription GetAllEvents($eventEndDateTime: timestamptz_comparison_exp = {}) {\n    Event(where: { eventEndDateTime: $eventEndDateTime }, limit: 20) {\n      eventName\n      randomUUID\n      updated_at\n    }\n  }\n"]);return t=function(){return e},e}function n(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return c(this,n)}}function c(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{jLLM:function(n,i,c){"use strict";c.r(i),c.d(i,"Tab1PageModule",(function(){return ve}));var s=c("UKGz"),l=c("sZkV"),b=c("SVse"),d=c("s7LF"),f=c("qtYk"),v=c("UhP/"),m=(c("omvX"),c("8Y7J"));c("YEUz");var p,h,g,y=((p=function e(){u(this,e)}).\u0275mod=m.Ib({type:p}),p.\u0275inj=m.Hb({factory:function(e){return new(e||p)},imports:[[v.e,v.c],v.c]}),p),w=c("8LU1"),P=c("9b/N"),D=((g=function e(){u(this,e)}).\u0275mod=m.Ib({type:g}),g.\u0275inj=m.Hb({factory:function(e){return new(e||g)}}),g),k=((h=function e(){u(this,e)}).\u0275mod=m.Ib({type:h}),h.\u0275inj=m.Hb({factory:function(e){return new(e||h)},imports:[[v.e,v.c,P.c,D],v.c,D]}),h);c("LRne"),c("z6cu"),c("cp0P"),c("quSY"),c("vkgz"),c("lJxs"),c("JIr8"),c("nYR2"),c("w1tV"),c("IzEk"),c("IheW"),c("cUpR");var T,C=((T=function e(){u(this,e)}).\u0275mod=m.Ib({type:T}),T.\u0275inj=m.Hb({factory:function(e){return new(e||T)},imports:[[v.c],v.c]}),T);c("Ht+U");var O=c("XNiG");c("VRyK"),c("GS7A");var _,E,S,I,j,A=Object(v.i)(Object(v.h)((function e(){u(this,e)}))),Q=((_=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(n,e);var t=r(n);function n(){var e;return u(this,n),(e=t.apply(this,arguments)).sortables=new Map,e._stateChanges=new O.a,e.start="asc",e._direction="",e.sortChange=new m.o,e}return o(n,[{key:"register",value:function(e){if(!e.id)throw Error("MatSortHeader must be provided with a unique id.");if(this.sortables.has(e.id))throw Error("Cannot have two MatSortables with the same id (".concat(e.id,")."));this.sortables.set(e.id,e)}},{key:"deregister",value:function(e){this.sortables.delete(e.id)}},{key:"sort",value:function(e){this.active!=e.id?(this.active=e.id,this.direction=e.start?e.start:this.start):this.direction=this.getNextSortDirection(e),this.sortChange.emit({active:this.active,direction:this.direction})}},{key:"getNextSortDirection",value:function(e){if(!e)return"";var t,n,i,o=(t=e.start||this.start,n=null!=e.disableClear?e.disableClear:this.disableClear,i=["asc","desc"],"desc"==t&&i.reverse(),n||i.push(""),i),a=o.indexOf(this.direction)+1;return a>=o.length&&(a=0),o[a]}},{key:"ngOnInit",value:function(){this._markInitialized()}},{key:"ngOnChanges",value:function(){this._stateChanges.next()}},{key:"ngOnDestroy",value:function(){this._stateChanges.complete()}},{key:"direction",get:function(){return this._direction},set:function(e){if(Object(m.W)()&&e&&"asc"!==e&&"desc"!==e)throw function(e){return Error(e+" is not a valid sort direction ('asc' or 'desc').")}(e);this._direction=e}},{key:"disableClear",get:function(){return this._disableClear},set:function(e){this._disableClear=Object(w.b)(e)}}]),n}(A)).\u0275fac=function(e){return R(e||_)},_.\u0275dir=m.Fb({type:_,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{disabled:["matSortDisabled","disabled"],start:["matSortStart","start"],direction:["matSortDirection","direction"],disableClear:["matSortDisableClear","disableClear"],active:["matSortActive","active"]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],features:[m.xb,m.yb]}),_),R=m.Sb(Q),U=((E=function e(){u(this,e),this.changes=new O.a,this.sortButtonLabel=function(e){return"Change sorting for "+e}}).\u0275fac=function(e){return new(e||E)},E.\u0275prov=Object(m.Gb)({factory:function(){return new E},token:E,providedIn:"root"}),E),x={provide:U,deps:[[new m.B,new m.K,U]],useFactory:function(e){return e||new U}},N=((S=function e(){u(this,e)}).\u0275mod=m.Ib({type:S}),S.\u0275inj=m.Hb({factory:function(e){return new(e||S)},providers:[x],imports:[[b.c]]}),S),M=c("OaSA"),H=c("iInd"),L=c("t0hA"),q=c("RXPq"),z=c("kiQV"),V=((I=function e(){u(this,e),this.appVersion=z.a}).\u0275fac=function(e){return new(e||I)},I.\u0275prov=m.Gb({token:I,factory:I.\u0275fac,providedIn:"root"}),I),G=c("lTCR"),K=c.n(G),J=c("Ok9p"),Y=c("Pea1"),$=c("nbgS"),Z=K.a(t()),B=K.a(e()),F=((j=function(){function e(t){u(this,e),this.apollo=t}return o(e,[{key:"getEvents",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.apollo,n=Object(Y.b)(e);return t.subscribe({query:Z,fetchPolicy:"cache-first",variables:{eventEndDateTime:{_gte:n}}})}},{key:"createEvent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.apollo,t=new Date,n=new Date(t.getTime()-Object(Y.a)(2)),i=new Date(t.getTime()+Object(Y.a)(7)),o=new Date(t.getTime()+Object(Y.a)(9)),a=new Date(t.getTime()+Object(Y.a)(10)),r=(new Date(t.getTime()+Object(Y.a)(10)),{bookingAvailableStartDateTime:n,bookingAvailableEndDateTime:i,eventStartDateTime:o,eventEndDateTime:a,bookingAvailabilityDateTimeRange:"('2020-07-22T09:27:53.667Z', '2020-08-14T09:27:53.667Z']",eventDateTimeRange:"('2020-07-22T09:27:53.667Z', '2020-08-14T09:27:53.667Z']",eventName:"Sunday service",eventTopic:"Topic ",eventMedium:"In-person",eventCategory:"ChurchCategory",eventCapacity:49,eventDescription:"Description of community event",Organiser:{data:{organiserDetails:"anonymous",User:{data:{username:"anonymous",emailAddress:"anonymous@anonymous"},on_conflict:{constraint:J.i.User_username_key,update_columns:[J.j.updated_at]}}},on_conflict:{constraint:J.e.Organiser_organiserID_organiserDetails_userID_created_at_up_key,update_columns:[J.f.updated_at]}}});return console.log("EventService -> constructor -> eventInsertObject",r),e.mutate({mutation:B,variables:{eventInsertObject:r}})}}]),e}()).\u0275fac=function(e){return new(e||j)(m.Ub($.b))},j.\u0275prov=m.Gb({token:j,factory:j.\u0275fac,providedIn:"root"}),j),X=c("h80k");function W(e,t){if(1&e){var n=m.Rb();m.Qb(0,"ion-button",5),m.Yb("click",(function(e){return m.lc(n),m.cc().clickInstallPwa(e)})),m.rc(1," Click here to install "),m.Pb()}}function ee(e,t){1&e&&(m.Qb(0,"th",20),m.rc(1," Event name "),m.Pb())}function te(e,t){if(1&e&&(m.Qb(0,"td",21),m.rc(1),m.Pb()),2&e){var n=t.$implicit;m.Ab(1),m.sc(" ",n.eventName," ")}}function ne(e,t){1&e&&(m.Qb(0,"th",20),m.rc(1," Event UUID "),m.Pb())}function ie(e,t){if(1&e&&(m.Qb(0,"td",21),m.rc(1),m.Pb()),2&e){var n=t.$implicit;m.Ab(1),m.sc(" ",n.randomUUID," ")}}function oe(e,t){1&e&&(m.Qb(0,"th",20),m.rc(1," Modified date "),m.Pb())}function ae(e,t){if(1&e&&(m.Qb(0,"td",21),m.rc(1),m.Pb()),2&e){var n=t.$implicit;m.Ab(1),m.sc(" ",n.updated_at," ")}}function re(e,t){1&e&&m.Lb(0,"tr",22)}function ce(e,t){1&e&&m.Lb(0,"tr",23)}var se,ue,le,be=["eventName","randomUUID","updated_at"],de=[{path:"",component:(se=function(){function e(t,n,i,o,a){u(this,e),this.pwaService=t,this.appInfo=n,this.eventService=i,this.bookingService=o,this.apollo=a,this.eventsTableDataSource=new M.k,this.displayedColumns=be}return o(e,[{key:"ngOnInit",value:function(){console.log("ngOnInit -> ngOnInit");var e=this.bookingService.getNumberOfPersonBookingsForEvent("667c1a54-3c59-4eff-a507-b55a80094249"),t=this.eventService.getEvents();this.subscribeLatestPersonCount(e,"667c1a54-3c59-4eff-a507-b55a80094249"),this.subscribeLatestEvents(t,this.eventsTableDataSource)}},{key:"subscribeLatestPersonCount",value:function(e,t){e.subscribe((function(e){console.log("Event code: ".concat(t," ").concat(JSON.stringify(e)))}));var n=Object(L.b)(e);this.latestCountNumberPersons=n}},{key:"subscribeLatestEvents",value:function(e,t){console.log("Tab1Page:: subscribeLatestEvents"),e.subscribe((function(e){var n=e.data.Event,i=e.errors;(null==i?void 0:i.length)>0||(console.log("%c","background: #444; color: #bada55; padding: 2px; border-radius:24px","Tab1Page:: subscribeLatestEvents -> events",n.length),console.log("%c Tab1Page:: subscribeLatestEvents -> events","background: #444; color: #2dd36f; padding: 2px; border-radius:24px"),t.data=n)}))}},{key:"clickInstallPwa",value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.pwaService;console.log("Tab1Page:: installPwa -> event",e),null===(t=n.deferredInstallPromptEvent)||void 0===t||t.prompt().then((function(e){console.log("Tab1Page:: clickInstallPwa -> installPromiseResolution",e)})).catch((function(){}))}},{key:"clickTestEventHandler",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.eventService;console.log("Tab1Page:: clickTestEventHandler -> event",e),t.createEvent().subscribe((function(e){var t=e.data.insert_Event_one,n=t.randomUUID,i=t.bookingAvailableStartDateTime,o=t.bookingAvailableEndDateTime,a=t.eventStartDateTime,r=t.eventEndDateTime,c=t.eventDateTimeRange,s=t.bookingAvailabilityDateTimeRange,u=t.eventName,l=t.eventTopic,b=t.eventCategory,d=t.eventCapacity,f=t.eventDescription,v=t.eventMedium,m=e.errors;console.log("Tab1Page:: clickTestEventHandler -> errors",m),console.log("Tab1Page:: clickTestEventHandler -> data",n,i,o,a,r,c,s,u,l,b,d,f,v)}))}},{key:"numSelected",get:function(){return 0}}]),e}(),se.\u0275fac=function(e){return new(e||se)(m.Kb(q.a),m.Kb(V),m.Kb(F),m.Kb(L.a),m.Kb($.b))},se.\u0275cmp=m.Eb({type:se,selectors:[["app-tab1"]],decls:40,vars:10,consts:[[3,"translucent"],["color","cobaltblue"],["slot","start"],[2,"padding-inline-start","0.25em"],["slot","end"],[3,"click"],[3,"fullscreen"],[3,"click",4,"ngIf"],["id","EventsTable","mat-table","","matSort","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","eventName"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","randomUUID"],["matColumnDef","updated_at"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["collapse","condense"],["size","large"],[1,"ion-no-border"],["color","secondary"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(e,t){1&e&&(m.Qb(0,"ion-header",0),m.Qb(1,"ion-toolbar",1),m.Qb(2,"ion-buttons",2),m.Lb(3,"app-home-button"),m.Pb(),m.Qb(4,"ion-title",3),m.rc(5," COVIDSafe Event Booking Registry "),m.Pb(),m.Qb(6,"ion-button",4),m.Qb(7,"ion-button",5),m.Yb("click",(function(e){return t.clickTestEventHandler(e)})),m.rc(8,"Test"),m.Pb(),m.Pb(),m.Pb(),m.Pb(),m.Qb(9,"ion-content",6),m.Qb(10,"ion-grid"),m.Qb(11,"ion-row"),m.Qb(12,"ion-col"),m.rc(13," Install button: "),m.qc(14,W,2,0,"ion-button",7),m.Pb(),m.Pb(),m.Qb(15,"ion-row"),m.Qb(16,"ion-col"),m.rc(17),m.dc(18,"async"),m.Pb(),m.Pb(),m.Qb(19,"ion-row"),m.Lb(20,"ion-col"),m.Pb(),m.Pb(),m.Qb(21,"table",8),m.Ob(22,9),m.qc(23,ee,2,0,"th",10),m.qc(24,te,2,1,"td",11),m.Nb(),m.Ob(25,12),m.qc(26,ne,2,0,"th",10),m.qc(27,ie,2,1,"td",11),m.Nb(),m.Ob(28,13),m.qc(29,oe,2,0,"th",10),m.qc(30,ae,2,1,"td",11),m.Nb(),m.qc(31,re,1,0,"tr",14),m.qc(32,ce,1,0,"tr",15),m.Pb(),m.Qb(33,"ion-header",16),m.Qb(34,"ion-toolbar"),m.Qb(35,"ion-title",17),m.rc(36,"Tab 1"),m.Pb(),m.Pb(),m.Pb(),m.Pb(),m.Qb(37,"ion-footer",18),m.Qb(38,"ion-text",19),m.rc(39),m.Pb(),m.Pb()),2&e&&(m.hc("translucent",!0),m.Ab(9),m.hc("fullscreen",!0),m.Ab(5),m.hc("ngIf",t.pwaService.isPwaInstallAvailable),m.Ab(3),m.sc(" Attendees registered: ",m.ec(18,8,t.latestCountNumberPersons)," "),m.Ab(4),m.hc("dataSource",t.eventsTableDataSource),m.Ab(10),m.hc("matHeaderRowDef",t.displayedColumns),m.Ab(1),m.hc("matRowDefColumns",t.displayedColumns),m.Ab(7),m.sc(" v",t.appInfo.appVersion," "))},directives:[l.h,l.t,l.c,X.a,l.s,l.b,l.e,l.g,l.n,l.d,b.j,M.j,Q,M.c,M.e,M.b,M.g,M.i,l.f,l.r,M.d,M.a,M.f,M.h],pipes:[b.b],styles:["table[_ngcontent-%COMP%]{min-width:40em;width:80%}.m-t-xl[_ngcontent-%COMP%]{margin-top:3em}.m-b-xl[_ngcontent-%COMP%]{margin-bottom:3em}.normal-table-heading[_ngcontent-%COMP%]{margin-top:1em}.normal-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:left;padding:.5em}.normal-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.5em}hr[_ngcontent-%COMP%]{margin-top:4em;margin-bottom:2em}"]}),se)}],fe=((le=function e(){u(this,e)}).\u0275mod=m.Ib({type:le}),le.\u0275inj=m.Hb({factory:function(e){return new(e||le)},imports:[[H.i.forChild(de)],H.i]}),le),ve=((ue=function e(){u(this,e)}).\u0275mod=m.Ib({type:ue}),ue.\u0275inj=m.Hb({factory:function(e){return new(e||ue)},imports:[[l.u,b.c,d.f,f.a,s.a,y,k,C,N,M.l,fe]]}),ue)},kiQV:function(e){e.exports=JSON.parse('{"a":"0.0.4"}')}}])}();