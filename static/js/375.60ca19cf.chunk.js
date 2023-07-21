"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[375],{10:function(n,e,t){t.d(e,{Df:function(){return u},Pg:function(){return d},Wf:function(){return p},d_:function(){return l},kX:function(){return x}});var r=t(861),a=t(687),c=t.n(a),i=t(243),s="3fd15b48446eede94fd21b39e1e3acac",o="https://api.themoviedb.org/3/movie/",u=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat("https://api.themoviedb.org/3/trending/movie/day","?api_key=").concat(s));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat("https://api.themoviedb.org/3/search/movie","?query=").concat(e,"&api_key=").concat(s));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o).concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o).concat(e,"/credits?api_key=").concat(s));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o).concat(e,"/reviews?api_key=").concat(s));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},149:function(n,e,t){t.d(e,{W:function(){return c}});var r,a=t(168),c=t(686).Z.div(r||(r=(0,a.Z)(["\n  width: 1200px;\n  padding: 10px 20px;\n"])))},831:function(n,e,t){t.d(e,{l:function(){return s}});var r,a=t(168),c=t(686),i=t(87),s=(0,c.Z)(i.rU)(r||(r=(0,a.Z)(["\n  color: darkblue;\n  &:hover {\n    color: blue;\n  }\n"])))},375:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,a,c,i,s,o,u,p,d,l=t(861),x=t(439),f=t(687),h=t.n(f),v=t(10),g=t(791),Z=t(689),m=t(185),b=t(259),j=t(831),w=t(168),k=t(686),y=k.Z.section(r||(r=(0,w.Z)(["\n  padding: 20px 0;\n"]))),_=k.Z.button(a||(a=(0,w.Z)(["\n  display: flex;\n  column-gap: 10px;\n  margin-bottom: 20px;\n  padding: 6px 4px;\n  width: 100px;\n  justify-content: space-around;\n  background: transparent;\n  border-radius: 8px;\n  cursor: pointer;\n"]))),S=k.Z.div(c||(c=(0,w.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),U=k.Z.div(i||(i=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  padding: 10px;\n"]))),W=k.Z.div(s||(s=(0,w.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),C=k.Z.section(o||(o=(0,w.Z)(["\n  padding: 25px 0;\n  border-bottom: 1px solid darkblue;\n  border-top: 1px solid darkblue;\n"]))),z=k.Z.ul(u||(u=(0,w.Z)(["\n  margin-left: 30px;\n  font-size: 16px;\n"]))),A=k.Z.p(p||(p=(0,w.Z)(["\n  margin-bottom: 20px;\n"]))),G=k.Z.li(d||(d=(0,w.Z)(["\n  &:last-child {\n    margin-top: 10px;\n  }\n"]))),M=t(149),O=t(184),P=function(){var n,e,t=(0,Z.UO)().movie_id,r=(0,g.useState)(""),a=(0,x.Z)(r,2),c=a[0],i=a[1],s=(0,g.useState)(""),o=(0,x.Z)(s,2),u=o[0],p=o[1],d=(0,g.useState)(""),f=(0,x.Z)(d,2),w=f[0],k=f[1],P=(0,g.useState)(""),R=(0,x.Z)(P,2),q=R[0],D=R[1],E=(0,g.useState)([]),F=(0,x.Z)(E,2),H=F[0],L=F[1],T=(0,g.useState)(null),X=(0,x.Z)(T,2),B=X[0],I=X[1],J=(0,g.useState)(null),K=(0,x.Z)(J,2),N=K[0],Q=K[1],V=(0,Z.TH)(),Y=(0,g.useRef)(null!==(n=null===(e=V.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies");(0,g.useEffect)((function(){$(t)}),[t]);var $=function(){var n=(0,l.Z)(h().mark((function n(e){var t,r,a,c,s,o,u;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,n.next=5,(0,v.Pg)(e);case 5:t=n.sent,r=t.poster_path,a=t.title,c=t.overview,s=t.genres,o=t.release_date,u=t.vote_average,i(r),p(a),k(c),D(o.slice(0,4)),L(s),I(Math.round(10*u)),n.next=23;break;case 20:n.prev=20,n.t0=n.catch(2),Q(n.t0.code);case 23:case"end":return n.stop()}}),n,null,[[2,20]])})));return function(e){return n.apply(this,arguments)}}(),nn=H.flatMap((function(n){return n.name}));return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(y,{children:(0,O.jsxs)(M.W,{children:[N&&(0,O.jsxs)(b.x,{children:["Ups... Something went wrong - ",N,"!"]}),(0,O.jsx)(_,{type:"button",children:(0,O.jsxs)(j.l,{to:Y.current,children:[(0,O.jsx)(m.And,{}),"Go back"]})}),(0,O.jsxs)(S,{children:[(0,O.jsx)("div",{children:(0,O.jsx)("img",{src:c?"https://image.tmdb.org/t/p/w500/".concat(c):"https://breakthrough.org/wp-content/uploads/2018/10/default-placeholder-image.png",alt:u,width:"300",height:"400"})}),(0,O.jsxs)(U,{children:[(0,O.jsxs)("h2",{children:[u,(0,O.jsxs)("span",{children:[" (",q,")"]})]}),(0,O.jsxs)("p",{children:["User score: ",(0,O.jsxs)("span",{children:[B,"%"]})]}),(0,O.jsx)("b",{children:"Overview"}),(0,O.jsx)("p",{children:w}),(0,O.jsx)("b",{children:"Genres"}),(0,O.jsx)(W,{children:H&&nn.map((function(n){return(0,O.jsx)("p",{children:n})}))})]})]})]})}),(0,O.jsx)(C,{children:(0,O.jsx)(M.W,{children:(0,O.jsxs)(z,{children:[(0,O.jsx)(A,{children:"Additional information"}),(0,O.jsx)(G,{children:(0,O.jsx)(j.l,{to:"credits",children:"Cast"})}),(0,O.jsx)(G,{children:(0,O.jsx)(j.l,{to:"reviews",children:"Reviews"})})]})})}),(0,O.jsx)(g.Suspense,{fallback:(0,O.jsx)("div",{children:"Loading..."}),children:(0,O.jsx)(Z.j3,{})})]})}},259:function(n,e,t){t.d(e,{x:function(){return c}});var r,a=t(168),c=t(686).Z.p(r||(r=(0,a.Z)(["\n  margin-top: 20px;\n  padding-left: 10px;\n  color: red;\n  font-size: 18px;\n  line-height: 1.33;\n"])))}}]);
//# sourceMappingURL=375.60ca19cf.chunk.js.map