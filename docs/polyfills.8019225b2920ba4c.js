"use strict";(self.webpackChunkdashboardUI=self.webpackChunkdashboardUI||[]).push([[429],{6106:(Xt,Zn,Xn)=>{Xn(8583);Error;const qo=function(s,...e){if(qo.translate){const n=qo.translate(s,e);s=n[0],e=n[1]}let t=Zl(s[0],s.raw[0]);for(let n=1;n<s.length;n++)t+=e[n-1]+Zl(s[n],s.raw[n]);return t};function Zl(s,e){return":"===e.charAt(0)?s.substring(function Gl(s,e){for(let t=1,n=1;t<s.length;t++,n++)if("\\"===e[n])n++;else if(":"===s[t])return t;throw new Error(`Unterminated $localize metadata block in "${e}".`)}(s,e)+1):s}(()=>"undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof global&&global||"undefined"!=typeof window&&window||"undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self)().$localize=qo},8583:()=>{!function(d){const v=d.performance;function x(T){v&&v.mark&&v.mark(T)}function _(T,U){v&&v.measure&&v.measure(T,U)}x("Zone");const C=d.__Zone_symbol_prefix||"__zone_symbol__";function A(T){return C+T}const R=!0===d[A("forceDuplicateZoneCheck")];if(d.Zone){if(R||"function"!=typeof d.Zone.__symbol__)throw new Error("Zone already loaded.");return d.Zone}let H=(()=>{class T{constructor(f,g){this._parent=f,this._name=g?g.name||"unnamed":"<root>",this._properties=g&&g.properties||{},this._zoneDelegate=new O(this,this._parent&&this._parent._zoneDelegate,g)}static assertZonePatched(){if(d.Promise!==Ct.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let f=T.current;for(;f.parent;)f=f.parent;return f}static get current(){return Pe.zone}static get currentTask(){return Et}static __load_patch(f,g,M=!1){if(Ct.hasOwnProperty(f)){if(!M&&R)throw Error("Already loaded patch: "+f)}else if(!d["__Zone_disable_"+f]){const Y="Zone:"+f;x(Y),Ct[f]=g(d,T,De),_(Y,Y)}}get parent(){return this._parent}get name(){return this._name}get(f){const g=this.getZoneWith(f);if(g)return g._properties[f]}getZoneWith(f){let g=this;for(;g;){if(g._properties.hasOwnProperty(f))return g;g=g._parent}return null}fork(f){if(!f)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,f)}wrap(f,g){if("function"!=typeof f)throw new Error("Expecting function got: "+f);const M=this._zoneDelegate.intercept(this,f,g),Y=this;return function(){return Y.runGuarded(M,this,arguments,g)}}run(f,g,M,Y){Pe={parent:Pe,zone:this};try{return this._zoneDelegate.invoke(this,f,g,M,Y)}finally{Pe=Pe.parent}}runGuarded(f,g=null,M,Y){Pe={parent:Pe,zone:this};try{try{return this._zoneDelegate.invoke(this,f,g,M,Y)}catch(Re){if(this._zoneDelegate.handleError(this,Re))throw Re}}finally{Pe=Pe.parent}}runTask(f,g,M){if(f.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(f.zone||Ie).name+"; Execution: "+this.name+")");if(f.state===_e&&(f.type===ze||f.type===j))return;const Y=f.state!=F;Y&&f._transitionTo(F,le),f.runCount++;const Re=Et;Et=f,Pe={parent:Pe,zone:this};try{f.type==j&&f.data&&!f.data.isPeriodic&&(f.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,f,g,M)}catch(y){if(this._zoneDelegate.handleError(this,y))throw y}}finally{f.state!==_e&&f.state!==$&&(f.type==ze||f.data&&f.data.isPeriodic?Y&&f._transitionTo(le,F):(f.runCount=0,this._updateTaskCount(f,-1),Y&&f._transitionTo(_e,F,_e))),Pe=Pe.parent,Et=Re}}scheduleTask(f){if(f.zone&&f.zone!==this){let M=this;for(;M;){if(M===f.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${f.zone.name}`);M=M.parent}}f._transitionTo(X,_e);const g=[];f._zoneDelegates=g,f._zone=this;try{f=this._zoneDelegate.scheduleTask(this,f)}catch(M){throw f._transitionTo($,X,_e),this._zoneDelegate.handleError(this,M),M}return f._zoneDelegates===g&&this._updateTaskCount(f,1),f.state==X&&f._transitionTo(le,X),f}scheduleMicroTask(f,g,M,Y){return this.scheduleTask(new G(se,f,g,M,Y,void 0))}scheduleMacroTask(f,g,M,Y,Re){return this.scheduleTask(new G(j,f,g,M,Y,Re))}scheduleEventTask(f,g,M,Y,Re){return this.scheduleTask(new G(ze,f,g,M,Y,Re))}cancelTask(f){if(f.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(f.zone||Ie).name+"; Execution: "+this.name+")");f._transitionTo(Ae,le,F);try{this._zoneDelegate.cancelTask(this,f)}catch(g){throw f._transitionTo($,Ae),this._zoneDelegate.handleError(this,g),g}return this._updateTaskCount(f,-1),f._transitionTo(_e,Ae),f.runCount=0,f}_updateTaskCount(f,g){const M=f._zoneDelegates;-1==g&&(f._zoneDelegates=null);for(let Y=0;Y<M.length;Y++)M[Y]._updateTaskCount(f.type,g)}}return T.__symbol__=A,T})();const Q={name:"",onHasTask:(T,U,f,g)=>T.hasTask(f,g),onScheduleTask:(T,U,f,g)=>T.scheduleTask(f,g),onInvokeTask:(T,U,f,g,M,Y)=>T.invokeTask(f,g,M,Y),onCancelTask:(T,U,f,g)=>T.cancelTask(f,g)};class O{constructor(U,f,g){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=U,this._parentDelegate=f,this._forkZS=g&&(g&&g.onFork?g:f._forkZS),this._forkDlgt=g&&(g.onFork?f:f._forkDlgt),this._forkCurrZone=g&&(g.onFork?this.zone:f._forkCurrZone),this._interceptZS=g&&(g.onIntercept?g:f._interceptZS),this._interceptDlgt=g&&(g.onIntercept?f:f._interceptDlgt),this._interceptCurrZone=g&&(g.onIntercept?this.zone:f._interceptCurrZone),this._invokeZS=g&&(g.onInvoke?g:f._invokeZS),this._invokeDlgt=g&&(g.onInvoke?f:f._invokeDlgt),this._invokeCurrZone=g&&(g.onInvoke?this.zone:f._invokeCurrZone),this._handleErrorZS=g&&(g.onHandleError?g:f._handleErrorZS),this._handleErrorDlgt=g&&(g.onHandleError?f:f._handleErrorDlgt),this._handleErrorCurrZone=g&&(g.onHandleError?this.zone:f._handleErrorCurrZone),this._scheduleTaskZS=g&&(g.onScheduleTask?g:f._scheduleTaskZS),this._scheduleTaskDlgt=g&&(g.onScheduleTask?f:f._scheduleTaskDlgt),this._scheduleTaskCurrZone=g&&(g.onScheduleTask?this.zone:f._scheduleTaskCurrZone),this._invokeTaskZS=g&&(g.onInvokeTask?g:f._invokeTaskZS),this._invokeTaskDlgt=g&&(g.onInvokeTask?f:f._invokeTaskDlgt),this._invokeTaskCurrZone=g&&(g.onInvokeTask?this.zone:f._invokeTaskCurrZone),this._cancelTaskZS=g&&(g.onCancelTask?g:f._cancelTaskZS),this._cancelTaskDlgt=g&&(g.onCancelTask?f:f._cancelTaskDlgt),this._cancelTaskCurrZone=g&&(g.onCancelTask?this.zone:f._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const M=g&&g.onHasTask;(M||f&&f._hasTaskZS)&&(this._hasTaskZS=M?g:Q,this._hasTaskDlgt=f,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=U,g.onScheduleTask||(this._scheduleTaskZS=Q,this._scheduleTaskDlgt=f,this._scheduleTaskCurrZone=this.zone),g.onInvokeTask||(this._invokeTaskZS=Q,this._invokeTaskDlgt=f,this._invokeTaskCurrZone=this.zone),g.onCancelTask||(this._cancelTaskZS=Q,this._cancelTaskDlgt=f,this._cancelTaskCurrZone=this.zone))}fork(U,f){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,U,f):new H(U,f)}intercept(U,f,g){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,U,f,g):f}invoke(U,f,g,M,Y){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,U,f,g,M,Y):f.apply(g,M)}handleError(U,f){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,U,f)}scheduleTask(U,f){let g=f;if(this._scheduleTaskZS)this._hasTaskZS&&g._zoneDelegates.push(this._hasTaskDlgtOwner),g=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,U,f),g||(g=f);else if(f.scheduleFn)f.scheduleFn(f);else{if(f.type!=se)throw new Error("Task is missing scheduleFn.");te(f)}return g}invokeTask(U,f,g,M){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,U,f,g,M):f.callback.apply(g,M)}cancelTask(U,f){let g;if(this._cancelTaskZS)g=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,U,f);else{if(!f.cancelFn)throw Error("Task is not cancelable");g=f.cancelFn(f)}return g}hasTask(U,f){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,U,f)}catch(g){this.handleError(U,g)}}_updateTaskCount(U,f){const g=this._taskCounts,M=g[U],Y=g[U]=M+f;if(Y<0)throw new Error("More tasks executed then were scheduled.");0!=M&&0!=Y||this.hasTask(this.zone,{microTask:g.microTask>0,macroTask:g.macroTask>0,eventTask:g.eventTask>0,change:U})}}class G{constructor(U,f,g,M,Y,Re){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=U,this.source=f,this.data=M,this.scheduleFn=Y,this.cancelFn=Re,!g)throw new Error("callback is not defined");this.callback=g;const y=this;this.invoke=U===ze&&M&&M.useG?G.invokeTask:function(){return G.invokeTask.call(d,y,this,arguments)}}static invokeTask(U,f,g){U||(U=this),Le++;try{return U.runCount++,U.zone.runTask(U,f,g)}finally{1==Le&&W(),Le--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(_e,X)}_transitionTo(U,f,g){if(this._state!==f&&this._state!==g)throw new Error(`${this.type} '${this.source}': can not transition to '${U}', expecting state '${f}'${g?" or '"+g+"'":""}, was '${this._state}'.`);this._state=U,U==_e&&(this._zoneDelegates=null)}toString(){return this.data&&void 0!==this.data.handleId?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const ve=A("setTimeout"),he=A("Promise"),ue=A("then");let Ge,we=[],xe=!1;function Oe(T){if(Ge||d[he]&&(Ge=d[he].resolve(0)),Ge){let U=Ge[ue];U||(U=Ge.then),U.call(Ge,T)}else d[ve](T,0)}function te(T){0===Le&&0===we.length&&Oe(W),T&&we.push(T)}function W(){if(!xe){for(xe=!0;we.length;){const T=we;we=[];for(let U=0;U<T.length;U++){const f=T[U];try{f.zone.runTask(f,null,null)}catch(g){De.onUnhandledError(g)}}}De.microtaskDrainDone(),xe=!1}}const Ie={name:"NO ZONE"},_e="notScheduled",X="scheduling",le="scheduled",F="running",Ae="canceling",$="unknown",se="microTask",j="macroTask",ze="eventTask",Ct={},De={symbol:A,currentZoneFrame:()=>Pe,onUnhandledError:Ee,microtaskDrainDone:Ee,scheduleMicroTask:te,showUncaughtError:()=>!H[A("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:Ee,patchMethod:()=>Ee,bindArguments:()=>[],patchThen:()=>Ee,patchMacroTask:()=>Ee,patchEventPrototype:()=>Ee,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>Ee,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>Ee,wrapWithCurrentZone:()=>Ee,filterProperties:()=>[],attachOriginToPatched:()=>Ee,_redefineProperty:()=>Ee,patchCallbacks:()=>Ee,nativeScheduleMicroTask:Oe};let Pe={parent:null,zone:new H(null,null)},Et=null,Le=0;function Ee(){}_("Zone","Zone"),d.Zone=H}("undefined"!=typeof window&&window||"undefined"!=typeof self&&self||global);const Xt=Object.getOwnPropertyDescriptor,Zn=Object.defineProperty,Xn=Object.getPrototypeOf,ir=Object.create,He=Array.prototype.slice,et="addEventListener",Nn="removeEventListener",Pn=Zone.__symbol__(et),gs=Zone.__symbol__(Nn),xt="true",gt="false",J=Zone.__symbol__("");function Yn(d,v){return Zone.current.wrap(d,v)}function mn(d,v,x,_,C){return Zone.current.scheduleMacroTask(d,v,x,_,C)}const ye=Zone.__symbol__,kn="undefined"!=typeof window,tt=kn?window:void 0,Fe=kn&&tt||"object"==typeof self&&self||global;function vs(d,v){for(let x=d.length-1;x>=0;x--)"function"==typeof d[x]&&(d[x]=Yn(d[x],v+"_"+x));return d}function qe(d){return!d||!1!==d.writable&&!("function"==typeof d.get&&void 0===d.set)}const lt="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,gn=!("nw"in Fe)&&void 0!==Fe.process&&"[object process]"==={}.toString.call(Fe.process),Ln=!gn&&!lt&&!(!kn||!tt.HTMLElement),or=void 0!==Fe.process&&"[object process]"==={}.toString.call(Fe.process)&&!lt&&!(!kn||!tt.HTMLElement),ae={},Xe=function(d){if(!(d=d||Fe.event))return;let v=ae[d.type];v||(v=ae[d.type]=ye("ON_PROPERTY"+d.type));const x=this||d.target||Fe,_=x[v];let C;if(Ln&&x===tt&&"error"===d.type){const A=d;C=_&&_.call(this,A.message,A.filename,A.lineno,A.colno,A.error),!0===C&&d.preventDefault()}else C=_&&_.apply(this,arguments),null!=C&&!C&&d.preventDefault();return C};function ar(d,v,x){let _=Xt(d,v);if(!_&&x&&Xt(x,v)&&(_={enumerable:!0,configurable:!0}),!_||!_.configurable)return;const C=ye("on"+v+"patched");if(d.hasOwnProperty(C)&&d[C])return;delete _.writable,delete _.value;const A=_.get,R=_.set,H=v.slice(2);let Q=ae[H];Q||(Q=ae[H]=ye("ON_PROPERTY"+H)),_.set=function(O){let G=this;!G&&d===Fe&&(G=Fe),G&&("function"==typeof G[Q]&&G.removeEventListener(H,Xe),R&&R.call(G,null),G[Q]=O,"function"==typeof O&&G.addEventListener(H,Xe,!1))},_.get=function(){let O=this;if(!O&&d===Fe&&(O=Fe),!O)return null;const G=O[Q];if(G)return G;if(A){let ve=A.call(this);if(ve)return _.set.call(this,ve),"function"==typeof O.removeAttribute&&O.removeAttribute(v),ve}return null},Zn(d,v,_),d[C]=!0}function ur(d,v,x){if(v)for(let _=0;_<v.length;_++)ar(d,"on"+v[_],x);else{const _=[];for(const C in d)"on"==C.slice(0,2)&&_.push(C);for(let C=0;C<_.length;C++)ar(d,_[C],x)}}const vt=ye("originalInstance");function Vt(d){const v=Fe[d];if(!v)return;Fe[ye(d)]=v,Fe[d]=function(){const C=vs(arguments,d);switch(C.length){case 0:this[vt]=new v;break;case 1:this[vt]=new v(C[0]);break;case 2:this[vt]=new v(C[0],C[1]);break;case 3:this[vt]=new v(C[0],C[1],C[2]);break;case 4:this[vt]=new v(C[0],C[1],C[2],C[3]);break;default:throw new Error("Arg list too long.")}},Lt(Fe[d],v);const x=new v(function(){});let _;for(_ in x)"XMLHttpRequest"===d&&"responseBlob"===_||function(C){"function"==typeof x[C]?Fe[d].prototype[C]=function(){return this[vt][C].apply(this[vt],arguments)}:Zn(Fe[d].prototype,C,{set:function(A){"function"==typeof A?(this[vt][C]=Yn(A,d+"."+C),Lt(this[vt][C],A)):this[vt][C]=A},get:function(){return this[vt][C]}})}(_);for(_ in v)"prototype"!==_&&v.hasOwnProperty(_)&&(Fe[d][_]=v[_])}function qt(d,v,x){let _=d;for(;_&&!_.hasOwnProperty(v);)_=Xn(_);!_&&d[v]&&(_=d);const C=ye(v);let A=null;if(_&&(!(A=_[C])||!_.hasOwnProperty(C))&&(A=_[C]=_[v],qe(_&&Xt(_,v)))){const H=x(A,C,v);_[v]=function(){return H(this,arguments)},Lt(_[v],A)}return A}function li(d,v,x){let _=null;function C(A){const R=A.data;return R.args[R.cbIdx]=function(){A.invoke.apply(this,arguments)},_.apply(R.target,R.args),A}_=qt(d,v,A=>function(R,H){const Q=x(R,H);return Q.cbIdx>=0&&"function"==typeof H[Q.cbIdx]?mn(Q.name,H[Q.cbIdx],Q,C):A.apply(R,H)})}function Lt(d,v){d[ye("OriginalDelegate")]=v}let lr=!1,Es=!1;function ci(){if(lr)return Es;lr=!0;try{const d=tt.navigator.userAgent;(-1!==d.indexOf("MSIE ")||-1!==d.indexOf("Trident/")||-1!==d.indexOf("Edge/"))&&(Es=!0)}catch(d){}return Es}Zone.__load_patch("ZoneAwarePromise",(d,v,x)=>{const _=Object.getOwnPropertyDescriptor,C=Object.defineProperty,R=x.symbol,H=[],Q=!0===d[R("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],O=R("Promise"),G=R("then");x.onUnhandledError=y=>{if(x.showUncaughtError()){const N=y&&y.rejection;N?console.error("Unhandled Promise rejection:",N instanceof Error?N.message:N,"; Zone:",y.zone.name,"; Task:",y.task&&y.task.source,"; Value:",N,N instanceof Error?N.stack:void 0):console.error(y)}},x.microtaskDrainDone=()=>{for(;H.length;){const y=H.shift();try{y.zone.runGuarded(()=>{throw y.throwOriginal?y.rejection:y})}catch(N){ue(N)}}};const he=R("unhandledPromiseRejectionHandler");function ue(y){x.onUnhandledError(y);try{const N=v[he];"function"==typeof N&&N.call(this,y)}catch(N){}}function we(y){return y&&y.then}function xe(y){return y}function Ge(y){return f.reject(y)}const Oe=R("state"),te=R("value"),W=R("finally"),Ie=R("parentPromiseValue"),_e=R("parentPromiseState"),le=null,F=!0,Ae=!1;function se(y,N){return w=>{try{De(y,N,w)}catch(P){De(y,!1,P)}}}const j=function(){let y=!1;return function(w){return function(){y||(y=!0,w.apply(null,arguments))}}},Ct=R("currentTaskTrace");function De(y,N,w){const P=j();if(y===w)throw new TypeError("Promise resolved with itself");if(y[Oe]===le){let q=null;try{("object"==typeof w||"function"==typeof w)&&(q=w&&w.then)}catch(K){return P(()=>{De(y,!1,K)})(),y}if(N!==Ae&&w instanceof f&&w.hasOwnProperty(Oe)&&w.hasOwnProperty(te)&&w[Oe]!==le)Et(w),De(y,w[Oe],w[te]);else if(N!==Ae&&"function"==typeof q)try{q.call(w,P(se(y,N)),P(se(y,!1)))}catch(K){P(()=>{De(y,!1,K)})()}else{y[Oe]=N;const K=y[te];if(y[te]=w,y[W]===W&&N===F&&(y[Oe]=y[_e],y[te]=y[Ie]),N===Ae&&w instanceof Error){const V=v.currentTask&&v.currentTask.data&&v.currentTask.data.__creationTrace__;V&&C(w,Ct,{configurable:!0,enumerable:!1,writable:!0,value:V})}for(let V=0;V<K.length;)Le(y,K[V++],K[V++],K[V++],K[V++]);if(0==K.length&&N==Ae){y[Oe]=0;let V=w;try{throw new Error("Uncaught (in promise): "+function A(y){return y&&y.toString===Object.prototype.toString?(y.constructor&&y.constructor.name||"")+": "+JSON.stringify(y):y?y.toString():Object.prototype.toString.call(y)}(w)+(w&&w.stack?"\n"+w.stack:""))}catch(Z){V=Z}Q&&(V.throwOriginal=!0),V.rejection=w,V.promise=y,V.zone=v.current,V.task=v.currentTask,H.push(V),x.scheduleMicroTask()}}}return y}const Pe=R("rejectionHandledHandler");function Et(y){if(0===y[Oe]){try{const N=v[Pe];N&&"function"==typeof N&&N.call(this,{rejection:y[te],promise:y})}catch(N){}y[Oe]=Ae;for(let N=0;N<H.length;N++)y===H[N].promise&&H.splice(N,1)}}function Le(y,N,w,P,q){Et(y);const K=y[Oe],V=K?"function"==typeof P?P:xe:"function"==typeof q?q:Ge;N.scheduleMicroTask("Promise.then",()=>{try{const Z=y[te],re=!!w&&W===w[W];re&&(w[Ie]=Z,w[_e]=K);const ie=N.run(V,void 0,re&&V!==Ge&&V!==xe?[]:[Z]);De(w,!0,ie)}catch(Z){De(w,!1,Z)}},w)}const T=function(){},U=d.AggregateError;class f{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(N){return De(new this(null),F,N)}static reject(N){return De(new this(null),Ae,N)}static any(N){if(!N||"function"!=typeof N[Symbol.iterator])return Promise.reject(new U([],"All promises were rejected"));const w=[];let P=0;try{for(let V of N)P++,w.push(f.resolve(V))}catch(V){return Promise.reject(new U([],"All promises were rejected"))}if(0===P)return Promise.reject(new U([],"All promises were rejected"));let q=!1;const K=[];return new f((V,Z)=>{for(let re=0;re<w.length;re++)w[re].then(ie=>{q||(q=!0,V(ie))},ie=>{K.push(ie),P--,0===P&&(q=!0,Z(new U(K,"All promises were rejected")))})})}static race(N){let w,P,q=new this((Z,re)=>{w=Z,P=re});function K(Z){w(Z)}function V(Z){P(Z)}for(let Z of N)we(Z)||(Z=this.resolve(Z)),Z.then(K,V);return q}static all(N){return f.allWithCallback(N)}static allSettled(N){return(this&&this.prototype instanceof f?this:f).allWithCallback(N,{thenCallback:P=>({status:"fulfilled",value:P}),errorCallback:P=>({status:"rejected",reason:P})})}static allWithCallback(N,w){let P,q,K=new this((ie,Se)=>{P=ie,q=Se}),V=2,Z=0;const re=[];for(let ie of N){we(ie)||(ie=this.resolve(ie));const Se=Z;try{ie.then(Te=>{re[Se]=w?w.thenCallback(Te):Te,V--,0===V&&P(re)},Te=>{w?(re[Se]=w.errorCallback(Te),V--,0===V&&P(re)):q(Te)})}catch(Te){q(Te)}V++,Z++}return V-=2,0===V&&P(re),K}constructor(N){const w=this;if(!(w instanceof f))throw new Error("Must be an instanceof Promise.");w[Oe]=le,w[te]=[];try{const P=j();N&&N(P(se(w,F)),P(se(w,Ae)))}catch(P){De(w,!1,P)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return f}then(N,w){var P;let q=null===(P=this.constructor)||void 0===P?void 0:P[Symbol.species];(!q||"function"!=typeof q)&&(q=this.constructor||f);const K=new q(T),V=v.current;return this[Oe]==le?this[te].push(V,K,N,w):Le(this,V,K,N,w),K}catch(N){return this.then(null,N)}finally(N){var w;let P=null===(w=this.constructor)||void 0===w?void 0:w[Symbol.species];(!P||"function"!=typeof P)&&(P=f);const q=new P(T);q[W]=W;const K=v.current;return this[Oe]==le?this[te].push(K,q,N,N):Le(this,K,q,N,N),q}}f.resolve=f.resolve,f.reject=f.reject,f.race=f.race,f.all=f.all;const g=d[O]=d.Promise;d.Promise=f;const M=R("thenPatched");function Y(y){const N=y.prototype,w=_(N,"then");if(w&&(!1===w.writable||!w.configurable))return;const P=N.then;N[G]=P,y.prototype.then=function(q,K){return new f((Z,re)=>{P.call(this,Z,re)}).then(q,K)},y[M]=!0}return x.patchThen=Y,g&&(Y(g),qt(d,"fetch",y=>function Re(y){return function(N,w){let P=y.apply(N,w);if(P instanceof f)return P;let q=P.constructor;return q[M]||Y(q),P}}(y))),Promise[v.__symbol__("uncaughtPromiseErrors")]=H,f}),Zone.__load_patch("toString",d=>{const v=Function.prototype.toString,x=ye("OriginalDelegate"),_=ye("Promise"),C=ye("Error"),A=function(){if("function"==typeof this){const O=this[x];if(O)return"function"==typeof O?v.call(O):Object.prototype.toString.call(O);if(this===Promise){const G=d[_];if(G)return v.call(G)}if(this===Error){const G=d[C];if(G)return v.call(G)}}return v.call(this)};A[x]=v,Function.prototype.toString=A;const R=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":R.call(this)}});let Mt=!1;if("undefined"!=typeof window)try{const d=Object.defineProperty({},"passive",{get:function(){Mt=!0}});window.addEventListener("test",d,d),window.removeEventListener("test",d,d)}catch(d){Mt=!1}const Ho={useG:!0},Qe={},_s={},hr=new RegExp("^"+J+"(\\w+)(true|false)$"),Yt=ye("propagationStopped");function pr(d,v){const x=(v?v(d):d)+gt,_=(v?v(d):d)+xt,C=J+x,A=J+_;Qe[d]={},Qe[d][gt]=C,Qe[d][xt]=A}function hi(d,v,x,_){const C=_&&_.add||et,A=_&&_.rm||Nn,R=_&&_.listeners||"eventListeners",H=_&&_.rmAll||"removeAllListeners",Q=ye(C),O="."+C+":",he=function(te,W,Ie){if(te.isRemoved)return;const _e=te.callback;let X;"object"==typeof _e&&_e.handleEvent&&(te.callback=F=>_e.handleEvent(F),te.originalDelegate=_e);try{te.invoke(te,W,[Ie])}catch(F){X=F}const le=te.options;return le&&"object"==typeof le&&le.once&&W[A].call(W,Ie.type,te.originalDelegate?te.originalDelegate:te.callback,le),X};function ue(te,W,Ie){if(!(W=W||d.event))return;const _e=te||W.target||d,X=_e[Qe[W.type][Ie?xt:gt]];if(X){const le=[];if(1===X.length){const F=he(X[0],_e,W);F&&le.push(F)}else{const F=X.slice();for(let Ae=0;Ae<F.length&&(!W||!0!==W[Yt]);Ae++){const $=he(F[Ae],_e,W);$&&le.push($)}}if(1===le.length)throw le[0];for(let F=0;F<le.length;F++){const Ae=le[F];v.nativeScheduleMicroTask(()=>{throw Ae})}}}const we=function(te){return ue(this,te,!1)},xe=function(te){return ue(this,te,!0)};function Ge(te,W){if(!te)return!1;let Ie=!0;W&&void 0!==W.useG&&(Ie=W.useG);const _e=W&&W.vh;let X=!0;W&&void 0!==W.chkDup&&(X=W.chkDup);let le=!1;W&&void 0!==W.rt&&(le=W.rt);let F=te;for(;F&&!F.hasOwnProperty(C);)F=Xn(F);if(!F&&te[C]&&(F=te),!F||F[Q])return!1;const Ae=W&&W.eventNameToString,$={},se=F[Q]=F[C],j=F[ye(A)]=F[A],ze=F[ye(R)]=F[R],Ct=F[ye(H)]=F[H];let De;function Pe(w,P){return!Mt&&"object"==typeof w&&w?!!w.capture:Mt&&P?"boolean"==typeof w?{capture:w,passive:!0}:w?"object"==typeof w&&!1!==w.passive?Object.assign(Object.assign({},w),{passive:!0}):w:{passive:!0}:w}W&&W.prepend&&(De=F[ye(W.prepend)]=F[W.prepend]);const f=Ie?function(w){if(!$.isExisting)return se.call($.target,$.eventName,$.capture?xe:we,$.options)}:function(w){return se.call($.target,$.eventName,w.invoke,$.options)},g=Ie?function(w){if(!w.isRemoved){const P=Qe[w.eventName];let q;P&&(q=P[w.capture?xt:gt]);const K=q&&w.target[q];if(K)for(let V=0;V<K.length;V++)if(K[V]===w){K.splice(V,1),w.isRemoved=!0,0===K.length&&(w.allRemoved=!0,w.target[q]=null);break}}if(w.allRemoved)return j.call(w.target,w.eventName,w.capture?xe:we,w.options)}:function(w){return j.call(w.target,w.eventName,w.invoke,w.options)},Y=W&&W.diff?W.diff:function(w,P){const q=typeof P;return"function"===q&&w.callback===P||"object"===q&&w.originalDelegate===P},Re=Zone[ye("UNPATCHED_EVENTS")],y=d[ye("PASSIVE_EVENTS")],N=function(w,P,q,K,V=!1,Z=!1){return function(){const re=this||d;let ie=arguments[0];W&&W.transferEventName&&(ie=W.transferEventName(ie));let Se=arguments[1];if(!Se)return w.apply(this,arguments);if(gn&&"uncaughtException"===ie)return w.apply(this,arguments);let Te=!1;if("function"!=typeof Se){if(!Se.handleEvent)return w.apply(this,arguments);Te=!0}if(_e&&!_e(w,Se,re,arguments))return;const Ht=Mt&&!!y&&-1!==y.indexOf(ie),_t=Pe(arguments[2],Ht);if(Re)for(let ct=0;ct<Re.length;ct++)if(ie===Re[ct])return Ht?w.call(re,ie,Se,_t):w.apply(this,arguments);const ws=!!_t&&("boolean"==typeof _t||_t.capture),Ts=!(!_t||"object"!=typeof _t)&&_t.once,Qn=Zone.current;let xs=Qe[ie];xs||(pr(ie,Ae),xs=Qe[ie]);const mr=xs[ws?xt:gt];let Ut,jt=re[mr],Cs=!1;if(jt){if(Cs=!0,X)for(let ct=0;ct<jt.length;ct++)if(Y(jt[ct],Se))return}else jt=re[mr]=[];const gr=re.constructor.name,Bn=_s[gr];Bn&&(Ut=Bn[ie]),Ut||(Ut=gr+P+(Ae?Ae(ie):ie)),$.options=_t,Ts&&($.options.once=!1),$.target=re,$.capture=ws,$.eventName=ie,$.isExisting=Cs;const Wt=Ie?Ho:void 0;Wt&&(Wt.taskData=$);const $e=Qn.scheduleEventTask(Ut,Se,Wt,q,K);return $.target=null,Wt&&(Wt.taskData=null),Ts&&(_t.once=!0),!Mt&&"boolean"==typeof $e.options||($e.options=_t),$e.target=re,$e.capture=ws,$e.eventName=ie,Te&&($e.originalDelegate=Se),Z?jt.unshift($e):jt.push($e),V?re:void 0}};return F[C]=N(se,O,f,g,le),De&&(F.prependListener=N(De,".prependListener:",function(w){return De.call($.target,$.eventName,w.invoke,$.options)},g,le,!0)),F[A]=function(){const w=this||d;let P=arguments[0];W&&W.transferEventName&&(P=W.transferEventName(P));const q=arguments[2],K=!!q&&("boolean"==typeof q||q.capture),V=arguments[1];if(!V)return j.apply(this,arguments);if(_e&&!_e(j,V,w,arguments))return;const Z=Qe[P];let re;Z&&(re=Z[K?xt:gt]);const ie=re&&w[re];if(ie)for(let Se=0;Se<ie.length;Se++){const Te=ie[Se];if(Y(Te,V))return ie.splice(Se,1),Te.isRemoved=!0,0===ie.length&&(Te.allRemoved=!0,w[re]=null,"string"==typeof P)&&(w[J+"ON_PROPERTY"+P]=null),Te.zone.cancelTask(Te),le?w:void 0}return j.apply(this,arguments)},F[R]=function(){const w=this||d;let P=arguments[0];W&&W.transferEventName&&(P=W.transferEventName(P));const q=[],K=Qt(w,Ae?Ae(P):P);for(let V=0;V<K.length;V++){const Z=K[V];q.push(Z.originalDelegate?Z.originalDelegate:Z.callback)}return q},F[H]=function(){const w=this||d;let P=arguments[0];if(P){W&&W.transferEventName&&(P=W.transferEventName(P));const q=Qe[P];if(q){const Z=w[q[gt]],re=w[q[xt]];if(Z){const ie=Z.slice();for(let Se=0;Se<ie.length;Se++){const Te=ie[Se];this[A].call(this,P,Te.originalDelegate?Te.originalDelegate:Te.callback,Te.options)}}if(re){const ie=re.slice();for(let Se=0;Se<ie.length;Se++){const Te=ie[Se];this[A].call(this,P,Te.originalDelegate?Te.originalDelegate:Te.callback,Te.options)}}}}else{const q=Object.keys(w);for(let K=0;K<q.length;K++){const Z=hr.exec(q[K]);let re=Z&&Z[1];re&&"removeListener"!==re&&this[H].call(this,re)}this[H].call(this,"removeListener")}if(le)return this},Lt(F[C],se),Lt(F[A],j),Ct&&Lt(F[H],Ct),ze&&Lt(F[R],ze),!0}let Oe=[];for(let te=0;te<x.length;te++)Oe[te]=Ge(x[te],_);return Oe}function Qt(d,v){if(!v){const A=[];for(let R in d){const H=hr.exec(R);let Q=H&&H[1];if(Q&&(!v||Q===v)){const O=d[R];if(O)for(let G=0;G<O.length;G++)A.push(O[G])}}return A}let x=Qe[v];x||(pr(v),x=Qe[v]);const _=d[x[gt]],C=d[x[xt]];return _?C?_.concat(C):_.slice():C?C.slice():[]}function dr(d,v){const x=d.Event;x&&x.prototype&&v.patchMethod(x.prototype,"stopImmediatePropagation",_=>function(C,A){C[Yt]=!0,_&&_.apply(C,A)})}function pi(d,v,x,_,C){const A=Zone.__symbol__(_);if(v[A])return;const R=v[A]=v[_];v[_]=function(H,Q,O){return Q&&Q.prototype&&C.forEach(function(G){const ve=`${x}.${_}::`+G,he=Q.prototype;try{if(he.hasOwnProperty(G)){const ue=d.ObjectGetOwnPropertyDescriptor(he,G);ue&&ue.value?(ue.value=d.wrapWithCurrentZone(ue.value,ve),d._redefineProperty(Q.prototype,G,ue)):he[G]&&(he[G]=d.wrapWithCurrentZone(he[G],ve))}else he[G]&&(he[G]=d.wrapWithCurrentZone(he[G],ve))}catch(ue){}}),R.call(v,H,Q,O)},d.attachOriginToPatched(v[_],R)}function ys(d,v,x){if(!x||0===x.length)return v;const _=x.filter(A=>A.target===d);if(!_||0===_.length)return v;const C=_[0].ignoreProperties;return v.filter(A=>-1===C.indexOf(A))}function Ss(d,v,x,_){d&&ur(d,ys(d,v,x),_)}function Mn(d){return Object.getOwnPropertyNames(d).filter(v=>v.startsWith("on")&&v.length>2).map(v=>v.substring(2))}Zone.__load_patch("util",(d,v,x)=>{const _=Mn(d);x.patchOnProperties=ur,x.patchMethod=qt,x.bindArguments=vs,x.patchMacroTask=li;const C=v.__symbol__("BLACK_LISTED_EVENTS"),A=v.__symbol__("UNPATCHED_EVENTS");d[A]&&(d[C]=d[A]),d[C]&&(v[C]=v[A]=d[C]),x.patchEventPrototype=dr,x.patchEventTarget=hi,x.isIEOrEdge=ci,x.ObjectDefineProperty=Zn,x.ObjectGetOwnPropertyDescriptor=Xt,x.ObjectCreate=ir,x.ArraySlice=He,x.patchClass=Vt,x.wrapWithCurrentZone=Yn,x.filterProperties=ys,x.attachOriginToPatched=Lt,x._redefineProperty=Object.defineProperty,x.patchCallbacks=pi,x.getGlobalObjects=()=>({globalSources:_s,zoneSymbolEventNames:Qe,eventNames:_,isBrowser:Ln,isMix:or,isNode:gn,TRUE_STR:xt,FALSE_STR:gt,ZONE_SYMBOL_PREFIX:J,ADD_EVENT_LISTENER_STR:et,REMOVE_EVENT_LISTENER_STR:Nn})});const Rn=ye("zoneTask");function vn(d,v,x,_){let C=null,A=null;x+=_;const R={};function H(O){const G=O.data;return G.args[0]=function(){return O.invoke.apply(this,arguments)},G.handleId=C.apply(d,G.args),O}function Q(O){return A.call(d,O.data.handleId)}C=qt(d,v+=_,O=>function(G,ve){if("function"==typeof ve[0]){const he={isPeriodic:"Interval"===_,delay:"Timeout"===_||"Interval"===_?ve[1]||0:void 0,args:ve},ue=ve[0];ve[0]=function(){try{return ue.apply(this,arguments)}finally{he.isPeriodic||("number"==typeof he.handleId?delete R[he.handleId]:he.handleId&&(he.handleId[Rn]=null))}};const we=mn(v,ve[0],he,H,Q);if(!we)return we;const xe=we.data.handleId;return"number"==typeof xe?R[xe]=we:xe&&(xe[Rn]=we),xe&&xe.ref&&xe.unref&&"function"==typeof xe.ref&&"function"==typeof xe.unref&&(we.ref=xe.ref.bind(xe),we.unref=xe.unref.bind(xe)),"number"==typeof xe||xe?xe:we}return O.apply(d,ve)}),A=qt(d,x,O=>function(G,ve){const he=ve[0];let ue;"number"==typeof he?ue=R[he]:(ue=he&&he[Rn],ue||(ue=he)),ue&&"string"==typeof ue.type?"notScheduled"!==ue.state&&(ue.cancelFn&&ue.data.isPeriodic||0===ue.runCount)&&("number"==typeof he?delete R[he]:he&&(he[Rn]=null),ue.zone.cancelTask(ue)):O.apply(d,ve)})}Zone.__load_patch("legacy",d=>{const v=d[Zone.__symbol__("legacyPatch")];v&&v()}),Zone.__load_patch("queueMicrotask",(d,v,x)=>{x.patchMethod(d,"queueMicrotask",_=>function(C,A){v.current.scheduleMicroTask("queueMicrotask",A[0])})}),Zone.__load_patch("timers",d=>{const v="set",x="clear";vn(d,v,x,"Timeout"),vn(d,v,x,"Interval"),vn(d,v,x,"Immediate")}),Zone.__load_patch("requestAnimationFrame",d=>{vn(d,"request","cancel","AnimationFrame"),vn(d,"mozRequest","mozCancel","AnimationFrame"),vn(d,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",(d,v)=>{const x=["alert","prompt","confirm"];for(let _=0;_<x.length;_++)qt(d,x[_],(A,R,H)=>function(Q,O){return v.current.run(A,d,O,H)})}),Zone.__load_patch("EventTarget",(d,v,x)=>{(function mi(d,v){v.patchEventPrototype(d,v)})(d,x),function fi(d,v){if(Zone[v.symbol("patchEventTarget")])return;const{eventNames:x,zoneSymbolEventNames:_,TRUE_STR:C,FALSE_STR:A,ZONE_SYMBOL_PREFIX:R}=v.getGlobalObjects();for(let Q=0;Q<x.length;Q++){const O=x[Q],he=R+(O+A),ue=R+(O+C);_[O]={},_[O][A]=he,_[O][C]=ue}const H=d.EventTarget;H&&H.prototype&&v.patchEventTarget(d,v,[H&&H.prototype])}(d,x);const _=d.XMLHttpRequestEventTarget;_&&_.prototype&&x.patchEventTarget(d,x,[_.prototype])}),Zone.__load_patch("MutationObserver",(d,v,x)=>{Vt("MutationObserver"),Vt("WebKitMutationObserver")}),Zone.__load_patch("IntersectionObserver",(d,v,x)=>{Vt("IntersectionObserver")}),Zone.__load_patch("FileReader",(d,v,x)=>{Vt("FileReader")}),Zone.__load_patch("on_property",(d,v,x)=>{!function fr(d,v){if(gn&&!or||Zone[d.symbol("patchEvents")])return;const x=v.__Zone_ignore_on_properties;let _=[];if(Ln){const C=window;_=_.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const A=function cr(){try{const d=tt.navigator.userAgent;if(-1!==d.indexOf("MSIE ")||-1!==d.indexOf("Trident/"))return!0}catch(d){}return!1}()?[{target:C,ignoreProperties:["error"]}]:[];Ss(C,Mn(C),x&&x.concat(A),Xn(C))}_=_.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let C=0;C<_.length;C++){const A=v[_[C]];A&&A.prototype&&Ss(A.prototype,Mn(A.prototype),x)}}(x,d)}),Zone.__load_patch("customElements",(d,v,x)=>{!function di(d,v){const{isBrowser:x,isMix:_}=v.getGlobalObjects();(x||_)&&d.customElements&&"customElements"in d&&v.patchCallbacks(v,d.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"])}(d,x)}),Zone.__load_patch("XHR",(d,v)=>{!function Q(O){const G=O.XMLHttpRequest;if(!G)return;const ve=G.prototype;let ue=ve[Pn],we=ve[gs];if(!ue){const $=O.XMLHttpRequestEventTarget;if($){const se=$.prototype;ue=se[Pn],we=se[gs]}}const xe="readystatechange",Ge="scheduled";function Oe($){const se=$.data,j=se.target;j[A]=!1,j[H]=!1;const ze=j[C];ue||(ue=j[Pn],we=j[gs]),ze&&we.call(j,xe,ze);const Ct=j[C]=()=>{if(j.readyState===j.DONE)if(!se.aborted&&j[A]&&$.state===Ge){const Pe=j[v.__symbol__("loadfalse")];if(0!==j.status&&Pe&&Pe.length>0){const Et=$.invoke;$.invoke=function(){const Le=j[v.__symbol__("loadfalse")];for(let Ee=0;Ee<Le.length;Ee++)Le[Ee]===$&&Le.splice(Ee,1);!se.aborted&&$.state===Ge&&Et.call($)},Pe.push($)}else $.invoke()}else!se.aborted&&!1===j[A]&&(j[H]=!0)};return ue.call(j,xe,Ct),j[x]||(j[x]=$),F.apply(j,se.args),j[A]=!0,$}function te(){}function W($){const se=$.data;return se.aborted=!0,Ae.apply(se.target,se.args)}const Ie=qt(ve,"open",()=>function($,se){return $[_]=0==se[2],$[R]=se[1],Ie.apply($,se)}),X=ye("fetchTaskAborting"),le=ye("fetchTaskScheduling"),F=qt(ve,"send",()=>function($,se){if(!0===v.current[le]||$[_])return F.apply($,se);{const j={target:$,url:$[R],isPeriodic:!1,args:se,aborted:!1},ze=mn("XMLHttpRequest.send",te,j,Oe,W);$&&!0===$[H]&&!j.aborted&&ze.state===Ge&&ze.invoke()}}),Ae=qt(ve,"abort",()=>function($,se){const j=function he($){return $[x]}($);if(j&&"string"==typeof j.type){if(null==j.cancelFn||j.data&&j.data.aborted)return;j.zone.cancelTask(j)}else if(!0===v.current[X])return Ae.apply($,se)})}(d);const x=ye("xhrTask"),_=ye("xhrSync"),C=ye("xhrListener"),A=ye("xhrScheduled"),R=ye("xhrURL"),H=ye("xhrErrorBeforeScheduled")}),Zone.__load_patch("geolocation",d=>{d.navigator&&d.navigator.geolocation&&function ui(d,v){const x=d.constructor.name;for(let _=0;_<v.length;_++){const C=v[_],A=d[C];if(A){if(!qe(Xt(d,C)))continue;d[C]=(H=>{const Q=function(){return H.apply(this,vs(arguments,x+"."+C))};return Lt(Q,H),Q})(A)}}}(d.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",(d,v)=>{function x(_){return function(C){Qt(d,_).forEach(R=>{const H=d.PromiseRejectionEvent;if(H){const Q=new H(_,{promise:C.promise,reason:C.rejection});R.invoke(Q)}})}}d.PromiseRejectionEvent&&(v[ye("unhandledPromiseRejectionHandler")]=x("unhandledrejection"),v[ye("rejectionHandledHandler")]=x("rejectionhandled"))})}},Xt=>{Xt(Xt.s=6106)}]);