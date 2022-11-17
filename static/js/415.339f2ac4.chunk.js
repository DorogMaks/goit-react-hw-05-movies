"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{3842:function(t,n,e){e.d(n,{O:function(){return o}});var r=e(6731),a=e(7689),i=e(4757),s=e(184),c=function(t){var n=t.movieId,e=t.posterPath,c=t.title,o=(0,a.TH)(),u="/movies/".concat(n),p="https://image.tmdb.org/t/p/w500".concat(e);return(0,s.jsx)("li",{children:(0,s.jsxs)(r.rU,{to:u,state:{from:o},children:[(0,s.jsx)("img",{src:e?p:i,alt:c,width:230,height:345}),c]})})},o=function(t){var n=t.moviesData;return(0,s.jsx)("ul",{children:n.map((function(t){var n=t.id,e=t.original_title,r=t.poster_path;return(0,s.jsx)(c,{movieId:n,posterPath:r,title:e},n)}))})}},7576:function(t,n,e){e.d(n,{P:function(){return f}});var r,a,i=e(168),s=e(6444),c=s.ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n"]))),o=s.ZP.p(a||(a=(0,i.Z)(["\n  font-size: 26px;\n  font-weight: 600;\n  text-align: center;\n  color: #777;\n"]))),u=e(5878),p=e(184),f=function(t){var n=t.message;return(0,p.jsxs)(c,{children:[(0,p.jsx)("img",{src:u,alt:"not found",width:"280px"}),(0,p.jsx)(o,{children:n})]})}},9789:function(t,n,e){e.d(n,{$:function(){return i}});var r,a=e(168),i=e(6444).ZP.section(r||(r=(0,a.Z)(["\n  width: 100%;\n  padding: 16px 0px;\n"])))},5415:function(t,n,e){e.r(n);var r=e(5861),a=e(885),i=e(7757),s=e.n(i),c=e(2791),o=e(4390),u=e(9789),p=e(7659),f=e(7793),d=e(7576),l=e(3842),h=e(184);n.default=function(){var t=(0,c.useState)([]),n=(0,a.Z)(t,2),e=n[0],i=n[1],v=(0,c.useState)("pending"),g=(0,a.Z)(v,2),m=g[0],x=g[1];return(0,c.useEffect)((function(){var t=new AbortController;return(0,r.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.Tg)(t);case 3:e=n.sent,i(e),x("resolved"),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0.message),x("rejected");case 12:case"end":return n.stop()}}),n,null,[[0,8]])})))(),function(){t.abort()}}),[]),(0,h.jsx)(u.$,{children:(0,h.jsxs)(p.W,{children:[(0,h.jsx)("h2",{children:"Trending today"}),"pending"===m&&(0,h.jsx)(f.a,{}),"rejected"===m&&(0,h.jsx)(d.P,{message:"Ooops, something went wrong"}),"resolved"===m&&(0,h.jsx)(l.O,{moviesData:e})]})})}},4390:function(t,n,e){e.d(n,{Bt:function(){return m},Tg:function(){return u},Y5:function(){return l},vw:function(){return f},y:function(){return v}});var r=e(5861),a=e(7757),i=e.n(a),s=e(1044),c="https://api.themoviedb.org/3",o="76d635679cabf189c0749ed5946c0835";function u(t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function t(n){var e,r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(c,"/trending/movie/day"),r={api_key:o},t.next=4,s.ZP.get(e,{params:r,signal:n.signal});case 4:return a=t.sent,t.abrupt("return",a.data.results);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t,n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function t(n,e){var r,a,u;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(c,"/search/movie"),a={api_key:o,query:n},t.next=4,s.ZP.get(r,{params:a,signal:e.signal});case 4:return u=t.sent,t.abrupt("return",u.data.results);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t,n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function t(n,e){var r,a,u;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(c,"/movie/").concat(n),a={api_key:o},t.next=4,s.ZP.get(r,{params:a,signal:e.signal});case 4:return u=t.sent,t.abrupt("return",u.data);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t,n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function t(n,e){var r,a,u;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(c,"/movie/").concat(n,"/credits"),a={api_key:o},t.next=4,s.ZP.get(r,{params:a,signal:e.signal});case 4:return u=t.sent,t.abrupt("return",u.data.cast);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t,n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function t(n,e){var r,a,u;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(c,"/movie/").concat(n,"/reviews"),a={api_key:o},t.next=4,s.ZP.get(r,{params:a,signal:e.signal});case 4:return u=t.sent,t.abrupt("return",u.data.results);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},4757:function(t,n,e){t.exports=e.p+"static/media/no-poster.db42871dd76fb961c5fe.jpg"},5878:function(t,n,e){t.exports=e.p+"static/media/notFound.3049e46501086cd73a73.jpg"}}]);
//# sourceMappingURL=415.339f2ac4.chunk.js.map