(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[440],{440:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return f}});var s=i(439),n="MovieDetailsPage_backButton__qP7NP",c="MovieDetailsPage_reviews__boY9R",o="MovieDetailsPage_cast__wiu9e",r=i(700),a=i(791),l=i(689),u=i(87),d=i(502),v=i(575),h=i(184);function f(){var e=(0,a.useState)(null),t=(0,s.Z)(e,2),i=t[0],f=t[1],x=(0,a.useState)(null),j=(0,s.Z)(x,2),_=j[0],m=j[1],g=(0,a.useState)(!1),p=(0,s.Z)(g,2),w=p[0],b=p[1],k=(0,l.UO)().movieId,N=(0,l.TH)(),P=(0,l.s0)();console.log(N);var Z={color:"#2196f3"};return(0,a.useEffect)((function(){b(!0),(0,d.fetchMoviesDetails)(k).then((function(e){f(e)})).catch((function(e){m("We do not find some movies"),console.log(e)})).finally((function(){return b(!1)}))}),[k]),(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(r.Z,{children:[(0,h.jsx)("button",{onClick:function(){var e,t;return P(null!==(e=null===N||void 0===N||null===(t=N.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/")},className:n,children:"Go back"}),i&&(0,h.jsx)(v.Z,{text:i.title}),w&&"Loading ...",_&&(0,h.jsx)("div",{children:_}),i&&(0,h.jsxs)("div",{children:[(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(i.poster_path),alt:i.title}),(0,h.jsx)("h3",{children:i.title}),(0,h.jsxs)("p",{children:["(",new Date(i.release_date).getFullYear(),")"]}),(0,h.jsxs)("p",{children:["User Score: ",i.popularity]}),(0,h.jsxs)("div",{className:"movie_overview",children:[(0,h.jsx)("h3",{children:"Overview"}),(0,h.jsx)("p",{children:i.overview})]})]}),(0,h.jsx)("hr",{}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:"Additional Information"}),(0,h.jsx)(u.OL,{to:"/movies/".concat(k,"/reviews"),style:function(e){return e.isActive?Z:void 0},state:N.state,children:(0,h.jsx)("p",{className:c,children:"Reviews"})}),(0,h.jsx)(u.OL,{to:"/movies/".concat(k,"/cast"),style:function(e){return e.isActive?Z:void 0},state:N.state,children:(0,h.jsx)("p",{className:o,children:"Cast"})}),(0,h.jsx)("hr",{}),(0,h.jsx)(l.j3,{})]})]})})}},575:function(e,t,i){"use strict";i.d(t,{Z:function(){return c}});var s="PageHeading_title__whdE-",n=i(184);function c(e){var t=e.text;return(0,n.jsx)("h1",{className:s,children:t})}},502:function(){}}]);
//# sourceMappingURL=440.1fb3752c.chunk.js.map