(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{hRIL:function(e,n,o){"use strict";o.r(n),o.d(n,"CheckInPageModule",(function(){return C}));var t=o("UKGz"),s=o("SVse"),c=o("s7LF"),i=o("sZkV"),r=o("iInd"),a=o("mrSG"),l=o("aDUK"),u=o("IxO4"),d=o("8Y7J"),h=o("t0hA"),g=o("lTCR"),k=o.n(g),b=o("nbgS");const I=k.a`
  mutation PersonCheckIn($personUUIDEquals: uuid!, $eventUUIDEquals: uuid!) {
    update_PersonBooking(
      _set: { checkInDateTime: "now()" }
      where: {
        Person: { randomUUID: { _eq: $personUUIDEquals } }
        Booking: { Event: { randomUUID: { _eq: $eventUUIDEquals } } }
      }
    ) {
      affected_rows
      returning {
        checkInDateTime
        checkOutDateTime
        randomUUID
        updated_at
      }
    }
  }
`,v=k.a`
  mutation PersonCheckOut($personUUIDEquals: uuid!, $eventUUIDEquals: uuid!) {
    update_PersonBooking(
      _set: { checkOutDateTime: "now()" }
      where: {
        Person: { randomUUID: { _eq: $personUUIDEquals } }
        Booking: { Event: { randomUUID: { _eq: $eventUUIDEquals } } }
      }
    ) {
      affected_rows
      returning {
        checkInDateTime
        checkOutDateTime
        randomUUID
        updated_at
      }
    }
  }
`;let m=(()=>{class e{constructor(e){this.apollo=e}checkInPersonByUUIDs(e,n,o=this.apollo){return o.mutate({mutation:I,variables:{personUUIDEquals:e,eventUUIDEquals:n}})}checkOutPersonByUUIDs(e,n,o=this.apollo){return o.mutate({mutation:v,variables:{personUUIDEquals:e,eventUUIDEquals:n}})}}return e.\u0275fac=function(n){return new(n||e)(d.Sb(b.b))},e.\u0275prov=d.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var U=o("Y+pZ");function p(e,n){if(1&e&&(d.Mb(0),d.Ob(1,"h2"),d.qc(2),d.Nb(),d.Lb()),2&e){const e=d.ac();d.zb(2),d.rc(e.personFormAutofillMostRecent.personFirstName)}}function f(e,n){if(1&e&&(d.Ob(0,"h2"),d.qc(1),d.Nb(),d.Ob(2,"h2"),d.qc(3),d.Nb()),2&e){const e=d.ac();d.zb(1),d.rc(null==e.savedPersonBooking||null==e.savedPersonBooking.PersonBookings[0]?null:e.savedPersonBooking.PersonBookings[0].Booking.Event.eventStartDateTime),d.zb(2),d.sc("PersonUUID: ",null==e.savedPersonBooking?null:e.savedPersonBooking.randomUUID,"")}}function D(e,n){1&e&&(d.Mb(0),d.qc(1," Nothing to do \u{1f634}. "),d.Kb(2,"br"),d.qc(3," We have already checked in or are awaiting registration. "),d.Kb(4,"br"),d.qc(5," \u{1f6aa}\u{1f9f3}\u{1f6c4} "),d.Lb())}function P(e,n){if(1&e){const e=d.Pb();d.Ob(0,"ion-button",5),d.Wb("click",(function(){return d.lc(e),d.ac().onClickCheckIn()})),d.Kb(1,"ion-icon",6),d.qc(2," Check in "),d.Nb(),d.Ob(3,"ion-button",7),d.Wb("click",(function(){return d.lc(e),d.ac().onClickCheckOut()})),d.qc(4," Check out "),d.Kb(5,"ion-icon",8),d.Nb()}if(2&e){const e=d.ac();d.gc("hidden",e.isAlreadyCheckedIn||null==e.savedPersonBooking),d.zb(3),d.gc("hidden",e.isAlreadyCheckedOut||null==e.savedPersonBooking)}}const O=[{path:"",component:(()=>{class e{constructor(e,n,o,t){this.datePipe=e,this.toastController=n,this.bookingService=o,this.checkInOutService=t,this.isAlreadyCheckedIn=!1,this.isAlreadyCheckedOut=!1,console.log("CheckInPage -> constructor -> bookingService",o),this.getLoadBookingPersonsFromLocalStorage()}ngOnInit(){}getLoadBookingPersonsFromLocalStorage(){const{savedPersonBooking:e,personFormAutofillLast:n}=Object(l.c)();this.savedPersonBooking=e,console.log("CheckInPage -> getLoadBookingPersonsFromLocalStorage -> savedPersonBooking",e),this.personFormAutofillMostRecent=n,console.log("CheckInPage -> getLoadBookingPersonsFromLocalStorage -> personFormAutofillLast",n)}onClickCheckIn({randomUUID:e,PersonBookings:n}=this.savedPersonBooking,{selectedEventUUID:o}=this.personFormAutofillMostRecent,t=this.checkInOutService){t.checkInPersonByUUIDs(e,o).subscribe(({errors:e,data:o})=>{var t,s,c;if(void 0!==e||(null==e?void 0:e.length)>0||void 0===o)return console.log("CheckInPage -> ngOnInit -> data",o),console.log("CheckInPage -> ngOnInit -> errors",e),void console.error(e,o);const i=null===(s=null===(t=o.update_PersonBooking.returning)||void 0===t?void 0:t[0])||void 0===s?void 0:s.checkInDateTime;console.log("Check in success",i,o);const r=`\u2705Successfully checked in<br />Welcome to ${null===(c=null==n?void 0:n[0])||void 0===c?void 0:c.Booking.Event.eventName}<br />${this.getDateTimeText(i)}`;this.presentToast(r).then(()=>{}).catch(()=>{}),this.isAlreadyCheckedIn=!0})}onClickCheckOut({randomUUID:e}=this.savedPersonBooking,{selectedEventUUID:n,personFirstName:o}=this.personFormAutofillMostRecent,t=this.checkInOutService){t.checkOutPersonByUUIDs(e,n).subscribe(({errors:e,data:n})=>{var t,s;if(void 0!==e||(null==e?void 0:e.length)>0||void 0===n)return console.log("CheckInPage -> ngOnInit -> data",n),console.log("CheckInPage -> ngOnInit -> errors",e),void console.error(e,n);const c=null===(s=null===(t=n.update_PersonBooking.returning)||void 0===t?void 0:t[0])||void 0===s?void 0:s.checkOutDateTime;console.log("Check out success",c,n);const i=`\u{1f3c1}Successfully checked out<br />Have a nice day ${o}\u{1f603}<br />${this.getDateTimeText(c)}`;this.presentToast(i).then(()=>{}).catch(()=>{}),this.isAlreadyCheckedOut=!0,Object(l.d)()})}presentToast(e="",n=this.toastController){return Object(a.a)(this,void 0,void 0,(function*(){return(yield n.create({message:e,duration:3500,animated:!0,translucent:!0})).present().then(()=>{console.log("Toast presented")}).catch(e=>{})}))}getDateTimeText(e,n=this.datePipe){return n.transform(e,u.a)}}return e.\u0275fac=function(n){return new(n||e)(d.Jb(s.e),d.Jb(i.I),d.Jb(h.a),d.Jb(m))},e.\u0275cmp=d.Db({type:e,selectors:[["app-check-in"]],decls:17,vars:5,consts:[["pageTitle","Check in","isRightAlignedEndButtonHidden","true"],["button",""],[4,"ngIf","ngIfElse"],["elseTemplateBookingRegisteredAvailableToCheckin",""],["elseTemplateCheckInOutISAvailable",""],["color","tetradicgreen",3,"hidden","click"],["name","log-in-outline"],["color","cobaltblue",3,"hidden","click"],["name","log-out-outline"]],template:function(e,n){if(1&e&&(d.Ob(0,"ion-header"),d.Kb(1,"app-custom-header",0),d.Nb(),d.Ob(2,"ion-content"),d.Ob(3,"ion-card"),d.Ob(4,"ion-card-content"),d.Ob(5,"ion-item",1),d.Ob(6,"ion-label"),d.qc(7," Recent booking pre-registration "),d.oc(8,p,3,1,"ng-container",2),d.oc(9,f,4,2,"ng-template",null,3,d.pc),d.Ob(11,"h3"),d.qc(12),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Ob(13,"ion-card-content"),d.oc(14,D,6,0,"ng-container",2),d.oc(15,P,6,2,"ng-template",null,4,d.pc),d.Nb(),d.Nb(),d.Nb()),2&e){const e=d.kc(10),o=d.kc(16);d.zb(8),d.gc("ngIf",null==n.savedPersonBooking)("ngIfElse",e),d.zb(4),d.sc(" EventUUID: ",null==n.personFormAutofillMostRecent?null:n.personFormAutofillMostRecent.selectedEventUUID," "),d.zb(2),d.gc("ngIf",null==n.savedPersonBooking)("ngIfElse",o)}},directives:[i.l,U.a,i.j,i.g,i.h,i.o,i.s,s.k,i.e,i.m],styles:[""]}),e})()}];let B=(()=>{class e{}return e.\u0275mod=d.Hb({type:e}),e.\u0275inj=d.Gb({factory:function(n){return new(n||e)},imports:[[r.i.forChild(O)],r.i]}),e})(),C=(()=>{class e{}return e.\u0275mod=d.Hb({type:e}),e.\u0275inj=d.Gb({factory:function(n){return new(n||e)},imports:[[s.c,c.f,i.D,t.a,B]]}),e})()}}]);