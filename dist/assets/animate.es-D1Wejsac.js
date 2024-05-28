function pt(t,e){t.indexOf(e)===-1&&t.push(e)}const nt=(t,e,n)=>Math.min(Math.max(n,t),e),p={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},I=t=>typeof t=="number",x=t=>Array.isArray(t)&&!I(t[0]),mt=(t,e,n)=>{const i=e-t;return((n-t)%i+i)%i+t};function gt(t,e){return x(t)?t[mt(0,t.length,e)]:t}const it=(t,e,n)=>-n*t+n*e+t,st=()=>{},T=t=>t,G=(t,e,n)=>e-t===0?1:(n-t)/(e-t);function at(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const s=G(0,e,i);t.push(it(n,1,s))}}function yt(t){const e=[0];return at(e,t-1),e}function vt(t,e=yt(t.length),n=T){const i=t.length,s=i-e.length;return s>0&&at(e,s),a=>{let o=0;for(;o<i-2&&!(a<e[o+1]);o++);let r=nt(0,1,G(e[o],e[o+1],a));return r=gt(n,o)(r),it(t[o],t[o+1],r)}}const rt=t=>Array.isArray(t)&&I(t[0]),K=t=>typeof t=="object"&&!!t.createAnimation,D=t=>typeof t=="function",Tt=t=>typeof t=="string",F={ms:t=>t*1e3,s:t=>t/1e3},ot=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,bt=1e-7,At=12;function St(t,e,n,i,s){let a,o,r=0;do o=e+(n-e)/2,a=ot(o,i,s)-t,a>0?n=o:e=o;while(Math.abs(a)>bt&&++r<At);return o}function R(t,e,n,i){if(t===e&&n===i)return T;const s=a=>St(a,0,1,t,n);return a=>a===0||a===1?a:ot(s(a),e,i)}const wt=(t,e="end")=>n=>{n=e==="end"?Math.min(n,.999):Math.max(n,.001);const i=n*t,s=e==="end"?Math.floor(i):Math.ceil(i);return nt(0,1,s/t)},Q={ease:R(.25,.1,.25,1),"ease-in":R(.42,0,1,1),"ease-in-out":R(.42,0,.58,1),"ease-out":R(0,0,.58,1)},Et=/\((.*?)\)/;function W(t){if(D(t))return t;if(rt(t))return R(...t);if(Q[t])return Q[t];if(t.startsWith("steps")){const e=Et.exec(t);if(e){const n=e[1].split(",");return wt(parseFloat(n[0]),n[1].trim())}}return T}class ct{constructor(e,n=[0,1],{easing:i,duration:s=p.duration,delay:a=p.delay,endDelay:o=p.endDelay,repeat:r=p.repeat,offset:f,direction:h="normal",autoplay:g=!0}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=T,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise((c,b)=>{this.resolve=c,this.reject=b}),i=i||p.easing,K(i)){const c=i.createAnimation(n);i=c.easing,n=c.keyframes||n,s=c.duration||s}this.repeat=r,this.easing=x(i)?T:W(i),this.updateDuration(s);const S=vt(n,f,x(i)?i.map(W):T);this.tick=c=>{var b;a=a;let d=0;this.pauseTime!==void 0?d=this.pauseTime:d=(c-this.startTime)*this.rate,this.t=d,d/=1e3,d=Math.max(d-a,0),this.playState==="finished"&&this.pauseTime===void 0&&(d=this.totalDuration);const w=d/this.duration;let _=Math.floor(w),y=w%1;!y&&w>=1&&(y=1),y===1&&_--;const $=_%2;(h==="reverse"||h==="alternate"&&$||h==="alternate-reverse"&&!$)&&(y=1-y);const M=d>=this.totalDuration?1:Math.min(y,1),E=S(this.easing(M));e(E),this.pauseTime===void 0&&(this.playState==="finished"||d>=this.totalDuration+o)?(this.playState="finished",(b=this.resolve)===null||b===void 0||b.call(this,E)):this.playState!=="idle"&&(this.frameRequestId=requestAnimationFrame(this.tick))},g&&this.play()}play(){const e=performance.now();this.playState="running",this.pauseTime!==void 0?this.startTime=e-this.pauseTime:this.startTime||(this.startTime=e),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var e;this.playState="idle",this.frameRequestId!==void 0&&cancelAnimationFrame(this.frameRequestId),(e=this.reject)===null||e===void 0||e.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(e){this.duration=e,this.totalDuration=e*(this.repeat+1)}get currentTime(){return this.t}set currentTime(e){this.pauseTime!==void 0||this.rate===0?this.pauseTime=e:this.startTime=performance.now()-e/this.rate}get playbackRate(){return this.rate}set playbackRate(e){this.rate=e}}class Ot{setAnimation(e){this.animation=e,e==null||e.finished.then(()=>this.clearAnimation()).catch(()=>{})}clearAnimation(){this.animation=this.generator=void 0}}const L=new WeakMap;function lt(t){return L.has(t)||L.set(t,{transforms:[],values:new Map}),L.get(t)}function xt(t,e){return t.has(e)||t.set(e,new Ot),t.get(e)}const Dt=["","X","Y","Z"],Mt=["translate","scale","rotate","skew"],z={x:"translateX",y:"translateY",z:"translateZ"},Y={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:t=>t+"deg"},Pt={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:t=>t+"px"},rotate:Y,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:T},skew:Y},V=new Map,H=t=>`--motion-${t}`,C=["x","y","z"];Mt.forEach(t=>{Dt.forEach(e=>{C.push(t+e),V.set(H(t+e),Pt[t])})});const Rt=(t,e)=>C.indexOf(t)-C.indexOf(e),Ft=new Set(C),ut=t=>Ft.has(t),It=(t,e)=>{z[e]&&(e=z[e]);const{transforms:n}=lt(t);pt(n,e),t.style.transform=Vt(n)},Vt=t=>t.sort(Rt).reduce(_t,"").trim(),_t=(t,e)=>`${t} ${e}(var(${H(e)}))`,X=t=>t.startsWith("--"),k=new Set;function $t(t){if(!k.has(t)){k.add(t);try{const{syntax:e,initialValue:n}=V.has(t)?V.get(t):{};CSS.registerProperty({name:t,inherits:!1,syntax:e,initialValue:n})}catch{}}}const N=(t,e)=>document.createElement("div").animate(t,e),tt={cssRegisterProperty:()=>typeof CSS<"u"&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{N({opacity:[1]})}catch{return!1}return!0},finished:()=>!!N({opacity:[0,1]},{duration:.001}).finished,linearEasing:()=>{try{N({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0}},B={},O={};for(const t in tt)O[t]=()=>(B[t]===void 0&&(B[t]=tt[t]()),B[t]);const jt=.015,Ut=(t,e)=>{let n="";const i=Math.round(e/jt);for(let s=0;s<i;s++)n+=t(G(0,i-1,s))+", ";return n.substring(0,n.length-2)},et=(t,e)=>D(t)?O.linearEasing()?`linear(${Ut(t,e)})`:p.easing:rt(t)?qt(t):t,qt=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`;function zt(t,e){for(let n=0;n<t.length;n++)t[n]===null&&(t[n]=n?t[n-1]:e());return t}const Ct=t=>Array.isArray(t)?t:[t];function Z(t){return z[t]&&(t=z[t]),ut(t)?H(t):t}const q={get:(t,e)=>{e=Z(e);let n=X(e)?t.style.getPropertyValue(e):getComputedStyle(t)[e];if(!n&&n!==0){const i=V.get(e);i&&(n=i.initialValue)}return n},set:(t,e,n)=>{e=Z(e),X(e)?t.style.setProperty(e,n):t.style[e]=n}};function ft(t,e=!0){if(!(!t||t.playState==="finished"))try{t.stop?t.stop():(e&&t.commitStyles(),t.cancel())}catch{}}function Lt(t,e){var n;let i=(e==null?void 0:e.toDefaultUnit)||T;const s=t[t.length-1];if(Tt(s)){const a=((n=s.match(/(-?[\d.]+)([a-z%]*)/))===null||n===void 0?void 0:n[2])||"";a&&(i=o=>o+a)}return i}function Nt(){return window.__MOTION_DEV_TOOLS_RECORD}function Bt(t,e,n,i={},s){const a=Nt(),o=i.record!==!1&&a;let r,{duration:f=p.duration,delay:h=p.delay,endDelay:g=p.endDelay,repeat:S=p.repeat,easing:c=p.easing,persist:b=!1,direction:d,offset:w,allowWebkitAcceleration:_=!1,autoplay:y=!0}=i;const $=lt(t),M=ut(e);let E=O.waapi();M&&It(t,e);const m=Z(e),j=xt($.values,m),v=V.get(m);return ft(j.animation,!(K(c)&&j.generator)&&i.record!==!1),()=>{const U=()=>{var l,P;return(P=(l=q.get(t,m))!==null&&l!==void 0?l:v==null?void 0:v.initialValue)!==null&&P!==void 0?P:0};let u=zt(Ct(n),U);const J=Lt(u,v);if(K(c)){const l=c.createAnimation(u,e!=="opacity",U,m,j);c=l.easing,u=l.keyframes||u,f=l.duration||f}if(X(m)&&(O.cssRegisterProperty()?$t(m):E=!1),M&&!O.linearEasing()&&(D(c)||x(c)&&c.some(D))&&(E=!1),E){v&&(u=u.map(A=>I(A)?v.toDefaultUnit(A):A)),u.length===1&&(!O.partialKeyframes()||o)&&u.unshift(U());const l={delay:F.ms(h),duration:F.ms(f),endDelay:F.ms(g),easing:x(c)?void 0:et(c,f),direction:d,iterations:S+1,fill:"both"};r=t.animate({[m]:u,offset:w,easing:x(c)?c.map(A=>et(A,f)):void 0},l),r.finished||(r.finished=new Promise((A,dt)=>{r.onfinish=A,r.oncancel=dt}));const P=u[u.length-1];r.finished.then(()=>{b||(q.set(t,m,P),r.cancel())}).catch(st),_||(r.playbackRate=1.000001)}else if(s&&M)u=u.map(l=>typeof l=="string"?parseFloat(l):l),u.length===1&&u.unshift(parseFloat(U())),r=new s(l=>{q.set(t,m,J?J(l):l)},u,Object.assign(Object.assign({},i),{duration:f,easing:c}));else{const l=u[u.length-1];q.set(t,m,v&&I(l)?v.toDefaultUnit(l):l)}return o&&a(t,e,u,{duration:f,delay:h,easing:c,repeat:S,offset:w},"motion-one"),j.setAnimation(r),r&&!y&&r.pause(),r}}const Kt=(t,e)=>t[e]?Object.assign(Object.assign({},t),t[e]):Object.assign({},t);function Wt(t,e){var n;return typeof t=="string"?e?((n=e[t])!==null&&n!==void 0||(e[t]=document.querySelectorAll(t)),t=e[t]):t=document.querySelectorAll(t):t instanceof Element&&(t=[t]),Array.from(t||[])}const Xt=t=>t(),ht=(t,e,n=p.duration)=>new Proxy({animations:t.map(Xt).filter(Boolean),duration:n,options:e},Gt),Zt=t=>t.animations[0],Gt={get:(t,e)=>{const n=Zt(t);switch(e){case"duration":return t.duration;case"currentTime":return F.s((n==null?void 0:n[e])||0);case"playbackRate":case"playState":return n==null?void 0:n[e];case"finished":return t.finished||(t.finished=Promise.all(t.animations.map(Ht)).catch(st)),t.finished;case"stop":return()=>{t.animations.forEach(i=>ft(i))};case"forEachNative":return i=>{t.animations.forEach(s=>i(s,t))};default:return typeof(n==null?void 0:n[e])>"u"?void 0:()=>t.animations.forEach(i=>i[e]())}},set:(t,e,n)=>{switch(e){case"currentTime":n=F.ms(n);case"playbackRate":for(let i=0;i<t.animations.length;i++)t.animations[i][e]=n;return!0}return!1}},Ht=t=>t.finished;function ee(t=.1,{start:e=0,from:n=0,easing:i}={}){return(s,a)=>{const o=I(n)?n:Jt(n,a),r=Math.abs(o-s);let f=t*r;if(i){const h=a*t;f=W(i)(f/h)*h}return e+f}}function Jt(t,e){if(t==="first")return 0;{const n=e-1;return t==="last"?n:n/2}}function Qt(t,e,n){return D(t)?t(e,n):t}function Yt(t){return function(n,i,s={}){n=Wt(n);const a=n.length,o=[];for(let r=0;r<a;r++){const f=n[r];for(const h in i){const g=Kt(s,h);g.delay=Qt(g.delay,r,a);const S=Bt(f,h,i[h],g,t);o.push(S)}}return ht(o,s,s.duration)}}const kt=Yt(ct);function te(t,e={}){return ht([()=>{const n=new ct(t,[0,1],e);return n.finished.catch(()=>{}),n}],e,e.duration)}function ne(t,e,n){return(D(t)?te:kt)(t,e,n)}export{ne as a,ee as s};
