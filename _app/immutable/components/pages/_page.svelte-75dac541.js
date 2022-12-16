import{S as Ot,i as St,s as kt,k as P,q as C,a as U,e as gt,l as D,m as S,r as L,h as _,c as j,n as yt,b as A,G as c,I as $,J as nt,K as rt,B as Et,L as Rt,u as Dt,M as Bt}from"../../chunks/index-3fdf889f.js";import{j as H}from"../../chunks/singletons-df0f1e33.js";H.disable_scroll_handling;const Ct=H.goto;H.invalidate;H.invalidateAll;H.preload_data;H.preload_code;H.before_navigate;H.after_navigate;function Lt(v){return v&&v.__esModule&&Object.prototype.hasOwnProperty.call(v,"default")?v.default:v}var It={exports:{}};(function(v,u){(function(p){var g=2e3,n={s:1,n:0,d:1};function d(t,e){if(isNaN(t=parseInt(t,10)))throw o.InvalidParameter;return t*e}function h(t,e){if(e===0)throw o.DivisionByZero;var i=Object.create(o.prototype);i.s=t<0?-1:1,t=t<0?-t:t;var r=M(t,e);return i.n=t/r,i.d=e/r,i}function I(t){for(var e={},i=t,r=2,a=4;a<=i;){for(;i%r===0;)i/=r,e[r]=(e[r]||0)+1;a+=1+2*r++}return i!==t?i>1&&(e[i]=(e[i]||0)+1):e[t]=(e[t]||0)+1,e}var w=function(t,e){var i=0,r=1,a=1,b=0,m=0,G=0,T=1,O=1,l=0,s=1,F=1,B=1,V=1e7,J;if(t!=null)if(e!==void 0){if(i=t,r=e,a=i*r,i%1!==0||r%1!==0)throw o.NonIntegerParameter}else switch(typeof t){case"object":{if("d"in t&&"n"in t)i=t.n,r=t.d,"s"in t&&(i*=t.s);else if(0 in t)i=t[0],1 in t&&(r=t[1]);else throw o.InvalidParameter;a=i*r;break}case"number":{if(t<0&&(a=t,t=-t),t%1===0)i=t;else if(t>0){for(t>=1&&(O=Math.pow(10,Math.floor(1+Math.log(t)/Math.LN10)),t/=O);s<=V&&B<=V;)if(J=(l+F)/(s+B),t===J){s+B<=V?(i=l+F,r=s+B):B>s?(i=F,r=B):(i=l,r=s);break}else t>J?(l+=F,s+=B):(F+=l,B+=s),s>V?(i=F,r=B):(i=l,r=s);i*=O}else(isNaN(t)||isNaN(e))&&(r=i=NaN);break}case"string":{if(s=t.match(/\d+|./g),s===null)throw o.InvalidParameter;if(s[l]==="-"?(a=-1,l++):s[l]==="+"&&l++,s.length===l+1?m=d(s[l++],a):s[l+1]==="."||s[l]==="."?(s[l]!=="."&&(b=d(s[l++],a)),l++,(l+1===s.length||s[l+1]==="("&&s[l+3]===")"||s[l+1]==="'"&&s[l+3]==="'")&&(m=d(s[l],a),T=Math.pow(10,s[l].length),l++),(s[l]==="("&&s[l+2]===")"||s[l]==="'"&&s[l+2]==="'")&&(G=d(s[l+1],a),O=Math.pow(10,s[l+1].length)-1,l+=3)):s[l+1]==="/"||s[l+1]===":"?(m=d(s[l],a),T=d(s[l+2],1),l+=3):s[l+3]==="/"&&s[l+1]===" "&&(b=d(s[l],a),m=d(s[l+2],a),T=d(s[l+4],1),l+=5),s.length<=l){r=T*O,a=i=G+r*b+O*m;break}}default:throw o.InvalidParameter}if(r===0)throw o.DivisionByZero;n.s=a<0?-1:1,n.n=Math.abs(i),n.d=Math.abs(r)};function k(t,e,i){for(var r=1;e>0;t=t*t%i,e>>=1)e&1&&(r=r*t%i);return r}function E(t,e){for(;e%2===0;e/=2);for(;e%5===0;e/=5);if(e===1)return 0;for(var i=10%e,r=1;i!==1;r++)if(i=i*10%e,r>g)return 0;return r}function N(t,e,i){for(var r=1,a=k(10,i,e),b=0;b<300;b++){if(r===a)return b;r=r*10%e,a=a*10%e}return 0}function M(t,e){if(!t)return e;if(!e)return t;for(;;){if(t%=e,!t)return e;if(e%=t,!e)return t}}function o(t,e){if(w(t,e),this instanceof o)t=M(n.d,n.n),this.s=n.s,this.n=n.n/t,this.d=n.d/t;else return h(n.s*n.n,n.d)}o.DivisionByZero=new Error("Division by Zero"),o.InvalidParameter=new Error("Invalid argument"),o.NonIntegerParameter=new Error("Parameters must be integer"),o.prototype={s:1,n:0,d:1,abs:function(){return h(this.n,this.d)},neg:function(){return h(-this.s*this.n,this.d)},add:function(t,e){return w(t,e),h(this.s*this.n*n.d+n.s*this.d*n.n,this.d*n.d)},sub:function(t,e){return w(t,e),h(this.s*this.n*n.d-n.s*this.d*n.n,this.d*n.d)},mul:function(t,e){return w(t,e),h(this.s*n.s*this.n*n.n,this.d*n.d)},div:function(t,e){return w(t,e),h(this.s*n.s*this.n*n.d,this.d*n.n)},clone:function(){return h(this.s*this.n,this.d)},mod:function(t,e){if(isNaN(this.n)||isNaN(this.d))return new o(NaN);if(t===void 0)return h(this.s*this.n%this.d,1);if(w(t,e),n.n===0&&this.d===0)throw o.DivisionByZero;return h(this.s*(n.d*this.n)%(n.n*this.d),n.d*this.d)},gcd:function(t,e){return w(t,e),h(M(n.n,this.n)*M(n.d,this.d),n.d*this.d)},lcm:function(t,e){return w(t,e),n.n===0&&this.n===0?h(0,1):h(n.n*this.n,M(n.n,this.n)*M(n.d,this.d))},ceil:function(t){return t=Math.pow(10,t||0),isNaN(this.n)||isNaN(this.d)?new o(NaN):h(Math.ceil(t*this.s*this.n/this.d),t)},floor:function(t){return t=Math.pow(10,t||0),isNaN(this.n)||isNaN(this.d)?new o(NaN):h(Math.floor(t*this.s*this.n/this.d),t)},round:function(t){return t=Math.pow(10,t||0),isNaN(this.n)||isNaN(this.d)?new o(NaN):h(Math.round(t*this.s*this.n/this.d),t)},inverse:function(){return h(this.s*this.d,this.n)},pow:function(t,e){if(w(t,e),n.d===1)return n.s<0?h(Math.pow(this.s*this.d,n.n),Math.pow(this.n,n.n)):h(Math.pow(this.s*this.n,n.n),Math.pow(this.d,n.n));if(this.s<0)return null;var i=I(this.n),r=I(this.d),a=1,b=1;for(var m in i)if(m!=="1"){if(m==="0"){a=0;break}if(i[m]*=n.n,i[m]%n.d===0)i[m]/=n.d;else return null;a*=Math.pow(m,i[m])}for(var m in r)if(m!=="1"){if(r[m]*=n.n,r[m]%n.d===0)r[m]/=n.d;else return null;b*=Math.pow(m,r[m])}return n.s<0?h(b,a):h(a,b)},equals:function(t,e){return w(t,e),this.s*this.n*n.d===n.s*n.n*this.d},compare:function(t,e){w(t,e);var i=this.s*this.n*n.d-n.s*n.n*this.d;return(0<i)-(i<0)},simplify:function(t){if(isNaN(this.n)||isNaN(this.d))return this;t=t||.001;for(var e=this.abs(),i=e.toContinued(),r=1;r<i.length;r++){for(var a=h(i[r-1],1),b=r-2;b>=0;b--)a=a.inverse().add(i[b]);if(a.sub(e).abs().valueOf()<t)return a.mul(this.s)}return this},divisible:function(t,e){return w(t,e),!(!(n.n*this.d)||this.n*n.d%(n.n*this.d))},valueOf:function(){return this.s*this.n/this.d},toFraction:function(t){var e,i="",r=this.n,a=this.d;return this.s<0&&(i+="-"),a===1?i+=r:(t&&(e=Math.floor(r/a))>0&&(i+=e,i+=" ",r%=a),i+=r,i+="/",i+=a),i},toLatex:function(t){var e,i="",r=this.n,a=this.d;return this.s<0&&(i+="-"),a===1?i+=r:(t&&(e=Math.floor(r/a))>0&&(i+=e,r%=a),i+="\\frac{",i+=r,i+="}{",i+=a,i+="}"),i},toContinued:function(){var t,e=this.n,i=this.d,r=[];if(isNaN(e)||isNaN(i))return r;do r.push(Math.floor(e/i)),t=e%i,e=i,i=t;while(e!==1);return r},toString:function(t){var e=this.n,i=this.d;if(isNaN(e)||isNaN(i))return"NaN";t=t||15;var r=E(e,i),a=N(e,i,r),b=this.s<0?"-":"";if(b+=e/i|0,e%=i,e*=10,e&&(b+="."),r){for(var m=a;m--;)b+=e/i|0,e%=i,e*=10;b+="(";for(var m=r;m--;)b+=e/i|0,e%=i,e*=10;b+=")"}else for(var m=t;e&&m--;)b+=e/i|0,e%=i,e*=10;return b}},Object.defineProperty(o,"__esModule",{value:!0}),o.default=o,o.Fraction=o,v.exports=o})()})(It);const it=Lt(It.exports);function Mt(v,u,p){const g=v.slice();return g[11]=u[p],g}function Ft(v){let u,p,g;return{c(){u=P("div"),p=C("ERROR: "),g=C(v[3])},l(n){u=D(n,"DIV",{});var d=S(u);p=L(d,"ERROR: "),g=L(d,v[3]),d.forEach(_)},m(n,d){A(n,u,d),c(u,p),c(u,g)},p(n,d){d&8&&Dt(g,n[3])},d(n){n&&_(u)}}}function At(v){let u,p,g,n,d,h,I,w,k=v[4],E=[];for(let N=0;N<k.length;N+=1)E[N]=Pt(Mt(v,k,N));return{c(){u=P("button"),p=C("Link to this result"),g=U(),n=P("div"),d=C(`Component list:
    `),h=P("ul");for(let N=0;N<E.length;N+=1)E[N].c()},l(N){u=D(N,"BUTTON",{});var M=S(u);p=L(M,"Link to this result"),M.forEach(_),g=j(N),n=D(N,"DIV",{});var o=S(n);d=L(o,`Component list:
    `),h=D(o,"UL",{});var t=S(h);for(let e=0;e<E.length;e+=1)E[e].l(t);t.forEach(_),o.forEach(_)},m(N,M){A(N,u,M),c(u,p),A(N,g,M),A(N,n,M),c(n,d),c(n,h);for(let o=0;o<E.length;o+=1)E[o].m(h,null);I||(w=nt(u,"click",v[5]),I=!0)},p(N,M){if(M&16){k=N[4];let o;for(o=0;o<k.length;o+=1){const t=Mt(N,k,o);E[o]?E[o].p(t,M):(E[o]=Pt(t),E[o].c(),E[o].m(h,null))}for(;o<E.length;o+=1)E[o].d(1);E.length=k.length}},d(N){N&&_(u),N&&_(g),N&&_(n),Bt(E,N),I=!1,w()}}}function Pt(v){let u,p=v[11]+"",g;return{c(){u=P("li"),g=C(p)},l(n){u=D(n,"LI",{});var d=S(u);g=L(d,p),d.forEach(_)},m(n,d){A(n,u,d),c(u,g)},p(n,d){d&16&&p!==(p=n[11]+"")&&Dt(g,p)},d(n){n&&_(u)}}}function Tt(v){let u,p,g,n,d,h,I,w,k,E,N,M,o,t=`|| Assuming the beat divisor before this is {8}
{9999}1-3[12:3],3-5[77.5#8:1],{8}5-7[51.6666666666667#12:1]`,e,i,r,a,b,m,G,T,O,l,s,F,B,V,J,st,q,tt,Z,x,ot,at,lt,ut,z,et,K,ft,ht;function dt(f,y){if(f[4].length>0)return At;if(f[3].length>0)return Ft}let X=dt(v),R=X&&X(v);return{c(){u=P("div"),p=C("All the calculations are assuming that the slides start at (nearly) the same time."),g=P("br"),n=C(`
    To do this without making the slide yellow, use pseudo-EACH (the backtick character `),d=P("code"),h=C("`"),I=C(`):
    `),w=P("pre"),k=P("code"),E=C("1-3[12:3]`3-5[77.5#8:1]`5-7[51.6666666666667#12:1]"),N=C(`
    or put an extremely small delay between them:
    `),M=P("pre"),o=P("code"),e=C(t),i=U(),r=P("div"),a=P("strong"),b=C("Original slide duration:"),m=U(),G=P("br"),T=U(),O=P("input"),l=U(),s=P("div"),F=P("strong"),B=C("Slide BPM:"),V=U(),J=P("br"),st=U(),q=P("input"),tt=U(),Z=P("div"),x=P("strong"),ot=C("Number of components:"),at=U(),lt=P("br"),ut=U(),z=P("input"),et=U(),R&&R.c(),K=gt(),this.h()},l(f){u=D(f,"DIV",{});var y=S(u);p=L(y,"All the calculations are assuming that the slides start at (nearly) the same time."),g=D(y,"BR",{}),n=L(y,`
    To do this without making the slide yellow, use pseudo-EACH (the backtick character `),d=D(y,"CODE",{});var ct=S(d);h=L(ct,"`"),ct.forEach(_),I=L(y,`):
    `),w=D(y,"PRE",{});var vt=S(w);k=D(vt,"CODE",{});var mt=S(k);E=L(mt,"1-3[12:3]`3-5[77.5#8:1]`5-7[51.6666666666667#12:1]"),mt.forEach(_),vt.forEach(_),N=L(y,`
    or put an extremely small delay between them:
    `),M=D(y,"PRE",{});var pt=S(M);o=D(pt,"CODE",{});var Nt=S(o);e=L(Nt,t),Nt.forEach(_),pt.forEach(_),y.forEach(_),i=j(f),r=D(f,"DIV",{});var Y=S(r);a=D(Y,"STRONG",{});var _t=S(a);b=L(_t,"Original slide duration:"),_t.forEach(_),m=j(Y),G=D(Y,"BR",{}),T=j(Y),O=D(Y,"INPUT",{}),Y.forEach(_),l=j(f),s=D(f,"DIV",{});var Q=S(s);F=D(Q,"STRONG",{});var bt=S(F);B=L(bt,"Slide BPM:"),bt.forEach(_),V=j(Q),J=D(Q,"BR",{}),st=j(Q),q=D(Q,"INPUT",{type:!0}),Q.forEach(_),tt=j(f),Z=D(f,"DIV",{});var W=S(Z);x=D(W,"STRONG",{});var wt=S(x);ot=L(wt,"Number of components:"),wt.forEach(_),at=j(W),lt=D(W,"BR",{}),ut=j(W),z=D(W,"INPUT",{type:!0}),W.forEach(_),et=j(f),R&&R.l(f),K=gt(),this.h()},h(){yt(q,"type","number"),yt(z,"type","number")},m(f,y){A(f,u,y),c(u,p),c(u,g),c(u,n),c(u,d),c(d,h),c(u,I),c(u,w),c(w,k),c(k,E),c(u,N),c(u,M),c(M,o),c(o,e),A(f,i,y),A(f,r,y),c(r,a),c(a,b),c(r,m),c(r,G),c(r,T),c(r,O),$(O,v[0]),A(f,l,y),A(f,s,y),c(s,F),c(F,B),c(s,V),c(s,J),c(s,st),c(s,q),$(q,v[1]),A(f,tt,y),A(f,Z,y),c(Z,x),c(x,ot),c(Z,at),c(Z,lt),c(Z,ut),c(Z,z),$(z,v[2]),A(f,et,y),R&&R.m(f,y),A(f,K,y),ft||(ht=[nt(O,"input",v[6]),nt(q,"input",v[7]),nt(z,"input",v[8])],ft=!0)},p(f,[y]){y&1&&O.value!==f[0]&&$(O,f[0]),y&2&&rt(q.value)!==f[1]&&$(q,f[1]),y&4&&rt(z.value)!==f[2]&&$(z,f[2]),X===(X=dt(f))&&R?R.p(f,y):(R&&R.d(1),R=X&&X(f),R&&(R.c(),R.m(K.parentNode,K)))},i:Et,o:Et,d(f){f&&_(u),f&&_(i),f&&_(r),f&&_(l),f&&_(s),f&&_(tt),f&&_(Z),f&&_(et),R&&R.d(f),f&&_(K),ft=!1,Rt(ht)}}}function Ut(v){if(v.includes("#"))return null;const[u,p]=v.replaceAll("[","").replaceAll("]","").split(":");return Number.isNaN(parseFloat(u))||Number.isNaN(parseFloat(p))?null:[parseFloat(p),parseFloat(u)]}function jt(v,u,p){let g,n;const d=new URLSearchParams(document.location.search);let h=d.get("sd")??"[4:3]",I=Number(d.get("sb")??"155"),w=Number(d.get("c")??"3");function k(){Ct("?"+new URLSearchParams({sd:h,sb:I.toString(),c:w.toString()}),{replaceState:!0})}function E(t,e,i){if(e<=0||i<=0)return[[],"Slide BPM or component count cannot be smaller than 0"];let r=Ut(t);if(!r)return[[],"Slide duration is not valid"];let[a,b]=r;const m=b*i,G=[`[${m}:${a}]`];for(let T=1;T<i;T++){const O=new it(a).div(m).mul(T).add(.25),l=new it(e).mul(.25).div(O),s=new it(m).div(a).mul(O).mul(4),F=new it(1).div(s),[B,V]=F.toFraction().split("/");G.push(`[${+l.valueOf().toFixed(13)}#${V}:${B}]`)}return[G,""]}function N(){h=this.value,p(0,h)}function M(){I=rt(this.value),p(1,I)}function o(){w=rt(this.value),p(2,w)}return v.$$.update=()=>{v.$$.dirty&7&&p(4,[g,n]=E(h,I,w),g,(p(3,n),p(0,h),p(1,I),p(2,w)))},[h,I,w,n,g,k,N,M,o]}class Gt extends Ot{constructor(u){super(),St(this,u,jt,Tt,kt,{})}}export{Gt as default};
