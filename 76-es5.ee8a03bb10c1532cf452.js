!function(){function n(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function t(n,t,e,i,a,r,o){try{var c=n[r](o),s=c.value}catch(f){return void e(f)}c.done?t(s):Promise.resolve(s).then(i,a)}function e(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{STjf:function(i,a,r){"use strict";r.r(a),r.d(a,"ion_ripple_effect",(function(){return s}));var o=r("QX1p"),c=r("u799"),s=function(){function i(n){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),Object(o.l)(this,n),this.type="bounded"}var a,r,s,m,d;return a=i,(r=[{key:"addRipple",value:(m=regeneratorRuntime.mark((function n(t,e){var i=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise((function(n){Object(o.f)((function(){var a=i.el.getBoundingClientRect(),r=a.width,c=a.height,s=Math.sqrt(r*r+c*c),m=Math.max(c,r),d=i.unbounded?m:s+u,p=Math.floor(m*l),b=d/p,w=t-a.left,v=e-a.top;i.unbounded&&(w=.5*r,v=.5*c);var y=w-.5*p,h=v-.5*p,k=.5*r-w,g=.5*c-v;Object(o.n)((function(){var t=document.createElement("div");t.classList.add("ripple-effect");var e=t.style;e.top=h+"px",e.left=y+"px",e.width=e.height=p+"px",e.setProperty("--final-scale",""+b),e.setProperty("--translate-end","".concat(k,"px, ").concat(g,"px")),(i.el.shadowRoot||i.el).appendChild(t),setTimeout((function(){n((function(){f(t)}))}),325)}))}))})));case 1:case"end":return n.stop()}}),n)})),d=function(){var n=this,e=arguments;return new Promise((function(i,a){var r=m.apply(n,e);function o(n){t(r,i,a,o,c,"next",n)}function c(n){t(r,i,a,o,c,"throw",n)}o(void 0)}))},function(n,t){return d.apply(this,arguments)})},{key:"render",value:function(){var t,e=Object(c.b)(this);return Object(o.j)(o.b,{role:"presentation",class:(t={},n(t,e,!0),n(t,"unbounded",this.unbounded),t)})}},{key:"unbounded",get:function(){return"unbounded"===this.type}},{key:"el",get:function(){return Object(o.g)(this)}}])&&e(a.prototype,r),s&&e(a,s),i}(),f=function(n){n.classList.add("fade-out"),setTimeout((function(){n.remove()}),200)},u=10,l=.5;s.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}"}}])}();