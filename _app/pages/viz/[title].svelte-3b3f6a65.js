var t=Object.defineProperty,e=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(e,s,a)=>s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a;import{S as l,i,s as c,e as p,k as d,c as u,a as f,n as g,d as m,b as h,E as _,f as b,F as $,t as v,g as j,h as y,l as O,G as S,M as w,j as E,m as I,o as P,x as M,u as k,v as D}from"../../chunks/vendor-7fcd3968.js";import{b as q}from"../../chunks/paths-45dac81d.js";import{P as x}from"../../chunks/PageIntro-30398bf4.js";var z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/undp-dli-iq/_app/assets/coding-tree.d831345c.png"}),T=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/undp-dli-iq/_app/assets/core-grievances.ff90d807.png"}),V=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/undp-dli-iq/_app/assets/future-outlook.17e12b8b.png"}),G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/undp-dli-iq/_app/assets/pipeline.9f08525b.png"}),F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/undp-dli-iq/_app/assets/un-data-policy-and-data-pipeline.541ba195.png"});function H(t,e,s){const a=t.slice();return a[1]=e[s],a}function N(t){let e,s,a,n,r,o,l=t[1].title+"",i=t[1].description+"";return{c(){e=p("div"),s=p("h3"),a=v(l),n=d(),r=p("p"),o=v(i),this.h()},l(t){e=u(t,"DIV",{class:!0});var c=f(e);s=u(c,"H3",{});var p=f(s);a=j(p,l),p.forEach(m),n=g(c),r=u(c,"P",{});var d=f(r);o=j(d,i),d.forEach(m),c.forEach(m),this.h()},h(){h(e,"class","col-12 col-md-4")},m(t,l){b(t,e,l),$(e,s),$(s,a),$(e,n),$(e,r),$(r,o)},p(t,e){1&e&&l!==(l=t[1].title+"")&&y(a,l),1&e&&i!==(i=t[1].description+"")&&y(o,i)},d(t){t&&m(e)}}}function A(t){let e,s,a,n,r,o,l,i,c,v=t[1].title&&N(t);return{c(){e=p("div"),v&&v.c(),s=d(),a=p("div"),n=p("div"),r=p("img"),c=d(),this.h()},l(t){e=u(t,"DIV",{class:!0});var o=f(e);v&&v.l(o),s=g(o),a=u(o,"DIV",{class:!0});var l=f(a);n=u(l,"DIV",{class:!0});var i=f(n);r=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(m),l.forEach(m),c=g(o),o.forEach(m),this.h()},h(){h(r,"class","img-fluid"),_(r.src,o=t[1].img_path.default)||h(r,"src",o),h(r,"alt",l=t[1].title),h(n,"class","d-flex justify-content-center"),h(a,"class",i="col-12 col-md-"+(t[1].title?"8":"12")),h(e,"class","row my-3 border-bottom border-light")},m(t,o){b(t,e,o),v&&v.m(e,null),$(e,s),$(e,a),$(a,n),$(n,r),$(e,c)},p(t,n){t[1].title?v?v.p(t,n):(v=N(t),v.c(),v.m(e,s)):v&&(v.d(1),v=null),1&n&&!_(r.src,o=t[1].img_path.default)&&h(r,"src",o),1&n&&l!==(l=t[1].title)&&h(r,"alt",l),1&n&&i!==(i="col-12 col-md-"+(t[1].title?"8":"12"))&&h(a,"class",i)},d(t){t&&m(e),v&&v.d()}}}function B(t){let e,s=t[0],a=[];for(let n=0;n<s.length;n+=1)a[n]=A(H(t,s,n));return{c(){for(let t=0;t<a.length;t+=1)a[t].c();e=O()},l(t){for(let e=0;e<a.length;e+=1)a[e].l(t);e=O()},m(t,s){for(let e=0;e<a.length;e+=1)a[e].m(t,s);b(t,e,s)},p(t,[n]){if(1&n){let r;for(s=t[0],r=0;r<s.length;r+=1){const o=H(t,s,r);a[r]?a[r].p(o,n):(a[r]=A(o),a[r].c(),a[r].m(e.parentNode,e))}for(;r<a.length;r+=1)a[r].d(1);a.length=s.length}},i:S,o:S,d(t){w(a,t),t&&m(e)}}}function C(t,e,s){let{sections:a}=e;return t.$$set=t=>{"sections"in t&&s(0,a=t.sections)},[a]}class J extends l{constructor(t){super(),i(this,t,C,B,c,{sections:0})}}function K(t){let e,s,a,n,r;return s=new x({props:{title:t[0].title,description:t[0].desc}}),n=new J({props:{sections:t[0].sections}}),{c(){e=p("div"),E(s.$$.fragment),a=d(),E(n.$$.fragment),this.h()},l(t){e=u(t,"DIV",{class:!0});var r=f(e);I(s.$$.fragment,r),a=g(r),I(n.$$.fragment,r),r.forEach(m),this.h()},h(){h(e,"class","container")},m(t,o){b(t,e,o),P(s,e,null),$(e,a),P(n,e,null),r=!0},p(t,[e]){const a={};1&e&&(a.title=t[0].title),1&e&&(a.description=t[0].desc),s.$set(a);const r={};1&e&&(r.sections=t[0].sections),n.$set(r)},i(t){r||(M(s.$$.fragment,t),M(n.$$.fragment,t),r=!0)},o(t){k(s.$$.fragment,t),k(n.$$.fragment,t),r=!1},d(t){t&&m(e),D(s),D(n)}}}const L={"./_images/coding-tree.png":z,"./_images/core-grievances.png":T,"./_images/future-outlook.png":V,"./_images/pipeline.png":G,"./_images/un-data-policy-and-data-pipeline.png":F};async function Q({fetch:t,page:l}){const i=q+l.path,c=await t(`${i}.json`),p=await c.json();return p.data.sections=p.data.sections.map((t=>{return l=((t,e)=>{for(var s in e||(e={}))n.call(e,s)&&o(t,s,e[s]);if(a)for(var s of a(e))r.call(e,s)&&o(t,s,e[s]);return t})({},t),i={img_path:L["./_images/"+t.img]},e(l,s(i));var l,i})),{props:{data:p.data}}}function R(t,e,s){let{data:a}=e;return t.$$set=t=>{"data"in t&&s(0,a=t.data)},[a]}class U extends l{constructor(t){super(),i(this,t,R,K,c,{data:0})}}export{U as default,Q as load};
