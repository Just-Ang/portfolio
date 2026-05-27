function R0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function L0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var kf={exports:{}},Ui={},_f={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mo=Symbol.for("react.element"),O0=Symbol.for("react.portal"),b0=Symbol.for("react.fragment"),M0=Symbol.for("react.strict_mode"),A0=Symbol.for("react.profiler"),D0=Symbol.for("react.provider"),F0=Symbol.for("react.context"),U0=Symbol.for("react.forward_ref"),B0=Symbol.for("react.suspense"),W0=Symbol.for("react.memo"),V0=Symbol.for("react.lazy"),Eu=Symbol.iterator;function H0(e){return e===null||typeof e!="object"?null:(e=Eu&&e[Eu]||e["@@iterator"],typeof e=="function"?e:null)}var Sf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ef=Object.assign,Cf={};function cr(e,t,n){this.props=e,this.context=t,this.refs=Cf,this.updater=n||Sf}cr.prototype.isReactComponent={};cr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Tf(){}Tf.prototype=cr.prototype;function vs(e,t,n){this.props=e,this.context=t,this.refs=Cf,this.updater=n||Sf}var xs=vs.prototype=new Tf;xs.constructor=vs;Ef(xs,cr.prototype);xs.isPureReactComponent=!0;var Cu=Array.isArray,Pf=Object.prototype.hasOwnProperty,ws={current:null},$f={key:!0,ref:!0,__self:!0,__source:!0};function jf(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)Pf.call(t,r)&&!$f.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:mo,type:e,key:i,ref:a,props:o,_owner:ws.current}}function Q0(e,t){return{$$typeof:mo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ks(e){return typeof e=="object"&&e!==null&&e.$$typeof===mo}function G0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Tu=/\/+/g;function ga(e,t){return typeof e=="object"&&e!==null&&e.key!=null?G0(""+e.key):t.toString(36)}function Qo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case mo:case O0:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+ga(a,0):r,Cu(o)?(n="",e!=null&&(n=e.replace(Tu,"$&/")+"/"),Qo(o,t,n,"",function(u){return u})):o!=null&&(ks(o)&&(o=Q0(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Tu,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",Cu(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+ga(i,l);a+=Qo(i,t,n,s,o)}else if(s=H0(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+ga(i,l++),a+=Qo(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Po(e,t,n){if(e==null)return e;var r=[],o=0;return Qo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function K0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var $e={current:null},Go={transition:null},Y0={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:Go,ReactCurrentOwner:ws};M.Children={map:Po,forEach:function(e,t,n){Po(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Po(e,function(){t++}),t},toArray:function(e){return Po(e,function(t){return t})||[]},only:function(e){if(!ks(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=cr;M.Fragment=b0;M.Profiler=A0;M.PureComponent=vs;M.StrictMode=M0;M.Suspense=B0;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y0;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ef({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=ws.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Pf.call(t,s)&&!$f.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:mo,type:e.type,key:o,ref:i,props:r,_owner:a}};M.createContext=function(e){return e={$$typeof:F0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:D0,_context:e},e.Consumer=e};M.createElement=jf;M.createFactory=function(e){var t=jf.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:U0,render:e}};M.isValidElement=ks;M.lazy=function(e){return{$$typeof:V0,_payload:{_status:-1,_result:e},_init:K0}};M.memo=function(e,t){return{$$typeof:W0,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=Go.transition;Go.transition={};try{e()}finally{Go.transition=t}};M.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};M.useCallback=function(e,t){return $e.current.useCallback(e,t)};M.useContext=function(e){return $e.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return $e.current.useDeferredValue(e)};M.useEffect=function(e,t){return $e.current.useEffect(e,t)};M.useId=function(){return $e.current.useId()};M.useImperativeHandle=function(e,t,n){return $e.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return $e.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return $e.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return $e.current.useMemo(e,t)};M.useReducer=function(e,t,n){return $e.current.useReducer(e,t,n)};M.useRef=function(e){return $e.current.useRef(e)};M.useState=function(e){return $e.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return $e.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return $e.current.useTransition()};M.version="18.2.0";_f.exports=M;var E=_f.exports;const b=L0(E),il=R0({__proto__:null,default:b},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X0=E,J0=Symbol.for("react.element"),Z0=Symbol.for("react.fragment"),q0=Object.prototype.hasOwnProperty,em=X0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tm={key:!0,ref:!0,__self:!0,__source:!0};function Nf(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)q0.call(t,r)&&!tm.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:J0,type:e,key:i,ref:a,props:o,_owner:em.current}}Ui.Fragment=Z0;Ui.jsx=Nf;Ui.jsxs=Nf;kf.exports=Ui;var y=kf.exports,zf={exports:{}},We={},If={exports:{}},Rf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,I){var R=j.length;j.push(I);e:for(;0<R;){var K=R-1>>>1,ee=j[K];if(0<o(ee,I))j[K]=I,j[R]=ee,R=K;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var I=j[0],R=j.pop();if(R!==I){j[0]=R;e:for(var K=0,ee=j.length,vt=ee>>>1;K<vt;){var be=2*(K+1)-1,zt=j[be],Me=be+1,Qe=j[Me];if(0>o(zt,R))Me<ee&&0>o(Qe,zt)?(j[K]=Qe,j[Me]=R,K=Me):(j[K]=zt,j[be]=R,K=be);else if(Me<ee&&0>o(Qe,R))j[K]=Qe,j[Me]=R,K=Me;else break e}}return I}function o(j,I){var R=j.sortIndex-I.sortIndex;return R!==0?R:j.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],m=1,p=null,h=3,x=!1,w=!1,g=!1,_=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(j){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=j)r(u),I.sortIndex=I.expirationTime,t(s,I);else break;I=n(u)}}function v(j){if(g=!1,f(j),!w)if(n(s)!==null)w=!0,st(S);else{var I=n(u);I!==null&&ge(v,I.startTime-j)}}function S(j,I){w=!1,g&&(g=!1,d(P),P=-1),x=!0;var R=h;try{for(f(I),p=n(s);p!==null&&(!(p.expirationTime>I)||j&&!X());){var K=p.callback;if(typeof K=="function"){p.callback=null,h=p.priorityLevel;var ee=K(p.expirationTime<=I);I=e.unstable_now(),typeof ee=="function"?p.callback=ee:p===n(s)&&r(s),f(I)}else r(s);p=n(s)}if(p!==null)var vt=!0;else{var be=n(u);be!==null&&ge(v,be.startTime-I),vt=!1}return vt}finally{p=null,h=R,x=!1}}var C=!1,k=null,P=-1,L=5,z=-1;function X(){return!(e.unstable_now()-z<L)}function He(){if(k!==null){var j=e.unstable_now();z=j;var I=!0;try{I=k(!0,j)}finally{I?Se():(C=!1,k=null)}}else C=!1}var Se;if(typeof c=="function")Se=function(){c(He)};else if(typeof MessageChannel<"u"){var Tn=new MessageChannel,Pn=Tn.port2;Tn.port1.onmessage=He,Se=function(){Pn.postMessage(null)}}else Se=function(){_(He,0)};function st(j){k=j,C||(C=!0,Se())}function ge(j,I){P=_(function(){j(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,st(S))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(j){switch(h){case 1:case 2:case 3:var I=3;break;default:I=h}var R=h;h=I;try{return j()}finally{h=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,I){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var R=h;h=j;try{return I()}finally{h=R}},e.unstable_scheduleCallback=function(j,I,R){var K=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?K+R:K):R=K,j){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=R+ee,j={id:m++,callback:I,priorityLevel:j,startTime:R,expirationTime:ee,sortIndex:-1},R>K?(j.sortIndex=R,t(u,j),n(s)===null&&j===n(u)&&(g?(d(P),P=-1):g=!0,ge(v,R-K))):(j.sortIndex=ee,t(s,j),w||x||(w=!0,st(S))),j},e.unstable_shouldYield=X,e.unstable_wrapCallback=function(j){var I=h;return function(){var R=h;h=I;try{return j.apply(this,arguments)}finally{h=R}}}})(Rf);If.exports=Rf;var nm=If.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lf=E,Be=nm;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Of=new Set,Br={};function _n(e,t){Xn(e,t),Xn(e+"Capture",t)}function Xn(e,t){for(Br[e]=t,e=0;e<t.length;e++)Of.add(t[e])}var Ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),al=Object.prototype.hasOwnProperty,rm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pu={},$u={};function om(e){return al.call($u,e)?!0:al.call(Pu,e)?!1:rm.test(e)?$u[e]=!0:(Pu[e]=!0,!1)}function im(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function am(e,t,n,r){if(t===null||typeof t>"u"||im(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function je(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var _s=/[\-:]([a-z])/g;function Ss(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_s,Ss);he[t]=new je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_s,Ss);he[t]=new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_s,Ss);he[t]=new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function Es(e,t,n,r){var o=he.hasOwnProperty(t)?he[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(am(t,n,o,r)&&(n=null),r||o===null?om(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Nt=Lf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$o=Symbol.for("react.element"),Nn=Symbol.for("react.portal"),zn=Symbol.for("react.fragment"),Cs=Symbol.for("react.strict_mode"),ll=Symbol.for("react.profiler"),bf=Symbol.for("react.provider"),Mf=Symbol.for("react.context"),Ts=Symbol.for("react.forward_ref"),sl=Symbol.for("react.suspense"),ul=Symbol.for("react.suspense_list"),Ps=Symbol.for("react.memo"),Ot=Symbol.for("react.lazy"),Af=Symbol.for("react.offscreen"),ju=Symbol.iterator;function gr(e){return e===null||typeof e!="object"?null:(e=ju&&e[ju]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,ya;function Pr(e){if(ya===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ya=t&&t[1]||""}return`
`+ya+e}var va=!1;function xa(e,t){if(!e||va)return"";va=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{va=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Pr(e):""}function lm(e){switch(e.tag){case 5:return Pr(e.type);case 16:return Pr("Lazy");case 13:return Pr("Suspense");case 19:return Pr("SuspenseList");case 0:case 2:case 15:return e=xa(e.type,!1),e;case 11:return e=xa(e.type.render,!1),e;case 1:return e=xa(e.type,!0),e;default:return""}}function cl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case zn:return"Fragment";case Nn:return"Portal";case ll:return"Profiler";case Cs:return"StrictMode";case sl:return"Suspense";case ul:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Mf:return(e.displayName||"Context")+".Consumer";case bf:return(e._context.displayName||"Context")+".Provider";case Ts:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ps:return t=e.displayName||null,t!==null?t:cl(e.type)||"Memo";case Ot:t=e._payload,e=e._init;try{return cl(e(t))}catch{}}return null}function sm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cl(t);case 8:return t===Cs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Df(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function um(e){var t=Df(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function jo(e){e._valueTracker||(e._valueTracker=um(e))}function Ff(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Df(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function fi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fl(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Nu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Uf(e,t){t=t.checked,t!=null&&Es(e,"checked",t,!1)}function dl(e,t){Uf(e,t);var n=Zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?pl(e,t.type,n):t.hasOwnProperty("defaultValue")&&pl(e,t.type,Zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function zu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function pl(e,t,n){(t!=="number"||fi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var $r=Array.isArray;function Wn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Zt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ml(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Iu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if($r(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Zt(n)}}function Bf(e,t){var n=Zt(t.value),r=Zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ru(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Wf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Wf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var No,Vf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(No=No||document.createElement("div"),No.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=No.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ir={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cm=["Webkit","ms","Moz","O"];Object.keys(Ir).forEach(function(e){cm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ir[t]=Ir[e]})});function Hf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ir.hasOwnProperty(e)&&Ir[e]?(""+t).trim():t+"px"}function Qf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Hf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var fm=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gl(e,t){if(t){if(fm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function yl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vl=null;function $s(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xl=null,Vn=null,Hn=null;function Lu(e){if(e=yo(e)){if(typeof xl!="function")throw Error(T(280));var t=e.stateNode;t&&(t=Qi(t),xl(e.stateNode,e.type,t))}}function Gf(e){Vn?Hn?Hn.push(e):Hn=[e]:Vn=e}function Kf(){if(Vn){var e=Vn,t=Hn;if(Hn=Vn=null,Lu(e),t)for(e=0;e<t.length;e++)Lu(t[e])}}function Yf(e,t){return e(t)}function Xf(){}var wa=!1;function Jf(e,t,n){if(wa)return e(t,n);wa=!0;try{return Yf(e,t,n)}finally{wa=!1,(Vn!==null||Hn!==null)&&(Xf(),Kf())}}function Vr(e,t){var n=e.stateNode;if(n===null)return null;var r=Qi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var wl=!1;if(Ct)try{var yr={};Object.defineProperty(yr,"passive",{get:function(){wl=!0}}),window.addEventListener("test",yr,yr),window.removeEventListener("test",yr,yr)}catch{wl=!1}function dm(e,t,n,r,o,i,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(m){this.onError(m)}}var Rr=!1,di=null,pi=!1,kl=null,pm={onError:function(e){Rr=!0,di=e}};function mm(e,t,n,r,o,i,a,l,s){Rr=!1,di=null,dm.apply(pm,arguments)}function hm(e,t,n,r,o,i,a,l,s){if(mm.apply(this,arguments),Rr){if(Rr){var u=di;Rr=!1,di=null}else throw Error(T(198));pi||(pi=!0,kl=u)}}function Sn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ou(e){if(Sn(e)!==e)throw Error(T(188))}function gm(e){var t=e.alternate;if(!t){if(t=Sn(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ou(o),e;if(i===r)return Ou(o),t;i=i.sibling}throw Error(T(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function qf(e){return e=gm(e),e!==null?ed(e):null}function ed(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ed(e);if(t!==null)return t;e=e.sibling}return null}var td=Be.unstable_scheduleCallback,bu=Be.unstable_cancelCallback,ym=Be.unstable_shouldYield,vm=Be.unstable_requestPaint,ne=Be.unstable_now,xm=Be.unstable_getCurrentPriorityLevel,js=Be.unstable_ImmediatePriority,nd=Be.unstable_UserBlockingPriority,mi=Be.unstable_NormalPriority,wm=Be.unstable_LowPriority,rd=Be.unstable_IdlePriority,Bi=null,ht=null;function km(e){if(ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(Bi,e,void 0,(e.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:Em,_m=Math.log,Sm=Math.LN2;function Em(e){return e>>>=0,e===0?32:31-(_m(e)/Sm|0)|0}var zo=64,Io=4194304;function jr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function hi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~o;l!==0?r=jr(l):(i&=a,i!==0&&(r=jr(i)))}else a=n&~o,a!==0?r=jr(a):i!==0&&(r=jr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ot(t),o=1<<n,r|=e[n],t&=~o;return r}function Cm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-ot(i),l=1<<a,s=o[a];s===-1?(!(l&n)||l&r)&&(o[a]=Cm(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function _l(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function od(){var e=zo;return zo<<=1,!(zo&4194240)&&(zo=64),e}function ka(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ho(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ot(t),e[t]=n}function Pm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ot(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Ns(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var W=0;function id(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ad,zs,ld,sd,ud,Sl=!1,Ro=[],Bt=null,Wt=null,Vt=null,Hr=new Map,Qr=new Map,Mt=[],$m="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mu(e,t){switch(e){case"focusin":case"focusout":Bt=null;break;case"dragenter":case"dragleave":Wt=null;break;case"mouseover":case"mouseout":Vt=null;break;case"pointerover":case"pointerout":Hr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qr.delete(t.pointerId)}}function vr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=yo(t),t!==null&&zs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function jm(e,t,n,r,o){switch(t){case"focusin":return Bt=vr(Bt,e,t,n,r,o),!0;case"dragenter":return Wt=vr(Wt,e,t,n,r,o),!0;case"mouseover":return Vt=vr(Vt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Hr.set(i,vr(Hr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Qr.set(i,vr(Qr.get(i)||null,e,t,n,r,o)),!0}return!1}function cd(e){var t=sn(e.target);if(t!==null){var n=Sn(t);if(n!==null){if(t=n.tag,t===13){if(t=Zf(n),t!==null){e.blockedOn=t,ud(e.priority,function(){ld(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ko(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=El(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);vl=r,n.target.dispatchEvent(r),vl=null}else return t=yo(n),t!==null&&zs(t),e.blockedOn=n,!1;t.shift()}return!0}function Au(e,t,n){Ko(e)&&n.delete(t)}function Nm(){Sl=!1,Bt!==null&&Ko(Bt)&&(Bt=null),Wt!==null&&Ko(Wt)&&(Wt=null),Vt!==null&&Ko(Vt)&&(Vt=null),Hr.forEach(Au),Qr.forEach(Au)}function xr(e,t){e.blockedOn===t&&(e.blockedOn=null,Sl||(Sl=!0,Be.unstable_scheduleCallback(Be.unstable_NormalPriority,Nm)))}function Gr(e){function t(o){return xr(o,e)}if(0<Ro.length){xr(Ro[0],e);for(var n=1;n<Ro.length;n++){var r=Ro[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Bt!==null&&xr(Bt,e),Wt!==null&&xr(Wt,e),Vt!==null&&xr(Vt,e),Hr.forEach(t),Qr.forEach(t),n=0;n<Mt.length;n++)r=Mt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Mt.length&&(n=Mt[0],n.blockedOn===null);)cd(n),n.blockedOn===null&&Mt.shift()}var Qn=Nt.ReactCurrentBatchConfig,gi=!0;function zm(e,t,n,r){var o=W,i=Qn.transition;Qn.transition=null;try{W=1,Is(e,t,n,r)}finally{W=o,Qn.transition=i}}function Im(e,t,n,r){var o=W,i=Qn.transition;Qn.transition=null;try{W=4,Is(e,t,n,r)}finally{W=o,Qn.transition=i}}function Is(e,t,n,r){if(gi){var o=El(e,t,n,r);if(o===null)za(e,t,r,yi,n),Mu(e,r);else if(jm(o,e,t,n,r))r.stopPropagation();else if(Mu(e,r),t&4&&-1<$m.indexOf(e)){for(;o!==null;){var i=yo(o);if(i!==null&&ad(i),i=El(e,t,n,r),i===null&&za(e,t,r,yi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else za(e,t,r,null,n)}}var yi=null;function El(e,t,n,r){if(yi=null,e=$s(r),e=sn(e),e!==null)if(t=Sn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Zf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return yi=e,null}function fd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xm()){case js:return 1;case nd:return 4;case mi:case wm:return 16;case rd:return 536870912;default:return 16}default:return 16}}var Dt=null,Rs=null,Yo=null;function dd(){if(Yo)return Yo;var e,t=Rs,n=t.length,r,o="value"in Dt?Dt.value:Dt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Yo=o.slice(e,1<r?1-r:void 0)}function Xo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Lo(){return!0}function Du(){return!1}function Ve(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Lo:Du,this.isPropagationStopped=Du,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Lo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Lo)},persist:function(){},isPersistent:Lo}),t}var fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ls=Ve(fr),go=q({},fr,{view:0,detail:0}),Rm=Ve(go),_a,Sa,wr,Wi=q({},go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Os,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wr&&(wr&&e.type==="mousemove"?(_a=e.screenX-wr.screenX,Sa=e.screenY-wr.screenY):Sa=_a=0,wr=e),_a)},movementY:function(e){return"movementY"in e?e.movementY:Sa}}),Fu=Ve(Wi),Lm=q({},Wi,{dataTransfer:0}),Om=Ve(Lm),bm=q({},go,{relatedTarget:0}),Ea=Ve(bm),Mm=q({},fr,{animationName:0,elapsedTime:0,pseudoElement:0}),Am=Ve(Mm),Dm=q({},fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fm=Ve(Dm),Um=q({},fr,{data:0}),Uu=Ve(Um),Bm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vm[e])?!!t[e]:!1}function Os(){return Hm}var Qm=q({},go,{key:function(e){if(e.key){var t=Bm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Os,charCode:function(e){return e.type==="keypress"?Xo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gm=Ve(Qm),Km=q({},Wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bu=Ve(Km),Ym=q({},go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Os}),Xm=Ve(Ym),Jm=q({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zm=Ve(Jm),qm=q({},Wi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),eh=Ve(qm),th=[9,13,27,32],bs=Ct&&"CompositionEvent"in window,Lr=null;Ct&&"documentMode"in document&&(Lr=document.documentMode);var nh=Ct&&"TextEvent"in window&&!Lr,pd=Ct&&(!bs||Lr&&8<Lr&&11>=Lr),Wu=String.fromCharCode(32),Vu=!1;function md(e,t){switch(e){case"keyup":return th.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var In=!1;function rh(e,t){switch(e){case"compositionend":return hd(t);case"keypress":return t.which!==32?null:(Vu=!0,Wu);case"textInput":return e=t.data,e===Wu&&Vu?null:e;default:return null}}function oh(e,t){if(In)return e==="compositionend"||!bs&&md(e,t)?(e=dd(),Yo=Rs=Dt=null,In=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return pd&&t.locale!=="ko"?null:t.data;default:return null}}var ih={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ih[e.type]:t==="textarea"}function gd(e,t,n,r){Gf(r),t=vi(t,"onChange"),0<t.length&&(n=new Ls("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Or=null,Kr=null;function ah(e){Pd(e,0)}function Vi(e){var t=On(e);if(Ff(t))return e}function lh(e,t){if(e==="change")return t}var yd=!1;if(Ct){var Ca;if(Ct){var Ta="oninput"in document;if(!Ta){var Qu=document.createElement("div");Qu.setAttribute("oninput","return;"),Ta=typeof Qu.oninput=="function"}Ca=Ta}else Ca=!1;yd=Ca&&(!document.documentMode||9<document.documentMode)}function Gu(){Or&&(Or.detachEvent("onpropertychange",vd),Kr=Or=null)}function vd(e){if(e.propertyName==="value"&&Vi(Kr)){var t=[];gd(t,Kr,e,$s(e)),Jf(ah,t)}}function sh(e,t,n){e==="focusin"?(Gu(),Or=t,Kr=n,Or.attachEvent("onpropertychange",vd)):e==="focusout"&&Gu()}function uh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vi(Kr)}function ch(e,t){if(e==="click")return Vi(t)}function fh(e,t){if(e==="input"||e==="change")return Vi(t)}function dh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var lt=typeof Object.is=="function"?Object.is:dh;function Yr(e,t){if(lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!al.call(t,o)||!lt(e[o],t[o]))return!1}return!0}function Ku(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yu(e,t){var n=Ku(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ku(n)}}function xd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wd(){for(var e=window,t=fi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=fi(e.document)}return t}function Ms(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ph(e){var t=wd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&xd(n.ownerDocument.documentElement,n)){if(r!==null&&Ms(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Yu(n,i);var a=Yu(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mh=Ct&&"documentMode"in document&&11>=document.documentMode,Rn=null,Cl=null,br=null,Tl=!1;function Xu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tl||Rn==null||Rn!==fi(r)||(r=Rn,"selectionStart"in r&&Ms(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),br&&Yr(br,r)||(br=r,r=vi(Cl,"onSelect"),0<r.length&&(t=new Ls("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Rn)))}function Oo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ln={animationend:Oo("Animation","AnimationEnd"),animationiteration:Oo("Animation","AnimationIteration"),animationstart:Oo("Animation","AnimationStart"),transitionend:Oo("Transition","TransitionEnd")},Pa={},kd={};Ct&&(kd=document.createElement("div").style,"AnimationEvent"in window||(delete Ln.animationend.animation,delete Ln.animationiteration.animation,delete Ln.animationstart.animation),"TransitionEvent"in window||delete Ln.transitionend.transition);function Hi(e){if(Pa[e])return Pa[e];if(!Ln[e])return e;var t=Ln[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in kd)return Pa[e]=t[n];return e}var _d=Hi("animationend"),Sd=Hi("animationiteration"),Ed=Hi("animationstart"),Cd=Hi("transitionend"),Td=new Map,Ju="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function en(e,t){Td.set(e,t),_n(t,[e])}for(var $a=0;$a<Ju.length;$a++){var ja=Ju[$a],hh=ja.toLowerCase(),gh=ja[0].toUpperCase()+ja.slice(1);en(hh,"on"+gh)}en(_d,"onAnimationEnd");en(Sd,"onAnimationIteration");en(Ed,"onAnimationStart");en("dblclick","onDoubleClick");en("focusin","onFocus");en("focusout","onBlur");en(Cd,"onTransitionEnd");Xn("onMouseEnter",["mouseout","mouseover"]);Xn("onMouseLeave",["mouseout","mouseover"]);Xn("onPointerEnter",["pointerout","pointerover"]);Xn("onPointerLeave",["pointerout","pointerover"]);_n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_n("onBeforeInput",["compositionend","keypress","textInput","paste"]);_n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nr));function Zu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,hm(r,t,void 0,e),e.currentTarget=null}function Pd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;Zu(o,l,u),i=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;Zu(o,l,u),i=s}}}if(pi)throw e=kl,pi=!1,kl=null,e}function H(e,t){var n=t[zl];n===void 0&&(n=t[zl]=new Set);var r=e+"__bubble";n.has(r)||($d(t,e,2,!1),n.add(r))}function Na(e,t,n){var r=0;t&&(r|=4),$d(n,e,r,t)}var bo="_reactListening"+Math.random().toString(36).slice(2);function Xr(e){if(!e[bo]){e[bo]=!0,Of.forEach(function(n){n!=="selectionchange"&&(yh.has(n)||Na(n,!1,e),Na(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bo]||(t[bo]=!0,Na("selectionchange",!1,t))}}function $d(e,t,n,r){switch(fd(t)){case 1:var o=zm;break;case 4:o=Im;break;default:o=Is}n=o.bind(null,t,n,e),o=void 0,!wl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function za(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;l!==null;){if(a=sn(l),a===null)return;if(s=a.tag,s===5||s===6){r=i=a;continue e}l=l.parentNode}}r=r.return}Jf(function(){var u=i,m=$s(n),p=[];e:{var h=Td.get(e);if(h!==void 0){var x=Ls,w=e;switch(e){case"keypress":if(Xo(n)===0)break e;case"keydown":case"keyup":x=Gm;break;case"focusin":w="focus",x=Ea;break;case"focusout":w="blur",x=Ea;break;case"beforeblur":case"afterblur":x=Ea;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Fu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Om;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Xm;break;case _d:case Sd:case Ed:x=Am;break;case Cd:x=Zm;break;case"scroll":x=Rm;break;case"wheel":x=eh;break;case"copy":case"cut":case"paste":x=Fm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Bu}var g=(t&4)!==0,_=!g&&e==="scroll",d=g?h!==null?h+"Capture":null:h;g=[];for(var c=u,f;c!==null;){f=c;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,d!==null&&(v=Vr(c,d),v!=null&&g.push(Jr(c,v,f)))),_)break;c=c.return}0<g.length&&(h=new x(h,w,null,n,m),p.push({event:h,listeners:g}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",h&&n!==vl&&(w=n.relatedTarget||n.fromElement)&&(sn(w)||w[Tt]))break e;if((x||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,x?(w=n.relatedTarget||n.toElement,x=u,w=w?sn(w):null,w!==null&&(_=Sn(w),w!==_||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=u),x!==w)){if(g=Fu,v="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(g=Bu,v="onPointerLeave",d="onPointerEnter",c="pointer"),_=x==null?h:On(x),f=w==null?h:On(w),h=new g(v,c+"leave",x,n,m),h.target=_,h.relatedTarget=f,v=null,sn(m)===u&&(g=new g(d,c+"enter",w,n,m),g.target=f,g.relatedTarget=_,v=g),_=v,x&&w)t:{for(g=x,d=w,c=0,f=g;f;f=$n(f))c++;for(f=0,v=d;v;v=$n(v))f++;for(;0<c-f;)g=$n(g),c--;for(;0<f-c;)d=$n(d),f--;for(;c--;){if(g===d||d!==null&&g===d.alternate)break t;g=$n(g),d=$n(d)}g=null}else g=null;x!==null&&qu(p,h,x,g,!1),w!==null&&_!==null&&qu(p,_,w,g,!0)}}e:{if(h=u?On(u):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var S=lh;else if(Hu(h))if(yd)S=fh;else{S=uh;var C=sh}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=ch);if(S&&(S=S(e,u))){gd(p,S,n,m);break e}C&&C(e,h,u),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&pl(h,"number",h.value)}switch(C=u?On(u):window,e){case"focusin":(Hu(C)||C.contentEditable==="true")&&(Rn=C,Cl=u,br=null);break;case"focusout":br=Cl=Rn=null;break;case"mousedown":Tl=!0;break;case"contextmenu":case"mouseup":case"dragend":Tl=!1,Xu(p,n,m);break;case"selectionchange":if(mh)break;case"keydown":case"keyup":Xu(p,n,m)}var k;if(bs)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else In?md(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(pd&&n.locale!=="ko"&&(In||P!=="onCompositionStart"?P==="onCompositionEnd"&&In&&(k=dd()):(Dt=m,Rs="value"in Dt?Dt.value:Dt.textContent,In=!0)),C=vi(u,P),0<C.length&&(P=new Uu(P,e,null,n,m),p.push({event:P,listeners:C}),k?P.data=k:(k=hd(n),k!==null&&(P.data=k)))),(k=nh?rh(e,n):oh(e,n))&&(u=vi(u,"onBeforeInput"),0<u.length&&(m=new Uu("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:u}),m.data=k))}Pd(p,t)})}function Jr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function vi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Vr(e,n),i!=null&&r.unshift(Jr(e,i,o)),i=Vr(e,t),i!=null&&r.push(Jr(e,i,o))),e=e.return}return r}function $n(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qu(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,o?(s=Vr(n,i),s!=null&&a.unshift(Jr(n,s,l))):o||(s=Vr(n,i),s!=null&&a.push(Jr(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var vh=/\r\n?/g,xh=/\u0000|\uFFFD/g;function ec(e){return(typeof e=="string"?e:""+e).replace(vh,`
`).replace(xh,"")}function Mo(e,t,n){if(t=ec(t),ec(e)!==t&&n)throw Error(T(425))}function xi(){}var Pl=null,$l=null;function jl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Nl=typeof setTimeout=="function"?setTimeout:void 0,wh=typeof clearTimeout=="function"?clearTimeout:void 0,tc=typeof Promise=="function"?Promise:void 0,kh=typeof queueMicrotask=="function"?queueMicrotask:typeof tc<"u"?function(e){return tc.resolve(null).then(e).catch(_h)}:Nl;function _h(e){setTimeout(function(){throw e})}function Ia(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Gr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Gr(t)}function Ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function nc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var dr=Math.random().toString(36).slice(2),mt="__reactFiber$"+dr,Zr="__reactProps$"+dr,Tt="__reactContainer$"+dr,zl="__reactEvents$"+dr,Sh="__reactListeners$"+dr,Eh="__reactHandles$"+dr;function sn(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Tt]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=nc(e);e!==null;){if(n=e[mt])return n;e=nc(e)}return t}e=n,n=e.parentNode}return null}function yo(e){return e=e[mt]||e[Tt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function On(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function Qi(e){return e[Zr]||null}var Il=[],bn=-1;function tn(e){return{current:e}}function G(e){0>bn||(e.current=Il[bn],Il[bn]=null,bn--)}function V(e,t){bn++,Il[bn]=e.current,e.current=t}var qt={},_e=tn(qt),Ie=tn(!1),gn=qt;function Jn(e,t){var n=e.type.contextTypes;if(!n)return qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Re(e){return e=e.childContextTypes,e!=null}function wi(){G(Ie),G(_e)}function rc(e,t,n){if(_e.current!==qt)throw Error(T(168));V(_e,t),V(Ie,n)}function jd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(T(108,sm(e)||"Unknown",o));return q({},n,r)}function ki(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qt,gn=_e.current,V(_e,e),V(Ie,Ie.current),!0}function oc(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=jd(e,t,gn),r.__reactInternalMemoizedMergedChildContext=e,G(Ie),G(_e),V(_e,e)):G(Ie),V(Ie,n)}var kt=null,Gi=!1,Ra=!1;function Nd(e){kt===null?kt=[e]:kt.push(e)}function Ch(e){Gi=!0,Nd(e)}function nn(){if(!Ra&&kt!==null){Ra=!0;var e=0,t=W;try{var n=kt;for(W=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}kt=null,Gi=!1}catch(o){throw kt!==null&&(kt=kt.slice(e+1)),td(js,nn),o}finally{W=t,Ra=!1}}return null}var Mn=[],An=0,_i=null,Si=0,Ge=[],Ke=0,yn=null,_t=1,St="";function on(e,t){Mn[An++]=Si,Mn[An++]=_i,_i=e,Si=t}function zd(e,t,n){Ge[Ke++]=_t,Ge[Ke++]=St,Ge[Ke++]=yn,yn=e;var r=_t;e=St;var o=32-ot(r)-1;r&=~(1<<o),n+=1;var i=32-ot(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,_t=1<<32-ot(t)+o|n<<o|r,St=i+e}else _t=1<<i|n<<o|r,St=e}function As(e){e.return!==null&&(on(e,1),zd(e,1,0))}function Ds(e){for(;e===_i;)_i=Mn[--An],Mn[An]=null,Si=Mn[--An],Mn[An]=null;for(;e===yn;)yn=Ge[--Ke],Ge[Ke]=null,St=Ge[--Ke],Ge[Ke]=null,_t=Ge[--Ke],Ge[Ke]=null}var Fe=null,De=null,Y=!1,rt=null;function Id(e,t){var n=Ye(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ic(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Fe=e,De=Ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Fe=e,De=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=yn!==null?{id:_t,overflow:St}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ye(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Fe=e,De=null,!0):!1;default:return!1}}function Rl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ll(e){if(Y){var t=De;if(t){var n=t;if(!ic(e,t)){if(Rl(e))throw Error(T(418));t=Ht(n.nextSibling);var r=Fe;t&&ic(e,t)?Id(r,n):(e.flags=e.flags&-4097|2,Y=!1,Fe=e)}}else{if(Rl(e))throw Error(T(418));e.flags=e.flags&-4097|2,Y=!1,Fe=e}}}function ac(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Fe=e}function Ao(e){if(e!==Fe)return!1;if(!Y)return ac(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!jl(e.type,e.memoizedProps)),t&&(t=De)){if(Rl(e))throw Rd(),Error(T(418));for(;t;)Id(e,t),t=Ht(t.nextSibling)}if(ac(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){De=Ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}De=null}}else De=Fe?Ht(e.stateNode.nextSibling):null;return!0}function Rd(){for(var e=De;e;)e=Ht(e.nextSibling)}function Zn(){De=Fe=null,Y=!1}function Fs(e){rt===null?rt=[e]:rt.push(e)}var Th=Nt.ReactCurrentBatchConfig;function tt(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ei=tn(null),Ci=null,Dn=null,Us=null;function Bs(){Us=Dn=Ci=null}function Ws(e){var t=Ei.current;G(Ei),e._currentValue=t}function Ol(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Gn(e,t){Ci=e,Us=Dn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ze=!0),e.firstContext=null)}function Je(e){var t=e._currentValue;if(Us!==e)if(e={context:e,memoizedValue:t,next:null},Dn===null){if(Ci===null)throw Error(T(308));Dn=e,Ci.dependencies={lanes:0,firstContext:e}}else Dn=Dn.next=e;return t}var un=null;function Vs(e){un===null?un=[e]:un.push(e)}function Ld(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Vs(t)):(n.next=o.next,o.next=n),t.interleaved=n,Pt(e,r)}function Pt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var bt=!1;function Hs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Od(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Qt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Pt(e,n)}return o=r.interleaved,o===null?(t.next=t,Vs(r)):(t.next=o.next,o.next=t),r.interleaved=t,Pt(e,n)}function Jo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ns(e,n)}}function lc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ti(e,t,n,r){var o=e.updateQueue;bt=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?i=u:a.next=u,a=s;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==a&&(l===null?m.firstBaseUpdate=u:l.next=u,m.lastBaseUpdate=s))}if(i!==null){var p=o.baseState;a=0,m=u=s=null,l=i;do{var h=l.lane,x=l.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,g=l;switch(h=t,x=n,g.tag){case 1:if(w=g.payload,typeof w=="function"){p=w.call(x,p,h);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=g.payload,h=typeof w=="function"?w.call(x,p,h):w,h==null)break e;p=q({},p,h);break e;case 2:bt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[l]:h.push(l))}else x={eventTime:x,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(u=m=x,s=p):m=m.next=x,a|=h;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;h=l,l=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(1);if(m===null&&(s=p),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=m,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);xn|=a,e.lanes=a,e.memoizedState=p}}function sc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(T(191,o));o.call(r)}}}var bd=new Lf.Component().refs;function bl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ki={isMounted:function(e){return(e=e._reactInternals)?Sn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Pe(),o=Kt(e),i=Et(r,o);i.payload=t,n!=null&&(i.callback=n),t=Qt(e,i,o),t!==null&&(it(t,e,o,r),Jo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Pe(),o=Kt(e),i=Et(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Qt(e,i,o),t!==null&&(it(t,e,o,r),Jo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Pe(),r=Kt(e),o=Et(n,r);o.tag=2,t!=null&&(o.callback=t),t=Qt(e,o,r),t!==null&&(it(t,e,r,n),Jo(t,e,r))}};function uc(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Yr(n,r)||!Yr(o,i):!0}function Md(e,t,n){var r=!1,o=qt,i=t.contextType;return typeof i=="object"&&i!==null?i=Je(i):(o=Re(t)?gn:_e.current,r=t.contextTypes,i=(r=r!=null)?Jn(e,o):qt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ki,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function cc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ki.enqueueReplaceState(t,t.state,null)}function Ml(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=bd,Hs(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Je(i):(i=Re(t)?gn:_e.current,o.context=Jn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(bl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ki.enqueueReplaceState(o,o.state,null),Ti(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function kr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=o.refs;l===bd&&(l=o.refs={}),a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function Do(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fc(e){var t=e._init;return t(e._payload)}function Ad(e){function t(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function o(d,c){return d=Yt(d,c),d.index=0,d.sibling=null,d}function i(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function a(d){return e&&d.alternate===null&&(d.flags|=2),d}function l(d,c,f,v){return c===null||c.tag!==6?(c=Fa(f,d.mode,v),c.return=d,c):(c=o(c,f),c.return=d,c)}function s(d,c,f,v){var S=f.type;return S===zn?m(d,c,f.props.children,v,f.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ot&&fc(S)===c.type)?(v=o(c,f.props),v.ref=kr(d,c,f),v.return=d,v):(v=ri(f.type,f.key,f.props,null,d.mode,v),v.ref=kr(d,c,f),v.return=d,v)}function u(d,c,f,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=Ua(f,d.mode,v),c.return=d,c):(c=o(c,f.children||[]),c.return=d,c)}function m(d,c,f,v,S){return c===null||c.tag!==7?(c=pn(f,d.mode,v,S),c.return=d,c):(c=o(c,f),c.return=d,c)}function p(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Fa(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case $o:return f=ri(c.type,c.key,c.props,null,d.mode,f),f.ref=kr(d,null,c),f.return=d,f;case Nn:return c=Ua(c,d.mode,f),c.return=d,c;case Ot:var v=c._init;return p(d,v(c._payload),f)}if($r(c)||gr(c))return c=pn(c,d.mode,f,null),c.return=d,c;Do(d,c)}return null}function h(d,c,f,v){var S=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:l(d,c,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case $o:return f.key===S?s(d,c,f,v):null;case Nn:return f.key===S?u(d,c,f,v):null;case Ot:return S=f._init,h(d,c,S(f._payload),v)}if($r(f)||gr(f))return S!==null?null:m(d,c,f,v,null);Do(d,f)}return null}function x(d,c,f,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(f)||null,l(c,d,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case $o:return d=d.get(v.key===null?f:v.key)||null,s(c,d,v,S);case Nn:return d=d.get(v.key===null?f:v.key)||null,u(c,d,v,S);case Ot:var C=v._init;return x(d,c,f,C(v._payload),S)}if($r(v)||gr(v))return d=d.get(f)||null,m(c,d,v,S,null);Do(c,v)}return null}function w(d,c,f,v){for(var S=null,C=null,k=c,P=c=0,L=null;k!==null&&P<f.length;P++){k.index>P?(L=k,k=null):L=k.sibling;var z=h(d,k,f[P],v);if(z===null){k===null&&(k=L);break}e&&k&&z.alternate===null&&t(d,k),c=i(z,c,P),C===null?S=z:C.sibling=z,C=z,k=L}if(P===f.length)return n(d,k),Y&&on(d,P),S;if(k===null){for(;P<f.length;P++)k=p(d,f[P],v),k!==null&&(c=i(k,c,P),C===null?S=k:C.sibling=k,C=k);return Y&&on(d,P),S}for(k=r(d,k);P<f.length;P++)L=x(k,d,P,f[P],v),L!==null&&(e&&L.alternate!==null&&k.delete(L.key===null?P:L.key),c=i(L,c,P),C===null?S=L:C.sibling=L,C=L);return e&&k.forEach(function(X){return t(d,X)}),Y&&on(d,P),S}function g(d,c,f,v){var S=gr(f);if(typeof S!="function")throw Error(T(150));if(f=S.call(f),f==null)throw Error(T(151));for(var C=S=null,k=c,P=c=0,L=null,z=f.next();k!==null&&!z.done;P++,z=f.next()){k.index>P?(L=k,k=null):L=k.sibling;var X=h(d,k,z.value,v);if(X===null){k===null&&(k=L);break}e&&k&&X.alternate===null&&t(d,k),c=i(X,c,P),C===null?S=X:C.sibling=X,C=X,k=L}if(z.done)return n(d,k),Y&&on(d,P),S;if(k===null){for(;!z.done;P++,z=f.next())z=p(d,z.value,v),z!==null&&(c=i(z,c,P),C===null?S=z:C.sibling=z,C=z);return Y&&on(d,P),S}for(k=r(d,k);!z.done;P++,z=f.next())z=x(k,d,P,z.value,v),z!==null&&(e&&z.alternate!==null&&k.delete(z.key===null?P:z.key),c=i(z,c,P),C===null?S=z:C.sibling=z,C=z);return e&&k.forEach(function(He){return t(d,He)}),Y&&on(d,P),S}function _(d,c,f,v){if(typeof f=="object"&&f!==null&&f.type===zn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case $o:e:{for(var S=f.key,C=c;C!==null;){if(C.key===S){if(S=f.type,S===zn){if(C.tag===7){n(d,C.sibling),c=o(C,f.props.children),c.return=d,d=c;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ot&&fc(S)===C.type){n(d,C.sibling),c=o(C,f.props),c.ref=kr(d,C,f),c.return=d,d=c;break e}n(d,C);break}else t(d,C);C=C.sibling}f.type===zn?(c=pn(f.props.children,d.mode,v,f.key),c.return=d,d=c):(v=ri(f.type,f.key,f.props,null,d.mode,v),v.ref=kr(d,c,f),v.return=d,d=v)}return a(d);case Nn:e:{for(C=f.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(d,c.sibling),c=o(c,f.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=Ua(f,d.mode,v),c.return=d,d=c}return a(d);case Ot:return C=f._init,_(d,c,C(f._payload),v)}if($r(f))return w(d,c,f,v);if(gr(f))return g(d,c,f,v);Do(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(d,c.sibling),c=o(c,f),c.return=d,d=c):(n(d,c),c=Fa(f,d.mode,v),c.return=d,d=c),a(d)):n(d,c)}return _}var qn=Ad(!0),Dd=Ad(!1),vo={},gt=tn(vo),qr=tn(vo),eo=tn(vo);function cn(e){if(e===vo)throw Error(T(174));return e}function Qs(e,t){switch(V(eo,t),V(qr,e),V(gt,vo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:hl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=hl(t,e)}G(gt),V(gt,t)}function er(){G(gt),G(qr),G(eo)}function Fd(e){cn(eo.current);var t=cn(gt.current),n=hl(t,e.type);t!==n&&(V(qr,e),V(gt,n))}function Gs(e){qr.current===e&&(G(gt),G(qr))}var J=tn(0);function Pi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var La=[];function Ks(){for(var e=0;e<La.length;e++)La[e]._workInProgressVersionPrimary=null;La.length=0}var Zo=Nt.ReactCurrentDispatcher,Oa=Nt.ReactCurrentBatchConfig,vn=0,Z=null,le=null,ue=null,$i=!1,Mr=!1,to=0,Ph=0;function ye(){throw Error(T(321))}function Ys(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lt(e[n],t[n]))return!1;return!0}function Xs(e,t,n,r,o,i){if(vn=i,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Zo.current=e===null||e.memoizedState===null?zh:Ih,e=n(r,o),Mr){i=0;do{if(Mr=!1,to=0,25<=i)throw Error(T(301));i+=1,ue=le=null,t.updateQueue=null,Zo.current=Rh,e=n(r,o)}while(Mr)}if(Zo.current=ji,t=le!==null&&le.next!==null,vn=0,ue=le=Z=null,$i=!1,t)throw Error(T(300));return e}function Js(){var e=to!==0;return to=0,e}function ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?Z.memoizedState=ue=e:ue=ue.next=e,ue}function Ze(){if(le===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=ue===null?Z.memoizedState:ue.next;if(t!==null)ue=t,le=e;else{if(e===null)throw Error(T(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},ue===null?Z.memoizedState=ue=e:ue=ue.next=e}return ue}function no(e,t){return typeof t=="function"?t(e):t}function ba(e){var t=Ze(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=le,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,s=null,u=i;do{var m=u.lane;if((vn&m)===m)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=p,a=r):s=s.next=p,Z.lanes|=m,xn|=m}u=u.next}while(u!==null&&u!==i);s===null?a=r:s.next=l,lt(r,t.memoizedState)||(ze=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Z.lanes|=i,xn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ma(e){var t=Ze(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);lt(i,t.memoizedState)||(ze=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Ud(){}function Bd(e,t){var n=Z,r=Ze(),o=t(),i=!lt(r.memoizedState,o);if(i&&(r.memoizedState=o,ze=!0),r=r.queue,Zs(Hd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,ro(9,Vd.bind(null,n,r,o,t),void 0,null),fe===null)throw Error(T(349));vn&30||Wd(n,t,o)}return o}function Wd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vd(e,t,n,r){t.value=n,t.getSnapshot=r,Qd(t)&&Gd(e)}function Hd(e,t,n){return n(function(){Qd(t)&&Gd(e)})}function Qd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lt(e,n)}catch{return!0}}function Gd(e){var t=Pt(e,1);t!==null&&it(t,e,1,-1)}function dc(e){var t=ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:no,lastRenderedState:e},t.queue=e,e=e.dispatch=Nh.bind(null,Z,e),[t.memoizedState,e]}function ro(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Kd(){return Ze().memoizedState}function qo(e,t,n,r){var o=ct();Z.flags|=e,o.memoizedState=ro(1|t,n,void 0,r===void 0?null:r)}function Yi(e,t,n,r){var o=Ze();r=r===void 0?null:r;var i=void 0;if(le!==null){var a=le.memoizedState;if(i=a.destroy,r!==null&&Ys(r,a.deps)){o.memoizedState=ro(t,n,i,r);return}}Z.flags|=e,o.memoizedState=ro(1|t,n,i,r)}function pc(e,t){return qo(8390656,8,e,t)}function Zs(e,t){return Yi(2048,8,e,t)}function Yd(e,t){return Yi(4,2,e,t)}function Xd(e,t){return Yi(4,4,e,t)}function Jd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zd(e,t,n){return n=n!=null?n.concat([e]):null,Yi(4,4,Jd.bind(null,t,e),n)}function qs(){}function qd(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ys(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ep(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ys(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function tp(e,t,n){return vn&21?(lt(n,t)||(n=od(),Z.lanes|=n,xn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ze=!0),e.memoizedState=n)}function $h(e,t){var n=W;W=n!==0&&4>n?n:4,e(!0);var r=Oa.transition;Oa.transition={};try{e(!1),t()}finally{W=n,Oa.transition=r}}function np(){return Ze().memoizedState}function jh(e,t,n){var r=Kt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rp(e))op(t,n);else if(n=Ld(e,t,n,r),n!==null){var o=Pe();it(n,e,r,o),ip(n,t,r)}}function Nh(e,t,n){var r=Kt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rp(e))op(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,lt(l,a)){var s=t.interleaved;s===null?(o.next=o,Vs(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Ld(e,t,o,r),n!==null&&(o=Pe(),it(n,e,r,o),ip(n,t,r))}}function rp(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function op(e,t){Mr=$i=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ip(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ns(e,n)}}var ji={readContext:Je,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},zh={readContext:Je,useCallback:function(e,t){return ct().memoizedState=[e,t===void 0?null:t],e},useContext:Je,useEffect:pc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,qo(4194308,4,Jd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return qo(4194308,4,e,t)},useInsertionEffect:function(e,t){return qo(4,2,e,t)},useMemo:function(e,t){var n=ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=jh.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=ct();return e={current:e},t.memoizedState=e},useState:dc,useDebugValue:qs,useDeferredValue:function(e){return ct().memoizedState=e},useTransition:function(){var e=dc(!1),t=e[0];return e=$h.bind(null,e[1]),ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Z,o=ct();if(Y){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),fe===null)throw Error(T(349));vn&30||Wd(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,pc(Hd.bind(null,r,i,e),[e]),r.flags|=2048,ro(9,Vd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ct(),t=fe.identifierPrefix;if(Y){var n=St,r=_t;n=(r&~(1<<32-ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=to++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ph++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ih={readContext:Je,useCallback:qd,useContext:Je,useEffect:Zs,useImperativeHandle:Zd,useInsertionEffect:Yd,useLayoutEffect:Xd,useMemo:ep,useReducer:ba,useRef:Kd,useState:function(){return ba(no)},useDebugValue:qs,useDeferredValue:function(e){var t=Ze();return tp(t,le.memoizedState,e)},useTransition:function(){var e=ba(no)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:Ud,useSyncExternalStore:Bd,useId:np,unstable_isNewReconciler:!1},Rh={readContext:Je,useCallback:qd,useContext:Je,useEffect:Zs,useImperativeHandle:Zd,useInsertionEffect:Yd,useLayoutEffect:Xd,useMemo:ep,useReducer:Ma,useRef:Kd,useState:function(){return Ma(no)},useDebugValue:qs,useDeferredValue:function(e){var t=Ze();return le===null?t.memoizedState=e:tp(t,le.memoizedState,e)},useTransition:function(){var e=Ma(no)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:Ud,useSyncExternalStore:Bd,useId:np,unstable_isNewReconciler:!1};function tr(e,t){try{var n="",r=t;do n+=lm(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Aa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Al(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Lh=typeof WeakMap=="function"?WeakMap:Map;function ap(e,t,n){n=Et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){zi||(zi=!0,Kl=r),Al(e,t)},n}function lp(e,t,n){n=Et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Al(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Al(e,t),typeof r!="function"&&(Gt===null?Gt=new Set([this]):Gt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function mc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Lh;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Kh.bind(null,e,t,n),t.then(e,e))}function hc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function gc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Et(-1,1),t.tag=2,Qt(n,t,1))),n.lanes|=1),e)}var Oh=Nt.ReactCurrentOwner,ze=!1;function Ce(e,t,n,r){t.child=e===null?Dd(t,null,n,r):qn(t,e.child,n,r)}function yc(e,t,n,r,o){n=n.render;var i=t.ref;return Gn(t,o),r=Xs(e,t,n,r,i,o),n=Js(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,$t(e,t,o)):(Y&&n&&As(t),t.flags|=1,Ce(e,t,r,o),t.child)}function vc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!lu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,sp(e,t,i,r,o)):(e=ri(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Yr,n(a,r)&&e.ref===t.ref)return $t(e,t,o)}return t.flags|=1,e=Yt(i,r),e.ref=t.ref,e.return=t,t.child=e}function sp(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Yr(i,r)&&e.ref===t.ref)if(ze=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(ze=!0);else return t.lanes=e.lanes,$t(e,t,o)}return Dl(e,t,n,r,o)}function up(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(Un,Ae),Ae|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(Un,Ae),Ae|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,V(Un,Ae),Ae|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,V(Un,Ae),Ae|=r;return Ce(e,t,o,n),t.child}function cp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Dl(e,t,n,r,o){var i=Re(n)?gn:_e.current;return i=Jn(t,i),Gn(t,o),n=Xs(e,t,n,r,i,o),r=Js(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,$t(e,t,o)):(Y&&r&&As(t),t.flags|=1,Ce(e,t,n,o),t.child)}function xc(e,t,n,r,o){if(Re(n)){var i=!0;ki(t)}else i=!1;if(Gn(t,o),t.stateNode===null)ei(e,t),Md(t,n,r),Ml(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Je(u):(u=Re(n)?gn:_e.current,u=Jn(t,u));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&cc(t,a,r,u),bt=!1;var h=t.memoizedState;a.state=h,Ti(t,r,a,o),s=t.memoizedState,l!==r||h!==s||Ie.current||bt?(typeof m=="function"&&(bl(t,n,m,r),s=t.memoizedState),(l=bt||uc(t,n,l,r,h,s,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Od(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:tt(t.type,l),a.props=u,p=t.pendingProps,h=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Je(s):(s=Re(n)?gn:_e.current,s=Jn(t,s));var x=n.getDerivedStateFromProps;(m=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||h!==s)&&cc(t,a,r,s),bt=!1,h=t.memoizedState,a.state=h,Ti(t,r,a,o);var w=t.memoizedState;l!==p||h!==w||Ie.current||bt?(typeof x=="function"&&(bl(t,n,x,r),w=t.memoizedState),(u=bt||uc(t,n,u,r,h,w,s)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,w,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,w,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),a.props=r,a.state=w,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Fl(e,t,n,r,i,o)}function Fl(e,t,n,r,o,i){cp(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&oc(t,n,!1),$t(e,t,i);r=t.stateNode,Oh.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=qn(t,e.child,null,i),t.child=qn(t,null,l,i)):Ce(e,t,l,i),t.memoizedState=r.state,o&&oc(t,n,!0),t.child}function fp(e){var t=e.stateNode;t.pendingContext?rc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&rc(e,t.context,!1),Qs(e,t.containerInfo)}function wc(e,t,n,r,o){return Zn(),Fs(o),t.flags|=256,Ce(e,t,n,r),t.child}var Ul={dehydrated:null,treeContext:null,retryLane:0};function Bl(e){return{baseLanes:e,cachePool:null,transitions:null}}function dp(e,t,n){var r=t.pendingProps,o=J.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),V(J,o&1),e===null)return Ll(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Zi(a,r,0,null),e=pn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Bl(n),t.memoizedState=Ul,e):eu(t,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return bh(e,t,a,r,l,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Yt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=Yt(l,i):(i=pn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Bl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Ul,r}return i=e.child,e=i.sibling,r=Yt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function eu(e,t){return t=Zi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Fo(e,t,n,r){return r!==null&&Fs(r),qn(t,e.child,null,n),e=eu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bh(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Aa(Error(T(422))),Fo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Zi({mode:"visible",children:r.children},o,0,null),i=pn(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&qn(t,e.child,null,a),t.child.memoizedState=Bl(a),t.memoizedState=Ul,i);if(!(t.mode&1))return Fo(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(T(419)),r=Aa(i,r,void 0),Fo(e,t,a,r)}if(l=(a&e.childLanes)!==0,ze||l){if(r=fe,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Pt(e,o),it(r,e,o,-1))}return au(),r=Aa(Error(T(421))),Fo(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Yh.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,De=Ht(o.nextSibling),Fe=t,Y=!0,rt=null,e!==null&&(Ge[Ke++]=_t,Ge[Ke++]=St,Ge[Ke++]=yn,_t=e.id,St=e.overflow,yn=t),t=eu(t,r.children),t.flags|=4096,t)}function kc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ol(e.return,t,n)}function Da(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function pp(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ce(e,t,r.children,n),r=J.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kc(e,n,t);else if(e.tag===19)kc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(J,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Pi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Da(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Pi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Da(t,!0,n,null,i);break;case"together":Da(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ei(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function $t(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),xn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=Yt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mh(e,t,n){switch(t.tag){case 3:fp(t),Zn();break;case 5:Fd(t);break;case 1:Re(t.type)&&ki(t);break;case 4:Qs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;V(Ei,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(J,J.current&1),t.flags|=128,null):n&t.child.childLanes?dp(e,t,n):(V(J,J.current&1),e=$t(e,t,n),e!==null?e.sibling:null);V(J,J.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return pp(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),V(J,J.current),r)break;return null;case 22:case 23:return t.lanes=0,up(e,t,n)}return $t(e,t,n)}var mp,Wl,hp,gp;mp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wl=function(){};hp=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,cn(gt.current);var i=null;switch(n){case"input":o=fl(e,o),r=fl(e,r),i=[];break;case"select":o=q({},o,{value:void 0}),r=q({},r,{value:void 0}),i=[];break;case"textarea":o=ml(e,o),r=ml(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=xi)}gl(n,r);var a;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Br.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Br.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&H("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};gp=function(e,t,n,r){n!==r&&(t.flags|=4)};function _r(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ah(e,t,n){var r=t.pendingProps;switch(Ds(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return Re(t.type)&&wi(),ve(t),null;case 3:return r=t.stateNode,er(),G(Ie),G(_e),Ks(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ao(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,rt!==null&&(Jl(rt),rt=null))),Wl(e,t),ve(t),null;case 5:Gs(t);var o=cn(eo.current);if(n=t.type,e!==null&&t.stateNode!=null)hp(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return ve(t),null}if(e=cn(gt.current),Ao(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[mt]=t,r[Zr]=i,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(o=0;o<Nr.length;o++)H(Nr[o],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":Nu(r,i),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},H("invalid",r);break;case"textarea":Iu(r,i),H("invalid",r)}gl(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Mo(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Mo(r.textContent,l,e),o=["children",""+l]):Br.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&H("scroll",r)}switch(n){case"input":jo(r),zu(r,i,!0);break;case"textarea":jo(r),Ru(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=xi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[mt]=t,e[Zr]=r,mp(e,t,!1,!1),t.stateNode=e;e:{switch(a=yl(n,r),n){case"dialog":H("cancel",e),H("close",e),o=r;break;case"iframe":case"object":case"embed":H("load",e),o=r;break;case"video":case"audio":for(o=0;o<Nr.length;o++)H(Nr[o],e);o=r;break;case"source":H("error",e),o=r;break;case"img":case"image":case"link":H("error",e),H("load",e),o=r;break;case"details":H("toggle",e),o=r;break;case"input":Nu(e,r),o=fl(e,r),H("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=q({},r,{value:void 0}),H("invalid",e);break;case"textarea":Iu(e,r),o=ml(e,r),H("invalid",e);break;default:o=r}gl(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?Qf(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Vf(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Wr(e,s):typeof s=="number"&&Wr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Br.hasOwnProperty(i)?s!=null&&i==="onScroll"&&H("scroll",e):s!=null&&Es(e,i,s,a))}switch(n){case"input":jo(e),zu(e,r,!1);break;case"textarea":jo(e),Ru(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Zt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Wn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Wn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=xi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)gp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=cn(eo.current),cn(gt.current),Ao(t)){if(r=t.stateNode,n=t.memoizedProps,r[mt]=t,(i=r.nodeValue!==n)&&(e=Fe,e!==null))switch(e.tag){case 3:Mo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mt]=t,t.stateNode=r}return ve(t),null;case 13:if(G(J),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&De!==null&&t.mode&1&&!(t.flags&128))Rd(),Zn(),t.flags|=98560,i=!1;else if(i=Ao(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(T(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(T(317));i[mt]=t}else Zn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),i=!1}else rt!==null&&(Jl(rt),rt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||J.current&1?se===0&&(se=3):au())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return er(),Wl(e,t),e===null&&Xr(t.stateNode.containerInfo),ve(t),null;case 10:return Ws(t.type._context),ve(t),null;case 17:return Re(t.type)&&wi(),ve(t),null;case 19:if(G(J),i=t.memoizedState,i===null)return ve(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)_r(i,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Pi(e),a!==null){for(t.flags|=128,_r(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(J,J.current&1|2),t.child}e=e.sibling}i.tail!==null&&ne()>nr&&(t.flags|=128,r=!0,_r(i,!1),t.lanes=4194304)}else{if(!r)if(e=Pi(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),_r(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!Y)return ve(t),null}else 2*ne()-i.renderingStartTime>nr&&n!==1073741824&&(t.flags|=128,r=!0,_r(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ne(),t.sibling=null,n=J.current,V(J,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return iu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ae&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function Dh(e,t){switch(Ds(t),t.tag){case 1:return Re(t.type)&&wi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return er(),G(Ie),G(_e),Ks(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Gs(t),null;case 13:if(G(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));Zn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(J),null;case 4:return er(),null;case 10:return Ws(t.type._context),null;case 22:case 23:return iu(),null;case 24:return null;default:return null}}var Uo=!1,we=!1,Fh=typeof WeakSet=="function"?WeakSet:Set,N=null;function Fn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(e,t,r)}else n.current=null}function Vl(e,t,n){try{n()}catch(r){te(e,t,r)}}var _c=!1;function Uh(e,t){if(Pl=gi,e=wd(),Ms(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,m=0,p=e,h=null;t:for(;;){for(var x;p!==n||o!==0&&p.nodeType!==3||(l=a+o),p!==i||r!==0&&p.nodeType!==3||(s=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(x=p.firstChild)!==null;)h=p,p=x;for(;;){if(p===e)break t;if(h===n&&++u===o&&(l=a),h===i&&++m===r&&(s=a),(x=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=x}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for($l={focusedElem:e,selectionRange:n},gi=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var g=w.memoizedProps,_=w.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?g:tt(t.type,g),_);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(v){te(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return w=_c,_c=!1,w}function Ar(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Vl(t,n,i)}o=o.next}while(o!==r)}}function Xi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Hl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function yp(e){var t=e.alternate;t!==null&&(e.alternate=null,yp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mt],delete t[Zr],delete t[zl],delete t[Sh],delete t[Eh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function vp(e){return e.tag===5||e.tag===3||e.tag===4}function Sc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ql(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=xi));else if(r!==4&&(e=e.child,e!==null))for(Ql(e,t,n),e=e.sibling;e!==null;)Ql(e,t,n),e=e.sibling}function Gl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Gl(e,t,n),e=e.sibling;e!==null;)Gl(e,t,n),e=e.sibling}var de=null,nt=!1;function Rt(e,t,n){for(n=n.child;n!==null;)xp(e,t,n),n=n.sibling}function xp(e,t,n){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(Bi,n)}catch{}switch(n.tag){case 5:we||Fn(n,t);case 6:var r=de,o=nt;de=null,Rt(e,t,n),de=r,nt=o,de!==null&&(nt?(e=de,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):de.removeChild(n.stateNode));break;case 18:de!==null&&(nt?(e=de,n=n.stateNode,e.nodeType===8?Ia(e.parentNode,n):e.nodeType===1&&Ia(e,n),Gr(e)):Ia(de,n.stateNode));break;case 4:r=de,o=nt,de=n.stateNode.containerInfo,nt=!0,Rt(e,t,n),de=r,nt=o;break;case 0:case 11:case 14:case 15:if(!we&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Vl(n,t,a),o=o.next}while(o!==r)}Rt(e,t,n);break;case 1:if(!we&&(Fn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){te(n,t,l)}Rt(e,t,n);break;case 21:Rt(e,t,n);break;case 22:n.mode&1?(we=(r=we)||n.memoizedState!==null,Rt(e,t,n),we=r):Rt(e,t,n);break;default:Rt(e,t,n)}}function Ec(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Fh),t.forEach(function(r){var o=Xh.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function et(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:de=l.stateNode,nt=!1;break e;case 3:de=l.stateNode.containerInfo,nt=!0;break e;case 4:de=l.stateNode.containerInfo,nt=!0;break e}l=l.return}if(de===null)throw Error(T(160));xp(i,a,o),de=null,nt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){te(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)wp(t,e),t=t.sibling}function wp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(et(t,e),ut(e),r&4){try{Ar(3,e,e.return),Xi(3,e)}catch(g){te(e,e.return,g)}try{Ar(5,e,e.return)}catch(g){te(e,e.return,g)}}break;case 1:et(t,e),ut(e),r&512&&n!==null&&Fn(n,n.return);break;case 5:if(et(t,e),ut(e),r&512&&n!==null&&Fn(n,n.return),e.flags&32){var o=e.stateNode;try{Wr(o,"")}catch(g){te(e,e.return,g)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Uf(o,i),yl(l,a);var u=yl(l,i);for(a=0;a<s.length;a+=2){var m=s[a],p=s[a+1];m==="style"?Qf(o,p):m==="dangerouslySetInnerHTML"?Vf(o,p):m==="children"?Wr(o,p):Es(o,m,p,u)}switch(l){case"input":dl(o,i);break;case"textarea":Bf(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Wn(o,!!i.multiple,x,!1):h!==!!i.multiple&&(i.defaultValue!=null?Wn(o,!!i.multiple,i.defaultValue,!0):Wn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Zr]=i}catch(g){te(e,e.return,g)}}break;case 6:if(et(t,e),ut(e),r&4){if(e.stateNode===null)throw Error(T(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(g){te(e,e.return,g)}}break;case 3:if(et(t,e),ut(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gr(t.containerInfo)}catch(g){te(e,e.return,g)}break;case 4:et(t,e),ut(e);break;case 13:et(t,e),ut(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(ru=ne())),r&4&&Ec(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(we=(u=we)||m,et(t,e),we=u):et(t,e),ut(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(N=e,m=e.child;m!==null;){for(p=N=m;N!==null;){switch(h=N,x=h.child,h.tag){case 0:case 11:case 14:case 15:Ar(4,h,h.return);break;case 1:Fn(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(g){te(r,n,g)}}break;case 5:Fn(h,h.return);break;case 22:if(h.memoizedState!==null){Tc(p);continue}}x!==null?(x.return=h,N=x):Tc(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{o=p.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,s=p.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Hf("display",a))}catch(g){te(e,e.return,g)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(g){te(e,e.return,g)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:et(t,e),ut(e),r&4&&Ec(e);break;case 21:break;default:et(t,e),ut(e)}}function ut(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(vp(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Wr(o,""),r.flags&=-33);var i=Sc(e);Gl(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Sc(e);Ql(e,l,a);break;default:throw Error(T(161))}}catch(s){te(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Bh(e,t,n){N=e,kp(e)}function kp(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var o=N,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Uo;if(!a){var l=o.alternate,s=l!==null&&l.memoizedState!==null||we;l=Uo;var u=we;if(Uo=a,(we=s)&&!u)for(N=o;N!==null;)a=N,s=a.child,a.tag===22&&a.memoizedState!==null?Pc(o):s!==null?(s.return=a,N=s):Pc(o);for(;i!==null;)N=i,kp(i),i=i.sibling;N=o,Uo=l,we=u}Cc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,N=i):Cc(e)}}function Cc(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:we||Xi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!we)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:tt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&sc(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}sc(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&Gr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}we||t.flags&512&&Hl(t)}catch(h){te(t,t.return,h)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function Tc(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function Pc(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Xi(4,t)}catch(s){te(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){te(t,o,s)}}var i=t.return;try{Hl(t)}catch(s){te(t,i,s)}break;case 5:var a=t.return;try{Hl(t)}catch(s){te(t,a,s)}}}catch(s){te(t,t.return,s)}if(t===e){N=null;break}var l=t.sibling;if(l!==null){l.return=t.return,N=l;break}N=t.return}}var Wh=Math.ceil,Ni=Nt.ReactCurrentDispatcher,tu=Nt.ReactCurrentOwner,Xe=Nt.ReactCurrentBatchConfig,A=0,fe=null,ie=null,me=0,Ae=0,Un=tn(0),se=0,oo=null,xn=0,Ji=0,nu=0,Dr=null,Ne=null,ru=0,nr=1/0,xt=null,zi=!1,Kl=null,Gt=null,Bo=!1,Ft=null,Ii=0,Fr=0,Yl=null,ti=-1,ni=0;function Pe(){return A&6?ne():ti!==-1?ti:ti=ne()}function Kt(e){return e.mode&1?A&2&&me!==0?me&-me:Th.transition!==null?(ni===0&&(ni=od()),ni):(e=W,e!==0||(e=window.event,e=e===void 0?16:fd(e.type)),e):1}function it(e,t,n,r){if(50<Fr)throw Fr=0,Yl=null,Error(T(185));ho(e,n,r),(!(A&2)||e!==fe)&&(e===fe&&(!(A&2)&&(Ji|=n),se===4&&At(e,me)),Le(e,r),n===1&&A===0&&!(t.mode&1)&&(nr=ne()+500,Gi&&nn()))}function Le(e,t){var n=e.callbackNode;Tm(e,t);var r=hi(e,e===fe?me:0);if(r===0)n!==null&&bu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&bu(n),t===1)e.tag===0?Ch($c.bind(null,e)):Nd($c.bind(null,e)),kh(function(){!(A&6)&&nn()}),n=null;else{switch(id(r)){case 1:n=js;break;case 4:n=nd;break;case 16:n=mi;break;case 536870912:n=rd;break;default:n=mi}n=jp(n,_p.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function _p(e,t){if(ti=-1,ni=0,A&6)throw Error(T(327));var n=e.callbackNode;if(Kn()&&e.callbackNode!==n)return null;var r=hi(e,e===fe?me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ri(e,r);else{t=r;var o=A;A|=2;var i=Ep();(fe!==e||me!==t)&&(xt=null,nr=ne()+500,dn(e,t));do try{Qh();break}catch(l){Sp(e,l)}while(1);Bs(),Ni.current=i,A=o,ie!==null?t=0:(fe=null,me=0,t=se)}if(t!==0){if(t===2&&(o=_l(e),o!==0&&(r=o,t=Xl(e,o))),t===1)throw n=oo,dn(e,0),At(e,r),Le(e,ne()),n;if(t===6)At(e,r);else{if(o=e.current.alternate,!(r&30)&&!Vh(o)&&(t=Ri(e,r),t===2&&(i=_l(e),i!==0&&(r=i,t=Xl(e,i))),t===1))throw n=oo,dn(e,0),At(e,r),Le(e,ne()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:an(e,Ne,xt);break;case 3:if(At(e,r),(r&130023424)===r&&(t=ru+500-ne(),10<t)){if(hi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Pe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Nl(an.bind(null,e,Ne,xt),t);break}an(e,Ne,xt);break;case 4:if(At(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-ot(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Wh(r/1960))-r,10<r){e.timeoutHandle=Nl(an.bind(null,e,Ne,xt),r);break}an(e,Ne,xt);break;case 5:an(e,Ne,xt);break;default:throw Error(T(329))}}}return Le(e,ne()),e.callbackNode===n?_p.bind(null,e):null}function Xl(e,t){var n=Dr;return e.current.memoizedState.isDehydrated&&(dn(e,t).flags|=256),e=Ri(e,t),e!==2&&(t=Ne,Ne=n,t!==null&&Jl(t)),e}function Jl(e){Ne===null?Ne=e:Ne.push.apply(Ne,e)}function Vh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!lt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function At(e,t){for(t&=~nu,t&=~Ji,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),r=1<<n;e[n]=-1,t&=~r}}function $c(e){if(A&6)throw Error(T(327));Kn();var t=hi(e,0);if(!(t&1))return Le(e,ne()),null;var n=Ri(e,t);if(e.tag!==0&&n===2){var r=_l(e);r!==0&&(t=r,n=Xl(e,r))}if(n===1)throw n=oo,dn(e,0),At(e,t),Le(e,ne()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,an(e,Ne,xt),Le(e,ne()),null}function ou(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(nr=ne()+500,Gi&&nn())}}function wn(e){Ft!==null&&Ft.tag===0&&!(A&6)&&Kn();var t=A;A|=1;var n=Xe.transition,r=W;try{if(Xe.transition=null,W=1,e)return e()}finally{W=r,Xe.transition=n,A=t,!(A&6)&&nn()}}function iu(){Ae=Un.current,G(Un)}function dn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,wh(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(Ds(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wi();break;case 3:er(),G(Ie),G(_e),Ks();break;case 5:Gs(r);break;case 4:er();break;case 13:G(J);break;case 19:G(J);break;case 10:Ws(r.type._context);break;case 22:case 23:iu()}n=n.return}if(fe=e,ie=e=Yt(e.current,null),me=Ae=t,se=0,oo=null,nu=Ji=xn=0,Ne=Dr=null,un!==null){for(t=0;t<un.length;t++)if(n=un[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}un=null}return e}function Sp(e,t){do{var n=ie;try{if(Bs(),Zo.current=ji,$i){for(var r=Z.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}$i=!1}if(vn=0,ue=le=Z=null,Mr=!1,to=0,tu.current=null,n===null||n.return===null){se=1,oo=t,ie=null;break}e:{var i=e,a=n.return,l=n,s=t;if(t=me,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,m=l,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var x=hc(a);if(x!==null){x.flags&=-257,gc(x,a,l,i,t),x.mode&1&&mc(i,u,t),t=x,s=u;var w=t.updateQueue;if(w===null){var g=new Set;g.add(s),t.updateQueue=g}else w.add(s);break e}else{if(!(t&1)){mc(i,u,t),au();break e}s=Error(T(426))}}else if(Y&&l.mode&1){var _=hc(a);if(_!==null){!(_.flags&65536)&&(_.flags|=256),gc(_,a,l,i,t),Fs(tr(s,l));break e}}i=s=tr(s,l),se!==4&&(se=2),Dr===null?Dr=[i]:Dr.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=ap(i,s,t);lc(i,d);break e;case 1:l=s;var c=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Gt===null||!Gt.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=lp(i,l,t);lc(i,v);break e}}i=i.return}while(i!==null)}Tp(n)}catch(S){t=S,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(1)}function Ep(){var e=Ni.current;return Ni.current=ji,e===null?ji:e}function au(){(se===0||se===3||se===2)&&(se=4),fe===null||!(xn&268435455)&&!(Ji&268435455)||At(fe,me)}function Ri(e,t){var n=A;A|=2;var r=Ep();(fe!==e||me!==t)&&(xt=null,dn(e,t));do try{Hh();break}catch(o){Sp(e,o)}while(1);if(Bs(),A=n,Ni.current=r,ie!==null)throw Error(T(261));return fe=null,me=0,se}function Hh(){for(;ie!==null;)Cp(ie)}function Qh(){for(;ie!==null&&!ym();)Cp(ie)}function Cp(e){var t=$p(e.alternate,e,Ae);e.memoizedProps=e.pendingProps,t===null?Tp(e):ie=t,tu.current=null}function Tp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Dh(n,t),n!==null){n.flags&=32767,ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,ie=null;return}}else if(n=Ah(n,t,Ae),n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);se===0&&(se=5)}function an(e,t,n){var r=W,o=Xe.transition;try{Xe.transition=null,W=1,Gh(e,t,n,r)}finally{Xe.transition=o,W=r}return null}function Gh(e,t,n,r){do Kn();while(Ft!==null);if(A&6)throw Error(T(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Pm(e,i),e===fe&&(ie=fe=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Bo||(Bo=!0,jp(mi,function(){return Kn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Xe.transition,Xe.transition=null;var a=W;W=1;var l=A;A|=4,tu.current=null,Uh(e,n),wp(n,e),ph($l),gi=!!Pl,$l=Pl=null,e.current=n,Bh(n),vm(),A=l,W=a,Xe.transition=i}else e.current=n;if(Bo&&(Bo=!1,Ft=e,Ii=o),i=e.pendingLanes,i===0&&(Gt=null),km(n.stateNode),Le(e,ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(zi)throw zi=!1,e=Kl,Kl=null,e;return Ii&1&&e.tag!==0&&Kn(),i=e.pendingLanes,i&1?e===Yl?Fr++:(Fr=0,Yl=e):Fr=0,nn(),null}function Kn(){if(Ft!==null){var e=id(Ii),t=Xe.transition,n=W;try{if(Xe.transition=null,W=16>e?16:e,Ft===null)var r=!1;else{if(e=Ft,Ft=null,Ii=0,A&6)throw Error(T(331));var o=A;for(A|=4,N=e.current;N!==null;){var i=N,a=i.child;if(N.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(N=u;N!==null;){var m=N;switch(m.tag){case 0:case 11:case 15:Ar(8,m,i)}var p=m.child;if(p!==null)p.return=m,N=p;else for(;N!==null;){m=N;var h=m.sibling,x=m.return;if(yp(m),m===u){N=null;break}if(h!==null){h.return=x,N=h;break}N=x}}}var w=i.alternate;if(w!==null){var g=w.child;if(g!==null){w.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}N=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,N=a;else e:for(;N!==null;){if(i=N,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ar(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,N=d;break e}N=i.return}}var c=e.current;for(N=c;N!==null;){a=N;var f=a.child;if(a.subtreeFlags&2064&&f!==null)f.return=a,N=f;else e:for(a=c;N!==null;){if(l=N,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Xi(9,l)}}catch(S){te(l,l.return,S)}if(l===a){N=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,N=v;break e}N=l.return}}if(A=o,nn(),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(Bi,e)}catch{}r=!0}return r}finally{W=n,Xe.transition=t}}return!1}function jc(e,t,n){t=tr(n,t),t=ap(e,t,1),e=Qt(e,t,1),t=Pe(),e!==null&&(ho(e,1,t),Le(e,t))}function te(e,t,n){if(e.tag===3)jc(e,e,n);else for(;t!==null;){if(t.tag===3){jc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gt===null||!Gt.has(r))){e=tr(n,e),e=lp(t,e,1),t=Qt(t,e,1),e=Pe(),t!==null&&(ho(t,1,e),Le(t,e));break}}t=t.return}}function Kh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Pe(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(me&n)===n&&(se===4||se===3&&(me&130023424)===me&&500>ne()-ru?dn(e,0):nu|=n),Le(e,t)}function Pp(e,t){t===0&&(e.mode&1?(t=Io,Io<<=1,!(Io&130023424)&&(Io=4194304)):t=1);var n=Pe();e=Pt(e,t),e!==null&&(ho(e,t,n),Le(e,n))}function Yh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Pp(e,n)}function Xh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),Pp(e,n)}var $p;$p=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ie.current)ze=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ze=!1,Mh(e,t,n);ze=!!(e.flags&131072)}else ze=!1,Y&&t.flags&1048576&&zd(t,Si,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ei(e,t),e=t.pendingProps;var o=Jn(t,_e.current);Gn(t,n),o=Xs(null,t,r,e,o,n);var i=Js();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Re(r)?(i=!0,ki(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Hs(t),o.updater=Ki,t.stateNode=o,o._reactInternals=t,Ml(t,r,e,n),t=Fl(null,t,r,!0,i,n)):(t.tag=0,Y&&i&&As(t),Ce(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ei(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Zh(r),e=tt(r,e),o){case 0:t=Dl(null,t,r,e,n);break e;case 1:t=xc(null,t,r,e,n);break e;case 11:t=yc(null,t,r,e,n);break e;case 14:t=vc(null,t,r,tt(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:tt(r,o),Dl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:tt(r,o),xc(e,t,r,o,n);case 3:e:{if(fp(t),e===null)throw Error(T(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Od(e,t),Ti(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=tr(Error(T(423)),t),t=wc(e,t,r,n,o);break e}else if(r!==o){o=tr(Error(T(424)),t),t=wc(e,t,r,n,o);break e}else for(De=Ht(t.stateNode.containerInfo.firstChild),Fe=t,Y=!0,rt=null,n=Dd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zn(),r===o){t=$t(e,t,n);break e}Ce(e,t,r,n)}t=t.child}return t;case 5:return Fd(t),e===null&&Ll(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,jl(r,o)?a=null:i!==null&&jl(r,i)&&(t.flags|=32),cp(e,t),Ce(e,t,a,n),t.child;case 6:return e===null&&Ll(t),null;case 13:return dp(e,t,n);case 4:return Qs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=qn(t,null,r,n):Ce(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:tt(r,o),yc(e,t,r,o,n);case 7:return Ce(e,t,t.pendingProps,n),t.child;case 8:return Ce(e,t,t.pendingProps.children,n),t.child;case 12:return Ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,V(Ei,r._currentValue),r._currentValue=a,i!==null)if(lt(i.value,a)){if(i.children===o.children&&!Ie.current){t=$t(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Et(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?s.next=s:(s.next=m.next,m.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ol(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(T(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Ol(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Ce(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Gn(t,n),o=Je(o),r=r(o),t.flags|=1,Ce(e,t,r,n),t.child;case 14:return r=t.type,o=tt(r,t.pendingProps),o=tt(r.type,o),vc(e,t,r,o,n);case 15:return sp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:tt(r,o),ei(e,t),t.tag=1,Re(r)?(e=!0,ki(t)):e=!1,Gn(t,n),Md(t,r,o),Ml(t,r,o,n),Fl(null,t,r,!0,e,n);case 19:return pp(e,t,n);case 22:return up(e,t,n)}throw Error(T(156,t.tag))};function jp(e,t){return td(e,t)}function Jh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ye(e,t,n,r){return new Jh(e,t,n,r)}function lu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zh(e){if(typeof e=="function")return lu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ts)return 11;if(e===Ps)return 14}return 2}function Yt(e,t){var n=e.alternate;return n===null?(n=Ye(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ri(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")lu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case zn:return pn(n.children,o,i,t);case Cs:a=8,o|=8;break;case ll:return e=Ye(12,n,t,o|2),e.elementType=ll,e.lanes=i,e;case sl:return e=Ye(13,n,t,o),e.elementType=sl,e.lanes=i,e;case ul:return e=Ye(19,n,t,o),e.elementType=ul,e.lanes=i,e;case Af:return Zi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case bf:a=10;break e;case Mf:a=9;break e;case Ts:a=11;break e;case Ps:a=14;break e;case Ot:a=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=Ye(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function pn(e,t,n,r){return e=Ye(7,e,r,t),e.lanes=n,e}function Zi(e,t,n,r){return e=Ye(22,e,r,t),e.elementType=Af,e.lanes=n,e.stateNode={isHidden:!1},e}function Fa(e,t,n){return e=Ye(6,e,null,t),e.lanes=n,e}function Ua(e,t,n){return t=Ye(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function qh(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ka(0),this.expirationTimes=ka(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ka(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function su(e,t,n,r,o,i,a,l,s){return e=new qh(e,t,n,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ye(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hs(i),e}function e1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Nn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Np(e){if(!e)return qt;e=e._reactInternals;e:{if(Sn(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Re(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(Re(n))return jd(e,n,t)}return t}function zp(e,t,n,r,o,i,a,l,s){return e=su(n,r,!0,e,o,i,a,l,s),e.context=Np(null),n=e.current,r=Pe(),o=Kt(n),i=Et(r,o),i.callback=t??null,Qt(n,i,o),e.current.lanes=o,ho(e,o,r),Le(e,r),e}function qi(e,t,n,r){var o=t.current,i=Pe(),a=Kt(o);return n=Np(n),t.context===null?t.context=n:t.pendingContext=n,t=Et(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Qt(o,t,a),e!==null&&(it(e,o,a,i),Jo(e,o,a)),a}function Li(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Nc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function uu(e,t){Nc(e,t),(e=e.alternate)&&Nc(e,t)}function t1(){return null}var Ip=typeof reportError=="function"?reportError:function(e){console.error(e)};function cu(e){this._internalRoot=e}ea.prototype.render=cu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));qi(e,t,null,null)};ea.prototype.unmount=cu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wn(function(){qi(null,e,null,null)}),t[Tt]=null}};function ea(e){this._internalRoot=e}ea.prototype.unstable_scheduleHydration=function(e){if(e){var t=sd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Mt.length&&t!==0&&t<Mt[n].priority;n++);Mt.splice(n,0,e),n===0&&cd(e)}};function fu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ta(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zc(){}function n1(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Li(a);i.call(u)}}var a=zp(t,r,e,0,null,!1,!1,"",zc);return e._reactRootContainer=a,e[Tt]=a.current,Xr(e.nodeType===8?e.parentNode:e),wn(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=Li(s);l.call(u)}}var s=su(e,0,!1,null,null,!1,!1,"",zc);return e._reactRootContainer=s,e[Tt]=s.current,Xr(e.nodeType===8?e.parentNode:e),wn(function(){qi(t,s,n,r)}),s}function na(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var s=Li(a);l.call(s)}}qi(t,a,e,o)}else a=n1(n,t,e,o,r);return Li(a)}ad=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=jr(t.pendingLanes);n!==0&&(Ns(t,n|1),Le(t,ne()),!(A&6)&&(nr=ne()+500,nn()))}break;case 13:wn(function(){var r=Pt(e,1);if(r!==null){var o=Pe();it(r,e,1,o)}}),uu(e,1)}};zs=function(e){if(e.tag===13){var t=Pt(e,134217728);if(t!==null){var n=Pe();it(t,e,134217728,n)}uu(e,134217728)}};ld=function(e){if(e.tag===13){var t=Kt(e),n=Pt(e,t);if(n!==null){var r=Pe();it(n,e,t,r)}uu(e,t)}};sd=function(){return W};ud=function(e,t){var n=W;try{return W=e,t()}finally{W=n}};xl=function(e,t,n){switch(t){case"input":if(dl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Qi(r);if(!o)throw Error(T(90));Ff(r),dl(r,o)}}}break;case"textarea":Bf(e,n);break;case"select":t=n.value,t!=null&&Wn(e,!!n.multiple,t,!1)}};Yf=ou;Xf=wn;var r1={usingClientEntryPoint:!1,Events:[yo,On,Qi,Gf,Kf,ou]},Sr={findFiberByHostInstance:sn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},o1={bundleType:Sr.bundleType,version:Sr.version,rendererPackageName:Sr.rendererPackageName,rendererConfig:Sr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qf(e),e===null?null:e.stateNode},findFiberByHostInstance:Sr.findFiberByHostInstance||t1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wo.isDisabled&&Wo.supportsFiber)try{Bi=Wo.inject(o1),ht=Wo}catch{}}We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r1;We.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fu(t))throw Error(T(200));return e1(e,t,null,n)};We.createRoot=function(e,t){if(!fu(e))throw Error(T(299));var n=!1,r="",o=Ip;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=su(e,1,!1,null,null,n,!1,r,o),e[Tt]=t.current,Xr(e.nodeType===8?e.parentNode:e),new cu(t)};We.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=qf(t),e=e===null?null:e.stateNode,e};We.flushSync=function(e){return wn(e)};We.hydrate=function(e,t,n){if(!ta(t))throw Error(T(200));return na(null,e,t,!0,n)};We.hydrateRoot=function(e,t,n){if(!fu(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=Ip;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=zp(t,null,e,1,n??null,o,!1,i,a),e[Tt]=t.current,Xr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ea(t)};We.render=function(e,t,n){if(!ta(t))throw Error(T(200));return na(null,e,t,!1,n)};We.unmountComponentAtNode=function(e){if(!ta(e))throw Error(T(40));return e._reactRootContainer?(wn(function(){na(null,null,e,!1,function(){e._reactRootContainer=null,e[Tt]=null})}),!0):!1};We.unstable_batchedUpdates=ou;We.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ta(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return na(e,t,n,!1,r)};We.version="18.2.0-next-9e3b772b8-20220608";function Rp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rp)}catch(e){console.error(e)}}Rp(),zf.exports=We;var i1=zf.exports;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function io(){return io=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},io.apply(this,arguments)}var Ut;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ut||(Ut={}));const Ic="popstate";function a1(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:a,hash:l}=r.location;return Zl("",{pathname:i,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Oi(o)}return s1(t,n,null,e)}function ae(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function du(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function l1(){return Math.random().toString(36).substr(2,8)}function Rc(e,t){return{usr:e.state,key:e.key,idx:t}}function Zl(e,t,n,r){return n===void 0&&(n=null),io({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?pr(t):t,{state:n,key:t&&t.key||r||l1()})}function Oi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function pr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function s1(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,l=Ut.Pop,s=null,u=m();u==null&&(u=0,a.replaceState(io({},a.state,{idx:u}),""));function m(){return(a.state||{idx:null}).idx}function p(){l=Ut.Pop;let _=m(),d=_==null?null:_-u;u=_,s&&s({action:l,location:g.location,delta:d})}function h(_,d){l=Ut.Push;let c=Zl(g.location,_,d);n&&n(c,_),u=m()+1;let f=Rc(c,u),v=g.createHref(c);try{a.pushState(f,"",v)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;o.location.assign(v)}i&&s&&s({action:l,location:g.location,delta:1})}function x(_,d){l=Ut.Replace;let c=Zl(g.location,_,d);n&&n(c,_),u=m();let f=Rc(c,u),v=g.createHref(c);a.replaceState(f,"",v),i&&s&&s({action:l,location:g.location,delta:0})}function w(_){let d=o.location.origin!=="null"?o.location.origin:o.location.href,c=typeof _=="string"?_:Oi(_);return c=c.replace(/ $/,"%20"),ae(d,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,d)}let g={get action(){return l},get location(){return e(o,a)},listen(_){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Ic,p),s=_,()=>{o.removeEventListener(Ic,p),s=null}},createHref(_){return t(o,_)},createURL:w,encodeLocation(_){let d=w(_);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:h,replace:x,go(_){return a.go(_)}};return g}var Lc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Lc||(Lc={}));function u1(e,t,n){return n===void 0&&(n="/"),c1(e,t,n,!1)}function c1(e,t,n,r){let o=typeof t=="string"?pr(t):t,i=pu(o.pathname||"/",n);if(i==null)return null;let a=Lp(e);f1(a);let l=null;for(let s=0;l==null&&s<a.length;++s){let u=_1(i);l=w1(a[s],u,r)}return l}function Lp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,a,l)=>{let s={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};s.relativePath.startsWith("/")&&(ae(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Xt([r,s.relativePath]),m=n.concat(s);i.children&&i.children.length>0&&(ae(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Lp(i.children,t,m,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:v1(u,i.index),routesMeta:m})};return e.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,a);else for(let s of Op(i.path))o(i,a,s)}),t}function Op(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=Op(r.join("/")),l=[];return l.push(...a.map(s=>s===""?i:[i,s].join("/"))),o&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function f1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:x1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const d1=/^:[\w-]+$/,p1=3,m1=2,h1=1,g1=10,y1=-2,Oc=e=>e==="*";function v1(e,t){let n=e.split("/"),r=n.length;return n.some(Oc)&&(r+=y1),t&&(r+=m1),n.filter(o=>!Oc(o)).reduce((o,i)=>o+(d1.test(i)?p1:i===""?h1:g1),r)}function x1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function w1(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,o={},i="/",a=[];for(let l=0;l<r.length;++l){let s=r[l],u=l===r.length-1,m=i==="/"?t:t.slice(i.length)||"/",p=bc({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},m),h=s.route;if(!p&&u&&n&&!r[r.length-1].route.index&&(p=bc({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},m)),!p)return null;Object.assign(o,p.params),a.push({params:o,pathname:Xt([i,p.pathname]),pathnameBase:P1(Xt([i,p.pathnameBase])),route:h}),p.pathnameBase!=="/"&&(i=Xt([i,p.pathnameBase]))}return a}function bc(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=k1(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,m,p)=>{let{paramName:h,isOptional:x}=m;if(h==="*"){let g=l[p]||"";a=i.slice(0,i.length-g.length).replace(/(.)\/+$/,"$1")}const w=l[p];return x&&!w?u[h]=void 0:u[h]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:a,pattern:e}}function k1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),du(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function _1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return du(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function pu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const S1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,E1=e=>S1.test(e);function C1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?pr(e):e,i;if(n)if(E1(n))i=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),du(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?i=Mc(n.substring(1),"/"):i=Mc(n,t)}else i=t;return{pathname:i,search:$1(r),hash:j1(o)}}function Mc(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Ba(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function T1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function bp(e,t){let n=T1(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Mp(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=pr(e):(o=io({},e),ae(!o.pathname||!o.pathname.includes("?"),Ba("?","pathname","search",o)),ae(!o.pathname||!o.pathname.includes("#"),Ba("#","pathname","hash",o)),ae(!o.search||!o.search.includes("#"),Ba("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,l;if(a==null)l=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),p-=1;o.pathname=h.join("/")}l=p>=0?t[p]:"/"}let s=C1(o,l),u=a&&a!=="/"&&a.endsWith("/"),m=(i||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||m)&&(s.pathname+="/"),s}const Xt=e=>e.join("/").replace(/\/\/+/g,"/"),P1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),$1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,j1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function N1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ap=["post","put","patch","delete"];new Set(Ap);const z1=["get",...Ap];new Set(z1);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ao(){return ao=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ao.apply(this,arguments)}const mu=E.createContext(null),I1=E.createContext(null),En=E.createContext(null),ra=E.createContext(null),rn=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Dp=E.createContext(null);function R1(e,t){let{relative:n}=t===void 0?{}:t;xo()||ae(!1);let{basename:r,navigator:o}=E.useContext(En),{hash:i,pathname:a,search:l}=Up(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:Xt([r,a])),o.createHref({pathname:s,search:l,hash:i})}function xo(){return E.useContext(ra)!=null}function wo(){return xo()||ae(!1),E.useContext(ra).location}function Fp(e){E.useContext(En).static||E.useLayoutEffect(e)}function L1(){let{isDataRoute:e}=E.useContext(rn);return e?Y1():O1()}function O1(){xo()||ae(!1);let e=E.useContext(mu),{basename:t,future:n,navigator:r}=E.useContext(En),{matches:o}=E.useContext(rn),{pathname:i}=wo(),a=JSON.stringify(bp(o,n.v7_relativeSplatPath)),l=E.useRef(!1);return Fp(()=>{l.current=!0}),E.useCallback(function(u,m){if(m===void 0&&(m={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let p=Mp(u,JSON.parse(a),i,m.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Xt([t,p.pathname])),(m.replace?r.replace:r.push)(p,m.state,m)},[t,r,a,i,e])}const b1=E.createContext(null);function M1(e){let t=E.useContext(rn).outlet;return t&&E.createElement(b1.Provider,{value:e},t)}function Up(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=E.useContext(En),{matches:o}=E.useContext(rn),{pathname:i}=wo(),a=JSON.stringify(bp(o,r.v7_relativeSplatPath));return E.useMemo(()=>Mp(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function A1(e,t){return D1(e,t)}function D1(e,t,n,r){xo()||ae(!1);let{navigator:o}=E.useContext(En),{matches:i}=E.useContext(rn),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let u=wo(),m;if(t){var p;let _=typeof t=="string"?pr(t):t;s==="/"||(p=_.pathname)!=null&&p.startsWith(s)||ae(!1),m=_}else m=u;let h=m.pathname||"/",x=h;if(s!=="/"){let _=s.replace(/^\//,"").split("/");x="/"+h.replace(/^\//,"").split("/").slice(_.length).join("/")}let w=u1(e,{pathname:x}),g=V1(w&&w.map(_=>Object.assign({},_,{params:Object.assign({},l,_.params),pathname:Xt([s,o.encodeLocation?o.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?s:Xt([s,o.encodeLocation?o.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n,r);return t&&g?E.createElement(ra.Provider,{value:{location:ao({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Ut.Pop}},g):g}function F1(){let e=K1(),t=N1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:o},n):null,i)}const U1=E.createElement(F1,null);class B1 extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?E.createElement(rn.Provider,{value:this.props.routeContext},E.createElement(Dp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function W1(e){let{routeContext:t,match:n,children:r}=e,o=E.useContext(mu);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(rn.Provider,{value:t},r)}function V1(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(o=n)==null?void 0:o.errors;if(l!=null){let m=a.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);m>=0||ae(!1),a=a.slice(0,Math.min(a.length,m+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<a.length;m++){let p=a[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=m),p.route.id){let{loaderData:h,errors:x}=n,w=p.route.loader&&h[p.route.id]===void 0&&(!x||x[p.route.id]===void 0);if(p.route.lazy||w){s=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((m,p,h)=>{let x,w=!1,g=null,_=null;n&&(x=l&&p.route.id?l[p.route.id]:void 0,g=p.route.errorElement||U1,s&&(u<0&&h===0?(X1("route-fallback",!1),w=!0,_=null):u===h&&(w=!0,_=p.route.hydrateFallbackElement||null)));let d=t.concat(a.slice(0,h+1)),c=()=>{let f;return x?f=g:w?f=_:p.route.Component?f=E.createElement(p.route.Component,null):p.route.element?f=p.route.element:f=m,E.createElement(W1,{match:p,routeContext:{outlet:m,matches:d,isDataRoute:n!=null},children:f})};return n&&(p.route.ErrorBoundary||p.route.errorElement||h===0)?E.createElement(B1,{location:n.location,revalidation:n.revalidation,component:g,error:x,children:c(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):c()},null)}var Bp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Bp||{}),bi=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(bi||{});function H1(e){let t=E.useContext(mu);return t||ae(!1),t}function Q1(e){let t=E.useContext(I1);return t||ae(!1),t}function G1(e){let t=E.useContext(rn);return t||ae(!1),t}function Wp(e){let t=G1(),n=t.matches[t.matches.length-1];return n.route.id||ae(!1),n.route.id}function K1(){var e;let t=E.useContext(Dp),n=Q1(bi.UseRouteError),r=Wp(bi.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Y1(){let{router:e}=H1(Bp.UseNavigateStable),t=Wp(bi.UseNavigateStable),n=E.useRef(!1);return Fp(()=>{n.current=!0}),E.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ao({fromRouteId:t},i)))},[e,t])}const Ac={};function X1(e,t,n){!t&&!Ac[e]&&(Ac[e]=!0)}function J1(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function Z1(e){return M1(e.context)}function ln(e){ae(!1)}function q1(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Ut.Pop,navigator:i,static:a=!1,future:l}=e;xo()&&ae(!1);let s=t.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:s,navigator:i,static:a,future:ao({v7_relativeSplatPath:!1},l)}),[s,l,i,a]);typeof r=="string"&&(r=pr(r));let{pathname:m="/",search:p="",hash:h="",state:x=null,key:w="default"}=r,g=E.useMemo(()=>{let _=pu(m,s);return _==null?null:{location:{pathname:_,search:p,hash:h,state:x,key:w},navigationType:o}},[s,m,p,h,x,w,o]);return g==null?null:E.createElement(En.Provider,{value:u},E.createElement(ra.Provider,{children:n,value:g}))}function eg(e){let{children:t,location:n}=e;return A1(ql(t),n)}new Promise(()=>{});function ql(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(r,o)=>{if(!E.isValidElement(r))return;let i=[...t,o];if(r.type===E.Fragment){n.push.apply(n,ql(r.props.children,i));return}r.type!==ln&&ae(!1),!r.props.index||!r.props.children||ae(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=ql(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function es(){return es=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},es.apply(this,arguments)}function tg(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function ng(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function rg(e,t){return e.button===0&&(!t||t==="_self")&&!ng(e)}const og=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ig="6";try{window.__reactRouterVersion=ig}catch{}const ag="startTransition",Dc=il[ag];function lg(e){let{basename:t,children:n,future:r,window:o}=e,i=E.useRef();i.current==null&&(i.current=a1({window:o,v5Compat:!0}));let a=i.current,[l,s]=E.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},m=E.useCallback(p=>{u&&Dc?Dc(()=>s(p)):s(p)},[s,u]);return E.useLayoutEffect(()=>a.listen(m),[a,m]),E.useEffect(()=>J1(r),[r]),E.createElement(q1,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}const sg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ug=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ko=E.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:l,target:s,to:u,preventScrollReset:m,viewTransition:p}=t,h=tg(t,og),{basename:x}=E.useContext(En),w,g=!1;if(typeof u=="string"&&ug.test(u)&&(w=u,sg))try{let f=new URL(window.location.href),v=u.startsWith("//")?new URL(f.protocol+u):new URL(u),S=pu(v.pathname,x);v.origin===f.origin&&S!=null?u=S+v.search+v.hash:g=!0}catch{}let _=R1(u,{relative:o}),d=cg(u,{replace:a,state:l,target:s,preventScrollReset:m,relative:o,viewTransition:p});function c(f){r&&r(f),f.defaultPrevented||d(f)}return E.createElement("a",es({},h,{href:w||_,onClick:g||i?r:c,ref:n,target:s}))});var Fc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Fc||(Fc={}));var Uc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Uc||(Uc={}));function cg(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,viewTransition:l}=t===void 0?{}:t,s=L1(),u=wo(),m=Up(e,{relative:a});return E.useCallback(p=>{if(rg(p,n)){p.preventDefault();let h=r!==void 0?r:Oi(u)===Oi(m);s(e,{replace:h,state:o,preventScrollReset:i,relative:a,viewTransition:l})}},[u,s,m,r,o,n,e,i,a,l])}var ts={},Bc=i1;ts.createRoot=Bc.createRoot,ts.hydrateRoot=Bc.hydrateRoot;var ke=function(){return ke=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ke.apply(this,arguments)};function lo(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}function Vp(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var fg=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,dg=Vp(function(e){return fg.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Q="-ms-",Ur="-moz-",U="-webkit-",Hp="comm",oa="rule",hu="decl",pg="@import",Qp="@keyframes",mg="@layer",hg=Math.abs,gu=String.fromCharCode,ns=Object.assign;function gg(e,t){return ce(e,0)^45?(((t<<2^ce(e,0))<<2^ce(e,1))<<2^ce(e,2))<<2^ce(e,3):0}function Gp(e){return e.trim()}function wt(e,t){return(e=t.exec(e))?e[0]:e}function O(e,t,n){return e.replace(t,n)}function oi(e,t){return e.indexOf(t)}function ce(e,t){return e.charCodeAt(t)|0}function rr(e,t,n){return e.slice(t,n)}function ft(e){return e.length}function Kp(e){return e.length}function zr(e,t){return t.push(e),e}function yg(e,t){return e.map(t).join("")}function Wc(e,t){return e.filter(function(n){return!wt(n,t)})}var ia=1,or=1,Yp=0,qe=0,re=0,mr="";function aa(e,t,n,r,o,i,a,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:ia,column:or,length:a,return:"",siblings:l}}function Lt(e,t){return ns(aa("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function jn(e){for(;e.root;)e=Lt(e.root,{children:[e]});zr(e,e.siblings)}function vg(){return re}function xg(){return re=qe>0?ce(mr,--qe):0,or--,re===10&&(or=1,ia--),re}function at(){return re=qe<Yp?ce(mr,qe++):0,or++,re===10&&(or=1,ia++),re}function mn(){return ce(mr,qe)}function ii(){return qe}function la(e,t){return rr(mr,e,t)}function rs(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function wg(e){return ia=or=1,Yp=ft(mr=e),qe=0,[]}function kg(e){return mr="",e}function Wa(e){return Gp(la(qe-1,os(e===91?e+2:e===40?e+1:e)))}function _g(e){for(;(re=mn())&&re<33;)at();return rs(e)>2||rs(re)>3?"":" "}function Sg(e,t){for(;--t&&at()&&!(re<48||re>102||re>57&&re<65||re>70&&re<97););return la(e,ii()+(t<6&&mn()==32&&at()==32))}function os(e){for(;at();)switch(re){case e:return qe;case 34:case 39:e!==34&&e!==39&&os(re);break;case 40:e===41&&os(e);break;case 92:at();break}return qe}function Eg(e,t){for(;at()&&e+re!==47+10;)if(e+re===42+42&&mn()===47)break;return"/*"+la(t,qe-1)+"*"+gu(e===47?e:at())}function Cg(e){for(;!rs(mn());)at();return la(e,qe)}function Tg(e){return kg(ai("",null,null,null,[""],e=wg(e),0,[0],e))}function ai(e,t,n,r,o,i,a,l,s){for(var u=0,m=0,p=a,h=0,x=0,w=0,g=1,_=1,d=1,c=0,f="",v=o,S=i,C=r,k=f;_;)switch(w=c,c=at()){case 40:if(w!=108&&ce(k,p-1)==58){oi(k+=O(Wa(c),"&","&\f"),"&\f")!=-1&&(d=-1);break}case 34:case 39:case 91:k+=Wa(c);break;case 9:case 10:case 13:case 32:k+=_g(w);break;case 92:k+=Sg(ii()-1,7);continue;case 47:switch(mn()){case 42:case 47:zr(Pg(Eg(at(),ii()),t,n,s),s);break;default:k+="/"}break;case 123*g:l[u++]=ft(k)*d;case 125*g:case 59:case 0:switch(c){case 0:case 125:_=0;case 59+m:d==-1&&(k=O(k,/\f/g,"")),x>0&&ft(k)-p&&zr(x>32?Hc(k+";",r,n,p-1,s):Hc(O(k," ","")+";",r,n,p-2,s),s);break;case 59:k+=";";default:if(zr(C=Vc(k,t,n,u,m,o,l,f,v=[],S=[],p,i),i),c===123)if(m===0)ai(k,t,C,C,v,i,p,l,S);else switch(h===99&&ce(k,3)===110?100:h){case 100:case 108:case 109:case 115:ai(e,C,C,r&&zr(Vc(e,C,C,0,0,o,l,f,o,v=[],p,S),S),o,S,p,l,r?v:S);break;default:ai(k,C,C,C,[""],S,0,l,S)}}u=m=x=0,g=d=1,f=k="",p=a;break;case 58:p=1+ft(k),x=w;default:if(g<1){if(c==123)--g;else if(c==125&&g++==0&&xg()==125)continue}switch(k+=gu(c),c*g){case 38:d=m>0?1:(k+="\f",-1);break;case 44:l[u++]=(ft(k)-1)*d,d=1;break;case 64:mn()===45&&(k+=Wa(at())),h=mn(),m=p=ft(f=k+=Cg(ii())),c++;break;case 45:w===45&&ft(k)==2&&(g=0)}}return i}function Vc(e,t,n,r,o,i,a,l,s,u,m,p){for(var h=o-1,x=o===0?i:[""],w=Kp(x),g=0,_=0,d=0;g<r;++g)for(var c=0,f=rr(e,h+1,h=hg(_=a[g])),v=e;c<w;++c)(v=Gp(_>0?x[c]+" "+f:O(f,/&\f/g,x[c])))&&(s[d++]=v);return aa(e,t,n,o===0?oa:l,s,u,m,p)}function Pg(e,t,n,r){return aa(e,t,n,Hp,gu(vg()),rr(e,2,-2),0,r)}function Hc(e,t,n,r,o){return aa(e,t,n,hu,rr(e,0,r),rr(e,r+1,-1),r,o)}function Xp(e,t,n){switch(gg(e,t)){case 5103:return U+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return U+e+e;case 4789:return Ur+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return U+e+Ur+e+Q+e+e;case 5936:switch(ce(e,t+11)){case 114:return U+e+Q+O(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return U+e+Q+O(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return U+e+Q+O(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return U+e+Q+e+e;case 6165:return U+e+Q+"flex-"+e+e;case 5187:return U+e+O(e,/(\w+).+(:[^]+)/,U+"box-$1$2"+Q+"flex-$1$2")+e;case 5443:return U+e+Q+"flex-item-"+O(e,/flex-|-self/g,"")+(wt(e,/flex-|baseline/)?"":Q+"grid-row-"+O(e,/flex-|-self/g,""))+e;case 4675:return U+e+Q+"flex-line-pack"+O(e,/align-content|flex-|-self/g,"")+e;case 5548:return U+e+Q+O(e,"shrink","negative")+e;case 5292:return U+e+Q+O(e,"basis","preferred-size")+e;case 6060:return U+"box-"+O(e,"-grow","")+U+e+Q+O(e,"grow","positive")+e;case 4554:return U+O(e,/([^-])(transform)/g,"$1"+U+"$2")+e;case 6187:return O(O(O(e,/(zoom-|grab)/,U+"$1"),/(image-set)/,U+"$1"),e,"")+e;case 5495:case 3959:return O(e,/(image-set\([^]*)/,U+"$1$`$1");case 4968:return O(O(e,/(.+:)(flex-)?(.*)/,U+"box-pack:$3"+Q+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+U+e+e;case 4200:if(!wt(e,/flex-|baseline/))return Q+"grid-column-align"+rr(e,t)+e;break;case 2592:case 3360:return Q+O(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,wt(r.props,/grid-\w+-end/)})?~oi(e+(n=n[t].value),"span")?e:Q+O(e,"-start","")+e+Q+"grid-row-span:"+(~oi(n,"span")?wt(n,/\d+/):+wt(n,/\d+/)-+wt(e,/\d+/))+";":Q+O(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return wt(r.props,/grid-\w+-start/)})?e:Q+O(O(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return O(e,/(.+)-inline(.+)/,U+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ft(e)-1-t>6)switch(ce(e,t+1)){case 109:if(ce(e,t+4)!==45)break;case 102:return O(e,/(.+:)(.+)-([^]+)/,"$1"+U+"$2-$3$1"+Ur+(ce(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~oi(e,"stretch")?Xp(O(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return O(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,a,l,s,u){return Q+o+":"+i+u+(a?Q+o+"-span:"+(l?s:+s-+i)+u:"")+e});case 4949:if(ce(e,t+6)===121)return O(e,":",":"+U)+e;break;case 6444:switch(ce(e,ce(e,14)===45?18:11)){case 120:return O(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+U+(ce(e,14)===45?"inline-":"")+"box$3$1"+U+"$2$3$1"+Q+"$2box$3")+e;case 100:return O(e,":",":"+Q)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return O(e,"scroll-","scroll-snap-")+e}return e}function Mi(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function $g(e,t,n,r){switch(e.type){case mg:if(e.children.length)break;case pg:case hu:return e.return=e.return||e.value;case Hp:return"";case Qp:return e.return=e.value+"{"+Mi(e.children,r)+"}";case oa:if(!ft(e.value=e.props.join(",")))return""}return ft(n=Mi(e.children,r))?e.return=e.value+"{"+n+"}":""}function jg(e){var t=Kp(e);return function(n,r,o,i){for(var a="",l=0;l<t;l++)a+=e[l](n,r,o,i)||"";return a}}function Ng(e){return function(t){t.root||(t=t.return)&&e(t)}}function zg(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case hu:e.return=Xp(e.value,e.length,n);return;case Qp:return Mi([Lt(e,{value:O(e.value,"@","@"+U)})],r);case oa:if(e.length)return yg(n=e.props,function(o){switch(wt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":jn(Lt(e,{props:[O(o,/:(read-\w+)/,":"+Ur+"$1")]})),jn(Lt(e,{props:[o]})),ns(e,{props:Wc(n,r)});break;case"::placeholder":jn(Lt(e,{props:[O(o,/:(plac\w+)/,":"+U+"input-$1")]})),jn(Lt(e,{props:[O(o,/:(plac\w+)/,":"+Ur+"$1")]})),jn(Lt(e,{props:[O(o,/:(plac\w+)/,Q+"input-$1")]})),jn(Lt(e,{props:[o]})),ns(e,{props:Wc(n,r)});break}return""})}}var Jp={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ir=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",yu=typeof window<"u"&&"HTMLElement"in window,Ig=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Rg={},sa=Object.freeze([]),ar=Object.freeze({});function Zp(e,t,n){return n===void 0&&(n=ar),e.theme!==n.theme&&e.theme||t||n.theme}var qp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Lg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Og=/(^-|-$)/g;function Qc(e){return e.replace(Lg,"-").replace(Og,"")}var bg=/(a)(d)/gi,Gc=function(e){return String.fromCharCode(e+(e>25?39:97))};function is(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Gc(t%52)+n;return(Gc(t%52)+n).replace(bg,"$1-$2")}var Va,Bn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},e0=function(e){return Bn(5381,e)};function t0(e){return is(e0(e)>>>0)}function Mg(e){return e.displayName||e.name||"Component"}function Ha(e){return typeof e=="string"&&!0}var n0=typeof Symbol=="function"&&Symbol.for,r0=n0?Symbol.for("react.memo"):60115,Ag=n0?Symbol.for("react.forward_ref"):60112,Dg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Fg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ug=((Va={})[Ag]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Va[r0]=o0,Va);function Kc(e){return("type"in(t=e)&&t.type.$$typeof)===r0?o0:"$$typeof"in e?Ug[e.$$typeof]:Dg;var t}var Bg=Object.defineProperty,Wg=Object.getOwnPropertyNames,Yc=Object.getOwnPropertySymbols,Vg=Object.getOwnPropertyDescriptor,Hg=Object.getPrototypeOf,Xc=Object.prototype;function i0(e,t,n){if(typeof t!="string"){if(Xc){var r=Hg(t);r&&r!==Xc&&i0(e,r,n)}var o=Wg(t);Yc&&(o=o.concat(Yc(t)));for(var i=Kc(e),a=Kc(t),l=0;l<o.length;++l){var s=o[l];if(!(s in Fg||n&&n[s]||a&&s in a||i&&s in i)){var u=Vg(t,s);try{Bg(e,s,u)}catch{}}}}return e}function lr(e){return typeof e=="function"}function vu(e){return typeof e=="object"&&"styledComponentId"in e}function fn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function as(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function so(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ls(e,t,n){if(n===void 0&&(n=!1),!n&&!so(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ls(e[r],t[r]);else if(so(t))for(var r in t)e[r]=ls(e[r],t[r]);return e}function xu(e,t){Object.defineProperty(e,"toString",{value:t})}function _o(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Qg=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw _o(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var a=o;a<i;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=(a=0,n.length);a<s;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,a=o;a<i;a++)n+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return n},e}(),li=new Map,Ai=new Map,Qa=1,Vo=function(e){if(li.has(e))return li.get(e);for(;Ai.has(Qa);)Qa++;var t=Qa++;return li.set(e,t),Ai.set(t,e),t},Gg=function(e,t){li.set(e,t),Ai.set(t,e)},Kg="style[".concat(ir,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),Yg=new RegExp("^".concat(ir,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Xg=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},Jg=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),o=[],i=0,a=r.length;i<a;i++){var l=r[i].trim();if(l){var s=l.match(Yg);if(s){var u=0|parseInt(s[1],10),m=s[2];u!==0&&(Gg(m,u),Xg(e,m,s[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(l)}}};function Zg(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var a0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(l){var s=Array.from(l.querySelectorAll("style[".concat(ir,"]")));return s[s.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(ir,"active"),r.setAttribute("data-styled-version","6.0.7");var a=Zg();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},qg=function(){function e(t){this.element=a0(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var a=r[o];if(a.ownerNode===n)return a}throw _o(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),ey=function(){function e(t){this.element=a0(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),ty=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Jc=yu,ny={isServer:!yu,useCSSOMInjection:!Ig},Di=function(){function e(t,n,r){t===void 0&&(t=ar),n===void 0&&(n={});var o=this;this.options=ke(ke({},ny),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&yu&&Jc&&(Jc=!1,function(i){for(var a=document.querySelectorAll(Kg),l=0,s=a.length;l<s;l++){var u=a[l];u&&u.getAttribute(ir)!=="active"&&(Jg(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),xu(this,function(){return function(i){for(var a=i.getTag(),l=a.length,s="",u=function(p){var h=function(d){return Ai.get(d)}(p);if(h===void 0)return"continue";var x=i.names.get(h),w=a.getGroup(p);if(x===void 0||w.length===0)return"continue";var g="".concat(ir,".g").concat(p,'[id="').concat(h,'"]'),_="";x!==void 0&&x.forEach(function(d){d.length>0&&(_+="".concat(d,","))}),s+="".concat(w).concat(g,'{content:"').concat(_,'"}').concat(`/*!sc*/
`)},m=0;m<l;m++)u(m);return s}(o)})}return e.registerId=function(t){return Vo(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ke(ke({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new ty(o):r?new qg(o):new ey(o)}(this.options),new Qg(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Vo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Vo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Vo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),ry=/&/g,oy=/^\s*\/\/.*$/gm;function l0(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=l0(n.children,t)),n})}function iy(e){var t,n,r,o=e===void 0?ar:e,i=o.options,a=i===void 0?ar:i,l=o.plugins,s=l===void 0?sa:l,u=function(h,x,w){return w===n||w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):h},m=s.slice();m.push(function(h){h.type===oa&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(ry,n).replace(r,u))}),a.prefix&&m.push(zg),m.push($g);var p=function(h,x,w,g){x===void 0&&(x=""),w===void 0&&(w=""),g===void 0&&(g="&"),t=g,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var _=h.replace(oy,""),d=Tg(w||x?"".concat(w," ").concat(x," { ").concat(_," }"):_);a.namespace&&(d=l0(d,a.namespace));var c=[];return Mi(d,jg(m.concat(Ng(function(f){return c.push(f)})))),c};return p.hash=s.length?s.reduce(function(h,x){return x.name||_o(15),Bn(h,x.name)},5381).toString():"",p}var ay=new Di,ss=iy(),s0=b.createContext({shouldForwardProp:void 0,styleSheet:ay,stylis:ss});s0.Consumer;b.createContext(void 0);function us(){return E.useContext(s0)}var ly=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=ss);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,xu(this,function(){throw _o(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ss),this.name+t.hash},e}(),sy=function(e){return e>="A"&&e<="Z"};function Zc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;sy(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var u0=function(e){return e==null||e===!1||e===""},c0=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!u0(i)&&(Array.isArray(i)&&i.isCss||lr(i)?r.push("".concat(Zc(o),":"),i,";"):so(i)?r.push.apply(r,lo(lo(["".concat(o," {")],c0(i),!1),["}"],!1)):r.push("".concat(Zc(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Jp||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Jt(e,t,n,r){if(u0(e))return[];if(vu(e))return[".".concat(e.styledComponentId)];if(lr(e)){if(!lr(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return Jt(o,t,n,r)}var i;return e instanceof ly?n?(e.inject(n,r),[e.getName(r)]):[e]:so(e)?c0(e):Array.isArray(e)?Array.prototype.concat.apply(sa,e.map(function(a){return Jt(a,t,n,r)})):[e.toString()]}function f0(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(lr(n)&&!vu(n))return!1}return!0}var uy=e0("6.0.7"),cy=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&f0(t),this.componentId=n,this.baseHash=Bn(uy,n),this.baseStyle=r,Di.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=fn(o,this.staticRulesId);else{var i=as(Jt(this.rules,t,n,r)),a=is(Bn(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(i,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}o=fn(o,a),this.staticRulesId=a}else{for(var s=Bn(this.baseHash,r.hash),u="",m=0;m<this.rules.length;m++){var p=this.rules[m];if(typeof p=="string")u+=p;else if(p){var h=as(Jt(p,t,n,r));s=Bn(s,h),u+=h}}if(u){var x=is(s>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(u,".".concat(x),void 0,this.componentId)),o=fn(o,x)}}return o},e}(),wu=b.createContext(void 0);wu.Consumer;var Ga={};function fy(e,t,n){var r=vu(e),o=e,i=!Ha(e),a=t.attrs,l=a===void 0?sa:a,s=t.componentId,u=s===void 0?function(f,v){var S=typeof f!="string"?"sc":Qc(f);Ga[S]=(Ga[S]||0)+1;var C="".concat(S,"-").concat(t0("6.0.7"+S+Ga[S]));return v?"".concat(v,"-").concat(C):C}(t.displayName,t.parentComponentId):s,m=t.displayName;m===void 0&&function(f){return Ha(f)?"styled.".concat(f):"Styled(".concat(Mg(f),")")}(e);var p=t.displayName&&t.componentId?"".concat(Qc(t.displayName),"-").concat(t.componentId):t.componentId||u,h=r&&o.attrs?o.attrs.concat(l).filter(Boolean):l,x=t.shouldForwardProp;if(r&&o.shouldForwardProp){var w=o.shouldForwardProp;if(t.shouldForwardProp){var g=t.shouldForwardProp;x=function(f,v){return w(f,v)&&g(f,v)}}else x=w}var _=new cy(n,p,r?o.componentStyle:void 0);function d(f,v){return function(S,C,k){var P=S.attrs,L=S.componentStyle,z=S.defaultProps,X=S.foldedComponentIds,He=S.styledComponentId,Se=S.target,Tn=b.useContext(wu),Pn=us(),st=S.shouldForwardProp||Pn.shouldForwardProp,ge=function(vt,be,zt){for(var Me,Qe=ke(ke({},be),{className:void 0,theme:zt}),ha=0;ha<vt.length;ha+=1){var To=lr(Me=vt[ha])?Me(Qe):Me;for(var It in To)Qe[It]=It==="className"?fn(Qe[It],To[It]):It==="style"?ke(ke({},Qe[It]),To[It]):To[It]}return be.className&&(Qe.className=fn(Qe.className,be.className)),Qe}(P,C,Zp(C,Tn,z)||ar),j=ge.as||Se,I={};for(var R in ge)ge[R]===void 0||R[0]==="$"||R==="as"||R==="theme"||(R==="forwardedAs"?I.as=ge.forwardedAs:st&&!st(R,j)||(I[R]=ge[R]));var K=function(vt,be){var zt=us(),Me=vt.generateAndInjectStyles(be,zt.styleSheet,zt.stylis);return Me}(L,ge),ee=fn(X,He);return K&&(ee+=" "+K),ge.className&&(ee+=" "+ge.className),I[Ha(j)&&!qp.has(j)?"class":"className"]=ee,I.ref=k,E.createElement(j,I)}(c,f,v)}var c=b.forwardRef(d);return c.attrs=h,c.componentStyle=_,c.shouldForwardProp=x,c.foldedComponentIds=r?fn(o.foldedComponentIds,o.styledComponentId):"",c.styledComponentId=p,c.target=r?o.target:e,Object.defineProperty(c,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?function(v){for(var S=[],C=1;C<arguments.length;C++)S[C-1]=arguments[C];for(var k=0,P=S;k<P.length;k++)ls(v,P[k],!0);return v}({},o.defaultProps,f):f}}),xu(c,function(){return".".concat(c.styledComponentId)}),i&&i0(c,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),c}function qc(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var ef=function(e){return Object.assign(e,{isCss:!0})};function d0(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(lr(e)||so(e)){var r=e;return ef(Jt(qc(sa,lo([r],t,!0))))}var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?Jt(o):ef(Jt(qc(o,t)))}function cs(e,t,n){if(n===void 0&&(n=ar),!t)throw _o(1,t);var r=function(o){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,n,d0.apply(void 0,lo([o],i,!1)))};return r.attrs=function(o){return cs(e,t,ke(ke({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return cs(e,t,ke(ke({},n),o))},r}var p0=function(e){return cs(fy,e)},$=p0;qp.forEach(function(e){$[e]=p0(e)});var dy=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=f0(t),Di.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(as(Jt(this.rules,n,r,o)),""),a=this.componentId+t;r.insertRules(a,a,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&Di.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function py(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=d0.apply(void 0,lo([e],t,!1)),o="sc-global-".concat(t0(JSON.stringify(r))),i=new dy(r,o),a=function(s){var u=us(),m=b.useContext(wu),p=b.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&l(p,s,u.styleSheet,m,u.stylis),b.useLayoutEffect(function(){if(!u.styleSheet.server)return l(p,s,u.styleSheet,m,u.stylis),function(){return i.removeStyles(p,u.styleSheet)}},[p,s,u.styleSheet,m,u.stylis]),null};function l(s,u,m,p,h){if(i.isStatic)i.renderStyles(s,Rg,m,h);else{var x=ke(ke({},u),{theme:Zp(u,p,a.defaultProps)});i.renderStyles(s,x,m,h)}}return b.memo(a)}const my=$.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(134, 134, 134, 0.411);
  background-color: rgb(255, 255, 255)
`,hy=$.div`
  width: 100%;
  max-width: 750px;
  padding: 15px 10px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
 flex-direction: row;
  align-items: center;
  gap: 15px;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
    max-width: 994px;
    padding: 20px 30px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1448px;
  }
`,gy=$(ko)`
    font-family:var(--logo-font);
 font-size:30px;
  color: var(--black-color);
  text-decoration: none;
  letter-spacing: 1px;
  white-space: nowrap;
`,yy=$.div`

  display:none;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 10px;
  width: 100%;
  justify-content: center;

  @media screen and (min-width: 768px) {
      display: flex;
    border-top: none;
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    padding-top: 0;

    width: auto;
    justify-content: flex-end;
  }
`,tf=$.span`
  color: var(--black-color);
  font-size: 14px;
  white-space: nowrap; 


   position: relative;
  padding: 0 10px;



  &:first-child {
    border-left: 1px solid rgba(0, 0, 0, 0.2);
        border-right: 1px solid rgba(0, 0, 0, 0.2);

  }

  &:last-child {
    border-right: 1px solid rgba(0, 0, 0, 0.2);
  }


`,vy=$.button`
  display: flex;
  align-items: center;
  gap: 8px;

  background: transparent;
  color: var(--white-color);
  border: none;
  border-radius: 30px;
  font-size: 15px;
  font-weight: 600;
 
  cursor: pointer;
   @media screen and (min-width: 768px) {
      display: none;
  
  }
  

  /* @media (max-width: 1023px) {
    display: block;
  } */

  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
  }
`,xy=$.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 80%; /* Трохи вужче, щоб бачити фон */
  max-width: 350px;
  height: 100%;
  background: #ffffff;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 80px 30px 40px;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${({open:e})=>e?"translateX(0)":"translateX(100%)"};
`,wy=$.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;

  &:active {
    transform: scale(0.9);
  }
`,ky=$.nav`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,Er=$(ko)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  color: #2c2c2c;
  display: flex;
  align-items: center;
  gap: 15px; /* Відступ між іконкою і текстом */
  transition: color 0.3s;

  svg {
    color: #d35400; /* Колір як у вашої кнопки на фоні */
    font-size: 24px;
  }

  &:hover, &:active {
    color: #d35400;
  }
`,_y=$.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px); /* Гарне розмиття фону */
  z-index: 999;
  display: ${({open:e})=>e?"block":"none"};
  transition: opacity 0.3s;
`,Sy=$.nav`
  display: none;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;

  @media screen and (min-width: 768px) {
      display: flex;
      flex:1;
              justify-content: space-around;
    gap: 20px;
  }
    @media screen and (max-width: 860px) {
      
    gap: 3px;
  }
    /* @media (max-width: 1023px) {
    display: none;
  } */
`,Cr=$(ko)`
  color: var(--black-color);
  text-decoration: none;
  font-family: var(--second-font);
  font-weight:800;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.3s ease;

  &:hover {
    color:var(--lavanda-color);
  }
`,Ey=()=>y.jsxs(Sy,{children:[y.jsx(Cr,{to:"/",children:"Головна"}),y.jsx(Cr,{to:"/about",children:"Про мене"}),y.jsx(Cr,{to:"/portfolio",children:"Портфоліо"}),y.jsx(Cr,{to:"/tariffs",children:"Тарифи"}),y.jsx(Cr,{to:"/contacts",children:"Контакти"})]});/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=e=>{const t=Ty(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ka={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},$y=E.createContext({}),jy=()=>E.useContext($y),Ny=E.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:o="",children:i,iconNode:a,...l},s)=>{const{size:u=24,strokeWidth:m=2,absoluteStrokeWidth:p=!1,color:h="currentColor",className:x=""}=jy()??{},w=r??p?Number(n??m)*24/Number(t??u):n??m;return E.createElement("svg",{ref:s,...Ka,width:t??u??Ka.width,height:t??u??Ka.height,stroke:e??h,strokeWidth:w,className:m0("lucide",x,o),...!i&&!Py(l)&&{"aria-hidden":"true"},...l},[...a.map(([g,_])=>E.createElement(g,_)),...Array.isArray(i)?i:[i]])});/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=(e,t)=>{const n=E.forwardRef(({className:r,...o},i)=>E.createElement(Ny,{ref:i,iconNode:t,className:m0(`lucide-${Cy(nf(e))}`,`lucide-${e}`,r),...o}));return n.displayName=nf(e),n};/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0",key:"12hx5q"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],Iy=Cn("briefcase-business",zy);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Ly=Cn("house",Ry);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],by=Cn("info",Oy);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Ay=Cn("mail",My);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]],Fy=Cn("message-circle-more",Dy);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=[["path",{d:"M3 5h18",key:"1u36vt"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 19h18",key:"awlh7x"}]],By=Cn("text-align-justify",Uy);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Vy=Cn("x",Wy);function Hy(){const[e,t]=E.useState(!1);return y.jsx(my,{children:y.jsxs(hy,{children:[y.jsx(gy,{to:"/",children:"Diana J."}),y.jsx(Ey,{}),y.jsx(vy,{onClick:()=>t(!e),children:y.jsx(By,{size:22})}),y.jsx(_y,{open:e,onClick:()=>t(!1)}),y.jsxs(xy,{open:e,children:[y.jsx(wy,{onClick:()=>t(!1),children:y.jsx(Vy,{size:28,strokeWidth:1.5})}),y.jsxs(ky,{children:[y.jsxs(Er,{onClick:()=>t(!1),to:"/",children:[y.jsx(Ly,{color:"#663f88",size:22,strokeWidth:1.5})," Головна"]}),y.jsxs(Er,{onClick:()=>t(!1),to:"/about",children:[y.jsx(by,{color:"#663f88",size:22,strokeWidth:1.5})," Про мене"]}),y.jsxs(Er,{onClick:()=>t(!1),to:"/portfolio",children:[y.jsx(Iy,{color:"#663f88",size:22,strokeWidth:1.5}),"Портфоліо"]}),y.jsxs(Er,{onClick:()=>t(!1),to:"/tariffs",children:[y.jsx(Fy,{color:"#663f88",size:22,strokeWidth:1.5}),"Тарифи"]}),y.jsxs(Er,{onClick:()=>t(!1),to:"/contacts",children:[y.jsx(Ay,{color:"#663f88",size:22,strokeWidth:1.5})," Контакти"]})]})]}),y.jsxs(yy,{children:[y.jsx(tf,{children:"м.Київ"}),y.jsx(tf,{children:"+380 93 000 00 00"})]})]})})}const Qy=()=>y.jsxs(y.Fragment,{children:[y.jsx(Hy,{}),y.jsx("main",{style:{flex:1},children:y.jsx(Z1,{})})]});function fs(){return fs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fs.apply(this,arguments)}function Gy(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Ky(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Yy=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Ky(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=Gy(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),xe="-ms-",Fi="-moz-",D="-webkit-",h0="comm",ku="rule",_u="decl",Xy="@import",g0="@keyframes",Jy="@layer",Zy=Math.abs,ua=String.fromCharCode,qy=Object.assign;function ev(e,t){return pe(e,0)^45?(((t<<2^pe(e,0))<<2^pe(e,1))<<2^pe(e,2))<<2^pe(e,3):0}function y0(e){return e.trim()}function tv(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function ds(e,t){return e.indexOf(t)}function pe(e,t){return e.charCodeAt(t)|0}function uo(e,t,n){return e.slice(t,n)}function dt(e){return e.length}function Su(e){return e.length}function Ho(e,t){return t.push(e),e}function nv(e,t){return e.map(t).join("")}var ca=1,sr=1,v0=0,Oe=0,oe=0,hr="";function fa(e,t,n,r,o,i,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:ca,column:sr,length:a,return:""}}function Tr(e,t){return qy(fa("",null,null,"",null,null,0),e,{length:-e.length},t)}function rv(){return oe}function ov(){return oe=Oe>0?pe(hr,--Oe):0,sr--,oe===10&&(sr=1,ca--),oe}function Ue(){return oe=Oe<v0?pe(hr,Oe++):0,sr++,oe===10&&(sr=1,ca++),oe}function yt(){return pe(hr,Oe)}function si(){return Oe}function So(e,t){return uo(hr,e,t)}function co(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function x0(e){return ca=sr=1,v0=dt(hr=e),Oe=0,[]}function w0(e){return hr="",e}function ui(e){return y0(So(Oe-1,ps(e===91?e+2:e===40?e+1:e)))}function iv(e){for(;(oe=yt())&&oe<33;)Ue();return co(e)>2||co(oe)>3?"":" "}function av(e,t){for(;--t&&Ue()&&!(oe<48||oe>102||oe>57&&oe<65||oe>70&&oe<97););return So(e,si()+(t<6&&yt()==32&&Ue()==32))}function ps(e){for(;Ue();)switch(oe){case e:return Oe;case 34:case 39:e!==34&&e!==39&&ps(oe);break;case 40:e===41&&ps(e);break;case 92:Ue();break}return Oe}function lv(e,t){for(;Ue()&&e+oe!==47+10;)if(e+oe===42+42&&yt()===47)break;return"/*"+So(t,Oe-1)+"*"+ua(e===47?e:Ue())}function sv(e){for(;!co(yt());)Ue();return So(e,Oe)}function uv(e){return w0(ci("",null,null,null,[""],e=x0(e),0,[0],e))}function ci(e,t,n,r,o,i,a,l,s){for(var u=0,m=0,p=a,h=0,x=0,w=0,g=1,_=1,d=1,c=0,f="",v=o,S=i,C=r,k=f;_;)switch(w=c,c=Ue()){case 40:if(w!=108&&pe(k,p-1)==58){ds(k+=F(ui(c),"&","&\f"),"&\f")!=-1&&(d=-1);break}case 34:case 39:case 91:k+=ui(c);break;case 9:case 10:case 13:case 32:k+=iv(w);break;case 92:k+=av(si()-1,7);continue;case 47:switch(yt()){case 42:case 47:Ho(cv(lv(Ue(),si()),t,n),s);break;default:k+="/"}break;case 123*g:l[u++]=dt(k)*d;case 125*g:case 59:case 0:switch(c){case 0:case 125:_=0;case 59+m:d==-1&&(k=F(k,/\f/g,"")),x>0&&dt(k)-p&&Ho(x>32?of(k+";",r,n,p-1):of(F(k," ","")+";",r,n,p-2),s);break;case 59:k+=";";default:if(Ho(C=rf(k,t,n,u,m,o,l,f,v=[],S=[],p),i),c===123)if(m===0)ci(k,t,C,C,v,i,p,l,S);else switch(h===99&&pe(k,3)===110?100:h){case 100:case 108:case 109:case 115:ci(e,C,C,r&&Ho(rf(e,C,C,0,0,o,l,f,o,v=[],p),S),o,S,p,l,r?v:S);break;default:ci(k,C,C,C,[""],S,0,l,S)}}u=m=x=0,g=d=1,f=k="",p=a;break;case 58:p=1+dt(k),x=w;default:if(g<1){if(c==123)--g;else if(c==125&&g++==0&&ov()==125)continue}switch(k+=ua(c),c*g){case 38:d=m>0?1:(k+="\f",-1);break;case 44:l[u++]=(dt(k)-1)*d,d=1;break;case 64:yt()===45&&(k+=ui(Ue())),h=yt(),m=p=dt(f=k+=sv(si())),c++;break;case 45:w===45&&dt(k)==2&&(g=0)}}return i}function rf(e,t,n,r,o,i,a,l,s,u,m){for(var p=o-1,h=o===0?i:[""],x=Su(h),w=0,g=0,_=0;w<r;++w)for(var d=0,c=uo(e,p+1,p=Zy(g=a[w])),f=e;d<x;++d)(f=y0(g>0?h[d]+" "+c:F(c,/&\f/g,h[d])))&&(s[_++]=f);return fa(e,t,n,o===0?ku:l,s,u,m)}function cv(e,t,n){return fa(e,t,n,h0,ua(rv()),uo(e,2,-2),0)}function of(e,t,n,r){return fa(e,t,n,_u,uo(e,0,r),uo(e,r+1,-1),r)}function Yn(e,t){for(var n="",r=Su(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function fv(e,t,n,r){switch(e.type){case Jy:if(e.children.length)break;case Xy:case _u:return e.return=e.return||e.value;case h0:return"";case g0:return e.return=e.value+"{"+Yn(e.children,r)+"}";case ku:e.value=e.props.join(",")}return dt(n=Yn(e.children,r))?e.return=e.value+"{"+n+"}":""}function dv(e){var t=Su(e);return function(n,r,o,i){for(var a="",l=0;l<t;l++)a+=e[l](n,r,o,i)||"";return a}}function pv(e){return function(t){t.root||(t=t.return)&&e(t)}}var mv=function(t,n,r){for(var o=0,i=0;o=i,i=yt(),o===38&&i===12&&(n[r]=1),!co(i);)Ue();return So(t,Oe)},hv=function(t,n){var r=-1,o=44;do switch(co(o)){case 0:o===38&&yt()===12&&(n[r]=1),t[r]+=mv(Oe-1,n,r);break;case 2:t[r]+=ui(o);break;case 4:if(o===44){t[++r]=yt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=ua(o)}while(o=Ue());return t},gv=function(t,n){return w0(hv(x0(t),n))},af=new WeakMap,yv=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!af.get(r))&&!o){af.set(t,!0);for(var i=[],a=gv(n,i),l=r.props,s=0,u=0;s<a.length;s++)for(var m=0;m<l.length;m++,u++)t.props[u]=i[s]?a[s].replace(/&\f/g,l[m]):l[m]+" "+a[s]}}},vv=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function k0(e,t){switch(ev(e,t)){case 5103:return D+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return D+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return D+e+Fi+e+xe+e+e;case 6828:case 4268:return D+e+xe+e+e;case 6165:return D+e+xe+"flex-"+e+e;case 5187:return D+e+F(e,/(\w+).+(:[^]+)/,D+"box-$1$2"+xe+"flex-$1$2")+e;case 5443:return D+e+xe+"flex-item-"+F(e,/flex-|-self/,"")+e;case 4675:return D+e+xe+"flex-line-pack"+F(e,/align-content|flex-|-self/,"")+e;case 5548:return D+e+xe+F(e,"shrink","negative")+e;case 5292:return D+e+xe+F(e,"basis","preferred-size")+e;case 6060:return D+"box-"+F(e,"-grow","")+D+e+xe+F(e,"grow","positive")+e;case 4554:return D+F(e,/([^-])(transform)/g,"$1"+D+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,D+"$1"),/(image-set)/,D+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,D+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,D+"box-pack:$3"+xe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+D+e+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,D+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(dt(e)-1-t>6)switch(pe(e,t+1)){case 109:if(pe(e,t+4)!==45)break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+D+"$2-$3$1"+Fi+(pe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ds(e,"stretch")?k0(F(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(pe(e,t+1)!==115)break;case 6444:switch(pe(e,dt(e)-3-(~ds(e,"!important")&&10))){case 107:return F(e,":",":"+D)+e;case 101:return F(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+D+(pe(e,14)===45?"inline-":"")+"box$3$1"+D+"$2$3$1"+xe+"$2box$3")+e}break;case 5936:switch(pe(e,t+11)){case 114:return D+e+xe+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return D+e+xe+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return D+e+xe+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return D+e+xe+e+e}return e}var xv=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case _u:t.return=k0(t.value,t.length);break;case g0:return Yn([Tr(t,{value:F(t.value,"@","@"+D)})],o);case ku:if(t.length)return nv(t.props,function(i){switch(tv(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Yn([Tr(t,{props:[F(i,/:(read-\w+)/,":"+Fi+"$1")]})],o);case"::placeholder":return Yn([Tr(t,{props:[F(i,/:(plac\w+)/,":"+D+"input-$1")]}),Tr(t,{props:[F(i,/:(plac\w+)/,":"+Fi+"$1")]}),Tr(t,{props:[F(i,/:(plac\w+)/,xe+"input-$1")]})],o)}return""})}},wv=[xv],kv=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(g){var _=g.getAttribute("data-emotion");_.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var o=t.stylisPlugins||wv,i={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(g){for(var _=g.getAttribute("data-emotion").split(" "),d=1;d<_.length;d++)i[_[d]]=!0;l.push(g)});var s,u=[yv,vv];{var m,p=[fv,pv(function(g){m.insert(g)})],h=dv(u.concat(o,p)),x=function(_){return Yn(uv(_),h)};s=function(_,d,c,f){m=c,x(_?_+"{"+d.styles+"}":d.styles),f&&(w.inserted[d.name]=!0)}}var w={key:n,sheet:new Yy({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:s};return w.sheet.hydrate(l),w},_v=!0;function Sv(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var _0=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||_v===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},Ev=function(t,n,r){_0(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function Cv(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Tv=/[A-Z]|^ms/g,Pv=/_EMO_([^_]+?)_([^]*?)_EMO_/g,S0=function(t){return t.charCodeAt(1)===45},lf=function(t){return t!=null&&typeof t!="boolean"},Ya=Vp(function(e){return S0(e)?e:e.replace(Tv,"-$&").toLowerCase()}),sf=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Pv,function(r,o,i){return pt={name:o,styles:i,next:pt},o})}return Jp[t]!==1&&!S0(t)&&typeof n=="number"&&n!==0?n+"px":n};function fo(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return pt={name:n.name,styles:n.styles,next:pt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)pt={name:r.name,styles:r.styles,next:pt},r=r.next;var o=n.styles+";";return o}return $v(e,t,n)}case"function":{if(e!==void 0){var i=pt,a=n(e);return pt=i,fo(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function $v(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=fo(e,t,n[o])+";";else for(var i in n){var a=n[i];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=i+"{"+t[a]+"}":lf(a)&&(r+=Ya(i)+":"+sf(i,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)lf(a[l])&&(r+=Ya(i)+":"+sf(i,a[l])+";");else{var s=fo(e,t,a);switch(i){case"animation":case"animationName":{r+=Ya(i)+":"+s+";";break}default:r+=i+"{"+s+"}"}}}return r}var uf=/label:\s*([^\s;\n{]+)\s*(;|$)/g,pt,jv=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";pt=void 0;var a=t[0];a==null||a.raw===void 0?(o=!1,i+=fo(r,n,a)):i+=a[0];for(var l=1;l<t.length;l++)i+=fo(r,n,t[l]),o&&(i+=a[l]);uf.lastIndex=0;for(var s="",u;(u=uf.exec(i))!==null;)s+="-"+u[1];var m=Cv(i)+s;return{name:m,styles:i,next:pt}},Nv=function(t){return t()},zv=il["useInsertionEffect"]?il["useInsertionEffect"]:!1,Iv=zv||Nv,E0=E.createContext(typeof HTMLElement<"u"?kv({key:"css"}):null);E0.Provider;var Rv=function(t){return E.forwardRef(function(n,r){var o=E.useContext(E0);return t(n,o,r)})},Lv=E.createContext({}),Ov=dg,bv=function(t){return t!=="theme"},cf=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?Ov:bv},ff=function(t,n,r){var o;if(n){var i=n.shouldForwardProp;o=t.__emotion_forwardProp&&i?function(a){return t.__emotion_forwardProp(a)&&i(a)}:i}return typeof o!="function"&&r&&(o=t.__emotion_forwardProp),o},Mv=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return _0(n,r,o),Iv(function(){return Ev(n,r,o)}),null},Av=function e(t,n){var r=t.__emotion_real===t,o=r&&t.__emotion_base||t,i,a;n!==void 0&&(i=n.label,a=n.target);var l=ff(t,n,r),s=l||cf(o),u=!s("as");return function(){var m=arguments,p=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(i!==void 0&&p.push("label:"+i+";"),m[0]==null||m[0].raw===void 0)p.push.apply(p,m);else{p.push(m[0][0]);for(var h=m.length,x=1;x<h;x++)p.push(m[x],m[0][x])}var w=Rv(function(g,_,d){var c=u&&g.as||o,f="",v=[],S=g;if(g.theme==null){S={};for(var C in g)S[C]=g[C];S.theme=E.useContext(Lv)}typeof g.className=="string"?f=Sv(_.registered,v,g.className):g.className!=null&&(f=g.className+" ");var k=jv(p.concat(v),_.registered,S);f+=_.key+"-"+k.name,a!==void 0&&(f+=" "+a);var P=u&&l===void 0?cf(c):s,L={};for(var z in g)u&&z==="as"||P(z)&&(L[z]=g[z]);return L.className=f,L.ref=d,E.createElement(E.Fragment,null,E.createElement(Mv,{cache:_,serialized:k,isStringTag:typeof c=="string"}),E.createElement(c,L))});return w.displayName=i!==void 0?i:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",w.defaultProps=t.defaultProps,w.__emotion_real=w,w.__emotion_base=o,w.__emotion_styles=p,w.__emotion_forwardProp=l,Object.defineProperty(w,"toString",{value:function(){return"."+a}}),w.withComponent=function(g,_){return e(g,fs({},n,_,{shouldForwardProp:ff(w,_,!0)})).apply(void 0,p)},w}},Dv=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],ur=Av.bind();Dv.forEach(function(e){ur[e]=ur(e)});const Fv=ur.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 500px;
`,Uv=ur.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`,Bv=()=>y.jsx(Fv,{children:y.jsx(Uv,{children:"404"})});const Wv=ur.div`
  width: 100%;
  height: 100vh;
 
`,Vv=py`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }


  :root {

  --black-color: #1d0f0a;
  --lavanda-color: #8a52bb;
 
  --main-font: IBM Plex Sans;
  --second-font: Poiret One;
  --logo-font: Imperial Script;
  --background-color: #f6e1d338;
  --light-grey: #c1c1c1;
  --second-background: #f9f7f2;
  --brown-color: #3c2f2a;
  

 }

  body {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    background-color: #ffffff;
    color: #000000;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
  }





  /* Головний контейнер тосту */
  .Toastify__toast {
    background-color: #ffffff !important;
    color: #000000 !important;
    border: 1px solid #000000;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08) !important;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    padding: 16px 24px !important;
  }

  /* Текст всередині тосту */
  .Toastify__toast-body {
    font-size: 0.95rem;
    font-weight: 400;
    line-height: 1.4;
    padding: 0 !important;
    margin: 0 !important;
  }

  /* Кастомізація смужки прогресу (лінії, яка зникає) */
  .Toastify__progress-bar {
    background: #000000 !important; 
    height: 2px !important;
  }

  /* Кнопка закриття (хрестик), якщо вона увімкнена */
  .Toastify__close-button {
    color: #000000 !important;
    opacity: 0.5;
    align-self: center;
    
    &:hover {
      opacity: 1;
    }
  }

 
`,Hv=$.div`
  width: 100%;
  max-width: 750px;
  margin-top: 20px;
padding-bottom:70px;
  box-sizing: border-box;
  border-bottom: 1px solid #8e8e8e;
  font-family: var(--main-font);
  

  @media screen and (min-width: 768px) {
    max-width: 994px;
    margin-top: 30px;
    padding: 0;
    padding-bottom:40px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1448px;
  }
`,Qv=$.section`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: stretch; 
    justify-content: center; 
    gap: 50px; 
  }
`,Gv=$.div`
  display: flex;

  flex-direction: column; 
  width: 100%;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 0px;
    max-width: 350px;
  }
  @media screen and (min-width: 900px) {
    max-width: 420px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 600px;
  }
`,Kv=$.h2`
  font-size: 28px; 
  font-family: var(--second-font);
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 5px;
 
  order: -1; 

  @media screen and (min-width: 768px) {
    font-size: 40px;
    margin-bottom: 15px;
    order: 0;
  }
`,Yv=$.img`
  width: 100%; 
  aspect-ratio: 1 / 1;
  object-fit: cover;
  display: block;
  border-radius: 4px; 

  @media screen and (min-width: 768px) {
    max-width: 500px;
    margin-bottom: 15px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 600px;
  }
`,Xv=$.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,Jv=$.div`
  display: flex;
  flex-direction: column;
  /* gap: 12px; */

  @media screen and (min-width: 768px) {
   
  }
`,df=$.p`
  font-size: 14px;
  line-height: 1.5; 
  color: var(--black-color);
  text-align: justify; 

  @media screen and (min-width: 768px) {
    text-align: start;
  }

  @media screen and (min-width: 1200px) {
    font-size: 16px;
  }
`,Zv=$.div`
  position: relative;
  width: 100%;
  max-width: 650px; 
  aspect-ratio: 1 / 1; 
  margin: 0 auto 0 auto;
  overflow: hidden;

  


  @media screen and (min-width: 768px) {
    flex: 1; 
    max-width: none; 
    aspect-ratio: auto; 
    margin: 0;
  }

  @media screen and (min-width: 1200px) {
    margin-left: 20px;
  }
`,qv=$.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 65%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  z-index: 1;
   border-radius: 4px; 

  @media screen and (min-width: 768px) {
    width: 72%;
    height: 78%;
    aspect-ratio: auto;
  }
`,ex=$.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 65%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  z-index: 2;
   border-radius: 4px; 
  transform: translate(-5%, 5%); 

  @media screen and (min-width: 768px) {
    transform: translate(-10%, 10%);
  }
`,tx=()=>y.jsx(Hv,{children:y.jsxs(Qv,{children:[y.jsxs(Gv,{children:[y.jsx(Yv,{src:"/portfolio/images/img9.JPG",alt:"main-photo"}),y.jsxs(Jv,{children:[y.jsx(Kv,{children:"Про мене"}),y.jsxs(Xv,{children:[y.jsxs(df,{children:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maiores a quod! Voluptatem repudiandae veniam perferendis impedit vel sequi atque."," "]}),y.jsxs(df,{children:["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat consequatur adipisci nobis atque quibusdam ipsam dolor quasi qui doloribus totam."," "]})]})]})]}),y.jsxs(Zv,{children:[y.jsx(qv,{src:"/portfolio/images/img8.JPG",alt:"top-image"}),y.jsx(ex,{src:"/portfolio/images/img10.JPG",alt:"bottom-image"})]})]})}),nx=$.section`


background-image: url(${"/portfolio/"}images/img5.JPG);  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  background-color: #111111;
  
  color: #ffffff;
  min-height: 80vh;
  display: flex;
  align-items: center;

  justify-content: center;
  padding: 4rem 10%;
  position: relative;

    width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  @media screen and (min-width: 768px) {
      justify-content: space-between;
    background-image: 
    linear-gradient(
      to right,
      rgba(0, 0, 0, 0.6),   
      rgba(0, 0, 0, 0)      
    ),
    url(${"/portfolio/"}images/img3.JPG)
 
  }
 @media screen and (min-width: 1200px) {
   
  }
`,rx=$.div`
  z-index: 2;
  @media screen and (min-width: 768px) {
   max-width: 50%
  }
 @media screen and (min-width: 1200px) {
   
  }
`,ox=$.span`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #aaaaaa;
  display: block;
  margin-bottom: 1rem;
`,ix=$.h1`

  font-size: 30px;
  @media screen and (min-width: 768px) {
   font-size: 60px;
 
  }
  font-family: var(--second-font);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 1.1;
  margin-bottom: 1.5rem;
`,ax=$.p`
  font-size: 1rem;
  color: #cccccc;
  margin-bottom: 2.5rem;
  font-weight: 300;
`,lx=$.button`
  border: 1px solid #ffffff;
  color: #ffffff;
  padding: 0.8rem 2rem;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ffffff;
    color: #111111;
  }
`;$.div`
  position: relative;
  width: 45%;
  height: 70vh;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(20%);
  }
`;function sx(){return y.jsx(nx,{children:y.jsxs(rx,{children:[y.jsx(ox,{children:"Фотограф"}),y.jsx(ix,{children:"Діана Прізвище"}),y.jsx(ax,{children:"Сучасні та креативні зйомки бла бла бла бла"}),y.jsx(lx,{children:"запис"})]})})}const ux=$.section`
    /* background-color:#ede4f566; */
    width: 100vw;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);`,cx=$.div`
  width: 100%;
  max-width: 750px;
  font-family: var(--main-font), sans-serif;
  padding-top:40px;

 
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: flex;
  flex-direction: column;

  padding-left: 10px;
  padding-right: 10px;

  @media screen and (min-width: 768px) {
    max-width: 994px;
    padding-left: 30px;
    padding-right: 30px;
  }
 @media screen and (min-width: 1200px) {
    max-width: 1448px;
  
  }
  
`,fx=$.div`
       display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;


`,dx=$.h2`
font-size:40px;
font-family: var(--second-font);
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    margin-bottom: 20px;

     @media screen and (min-width: 768px) {
   text-align: left;  margin-bottom: 30px;
  }
    
`,px=$.div`
  display: grid;
  gap: 16px;
grid-template-columns: 1fr;


  @media screen and (min-width: 768px) {
    grid-auto-flow: dense;
    gap: 20px;
  }

  /* режим 2x2 */
  &.simple {
  
     margin-bottom:30px;
    @media screen and (min-width: 768px) {
          grid-template-columns: repeat(2, 1fr);
         margin-bottom:50px; 
    }
  }

  /* режим асиметрії */
  &.asymmetric {
    margin-bottom:20px;
   
     @media screen and (min-width: 768px) {
         grid-template-columns: repeat(3, 1fr);
         margin-bottom:20px; 
    }
  }
`,mx=$.div`
  width: 100%;
  overflow: hidden;
  background-color: #f9f9f9;

  aspect-ratio: 4 / 3;

  @media screen and (min-width: 768px) {

    ${e=>e.$layout==="asymmetric"&&e.$type==="small"&&`
      grid-column: span 1;
    `}

    ${e=>e.$layout==="asymmetric"&&e.$type==="wide"&&`
      grid-column: span 2;
      aspect-ratio: 16 / 10;
    `}

    ${e=>e.$layout==="asymmetric"&&e.$type==="tall"&&`
      grid-column: span 1;
      grid-row: span 2;
      height:100%;
    //   aspect-ratio: 1 / 2;
    `}
  }
`,hx=$.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* filter: grayscale(100%);  */
  transition: filter 0.4s ease, transform 0.4s ease;

  &:hover {
    /* filter: grayscale(0%); */
    transform: scale(1.02);
  }
`,gx=$(ko)`
display: none;
     width: 100%;
  max-width: 280px;
    

  padding: 12px 24px;
      text-align: center;
  background-color: transparent;
  color: #000000;
  border: 1px solid #000000;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
          margin-bottom: 30px;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }

  &:active {
    transform: scale(0.98);
  }
  @media screen and (min-width: 768px) {
 display: block;
 
  }
`,yx=$(ko)`
display: block;
     width: 100%;
  max-width: 280px;
  padding: 12px 24px;
      text-align: center;
        margin-right: auto;
    margin-left: auto;
  background-color: transparent;
  color: #000000;
  border: 1px solid #000000;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
          margin-bottom: 30px;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }

  &:active {
    transform: scale(0.98);
  }
  @media screen and (min-width: 768px) {
 display: none;
 
  }
`,vx=()=>{const e=[{id:1,category:"events",src:"https://images.unsplash.com/photo-1519741497674-611481863552",type:"small",alt:"Весілля пара"},{id:2,category:"events",src:"https://images.unsplash.com/photo-1595152772835-219674b2a8a6",type:"small",alt:"Наречена біля вікна"},{id:3,category:"portrait",src:"https://images.unsplash.com/photo-1534528741775-53994a69daeb",type:"wide",alt:"Портрет дівчини в кашкеті"},{id:4,category:"portrait",src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",type:"tall",alt:"Обійми на пероні"}];return y.jsx(ux,{children:y.jsxs(cx,{children:[y.jsxs(fx,{children:[y.jsx(dx,{children:"Портфоліооо"}),y.jsx(gx,{to:"/portfolio",children:"Переглянути портфоліо"})]}),y.jsx(px,{className:"asymmetric",children:e.map(t=>y.jsx(mx,{$type:t.type,$layout:"asymmetric",children:y.jsx(hx,{src:t.src,alt:t.alt})},t.id))}),y.jsx(yx,{to:"/portfolio",children:"Переглянути портфоліо"})]})})},xx=ur.div`
  width: 100%;
  max-width: 750px;
  font-family:var(--main-font);

  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    max-width: 994px;
    padding-left: 30px;
    padding-right: 30px;
  }
 @media screen and (min-width: 1200px) {
    max-width: 1448px;
  
  }
`,wx=()=>y.jsxs(xx,{children:[y.jsx(sx,{}),y.jsx(tx,{}),y.jsx(vx,{})]}),kx=$.div`
  width: 100%;
  max-width: 750px;
  font-family: var(--main-font), sans-serif;

  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: #ffffff; 
  
  @media screen and (min-width: 768px) {
    max-width: 994px;
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1448px;
  }
`,_x=$.h2`
  font-size: 24px;
  font-family: var(--second-font);
  font-weight: 800;
  letter-spacing: 0.05em;
  text-align: left;
  margin-top: 20px;
  margin-bottom: 25px;
  color: #000000;
  text-transform: capitalize;
`,Sx=$.ul`
  display: flex;
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0 0 35px 0;
  border-bottom: 1px solid #eaeaea;
  overflow-x: auto; 
  white-space: nowrap;
  
  &::-webkit-scrollbar {
    display: none; 
  }
`,Ex=$.li`
  display: inline-block;
`,Cx=$.button`
  background: none;
  border: none;
  font-size: 14px;
  padding-bottom: 12px;
  cursor: pointer;
  color: ${e=>e.$isActive?"#000000":"#8e8e93"};
  font-weight: ${e=>e.$isActive?"400":"300"};
  position: relative;
  transition: color 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #000000;
    transform: ${e=>e.$isActive?"scaleX(1)":"scaleX(0)"};
    transition: transform 0.2s ease;
  }

  &:hover {
    color: #000000;
  }
`,pf=$.div`
  display: grid;
  gap: 16px;
grid-template-columns: 1fr;


  @media screen and (min-width: 768px) {
    grid-auto-flow: dense;
    gap: 20px;
  }

  /* режим 2x2 */
  &.simple {
  
     margin-bottom:30px;
    @media screen and (min-width: 768px) {
          grid-template-columns: repeat(2, 1fr);
         margin-bottom:50px; 
    }
  }

  /* режим асиметрії */
  &.asymmetric {
    margin-bottom:20px;
   
     @media screen and (min-width: 768px) {
         grid-template-columns: repeat(3, 1fr);
         margin-bottom:20px; 
    }
  }
`,mf=$.div`
  width: 100%;
  overflow: hidden;
  background-color: #f9f9f9;

  aspect-ratio: 4 / 3;

  @media screen and (min-width: 768px) {

    ${e=>e.$layout==="asymmetric"&&e.$type==="small"&&`
      grid-column: span 1;
    `}

    ${e=>e.$layout==="asymmetric"&&e.$type==="wide"&&`
      grid-column: span 2;
      aspect-ratio: 16 / 10;
    `}

    ${e=>e.$layout==="asymmetric"&&e.$type==="tall"&&`
      grid-column: span 1;
      grid-row: span 2;
      height:100%;
    //   aspect-ratio: 1 / 2;
    `}
  }
`,hf=$.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* filter: grayscale(100%);  */
  transition: filter 0.4s ease, transform 0.4s ease;

  &:hover {
    /* filter: grayscale(0%); */
    transform: scale(1.02);
  }
`,Tx=$.button`
  background: none;
  border: none;
  font-size: 18px;
  color: var(--black-color);
  text-decoration: underline;
  text-underline-offset: 3px;
  cursor: pointer;
  align-self: flex-start; 
  font-weight: 300;
  transition: opacity 0.2s ease;
  margin-bottom:30px;
    @media screen and (min-width: 768px) {
         margin-bottom:50px; 
    }


  &:hover {
    opacity: 0.7;
  }
`,Px=[{id:"objects",label:"Природа"},{id:"portrait",label:"Портрети"},{id:"brands",label:"Сімейні"},{id:"events",label:"Заходи"}],gf=[{id:1,category:"events",src:"https://images.unsplash.com/photo-1519741497674-611481863552",type:"small",alt:"Весілля пара"},{id:2,category:"events",src:"https://images.unsplash.com/photo-1595152772835-219674b2a8a6",type:"small",alt:"Наречена біля вікна"},{id:3,category:"portrait",src:"https://images.unsplash.com/photo-1534528741775-53994a69daeb",type:"wide",alt:"Портрет дівчини в кашкеті"},{id:4,category:"portrait",src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",type:"tall",alt:"Обійми на пероні"},{id:5,category:"brands",src:"https://images.unsplash.com/photo-1485462537746-965f33f7f6a7",type:"small",alt:"Бренд зйомка"},{id:6,category:"objects",src:"/portfolio/images/img4.JPG",type:"small",alt:"Предметний кадр"},{id:7,category:"objects",src:"/portfolio/images/img5.JPG",type:"small",alt:"Предметний кадр"},{id:8,category:"objects",src:"/portfolio/images/img7.JPG",type:"tall",alt:"Предметний кадр"},{id:9,category:"objects",src:"/portfolio/images/img9.JPG",type:"wide",alt:"Предметний кадр"},{id:10,category:"objects",src:"/portfolio/images/img10.JPG",type:"wide",alt:"Предметний кадр"},{id:11,category:"objects",src:"/portfolio/images/img3.JPG",type:"wide",alt:"Предметний кадр"}],$x=()=>{const[e,t]=E.useState("objects"),[n,r]=E.useState(4),o=u=>{t(u),r(4)},i=e==="all"?gf:gf.filter(u=>u.category===e),a=i.slice(0,n),l=a.slice(0,4),s=a.slice(4);return y.jsxs(kx,{children:[y.jsx(_x,{children:"Портфоліо"}),y.jsx(Sx,{children:Px.map(u=>y.jsx(Ex,{children:y.jsx(Cx,{$isActive:e===u.id,onClick:()=>o(u.id),children:u.label})},u.id))}),y.jsx(pf,{className:"asymmetric",children:l.map(u=>y.jsx(mf,{$type:u.type,$layout:"asymmetric",children:y.jsx(hf,{src:u.src,alt:u.alt})},u.id))}),s.length>0&&y.jsx(pf,{className:"simple",children:s.map(u=>y.jsx(mf,{$layout:"simple",children:y.jsx(hf,{src:u.src,alt:u.alt})},u.id))}),i.length>n&&y.jsx(Tx,{onClick:()=>r(u=>u+4),children:"Показати ще ↓"})]})},jx=$.section`
 width: 100%;
  max-width: 750px;
  font-family: var(--main-font), sans-serif;

  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;
  background-color: #ffffff; 
  
  @media screen and (min-width: 768px) {
    max-width: 994px;
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1448px;
  }
`,Nx=$.h2`
font-family: var(--main-font);
    font-size: 24px;
    font-family: var(--second-font);
    font-weight: 800;
    letter-spacing: 0.05em;
    text-align: left;
    margin-top: 20px;
    margin-bottom: 25px;
    color: #000000;
    text-transform: capitalize;

  @media screen and (max-width: 767px) {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 30px;
  }
`,zx=$.div`
  display: flex;
  flex-direction: column;
   
  /* border-top: 1px solid rgba(134, 134, 134, 0.411);; */
  border-bottom: 1px solid rgba(134, 134, 134, 0.411);;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    border-bottom: none; 
  }
`,Xa=$.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 0;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }

  @media screen and (min-width: 768px) {
    flex: 1;
    padding: 40px 20px;
    border-bottom: 1px solid rgba(134, 134, 134, 0.411);;
    border-right: 1px solid rgba(134, 134, 134, 0.411);;
    

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      border-right: none;
      padding-right: 0;
      border-bottom: 1px solid rgba(134, 134, 134, 0.411);
    }
  }

  @media screen and (min-width: 1200px) {
    padding: 40px 40px;
    
    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      padding-right: 0;
    }
  }
`,Ja=$.div`
height: 280px;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`,Za=$.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 20px;
`,qa=$.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
`,Ee=$.li`
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 8px;
  position: relative;
  padding-left: 15px;

  &::before {
    content: "-";
    position: absolute;
    left: 0;
  }
`,el=$.div`
  font-size: 1.15rem;
  font-weight: 600;
  align-self: flex-end;
  margin-top: auto;
  
  @media screen and (max-width: 767px) {
    margin-top: 15px;
  }
`,tl=$.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`,nl=$.img`
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  border-radius: 4px;
  filter: grayscale(100%); 
  transition: filter 0.3s ease;

  &:hover {
    filter: grayscale(0%); 
  }
`,rl=$.a`
  width: 100%;
  max-width: 280px;
  padding: 12px 24px;
      text-align: center;
  background-color: transparent;
  color: #000000;
  border: 1px solid #000000;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }

  &:active {
    transform: scale(0.98);
  }
`,Ix="https://images.unsplash.com/photo-1534528741775-53994a69daeb",Rx="https://images.unsplash.com/photo-1534528741775-53994a69daeb",Lx="https://images.unsplash.com/photo-1519741497674-611481863552",Ox=()=>y.jsxs(jx,{children:[y.jsx(Nx,{children:"Тарифи"}),y.jsxs(zx,{children:[y.jsxs(Xa,{children:[y.jsxs(Ja,{children:[y.jsx(Za,{children:"Індивідуальна зйомка"}),y.jsxs(qa,{children:[y.jsx(Ee,{children:"Допомога в підборі образу та локації"}),y.jsx(Ee,{children:"Допомога в позуванні"}),y.jsx(Ee,{children:"До 1-х годин зйомки"}),y.jsx(Ee,{children:"До 30 фотографій у ретуші"}),y.jsx(Ee,{children:"Термін здачі до 2-х тижнів"})]}),y.jsx(el,{children:"10.000₴"})]}),y.jsxs(tl,{children:[y.jsx(nl,{src:Ix,alt:"Індивідуальна зйомка"}),y.jsx(rl,{href:"https://t.me/username",children:"Записатися на зйомку?"})]})]}),y.jsxs(Xa,{children:[y.jsxs(Ja,{children:[y.jsx(Za,{children:"Сімейна / love-story"}),y.jsxs(qa,{children:[y.jsx(Ee,{children:"Допомога в підборі образу та локації"}),y.jsx(Ee,{children:"Допомога в позуванні"}),y.jsx(Ee,{children:"До 2,5 годин зйомки"}),y.jsx(Ee,{children:"До 40 фотографій у ретуші"}),y.jsx(Ee,{children:"Термін здачі до 3-х тижнів"})]}),y.jsx(el,{children:"10.000₴"})]}),y.jsxs(tl,{children:[y.jsx(nl,{src:Rx,alt:"Сімейна або love-story зйомка"}),y.jsx(rl,{href:"https://t.me/username",children:"Записатися на зйомку?? чи шо"})]})]}),y.jsxs(Xa,{children:[y.jsxs(Ja,{children:[y.jsx(Za,{children:"Заходи"}),y.jsxs(qa,{children:[y.jsx(Ee,{children:"Виїзд на місце проведення"}),y.jsx(Ee,{children:"Групові та індивідуальні фото в межах заходу"}),y.jsx(Ee,{children:"До 80 фотографій у ретуші"}),y.jsx(Ee,{children:"Усі вдалі вихідні матеріали"}),y.jsx(Ee,{children:"Термін здачі до 5 тижнів"})]}),y.jsx(el,{children:"10.000₴"})]}),y.jsxs(tl,{children:[y.jsx(nl,{src:Lx,alt:"Зйомка заходів"}),y.jsx(rl,{href:"https://t.me/username",children:"Записатися на зйомку??"})]})]})]})]}),bx=$.section`
width: 100%;
  max-width: 750px;
  font-family: var(--main-font), sans-serif;

  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;
  background-color: #ffffff; 
  
  @media screen and (min-width: 768px) {
    max-width: 994px;
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1448px;
  }
`,Mx=$.h2`
    font-family: var(--main-font);
    font-size: 24px;
    font-family: var(--second-font);
    font-weight: 800;
    letter-spacing: 0.05em;
    text-align: left;
    margin-top: 20px;
    margin-bottom: 25px;
    color: #000000;
    text-transform: capitalize;

  @media screen and (max-width: 767px) {
    font-size: 2rem;
    text-align: center;
  }
`,Ax=$.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
    border-bottom: 1px solid rgb(61, 60, 60);;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 48px;
  }
  
  @media screen and (min-width: 1200px) {
    gap: 80px;
  }
`,Dx=$.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    max-width: 380px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 450px;
  }
`,Fx=$.h3`
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 30px;
font-family: var(--main-font);
  letter-spacing: 0.5px;
`,Ux=$.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  height: 100%;
    justify-content: flex-start;
  padding-bottom:35px;
  

`,yf=$.input`
  width: 100%;
  padding: 12px 0;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #000000;
  color: #000000;
  font-size:18px;
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-bottom: 2px solid #000000;
  }
`;$.textarea`
  width: 100%;
  padding: 12px 0;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #000000;
  color: #000000;
  font-size: 0.95rem;
  outline: none;
  resize: none;
  box-sizing: border-box;
  font-family: inherit;

  &:focus {
    border-bottom: 2px solid #000000;
  }
`;const Bx=$.button`
  width: 100%;
  padding: 14px 24px;
  background-color: transparent;
  color: #000000;
  border: 1px solid #000000;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  margin-top: 15px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
`,Wx=$.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  gap: 24px;
`,Vx=$.div`
  width: 100%;
  overflow: hidden;
`,Hx=$.img`
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  filter: grayscale(100%);
`,Qx=$.div`
  display: flex;
  flex-direction: column;

  padding-top: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`,Gx=$.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
      padding-bottom: 35px;
`,Kx=$.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
  
  @media screen and (min-width: 768px) {
    align-items: flex-end;
     margin-bottom: 0px;
  }
`,vf=$.span`
  font-size: 0.8rem;
  text-transform: uppercase;
  color: #767676;
  letter-spacing: 1px;
`,Yx=$.p`
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
`,Xx=$.div`
  display: flex;
  gap: 20px;
`,ol=$.a`
  color: #000000;
  display: inline-block;
  transition: transform 0.2s ease, opacity 0.2s ease;

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    opacity: 0.6;
    transform: translateY(-2px);
  }
`;function C0(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=C0(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function hn(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=C0(e))&&(r&&(r+=" "),r+=t);return r}var Eo=e=>typeof e=="number"&&!isNaN(e),kn=e=>typeof e=="string",jt=e=>typeof e=="function",Jx=e=>kn(e)||Eo(e),ms=e=>kn(e)||jt(e)?e:null,Zx=(e,t)=>e===!1||Eo(e)&&e>0?e:t,hs=e=>E.isValidElement(e)||kn(e)||jt(e)||Eo(e);function qx(e,t,n=300){let{scrollHeight:r,style:o}=e;requestAnimationFrame(()=>{o.minHeight="initial",o.height=r+"px",o.transition=`all ${n}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)})})}function ew({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:o=300}){return function({children:i,position:a,preventExitTransition:l,done:s,nodeRef:u,isIn:m,playToast:p}){let h=n?`${e}--${a}`:e,x=n?`${t}--${a}`:t,w=E.useRef(0);return E.useLayoutEffect(()=>{let g=u.current,_=h.split(" "),d=c=>{c.target===u.current&&(p(),g.removeEventListener("animationend",d),g.removeEventListener("animationcancel",d),w.current===0&&c.type!=="animationcancel"&&g.classList.remove(..._))};g.classList.add(..._),g.addEventListener("animationend",d),g.addEventListener("animationcancel",d)},[]),E.useEffect(()=>{let g=u.current,_=()=>{g.removeEventListener("animationend",_),r?qx(g,s,o):s()};m||(l?_():(w.current=1,g.className+=` ${x}`,g.addEventListener("animationend",_)))},[m]),b.createElement(b.Fragment,null,i)}}function xf(e,t){return{content:T0(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function T0(e,t,n=!1){return E.isValidElement(e)&&!kn(e.type)?E.cloneElement(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):jt(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function tw({closeToast:e,theme:t,ariaLabel:n="close"}){return b.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),e(!0)},"aria-label":n},b.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},b.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function nw({delay:e,isRunning:t,closeToast:n,type:r="default",hide:o,className:i,controlledProgress:a,progress:l,rtl:s,isIn:u,theme:m}){let p=o||a&&l===0,h={animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};a&&(h.transform=`scaleX(${l})`);let x=hn("Toastify__progress-bar",a?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${m}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":s}),w=jt(i)?i({rtl:s,type:r,defaultClassName:x}):hn(x,i),g={[a&&l>=1?"onTransitionEnd":"onAnimationEnd"]:a&&l<1?null:()=>{u&&n()}};return b.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":p},b.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${m} Toastify__progress-bar--${r}`}),b.createElement("div",{role:"progressbar","aria-hidden":p?"true":"false","aria-label":"notification timer","aria-valuenow":a?Math.round(l*100):void 0,"aria-valuemin":0,"aria-valuemax":100,className:w,style:h,...g}))}var rw=1,P0=()=>`${rw++}`;function ow(e,t,n){let r=1,o=0,i=[],a=[],l=t,s=new Map,u=new Set,m=c=>(u.add(c),()=>u.delete(c)),p=()=>{a=Array.from(s.values()),u.forEach(c=>c())},h=({containerId:c,toastId:f,updateId:v})=>{let S=c?c!==e:e!==1,C=s.has(f)&&v==null;return S||C},x=(c,f)=>{s.forEach(v=>{var S;(f==null||f===v.props.toastId)&&((S=v.toggle)==null||S.call(v,c))})},w=c=>{var f,v;c.isActive&&((v=(f=c.props)==null?void 0:f.onClose)==null||v.call(f,c.removalReason),c.isActive=!1,n(xf(c,"removed")))},g=c=>{if(c==null)s.forEach(w);else{let f=s.get(c);f&&w(f)}p()},_=()=>{o-=i.length,i=[]},d=c=>{var f,v;let{toastId:S,updateId:C}=c.props,k=C==null;c.staleId&&s.delete(c.staleId),c.isActive=!0,s.set(S,c),p(),n(xf(c,k?"added":"updated")),k&&((v=(f=c.props).onOpen)==null||v.call(f))};return{id:e,props:l,observe:m,toggle:x,removeToast:g,toasts:s,clearQueue:_,buildToast:(c,f)=>{if(h(f))return;let{toastId:v,updateId:S,data:C,staleId:k,delay:P}=f,L=S==null;L&&o++;let z={...l,style:l.toastStyle,key:r++,...Object.fromEntries(Object.entries(f).filter(([He,Se])=>Se!=null)),toastId:v,updateId:S,data:C,isIn:!1,className:ms(f.className||l.toastClassName),progressClassName:ms(f.progressClassName||l.progressClassName),autoClose:f.isLoading?!1:Zx(f.autoClose,l.autoClose),closeToast(He){let Se=s.get(v);Se&&(Se.removalReason=He,g(v))},deleteToast(){if(s.get(v)!=null){if(s.delete(v),o--,o<0&&(o=0),i.length>0){d(i.shift());return}p()}}};z.closeButton=l.closeButton,f.closeButton===!1||hs(f.closeButton)?z.closeButton=f.closeButton:f.closeButton===!0&&(z.closeButton=hs(l.closeButton)?l.closeButton:!0);let X={content:c,props:z,staleId:k};l.limit&&l.limit>0&&o>l.limit&&L?i.push(X):Eo(P)?setTimeout(()=>{d(X)},P):d(X)},setProps(c){l=c},setToggle:(c,f)=>{let v=s.get(c);v&&(v.toggle=f)},isToastActive:c=>{var f;return(f=s.get(c))==null?void 0:f.isActive},getSnapshot:()=>a}}var Te=new Map,po=[],gs=new Set,iw=e=>gs.forEach(t=>t(e)),$0=()=>Te.size>0;function aw(){po.forEach(e=>N0(e.content,e.options)),po=[]}var lw=(e,{containerId:t})=>{var n;return(n=Te.get(t||1))==null?void 0:n.toasts.get(e)};function j0(e,t){var n;if(t)return!!((n=Te.get(t))!=null&&n.isToastActive(e));let r=!1;return Te.forEach(o=>{o.isToastActive(e)&&(r=!0)}),r}function sw(e){if(!$0()){po=po.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||Jx(e))Te.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=Te.get(e.containerId);t?t.removeToast(e.id):Te.forEach(n=>{n.removeToast(e.id)})}}var uw=(e={})=>{Te.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function N0(e,t){hs(e)&&($0()||po.push({content:e,options:t}),Te.forEach(n=>{n.buildToast(e,t)}))}function cw(e){var t;(t=Te.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function z0(e,t){Te.forEach(n=>{(t==null||!(t!=null&&t.containerId)||(t==null?void 0:t.containerId)===n.id)&&n.toggle(e,t==null?void 0:t.id)})}function fw(e){let t=e.containerId||1;return{subscribe(n){let r=ow(t,e,iw);Te.set(t,r);let o=r.observe(n);return aw(),()=>{o(),Te.delete(t)}},setProps(n){var r;(r=Te.get(t))==null||r.setProps(n)},getSnapshot(){var n;return(n=Te.get(t))==null?void 0:n.getSnapshot()}}}function dw(e){return gs.add(e),()=>{gs.delete(e)}}function pw(e){return e&&(kn(e.toastId)||Eo(e.toastId))?e.toastId:P0()}function Co(e,t){return N0(e,t),t.toastId}function da(e,t){return{...t,type:t&&t.type||e,toastId:pw(t)}}function pa(e){return(t,n)=>Co(t,da(e,n))}function B(e,t){return Co(e,da("default",t))}B.loading=(e,t)=>Co(e,da("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function mw(e,{pending:t,error:n,success:r},o){let i;t&&(i=kn(t)?B.loading(t,o):B.loading(t.render,{...o,...t}));let a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(u,m,p)=>{if(m==null){B.dismiss(i);return}let h={type:u,...a,...o,data:p},x=kn(m)?{render:m}:m;return i?B.update(i,{...h,...x}):B(x.render,{...h,...x}),p},s=jt(e)?e():e;return s.then(u=>l("success",r,u)).catch(u=>l("error",n,u)),s}B.promise=mw;B.success=pa("success");B.info=pa("info");B.error=pa("error");B.warning=pa("warning");B.warn=B.warning;B.dark=(e,t)=>Co(e,da("default",{theme:"dark",...t}));function hw(e){sw(e)}B.dismiss=hw;B.clearWaitingQueue=uw;B.isActive=j0;B.update=(e,t={})=>{let n=lw(e,t);if(n){let{props:r,content:o}=n,i={delay:100,...r,...t,toastId:t.toastId||e,updateId:P0()};i.toastId!==e&&(i.staleId=e);let a=i.render||o;delete i.render,Co(a,i)}};B.done=e=>{B.update(e,{progress:1})};B.onChange=dw;B.play=e=>z0(!0,e);B.pause=e=>z0(!1,e);function gw(e){var t;let{subscribe:n,getSnapshot:r,setProps:o}=E.useRef(fw(e)).current;o(e);let i=(t=E.useSyncExternalStore(n,r,r))==null?void 0:t.slice();function a(l){if(!i)return[];let s=new Map;return e.newestOnTop&&i.reverse(),i.forEach(u=>{let{position:m}=u.props;s.has(m)||s.set(m,[]),s.get(m).push(u)}),Array.from(s,u=>l(u[0],u[1]))}return{getToastToRender:a,isToastActive:j0,count:i==null?void 0:i.length}}function yw(e){let[t,n]=E.useState(!1),[r,o]=E.useState(!1),i=E.useRef(null),a=E.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:s,closeToast:u,onClick:m,closeOnClick:p}=e;cw({id:e.toastId,containerId:e.containerId,fn:n}),E.useEffect(()=>{if(e.pauseOnFocusLoss)return h(),()=>{x()}},[e.pauseOnFocusLoss]);function h(){document.hasFocus()||d(),window.addEventListener("focus",_),window.addEventListener("blur",d)}function x(){window.removeEventListener("focus",_),window.removeEventListener("blur",d)}function w(k){if(e.draggable===!0||e.draggable===k.pointerType){c();let P=i.current;a.canCloseOnClick=!0,a.canDrag=!0,P.style.transition="none",e.draggableDirection==="x"?(a.start=k.clientX,a.removalDistance=P.offsetWidth*(e.draggablePercent/100)):(a.start=k.clientY,a.removalDistance=P.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function g(k){let{top:P,bottom:L,left:z,right:X}=i.current.getBoundingClientRect();k.pointerType==="mouse"&&e.pauseOnHover&&k.clientX>=z&&k.clientX<=X&&k.clientY>=P&&k.clientY<=L?d():_()}function _(){n(!0)}function d(){n(!1)}function c(){a.didMove=!1,document.addEventListener("pointermove",v),document.addEventListener("pointerup",S)}function f(){document.removeEventListener("pointermove",v),document.removeEventListener("pointerup",S)}function v(k){let P=i.current;if(a.canDrag&&P){a.didMove=!0,t&&d(),e.draggableDirection==="x"?a.delta=k.clientX-a.start:a.delta=k.clientY-a.start,a.start!==k.clientX&&(a.canCloseOnClick=!1);let L=e.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`;P.style.transform=`translate3d(${L},0)`,P.style.opacity=`${1-Math.abs(a.delta/a.removalDistance)}`}}function S(){f();let k=i.current;if(a.canDrag&&a.didMove&&k){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance){o(!0),e.closeToast(!0),e.collapseAll();return}k.style.transition="transform 0.2s, opacity 0.2s",k.style.removeProperty("transform"),k.style.removeProperty("opacity")}}let C={onPointerDown:w,onPointerUp:g};return l&&s&&(C.onMouseEnter=d,e.stacked||(C.onMouseLeave=_)),p&&(C.onClick=k=>{m&&m(k),a.canCloseOnClick&&u(!0)}),{playToast:_,pauseToast:d,isRunning:t,preventExitTransition:r,toastRef:i,eventHandlers:C}}var I0=typeof window<"u"?E.useLayoutEffect:E.useEffect,ma=({theme:e,type:t,isLoading:n,...r})=>b.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function vw(e){return b.createElement(ma,{...e},b.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function xw(e){return b.createElement(ma,{...e},b.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function ww(e){return b.createElement(ma,{...e},b.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function kw(e){return b.createElement(ma,{...e},b.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function _w(){return b.createElement("div",{className:"Toastify__spinner"})}var ys={info:xw,warning:vw,success:ww,error:kw,spinner:_w},Sw=e=>e in ys;function Ew({theme:e,type:t,isLoading:n,icon:r}){let o=null,i={theme:e,type:t};return r===!1||(jt(r)?o=r({...i,isLoading:n}):E.isValidElement(r)?o=E.cloneElement(r,i):n?o=ys.spinner():Sw(t)&&(o=ys[t](i))),o}var Cw=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:o,playToast:i}=yw(e),{closeButton:a,children:l,autoClose:s,onClick:u,type:m,hideProgressBar:p,closeToast:h,transition:x,position:w,className:g,style:_,progressClassName:d,updateId:c,role:f,progress:v,rtl:S,toastId:C,deleteToast:k,isIn:P,isLoading:L,closeOnClick:z,theme:X,ariaLabel:He}=e,Se=hn("Toastify__toast",`Toastify__toast-theme--${X}`,`Toastify__toast--${m}`,{"Toastify__toast--rtl":S},{"Toastify__toast--close-on-click":z}),Tn=jt(g)?g({rtl:S,position:w,type:m,defaultClassName:Se}):hn(Se,g),Pn=Ew(e),st=!!v||!s,ge={closeToast:h,type:m,theme:X},j=null;return a===!1||(jt(a)?j=a(ge):E.isValidElement(a)?j=E.cloneElement(a,ge):j=tw(ge)),b.createElement(x,{isIn:P,done:k,position:w,preventExitTransition:n,nodeRef:r,playToast:i},b.createElement("div",{id:C,tabIndex:0,onClick:u,"data-in":P,className:Tn,...o,style:_,ref:r,...P&&{role:f,"aria-label":He}},Pn!=null&&b.createElement("div",{className:hn("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!L})},Pn),T0(l,e,!t),j,!e.customProgressBar&&b.createElement(nw,{...c&&!st?{key:`p-${c}`}:{},rtl:S,theme:X,delay:s,isRunning:t,isIn:P,closeToast:h,hide:p,type:m,className:d,controlledProgress:st,progress:v||0})))},Tw=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),Pw=ew(Tw("bounce",!0)),$w={position:"top-right",transition:Pw,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function jw(e){let t={...$w,...e},n=e.stacked,[r,o]=E.useState(!0),i=E.useRef(null),{getToastToRender:a,isToastActive:l,count:s}=gw(t),{className:u,style:m,rtl:p,containerId:h,hotKeys:x}=t;function w(_){let d=hn("Toastify__toast-container",`Toastify__toast-container--${_}`,{"Toastify__toast-container--rtl":p});return jt(u)?u({position:_,rtl:p,defaultClassName:d}):hn(d,ms(u))}function g(){n&&(o(!0),B.play())}return I0(()=>{var _;if(n){let d=i.current.querySelectorAll('[data-in="true"]'),c=12,f=(_=t.position)==null?void 0:_.includes("top"),v=0,S=0;Array.from(d).reverse().forEach((C,k)=>{let P=C;P.classList.add("Toastify__toast--stacked"),k>0&&(P.dataset.collapsed=`${r}`),P.dataset.pos||(P.dataset.pos=f?"top":"bot");let L=v*(r?.2:1)+(r?0:c*k),z=Math.max(.5,1-(r?S:0));P.style.setProperty("--y",`${f?L:L*-1}px`),P.style.setProperty("--g",`${c}`),P.style.setProperty("--s",`${z}`),v+=P.offsetHeight,S+=.025})}},[r,s,n]),E.useEffect(()=>{function _(d){var c;let f=i.current;x(d)&&((c=f==null?void 0:f.querySelector('[tabIndex="0"]'))==null||c.focus(),o(!1),B.pause()),d.key==="Escape"&&(document.activeElement===f||f!=null&&f.contains(document.activeElement))&&(o(!0),B.play())}return document.addEventListener("keydown",_),()=>{document.removeEventListener("keydown",_)}},[x]),b.createElement("section",{ref:i,className:"Toastify",id:h,onMouseEnter:()=>{n&&(o(!1),B.pause())},onMouseLeave:g,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},a((_,d)=>{let c=d.length?{...m}:{...m,pointerEvents:"none"};return b.createElement("div",{tabIndex:-1,className:w(_),"data-stacked":n,style:c,key:`c-${_}`},d.map(({content:f,props:v})=>b.createElement(Cw,{...v,stacked:n,collapseAll:g,isIn:l(v.toastId,v.containerId),key:`t-${v.key}`},f)))}))}var Nw=`:root {
  --toastify-color-light: #fff;
  --toastify-color-dark: #121212;
  --toastify-color-info: #3498db;
  --toastify-color-success: #07bc0c;
  --toastify-color-warning: #f1c40f;
  --toastify-color-error: hsl(6, 78%, 57%);
  --toastify-color-transparent: rgba(255, 255, 255, 0.7);

  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: var(--toastify-color-error);

  --toastify-container-width: fit-content;
  --toastify-toast-width: 320px;
  --toastify-toast-offset: 16px;
  --toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));
  --toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));
  --toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));
  --toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));
  --toastify-toast-background: #fff;
  --toastify-toast-padding: 14px;
  --toastify-toast-min-height: 64px;
  --toastify-toast-max-height: 800px;
  --toastify-toast-bd-radius: 6px;
  --toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  --toastify-font-family: sans-serif;
  --toastify-z-index: 9999;
  --toastify-text-color-light: #757575;
  --toastify-text-color-dark: #fff;

  /* Used only for colored theme */
  --toastify-text-color-info: #fff;
  --toastify-text-color-success: #fff;
  --toastify-text-color-warning: #fff;
  --toastify-text-color-error: #fff;

  --toastify-spinner-color: #616161;
  --toastify-spinner-color-empty-area: #e0e0e0;
  --toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
  --toastify-color-progress-dark: #bb86fc;
  --toastify-color-progress-info: var(--toastify-color-info);
  --toastify-color-progress-success: var(--toastify-color-success);
  --toastify-color-progress-warning: var(--toastify-color-warning);
  --toastify-color-progress-error: var(--toastify-color-error);
  /* used to control the opacity of the progress trail */
  --toastify-color-progress-bgo: 0.2;
}

.Toastify__toast-container {
  z-index: var(--toastify-z-index);
  -webkit-transform: translate3d(0, 0, var(--toastify-z-index));
  position: fixed;
  width: var(--toastify-container-width);
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.Toastify__toast-container--top-left {
  top: var(--toastify-toast-top);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--top-center {
  top: var(--toastify-toast-top);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--top-right {
  top: var(--toastify-toast-top);
  right: var(--toastify-toast-right);
  align-items: end;
}
.Toastify__toast-container--bottom-left {
  bottom: var(--toastify-toast-bottom);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--bottom-center {
  bottom: var(--toastify-toast-bottom);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--bottom-right {
  bottom: var(--toastify-toast-bottom);
  right: var(--toastify-toast-right);
  align-items: end;
}

.Toastify__toast {
  --y: 0px;
  position: relative;
  touch-action: none;
  width: var(--toastify-toast-width);
  min-height: var(--toastify-toast-min-height);
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: var(--toastify-toast-padding);
  border-radius: var(--toastify-toast-bd-radius);
  box-shadow: var(--toastify-toast-shadow);
  max-height: var(--toastify-toast-max-height);
  font-family: var(--toastify-font-family);
  /* webkit only issue #791 */
  z-index: 0;
  /* inner swag */
  display: flex;
  flex: 1 auto;
  align-items: center;
  word-break: break-word;
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container {
    width: 100vw;
    left: env(safe-area-inset-left);
    margin: 0;
  }
  .Toastify__toast-container--top-left,
  .Toastify__toast-container--top-center,
  .Toastify__toast-container--top-right {
    top: env(safe-area-inset-top);
    transform: translateX(0);
  }
  .Toastify__toast-container--bottom-left,
  .Toastify__toast-container--bottom-center,
  .Toastify__toast-container--bottom-right {
    bottom: env(safe-area-inset-bottom);
    transform: translateX(0);
  }
  .Toastify__toast-container--rtl {
    right: env(safe-area-inset-right);
    left: initial;
  }
  .Toastify__toast {
    --toastify-toast-width: 100%;
    margin-bottom: 0;
    border-radius: 0;
  }
}

.Toastify__toast-container[data-stacked='true'] {
  width: var(--toastify-toast-width);
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container[data-stacked='true'] {
    width: 100vw;
  }
}

.Toastify__toast--stacked {
  position: absolute;
  width: 100%;
  transform: translate3d(0, var(--y), 0) scale(var(--s));
  transition: transform 0.3s;
}

.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,
.Toastify__toast--stacked[data-collapsed] .Toastify__close-button {
  transition: opacity 0.1s;
}

.Toastify__toast--stacked[data-collapsed='false'] {
  overflow: visible;
}

.Toastify__toast--stacked[data-collapsed='true']:not(:last-child) > * {
  opacity: 0;
}

.Toastify__toast--stacked:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: calc(var(--g) * 1px);
  bottom: 100%;
}

.Toastify__toast--stacked[data-pos='top'] {
  top: 0;
}

.Toastify__toast--stacked[data-pos='bot'] {
  bottom: 0;
}

.Toastify__toast--stacked[data-pos='bot'].Toastify__toast--stacked:before {
  transform-origin: top;
}

.Toastify__toast--stacked[data-pos='top'].Toastify__toast--stacked:before {
  transform-origin: bottom;
}

.Toastify__toast--stacked:before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  transform: scaleY(3);
  z-index: -1;
}

.Toastify__toast--rtl {
  direction: rtl;
}

.Toastify__toast--close-on-click {
  cursor: pointer;
}

.Toastify__toast-icon {
  margin-inline-end: 10px;
  width: 22px;
  flex-shrink: 0;
  display: flex;
}

.Toastify--animate {
  animation-fill-mode: both;
  animation-duration: 0.5s;
}

.Toastify--animate-icon {
  animation-fill-mode: both;
  animation-duration: 0.3s;
}

.Toastify__toast-theme--dark {
  background: var(--toastify-color-dark);
  color: var(--toastify-text-color-dark);
}

.Toastify__toast-theme--light {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--default {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--info {
  color: var(--toastify-text-color-info);
  background: var(--toastify-color-info);
}

.Toastify__toast-theme--colored.Toastify__toast--success {
  color: var(--toastify-text-color-success);
  background: var(--toastify-color-success);
}

.Toastify__toast-theme--colored.Toastify__toast--warning {
  color: var(--toastify-text-color-warning);
  background: var(--toastify-color-warning);
}

.Toastify__toast-theme--colored.Toastify__toast--error {
  color: var(--toastify-text-color-error);
  background: var(--toastify-color-error);
}

.Toastify__progress-bar-theme--light {
  background: var(--toastify-color-progress-light);
}

.Toastify__progress-bar-theme--dark {
  background: var(--toastify-color-progress-dark);
}

.Toastify__progress-bar--info {
  background: var(--toastify-color-progress-info);
}

.Toastify__progress-bar--success {
  background: var(--toastify-color-progress-success);
}

.Toastify__progress-bar--warning {
  background: var(--toastify-color-progress-warning);
}

.Toastify__progress-bar--error {
  background: var(--toastify-color-progress-error);
}

.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error {
  background: var(--toastify-color-transparent);
}

.Toastify__close-button {
  color: #fff;
  position: absolute;
  top: 6px;
  right: 6px;
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s ease;
  z-index: 1;
}

.Toastify__toast--rtl .Toastify__close-button {
  left: 6px;
  right: unset;
}

.Toastify__close-button--light {
  color: #000;
  opacity: 0.3;
}

.Toastify__close-button > svg {
  fill: currentColor;
  height: 16px;
  width: 14px;
}

.Toastify__close-button:hover,
.Toastify__close-button:focus {
  opacity: 1;
}

@keyframes Toastify__trackProgress {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}

.Toastify__progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.7;
  transform-origin: left;
}

.Toastify__progress-bar--animated {
  animation: Toastify__trackProgress linear 1 forwards;
}

.Toastify__progress-bar--controlled {
  transition: transform 0.2s;
}

.Toastify__progress-bar--rtl {
  right: 0;
  left: initial;
  transform-origin: right;
  border-bottom-left-radius: initial;
}

.Toastify__progress-bar--wrp {
  position: absolute;
  overflow: hidden;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  border-bottom-left-radius: var(--toastify-toast-bd-radius);
  border-bottom-right-radius: var(--toastify-toast-bd-radius);
}

.Toastify__progress-bar--wrp[data-hidden='true'] {
  opacity: 0;
}

.Toastify__progress-bar--bg {
  opacity: var(--toastify-color-progress-bgo);
  width: 100%;
  height: 100%;
}

.Toastify__spinner {
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: var(--toastify-spinner-color-empty-area);
  border-right-color: var(--toastify-spinner-color);
  animation: Toastify__spin 0.65s linear infinite;
}

@keyframes Toastify__bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    transform: translate3d(10px, 0, 0);
  }
  90% {
    transform: translate3d(-5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutRight {
  20% {
    opacity: 1;
    transform: translate3d(-20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }
  75% {
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    transform: translate3d(5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutLeft {
  20% {
    opacity: 1;
    transform: translate3d(20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }
  75% {
    transform: translate3d(0, 10px, 0);
  }
  90% {
    transform: translate3d(0, -5px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes Toastify__bounceOutUp {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
}

@keyframes Toastify__bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }
  75% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, 5px, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutDown {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
}

.Toastify__bounce-enter--top-left,
.Toastify__bounce-enter--bottom-left {
  animation-name: Toastify__bounceInLeft;
}

.Toastify__bounce-enter--top-right,
.Toastify__bounce-enter--bottom-right {
  animation-name: Toastify__bounceInRight;
}

.Toastify__bounce-enter--top-center {
  animation-name: Toastify__bounceInDown;
}

.Toastify__bounce-enter--bottom-center {
  animation-name: Toastify__bounceInUp;
}

.Toastify__bounce-exit--top-left,
.Toastify__bounce-exit--bottom-left {
  animation-name: Toastify__bounceOutLeft;
}

.Toastify__bounce-exit--top-right,
.Toastify__bounce-exit--bottom-right {
  animation-name: Toastify__bounceOutRight;
}

.Toastify__bounce-exit--top-center {
  animation-name: Toastify__bounceOutUp;
}

.Toastify__bounce-exit--bottom-center {
  animation-name: Toastify__bounceOutDown;
}

@keyframes Toastify__zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}

@keyframes Toastify__zoomOut {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
    transform: translate3d(0, var(--y), 0) scale3d(0.3, 0.3, 0.3);
  }
  to {
    opacity: 0;
  }
}

.Toastify__zoom-enter {
  animation-name: Toastify__zoomIn;
}

.Toastify__zoom-exit {
  animation-name: Toastify__zoomOut;
}

@keyframes Toastify__flipIn {
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  to {
    transform: perspective(400px);
  }
}

@keyframes Toastify__flipOut {
  from {
    transform: translate3d(0, var(--y), 0) perspective(400px);
  }
  30% {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }
  to {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

.Toastify__flip-enter {
  animation-name: Toastify__flipIn;
}

.Toastify__flip-exit {
  animation-name: Toastify__flipOut;
}

@keyframes Toastify__slideInRight {
  from {
    transform: translate3d(110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInLeft {
  from {
    transform: translate3d(-110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInUp {
  from {
    transform: translate3d(0, 110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInDown {
  from {
    transform: translate3d(0, -110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideOutRight {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutLeft {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(-110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutDown {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, 500px, 0);
  }
}

@keyframes Toastify__slideOutUp {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, -500px, 0);
  }
}

.Toastify__slide-enter--top-left,
.Toastify__slide-enter--bottom-left {
  animation-name: Toastify__slideInLeft;
}

.Toastify__slide-enter--top-right,
.Toastify__slide-enter--bottom-right {
  animation-name: Toastify__slideInRight;
}

.Toastify__slide-enter--top-center {
  animation-name: Toastify__slideInDown;
}

.Toastify__slide-enter--bottom-center {
  animation-name: Toastify__slideInUp;
}

.Toastify__slide-exit--top-left,
.Toastify__slide-exit--bottom-left {
  animation-name: Toastify__slideOutLeft;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-right,
.Toastify__slide-exit--bottom-right {
  animation-name: Toastify__slideOutRight;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-center {
  animation-name: Toastify__slideOutUp;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--bottom-center {
  animation-name: Toastify__slideOutDown;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

@keyframes Toastify__spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`,wf=new Map,zw=(e,t)=>{I0(()=>{if(!e||typeof document>"u")return;let n=document,r=wf.get(n);if(r){t&&r.setAttribute("nonce",t);return}let o=n.createElement("style");o.textContent=e,t&&o.setAttribute("nonce",t),n.head.appendChild(o),wf.set(n,o)},[t])};function Iw(e){return zw(Nw,e.nonce),b.createElement(jw,{...e})}const Rw=()=>{const[e,t]=E.useState({name:"",tel:""}),n=async r=>{r.preventDefault(),t({name:"",tel:""}),console.log(e);const o={}.VITE_TELEGRAM_BOT_TOKEN,i={}.VITE_TELEGRAM_CHAT_ID,a=`📸 *Нове замовлення дзвінка!*

👤 *Ім'я:* ${e.name}
📞 *Телефон:* ${e.tel}`;try{(await fetch(`https://api.telegram.org/bot${o}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:i,text:a,parse_mode:"Markdown"})})).ok?(B.info(`Дякую, ${e.name}! Я зв'яжусь з вами.`,{icon:!1}),t({name:"",tel:""})):B("Помилка відправки. Спробуйте ще раз.")}catch(l){console.error("Помилка:",l),alert("Щось пішло не так...")}};return y.jsxs(bx,{children:[y.jsx(Iw,{position:"top-right",autoClose:4e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),y.jsx(Mx,{children:"Контакти"}),y.jsxs(Ax,{children:[y.jsxs(Dx,{children:[y.jsx(Fx,{children:"Бажаєте замовити фотосесію або є індивідуальна ідея? Залиште свій номер і ми обговоримо всі деталі."}),y.jsxs(Ux,{onSubmit:n,children:[y.jsx(yf,{type:"text",placeholder:"Ваше ім'я",value:e.name,onChange:r=>t({...e,name:r.target.value}),required:!0}),y.jsx(yf,{type:"tel",placeholder:"Номер телефону",value:e.tel,onChange:r=>t({...e,tel:r.target.value}),required:!0}),y.jsx(Bx,{type:"submit",children:"Надіслати"})]})]}),y.jsxs(Wx,{children:[y.jsxs(Vx,{children:[y.jsx(Hx,{src:"/portfolio/images/img4.JPG",alt:"Mary I Photography"})," "]}),y.jsxs(Qx,{children:[y.jsxs(Gx,{children:[y.jsx(vf,{children:"Локація"}),y.jsx(Yx,{children:"Київ — Конотоп"})]}),y.jsxs(Kx,{children:[y.jsx(vf,{children:"Зв'язок"}),y.jsxs(Xx,{children:[y.jsx(ol,{href:"https://instagram.com",target:"_blank",rel:"noreferrer","aria-label":"Instagram",children:y.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[y.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),y.jsx("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),y.jsx("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]})}),y.jsx(ol,{href:"https://t.me",target:"_blank",rel:"noreferrer","aria-label":"Telegram",children:y.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[y.jsx("path",{d:"m22 2-7 20-4-9-9-4Z"}),y.jsx("path",{d:"M22 2 11 13"})]})}),y.jsx(ol,{href:"mailto:info@example.com","aria-label":"Email",children:y.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[y.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),y.jsx("polyline",{points:"22,6 12,13 2,6"})]})})]})]})]})]})]})]})},Lw=()=>{const{pathname:e}=wo();return E.useEffect(()=>{window.scrollTo(0,0)},[e]),null};function Ow(){return console.log("test"),y.jsxs(Wv,{children:[y.jsx(Vv,{}),y.jsx(Lw,{}),y.jsx(eg,{children:y.jsxs(ln,{path:"/",element:y.jsx(Qy,{}),children:[y.jsx(ln,{index:!0,element:y.jsx(wx,{})}),y.jsx(ln,{path:"/portfolio",element:y.jsx($x,{})}),y.jsx(ln,{path:"/tariffs",element:y.jsx(Ox,{})}),y.jsx(ln,{path:"/contacts",element:y.jsx(Rw,{})}),y.jsx(ln,{path:"*",element:y.jsx(Bv,{})})]})})]})}ts.createRoot(document.getElementById("root")).render(y.jsx(b.StrictMode,{children:y.jsx(lg,{basename:"/portfolio/",children:y.jsx(Ow,{})})}));
