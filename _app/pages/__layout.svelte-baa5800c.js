import{S as K,i as Q,s as R,e as $,t as V,c as b,a as k,h as T,d as m,b as p,F as B,g as y,G as v,j as te,l as U,E as G,H as X,k as M,m as I,I as ue,J as de,K as _e,q as E,o as N,n as ge,p as $e,L as me,w as O,x as C,M as be,y as H,N as z,B as P,v as he,O as ve,P as F,Q as ke,R as we}from"../chunks/index-cc75fbfc.js";import{b as J}from"../chunks/paths-396f020f.js";import{p as Ee}from"../chunks/stores-103a878d.js";import{w as pe}from"../chunks/index-d249e7ef.js";function oe(a){let t,n,e,s,i;return{c(){t=$("a"),n=$("span"),e=V(a[0]),s=V(a[1]),this.h()},l(o){t=b(o,"A",{href:!0,class:!0});var l=k(t);n=b(l,"SPAN",{class:!0});var r=k(n);e=T(r,a[0]),r.forEach(m),s=T(l,a[1]),l.forEach(m),this.h()},h(){p(n,"class","nav-icon material-icons-outlined svelte-tkwrvw"),p(t,"href",i=""+(J+a[2])),p(t,"class","nav-item svelte-tkwrvw"),B(t,"active",a[4].url.pathname===J+a[2])},m(o,l){y(o,t,l),v(t,n),v(n,e),v(t,s)},p(o,l){l&1&&te(e,o[0]),l&2&&te(s,o[1]),l&4&&i!==(i=""+(J+o[2]))&&p(t,"href",i),l&20&&B(t,"active",o[4].url.pathname===J+o[2])},d(o){o&&m(t)}}}function ye(a){let t,n=!a[3]&&oe(a);return{c(){n&&n.c(),t=U()},l(e){n&&n.l(e),t=U()},m(e,s){n&&n.m(e,s),y(e,t,s)},p(e,[s]){e[3]?n&&(n.d(1),n=null):n?n.p(e,s):(n=oe(e),n.c(),n.m(t.parentNode,t))},i:G,o:G,d(e){n&&n.d(e),e&&m(t)}}}function Ne(a,t,n){let e;X(a,Ee,r=>n(4,e=r));let{icon:s}=t,{name:i}=t,{route:o}=t,{hidden:l=!1}=t;return a.$$set=r=>{"icon"in r&&n(0,s=r.icon),"name"in r&&n(1,i=r.name),"route"in r&&n(2,o=r.route),"hidden"in r&&n(3,l=r.hidden)},[s,i,o,l,e]}class ne extends K{constructor(t){super(),Q(this,t,Ne,ye,R,{icon:0,name:1,route:2,hidden:3})}}function ie(a){let t,n,e,s,i;const o=a[3].default,l=me(o,a,a[2],null);return{c(){t=$("div"),n=$("span"),e=V(a[0]),s=M(),l&&l.c(),this.h()},l(r){t=b(r,"DIV",{class:!0});var _=k(t);n=b(_,"SPAN",{class:!0});var f=k(n);e=T(f,a[0]),f.forEach(m),s=I(_),l&&l.l(_),_.forEach(m),this.h()},h(){p(n,"class","nav-title svelte-k38ued"),p(t,"class","nav-group svelte-k38ued")},m(r,_){y(r,t,_),v(t,n),v(n,e),v(t,s),l&&l.m(t,null),i=!0},p(r,_){(!i||_&1)&&te(e,r[0]),l&&l.p&&(!i||_&4)&&ue(l,o,r,r[2],i?_e(o,r[2],_,null):de(r[2]),null)},i(r){i||(E(l,r),i=!0)},o(r){N(l,r),i=!1},d(r){r&&m(t),l&&l.d(r)}}}function Se(a){let t,n,e=!a[1]&&ie(a);return{c(){e&&e.c(),t=U()},l(s){e&&e.l(s),t=U()},m(s,i){e&&e.m(s,i),y(s,t,i),n=!0},p(s,[i]){s[1]?e&&(ge(),N(e,1,1,()=>{e=null}),$e()):e?(e.p(s,i),i&2&&E(e,1)):(e=ie(s),e.c(),E(e,1),e.m(t.parentNode,t))},i(s){n||(E(e),n=!0)},o(s){N(e),n=!1},d(s){e&&e.d(s),s&&m(t)}}}function Me(a,t,n){let{$$slots:e={},$$scope:s}=t,{title:i}=t,{hidden:o=!1}=t;return a.$$set=l=>{"title"in l&&n(0,i=l.title),"hidden"in l&&n(1,o=l.hidden),"$$scope"in l&&n(2,s=l.$$scope)},[i,o,s,e]}class x extends K{constructor(t){super(),Q(this,t,Me,Se,R,{title:0,hidden:1})}}var Z=(a=>(a.not_opted="",a.denied="denied",a.necessary="necessary",a.functional="functional",a))(Z||{});function se(a,t){let n;{n=t;const s=localStorage.getItem(a);s&&(n=JSON.parse(s))}const e=pe(n);return e.subscribe(s=>{localStorage.setItem(a,JSON.stringify(s))}),e}const ee=se("gdprConsentVisible",!0),ce=se("gdprConsent",""),Ie=se("betaMode",!1),j=pe(!0);function Ae(a){let t,n;return t=new ne({props:{name:"Home",icon:"home",route:"/"}}),{c(){O(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,s){H(t,e,s),n=!0},p:G,i(e){n||(E(t.$$.fragment,e),n=!0)},o(e){N(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}function De(a){let t,n;return t=new ne({props:{name:"Modrinth Manager",icon:"view_in_ar_new",route:"/modrinth-manager"}}),{c(){O(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,s){H(t,e,s),n=!0},p:G,i(e){n||(E(t.$$.fragment,e),n=!0)},o(e){N(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}function Le(a){let t,n;return t=new ne({props:{name:"Discord April Fools",icon:"theater_comedy",route:"/discord-april-fools"}}),{c(){O(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,s){H(t,e,s),n=!0},p:G,i(e){n||(E(t.$$.fragment,e),n=!0)},o(e){N(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}function Ve(a){let t,n,e,s,i,o,l,r,_,f,d,c,g,w,D,q,Y;return o=new x({props:{title:"General",$$slots:{default:[Ae]},$$scope:{ctx:a}}}),r=new x({props:{title:"Minecraft",hidden:!a[1],$$slots:{default:[De]},$$scope:{ctx:a}}}),f=new x({props:{title:"Miscellaneous",$$slots:{default:[Le]},$$scope:{ctx:a}}}),{c(){t=$("nav"),n=$("a"),e=$("img"),i=M(),O(o.$$.fragment),l=M(),O(r.$$.fragment),_=M(),O(f.$$.fragment),d=M(),c=$("button"),g=$("span"),w=V("menu"),this.h()},l(u){t=b(u,"NAV",{class:!0});var h=k(t);n=b(h,"A",{href:!0,class:!0});var S=k(n);e=b(S,"IMG",{src:!0,alt:!0,class:!0}),S.forEach(m),i=I(h),C(o.$$.fragment,h),l=I(h),C(r.$$.fragment,h),_=I(h),C(f.$$.fragment,h),h.forEach(m),d=I(u),c=b(u,"BUTTON",{class:!0});var A=k(c);g=b(A,"SPAN",{class:!0});var L=k(g);w=T(L,"menu"),L.forEach(m),A.forEach(m),this.h()},h(){be(e.src,s=J+"/assets/logo.png")||p(e,"src",s),p(e,"alt","logo"),p(e,"class","svelte-hm3vw3"),p(n,"href",J+"/"),p(n,"class","nav-header svelte-hm3vw3"),p(t,"class","svelte-hm3vw3"),B(t,"hidden",!a[0]),p(g,"class","icon material-icons-outlined svelte-hm3vw3"),p(c,"class","nav-toggle svelte-hm3vw3")},m(u,h){y(u,t,h),v(t,n),v(n,e),v(t,i),H(o,t,null),v(t,l),H(r,t,null),v(t,_),H(f,t,null),y(u,d,h),y(u,c,h),v(c,g),v(g,w),D=!0,q||(Y=z(c,"click",a[2]),q=!0)},p(u,[h]){const S={};h&512&&(S.$$scope={dirty:h,ctx:u}),o.$set(S);const A={};h&2&&(A.hidden=!u[1]),h&512&&(A.$$scope={dirty:h,ctx:u}),r.$set(A);const L={};h&512&&(L.$$scope={dirty:h,ctx:u}),f.$set(L),h&1&&B(t,"hidden",!u[0])},i(u){D||(E(o.$$.fragment,u),E(r.$$.fragment,u),E(f.$$.fragment,u),D=!0)},o(u){N(o.$$.fragment,u),N(r.$$.fragment,u),N(f.$$.fragment,u),D=!1},d(u){u&&m(t),P(o),P(r),P(f),u&&m(d),u&&m(c),q=!1,Y()}}}function Te(a,t,n){let e,s;X(a,j,c=>n(0,e=c)),X(a,Ie,c=>n(1,s=c));const i={x:0,y:0},o={x:0,y:0},l=c=>{const g=c.changedTouches[0];i.x=g.screenX,i.y=g.screenY},r=c=>{const g=c.changedTouches[0];o.x=g.screenX,o.y=g.screenY,_()};function _(){const c=o.x-i.x,g=o.y-i.y;Math.abs(c)>Math.abs(g)&&(c>0?F(j,e=!0,e):F(j,e=!1,e))}let f;return he(()=>{f=document.body,f.addEventListener("touchstart",l),f.addEventListener("touchend",r)}),ve(()=>{f==null||f.removeEventListener("touchstart",l),f==null||f.removeEventListener("touchend",r)}),[e,s,()=>F(j,e=!e,e)]}class Oe extends K{constructor(t){super(),Q(this,t,Te,Ve,R,{})}}function fe(a){let t,n,e,s,i,o,l,r,_,f,d,c,g,w,D,q,Y;return{c(){t=$("div"),n=$("div"),e=$("span"),s=V("By using this site, you accept the use of necessary Cookies (if any)."),i=M(),o=$("span"),l=$("div"),r=$("button"),_=V("Okay"),f=M(),d=$("a"),c=V("Learn more about cookies"),g=M(),w=$("div"),D=V("\u{1F36A}"),this.h()},l(u){t=b(u,"DIV",{class:!0});var h=k(t);n=b(h,"DIV",{class:!0});var S=k(n);e=b(S,"SPAN",{class:!0});var A=k(e);s=T(A,"By using this site, you accept the use of necessary Cookies (if any)."),A.forEach(m),i=I(S),o=b(S,"SPAN",{});var L=k(o);l=b(L,"DIV",{class:!0});var W=k(l);r=b(W,"BUTTON",{class:!0});var ae=k(r);_=T(ae,"Okay"),ae.forEach(m),f=I(W),d=b(W,"A",{href:!0,target:!0,class:!0});var le=k(d);c=T(le,"Learn more about cookies"),le.forEach(m),W.forEach(m),L.forEach(m),S.forEach(m),h.forEach(m),g=I(u),w=b(u,"DIV",{class:!0});var re=k(w);D=T(re,"\u{1F36A}"),re.forEach(m),this.h()},h(){p(e,"class","cookie-text svelte-2bwf31"),p(r,"class","primary svelte-2bwf31"),p(d,"href","https://ec.europa.eu/info/cookies_en"),p(d,"target","_blank"),p(d,"class","button secondary svelte-2bwf31"),p(l,"class","button-wrapper svelte-2bwf31"),p(n,"class","cookie-consent svelte-2bwf31"),p(t,"class","cookie-consent-wrapper svelte-2bwf31"),B(t,"hidden",!a[1]),p(w,"class","cookie-toggle svelte-2bwf31")},m(u,h){y(u,t,h),v(t,n),v(n,e),v(e,s),v(n,i),v(n,o),v(o,l),v(l,r),v(r,_),v(l,f),v(l,d),v(d,c),y(u,g,h),y(u,w,h),v(w,D),q||(Y=[z(r,"click",a[2]),z(d,"click",a[3]),z(w,"click",a[4])],q=!0)},p(u,h){h&2&&B(t,"hidden",!u[1])},d(u){u&&m(t),u&&m(g),u&&m(w),q=!1,ke(Y)}}}function Ce(a){let t,n=a[0]==Z.not_opted&&fe(a);return{c(){n&&n.c(),t=U()},l(e){n&&n.l(e),t=U()},m(e,s){n&&n.m(e,s),y(e,t,s)},p(e,[s]){e[0]==Z.not_opted?n?n.p(e,s):(n=fe(e),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:G,o:G,d(e){n&&n.d(e),e&&m(t)}}}function He(a,t,n){let e,s;return X(a,ce,r=>n(0,e=r)),X(a,ee,r=>n(1,s=r)),[e,s,()=>ce.set(Z.necessary),()=>F(ee,s=!s,s),()=>F(ee,s=!s,s)]}class Pe extends K{constructor(t){super(),Q(this,t,He,Ce,R,{})}}function Be(a){let t,n,e,s,i,o,l,r;const _=a[3].default,f=me(_,a,a[2],null);return i=new Oe({}),l=new Pe({}),{c(){t=$("div"),n=$("div"),e=$("main"),f&&f.c(),s=M(),O(i.$$.fragment),o=M(),O(l.$$.fragment),this.h()},l(d){t=b(d,"DIV",{class:!0});var c=k(t);n=b(c,"DIV",{class:!0});var g=k(n);e=b(g,"MAIN",{class:!0});var w=k(e);f&&f.l(w),w.forEach(m),g.forEach(m),s=I(c),C(i.$$.fragment,c),o=I(c),C(l.$$.fragment,c),c.forEach(m),this.h()},h(){p(e,"class","svelte-1a7tk4"),p(n,"class","main-container svelte-1a7tk4"),B(n,"navHidden",!a[1]),p(t,"class","app svelte-1a7tk4")},m(d,c){y(d,t,c),v(t,n),v(n,e),f&&f.m(e,null),a[4](n),v(t,s),H(i,t,null),v(t,o),H(l,t,null),r=!0},p(d,[c]){f&&f.p&&(!r||c&4)&&ue(f,_,d,d[2],r?_e(_,d[2],c,null):de(d[2]),null),c&2&&B(n,"navHidden",!d[1])},i(d){r||(E(f,d),E(i.$$.fragment,d),E(l.$$.fragment,d),r=!0)},o(d){N(f,d),N(i.$$.fragment,d),N(l.$$.fragment,d),r=!1},d(d){d&&m(t),f&&f.d(d),a[4](null),P(i),P(l)}}}function qe(a,t,n){let e;X(a,j,c=>n(1,e=c));let{$$slots:s={},$$scope:i}=t,o,l;const r=c=>{o=c.matches};let _;const f=()=>{o&&F(j,e=!1,e)};he(()=>{l=window.matchMedia("screen and (max-width: 50rem)"),l.addEventListener("change",r),o=l.matches,_.addEventListener("click",f)}),ve(()=>{_==null||_.removeEventListener("click",f),l==null||l.removeEventListener("change",r)});function d(c){we[c?"unshift":"push"](()=>{_=c,n(0,_)})}return a.$$set=c=>{"$$scope"in c&&n(2,i=c.$$scope)},[_,e,i,s,d]}class Ue extends K{constructor(t){super(),Q(this,t,qe,Be,R,{})}}export{Ue as default};
