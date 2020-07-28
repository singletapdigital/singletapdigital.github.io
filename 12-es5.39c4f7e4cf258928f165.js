!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{eNtl:function(o,t,i){"use strict";i.r(t),i.d(t,"BookingPageModule",(function(){return E}));var r=i("pMoy"),s=i("UKGz"),a=i("SVse"),c=i("s7LF"),l=i("sZkV"),b=i("iInd"),u=i("mrSG"),d=i("jp9Y"),h=i("t0hA"),g=i("8Y7J"),m=i("h80k"),p=i("T/V+");function f(e,n){if(1&e&&(g.Mb(0,"div"),g.Mb(1,"ion-button",18),g.Kb(2,"ion-icon",19),g.nc(3," Add Person to Booking "),g.Lb(),g.Mb(4,"button",20),g.Kb(5,"ion-icon",21),g.nc(6," Add Person (enter) "),g.Lb(),g.Lb()),2&e){var o=g.Yb();g.zb(1),g.ec("disabled",o.bookingForm.invalid),g.zb(3),g.ec("disabled",o.bookingForm.invalid)}}function v(e,n){if(1&e){var o=g.Nb();g.Mb(0,"div"),g.Mb(1,"ion-button",22),g.Ub("click",(function(e){g.ic(o);var n=g.Yb(),t=g.hc(8);return n.clickSubmitForm(n.selectedEventUUID,t,e)})),g.nc(2," Register for Sunday service (Chinese hall) "),g.Lb(),g.Lb()}if(2&e){var t=g.Yb();g.zb(1),g.ec("disabled",t.bookingForm.invalid)}}function k(e,n){1&e&&(g.Mb(0,"ion-text",23),g.nc(1," Registrations reached maximum capacity "),g.Lb())}var C,L,y,M=[{path:"",component:(C=function(){function o(n,t,i){e(this,o),this.bookingService=n,this.formBuilder=t,this.toastController=i,this.selectedEventUUID="",this.selectedEventName="",this.bookingChineseUUID="445538f0-e22e-4568-acf8-9bc5bba3ceb6",this.bookingEnglishUUID="81508052-8691-4ff4-a3ef-c36bf7fccc88",this.eventChineseUUID="667c1a54-3c59-4eff-a507-b55a80094249",this.eventEnglishUUID="f883134b-661a-4388-b677-582bc2ea39aa",this.latestPersonsEnglishCap=49,this.latestPersonsChineseCap=49;var r=t.group(d.a.createPersonForm());this.bookingForm=r}var t,i,r;return t=o,(i=[{key:"ngOnInit",value:function(){var e=this;console.log("BookingPage -> ngOnInit");var n=Object(h.b)(this.bookingService.getNumberOfPersonBookingsForEvent());this.latestPersonsCountChinese=n,n.subscribe((function(n){e.chineseCount=n}));var o=Object(h.b)(this.bookingService.getNumberOfPersonBookingsForEvent(this.eventEnglishUUID));this.latestPersonsCountEnglish=o,o.subscribe((function(n){return e.englishCount=n}))}},{key:"clickSubmitForm",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"445538f0-e22e-4568-acf8-9bc5bba3ceb6",o=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.bookingForm,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.bookingService;n===this.bookingEnglishUUID?this.englishCount+=1:this.chineseCount+=1,console.log("BookingPage:: clickSubmitForm() -> form",o,t,i);var s=i.value;""!==s.personFirstName?(o.control.setErrors({invalid:"Saving form..."}),r.addPersonToBookingByUUID(n,s).subscribe((function(n){var o,t,i,r;console.log("BookingPage -> clickSubmitForm -> personBookingResult",n),e.presentToast("Successfully saved booking "+(null===(r=null===(i=null===(t=null===(o=null==n?void 0:n.data)||void 0===o?void 0:o.insert_Person)||void 0===t?void 0:t.returning)||void 0===i?void 0:i[0])||void 0===r?void 0:r.personFirstName)).catch(),e.resetRecreateForm()}),(function(n){e.presentToast("Error saving "+JSON.stringify(n)).catch()}))):this.presentToast("Invalid inputs detected").catch()}},{key:"resetRecreateForm",value:function(){var e=this.formBuilder.group(d.a.createPersonForm());this.bookingForm=e}},{key:"presentToast",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Loading...",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.toastController;return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.create({message:e,duration:3500,animated:!0,translucent:!0});case 2:return o.abrupt("return",o.sent.present().then((function(){console.log("Toast presented")})));case 3:case"end":return o.stop()}}),o)})))}},{key:"compare",value:function(e,n){return e<n}},{key:"isEnglishCountCappedLocked",get:function(){return this.englishCount>=this.latestPersonsEnglishCap}},{key:"isChineseCountCappedLocked",get:function(){return this.chineseCount>=this.latestPersonsChineseCap}},{key:"isRegistrationAllowedEnglishCountBelowCap",get:function(){return!this.isEnglishCountCappedLocked}},{key:"isRegistrationAllowedChineseCountBelowCap",get:function(){return!this.isChineseCountCappedLocked}}])&&n(t.prototype,i),r&&n(t,r),o}(),C.\u0275fac=function(e){return new(e||C)(g.Jb(h.a),g.Jb(c.b),g.Jb(l.E))},C.\u0275cmp=g.Db({type:C,selectors:[["app-booking"]],decls:42,vars:6,consts:[[3,"translucent"],["color","cobaltblue"],["slot","start"],[2,"padding-inline-start","0.25em"],[3,"formGroup"],["f","ngForm"],[2,"color","gray"],["col-12","","col-sm-9","","col-md-6","","col-lg-4","","col-xl-3",""],["position","floating"],["formControlName","personFirstName","type","text","placeholder","First name for registration, check in and contact-tracing purposes","required",""],["formControlName","personLastName","type","text","placeholder","Your last name","required",""],["sizeXl","2","sizeLg","2.2","sizeMd","2.5","sizeSm","4","sizeXs","5.6"],["formControlName","personPhoneNumber","type","tel","placeholder","0412345678","size","12","required",""],["formControlName","personEmailAddress","type","text","placeholder","info@example.com","required",""],[3,"eventName"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["maxedChinese",""],["type","button","color","cobaltblue",3,"disabled"],["name","person-add-outline"],["type","button","mat-button","","color","primary","hidden","",3,"disabled"],["name","document-text"],["type","button","color","brightnavyblue",3,"disabled","click"],["color","warning"]],template:function(e,n){if(1&e&&(g.Mb(0,"ion-header",0),g.Mb(1,"ion-toolbar",1),g.Mb(2,"ion-buttons",2),g.Kb(3,"app-home-button"),g.Lb(),g.Mb(4,"ion-title",3),g.nc(5," Booking "),g.Lb(),g.Lb(),g.Lb(),g.Mb(6,"ion-content"),g.Mb(7,"form",4,5),g.Mb(9,"ion-grid"),g.Mb(10,"ion-row",6),g.Mb(11,"ion-col"),g.nc(12," Test"),g.Lb(),g.Lb(),g.Mb(13,"ion-row"),g.Mb(14,"ion-col",7),g.Mb(15,"ion-label",8),g.nc(16," First name "),g.Lb(),g.Kb(17,"ion-input",9),g.Lb(),g.Lb(),g.Mb(18,"ion-row"),g.Mb(19,"ion-col"),g.Mb(20,"ion-label",8),g.nc(21," Last name "),g.Lb(),g.Kb(22,"ion-input",10),g.Lb(),g.Lb(),g.Mb(23,"ion-row"),g.Mb(24,"ion-col",11),g.Mb(25,"ion-label",8),g.nc(26," Phone number "),g.Lb(),g.Kb(27,"ion-input",12),g.Lb(),g.Lb(),g.Mb(28,"ion-row"),g.Mb(29,"ion-col"),g.Mb(30,"ion-label",8),g.nc(31," Email address "),g.Lb(),g.Kb(32,"ion-input",13),g.Lb(),g.Lb(),g.Kb(33,"app-covid-declaration",14),g.Mb(34,"ion-row"),g.Mb(35,"ion-col"),g.lc(36,f,7,2,"div",15),g.Lb(),g.Lb(),g.Mb(37,"ion-row"),g.Mb(38,"ion-col"),g.lc(39,v,3,1,"div",16),g.Lb(),g.Lb(),g.lc(40,k,2,0,"ng-template",null,17,g.mc),g.Lb(),g.Lb(),g.Lb()),2&e){var o=g.hc(41);g.ec("translucent",!0),g.zb(7),g.ec("formGroup",n.bookingForm),g.zb(26),g.ec("eventName",n.selectedEventName),g.zb(3),g.ec("ngIf",n.isRegistrationAllowedEnglishCountBelowCap&&n.isRegistrationAllowedChineseCountBelowCap),g.zb(3),g.ec("ngIf",n.latestPersonsCountEnglish)("ngIfElse",o)}},directives:[l.l,l.z,l.f,m.a,l.y,l.j,c.o,c.k,c.e,l.k,l.w,l.i,l.s,l.n,l.D,c.j,c.d,c.m,p.a,a.k,l.e,l.m,l.x],styles:[""]}),C)}],w=((y=function n(){e(this,n)}).\u0275mod=g.Hb({type:y}),y.\u0275inj=g.Gb({factory:function(e){return new(e||y)},imports:[[b.i.forChild(M)],b.i]}),y),E=((L=function n(){e(this,n)}).\u0275mod=g.Hb({type:L}),L.\u0275inj=g.Gb({factory:function(e){return new(e||L)},imports:[[a.c,c.f,c.l,l.A,s.a,r.b,w]]}),L)}}])}();