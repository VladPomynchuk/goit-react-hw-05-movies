"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[501],{9887:function(r,t,n){n.d(t,{Z:function(){return d}});var e,a,u,c=n(3504),s=n(6871),i=n(168),o=n(6031),p=o.ZP.h1(e||(e=(0,i.Z)(["\n  margin-bottom: 20px;\n"]))),f=o.ZP.ul(a||(a=(0,i.Z)(["\n  padding-left: 20px;\n"]))),v=o.ZP.li(u||(u=(0,i.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),l=n(2606),h=n(184),d=function(r){var t=r.films,n=r.title,e=(0,s.TH)();return(0,h.jsxs)(l.$,{children:[n&&(0,h.jsx)(p,{children:n}),(0,h.jsx)(f,{children:t.map((function(r){var t=r.title,n=r.id;return(0,h.jsx)(v,{children:(0,h.jsx)(c.rU,{to:"/movies/".concat(n),state:{from:e},children:t})},n)}))})]})}},2690:function(r,t,n){n.d(t,{JS:function(){return f},Q_:function(){return d},cI:function(){return l},kh:function(){return h},ts:function(){return v}});var e=n(1413),a=n(5861),u=n(7757),c=n.n(u),s=n(4569),i=n.n(s),o=n(6140);i().defaults.baseURL="https://api.themoviedb.org/3";var p={params:{api_key:"6b956d9320e8e098b01748da89295179"}},f=function(){var r=(0,a.Z)(c().mark((function r(){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i().get("/trending/movie/day",p);case 3:return t=r.sent,n=t.data.results,r.abrupt("return",n);case 8:r.prev=8,r.t0=r.catch(0),o.ZP.error("Ups... Something went wrong :(");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}(),v=function(){var r=(0,a.Z)(c().mark((function r(t){var n,e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i().get("/movie/".concat(t),p);case 3:return n=r.sent,e=n.data,r.abrupt("return",e);case 8:r.prev=8,r.t0=r.catch(0),o.ZP.error("Ups... Something went wrong :(");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(t){return r.apply(this,arguments)}}(),l=function(){var r=(0,a.Z)(c().mark((function r(t){var n,e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i().get("/movie/".concat(t,"/credits"),p);case 3:return n=r.sent,e=n.data.cast,r.abrupt("return",e);case 8:r.prev=8,r.t0=r.catch(0),o.ZP.error("Ups... Something went wrong :(");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(t){return r.apply(this,arguments)}}(),h=function(){var r=(0,a.Z)(c().mark((function r(t){var n,e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i().get("/movie/".concat(t,"/reviews"),p);case 3:return n=r.sent,e=n.data.results,r.abrupt("return",e);case 8:r.prev=8,r.t0=r.catch(0),o.ZP.error("Ups... Something went wrong :(");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(t){return r.apply(this,arguments)}}(),d=function(){var r=(0,a.Z)(c().mark((function r(t){var n,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i().get("/search/movie",{params:(0,e.Z)((0,e.Z)({},p.params),{},{query:t})});case 3:return n=r.sent,a=n.data.results,r.abrupt("return",a);case 8:r.prev=8,r.t0=r.catch(0),o.ZP.error("Ups... Something went wrong :(");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(t){return r.apply(this,arguments)}}()},4501:function(r,t,n){n.r(t),n.d(t,{default:function(){return i}});var e=n(9887),a=n(885),u=n(2791),c=n(2690),s=n(184),i=function(){var r=function(){var r=(0,u.useState)([]),t=(0,a.Z)(r,2),n=t[0],e=t[1];return(0,u.useEffect)((function(){(0,c.JS)().then((function(r){Array.isArray(r)&&e(r)}))}),[]),n}();return(0,s.jsx)("div",{children:(0,s.jsx)(e.Z,{films:r,title:"Trending films"})})}}}]);
//# sourceMappingURL=501.6e0977d3.chunk.js.map