import{F as B,S as C,i as M,s as q,e as p,t as z,c as v,a as $,h as H,d as m,b as _,G as V,g as y,H as g,j as P,n as w,I as O,J as D,k as I,m as S,K as F,L as J,M as K,r as h,p as d,x as N,y as E,N as Q,z as A,C as k}from"../chunks/index-4816d605.js";import{b as G}from"../chunks/paths-396f020f.js";const R=()=>{const r=B("__svelte__");return{page:{subscribe:r.page.subscribe},navigating:{subscribe:r.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:r.navigating.subscribe}},session:r.session,updated:r.updated}},U={subscribe(r){return R().page.subscribe(r)}};function W(r){let e,a,s,o,i;return{c(){e=p("a"),a=p("span"),s=z(r[0]),o=z(r[1]),this.h()},l(n){e=v(n,"A",{href:!0,class:!0});var t=$(e);a=v(t,"SPAN",{class:!0});var l=$(a);s=H(l,r[0]),l.forEach(m),o=H(t,r[1]),t.forEach(m),this.h()},h(){_(a,"class","nav-icon material-icons-outlined svelte-8kt0yo"),_(e,"href",i=""+(G+r[2])),_(e,"class","nav-item svelte-8kt0yo"),V(e,"active",r[3].url.pathname===r[2])},m(n,t){y(n,e,t),g(e,a),g(a,s),g(e,o)},p(n,[t]){t&1&&P(s,n[0]),t&2&&P(o,n[1]),t&4&&i!==(i=""+(G+n[2]))&&_(e,"href",i),t&12&&V(e,"active",n[3].url.pathname===n[2])},i:w,o:w,d(n){n&&m(e)}}}function X(r,e,a){let s;O(r,U,t=>a(3,s=t));let{icon:o}=e,{name:i}=e,{route:n}=e;return r.$$set=t=>{"icon"in t&&a(0,o=t.icon),"name"in t&&a(1,i=t.name),"route"in t&&a(2,n=t.route)},[o,i,n,s]}class L extends C{constructor(e){super(),M(this,e,X,W,q,{icon:0,name:1,route:2})}}function Y(r){let e,a,s,o,i;const n=r[2].default,t=D(n,r,r[1],null);return{c(){e=p("div"),a=p("span"),s=z(r[0]),o=I(),t&&t.c(),this.h()},l(l){e=v(l,"DIV",{class:!0});var c=$(e);a=v(c,"SPAN",{class:!0});var u=$(a);s=H(u,r[0]),u.forEach(m),o=S(c),t&&t.l(c),c.forEach(m),this.h()},h(){_(a,"class","nav-title svelte-k38ued"),_(e,"class","nav-group svelte-k38ued")},m(l,c){y(l,e,c),g(e,a),g(a,s),g(e,o),t&&t.m(e,null),i=!0},p(l,[c]){(!i||c&1)&&P(s,l[0]),t&&t.p&&(!i||c&2)&&F(t,n,l,l[1],i?K(n,l[1],c,null):J(l[1]),null)},i(l){i||(h(t,l),i=!0)},o(l){d(t,l),i=!1},d(l){l&&m(e),t&&t.d(l)}}}function Z(r,e,a){let{$$slots:s={},$$scope:o}=e,{title:i}=e;return r.$$set=n=>{"title"in n&&a(0,i=n.title),"$$scope"in n&&a(1,o=n.$$scope)},[i,o,s]}class j extends C{constructor(e){super(),M(this,e,Z,Y,q,{title:0})}}function x(r){let e,a;return e=new L({props:{name:"Home",icon:"home",route:"/"}}),{c(){N(e.$$.fragment)},l(s){E(e.$$.fragment,s)},m(s,o){A(e,s,o),a=!0},p:w,i(s){a||(h(e.$$.fragment,s),a=!0)},o(s){d(e.$$.fragment,s),a=!1},d(s){k(e,s)}}}function ee(r){let e,a;return e=new L({props:{name:"Test",icon:"home",route:"/test"}}),{c(){N(e.$$.fragment)},l(s){E(e.$$.fragment,s)},m(s,o){A(e,s,o),a=!0},p:w,i(s){a||(h(e.$$.fragment,s),a=!0)},o(s){d(e.$$.fragment,s),a=!1},d(s){k(e,s)}}}function te(r){let e,a,s,o,i,n,t,l,c;return n=new j({props:{title:"General",$$slots:{default:[x]},$$scope:{ctx:r}}}),l=new j({props:{title:"Tools",$$slots:{default:[ee]},$$scope:{ctx:r}}}),{c(){e=p("nav"),a=p("a"),s=p("img"),i=I(),N(n.$$.fragment),t=I(),N(l.$$.fragment),this.h()},l(u){e=v(u,"NAV",{class:!0});var f=$(e);a=v(f,"A",{href:!0,class:!0});var b=$(a);s=v(b,"IMG",{src:!0,alt:!0,class:!0}),b.forEach(m),i=S(f),E(n.$$.fragment,f),t=S(f),E(l.$$.fragment,f),f.forEach(m),this.h()},h(){Q(s.src,o=G+"/assets/logo.png")||_(s,"src",o),_(s,"alt","logo"),_(s,"class","svelte-bpb4cy"),_(a,"href",G+"/"),_(a,"class","nav-header svelte-bpb4cy"),_(e,"class","svelte-bpb4cy")},m(u,f){y(u,e,f),g(e,a),g(a,s),g(e,i),A(n,e,null),g(e,t),A(l,e,null),c=!0},p(u,[f]){const b={};f&1&&(b.$$scope={dirty:f,ctx:u}),n.$set(b);const T={};f&1&&(T.$$scope={dirty:f,ctx:u}),l.$set(T)},i(u){c||(h(n.$$.fragment,u),h(l.$$.fragment,u),c=!0)},o(u){d(n.$$.fragment,u),d(l.$$.fragment,u),c=!1},d(u){u&&m(e),k(n),k(l)}}}class se extends C{constructor(e){super(),M(this,e,null,te,q,{})}}function ae(r){let e,a,s,o;e=new se({});const i=r[1].default,n=D(i,r,r[0],null);return{c(){N(e.$$.fragment),a=I(),s=p("main"),n&&n.c(),this.h()},l(t){E(e.$$.fragment,t),a=S(t),s=v(t,"MAIN",{class:!0});var l=$(s);n&&n.l(l),l.forEach(m),this.h()},h(){_(s,"class","svelte-1v232z2")},m(t,l){A(e,t,l),y(t,a,l),y(t,s,l),n&&n.m(s,null),o=!0},p(t,[l]){n&&n.p&&(!o||l&1)&&F(n,i,t,t[0],o?K(i,t[0],l,null):J(t[0]),null)},i(t){o||(h(e.$$.fragment,t),h(n,t),o=!0)},o(t){d(e.$$.fragment,t),d(n,t),o=!1},d(t){k(e,t),t&&m(a),t&&m(s),n&&n.d(t)}}}function ne(r,e,a){let{$$slots:s={},$$scope:o}=e;return r.$$set=i=>{"$$scope"in i&&a(0,o=i.$$scope)},[o,s]}class oe extends C{constructor(e){super(),M(this,e,ne,ae,q,{})}}export{oe as default};