!function(){function n(n,e){for(var o=0;o<e.length;o++){var t=e[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function e(e,o,t){return o&&n(e.prototype,o),t&&n(e,t),e}function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{eNtl:function(n,t,i){"use strict";i.r(t),i.d(t,"BookingPageModule",(function(){return k}));var r,s,b,a=i("UKGz"),c=i("SVse"),u=i("s7LF"),l=i("sZkV"),m=i("iInd"),d=i("mrSG"),f=function n(){o(this,n),this.personFirstName=new u.c("",[u.n.required,u.n.minLength(1)]),this.personLastName=new u.c("",[u.n.required,u.n.minLength(1)]),this.personPhoneNumber=new u.c("",[u.n.required,u.n.minLength(10)]),this.personEmailAddress=new u.c("",[u.n.required,u.n.minLength(1),u.n.email])},p=i("t0hA"),g=i("8Y7J"),h=i("h80k"),P=[{path:"",component:(r=function(){function n(t,i,r){o(this,n),this.bookingService=t,this.formBuilder=i,this.toastController=r;var s=i.group(function(){function n(){o(this,n)}return e(n,null,[{key:"createPersonForm",value:function(){return new f}}]),n}().createPersonForm());this.bookingForm=s}return e(n,[{key:"ngOnInit",value:function(){console.log("BookingPage -> ngOnInit");var n=Object(p.b)(this.bookingService.getNumberOfPersonBookingsForEvent());this.latestPersonsCount=n}},{key:"clickSubmitForm",value:function(n,e){var o=this,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.bookingForm,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.bookingService;console.log("BookingPage:: clickSubmitForm() -> form",n,e,t),i.addPersonToBookingByUUID("445538f0-e22e-4568-acf8-9bc5bba3ceb6",t.value).subscribe((function(n){var e,t;console.log("BookingPage -> clickSubmitForm -> personBookingResult",n),o.presentToast("Successfully saved booking "+JSON.stringify(null===(t=null===(e=null==n?void 0:n.data)||void 0===e?void 0:e.insert_Person)||void 0===t?void 0:t.returning)).catch()}),(function(n){o.presentToast("Error saving "+JSON.stringify(n)).catch()}))}},{key:"presentToast",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Loading...",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.toastController;return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.create({message:n,duration:3500,animated:!0,translucent:!0});case 2:return o.abrupt("return",o.sent.present().then((function(){console.log("Toast presented")})));case 3:case"end":return o.stop()}}),o)})))}}]),n}(),r.\u0275fac=function(n){return new(n||r)(g.Kb(p.a),g.Kb(u.b),g.Kb(l.y))},r.\u0275cmp=g.Eb({type:r,selectors:[["app-booking"]],decls:42,vars:8,consts:[[3,"translucent"],["color","cobaltblue"],["slot","start"],[2,"padding-inline-start","0.25em"],[3,"formGroup","ngSubmit"],["f","ngForm"],[3,"fixed"],["size","7"],["lines","full"],["position","floating"],["formControlName","personFirstName","type","text","required",""],["size","5"],["formControlName","personLastName","type","text","required",""],["size","6"],["formControlName","personPhoneNumber","type","text","required",""],["size","8"],["formControlName","personEmailAddress","type","text","required",""],["type","submit","color","cobaltblue",3,"disabled"],["name","person-add-outline"],["type","submit","mat-button","","color","primary","hidden","",3,"disabled"],["name","document-text"]],template:function(n,e){if(1&n){var o=g.Rb();g.Qb(0,"ion-header",0),g.Qb(1,"ion-toolbar",1),g.Qb(2,"ion-buttons",2),g.Lb(3,"app-home-button"),g.Pb(),g.Qb(4,"ion-title",3),g.rc(5," Booking "),g.Pb(),g.Pb(),g.Pb(),g.Qb(6,"ion-content"),g.Qb(7,"form",4,5),g.Yb("ngSubmit",(function(n){g.lc(o);var t=g.kc(8);return e.clickSubmitForm(t,n)})),g.rc(9),g.dc(10,"async"),g.Qb(11,"ion-grid",6),g.Qb(12,"ion-row"),g.Qb(13,"ion-col",7),g.Qb(14,"ion-item",8),g.Qb(15,"ion-label",9),g.rc(16," First name "),g.Pb(),g.Lb(17,"ion-input",10),g.Pb(),g.Pb(),g.Pb(),g.Qb(18,"ion-row"),g.Qb(19,"ion-col",11),g.Qb(20,"ion-item",8),g.Qb(21,"ion-label",9),g.rc(22," Last name "),g.Pb(),g.Lb(23,"ion-input",12),g.Pb(),g.Pb(),g.Pb(),g.Qb(24,"ion-row"),g.Qb(25,"ion-col",13),g.Qb(26,"ion-item",8),g.Qb(27,"ion-label",9),g.rc(28," Phone number "),g.Pb(),g.Lb(29,"ion-input",14),g.Pb(),g.Pb(),g.Pb(),g.Qb(30,"ion-row"),g.Qb(31,"ion-col",15),g.Qb(32,"ion-item",8),g.Qb(33,"ion-label",9),g.rc(34," Email address "),g.Pb(),g.Lb(35,"ion-input",16),g.Pb(),g.Pb(),g.Pb(),g.Qb(36,"ion-button",17),g.Lb(37,"ion-icon",18),g.rc(38," Add Person to Booking "),g.Pb(),g.Qb(39,"button",19),g.Lb(40,"ion-icon",20),g.rc(41," Add Person (enter) "),g.Pb(),g.Pb(),g.Pb(),g.Pb()}2&n&&(g.hc("translucent",!0),g.Ab(7),g.hc("formGroup",e.bookingForm),g.Ab(2),g.tc(" Current persons count: ",g.ec(10,6,e.latestPersonsCount)," "),g.Ab(2),g.hc("fixed",!0),g.Ab(25),g.hc("disabled",e.bookingForm.invalid),g.Ab(3),g.hc("disabled",e.bookingForm.invalid))},directives:[l.h,l.t,l.c,h.a,l.s,l.e,u.o,u.k,u.e,l.g,l.n,l.d,l.k,l.l,l.j,l.x,u.j,u.d,u.m,l.b,l.i],pipes:[c.b],styles:[""]}),r)}],v=((b=function n(){o(this,n)}).\u0275mod=g.Ib({type:b}),b.\u0275inj=g.Hb({factory:function(n){return new(n||b)},imports:[[m.i.forChild(P)],m.i]}),b),k=((s=function n(){o(this,n)}).\u0275mod=g.Ib({type:s}),s.\u0275inj=g.Hb({factory:function(n){return new(n||s)},imports:[[c.c,u.f,u.l,l.u,a.a,v]]}),s)}}])}();