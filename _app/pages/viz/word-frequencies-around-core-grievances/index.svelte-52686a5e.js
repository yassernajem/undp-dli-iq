import{S as e,i as t,s as a,O as r,c as n,a as i,d as s,b as o,f as l,G as c,t as h,g as d,F as f,h as u,P as m,M as g,Q as p,R as v,T as y,U as b,V as w,k as x,l as $,n as I,r as E,W as k,w as A,X as M,x as P,u as D,j as S,m as T,o as q,v as B,Y as V,Z as _,e as N,_ as z,$ as K,a0 as j,a1 as C,a2 as H,a3 as O,a4 as F,a5 as U,a6 as L,a7 as G,a8 as R,a9 as Q,aa as W}from"../../../chunks/vendor-56808b61.js";import{b as J}from"../../../chunks/paths-45dac81d.js";import{P as Z}from"../../../chunks/PageIntro-844ec224.js";function Y(e,t,a){const r=e.x-t.x,n=e.y-t.y,i=r*r+n*n;if(i){const s=(t.r+a.r)**2,o=(e.r+a.r)**2;if(s>o){const t=(i+o-s)/(2*i),l=Math.sqrt(Math.max(0,o/i-t*t));a.x=e.x-t*r-l*n,a.y=e.y-t*n+l*r}else{const e=(i+s-o)/(2*i),l=Math.sqrt(Math.max(0,s/i-e*e));a.x=t.x+e*r-l*n,a.y=t.y+e*n+l*r}}else a.x=t.x+a.r,a.y=t.y}function X(e,t){const a=e.r+t.r-1e-6,r=t.x-e.x,n=t.y-e.y;return a>0&&a*a>r*r+n*n}function ee(e,t,a){const r=e._,n=e.next._,i=r.r+n.r,s=(r.x*n.r+n.x*r.r)/i,o=(r.y*n.r+n.y*r.r)/i;return Math.max(Math.abs(s*a),Math.abs(o*t))}class te{constructor(e){this._=e,this.next=null,this.previous=null}}function ae(e){let t;return{c(){t=r("circle"),this.h()},l(e){t=n(e,"circle",{id:!0,fill:!0,stroke:!0,cx:!0,cy:!0,r:!0},1),i(t).forEach(s),this.h()},h(){o(t,"id",e[3]),o(t,"fill",e[0]),o(t,"stroke",e[1]),o(t,"cx",0),o(t,"cy",0),o(t,"r",e[2])},m(e,a){l(e,t,a)},p(e,[a]){8&a&&o(t,"id",e[3]),1&a&&o(t,"fill",e[0]),2&a&&o(t,"stroke",e[1]),4&a&&o(t,"r",e[2])},i:c,o:c,d(e){e&&s(t)}}}function re(e,t,a){let{fill:r}=t,{stroke:n}=t,{r:i}=t,{id:s}=t;return e.$$set=e=>{"fill"in e&&a(0,r=e.fill),"stroke"in e&&a(1,n=e.stroke),"r"in e&&a(2,i=e.r),"id"in e&&a(3,s=e.id)},[r,n,i,s]}class ne extends e{constructor(e){super(),t(this,e,re,ae,a,{fill:0,stroke:1,r:2,id:3})}}function ie(e,t,a){const r=e.slice();return r[10]=t[a],r}function se(e,t,a){const r=e.slice();return r[13]=t[a],r}function oe(e){let t,a,c,m,g,p=e[13]+"";return{c(){t=r("g"),a=r("line"),c=r("text"),m=h(p),this.h()},l(e){t=n(e,"g",{class:!0,opacity:!0,transform:!0},1);var r=i(t);a=n(r,"line",{stroke:!0,x2:!0},1),i(a).forEach(s),c=n(r,"text",{"dominant-baseline":!0,"text-anchor":!0,fill:!0,x:!0,"font-size":!0},1);var o=i(c);m=d(o,p),o.forEach(s),r.forEach(s),this.h()},h(){o(a,"stroke","#DEE2E6"),o(a,"x2",e[4]),o(c,"dominant-baseline","middle"),o(c,"text-anchor","end"),o(c,"fill","currentColor"),o(c,"x","-3"),o(c,"font-size","10px"),o(t,"class","tick"),o(t,"opacity","1"),o(t,"transform",g="translate(0,"+e[3](e[13])+")")},m(e,r){l(e,t,r),f(t,a),f(t,c),f(c,m)},p(e,r){16&r&&o(a,"x2",e[4]),64&r&&p!==(p=e[13]+"")&&u(m,p),72&r&&g!==(g="translate(0,"+e[3](e[13])+")")&&o(t,"transform",g)},d(e){e&&s(t)}}}function le(e){let t,a,c,g,p,v=(e[10]?m("+")(e[10]):e[10])+"";return{c(){t=r("g"),a=r("text"),c=h(v),this.h()},l(e){t=n(e,"g",{transform:!0},1);var r=i(t);a=n(r,"text",{"dominant-baseline":!0,fill:!0,"text-anchor":!0,y:!0,"font-size":!0},1);var o=i(a);c=d(o,v),o.forEach(s),r.forEach(s),this.h()},h(){o(a,"dominant-baseline","hanging"),o(a,"fill","currentColor"),o(a,"text-anchor","middle"),o(a,"y",g=6),o(a,"font-size","10px"),o(t,"transform",p="translate("+e[2](e[10])+",0)")},m(e,r){l(e,t,r),f(t,a),f(a,c)},p(e,a){32&a&&v!==(v=(e[10]?m("+")(e[10]):e[10])+"")&&u(c,v),36&a&&p!==(p="translate("+e[2](e[10])+",0)")&&o(t,"transform",p)},d(e){e&&s(t)}}}function ce(e){let t,a,h,d,u,m,p,v,y,b=e[6],w=[];for(let r=0;r<b.length;r+=1)w[r]=oe(se(e,b,r));let x=e[5],$=[];for(let r=0;r<x.length;r+=1)$[r]=le(ie(e,x,r));return{c(){t=r("svg"),a=r("g");for(let e=0;e<w.length;e+=1)w[e].c();h=r("g");for(let e=0;e<$.length;e+=1)$[e].c();d=r("g"),u=r("path"),p=r("line"),this.h()},l(e){t=n(e,"svg",{width:!0,height:!0},1);var r=i(t);a=n(r,"g",{transform:!0},1);var o=i(a);for(let t=0;t<w.length;t+=1)w[t].l(o);o.forEach(s),h=n(r,"g",{transform:!0},1);var l=i(h);for(let t=0;t<$.length;t+=1)$[t].l(l);l.forEach(s),d=n(r,"g",{transform:!0},1);var c=i(d);u=n(c,"path",{d:!0,class:!0},1),i(u).forEach(s),p=n(c,"line",{class:!0,"stroke-dasharray":!0,x1:!0,y1:!0,x2:!0,y2:!0},1),i(p).forEach(s),c.forEach(s),r.forEach(s),this.h()},h(){o(a,"transform","translate("+e[7].left+", "+e[7].top+")"),o(h,"transform","translate("+e[7].left+", "+(e[8]+e[7].top)+")"),o(u,"d",m=e[9](e[0])),o(u,"class","evolution svelte-pjrhgz"),o(p,"class","selectedDay svelte-pjrhgz"),o(p,"stroke-dasharray","3"),o(p,"x1",v=e[2](e[1])),o(p,"y1","0"),o(p,"x2",y=e[2](e[1])),o(p,"y2",e[8]),o(d,"transform","translate("+e[7].left+","+e[7].top+")"),o(t,"width",de),o(t,"height",he)},m(e,r){l(e,t,r),f(t,a);for(let t=0;t<w.length;t+=1)w[t].m(a,null);f(t,h);for(let t=0;t<$.length;t+=1)$[t].m(h,null);f(t,d),f(d,u),f(d,p)},p(e,[t]){if(88&t){let r;for(b=e[6],r=0;r<b.length;r+=1){const n=se(e,b,r);w[r]?w[r].p(n,t):(w[r]=oe(n),w[r].c(),w[r].m(a,null))}for(;r<w.length;r+=1)w[r].d(1);w.length=b.length}if(36&t){let a;for(x=e[5],a=0;a<x.length;a+=1){const r=ie(e,x,a);$[a]?$[a].p(r,t):($[a]=le(r),$[a].c(),$[a].m(h,null))}for(;a<$.length;a+=1)$[a].d(1);$.length=x.length}1&t&&m!==(m=e[9](e[0]))&&o(u,"d",m),6&t&&v!==(v=e[2](e[1]))&&o(p,"x1",v),6&t&&y!==(y=e[2](e[1]))&&o(p,"x2",y)},i:c,o:c,d(e){e&&s(t),g(w,e),g($,e)}}}const he=100,de=230;function fe(e,t,a){let r,n,i,s,o,{data:l}=t,{day:c}=t;const h={top:10,right:10,bottom:20,left:30},d=he-h.top-h.bottom;let f=p().defined((e=>!isNaN(e.y))).x((e=>n(e.x))).y((e=>i(e.y))).curve(v);return e.$$set=e=>{"data"in e&&a(0,l=e.data),"day"in e&&a(1,c=e.day)},e.$$.update=()=>{17&e.$$.dirty&&a(2,n=y().domain(b(l,(e=>e.x))).range([0,r])),1&e.$$.dirty&&a(3,i=y().domain([0,w(l,(e=>e.y))]).range([d,0])),8&e.$$.dirty&&a(6,s=i.ticks(3)),4&e.$$.dirty&&a(5,o=[n.domain()[0],0,n.domain()[1]])},a(4,r=de-h.left-h.right),[l,c,n,i,r,o,s,h,d,f]}class ue extends e{constructor(e){super(),t(this,e,fe,ce,a,{data:0,day:1})}}function me(e,t,a){const r=e.slice();return r[8]=t[a],r[10]=a,r}function ge(e,t,a){const r=e.slice();return r[8]=t[a],r[10]=a,r}function pe(e){let t,a,c,h,d,u=[],m=new Map,g=[],p=new Map,v=e[3];const y=e=>e[8].name;for(let r=0;r<v.length;r+=1){let t=ge(e,v,r),a=y(t);m.set(a,u[r]=ye(a,t))}let b=e[3];const w=e=>e[8].name;for(let r=0;r<b.length;r+=1){let t=me(e,b,r),a=w(t);p.set(a,g[r]=we(a,t))}return{c(){t=r("svg"),a=r("g");for(let e=0;e<u.length;e+=1)u[e].c();c=x();for(let e=0;e<g.length;e+=1)g[e].c();h=$(),this.h()},l(e){t=n(e,"svg",{width:!0,height:!0},1);var r=i(t);a=n(r,"g",{},1);var o=i(a);for(let t=0;t<u.length;t+=1)u[t].l(o);o.forEach(s),r.forEach(s),c=I(e);for(let t=0;t<g.length;t+=1)g[t].l(e);h=$(),this.h()},h(){o(t,"width",e[0]),o(t,"height",e[1])},m(e,r){l(e,t,r),f(t,a);for(let t=0;t<u.length;t+=1)u[t].m(a,null);l(e,c,r);for(let t=0;t<g.length;t+=1)g[t].m(e,r);l(e,h,r),d=!0},p(e,r){59&r&&(v=e[3],E(),u=k(u,r,y,1,e,v,m,a,M,ye,null,ge),A()),(!d||1&r)&&o(t,"width",e[0]),(!d||2&r)&&o(t,"height",e[1]),44&r&&(b=e[3],E(),g=k(g,r,w,1,e,b,p,h.parentNode,M,we,h,me),A())},i(e){if(!d){for(let e=0;e<v.length;e+=1)P(u[e]);for(let e=0;e<b.length;e+=1)P(g[e]);d=!0}},o(e){for(let t=0;t<u.length;t+=1)D(u[t]);for(let t=0;t<g.length;t+=1)D(g[t]);d=!1},d(e){e&&s(t);for(let t=0;t<u.length;t+=1)u[t].d();e&&s(c);for(let t=0;t<g.length;t+=1)g[t].d(e);e&&s(h)}}}function ve(e){let t,a,c,m,g=e[8].name+"";return{c(){t=r("text"),a=h(g),this.h()},l(e){t=n(e,"text",{"dominant-baseline":!0,"font-size":!0,class:!0,x:!0,y:!0,"text-anchor":!0},1);var r=i(t);a=d(r,g),r.forEach(s),this.h()},h(){o(t,"dominant-baseline","middle"),o(t,"font-size","12px"),o(t,"class","pe-none"),o(t,"x",c=0),o(t,"y",m=0),o(t,"text-anchor","middle")},m(e,r){l(e,t,r),f(t,a)},p(e,t){8&t&&g!==(g=e[8].name+"")&&u(a,g)},d(e){e&&s(t)}}}function ye(e,t){let a,c,h,d;c=new ne({props:{id:t[5](t[8]),fill:"#CED4DA",stroke:"white",r:t[8].r/t[4]}});let f=4*t[8].name.length<t[8].r/t[4]&&ve(t);return{key:e,first:null,c(){a=r("g"),S(c.$$.fragment),f&&f.c(),this.h()},l(e){a=n(e,"g",{transform:!0},1);var t=i(a);T(c.$$.fragment,t),f&&f.l(t),t.forEach(s),this.h()},h(){o(a,"transform",h=`translate(${t[8].x/t[4]+t[0]/2},${t[8].y/t[4]+t[1]/2})`),this.first=a},m(e,t){l(e,a,t),q(c,a,null),f&&f.m(a,null),d=!0},p(e,r){t=e;const n={};8&r&&(n.id=t[5](t[8])),24&r&&(n.r=t[8].r/t[4]),c.$set(n),4*t[8].name.length<t[8].r/t[4]?f?f.p(t,r):(f=ve(t),f.c(),f.m(a,null)):f&&(f.d(1),f=null),(!d||27&r&&h!==(h=`translate(${t[8].x/t[4]+t[0]/2},${t[8].y/t[4]+t[1]/2})`))&&o(a,"transform",h)},i(e){d||(P(c.$$.fragment,e),d=!0)},o(e){D(c.$$.fragment,e),d=!1},d(e){e&&s(a),B(c),f&&f.d()}}}function be(e){let t,a,r;return t=new ue({props:{data:e[8].series,day:e[2]}}),{c(){S(t.$$.fragment),a=x()},l(e){T(t.$$.fragment,e),a=I(e)},m(e,n){q(t,e,n),l(e,a,n),r=!0},p(e,a){const r={};8&a&&(r.data=e[8].series),4&a&&(r.day=e[2]),t.$set(r)},i(e){r||(P(t.$$.fragment,e),r=!0)},o(e){D(t.$$.fragment,e),r=!1},d(e){B(t,e),e&&s(a)}}}function we(e,t){let a,r,n;return r=new V({props:{target:t[5](t[8]),title:t[8].name,trigger:"hover",placement:"right",$$slots:{default:[be]},$$scope:{ctx:t}}}),{key:e,first:null,c(){a=$(),S(r.$$.fragment),this.h()},l(e){a=$(),T(r.$$.fragment,e),this.h()},h(){this.first=a},m(e,t){l(e,a,t),q(r,e,t),n=!0},p(e,a){t=e;const n={};8&a&&(n.target=t[5](t[8])),8&a&&(n.title=t[8].name),4108&a&&(n.$$scope={dirty:a,ctx:t}),r.$set(n)},i(e){n||(P(r.$$.fragment,e),n=!0)},o(e){D(r.$$.fragment,e),n=!1},d(e){e&&s(a),B(r,e)}}}function xe(e){let t,a,r=e[0]&&e[1]&&e[3].length&&pe(e);return{c(){r&&r.c(),t=$()},l(e){r&&r.l(e),t=$()},m(e,n){r&&r.m(e,n),l(e,t,n),a=!0},p(e,[a]){e[0]&&e[1]&&e[3].length?r?(r.p(e,a),11&a&&P(r,1)):(r=pe(e),r.c(),P(r,1),r.m(t.parentNode,t)):r&&(E(),D(r,1,1,(()=>{r=null})),A())},i(e){a||(P(r),a=!0)},o(e){D(r),a=!1},d(e){r&&r.d(e),e&&s(t)}}}function $e(e,t,a){let r,n,{data:i}=t,{width:s}=t,{height:o}=t,{day:l}=t;return e.$$set=e=>{"data"in e&&a(6,i=e.data),"width"in e&&a(0,s=e.width),"height"in e&&a(1,o=e.height),"day"in e&&a(2,l=e.day)},e.$$.update=()=>{67&e.$$.dirty&&a(3,r=function(e,t,a){const r=e.length;if(!r)return e;let n,i,s;if(n=e[0],n.x=0,n.y=0,!(r>1))return e;if(i=e[1],n.x=-i.r,i.x=n.r,i.y=0,!(r>2))return e;Y(i,n,s=e[2]),n=new te(n),i=new te(i),s=new te(s),n.next=s.previous=i,i.next=n.previous=s,s.next=i.previous=n;e:for(let o=3;o<r;++o){Y(n._,i._,s=e[o]),s=new te(s);let r=i.next,l=n.previous,c=i._.r,h=n._.r;do{if(c<=h){if(X(r._,s._)){i=r,n.next=i,i.previous=n,--o;continue e}c+=r._.r,r=r.next}else{if(X(l._,s._)){n=l,n.next=i,i.previous=n,--o;continue e}h+=l._.r,l=l.previous}}while(r!==l.next);s.previous=n,s.next=i,n.next=i.previous=i=s;let d,f=ee(n,t,a);for(;(s=s.next)!==i;)(d=ee(s,t,a))<f&&(n=s,f=d);i=n.next}return e}(i,s,o)),11&e.$$.dirty&&a(4,n=function(e,t,a,r=0){const n=e.reduce(((e,{x:t,r:a})=>Math.min(e,t-a-r)),1/0),i=e.reduce(((e,{x:t,r:a})=>Math.max(e,t+a+r)),-1/0),s=e.reduce(((e,{y:t,r:a})=>Math.min(e,t-a-r)),1/0),o=e.reduce(((e,{y:t,r:a})=>Math.max(e,t+a+r)),-1/0);return Math.max((i-n)/t,(o-s)/a)}(r,s,o,1))},[s,o,l,r,n,function(e){return"c_"+_(e,{algorithm:"md5"})},i]}class Ie extends e{constructor(e){super(),t(this,e,$e,xe,a,{data:6,width:0,height:1,day:2})}}function Ee(e,t,a){const r=e.slice();return r[23]=t[a],r}function ke(e,t,a){const r=e.slice();return r[26]=t[a],r}function Ae(e,t,a){const r=e.slice();return r[29]=t[a],r}function Me(e){let t,a,r,o,u=e[29]+"";return{c(){t=N("option"),a=h(u),r=x(),this.h()},l(e){t=n(e,"OPTION",{});var o=i(t);a=d(o,u),r=I(o),o.forEach(s),this.h()},h(){t.__value=o=e[29],t.value=t.__value},m(e,n){l(e,t,n),f(t,a),f(t,r)},p:c,d(e){e&&s(t)}}}function Pe(e){let t,a,r,o,u=e[8][e[26]]+"";return{c(){t=N("option"),a=h(u),r=x(),this.h()},l(e){t=n(e,"OPTION",{});var o=i(t);a=d(o,u),r=I(o),o.forEach(s),this.h()},h(){t.__value=o=e[26],t.value=t.__value},m(e,n){l(e,t,n),f(t,a),f(t,r)},p:c,d(e){e&&s(t)}}}function De(e){let t,a,r,c,u,g,p,v,y,b,w=(e[23]?m("+")(e[23]):e[23])+"",$="day"+(Math.abs(e[23])>1?"s":"");function E(){return e[19](e[23])}return{c(){t=N("div"),a=N("button"),r=h(w),c=x(),u=N("span"),g=h($),v=x(),this.h()},l(e){t=n(e,"DIV",{class:!0});var o=i(t);a=n(o,"BUTTON",{type:!0,class:!0});var l=i(a);r=d(l,w),c=I(l),u=n(l,"SPAN",{class:!0});var h=i(u);g=d(h,$),h.forEach(s),l.forEach(s),v=I(o),o.forEach(s),this.h()},h(){o(u,"class","d-none d-md-inline"),o(a,"type","button"),o(a,"class",p=z("btn btn-sm rounded-0 w-100 "+(e[23]===e[4]?"btn-secondary":"btn-outline-secondary"))+" svelte-11zrb3w"),o(t,"class","col")},m(e,n){l(e,t,n),f(t,a),f(a,r),f(a,c),f(a,u),f(u,g),f(t,v),y||(b=K(a,"click",E),y=!0)},p(t,r){e=t,16&r[0]&&p!==(p=z("btn btn-sm rounded-0 w-100 "+(e[23]===e[4]?"btn-secondary":"btn-outline-secondary"))+" svelte-11zrb3w")&&o(a,"class",p)},d(e){e&&s(t),y=!1,b()}}}function Se(e){let t,a,r,c,u,m,p,v,y,b,w,$,E,k,A,M,V,_,z,U,L,G,R,Q,W,J,Y,X,ee,te,ae,re,ne,ie,se,oe,le,ce,he,de,fe,ue,me,ge,pe,ve,ye,be;a=new Z({props:{title:e[0].title}});let we=e[10],xe=[];for(let n=0;n<we.length;n+=1)xe[n]=Me(Ae(e,we,n));let $e=e[11],Se=[];for(let n=0;n<$e.length;n+=1)Se[n]=Pe(ke(e,$e,n));fe=new Ie({props:{width:e[6],height:e[1],data:e[7],day:e[4]}});let Te=e[9],qe=[];for(let n=0;n<Te.length;n+=1)qe[n]=De(Ee(e,Te,n));return{c(){t=N("div"),S(a.$$.fragment),r=x(),c=N("div"),u=N("div"),m=N("div"),p=N("div"),v=N("div"),y=N("label"),b=h("Language"),w=x(),$=N("select");for(let e=0;e<xe.length;e+=1)xe[e].c();E=x(),k=N("div"),A=N("div"),M=N("label"),V=h("Event"),_=x(),z=N("select");for(let e=0;e<Se.length;e+=1)Se[e].c();U=x(),L=N("div"),G=N("div"),R=N("label"),Q=h("Threshold"),W=x(),J=N("input"),Y=x(),X=N("div"),ee=N("div"),te=h("top 10"),ae=x(),re=N("div"),ne=h("top 50"),ie=x(),se=N("div"),oe=h("All"),le=x(),ce=N("div"),he=N("div"),de=N("div"),S(fe.$$.fragment),ge=x(),pe=N("div");for(let e=0;e<qe.length;e+=1)qe[e].c();this.h()},l(e){t=n(e,"DIV",{class:!0});var o=i(t);T(a.$$.fragment,o),o.forEach(s),r=I(e),c=n(e,"DIV",{class:!0});var l=i(c);u=n(l,"DIV",{class:!0});var h=i(u);m=n(h,"DIV",{class:!0});var f=i(m);p=n(f,"DIV",{class:!0});var g=i(p);v=n(g,"DIV",{class:!0});var x=i(v);y=n(x,"LABEL",{for:!0,class:!0});var P=i(y);b=d(P,"Language"),P.forEach(s),w=I(x),$=n(x,"SELECT",{class:!0,id:!0,"aria-label":!0});var D=i($);for(let t=0;t<xe.length;t+=1)xe[t].l(D);D.forEach(s),x.forEach(s),g.forEach(s),E=I(f),k=n(f,"DIV",{class:!0});var S=i(k);A=n(S,"DIV",{class:!0});var q=i(A);M=n(q,"LABEL",{for:!0,class:!0});var B=i(M);V=d(B,"Event"),B.forEach(s),_=I(q),z=n(q,"SELECT",{class:!0,id:!0,"aria-label":!0});var N=i(z);for(let t=0;t<Se.length;t+=1)Se[t].l(N);N.forEach(s),q.forEach(s),S.forEach(s),U=I(f),L=n(f,"DIV",{class:!0});var K=i(L);G=n(K,"DIV",{class:!0});var j=i(G);R=n(j,"LABEL",{for:!0,class:!0});var C=i(R);Q=d(C,"Threshold"),C.forEach(s),W=I(j),J=n(j,"INPUT",{type:!0,class:!0,min:!0,max:!0,step:!0,id:!0}),Y=I(j),X=n(j,"DIV",{class:!0});var H=i(X);ee=n(H,"DIV",{class:!0});var O=i(ee);te=d(O,"top 10"),O.forEach(s),ae=I(H),re=n(H,"DIV",{class:!0});var F=i(re);ne=d(F,"top 50"),F.forEach(s),ie=I(H),se=n(H,"DIV",{class:!0});var Z=i(se);oe=d(Z,"All"),Z.forEach(s),H.forEach(s),j.forEach(s),K.forEach(s),f.forEach(s),le=I(h),ce=n(h,"DIV",{class:!0});var ue=i(ce);he=n(ue,"DIV",{class:!0});var me=i(he);de=n(me,"DIV",{class:!0});var ve=i(de);T(fe.$$.fragment,ve),ve.forEach(s),me.forEach(s),ue.forEach(s),ge=I(h),pe=n(h,"DIV",{class:!0});var ye=i(pe);for(let t=0;t<qe.length;t+=1)qe[t].l(ye);ye.forEach(s),h.forEach(s),l.forEach(s),this.h()},h(){o(t,"class","container"),o(y,"for","language"),o(y,"class","form-label"),o($,"class","form-select"),o($,"id","language"),o($,"aria-label","Language"),void 0===e[2]&&j((()=>e[14].call($))),o(v,"class","mb-3"),o(p,"class","col-md-3"),o(M,"for","event"),o(M,"class","form-label"),o(z,"class","form-select"),o(z,"id","event"),o(z,"aria-label","Event"),void 0===e[3]&&j((()=>e[15].call(z))),o(A,"class","mb-3"),o(k,"class","col-md-4"),o(R,"for","rangeWords"),o(R,"class","form-label"),o(J,"type","range"),o(J,"class","form-range"),o(J,"min","0"),o(J,"max","1"),o(J,"step","0.5"),o(J,"id","rangeWords"),o(ee,"class","col-3"),o(re,"class","col-3 text-center"),o(se,"class","col-3 text-end"),o(X,"class","d-flex justify-content-between w-100"),o(G,"class","mb-0"),o(L,"class","col-md-2 offset-md-3"),o(m,"class","row border-bottom py-2"),o(de,"class","w-100 h-100"),j((()=>e[17].call(de))),o(he,"class","col-12"),o(ce,"class","row flex-grow-1 flex-shrink-1 overflow-hidden"),j((()=>e[18].call(ce))),o(pe,"class","row py-2 gx-0"),o(u,"class","container h-100 d-flex flex-column"),o(c,"class","bg-light w-100 containerViz svelte-11zrb3w")},m(n,i){l(n,t,i),q(a,t,null),l(n,r,i),l(n,c,i),f(c,u),f(u,m),f(m,p),f(p,v),f(v,y),f(y,b),f(v,w),f(v,$);for(let e=0;e<xe.length;e+=1)xe[e].m($,null);C($,e[2]),f(m,E),f(m,k),f(k,A),f(A,M),f(M,V),f(A,_),f(A,z);for(let e=0;e<Se.length;e+=1)Se[e].m(z,null);C(z,e[3]),f(m,U),f(m,L),f(L,G),f(G,R),f(R,Q),f(G,W),f(G,J),H(J,e[5]),f(G,Y),f(G,X),f(X,ee),f(ee,te),f(X,ae),f(X,re),f(re,ne),f(X,ie),f(X,se),f(se,oe),f(u,le),f(u,ce),f(ce,he),f(he,de),q(fe,de,null),ue=O(de,e[17].bind(de)),me=O(ce,e[18].bind(ce)),f(u,ge),f(u,pe);for(let e=0;e<qe.length;e+=1)qe[e].m(pe,null);ve=!0,ye||(be=[K($,"change",e[14]),K(z,"change",e[15]),K(J,"change",e[16]),K(J,"input",e[16])],ye=!0)},p(e,t){const r={};if(1&t[0]&&(r.title=e[0].title),a.$set(r),1024&t[0]){let a;for(we=e[10],a=0;a<we.length;a+=1){const r=Ae(e,we,a);xe[a]?xe[a].p(r,t):(xe[a]=Me(r),xe[a].c(),xe[a].m($,null))}for(;a<xe.length;a+=1)xe[a].d(1);xe.length=we.length}if(1028&t[0]&&C($,e[2]),2304&t[0]){let a;for($e=e[11],a=0;a<$e.length;a+=1){const r=ke(e,$e,a);Se[a]?Se[a].p(r,t):(Se[a]=Pe(r),Se[a].c(),Se[a].m(z,null))}for(;a<Se.length;a+=1)Se[a].d(1);Se.length=$e.length}2056&t[0]&&C(z,e[3]),32&t[0]&&H(J,e[5]);const n={};if(64&t[0]&&(n.width=e[6]),2&t[0]&&(n.height=e[1]),128&t[0]&&(n.data=e[7]),16&t[0]&&(n.day=e[4]),fe.$set(n),4624&t[0]){let a;for(Te=e[9],a=0;a<Te.length;a+=1){const r=Ee(e,Te,a);qe[a]?qe[a].p(r,t):(qe[a]=De(r),qe[a].c(),qe[a].m(pe,null))}for(;a<qe.length;a+=1)qe[a].d(1);qe.length=Te.length}},i(e){ve||(P(a.$$.fragment,e),P(fe.$$.fragment,e),ve=!0)},o(e){D(a.$$.fragment,e),D(fe.$$.fragment,e),ve=!1},d(e){e&&s(t),B(a),e&&s(r),e&&s(c),g(xe,e),g(Se,e),B(fe),ue(),me(),g(qe,e),ye=!1,F(be)}}}async function Te({page:e,fetch:t}){const a=J+e.path,r=await t(`${a}/data.json`),n=await t(`${a}.json`),i=await n.json();return{props:{dataTable:(await r.json()).rows,info:i.data}}}function qe(e,t,a){let r,{dataTable:n}=t,{info:i}=t;const s=U(n,(e=>e.lang),(e=>e.event)),o=L(-7,8,1),l=G().domain(["0","0.5","1"]).range([10,50,1/0]);let c,h,d=Array.from(s.keys())[0],f=Array.from(s.get(d),(e=>e[0]))[0],u=0,m=.5,g=Array.from(s,(e=>e[0])),p=Array.from(s.get(d),(e=>e[0]));const v=["-7","-6","-5","-4","-3","-2","-1","0","1","2","3","4","5","6","7"];function y(e){a(4,u=e)}return e.$$set=e=>{"dataTable"in e&&a(13,n=e.dataTable),"info"in e&&a(0,i=e.info)},e.$$.update=()=>{60&e.$$.dirty[0]&&a(7,r=s.get(d).get(f).map((e=>{const t=v.map((t=>({x:+t,y:e[t]})));return{name:e.word,r:Math.sqrt(e[u]/Math.PI),value:e[u],series:t}})).sort(((e,t)=>R(e.r,t.r))).filter(((e,t)=>e.r&&t<=l(m))))},[i,h,d,f,u,m,c,r,{1:"2018-03-25 - Civil servants protest over anti-austerity measures across the Iraq Kurdistan region",2:"2018-05-12 - Parliamentary elections",3:"2018-07-15 - Protests erupted in the south and central Iraq and protestors in Basra blocked port facilities",4:"2018-08-09 - Announcement of final results of 2018 Parliamentary elections",5:"2018-09-05 - Official campaign period of parliamentary elections of the Kurdistan region",6:"2018-09-08 - Protests in Basra over unemployment, shortage of clean water and electricity, and corruption",7:"2018-09-15 - Iraq’s parliament’ elects Muhammad al-Halbousi as its new Speaker",8:"2018-09-27 - Social media influencer Tara Fares was killed in Baghdad",9:"2018-09-30 - Elections day of Kurdistan region parliamentary elections",10:"2018-10-02 - Parliament elected PUKs candidate Barham Salih as new president of Iraq",11:"2018-10-25 - Adil Abdul Mahdi was sworn in as new Prime Minister",12:"2019-01-16 - Unidentified gunmen assasinated Kurdistan Democratic Party (KDP) representative Abd al-Jabbar Aref outside Kirkuk",13:"2019-01-20 - The Iraqi Commission on Integrity announced that the Head of the Energy Committee in Diwaniyah Province had been arrested on charges of bribery.",14:"2019-01-21 - Prime Minister Adel Abd al-Mahdi visits Basra to meet protestors",15:"2019-01-23 - The Iraqi Integrity Commission announced that it had sentenced the Secretary of Baghdad and the Director-General of the Department of Parks  to seven years imprisonment for damaging infrastructure development projects",16:"2019-06-10 - Nechirvan Barzan sworn in president of the Kurdistan region",17:"2019-09-25 - ِA peaceful gathering and sit-in of university graduates in front of the PM office in Baghdad to demand employment and dignity",18:"2019-10-01 - Mass protests in Baghdad and sourhtern provinces",19:"2019-10-26 - IS leader Abu Bakr al-Baghdadi killed in Idlib",20:"2019-11-01 - Mass protests intensify with hundred protestors killed. Protestors regain control of Khilani Square and Sanak Bridge ",21:"2019-11-27 - Protestors burn down the Iranian consulate in Najaf",22:"2019-11-27 - Prime Minister Adel Abdul Mahdi announces his resignation",23:"2019-12-01 - Parliament approves resignation of PM Mahdi",24:"2019-12-24 - Parliament approves a new electoral law",25:"2019-12-29 - US strikes the Kata ib Hezbolla كتائب حزب الله, positions in Iraq",26:"2019-12-31 - Kataeb Hezbollah‎ and other units of the Popular Mobilization Forces attack the US Embassy in Baghdad",27:"2020-01-03 - Assasination of General Qassem Soleimani and PFM leader Abu Mahdi al-Muhandis by a US drone",28:"2020-01-04 - Funeral of General Qassem Soleimani and PFM leader",29:"2020-01-05 - The Iraqi Parliament votes to end the presence of all foreign troops in the country.",30:"2020-01-08 - Iranian forces fired missiles at Ain al-Asad air base in Anbar province and Erbil International Airport, where US/anti-ISIS coalition troops are based,",31:"2020-01-10 - An Iraqi journalist, Ahmad Abdelsamad, of Dijlah TV and his cameraman, Safaa Ghali, were shot in their car by unidentified gunmen in Basra.",32:"2020-01-21 - Janat Madhi, a 49-year old activist and protest figure was shot dead in Basra.",33:"2020-01-24 - Thousands gather to protest against continued American presence in Iraq following Shi’a cleric Muqtada al-Sadr’s call for the withdrawal of American troops",34:"2020-02-01 - Mohammed Tawfiq Allawi was named PM by President Salih and asked to form a new government. Protests erupt against Allawi’s nomination.",35:"2020-02-08 - Al-Sadr called on his followers (among them a group called blue hats) to withdraw from the protests",36:"2020-02-24 - First official case of COVID-19 reported in Najaf",37:"2020-03-01 - Mohammed Tawfiq Allawi withdrew after failing to obtain a vote of confidence. Prime Minister Adel Abdul Mahdi continues in his role as caretaker.",38:"2020-03-01 - First official case of COVID-19 reported in the Kurdistan region.",39:"2020-03-17 - President Barham Salih named Adnan al-Zurfi‎, the Governor of Najaf, as PM-designate. His appointment was opposed by certain groups and Al-Zurfi concedes.",40:"2020-03-21 - Protesters in Tahrir Square and other parts of Iraq suspend anti-government protests until the COVID-19 is brought under control.",41:"2020-03-22 - Iraq imposes nation-wide lockdown to contain COVID-19 pandemic",42:"2020-04-09 - President Salih named Mustafa Al-Kadhimi as Prime Minister-designate",43:"2020-05-06 - Parliament approves Mustafa Al-Kadhimi as new prime minister",44:"2020-07-06 - The renowned Iraqi expert on armed groups Hisham al-Hashimi, was shot dead in Baghdad.",45:"2020-07-20 - Prime Minister al-Kadhimi meets with President Donald Trump in the White House.",46:"2020-08-19 - A female activist Reham Yacoub رهام يعقوب was killed in Basra.",47:"2020-09-30 - Iran-backed militias launched rockets targeting U.S. troops that landed near Erbil International Airport in the KRI",48:"2020-10-01 - Iraq’s protest reaches one-year mark",49:"2020-10-25 - With pandemic restrictions lifted, protests resumed at Baghdad’s Tahrir Square as the movement hit the one-year mark of Oct 2019 protests",50:"2020-11-02 - Protesters blocked all roads leading to main Gulf port Umm Qasr ",51:"2020-11-27 - Attack on Al-Habboubi or Haboubi Square in Nasiriyah, Thi Qar province",52:"2020-11-27 - Militiamen of Rab Allah raided a massage parlour and liquor stores in Baghdad, which they saw as morally unacceptable and corrupting Iraqi youth.",53:"2020-12-16 - A well-known anti-government activist Salah al-Iraqi killed in Baghdad’s al-Jadeed suburb.",54:"2020-12-02 - Protests flare up in KRI’s Sulaymaniyah province.",55:"2020-12-18 - Intense public discontent as the central bank devalues the currency by around 20%, adding inflationary pressure ",56:"2020-12-22 - Iraq signed a preliminary deal to receive 1.5 million doses of the Pfizer–BioNTech COVID-19 vaccine in early 2021",57:"2021-01-19 - The government approves the decision to move the elections originally scheduled for June 6, 2021 to October 10, 2021.",58:"2021-01-21 - Twin suicide bombings in Baghdad s market of Tayaran Square, IS claimed responsibility",59:"2021-02-01 - Anti-government protests in Nasiriyah over deteriorating public services. Demonstrators regularly gathered in Al-Habboubi Square",60:"2021-02-15 - Multiple rockets fired at Erbil, the capital of the KRI",61:"2021-02-18 - Government imposes a total curfew on Friday, Saturday and Sunday of each week from Feb 18th until Mar 8th",62:"2021-03-05 - Pope Francis visits Iraq",63:"2021-03-21 - The Ministry of Health announces the arrival of the first batch of the Pfizer-BioNTech vaccine",64:"2021-03-31 - Council of Representatives passed the budget law with a record deficit and kept the currency devaluation.",65:"2021-04-01 - Fuel crisis in the province of Thi Qar, as protesters week-long sit-in against unemployment shut the Nasiriyah oil refinery.",66:"2021-04-22 - Iraq surpassed one million COVID-19 cases",67:"2021-04-25 - Fire brok out in the coronavirus ICU of Baghdad hospital",68:"2021-05-04 - Health Minister resigns over fire at covid-19 hospital in Baghdad",69:"2021-07-12 - Fire in covid-19 hospital in the southern Iraqi city of Nasiriyah",70:"2021-07-20 - Terrorist bombing in Baghdad in the eve of Al-Adha Holiday"},o,g,p,y,n,function(){d=Q(this),a(2,d),a(10,g)},function(){f=Q(this),a(3,f),a(11,p)},function(){m=W(this.value),a(5,m)},function(){c=this.clientWidth,a(6,c)},function(){h=this.clientHeight,a(1,h)},e=>y(e)]}class Be extends e{constructor(e){super(),t(this,e,qe,Se,a,{dataTable:13,info:0},null,[-1,-1])}}export{Be as default,Te as load};
