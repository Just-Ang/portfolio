function C1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function E1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _m={exports:{}},pa={},bm={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mo=Symbol.for("react.element"),P1=Symbol.for("react.portal"),_1=Symbol.for("react.fragment"),b1=Symbol.for("react.strict_mode"),A1=Symbol.for("react.profiler"),R1=Symbol.for("react.provider"),M1=Symbol.for("react.context"),L1=Symbol.for("react.forward_ref"),j1=Symbol.for("react.suspense"),I1=Symbol.for("react.memo"),D1=Symbol.for("react.lazy"),pd=Symbol.iterator;function $1(e){return e===null||typeof e!="object"?null:(e=pd&&e[pd]||e["@@iterator"],typeof e=="function"?e:null)}var Am={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rm=Object.assign,Mm={};function Qr(e,t,n){this.props=e,this.context=t,this.refs=Mm,this.updater=n||Am}Qr.prototype.isReactComponent={};Qr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Qr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Lm(){}Lm.prototype=Qr.prototype;function Dc(e,t,n){this.props=e,this.context=t,this.refs=Mm,this.updater=n||Am}var $c=Dc.prototype=new Lm;$c.constructor=Dc;Rm($c,Qr.prototype);$c.isPureReactComponent=!0;var hd=Array.isArray,jm=Object.prototype.hasOwnProperty,Oc={current:null},Im={key:!0,ref:!0,__self:!0,__source:!0};function Dm(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)jm.call(t,r)&&!Im.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:mo,type:e,key:o,ref:s,props:i,_owner:Oc.current}}function O1(e,t){return{$$typeof:mo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Nc(e){return typeof e=="object"&&e!==null&&e.$$typeof===mo}function N1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var md=/\/+/g;function Ka(e,t){return typeof e=="object"&&e!==null&&e.key!=null?N1(""+e.key):t.toString(36)}function ts(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case mo:case P1:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Ka(s,0):r,hd(i)?(n="",e!=null&&(n=e.replace(md,"$&/")+"/"),ts(i,t,n,"",function(u){return u})):i!=null&&(Nc(i)&&(i=O1(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(md,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",hd(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Ka(o,a);s+=ts(o,t,n,l,i)}else if(l=$1(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Ka(o,a++),s+=ts(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Lo(e,t,n){if(e==null)return e;var r=[],i=0;return ts(e,r,"","",function(o){return t.call(n,o,i++)}),r}function V1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Be={current:null},ns={transition:null},z1={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:ns,ReactCurrentOwner:Oc};V.Children={map:Lo,forEach:function(e,t,n){Lo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Lo(e,function(){t++}),t},toArray:function(e){return Lo(e,function(t){return t})||[]},only:function(e){if(!Nc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=Qr;V.Fragment=_1;V.Profiler=A1;V.PureComponent=Dc;V.StrictMode=b1;V.Suspense=j1;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z1;V.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Rm({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Oc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)jm.call(t,l)&&!Im.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:mo,type:e.type,key:i,ref:o,props:r,_owner:s}};V.createContext=function(e){return e={$$typeof:M1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:R1,_context:e},e.Consumer=e};V.createElement=Dm;V.createFactory=function(e){var t=Dm.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:L1,render:e}};V.isValidElement=Nc;V.lazy=function(e){return{$$typeof:D1,_payload:{_status:-1,_result:e},_init:V1}};V.memo=function(e,t){return{$$typeof:I1,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=ns.transition;ns.transition={};try{e()}finally{ns.transition=t}};V.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};V.useCallback=function(e,t){return Be.current.useCallback(e,t)};V.useContext=function(e){return Be.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return Be.current.useDeferredValue(e)};V.useEffect=function(e,t){return Be.current.useEffect(e,t)};V.useId=function(){return Be.current.useId()};V.useImperativeHandle=function(e,t,n){return Be.current.useImperativeHandle(e,t,n)};V.useInsertionEffect=function(e,t){return Be.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return Be.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return Be.current.useMemo(e,t)};V.useReducer=function(e,t,n){return Be.current.useReducer(e,t,n)};V.useRef=function(e){return Be.current.useRef(e)};V.useState=function(e){return Be.current.useState(e)};V.useSyncExternalStore=function(e,t,n){return Be.current.useSyncExternalStore(e,t,n)};V.useTransition=function(){return Be.current.useTransition()};V.version="18.2.0";bm.exports=V;var C=bm.exports;const N=E1(C),ql=C1({__proto__:null,default:N},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F1=C,B1=Symbol.for("react.element"),U1=Symbol.for("react.fragment"),W1=Object.prototype.hasOwnProperty,H1=F1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,K1={key:!0,ref:!0,__self:!0,__source:!0};function $m(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)W1.call(t,r)&&!K1.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:B1,type:e,key:o,ref:s,props:i,_owner:H1.current}}pa.Fragment=U1;pa.jsx=$m;pa.jsxs=$m;_m.exports=pa;var S=_m.exports,Om={exports:{}},it={},Nm={exports:{}},Vm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,j){var D=A.length;A.push(j);e:for(;0<D;){var F=D-1>>>1,ee=A[F];if(0<i(ee,j))A[F]=j,A[D]=ee,D=F;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var j=A[0],D=A.pop();if(D!==j){A[0]=D;e:for(var F=0,ee=A.length,zt=ee>>>1;F<zt;){var qe=2*(F+1)-1,en=A[qe],Ze=qe+1,st=A[Ze];if(0>i(en,D))Ze<ee&&0>i(st,en)?(A[F]=st,A[Ze]=D,F=Ze):(A[F]=en,A[qe]=D,F=qe);else if(Ze<ee&&0>i(st,D))A[F]=st,A[Ze]=D,F=Ze;else break e}}return j}function i(A,j){var D=A.sortIndex-j.sortIndex;return D!==0?D:A.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,d=3,g=!1,y=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(A){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=A)r(u),j.sortIndex=j.expirationTime,t(l,j);else break;j=n(u)}}function w(A){if(v=!1,m(A),!y)if(n(l)!==null)y=!0,le(T);else{var j=n(u);j!==null&&ke(w,j.startTime-A)}}function T(A,j){y=!1,v&&(v=!1,h(P),P=-1),g=!0;var D=d;try{for(m(j),f=n(l);f!==null&&(!(f.expirationTime>j)||A&&!$());){var F=f.callback;if(typeof F=="function"){f.callback=null,d=f.priorityLevel;var ee=F(f.expirationTime<=j);j=e.unstable_now(),typeof ee=="function"?f.callback=ee:f===n(l)&&r(l),m(j)}else r(l);f=n(l)}if(f!==null)var zt=!0;else{var qe=n(u);qe!==null&&ke(w,qe.startTime-j),zt=!1}return zt}finally{f=null,d=D,g=!1}}var E=!1,k=null,P=-1,I=5,_=-1;function $(){return!(e.unstable_now()-_<I)}function G(){if(k!==null){var A=e.unstable_now();_=A;var j=!0;try{j=k(!0,A)}finally{j?ne():(E=!1,k=null)}}else E=!1}var ne;if(typeof p=="function")ne=function(){p(G)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,Ae=Se.port2;Se.port1.onmessage=G,ne=function(){Ae.postMessage(null)}}else ne=function(){x(G,0)};function le(A){k=A,E||(E=!0,ne())}function ke(A,j){P=x(function(){A(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,le(T))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(A){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var D=d;d=j;try{return A()}finally{d=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,j){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var D=d;d=A;try{return j()}finally{d=D}},e.unstable_scheduleCallback=function(A,j,D){var F=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?F+D:F):D=F,A){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=D+ee,A={id:c++,callback:j,priorityLevel:A,startTime:D,expirationTime:ee,sortIndex:-1},D>F?(A.sortIndex=D,t(u,A),n(l)===null&&A===n(u)&&(v?(h(P),P=-1):v=!0,ke(w,D-F))):(A.sortIndex=ee,t(l,A),y||g||(y=!0,le(T))),A},e.unstable_shouldYield=$,e.unstable_wrapCallback=function(A){var j=d;return function(){var D=d;d=j;try{return A.apply(this,arguments)}finally{d=D}}}})(Vm);Nm.exports=Vm;var G1=Nm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm=C,rt=G1;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fm=new Set,Vi={};function rr(e,t){Ir(e,t),Ir(e+"Capture",t)}function Ir(e,t){for(Vi[e]=t,e=0;e<t.length;e++)Fm.add(t[e])}var Yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zl=Object.prototype.hasOwnProperty,Y1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gd={},yd={};function X1(e){return Zl.call(yd,e)?!0:Zl.call(gd,e)?!1:Y1.test(e)?yd[e]=!0:(gd[e]=!0,!1)}function Q1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function q1(e,t,n,r){if(t===null||typeof t>"u"||Q1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ue(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){be[e]=new Ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];be[t]=new Ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){be[e]=new Ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){be[e]=new Ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){be[e]=new Ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){be[e]=new Ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){be[e]=new Ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){be[e]=new Ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){be[e]=new Ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Vc=/[\-:]([a-z])/g;function zc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Vc,zc);be[t]=new Ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Vc,zc);be[t]=new Ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Vc,zc);be[t]=new Ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){be[e]=new Ue(e,1,!1,e.toLowerCase(),null,!1,!1)});be.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){be[e]=new Ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Fc(e,t,n,r){var i=be.hasOwnProperty(t)?be[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(q1(t,n,i,r)&&(n=null),r||i===null?X1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Jt=zm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,jo=Symbol.for("react.element"),cr=Symbol.for("react.portal"),fr=Symbol.for("react.fragment"),Bc=Symbol.for("react.strict_mode"),Jl=Symbol.for("react.profiler"),Bm=Symbol.for("react.provider"),Um=Symbol.for("react.context"),Uc=Symbol.for("react.forward_ref"),eu=Symbol.for("react.suspense"),tu=Symbol.for("react.suspense_list"),Wc=Symbol.for("react.memo"),sn=Symbol.for("react.lazy"),Wm=Symbol.for("react.offscreen"),vd=Symbol.iterator;function si(e){return e===null||typeof e!="object"?null:(e=vd&&e[vd]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,Ga;function xi(e){if(Ga===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ga=t&&t[1]||""}return`
`+Ga+e}var Ya=!1;function Xa(e,t){if(!e||Ya)return"";Ya=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Ya=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xi(e):""}function Z1(e){switch(e.tag){case 5:return xi(e.type);case 16:return xi("Lazy");case 13:return xi("Suspense");case 19:return xi("SuspenseList");case 0:case 2:case 15:return e=Xa(e.type,!1),e;case 11:return e=Xa(e.type.render,!1),e;case 1:return e=Xa(e.type,!0),e;default:return""}}function nu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fr:return"Fragment";case cr:return"Portal";case Jl:return"Profiler";case Bc:return"StrictMode";case eu:return"Suspense";case tu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Um:return(e.displayName||"Context")+".Consumer";case Bm:return(e._context.displayName||"Context")+".Provider";case Uc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Wc:return t=e.displayName||null,t!==null?t:nu(e.type)||"Memo";case sn:t=e._payload,e=e._init;try{return nu(e(t))}catch{}}return null}function J1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nu(t);case 8:return t===Bc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ex(e){var t=Hm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Io(e){e._valueTracker||(e._valueTracker=ex(e))}function Km(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Hm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function _s(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ru(e,t){var n=t.checked;return se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function xd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Cn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gm(e,t){t=t.checked,t!=null&&Fc(e,"checked",t,!1)}function iu(e,t){Gm(e,t);var n=Cn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ou(e,t.type,n):t.hasOwnProperty("defaultValue")&&ou(e,t.type,Cn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ou(e,t,n){(t!=="number"||_s(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wi=Array.isArray;function Pr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Cn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function su(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(b(91));return se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Sd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(b(92));if(wi(n)){if(1<n.length)throw Error(b(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Cn(n)}}function Ym(e,t){var n=Cn(t.value),r=Cn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function kd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Xm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function au(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Xm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Do,Qm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Do=Do||document.createElement("div"),Do.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Do.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function zi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ei={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tx=["Webkit","ms","Moz","O"];Object.keys(Ei).forEach(function(e){tx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ei[t]=Ei[e]})});function qm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ei.hasOwnProperty(e)&&Ei[e]?(""+t).trim():t+"px"}function Zm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=qm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var nx=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lu(e,t){if(t){if(nx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(b(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(b(61))}if(t.style!=null&&typeof t.style!="object")throw Error(b(62))}}function uu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cu=null;function Hc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fu=null,_r=null,br=null;function Td(e){if(e=vo(e)){if(typeof fu!="function")throw Error(b(280));var t=e.stateNode;t&&(t=va(t),fu(e.stateNode,e.type,t))}}function Jm(e){_r?br?br.push(e):br=[e]:_r=e}function e0(){if(_r){var e=_r,t=br;if(br=_r=null,Td(e),t)for(e=0;e<t.length;e++)Td(t[e])}}function t0(e,t){return e(t)}function n0(){}var Qa=!1;function r0(e,t,n){if(Qa)return e(t,n);Qa=!0;try{return t0(e,t,n)}finally{Qa=!1,(_r!==null||br!==null)&&(n0(),e0())}}function Fi(e,t){var n=e.stateNode;if(n===null)return null;var r=va(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(b(231,t,typeof n));return n}var du=!1;if(Yt)try{var ai={};Object.defineProperty(ai,"passive",{get:function(){du=!0}}),window.addEventListener("test",ai,ai),window.removeEventListener("test",ai,ai)}catch{du=!1}function rx(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Pi=!1,bs=null,As=!1,pu=null,ix={onError:function(e){Pi=!0,bs=e}};function ox(e,t,n,r,i,o,s,a,l){Pi=!1,bs=null,rx.apply(ix,arguments)}function sx(e,t,n,r,i,o,s,a,l){if(ox.apply(this,arguments),Pi){if(Pi){var u=bs;Pi=!1,bs=null}else throw Error(b(198));As||(As=!0,pu=u)}}function ir(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function i0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Cd(e){if(ir(e)!==e)throw Error(b(188))}function ax(e){var t=e.alternate;if(!t){if(t=ir(e),t===null)throw Error(b(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Cd(i),e;if(o===r)return Cd(i),t;o=o.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?e:t}function o0(e){return e=ax(e),e!==null?s0(e):null}function s0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=s0(e);if(t!==null)return t;e=e.sibling}return null}var a0=rt.unstable_scheduleCallback,Ed=rt.unstable_cancelCallback,lx=rt.unstable_shouldYield,ux=rt.unstable_requestPaint,ue=rt.unstable_now,cx=rt.unstable_getCurrentPriorityLevel,Kc=rt.unstable_ImmediatePriority,l0=rt.unstable_UserBlockingPriority,Rs=rt.unstable_NormalPriority,fx=rt.unstable_LowPriority,u0=rt.unstable_IdlePriority,ha=null,Dt=null;function dx(e){if(Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(ha,e,void 0,(e.current.flags&128)===128)}catch{}}var kt=Math.clz32?Math.clz32:mx,px=Math.log,hx=Math.LN2;function mx(e){return e>>>=0,e===0?32:31-(px(e)/hx|0)|0}var $o=64,Oo=4194304;function Si(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ms(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Si(a):(o&=s,o!==0&&(r=Si(o)))}else s=n&~i,s!==0?r=Si(s):o!==0&&(r=Si(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-kt(t),i=1<<n,r|=e[n],t&=~i;return r}function gx(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yx(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-kt(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=gx(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function hu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function c0(){var e=$o;return $o<<=1,!($o&4194240)&&($o=64),e}function qa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function go(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-kt(t),e[t]=n}function vx(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-kt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Gc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-kt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var K=0;function f0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var d0,Yc,p0,h0,m0,mu=!1,No=[],hn=null,mn=null,gn=null,Bi=new Map,Ui=new Map,ln=[],xx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pd(e,t){switch(e){case"focusin":case"focusout":hn=null;break;case"dragenter":case"dragleave":mn=null;break;case"mouseover":case"mouseout":gn=null;break;case"pointerover":case"pointerout":Bi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ui.delete(t.pointerId)}}function li(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=vo(t),t!==null&&Yc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function wx(e,t,n,r,i){switch(t){case"focusin":return hn=li(hn,e,t,n,r,i),!0;case"dragenter":return mn=li(mn,e,t,n,r,i),!0;case"mouseover":return gn=li(gn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Bi.set(o,li(Bi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ui.set(o,li(Ui.get(o)||null,e,t,n,r,i)),!0}return!1}function g0(e){var t=Nn(e.target);if(t!==null){var n=ir(t);if(n!==null){if(t=n.tag,t===13){if(t=i0(n),t!==null){e.blockedOn=t,m0(e.priority,function(){p0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=gu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);cu=r,n.target.dispatchEvent(r),cu=null}else return t=vo(n),t!==null&&Yc(t),e.blockedOn=n,!1;t.shift()}return!0}function _d(e,t,n){rs(e)&&n.delete(t)}function Sx(){mu=!1,hn!==null&&rs(hn)&&(hn=null),mn!==null&&rs(mn)&&(mn=null),gn!==null&&rs(gn)&&(gn=null),Bi.forEach(_d),Ui.forEach(_d)}function ui(e,t){e.blockedOn===t&&(e.blockedOn=null,mu||(mu=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,Sx)))}function Wi(e){function t(i){return ui(i,e)}if(0<No.length){ui(No[0],e);for(var n=1;n<No.length;n++){var r=No[n];r.blockedOn===e&&(r.blockedOn=null)}}for(hn!==null&&ui(hn,e),mn!==null&&ui(mn,e),gn!==null&&ui(gn,e),Bi.forEach(t),Ui.forEach(t),n=0;n<ln.length;n++)r=ln[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ln.length&&(n=ln[0],n.blockedOn===null);)g0(n),n.blockedOn===null&&ln.shift()}var Ar=Jt.ReactCurrentBatchConfig,Ls=!0;function kx(e,t,n,r){var i=K,o=Ar.transition;Ar.transition=null;try{K=1,Xc(e,t,n,r)}finally{K=i,Ar.transition=o}}function Tx(e,t,n,r){var i=K,o=Ar.transition;Ar.transition=null;try{K=4,Xc(e,t,n,r)}finally{K=i,Ar.transition=o}}function Xc(e,t,n,r){if(Ls){var i=gu(e,t,n,r);if(i===null)al(e,t,r,js,n),Pd(e,r);else if(wx(i,e,t,n,r))r.stopPropagation();else if(Pd(e,r),t&4&&-1<xx.indexOf(e)){for(;i!==null;){var o=vo(i);if(o!==null&&d0(o),o=gu(e,t,n,r),o===null&&al(e,t,r,js,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else al(e,t,r,null,n)}}var js=null;function gu(e,t,n,r){if(js=null,e=Hc(r),e=Nn(e),e!==null)if(t=ir(e),t===null)e=null;else if(n=t.tag,n===13){if(e=i0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return js=e,null}function y0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cx()){case Kc:return 1;case l0:return 4;case Rs:case fx:return 16;case u0:return 536870912;default:return 16}default:return 16}}var cn=null,Qc=null,is=null;function v0(){if(is)return is;var e,t=Qc,n=t.length,r,i="value"in cn?cn.value:cn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return is=i.slice(e,1<r?1-r:void 0)}function os(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vo(){return!0}function bd(){return!1}function ot(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Vo:bd,this.isPropagationStopped=bd,this}return se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vo)},persist:function(){},isPersistent:Vo}),t}var qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qc=ot(qr),yo=se({},qr,{view:0,detail:0}),Cx=ot(yo),Za,Ja,ci,ma=se({},yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ci&&(ci&&e.type==="mousemove"?(Za=e.screenX-ci.screenX,Ja=e.screenY-ci.screenY):Ja=Za=0,ci=e),Za)},movementY:function(e){return"movementY"in e?e.movementY:Ja}}),Ad=ot(ma),Ex=se({},ma,{dataTransfer:0}),Px=ot(Ex),_x=se({},yo,{relatedTarget:0}),el=ot(_x),bx=se({},qr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ax=ot(bx),Rx=se({},qr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mx=ot(Rx),Lx=se({},qr,{data:0}),Rd=ot(Lx),jx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ix={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $x(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Dx[e])?!!t[e]:!1}function Zc(){return $x}var Ox=se({},yo,{key:function(e){if(e.key){var t=jx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=os(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ix[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zc,charCode:function(e){return e.type==="keypress"?os(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?os(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nx=ot(Ox),Vx=se({},ma,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Md=ot(Vx),zx=se({},yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zc}),Fx=ot(zx),Bx=se({},qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ux=ot(Bx),Wx=se({},ma,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hx=ot(Wx),Kx=[9,13,27,32],Jc=Yt&&"CompositionEvent"in window,_i=null;Yt&&"documentMode"in document&&(_i=document.documentMode);var Gx=Yt&&"TextEvent"in window&&!_i,x0=Yt&&(!Jc||_i&&8<_i&&11>=_i),Ld=String.fromCharCode(32),jd=!1;function w0(e,t){switch(e){case"keyup":return Kx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function S0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dr=!1;function Yx(e,t){switch(e){case"compositionend":return S0(t);case"keypress":return t.which!==32?null:(jd=!0,Ld);case"textInput":return e=t.data,e===Ld&&jd?null:e;default:return null}}function Xx(e,t){if(dr)return e==="compositionend"||!Jc&&w0(e,t)?(e=v0(),is=Qc=cn=null,dr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return x0&&t.locale!=="ko"?null:t.data;default:return null}}var Qx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Id(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qx[e.type]:t==="textarea"}function k0(e,t,n,r){Jm(r),t=Is(t,"onChange"),0<t.length&&(n=new qc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var bi=null,Hi=null;function qx(e){j0(e,0)}function ga(e){var t=mr(e);if(Km(t))return e}function Zx(e,t){if(e==="change")return t}var T0=!1;if(Yt){var tl;if(Yt){var nl="oninput"in document;if(!nl){var Dd=document.createElement("div");Dd.setAttribute("oninput","return;"),nl=typeof Dd.oninput=="function"}tl=nl}else tl=!1;T0=tl&&(!document.documentMode||9<document.documentMode)}function $d(){bi&&(bi.detachEvent("onpropertychange",C0),Hi=bi=null)}function C0(e){if(e.propertyName==="value"&&ga(Hi)){var t=[];k0(t,Hi,e,Hc(e)),r0(qx,t)}}function Jx(e,t,n){e==="focusin"?($d(),bi=t,Hi=n,bi.attachEvent("onpropertychange",C0)):e==="focusout"&&$d()}function ew(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ga(Hi)}function tw(e,t){if(e==="click")return ga(t)}function nw(e,t){if(e==="input"||e==="change")return ga(t)}function rw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pt=typeof Object.is=="function"?Object.is:rw;function Ki(e,t){if(Pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Zl.call(t,i)||!Pt(e[i],t[i]))return!1}return!0}function Od(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nd(e,t){var n=Od(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Od(n)}}function E0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?E0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function P0(){for(var e=window,t=_s();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_s(e.document)}return t}function ef(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function iw(e){var t=P0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&E0(n.ownerDocument.documentElement,n)){if(r!==null&&ef(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Nd(n,o);var s=Nd(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ow=Yt&&"documentMode"in document&&11>=document.documentMode,pr=null,yu=null,Ai=null,vu=!1;function Vd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vu||pr==null||pr!==_s(r)||(r=pr,"selectionStart"in r&&ef(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ai&&Ki(Ai,r)||(Ai=r,r=Is(yu,"onSelect"),0<r.length&&(t=new qc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=pr)))}function zo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hr={animationend:zo("Animation","AnimationEnd"),animationiteration:zo("Animation","AnimationIteration"),animationstart:zo("Animation","AnimationStart"),transitionend:zo("Transition","TransitionEnd")},rl={},_0={};Yt&&(_0=document.createElement("div").style,"AnimationEvent"in window||(delete hr.animationend.animation,delete hr.animationiteration.animation,delete hr.animationstart.animation),"TransitionEvent"in window||delete hr.transitionend.transition);function ya(e){if(rl[e])return rl[e];if(!hr[e])return e;var t=hr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in _0)return rl[e]=t[n];return e}var b0=ya("animationend"),A0=ya("animationiteration"),R0=ya("animationstart"),M0=ya("transitionend"),L0=new Map,zd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bn(e,t){L0.set(e,t),rr(t,[e])}for(var il=0;il<zd.length;il++){var ol=zd[il],sw=ol.toLowerCase(),aw=ol[0].toUpperCase()+ol.slice(1);bn(sw,"on"+aw)}bn(b0,"onAnimationEnd");bn(A0,"onAnimationIteration");bn(R0,"onAnimationStart");bn("dblclick","onDoubleClick");bn("focusin","onFocus");bn("focusout","onBlur");bn(M0,"onTransitionEnd");Ir("onMouseEnter",["mouseout","mouseover"]);Ir("onMouseLeave",["mouseout","mouseover"]);Ir("onPointerEnter",["pointerout","pointerover"]);Ir("onPointerLeave",["pointerout","pointerover"]);rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ki="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lw=new Set("cancel close invalid load scroll toggle".split(" ").concat(ki));function Fd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,sx(r,t,void 0,e),e.currentTarget=null}function j0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Fd(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Fd(i,a,u),o=l}}}if(As)throw e=pu,As=!1,pu=null,e}function q(e,t){var n=t[Tu];n===void 0&&(n=t[Tu]=new Set);var r=e+"__bubble";n.has(r)||(I0(t,e,2,!1),n.add(r))}function sl(e,t,n){var r=0;t&&(r|=4),I0(n,e,r,t)}var Fo="_reactListening"+Math.random().toString(36).slice(2);function Gi(e){if(!e[Fo]){e[Fo]=!0,Fm.forEach(function(n){n!=="selectionchange"&&(lw.has(n)||sl(n,!1,e),sl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fo]||(t[Fo]=!0,sl("selectionchange",!1,t))}}function I0(e,t,n,r){switch(y0(t)){case 1:var i=kx;break;case 4:i=Tx;break;default:i=Xc}n=i.bind(null,t,n,e),i=void 0,!du||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function al(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Nn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}r0(function(){var u=o,c=Hc(n),f=[];e:{var d=L0.get(e);if(d!==void 0){var g=qc,y=e;switch(e){case"keypress":if(os(n)===0)break e;case"keydown":case"keyup":g=Nx;break;case"focusin":y="focus",g=el;break;case"focusout":y="blur",g=el;break;case"beforeblur":case"afterblur":g=el;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ad;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Px;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Fx;break;case b0:case A0:case R0:g=Ax;break;case M0:g=Ux;break;case"scroll":g=Cx;break;case"wheel":g=Hx;break;case"copy":case"cut":case"paste":g=Mx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Md}var v=(t&4)!==0,x=!v&&e==="scroll",h=v?d!==null?d+"Capture":null:d;v=[];for(var p=u,m;p!==null;){m=p;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,h!==null&&(w=Fi(p,h),w!=null&&v.push(Yi(p,w,m)))),x)break;p=p.return}0<v.length&&(d=new g(d,y,null,n,c),f.push({event:d,listeners:v}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",d&&n!==cu&&(y=n.relatedTarget||n.fromElement)&&(Nn(y)||y[Xt]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Nn(y):null,y!==null&&(x=ir(y),y!==x||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(v=Ad,w="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(v=Md,w="onPointerLeave",h="onPointerEnter",p="pointer"),x=g==null?d:mr(g),m=y==null?d:mr(y),d=new v(w,p+"leave",g,n,c),d.target=x,d.relatedTarget=m,w=null,Nn(c)===u&&(v=new v(h,p+"enter",y,n,c),v.target=m,v.relatedTarget=x,w=v),x=w,g&&y)t:{for(v=g,h=y,p=0,m=v;m;m=ar(m))p++;for(m=0,w=h;w;w=ar(w))m++;for(;0<p-m;)v=ar(v),p--;for(;0<m-p;)h=ar(h),m--;for(;p--;){if(v===h||h!==null&&v===h.alternate)break t;v=ar(v),h=ar(h)}v=null}else v=null;g!==null&&Bd(f,d,g,v,!1),y!==null&&x!==null&&Bd(f,x,y,v,!0)}}e:{if(d=u?mr(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var T=Zx;else if(Id(d))if(T0)T=nw;else{T=ew;var E=Jx}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=tw);if(T&&(T=T(e,u))){k0(f,T,n,c);break e}E&&E(e,d,u),e==="focusout"&&(E=d._wrapperState)&&E.controlled&&d.type==="number"&&ou(d,"number",d.value)}switch(E=u?mr(u):window,e){case"focusin":(Id(E)||E.contentEditable==="true")&&(pr=E,yu=u,Ai=null);break;case"focusout":Ai=yu=pr=null;break;case"mousedown":vu=!0;break;case"contextmenu":case"mouseup":case"dragend":vu=!1,Vd(f,n,c);break;case"selectionchange":if(ow)break;case"keydown":case"keyup":Vd(f,n,c)}var k;if(Jc)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else dr?w0(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(x0&&n.locale!=="ko"&&(dr||P!=="onCompositionStart"?P==="onCompositionEnd"&&dr&&(k=v0()):(cn=c,Qc="value"in cn?cn.value:cn.textContent,dr=!0)),E=Is(u,P),0<E.length&&(P=new Rd(P,e,null,n,c),f.push({event:P,listeners:E}),k?P.data=k:(k=S0(n),k!==null&&(P.data=k)))),(k=Gx?Yx(e,n):Xx(e,n))&&(u=Is(u,"onBeforeInput"),0<u.length&&(c=new Rd("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=k))}j0(f,t)})}function Yi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Is(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Fi(e,n),o!=null&&r.unshift(Yi(e,o,i)),o=Fi(e,t),o!=null&&r.push(Yi(e,o,i))),e=e.return}return r}function ar(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bd(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Fi(n,o),l!=null&&s.unshift(Yi(n,l,a))):i||(l=Fi(n,o),l!=null&&s.push(Yi(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var uw=/\r\n?/g,cw=/\u0000|\uFFFD/g;function Ud(e){return(typeof e=="string"?e:""+e).replace(uw,`
`).replace(cw,"")}function Bo(e,t,n){if(t=Ud(t),Ud(e)!==t&&n)throw Error(b(425))}function Ds(){}var xu=null,wu=null;function Su(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ku=typeof setTimeout=="function"?setTimeout:void 0,fw=typeof clearTimeout=="function"?clearTimeout:void 0,Wd=typeof Promise=="function"?Promise:void 0,dw=typeof queueMicrotask=="function"?queueMicrotask:typeof Wd<"u"?function(e){return Wd.resolve(null).then(e).catch(pw)}:ku;function pw(e){setTimeout(function(){throw e})}function ll(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Wi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Wi(t)}function yn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Hd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Zr=Math.random().toString(36).slice(2),It="__reactFiber$"+Zr,Xi="__reactProps$"+Zr,Xt="__reactContainer$"+Zr,Tu="__reactEvents$"+Zr,hw="__reactListeners$"+Zr,mw="__reactHandles$"+Zr;function Nn(e){var t=e[It];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xt]||n[It]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hd(e);e!==null;){if(n=e[It])return n;e=Hd(e)}return t}e=n,n=e.parentNode}return null}function vo(e){return e=e[It]||e[Xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function va(e){return e[Xi]||null}var Cu=[],gr=-1;function An(e){return{current:e}}function J(e){0>gr||(e.current=Cu[gr],Cu[gr]=null,gr--)}function Q(e,t){gr++,Cu[gr]=e.current,e.current=t}var En={},De=An(En),Ke=An(!1),Qn=En;function Dr(e,t){var n=e.type.contextTypes;if(!n)return En;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ge(e){return e=e.childContextTypes,e!=null}function $s(){J(Ke),J(De)}function Kd(e,t,n){if(De.current!==En)throw Error(b(168));Q(De,t),Q(Ke,n)}function D0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(b(108,J1(e)||"Unknown",i));return se({},n,r)}function Os(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||En,Qn=De.current,Q(De,e),Q(Ke,Ke.current),!0}function Gd(e,t,n){var r=e.stateNode;if(!r)throw Error(b(169));n?(e=D0(e,t,Qn),r.__reactInternalMemoizedMergedChildContext=e,J(Ke),J(De),Q(De,e)):J(Ke),Q(Ke,n)}var Wt=null,xa=!1,ul=!1;function $0(e){Wt===null?Wt=[e]:Wt.push(e)}function gw(e){xa=!0,$0(e)}function Rn(){if(!ul&&Wt!==null){ul=!0;var e=0,t=K;try{var n=Wt;for(K=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Wt=null,xa=!1}catch(i){throw Wt!==null&&(Wt=Wt.slice(e+1)),a0(Kc,Rn),i}finally{K=t,ul=!1}}return null}var yr=[],vr=0,Ns=null,Vs=0,at=[],lt=0,qn=null,Ht=1,Kt="";function In(e,t){yr[vr++]=Vs,yr[vr++]=Ns,Ns=e,Vs=t}function O0(e,t,n){at[lt++]=Ht,at[lt++]=Kt,at[lt++]=qn,qn=e;var r=Ht;e=Kt;var i=32-kt(r)-1;r&=~(1<<i),n+=1;var o=32-kt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Ht=1<<32-kt(t)+i|n<<i|r,Kt=o+e}else Ht=1<<o|n<<i|r,Kt=e}function tf(e){e.return!==null&&(In(e,1),O0(e,1,0))}function nf(e){for(;e===Ns;)Ns=yr[--vr],yr[vr]=null,Vs=yr[--vr],yr[vr]=null;for(;e===qn;)qn=at[--lt],at[lt]=null,Kt=at[--lt],at[lt]=null,Ht=at[--lt],at[lt]=null}var tt=null,et=null,te=!1,St=null;function N0(e,t){var n=ut(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Yd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,tt=e,et=yn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,tt=e,et=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=qn!==null?{id:Ht,overflow:Kt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ut(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,tt=e,et=null,!0):!1;default:return!1}}function Eu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Pu(e){if(te){var t=et;if(t){var n=t;if(!Yd(e,t)){if(Eu(e))throw Error(b(418));t=yn(n.nextSibling);var r=tt;t&&Yd(e,t)?N0(r,n):(e.flags=e.flags&-4097|2,te=!1,tt=e)}}else{if(Eu(e))throw Error(b(418));e.flags=e.flags&-4097|2,te=!1,tt=e}}}function Xd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;tt=e}function Uo(e){if(e!==tt)return!1;if(!te)return Xd(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Su(e.type,e.memoizedProps)),t&&(t=et)){if(Eu(e))throw V0(),Error(b(418));for(;t;)N0(e,t),t=yn(t.nextSibling)}if(Xd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){et=yn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}et=null}}else et=tt?yn(e.stateNode.nextSibling):null;return!0}function V0(){for(var e=et;e;)e=yn(e.nextSibling)}function $r(){et=tt=null,te=!1}function rf(e){St===null?St=[e]:St.push(e)}var yw=Jt.ReactCurrentBatchConfig;function xt(e,t){if(e&&e.defaultProps){t=se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var zs=An(null),Fs=null,xr=null,of=null;function sf(){of=xr=Fs=null}function af(e){var t=zs.current;J(zs),e._currentValue=t}function _u(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Rr(e,t){Fs=e,of=xr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(He=!0),e.firstContext=null)}function pt(e){var t=e._currentValue;if(of!==e)if(e={context:e,memoizedValue:t,next:null},xr===null){if(Fs===null)throw Error(b(308));xr=e,Fs.dependencies={lanes:0,firstContext:e}}else xr=xr.next=e;return t}var Vn=null;function lf(e){Vn===null?Vn=[e]:Vn.push(e)}function z0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,lf(t)):(n.next=i.next,i.next=n),t.interleaved=n,Qt(e,r)}function Qt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var an=!1;function uf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function F0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Qt(e,n)}return i=r.interleaved,i===null?(t.next=t,lf(r)):(t.next=i.next,i.next=t),r.interleaved=t,Qt(e,n)}function ss(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gc(e,n)}}function Qd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Bs(e,t,n,r){var i=e.updateQueue;an=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,c=u=l=null,a=o;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,v=a;switch(d=t,g=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){f=y.call(g,f,d);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(g,f,d):y,d==null)break e;f=se({},f,d);break e;case 2:an=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,s|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Jn|=s,e.lanes=s,e.memoizedState=f}}function qd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var B0=new zm.Component().refs;function bu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var wa={isMounted:function(e){return(e=e._reactInternals)?ir(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Fe(),i=wn(e),o=Gt(r,i);o.payload=t,n!=null&&(o.callback=n),t=vn(e,o,i),t!==null&&(Tt(t,e,i,r),ss(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Fe(),i=wn(e),o=Gt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=vn(e,o,i),t!==null&&(Tt(t,e,i,r),ss(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Fe(),r=wn(e),i=Gt(n,r);i.tag=2,t!=null&&(i.callback=t),t=vn(e,i,r),t!==null&&(Tt(t,e,r,n),ss(t,e,r))}};function Zd(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Ki(n,r)||!Ki(i,o):!0}function U0(e,t,n){var r=!1,i=En,o=t.contextType;return typeof o=="object"&&o!==null?o=pt(o):(i=Ge(t)?Qn:De.current,r=t.contextTypes,o=(r=r!=null)?Dr(e,i):En),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=wa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Jd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&wa.enqueueReplaceState(t,t.state,null)}function Au(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=B0,uf(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=pt(o):(o=Ge(t)?Qn:De.current,i.context=Dr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(bu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&wa.enqueueReplaceState(i,i.state,null),Bs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function fi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===B0&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,e))}return e}function Wo(e,t){throw e=Object.prototype.toString.call(t),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ep(e){var t=e._init;return t(e._payload)}function W0(e){function t(h,p){if(e){var m=h.deletions;m===null?(h.deletions=[p],h.flags|=16):m.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function i(h,p){return h=Sn(h,p),h.index=0,h.sibling=null,h}function o(h,p,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<p?(h.flags|=2,p):m):(h.flags|=2,p)):(h.flags|=1048576,p)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,p,m,w){return p===null||p.tag!==6?(p=gl(m,h.mode,w),p.return=h,p):(p=i(p,m),p.return=h,p)}function l(h,p,m,w){var T=m.type;return T===fr?c(h,p,m.props.children,w,m.key):p!==null&&(p.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===sn&&ep(T)===p.type)?(w=i(p,m.props),w.ref=fi(h,p,m),w.return=h,w):(w=ds(m.type,m.key,m.props,null,h.mode,w),w.ref=fi(h,p,m),w.return=h,w)}function u(h,p,m,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=yl(m,h.mode,w),p.return=h,p):(p=i(p,m.children||[]),p.return=h,p)}function c(h,p,m,w,T){return p===null||p.tag!==7?(p=Hn(m,h.mode,w,T),p.return=h,p):(p=i(p,m),p.return=h,p)}function f(h,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=gl(""+p,h.mode,m),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case jo:return m=ds(p.type,p.key,p.props,null,h.mode,m),m.ref=fi(h,null,p),m.return=h,m;case cr:return p=yl(p,h.mode,m),p.return=h,p;case sn:var w=p._init;return f(h,w(p._payload),m)}if(wi(p)||si(p))return p=Hn(p,h.mode,m,null),p.return=h,p;Wo(h,p)}return null}function d(h,p,m,w){var T=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:a(h,p,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case jo:return m.key===T?l(h,p,m,w):null;case cr:return m.key===T?u(h,p,m,w):null;case sn:return T=m._init,d(h,p,T(m._payload),w)}if(wi(m)||si(m))return T!==null?null:c(h,p,m,w,null);Wo(h,m)}return null}function g(h,p,m,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(m)||null,a(p,h,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case jo:return h=h.get(w.key===null?m:w.key)||null,l(p,h,w,T);case cr:return h=h.get(w.key===null?m:w.key)||null,u(p,h,w,T);case sn:var E=w._init;return g(h,p,m,E(w._payload),T)}if(wi(w)||si(w))return h=h.get(m)||null,c(p,h,w,T,null);Wo(p,w)}return null}function y(h,p,m,w){for(var T=null,E=null,k=p,P=p=0,I=null;k!==null&&P<m.length;P++){k.index>P?(I=k,k=null):I=k.sibling;var _=d(h,k,m[P],w);if(_===null){k===null&&(k=I);break}e&&k&&_.alternate===null&&t(h,k),p=o(_,p,P),E===null?T=_:E.sibling=_,E=_,k=I}if(P===m.length)return n(h,k),te&&In(h,P),T;if(k===null){for(;P<m.length;P++)k=f(h,m[P],w),k!==null&&(p=o(k,p,P),E===null?T=k:E.sibling=k,E=k);return te&&In(h,P),T}for(k=r(h,k);P<m.length;P++)I=g(k,h,P,m[P],w),I!==null&&(e&&I.alternate!==null&&k.delete(I.key===null?P:I.key),p=o(I,p,P),E===null?T=I:E.sibling=I,E=I);return e&&k.forEach(function($){return t(h,$)}),te&&In(h,P),T}function v(h,p,m,w){var T=si(m);if(typeof T!="function")throw Error(b(150));if(m=T.call(m),m==null)throw Error(b(151));for(var E=T=null,k=p,P=p=0,I=null,_=m.next();k!==null&&!_.done;P++,_=m.next()){k.index>P?(I=k,k=null):I=k.sibling;var $=d(h,k,_.value,w);if($===null){k===null&&(k=I);break}e&&k&&$.alternate===null&&t(h,k),p=o($,p,P),E===null?T=$:E.sibling=$,E=$,k=I}if(_.done)return n(h,k),te&&In(h,P),T;if(k===null){for(;!_.done;P++,_=m.next())_=f(h,_.value,w),_!==null&&(p=o(_,p,P),E===null?T=_:E.sibling=_,E=_);return te&&In(h,P),T}for(k=r(h,k);!_.done;P++,_=m.next())_=g(k,h,P,_.value,w),_!==null&&(e&&_.alternate!==null&&k.delete(_.key===null?P:_.key),p=o(_,p,P),E===null?T=_:E.sibling=_,E=_);return e&&k.forEach(function(G){return t(h,G)}),te&&In(h,P),T}function x(h,p,m,w){if(typeof m=="object"&&m!==null&&m.type===fr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case jo:e:{for(var T=m.key,E=p;E!==null;){if(E.key===T){if(T=m.type,T===fr){if(E.tag===7){n(h,E.sibling),p=i(E,m.props.children),p.return=h,h=p;break e}}else if(E.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===sn&&ep(T)===E.type){n(h,E.sibling),p=i(E,m.props),p.ref=fi(h,E,m),p.return=h,h=p;break e}n(h,E);break}else t(h,E);E=E.sibling}m.type===fr?(p=Hn(m.props.children,h.mode,w,m.key),p.return=h,h=p):(w=ds(m.type,m.key,m.props,null,h.mode,w),w.ref=fi(h,p,m),w.return=h,h=w)}return s(h);case cr:e:{for(E=m.key;p!==null;){if(p.key===E)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(h,p.sibling),p=i(p,m.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=yl(m,h.mode,w),p.return=h,h=p}return s(h);case sn:return E=m._init,x(h,p,E(m._payload),w)}if(wi(m))return y(h,p,m,w);if(si(m))return v(h,p,m,w);Wo(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(h,p.sibling),p=i(p,m),p.return=h,h=p):(n(h,p),p=gl(m,h.mode,w),p.return=h,h=p),s(h)):n(h,p)}return x}var Or=W0(!0),H0=W0(!1),xo={},$t=An(xo),Qi=An(xo),qi=An(xo);function zn(e){if(e===xo)throw Error(b(174));return e}function cf(e,t){switch(Q(qi,t),Q(Qi,e),Q($t,xo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:au(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=au(t,e)}J($t),Q($t,t)}function Nr(){J($t),J(Qi),J(qi)}function K0(e){zn(qi.current);var t=zn($t.current),n=au(t,e.type);t!==n&&(Q(Qi,e),Q($t,n))}function ff(e){Qi.current===e&&(J($t),J(Qi))}var ie=An(0);function Us(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cl=[];function df(){for(var e=0;e<cl.length;e++)cl[e]._workInProgressVersionPrimary=null;cl.length=0}var as=Jt.ReactCurrentDispatcher,fl=Jt.ReactCurrentBatchConfig,Zn=0,oe=null,ge=null,ve=null,Ws=!1,Ri=!1,Zi=0,vw=0;function Re(){throw Error(b(321))}function pf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Pt(e[n],t[n]))return!1;return!0}function hf(e,t,n,r,i,o){if(Zn=o,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,as.current=e===null||e.memoizedState===null?kw:Tw,e=n(r,i),Ri){o=0;do{if(Ri=!1,Zi=0,25<=o)throw Error(b(301));o+=1,ve=ge=null,t.updateQueue=null,as.current=Cw,e=n(r,i)}while(Ri)}if(as.current=Hs,t=ge!==null&&ge.next!==null,Zn=0,ve=ge=oe=null,Ws=!1,t)throw Error(b(300));return e}function mf(){var e=Zi!==0;return Zi=0,e}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?oe.memoizedState=ve=e:ve=ve.next=e,ve}function ht(){if(ge===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=ve===null?oe.memoizedState:ve.next;if(t!==null)ve=t,ge=e;else{if(e===null)throw Error(b(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},ve===null?oe.memoizedState=ve=e:ve=ve.next=e}return ve}function Ji(e,t){return typeof t=="function"?t(e):t}function dl(e){var t=ht(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=ge,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Zn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,oe.lanes|=c,Jn|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Pt(r,t.memoizedState)||(He=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,oe.lanes|=o,Jn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function pl(e){var t=ht(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Pt(o,t.memoizedState)||(He=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function G0(){}function Y0(e,t){var n=oe,r=ht(),i=t(),o=!Pt(r.memoizedState,i);if(o&&(r.memoizedState=i,He=!0),r=r.queue,gf(q0.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,eo(9,Q0.bind(null,n,r,i,t),void 0,null),we===null)throw Error(b(349));Zn&30||X0(n,t,i)}return i}function X0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Q0(e,t,n,r){t.value=n,t.getSnapshot=r,Z0(t)&&J0(e)}function q0(e,t,n){return n(function(){Z0(t)&&J0(e)})}function Z0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Pt(e,n)}catch{return!0}}function J0(e){var t=Qt(e,1);t!==null&&Tt(t,e,1,-1)}function tp(e){var t=bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:e},t.queue=e,e=e.dispatch=Sw.bind(null,oe,e),[t.memoizedState,e]}function eo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function eg(){return ht().memoizedState}function ls(e,t,n,r){var i=bt();oe.flags|=e,i.memoizedState=eo(1|t,n,void 0,r===void 0?null:r)}function Sa(e,t,n,r){var i=ht();r=r===void 0?null:r;var o=void 0;if(ge!==null){var s=ge.memoizedState;if(o=s.destroy,r!==null&&pf(r,s.deps)){i.memoizedState=eo(t,n,o,r);return}}oe.flags|=e,i.memoizedState=eo(1|t,n,o,r)}function np(e,t){return ls(8390656,8,e,t)}function gf(e,t){return Sa(2048,8,e,t)}function tg(e,t){return Sa(4,2,e,t)}function ng(e,t){return Sa(4,4,e,t)}function rg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ig(e,t,n){return n=n!=null?n.concat([e]):null,Sa(4,4,rg.bind(null,t,e),n)}function yf(){}function og(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function sg(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ag(e,t,n){return Zn&21?(Pt(n,t)||(n=c0(),oe.lanes|=n,Jn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,He=!0),e.memoizedState=n)}function xw(e,t){var n=K;K=n!==0&&4>n?n:4,e(!0);var r=fl.transition;fl.transition={};try{e(!1),t()}finally{K=n,fl.transition=r}}function lg(){return ht().memoizedState}function ww(e,t,n){var r=wn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ug(e))cg(t,n);else if(n=z0(e,t,n,r),n!==null){var i=Fe();Tt(n,e,r,i),fg(n,t,r)}}function Sw(e,t,n){var r=wn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ug(e))cg(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Pt(a,s)){var l=t.interleaved;l===null?(i.next=i,lf(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=z0(e,t,i,r),n!==null&&(i=Fe(),Tt(n,e,r,i),fg(n,t,r))}}function ug(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function cg(e,t){Ri=Ws=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function fg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gc(e,n)}}var Hs={readContext:pt,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},kw={readContext:pt,useCallback:function(e,t){return bt().memoizedState=[e,t===void 0?null:t],e},useContext:pt,useEffect:np,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ls(4194308,4,rg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ls(4194308,4,e,t)},useInsertionEffect:function(e,t){return ls(4,2,e,t)},useMemo:function(e,t){var n=bt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=bt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ww.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var t=bt();return e={current:e},t.memoizedState=e},useState:tp,useDebugValue:yf,useDeferredValue:function(e){return bt().memoizedState=e},useTransition:function(){var e=tp(!1),t=e[0];return e=xw.bind(null,e[1]),bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oe,i=bt();if(te){if(n===void 0)throw Error(b(407));n=n()}else{if(n=t(),we===null)throw Error(b(349));Zn&30||X0(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,np(q0.bind(null,r,o,e),[e]),r.flags|=2048,eo(9,Q0.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=bt(),t=we.identifierPrefix;if(te){var n=Kt,r=Ht;n=(r&~(1<<32-kt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Zi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=vw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Tw={readContext:pt,useCallback:og,useContext:pt,useEffect:gf,useImperativeHandle:ig,useInsertionEffect:tg,useLayoutEffect:ng,useMemo:sg,useReducer:dl,useRef:eg,useState:function(){return dl(Ji)},useDebugValue:yf,useDeferredValue:function(e){var t=ht();return ag(t,ge.memoizedState,e)},useTransition:function(){var e=dl(Ji)[0],t=ht().memoizedState;return[e,t]},useMutableSource:G0,useSyncExternalStore:Y0,useId:lg,unstable_isNewReconciler:!1},Cw={readContext:pt,useCallback:og,useContext:pt,useEffect:gf,useImperativeHandle:ig,useInsertionEffect:tg,useLayoutEffect:ng,useMemo:sg,useReducer:pl,useRef:eg,useState:function(){return pl(Ji)},useDebugValue:yf,useDeferredValue:function(e){var t=ht();return ge===null?t.memoizedState=e:ag(t,ge.memoizedState,e)},useTransition:function(){var e=pl(Ji)[0],t=ht().memoizedState;return[e,t]},useMutableSource:G0,useSyncExternalStore:Y0,useId:lg,unstable_isNewReconciler:!1};function Vr(e,t){try{var n="",r=t;do n+=Z1(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function hl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ru(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ew=typeof WeakMap=="function"?WeakMap:Map;function dg(e,t,n){n=Gt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Gs||(Gs=!0,zu=r),Ru(e,t)},n}function pg(e,t,n){n=Gt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ru(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ru(e,t),typeof r!="function"&&(xn===null?xn=new Set([this]):xn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function rp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ew;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Vw.bind(null,e,t,n),t.then(e,e))}function ip(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function op(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Gt(-1,1),t.tag=2,vn(n,t,1))),n.lanes|=1),e)}var Pw=Jt.ReactCurrentOwner,He=!1;function Oe(e,t,n,r){t.child=e===null?H0(t,null,n,r):Or(t,e.child,n,r)}function sp(e,t,n,r,i){n=n.render;var o=t.ref;return Rr(t,i),r=hf(e,t,n,r,o,i),n=mf(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qt(e,t,i)):(te&&n&&tf(t),t.flags|=1,Oe(e,t,r,i),t.child)}function ap(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ef(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,hg(e,t,o,r,i)):(e=ds(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ki,n(s,r)&&e.ref===t.ref)return qt(e,t,i)}return t.flags|=1,e=Sn(o,r),e.ref=t.ref,e.return=t,t.child=e}function hg(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ki(o,r)&&e.ref===t.ref)if(He=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(He=!0);else return t.lanes=e.lanes,qt(e,t,i)}return Mu(e,t,n,r,i)}function mg(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(Sr,Je),Je|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Q(Sr,Je),Je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Q(Sr,Je),Je|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Q(Sr,Je),Je|=r;return Oe(e,t,i,n),t.child}function gg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Mu(e,t,n,r,i){var o=Ge(n)?Qn:De.current;return o=Dr(t,o),Rr(t,i),n=hf(e,t,n,r,o,i),r=mf(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qt(e,t,i)):(te&&r&&tf(t),t.flags|=1,Oe(e,t,n,i),t.child)}function lp(e,t,n,r,i){if(Ge(n)){var o=!0;Os(t)}else o=!1;if(Rr(t,i),t.stateNode===null)us(e,t),U0(t,n,r),Au(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=pt(u):(u=Ge(n)?Qn:De.current,u=Dr(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Jd(t,s,r,u),an=!1;var d=t.memoizedState;s.state=d,Bs(t,r,s,i),l=t.memoizedState,a!==r||d!==l||Ke.current||an?(typeof c=="function"&&(bu(t,n,c,r),l=t.memoizedState),(a=an||Zd(t,n,a,r,d,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,F0(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:xt(t.type,a),s.props=u,f=t.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=pt(l):(l=Ge(n)?Qn:De.current,l=Dr(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Jd(t,s,r,l),an=!1,d=t.memoizedState,s.state=d,Bs(t,r,s,i);var y=t.memoizedState;a!==f||d!==y||Ke.current||an?(typeof g=="function"&&(bu(t,n,g,r),y=t.memoizedState),(u=an||Zd(t,n,u,r,d,y,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Lu(e,t,n,r,o,i)}function Lu(e,t,n,r,i,o){gg(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Gd(t,n,!1),qt(e,t,o);r=t.stateNode,Pw.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Or(t,e.child,null,o),t.child=Or(t,null,a,o)):Oe(e,t,a,o),t.memoizedState=r.state,i&&Gd(t,n,!0),t.child}function yg(e){var t=e.stateNode;t.pendingContext?Kd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Kd(e,t.context,!1),cf(e,t.containerInfo)}function up(e,t,n,r,i){return $r(),rf(i),t.flags|=256,Oe(e,t,n,r),t.child}var ju={dehydrated:null,treeContext:null,retryLane:0};function Iu(e){return{baseLanes:e,cachePool:null,transitions:null}}function vg(e,t,n){var r=t.pendingProps,i=ie.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Q(ie,i&1),e===null)return Pu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ca(s,r,0,null),e=Hn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Iu(n),t.memoizedState=ju,e):vf(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return _w(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Sn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Sn(a,o):(o=Hn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Iu(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=ju,r}return o=e.child,e=o.sibling,r=Sn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function vf(e,t){return t=Ca({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ho(e,t,n,r){return r!==null&&rf(r),Or(t,e.child,null,n),e=vf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _w(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=hl(Error(b(422))),Ho(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ca({mode:"visible",children:r.children},i,0,null),o=Hn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Or(t,e.child,null,s),t.child.memoizedState=Iu(s),t.memoizedState=ju,o);if(!(t.mode&1))return Ho(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(b(419)),r=hl(o,r,void 0),Ho(e,t,s,r)}if(a=(s&e.childLanes)!==0,He||a){if(r=we,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Qt(e,i),Tt(r,e,i,-1))}return Cf(),r=hl(Error(b(421))),Ho(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=zw.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,et=yn(i.nextSibling),tt=t,te=!0,St=null,e!==null&&(at[lt++]=Ht,at[lt++]=Kt,at[lt++]=qn,Ht=e.id,Kt=e.overflow,qn=t),t=vf(t,r.children),t.flags|=4096,t)}function cp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),_u(e.return,t,n)}function ml(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function xg(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Oe(e,t,r.children,n),r=ie.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cp(e,n,t);else if(e.tag===19)cp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Q(ie,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Us(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ml(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Us(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ml(t,!0,n,null,o);break;case"together":ml(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function us(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Jn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(b(153));if(t.child!==null){for(e=t.child,n=Sn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Sn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function bw(e,t,n){switch(t.tag){case 3:yg(t),$r();break;case 5:K0(t);break;case 1:Ge(t.type)&&Os(t);break;case 4:cf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Q(zs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Q(ie,ie.current&1),t.flags|=128,null):n&t.child.childLanes?vg(e,t,n):(Q(ie,ie.current&1),e=qt(e,t,n),e!==null?e.sibling:null);Q(ie,ie.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return xg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(ie,ie.current),r)break;return null;case 22:case 23:return t.lanes=0,mg(e,t,n)}return qt(e,t,n)}var wg,Du,Sg,kg;wg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Du=function(){};Sg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,zn($t.current);var o=null;switch(n){case"input":i=ru(e,i),r=ru(e,r),o=[];break;case"select":i=se({},i,{value:void 0}),r=se({},r,{value:void 0}),o=[];break;case"textarea":i=su(e,i),r=su(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ds)}lu(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Vi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Vi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&q("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};kg=function(e,t,n,r){n!==r&&(t.flags|=4)};function di(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Aw(e,t,n){var r=t.pendingProps;switch(nf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Ge(t.type)&&$s(),Me(t),null;case 3:return r=t.stateNode,Nr(),J(Ke),J(De),df(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Uo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,St!==null&&(Uu(St),St=null))),Du(e,t),Me(t),null;case 5:ff(t);var i=zn(qi.current);if(n=t.type,e!==null&&t.stateNode!=null)Sg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(b(166));return Me(t),null}if(e=zn($t.current),Uo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[It]=t,r[Xi]=o,e=(t.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(i=0;i<ki.length;i++)q(ki[i],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":xd(r,o),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},q("invalid",r);break;case"textarea":Sd(r,o),q("invalid",r)}lu(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Bo(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Bo(r.textContent,a,e),i=["children",""+a]):Vi.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&q("scroll",r)}switch(n){case"input":Io(r),wd(r,o,!0);break;case"textarea":Io(r),kd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ds)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[It]=t,e[Xi]=r,wg(e,t,!1,!1),t.stateNode=e;e:{switch(s=uu(n,r),n){case"dialog":q("cancel",e),q("close",e),i=r;break;case"iframe":case"object":case"embed":q("load",e),i=r;break;case"video":case"audio":for(i=0;i<ki.length;i++)q(ki[i],e);i=r;break;case"source":q("error",e),i=r;break;case"img":case"image":case"link":q("error",e),q("load",e),i=r;break;case"details":q("toggle",e),i=r;break;case"input":xd(e,r),i=ru(e,r),q("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=se({},r,{value:void 0}),q("invalid",e);break;case"textarea":Sd(e,r),i=su(e,r),q("invalid",e);break;default:i=r}lu(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Zm(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Qm(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&zi(e,l):typeof l=="number"&&zi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Vi.hasOwnProperty(o)?l!=null&&o==="onScroll"&&q("scroll",e):l!=null&&Fc(e,o,l,s))}switch(n){case"input":Io(e),wd(e,r,!1);break;case"textarea":Io(e),kd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Cn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Pr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Pr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ds)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Me(t),null;case 6:if(e&&t.stateNode!=null)kg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(b(166));if(n=zn(qi.current),zn($t.current),Uo(t)){if(r=t.stateNode,n=t.memoizedProps,r[It]=t,(o=r.nodeValue!==n)&&(e=tt,e!==null))switch(e.tag){case 3:Bo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Bo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[It]=t,t.stateNode=r}return Me(t),null;case 13:if(J(ie),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&et!==null&&t.mode&1&&!(t.flags&128))V0(),$r(),t.flags|=98560,o=!1;else if(o=Uo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(b(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(b(317));o[It]=t}else $r(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Me(t),o=!1}else St!==null&&(Uu(St),St=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ie.current&1?ye===0&&(ye=3):Cf())),t.updateQueue!==null&&(t.flags|=4),Me(t),null);case 4:return Nr(),Du(e,t),e===null&&Gi(t.stateNode.containerInfo),Me(t),null;case 10:return af(t.type._context),Me(t),null;case 17:return Ge(t.type)&&$s(),Me(t),null;case 19:if(J(ie),o=t.memoizedState,o===null)return Me(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)di(o,!1);else{if(ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Us(e),s!==null){for(t.flags|=128,di(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Q(ie,ie.current&1|2),t.child}e=e.sibling}o.tail!==null&&ue()>zr&&(t.flags|=128,r=!0,di(o,!1),t.lanes=4194304)}else{if(!r)if(e=Us(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),di(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!te)return Me(t),null}else 2*ue()-o.renderingStartTime>zr&&n!==1073741824&&(t.flags|=128,r=!0,di(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ue(),t.sibling=null,n=ie.current,Q(ie,r?n&1|2:n&1),t):(Me(t),null);case 22:case 23:return Tf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Je&1073741824&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),null;case 24:return null;case 25:return null}throw Error(b(156,t.tag))}function Rw(e,t){switch(nf(t),t.tag){case 1:return Ge(t.type)&&$s(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Nr(),J(Ke),J(De),df(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ff(t),null;case 13:if(J(ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(b(340));$r()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return J(ie),null;case 4:return Nr(),null;case 10:return af(t.type._context),null;case 22:case 23:return Tf(),null;case 24:return null;default:return null}}var Ko=!1,je=!1,Mw=typeof WeakSet=="function"?WeakSet:Set,M=null;function wr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(e,t,r)}else n.current=null}function $u(e,t,n){try{n()}catch(r){ae(e,t,r)}}var fp=!1;function Lw(e,t){if(xu=Ls,e=P0(),ef(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=e,d=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(g=f.firstChild)!==null;)d=f,f=g;for(;;){if(f===e)break t;if(d===n&&++u===i&&(a=s),d===o&&++c===r&&(l=s),(g=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(wu={focusedElem:e,selectionRange:n},Ls=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,x=y.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?v:xt(t.type,v),x);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(w){ae(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return y=fp,fp=!1,y}function Mi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&$u(t,n,o)}i=i.next}while(i!==r)}}function ka(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ou(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Tg(e){var t=e.alternate;t!==null&&(e.alternate=null,Tg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[It],delete t[Xi],delete t[Tu],delete t[hw],delete t[mw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cg(e){return e.tag===5||e.tag===3||e.tag===4}function dp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ds));else if(r!==4&&(e=e.child,e!==null))for(Nu(e,t,n),e=e.sibling;e!==null;)Nu(e,t,n),e=e.sibling}function Vu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Vu(e,t,n),e=e.sibling;e!==null;)Vu(e,t,n),e=e.sibling}var Te=null,wt=!1;function nn(e,t,n){for(n=n.child;n!==null;)Eg(e,t,n),n=n.sibling}function Eg(e,t,n){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(ha,n)}catch{}switch(n.tag){case 5:je||wr(n,t);case 6:var r=Te,i=wt;Te=null,nn(e,t,n),Te=r,wt=i,Te!==null&&(wt?(e=Te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Te.removeChild(n.stateNode));break;case 18:Te!==null&&(wt?(e=Te,n=n.stateNode,e.nodeType===8?ll(e.parentNode,n):e.nodeType===1&&ll(e,n),Wi(e)):ll(Te,n.stateNode));break;case 4:r=Te,i=wt,Te=n.stateNode.containerInfo,wt=!0,nn(e,t,n),Te=r,wt=i;break;case 0:case 11:case 14:case 15:if(!je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&$u(n,t,s),i=i.next}while(i!==r)}nn(e,t,n);break;case 1:if(!je&&(wr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ae(n,t,a)}nn(e,t,n);break;case 21:nn(e,t,n);break;case 22:n.mode&1?(je=(r=je)||n.memoizedState!==null,nn(e,t,n),je=r):nn(e,t,n);break;default:nn(e,t,n)}}function pp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Mw),t.forEach(function(r){var i=Fw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function gt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Te=a.stateNode,wt=!1;break e;case 3:Te=a.stateNode.containerInfo,wt=!0;break e;case 4:Te=a.stateNode.containerInfo,wt=!0;break e}a=a.return}if(Te===null)throw Error(b(160));Eg(o,s,i),Te=null,wt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ae(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Pg(t,e),t=t.sibling}function Pg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gt(t,e),_t(e),r&4){try{Mi(3,e,e.return),ka(3,e)}catch(v){ae(e,e.return,v)}try{Mi(5,e,e.return)}catch(v){ae(e,e.return,v)}}break;case 1:gt(t,e),_t(e),r&512&&n!==null&&wr(n,n.return);break;case 5:if(gt(t,e),_t(e),r&512&&n!==null&&wr(n,n.return),e.flags&32){var i=e.stateNode;try{zi(i,"")}catch(v){ae(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Gm(i,o),uu(a,s);var u=uu(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?Zm(i,f):c==="dangerouslySetInnerHTML"?Qm(i,f):c==="children"?zi(i,f):Fc(i,c,f,u)}switch(a){case"input":iu(i,o);break;case"textarea":Ym(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Pr(i,!!o.multiple,g,!1):d!==!!o.multiple&&(o.defaultValue!=null?Pr(i,!!o.multiple,o.defaultValue,!0):Pr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Xi]=o}catch(v){ae(e,e.return,v)}}break;case 6:if(gt(t,e),_t(e),r&4){if(e.stateNode===null)throw Error(b(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){ae(e,e.return,v)}}break;case 3:if(gt(t,e),_t(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wi(t.containerInfo)}catch(v){ae(e,e.return,v)}break;case 4:gt(t,e),_t(e);break;case 13:gt(t,e),_t(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Sf=ue())),r&4&&pp(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(je=(u=je)||c,gt(t,e),je=u):gt(t,e),_t(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(M=e,c=e.child;c!==null;){for(f=M=c;M!==null;){switch(d=M,g=d.child,d.tag){case 0:case 11:case 14:case 15:Mi(4,d,d.return);break;case 1:wr(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){ae(r,n,v)}}break;case 5:wr(d,d.return);break;case 22:if(d.memoizedState!==null){mp(f);continue}}g!==null?(g.return=d,M=g):mp(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=qm("display",s))}catch(v){ae(e,e.return,v)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(v){ae(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:gt(t,e),_t(e),r&4&&pp(e);break;case 21:break;default:gt(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Cg(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(zi(i,""),r.flags&=-33);var o=dp(e);Vu(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=dp(e);Nu(e,a,s);break;default:throw Error(b(161))}}catch(l){ae(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function jw(e,t,n){M=e,_g(e)}function _g(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var i=M,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ko;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||je;a=Ko;var u=je;if(Ko=s,(je=l)&&!u)for(M=i;M!==null;)s=M,l=s.child,s.tag===22&&s.memoizedState!==null?gp(i):l!==null?(l.return=s,M=l):gp(i);for(;o!==null;)M=o,_g(o),o=o.sibling;M=i,Ko=a,je=u}hp(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,M=o):hp(e)}}function hp(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:je||ka(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!je)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:xt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&qd(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}qd(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Wi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}je||t.flags&512&&Ou(t)}catch(d){ae(t,t.return,d)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function mp(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function gp(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ka(4,t)}catch(l){ae(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ae(t,i,l)}}var o=t.return;try{Ou(t)}catch(l){ae(t,o,l)}break;case 5:var s=t.return;try{Ou(t)}catch(l){ae(t,s,l)}}}catch(l){ae(t,t.return,l)}if(t===e){M=null;break}var a=t.sibling;if(a!==null){a.return=t.return,M=a;break}M=t.return}}var Iw=Math.ceil,Ks=Jt.ReactCurrentDispatcher,xf=Jt.ReactCurrentOwner,ft=Jt.ReactCurrentBatchConfig,z=0,we=null,pe=null,_e=0,Je=0,Sr=An(0),ye=0,to=null,Jn=0,Ta=0,wf=0,Li=null,We=null,Sf=0,zr=1/0,Bt=null,Gs=!1,zu=null,xn=null,Go=!1,fn=null,Ys=0,ji=0,Fu=null,cs=-1,fs=0;function Fe(){return z&6?ue():cs!==-1?cs:cs=ue()}function wn(e){return e.mode&1?z&2&&_e!==0?_e&-_e:yw.transition!==null?(fs===0&&(fs=c0()),fs):(e=K,e!==0||(e=window.event,e=e===void 0?16:y0(e.type)),e):1}function Tt(e,t,n,r){if(50<ji)throw ji=0,Fu=null,Error(b(185));go(e,n,r),(!(z&2)||e!==we)&&(e===we&&(!(z&2)&&(Ta|=n),ye===4&&un(e,_e)),Ye(e,r),n===1&&z===0&&!(t.mode&1)&&(zr=ue()+500,xa&&Rn()))}function Ye(e,t){var n=e.callbackNode;yx(e,t);var r=Ms(e,e===we?_e:0);if(r===0)n!==null&&Ed(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ed(n),t===1)e.tag===0?gw(yp.bind(null,e)):$0(yp.bind(null,e)),dw(function(){!(z&6)&&Rn()}),n=null;else{switch(f0(r)){case 1:n=Kc;break;case 4:n=l0;break;case 16:n=Rs;break;case 536870912:n=u0;break;default:n=Rs}n=Dg(n,bg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function bg(e,t){if(cs=-1,fs=0,z&6)throw Error(b(327));var n=e.callbackNode;if(Mr()&&e.callbackNode!==n)return null;var r=Ms(e,e===we?_e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Xs(e,r);else{t=r;var i=z;z|=2;var o=Rg();(we!==e||_e!==t)&&(Bt=null,zr=ue()+500,Wn(e,t));do try{Ow();break}catch(a){Ag(e,a)}while(1);sf(),Ks.current=o,z=i,pe!==null?t=0:(we=null,_e=0,t=ye)}if(t!==0){if(t===2&&(i=hu(e),i!==0&&(r=i,t=Bu(e,i))),t===1)throw n=to,Wn(e,0),un(e,r),Ye(e,ue()),n;if(t===6)un(e,r);else{if(i=e.current.alternate,!(r&30)&&!Dw(i)&&(t=Xs(e,r),t===2&&(o=hu(e),o!==0&&(r=o,t=Bu(e,o))),t===1))throw n=to,Wn(e,0),un(e,r),Ye(e,ue()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(b(345));case 2:Dn(e,We,Bt);break;case 3:if(un(e,r),(r&130023424)===r&&(t=Sf+500-ue(),10<t)){if(Ms(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Fe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ku(Dn.bind(null,e,We,Bt),t);break}Dn(e,We,Bt);break;case 4:if(un(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-kt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Iw(r/1960))-r,10<r){e.timeoutHandle=ku(Dn.bind(null,e,We,Bt),r);break}Dn(e,We,Bt);break;case 5:Dn(e,We,Bt);break;default:throw Error(b(329))}}}return Ye(e,ue()),e.callbackNode===n?bg.bind(null,e):null}function Bu(e,t){var n=Li;return e.current.memoizedState.isDehydrated&&(Wn(e,t).flags|=256),e=Xs(e,t),e!==2&&(t=We,We=n,t!==null&&Uu(t)),e}function Uu(e){We===null?We=e:We.push.apply(We,e)}function Dw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Pt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function un(e,t){for(t&=~wf,t&=~Ta,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-kt(t),r=1<<n;e[n]=-1,t&=~r}}function yp(e){if(z&6)throw Error(b(327));Mr();var t=Ms(e,0);if(!(t&1))return Ye(e,ue()),null;var n=Xs(e,t);if(e.tag!==0&&n===2){var r=hu(e);r!==0&&(t=r,n=Bu(e,r))}if(n===1)throw n=to,Wn(e,0),un(e,t),Ye(e,ue()),n;if(n===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dn(e,We,Bt),Ye(e,ue()),null}function kf(e,t){var n=z;z|=1;try{return e(t)}finally{z=n,z===0&&(zr=ue()+500,xa&&Rn())}}function er(e){fn!==null&&fn.tag===0&&!(z&6)&&Mr();var t=z;z|=1;var n=ft.transition,r=K;try{if(ft.transition=null,K=1,e)return e()}finally{K=r,ft.transition=n,z=t,!(z&6)&&Rn()}}function Tf(){Je=Sr.current,J(Sr)}function Wn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,fw(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(nf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$s();break;case 3:Nr(),J(Ke),J(De),df();break;case 5:ff(r);break;case 4:Nr();break;case 13:J(ie);break;case 19:J(ie);break;case 10:af(r.type._context);break;case 22:case 23:Tf()}n=n.return}if(we=e,pe=e=Sn(e.current,null),_e=Je=t,ye=0,to=null,wf=Ta=Jn=0,We=Li=null,Vn!==null){for(t=0;t<Vn.length;t++)if(n=Vn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Vn=null}return e}function Ag(e,t){do{var n=pe;try{if(sf(),as.current=Hs,Ws){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ws=!1}if(Zn=0,ve=ge=oe=null,Ri=!1,Zi=0,xf.current=null,n===null||n.return===null){ye=1,to=t,pe=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=_e,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=ip(s);if(g!==null){g.flags&=-257,op(g,s,a,o,t),g.mode&1&&rp(o,u,t),t=g,l=u;var y=t.updateQueue;if(y===null){var v=new Set;v.add(l),t.updateQueue=v}else y.add(l);break e}else{if(!(t&1)){rp(o,u,t),Cf();break e}l=Error(b(426))}}else if(te&&a.mode&1){var x=ip(s);if(x!==null){!(x.flags&65536)&&(x.flags|=256),op(x,s,a,o,t),rf(Vr(l,a));break e}}o=l=Vr(l,a),ye!==4&&(ye=2),Li===null?Li=[o]:Li.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=dg(o,l,t);Qd(o,h);break e;case 1:a=l;var p=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(xn===null||!xn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=pg(o,a,t);Qd(o,w);break e}}o=o.return}while(o!==null)}Lg(n)}catch(T){t=T,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(1)}function Rg(){var e=Ks.current;return Ks.current=Hs,e===null?Hs:e}function Cf(){(ye===0||ye===3||ye===2)&&(ye=4),we===null||!(Jn&268435455)&&!(Ta&268435455)||un(we,_e)}function Xs(e,t){var n=z;z|=2;var r=Rg();(we!==e||_e!==t)&&(Bt=null,Wn(e,t));do try{$w();break}catch(i){Ag(e,i)}while(1);if(sf(),z=n,Ks.current=r,pe!==null)throw Error(b(261));return we=null,_e=0,ye}function $w(){for(;pe!==null;)Mg(pe)}function Ow(){for(;pe!==null&&!lx();)Mg(pe)}function Mg(e){var t=Ig(e.alternate,e,Je);e.memoizedProps=e.pendingProps,t===null?Lg(e):pe=t,xf.current=null}function Lg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Rw(n,t),n!==null){n.flags&=32767,pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ye=6,pe=null;return}}else if(n=Aw(n,t,Je),n!==null){pe=n;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);ye===0&&(ye=5)}function Dn(e,t,n){var r=K,i=ft.transition;try{ft.transition=null,K=1,Nw(e,t,n,r)}finally{ft.transition=i,K=r}return null}function Nw(e,t,n,r){do Mr();while(fn!==null);if(z&6)throw Error(b(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(vx(e,o),e===we&&(pe=we=null,_e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Go||(Go=!0,Dg(Rs,function(){return Mr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ft.transition,ft.transition=null;var s=K;K=1;var a=z;z|=4,xf.current=null,Lw(e,n),Pg(n,e),iw(wu),Ls=!!xu,wu=xu=null,e.current=n,jw(n),ux(),z=a,K=s,ft.transition=o}else e.current=n;if(Go&&(Go=!1,fn=e,Ys=i),o=e.pendingLanes,o===0&&(xn=null),dx(n.stateNode),Ye(e,ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Gs)throw Gs=!1,e=zu,zu=null,e;return Ys&1&&e.tag!==0&&Mr(),o=e.pendingLanes,o&1?e===Fu?ji++:(ji=0,Fu=e):ji=0,Rn(),null}function Mr(){if(fn!==null){var e=f0(Ys),t=ft.transition,n=K;try{if(ft.transition=null,K=16>e?16:e,fn===null)var r=!1;else{if(e=fn,fn=null,Ys=0,z&6)throw Error(b(331));var i=z;for(z|=4,M=e.current;M!==null;){var o=M,s=o.child;if(M.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(M=u;M!==null;){var c=M;switch(c.tag){case 0:case 11:case 15:Mi(8,c,o)}var f=c.child;if(f!==null)f.return=c,M=f;else for(;M!==null;){c=M;var d=c.sibling,g=c.return;if(Tg(c),c===u){M=null;break}if(d!==null){d.return=g,M=d;break}M=g}}}var y=o.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var x=v.sibling;v.sibling=null,v=x}while(v!==null)}}M=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,M=s;else e:for(;M!==null;){if(o=M,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Mi(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,M=h;break e}M=o.return}}var p=e.current;for(M=p;M!==null;){s=M;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,M=m;else e:for(s=p;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ka(9,a)}}catch(T){ae(a,a.return,T)}if(a===s){M=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,M=w;break e}M=a.return}}if(z=i,Rn(),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(ha,e)}catch{}r=!0}return r}finally{K=n,ft.transition=t}}return!1}function vp(e,t,n){t=Vr(n,t),t=dg(e,t,1),e=vn(e,t,1),t=Fe(),e!==null&&(go(e,1,t),Ye(e,t))}function ae(e,t,n){if(e.tag===3)vp(e,e,n);else for(;t!==null;){if(t.tag===3){vp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xn===null||!xn.has(r))){e=Vr(n,e),e=pg(t,e,1),t=vn(t,e,1),e=Fe(),t!==null&&(go(t,1,e),Ye(t,e));break}}t=t.return}}function Vw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Fe(),e.pingedLanes|=e.suspendedLanes&n,we===e&&(_e&n)===n&&(ye===4||ye===3&&(_e&130023424)===_e&&500>ue()-Sf?Wn(e,0):wf|=n),Ye(e,t)}function jg(e,t){t===0&&(e.mode&1?(t=Oo,Oo<<=1,!(Oo&130023424)&&(Oo=4194304)):t=1);var n=Fe();e=Qt(e,t),e!==null&&(go(e,t,n),Ye(e,n))}function zw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),jg(e,n)}function Fw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(t),jg(e,n)}var Ig;Ig=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ke.current)He=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return He=!1,bw(e,t,n);He=!!(e.flags&131072)}else He=!1,te&&t.flags&1048576&&O0(t,Vs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;us(e,t),e=t.pendingProps;var i=Dr(t,De.current);Rr(t,n),i=hf(null,t,r,e,i,n);var o=mf();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ge(r)?(o=!0,Os(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,uf(t),i.updater=wa,t.stateNode=i,i._reactInternals=t,Au(t,r,e,n),t=Lu(null,t,r,!0,o,n)):(t.tag=0,te&&o&&tf(t),Oe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(us(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Uw(r),e=xt(r,e),i){case 0:t=Mu(null,t,r,e,n);break e;case 1:t=lp(null,t,r,e,n);break e;case 11:t=sp(null,t,r,e,n);break e;case 14:t=ap(null,t,r,xt(r.type,e),n);break e}throw Error(b(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),Mu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),lp(e,t,r,i,n);case 3:e:{if(yg(t),e===null)throw Error(b(387));r=t.pendingProps,o=t.memoizedState,i=o.element,F0(e,t),Bs(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Vr(Error(b(423)),t),t=up(e,t,r,n,i);break e}else if(r!==i){i=Vr(Error(b(424)),t),t=up(e,t,r,n,i);break e}else for(et=yn(t.stateNode.containerInfo.firstChild),tt=t,te=!0,St=null,n=H0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($r(),r===i){t=qt(e,t,n);break e}Oe(e,t,r,n)}t=t.child}return t;case 5:return K0(t),e===null&&Pu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Su(r,i)?s=null:o!==null&&Su(r,o)&&(t.flags|=32),gg(e,t),Oe(e,t,s,n),t.child;case 6:return e===null&&Pu(t),null;case 13:return vg(e,t,n);case 4:return cf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Or(t,null,r,n):Oe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),sp(e,t,r,i,n);case 7:return Oe(e,t,t.pendingProps,n),t.child;case 8:return Oe(e,t,t.pendingProps.children,n),t.child;case 12:return Oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Q(zs,r._currentValue),r._currentValue=s,o!==null)if(Pt(o.value,s)){if(o.children===i.children&&!Ke.current){t=qt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Gt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),_u(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(b(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),_u(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Oe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Rr(t,n),i=pt(i),r=r(i),t.flags|=1,Oe(e,t,r,n),t.child;case 14:return r=t.type,i=xt(r,t.pendingProps),i=xt(r.type,i),ap(e,t,r,i,n);case 15:return hg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),us(e,t),t.tag=1,Ge(r)?(e=!0,Os(t)):e=!1,Rr(t,n),U0(t,r,i),Au(t,r,i,n),Lu(null,t,r,!0,e,n);case 19:return xg(e,t,n);case 22:return mg(e,t,n)}throw Error(b(156,t.tag))};function Dg(e,t){return a0(e,t)}function Bw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,n,r){return new Bw(e,t,n,r)}function Ef(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Uw(e){if(typeof e=="function")return Ef(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Uc)return 11;if(e===Wc)return 14}return 2}function Sn(e,t){var n=e.alternate;return n===null?(n=ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ds(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Ef(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case fr:return Hn(n.children,i,o,t);case Bc:s=8,i|=8;break;case Jl:return e=ut(12,n,t,i|2),e.elementType=Jl,e.lanes=o,e;case eu:return e=ut(13,n,t,i),e.elementType=eu,e.lanes=o,e;case tu:return e=ut(19,n,t,i),e.elementType=tu,e.lanes=o,e;case Wm:return Ca(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Bm:s=10;break e;case Um:s=9;break e;case Uc:s=11;break e;case Wc:s=14;break e;case sn:s=16,r=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return t=ut(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Hn(e,t,n,r){return e=ut(7,e,r,t),e.lanes=n,e}function Ca(e,t,n,r){return e=ut(22,e,r,t),e.elementType=Wm,e.lanes=n,e.stateNode={isHidden:!1},e}function gl(e,t,n){return e=ut(6,e,null,t),e.lanes=n,e}function yl(e,t,n){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ww(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qa(0),this.expirationTimes=qa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pf(e,t,n,r,i,o,s,a,l){return e=new Ww(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ut(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},uf(o),e}function Hw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $g(e){if(!e)return En;e=e._reactInternals;e:{if(ir(e)!==e||e.tag!==1)throw Error(b(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(b(171))}if(e.tag===1){var n=e.type;if(Ge(n))return D0(e,n,t)}return t}function Og(e,t,n,r,i,o,s,a,l){return e=Pf(n,r,!0,e,i,o,s,a,l),e.context=$g(null),n=e.current,r=Fe(),i=wn(n),o=Gt(r,i),o.callback=t??null,vn(n,o,i),e.current.lanes=i,go(e,i,r),Ye(e,r),e}function Ea(e,t,n,r){var i=t.current,o=Fe(),s=wn(i);return n=$g(n),t.context===null?t.context=n:t.pendingContext=n,t=Gt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=vn(i,t,s),e!==null&&(Tt(e,i,s,o),ss(e,i,s)),s}function Qs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _f(e,t){xp(e,t),(e=e.alternate)&&xp(e,t)}function Kw(){return null}var Ng=typeof reportError=="function"?reportError:function(e){console.error(e)};function bf(e){this._internalRoot=e}Pa.prototype.render=bf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(b(409));Ea(e,t,null,null)};Pa.prototype.unmount=bf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;er(function(){Ea(null,e,null,null)}),t[Xt]=null}};function Pa(e){this._internalRoot=e}Pa.prototype.unstable_scheduleHydration=function(e){if(e){var t=h0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ln.length&&t!==0&&t<ln[n].priority;n++);ln.splice(n,0,e),n===0&&g0(e)}};function Af(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wp(){}function Gw(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Qs(s);o.call(u)}}var s=Og(t,r,e,0,null,!1,!1,"",wp);return e._reactRootContainer=s,e[Xt]=s.current,Gi(e.nodeType===8?e.parentNode:e),er(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Qs(l);a.call(u)}}var l=Pf(e,0,!1,null,null,!1,!1,"",wp);return e._reactRootContainer=l,e[Xt]=l.current,Gi(e.nodeType===8?e.parentNode:e),er(function(){Ea(t,l,n,r)}),l}function ba(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Qs(s);a.call(l)}}Ea(t,s,e,i)}else s=Gw(n,t,e,i,r);return Qs(s)}d0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Si(t.pendingLanes);n!==0&&(Gc(t,n|1),Ye(t,ue()),!(z&6)&&(zr=ue()+500,Rn()))}break;case 13:er(function(){var r=Qt(e,1);if(r!==null){var i=Fe();Tt(r,e,1,i)}}),_f(e,1)}};Yc=function(e){if(e.tag===13){var t=Qt(e,134217728);if(t!==null){var n=Fe();Tt(t,e,134217728,n)}_f(e,134217728)}};p0=function(e){if(e.tag===13){var t=wn(e),n=Qt(e,t);if(n!==null){var r=Fe();Tt(n,e,t,r)}_f(e,t)}};h0=function(){return K};m0=function(e,t){var n=K;try{return K=e,t()}finally{K=n}};fu=function(e,t,n){switch(t){case"input":if(iu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=va(r);if(!i)throw Error(b(90));Km(r),iu(r,i)}}}break;case"textarea":Ym(e,n);break;case"select":t=n.value,t!=null&&Pr(e,!!n.multiple,t,!1)}};t0=kf;n0=er;var Yw={usingClientEntryPoint:!1,Events:[vo,mr,va,Jm,e0,kf]},pi={findFiberByHostInstance:Nn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Xw={bundleType:pi.bundleType,version:pi.version,rendererPackageName:pi.rendererPackageName,rendererConfig:pi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=o0(e),e===null?null:e.stateNode},findFiberByHostInstance:pi.findFiberByHostInstance||Kw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yo.isDisabled&&Yo.supportsFiber)try{ha=Yo.inject(Xw),Dt=Yo}catch{}}it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yw;it.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Af(t))throw Error(b(200));return Hw(e,t,null,n)};it.createRoot=function(e,t){if(!Af(e))throw Error(b(299));var n=!1,r="",i=Ng;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Pf(e,1,!1,null,null,n,!1,r,i),e[Xt]=t.current,Gi(e.nodeType===8?e.parentNode:e),new bf(t)};it.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=o0(t),e=e===null?null:e.stateNode,e};it.flushSync=function(e){return er(e)};it.hydrate=function(e,t,n){if(!_a(t))throw Error(b(200));return ba(null,e,t,!0,n)};it.hydrateRoot=function(e,t,n){if(!Af(e))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Ng;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Og(t,null,e,1,n??null,i,!1,o,s),e[Xt]=t.current,Gi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Pa(t)};it.render=function(e,t,n){if(!_a(t))throw Error(b(200));return ba(null,e,t,!1,n)};it.unmountComponentAtNode=function(e){if(!_a(e))throw Error(b(40));return e._reactRootContainer?(er(function(){ba(null,null,e,!1,function(){e._reactRootContainer=null,e[Xt]=null})}),!0):!1};it.unstable_batchedUpdates=kf;it.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!_a(n))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return ba(e,t,n,!1,r)};it.version="18.2.0-next-9e3b772b8-20220608";function Vg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vg)}catch(e){console.error(e)}}Vg(),Om.exports=it;var Qw=Om.exports;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function no(){return no=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},no.apply(this,arguments)}var dn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(dn||(dn={}));const Sp="popstate";function qw(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Wu("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:qs(i)}return Jw(t,n,null,e)}function he(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Rf(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Zw(){return Math.random().toString(36).substr(2,8)}function kp(e,t){return{usr:e.state,key:e.key,idx:t}}function Wu(e,t,n,r){return n===void 0&&(n=null),no({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Jr(t):t,{state:n,key:t&&t.key||r||Zw()})}function qs(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Jr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Jw(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=dn.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(no({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function f(){a=dn.Pop;let x=c(),h=x==null?null:x-u;u=x,l&&l({action:a,location:v.location,delta:h})}function d(x,h){a=dn.Push;let p=Wu(v.location,x,h);n&&n(p,x),u=c()+1;let m=kp(p,u),w=v.createHref(p);try{s.pushState(m,"",w)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(w)}o&&l&&l({action:a,location:v.location,delta:1})}function g(x,h){a=dn.Replace;let p=Wu(v.location,x,h);n&&n(p,x),u=c();let m=kp(p,u),w=v.createHref(p);s.replaceState(m,"",w),o&&l&&l({action:a,location:v.location,delta:0})}function y(x){let h=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof x=="string"?x:qs(x);return p=p.replace(/ $/,"%20"),he(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let v={get action(){return a},get location(){return e(i,s)},listen(x){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Sp,f),l=x,()=>{i.removeEventListener(Sp,f),l=null}},createHref(x){return t(i,x)},createURL:y,encodeLocation(x){let h=y(x);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:d,replace:g,go(x){return s.go(x)}};return v}var Tp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Tp||(Tp={}));function eS(e,t,n){return n===void 0&&(n="/"),tS(e,t,n,!1)}function tS(e,t,n,r){let i=typeof t=="string"?Jr(t):t,o=Mf(i.pathname||"/",n);if(o==null)return null;let s=zg(e);nS(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let u=pS(o);a=fS(s[l],u,r)}return a}function zg(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(he(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=kn([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(he(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),zg(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:uS(u,o.index),routesMeta:c})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of Fg(o.path))i(o,s,l)}),t}function Fg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Fg(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function nS(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:cS(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const rS=/^:[\w-]+$/,iS=3,oS=2,sS=1,aS=10,lS=-2,Cp=e=>e==="*";function uS(e,t){let n=e.split("/"),r=n.length;return n.some(Cp)&&(r+=lS),t&&(r+=oS),n.filter(i=>!Cp(i)).reduce((i,o)=>i+(rS.test(o)?iS:o===""?sS:aS),r)}function cS(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function fS(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,c=o==="/"?t:t.slice(o.length)||"/",f=Ep({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),d=l.route;if(!f&&u&&n&&!r[r.length-1].route.index&&(f=Ep({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!f)return null;Object.assign(i,f.params),s.push({params:i,pathname:kn([o,f.pathname]),pathnameBase:vS(kn([o,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(o=kn([o,f.pathnameBase]))}return s}function Ep(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=dS(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{let{paramName:d,isOptional:g}=c;if(d==="*"){let v=a[f]||"";s=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const y=a[f];return g&&!y?u[d]=void 0:u[d]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function dS(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Rf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function pS(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Rf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Mf(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const hS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mS=e=>hS.test(e);function gS(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Jr(e):e,o;if(n)if(mS(n))o=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),Rf(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?o=Pp(n.substring(1),"/"):o=Pp(n,t)}else o=t;return{pathname:o,search:xS(r),hash:wS(i)}}function Pp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function vl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function yS(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Bg(e,t){let n=yS(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ug(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Jr(e):(i=no({},e),he(!i.pathname||!i.pathname.includes("?"),vl("?","pathname","search",i)),he(!i.pathname||!i.pathname.includes("#"),vl("#","pathname","hash",i)),he(!i.search||!i.search.includes("#"),vl("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let f=t.length-1;if(!r&&s.startsWith("..")){let d=s.split("/");for(;d[0]==="..";)d.shift(),f-=1;i.pathname=d.join("/")}a=f>=0?t[f]:"/"}let l=gS(i,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const kn=e=>e.join("/").replace(/\/\/+/g,"/"),vS=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),xS=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,wS=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function SS(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Wg=["post","put","patch","delete"];new Set(Wg);const kS=["get",...Wg];new Set(kS);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ro(){return ro=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ro.apply(this,arguments)}const Lf=C.createContext(null),TS=C.createContext(null),or=C.createContext(null),Aa=C.createContext(null),Mn=C.createContext({outlet:null,matches:[],isDataRoute:!1}),Hg=C.createContext(null);function CS(e,t){let{relative:n}=t===void 0?{}:t;wo()||he(!1);let{basename:r,navigator:i}=C.useContext(or),{hash:o,pathname:s,search:a}=Gg(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:kn([r,s])),i.createHref({pathname:l,search:a,hash:o})}function wo(){return C.useContext(Aa)!=null}function So(){return wo()||he(!1),C.useContext(Aa).location}function Kg(e){C.useContext(or).static||C.useLayoutEffect(e)}function ES(){let{isDataRoute:e}=C.useContext(Mn);return e?zS():PS()}function PS(){wo()||he(!1);let e=C.useContext(Lf),{basename:t,future:n,navigator:r}=C.useContext(or),{matches:i}=C.useContext(Mn),{pathname:o}=So(),s=JSON.stringify(Bg(i,n.v7_relativeSplatPath)),a=C.useRef(!1);return Kg(()=>{a.current=!0}),C.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=Ug(u,JSON.parse(s),o,c.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:kn([t,f.pathname])),(c.replace?r.replace:r.push)(f,c.state,c)},[t,r,s,o,e])}const _S=C.createContext(null);function bS(e){let t=C.useContext(Mn).outlet;return t&&C.createElement(_S.Provider,{value:e},t)}function Gg(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=C.useContext(or),{matches:i}=C.useContext(Mn),{pathname:o}=So(),s=JSON.stringify(Bg(i,r.v7_relativeSplatPath));return C.useMemo(()=>Ug(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function AS(e,t){return RS(e,t)}function RS(e,t,n,r){wo()||he(!1);let{navigator:i}=C.useContext(or),{matches:o}=C.useContext(Mn),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=So(),c;if(t){var f;let x=typeof t=="string"?Jr(t):t;l==="/"||(f=x.pathname)!=null&&f.startsWith(l)||he(!1),c=x}else c=u;let d=c.pathname||"/",g=d;if(l!=="/"){let x=l.replace(/^\//,"").split("/");g="/"+d.replace(/^\//,"").split("/").slice(x.length).join("/")}let y=eS(e,{pathname:g}),v=DS(y&&y.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:kn([l,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:kn([l,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),o,n,r);return t&&v?C.createElement(Aa.Provider,{value:{location:ro({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:dn.Pop}},v):v}function MS(){let e=VS(),t=SS(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,o)}const LS=C.createElement(MS,null);class jS extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?C.createElement(Mn.Provider,{value:this.props.routeContext},C.createElement(Hg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function IS(e){let{routeContext:t,match:n,children:r}=e,i=C.useContext(Lf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Mn.Provider,{value:t},r)}function DS(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=s.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);c>=0||he(!1),s=s.slice(0,Math.min(s.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<s.length;c++){let f=s[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=c),f.route.id){let{loaderData:d,errors:g}=n,y=f.route.loader&&d[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||y){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((c,f,d)=>{let g,y=!1,v=null,x=null;n&&(g=a&&f.route.id?a[f.route.id]:void 0,v=f.route.errorElement||LS,l&&(u<0&&d===0?(FS("route-fallback",!1),y=!0,x=null):u===d&&(y=!0,x=f.route.hydrateFallbackElement||null)));let h=t.concat(s.slice(0,d+1)),p=()=>{let m;return g?m=v:y?m=x:f.route.Component?m=C.createElement(f.route.Component,null):f.route.element?m=f.route.element:m=c,C.createElement(IS,{match:f,routeContext:{outlet:c,matches:h,isDataRoute:n!=null},children:m})};return n&&(f.route.ErrorBoundary||f.route.errorElement||d===0)?C.createElement(jS,{location:n.location,revalidation:n.revalidation,component:v,error:g,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var Yg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Yg||{}),Zs=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Zs||{});function $S(e){let t=C.useContext(Lf);return t||he(!1),t}function OS(e){let t=C.useContext(TS);return t||he(!1),t}function NS(e){let t=C.useContext(Mn);return t||he(!1),t}function Xg(e){let t=NS(),n=t.matches[t.matches.length-1];return n.route.id||he(!1),n.route.id}function VS(){var e;let t=C.useContext(Hg),n=OS(Zs.UseRouteError),r=Xg(Zs.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function zS(){let{router:e}=$S(Yg.UseNavigateStable),t=Xg(Zs.UseNavigateStable),n=C.useRef(!1);return Kg(()=>{n.current=!0}),C.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ro({fromRouteId:t},o)))},[e,t])}const _p={};function FS(e,t,n){!t&&!_p[e]&&(_p[e]=!0)}function BS(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function US(e){return bS(e.context)}function $n(e){he(!1)}function WS(e){let{basename:t="/",children:n=null,location:r,navigationType:i=dn.Pop,navigator:o,static:s=!1,future:a}=e;wo()&&he(!1);let l=t.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:l,navigator:o,static:s,future:ro({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=Jr(r));let{pathname:c="/",search:f="",hash:d="",state:g=null,key:y="default"}=r,v=C.useMemo(()=>{let x=Mf(c,l);return x==null?null:{location:{pathname:x,search:f,hash:d,state:g,key:y},navigationType:i}},[l,c,f,d,g,y,i]);return v==null?null:C.createElement(or.Provider,{value:u},C.createElement(Aa.Provider,{children:n,value:v}))}function HS(e){let{children:t,location:n}=e;return AS(Hu(t),n)}new Promise(()=>{});function Hu(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;let o=[...t,i];if(r.type===C.Fragment){n.push.apply(n,Hu(r.props.children,o));return}r.type!==$n&&he(!1),!r.props.index||!r.props.children||he(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Hu(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ku(){return Ku=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ku.apply(this,arguments)}function KS(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function GS(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function YS(e,t){return e.button===0&&(!t||t==="_self")&&!GS(e)}const XS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],QS="6";try{window.__reactRouterVersion=QS}catch{}const qS="startTransition",bp=ql[qS];function ZS(e){let{basename:t,children:n,future:r,window:i}=e,o=C.useRef();o.current==null&&(o.current=qw({window:i,v5Compat:!0}));let s=o.current,[a,l]=C.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},c=C.useCallback(f=>{u&&bp?bp(()=>l(f)):l(f)},[l,u]);return C.useLayoutEffect(()=>s.listen(c),[s,c]),C.useEffect(()=>BS(r),[r]),C.createElement(WS,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const JS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",e2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ei=C.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:c,viewTransition:f}=t,d=KS(t,XS),{basename:g}=C.useContext(or),y,v=!1;if(typeof u=="string"&&e2.test(u)&&(y=u,JS))try{let m=new URL(window.location.href),w=u.startsWith("//")?new URL(m.protocol+u):new URL(u),T=Mf(w.pathname,g);w.origin===m.origin&&T!=null?u=T+w.search+w.hash:v=!0}catch{}let x=CS(u,{relative:i}),h=t2(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:i,viewTransition:f});function p(m){r&&r(m),m.defaultPrevented||h(m)}return C.createElement("a",Ku({},d,{href:y||x,onClick:v||o?r:p,ref:n,target:l}))});var Ap;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ap||(Ap={}));var Rp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Rp||(Rp={}));function t2(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=t===void 0?{}:t,l=ES(),u=So(),c=Gg(e,{relative:s});return C.useCallback(f=>{if(YS(f,n)){f.preventDefault();let d=r!==void 0?r:qs(u)===qs(c);l(e,{replace:d,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[u,l,c,r,i,n,e,o,s,a])}var Gu={},Mp=Qw;Gu.createRoot=Mp.createRoot,Gu.hydrateRoot=Mp.hydrateRoot;var Ie=function(){return Ie=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Ie.apply(this,arguments)};function io(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function Qg(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var n2=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,r2=Qg(function(e){return n2.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Z="-ms-",Ii="-moz-",W="-webkit-",qg="comm",Ra="rule",jf="decl",i2="@import",Zg="@keyframes",o2="@layer",s2=Math.abs,If=String.fromCharCode,Yu=Object.assign;function a2(e,t){return xe(e,0)^45?(((t<<2^xe(e,0))<<2^xe(e,1))<<2^xe(e,2))<<2^xe(e,3):0}function Jg(e){return e.trim()}function Ut(e,t){return(e=t.exec(e))?e[0]:e}function O(e,t,n){return e.replace(t,n)}function ps(e,t){return e.indexOf(t)}function xe(e,t){return e.charCodeAt(t)|0}function Fr(e,t,n){return e.slice(t,n)}function Rt(e){return e.length}function ey(e){return e.length}function Ti(e,t){return t.push(e),e}function l2(e,t){return e.map(t).join("")}function Lp(e,t){return e.filter(function(n){return!Ut(n,t)})}var Ma=1,Br=1,ty=0,mt=0,fe=0,ti="";function La(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Ma,column:Br,length:s,return:"",siblings:a}}function rn(e,t){return Yu(La("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function lr(e){for(;e.root;)e=rn(e.root,{children:[e]});Ti(e,e.siblings)}function u2(){return fe}function c2(){return fe=mt>0?xe(ti,--mt):0,Br--,fe===10&&(Br=1,Ma--),fe}function Ct(){return fe=mt<ty?xe(ti,mt++):0,Br++,fe===10&&(Br=1,Ma++),fe}function Kn(){return xe(ti,mt)}function hs(){return mt}function ja(e,t){return Fr(ti,e,t)}function Xu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function f2(e){return Ma=Br=1,ty=Rt(ti=e),mt=0,[]}function d2(e){return ti="",e}function xl(e){return Jg(ja(mt-1,Qu(e===91?e+2:e===40?e+1:e)))}function p2(e){for(;(fe=Kn())&&fe<33;)Ct();return Xu(e)>2||Xu(fe)>3?"":" "}function h2(e,t){for(;--t&&Ct()&&!(fe<48||fe>102||fe>57&&fe<65||fe>70&&fe<97););return ja(e,hs()+(t<6&&Kn()==32&&Ct()==32))}function Qu(e){for(;Ct();)switch(fe){case e:return mt;case 34:case 39:e!==34&&e!==39&&Qu(fe);break;case 40:e===41&&Qu(e);break;case 92:Ct();break}return mt}function m2(e,t){for(;Ct()&&e+fe!==47+10;)if(e+fe===42+42&&Kn()===47)break;return"/*"+ja(t,mt-1)+"*"+If(e===47?e:Ct())}function g2(e){for(;!Xu(Kn());)Ct();return ja(e,mt)}function y2(e){return d2(ms("",null,null,null,[""],e=f2(e),0,[0],e))}function ms(e,t,n,r,i,o,s,a,l){for(var u=0,c=0,f=s,d=0,g=0,y=0,v=1,x=1,h=1,p=0,m="",w=i,T=o,E=r,k=m;x;)switch(y=p,p=Ct()){case 40:if(y!=108&&xe(k,f-1)==58){ps(k+=O(xl(p),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:k+=xl(p);break;case 9:case 10:case 13:case 32:k+=p2(y);break;case 92:k+=h2(hs()-1,7);continue;case 47:switch(Kn()){case 42:case 47:Ti(v2(m2(Ct(),hs()),t,n,l),l);break;default:k+="/"}break;case 123*v:a[u++]=Rt(k)*h;case 125*v:case 59:case 0:switch(p){case 0:case 125:x=0;case 59+c:h==-1&&(k=O(k,/\f/g,"")),g>0&&Rt(k)-f&&Ti(g>32?Ip(k+";",r,n,f-1,l):Ip(O(k," ","")+";",r,n,f-2,l),l);break;case 59:k+=";";default:if(Ti(E=jp(k,t,n,u,c,i,a,m,w=[],T=[],f,o),o),p===123)if(c===0)ms(k,t,E,E,w,o,f,a,T);else switch(d===99&&xe(k,3)===110?100:d){case 100:case 108:case 109:case 115:ms(e,E,E,r&&Ti(jp(e,E,E,0,0,i,a,m,i,w=[],f,T),T),i,T,f,a,r?w:T);break;default:ms(k,E,E,E,[""],T,0,a,T)}}u=c=g=0,v=h=1,m=k="",f=s;break;case 58:f=1+Rt(k),g=y;default:if(v<1){if(p==123)--v;else if(p==125&&v++==0&&c2()==125)continue}switch(k+=If(p),p*v){case 38:h=c>0?1:(k+="\f",-1);break;case 44:a[u++]=(Rt(k)-1)*h,h=1;break;case 64:Kn()===45&&(k+=xl(Ct())),d=Kn(),c=f=Rt(m=k+=g2(hs())),p++;break;case 45:y===45&&Rt(k)==2&&(v=0)}}return o}function jp(e,t,n,r,i,o,s,a,l,u,c,f){for(var d=i-1,g=i===0?o:[""],y=ey(g),v=0,x=0,h=0;v<r;++v)for(var p=0,m=Fr(e,d+1,d=s2(x=s[v])),w=e;p<y;++p)(w=Jg(x>0?g[p]+" "+m:O(m,/&\f/g,g[p])))&&(l[h++]=w);return La(e,t,n,i===0?Ra:a,l,u,c,f)}function v2(e,t,n,r){return La(e,t,n,qg,If(u2()),Fr(e,2,-2),0,r)}function Ip(e,t,n,r,i){return La(e,t,n,jf,Fr(e,0,r),Fr(e,r+1,-1),r,i)}function ny(e,t,n){switch(a2(e,t)){case 5103:return W+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return W+e+e;case 4789:return Ii+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return W+e+Ii+e+Z+e+e;case 5936:switch(xe(e,t+11)){case 114:return W+e+Z+O(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return W+e+Z+O(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return W+e+Z+O(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return W+e+Z+e+e;case 6165:return W+e+Z+"flex-"+e+e;case 5187:return W+e+O(e,/(\w+).+(:[^]+)/,W+"box-$1$2"+Z+"flex-$1$2")+e;case 5443:return W+e+Z+"flex-item-"+O(e,/flex-|-self/g,"")+(Ut(e,/flex-|baseline/)?"":Z+"grid-row-"+O(e,/flex-|-self/g,""))+e;case 4675:return W+e+Z+"flex-line-pack"+O(e,/align-content|flex-|-self/g,"")+e;case 5548:return W+e+Z+O(e,"shrink","negative")+e;case 5292:return W+e+Z+O(e,"basis","preferred-size")+e;case 6060:return W+"box-"+O(e,"-grow","")+W+e+Z+O(e,"grow","positive")+e;case 4554:return W+O(e,/([^-])(transform)/g,"$1"+W+"$2")+e;case 6187:return O(O(O(e,/(zoom-|grab)/,W+"$1"),/(image-set)/,W+"$1"),e,"")+e;case 5495:case 3959:return O(e,/(image-set\([^]*)/,W+"$1$`$1");case 4968:return O(O(e,/(.+:)(flex-)?(.*)/,W+"box-pack:$3"+Z+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+W+e+e;case 4200:if(!Ut(e,/flex-|baseline/))return Z+"grid-column-align"+Fr(e,t)+e;break;case 2592:case 3360:return Z+O(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Ut(r.props,/grid-\w+-end/)})?~ps(e+(n=n[t].value),"span")?e:Z+O(e,"-start","")+e+Z+"grid-row-span:"+(~ps(n,"span")?Ut(n,/\d+/):+Ut(n,/\d+/)-+Ut(e,/\d+/))+";":Z+O(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Ut(r.props,/grid-\w+-start/)})?e:Z+O(O(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return O(e,/(.+)-inline(.+)/,W+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Rt(e)-1-t>6)switch(xe(e,t+1)){case 109:if(xe(e,t+4)!==45)break;case 102:return O(e,/(.+:)(.+)-([^]+)/,"$1"+W+"$2-$3$1"+Ii+(xe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ps(e,"stretch")?ny(O(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return O(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,u){return Z+i+":"+o+u+(s?Z+i+"-span:"+(a?l:+l-+o)+u:"")+e});case 4949:if(xe(e,t+6)===121)return O(e,":",":"+W)+e;break;case 6444:switch(xe(e,xe(e,14)===45?18:11)){case 120:return O(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+W+(xe(e,14)===45?"inline-":"")+"box$3$1"+W+"$2$3$1"+Z+"$2box$3")+e;case 100:return O(e,":",":"+Z)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return O(e,"scroll-","scroll-snap-")+e}return e}function Js(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function x2(e,t,n,r){switch(e.type){case o2:if(e.children.length)break;case i2:case jf:return e.return=e.return||e.value;case qg:return"";case Zg:return e.return=e.value+"{"+Js(e.children,r)+"}";case Ra:if(!Rt(e.value=e.props.join(",")))return""}return Rt(n=Js(e.children,r))?e.return=e.value+"{"+n+"}":""}function w2(e){var t=ey(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function S2(e){return function(t){t.root||(t=t.return)&&e(t)}}function k2(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case jf:e.return=ny(e.value,e.length,n);return;case Zg:return Js([rn(e,{value:O(e.value,"@","@"+W)})],r);case Ra:if(e.length)return l2(n=e.props,function(i){switch(Ut(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":lr(rn(e,{props:[O(i,/:(read-\w+)/,":"+Ii+"$1")]})),lr(rn(e,{props:[i]})),Yu(e,{props:Lp(n,r)});break;case"::placeholder":lr(rn(e,{props:[O(i,/:(plac\w+)/,":"+W+"input-$1")]})),lr(rn(e,{props:[O(i,/:(plac\w+)/,":"+Ii+"$1")]})),lr(rn(e,{props:[O(i,/:(plac\w+)/,Z+"input-$1")]})),lr(rn(e,{props:[i]})),Yu(e,{props:Lp(n,r)});break}return""})}}var ry={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ur=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Df=typeof window<"u"&&"HTMLElement"in window,T2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),C2={},Ia=Object.freeze([]),Wr=Object.freeze({});function iy(e,t,n){return n===void 0&&(n=Wr),e.theme!==n.theme&&e.theme||t||n.theme}var oy=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),E2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,P2=/(^-|-$)/g;function Dp(e){return e.replace(E2,"-").replace(P2,"")}var _2=/(a)(d)/gi,$p=function(e){return String.fromCharCode(e+(e>25?39:97))};function qu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=$p(t%52)+n;return($p(t%52)+n).replace(_2,"$1-$2")}var wl,kr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},sy=function(e){return kr(5381,e)};function ay(e){return qu(sy(e)>>>0)}function b2(e){return e.displayName||e.name||"Component"}function Sl(e){return typeof e=="string"&&!0}var ly=typeof Symbol=="function"&&Symbol.for,uy=ly?Symbol.for("react.memo"):60115,A2=ly?Symbol.for("react.forward_ref"):60112,R2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},M2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},cy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},L2=((wl={})[A2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},wl[uy]=cy,wl);function Op(e){return("type"in(t=e)&&t.type.$$typeof)===uy?cy:"$$typeof"in e?L2[e.$$typeof]:R2;var t}var j2=Object.defineProperty,I2=Object.getOwnPropertyNames,Np=Object.getOwnPropertySymbols,D2=Object.getOwnPropertyDescriptor,$2=Object.getPrototypeOf,Vp=Object.prototype;function fy(e,t,n){if(typeof t!="string"){if(Vp){var r=$2(t);r&&r!==Vp&&fy(e,r,n)}var i=I2(t);Np&&(i=i.concat(Np(t)));for(var o=Op(e),s=Op(t),a=0;a<i.length;++a){var l=i[a];if(!(l in M2||n&&n[l]||s&&l in s||o&&l in o)){var u=D2(t,l);try{j2(e,l,u)}catch{}}}}return e}function Hr(e){return typeof e=="function"}function $f(e){return typeof e=="object"&&"styledComponentId"in e}function Fn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Zu(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function oo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ju(e,t,n){if(n===void 0&&(n=!1),!n&&!oo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ju(e[r],t[r]);else if(oo(t))for(var r in t)e[r]=Ju(e[r],t[r]);return e}function Of(e,t){Object.defineProperty(e,"toString",{value:t})}function ko(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var O2=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw ko(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(`/*!sc*/
`);return n},e}(),gs=new Map,ea=new Map,kl=1,Xo=function(e){if(gs.has(e))return gs.get(e);for(;ea.has(kl);)kl++;var t=kl++;return gs.set(e,t),ea.set(t,e),t},N2=function(e,t){gs.set(e,t),ea.set(t,e)},V2="style[".concat(Ur,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),z2=new RegExp("^".concat(Ur,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),F2=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},B2=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(z2);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(N2(c,u),F2(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function U2(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var dy=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Ur,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Ur,"active"),r.setAttribute("data-styled-version","6.0.7");var s=U2();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},W2=function(){function e(t){this.element=dy(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw ko(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),H2=function(){function e(t){this.element=dy(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),K2=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),zp=Df,G2={isServer:!Df,useCSSOMInjection:!T2},ta=function(){function e(t,n,r){t===void 0&&(t=Wr),n===void 0&&(n={});var i=this;this.options=Ie(Ie({},G2),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Df&&zp&&(zp=!1,function(o){for(var s=document.querySelectorAll(V2),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(Ur)!=="active"&&(B2(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Of(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(f){var d=function(h){return ea.get(h)}(f);if(d===void 0)return"continue";var g=o.names.get(d),y=s.getGroup(f);if(g===void 0||y.length===0)return"continue";var v="".concat(Ur,".g").concat(f,'[id="').concat(d,'"]'),x="";g!==void 0&&g.forEach(function(h){h.length>0&&(x+="".concat(h,","))}),l+="".concat(y).concat(v,'{content:"').concat(x,'"}').concat(`/*!sc*/
`)},c=0;c<a;c++)u(c);return l}(i)})}return e.registerId=function(t){return Xo(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ie(Ie({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new K2(i):r?new W2(i):new H2(i)}(this.options),new O2(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Xo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Xo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Xo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Y2=/&/g,X2=/^\s*\/\/.*$/gm;function py(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=py(n.children,t)),n})}function Q2(e){var t,n,r,i=e===void 0?Wr:e,o=i.options,s=o===void 0?Wr:o,a=i.plugins,l=a===void 0?Ia:a,u=function(d,g,y){return y===n||y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):d},c=l.slice();c.push(function(d){d.type===Ra&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(Y2,n).replace(r,u))}),s.prefix&&c.push(k2),c.push(x2);var f=function(d,g,y,v){g===void 0&&(g=""),y===void 0&&(y=""),v===void 0&&(v="&"),t=v,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var x=d.replace(X2,""),h=y2(y||g?"".concat(y," ").concat(g," { ").concat(x," }"):x);s.namespace&&(h=py(h,s.namespace));var p=[];return Js(h,w2(c.concat(S2(function(m){return p.push(m)})))),p};return f.hash=l.length?l.reduce(function(d,g){return g.name||ko(15),kr(d,g.name)},5381).toString():"",f}var q2=new ta,ec=Q2(),hy=N.createContext({shouldForwardProp:void 0,styleSheet:q2,stylis:ec});hy.Consumer;N.createContext(void 0);function tc(){return C.useContext(hy)}var Z2=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=ec);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Of(this,function(){throw ko(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ec),this.name+t.hash},e}(),J2=function(e){return e>="A"&&e<="Z"};function Fp(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;J2(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var my=function(e){return e==null||e===!1||e===""},gy=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!my(o)&&(Array.isArray(o)&&o.isCss||Hr(o)?r.push("".concat(Fp(i),":"),o,";"):oo(o)?r.push.apply(r,io(io(["".concat(i," {")],gy(o),!1),["}"],!1)):r.push("".concat(Fp(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in ry||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Tn(e,t,n,r){if(my(e))return[];if($f(e))return[".".concat(e.styledComponentId)];if(Hr(e)){if(!Hr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Tn(i,t,n,r)}var o;return e instanceof Z2?n?(e.inject(n,r),[e.getName(r)]):[e]:oo(e)?gy(e):Array.isArray(e)?Array.prototype.concat.apply(Ia,e.map(function(s){return Tn(s,t,n,r)})):[e.toString()]}function yy(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Hr(n)&&!$f(n))return!1}return!0}var ek=sy("6.0.7"),tk=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&yy(t),this.componentId=n,this.baseHash=kr(ek,n),this.baseStyle=r,ta.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Fn(i,this.staticRulesId);else{var o=Zu(Tn(this.rules,t,n,r)),s=qu(kr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=Fn(i,s),this.staticRulesId=s}else{for(var l=kr(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var f=this.rules[c];if(typeof f=="string")u+=f;else if(f){var d=Zu(Tn(f,t,n,r));l=kr(l,d),u+=d}}if(u){var g=qu(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=Fn(i,g)}}return i},e}(),Nf=N.createContext(void 0);Nf.Consumer;var Tl={};function nk(e,t,n){var r=$f(e),i=e,o=!Sl(e),s=t.attrs,a=s===void 0?Ia:s,l=t.componentId,u=l===void 0?function(m,w){var T=typeof m!="string"?"sc":Dp(m);Tl[T]=(Tl[T]||0)+1;var E="".concat(T,"-").concat(ay("6.0.7"+T+Tl[T]));return w?"".concat(w,"-").concat(E):E}(t.displayName,t.parentComponentId):l,c=t.displayName;c===void 0&&function(m){return Sl(m)?"styled.".concat(m):"Styled(".concat(b2(m),")")}(e);var f=t.displayName&&t.componentId?"".concat(Dp(t.displayName),"-").concat(t.componentId):t.componentId||u,d=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,g=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var v=t.shouldForwardProp;g=function(m,w){return y(m,w)&&v(m,w)}}else g=y}var x=new tk(n,f,r?i.componentStyle:void 0);function h(m,w){return function(T,E,k){var P=T.attrs,I=T.componentStyle,_=T.defaultProps,$=T.foldedComponentIds,G=T.styledComponentId,ne=T.target,Se=N.useContext(Nf),Ae=tc(),le=T.shouldForwardProp||Ae.shouldForwardProp,ke=function(zt,qe,en){for(var Ze,st=Ie(Ie({},qe),{className:void 0,theme:en}),Ha=0;Ha<zt.length;Ha+=1){var Mo=Hr(Ze=zt[Ha])?Ze(st):Ze;for(var tn in Mo)st[tn]=tn==="className"?Fn(st[tn],Mo[tn]):tn==="style"?Ie(Ie({},st[tn]),Mo[tn]):Mo[tn]}return qe.className&&(st.className=Fn(st.className,qe.className)),st}(P,E,iy(E,Se,_)||Wr),A=ke.as||ne,j={};for(var D in ke)ke[D]===void 0||D[0]==="$"||D==="as"||D==="theme"||(D==="forwardedAs"?j.as=ke.forwardedAs:le&&!le(D,A)||(j[D]=ke[D]));var F=function(zt,qe){var en=tc(),Ze=zt.generateAndInjectStyles(qe,en.styleSheet,en.stylis);return Ze}(I,ke),ee=Fn($,G);return F&&(ee+=" "+F),ke.className&&(ee+=" "+ke.className),j[Sl(A)&&!oy.has(A)?"class":"className"]=ee,j.ref=k,C.createElement(A,j)}(p,m,w)}var p=N.forwardRef(h);return p.attrs=d,p.componentStyle=x,p.shouldForwardProp=g,p.foldedComponentIds=r?Fn(i.foldedComponentIds,i.styledComponentId):"",p.styledComponentId=f,p.target=r?i.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(m){this._foldedDefaultProps=r?function(w){for(var T=[],E=1;E<arguments.length;E++)T[E-1]=arguments[E];for(var k=0,P=T;k<P.length;k++)Ju(w,P[k],!0);return w}({},i.defaultProps,m):m}}),Of(p,function(){return".".concat(p.styledComponentId)}),o&&fy(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function Bp(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Up=function(e){return Object.assign(e,{isCss:!0})};function vy(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Hr(e)||oo(e)){var r=e;return Up(Tn(Bp(Ia,io([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?Tn(i):Up(Tn(Bp(i,t)))}function nc(e,t,n){if(n===void 0&&(n=Wr),!t)throw ko(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,vy.apply(void 0,io([i],o,!1)))};return r.attrs=function(i){return nc(e,t,Ie(Ie({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return nc(e,t,Ie(Ie({},n),i))},r}var xy=function(e){return nc(nk,e)},R=xy;oy.forEach(function(e){R[e]=xy(e)});var rk=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=yy(t),ta.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Zu(Tn(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&ta.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function ik(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=vy.apply(void 0,io([e],t,!1)),i="sc-global-".concat(ay(JSON.stringify(r))),o=new rk(r,i),s=function(l){var u=tc(),c=N.useContext(Nf),f=N.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(f,l,u.styleSheet,c,u.stylis),N.useLayoutEffect(function(){if(!u.styleSheet.server)return a(f,l,u.styleSheet,c,u.stylis),function(){return o.removeStyles(f,u.styleSheet)}},[f,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,f,d){if(o.isStatic)o.renderStyles(l,C2,c,d);else{var g=Ie(Ie({},u),{theme:iy(u,f,s.defaultProps)});o.renderStyles(l,g,c,d)}}return N.memo(s)}const ok=R.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(134, 134, 134, 0.411);
  background-color: rgb(255, 255, 255)
`,sk=R.div`
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
`,ak=R(ei)`
    font-family:var(--logo-font);
      /* font-family: 'Playfair Display', Georgia, serif;  */

 font-size:30px;
  
  /* font-style: italic;
  font-weight:200; */
  color: var(--black-color);
  text-decoration: none;
  letter-spacing: 1px;
  white-space: nowrap;
`,lk=R.div`

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
`,Wp=R.span`
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


`,uk=R.button`
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
`,ck=R.div`
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
`,fk=R.button`
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
`,dk=R.nav`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,hi=R(ei)`
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
`,pk=R.div`
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
`,hk=R.nav`
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
`,mi=R(ei)`
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
`,mk=()=>S.jsxs(hk,{children:[S.jsx(mi,{to:"/",children:"Головна"}),S.jsx(mi,{to:"/about",children:"Про мене"}),S.jsx(mi,{to:"/portfolio",children:"Портфоліо"}),S.jsx(mi,{to:"/tariffs",children:"Тарифи"}),S.jsx(mi,{to:"/contacts",children:"Контакти"})]});/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gk=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yk=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=e=>{const t=yk(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Cl={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vk=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},xk=C.createContext({}),wk=()=>C.useContext(xk),Sk=C.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i="",children:o,iconNode:s,...a},l)=>{const{size:u=24,strokeWidth:c=2,absoluteStrokeWidth:f=!1,color:d="currentColor",className:g=""}=wk()??{},y=r??f?Number(n??c)*24/Number(t??u):n??c;return C.createElement("svg",{ref:l,...Cl,width:t??u??Cl.width,height:t??u??Cl.height,stroke:e??d,strokeWidth:y,className:wy("lucide",g,i),...!o&&!vk(a)&&{"aria-hidden":"true"},...a},[...s.map(([v,x])=>C.createElement(v,x)),...Array.isArray(o)?o:[o]])});/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=(e,t)=>{const n=C.forwardRef(({className:r,...i},o)=>C.createElement(Sk,{ref:o,iconNode:t,className:wy(`lucide-${gk(Hp(e))}`,`lucide-${e}`,r),...i}));return n.displayName=Hp(e),n};/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kk=[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0",key:"12hx5q"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],Tk=sr("briefcase-business",kk);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ck=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Ek=sr("house",Ck);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pk=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],_k=sr("info",Pk);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bk=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Ak=sr("mail",bk);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]],Mk=sr("message-circle-more",Rk);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lk=[["path",{d:"M3 5h18",key:"1u36vt"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 19h18",key:"awlh7x"}]],jk=sr("text-align-justify",Lk);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ik=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Dk=sr("x",Ik);function $k(){const[e,t]=C.useState(!1);return S.jsx(ok,{children:S.jsxs(sk,{children:[S.jsx(ak,{to:"/",children:"Diana J."}),S.jsx(mk,{}),S.jsx(uk,{onClick:()=>t(!e),children:S.jsx(jk,{size:22})}),S.jsx(pk,{open:e,onClick:()=>t(!1)}),S.jsxs(ck,{open:e,children:[S.jsx(fk,{onClick:()=>t(!1),children:S.jsx(Dk,{size:28,strokeWidth:1.5})}),S.jsxs(dk,{children:[S.jsxs(hi,{onClick:()=>t(!1),to:"/",children:[S.jsx(Ek,{color:"#663f88",size:22,strokeWidth:1.5})," Головна"]}),S.jsxs(hi,{onClick:()=>t(!1),to:"/about",children:[S.jsx(_k,{color:"#663f88",size:22,strokeWidth:1.5})," Про мене"]}),S.jsxs(hi,{onClick:()=>t(!1),to:"/portfolio",children:[S.jsx(Tk,{color:"#663f88",size:22,strokeWidth:1.5}),"Портфоліо"]}),S.jsxs(hi,{onClick:()=>t(!1),to:"/tariffs",children:[S.jsx(Mk,{color:"#663f88",size:22,strokeWidth:1.5}),"Тарифи"]}),S.jsxs(hi,{onClick:()=>t(!1),to:"/contacts",children:[S.jsx(Ak,{color:"#663f88",size:22,strokeWidth:1.5})," Контакти"]})]})]}),S.jsxs(lk,{children:[S.jsx(Wp,{children:"м.Київ"}),S.jsx(Wp,{children:"+380 93 000 00 00"})]})]})})}const Ok=R.footer`
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
`,Nk=R.div`
  font-family:var(--logo-font);
  font-size: 26px;

  color: #333;
  text-align: center;

  @media screen and (min-width: 769px) {
    text-align: left; 
  }
`,Vk=R.nav`
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
`,gi=R(ei)`
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
`,zk=R.div`
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
`,Fk=R.p`
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
`,Bk=()=>{const e=new Date().getFullYear();return S.jsxs(Ok,{children:[S.jsx(Nk,{children:"Diana J."}),S.jsxs(Vk,{children:[S.jsx(gi,{to:"/",children:"Головна"}),S.jsx(gi,{to:"about",children:"Про мене"}),S.jsx(gi,{to:"portfolio",children:"Портфоліо"}),S.jsx(gi,{to:"tariffs",children:"Тарифи"}),S.jsx(gi,{to:"contacts",children:"Контакти"})]}),S.jsxs(zk,{children:[S.jsx("span",{children:"м. Київ"}),S.jsx("a",{href:"tel:+380930000000",style:{color:"inherit",textDecoration:"none"},children:"+38 093 000 00 00"})]}),S.jsxs(Fk,{children:["© ",e," Diana J. Photography. All rights reserved."]})]})},Uk=R.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
`,Wk=R.main`
  flex: 1 0 auto; 
`,Hk=()=>S.jsx(S.Fragment,{children:S.jsxs(Uk,{children:[S.jsx($k,{}),S.jsx(Wk,{children:S.jsx(US,{})}),S.jsx(Bk,{})]})});function rc(){return rc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rc.apply(this,arguments)}function Kk(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Gk(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Yk=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Gk(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=Kk(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Le="-ms-",na="-moz-",B="-webkit-",Sy="comm",Vf="rule",zf="decl",Xk="@import",ky="@keyframes",Qk="@layer",qk=Math.abs,Da=String.fromCharCode,Zk=Object.assign;function Jk(e,t){return Ee(e,0)^45?(((t<<2^Ee(e,0))<<2^Ee(e,1))<<2^Ee(e,2))<<2^Ee(e,3):0}function Ty(e){return e.trim()}function eT(e,t){return(e=t.exec(e))?e[0]:e}function U(e,t,n){return e.replace(t,n)}function ic(e,t){return e.indexOf(t)}function Ee(e,t){return e.charCodeAt(t)|0}function so(e,t,n){return e.slice(t,n)}function Mt(e){return e.length}function Ff(e){return e.length}function Qo(e,t){return t.push(e),e}function tT(e,t){return e.map(t).join("")}var $a=1,Kr=1,Cy=0,Qe=0,de=0,ni="";function Oa(e,t,n,r,i,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:$a,column:Kr,length:s,return:""}}function yi(e,t){return Zk(Oa("",null,null,"",null,null,0),e,{length:-e.length},t)}function nT(){return de}function rT(){return de=Qe>0?Ee(ni,--Qe):0,Kr--,de===10&&(Kr=1,$a--),de}function nt(){return de=Qe<Cy?Ee(ni,Qe++):0,Kr++,de===10&&(Kr=1,$a++),de}function Ot(){return Ee(ni,Qe)}function ys(){return Qe}function To(e,t){return so(ni,e,t)}function ao(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ey(e){return $a=Kr=1,Cy=Mt(ni=e),Qe=0,[]}function Py(e){return ni="",e}function vs(e){return Ty(To(Qe-1,oc(e===91?e+2:e===40?e+1:e)))}function iT(e){for(;(de=Ot())&&de<33;)nt();return ao(e)>2||ao(de)>3?"":" "}function oT(e,t){for(;--t&&nt()&&!(de<48||de>102||de>57&&de<65||de>70&&de<97););return To(e,ys()+(t<6&&Ot()==32&&nt()==32))}function oc(e){for(;nt();)switch(de){case e:return Qe;case 34:case 39:e!==34&&e!==39&&oc(de);break;case 40:e===41&&oc(e);break;case 92:nt();break}return Qe}function sT(e,t){for(;nt()&&e+de!==47+10;)if(e+de===42+42&&Ot()===47)break;return"/*"+To(t,Qe-1)+"*"+Da(e===47?e:nt())}function aT(e){for(;!ao(Ot());)nt();return To(e,Qe)}function lT(e){return Py(xs("",null,null,null,[""],e=Ey(e),0,[0],e))}function xs(e,t,n,r,i,o,s,a,l){for(var u=0,c=0,f=s,d=0,g=0,y=0,v=1,x=1,h=1,p=0,m="",w=i,T=o,E=r,k=m;x;)switch(y=p,p=nt()){case 40:if(y!=108&&Ee(k,f-1)==58){ic(k+=U(vs(p),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:k+=vs(p);break;case 9:case 10:case 13:case 32:k+=iT(y);break;case 92:k+=oT(ys()-1,7);continue;case 47:switch(Ot()){case 42:case 47:Qo(uT(sT(nt(),ys()),t,n),l);break;default:k+="/"}break;case 123*v:a[u++]=Mt(k)*h;case 125*v:case 59:case 0:switch(p){case 0:case 125:x=0;case 59+c:h==-1&&(k=U(k,/\f/g,"")),g>0&&Mt(k)-f&&Qo(g>32?Gp(k+";",r,n,f-1):Gp(U(k," ","")+";",r,n,f-2),l);break;case 59:k+=";";default:if(Qo(E=Kp(k,t,n,u,c,i,a,m,w=[],T=[],f),o),p===123)if(c===0)xs(k,t,E,E,w,o,f,a,T);else switch(d===99&&Ee(k,3)===110?100:d){case 100:case 108:case 109:case 115:xs(e,E,E,r&&Qo(Kp(e,E,E,0,0,i,a,m,i,w=[],f),T),i,T,f,a,r?w:T);break;default:xs(k,E,E,E,[""],T,0,a,T)}}u=c=g=0,v=h=1,m=k="",f=s;break;case 58:f=1+Mt(k),g=y;default:if(v<1){if(p==123)--v;else if(p==125&&v++==0&&rT()==125)continue}switch(k+=Da(p),p*v){case 38:h=c>0?1:(k+="\f",-1);break;case 44:a[u++]=(Mt(k)-1)*h,h=1;break;case 64:Ot()===45&&(k+=vs(nt())),d=Ot(),c=f=Mt(m=k+=aT(ys())),p++;break;case 45:y===45&&Mt(k)==2&&(v=0)}}return o}function Kp(e,t,n,r,i,o,s,a,l,u,c){for(var f=i-1,d=i===0?o:[""],g=Ff(d),y=0,v=0,x=0;y<r;++y)for(var h=0,p=so(e,f+1,f=qk(v=s[y])),m=e;h<g;++h)(m=Ty(v>0?d[h]+" "+p:U(p,/&\f/g,d[h])))&&(l[x++]=m);return Oa(e,t,n,i===0?Vf:a,l,u,c)}function uT(e,t,n){return Oa(e,t,n,Sy,Da(nT()),so(e,2,-2),0)}function Gp(e,t,n,r){return Oa(e,t,n,zf,so(e,0,r),so(e,r+1,-1),r)}function Lr(e,t){for(var n="",r=Ff(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function cT(e,t,n,r){switch(e.type){case Qk:if(e.children.length)break;case Xk:case zf:return e.return=e.return||e.value;case Sy:return"";case ky:return e.return=e.value+"{"+Lr(e.children,r)+"}";case Vf:e.value=e.props.join(",")}return Mt(n=Lr(e.children,r))?e.return=e.value+"{"+n+"}":""}function fT(e){var t=Ff(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function dT(e){return function(t){t.root||(t=t.return)&&e(t)}}var pT=function(t,n,r){for(var i=0,o=0;i=o,o=Ot(),i===38&&o===12&&(n[r]=1),!ao(o);)nt();return To(t,Qe)},hT=function(t,n){var r=-1,i=44;do switch(ao(i)){case 0:i===38&&Ot()===12&&(n[r]=1),t[r]+=pT(Qe-1,n,r);break;case 2:t[r]+=vs(i);break;case 4:if(i===44){t[++r]=Ot()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Da(i)}while(i=nt());return t},mT=function(t,n){return Py(hT(Ey(t),n))},Yp=new WeakMap,gT=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Yp.get(r))&&!i){Yp.set(t,!0);for(var o=[],s=mT(n,o),a=r.props,l=0,u=0;l<s.length;l++)for(var c=0;c<a.length;c++,u++)t.props[u]=o[l]?s[l].replace(/&\f/g,a[c]):a[c]+" "+s[l]}}},yT=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function _y(e,t){switch(Jk(e,t)){case 5103:return B+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return B+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return B+e+na+e+Le+e+e;case 6828:case 4268:return B+e+Le+e+e;case 6165:return B+e+Le+"flex-"+e+e;case 5187:return B+e+U(e,/(\w+).+(:[^]+)/,B+"box-$1$2"+Le+"flex-$1$2")+e;case 5443:return B+e+Le+"flex-item-"+U(e,/flex-|-self/,"")+e;case 4675:return B+e+Le+"flex-line-pack"+U(e,/align-content|flex-|-self/,"")+e;case 5548:return B+e+Le+U(e,"shrink","negative")+e;case 5292:return B+e+Le+U(e,"basis","preferred-size")+e;case 6060:return B+"box-"+U(e,"-grow","")+B+e+Le+U(e,"grow","positive")+e;case 4554:return B+U(e,/([^-])(transform)/g,"$1"+B+"$2")+e;case 6187:return U(U(U(e,/(zoom-|grab)/,B+"$1"),/(image-set)/,B+"$1"),e,"")+e;case 5495:case 3959:return U(e,/(image-set\([^]*)/,B+"$1$`$1");case 4968:return U(U(e,/(.+:)(flex-)?(.*)/,B+"box-pack:$3"+Le+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+B+e+e;case 4095:case 3583:case 4068:case 2532:return U(e,/(.+)-inline(.+)/,B+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Mt(e)-1-t>6)switch(Ee(e,t+1)){case 109:if(Ee(e,t+4)!==45)break;case 102:return U(e,/(.+:)(.+)-([^]+)/,"$1"+B+"$2-$3$1"+na+(Ee(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ic(e,"stretch")?_y(U(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ee(e,t+1)!==115)break;case 6444:switch(Ee(e,Mt(e)-3-(~ic(e,"!important")&&10))){case 107:return U(e,":",":"+B)+e;case 101:return U(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+B+(Ee(e,14)===45?"inline-":"")+"box$3$1"+B+"$2$3$1"+Le+"$2box$3")+e}break;case 5936:switch(Ee(e,t+11)){case 114:return B+e+Le+U(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return B+e+Le+U(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return B+e+Le+U(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return B+e+Le+e+e}return e}var vT=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case zf:t.return=_y(t.value,t.length);break;case ky:return Lr([yi(t,{value:U(t.value,"@","@"+B)})],i);case Vf:if(t.length)return tT(t.props,function(o){switch(eT(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Lr([yi(t,{props:[U(o,/:(read-\w+)/,":"+na+"$1")]})],i);case"::placeholder":return Lr([yi(t,{props:[U(o,/:(plac\w+)/,":"+B+"input-$1")]}),yi(t,{props:[U(o,/:(plac\w+)/,":"+na+"$1")]}),yi(t,{props:[U(o,/:(plac\w+)/,Le+"input-$1")]})],i)}return""})}},xT=[vT],wT=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var x=v.getAttribute("data-emotion");x.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||xT,o={},s,a=[];s=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var x=v.getAttribute("data-emotion").split(" "),h=1;h<x.length;h++)o[x[h]]=!0;a.push(v)});var l,u=[gT,yT];{var c,f=[cT,dT(function(v){c.insert(v)})],d=fT(u.concat(i,f)),g=function(x){return Lr(lT(x),d)};l=function(x,h,p,m){c=p,g(x?x+"{"+h.styles+"}":h.styles),m&&(y.inserted[h.name]=!0)}}var y={key:n,sheet:new Yk({key:n,container:s,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:l};return y.sheet.hydrate(a),y},ST=!0;function kT(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var by=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||ST===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},TT=function(t,n,r){by(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function CT(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var ET=/[A-Z]|^ms/g,PT=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ay=function(t){return t.charCodeAt(1)===45},Xp=function(t){return t!=null&&typeof t!="boolean"},El=Qg(function(e){return Ay(e)?e:e.replace(ET,"-$&").toLowerCase()}),Qp=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(PT,function(r,i,o){return Lt={name:i,styles:o,next:Lt},i})}return ry[t]!==1&&!Ay(t)&&typeof n=="number"&&n!==0?n+"px":n};function lo(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Lt={name:n.name,styles:n.styles,next:Lt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Lt={name:r.name,styles:r.styles,next:Lt},r=r.next;var i=n.styles+";";return i}return _T(e,t,n)}case"function":{if(e!==void 0){var o=Lt,s=n(e);return Lt=o,lo(e,t,s)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function _T(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=lo(e,t,n[i])+";";else for(var o in n){var s=n[o];if(typeof s!="object")t!=null&&t[s]!==void 0?r+=o+"{"+t[s]+"}":Xp(s)&&(r+=El(o)+":"+Qp(o,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(t==null||t[s[0]]===void 0))for(var a=0;a<s.length;a++)Xp(s[a])&&(r+=El(o)+":"+Qp(o,s[a])+";");else{var l=lo(e,t,s);switch(o){case"animation":case"animationName":{r+=El(o)+":"+l+";";break}default:r+=o+"{"+l+"}"}}}return r}var qp=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Lt,bT=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";Lt=void 0;var s=t[0];s==null||s.raw===void 0?(i=!1,o+=lo(r,n,s)):o+=s[0];for(var a=1;a<t.length;a++)o+=lo(r,n,t[a]),i&&(o+=s[a]);qp.lastIndex=0;for(var l="",u;(u=qp.exec(o))!==null;)l+="-"+u[1];var c=CT(o)+l;return{name:c,styles:o,next:Lt}},AT=function(t){return t()},RT=ql["useInsertionEffect"]?ql["useInsertionEffect"]:!1,MT=RT||AT,Ry=C.createContext(typeof HTMLElement<"u"?wT({key:"css"}):null);Ry.Provider;var LT=function(t){return C.forwardRef(function(n,r){var i=C.useContext(Ry);return t(n,i,r)})},jT=C.createContext({}),IT=r2,DT=function(t){return t!=="theme"},Zp=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?IT:DT},Jp=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(s){return t.__emotion_forwardProp(s)&&o(s)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},$T=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return by(n,r,i),MT(function(){return TT(n,r,i)}),null},OT=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,s;n!==void 0&&(o=n.label,s=n.target);var a=Jp(t,n,r),l=a||Zp(i),u=!l("as");return function(){var c=arguments,f=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&f.push("label:"+o+";"),c[0]==null||c[0].raw===void 0)f.push.apply(f,c);else{f.push(c[0][0]);for(var d=c.length,g=1;g<d;g++)f.push(c[g],c[0][g])}var y=LT(function(v,x,h){var p=u&&v.as||i,m="",w=[],T=v;if(v.theme==null){T={};for(var E in v)T[E]=v[E];T.theme=C.useContext(jT)}typeof v.className=="string"?m=kT(x.registered,w,v.className):v.className!=null&&(m=v.className+" ");var k=bT(f.concat(w),x.registered,T);m+=x.key+"-"+k.name,s!==void 0&&(m+=" "+s);var P=u&&a===void 0?Zp(p):l,I={};for(var _ in v)u&&_==="as"||P(_)&&(I[_]=v[_]);return I.className=m,I.ref=h,C.createElement(C.Fragment,null,C.createElement($T,{cache:x,serialized:k,isStringTag:typeof p=="string"}),C.createElement(p,I))});return y.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",y.defaultProps=t.defaultProps,y.__emotion_real=y,y.__emotion_base=i,y.__emotion_styles=f,y.__emotion_forwardProp=a,Object.defineProperty(y,"toString",{value:function(){return"."+s}}),y.withComponent=function(v,x){return e(v,rc({},n,x,{shouldForwardProp:Jp(y,x,!0)})).apply(void 0,f)},y}},NT=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Gr=OT.bind();NT.forEach(function(e){Gr[e]=Gr(e)});const VT=Gr.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 500px;
`,zT=Gr.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`,FT=()=>S.jsx(VT,{children:S.jsx(zT,{children:"404"})});const BT=Gr.div`
  width: 100%;
  height: 100vh;
 
`,UT=ik`
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

 
`,WT=R.div`
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
`,HT=R.section`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: stretch; 
    justify-content: center; 
    gap: 50px; 
  }
`,KT=R.div`
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
`,GT=R.h2`
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
`,YT=R.img`
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
`,XT=R.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,QT=R.div`
  display: flex;
  flex-direction: column;
  /* gap: 12px; */

  @media screen and (min-width: 768px) {
   
  }
`,eh=R.p`
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
`,qT=R.div`
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
`,ZT=R.img`
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
`,JT=R.img`
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
`,eC=()=>S.jsx(WT,{children:S.jsxs(HT,{children:[S.jsxs(KT,{children:[S.jsx(YT,{src:"/portfolio/images/img9.JPG",alt:"main-photo",loading:"lazy"}),S.jsxs(QT,{children:[S.jsx(GT,{children:"Про мене"}),S.jsxs(XT,{children:[S.jsxs(eh,{children:["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat consequatur adipisci nobis atque quibusdam ipsam dolor quasi qui doloribus totam."," "]}),S.jsxs(eh,{children:["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat consequatur adipisci nobis atque quibusdam ipsam dolor quasi qui doloribus totam."," "]})]})]})]}),S.jsxs(qT,{children:[S.jsx(ZT,{loading:"lazy",src:"/portfolio/images/img8.JPG",alt:"top-image"}),S.jsx(JT,{loading:"lazy",src:"/portfolio/images/img10.JPG",alt:"bottom-image"})]})]})}),tC=R.section`


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
`,nC=R.div`
  z-index: 2;
  @media screen and (min-width: 769px) {
   max-width: 50%
  }
 @media screen and (min-width: 1200px) {
   
  }
`,rC=R.span`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #aaaaaa;
  display: block;
  margin-bottom: 1rem;
`,iC=R.h1`

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
`,oC=R.p`
  font-size: 1rem;
  color: #cccccc;
  margin-bottom: 2.5rem;
  font-weight: 300;
`,sC=R.button`
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
`;R.div`
  position: relative;
  width: 45%;
  height: 70vh;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(20%);
  }
`;function aC(){return S.jsx(tC,{children:S.jsxs(nC,{children:[S.jsx(rC,{children:"Фотограф"}),S.jsx(iC,{children:"Діана Прізвище"}),S.jsx(oC,{children:"Сучасні та креативні зйомки бла бла бла бла"}),S.jsx(sC,{children:"запис"})]})})}const lC=R.section`
    /* background-color:#ede4f566; */
    width: 100vw;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);`,uC=R.div`
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
  
`,cC=R.div`
       display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;


`,fC=R.h2`
font-size:40px;
font-family: var(--second-font);
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    margin-bottom: 20px;

     @media screen and (min-width: 768px) {
   text-align: left;  margin-bottom: 30px;
  }
    
`,dC=R.div`
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
`,pC=R.div`
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
`,hC=R.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* filter: grayscale(100%);  */
  transition: filter 0.4s ease, transform 0.4s ease;

  &:hover {
    /* filter: grayscale(0%); */
    transform: scale(1.02);
  }
`,mC=R(ei)`
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
`,gC=R(ei)`
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
`,yC=()=>{const e=[{id:1,category:"events",src:"https://images.unsplash.com/photo-1519741497674-611481863552",type:"small",alt:"Весілля пара"},{id:2,category:"events",src:"https://images.unsplash.com/photo-1595152772835-219674b2a8a6",type:"small",alt:"Наречена біля вікна"},{id:3,category:"portrait",src:"https://images.unsplash.com/photo-1534528741775-53994a69daeb",type:"wide",alt:"Портрет дівчини в кашкеті"},{id:4,category:"portrait",src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",type:"tall",alt:"Обійми на пероні"}];return S.jsx(lC,{children:S.jsxs(uC,{children:[S.jsxs(cC,{children:[S.jsx(fC,{children:"Портфоліо"}),S.jsx(mC,{to:"/portfolio",children:"Переглянути портфоліо"})]}),S.jsx(dC,{className:"asymmetric",children:e.map(t=>S.jsx(pC,{$type:t.type,$layout:"asymmetric",children:S.jsx(hC,{src:t.src,alt:t.alt})},t.id))}),S.jsx(gC,{to:"/portfolio",children:"Переглянути портфоліо"})]})})},vC=Gr.div`
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
`,My=C.createContext({});function xC(e){const t=C.useRef(null);return t.current===null&&(t.current=e()),t.current}const wC=typeof window<"u",SC=wC?C.useLayoutEffect:C.useEffect,Bf=C.createContext(null);function Uf(e,t){e.indexOf(t)===-1&&e.push(t)}function ra(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const Vt=(e,t,n)=>n>t?t:n<e?e:n;function th(e,t){return t?`${e}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${t}`:e}let Co=()=>{},tr=()=>{};var Pm;typeof process<"u"&&((Pm=process.env)==null?void 0:Pm.NODE_ENV)!=="production"&&(Co=(e,t,n)=>{!e&&typeof console<"u"&&console.warn(th(t,n))},tr=(e,t,n)=>{if(!e)throw new Error(th(t,n))});const Pn={},Ly=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),jy=e=>typeof e=="object"&&e!==null,Iy=e=>/^0[^.\s]+$/u.test(e);function Dy(e){let t;return()=>(t===void 0&&(t=e()),t)}const dt=e=>e,Eo=(...e)=>e.reduce((t,n)=>r=>n(t(r))),uo=(e,t,n)=>{const r=t-e;return r?(n-e)/r:1};class Wf{constructor(){this.subscriptions=[]}add(t){return Uf(this.subscriptions,t),()=>ra(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Xe=e=>e*1e3,ct=e=>e/1e3,$y=(e,t)=>t?e*(1e3/t):0,Oy=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,kC=1e-7,TC=12;function CC(e,t,n,r,i){let o,s,a=0;do s=t+(n-t)/2,o=Oy(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>kC&&++a<TC);return s}function Po(e,t,n,r){if(e===t&&n===r)return dt;const i=o=>CC(o,0,1,e,n);return o=>o===0||o===1?o:Oy(i(o),t,r)}const Ny=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Vy=e=>t=>1-e(1-t),zy=Po(.33,1.53,.69,.99),Hf=Vy(zy),Fy=Ny(Hf),By=e=>e>=1?1:(e*=2)<1?.5*Hf(e):.5*(2-Math.pow(2,-10*(e-1))),Kf=e=>1-Math.sin(Math.acos(e)),Uy=Vy(Kf),Wy=Ny(Kf),EC=Po(.42,0,1,1),PC=Po(0,0,.58,1),Hy=Po(.42,0,.58,1),_C=e=>Array.isArray(e)&&typeof e[0]!="number",Ky=e=>Array.isArray(e)&&typeof e[0]=="number",nh={linear:dt,easeIn:EC,easeInOut:Hy,easeOut:PC,circIn:Kf,circInOut:Wy,circOut:Uy,backIn:Hf,backInOut:Fy,backOut:zy,anticipate:By},bC=e=>typeof e=="string",rh=e=>{if(Ky(e)){tr(e.length===4,"Cubic bezier arrays must contain four numerical values.","cubic-bezier-length");const[t,n,r,i]=e;return Po(t,n,r,i)}else if(bC(e))return tr(nh[e]!==void 0,`Invalid easing type '${e}'`,"invalid-easing-type"),nh[e];return e},qo=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],ih={value:null,addProjectionMetrics:null};function AC(e,t){let n=new Set,r=new Set,i=!1,o=!1;const s=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1},l=0;function u(f){s.has(f)&&(c.schedule(f),e()),l++,f(a)}const c={schedule:(f,d=!1,g=!1)=>{const v=g&&i?n:r;return d&&s.add(f),v.add(f),f},cancel:f=>{r.delete(f),s.delete(f)},process:f=>{if(a=f,i){o=!0;return}i=!0;const d=n;n=r,r=d,n.forEach(u),t&&ih.value&&ih.value.frameloop[t].push(l),l=0,n.clear(),i=!1,o&&(o=!1,c.process(f))}};return c}const RC=40;function Gy(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,s=qo.reduce((m,w)=>(m[w]=AC(o,t?w:void 0),m),{}),{setup:a,read:l,resolveKeyframes:u,preUpdate:c,update:f,preRender:d,render:g,postRender:y}=s,v=()=>{const m=Pn.useManualTiming,w=m?i.timestamp:performance.now();n=!1,m||(i.delta=r?1e3/60:Math.max(Math.min(w-i.timestamp,RC),1)),i.timestamp=w,i.isProcessing=!0,a.process(i),l.process(i),u.process(i),c.process(i),f.process(i),d.process(i),g.process(i),y.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(v))},x=()=>{n=!0,r=!0,i.isProcessing||e(v)};return{schedule:qo.reduce((m,w)=>{const T=s[w];return m[w]=(E,k=!1,P=!1)=>(n||x(),T.schedule(E,k,P)),m},{}),cancel:m=>{for(let w=0;w<qo.length;w++)s[qo[w]].cancel(m)},state:i,steps:s}}const{schedule:X,cancel:_n,state:Ce,steps:Pl}=Gy(typeof requestAnimationFrame<"u"?requestAnimationFrame:dt,!0);let ws;function MC(){ws=void 0}const Ne={now:()=>(ws===void 0&&Ne.set(Ce.isProcessing||Pn.useManualTiming?Ce.timestamp:performance.now()),ws),set:e=>{ws=e,queueMicrotask(MC)}},Yy=e=>t=>typeof t=="string"&&t.startsWith(e),Xy=Yy("--"),LC=Yy("var(--"),Gf=e=>LC(e)?jC.test(e.split("/*")[0].trim()):!1,jC=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function oh(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const ri={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},co={...ri,transform:e=>Vt(0,1,e)},Zo={...ri,default:1},Di=e=>Math.round(e*1e5)/1e5,Yf=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function IC(e){return e==null}const DC=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Xf=(e,t)=>n=>!!(typeof n=="string"&&DC.test(n)&&n.startsWith(e)||t&&!IC(n)&&Object.prototype.hasOwnProperty.call(n,t)),Qy=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,o,s,a]=r.match(Yf);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},$C=e=>Vt(0,255,e),_l={...ri,transform:e=>Math.round($C(e))},Bn={test:Xf("rgb","red"),parse:Qy("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+_l.transform(e)+", "+_l.transform(t)+", "+_l.transform(n)+", "+Di(co.transform(r))+")"};function OC(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const sc={test:Xf("#"),parse:OC,transform:Bn.transform},_o=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Ft=_o("deg"),Nt=_o("%"),L=_o("px"),NC=_o("vh"),VC=_o("vw"),sh=(()=>({...Nt,parse:e=>Nt.parse(e)/100,transform:e=>Nt.transform(e*100)}))(),Tr={test:Xf("hsl","hue"),parse:Qy("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Nt.transform(Di(t))+", "+Nt.transform(Di(n))+", "+Di(co.transform(r))+")"},ce={test:e=>Bn.test(e)||sc.test(e)||Tr.test(e),parse:e=>Bn.test(e)?Bn.parse(e):Tr.test(e)?Tr.parse(e):sc.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Bn.transform(e):Tr.transform(e),getAnimatableNone:e=>{const t=ce.parse(e);return t.alpha=0,ce.transform(t)}},zC=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function FC(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Yf))==null?void 0:t.length)||0)+(((n=e.match(zC))==null?void 0:n.length)||0)>0}const qy="number",Zy="color",BC="var",UC="var(",ah="${}",WC=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Yr(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const a=t.replace(WC,l=>(ce.test(l)?(r.color.push(o),i.push(Zy),n.push(ce.parse(l))):l.startsWith(UC)?(r.var.push(o),i.push(BC),n.push(l)):(r.number.push(o),i.push(qy),n.push(parseFloat(l))),++o,ah)).split(ah);return{values:n,split:a,indexes:r,types:i}}function HC(e){return Yr(e).values}function Jy({split:e,types:t}){const n=e.length;return r=>{let i="";for(let o=0;o<n;o++)if(i+=e[o],r[o]!==void 0){const s=t[o];s===qy?i+=Di(r[o]):s===Zy?i+=ce.transform(r[o]):i+=r[o]}return i}}function KC(e){return Jy(Yr(e))}const GC=e=>typeof e=="number"?0:ce.test(e)?ce.getAnimatableNone(e):e,YC=(e,t)=>typeof e=="number"?t!=null&&t.trim().endsWith("/")?e:0:GC(e);function XC(e){const t=Yr(e);return Jy(t)(t.values.map((r,i)=>YC(r,t.split[i])))}const Et={test:FC,parse:HC,createTransformer:KC,getAnimatableNone:XC};function bl(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function QC({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=bl(l,a,e+1/3),o=bl(l,a,e),s=bl(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}function ia(e,t){return n=>n>0?t:e}const Y=(e,t,n)=>e+(t-e)*n,Al=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},qC=[sc,Bn,Tr],ZC=e=>qC.find(t=>t.test(e));function lh(e){const t=ZC(e);if(Co(!!t,`'${e}' is not an animatable color. Use the equivalent color code instead.`,"color-not-animatable"),!t)return!1;let n=t.parse(e);return t===Tr&&(n=QC(n)),n}const uh=(e,t)=>{const n=lh(e),r=lh(t);if(!n||!r)return ia(e,t);const i={...n};return o=>(i.red=Al(n.red,r.red,o),i.green=Al(n.green,r.green,o),i.blue=Al(n.blue,r.blue,o),i.alpha=Y(n.alpha,r.alpha,o),Bn.transform(i))},ac=new Set(["none","hidden"]);function JC(e,t){return ac.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function eE(e,t){return n=>Y(e,t,n)}function Qf(e){return typeof e=="number"?eE:typeof e=="string"?Gf(e)?ia:ce.test(e)?uh:rE:Array.isArray(e)?ev:typeof e=="object"?ce.test(e)?uh:tE:ia}function ev(e,t){const n=[...e],r=n.length,i=e.map((o,s)=>Qf(o)(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}}function tE(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Qf(e[i])(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function nE(e,t){const n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const o=t.types[i],s=e.indexes[o][r[o]],a=e.values[s]??0;n[i]=a,r[o]++}return n}const rE=(e,t)=>{const n=Et.createTransformer(t),r=Yr(e),i=Yr(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?ac.has(e)&&!i.values.length||ac.has(t)&&!r.values.length?JC(e,t):Eo(ev(nE(r,i),i.values),n):(Co(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,"complex-values-different"),ia(e,t))};function tv(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?Y(e,t,n):Qf(e)(e,t)}const iE=e=>{const t=({timestamp:n})=>e(n);return{start:(n=!0)=>X.update(t,n),stop:()=>_n(t),now:()=>Ce.isProcessing?Ce.timestamp:Ne.now()}},nv=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let o=0;o<i;o++)r+=Math.round(e(o/(i-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},oa=2e4;function qf(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<oa;)t+=n,r=e.next(t);return t>=oa?1/0:t}function oE(e,t=100,n){const r=n({...e,keyframes:[0,t]}),i=Math.min(qf(r),oa);return{type:"keyframes",ease:o=>r.next(i*o).value/t,duration:ct(i)}}const re={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function lc(e,t){return e*Math.sqrt(1-t*t)}const sE=12;function aE(e,t,n){let r=n;for(let i=1;i<sE;i++)r=r-e(r)/t(r);return r}const Rl=.001;function lE({duration:e=re.duration,bounce:t=re.bounce,velocity:n=re.velocity,mass:r=re.mass}){let i,o;Co(e<=Xe(re.maxDuration),"Spring duration must be 10 seconds or less","spring-duration-limit");let s=1-t;s=Vt(re.minDamping,re.maxDamping,s),e=Vt(re.minDuration,re.maxDuration,ct(e)),s<1?(i=u=>{const c=u*s,f=c*e,d=c-n,g=lc(u,s),y=Math.exp(-f);return Rl-d/g*y},o=u=>{const f=u*s*e,d=f*n+n,g=Math.pow(s,2)*Math.pow(u,2)*e,y=Math.exp(-f),v=lc(Math.pow(u,2),s);return(-i(u)+Rl>0?-1:1)*((d-g)*y)/v}):(i=u=>{const c=Math.exp(-u*e),f=(u-n)*e+1;return-Rl+c*f},o=u=>{const c=Math.exp(-u*e),f=(n-u)*(e*e);return c*f});const a=5/e,l=aE(i,o,a);if(e=Xe(e),isNaN(l))return{stiffness:re.stiffness,damping:re.damping,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const uE=["duration","bounce"],cE=["stiffness","damping","mass"];function ch(e,t){return t.some(n=>e[n]!==void 0)}function fE(e){let t={velocity:re.velocity,stiffness:re.stiffness,damping:re.damping,mass:re.mass,isResolvedFromDuration:!1,...e};if(!ch(e,cE)&&ch(e,uE))if(t.velocity=0,e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,o=2*Vt(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:re.mass,stiffness:i,damping:o}}else{const n=lE({...e,velocity:0});t={...t,...n,mass:re.mass},t.isResolvedFromDuration=!0}return t}function sa(e=re.visualDuration,t=re.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const o=n.keyframes[0],s=n.keyframes[n.keyframes.length-1],a={done:!1,value:o},{stiffness:l,damping:u,mass:c,duration:f,velocity:d,isResolvedFromDuration:g}=fE({...n,velocity:-ct(n.velocity||0)}),y=d||0,v=u/(2*Math.sqrt(l*c)),x=s-o,h=ct(Math.sqrt(l/c)),p=Math.abs(x)<5;r||(r=p?re.restSpeed.granular:re.restSpeed.default),i||(i=p?re.restDelta.granular:re.restDelta.default);let m,w,T,E,k,P;if(v<1)T=lc(h,v),E=(y+v*h*x)/T,m=_=>{const $=Math.exp(-v*h*_);return s-$*(E*Math.sin(T*_)+x*Math.cos(T*_))},k=v*h*E+x*T,P=v*h*x-E*T,w=_=>Math.exp(-v*h*_)*(k*Math.sin(T*_)+P*Math.cos(T*_));else if(v===1){m=$=>s-Math.exp(-h*$)*(x+(y+h*x)*$);const _=y+h*x;w=$=>Math.exp(-h*$)*(h*_*$-y)}else{const _=h*Math.sqrt(v*v-1);m=Se=>{const Ae=Math.exp(-v*h*Se),le=Math.min(_*Se,300);return s-Ae*((y+v*h*x)*Math.sinh(le)+_*x*Math.cosh(le))/_};const $=(y+v*h*x)/_,G=v*h*$-x*_,ne=v*h*x-$*_;w=Se=>{const Ae=Math.exp(-v*h*Se),le=Math.min(_*Se,300);return Ae*(G*Math.sinh(le)+ne*Math.cosh(le))}}const I={calculatedDuration:g&&f||null,velocity:_=>Xe(w(_)),next:_=>{if(!g&&v<1){const G=Math.exp(-v*h*_),ne=Math.sin(T*_),Se=Math.cos(T*_),Ae=s-G*(E*ne+x*Se),le=Xe(G*(k*ne+P*Se));return a.done=Math.abs(le)<=r&&Math.abs(s-Ae)<=i,a.value=a.done?s:Ae,a}const $=m(_);if(g)a.done=_>=f;else{const G=Xe(w(_));a.done=Math.abs(G)<=r&&Math.abs(s-$)<=i}return a.value=a.done?s:$,a},toString:()=>{const _=Math.min(qf(I),oa),$=nv(G=>I.next(_*G).value,_,30);return _+"ms "+$},toTransition:()=>{}};return I}sa.applyToOptions=e=>{const t=oE(e,100,sa);return e.ease=t.ease,e.duration=Xe(t.duration),e.type="keyframes",e};const dE=5;function rv(e,t,n){const r=Math.max(t-dE,0);return $y(n-e(r),t-r)}function uc({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:u=.5,restSpeed:c}){const f=e[0],d={done:!1,value:f},g=P=>a!==void 0&&P<a||l!==void 0&&P>l,y=P=>a===void 0?l:l===void 0||Math.abs(a-P)<Math.abs(l-P)?a:l;let v=n*t;const x=f+v,h=s===void 0?x:s(x);h!==x&&(v=h-f);const p=P=>-v*Math.exp(-P/r),m=P=>h+p(P),w=P=>{const I=p(P),_=m(P);d.done=Math.abs(I)<=u,d.value=d.done?h:_};let T,E;const k=P=>{g(d.value)&&(T=P,E=sa({keyframes:[d.value,y(d.value)],velocity:rv(m,P,d.value),damping:i,stiffness:o,restDelta:u,restSpeed:c}))};return k(0),{calculatedDuration:null,next:P=>{let I=!1;return!E&&T===void 0&&(I=!0,w(P),k(P)),T!==void 0&&P>=T?E.next(P-T):(!I&&w(P),d)}}}function pE(e,t,n){const r=[],i=n||Pn.mix||tv,o=e.length-1;for(let s=0;s<o;s++){let a=i(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||dt:t;a=Eo(l,a)}r.push(a)}return r}function hE(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(tr(o===t.length,"Both input and output ranges must be the same length","range-length"),o===1)return()=>t[0];if(o===2&&t[0]===t[1])return()=>t[1];const s=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=pE(t,r,i),l=a.length,u=c=>{if(s&&c<e[0])return t[0];let f=0;if(l>1)for(;f<e.length-2&&!(c<e[f+1]);f++);const d=uo(e[f],e[f+1],c);return a[f](d)};return n?c=>u(Vt(e[0],e[o-1],c)):u}function mE(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=uo(0,t,r);e.push(Y(n,1,i))}}function gE(e){const t=[0];return mE(t,e.length-1),t}function yE(e,t){return e.map(n=>n*t)}function vE(e,t){return e.map(()=>t||Hy).splice(0,e.length-1)}function $i({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=_C(r)?r.map(rh):rh(r),o={done:!1,value:t[0]},s=yE(n&&n.length===t.length?n:gE(t),e),a=hE(s,t,{ease:Array.isArray(i)?i:vE(t,i)});return{calculatedDuration:e,next:l=>(o.value=a(l),o.done=l>=e,o)}}const xE=e=>e!==null;function Na(e,{repeat:t,repeatType:n="loop"},r,i=1){const o=e.filter(xE),a=i<0||t&&n!=="loop"&&t%2===1?0:o.length-1;return!a||r===void 0?o[a]:r}const wE={decay:uc,inertia:uc,tween:$i,keyframes:$i,spring:sa};function iv(e){typeof e.type=="string"&&(e.type=wE[e.type])}class Zf{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const SE=e=>e/100;class aa extends Zf{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var r,i;const{motionValue:n}=this.options;n&&n.updatedAt!==Ne.now()&&this.tick(Ne.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(r=this.options).onStop)==null||i.call(r))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;iv(t);const{type:n=$i,repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:s=0}=t;let{keyframes:a}=t;const l=n||$i;l!==$i&&typeof a[0]!="number"&&(this.mixKeyframes=Eo(SE,tv(a[0],a[1])),a=[0,100]);const u=l({...t,keyframes:a});o==="mirror"&&(this.mirroredGenerator=l({...t,keyframes:[...a].reverse(),velocity:-s})),u.calculatedDuration===null&&(u.calculatedDuration=qf(u));const{calculatedDuration:c}=u;this.calculatedDuration=c,this.resolvedDuration=c+i,this.totalDuration=this.resolvedDuration*(r+1)-i,this.generator=u}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:r,totalDuration:i,mixKeyframes:o,mirroredGenerator:s,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return r.next(0);const{delay:u=0,keyframes:c,repeat:f,repeatType:d,repeatDelay:g,type:y,onUpdate:v,finalKeyframe:x}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-i/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const h=this.currentTime-u*(this.playbackSpeed>=0?1:-1),p=this.playbackSpeed>=0?h<0:h>i;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let m=this.currentTime,w=r;if(f){const P=Math.min(this.currentTime,i)/a;let I=Math.floor(P),_=P%1;!_&&P>=1&&(_=1),_===1&&I--,I=Math.min(I,f+1),!!(I%2)&&(d==="reverse"?(_=1-_,g&&(_-=g/a)):d==="mirror"&&(w=s)),m=Vt(0,1,_)*a}let T;p?(this.delayState.value=c[0],T=this.delayState):T=w.next(m),o&&!p&&(T.value=o(T.value));let{done:E}=T;!p&&l!==null&&(E=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const k=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&E);return k&&y!==uc&&(T.value=Na(c,this.options,x,this.speed)),v&&v(T.value),k&&this.finish(),T}then(t,n){return this.finished.then(t,n)}get duration(){return ct(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+ct(t)}get time(){return ct(this.currentTime)}set time(t){t=Xe(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=t,this.tick(t))}getGeneratorVelocity(){const t=this.currentTime;if(t<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(t);const n=this.generator.next(t).value;return rv(r=>this.generator.next(r).value,t,n)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;n&&this.driver&&this.updateTime(Ne.now()),this.playbackSpeed=t,n&&this.driver&&(this.time=ct(this.currentTime))}play(){var i,o;if(this.isStopped)return;const{driver:t=iE,startTime:n}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),(o=(i=this.options).onPlay)==null||o.call(i);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=n??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Ne.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}function kE(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const Un=e=>e*180/Math.PI,cc=e=>{const t=Un(Math.atan2(e[1],e[0]));return fc(t)},TE={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:cc,rotateZ:cc,skewX:e=>Un(Math.atan(e[1])),skewY:e=>Un(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},fc=e=>(e=e%360,e<0&&(e+=360),e),fh=cc,dh=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),ph=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),CE={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:dh,scaleY:ph,scale:e=>(dh(e)+ph(e))/2,rotateX:e=>fc(Un(Math.atan2(e[6],e[5]))),rotateY:e=>fc(Un(Math.atan2(-e[2],e[0]))),rotateZ:fh,rotate:fh,skewX:e=>Un(Math.atan(e[4])),skewY:e=>Un(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function dc(e){return e.includes("scale")?1:0}function pc(e,t){if(!e||e==="none")return dc(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=CE,i=n;else{const a=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=TE,i=a}if(!i)return dc(t);const o=r[t],s=i[1].split(",").map(PE);return typeof o=="function"?o(s):s[o]}const EE=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return pc(n,t)};function PE(e){return parseFloat(e.trim())}const ii=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],oi=(()=>new Set([...ii,"pathRotation"]))(),hh=e=>e===ri||e===L,_E=new Set(["x","y","z"]),bE=ii.filter(e=>!_E.has(e));function AE(e){const t=[];return bE.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const pn={width:({x:e},{paddingLeft:t="0",paddingRight:n="0",boxSizing:r})=>{const i=e.max-e.min;return r==="border-box"?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t="0",paddingBottom:n="0",boxSizing:r})=>{const i=e.max-e.min;return r==="border-box"?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>pc(t,"x"),y:(e,{transform:t})=>pc(t,"y")};pn.translateX=pn.x;pn.translateY=pn.y;const Gn=new Set;let hc=!1,mc=!1,gc=!1;function ov(){if(mc){const e=Array.from(Gn).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=AE(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,s])=>{var a;(a=r.getValue(o))==null||a.set(s)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}mc=!1,hc=!1,Gn.forEach(e=>e.complete(gc)),Gn.clear()}function sv(){Gn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(mc=!0)})}function RE(){gc=!0,sv(),ov(),gc=!1}class Jf{constructor(t,n,r,i,o,s=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=s}scheduleResolve(){this.state="scheduled",this.isAsync?(Gn.add(this),hc||(hc=!0,X.read(sv),X.resolveKeyframes(ov))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;if(t[0]===null){const o=i==null?void 0:i.get(),s=t[t.length-1];if(o!==void 0)t[0]=o;else if(r&&n){const a=r.readValue(n,s);a!=null&&(t[0]=a)}t[0]===void 0&&(t[0]=s),i&&o===void 0&&i.set(t[0])}kE(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),Gn.delete(this)}cancel(){this.state==="scheduled"&&(Gn.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const ME=e=>e.startsWith("--");function av(e,t,n){ME(t)?e.style.setProperty(t,n):e.style[t]=n}const LE={};function lv(e,t){const n=Dy(e);return()=>LE[t]??n()}const jE=lv(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),uv=lv(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ci=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,mh={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ci([0,.65,.55,1]),circOut:Ci([.55,0,1,.45]),backIn:Ci([.31,.01,.66,-.59]),backOut:Ci([.33,1.53,.69,.99])};function cv(e,t){if(e)return typeof e=="function"?uv()?nv(e,t):"ease-out":Ky(e)?Ci(e):Array.isArray(e)?e.map(n=>cv(n,t)||mh.easeOut):mh[e]}function IE(e,t,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:s="loop",ease:a="easeOut",times:l}={},u=void 0){const c={[t]:n};l&&(c.offset=l);const f=cv(a,i);Array.isArray(f)&&(c.easing=f);const d={delay:r,duration:i,easing:Array.isArray(f)?"linear":f,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"};return u&&(d.pseudoElement=u),e.animate(c,d)}function fv(e){return typeof e=="function"&&"applyToOptions"in e}function DE({type:e,...t}){return fv(e)&&uv()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class dv extends Zf{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:n,name:r,keyframes:i,pseudoElement:o,allowFlatten:s=!1,finalKeyframe:a,onComplete:l}=t;this.isPseudoElement=!!o,this.allowFlatten=s,this.options=t,tr(typeof t.type!="string",`Mini animate() doesn't support "type" as a string.`,"mini-spring");const u=DE(t);this.animation=IE(n,r,i,u,o),u.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!o){const c=Na(i,this.options,a,this.speed);this.updateMotionValue&&this.updateMotionValue(c),av(n,r,c),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,r,i;const t=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(t!=null&&t.isConnected)&&((i=(r=this.animation).commitStyles)==null||i.call(r))}get duration(){var n,r;const t=((r=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:r.call(n).duration)||0;return ct(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+ct(t)}get time(){return ct(Number(this.animation.currentTime)||0)}set time(t){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Xe(t),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,rangeStart:n,rangeEnd:r,observe:i}){var o;return this.allowFlatten&&((o=this.animation.effect)==null||o.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&jE()?(this.animation.timeline=t,n&&(this.animation.rangeStart=n),r&&(this.animation.rangeEnd=r),dt):i(this)}}const pv={anticipate:By,backInOut:Fy,circInOut:Wy};function $E(e){return e in pv}function OE(e){typeof e.ease=="string"&&$E(e.ease)&&(e.ease=pv[e.ease])}const Ml=10;class NE extends dv{constructor(t){OE(t),iv(t),super(t),t.startTime!==void 0&&t.autoplay!==!1&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:r,onComplete:i,element:o,...s}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const a=new aa({...s,autoplay:!1}),l=Math.max(Ml,Ne.now()-this.startTime),u=Vt(0,Ml,l-Ml),c=a.sample(l).value,{name:f}=this.options;o&&f&&av(o,f,c),n.setWithVelocity(a.sample(Math.max(0,l-u)).value,c,u),a.stop()}}const gh=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Et.test(e)||e==="0")&&!e.startsWith("url("));function VE(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function zE(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const o=e[e.length-1],s=gh(i,t),a=gh(o,t);return Co(s===a,`You are trying to animate ${t} from "${i}" to "${o}". "${s?o:i}" is not an animatable value.`,"value-not-animatable"),!s||!a?!1:VE(e)||(n==="spring"||fv(n))&&r}function yc(e){e.duration=0,e.type="keyframes"}const hv=new Set(["opacity","clipPath","filter","transform"]),FE=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function BE(e){for(let t=0;t<e.length;t++)if(typeof e[t]=="string"&&FE.test(e[t]))return!0;return!1}const UE=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),WE=Dy(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function HE(e){var f;const{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:o,type:s,keyframes:a}=e;if(!(((f=t==null?void 0:t.owner)==null?void 0:f.current)instanceof HTMLElement))return!1;const{onUpdate:u,transformTemplate:c}=t.owner.getProps();return WE()&&n&&(hv.has(n)||UE.has(n)&&BE(a))&&(n!=="transform"||!c)&&!u&&!r&&i!=="mirror"&&o!==0&&s!=="inertia"}const KE=40;class GE extends Zf{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:s="loop",keyframes:a,name:l,motionValue:u,element:c,...f}){var y;super(),this.stop=()=>{var v,x;this._animation&&(this._animation.stop(),(v=this.stopTimeline)==null||v.call(this)),(x=this.keyframeResolver)==null||x.cancel()},this.createdAt=Ne.now();const d={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:s,name:l,motionValue:u,element:c,...f},g=(c==null?void 0:c.KeyframeResolver)||Jf;this.keyframeResolver=new g(a,(v,x,h)=>this.onKeyframesResolved(v,x,d,!h),l,u,c),(y=this.keyframeResolver)==null||y.scheduleResolve()}onKeyframesResolved(t,n,r,i){var h,p;this.keyframeResolver=void 0;const{name:o,type:s,velocity:a,delay:l,isHandoff:u,onUpdate:c}=r;this.resolvedAt=Ne.now();let f=!0;zE(t,o,s,a)||(f=!1,(Pn.instantAnimations||!l)&&(c==null||c(Na(t,r,n))),t[0]=t[t.length-1],yc(r),r.repeat=0);const g={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>KE?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...r,keyframes:t},y=f&&!u&&HE(g),v=(p=(h=g.motionValue)==null?void 0:h.owner)==null?void 0:p.current;let x;if(y)try{x=new NE({...g,element:v})}catch{x=new aa(g)}else x=new aa(g);x.finished.then(()=>{this.notifyFinished()}).catch(dt),this.pendingTimeline&&(this.stopTimeline=x.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=x}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),RE()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}function mv(e,t,n,r=0,i=1){const o=Array.from(e).sort((u,c)=>u.sortNodePosition(c)).indexOf(t),s=e.size,a=(s-1)*r;return typeof n=="function"?n(o,s):i===1?o*r:a-o*r}const yh=30,YE=e=>!isNaN(parseFloat(e));class XE{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var o;const i=Ne.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((o=this.events.change)==null||o.notify(this.current),this.dependents))for(const s of this.dependents)s.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Ne.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=YE(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Wf);const r=this.events[t].add(n);return t==="change"?()=>{r(),X.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Ne.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>yh)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,yh);return $y(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Xr(e,t){return new XE(e,t)}function gv(e,t){if(e!=null&&e.inherit&&t){const{inherit:n,...r}=e;return{...t,...r}}return e}function ed(e,t){const n=(e==null?void 0:e[t])??(e==null?void 0:e.default)??e;return n!==e?gv(n,e):n}const QE={type:"spring",stiffness:500,damping:25,restSpeed:10},qE=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),ZE={type:"keyframes",duration:.8},JE={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},eP=(e,{keyframes:t})=>t.length>2?ZE:oi.has(e)?e.startsWith("scale")?qE(t[1]):QE:JE,tP=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function nP(e){for(const t in e)if(!tP.has(t))return!0;return!1}const td=(e,t,n,r={},i,o)=>s=>{const a=ed(r,e)||{},l=a.delay||r.delay||0;let{elapsed:u=0}=r;u=u-Xe(l);const c={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-u,onUpdate:d=>{t.set(d),a.onUpdate&&a.onUpdate(d)},onComplete:()=>{s(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:o?void 0:i};nP(a)||Object.assign(c,eP(e,c)),c.duration&&(c.duration=Xe(c.duration)),c.repeatDelay&&(c.repeatDelay=Xe(c.repeatDelay)),c.from!==void 0&&(c.keyframes[0]=c.from);let f=!1;if((c.type===!1||c.duration===0&&!c.repeatDelay)&&(yc(c),c.delay===0&&(f=!0)),(Pn.instantAnimations||Pn.skipAnimations||i!=null&&i.shouldSkipAnimations||a.skipAnimations)&&(f=!0,yc(c),c.delay=0),c.allowFlatten=!a.type&&!a.ease,f&&!o&&t.get()!==void 0){const d=Na(c.keyframes,a);if(d!==void 0){X.update(()=>{c.onUpdate(d),c.onComplete()});return}}return a.isSync?new aa(c):new GE(c)},rP=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function iP(e){const t=rP.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}const oP=4;function yv(e,t,n=1){tr(n<=oP,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,"max-css-var-depth");const[r,i]=iP(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return Ly(s)?parseFloat(s):s}return Gf(i)?yv(i,t,n+1):i}function vh(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function nd(e,t,n,r){if(typeof t=="function"){const[i,o]=vh(r);t=t(n!==void 0?n:e.custom,i,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,o]=vh(r);t=t(n!==void 0?n:e.custom,i,o)}return t}function Yn(e,t,n){const r=e.getProps();return nd(r,t,n!==void 0?n:r.custom,e)}const vv=new Set(["width","height","top","left","right","bottom",...ii]),vc=e=>Array.isArray(e);function sP(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Xr(n))}function aP(e){return vc(e)?e[e.length-1]||0:e}function lP(e,t){const n=Yn(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const s in o){const a=aP(o[s]);sP(e,s,a)}}const Pe=e=>!!(e&&e.getVelocity);function uP(e){return!!(Pe(e)&&e.add)}function xc(e,t){const n=e.getValue("willChange");if(uP(n))return n.add(t);if(!n&&Pn.WillChange){const r=new Pn.WillChange("auto");e.addValue("willChange",r),r.add(t)}}function rd(e){return e.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const cP="framerAppearId",xv="data-"+rd(cP);function wv(e){return e.props[xv]}function fP({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Sv(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:o,transitionEnd:s,...a}=t;const l=e.getDefaultTransition();o=o?gv(o,l):l;const u=o==null?void 0:o.reduceMotion,c=o==null?void 0:o.skipAnimations;r&&(o=r);const f=[],d=i&&e.animationState&&e.animationState.getState()[i],g=o==null?void 0:o.path;g&&g.animateVisualElement(e,a,o,n,f);for(const y in a){const v=e.getValue(y,e.latestValues[y]??null),x=a[y];if(x===void 0||d&&fP(d,y))continue;const h={delay:n,...ed(o||{},y)};c&&(h.skipAnimations=!0);const p=v.get();if(p!==void 0&&!v.isAnimating()&&!Array.isArray(x)&&x===p&&!h.velocity){X.update(()=>v.set(x));continue}let m=!1;if(window.MotionHandoffAnimation){const E=wv(e);if(E){const k=window.MotionHandoffAnimation(E,y,X);k!==null&&(h.startTime=k,m=!0)}}xc(e,y);const w=u??e.shouldReduceMotion;v.start(td(y,v,x,w&&vv.has(y)?{type:!1}:h,e,m));const T=v.animation;T&&f.push(T)}if(s){const y=()=>X.update(()=>{s&&lP(e,s)});f.length?Promise.all(f).then(y):y()}return f}function wc(e,t,n={}){var l;const r=Yn(e,t,n.type==="exit"?(l=e.presenceContext)==null?void 0:l.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all(Sv(e,r,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:f,staggerDirection:d}=i;return dP(e,t,u,c,f,d,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[u,c]=a==="beforeChildren"?[o,s]:[s,o];return u().then(()=>c())}else return Promise.all([o(),s(n.delay)])}function dP(e,t,n=0,r=0,i=0,o=1,s){const a=[];for(const l of e.variantChildren)l.notify("AnimationStart",t),a.push(wc(l,t,{...s,delay:n+(typeof r=="function"?0:r)+mv(e.variantChildren,l,r,i,o)}).then(()=>l.notify("AnimationComplete",t)));return Promise.all(a)}function pP(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>wc(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=wc(e,t,n);else{const i=typeof t=="function"?Yn(e,t,n.custom):t;r=Promise.all(Sv(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const hP={test:e=>e==="auto",parse:e=>e},kv=e=>t=>t.test(e),Tv=[ri,L,Nt,Ft,VC,NC,hP],xh=e=>Tv.find(kv(e));function mP(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Iy(e):!0}const gP=new Set(["brightness","contrast","saturate","opacity"]);function yP(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Yf)||[];if(!r)return e;const i=n.replace(r,"");let o=gP.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const vP=/\b([a-z-]*)\(.*?\)/gu,Sc={...Et,getAnimatableNone:e=>{const t=e.match(vP);return t?t.map(yP).join(" "):e}},kc={...Et,getAnimatableNone:e=>{const t=Et.parse(e);return Et.createTransformer(e)(t.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},wh={...ri,transform:Math.round},xP={rotate:Ft,pathRotation:Ft,rotateX:Ft,rotateY:Ft,rotateZ:Ft,scale:Zo,scaleX:Zo,scaleY:Zo,scaleZ:Zo,skew:Ft,skewX:Ft,skewY:Ft,distance:L,translateX:L,translateY:L,translateZ:L,x:L,y:L,z:L,perspective:L,transformPerspective:L,opacity:co,originX:sh,originY:sh,originZ:L},la={borderWidth:L,borderTopWidth:L,borderRightWidth:L,borderBottomWidth:L,borderLeftWidth:L,borderRadius:L,borderTopLeftRadius:L,borderTopRightRadius:L,borderBottomRightRadius:L,borderBottomLeftRadius:L,width:L,maxWidth:L,height:L,maxHeight:L,top:L,right:L,bottom:L,left:L,inset:L,insetBlock:L,insetBlockStart:L,insetBlockEnd:L,insetInline:L,insetInlineStart:L,insetInlineEnd:L,padding:L,paddingTop:L,paddingRight:L,paddingBottom:L,paddingLeft:L,paddingBlock:L,paddingBlockStart:L,paddingBlockEnd:L,paddingInline:L,paddingInlineStart:L,paddingInlineEnd:L,margin:L,marginTop:L,marginRight:L,marginBottom:L,marginLeft:L,marginBlock:L,marginBlockStart:L,marginBlockEnd:L,marginInline:L,marginInlineStart:L,marginInlineEnd:L,fontSize:L,backgroundPositionX:L,backgroundPositionY:L,...xP,zIndex:wh,fillOpacity:co,strokeOpacity:co,numOctaves:wh},wP={...la,color:ce,backgroundColor:ce,outlineColor:ce,fill:ce,stroke:ce,borderColor:ce,borderTopColor:ce,borderRightColor:ce,borderBottomColor:ce,borderLeftColor:ce,filter:Sc,WebkitFilter:Sc,mask:kc,WebkitMask:kc},Cv=e=>wP[e],SP=new Set([Sc,kc]);function Ev(e,t){let n=Cv(e);return SP.has(n)||(n=Et),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const kP=new Set(["auto","none","0"]);function TP(e,t,n){let r=0,i;for(;r<e.length&&!i;){const o=e[r];typeof o=="string"&&!kP.has(o)&&Yr(o).values.length&&(i=e[r]),r++}if(i&&n)for(const o of t)e[o]=Ev(n,i)}class CP extends Jf{constructor(t,n,r,i,o){super(t,n,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let c=0;c<t.length;c++){let f=t[c];if(typeof f=="string"&&(f=f.trim(),Gf(f))){const d=yv(f,n.current);d!==void 0&&(t[c]=d),c===t.length-1&&(this.finalKeyframe=f)}}if(this.resolveNoneKeyframes(),!vv.has(r)||t.length!==2)return;const[i,o]=t,s=xh(i),a=xh(o),l=oh(i),u=oh(o);if(l!==u&&pn[r]){this.needsMeasurement=!0;return}if(s!==a)if(hh(s)&&hh(a))for(let c=0;c<t.length;c++){const f=t[c];typeof f=="string"&&(t[c]=parseFloat(f))}else pn[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)(t[i]===null||mP(t[i]))&&r.push(i);r.length&&TP(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=pn[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var a;const{element:t,name:n,unresolvedKeyframes:r}=this;if(!t||!t.current)return;const i=t.getValue(n);i&&i.jump(this.measuredOrigin,!1);const o=r.length-1,s=r[o];r[o]=pn[n](t.measureViewportBox(),window.getComputedStyle(t.current)),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([l,u])=>{t.getValue(l).set(u)}),this.resolveNoneKeyframes()}}function Pv(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e=="string"){let r=document;t&&(r=t.current);const i=(n==null?void 0:n[e])??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(r=>r!=null)}const Tc=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function EP(e){return jy(e)&&"offsetHeight"in e&&!("ownerSVGElement"in e)}const{schedule:id,cancel:R5}=Gy(queueMicrotask,!1),vt={x:!1,y:!1};function _v(){return vt.x||vt.y}function PP(e){return e==="x"||e==="y"?vt[e]?null:(vt[e]=!0,()=>{vt[e]=!1}):vt.x||vt.y?null:(vt.x=vt.y=!0,()=>{vt.x=vt.y=!1})}function bv(e,t){const n=Pv(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function _P(e){return!(e.pointerType==="touch"||_v())}function bP(e,t,n={}){const[r,i,o]=bv(e,n);return r.forEach(s=>{let a=!1,l=!1,u;const c=()=>{s.removeEventListener("pointerleave",y)},f=x=>{u&&(u(x),u=void 0),c()},d=x=>{a=!1,window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",d),l&&(l=!1,f(x))},g=()=>{a=!0,window.addEventListener("pointerup",d,i),window.addEventListener("pointercancel",d,i)},y=x=>{if(x.pointerType!=="touch"){if(a){l=!0;return}f(x)}},v=x=>{if(!_P(x))return;l=!1;const h=t(s,x);typeof h=="function"&&(u=h,s.addEventListener("pointerleave",y,i))};s.addEventListener("pointerenter",v,i),s.addEventListener("pointerdown",g,i)}),o}const Av=(e,t)=>t?e===t?!0:Av(e,t.parentElement):!1,od=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,AP=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function RP(e){return AP.has(e.tagName)||e.isContentEditable===!0}const MP=new Set(["INPUT","SELECT","TEXTAREA"]);function LP(e){return MP.has(e.tagName)||e.isContentEditable===!0}const Ss=new WeakSet;function Sh(e){return t=>{t.key==="Enter"&&e(t)}}function Ll(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const jP=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=Sh(()=>{if(Ss.has(n))return;Ll(n,"down");const i=Sh(()=>{Ll(n,"up")}),o=()=>Ll(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",o,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function kh(e){return od(e)&&!_v()}const Th=new WeakSet;function IP(e,t,n={}){const[r,i,o]=bv(e,n),s=a=>{const l=a.currentTarget;if(!kh(a)||Th.has(a))return;Ss.add(l),n.stopPropagation&&Th.add(a);const u=t(l,a),c=(g,y)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",d),Ss.has(l)&&Ss.delete(l),kh(g)&&typeof u=="function"&&u(g,{success:y})},f=g=>{c(g,l===window||l===document||n.useGlobalTarget||Av(l,g.target))},d=g=>{c(g,!1)};window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",d,i)};return r.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",s,i),EP(a)&&(a.addEventListener("focus",u=>jP(u,i)),!RP(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),o}function sd(e){return jy(e)&&"ownerSVGElement"in e}const ks=new WeakMap;let on;const Rv=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+"Size"]:sd(r)&&"getBBox"in r?r.getBBox()[t]:r[n],DP=Rv("inline","width","offsetWidth"),$P=Rv("block","height","offsetHeight");function OP({target:e,borderBoxSize:t}){var n;(n=ks.get(e))==null||n.forEach(r=>{r(e,{get width(){return DP(e,t)},get height(){return $P(e,t)}})})}function NP(e){e.forEach(OP)}function VP(){typeof ResizeObserver>"u"||(on=new ResizeObserver(NP))}function zP(e,t){on||VP();const n=Pv(e);return n.forEach(r=>{let i=ks.get(r);i||(i=new Set,ks.set(r,i)),i.add(t),on==null||on.observe(r)}),()=>{n.forEach(r=>{const i=ks.get(r);i==null||i.delete(t),i!=null&&i.size||on==null||on.unobserve(r)})}}const Ts=new Set;let Cr;function FP(){Cr=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};Ts.forEach(t=>t(e))},window.addEventListener("resize",Cr)}function BP(e){return Ts.add(e),Cr||FP(),()=>{Ts.delete(e),!Ts.size&&typeof Cr=="function"&&(window.removeEventListener("resize",Cr),Cr=void 0)}}function Ch(e,t){return typeof e=="function"?BP(e):zP(e,t)}function UP(e){return sd(e)&&e.tagName==="svg"}const WP=[...Tv,ce,Et],HP=e=>WP.find(kv(e)),Eh=()=>({translate:0,scale:1,origin:0,originPoint:0}),Er=()=>({x:Eh(),y:Eh()}),Ph=()=>({min:0,max:0}),me=()=>({x:Ph(),y:Ph()}),KP=new WeakMap;function Va(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function fo(e){return typeof e=="string"||Array.isArray(e)}const ad=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],ld=["initial",...ad];function za(e){return Va(e.animate)||ld.some(t=>fo(e[t]))}function Mv(e){return!!(za(e)||e.variants)}function GP(e,t,n){for(const r in t){const i=t[r],o=n[r];if(Pe(i))e.addValue(r,i);else if(Pe(o))e.addValue(r,Xr(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const s=e.getValue(r);s.liveStyle===!0?s.jump(i):s.hasAnimated||s.set(i)}else{const s=e.getStaticValue(r);e.addValue(r,Xr(s!==void 0?s:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Cc={current:null},Lv={current:!1},YP=typeof window<"u";function XP(){if(Lv.current=!0,!!YP)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Cc.current=e.matches;e.addEventListener("change",t),t()}else Cc.current=!1}const _h=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let ua={};function jv(e){ua=e}function QP(){return ua}class qP{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,skipAnimations:o,blockInitialAnimation:s,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Jf,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const g=Ne.now();this.renderScheduledAt<g&&(this.renderScheduledAt=g,X.render(this.render,!1,!0))};const{latestValues:u,renderState:c}=a;this.latestValues=u,this.baseTarget={...u},this.initialValues=n.initial?{...u}:{},this.renderState=c,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.skipAnimationsConfig=o,this.options=l,this.blockInitialAnimation=!!s,this.isControllingVariants=za(n),this.isVariantNode=Mv(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const g in d){const y=d[g];u[g]!==void 0&&Pe(y)&&y.set(u[g])}}mount(t){var n,r;if(this.hasBeenMounted)for(const i in this.initialValues)(n=this.values.get(i))==null||n.jump(this.initialValues[i]),this.latestValues[i]=this.initialValues[i];this.current=t,KP.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,o)=>this.bindToMotionValue(o,i)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Lv.current||XP(),this.shouldReduceMotion=Cc.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var t;this.projection&&this.projection.unmount(),_n(this.notifyUpdate),_n(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const r=this.features[n];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){if(this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)(),n.accelerate&&hv.has(t)&&this.current instanceof HTMLElement){const{factory:s,keyframes:a,times:l,ease:u,duration:c}=n.accelerate,f=new dv({element:this.current,name:t,keyframes:a,times:l,ease:u,duration:Xe(c)}),d=s(f);this.valueSubscriptions.set(t,()=>{d(),f.cancel()});return}const r=oi.has(t);r&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&X.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let o;typeof window<"u"&&window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),o&&o()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in ua){const n=ua[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):me()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<_h.length;r++){const i=_h[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,s=t[o];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=GP(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Xr(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){let r=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return r!=null&&(typeof r=="string"&&(Ly(r)||Iy(r))?r=parseFloat(r):!HP(r)&&Et.test(n)&&(r=Ev(t,n)),this.setBaseTarget(t,Pe(r)?r.get():r)),Pe(r)?r.get():r}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var o;const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const s=nd(this.props,n,(o=this.presenceContext)==null?void 0:o.custom);s&&(r=s[t])}if(n&&r!==void 0)return r;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!Pe(i)?i:this.initialValues[t]!==void 0&&r===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Wf),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){id.render(this.render)}}class Iv extends qP{constructor(){super(...arguments),this.KeyframeResolver=CP}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){const r=t.style;return r?r[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Pe(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class Ln{constructor(t){this.isMounted=!1,this.node=t}update(){}}function Dv({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function ZP({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function JP(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function jl(e){return e===void 0||e===1}function Ec({scale:e,scaleX:t,scaleY:n}){return!jl(e)||!jl(t)||!jl(n)}function On(e){return Ec(e)||$v(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function $v(e){return bh(e.x)||bh(e.y)}function bh(e){return e&&e!=="0%"}function ca(e,t,n){const r=e-n,i=t*r;return n+i}function Ah(e,t,n,r,i){return i!==void 0&&(e=ca(e,i,r)),ca(e,n,r)+t}function Pc(e,t=0,n=1,r,i){e.min=Ah(e.min,t,n,r,i),e.max=Ah(e.max,t,n,r,i)}function Ov(e,{x:t,y:n}){Pc(e.x,t.translate,t.scale,t.originPoint),Pc(e.y,n.translate,n.scale,n.originPoint)}const Rh=.999999999999,Mh=1.0000000000001;function e_(e,t,n,r=!1){var a;const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let l=0;l<i;l++){o=n[l],s=o.projectionDelta;const{visualElement:u}=o.options;u&&u.props.style&&u.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&(jt(e.x,-o.scroll.offset.x),jt(e.y,-o.scroll.offset.y)),s&&(t.x*=s.x.scale,t.y*=s.y.scale,Ov(e,s)),r&&On(o.latestValues)&&Cs(e,o.latestValues,(a=o.layout)==null?void 0:a.layoutBox))}t.x<Mh&&t.x>Rh&&(t.x=1),t.y<Mh&&t.y>Rh&&(t.y=1)}function jt(e,t){e.min+=t,e.max+=t}function Lh(e,t,n,r,i=.5){const o=Y(e.min,e.max,i);Pc(e,t,n,o,r)}function jh(e,t){return typeof e=="string"?parseFloat(e)/100*(t.max-t.min):e}function Cs(e,t,n){const r=n??e;Lh(e.x,jh(t.x,r.x),t.scaleX,t.scale,t.originX),Lh(e.y,jh(t.y,r.y),t.scaleY,t.scale,t.originY)}function Nv(e,t){return Dv(JP(e.getBoundingClientRect(),t))}function t_(e,t,n){const r=Nv(e,n),{scroll:i}=t;return i&&(jt(r.x,i.offset.x),jt(r.y,i.offset.y)),r}const n_={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},r_=ii.length;function i_(e,t,n){let r="",i=!0;for(let s=0;s<r_;s++){const a=ii[s],l=e[a];if(l===void 0)continue;let u=!0;if(typeof l=="number")u=l===(a.startsWith("scale")?1:0);else{const c=parseFloat(l);u=a.startsWith("scale")?c===1:c===0}if(!u||n){const c=Tc(l,la[a]);if(!u){i=!1;const f=n_[a]||a;r+=`${f}(${c}) `}n&&(t[a]=c)}}const o=e.pathRotation;return o&&(i=!1,r+=`rotate(${Tc(o,la.pathRotation)}) `),r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function ud(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let s=!1,a=!1;for(const l in t){const u=t[l];if(oi.has(l)){s=!0;continue}else if(Xy(l)){i[l]=u;continue}else{const c=Tc(u,la[l]);l.startsWith("origin")?(a=!0,o[l]=c):r[l]=c}}if(t.transform||(s||n?r.transform=i_(t,e.transform,n):r.transform&&(r.transform="none")),a){const{originX:l="50%",originY:u="50%",originZ:c=0}=o;r.transformOrigin=`${l} ${u} ${c}`}}function Vv(e,{style:t,vars:n},r,i){const o=e.style;let s;for(s in t)o[s]=t[s];i==null||i.applyProjectionStyles(o,r);for(s in n)o.setProperty(s,n[s])}function Ih(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const vi={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(L.test(e))e=parseFloat(e);else return e;const n=Ih(e,t.target.x),r=Ih(e,t.target.y);return`${n}% ${r}%`}},o_={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Et.parse(e);if(i.length>5)return r;const o=Et.createTransformer(e),s=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+s]/=a,i[1+s]/=l;const u=Y(a,l,.5);return typeof i[2+s]=="number"&&(i[2+s]/=u),typeof i[3+s]=="number"&&(i[3+s]/=u),o(i)}},_c={borderRadius:{...vi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:vi,borderTopRightRadius:vi,borderBottomLeftRadius:vi,borderBottomRightRadius:vi,boxShadow:o_};function zv(e,{layout:t,layoutId:n}){return oi.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!_c[e]||e==="opacity")}function cd(e,t,n){var s;const r=e.style,i=t==null?void 0:t.style,o={};if(!r)return o;for(const a in r)(Pe(r[a])||i&&Pe(i[a])||zv(a,e)||((s=n==null?void 0:n.getValue(a))==null?void 0:s.liveStyle)!==void 0)&&(o[a]=r[a]);return o}function s_(e){return window.getComputedStyle(e)}class a_ extends Iv{constructor(){super(...arguments),this.type="html",this.renderInstance=Vv}readValueFromInstance(t,n){var r;if(oi.has(n))return(r=this.projection)!=null&&r.isProjecting?dc(n):EE(t,n);{const i=s_(t),o=(Xy(n)?i.getPropertyValue(n):i[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Nv(t,n)}build(t,n,r){ud(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return cd(t,n,r)}}const l_={offset:"stroke-dashoffset",array:"stroke-dasharray"},u_={offset:"strokeDashoffset",array:"strokeDasharray"};function c_(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?l_:u_;e[o.offset]=`${-r}`,e[o.array]=`${t} ${n}`}const f_=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Fv(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:o=1,pathOffset:s=0,...a},l,u,c){if(ud(e,a,u),l){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:f,style:d}=e;f.transform&&(d.transform=f.transform,delete f.transform),(d.transform||f.transformOrigin)&&(d.transformOrigin=f.transformOrigin??"50% 50%",delete f.transformOrigin),d.transform&&(d.transformBox=(c==null?void 0:c.transformBox)??"fill-box",delete f.transformBox);for(const g of f_)f[g]!==void 0&&(d[g]=f[g],delete f[g]);t!==void 0&&(f.x=t),n!==void 0&&(f.y=n),r!==void 0&&(f.scale=r),i!==void 0&&c_(f,i,o,s,!1)}const Bv=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Uv=e=>typeof e=="string"&&e.toLowerCase()==="svg";function d_(e,t,n,r){Vv(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Bv.has(i)?i:rd(i),t.attrs[i])}function Wv(e,t,n){const r=cd(e,t,n);for(const i in e)if(Pe(e[i])||Pe(t[i])){const o=ii.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=e[i]}return r}class p_ extends Iv{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=me}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(oi.has(n)){const r=Cv(n);return r&&r.default||0}return n=Bv.has(n)?n:rd(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return Wv(t,n,r)}build(t,n,r){Fv(t,n,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(t,n,r,i){d_(t,n,r,i)}mount(t){this.isSVGTag=Uv(t.tagName),super.mount(t)}}const h_=ld.length;function Hv(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?Hv(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<h_;n++){const r=ld[n],i=e.props[r];(fo(i)||i===!1)&&(t[r]=i)}return t}function Kv(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const m_=[...ad].reverse(),g_=ad.length;function y_(e){return t=>Promise.all(t.map(({animation:n,options:r})=>pP(e,n,r)))}function v_(e){let t=y_(e),n=Dh(),r=!0,i=!1;const o=u=>(c,f)=>{var g;const d=Yn(e,f,u==="exit"?(g=e.presenceContext)==null?void 0:g.custom:void 0);if(d){const{transition:y,transitionEnd:v,...x}=d;c={...c,...x,...v}}return c};function s(u){t=u(e)}function a(u){const{props:c}=e,f=Hv(e.parent)||{},d=[],g=new Set;let y={},v=1/0;for(let h=0;h<g_;h++){const p=m_[h],m=n[p],w=c[p]!==void 0?c[p]:f[p],T=fo(w),E=p===u?m.isActive:null;E===!1&&(v=h);let k=w===f[p]&&w!==c[p]&&T;if(k&&(r||i)&&e.manuallyAnimateOnMount&&(k=!1),m.protectedKeys={...y},!m.isActive&&E===null||!w&&!m.prevProp||Va(w)||typeof w=="boolean")continue;if(p==="exit"&&m.isActive&&E!==!0){m.prevResolvedValues&&(y={...y,...m.prevResolvedValues});continue}const P=x_(m.prevProp,w);let I=P||p===u&&m.isActive&&!k&&T||h>v&&T,_=!1;const $=Array.isArray(w)?w:[w];let G=$.reduce(o(p),{});E===!1&&(G={});const{prevResolvedValues:ne={}}=m,Se={...ne,...G},Ae=A=>{I=!0,g.has(A)&&(_=!0,g.delete(A)),m.needsAnimating[A]=!0;const j=e.getValue(A);j&&(j.liveStyle=!1)};for(const A in Se){const j=G[A],D=ne[A];if(y.hasOwnProperty(A))continue;let F=!1;vc(j)&&vc(D)?F=!Kv(j,D)||P:F=j!==D,F?j!=null?Ae(A):g.add(A):j!==void 0&&g.has(A)?Ae(A):m.protectedKeys[A]=!0}m.prevProp=w,m.prevResolvedValues=G,m.isActive&&(y={...y,...G}),(r||i)&&e.blockInitialAnimation&&(I=!1);const le=k&&P;I&&(!le||_)&&d.push(...$.map(A=>{const j={type:p};if(typeof A=="string"&&(r||i)&&!le&&e.manuallyAnimateOnMount&&e.parent){const{parent:D}=e,F=Yn(D,A);if(D.enteringChildren&&F){const{delayChildren:ee}=F.transition||{};j.delay=mv(D.enteringChildren,e,ee)}}return{animation:A,options:j}}))}if(g.size){const h={};if(typeof c.initial!="boolean"){const p=Yn(e,Array.isArray(c.initial)?c.initial[0]:c.initial);p&&p.transition&&(h.transition=p.transition)}g.forEach(p=>{const m=e.getBaseTarget(p),w=e.getValue(p);w&&(w.liveStyle=!0),h[p]=m??null}),d.push({animation:h})}let x=!!d.length;return r&&(c.initial===!1||c.initial===c.animate)&&!e.manuallyAnimateOnMount&&(x=!1),r=!1,i=!1,x?t(d):Promise.resolve()}function l(u,c){var d;if(n[u].isActive===c)return Promise.resolve();(d=e.variantChildren)==null||d.forEach(g=>{var y;return(y=g.animationState)==null?void 0:y.setActive(u,c)}),n[u].isActive=c;const f=a(u);for(const g in n)n[g].protectedKeys={};return f}return{animateChanges:a,setActive:l,setAnimateFunction:s,getState:()=>n,reset:()=>{n=Dh(),i=!0}}}function x_(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Kv(t,e):!1}function jn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Dh(){return{animate:jn(!0),whileInView:jn(),whileHover:jn(),whileTap:jn(),whileDrag:jn(),whileFocus:jn(),exit:jn()}}function bc(e,t){e.min=t.min,e.max=t.max}function yt(e,t){bc(e.x,t.x),bc(e.y,t.y)}function $h(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}const Gv=1e-4,w_=1-Gv,S_=1+Gv,Yv=.01,k_=0-Yv,T_=0+Yv;function Ve(e){return e.max-e.min}function C_(e,t,n){return Math.abs(e-t)<=n}function Oh(e,t,n,r=.5){e.origin=r,e.originPoint=Y(t.min,t.max,e.origin),e.scale=Ve(n)/Ve(t),e.translate=Y(n.min,n.max,e.origin)-e.originPoint,(e.scale>=w_&&e.scale<=S_||isNaN(e.scale))&&(e.scale=1),(e.translate>=k_&&e.translate<=T_||isNaN(e.translate))&&(e.translate=0)}function Oi(e,t,n,r){Oh(e.x,t.x,n.x,r?r.originX:void 0),Oh(e.y,t.y,n.y,r?r.originY:void 0)}function Nh(e,t,n,r=0){const i=r?Y(n.min,n.max,r):n.min;e.min=i+t.min,e.max=e.min+Ve(t)}function E_(e,t,n,r){Nh(e.x,t.x,n.x,r==null?void 0:r.x),Nh(e.y,t.y,n.y,r==null?void 0:r.y)}function Vh(e,t,n,r=0){const i=r?Y(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+Ve(t)}function fa(e,t,n,r){Vh(e.x,t.x,n.x,r==null?void 0:r.x),Vh(e.y,t.y,n.y,r==null?void 0:r.y)}function zh(e,t,n,r,i){return e-=t,e=ca(e,1/n,r),i!==void 0&&(e=ca(e,1/i,r)),e}function P_(e,t=0,n=1,r=.5,i,o=e,s=e){if(Nt.test(t)&&(t=parseFloat(t),t=Y(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=Y(o.min,o.max,r);e===o&&(a-=t),e.min=zh(e.min,t,n,a,i),e.max=zh(e.max,t,n,a,i)}function Fh(e,t,[n,r,i],o,s){P_(e,t[n],t[r],t[i],t.scale,o,s)}const __=["x","scaleX","originX"],b_=["y","scaleY","originY"];function Bh(e,t,n,r){Fh(e.x,t,__,n?n.x:void 0,r?r.x:void 0),Fh(e.y,t,b_,n?n.y:void 0,r?r.y:void 0)}function Uh(e){return e.translate===0&&e.scale===1}function Xv(e){return Uh(e.x)&&Uh(e.y)}function Wh(e,t){return e.min===t.min&&e.max===t.max}function A_(e,t){return Wh(e.x,t.x)&&Wh(e.y,t.y)}function Hh(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Qv(e,t){return Hh(e.x,t.x)&&Hh(e.y,t.y)}function Kh(e){return Ve(e.x)/Ve(e.y)}function Gh(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function At(e){return[e("x"),e("y")]}function R_(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,s=(n==null?void 0:n.z)||0;if((i||o||s)&&(r=`translate3d(${i}px, ${o}px, ${s}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:c,pathRotation:f,rotateX:d,rotateY:g,skewX:y,skewY:v}=n;u&&(r=`perspective(${u}px) ${r}`),c&&(r+=`rotate(${c}deg) `),f&&(r+=`rotate(${f}deg) `),d&&(r+=`rotateX(${d}deg) `),g&&(r+=`rotateY(${g}deg) `),y&&(r+=`skewX(${y}deg) `),v&&(r+=`skewY(${v}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const qv=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],M_=qv.length,Yh=e=>typeof e=="string"?parseFloat(e):e,Xh=e=>typeof e=="number"||L.test(e);function L_(e,t,n,r,i,o){i?(e.opacity=Y(0,n.opacity??1,j_(r)),e.opacityExit=Y(t.opacity??1,0,I_(r))):o&&(e.opacity=Y(t.opacity??1,n.opacity??1,r));for(let s=0;s<M_;s++){const a=qv[s];let l=Qh(t,a),u=Qh(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Xh(l)===Xh(u)?(e[a]=Math.max(Y(Yh(l),Yh(u),r),0),(Nt.test(u)||Nt.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=Y(t.rotate||0,n.rotate||0,r))}function Qh(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const j_=Zv(0,.5,Uy),I_=Zv(.5,.95,dt);function Zv(e,t,n){return r=>r<e?0:r>t?1:n(uo(e,t,r))}function D_(e,t,n){const r=Pe(e)?e:Xr(e);return r.start(td("",r,t,n)),r.animation}function po(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const $_=(e,t)=>e.depth-t.depth;class O_{constructor(){this.children=[],this.isDirty=!1}add(t){Uf(this.children,t),this.isDirty=!0}remove(t){ra(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort($_),this.isDirty=!1,this.children.forEach(t)}}function N_(e,t){const n=Ne.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(_n(r),e(o-t))};return X.setup(r,!0),()=>_n(r)}function Es(e){return Pe(e)?e.get():e}class V_{constructor(){this.members=[]}add(t){Uf(this.members,t);for(let n=this.members.length-1;n>=0;n--){const r=this.members[n];if(r===t||r===this.lead||r===this.prevLead)continue;const i=r.instance;(!i||i.isConnected===!1)&&!r.snapshot&&(ra(this.members,r),r.unmount())}t.scheduleRender()}remove(t){if(ra(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){var n;for(let r=this.members.indexOf(t)-1;r>=0;r--){const i=this.members[r];if(i.isPresent!==!1&&((n=i.instance)==null?void 0:n.isConnected)!==!1)return this.promote(i),!0}return!1}promote(t,n){var i;const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.updateSnapshot(),t.scheduleRender();const{layoutDependency:o}=r.options,{layoutDependency:s}=t.options;(o===void 0||o!==s)&&(t.resumeFrom=r,n&&(r.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),(i=t.root)!=null&&i.isUpdating&&(t.isLayoutDirty=!0)),t.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{var n,r,i,o,s;(r=(n=t.options).onExitComplete)==null||r.call(n),(s=(i=t.resumingFrom)==null?void 0:(o=i.options).onExitComplete)==null||s.call(o)})}scheduleRender(){this.members.forEach(t=>t.instance&&t.scheduleRender(!1))}removeLeadSnapshot(){var t;(t=this.lead)!=null&&t.snapshot&&(this.lead.snapshot=void 0)}}const Ps={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Il=["","X","Y","Z"],z_=1e3;let F_=0;function Dl(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Jv(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=wv(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",X,!(i||o))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Jv(r)}function e1({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},a=t==null?void 0:t()){this.id=F_++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(W_),this.nodes.forEach(Q_),this.nodes.forEach(q_),this.nodes.forEach(H_)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new O_)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new Wf),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s){if(this.instance)return;this.isSVG=sd(s)&&!UP(s),this.instance=s;const{layoutId:a,layout:l,visualElement:u}=this.options;if(u&&!u.current&&u.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),e){let c,f=0;const d=()=>this.root.updateBlockedByResize=!1;X.read(()=>{f=window.innerWidth}),e(s,()=>{const g=window.innerWidth;g!==f&&(f=g,this.root.updateBlockedByResize=!0,c&&c(),c=N_(d,250),Ps.hasAnimatedSinceResize&&(Ps.hasAnimatedSinceResize=!1,this.nodes.forEach(Jh)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&u&&(a||l)&&this.addEventListener("didUpdate",({delta:c,hasLayoutChanged:f,hasRelativeLayoutChanged:d,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||u.getDefaultTransition()||n3,{onLayoutAnimationStart:v,onLayoutAnimationComplete:x}=u.getProps(),h=!this.targetLayout||!Qv(this.targetLayout,g),p=!f&&d;if(this.options.layoutRoot||this.resumeFrom||p||f&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const m={...ed(y,"layout"),onPlay:v,onComplete:x};(u.shouldReduceMotion||this.options.layoutRoot)&&(m.delay=0,m.type=!1),this.startAnimation(m),this.setAnimationOrigin(c,p,m.path)}else f||Jh(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),_n(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Z_),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Jv(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const f=this.path[c];f.shouldResetTransform=!0,(typeof f.latestValues.x=="string"||typeof f.latestValues.y=="string")&&(f.isLayoutDirty=!0),f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const l=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),l&&this.nodes.forEach(G_),this.nodes.forEach(qh);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Zh);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Y_),this.nodes.forEach(X_),this.nodes.forEach(B_),this.nodes.forEach(U_)):this.nodes.forEach(Zh),this.clearAllSnapshots();const a=Ne.now();Ce.delta=Vt(0,1e3/60,a-Ce.timestamp),Ce.timestamp=a,Ce.isProcessing=!0,Pl.update.process(Ce),Pl.preRender.process(Ce),Pl.render.process(Ce),Ce.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,id.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(K_),this.sharedNodes.forEach(J_)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,X.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){X.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Ve(this.snapshot.measuredBox.x)&&!Ve(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=me()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a&&this.instance){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:s,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!Xv(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;s&&this.instance&&(a||On(this.latestValues)||c)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),r3(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:s}=this.options;if(!s)return me();const a=s.measureViewportBox();if(!(((u=this.scroll)==null?void 0:u.wasRoot)||this.path.some(i3))){const{scroll:c}=this.root;c&&(jt(a.x,c.offset.x),jt(a.y,c.offset.y))}return a}removeElementScroll(s){var l;const a=me();if(yt(a,s),(l=this.scroll)!=null&&l.wasRoot)return a;for(let u=0;u<this.path.length;u++){const c=this.path[u],{scroll:f,options:d}=c;c!==this.root&&f&&d.layoutScroll&&(f.wasRoot&&yt(a,s),jt(a.x,f.offset.x),jt(a.y,f.offset.y))}return a}applyTransform(s,a=!1,l){var c,f;const u=l||me();yt(u,s);for(let d=0;d<this.path.length;d++){const g=this.path[d];!a&&g.options.layoutScroll&&g.scroll&&g!==g.root&&(jt(u.x,-g.scroll.offset.x),jt(u.y,-g.scroll.offset.y)),On(g.latestValues)&&Cs(u,g.latestValues,(c=g.layout)==null?void 0:c.layoutBox)}return On(this.latestValues)&&Cs(u,this.latestValues,(f=this.layout)==null?void 0:f.layoutBox),u}removeTransform(s){var l;const a=me();yt(a,s);for(let u=0;u<this.path.length;u++){const c=this.path[u];if(!On(c.latestValues))continue;let f;c.instance&&(Ec(c.latestValues)&&c.updateSnapshot(),f=me(),yt(f,c.measurePageBox())),Bh(a,c.latestValues,(l=c.snapshot)==null?void 0:l.layoutBox,f)}return On(this.latestValues)&&Bh(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ce.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var g;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(s||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(g=this.parent)!=null&&g.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:c,layoutId:f}=this.options;if(!this.layout||!(c||f))return;this.resolvedRelativeTargetAt=Ce.timestamp;const d=this.getClosestProjectingParent();d&&this.linkedParentVersion!==d.layoutVersion&&!d.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&d&&d.layout?this.createRelativeTarget(d,this.layout.layoutBox,d.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=me(),this.targetWithTransforms=me()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),E_(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):yt(this.target,this.layout.layoutBox),Ov(this.target,this.targetDelta)):yt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&d&&!!d.resumingFrom==!!this.resumingFrom&&!d.options.layoutScroll&&d.target&&this.animationProgress!==1?this.createRelativeTarget(d,this.target,d.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Ec(this.parent.latestValues)||$v(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(s,a,l){this.relativeParent=s,this.linkedParentVersion=s.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=me(),this.relativeTargetOrigin=me(),fa(this.relativeTargetOrigin,a,l,this.options.layoutAnchor||void 0),yt(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var y;const s=this.getLead(),a=!!this.resumingFrom||this!==s;let l=!0;if((this.isProjectionDirty||(y=this.parent)!=null&&y.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===Ce.timestamp&&(l=!1),l)return;const{layout:u,layoutId:c}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||c))return;yt(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,d=this.treeScale.y;e_(this.layoutCorrected,this.treeScale,this.path,a),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox,s.targetWithTransforms=me());const{target:g}=s;if(!g){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():($h(this.prevProjectionDelta.x,this.projectionDelta.x),$h(this.prevProjectionDelta.y,this.projectionDelta.y)),Oi(this.projectionDelta,this.layoutCorrected,g,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==d||!Gh(this.projectionDelta.x,this.prevProjectionDelta.x)||!Gh(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),s){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Er(),this.projectionDelta=Er(),this.projectionDeltaWithTransform=Er()}setAnimationOrigin(s,a=!1,l){const u=this.snapshot,c=u?u.latestValues:{},f={...this.latestValues},d=Er();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const g=me(),y=u?u.source:void 0,v=this.layout?this.layout.source:void 0,x=y!==v,h=this.getStack(),p=!h||h.members.length<=1,m=!!(x&&!p&&this.options.crossfade===!0&&!this.path.some(t3));this.animationProgress=0;let w;const T=l==null?void 0:l.interpolateProjection(s);this.mixTargetDelta=E=>{const k=E/1e3,P=T==null?void 0:T(k);P?(d.x.translate=P.x,d.x.scale=Y(s.x.scale,1,k),d.x.origin=s.x.origin,d.x.originPoint=s.x.originPoint,d.y.translate=P.y,d.y.scale=Y(s.y.scale,1,k),d.y.origin=s.y.origin,d.y.originPoint=s.y.originPoint):(em(d.x,s.x,k),em(d.y,s.y,k)),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(fa(g,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),e3(this.relativeTarget,this.relativeTargetOrigin,g,k),w&&A_(this.relativeTarget,w)&&(this.isProjectionDirty=!1),w||(w=me()),yt(w,this.relativeTarget)),x&&(this.animationValues=f,L_(f,c,this.latestValues,k,m,p)),P&&P.rotate!==void 0&&(this.animationValues||(this.animationValues=f),this.animationValues.pathRotation=P.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=k},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){var a,l,u;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(u=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||u.stop(),this.pendingAnimation&&(_n(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=X.update(()=>{Ps.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Xr(0)),this.motionValue.jump(0,!1),this.currentAnimation=D_(this.motionValue,[0,1e3],{...s,velocity:0,isSync:!0,onUpdate:c=>{this.mixTargetDelta(c),s.onUpdate&&s.onUpdate(c)},onStop:()=>{},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(z_),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=s;if(!(!a||!l||!u)){if(this!==s&&this.layout&&u&&t1(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||me();const f=Ve(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+f;const d=Ve(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+d}yt(a,l),Cs(a,c),Oi(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new V_),this.sharedNodes.get(s).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var a;const{layoutId:s}=this.options;return s?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:s}=this.options;return s?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const u={};l.z&&Dl("z",s,u,this.animationValues);for(let c=0;c<Il.length;c++)Dl(`rotate${Il[c]}`,s,u,this.animationValues),Dl(`skew${Il[c]}`,s,u,this.animationValues);s.render();for(const c in u)s.setStaticValue(c,u[c]),this.animationValues&&(this.animationValues[c]=u[c]);s.scheduleRender()}applyProjectionStyles(s,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){s.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,s.visibility="",s.opacity="",s.pointerEvents=Es(a==null?void 0:a.pointerEvents)||"",s.transform=l?l(this.latestValues,""):"none";return}const u=this.getLead();if(!this.projectionDelta||!this.layout||!u.target){this.options.layoutId&&(s.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,s.pointerEvents=Es(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!On(this.latestValues)&&(s.transform=l?l({},""):"none",this.hasProjected=!1);return}s.visibility="";const c=u.animationValues||u.latestValues;this.applyTransformsToTarget();let f=R_(this.projectionDeltaWithTransform,this.treeScale,c);l&&(f=l(c,f)),s.transform=f;const{x:d,y:g}=this.projectionDelta;s.transformOrigin=`${d.origin*100}% ${g.origin*100}% 0`,u.animationValues?s.opacity=u===this?c.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:c.opacityExit:s.opacity=u===this?c.opacity!==void 0?c.opacity:"":c.opacityExit!==void 0?c.opacityExit:0;for(const y in _c){if(c[y]===void 0)continue;const{correct:v,applyTo:x,isCSSVariable:h}=_c[y],p=f==="none"?c[y]:v(c[y],u);if(x){const m=x.length;for(let w=0;w<m;w++)s[x[w]]=p}else h?this.options.visualElement.renderState.vars[y]=p:s[y]=p}this.options.layoutId&&(s.pointerEvents=u===this?Es(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(qh),this.root.sharedNodes.clear()}}}function B_(e){e.updateLayout()}function U_(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=t.source!==e.layout.source;if(o==="size")At(f=>{const d=s?t.measuredBox[f]:t.layoutBox[f],g=Ve(d);d.min=r[f].min,d.max=d.min+g});else if(o==="x"||o==="y"){const f=o==="x"?"y":"x";bc(s?t.measuredBox[f]:t.layoutBox[f],r[f])}else t1(o,t.layoutBox,r)&&At(f=>{const d=s?t.measuredBox[f]:t.layoutBox[f],g=Ve(r[f]);d.max=d.min+g,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+g)});const a=Er();Oi(a,r,t.layoutBox);const l=Er();s?Oi(l,e.applyTransform(i,!0),t.measuredBox):Oi(l,r,t.layoutBox);const u=!Xv(a);let c=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:d,layout:g}=f;if(d&&g){const y=e.options.layoutAnchor||void 0,v=me();fa(v,t.layoutBox,d.layoutBox,y);const x=me();fa(x,r,g.layoutBox,y),Qv(v,x)||(c=!0),f.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=v,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeLayoutChanged:c})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function W_(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function H_(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function K_(e){e.clearSnapshot()}function qh(e){e.clearMeasurements()}function G_(e){e.isLayoutDirty=!0,e.updateLayout()}function Zh(e){e.isLayoutDirty=!1}function Y_(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function X_(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Jh(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Q_(e){e.resolveTargetDelta()}function q_(e){e.calcProjection()}function Z_(e){e.resetSkewAndRotation()}function J_(e){e.removeLeadSnapshot()}function em(e,t,n){e.translate=Y(t.translate,0,n),e.scale=Y(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function tm(e,t,n,r){e.min=Y(t.min,n.min,r),e.max=Y(t.max,n.max,r)}function e3(e,t,n,r){tm(e.x,t.x,n.x,r),tm(e.y,t.y,n.y,r)}function t3(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const n3={duration:.45,ease:[.4,0,.1,1]},nm=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),rm=nm("applewebkit/")&&!nm("chrome/")?Math.round:dt;function im(e){e.min=rm(e.min),e.max=rm(e.max)}function r3(e){im(e.x),im(e.y)}function t1(e,t,n){return e==="position"||e==="preserve-aspect"&&!C_(Kh(t),Kh(n),.2)}function i3(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const o3=e1({attachResizeListener:(e,t)=>po(e,"resize",t),measureScroll:()=>{var e,t;return{x:document.documentElement.scrollLeft||((e=document.body)==null?void 0:e.scrollLeft)||0,y:document.documentElement.scrollTop||((t=document.body)==null?void 0:t.scrollTop)||0}},checkIsScrollRoot:()=>!0}),$l={current:void 0},n1=e1({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!$l.current){const e=new o3({});e.mount(window),e.setOptions({layoutScroll:!0}),$l.current=e}return $l.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),r1=C.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function s3(e=!0){const t=C.useContext(Bf);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,o=C.useId();C.useEffect(()=>{if(e)return i(o)},[e]);const s=C.useCallback(()=>e&&r&&r(o),[o,r,e]);return!n&&r?[!1,s]:[!0]}const i1=C.createContext({strict:!1}),om={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let sm=!1;function a3(){if(sm)return;const e={};for(const t in om)e[t]={isEnabled:n=>om[t].some(r=>!!n[r])};jv(e),sm=!0}function o1(){return a3(),QP()}function l3(e){const t=o1();for(const n in e)t[n]={...t[n],...e[n]};jv(t)}const u3=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function da(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||u3.has(e)}let s1=e=>!da(e);function c3(e){typeof e=="function"&&(s1=t=>t.startsWith("on")?!da(t):e(t))}try{const e="@emotion/is-prop-valid";c3(require(e).default)}catch{}function f3(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||Pe(e[i])||(s1(i)||n===!0&&da(i)||!t&&!da(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}const Fa=C.createContext({});function d3(e,t){if(za(e)){const{initial:n,animate:r}=e;return{initial:n===!1||fo(n)?n:void 0,animate:fo(r)?r:void 0}}return e.inherit!==!1?t:{}}function p3(e){const{initial:t,animate:n}=d3(e,C.useContext(Fa));return C.useMemo(()=>({initial:t,animate:n}),[am(t),am(n)])}function am(e){return Array.isArray(e)?e.join(" "):e}const fd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function a1(e,t,n){for(const r in t)!Pe(t[r])&&!zv(r,n)&&(e[r]=t[r])}function h3({transformTemplate:e},t){return C.useMemo(()=>{const n=fd();return ud(n,t,e),Object.assign({},n.vars,n.style)},[t])}function m3(e,t){const n=e.style||{},r={};return a1(r,n,e),Object.assign(r,h3(e,t)),r}function g3(e,t){const n={},r=m3(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const l1=()=>({...fd(),attrs:{}});function y3(e,t,n,r){const i=C.useMemo(()=>{const o=l1();return Fv(o,t,Uv(r),e.transformTemplate,e.style),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};a1(o,e.style,e),i.style={...o,...i.style}}return i}const v3=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function dd(e){return typeof e!="string"||e.includes("-")?!1:!!(v3.indexOf(e)>-1||/[A-Z]/u.test(e))}function x3(e,t,n,{latestValues:r},i,o=!1,s){const l=(s??dd(e)?y3:g3)(t,r,i,e),u=f3(t,typeof e=="string",o),c=e!==C.Fragment?{...u,...l,ref:n}:{},{children:f}=t,d=C.useMemo(()=>Pe(f)?f.get():f,[f]);return C.createElement(e,{...c,children:d})}function w3({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:S3(n,r,i,e),renderState:t()}}function S3(e,t,n,r){const i={},o=r(e,{});for(const d in o)i[d]=Es(o[d]);let{initial:s,animate:a}=e;const l=za(e),u=Mv(e);t&&u&&!l&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let c=n?n.initial===!1:!1;c=c||s===!1;const f=c?a:s;if(f&&typeof f!="boolean"&&!Va(f)){const d=Array.isArray(f)?f:[f];for(let g=0;g<d.length;g++){const y=nd(e,d[g]);if(y){const{transitionEnd:v,transition:x,...h}=y;for(const p in h){let m=h[p];if(Array.isArray(m)){const w=c?m.length-1:0;m=m[w]}m!==null&&(i[p]=m)}for(const p in v)i[p]=v[p]}}}return i}const u1=e=>(t,n)=>{const r=C.useContext(Fa),i=C.useContext(Bf),o=()=>w3(e,t,r,i);return n?o():xC(o)},k3=u1({scrapeMotionValuesFromProps:cd,createRenderState:fd}),T3=u1({scrapeMotionValuesFromProps:Wv,createRenderState:l1}),C3=Symbol.for("motionComponentSymbol");function E3(e,t,n){const r=C.useRef(n);C.useInsertionEffect(()=>{r.current=n});const i=C.useRef(null);return C.useCallback(o=>{var a;o&&((a=e.onMount)==null||a.call(e,o)),t&&(o?t.mount(o):t.unmount());const s=r.current;if(typeof s=="function")if(o){const l=s(o);typeof l=="function"&&(i.current=l)}else i.current?(i.current(),i.current=null):s(o);else s&&(s.current=o)},[t])}const c1=C.createContext({});function ur(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function P3(e,t,n,r,i,o){var m,w;const{visualElement:s}=C.useContext(Fa),a=C.useContext(i1),l=C.useContext(Bf),u=C.useContext(r1),c=u.reducedMotion,f=u.skipAnimations,d=C.useRef(null),g=C.useRef(!1);r=r||a.renderer,!d.current&&r&&(d.current=r(e,{visualState:t,parent:s,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:c,skipAnimations:f,isSVG:o}),g.current&&d.current&&(d.current.manuallyAnimateOnMount=!0));const y=d.current,v=C.useContext(c1);y&&!y.projection&&i&&(y.type==="html"||y.type==="svg")&&_3(d.current,n,i,v);const x=C.useRef(!1);C.useInsertionEffect(()=>{y&&x.current&&y.update(n,l)});const h=n[xv],p=C.useRef(!!h&&typeof window<"u"&&!((m=window.MotionHandoffIsComplete)!=null&&m.call(window,h))&&((w=window.MotionHasOptimisedAnimation)==null?void 0:w.call(window,h)));return SC(()=>{g.current=!0,y&&(x.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),y.scheduleRenderMicrotask(),p.current&&y.animationState&&y.animationState.animateChanges())}),C.useEffect(()=>{y&&(!p.current&&y.animationState&&y.animationState.animateChanges(),p.current&&(queueMicrotask(()=>{var T;(T=window.MotionHandoffMarkAsComplete)==null||T.call(window,h)}),p.current=!1),y.enteringChildren=void 0)}),y}function _3(e,t,n,r){const{layoutId:i,layout:o,drag:s,dragConstraints:a,layoutScroll:l,layoutRoot:u,layoutAnchor:c,layoutCrossfade:f}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:f1(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!s||a&&ur(a),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,crossfade:f,layoutScroll:l,layoutRoot:u,layoutAnchor:c})}function f1(e){if(e)return e.options.allowProjection!==!1?e.projection:f1(e.parent)}function Ol(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&l3(r);const o=n?n==="svg":dd(e),s=o?T3:k3;function a(u,c){let f;const d={...C.useContext(r1),...u,layoutId:b3(u)},{isStatic:g}=d,y=p3(u),v=s(u,g);if(!g&&typeof window<"u"){A3();const x=R3(d);f=x.MeasureLayout,y.visualElement=P3(e,v,d,i,x.ProjectionNode,o)}return S.jsxs(Fa.Provider,{value:y,children:[f&&y.visualElement?S.jsx(f,{visualElement:y.visualElement,...d}):null,x3(e,u,E3(v,y.visualElement,c),v,g,t,o)]})}a.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const l=C.forwardRef(a);return l[C3]=e,l}function b3({layoutId:e}){const t=C.useContext(My).id;return t&&e!==void 0?t+"-"+e:e}function A3(e,t){C.useContext(i1).strict}function R3(e){const t=o1(),{drag:n,layout:r}=t;if(!n&&!r)return{};const i={...n,...r};return{MeasureLayout:n!=null&&n.isEnabled(e)||r!=null&&r.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function M3(e,t){if(typeof Proxy>"u")return Ol;const n=new Map,r=(o,s)=>Ol(o,s,e,t),i=(o,s)=>r(o,s);return new Proxy(i,{get:(o,s)=>s==="create"?r:(n.has(s)||n.set(s,Ol(s,void 0,e,t)),n.get(s))})}const L3=(e,t)=>t.isSVG??dd(e)?new p_(t):new a_(t,{allowProjection:e!==C.Fragment});class j3 extends Ln{constructor(t){super(t),t.animationState||(t.animationState=v_(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Va(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let I3=0;class D3 extends Ln{constructor(){super(...arguments),this.id=I3++,this.isExitComplete=!1}update(){var o;if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;if(t&&r===!1){if(this.isExitComplete){const{initial:s,custom:a}=this.node.getProps();if(typeof s=="string"||typeof s=="object"&&s!==null&&!Array.isArray(s)){const l=Yn(this.node,s,a);if(l){const{transition:u,transitionEnd:c,...f}=l;for(const d in f)(o=this.node.getValue(d))==null||o.jump(f[d])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const $3={animation:{Feature:j3},exit:{Feature:D3}};function bo(e){return{point:{x:e.pageX,y:e.pageY}}}const O3=e=>t=>od(t)&&e(t,bo(t));function Ni(e,t,n,r){return po(e,t,O3(n),r)}const d1=({current:e})=>e?e.ownerDocument.defaultView:null,lm=(e,t)=>Math.abs(e-t);function N3(e,t){const n=lm(e.x,t.x),r=lm(e.y,t.y);return Math.sqrt(n**2+r**2)}const um=new Set(["auto","scroll"]);class p1{constructor(t,n,{transformPagePoint:r,contextWindow:i=window,dragSnapToOrigin:o=!1,distanceThreshold:s=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=g=>{this.handleScroll(g.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Jo(this.lastRawMoveEventInfo,this.transformPagePoint));const g=Nl(this.lastMoveEventInfo,this.history),y=this.startEvent!==null,v=N3(g.offset,{x:0,y:0})>=this.distanceThreshold;if(!y&&!v)return;const{point:x}=g,{timestamp:h}=Ce;this.history.push({...x,timestamp:h});const{onStart:p,onMove:m}=this.handlers;y||(p&&p(this.lastMoveEvent,g),this.startEvent=this.lastMoveEvent),m&&m(this.lastMoveEvent,g)},this.handlePointerMove=(g,y)=>{this.lastMoveEvent=g,this.lastRawMoveEventInfo=y,this.lastMoveEventInfo=Jo(y,this.transformPagePoint),X.update(this.updatePoint,!0)},this.handlePointerUp=(g,y)=>{this.end();const{onEnd:v,onSessionEnd:x,resumeAnimation:h}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&h&&h(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const p=Nl(g.type==="pointercancel"?this.lastMoveEventInfo:Jo(y,this.transformPagePoint),this.history);this.startEvent&&v&&v(g,p),x&&x(g,p)},!od(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.distanceThreshold=s,this.contextWindow=i||window;const l=bo(t),u=Jo(l,this.transformPagePoint),{point:c}=u,{timestamp:f}=Ce;this.history=[{...c,timestamp:f}];const{onSessionStart:d}=n;d&&d(t,Nl(u,this.history)),this.removeListeners=Eo(Ni(this.contextWindow,"pointermove",this.handlePointerMove),Ni(this.contextWindow,"pointerup",this.handlePointerUp),Ni(this.contextWindow,"pointercancel",this.handlePointerUp)),a&&this.startScrollTracking(a)}startScrollTracking(t){let n=t.parentElement;for(;n;){const r=getComputedStyle(n);(um.has(r.overflowX)||um.has(r.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const n=this.scrollPositions.get(t);if(!n)return;const r=t===window,i=r?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},o={x:i.x-n.x,y:i.y-n.y};o.x===0&&o.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=o.x,this.lastMoveEventInfo.point.y+=o.y):this.history.length>0&&(this.history[0].x-=o.x,this.history[0].y-=o.y),this.scrollPositions.set(t,i),X.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),_n(this.updatePoint)}}function Jo(e,t){return t?{point:t(e.point)}:e}function cm(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Nl({point:e},t){return{point:e,delta:cm(e,h1(t)),offset:cm(e,V3(t)),velocity:z3(t,.1)}}function V3(e){return e[0]}function h1(e){return e[e.length-1]}function z3(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=h1(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Xe(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>Xe(t)*2&&(r=e[1]);const o=ct(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function F3(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?Y(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?Y(n,e,r.max):Math.min(e,n)),e}function fm(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function B3(e,{top:t,left:n,bottom:r,right:i}){return{x:fm(e.x,n,i),y:fm(e.y,t,r)}}function dm(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function U3(e,t){return{x:dm(e.x,t.x),y:dm(e.y,t.y)}}function W3(e,t){let n=.5;const r=Ve(e),i=Ve(t);return i>r?n=uo(t.min,t.max-r,e.min):r>i&&(n=uo(e.min,e.max-i,t.min)),Vt(0,1,n)}function H3(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Ac=.35;function K3(e=Ac){return e===!1?e=0:e===!0&&(e=Ac),{x:pm(e,"left","right"),y:pm(e,"top","bottom")}}function pm(e,t,n){return{min:hm(e,t),max:hm(e,n)}}function hm(e,t){return typeof e=="number"?e:e[t]||0}const G3=new WeakMap;class Y3{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=me(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:r}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const o=f=>{n&&this.snapToCursor(bo(f).point),this.stopAnimation()},s=(f,d)=>{const{drag:g,dragPropagation:y,onDragStart:v}=this.getProps();if(g&&!y&&(this.openDragLock&&this.openDragLock(),this.openDragLock=PP(g),!this.openDragLock))return;this.latestPointerEvent=f,this.latestPanInfo=d,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),At(h=>{let p=this.getAxisMotionValue(h).get()||0;if(Nt.test(p)){const{projection:m}=this.visualElement;if(m&&m.layout){const w=m.layout.layoutBox[h];w&&(p=Ve(w)*(parseFloat(p)/100))}}this.originPoint[h]=p}),v&&X.update(()=>v(f,d),!1,!0),xc(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},a=(f,d)=>{this.latestPointerEvent=f,this.latestPanInfo=d;const{dragPropagation:g,dragDirectionLock:y,onDirectionLock:v,onDrag:x}=this.getProps();if(!g&&!this.openDragLock)return;const{offset:h}=d;if(y&&this.currentDirection===null){this.currentDirection=Q3(h),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",d.point,h),this.updateAxis("y",d.point,h),this.visualElement.render(),x&&X.update(()=>x(f,d),!1,!0)},l=(f,d)=>{this.latestPointerEvent=f,this.latestPanInfo=d,this.stop(f,d),this.latestPointerEvent=null,this.latestPanInfo=null},u=()=>{const{dragSnapToOrigin:f}=this.getProps();(f||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:c}=this.getProps();this.panSession=new p1(t,{onSessionStart:o,onStart:s,onMove:a,onSessionEnd:l,resumeAnimation:u},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,distanceThreshold:r,contextWindow:d1(this.visualElement),element:this.visualElement.current})}stop(t,n){const r=t||this.latestPointerEvent,i=n||this.latestPanInfo,o=this.isDragging;if(this.cancel(),!o||!i||!r)return;const{velocity:s}=i;this.startAnimation(s);const{onDragEnd:a}=this.getProps();a&&X.postRender(()=>a(r,i))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!es(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=F3(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var o;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(o=this.visualElement.projection)==null?void 0:o.layout,i=this.constraints;t&&ur(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=B3(r.layoutBox,t):this.constraints=!1,this.elastic=K3(n),i!==this.constraints&&!ur(t)&&r&&this.constraints&&!this.hasMutatedConstraints&&At(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=H3(r.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!ur(t))return!1;const r=t.current;tr(r!==null,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.","drag-constraints-ref");const{projection:i}=this.visualElement;if(!i||!i.layout)return!1;i.root&&(i.root.scroll=void 0,i.root.updateScroll());const o=t_(r,i.root,this.visualElement.getTransformPagePoint());let s=U3(i.layout.layoutBox,o);if(n){const a=n(ZP(s));this.hasMutatedConstraints=!!a,a&&(s=Dv(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=At(c=>{if(!es(c,n,this.currentDirection))return;let f=l&&l[c]||{};(s===!0||s===c)&&(f={min:0,max:0});const d=i?200:1e6,g=i?40:1e7,y={type:"inertia",velocity:r?t[c]:0,bounceStiffness:d,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...o,...f};return this.startAxisValueAnimation(c,y)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return xc(this.visualElement,t),r.start(td(t,r,0,n,this.visualElement,!1))}stopAnimation(){At(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,i=this.visualElement.getProps()[n];return i||this.visualElement.getValue(t,this.visualElement.latestValues[t]??0)}snapToCursor(t){At(n=>{const{drag:r}=this.getProps();if(!es(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:a}=i.layout.layoutBox[n],l=o.get()||0;o.set(t[n]-Y(s,a,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!ur(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};At(s=>{const a=this.getAxisMotionValue(s);if(a&&this.constraints!==!1){const l=a.get();i[s]=W3({min:l,max:l},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),At(s=>{if(!es(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:u}=this.constraints[s];a.set(Y(l,u,i[s]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;G3.set(this.visualElement,this);const t=this.visualElement.current,n=Ni(t,"pointerdown",u=>{const{drag:c,dragListener:f=!0}=this.getProps(),d=u.target,g=d!==t&&LP(d);c&&f&&!g&&this.start(u)});let r;const i=()=>{const{dragConstraints:u}=this.getProps();ur(u)&&u.current&&(this.constraints=this.resolveRefConstraints(),r||(r=X3(t,u.current,()=>this.scalePositionWithinConstraints())))},{projection:o}=this.visualElement,s=o.addEventListener("measure",i);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),X.read(i);const a=po(window,"resize",()=>this.scalePositionWithinConstraints()),l=o.addEventListener("didUpdate",({delta:u,hasLayoutChanged:c})=>{this.isDragging&&c&&(At(f=>{const d=this.getAxisMotionValue(f);d&&(this.originPoint[f]+=u[f].translate,d.set(d.get()+u[f].translate))}),this.visualElement.render())});return()=>{a(),n(),s(),l&&l(),r&&r()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=Ac,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function mm(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function X3(e,t,n){const r=Ch(e,mm(n)),i=Ch(t,mm(n));return()=>{r(),i()}}function es(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Q3(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class q3 extends Ln{constructor(t){super(t),this.removeGroupControls=dt,this.removeListeners=dt,this.controls=new Y3(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||dt}update(){const{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Vl=e=>(t,n)=>{e&&X.update(()=>e(t,n),!1,!0)};class Z3 extends Ln{constructor(){super(...arguments),this.removePointerDownListener=dt}onPointerDown(t){this.session=new p1(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:d1(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Vl(t),onStart:Vl(n),onMove:Vl(r),onEnd:(o,s)=>{delete this.session,i&&X.postRender(()=>i(o,s))}}}mount(){this.removePointerDownListener=Ni(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let zl=!1;class J3 extends C.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),zl&&o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Ps.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,{projection:s}=r;return s&&(s.isPresent=o,t.layoutDependency!==n&&s.setOptions({...s.options,layoutDependency:n}),zl=!0,i||t.layoutDependency!==n||n===void 0||t.isPresent!==o?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||X.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:t,layoutAnchor:n}=this.props,{projection:r}=t;r&&(r.options.layoutAnchor=n,r.root.didUpdate(),id.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;zl=!0,i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function m1(e){const[t,n]=s3(),r=C.useContext(My);return S.jsx(J3,{...e,layoutGroup:r,switchLayoutGroup:C.useContext(c1),isPresent:t,safeToRemove:n})}const e4={pan:{Feature:Z3},drag:{Feature:q3,ProjectionNode:n1,MeasureLayout:m1}};function gm(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,o=r[i];o&&X.postRender(()=>o(t,bo(t)))}class t4 extends Ln{mount(){const{current:t}=this.node;t&&(this.unmount=bP(t,(n,r)=>(gm(this.node,r,"Start"),i=>gm(this.node,i,"End"))))}unmount(){}}class n4 extends Ln{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Eo(po(this.node.current,"focus",()=>this.onFocus()),po(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function ym(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),o=r[i];o&&X.postRender(()=>o(t,bo(t)))}class r4 extends Ln{mount(){const{current:t}=this.node;if(!t)return;const{globalTapTarget:n,propagate:r}=this.node.props;this.unmount=IP(t,(i,o)=>(ym(this.node,o,"Start"),(s,{success:a})=>ym(this.node,s,a?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const Rc=new WeakMap,Fl=new WeakMap,i4=e=>{const t=Rc.get(e.target);t&&t(e)},o4=e=>{e.forEach(i4)};function s4({root:e,...t}){const n=e||document;Fl.has(n)||Fl.set(n,{});const r=Fl.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(o4,{root:e,...t})),r[i]}function a4(e,t,n){const r=s4(t);return Rc.set(e,n),r.observe(e),()=>{Rc.delete(e),r.unobserve(e)}}const l4={some:0,all:1};class u4 extends Ln{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var l;(l=this.stopObserver)==null||l.call(this);const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:l4[i]},a=u=>{const{isIntersecting:c}=u;if(this.isInView===c||(this.isInView=c,o&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:f,onViewportLeave:d}=this.node.getProps(),g=c?f:d;g&&g(u)};this.stopObserver=a4(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(c4(t,n))&&this.startObserver()}unmount(){var t;(t=this.stopObserver)==null||t.call(this),this.hasEnteredView=!1,this.isInView=!1}}function c4({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const f4={inView:{Feature:u4},tap:{Feature:r4},focus:{Feature:n4},hover:{Feature:t4}},d4={layout:{ProjectionNode:n1,MeasureLayout:m1}},p4={...$3,...f4,...e4,...d4},jr=M3(p4,L3),h4=()=>S.jsxs(vC,{children:[S.jsxs(jr.div,{initial:{opacity:0,y:80},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:1,ease:"easeOut"},children:[" ",S.jsx(aC,{})]}),S.jsx(jr.div,{initial:{opacity:0,y:80},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:1,ease:"easeOut"},children:S.jsx(eC,{})}),S.jsx(jr.div,{initial:{opacity:0,y:80},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:1,ease:"easeOut"},children:S.jsx(yC,{})})]}),m4=R.div`
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
`,g4=R.h2`
  font-size: 24px;
  font-family: var(--second-font);
  font-weight: 800;
  letter-spacing: 0.05em;
  text-align: left;
  margin-top: 20px;
  margin-bottom: 25px;
  color: #000000;
  text-transform: capitalize;
`,y4=R.ul`
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
`,v4=R.li`
  display: inline-block;
`,x4=R.button`
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
`,vm=R.div`
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
`,xm=R.div`
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
`,wm=R.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* filter: grayscale(100%);  */
  transition: filter 0.4s ease, transform 0.4s ease;

  &:hover {
    /* filter: grayscale(0%); */
    transform: scale(1.02);
  }
`,w4=R.button`
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
`,S4=[{id:"objects",label:"Природа"},{id:"portrait",label:"Портрети"},{id:"brands",label:"Сімейні"},{id:"events",label:"Заходи"}],Sm=[{id:1,category:"events",src:"https://images.unsplash.com/photo-1519741497674-611481863552",type:"small",alt:"Весілля пара"},{id:2,category:"events",src:"https://images.unsplash.com/photo-1595152772835-219674b2a8a6",type:"small",alt:"Наречена біля вікна"},{id:3,category:"portrait",src:"https://images.unsplash.com/photo-1534528741775-53994a69daeb",type:"wide",alt:"Портрет дівчини в кашкеті"},{id:4,category:"portrait",src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",type:"tall",alt:"Обійми на пероні"},{id:5,category:"brands",src:"https://images.unsplash.com/photo-1485462537746-965f33f7f6a7",type:"small",alt:"Бренд зйомка"},{id:6,category:"objects",src:"/portfolio/images/img4.JPG",type:"small",alt:"Предметний кадр"},{id:7,category:"objects",src:"/portfolio/images/img5.JPG",type:"small",alt:"Предметний кадр"},{id:8,category:"objects",src:"/portfolio/images/img7.JPG",type:"tall",alt:"Предметний кадр"},{id:9,category:"objects",src:"/portfolio/images/img9.JPG",type:"wide",alt:"Предметний кадр"},{id:10,category:"objects",src:"/portfolio/images/img10.JPG",type:"wide",alt:"Предметний кадр"},{id:11,category:"objects",src:"/portfolio/images/img3.JPG",type:"wide",alt:"Предметний кадр"}],k4=()=>{const[e,t]=C.useState("objects"),[n,r]=C.useState(4),i=u=>{t(u),r(4)},o=e==="all"?Sm:Sm.filter(u=>u.category===e),s=o.slice(0,n),a=s.slice(0,4),l=s.slice(4);return S.jsx(m4,{children:S.jsxs(jr.div,{initial:{opacity:0,y:80},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:1,ease:"easeOut"},children:[S.jsx(g4,{children:"Портфоліо"}),S.jsx(y4,{children:S4.map(u=>S.jsx(v4,{children:S.jsx(x4,{$isActive:e===u.id,onClick:()=>i(u.id),children:u.label})},u.id))}),S.jsx(vm,{className:"asymmetric",children:a.map(u=>S.jsx(xm,{$type:u.type,$layout:"asymmetric",children:S.jsx(wm,{loading:"lazy",src:u.src,alt:u.alt})},u.id))}),l.length>0&&S.jsx(vm,{className:"simple",children:l.map(u=>S.jsx(xm,{$layout:"simple",children:S.jsx(wm,{loading:"lazy",src:u.src,alt:u.alt})},u.id))}),o.length>n&&S.jsx(w4,{onClick:()=>r(u=>u+4),children:"Показати ще ↓"})]})})},T4=R.section`
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
`,C4=R.h2`
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
`,E4=R.div`
  display: flex;
  flex-direction: column;
   
  /* border-top: 1px solid rgba(134, 134, 134, 0.411);; */
  border-bottom: 1px solid rgba(134, 134, 134, 0.411);;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    border-bottom: none; 
  }
`,Bl=R.div`
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
`,Ul=R.div`
height: 280px;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`,Wl=R.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 20px;
`,Hl=R.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
`,$e=R.li`
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
`,Kl=R.div`
  font-size: 1.15rem;
  font-weight: 600;
  align-self: flex-end;
  margin-top: auto;
  
  @media screen and (max-width: 767px) {
    margin-top: 15px;
  }
`,Gl=R.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`,Yl=R.img`
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
`,Xl=R.a`
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
`,P4="https://images.unsplash.com/photo-1534528741775-53994a69daeb",_4="https://images.unsplash.com/photo-1534528741775-53994a69daeb",b4="https://images.unsplash.com/photo-1519741497674-611481863552",A4=()=>S.jsx(T4,{children:S.jsxs(jr.div,{initial:{opacity:0,y:80},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:1,ease:"easeOut"},children:[S.jsx(C4,{children:"Тарифи"}),S.jsxs(E4,{children:[S.jsxs(Bl,{children:[S.jsxs(Ul,{children:[S.jsx(Wl,{children:"Індивідуальна зйомка"}),S.jsxs(Hl,{children:[S.jsx($e,{children:"Допомога в підборі образу та локації"}),S.jsx($e,{children:"Допомога в позуванні"}),S.jsx($e,{children:"До 1-х годин зйомки"}),S.jsx($e,{children:"До 30 фотографій у ретуші"}),S.jsx($e,{children:"Термін здачі до 2-х тижнів"})]}),S.jsx(Kl,{children:"10.000₴"})]}),S.jsxs(Gl,{children:[S.jsx(Yl,{loading:"lazy",src:P4,alt:"Індивідуальна зйомка"}),S.jsx(Xl,{href:"https://t.me/username",children:"Записатися на зйомку?"})]})]}),S.jsxs(Bl,{children:[S.jsxs(Ul,{children:[S.jsx(Wl,{children:"Сімейна / love-story"}),S.jsxs(Hl,{children:[S.jsx($e,{children:"Допомога в підборі образу та локації"}),S.jsx($e,{children:"Допомога в позуванні"}),S.jsx($e,{children:"До 2,5 годин зйомки"}),S.jsx($e,{children:"До 40 фотографій у ретуші"}),S.jsx($e,{children:"Термін здачі до 2-х тижнів"})]}),S.jsx(Kl,{children:"10.000₴"})]}),S.jsxs(Gl,{children:[S.jsx(Yl,{loading:"lazy",src:_4,alt:"Сімейна або love-story зйомка"}),S.jsx(Xl,{href:"https://t.me/username",children:"Записатися на зйомку?? чи шо"})]})]}),S.jsxs(Bl,{children:[S.jsxs(Ul,{children:[S.jsx(Wl,{children:"Заходи"}),S.jsxs(Hl,{children:[S.jsx($e,{children:"Виїзд на місце проведення"}),S.jsx($e,{children:"Групові та індивідуальні фото в межах заходу"}),S.jsx($e,{children:"До 80 фотографій у ретуші"}),S.jsx($e,{children:"Усі вдалі вихідні матеріали"}),S.jsx($e,{children:"Термін здачі до 3-x тижнів"})]}),S.jsx(Kl,{children:"10.000₴"})]}),S.jsxs(Gl,{children:[S.jsx(Yl,{loading:"lazy",src:b4,alt:"Зйомка заходів"}),S.jsx(Xl,{href:"https://t.me/username",children:"Записатися на зйомку??"})]})]})]})]})}),R4=R.section`
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
`,M4=R.h2`
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
`,L4=R.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
    /* border-bottom: 1px solid rgb(61, 60, 60);; */

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 48px;
  }
  
  @media screen and (min-width: 1200px) {
    gap: 80px;
  }
`,j4=R.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    max-width: 380px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 450px;
  }
`,I4=R.h3`
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 30px;
font-family: var(--main-font);
  letter-spacing: 0.5px;
`,D4=R.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  height: 100%;
    justify-content: flex-start;
  padding-bottom:35px;
  

`,km=R.input`
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
`;R.textarea`
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
`;const $4=R.button`
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
`,O4=R.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  gap: 24px;
`,N4=R.div`
  width: 100%;
  overflow: hidden;
`,V4=R.img`
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  
`,z4=R.div`
  display: flex;
  flex-direction: column;

  padding-top: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`,F4=R.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
      padding-bottom: 35px;
`,B4=R.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
  
  @media screen and (min-width: 768px) {
    align-items: flex-end;
     margin-bottom: 0px;
  }
`,Tm=R.span`
  font-size: 0.8rem;
  text-transform: uppercase;
  color: #767676;
  letter-spacing: 1px;
`,U4=R.p`
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
`,W4=R.div`
  display: flex;
  gap: 20px;
`,Ql=R.a`
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
`;function g1(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=g1(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Xn(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=g1(e))&&(r&&(r+=" "),r+=t);return r}var Ao=e=>typeof e=="number"&&!isNaN(e),nr=e=>typeof e=="string",Zt=e=>typeof e=="function",H4=e=>nr(e)||Ao(e),Mc=e=>nr(e)||Zt(e)?e:null,K4=(e,t)=>e===!1||Ao(e)&&e>0?e:t,Lc=e=>C.isValidElement(e)||nr(e)||Zt(e)||Ao(e);function G4(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function Y4({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:o,position:s,preventExitTransition:a,done:l,nodeRef:u,isIn:c,playToast:f}){let d=n?`${e}--${s}`:e,g=n?`${t}--${s}`:t,y=C.useRef(0);return C.useLayoutEffect(()=>{let v=u.current,x=d.split(" "),h=p=>{p.target===u.current&&(f(),v.removeEventListener("animationend",h),v.removeEventListener("animationcancel",h),y.current===0&&p.type!=="animationcancel"&&v.classList.remove(...x))};v.classList.add(...x),v.addEventListener("animationend",h),v.addEventListener("animationcancel",h)},[]),C.useEffect(()=>{let v=u.current,x=()=>{v.removeEventListener("animationend",x),r?G4(v,l,i):l()};c||(a?x():(y.current=1,v.className+=` ${g}`,v.addEventListener("animationend",x)))},[c]),N.createElement(N.Fragment,null,o)}}function Cm(e,t){return{content:y1(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function y1(e,t,n=!1){return C.isValidElement(e)&&!nr(e.type)?C.cloneElement(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):Zt(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function X4({closeToast:e,theme:t,ariaLabel:n="close"}){return N.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),e(!0)},"aria-label":n},N.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},N.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Q4({delay:e,isRunning:t,closeToast:n,type:r="default",hide:i,className:o,controlledProgress:s,progress:a,rtl:l,isIn:u,theme:c}){let f=i||s&&a===0,d={animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};s&&(d.transform=`scaleX(${a})`);let g=Xn("Toastify__progress-bar",s?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${c}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":l}),y=Zt(o)?o({rtl:l,type:r,defaultClassName:g}):Xn(g,o),v={[s&&a>=1?"onTransitionEnd":"onAnimationEnd"]:s&&a<1?null:()=>{u&&n()}};return N.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":f},N.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${c} Toastify__progress-bar--${r}`}),N.createElement("div",{role:"progressbar","aria-hidden":f?"true":"false","aria-label":"notification timer","aria-valuenow":s?Math.round(a*100):void 0,"aria-valuemin":0,"aria-valuemax":100,className:y,style:d,...v}))}var q4=1,v1=()=>`${q4++}`;function Z4(e,t,n){let r=1,i=0,o=[],s=[],a=t,l=new Map,u=new Set,c=p=>(u.add(p),()=>u.delete(p)),f=()=>{s=Array.from(l.values()),u.forEach(p=>p())},d=({containerId:p,toastId:m,updateId:w})=>{let T=p?p!==e:e!==1,E=l.has(m)&&w==null;return T||E},g=(p,m)=>{l.forEach(w=>{var T;(m==null||m===w.props.toastId)&&((T=w.toggle)==null||T.call(w,p))})},y=p=>{var m,w;p.isActive&&((w=(m=p.props)==null?void 0:m.onClose)==null||w.call(m,p.removalReason),p.isActive=!1,n(Cm(p,"removed")))},v=p=>{if(p==null)l.forEach(y);else{let m=l.get(p);m&&y(m)}f()},x=()=>{i-=o.length,o=[]},h=p=>{var m,w;let{toastId:T,updateId:E}=p.props,k=E==null;p.staleId&&l.delete(p.staleId),p.isActive=!0,l.set(T,p),f(),n(Cm(p,k?"added":"updated")),k&&((w=(m=p.props).onOpen)==null||w.call(m))};return{id:e,props:a,observe:c,toggle:g,removeToast:v,toasts:l,clearQueue:x,buildToast:(p,m)=>{if(d(m))return;let{toastId:w,updateId:T,data:E,staleId:k,delay:P}=m,I=T==null;I&&i++;let _={...a,style:a.toastStyle,key:r++,...Object.fromEntries(Object.entries(m).filter(([G,ne])=>ne!=null)),toastId:w,updateId:T,data:E,isIn:!1,className:Mc(m.className||a.toastClassName),progressClassName:Mc(m.progressClassName||a.progressClassName),autoClose:m.isLoading?!1:K4(m.autoClose,a.autoClose),closeToast(G){let ne=l.get(w);ne&&(ne.removalReason=G,v(w))},deleteToast(){if(l.get(w)!=null){if(l.delete(w),i--,i<0&&(i=0),o.length>0){h(o.shift());return}f()}}};_.closeButton=a.closeButton,m.closeButton===!1||Lc(m.closeButton)?_.closeButton=m.closeButton:m.closeButton===!0&&(_.closeButton=Lc(a.closeButton)?a.closeButton:!0);let $={content:p,props:_,staleId:k};a.limit&&a.limit>0&&i>a.limit&&I?o.push($):Ao(P)?setTimeout(()=>{h($)},P):h($)},setProps(p){a=p},setToggle:(p,m)=>{let w=l.get(p);w&&(w.toggle=m)},isToastActive:p=>{var m;return(m=l.get(p))==null?void 0:m.isActive},getSnapshot:()=>s}}var ze=new Map,ho=[],jc=new Set,J4=e=>jc.forEach(t=>t(e)),x1=()=>ze.size>0;function e5(){ho.forEach(e=>S1(e.content,e.options)),ho=[]}var t5=(e,{containerId:t})=>{var n;return(n=ze.get(t||1))==null?void 0:n.toasts.get(e)};function w1(e,t){var n;if(t)return!!((n=ze.get(t))!=null&&n.isToastActive(e));let r=!1;return ze.forEach(i=>{i.isToastActive(e)&&(r=!0)}),r}function n5(e){if(!x1()){ho=ho.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||H4(e))ze.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=ze.get(e.containerId);t?t.removeToast(e.id):ze.forEach(n=>{n.removeToast(e.id)})}}var r5=(e={})=>{ze.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function S1(e,t){Lc(e)&&(x1()||ho.push({content:e,options:t}),ze.forEach(n=>{n.buildToast(e,t)}))}function i5(e){var t;(t=ze.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function k1(e,t){ze.forEach(n=>{(t==null||!(t!=null&&t.containerId)||(t==null?void 0:t.containerId)===n.id)&&n.toggle(e,t==null?void 0:t.id)})}function o5(e){let t=e.containerId||1;return{subscribe(n){let r=Z4(t,e,J4);ze.set(t,r);let i=r.observe(n);return e5(),()=>{i(),ze.delete(t)}},setProps(n){var r;(r=ze.get(t))==null||r.setProps(n)},getSnapshot(){var n;return(n=ze.get(t))==null?void 0:n.getSnapshot()}}}function s5(e){return jc.add(e),()=>{jc.delete(e)}}function a5(e){return e&&(nr(e.toastId)||Ao(e.toastId))?e.toastId:v1()}function Ro(e,t){return S1(e,t),t.toastId}function Ba(e,t){return{...t,type:t&&t.type||e,toastId:a5(t)}}function Ua(e){return(t,n)=>Ro(t,Ba(e,n))}function H(e,t){return Ro(e,Ba("default",t))}H.loading=(e,t)=>Ro(e,Ba("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function l5(e,{pending:t,error:n,success:r},i){let o;t&&(o=nr(t)?H.loading(t,i):H.loading(t.render,{...i,...t}));let s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},a=(u,c,f)=>{if(c==null){H.dismiss(o);return}let d={type:u,...s,...i,data:f},g=nr(c)?{render:c}:c;return o?H.update(o,{...d,...g}):H(g.render,{...d,...g}),f},l=Zt(e)?e():e;return l.then(u=>a("success",r,u)).catch(u=>a("error",n,u)),l}H.promise=l5;H.success=Ua("success");H.info=Ua("info");H.error=Ua("error");H.warning=Ua("warning");H.warn=H.warning;H.dark=(e,t)=>Ro(e,Ba("default",{theme:"dark",...t}));function u5(e){n5(e)}H.dismiss=u5;H.clearWaitingQueue=r5;H.isActive=w1;H.update=(e,t={})=>{let n=t5(e,t);if(n){let{props:r,content:i}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:v1()};o.toastId!==e&&(o.staleId=e);let s=o.render||i;delete o.render,Ro(s,o)}};H.done=e=>{H.update(e,{progress:1})};H.onChange=s5;H.play=e=>k1(!0,e);H.pause=e=>k1(!1,e);function c5(e){var t;let{subscribe:n,getSnapshot:r,setProps:i}=C.useRef(o5(e)).current;i(e);let o=(t=C.useSyncExternalStore(n,r,r))==null?void 0:t.slice();function s(a){if(!o)return[];let l=new Map;return e.newestOnTop&&o.reverse(),o.forEach(u=>{let{position:c}=u.props;l.has(c)||l.set(c,[]),l.get(c).push(u)}),Array.from(l,u=>a(u[0],u[1]))}return{getToastToRender:s,isToastActive:w1,count:o==null?void 0:o.length}}function f5(e){let[t,n]=C.useState(!1),[r,i]=C.useState(!1),o=C.useRef(null),s=C.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:a,pauseOnHover:l,closeToast:u,onClick:c,closeOnClick:f}=e;i5({id:e.toastId,containerId:e.containerId,fn:n}),C.useEffect(()=>{if(e.pauseOnFocusLoss)return d(),()=>{g()}},[e.pauseOnFocusLoss]);function d(){document.hasFocus()||h(),window.addEventListener("focus",x),window.addEventListener("blur",h)}function g(){window.removeEventListener("focus",x),window.removeEventListener("blur",h)}function y(k){if(e.draggable===!0||e.draggable===k.pointerType){p();let P=o.current;s.canCloseOnClick=!0,s.canDrag=!0,P.style.transition="none",e.draggableDirection==="x"?(s.start=k.clientX,s.removalDistance=P.offsetWidth*(e.draggablePercent/100)):(s.start=k.clientY,s.removalDistance=P.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function v(k){let{top:P,bottom:I,left:_,right:$}=o.current.getBoundingClientRect();k.pointerType==="mouse"&&e.pauseOnHover&&k.clientX>=_&&k.clientX<=$&&k.clientY>=P&&k.clientY<=I?h():x()}function x(){n(!0)}function h(){n(!1)}function p(){s.didMove=!1,document.addEventListener("pointermove",w),document.addEventListener("pointerup",T)}function m(){document.removeEventListener("pointermove",w),document.removeEventListener("pointerup",T)}function w(k){let P=o.current;if(s.canDrag&&P){s.didMove=!0,t&&h(),e.draggableDirection==="x"?s.delta=k.clientX-s.start:s.delta=k.clientY-s.start,s.start!==k.clientX&&(s.canCloseOnClick=!1);let I=e.draggableDirection==="x"?`${s.delta}px, var(--y)`:`0, calc(${s.delta}px + var(--y))`;P.style.transform=`translate3d(${I},0)`,P.style.opacity=`${1-Math.abs(s.delta/s.removalDistance)}`}}function T(){m();let k=o.current;if(s.canDrag&&s.didMove&&k){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance){i(!0),e.closeToast(!0),e.collapseAll();return}k.style.transition="transform 0.2s, opacity 0.2s",k.style.removeProperty("transform"),k.style.removeProperty("opacity")}}let E={onPointerDown:y,onPointerUp:v};return a&&l&&(E.onMouseEnter=h,e.stacked||(E.onMouseLeave=x)),f&&(E.onClick=k=>{c&&c(k),s.canCloseOnClick&&u(!0)}),{playToast:x,pauseToast:h,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:E}}var T1=typeof window<"u"?C.useLayoutEffect:C.useEffect,Wa=({theme:e,type:t,isLoading:n,...r})=>N.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function d5(e){return N.createElement(Wa,{...e},N.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function p5(e){return N.createElement(Wa,{...e},N.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function h5(e){return N.createElement(Wa,{...e},N.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function m5(e){return N.createElement(Wa,{...e},N.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function g5(){return N.createElement("div",{className:"Toastify__spinner"})}var Ic={info:p5,warning:d5,success:h5,error:m5,spinner:g5},y5=e=>e in Ic;function v5({theme:e,type:t,isLoading:n,icon:r}){let i=null,o={theme:e,type:t};return r===!1||(Zt(r)?i=r({...o,isLoading:n}):C.isValidElement(r)?i=C.cloneElement(r,o):n?i=Ic.spinner():y5(t)&&(i=Ic[t](o))),i}var x5=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:o}=f5(e),{closeButton:s,children:a,autoClose:l,onClick:u,type:c,hideProgressBar:f,closeToast:d,transition:g,position:y,className:v,style:x,progressClassName:h,updateId:p,role:m,progress:w,rtl:T,toastId:E,deleteToast:k,isIn:P,isLoading:I,closeOnClick:_,theme:$,ariaLabel:G}=e,ne=Xn("Toastify__toast",`Toastify__toast-theme--${$}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":T},{"Toastify__toast--close-on-click":_}),Se=Zt(v)?v({rtl:T,position:y,type:c,defaultClassName:ne}):Xn(ne,v),Ae=v5(e),le=!!w||!l,ke={closeToast:d,type:c,theme:$},A=null;return s===!1||(Zt(s)?A=s(ke):C.isValidElement(s)?A=C.cloneElement(s,ke):A=X4(ke)),N.createElement(g,{isIn:P,done:k,position:y,preventExitTransition:n,nodeRef:r,playToast:o},N.createElement("div",{id:E,tabIndex:0,onClick:u,"data-in":P,className:Se,...i,style:x,ref:r,...P&&{role:m,"aria-label":G}},Ae!=null&&N.createElement("div",{className:Xn("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!I})},Ae),y1(a,e,!t),A,!e.customProgressBar&&N.createElement(Q4,{...p&&!le?{key:`p-${p}`}:{},rtl:T,theme:$,delay:l,isRunning:t,isIn:P,closeToast:d,hide:f,type:c,className:h,controlledProgress:le,progress:w||0})))},w5=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),S5=Y4(w5("bounce",!0)),k5={position:"top-right",transition:S5,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function T5(e){let t={...k5,...e},n=e.stacked,[r,i]=C.useState(!0),o=C.useRef(null),{getToastToRender:s,isToastActive:a,count:l}=c5(t),{className:u,style:c,rtl:f,containerId:d,hotKeys:g}=t;function y(x){let h=Xn("Toastify__toast-container",`Toastify__toast-container--${x}`,{"Toastify__toast-container--rtl":f});return Zt(u)?u({position:x,rtl:f,defaultClassName:h}):Xn(h,Mc(u))}function v(){n&&(i(!0),H.play())}return T1(()=>{var x;if(n){let h=o.current.querySelectorAll('[data-in="true"]'),p=12,m=(x=t.position)==null?void 0:x.includes("top"),w=0,T=0;Array.from(h).reverse().forEach((E,k)=>{let P=E;P.classList.add("Toastify__toast--stacked"),k>0&&(P.dataset.collapsed=`${r}`),P.dataset.pos||(P.dataset.pos=m?"top":"bot");let I=w*(r?.2:1)+(r?0:p*k),_=Math.max(.5,1-(r?T:0));P.style.setProperty("--y",`${m?I:I*-1}px`),P.style.setProperty("--g",`${p}`),P.style.setProperty("--s",`${_}`),w+=P.offsetHeight,T+=.025})}},[r,l,n]),C.useEffect(()=>{function x(h){var p;let m=o.current;g(h)&&((p=m==null?void 0:m.querySelector('[tabIndex="0"]'))==null||p.focus(),i(!1),H.pause()),h.key==="Escape"&&(document.activeElement===m||m!=null&&m.contains(document.activeElement))&&(i(!0),H.play())}return document.addEventListener("keydown",x),()=>{document.removeEventListener("keydown",x)}},[g]),N.createElement("section",{ref:o,className:"Toastify",id:d,onMouseEnter:()=>{n&&(i(!1),H.pause())},onMouseLeave:v,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},s((x,h)=>{let p=h.length?{...c}:{...c,pointerEvents:"none"};return N.createElement("div",{tabIndex:-1,className:y(x),"data-stacked":n,style:p,key:`c-${x}`},h.map(({content:m,props:w})=>N.createElement(x5,{...w,stacked:n,collapseAll:v,isIn:a(w.toastId,w.containerId),key:`t-${w.key}`},m)))}))}var C5=`:root {
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
`,Em=new Map,E5=(e,t)=>{T1(()=>{if(!e||typeof document>"u")return;let n=document,r=Em.get(n);if(r){t&&r.setAttribute("nonce",t);return}let i=n.createElement("style");i.textContent=e,t&&i.setAttribute("nonce",t),n.head.appendChild(i),Em.set(n,i)},[t])};function P5(e){return E5(C5,e.nonce),N.createElement(T5,{...e})}const _5=()=>{const[e,t]=C.useState({name:"",tel:""}),n=async r=>{r.preventDefault(),t({name:"",tel:""}),console.log(e);const i={}.VITE_TELEGRAM_BOT_TOKEN,o={}.VITE_TELEGRAM_CHAT_ID,s=`📸 *Нове замовлення дзвінка!*

👤 *Ім'я:* ${e.name}
📞 *Телефон:* ${e.tel}`;try{(await fetch(`https://api.telegram.org/bot${i}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:o,text:s,parse_mode:"Markdown"})})).ok?(H.info(`Дякую, ${e.name}! Я зв'яжусь з вами.`,{icon:!1}),t({name:"",tel:""})):H("Помилка відправки. Спробуйте ще раз.")}catch(a){console.error("Помилка:",a),alert("Щось пішло не так...")}};return S.jsxs(R4,{children:[S.jsx(P5,{position:"top-right",autoClose:4e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),S.jsxs(jr.div,{initial:{opacity:0,y:80},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:1,ease:"easeOut"},children:[S.jsx(M4,{children:"Контакти"}),S.jsxs(L4,{children:[S.jsxs(j4,{children:[S.jsx(I4,{children:"Бажаєте замовити фотосесію або є індивідуальна ідея? Залиште свій номер і ми обговоримо всі деталі."}),S.jsxs(D4,{onSubmit:n,children:[S.jsx(km,{type:"text",placeholder:"Ваше ім'я",value:e.name,onChange:r=>t({...e,name:r.target.value}),required:!0}),S.jsx(km,{type:"tel",placeholder:"Номер телефону",value:e.tel,onChange:r=>t({...e,tel:r.target.value}),required:!0}),S.jsx($4,{type:"submit",children:"Надіслати"})]})]}),S.jsxs(O4,{children:[S.jsxs(N4,{children:[S.jsx(V4,{loading:"lazy",src:"/portfolio/images/img4.JPG",alt:"Mary I Photography"})," "]}),S.jsxs(z4,{children:[S.jsxs(F4,{children:[S.jsx(Tm,{children:"Локація"}),S.jsx(U4,{children:"Київ — Конотоп"})]}),S.jsxs(B4,{children:[S.jsx(Tm,{children:"Зв'язок"}),S.jsxs(W4,{children:[S.jsx(Ql,{href:"https://instagram.com",target:"_blank",rel:"noreferrer","aria-label":"Instagram",children:S.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[S.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),S.jsx("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),S.jsx("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]})}),S.jsx(Ql,{href:"https://t.me",target:"_blank",rel:"noreferrer","aria-label":"Telegram",children:S.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[S.jsx("path",{d:"m22 2-7 20-4-9-9-4Z"}),S.jsx("path",{d:"M22 2 11 13"})]})}),S.jsx(Ql,{href:"mailto:info@example.com","aria-label":"Email",children:S.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[S.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),S.jsx("polyline",{points:"22,6 12,13 2,6"})]})})]})]})]})]})]})]})]})},b5=()=>{const{pathname:e}=So();return C.useEffect(()=>{window.scrollTo(0,0)},[e]),null};function A5(){return console.log("test"),S.jsxs(BT,{children:[S.jsx(UT,{}),S.jsx(b5,{}),S.jsx(HS,{children:S.jsxs($n,{path:"/",element:S.jsx(Hk,{}),children:[S.jsx($n,{index:!0,element:S.jsx(h4,{})}),S.jsx($n,{path:"/portfolio",element:S.jsx(k4,{})}),S.jsx($n,{path:"/tariffs",element:S.jsx(A4,{})}),S.jsx($n,{path:"/contacts",element:S.jsx(_5,{})}),S.jsx($n,{path:"*",element:S.jsx(FT,{})})]})})]})}Gu.createRoot(document.getElementById("root")).render(S.jsx(N.StrictMode,{children:S.jsx(ZS,{basename:"/portfolio/",children:S.jsx(A5,{})})}));
