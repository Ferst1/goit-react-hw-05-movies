"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{368:function(t,n,e){e(791);var r=e(87),i=e(689),c=e(184);n.Z=function(t){var n=t.movies,e=(0,i.TH)();return(0,c.jsx)("div",{children:(0,c.jsx)("ul",{children:n.map((function(t){return(0,c.jsx)("li",{children:(0,c.jsx)(r.rU,{to:"/movies/".concat(t.id),state:{from:e},children:t.title})},t.id)}))})})}},415:function(t,n,e){e.r(n);var r=e(439),i=e(791),c=e(368),a=e(510),o=e(335),u=e(686),s=e.n(u),h=e(184);n.default=function(){var t=(0,i.useState)([]),n=(0,r.Z)(t,2),e=n[0],u=n[1],f=(0,i.useState)(!1),l=(0,r.Z)(f,2),d=l[0],p=l[1];return(0,i.useEffect)((function(){p(!0),(0,o.r)("trending/all/day").then((function(t){return u(t.results)})).catch((function(t){t&&s().Notify.failure("Sorry, ".concat(t))})).finally(p(!1))}),[]),(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:"Trending Today"}),(0,h.jsx)(c.Z,{movies:e}),d&&(0,h.jsx)(a.a,{})]})}},335:function(t,n,e){e.d(n,{r:function(){return o}});var r=e(861),i=e(757),c=e.n(i),a="https://api.themoviedb.org/3/";function o(t){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYThhZDc3MjZkZTQ5ZTE4NmNkY2Q0ZDI5NDNmYmE4ZiIsInN1YiI6IjY1NDZhNmJhNWMwNzFiMDEwOTg2ZjRiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0-nbdYbpGetqHXvI-1FB0LVLeN8C_gUHTEMH1uJZEQY"}},t.next=3,fetch("".concat(a).concat(n),e).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=415.b8349406.chunk.js.map