"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[6],{2690:function(r,e,t){t.d(e,{JS:function(){return f},Q_:function(){return d},cI:function(){return v},kh:function(){return l},ts:function(){return h}});var n=t(1413),a=t(5861),u=t(7757),c=t.n(u),s=t(4569),o=t.n(s),i=t(6140);o().defaults.baseURL="https://api.themoviedb.org/3";var p={params:{api_key:"6b956d9320e8e098b01748da89295179"}},f=function(){var r=(0,a.Z)(c().mark((function r(){var e,t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o().get("/trending/movie/day",p);case 3:return e=r.sent,t=e.data.results,r.abrupt("return",t);case 8:r.prev=8,r.t0=r.catch(0),i.ZP.error("Ups... Something went wrong :(");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}(),h=function(){var r=(0,a.Z)(c().mark((function r(e){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o().get("/movie/".concat(e),p);case 3:return t=r.sent,n=t.data,r.abrupt("return",n);case 8:r.prev=8,r.t0=r.catch(0),i.ZP.error("Ups... Something went wrong :(");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,a.Z)(c().mark((function r(e){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o().get("/movie/".concat(e,"/credits"),p);case 3:return t=r.sent,n=t.data.cast,r.abrupt("return",n);case 8:r.prev=8,r.t0=r.catch(0),i.ZP.error("Ups... Something went wrong :(");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),l=function(){var r=(0,a.Z)(c().mark((function r(e){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o().get("/movie/".concat(e,"/reviews"),p);case 3:return t=r.sent,n=t.data.results,r.abrupt("return",n);case 8:r.prev=8,r.t0=r.catch(0),i.ZP.error("Ups... Something went wrong :(");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),d=function(){var r=(0,a.Z)(c().mark((function r(e){var t,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o().get("/search/movie",{params:(0,n.Z)((0,n.Z)({},p.params),{},{query:e})});case 3:return t=r.sent,a=t.data.results,r.abrupt("return",a);case 8:r.prev=8,r.t0=r.catch(0),i.ZP.error("Ups... Something went wrong :(");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}()},8006:function(r,e,t){t.r(e),t.d(e,{default:function(){return o}});var n=t(885),a=t(2791),u=t(6871),c=t(2690),s=t(184),o=function(){var r=(0,u.UO)().movieId,e=(0,a.useState)([]),t=(0,n.Z)(e,2),o=t[0],i=t[1];return(0,a.useEffect)((function(){(0,c.kh)(r).then((function(r){Array.isArray(r)&&i(r)}))}),[r]),(0,s.jsx)("div",{children:o.length>0?(0,s.jsx)("ul",{children:o.map((function(r){var e=r.id,t=r.author,n=r.content;return(0,s.jsxs)("li",{children:[(0,s.jsxs)("p",{children:["Author: ",t]}),(0,s.jsx)("p",{children:n})]},e)}))}):(0,s.jsx)("p",{children:"Sorry, we don't have information"})})}}}]);
//# sourceMappingURL=6.e5dcda9e.chunk.js.map