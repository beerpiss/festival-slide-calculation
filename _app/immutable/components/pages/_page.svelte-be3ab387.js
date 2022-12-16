import{S as Ct,i as Rt,s as Tt,k as E,a as j,q as C,e as Dt,I as Bt,l as g,h as p,c as U,m as O,r as R,n as x,G as d,b as T,J as tt,K as ot,L as at,B as It,M as Ft,N as Vt,u as kt,O as jt}from"../../chunks/index-8786d358.js";import{j as K}from"../../chunks/singletons-9eadbcdb.js";K.disable_scroll_handling;const Ut=K.goto;K.invalidate;K.invalidateAll;K.preload_data;K.preload_code;K.before_navigate;K.after_navigate;function Zt(_){return _&&_.__esModule&&Object.prototype.hasOwnProperty.call(_,"default")?_.default:_}var At={exports:{}};(function(_,c){(function(m){var w=2e3,i={s:1,n:0,d:1};function v(t,e){if(isNaN(t=parseInt(t,10)))throw s.InvalidParameter;return t*e}function h(t,e){if(e===0)throw s.DivisionByZero;var n=Object.create(s.prototype);n.s=t<0?-1:1,t=t<0?-t:t;var r=S(t,e);return n.n=t/r,n.d=e/r,n}function D(t){for(var e={},n=t,r=2,o=4;o<=n;){for(;n%r===0;)n/=r,e[r]=(e[r]||0)+1;o+=1+2*r++}return n!==t?n>1&&(e[n]=(e[n]||0)+1):e[t]=(e[t]||0)+1,e}var y=function(t,e){var n=0,r=1,o=1,b=0,f=0,Z=0,V=1,F=1,a=0,l=1,L=1,k=1,I=1e7,q;if(t!=null)if(e!==void 0){if(n=t,r=e,o=n*r,n%1!==0||r%1!==0)throw s.NonIntegerParameter}else switch(typeof t){case"object":{if("d"in t&&"n"in t)n=t.n,r=t.d,"s"in t&&(n*=t.s);else if(0 in t)n=t[0],1 in t&&(r=t[1]);else throw s.InvalidParameter;o=n*r;break}case"number":{if(t<0&&(o=t,t=-t),t%1===0)n=t;else if(t>0){for(t>=1&&(F=Math.pow(10,Math.floor(1+Math.log(t)/Math.LN10)),t/=F);l<=I&&k<=I;)if(q=(a+L)/(l+k),t===q){l+k<=I?(n=a+L,r=l+k):k>l?(n=L,r=k):(n=a,r=l);break}else t>q?(a+=L,l+=k):(L+=a,k+=l),l>I?(n=L,r=k):(n=a,r=l);n*=F}else(isNaN(t)||isNaN(e))&&(r=n=NaN);break}case"string":{if(l=t.match(/\d+|./g),l===null)throw s.InvalidParameter;if(l[a]==="-"?(o=-1,a++):l[a]==="+"&&a++,l.length===a+1?f=v(l[a++],o):l[a+1]==="."||l[a]==="."?(l[a]!=="."&&(b=v(l[a++],o)),a++,(a+1===l.length||l[a+1]==="("&&l[a+3]===")"||l[a+1]==="'"&&l[a+3]==="'")&&(f=v(l[a],o),V=Math.pow(10,l[a].length),a++),(l[a]==="("&&l[a+2]===")"||l[a]==="'"&&l[a+2]==="'")&&(Z=v(l[a+1],o),F=Math.pow(10,l[a+1].length)-1,a+=3)):l[a+1]==="/"||l[a+1]===":"?(f=v(l[a],o),V=v(l[a+2],1),a+=3):l[a+3]==="/"&&l[a+1]===" "&&(b=v(l[a],o),f=v(l[a+2],o),V=v(l[a+4],1),a+=5),l.length<=a){r=V*F,o=n=Z+r*b+F*f;break}}default:throw s.InvalidParameter}if(r===0)throw s.DivisionByZero;i.s=o<0?-1:1,i.n=Math.abs(n),i.d=Math.abs(r)};function B(t,e,n){for(var r=1;e>0;t=t*t%n,e>>=1)e&1&&(r=r*t%n);return r}function M(t,e){for(;e%2===0;e/=2);for(;e%5===0;e/=5);if(e===1)return 0;for(var n=10%e,r=1;n!==1;r++)if(n=n*10%e,r>w)return 0;return r}function N(t,e,n){for(var r=1,o=B(10,n,e),b=0;b<300;b++){if(r===o)return b;r=r*10%e,o=o*10%e}return 0}function S(t,e){if(!t)return e;if(!e)return t;for(;;){if(t%=e,!t)return e;if(e%=t,!e)return t}}function s(t,e){if(y(t,e),this instanceof s)t=S(i.d,i.n),this.s=i.s,this.n=i.n/t,this.d=i.d/t;else return h(i.s*i.n,i.d)}s.DivisionByZero=new Error("Division by Zero"),s.InvalidParameter=new Error("Invalid argument"),s.NonIntegerParameter=new Error("Parameters must be integer"),s.prototype={s:1,n:0,d:1,abs:function(){return h(this.n,this.d)},neg:function(){return h(-this.s*this.n,this.d)},add:function(t,e){return y(t,e),h(this.s*this.n*i.d+i.s*this.d*i.n,this.d*i.d)},sub:function(t,e){return y(t,e),h(this.s*this.n*i.d-i.s*this.d*i.n,this.d*i.d)},mul:function(t,e){return y(t,e),h(this.s*i.s*this.n*i.n,this.d*i.d)},div:function(t,e){return y(t,e),h(this.s*i.s*this.n*i.d,this.d*i.n)},clone:function(){return h(this.s*this.n,this.d)},mod:function(t,e){if(isNaN(this.n)||isNaN(this.d))return new s(NaN);if(t===void 0)return h(this.s*this.n%this.d,1);if(y(t,e),i.n===0&&this.d===0)throw s.DivisionByZero;return h(this.s*(i.d*this.n)%(i.n*this.d),i.d*this.d)},gcd:function(t,e){return y(t,e),h(S(i.n,this.n)*S(i.d,this.d),i.d*this.d)},lcm:function(t,e){return y(t,e),i.n===0&&this.n===0?h(0,1):h(i.n*this.n,S(i.n,this.n)*S(i.d,this.d))},ceil:function(t){return t=Math.pow(10,t||0),isNaN(this.n)||isNaN(this.d)?new s(NaN):h(Math.ceil(t*this.s*this.n/this.d),t)},floor:function(t){return t=Math.pow(10,t||0),isNaN(this.n)||isNaN(this.d)?new s(NaN):h(Math.floor(t*this.s*this.n/this.d),t)},round:function(t){return t=Math.pow(10,t||0),isNaN(this.n)||isNaN(this.d)?new s(NaN):h(Math.round(t*this.s*this.n/this.d),t)},inverse:function(){return h(this.s*this.d,this.n)},pow:function(t,e){if(y(t,e),i.d===1)return i.s<0?h(Math.pow(this.s*this.d,i.n),Math.pow(this.n,i.n)):h(Math.pow(this.s*this.n,i.n),Math.pow(this.d,i.n));if(this.s<0)return null;var n=D(this.n),r=D(this.d),o=1,b=1;for(var f in n)if(f!=="1"){if(f==="0"){o=0;break}if(n[f]*=i.n,n[f]%i.d===0)n[f]/=i.d;else return null;o*=Math.pow(f,n[f])}for(var f in r)if(f!=="1"){if(r[f]*=i.n,r[f]%i.d===0)r[f]/=i.d;else return null;b*=Math.pow(f,r[f])}return i.s<0?h(b,o):h(o,b)},equals:function(t,e){return y(t,e),this.s*this.n*i.d===i.s*i.n*this.d},compare:function(t,e){y(t,e);var n=this.s*this.n*i.d-i.s*i.n*this.d;return(0<n)-(n<0)},simplify:function(t){if(isNaN(this.n)||isNaN(this.d))return this;t=t||.001;for(var e=this.abs(),n=e.toContinued(),r=1;r<n.length;r++){for(var o=h(n[r-1],1),b=r-2;b>=0;b--)o=o.inverse().add(n[b]);if(o.sub(e).abs().valueOf()<t)return o.mul(this.s)}return this},divisible:function(t,e){return y(t,e),!(!(i.n*this.d)||this.n*i.d%(i.n*this.d))},valueOf:function(){return this.s*this.n/this.d},toFraction:function(t){var e,n="",r=this.n,o=this.d;return this.s<0&&(n+="-"),o===1?n+=r:(t&&(e=Math.floor(r/o))>0&&(n+=e,n+=" ",r%=o),n+=r,n+="/",n+=o),n},toLatex:function(t){var e,n="",r=this.n,o=this.d;return this.s<0&&(n+="-"),o===1?n+=r:(t&&(e=Math.floor(r/o))>0&&(n+=e,r%=o),n+="\\frac{",n+=r,n+="}{",n+=o,n+="}"),n},toContinued:function(){var t,e=this.n,n=this.d,r=[];if(isNaN(e)||isNaN(n))return r;do r.push(Math.floor(e/n)),t=e%n,e=n,n=t;while(e!==1);return r},toString:function(t){var e=this.n,n=this.d;if(isNaN(e)||isNaN(n))return"NaN";t=t||15;var r=M(e,n),o=N(e,n,r),b=this.s<0?"-":"";if(b+=e/n|0,e%=n,e*=10,e&&(b+="."),r){for(var f=o;f--;)b+=e/n|0,e%=n,e*=10;b+="(";for(var f=r;f--;)b+=e/n|0,e%=n,e*=10;b+=")"}else for(var f=t;e&&f--;)b+=e/n|0,e%=n,e*=10;return b}},Object.defineProperty(s,"__esModule",{value:!0}),s.default=s,s.Fraction=s,_.exports=s})()})(At);const rt=Zt(At.exports),{document:st}=Vt;function Ot(_,c,m){const w=_.slice();return w[11]=c[m],w}function Gt(_){let c,m,w;return{c(){c=E("div"),m=C("ERROR: "),w=C(_[3])},l(i){c=g(i,"DIV",{});var v=O(c);m=R(v,"ERROR: "),w=R(v,_[3]),v.forEach(p)},m(i,v){T(i,c,v),d(c,m),d(c,w)},p(i,v){v&8&&kt(w,i[3])},d(i){i&&p(c)}}}function qt(_){let c,m,w,i,v,h,D,y,B=_[4],M=[];for(let N=0;N<B.length;N+=1)M[N]=Lt(Ot(_,B,N));return{c(){c=E("button"),m=C("Link to this result"),w=j(),i=E("div"),v=C(`Component list:
    `),h=E("ul");for(let N=0;N<M.length;N+=1)M[N].c()},l(N){c=g(N,"BUTTON",{});var S=O(c);m=R(S,"Link to this result"),S.forEach(p),w=U(N),i=g(N,"DIV",{});var s=O(i);v=R(s,`Component list:
    `),h=g(s,"UL",{});var t=O(h);for(let e=0;e<M.length;e+=1)M[e].l(t);t.forEach(p),s.forEach(p)},m(N,S){T(N,c,S),d(c,m),T(N,w,S),T(N,i,S),d(i,v),d(i,h);for(let s=0;s<M.length;s+=1)M[s].m(h,null);D||(y=ot(c,"click",_[5]),D=!0)},p(N,S){if(S&16){B=N[4];let s;for(s=0;s<B.length;s+=1){const t=Ot(N,B,s);M[s]?M[s].p(t,S):(M[s]=Lt(t),M[s].c(),M[s].m(h,null))}for(;s<M.length;s+=1)M[s].d(1);M.length=B.length}},d(N){N&&p(c),N&&p(w),N&&p(i),jt(M,N),D=!1,y()}}}function Lt(_){let c,m=_[11]+"",w;return{c(){c=E("li"),w=C(m)},l(i){c=g(i,"LI",{});var v=O(c);w=R(v,m),v.forEach(p)},m(i,v){T(i,c,v),d(c,w)},p(i,v){v&16&&m!==(m=i[11]+"")&&kt(w,m)},d(i){i&&p(c)}}}function Ht(_){let c,m,w,i,v,h,D,y,B,M,N,S,s,t,e,n,r=`|| Assuming the beat divisor before this is {8}
{9999}1-3[12:3],3-5[77.5#8:1],{8}5-7[51.6666666666667#12:1]`,o,b,f,Z,V,F,a,l,L,k,I,q,lt,ut,ft,ht,z,it,G,et,dt,ct,vt,mt,J,nt,X,pt,_t;function Nt(u,P){if(u[4].length>0)return qt;if(u[3].length>0)return Gt}let Y=Nt(_),A=Y&&Y(_);return{c(){c=E("meta"),m=E("meta"),w=j(),i=E("div"),v=C("All the calculations are assuming that the slides start at (nearly) the same time."),h=E("br"),D=C(`
    To do this without making the slide yellow, use pseudo-EACH (the backtick character `),y=E("code"),B=C("`"),M=C(`):
    `),N=E("pre"),S=E("code"),s=C("1-3[12:3]`3-5[77.5#8:1]`5-7[51.6666666666667#12:1]"),t=C(`
    or put an extremely small delay between them:
    `),e=E("pre"),n=E("code"),o=C(r),b=j(),f=E("div"),Z=E("strong"),V=C("Original slide duration:"),F=j(),a=E("br"),l=j(),L=E("input"),k=j(),I=E("div"),q=E("strong"),lt=C("Slide BPM:"),ut=j(),ft=E("br"),ht=j(),z=E("input"),it=j(),G=E("div"),et=E("strong"),dt=C("Number of components:"),ct=j(),vt=E("br"),mt=j(),J=E("input"),nt=j(),A&&A.c(),X=Dt(),this.h()},l(u){const P=Bt("svelte-1le0nfj",st.head);c=g(P,"META",{property:!0,content:!0}),m=g(P,"META",{property:!0,content:!0}),P.forEach(p),w=U(u),i=g(u,"DIV",{});var H=O(i);v=R(H,"All the calculations are assuming that the slides start at (nearly) the same time."),h=g(H,"BR",{}),D=R(H,`
    To do this without making the slide yellow, use pseudo-EACH (the backtick character `),y=g(H,"CODE",{});var bt=O(y);B=R(bt,"`"),bt.forEach(p),M=R(H,`):
    `),N=g(H,"PRE",{});var wt=O(N);S=g(wt,"CODE",{});var yt=O(S);s=R(yt,"1-3[12:3]`3-5[77.5#8:1]`5-7[51.6666666666667#12:1]"),yt.forEach(p),wt.forEach(p),t=R(H,`
    or put an extremely small delay between them:
    `),e=g(H,"PRE",{});var Et=O(e);n=g(Et,"CODE",{});var gt=O(n);o=R(gt,r),gt.forEach(p),Et.forEach(p),H.forEach(p),b=U(u),f=g(u,"DIV",{});var Q=O(f);Z=g(Q,"STRONG",{});var Mt=O(Z);V=R(Mt,"Original slide duration:"),Mt.forEach(p),F=U(Q),a=g(Q,"BR",{}),l=U(Q),L=g(Q,"INPUT",{}),Q.forEach(p),k=U(u),I=g(u,"DIV",{});var W=O(I);q=g(W,"STRONG",{});var St=O(q);lt=R(St,"Slide BPM:"),St.forEach(p),ut=U(W),ft=g(W,"BR",{}),ht=U(W),z=g(W,"INPUT",{type:!0}),W.forEach(p),it=U(u),G=g(u,"DIV",{});var $=O(G);et=g($,"STRONG",{});var Pt=O(et);dt=R(Pt,"Number of components:"),Pt.forEach(p),ct=U($),vt=g($,"BR",{}),mt=U($),J=g($,"INPUT",{type:!0}),$.forEach(p),nt=U(u),A&&A.l(u),X=Dt(),this.h()},h(){st.title="FESTiVAL Slide Calculator",x(c,"property","og:title"),x(c,"content","FESTiVAL Slide Calculator"),x(m,"property","og:description"),x(m,"content","Split a FESTiVAL CHAIN SLIDE into smaller slides of the same duration. The slide delay is also calculated so that the next slide immediately starts when the previous one ends."),x(z,"type","number"),x(J,"type","number")},m(u,P){d(st.head,c),d(st.head,m),T(u,w,P),T(u,i,P),d(i,v),d(i,h),d(i,D),d(i,y),d(y,B),d(i,M),d(i,N),d(N,S),d(S,s),d(i,t),d(i,e),d(e,n),d(n,o),T(u,b,P),T(u,f,P),d(f,Z),d(Z,V),d(f,F),d(f,a),d(f,l),d(f,L),tt(L,_[0]),T(u,k,P),T(u,I,P),d(I,q),d(q,lt),d(I,ut),d(I,ft),d(I,ht),d(I,z),tt(z,_[1]),T(u,it,P),T(u,G,P),d(G,et),d(et,dt),d(G,ct),d(G,vt),d(G,mt),d(G,J),tt(J,_[2]),T(u,nt,P),A&&A.m(u,P),T(u,X,P),pt||(_t=[ot(L,"input",_[6]),ot(z,"input",_[7]),ot(J,"input",_[8])],pt=!0)},p(u,[P]){P&1&&L.value!==u[0]&&tt(L,u[0]),P&2&&at(z.value)!==u[1]&&tt(z,u[1]),P&4&&at(J.value)!==u[2]&&tt(J,u[2]),Y===(Y=Nt(u))&&A?A.p(u,P):(A&&A.d(1),A=Y&&Y(u),A&&(A.c(),A.m(X.parentNode,X)))},i:It,o:It,d(u){p(c),p(m),u&&p(w),u&&p(i),u&&p(b),u&&p(f),u&&p(k),u&&p(I),u&&p(it),u&&p(G),u&&p(nt),A&&A.d(u),u&&p(X),pt=!1,Ft(_t)}}}function zt(_){if(_.includes("#"))return null;const[c,m]=_.replaceAll("[","").replaceAll("]","").split(":");return Number.isNaN(parseFloat(c))||Number.isNaN(parseFloat(m))?null:[parseFloat(m),parseFloat(c)]}function Jt(_,c,m){let w,i;const v=new URLSearchParams(document.location.search);let h=v.get("sd")??"[4:3]",D=Number(v.get("sb")??"155"),y=Number(v.get("c")??"3");function B(){Ut("?"+new URLSearchParams({sd:h,sb:D.toString(),c:y.toString()}),{replaceState:!0})}function M(t,e,n){if(e<=0||n<=0)return[[],"Slide BPM or component count cannot be smaller than 0"];let r=zt(t);if(!r)return[[],"Slide duration is not valid"];let[o,b]=r;const f=b*n,Z=[`[${f}:${o}]`];for(let V=1;V<n;V++){const F=new rt(o).div(f).mul(V).add(.25),a=new rt(e).mul(.25).div(F),l=new rt(f).div(o).mul(F).mul(4),L=new rt(1).div(l),[k,I]=L.toFraction().split("/");Z.push(`[${+a.valueOf().toFixed(13)}#${I}:${k}]`)}return[Z,""]}function N(){h=this.value,m(0,h)}function S(){D=at(this.value),m(1,D)}function s(){y=at(this.value),m(2,y)}return _.$$.update=()=>{_.$$.dirty&7&&m(4,[w,i]=M(h,D,y),w,(m(3,i),m(0,h),m(1,D),m(2,y)))},[h,D,y,i,w,B,N,S,s]}class Yt extends Ct{constructor(c){super(),Rt(this,c,Jt,Ht,Tt,{})}}export{Yt as default};
