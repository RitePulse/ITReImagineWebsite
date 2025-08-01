(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function nc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ha={exports:{}},el={},Wa={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gn=Symbol.for("react.element"),rc=Symbol.for("react.portal"),lc=Symbol.for("react.fragment"),ic=Symbol.for("react.strict_mode"),oc=Symbol.for("react.profiler"),ac=Symbol.for("react.provider"),uc=Symbol.for("react.context"),sc=Symbol.for("react.forward_ref"),cc=Symbol.for("react.suspense"),fc=Symbol.for("react.memo"),dc=Symbol.for("react.lazy"),Do=Symbol.iterator;function pc(e){return e===null||typeof e!="object"?null:(e=Do&&e[Do]||e["@@iterator"],typeof e=="function"?e:null)}var Qa={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ya=Object.assign,Ka={};function ln(e,t,n){this.props=e,this.context=t,this.refs=Ka,this.updater=n||Qa}ln.prototype.isReactComponent={};ln.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ln.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ga(){}Ga.prototype=ln.prototype;function Ui(e,t,n){this.props=e,this.context=t,this.refs=Ka,this.updater=n||Qa}var Ai=Ui.prototype=new Ga;Ai.constructor=Ui;Ya(Ai,ln.prototype);Ai.isPureReactComponent=!0;var Oo=Array.isArray,Xa=Object.prototype.hasOwnProperty,$i={current:null},Za={key:!0,ref:!0,__self:!0,__source:!0};function Ja(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Xa.call(t,r)&&!Za.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var u=Array(a),f=0;f<a;f++)u[f]=arguments[f+2];l.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:Gn,type:e,key:i,ref:o,props:l,_owner:$i.current}}function mc(e,t){return{$$typeof:Gn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Bi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gn}function hc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Mo=/\/+/g;function xl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hc(""+e.key):t.toString(36)}function yr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Gn:case rc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+xl(o,0):r,Oo(l)?(n="",e!=null&&(n=e.replace(Mo,"$&/")+"/"),yr(l,t,n,"",function(f){return f})):l!=null&&(Bi(l)&&(l=mc(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Mo,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Oo(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+xl(i,a);o+=yr(i,t,n,u,l)}else if(u=pc(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+xl(i,a++),o+=yr(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function tr(e,t,n){if(e==null)return e;var r=[],l=0;return yr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function gc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ae={current:null},xr={transition:null},vc={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:xr,ReactCurrentOwner:$i};function qa(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:tr,forEach:function(e,t,n){tr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return tr(e,function(){t++}),t},toArray:function(e){return tr(e,function(t){return t})||[]},only:function(e){if(!Bi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=ln;T.Fragment=lc;T.Profiler=oc;T.PureComponent=Ui;T.StrictMode=ic;T.Suspense=cc;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vc;T.act=qa;T.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ya({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=$i.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Xa.call(t,u)&&!Za.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var f=0;f<u;f++)a[f]=arguments[f+2];r.children=a}return{$$typeof:Gn,type:e.type,key:l,ref:i,props:r,_owner:o}};T.createContext=function(e){return e={$$typeof:uc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ac,_context:e},e.Consumer=e};T.createElement=Ja;T.createFactory=function(e){var t=Ja.bind(null,e);return t.type=e,t};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:sc,render:e}};T.isValidElement=Bi;T.lazy=function(e){return{$$typeof:dc,_payload:{_status:-1,_result:e},_init:gc}};T.memo=function(e,t){return{$$typeof:fc,type:e,compare:t===void 0?null:t}};T.startTransition=function(e){var t=xr.transition;xr.transition={};try{e()}finally{xr.transition=t}};T.unstable_act=qa;T.useCallback=function(e,t){return ae.current.useCallback(e,t)};T.useContext=function(e){return ae.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return ae.current.useDeferredValue(e)};T.useEffect=function(e,t){return ae.current.useEffect(e,t)};T.useId=function(){return ae.current.useId()};T.useImperativeHandle=function(e,t,n){return ae.current.useImperativeHandle(e,t,n)};T.useInsertionEffect=function(e,t){return ae.current.useInsertionEffect(e,t)};T.useLayoutEffect=function(e,t){return ae.current.useLayoutEffect(e,t)};T.useMemo=function(e,t){return ae.current.useMemo(e,t)};T.useReducer=function(e,t,n){return ae.current.useReducer(e,t,n)};T.useRef=function(e){return ae.current.useRef(e)};T.useState=function(e){return ae.current.useState(e)};T.useSyncExternalStore=function(e,t,n){return ae.current.useSyncExternalStore(e,t,n)};T.useTransition=function(){return ae.current.useTransition()};T.version="18.3.1";Wa.exports=T;var Fe=Wa.exports;const yc=nc(Fe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xc=Fe,wc=Symbol.for("react.element"),kc=Symbol.for("react.fragment"),Sc=Object.prototype.hasOwnProperty,Ec=xc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Nc={key:!0,ref:!0,__self:!0,__source:!0};function ba(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Sc.call(t,r)&&!Nc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:wc,type:e,key:i,ref:o,props:l,_owner:Ec.current}}el.Fragment=kc;el.jsx=ba;el.jsxs=ba;Ha.exports=el;var c=Ha.exports,Ql={},eu={exports:{}},ye={},tu={exports:{}},nu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,z){var P=N.length;N.push(z);e:for(;0<P;){var W=P-1>>>1,X=N[W];if(0<l(X,z))N[W]=z,N[P]=X,P=W;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var z=N[0],P=N.pop();if(P!==z){N[0]=P;e:for(var W=0,X=N.length,bn=X>>>1;W<bn;){var gt=2*(W+1)-1,yl=N[gt],vt=gt+1,er=N[vt];if(0>l(yl,P))vt<X&&0>l(er,yl)?(N[W]=er,N[vt]=P,W=vt):(N[W]=yl,N[gt]=P,W=gt);else if(vt<X&&0>l(er,P))N[W]=er,N[vt]=P,W=vt;else break e}}return z}function l(N,z){var P=N.sortIndex-z.sortIndex;return P!==0?P:N.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var u=[],f=[],g=1,h=null,m=3,x=!1,w=!1,k=!1,F=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var z=n(f);z!==null;){if(z.callback===null)r(f);else if(z.startTime<=N)r(f),z.sortIndex=z.expirationTime,t(u,z);else break;z=n(f)}}function v(N){if(k=!1,p(N),!w)if(n(u)!==null)w=!0,gl(E);else{var z=n(f);z!==null&&vl(v,z.startTime-N)}}function E(N,z){w=!1,k&&(k=!1,d(_),_=-1),x=!0;var P=m;try{for(p(z),h=n(u);h!==null&&(!(h.expirationTime>z)||N&&!je());){var W=h.callback;if(typeof W=="function"){h.callback=null,m=h.priorityLevel;var X=W(h.expirationTime<=z);z=e.unstable_now(),typeof X=="function"?h.callback=X:h===n(u)&&r(u),p(z)}else r(u);h=n(u)}if(h!==null)var bn=!0;else{var gt=n(f);gt!==null&&vl(v,gt.startTime-z),bn=!1}return bn}finally{h=null,m=P,x=!1}}var C=!1,j=null,_=-1,H=5,L=-1;function je(){return!(e.unstable_now()-L<H)}function un(){if(j!==null){var N=e.unstable_now();L=N;var z=!0;try{z=j(!0,N)}finally{z?sn():(C=!1,j=null)}}else C=!1}var sn;if(typeof s=="function")sn=function(){s(un)};else if(typeof MessageChannel<"u"){var Ro=new MessageChannel,tc=Ro.port2;Ro.port1.onmessage=un,sn=function(){tc.postMessage(null)}}else sn=function(){F(un,0)};function gl(N){j=N,C||(C=!0,sn())}function vl(N,z){_=F(function(){N(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,gl(E))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(N){switch(m){case 1:case 2:case 3:var z=3;break;default:z=m}var P=m;m=z;try{return N()}finally{m=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var P=m;m=N;try{return z()}finally{m=P}},e.unstable_scheduleCallback=function(N,z,P){var W=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?W+P:W):P=W,N){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=P+X,N={id:g++,callback:z,priorityLevel:N,startTime:P,expirationTime:X,sortIndex:-1},P>W?(N.sortIndex=P,t(f,N),n(u)===null&&N===n(f)&&(k?(d(_),_=-1):k=!0,vl(v,P-W))):(N.sortIndex=X,t(u,N),w||x||(w=!0,gl(E))),N},e.unstable_shouldYield=je,e.unstable_wrapCallback=function(N){var z=m;return function(){var P=m;m=z;try{return N.apply(this,arguments)}finally{m=P}}}})(nu);tu.exports=nu;var Cc=tu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jc=Fe,ve=Cc;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ru=new Set,Ln={};function Tt(e,t){Jt(e,t),Jt(e+"Capture",t)}function Jt(e,t){for(Ln[e]=t,e=0;e<t.length;e++)ru.add(t[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yl=Object.prototype.hasOwnProperty,_c=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fo={},Uo={};function zc(e){return Yl.call(Uo,e)?!0:Yl.call(Fo,e)?!1:_c.test(e)?Uo[e]=!0:(Fo[e]=!0,!1)}function Pc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Tc(e,t,n,r){if(t===null||typeof t>"u"||Pc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ue(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ee[t]=new ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Vi=/[\-:]([a-z])/g;function Hi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Vi,Hi);ee[t]=new ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Vi,Hi);ee[t]=new ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Vi,Hi);ee[t]=new ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Wi(e,t,n,r){var l=ee.hasOwnProperty(t)?ee[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Tc(t,n,l,r)&&(n=null),r||l===null?zc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xe=jc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nr=Symbol.for("react.element"),Rt=Symbol.for("react.portal"),Dt=Symbol.for("react.fragment"),Qi=Symbol.for("react.strict_mode"),Kl=Symbol.for("react.profiler"),lu=Symbol.for("react.provider"),iu=Symbol.for("react.context"),Yi=Symbol.for("react.forward_ref"),Gl=Symbol.for("react.suspense"),Xl=Symbol.for("react.suspense_list"),Ki=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),ou=Symbol.for("react.offscreen"),Ao=Symbol.iterator;function cn(e){return e===null||typeof e!="object"?null:(e=Ao&&e[Ao]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,wl;function yn(e){if(wl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wl=t&&t[1]||""}return`
`+wl+e}var kl=!1;function Sl(e,t){if(!e||kl)return"";kl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var l=f.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,a=i.length-1;1<=o&&0<=a&&l[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==i[a]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=a);break}}}finally{kl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?yn(e):""}function Lc(e){switch(e.tag){case 5:return yn(e.type);case 16:return yn("Lazy");case 13:return yn("Suspense");case 19:return yn("SuspenseList");case 0:case 2:case 15:return e=Sl(e.type,!1),e;case 11:return e=Sl(e.type.render,!1),e;case 1:return e=Sl(e.type,!0),e;default:return""}}function Zl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dt:return"Fragment";case Rt:return"Portal";case Kl:return"Profiler";case Qi:return"StrictMode";case Gl:return"Suspense";case Xl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case iu:return(e.displayName||"Context")+".Consumer";case lu:return(e._context.displayName||"Context")+".Provider";case Yi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ki:return t=e.displayName||null,t!==null?t:Zl(e.type)||"Memo";case Je:t=e._payload,e=e._init;try{return Zl(e(t))}catch{}}return null}function Ic(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zl(t);case 8:return t===Qi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function au(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Rc(e){var t=au(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function rr(e){e._valueTracker||(e._valueTracker=Rc(e))}function uu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=au(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Tr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jl(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function $o(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function su(e,t){t=t.checked,t!=null&&Wi(e,"checked",t,!1)}function ql(e,t){su(e,t);var n=ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bl(e,t.type,n):t.hasOwnProperty("defaultValue")&&bl(e,t.type,ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Bo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function bl(e,t,n){(t!=="number"||Tr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var xn=Array.isArray;function Qt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ft(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ei(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(xn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ft(n)}}function cu(e,t){var n=ft(t.value),r=ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ho(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ti(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var lr,du=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(lr=lr||document.createElement("div"),lr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=lr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function In(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Sn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dc=["Webkit","ms","Moz","O"];Object.keys(Sn).forEach(function(e){Dc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Sn[t]=Sn[e]})});function pu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Sn.hasOwnProperty(e)&&Sn[e]?(""+t).trim():t+"px"}function mu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=pu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Oc=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ni(e,t){if(t){if(Oc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function ri(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var li=null;function Gi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ii=null,Yt=null,Kt=null;function Wo(e){if(e=Jn(e)){if(typeof ii!="function")throw Error(y(280));var t=e.stateNode;t&&(t=il(t),ii(e.stateNode,e.type,t))}}function hu(e){Yt?Kt?Kt.push(e):Kt=[e]:Yt=e}function gu(){if(Yt){var e=Yt,t=Kt;if(Kt=Yt=null,Wo(e),t)for(e=0;e<t.length;e++)Wo(t[e])}}function vu(e,t){return e(t)}function yu(){}var El=!1;function xu(e,t,n){if(El)return e(t,n);El=!0;try{return vu(e,t,n)}finally{El=!1,(Yt!==null||Kt!==null)&&(yu(),gu())}}function Rn(e,t){var n=e.stateNode;if(n===null)return null;var r=il(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var oi=!1;if(Qe)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){oi=!0}}),window.addEventListener("test",fn,fn),window.removeEventListener("test",fn,fn)}catch{oi=!1}function Mc(e,t,n,r,l,i,o,a,u){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(g){this.onError(g)}}var En=!1,Lr=null,Ir=!1,ai=null,Fc={onError:function(e){En=!0,Lr=e}};function Uc(e,t,n,r,l,i,o,a,u){En=!1,Lr=null,Mc.apply(Fc,arguments)}function Ac(e,t,n,r,l,i,o,a,u){if(Uc.apply(this,arguments),En){if(En){var f=Lr;En=!1,Lr=null}else throw Error(y(198));Ir||(Ir=!0,ai=f)}}function Lt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function wu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qo(e){if(Lt(e)!==e)throw Error(y(188))}function $c(e){var t=e.alternate;if(!t){if(t=Lt(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Qo(l),e;if(i===r)return Qo(l),t;i=i.sibling}throw Error(y(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function ku(e){return e=$c(e),e!==null?Su(e):null}function Su(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Su(e);if(t!==null)return t;e=e.sibling}return null}var Eu=ve.unstable_scheduleCallback,Yo=ve.unstable_cancelCallback,Bc=ve.unstable_shouldYield,Vc=ve.unstable_requestPaint,Q=ve.unstable_now,Hc=ve.unstable_getCurrentPriorityLevel,Xi=ve.unstable_ImmediatePriority,Nu=ve.unstable_UserBlockingPriority,Rr=ve.unstable_NormalPriority,Wc=ve.unstable_LowPriority,Cu=ve.unstable_IdlePriority,tl=null,Ue=null;function Qc(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(tl,e,void 0,(e.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:Gc,Yc=Math.log,Kc=Math.LN2;function Gc(e){return e>>>=0,e===0?32:31-(Yc(e)/Kc|0)|0}var ir=64,or=4194304;function wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Dr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~l;a!==0?r=wn(a):(i&=o,i!==0&&(r=wn(i)))}else o=n&~l,o!==0?r=wn(o):i!==0&&(r=wn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Le(t),l=1<<n,r|=e[n],t&=~l;return r}function Xc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Le(i),a=1<<o,u=l[o];u===-1?(!(a&n)||a&r)&&(l[o]=Xc(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function ui(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ju(){var e=ir;return ir<<=1,!(ir&4194240)&&(ir=64),e}function Nl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Le(t),e[t]=n}function Jc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Le(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Zi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Le(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var R=0;function _u(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var zu,Ji,Pu,Tu,Lu,si=!1,ar=[],rt=null,lt=null,it=null,Dn=new Map,On=new Map,be=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ko(e,t){switch(e){case"focusin":case"focusout":rt=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":it=null;break;case"pointerover":case"pointerout":Dn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":On.delete(t.pointerId)}}function dn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Jn(t),t!==null&&Ji(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function bc(e,t,n,r,l){switch(t){case"focusin":return rt=dn(rt,e,t,n,r,l),!0;case"dragenter":return lt=dn(lt,e,t,n,r,l),!0;case"mouseover":return it=dn(it,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Dn.set(i,dn(Dn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,On.set(i,dn(On.get(i)||null,e,t,n,r,l)),!0}return!1}function Iu(e){var t=wt(e.target);if(t!==null){var n=Lt(t);if(n!==null){if(t=n.tag,t===13){if(t=wu(n),t!==null){e.blockedOn=t,Lu(e.priority,function(){Pu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ci(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);li=r,n.target.dispatchEvent(r),li=null}else return t=Jn(n),t!==null&&Ji(t),e.blockedOn=n,!1;t.shift()}return!0}function Go(e,t,n){wr(e)&&n.delete(t)}function ef(){si=!1,rt!==null&&wr(rt)&&(rt=null),lt!==null&&wr(lt)&&(lt=null),it!==null&&wr(it)&&(it=null),Dn.forEach(Go),On.forEach(Go)}function pn(e,t){e.blockedOn===t&&(e.blockedOn=null,si||(si=!0,ve.unstable_scheduleCallback(ve.unstable_NormalPriority,ef)))}function Mn(e){function t(l){return pn(l,e)}if(0<ar.length){pn(ar[0],e);for(var n=1;n<ar.length;n++){var r=ar[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rt!==null&&pn(rt,e),lt!==null&&pn(lt,e),it!==null&&pn(it,e),Dn.forEach(t),On.forEach(t),n=0;n<be.length;n++)r=be[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<be.length&&(n=be[0],n.blockedOn===null);)Iu(n),n.blockedOn===null&&be.shift()}var Gt=Xe.ReactCurrentBatchConfig,Or=!0;function tf(e,t,n,r){var l=R,i=Gt.transition;Gt.transition=null;try{R=1,qi(e,t,n,r)}finally{R=l,Gt.transition=i}}function nf(e,t,n,r){var l=R,i=Gt.transition;Gt.transition=null;try{R=4,qi(e,t,n,r)}finally{R=l,Gt.transition=i}}function qi(e,t,n,r){if(Or){var l=ci(e,t,n,r);if(l===null)Dl(e,t,r,Mr,n),Ko(e,r);else if(bc(l,e,t,n,r))r.stopPropagation();else if(Ko(e,r),t&4&&-1<qc.indexOf(e)){for(;l!==null;){var i=Jn(l);if(i!==null&&zu(i),i=ci(e,t,n,r),i===null&&Dl(e,t,r,Mr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Dl(e,t,r,null,n)}}var Mr=null;function ci(e,t,n,r){if(Mr=null,e=Gi(r),e=wt(e),e!==null)if(t=Lt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=wu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Mr=e,null}function Ru(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hc()){case Xi:return 1;case Nu:return 4;case Rr:case Wc:return 16;case Cu:return 536870912;default:return 16}default:return 16}}var tt=null,bi=null,kr=null;function Du(){if(kr)return kr;var e,t=bi,n=t.length,r,l="value"in tt?tt.value:tt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return kr=l.slice(e,1<r?1-r:void 0)}function Sr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ur(){return!0}function Xo(){return!1}function xe(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ur:Xo,this.isPropagationStopped=Xo,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),t}var on={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eo=xe(on),Zn=B({},on,{view:0,detail:0}),rf=xe(Zn),Cl,jl,mn,nl=B({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:to,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mn&&(mn&&e.type==="mousemove"?(Cl=e.screenX-mn.screenX,jl=e.screenY-mn.screenY):jl=Cl=0,mn=e),Cl)},movementY:function(e){return"movementY"in e?e.movementY:jl}}),Zo=xe(nl),lf=B({},nl,{dataTransfer:0}),of=xe(lf),af=B({},Zn,{relatedTarget:0}),_l=xe(af),uf=B({},on,{animationName:0,elapsedTime:0,pseudoElement:0}),sf=xe(uf),cf=B({},on,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ff=xe(cf),df=B({},on,{data:0}),Jo=xe(df),pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hf[e])?!!t[e]:!1}function to(){return gf}var vf=B({},Zn,{key:function(e){if(e.key){var t=pf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Sr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:to,charCode:function(e){return e.type==="keypress"?Sr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yf=xe(vf),xf=B({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qo=xe(xf),wf=B({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:to}),kf=xe(wf),Sf=B({},on,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ef=xe(Sf),Nf=B({},nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cf=xe(Nf),jf=[9,13,27,32],no=Qe&&"CompositionEvent"in window,Nn=null;Qe&&"documentMode"in document&&(Nn=document.documentMode);var _f=Qe&&"TextEvent"in window&&!Nn,Ou=Qe&&(!no||Nn&&8<Nn&&11>=Nn),bo=String.fromCharCode(32),ea=!1;function Mu(e,t){switch(e){case"keyup":return jf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ot=!1;function zf(e,t){switch(e){case"compositionend":return Fu(t);case"keypress":return t.which!==32?null:(ea=!0,bo);case"textInput":return e=t.data,e===bo&&ea?null:e;default:return null}}function Pf(e,t){if(Ot)return e==="compositionend"||!no&&Mu(e,t)?(e=Du(),kr=bi=tt=null,Ot=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ou&&t.locale!=="ko"?null:t.data;default:return null}}var Tf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ta(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Tf[e.type]:t==="textarea"}function Uu(e,t,n,r){hu(r),t=Fr(t,"onChange"),0<t.length&&(n=new eo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Cn=null,Fn=null;function Lf(e){Xu(e,0)}function rl(e){var t=Ut(e);if(uu(t))return e}function If(e,t){if(e==="change")return t}var Au=!1;if(Qe){var zl;if(Qe){var Pl="oninput"in document;if(!Pl){var na=document.createElement("div");na.setAttribute("oninput","return;"),Pl=typeof na.oninput=="function"}zl=Pl}else zl=!1;Au=zl&&(!document.documentMode||9<document.documentMode)}function ra(){Cn&&(Cn.detachEvent("onpropertychange",$u),Fn=Cn=null)}function $u(e){if(e.propertyName==="value"&&rl(Fn)){var t=[];Uu(t,Fn,e,Gi(e)),xu(Lf,t)}}function Rf(e,t,n){e==="focusin"?(ra(),Cn=t,Fn=n,Cn.attachEvent("onpropertychange",$u)):e==="focusout"&&ra()}function Df(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rl(Fn)}function Of(e,t){if(e==="click")return rl(t)}function Mf(e,t){if(e==="input"||e==="change")return rl(t)}function Ff(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Re=typeof Object.is=="function"?Object.is:Ff;function Un(e,t){if(Re(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Yl.call(t,l)||!Re(e[l],t[l]))return!1}return!0}function la(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ia(e,t){var n=la(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=la(n)}}function Bu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vu(){for(var e=window,t=Tr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Tr(e.document)}return t}function ro(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Uf(e){var t=Vu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Bu(n.ownerDocument.documentElement,n)){if(r!==null&&ro(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=ia(n,i);var o=ia(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Af=Qe&&"documentMode"in document&&11>=document.documentMode,Mt=null,fi=null,jn=null,di=!1;function oa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;di||Mt==null||Mt!==Tr(r)||(r=Mt,"selectionStart"in r&&ro(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jn&&Un(jn,r)||(jn=r,r=Fr(fi,"onSelect"),0<r.length&&(t=new eo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Mt)))}function sr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ft={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionend:sr("Transition","TransitionEnd")},Tl={},Hu={};Qe&&(Hu=document.createElement("div").style,"AnimationEvent"in window||(delete Ft.animationend.animation,delete Ft.animationiteration.animation,delete Ft.animationstart.animation),"TransitionEvent"in window||delete Ft.transitionend.transition);function ll(e){if(Tl[e])return Tl[e];if(!Ft[e])return e;var t=Ft[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hu)return Tl[e]=t[n];return e}var Wu=ll("animationend"),Qu=ll("animationiteration"),Yu=ll("animationstart"),Ku=ll("transitionend"),Gu=new Map,aa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pt(e,t){Gu.set(e,t),Tt(t,[e])}for(var Ll=0;Ll<aa.length;Ll++){var Il=aa[Ll],$f=Il.toLowerCase(),Bf=Il[0].toUpperCase()+Il.slice(1);pt($f,"on"+Bf)}pt(Wu,"onAnimationEnd");pt(Qu,"onAnimationIteration");pt(Yu,"onAnimationStart");pt("dblclick","onDoubleClick");pt("focusin","onFocus");pt("focusout","onBlur");pt(Ku,"onTransitionEnd");Jt("onMouseEnter",["mouseout","mouseover"]);Jt("onMouseLeave",["mouseout","mouseover"]);Jt("onPointerEnter",["pointerout","pointerover"]);Jt("onPointerLeave",["pointerout","pointerover"]);Tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vf=new Set("cancel close invalid load scroll toggle".split(" ").concat(kn));function ua(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ac(r,t,void 0,e),e.currentTarget=null}function Xu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,f=a.currentTarget;if(a=a.listener,u!==i&&l.isPropagationStopped())break e;ua(l,a,f),i=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,f=a.currentTarget,a=a.listener,u!==i&&l.isPropagationStopped())break e;ua(l,a,f),i=u}}}if(Ir)throw e=ai,Ir=!1,ai=null,e}function O(e,t){var n=t[vi];n===void 0&&(n=t[vi]=new Set);var r=e+"__bubble";n.has(r)||(Zu(t,e,2,!1),n.add(r))}function Rl(e,t,n){var r=0;t&&(r|=4),Zu(n,e,r,t)}var cr="_reactListening"+Math.random().toString(36).slice(2);function An(e){if(!e[cr]){e[cr]=!0,ru.forEach(function(n){n!=="selectionchange"&&(Vf.has(n)||Rl(n,!1,e),Rl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[cr]||(t[cr]=!0,Rl("selectionchange",!1,t))}}function Zu(e,t,n,r){switch(Ru(t)){case 1:var l=tf;break;case 4:l=nf;break;default:l=qi}n=l.bind(null,t,n,e),l=void 0,!oi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Dl(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;a!==null;){if(o=wt(a),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}a=a.parentNode}}r=r.return}xu(function(){var f=i,g=Gi(n),h=[];e:{var m=Gu.get(e);if(m!==void 0){var x=eo,w=e;switch(e){case"keypress":if(Sr(n)===0)break e;case"keydown":case"keyup":x=yf;break;case"focusin":w="focus",x=_l;break;case"focusout":w="blur",x=_l;break;case"beforeblur":case"afterblur":x=_l;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Zo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=of;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=kf;break;case Wu:case Qu:case Yu:x=sf;break;case Ku:x=Ef;break;case"scroll":x=rf;break;case"wheel":x=Cf;break;case"copy":case"cut":case"paste":x=ff;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=qo}var k=(t&4)!==0,F=!k&&e==="scroll",d=k?m!==null?m+"Capture":null:m;k=[];for(var s=f,p;s!==null;){p=s;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,d!==null&&(v=Rn(s,d),v!=null&&k.push($n(s,v,p)))),F)break;s=s.return}0<k.length&&(m=new x(m,w,null,n,g),h.push({event:m,listeners:k}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==li&&(w=n.relatedTarget||n.fromElement)&&(wt(w)||w[Ye]))break e;if((x||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,x?(w=n.relatedTarget||n.toElement,x=f,w=w?wt(w):null,w!==null&&(F=Lt(w),w!==F||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=f),x!==w)){if(k=Zo,v="onMouseLeave",d="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(k=qo,v="onPointerLeave",d="onPointerEnter",s="pointer"),F=x==null?m:Ut(x),p=w==null?m:Ut(w),m=new k(v,s+"leave",x,n,g),m.target=F,m.relatedTarget=p,v=null,wt(g)===f&&(k=new k(d,s+"enter",w,n,g),k.target=p,k.relatedTarget=F,v=k),F=v,x&&w)t:{for(k=x,d=w,s=0,p=k;p;p=It(p))s++;for(p=0,v=d;v;v=It(v))p++;for(;0<s-p;)k=It(k),s--;for(;0<p-s;)d=It(d),p--;for(;s--;){if(k===d||d!==null&&k===d.alternate)break t;k=It(k),d=It(d)}k=null}else k=null;x!==null&&sa(h,m,x,k,!1),w!==null&&F!==null&&sa(h,F,w,k,!0)}}e:{if(m=f?Ut(f):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var E=If;else if(ta(m))if(Au)E=Mf;else{E=Df;var C=Rf}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=Of);if(E&&(E=E(e,f))){Uu(h,E,n,g);break e}C&&C(e,m,f),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&bl(m,"number",m.value)}switch(C=f?Ut(f):window,e){case"focusin":(ta(C)||C.contentEditable==="true")&&(Mt=C,fi=f,jn=null);break;case"focusout":jn=fi=Mt=null;break;case"mousedown":di=!0;break;case"contextmenu":case"mouseup":case"dragend":di=!1,oa(h,n,g);break;case"selectionchange":if(Af)break;case"keydown":case"keyup":oa(h,n,g)}var j;if(no)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ot?Mu(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Ou&&n.locale!=="ko"&&(Ot||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ot&&(j=Du()):(tt=g,bi="value"in tt?tt.value:tt.textContent,Ot=!0)),C=Fr(f,_),0<C.length&&(_=new Jo(_,e,null,n,g),h.push({event:_,listeners:C}),j?_.data=j:(j=Fu(n),j!==null&&(_.data=j)))),(j=_f?zf(e,n):Pf(e,n))&&(f=Fr(f,"onBeforeInput"),0<f.length&&(g=new Jo("onBeforeInput","beforeinput",null,n,g),h.push({event:g,listeners:f}),g.data=j))}Xu(h,t)})}function $n(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Rn(e,n),i!=null&&r.unshift($n(e,i,l)),i=Rn(e,t),i!=null&&r.push($n(e,i,l))),e=e.return}return r}function It(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function sa(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,f=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&f!==null&&(a=f,l?(u=Rn(n,i),u!=null&&o.unshift($n(n,u,a))):l||(u=Rn(n,i),u!=null&&o.push($n(n,u,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Hf=/\r\n?/g,Wf=/\u0000|\uFFFD/g;function ca(e){return(typeof e=="string"?e:""+e).replace(Hf,`
`).replace(Wf,"")}function fr(e,t,n){if(t=ca(t),ca(e)!==t&&n)throw Error(y(425))}function Ur(){}var pi=null,mi=null;function hi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gi=typeof setTimeout=="function"?setTimeout:void 0,Qf=typeof clearTimeout=="function"?clearTimeout:void 0,fa=typeof Promise=="function"?Promise:void 0,Yf=typeof queueMicrotask=="function"?queueMicrotask:typeof fa<"u"?function(e){return fa.resolve(null).then(e).catch(Kf)}:gi;function Kf(e){setTimeout(function(){throw e})}function Ol(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Mn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Mn(t)}function ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function da(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var an=Math.random().toString(36).slice(2),Me="__reactFiber$"+an,Bn="__reactProps$"+an,Ye="__reactContainer$"+an,vi="__reactEvents$"+an,Gf="__reactListeners$"+an,Xf="__reactHandles$"+an;function wt(e){var t=e[Me];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ye]||n[Me]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=da(e);e!==null;){if(n=e[Me])return n;e=da(e)}return t}e=n,n=e.parentNode}return null}function Jn(e){return e=e[Me]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ut(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function il(e){return e[Bn]||null}var yi=[],At=-1;function mt(e){return{current:e}}function M(e){0>At||(e.current=yi[At],yi[At]=null,At--)}function D(e,t){At++,yi[At]=e.current,e.current=t}var dt={},le=mt(dt),fe=mt(!1),Ct=dt;function qt(e,t){var n=e.type.contextTypes;if(!n)return dt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function de(e){return e=e.childContextTypes,e!=null}function Ar(){M(fe),M(le)}function pa(e,t,n){if(le.current!==dt)throw Error(y(168));D(le,t),D(fe,n)}function Ju(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(y(108,Ic(e)||"Unknown",l));return B({},n,r)}function $r(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dt,Ct=le.current,D(le,e),D(fe,fe.current),!0}function ma(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=Ju(e,t,Ct),r.__reactInternalMemoizedMergedChildContext=e,M(fe),M(le),D(le,e)):M(fe),D(fe,n)}var Be=null,ol=!1,Ml=!1;function qu(e){Be===null?Be=[e]:Be.push(e)}function Zf(e){ol=!0,qu(e)}function ht(){if(!Ml&&Be!==null){Ml=!0;var e=0,t=R;try{var n=Be;for(R=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Be=null,ol=!1}catch(l){throw Be!==null&&(Be=Be.slice(e+1)),Eu(Xi,ht),l}finally{R=t,Ml=!1}}return null}var $t=[],Bt=0,Br=null,Vr=0,we=[],ke=0,jt=null,Ve=1,He="";function yt(e,t){$t[Bt++]=Vr,$t[Bt++]=Br,Br=e,Vr=t}function bu(e,t,n){we[ke++]=Ve,we[ke++]=He,we[ke++]=jt,jt=e;var r=Ve;e=He;var l=32-Le(r)-1;r&=~(1<<l),n+=1;var i=32-Le(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Ve=1<<32-Le(t)+l|n<<l|r,He=i+e}else Ve=1<<i|n<<l|r,He=e}function lo(e){e.return!==null&&(yt(e,1),bu(e,1,0))}function io(e){for(;e===Br;)Br=$t[--Bt],$t[Bt]=null,Vr=$t[--Bt],$t[Bt]=null;for(;e===jt;)jt=we[--ke],we[ke]=null,He=we[--ke],we[ke]=null,Ve=we[--ke],we[ke]=null}var ge=null,he=null,U=!1,Te=null;function es(e,t){var n=Se(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ha(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ge=e,he=ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ge=e,he=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=jt!==null?{id:Ve,overflow:He}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Se(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ge=e,he=null,!0):!1;default:return!1}}function xi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wi(e){if(U){var t=he;if(t){var n=t;if(!ha(e,t)){if(xi(e))throw Error(y(418));t=ot(n.nextSibling);var r=ge;t&&ha(e,t)?es(r,n):(e.flags=e.flags&-4097|2,U=!1,ge=e)}}else{if(xi(e))throw Error(y(418));e.flags=e.flags&-4097|2,U=!1,ge=e}}}function ga(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function dr(e){if(e!==ge)return!1;if(!U)return ga(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hi(e.type,e.memoizedProps)),t&&(t=he)){if(xi(e))throw ts(),Error(y(418));for(;t;)es(e,t),t=ot(t.nextSibling)}if(ga(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){he=ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}he=null}}else he=ge?ot(e.stateNode.nextSibling):null;return!0}function ts(){for(var e=he;e;)e=ot(e.nextSibling)}function bt(){he=ge=null,U=!1}function oo(e){Te===null?Te=[e]:Te.push(e)}var Jf=Xe.ReactCurrentBatchConfig;function hn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var a=l.refs;o===null?delete a[i]:a[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function pr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function va(e){var t=e._init;return t(e._payload)}function ns(e){function t(d,s){if(e){var p=d.deletions;p===null?(d.deletions=[s],d.flags|=16):p.push(s)}}function n(d,s){if(!e)return null;for(;s!==null;)t(d,s),s=s.sibling;return null}function r(d,s){for(d=new Map;s!==null;)s.key!==null?d.set(s.key,s):d.set(s.index,s),s=s.sibling;return d}function l(d,s){return d=ct(d,s),d.index=0,d.sibling=null,d}function i(d,s,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<s?(d.flags|=2,s):p):(d.flags|=2,s)):(d.flags|=1048576,s)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,s,p,v){return s===null||s.tag!==6?(s=Hl(p,d.mode,v),s.return=d,s):(s=l(s,p),s.return=d,s)}function u(d,s,p,v){var E=p.type;return E===Dt?g(d,s,p.props.children,v,p.key):s!==null&&(s.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Je&&va(E)===s.type)?(v=l(s,p.props),v.ref=hn(d,s,p),v.return=d,v):(v=Pr(p.type,p.key,p.props,null,d.mode,v),v.ref=hn(d,s,p),v.return=d,v)}function f(d,s,p,v){return s===null||s.tag!==4||s.stateNode.containerInfo!==p.containerInfo||s.stateNode.implementation!==p.implementation?(s=Wl(p,d.mode,v),s.return=d,s):(s=l(s,p.children||[]),s.return=d,s)}function g(d,s,p,v,E){return s===null||s.tag!==7?(s=Nt(p,d.mode,v,E),s.return=d,s):(s=l(s,p),s.return=d,s)}function h(d,s,p){if(typeof s=="string"&&s!==""||typeof s=="number")return s=Hl(""+s,d.mode,p),s.return=d,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case nr:return p=Pr(s.type,s.key,s.props,null,d.mode,p),p.ref=hn(d,null,s),p.return=d,p;case Rt:return s=Wl(s,d.mode,p),s.return=d,s;case Je:var v=s._init;return h(d,v(s._payload),p)}if(xn(s)||cn(s))return s=Nt(s,d.mode,p,null),s.return=d,s;pr(d,s)}return null}function m(d,s,p,v){var E=s!==null?s.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:a(d,s,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case nr:return p.key===E?u(d,s,p,v):null;case Rt:return p.key===E?f(d,s,p,v):null;case Je:return E=p._init,m(d,s,E(p._payload),v)}if(xn(p)||cn(p))return E!==null?null:g(d,s,p,v,null);pr(d,p)}return null}function x(d,s,p,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(p)||null,a(s,d,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case nr:return d=d.get(v.key===null?p:v.key)||null,u(s,d,v,E);case Rt:return d=d.get(v.key===null?p:v.key)||null,f(s,d,v,E);case Je:var C=v._init;return x(d,s,p,C(v._payload),E)}if(xn(v)||cn(v))return d=d.get(p)||null,g(s,d,v,E,null);pr(s,v)}return null}function w(d,s,p,v){for(var E=null,C=null,j=s,_=s=0,H=null;j!==null&&_<p.length;_++){j.index>_?(H=j,j=null):H=j.sibling;var L=m(d,j,p[_],v);if(L===null){j===null&&(j=H);break}e&&j&&L.alternate===null&&t(d,j),s=i(L,s,_),C===null?E=L:C.sibling=L,C=L,j=H}if(_===p.length)return n(d,j),U&&yt(d,_),E;if(j===null){for(;_<p.length;_++)j=h(d,p[_],v),j!==null&&(s=i(j,s,_),C===null?E=j:C.sibling=j,C=j);return U&&yt(d,_),E}for(j=r(d,j);_<p.length;_++)H=x(j,d,_,p[_],v),H!==null&&(e&&H.alternate!==null&&j.delete(H.key===null?_:H.key),s=i(H,s,_),C===null?E=H:C.sibling=H,C=H);return e&&j.forEach(function(je){return t(d,je)}),U&&yt(d,_),E}function k(d,s,p,v){var E=cn(p);if(typeof E!="function")throw Error(y(150));if(p=E.call(p),p==null)throw Error(y(151));for(var C=E=null,j=s,_=s=0,H=null,L=p.next();j!==null&&!L.done;_++,L=p.next()){j.index>_?(H=j,j=null):H=j.sibling;var je=m(d,j,L.value,v);if(je===null){j===null&&(j=H);break}e&&j&&je.alternate===null&&t(d,j),s=i(je,s,_),C===null?E=je:C.sibling=je,C=je,j=H}if(L.done)return n(d,j),U&&yt(d,_),E;if(j===null){for(;!L.done;_++,L=p.next())L=h(d,L.value,v),L!==null&&(s=i(L,s,_),C===null?E=L:C.sibling=L,C=L);return U&&yt(d,_),E}for(j=r(d,j);!L.done;_++,L=p.next())L=x(j,d,_,L.value,v),L!==null&&(e&&L.alternate!==null&&j.delete(L.key===null?_:L.key),s=i(L,s,_),C===null?E=L:C.sibling=L,C=L);return e&&j.forEach(function(un){return t(d,un)}),U&&yt(d,_),E}function F(d,s,p,v){if(typeof p=="object"&&p!==null&&p.type===Dt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case nr:e:{for(var E=p.key,C=s;C!==null;){if(C.key===E){if(E=p.type,E===Dt){if(C.tag===7){n(d,C.sibling),s=l(C,p.props.children),s.return=d,d=s;break e}}else if(C.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Je&&va(E)===C.type){n(d,C.sibling),s=l(C,p.props),s.ref=hn(d,C,p),s.return=d,d=s;break e}n(d,C);break}else t(d,C);C=C.sibling}p.type===Dt?(s=Nt(p.props.children,d.mode,v,p.key),s.return=d,d=s):(v=Pr(p.type,p.key,p.props,null,d.mode,v),v.ref=hn(d,s,p),v.return=d,d=v)}return o(d);case Rt:e:{for(C=p.key;s!==null;){if(s.key===C)if(s.tag===4&&s.stateNode.containerInfo===p.containerInfo&&s.stateNode.implementation===p.implementation){n(d,s.sibling),s=l(s,p.children||[]),s.return=d,d=s;break e}else{n(d,s);break}else t(d,s);s=s.sibling}s=Wl(p,d.mode,v),s.return=d,d=s}return o(d);case Je:return C=p._init,F(d,s,C(p._payload),v)}if(xn(p))return w(d,s,p,v);if(cn(p))return k(d,s,p,v);pr(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,s!==null&&s.tag===6?(n(d,s.sibling),s=l(s,p),s.return=d,d=s):(n(d,s),s=Hl(p,d.mode,v),s.return=d,d=s),o(d)):n(d,s)}return F}var en=ns(!0),rs=ns(!1),Hr=mt(null),Wr=null,Vt=null,ao=null;function uo(){ao=Vt=Wr=null}function so(e){var t=Hr.current;M(Hr),e._currentValue=t}function ki(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xt(e,t){Wr=e,ao=Vt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ce=!0),e.firstContext=null)}function Ne(e){var t=e._currentValue;if(ao!==e)if(e={context:e,memoizedValue:t,next:null},Vt===null){if(Wr===null)throw Error(y(308));Vt=e,Wr.dependencies={lanes:0,firstContext:e}}else Vt=Vt.next=e;return t}var kt=null;function co(e){kt===null?kt=[e]:kt.push(e)}function ls(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,co(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ke(e,r)}function Ke(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qe=!1;function fo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function is(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function We(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function at(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ke(e,n)}return l=r.interleaved,l===null?(t.next=t,co(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ke(e,n)}function Er(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zi(e,n)}}function ya(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qr(e,t,n,r){var l=e.updateQueue;qe=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var u=a,f=u.next;u.next=null,o===null?i=f:o.next=f,o=u;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==o&&(a===null?g.firstBaseUpdate=f:a.next=f,g.lastBaseUpdate=u))}if(i!==null){var h=l.baseState;o=0,g=f=u=null,a=i;do{var m=a.lane,x=a.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,k=a;switch(m=t,x=n,k.tag){case 1:if(w=k.payload,typeof w=="function"){h=w.call(x,h,m);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,m=typeof w=="function"?w.call(x,h,m):w,m==null)break e;h=B({},h,m);break e;case 2:qe=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[a]:m.push(a))}else x={eventTime:x,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(f=g=x,u=h):g=g.next=x,o|=m;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;m=a,a=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(1);if(g===null&&(u=h),l.baseState=u,l.firstBaseUpdate=f,l.lastBaseUpdate=g,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);zt|=o,e.lanes=o,e.memoizedState=h}}function xa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(y(191,l));l.call(r)}}}var qn={},Ae=mt(qn),Vn=mt(qn),Hn=mt(qn);function St(e){if(e===qn)throw Error(y(174));return e}function po(e,t){switch(D(Hn,t),D(Vn,e),D(Ae,qn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ti(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ti(t,e)}M(Ae),D(Ae,t)}function tn(){M(Ae),M(Vn),M(Hn)}function os(e){St(Hn.current);var t=St(Ae.current),n=ti(t,e.type);t!==n&&(D(Vn,e),D(Ae,n))}function mo(e){Vn.current===e&&(M(Ae),M(Vn))}var A=mt(0);function Yr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fl=[];function ho(){for(var e=0;e<Fl.length;e++)Fl[e]._workInProgressVersionPrimary=null;Fl.length=0}var Nr=Xe.ReactCurrentDispatcher,Ul=Xe.ReactCurrentBatchConfig,_t=0,$=null,K=null,Z=null,Kr=!1,_n=!1,Wn=0,qf=0;function te(){throw Error(y(321))}function go(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Re(e[n],t[n]))return!1;return!0}function vo(e,t,n,r,l,i){if(_t=i,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Nr.current=e===null||e.memoizedState===null?nd:rd,e=n(r,l),_n){i=0;do{if(_n=!1,Wn=0,25<=i)throw Error(y(301));i+=1,Z=K=null,t.updateQueue=null,Nr.current=ld,e=n(r,l)}while(_n)}if(Nr.current=Gr,t=K!==null&&K.next!==null,_t=0,Z=K=$=null,Kr=!1,t)throw Error(y(300));return e}function yo(){var e=Wn!==0;return Wn=0,e}function Oe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?$.memoizedState=Z=e:Z=Z.next=e,Z}function Ce(){if(K===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=Z===null?$.memoizedState:Z.next;if(t!==null)Z=t,K=e;else{if(e===null)throw Error(y(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},Z===null?$.memoizedState=Z=e:Z=Z.next=e}return Z}function Qn(e,t){return typeof t=="function"?t(e):t}function Al(e){var t=Ce(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=K,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=o=null,u=null,f=i;do{var g=f.lane;if((_t&g)===g)u!==null&&(u=u.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var h={lane:g,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};u===null?(a=u=h,o=r):u=u.next=h,$.lanes|=g,zt|=g}f=f.next}while(f!==null&&f!==i);u===null?o=r:u.next=a,Re(r,t.memoizedState)||(ce=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,$.lanes|=i,zt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function $l(e){var t=Ce(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Re(i,t.memoizedState)||(ce=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function as(){}function us(e,t){var n=$,r=Ce(),l=t(),i=!Re(r.memoizedState,l);if(i&&(r.memoizedState=l,ce=!0),r=r.queue,xo(fs.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,Yn(9,cs.bind(null,n,r,l,t),void 0,null),J===null)throw Error(y(349));_t&30||ss(n,t,l)}return l}function ss(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cs(e,t,n,r){t.value=n,t.getSnapshot=r,ds(t)&&ps(e)}function fs(e,t,n){return n(function(){ds(t)&&ps(e)})}function ds(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Re(e,n)}catch{return!0}}function ps(e){var t=Ke(e,1);t!==null&&Ie(t,e,1,-1)}function wa(e){var t=Oe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:e},t.queue=e,e=e.dispatch=td.bind(null,$,e),[t.memoizedState,e]}function Yn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ms(){return Ce().memoizedState}function Cr(e,t,n,r){var l=Oe();$.flags|=e,l.memoizedState=Yn(1|t,n,void 0,r===void 0?null:r)}function al(e,t,n,r){var l=Ce();r=r===void 0?null:r;var i=void 0;if(K!==null){var o=K.memoizedState;if(i=o.destroy,r!==null&&go(r,o.deps)){l.memoizedState=Yn(t,n,i,r);return}}$.flags|=e,l.memoizedState=Yn(1|t,n,i,r)}function ka(e,t){return Cr(8390656,8,e,t)}function xo(e,t){return al(2048,8,e,t)}function hs(e,t){return al(4,2,e,t)}function gs(e,t){return al(4,4,e,t)}function vs(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ys(e,t,n){return n=n!=null?n.concat([e]):null,al(4,4,vs.bind(null,t,e),n)}function wo(){}function xs(e,t){var n=Ce();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&go(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ws(e,t){var n=Ce();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&go(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ks(e,t,n){return _t&21?(Re(n,t)||(n=ju(),$.lanes|=n,zt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ce=!0),e.memoizedState=n)}function bf(e,t){var n=R;R=n!==0&&4>n?n:4,e(!0);var r=Ul.transition;Ul.transition={};try{e(!1),t()}finally{R=n,Ul.transition=r}}function Ss(){return Ce().memoizedState}function ed(e,t,n){var r=st(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Es(e))Ns(t,n);else if(n=ls(e,t,n,r),n!==null){var l=oe();Ie(n,e,r,l),Cs(n,t,r)}}function td(e,t,n){var r=st(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Es(e))Ns(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,a=i(o,n);if(l.hasEagerState=!0,l.eagerState=a,Re(a,o)){var u=t.interleaved;u===null?(l.next=l,co(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=ls(e,t,l,r),n!==null&&(l=oe(),Ie(n,e,r,l),Cs(n,t,r))}}function Es(e){var t=e.alternate;return e===$||t!==null&&t===$}function Ns(e,t){_n=Kr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Cs(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zi(e,n)}}var Gr={readContext:Ne,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},nd={readContext:Ne,useCallback:function(e,t){return Oe().memoizedState=[e,t===void 0?null:t],e},useContext:Ne,useEffect:ka,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Cr(4194308,4,vs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Cr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Cr(4,2,e,t)},useMemo:function(e,t){var n=Oe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Oe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ed.bind(null,$,e),[r.memoizedState,e]},useRef:function(e){var t=Oe();return e={current:e},t.memoizedState=e},useState:wa,useDebugValue:wo,useDeferredValue:function(e){return Oe().memoizedState=e},useTransition:function(){var e=wa(!1),t=e[0];return e=bf.bind(null,e[1]),Oe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=$,l=Oe();if(U){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),J===null)throw Error(y(349));_t&30||ss(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,ka(fs.bind(null,r,i,e),[e]),r.flags|=2048,Yn(9,cs.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Oe(),t=J.identifierPrefix;if(U){var n=He,r=Ve;n=(r&~(1<<32-Le(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Wn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},rd={readContext:Ne,useCallback:xs,useContext:Ne,useEffect:xo,useImperativeHandle:ys,useInsertionEffect:hs,useLayoutEffect:gs,useMemo:ws,useReducer:Al,useRef:ms,useState:function(){return Al(Qn)},useDebugValue:wo,useDeferredValue:function(e){var t=Ce();return ks(t,K.memoizedState,e)},useTransition:function(){var e=Al(Qn)[0],t=Ce().memoizedState;return[e,t]},useMutableSource:as,useSyncExternalStore:us,useId:Ss,unstable_isNewReconciler:!1},ld={readContext:Ne,useCallback:xs,useContext:Ne,useEffect:xo,useImperativeHandle:ys,useInsertionEffect:hs,useLayoutEffect:gs,useMemo:ws,useReducer:$l,useRef:ms,useState:function(){return $l(Qn)},useDebugValue:wo,useDeferredValue:function(e){var t=Ce();return K===null?t.memoizedState=e:ks(t,K.memoizedState,e)},useTransition:function(){var e=$l(Qn)[0],t=Ce().memoizedState;return[e,t]},useMutableSource:as,useSyncExternalStore:us,useId:Ss,unstable_isNewReconciler:!1};function ze(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Si(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ul={isMounted:function(e){return(e=e._reactInternals)?Lt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=oe(),l=st(e),i=We(r,l);i.payload=t,n!=null&&(i.callback=n),t=at(e,i,l),t!==null&&(Ie(t,e,l,r),Er(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=oe(),l=st(e),i=We(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=at(e,i,l),t!==null&&(Ie(t,e,l,r),Er(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=oe(),r=st(e),l=We(n,r);l.tag=2,t!=null&&(l.callback=t),t=at(e,l,r),t!==null&&(Ie(t,e,r,n),Er(t,e,r))}};function Sa(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Un(n,r)||!Un(l,i):!0}function js(e,t,n){var r=!1,l=dt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ne(i):(l=de(t)?Ct:le.current,r=t.contextTypes,i=(r=r!=null)?qt(e,l):dt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ul,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ea(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ul.enqueueReplaceState(t,t.state,null)}function Ei(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},fo(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ne(i):(i=de(t)?Ct:le.current,l.context=qt(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Si(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&ul.enqueueReplaceState(l,l.state,null),Qr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function nn(e,t){try{var n="",r=t;do n+=Lc(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Bl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ni(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var id=typeof WeakMap=="function"?WeakMap:Map;function _s(e,t,n){n=We(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Zr||(Zr=!0,Di=r),Ni(e,t)},n}function zs(e,t,n){n=We(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Ni(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ni(e,t),typeof r!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Na(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new id;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=xd.bind(null,e,t,n),t.then(e,e))}function Ca(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ja(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=We(-1,1),t.tag=2,at(n,t,1))),n.lanes|=1),e)}var od=Xe.ReactCurrentOwner,ce=!1;function ie(e,t,n,r){t.child=e===null?rs(t,null,n,r):en(t,e.child,n,r)}function _a(e,t,n,r,l){n=n.render;var i=t.ref;return Xt(t,l),r=vo(e,t,n,r,i,l),n=yo(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ge(e,t,l)):(U&&n&&lo(t),t.flags|=1,ie(e,t,r,l),t.child)}function za(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!zo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Ps(e,t,i,r,l)):(e=Pr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Un,n(o,r)&&e.ref===t.ref)return Ge(e,t,l)}return t.flags|=1,e=ct(i,r),e.ref=t.ref,e.return=t,t.child=e}function Ps(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Un(i,r)&&e.ref===t.ref)if(ce=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(ce=!0);else return t.lanes=e.lanes,Ge(e,t,l)}return Ci(e,t,n,r,l)}function Ts(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(Wt,me),me|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(Wt,me),me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,D(Wt,me),me|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,D(Wt,me),me|=r;return ie(e,t,l,n),t.child}function Ls(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ci(e,t,n,r,l){var i=de(n)?Ct:le.current;return i=qt(t,i),Xt(t,l),n=vo(e,t,n,r,i,l),r=yo(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ge(e,t,l)):(U&&r&&lo(t),t.flags|=1,ie(e,t,n,l),t.child)}function Pa(e,t,n,r,l){if(de(n)){var i=!0;$r(t)}else i=!1;if(Xt(t,l),t.stateNode===null)jr(e,t),js(t,n,r),Ei(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var u=o.context,f=n.contextType;typeof f=="object"&&f!==null?f=Ne(f):(f=de(n)?Ct:le.current,f=qt(t,f));var g=n.getDerivedStateFromProps,h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==f)&&Ea(t,o,r,f),qe=!1;var m=t.memoizedState;o.state=m,Qr(t,r,o,l),u=t.memoizedState,a!==r||m!==u||fe.current||qe?(typeof g=="function"&&(Si(t,n,g,r),u=t.memoizedState),(a=qe||Sa(t,n,a,r,m,u,f))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=f,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,is(e,t),a=t.memoizedProps,f=t.type===t.elementType?a:ze(t.type,a),o.props=f,h=t.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ne(u):(u=de(n)?Ct:le.current,u=qt(t,u));var x=n.getDerivedStateFromProps;(g=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||m!==u)&&Ea(t,o,r,u),qe=!1,m=t.memoizedState,o.state=m,Qr(t,r,o,l);var w=t.memoizedState;a!==h||m!==w||fe.current||qe?(typeof x=="function"&&(Si(t,n,x,r),w=t.memoizedState),(f=qe||Sa(t,n,f,r,m,w,u)||!1)?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=u,r=f):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return ji(e,t,n,r,i,l)}function ji(e,t,n,r,l,i){Ls(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&ma(t,n,!1),Ge(e,t,i);r=t.stateNode,od.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=en(t,e.child,null,i),t.child=en(t,null,a,i)):ie(e,t,a,i),t.memoizedState=r.state,l&&ma(t,n,!0),t.child}function Is(e){var t=e.stateNode;t.pendingContext?pa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&pa(e,t.context,!1),po(e,t.containerInfo)}function Ta(e,t,n,r,l){return bt(),oo(l),t.flags|=256,ie(e,t,n,r),t.child}var _i={dehydrated:null,treeContext:null,retryLane:0};function zi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Rs(e,t,n){var r=t.pendingProps,l=A.current,i=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),D(A,l&1),e===null)return wi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=fl(o,r,0,null),e=Nt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=zi(n),t.memoizedState=_i,e):ko(t,o));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return ad(e,t,o,r,a,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,a=l.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=ct(l,u),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=ct(a,i):(i=Nt(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?zi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=_i,r}return i=e.child,e=i.sibling,r=ct(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ko(e,t){return t=fl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mr(e,t,n,r){return r!==null&&oo(r),en(t,e.child,null,n),e=ko(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ad(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Bl(Error(y(422))),mr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=fl({mode:"visible",children:r.children},l,0,null),i=Nt(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&en(t,e.child,null,o),t.child.memoizedState=zi(o),t.memoizedState=_i,i);if(!(t.mode&1))return mr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(y(419)),r=Bl(i,r,void 0),mr(e,t,o,r)}if(a=(o&e.childLanes)!==0,ce||a){if(r=J,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ke(e,l),Ie(r,e,l,-1))}return _o(),r=Bl(Error(y(421))),mr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=wd.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,he=ot(l.nextSibling),ge=t,U=!0,Te=null,e!==null&&(we[ke++]=Ve,we[ke++]=He,we[ke++]=jt,Ve=e.id,He=e.overflow,jt=t),t=ko(t,r.children),t.flags|=4096,t)}function La(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ki(e.return,t,n)}function Vl(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Ds(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ie(e,t,r.children,n),r=A.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&La(e,n,t);else if(e.tag===19)La(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(A,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Yr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Vl(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Yr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Vl(t,!0,n,null,i);break;case"together":Vl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function jr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ge(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=ct(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ct(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ud(e,t,n){switch(t.tag){case 3:Is(t),bt();break;case 5:os(t);break;case 1:de(t.type)&&$r(t);break;case 4:po(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;D(Hr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(D(A,A.current&1),t.flags|=128,null):n&t.child.childLanes?Rs(e,t,n):(D(A,A.current&1),e=Ge(e,t,n),e!==null?e.sibling:null);D(A,A.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ds(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),D(A,A.current),r)break;return null;case 22:case 23:return t.lanes=0,Ts(e,t,n)}return Ge(e,t,n)}var Os,Pi,Ms,Fs;Os=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pi=function(){};Ms=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,St(Ae.current);var i=null;switch(n){case"input":l=Jl(e,l),r=Jl(e,r),i=[];break;case"select":l=B({},l,{value:void 0}),r=B({},r,{value:void 0}),i=[];break;case"textarea":l=ei(e,l),r=ei(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ur)}ni(n,r);var o;n=null;for(f in l)if(!r.hasOwnProperty(f)&&l.hasOwnProperty(f)&&l[f]!=null)if(f==="style"){var a=l[f];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Ln.hasOwnProperty(f)?i||(i=[]):(i=i||[]).push(f,null));for(f in r){var u=r[f];if(a=l!=null?l[f]:void 0,r.hasOwnProperty(f)&&u!==a&&(u!=null||a!=null))if(f==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(f,n)),n=u;else f==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(f,u)):f==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(f,""+u):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Ln.hasOwnProperty(f)?(u!=null&&f==="onScroll"&&O("scroll",e),i||a===u||(i=[])):(i=i||[]).push(f,u))}n&&(i=i||[]).push("style",n);var f=i;(t.updateQueue=f)&&(t.flags|=4)}};Fs=function(e,t,n,r){n!==r&&(t.flags|=4)};function gn(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function sd(e,t,n){var r=t.pendingProps;switch(io(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(t),null;case 1:return de(t.type)&&Ar(),ne(t),null;case 3:return r=t.stateNode,tn(),M(fe),M(le),ho(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(dr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Te!==null&&(Fi(Te),Te=null))),Pi(e,t),ne(t),null;case 5:mo(t);var l=St(Hn.current);if(n=t.type,e!==null&&t.stateNode!=null)Ms(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return ne(t),null}if(e=St(Ae.current),dr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Me]=t,r[Bn]=i,e=(t.mode&1)!==0,n){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(l=0;l<kn.length;l++)O(kn[l],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":$o(r,i),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},O("invalid",r);break;case"textarea":Vo(r,i),O("invalid",r)}ni(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&fr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&fr(r.textContent,a,e),l=["children",""+a]):Ln.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&O("scroll",r)}switch(n){case"input":rr(r),Bo(r,i,!0);break;case"textarea":rr(r),Ho(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ur)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Me]=t,e[Bn]=r,Os(e,t,!1,!1),t.stateNode=e;e:{switch(o=ri(n,r),n){case"dialog":O("cancel",e),O("close",e),l=r;break;case"iframe":case"object":case"embed":O("load",e),l=r;break;case"video":case"audio":for(l=0;l<kn.length;l++)O(kn[l],e);l=r;break;case"source":O("error",e),l=r;break;case"img":case"image":case"link":O("error",e),O("load",e),l=r;break;case"details":O("toggle",e),l=r;break;case"input":$o(e,r),l=Jl(e,r),O("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=B({},r,{value:void 0}),O("invalid",e);break;case"textarea":Vo(e,r),l=ei(e,r),O("invalid",e);break;default:l=r}ni(n,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?mu(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&du(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&In(e,u):typeof u=="number"&&In(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ln.hasOwnProperty(i)?u!=null&&i==="onScroll"&&O("scroll",e):u!=null&&Wi(e,i,u,o))}switch(n){case"input":rr(e),Bo(e,r,!1);break;case"textarea":rr(e),Ho(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ft(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Qt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Qt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ur)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ne(t),null;case 6:if(e&&t.stateNode!=null)Fs(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=St(Hn.current),St(Ae.current),dr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Me]=t,(i=r.nodeValue!==n)&&(e=ge,e!==null))switch(e.tag){case 3:fr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Me]=t,t.stateNode=r}return ne(t),null;case 13:if(M(A),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&he!==null&&t.mode&1&&!(t.flags&128))ts(),bt(),t.flags|=98560,i=!1;else if(i=dr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(y(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(y(317));i[Me]=t}else bt(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ne(t),i=!1}else Te!==null&&(Fi(Te),Te=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||A.current&1?G===0&&(G=3):_o())),t.updateQueue!==null&&(t.flags|=4),ne(t),null);case 4:return tn(),Pi(e,t),e===null&&An(t.stateNode.containerInfo),ne(t),null;case 10:return so(t.type._context),ne(t),null;case 17:return de(t.type)&&Ar(),ne(t),null;case 19:if(M(A),i=t.memoizedState,i===null)return ne(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)gn(i,!1);else{if(G!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Yr(e),o!==null){for(t.flags|=128,gn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D(A,A.current&1|2),t.child}e=e.sibling}i.tail!==null&&Q()>rn&&(t.flags|=128,r=!0,gn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Yr(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),gn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!U)return ne(t),null}else 2*Q()-i.renderingStartTime>rn&&n!==1073741824&&(t.flags|=128,r=!0,gn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Q(),t.sibling=null,n=A.current,D(A,r?n&1|2:n&1),t):(ne(t),null);case 22:case 23:return jo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?me&1073741824&&(ne(t),t.subtreeFlags&6&&(t.flags|=8192)):ne(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function cd(e,t){switch(io(t),t.tag){case 1:return de(t.type)&&Ar(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tn(),M(fe),M(le),ho(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return mo(t),null;case 13:if(M(A),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));bt()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return M(A),null;case 4:return tn(),null;case 10:return so(t.type._context),null;case 22:case 23:return jo(),null;case 24:return null;default:return null}}var hr=!1,re=!1,fd=typeof WeakSet=="function"?WeakSet:Set,S=null;function Ht(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function Ti(e,t,n){try{n()}catch(r){V(e,t,r)}}var Ia=!1;function dd(e,t){if(pi=Or,e=Vu(),ro(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,f=0,g=0,h=e,m=null;t:for(;;){for(var x;h!==n||l!==0&&h.nodeType!==3||(a=o+l),h!==i||r!==0&&h.nodeType!==3||(u=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(x=h.firstChild)!==null;)m=h,h=x;for(;;){if(h===e)break t;if(m===n&&++f===l&&(a=o),m===i&&++g===r&&(u=o),(x=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=x}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(mi={focusedElem:e,selectionRange:n},Or=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,F=w.memoizedState,d=t.stateNode,s=d.getSnapshotBeforeUpdate(t.elementType===t.type?k:ze(t.type,k),F);d.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(v){V(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return w=Ia,Ia=!1,w}function zn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Ti(t,n,i)}l=l.next}while(l!==r)}}function sl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Li(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Us(e){var t=e.alternate;t!==null&&(e.alternate=null,Us(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Me],delete t[Bn],delete t[vi],delete t[Gf],delete t[Xf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function As(e){return e.tag===5||e.tag===3||e.tag===4}function Ra(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||As(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ii(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ur));else if(r!==4&&(e=e.child,e!==null))for(Ii(e,t,n),e=e.sibling;e!==null;)Ii(e,t,n),e=e.sibling}function Ri(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ri(e,t,n),e=e.sibling;e!==null;)Ri(e,t,n),e=e.sibling}var q=null,Pe=!1;function Ze(e,t,n){for(n=n.child;n!==null;)$s(e,t,n),n=n.sibling}function $s(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(tl,n)}catch{}switch(n.tag){case 5:re||Ht(n,t);case 6:var r=q,l=Pe;q=null,Ze(e,t,n),q=r,Pe=l,q!==null&&(Pe?(e=q,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):q.removeChild(n.stateNode));break;case 18:q!==null&&(Pe?(e=q,n=n.stateNode,e.nodeType===8?Ol(e.parentNode,n):e.nodeType===1&&Ol(e,n),Mn(e)):Ol(q,n.stateNode));break;case 4:r=q,l=Pe,q=n.stateNode.containerInfo,Pe=!0,Ze(e,t,n),q=r,Pe=l;break;case 0:case 11:case 14:case 15:if(!re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Ti(n,t,o),l=l.next}while(l!==r)}Ze(e,t,n);break;case 1:if(!re&&(Ht(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){V(n,t,a)}Ze(e,t,n);break;case 21:Ze(e,t,n);break;case 22:n.mode&1?(re=(r=re)||n.memoizedState!==null,Ze(e,t,n),re=r):Ze(e,t,n);break;default:Ze(e,t,n)}}function Da(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new fd),t.forEach(function(r){var l=kd.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function _e(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:q=a.stateNode,Pe=!1;break e;case 3:q=a.stateNode.containerInfo,Pe=!0;break e;case 4:q=a.stateNode.containerInfo,Pe=!0;break e}a=a.return}if(q===null)throw Error(y(160));$s(i,o,l),q=null,Pe=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(f){V(l,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bs(t,e),t=t.sibling}function Bs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_e(t,e),De(e),r&4){try{zn(3,e,e.return),sl(3,e)}catch(k){V(e,e.return,k)}try{zn(5,e,e.return)}catch(k){V(e,e.return,k)}}break;case 1:_e(t,e),De(e),r&512&&n!==null&&Ht(n,n.return);break;case 5:if(_e(t,e),De(e),r&512&&n!==null&&Ht(n,n.return),e.flags&32){var l=e.stateNode;try{In(l,"")}catch(k){V(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&su(l,i),ri(a,o);var f=ri(a,i);for(o=0;o<u.length;o+=2){var g=u[o],h=u[o+1];g==="style"?mu(l,h):g==="dangerouslySetInnerHTML"?du(l,h):g==="children"?In(l,h):Wi(l,g,h,f)}switch(a){case"input":ql(l,i);break;case"textarea":cu(l,i);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Qt(l,!!i.multiple,x,!1):m!==!!i.multiple&&(i.defaultValue!=null?Qt(l,!!i.multiple,i.defaultValue,!0):Qt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Bn]=i}catch(k){V(e,e.return,k)}}break;case 6:if(_e(t,e),De(e),r&4){if(e.stateNode===null)throw Error(y(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(k){V(e,e.return,k)}}break;case 3:if(_e(t,e),De(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Mn(t.containerInfo)}catch(k){V(e,e.return,k)}break;case 4:_e(t,e),De(e);break;case 13:_e(t,e),De(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(No=Q())),r&4&&Da(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(re=(f=re)||g,_e(t,e),re=f):_e(t,e),De(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!g&&e.mode&1)for(S=e,g=e.child;g!==null;){for(h=S=g;S!==null;){switch(m=S,x=m.child,m.tag){case 0:case 11:case 14:case 15:zn(4,m,m.return);break;case 1:Ht(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(k){V(r,n,k)}}break;case 5:Ht(m,m.return);break;case 22:if(m.memoizedState!==null){Ma(h);continue}}x!==null?(x.return=m,S=x):Ma(h)}g=g.sibling}e:for(g=null,h=e;;){if(h.tag===5){if(g===null){g=h;try{l=h.stateNode,f?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,u=h.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=pu("display",o))}catch(k){V(e,e.return,k)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=f?"":h.memoizedProps}catch(k){V(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:_e(t,e),De(e),r&4&&Da(e);break;case 21:break;default:_e(t,e),De(e)}}function De(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(As(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(In(l,""),r.flags&=-33);var i=Ra(e);Ri(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ra(e);Ii(e,a,o);break;default:throw Error(y(161))}}catch(u){V(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pd(e,t,n){S=e,Vs(e)}function Vs(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var l=S,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||hr;if(!o){var a=l.alternate,u=a!==null&&a.memoizedState!==null||re;a=hr;var f=re;if(hr=o,(re=u)&&!f)for(S=l;S!==null;)o=S,u=o.child,o.tag===22&&o.memoizedState!==null?Fa(l):u!==null?(u.return=o,S=u):Fa(l);for(;i!==null;)S=i,Vs(i),i=i.sibling;S=l,hr=a,re=f}Oa(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,S=i):Oa(e)}}function Oa(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:re||sl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!re)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:ze(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&xa(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}xa(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var g=f.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&Mn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}re||t.flags&512&&Li(t)}catch(m){V(t,t.return,m)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function Ma(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function Fa(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{sl(4,t)}catch(u){V(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){V(t,l,u)}}var i=t.return;try{Li(t)}catch(u){V(t,i,u)}break;case 5:var o=t.return;try{Li(t)}catch(u){V(t,o,u)}}}catch(u){V(t,t.return,u)}if(t===e){S=null;break}var a=t.sibling;if(a!==null){a.return=t.return,S=a;break}S=t.return}}var md=Math.ceil,Xr=Xe.ReactCurrentDispatcher,So=Xe.ReactCurrentOwner,Ee=Xe.ReactCurrentBatchConfig,I=0,J=null,Y=null,b=0,me=0,Wt=mt(0),G=0,Kn=null,zt=0,cl=0,Eo=0,Pn=null,se=null,No=0,rn=1/0,$e=null,Zr=!1,Di=null,ut=null,gr=!1,nt=null,Jr=0,Tn=0,Oi=null,_r=-1,zr=0;function oe(){return I&6?Q():_r!==-1?_r:_r=Q()}function st(e){return e.mode&1?I&2&&b!==0?b&-b:Jf.transition!==null?(zr===0&&(zr=ju()),zr):(e=R,e!==0||(e=window.event,e=e===void 0?16:Ru(e.type)),e):1}function Ie(e,t,n,r){if(50<Tn)throw Tn=0,Oi=null,Error(y(185));Xn(e,n,r),(!(I&2)||e!==J)&&(e===J&&(!(I&2)&&(cl|=n),G===4&&et(e,b)),pe(e,r),n===1&&I===0&&!(t.mode&1)&&(rn=Q()+500,ol&&ht()))}function pe(e,t){var n=e.callbackNode;Zc(e,t);var r=Dr(e,e===J?b:0);if(r===0)n!==null&&Yo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Yo(n),t===1)e.tag===0?Zf(Ua.bind(null,e)):qu(Ua.bind(null,e)),Yf(function(){!(I&6)&&ht()}),n=null;else{switch(_u(r)){case 1:n=Xi;break;case 4:n=Nu;break;case 16:n=Rr;break;case 536870912:n=Cu;break;default:n=Rr}n=Zs(n,Hs.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Hs(e,t){if(_r=-1,zr=0,I&6)throw Error(y(327));var n=e.callbackNode;if(Zt()&&e.callbackNode!==n)return null;var r=Dr(e,e===J?b:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=qr(e,r);else{t=r;var l=I;I|=2;var i=Qs();(J!==e||b!==t)&&($e=null,rn=Q()+500,Et(e,t));do try{vd();break}catch(a){Ws(e,a)}while(1);uo(),Xr.current=i,I=l,Y!==null?t=0:(J=null,b=0,t=G)}if(t!==0){if(t===2&&(l=ui(e),l!==0&&(r=l,t=Mi(e,l))),t===1)throw n=Kn,Et(e,0),et(e,r),pe(e,Q()),n;if(t===6)et(e,r);else{if(l=e.current.alternate,!(r&30)&&!hd(l)&&(t=qr(e,r),t===2&&(i=ui(e),i!==0&&(r=i,t=Mi(e,i))),t===1))throw n=Kn,Et(e,0),et(e,r),pe(e,Q()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:xt(e,se,$e);break;case 3:if(et(e,r),(r&130023424)===r&&(t=No+500-Q(),10<t)){if(Dr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){oe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=gi(xt.bind(null,e,se,$e),t);break}xt(e,se,$e);break;case 4:if(et(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Le(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*md(r/1960))-r,10<r){e.timeoutHandle=gi(xt.bind(null,e,se,$e),r);break}xt(e,se,$e);break;case 5:xt(e,se,$e);break;default:throw Error(y(329))}}}return pe(e,Q()),e.callbackNode===n?Hs.bind(null,e):null}function Mi(e,t){var n=Pn;return e.current.memoizedState.isDehydrated&&(Et(e,t).flags|=256),e=qr(e,t),e!==2&&(t=se,se=n,t!==null&&Fi(t)),e}function Fi(e){se===null?se=e:se.push.apply(se,e)}function hd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Re(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function et(e,t){for(t&=~Eo,t&=~cl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Le(t),r=1<<n;e[n]=-1,t&=~r}}function Ua(e){if(I&6)throw Error(y(327));Zt();var t=Dr(e,0);if(!(t&1))return pe(e,Q()),null;var n=qr(e,t);if(e.tag!==0&&n===2){var r=ui(e);r!==0&&(t=r,n=Mi(e,r))}if(n===1)throw n=Kn,Et(e,0),et(e,t),pe(e,Q()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xt(e,se,$e),pe(e,Q()),null}function Co(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(rn=Q()+500,ol&&ht())}}function Pt(e){nt!==null&&nt.tag===0&&!(I&6)&&Zt();var t=I;I|=1;var n=Ee.transition,r=R;try{if(Ee.transition=null,R=1,e)return e()}finally{R=r,Ee.transition=n,I=t,!(I&6)&&ht()}}function jo(){me=Wt.current,M(Wt)}function Et(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Qf(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(io(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ar();break;case 3:tn(),M(fe),M(le),ho();break;case 5:mo(r);break;case 4:tn();break;case 13:M(A);break;case 19:M(A);break;case 10:so(r.type._context);break;case 22:case 23:jo()}n=n.return}if(J=e,Y=e=ct(e.current,null),b=me=t,G=0,Kn=null,Eo=cl=zt=0,se=Pn=null,kt!==null){for(t=0;t<kt.length;t++)if(n=kt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}kt=null}return e}function Ws(e,t){do{var n=Y;try{if(uo(),Nr.current=Gr,Kr){for(var r=$.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Kr=!1}if(_t=0,Z=K=$=null,_n=!1,Wn=0,So.current=null,n===null||n.return===null){G=1,Kn=t,Y=null;break}e:{var i=e,o=n.return,a=n,u=t;if(t=b,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var f=u,g=a,h=g.tag;if(!(g.mode&1)&&(h===0||h===11||h===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var x=Ca(o);if(x!==null){x.flags&=-257,ja(x,o,a,i,t),x.mode&1&&Na(i,f,t),t=x,u=f;var w=t.updateQueue;if(w===null){var k=new Set;k.add(u),t.updateQueue=k}else w.add(u);break e}else{if(!(t&1)){Na(i,f,t),_o();break e}u=Error(y(426))}}else if(U&&a.mode&1){var F=Ca(o);if(F!==null){!(F.flags&65536)&&(F.flags|=256),ja(F,o,a,i,t),oo(nn(u,a));break e}}i=u=nn(u,a),G!==4&&(G=2),Pn===null?Pn=[i]:Pn.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=_s(i,u,t);ya(i,d);break e;case 1:a=u;var s=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof s.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ut===null||!ut.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=zs(i,a,t);ya(i,v);break e}}i=i.return}while(i!==null)}Ks(n)}catch(E){t=E,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(1)}function Qs(){var e=Xr.current;return Xr.current=Gr,e===null?Gr:e}function _o(){(G===0||G===3||G===2)&&(G=4),J===null||!(zt&268435455)&&!(cl&268435455)||et(J,b)}function qr(e,t){var n=I;I|=2;var r=Qs();(J!==e||b!==t)&&($e=null,Et(e,t));do try{gd();break}catch(l){Ws(e,l)}while(1);if(uo(),I=n,Xr.current=r,Y!==null)throw Error(y(261));return J=null,b=0,G}function gd(){for(;Y!==null;)Ys(Y)}function vd(){for(;Y!==null&&!Bc();)Ys(Y)}function Ys(e){var t=Xs(e.alternate,e,me);e.memoizedProps=e.pendingProps,t===null?Ks(e):Y=t,So.current=null}function Ks(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=cd(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{G=6,Y=null;return}}else if(n=sd(n,t,me),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);G===0&&(G=5)}function xt(e,t,n){var r=R,l=Ee.transition;try{Ee.transition=null,R=1,yd(e,t,n,r)}finally{Ee.transition=l,R=r}return null}function yd(e,t,n,r){do Zt();while(nt!==null);if(I&6)throw Error(y(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Jc(e,i),e===J&&(Y=J=null,b=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gr||(gr=!0,Zs(Rr,function(){return Zt(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ee.transition,Ee.transition=null;var o=R;R=1;var a=I;I|=4,So.current=null,dd(e,n),Bs(n,e),Uf(mi),Or=!!pi,mi=pi=null,e.current=n,pd(n),Vc(),I=a,R=o,Ee.transition=i}else e.current=n;if(gr&&(gr=!1,nt=e,Jr=l),i=e.pendingLanes,i===0&&(ut=null),Qc(n.stateNode),pe(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Zr)throw Zr=!1,e=Di,Di=null,e;return Jr&1&&e.tag!==0&&Zt(),i=e.pendingLanes,i&1?e===Oi?Tn++:(Tn=0,Oi=e):Tn=0,ht(),null}function Zt(){if(nt!==null){var e=_u(Jr),t=Ee.transition,n=R;try{if(Ee.transition=null,R=16>e?16:e,nt===null)var r=!1;else{if(e=nt,nt=null,Jr=0,I&6)throw Error(y(331));var l=I;for(I|=4,S=e.current;S!==null;){var i=S,o=i.child;if(S.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var f=a[u];for(S=f;S!==null;){var g=S;switch(g.tag){case 0:case 11:case 15:zn(8,g,i)}var h=g.child;if(h!==null)h.return=g,S=h;else for(;S!==null;){g=S;var m=g.sibling,x=g.return;if(Us(g),g===f){S=null;break}if(m!==null){m.return=x,S=m;break}S=x}}}var w=i.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var F=k.sibling;k.sibling=null,k=F}while(k!==null)}}S=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,S=o;else e:for(;S!==null;){if(i=S,i.flags&2048)switch(i.tag){case 0:case 11:case 15:zn(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,S=d;break e}S=i.return}}var s=e.current;for(S=s;S!==null;){o=S;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,S=p;else e:for(o=s;S!==null;){if(a=S,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:sl(9,a)}}catch(E){V(a,a.return,E)}if(a===o){S=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,S=v;break e}S=a.return}}if(I=l,ht(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(tl,e)}catch{}r=!0}return r}finally{R=n,Ee.transition=t}}return!1}function Aa(e,t,n){t=nn(n,t),t=_s(e,t,1),e=at(e,t,1),t=oe(),e!==null&&(Xn(e,1,t),pe(e,t))}function V(e,t,n){if(e.tag===3)Aa(e,e,n);else for(;t!==null;){if(t.tag===3){Aa(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ut===null||!ut.has(r))){e=nn(n,e),e=zs(t,e,1),t=at(t,e,1),e=oe(),t!==null&&(Xn(t,1,e),pe(t,e));break}}t=t.return}}function xd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=oe(),e.pingedLanes|=e.suspendedLanes&n,J===e&&(b&n)===n&&(G===4||G===3&&(b&130023424)===b&&500>Q()-No?Et(e,0):Eo|=n),pe(e,t)}function Gs(e,t){t===0&&(e.mode&1?(t=or,or<<=1,!(or&130023424)&&(or=4194304)):t=1);var n=oe();e=Ke(e,t),e!==null&&(Xn(e,t,n),pe(e,n))}function wd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Gs(e,n)}function kd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),Gs(e,n)}var Xs;Xs=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||fe.current)ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ce=!1,ud(e,t,n);ce=!!(e.flags&131072)}else ce=!1,U&&t.flags&1048576&&bu(t,Vr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;jr(e,t),e=t.pendingProps;var l=qt(t,le.current);Xt(t,n),l=vo(null,t,r,e,l,n);var i=yo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,de(r)?(i=!0,$r(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,fo(t),l.updater=ul,t.stateNode=l,l._reactInternals=t,Ei(t,r,e,n),t=ji(null,t,r,!0,i,n)):(t.tag=0,U&&i&&lo(t),ie(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(jr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Ed(r),e=ze(r,e),l){case 0:t=Ci(null,t,r,e,n);break e;case 1:t=Pa(null,t,r,e,n);break e;case 11:t=_a(null,t,r,e,n);break e;case 14:t=za(null,t,r,ze(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ze(r,l),Ci(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ze(r,l),Pa(e,t,r,l,n);case 3:e:{if(Is(t),e===null)throw Error(y(387));r=t.pendingProps,i=t.memoizedState,l=i.element,is(e,t),Qr(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=nn(Error(y(423)),t),t=Ta(e,t,r,n,l);break e}else if(r!==l){l=nn(Error(y(424)),t),t=Ta(e,t,r,n,l);break e}else for(he=ot(t.stateNode.containerInfo.firstChild),ge=t,U=!0,Te=null,n=rs(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bt(),r===l){t=Ge(e,t,n);break e}ie(e,t,r,n)}t=t.child}return t;case 5:return os(t),e===null&&wi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,hi(r,l)?o=null:i!==null&&hi(r,i)&&(t.flags|=32),Ls(e,t),ie(e,t,o,n),t.child;case 6:return e===null&&wi(t),null;case 13:return Rs(e,t,n);case 4:return po(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=en(t,null,r,n):ie(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ze(r,l),_a(e,t,r,l,n);case 7:return ie(e,t,t.pendingProps,n),t.child;case 8:return ie(e,t,t.pendingProps.children,n),t.child;case 12:return ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,D(Hr,r._currentValue),r._currentValue=o,i!==null)if(Re(i.value,o)){if(i.children===l.children&&!fe.current){t=Ge(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=We(-1,n&-n),u.tag=2;var f=i.updateQueue;if(f!==null){f=f.shared;var g=f.pending;g===null?u.next=u:(u.next=g.next,g.next=u),f.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),ki(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(y(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ki(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ie(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Xt(t,n),l=Ne(l),r=r(l),t.flags|=1,ie(e,t,r,n),t.child;case 14:return r=t.type,l=ze(r,t.pendingProps),l=ze(r.type,l),za(e,t,r,l,n);case 15:return Ps(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ze(r,l),jr(e,t),t.tag=1,de(r)?(e=!0,$r(t)):e=!1,Xt(t,n),js(t,r,l),Ei(t,r,l,n),ji(null,t,r,!0,e,n);case 19:return Ds(e,t,n);case 22:return Ts(e,t,n)}throw Error(y(156,t.tag))};function Zs(e,t){return Eu(e,t)}function Sd(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Se(e,t,n,r){return new Sd(e,t,n,r)}function zo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ed(e){if(typeof e=="function")return zo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Yi)return 11;if(e===Ki)return 14}return 2}function ct(e,t){var n=e.alternate;return n===null?(n=Se(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Pr(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")zo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Dt:return Nt(n.children,l,i,t);case Qi:o=8,l|=8;break;case Kl:return e=Se(12,n,t,l|2),e.elementType=Kl,e.lanes=i,e;case Gl:return e=Se(13,n,t,l),e.elementType=Gl,e.lanes=i,e;case Xl:return e=Se(19,n,t,l),e.elementType=Xl,e.lanes=i,e;case ou:return fl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case lu:o=10;break e;case iu:o=9;break e;case Yi:o=11;break e;case Ki:o=14;break e;case Je:o=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=Se(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Nt(e,t,n,r){return e=Se(7,e,r,t),e.lanes=n,e}function fl(e,t,n,r){return e=Se(22,e,r,t),e.elementType=ou,e.lanes=n,e.stateNode={isHidden:!1},e}function Hl(e,t,n){return e=Se(6,e,null,t),e.lanes=n,e}function Wl(e,t,n){return t=Se(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Nd(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nl(0),this.expirationTimes=Nl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Po(e,t,n,r,l,i,o,a,u){return e=new Nd(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Se(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fo(i),e}function Cd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Js(e){if(!e)return dt;e=e._reactInternals;e:{if(Lt(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(de(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(de(n))return Ju(e,n,t)}return t}function qs(e,t,n,r,l,i,o,a,u){return e=Po(n,r,!0,e,l,i,o,a,u),e.context=Js(null),n=e.current,r=oe(),l=st(n),i=We(r,l),i.callback=t??null,at(n,i,l),e.current.lanes=l,Xn(e,l,r),pe(e,r),e}function dl(e,t,n,r){var l=t.current,i=oe(),o=st(l);return n=Js(n),t.context===null?t.context=n:t.pendingContext=n,t=We(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=at(l,t,o),e!==null&&(Ie(e,l,o,i),Er(e,l,o)),o}function br(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $a(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function To(e,t){$a(e,t),(e=e.alternate)&&$a(e,t)}function jd(){return null}var bs=typeof reportError=="function"?reportError:function(e){console.error(e)};function Lo(e){this._internalRoot=e}pl.prototype.render=Lo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));dl(e,t,null,null)};pl.prototype.unmount=Lo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pt(function(){dl(null,e,null,null)}),t[Ye]=null}};function pl(e){this._internalRoot=e}pl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<be.length&&t!==0&&t<be[n].priority;n++);be.splice(n,0,e),n===0&&Iu(e)}};function Io(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ba(){}function _d(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var f=br(o);i.call(f)}}var o=qs(t,r,e,0,null,!1,!1,"",Ba);return e._reactRootContainer=o,e[Ye]=o.current,An(e.nodeType===8?e.parentNode:e),Pt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var f=br(u);a.call(f)}}var u=Po(e,0,!1,null,null,!1,!1,"",Ba);return e._reactRootContainer=u,e[Ye]=u.current,An(e.nodeType===8?e.parentNode:e),Pt(function(){dl(t,u,n,r)}),u}function hl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var a=l;l=function(){var u=br(o);a.call(u)}}dl(t,o,e,l)}else o=_d(n,t,e,l,r);return br(o)}zu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wn(t.pendingLanes);n!==0&&(Zi(t,n|1),pe(t,Q()),!(I&6)&&(rn=Q()+500,ht()))}break;case 13:Pt(function(){var r=Ke(e,1);if(r!==null){var l=oe();Ie(r,e,1,l)}}),To(e,1)}};Ji=function(e){if(e.tag===13){var t=Ke(e,134217728);if(t!==null){var n=oe();Ie(t,e,134217728,n)}To(e,134217728)}};Pu=function(e){if(e.tag===13){var t=st(e),n=Ke(e,t);if(n!==null){var r=oe();Ie(n,e,t,r)}To(e,t)}};Tu=function(){return R};Lu=function(e,t){var n=R;try{return R=e,t()}finally{R=n}};ii=function(e,t,n){switch(t){case"input":if(ql(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=il(r);if(!l)throw Error(y(90));uu(r),ql(r,l)}}}break;case"textarea":cu(e,n);break;case"select":t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}};vu=Co;yu=Pt;var zd={usingClientEntryPoint:!1,Events:[Jn,Ut,il,hu,gu,Co]},vn={findFiberByHostInstance:wt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Pd={bundleType:vn.bundleType,version:vn.version,rendererPackageName:vn.rendererPackageName,rendererConfig:vn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ku(e),e===null?null:e.stateNode},findFiberByHostInstance:vn.findFiberByHostInstance||jd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vr.isDisabled&&vr.supportsFiber)try{tl=vr.inject(Pd),Ue=vr}catch{}}ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zd;ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Io(t))throw Error(y(200));return Cd(e,t,null,n)};ye.createRoot=function(e,t){if(!Io(e))throw Error(y(299));var n=!1,r="",l=bs;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Po(e,1,!1,null,null,n,!1,r,l),e[Ye]=t.current,An(e.nodeType===8?e.parentNode:e),new Lo(t)};ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=ku(t),e=e===null?null:e.stateNode,e};ye.flushSync=function(e){return Pt(e)};ye.hydrate=function(e,t,n){if(!ml(t))throw Error(y(200));return hl(null,e,t,!0,n)};ye.hydrateRoot=function(e,t,n){if(!Io(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=bs;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=qs(t,null,e,1,n??null,l,!1,i,o),e[Ye]=t.current,An(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new pl(t)};ye.render=function(e,t,n){if(!ml(t))throw Error(y(200));return hl(null,e,t,!1,n)};ye.unmountComponentAtNode=function(e){if(!ml(e))throw Error(y(40));return e._reactRootContainer?(Pt(function(){hl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};ye.unstable_batchedUpdates=Co;ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ml(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return hl(e,t,n,!1,r)};ye.version="18.3.1-next-f1338f8080-20240426";function ec(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ec)}catch(e){console.error(e)}}ec(),eu.exports=ye;var Td=eu.exports,Va=Td;Ql.createRoot=Va.createRoot,Ql.hydrateRoot=Va.hydrateRoot;const Ld=()=>{const[e,t]=Fe.useState(""),[n,r]=Fe.useState(0),[l,i]=Fe.useState(!1),o=["Digital Transformation.","AI-Powered Solutions.","Intelligent Automation.","Custom Development.","Strategic Implementation."];return Fe.useEffect(()=>{const a=l?40:100,u=o[n],f=setTimeout(()=>{l?e.length>0?t(e.substring(0,e.length-1)):(i(!1),r(g=>(g+1)%o.length)):e.length<u.length?t(u.substring(0,e.length+1)):setTimeout(()=>i(!0),1500)},a);return()=>clearTimeout(f)},[e,n,l,o]),c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        /* Modern Font Import */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        /* Component styles */
        .it-reimagine-banner,
        .it-reimagine-banner * {
          box-sizing: border-box;
        }
        
        .it-reimagine-banner {
          margin: 0;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          overflow-x: hidden;
          min-height: 100vh;
          width: 100%;
          position: relative;
        }

        .it-reimagine-banner::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .it-reimagine-banner *::selection {
          background-color: rgba(120, 119, 198, 0.3);
          color: #ffffff;
        }

        .info-section {
          height: 100vh;
          min-height: 650px;
          max-height: 800px;
          padding: 20px 20px 20px 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 1;
          user-select: none;
          overflow: hidden;
        }

        .info-section::before {
          content: "";
          border-radius: 50%;
          opacity: 0.6;
          background: linear-gradient(45deg, #7877c6, #ff77c6);
          filter: blur(120px);
          height: 40%;
          width: 60%;
          position: absolute;
          top: -30%;
          left: -50%;
          transform: translate(50%, 50%);
          z-index: -1;
        }

        /* Left part */
        .left-part {
          padding: 20px 0 0;
          overflow: hidden;
        }

        .left-part h1 {
          margin: 0;
          color: #fff;
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(40px, 8vw, 120px);
          line-height: 0.9;
          font-weight: 700;
          font-style: normal;
          text-transform: uppercase;
          letter-spacing: -0.02em;
        }

        .left-part h1 .text {
          background: linear-gradient(135deg, #7877c6 0%, #ff77c6 50%, #78dbff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: block;
          height: clamp(80px, 12vw, 140px);
          font-size: clamp(32px, 6vw, 80px);
        }

        .left-part h1 .d-flex {
          display: flex;
          align-items: center;
        }

        .left-part h1 .char {
          transform: translateY(0);
          transition: transform 0.5s;
          animation: slideUp 0.3s ease-out forwards;
        }

        .typed-cursor {
          display: none !important;
        }

        @keyframes slideUp {
          from {
            transform: translateY(-515px);
          }
          to {
            transform: translateY(0);
          }
        }

        .left-part p {
          width: 90%;
          margin: 20px 0 0;
          color: rgba(255, 255, 255, 0.9);
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 1.6;
          font-family: "Inter", sans-serif;
          letter-spacing: 0.01em;
        }

        /* Button */
        .book-link {
          margin: 30px 0 0;
          padding: 14px 28px;
          border: 2px solid transparent;
          background: linear-gradient(135deg, #7877c6, #ff77c6);
          border-radius: 50px;
          font-size: 14px;
          line-height: 1.2;
          color: #ffffff;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          font-family: "Space Grotesk", sans-serif;
          font-weight: 600;
          font-style: normal;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          position: relative;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 32px rgba(120, 119, 198, 0.3);
        }

        .book-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(120, 119, 198, 0.4);
          background: linear-gradient(135deg, #8988d4, #ff88d4);
        }

        .book-link .linktext {
          position: relative;
          display: inline-block;
        }

        .book-link .arrow {
          height: 20px;
          width: 20px;
          display: inline-block;
          position: relative;
          transition: transform 0.3s ease;
        }

        .book-link:hover .arrow {
          transform: translateX(4px);
        }

        .book-link .arrow::before {
          content: "→";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 16px;
          color: white;
        }

        /* Right part */
        .right-part {
          background-color: transparent;
          height: 450px;
          width: 450px;
          margin: 0;
          display: block;
          position: relative;
          z-index: 1;
          flex-shrink: 0;
        }

        .right-part::before {
          content: "";
          border-radius: 50%;
          opacity: 0.5;
          background: linear-gradient(45deg, #78dbff, #7877c6);
          filter: blur(100px);
          height: 40%;
          width: 60%;
          position: absolute;
          top: 50%;
          right: 20%;
          transform: translate(50%, -50%);
          z-index: -1;
        }

        .right-part .d-flex {
          height: 100%;
          gap: 24px;
          display: flex;
          flex-wrap: wrap;
          align-content: space-between;
          position: relative;
        }

        .main-grid {
          position: relative;
        }

        .box {
          width: calc((100% / 3) - 16px);
          height: calc((100% / 3) - 16px);
          background-color: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #555555;
          font-size: 11px;
          font-style: normal;
          font-weight: 600;
          line-height: 1.2;
          color: #ffffff;
          font-family: "Space Grotesk", sans-serif;
          border-radius: 120px;
          position: absolute;
          animation: 30s infinite;
          text-align: center;
          padding: 8px;
        }

        /* Box animations */
        .box:nth-child(1) {
          left: 0;
          top: 0;
          animation-name: box-1;
        }

        .box:nth-child(2) {
          left: calc(100% / 3);
          top: 0;
          animation-name: box-2;
        }

        .box:nth-child(3) {
          left: calc((100% / 3) * 2);
          top: 0;
          animation-name: box-3;
        }

        .box:nth-child(4) {
          left: 0;
          top: calc(100% / 3);
          animation-name: box-4;
        }

        .box:nth-child(5) {
          left: calc((100% / 3) * 2);
          top: calc(100% / 3);
          animation-name: box-5;
        }

        .box:nth-child(6) {
          left: 0;
          top: calc((100% / 3) * 2);
          animation-name: box-6;
        }

        .box:nth-child(7) {
          left: calc(100% / 3);
          top: calc((100% / 3) * 2);
          animation-name: box-7;
        }

        .box:nth-child(8) {
          left: calc((100% / 3) * 2);
          top: calc((100% / 3) * 2);
          animation-name: box-8;
        }

        /* Keyframes for box animations */
        @keyframes box-1 {
          0%, 90%, 100% {
            left: 0;
            top: 0;
          }
          2.5%, 12.5% {
            left: calc(100% / 3);
          }
          15%, 25% {
            left: calc((100% / 3) * 2);
            top: 0;
          }
          27.5% {
            left: calc((100% / 3) * 2);
            top: calc(100% / 3);
          }
          29.5% {
            left: calc((100% / 3) * 2);
            top: calc(100% / 3);
            width: calc((100% / 3) - 16px);
          }
          31.5%, 33.5% {
            left: calc(100% / 3);
            width: 100%;
          }
          35.5%, 37.5% {
            left: calc((100% / 3) * 2);
            top: calc(100% / 3);
            width: calc((100% / 3) - 16px);
          }
          40%, 50% {
            left: calc((100% / 3) * 2);
            top: calc((100% / 3) * 2);
          }
          52.5%, 62.5% {
            left: calc(100% / 3);
          }
          65%, 75% {
            left: 0;
            top: calc((100% / 3) * 2);
          }
          77.5%, 87.5% {
            top: calc(100% / 3);
          }
        }

        @keyframes box-2 {
          0%, 90%, 100% {
            left: calc(100% / 3);
          }
          2.5%, 12.5% {
            left: calc((100% / 3) * 2);
            top: 0;
          }
          15%, 17% {
            left: calc((100% / 3) * 2);
            top: calc(100% / 3);
            width: calc((100% / 3) - 16px);
          }
          19%, 21% {
            left: calc(100% / 3);
            top: calc(100% / 3);
            width: 100%;
          }
          23%, 25% {
            left: calc((100% / 3) * 2);
            top: calc(100% / 3);
            width: calc((100% / 3) - 16px);
          }
          27.5%, 37.5% {
            left: calc((100% / 3) * 2);
            top: calc((100% / 3) * 2);
          }
          40%, 50% {
            left: calc(100% / 3);
            top: calc((100% / 3) * 2);
          }
          52.5%, 62.5% {
            left: 0;
            top: calc((100% / 3) * 2);
          }
          65%, 75% {
            left: 0;
            top: calc(100% / 3);
          }
          77.5%, 87.5% {
            left: 0;
            top: 0;
          }
        }

        @keyframes box-3 {
          0%, 90%, 100% {
            left: calc((100% / 3) * 2);
          }
          2.5%, 12.5% {
            left: calc((100% / 3) * 2);
            top: calc(100% / 3);
          }
          4.5%, 10.5% {
            left: calc((100% / 3) * 2);
            top: calc(100% / 3);
            width: calc((100% / 3) - 16px);
          }
          6.5%, 8.5% {
            left: calc(100% / 3);
            top: calc(100% / 3);
            width: 100%;
          }
          15%, 25% {
            left: calc((100% / 3) * 2);
            top: calc((100% / 3) * 2);
          }
          27.5%, 37.5% {
            left: calc(100% / 3);
            top: calc((100% / 3) * 2);
          }
          40%, 50% {
            left: 0;
            top: calc((100% / 3) * 2);
          }
          52.5%, 62.5% {
            left: 0;
            top: calc(100% / 3);
          }
          65%, 75% {
            left: 0;
            top: 0;
          }
          77.5%, 87.5% {
            left: calc(100% / 3);
            top: 0;
          }
        }

        @keyframes box-4 {
          0%, 90%, 100% {
            top: calc(100% / 3);
          }
          2.5%, 12.5% {
            left: 0;
            top: 0;
          }
          15%, 25% {
            left: calc(100% / 3);
            top: 0;
          }
          27.5%, 37.5% {
            left: calc((100% / 3) * 2);
            top: 0;
          }
          40%, 42%, 48%, 50% {
            left: calc((100% / 3) * 2);
            top: calc(100% / 3);
            width: calc((100% / 3) - 16px);
          }
          44%, 46% {
            left: calc(100% / 3);
            top: calc(100% / 3);
            width: 100%;
          }
          52.5%, 62.5% {
            left: calc((100% / 3) * 2);
            top: calc((100% / 3) * 2);
          }
          65%, 75% {
            left: calc(100% / 3);
            top: calc((100% / 3) * 2);
          }
          77.5%, 87.5% {
            left: 0;
            top: calc((100% / 3) * 2);
          }
        }

        @keyframes box-5 {
          0%, 90%, 92%, 98%, 100% {
            left: calc((100% / 3) * 2);
            top: calc(100% / 3);
            width: calc((100% / 3) - 16px);
          }
          2.5%, 12.5% {
            left: calc((100% / 3) * 2);
            top: calc((100% / 3) * 2);
          }
          15%, 25% {
            left: calc(100% / 3);
            top: calc((100% / 3) * 2);
          }
          27.5%, 37.5% {
            left: 0;
            top: calc((100% / 3) * 2);
          }
          40%, 50% {
            left: 0;
            top: calc(100% / 3);
          }
          52.5%, 62.5% {
            left: 0;
            top: 0;
          }
          65%, 75% {
            left: calc(100% / 3);
            top: 0;
          }
          77.5%, 87.5% {
            left: calc((100% / 3) * 2);
            top: 0;
          }
          94%, 96% {
            left: calc(100% / 3);
            top: calc(100% / 3);
            width: 100%;
          }
        }

        @keyframes box-6 {
          0%, 90%, 100% {
            left: 0;
            top: calc((100% / 3) * 2);
          }
          2.5%, 12.5% {
            left: 0;
            top: calc(100% / 3);
          }
          15%, 25% {
            left: 0;
            top: 0;
          }
          27.5%, 37.5% {
            left: calc(100% / 3);
            top: 0;
          }
          40%, 50% {
            left: calc((100% / 3) * 2);
            top: 0;
          }
          52.5%, 54.5%, 60.5%, 62.5% {
            left: calc((100% / 3) * 2);
            top: calc(100% / 3);
            width: calc((100% / 3) - 16px);
          }
          56.5%, 58.5% {
            left: calc(100% / 3);
            top: calc(100% / 3);
            width: 100%;
          }
          65%, 75% {
            left: calc((100% / 3) * 2);
            top: calc((100% / 3) * 2);
          }
          77.5%, 87.5% {
            left: calc((100% / 3) * 2);
            top: calc((100% / 3) * 2);
          }
        }

        @keyframes box-7 {
          0%, 90%, 100% {
            left: calc(100% / 3);
            top: calc((100% / 3) * 2);
          }
          2.5%, 12.5% {
            left: 0;
            top: calc((100% / 3) * 2);
          }
          15%, 25% {
            left: 0;
            top: calc(100% / 3);
          }
          27.5%, 37.5% {
            left: 0;
            top: 0;
          }
          40%, 50% {
            left: calc(100% / 3);
            top: 0;
          }
          52.5%, 62.5% {
            left: calc((100% / 3) * 2);
            top: 0;
          }
          65%, 67%, 73%, 75% {
            left: calc((100% / 3) * 2);
            top: calc(100% / 3);
            width: calc((100% / 3) - 16px);
          }
          69%, 71% {
            left: calc(100% / 3);
            top: calc(100% / 3);
            width: 100%;
          }
          77.5%, 87.5% {
            left: calc((100% / 3) * 2);
            top: calc((100% / 3) * 2);
          }
        }

        @keyframes box-8 {
          0%, 90%, 100% {
            left: calc((100% / 3) * 2);
            top: calc((100% / 3) * 2);
          }
          2.5%, 12.5% {
            left: calc(100% / 3);
            top: calc((100% / 3) * 2);
          }
          15%, 25% {
            left: 0;
            top: calc((100% / 3) * 2);
          }
          27.5%, 37.5% {
            left: 0;
            top: calc(100% / 3);
          }
          40%, 50% {
            left: 0;
            top: 0;
          }
          52.5%, 62.5% {
            left: calc(100% / 3);
            top: 0;
          }
          65%, 75% {
            left: calc((100% / 3) * 2);
            top: 0;
          }
          77.5%, 79.5%, 85.5%, 87.5% {
            left: calc((100% / 3) * 2);
            top: calc(100% / 3);
            width: calc((100% / 3) - 16px);
            border-radius: 100%;
          }
          81.5%, 83.5% {
            left: calc(100% / 3);
            top: calc(100% / 3);
            width: 100%;
          }
        }

        /* Box Text */
        .box span {
          position: relative;
          display: block;
          opacity: 1;
          z-index: 5;
          text-align: center;
          width: 100%;
        }

        /* Box Background-Image */
        .box .bg-img {
          position: absolute;
          top: 0;
          left: 0;
          border-radius: 120px;
          overflow: hidden;
        }

        .box .bg-img,
        .box .bg-img img {
          height: 100%;
          width: 100%;
        }

        .box .bg-img img {
          max-width: 100%;
          object-fit: cover;
          object-position: center center;
        }

        /* Hide bg-line completely */
        .bg-line {
          display: none;
        }

        .bg-line img {
          position: relative;
          flex-shrink: 0;
          -webkit-flex-shrink: 0;
          animation: 26s linear infinite;
        }

        .bg-line img:nth-child(1) {
          animation-name: first-text;
        }

        .bg-line img:nth-child(2) {
          animation-name: second-text;
        }

        @keyframes first-text {
          50% {
            transform: translateX(-100%);
            opacity: 1;
          }
          50.05% {
            opacity: 0;
          }
          50.1% {
            transform: translateX(100%);
            opacity: 1;
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes second-text {
          50% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(-200%);
          }
          0% {
            transform: translateX(0%);
          }
        }

        /* Hide dash circle */
        .bg-dash-circle {
          display: none;
        }

        .bg-dash-circle img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center center;
          animation: circle-rotate 18s linear infinite;
        }

        @keyframes circle-rotate {
          0% {
            transform: rotate(0);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* Hide circle line */
        .bg-circle-h-line {
          display: none;
        }

        .bg-circle-h-line img {
          width: 100%;
          max-width: 100%;
          height: auto;
          position: absolute;
          left: 0;
        }

        .bg-circle-h-line img:nth-child(1) {
          top: 0;
          animation: top-ring-move 2.5s linear infinite;
        }

        .bg-circle-h-line img:nth-child(2) {
          top: 50%;
          transform: translateY(-50%);
        }

        .bg-circle-h-line img:nth-child(3) {
          bottom: 0;
          animation: bottom-ring-move 2.5s linear infinite;
        }

        @keyframes top-ring-move {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(5px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes bottom-ring-move {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(0);
          }
        }

        /* Responsive */
        @media screen and (min-width: 1500px) {
          .info-section {
            padding-left: 120px;
          }
        }

        @media screen and (min-width: 1400px) {
          .info-section {
            padding-left: 100px;
          }
        }

        @media screen and (max-width: 1199px) {
          .bg-line {
            height: 68px;
          }
          .right-part {
            height: 400px;
            width: 400px;
          }
          .right-part .d-flex {
            gap: 20px;
          }
          .box {
            height: 118px;
            width: 118px;
            font-size: 12px;
          }
          .left-part p {
            font-size: 14px;
            line-height: 1.8;
            width: 85%;
          }
          .left-part h1 .text {
            height: 132px;
          }
          .bg-dash-circle {
            width: 130px;
          }
          .bg-circle-h-line {
            width: 156px;
            height: 92px;
          }
          .book-link {
            font-size: 48px;
            gap: 24px;
          }
          .book-link .arrow {
            height: 28px;
            width: 28px;
          }
        }

        @media screen and (max-width: 767px) {
          .it-reimagine-banner {
            overflow-x: hidden;
          }
          
          .info-section {
            display: block;
            padding: 0;
            overflow: visible;
            min-height: auto;
            height: auto;
          }
          
          .bg-line {
            height: 52px;
          }
          
          .left-part {
            padding: 40px 16px 60px;
            overflow: visible;
          }
          
          .right-part {
            height: 334px;
            width: 334px;
            margin: 0 auto;
            margin-right: auto;
          }
          
          .left-part h1 .text {
            height: 88px;
          }
          
          .left-part p {
            font-size: 12px;
            width: 96%;
          }
          
          .box {
            height: 96px;
            width: 96px;
            font-size: 10px;
          }
          
          .book-link .arrow {
            height: 24px;
            width: 24px;
          }
          
          .book-link {
            font-size: 42px;
            gap: 20px;
            margin-top: 24px;
          }
          
          .bg-dash-circle {
            width: 80px;
          }
          
          .bg-circle-h-line {
            width: 126px;
            height: 65px;
          }
        }

        /* Features Section */
        .features-section {
          padding: 80px 30px;
          background: linear-gradient(135deg, #16213e 0%, #0f0f23 50%, #1a1a2e 100%);
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .features-section::before {
          content: "";
          border-radius: 50%;
          opacity: 0.4;
          background: linear-gradient(45deg, #ff77c6, #78dbff);
          filter: blur(120px);
          height: 50%;
          width: 50%;
          position: absolute;
          top: 30%;
          right: -25%;
          z-index: -1;
        }

        .features-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 60px;
          align-items: center;
        }

        .features-content h2 {
          color: #fff;
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(50px, 7vw, 100px);
          line-height: 1.1;
          margin: 0 0 40px;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .features-content h2 .highlight {
          background: linear-gradient(135deg, #7877c6 0%, #ff77c6 50%, #78dbff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .feature-item {
          padding: 25px 0;
          border-bottom: 1px solid #333;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .feature-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #7877c6, #ff77c6);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: bold;
          color: #ffffff;
          flex-shrink: 0;
          box-shadow: 0 8px 32px rgba(120, 119, 198, 0.3);
        }

        .feature-text h3 {
          color: #fff;
          font-family: "Space Grotesk", sans-serif;
          font-size: 20px;
          margin: 0 0 10px;
          font-weight: 600;
          letter-spacing: -0.01em;
        }

        .feature-text p {
          color: rgba(255, 255, 255, 0.7);
          font-family: "Inter", sans-serif;
          font-size: 15px;
          margin: 0;
          line-height: 1.6;
        }

        /* Testimonials Section */
        .testimonials-section {
          padding: 80px 30px;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .testimonials-section::before {
          content: "";
          border-radius: 50%;
          opacity: 0.5;
          background: linear-gradient(45deg, #7877c6, #78dbff);
          filter: blur(140px);
          height: 60%;
          width: 40%;
          position: absolute;
          top: 50%;
          left: -20%;
          transform: translateY(-50%);
          z-index: -1;
        }

        .testimonials-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .testimonials-title {
          color: #fff;
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(50px, 7vw, 90px);
          line-height: 1.1;
          margin: 0 0 80px;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          margin-bottom: 60px;
        }

        .testimonial-card {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(120, 119, 198, 0.2);
          border-radius: 24px;
          padding: 40px 30px;
          position: relative;
          backdrop-filter: blur(20px);
          transition: all 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-8px);
          border-color: rgba(120, 119, 198, 0.4);
          box-shadow: 0 20px 60px rgba(120, 119, 198, 0.2);
        }

        .testimonial-quote {
          color: rgba(255, 255, 255, 0.9);
          font-family: "Inter", sans-serif;
          font-size: 16px;
          line-height: 1.7;
          margin: 0 0 30px;
          font-style: italic;
          font-weight: 400;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .author-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, #7877c6, #ff77c6);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: #ffffff;
        }

        .author-info h4 {
          color: #fff;
          font-family: "Space Grotesk", sans-serif;
          font-size: 14px;
          margin: 0;
          font-weight: 600;
        }

        .author-info p {
          color: rgba(255, 255, 255, 0.6);
          font-family: "Inter", sans-serif;
          font-size: 12px;
          margin: 5px 0 0;
        }

        /* CTA Section */
        .cta-section {
          padding: 80px 30px;
          background: linear-gradient(135deg, #16213e 0%, #0f0f23 50%, #1a1a2e 100%);
          position: relative;
          overflow: hidden;
          text-align: center;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cta-section::before {
          content: "";
          border-radius: 50%;
          opacity: 0.4;
          background: linear-gradient(45deg, #7877c6, #ff77c6);
          filter: blur(160px);
          height: 70%;
          width: 90%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: -1;
        }

        .cta-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .cta-title {
          color: #fff;
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(60px, 10vw, 120px);
          line-height: 1.1;
          margin: 0 0 30px;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .cta-subtitle {
          color: rgba(255, 255, 255, 0.8);
          font-family: "Inter", sans-serif;
          font-size: 18px;
          line-height: 1.6;
          margin: 0 0 50px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          gap: 30px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-button {
          padding: 18px 40px;
          background: linear-gradient(135deg, #7877c6, #ff77c6);
          color: #ffffff;
          text-decoration: none;
          font-family: "Space Grotesk", sans-serif;
          font-size: 16px;
          font-weight: 600;
          text-transform: uppercase;
          border-radius: 50px;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          box-shadow: 0 8px 32px rgba(120, 119, 198, 0.3);
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(120, 119, 198, 0.4);
          background: linear-gradient(135deg, #8988d4, #ff88d4);
        }

        .cta-button.secondary {
          background: transparent;
          color: #fff;
          border: 2px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
        }

        .cta-button.secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-2px);
        }

        /* Responsive adjustments for new sections */
        @media screen and (max-width: 1199px) {
          .features-section,
          .testimonials-section,
          .cta-section {
            padding: 80px 20px;
          }

          .features-container {
            gap: 40px;
          }

          .testimonials-grid {
            gap: 30px;
          }

          .cta-buttons {
            gap: 20px;
          }
        }

        @media screen and (max-width: 767px) {
          .features-section,
          .testimonials-section,
          .cta-section {
            padding: 60px 16px;
          }

          .features-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .testimonial-card {
            padding: 30px 20px;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }

          .cta-button {
            width: 100%;
            max-width: 300px;
          }
        }
      `}),c.jsx("div",{className:"it-reimagine-banner",children:c.jsxs("main",{children:[c.jsxs("section",{className:"info-section",children:[c.jsxs("div",{className:"left-part",children:[c.jsxs("h1",{children:[c.jsx("span",{className:"d-flex",children:["I","T"," ","R","e","i","m","a","g","i","n","e"].map((a,u)=>c.jsx("span",{className:"char",style:{animationDelay:`${u*.08}s`},children:a===" "?" ":a},u))}),c.jsx("span",{className:"text",children:e})]}),c.jsx("p",{children:"Transforming businesses through innovative technology solutions, AI-powered automation, and strategic digital implementation. We partner with forward-thinking companies to reimagine their digital future."}),c.jsxs("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap"},children:[c.jsxs("a",{href:"https://calendly.com/ritepulse/it-reimagine-free-consultation",className:"book-link",target:"_blank",rel:"noopener noreferrer",children:[c.jsx("span",{className:"linktext",children:"Book Your Free Consultation"}),c.jsx("span",{className:"arrow",children:c.jsx("span",{})})]}),c.jsxs("a",{href:"#contact",className:"book-link",style:{background:"transparent",border:"2px solid rgba(255,255,255,0.3)"},children:[c.jsx("span",{className:"linktext",children:"Contact Us"}),c.jsx("span",{className:"arrow",children:c.jsx("span",{})})]})]})]}),c.jsx("div",{className:"right-part",children:c.jsxs("div",{className:"main-grid d-flex",children:[c.jsx("div",{className:"box",children:c.jsx("span",{children:"Digital Transformation"})}),c.jsx("div",{className:"box",children:c.jsx("div",{className:"bg-img",children:c.jsx("img",{src:"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=200&h=200&fit=crop&crop=center",alt:"AI Technology"})})}),c.jsx("div",{className:"box",children:c.jsx("span",{children:"AI Automation"})}),c.jsx("div",{className:"box",children:c.jsx("span",{children:"Custom Development"})}),c.jsx("div",{className:"box",children:c.jsx("div",{className:"bg-img",children:c.jsx("img",{src:"https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=200&h=200&fit=crop&crop=center",alt:"Software Development"})})}),c.jsx("div",{className:"box",children:c.jsx("span",{children:"Strategic Implementation"})}),c.jsx("div",{className:"box",children:c.jsx("div",{className:"bg-img",children:c.jsx("img",{src:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop&crop=center",alt:"Data Analytics"})})}),c.jsx("div",{className:"box",children:c.jsx("div",{className:"bg-img",children:c.jsx("img",{src:"/src/images/artificial_intelligence.jpg",alt:"Machine Learning"})})})]})})]}),c.jsx("section",{className:"features-section",children:c.jsxs("div",{className:"features-container",children:[c.jsx("div",{className:"features-content",children:c.jsxs("h2",{children:["Our ",c.jsx("span",{className:"highlight",children:"Core"})," Services"]})}),c.jsxs("ul",{className:"features-list",children:[c.jsxs("li",{className:"feature-item",children:[c.jsx("div",{className:"feature-icon",children:"🚀"}),c.jsxs("div",{className:"feature-text",children:[c.jsx("h3",{children:"Digital Transformation Solutions"}),c.jsx("p",{children:"Modernize your business processes with cutting-edge technology and strategic digital initiatives that drive growth and efficiency."})]})]}),c.jsxs("li",{className:"feature-item",children:[c.jsx("div",{className:"feature-icon",children:"🤖"}),c.jsxs("div",{className:"feature-text",children:[c.jsx("h3",{children:"AI-Powered Business Solutions"}),c.jsx("p",{children:"Leverage artificial intelligence to automate workflows, enhance decision-making, and unlock new opportunities for your business."})]})]}),c.jsxs("li",{className:"feature-item",children:[c.jsx("div",{className:"feature-icon",children:"⚡"}),c.jsxs("div",{className:"feature-text",children:[c.jsx("h3",{children:"Intelligent Automation & Development"}),c.jsx("p",{children:"Streamline operations with smart automation tools and custom software solutions tailored to your specific business needs."})]})]}),c.jsxs("li",{className:"feature-item",children:[c.jsx("div",{className:"feature-icon",children:"📊"}),c.jsxs("div",{className:"feature-text",children:[c.jsx("h3",{children:"Digital Strategy & Implementation"}),c.jsx("p",{children:"Comprehensive digital roadmaps with hands-on implementation support to ensure successful technology adoption and ROI."})]})]}),c.jsxs("li",{className:"feature-item",children:[c.jsx("div",{className:"feature-icon",children:"💻"}),c.jsxs("div",{className:"feature-text",children:[c.jsx("h3",{children:"Custom AI & Software Development"}),c.jsx("p",{children:"Bespoke software solutions and AI applications designed from the ground up to solve your unique business challenges."})]})]})]})]})}),c.jsx("section",{className:"testimonials-section",children:c.jsxs("div",{className:"testimonials-container",children:[c.jsx("h2",{className:"testimonials-title",children:"Client Success Stories"}),c.jsxs("div",{className:"testimonials-grid",children:[c.jsxs("div",{className:"testimonial-card",children:[c.jsx("p",{className:"testimonial-quote",children:`"IT Reimagine transformed our entire business process with their AI automation solutions. We've seen a 300% increase in efficiency and significant cost savings."`}),c.jsxs("div",{className:"testimonial-author",children:[c.jsx("div",{className:"author-avatar",children:"MJ"}),c.jsxs("div",{className:"author-info",children:[c.jsx("h4",{children:"Michael Johnson"}),c.jsx("p",{children:"CEO, TechFlow Industries"})]})]})]}),c.jsxs("div",{className:"testimonial-card",children:[c.jsx("p",{className:"testimonial-quote",children:'"Their custom software development exceeded our expectations. The team delivered a scalable solution that perfectly fits our unique business requirements."'}),c.jsxs("div",{className:"testimonial-author",children:[c.jsx("div",{className:"author-avatar",children:"SC"}),c.jsxs("div",{className:"author-info",children:[c.jsx("h4",{children:"Sarah Chen"}),c.jsx("p",{children:"CTO, InnovateLabs"})]})]})]}),c.jsxs("div",{className:"testimonial-card",children:[c.jsx("p",{className:"testimonial-quote",children:'"The digital transformation strategy they implemented helped us modernize our operations and stay competitive in the digital age."'}),c.jsxs("div",{className:"testimonial-author",children:[c.jsx("div",{className:"author-avatar",children:"RK"}),c.jsxs("div",{className:"author-info",children:[c.jsx("h4",{children:"Robert Kim"}),c.jsx("p",{children:"Operations Director, GlobalTech"})]})]})]})]})]})}),c.jsx("section",{className:"cta-section",children:c.jsxs("div",{className:"cta-container",children:[c.jsx("h2",{className:"cta-title",children:"Ready to Transform?"}),c.jsx("p",{className:"cta-subtitle",children:"Join forward-thinking companies who have already revolutionized their business with our innovative solutions. Your digital transformation journey starts with a conversation."}),c.jsxs("div",{className:"cta-buttons",children:[c.jsx("a",{href:"https://calendly.com/ritepulse/it-reimagine-free-consultation",className:"cta-button",target:"_blank",rel:"noopener noreferrer",children:"Book Free Consultation"}),c.jsx("a",{href:"#contact",className:"cta-button secondary",children:"Contact Us"})]})]})})]})})]})},Id=()=>{const[e,t]=Fe.useState({name:"",email:"",company:"",phone:"",service:"",message:""}),n=l=>{t({...e,[l.target.name]:l.target.value})},r=l=>{l.preventDefault();const i=l.target,o=new FormData(i);fetch("https://formspree.io/f/mgvzzqkk",{method:"POST",body:o,headers:{Accept:"application/json"}}).then(a=>{a.ok?(alert("Thank you for your message! We will get back to you soon."),t({name:"",email:"",company:"",phone:"",service:"",message:""})):alert("There was an error sending your message. Please try again.")})};return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        .contact-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          position: relative;
          overflow-x: hidden;
        }

        .contact-page::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 30px;
          position: relative;
          z-index: 1;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .contact-title {
          color: #fff;
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(40px, 8vw, 80px);
          line-height: 1.1;
          margin: 0 0 20px;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .contact-subtitle {
          color: rgba(255, 255, 255, 0.8);
          font-family: "Inter", sans-serif;
          font-size: 18px;
          line-height: 1.6;
          margin: 0 0 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .contact-info {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(120, 119, 198, 0.2);
          border-radius: 24px;
          padding: 40px;
          backdrop-filter: blur(20px);
        }

        .contact-info h3 {
          color: #fff;
          font-family: "Space Grotesk", sans-serif;
          font-size: 24px;
          margin: 0 0 30px;
          font-weight: 600;
        }

        .contact-item {
          margin-bottom: 25px;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .contact-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #7877c6, #ff77c6);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: white;
          flex-shrink: 0;
        }

        .contact-details h4 {
          color: #fff;
          font-family: "Space Grotesk", sans-serif;
          font-size: 16px;
          margin: 0 0 5px;
          font-weight: 600;
        }

        .contact-details p {
          color: rgba(255, 255, 255, 0.7);
          font-family: "Inter", sans-serif;
          font-size: 14px;
          margin: 0;
        }

        .consultation-btn {
          margin-top: 30px;
          padding: 16px 32px;
          background: linear-gradient(135deg, #7877c6, #ff77c6);
          color: #ffffff;
          text-decoration: none;
          font-family: "Space Grotesk", sans-serif;
          font-size: 16px;
          font-weight: 600;
          text-transform: uppercase;
          border-radius: 50px;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          box-shadow: 0 8px 32px rgba(120, 119, 198, 0.3);
          display: inline-block;
          text-align: center;
        }

        .consultation-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(120, 119, 198, 0.4);
          background: linear-gradient(135deg, #8988d4, #ff88d4);
        }

        .contact-form {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(120, 119, 198, 0.2);
          border-radius: 24px;
          padding: 40px;
          backdrop-filter: blur(20px);
        }

        .contact-form h3 {
          color: #fff;
          font-family: "Space Grotesk", sans-serif;
          font-size: 24px;
          margin: 0 0 30px;
          font-weight: 600;
        }

        .form-group {
          margin-bottom: 25px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group label {
          display: block;
          color: #fff;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 8px;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 14px 16px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          color: #fff;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: rgba(120, 119, 198, 0.5);
          background: rgba(255, 255, 255, 0.15);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #7877c6, #ff77c6);
          color: #ffffff;
          border: none;
          font-family: "Space Grotesk", sans-serif;
          font-size: 16px;
          font-weight: 600;
          text-transform: uppercase;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 32px rgba(120, 119, 198, 0.3);
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(120, 119, 198, 0.4);
          background: linear-gradient(135deg, #8988d4, #ff88d4);
        }

        .back-btn {
          position: fixed;
          top: 30px;
          left: 30px;
          padding: 12px 24px;
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          text-decoration: none;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          border-radius: 25px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
          z-index: 1000;
        }

        .back-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-1px);
        }

        @media screen and (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .contact-container {
            padding: 60px 20px;
          }

          .contact-form,
          .contact-info {
            padding: 30px 20px;
          }
        }
      `}),c.jsxs("div",{className:"contact-page",children:[c.jsx("a",{href:"/",className:"back-btn",children:"← Back to Home"}),c.jsxs("div",{className:"contact-container",children:[c.jsxs("div",{className:"contact-header",children:[c.jsx("h1",{className:"contact-title",children:"Contact Us"}),c.jsx("p",{className:"contact-subtitle",children:"Ready to transform your business? Get in touch with our experts and let's discuss how we can help you achieve your digital transformation goals."})]}),c.jsxs("div",{className:"contact-content",children:[c.jsxs("div",{className:"contact-info",children:[c.jsx("h3",{children:"Get in Touch"}),c.jsxs("div",{className:"contact-item",children:[c.jsx("div",{className:"contact-icon",children:"📧"}),c.jsxs("div",{className:"contact-details",children:[c.jsx("h4",{children:"Email"}),c.jsx("p",{children:"contact@itreimagine.com"})]})]}),c.jsxs("div",{className:"contact-item",children:[c.jsx("div",{className:"contact-icon",children:"📞"}),c.jsxs("div",{className:"contact-details",children:[c.jsx("h4",{children:"Phone"}),c.jsx("p",{children:"+1 (555) 123-4567"})]})]}),c.jsxs("div",{className:"contact-item",children:[c.jsx("div",{className:"contact-icon",children:"📍"}),c.jsxs("div",{className:"contact-details",children:[c.jsx("h4",{children:"Office"}),c.jsxs("p",{children:["123 Innovation Drive",c.jsx("br",{}),"Tech City, TC 12345"]})]})]}),c.jsxs("div",{className:"contact-item",children:[c.jsx("div",{className:"contact-icon",children:"⏰"}),c.jsxs("div",{className:"contact-details",children:[c.jsx("h4",{children:"Business Hours"}),c.jsxs("p",{children:["Mon - Fri: 9:00 AM - 6:00 PM",c.jsx("br",{}),"Sat: 10:00 AM - 4:00 PM"]})]})]}),c.jsx("a",{href:"https://calendly.com/ritepulse/it-reimagine-free-consultation",className:"consultation-btn",target:"_blank",rel:"noopener noreferrer",children:"📅 Book Free Consultation"})]}),c.jsxs("div",{className:"contact-form",children:[c.jsx("h3",{children:"Send us a Message"}),c.jsxs("form",{onSubmit:r,children:[c.jsxs("div",{className:"form-row",children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{htmlFor:"name",children:"Full Name *"}),c.jsx("input",{type:"text",id:"name",name:"name",value:e.name,onChange:n,required:!0,placeholder:"Your full name"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{htmlFor:"email",children:"Email Address *"}),c.jsx("input",{type:"email",id:"email",name:"email",value:e.email,onChange:n,required:!0,placeholder:"your.email@company.com"})]})]}),c.jsxs("div",{className:"form-row",children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{htmlFor:"company",children:"Company"}),c.jsx("input",{type:"text",id:"company",name:"company",value:e.company,onChange:n,placeholder:"Your company name"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{htmlFor:"phone",children:"Phone Number"}),c.jsx("input",{type:"tel",id:"phone",name:"phone",value:e.phone,onChange:n,placeholder:"+1 (555) 123-4567"})]})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{htmlFor:"service",children:"Service Interest"}),c.jsxs("select",{id:"service",name:"service",value:e.service,onChange:n,children:[c.jsx("option",{value:"",children:"Select a service"}),c.jsx("option",{value:"digital-transformation",children:"Digital Transformation Solutions"}),c.jsx("option",{value:"ai-solutions",children:"AI-Powered Business Solutions"}),c.jsx("option",{value:"automation",children:"Intelligent Automation & Development"}),c.jsx("option",{value:"strategy",children:"Digital Strategy & Implementation"}),c.jsx("option",{value:"custom-development",children:"Custom AI & Software Development"}),c.jsx("option",{value:"consultation",children:"Free Consultation"})]})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{htmlFor:"message",children:"Message *"}),c.jsx("textarea",{id:"message",name:"message",value:e.message,onChange:n,required:!0,placeholder:"Tell us about your project and how we can help you..."})]}),c.jsx("button",{type:"submit",className:"submit-btn",children:"Send Message"})]})]})]})]})]})]})},Rd=()=>{const[e,t]=Fe.useState("home");return Fe.useEffect(()=>{const r=()=>{const l=window.location.hash.slice(1);t(l||"home")};return window.addEventListener("hashchange",r),r(),()=>window.removeEventListener("hashchange",r)},[]),(()=>{switch(e){case"contact":return c.jsx(Id,{});default:return c.jsx(Ld,{})}})()};Ql.createRoot(document.getElementById("root")).render(c.jsx(yc.StrictMode,{children:c.jsx(Rd,{})}));
