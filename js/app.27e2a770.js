(function(e){function t(t){for(var o,a,i=t[0],u=t[1],c=t[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);d&&d(t);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(o=!1)}o&&(s.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},a={app:0},r={app:0},s=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"2d299693"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"006b78d4"}[e]+".css",r=u.p+o,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===o||l===r))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){c=f[i],l=c.getAttribute("data-href");if(l===o||l===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete a[e],d.parentNode.removeChild(d),n(s)},d.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var s=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var f=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",f.name="ChunkLoadError",f.type=o,f.request=a,n[1](f)}r[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/testingDeployPage/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},r=[],s=n("8c4f"),i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[t("div",{staticClass:"feature feature-1 smart-home",on:{click:e.navigateToSmartHome}},[t("i",{staticClass:"fa fa-home"}),t("span",[e._v("Smart Home")])]),e._m(0),e._m(1),e._m(2)])},u=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"feature feature-2 disabled"},[t("i",{staticClass:"fa fa-question"}),t("span",[e._v("Feature 2")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"feature feature-3 disabled"},[t("i",{staticClass:"fa fa-question"}),t("span",[e._v("Feature 3")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"feature feature-4 disabled"},[t("i",{staticClass:"fa fa-question"}),t("span",[e._v("Feature 4")])])}],c={methods:{navigateToSmartHome(){this.$router.push("/smartHome")}}},l=c,f=(n("57d8"),n("2877")),d=Object(f["a"])(l,i,u,!1,null,"4e856ee0",null),p=d.exports;o["default"].use(s["a"]);const m=[{path:"/HomeView",name:"HomeView",component:p},{path:"/about",name:"about",component:()=>n.e("about").then(n.bind(null,"d7a9"))},{path:"/smartHome",name:"smartHome",component:()=>n.e("about").then(n.bind(null,"cd85"))},{path:"/lightsControl",name:"lightsControl",component:()=>n.e("about").then(n.bind(null,"7c9e"))},{path:"/temperatureRooms",name:"temperatureRooms",component:()=>n.e("about").then(n.bind(null,"321a"))},{path:"/",redirect:"/HomeView"}],h=new s["a"]({mode:"history",base:"/testingDeployPage/",routes:m});var b=h,v=n("ed6d"),g={async mounted(){v["a"].connectWebSocket("wss://techwave.pagekite.me:8083")},router:b},y=g,w=(n("729f"),Object(f["a"])(y,a,r,!1,null,null,null)),_=w.exports,S=n("ce5b"),k=n.n(S),C=n("5502");o["default"].use(C["a"]);var P=new C["a"].Store({state:{idToPage:"terro"},getters:{getIdToPage:e=>e.idToPage},mutations:{setIdToPage(e,t){e.idToPage=t}}});n("bf40");o["default"].use(k.a),o["default"].config.productionTip=!1,new o["default"]({router:b,vuetify:new k.a,store:P,render:e=>e(_)}).$mount("#app")},"57d8":function(e,t,n){"use strict";n("d9bf")},"729f":function(e,t,n){"use strict";n("f3a4")},d9bf:function(e,t,n){},ed6d:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n("ade3");const a=new WebSocket("wss://techwave.pagekite.me:8083");class r{static connectWebSocket(e){this.socket=null,this.socket=new WebSocket(e),this.socket.onopen=function(){console.info("Connection established")}}static sendWebSocketMessage(e){a.readyState===WebSocket.OPEN&&a.send(JSON.stringify(e))}static receiveWebSocketMessage(e){a.onmessage=function(t){e(t.data)}}static closeWebSocketConnection(){a.close()}}Object(o["a"])(r,"socket",void 0)},f3a4:function(e,t,n){}});
//# sourceMappingURL=app.27e2a770.js.map