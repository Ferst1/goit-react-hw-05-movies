"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{197:function(n,e,t){t.d(e,{LI:function(){return f},Mc:function(){return l},r7:function(){return h},uV:function(){return p},vw:function(){return s}});var r=t(861),a=t(757),u=t.n(a),c=t(243),i="https://api.themoviedb.org/3/",o={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDI5ZGVlOTNiZTJjYThhZDQ2YmYyMWRlMTQ5ZWU1MiIsInN1YiI6IjY0ZGI0NGQ1ZjQ5NWVlMDI5MzU2OTE1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X9DeGRwHeq0vI0Xl8w9Nwm04Y3Uo2f5aEe62rr6KFDE"}},s=function(){var n=(0,r.Z)(u().mark((function n(){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"trending/movie/day?language=en-US"),o);case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.query,n.next=3,c.Z.get("".concat(i,"search/movie?query=").concat(t,"&include_adult=false&language=en-US&page=1"),o);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"movie/").concat(e,"?language=en-US"),o);case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"movie/").concat(e,"/credits?language=en-US"),o);case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"movie/").concat(e,"/reviews?language=en-US&page=1"),o);case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},760:function(n,e,t){var r=t(184);e.Z=function(n){var e=n.error;return(0,r.jsxs)("p",{style:{fontSize:"large"},children:["Sorry. ",e," \ud83d\ude2d"]})}},216:function(n,e,t){var r=t(184);e.Z=function(){return(0,r.jsx)("p",{style:{fontSize:"large"},children:"Sorry. We found nothing."})}},779:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var r,a,u,c=t(439),i=t(689),o=t(791),s=t(197),f=t(760),l=t(216),p=t(219),h=t(168),d=t(867),v=d.ZP.div(r||(r=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 20px;\n"]))),Z=d.ZP.ul(a||(a=(0,h.Z)(["\n  list-style: none;\n"]))),g=d.ZP.p(u||(u=(0,h.Z)(["\n  font-size: 18px;\n  font-weight: bold;\n  text-decoration: underline;\n"]))),x=t(184),m=function(){var n=(0,o.useState)([]),e=(0,c.Z)(n,2),t=e[0],r=e[1],a=(0,o.useState)(null),u=(0,c.Z)(a,2),h=u[0],d=u[1],m=(0,o.useState)(!1),w=(0,c.Z)(m,2),y=w[0],I=w[1],j=(0,o.useState)(!1),S=(0,c.Z)(j,2),b=S[0],k=S[1],U=(0,i.UO)().movieId;return(0,o.useEffect)((function(){U&&(0,s.r7)(U).then((function(n){var e=n.results;0!==e.length?r(e):k(!0)})).catch((function(n){d(n.message)})).finally(I(!1))}),[U]),(0,x.jsxs)(v,{children:[y&&(0,x.jsx)(p.Z,{}),b&&(0,x.jsx)(l.Z,{}),h&&(0,x.jsx)(f.Z,{error:h}),(0,x.jsx)(Z,{children:t&&t.map((function(n){return(0,x.jsxs)("li",{children:[(0,x.jsx)(g,{children:n.author}),n.content]},n.id)}))})]})}}}]);
//# sourceMappingURL=779.b0cbb78e.chunk.js.map