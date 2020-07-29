!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{eNtl:function(o,t,i){"use strict";i.r(t),i.d(t,"BookingPageModule",(function(){return E}));var r=i("pMoy"),s=i("UKGz"),a=i("SVse"),c=i("s7LF"),l=i("sZkV"),b=i("iInd"),u=i("mrSG"),d=i("jp9Y"),g=i("t0hA"),h=i("8Y7J"),p=i("h80k"),f=i("T/V+");function m(e,n){if(1&e&&(h.Ob(0,"div"),h.Ob(1,"ion-button",18),h.Kb(2,"ion-icon",19),h.qc(3," Add Person to Booking "),h.Nb(),h.Ob(4,"button",20),h.Kb(5,"ion-icon",21),h.qc(6," Add Person (enter) "),h.Nb(),h.Nb()),2&e){var o=h.ac();h.zb(1),h.gc("disabled",o.bookingForm.invalid),h.zb(3),h.gc("disabled",o.bookingForm.invalid)}}function v(e,n){if(1&e){var o=h.Pb();h.Ob(0,"div"),h.Ob(1,"ion-button",22),h.Wb("click",(function(e){h.lc(o);var n=h.ac(),t=h.kc(8);return n.clickSubmitForm(n.selectedEventUUID,t,e)})),h.qc(2," Register for Sunday service (Chinese hall) "),h.Nb(),h.Nb()}if(2&e){var t=h.ac();h.zb(1),h.gc("disabled",t.bookingForm.invalid)}}function k(e,n){1&e&&(h.Ob(0,"ion-text",23),h.qc(1," Registrations reached maximum capacity "),h.Nb())}var C,N,O,y=[{path:"",component:(C=function(){function o(n,t,i){e(this,o),this.bookingService=n,this.formBuilder=t,this.toastController=i,this.selectedEventUUID="",this.selectedEventName="",this.bookingChineseUUID="445538f0-e22e-4568-acf8-9bc5bba3ceb6",this.bookingEnglishUUID="81508052-8691-4ff4-a3ef-c36bf7fccc88",this.eventChineseUUID="667c1a54-3c59-4eff-a507-b55a80094249",this.eventEnglishUUID="f883134b-661a-4388-b677-582bc2ea39aa",this.latestPersonsEnglishCap=49,this.latestPersonsChineseCap=49;var r=t.group(d.a.createPersonForm());this.bookingForm=r}var t,i,r;return t=o,(i=[{key:"ngOnInit",value:function(){var e=this;console.log("BookingPage -> ngOnInit");var n=Object(g.b)(this.bookingService.getNumberOfPersonBookingsForEvent());this.latestPersonsCountChinese=n,n.subscribe((function(n){e.chineseCount=n}));var o=Object(g.b)(this.bookingService.getNumberOfPersonBookingsForEvent(this.eventEnglishUUID));this.latestPersonsCountEnglish=o,o.subscribe((function(n){return e.englishCount=n}))}},{key:"clickSubmitForm",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"445538f0-e22e-4568-acf8-9bc5bba3ceb6",o=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.bookingForm,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.bookingService;n===this.bookingEnglishUUID?this.englishCount+=1:this.chineseCount+=1,console.log("BookingPage:: clickSubmitForm() -> form",o,t,i);var s=i.value;""!==s.personFirstName?(o.control.setErrors({invalid:"Saving form..."}),r.addPersonToBookingByUUID(n,s).subscribe((function(n){var o,t,i,r;console.log("BookingPage -> clickSubmitForm -> personBookingResult",n),e.presentToast("Successfully saved booking "+(null===(r=null===(i=null===(t=null===(o=null==n?void 0:n.data)||void 0===o?void 0:o.insert_Person)||void 0===t?void 0:t.returning)||void 0===i?void 0:i[0])||void 0===r?void 0:r.personFirstName)).catch(),e.resetRecreateForm()}),(function(n){e.presentToast("Error saving "+JSON.stringify(n)).catch()}))):this.presentToast("Invalid inputs detected").catch()}},{key:"resetRecreateForm",value:function(){var e=this.formBuilder.group(d.a.createPersonForm());this.bookingForm=e}},{key:"presentToast",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Loading...",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.toastController;return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.create({message:e,duration:3500,animated:!0,translucent:!0});case 2:return o.abrupt("return",o.sent.present().then((function(){console.log("Toast presented")})));case 3:case"end":return o.stop()}}),o)})))}},{key:"compare",value:function(e,n){return e<n}},{key:"isEnglishCountCappedLocked",get:function(){return this.englishCount>=this.latestPersonsEnglishCap}},{key:"isChineseCountCappedLocked",get:function(){return this.chineseCount>=this.latestPersonsChineseCap}},{key:"isRegistrationAllowedEnglishCountBelowCap",get:function(){return!this.isEnglishCountCappedLocked}},{key:"isRegistrationAllowedChineseCountBelowCap",get:function(){return!this.isChineseCountCappedLocked}}])&&n(t.prototype,i),r&&n(t,r),o}(),C.\u0275fac=function(e){return new(e||C)(h.Jb(g.a),h.Jb(c.b),h.Jb(l.I))},C.\u0275cmp=h.Db({type:C,selectors:[["app-booking"]],decls:42,vars:6,consts:[[3,"translucent"],["color","cobaltblue"],["slot","start"],[2,"padding-inline-start","0.25em"],[3,"formGroup"],["f","ngForm"],[2,"color","gray"],["col-12","","col-sm-9","","col-md-6","","col-lg-4","","col-xl-3",""],["position","floating"],["formControlName","personFirstName","type","text","placeholder","First name for registration, check in and contact-tracing purposes","required",""],["formControlName","personLastName","type","text","placeholder","Your last name","required",""],["sizeXl","2","sizeLg","2.2","sizeMd","2.5","sizeSm","4","sizeXs","5.6"],["formControlName","personPhoneNumber","type","tel","placeholder","0412345678","size","12","required",""],["formControlName","personEmailAddress","type","text","placeholder","info@example.com","required",""],[3,"eventName"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["maxedChinese",""],["type","button","color","cobaltblue",3,"disabled"],["name","person-add-outline"],["type","button","mat-button","","color","primary","hidden","",3,"disabled"],["name","document-text"],["type","button","color","brightnavyblue",3,"disabled","click"],["color","warning"]],template:function(e,n){if(1&e&&(h.Ob(0,"ion-header",0),h.Ob(1,"ion-toolbar",1),h.Ob(2,"ion-buttons",2),h.Kb(3,"app-home-button"),h.Nb(),h.Ob(4,"ion-title",3),h.qc(5," Booking "),h.Nb(),h.Nb(),h.Nb(),h.Ob(6,"ion-content"),h.Ob(7,"form",4,5),h.Ob(9,"ion-grid"),h.Ob(10,"ion-row",6),h.Ob(11,"ion-col"),h.qc(12," Test"),h.Nb(),h.Nb(),h.Ob(13,"ion-row"),h.Ob(14,"ion-col",7),h.Ob(15,"ion-label",8),h.qc(16," First name "),h.Nb(),h.Kb(17,"ion-input",9),h.Nb(),h.Nb(),h.Ob(18,"ion-row"),h.Ob(19,"ion-col"),h.Ob(20,"ion-label",8),h.qc(21," Last name "),h.Nb(),h.Kb(22,"ion-input",10),h.Nb(),h.Nb(),h.Ob(23,"ion-row"),h.Ob(24,"ion-col",11),h.Ob(25,"ion-label",8),h.qc(26," Phone number "),h.Nb(),h.Kb(27,"ion-input",12),h.Nb(),h.Nb(),h.Ob(28,"ion-row"),h.Ob(29,"ion-col"),h.Ob(30,"ion-label",8),h.qc(31," Email address "),h.Nb(),h.Kb(32,"ion-input",13),h.Nb(),h.Nb(),h.Kb(33,"app-covid-declaration",14),h.Ob(34,"ion-row"),h.Ob(35,"ion-col"),h.oc(36,m,7,2,"div",15),h.Nb(),h.Nb(),h.Ob(37,"ion-row"),h.Ob(38,"ion-col"),h.oc(39,v,3,1,"div",16),h.Nb(),h.Nb(),h.oc(40,k,2,0,"ng-template",null,17,h.pc),h.Nb(),h.Nb(),h.Nb()),2&e){var o=h.kc(41);h.gc("translucent",!0),h.zb(7),h.gc("formGroup",n.bookingForm),h.zb(26),h.gc("eventName",n.selectedEventName),h.zb(3),h.gc("ngIf",n.isRegistrationAllowedEnglishCountBelowCap&&n.isRegistrationAllowedChineseCountBelowCap),h.zb(3),h.gc("ngIf",n.latestPersonsCountEnglish)("ngIfElse",o)}},directives:[l.l,l.C,l.f,p.a,l.B,l.j,c.o,c.k,c.e,l.k,l.x,l.i,l.s,l.n,l.H,c.j,c.d,c.m,f.a,a.k,l.e,l.m,l.z],styles:[""]}),C)}],w=((O=function n(){e(this,n)}).\u0275mod=h.Hb({type:O}),O.\u0275inj=h.Gb({factory:function(e){return new(e||O)},imports:[[b.i.forChild(y)],b.i]}),O),E=((N=function n(){e(this,n)}).\u0275mod=h.Hb({type:N}),N.\u0275inj=h.Gb({factory:function(e){return new(e||N)},imports:[[a.c,c.f,c.l,l.D,s.a,r.b,w]]}),N)}}])}();