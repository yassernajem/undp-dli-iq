var a=Object.defineProperty,e=Object.defineProperties,t=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(e,t,s)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;import{S as c,i as n,s as i,e as f,t as h,k as d,c as u,a as v,g as m,n as p,d as g,f as b,F as $,G as w,j as E,m as y,b as _,a0 as I,o as O,a1 as D,a3 as L,$ as j,x as k,u as V,v as x,M as S,a4 as P,ac as T,ad as C,ae as A,af as N,y as B,U as M,C as U,a9 as z}from"../../../chunks/vendor-bd331711.js";import{b as F}from"../../../chunks/paths-45dac81d.js";import{S as G,L as H}from"../../../chunks/LinechartStream-5533fba7.js";import{P as W}from"../../../chunks/PageIntro-55aea285.js";function q(a,e,t){const s=a.slice();return s[25]=e[t],s}function J(a,e,t){const s=a.slice();return s[28]=e[t],s}function K(a){let e,t,s,l,o=a[28]+"";return{c(){e=f("option"),t=h(o),s=d(),this.h()},l(a){e=u(a,"OPTION",{});var l=v(e);t=m(l,o),s=p(l),l.forEach(g),this.h()},h(){e.__value=l=a[28],e.value=e.__value},m(a,l){b(a,e,l),$(e,t),$(e,s)},p:w,d(a){a&&g(e)}}}function Q(a){let e,t,s,l,o=a[25]+"";return{c(){e=f("option"),t=h(o),s=d(),this.h()},l(a){e=u(a,"OPTION",{});var l=v(e);t=m(l,o),s=p(l),l.forEach(g),this.h()},h(){e.__value=l=a[25],e.value=e.__value},m(a,l){b(a,e,l),$(e,t),$(e,s)},p:w,d(a){a&&g(e)}}}function R(a){let e,t,s,l,o,r,c,n,i,w,T,C,A,N,B,M,U,z,F,R,X,Y,Z,aa,ea,ta,sa,la,oa,ra,ca,na,ia,fa,ha,da,ua,va,ma,pa,ga,ba,$a,wa,Ea,ya,_a,Ia,Oa,Da,La,ja;t=new W({props:{title:a[0].title}});let ka=a[9],Va=[];for(let f=0;f<ka.length;f+=1)Va[f]=K(J(a,ka,f));let xa=a[10],Sa=[];for(let f=0;f<xa.length;f+=1)Sa[f]=Q(q(a,xa,f));return ma=new G({props:{width:a[4],height:a[5],data:a[8],groupColors:a[11],view:a[6],dataEvents:a[7]}}),Oa=new H({props:{width:a[4],data:a[3]}}),{c(){e=f("div"),E(t.$$.fragment),s=d(),l=f("div"),o=f("div"),r=f("div"),c=f("div"),n=f("div"),i=f("label"),w=h("Language"),T=d(),C=f("select");for(let a=0;a<Va.length;a+=1)Va[a].c();A=d(),N=f("div"),B=f("div"),M=f("label"),U=h("Macro category"),z=d(),F=f("select");for(let a=0;a<Sa.length;a+=1)Sa[a].c();R=d(),X=f("div"),Y=f("label"),Z=h("View"),aa=d(),ea=f("div"),ta=f("input"),sa=d(),la=f("label"),oa=h("Stack"),ra=d(),ca=f("input"),na=d(),ia=f("label"),fa=h("Split"),ha=d(),da=f("div"),ua=f("div"),va=f("div"),E(ma.$$.fragment),ba=d(),$a=f("div"),wa=f("div"),Ea=f("p"),ya=f("small"),_a=h("Total tweets"),Ia=d(),E(Oa.$$.fragment),this.h()},l(a){e=u(a,"DIV",{class:!0});var f=v(e);y(t.$$.fragment,f),f.forEach(g),s=p(a),l=u(a,"DIV",{class:!0});var h=v(l);o=u(h,"DIV",{class:!0});var d=v(o);r=u(d,"DIV",{class:!0});var b=v(r);c=u(b,"DIV",{class:!0});var $=v(c);n=u($,"DIV",{class:!0});var E=v(n);i=u(E,"LABEL",{for:!0,class:!0});var _=v(i);w=m(_,"Language"),_.forEach(g),T=p(E),C=u(E,"SELECT",{class:!0,id:!0,"aria-label":!0});var I=v(C);for(let e=0;e<Va.length;e+=1)Va[e].l(I);I.forEach(g),E.forEach(g),$.forEach(g),A=p(b),N=u(b,"DIV",{class:!0});var O=v(N);B=u(O,"DIV",{class:!0});var D=v(B);M=u(D,"LABEL",{for:!0,class:!0});var L=v(M);U=m(L,"Macro category"),L.forEach(g),z=p(D),F=u(D,"SELECT",{class:!0,id:!0,"aria-label":!0});var j=v(F);for(let e=0;e<Sa.length;e+=1)Sa[e].l(j);j.forEach(g),D.forEach(g),O.forEach(g),R=p(b),X=u(b,"DIV",{class:!0});var k=v(X);Y=u(k,"LABEL",{for:!0,class:!0});var V=v(Y);Z=m(V,"View"),V.forEach(g),aa=p(k),ea=u(k,"DIV",{class:!0,role:!0});var x=v(ea);ta=u(x,"INPUT",{type:!0,class:!0,name:!0,id:!0,autocomplete:!0}),sa=p(x),la=u(x,"LABEL",{class:!0,for:!0});var S=v(la);oa=m(S,"Stack"),S.forEach(g),ra=p(x),ca=u(x,"INPUT",{type:!0,class:!0,name:!0,id:!0,autocomplete:!0}),na=p(x),ia=u(x,"LABEL",{class:!0,for:!0});var P=v(ia);fa=m(P,"Split"),P.forEach(g),x.forEach(g),k.forEach(g),b.forEach(g),ha=p(d),da=u(d,"DIV",{class:!0});var G=v(da);ua=u(G,"DIV",{class:!0});var H=v(ua);va=u(H,"DIV",{class:!0});var W=v(va);y(ma.$$.fragment,W),W.forEach(g),H.forEach(g),G.forEach(g),ba=p(d),$a=u(d,"DIV",{class:!0});var q=v($a);wa=u(q,"DIV",{class:!0});var J=v(wa);Ea=u(J,"P",{class:!0});var K=v(Ea);ya=u(K,"SMALL",{});var Q=v(ya);_a=m(Q,"Total tweets"),Q.forEach(g),K.forEach(g),Ia=p(J),y(Oa.$$.fragment,J),J.forEach(g),q.forEach(g),d.forEach(g),h.forEach(g),this.h()},h(){_(e,"class","container"),_(i,"for","language"),_(i,"class","form-label"),_(C,"class","form-select"),_(C,"id","language"),_(C,"aria-label","Language"),void 0===a[1]&&I((()=>a[16].call(C))),_(n,"class","mb-3"),_(c,"class","col-md-3"),_(M,"for","macroCategory"),_(M,"class","form-label"),_(F,"class","form-select"),_(F,"id","macroCategory"),_(F,"aria-label","macroCategory"),void 0===a[2]&&I((()=>a[17].call(F))),_(B,"class","mb-3"),_(N,"class","col-md-4"),_(Y,"for","options"),_(Y,"class","form-label w-100"),_(ta,"type","radio"),_(ta,"class","btn-check"),_(ta,"name","options"),_(ta,"id","option1"),_(ta,"autocomplete","off"),ta.__value="stackOffsetNone",ta.value=ta.__value,a[19][0].push(ta),_(la,"class","btn btn-secondary"),_(la,"for","option1"),_(ca,"type","radio"),_(ca,"class","btn-check"),_(ca,"name","options"),_(ca,"id","option2"),_(ca,"autocomplete","off"),ca.__value="stackOffsetSplit",ca.value=ca.__value,a[19][0].push(ca),_(ia,"class","btn btn-secondary"),_(ia,"for","option2"),_(ea,"class","btn-group"),_(ea,"role","group"),_(X,"class","col-md-auto ms-auto"),_(r,"class","row border-bottom py-2"),_(va,"class","w-100 h-100"),I((()=>a[21].call(va))),_(ua,"class","col-12"),_(da,"class","row flex-grow-1 flex-shrink-1 overflow-hidden"),I((()=>a[22].call(da))),_(Ea,"class","text-muted mb-0"),_(wa,"class","col-12"),_($a,"class","row py-2 border-top"),_(o,"class","container h-100 d-flex flex-column"),_(l,"class","bg-light w-100 containerViz svelte-11zrb3w")},m(f,h){b(f,e,h),O(t,e,null),b(f,s,h),b(f,l,h),$(l,o),$(o,r),$(r,c),$(c,n),$(n,i),$(i,w),$(n,T),$(n,C);for(let a=0;a<Va.length;a+=1)Va[a].m(C,null);D(C,a[1]),$(r,A),$(r,N),$(N,B),$(B,M),$(M,U),$(B,z),$(B,F);for(let a=0;a<Sa.length;a+=1)Sa[a].m(F,null);D(F,a[2]),$(r,R),$(r,X),$(X,Y),$(Y,Z),$(X,aa),$(X,ea),$(ea,ta),ta.checked=ta.__value===a[6],$(ea,sa),$(ea,la),$(la,oa),$(ea,ra),$(ea,ca),ca.checked=ca.__value===a[6],$(ea,na),$(ea,ia),$(ia,fa),$(o,ha),$(o,da),$(da,ua),$(ua,va),O(ma,va,null),pa=L(va,a[21].bind(va)),ga=L(da,a[22].bind(da)),$(o,ba),$(o,$a),$($a,wa),$(wa,Ea),$(Ea,ya),$(ya,_a),$(wa,Ia),O(Oa,wa,null),Da=!0,La||(ja=[j(C,"change",a[16]),j(F,"change",a[17]),j(ta,"change",a[18]),j(ca,"change",a[20])],La=!0)},p(a,[e]){const s={};if(1&e&&(s.title=a[0].title),t.$set(s),512&e){let t;for(ka=a[9],t=0;t<ka.length;t+=1){const s=J(a,ka,t);Va[t]?Va[t].p(s,e):(Va[t]=K(s),Va[t].c(),Va[t].m(C,null))}for(;t<Va.length;t+=1)Va[t].d(1);Va.length=ka.length}if(514&e&&D(C,a[1]),1024&e){let t;for(xa=a[10],t=0;t<xa.length;t+=1){const s=q(a,xa,t);Sa[t]?Sa[t].p(s,e):(Sa[t]=Q(s),Sa[t].c(),Sa[t].m(F,null))}for(;t<Sa.length;t+=1)Sa[t].d(1);Sa.length=xa.length}1028&e&&D(F,a[2]),64&e&&(ta.checked=ta.__value===a[6]),64&e&&(ca.checked=ca.__value===a[6]);const l={};16&e&&(l.width=a[4]),32&e&&(l.height=a[5]),256&e&&(l.data=a[8]),64&e&&(l.view=a[6]),128&e&&(l.dataEvents=a[7]),ma.$set(l);const o={};16&e&&(o.width=a[4]),8&e&&(o.data=a[3]),Oa.$set(o)},i(a){Da||(k(t.$$.fragment,a),k(ma.$$.fragment,a),k(Oa.$$.fragment,a),Da=!0)},o(a){V(t.$$.fragment,a),V(ma.$$.fragment,a),V(Oa.$$.fragment,a),Da=!1},d(o){o&&g(e),x(t),o&&g(s),o&&g(l),S(Va,o),S(Sa,o),a[19][0].splice(a[19][0].indexOf(ta),1),a[19][0].splice(a[19][0].indexOf(ca),1),x(ma),pa(),ga(),x(Oa),La=!1,P(ja)}}}async function X({page:a,fetch:e}){const t=F+a.path,s=await e(`${t}/data.json`),l=await e(`${t}.json`),o=await l.json(),r=await s.json();return{props:{info:o.data,tweets:r.tweets,events:r.events,emo:r.emo}}}function Y(a,c,n){let i,f,h,d,u,v,{info:m}=c,{emo:p}=c,{events:g}=c,{tweets:b}=c,$=Object.keys(p).sort(),w=$[0],E=["all",...new Set(Object.values(p).flat().map((a=>a.macro_dimension)))],y=E[0];new Set(p[w].map((a=>a.dimension)));const _=T(Object.values(p).flat(),(a=>a.macro_dimension),(a=>a.dimension)).map(((a,e)=>{const t=C[e],s=1/a[1].length;return a[1].map(((e,l)=>({category:e[0],macro_category:a[0],color:A(t).brighter(l*s)})))})).flat();let I="stackOffsetNone";return a.$$set=a=>{"info"in a&&n(0,m=a.info),"emo"in a&&n(12,p=a.emo),"events"in a&&n(13,g=a.events),"tweets"in a&&n(14,b=a.tweets)},a.$$.update=()=>{4102&a.$$.dirty&&n(8,i=p[w].map((a=>{return c=((a,e)=>{for(var t in e||(e={}))l.call(e,t)&&r(a,t,e[t]);if(s)for(var t of s(e))o.call(e,t)&&r(a,t,e[t]);return a})({},a),n={date:new Date(a.date)},e(c,t(n));var c,n})).filter((a=>"all"===y||y===a.macro_dimension)).sort(((a,e)=>N(a.date,e.date)))),16384&a.$$.dirty&&n(3,f=b.map((a=>({y:a.tweets_count,x:new Date(a.date)})))),8192&a.$$.dirty&&n(7,h=g.map((a=>({date:new Date(a.date),event:a.event})))),8&a.$$.dirty&&B("brushExtentDefault",M(f,(a=>a.x))),8&a.$$.dirty&&n(15,d=U(M(f,(a=>a.x)))),32768&a.$$.dirty&&B("brushExtent",d)},[m,w,y,f,u,v,I,h,i,$,E,_,p,g,b,d,function(){w=z(this),n(1,w),n(9,$)},function(){y=z(this),n(2,y),n(10,E)},function(){I=this.__value,n(6,I)},[[]],function(){I=this.__value,n(6,I)},function(){u=this.clientWidth,n(4,u)},function(){v=this.clientHeight,n(5,v)}]}class Z extends c{constructor(a){super(),n(this,a,Y,R,i,{info:0,emo:12,events:13,tweets:14})}}export{Z as default,X as load};