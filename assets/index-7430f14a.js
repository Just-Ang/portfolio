function L0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function O0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _f={exports:{}},Bi={},Sf={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var go=Symbol.for("react.element"),b0=Symbol.for("react.portal"),M0=Symbol.for("react.fragment"),A0=Symbol.for("react.strict_mode"),D0=Symbol.for("react.profiler"),F0=Symbol.for("react.provider"),U0=Symbol.for("react.context"),B0=Symbol.for("react.forward_ref"),W0=Symbol.for("react.suspense"),V0=Symbol.for("react.memo"),H0=Symbol.for("react.lazy"),Cu=Symbol.iterator;function Q0(e){return e===null||typeof e!="object"?null:(e=Cu&&e[Cu]||e["@@iterator"],typeof e=="function"?e:null)}var Ef={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cf=Object.assign,Tf={};function cr(e,t,n){this.props=e,this.context=t,this.refs=Tf,this.updater=n||Ef}cr.prototype.isReactComponent={};cr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Pf(){}Pf.prototype=cr.prototype;function xs(e,t,n){this.props=e,this.context=t,this.refs=Tf,this.updater=n||Ef}var ws=xs.prototype=new Pf;ws.constructor=xs;Cf(ws,cr.prototype);ws.isPureReactComponent=!0;var Tu=Array.isArray,$f=Object.prototype.hasOwnProperty,ks={current:null},jf={key:!0,ref:!0,__self:!0,__source:!0};function zf(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)$f.call(t,r)&&!jf.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:go,type:e,key:i,ref:a,props:o,_owner:ks.current}}function G0(e,t){return{$$typeof:go,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function _s(e){return typeof e=="object"&&e!==null&&e.$$typeof===go}function K0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Pu=/\/+/g;function ya(e,t){return typeof e=="object"&&e!==null&&e.key!=null?K0(""+e.key):t.toString(36)}function Go(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case go:case b0:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+ya(a,0):r,Tu(o)?(n="",e!=null&&(n=e.replace(Pu,"$&/")+"/"),Go(o,t,n,"",function(u){return u})):o!=null&&(_s(o)&&(o=G0(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Pu,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",Tu(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+ya(i,l);a+=Go(i,t,n,s,o)}else if(s=Q0(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+ya(i,l++),a+=Go(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function $o(e,t,n){if(e==null)return e;var r=[],o=0;return Go(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Y0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var $e={current:null},Ko={transition:null},X0={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:Ko,ReactCurrentOwner:ks};M.Children={map:$o,forEach:function(e,t,n){$o(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return $o(e,function(){t++}),t},toArray:function(e){return $o(e,function(t){return t})||[]},only:function(e){if(!_s(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=cr;M.Fragment=M0;M.Profiler=D0;M.PureComponent=xs;M.StrictMode=A0;M.Suspense=W0;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X0;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Cf({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=ks.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)$f.call(t,s)&&!jf.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:go,type:e.type,key:o,ref:i,props:r,_owner:a}};M.createContext=function(e){return e={$$typeof:U0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:F0,_context:e},e.Consumer=e};M.createElement=zf;M.createFactory=function(e){var t=zf.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:B0,render:e}};M.isValidElement=_s;M.lazy=function(e){return{$$typeof:H0,_payload:{_status:-1,_result:e},_init:Y0}};M.memo=function(e,t){return{$$typeof:V0,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=Ko.transition;Ko.transition={};try{e()}finally{Ko.transition=t}};M.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};M.useCallback=function(e,t){return $e.current.useCallback(e,t)};M.useContext=function(e){return $e.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return $e.current.useDeferredValue(e)};M.useEffect=function(e,t){return $e.current.useEffect(e,t)};M.useId=function(){return $e.current.useId()};M.useImperativeHandle=function(e,t,n){return $e.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return $e.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return $e.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return $e.current.useMemo(e,t)};M.useReducer=function(e,t,n){return $e.current.useReducer(e,t,n)};M.useRef=function(e){return $e.current.useRef(e)};M.useState=function(e){return $e.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return $e.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return $e.current.useTransition()};M.version="18.2.0";Sf.exports=M;var E=Sf.exports;const b=O0(E),al=L0({__proto__:null,default:b},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J0=E,Z0=Symbol.for("react.element"),q0=Symbol.for("react.fragment"),em=Object.prototype.hasOwnProperty,tm=J0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nm={key:!0,ref:!0,__self:!0,__source:!0};function Nf(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)em.call(t,r)&&!nm.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Z0,type:e,key:i,ref:a,props:o,_owner:tm.current}}Bi.Fragment=q0;Bi.jsx=Nf;Bi.jsxs=Nf;_f.exports=Bi;var g=_f.exports,If={exports:{}},We={},Rf={exports:{}},Lf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,I){var R=j.length;j.push(I);e:for(;0<R;){var K=R-1>>>1,ee=j[K];if(0<o(ee,I))j[K]=I,j[R]=ee,R=K;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var I=j[0],R=j.pop();if(R!==I){j[0]=R;e:for(var K=0,ee=j.length,vt=ee>>>1;K<vt;){var be=2*(K+1)-1,Nt=j[be],Me=be+1,Qe=j[Me];if(0>o(Nt,R))Me<ee&&0>o(Qe,Nt)?(j[K]=Qe,j[Me]=R,K=Me):(j[K]=Nt,j[be]=R,K=be);else if(Me<ee&&0>o(Qe,R))j[K]=Qe,j[Me]=R,K=Me;else break e}}return I}function o(j,I){var R=j.sortIndex-I.sortIndex;return R!==0?R:j.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],m=1,p=null,h=3,x=!1,w=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(j){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=j)r(u),I.sortIndex=I.expirationTime,t(s,I);else break;I=n(u)}}function v(j){if(y=!1,f(j),!w)if(n(s)!==null)w=!0,st(S);else{var I=n(u);I!==null&&ge(v,I.startTime-j)}}function S(j,I){w=!1,y&&(y=!1,d($),$=-1),x=!0;var R=h;try{for(f(I),p=n(s);p!==null&&(!(p.expirationTime>I)||j&&!X());){var K=p.callback;if(typeof K=="function"){p.callback=null,h=p.priorityLevel;var ee=K(p.expirationTime<=I);I=e.unstable_now(),typeof ee=="function"?p.callback=ee:p===n(s)&&r(s),f(I)}else r(s);p=n(s)}if(p!==null)var vt=!0;else{var be=n(u);be!==null&&ge(v,be.startTime-I),vt=!1}return vt}finally{p=null,h=R,x=!1}}var C=!1,k=null,$=-1,L=5,N=-1;function X(){return!(e.unstable_now()-N<L)}function He(){if(k!==null){var j=e.unstable_now();N=j;var I=!0;try{I=k(!0,j)}finally{I?Se():(C=!1,k=null)}}else C=!1}var Se;if(typeof c=="function")Se=function(){c(He)};else if(typeof MessageChannel<"u"){var Tn=new MessageChannel,Pn=Tn.port2;Tn.port1.onmessage=He,Se=function(){Pn.postMessage(null)}}else Se=function(){_(He,0)};function st(j){k=j,C||(C=!0,Se())}function ge(j,I){$=_(function(){j(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,st(S))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(j){switch(h){case 1:case 2:case 3:var I=3;break;default:I=h}var R=h;h=I;try{return j()}finally{h=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,I){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var R=h;h=j;try{return I()}finally{h=R}},e.unstable_scheduleCallback=function(j,I,R){var K=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?K+R:K):R=K,j){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=R+ee,j={id:m++,callback:I,priorityLevel:j,startTime:R,expirationTime:ee,sortIndex:-1},R>K?(j.sortIndex=R,t(u,j),n(s)===null&&j===n(u)&&(y?(d($),$=-1):y=!0,ge(v,R-K))):(j.sortIndex=ee,t(s,j),w||x||(w=!0,st(S))),j},e.unstable_shouldYield=X,e.unstable_wrapCallback=function(j){var I=h;return function(){var R=h;h=I;try{return j.apply(this,arguments)}finally{h=R}}}})(Lf);Rf.exports=Lf;var rm=Rf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Of=E,Be=rm;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bf=new Set,Vr={};function _n(e,t){Xn(e,t),Xn(e+"Capture",t)}function Xn(e,t){for(Vr[e]=t,e=0;e<t.length;e++)bf.add(t[e])}var Ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ll=Object.prototype.hasOwnProperty,om=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$u={},ju={};function im(e){return ll.call(ju,e)?!0:ll.call($u,e)?!1:om.test(e)?ju[e]=!0:($u[e]=!0,!1)}function am(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function lm(e,t,n,r){if(t===null||typeof t>"u"||am(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function je(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ss=/[\-:]([a-z])/g;function Es(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ss,Es);he[t]=new je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ss,Es);he[t]=new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ss,Es);he[t]=new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function Cs(e,t,n,r){var o=he.hasOwnProperty(t)?he[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(lm(t,n,o,r)&&(n=null),r||o===null?im(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var zt=Of.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,jo=Symbol.for("react.element"),zn=Symbol.for("react.portal"),Nn=Symbol.for("react.fragment"),Ts=Symbol.for("react.strict_mode"),sl=Symbol.for("react.profiler"),Mf=Symbol.for("react.provider"),Af=Symbol.for("react.context"),Ps=Symbol.for("react.forward_ref"),ul=Symbol.for("react.suspense"),cl=Symbol.for("react.suspense_list"),$s=Symbol.for("react.memo"),Ot=Symbol.for("react.lazy"),Df=Symbol.for("react.offscreen"),zu=Symbol.iterator;function yr(e){return e===null||typeof e!="object"?null:(e=zu&&e[zu]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,va;function jr(e){if(va===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);va=t&&t[1]||""}return`
`+va+e}var xa=!1;function wa(e,t){if(!e||xa)return"";xa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{xa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?jr(e):""}function sm(e){switch(e.tag){case 5:return jr(e.type);case 16:return jr("Lazy");case 13:return jr("Suspense");case 19:return jr("SuspenseList");case 0:case 2:case 15:return e=wa(e.type,!1),e;case 11:return e=wa(e.type.render,!1),e;case 1:return e=wa(e.type,!0),e;default:return""}}function fl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Nn:return"Fragment";case zn:return"Portal";case sl:return"Profiler";case Ts:return"StrictMode";case ul:return"Suspense";case cl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Af:return(e.displayName||"Context")+".Consumer";case Mf:return(e._context.displayName||"Context")+".Provider";case Ps:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $s:return t=e.displayName||null,t!==null?t:fl(e.type)||"Memo";case Ot:t=e._payload,e=e._init;try{return fl(e(t))}catch{}}return null}function um(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fl(t);case 8:return t===Ts?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ff(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cm(e){var t=Ff(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zo(e){e._valueTracker||(e._valueTracker=cm(e))}function Uf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ff(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function di(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function dl(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Nu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Bf(e,t){t=t.checked,t!=null&&Cs(e,"checked",t,!1)}function pl(e,t){Bf(e,t);var n=Zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ml(e,t.type,n):t.hasOwnProperty("defaultValue")&&ml(e,t.type,Zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Iu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ml(e,t,n){(t!=="number"||di(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var zr=Array.isArray;function Wn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Zt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function hl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ru(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(zr(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Zt(n)}}function Wf(e,t){var n=Zt(t.value),r=Zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Lu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Vf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Vf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var No,Hf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(No=No||document.createElement("div"),No.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=No.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Lr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fm=["Webkit","ms","Moz","O"];Object.keys(Lr).forEach(function(e){fm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Lr[t]=Lr[e]})});function Qf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Lr.hasOwnProperty(e)&&Lr[e]?(""+t).trim():t+"px"}function Gf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Qf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var dm=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yl(e,t){if(t){if(dm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function vl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xl=null;function js(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wl=null,Vn=null,Hn=null;function Ou(e){if(e=xo(e)){if(typeof wl!="function")throw Error(T(280));var t=e.stateNode;t&&(t=Gi(t),wl(e.stateNode,e.type,t))}}function Kf(e){Vn?Hn?Hn.push(e):Hn=[e]:Vn=e}function Yf(){if(Vn){var e=Vn,t=Hn;if(Hn=Vn=null,Ou(e),t)for(e=0;e<t.length;e++)Ou(t[e])}}function Xf(e,t){return e(t)}function Jf(){}var ka=!1;function Zf(e,t,n){if(ka)return e(t,n);ka=!0;try{return Xf(e,t,n)}finally{ka=!1,(Vn!==null||Hn!==null)&&(Jf(),Yf())}}function Qr(e,t){var n=e.stateNode;if(n===null)return null;var r=Gi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var kl=!1;if(Ct)try{var vr={};Object.defineProperty(vr,"passive",{get:function(){kl=!0}}),window.addEventListener("test",vr,vr),window.removeEventListener("test",vr,vr)}catch{kl=!1}function pm(e,t,n,r,o,i,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(m){this.onError(m)}}var Or=!1,pi=null,mi=!1,_l=null,mm={onError:function(e){Or=!0,pi=e}};function hm(e,t,n,r,o,i,a,l,s){Or=!1,pi=null,pm.apply(mm,arguments)}function gm(e,t,n,r,o,i,a,l,s){if(hm.apply(this,arguments),Or){if(Or){var u=pi;Or=!1,pi=null}else throw Error(T(198));mi||(mi=!0,_l=u)}}function Sn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function qf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bu(e){if(Sn(e)!==e)throw Error(T(188))}function ym(e){var t=e.alternate;if(!t){if(t=Sn(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return bu(o),e;if(i===r)return bu(o),t;i=i.sibling}throw Error(T(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function ed(e){return e=ym(e),e!==null?td(e):null}function td(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=td(e);if(t!==null)return t;e=e.sibling}return null}var nd=Be.unstable_scheduleCallback,Mu=Be.unstable_cancelCallback,vm=Be.unstable_shouldYield,xm=Be.unstable_requestPaint,ne=Be.unstable_now,wm=Be.unstable_getCurrentPriorityLevel,zs=Be.unstable_ImmediatePriority,rd=Be.unstable_UserBlockingPriority,hi=Be.unstable_NormalPriority,km=Be.unstable_LowPriority,od=Be.unstable_IdlePriority,Wi=null,ht=null;function _m(e){if(ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(Wi,e,void 0,(e.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:Cm,Sm=Math.log,Em=Math.LN2;function Cm(e){return e>>>=0,e===0?32:31-(Sm(e)/Em|0)|0}var Io=64,Ro=4194304;function Nr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function gi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~o;l!==0?r=Nr(l):(i&=a,i!==0&&(r=Nr(i)))}else a=n&~o,a!==0?r=Nr(a):i!==0&&(r=Nr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ot(t),o=1<<n,r|=e[n],t&=~o;return r}function Tm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-ot(i),l=1<<a,s=o[a];s===-1?(!(l&n)||l&r)&&(o[a]=Tm(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function Sl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function id(){var e=Io;return Io<<=1,!(Io&4194240)&&(Io=64),e}function _a(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ot(t),e[t]=n}function $m(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ot(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Ns(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var W=0;function ad(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ld,Is,sd,ud,cd,El=!1,Lo=[],Bt=null,Wt=null,Vt=null,Gr=new Map,Kr=new Map,Mt=[],jm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Au(e,t){switch(e){case"focusin":case"focusout":Bt=null;break;case"dragenter":case"dragleave":Wt=null;break;case"mouseover":case"mouseout":Vt=null;break;case"pointerover":case"pointerout":Gr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kr.delete(t.pointerId)}}function xr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=xo(t),t!==null&&Is(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function zm(e,t,n,r,o){switch(t){case"focusin":return Bt=xr(Bt,e,t,n,r,o),!0;case"dragenter":return Wt=xr(Wt,e,t,n,r,o),!0;case"mouseover":return Vt=xr(Vt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Gr.set(i,xr(Gr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Kr.set(i,xr(Kr.get(i)||null,e,t,n,r,o)),!0}return!1}function fd(e){var t=sn(e.target);if(t!==null){var n=Sn(t);if(n!==null){if(t=n.tag,t===13){if(t=qf(n),t!==null){e.blockedOn=t,cd(e.priority,function(){sd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Cl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xl=r,n.target.dispatchEvent(r),xl=null}else return t=xo(n),t!==null&&Is(t),e.blockedOn=n,!1;t.shift()}return!0}function Du(e,t,n){Yo(e)&&n.delete(t)}function Nm(){El=!1,Bt!==null&&Yo(Bt)&&(Bt=null),Wt!==null&&Yo(Wt)&&(Wt=null),Vt!==null&&Yo(Vt)&&(Vt=null),Gr.forEach(Du),Kr.forEach(Du)}function wr(e,t){e.blockedOn===t&&(e.blockedOn=null,El||(El=!0,Be.unstable_scheduleCallback(Be.unstable_NormalPriority,Nm)))}function Yr(e){function t(o){return wr(o,e)}if(0<Lo.length){wr(Lo[0],e);for(var n=1;n<Lo.length;n++){var r=Lo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Bt!==null&&wr(Bt,e),Wt!==null&&wr(Wt,e),Vt!==null&&wr(Vt,e),Gr.forEach(t),Kr.forEach(t),n=0;n<Mt.length;n++)r=Mt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Mt.length&&(n=Mt[0],n.blockedOn===null);)fd(n),n.blockedOn===null&&Mt.shift()}var Qn=zt.ReactCurrentBatchConfig,yi=!0;function Im(e,t,n,r){var o=W,i=Qn.transition;Qn.transition=null;try{W=1,Rs(e,t,n,r)}finally{W=o,Qn.transition=i}}function Rm(e,t,n,r){var o=W,i=Qn.transition;Qn.transition=null;try{W=4,Rs(e,t,n,r)}finally{W=o,Qn.transition=i}}function Rs(e,t,n,r){if(yi){var o=Cl(e,t,n,r);if(o===null)Ia(e,t,r,vi,n),Au(e,r);else if(zm(o,e,t,n,r))r.stopPropagation();else if(Au(e,r),t&4&&-1<jm.indexOf(e)){for(;o!==null;){var i=xo(o);if(i!==null&&ld(i),i=Cl(e,t,n,r),i===null&&Ia(e,t,r,vi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ia(e,t,r,null,n)}}var vi=null;function Cl(e,t,n,r){if(vi=null,e=js(r),e=sn(e),e!==null)if(t=Sn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=qf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return vi=e,null}function dd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wm()){case zs:return 1;case rd:return 4;case hi:case km:return 16;case od:return 536870912;default:return 16}default:return 16}}var Dt=null,Ls=null,Xo=null;function pd(){if(Xo)return Xo;var e,t=Ls,n=t.length,r,o="value"in Dt?Dt.value:Dt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Xo=o.slice(e,1<r?1-r:void 0)}function Jo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Oo(){return!0}function Fu(){return!1}function Ve(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Oo:Fu,this.isPropagationStopped=Fu,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oo)},persist:function(){},isPersistent:Oo}),t}var fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Os=Ve(fr),vo=q({},fr,{view:0,detail:0}),Lm=Ve(vo),Sa,Ea,kr,Vi=q({},vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kr&&(kr&&e.type==="mousemove"?(Sa=e.screenX-kr.screenX,Ea=e.screenY-kr.screenY):Ea=Sa=0,kr=e),Sa)},movementY:function(e){return"movementY"in e?e.movementY:Ea}}),Uu=Ve(Vi),Om=q({},Vi,{dataTransfer:0}),bm=Ve(Om),Mm=q({},vo,{relatedTarget:0}),Ca=Ve(Mm),Am=q({},fr,{animationName:0,elapsedTime:0,pseudoElement:0}),Dm=Ve(Am),Fm=q({},fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Um=Ve(Fm),Bm=q({},fr,{data:0}),Bu=Ve(Bm),Wm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hm[e])?!!t[e]:!1}function bs(){return Qm}var Gm=q({},vo,{key:function(e){if(e.key){var t=Wm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bs,charCode:function(e){return e.type==="keypress"?Jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Km=Ve(Gm),Ym=q({},Vi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wu=Ve(Ym),Xm=q({},vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bs}),Jm=Ve(Xm),Zm=q({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),qm=Ve(Zm),eh=q({},Vi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),th=Ve(eh),nh=[9,13,27,32],Ms=Ct&&"CompositionEvent"in window,br=null;Ct&&"documentMode"in document&&(br=document.documentMode);var rh=Ct&&"TextEvent"in window&&!br,md=Ct&&(!Ms||br&&8<br&&11>=br),Vu=String.fromCharCode(32),Hu=!1;function hd(e,t){switch(e){case"keyup":return nh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var In=!1;function oh(e,t){switch(e){case"compositionend":return gd(t);case"keypress":return t.which!==32?null:(Hu=!0,Vu);case"textInput":return e=t.data,e===Vu&&Hu?null:e;default:return null}}function ih(e,t){if(In)return e==="compositionend"||!Ms&&hd(e,t)?(e=pd(),Xo=Ls=Dt=null,In=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return md&&t.locale!=="ko"?null:t.data;default:return null}}var ah={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ah[e.type]:t==="textarea"}function yd(e,t,n,r){Kf(r),t=xi(t,"onChange"),0<t.length&&(n=new Os("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Mr=null,Xr=null;function lh(e){$d(e,0)}function Hi(e){var t=On(e);if(Uf(t))return e}function sh(e,t){if(e==="change")return t}var vd=!1;if(Ct){var Ta;if(Ct){var Pa="oninput"in document;if(!Pa){var Gu=document.createElement("div");Gu.setAttribute("oninput","return;"),Pa=typeof Gu.oninput=="function"}Ta=Pa}else Ta=!1;vd=Ta&&(!document.documentMode||9<document.documentMode)}function Ku(){Mr&&(Mr.detachEvent("onpropertychange",xd),Xr=Mr=null)}function xd(e){if(e.propertyName==="value"&&Hi(Xr)){var t=[];yd(t,Xr,e,js(e)),Zf(lh,t)}}function uh(e,t,n){e==="focusin"?(Ku(),Mr=t,Xr=n,Mr.attachEvent("onpropertychange",xd)):e==="focusout"&&Ku()}function ch(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hi(Xr)}function fh(e,t){if(e==="click")return Hi(t)}function dh(e,t){if(e==="input"||e==="change")return Hi(t)}function ph(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var lt=typeof Object.is=="function"?Object.is:ph;function Jr(e,t){if(lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ll.call(t,o)||!lt(e[o],t[o]))return!1}return!0}function Yu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xu(e,t){var n=Yu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yu(n)}}function wd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function kd(){for(var e=window,t=di();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=di(e.document)}return t}function As(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function mh(e){var t=kd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&wd(n.ownerDocument.documentElement,n)){if(r!==null&&As(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Xu(n,i);var a=Xu(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hh=Ct&&"documentMode"in document&&11>=document.documentMode,Rn=null,Tl=null,Ar=null,Pl=!1;function Ju(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pl||Rn==null||Rn!==di(r)||(r=Rn,"selectionStart"in r&&As(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ar&&Jr(Ar,r)||(Ar=r,r=xi(Tl,"onSelect"),0<r.length&&(t=new Os("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Rn)))}function bo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ln={animationend:bo("Animation","AnimationEnd"),animationiteration:bo("Animation","AnimationIteration"),animationstart:bo("Animation","AnimationStart"),transitionend:bo("Transition","TransitionEnd")},$a={},_d={};Ct&&(_d=document.createElement("div").style,"AnimationEvent"in window||(delete Ln.animationend.animation,delete Ln.animationiteration.animation,delete Ln.animationstart.animation),"TransitionEvent"in window||delete Ln.transitionend.transition);function Qi(e){if($a[e])return $a[e];if(!Ln[e])return e;var t=Ln[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in _d)return $a[e]=t[n];return e}var Sd=Qi("animationend"),Ed=Qi("animationiteration"),Cd=Qi("animationstart"),Td=Qi("transitionend"),Pd=new Map,Zu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function en(e,t){Pd.set(e,t),_n(t,[e])}for(var ja=0;ja<Zu.length;ja++){var za=Zu[ja],gh=za.toLowerCase(),yh=za[0].toUpperCase()+za.slice(1);en(gh,"on"+yh)}en(Sd,"onAnimationEnd");en(Ed,"onAnimationIteration");en(Cd,"onAnimationStart");en("dblclick","onDoubleClick");en("focusin","onFocus");en("focusout","onBlur");en(Td,"onTransitionEnd");Xn("onMouseEnter",["mouseout","mouseover"]);Xn("onMouseLeave",["mouseout","mouseover"]);Xn("onPointerEnter",["pointerout","pointerover"]);Xn("onPointerLeave",["pointerout","pointerover"]);_n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_n("onBeforeInput",["compositionend","keypress","textInput","paste"]);_n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ir="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));function qu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,gm(r,t,void 0,e),e.currentTarget=null}function $d(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;qu(o,l,u),i=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;qu(o,l,u),i=s}}}if(mi)throw e=_l,mi=!1,_l=null,e}function H(e,t){var n=t[Il];n===void 0&&(n=t[Il]=new Set);var r=e+"__bubble";n.has(r)||(jd(t,e,2,!1),n.add(r))}function Na(e,t,n){var r=0;t&&(r|=4),jd(n,e,r,t)}var Mo="_reactListening"+Math.random().toString(36).slice(2);function Zr(e){if(!e[Mo]){e[Mo]=!0,bf.forEach(function(n){n!=="selectionchange"&&(vh.has(n)||Na(n,!1,e),Na(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mo]||(t[Mo]=!0,Na("selectionchange",!1,t))}}function jd(e,t,n,r){switch(dd(t)){case 1:var o=Im;break;case 4:o=Rm;break;default:o=Rs}n=o.bind(null,t,n,e),o=void 0,!kl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ia(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;l!==null;){if(a=sn(l),a===null)return;if(s=a.tag,s===5||s===6){r=i=a;continue e}l=l.parentNode}}r=r.return}Zf(function(){var u=i,m=js(n),p=[];e:{var h=Pd.get(e);if(h!==void 0){var x=Os,w=e;switch(e){case"keypress":if(Jo(n)===0)break e;case"keydown":case"keyup":x=Km;break;case"focusin":w="focus",x=Ca;break;case"focusout":w="blur",x=Ca;break;case"beforeblur":case"afterblur":x=Ca;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Uu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=bm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Jm;break;case Sd:case Ed:case Cd:x=Dm;break;case Td:x=qm;break;case"scroll":x=Lm;break;case"wheel":x=th;break;case"copy":case"cut":case"paste":x=Um;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Wu}var y=(t&4)!==0,_=!y&&e==="scroll",d=y?h!==null?h+"Capture":null:h;y=[];for(var c=u,f;c!==null;){f=c;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,d!==null&&(v=Qr(c,d),v!=null&&y.push(qr(c,v,f)))),_)break;c=c.return}0<y.length&&(h=new x(h,w,null,n,m),p.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",h&&n!==xl&&(w=n.relatedTarget||n.fromElement)&&(sn(w)||w[Tt]))break e;if((x||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,x?(w=n.relatedTarget||n.toElement,x=u,w=w?sn(w):null,w!==null&&(_=Sn(w),w!==_||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=u),x!==w)){if(y=Uu,v="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=Wu,v="onPointerLeave",d="onPointerEnter",c="pointer"),_=x==null?h:On(x),f=w==null?h:On(w),h=new y(v,c+"leave",x,n,m),h.target=_,h.relatedTarget=f,v=null,sn(m)===u&&(y=new y(d,c+"enter",w,n,m),y.target=f,y.relatedTarget=_,v=y),_=v,x&&w)t:{for(y=x,d=w,c=0,f=y;f;f=$n(f))c++;for(f=0,v=d;v;v=$n(v))f++;for(;0<c-f;)y=$n(y),c--;for(;0<f-c;)d=$n(d),f--;for(;c--;){if(y===d||d!==null&&y===d.alternate)break t;y=$n(y),d=$n(d)}y=null}else y=null;x!==null&&ec(p,h,x,y,!1),w!==null&&_!==null&&ec(p,_,w,y,!0)}}e:{if(h=u?On(u):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var S=sh;else if(Qu(h))if(vd)S=dh;else{S=ch;var C=uh}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=fh);if(S&&(S=S(e,u))){yd(p,S,n,m);break e}C&&C(e,h,u),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&ml(h,"number",h.value)}switch(C=u?On(u):window,e){case"focusin":(Qu(C)||C.contentEditable==="true")&&(Rn=C,Tl=u,Ar=null);break;case"focusout":Ar=Tl=Rn=null;break;case"mousedown":Pl=!0;break;case"contextmenu":case"mouseup":case"dragend":Pl=!1,Ju(p,n,m);break;case"selectionchange":if(hh)break;case"keydown":case"keyup":Ju(p,n,m)}var k;if(Ms)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else In?hd(e,n)&&($="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&($="onCompositionStart");$&&(md&&n.locale!=="ko"&&(In||$!=="onCompositionStart"?$==="onCompositionEnd"&&In&&(k=pd()):(Dt=m,Ls="value"in Dt?Dt.value:Dt.textContent,In=!0)),C=xi(u,$),0<C.length&&($=new Bu($,e,null,n,m),p.push({event:$,listeners:C}),k?$.data=k:(k=gd(n),k!==null&&($.data=k)))),(k=rh?oh(e,n):ih(e,n))&&(u=xi(u,"onBeforeInput"),0<u.length&&(m=new Bu("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:u}),m.data=k))}$d(p,t)})}function qr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Qr(e,n),i!=null&&r.unshift(qr(e,i,o)),i=Qr(e,t),i!=null&&r.push(qr(e,i,o))),e=e.return}return r}function $n(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ec(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,o?(s=Qr(n,i),s!=null&&a.unshift(qr(n,s,l))):o||(s=Qr(n,i),s!=null&&a.push(qr(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var xh=/\r\n?/g,wh=/\u0000|\uFFFD/g;function tc(e){return(typeof e=="string"?e:""+e).replace(xh,`
`).replace(wh,"")}function Ao(e,t,n){if(t=tc(t),tc(e)!==t&&n)throw Error(T(425))}function wi(){}var $l=null,jl=null;function zl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Nl=typeof setTimeout=="function"?setTimeout:void 0,kh=typeof clearTimeout=="function"?clearTimeout:void 0,nc=typeof Promise=="function"?Promise:void 0,_h=typeof queueMicrotask=="function"?queueMicrotask:typeof nc<"u"?function(e){return nc.resolve(null).then(e).catch(Sh)}:Nl;function Sh(e){setTimeout(function(){throw e})}function Ra(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Yr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Yr(t)}function Ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function rc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var dr=Math.random().toString(36).slice(2),mt="__reactFiber$"+dr,eo="__reactProps$"+dr,Tt="__reactContainer$"+dr,Il="__reactEvents$"+dr,Eh="__reactListeners$"+dr,Ch="__reactHandles$"+dr;function sn(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Tt]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=rc(e);e!==null;){if(n=e[mt])return n;e=rc(e)}return t}e=n,n=e.parentNode}return null}function xo(e){return e=e[mt]||e[Tt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function On(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function Gi(e){return e[eo]||null}var Rl=[],bn=-1;function tn(e){return{current:e}}function G(e){0>bn||(e.current=Rl[bn],Rl[bn]=null,bn--)}function V(e,t){bn++,Rl[bn]=e.current,e.current=t}var qt={},_e=tn(qt),Ie=tn(!1),gn=qt;function Jn(e,t){var n=e.type.contextTypes;if(!n)return qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Re(e){return e=e.childContextTypes,e!=null}function ki(){G(Ie),G(_e)}function oc(e,t,n){if(_e.current!==qt)throw Error(T(168));V(_e,t),V(Ie,n)}function zd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(T(108,um(e)||"Unknown",o));return q({},n,r)}function _i(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qt,gn=_e.current,V(_e,e),V(Ie,Ie.current),!0}function ic(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=zd(e,t,gn),r.__reactInternalMemoizedMergedChildContext=e,G(Ie),G(_e),V(_e,e)):G(Ie),V(Ie,n)}var kt=null,Ki=!1,La=!1;function Nd(e){kt===null?kt=[e]:kt.push(e)}function Th(e){Ki=!0,Nd(e)}function nn(){if(!La&&kt!==null){La=!0;var e=0,t=W;try{var n=kt;for(W=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}kt=null,Ki=!1}catch(o){throw kt!==null&&(kt=kt.slice(e+1)),nd(zs,nn),o}finally{W=t,La=!1}}return null}var Mn=[],An=0,Si=null,Ei=0,Ge=[],Ke=0,yn=null,_t=1,St="";function on(e,t){Mn[An++]=Ei,Mn[An++]=Si,Si=e,Ei=t}function Id(e,t,n){Ge[Ke++]=_t,Ge[Ke++]=St,Ge[Ke++]=yn,yn=e;var r=_t;e=St;var o=32-ot(r)-1;r&=~(1<<o),n+=1;var i=32-ot(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,_t=1<<32-ot(t)+o|n<<o|r,St=i+e}else _t=1<<i|n<<o|r,St=e}function Ds(e){e.return!==null&&(on(e,1),Id(e,1,0))}function Fs(e){for(;e===Si;)Si=Mn[--An],Mn[An]=null,Ei=Mn[--An],Mn[An]=null;for(;e===yn;)yn=Ge[--Ke],Ge[Ke]=null,St=Ge[--Ke],Ge[Ke]=null,_t=Ge[--Ke],Ge[Ke]=null}var Fe=null,De=null,Y=!1,rt=null;function Rd(e,t){var n=Ye(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ac(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Fe=e,De=Ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Fe=e,De=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=yn!==null?{id:_t,overflow:St}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ye(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Fe=e,De=null,!0):!1;default:return!1}}function Ll(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ol(e){if(Y){var t=De;if(t){var n=t;if(!ac(e,t)){if(Ll(e))throw Error(T(418));t=Ht(n.nextSibling);var r=Fe;t&&ac(e,t)?Rd(r,n):(e.flags=e.flags&-4097|2,Y=!1,Fe=e)}}else{if(Ll(e))throw Error(T(418));e.flags=e.flags&-4097|2,Y=!1,Fe=e}}}function lc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Fe=e}function Do(e){if(e!==Fe)return!1;if(!Y)return lc(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!zl(e.type,e.memoizedProps)),t&&(t=De)){if(Ll(e))throw Ld(),Error(T(418));for(;t;)Rd(e,t),t=Ht(t.nextSibling)}if(lc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){De=Ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}De=null}}else De=Fe?Ht(e.stateNode.nextSibling):null;return!0}function Ld(){for(var e=De;e;)e=Ht(e.nextSibling)}function Zn(){De=Fe=null,Y=!1}function Us(e){rt===null?rt=[e]:rt.push(e)}var Ph=zt.ReactCurrentBatchConfig;function tt(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ci=tn(null),Ti=null,Dn=null,Bs=null;function Ws(){Bs=Dn=Ti=null}function Vs(e){var t=Ci.current;G(Ci),e._currentValue=t}function bl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Gn(e,t){Ti=e,Bs=Dn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ne=!0),e.firstContext=null)}function Je(e){var t=e._currentValue;if(Bs!==e)if(e={context:e,memoizedValue:t,next:null},Dn===null){if(Ti===null)throw Error(T(308));Dn=e,Ti.dependencies={lanes:0,firstContext:e}}else Dn=Dn.next=e;return t}var un=null;function Hs(e){un===null?un=[e]:un.push(e)}function Od(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Hs(t)):(n.next=o.next,o.next=n),t.interleaved=n,Pt(e,r)}function Pt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var bt=!1;function Qs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Qt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Pt(e,n)}return o=r.interleaved,o===null?(t.next=t,Hs(r)):(t.next=o.next,o.next=t),r.interleaved=t,Pt(e,n)}function Zo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ns(e,n)}}function sc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Pi(e,t,n,r){var o=e.updateQueue;bt=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?i=u:a.next=u,a=s;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==a&&(l===null?m.firstBaseUpdate=u:l.next=u,m.lastBaseUpdate=s))}if(i!==null){var p=o.baseState;a=0,m=u=s=null,l=i;do{var h=l.lane,x=l.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,y=l;switch(h=t,x=n,y.tag){case 1:if(w=y.payload,typeof w=="function"){p=w.call(x,p,h);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,h=typeof w=="function"?w.call(x,p,h):w,h==null)break e;p=q({},p,h);break e;case 2:bt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[l]:h.push(l))}else x={eventTime:x,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(u=m=x,s=p):m=m.next=x,a|=h;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;h=l,l=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(1);if(m===null&&(s=p),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=m,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);xn|=a,e.lanes=a,e.memoizedState=p}}function uc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(T(191,o));o.call(r)}}}var Md=new Of.Component().refs;function Ml(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Yi={isMounted:function(e){return(e=e._reactInternals)?Sn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Pe(),o=Kt(e),i=Et(r,o);i.payload=t,n!=null&&(i.callback=n),t=Qt(e,i,o),t!==null&&(it(t,e,o,r),Zo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Pe(),o=Kt(e),i=Et(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Qt(e,i,o),t!==null&&(it(t,e,o,r),Zo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Pe(),r=Kt(e),o=Et(n,r);o.tag=2,t!=null&&(o.callback=t),t=Qt(e,o,r),t!==null&&(it(t,e,r,n),Zo(t,e,r))}};function cc(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Jr(n,r)||!Jr(o,i):!0}function Ad(e,t,n){var r=!1,o=qt,i=t.contextType;return typeof i=="object"&&i!==null?i=Je(i):(o=Re(t)?gn:_e.current,r=t.contextTypes,i=(r=r!=null)?Jn(e,o):qt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Yi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function fc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Yi.enqueueReplaceState(t,t.state,null)}function Al(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Md,Qs(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Je(i):(i=Re(t)?gn:_e.current,o.context=Jn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ml(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Yi.enqueueReplaceState(o,o.state,null),Pi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function _r(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=o.refs;l===Md&&(l=o.refs={}),a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function Fo(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function dc(e){var t=e._init;return t(e._payload)}function Dd(e){function t(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function o(d,c){return d=Yt(d,c),d.index=0,d.sibling=null,d}function i(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function a(d){return e&&d.alternate===null&&(d.flags|=2),d}function l(d,c,f,v){return c===null||c.tag!==6?(c=Ua(f,d.mode,v),c.return=d,c):(c=o(c,f),c.return=d,c)}function s(d,c,f,v){var S=f.type;return S===Nn?m(d,c,f.props.children,v,f.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ot&&dc(S)===c.type)?(v=o(c,f.props),v.ref=_r(d,c,f),v.return=d,v):(v=oi(f.type,f.key,f.props,null,d.mode,v),v.ref=_r(d,c,f),v.return=d,v)}function u(d,c,f,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=Ba(f,d.mode,v),c.return=d,c):(c=o(c,f.children||[]),c.return=d,c)}function m(d,c,f,v,S){return c===null||c.tag!==7?(c=pn(f,d.mode,v,S),c.return=d,c):(c=o(c,f),c.return=d,c)}function p(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Ua(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case jo:return f=oi(c.type,c.key,c.props,null,d.mode,f),f.ref=_r(d,null,c),f.return=d,f;case zn:return c=Ba(c,d.mode,f),c.return=d,c;case Ot:var v=c._init;return p(d,v(c._payload),f)}if(zr(c)||yr(c))return c=pn(c,d.mode,f,null),c.return=d,c;Fo(d,c)}return null}function h(d,c,f,v){var S=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:l(d,c,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case jo:return f.key===S?s(d,c,f,v):null;case zn:return f.key===S?u(d,c,f,v):null;case Ot:return S=f._init,h(d,c,S(f._payload),v)}if(zr(f)||yr(f))return S!==null?null:m(d,c,f,v,null);Fo(d,f)}return null}function x(d,c,f,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(f)||null,l(c,d,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case jo:return d=d.get(v.key===null?f:v.key)||null,s(c,d,v,S);case zn:return d=d.get(v.key===null?f:v.key)||null,u(c,d,v,S);case Ot:var C=v._init;return x(d,c,f,C(v._payload),S)}if(zr(v)||yr(v))return d=d.get(f)||null,m(c,d,v,S,null);Fo(c,v)}return null}function w(d,c,f,v){for(var S=null,C=null,k=c,$=c=0,L=null;k!==null&&$<f.length;$++){k.index>$?(L=k,k=null):L=k.sibling;var N=h(d,k,f[$],v);if(N===null){k===null&&(k=L);break}e&&k&&N.alternate===null&&t(d,k),c=i(N,c,$),C===null?S=N:C.sibling=N,C=N,k=L}if($===f.length)return n(d,k),Y&&on(d,$),S;if(k===null){for(;$<f.length;$++)k=p(d,f[$],v),k!==null&&(c=i(k,c,$),C===null?S=k:C.sibling=k,C=k);return Y&&on(d,$),S}for(k=r(d,k);$<f.length;$++)L=x(k,d,$,f[$],v),L!==null&&(e&&L.alternate!==null&&k.delete(L.key===null?$:L.key),c=i(L,c,$),C===null?S=L:C.sibling=L,C=L);return e&&k.forEach(function(X){return t(d,X)}),Y&&on(d,$),S}function y(d,c,f,v){var S=yr(f);if(typeof S!="function")throw Error(T(150));if(f=S.call(f),f==null)throw Error(T(151));for(var C=S=null,k=c,$=c=0,L=null,N=f.next();k!==null&&!N.done;$++,N=f.next()){k.index>$?(L=k,k=null):L=k.sibling;var X=h(d,k,N.value,v);if(X===null){k===null&&(k=L);break}e&&k&&X.alternate===null&&t(d,k),c=i(X,c,$),C===null?S=X:C.sibling=X,C=X,k=L}if(N.done)return n(d,k),Y&&on(d,$),S;if(k===null){for(;!N.done;$++,N=f.next())N=p(d,N.value,v),N!==null&&(c=i(N,c,$),C===null?S=N:C.sibling=N,C=N);return Y&&on(d,$),S}for(k=r(d,k);!N.done;$++,N=f.next())N=x(k,d,$,N.value,v),N!==null&&(e&&N.alternate!==null&&k.delete(N.key===null?$:N.key),c=i(N,c,$),C===null?S=N:C.sibling=N,C=N);return e&&k.forEach(function(He){return t(d,He)}),Y&&on(d,$),S}function _(d,c,f,v){if(typeof f=="object"&&f!==null&&f.type===Nn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case jo:e:{for(var S=f.key,C=c;C!==null;){if(C.key===S){if(S=f.type,S===Nn){if(C.tag===7){n(d,C.sibling),c=o(C,f.props.children),c.return=d,d=c;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ot&&dc(S)===C.type){n(d,C.sibling),c=o(C,f.props),c.ref=_r(d,C,f),c.return=d,d=c;break e}n(d,C);break}else t(d,C);C=C.sibling}f.type===Nn?(c=pn(f.props.children,d.mode,v,f.key),c.return=d,d=c):(v=oi(f.type,f.key,f.props,null,d.mode,v),v.ref=_r(d,c,f),v.return=d,d=v)}return a(d);case zn:e:{for(C=f.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(d,c.sibling),c=o(c,f.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=Ba(f,d.mode,v),c.return=d,d=c}return a(d);case Ot:return C=f._init,_(d,c,C(f._payload),v)}if(zr(f))return w(d,c,f,v);if(yr(f))return y(d,c,f,v);Fo(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(d,c.sibling),c=o(c,f),c.return=d,d=c):(n(d,c),c=Ua(f,d.mode,v),c.return=d,d=c),a(d)):n(d,c)}return _}var qn=Dd(!0),Fd=Dd(!1),wo={},gt=tn(wo),to=tn(wo),no=tn(wo);function cn(e){if(e===wo)throw Error(T(174));return e}function Gs(e,t){switch(V(no,t),V(to,e),V(gt,wo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:gl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=gl(t,e)}G(gt),V(gt,t)}function er(){G(gt),G(to),G(no)}function Ud(e){cn(no.current);var t=cn(gt.current),n=gl(t,e.type);t!==n&&(V(to,e),V(gt,n))}function Ks(e){to.current===e&&(G(gt),G(to))}var J=tn(0);function $i(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Oa=[];function Ys(){for(var e=0;e<Oa.length;e++)Oa[e]._workInProgressVersionPrimary=null;Oa.length=0}var qo=zt.ReactCurrentDispatcher,ba=zt.ReactCurrentBatchConfig,vn=0,Z=null,le=null,ue=null,ji=!1,Dr=!1,ro=0,$h=0;function ye(){throw Error(T(321))}function Xs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lt(e[n],t[n]))return!1;return!0}function Js(e,t,n,r,o,i){if(vn=i,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qo.current=e===null||e.memoizedState===null?Ih:Rh,e=n(r,o),Dr){i=0;do{if(Dr=!1,ro=0,25<=i)throw Error(T(301));i+=1,ue=le=null,t.updateQueue=null,qo.current=Lh,e=n(r,o)}while(Dr)}if(qo.current=zi,t=le!==null&&le.next!==null,vn=0,ue=le=Z=null,ji=!1,t)throw Error(T(300));return e}function Zs(){var e=ro!==0;return ro=0,e}function ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?Z.memoizedState=ue=e:ue=ue.next=e,ue}function Ze(){if(le===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=ue===null?Z.memoizedState:ue.next;if(t!==null)ue=t,le=e;else{if(e===null)throw Error(T(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},ue===null?Z.memoizedState=ue=e:ue=ue.next=e}return ue}function oo(e,t){return typeof t=="function"?t(e):t}function Ma(e){var t=Ze(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=le,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,s=null,u=i;do{var m=u.lane;if((vn&m)===m)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=p,a=r):s=s.next=p,Z.lanes|=m,xn|=m}u=u.next}while(u!==null&&u!==i);s===null?a=r:s.next=l,lt(r,t.memoizedState)||(Ne=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Z.lanes|=i,xn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Aa(e){var t=Ze(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);lt(i,t.memoizedState)||(Ne=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Bd(){}function Wd(e,t){var n=Z,r=Ze(),o=t(),i=!lt(r.memoizedState,o);if(i&&(r.memoizedState=o,Ne=!0),r=r.queue,qs(Qd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,io(9,Hd.bind(null,n,r,o,t),void 0,null),fe===null)throw Error(T(349));vn&30||Vd(n,t,o)}return o}function Vd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Hd(e,t,n,r){t.value=n,t.getSnapshot=r,Gd(t)&&Kd(e)}function Qd(e,t,n){return n(function(){Gd(t)&&Kd(e)})}function Gd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lt(e,n)}catch{return!0}}function Kd(e){var t=Pt(e,1);t!==null&&it(t,e,1,-1)}function pc(e){var t=ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oo,lastRenderedState:e},t.queue=e,e=e.dispatch=Nh.bind(null,Z,e),[t.memoizedState,e]}function io(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Yd(){return Ze().memoizedState}function ei(e,t,n,r){var o=ct();Z.flags|=e,o.memoizedState=io(1|t,n,void 0,r===void 0?null:r)}function Xi(e,t,n,r){var o=Ze();r=r===void 0?null:r;var i=void 0;if(le!==null){var a=le.memoizedState;if(i=a.destroy,r!==null&&Xs(r,a.deps)){o.memoizedState=io(t,n,i,r);return}}Z.flags|=e,o.memoizedState=io(1|t,n,i,r)}function mc(e,t){return ei(8390656,8,e,t)}function qs(e,t){return Xi(2048,8,e,t)}function Xd(e,t){return Xi(4,2,e,t)}function Jd(e,t){return Xi(4,4,e,t)}function Zd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qd(e,t,n){return n=n!=null?n.concat([e]):null,Xi(4,4,Zd.bind(null,t,e),n)}function eu(){}function ep(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function tp(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function np(e,t,n){return vn&21?(lt(n,t)||(n=id(),Z.lanes|=n,xn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ne=!0),e.memoizedState=n)}function jh(e,t){var n=W;W=n!==0&&4>n?n:4,e(!0);var r=ba.transition;ba.transition={};try{e(!1),t()}finally{W=n,ba.transition=r}}function rp(){return Ze().memoizedState}function zh(e,t,n){var r=Kt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},op(e))ip(t,n);else if(n=Od(e,t,n,r),n!==null){var o=Pe();it(n,e,r,o),ap(n,t,r)}}function Nh(e,t,n){var r=Kt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(op(e))ip(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,lt(l,a)){var s=t.interleaved;s===null?(o.next=o,Hs(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Od(e,t,o,r),n!==null&&(o=Pe(),it(n,e,r,o),ap(n,t,r))}}function op(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function ip(e,t){Dr=ji=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ap(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ns(e,n)}}var zi={readContext:Je,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},Ih={readContext:Je,useCallback:function(e,t){return ct().memoizedState=[e,t===void 0?null:t],e},useContext:Je,useEffect:mc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ei(4194308,4,Zd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ei(4194308,4,e,t)},useInsertionEffect:function(e,t){return ei(4,2,e,t)},useMemo:function(e,t){var n=ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=zh.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=ct();return e={current:e},t.memoizedState=e},useState:pc,useDebugValue:eu,useDeferredValue:function(e){return ct().memoizedState=e},useTransition:function(){var e=pc(!1),t=e[0];return e=jh.bind(null,e[1]),ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Z,o=ct();if(Y){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),fe===null)throw Error(T(349));vn&30||Vd(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,mc(Qd.bind(null,r,i,e),[e]),r.flags|=2048,io(9,Hd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ct(),t=fe.identifierPrefix;if(Y){var n=St,r=_t;n=(r&~(1<<32-ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ro++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=$h++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Rh={readContext:Je,useCallback:ep,useContext:Je,useEffect:qs,useImperativeHandle:qd,useInsertionEffect:Xd,useLayoutEffect:Jd,useMemo:tp,useReducer:Ma,useRef:Yd,useState:function(){return Ma(oo)},useDebugValue:eu,useDeferredValue:function(e){var t=Ze();return np(t,le.memoizedState,e)},useTransition:function(){var e=Ma(oo)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:Bd,useSyncExternalStore:Wd,useId:rp,unstable_isNewReconciler:!1},Lh={readContext:Je,useCallback:ep,useContext:Je,useEffect:qs,useImperativeHandle:qd,useInsertionEffect:Xd,useLayoutEffect:Jd,useMemo:tp,useReducer:Aa,useRef:Yd,useState:function(){return Aa(oo)},useDebugValue:eu,useDeferredValue:function(e){var t=Ze();return le===null?t.memoizedState=e:np(t,le.memoizedState,e)},useTransition:function(){var e=Aa(oo)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:Bd,useSyncExternalStore:Wd,useId:rp,unstable_isNewReconciler:!1};function tr(e,t){try{var n="",r=t;do n+=sm(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Da(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Dl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Oh=typeof WeakMap=="function"?WeakMap:Map;function lp(e,t,n){n=Et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ii||(Ii=!0,Yl=r),Dl(e,t)},n}function sp(e,t,n){n=Et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Dl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Dl(e,t),typeof r!="function"&&(Gt===null?Gt=new Set([this]):Gt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function hc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Oh;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Yh.bind(null,e,t,n),t.then(e,e))}function gc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function yc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Et(-1,1),t.tag=2,Qt(n,t,1))),n.lanes|=1),e)}var bh=zt.ReactCurrentOwner,Ne=!1;function Ce(e,t,n,r){t.child=e===null?Fd(t,null,n,r):qn(t,e.child,n,r)}function vc(e,t,n,r,o){n=n.render;var i=t.ref;return Gn(t,o),r=Js(e,t,n,r,i,o),n=Zs(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,$t(e,t,o)):(Y&&n&&Ds(t),t.flags|=1,Ce(e,t,r,o),t.child)}function xc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!su(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,up(e,t,i,r,o)):(e=oi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Jr,n(a,r)&&e.ref===t.ref)return $t(e,t,o)}return t.flags|=1,e=Yt(i,r),e.ref=t.ref,e.return=t,t.child=e}function up(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Jr(i,r)&&e.ref===t.ref)if(Ne=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ne=!0);else return t.lanes=e.lanes,$t(e,t,o)}return Fl(e,t,n,r,o)}function cp(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(Un,Ae),Ae|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(Un,Ae),Ae|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,V(Un,Ae),Ae|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,V(Un,Ae),Ae|=r;return Ce(e,t,o,n),t.child}function fp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Fl(e,t,n,r,o){var i=Re(n)?gn:_e.current;return i=Jn(t,i),Gn(t,o),n=Js(e,t,n,r,i,o),r=Zs(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,$t(e,t,o)):(Y&&r&&Ds(t),t.flags|=1,Ce(e,t,n,o),t.child)}function wc(e,t,n,r,o){if(Re(n)){var i=!0;_i(t)}else i=!1;if(Gn(t,o),t.stateNode===null)ti(e,t),Ad(t,n,r),Al(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Je(u):(u=Re(n)?gn:_e.current,u=Jn(t,u));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&fc(t,a,r,u),bt=!1;var h=t.memoizedState;a.state=h,Pi(t,r,a,o),s=t.memoizedState,l!==r||h!==s||Ie.current||bt?(typeof m=="function"&&(Ml(t,n,m,r),s=t.memoizedState),(l=bt||cc(t,n,l,r,h,s,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,bd(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:tt(t.type,l),a.props=u,p=t.pendingProps,h=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Je(s):(s=Re(n)?gn:_e.current,s=Jn(t,s));var x=n.getDerivedStateFromProps;(m=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||h!==s)&&fc(t,a,r,s),bt=!1,h=t.memoizedState,a.state=h,Pi(t,r,a,o);var w=t.memoizedState;l!==p||h!==w||Ie.current||bt?(typeof x=="function"&&(Ml(t,n,x,r),w=t.memoizedState),(u=bt||cc(t,n,u,r,h,w,s)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,w,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,w,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),a.props=r,a.state=w,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ul(e,t,n,r,i,o)}function Ul(e,t,n,r,o,i){fp(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&ic(t,n,!1),$t(e,t,i);r=t.stateNode,bh.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=qn(t,e.child,null,i),t.child=qn(t,null,l,i)):Ce(e,t,l,i),t.memoizedState=r.state,o&&ic(t,n,!0),t.child}function dp(e){var t=e.stateNode;t.pendingContext?oc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&oc(e,t.context,!1),Gs(e,t.containerInfo)}function kc(e,t,n,r,o){return Zn(),Us(o),t.flags|=256,Ce(e,t,n,r),t.child}var Bl={dehydrated:null,treeContext:null,retryLane:0};function Wl(e){return{baseLanes:e,cachePool:null,transitions:null}}function pp(e,t,n){var r=t.pendingProps,o=J.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),V(J,o&1),e===null)return Ol(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=qi(a,r,0,null),e=pn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Wl(n),t.memoizedState=Bl,e):tu(t,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return Mh(e,t,a,r,l,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Yt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=Yt(l,i):(i=pn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Wl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Bl,r}return i=e.child,e=i.sibling,r=Yt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function tu(e,t){return t=qi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Uo(e,t,n,r){return r!==null&&Us(r),qn(t,e.child,null,n),e=tu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Mh(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Da(Error(T(422))),Uo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=qi({mode:"visible",children:r.children},o,0,null),i=pn(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&qn(t,e.child,null,a),t.child.memoizedState=Wl(a),t.memoizedState=Bl,i);if(!(t.mode&1))return Uo(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(T(419)),r=Da(i,r,void 0),Uo(e,t,a,r)}if(l=(a&e.childLanes)!==0,Ne||l){if(r=fe,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Pt(e,o),it(r,e,o,-1))}return lu(),r=Da(Error(T(421))),Uo(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Xh.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,De=Ht(o.nextSibling),Fe=t,Y=!0,rt=null,e!==null&&(Ge[Ke++]=_t,Ge[Ke++]=St,Ge[Ke++]=yn,_t=e.id,St=e.overflow,yn=t),t=tu(t,r.children),t.flags|=4096,t)}function _c(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),bl(e.return,t,n)}function Fa(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function mp(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ce(e,t,r.children,n),r=J.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_c(e,n,t);else if(e.tag===19)_c(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(J,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&$i(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Fa(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&$i(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Fa(t,!0,n,null,i);break;case"together":Fa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ti(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function $t(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),xn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=Yt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ah(e,t,n){switch(t.tag){case 3:dp(t),Zn();break;case 5:Ud(t);break;case 1:Re(t.type)&&_i(t);break;case 4:Gs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;V(Ci,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(J,J.current&1),t.flags|=128,null):n&t.child.childLanes?pp(e,t,n):(V(J,J.current&1),e=$t(e,t,n),e!==null?e.sibling:null);V(J,J.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return mp(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),V(J,J.current),r)break;return null;case 22:case 23:return t.lanes=0,cp(e,t,n)}return $t(e,t,n)}var hp,Vl,gp,yp;hp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vl=function(){};gp=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,cn(gt.current);var i=null;switch(n){case"input":o=dl(e,o),r=dl(e,r),i=[];break;case"select":o=q({},o,{value:void 0}),r=q({},r,{value:void 0}),i=[];break;case"textarea":o=hl(e,o),r=hl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=wi)}yl(n,r);var a;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Vr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Vr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&H("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};yp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Sr(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Dh(e,t,n){var r=t.pendingProps;switch(Fs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return Re(t.type)&&ki(),ve(t),null;case 3:return r=t.stateNode,er(),G(Ie),G(_e),Ys(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Do(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,rt!==null&&(Zl(rt),rt=null))),Vl(e,t),ve(t),null;case 5:Ks(t);var o=cn(no.current);if(n=t.type,e!==null&&t.stateNode!=null)gp(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return ve(t),null}if(e=cn(gt.current),Do(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[mt]=t,r[eo]=i,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(o=0;o<Ir.length;o++)H(Ir[o],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":Nu(r,i),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},H("invalid",r);break;case"textarea":Ru(r,i),H("invalid",r)}yl(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Ao(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Ao(r.textContent,l,e),o=["children",""+l]):Vr.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&H("scroll",r)}switch(n){case"input":zo(r),Iu(r,i,!0);break;case"textarea":zo(r),Lu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=wi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Vf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[mt]=t,e[eo]=r,hp(e,t,!1,!1),t.stateNode=e;e:{switch(a=vl(n,r),n){case"dialog":H("cancel",e),H("close",e),o=r;break;case"iframe":case"object":case"embed":H("load",e),o=r;break;case"video":case"audio":for(o=0;o<Ir.length;o++)H(Ir[o],e);o=r;break;case"source":H("error",e),o=r;break;case"img":case"image":case"link":H("error",e),H("load",e),o=r;break;case"details":H("toggle",e),o=r;break;case"input":Nu(e,r),o=dl(e,r),H("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=q({},r,{value:void 0}),H("invalid",e);break;case"textarea":Ru(e,r),o=hl(e,r),H("invalid",e);break;default:o=r}yl(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?Gf(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Hf(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Hr(e,s):typeof s=="number"&&Hr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Vr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&H("scroll",e):s!=null&&Cs(e,i,s,a))}switch(n){case"input":zo(e),Iu(e,r,!1);break;case"textarea":zo(e),Lu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Zt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Wn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Wn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=wi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)yp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=cn(no.current),cn(gt.current),Do(t)){if(r=t.stateNode,n=t.memoizedProps,r[mt]=t,(i=r.nodeValue!==n)&&(e=Fe,e!==null))switch(e.tag){case 3:Ao(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ao(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mt]=t,t.stateNode=r}return ve(t),null;case 13:if(G(J),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&De!==null&&t.mode&1&&!(t.flags&128))Ld(),Zn(),t.flags|=98560,i=!1;else if(i=Do(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(T(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(T(317));i[mt]=t}else Zn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),i=!1}else rt!==null&&(Zl(rt),rt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||J.current&1?se===0&&(se=3):lu())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return er(),Vl(e,t),e===null&&Zr(t.stateNode.containerInfo),ve(t),null;case 10:return Vs(t.type._context),ve(t),null;case 17:return Re(t.type)&&ki(),ve(t),null;case 19:if(G(J),i=t.memoizedState,i===null)return ve(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Sr(i,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=$i(e),a!==null){for(t.flags|=128,Sr(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(J,J.current&1|2),t.child}e=e.sibling}i.tail!==null&&ne()>nr&&(t.flags|=128,r=!0,Sr(i,!1),t.lanes=4194304)}else{if(!r)if(e=$i(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Sr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!Y)return ve(t),null}else 2*ne()-i.renderingStartTime>nr&&n!==1073741824&&(t.flags|=128,r=!0,Sr(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ne(),t.sibling=null,n=J.current,V(J,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return au(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ae&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function Fh(e,t){switch(Fs(t),t.tag){case 1:return Re(t.type)&&ki(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return er(),G(Ie),G(_e),Ys(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ks(t),null;case 13:if(G(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));Zn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(J),null;case 4:return er(),null;case 10:return Vs(t.type._context),null;case 22:case 23:return au(),null;case 24:return null;default:return null}}var Bo=!1,we=!1,Uh=typeof WeakSet=="function"?WeakSet:Set,z=null;function Fn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(e,t,r)}else n.current=null}function Hl(e,t,n){try{n()}catch(r){te(e,t,r)}}var Sc=!1;function Bh(e,t){if($l=yi,e=kd(),As(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,m=0,p=e,h=null;t:for(;;){for(var x;p!==n||o!==0&&p.nodeType!==3||(l=a+o),p!==i||r!==0&&p.nodeType!==3||(s=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(x=p.firstChild)!==null;)h=p,p=x;for(;;){if(p===e)break t;if(h===n&&++u===o&&(l=a),h===i&&++m===r&&(s=a),(x=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=x}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(jl={focusedElem:e,selectionRange:n},yi=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,_=w.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?y:tt(t.type,y),_);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(v){te(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return w=Sc,Sc=!1,w}function Fr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Hl(t,n,i)}o=o.next}while(o!==r)}}function Ji(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ql(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function vp(e){var t=e.alternate;t!==null&&(e.alternate=null,vp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mt],delete t[eo],delete t[Il],delete t[Eh],delete t[Ch])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function xp(e){return e.tag===5||e.tag===3||e.tag===4}function Ec(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=wi));else if(r!==4&&(e=e.child,e!==null))for(Gl(e,t,n),e=e.sibling;e!==null;)Gl(e,t,n),e=e.sibling}function Kl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Kl(e,t,n),e=e.sibling;e!==null;)Kl(e,t,n),e=e.sibling}var de=null,nt=!1;function Rt(e,t,n){for(n=n.child;n!==null;)wp(e,t,n),n=n.sibling}function wp(e,t,n){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(Wi,n)}catch{}switch(n.tag){case 5:we||Fn(n,t);case 6:var r=de,o=nt;de=null,Rt(e,t,n),de=r,nt=o,de!==null&&(nt?(e=de,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):de.removeChild(n.stateNode));break;case 18:de!==null&&(nt?(e=de,n=n.stateNode,e.nodeType===8?Ra(e.parentNode,n):e.nodeType===1&&Ra(e,n),Yr(e)):Ra(de,n.stateNode));break;case 4:r=de,o=nt,de=n.stateNode.containerInfo,nt=!0,Rt(e,t,n),de=r,nt=o;break;case 0:case 11:case 14:case 15:if(!we&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Hl(n,t,a),o=o.next}while(o!==r)}Rt(e,t,n);break;case 1:if(!we&&(Fn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){te(n,t,l)}Rt(e,t,n);break;case 21:Rt(e,t,n);break;case 22:n.mode&1?(we=(r=we)||n.memoizedState!==null,Rt(e,t,n),we=r):Rt(e,t,n);break;default:Rt(e,t,n)}}function Cc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Uh),t.forEach(function(r){var o=Jh.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function et(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:de=l.stateNode,nt=!1;break e;case 3:de=l.stateNode.containerInfo,nt=!0;break e;case 4:de=l.stateNode.containerInfo,nt=!0;break e}l=l.return}if(de===null)throw Error(T(160));wp(i,a,o),de=null,nt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){te(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)kp(t,e),t=t.sibling}function kp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(et(t,e),ut(e),r&4){try{Fr(3,e,e.return),Ji(3,e)}catch(y){te(e,e.return,y)}try{Fr(5,e,e.return)}catch(y){te(e,e.return,y)}}break;case 1:et(t,e),ut(e),r&512&&n!==null&&Fn(n,n.return);break;case 5:if(et(t,e),ut(e),r&512&&n!==null&&Fn(n,n.return),e.flags&32){var o=e.stateNode;try{Hr(o,"")}catch(y){te(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Bf(o,i),vl(l,a);var u=vl(l,i);for(a=0;a<s.length;a+=2){var m=s[a],p=s[a+1];m==="style"?Gf(o,p):m==="dangerouslySetInnerHTML"?Hf(o,p):m==="children"?Hr(o,p):Cs(o,m,p,u)}switch(l){case"input":pl(o,i);break;case"textarea":Wf(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Wn(o,!!i.multiple,x,!1):h!==!!i.multiple&&(i.defaultValue!=null?Wn(o,!!i.multiple,i.defaultValue,!0):Wn(o,!!i.multiple,i.multiple?[]:"",!1))}o[eo]=i}catch(y){te(e,e.return,y)}}break;case 6:if(et(t,e),ut(e),r&4){if(e.stateNode===null)throw Error(T(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){te(e,e.return,y)}}break;case 3:if(et(t,e),ut(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yr(t.containerInfo)}catch(y){te(e,e.return,y)}break;case 4:et(t,e),ut(e);break;case 13:et(t,e),ut(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(ou=ne())),r&4&&Cc(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(we=(u=we)||m,et(t,e),we=u):et(t,e),ut(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(z=e,m=e.child;m!==null;){for(p=z=m;z!==null;){switch(h=z,x=h.child,h.tag){case 0:case 11:case 14:case 15:Fr(4,h,h.return);break;case 1:Fn(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(y){te(r,n,y)}}break;case 5:Fn(h,h.return);break;case 22:if(h.memoizedState!==null){Pc(p);continue}}x!==null?(x.return=h,z=x):Pc(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{o=p.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,s=p.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Qf("display",a))}catch(y){te(e,e.return,y)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){te(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:et(t,e),ut(e),r&4&&Cc(e);break;case 21:break;default:et(t,e),ut(e)}}function ut(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(xp(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Hr(o,""),r.flags&=-33);var i=Ec(e);Kl(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Ec(e);Gl(e,l,a);break;default:throw Error(T(161))}}catch(s){te(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wh(e,t,n){z=e,_p(e)}function _p(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var o=z,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Bo;if(!a){var l=o.alternate,s=l!==null&&l.memoizedState!==null||we;l=Bo;var u=we;if(Bo=a,(we=s)&&!u)for(z=o;z!==null;)a=z,s=a.child,a.tag===22&&a.memoizedState!==null?$c(o):s!==null?(s.return=a,z=s):$c(o);for(;i!==null;)z=i,_p(i),i=i.sibling;z=o,Bo=l,we=u}Tc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,z=i):Tc(e)}}function Tc(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:we||Ji(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!we)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:tt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&uc(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}uc(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&Yr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}we||t.flags&512&&Ql(t)}catch(h){te(t,t.return,h)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function Pc(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function $c(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ji(4,t)}catch(s){te(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){te(t,o,s)}}var i=t.return;try{Ql(t)}catch(s){te(t,i,s)}break;case 5:var a=t.return;try{Ql(t)}catch(s){te(t,a,s)}}}catch(s){te(t,t.return,s)}if(t===e){z=null;break}var l=t.sibling;if(l!==null){l.return=t.return,z=l;break}z=t.return}}var Vh=Math.ceil,Ni=zt.ReactCurrentDispatcher,nu=zt.ReactCurrentOwner,Xe=zt.ReactCurrentBatchConfig,A=0,fe=null,ie=null,me=0,Ae=0,Un=tn(0),se=0,ao=null,xn=0,Zi=0,ru=0,Ur=null,ze=null,ou=0,nr=1/0,xt=null,Ii=!1,Yl=null,Gt=null,Wo=!1,Ft=null,Ri=0,Br=0,Xl=null,ni=-1,ri=0;function Pe(){return A&6?ne():ni!==-1?ni:ni=ne()}function Kt(e){return e.mode&1?A&2&&me!==0?me&-me:Ph.transition!==null?(ri===0&&(ri=id()),ri):(e=W,e!==0||(e=window.event,e=e===void 0?16:dd(e.type)),e):1}function it(e,t,n,r){if(50<Br)throw Br=0,Xl=null,Error(T(185));yo(e,n,r),(!(A&2)||e!==fe)&&(e===fe&&(!(A&2)&&(Zi|=n),se===4&&At(e,me)),Le(e,r),n===1&&A===0&&!(t.mode&1)&&(nr=ne()+500,Ki&&nn()))}function Le(e,t){var n=e.callbackNode;Pm(e,t);var r=gi(e,e===fe?me:0);if(r===0)n!==null&&Mu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Mu(n),t===1)e.tag===0?Th(jc.bind(null,e)):Nd(jc.bind(null,e)),_h(function(){!(A&6)&&nn()}),n=null;else{switch(ad(r)){case 1:n=zs;break;case 4:n=rd;break;case 16:n=hi;break;case 536870912:n=od;break;default:n=hi}n=zp(n,Sp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Sp(e,t){if(ni=-1,ri=0,A&6)throw Error(T(327));var n=e.callbackNode;if(Kn()&&e.callbackNode!==n)return null;var r=gi(e,e===fe?me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Li(e,r);else{t=r;var o=A;A|=2;var i=Cp();(fe!==e||me!==t)&&(xt=null,nr=ne()+500,dn(e,t));do try{Gh();break}catch(l){Ep(e,l)}while(1);Ws(),Ni.current=i,A=o,ie!==null?t=0:(fe=null,me=0,t=se)}if(t!==0){if(t===2&&(o=Sl(e),o!==0&&(r=o,t=Jl(e,o))),t===1)throw n=ao,dn(e,0),At(e,r),Le(e,ne()),n;if(t===6)At(e,r);else{if(o=e.current.alternate,!(r&30)&&!Hh(o)&&(t=Li(e,r),t===2&&(i=Sl(e),i!==0&&(r=i,t=Jl(e,i))),t===1))throw n=ao,dn(e,0),At(e,r),Le(e,ne()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:an(e,ze,xt);break;case 3:if(At(e,r),(r&130023424)===r&&(t=ou+500-ne(),10<t)){if(gi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Pe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Nl(an.bind(null,e,ze,xt),t);break}an(e,ze,xt);break;case 4:if(At(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-ot(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Vh(r/1960))-r,10<r){e.timeoutHandle=Nl(an.bind(null,e,ze,xt),r);break}an(e,ze,xt);break;case 5:an(e,ze,xt);break;default:throw Error(T(329))}}}return Le(e,ne()),e.callbackNode===n?Sp.bind(null,e):null}function Jl(e,t){var n=Ur;return e.current.memoizedState.isDehydrated&&(dn(e,t).flags|=256),e=Li(e,t),e!==2&&(t=ze,ze=n,t!==null&&Zl(t)),e}function Zl(e){ze===null?ze=e:ze.push.apply(ze,e)}function Hh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!lt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function At(e,t){for(t&=~ru,t&=~Zi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),r=1<<n;e[n]=-1,t&=~r}}function jc(e){if(A&6)throw Error(T(327));Kn();var t=gi(e,0);if(!(t&1))return Le(e,ne()),null;var n=Li(e,t);if(e.tag!==0&&n===2){var r=Sl(e);r!==0&&(t=r,n=Jl(e,r))}if(n===1)throw n=ao,dn(e,0),At(e,t),Le(e,ne()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,an(e,ze,xt),Le(e,ne()),null}function iu(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(nr=ne()+500,Ki&&nn())}}function wn(e){Ft!==null&&Ft.tag===0&&!(A&6)&&Kn();var t=A;A|=1;var n=Xe.transition,r=W;try{if(Xe.transition=null,W=1,e)return e()}finally{W=r,Xe.transition=n,A=t,!(A&6)&&nn()}}function au(){Ae=Un.current,G(Un)}function dn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,kh(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(Fs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ki();break;case 3:er(),G(Ie),G(_e),Ys();break;case 5:Ks(r);break;case 4:er();break;case 13:G(J);break;case 19:G(J);break;case 10:Vs(r.type._context);break;case 22:case 23:au()}n=n.return}if(fe=e,ie=e=Yt(e.current,null),me=Ae=t,se=0,ao=null,ru=Zi=xn=0,ze=Ur=null,un!==null){for(t=0;t<un.length;t++)if(n=un[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}un=null}return e}function Ep(e,t){do{var n=ie;try{if(Ws(),qo.current=zi,ji){for(var r=Z.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ji=!1}if(vn=0,ue=le=Z=null,Dr=!1,ro=0,nu.current=null,n===null||n.return===null){se=1,ao=t,ie=null;break}e:{var i=e,a=n.return,l=n,s=t;if(t=me,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,m=l,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var x=gc(a);if(x!==null){x.flags&=-257,yc(x,a,l,i,t),x.mode&1&&hc(i,u,t),t=x,s=u;var w=t.updateQueue;if(w===null){var y=new Set;y.add(s),t.updateQueue=y}else w.add(s);break e}else{if(!(t&1)){hc(i,u,t),lu();break e}s=Error(T(426))}}else if(Y&&l.mode&1){var _=gc(a);if(_!==null){!(_.flags&65536)&&(_.flags|=256),yc(_,a,l,i,t),Us(tr(s,l));break e}}i=s=tr(s,l),se!==4&&(se=2),Ur===null?Ur=[i]:Ur.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=lp(i,s,t);sc(i,d);break e;case 1:l=s;var c=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Gt===null||!Gt.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=sp(i,l,t);sc(i,v);break e}}i=i.return}while(i!==null)}Pp(n)}catch(S){t=S,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(1)}function Cp(){var e=Ni.current;return Ni.current=zi,e===null?zi:e}function lu(){(se===0||se===3||se===2)&&(se=4),fe===null||!(xn&268435455)&&!(Zi&268435455)||At(fe,me)}function Li(e,t){var n=A;A|=2;var r=Cp();(fe!==e||me!==t)&&(xt=null,dn(e,t));do try{Qh();break}catch(o){Ep(e,o)}while(1);if(Ws(),A=n,Ni.current=r,ie!==null)throw Error(T(261));return fe=null,me=0,se}function Qh(){for(;ie!==null;)Tp(ie)}function Gh(){for(;ie!==null&&!vm();)Tp(ie)}function Tp(e){var t=jp(e.alternate,e,Ae);e.memoizedProps=e.pendingProps,t===null?Pp(e):ie=t,nu.current=null}function Pp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Fh(n,t),n!==null){n.flags&=32767,ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,ie=null;return}}else if(n=Dh(n,t,Ae),n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);se===0&&(se=5)}function an(e,t,n){var r=W,o=Xe.transition;try{Xe.transition=null,W=1,Kh(e,t,n,r)}finally{Xe.transition=o,W=r}return null}function Kh(e,t,n,r){do Kn();while(Ft!==null);if(A&6)throw Error(T(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if($m(e,i),e===fe&&(ie=fe=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wo||(Wo=!0,zp(hi,function(){return Kn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Xe.transition,Xe.transition=null;var a=W;W=1;var l=A;A|=4,nu.current=null,Bh(e,n),kp(n,e),mh(jl),yi=!!$l,jl=$l=null,e.current=n,Wh(n),xm(),A=l,W=a,Xe.transition=i}else e.current=n;if(Wo&&(Wo=!1,Ft=e,Ri=o),i=e.pendingLanes,i===0&&(Gt=null),_m(n.stateNode),Le(e,ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ii)throw Ii=!1,e=Yl,Yl=null,e;return Ri&1&&e.tag!==0&&Kn(),i=e.pendingLanes,i&1?e===Xl?Br++:(Br=0,Xl=e):Br=0,nn(),null}function Kn(){if(Ft!==null){var e=ad(Ri),t=Xe.transition,n=W;try{if(Xe.transition=null,W=16>e?16:e,Ft===null)var r=!1;else{if(e=Ft,Ft=null,Ri=0,A&6)throw Error(T(331));var o=A;for(A|=4,z=e.current;z!==null;){var i=z,a=i.child;if(z.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(z=u;z!==null;){var m=z;switch(m.tag){case 0:case 11:case 15:Fr(8,m,i)}var p=m.child;if(p!==null)p.return=m,z=p;else for(;z!==null;){m=z;var h=m.sibling,x=m.return;if(vp(m),m===u){z=null;break}if(h!==null){h.return=x,z=h;break}z=x}}}var w=i.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var _=y.sibling;y.sibling=null,y=_}while(y!==null)}}z=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,z=a;else e:for(;z!==null;){if(i=z,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Fr(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,z=d;break e}z=i.return}}var c=e.current;for(z=c;z!==null;){a=z;var f=a.child;if(a.subtreeFlags&2064&&f!==null)f.return=a,z=f;else e:for(a=c;z!==null;){if(l=z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ji(9,l)}}catch(S){te(l,l.return,S)}if(l===a){z=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,z=v;break e}z=l.return}}if(A=o,nn(),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(Wi,e)}catch{}r=!0}return r}finally{W=n,Xe.transition=t}}return!1}function zc(e,t,n){t=tr(n,t),t=lp(e,t,1),e=Qt(e,t,1),t=Pe(),e!==null&&(yo(e,1,t),Le(e,t))}function te(e,t,n){if(e.tag===3)zc(e,e,n);else for(;t!==null;){if(t.tag===3){zc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gt===null||!Gt.has(r))){e=tr(n,e),e=sp(t,e,1),t=Qt(t,e,1),e=Pe(),t!==null&&(yo(t,1,e),Le(t,e));break}}t=t.return}}function Yh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Pe(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(me&n)===n&&(se===4||se===3&&(me&130023424)===me&&500>ne()-ou?dn(e,0):ru|=n),Le(e,t)}function $p(e,t){t===0&&(e.mode&1?(t=Ro,Ro<<=1,!(Ro&130023424)&&(Ro=4194304)):t=1);var n=Pe();e=Pt(e,t),e!==null&&(yo(e,t,n),Le(e,n))}function Xh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$p(e,n)}function Jh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),$p(e,n)}var jp;jp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ie.current)Ne=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ne=!1,Ah(e,t,n);Ne=!!(e.flags&131072)}else Ne=!1,Y&&t.flags&1048576&&Id(t,Ei,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ti(e,t),e=t.pendingProps;var o=Jn(t,_e.current);Gn(t,n),o=Js(null,t,r,e,o,n);var i=Zs();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Re(r)?(i=!0,_i(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Qs(t),o.updater=Yi,t.stateNode=o,o._reactInternals=t,Al(t,r,e,n),t=Ul(null,t,r,!0,i,n)):(t.tag=0,Y&&i&&Ds(t),Ce(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ti(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=qh(r),e=tt(r,e),o){case 0:t=Fl(null,t,r,e,n);break e;case 1:t=wc(null,t,r,e,n);break e;case 11:t=vc(null,t,r,e,n);break e;case 14:t=xc(null,t,r,tt(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:tt(r,o),Fl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:tt(r,o),wc(e,t,r,o,n);case 3:e:{if(dp(t),e===null)throw Error(T(387));r=t.pendingProps,i=t.memoizedState,o=i.element,bd(e,t),Pi(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=tr(Error(T(423)),t),t=kc(e,t,r,n,o);break e}else if(r!==o){o=tr(Error(T(424)),t),t=kc(e,t,r,n,o);break e}else for(De=Ht(t.stateNode.containerInfo.firstChild),Fe=t,Y=!0,rt=null,n=Fd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zn(),r===o){t=$t(e,t,n);break e}Ce(e,t,r,n)}t=t.child}return t;case 5:return Ud(t),e===null&&Ol(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,zl(r,o)?a=null:i!==null&&zl(r,i)&&(t.flags|=32),fp(e,t),Ce(e,t,a,n),t.child;case 6:return e===null&&Ol(t),null;case 13:return pp(e,t,n);case 4:return Gs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=qn(t,null,r,n):Ce(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:tt(r,o),vc(e,t,r,o,n);case 7:return Ce(e,t,t.pendingProps,n),t.child;case 8:return Ce(e,t,t.pendingProps.children,n),t.child;case 12:return Ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,V(Ci,r._currentValue),r._currentValue=a,i!==null)if(lt(i.value,a)){if(i.children===o.children&&!Ie.current){t=$t(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Et(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?s.next=s:(s.next=m.next,m.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),bl(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(T(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),bl(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Ce(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Gn(t,n),o=Je(o),r=r(o),t.flags|=1,Ce(e,t,r,n),t.child;case 14:return r=t.type,o=tt(r,t.pendingProps),o=tt(r.type,o),xc(e,t,r,o,n);case 15:return up(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:tt(r,o),ti(e,t),t.tag=1,Re(r)?(e=!0,_i(t)):e=!1,Gn(t,n),Ad(t,r,o),Al(t,r,o,n),Ul(null,t,r,!0,e,n);case 19:return mp(e,t,n);case 22:return cp(e,t,n)}throw Error(T(156,t.tag))};function zp(e,t){return nd(e,t)}function Zh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ye(e,t,n,r){return new Zh(e,t,n,r)}function su(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qh(e){if(typeof e=="function")return su(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ps)return 11;if(e===$s)return 14}return 2}function Yt(e,t){var n=e.alternate;return n===null?(n=Ye(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function oi(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")su(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Nn:return pn(n.children,o,i,t);case Ts:a=8,o|=8;break;case sl:return e=Ye(12,n,t,o|2),e.elementType=sl,e.lanes=i,e;case ul:return e=Ye(13,n,t,o),e.elementType=ul,e.lanes=i,e;case cl:return e=Ye(19,n,t,o),e.elementType=cl,e.lanes=i,e;case Df:return qi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Mf:a=10;break e;case Af:a=9;break e;case Ps:a=11;break e;case $s:a=14;break e;case Ot:a=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=Ye(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function pn(e,t,n,r){return e=Ye(7,e,r,t),e.lanes=n,e}function qi(e,t,n,r){return e=Ye(22,e,r,t),e.elementType=Df,e.lanes=n,e.stateNode={isHidden:!1},e}function Ua(e,t,n){return e=Ye(6,e,null,t),e.lanes=n,e}function Ba(e,t,n){return t=Ye(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function e1(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_a(0),this.expirationTimes=_a(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_a(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function uu(e,t,n,r,o,i,a,l,s){return e=new e1(e,t,n,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ye(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qs(i),e}function t1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Np(e){if(!e)return qt;e=e._reactInternals;e:{if(Sn(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Re(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(Re(n))return zd(e,n,t)}return t}function Ip(e,t,n,r,o,i,a,l,s){return e=uu(n,r,!0,e,o,i,a,l,s),e.context=Np(null),n=e.current,r=Pe(),o=Kt(n),i=Et(r,o),i.callback=t??null,Qt(n,i,o),e.current.lanes=o,yo(e,o,r),Le(e,r),e}function ea(e,t,n,r){var o=t.current,i=Pe(),a=Kt(o);return n=Np(n),t.context===null?t.context=n:t.pendingContext=n,t=Et(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Qt(o,t,a),e!==null&&(it(e,o,a,i),Zo(e,o,a)),a}function Oi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Nc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cu(e,t){Nc(e,t),(e=e.alternate)&&Nc(e,t)}function n1(){return null}var Rp=typeof reportError=="function"?reportError:function(e){console.error(e)};function fu(e){this._internalRoot=e}ta.prototype.render=fu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));ea(e,t,null,null)};ta.prototype.unmount=fu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wn(function(){ea(null,e,null,null)}),t[Tt]=null}};function ta(e){this._internalRoot=e}ta.prototype.unstable_scheduleHydration=function(e){if(e){var t=ud();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Mt.length&&t!==0&&t<Mt[n].priority;n++);Mt.splice(n,0,e),n===0&&fd(e)}};function du(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function na(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ic(){}function r1(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Oi(a);i.call(u)}}var a=Ip(t,r,e,0,null,!1,!1,"",Ic);return e._reactRootContainer=a,e[Tt]=a.current,Zr(e.nodeType===8?e.parentNode:e),wn(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=Oi(s);l.call(u)}}var s=uu(e,0,!1,null,null,!1,!1,"",Ic);return e._reactRootContainer=s,e[Tt]=s.current,Zr(e.nodeType===8?e.parentNode:e),wn(function(){ea(t,s,n,r)}),s}function ra(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var s=Oi(a);l.call(s)}}ea(t,a,e,o)}else a=r1(n,t,e,o,r);return Oi(a)}ld=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nr(t.pendingLanes);n!==0&&(Ns(t,n|1),Le(t,ne()),!(A&6)&&(nr=ne()+500,nn()))}break;case 13:wn(function(){var r=Pt(e,1);if(r!==null){var o=Pe();it(r,e,1,o)}}),cu(e,1)}};Is=function(e){if(e.tag===13){var t=Pt(e,134217728);if(t!==null){var n=Pe();it(t,e,134217728,n)}cu(e,134217728)}};sd=function(e){if(e.tag===13){var t=Kt(e),n=Pt(e,t);if(n!==null){var r=Pe();it(n,e,t,r)}cu(e,t)}};ud=function(){return W};cd=function(e,t){var n=W;try{return W=e,t()}finally{W=n}};wl=function(e,t,n){switch(t){case"input":if(pl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Gi(r);if(!o)throw Error(T(90));Uf(r),pl(r,o)}}}break;case"textarea":Wf(e,n);break;case"select":t=n.value,t!=null&&Wn(e,!!n.multiple,t,!1)}};Xf=iu;Jf=wn;var o1={usingClientEntryPoint:!1,Events:[xo,On,Gi,Kf,Yf,iu]},Er={findFiberByHostInstance:sn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},i1={bundleType:Er.bundleType,version:Er.version,rendererPackageName:Er.rendererPackageName,rendererConfig:Er.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ed(e),e===null?null:e.stateNode},findFiberByHostInstance:Er.findFiberByHostInstance||n1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vo.isDisabled&&Vo.supportsFiber)try{Wi=Vo.inject(i1),ht=Vo}catch{}}We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o1;We.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!du(t))throw Error(T(200));return t1(e,t,null,n)};We.createRoot=function(e,t){if(!du(e))throw Error(T(299));var n=!1,r="",o=Rp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=uu(e,1,!1,null,null,n,!1,r,o),e[Tt]=t.current,Zr(e.nodeType===8?e.parentNode:e),new fu(t)};We.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=ed(t),e=e===null?null:e.stateNode,e};We.flushSync=function(e){return wn(e)};We.hydrate=function(e,t,n){if(!na(t))throw Error(T(200));return ra(null,e,t,!0,n)};We.hydrateRoot=function(e,t,n){if(!du(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=Rp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Ip(t,null,e,1,n??null,o,!1,i,a),e[Tt]=t.current,Zr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ta(t)};We.render=function(e,t,n){if(!na(t))throw Error(T(200));return ra(null,e,t,!1,n)};We.unmountComponentAtNode=function(e){if(!na(e))throw Error(T(40));return e._reactRootContainer?(wn(function(){ra(null,null,e,!1,function(){e._reactRootContainer=null,e[Tt]=null})}),!0):!1};We.unstable_batchedUpdates=iu;We.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!na(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return ra(e,t,n,!1,r)};We.version="18.2.0-next-9e3b772b8-20220608";function Lp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lp)}catch(e){console.error(e)}}Lp(),If.exports=We;var a1=If.exports;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lo(){return lo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lo.apply(this,arguments)}var Ut;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ut||(Ut={}));const Rc="popstate";function l1(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:a,hash:l}=r.location;return ql("",{pathname:i,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:bi(o)}return u1(t,n,null,e)}function ae(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function pu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function s1(){return Math.random().toString(36).substr(2,8)}function Lc(e,t){return{usr:e.state,key:e.key,idx:t}}function ql(e,t,n,r){return n===void 0&&(n=null),lo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?pr(t):t,{state:n,key:t&&t.key||r||s1()})}function bi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function pr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function u1(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,l=Ut.Pop,s=null,u=m();u==null&&(u=0,a.replaceState(lo({},a.state,{idx:u}),""));function m(){return(a.state||{idx:null}).idx}function p(){l=Ut.Pop;let _=m(),d=_==null?null:_-u;u=_,s&&s({action:l,location:y.location,delta:d})}function h(_,d){l=Ut.Push;let c=ql(y.location,_,d);n&&n(c,_),u=m()+1;let f=Lc(c,u),v=y.createHref(c);try{a.pushState(f,"",v)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;o.location.assign(v)}i&&s&&s({action:l,location:y.location,delta:1})}function x(_,d){l=Ut.Replace;let c=ql(y.location,_,d);n&&n(c,_),u=m();let f=Lc(c,u),v=y.createHref(c);a.replaceState(f,"",v),i&&s&&s({action:l,location:y.location,delta:0})}function w(_){let d=o.location.origin!=="null"?o.location.origin:o.location.href,c=typeof _=="string"?_:bi(_);return c=c.replace(/ $/,"%20"),ae(d,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,d)}let y={get action(){return l},get location(){return e(o,a)},listen(_){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Rc,p),s=_,()=>{o.removeEventListener(Rc,p),s=null}},createHref(_){return t(o,_)},createURL:w,encodeLocation(_){let d=w(_);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:h,replace:x,go(_){return a.go(_)}};return y}var Oc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Oc||(Oc={}));function c1(e,t,n){return n===void 0&&(n="/"),f1(e,t,n,!1)}function f1(e,t,n,r){let o=typeof t=="string"?pr(t):t,i=mu(o.pathname||"/",n);if(i==null)return null;let a=Op(e);d1(a);let l=null;for(let s=0;l==null&&s<a.length;++s){let u=S1(i);l=k1(a[s],u,r)}return l}function Op(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,a,l)=>{let s={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};s.relativePath.startsWith("/")&&(ae(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Xt([r,s.relativePath]),m=n.concat(s);i.children&&i.children.length>0&&(ae(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Op(i.children,t,m,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:x1(u,i.index),routesMeta:m})};return e.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,a);else for(let s of bp(i.path))o(i,a,s)}),t}function bp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=bp(r.join("/")),l=[];return l.push(...a.map(s=>s===""?i:[i,s].join("/"))),o&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function d1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:w1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const p1=/^:[\w-]+$/,m1=3,h1=2,g1=1,y1=10,v1=-2,bc=e=>e==="*";function x1(e,t){let n=e.split("/"),r=n.length;return n.some(bc)&&(r+=v1),t&&(r+=h1),n.filter(o=>!bc(o)).reduce((o,i)=>o+(p1.test(i)?m1:i===""?g1:y1),r)}function w1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function k1(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,o={},i="/",a=[];for(let l=0;l<r.length;++l){let s=r[l],u=l===r.length-1,m=i==="/"?t:t.slice(i.length)||"/",p=Mc({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},m),h=s.route;if(!p&&u&&n&&!r[r.length-1].route.index&&(p=Mc({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},m)),!p)return null;Object.assign(o,p.params),a.push({params:o,pathname:Xt([i,p.pathname]),pathnameBase:$1(Xt([i,p.pathnameBase])),route:h}),p.pathnameBase!=="/"&&(i=Xt([i,p.pathnameBase]))}return a}function Mc(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=_1(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,m,p)=>{let{paramName:h,isOptional:x}=m;if(h==="*"){let y=l[p]||"";a=i.slice(0,i.length-y.length).replace(/(.)\/+$/,"$1")}const w=l[p];return x&&!w?u[h]=void 0:u[h]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:a,pattern:e}}function _1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),pu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function S1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return pu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function mu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const E1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,C1=e=>E1.test(e);function T1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?pr(e):e,i;if(n)if(C1(n))i=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),pu(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?i=Ac(n.substring(1),"/"):i=Ac(n,t)}else i=t;return{pathname:i,search:j1(r),hash:z1(o)}}function Ac(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Wa(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function P1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Mp(e,t){let n=P1(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ap(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=pr(e):(o=lo({},e),ae(!o.pathname||!o.pathname.includes("?"),Wa("?","pathname","search",o)),ae(!o.pathname||!o.pathname.includes("#"),Wa("#","pathname","hash",o)),ae(!o.search||!o.search.includes("#"),Wa("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,l;if(a==null)l=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),p-=1;o.pathname=h.join("/")}l=p>=0?t[p]:"/"}let s=T1(o,l),u=a&&a!=="/"&&a.endsWith("/"),m=(i||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||m)&&(s.pathname+="/"),s}const Xt=e=>e.join("/").replace(/\/\/+/g,"/"),$1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),j1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,z1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function N1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Dp=["post","put","patch","delete"];new Set(Dp);const I1=["get",...Dp];new Set(I1);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function so(){return so=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},so.apply(this,arguments)}const hu=E.createContext(null),R1=E.createContext(null),En=E.createContext(null),oa=E.createContext(null),rn=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Fp=E.createContext(null);function L1(e,t){let{relative:n}=t===void 0?{}:t;ko()||ae(!1);let{basename:r,navigator:o}=E.useContext(En),{hash:i,pathname:a,search:l}=Bp(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:Xt([r,a])),o.createHref({pathname:s,search:l,hash:i})}function ko(){return E.useContext(oa)!=null}function _o(){return ko()||ae(!1),E.useContext(oa).location}function Up(e){E.useContext(En).static||E.useLayoutEffect(e)}function O1(){let{isDataRoute:e}=E.useContext(rn);return e?X1():b1()}function b1(){ko()||ae(!1);let e=E.useContext(hu),{basename:t,future:n,navigator:r}=E.useContext(En),{matches:o}=E.useContext(rn),{pathname:i}=_o(),a=JSON.stringify(Mp(o,n.v7_relativeSplatPath)),l=E.useRef(!1);return Up(()=>{l.current=!0}),E.useCallback(function(u,m){if(m===void 0&&(m={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let p=Ap(u,JSON.parse(a),i,m.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Xt([t,p.pathname])),(m.replace?r.replace:r.push)(p,m.state,m)},[t,r,a,i,e])}const M1=E.createContext(null);function A1(e){let t=E.useContext(rn).outlet;return t&&E.createElement(M1.Provider,{value:e},t)}function Bp(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=E.useContext(En),{matches:o}=E.useContext(rn),{pathname:i}=_o(),a=JSON.stringify(Mp(o,r.v7_relativeSplatPath));return E.useMemo(()=>Ap(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function D1(e,t){return F1(e,t)}function F1(e,t,n,r){ko()||ae(!1);let{navigator:o}=E.useContext(En),{matches:i}=E.useContext(rn),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let u=_o(),m;if(t){var p;let _=typeof t=="string"?pr(t):t;s==="/"||(p=_.pathname)!=null&&p.startsWith(s)||ae(!1),m=_}else m=u;let h=m.pathname||"/",x=h;if(s!=="/"){let _=s.replace(/^\//,"").split("/");x="/"+h.replace(/^\//,"").split("/").slice(_.length).join("/")}let w=c1(e,{pathname:x}),y=H1(w&&w.map(_=>Object.assign({},_,{params:Object.assign({},l,_.params),pathname:Xt([s,o.encodeLocation?o.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?s:Xt([s,o.encodeLocation?o.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n,r);return t&&y?E.createElement(oa.Provider,{value:{location:so({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Ut.Pop}},y):y}function U1(){let e=Y1(),t=N1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:o},n):null,i)}const B1=E.createElement(U1,null);class W1 extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?E.createElement(rn.Provider,{value:this.props.routeContext},E.createElement(Fp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function V1(e){let{routeContext:t,match:n,children:r}=e,o=E.useContext(hu);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(rn.Provider,{value:t},r)}function H1(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(o=n)==null?void 0:o.errors;if(l!=null){let m=a.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);m>=0||ae(!1),a=a.slice(0,Math.min(a.length,m+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<a.length;m++){let p=a[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=m),p.route.id){let{loaderData:h,errors:x}=n,w=p.route.loader&&h[p.route.id]===void 0&&(!x||x[p.route.id]===void 0);if(p.route.lazy||w){s=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((m,p,h)=>{let x,w=!1,y=null,_=null;n&&(x=l&&p.route.id?l[p.route.id]:void 0,y=p.route.errorElement||B1,s&&(u<0&&h===0?(J1("route-fallback",!1),w=!0,_=null):u===h&&(w=!0,_=p.route.hydrateFallbackElement||null)));let d=t.concat(a.slice(0,h+1)),c=()=>{let f;return x?f=y:w?f=_:p.route.Component?f=E.createElement(p.route.Component,null):p.route.element?f=p.route.element:f=m,E.createElement(V1,{match:p,routeContext:{outlet:m,matches:d,isDataRoute:n!=null},children:f})};return n&&(p.route.ErrorBoundary||p.route.errorElement||h===0)?E.createElement(W1,{location:n.location,revalidation:n.revalidation,component:y,error:x,children:c(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):c()},null)}var Wp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Wp||{}),Mi=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Mi||{});function Q1(e){let t=E.useContext(hu);return t||ae(!1),t}function G1(e){let t=E.useContext(R1);return t||ae(!1),t}function K1(e){let t=E.useContext(rn);return t||ae(!1),t}function Vp(e){let t=K1(),n=t.matches[t.matches.length-1];return n.route.id||ae(!1),n.route.id}function Y1(){var e;let t=E.useContext(Fp),n=G1(Mi.UseRouteError),r=Vp(Mi.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function X1(){let{router:e}=Q1(Wp.UseNavigateStable),t=Vp(Mi.UseNavigateStable),n=E.useRef(!1);return Up(()=>{n.current=!0}),E.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,so({fromRouteId:t},i)))},[e,t])}const Dc={};function J1(e,t,n){!t&&!Dc[e]&&(Dc[e]=!0)}function Z1(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function q1(e){return A1(e.context)}function ln(e){ae(!1)}function eg(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Ut.Pop,navigator:i,static:a=!1,future:l}=e;ko()&&ae(!1);let s=t.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:s,navigator:i,static:a,future:so({v7_relativeSplatPath:!1},l)}),[s,l,i,a]);typeof r=="string"&&(r=pr(r));let{pathname:m="/",search:p="",hash:h="",state:x=null,key:w="default"}=r,y=E.useMemo(()=>{let _=mu(m,s);return _==null?null:{location:{pathname:_,search:p,hash:h,state:x,key:w},navigationType:o}},[s,m,p,h,x,w,o]);return y==null?null:E.createElement(En.Provider,{value:u},E.createElement(oa.Provider,{children:n,value:y}))}function tg(e){let{children:t,location:n}=e;return D1(es(t),n)}new Promise(()=>{});function es(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(r,o)=>{if(!E.isValidElement(r))return;let i=[...t,o];if(r.type===E.Fragment){n.push.apply(n,es(r.props.children,i));return}r.type!==ln&&ae(!1),!r.props.index||!r.props.children||ae(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=es(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ts(){return ts=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ts.apply(this,arguments)}function ng(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function rg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function og(e,t){return e.button===0&&(!t||t==="_self")&&!rg(e)}const ig=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ag="6";try{window.__reactRouterVersion=ag}catch{}const lg="startTransition",Fc=al[lg];function sg(e){let{basename:t,children:n,future:r,window:o}=e,i=E.useRef();i.current==null&&(i.current=l1({window:o,v5Compat:!0}));let a=i.current,[l,s]=E.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},m=E.useCallback(p=>{u&&Fc?Fc(()=>s(p)):s(p)},[s,u]);return E.useLayoutEffect(()=>a.listen(m),[a,m]),E.useEffect(()=>Z1(r),[r]),E.createElement(eg,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}const ug=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",cg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mr=E.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:l,target:s,to:u,preventScrollReset:m,viewTransition:p}=t,h=ng(t,ig),{basename:x}=E.useContext(En),w,y=!1;if(typeof u=="string"&&cg.test(u)&&(w=u,ug))try{let f=new URL(window.location.href),v=u.startsWith("//")?new URL(f.protocol+u):new URL(u),S=mu(v.pathname,x);v.origin===f.origin&&S!=null?u=S+v.search+v.hash:y=!0}catch{}let _=L1(u,{relative:o}),d=fg(u,{replace:a,state:l,target:s,preventScrollReset:m,relative:o,viewTransition:p});function c(f){r&&r(f),f.defaultPrevented||d(f)}return E.createElement("a",ts({},h,{href:w||_,onClick:y||i?r:c,ref:n,target:s}))});var Uc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Uc||(Uc={}));var Bc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Bc||(Bc={}));function fg(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,viewTransition:l}=t===void 0?{}:t,s=O1(),u=_o(),m=Bp(e,{relative:a});return E.useCallback(p=>{if(og(p,n)){p.preventDefault();let h=r!==void 0?r:bi(u)===bi(m);s(e,{replace:h,state:o,preventScrollReset:i,relative:a,viewTransition:l})}},[u,s,m,r,o,n,e,i,a,l])}var ns={},Wc=a1;ns.createRoot=Wc.createRoot,ns.hydrateRoot=Wc.hydrateRoot;var ke=function(){return ke=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ke.apply(this,arguments)};function uo(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}function Hp(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var dg=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,pg=Hp(function(e){return dg.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Q="-ms-",Wr="-moz-",U="-webkit-",Qp="comm",ia="rule",gu="decl",mg="@import",Gp="@keyframes",hg="@layer",gg=Math.abs,yu=String.fromCharCode,rs=Object.assign;function yg(e,t){return ce(e,0)^45?(((t<<2^ce(e,0))<<2^ce(e,1))<<2^ce(e,2))<<2^ce(e,3):0}function Kp(e){return e.trim()}function wt(e,t){return(e=t.exec(e))?e[0]:e}function O(e,t,n){return e.replace(t,n)}function ii(e,t){return e.indexOf(t)}function ce(e,t){return e.charCodeAt(t)|0}function rr(e,t,n){return e.slice(t,n)}function ft(e){return e.length}function Yp(e){return e.length}function Rr(e,t){return t.push(e),e}function vg(e,t){return e.map(t).join("")}function Vc(e,t){return e.filter(function(n){return!wt(n,t)})}var aa=1,or=1,Xp=0,qe=0,re=0,hr="";function la(e,t,n,r,o,i,a,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:aa,column:or,length:a,return:"",siblings:l}}function Lt(e,t){return rs(la("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function jn(e){for(;e.root;)e=Lt(e.root,{children:[e]});Rr(e,e.siblings)}function xg(){return re}function wg(){return re=qe>0?ce(hr,--qe):0,or--,re===10&&(or=1,aa--),re}function at(){return re=qe<Xp?ce(hr,qe++):0,or++,re===10&&(or=1,aa++),re}function mn(){return ce(hr,qe)}function ai(){return qe}function sa(e,t){return rr(hr,e,t)}function os(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function kg(e){return aa=or=1,Xp=ft(hr=e),qe=0,[]}function _g(e){return hr="",e}function Va(e){return Kp(sa(qe-1,is(e===91?e+2:e===40?e+1:e)))}function Sg(e){for(;(re=mn())&&re<33;)at();return os(e)>2||os(re)>3?"":" "}function Eg(e,t){for(;--t&&at()&&!(re<48||re>102||re>57&&re<65||re>70&&re<97););return sa(e,ai()+(t<6&&mn()==32&&at()==32))}function is(e){for(;at();)switch(re){case e:return qe;case 34:case 39:e!==34&&e!==39&&is(re);break;case 40:e===41&&is(e);break;case 92:at();break}return qe}function Cg(e,t){for(;at()&&e+re!==47+10;)if(e+re===42+42&&mn()===47)break;return"/*"+sa(t,qe-1)+"*"+yu(e===47?e:at())}function Tg(e){for(;!os(mn());)at();return sa(e,qe)}function Pg(e){return _g(li("",null,null,null,[""],e=kg(e),0,[0],e))}function li(e,t,n,r,o,i,a,l,s){for(var u=0,m=0,p=a,h=0,x=0,w=0,y=1,_=1,d=1,c=0,f="",v=o,S=i,C=r,k=f;_;)switch(w=c,c=at()){case 40:if(w!=108&&ce(k,p-1)==58){ii(k+=O(Va(c),"&","&\f"),"&\f")!=-1&&(d=-1);break}case 34:case 39:case 91:k+=Va(c);break;case 9:case 10:case 13:case 32:k+=Sg(w);break;case 92:k+=Eg(ai()-1,7);continue;case 47:switch(mn()){case 42:case 47:Rr($g(Cg(at(),ai()),t,n,s),s);break;default:k+="/"}break;case 123*y:l[u++]=ft(k)*d;case 125*y:case 59:case 0:switch(c){case 0:case 125:_=0;case 59+m:d==-1&&(k=O(k,/\f/g,"")),x>0&&ft(k)-p&&Rr(x>32?Qc(k+";",r,n,p-1,s):Qc(O(k," ","")+";",r,n,p-2,s),s);break;case 59:k+=";";default:if(Rr(C=Hc(k,t,n,u,m,o,l,f,v=[],S=[],p,i),i),c===123)if(m===0)li(k,t,C,C,v,i,p,l,S);else switch(h===99&&ce(k,3)===110?100:h){case 100:case 108:case 109:case 115:li(e,C,C,r&&Rr(Hc(e,C,C,0,0,o,l,f,o,v=[],p,S),S),o,S,p,l,r?v:S);break;default:li(k,C,C,C,[""],S,0,l,S)}}u=m=x=0,y=d=1,f=k="",p=a;break;case 58:p=1+ft(k),x=w;default:if(y<1){if(c==123)--y;else if(c==125&&y++==0&&wg()==125)continue}switch(k+=yu(c),c*y){case 38:d=m>0?1:(k+="\f",-1);break;case 44:l[u++]=(ft(k)-1)*d,d=1;break;case 64:mn()===45&&(k+=Va(at())),h=mn(),m=p=ft(f=k+=Tg(ai())),c++;break;case 45:w===45&&ft(k)==2&&(y=0)}}return i}function Hc(e,t,n,r,o,i,a,l,s,u,m,p){for(var h=o-1,x=o===0?i:[""],w=Yp(x),y=0,_=0,d=0;y<r;++y)for(var c=0,f=rr(e,h+1,h=gg(_=a[y])),v=e;c<w;++c)(v=Kp(_>0?x[c]+" "+f:O(f,/&\f/g,x[c])))&&(s[d++]=v);return la(e,t,n,o===0?ia:l,s,u,m,p)}function $g(e,t,n,r){return la(e,t,n,Qp,yu(xg()),rr(e,2,-2),0,r)}function Qc(e,t,n,r,o){return la(e,t,n,gu,rr(e,0,r),rr(e,r+1,-1),r,o)}function Jp(e,t,n){switch(yg(e,t)){case 5103:return U+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return U+e+e;case 4789:return Wr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return U+e+Wr+e+Q+e+e;case 5936:switch(ce(e,t+11)){case 114:return U+e+Q+O(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return U+e+Q+O(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return U+e+Q+O(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return U+e+Q+e+e;case 6165:return U+e+Q+"flex-"+e+e;case 5187:return U+e+O(e,/(\w+).+(:[^]+)/,U+"box-$1$2"+Q+"flex-$1$2")+e;case 5443:return U+e+Q+"flex-item-"+O(e,/flex-|-self/g,"")+(wt(e,/flex-|baseline/)?"":Q+"grid-row-"+O(e,/flex-|-self/g,""))+e;case 4675:return U+e+Q+"flex-line-pack"+O(e,/align-content|flex-|-self/g,"")+e;case 5548:return U+e+Q+O(e,"shrink","negative")+e;case 5292:return U+e+Q+O(e,"basis","preferred-size")+e;case 6060:return U+"box-"+O(e,"-grow","")+U+e+Q+O(e,"grow","positive")+e;case 4554:return U+O(e,/([^-])(transform)/g,"$1"+U+"$2")+e;case 6187:return O(O(O(e,/(zoom-|grab)/,U+"$1"),/(image-set)/,U+"$1"),e,"")+e;case 5495:case 3959:return O(e,/(image-set\([^]*)/,U+"$1$`$1");case 4968:return O(O(e,/(.+:)(flex-)?(.*)/,U+"box-pack:$3"+Q+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+U+e+e;case 4200:if(!wt(e,/flex-|baseline/))return Q+"grid-column-align"+rr(e,t)+e;break;case 2592:case 3360:return Q+O(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,wt(r.props,/grid-\w+-end/)})?~ii(e+(n=n[t].value),"span")?e:Q+O(e,"-start","")+e+Q+"grid-row-span:"+(~ii(n,"span")?wt(n,/\d+/):+wt(n,/\d+/)-+wt(e,/\d+/))+";":Q+O(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return wt(r.props,/grid-\w+-start/)})?e:Q+O(O(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return O(e,/(.+)-inline(.+)/,U+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ft(e)-1-t>6)switch(ce(e,t+1)){case 109:if(ce(e,t+4)!==45)break;case 102:return O(e,/(.+:)(.+)-([^]+)/,"$1"+U+"$2-$3$1"+Wr+(ce(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ii(e,"stretch")?Jp(O(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return O(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,a,l,s,u){return Q+o+":"+i+u+(a?Q+o+"-span:"+(l?s:+s-+i)+u:"")+e});case 4949:if(ce(e,t+6)===121)return O(e,":",":"+U)+e;break;case 6444:switch(ce(e,ce(e,14)===45?18:11)){case 120:return O(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+U+(ce(e,14)===45?"inline-":"")+"box$3$1"+U+"$2$3$1"+Q+"$2box$3")+e;case 100:return O(e,":",":"+Q)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return O(e,"scroll-","scroll-snap-")+e}return e}function Ai(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function jg(e,t,n,r){switch(e.type){case hg:if(e.children.length)break;case mg:case gu:return e.return=e.return||e.value;case Qp:return"";case Gp:return e.return=e.value+"{"+Ai(e.children,r)+"}";case ia:if(!ft(e.value=e.props.join(",")))return""}return ft(n=Ai(e.children,r))?e.return=e.value+"{"+n+"}":""}function zg(e){var t=Yp(e);return function(n,r,o,i){for(var a="",l=0;l<t;l++)a+=e[l](n,r,o,i)||"";return a}}function Ng(e){return function(t){t.root||(t=t.return)&&e(t)}}function Ig(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case gu:e.return=Jp(e.value,e.length,n);return;case Gp:return Ai([Lt(e,{value:O(e.value,"@","@"+U)})],r);case ia:if(e.length)return vg(n=e.props,function(o){switch(wt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":jn(Lt(e,{props:[O(o,/:(read-\w+)/,":"+Wr+"$1")]})),jn(Lt(e,{props:[o]})),rs(e,{props:Vc(n,r)});break;case"::placeholder":jn(Lt(e,{props:[O(o,/:(plac\w+)/,":"+U+"input-$1")]})),jn(Lt(e,{props:[O(o,/:(plac\w+)/,":"+Wr+"$1")]})),jn(Lt(e,{props:[O(o,/:(plac\w+)/,Q+"input-$1")]})),jn(Lt(e,{props:[o]})),rs(e,{props:Vc(n,r)});break}return""})}}var Zp={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ir=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",vu=typeof window<"u"&&"HTMLElement"in window,Rg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Lg={},ua=Object.freeze([]),ar=Object.freeze({});function qp(e,t,n){return n===void 0&&(n=ar),e.theme!==n.theme&&e.theme||t||n.theme}var e0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Og=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,bg=/(^-|-$)/g;function Gc(e){return e.replace(Og,"-").replace(bg,"")}var Mg=/(a)(d)/gi,Kc=function(e){return String.fromCharCode(e+(e>25?39:97))};function as(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Kc(t%52)+n;return(Kc(t%52)+n).replace(Mg,"$1-$2")}var Ha,Bn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},t0=function(e){return Bn(5381,e)};function n0(e){return as(t0(e)>>>0)}function Ag(e){return e.displayName||e.name||"Component"}function Qa(e){return typeof e=="string"&&!0}var r0=typeof Symbol=="function"&&Symbol.for,o0=r0?Symbol.for("react.memo"):60115,Dg=r0?Symbol.for("react.forward_ref"):60112,Fg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ug={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Bg=((Ha={})[Dg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ha[o0]=i0,Ha);function Yc(e){return("type"in(t=e)&&t.type.$$typeof)===o0?i0:"$$typeof"in e?Bg[e.$$typeof]:Fg;var t}var Wg=Object.defineProperty,Vg=Object.getOwnPropertyNames,Xc=Object.getOwnPropertySymbols,Hg=Object.getOwnPropertyDescriptor,Qg=Object.getPrototypeOf,Jc=Object.prototype;function a0(e,t,n){if(typeof t!="string"){if(Jc){var r=Qg(t);r&&r!==Jc&&a0(e,r,n)}var o=Vg(t);Xc&&(o=o.concat(Xc(t)));for(var i=Yc(e),a=Yc(t),l=0;l<o.length;++l){var s=o[l];if(!(s in Ug||n&&n[s]||a&&s in a||i&&s in i)){var u=Hg(t,s);try{Wg(e,s,u)}catch{}}}}return e}function lr(e){return typeof e=="function"}function xu(e){return typeof e=="object"&&"styledComponentId"in e}function fn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ls(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function co(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ss(e,t,n){if(n===void 0&&(n=!1),!n&&!co(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ss(e[r],t[r]);else if(co(t))for(var r in t)e[r]=ss(e[r],t[r]);return e}function wu(e,t){Object.defineProperty(e,"toString",{value:t})}function So(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Gg=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw So(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var a=o;a<i;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=(a=0,n.length);a<s;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,a=o;a<i;a++)n+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return n},e}(),si=new Map,Di=new Map,Ga=1,Ho=function(e){if(si.has(e))return si.get(e);for(;Di.has(Ga);)Ga++;var t=Ga++;return si.set(e,t),Di.set(t,e),t},Kg=function(e,t){si.set(e,t),Di.set(t,e)},Yg="style[".concat(ir,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),Xg=new RegExp("^".concat(ir,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Jg=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},Zg=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),o=[],i=0,a=r.length;i<a;i++){var l=r[i].trim();if(l){var s=l.match(Xg);if(s){var u=0|parseInt(s[1],10),m=s[2];u!==0&&(Kg(m,u),Jg(e,m,s[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(l)}}};function qg(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var l0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(l){var s=Array.from(l.querySelectorAll("style[".concat(ir,"]")));return s[s.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(ir,"active"),r.setAttribute("data-styled-version","6.0.7");var a=qg();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},ey=function(){function e(t){this.element=l0(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var a=r[o];if(a.ownerNode===n)return a}throw So(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),ty=function(){function e(t){this.element=l0(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),ny=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Zc=vu,ry={isServer:!vu,useCSSOMInjection:!Rg},Fi=function(){function e(t,n,r){t===void 0&&(t=ar),n===void 0&&(n={});var o=this;this.options=ke(ke({},ry),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&vu&&Zc&&(Zc=!1,function(i){for(var a=document.querySelectorAll(Yg),l=0,s=a.length;l<s;l++){var u=a[l];u&&u.getAttribute(ir)!=="active"&&(Zg(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),wu(this,function(){return function(i){for(var a=i.getTag(),l=a.length,s="",u=function(p){var h=function(d){return Di.get(d)}(p);if(h===void 0)return"continue";var x=i.names.get(h),w=a.getGroup(p);if(x===void 0||w.length===0)return"continue";var y="".concat(ir,".g").concat(p,'[id="').concat(h,'"]'),_="";x!==void 0&&x.forEach(function(d){d.length>0&&(_+="".concat(d,","))}),s+="".concat(w).concat(y,'{content:"').concat(_,'"}').concat(`/*!sc*/
`)},m=0;m<l;m++)u(m);return s}(o)})}return e.registerId=function(t){return Ho(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ke(ke({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new ny(o):r?new ey(o):new ty(o)}(this.options),new Gg(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ho(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ho(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ho(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),oy=/&/g,iy=/^\s*\/\/.*$/gm;function s0(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=s0(n.children,t)),n})}function ay(e){var t,n,r,o=e===void 0?ar:e,i=o.options,a=i===void 0?ar:i,l=o.plugins,s=l===void 0?ua:l,u=function(h,x,w){return w===n||w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):h},m=s.slice();m.push(function(h){h.type===ia&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(oy,n).replace(r,u))}),a.prefix&&m.push(Ig),m.push(jg);var p=function(h,x,w,y){x===void 0&&(x=""),w===void 0&&(w=""),y===void 0&&(y="&"),t=y,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var _=h.replace(iy,""),d=Pg(w||x?"".concat(w," ").concat(x," { ").concat(_," }"):_);a.namespace&&(d=s0(d,a.namespace));var c=[];return Ai(d,zg(m.concat(Ng(function(f){return c.push(f)})))),c};return p.hash=s.length?s.reduce(function(h,x){return x.name||So(15),Bn(h,x.name)},5381).toString():"",p}var ly=new Fi,us=ay(),u0=b.createContext({shouldForwardProp:void 0,styleSheet:ly,stylis:us});u0.Consumer;b.createContext(void 0);function cs(){return E.useContext(u0)}var sy=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=us);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,wu(this,function(){throw So(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=us),this.name+t.hash},e}(),uy=function(e){return e>="A"&&e<="Z"};function qc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;uy(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var c0=function(e){return e==null||e===!1||e===""},f0=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!c0(i)&&(Array.isArray(i)&&i.isCss||lr(i)?r.push("".concat(qc(o),":"),i,";"):co(i)?r.push.apply(r,uo(uo(["".concat(o," {")],f0(i),!1),["}"],!1)):r.push("".concat(qc(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Zp||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Jt(e,t,n,r){if(c0(e))return[];if(xu(e))return[".".concat(e.styledComponentId)];if(lr(e)){if(!lr(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return Jt(o,t,n,r)}var i;return e instanceof sy?n?(e.inject(n,r),[e.getName(r)]):[e]:co(e)?f0(e):Array.isArray(e)?Array.prototype.concat.apply(ua,e.map(function(a){return Jt(a,t,n,r)})):[e.toString()]}function d0(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(lr(n)&&!xu(n))return!1}return!0}var cy=t0("6.0.7"),fy=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&d0(t),this.componentId=n,this.baseHash=Bn(cy,n),this.baseStyle=r,Fi.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=fn(o,this.staticRulesId);else{var i=ls(Jt(this.rules,t,n,r)),a=as(Bn(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(i,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}o=fn(o,a),this.staticRulesId=a}else{for(var s=Bn(this.baseHash,r.hash),u="",m=0;m<this.rules.length;m++){var p=this.rules[m];if(typeof p=="string")u+=p;else if(p){var h=ls(Jt(p,t,n,r));s=Bn(s,h),u+=h}}if(u){var x=as(s>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(u,".".concat(x),void 0,this.componentId)),o=fn(o,x)}}return o},e}(),ku=b.createContext(void 0);ku.Consumer;var Ka={};function dy(e,t,n){var r=xu(e),o=e,i=!Qa(e),a=t.attrs,l=a===void 0?ua:a,s=t.componentId,u=s===void 0?function(f,v){var S=typeof f!="string"?"sc":Gc(f);Ka[S]=(Ka[S]||0)+1;var C="".concat(S,"-").concat(n0("6.0.7"+S+Ka[S]));return v?"".concat(v,"-").concat(C):C}(t.displayName,t.parentComponentId):s,m=t.displayName;m===void 0&&function(f){return Qa(f)?"styled.".concat(f):"Styled(".concat(Ag(f),")")}(e);var p=t.displayName&&t.componentId?"".concat(Gc(t.displayName),"-").concat(t.componentId):t.componentId||u,h=r&&o.attrs?o.attrs.concat(l).filter(Boolean):l,x=t.shouldForwardProp;if(r&&o.shouldForwardProp){var w=o.shouldForwardProp;if(t.shouldForwardProp){var y=t.shouldForwardProp;x=function(f,v){return w(f,v)&&y(f,v)}}else x=w}var _=new fy(n,p,r?o.componentStyle:void 0);function d(f,v){return function(S,C,k){var $=S.attrs,L=S.componentStyle,N=S.defaultProps,X=S.foldedComponentIds,He=S.styledComponentId,Se=S.target,Tn=b.useContext(ku),Pn=cs(),st=S.shouldForwardProp||Pn.shouldForwardProp,ge=function(vt,be,Nt){for(var Me,Qe=ke(ke({},be),{className:void 0,theme:Nt}),ga=0;ga<vt.length;ga+=1){var Po=lr(Me=vt[ga])?Me(Qe):Me;for(var It in Po)Qe[It]=It==="className"?fn(Qe[It],Po[It]):It==="style"?ke(ke({},Qe[It]),Po[It]):Po[It]}return be.className&&(Qe.className=fn(Qe.className,be.className)),Qe}($,C,qp(C,Tn,N)||ar),j=ge.as||Se,I={};for(var R in ge)ge[R]===void 0||R[0]==="$"||R==="as"||R==="theme"||(R==="forwardedAs"?I.as=ge.forwardedAs:st&&!st(R,j)||(I[R]=ge[R]));var K=function(vt,be){var Nt=cs(),Me=vt.generateAndInjectStyles(be,Nt.styleSheet,Nt.stylis);return Me}(L,ge),ee=fn(X,He);return K&&(ee+=" "+K),ge.className&&(ee+=" "+ge.className),I[Qa(j)&&!e0.has(j)?"class":"className"]=ee,I.ref=k,E.createElement(j,I)}(c,f,v)}var c=b.forwardRef(d);return c.attrs=h,c.componentStyle=_,c.shouldForwardProp=x,c.foldedComponentIds=r?fn(o.foldedComponentIds,o.styledComponentId):"",c.styledComponentId=p,c.target=r?o.target:e,Object.defineProperty(c,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?function(v){for(var S=[],C=1;C<arguments.length;C++)S[C-1]=arguments[C];for(var k=0,$=S;k<$.length;k++)ss(v,$[k],!0);return v}({},o.defaultProps,f):f}}),wu(c,function(){return".".concat(c.styledComponentId)}),i&&a0(c,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),c}function ef(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var tf=function(e){return Object.assign(e,{isCss:!0})};function p0(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(lr(e)||co(e)){var r=e;return tf(Jt(ef(ua,uo([r],t,!0))))}var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?Jt(o):tf(Jt(ef(o,t)))}function fs(e,t,n){if(n===void 0&&(n=ar),!t)throw So(1,t);var r=function(o){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,n,p0.apply(void 0,uo([o],i,!1)))};return r.attrs=function(o){return fs(e,t,ke(ke({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return fs(e,t,ke(ke({},n),o))},r}var m0=function(e){return fs(dy,e)},P=m0;e0.forEach(function(e){P[e]=m0(e)});var py=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=d0(t),Fi.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(ls(Jt(this.rules,n,r,o)),""),a=this.componentId+t;r.insertRules(a,a,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&Fi.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function my(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=p0.apply(void 0,uo([e],t,!1)),o="sc-global-".concat(n0(JSON.stringify(r))),i=new py(r,o),a=function(s){var u=cs(),m=b.useContext(ku),p=b.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&l(p,s,u.styleSheet,m,u.stylis),b.useLayoutEffect(function(){if(!u.styleSheet.server)return l(p,s,u.styleSheet,m,u.stylis),function(){return i.removeStyles(p,u.styleSheet)}},[p,s,u.styleSheet,m,u.stylis]),null};function l(s,u,m,p,h){if(i.isStatic)i.renderStyles(s,Lg,m,h);else{var x=ke(ke({},u),{theme:qp(u,p,a.defaultProps)});i.renderStyles(s,x,m,h)}}return b.memo(a)}const hy=P.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(134, 134, 134, 0.411);
  background-color: rgb(255, 255, 255)
`,gy=P.div`
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
`,yy=P(mr)`
    font-family:var(--logo-font);
      /* font-family: 'Playfair Display', Georgia, serif;  */

 font-size:30px;
  
  /* font-style: italic;
  font-weight:200; */
  color: var(--black-color);
  text-decoration: none;
  letter-spacing: 1px;
  white-space: nowrap;
`,vy=P.div`

  display:none;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 10px;
  width: 100%;
  justify-content: center;

  @media screen and (min-width: 769px) {
      display: flex;
    border-top: none;
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    padding-top: 0;

    width: auto;
    justify-content: flex-end;
  }
`,nf=P.span`
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


`,xy=P.button`
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
   @media screen and (min-width: 769px) {
      display: none;
  
  }
  


  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
  }
`,wy=P.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 80%; 
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
`,ky=P.button`
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
`,_y=P.nav`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,Cr=P(mr)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  color: #2c2c2c;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: color 0.3s;

  svg {
    color: #d35400; 
    font-size: 24px;
  }

  &:hover, &:active {
    color: #d35400;
  }
`,Sy=P.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 999;
  display: ${({open:e})=>e?"block":"none"};
  transition: opacity 0.3s;
`,Ey=P.nav`
  display: none;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;

  @media screen and (min-width: 769px) {
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
`,Tr=P(mr)`
  color: var(--black-color);
  text-decoration: none;
  font-family: var(--second-font);
  font-weight:800;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;

  &:hover {
    color:var(--lavanda-color);
    scale: 1.05;
  }
`,Cy=()=>g.jsxs(Ey,{children:[g.jsx(Tr,{to:"/",children:"Головна"}),g.jsx(Tr,{to:"/about",children:"Про мене"}),g.jsx(Tr,{to:"/portfolio",children:"Портфоліо"}),g.jsx(Tr,{to:"/tariffs",children:"Тарифи"}),g.jsx(Tr,{to:"/contacts",children:"Контакти"})]});/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=e=>{const t=Py(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ya={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},jy=E.createContext({}),zy=()=>E.useContext(jy),Ny=E.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:o="",children:i,iconNode:a,...l},s)=>{const{size:u=24,strokeWidth:m=2,absoluteStrokeWidth:p=!1,color:h="currentColor",className:x=""}=zy()??{},w=r??p?Number(n??m)*24/Number(t??u):n??m;return E.createElement("svg",{ref:s,...Ya,width:t??u??Ya.width,height:t??u??Ya.height,stroke:e??h,strokeWidth:w,className:h0("lucide",x,o),...!i&&!$y(l)&&{"aria-hidden":"true"},...l},[...a.map(([y,_])=>E.createElement(y,_)),...Array.isArray(i)?i:[i]])});/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=(e,t)=>{const n=E.forwardRef(({className:r,...o},i)=>E.createElement(Ny,{ref:i,iconNode:t,className:h0(`lucide-${Ty(rf(e))}`,`lucide-${e}`,r),...o}));return n.displayName=rf(e),n};/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0",key:"12hx5q"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],Ry=Cn("briefcase-business",Iy);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Oy=Cn("house",Ly);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],My=Cn("info",by);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Dy=Cn("mail",Ay);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]],Uy=Cn("message-circle-more",Fy);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["path",{d:"M3 5h18",key:"1u36vt"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 19h18",key:"awlh7x"}]],Wy=Cn("text-align-justify",By);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Hy=Cn("x",Vy);function Qy(){const[e,t]=E.useState(!1);return g.jsx(hy,{children:g.jsxs(gy,{children:[g.jsx(yy,{to:"/",children:"Diana J."}),g.jsx(Cy,{}),g.jsx(xy,{onClick:()=>t(!e),children:g.jsx(Wy,{size:22})}),g.jsx(Sy,{open:e,onClick:()=>t(!1)}),g.jsxs(wy,{open:e,children:[g.jsx(ky,{onClick:()=>t(!1),children:g.jsx(Hy,{size:28,strokeWidth:1.5})}),g.jsxs(_y,{children:[g.jsxs(Cr,{onClick:()=>t(!1),to:"/",children:[g.jsx(Oy,{color:"#663f88",size:22,strokeWidth:1.5})," Головна"]}),g.jsxs(Cr,{onClick:()=>t(!1),to:"/about",children:[g.jsx(My,{color:"#663f88",size:22,strokeWidth:1.5})," Про мене"]}),g.jsxs(Cr,{onClick:()=>t(!1),to:"/portfolio",children:[g.jsx(Ry,{color:"#663f88",size:22,strokeWidth:1.5}),"Портфоліо"]}),g.jsxs(Cr,{onClick:()=>t(!1),to:"/tariffs",children:[g.jsx(Uy,{color:"#663f88",size:22,strokeWidth:1.5}),"Тарифи"]}),g.jsxs(Cr,{onClick:()=>t(!1),to:"/contacts",children:[g.jsx(Dy,{color:"#663f88",size:22,strokeWidth:1.5})," Контакти"]})]})]}),g.jsxs(vy,{children:[g.jsx(nf,{children:"м.Київ"}),g.jsx(nf,{children:"+380 93 000 00 00"})]})]})})}const Gy=P.footer`
  width: 100%;
  max-width: 750px;
  padding: 30px 10px 20px 10px;
  margin-left: auto;
  margin-right: auto;
  border-top: 1px solid #e0e0e0; 
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;


  @media screen and (min-width: 769px) {
    max-width: 994px;
    padding: 40px 30px 25px 30px;
    
    /* Перемикаємося на Grid сітку */
    display: grid;
    grid-template-columns: 1fr auto 1fr; 
    align-items: center;
    gap: 30px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1448px;
  }
`,Ky=P.div`
  font-family:var(--logo-font);
  font-size: 26px;

  color: #333;
  text-align: center;

  @media screen and (min-width: 769px) {
    text-align: left; 
  }
`,Yy=P.nav`
  display: flex;
  flex-direction: column; 
  align-items: center;
  gap: 15px;

  @media screen and (min-width: 769px) {
    flex-direction: row;
    justify-content: center;
    gap: 20px;
  }
  
  @media screen and (min-width: 1200px) {
    gap: 35px; 
  }
`,Pr=P(mr)`
  font-family: var(--main-font), sans-serif;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color:var(--lavanda-color);
  }
`,Xy=P.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  color: #333;

  @media screen and (min-width: 769px) {
    align-items: flex-end; 
  }
`,Jy=P.p`
  width: 100%;
  text-align: center;
 font-family: var(--main-font), sans-serif;
  font-size: 11px;
  color: #888;
  margin: 0;
  
  @media screen and (min-width: 769px) {

    grid-column: 1 / -1; 
    margin-top: 20px;
  }
`,Zy=()=>{const e=new Date().getFullYear();return g.jsxs(Gy,{children:[g.jsx(Ky,{children:"Diana J."}),g.jsxs(Yy,{children:[g.jsx(Pr,{to:"/",children:"Головна"}),g.jsx(Pr,{to:"about",children:"Про мене"}),g.jsx(Pr,{to:"portfolio",children:"Портфоліо"}),g.jsx(Pr,{to:"tariffs",children:"Тарифи"}),g.jsx(Pr,{to:"contacts",children:"Контакти"})]}),g.jsxs(Xy,{children:[g.jsx("span",{children:"м. Київ"}),g.jsx("a",{href:"tel:+380930000000",style:{color:"inherit",textDecoration:"none"},children:"+38 093 000 00 00"})]}),g.jsxs(Jy,{children:["© ",e," Diana J. Photography. All rights reserved."]})]})},qy=P.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
`,ev=P.main`
  flex: 1 0 auto; 
`,tv=()=>g.jsx(g.Fragment,{children:g.jsxs(qy,{children:[g.jsx(Qy,{}),g.jsx(ev,{children:g.jsx(q1,{})}),g.jsx(Zy,{})]})});function ds(){return ds=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ds.apply(this,arguments)}function nv(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function rv(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var ov=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(rv(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=nv(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),xe="-ms-",Ui="-moz-",D="-webkit-",g0="comm",_u="rule",Su="decl",iv="@import",y0="@keyframes",av="@layer",lv=Math.abs,ca=String.fromCharCode,sv=Object.assign;function uv(e,t){return pe(e,0)^45?(((t<<2^pe(e,0))<<2^pe(e,1))<<2^pe(e,2))<<2^pe(e,3):0}function v0(e){return e.trim()}function cv(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function ps(e,t){return e.indexOf(t)}function pe(e,t){return e.charCodeAt(t)|0}function fo(e,t,n){return e.slice(t,n)}function dt(e){return e.length}function Eu(e){return e.length}function Qo(e,t){return t.push(e),e}function fv(e,t){return e.map(t).join("")}var fa=1,sr=1,x0=0,Oe=0,oe=0,gr="";function da(e,t,n,r,o,i,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:fa,column:sr,length:a,return:""}}function $r(e,t){return sv(da("",null,null,"",null,null,0),e,{length:-e.length},t)}function dv(){return oe}function pv(){return oe=Oe>0?pe(gr,--Oe):0,sr--,oe===10&&(sr=1,fa--),oe}function Ue(){return oe=Oe<x0?pe(gr,Oe++):0,sr++,oe===10&&(sr=1,fa++),oe}function yt(){return pe(gr,Oe)}function ui(){return Oe}function Eo(e,t){return fo(gr,e,t)}function po(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function w0(e){return fa=sr=1,x0=dt(gr=e),Oe=0,[]}function k0(e){return gr="",e}function ci(e){return v0(Eo(Oe-1,ms(e===91?e+2:e===40?e+1:e)))}function mv(e){for(;(oe=yt())&&oe<33;)Ue();return po(e)>2||po(oe)>3?"":" "}function hv(e,t){for(;--t&&Ue()&&!(oe<48||oe>102||oe>57&&oe<65||oe>70&&oe<97););return Eo(e,ui()+(t<6&&yt()==32&&Ue()==32))}function ms(e){for(;Ue();)switch(oe){case e:return Oe;case 34:case 39:e!==34&&e!==39&&ms(oe);break;case 40:e===41&&ms(e);break;case 92:Ue();break}return Oe}function gv(e,t){for(;Ue()&&e+oe!==47+10;)if(e+oe===42+42&&yt()===47)break;return"/*"+Eo(t,Oe-1)+"*"+ca(e===47?e:Ue())}function yv(e){for(;!po(yt());)Ue();return Eo(e,Oe)}function vv(e){return k0(fi("",null,null,null,[""],e=w0(e),0,[0],e))}function fi(e,t,n,r,o,i,a,l,s){for(var u=0,m=0,p=a,h=0,x=0,w=0,y=1,_=1,d=1,c=0,f="",v=o,S=i,C=r,k=f;_;)switch(w=c,c=Ue()){case 40:if(w!=108&&pe(k,p-1)==58){ps(k+=F(ci(c),"&","&\f"),"&\f")!=-1&&(d=-1);break}case 34:case 39:case 91:k+=ci(c);break;case 9:case 10:case 13:case 32:k+=mv(w);break;case 92:k+=hv(ui()-1,7);continue;case 47:switch(yt()){case 42:case 47:Qo(xv(gv(Ue(),ui()),t,n),s);break;default:k+="/"}break;case 123*y:l[u++]=dt(k)*d;case 125*y:case 59:case 0:switch(c){case 0:case 125:_=0;case 59+m:d==-1&&(k=F(k,/\f/g,"")),x>0&&dt(k)-p&&Qo(x>32?af(k+";",r,n,p-1):af(F(k," ","")+";",r,n,p-2),s);break;case 59:k+=";";default:if(Qo(C=of(k,t,n,u,m,o,l,f,v=[],S=[],p),i),c===123)if(m===0)fi(k,t,C,C,v,i,p,l,S);else switch(h===99&&pe(k,3)===110?100:h){case 100:case 108:case 109:case 115:fi(e,C,C,r&&Qo(of(e,C,C,0,0,o,l,f,o,v=[],p),S),o,S,p,l,r?v:S);break;default:fi(k,C,C,C,[""],S,0,l,S)}}u=m=x=0,y=d=1,f=k="",p=a;break;case 58:p=1+dt(k),x=w;default:if(y<1){if(c==123)--y;else if(c==125&&y++==0&&pv()==125)continue}switch(k+=ca(c),c*y){case 38:d=m>0?1:(k+="\f",-1);break;case 44:l[u++]=(dt(k)-1)*d,d=1;break;case 64:yt()===45&&(k+=ci(Ue())),h=yt(),m=p=dt(f=k+=yv(ui())),c++;break;case 45:w===45&&dt(k)==2&&(y=0)}}return i}function of(e,t,n,r,o,i,a,l,s,u,m){for(var p=o-1,h=o===0?i:[""],x=Eu(h),w=0,y=0,_=0;w<r;++w)for(var d=0,c=fo(e,p+1,p=lv(y=a[w])),f=e;d<x;++d)(f=v0(y>0?h[d]+" "+c:F(c,/&\f/g,h[d])))&&(s[_++]=f);return da(e,t,n,o===0?_u:l,s,u,m)}function xv(e,t,n){return da(e,t,n,g0,ca(dv()),fo(e,2,-2),0)}function af(e,t,n,r){return da(e,t,n,Su,fo(e,0,r),fo(e,r+1,-1),r)}function Yn(e,t){for(var n="",r=Eu(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function wv(e,t,n,r){switch(e.type){case av:if(e.children.length)break;case iv:case Su:return e.return=e.return||e.value;case g0:return"";case y0:return e.return=e.value+"{"+Yn(e.children,r)+"}";case _u:e.value=e.props.join(",")}return dt(n=Yn(e.children,r))?e.return=e.value+"{"+n+"}":""}function kv(e){var t=Eu(e);return function(n,r,o,i){for(var a="",l=0;l<t;l++)a+=e[l](n,r,o,i)||"";return a}}function _v(e){return function(t){t.root||(t=t.return)&&e(t)}}var Sv=function(t,n,r){for(var o=0,i=0;o=i,i=yt(),o===38&&i===12&&(n[r]=1),!po(i);)Ue();return Eo(t,Oe)},Ev=function(t,n){var r=-1,o=44;do switch(po(o)){case 0:o===38&&yt()===12&&(n[r]=1),t[r]+=Sv(Oe-1,n,r);break;case 2:t[r]+=ci(o);break;case 4:if(o===44){t[++r]=yt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=ca(o)}while(o=Ue());return t},Cv=function(t,n){return k0(Ev(w0(t),n))},lf=new WeakMap,Tv=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!lf.get(r))&&!o){lf.set(t,!0);for(var i=[],a=Cv(n,i),l=r.props,s=0,u=0;s<a.length;s++)for(var m=0;m<l.length;m++,u++)t.props[u]=i[s]?a[s].replace(/&\f/g,l[m]):l[m]+" "+a[s]}}},Pv=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function _0(e,t){switch(uv(e,t)){case 5103:return D+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return D+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return D+e+Ui+e+xe+e+e;case 6828:case 4268:return D+e+xe+e+e;case 6165:return D+e+xe+"flex-"+e+e;case 5187:return D+e+F(e,/(\w+).+(:[^]+)/,D+"box-$1$2"+xe+"flex-$1$2")+e;case 5443:return D+e+xe+"flex-item-"+F(e,/flex-|-self/,"")+e;case 4675:return D+e+xe+"flex-line-pack"+F(e,/align-content|flex-|-self/,"")+e;case 5548:return D+e+xe+F(e,"shrink","negative")+e;case 5292:return D+e+xe+F(e,"basis","preferred-size")+e;case 6060:return D+"box-"+F(e,"-grow","")+D+e+xe+F(e,"grow","positive")+e;case 4554:return D+F(e,/([^-])(transform)/g,"$1"+D+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,D+"$1"),/(image-set)/,D+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,D+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,D+"box-pack:$3"+xe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+D+e+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,D+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(dt(e)-1-t>6)switch(pe(e,t+1)){case 109:if(pe(e,t+4)!==45)break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+D+"$2-$3$1"+Ui+(pe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ps(e,"stretch")?_0(F(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(pe(e,t+1)!==115)break;case 6444:switch(pe(e,dt(e)-3-(~ps(e,"!important")&&10))){case 107:return F(e,":",":"+D)+e;case 101:return F(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+D+(pe(e,14)===45?"inline-":"")+"box$3$1"+D+"$2$3$1"+xe+"$2box$3")+e}break;case 5936:switch(pe(e,t+11)){case 114:return D+e+xe+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return D+e+xe+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return D+e+xe+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return D+e+xe+e+e}return e}var $v=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case Su:t.return=_0(t.value,t.length);break;case y0:return Yn([$r(t,{value:F(t.value,"@","@"+D)})],o);case _u:if(t.length)return fv(t.props,function(i){switch(cv(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Yn([$r(t,{props:[F(i,/:(read-\w+)/,":"+Ui+"$1")]})],o);case"::placeholder":return Yn([$r(t,{props:[F(i,/:(plac\w+)/,":"+D+"input-$1")]}),$r(t,{props:[F(i,/:(plac\w+)/,":"+Ui+"$1")]}),$r(t,{props:[F(i,/:(plac\w+)/,xe+"input-$1")]})],o)}return""})}},jv=[$v],zv=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var _=y.getAttribute("data-emotion");_.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var o=t.stylisPlugins||jv,i={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var _=y.getAttribute("data-emotion").split(" "),d=1;d<_.length;d++)i[_[d]]=!0;l.push(y)});var s,u=[Tv,Pv];{var m,p=[wv,_v(function(y){m.insert(y)})],h=kv(u.concat(o,p)),x=function(_){return Yn(vv(_),h)};s=function(_,d,c,f){m=c,x(_?_+"{"+d.styles+"}":d.styles),f&&(w.inserted[d.name]=!0)}}var w={key:n,sheet:new ov({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:s};return w.sheet.hydrate(l),w},Nv=!0;function Iv(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var S0=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||Nv===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},Rv=function(t,n,r){S0(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function Lv(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Ov=/[A-Z]|^ms/g,bv=/_EMO_([^_]+?)_([^]*?)_EMO_/g,E0=function(t){return t.charCodeAt(1)===45},sf=function(t){return t!=null&&typeof t!="boolean"},Xa=Hp(function(e){return E0(e)?e:e.replace(Ov,"-$&").toLowerCase()}),uf=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(bv,function(r,o,i){return pt={name:o,styles:i,next:pt},o})}return Zp[t]!==1&&!E0(t)&&typeof n=="number"&&n!==0?n+"px":n};function mo(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return pt={name:n.name,styles:n.styles,next:pt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)pt={name:r.name,styles:r.styles,next:pt},r=r.next;var o=n.styles+";";return o}return Mv(e,t,n)}case"function":{if(e!==void 0){var i=pt,a=n(e);return pt=i,mo(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function Mv(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=mo(e,t,n[o])+";";else for(var i in n){var a=n[i];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=i+"{"+t[a]+"}":sf(a)&&(r+=Xa(i)+":"+uf(i,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)sf(a[l])&&(r+=Xa(i)+":"+uf(i,a[l])+";");else{var s=mo(e,t,a);switch(i){case"animation":case"animationName":{r+=Xa(i)+":"+s+";";break}default:r+=i+"{"+s+"}"}}}return r}var cf=/label:\s*([^\s;\n{]+)\s*(;|$)/g,pt,Av=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";pt=void 0;var a=t[0];a==null||a.raw===void 0?(o=!1,i+=mo(r,n,a)):i+=a[0];for(var l=1;l<t.length;l++)i+=mo(r,n,t[l]),o&&(i+=a[l]);cf.lastIndex=0;for(var s="",u;(u=cf.exec(i))!==null;)s+="-"+u[1];var m=Lv(i)+s;return{name:m,styles:i,next:pt}},Dv=function(t){return t()},Fv=al["useInsertionEffect"]?al["useInsertionEffect"]:!1,Uv=Fv||Dv,C0=E.createContext(typeof HTMLElement<"u"?zv({key:"css"}):null);C0.Provider;var Bv=function(t){return E.forwardRef(function(n,r){var o=E.useContext(C0);return t(n,o,r)})},Wv=E.createContext({}),Vv=pg,Hv=function(t){return t!=="theme"},ff=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?Vv:Hv},df=function(t,n,r){var o;if(n){var i=n.shouldForwardProp;o=t.__emotion_forwardProp&&i?function(a){return t.__emotion_forwardProp(a)&&i(a)}:i}return typeof o!="function"&&r&&(o=t.__emotion_forwardProp),o},Qv=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return S0(n,r,o),Uv(function(){return Rv(n,r,o)}),null},Gv=function e(t,n){var r=t.__emotion_real===t,o=r&&t.__emotion_base||t,i,a;n!==void 0&&(i=n.label,a=n.target);var l=df(t,n,r),s=l||ff(o),u=!s("as");return function(){var m=arguments,p=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(i!==void 0&&p.push("label:"+i+";"),m[0]==null||m[0].raw===void 0)p.push.apply(p,m);else{p.push(m[0][0]);for(var h=m.length,x=1;x<h;x++)p.push(m[x],m[0][x])}var w=Bv(function(y,_,d){var c=u&&y.as||o,f="",v=[],S=y;if(y.theme==null){S={};for(var C in y)S[C]=y[C];S.theme=E.useContext(Wv)}typeof y.className=="string"?f=Iv(_.registered,v,y.className):y.className!=null&&(f=y.className+" ");var k=Av(p.concat(v),_.registered,S);f+=_.key+"-"+k.name,a!==void 0&&(f+=" "+a);var $=u&&l===void 0?ff(c):s,L={};for(var N in y)u&&N==="as"||$(N)&&(L[N]=y[N]);return L.className=f,L.ref=d,E.createElement(E.Fragment,null,E.createElement(Qv,{cache:_,serialized:k,isStringTag:typeof c=="string"}),E.createElement(c,L))});return w.displayName=i!==void 0?i:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",w.defaultProps=t.defaultProps,w.__emotion_real=w,w.__emotion_base=o,w.__emotion_styles=p,w.__emotion_forwardProp=l,Object.defineProperty(w,"toString",{value:function(){return"."+a}}),w.withComponent=function(y,_){return e(y,ds({},n,_,{shouldForwardProp:df(w,_,!0)})).apply(void 0,p)},w}},Kv=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],ur=Gv.bind();Kv.forEach(function(e){ur[e]=ur(e)});const Yv=ur.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 500px;
`,Xv=ur.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`,Jv=()=>g.jsx(Yv,{children:g.jsx(Xv,{children:"404"})});const Zv=ur.div`
  width: 100%;
  height: 100vh;
 
`,qv=my`
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
  --logo-font: Dancing Script;
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

 
`,ex=P.div`
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
`,tx=P.section`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: stretch; 
    justify-content: center; 
    gap: 50px; 
  }
`,nx=P.div`
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
`,rx=P.h2`
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
`,ox=P.img`
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
`,ix=P.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,ax=P.div`
  display: flex;
  flex-direction: column;
  /* gap: 12px; */

  @media screen and (min-width: 768px) {
   
  }
`,pf=P.p`
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
`,lx=P.div`
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
`,sx=P.img`
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
`,ux=P.img`
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
`,cx=()=>g.jsx(ex,{children:g.jsxs(tx,{children:[g.jsxs(nx,{children:[g.jsx(ox,{src:"/portfolio/images/img9.JPG",alt:"main-photo"}),g.jsxs(ax,{children:[g.jsx(rx,{children:"Про мене"}),g.jsxs(ix,{children:[g.jsxs(pf,{children:["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat consequatur adipisci nobis atque quibusdam ipsam dolor quasi qui doloribus totam."," "]}),g.jsxs(pf,{children:["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat consequatur adipisci nobis atque quibusdam ipsam dolor quasi qui doloribus totam."," "]})]})]})]}),g.jsxs(lx,{children:[g.jsx(sx,{src:"/portfolio/images/img8.JPG",alt:"top-image"}),g.jsx(ux,{src:"/portfolio/images/img10.JPG",alt:"bottom-image"})]})]})}),fx=P.section`


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
  @media screen and (min-width: 769px) {
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
`,dx=P.div`
  z-index: 2;
  @media screen and (min-width: 769px) {
   max-width: 50%
  }
 @media screen and (min-width: 1200px) {
   
  }
`,px=P.span`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #aaaaaa;
  display: block;
  margin-bottom: 1rem;
`,mx=P.h1`

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
`,hx=P.p`
  font-size: 1rem;
  color: #cccccc;
  margin-bottom: 2.5rem;
  font-weight: 300;
`,gx=P.button`
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
`;P.div`
  position: relative;
  width: 45%;
  height: 70vh;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(20%);
  }
`;function yx(){return g.jsx(fx,{children:g.jsxs(dx,{children:[g.jsx(px,{children:"Фотограф"}),g.jsx(mx,{children:"Діана Прізвище"}),g.jsx(hx,{children:"Сучасні та креативні зйомки бла бла бла бла"}),g.jsx(gx,{children:"запис"})]})})}const vx=P.section`
    /* background-color:#ede4f566; */
    width: 100vw;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);`,xx=P.div`
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
  
`,wx=P.div`
       display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;


`,kx=P.h2`
font-size:40px;
font-family: var(--second-font);
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    margin-bottom: 20px;

     @media screen and (min-width: 768px) {
   text-align: left;  margin-bottom: 30px;
  }
    
`,_x=P.div`
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
`,Sx=P.div`
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
`,Ex=P.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* filter: grayscale(100%);  */
  transition: filter 0.4s ease, transform 0.4s ease;

  &:hover {
    /* filter: grayscale(0%); */
    transform: scale(1.02);
  }
`,Cx=P(mr)`
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
`,Tx=P(mr)`
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
`,Px=()=>{const e=[{id:1,category:"events",src:"https://images.unsplash.com/photo-1519741497674-611481863552",type:"small",alt:"Весілля пара"},{id:2,category:"events",src:"https://images.unsplash.com/photo-1595152772835-219674b2a8a6",type:"small",alt:"Наречена біля вікна"},{id:3,category:"portrait",src:"https://images.unsplash.com/photo-1534528741775-53994a69daeb",type:"wide",alt:"Портрет дівчини в кашкеті"},{id:4,category:"portrait",src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",type:"tall",alt:"Обійми на пероні"}];return g.jsx(vx,{children:g.jsxs(xx,{children:[g.jsxs(wx,{children:[g.jsx(kx,{children:"Портфоліо"}),g.jsx(Cx,{to:"/portfolio",children:"Переглянути портфоліо"})]}),g.jsx(_x,{className:"asymmetric",children:e.map(t=>g.jsx(Sx,{$type:t.type,$layout:"asymmetric",children:g.jsx(Ex,{src:t.src,alt:t.alt})},t.id))}),g.jsx(Tx,{to:"/portfolio",children:"Переглянути портфоліо"})]})})},$x=ur.div`
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
`,jx=()=>g.jsxs($x,{children:[g.jsx(yx,{}),g.jsx(cx,{}),g.jsx(Px,{})]}),zx=P.div`
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
`,Nx=P.h2`
  font-size: 24px;
  font-family: var(--second-font);
  font-weight: 800;
  letter-spacing: 0.05em;
  text-align: left;
  margin-top: 20px;
  margin-bottom: 25px;
  color: #000000;
  text-transform: capitalize;
`,Ix=P.ul`
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
`,Rx=P.li`
  display: inline-block;
`,Lx=P.button`
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
`,mf=P.div`
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
`,hf=P.div`
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
`,gf=P.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* filter: grayscale(100%);  */
  transition: filter 0.4s ease, transform 0.4s ease;

  &:hover {
    /* filter: grayscale(0%); */
    transform: scale(1.02);
  }
`,Ox=P.button`
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
`,bx=[{id:"objects",label:"Природа"},{id:"portrait",label:"Портрети"},{id:"brands",label:"Сімейні"},{id:"events",label:"Заходи"}],yf=[{id:1,category:"events",src:"https://images.unsplash.com/photo-1519741497674-611481863552",type:"small",alt:"Весілля пара"},{id:2,category:"events",src:"https://images.unsplash.com/photo-1595152772835-219674b2a8a6",type:"small",alt:"Наречена біля вікна"},{id:3,category:"portrait",src:"https://images.unsplash.com/photo-1534528741775-53994a69daeb",type:"wide",alt:"Портрет дівчини в кашкеті"},{id:4,category:"portrait",src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",type:"tall",alt:"Обійми на пероні"},{id:5,category:"brands",src:"https://images.unsplash.com/photo-1485462537746-965f33f7f6a7",type:"small",alt:"Бренд зйомка"},{id:6,category:"objects",src:"/portfolio/images/img4.JPG",type:"small",alt:"Предметний кадр"},{id:7,category:"objects",src:"/portfolio/images/img5.JPG",type:"small",alt:"Предметний кадр"},{id:8,category:"objects",src:"/portfolio/images/img7.JPG",type:"tall",alt:"Предметний кадр"},{id:9,category:"objects",src:"/portfolio/images/img9.JPG",type:"wide",alt:"Предметний кадр"},{id:10,category:"objects",src:"/portfolio/images/img10.JPG",type:"wide",alt:"Предметний кадр"},{id:11,category:"objects",src:"/portfolio/images/img3.JPG",type:"wide",alt:"Предметний кадр"}],Mx=()=>{const[e,t]=E.useState("objects"),[n,r]=E.useState(4),o=u=>{t(u),r(4)},i=e==="all"?yf:yf.filter(u=>u.category===e),a=i.slice(0,n),l=a.slice(0,4),s=a.slice(4);return g.jsxs(zx,{children:[g.jsx(Nx,{children:"Портфоліо"}),g.jsx(Ix,{children:bx.map(u=>g.jsx(Rx,{children:g.jsx(Lx,{$isActive:e===u.id,onClick:()=>o(u.id),children:u.label})},u.id))}),g.jsx(mf,{className:"asymmetric",children:l.map(u=>g.jsx(hf,{$type:u.type,$layout:"asymmetric",children:g.jsx(gf,{src:u.src,alt:u.alt})},u.id))}),s.length>0&&g.jsx(mf,{className:"simple",children:s.map(u=>g.jsx(hf,{$layout:"simple",children:g.jsx(gf,{src:u.src,alt:u.alt})},u.id))}),i.length>n&&g.jsx(Ox,{onClick:()=>r(u=>u+4),children:"Показати ще ↓"})]})},Ax=P.section`
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
`,Dx=P.h2`
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
`,Fx=P.div`
  display: flex;
  flex-direction: column;
   
  /* border-top: 1px solid rgba(134, 134, 134, 0.411);; */
  border-bottom: 1px solid rgba(134, 134, 134, 0.411);;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    border-bottom: none; 
  }
`,Ja=P.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 0;
  border-bottom: 1px solid #e0e0e0;
    border-top: 1px solid #e0e0e0;


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
`,Za=P.div`
height: 280px;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`,qa=P.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 20px;
`,el=P.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
`,Ee=P.li`
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
`,tl=P.div`
  font-size: 1.15rem;
  font-weight: 600;
  align-self: flex-end;
  margin-top: auto;
  
  @media screen and (max-width: 767px) {
    margin-top: 15px;
  }
`,nl=P.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`,rl=P.img`
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
`,ol=P.a`
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
`,Ux="https://images.unsplash.com/photo-1534528741775-53994a69daeb",Bx="https://images.unsplash.com/photo-1534528741775-53994a69daeb",Wx="https://images.unsplash.com/photo-1519741497674-611481863552",Vx=()=>g.jsxs(Ax,{children:[g.jsx(Dx,{children:"Тарифи"}),g.jsxs(Fx,{children:[g.jsxs(Ja,{children:[g.jsxs(Za,{children:[g.jsx(qa,{children:"Індивідуальна зйомка"}),g.jsxs(el,{children:[g.jsx(Ee,{children:"Допомога в підборі образу та локації"}),g.jsx(Ee,{children:"Допомога в позуванні"}),g.jsx(Ee,{children:"До 1-х годин зйомки"}),g.jsx(Ee,{children:"До 30 фотографій у ретуші"}),g.jsx(Ee,{children:"Термін здачі до 2-х тижнів"})]}),g.jsx(tl,{children:"10.000₴"})]}),g.jsxs(nl,{children:[g.jsx(rl,{src:Ux,alt:"Індивідуальна зйомка"}),g.jsx(ol,{href:"https://t.me/username",children:"Записатися на зйомку?"})]})]}),g.jsxs(Ja,{children:[g.jsxs(Za,{children:[g.jsx(qa,{children:"Сімейна / love-story"}),g.jsxs(el,{children:[g.jsx(Ee,{children:"Допомога в підборі образу та локації"}),g.jsx(Ee,{children:"Допомога в позуванні"}),g.jsx(Ee,{children:"До 2,5 годин зйомки"}),g.jsx(Ee,{children:"До 40 фотографій у ретуші"}),g.jsx(Ee,{children:"Термін здачі до 2-х тижнів"})]}),g.jsx(tl,{children:"10.000₴"})]}),g.jsxs(nl,{children:[g.jsx(rl,{src:Bx,alt:"Сімейна або love-story зйомка"}),g.jsx(ol,{href:"https://t.me/username",children:"Записатися на зйомку?? чи шо"})]})]}),g.jsxs(Ja,{children:[g.jsxs(Za,{children:[g.jsx(qa,{children:"Заходи"}),g.jsxs(el,{children:[g.jsx(Ee,{children:"Виїзд на місце проведення"}),g.jsx(Ee,{children:"Групові та індивідуальні фото в межах заходу"}),g.jsx(Ee,{children:"До 80 фотографій у ретуші"}),g.jsx(Ee,{children:"Усі вдалі вихідні матеріали"}),g.jsx(Ee,{children:"Термін здачі до 3-x тижнів"})]}),g.jsx(tl,{children:"10.000₴"})]}),g.jsxs(nl,{children:[g.jsx(rl,{src:Wx,alt:"Зйомка заходів"}),g.jsx(ol,{href:"https://t.me/username",children:"Записатися на зйомку??"})]})]})]})]}),Hx=P.section`
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
`,Qx=P.h2`
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
`,Gx=P.div`
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
`,Kx=P.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    max-width: 380px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 450px;
  }
`,Yx=P.h3`
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 30px;
font-family: var(--main-font);
  letter-spacing: 0.5px;
`,Xx=P.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  height: 100%;
    justify-content: flex-start;
  padding-bottom:35px;
  

`,vf=P.input`
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
`;P.textarea`
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
`;const Jx=P.button`
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
`,Zx=P.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  gap: 24px;
`,qx=P.div`
  width: 100%;
  overflow: hidden;
`,ew=P.img`
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  
`,tw=P.div`
  display: flex;
  flex-direction: column;

  padding-top: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`,nw=P.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
      padding-bottom: 35px;
`,rw=P.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
  
  @media screen and (min-width: 768px) {
    align-items: flex-end;
     margin-bottom: 0px;
  }
`,xf=P.span`
  font-size: 0.8rem;
  text-transform: uppercase;
  color: #767676;
  letter-spacing: 1px;
`,ow=P.p`
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
`,iw=P.div`
  display: flex;
  gap: 20px;
`,il=P.a`
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
`;function T0(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=T0(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function hn(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=T0(e))&&(r&&(r+=" "),r+=t);return r}var Co=e=>typeof e=="number"&&!isNaN(e),kn=e=>typeof e=="string",jt=e=>typeof e=="function",aw=e=>kn(e)||Co(e),hs=e=>kn(e)||jt(e)?e:null,lw=(e,t)=>e===!1||Co(e)&&e>0?e:t,gs=e=>E.isValidElement(e)||kn(e)||jt(e)||Co(e);function sw(e,t,n=300){let{scrollHeight:r,style:o}=e;requestAnimationFrame(()=>{o.minHeight="initial",o.height=r+"px",o.transition=`all ${n}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)})})}function uw({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:o=300}){return function({children:i,position:a,preventExitTransition:l,done:s,nodeRef:u,isIn:m,playToast:p}){let h=n?`${e}--${a}`:e,x=n?`${t}--${a}`:t,w=E.useRef(0);return E.useLayoutEffect(()=>{let y=u.current,_=h.split(" "),d=c=>{c.target===u.current&&(p(),y.removeEventListener("animationend",d),y.removeEventListener("animationcancel",d),w.current===0&&c.type!=="animationcancel"&&y.classList.remove(..._))};y.classList.add(..._),y.addEventListener("animationend",d),y.addEventListener("animationcancel",d)},[]),E.useEffect(()=>{let y=u.current,_=()=>{y.removeEventListener("animationend",_),r?sw(y,s,o):s()};m||(l?_():(w.current=1,y.className+=` ${x}`,y.addEventListener("animationend",_)))},[m]),b.createElement(b.Fragment,null,i)}}function wf(e,t){return{content:P0(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function P0(e,t,n=!1){return E.isValidElement(e)&&!kn(e.type)?E.cloneElement(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):jt(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function cw({closeToast:e,theme:t,ariaLabel:n="close"}){return b.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),e(!0)},"aria-label":n},b.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},b.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function fw({delay:e,isRunning:t,closeToast:n,type:r="default",hide:o,className:i,controlledProgress:a,progress:l,rtl:s,isIn:u,theme:m}){let p=o||a&&l===0,h={animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};a&&(h.transform=`scaleX(${l})`);let x=hn("Toastify__progress-bar",a?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${m}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":s}),w=jt(i)?i({rtl:s,type:r,defaultClassName:x}):hn(x,i),y={[a&&l>=1?"onTransitionEnd":"onAnimationEnd"]:a&&l<1?null:()=>{u&&n()}};return b.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":p},b.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${m} Toastify__progress-bar--${r}`}),b.createElement("div",{role:"progressbar","aria-hidden":p?"true":"false","aria-label":"notification timer","aria-valuenow":a?Math.round(l*100):void 0,"aria-valuemin":0,"aria-valuemax":100,className:w,style:h,...y}))}var dw=1,$0=()=>`${dw++}`;function pw(e,t,n){let r=1,o=0,i=[],a=[],l=t,s=new Map,u=new Set,m=c=>(u.add(c),()=>u.delete(c)),p=()=>{a=Array.from(s.values()),u.forEach(c=>c())},h=({containerId:c,toastId:f,updateId:v})=>{let S=c?c!==e:e!==1,C=s.has(f)&&v==null;return S||C},x=(c,f)=>{s.forEach(v=>{var S;(f==null||f===v.props.toastId)&&((S=v.toggle)==null||S.call(v,c))})},w=c=>{var f,v;c.isActive&&((v=(f=c.props)==null?void 0:f.onClose)==null||v.call(f,c.removalReason),c.isActive=!1,n(wf(c,"removed")))},y=c=>{if(c==null)s.forEach(w);else{let f=s.get(c);f&&w(f)}p()},_=()=>{o-=i.length,i=[]},d=c=>{var f,v;let{toastId:S,updateId:C}=c.props,k=C==null;c.staleId&&s.delete(c.staleId),c.isActive=!0,s.set(S,c),p(),n(wf(c,k?"added":"updated")),k&&((v=(f=c.props).onOpen)==null||v.call(f))};return{id:e,props:l,observe:m,toggle:x,removeToast:y,toasts:s,clearQueue:_,buildToast:(c,f)=>{if(h(f))return;let{toastId:v,updateId:S,data:C,staleId:k,delay:$}=f,L=S==null;L&&o++;let N={...l,style:l.toastStyle,key:r++,...Object.fromEntries(Object.entries(f).filter(([He,Se])=>Se!=null)),toastId:v,updateId:S,data:C,isIn:!1,className:hs(f.className||l.toastClassName),progressClassName:hs(f.progressClassName||l.progressClassName),autoClose:f.isLoading?!1:lw(f.autoClose,l.autoClose),closeToast(He){let Se=s.get(v);Se&&(Se.removalReason=He,y(v))},deleteToast(){if(s.get(v)!=null){if(s.delete(v),o--,o<0&&(o=0),i.length>0){d(i.shift());return}p()}}};N.closeButton=l.closeButton,f.closeButton===!1||gs(f.closeButton)?N.closeButton=f.closeButton:f.closeButton===!0&&(N.closeButton=gs(l.closeButton)?l.closeButton:!0);let X={content:c,props:N,staleId:k};l.limit&&l.limit>0&&o>l.limit&&L?i.push(X):Co($)?setTimeout(()=>{d(X)},$):d(X)},setProps(c){l=c},setToggle:(c,f)=>{let v=s.get(c);v&&(v.toggle=f)},isToastActive:c=>{var f;return(f=s.get(c))==null?void 0:f.isActive},getSnapshot:()=>a}}var Te=new Map,ho=[],ys=new Set,mw=e=>ys.forEach(t=>t(e)),j0=()=>Te.size>0;function hw(){ho.forEach(e=>N0(e.content,e.options)),ho=[]}var gw=(e,{containerId:t})=>{var n;return(n=Te.get(t||1))==null?void 0:n.toasts.get(e)};function z0(e,t){var n;if(t)return!!((n=Te.get(t))!=null&&n.isToastActive(e));let r=!1;return Te.forEach(o=>{o.isToastActive(e)&&(r=!0)}),r}function yw(e){if(!j0()){ho=ho.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||aw(e))Te.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=Te.get(e.containerId);t?t.removeToast(e.id):Te.forEach(n=>{n.removeToast(e.id)})}}var vw=(e={})=>{Te.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function N0(e,t){gs(e)&&(j0()||ho.push({content:e,options:t}),Te.forEach(n=>{n.buildToast(e,t)}))}function xw(e){var t;(t=Te.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function I0(e,t){Te.forEach(n=>{(t==null||!(t!=null&&t.containerId)||(t==null?void 0:t.containerId)===n.id)&&n.toggle(e,t==null?void 0:t.id)})}function ww(e){let t=e.containerId||1;return{subscribe(n){let r=pw(t,e,mw);Te.set(t,r);let o=r.observe(n);return hw(),()=>{o(),Te.delete(t)}},setProps(n){var r;(r=Te.get(t))==null||r.setProps(n)},getSnapshot(){var n;return(n=Te.get(t))==null?void 0:n.getSnapshot()}}}function kw(e){return ys.add(e),()=>{ys.delete(e)}}function _w(e){return e&&(kn(e.toastId)||Co(e.toastId))?e.toastId:$0()}function To(e,t){return N0(e,t),t.toastId}function pa(e,t){return{...t,type:t&&t.type||e,toastId:_w(t)}}function ma(e){return(t,n)=>To(t,pa(e,n))}function B(e,t){return To(e,pa("default",t))}B.loading=(e,t)=>To(e,pa("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function Sw(e,{pending:t,error:n,success:r},o){let i;t&&(i=kn(t)?B.loading(t,o):B.loading(t.render,{...o,...t}));let a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(u,m,p)=>{if(m==null){B.dismiss(i);return}let h={type:u,...a,...o,data:p},x=kn(m)?{render:m}:m;return i?B.update(i,{...h,...x}):B(x.render,{...h,...x}),p},s=jt(e)?e():e;return s.then(u=>l("success",r,u)).catch(u=>l("error",n,u)),s}B.promise=Sw;B.success=ma("success");B.info=ma("info");B.error=ma("error");B.warning=ma("warning");B.warn=B.warning;B.dark=(e,t)=>To(e,pa("default",{theme:"dark",...t}));function Ew(e){yw(e)}B.dismiss=Ew;B.clearWaitingQueue=vw;B.isActive=z0;B.update=(e,t={})=>{let n=gw(e,t);if(n){let{props:r,content:o}=n,i={delay:100,...r,...t,toastId:t.toastId||e,updateId:$0()};i.toastId!==e&&(i.staleId=e);let a=i.render||o;delete i.render,To(a,i)}};B.done=e=>{B.update(e,{progress:1})};B.onChange=kw;B.play=e=>I0(!0,e);B.pause=e=>I0(!1,e);function Cw(e){var t;let{subscribe:n,getSnapshot:r,setProps:o}=E.useRef(ww(e)).current;o(e);let i=(t=E.useSyncExternalStore(n,r,r))==null?void 0:t.slice();function a(l){if(!i)return[];let s=new Map;return e.newestOnTop&&i.reverse(),i.forEach(u=>{let{position:m}=u.props;s.has(m)||s.set(m,[]),s.get(m).push(u)}),Array.from(s,u=>l(u[0],u[1]))}return{getToastToRender:a,isToastActive:z0,count:i==null?void 0:i.length}}function Tw(e){let[t,n]=E.useState(!1),[r,o]=E.useState(!1),i=E.useRef(null),a=E.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:s,closeToast:u,onClick:m,closeOnClick:p}=e;xw({id:e.toastId,containerId:e.containerId,fn:n}),E.useEffect(()=>{if(e.pauseOnFocusLoss)return h(),()=>{x()}},[e.pauseOnFocusLoss]);function h(){document.hasFocus()||d(),window.addEventListener("focus",_),window.addEventListener("blur",d)}function x(){window.removeEventListener("focus",_),window.removeEventListener("blur",d)}function w(k){if(e.draggable===!0||e.draggable===k.pointerType){c();let $=i.current;a.canCloseOnClick=!0,a.canDrag=!0,$.style.transition="none",e.draggableDirection==="x"?(a.start=k.clientX,a.removalDistance=$.offsetWidth*(e.draggablePercent/100)):(a.start=k.clientY,a.removalDistance=$.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function y(k){let{top:$,bottom:L,left:N,right:X}=i.current.getBoundingClientRect();k.pointerType==="mouse"&&e.pauseOnHover&&k.clientX>=N&&k.clientX<=X&&k.clientY>=$&&k.clientY<=L?d():_()}function _(){n(!0)}function d(){n(!1)}function c(){a.didMove=!1,document.addEventListener("pointermove",v),document.addEventListener("pointerup",S)}function f(){document.removeEventListener("pointermove",v),document.removeEventListener("pointerup",S)}function v(k){let $=i.current;if(a.canDrag&&$){a.didMove=!0,t&&d(),e.draggableDirection==="x"?a.delta=k.clientX-a.start:a.delta=k.clientY-a.start,a.start!==k.clientX&&(a.canCloseOnClick=!1);let L=e.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`;$.style.transform=`translate3d(${L},0)`,$.style.opacity=`${1-Math.abs(a.delta/a.removalDistance)}`}}function S(){f();let k=i.current;if(a.canDrag&&a.didMove&&k){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance){o(!0),e.closeToast(!0),e.collapseAll();return}k.style.transition="transform 0.2s, opacity 0.2s",k.style.removeProperty("transform"),k.style.removeProperty("opacity")}}let C={onPointerDown:w,onPointerUp:y};return l&&s&&(C.onMouseEnter=d,e.stacked||(C.onMouseLeave=_)),p&&(C.onClick=k=>{m&&m(k),a.canCloseOnClick&&u(!0)}),{playToast:_,pauseToast:d,isRunning:t,preventExitTransition:r,toastRef:i,eventHandlers:C}}var R0=typeof window<"u"?E.useLayoutEffect:E.useEffect,ha=({theme:e,type:t,isLoading:n,...r})=>b.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function Pw(e){return b.createElement(ha,{...e},b.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function $w(e){return b.createElement(ha,{...e},b.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function jw(e){return b.createElement(ha,{...e},b.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function zw(e){return b.createElement(ha,{...e},b.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function Nw(){return b.createElement("div",{className:"Toastify__spinner"})}var vs={info:$w,warning:Pw,success:jw,error:zw,spinner:Nw},Iw=e=>e in vs;function Rw({theme:e,type:t,isLoading:n,icon:r}){let o=null,i={theme:e,type:t};return r===!1||(jt(r)?o=r({...i,isLoading:n}):E.isValidElement(r)?o=E.cloneElement(r,i):n?o=vs.spinner():Iw(t)&&(o=vs[t](i))),o}var Lw=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:o,playToast:i}=Tw(e),{closeButton:a,children:l,autoClose:s,onClick:u,type:m,hideProgressBar:p,closeToast:h,transition:x,position:w,className:y,style:_,progressClassName:d,updateId:c,role:f,progress:v,rtl:S,toastId:C,deleteToast:k,isIn:$,isLoading:L,closeOnClick:N,theme:X,ariaLabel:He}=e,Se=hn("Toastify__toast",`Toastify__toast-theme--${X}`,`Toastify__toast--${m}`,{"Toastify__toast--rtl":S},{"Toastify__toast--close-on-click":N}),Tn=jt(y)?y({rtl:S,position:w,type:m,defaultClassName:Se}):hn(Se,y),Pn=Rw(e),st=!!v||!s,ge={closeToast:h,type:m,theme:X},j=null;return a===!1||(jt(a)?j=a(ge):E.isValidElement(a)?j=E.cloneElement(a,ge):j=cw(ge)),b.createElement(x,{isIn:$,done:k,position:w,preventExitTransition:n,nodeRef:r,playToast:i},b.createElement("div",{id:C,tabIndex:0,onClick:u,"data-in":$,className:Tn,...o,style:_,ref:r,...$&&{role:f,"aria-label":He}},Pn!=null&&b.createElement("div",{className:hn("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!L})},Pn),P0(l,e,!t),j,!e.customProgressBar&&b.createElement(fw,{...c&&!st?{key:`p-${c}`}:{},rtl:S,theme:X,delay:s,isRunning:t,isIn:$,closeToast:h,hide:p,type:m,className:d,controlledProgress:st,progress:v||0})))},Ow=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),bw=uw(Ow("bounce",!0)),Mw={position:"top-right",transition:bw,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function Aw(e){let t={...Mw,...e},n=e.stacked,[r,o]=E.useState(!0),i=E.useRef(null),{getToastToRender:a,isToastActive:l,count:s}=Cw(t),{className:u,style:m,rtl:p,containerId:h,hotKeys:x}=t;function w(_){let d=hn("Toastify__toast-container",`Toastify__toast-container--${_}`,{"Toastify__toast-container--rtl":p});return jt(u)?u({position:_,rtl:p,defaultClassName:d}):hn(d,hs(u))}function y(){n&&(o(!0),B.play())}return R0(()=>{var _;if(n){let d=i.current.querySelectorAll('[data-in="true"]'),c=12,f=(_=t.position)==null?void 0:_.includes("top"),v=0,S=0;Array.from(d).reverse().forEach((C,k)=>{let $=C;$.classList.add("Toastify__toast--stacked"),k>0&&($.dataset.collapsed=`${r}`),$.dataset.pos||($.dataset.pos=f?"top":"bot");let L=v*(r?.2:1)+(r?0:c*k),N=Math.max(.5,1-(r?S:0));$.style.setProperty("--y",`${f?L:L*-1}px`),$.style.setProperty("--g",`${c}`),$.style.setProperty("--s",`${N}`),v+=$.offsetHeight,S+=.025})}},[r,s,n]),E.useEffect(()=>{function _(d){var c;let f=i.current;x(d)&&((c=f==null?void 0:f.querySelector('[tabIndex="0"]'))==null||c.focus(),o(!1),B.pause()),d.key==="Escape"&&(document.activeElement===f||f!=null&&f.contains(document.activeElement))&&(o(!0),B.play())}return document.addEventListener("keydown",_),()=>{document.removeEventListener("keydown",_)}},[x]),b.createElement("section",{ref:i,className:"Toastify",id:h,onMouseEnter:()=>{n&&(o(!1),B.pause())},onMouseLeave:y,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},a((_,d)=>{let c=d.length?{...m}:{...m,pointerEvents:"none"};return b.createElement("div",{tabIndex:-1,className:w(_),"data-stacked":n,style:c,key:`c-${_}`},d.map(({content:f,props:v})=>b.createElement(Lw,{...v,stacked:n,collapseAll:y,isIn:l(v.toastId,v.containerId),key:`t-${v.key}`},f)))}))}var Dw=`:root {
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
`,kf=new Map,Fw=(e,t)=>{R0(()=>{if(!e||typeof document>"u")return;let n=document,r=kf.get(n);if(r){t&&r.setAttribute("nonce",t);return}let o=n.createElement("style");o.textContent=e,t&&o.setAttribute("nonce",t),n.head.appendChild(o),kf.set(n,o)},[t])};function Uw(e){return Fw(Dw,e.nonce),b.createElement(Aw,{...e})}const Bw=()=>{const[e,t]=E.useState({name:"",tel:""}),n=async r=>{r.preventDefault(),t({name:"",tel:""}),console.log(e);const o={}.VITE_TELEGRAM_BOT_TOKEN,i={}.VITE_TELEGRAM_CHAT_ID,a=`📸 *Нове замовлення дзвінка!*

👤 *Ім'я:* ${e.name}
📞 *Телефон:* ${e.tel}`;try{(await fetch(`https://api.telegram.org/bot${o}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:i,text:a,parse_mode:"Markdown"})})).ok?(B.info(`Дякую, ${e.name}! Я зв'яжусь з вами.`,{icon:!1}),t({name:"",tel:""})):B("Помилка відправки. Спробуйте ще раз.")}catch(l){console.error("Помилка:",l),alert("Щось пішло не так...")}};return g.jsxs(Hx,{children:[g.jsx(Uw,{position:"top-right",autoClose:4e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),g.jsx(Qx,{children:"Контакти"}),g.jsxs(Gx,{children:[g.jsxs(Kx,{children:[g.jsx(Yx,{children:"Бажаєте замовити фотосесію або є індивідуальна ідея? Залиште свій номер і ми обговоримо всі деталі."}),g.jsxs(Xx,{onSubmit:n,children:[g.jsx(vf,{type:"text",placeholder:"Ваше ім'я",value:e.name,onChange:r=>t({...e,name:r.target.value}),required:!0}),g.jsx(vf,{type:"tel",placeholder:"Номер телефону",value:e.tel,onChange:r=>t({...e,tel:r.target.value}),required:!0}),g.jsx(Jx,{type:"submit",children:"Надіслати"})]})]}),g.jsxs(Zx,{children:[g.jsxs(qx,{children:[g.jsx(ew,{src:"/portfolio/images/img4.JPG",alt:"Mary I Photography"})," "]}),g.jsxs(tw,{children:[g.jsxs(nw,{children:[g.jsx(xf,{children:"Локація"}),g.jsx(ow,{children:"Київ — Конотоп"})]}),g.jsxs(rw,{children:[g.jsx(xf,{children:"Зв'язок"}),g.jsxs(iw,{children:[g.jsx(il,{href:"https://instagram.com",target:"_blank",rel:"noreferrer","aria-label":"Instagram",children:g.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[g.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),g.jsx("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),g.jsx("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]})}),g.jsx(il,{href:"https://t.me",target:"_blank",rel:"noreferrer","aria-label":"Telegram",children:g.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[g.jsx("path",{d:"m22 2-7 20-4-9-9-4Z"}),g.jsx("path",{d:"M22 2 11 13"})]})}),g.jsx(il,{href:"mailto:info@example.com","aria-label":"Email",children:g.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[g.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),g.jsx("polyline",{points:"22,6 12,13 2,6"})]})})]})]})]})]})]})]})},Ww=()=>{const{pathname:e}=_o();return E.useEffect(()=>{window.scrollTo(0,0)},[e]),null};function Vw(){return console.log("test"),g.jsxs(Zv,{children:[g.jsx(qv,{}),g.jsx(Ww,{}),g.jsx(tg,{children:g.jsxs(ln,{path:"/",element:g.jsx(tv,{}),children:[g.jsx(ln,{index:!0,element:g.jsx(jx,{})}),g.jsx(ln,{path:"/portfolio",element:g.jsx(Mx,{})}),g.jsx(ln,{path:"/tariffs",element:g.jsx(Vx,{})}),g.jsx(ln,{path:"/contacts",element:g.jsx(Bw,{})}),g.jsx(ln,{path:"*",element:g.jsx(Jv,{})})]})})]})}ns.createRoot(document.getElementById("root")).render(g.jsx(b.StrictMode,{children:g.jsx(sg,{basename:"/portfolio/",children:g.jsx(Vw,{})})}));
