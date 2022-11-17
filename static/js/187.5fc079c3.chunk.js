"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[187],{8278:function(n,t,e){e.d(t,{O:function(){return v}});var r,a,i,o,s=e(7689),c=e(4757),u=e(168),p=e(6444),d=e(6731),f=p.ZP.li(r||(r=(0,u.Z)(["\n  text-align: center;\n  background-color: rgb(238, 238, 238);\n  border: 1px solid rgb(204, 204, 204);\n  border-radius: 6px;\n  overflow: hidden;\n  transition: transform 250ms ease;\n\n  :hover,\n  :focus {\n    transform: scale(1.025);\n  }\n"]))),l=(0,p.ZP)(d.rU)(a||(a=(0,u.Z)(["\n  display: block;\n  padding-bottom: 16px;\n  color: inherit;\n  font-weight: 600;\n  text-decoration: none;\n  transition: color 250ms ease;\n\n  :hover,\n  :focus {\n    color: rgb(34, 139, 34);\n  }\n"]))),g=p.ZP.img(i||(i=(0,u.Z)(["\n  display: block;\n  margin-bottom: 16px;\n  background-color: rgb(255, 255, 255);\n  object-fit: cover;\n"]))),x=e(184),h=function(n){var t=n.movieId,e=n.posterPath,r=n.title,a=(0,s.TH)(),i="/movies/".concat(t),o="https://image.tmdb.org/t/p/w500".concat(e);return(0,x.jsx)(f,{children:(0,x.jsxs)(l,{to:i,state:{from:a},children:[(0,x.jsx)(g,{src:e?o:c,alt:r}),r]})})},m=p.ZP.ul(o||(o=(0,u.Z)(["\n  display: grid;\n  gap: 20px;\n  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));\n"]))),v=function(n){var t=n.moviesData;return(0,x.jsx)(m,{children:t.map((function(n){var t=n.id,e=n.original_title,r=n.poster_path;return(0,x.jsx)(h,{movieId:t,posterPath:r,title:e},t)}))})}},2497:function(n,t,e){e.d(t,{P:function(){return o}});var r=e(4300),a=e(5878),i=e(184),o=function(n){var t=n.message;return(0,i.jsxs)(r.v,{children:[(0,i.jsx)("img",{src:a,alt:"not found",width:"280px"}),(0,i.jsx)(r.U,{children:t})]})}},4300:function(n,t,e){e.d(t,{U:function(){return c},v:function(){return s}});var r,a,i=e(168),o=e(6444),s=o.ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n"]))),c=o.ZP.p(a||(a=(0,i.Z)(["\n  padding: 32px 0px;\n  font-size: 26px;\n  font-weight: 600;\n  text-align: center;\n  color: #777;\n"])))},9789:function(n,t,e){e.d(t,{$:function(){return i}});var r,a=e(168),i=e(6444).ZP.section(r||(r=(0,a.Z)(["\n  width: 100%;\n  padding: 16px 0px;\n"])))},7187:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r,a=e(5861),i=e(885),o=e(7757),s=e.n(o),c=e(2791),u=e(4390),p=e(9789),d=e(7659),f=e(168),l=e(6444).ZP.h2(r||(r=(0,f.Z)(["\n  padding: 16px 0px 32px;\n  font-size: 22px;\n  text-align: center;\n  text-transform: uppercase;\n"]))),g=e(7793),x=e(2497),h=e(8278),m=e(184),v=function(){var n=(0,c.useState)([]),t=(0,i.Z)(n,2),e=t[0],r=t[1],o=(0,c.useState)("pending"),f=(0,i.Z)(o,2),v=f[0],Z=f[1];return(0,c.useEffect)((function(){var n=new AbortController;return(0,a.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,u.Tg)(n);case 3:e=t.sent,r(e),Z("resolved"),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0.message),Z("rejected");case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))(),function(){n.abort()}}),[]),(0,m.jsx)(p.$,{children:(0,m.jsxs)(d.W,{children:[(0,m.jsx)(l,{children:"Trending today"}),"pending"===v&&(0,m.jsx)(g.a,{}),"rejected"===v&&(0,m.jsx)(x.P,{message:"Ooops, something went wrong"}),"resolved"===v&&(0,m.jsx)(h.O,{moviesData:e})]})})}},4390:function(n,t,e){e.d(t,{Bt:function(){return m},Tg:function(){return u},Y5:function(){return l},vw:function(){return d},y:function(){return x}});var r=e(5861),a=e(7757),i=e.n(a),o=e(1044),s="https://api.themoviedb.org/3",c="76d635679cabf189c0749ed5946c0835";function u(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function n(t){var e,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(s,"/trending/movie/day"),r={api_key:c},n.next=4,o.ZP.get(e,{params:r,signal:t.signal});case 4:return a=n.sent,n.abrupt("return",a.data.results);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n,t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(t,e){var r,a,u;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(s,"/search/movie"),a={api_key:c,query:t},n.next=4,o.ZP.get(r,{params:a,signal:e.signal});case 4:return u=n.sent,n.abrupt("return",u.data.results);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n,t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(t,e){var r,a,u;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(s,"/movie/").concat(t),a={api_key:c},n.next=4,o.ZP.get(r,{params:a,signal:e.signal});case 4:return u=n.sent,n.abrupt("return",u.data);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n,t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(t,e){var r,a,u;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(s,"/movie/").concat(t,"/credits"),a={api_key:c},n.next=4,o.ZP.get(r,{params:a,signal:e.signal});case 4:return u=n.sent,n.abrupt("return",u.data.cast);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n,t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function n(t,e){var r,a,u;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(s,"/movie/").concat(t,"/reviews"),a={api_key:c},n.next=4,o.ZP.get(r,{params:a,signal:e.signal});case 4:return u=n.sent,n.abrupt("return",u.data.results);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},4757:function(n,t,e){n.exports=e.p+"static/media/no-poster.411d2669783f3b94de4d.jpg"},5878:function(n,t,e){n.exports=e.p+"static/media/notFound.3049e46501086cd73a73.jpg"}}]);
//# sourceMappingURL=187.5fc079c3.chunk.js.map