function D(){}const X=t=>t;function P(t,e){for(const n in e)t[n]=e[n];return t}function Y(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function B(t){return t()}function Z(){return Object.create(null)}function L(t){t.forEach(B)}function $(t){return typeof t=="function"}function tt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function et(t){return Object.keys(t).length===0}function M(t,...e){if(t==null){for(const i of e)i(void 0);return D}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function nt(t,e,n){t.$$.on_destroy.push(M(e,n))}function it(t,e,n,i){if(t){const c=k(t,e,n,i);return t[0](c)}}function k(t,e,n,i){return t[1]&&i?P(n.ctx.slice(),t[1](i(e))):n.ctx}function ct(t,e,n,i){if(t[2]&&i){const c=t[2](i(n));if(e.dirty===void 0)return c;if(typeof c=="object"){const o=[],r=Math.max(e.dirty.length,c.length);for(let s=0;s<r;s+=1)o[s]=e.dirty[s]|c[s];return o}return e.dirty|c}return e.dirty}function rt(t,e,n,i,c,o){if(c){const r=k(e,n,i,o);t.p(r,c)}}function lt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let m=!1;function st(){m=!0}function ot(){m=!1}function O(t,e,n,i){for(;t<e;){const c=t+(e-t>>1);n(c)<=i?t=c+1:e=c}return t}function T(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&l.push(a)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let c=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,a=(c>0&&e[n[c]].claim_order<=u?c+1:O(1,c,S=>e[n[S]].claim_order,u))-1;i[l]=n[a]+1;const E=a+1;n[E]=l,c=Math.max(E,c)}const o=[],r=[];let s=e.length-1;for(let l=n[c]+1;l!=0;l=i[l-1]){for(o.push(e[l-1]);s>=l;s--)r.push(e[s]);s--}for(;s>=0;s--)r.push(e[s]);o.reverse(),r.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<r.length;l++){for(;u<o.length&&r[l].claim_order>=o[u].claim_order;)u++;const a=u<o.length?o[u]:null;t.insertBefore(r[l],a)}}function q(t,e){t.appendChild(e)}function H(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ut(t){const e=v("style");return e.textContent="/* empty */",I(H(t),e),e.sheet}function I(t,e){return q(t.head||t,e),e.sheet}function R(t,e){if(m){for(T(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function at(t,e,n){m&&!n?R(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ft(t){t.parentNode&&t.parentNode.removeChild(t)}function _t(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function x(t){return document.createTextNode(t)}function dt(){return x(" ")}function ht(){return x("")}function mt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function F(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function pt(t,e,n){const i=e.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:F(t,e,n)}function yt(t){return t.dataset.svelteH}function bt(t){return Array.from(t.childNodes)}function U(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function j(t,e,n,i,c=!1){U(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const s=t[r];if(e(s)){const l=n(s);return l===void 0?t.splice(r,1):t[r]=l,c||(t.claim_info.last_index=r),s}}for(let r=t.claim_info.last_index-1;r>=0;r--){const s=t[r];if(e(s)){const l=n(s);return l===void 0?t.splice(r,1):t[r]=l,c?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,s}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function A(t,e,n,i){return j(t,c=>c.nodeName===e,c=>{const o=[];for(let r=0;r<c.attributes.length;r++){const s=c.attributes[r];n[s.name]||o.push(s.name)}o.forEach(r=>c.removeAttribute(r))},()=>i(e))}function gt(t,e,n){return A(t,e,n,v)}function xt(t,e,n){return A(t,e,n,z)}function W(t,e){return j(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(e),!0)}function wt(t){return W(t," ")}function Et(t,e){e=""+e,t.data!==e&&(t.data=e)}function Nt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function G(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function kt(t,e){return new t(e)}let h;function p(t){h=t}function w(){if(!h)throw new Error("Function called outside component initialization");return h}function vt(t){w().$$.on_mount.push(t)}function jt(t){w().$$.after_update.push(t)}function At(){const t=w();return(e,n,{cancelable:i=!1}={})=>{const c=t.$$.callbacks[e];if(c){const o=G(e,n,{cancelable:i});return c.slice().forEach(r=>{r.call(t,o)}),!o.defaultPrevented}return!0}}const d=[],N=[];let _=[];const b=[],C=Promise.resolve();let g=!1;function J(){g||(g=!0,C.then(Q))}function Ct(){return J(),C}function K(t){_.push(t)}function St(t){b.push(t)}const y=new Set;let f=0;function Q(){if(f!==0)return;const t=h;do{try{for(;f<d.length;){const e=d[f];f++,p(e),V(e.$$)}}catch(e){throw d.length=0,f=0,e}for(p(null),d.length=0,f=0;N.length;)N.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];y.has(n)||(y.add(n),n())}_.length=0}while(d.length);for(;b.length;)b.pop()();g=!1,y.clear(),p(t)}function V(t){if(t.fragment!==null){t.update(),L(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(K)}}function Dt(t){const e=[],n=[];_.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),_=e}export{St as $,ct as A,At as B,z as C,xt as D,Y as E,w as F,p as G,Q as H,pt as I,X as J,_t as K,mt as L,K as M,L as N,H as O,ut as P,$ as Q,G as R,Z as S,et as T,Dt as U,h as V,B as W,d as X,J as Y,st as Z,ot as _,dt as a,bt as b,gt as c,W as d,v as e,ft as f,wt as g,R as h,at as i,Et as j,nt as k,yt as l,ht as m,D as n,jt as o,vt as p,F as q,Nt as r,tt as s,x as t,N as u,kt as v,Ct as w,it as x,rt as y,lt as z};
