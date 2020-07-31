(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{oirr:function(e,t,n){"use strict";n.r(t),n.d(t,"EventsPageModule",(function(){return A}));var i=n("UKGz"),a=n("SVse"),o=n("s7LF"),s=n("sZkV"),r=n("iInd"),c=n("mrSG"),b=n("LRne"),l=n("IzEk"),v=n("lJxs"),m=n("pLZG"),d=n("ZTNX"),u=n("IxO4"),p=n("8Y7J"),g=n("RXPq"),h=n("lTCR"),E=n.n(h),D=n("Ok9p"),O=n("nbgS");const f=E.a`
  # Get all future events.
  # Default just in case dumb hasura behaviour doesn't return EventRooms but somehow returns Events depending on presence of comparison exp
  subscription GetAllEvents($eventEndDateTimeGreaterThanEqual: timestamptz = "2020-07-28") {
    Event(
      where: { eventEndDateTime: { _gte: $eventEndDateTimeGreaterThanEqual } }
      limit: 20
      order_by: { eventStartDateTime: asc, eventName: asc, bookingAvailableStartDateTime: asc }
    ) {
      eventName
      eventDescription
      eventCapacity
      eventStartDateTime
      eventEndDateTime
      bookingAvailableStartDateTime
      bookingAvailableEndDateTime
      randomUUID
      updated_at
      EventRooms {
        roomName
        eventRoomUUID
        eventRoomDetails
      }
    }
  }
`,T=E.a`
  mutation CreateEvent($eventInsertObject: Event_insert_input! = {}) {
    insert_Event_one(object: $eventInsertObject) {
      randomUUID
      bookingAvailableStartDateTime
      bookingAvailableEndDateTime
      eventStartDateTime
      eventEndDateTime
      eventDateTimeRange
      bookingAvailabilityDateTimeRange
      eventName
      eventTopic
      eventCategory
      eventCapacity
      eventDescription
      eventMedium
    }
  }
`,k=E.a`
  mutation CreateEvents(
    $eventInsertObjects: [Event_insert_input!]! = [
      {
        EventSeries: { data: { eventSeriesDetails: "Sunday service (English)", eventSeriesName: "Sunday worship" } }
        Organiser: { data: { randomUUID: "b669fc76-3130-4c4e-a04e-49e9f067ea9c" } }
      }
    ]
  ) {
    insert_Event(objects: $eventInsertObjects) {
      affected_rows
      returning {
        eventName
        eventCapacity
        eventStartDateTime
        eventEndDateTime
        bookingAvailableStartDateTime
        bookingAvailableEndDateTime
      }
    }
  }
`;let P=(()=>{class e{constructor(e){this.apollo=e}getEvents(e=Object(d.e)(),t=this.apollo){return t.subscribe({query:f,fetchPolicy:"cache-first",variables:{eventEndDateTimeGreaterThanEqual:e}})}getSeedEventInputObjects(){const e=Object(u.e)(a.o.Sunday,9,0),t=Object(u.e)(a.o.Sunday,10,30),n=Object(u.e)(a.o.Wednesday,0,0),i=Object(u.e)(a.o.Sunday,23,59,59,999),o=Object(u.d)(e,t,n,i).map(({eventStartEndDateTime:{startDateTime:e,endDateTime:t,startEndDateTimeRangeTstzRangeText:n},bookingStartEndDateTime:{startDateTime:i,endDateTime:a,startEndDateTimeRangeTstzRangeText:o}})=>[y("English hall","English hall for live stream and in-person services",i,a,o,e,t,n,"Sunday service",40,"Description of community event","Church"),y("Chinese hall","Chinese main hall for live stream and in-person services",i,a,o,e,t,n,"\u4e3b\u65e5\u5d07\u62dc",40,"Description of community event","Church")]);return[].concat(...o)}createEvents(e,t=this.apollo){return t.mutate({mutation:k,variables:{eventInsertObjects:e}})}createEvent(e=this.apollo){const t=new Date,n=new Date(t.getTime()-Object(u.b)(2)),i=new Date(t.getTime()+Object(u.b)(7)),a=new Date(t.getTime()+Object(u.b)(9)),o=new Date(t.getTime()+Object(u.b)(10)),s=(new Date(t.getTime()+Object(u.b)(10)),y("English hall","English hall for live stream and in-person services",n,i,Object(u.c)(n,i),a,o,Object(u.c)(a,o)));return e.mutate({mutation:T,variables:{eventInsertObject:s}})}}return e.\u0275fac=function(t){return new(t||e)(p.Tb(O.b))},e.\u0275prov=p.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function y(e,t,n,i,a,o,s,r,c="Sunday service",b=40,l="Description of community event",v="Church",m="b669fc76-3130-4c4e-a04e-49e9f067ea9c"){return{bookingAvailableStartDateTime:n,bookingAvailableEndDateTime:i,bookingAvailabilityDateTimeRange:a,eventStartDateTime:o,eventEndDateTime:s,eventDateTimeRange:r,eventName:c,eventTopic:"Topic",eventMedium:"In-person",eventCategory:v,eventCapacity:b,eventDescription:l,Organiser:{data:{randomUUID:m,organiserDetails:""},on_conflict:{constraint:D.g.Organiser_randomUUID_key,update_columns:[D.h.updated_at]}},EventRooms:{data:[{eventRoomDetails:t,Room:{data:{roomName:e,roomType:"Hall",roomCapacity:49,Venue:{data:{venueName:"Eight Mile Plains Chinese Methodist Church",randomUUID:"9cb826dc-fcf8-406e-8b01-f4eba15dfcc6"},on_conflict:{constraint:D.o.Venue_randomUUID_key,update_columns:[D.p.updated_at]}}},on_conflict:{constraint:D.k.Room_venueID_roomName_key,update_columns:[D.l.updated_at]}}}],on_conflict:{constraint:D.c.EventRoom_eventRoomID_eventID_roomID_venueID_roomName_event_key,update_columns:[D.d.updated_at]}}}}var _=n("t0hA"),S=n("Y+pZ"),I=n("L1O8");function j(e,t){1&e&&p.Kb(0,"ion-progress-bar",4)}function w(e,t){if(1&e){const e=p.Qb();p.Pb(0,"ion-item-sliding"),p.Pb(1,"ion-item-options"),p.Pb(2,"ion-item-option",5),p.rc(3,"Check "),p.Ob(),p.Ob(),p.Pb(4,"ion-item",6),p.Xb("click",(function(n){p.mc(e);const i=t.$implicit;return p.bc().clickEventItem(n,i)})),p.Pb(5,"ion-avatar",7),p.Kb(6,"img",8),p.Ob(),p.Pb(7,"ion-label",9),p.Pb(8,"h2"),p.rc(9),p.Ob(),p.Pb(10,"h3"),p.rc(11),p.Ob(),p.Pb(12,"p"),p.rc(13),p.cc(14,"date"),p.cc(15,"date"),p.Ob(),p.Ob(),p.Ob(),p.Ob()}if(2&e){const e=t.$implicit,n=p.bc();p.zb(4),p.ic("color",n.isBookingAvailableForEvent(e)?"":"light"),p.hc("button",n.isBookingAvailableForEvent(e)),p.zb(3),p.ic("color",n.isBookingAvailableForEvent(e)?"":"medium"),p.zb(2),p.sc(null==e?null:e.eventName),p.zb(2),p.sc(null==e||null==e.EventRooms[0]?null:e.EventRooms[0].roomName),p.zb(2),p.uc(" ",p.ec(14,7,e.eventStartDateTime,"EEEE',' dd MMM HH:mm"),"\u2013",p.ec(15,10,e.eventEndDateTime,"HH:mm")," ")}}function x(e,t){1&e&&(p.Pb(0,"div"),p.Pb(1,"div",10),p.Kb(2,"ion-skeleton-text",11),p.Kb(3,"ion-skeleton-text",12),p.Kb(4,"ion-skeleton-text",13),p.Kb(5,"ion-skeleton-text",14),p.Kb(6,"ion-skeleton-text",11),p.Ob(),p.Pb(7,"ion-list"),p.Pb(8,"ion-list-header"),p.Pb(9,"ion-label"),p.Kb(10,"ion-skeleton-text",15),p.Ob(),p.Ob(),p.Pb(11,"ion-item"),p.Pb(12,"ion-avatar",7),p.Kb(13,"ion-skeleton-text",12),p.Ob(),p.Pb(14,"ion-label"),p.Pb(15,"h3"),p.Kb(16,"ion-skeleton-text",16),p.Ob(),p.Pb(17,"p"),p.Kb(18,"ion-skeleton-text",17),p.Ob(),p.Pb(19,"p"),p.Kb(20,"ion-skeleton-text",11),p.Ob(),p.Ob(),p.Ob(),p.Pb(21,"ion-item"),p.Pb(22,"ion-thumbnail",7),p.Kb(23,"ion-skeleton-text",12),p.Ob(),p.Pb(24,"ion-label"),p.Pb(25,"h3"),p.Kb(26,"ion-skeleton-text",16),p.Ob(),p.Pb(27,"p"),p.Kb(28,"ion-skeleton-text",17),p.Ob(),p.Pb(29,"p"),p.Kb(30,"ion-skeleton-text",11),p.Ob(),p.Ob(),p.Ob(),p.Pb(31,"ion-item"),p.Kb(32,"ion-skeleton-text",18),p.Pb(33,"ion-label"),p.Pb(34,"h3"),p.Kb(35,"ion-skeleton-text",16),p.Ob(),p.Pb(36,"p"),p.Kb(37,"ion-skeleton-text",17),p.Ob(),p.Pb(38,"p"),p.Kb(39,"ion-skeleton-text",11),p.Ob(),p.Ob(),p.Ob(),p.Ob(),p.Ob())}function R({bookingAvailableStartDateTime:e}){return function(e,t=new Date(e)){return function(e,t=(new Date).getTime()){return void 0!==e&&t>e.getTime()}(t)}(e)}const C=[{path:"",component:(()=>{class e{constructor(e,t,n,i,a,o){this.router=e,this.pwaService=t,this.datePipe=n,this.toastController=i,this.eventService=a,this.bookingService=o,this.upcomingEvents=Object(b.a)([]),this.isLoading=!0}ngOnInit(){this.upcomingEvents=this.getLatestEvents(),this.upcomingEvents.pipe(Object(l.a)(1)).subscribe(e=>{this.isLoading=!1})}getLatestEvents(e=this.eventService){return e.getEvents().pipe(Object(v.a)(e=>{const{data:{},errors:t}=e;if(!((null==t?void 0:t.length)>0))return console.log("%c EventsPage:: subscribeLatestEvents -> events",d.a),e.data.Event}),Object(m.a)(e=>{var t,n,i;return void 0!==e&&void 0!==(null===(t=e[0])||void 0===t?void 0:t.EventRooms)&&void 0!==(null===(i=null===(n=e[0])||void 0===n?void 0:n.EventRooms[0])||void 0===i?void 0:i.roomName)}))}clickEventItem(e,t,n=this.router){if(R(t))this.navigateToBooking(t,n);else{const e=this.datePipe.transform(t.bookingAvailableStartDateTime,u.a);this.presentToast(`Booking is currently unavailable for ${t.eventName} <br />Please check back on ${e}`).then(e=>{}).catch(e=>{})}}navigateToBooking(e,t){t.navigate(["/booking"],{state:e}).then(e=>{}).catch(e=>{})}clickTestButton(e){this.seedEvents()}seedEvents(e=this.eventService){const t=e.getSeedEventInputObjects();e.createEvents(t).subscribe(e=>{})}isBookingAvailableForEvent(e){return void 0!==e&&R(e)}presentToast(e="",t=this.toastController){return Object(c.a)(this,void 0,void 0,(function*(){return(yield t.create({message:e,duration:3500,animated:!0,translucent:!0})).present().then(()=>{})}))}}return e.\u0275fac=function(t){return new(t||e)(p.Jb(r.g),p.Jb(g.a),p.Jb(a.e),p.Jb(s.M),p.Jb(P),p.Jb(_.a))},e.\u0275cmp=p.Db({type:e,selectors:[["app-events"]],decls:10,vars:6,consts:[["pageTitle","COVIDSafe Events",3,"isRightAlignedEndButtonHidden"],["value","0.25","buffer","0.50",4,"ngIf"],[4,"ngFor","ngForOf"],[4,"ngIf"],["value","0.25","buffer","0.50"],["color","danger"],[3,"button","color","click"],["slot","start"],["src","/assets/images/emp-cmca-logo-small-172x172-placeholder.jpg","alt","Placeholder-image-church"],[3,"color"],[1,"ion-padding","custom-skeleton"],["animated","",2,"width","60%"],["animated",""],["animated","",2,"width","88%"],["animated","",2,"width","70%"],["animated","",2,"width","20%"],["animated","",2,"width","50%"],["animated","",2,"width","80%"],["animated","","slot","start",2,"width","27px","height","27px"]],template:function(e,t){1&e&&(p.Kb(0,"app-custom-header",0),p.Kb(1,"app-check-in-floating-button"),p.Pb(2,"ion-content"),p.Pb(3,"ion-list"),p.Pb(4,"ion-list-header"),p.rc(5,"Upcoming events"),p.Ob(),p.pc(6,j,1,0,"ion-progress-bar",1),p.pc(7,w,16,13,"ion-item-sliding",2),p.cc(8,"async"),p.Ob(),p.pc(9,x,40,0,"div",3),p.Ob()),2&e&&(p.hc("isRightAlignedEndButtonHidden",!0),p.zb(6),p.hc("ngIf",t.isLoading),p.zb(1),p.hc("ngForOf",p.dc(8,4,t.upcomingEvents)),p.zb(2),p.hc("ngIf",t.isLoading))},directives:[S.a,I.a,s.k,s.x,s.y,a.k,a.j,s.z,s.v,s.u,s.t,s.s,s.b,s.w,s.C,s.E],pipes:[a.b,a.e],styles:[""]}),e})()}];let K=(()=>{class e{}return e.\u0275mod=p.Hb({type:e}),e.\u0275inj=p.Gb({factory:function(t){return new(t||e)},imports:[[r.i.forChild(C)],r.i]}),e})(),A=(()=>{class e{}return e.\u0275mod=p.Hb({type:e}),e.\u0275inj=p.Gb({factory:function(t){return new(t||e)},imports:[[a.c,o.g,s.H,i.a,K]]}),e})()}}]);