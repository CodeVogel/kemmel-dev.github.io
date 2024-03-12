var C=Object.defineProperty;var P=(t,e,n)=>e in t?C(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var d=(t,e,n)=>(P(t,typeof e!="symbol"?e+"":e,n),n);import{r as $,n as g,f as v,h as j,i as S,j as B,k as A,l as I,m as q,p as E,q as D,v as G,w as O}from"./scheduler.BvLojk_z.js";let y=!1;function R(){y=!0}function z(){y=!1}function U(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function V(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&r.push(u)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let r=0;r<e.length;r++){const a=e[r].claim_order,u=(s>0&&e[n[s]].claim_order<=a?s+1:U(1,s,h=>e[n[h]].claim_order,a))-1;i[r]=n[u]+1;const o=u+1;n[o]=r,s=Math.max(o,s)}const c=[],l=[];let f=e.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(c.push(e[r-1]);f>=r;f--)l.push(e[f]);f--}for(;f>=0;f--)l.push(e[f]);c.reverse(),l.sort((r,a)=>r.claim_order-a.claim_order);for(let r=0,a=0;r<l.length;r++){for(;a<c.length&&l[r].claim_order>=c[a].claim_order;)a++;const u=a<c.length?c[a]:null;t.insertBefore(l[r],u)}}function W(t,e){if(y){for(V(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function F(t,e,n){t.insertBefore(e,n||null)}function J(t,e,n){y&&!n?W(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function p(t){t.parentNode&&t.parentNode.removeChild(t)}function H(t){return document.createElement(t)}function K(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function w(t){return document.createTextNode(t)}function lt(){return w(" ")}function at(){return w("")}function ct(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ft(t){return t.dataset.svelteH}function Q(t){return Array.from(t.childNodes)}function M(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function L(t,e,n,i,s=!1){M(t);const c=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const f=t[l];if(e(f)){const r=n(f);return r===void 0?t.splice(l,1):t[l]=r,s||(t.claim_info.last_index=l),f}}for(let l=t.claim_info.last_index-1;l>=0;l--){const f=t[l];if(e(f)){const r=n(f);return r===void 0?t.splice(l,1):t[l]=r,s?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,f}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function X(t,e,n,i){return L(t,s=>s.nodeName===e,s=>{const c=[];for(let l=0;l<s.attributes.length;l++){const f=s.attributes[l];n[f.name]||c.push(f.name)}c.forEach(l=>s.removeAttribute(l))},()=>i(e))}function ot(t,e,n){return X(t,e,n,H)}function Y(t,e){return L(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>w(e),!0)}function ut(t){return Y(t," ")}function b(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function dt(t,e){const n=b(t,"HTML_TAG_START",0),i=b(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new x(e);M(t);const s=t.splice(n,i-n+1);p(s[0]),p(s[s.length-1]);const c=s.slice(1,s.length-1);if(c.length===0)return new x(e);for(const l of c)l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new x(e,c)}function _t(t,e){e=""+e,t.data!==e&&(t.data=e)}function ht(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}class Z{constructor(e=!1){d(this,"is_svg",!1);d(this,"e");d(this,"n");d(this,"t");d(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=K(n.nodeName):this.e=H(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)F(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(p)}}class x extends Z{constructor(n=!1,i){super(n);d(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)J(this.t,this.n[i],n)}}function mt(t,e){return new t(e)}const m=new Set;let _;function pt(){_={r:0,c:[],p:_}}function $t(){_.r||$(_.c),_=_.p}function k(t,e){t&&t.i&&(m.delete(t),t.i(e))}function yt(t,e,n,i){if(t&&t.o){if(m.has(t))return;m.add(t),_.c.push(()=>{m.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function xt(t){t&&t.c()}function gt(t,e){t&&t.l(e)}function tt(t,e,n){const{fragment:i,after_update:s}=t.$$;i&&i.m(e,n),A(()=>{const c=t.$$.on_mount.map(D).filter(S);t.$$.on_destroy?t.$$.on_destroy.push(...c):$(c),t.$$.on_mount=[]}),s.forEach(A)}function et(t,e){const n=t.$$;n.fragment!==null&&(I(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function nt(t,e){t.$$.dirty[0]===-1&&(G.push(t),O(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function wt(t,e,n,i,s,c,l=null,f=[-1]){const r=q;E(t);const a=t.$$={fragment:null,ctx:[],props:c,update:g,not_equal:s,bound:v(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:v(),dirty:f,skip_bound:!1,root:e.target||r.$$.root};l&&l(a.root);let u=!1;if(a.ctx=n?n(t,e.props||{},(o,h,...N)=>{const T=N.length?N[0]:h;return a.ctx&&s(a.ctx[o],a.ctx[o]=T)&&(!a.skip_bound&&a.bound[o]&&a.bound[o](T),u&&nt(t,o)),h}):[],a.update(),u=!0,$(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){R();const o=Q(e.target);a.fragment&&a.fragment.l(o),o.forEach(p)}else a.fragment&&a.fragment.c();e.intro&&k(t.$$.fragment),tt(t,e.target,e.anchor),z(),j()}E(r)}class Nt{constructor(){d(this,"$$");d(this,"$$set")}$destroy(){et(this,1),this.$destroy=g}$on(e,n){if(!S(n))return g;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!B(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const it="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(it);export{x as H,Nt as S,ut as a,Q as b,ot as c,dt as d,H as e,p as f,ft as g,ct as h,wt as i,J as j,yt as k,w as l,Y as m,W as n,_t as o,at as p,$t as q,ht as r,lt as s,k as t,pt as u,mt as v,xt as w,gt as x,tt as y,et as z};
