(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{oirr:function(e,t,n){"use strict";n.r(t),n.d(t,"EventsPageModule",(function(){return K}));var o=n("UKGz"),i=n("SVse"),a=n("s7LF"),s=n("sZkV"),r=n("iInd"),c=n("mrSG"),l=n("LRne"),b=n("IzEk"),v=n("lJxs"),m=n("pLZG"),d=n("ZTNX"),u=n("IxO4"),g=n("8Y7J"),p=n("RXPq"),E=n("lTCR"),h=n.n(E),D=n("Ok9p"),O=n("nbgS");const k=h.a`
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
`,f=h.a`
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
`,T=h.a`
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
`;let N=(()=>{class e{constructor(e){this.apollo=e,console.log("EventService -> constructor ")}getEvents(e=Object(d.e)(),t=this.apollo){return t.subscribe({query:k,fetchPolicy:"cache-first",variables:{eventEndDateTimeGreaterThanEqual:e}})}getSeedEventInputObjects(){const e=Object(u.e)(i.o.Sunday,9,0),t=Object(u.e)(i.o.Sunday,10,30),n=Object(u.e)(i.o.Wednesday,0,0),o=Object(u.e)(i.o.Sunday,23,59,59,999),a=Object(u.d)(e,t,n,o);console.log("EventService -> getSeedEventInputObjects -> recurringDates",a);const s=a.map(({eventStartEndDateTime:{startDateTime:e,endDateTime:t,startEndDateTimeRangeTstzRangeText:n},bookingStartEndDateTime:{startDateTime:o,endDateTime:i,startEndDateTimeRangeTstzRangeText:a}})=>[I("English hall","English hall for live stream and in-person services",o,i,a,e,t,n,"Sunday service",40,"Description of community event","Church"),I("Chinese hall","Chinese main hall for live stream and in-person services",o,i,a,e,t,n,"\u4e3b\u65e5\u5d07\u62dc",40,"Description of community event","Church")]);return[].concat(...s)}createEvents(e,t=this.apollo){return t.mutate({mutation:T,variables:{eventInsertObjects:e}})}createEvent(e=this.apollo){const t=new Date,n=new Date(t.getTime()-Object(u.b)(2)),o=new Date(t.getTime()+Object(u.b)(7)),i=new Date(t.getTime()+Object(u.b)(9)),a=new Date(t.getTime()+Object(u.b)(10)),s=(new Date(t.getTime()+Object(u.b)(10)),I("English hall","English hall for live stream and in-person services",n,o,Object(u.c)(n,o),i,a,Object(u.c)(i,a)));return console.log("EventService -> constructor -> eventInsertObject",s),e.mutate({mutation:f,variables:{eventInsertObject:s}})}}return e.\u0275fac=function(t){return new(t||e)(g.Sb(O.b))},e.\u0275prov=g.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function I(e,t,n,o,i,a,s,r,c="Sunday service",l=40,b="Description of community event",v="Church",m="b669fc76-3130-4c4e-a04e-49e9f067ea9c"){return{bookingAvailableStartDateTime:n,bookingAvailableEndDateTime:o,bookingAvailabilityDateTimeRange:i,eventStartDateTime:a,eventEndDateTime:s,eventDateTimeRange:r,eventName:c,eventTopic:"Topic",eventMedium:"In-person",eventCategory:v,eventCapacity:l,eventDescription:b,Organiser:{data:{randomUUID:m,organiserDetails:""},on_conflict:{constraint:D.g.Organiser_randomUUID_key,update_columns:[D.h.updated_at]}},EventRooms:{data:[{eventRoomDetails:t,Room:{data:{roomName:e,roomType:"Hall",roomCapacity:49,Venue:{data:{venueName:"Eight Mile Plains Chinese Methodist Church",randomUUID:"9cb826dc-fcf8-406e-8b01-f4eba15dfcc6"},on_conflict:{constraint:D.o.Venue_randomUUID_key,update_columns:[D.p.updated_at]}}},on_conflict:{constraint:D.k.Room_venueID_roomName_key,update_columns:[D.l.updated_at]}}}],on_conflict:{constraint:D.c.EventRoom_eventRoomID_eventID_roomID_venueID_roomName_event_key,update_columns:[D.d.updated_at]}}}}var S=n("t0hA"),y=n("Y+pZ");function j(e,t){1&e&&g.Kb(0,"ion-progress-bar",4)}function _(e,t){if(1&e){const e=g.Pb();g.Ob(0,"ion-item-sliding"),g.Ob(1,"ion-item-options"),g.Ob(2,"ion-item-option",5),g.qc(3,"Check "),g.Nb(),g.Nb(),g.Ob(4,"ion-item",6),g.Wb("click",(function(n){g.lc(e);const o=t.$implicit;return g.ac().clickEventItem(n,o)})),g.Ob(5,"ion-avatar",7),g.Kb(6,"img",8),g.Nb(),g.Ob(7,"ion-label",9),g.Ob(8,"h2"),g.qc(9),g.Nb(),g.Ob(10,"h3"),g.qc(11),g.Nb(),g.Ob(12,"p"),g.qc(13),g.bc(14,"date"),g.bc(15,"date"),g.Nb(),g.Nb(),g.Nb(),g.Nb()}if(2&e){const e=t.$implicit,n=g.ac();g.zb(4),g.hc("color",n.isBookingAvailableForEvent(e)?"":"light"),g.gc("button",n.isBookingAvailableForEvent(e)),g.zb(3),g.hc("color",n.isBookingAvailableForEvent(e)?"":"medium"),g.zb(2),g.rc(null==e?null:e.eventName),g.zb(2),g.rc(null==e||null==e.EventRooms[0]?null:e.EventRooms[0].roomName),g.zb(2),g.tc(" ",g.dc(14,7,e.eventStartDateTime,"EEEE',' dd MMM HH:mm"),"\u2013",g.dc(15,10,e.eventEndDateTime,"HH:mm")," ")}}function w(e,t){1&e&&(g.Ob(0,"div"),g.Ob(1,"div",10),g.Kb(2,"ion-skeleton-text",11),g.Kb(3,"ion-skeleton-text",12),g.Kb(4,"ion-skeleton-text",13),g.Kb(5,"ion-skeleton-text",14),g.Kb(6,"ion-skeleton-text",11),g.Nb(),g.Ob(7,"ion-list"),g.Ob(8,"ion-list-header"),g.Ob(9,"ion-label"),g.Kb(10,"ion-skeleton-text",15),g.Nb(),g.Nb(),g.Ob(11,"ion-item"),g.Ob(12,"ion-avatar",7),g.Kb(13,"ion-skeleton-text",12),g.Nb(),g.Ob(14,"ion-label"),g.Ob(15,"h3"),g.Kb(16,"ion-skeleton-text",16),g.Nb(),g.Ob(17,"p"),g.Kb(18,"ion-skeleton-text",17),g.Nb(),g.Ob(19,"p"),g.Kb(20,"ion-skeleton-text",11),g.Nb(),g.Nb(),g.Nb(),g.Ob(21,"ion-item"),g.Ob(22,"ion-thumbnail",7),g.Kb(23,"ion-skeleton-text",12),g.Nb(),g.Ob(24,"ion-label"),g.Ob(25,"h3"),g.Kb(26,"ion-skeleton-text",16),g.Nb(),g.Ob(27,"p"),g.Kb(28,"ion-skeleton-text",17),g.Nb(),g.Ob(29,"p"),g.Kb(30,"ion-skeleton-text",11),g.Nb(),g.Nb(),g.Nb(),g.Ob(31,"ion-item"),g.Kb(32,"ion-skeleton-text",18),g.Ob(33,"ion-label"),g.Ob(34,"h3"),g.Kb(35,"ion-skeleton-text",16),g.Nb(),g.Ob(36,"p"),g.Kb(37,"ion-skeleton-text",17),g.Nb(),g.Ob(38,"p"),g.Kb(39,"ion-skeleton-text",11),g.Nb(),g.Nb(),g.Nb(),g.Nb(),g.Nb())}function R({bookingAvailableStartDateTime:e}){return function(e,t=new Date(e)){return function(e,t=(new Date).getTime()){return void 0!==e&&t>e.getTime()}(t)}(e)}const x=[{path:"",component:(()=>{class e{constructor(e,t,n,o,i,a){this.router=e,this.pwaService=t,this.datePipe=n,this.toastController=o,this.eventService=i,this.bookingService=a,this.upcomingEvents=Object(l.a)([]),this.isLoading=!0,console.log("EventsPage:: constructor")}ngOnInit(){console.log("EventsPage:: ngOnInit"),this.upcomingEvents=this.getLatestEvents(),this.upcomingEvents.pipe(Object(b.a)(1)).subscribe(e=>{this.isLoading=!1})}getLatestEvents(e=this.eventService){return console.log("EventsPage:: getLatestEvents"),e.getEvents().pipe(Object(v.a)(e=>{const{data:{},errors:t}=e;if(console.log("EventsPage -> eventsResult",e),!((null==t?void 0:t.length)>0))return console.log("%c EventsPage:: subscribeLatestEvents -> events",d.a),e.data.Event}),Object(m.a)(e=>{var t,n,o;return void 0!==e&&void 0!==(null===(t=e[0])||void 0===t?void 0:t.EventRooms)&&void 0!==(null===(o=null===(n=e[0])||void 0===n?void 0:n.EventRooms[0])||void 0===o?void 0:o.roomName)}))}clickEventItem(e,t,n=this.router){if(console.log("EventsPage -> eventItemClick -> eventItemClick",e),console.log("EventsPage -> eventItemClick -> event",t.randomUUID),R(t))this.navigateToBooking(t,n);else{console.log("EventsPage -> clickEventItem -> event",t);const e=this.datePipe.transform(t.bookingAvailableStartDateTime,u.a);this.presentToast(`Booking is currently unavailable for ${t.eventName} <br />Please check back on ${e}`).then(e=>{}).catch(e=>{})}}navigateToBooking(e,t){t.navigate(["/booking"],{state:e}).then(e=>{console.log("EventsPage -> clickEventItem -> navigated ",e)}).catch(e=>{console.log("EventsPage -> clickEventItem -> navigate error",e)})}clickTestButton(e){console.log("EventsPage -> testButton -> event",e),this.seedEvents()}seedEvents(e=this.eventService){const t=e.getSeedEventInputObjects();console.log("EventsPage -> seedEvents -> getSeedEventInputObjects",t),e.createEvents(t).subscribe(e=>{console.log("EventsPage -> seedEvents -> createdEventsResult",e)})}isBookingAvailableForEvent(e){return void 0!==e&&R(e)}presentToast(e="",t=this.toastController){return Object(c.a)(this,void 0,void 0,(function*(){return(yield t.create({message:e,duration:3500,animated:!0,translucent:!0})).present().then(()=>{console.log("Toast presented")})}))}}return e.\u0275fac=function(t){return new(t||e)(g.Jb(r.g),g.Jb(p.a),g.Jb(i.e),g.Jb(s.I),g.Jb(N),g.Jb(S.a))},e.\u0275cmp=g.Db({type:e,selectors:[["app-events"]],decls:9,vars:5,consts:[["pageTitle","COVIDSafe Events"],["value","0.25","buffer","0.50",4,"ngIf"],[4,"ngFor","ngForOf"],[4,"ngIf"],["value","0.25","buffer","0.50"],["color","danger"],[3,"button","color","click"],["slot","start"],["src","/assets/images/emp-cmca-logo-small-172x172-placeholder.jpg","alt","Placeholder-image-church"],[3,"color"],[1,"ion-padding","custom-skeleton"],["animated","",2,"width","60%"],["animated",""],["animated","",2,"width","88%"],["animated","",2,"width","70%"],["animated","",2,"width","20%"],["animated","",2,"width","50%"],["animated","",2,"width","80%"],["animated","","slot","start",2,"width","27px","height","27px"]],template:function(e,t){1&e&&(g.Kb(0,"app-custom-header",0),g.Ob(1,"ion-content"),g.Ob(2,"ion-list"),g.Ob(3,"ion-list-header"),g.qc(4,"Upcoming events"),g.Nb(),g.oc(5,j,1,0,"ion-progress-bar",1),g.oc(6,_,16,13,"ion-item-sliding",2),g.bc(7,"async"),g.Nb(),g.oc(8,w,40,0,"div",3),g.Nb()),2&e&&(g.zb(5),g.gc("ngIf",t.isLoading),g.zb(1),g.gc("ngForOf",g.cc(7,3,t.upcomingEvents)),g.zb(2),g.gc("ngIf",t.isLoading))},directives:[y.a,s.j,s.t,s.u,i.k,i.j,s.v,s.r,s.q,s.p,s.o,s.b,s.s,s.y,s.A],pipes:[i.b,i.e],styles:[""]}),e})()}];let C=(()=>{class e{}return e.\u0275mod=g.Hb({type:e}),e.\u0275inj=g.Gb({factory:function(t){return new(t||e)},imports:[[r.i.forChild(x)],r.i]}),e})(),K=(()=>{class e{}return e.\u0275mod=g.Hb({type:e}),e.\u0275inj=g.Gb({factory:function(t){return new(t||e)},imports:[[i.c,a.f,s.D,o.a,C]]}),e})()}}]);