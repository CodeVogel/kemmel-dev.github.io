function E(){}function C(t,e){for(const n in e)t[n]=e[n];return t}function T(t){return t()}function V(){return Object.create(null)}function B(t){t.forEach(T)}function D(t){return typeof t=="function"}function X(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Y(t){return Object.keys(t).length===0}function N(t,...e){if(t==null){for(const i of e)i(void 0);return E}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Z(t){let e;return N(t,n=>e=n)(),e}function $(t,e,n){t.$$.on_destroy.push(N(e,n))}function tt(t,e,n,i){if(t){const r=A(t,e,n,i);return t[0](r)}}function A(t,e,n,i){return t[1]&&i?C(n.ctx.slice(),t[1](i(e))):n.ctx}function et(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(e.dirty.length,r.length);for(let s=0;s<c;s+=1)o[s]=e.dirty[s]|r[s];return o}return e.dirty|r}return e.dirty}function nt(t,e,n,i,r,o){if(r){const c=A(e,n,i,o);t.p(c,r)}}function it(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function rt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ct(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function lt(t){return t&&D(t.destroy)?t.destroy:E}let m=!1;function st(){m=!0}function ot(){m=!1}function M(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&l.push(a)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,a=(r>0&&e[n[r]].claim_order<=u?r+1:M(1,r,P=>e[n[P]].claim_order,u))-1;i[l]=n[a]+1;const v=a+1;n[v]=l,r=Math.max(v,r)}const o=[],c=[];let s=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(o.push(e[l-1]);s>=l;s--)c.push(e[s]);s--}for(;s>=0;s--)c.push(e[s]);o.reverse(),c.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<c.length;l++){for(;u<o.length&&c[l].claim_order>=o[u].claim_order;)u++;const a=u<o.length?o[u]:null;t.insertBefore(c[l],a)}}function H(t,e){if(m){for(q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ut(t,e,n){m&&!n?H(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function at(t){t.parentNode&&t.parentNode.removeChild(t)}function ft(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function I(t){return document.createElement(t)}function z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function g(t){return document.createTextNode(t)}function _t(){return g(" ")}function dt(){return g("")}function F(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const U=["width","height"];function ht(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&U.indexOf(i)===-1?t[i]=e[i]:F(t,i,e[i])}function mt(t){return t.dataset.svelteH}function pt(t){return Array.from(t.childNodes)}function W(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function j(t,e,n,i,r=!1){W(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function S(t,e,n,i){return j(t,r=>r.nodeName===e,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];n[s.name]||o.push(s.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(e))}function yt(t,e,n){return S(t,e,n,I)}function bt(t,e,n){return S(t,e,n,z)}function G(t,e){return j(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>g(e),!0)}function gt(t){return G(t," ")}function xt(t,e){e=""+e,t.data!==e&&(t.data=e)}function vt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function J(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function wt(t,e){return new t(e)}let h;function p(t){h=t}function x(){if(!h)throw new Error("Function called outside component initialization");return h}function kt(t){x().$$.on_mount.push(t)}function Et(t){x().$$.after_update.push(t)}function Nt(){const t=x();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const o=J(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}const d=[],w=[];let _=[];const k=[],O=Promise.resolve();let b=!1;function K(){b||(b=!0,O.then(Q))}function At(){return K(),O}function L(t){_.push(t)}const y=new Set;let f=0;function Q(){if(f!==0)return;const t=h;do{try{for(;f<d.length;){const e=d[f];f++,p(e),R(e.$$)}}catch(e){throw d.length=0,f=0,e}for(p(null),d.length=0,f=0;w.length;)w.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];y.has(n)||(y.add(n),n())}_.length=0}while(d.length);for(;k.length;)k.pop()();b=!1,y.clear(),p(t)}function R(t){if(t.fragment!==null){t.update(),B(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}function jt(t){const e=[],n=[];_.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),_=e}export{Y as A,L as B,jt as C,h as D,p as E,T as F,d as G,K as H,st as I,ot as J,tt as K,nt as L,it as M,et as N,Nt as O,z as P,bt as Q,mt as R,Z as S,ct as T,C as U,rt as V,ht as W,lt as X,ft as Y,N as Z,_t as a,pt as b,yt as c,G as d,I as e,at as f,gt as g,H as h,ut as i,xt as j,$ as k,dt as l,Et as m,E as n,kt as o,F as p,vt as q,w as r,X as s,g as t,wt as u,At as v,B as w,V as x,Q as y,D as z};
