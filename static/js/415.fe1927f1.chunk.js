"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{197:function(n,t,e){e.d(t,{LI:function(){return f},Mc:function(){return p},r7:function(){return h},uV:function(){return l},vw:function(){return s}});var r=e(861),a=e(757),u=e.n(a),c=e(243),o="https://api.themoviedb.org/3/",i={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYThhZDc3MjZkZTQ5ZTE4NmNkY2Q0ZDI5NDNmYmE4ZiIsInN1YiI6IjY1NDZhNmJhNWMwNzFiMDEwOTg2ZjRiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0-nbdYbpGetqHXvI-1FB0LVLeN8C_gUHTEMH1uJZEQY"}},s=function(){var n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"trending/movie/day?language=en-US"),i);case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.query,n.next=3,c.Z.get("".concat(o,"search/movie?query=").concat(e,"&include_adult=false&language=en-US&page=1"),i);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"movie/").concat(t,"?language=en-US"),i);case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"movie/").concat(t,"/credits?language=en-US"),i);case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"movie/").concat(t,"/reviews?language=en-US&page=1"),i);case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},760:function(n,t,e){var r=e(184);t.Z=function(n){var t=n.error;return(0,r.jsxs)("p",{style:{fontSize:"large"},children:["Sorry. ",t," \ud83d\ude2d"]})}},174:function(n,t,e){e.d(t,{Z:function(){return d}});var r,a,u,c=e(689),o=e(168),i=e(867),s=e(87),f=i.ZP.ul(r||(r=(0,o.Z)(["\n  margin: 0 auto;\n  padding: 0 16px;\n"]))),p=i.ZP.li(a||(a=(0,o.Z)(["\n  margin-bottom: 12px;\n"]))),l=(0,i.ZP)(s.rU)(u||(u=(0,o.Z)(["\n  text-decoration: none;\n  color: #333;\n  font-weight: bold;\n\n  &:hover {\n    color: #ff5722;\n  }\n"]))),h=e(184),d=function(n){var t=n.movies,e=(0,c.TH)();return(0,h.jsx)(f,{children:t.map((function(n){return(0,h.jsx)(p,{children:(0,h.jsx)(l,{to:"/movies/".concat(n.id),state:{from:e},children:n.title})},n.id)}))})}},415:function(n,t,e){e.r(t);var r=e(439),a=e(791),u=e(197),c=e(174),o=e(219),i=e(760),s=e(184);t.default=function(){var n=(0,a.useState)([]),t=(0,r.Z)(n,2),e=t[0],f=t[1],p=(0,a.useState)(!1),l=(0,r.Z)(p,2),h=l[0],d=l[1],v=(0,a.useState)(null),Z=(0,r.Z)(v,2),m=Z[0],g=Z[1];return(0,a.useEffect)((function(){d(!0),(0,u.vw)().then((function(n){f(n.results)})).catch((function(n){g(n.message)})).finally(d(!1))}),[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{children:"Trending Today"}),h&&(0,s.jsx)(o.Z,{}),m&&(0,s.jsx)(i.Z,{error:m}),(0,s.jsx)(c.Z,{movies:e})]})}}}]);
//# sourceMappingURL=415.fe1927f1.chunk.js.map