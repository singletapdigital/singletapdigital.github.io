(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{hRIL:function(e,o,n){"use strict";n.r(o),n.d(o,"CheckInPageModule",(function(){return v}));var t=n("UKGz"),r=n("SVse"),s=n("s7LF"),c=n("sZkV"),i=n("iInd"),a=n("aDUK"),l=n("8Y7J"),u=n("t0hA"),d=n("lTCR"),U=n.n(d),h=n("nbgS");const k=U.a`
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
        randomUUID
        updated_at
      }
    }
  }
`,g=U.a`
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
        randomUUID
        updated_at
      }
    }
  }
`;let I=(()=>{class e{constructor(e){this.apollo=e}checkInPersonByUUIDs(e,o,n=this.apollo){return n.mutate({mutation:k,variables:{personUUIDEquals:e,eventUUIDEquals:o}})}checkOutPersonByUUIDs(e,o,n=this.apollo){return n.mutate({mutation:g,variables:{personUUIDEquals:e,eventUUIDEquals:o}})}}return e.\u0275fac=function(o){return new(o||e)(l.Qb(h.b))},e.\u0275prov=l.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var b=n("Y+pZ");const p=[{path:"",component:(()=>{class e{constructor(e,o){this.bookingService=e,this.checkInOutService=o,console.log("CheckInPage -> constructor -> bookingService",e),this.getLoadBookingPersonsFromLocalStorage()}ngOnInit(){}getLoadBookingPersonsFromLocalStorage(){const{savedPersonBooking:e,personFormAutofillLast:o}=Object(a.c)();this.savedPersonBooking=e,console.log("CheckInPage -> getLoadBookingPersonsFromLocalStorage -> savedPersonBooking",e),this.personFormAutofillMostRecent=o,console.log("CheckInPage -> getLoadBookingPersonsFromLocalStorage -> personFormAutofillLast",o)}onClickCheckIn(e=this.savedPersonBooking.randomUUID,o=this.personFormAutofillMostRecent.selectedEventUUID,n=this.checkInOutService){n.checkInPersonByUUIDs(e,o).subscribe(({errors:e,data:o})=>{if(void 0!==e||(null==e?void 0:e.length)>0||void 0===o)return console.log("CheckInPage -> ngOnInit -> data",o),console.log("CheckInPage -> ngOnInit -> errors",e),void console.error(e,o);console.log("Check success",o.update_PersonBooking.returning[0].checkInDateTime,o)})}onClickCheckOut(e=this.savedPersonBooking.randomUUID,o=this.personFormAutofillMostRecent.selectedEventUUID,n=this.checkInOutService){n.checkOutPersonByUUIDs(e,o).subscribe(({errors:e,data:o})=>{if(void 0!==e||(null==e?void 0:e.length)>0||void 0===o)return console.log("CheckInPage -> ngOnInit -> data",o),console.log("CheckInPage -> ngOnInit -> errors",e),void console.error(e,o);console.log("Check success",o)})}}return e.\u0275fac=function(o){return new(o||e)(l.Jb(u.a),l.Jb(I))},e.\u0275cmp=l.Db({type:e,selectors:[["app-check-in"]],decls:14,vars:2,consts:[["pageTitle","Check in","isRightAlignedEndButtonHidden","true"],["button","",3,"click"],[3,"click"]],template:function(e,o){1&e&&(l.Mb(0,"ion-header"),l.Kb(1,"app-custom-header",0),l.Lb(),l.Mb(2,"ion-content"),l.Mb(3,"ion-card"),l.Mb(4,"ion-card-content"),l.Mb(5,"ion-item",1),l.Ub("click",(function(){return o.onClickCheckIn()})),l.Mb(6,"ion-label"),l.nc(7," For only most recently registered event test. "),l.Mb(8,"h2"),l.nc(9),l.Lb(),l.Mb(10,"h3"),l.nc(11),l.Lb(),l.Lb(),l.Mb(12,"ion-button",2),l.Ub("click",(function(){return o.onClickCheckOut()})),l.nc(13," Check out "),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb()),2&e&&(l.zb(9),l.pc("PersonUUID: ",o.savedPersonBooking.randomUUID,""),l.zb(2),l.pc(" EventUUID: ",o.personFormAutofillMostRecent.selectedEventUUID," "))},directives:[c.l,b.a,c.j,c.g,c.h,c.o,c.s,c.e],styles:[""]}),e})()}];let m=(()=>{class e{}return e.\u0275mod=l.Hb({type:e}),e.\u0275inj=l.Gb({factory:function(o){return new(o||e)},imports:[[i.i.forChild(p)],i.i]}),e})(),v=(()=>{class e{}return e.\u0275mod=l.Hb({type:e}),e.\u0275inj=l.Gb({factory:function(o){return new(o||e)},imports:[[r.c,s.f,c.A,t.a,m]]}),e})()}}]);