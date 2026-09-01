var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},s=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),c=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},l=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},u=(n,r,o)=>(o=n==null?{}:e(i(n)),l(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n)),d=e=>a.call(e,`module.exports`)?e[`module.exports`]:l(t({},`__esModule`,{value:!0}),e);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var f=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function te(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ne(e,t){return te(e.type,t,e.props)}function re(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ae=/\/+/g;function oe(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function T(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+oe(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ae,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(re(o)&&(o=ne(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ae,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+oe(a,u),c+=se(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+oe(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(T(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var E=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},D={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!re(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=D,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return te(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return te(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=re,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,E)}catch(e){E(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),p=s(((e,t)=>{t.exports=f()})),m=s((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,re());else{var t=n(l);t!==null&&oe(x,t.startTime-e)}}var S=!1,C=-1,w=5,ee=-1;function te(){return g?!0:!(e.unstable_now()-ee<w)}function ne(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&oe(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}}}finally{i?re():S=!1}}}var re;if(typeof y==`function`)re=function(){y(ne)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=ne,re=function(){ae.postMessage(null)}}else re=function(){_(ne,0)};function oe(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,oe(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,re()))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),h=s(((e,t)=>{t.exports=m()})),g=s((e=>{var t=p();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),_=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=s((e=>{var t=h(),n=p(),r=_();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function d(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=d(e),t!==null)return t;e=e.sibling}return null}var f=Object.assign,m=Symbol.for(`react.element`),g=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),te=Symbol.for(`react.suspense_list`),ne=Symbol.for(`react.memo`),re=Symbol.for(`react.lazy`),ie=Symbol.for(`react.activity`),ae=Symbol.for(`react.memo_cache_sentinel`),oe=Symbol.iterator;function T(e){return typeof e!=`object`||!e?null:(e=oe&&e[oe]||e[`@@iterator`],typeof e==`function`?e:null)}var se=Symbol.for(`react.client.reference`);function ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case te:return`SuspenseList`;case ie:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ne:return t=e.displayName||null,t===null?ce(e.type)||`Memo`:t;case re:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}var le=Array.isArray,E=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},de=[],fe=-1;function pe(e){return{current:e}}function me(e){0>fe||(e.current=de[fe],de[fe]=null,fe--)}function O(e,t){fe++,de[fe]=e.current,e.current=t}var he=pe(null),ge=pe(null),_e=pe(null),ve=pe(null);function ye(e,t){switch(O(_e,t),O(ge,e),O(he,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ud(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ud(t),e=Wd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}me(he),O(he,e)}function be(){me(he),me(ge),me(_e)}function xe(e){e.memoizedState!==null&&O(ve,e);var t=he.current,n=Wd(t,e.type);t!==n&&(O(ge,e),O(he,n))}function Se(e){ge.current===e&&(me(he),me(ge)),ve.current===e&&(me(ve),ep._currentValue=ue)}var Ce,we;function Te(e){if(Ce===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ce=t&&t[1]||``,we=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ce+e+we}var Ee=!1;function De(e,t){if(!e||Ee)return``;Ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ee=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Te(n):``}function Oe(e,t){switch(e.tag){case 26:case 27:case 5:return Te(e.type);case 16:return Te(`Lazy`);case 13:return e.child!==t&&t!==null?Te(`Suspense Fallback`):Te(`Suspense`);case 19:return Te(`SuspenseList`);case 0:case 15:return De(e.type,!1);case 11:return De(e.type.render,!1);case 1:return De(e.type,!0);case 31:return Te(`Activity`);default:return``}}function ke(e){try{var t=``,n=null;do t+=Oe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ae=Object.prototype.hasOwnProperty,je=t.unstable_scheduleCallback,Me=t.unstable_cancelCallback,Ne=t.unstable_shouldYield,Pe=t.unstable_requestPaint,Fe=t.unstable_now,Ie=t.unstable_getCurrentPriorityLevel,Le=t.unstable_ImmediatePriority,Re=t.unstable_UserBlockingPriority,ze=t.unstable_NormalPriority,Be=t.unstable_LowPriority,Ve=t.unstable_IdlePriority,He=t.log,Ue=t.unstable_setDisableYieldValue,We=null,Ge=null;function Ke(e){if(typeof He==`function`&&Ue(e),Ge&&typeof Ge.setStrictMode==`function`)try{Ge.setStrictMode(We,e)}catch{}}var qe=Math.clz32?Math.clz32:Xe,Je=Math.log,Ye=Math.LN2;function Xe(e){return e>>>=0,e===0?32:31-(Je(e)/Ye|0)|0}var Ze=256,Qe=262144,$e=4194304;function et(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=et(n))):i=et(o):i=et(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=et(n))):i=et(o)):i=et(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function nt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function rt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function it(){var e=$e;return $e<<=1,!($e&62914560)&&($e=4194304),e}function at(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ot(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function st(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-qe(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ct(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ct(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-qe(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function lt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ut(e,t){var n=t&-t;return n=n&42?1:dt(n),(n&(e.suspendedLanes|t))===0?n:0}function dt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ft(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function pt(){var e=D.p;return e===0?(e=window.event,e===void 0?32:gp(e.type)):e}function mt(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var ht=Math.random().toString(36).slice(2),gt=`__reactFiber$`+ht,_t=`__reactProps$`+ht,vt=`__reactContainer$`+ht,yt=`__reactEvents$`+ht,bt=`__reactListeners$`+ht,xt=`__reactHandles$`+ht,St=`__reactResources$`+ht,Ct=`__reactMarker$`+ht;function wt(e){delete e[gt],delete e[_t],delete e[yt],delete e[bt],delete e[xt]}function Tt(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=pf(e);e!==null;){if(n=e[gt])return n;e=pf(e)}return t}e=n,n=e.parentNode}return null}function Et(e){if(e=e[gt]||e[vt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Dt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Ot(e){var t=e[St];return t||=e[St]={hoistableStyles:new Map,hoistableScripts:new Map},t}function kt(e){e[Ct]=!0}var At=new Set,jt={};function Mt(e,t){Nt(e,t),Nt(e+`Capture`,t)}function Nt(e,t){for(jt[e]=t,e=0;e<t.length;e++)At.add(t[e])}var Pt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ft={},It={};function Lt(e){return Ae.call(It,e)?!0:Ae.call(Ft,e)?!1:Pt.test(e)?It[e]=!0:(Ft[e]=!0,!1)}function Rt(e,t,n){if(Lt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function zt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Bt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Vt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ht(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ut(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wt(e){if(!e._valueTracker){var t=Ht(e)?`checked`:`value`;e._valueTracker=Ut(e,t,``+e[t])}}function Gt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ht(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Kt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var qt=/[\n"\\]/g;function Jt(e){return e.replace(qt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Yt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Vt(t)):e.value!==``+Vt(t)&&(e.value=``+Vt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Zt(e,o,Vt(n)):Zt(e,o,Vt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Vt(s):e.removeAttribute(`name`)}function Xt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Wt(e);return}n=n==null?``:``+Vt(n),t=t==null?n:``+Vt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Wt(e)}function Zt(e,t,n){t===`number`&&Kt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Qt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $t(e,t,n){if(t!=null&&(t=``+Vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Vt(n)}function en(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(le(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Vt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Wt(e)}function tn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var nn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function rn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||nn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function an(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&rn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&rn(e,o,t[o])}function on(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var sn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),cn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ln(e){return cn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function un(){}var dn=null;function fn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pn=null,mn=null;function hn(e){var t=Et(e);if(t&&(e=t.stateNode)){var n=e[_t]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Yt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Jt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[_t]||null;if(!a)throw Error(i(90));Yt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Gt(r)}break a;case`textarea`:$t(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}}}var gn=!1;function _n(e,t,n){if(gn)return e(t,n);gn=!0;try{return e(t)}finally{if(gn=!1,(pn!==null||mn!==null)&&(Su(),pn&&(t=pn,e=mn,mn=pn=null,hn(t),e)))for(t=0;t<e.length;t++)hn(e[t])}}function vn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[_t]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var yn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),bn=!1;if(yn)try{var xn={};Object.defineProperty(xn,"passive",{get:function(){bn=!0}}),window.addEventListener(`test`,xn,xn),window.removeEventListener(`test`,xn,xn)}catch{bn=!1}var Sn=null,Cn=null,wn=null;function Tn(){if(wn)return wn;var e,t=Cn,n=t.length,r,i=`value`in Sn?Sn.value:Sn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return wn=i.slice(e,1<r?1-r:void 0)}function En(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dn(){return!0}function On(){return!1}function kn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Dn:On,this.isPropagationStopped=On,this}return f(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Dn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Dn)},persist:function(){},isPersistent:Dn}),t}var An={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jn=kn(An),Mn=f({},An,{view:0,detail:0}),Nn=kn(Mn),Pn,Fn,In,Ln=f({},Mn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==In&&(In&&e.type===`mousemove`?(Pn=e.screenX-In.screenX,Fn=e.screenY-In.screenY):Fn=Pn=0,In=e),Pn)},movementY:function(e){return`movementY`in e?e.movementY:Fn}}),Rn=kn(Ln),zn=kn(f({},Ln,{dataTransfer:0})),Bn=kn(f({},Mn,{relatedTarget:0})),Vn=kn(f({},An,{animationName:0,elapsedTime:0,pseudoElement:0})),Hn=kn(f({},An,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Un=kn(f({},An,{data:0})),Wn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Gn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Kn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function qn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kn[e])?!!t[e]:!1}function Jn(){return qn}var Yn=kn(f({},Mn,{key:function(e){if(e.key){var t=Wn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=En(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Gn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jn,charCode:function(e){return e.type===`keypress`?En(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?En(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Xn=kn(f({},Ln,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Zn=kn(f({},Mn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jn})),Qn=kn(f({},An,{propertyName:0,elapsedTime:0,pseudoElement:0})),$n=kn(f({},Ln,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),er=kn(f({},An,{newState:0,oldState:0})),tr=[9,13,27,32],k=yn&&`CompositionEvent`in window,nr=null;yn&&`documentMode`in document&&(nr=document.documentMode);var rr=yn&&`TextEvent`in window&&!nr,ir=yn&&(!k||nr&&8<nr&&11>=nr),ar=` `,or=!1;function sr(e,t){switch(e){case`keyup`:return tr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function cr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var lr=!1;function ur(e,t){switch(e){case`compositionend`:return cr(t);case`keypress`:return t.which===32?(or=!0,ar):null;case`textInput`:return e=t.data,e===ar&&or?null:e;default:return null}}function dr(e,t){if(lr)return e===`compositionend`||!k&&sr(e,t)?(e=Tn(),wn=Cn=Sn=null,lr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ir&&t.locale!==`ko`?null:t.data;default:return null}}var fr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!fr[e.type]:t===`textarea`}function mr(e,t,n,r){pn?mn?mn.push(r):mn=[r]:pn=r,t=Od(t,`onChange`),0<t.length&&(n=new jn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var hr=null,gr=null;function _r(e){xd(e,0)}function vr(e){if(Gt(Dt(e)))return e}function yr(e,t){if(e===`change`)return t}var br=!1;if(yn){var xr;if(yn){var Sr=`oninput`in document;if(!Sr){var Cr=document.createElement(`div`);Cr.setAttribute(`oninput`,`return;`),Sr=typeof Cr.oninput==`function`}xr=Sr}else xr=!1;br=xr&&(!document.documentMode||9<document.documentMode)}function wr(){hr&&(hr.detachEvent(`onpropertychange`,Tr),gr=hr=null)}function Tr(e){if(e.propertyName===`value`&&vr(gr)){var t=[];mr(t,gr,e,fn(e)),_n(_r,t)}}function Er(e,t,n){e===`focusin`?(wr(),hr=t,gr=n,hr.attachEvent(`onpropertychange`,Tr)):e===`focusout`&&wr()}function Dr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return vr(gr)}function Or(e,t){if(e===`click`)return vr(t)}function kr(e,t){if(e===`input`||e===`change`)return vr(t)}function Ar(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var jr=typeof Object.is==`function`?Object.is:Ar;function Mr(e,t){if(jr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ae.call(t,i)||!jr(e[i],t[i]))return!1}return!0}function Nr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pr(e,t){var n=Nr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Nr(n)}}function Fr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ir(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Kt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Kt(e.document)}return t}function Lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Rr=yn&&`documentMode`in document&&11>=document.documentMode,zr=null,Br=null,Vr=null,Hr=!1;function Ur(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hr||zr==null||zr!==Kt(r)||(r=zr,`selectionStart`in r&&Lr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vr&&Mr(Vr,r)||(Vr=r,r=Od(Br,`onSelect`),0<r.length&&(t=new jn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=zr)))}function Wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Gr={animationend:Wr(`Animation`,`AnimationEnd`),animationiteration:Wr(`Animation`,`AnimationIteration`),animationstart:Wr(`Animation`,`AnimationStart`),transitionrun:Wr(`Transition`,`TransitionRun`),transitionstart:Wr(`Transition`,`TransitionStart`),transitioncancel:Wr(`Transition`,`TransitionCancel`),transitionend:Wr(`Transition`,`TransitionEnd`)},Kr={},qr={};yn&&(qr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),`TransitionEvent`in window||delete Gr.transitionend.transition);function Jr(e){if(Kr[e])return Kr[e];if(!Gr[e])return e;var t=Gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qr)return Kr[e]=t[n];return e}var Yr=Jr(`animationend`),Xr=Jr(`animationiteration`),Zr=Jr(`animationstart`),Qr=Jr(`transitionrun`),$r=Jr(`transitionstart`),ei=Jr(`transitioncancel`),ti=Jr(`transitionend`),ni=new Map,ri=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ri.push(`scrollEnd`);function ii(e,t){ni.set(e,t),Mt(t,[e])}var ai=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},oi=[],si=0,ci=0;function li(){for(var e=si,t=ci=si=0;t<e;){var n=oi[t];oi[t++]=null;var r=oi[t];oi[t++]=null;var i=oi[t];oi[t++]=null;var a=oi[t];if(oi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&pi(n,i,a)}}function ui(e,t,n,r){oi[si++]=e,oi[si++]=t,oi[si++]=n,oi[si++]=r,ci|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function di(e,t,n,r){return ui(e,t,n,r),mi(e)}function fi(e,t){return ui(e,null,null,t),mi(e)}function pi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-qe(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function mi(e){if(50<pu)throw pu=0,mu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var hi={};function gi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function A(e,t,n,r){return new gi(e,t,n,r)}function _i(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vi(e,t){var n=e.alternate;return n===null?(n=A(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function yi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function bi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)_i(e)&&(s=1);else if(typeof e==`string`)s=Gf(e,n,he.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ie:return e=A(31,n,t,a),e.elementType=ie,e.lanes=o,e;case y:return xi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=A(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=A(13,n,t,a),e.elementType=ee,e.lanes=o,e;case te:return e=A(19,n,t,a),e.elementType=te,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ne:s=14;break a;case re:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=A(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function xi(e,t,n,r){return e=A(7,e,r,t),e.lanes=n,e}function Si(e,t,n){return e=A(6,e,null,t),e.lanes=n,e}function Ci(e){var t=A(18,null,null,0);return t.stateNode=e,t}function wi(e,t,n){return t=A(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ti=new WeakMap;function Ei(e,t){if(typeof e==`object`&&e){var n=Ti.get(e);return n===void 0?(t={value:e,source:t,stack:ke(t)},Ti.set(e,t),t):n}return{value:e,source:t,stack:ke(t)}}var Di=[],Oi=0,ki=null,Ai=0,ji=[],Mi=0,Ni=null,Pi=1,Fi=``;function Ii(e,t){Di[Oi++]=Ai,Di[Oi++]=ki,ki=e,Ai=t}function Li(e,t,n){ji[Mi++]=Pi,ji[Mi++]=Fi,ji[Mi++]=Ni,Ni=e;var r=Pi;e=Fi;var i=32-qe(r)-1;r&=~(1<<i),n+=1;var a=32-qe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Pi=1<<32-qe(t)+i|n<<i|r,Fi=a+e}else Pi=1<<a|n<<i|r,Fi=e}function Ri(e){e.return!==null&&(Ii(e,1),Li(e,1,0))}function zi(e){for(;e===ki;)ki=Di[--Oi],Di[Oi]=null,Ai=Di[--Oi],Di[Oi]=null;for(;e===Ni;)Ni=ji[--Mi],ji[Mi]=null,Fi=ji[--Mi],ji[Mi]=null,Pi=ji[--Mi],ji[Mi]=null}function Bi(e,t){ji[Mi++]=Pi,ji[Mi++]=Fi,ji[Mi++]=Ni,Pi=t.id,Fi=t.overflow,Ni=e}var Vi=null,j=null,M=!1,Hi=null,Ui=!1,Wi=Error(i(519));function Gi(e){throw Zi(Ei(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Wi}function Ki(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[gt]=e,t[_t]=r,n){case`dialog`:X(`cancel`,t),X(`close`,t);break;case`iframe`:case`object`:case`embed`:X(`load`,t);break;case`video`:case`audio`:for(n=0;n<yd.length;n++)X(yd[n],t);break;case`source`:X(`error`,t);break;case`img`:case`image`:case`link`:X(`error`,t),X(`load`,t);break;case`details`:X(`toggle`,t);break;case`input`:X(`invalid`,t),Xt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:X(`invalid`,t);break;case`textarea`:X(`invalid`,t),en(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Pd(t.textContent,n)?(r.popover!=null&&(X(`beforetoggle`,t),X(`toggle`,t)),r.onScroll!=null&&X(`scroll`,t),r.onScrollEnd!=null&&X(`scrollend`,t),r.onClick!=null&&(t.onclick=un),t=!0):t=!1,t||Gi(e,!0)}function qi(e){for(Vi=e.return;Vi;)switch(Vi.tag){case 5:case 31:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:Vi=Vi.return}}function Ji(e){if(e!==Vi)return!1;if(!M)return qi(e),M=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Gd(e.type,e.memoizedProps)),n=!n),n&&j&&Gi(e),qi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));j=ff(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));j=ff(e)}else t===27?(t=j,$d(e.type)?(e=df,df=null,j=e):j=t):j=Vi?uf(e.stateNode.nextSibling):null;return!0}function Yi(){j=Vi=null,M=!1}function Xi(){var e=Hi;return e!==null&&($l===null?$l=e:$l.push.apply($l,e),Hi=null),e}function Zi(e){Hi===null?Hi=[e]:Hi.push(e)}var Qi=pe(null),$i=null,ea=null;function ta(e,t,n){O(Qi,t._currentValue),t._currentValue=n}function na(e){e._currentValue=Qi.current,me(Qi)}function ra(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ia(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ra(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ra(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function aa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;jr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ve.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[ep]:e.push(ep))}a=a.return}e!==null&&ia(t,e,n,r),t.flags|=262144}function oa(e){for(e=e.firstContext;e!==null;){if(!jr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sa(e){$i=e,ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ca(e){return la($i,e)}function N(e,t){return $i===null&&sa(e),la(e,t)}function la(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ea===null){if(e===null)throw Error(i(308));ea=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ea=ea.next=t;return n}var ua=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},da=t.unstable_scheduleCallback,fa=t.unstable_NormalPriority,pa={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ma(){return{controller:new ua,data:new Map,refCount:0}}function ha(e){e.refCount--,e.refCount===0&&da(fa,function(){e.controller.abort()})}var ga=null,_a=0,va=0,ya=null;function ba(e,t){if(ga===null){var n=ga=[];_a=0,va=pd(),ya={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return _a++,t.then(xa,xa),t}function xa(){if(--_a===0&&ga!==null){ya!==null&&(ya.status=`fulfilled`);var e=ga;ga=null,va=0,ya=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Sa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ca=E.S;E.S=function(e,t){nu=Fe(),typeof t==`object`&&t&&typeof t.then==`function`&&ba(e,t),Ca!==null&&Ca(e,t)};var wa=pe(null);function Ta(){var e=wa.current;return e===null?W.pooledCache:e}function Ea(e,t){t===null?O(wa,wa.current):O(wa,t.pool)}function Da(){var e=Ta();return e===null?null:{parent:pa._currentValue,pool:e}}var Oa=Error(i(460)),ka=Error(i(474)),Aa=Error(i(542)),ja={then:function(){}};function Ma(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Na(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(un,un),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,La(e),e;default:if(typeof t.status==`string`)t.then(un,un);else{if(e=W,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,La(e),e}throw Fa=t,Oa}}function Pa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Fa=e,Oa):e}}var Fa=null;function Ia(){if(Fa===null)throw Error(i(459));var e=Fa;return Fa=null,e}function La(e){if(e===Oa||e===Aa)throw Error(i(483))}var P=null,Ra=0;function za(e){var t=Ra;return Ra+=1,P===null&&(P=[]),Na(P,e,t)}function Ba(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Va(e,t){throw t.$$typeof===m?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ha(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=vi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Si(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===re&&Pa(i)===t.type)?(t=a(t,n.props),Ba(t,n),t.return=e,t):(t=bi(n.type,n.key,n.props,null,e.mode,r),Ba(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=wi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=xi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Si(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case g:return n=bi(t.type,t.key,t.props,null,e.mode,n),Ba(n,t),n.return=e,n;case v:return t=wi(t,e.mode,n),t.return=e,t;case re:return t=Pa(t),f(e,t,n)}if(le(t)||T(t))return t=xi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,za(t),n);if(t.$$typeof===C)return f(e,N(e,t),n);Va(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case g:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case re:return n=Pa(n),p(e,t,n,r)}if(le(n)||T(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,za(n),r);if(n.$$typeof===C)return p(e,t,N(e,n),r);Va(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case g:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case re:return r=Pa(r),m(e,t,n,r,i)}if(le(r)||T(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,za(r),i);if(r.$$typeof===C)return m(e,t,n,N(t,r),i);Va(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),M&&Ii(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return M&&Ii(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),M&&Ii(i,h),l}function _(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),M&&Ii(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return M&&Ii(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),M&&Ii(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case g:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===re&&Pa(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ba(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=xi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=bi(o.type,o.key,o.props,null,e.mode,c),Ba(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}t(e,r),r=r.sibling}c=wi(o,e.mode,c),c.return=e,e=c}return s(e);case re:return o=Pa(o),b(e,r,o,c)}if(le(o))return h(e,r,o,c);if(T(o)){if(l=T(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),_(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,za(o),c);if(o.$$typeof===C)return b(e,r,N(e,o),c);Va(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Si(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ra=0;var i=b(e,t,n,r);return P=null,i}catch(t){if(t===Oa||t===Aa)throw t;var a=A(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ua=Ha(!0),Wa=Ha(!1),Ga=!1;function Ka(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=mi(e),pi(e,null,n),t}return ui(e,r,t,n),mi(e)}function Xa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}function Za(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Qa=!1;function $a(){if(Qa){var e=ya;if(e!==null)throw e}}function eo(e,t,n,r){Qa=!1;var i=e.updateQueue;Ga=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var p=s.lane&-536870913,m=p!==s.lane;if(m?(K&p)===p:(r&p)===p){p!==0&&p===va&&(Qa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;p=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,p);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,p=typeof h==`function`?h.call(_,d,p):h,p==null)break a;d=f({},d,p);break a;case 2:Ga=!0}}p=s.callback,p!==null&&(e.flags|=64,m&&(e.flags|=8192),m=i.callbacks,m===null?i.callbacks=[p]:m.push(p))}else m={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=m,c=d):u=u.next=m,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),ql|=o,e.lanes=o,e.memoizedState=d}}function to(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function no(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)to(n[e],t)}var ro=pe(null),io=pe(0);function ao(e,t){e=Kl,O(io,e),O(ro,t),Kl=e|t.baseLanes}function oo(){O(io,Kl),O(ro,ro.current)}function so(){Kl=io.current,me(ro),me(io)}var F=pe(null),co=null;function lo(e){var t=e.alternate;O(ho,ho.current&1),O(F,e),co===null&&(t===null||ro.current!==null||t.memoizedState!==null)&&(co=e)}function uo(e){O(ho,ho.current),O(F,e),co===null&&(co=e)}function fo(e){e.tag===22?(O(ho,ho.current),O(F,e),co===null&&(co=e)):po(e)}function po(){O(ho,ho.current),O(F,F.current)}function mo(e){me(F),co===e&&(co=null),me(ho)}var ho=pe(0);function go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||sf(n)||cf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _o=0,I=null,L=null,vo=null,yo=!1,bo=!1,xo=!1,So=0,Co=0,wo=null,To=0;function R(){throw Error(i(321))}function Eo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jr(e[n],t[n]))return!1;return!0}function Do(e,t,n,r,i,a){return _o=a,I=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?Us:Ws,xo=!1,a=n(r,i),xo=!1,bo&&(a=ko(t,n,r,i)),Oo(e),a}function Oo(e){E.H=Hs;var t=L!==null&&L.next!==null;if(_o=0,vo=L=I=null,yo=!1,Co=0,wo=null,t)throw Error(i(300));e===null||B||(e=e.dependencies,e!==null&&oa(e)&&(B=!0))}function ko(e,t,n,r){I=e;var a=0;do{if(bo&&(wo=null),Co=0,bo=!1,25<=a)throw Error(i(301));if(a+=1,vo=L=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}E.H=Gs,o=t(n,r)}while(bo);return o}function Ao(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?Io(t):t,e=e.useState()[0],(L===null?null:L.memoizedState)!==e&&(I.flags|=1024),t}function jo(){var e=So!==0;return So=0,e}function Mo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function No(e){if(yo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}yo=!1}_o=0,vo=L=I=null,bo=!1,Co=So=0,wo=null}function Po(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vo===null?I.memoizedState=vo=e:vo=vo.next=e,vo}function z(){if(L===null){var e=I.alternate;e=e===null?null:e.memoizedState}else e=L.next;var t=vo===null?I.memoizedState:vo.next;if(t!==null)vo=t,L=e;else{if(e===null)throw I.alternate===null?Error(i(467)):Error(i(310));L=e,e={memoizedState:L.memoizedState,baseState:L.baseState,baseQueue:L.baseQueue,queue:L.queue,next:null},vo===null?I.memoizedState=vo=e:vo=vo.next=e}return vo}function Fo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Io(e){var t=Co;return Co+=1,wo===null&&(wo=[]),e=Na(wo,e,t),t=I,(vo===null?t.memoizedState:vo.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?Us:Ws),e}function Lo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Io(e);if(e.$$typeof===C)return ca(e)}throw Error(i(438,String(e)))}function Ro(e){var t=null,n=I.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=I.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Fo(),I.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ae;return t.index++,n}function zo(e,t){return typeof t==`function`?t(e):t}function Bo(e){return Vo(z(),L,e)}function Vo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(_o&f)===f:(K&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===va&&(d=!0);else if((_o&p)===p){u=u.next,p===va&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,I.lanes|=p,ql|=p;f=u.action,xo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,I.lanes|=f,ql|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!jr(o,e.memoizedState)&&(B=!0,d&&(n=ya,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ho(e){var t=z(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);jr(o,t.memoizedState)||(B=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Uo(e,t,n){var r=I,a=z(),o=M;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!jr((L||a).memoizedState,n);if(s&&(a.memoizedState=n,B=!0),a=a.queue,ms(Ko.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||vo!==null&&vo.memoizedState.tag&1){if(r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,a,n,t),null),W===null)throw Error(i(349));o||_o&127||Wo(r,t,n)}return n}function Wo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=I.updateQueue,t===null?(t=Fo(),I.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Go(e,t,n,r){t.value=n,t.getSnapshot=r,qo(t)&&Jo(e)}function Ko(e,t,n){return n(function(){qo(t)&&Jo(e)})}function qo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jr(e,n)}catch{return!0}}function Jo(e){var t=fi(e,2);t!==null&&_u(t,e,2)}function Yo(e){var t=Po();if(typeof e==`function`){var n=e;if(e=n(),xo){Ke(!0);try{n()}finally{Ke(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:e},t}function Xo(e,t,n,r){return e.baseState=n,Vo(e,L,typeof r==`function`?r:zo)}function Zo(e,t,n,r,a){if(zs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};E.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Qo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Qo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),$o(e,t,s)}catch(n){ts(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),E.T=a}}else try{a=n(i,r),$o(e,t,a)}catch(n){ts(e,t,n)}}function $o(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){es(e,t,n)},function(n){return ts(e,t,n)}):es(e,t,n)}function es(e,t,n){t.status=`fulfilled`,t.value=n,ns(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Qo(e,n)))}function ts(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ns(t),t=t.next;while(t!==r)}e.action=null}function ns(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function rs(e,t){return t}function is(e,t){if(M){var n=W.formState;if(n!==null){a:{var r=I;if(M){if(j){b:{for(var i=j,a=Ui;i.nodeType!==8;){if(!a){i=null;break b}if(i=uf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){j=uf(i.nextSibling),r=i.data===`F!`;break a}}Gi(r)}r=!1}r&&(t=n[0])}}return n=Po(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:t},n.queue=r,n=Is.bind(null,I,r),r.dispatch=n,r=Yo(!1),a=Rs.bind(null,I,!1,r.queue),r=Po(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Zo.bind(null,I,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function as(e){return os(z(),L,e)}function os(e,t,n){if(t=Vo(e,t,rs)[0],e=Bo(zo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Io(t)}catch(e){throw e===Oa?Aa:e}else r=t;t=z();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(I.flags|=2048,ls(9,{destroy:void 0},ss.bind(null,i,n),null)),[r,a,e]}function ss(e,t){e.action=t}function cs(e){var t=z(),n=L;if(n!==null)return os(t,n,e);z(),t=t.memoizedState,n=z();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ls(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=I.updateQueue,t===null&&(t=Fo(),I.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function us(){return z().memoizedState}function ds(e,t,n,r){var i=Po();I.flags|=e,i.memoizedState=ls(1|t,{destroy:void 0},n,r===void 0?null:r)}function fs(e,t,n,r){var i=z();r=r===void 0?null:r;var a=i.memoizedState.inst;L!==null&&r!==null&&Eo(r,L.memoizedState.deps)?i.memoizedState=ls(t,a,n,r):(I.flags|=e,i.memoizedState=ls(1|t,a,n,r))}function ps(e,t){ds(8390656,8,e,t)}function ms(e,t){fs(2048,8,e,t)}function hs(e){I.flags|=4;var t=I.updateQueue;if(t===null)t=Fo(),I.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function gs(e){var t=z().memoizedState;return hs({ref:t,nextImpl:e}),function(){if(U&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function _s(e,t){return fs(4,2,e,t)}function vs(e,t){return fs(4,4,e,t)}function ys(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bs(e,t,n){n=n==null?null:n.concat([e]),fs(4,4,ys.bind(null,t,e),n)}function xs(){}function Ss(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Eo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cs(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Eo(t,r[1]))return r[0];if(r=e(),xo){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r}function ws(e,t,n){return n===void 0||_o&1073741824&&!(K&261930)?e.memoizedState=t:(e.memoizedState=n,e=gu(),I.lanes|=e,ql|=e,n)}function Ts(e,t,n,r){return jr(n,t)?n:ro.current===null?!(_o&42)||_o&1073741824&&!(K&261930)?(B=!0,e.memoizedState=n):(e=gu(),I.lanes|=e,ql|=e,t):(e=ws(e,n,r),jr(e,t)||(B=!0),e)}function Es(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};E.T=s,Rs(e,!1,t,n);try{var c=i(),l=E.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ls(e,t,Sa(c,r),hu(e)):Ls(e,t,r,hu(e))}catch(n){Ls(e,t,{then:function(){},status:`rejected`,reason:n},hu())}finally{D.p=a,o!==null&&s.types!==null&&(o.types=s.types),E.T=o}}function Ds(){}function Os(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=ks(e).queue;Es(e,a,t,ue,n===null?Ds:function(){return As(e),n(r)})}function ks(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function As(e){var t=ks(e);t.next===null&&(t=e.alternate.memoizedState),Ls(e,t.next.queue,{},hu())}function js(){return ca(ep)}function Ms(){return z().memoizedState}function Ns(){return z().memoizedState}function Ps(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=hu();e=Ja(n);var r=Ya(t,e,n);r!==null&&(_u(r,t,n),Xa(r,t,n)),t={cache:ma()},e.payload=t;return}t=t.return}}function Fs(e,t,n){var r=hu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},zs(e)?Bs(t,n):(n=di(e,t,n,r),n!==null&&(_u(n,e,r),Vs(n,t,r)))}function Is(e,t,n){Ls(e,t,n,hu())}function Ls(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(zs(e))Bs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,jr(s,o))return ui(e,t,i,0),W===null&&li(),!1}catch{}if(n=di(e,t,i,r),n!==null)return _u(n,e,r),Vs(n,t,r),!0}return!1}function Rs(e,t,n,r){if(r={lane:2,revertLane:pd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},zs(e)){if(t)throw Error(i(479))}else t=di(e,n,r,2),t!==null&&_u(t,e,2)}function zs(e){var t=e.alternate;return e===I||t!==null&&t===I}function Bs(e,t){bo=yo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}var Hs={readContext:ca,use:Lo,useCallback:R,useContext:R,useEffect:R,useImperativeHandle:R,useLayoutEffect:R,useInsertionEffect:R,useMemo:R,useReducer:R,useRef:R,useState:R,useDebugValue:R,useDeferredValue:R,useTransition:R,useSyncExternalStore:R,useId:R,useHostTransitionStatus:R,useFormState:R,useActionState:R,useOptimistic:R,useMemoCache:R,useCacheRefresh:R};Hs.useEffectEvent=R;var Us={readContext:ca,use:Lo,useCallback:function(e,t){return Po().memoizedState=[e,t===void 0?null:t],e},useContext:ca,useEffect:ps,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ds(4194308,4,ys.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ds(4194308,4,e,t)},useInsertionEffect:function(e,t){ds(4,2,e,t)},useMemo:function(e,t){var n=Po();t=t===void 0?null:t;var r=e();if(xo){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Po();if(n!==void 0){var i=n(t);if(xo){Ke(!0);try{n(t)}finally{Ke(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Fs.bind(null,I,e),[r.memoizedState,e]},useRef:function(e){var t=Po();return e={current:e},t.memoizedState=e},useState:function(e){e=Yo(e);var t=e.queue,n=Is.bind(null,I,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:xs,useDeferredValue:function(e,t){return ws(Po(),e,t)},useTransition:function(){var e=Yo(!1);return e=Es.bind(null,I,e.queue,!0,!1),Po().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=I,a=Po();if(M){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),W===null)throw Error(i(349));K&127||Wo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ps(Ko.bind(null,r,o,e),[e]),r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,o,n,t),null),n},useId:function(){var e=Po(),t=W.identifierPrefix;if(M){var n=Fi,r=Pi;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=So++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=To++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:js,useFormState:is,useActionState:is,useOptimistic:function(e){var t=Po();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Rs.bind(null,I,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ro,useCacheRefresh:function(){return Po().memoizedState=Ps.bind(null,I)},useEffectEvent:function(e){var t=Po(),n={impl:e};return t.memoizedState=n,function(){if(U&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Ws={readContext:ca,use:Lo,useCallback:Ss,useContext:ca,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Bo,useRef:us,useState:function(){return Bo(zo)},useDebugValue:xs,useDeferredValue:function(e,t){return Ts(z(),L.memoizedState,e,t)},useTransition:function(){var e=Bo(zo)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:Ms,useHostTransitionStatus:js,useFormState:as,useActionState:as,useOptimistic:function(e,t){return Xo(z(),L,e,t)},useMemoCache:Ro,useCacheRefresh:Ns};Ws.useEffectEvent=gs;var Gs={readContext:ca,use:Lo,useCallback:Ss,useContext:ca,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Ho,useRef:us,useState:function(){return Ho(zo)},useDebugValue:xs,useDeferredValue:function(e,t){var n=z();return L===null?ws(n,e,t):Ts(n,L.memoizedState,e,t)},useTransition:function(){var e=Ho(zo)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:Ms,useHostTransitionStatus:js,useFormState:cs,useActionState:cs,useOptimistic:function(e,t){var n=z();return L===null?(n.baseState=e,[e,n.queue.dispatch]):Xo(n,L,e,t)},useMemoCache:Ro,useCacheRefresh:Ns};Gs.useEffectEvent=gs;function Ks(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:f({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=hu(),i=Ja(r);i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(_u(t,e,r),Xa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=hu(),i=Ja(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(_u(t,e,r),Xa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=hu(),r=Ja(n);r.tag=2,t!=null&&(r.callback=t),t=Ya(e,r,n),t!==null&&(_u(t,e,n),Xa(t,e,n))}};function Js(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Mr(n,r)||!Mr(i,a):!0}function Ys(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&qs.enqueueReplaceState(t,t.state,null)}function Xs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=f({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Zs(e){ai(e)}function Qs(e){console.error(e)}function $s(e){ai(e)}function ec(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){return n=Ja(n),n.tag=3,n.payload={element:null},n.callback=function(){ec(e,t)},n}function rc(e){return e=Ja(e),e.tag=3,e}function ic(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){tc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){tc(t,n,r),typeof i!=`function`&&(au===null?au=new Set([this]):au.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ac(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&aa(t,n,a,!0),n=F.current,n!==null){switch(n.tag){case 31:case 13:return co===null?ku():n.alternate===null&&J===0&&(J=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===ja?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),qu(e,r,a)),!1;case 22:return n.flags|=65536,r===ja?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),qu(e,r,a)),!1}throw Error(i(435,n.tag))}return qu(e,r,a),ku(),!1}if(M)return t=F.current,t===null?(r!==Wi&&(t=Error(i(423),{cause:r}),Zi(Ei(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ei(r,n),a=nc(e.stateNode,r,a),Za(e,a),J!==4&&(J=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Wi&&(e=Error(i(422),{cause:r}),Zi(Ei(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ei(o,n),Ql===null?Ql=[o]:Ql.push(o),J!==4&&(J=2),t===null)return!0;r=Ei(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=nc(n.stateNode,r,e),Za(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(au===null||!au.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=rc(a),ic(a,e,n,r),Za(n,a),!1}n=n.return}while(n!==null);return!1}var oc=Error(i(461)),B=!1;function sc(e,t,n,r){t.child=e===null?Wa(t,null,n,r):Ua(t,e.child,n,r)}function cc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return sa(t),r=Do(e,t,n,o,a,i),s=jo(),e!==null&&!B?(Mo(e,t,i),Mc(e,t,i)):(M&&s&&Ri(t),t.flags|=1,sc(e,t,r,i),t.child)}function lc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!_i(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,uc(e,t,a,r,i)):(e=bi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Nc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Mr:n,n(o,r)&&e.ref===t.ref)return Mc(e,t,i)}return t.flags|=1,e=vi(a,r),e.ref=t.ref,e.return=t,t.child=e}function uc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Mr(a,r)&&e.ref===t.ref)if(B=!1,t.pendingProps=r=a,Nc(e,i))e.flags&131072&&(B=!0);else return t.lanes=e.lanes,Mc(e,t,i)}return vc(e,t,n,r,i)}function dc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return pc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ea(t,a===null?null:a.cachePool),a===null?oo():ao(t,a),fo(t);else return r=t.lanes=536870912,pc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ea(t,null),oo(),po(t)):(Ea(t,a.cachePool),ao(t,a),po(t),t.memoizedState=null);return sc(e,t,i,n),t.child}function fc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function pc(e,t,n,r,i){var a=Ta();return a=a===null?null:{parent:pa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ea(t,null),oo(),fo(t),e!==null&&aa(e,t,r,!0),t.childLanes=i,null}function mc(e,t){return t=Dc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function hc(e,t,n){return Ua(t,e.child,null,n),e=mc(t,t.pendingProps),e.flags|=2,mo(t),t.memoizedState=null,e}function gc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(M){if(r.mode===`hidden`)return e=mc(t,r),t.lanes=536870912,fc(null,e);if(uo(t),(e=j)?(e=of(e,Ui),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ni===null?null:{id:Pi,overflow:Fi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,Vi=t,j=null)):e=null,e===null)throw Gi(t);return t.lanes=536870912,null}return mc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(uo(t),a)if(t.flags&256)t.flags&=-257,t=hc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(B||aa(e,t,n,!1),a=(n&e.childLanes)!==0,B||a){if(r=W,r!==null&&(s=ut(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,fi(e,s),_u(r,e,s),oc;ku(),t=hc(e,t,n)}else e=o.treeContext,j=uf(s.nextSibling),Vi=t,M=!0,Hi=null,Ui=!1,e!==null&&Bi(t,e),t=mc(t,r),t.flags|=4096;return t}return e=vi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function _c(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function vc(e,t,n,r,i){return sa(t),n=Do(e,t,n,r,void 0,i),r=jo(),e!==null&&!B?(Mo(e,t,i),Mc(e,t,i)):(M&&r&&Ri(t),t.flags|=1,sc(e,t,n,i),t.child)}function yc(e,t,n,r,i,a){return sa(t),t.updateQueue=null,n=ko(t,r,n,i),Oo(e),r=jo(),e!==null&&!B?(Mo(e,t,a),Mc(e,t,a)):(M&&r&&Ri(t),t.flags|=1,sc(e,t,n,a),t.child)}function bc(e,t,n,r,i){if(sa(t),t.stateNode===null){var a=hi,o=n.contextType;typeof o==`object`&&o&&(a=ca(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=qs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ka(t),o=n.contextType,a.context=typeof o==`object`&&o?ca(o):hi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ks(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&qs.enqueueReplaceState(a,a.state,null),eo(t,r,a,i),$a(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Xs(n,s);a.props=c;var l=a.context,u=n.contextType;o=hi,typeof u==`object`&&u&&(o=ca(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ys(t,a,r,o),Ga=!1;var f=t.memoizedState;a.state=f,eo(t,r,a,i),$a(),l=t.memoizedState,s||f!==l||Ga?(typeof d==`function`&&(Ks(t,n,d,r),l=t.memoizedState),(c=Ga||Js(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,qa(e,t),o=t.memoizedProps,u=Xs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=hi,typeof l==`object`&&l&&(c=ca(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ys(t,a,r,c),Ga=!1,f=t.memoizedState,a.state=f,eo(t,r,a,i),$a();var p=t.memoizedState;o!==d||f!==p||Ga||e!==null&&e.dependencies!==null&&oa(e.dependencies)?(typeof s==`function`&&(Ks(t,n,s,r),p=t.memoizedState),(u=Ga||Js(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&oa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,_c(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ua(t,e.child,null,i),t.child=Ua(t,null,n,i)):sc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Mc(e,t,i),e}function xc(e,t,n,r){return Yi(),t.flags|=256,sc(e,t,n,r),t.child}var Sc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cc(e){return{baseLanes:e,cachePool:Da()}}function wc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Xl),e}function Tc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(ho.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(M){if(a?lo(t):po(t),(e=j)?(e=of(e,Ui),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ni===null?null:{id:Pi,overflow:Fi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,Vi=t,j=null)):e=null,e===null)throw Gi(t);return cf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(po(t),a=t.mode,c=Dc({mode:`hidden`,children:c},a),r=xi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,s,n),t.memoizedState=Sc,fc(null,r)):(lo(t),Ec(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(lo(t),t.flags&=-257,t=Oc(e,t,n)):t.memoizedState===null?(po(t),c=r.fallback,a=t.mode,r=Dc({mode:`visible`,children:r.children},a),c=xi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ua(t,e.child,null,n),r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,s,n),t.memoizedState=Sc,t=fc(null,r)):(po(t),t.child=e.child,t.flags|=128,t=null);else if(lo(t),cf(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Zi({value:r,source:null,stack:null}),t=Oc(e,t,n)}else if(B||aa(e,t,n,!1),s=(n&e.childLanes)!==0,B||s){if(s=W,s!==null&&(r=ut(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,fi(e,r),_u(s,e,r),oc;sf(c)||ku(),t=Oc(e,t,n)}else sf(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,j=uf(c.nextSibling),Vi=t,M=!0,Hi=null,Ui=!1,e!==null&&Bi(t,e),t=Ec(t,r.children),t.flags|=4096);return t}return a?(po(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=vi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=xi(c,a,n,null),c.flags|=2):c=vi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,fc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Cc(n):(a=c.cachePool,a===null?a=Da():(l=pa._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=wc(e,s,n),t.memoizedState=Sc,fc(e.child,r)):(lo(t),n=e.child,e=n.sibling,n=vi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Ec(e,t){return t=Dc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Dc(e,t){return e=A(22,e,null,t),e.lanes=0,e}function Oc(e,t,n){return Ua(t,e.child,null,n),e=Ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ra(e.return,t,n)}function Ac(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function jc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=ho.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,O(ho,o),sc(e,t,r,n),r=M?Ai:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kc(e,n,t);else if(e.tag===19)kc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&go(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ac(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&go(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ac(t,!0,n,null,a,r);break;case`together`:Ac(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Mc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ql|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(aa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=vi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&oa(e)))}function Pc(e,t,n){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),ta(t,pa,e.memoizedState.cache),Yi();break;case 27:case 5:xe(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,uo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(lo(t),e=Mc(e,t,n),e===null?null:e.sibling):Tc(e,t,n):(lo(t),t.flags|=128,null);lo(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(aa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return jc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(ho,ho.current),r)break;return null;case 22:return t.lanes=0,dc(e,t,n,t.pendingProps);case 24:ta(t,pa,e.memoizedState.cache)}return Mc(e,t,n)}function Fc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)B=!0;else{if(!Nc(e,n)&&!(t.flags&128))return B=!1,Pc(e,t,n);B=!!(e.flags&131072)}else B=!1,M&&t.flags&1048576&&Li(t,Ai,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Pa(t.elementType),t.type=e,typeof e==`function`)_i(e)?(r=Xs(e,r),t.tag=1,t=bc(null,t,e,r,n)):(t.tag=0,t=vc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=cc(null,t,e,r,n);break a}if(a===ne){t.tag=14,t=lc(null,t,e,r,n);break a}}throw t=ce(e)||e,Error(i(306,t,``))}}return t;case 0:return vc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Xs(r,t.pendingProps),bc(e,t,r,a,n);case 3:a:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,qa(e,t),eo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ta(t,pa,r),r!==o.cache&&ia(t,[pa],n,!0),$a(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=xc(e,t,r,n);break a}else if(r!==a){a=Ei(Error(i(424)),t),Zi(a),t=xc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(j=uf(e.firstChild),Vi=t,M=!0,Hi=null,Ui=!0,n=Wa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Yi(),r===a){t=Mc(e,t,n);break a}sc(e,t,r,n)}t=t.child}return t;case 26:return _c(e,t),e===null?(n=jf(t.type,null,t.pendingProps,null))?t.memoizedState=n:M||(n=t.type,e=t.pendingProps,r=Hd(_e.current).createElement(n),r[gt]=t,r[_t]=e,Id(r,n,e),kt(r),t.stateNode=r):t.memoizedState=jf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xe(t),e===null&&M&&(r=t.stateNode=mf(t.type,t.pendingProps,_e.current),Vi=t,Ui=!0,a=j,$d(t.type)?(df=a,j=uf(r.firstChild)):j=a),sc(e,t,t.pendingProps.children,n),_c(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&M&&((a=r=j)&&(r=rf(r,t.type,t.pendingProps,Ui),r===null?a=!1:(t.stateNode=r,Vi=t,j=uf(r.firstChild),Ui=!1,a=!0)),a||Gi(t)),xe(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Gd(a,o)?r=null:s!==null&&Gd(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Do(e,t,Ao,null,null,n),ep._currentValue=a),_c(e,t),sc(e,t,r,n),t.child;case 6:return e===null&&M&&((e=n=j)&&(n=af(n,t.pendingProps,Ui),n===null?e=!1:(t.stateNode=n,Vi=t,j=null,e=!0)),e||Gi(t)),null;case 13:return Tc(e,t,n);case 4:return ye(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ua(t,null,r,n):sc(e,t,r,n),t.child;case 11:return cc(e,t,t.type,t.pendingProps,n);case 7:return sc(e,t,t.pendingProps,n),t.child;case 8:return sc(e,t,t.pendingProps.children,n),t.child;case 12:return sc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ta(t,t.type,r.value),sc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,sa(t),a=ca(a),r=r(a),t.flags|=1,sc(e,t,r,n),t.child;case 14:return lc(e,t,t.type,t.pendingProps,n);case 15:return uc(e,t,t.type,t.pendingProps,n);case 19:return jc(e,t,n);case 31:return gc(e,t,n);case 22:return dc(e,t,n,t.pendingProps);case 24:return sa(t),r=ca(pa),e===null?(a=Ta(),a===null&&(a=W,o=ma(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ka(t),ta(t,pa,a)):((e.lanes&n)!==0&&(qa(e,t),eo(t,null,null,n),$a()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ta(t,pa,r),r!==a.cache&&ia(t,[pa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ta(t,pa,r))),sc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Ic(e){e.flags|=4}function Lc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Eu())e.flags|=8192;else throw Fa=ja,ka}else e.flags&=-16777217}function Rc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Kf(t))if(Eu())e.flags|=8192;else throw Fa=ja,ka}function zc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:it(),e.lanes|=t,Zl|=t)}function Bc(e,t){if(!M)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function V(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vc(e,t,n){var r=t.pendingProps;switch(zi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return V(t),null;case 1:return V(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),na(pa),be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ji(t)?Ic(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xi())),V(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Ic(t),o===null?(V(t),Lc(t,a,null,r,n)):(V(t),Rc(t,o))):o?o===e.memoizedState?(V(t),t.flags&=-16777217):(Ic(t),V(t),Rc(t,o)):(e=e.memoizedProps,e!==r&&Ic(t),V(t),Lc(t,a,e,r,n)),null;case 27:if(Se(t),n=_e.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return V(t),null}e=he.current,Ji(t)?Ki(t,e):(e=mf(a,r,n),t.stateNode=e,Ic(t))}return V(t),null;case 5:if(Se(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return V(t),null}if(o=he.current,Ji(t))Ki(t,o);else{var s=Hd(_e.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[gt]=t,o[_t]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Id(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Ic(t)}}return V(t),Lc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=_e.current,Ji(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Vi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[gt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Pd(e.nodeValue,n)),e||Gi(t,!0)}else e=Hd(e).createTextNode(r),e[gt]=t,t.stateNode=e}return V(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ji(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[gt]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),e=!1}else n=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(mo(t),t):(mo(t),null);if(t.flags&128)throw Error(i(558))}return V(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ji(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[gt]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),a=!1}else a=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(mo(t),t):(mo(t),null)}return mo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),zc(t,t.updateQueue),V(t),null);case 4:return be(),e===null&&wd(t.stateNode.containerInfo),V(t),null;case 10:return na(t.type),V(t),null;case 19:if(me(ho),r=t.memoizedState,r===null)return V(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null)if(a)Bc(r,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=go(e),o!==null){for(t.flags|=128,Bc(r,!1),e=o.updateQueue,t.updateQueue=e,zc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)yi(n,e),n=n.sibling;return O(ho,ho.current&1|2),M&&Ii(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Fe()>ru&&(t.flags|=128,a=!0,Bc(r,!1),t.lanes=4194304)}else{if(!a)if(e=go(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,zc(t,e),Bc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!M)return V(t),null}else 2*Fe()-r.renderingStartTime>ru&&n!==536870912&&(t.flags|=128,a=!0,Bc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(V(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Fe(),e.sibling=null,n=ho.current,O(ho,a?n&1|2:n&1),M&&Ii(t,r.treeForkCount),e);case 22:case 23:return mo(t),so(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(V(t),t.subtreeFlags&6&&(t.flags|=8192)):V(t),n=t.updateQueue,n!==null&&zc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&me(wa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),na(pa),V(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Hc(e,t){switch(zi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return na(pa),be(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Se(t),null;case 31:if(t.memoizedState!==null){if(mo(t),t.alternate===null)throw Error(i(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(mo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(ho),null;case 4:return be(),null;case 10:return na(t.type),null;case 22:case 23:return mo(t),so(),e!==null&&me(wa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return na(pa),null;case 25:return null;default:return null}}function Uc(e,t){switch(zi(t),t.tag){case 3:na(pa),be();break;case 26:case 27:case 5:Se(t);break;case 4:be();break;case 31:t.memoizedState!==null&&mo(t);break;case 13:mo(t);break;case 19:me(ho);break;case 10:na(t.type);break;case 22:case 23:mo(t),so(),e!==null&&me(wa);break;case 24:na(pa)}}function Wc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Y(t,t.return,e)}}function Gc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Y(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Y(t,t.return,e)}}function Kc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{no(t,n)}catch(t){Y(e,e.return,t)}}}function qc(e,t,n){n.props=Xs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Y(e,t,n)}}function Jc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Y(e,t,n)}}function Yc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Y(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Y(e,t,n)}else n.current=null}function Xc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Y(e,e.return,t)}}function Zc(e,t,n){try{var r=e.stateNode;Ld(r,e.type,n,t),r[_t]=t}catch(t){Y(e,e.return,t)}}function Qc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&$d(e.type)||e.tag===4}function $c(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&$d(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=un));else if(r!==4&&(r===27&&$d(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&$d(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Id(t,r,n),t[gt]=e,t[_t]=n}catch(t){Y(e,e.return,t)}}var rl=!1,il=!1,al=!1,ol=typeof WeakSet==`function`?WeakSet:Set,sl=null;function cl(e,t){if(e=e.containerInfo,Bd=lp,e=Ir(e),Lr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Vd={focusedElem:e,selectionRange:n},lp=!1,sl=t;sl!==null;)if(t=sl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,sl=e;else for(;sl!==null;){switch(t=sl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Xs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Y(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)nf(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:nf(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,sl=e;break}sl=t.return}}function ll(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Cl(e,n),r&4&&Wc(5,n);break;case 1:if(Cl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Y(n,n.return,e)}else{var i=Xs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Y(n,n.return,e)}}r&64&&Kc(n),r&512&&Jc(n,n.return);break;case 3:if(Cl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{no(e,t)}catch(e){Y(n,n.return,e)}}break;case 27:t===null&&r&4&&nl(n);case 26:case 5:Cl(e,n),t===null&&r&4&&Xc(n),r&512&&Jc(n,n.return);break;case 12:Cl(e,n);break;case 31:Cl(e,n),r&4&&ml(e,n);break;case 13:Cl(e,n),r&4&&hl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Xu.bind(null,n),lf(e,n))));break;case 22:if(r=n.memoizedState!==null||rl,!r){t=t!==null&&t.memoizedState!==null||il,i=rl;var a=il;rl=r,(il=t)&&!a?Tl(e,n,!!(n.subtreeFlags&8772)):Cl(e,n),rl=i,il=a}break;case 30:break;default:Cl(e,n)}}function ul(e){var t=e.alternate;t!==null&&(e.alternate=null,ul(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&wt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var H=null,dl=!1;function fl(e,t,n){for(n=n.child;n!==null;)pl(e,t,n),n=n.sibling}function pl(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount==`function`)try{Ge.onCommitFiberUnmount(We,n)}catch{}switch(n.tag){case 26:il||Yc(n,t),fl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:il||Yc(n,t);var r=H,i=dl;$d(n.type)&&(H=n.stateNode,dl=!1),fl(e,t,n),hf(n.stateNode),H=r,dl=i;break;case 5:il||Yc(n,t);case 6:if(r=H,i=dl,H=null,fl(e,t,n),H=r,dl=i,H!==null)if(dl)try{(H.nodeType===9?H.body:H.nodeName===`HTML`?H.ownerDocument.body:H).removeChild(n.stateNode)}catch(e){Y(n,t,e)}else try{H.removeChild(n.stateNode)}catch(e){Y(n,t,e)}break;case 18:H!==null&&(dl?(e=H,ef(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Fp(e)):ef(H,n.stateNode));break;case 4:r=H,i=dl,H=n.stateNode.containerInfo,dl=!0,fl(e,t,n),H=r,dl=i;break;case 0:case 11:case 14:case 15:Gc(2,n,t),il||Gc(4,n,t),fl(e,t,n);break;case 1:il||(Yc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&qc(n,t,r)),fl(e,t,n);break;case 21:fl(e,t,n);break;case 22:il=(r=il)||n.memoizedState!==null,fl(e,t,n),il=r;break;default:fl(e,t,n)}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Fp(e)}catch(e){Y(t,t.return,e)}}}function hl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Fp(e)}catch(e){Y(t,t.return,e)}}function gl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ol),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ol),t;default:throw Error(i(435,e.tag))}}function _l(e,t){var n=gl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Zu.bind(null,e,t);t.then(r,r)}})}function vl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if($d(c.type)){H=c.stateNode,dl=!1;break a}break;case 5:H=c.stateNode,dl=!1;break a;case 3:case 4:H=c.stateNode.containerInfo,dl=!0;break a}c=c.return}if(H===null)throw Error(i(160));pl(o,s,a),H=null,dl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)bl(t,e),t=t.sibling}var yl=null;function bl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vl(t,e),xl(e),r&4&&(Gc(3,e,e.return),Wc(3,e),Gc(5,e,e.return));break;case 1:vl(t,e),xl(e),r&512&&(il||n===null||Yc(n,n.return)),r&64&&rl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=yl;if(vl(t,e),xl(e),r&512&&(il||n===null||Yc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[Ct]||o[gt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Id(o,r,n),o[gt]=e,kt(o),r=o;break a;case`link`:var s=Uf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Id(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Uf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Id(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[gt]=e,kt(o),r=o}e.stateNode=r}else Wf(a,e.type,e.stateNode);else e.stateNode=Rf(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Zc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Wf(a,e.type,e.stateNode):Rf(a,r,e.memoizedProps))}break;case 27:vl(t,e),xl(e),r&512&&(il||n===null||Yc(n,n.return)),n!==null&&r&4&&Zc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(vl(t,e),xl(e),r&512&&(il||n===null||Yc(n,n.return)),e.flags&32){a=e.stateNode;try{tn(a,``)}catch(t){Y(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Zc(e,a,n===null?a:n.memoizedProps)),r&1024&&(al=!0);break;case 6:if(vl(t,e),xl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Y(e,e.return,t)}}break;case 3:if(Hf=null,a=yl,yl=vf(t.containerInfo),vl(t,e),yl=a,xl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fp(t.containerInfo)}catch(t){Y(e,e.return,t)}al&&(al=!1,Sl(e));break;case 4:r=yl,yl=vf(e.stateNode.containerInfo),vl(t,e),xl(e),yl=r;break;case 12:vl(t,e),xl(e);break;case 31:vl(t,e),xl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_l(e,r)));break;case 13:vl(t,e),xl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(tu=Fe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_l(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=rl,d=il;if(rl=u||a,il=d||l,vl(t,e),il=d,rl=u,xl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||rl||il||wl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Y(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Y(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?tf(m,!0):tf(l.stateNode,!1)}catch(e){Y(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,_l(e,n))));break;case 19:vl(t,e),xl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_l(e,r)));break;case 30:break;case 21:break;default:vl(t,e),xl(e)}}function xl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Qc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;tl(e,$c(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(tn(o,``),n.flags&=-33),tl(e,$c(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;el(e,$c(e),s);break;default:throw Error(i(161))}}catch(t){Y(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Sl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Cl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ll(e,t.alternate,t),t=t.sibling}function wl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Gc(4,t,t.return),wl(t);break;case 1:Yc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&qc(t,t.return,n),wl(t);break;case 27:hf(t.stateNode);case 26:case 5:Yc(t,t.return),wl(t);break;case 22:t.memoizedState===null&&wl(t);break;case 30:wl(t);break;default:wl(t)}e=e.sibling}}function Tl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Tl(i,a,n),Wc(4,a);break;case 1:if(Tl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Y(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)to(c[i],s)}catch(e){Y(r,r.return,e)}}n&&o&64&&Kc(a),Jc(a,a.return);break;case 27:nl(a);case 26:case 5:Tl(i,a,n),n&&r===null&&o&4&&Xc(a),Jc(a,a.return);break;case 12:Tl(i,a,n);break;case 31:Tl(i,a,n),n&&o&4&&ml(i,a);break;case 13:Tl(i,a,n),n&&o&4&&hl(i,a);break;case 22:a.memoizedState===null&&Tl(i,a,n),Jc(a,a.return);break;case 30:break;default:Tl(i,a,n)}t=t.sibling}}function El(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ha(n))}function Dl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e))}function Ol(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)kl(e,t,n,r),t=t.sibling}function kl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Ol(e,t,n,r),i&2048&&Wc(9,t);break;case 1:Ol(e,t,n,r);break;case 3:Ol(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e)));break;case 12:if(i&2048){Ol(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Y(t,t.return,e)}}else Ol(e,t,n,r);break;case 31:Ol(e,t,n,r);break;case 13:Ol(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Ol(e,t,n,r):(a._visibility|=2,Al(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?Ol(e,t,n,r):jl(e,t),i&2048&&El(o,t);break;case 24:Ol(e,t,n,r),i&2048&&Dl(t.alternate,t);break;default:Ol(e,t,n,r)}}function Al(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Al(a,o,s,c,i),Wc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Al(a,o,s,c,i)):u._visibility&2?Al(a,o,s,c,i):jl(a,o),i&&l&2048&&El(o.alternate,o);break;case 24:Al(a,o,s,c,i),i&&l&2048&&Dl(o.alternate,o);break;default:Al(a,o,s,c,i)}t=t.sibling}}function jl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:jl(n,r),i&2048&&El(r.alternate,r);break;case 24:jl(n,r),i&2048&&Dl(r.alternate,r);break;default:jl(n,r)}t=t.sibling}}var Ml=8192;function Nl(e,t,n){if(e.subtreeFlags&Ml)for(e=e.child;e!==null;)Pl(e,t,n),e=e.sibling}function Pl(e,t,n){switch(e.tag){case 26:Nl(e,t,n),e.flags&Ml&&e.memoizedState!==null&&qf(n,yl,e.memoizedState,e.memoizedProps);break;case 5:Nl(e,t,n);break;case 3:case 4:var r=yl;yl=vf(e.stateNode.containerInfo),Nl(e,t,n),yl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ml,Ml=16777216,Nl(e,t,n),Ml=r):Nl(e,t,n));break;default:Nl(e,t,n)}}function Fl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];sl=r,zl(r,e)}Fl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ll(e),e=e.sibling}function Ll(e){switch(e.tag){case 0:case 11:case 15:Il(e),e.flags&2048&&Gc(9,e,e.return);break;case 3:Il(e);break;case 12:Il(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Rl(e)):Il(e);break;default:Il(e)}}function Rl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];sl=r,zl(r,e)}Fl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Gc(8,t,t.return),Rl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Rl(t));break;default:Rl(t)}e=e.sibling}}function zl(e,t){for(;sl!==null;){var n=sl;switch(n.tag){case 0:case 11:case 15:Gc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ha(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,sl=r;else a:for(n=e;sl!==null;){r=sl;var i=r.sibling,a=r.return;if(ul(r),r===n){sl=null;break a}if(i!==null){i.return=a,sl=i;break a}sl=a}}}var Bl={getCacheForType:function(e){var t=ca(pa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ca(pa).controller.signal}},Vl=typeof WeakMap==`function`?WeakMap:Map,U=0,W=null,G=null,K=0,q=0,Hl=null,Ul=!1,Wl=!1,Gl=!1,Kl=0,J=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=0,Ql=null,$l=null,eu=!1,tu=0,nu=0,ru=1/0,iu=null,au=null,ou=0,su=null,cu=null,lu=0,uu=0,du=null,fu=null,pu=0,mu=null;function hu(){return U&2&&K!==0?K&-K:E.T===null?pt():pd()}function gu(){if(Xl===0)if(!(K&536870912)||M){var e=Qe;Qe<<=1,!(Qe&3932160)&&(Qe=262144),Xl=e}else Xl=536870912;return e=F.current,e!==null&&(e.flags|=32),Xl}function _u(e,t,n){(e===W&&(q===2||q===9)||e.cancelPendingCommit!==null)&&(wu(e,0),xu(e,K,Xl,!1)),ot(e,n),(!(U&2)||e!==W)&&(e===W&&(!(U&2)&&(Jl|=n),J===4&&xu(e,K,Xl,!1)),ad(e))}function vu(e,t,n){if(U&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||nt(e,t),a=r?Mu(e,t):Au(e,t,!0),o=r;do{if(a===0){Wl&&!r&&xu(e,t,0,!1);break}if(n=e.current.alternate,o&&!bu(n)){a=Au(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Ql;var l=c.current.memoizedState.isDehydrated;if(l&&(wu(c,s).flags|=256),s=Au(c,s,!1),s!==2){if(Gl&&!l){c.errorRecoveryDisabledLanes|=o,Jl|=o,a=4;break a}o=$l,$l=a,o!==null&&($l===null?$l=o:$l.push.apply($l,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){wu(e,0),xu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:xu(r,t,Xl,!Ul);break a;case 2:$l=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=tu+300-Fe(),10<a)){if(xu(r,t,Xl,!Ul),tt(r,0,!0)!==0)break a;lu=t,r.timeoutHandle=Jd(yu.bind(null,r,n,$l,iu,eu,t,Xl,Jl,Zl,Ul,o,`Throttled`,-0,0),a);break a}yu(r,n,$l,iu,eu,t,Xl,Jl,Zl,Ul,o,null,-0,0)}break}while(1);ad(e)}function yu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:un},Pl(t,a,d);var m=(a&62914560)===a?tu-Fe():(a&4194048)===a?nu-Fe():0;if(m=Yf(d,m),m!==null){lu=a,e.cancelPendingCommit=m(zu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),xu(e,a,o,!l);return}}zu(e,t,a,n,r,i,o,s,c)}function bu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!jr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xu(e,t,n,r){t&=~Yl,t&=~Jl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-qe(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ct(e,n,t)}function Su(){return U&6?!0:(od(0,!1),!1)}function Cu(){if(G!==null){if(q===0)var e=G.return;else e=G,ea=$i=null,No(e),P=null,Ra=0,e=G;for(;e!==null;)Uc(e.alternate,e),e=e.return;G=null}}function wu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Yd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),lu=0,Cu(),W=e,G=n=vi(e.current,null),K=t,q=0,Hl=null,Ul=!1,Wl=nt(e,t),Gl=!1,Zl=Xl=Yl=Jl=ql=J=0,$l=Ql=null,eu=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-qe(r),a=1<<i;t|=e[i],r&=~a}return Kl=t,li(),n}function Tu(e,t){I=null,E.H=Hs,t===Oa||t===Aa?(t=Ia(),q=3):t===ka?(t=Ia(),q=4):q=t===oc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Hl=t,G===null&&(J=1,ec(e,Ei(t,e.current)))}function Eu(){var e=F.current;return e===null?!0:(K&4194048)===K?co===null:(K&62914560)===K||K&536870912?e===co:!1}function Du(){var e=E.H;return E.H=Hs,e===null?Hs:e}function Ou(){var e=E.A;return E.A=Bl,e}function ku(){J=4,Ul||(K&4194048)!==K&&F.current!==null||(Wl=!0),!(ql&134217727)&&!(Jl&134217727)||W===null||xu(W,K,Xl,!1)}function Au(e,t,n){var r=U;U|=2;var i=Du(),a=Ou();(W!==e||K!==t)&&(iu=null,wu(e,t)),t=!1;var o=J;a:do try{if(q!==0&&G!==null){var s=G,c=Hl;switch(q){case 8:Cu(),o=6;break a;case 3:case 2:case 9:case 6:F.current===null&&(t=!0);var l=q;if(q=0,Hl=null,Iu(e,s,c,l),n&&Wl){o=0;break a}break;default:l=q,q=0,Hl=null,Iu(e,s,c,l)}}ju(),o=J;break}catch(t){Tu(e,t)}while(1);return t&&e.shellSuspendCounter++,ea=$i=null,U=r,E.H=i,E.A=a,G===null&&(W=null,K=0,li()),o}function ju(){for(;G!==null;)Pu(G)}function Mu(e,t){var n=U;U|=2;var r=Du(),a=Ou();W!==e||K!==t?(iu=null,ru=Fe()+500,wu(e,t)):Wl=nt(e,t);a:do try{if(q!==0&&G!==null){t=G;var o=Hl;b:switch(q){case 1:q=0,Hl=null,Iu(e,t,o,1);break;case 2:case 9:if(Ma(o)){q=0,Hl=null,Fu(t);break}t=function(){q!==2&&q!==9||W!==e||(q=7),ad(e)},o.then(t,t);break a;case 3:q=7;break a;case 4:q=5;break a;case 7:Ma(o)?(q=0,Hl=null,Fu(t)):(q=0,Hl=null,Iu(e,t,o,7));break;case 5:var s=null;switch(G.tag){case 26:s=G.memoizedState;case 5:case 27:var c=G;if(s?Kf(s):c.stateNode.complete){q=0,Hl=null;var l=c.sibling;if(l!==null)G=l;else{var u=c.return;u===null?G=null:(G=u,Lu(u))}break b}}q=0,Hl=null,Iu(e,t,o,5);break;case 6:q=0,Hl=null,Iu(e,t,o,6);break;case 8:Cu(),J=6;break a;default:throw Error(i(462))}}Nu();break}catch(t){Tu(e,t)}while(1);return ea=$i=null,E.H=r,E.A=a,U=n,G===null?(W=null,K=0,li(),J):0}function Nu(){for(;G!==null&&!Ne();)Pu(G)}function Pu(e){var t=Fc(e.alternate,e,Kl);e.memoizedProps=e.pendingProps,t===null?Lu(e):G=t}function Fu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=yc(n,t,t.pendingProps,t.type,void 0,K);break;case 11:t=yc(n,t,t.pendingProps,t.type.render,t.ref,K);break;case 5:No(t);default:Uc(n,t),t=G=yi(t,Kl),t=Fc(n,t,Kl)}e.memoizedProps=e.pendingProps,t===null?Lu(e):G=t}function Iu(e,t,n,r){ea=$i=null,No(t),P=null,Ra=0;var i=t.return;try{if(ac(e,i,t,n,K)){J=1,ec(e,Ei(n,e.current)),G=null;return}}catch(t){if(i!==null)throw G=i,t;J=1,ec(e,Ei(n,e.current)),G=null;return}t.flags&32768?(M||r===1?e=!0:Wl||K&536870912?e=!1:(Ul=e=!0,(r===2||r===9||r===3||r===6)&&(r=F.current,r!==null&&r.tag===13&&(r.flags|=16384))),Ru(t,e)):Lu(t)}function Lu(e){var t=e;do{if(t.flags&32768){Ru(t,Ul);return}e=t.return;var n=Vc(t.alternate,t,Kl);if(n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);J===0&&(J=5)}function Ru(e,t){do{var n=Hc(e.alternate,e);if(n!==null){n.flags&=32767,G=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){G=e;return}G=e=n}while(e!==null);J=6,G=null}function zu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Wu();while(ou!==0);if(U&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ci,st(e,n,o,s,c,l),e===W&&(G=W=null,K=0),cu=t,su=e,lu=n,uu=o,du=a,fu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Qu(ze,function(){return Gu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=E.T,E.T=null,a=D.p,D.p=2,s=U,U|=4;try{cl(e,t,n)}finally{U=s,D.p=a,E.T=r}}ou=1,Bu(),Vu(),Hu()}}function Bu(){if(ou===1){ou=0;var e=su,t=cu,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=U;U|=4;try{bl(t,e);var a=Vd,o=Ir(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Fr(s.ownerDocument.documentElement,s)){if(c!==null&&Lr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Pr(s,h),v=Pr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}lp=!!Bd,Vd=Bd=null}finally{U=i,D.p=r,E.T=n}}e.current=t,ou=2}}function Vu(){if(ou===2){ou=0;var e=su,t=cu,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=U;U|=4;try{ll(e,t.alternate,t)}finally{U=i,D.p=r,E.T=n}}ou=3}}function Hu(){if(ou===4||ou===3){ou=0,Pe();var e=su,t=cu,n=lu,r=fu;t.subtreeFlags&10256||t.flags&10256?ou=5:(ou=0,cu=su=null,Uu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(au=null),ft(n),t=t.stateNode,Ge&&typeof Ge.onCommitFiberRoot==`function`)try{Ge.onCommitFiberRoot(We,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=E.T,i=D.p,D.p=2,E.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{E.T=t,D.p=i}}lu&3&&Wu(),ad(e),i=e.pendingLanes,n&261930&&i&42?e===mu?pu++:(pu=0,mu=e):pu=0,od(0,!1)}}function Uu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ha(t)))}function Wu(){return Bu(),Vu(),Hu(),Gu()}function Gu(){if(ou!==5)return!1;var e=su,t=uu;uu=0;var n=ft(lu),r=E.T,a=D.p;try{D.p=32>n?32:n,E.T=null,n=du,du=null;var o=su,s=lu;if(ou=0,cu=su=null,lu=0,U&6)throw Error(i(331));var c=U;if(U|=4,Ll(o.current),kl(o,o.current,s,n),U=c,od(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot==`function`)try{Ge.onPostCommitFiberRoot(We,o)}catch{}return!0}finally{D.p=a,E.T=r,Uu(e,t)}}function Ku(e,t,n){t=Ei(n,t),t=nc(e.stateNode,t,2),e=Ya(e,t,2),e!==null&&(ot(e,2),ad(e))}function Y(e,t,n){if(e.tag===3)Ku(e,e,n);else for(;t!==null;){if(t.tag===3){Ku(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(au===null||!au.has(r))){e=Ei(n,e),n=rc(2),r=Ya(t,n,2),r!==null&&(ic(n,r,t,e),ot(r,2),ad(r));break}}t=t.return}}function qu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Vl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Gl=!0,i.add(n),e=Ju.bind(null,e,t,n),t.then(e,e))}function Ju(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,W===e&&(K&n)===n&&(J===4||J===3&&(K&62914560)===K&&300>Fe()-tu?!(U&2)&&wu(e,0):Yl|=n,Zl===K&&(Zl=0)),ad(e)}function Yu(e,t){t===0&&(t=it()),e=fi(e,t),e!==null&&(ot(e,t),ad(e))}function Xu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Yu(e,n)}function Zu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Yu(e,n)}function Qu(e,t){return je(e,t)}var $u=null,ed=null,td=!1,nd=!1,rd=!1,id=0;function ad(e){e!==ed&&e.next===null&&(ed===null?$u=ed=e:ed=ed.next=e),nd=!0,td||(td=!0,fd())}function od(e,t){if(!rd&&nd){rd=!0;do for(var n=!1,r=$u;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-qe(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,dd(r,a))}else a=K,a=tt(r,r===W?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||nt(r,a)||(n=!0,dd(r,a));r=r.next}while(n);rd=!1}}function sd(){cd()}function cd(){nd=td=!1;var e=0;id!==0&&qd()&&(e=id);for(var t=Fe(),n=null,r=$u;r!==null;){var i=r.next,a=ld(r,t);a===0?(r.next=null,n===null?$u=i:n.next=i,i===null&&(ed=n)):(n=r,(e!==0||a&3)&&(nd=!0)),r=i}ou!==0&&ou!==5||od(e,!1),id!==0&&(id=0)}function ld(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-qe(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=rt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=W,n=K,n=tt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(q===2||q===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Me(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||nt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Me(r),ft(n)){case 2:case 8:n=Re;break;case 32:n=ze;break;case 268435456:n=Ve;break;default:n=ze}return r=ud.bind(null,e),n=je(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Me(r),e.callbackPriority=2,e.callbackNode=null,2}function ud(e,t){if(ou!==0&&ou!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Wu()&&e.callbackNode!==n)return null;var r=K;return r=tt(e,e===W?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(vu(e,r,t),ld(e,Fe()),e.callbackNode!=null&&e.callbackNode===n?ud.bind(null,e):null)}function dd(e,t){if(Wu())return null;vu(e,t,!0)}function fd(){Zd(function(){U&6?je(Le,sd):cd()})}function pd(){if(id===0){var e=va;e===0&&(e=Ze,Ze<<=1,!(Ze&261888)&&(Ze=256)),id=e}return id}function md(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:ln(``+e)}function hd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function gd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=md((i[_t]||null).action),o=r.submitter;o&&(t=(t=o[_t]||null)?md(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new jn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(id!==0){var e=o?hd(i,o):new FormData(i);Os(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?hd(i,o):new FormData(i),Os(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var _d=0;_d<ri.length;_d++){var vd=ri[_d];ii(vd.toLowerCase(),`on`+(vd[0].toUpperCase()+vd.slice(1)))}ii(Yr,`onAnimationEnd`),ii(Xr,`onAnimationIteration`),ii(Zr,`onAnimationStart`),ii(`dblclick`,`onDoubleClick`),ii(`focusin`,`onFocus`),ii(`focusout`,`onBlur`),ii(Qr,`onTransitionRun`),ii($r,`onTransitionStart`),ii(ei,`onTransitionCancel`),ii(ti,`onTransitionEnd`),Nt(`onMouseEnter`,[`mouseout`,`mouseover`]),Nt(`onMouseLeave`,[`mouseout`,`mouseover`]),Nt(`onPointerEnter`,[`pointerout`,`pointerover`]),Nt(`onPointerLeave`,[`pointerout`,`pointerover`]),Mt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Mt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Mt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Mt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var yd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),bd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(yd));function xd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ai(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ai(e)}i.currentTarget=null,a=c}}}}function X(e,t){var n=t[yt];n===void 0&&(n=t[yt]=new Set);var r=e+`__bubble`;n.has(r)||(Td(t,e,2,!1),n.add(r))}function Sd(e,t,n){var r=0;t&&(r|=4),Td(n,e,r,t)}var Cd=`_reactListening`+Math.random().toString(36).slice(2);function wd(e){if(!e[Cd]){e[Cd]=!0,At.forEach(function(t){t!==`selectionchange`&&(bd.has(t)||Sd(t,!1,e),Sd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Cd]||(t[Cd]=!0,Sd(`selectionchange`,!1,t))}}function Td(e,t,n,r){switch(gp(t)){case 2:var i=up;break;case 8:i=dp;break;default:i=fp}n=i.bind(null,t,n,e),i=void 0,!bn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Ed(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Tt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}_n(function(){var r=a,i=fn(n),s=[];a:{var c=ni.get(e);if(c!==void 0){var l=jn,u=e;switch(e){case`keypress`:if(En(n)===0)break a;case`keydown`:case`keyup`:l=Yn;break;case`focusin`:u=`focus`,l=Bn;break;case`focusout`:u=`blur`,l=Bn;break;case`beforeblur`:case`afterblur`:l=Bn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Rn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=zn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Zn;break;case Yr:case Xr:case Zr:l=Vn;break;case ti:l=Qn;break;case`scroll`:case`scrollend`:l=Nn;break;case`wheel`:l=$n;break;case`copy`:case`cut`:case`paste`:l=Hn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Xn;break;case`toggle`:case`beforetoggle`:l=er}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=vn(m,p),g!=null&&d.push(Dd(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==dn&&(u=n.relatedTarget||n.fromElement)&&(Tt(u)||u[vt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Tt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Rn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Xn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Dt(l),h=u==null?c:Dt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Tt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=kd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Ad(s,c,l,d,!1),u!==null&&f!==null&&Ad(s,f,u,d,!0)}}a:{if(c=r?Dt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=yr;else if(pr(c))if(br)v=kr;else{v=Dr;var y=Er}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&on(r.elementType)&&(v=yr):v=Or;if(v&&=v(e,r)){mr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Zt(c,`number`,c.value)}switch(y=r?Dt(r):window,e){case`focusin`:(pr(y)||y.contentEditable===`true`)&&(zr=y,Br=r,Vr=null);break;case`focusout`:Vr=Br=zr=null;break;case`mousedown`:Hr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Hr=!1,Ur(s,n,i);break;case`selectionchange`:if(Rr)break;case`keydown`:case`keyup`:Ur(s,n,i)}var b;if(k)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else lr?sr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(ir&&n.locale!==`ko`&&(lr||x!==`onCompositionStart`?x===`onCompositionEnd`&&lr&&(b=Tn()):(Sn=i,Cn=`value`in Sn?Sn.value:Sn.textContent,lr=!0)),y=Od(r,x),0<y.length&&(x=new Un(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=cr(n),b!==null&&(x.data=b)))),(b=rr?ur(e,n):dr(e,n))&&(x=Od(r,`onBeforeInput`),0<x.length&&(y=new Un(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),gd(s,e,r,n,i)}xd(s,t)})}function Dd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Od(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=vn(e,n),i!=null&&r.unshift(Dd(e,i,a)),i=vn(e,t),i!=null&&r.push(Dd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function kd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ad(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=vn(n,a),l!=null&&o.unshift(Dd(n,l,c))):i||(l=vn(n,a),l!=null&&o.push(Dd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var jd=/\r\n?/g,Md=/\u0000|\uFFFD/g;function Nd(e){return(typeof e==`string`?e:``+e).replace(jd,`
`).replace(Md,``)}function Pd(e,t){return t=Nd(t),Nd(e)===t}function Z(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||tn(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&tn(e,``+r);break;case`className`:zt(e,`class`,r);break;case`tabIndex`:zt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:zt(e,n,r);break;case`style`:an(e,r,o);break;case`data`:if(t!==`object`){zt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&Z(e,t,`name`,a.name,a,null),Z(e,t,`formEncType`,a.formEncType,a,null),Z(e,t,`formMethod`,a.formMethod,a,null),Z(e,t,`formTarget`,a.formTarget,a,null)):(Z(e,t,`encType`,a.encType,a,null),Z(e,t,`method`,a.method,a,null),Z(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=un);break;case`onScroll`:r!=null&&X(`scroll`,e);break;case`onScrollEnd`:r!=null&&X(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=ln(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:X(`beforetoggle`,e),X(`toggle`,e),Rt(e,`popover`,r);break;case`xlinkActuate`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Rt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=sn.get(n)||n,Rt(e,n,r))}}function Fd(e,t,n,r,a,o){switch(n){case`style`:an(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?tn(e,r):(typeof r==`number`||typeof r==`bigint`)&&tn(e,``+r);break;case`onScroll`:r!=null&&X(`scroll`,e);break;case`onScrollEnd`:r!=null&&X(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=un);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!jt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[_t]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Rt(e,n,r)}}}function Id(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:X(`error`,e),X(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Z(e,t,o,s,n,null)}}a&&Z(e,t,`srcSet`,n.srcSet,n,null),r&&Z(e,t,`src`,n.src,n,null);return;case`input`:X(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Z(e,t,r,d,n,null)}}Xt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in X(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Z(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Qt(e,!!r,n,!0):Qt(e,!!r,t,!1);return;case`textarea`:for(s in X(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Z(e,t,s,c,n,null)}en(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Z(e,t,l,r,n,null)}return;case`dialog`:X(`beforetoggle`,e),X(`toggle`,e),X(`cancel`,e),X(`close`,e);break;case`iframe`:case`object`:X(`load`,e);break;case`video`:case`audio`:for(r=0;r<yd.length;r++)X(yd[r],e);break;case`image`:X(`error`,e),X(`load`,e);break;case`details`:X(`toggle`,e);break;case`embed`:case`source`:case`link`:X(`error`,e),X(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Z(e,t,u,r,n,null)}return;default:if(on(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Fd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Z(e,t,c,r,n,null))}function Ld(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Z(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Z(e,t,p,m,r,f)}}Yt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Z(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Z(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Qt(e,!!n,n?[]:``,!1):Qt(e,!!n,t,!0)):Qt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Z(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Z(e,t,s,a,r,o)}$t(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Z(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Z(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Z(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Z(e,t,u,p,r,m)}return;default:if(on(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Fd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Fd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Z(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Z(e,t,f,p,r,m)}function Rd(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function zd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Rd(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Rd(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Bd=null,Vd=null;function Hd(e){return e.nodeType===9?e:e.ownerDocument}function Ud(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Wd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Gd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kd=null;function qd(){var e=window.event;return e&&e.type===`popstate`?e!==Kd&&(Kd=e,!0):(Kd=null,!1)}var Jd=typeof setTimeout==`function`?setTimeout:void 0,Yd=typeof clearTimeout==`function`?clearTimeout:void 0,Xd=typeof Promise==`function`?Promise:void 0,Zd=typeof queueMicrotask==`function`?queueMicrotask:Xd===void 0?Jd:function(e){return Xd.resolve(null).then(e).catch(Qd)};function Qd(e){setTimeout(function(){throw e})}function $d(e){return e===`head`}function ef(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Fp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)hf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,hf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Ct]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&hf(e.ownerDocument.body);n=i}while(n);Fp(t)}function tf(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function nf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nf(n),wt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[Ct])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=uf(e.nextSibling),e===null)break}return null}function af(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=uf(e.nextSibling),e===null))return null;return e}function of(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=uf(e.nextSibling),e===null))return null;return e}function sf(e){return e.data===`$?`||e.data===`$~`}function cf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function lf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function uf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var df=null;function ff(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return uf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function pf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function mf(e,t,n){switch(t=Hd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function hf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);wt(e)}var gf=new Map,_f=new Set;function vf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var yf=D.d;D.d={f:bf,r:xf,D:wf,C:Tf,L:Ef,m:Df,X:kf,S:Of,M:Af};function bf(){var e=yf.f(),t=Su();return e||t}function xf(e){var t=Et(e);t!==null&&t.tag===5&&t.type===`form`?As(t):yf.r(e)}var Sf=typeof document>`u`?null:document;function Cf(e,t,n){var r=Sf;if(r&&typeof t==`string`&&t){var i=Jt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),_f.has(i)||(_f.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Id(t,`link`,e),kt(t),r.head.appendChild(t)))}}function wf(e){yf.D(e),Cf(`dns-prefetch`,e,null)}function Tf(e,t){yf.C(e,t),Cf(`preconnect`,e,t)}function Ef(e,t,n){yf.L(e,t,n);var r=Sf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Jt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Jt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Jt(n.imageSizes)+`"]`)):i+=`[href="`+Jt(e)+`"]`;var a=i;switch(t){case`style`:a=Mf(e);break;case`script`:a=If(e)}gf.has(a)||(e=f({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),gf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Nf(a))||t===`script`&&r.querySelector(Lf(a))||(t=r.createElement(`link`),Id(t,`link`,e),kt(t),r.head.appendChild(t)))}}function Df(e,t){yf.m(e,t);var n=Sf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Jt(r)+`"][href="`+Jt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=If(e)}if(!gf.has(a)&&(e=f({rel:`modulepreload`,href:e},t),gf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Lf(a)))return}r=n.createElement(`link`),Id(r,`link`,e),kt(r),n.head.appendChild(r)}}}function Of(e,t,n){yf.S(e,t,n);var r=Sf;if(r&&e){var i=Ot(r).hoistableStyles,a=Mf(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Nf(a)))s.loading=5;else{e=f({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=gf.get(a))&&Bf(e,n);var c=o=r.createElement(`link`);kt(c),Id(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,zf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function kf(e,t){yf.X(e,t);var n=Sf;if(n&&e){var r=Ot(n).hoistableScripts,i=If(e),a=r.get(i);a||(a=n.querySelector(Lf(i)),a||(e=f({src:e,async:!0},t),(t=gf.get(i))&&Vf(e,t),a=n.createElement(`script`),kt(a),Id(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Af(e,t){yf.M(e,t);var n=Sf;if(n&&e){var r=Ot(n).hoistableScripts,i=If(e),a=r.get(i);a||(a=n.querySelector(Lf(i)),a||(e=f({src:e,async:!0,type:`module`},t),(t=gf.get(i))&&Vf(e,t),a=n.createElement(`script`),kt(a),Id(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function jf(e,t,n,r){var a=(a=_e.current)?vf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Mf(n.href),n=Ot(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Mf(n.href);var o=Ot(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Nf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),gf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},gf.set(e,n),o||Ff(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=If(n),n=Ot(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Mf(e){return`href="`+Jt(e)+`"`}function Nf(e){return`link[rel="stylesheet"][`+e+`]`}function Pf(e){return f({},e,{"data-precedence":e.precedence,precedence:null})}function Ff(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Id(t,`link`,n),kt(t),e.head.appendChild(t))}function If(e){return`[src="`+Jt(e)+`"]`}function Lf(e){return`script[async]`+e}function Rf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Jt(n.href)+`"]`);if(r)return t.instance=r,kt(r),r;var a=f({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),kt(r),Id(r,`style`,a),zf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Mf(n.href);var o=e.querySelector(Nf(a));if(o)return t.state.loading|=4,t.instance=o,kt(o),o;r=Pf(n),(a=gf.get(a))&&Bf(r,a),o=(e.ownerDocument||e).createElement(`link`),kt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Id(o,`link`,r),t.state.loading|=4,zf(o,n.precedence,e),t.instance=o;case`script`:return o=If(n.src),(a=e.querySelector(Lf(o)))?(t.instance=a,kt(a),a):(r=n,(a=gf.get(o))&&(r=f({},n),Vf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),kt(a),Id(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,zf(r,n.precedence,e));return t.instance}function zf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Bf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Vf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Hf=null;function Uf(e,t,n){if(Hf===null){var r=new Map,i=Hf=new Map;i.set(n,r)}else i=Hf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Ct]||a[gt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Wf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Gf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Kf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function qf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Mf(r.href),a=t.querySelector(Nf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Xf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,kt(a);return}a=t.ownerDocument||t,r=Pf(r),(i=gf.get(i))&&Bf(r,i),a=a.createElement(`link`),kt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Id(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Xf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Jf=0;function Yf(e,t){return e.stylesheets&&e.count===0&&Qf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Qf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Jf===0&&(Jf=62500*zd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Qf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Jf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Xf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Qf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Zf=null;function Qf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Zf=new Map,t.forEach($f,e),Zf=null,Xf.call(e))}function $f(e,t){if(!(t.state.loading&4)){var n=Zf.get(e);if(n)var r=n.get(null);else{n=new Map,Zf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Xf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var ep={$$typeof:C,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function tp(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=at(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=at(0),this.hiddenUpdates=at(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function np(e,t,n,r,i,a,o,s,c,l,u,d){return e=new tp(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=A(3,null,null,t),e.current=a,a.stateNode=e,t=ma(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ka(a),e}function rp(e){return e?(e=hi,e):hi}function ip(e,t,n,r,i,a){i=rp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ja(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ya(e,r,t),n!==null&&(_u(n,e,t),Xa(n,e,t))}function ap(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function op(e,t){ap(e,t),(e=e.alternate)&&ap(e,t)}function sp(e){if(e.tag===13||e.tag===31){var t=fi(e,67108864);t!==null&&_u(t,e,67108864),op(e,67108864)}}function cp(e){if(e.tag===13||e.tag===31){var t=hu();t=dt(t);var n=fi(e,t);n!==null&&_u(n,e,t),op(e,t)}}var lp=!0;function up(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,fp(e,t,n,r)}finally{D.p=a,E.T=i}}function dp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,fp(e,t,n,r)}finally{D.p=a,E.T=i}}function fp(e,t,n,r){if(lp){var i=pp(r);if(i===null)Ed(e,t,r,mp,n),Tp(e,r);else if(Dp(i,e,t,n,r))r.stopPropagation();else if(Tp(e,r),t&4&&-1<wp.indexOf(e)){for(;i!==null;){var a=Et(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=et(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-qe(o);s.entanglements[1]|=c,o&=~c}ad(a),!(U&6)&&(ru=Fe()+500,od(0,!1))}}break;case 31:case 13:s=fi(a,2),s!==null&&_u(s,a,2),Su(),op(a,2)}if(a=pp(r),a===null&&Ed(e,t,r,mp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Ed(e,t,r,null,n)}}function pp(e){return e=fn(e),hp(e)}var mp=null;function hp(e){if(mp=null,e=Tt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return mp=e,null}function gp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ie()){case Le:return 2;case Re:return 8;case ze:case Be:return 32;case Ve:return 268435456;default:return 32}default:return 32}}var _p=!1,vp=null,yp=null,bp=null,xp=new Map,Sp=new Map,Cp=[],wp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Tp(e,t){switch(e){case`focusin`:case`focusout`:vp=null;break;case`dragenter`:case`dragleave`:yp=null;break;case`mouseover`:case`mouseout`:bp=null;break;case`pointerover`:case`pointerout`:xp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:Sp.delete(t.pointerId)}}function Ep(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Et(t),t!==null&&sp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Dp(e,t,n,r,i){switch(t){case`focusin`:return vp=Ep(vp,e,t,n,r,i),!0;case`dragenter`:return yp=Ep(yp,e,t,n,r,i),!0;case`mouseover`:return bp=Ep(bp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return xp.set(a,Ep(xp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,Sp.set(a,Ep(Sp.get(a)||null,e,t,n,r,i)),!0}return!1}function Op(e){var t=Tt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,mt(e.priority,function(){cp(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,mt(e.priority,function(){cp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);dn=r,n.target.dispatchEvent(r),dn=null}else return t=Et(n),t!==null&&sp(t),e.blockedOn=n,!1;t.shift()}return!0}function Ap(e,t,n){kp(e)&&n.delete(t)}function jp(){_p=!1,vp!==null&&kp(vp)&&(vp=null),yp!==null&&kp(yp)&&(yp=null),bp!==null&&kp(bp)&&(bp=null),xp.forEach(Ap),Sp.forEach(Ap)}function Mp(e,n){e.blockedOn===n&&(e.blockedOn=null,_p||(_p=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,jp)))}var Np=null;function Pp(e){Np!==e&&(Np=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Np===e&&(Np=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(hp(r||n)===null)continue;break}var a=Et(n);a!==null&&(e.splice(t,3),t-=3,Os(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Fp(e){function t(t){return Mp(t,e)}vp!==null&&Mp(vp,e),yp!==null&&Mp(yp,e),bp!==null&&Mp(bp,e),xp.forEach(t),Sp.forEach(t);for(var n=0;n<Cp.length;n++){var r=Cp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Cp.length&&(n=Cp[0],n.blockedOn===null);)Op(n),n.blockedOn===null&&Cp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[_t]||null;if(typeof a==`function`)o||Pp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[_t]||null)s=o.formAction;else if(hp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Pp(n)}}}function Ip(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Lp(e){this._internalRoot=e}Rp.prototype.render=Lp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;ip(n,hu(),e,t,null,null)},Rp.prototype.unmount=Lp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ip(e.current,2,null,e,null,null),Su(),t[vt]=null}};function Rp(e){this._internalRoot=e}Rp.prototype.unstable_scheduleHydration=function(e){if(e){var t=pt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Cp.length&&t!==0&&t<Cp[n].priority;n++);Cp.splice(n,0,e),n===0&&Op(e)}};var zp=n.version;if(zp!==`19.2.8`)throw Error(i(527,zp,`19.2.8`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:d(e),e=e===null?null:e.stateNode,e};var Bp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Vp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vp.isDisabled&&Vp.supportsFiber)try{We=Vp.inject(Bp),Ge=Vp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Zs,s=Qs,c=$s;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=np(e,1,!1,null,null,n,r,null,o,s,c,Ip),e[vt]=t.current,wd(e),new Lp(t)}})),y=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=v()})),b=u(p(),1),x=y(),S=`modulepreload`,C=function(e){return`/sarathi-nx-frontend/`+e},w={},ee=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=C(t,n),t=s(t),t in w)return;w[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:S,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},te=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,ne=/^[\\/]{2}/;function re(e,t){return t+e.replace(/\\/g,`/`)}var ie=`popstate`;function ae(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function oe(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return E(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:D(t)}return de(t,n,null,e)}function T(e,t){if(e===!1||e==null)throw Error(t)}function se(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function ce(){return Math.random().toString(36).substring(2,10)}function le(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function E(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?ue(t):t,state:n,key:t&&t.key||r||ce(),mask:i}}function D({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function ue(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function de(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=ae(e)?e:E(h.location,e,t);n&&n(r,e),l=u()+1;let d=le(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=ae(e)?e:E(h.location,e,t);n&&n(r,e),l=u();let i=le(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return fe(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(ie,d),c=e,()=>{i.removeEventListener(ie,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function fe(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),T(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:D(t);return i=i.replace(/ $/,`%20`),!n&&ne.test(i)&&(i=r+i),new URL(i,r)}function pe(e,t,n=`/`){return me(e,t,n,!1)}function me(e,t,n,r,i){let a=Me((typeof t==`string`?ue(t):t).pathname||`/`,n);if(a==null)return null;let o=i??O(e),s=null,c=je(a);for(let e=0;s==null&&e<o.length;++e)s=De(o[e],c,r);return s}function O(e){let t=he(e);return _e(t),t}function he(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;T(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Be([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(T(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),he(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:Te(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=Ae(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of ge(e.path))a(e,t,!0,n)}),t}function ge(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=ge(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function _e(e){e.sort((e,t)=>e.score===t.score?Ee(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var ve=/^:[\w-]+$/,ye=3,be=2,xe=1,Se=10,Ce=-2,we=e=>e===`*`;function Te(e,t){let n=e.split(`/`),r=n.length;return n.some(we)&&(r+=Ce),t&&(r+=be),n.filter(e=>!we(e)).reduce((e,t)=>e+(ve.test(t)?ye:t===``?xe:Se),r)}function Ee(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function De(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?ke(u,l,s.matcher,s.compiledParams):Oe(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=Oe({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Be([a,d.pathname]),pathnameBase:He(Be([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=Be([a,d.pathnameBase]))}return o}function Oe(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ae(e.path,e.caseSensitive,e.end);return ke(e,t,n,r)}function ke(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return e[t]=n&&!i?void 0:(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Ae(e,t=!1,n=!0){se(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function je(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return se(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Me(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function Ne(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?ue(e):e,a;return n?(n=ze(n),a=n.startsWith(`/`)?Pe(n.substring(1),`/`):Pe(n,t)):a=t,{pathname:a,search:Ue(r),hash:We(i)}}function Pe(e,t){let n=Ve(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Fe(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ie(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Le(e){let t=Ie(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Re(e,t,n,r=!1){let i;typeof e==`string`?i=ue(e):(i={...e},T(!i.pathname||!i.pathname.includes(`?`),Fe(`?`,`pathname`,`search`,i)),T(!i.pathname||!i.pathname.includes(`#`),Fe(`#`,`pathname`,`hash`,i)),T(!i.search||!i.search.includes(`#`),Fe(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Ne(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var ze=e=>e.replace(/[\\/]{2,}/g,`/`),Be=e=>ze(e.join(`/`)),Ve=e=>e.replace(/\/+$/,``),He=e=>Ve(e).replace(/^\/*/,`/`),Ue=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,We=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Ge=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Ke(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function qe(e){return Be(e.map(e=>e.route.path).filter(Boolean))||`/`}var Je=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Ye(e,t){let n=e;if(typeof n!=`string`||!te.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Je)try{let e=new URL(window.location.href),r=ne.test(n)?new URL(re(n,e.protocol)):new URL(n),a=Me(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{se(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Xe=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(Xe);var Ze=[`GET`,...Xe];new Set(Ze);var Qe=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function $e(e){try{return Qe.includes(new URL(e).protocol)}catch{return!1}}var et=b.createContext(null);et.displayName=`DataRouter`;var tt=b.createContext(null);tt.displayName=`DataRouterState`;var nt=b.createContext(!1);function rt(){return b.useContext(nt)}var it=b.createContext({isTransitioning:!1});it.displayName=`ViewTransition`;var at=b.createContext(new Map);at.displayName=`Fetchers`;var ot=b.createContext(null);ot.displayName=`Await`;var st=b.createContext(null);st.displayName=`Navigation`;var ct=b.createContext(null);ct.displayName=`Location`;var lt=b.createContext({outlet:null,matches:[],isDataRoute:!1});lt.displayName=`Route`;var ut=b.createContext(null);ut.displayName=`RouteError`;var dt=`REACT_ROUTER_ERROR`,ft=`REDIRECT`,pt=`ROUTE_ERROR_RESPONSE`;function mt(e){if(e.startsWith(`${dt}:${ft}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function ht(e){if(e.startsWith(`${dt}:${pt}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Ge(t.status,t.statusText,t.data)}catch{}}function gt(e,{relative:t}={}){T(_t(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=b.useContext(st),{hash:i,pathname:a,search:o}=Ct(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Be([n,a])),r.createHref({pathname:s,search:o,hash:i})}function _t(){return b.useContext(ct)!=null}function vt(){return T(_t(),`useLocation() may be used only in the context of a <Router> component.`),b.useContext(ct).location}var yt=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function bt(e){b.useContext(st).static||b.useLayoutEffect(e)}function xt(){let{isDataRoute:e}=b.useContext(lt);return e?Bt():St()}function St(){T(_t(),`useNavigate() may be used only in the context of a <Router> component.`);let e=b.useContext(et),{basename:t,navigator:n}=b.useContext(st),{matches:r}=b.useContext(lt),{pathname:i}=vt(),a=JSON.stringify(Le(r)),o=b.useRef(!1);return bt(()=>{o.current=!0}),b.useCallback((r,s={})=>{if(se(o.current,yt),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Re(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Be([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}b.createContext(null);function Ct(e,{relative:t}={}){let{matches:n}=b.useContext(lt),{pathname:r}=vt(),i=JSON.stringify(Le(n));return b.useMemo(()=>Re(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function wt(e,t){return Tt(e,t)}function Tt(e,t,n){T(_t(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=b.useContext(st),{matches:i}=b.useContext(lt),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Ht(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=vt(),d;if(t){let e=typeof t==`string`?ue(t):t;T(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):pe(e,{pathname:p});se(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),se(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Mt(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Be([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Be([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?b.createElement(ct.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function Et(){let e=zt(),t=Ke(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=b.createElement(b.Fragment,null,b.createElement(`p`,null,`💿 Hey developer 👋`),b.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,b.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,b.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),b.createElement(b.Fragment,null,b.createElement(`h2`,null,`Unexpected Application Error!`),b.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?b.createElement(`pre`,{style:i},n):null,o)}var Dt=b.createElement(Et,null),Ot=class extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=ht(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:b.createElement(lt.Provider,{value:this.props.routeContext},b.createElement(ut.Provider,{value:e,children:this.props.component}));return this.context?b.createElement(At,{error:e},t):t}};Ot.contextType=nt;var kt=new WeakMap;function At({children:e,error:t}){let{basename:n}=b.useContext(st);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=mt(t.digest);if(e){let r=kt.get(t);if(r)throw r;let i=Ye(e.location,n),a=i.absoluteURL||i.to;if($e(a))throw Error(`Invalid redirect location`);if(Je&&!kt.get(t))if(i.isExternal||e.reloadDocument)window.location.href=a;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw kt.set(t,n),n}return b.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${a}`})}}return e}function jt({routeContext:e,match:t,children:n}){let r=b.useContext(et);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),b.createElement(lt.Provider,{value:e},n)}function Mt(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);T(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:qe(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||Dt,o&&(s<0&&c===0?(Ht(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?b.createElement(n.route.Component,null):n.route.element?n.route.element:e,b.createElement(jt,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?b.createElement(Ot,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function Nt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Pt(e){let t=b.useContext(et);return T(t,Nt(e)),t}function Ft(e){let t=b.useContext(tt);return T(t,Nt(e)),t}function It(e){let t=b.useContext(lt);return T(t,Nt(e)),t}function Lt(e){let t=It(e),n=t.matches[t.matches.length-1];return T(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Rt(){return Lt(`useRouteId`)}function zt(){let e=b.useContext(ut),t=Ft(`useRouteError`),n=Lt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Bt(){let{router:e}=Pt(`useNavigate`),t=Lt(`useNavigate`),n=b.useRef(!1);return bt(()=>{n.current=!0}),b.useCallback(async(r,i={})=>{se(n.current,yt),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Vt={};function Ht(e,t,n){!t&&!Vt[e]&&(Vt[e]=!0,se(!1,n))}b.memo(Ut);function Ut({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return Tt(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function Wt({to:e,replace:t,state:n,relative:r}){T(_t(),`<Navigate> may be used only in the context of a <Router> component.`);let{static:i}=b.useContext(st);se(!i,`<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);let{matches:a}=b.useContext(lt),{pathname:o}=vt(),s=xt(),c=Re(e,Le(a),o,r===`path`),l=JSON.stringify(c);return b.useEffect(()=>{s(JSON.parse(l),{replace:t,state:n,relative:r})},[s,l,r,t,n]),null}function Gt(e){T(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Kt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){T(!_t(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=b.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=ue(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=b.useMemo(()=>{let e=Me(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return se(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:b.createElement(st.Provider,{value:c},b.createElement(ct.Provider,{children:t,value:h}))}function qt({children:e,location:t}){return wt(Jt(e),t)}b.Component;function Jt(e,t=[]){let n=[];return b.Children.forEach(e,(e,r)=>{if(!b.isValidElement(e))return;let i=[...t,r];if(e.type===b.Fragment){n.push.apply(n,Jt(e.props.children,i));return}T(e.type===Gt,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),T(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Jt(e.props.children,i)),n.push(a)}),n}var Yt=`get`,Xt=`application/x-www-form-urlencoded`;function Zt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Qt(e){return Zt(e)&&e.tagName.toLowerCase()===`button`}function $t(e){return Zt(e)&&e.tagName.toLowerCase()===`form`}function en(e){return Zt(e)&&e.tagName.toLowerCase()===`input`}function tn(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function nn(e,t){return e.button===0&&(!t||t===`_self`)&&!tn(e)}var rn=null;function an(){if(rn===null)try{new FormData(document.createElement(`form`),0),rn=!1}catch{rn=!0}return rn}var on=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function sn(e){return e!=null&&!on.has(e)?(se(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Xt}"`),null):e}function cn(e,t){let n,r,i,a,o;if($t(e)){let o=e.getAttribute(`action`);r=o?Me(o,t):null,n=e.getAttribute(`method`)||Yt,i=sn(e.getAttribute(`enctype`))||Xt,a=new FormData(e)}else if(Qt(e)||en(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Me(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Yt,i=sn(e.getAttribute(`formenctype`))||sn(o.getAttribute(`enctype`))||Xt,a=new FormData(o,e),!an()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Zt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Yt,r=null,i=Xt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);function ln(e,t){if(e===!1||e==null)throw Error(t)}function un(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return i.pathname=n?i.pathname.endsWith(`/`)?`${i.pathname}_.${r}`:`${i.pathname}.${r}`:i.pathname===`/`?`_root.${r}`:t&&Me(i.pathname,t)===`/`?`${Ve(t)}/_root.${r}`:`${Ve(i.pathname)}.${r}`,i}async function dn(e,t){if(e.id in t)return t[e.id];try{let n=await ee(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function fn(e){return e!=null&&typeof e.page==`string`}function pn(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function mn(e,t,n){return yn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await dn(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(pn).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function hn(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function gn(e,t,{includeHydrateFallback:n}={}){return _n(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function _n(e){return[...new Set(e)]}function vn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function yn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!fn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(vn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function bn(){let e=b.useContext(et);return ln(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function xn(){let e=b.useContext(tt);return ln(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var Sn=b.createContext(void 0);Sn.displayName=`FrameworkContext`;function Cn(){let e=b.useContext(Sn);return ln(e,`You must render this element inside a <HydratedRouter> element`),e}function wn(e,t){let n=b.useContext(Sn),[r,i]=b.useState(!1),[a,o]=b.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=b.useRef(null);b.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),b.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:Tn(s,p),onBlur:Tn(c,m),onMouseEnter:Tn(l,p),onMouseLeave:Tn(u,m),onTouchStart:Tn(d,p)}]:[a,f,{}]:[!1,f,{}]}function Tn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function En({page:e,...t}){let n=rt(),{nonce:r}=Cn(),{router:i}=bn(),a=b.useMemo(()=>pe(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),n?b.createElement(On,{page:e,matches:a,...t}):b.createElement(kn,{page:e,matches:a,...t})):null}function Dn(e){let{manifest:t,routeModules:n}=Cn(),[r,i]=b.useState([]);return b.useEffect(()=>{let r=!1;return mn(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function On({page:e,matches:t,...n}){let r=vt(),{future:i}=Cn(),{basename:a}=bn(),o=b.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=un(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return b.createElement(b.Fragment,null,o.map(e=>b.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function kn({page:e,matches:t,...n}){let r=vt(),{future:i,manifest:a,routeModules:o}=Cn(),{basename:s}=bn(),{loaderData:c,matches:l}=xn(),u=b.useMemo(()=>hn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=b.useMemo(()=>hn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=b.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=un(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=b.useMemo(()=>gn(d,a),[d,a]),m=Dn(d);return b.createElement(b.Fragment,null,f.map(e=>b.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>b.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>b.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function An(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}b.Component;var jn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{jn&&(window.__reactRouterVersion=`7.18.2`)}catch{}function Mn({basename:e,children:t,useTransitions:n,window:r}){let i=b.useRef();i.current??=oe({window:r,v5Compat:!0});let a=i.current,[o,s]=b.useState({action:a.action,location:a.location}),c=b.useCallback(e=>{n===!1?s(e):b.startTransition(()=>s(e))},[n]);return b.useLayoutEffect(()=>a.listen(c),[a,c]),b.createElement(Kt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}var Nn=b.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=b.useContext(st),v=typeof l==`string`&&te.test(l),y=Ye(l,h);l=y.to;let x=gt(l,{relative:r}),S=vt(),C=null;if(o){let e=Re(o,[],S.mask?S.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Be([h,e.pathname])),C=g.createHref(e)}let[w,ee,ne]=wn(n,p),re=Rn(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function ie(t){e&&e(t),t.defaultPrevented||re(t)}let ae=!(y.isExternal||i),oe=b.createElement(`a`,{...p,...ne,href:(ae?C:void 0)||y.absoluteURL||x,onClick:ae?ie:e,ref:An(m,ee),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return w&&!v?b.createElement(b.Fragment,null,oe,b.createElement(En,{page:x})):oe});Nn.displayName=`Link`;var Pn=b.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=Ct(a,{relative:c.relative}),d=vt(),f=b.useContext(tt),{navigator:p,basename:m}=b.useContext(st),h=f!=null&&Un(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=Me(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,x=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,S=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),C={isActive:x,isPending:S,isTransitioning:h},w=x?e:void 0,ee;ee=typeof n==`function`?n(C):[n,x?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let te=typeof i==`function`?i(C):i;return b.createElement(Nn,{...c,"aria-current":w,className:ee,ref:l,style:te,to:a,viewTransition:o},typeof s==`function`?s(C):s)});Pn.displayName=`NavLink`;var Fn=b.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Yt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=b.useContext(st),g=Vn(),_=Hn(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&te.test(s);return b.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?b.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});Fn.displayName=`Form`;function In(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ln(e){let t=b.useContext(et);return T(t,In(e)),t}function Rn(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=xt(),d=vt(),f=Ct(e,{relative:o});return b.useCallback(p=>{if(nn(p,t)){p.preventDefault();let t=n===void 0?D(d)===D(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?b.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var zn=0,Bn=()=>`__${String(++zn)}__`;function Vn(){let{router:e}=Ln(`useSubmit`),{basename:t}=b.useContext(st),n=Rt(),r=e.fetch,i=e.navigate;return b.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=cn(e,t);if(a.navigate===!1){let e=a.fetcherKey||Bn();await r(e,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync})}else await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Hn(e,{relative:t}={}){let{basename:n}=b.useContext(st),r=b.useContext(lt);T(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...Ct(e||`.`,{relative:t})},o=vt();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Be([n,a.pathname])),D(a)}function Un(e,{relative:t}={}){let n=b.useContext(it);T(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Ln(`useViewTransitionState`),i=Ct(e,{relative:t});if(!n.isTransitioning)return!1;let a=Me(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Me(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Oe(i.pathname,o)!=null||Oe(i.pathname,a)!=null}var Wn={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Gn=b.createContext&&b.createContext(Wn),Kn=[`attr`,`size`,`title`];function qn(e,t){if(e==null)return{};var n,r,i=Jn(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Jn(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Yn(){return Yn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yn.apply(null,arguments)}function Xn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Zn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Xn(Object(n),!0).forEach(function(t){Qn(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xn(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Qn(e,t,n){return(t=$n(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $n(e){var t=er(e,`string`);return typeof t==`symbol`?t:t+``}function er(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function tr(e){return e&&e.map((e,t)=>b.createElement(e.tag,Zn({key:t},e.attr),tr(e.child)))}function k(e){return t=>b.createElement(nr,Yn({attr:Zn({},e.attr)},t),tr(e.child))}function nr(e){var t=t=>{var n=e.attr,r=e.size,i=e.title,a=qn(e,Kn),o=r||t.size||`1em`,s;return t.className&&(s=t.className),e.className&&(s=(s?s+` `:``)+e.className),b.createElement(`svg`,Yn({stroke:`currentColor`,fill:`currentColor`,strokeWidth:`0`},t.attr,n,a,{className:s,style:Zn(Zn({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:`http://www.w3.org/2000/svg`}),i&&b.createElement(`title`,null,i),e.children)};return Gn===void 0?t(Wn):b.createElement(Gn.Consumer,null,e=>t(e))}function rr(e){return k({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z`},child:[]}]})(e)}function ir(e){return k({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z`},child:[]}]})(e)}function ar(e){return k({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z`},child:[]}]})(e)}function or(e){return k({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z`},child:[]}]})(e)}function sr(e){return k({tag:`svg`,attr:{viewBox:`0 0 488 512`},child:[{tag:`path`,attr:{d:`M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z`},child:[]}]})(e)}function cr(e){return k({tag:`svg`,attr:{viewBox:`0 0 320 512`},child:[{tag:`path`,attr:{d:`M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z`},child:[]}]})(e)}function lr(e){return k({tag:`svg`,attr:{viewBox:`0 0 416 512`},child:[{tag:`path`,attr:{d:`M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z`},child:[]}]})(e)}function ur(e){return k({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z`},child:[]}]})(e)}function dr(e){return k({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z`},child:[]}]})(e)}function fr(e){return k({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M115.38 136.9l102.11 37.18c35.19-81.54 86.21-144.29 139-173.7-95.88-4.89-188.78 36.96-248.53 111.8-6.69 8.4-2.66 21.05 7.42 24.72zm132.25 48.16l238.48 86.83c35.76-121.38 18.7-231.66-42.63-253.98-7.4-2.7-15.13-4-23.09-4-58.02.01-128.27 69.17-172.76 171.15zM521.48 60.5c6.22 16.3 10.83 34.6 13.2 55.19 5.74 49.89-1.42 108.23-18.95 166.98l102.62 37.36c10.09 3.67 21.31-3.43 21.57-14.17 2.32-95.69-41.91-187.44-118.44-245.36zM560 447.98H321.06L386 269.5l-60.14-21.9-72.9 200.37H16c-8.84 0-16 7.16-16 16.01v32.01C0 504.83 7.16 512 16 512h544c8.84 0 16-7.17 16-16.01v-32.01c0-8.84-7.16-16-16-16z`},child:[]}]})(e)}function pr(e){return k({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M631.2 96.5L436.5 0C416.4 27.8 371.9 47.2 320 47.2S223.6 27.8 203.5 0L8.8 96.5c-7.9 4-11.1 13.6-7.2 21.5l57.2 114.5c4 7.9 13.6 11.1 21.5 7.2l56.6-27.7c10.6-5.2 23 2.5 23 14.4V480c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V226.3c0-11.8 12.4-19.6 23-14.4l56.6 27.7c7.9 4 17.5.8 21.5-7.2L638.3 118c4-7.9.8-17.6-7.1-21.5z`},child:[]}]})(e)}function mr(e){return k({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z`},child:[]}]})(e)}function hr(e){return k({tag:`svg`,attr:{viewBox:`0 0 352 512`},child:[{tag:`path`,attr:{d:`M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z`},child:[]}]})(e)}function gr(e){return k({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z`},child:[]}]})(e)}function _r(e){return k({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z`},child:[]}]})(e)}function vr(e){return k({tag:`svg`,attr:{viewBox:`0 0 384 512`},child:[{tag:`path`,attr:{d:`M336 160H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h16v16c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-16h128v16c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-16h16c26.51 0 48-21.49 48-48V208c0-26.51-21.49-48-48-48zm-16 216c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h240c4.42 0 8 3.58 8 8v16zm0-96c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h240c4.42 0 8 3.58 8 8v16zM144 48h96v80h48V48c0-26.51-21.49-48-48-48h-96c-26.51 0-48 21.49-48 48v80h48V48z`},child:[]}]})(e)}function yr(e){return k({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z`},child:[]}]})(e)}function br(e){return k({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M431.98 448.01l-47.97.05V416h-128v32.21l-47.98.05c-8.82.01-15.97 7.16-15.98 15.99l-.05 31.73c-.01 8.85 7.17 16.03 16.02 16.02l223.96-.26c8.82-.01 15.97-7.16 15.98-15.98l.04-31.73c.01-8.85-7.17-16.03-16.02-16.02zM585.2 26.74C582.58 11.31 568.99 0 553.06 0H86.93C71 0 57.41 11.31 54.79 26.74-3.32 369.16.04 348.08.03 352c-.03 17.32 14.29 32 32.6 32h574.74c18.23 0 32.51-14.56 32.59-31.79.02-4.08 3.35 16.95-54.76-325.47zM259.83 64h120.33l9.77 96H250.06l9.77-96zm-75.17 256H71.09L90.1 208h105.97l-11.41 112zm16.29-160H98.24l16.29-96h96.19l-9.77 96zm32.82 160l11.4-112h149.65l11.4 112H233.77zm195.5-256h96.19l16.29 96H439.04l-9.77-96zm26.06 256l-11.4-112H549.9l19.01 112H455.33z`},child:[]}]})(e)}function xr(e){return k({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M496.616 372.639l70.012-70.012c16.899-16.9 9.942-45.771-12.836-53.092L512 236.102V96c0-17.673-14.327-32-32-32h-64V24c0-13.255-10.745-24-24-24H248c-13.255 0-24 10.745-24 24v40h-64c-17.673 0-32 14.327-32 32v140.102l-41.792 13.433c-22.753 7.313-29.754 36.173-12.836 53.092l70.012 70.012C125.828 416.287 85.587 448 24 448c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24 61.023 0 107.499-20.61 143.258-59.396C181.677 487.432 216.021 512 256 512h128c39.979 0 74.323-24.568 88.742-59.396C508.495 491.384 554.968 512 616 512c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24-60.817 0-101.542-31.001-119.384-75.361zM192 128h256v87.531l-118.208-37.995a31.995 31.995 0 0 0-19.584 0L192 215.531V128z`},child:[]}]})(e)}function Sr(e){return k({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z`},child:[]}]})(e)}function Cr(e){return k({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M304 192v32c0 6.6-5.4 12-12 12h-56v56c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-56h-56c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h56v-56c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v56h56c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z`},child:[]}]})(e)}function wr(e){return k({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z`},child:[]}]})(e)}function Tr(e){return k({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M480 192H365.71L260.61 8.06A16.014 16.014 0 0 0 246.71 0h-65.5c-10.63 0-18.3 10.17-15.38 20.39L214.86 192H112l-43.2-57.6c-3.02-4.03-7.77-6.4-12.8-6.4H16.01C5.6 128-2.04 137.78.49 147.88L32 256 .49 364.12C-2.04 374.22 5.6 384 16.01 384H56c5.04 0 9.78-2.37 12.8-6.4L112 320h102.86l-49.03 171.6c-2.92 10.22 4.75 20.4 15.38 20.4h65.5c5.74 0 11.04-3.08 13.89-8.06L365.71 320H480c35.35 0 96-28.65 96-64s-60.65-64-96-64z`},child:[]}]})(e)}function Er(e){return k({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M624 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM80.55 341.27c6.28 6.84 15.1 10.72 24.33 10.71l130.54-.18a65.62 65.62 0 0 0 29.64-7.12l290.96-147.65c26.74-13.57 50.71-32.94 67.02-58.31 18.31-28.48 20.3-49.09 13.07-63.65-7.21-14.57-24.74-25.27-58.25-27.45-29.85-1.94-59.54 5.92-86.28 19.48l-98.51 49.99-218.7-82.06a17.799 17.799 0 0 0-18-1.11L90.62 67.29c-10.67 5.41-13.25 19.65-5.17 28.53l156.22 98.1-103.21 52.38-72.35-36.47a17.804 17.804 0 0 0-16.07.02L9.91 230.22c-10.44 5.3-13.19 19.12-5.57 28.08l76.21 82.97z`},child:[]}]})(e)}function Dr(e){return k({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z`},child:[]}]})(e)}function Or(e){return k({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M129.62 176h39.09c1.49-27.03 6.54-51.35 14.21-70.41-27.71 13.24-48.02 39.19-53.3 70.41zm0 32c5.29 31.22 25.59 57.17 53.3 70.41-7.68-19.06-12.72-43.38-14.21-70.41h-39.09zM224 286.69c7.69-7.45 20.77-34.42 23.43-78.69h-46.87c2.67 44.26 15.75 71.24 23.44 78.69zM200.57 176h46.87c-2.66-44.26-15.74-71.24-23.43-78.69-7.7 7.45-20.78 34.43-23.44 78.69zm64.51 102.41c27.71-13.24 48.02-39.19 53.3-70.41h-39.09c-1.49 27.03-6.53 51.35-14.21 70.41zM416 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h352c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32zm-80 416H112c-8.8 0-16-7.2-16-16s7.2-16 16-16h224c8.8 0 16 7.2 16 16s-7.2 16-16 16zm-112-96c-70.69 0-128-57.31-128-128S153.31 64 224 64s128 57.31 128 128-57.31 128-128 128zm41.08-214.41c7.68 19.06 12.72 43.38 14.21 70.41h39.09c-5.28-31.22-25.59-57.17-53.3-70.41z`},child:[]}]})(e)}function kr(e){return k({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z`},child:[]}]})(e)}function Ar(e){return k({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M167.02 309.34c-40.12 2.58-76.53 17.86-97.19 72.3-2.35 6.21-8 9.98-14.59 9.98-11.11 0-45.46-27.67-55.25-34.35C0 439.62 37.93 512 128 512c75.86 0 128-43.77 128-120.19 0-3.11-.65-6.08-.97-9.13l-88.01-73.34zM457.89 0c-15.16 0-29.37 6.71-40.21 16.45C213.27 199.05 192 203.34 192 257.09c0 13.7 3.25 26.76 8.73 38.7l63.82 53.18c7.21 1.8 14.64 3.03 22.39 3.03 62.11 0 98.11-45.47 211.16-256.46 7.38-14.35 13.9-29.85 13.9-45.99C512 20.64 486 0 457.89 0z`},child:[]}]})(e)}function jr(e){return k({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M416 48v416c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V48c0-26.51 21.49-48 48-48h224c26.51 0 48 21.49 48 48zm96 58v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42V88h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zM30 376h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6z`},child:[]}]})(e)}function Mr(e){return k({tag:`svg`,attr:{viewBox:`0 0 384 512`},child:[{tag:`path`,attr:{d:`M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z`},child:[]}]})(e)}function Nr(e){return k({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z`},child:[]}]})(e)}function Pr(e){return k({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z`},child:[]}]})(e)}function Fr(e){return k({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M475.115 163.781L336 252.309v-68.28c0-18.916-20.931-30.399-36.885-20.248L160 252.309V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h464c13.255 0 24-10.745 24-24V184.029c0-18.917-20.931-30.399-36.885-20.248z`},child:[]}]})(e)}function Ir(e){return k({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v208c0 44.112 35.888 80 80 80h336zm96-80V80c0-26.51-21.49-48-48-48H144c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h384c26.51 0 48-21.49 48-48zM256 128c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-96 144l55.515-55.515c4.686-4.686 12.284-4.686 16.971 0L272 256l135.515-135.515c4.686-4.686 12.284-4.686 16.971 0L512 208v112H160v-48z`},child:[]}]})(e)}function Lr(e){return k({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M560 64c8.84 0 16-7.16 16-16V16c0-8.84-7.16-16-16-16H16C7.16 0 0 7.16 0 16v32c0 8.84 7.16 16 16 16h15.98v384H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h240v-80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v80h240c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16h-16V64h16zm-304 44.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zm0 96c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zm-128-96c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zM179.2 256h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8zM192 384c0-53.02 42.98-96 96-96s96 42.98 96 96H192zm256-140.8c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-96c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4z`},child:[]}]})(e)}function Rr(e){return k({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z`},child:[]}]})(e)}function zr(e){return k({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z`},child:[]}]})(e)}function Br(e){return k({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z`},child:[]}]})(e)}function Vr(e){return k({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M480 288c0-80.25-49.28-148.92-119.19-177.62L320 192V80a16 16 0 0 0-16-16h-96a16 16 0 0 0-16 16v112l-40.81-81.62C81.28 139.08 32 207.75 32 288v64h448zm16 96H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z`},child:[]}]})(e)}function Hr(e){return k({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z`},child:[]}]})(e)}function Ur(e){return k({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z`},child:[]}]})(e)}function Wr(e){return k({tag:`svg`,attr:{viewBox:`0 0 496 512`},child:[{tag:`path`,attr:{d:`M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z`},child:[]}]})(e)}function Gr(e){return k({tag:`svg`,attr:{viewBox:`0 0 496 512`},child:[{tag:`path`,attr:{d:`M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm-11.34 240.23c-2.89 4.82-8.1 7.77-13.72 7.77h-.31c-4.24 0-8.31 1.69-11.31 4.69l-5.66 5.66c-3.12 3.12-3.12 8.19 0 11.31l5.66 5.66c3 3 4.69 7.07 4.69 11.31V304c0 8.84-7.16 16-16 16h-6.11c-6.06 0-11.6-3.42-14.31-8.85l-22.62-45.23c-2.44-4.88-8.95-5.94-12.81-2.08l-19.47 19.46c-3 3-7.07 4.69-11.31 4.69H50.81C49.12 277.55 48 266.92 48 256c0-110.28 89.72-200 200-200 21.51 0 42.2 3.51 61.63 9.82l-50.16 38.53c-5.11 3.41-4.63 11.06.86 13.81l10.83 5.41c5.42 2.71 8.84 8.25 8.84 14.31V216c0 4.42-3.58 8-8 8h-3.06c-3.03 0-5.8-1.71-7.15-4.42-1.56-3.12-5.96-3.29-7.76-.3l-17.37 28.95zM408 358.43c0 4.24-1.69 8.31-4.69 11.31l-9.57 9.57c-3 3-7.07 4.69-11.31 4.69h-15.16c-4.24 0-8.31-1.69-11.31-4.69l-13.01-13.01a26.767 26.767 0 0 0-25.42-7.04l-21.27 5.32c-1.27.32-2.57.48-3.88.48h-10.34c-4.24 0-8.31-1.69-11.31-4.69l-11.91-11.91a8.008 8.008 0 0 1-2.34-5.66v-10.2c0-3.27 1.99-6.21 5.03-7.43l39.34-15.74c1.98-.79 3.86-1.82 5.59-3.05l23.71-16.89a7.978 7.978 0 0 1 4.64-1.48h12.09c3.23 0 6.15 1.94 7.39 4.93l5.35 12.85a4 4 0 0 0 3.69 2.46h3.8c1.78 0 3.35-1.18 3.84-2.88l4.2-14.47c.5-1.71 2.06-2.88 3.84-2.88h6.06c2.21 0 4 1.79 4 4v12.93c0 2.12.84 4.16 2.34 5.66l11.91 11.91c3 3 4.69 7.07 4.69 11.31v24.6z`},child:[]}]})(e)}function Kr(e){return k({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z`},child:[]}]})(e)}function qr(e){return k({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z`},child:[]}]})(e)}function Jr(e){return k({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z`},child:[]}]})(e)}function Yr(e){return k({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z`},child:[]}]})(e)}function Xr(e){return k({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z`},child:[]}]})(e)}function Zr(e){return k({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M160 224v64h320v-64c0-35.3 28.7-64 64-64h32c0-53-43-96-96-96H160c-53 0-96 43-96 96h32c35.3 0 64 28.7 64 64zm416-32h-32c-17.7 0-32 14.3-32 32v96H128v-96c0-17.7-14.3-32-32-32H64c-35.3 0-64 28.7-64 64 0 23.6 13 44 32 55.1V432c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-16h384v16c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V311.1c19-11.1 32-31.5 32-55.1 0-35.3-28.7-64-64-64z`},child:[]}]})(e)}function Qr(e){return k({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z`},child:[]}]})(e)}function $r(e){return k({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z`},child:[]}]})(e)}function ei(e){return k({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z`},child:[]}]})(e)}function ti(e){return k({tag:`svg`,attr:{viewBox:`0 0 320 512`},child:[{tag:`path`,attr:{d:`M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z`},child:[]}]})(e)}function ni(e){return k({tag:`svg`,attr:{viewBox:`0 0 320 512`},child:[{tag:`path`,attr:{d:`M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z`},child:[]}]})(e)}function ri(e){return k({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z`},child:[]}]})(e)}function ii(e){return k({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z`},child:[]}]})(e)}function ai(e){return k({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z`},child:[]}]})(e)}function oi(e){return k({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z`},child:[]}]})(e)}function si(e){return k({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z`},child:[]}]})(e)}function ci(e){return k({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z`},child:[]}]})(e)}function li(e){return k({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z`},child:[]}]})(e)}function ui(e){return k({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z`},child:[]}]})(e)}function di(e){return k({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z`},child:[]}]})(e)}function fi(e){return k({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M466.27 286.69C475.04 271.84 480 256 480 236.85c0-44.015-37.218-85.58-85.82-85.58H357.7c4.92-12.81 8.85-28.13 8.85-46.54C366.55 31.936 328.86 0 271.28 0c-61.607 0-58.093 94.933-71.76 108.6-22.747 22.747-49.615 66.447-68.76 83.4H32c-17.673 0-32 14.327-32 32v240c0 17.673 14.327 32 32 32h64c14.893 0 27.408-10.174 30.978-23.95 44.509 1.001 75.06 39.94 177.802 39.94 7.22 0 15.22.01 22.22.01 77.117 0 111.986-39.423 112.94-95.33 13.319-18.425 20.299-43.122 17.34-66.99 9.854-18.452 13.664-40.343 8.99-62.99zm-61.75 53.83c12.56 21.13 1.26 49.41-13.94 57.57 7.7 48.78-17.608 65.9-53.12 65.9h-37.82c-71.639 0-118.029-37.82-171.64-37.82V240h10.92c28.36 0 67.98-70.89 94.54-97.46 28.36-28.36 18.91-75.63 37.82-94.54 47.27 0 47.27 32.98 47.27 56.73 0 39.17-28.36 56.72-28.36 94.54h103.99c21.11 0 37.73 18.91 37.82 37.82.09 18.9-12.82 37.81-22.27 37.81 13.489 14.555 16.371 45.236-5.21 65.62zM88 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z`},child:[]}]})(e)}function pi(e){return k({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z`},child:[]}]})(e)}function mi(e){return k({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z`},child:[]}]})(e)}function hi(e){return k({tag:`svg`,attr:{viewBox:`0 0 320 512`},child:[{tag:`path`,attr:{d:`M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z`},child:[]}]})(e)}var gi=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),A=s(((e,t)=>{t.exports=gi()}))();function _i(){return(0,A.jsx)(`header`,{className:`\r
        w-full\r
        h-[86px]\r
        bg-[#03182B]\r
        text-white\r
        border-b\r
        border-white/15\r
      `,children:(0,A.jsx)(`div`,{className:`\r
          w-full\r
          max-w-[1600px]\r
          mx-auto\r
          h-full\r
          px-5\r
          sm:px-7\r
          lg:px-10\r
          xl:px-12\r
          2xl:px-4\r
        `,children:(0,A.jsxs)(`div`,{className:`\r
            h-full\r
            flex\r
            items-center\r
            justify-between\r
            gap-6\r
          `,children:[(0,A.jsxs)(`div`,{className:`\r
              flex\r
              items-center\r
              min-w-0\r
            `,children:[(0,A.jsxs)(`a`,{href:`tel:+917666984626`,className:`\r
                flex\r
                items-center\r
                gap-[10px]\r
                whitespace-nowrap\r
                text-white\r
                hover:text-white\r
                transition-colors\r
                duration-200\r
              `,children:[(0,A.jsx)(Dr,{className:`\r
                  shrink-0\r
                  text-[#8BC63E]\r
                  text-[18px]\r
                `}),(0,A.jsx)(`span`,{className:`\r
                  text-[13px]\r
                  sm:text-[14px]\r
                  font-medium\r
                  tracking-[0.1px]\r
                `,children:`+91 766 698 4626`})]}),(0,A.jsx)(`span`,{className:`\r
                mx-5\r
                h-[28px]\r
                w-px\r
                bg-white/30\r
              `}),(0,A.jsxs)(`a`,{href:`tel:+918657867181`,className:`\r
                hidden\r
                sm:flex\r
                items-center\r
                gap-[10px]\r
                whitespace-nowrap\r
                text-white\r
                transition-colors\r
                duration-200\r
              `,children:[(0,A.jsx)(ir,{className:`\r
                  shrink-0\r
                  text-[#8BC63E]\r
                  text-[21px]\r
                `}),(0,A.jsx)(`span`,{className:`\r
                  text-[13px]\r
                  sm:text-[14px]\r
                  font-medium\r
                  tracking-[0.1px]\r
                `,children:`+91 865 786 7181`})]}),(0,A.jsx)(`span`,{className:`\r
                hidden\r
                lg:block\r
                mx-5\r
                h-[28px]\r
                w-px\r
                bg-white/30\r
              `}),(0,A.jsxs)(`a`,{href:`mailto:sajid@sarathinx.com`,className:`\r
                hidden\r
                lg:flex\r
                items-center\r
                gap-[10px]\r
                whitespace-nowrap\r
                text-white\r
                transition-colors\r
                duration-200\r
              `,children:[(0,A.jsx)(Xr,{className:`\r
                  shrink-0\r
                  text-[#8BC63E]\r
                  text-[20px]\r
                `}),(0,A.jsx)(`span`,{className:`\r
                  text-[14px]\r
                  font-medium\r
                `,children:`sajid@sarathinx.com`})]})]}),(0,A.jsxs)(`div`,{className:`\r
              flex\r
              items-center\r
              shrink-0\r
            `,children:[(0,A.jsx)(`span`,{className:`\r
                hidden\r
                md:block\r
                mr-4\r
                text-[14px]\r
                font-normal\r
                text-white/90\r
                whitespace-nowrap\r
              `,children:`Connect Us :`}),(0,A.jsx)(`a`,{href:`https://www.instagram.com/sarathi_nx_travel/`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Instagram`,className:`\r
                w-[34px]\r
                h-[34px]\r
                flex\r
                items-center\r
                justify-center\r
                rounded-full\r
\r
                bg-gradient-to-br\r
                from-[#F9CE34]\r
                via-[#EE2A7B]\r
                to-[#6228D7]\r
\r
                transition-transform\r
                duration-200\r
\r
                hover:scale-105\r
              `,children:(0,A.jsx)(or,{className:`\r
                  text-white\r
                  text-[18px]\r
                `})}),(0,A.jsx)(`a`,{href:`#`,"aria-label":`LinkedIn`,className:`\r
                ml-[10px]\r
                w-[34px]\r
                h-[34px]\r
                flex\r
                items-center\r
                justify-center\r
                rounded-full\r
                bg-[#1769AA]\r
\r
                transition-transform\r
                duration-200\r
\r
                hover:scale-105\r
              `,children:(0,A.jsx)(mi,{className:`\r
                  text-white\r
                  text-[17px]\r
                `})}),(0,A.jsx)(`a`,{href:`#`,"aria-label":`Facebook`,className:`\r
                ml-[10px]\r
                w-[34px]\r
                h-[34px]\r
                flex\r
                items-center\r
                justify-center\r
                rounded-full\r
                bg-[#1877F2]\r
\r
                transition-transform\r
                duration-200\r
\r
                hover:scale-105\r
              `,children:(0,A.jsx)(hi,{className:`\r
                  text-white\r
                  text-[17px]\r
                `})}),(0,A.jsx)(`a`,{href:`#`,"aria-label":`X`,className:`\r
                ml-[10px]\r
                w-[34px]\r
                h-[34px]\r
                flex\r
                items-center\r
                justify-center\r
                rounded-full\r
\r
                bg-[#050505]\r
                border\r
                border-white/10\r
\r
                transition-transform\r
                duration-200\r
\r
                hover:scale-105\r
              `,children:(0,A.jsx)(pi,{className:`\r
                  text-white\r
                  text-[16px]\r
                `})})]})]})})})}var vi=[{id:1,title:`Home`,href:`/`},{id:2,title:`Flight & Air Travel`,href:`/flight-air-travel`},{id:3,title:`Hotel & Accommodation`,href:`/hotel-accommodation`},{id:4,title:`Visa & Documentation`,href:`/visa-documentation`},{id:5,title:`Trade Fair`,href:`/trade-fair`},{id:6,title:`Premium Holiday Packages`,href:`/premium-holiday-packages`},{id:7,title:`About Us`,href:`/about-us`},{id:8,title:`Contact Us`,href:`/contact-us`},{id:9,title:`More Service`,href:`#`}];function yi(){let[e,t]=(0,b.useState)(!1),[n,r]=(0,b.useState)(!1),i=vi.filter(e=>e.title!==`More Service`),a=vi.find(e=>e.title===`More Service`),o=(e=``)=>{let t=e.toLowerCase();return t.includes(`home`)?Rr:t.includes(`flight`)||t.includes(`air`)?Tr:t.includes(`hotel`)||t.includes(`accommodation`)?Lr:t.includes(`visa`)||t.includes(`documentation`)?Or:t.includes(`trade`)||t.includes(`fair`)||t.includes(`exhibition`)?Hr:t.includes(`holiday`)||t.includes(`package`)?fr:t.includes(`about`)?ur:t.includes(`contact`)?Dr:_r};return(0,b.useEffect)(()=>{let e=()=>{window.innerWidth>=1024&&(t(!1),r(!1))};return window.addEventListener(`resize`,e),()=>{window.removeEventListener(`resize`,e)}},[]),(0,b.useEffect)(()=>(document.body.style.overflow=e?`hidden`:``,()=>{document.body.style.overflow=``}),[e]),(0,A.jsxs)(`nav`,{className:`\r
        relative\r
        z-[60]\r
\r
        w-full\r
\r
        bg-[#03182B]\r
\r
        border-b\r
        border-white/[0.10]\r
      `,children:[(0,A.jsx)(`div`,{className:`\r
          w-full\r
          max-w-[1600px]\r
          mx-auto\r
\r
          px-4\r
          sm:px-5\r
          lg:px-6\r
          xl:px-7\r
        `,children:(0,A.jsxs)(`div`,{className:`\r
            h-[142px]\r
\r
            flex\r
            items-stretch\r
          `,children:[(0,A.jsx)(`div`,{className:`\r
              shrink-0\r
\r
              w-[250px]\r
              xl:w-[285px]\r
\r
              flex\r
              items-center\r
\r
              pr-5\r
              xl:pr-8\r
            `,children:(0,A.jsx)(Pn,{to:`/`,end:!0,onClick:()=>{t(!1),r(!1)},className:`\r
                flex\r
                items-center\r
                justify-center\r
              `,children:(0,A.jsx)(`img`,{src:`/sarathi-nx-frontend/sarathi-logo.png`,alt:`Sarathi NX`,className:`\r
                  w-[220px]\r
                  xl:w-[235px]\r
                  2xl:w-[240px]\r
\r
                  h-auto\r
\r
                  object-contain\r
                `})})}),(0,A.jsxs)(`div`,{className:`\r
              hidden\r
              lg:flex\r
\r
              flex-1\r
              min-w-0\r
\r
              h-full\r
\r
              items-stretch\r
            `,children:[i.map(e=>{let t=o(e.title);return(0,A.jsx)(`div`,{className:`\r
                    relative\r
\r
                    flex-1\r
                    min-w-0\r
\r
                    h-full\r
\r
                    border-l\r
                    border-white/[0.12]\r
\r
                    flex\r
                    items-center\r
                    justify-center\r
                  `,children:(0,A.jsx)(Pn,{to:e.href,end:e.href===`/`,className:`\r
                      group\r
\r
                      relative\r
\r
                      w-full\r
                      h-full\r
\r
                      flex\r
                      flex-col\r
\r
                      items-center\r
                      justify-center\r
\r
                      gap-[9px]\r
\r
                      px-1\r
\r
                      text-center\r
                    `,children:({isActive:n})=>(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(t,{className:`
                            text-[28px]
                            xl:text-[30px]

                            transition-colors
                            duration-200

                            ${n?`text-[#9CCB42]`:`text-[#83A941]`}

                            group-hover:text-[#9CCB42]
                          `}),(0,A.jsx)(`span`,{className:`
                            text-[9px]
                            xl:text-[10px]
                            2xl:text-[11px]

                            font-medium

                            leading-[1.25]

                            whitespace-nowrap

                            transition-colors
                            duration-200

                            ${n?`text-[#9CCB42]`:`text-[#91B34E]`}

                            group-hover:text-[#A4CD55]
                          `,children:e.title}),(0,A.jsx)(`span`,{className:`
                            absolute

                            bottom-[17px]

                            left-1/2
                            -translate-x-1/2

                            h-[3px]

                            rounded-full

                            bg-[#9CCB42]

                            transition-all
                            duration-200

                            ${n?`w-[46px]`:`w-0 group-hover:w-[35px]`}
                          `})]})})},e.id)}),a&&(0,A.jsxs)(`div`,{className:`\r
                  relative\r
\r
                  shrink-0\r
\r
                  w-[115px]\r
                  xl:w-[125px]\r
\r
                  h-full\r
\r
                  border-l\r
                  border-white/[0.12]\r
\r
                  flex\r
                  items-center\r
                  justify-center\r
                `,onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[(0,A.jsxs)(`button`,{type:`button`,onClick:()=>r(e=>!e),className:`\r
                    group\r
\r
                    relative\r
\r
                    w-full\r
                    h-full\r
\r
                    flex\r
                    flex-col\r
\r
                    items-center\r
                    justify-center\r
\r
                    gap-[9px]\r
\r
                    px-1\r
                  `,children:[(0,A.jsx)(_r,{className:`\r
                      text-[28px]\r
                      xl:text-[30px]\r
\r
                      text-[#83A941]\r
\r
                      group-hover:text-[#9CCB42]\r
\r
                      transition-colors\r
                      duration-200\r
                    `}),(0,A.jsxs)(`span`,{className:`\r
                      flex\r
                      items-center\r
\r
                      gap-1\r
\r
                      text-[9px]\r
                      xl:text-[10px]\r
                      2xl:text-[11px]\r
\r
                      font-medium\r
\r
                      leading-[1.25]\r
\r
                      text-[#91B34E]\r
\r
                      group-hover:text-[#A4CD55]\r
\r
                      whitespace-nowrap\r
                    `,children:[`More Service`,(0,A.jsx)(ri,{className:`
                        text-[7px]

                        transition-transform
                        duration-200

                        ${n?`rotate-180`:``}
                      `})]}),(0,A.jsx)(`span`,{className:`
                      absolute

                      bottom-[17px]

                      left-1/2
                      -translate-x-1/2

                      h-[3px]

                      rounded-full

                      bg-[#9CCB42]

                      transition-all
                      duration-200

                      ${n?`w-[50px]`:`w-0 group-hover:w-[38px]`}
                    `})]}),(0,A.jsx)(`div`,{className:`
                    absolute

                    top-full
                    right-0

                    w-[260px]

                    bg-[#03182B]

                    border
                    border-white/[0.12]

                    shadow-[0_18px_45px_rgba(0,0,0,0.45)]

                    overflow-hidden

                    transition-all
                    duration-200

                    ${n?`opacity-100 translate-y-0 visible`:`opacity-0 -translate-y-2 invisible`}
                  `,children:(0,A.jsx)(`div`,{className:`\r
                      px-5\r
                      py-4\r
\r
                      text-[13px]\r
\r
                      text-white/70\r
                    `,children:`More Services`})})]})]}),(0,A.jsx)(`div`,{className:`\r
              lg:hidden\r
\r
              ml-auto\r
\r
              flex\r
              items-center\r
            `,children:(0,A.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),"aria-label":`Toggle Menu`,"aria-expanded":e,className:`\r
                w-11\r
                h-11\r
\r
                flex\r
                items-center\r
                justify-center\r
\r
                border\r
                border-[#91C63F]/60\r
\r
                text-[#91C63F]\r
\r
                text-xl\r
\r
                rounded-sm\r
              `,children:e?(0,A.jsx)(hr,{}):(0,A.jsx)(li,{})})})]})}),(0,A.jsx)(`div`,{className:`
          lg:hidden

          absolute

          top-full
          left-0
          right-0

          bg-[#03182B]

          border-t
          border-white/[0.10]

          shadow-[0_20px_40px_rgba(0,0,0,0.45)]

          overflow-hidden

          transition-all
          duration-300

          ${e?`max-h-[85vh] opacity-100 visible`:`max-h-0 opacity-0 invisible`}
        `,children:(0,A.jsxs)(`div`,{className:`\r
            max-h-[85vh]\r
            overflow-y-auto\r
\r
            px-3\r
            py-3\r
          `,children:[i.map(e=>{let n=o(e.title);return(0,A.jsxs)(Pn,{to:e.href,end:e.href===`/`,onClick:()=>{t(!1),r(!1)},className:({isActive:e})=>`
                  flex
                  items-center

                  gap-4

                  px-4
                  py-[15px]

                  border-b
                  border-white/[0.08]

                  ${e?`text-[#9CCB42] bg-[#9CCB42]/10`:`text-white/80 hover:text-[#9CCB42]`}
                `,children:[(0,A.jsx)(n,{className:`\r
                    text-[19px]\r
                    shrink-0\r
                  `}),(0,A.jsx)(`span`,{className:`\r
                    text-[13px]\r
                    font-medium\r
                  `,children:e.title})]},e.id)}),(0,A.jsxs)(`button`,{type:`button`,onClick:()=>r(e=>!e),className:`\r
              w-full\r
\r
              flex\r
              items-center\r
              justify-between\r
\r
              px-4\r
              py-[15px]\r
\r
              text-white/80\r
\r
              border-b\r
              border-white/[0.08]\r
            `,children:[(0,A.jsxs)(`span`,{className:`\r
                flex\r
                items-center\r
                gap-4\r
              `,children:[(0,A.jsx)(_r,{className:`\r
                  text-[19px]\r
                `}),(0,A.jsx)(`span`,{className:`\r
                  text-[13px]\r
                  font-medium\r
                `,children:`More Service`})]}),(0,A.jsx)(ri,{className:`
                text-[9px]

                transition-transform

                ${n?`rotate-180`:``}
              `})]})]})})]})}var bi=(0,b.createContext)({});function xi(e){let t=(0,b.useRef)(null);return t.current===null&&(t.current=e()),t.current}var Si=typeof window<`u`?b.useLayoutEffect:b.useEffect,Ci=(0,b.createContext)(null);function wi(e,t){e.indexOf(t)===-1&&e.push(t)}function Ti(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var Ei=(e,t,n)=>n>t?t:n<e?e:n,Di={},Oi=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),ki=e=>typeof e==`object`&&!!e,Ai=e=>/^0[^.\s]+$/u.test(e);function ji(e){let t;return()=>(t===void 0&&(t=e()),t)}var Mi=e=>e,Ni=(...e)=>e.reduce((e,t)=>n=>t(e(n))),Pi=(e,t,n)=>{let r=t-e;return r?(n-e)/r:1},Fi=class{constructor(){this.subscriptions=[]}add(e){return wi(this.subscriptions,e),()=>Ti(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},Ii=e=>e*1e3,Li=e=>e/1e3,Ri=(e,t)=>t?1e3/t*e:0,zi=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Bi=1e-7,Vi=12;function j(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=zi(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>Bi&&++s<Vi);return o}function M(e,t,n,r){if(e===t&&n===r)return Mi;let i=t=>j(t,0,1,e,n);return e=>e===0||e===1?e:zi(i(e),t,r)}var Hi=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Ui=e=>t=>1-e(1-t),Wi=M(.33,1.53,.69,.99),Gi=Ui(Wi),Ki=Hi(Gi),qi=e=>e>=1?1:(e*=2)<1?.5*Gi(e):.5*(2-2**(-10*(e-1))),Ji=e=>1-Math.sin(Math.acos(e)),Yi=Ui(Ji),Xi=Hi(Ji),Zi=M(.42,0,1,1),Qi=M(0,0,.58,1),$i=M(.42,0,.58,1),ea=e=>Array.isArray(e)&&typeof e[0]!=`number`,ta=e=>Array.isArray(e)&&typeof e[0]==`number`,na={linear:Mi,easeIn:Zi,easeInOut:$i,easeOut:Qi,circIn:Ji,circInOut:Xi,circOut:Yi,backIn:Gi,backInOut:Ki,backOut:Wi,anticipate:qi},ra=e=>typeof e==`string`,ia=e=>{if(ta(e)){e.length;let[t,n,r,i]=e;return M(t,n,r,i)}return ra(e)?(na[e],`${e}`,na[e]):e},aa=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`];function oa(e){let t=new Set,n=new Set,r=!1,i=!1,a=new WeakSet,o={delta:0,timestamp:0,isProcessing:!1};function s(t){a.has(t)&&(c.schedule(t),e()),t(o)}let c={schedule:(e,i=!1,o=!1)=>{let s=o&&r?t:n;return i&&a.add(e),s.add(e),e},cancel:e=>{n.delete(e),a.delete(e)},process:e=>{if(o=e,r){i=!0;return}r=!0;let a=t;t=n,n=a,t.forEach(s),t.clear(),r=!1,i&&(i=!1,c.process(e))}};return c}var sa=40;function ca(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=aa.reduce((e,t)=>(e[t]=oa(a),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=Di.useManualTiming,o=a?i.timestamp:performance.now();n=!1,a||(i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,sa),1)),i.timestamp=o,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:aa.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<aa.length;t++)o[aa[t]].cancel(e)},state:i,steps:o}}var{schedule:N,cancel:la,state:ua,steps:da}=ca(typeof requestAnimationFrame<`u`?requestAnimationFrame:Mi,!0),fa;function pa(){fa=void 0}var ma={now:()=>(fa===void 0&&ma.set(ua.isProcessing||Di.useManualTiming?ua.timestamp:performance.now()),fa),set:e=>{fa=e,queueMicrotask(pa)}},ha=e=>t=>typeof t==`string`&&t.startsWith(e),ga=ha(`--`),_a=ha(`var(--`),va=e=>_a(e)?ya.test(e.split(`/*`)[0].trim()):!1,ya=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function ba(e){return typeof e==`string`&&e.split(`/*`)[0].includes(`var(--`)}var xa={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},Sa={...xa,transform:e=>Ei(0,1,e)},Ca={...xa,default:1},wa=e=>Math.round(e*1e5)/1e5,Ta=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Ea(e){return e==null}var Da=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Oa=(e,t)=>n=>!!(typeof n==`string`&&Da.test(n)&&n.startsWith(e)||t&&!Ea(n)&&Object.prototype.hasOwnProperty.call(n,t)),ka=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(Ta);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},Aa=e=>Ei(0,255,e),ja={...xa,transform:e=>Math.round(Aa(e))},Ma={test:Oa(`rgb`,`red`),parse:ka(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+ja.transform(e)+`, `+ja.transform(t)+`, `+ja.transform(n)+`, `+wa(Sa.transform(r))+`)`};function Na(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var Pa={test:Oa(`#`),parse:Na,transform:Ma.transform},Fa=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Ia=Fa(`deg`),La=Fa(`%`),P=Fa(`px`),Ra=Fa(`vh`),za=Fa(`vw`),Ba={...La,parse:e=>La.parse(e)/100,transform:e=>La.transform(e*100)},Va={test:Oa(`hsl`,`hue`),parse:ka(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+La.transform(wa(t))+`, `+La.transform(wa(n))+`, `+wa(Sa.transform(r))+`)`},Ha={test:e=>Ma.test(e)||Pa.test(e)||Va.test(e),parse:e=>Ma.test(e)?Ma.parse(e):Va.test(e)?Va.parse(e):Pa.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?Ma.transform(e):Va.transform(e),getAnimatableNone:e=>{let t=Ha.parse(e);return t.alpha=0,Ha.transform(t)}},Ua=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Wa(e){return isNaN(e)&&typeof e==`string`&&(e.match(Ta)?.length||0)+(e.match(Ua)?.length||0)>0}var Ga=`number`,Ka=`color`,qa=`var`,Ja=`var(`,Ya="${}",Xa=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Za(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(Xa,e=>(Ha.test(e)?(r.color.push(a),i.push(Ka),n.push(Ha.parse(e))):e.startsWith(Ja)?(r.var.push(a),i.push(qa),n.push(e)):(r.number.push(a),i.push(Ga),n.push(parseFloat(e))),++a,Ya)).split(Ya),indexes:r,types:i}}function Qa(e){return Za(e).values}function $a({split:e,types:t}){let n=e.length;return r=>{let i=``;for(let a=0;a<n;a++)if(i+=e[a],r[a]!==void 0){let e=t[a];i+=e===Ga?wa(r[a]):e===Ka?Ha.transform(r[a]):r[a]}return i}}function eo(e){return $a(Za(e))}var to=e=>typeof e==`number`?0:Ha.test(e)?Ha.getAnimatableNone(e):e,no=(e,t)=>typeof e==`number`?t?.trim().endsWith(`/`)?e:0:to(e);function ro(e){let t=Za(e);return $a(t)(t.values.map((e,n)=>no(e,t.split[n])))}var io={test:Wa,parse:Qa,createTransformer:eo,getAnimatableNone:ro};function ao(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function oo({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=ao(s,r,e+1/3),a=ao(s,r,e),o=ao(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function so(e,t){return n=>n>0?t:e}var F=(e,t,n)=>e+(t-e)*n,co=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},lo=[Pa,Ma,Va],uo=e=>lo.find(t=>t.test(e));function fo(e){let t=uo(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===Va&&(n=oo(n)),n}var po=(e,t)=>{let n=fo(e),r=fo(t);if(!n||!r)return so(e,t);let i={...n};return e=>(i.red=co(n.red,r.red,e),i.green=co(n.green,r.green,e),i.blue=co(n.blue,r.blue,e),i.alpha=F(n.alpha,r.alpha,e),Ma.transform(i))},mo=new Set([`none`,`hidden`]);function ho(e,t){return mo.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function go(e,t){return n=>F(e,t,n)}function _o(e){return typeof e==`number`?go:typeof e==`string`?va(e)?so:Ha.test(e)?po:yo:Array.isArray(e)?I:typeof e==`object`?Ha.test(e)?po:L:so}function I(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>_o(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function L(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=_o(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function vo(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]],s=e.values[o]??0;n[i]=s,r[a]++}return n}var yo=(e,t)=>{let n=io.createTransformer(t),r=Za(e),i=Za(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?mo.has(e)&&!i.values.length||mo.has(t)&&!r.values.length?ho(e,t):Ni(I(vo(r,i),i.values),n):(`${e}${t}`,so(e,t))};function bo(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?F(e,t,n):_o(e)(e,t)}var xo=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>N.update(t,e),stop:()=>la(t),now:()=>ua.isProcessing?ua.timestamp:ma.now()}},So=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},Co=2e4;function wo(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function To(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(wo(r),Co);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:Li(i)}}var R={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Eo(e,t){return e*Math.sqrt(1-t*t)}var Do=12;function Oo(e,t,n){let r=n;for(let n=1;n<Do;n++)r-=e(r)/t(r);return r}var ko=.001;function Ao({duration:e=R.duration,bounce:t=R.bounce,velocity:n=R.velocity,mass:r=R.mass}){let i,a;R.maxDuration;let o=1-t;o=Ei(R.minDamping,R.maxDamping,o),e=Ei(R.minDuration,R.maxDuration,Li(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=Eo(t,o),c=Math.exp(-i);return ko-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=Eo(t**2,o);return(-i(t)+ko>0?-1:1)*((a-s)*c)/l}):(i=t=>-.001+Math.exp(-t*e)*((t-n)*e+1),a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=Oo(i,a,s);if(e=Ii(e),isNaN(c))return{stiffness:R.stiffness,damping:R.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var jo=[`duration`,`bounce`],Mo=[`stiffness`,`damping`,`mass`];function No(e,t){return t.some(t=>e[t]!==void 0)}function Po(e){let t={velocity:R.velocity,stiffness:R.stiffness,damping:R.damping,mass:R.mass,isResolvedFromDuration:!1,...e};if(!No(e,Mo)&&No(e,jo))if(t.velocity=0,e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*Ei(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:R.mass,stiffness:i,damping:a}}else{let n=Ao({...e,velocity:0});t={...t,...n,mass:R.mass},t.isResolvedFromDuration=!0}return t}function z(e=R.visualDuration,t=R.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=Po({...n,velocity:-Li(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=Li(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?R.restSpeed.granular:R.restSpeed.default,i||=v?R.restDelta.granular:R.restDelta.default;let y,b,x,S,C,w;if(h<1)x=Eo(_,h),S=(m+h*_*g)/x,y=e=>{let t=Math.exp(-h*_*e);return o-t*(S*Math.sin(x*e)+g*Math.cos(x*e))},C=h*_*S+g*x,w=h*_*g-S*x,b=e=>Math.exp(-h*_*e)*(C*Math.sin(x*e)+w*Math.cos(x*e));else if(h===1){y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);let e=m+_*g;b=t=>Math.exp(-_*t)*(_*e*t-m)}else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e};let t=(m+h*_*g)/e,n=h*_*t-g*e,r=h*_*g-t*e;b=t=>{let i=Math.exp(-h*_*t),a=Math.min(e*t,300);return i*(n*Math.sinh(a)+r*Math.cosh(a))}}let ee={calculatedDuration:p&&d||null,velocity:e=>Ii(b(e)),next:e=>{if(!p&&h<1){let t=Math.exp(-h*_*e),n=Math.sin(x*e),a=Math.cos(x*e),c=o-t*(S*n+g*a),l=Ii(t*(C*n+w*a));return s.done=Math.abs(l)<=r&&Math.abs(o-c)<=i,s.value=s.done?o:c,s}let t=y(e);if(p)s.done=e>=d;else{let n=Ii(b(e));s.done=Math.abs(n)<=r&&Math.abs(o-t)<=i}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(wo(ee),Co),t=So(t=>ee.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return ee}z.applyToOptions=e=>{let t=To(e,100,z);return e.ease=t.ease,e.duration=Ii(t.duration),e.type=`keyframes`,e};var Fo=5;function Io(e,t,n){let r=Math.max(t-Fo,0);return Ri(n-e(r),t-r)}function Lo({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=z({keyframes:[f.value,m(f.value)],velocity:Io(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function Ro(e,t,n){let r=[],i=n||Di.mix||bo,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=Ni(Array.isArray(t)?t[n]||Mi:t,a)),r.push(a)}return r}function zo(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=Ro(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=Pi(e[r],e[r+1],n);return s[r](i)};return n?t=>l(Ei(e[0],e[a-1],t)):l}function Bo(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=Pi(0,t,r);e.push(F(n,1,i))}}function Vo(e){let t=[0];return Bo(t,e.length-1),t}function Ho(e,t){return e.map(e=>e*t)}function Uo(e,t){return e.map(()=>t||$i).splice(0,e.length-1)}function Wo({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=ea(r)?r.map(ia):ia(r),a={done:!1,value:t[0]},o=zo(Ho(n&&n.length===t.length?n:Vo(t),e),t,{ease:Array.isArray(i)?i:Uo(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var Go=e=>e!==null;function Ko(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(Go),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var qo={decay:Lo,inertia:Lo,tween:Wo,keyframes:Wo,spring:z};function Jo(e){typeof e.type==`string`&&(e.type=qo[e.type])}var Yo=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},Xo=e=>e/100,Zo=class extends Yo{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==ma.now()&&this.tick(ma.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;Jo(e);let{type:t=Wo,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||Wo;s!==Wo&&typeof o[0]!=`number`&&(this.mixKeyframes=Ni(Xo,bo(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=wo(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.currentTime=this.holdTime===null?t:this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=Ei(0,1,n)*o}let b;_?(this.delayState.value=l[0],b=this.delayState):b=y.next(v),i&&!_&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==Lo&&(b.value=Ko(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return Li(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+Li(e)}get time(){return Li(this.currentTime)}set time(e){e=Ii(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state=`paused`,this.holdTime=e,this.tick(e))}getGeneratorVelocity(){let e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);let t=this.generator.next(e).value;return Io(e=>this.generator.next(e).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(ma.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=Li(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=xo,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(ma.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function Qo(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var $o=e=>e*180/Math.PI,es=e=>ns($o(Math.atan2(e[1],e[0]))),ts={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:es,rotateZ:es,skewX:e=>$o(Math.atan(e[1])),skewY:e=>$o(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},ns=e=>(e%=360,e<0&&(e+=360),e),rs=es,is=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),as=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),os={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:is,scaleY:as,scale:e=>(is(e)+as(e))/2,rotateX:e=>ns($o(Math.atan2(e[6],e[5]))),rotateY:e=>ns($o(Math.atan2(-e[2],e[0]))),rotateZ:rs,rotate:rs,skewX:e=>$o(Math.atan(e[4])),skewY:e=>$o(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function ss(e){return+!!e.includes(`scale`)}function cs(e,t){if(!e||e===`none`)return ss(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=os,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=ts,i=t}if(!i)return ss(t);let a=r[t],o=i[1].split(`,`).map(us);return typeof a==`function`?a(o):o[a]}var ls=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return cs(n,t)};function us(e){return parseFloat(e.trim())}var ds=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],fs=new Set([...ds,`pathRotation`]),ps=e=>e===xa||e===P,ms=new Set([`x`,`y`,`z`]),hs=ds.filter(e=>!ms.has(e));function gs(e){let t=[];return hs.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(+!!n.startsWith(`scale`)))}),t}var _s={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>cs(t,`x`),y:(e,{transform:t})=>cs(t,`y`)};_s.translateX=_s.x,_s.translateY=_s.y;var vs=new Set,ys=!1,bs=!1,xs=!1;function Ss(){if(bs){let e=Array.from(vs).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=gs(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}bs=!1,ys=!1,vs.forEach(e=>e.complete(xs)),vs.clear()}function Cs(){vs.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(bs=!0)})}function ws(){xs=!0,Cs(),Ss(),xs=!1}var Ts=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(vs.add(this),ys||(ys=!0,N.read(Cs),N.resolveKeyframes(Ss))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}Qo(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),vs.delete(this)}cancel(){this.state===`scheduled`&&(vs.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},Es=e=>e.startsWith(`--`);function Ds(e,t,n){Es(t)?e.style.setProperty(t,n):e.style[t]=n}var Os={};function ks(e,t){let n=ji(e);return()=>Os[t]??n()}var As=ks(()=>window.ScrollTimeline!==void 0,`scrollTimeline`),js=ks(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),Ms=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Ns={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:Ms([0,.65,.55,1]),circOut:Ms([.55,0,1,.45]),backIn:Ms([.31,.01,.66,-.59]),backOut:Ms([.33,1.53,.69,.99])};function Ps(e,t){if(e)return typeof e==`function`?js()?So(e,t):`ease-out`:ta(e)?Ms(e):Array.isArray(e)?e.map(e=>Ps(e,t)||Ns.easeOut):Ns[e]}function Fs(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=Ps(s,i);Array.isArray(d)&&(u.easing=d);let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};return l&&(f.pseudoElement=l),e.animate(u,f)}function Is(e){return typeof e==`function`&&`applyToOptions`in e}function Ls({type:e,...t}){return Is(e)&&js()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var Rs=class extends Yo{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=Ls(e);this.animation=Fs(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=Ko(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(e),Ds(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e!==`idle`&&e!==`finished`&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return Li(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+Li(e)}get time(){return Li(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Ii(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&As()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),Mi):r(this)}},zs={anticipate:qi,backInOut:Ki,circInOut:Xi};function Bs(e){return e in zs}function Vs(e){typeof e.ease==`string`&&Bs(e.ease)&&(e.ease=zs[e.ease])}var Hs=10,Us=class extends Rs{constructor(e){Vs(e),Jo(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new Zo({...a,autoplay:!1}),s=Math.max(Hs,ma.now()-this.startTime),c=Ei(0,Hs,s-Hs),l=o.sample(s).value,{name:u}=this.options;i&&u&&Ds(i,u,l),t.setWithVelocity(o.sample(Math.max(0,s-c)).value,l,c),o.stop()}},Ws=(e,t)=>t!==`zIndex`&&!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(io.test(e)||e===`0`)&&!e.startsWith(`url(`));function Gs(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function Ks(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=Ws(i,t),s=Ws(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:Gs(e)||(n===`spring`||Is(n))&&r}function qs(e){e.duration=0,e.type=`keyframes`}var Js=new Set([`opacity`,`clipPath`,`filter`,`transform`,`backgroundColor`]),Ys=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function Xs(e){for(let t=0;t<e.length;t++)if(typeof e[t]==`string`&&Ys.test(e[t]))return!0;return!1}var Zs=new Set([`color`,`backgroundColor`,`outlineColor`,`fill`,`stroke`,`borderColor`,`borderTopColor`,`borderRightColor`,`borderBottomColor`,`borderLeftColor`]),Qs=ji(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function $s(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o,keyframes:s}=e,c=t?.owner?.current;if(!(c instanceof HTMLElement)&&!(c instanceof SVGElement))return!1;let{onUpdate:l,transformTemplate:u}=t.owner.getProps();return Qs()&&n&&(Js.has(n)||Zs.has(n)&&Xs(s))&&(n!==`transform`||!u)&&!l&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var ec=40,tc=class extends Yo{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=ma.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u},f=l?.KeyframeResolver||Ts;this.keyframeResolver=new f(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=ma.now();let u=!0;Ks(e,i,a,o)||(u=!1,(Di.instantAnimations||!s)&&l?.(Ko(e,n,t)),e[0]=e[e.length-1],qs(n),n.repeat=0);let d={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>ec?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},f=u&&!c&&$s(d),p=d.motionValue?.owner?.current,m;if(f)try{m=new Us({...d,element:p})}catch{m=new Zo(d)}else m=new Zo(d);m.finished.then(()=>{this.notifyFinished()}).catch(Mi),this.pendingTimeline&&=(this.stopTimeline=m.attachTimeline(this.pendingTimeline),void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),ws()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function nc(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var rc=30,ic=e=>!isNaN(parseFloat(e)),ac={current:void 0},oc=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=ma.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=ma.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=ic(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new Fi);let n=this.events[e].add(t);return e===`change`?()=>{n(),N.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return ac.current&&ac.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=ma.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>rc)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,rc);return Ri(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function B(e,t){return new oc(e,t)}function sc(e,t){if(e?.inherit&&t){let{inherit:n,...r}=e;return{...t,...r}}return e}function cc(e,t){let n=e?.[t]??e?.default??e;return n===e?n:sc(n,e)}var lc={type:`spring`,stiffness:500,damping:25,restSpeed:10},uc=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),dc={type:`keyframes`,duration:.8},fc={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},pc=(e,{keyframes:t})=>t.length>2?dc:fs.has(e)?e.startsWith(`scale`)?uc(t[1]):lc:fc,mc=new Set([`when`,`delay`,`delayChildren`,`staggerChildren`,`staggerDirection`,`repeat`,`repeatType`,`repeatDelay`,`from`,`elapsed`]);function hc(e){for(let t in e)if(!mc.has(t))return!0;return!1}var gc=(e,t,n,r={},i,a)=>o=>{let s=cc(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=Ii(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};hc(s)||Object.assign(u,pc(e,u)),u.duration&&=Ii(u.duration),u.repeatDelay&&=Ii(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(qs(u),u.delay===0&&(d=!0)),(Di.instantAnimations||Di.skipAnimations||i?.shouldSkipAnimations||s.skipAnimations)&&(d=!0,qs(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=Ko(u.keyframes,s);if(e!==void 0){N.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new Zo(u):new tc(u)},_c=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function vc(e){let t=_c.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function yc(e,t,n=1){`${e}`;let[r,i]=vc(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return Oi(e)?parseFloat(e):e}return va(i)?yc(i,t,n+1):i}function bc(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function xc(e,t,n,r){if(typeof t==`function`){let[i,a]=bc(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=bc(r);t=t(n===void 0?e.custom:n,i,a)}return t}function Sc(e,t,n){let r=e.getProps();return xc(r,t,n===void 0?r.custom:n,e)}var Cc=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...ds]),wc=e=>Array.isArray(e);function Tc(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,B(n))}function Ec(e){return wc(e)?e[e.length-1]||0:e}function Dc(e,t){let{transitionEnd:n={},transition:r={},...i}=Sc(e,t)||{};i={...i,...n};for(let t in i)Tc(e,t,Ec(i[t]))}var Oc=e=>!!(e&&e.getVelocity);function kc(e){return!!(Oc(e)&&e.add)}function Ac(e,t){let n=e.getValue(`willChange`);if(kc(n))return n.add(t);if(!n&&Di.WillChange){let n=new Di.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function jc(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var Mc=`data-`+jc(`framerAppearId`);function Nc(e){return e.props[Mc]}function Pc({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Fc(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:o,...s}=t,c=e.getDefaultTransition();a=a?sc(a,c):c;let l=a?.reduceMotion,u=a?.skipAnimations;r&&(a=r);let d=[],f=i&&e.animationState&&e.animationState.getState()[i],p=a?.path;p&&p.animateVisualElement(e,s,a,n,d);for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||f&&Pc(f,t))continue;let o={delay:n,...cc(a||{},t)};u&&(o.skipAnimations=!0);let c=r.get();if(c!==void 0&&!r.isAnimating()&&!Array.isArray(i)&&i===c&&!o.velocity){N.update(()=>r.set(i));continue}let p=!1;if(window.MotionHandoffAnimation){let n=Nc(e);if(n){let e=window.MotionHandoffAnimation(n,t,N);e!==null&&(o.startTime=e,p=!0)}}Ac(e,t);let m=l??e.shouldReduceMotion;r.start(gc(t,r,i,m&&Cc.has(t)?{type:!1}:o,e,p));let h=r.animation;h&&d.push(h)}if(o){let t=()=>N.update(()=>{o&&Dc(e,o)});d.length?Promise.all(d).then(t):t()}return d}function Ic(e,t,n={}){let r=Sc(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(Fc(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return Lc(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}return Promise.all([a(),o(n.delay)])}function Lc(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(Ic(c,t,{...o,delay:n+(typeof r==`function`?0:r)+nc(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function Rc(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>Ic(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=Ic(e,t,n);else{let i=typeof t==`function`?Sc(e,t,n.custom):t;r=Promise.all(Fc(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var zc={test:e=>e===`auto`,parse:e=>e},Bc=e=>t=>t.test(e),V=[xa,P,La,Ia,za,Ra,zc],Vc=e=>V.find(Bc(e));function Hc(e){return typeof e==`number`?e===0:e===null||e===`none`||e===`0`||Ai(e)}var Uc=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function Wc(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(Ta)||[];if(!r)return e;let i=n.replace(r,``),a=+!!Uc.has(t);return r!==n&&(a*=100),t+`(`+a+i+`)`}var Gc=/\b([a-z-]*)\(.*?\)/gu,Kc={...io,getAnimatableNone:e=>{let t=e.match(Gc);return t?t.map(Wc).join(` `):e}},qc={...io,getAnimatableNone:e=>{let t=io.parse(e);return io.createTransformer(e)(t.map(e=>typeof e==`number`?0:typeof e==`object`?{...e,alpha:1}:e))}},Jc={...xa,transform:Math.round},Yc={borderWidth:P,borderTopWidth:P,borderRightWidth:P,borderBottomWidth:P,borderLeftWidth:P,borderRadius:P,borderTopLeftRadius:P,borderTopRightRadius:P,borderBottomRightRadius:P,borderBottomLeftRadius:P,width:P,maxWidth:P,height:P,maxHeight:P,top:P,right:P,bottom:P,left:P,inset:P,insetBlock:P,insetBlockStart:P,insetBlockEnd:P,insetInline:P,insetInlineStart:P,insetInlineEnd:P,padding:P,paddingTop:P,paddingRight:P,paddingBottom:P,paddingLeft:P,paddingBlock:P,paddingBlockStart:P,paddingBlockEnd:P,paddingInline:P,paddingInlineStart:P,paddingInlineEnd:P,margin:P,marginTop:P,marginRight:P,marginBottom:P,marginLeft:P,marginBlock:P,marginBlockStart:P,marginBlockEnd:P,marginInline:P,marginInlineStart:P,marginInlineEnd:P,fontSize:P,backgroundPositionX:P,backgroundPositionY:P,rotate:Ia,pathRotation:Ia,rotateX:Ia,rotateY:Ia,rotateZ:Ia,scale:Ca,scaleX:Ca,scaleY:Ca,scaleZ:Ca,skew:Ia,skewX:Ia,skewY:Ia,distance:P,translateX:P,translateY:P,translateZ:P,x:P,y:P,z:P,perspective:P,transformPerspective:P,opacity:Sa,originX:Ba,originY:Ba,originZ:P,zIndex:Jc,fillOpacity:Sa,strokeOpacity:Sa,numOctaves:Jc},Xc={...Yc,color:Ha,backgroundColor:Ha,outlineColor:Ha,fill:Ha,stroke:Ha,borderColor:Ha,borderTopColor:Ha,borderRightColor:Ha,borderBottomColor:Ha,borderLeftColor:Ha,filter:Kc,WebkitFilter:Kc,mask:qc,WebkitMask:qc},Zc=e=>Xc[e],Qc=new Set([Kc,qc]);function $c(e,t){let n=Zc(e);return Qc.has(n)||(n=io),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var el=new Set([`auto`,`none`,`0`]);function tl(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!el.has(t)&&Za(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=$c(n,i)}var nl=class extends Ts{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),va(r))){let i=yc(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!Cc.has(n)||e.length!==2)return;let[r,i]=e,a=Vc(r),o=Vc(i);if(ba(r)!==ba(i)&&_s[n]){this.needsMeasurement=!0;return}if(a!==o)if(ps(a)&&ps(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else _s[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||Hc(e[t]))&&n.push(t);n.length&&tl(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=_s[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=_s[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}},rl=[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomRightRadius`,`borderBottomLeftRadius`];function il(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var al=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function ol(e){return ki(e)&&`offsetHeight`in e&&!(`ownerSVGElement`in e)}var{schedule:sl,cancel:cl}=ca(queueMicrotask,!1),ll={x:!1,y:!1};function ul(){return ll.x||ll.y}function H(e){return e===`x`||e===`y`?ll[e]?null:(ll[e]=!0,()=>{ll[e]=!1}):ll.x||ll.y?null:(ll.x=ll.y=!0,()=>{ll.x=ll.y=!1})}function dl(e,t){let n=il(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function fl(e){return!(e.pointerType===`touch`||ul())}function pl(e,t,n={}){let[r,i,a]=dl(e,n);return r.forEach(e=>{let n=!1,r=!1,a,o=()=>{e.removeEventListener(`pointerleave`,u)},s=e=>{a&&=(a(e),void 0),o()},c=e=>{n=!1,window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),r&&(r=!1,s(e))},l=()=>{n=!0,window.addEventListener(`pointerup`,c,i),window.addEventListener(`pointercancel`,c,i)},u=e=>{if(e.pointerType!==`touch`){if(n){r=!0;return}s(e)}};e.addEventListener(`pointerenter`,n=>{if(!fl(n))return;r=!1;let o=t(e,n);typeof o==`function`&&(a=o,e.addEventListener(`pointerleave`,u,i))},i),e.addEventListener(`pointerdown`,l,i)}),a}var ml=(e,t)=>t?e===t||ml(e,t.parentElement):!1,hl=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,gl=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function _l(e){return gl.has(e.tagName)||e.isContentEditable===!0}var vl=new Set([`INPUT`,`SELECT`,`TEXTAREA`]);function yl(e){return vl.has(e.tagName)||e.isContentEditable===!0}var bl=new WeakSet;function xl(e){return t=>{t.key===`Enter`&&e(t)}}function Sl(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var Cl=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=xl(()=>{if(bl.has(n))return;Sl(n,`down`);let e=xl(()=>{Sl(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>Sl(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function wl(e){return hl(e)&&!ul()}var Tl=new WeakSet;function El(e,t,n={}){let[r,i,a]=dl(e,n),o=e=>{let r=e.currentTarget;if(!wl(e)||Tl.has(e))return;bl.add(r),n.stopPropagation&&Tl.add(e);let a=t(r,e),o={...i,capture:!0},s=(e,t)=>{window.removeEventListener(`pointerup`,c,o),window.removeEventListener(`pointercancel`,l,o),bl.has(r)&&bl.delete(r),wl(e)&&typeof a==`function`&&a(e,{success:t})},c=e=>{s(e,r===window||r===document||n.useGlobalTarget||ml(r,e.target))},l=e=>{s(e,!1)};window.addEventListener(`pointerup`,c,o),window.addEventListener(`pointercancel`,l,o)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),ol(e)&&(e.addEventListener(`focus`,e=>Cl(e,i)),!_l(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function Dl(e){return ki(e)&&`ownerSVGElement`in e}var Ol=new WeakMap,kl,Al=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+`Size`]:Dl(r)&&`getBBox`in r?r.getBBox()[t]:r[n],jl=Al(`inline`,`width`,`offsetWidth`),Ml=Al(`block`,`height`,`offsetHeight`);function Nl({target:e,borderBoxSize:t}){Ol.get(e)?.forEach(n=>{n(e,{get width(){return jl(e,t)},get height(){return Ml(e,t)}})})}function Pl(e){e.forEach(Nl)}function Fl(){typeof ResizeObserver>`u`||(kl=new ResizeObserver(Pl))}function Il(e,t){kl||Fl();let n=il(e);return n.forEach(e=>{let n=Ol.get(e);n||(n=new Set,Ol.set(e,n)),n.add(t),kl?.observe(e)}),()=>{n.forEach(e=>{let n=Ol.get(e);n?.delete(t),n?.size||kl?.unobserve(e)})}}var Ll=new Set,Rl;function zl(){Rl=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};Ll.forEach(t=>t(e))},window.addEventListener(`resize`,Rl)}function Bl(e){return Ll.add(e),Rl||zl(),()=>{Ll.delete(e),!Ll.size&&typeof Rl==`function`&&(window.removeEventListener(`resize`,Rl),Rl=void 0)}}function Vl(e,t){return typeof e==`function`?Bl(e):Il(e,t)}var U={value:null,addProjectionMetrics:null};function W(e){return Dl(e)&&e.tagName===`svg`}var G=[...V,Ha,io],K=e=>G.find(Bc(e)),q=()=>({translate:0,scale:1,origin:0,originPoint:0}),Hl=()=>({x:q(),y:q()}),Ul=()=>({min:0,max:0}),Wl=()=>({x:Ul(),y:Ul()}),Gl=new WeakMap;function Kl(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function J(e){return typeof e==`string`||Array.isArray(e)}var ql=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],Jl=[`initial`,...ql];function Yl(e){return Kl(e.animate)||Jl.some(t=>J(e[t]))}function Xl(e){return!!(Yl(e)||e.variants)}function Zl(e,t,n){for(let r in t){let i=t[r],a=n[r];if(Oc(i))e.addValue(r,i);else if(Oc(a))e.addValue(r,B(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,B(t===void 0?i:t,{owner:e}))}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var Ql={current:null},$l={current:!1},eu=typeof window<`u`;function tu(){if($l.current=!0,eu)if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>Ql.current=e.matches;e.addEventListener(`change`,t),t()}else Ql.current=!1}var nu=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],ru={};function iu(e){ru=e}function au(){return ru}var ou=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Ts,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=ma.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,N.render(this.render,!1,!0))};let{latestValues:c,renderState:l}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=Yl(t),this.isVariantNode=Xl(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:u,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];c[e]!==void 0&&Oc(t)&&t.set(c[e])}}mount(e){if(this.hasBeenMounted)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];this.current=e,Gl.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:($l.current||tu(),this.shouldReduceMotion=Ql.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),la(this.notifyUpdate),la(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&Js.has(e)&&this.current instanceof HTMLElement){let{factory:n,keyframes:r,times:i,ease:a,duration:o}=t.accelerate,s=new Rs({element:this.current,name:e,keyframes:r,times:i,ease:a,duration:Ii(o)}),c=n(s);this.valueSubscriptions.set(e,()=>{c(),s.cancel()});return}let n=fs.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&N.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in ru){let t=ru[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Wl()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<nu.length;t++){let n=nu[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=Zl(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=B(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(Oi(n)||Ai(n))?n=parseFloat(n):!K(n)&&io.test(t)&&(n=$c(e,t)),this.setBaseTarget(e,Oc(n)?n.get():n)),Oc(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=xc(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!Oc(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Fi),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){sl.render(this.render)}},su=class extends ou{constructor(){super(...arguments),this.KeyframeResolver=nl}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;Oc(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},cu=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function lu({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function uu({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function du(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function fu(e){return e===void 0||e===1}function pu({scale:e,scaleX:t,scaleY:n}){return!fu(e)||!fu(t)||!fu(n)}function mu(e){return pu(e)||hu(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function hu(e){return gu(e.x)||gu(e.y)}function gu(e){return e&&e!==`0%`}function _u(e,t,n){return n+t*(e-n)}function vu(e,t,n,r,i){return i!==void 0&&(e=_u(e,i,r)),_u(e,n,r)+t}function yu(e,t=0,n=1,r,i){e.min=vu(e.min,t,n,r,i),e.max=vu(e.max,t,n,r,i)}function bu(e,{x:t,y:n}){yu(e.x,t.translate,t.scale,t.originPoint),yu(e.y,n.translate,n.scale,n.originPoint)}var xu=.999999999999,Su=1.0000000000001;function Cu(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(wu(e.x,-a.scroll.offset.x),wu(e.y,-a.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,bu(e,o)),r&&mu(a.latestValues)&&Du(e,a.latestValues,a.layout?.layoutBox))}t.x<Su&&t.x>xu&&(t.x=1),t.y<Su&&t.y>xu&&(t.y=1)}function wu(e,t){e.min+=t,e.max+=t}function Tu(e,t,n,r,i=.5){yu(e,t,n,F(e.min,e.max,i),r)}function Eu(e,t){return typeof e==`string`?parseFloat(e)/100*(t.max-t.min):e}function Du(e,t,n){let r=n??e;Tu(e.x,Eu(t.x,r.x),t.scaleX,t.scale,t.originX),Tu(e.y,Eu(t.y,r.y),t.scaleY,t.scale,t.originY)}function Ou(e,t){return lu(du(e.getBoundingClientRect(),t))}function ku(e,t,n){let r=Ou(e,n),{scroll:i}=t;return i&&(wu(r.x,i.offset.x),wu(r.y,i.offset.y)),r}var Au={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},ju=ds.length;function Mu(e,t,n){let r=``,i=!0;for(let a=0;a<ju;a++){let o=ds[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===+!!o.startsWith(`scale`);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=al(s,Yc[o]);if(!c){i=!1;let t=Au[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}let a=e.pathRotation;return a&&(i=!1,r+=`rotate(${al(a,Yc.pathRotation)}) `),r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function Nu(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(fs.has(e)){o=!0;continue}if(ga(e)){i[e]=n;continue}{let t=al(n,Yc[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=Mu(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function Pu(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function Fu(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var Iu={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`)if(P.test(e))e=parseFloat(e);else return e;return`${Fu(e,t.target.x)}% ${Fu(e,t.target.y)}%`}},Lu={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=io.parse(e);if(i.length>5)return r;let a=io.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=F(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},Ru={borderRadius:{...Iu,applyTo:[...rl]},borderTopLeftRadius:Iu,borderTopRightRadius:Iu,borderBottomLeftRadius:Iu,borderBottomRightRadius:Iu,boxShadow:Lu};function zu(e,{layout:t,layoutId:n}){return fs.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!Ru[e]||e===`opacity`)}function Bu(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(Oc(r[t])||i&&Oc(i[t])||zu(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function Vu(e){return window.getComputedStyle(e)}var Hu=class extends su{constructor(){super(...arguments),this.type=`html`,this.renderInstance=Pu}mount(e){e.style,super.mount(e)}readValueFromInstance(e,t){if(fs.has(t))return this.projection?.isProjecting?ss(t):ls(e,t);{let n=Vu(e),r=(ga(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Ou(e,t)}build(e,t,n){Nu(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return Bu(e,t,n)}},Uu={offset:`stroke-dashoffset`,array:`stroke-dasharray`},Wu={offset:`strokeDashoffset`,array:`strokeDasharray`};function Gu(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?Uu:Wu;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var Ku=[`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function Y(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(Nu(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox);for(let e of Ku)d[e]!==void 0&&(f[e]=d[e],delete d[e]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&Gu(d,i,a,o,!1)}var qu=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),Ju=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function Yu(e,t,n,r){Pu(e,t,void 0,r);for(let n in t.attrs)e.setAttribute(qu.has(n)?n:jc(n),t.attrs[n])}function Xu(e,t,n){let r=Bu(e,t,n);for(let n in e)if(Oc(e[n])||Oc(t[n])){let t=ds.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var Zu=class extends su{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=Wl}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(fs.has(t)){let e=Zc(t);return e&&e.default||0}return t=qu.has(t)?t:jc(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return Xu(e,t,n)}build(e,t,n){Y(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){Yu(e,t,n,r)}mount(e){this.isSVGTag=Ju(e.tagName),super.mount(e)}},Qu=Jl.length;function $u(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&$u(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<Qu;n++){let r=Jl[n],i=e.props[r];(J(i)||i===!1)&&(t[r]=i)}return t}function ed(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var td=[...ql].reverse(),nd=ql.length;function rd(e){return t=>Promise.all(t.map(({animation:t,options:n})=>Rc(e,t,n)))}function id(e){let t=rd(e),n=sd(),r=!0,i=!1,a=t=>(n,r)=>{let i=Sc(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function o(n){t=n(e)}function s(o){let{props:s}=e,c=$u(e.parent)||{},l=[],u=new Set,d={},f=1/0;for(let t=0;t<nd;t++){let p=td[t],m=n[p],h=s[p]===void 0?c[p]:s[p],g=J(h),_=p===o?m.isActive:null;_===!1&&(f=t);let v=h===c[p]&&h!==s[p]&&g;if(v&&(r||i)&&e.manuallyAnimateOnMount&&(v=!1),m.protectedKeys={...d},!m.isActive&&_===null||!h&&!m.prevProp||Kl(h)||typeof h==`boolean`)continue;if(p===`exit`&&m.isActive&&_!==!0){m.prevResolvedValues&&(d={...d,...m.prevResolvedValues});continue}let y=ad(m.prevProp,h),b=y||p===o&&m.isActive&&!v&&g||t>f&&g,x=!1,S=Array.isArray(h)?h:[h],C=S.reduce(a(p),{});_===!1&&(C={});let{prevResolvedValues:w={}}=m,ee={...w,...C},te=t=>{b=!0,u.has(t)&&(x=!0,u.delete(t)),m.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in ee){let t=C[e],n=w[e];if(d.hasOwnProperty(e))continue;let r=!1;r=wc(t)&&wc(n)?!ed(t,n)||y:t!==n,r?t==null?u.add(e):te(e):t!==void 0&&u.has(e)?te(e):m.protectedKeys[e]=!0}m.prevProp=h,m.prevResolvedValues=C,m.isActive&&(d={...d,...C}),(r||i)&&e.blockInitialAnimation&&(b=!1);let ne=v&&y;b&&(!ne||x)&&l.push(...S.map(t=>{let n={type:p};if(typeof t==`string`&&(r||i)&&!ne&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=Sc(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=nc(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(u.size){let t={};if(typeof s.initial!=`boolean`){let n=Sc(e,Array.isArray(s.initial)?s.initial[0]:s.initial);n&&n.transition&&(t.transition=n.transition)}u.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),l.push({animation:t})}let p=!!l.length;return r&&(s.initial===!1||s.initial===s.animate)&&!e.manuallyAnimateOnMount&&(p=!1),r=!1,i=!1,p?t(l):Promise.resolve()}function c(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=s(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:s,setActive:c,setAnimateFunction:o,getState:()=>n,reset:()=>{n=sd(),i=!0}}}function ad(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!ed(t,e):!1}function od(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function sd(){return{animate:od(!0),whileInView:od(),whileHover:od(),whileTap:od(),whileDrag:od(),whileFocus:od(),exit:od()}}function cd(e,t){e.min=t.min,e.max=t.max}function ld(e,t){cd(e.x,t.x),cd(e.y,t.y)}function ud(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var dd=.9999,fd=1.0001,pd=-.01,md=.01;function hd(e){return e.max-e.min}function gd(e,t,n){return Math.abs(e-t)<=n}function _d(e,t,n,r=.5){e.origin=r,e.originPoint=F(t.min,t.max,e.origin),e.scale=hd(n)/hd(t),e.translate=F(n.min,n.max,e.origin)-e.originPoint,(e.scale>=dd&&e.scale<=fd||isNaN(e.scale))&&(e.scale=1),(e.translate>=pd&&e.translate<=md||isNaN(e.translate))&&(e.translate=0)}function vd(e,t,n,r){_d(e.x,t.x,n.x,r?r.originX:void 0),_d(e.y,t.y,n.y,r?r.originY:void 0)}function yd(e,t,n,r=0){e.min=(r?F(n.min,n.max,r):n.min)+t.min,e.max=e.min+hd(t)}function bd(e,t,n,r){yd(e.x,t.x,n.x,r?.x),yd(e.y,t.y,n.y,r?.y)}function xd(e,t,n,r=0){let i=r?F(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+hd(t)}function X(e,t,n,r){xd(e.x,t.x,n.x,r?.x),xd(e.y,t.y,n.y,r?.y)}function Sd(e,t,n,r,i){return e-=t,e=_u(e,1/n,r),i!==void 0&&(e=_u(e,1/i,r)),e}function Cd(e,t=0,n=1,r=.5,i,a=e,o=e){if(La.test(t)&&(t=parseFloat(t),t=F(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=F(a.min,a.max,r);e===a&&(s-=t),e.min=Sd(e.min,t,n,s,i),e.max=Sd(e.max,t,n,s,i)}function wd(e,t,[n,r,i],a,o){Cd(e,t[n],t[r],t[i],t.scale,a,o)}var Td=[`x`,`scaleX`,`originX`],Ed=[`y`,`scaleY`,`originY`];function Dd(e,t,n,r){wd(e.x,t,Td,n?n.x:void 0,r?r.x:void 0),wd(e.y,t,Ed,n?n.y:void 0,r?r.y:void 0)}function Od(e){return e.translate===0&&e.scale===1}function kd(e){return Od(e.x)&&Od(e.y)}function Ad(e,t){return e.min===t.min&&e.max===t.max}function jd(e,t){return Ad(e.x,t.x)&&Ad(e.y,t.y)}function Md(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Nd(e,t){return Md(e.x,t.x)&&Md(e.y,t.y)}function Pd(e){return hd(e.x)/hd(e.y)}function Z(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function Fd(e){return[e(`x`),e(`y`)]}function Id(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,pathRotation:i,rotateX:a,rotateY:o,skewX:s,skewY:c}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotate(${i}deg) `),a&&(r+=`rotateX(${a}deg) `),o&&(r+=`rotateY(${o}deg) `),s&&(r+=`skewX(${s}deg) `),c&&(r+=`skewY(${c}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var Ld=rl.length,Rd=e=>typeof e==`string`?parseFloat(e):e,zd=e=>typeof e==`number`||P.test(e);function Bd(e,t,n,r,i,a){i?(e.opacity=F(0,n.opacity??1,Hd(r)),e.opacityExit=F(t.opacity??1,0,Ud(r))):a&&(e.opacity=F(t.opacity??1,n.opacity??1,r));for(let i=0;i<Ld;i++){let a=rl[i],o=Vd(t,a),s=Vd(n,a);(o!==void 0||s!==void 0)&&(o||=0,s||=0,o===0||s===0||zd(o)===zd(s)?(e[a]=Math.max(F(Rd(o),Rd(s),r),0),(La.test(s)||La.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=F(t.rotate||0,n.rotate||0,r))}function Vd(e,t){return e[t]===void 0?e.borderRadius:e[t]}var Hd=Wd(0,.5,Yi),Ud=Wd(.5,.95,Mi);function Wd(e,t,n){return r=>r<e?0:r>t?1:n(Pi(e,t,r))}function Gd(e,t,n){let r=Oc(e)?e:B(e);return r.start(gc(``,r,t,n)),r.animation}function Kd(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}var qd=(e,t)=>e.depth-t.depth,Jd=class{constructor(){this.children=[],this.isDirty=!1}add(e){wi(this.children,e),this.isDirty=!0}remove(e){Ti(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(qd),this.isDirty=!1,this.children.forEach(e)}};function Yd(e,t){let n=ma.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(la(r),e(a-t))};return N.setup(r,!0),()=>la(r)}function Xd(e){return Oc(e)?e.get():e}var Zd=class{constructor(){this.members=[]}add(e){wi(this.members,e);for(let t=this.members.length-1;t>=0;t--){let n=this.members[t];if(n===e||n===this.lead||n===this.prevLead)continue;let r=n.instance;(!r||r.isConnected===!1)&&!n.snapshot&&(Ti(this.members,n),n.unmount())}e.scheduleRender()}remove(e){if(Ti(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){let e=this.members[t];if(e.isPresent!==!1&&e.instance?.isConnected!==!1)return this.promote(e),!0}return!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.updateSnapshot(),e.scheduleRender();let{layoutDependency:r}=n.options,{layoutDependency:i}=e.options;(r===void 0||r!==i)&&(e.resumeFrom=n,t&&(n.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}},Qd={hasAnimatedSinceResize:!0,hasEverUpdated:!1},$d={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},ef=[``,`X`,`Y`,`Z`],tf=1e3,nf=0;function rf(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function af(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=Nc(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,N,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&af(r)}function of({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=nf++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,U.value&&($d.nodes=$d.calculatedTargetDeltas=$d.calculatedProjections=0),this.nodes.forEach(lf),this.nodes.forEach(vf),this.nodes.forEach(yf),this.nodes.forEach(uf),U.addProjectionMetrics&&U.addProjectionMetrics($d)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new Jd)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new Fi),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=Dl(t)&&!W(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;N.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=Yd(i,250),Qd.hasAnimatedSinceResize&&(Qd.hasAnimatedSinceResize=!1,this.nodes.forEach(_f)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||Ef,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!Nd(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...cc(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l,t.path)}else t||_f(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),la(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(bf),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&af(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,(typeof t.latestValues.x==`string`||typeof t.latestValues.y==`string`)&&(t.isLayoutDirty=!0),t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){let e=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),e&&this.nodes.forEach(pf),this.nodes.forEach(ff);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(mf);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(hf),this.nodes.forEach(gf),this.nodes.forEach(sf),this.nodes.forEach(cf)):this.nodes.forEach(mf),this.clearAllSnapshots();let e=ma.now();ua.delta=Ei(0,1e3/60,e-ua.timestamp),ua.timestamp=e,ua.isProcessing=!0,da.update.process(ua),da.preRender.process(ua),da.render.process(ua),ua.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,sl.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(df),this.sharedNodes.forEach(xf)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,N.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){N.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!hd(this.snapshot.measuredBox.x)&&!hd(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||=Wl(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!kd(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||mu(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),Af(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return Wl();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Mf))){let{scroll:e}=this.root;e&&(wu(t.x,e.offset.x),wu(t.y,e.offset.y))}return t}removeElementScroll(e){let t=Wl();if(ld(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&ld(t,e),wu(t.x,i.offset.x),wu(t.y,i.offset.y))}return t}applyTransform(e,t=!1,n){let r=n||Wl();ld(r,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];!t&&n.options.layoutScroll&&n.scroll&&n!==n.root&&(wu(r.x,-n.scroll.offset.x),wu(r.y,-n.scroll.offset.y)),mu(n.latestValues)&&Du(r,n.latestValues,n.layout?.layoutBox)}return mu(this.latestValues)&&Du(r,this.latestValues,this.layout?.layoutBox),r}removeTransform(e){let t=Wl();ld(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!mu(n.latestValues))continue;let r;n.instance&&(pu(n.latestValues)&&n.updateSnapshot(),r=Wl(),ld(r,n.measurePageBox())),Dd(t,n.latestValues,n.snapshot?.layoutBox,r)}return mu(this.latestValues)&&Dd(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ua.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=ua.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Wl(),this.targetWithTransforms=Wl()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),bd(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):ld(this.target,this.layout.layoutBox),bu(this.target,this.targetDelta)):ld(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),U.value&&$d.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||pu(this.parent.latestValues)||hu(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Wl(),this.relativeTargetOrigin=Wl(),X(this.relativeTargetOrigin,t,n,this.options.layoutAnchor||void 0),ld(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===ua.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;ld(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;Cu(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=Wl());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(ud(this.prevProjectionDelta.x,this.projectionDelta.x),ud(this.prevProjectionDelta.y,this.projectionDelta.y)),vd(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!Z(this.projectionDelta.x,this.prevProjectionDelta.x)||!Z(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),U.value&&$d.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Hl(),this.projectionDelta=Hl(),this.projectionDeltaWithTransform=Hl()}setAnimationOrigin(e,t=!1,n){let r=this.snapshot,i=r?r.latestValues:{},a={...this.latestValues},o=Hl();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let s=Wl(),c=(r?r.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),u=!l||l.members.length<=1,d=!!(c&&!u&&this.options.crossfade===!0&&!this.path.some(Tf));this.animationProgress=0;let f,p=n?.interpolateProjection(e);this.mixTargetDelta=t=>{let n=t/1e3,r=p?.(n);r?(o.x.translate=r.x,o.x.scale=F(e.x.scale,1,n),o.x.origin=e.x.origin,o.x.originPoint=e.x.originPoint,o.y.translate=r.y,o.y.scale=F(e.y.scale,1,n),o.y.origin=e.y.origin,o.y.originPoint=e.y.originPoint):(Sf(o.x,e.x,n),Sf(o.y,e.y,n)),this.setTargetDelta(o),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(X(s,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),wf(this.relativeTarget,this.relativeTargetOrigin,s,n),f&&jd(this.relativeTarget,f)&&(this.isProjectionDirty=!1),f||=Wl(),ld(f,this.relativeTarget)),c&&(this.animationValues=a,Bd(a,i,this.latestValues,n,d,u)),r&&r.rotate!==void 0&&(this.animationValues||=a,this.animationValues.pathRotation=r.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(la(this.pendingAnimation),void 0),this.pendingAnimation=N.update(()=>{Qd.hasAnimatedSinceResize=!0,this.motionValue||=B(0),this.motionValue.jump(0,!1),this.currentAnimation=Gd(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(tf),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(!(!t||!n||!r)){if(this!==e&&this.layout&&r&&jf(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||Wl();let t=hd(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=hd(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}ld(t,n),Du(t,i),vd(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new Zd),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return!e||e.lead===this}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&rf(`z`,e,r,this.animationValues);for(let t=0;t<ef.length;t++)rf(`rotate${ef[t]}`,e,r,this.animationValues),rf(`skew${ef[t]}`,e,r,this.animationValues);e.render();for(let t in r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=Xd(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=Xd(t?.pointerEvents)||``),this.hasProjected&&!mu(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=Id(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,e.opacity=r.animationValues?r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit;for(let t in Ru){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=Ru[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?Xd(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(ff),this.root.sharedNodes.clear()}}}function sf(e){e.updateLayout()}function cf(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;if(i===`size`)Fd(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=hd(r);r.min=n[e].min,r.max=r.min+i});else if(i===`x`||i===`y`){let e=i===`x`?`y`:`x`;cd(a?t.measuredBox[e]:t.layoutBox[e],n[e])}else jf(i,t.layoutBox,n)&&Fd(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=hd(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=Hl();vd(o,n,t.layoutBox);let s=Hl();a?vd(s,e.applyTransform(r,!0),t.measuredBox):vd(s,n,t.layoutBox);let c=!kd(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=e.options.layoutAnchor||void 0,s=Wl();X(s,t.layoutBox,i.layoutBox,o);let c=Wl();X(c,n,a.layoutBox,o),Nd(s,c)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=c,e.relativeTargetOrigin=s,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function lf(e){U.value&&$d.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function uf(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function df(e){e.clearSnapshot()}function ff(e){e.clearMeasurements()}function pf(e){e.isLayoutDirty=!0,e.updateLayout()}function mf(e){e.isLayoutDirty=!1}function hf(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function gf(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function _f(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function vf(e){e.resolveTargetDelta()}function yf(e){e.calcProjection()}function bf(e){e.resetSkewAndRotation()}function xf(e){e.removeLeadSnapshot()}function Sf(e,t,n){e.translate=F(t.translate,0,n),e.scale=F(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Cf(e,t,n,r){e.min=F(t.min,n.min,r),e.max=F(t.max,n.max,r)}function wf(e,t,n,r){Cf(e.x,t.x,n.x,r),Cf(e.y,t.y,n.y,r)}function Tf(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var Ef={duration:.45,ease:[.4,0,.1,1]},Df=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Of=Df(`applewebkit/`)&&!Df(`chrome/`)?Math.round:Mi;function kf(e){e.min=Of(e.min),e.max=Of(e.max)}function Af(e){kf(e.x),kf(e.y)}function jf(e,t,n){return e===`position`||e===`preserve-aspect`&&!gd(Pd(t),Pd(n),.2)}function Mf(e){return e!==e.root&&e.scroll?.wasRoot}var Nf=of({attachResizeListener:(e,t)=>Kd(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),Pf={current:void 0},Ff=of({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Pf.current){let e=new Nf({});e.mount(window),e.setOptions({layoutScroll:!0}),Pf.current=e}return Pf.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),If=(0,b.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function Lf(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function Rf(...e){return t=>{let n=!1,r=e.map(e=>{let r=Lf(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():Lf(e[t],null)}}}}function zf(...e){return b.useCallback(Rf(...e),e)}var Bf=class extends b.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(ol(t)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){let e=t.offsetParent,n=ol(e)&&e.offsetWidth||0,r=ol(e)&&e.offsetHeight||0,i=getComputedStyle(t),a=this.props.sizeRef.current;a.height=parseFloat(i.height),a.width=parseFloat(i.width),a.top=t.offsetTop,a.left=t.offsetLeft,a.right=n-a.width-a.left,a.bottom=r-a.height-a.top,a.direction=i.direction}return null}componentDidUpdate(){}render(){return this.props.children}};function Vf({children:e,isPresent:t,anchorX:n,anchorY:r,root:i,pop:a}){let o=(0,b.useId)(),s=(0,b.useRef)(null),c=(0,b.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:`ltr`}),{nonce:l}=(0,b.useContext)(If),u=zf(s,a===!1?void 0:e.props?.ref??e?.ref);return(0,b.useInsertionEffect)(()=>{let{width:e,height:u,top:d,left:f,right:p,bottom:m,direction:h}=c.current;if(t||a===!1||!s.current||!e||!u)return;let g=h===`rtl`,_=n===`left`?g?`right: ${p}`:`left: ${f}`:g?`left: ${f}`:`right: ${p}`,v=r===`bottom`?`bottom: ${m}`:`top: ${d}`;s.current.dataset.motionPopId=o;let y=document.createElement(`style`);l&&(y.nonce=l);let b=i??document.head;return b.appendChild(y),y.sheet&&y.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${u}px !important;
            ${_}px !important;
            ${v}px !important;
          }
        `),()=>{s.current?.removeAttribute(`data-motion-pop-id`),b.contains(y)&&b.removeChild(y)}},[t]),(0,A.jsx)(Bf,{isPresent:t,childRef:s,sizeRef:c,pop:a,children:a===!1?e:b.cloneElement(e,{ref:u})})}var Hf=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:s,anchorY:c,root:l})=>{let u=xi(Uf),d=(0,b.useId)(),f=(0,b.useRef)(n),p=(0,b.useRef)(r);Si(()=>{f.current=n,p.current=r});let m=!0,h=(0,b.useMemo)(()=>(m=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{u.set(e,!0);for(let e of u.values())if(!e)return;r&&r()},register:e=>(u.set(e,!1),()=>{u.delete(e),!f.current&&!u.size&&p.current?.()})}),[n,u,r]);return a&&m&&(h={...h}),(0,b.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[n]),b.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),e=(0,A.jsx)(Vf,{pop:o===`popLayout`,isPresent:n,anchorX:s,anchorY:c,root:l,children:e}),(0,A.jsx)(Ci.Provider,{value:h,children:e})};function Uf(){return new Map}function Wf(e=!0){let t=(0,b.useContext)(Ci);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,b.useId)();(0,b.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,b.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var Gf=e=>e.key||``;function Kf(e){let t=[];return b.Children.forEach(e,e=>{(0,b.isValidElement)(e)&&t.push(e)}),t}var qf=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a=`sync`,propagate:o=!1,anchorX:s=`left`,anchorY:c=`top`,root:l})=>{let[u,d]=Wf(o),f=(0,b.useMemo)(()=>Kf(e),[e]),p=o&&!u?[]:f.map(Gf),m=(0,b.useRef)(!0),h=(0,b.useRef)(f),g=xi(()=>new Map),_=(0,b.useRef)(new Set),[v,y]=(0,b.useState)(f),[x,S]=(0,b.useState)(f);Si(()=>{m.current=!1,h.current=f;for(let e=0;e<x.length;e++){let t=Gf(x[e]);p.includes(t)?(g.delete(t),_.current.delete(t)):g.get(t)!==!0&&g.set(t,!1)}},[x,p.length,p.join(`-`)]);let C=[];if(f!==v){let e=[...f];for(let t=0;t<x.length;t++){let n=x[t],r=Gf(n);p.includes(r)||(e.splice(t,0,n),C.push(n))}return a===`wait`&&C.length&&(e=C),S(Kf(e)),y(f),null}let{forceRender:w}=(0,b.useContext)(bi);return(0,A.jsx)(A.Fragment,{children:x.map(e=>{let v=Gf(e),y=o&&!u?!1:f===x||p.includes(v);return(0,A.jsx)(Hf,{isPresent:y,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,root:l,onExitComplete:y?void 0:()=>{if(_.current.has(v))return;if(g.has(v))_.current.add(v),g.set(v,!0);else return;let e=!0;g.forEach(t=>{t||(e=!1)}),e&&(w?.(),S(h.current),o&&d?.(),r&&r())},anchorX:s,anchorY:c,children:e},v)})})},Jf=(0,b.createContext)({strict:!1}),Yf={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},Xf=!1;function Zf(){if(Xf)return;let e={};for(let t in Yf)e[t]={isEnabled:e=>Yf[t].some(t=>!!e[t])};iu(e),Xf=!0}function Qf(){return Zf(),au()}function $f(e){let t=Qf();for(let n in e)t[n]={...t[n],...e[n]};iu(t)}var ep=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`));function tp(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||ep.has(e)}var np=c({default:()=>rp}),rp,ip=o((()=>{throw rp={},Error(`Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?`)})),ap=e=>!tp(e);function op(e){typeof e==`function`&&(ap=t=>t.startsWith(`on`)?!tp(t):e(t))}try{op((ip(),d(np)).default)}catch{}function sp(e,t,n){let r={};for(let i in e)(i!==`values`||typeof e.values!=`object`)&&(Oc(e[i])||(ap(i)||n===!0&&tp(i)||!t&&!tp(i)||e.draggable&&i.startsWith(`onDrag`))&&(r[i]=e[i]));return r}var cp=(0,b.createContext)({});function lp(e,t){if(Yl(e)){let{initial:t,animate:n}=e;return{initial:t===!1||J(t)?t:void 0,animate:J(n)?n:void 0}}return e.inherit===!1?{}:t}function up(e){let{initial:t,animate:n}=lp(e,(0,b.useContext)(cp));return(0,b.useMemo)(()=>({initial:t,animate:n}),[dp(t),dp(n)])}function dp(e){return Array.isArray(e)?e.join(` `):e}var fp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function pp(e,t,n){for(let r in t)!Oc(t[r])&&!zu(r,n)&&(e[r]=t[r])}function mp({transformTemplate:e},t){return(0,b.useMemo)(()=>{let n=fp();return Nu(n,t,e),Object.assign({},n.vars,n.style)},[t])}function hp(e,t){let n=e.style||{},r={};return pp(r,n,e),Object.assign(r,mp(e,t)),r}function gp(e,t){let n={},r=hp(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var _p=()=>({...fp(),attrs:{}});function vp(e,t,n,r){let i=(0,b.useMemo)(()=>{let n=_p();return Y(n,t,Ju(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};pp(t,e.style,e),i.style={...t,...i.style}}return i}var yp=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function bp(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(yp.indexOf(e)>-1||/[A-Z]/u.test(e))}function xp(e,t,n,{latestValues:r},i,a=!1,o){let s=(o??bp(e)?vp:gp)(t,r,i,e),c=sp(t,typeof e==`string`,a),l=e===b.Fragment?{}:{...c,...s,ref:n},{children:u}=t,d=(0,b.useMemo)(()=>Oc(u)?u.get():u,[u]);return(0,b.createElement)(e,{...l,children:d})}function Sp({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:Cp(n,r,i,e),renderState:t()}}function Cp(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=Xd(a[e]);let{initial:o,animate:s}=e,c=Yl(e),l=Xl(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!Kl(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=xc(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var wp=e=>(t,n)=>{let r=(0,b.useContext)(cp),i=(0,b.useContext)(Ci),a=()=>Sp(e,t,r,i);return n?a():xi(a)},Tp=wp({scrapeMotionValuesFromProps:Bu,createRenderState:fp}),Ep=wp({scrapeMotionValuesFromProps:Xu,createRenderState:_p}),Dp=Symbol.for(`motionComponentSymbol`);function Op(e,t,n){let r=(0,b.useRef)(n);(0,b.useInsertionEffect)(()=>{r.current=n});let i=(0,b.useRef)(null);return(0,b.useCallback)(n=>{n&&e.onMount?.(n),t&&(n?t.mount(n):t.unmount());let a=r.current;if(typeof a==`function`)if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n);else a&&(a.current=n)},[t])}var kp=(0,b.createContext)({});function Ap(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function jp(e,t,n,r,i,a){let{visualElement:o}=(0,b.useContext)(cp),s=(0,b.useContext)(Jf),c=(0,b.useContext)(Ci),l=(0,b.useContext)(If),u=l.reducedMotion,d=l.skipAnimations,f=(0,b.useRef)(null),p=(0,b.useRef)(!1);r||=s.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:a}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));let m=f.current,h=(0,b.useContext)(kp);m&&!m.projection&&i&&(m.type===`html`||m.type===`svg`)&&Mp(f.current,n,i,h);let g=(0,b.useRef)(!1);(0,b.useInsertionEffect)(()=>{m&&g.current&&m.update(n,c)});let _=n[Mc],v=(0,b.useRef)(!!_&&typeof window<`u`&&!window.MotionHandoffIsComplete?.(_)&&window.MotionHasOptimisedAnimation?.(_));return Si(()=>{p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),v.current&&m.animationState&&m.animationState.animateChanges())}),(0,b.useEffect)(()=>{m&&(!v.current&&m.animationState&&m.animationState.animateChanges(),v.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(_)}),!1),m.enteringChildren=void 0)}),m}function Mp(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutAnchor:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:Np(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&Ap(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:d,layoutScroll:c,layoutRoot:l,layoutAnchor:u})}function Np(e){if(e)return e.options.allowProjection===!1?Np(e.parent):e.projection}function Pp(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&$f(r);let a=n?n===`svg`:bp(e),o=a?Ep:Tp;function s(n,s){let c,l={...(0,b.useContext)(If),...n,layoutId:Fp(n)},{isStatic:u}=l,d=up(n),f=o(n,u);if(!u&&typeof window<`u`){Ip(l,r);let t=Lp(l);c=t.MeasureLayout,d.visualElement=jp(e,f,l,i,t.ProjectionNode,a)}return(0,A.jsxs)(cp.Provider,{value:d,children:[c&&d.visualElement?(0,A.jsx)(c,{visualElement:d.visualElement,...l}):null,xp(e,n,Op(f,d.visualElement,s),f,u,t,a)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,b.forwardRef)(s);return c[Dp]=e,c}function Fp({layoutId:e}){let t=(0,b.useContext)(bi).id;return t&&e!==void 0?t+`-`+e:e}function Ip(e,t){(0,b.useContext)(Jf).strict}function Lp(e){let{drag:t,layout:n}=Qf();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function Rp(e,t){if(typeof Proxy>`u`)return Pp;let n=new Map,r=(n,r)=>Pp(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,Pp(a,void 0,e,t)),n.get(a))})}var zp=(e,t)=>t.isSVG??bp(e)?new Zu(t):new Hu(t,{allowProjection:e!==b.Fragment}),Bp=class extends cu{constructor(e){super(e),e.animationState||=id(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();Kl(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},Vp=0,Hp={animation:{Feature:Bp},exit:{Feature:class extends cu{constructor(){super(...arguments),this.id=Vp++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;if(e&&n===!1){if(this.isExitComplete){let{initial:e,custom:t}=this.node.getProps();if(typeof e==`string`||typeof e==`object`&&e&&!Array.isArray(e)){let n=Sc(this.node,e,t);if(n){let{transition:e,transitionEnd:t,...r}=n;for(let e in r)this.node.getValue(e)?.jump(r[e])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive(`exit`,!1);this.isExitComplete=!1;return}let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function Up(e){return{point:{x:e.pageX,y:e.pageY}}}var Wp=e=>t=>hl(t)&&e(t,Up(t));function Gp(e,t,n,r){return Kd(e,t,Wp(n),r)}var Kp=({current:e})=>e?e.ownerDocument.defaultView:null,qp=(e,t)=>Math.abs(e-t);function Jp(e,t){let n=qp(e.x,t.x),r=qp(e.y,t.y);return Math.sqrt(n**2+r**2)}var Yp=new Set([`auto`,`scroll`]),Xp=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Zp(this.lastRawMoveEventInfo,this.transformPagePoint));let e=$p(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=Jp(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=ua;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastRawMoveEventInfo=t,this.lastMoveEventInfo=Zp(t,this.transformPagePoint),N.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=$p(e.type===`pointercancel`?this.lastMoveEventInfo:Zp(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!hl(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=Zp(Up(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=ua;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,$p(s,this.history));let d={passive:!0,capture:!0};this.removeListeners=Ni(Gp(this.contextWindow,`pointermove`,this.handlePointerMove,d),Gp(this.contextWindow,`pointerup`,this.handlePointerUp,d),Gp(this.contextWindow,`pointercancel`,this.handlePointerUp,d)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(Yp.has(e.overflowX)||Yp.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.addEventListener(`scroll`,this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};(i.x!==0||i.y!==0)&&(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),N.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),la(this.updatePoint)}};function Zp(e,t){return t?{point:t(e.point)}:e}function Qp(e,t){return{x:e.x-t.x,y:e.y-t.y}}function $p({point:e},t){return{point:e,delta:Qp(e,tm(t)),offset:Qp(e,em(t)),velocity:nm(t,.1)}}function em(e){return e[0]}function tm(e){return e[e.length-1]}function nm(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=tm(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Ii(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>Ii(t)*2&&(r=e[1]);let a=Li(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function rm(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?F(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?F(n,e,r.max):Math.min(e,n)),e}function im(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function am(e,{top:t,left:n,bottom:r,right:i}){return{x:im(e.x,n,i),y:im(e.y,t,r)}}function om(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function sm(e,t){return{x:om(e.x,t.x),y:om(e.y,t.y)}}function cm(e,t){let n=.5,r=hd(e),i=hd(t);return i>r?n=Pi(t.min,t.max-r,e.min):r>i&&(n=Pi(e.min,e.max-i,t.min)),Ei(0,1,n)}function lm(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var um=.35;function dm(e=um){return e===!1?e=0:e===!0&&(e=um),{x:fm(e,`left`,`right`),y:fm(e,`top`,`bottom`)}}function fm(e,t,n){return{min:pm(e,t),max:pm(e,n)}}function pm(e,t){return typeof e==`number`?e:e[t]||0}var mm=new WeakMap,hm=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Wl(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t&&this.snapToCursor(Up(e).point),this.stopAnimation()},a=(e,t)=>{let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=H(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Fd(e=>{let t=this.getAxisMotionValue(e).get()||0;if(La.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=hd(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&N.update(()=>i(e,t),!1,!0),Ac(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=ym(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&N.update(()=>a(e,t),!1,!0)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{let{dragSnapToOrigin:e}=this.getProps();(e||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:l}=this.getProps();this.panSession=new Xp(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:Kp(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&N.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!vm(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=rm(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&Ap(e)?this.constraints||=this.resolveRefConstraints():this.constraints=e&&n?am(n.layoutBox,e):!1,this.elastic=dm(t),r!==this.constraints&&!Ap(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&Fd(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=lm(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Ap(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;r.root&&(r.root.scroll=void 0,r.root.updateScroll());let i=ku(n,r.root,this.visualElement.getTransformPagePoint()),a=sm(r.layout.layoutBox,i);if(t){let e=t(uu(a));this.hasMutatedConstraints=!!e,e&&(a=lu(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=Fd(o=>{if(!vm(o,t,this.currentDirection))return;let c=s&&s[o]||{};(a===!0||a===o)&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return Ac(this.visualElement,e),n.start(gc(e,n,0,t,this.visualElement,!1))}stopAnimation(){Fd(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`;return this.visualElement.getProps()[t]||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){Fd(t=>{let{drag:n}=this.getProps();if(!vm(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-F(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Ap(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};Fd(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=cm({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),Fd(t=>{if(!vm(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(F(i,a,r[t]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;mm.set(this.visualElement,this);let e=this.visualElement.current,t=Gp(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&yl(i);n&&r&&!a&&this.start(t)}),n,r=()=>{let{dragConstraints:t}=this.getProps();Ap(t)&&t.current&&(this.constraints=this.resolveRefConstraints(),n||=_m(e,t.current,()=>this.scalePositionWithinConstraints()))},{projection:i}=this.visualElement,a=i.addEventListener(`measure`,r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),N.read(r);let o=Kd(window,`resize`,()=>this.scalePositionWithinConstraints()),s=i.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(Fd(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{o(),t(),a(),s&&s(),n&&n()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=um,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function gm(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function _m(e,t,n){let r=Vl(e,gm(n)),i=Vl(t,gm(n));return()=>{r(),i()}}function vm(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function ym(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var bm=class extends cu{constructor(e){super(e),this.removeGroupControls=Mi,this.removeListeners=Mi,this.controls=new hm(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Mi}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},xm=e=>(t,n)=>{e&&N.update(()=>e(t,n),!1,!0)},Sm=class extends cu{constructor(){super(...arguments),this.removePointerDownListener=Mi}onPointerDown(e){this.session=new Xp(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Kp(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:xm(e),onStart:xm(t),onMove:xm(n),onEnd:(e,t)=>{delete this.session,r&&N.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=Gp(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},Cm=!1,wm=class extends b.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),Cm&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Qd.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),Cm=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||N.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{visualElement:e,layoutAnchor:t}=this.props,{projection:n}=e;n&&(n.options.layoutAnchor=t,n.root.didUpdate(),sl.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;Cm=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function Tm(e){let[t,n]=Wf(),r=(0,b.useContext)(bi);return(0,A.jsx)(wm,{...e,layoutGroup:r,switchLayoutGroup:(0,b.useContext)(kp),isPresent:t,safeToRemove:n})}var Em={pan:{Feature:Sm},drag:{Feature:bm,ProjectionNode:Ff,MeasureLayout:Tm}};function Dm(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&N.postRender(()=>i(t,Up(t)))}var Om=class extends cu{mount(){let{current:e}=this.node;e&&(this.unmount=pl(e,(e,t)=>(Dm(this.node,t,`Start`),e=>Dm(this.node,e,`End`))))}unmount(){}},km=class extends cu{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=Ni(Kd(this.node.current,`focus`,()=>this.onFocus()),Kd(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function Am(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&N.postRender(()=>i(t,Up(t)))}var jm=class extends cu{mount(){let{current:e}=this.node;if(!e)return;let{globalTapTarget:t,propagate:n}=this.node.props;this.unmount=El(e,(e,t)=>(Am(this.node,t,`Start`),(e,{success:t})=>Am(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:t,stopPropagation:n?.tap===!1})}unmount(){}},Mm=new WeakMap,Nm=new WeakMap,Pm=e=>{let t=Mm.get(e.target);t&&t(e)},Fm=e=>{e.forEach(Pm)};function Im({root:e,...t}){let n=e||document;Nm.has(n)||Nm.set(n,{});let r=Nm.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Fm,{root:e,...t})),r[i]}function Lm(e,t,n){let r=Im(t);return Mm.set(e,n),r.observe(e),()=>{Mm.delete(e),r.unobserve(e)}}var Rm={some:0,all:1},zm=class extends cu{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:Rm[r]},o=e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)};this.stopObserver=Lm(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(Bm(e,t))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}};function Bm({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var Vm={inView:{Feature:zm},tap:{Feature:jm},focus:{Feature:km},hover:{Feature:Om}},Hm={layout:{ProjectionNode:Ff,MeasureLayout:Tm}},Q=Rp({...Hp,...Vm,...Em,...Hm},zp),Um=`/sarathi-nx-frontend/assets/hero1-BZsBXZMe.jpg`,Wm=`/sarathi-nx-frontend/assets/hero2-CRzjRoNn.jpg`,Gm=`/sarathi-nx-frontend/assets/hero3-DcQwUmb4.jpg`;function Km(){let[e,t]=(0,b.useState)(0),n=[{image:Um,eyebrow:`Your Global Travel Partner`,title:[`Seamless Journeys,`,`Limitless Possibilities.`],description:[`Business Travel`,`Exhibition Travel`,`Global Tourism`],position:`left`},{image:Wm,eyebrow:`Travel Beyond Boundaries`,title:[`Discover More.`,`Travel Better.`],description:[`International Travel`,`Business Travel`,`Premium Experiences`],position:`center`,shift:20},{image:Gm,eyebrow:`Your Journey, Our Expertise`,title:[`Wherever You Go,`,`We Are With You.`],description:[`Corporate Travel`,`Global Tourism`,`Complete Travel Support`],position:`center`,shift:35}],r=n[e],i=r.position===`center`;return(0,b.useEffect)(()=>{let e=setInterval(()=>{t(e=>(e+1)%n.length)},7e3);return()=>clearInterval(e)},[n.length]),(0,A.jsxs)(`section`,{id:`home`,className:`\r
        relative\r
        w-full\r
        overflow-hidden\r
\r
        h-[500px]\r
        sm:h-[520px]\r
        md:h-[540px]\r
        lg:h-[560px]\r
\r
        bg-[#03182B]\r
      `,children:[(0,A.jsx)(qf,{mode:`wait`,children:(0,A.jsxs)(Q.div,{className:`absolute inset-0`,initial:{opacity:0,scale:1.02},animate:{opacity:1,scale:1},exit:{opacity:0},transition:{duration:.9,ease:`easeInOut`},children:[(0,A.jsx)(`img`,{src:r.image,alt:`Sarathi NX Travel`,className:`\r
              absolute\r
              inset-0\r
\r
              w-full\r
              h-full\r
\r
              object-cover\r
              object-center\r
            `}),(0,A.jsx)(`div`,{className:`\r
              absolute\r
              inset-0\r
\r
              bg-[#03182B]/25\r
            `}),!i&&(0,A.jsx)(`div`,{className:`\r
                absolute\r
                inset-0\r
\r
                bg-gradient-to-r\r
\r
                from-[#03182B]/95\r
                via-[#03182B]/65\r
                to-transparent\r
              `}),i&&(0,A.jsx)(`div`,{className:`\r
                absolute\r
                inset-0\r
\r
                bg-gradient-to-r\r
\r
                from-[#03182B]/30\r
                via-transparent\r
                to-[#03182B]/30\r
              `}),(0,A.jsx)(`div`,{className:`\r
              absolute\r
              inset-x-0\r
              bottom-0\r
\r
              h-[130px]\r
\r
              bg-gradient-to-t\r
              from-[#03182B]/65\r
              to-transparent\r
            `})]},e)}),(0,A.jsx)(`div`,{className:`
          relative
          z-10

          w-full
          max-w-[1600px]

          mx-auto

          h-full

          px-5
          sm:px-8
          md:px-10
          lg:px-12
          xl:px-14

          flex
          items-center

          ${i?`justify-center text-center`:`justify-start text-left`}
        `,children:(0,A.jsx)(qf,{mode:`wait`,children:(0,A.jsxs)(Q.div,{initial:{opacity:0,x:i?0:-35,y:i?20:0},animate:{opacity:1,x:0,y:0},exit:{opacity:0,x:i?0:-20,y:10},transition:{duration:.7,ease:`easeOut`},className:`
              w-full

              ${i?`max-w-[720px]`:`max-w-[650px]`}

              ${i&&r.shift===20?`translate-x-0 lg:translate-x-[20px]`:``}

              ${i&&r.shift===35?`translate-x-0 lg:translate-x-[35px]`:``}
            `,children:[(0,A.jsx)(Q.p,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.1,duration:.5},className:`\r
                mb-3\r
\r
                text-[#A7CD55]\r
\r
                text-[13px]\r
                sm:text-[14px]\r
                lg:text-[15px]\r
\r
                font-semibold\r
\r
                tracking-wide\r
\r
                drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]\r
              `,children:r.eyebrow}),(0,A.jsx)(Q.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.18,duration:.65,ease:`easeOut`},className:`\r
                text-white\r
\r
                font-serif\r
                font-medium\r
\r
                text-[38px]\r
                sm:text-[46px]\r
                md:text-[55px]\r
                lg:text-[64px]\r
\r
                leading-[1.08]\r
\r
                tracking-[-0.025em]\r
\r
                drop-shadow-[0_5px_22px_rgba(0,0,0,0.7)]\r
              `,children:r.title.map((e,t)=>(0,A.jsx)(`span`,{className:`block`,children:e},t))}),(0,A.jsx)(Q.div,{initial:{width:0,opacity:0},animate:{width:i?130:150,opacity:1},transition:{delay:.4,duration:.65},className:`
                relative

                h-[2px]

                mt-5

                bg-[#9CCB42]

                ${i?`mx-auto`:``}
              `,children:(0,A.jsx)(`span`,{className:`
                  absolute

                  top-1/2
                  -translate-y-1/2

                  w-[7px]
                  h-[7px]

                  rounded-full

                  bg-[#9CCB42]

                  ${i?`left-[-3px]`:`right-[-3px]`}
                `})}),(0,A.jsx)(Q.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.52,duration:.6},className:`
                mt-4

                flex
                flex-wrap

                items-center

                text-white/95

                text-[12px]
                sm:text-[13px]
                lg:text-[14px]

                font-medium

                ${i?`justify-center`:`justify-start`}
              `,children:r.description.map((e,t)=>(0,A.jsxs)(`div`,{className:`\r
                      flex\r
                      items-center\r
                    `,children:[(0,A.jsx)(`span`,{children:e}),t<r.description.length-1&&(0,A.jsx)(`span`,{className:`\r
                          mx-3\r
\r
                          text-[#9CCB42]\r
                        `,children:`|`})]},e))})]},`content-${e}`)})}),(0,A.jsx)(`div`,{className:`\r
          absolute\r
          z-30\r
\r
          left-1/2\r
          -translate-x-1/2\r
\r
          bottom-5\r
\r
          flex\r
          items-center\r
          gap-2\r
        `,children:n.map((n,r)=>(0,A.jsx)(`button`,{type:`button`,onClick:()=>t(r),"aria-label":`Go to slide ${r+1}`,className:`
              h-[4px]

              rounded-full

              transition-all
              duration-300

              ${e===r?`w-[30px] bg-[#9CCB42]`:`w-[7px] bg-white/60 hover:bg-white`}
            `},r))})]})}function $({children:e,delay:t=0,direction:n=`up`}){return(0,A.jsx)(Q.div,{initial:{opacity:0,...{up:{y:40,x:0},down:{y:-40,x:0},left:{y:0,x:-40},right:{y:0,x:40}}[n]},whileInView:{opacity:1,x:0,y:0},viewport:{once:!0,amount:.2},transition:{duration:.7,delay:t,ease:`easeOut`},children:e})}var qm=`/sarathi-nx-frontend/assets/about-BlbohDcX.jpg`;function Jm(){return(0,A.jsxs)(`section`,{id:`about`,className:`\r
        relative\r
        py-12\r
        md:py-16\r
        lg:py-20\r
        bg-white\r
        overflow-hidden\r
      `,children:[(0,A.jsx)(`div`,{className:`\r
          absolute\r
          -top-32\r
          -left-32\r
          w-80\r
          h-80\r
          rounded-full\r
          bg-[#0057B8]/5\r
          blur-3xl\r
          pointer-events-none\r
        `}),(0,A.jsx)(`div`,{className:`\r
          absolute\r
          -bottom-32\r
          -right-32\r
          w-96\r
          h-96\r
          rounded-full\r
          bg-[#fc6602]/5\r
          blur-3xl\r
          pointer-events-none\r
        `}),(0,A.jsx)(`div`,{className:`\r
          absolute\r
          top-1/2\r
          left-1/2\r
          -translate-x-1/2\r
          -translate-y-1/2\r
          w-[500px]\r
          h-[500px]\r
          rounded-full\r
          bg-[#0057B8]/[0.025]\r
          blur-3xl\r
          pointer-events-none\r
        `}),(0,A.jsx)(`div`,{className:`max-w-7xl mx-auto px-6 relative z-10`,children:(0,A.jsxs)(`div`,{className:`\r
            grid\r
            lg:grid-cols-2\r
            gap-12\r
            lg:gap-16\r
            items-center\r
          `,children:[(0,A.jsx)($,{direction:`left`,children:(0,A.jsxs)(`div`,{className:`\r
                relative\r
                max-w-xl\r
                mx-auto\r
                lg:max-w-none\r
                w-full\r
                px-2\r
                sm:px-4\r
                lg:px-0\r
              `,children:[(0,A.jsx)(`div`,{className:`\r
                  absolute\r
                  -inset-4\r
                  rounded-[2.5rem]\r
                  bg-gradient-to-br\r
                  from-[#0057B8]/10\r
                  via-transparent\r
                  to-[#fc6602]/10\r
                  blur-xl\r
                  pointer-events-none\r
                `}),(0,A.jsx)(`div`,{className:`\r
                  absolute\r
                  -top-3\r
                  -left-3\r
                  sm:-top-4\r
                  sm:-left-4\r
                  w-[75%]\r
                  h-[72%]\r
                  rounded-[2rem]\r
                  border-2\r
                  border-[#fc6602]/25\r
                  pointer-events-none\r
                `}),(0,A.jsx)(`div`,{className:`\r
                  absolute\r
                  -bottom-4\r
                  -right-4\r
                  sm:-bottom-5\r
                  sm:-right-5\r
                  w-[72%]\r
                  h-[70%]\r
                  rounded-[2rem]\r
                  border-2\r
                  border-[#0057B8]/20\r
                  pointer-events-none\r
                `}),(0,A.jsxs)(`div`,{className:`\r
                  relative\r
                  overflow-hidden\r
                  rounded-[2rem]\r
                  bg-white\r
                  border\r
                  border-white\r
                  shadow-[0_25px_65px_rgba(0,87,184,0.18)]\r
                `,children:[(0,A.jsx)(`img`,{src:qm,alt:`Sarathi NX Travel`,className:`\r
                    w-full\r
                    h-[380px]\r
                    sm:h-[440px]\r
                    md:h-[500px]\r
                    lg:h-[510px]\r
                    object-cover\r
                    object-center\r
                    transition-transform\r
                    duration-700\r
                    ease-out\r
                    hover:scale-[1.04]\r
                  `}),(0,A.jsx)(`div`,{className:`\r
                    absolute\r
                    inset-0\r
                    bg-gradient-to-t\r
                    from-[#031B4E]/75\r
                    via-[#003D8F]/10\r
                    to-transparent\r
                    pointer-events-none\r
                  `}),(0,A.jsx)(`div`,{className:`\r
                    absolute\r
                    top-0\r
                    left-0\r
                    right-0\r
                    h-24\r
                    bg-gradient-to-b\r
                    from-white/20\r
                    to-transparent\r
                    pointer-events-none\r
                  `}),(0,A.jsxs)(`div`,{className:`\r
                     absolute\r
                      top-5\r
                      right-5\r
                      sm:top-6\r
                      sm:right-6\r
                      inline-flex\r
                      items-center\r
                      gap-2\r
                      px-4\r
                      py-2\r
                      rounded-full\r
                      bg-white/95\r
                      backdrop-blur-md\r
                      border\r
                      border-white/60\r
                      text-[#0057B8]\r
                      text-[10px]\r
                      sm:text-xs\r
                      font-extrabold\r
                      uppercase\r
                      tracking-[2px]\r
                      shadow-[0_8px_25px_rgba(0,0,0,0.15)]\r
                  `,children:[(0,A.jsx)(`span`,{className:`\r
                      w-2\r
                      h-2\r
                      rounded-full\r
                      bg-[#fc6602]\r
                    `}),`Sarathi NX`]}),(0,A.jsx)(`div`,{className:`\r
                    absolute\r
                    left-5\r
                    right-5\r
                    bottom-5\r
                    sm:left-6\r
                    sm:right-6\r
                    sm:bottom-6\r
                  `,children:(0,A.jsxs)(`div`,{className:`\r
                      flex\r
                      items-end\r
                      justify-between\r
                      gap-4\r
                    `,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{className:`\r
                          text-[#fc6602]\r
                          text-[10px]\r
                          sm:text-xs\r
                          font-bold\r
                          uppercase\r
                          tracking-[2.5px]\r
                          mb-1\r
                        `,children:`We Plan. You Travel. We Care.`}),(0,A.jsxs)(`h3`,{className:`\r
                          text-white\r
                          text-xl\r
                          sm:text-2xl\r
                          md:text-3xl\r
                          font-extrabold\r
                          leading-tight\r
                        `,children:[`Travel Beyond`,(0,A.jsx)(`br`,{}),`Boundaries`]})]}),(0,A.jsx)(`div`,{className:`\r
                        hidden\r
                        sm:flex\r
                        w-11\r
                        h-11\r
                        rounded-xl\r
                        bg-white/15\r
                        backdrop-blur-md\r
                        border\r
                        border-white/20\r
                        items-center\r
                        justify-center\r
                      `,children:(0,A.jsx)(Gr,{className:`\r
                          text-white\r
                          text-lg\r
                        `})})]})})]}),(0,A.jsx)(Q.div,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},whileHover:{y:-5,scale:1.02},transition:{duration:.3},className:`\r
                  absolute\r
                  -bottom-7\r
                  right-3\r
                  sm:right-6\r
                  md:right-10\r
                  bg-gradient-to-br\r
                  from-[#0057B8]\r
                  via-[#0753B5]\r
                  to-[#003D8F]\r
                  text-white\r
                  rounded-2xl\r
                  px-5\r
                  py-3.5\r
                  sm:px-6\r
                  sm:py-4\r
                  md:px-7\r
                  md:py-5\r
                  shadow-[0_18px_45px_rgba(0,61,165,0.32)]\r
                  border\r
                  border-white/20\r
                  z-20\r
                `,children:(0,A.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,A.jsx)(`div`,{className:`\r
                      w-10\r
                      h-10\r
                      sm:w-11\r
                      sm:h-11\r
                      rounded-xl\r
                      bg-gradient-to-br\r
                      from-[#fc6602]\r
                      to-[#ff8130]\r
                      flex\r
                      items-center\r
                      justify-center\r
                      font-black\r
                      text-xs\r
                      sm:text-sm\r
                      shadow-lg\r
                      border\r
                      border-white/10\r
                    `,children:`NX`}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{className:`\r
                        text-2xl\r
                        sm:text-3xl\r
                        md:text-4xl\r
                        font-black\r
                        leading-none\r
                      `,children:`2012`}),(0,A.jsx)(`p`,{className:`\r
                        text-blue-100\r
                        text-[10px]\r
                        sm:text-xs\r
                        md:text-sm\r
                        mt-1\r
                      `,children:`Travel Legacy`})]})]})})]})}),(0,A.jsx)(`div`,{children:(0,A.jsxs)($,{direction:`right`,children:[(0,A.jsx)($,{children:(0,A.jsxs)(`div`,{className:`flex items-center gap-[10px] mb-[7px]`,children:[(0,A.jsx)(`span`,{className:`\r
                block\r
                w-[49px]\r
                h-[2px]\r
                bg-gradient-to-r\r
                from-[#0057B8]\r
                to-[#F16A24]\r
              `}),(0,A.jsx)(`span`,{className:`\r
                text-[13px]\r
                font-bold\r
                tracking-[3px]\r
                uppercase\r
                leading-none\r
                bg-gradient-to-r\r
                from-[#0057B8]\r
                via-[#0057B8]\r
                to-[#F16A24]\r
                bg-clip-text\r
                text-transparent\r
              `,children:`Who we are`}),(0,A.jsx)(`span`,{className:`\r
                block\r
                w-[49px]\r
                h-[2px]\r
                bg-gradient-to-r\r
                from-[#F16A24]\r
                to-[#0057B8]\r
              `})]})}),(0,A.jsxs)(`h3`,{className:`\r
                  text-3xl\r
                  md:text-4xl\r
                  lg:text-[42px]\r
                  font-extrabold\r
                  text-gray-800\r
                  leading-[1.15]\r
                  tracking-tight\r
                `,children:[`Your Trusted Partner`,(0,A.jsx)(`span`,{className:`\r
                    block\r
                    mt-1\r
                    bg-gradient-to-r\r
                    from-[#fc6602]\r
                    via-[#fc6602]\r
                    to-[#0057B8]\r
                    bg-clip-text\r
                    text-transparent\r
                  `,children:`For Every Journey`})]}),(0,A.jsxs)(`div`,{className:`\r
                  flex\r
                  items-center\r
                  gap-2\r
                  mt-5\r
                `,children:[(0,A.jsx)(`span`,{className:`\r
                    w-14\r
                    h-[3px]\r
                    rounded-full\r
                    bg-[#0057B8]\r
                  `}),(0,A.jsx)(`span`,{className:`\r
                    w-7\r
                    h-[3px]\r
                    rounded-full\r
                    bg-[#fc6602]\r
                  `}),(0,A.jsx)(`span`,{className:`\r
                    w-2\r
                    h-2\r
                    rounded-full\r
                    bg-[#fc6602]\r
                  `})]}),(0,A.jsx)(`p`,{className:`\r
                  mt-6\r
                  text-gray-600\r
                  leading-7\r
                  text-sm\r
                  md:text-base\r
                `,children:`Sarathi NX Pvt. Ltd. is a professionally established travel company with a journey that began in 2012 and was formally incorporated in 2020. We operate across the full spectrum of travel, serving both individual travellers and businesses with diverse travel requirements.`}),(0,A.jsx)(`p`,{className:`\r
                  mt-4\r
                  text-gray-600\r
                  leading-7\r
                  text-sm\r
                  md:text-base\r
                `,children:`Our expertise spans Domestic & International Travel, Holiday Packages, Group Tours, Global Tourism, International Exhibitions, Business & Corporate Travel, and MICE. We also manage the essential travel components that bring these journeys together, including Flights, Hotels, Visas, Transfers, Travel Insurance, and related travel services.`}),(0,A.jsx)(`p`,{className:`\r
                  mt-4\r
                  text-gray-600\r
                  leading-7\r
                  text-sm\r
                  md:text-base\r
                `,children:`From an international trade exhibition and corporate delegation to a family holiday, group journey, or a trip to a new destination, Sarathi NX manages travel across purposes, destinations, and scales.`}),(0,A.jsx)(`p`,{className:`\r
                  mt-4\r
                  text-gray-600\r
                  leading-7\r
                  text-sm\r
                  md:text-base\r
                `,children:`With a broad service portfolio and a global outlook, we aim to be the single travel partner clients can rely on for journeys that extend beyond boundaries.`}),(0,A.jsxs)(`div`,{className:`\r
                  relative\r
                  mt-6\r
                  overflow-hidden\r
                  rounded-2xl\r
                  border\r
                  border-[#0057B8]/10\r
                  bg-gradient-to-r\r
                  from-[#0057B8]/5\r
                  via-white\r
                  to-[#fc6602]/5\r
                  p-1.5\r
                  shadow-[0_8px_25px_rgba(0,87,184,0.05)]\r
                `,children:[(0,A.jsx)(`div`,{className:`\r
                    absolute\r
                    left-0\r
                    top-0\r
                    bottom-0\r
                    w-1\r
                    bg-gradient-to-b\r
                    from-[#0057B8]\r
                    to-[#fc6602]\r
                  `}),(0,A.jsxs)(`div`,{className:`\r
                    flex\r
                    flex-col\r
                    sm:flex-row\r
                    sm:items-center\r
                    sm:justify-between\r
                    gap-3\r
                    pl-4\r
                    pr-1\r
                  `,children:[(0,A.jsxs)(`h3`,{className:`\r
                      text-base\r
                      md:text-lg\r
                      font-extrabold\r
                      text-[#0057B8]\r
                      leading-tight\r
                    `,children:[`We Plan.`,(0,A.jsxs)(`span`,{className:`text-[#fc6602]`,children:[` `,`You Travel.`]}),(0,A.jsxs)(`span`,{className:`text-[#0057B8]`,children:[` `,`We Care.`]})]}),(0,A.jsx)($,{delay:.5,children:(0,A.jsxs)(Q.a,{href:`/sarathi-nx-official/about`,whileHover:{y:-2},whileTap:{scale:.98},className:`\r
                        group\r
                        inline-flex\r
                        items-center\r
                        justify-center\r
                        gap-2.5\r
                        bg-gradient-to-r\r
                        from-[#0057B8]\r
                        via-[#0057B8]\r
                        to-[#fc6602]\r
                        hover:shadow-[0_12px_30px_rgba(0,87,184,0.25)]\r
                        text-white\r
                        px-5\r
                        py-2.5\r
                        rounded-full\r
                        font-bold\r
                        text-xs\r
                        md:text-sm\r
                        transition-all\r
                        duration-300\r
                        shadow-md\r
                        shrink-0\r
                      `,children:[`Discover More`,(0,A.jsx)(`span`,{className:`\r
                          w-6\r
                          h-6\r
                          rounded-full\r
                          bg-white/20\r
                          flex\r
                          items-center\r
                          justify-center\r
                          group-hover:bg-white/30\r
                          transition-all\r
                        `,children:(0,A.jsx)(di,{className:`\r
                            text-[10px]\r
                            group-hover:translate-x-1\r
                            transition-transform\r
                          `})})]})})]})]})]})})]})})]})}var Ym=`/sarathi-nx-frontend/assets/internationalExhibition-D7qCfbdo.jpg`,Xm=`/sarathi-nx-frontend/assets/bussnies-SpPz8lwp.jpg`,Zm=`/sarathi-nx-frontend/assets/corporateTravel-YobpDL-w.jpg`,Qm=`/sarathi-nx-frontend/assets/visa-zPQ_ww41.jpg`,$m=`/sarathi-nx-frontend/assets/mice-BtJF_GLF.jpg`,eh=`/sarathi-nx-frontend/assets/group-PpGXxdUV.jpg`,th=[{icon:Er,title:`Flights & Air Travel`,shortTitle:`Flights & Air Travel`,description:`Book domestic and international flights with reliable travel planning, flexible options and professional assistance for a smooth journey.`,image:Ym},{icon:Lr,title:`Hotels & Accommodation`,shortTitle:`Hotels & Accommodation`,description:`Find comfortable and convenient accommodation options carefully selected around your destination, budget and travel requirements.`,image:`/sarathi-nx-frontend/assets/hotel-DViEoHGq.jpg`},{icon:Or,title:`Visa & Travel Documentation`,shortTitle:`Visa & Travel Documentation`,description:`Get professional guidance with visa applications, documentation requirements and other essential travel formalities.`,image:Qm},{icon:Sr,title:`Travel Insurance & Forex`,shortTitle:`Travel Insurance & Forex`,description:`Travel with greater confidence through travel insurance assistance and convenient foreign exchange support for your journey.`,image:`/sarathi-nx-frontend/assets/globalTourisam-CI27OiQJ.jpg`},{icon:ai,title:`Transfers & Car Rentals`,shortTitle:`Transfers & Car Rentals`,description:`Arrange airport transfers, private transportation and car rentals for convenient and comfortable travel at your destination.`,image:Xm},{icon:fr,title:`Domestic & International Holidays`,shortTitle:`Domestic & International Holidays`,description:`Explore memorable destinations with thoughtfully planned holiday packages, customized itineraries, hotels and complete travel support.`,image:eh},{icon:xr,title:`Cruise & Ferry Bookings`,shortTitle:`Cruise & Ferry Bookings`,description:`Plan your cruise and ferry journeys with booking assistance and travel arrangements designed for a comfortable experience.`,image:`/sarathi-nx-frontend/assets/otherInternationalTradeFairs-AvEJEuYA.jpg`},{icon:ci,title:`Business & Corporate Travel`,shortTitle:`Business & Corporate Travel`,description:`Make every business trip simple and efficient with carefully planned flights, hotels, transfers and personalized corporate travel support.`,image:Zm},{icon:si,title:`MICE & Exhibition Travel`,shortTitle:`MICE & Exhibition Travel`,description:`From meetings and conferences to exhibitions and incentive programs, we manage professional travel arrangements with complete attention to detail.`,image:$m},{icon:ur,title:`Group & Customized Tours`,shortTitle:`Group & Customized Tours`,description:`Enjoy well-organized group journeys and customized tours with personalized itineraries, accommodation, transportation and complete travel assistance.`,image:eh}];function nh(){let[e,t]=(0,b.useState)(0);(0,b.useEffect)(()=>{let e=setInterval(()=>{t(e=>(e+1)%th.length)},4500);return()=>clearInterval(e)},[]);let n=th[e],r=n.icon;return(0,A.jsx)(`section`,{id:`services`,className:`\r
        bg-gradient-to-b\r
        from-white\r
        via-[#F8FBFF]\r
        to-white\r
        pt-8\r
        pb-10\r
        sm:pt-10\r
        sm:pb-10\r
        lg:pt-10\r
        lg:pb-12\r
        overflow-hidden\r
      `,children:(0,A.jsxs)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6`,children:[(0,A.jsxs)(`div`,{className:`text-center mb-7 sm:mb-8`,children:[(0,A.jsx)($,{children:(0,A.jsxs)(`div`,{className:`flex items-center justify-center gap-2 sm:gap-[10px] mb-[7px]`,children:[(0,A.jsx)(`span`,{className:`\r
                  block\r
                  w-8\r
                  sm:w-[49px]\r
                  h-[2px]\r
                  bg-gradient-to-r\r
                  from-[#0057B8]\r
                  to-[#F16A24]\r
                `}),(0,A.jsx)(`span`,{className:`\r
                  text-[10px]\r
                  sm:text-[13px]\r
                  font-bold\r
                  tracking-[2px]\r
                  sm:tracking-[3px]\r
                  uppercase\r
                  leading-none\r
                  bg-gradient-to-r\r
                  from-[#0057B8]\r
                  via-[#0057B8]\r
                  to-[#F16A24]\r
                  bg-clip-text\r
                  text-transparent\r
                `,children:`Our Services`}),(0,A.jsx)(`span`,{className:`\r
                  block\r
                  w-8\r
                  sm:w-[49px]\r
                  h-[2px]\r
                  bg-gradient-to-r\r
                  from-[#F16A24]\r
                  to-[#0057B8]\r
                `})]})}),(0,A.jsx)($,{delay:.05,children:(0,A.jsxs)(`h2`,{className:`\r
                text-center\r
                font-extrabold\r
                tracking-[-1.2px]\r
                sm:tracking-[-1.5px]\r
                lg:tracking-[-1.8px]\r
                leading-[1.05]\r
                text-[36px]\r
                sm:text-[42px]\r
                md:text-[52px]\r
                lg:text-[58px]\r
                text-[#071B41]\r
              `,children:[`Complete Travel`,` `,(0,A.jsx)(`span`,{className:`\r
                  bg-gradient-to-r\r
                  from-[#0057B8]\r
                  via-[#1454D8]\r
                  to-[#F16A24]\r
                  bg-clip-text\r
                  text-transparent\r
                `,children:`Solutions.`})]})}),(0,A.jsx)(`p`,{className:`\r
              text-gray-600\r
              max-w-2xl\r
              mx-auto\r
              mt-3\r
              text-xs\r
              sm:text-sm\r
              md:text-base\r
              leading-5\r
              sm:leading-6\r
              px-2\r
            `,children:`From international exhibitions and corporate journeys to visas, hotels and group tours, we take care of every important detail so you can travel with confidence.`})]}),(0,A.jsxs)(`div`,{className:`\r
            grid\r
            grid-cols-1\r
            lg:grid-cols-[270px_1fr]\r
            gap-4\r
            lg:gap-5\r
            items-stretch\r
          `,children:[(0,A.jsxs)(`div`,{className:`\r
              bg-white\r
              rounded-2xl\r
              border\r
              border-gray-100\r
              shadow-lg\r
              overflow-hidden\r
              lg:h-[500px]\r
              flex\r
              flex-col\r
            `,children:[(0,A.jsxs)(`div`,{className:`\r
                px-4\r
                sm:px-5\r
                py-4\r
                shrink-0\r
                bg-gradient-to-r\r
                from-[#0057B8]\r
                via-[#0057B8]\r
                to-[#fc6602]\r
                text-white\r
              `,children:[(0,A.jsx)(`p`,{className:`\r
                  text-[10px]\r
                  sm:text-xs\r
                  uppercase\r
                  tracking-[1.5px]\r
                  sm:tracking-[2px]\r
                  text-blue-100\r
                  font-semibold\r
                `,children:`What We Offer`}),(0,A.jsx)(`h3`,{className:`text-base sm:text-lg font-bold mt-1`,children:`Our Services`})]}),(0,A.jsx)(`div`,{className:`\r
                p-2\r
                flex-1\r
                overflow-y-auto\r
                overscroll-contain\r
                [scrollbar-width:thin]\r
                [scrollbar-color:#0057B8_transparent]\r
              `,children:th.map((n,r)=>{let i=n.icon;return(0,A.jsxs)(`button`,{type:`button`,onClick:()=>t(r),className:`
                      group
                      w-full
                      flex
                      items-center
                      gap-3
                      px-3
                      sm:px-4
                      py-3
                      rounded-xl
                      text-left
                      transition-all
                      duration-300

                      ${e===r?`
                            bg-gradient-to-r
                            from-[#0057B8]
                            via-[#0057B8]
                            to-[#fc6602]
                            text-white
                            shadow-md
                            scale-[1.01]
                          `:`
                            text-gray-600
                            hover:bg-[#F1F6FF]
                            hover:text-[#0057B8]
                          `}
                    `,children:[(0,A.jsx)(`span`,{className:`
                        w-9
                        h-9
                        shrink-0
                        rounded-lg
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-300

                        ${e===r?`
                              bg-white/20
                              text-white
                              border
                              border-white/20
                            `:`
                              bg-[#F1F6FF]
                              text-[#0057B8]
                            `}
                      `,children:(0,A.jsx)(i,{className:`text-sm`})}),(0,A.jsx)(`span`,{className:`
                        text-xs
                        sm:text-sm
                        font-semibold
                        leading-5

                        ${e===r?`text-white`:`text-gray-600`}
                      `,children:n.shortTitle})]},n.title)})})]}),(0,A.jsx)(`div`,{className:`\r
              relative\r
              h-[420px]\r
              sm:h-[450px]\r
              md:h-[480px]\r
              lg:h-[500px]\r
              min-w-0\r
            `,children:(0,A.jsx)(qf,{mode:`wait`,children:(0,A.jsx)(Q.div,{initial:{opacity:0,rotateY:-12,x:30},animate:{opacity:1,rotateY:0,x:0},exit:{opacity:0,rotateY:12,x:-30},transition:{duration:.55,ease:`easeInOut`},className:`h-full`,children:(0,A.jsxs)(`div`,{className:`\r
                    relative\r
                    h-full\r
                    rounded-2xl\r
                    overflow-hidden\r
                    shadow-xl\r
                    group\r
                  `,children:[(0,A.jsx)(Q.img,{src:n.image,alt:n.title,className:`\r
                      absolute\r
                      inset-0\r
                      w-full\r
                      h-full\r
                      object-cover\r
                      transition-transform\r
                      duration-700\r
                      group-hover:scale-105\r
                    `,initial:{scale:1.08},animate:{scale:1},transition:{duration:4.5,ease:`easeOut`}},n.image),(0,A.jsx)(`div`,{className:`absolute inset-0 bg-black/35`}),(0,A.jsx)(`div`,{className:`\r
                      absolute\r
                      inset-0\r
                      bg-gradient-to-r\r
                      from-black/85\r
                      via-black/55\r
                      to-black/15\r
                    `}),(0,A.jsx)(`div`,{className:`\r
                      absolute\r
                      inset-0\r
                      bg-gradient-to-tr\r
                      from-[#0057B8]/30\r
                      via-transparent\r
                      to-[#fc6602]/25\r
                    `}),(0,A.jsx)(`div`,{className:`\r
                      absolute\r
                      inset-x-0\r
                      bottom-0\r
                      h-2/3\r
                      bg-gradient-to-t\r
                      from-black/75\r
                      via-black/20\r
                      to-transparent\r
                    `}),(0,A.jsx)(`div`,{className:`\r
                      absolute\r
                      top-0\r
                      left-0\r
                      right-0\r
                      h-1.5\r
                      z-20\r
                      bg-gradient-to-r\r
                      from-[#0057B8]\r
                      via-[#0057B8]\r
                      to-[#fc6602]\r
                    `}),(0,A.jsxs)(`div`,{className:`\r
                      relative\r
                      z-10\r
                      h-full\r
                      flex\r
                      flex-col\r
                      justify-center\r
                      p-5\r
                      sm:p-6\r
                      md:p-8\r
                      lg:p-10\r
                    `,children:[(0,A.jsx)(`div`,{className:`\r
                        w-12\r
                        h-12\r
                        sm:w-14\r
                        sm:h-14\r
                        lg:w-16\r
                        lg:h-16\r
                        rounded-xl\r
                        sm:rounded-2xl\r
                        bg-gradient-to-br\r
                        from-[#0057B8]/70\r
                        to-[#fc6602]/70\r
                        backdrop-blur-md\r
                        border\r
                        border-white/30\r
                        text-white\r
                        flex\r
                        items-center\r
                        justify-center\r
                        text-xl\r
                        sm:text-2xl\r
                        shadow-xl\r
                        mb-3\r
                        sm:mb-4\r
                        group-hover:scale-105\r
                        transition-transform\r
                        duration-300\r
                      `,children:(0,A.jsx)(r,{})}),(0,A.jsx)(`span`,{className:`\r
                        text-[#fc6602]\r
                        text-[10px]\r
                        sm:text-xs\r
                        font-bold\r
                        uppercase\r
                        tracking-[1.5px]\r
                        sm:tracking-[2px]\r
                      `,children:`Sarathi NX`}),(0,A.jsx)(`h3`,{className:`\r
                        text-xl\r
                        sm:text-2xl\r
                        md:text-3xl\r
                        lg:text-4xl\r
                        font-extrabold\r
                        text-white\r
                        mt-2\r
                        max-w-2xl\r
                        leading-tight\r
                        drop-shadow-lg\r
                      `,children:n.title}),(0,A.jsx)(`p`,{className:`\r
                        text-white/90\r
                        text-xs\r
                        sm:text-sm\r
                        md:text-base\r
                        leading-5\r
                        sm:leading-6\r
                        mt-2\r
                        sm:mt-3\r
                        max-w-2xl\r
                        drop-shadow-md\r
                        line-clamp-3\r
                        sm:line-clamp-2\r
                      `,children:n.description}),(0,A.jsxs)(`div`,{className:`\r
                        flex\r
                        flex-wrap\r
                        items-center\r
                        gap-3\r
                        sm:gap-4\r
                        mt-4\r
                        sm:mt-5\r
                      `,children:[(0,A.jsxs)(`a`,{href:`#contact`,className:`\r
                          group/explore\r
                          inline-flex\r
                          items-center\r
                          gap-2\r
                          sm:gap-3\r
                          bg-gradient-to-r\r
                          from-[#0057B8]\r
                          via-[#0057B8]\r
                          to-[#fc6602]\r
                          text-white\r
                          px-4\r
                          sm:px-5\r
                          py-2.5\r
                          sm:py-3\r
                          rounded-full\r
                          font-semibold\r
                          text-xs\r
                          sm:text-sm\r
                          transition-all\r
                          duration-300\r
                          shadow-lg\r
                          hover:shadow-2xl\r
                          hover:-translate-y-1\r
                          hover:scale-105\r
                        `,children:[`Explore Service`,(0,A.jsx)(di,{className:`\r
                            text-xs\r
                            sm:text-sm\r
                            transition-transform\r
                            duration-300\r
                            group-hover/explore:translate-x-1\r
                          `})]}),(0,A.jsxs)(`div`,{className:`\r
                          flex\r
                          items-center\r
                          gap-2\r
                          text-[11px]\r
                          sm:text-xs\r
                          md:text-sm\r
                          text-white/90\r
                        `,children:[(0,A.jsx)(`span`,{className:`\r
                            w-2\r
                            h-2\r
                            rounded-full\r
                            bg-[#fc6602]\r
                            shadow-[0_0_10px_rgba(252,102,2,0.9)]\r
                          `}),`Professional Travel Assistance`]})]}),(0,A.jsx)(`div`,{className:`flex gap-1.5 sm:gap-2 mt-4 sm:mt-5`,children:th.map((n,r)=>(0,A.jsx)(`button`,{type:`button`,onClick:()=>t(r),"aria-label":`Show service ${r+1}`,className:`
                            h-1.5
                            rounded-full
                            transition-all
                            duration-500

                            ${e===r?`
                                  w-8
                                  sm:w-10
                                  bg-gradient-to-r
                                  from-[#0057B8]
                                  to-[#fc6602]
                                `:`
                                  w-4
                                  sm:w-5
                                  bg-white/40
                                  hover:bg-white/70
                                `}
                          `},r))})]})]})},e)})})]})]})})}var rh=[{number:`01`,icon:Tr,title:`Transparent Pricing`,desc:`Honest pricing with no hidden charges.`},{number:`02`,icon:Br,title:`Dedicated Travel Consultants`,desc:`Personalized guidance for every journey.`},{number:`03`,icon:Wr,title:`Worldwide Network`,desc:`Reliable global travel partnerships.`},{number:`04`,icon:Or,title:`Fast Visa Assistance`,desc:`Quick and hassle-free visa support.`},{number:`05`,icon:Hr,title:`Personalized Travel Solutions`,desc:`Travel plans tailored to your needs.`},{number:`06`,icon:ei,title:`24/7 Customer Support`,desc:`Assistance whenever you need us.`}];function ih(){return(0,A.jsx)(`section`,{id:`why-choose-us`,className:`\r
        relative\r
        w-full\r
        overflow-hidden\r
        bg-[#f8f9fc]\r
        py-[10px]\r
        md:py-[14px]\r
      `,children:(0,A.jsxs)(`div`,{className:`\r
          relative\r
          z-10\r
          w-full\r
          max-w-[1240px]\r
          mx-auto\r
          px-5\r
          md:px-6\r
        `,children:[(0,A.jsx)($,{children:(0,A.jsxs)(`div`,{className:`\r
              flex\r
              items-center\r
              justify-center\r
              gap-[10px]\r
              mb-[7px]\r
            `,children:[(0,A.jsx)(`span`,{className:`\r
                block\r
                w-[49px]\r
                h-[2px]\r
                bg-gradient-to-r\r
                from-[#0057B8]\r
                to-[#F16A24]\r
              `}),(0,A.jsx)(`span`,{className:`\r
                text-[13px]\r
                font-bold\r
                tracking-[3px]\r
                uppercase\r
                leading-none\r
                bg-gradient-to-r\r
                from-[#0057B8]\r
                via-[#0057B8]\r
                to-[#F16A24]\r
                bg-clip-text\r
                text-transparent\r
              `,children:`WHY CHOOSE SARATHI NX`}),(0,A.jsx)(`span`,{className:`\r
                block\r
                w-[49px]\r
                h-[2px]\r
                bg-gradient-to-r\r
                from-[#F16A24]\r
                to-[#0057B8]\r
              `})]})}),(0,A.jsx)($,{delay:.05,children:(0,A.jsxs)(`h2`,{className:`\r
              text-center\r
              font-extrabold\r
              tracking-[-1.8px]\r
              leading-[1.02]\r
              text-[42px]\r
              sm:text-[46px]\r
              md:text-[52px]\r
              lg:text-[58px]\r
              text-[#071B41]\r
            `,children:[`Travel With`,` `,(0,A.jsx)(`span`,{className:`\r
                bg-gradient-to-r\r
                from-[#0057B8]\r
                via-[#1454D8]\r
                to-[#F16A24]\r
                bg-clip-text\r
                text-transparent\r
              `,children:`Confidence.`})]})}),(0,A.jsx)($,{delay:.08,children:(0,A.jsxs)(`div`,{className:`\r
              flex\r
              flex-wrap\r
              items-center\r
              justify-center\r
              gap-[9px]\r
              mt-[9px]\r
              text-center\r
            `,children:[(0,A.jsx)(`span`,{className:`\r
                text-[17px]\r
                md:text-[20px]\r
                font-bold\r
                leading-none\r
                text-[#E76624]\r
              `,children:`End-to-End Travel Solutions`}),(0,A.jsx)(`span`,{className:`\r
                text-[17px]\r
                md:text-[20px]\r
                font-bold\r
                leading-none\r
                text-[#19396D]\r
              `,children:`|`}),(0,A.jsx)(`span`,{className:`\r
                text-[17px]\r
                md:text-[20px]\r
                font-bold\r
                leading-none\r
                text-[#19396D]\r
              `,children:`Complete travel management under one roof.`})]})}),(0,A.jsx)($,{delay:.1,children:(0,A.jsxs)(`p`,{className:`\r
              max-w-[970px]\r
              mx-auto\r
              mt-[12px]\r
              mb-[27px]\r
              text-center\r
              text-[14px]\r
              md:text-[16px]\r
              leading-[1.5]\r
              font-normal\r
              text-[#303846]\r
            `,children:[`From business travel and international exhibitions to visas, hotels and complete travel management,`,(0,A.jsx)(`br`,{className:`hidden md:block`}),`Sarathi NX ensures a smooth, reliable and hassle-free journey.`]})}),(0,A.jsx)(`div`,{className:`\r
            grid\r
            grid-cols-1\r
            sm:grid-cols-2\r
            lg:grid-cols-6\r
            gap-[12px]\r
            w-full\r
          `,children:rh.map((e,t)=>{let n=e.icon;return(0,A.jsx)($,{delay:.12+t*.04,children:(0,A.jsxs)(Q.div,{whileHover:{y:-4},transition:{type:`spring`,stiffness:300,damping:22},className:`\r
                    group\r
                    relative\r
                    w-full\r
                    h-[300px]\r
                    overflow-hidden\r
                    rounded-[15px]\r
                    bg-white\r
                    border\r
                    border-[#edf0f5]\r
                    shadow-[0_4px_15px_rgba(25,50,90,0.055)]\r
                  `,children:[(0,A.jsx)(`div`,{className:`\r
                      absolute\r
                      top-0\r
                      left-0\r
                      w-[58px]\r
                      h-[3px]\r
                      rounded-br-full\r
                      bg-[#0057B8]\r
                    `}),(0,A.jsx)(`div`,{className:`\r
                      absolute\r
                      top-[18px]\r
                      right-[13px]\r
                      text-[22px]\r
                      leading-none\r
                      font-extrabold\r
                      tracking-[-1px]\r
                      text-[#F1F3F7]\r
                      select-none\r
                    `,children:e.number}),(0,A.jsx)(`div`,{className:`pt-[18px] pl-[25px]`,children:(0,A.jsxs)(`div`,{className:`\r
                        relative\r
                        w-[72px]\r
                        h-[72px]\r
                        rounded-full\r
                        overflow-hidden\r
                        flex\r
                        items-center\r
                        justify-center\r
                        bg-gradient-to-br\r
                        from-[#0754C8]\r
                        via-[#1852C7]\r
                        to-[#E85C0A]\r
                        shadow-[0_5px_14px_rgba(0,70,180,0.12)]\r
                      `,children:[(0,A.jsx)(`div`,{className:`\r
                          absolute\r
                          inset-0\r
                          bg-[radial-gradient(circle_at_28%_25%,rgba(255,255,255,0.25),transparent_30%)]\r
                        `}),(0,A.jsx)(n,{className:`\r
                          relative\r
                          z-10\r
                          text-white\r
                          text-[31px]\r
                        `})]})}),(0,A.jsxs)(`div`,{className:`\r
                      px-[25px]\r
                      pt-[20px]\r
                    `,children:[(0,A.jsx)(`h3`,{className:`\r
                        max-w-[155px]\r
                        min-h-[47px]\r
                        text-[17px]\r
                        md:text-[18px]\r
                        font-extrabold\r
                        leading-[1.25]\r
                        tracking-[-0.25px]\r
                        text-[#102C61]\r
                      `,children:e.title}),(0,A.jsx)(`div`,{className:`\r
                        mt-[11px]\r
                        mb-[14px]\r
                        w-[34px]\r
                        h-[2px]\r
                        rounded-full\r
                        bg-[#F1783B]\r
                      `}),(0,A.jsx)(`p`,{className:`\r
                        max-w-[160px]\r
                        text-[12px]\r
                        md:text-[13px]\r
                        leading-[1.55]\r
                        font-normal\r
                        text-[#303846]\r
                      `,children:e.desc})]}),(0,A.jsx)(`div`,{className:`\r
                      absolute\r
                      right-[12px]\r
                      bottom-[12px]\r
                      w-[55px]\r
                      h-[55px]\r
                      flex\r
                      items-center\r
                      justify-center\r
                      text-[#DCE8FA]\r
                      pointer-events-none\r
                    `,children:(0,A.jsx)(n,{className:`\r
                        text-[50px]\r
                        opacity-80\r
                      `})}),(0,A.jsx)(`div`,{className:`\r
                      absolute\r
                      bottom-0\r
                      left-0\r
                      w-0\r
                      h-[2px]\r
                      bg-gradient-to-r\r
                      from-[#0057B8]\r
                      to-[#F16A24]\r
                      group-hover:w-full\r
                      transition-all\r
                      duration-500\r
                    `})]})},e.title)})})]})})}var ah=[{title:`Medical, Healthcare & Pharmaceuticals`,image:`/sarathi-nx-frontend/assets/healthcare-DzyAUpmq.jpg`,icon:zr},{title:`Agriculture, Food & Beverage`,image:`/sarathi-nx-frontend/assets/agriculture-Bi2Xu7XO.jpg`,icon:lr},{title:`Automotive & Mobility`,image:`/sarathi-nx-frontend/assets/automotive-CE2r4N4A.jpg`,icon:ai},{title:`Beauty, Cosmetics & Personal Care`,image:`/sarathi-nx-frontend/assets/beautyCosmetics-BI7sXhTU.jpg`,icon:Ar},{title:`Construction, Building & Architecture`,image:`/sarathi-nx-frontend/assets/construction-Chmhg1V0.jpg`,icon:Vr},{title:`Industrial Manufacturing & Machinery`,image:`/sarathi-nx-frontend/assets/industrialManufacturing-CzgU-uGW.jpg`,icon:Fr},{title:`Electronics, Electrical & Semiconductors`,image:`/sarathi-nx-frontend/assets/electronics-DhPlTQLs.jpg`,icon:jr},{title:`Information Technology & AI`,image:`/sarathi-nx-frontend/assets/technologyAI-6fUKiN4s.jpg`,icon:Pr},{title:`Energy & Renewable Energy`,image:`/sarathi-nx-frontend/assets/renewableEnergy-DNKI5uw-.jpg`,icon:br},{title:`Metal, Steel & Engineering`,image:`/sarathi-nx-frontend/assets/metalSteel-BxfzI-ik.jpg`,icon:$r},{title:`Packaging, Printing & Publishing`,image:`/sarathi-nx-frontend/assets/packagingPrinting-DJ6EaTt7.jpg`,icon:Fr},{title:`Textiles, Apparel & Fashion`,image:`/sarathi-nx-frontend/assets/textile-C6q53Nrc.jpg`,icon:pr},{title:`Furniture, Interior & Home Living`,image:`/sarathi-nx-frontend/assets/furnitureInterior-CT0whbFw.jpg`,icon:Zr},{title:`Jewellery, Watches & Gifts`,image:`/sarathi-nx-frontend/assets/jewellery-d8Lzxwmh.jpg`,icon:Kr},{title:`Tourism, Hospitality & Leisure`,image:`/sarathi-nx-frontend/assets/tourismHospitality-CfEqV6Oa.jpg`,icon:Er},{title:`Logistics & Transportation`,image:`/sarathi-nx-frontend/assets/logisticsTransportation-BSnlitQd.jpg`,icon:mr},{title:`Environment & Green Technology`,image:`/sarathi-nx-frontend/assets/environmentGreenTech-DQMVnXlF.jpg`,icon:Nr},{title:`Plastics, Rubber & Materials`,image:`/sarathi-nx-frontend/assets/plasticsRubber-CNgnLsmm.jpg`,icon:Fr},{title:`Education, Licensing & Business Services`,image:`/sarathi-nx-frontend/assets/educationBusiness-CrDkQHQA.jpg`,icon:Ur},{title:`Optics & Precision Technology`,image:`/sarathi-nx-frontend/assets/opticsPrecision-UPPJhscw.jpg`,icon:qr}];function oh(){let[e,t]=(0,b.useState)(!1),n=[...ah,...ah];return(0,A.jsxs)(`section`,{id:`industries`,className:`\r
        relative\r
        pt-10\r
        sm:pt-11\r
        md:pt-12\r
        lg:pt-12\r
        pb-14\r
        sm:pb-16\r
        md:pb-20\r
        bg-white\r
        overflow-hidden\r
      `,children:[(0,A.jsx)(`div`,{className:`\r
          absolute\r
          -top-24\r
          -left-24\r
          w-64\r
          h-64\r
          sm:w-72\r
          sm:h-72\r
          md:w-80\r
          md:h-80\r
          rounded-full\r
          bg-[#0057B8]/5\r
          blur-3xl\r
          pointer-events-none\r
        `}),(0,A.jsx)(`div`,{className:`\r
          absolute\r
          -bottom-24\r
          -right-24\r
          w-64\r
          h-64\r
          sm:w-72\r
          sm:h-72\r
          md:w-80\r
          md:h-80\r
          rounded-full\r
          bg-[#F16A24]/5\r
          blur-3xl\r
          pointer-events-none\r
        `}),(0,A.jsxs)(`div`,{className:`relative`,children:[(0,A.jsx)($,{children:(0,A.jsxs)(`div`,{className:`\r
              flex\r
              items-center\r
              justify-center\r
              gap-[6px]\r
              sm:gap-[8px]\r
              md:gap-[10px]\r
              mb-[7px]\r
              px-4\r
            `,children:[(0,A.jsx)(`span`,{className:`\r
                block\r
                w-[28px]\r
                sm:w-[38px]\r
                md:w-[49px]\r
                h-[2px]\r
                bg-gradient-to-r\r
                from-[#0057B8]\r
                to-[#F16A24]\r
                shrink-0\r
              `}),(0,A.jsx)(`span`,{className:`\r
                text-[10px]\r
                sm:text-[11px]\r
                md:text-[13px]\r
                font-bold\r
                tracking-[2px]\r
                sm:tracking-[2.5px]\r
                md:tracking-[3px]\r
                uppercase\r
                leading-none\r
                text-center\r
                bg-gradient-to-r\r
                from-[#0057B8]\r
                via-[#0057B8]\r
                to-[#F16A24]\r
                bg-clip-text\r
                text-transparent\r
              `,children:`Industries We Serve`}),(0,A.jsx)(`span`,{className:`\r
                block\r
                w-[28px]\r
                sm:w-[38px]\r
                md:w-[49px]\r
                h-[2px]\r
                bg-gradient-to-r\r
                from-[#F16A24]\r
                to-[#0057B8]\r
                shrink-0\r
              `})]})}),(0,A.jsx)($,{delay:.05,children:(0,A.jsxs)(`h2`,{className:`\r
              text-center\r
              font-extrabold\r
              tracking-[-1px]\r
              sm:tracking-[-1.3px]\r
              md:tracking-[-1.8px]\r
              leading-[1.05]\r
              text-[32px]\r
              sm:text-[40px]\r
              md:text-[48px]\r
              lg:text-[58px]\r
              px-4\r
              text-[#071B41]\r
            `,children:[`Travel Solutions For`,` `,(0,A.jsx)(`span`,{className:`\r
                bg-gradient-to-r\r
                from-[#0057B8]\r
                via-[#1454D8]\r
                to-[#F16A24]\r
                bg-clip-text\r
                text-transparent\r
              `,children:`Every Industry.`})]})}),(0,A.jsx)($,{delay:.1,children:(0,A.jsx)(`p`,{className:`\r
              text-center\r
              max-w-3xl\r
              mx-auto\r
              mt-4\r
              sm:mt-5\r
              px-5\r
              sm:px-6\r
              text-gray-600\r
              leading-6\r
              sm:leading-7\r
              text-xs\r
              sm:text-sm\r
              md:text-base\r
            `,children:`From healthcare and pharmaceuticals to manufacturing and technology, Sarathi NX provides reliable business travel solutions for professionals across diverse industries.`})}),(0,A.jsxs)(`div`,{className:`\r
            relative\r
            mt-8\r
            sm:mt-10\r
            md:mt-12\r
            overflow-hidden\r
            w-full\r
          `,onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:[(0,A.jsx)(`div`,{className:`\r
              absolute\r
              left-0\r
              top-0\r
              bottom-0\r
              w-10\r
              sm:w-16\r
              md:w-28\r
              bg-gradient-to-r\r
              from-white\r
              to-transparent\r
              z-20\r
              pointer-events-none\r
            `}),(0,A.jsx)(`div`,{className:`\r
              absolute\r
              right-0\r
              top-0\r
              bottom-0\r
              w-10\r
              sm:w-16\r
              md:w-28\r
              bg-gradient-to-l\r
              from-white\r
              to-transparent\r
              z-20\r
              pointer-events-none\r
            `}),(0,A.jsx)(Q.div,{className:`\r
              flex\r
              gap-3\r
              sm:gap-4\r
              md:gap-5\r
              w-max\r
              px-3\r
              sm:px-4\r
            `,animate:{x:e?void 0:[`0%`,`-50%`]},transition:{x:{duration:55,ease:`linear`,repeat:1/0}},children:n.map((e,t)=>{let n=e.icon;return(0,A.jsxs)(Q.div,{whileHover:{y:-7,scale:1.02},transition:{duration:.25},className:`\r
                    group\r
                    relative\r
                    shrink-0\r
\r
                    w-[220px]\r
                    sm:w-[250px]\r
                    md:w-[280px]\r
                    lg:w-[300px]\r
\r
                    h-[250px]\r
                    sm:h-[260px]\r
                    md:h-[275px]\r
\r
                    rounded-[20px]\r
                    md:rounded-[22px]\r
\r
                    overflow-hidden\r
                    bg-gray-900\r
\r
                    shadow-[0_10px_35px_rgba(0,0,0,0.10)]\r
                    hover:shadow-[0_20px_45px_rgba(0,87,184,0.20)]\r
\r
                    transition-shadow\r
                    duration-500\r
                  `,children:[(0,A.jsx)(`img`,{src:e.image,alt:e.title,className:`\r
                      absolute\r
                      inset-0\r
                      w-full\r
                      h-full\r
                      object-cover\r
                      transition-transform\r
                      duration-700\r
                      ease-out\r
                      group-hover:scale-110\r
                    `}),(0,A.jsx)(`div`,{className:`\r
                      absolute\r
                      inset-0\r
                      bg-gradient-to-t\r
                      from-black/90\r
                      via-black/40\r
                      to-black/5\r
                    `}),(0,A.jsx)(`div`,{className:`\r
                      absolute\r
                      inset-0\r
                      bg-gradient-to-br\r
                      from-[#0057B8]/20\r
                      via-transparent\r
                      to-[#F16A24]/30\r
                      opacity-80\r
                      group-hover:opacity-100\r
                      transition-opacity\r
                      duration-500\r
                    `}),(0,A.jsx)(`div`,{className:`\r
                      absolute\r
                      top-0\r
                      left-0\r
                      right-0\r
                      h-1\r
                      bg-gradient-to-r\r
                      from-[#0057B8]\r
                      via-[#1454D8]\r
                      to-[#F16A24]\r
                      z-20\r
                    `}),(0,A.jsx)(`div`,{className:`\r
                      absolute\r
                      top-3\r
                      right-3\r
                      sm:top-4\r
                      sm:right-4\r
\r
                      w-9\r
                      h-9\r
                      sm:w-10\r
                      sm:h-10\r
\r
                      rounded-full\r
                      bg-white/90\r
                      backdrop-blur-sm\r
                      flex\r
                      items-center\r
                      justify-center\r
                      text-[#0057B8]\r
                      shadow-lg\r
                      z-20\r
                      group-hover:scale-110\r
                      group-hover:text-[#F16A24]\r
                      transition-all\r
                      duration-300\r
                    `,children:(0,A.jsx)(n,{className:`text-sm sm:text-base`})}),(0,A.jsxs)(`div`,{className:`\r
                      absolute\r
                      inset-x-0\r
                      bottom-0\r
                      p-4\r
                      sm:p-5\r
                      z-20\r
                    `,children:[(0,A.jsx)(`h3`,{className:`\r
                        text-base\r
                        sm:text-lg\r
                        md:text-xl\r
                        font-extrabold\r
                        text-white\r
                        leading-[1.15]\r
                        max-w-[240px]\r
                      `,children:e.title}),(0,A.jsx)(`div`,{className:`\r
                        mt-2\r
                        sm:mt-3\r
                        w-10\r
                        h-[2px]\r
                        bg-gradient-to-r\r
                        from-[#0057B8]\r
                        to-[#F16A24]\r
                        group-hover:w-16\r
                        transition-all\r
                        duration-300\r
                      `}),(0,A.jsxs)(`a`,{href:`#contact`,className:`\r
                        inline-flex\r
                        items-center\r
                        gap-2\r
                        mt-2\r
                        sm:mt-3\r
                        text-white/90\r
                        text-[11px]\r
                        sm:text-xs\r
                        font-bold\r
                        hover:text-white\r
                        transition-colors\r
                      `,children:[`Explore Industry`,(0,A.jsx)(di,{className:`\r
                          text-[9px]\r
                          sm:text-[10px]\r
                          group-hover:translate-x-1\r
                          transition-transform\r
                        `})]})]}),(0,A.jsx)(`div`,{className:`\r
                      absolute\r
                      inset-0\r
                      rounded-[20px]\r
                      md:rounded-[22px]\r
                      border\r
                      border-white/20\r
                      group-hover:border-white/50\r
                      transition-all\r
                      duration-500\r
                      pointer-events-none\r
                    `})]},`${e.title}-${t}`)})})]}),(0,A.jsx)($,{delay:.2,children:(0,A.jsx)(`div`,{className:`flex justify-center mt-6 sm:mt-7 px-4`,children:(0,A.jsxs)(`div`,{className:`\r
                flex\r
                items-center\r
                gap-2\r
                px-3\r
                sm:px-4\r
                py-2\r
                rounded-full\r
                bg-[#071B41]/5\r
                text-[#071B41]\r
                text-[9px]\r
                sm:text-[11px]\r
                font-bold\r
                uppercase\r
                tracking-[1.5px]\r
                sm:tracking-[2px]\r
                text-center\r
              `,children:[(0,A.jsx)(Gr,{className:`text-[#0057B8] shrink-0`}),`Connecting Industries Globally`]})})}),(0,A.jsx)($,{delay:.3,children:(0,A.jsxs)(`div`,{className:`\r
              max-w-7xl\r
              mx-auto\r
\r
              mt-8\r
              sm:mt-9\r
              md:mt-10\r
\r
              mx-4\r
              sm:mx-5\r
              md:mx-8\r
\r
              rounded-2xl\r
              sm:rounded-3xl\r
\r
              bg-gradient-to-r\r
              from-[#0057B8]\r
              via-[#0057B8]\r
              to-[#F16A24]\r
\r
              px-5\r
              sm:px-6\r
              md:px-10\r
\r
              py-6\r
              sm:py-7\r
              md:py-8\r
\r
              text-white\r
\r
              flex\r
              flex-col\r
              md:flex-row\r
\r
              items-center\r
              md:items-center\r
\r
              justify-between\r
\r
              gap-5\r
\r
              shadow-xl\r
              overflow-hidden\r
              relative\r
            `,children:[(0,A.jsx)(`div`,{className:`\r
                absolute\r
                -right-16\r
                -top-16\r
                w-36\r
                h-36\r
                sm:w-40\r
                sm:h-40\r
                rounded-full\r
                bg-white/10\r
              `}),(0,A.jsx)(`div`,{className:`\r
                absolute\r
                -left-16\r
                -bottom-16\r
                w-32\r
                h-32\r
                sm:w-36\r
                sm:h-36\r
                rounded-full\r
                bg-white/10\r
              `}),(0,A.jsxs)(`div`,{className:`\r
                relative\r
                z-10\r
                text-center\r
                md:text-left\r
              `,children:[(0,A.jsxs)(`div`,{className:`flex items-center justify-center md:justify-start gap-2`,children:[(0,A.jsx)(Gr,{className:`text-blue-100`}),(0,A.jsx)(`p`,{className:`\r
                    text-blue-100\r
                    uppercase\r
                    tracking-[1.5px]\r
                    sm:tracking-[2px]\r
                    text-[10px]\r
                    sm:text-xs\r
                    font-bold\r
                  `,children:`Global Business Travel`})]}),(0,A.jsx)(`h3`,{className:`\r
                  text-lg\r
                  sm:text-xl\r
                  md:text-2xl\r
                  font-extrabold\r
                  mt-2\r
                  leading-tight\r
                `,children:`Your Industry. Our Global Travel Expertise.`}),(0,A.jsx)(`p`,{className:`text-blue-50 mt-1 text-xs sm:text-sm`,children:`Let Sarathi NX take care of your business travel requirements.`})]}),(0,A.jsxs)(`a`,{href:`#contact`,className:`\r
                relative\r
                z-10\r
                shrink-0\r
                inline-flex\r
                items-center\r
                \r
                gap-2\r
\r
                bg-white\r
                text-[#0057B8]\r
\r
                px-5\r
                sm:px-6\r
\r
                py-2.5\r
                sm:py-3\r
\r
                rounded-full\r
\r
                font-bold\r
                text-xs\r
                sm:text-sm\r
\r
                hover:bg-gradient-to-r\r
                hover:from-[#0057B8]\r
                hover:via-[#0057B8]\r
                hover:to-[#F16A24]\r
\r
                hover:text-white\r
                hover:scale-105\r
\r
                transition-all\r
                duration-300\r
                shadow-lg\r
              `,children:[`Talk To Our Experts`,(0,A.jsx)(di,{})]})]})})]})]})}var sh=[{id:1,image:`/sarathi-nx-frontend/assets/gallery1-CyUWSFfF.jpg`},{id:2,image:`/sarathi-nx-frontend/assets/gallery2-CZV2DA3F.jpg`},{id:3,image:`/sarathi-nx-frontend/assets/gallery3-CHP9Jbzb.jpg`},{id:4,image:`/sarathi-nx-frontend/assets/gallery4-yuoBubQ5.jpg`},{id:5,image:`/sarathi-nx-frontend/assets/gallery5-RZr0Yang.jpg`},{id:6,image:`/sarathi-nx-frontend/assets/gallery6-C_-q4Ke4.jpg`}];function ch(){let[e,t]=(0,b.useState)(null),n=e=>{t(e),document.body.style.overflow=`hidden`},r=()=>{t(null),document.body.style.overflow=`auto`},i=()=>{t(e=>(e+1)%sh.length)},a=()=>{t(e=>(e-1+sh.length)%sh.length)};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(`section`,{id:`gallery`,className:`\r
          relative\r
          w-full\r
          overflow-hidden\r
          bg-[#F8FAFC]\r
          pt-10\r
          pb-20\r
          md:pt-12\r
          md:pb-24\r
        `,children:[(0,A.jsx)(`div`,{className:`\r
            absolute\r
            -top-28\r
            -left-28\r
            w-[380px]\r
            h-[380px]\r
            rounded-full\r
            bg-[#0057B8]/5\r
            blur-3xl\r
            pointer-events-none\r
          `}),(0,A.jsx)(`div`,{className:`\r
            absolute\r
            top-[35%]\r
            -right-32\r
            w-[400px]\r
            h-[400px]\r
            rounded-full\r
            bg-[#F16A24]/5\r
            blur-3xl\r
            pointer-events-none\r
          `}),(0,A.jsx)(`div`,{className:`\r
            absolute\r
            bottom-0\r
            left-[30%]\r
            w-[420px]\r
            h-[220px]\r
            rounded-full\r
            bg-[#0057B8]/5\r
            blur-3xl\r
            pointer-events-none\r
          `}),(0,A.jsxs)(`div`,{className:`\r
            relative\r
            z-10\r
            max-w-7xl\r
            mx-auto\r
            px-5\r
            md:px-6\r
          `,children:[(0,A.jsx)($,{children:(0,A.jsxs)(`div`,{className:`\r
                flex\r
                items-center\r
                justify-center\r
                gap-[10px]\r
                mb-[7px]\r
              `,children:[(0,A.jsx)(`span`,{className:`\r
                  block\r
                  w-[49px]\r
                  h-[2px]\r
                  bg-gradient-to-r\r
                  from-[#0057B8]\r
                  to-[#F16A24]\r
                `}),(0,A.jsx)(`span`,{className:`\r
                  text-[13px]\r
                  font-bold\r
                  tracking-[3px]\r
                  uppercase\r
                  leading-none\r
                  bg-gradient-to-r\r
                  from-[#0057B8]\r
                  via-[#0057B8]\r
                  to-[#F16A24]\r
                  bg-clip-text\r
                  text-transparent\r
                `,children:`Our Gallery`}),(0,A.jsx)(`span`,{className:`\r
                  block\r
                  w-[49px]\r
                  h-[2px]\r
                  bg-gradient-to-r\r
                  from-[#F16A24]\r
                  to-[#0057B8]\r
                `})]})}),(0,A.jsx)($,{delay:.05,children:(0,A.jsxs)(`h2`,{className:`\r
                text-center\r
                font-extrabold\r
                tracking-[-1.8px]\r
                leading-[1.02]\r
                text-[42px]\r
                sm:text-[48px]\r
                md:text-[52px]\r
                lg:text-[58px]\r
                text-[#071B41]\r
              `,children:[`Explore Our`,` `,(0,A.jsx)(`span`,{className:`\r
                  bg-gradient-to-r\r
                  from-[#0057B8]\r
                  via-[#1454D8]\r
                  to-[#F16A24]\r
                  bg-clip-text\r
                  text-transparent\r
                `,children:`Travel Moments.`})]})}),(0,A.jsx)($,{delay:.08,children:(0,A.jsx)(`p`,{className:`\r
                max-w-[900px]\r
                mx-auto\r
                mt-[14px]\r
                mb-[34px]\r
                text-center\r
                text-[14px]\r
                md:text-[16px]\r
                leading-[1.55]\r
                font-normal\r
                text-[#303846]\r
              `,children:`A glimpse of our international exhibitions, business tours and corporate travel experiences across the world.`})}),(0,A.jsx)(Q.div,{initial:{opacity:0,y:35},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.08},transition:{duration:.8,ease:`easeOut`},className:`\r
              grid\r
              grid-cols-1\r
              sm:grid-cols-2\r
              lg:grid-cols-4\r
              gap-4\r
              md:gap-5\r
              auto-rows-[210px]\r
              md:auto-rows-[225px]\r
            `,children:sh.map((e,t)=>{let r=t===0||t===5||t===8,i=t===3||t===6;return(0,A.jsxs)(Q.div,{onClick:()=>n(t),whileHover:{y:-7},transition:{duration:.3,ease:`easeOut`},className:`
                    group
                    relative
                    overflow-hidden
                    rounded-[22px]
                    md:rounded-[26px]
                    cursor-pointer
                    bg-[#DDE5F0]
                    border
                    border-white
                    shadow-[0_8px_30px_rgba(7,27,65,0.08)]
                    hover:shadow-[0_22px_55px_rgba(0,87,184,0.18)]
                    transition-shadow
                    duration-500

                    ${r?`sm:col-span-2`:``}

                    ${i?`sm:row-span-2`:``}
                  `,children:[(0,A.jsx)(Q.img,{src:e.image,alt:`Sarathi NX travel experience ${t+1}`,loading:`lazy`,className:`\r
                      absolute\r
                      inset-0\r
                      w-full\r
                      h-full\r
                      object-cover\r
                      transition-transform\r
                      duration-[900ms]\r
                      ease-out\r
                    `,whileHover:{scale:1.09}}),(0,A.jsx)(`div`,{className:`\r
                      absolute\r
                      inset-0\r
                      bg-gradient-to-t\r
                      from-[#071B41]/90\r
                      via-[#071B41]/15\r
                      to-transparent\r
                      opacity-75\r
                      group-hover:opacity-95\r
                      transition-opacity\r
                      duration-500\r
                    `}),(0,A.jsx)(`div`,{className:`\r
                      absolute\r
                      inset-0\r
                      bg-gradient-to-br\r
                      from-[#0057B8]/20\r
                      via-transparent\r
                      to-[#F16A24]/25\r
                      opacity-0\r
                      group-hover:opacity-100\r
                      transition-opacity\r
                      duration-500\r
                    `}),(0,A.jsx)(`div`,{className:`\r
                      absolute\r
                      top-0\r
                      left-0\r
                      right-0\r
                      h-[3px]\r
                      bg-gradient-to-r\r
                      from-[#0057B8]\r
                      via-[#1454D8]\r
                      to-[#F16A24]\r
                      opacity-0\r
                      group-hover:opacity-100\r
                      transition-opacity\r
                      duration-500\r
                      z-20\r
                    `}),(0,A.jsxs)(`div`,{className:`\r
                      absolute\r
                      top-4\r
                      left-4\r
                      md:top-5\r
                      md:left-5\r
                      z-20\r
                      flex\r
                      items-center\r
                      gap-2\r
                      px-3\r
                      py-1.5\r
                      rounded-full\r
                      bg-white/15\r
                      backdrop-blur-md\r
                      border\r
                      border-white/25\r
                      text-white\r
                      text-[9px]\r
                      md:text-[10px]\r
                      font-bold\r
                      tracking-[1.5px]\r
                      uppercase\r
                      opacity-0\r
                      -translate-y-3\r
                      group-hover:opacity-100\r
                      group-hover:translate-y-0\r
                      transition-all\r
                      duration-500\r
                    `,children:[(0,A.jsx)(Ir,{className:`text-[9px]`}),`Sarathi NX`]}),(0,A.jsx)(`div`,{className:`\r
                      absolute\r
                      top-4\r
                      right-4\r
                      md:top-5\r
                      md:right-5\r
                      z-20\r
                      w-9\r
                      h-9\r
                      rounded-full\r
                      bg-black/20\r
                      backdrop-blur-md\r
                      border\r
                      border-white/25\r
                      flex\r
                      items-center\r
                      justify-center\r
                      text-white\r
                      text-[10px]\r
                      font-bold\r
                      tracking-[1px]\r
                    `,children:String(t+1).padStart(2,`0`)}),(0,A.jsx)(`div`,{className:`\r
                      absolute\r
                      inset-0\r
                      z-20\r
                      flex\r
                      items-center\r
                      justify-center\r
                    `,children:(0,A.jsx)(`div`,{className:`\r
                        w-[58px]\r
                        h-[58px]\r
                        md:w-[64px]\r
                        md:h-[64px]\r
                        rounded-full\r
                        bg-white/15\r
                        backdrop-blur-md\r
                        border\r
                        border-white/40\r
                        flex\r
                        items-center\r
                        justify-center\r
                        text-white\r
                        text-lg\r
                        scale-75\r
                        opacity-0\r
                        group-hover:scale-100\r
                        group-hover:opacity-100\r
                        transition-all\r
                        duration-500\r
                        shadow-[0_10px_35px_rgba(0,0,0,0.25)]\r
                      `,children:(0,A.jsx)(Cr,{})})}),(0,A.jsxs)(`div`,{className:`\r
                      absolute\r
                      left-0\r
                      right-0\r
                      bottom-0\r
                      z-20\r
                      p-5\r
                      md:p-6\r
                      translate-y-3\r
                      group-hover:translate-y-0\r
                      transition-transform\r
                      duration-500\r
                    `,children:[(0,A.jsx)(`p`,{className:`\r
                        text-white/65\r
                        text-[9px]\r
                        md:text-[10px]\r
                        uppercase\r
                        tracking-[2.5px]\r
                        font-semibold\r
                        mb-1.5\r
                      `,children:`Travel Experience`}),(0,A.jsx)(`h3`,{className:`\r
                        text-white\r
                        font-bold\r
                        text-base\r
                        md:text-lg\r
                        leading-tight\r
                        tracking-[-0.2px]\r
                      `,children:`International Travel Moments`}),(0,A.jsx)(`div`,{className:`\r
                        mt-3\r
                        h-[2px]\r
                        w-[35px]\r
                        bg-gradient-to-r\r
                        from-[#0057B8]\r
                        to-[#F16A24]\r
                        rounded-full\r
                        group-hover:w-[100px]\r
                        transition-all\r
                        duration-700\r
                      `})]}),(0,A.jsx)(`div`,{className:`\r
                      absolute\r
                      inset-0\r
                      rounded-[22px]\r
                      md:rounded-[26px]\r
                      border-2\r
                      border-transparent\r
                      group-hover:border-white/25\r
                      transition-all\r
                      duration-500\r
                      pointer-events-none\r
                      z-30\r
                    `})]},e.id)})}),(0,A.jsx)($,{delay:.2,children:(0,A.jsxs)(`div`,{className:`\r
                mt-9\r
                flex\r
                flex-col\r
                md:flex-row\r
                items-center\r
                justify-center\r
                gap-3\r
                text-center\r
              `,children:[(0,A.jsx)(`p`,{className:`\r
                  text-[#64748B]\r
                  text-[13px]\r
                  md:text-[14px]\r
                `,children:`Explore our journey across exhibitions, business destinations and global travel experiences.`}),(0,A.jsx)(`span`,{className:`\r
                  hidden\r
                  md:block\r
                  w-[28px]\r
                  h-[1px]\r
                  bg-gradient-to-r\r
                  from-[#0057B8]\r
                  to-[#F16A24]\r
                `}),(0,A.jsxs)(Nn,{to:`/gallery`,className:`\r
                  group\r
                  inline-flex\r
                  items-center\r
                  gap-2\r
                  text-[11px]\r
                  font-bold\r
                  uppercase\r
                  tracking-[1.5px]\r
                  bg-gradient-to-r\r
                  from-[#0057B8]\r
                  to-[#F16A24]\r
                  bg-clip-text\r
                  text-transparent\r
                  cursor-pointer\r
                  hover:opacity-80\r
                  transition-opacity\r
                  duration-300\r
                `,children:[`View Gallery`,(0,A.jsx)(di,{className:`\r
                    text-[#F16A24]\r
                    text-[9px]\r
                    transition-transform\r
                    duration-300\r
                    group-hover:translate-x-1\r
                  `})]})]})})]})]}),(0,A.jsx)(qf,{children:e!==null&&(0,A.jsxs)(Q.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},className:`\r
              fixed\r
              inset-0\r
              z-[9999]\r
              bg-[#020817]/95\r
              backdrop-blur-md\r
              flex\r
              items-center\r
              justify-center\r
              p-4\r
            `,onClick:r,children:[(0,A.jsxs)(`div`,{className:`\r
                absolute\r
                top-5\r
                left-5\r
                md:top-7\r
                md:left-8\r
                flex\r
                items-center\r
                gap-2\r
                text-white\r
                text-[10px]\r
                font-bold\r
                tracking-[2px]\r
                uppercase\r
                opacity-70\r
              `,children:[(0,A.jsx)(`span`,{className:`\r
                  w-[25px]\r
                  h-[2px]\r
                  bg-gradient-to-r\r
                  from-[#0057B8]\r
                  to-[#F16A24]\r
                `}),`Sarathi NX`]}),(0,A.jsx)(`button`,{type:`button`,onClick:r,"aria-label":`Close gallery`,className:`\r
                absolute\r
                top-5\r
                right-5\r
                md:top-7\r
                md:right-8\r
                z-50\r
                w-11\r
                h-11\r
                md:w-12\r
                md:h-12\r
                rounded-full\r
                bg-white/10\r
                hover:bg-gradient-to-r\r
                hover:from-[#0057B8]\r
                hover:to-[#F16A24]\r
                border\r
                border-white/20\r
                text-white\r
                flex\r
                items-center\r
                justify-center\r
                text-lg\r
                transition-all\r
                duration-300\r
              `,children:(0,A.jsx)(hr,{})}),(0,A.jsx)(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),a()},"aria-label":`Previous image`,className:`\r
                absolute\r
                left-3\r
                md:left-8\r
                z-50\r
                w-11\r
                h-11\r
                md:w-14\r
                md:h-14\r
                rounded-full\r
                bg-white/10\r
                hover:bg-gradient-to-r\r
                hover:from-[#0057B8]\r
                hover:to-[#F16A24]\r
                border\r
                border-white/20\r
                text-white\r
                flex\r
                items-center\r
                justify-center\r
                text-base\r
                md:text-lg\r
                transition-all\r
                duration-300\r
              `,children:(0,A.jsx)(ni,{})}),(0,A.jsxs)(Q.div,{initial:{opacity:0,scale:.88,y:15},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.88},transition:{duration:.35,ease:`easeOut`},onClick:e=>e.stopPropagation(),className:`\r
                relative\r
                max-w-6xl\r
                w-full\r
                max-h-[82vh]\r
                flex\r
                items-center\r
                justify-center\r
              `,children:[(0,A.jsx)(`img`,{src:sh[e].image,alt:`Travel moment ${e+1}`,className:`\r
                  max-w-full\r
                  max-h-[76vh]\r
                  object-contain\r
                  rounded-[18px]\r
                  md:rounded-[22px]\r
                  shadow-[0_30px_100px_rgba(0,0,0,0.65)]\r
                  border\r
                  border-white/10\r
                `}),(0,A.jsx)(`div`,{className:`\r
                  absolute\r
                  inset-0\r
                  rounded-[18px]\r
                  md:rounded-[22px]\r
                  border\r
                  border-white/10\r
                  pointer-events-none\r
                `})]},e),(0,A.jsx)(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),i()},"aria-label":`Next image`,className:`\r
                absolute\r
                right-3\r
                md:right-8\r
                z-50\r
                w-11\r
                h-11\r
                md:w-14\r
                md:h-14\r
                rounded-full\r
                bg-white/10\r
                hover:bg-gradient-to-r\r
                hover:from-[#0057B8]\r
                hover:to-[#F16A24]\r
                border\r
                border-white/20\r
                text-white\r
                flex\r
                items-center\r
                justify-center\r
                text-base\r
                md:text-lg\r
                transition-all\r
                duration-300\r
              `,children:(0,A.jsx)(ti,{})}),(0,A.jsxs)(`div`,{className:`\r
                absolute\r
                bottom-6\r
                left-1/2\r
                -translate-x-1/2\r
                flex\r
                items-center\r
                gap-3\r
                text-white/60\r
                text-[10px]\r
                tracking-[3px]\r
                font-semibold\r
              `,children:[(0,A.jsx)(`span`,{children:String(e+1).padStart(2,`0`)}),(0,A.jsx)(`span`,{className:`\r
                  w-[30px]\r
                  h-[1px]\r
                  bg-gradient-to-r\r
                  from-[#0057B8]\r
                  to-[#F16A24]\r
                `}),(0,A.jsx)(`span`,{children:String(sh.length).padStart(2,`0`)})]})]})})]})}var lh=[{id:1,name:`Rahul Sharma`,company:`ABC Technologies`,review:`Sarathi NX managed our international exhibition trip professionally. Everything was perfectly organized.`,rating:5},{id:2,name:`Priya Verma`,company:`XYZ Industries`,review:`Excellent support for visa processing and hotel bookings. Highly recommended.`,rating:5},{id:3,name:`Amit Patel`,company:`Global Exports`,review:`Professional team with excellent customer service. Looking forward to future collaborations.`,rating:5}];function uh(){let e=[lh,lh,lh];return(0,A.jsxs)(`section`,{id:`testimonials`,className:`\r
        relative\r
        py-10\r
        md:py-12\r
        bg-[#F5F9FF]\r
        overflow-hidden\r
      `,children:[(0,A.jsx)(`div`,{className:`\r
          absolute\r
          -top-24\r
          -left-24\r
          w-64\r
          h-64\r
          bg-[#0057B8]/5\r
          rounded-full\r
          blur-3xl\r
          pointer-events-none\r
        `}),(0,A.jsx)(`div`,{className:`\r
          absolute\r
          -bottom-24\r
          -right-24\r
          w-72\r
          h-72\r
          bg-[#fc6602]/5\r
          rounded-full\r
          blur-3xl\r
          pointer-events-none\r
        `}),(0,A.jsxs)(`div`,{className:`relative`,children:[(0,A.jsxs)(Q.div,{initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.6},className:`\r
            text-center\r
            px-6\r
            mb-8\r
          `,children:[(0,A.jsxs)(`div`,{className:`flex items-center justify-center gap-[10px] mb-[7px]`,children:[(0,A.jsx)(`span`,{className:`\r
                block\r
                w-[49px]\r
                h-[2px]\r
                bg-gradient-to-r\r
                from-[#0057B8]\r
                to-[#F16A24]\r
              `}),(0,A.jsx)(`span`,{className:`\r
                text-[13px]\r
                font-bold\r
                tracking-[3px]\r
                uppercase\r
                leading-none\r
                bg-gradient-to-r\r
                from-[#0057B8]\r
                via-[#0057B8]\r
                to-[#F16A24]\r
                bg-clip-text\r
                text-transparent\r
              `,children:`Client Reviews`}),(0,A.jsx)(`span`,{className:`\r
                block\r
                w-[49px]\r
                h-[2px]\r
                bg-gradient-to-r\r
                from-[#F16A24]\r
                to-[#0057B8]\r
              `})]}),(0,A.jsxs)(`h2`,{className:`\r
              text-center\r
              font-extrabold\r
              tracking-[-1.8px]\r
              leading-[1.02]\r
              text-[48px]\r
              md:text-[52px]\r
              lg:text-[58px]\r
              text-[#071B41]\r
            `,children:[`What Our`,` `,(0,A.jsx)(`span`,{className:`\r
                bg-gradient-to-r\r
                from-[#0057B8]\r
                via-[#1454D8]\r
                to-[#F16A24]\r
                bg-clip-text\r
                text-transparent\r
              `,children:`Clients Say.`})]}),(0,A.jsx)(`p`,{className:`\r
              max-w-[970px]\r
              mx-auto\r
              mt-[12px]\r
              text-center\r
              text-[16px]\r
              leading-[1.55]\r
              font-normal\r
              text-[#303846]\r
            `,children:`Trusted by professionals and businesses for reliable international exhibitions, corporate travel and global business journeys.`})]}),(0,A.jsx)(Q.div,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.08},className:`\r
            flex\r
            justify-center\r
            px-6\r
            mb-8\r
          `,children:(0,A.jsxs)(`div`,{className:`\r
              bg-white\r
              rounded-xl\r
              border\r
              border-gray-100\r
              shadow-[0_6px_25px_rgba(0,87,184,0.07)]\r
              px-5\r
              py-2.5\r
              flex\r
              flex-wrap\r
              justify-center\r
              items-center\r
              gap-4\r
              md:gap-7\r
            `,children:[(0,A.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,A.jsx)(`div`,{className:`\r
                  w-8\r
                  h-8\r
                  rounded-full\r
                  bg-gray-50\r
                  flex\r
                  items-center\r
                  justify-center\r
                `,children:(0,A.jsx)(sr,{className:`text-[#4285F4] text-sm`})}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{className:`font-bold text-gray-800 text-xs`,children:`Client Reviews`}),(0,A.jsx)(`div`,{className:`flex gap-0.5 mt-0.5`,children:[1,2,3,4,5].map(e=>(0,A.jsx)(yr,{className:`text-[#FBBF24] text-[9px]`},e))})]})]}),(0,A.jsx)(`div`,{className:`hidden md:block w-px h-7 bg-gray-200`}),(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,A.jsx)(`span`,{className:`text-xl font-extrabold text-gray-800`,children:`5.0`}),(0,A.jsx)(yr,{className:`text-[#FBBF24] text-sm`})]}),(0,A.jsx)(`p`,{className:`text-[10px] text-gray-400`,children:`Client satisfaction`})]}),(0,A.jsx)(`div`,{className:`hidden md:block w-px h-7 bg-gray-200`}),(0,A.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,A.jsx)(ii,{className:`text-[#0057B8] text-sm`}),(0,A.jsx)(`span`,{className:`text-xs font-semibold text-gray-600`,children:`Trusted Experiences`})]})]})}),(0,A.jsxs)(`div`,{className:`\r
            relative\r
            w-full\r
            overflow-hidden\r
          `,children:[(0,A.jsx)(`div`,{className:`\r
              absolute\r
              left-0\r
              top-0\r
              bottom-0\r
              w-10\r
              md:w-32\r
              bg-gradient-to-r\r
              from-[#F5F9FF]\r
              to-transparent\r
              z-20\r
              pointer-events-none\r
            `}),(0,A.jsx)(`div`,{className:`\r
              absolute\r
              right-0\r
              top-0\r
              bottom-0\r
              w-10\r
              md:w-32\r
              bg-gradient-to-l\r
              from-[#F5F9FF]\r
              to-transparent\r
              z-20\r
              pointer-events-none\r
            `}),(0,A.jsx)(`div`,{className:`\r
              testimonials-marquee\r
              flex\r
              w-max\r
              hover:[animation-play-state:paused]\r
            `,children:e.map((e,t)=>(0,A.jsx)(`div`,{className:`\r
                  flex\r
                  shrink-0\r
                  w-max\r
                `,children:e.map((e,n)=>{let r=e.name?.split(` `).map(e=>e[0]).join(``).slice(0,2).toUpperCase();return(0,A.jsx)(`div`,{className:`\r
                        shrink-0\r
                        w-[300px]\r
                        sm:w-[340px]\r
                        md:w-[370px]\r
                        pr-3\r
                      `,children:(0,A.jsxs)(Q.div,{whileHover:{y:-5},transition:{duration:.3},className:`\r
                          group\r
                          relative\r
                          bg-white\r
                          rounded-2xl\r
                          p-5\r
                          h-[285px]\r
                          border\r
                          border-gray-100\r
                          shadow-[0_7px_25px_rgba(15,23,42,0.06)]\r
                          hover:shadow-[0_15px_40px_rgba(0,87,184,0.14)]\r
                          transition-shadow\r
                          duration-500\r
                        `,children:[(0,A.jsx)(`div`,{className:`\r
                            absolute\r
                            top-0\r
                            left-5\r
                            right-5\r
                            h-[3px]\r
                            bg-gradient-to-r\r
                            from-[#F16A24]\r
                            to-[#0057B8]\r
                            rounded-b-full\r
                          `}),(0,A.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,A.jsx)(`div`,{className:`\r
                              w-9\r
                              h-9\r
                              rounded-xl\r
                              bg-[#FFF2EA]\r
                              flex\r
                              items-center\r
                              justify-center\r
                              group-hover:bg-[#0057B8]\r
                              transition-colors\r
                            `,children:(0,A.jsx)(wr,{className:`\r
                                text-[#F16A24]\r
                                group-hover:text-white\r
                                text-sm\r
                                transition-colors\r
                              `})}),(0,A.jsxs)(`div`,{className:`\r
                              flex\r
                              items-center\r
                              gap-1\r
                              text-[10px]\r
                              text-gray-400\r
                            `,children:[(0,A.jsx)(ii,{className:`text-[#0057B8]`}),`Verified Client`]})]}),(0,A.jsxs)(`div`,{className:`flex items-center gap-1 mt-3`,children:[[...Array(e.rating)].map((e,t)=>(0,A.jsx)(yr,{className:`text-[#FBBF24] text-xs`},t)),(0,A.jsxs)(`span`,{className:`text-[10px] text-gray-400 ml-1`,children:[e.rating,`.0`]})]}),(0,A.jsxs)(`p`,{className:`\r
                            text-gray-600\r
                            leading-6\r
                            text-[13px]\r
                            mt-3\r
                            line-clamp-3\r
                          `,children:[`"`,e.review,`"`]}),(0,A.jsxs)(`div`,{className:`\r
                            flex\r
                            items-center\r
                            gap-1.5\r
                            text-[10px]\r
                            text-gray-400\r
                            mt-3\r
                          `,children:[(0,A.jsx)(fi,{}),`Helpful experience`]}),(0,A.jsx)(`div`,{className:`\r
                            border-t\r
                            border-gray-100\r
                            mt-3\r
                            pt-3\r
                          `,children:(0,A.jsxs)(`div`,{className:`flex items-center gap-2.5`,children:[(0,A.jsx)(`div`,{className:`\r
                                w-9\r
                                h-9\r
                                rounded-full\r
                                bg-gradient-to-br\r
                                from-[#F16A24]\r
                                to-[#0057B8]\r
                                text-white\r
                                flex\r
                                items-center\r
                                justify-center\r
                                font-bold\r
                                text-xs\r
                                shadow-sm\r
                              `,children:r}),(0,A.jsxs)(`div`,{className:`min-w-0`,children:[(0,A.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,A.jsx)(`h3`,{className:`\r
                                    font-bold\r
                                    text-gray-800\r
                                    text-sm\r
                                    truncate\r
                                  `,children:e.name}),(0,A.jsx)(ii,{className:`\r
                                    text-[#0057B8]\r
                                    text-[9px]\r
                                    flex-shrink-0\r
                                  `})]}),(0,A.jsx)(`p`,{className:`\r
                                  text-[#0057B8]\r
                                  text-xs\r
                                  font-medium\r
                                  truncate\r
                                `,children:e.company})]})]})}),(0,A.jsx)(`div`,{className:`\r
                            absolute\r
                            inset-0\r
                            rounded-2xl\r
                            border-2\r
                            border-transparent\r
                            group-hover:border-[#0057B8]/10\r
                            pointer-events-none\r
                            transition-all\r
                          `})]})},`${t}-${e.id}-${n}`)})},`testimonial-set-${t}`))})]}),(0,A.jsxs)(Q.div,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},className:`\r
            text-center\r
            mt-7\r
            px-6\r
          `,children:[(0,A.jsx)(`p`,{className:`text-gray-500 text-xs md:text-sm`,children:`Planning your next business trip or international exhibition?`}),(0,A.jsx)(`a`,{href:`#contact`,className:`\r
              inline-flex\r
              items-center\r
              justify-center\r
              mt-2\r
              bg-gradient-to-r\r
              from-[#0057B8]\r
              via-[#0057B8]\r
              to-[#fc6602]\r
              hover:from-[#e95500]\r
              hover:to-[#004494]\r
              text-white\r
              px-5\r
              py-2.5\r
              rounded-full\r
              text-sm\r
              font-semibold\r
              transition-all\r
              duration-300\r
              hover:scale-105\r
              shadow-md\r
            `,children:`Plan Your Journey`})]})]}),(0,A.jsx)(`style`,{children:`
          /*
           * =====================================================
           * SEAMLESS TESTIMONIAL MARQUEE
           * =====================================================
           *
           * We have 3 EXACTLY IDENTICAL sets:
           *
           * [SET 1][SET 2][SET 3]
           *
           * The complete track is 3 sets wide.
           *
           * Moving -33.333333% means exactly ONE complete
           * testimonial set moves out.
           *
           * When animation restarts at 0%, the next identical
           * set is already in exactly the same position.
           *
           * Therefore:
           *
           * LAST CARD -> FIRST CARD
           *
           * with NO blank space.
           */

          .testimonials-marquee {
            animation: testimonialsSeamless 35s linear infinite;
            will-change: transform;
          }


          @keyframes testimonialsSeamless {

            0% {
              transform: translate3d(0, 0, 0);
            }

            100% {
              transform: translate3d(-33.333333%, 0, 0);
            }

          }


          /*
           * =====================================================
           * HOVER PAUSE
           * =====================================================
           */

          .testimonials-marquee:hover {
            animation-play-state: paused;
          }


          /*
           * =====================================================
           * MOBILE
           * =====================================================
           */

          @media (max-width: 640px) {

            .testimonials-marquee {
              animation-duration: 28s;
            }

          }


          /*
           * =====================================================
           * REDUCED MOTION
           * =====================================================
           */

          @media (prefers-reduced-motion: reduce) {

            .testimonials-marquee {
              animation-play-state: paused;
            }

          }

        `})]})}var dh=`/sarathi-nx-frontend/assets/world-map-DOTEf1o3.png`;function fh(){let[e,t]=(0,b.useState)({name:``,phone:``,email:``,service:``,message:``}),[n,r]=(0,b.useState)(!1),[i,a]=(0,b.useState)(``),[o,s]=(0,b.useState)(``),[c,l]=(0,b.useState)(null),u=e=>{let{name:n,value:r}=e.target;t(e=>({...e,[n]:r})),a(``),s(``)},d=e=>{let n=e.target.value.replace(/[^a-zA-Z\s.'-]/g,``).slice(0,100);t(e=>({...e,name:n})),a(``),s(``)},f=e=>{let n=e.target.value.replace(/\D/g,``).slice(0,10);t(e=>({...e,phone:n})),a(``),s(``)},p=()=>{let t=e.name.trim(),n=e.phone.trim(),r=e.email.trim(),i=e.service.trim(),a=e.message.trim();return!t||!n||!r||!i||!a?`Please fill in all the required fields.`:/^[a-zA-Z\s.'-]+$/.test(t)?/^[0-9]{10}$/.test(n)?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)?a.length<5?`Please enter a little more detail in your message.`:``:`Please enter a valid email address.`:`Please enter a valid 10-digit mobile number.`:`Please enter a valid name using letters only.`},m=async n=>{n.preventDefault(),a(``),s(``),l(null);let i=p();if(i){s(i);return}r(!0);try{let n={name:e.name.trim(),phone:e.phone.trim(),email:e.email.trim(),service:e.service.trim(),message:e.message.trim()};console.log(`Sending enquiry:`,n);let r=await fetch(`https://www.sarathinx.com/api/enquiries`,{method:`POST`,headers:{"Content-Type":`application/json`,Accept:`application/json`},body:JSON.stringify(n)});if(console.log(`API Status:`,r.status),!r.ok){let e=``;try{let t=await r.json();e=t?.message||t?.error||``}catch{}throw r.status===400?Error(e||`Invalid enquiry details. Please check your information.`):r.status===401?Error(`You are not authorized to submit this enquiry.`):r.status===403?Error(`Enquiry submission is blocked by the server. Please check the backend security configuration.`):r.status===404?Error(`Enquiry API was not found. Please check the backend URL.`):r.status>=500?Error(`Server error. Please try again after some time.`):Error(e||`Server returned ${r.status}.`)}let i=null;try{i=await r.json()}catch{i=null}console.log(`Enquiry saved successfully:`,i),l(n),a(`Thank you! Your enquiry has been submitted successfully. Our team will contact you shortly.`),t({name:``,phone:``,email:``,service:``,message:``})}catch(e){console.error(`Enquiry submission error:`,e),e instanceof TypeError&&e.message===`Failed to fetch`?s(`Unable to connect to the server. Please make sure the Spring Boot backend is running on port 8080.`):s(e?.message||`Unable to submit enquiry. Please try again.`)}finally{r(!1)}},h=()=>{if(!c)return;let e=`
Hello Sarathi NX,

I have submitted a travel enquiry through your website.

Name: ${c.name}
Mobile: ${c.phone}
Email: ${c.email}
Interested In: ${c.service}

Message:
${c.message}

Thank you.
    `.trim(),t=`https://wa.me/917666984626?text=${encodeURIComponent(e)}`;window.open(t,`_blank`,`noopener,noreferrer`)},g=[{icon:Dr,label:`CALL US`,content:(0,A.jsxs)(`div`,{className:`flex flex-wrap items-center gap-x-3 gap-y-1`,children:[(0,A.jsx)(`a`,{href:`tel:+917666984626`,className:`hover:text-[#fc6602] transition-colors`,children:`+91 766 698 4626`}),(0,A.jsx)(`span`,{className:`hidden sm:inline text-white/40`,children:`|`}),(0,A.jsx)(`a`,{href:`tel:+918657867181`,className:`hover:text-[#fc6602] transition-colors`,children:`+91 865 786 7181`})]})},{icon:Xr,label:`EMAIL US`,content:(0,A.jsx)(`a`,{href:`mailto:sajid@sarathinx.com`,className:`hover:text-[#fc6602] transition-colors break-all`,children:`sajid@sarathinx.com`})},{icon:Mr,label:`OUR OFFICE`,content:(0,A.jsxs)(`div`,{className:`leading-5`,children:[`1st Floor, Office No. 026, Crystal Plaza CHS Ltd,`,(0,A.jsx)(`br`,{}),`Station Road, Mira Road East, Thane - 401107`]})},{icon:ei,label:`WORKING HOURS`,content:(0,A.jsxs)(`div`,{className:`flex flex-wrap items-center gap-x-3 gap-y-1`,children:[(0,A.jsx)(`span`,{children:`Monday - Saturday`}),(0,A.jsx)(`span`,{className:`hidden sm:inline text-white/40`,children:`|`}),(0,A.jsx)(`span`,{className:`text-white/85`,children:`9:30 AM - 7:00 PM`})]})}],_=[{icon:Qr,title:`Expert Assistance`,text:`Dedicated travel experts to assist you 24/7`},{icon:Gr,title:`Global Support`,text:`Worldwide network & trusted partners`},{icon:Sr,title:`Reliable Service`,text:`Prompt, reliable & transparent solutions`},{icon:gr,title:`Customer First`,text:`Your journey is our priority`}];return(0,A.jsxs)(`section`,{id:`contact`,className:`\r
        relative\r
        overflow-hidden\r
        bg-[#F5F8FC]\r
        py-14\r
        md:py-16\r
        lg:py-20\r
      `,children:[(0,A.jsx)(`div`,{className:`\r
          absolute\r
          -top-32\r
          -left-32\r
          w-96\r
          h-96\r
          rounded-full\r
          bg-blue-100/40\r
          blur-3xl\r
          pointer-events-none\r
        `}),(0,A.jsx)(`div`,{className:`\r
          absolute\r
          -bottom-32\r
          -right-32\r
          w-96\r
          h-96\r
          rounded-full\r
          bg-orange-100/40\r
          blur-3xl\r
          pointer-events-none\r
        `}),(0,A.jsxs)(`div`,{className:`relative z-10 max-w-7xl mx-auto px-5 md:px-8`,children:[(0,A.jsx)($,{children:(0,A.jsxs)(`div`,{className:`text-center max-w-3xl mx-auto mb-8 md:mb-10`,children:[(0,A.jsxs)(`div`,{className:`flex items-center justify-center gap-[10px] mb-[7px]`,children:[(0,A.jsx)(`span`,{className:`\r
                  block\r
                  w-[49px]\r
                  h-[2px]\r
                  bg-gradient-to-r\r
                  from-[#0057B8]\r
                  to-[#F16A24]\r
                `}),(0,A.jsx)(`span`,{className:`\r
                  text-[13px]\r
                  font-bold\r
                  tracking-[3px]\r
                  uppercase\r
                  leading-none\r
                  bg-gradient-to-r\r
                  from-[#0057B8]\r
                  via-[#0057B8]\r
                  to-[#F16A24]\r
                  bg-clip-text\r
                  text-transparent\r
                `,children:`CONTACT US`}),(0,A.jsx)(`span`,{className:`\r
                  block\r
                  w-[49px]\r
                  h-[2px]\r
                  bg-gradient-to-r\r
                  from-[#F16A24]\r
                  to-[#0057B8]\r
                `})]}),(0,A.jsxs)(`h2`,{className:`\r
                text-center\r
                font-extrabold\r
                tracking-[-1.8px]\r
                leading-[1.02]\r
                text-[42px]\r
                sm:text-[46px]\r
                md:text-[52px]\r
                lg:text-[58px]\r
                text-[#071B41]\r
              `,children:[`Let's Plan Your`,` `,(0,A.jsx)(`span`,{className:`\r
                  bg-gradient-to-r\r
                  from-[#0057B8]\r
                  via-[#1454D8]\r
                  to-[#F16A24]\r
                  bg-clip-text\r
                  text-transparent\r
                `,children:`Journey.`})]}),(0,A.jsxs)(`div`,{className:`\r
                flex\r
                flex-wrap\r
                items-center\r
                justify-center\r
                gap-[10px]\r
                mt-[10px]\r
                text-center\r
              `,children:[(0,A.jsx)(`span`,{className:`\r
                  text-[18px]\r
                  md:text-[20px]\r
                  font-bold\r
                  leading-none\r
                  text-[#E76624]\r
                `,children:`Expert Travel Assistance`}),(0,A.jsx)(`span`,{className:`\r
                  text-[18px]\r
                  md:text-[20px]\r
                  font-bold\r
                  leading-none\r
                  text-[#19396D]\r
                `,children:`|`}),(0,A.jsx)(`span`,{className:`\r
                  text-[18px]\r
                  md:text-[20px]\r
                  font-bold\r
                  leading-none\r
                  text-[#19396D]\r
                `,children:`Let's make your journey simple.`})]}),(0,A.jsx)(`p`,{className:`\r
                max-w-[850px]\r
                mx-auto\r
                mt-[14px]\r
                text-center\r
                text-[15px]\r
                md:text-[16px]\r
                leading-[1.55]\r
                font-normal\r
                text-[#40516D]\r
              `,children:`Planning an exhibition, business trip or corporate journey? Talk to our travel experts and let us take care of the details.`})]})}),(0,A.jsxs)(`div`,{className:`\r
            grid\r
            lg:grid-cols-[1.215fr_1.045fr]\r
            gap-5\r
            lg:gap-6\r
            items-stretch\r
          `,children:[(0,A.jsx)($,{direction:`left`,children:(0,A.jsxs)(`div`,{className:`\r
                relative\r
                overflow-hidden\r
                h-full\r
                min-h-[600px]\r
                rounded-[24px]\r
                bg-gradient-to-br\r
                from-[#061F52]\r
                via-[#062C70]\r
                to-[#003D8F]\r
                px-6\r
                py-7\r
                md:px-8\r
                md:py-8\r
                text-white\r
                shadow-[0_20px_60px_rgba(0,48,120,0.20)]\r
              `,children:[(0,A.jsx)(`img`,{src:dh,alt:``,"aria-hidden":`true`,className:`\r
                  absolute\r
                  top-0\r
                  right-0\r
                  w-[65%]\r
                  md:w-[60%]\r
                  lg:w-[58%]\r
                  h-auto\r
                  opacity-[0.18]\r
                  pointer-events-none\r
                  select-none\r
                  object-contain\r
                  object-right-top\r
                `}),(0,A.jsx)(`div`,{className:`\r
                  absolute\r
                  -top-20\r
                  -right-20\r
                  w-48\r
                  h-48\r
                  rounded-full\r
                  bg-white/[0.04]\r
                  pointer-events-none\r
                `}),(0,A.jsx)(`div`,{className:`\r
                  absolute\r
                  -bottom-24\r
                  -left-20\r
                  w-56\r
                  h-56\r
                  rounded-full\r
                  bg-[#fc6602]/10\r
                  pointer-events-none\r
                `}),(0,A.jsxs)(`div`,{className:`relative z-10 h-full flex flex-col`,children:[(0,A.jsxs)(`div`,{className:`mb-6`,children:[(0,A.jsxs)(`div`,{className:`flex items-center gap-2 mb-3`,children:[(0,A.jsx)(kr,{className:`\r
                        text-[#fc6602]\r
                        text-lg\r
                        rotate-[-10deg]\r
                      `}),(0,A.jsx)(`span`,{className:`\r
                        uppercase\r
                        tracking-[2.5px]\r
                        text-[11px]\r
                        md:text-xs\r
                        font-bold\r
                        text-[#fc6602]\r
                      `,children:`We're Here To Help`})]}),(0,A.jsxs)(`h3`,{className:`\r
                      text-3xl\r
                      md:text-4xl\r
                      font-extrabold\r
                      leading-[1.15]\r
                      max-w-md\r
                    `,children:[`Connect With Our`,(0,A.jsx)(`br`,{}),`Travel Experts`]}),(0,A.jsx)(`div`,{className:`\r
                      mt-4\r
                      w-20\r
                      h-[3px]\r
                      bg-gradient-to-r\r
                      from-[#fc6602]\r
                      to-transparent\r
                    `}),(0,A.jsx)(`p`,{className:`\r
                      mt-4\r
                      text-sm\r
                      md:text-base\r
                      text-white/85\r
                      leading-6\r
                      max-w-xl\r
                    `,children:`Get expert assistance for exhibitions, corporate trips, business travel and visa support.`})]}),(0,A.jsx)(`div`,{className:`space-y-2.5`,children:g.map((e,t)=>{let n=e.icon;return(0,A.jsxs)(`div`,{className:`\r
                          group\r
                          flex\r
                          items-center\r
                          gap-4\r
                          rounded-[15px]\r
                          border\r
                          border-white/[0.10]\r
                          bg-white/[0.07]\r
                          px-3\r
                          py-3\r
                          md:px-3.5\r
                          md:py-3\r
                          backdrop-blur-sm\r
                          hover:bg-white/[0.12]\r
                          hover:border-white/[0.18]\r
                          transition-all\r
                          duration-300\r
                        `,children:[(0,A.jsx)(`div`,{className:`\r
                            w-11\r
                            h-11\r
                            md:w-12\r
                            md:h-12\r
                            shrink-0\r
                            rounded-full\r
                            bg-[#06285F]\r
                            border\r
                            border-white/10\r
                            flex\r
                            items-center\r
                            justify-center\r
                            text-[#fc6602]\r
                            shadow-inner\r
                            group-hover:scale-105\r
                            transition-transform\r
                            duration-300\r
                          `,children:(0,A.jsx)(n,{className:`text-base md:text-lg`})}),(0,A.jsxs)(`div`,{className:`\r
                            min-w-0\r
                            text-[13px]\r
                            md:text-sm\r
                            leading-5\r
                          `,children:[(0,A.jsx)(`p`,{className:`\r
                              text-[#fc6602]\r
                              text-[10px]\r
                              md:text-[11px]\r
                              uppercase\r
                              tracking-wide\r
                              font-bold\r
                              mb-0.5\r
                            `,children:e.label}),(0,A.jsx)(`div`,{className:`font-medium text-white`,children:e.content})]})]},t)})}),(0,A.jsxs)(`a`,{href:`https://wa.me/917666984626`,target:`_blank`,rel:`noopener noreferrer`,className:`\r
                    whatsapp-pulse\r
                    group\r
                    mt-4\r
                    w-full\r
                    flex\r
                    items-center\r
                    justify-between\r
                    gap-3\r
                    rounded-[14px]\r
                    px-4\r
                    py-3\r
                    bg-gradient-to-r\r
                    from-[#00AEEF]\r
                    via-[#1669D8]\r
                    to-[#fc6602]\r
                    shadow-[0_10px_30px_rgba(0,0,0,0.20)]\r
                    hover:shadow-[0_14px_35px_rgba(252,102,2,0.30)]\r
                    transition-all\r
                    duration-300\r
                  `,children:[(0,A.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,A.jsx)(`div`,{className:`\r
                        w-10\r
                        h-10\r
                        rounded-full\r
                        bg-[#25D366]\r
                        flex\r
                        items-center\r
                        justify-center\r
                        shadow-lg\r
                      `,children:(0,A.jsx)(ir,{className:`text-xl text-white`})}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{className:`font-bold text-sm`,children:`Chat with us on WhatsApp`}),(0,A.jsx)(`p`,{className:`text-[11px] text-white/85`,children:`Quick responses for your travel queries`})]})]}),(0,A.jsx)(di,{className:`\r
                      text-white\r
                      group-hover:translate-x-1\r
                      transition-transform\r
                    `})]})]})]})}),(0,A.jsx)($,{direction:`right`,children:(0,A.jsxs)(`div`,{className:`\r
                h-full\r
                bg-white\r
                rounded-[24px]\r
                px-6\r
                py-7\r
                md:px-7\r
                md:py-8\r
                border\r
                border-gray-100\r
                shadow-[0_20px_55px_rgba(20,40,80,0.08)]\r
              `,children:[(0,A.jsxs)(`div`,{className:`\r
                  flex\r
                  items-start\r
                  justify-between\r
                  gap-4\r
                  mb-7\r
                `,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`span`,{className:`\r
                      uppercase\r
                      tracking-[2.5px]\r
                      text-[11px]\r
                      font-bold\r
                      text-[#fc6602]\r
                    `,children:`Send An Enquiry`}),(0,A.jsx)(`h3`,{className:`\r
                      text-2xl\r
                      md:text-[30px]\r
                      font-extrabold\r
                      text-[#0A2144]\r
                      mt-1.5\r
                      leading-tight\r
                    `,children:`Tell Us About Your Trip`}),(0,A.jsx)(`p`,{className:`\r
                      text-gray-500\r
                      text-xs\r
                      md:text-sm\r
                      mt-2\r
                      leading-5\r
                      max-w-[430px]\r
                    `,children:`Share your requirements and our team will get back to you.`})]}),(0,A.jsx)(`div`,{className:`\r
                    hidden\r
                    sm:flex\r
                    w-12\r
                    h-12\r
                    shrink-0\r
                    rounded-xl\r
                    bg-gradient-to-br\r
                    from-[#fc6602]\r
                    to-[#0057B8]\r
                    text-white\r
                    items-center\r
                    justify-center\r
                    shadow-lg\r
                    rotate-3\r
                  `,children:(0,A.jsx)(kr,{className:`text-lg rotate-[-8deg]`})})]}),i&&(0,A.jsxs)(`div`,{className:`\r
                    mb-5\r
                    rounded-xl\r
                    border\r
                    border-green-200\r
                    bg-green-50\r
                    px-4\r
                    py-3\r
                    flex\r
                    items-start\r
                    gap-3\r
                  `,children:[(0,A.jsx)(ii,{className:`\r
                      text-green-600\r
                      mt-0.5\r
                      shrink-0\r
                    `}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{className:`\r
                        text-sm\r
                        font-bold\r
                        text-green-700\r
                      `,children:`Enquiry Submitted`}),(0,A.jsx)(`p`,{className:`\r
                        mt-0.5\r
                        text-xs\r
                        leading-5\r
                        text-green-700\r
                      `,children:i})]})]}),o&&(0,A.jsxs)(`div`,{className:`\r
                    mb-5\r
                    rounded-xl\r
                    border\r
                    border-red-200\r
                    bg-red-50\r
                    px-4\r
                    py-3\r
                    flex\r
                    items-start\r
                    gap-3\r
                  `,children:[(0,A.jsx)(Yr,{className:`\r
                      text-red-600\r
                      mt-0.5\r
                      shrink-0\r
                    `}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{className:`\r
                        text-sm\r
                        font-bold\r
                        text-red-700\r
                      `,children:`Submission Failed`}),(0,A.jsx)(`p`,{className:`\r
                        mt-0.5\r
                        text-xs\r
                        leading-5\r
                        text-red-700\r
                      `,children:o})]})]}),(0,A.jsxs)(`form`,{onSubmit:m,className:`space-y-4`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`label`,{className:`\r
                      block\r
                      text-[11px]\r
                      font-bold\r
                      text-[#182B49]\r
                      mb-1.5\r
                    `,children:`Full Name`}),(0,A.jsxs)(`div`,{className:`relative`,children:[(0,A.jsx)(dr,{className:`\r
                        absolute\r
                        left-4\r
                        top-1/2\r
                        -translate-y-1/2\r
                        text-[#52637C]\r
                        text-sm\r
                        pointer-events-none\r
                      `}),(0,A.jsx)(`input`,{type:`text`,name:`name`,value:e.name,onChange:d,required:!0,autoComplete:`name`,maxLength:100,placeholder:`Enter your name`,className:`\r
                        w-full\r
                        h-12\r
                        pl-11\r
                        pr-4\r
                        rounded-xl\r
                        bg-white\r
                        border\r
                        border-gray-200\r
                        text-sm\r
                        text-[#182B49]\r
                        placeholder:text-gray-400\r
                        outline-none\r
                        focus:border-[#0057B8]\r
                        focus:ring-4\r
                        focus:ring-blue-50\r
                        transition-all\r
                      `})]})]}),(0,A.jsxs)(`div`,{className:`\r
                    grid\r
                    sm:grid-cols-[0.85fr_1.15fr]\r
                    gap-3\r
                  `,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`label`,{className:`\r
                        block\r
                        text-[11px]\r
                        font-bold\r
                        text-[#182B49]\r
                        mb-1.5\r
                      `,children:`Phone Number`}),(0,A.jsxs)(`div`,{className:`relative`,children:[(0,A.jsx)(Dr,{className:`\r
                          absolute\r
                          left-4\r
                          top-1/2\r
                          -translate-y-1/2\r
                          text-[#52637C]\r
                          text-sm\r
                          pointer-events-none\r
                        `}),(0,A.jsx)(`input`,{type:`tel`,name:`phone`,value:e.phone,onChange:f,required:!0,inputMode:`numeric`,pattern:`[0-9]{10}`,maxLength:10,minLength:10,autoComplete:`tel`,placeholder:`10-digit mobile`,className:`\r
                          w-full\r
                          h-12\r
                          pl-11\r
                          pr-3\r
                          rounded-xl\r
                          bg-white\r
                          border\r
                          border-gray-200\r
                          text-sm\r
                          text-[#182B49]\r
                          placeholder:text-gray-400\r
                          outline-none\r
                          focus:border-[#0057B8]\r
                          focus:ring-4\r
                          focus:ring-blue-50\r
                          transition-all\r
                        `})]})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`label`,{className:`\r
                        block\r
                        text-[11px]\r
                        font-bold\r
                        text-[#182B49]\r
                        mb-1.5\r
                      `,children:`Email Address`}),(0,A.jsxs)(`div`,{className:`relative`,children:[(0,A.jsx)(Xr,{className:`\r
                          absolute\r
                          left-4\r
                          top-1/2\r
                          -translate-y-1/2\r
                          text-[#52637C]\r
                          text-sm\r
                          pointer-events-none\r
                        `}),(0,A.jsx)(`input`,{type:`email`,name:`email`,value:e.email,onChange:u,required:!0,autoComplete:`email`,placeholder:`Enter your email`,className:`\r
                          w-full\r
                          h-12\r
                          pl-11\r
                          pr-3\r
                          rounded-xl\r
                          bg-white\r
                          border\r
                          border-gray-200\r
                          text-sm\r
                          text-[#182B49]\r
                          placeholder:text-gray-400\r
                          outline-none\r
                          focus:border-[#0057B8]\r
                          focus:ring-4\r
                          focus:ring-blue-50\r
                          transition-all\r
                        `})]})]})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`label`,{className:`\r
                      block\r
                      text-[11px]\r
                      font-bold\r
                      text-[#182B49]\r
                      mb-1.5\r
                    `,children:`Service Required`}),(0,A.jsxs)(`div`,{className:`relative`,children:[(0,A.jsx)(_r,{className:`\r
                        absolute\r
                        left-4\r
                        top-1/2\r
                        -translate-y-1/2\r
                        text-[#52637C]\r
                        text-sm\r
                        pointer-events-none\r
                        z-10\r
                      `}),(0,A.jsxs)(`select`,{name:`service`,value:e.service,onChange:u,required:!0,className:`\r
                        appearance-none\r
                        w-full\r
                        h-12\r
                        pl-11\r
                        pr-10\r
                        rounded-xl\r
                        bg-white\r
                        border\r
                        border-gray-200\r
                        text-sm\r
                        text-[#182B49]\r
                        outline-none\r
                        focus:border-[#0057B8]\r
                        focus:ring-4\r
                        focus:ring-blue-50\r
                        transition-all\r
                      `,children:[(0,A.jsx)(`option`,{value:``,disabled:!0,children:`Select a service`}),(0,A.jsx)(`option`,{value:`International Exhibition Travel`,children:`International Exhibition Travel`}),(0,A.jsx)(`option`,{value:`Corporate Travel`,children:`Corporate Travel`}),(0,A.jsx)(`option`,{value:`Business Travel`,children:`Business Travel`}),(0,A.jsx)(`option`,{value:`Visa Assistance`,children:`Visa Assistance`}),(0,A.jsx)(`option`,{value:`Hotel Booking`,children:`Hotel Booking`}),(0,A.jsx)(`option`,{value:`Group Tours`,children:`Group Tours`})]}),(0,A.jsx)(`span`,{className:`\r
                        pointer-events-none\r
                        absolute\r
                        right-4\r
                        top-1/2\r
                        -translate-y-1/2\r
                        text-[#40516D]\r
                      `,children:`▾`})]})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`label`,{className:`\r
                      block\r
                      text-[11px]\r
                      font-bold\r
                      text-[#182B49]\r
                      mb-1.5\r
                    `,children:`Message`}),(0,A.jsxs)(`div`,{className:`relative`,children:[(0,A.jsx)(Qr,{className:`\r
                        absolute\r
                        left-4\r
                        top-4\r
                        text-[#52637C]\r
                        text-sm\r
                        pointer-events-none\r
                      `}),(0,A.jsx)(`textarea`,{name:`message`,value:e.message,onChange:u,required:!0,rows:5,maxLength:1e3,placeholder:`Tell us about your travel requirements...`,className:`\r
                        w-full\r
                        pl-11\r
                        pr-4\r
                        py-3.5\r
                        rounded-xl\r
                        bg-white\r
                        border\r
                        border-gray-200\r
                        text-sm\r
                        text-[#182B49]\r
                        placeholder:text-gray-400\r
                        outline-none\r
                        resize-none\r
                        focus:border-[#0057B8]\r
                        focus:ring-4\r
                        focus:ring-blue-50\r
                        transition-all\r
                      `})]})]}),(0,A.jsx)(`button`,{type:`submit`,disabled:n,className:`\r
                    group\r
                    w-full\r
                    h-[52px]\r
                    mt-2\r
                    inline-flex\r
                    items-center\r
                    justify-center\r
                    gap-3\r
                    bg-gradient-to-r\r
                    from-[#0057B8]\r
                    via-[#0753B5]\r
                    to-[#fc6602]\r
                    text-white\r
                    rounded-xl\r
                    font-bold\r
                    text-sm\r
                    shadow-[0_10px_25px_rgba(0,87,184,0.20)]\r
                    hover:shadow-[0_14px_30px_rgba(0,87,184,0.28)]\r
                    hover:-translate-y-0.5\r
                    transition-all\r
                    duration-300\r
                    overflow-hidden\r
                    disabled:opacity-60\r
                    disabled:cursor-not-allowed\r
                    disabled:hover:translate-y-0\r
                  `,children:n?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`span`,{className:`\r
                          w-4\r
                          h-4\r
                          border-2\r
                          border-white/30\r
                          border-t-white\r
                          rounded-full\r
                          animate-spin\r
                        `}),(0,A.jsx)(`span`,{children:`Submitting...`})]}):(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`span`,{children:`Send Enquiry`}),(0,A.jsx)(kr,{className:`\r
                          text-sm\r
                          rotate-[-8deg]\r
                          group-hover:translate-x-2\r
                          group-hover:-translate-y-1\r
                          transition-transform\r
                          duration-500\r
                        `})]})}),c&&!n&&(0,A.jsxs)(`button`,{type:`button`,onClick:h,className:`\r
                      group\r
                      w-full\r
                      h-[48px]\r
                      inline-flex\r
                      items-center\r
                      justify-center\r
                      gap-3\r
                      bg-[#25D366]\r
                      hover:bg-[#1ebe5d]\r
                      text-white\r
                      rounded-xl\r
                      font-bold\r
                      text-sm\r
                      shadow-[0_8px_20px_rgba(37,211,102,0.20)]\r
                      hover:shadow-[0_12px_25px_rgba(37,211,102,0.28)]\r
                      transition-all\r
                      duration-300\r
                    `,children:[(0,A.jsx)(ir,{className:`\r
                        text-lg\r
                        group-hover:scale-110\r
                        transition-transform\r
                      `}),(0,A.jsx)(`span`,{children:`Continue on WhatsApp`}),(0,A.jsx)(di,{className:`\r
                        text-xs\r
                        group-hover:translate-x-1\r
                        transition-transform\r
                      `})]})]})]})})]}),(0,A.jsx)($,{children:(0,A.jsx)(`div`,{className:`\r
              mt-5\r
              bg-white\r
              rounded-[20px]\r
              border\r
              border-gray-100\r
              shadow-[0_12px_40px_rgba(20,40,80,0.06)]\r
              px-5\r
              py-5\r
              md:px-7\r
              md:py-6\r
            `,children:(0,A.jsx)(`div`,{className:`\r
                grid\r
                grid-cols-1\r
                sm:grid-cols-2\r
                lg:grid-cols-4\r
              `,children:_.map((e,t)=>{let n=e.icon;return(0,A.jsxs)(`div`,{className:`
                      flex
                      items-center
                      gap-4
                      px-3
                      md:px-5
                      py-3
                      ${t===_.length-1?``:`lg:border-r border-gray-200`}
                    `,children:[(0,A.jsx)(`div`,{className:`\r
                        w-12\r
                        h-12\r
                        shrink-0\r
                        rounded-full\r
                        bg-[#082C68]\r
                        text-white\r
                        flex\r
                        items-center\r
                        justify-center\r
                        shadow-[0_6px_18px_rgba(0,55,130,0.18)]\r
                      `,children:(0,A.jsx)(n,{className:`text-lg`})}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h4`,{className:`\r
                          text-sm\r
                          font-extrabold\r
                          text-[#0A3A82]\r
                        `,children:e.title}),(0,A.jsx)(`p`,{className:`\r
                          mt-1\r
                          text-xs\r
                          md:text-[13px]\r
                          text-gray-600\r
                          leading-5\r
                          max-w-[190px]\r
                        `,children:e.text})]})]},t)})})})})]}),(0,A.jsx)(`style`,{children:`

        @keyframes whatsappPulse {

          0%,
          100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.015);
          }

        }

        .whatsapp-pulse {
          animation: whatsappPulse 2.5s ease-in-out infinite;
        }

        .whatsapp-pulse:hover {
          animation-play-state: paused;
          transform: scale(1.02);
        }

      `})]})}var ph=[{title:`Home`,href:`/`},{title:`About Us`,href:`/about`},{title:`Services`,href:`/services`},{title:`Exhibitions`,href:`/exhibitions`},{title:`Gallery`,href:`/gallery`},{title:`Contact Us`,href:`/contact`}],mh=[`Flights & Air Travel`,`Hotels & Accommodation`,`Visa & Travel Documentation`,`Travel Insurance & Forex`,`Transfers & Car Rentals`,`Domestic & International Holidays`,`Cruise & Ferry Bookings`,`Business & Corporate Travel`,`MICE & Exhibition Travel`,`Group & Customized Tours`];function hh(){return(0,A.jsxs)(`footer`,{className:`\r
        relative\r
        overflow-hidden\r
        bg-[#031B4E]\r
        text-white\r
        rounded-t-[28px]\r
      `,children:[(0,A.jsxs)(`div`,{className:`\r
          absolute\r
          inset-0\r
          pointer-events-none\r
          overflow-hidden\r
        `,children:[(0,A.jsx)(`div`,{className:`\r
            absolute\r
            -left-32\r
            -bottom-32\r
            w-[520px]\r
            h-[520px]\r
            rounded-full\r
            bg-[#0057B8]/20\r
            blur-3xl\r
          `}),(0,A.jsx)(`div`,{className:`\r
            absolute\r
            right-[-180px]\r
            top-[-180px]\r
            w-[500px]\r
            h-[500px]\r
            rounded-full\r
            bg-[#0057B8]/10\r
            blur-3xl\r
          `}),(0,A.jsx)(`div`,{className:`\r
            absolute\r
            left-[-70px]\r
            bottom-[-220px]\r
            w-[650px]\r
            h-[650px]\r
            rounded-full\r
            border\r
            border-[#0057B8]/20\r
          `}),(0,A.jsx)(`div`,{className:`\r
            absolute\r
            left-[-10px]\r
            bottom-[-160px]\r
            w-[520px]\r
            h-[520px]\r
            rounded-full\r
            border\r
            border-[#fc6602]/15\r
          `}),(0,A.jsx)(`div`,{className:`\r
            absolute\r
            left-[70px]\r
            bottom-[-100px]\r
            w-[380px]\r
            h-[380px]\r
            rounded-full\r
            border\r
            border-white/[0.04]\r
          `}),(0,A.jsx)(`div`,{className:`\r
            absolute\r
            left-[50px]\r
            bottom-[30px]\r
            w-[500px]\r
            h-[180px]\r
            border-t\r
            border-[#fc6602]/20\r
            rounded-[50%]\r
            rotate-[-12deg]\r
          `}),(0,A.jsx)(`div`,{className:`\r
            absolute\r
            left-[80px]\r
            bottom-[60px]\r
            w-[430px]\r
            h-[150px]\r
            border-t\r
            border-[#0057B8]/30\r
            rounded-[50%]\r
            rotate-[8deg]\r
          `})]}),(0,A.jsx)(`div`,{className:`\r
          relative\r
          z-10\r
          max-w-[1450px]\r
          mx-auto\r
          px-6\r
          md:px-10\r
          lg:px-14\r
          py-12\r
          md:py-14\r
        `,children:(0,A.jsxs)(`div`,{className:`\r
            grid\r
            grid-cols-1\r
            sm:grid-cols-2\r
            lg:grid-cols-[1.3fr_0.8fr_1.15fr_1.35fr]\r
          `,children:[(0,A.jsxs)(`div`,{className:`\r
              pr-0\r
              lg:pr-10\r
              pb-10\r
              lg:pb-0\r
            `,children:[(0,A.jsx)(Nn,{to:`/`,className:`\r
                inline-flex\r
                items-center\r
                justify-center\r
                bg-white\r
                rounded-2xl\r
                px-5\r
                py-4\r
                shadow-[0_10px_30px_rgba(0,0,0,0.20)]\r
                hover:-translate-y-1\r
                transition-all\r
                duration-300\r
              `,children:(0,A.jsx)(`img`,{src:`/sarathi-nx-frontend/sarathi-logo.png`,alt:`Sarathi NX`,className:`\r
                  w-52\r
                  md:w-56\r
                  h-auto\r
                  object-contain\r
                `})}),(0,A.jsx)(`h3`,{className:`\r
                mt-7\r
                text-xl\r
                md:text-2xl\r
                font-extrabold\r
                text-white\r
              `,children:`We Plan. You Travel. We Care.`}),(0,A.jsxs)(`div`,{className:`\r
                mt-4\r
                flex\r
                items-center\r
                gap-1\r
              `,children:[(0,A.jsx)(`span`,{className:`\r
                  w-9\r
                  h-[3px]\r
                  rounded-full\r
                  bg-[#fc6602]\r
                `}),(0,A.jsx)(`span`,{className:`\r
                  w-5\r
                  h-[3px]\r
                  rounded-full\r
                  bg-[#0057B8]\r
                `})]}),(0,A.jsx)(`p`,{className:`\r
                mt-5\r
                max-w-[370px]\r
                text-gray-300\r
                text-sm\r
                md:text-[15px]\r
                leading-6\r
              `,children:`Sarathi NX Pvt. Ltd. is a professionally managed travel company specializing in international exhibition travel, business travel, corporate travel, MICE, group tours and global tourism.`}),(0,A.jsxs)(`div`,{className:`mt-7`,children:[(0,A.jsx)(`h4`,{className:`\r
                  text-base\r
                  font-bold\r
                  text-white\r
                  mb-4\r
                `,children:`Follow Us`}),(0,A.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,A.jsx)(`a`,{href:`#`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Facebook`,className:`\r
                    w-11\r
                    h-11\r
                    rounded-full\r
                    bg-[#1877F2]\r
                    flex\r
                    items-center\r
                    justify-center\r
                    text-white\r
                    shadow-lg\r
                    hover:-translate-y-1\r
                    hover:scale-110\r
                    transition-all\r
                    duration-300\r
                  `,children:(0,A.jsx)(cr,{})}),(0,A.jsx)(`a`,{href:`https://www.instagram.com/sarathi_nx_travel/`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Instagram`,className:`\r
                    w-11\r
                    h-11\r
                    rounded-full\r
                    bg-gradient-to-br\r
                    from-[#F58529]\r
                    via-[#DD2A7B]\r
                    to-[#515BD4]\r
                    flex\r
                    items-center\r
                    justify-center\r
                    text-white\r
                    shadow-lg\r
                    hover:-translate-y-1\r
                    hover:scale-110\r
                    transition-all\r
                    duration-300\r
                  `,children:(0,A.jsx)(or,{})}),(0,A.jsx)(`a`,{href:`#`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`LinkedIn`,className:`\r
                    w-11\r
                    h-11\r
                    rounded-full\r
                    bg-[#0A66C2]\r
                    flex\r
                    items-center\r
                    justify-center\r
                    text-white\r
                    shadow-lg\r
                    hover:-translate-y-1\r
                    hover:scale-110\r
                    transition-all\r
                    duration-300\r
                  `,children:(0,A.jsx)(ar,{})}),(0,A.jsx)(`a`,{href:`#`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`YouTube`,className:`\r
                    w-11\r
                    h-11\r
                    rounded-full\r
                    bg-[#FF0000]\r
                    flex\r
                    items-center\r
                    justify-center\r
                    text-white\r
                    shadow-lg\r
                    hover:-translate-y-1\r
                    hover:scale-110\r
                    transition-all\r
                    duration-300\r
                  `,children:(0,A.jsx)(rr,{})}),(0,A.jsx)(`a`,{href:`https://wa.me/917666984626?text=Hello%20Sarathi%20NX%2C%20I%20would%20like%20to%20know%20more%20about%20your%20travel%20services.`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`WhatsApp`,className:`\r
                    w-11\r
                    h-11\r
                    rounded-full\r
                    bg-[#25D366]\r
                    flex\r
                    items-center\r
                    justify-center\r
                    text-white\r
                    shadow-lg\r
                    hover:-translate-y-1\r
                    hover:scale-110\r
                    transition-all\r
                    duration-300\r
                  `,children:(0,A.jsx)(ir,{})})]})]})]}),(0,A.jsxs)(`div`,{className:`\r
              lg:border-l\r
              lg:border-white/15\r
              px-0\r
              sm:px-7\r
              lg:px-10\r
              pb-10\r
              lg:pb-0\r
            `,children:[(0,A.jsx)(`h3`,{className:`\r
                text-xl\r
                font-extrabold\r
                text-white\r
              `,children:`Quick Links`}),(0,A.jsxs)(`div`,{className:`flex items-center gap-1 mt-4 mb-6`,children:[(0,A.jsx)(`span`,{className:`w-8 h-[3px] rounded-full bg-[#fc6602]`}),(0,A.jsx)(`span`,{className:`w-5 h-[3px] rounded-full bg-[#0057B8]`})]}),(0,A.jsx)(`ul`,{className:`space-y-4`,children:ph.map(e=>(0,A.jsx)(`li`,{children:(0,A.jsxs)(Nn,{to:e.href,className:`\r
                      group\r
                      flex\r
                      items-center\r
                      gap-3\r
                      text-gray-300\r
                      text-sm\r
                      md:text-[15px]\r
                      hover:text-white\r
                      transition-all\r
                      duration-300\r
                    `,children:[(0,A.jsx)(di,{className:`\r
                        text-[#fc6602]\r
                        text-xs\r
                        group-hover:translate-x-1\r
                        transition-transform\r
                      `}),(0,A.jsx)(`span`,{className:`group-hover:text-white`,children:e.title})]})},e.title))})]}),(0,A.jsxs)(`div`,{className:`\r
              lg:border-l\r
              lg:border-white/15\r
              px-0\r
              sm:px-7\r
              lg:px-8\r
              pb-10\r
              lg:pb-0\r
            `,children:[(0,A.jsx)(`h3`,{className:`\r
                text-xl\r
                font-extrabold\r
                text-white\r
              `,children:`Our Services`}),(0,A.jsxs)(`div`,{className:`flex items-center gap-1 mt-4 mb-6`,children:[(0,A.jsx)(`span`,{className:`w-8 h-[3px] rounded-full bg-[#fc6602]`}),(0,A.jsx)(`span`,{className:`w-5 h-[3px] rounded-full bg-[#0057B8]`})]}),(0,A.jsx)(`ul`,{className:`space-y-3`,children:mh.map(e=>(0,A.jsx)(`li`,{children:(0,A.jsxs)(Nn,{to:`/services`,className:`\r
                      group\r
                      flex\r
                      items-start\r
                      gap-3\r
                      text-gray-300\r
                      text-sm\r
                      md:text-[14px]\r
                      hover:text-white\r
                      transition-all\r
                      duration-300\r
                    `,children:[(0,A.jsx)(di,{className:`\r
                        text-[#fc6602]\r
                        text-xs\r
                        mt-1\r
                        shrink-0\r
                        group-hover:translate-x-1\r
                        transition-transform\r
                      `}),(0,A.jsx)(`span`,{className:`\r
                        group-hover:text-white\r
                        transition\r
                      `,children:e})]})},e))})]}),(0,A.jsxs)(`div`,{className:`\r
              lg:border-l\r
              lg:border-white/15\r
              px-0\r
              sm:px-7\r
              lg:px-8\r
              xl:px-10\r
              min-w-0\r
            `,children:[(0,A.jsx)(`h3`,{className:`\r
                text-xl\r
                font-extrabold\r
                text-white\r
              `,children:`Contact Us`}),(0,A.jsxs)(`div`,{className:`flex items-center gap-1 mt-4 mb-7`,children:[(0,A.jsx)(`span`,{className:`w-8 h-[3px] rounded-full bg-[#fc6602]`}),(0,A.jsx)(`span`,{className:`w-5 h-[3px] rounded-full bg-[#0057B8]`})]}),(0,A.jsxs)(`div`,{className:`space-y-7`,children:[(0,A.jsxs)(`div`,{className:`flex items-start gap-4`,children:[(0,A.jsx)(`div`,{className:`\r
                    w-12\r
                    h-12\r
                    shrink-0\r
                    rounded-full\r
                    border\r
                    border-[#fc6602]/40\r
                    bg-white/[0.03]\r
                    flex\r
                    items-center\r
                    justify-center\r
                  `,children:(0,A.jsx)(Mr,{className:`\r
                      text-[#fc6602]\r
                      text-lg\r
                    `})}),(0,A.jsx)(`div`,{className:`min-w-0 flex-1`,children:(0,A.jsxs)(`p`,{className:`\r
                      text-gray-300\r
                      text-sm\r
                      md:text-[14px]\r
                      leading-6\r
                      whitespace-nowrap\r
                    `,children:[`1st Floor, Office No. 026, Crystal Plaza CHS Ltd,`,(0,A.jsx)(`br`,{}),`Station Road, Mira Road East, Thane - 401107`]})})]}),(0,A.jsx)(`div`,{className:`h-px bg-white/10`}),(0,A.jsxs)(`div`,{className:`flex items-start gap-4`,children:[(0,A.jsx)(`div`,{className:`\r
                    w-12\r
                    h-12\r
                    shrink-0\r
                    rounded-full\r
                    border\r
                    border-[#fc6602]/40\r
                    bg-white/[0.03]\r
                    flex\r
                    items-center\r
                    justify-center\r
                  `,children:(0,A.jsx)(Dr,{className:`\r
                      text-[#fc6602]\r
                      text-lg\r
                    `})}),(0,A.jsxs)(`div`,{className:`space-y-1.5 pt-1`,children:[(0,A.jsx)(`a`,{href:`tel:+917666984626`,className:`\r
                      block\r
                      text-gray-300\r
                      text-sm\r
                      md:text-[15px]\r
                      hover:text-white\r
                      transition\r
                    `,children:`+91 766 698 4626`}),(0,A.jsx)(`a`,{href:`tel:+918657867181`,className:`\r
                      block\r
                      text-gray-300\r
                      text-sm\r
                      md:text-[15px]\r
                      hover:text-white\r
                      transition\r
                    `,children:`+91 865 786 7181`})]})]}),(0,A.jsx)(`div`,{className:`h-px bg-white/10`}),(0,A.jsxs)(`div`,{className:`flex items-start gap-4`,children:[(0,A.jsx)(`div`,{className:`\r
                    w-12\r
                    h-12\r
                    shrink-0\r
                    rounded-full\r
                    border\r
                    border-[#fc6602]/40\r
                    bg-white/[0.03]\r
                    flex\r
                    items-center\r
                    justify-center\r
                  `,children:(0,A.jsx)(Xr,{className:`\r
                      text-[#fc6602]\r
                      text-lg\r
                    `})}),(0,A.jsx)(`a`,{href:`mailto:sajid@sarathinx.com`,className:`\r
                    text-gray-300\r
                    text-sm\r
                    md:text-[15px]\r
                    hover:text-white\r
                    transition\r
                    break-all\r
                    pt-3\r
                  `,children:`sajid@sarathinx.com`})]})]})]})]})}),(0,A.jsx)(`div`,{className:`\r
          relative\r
          z-10\r
          mx-6\r
          md:mx-10\r
          lg:mx-auto\r
          max-w-[1350px]\r
          border\r
          border-white/15\r
          rounded-2xl\r
          bg-[#06265F]/70\r
          backdrop-blur-sm\r
          mb-0\r
        `,children:(0,A.jsxs)(`div`,{className:`\r
            grid\r
            grid-cols-1\r
            md:grid-cols-3\r
            items-center\r
          `,children:[(0,A.jsx)(`div`,{className:`\r
              px-6\r
              md:px-8\r
              py-5\r
              text-center\r
              md:text-left\r
              border-b\r
              md:border-b-0\r
              md:border-r\r
              border-white/15\r
            `,children:(0,A.jsx)(`p`,{className:`text-gray-300 text-sm`,children:`© 2020 Sarathi NX Pvt. Ltd. All Rights Reserved.`})}),(0,A.jsxs)(`div`,{className:`\r
              px-6\r
              md:px-8\r
              py-5\r
              flex\r
              items-center\r
              justify-center\r
              gap-4\r
              border-b\r
              md:border-b-0\r
              md:border-r\r
              border-white/15\r
            `,children:[(0,A.jsx)(`div`,{className:`\r
                w-11\r
                h-11\r
                rounded-full\r
                flex\r
                items-center\r
                justify-center\r
                bg-[#fc6602]/10\r
                border\r
                border-[#fc6602]/30\r
              `,children:(0,A.jsx)(Br,{className:`\r
                  text-[#fc6602]\r
                  text-lg\r
                `})}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{className:`text-gray-300 text-xs`,children:`Need Help? Call Us`}),(0,A.jsxs)(`div`,{className:`\r
                  flex\r
                  flex-wrap\r
                  items-center\r
                  gap-2\r
                  mt-1\r
                  text-sm\r
                  font-bold\r
                  text-white\r
                `,children:[(0,A.jsx)(`a`,{href:`tel:+917666984626`,className:`hover:text-[#fc6602] transition`,children:`+91 766 698 4626`}),(0,A.jsx)(`span`,{className:`text-gray-500`,children:`|`}),(0,A.jsx)(`a`,{href:`tel:+918657867181`,className:`hover:text-[#fc6602] transition`,children:`+91 865 786 7181`})]})]})]}),(0,A.jsxs)(`div`,{className:`\r
              px-6\r
              md:px-8\r
              py-5\r
              flex\r
              items-center\r
              justify-center\r
              gap-4\r
            `,children:[(0,A.jsx)(kr,{className:`\r
                text-[#fc6602]\r
                text-xl\r
              `}),(0,A.jsx)(`span`,{className:`\r
                text-[#60A5FA]\r
                text-sm\r
                md:text-base\r
                font-semibold\r
              `,children:`We Plan. You Travel. We Care.`})]})]})}),(0,A.jsx)(`div`,{className:`h-6`})]})}function gh(){let[e,t]=(0,b.useState)(!1);return(0,b.useEffect)(()=>{let e=()=>{t(window.scrollY>400)};return window.addEventListener(`scroll`,e),()=>window.removeEventListener(`scroll`,e)},[]),e?(0,A.jsx)(`button`,{onClick:()=>{window.scrollTo({top:0,behavior:`smooth`})},"aria-label":`Back to top`,className:`fixed bottom-24 right-6 z-100 w-12 h-12 rounded-full bg-[#0F766E] text-white flex items-center justify-center shadow-xl hover:bg-[#115E59] hover:scale-110 transition-all duration-300`,children:(0,A.jsx)(ui,{})}):null}var _h=[{title:`CMEF`,description:`China International Medical Equipment Fair connecting global healthcare technology and medical equipment leaders.`,location:`Shanghai & Beijing, China`,image:`/sarathi-nx-frontend/assets/cmef-RyyrA3-w.jpg`,link:`https://www.cmef.com.cn/en`,external:!0},{title:`MEDICA`,description:`World's leading trade fair for the medical sector, bringing together healthcare professionals and innovators.`,location:`Düsseldorf, Germany`,image:`/sarathi-nx-frontend/assets/medica-D7yFIo1U.jpg`,link:`https://www.medica-tradefair.com/`,external:!0},{title:`ARAB HEALTH`,description:`One of the largest healthcare exhibitions in the Middle East featuring global medical technology and solutions.`,location:`Dubai, UAE`,image:`/sarathi-nx-frontend/assets/arabHealth-Cxm5Lz1g.jpg`,link:`https://www.worldhealthexpo.com/events/labs/dubai/`,external:!0},{title:`WELDING & CUTTING`,description:`Beijing Essen Welding & Cutting Fair showcasing advanced welding, cutting and industrial technologies.`,location:`Beijing, China`,image:`/sarathi-nx-frontend/assets/welding-DrgIvwoJ.jpg`,link:`#`,external:!1},{title:`MEDLAB`,description:`A leading laboratory and diagnostics exhibition connecting professionals with the latest healthcare technologies.`,location:`Dubai, UAE`,image:`/sarathi-nx-frontend/assets/medlab-CvxsVjL2.jpg`,link:`https://www.worldhealthexpo.com/events/labs/dubai/`,external:!0},{title:`CANTON FAIR`,description:`China Import & Export Fair connecting international buyers with manufacturers and suppliers from China.`,location:`Guangzhou, China`,image:`/sarathi-nx-frontend/assets/cantonFair-Cfn21lBq.jpg`,link:`#`,external:!1},{title:`ITMA ASIA + CITME`,description:`Asia's leading textile machinery exhibition showcasing innovative textile and garment manufacturing technologies.`,location:`Shanghai, China`,image:`/sarathi-nx-frontend/assets/itma-DDC9jpnX.jpg`,link:`#`,external:!1},{title:`OTHER INTERNATIONAL TRADE FAIRS`,description:`We manage travel for various international exhibitions worldwide.`,location:`International Exhibitions Worldwide`,image:`/sarathi-nx-frontend/assets/otherInternationalTradeFairs-BwHzuEcx.jpg`,link:`/exhibitions`,external:!1}];function vh(){let[e,t]=(0,b.useState)(0),[n,r]=(0,b.useState)(1),i=()=>{r(1),t(e=>(e+1)%_h.length)},a=()=>{r(-1),t(e=>(e-1+_h.length)%_h.length)};(0,b.useEffect)(()=>{let e=setInterval(()=>{i()},4500);return()=>clearInterval(e)},[]);let o=[_h[e%_h.length],_h[(e+1)%_h.length],_h[(e+2)%_h.length]];return(0,A.jsxs)(`section`,{id:`exhibitions`,className:`\r
        relative\r
        py-16\r
        md:py-20\r
        bg-gradient-to-b\r
        from-white\r
        via-[#F8FBFF]\r
        to-white\r
        overflow-hidden\r
      `,children:[(0,A.jsx)(`div`,{className:`\r
          absolute\r
          top-10\r
          -left-24\r
          w-72\r
          h-72\r
          bg-[#0057B8]/5\r
          rounded-full\r
          blur-3xl\r
          pointer-events-none\r
        `}),(0,A.jsx)(`div`,{className:`\r
          absolute\r
          bottom-10\r
          -right-24\r
          w-72\r
          h-72\r
          bg-[#fc6602]/5\r
          rounded-full\r
          blur-3xl\r
          pointer-events-none\r
        `}),(0,A.jsxs)(`div`,{className:`relative max-w-7xl mx-auto px-6`,children:[(0,A.jsx)($,{children:(0,A.jsxs)(`div`,{className:`flex items-center justify-center gap-[10px] mb-[7px]`,children:[(0,A.jsx)(`span`,{className:`\r
                block\r
                w-[49px]\r
                h-[2px]\r
                bg-gradient-to-r\r
                from-[#0057B8]\r
                to-[#F16A24]\r
              `}),(0,A.jsx)(`span`,{className:`\r
                text-[13px]\r
                font-bold\r
                tracking-[3px]\r
                uppercase\r
                leading-none\r
                bg-gradient-to-r\r
                from-[#0057B8]\r
                via-[#0057B8]\r
                to-[#F16A24]\r
                bg-clip-text\r
                text-transparent\r
              `,children:`International Exhibitions`}),(0,A.jsx)(`span`,{className:`\r
                block\r
                w-[49px]\r
                h-[2px]\r
                bg-gradient-to-r\r
                from-[#F16A24]\r
                to-[#0057B8]\r
              `})]})}),(0,A.jsx)($,{delay:.05,children:(0,A.jsxs)(`h2`,{className:`\r
              text-center\r
              font-extrabold\r
              tracking-[-1.8px]\r
              leading-[1.02]\r
              text-[48px]\r
              md:text-[52px]\r
              lg:text-[58px]\r
              text-[#071B41]\r
            `,children:[`Your Gateway to`,` `,(0,A.jsx)(`span`,{className:`\r
                bg-gradient-to-r\r
                from-[#0057B8]\r
                via-[#1454D8]\r
                to-[#F16A24]\r
                bg-clip-text\r
                text-transparent\r
              `,children:`Global Exhibitions`})]})}),(0,A.jsx)($,{delay:.1,children:(0,A.jsx)(`p`,{className:`\r
              text-center\r
              max-w-3xl\r
              mx-auto\r
              mt-5\r
              text-gray-600\r
              leading-7\r
              text-sm\r
              md:text-base\r
            `,children:`Discover leading international exhibitions and trade fairs with complete travel assistance from Sarathi NX. We make your business journey simple, comfortable and stress-free.`})}),(0,A.jsxs)(`div`,{className:`relative`,children:[(0,A.jsx)(`button`,{type:`button`,onClick:a,"aria-label":`Previous exhibitions`,className:`\r
              hidden\r
              lg:flex\r
              absolute\r
              -left-6\r
              top-1/2\r
              -translate-y-1/2\r
              z-30\r
              w-12\r
              h-12\r
              rounded-full\r
              bg-white\r
              text-[#0057B8]\r
              shadow-xl\r
              border\r
              border-gray-100\r
              items-center\r
              justify-center\r
              hover:bg-gradient-to-r\r
              hover:from-[#0057B8]\r
              hover:via-[#0057B8]\r
              hover:to-[#fc6602]\r
              hover:text-white\r
              hover:scale-110\r
              transition-all\r
              duration-300\r
            `,children:(0,A.jsx)(ni,{})}),(0,A.jsx)(`div`,{className:`\r
              relative\r
              overflow-hidden\r
              px-1\r
              py-4\r
            `,children:(0,A.jsx)(qf,{initial:!1,custom:n,mode:`popLayout`,children:(0,A.jsx)(Q.div,{custom:n,variants:{enter:e=>({x:e>0?420:-420,opacity:0,scale:.95}),center:{x:0,opacity:1,scale:1},exit:e=>({x:e>0?-420:420,opacity:0,scale:.95})},initial:`enter`,animate:`center`,exit:`exit`,transition:{x:{type:`spring`,stiffness:180,damping:25},opacity:{duration:.35},scale:{duration:.35}},className:`\r
                  grid\r
                  grid-cols-1\r
                  md:grid-cols-3\r
                  gap-6\r
                  w-full\r
                `,children:o.map((t,n)=>(0,A.jsxs)(Q.div,{whileHover:{y:-10},transition:{duration:.3},className:`\r
                      group\r
                      relative\r
                      bg-white\r
                      rounded-3xl\r
                      border\r
                      border-gray-100\r
                      shadow-[0_10px_35px_rgba(0,0,0,0.08)]\r
                      hover:shadow-[0_25px_55px_rgba(0,87,184,0.18)]\r
                      overflow-hidden\r
                      flex\r
                      flex-col\r
                      transition-all\r
                      duration-500\r
                    `,children:[(0,A.jsx)(`div`,{className:`\r
                        absolute\r
                        top-0\r
                        left-0\r
                        right-0\r
                        h-1.5\r
                        z-30\r
                        bg-gradient-to-r\r
                        from-[#0057B8]\r
                        via-[#0057B8]\r
                        to-[#fc6602]\r
                      `}),(0,A.jsxs)(`div`,{className:`\r
                        relative\r
                        h-[205px]\r
                        overflow-hidden\r
                      `,children:[(0,A.jsx)(`img`,{src:t.image,alt:t.title,className:`\r
                          w-full\r
                          h-full\r
                          object-cover\r
                          transition-transform\r
                          duration-700\r
                          ease-out\r
                          group-hover:scale-110\r
                        `}),(0,A.jsx)(`div`,{className:`\r
                          absolute\r
                          inset-0\r
                          bg-gradient-to-t\r
                          from-black/75\r
                          via-black/20\r
                          to-transparent\r
                        `}),(0,A.jsx)(`div`,{className:`\r
                          absolute\r
                          inset-0\r
                          bg-gradient-to-tr\r
                          from-[#0057B8]/20\r
                          via-transparent\r
                          to-[#fc6602]/20\r
                          opacity-70\r
                        `}),(0,A.jsxs)(`div`,{className:`\r
                          absolute\r
                          bottom-4\r
                          left-4\r
                          right-4\r
                          flex\r
                          items-center\r
                          gap-2\r
                          text-white\r
                          text-xs\r
                          md:text-sm\r
                          font-semibold\r
                        `,children:[(0,A.jsx)(`div`,{className:`\r
                            w-8\r
                            h-8\r
                            rounded-full\r
                            bg-white/20\r
                            backdrop-blur-md\r
                            border\r
                            border-white/30\r
                            flex\r
                            items-center\r
                            justify-center\r
                            shrink-0\r
                          `,children:(0,A.jsx)(Mr,{})}),(0,A.jsx)(`span`,{className:`drop-shadow-md`,children:t.location})]})]}),(0,A.jsxs)(`div`,{className:`\r
                        relative\r
                        p-6\r
                        md:p-7\r
                        flex\r
                        flex-col\r
                        flex-1\r
                      `,children:[(0,A.jsx)(`div`,{className:`\r
                          absolute\r
                          -right-10\r
                          -bottom-10\r
                          w-32\r
                          h-32\r
                          rounded-full\r
                          bg-[#F1F7FF]\r
                          group-hover:bg-[#E8F1FF]\r
                          transition-colors\r
                          duration-500\r
                          pointer-events-none\r
                        `}),(0,A.jsxs)(`div`,{className:`relative z-10`,children:[(0,A.jsxs)(`div`,{className:`\r
                            inline-flex\r
                            items-center\r
                            gap-2\r
                            text-[11px]\r
                            font-bold\r
                            uppercase\r
                            tracking-[1.5px]\r
                            text-[#0057B8]\r
                            mb-2\r
                          `,children:[(0,A.jsx)(`span`,{className:`\r
                              w-5\r
                              h-[2px]\r
                              bg-gradient-to-r\r
                              from-[#0057B8]\r
                              to-[#fc6602]\r
                              rounded-full\r
                            `}),`International Event`]}),(0,A.jsx)(`h3`,{className:`\r
                            text-xl\r
                            md:text-2xl\r
                            font-extrabold\r
                            text-gray-800\r
                            leading-tight\r
                            group-hover:text-[#0057B8]\r
                            transition-colors\r
                            duration-300\r
                          `,children:t.title}),(0,A.jsx)(`p`,{className:`\r
                            mt-3\r
                            text-gray-600\r
                            text-sm\r
                            leading-6\r
                            line-clamp-3\r
                          `,children:t.description})]}),(0,A.jsxs)(`div`,{className:`\r
                          relative\r
                          z-10\r
                          mt-auto\r
                          pt-6\r
                          flex\r
                          items-center\r
                          justify-between\r
                          gap-3\r
                        `,children:[(0,A.jsxs)(`div`,{className:`\r
                            flex\r
                            items-center\r
                            gap-2\r
                            text-gray-400\r
                            text-xs\r
                            font-medium\r
                          `,children:[(0,A.jsx)(oi,{}),(0,A.jsx)(`span`,{children:`Global Exhibition`})]}),(0,A.jsxs)(`a`,{href:t.link,target:t.external?`_blank`:void 0,rel:t.external?`noopener noreferrer`:void 0,onClick:e=>{t.link===`#`&&e.preventDefault()},className:`\r
                            group/explore\r
                            shrink-0\r
                            inline-flex\r
                            items-center\r
                            gap-2\r
                            px-4\r
                            py-2.5\r
                            rounded-full\r
                            bg-gradient-to-r\r
                            from-[#0057B8]\r
                            via-[#0057B8]\r
                            to-[#fc6602]\r
                            text-white\r
                            font-bold\r
                            text-xs\r
                            shadow-md\r
                            hover:shadow-xl\r
                            hover:scale-105\r
                            transition-all\r
                            duration-300\r
                          `,children:[`Explore`,(0,A.jsx)(di,{className:`\r
                              text-[10px]\r
                              transition-transform\r
                              duration-300\r
                              group-hover/explore:translate-x-1\r
                            `})]})]})]})]},`${t.title}-${e}-${n}`))},e)})}),(0,A.jsx)(`button`,{type:`button`,onClick:i,"aria-label":`Next exhibitions`,className:`\r
              hidden\r
              lg:flex\r
              absolute\r
              -right-6\r
              top-1/2\r
              -translate-y-1/2\r
              z-30\r
              w-12\r
              h-12\r
              rounded-full\r
              bg-white\r
              text-[#0057B8]\r
              shadow-xl\r
              border\r
              border-gray-100\r
              items-center\r
              justify-center\r
              hover:bg-gradient-to-r\r
              hover:from-[#0057B8]\r
              hover:via-[#0057B8]\r
              hover:to-[#fc6602]\r
              hover:text-white\r
              hover:scale-110\r
              transition-all\r
              duration-300\r
            `,children:(0,A.jsx)(ti,{})})]}),(0,A.jsxs)(`div`,{className:`\r
            flex\r
            lg:hidden\r
            justify-center\r
            gap-3\r
            mt-5\r
          `,children:[(0,A.jsx)(`button`,{type:`button`,onClick:a,"aria-label":`Previous exhibitions`,className:`\r
              w-11\r
              h-11\r
              rounded-full\r
              bg-white\r
              text-[#0057B8]\r
              border\r
              border-gray-200\r
              shadow-md\r
              flex\r
              items-center\r
              justify-center\r
              hover:bg-gradient-to-r\r
              hover:from-[#0057B8]\r
              hover:via-[#0057B8]\r
              hover:to-[#fc6602]\r
              hover:text-white\r
              transition-all\r
            `,children:(0,A.jsx)(ni,{})}),(0,A.jsx)(`button`,{type:`button`,onClick:i,"aria-label":`Next exhibitions`,className:`\r
              w-11\r
              h-11\r
              rounded-full\r
              bg-white\r
              text-[#0057B8]\r
              border\r
              border-gray-200\r
              shadow-md\r
              flex\r
              items-center\r
              justify-center\r
              hover:bg-gradient-to-r\r
              hover:from-[#0057B8]\r
              hover:via-[#0057B8]\r
              hover:to-[#fc6602]\r
              hover:text-white\r
              transition-all\r
            `,children:(0,A.jsx)(ti,{})})]}),(0,A.jsx)(`div`,{className:`\r
            flex\r
            justify-center\r
            gap-2\r
            mt-5\r
          `,children:_h.map((n,i)=>(0,A.jsx)(`button`,{type:`button`,onClick:()=>{r(i>=e?1:-1),t(i)},"aria-label":`Go to exhibition ${i+1}`,className:`
                h-2
                rounded-full
                transition-all
                duration-300

                ${e===i?`
                      w-8
                      bg-gradient-to-r
                      from-[#0057B8]
                      via-[#0057B8]
                      to-[#fc6602]
                    `:`
                      w-2
                      bg-gray-300
                      hover:bg-[#0057B8]
                    `}
              `},i))}),(0,A.jsx)($,{delay:.3,children:(0,A.jsxs)(`div`,{className:`\r
              mt-10\r
              rounded-3xl\r
              bg-gradient-to-r\r
              from-[#0057B8]\r
              via-[#0057B8]\r
              to-[#fc6602]\r
              px-6\r
              py-7\r
              md:px-10\r
              md:py-8\r
              text-white\r
              flex\r
              flex-col\r
              md:flex-row\r
              items-center\r
              justify-between\r
              gap-5\r
              shadow-xl\r
              overflow-hidden\r
              relative\r
            `,children:[(0,A.jsx)(`div`,{className:`\r
                absolute\r
                -right-16\r
                -top-16\r
                w-40\r
                h-40\r
                rounded-full\r
                bg-white/10\r
              `}),(0,A.jsx)(`div`,{className:`\r
                absolute\r
                -left-20\r
                -bottom-20\r
                w-40\r
                h-40\r
                rounded-full\r
                bg-white/10\r
              `}),(0,A.jsxs)(`div`,{className:`relative z-10`,children:[(0,A.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,A.jsx)(Er,{className:`text-blue-100`}),(0,A.jsx)(`p`,{className:`\r
                    text-blue-100\r
                    uppercase\r
                    tracking-[2px]\r
                    text-xs\r
                    font-bold\r
                  `,children:`Exhibition Travel Made Easy`})]}),(0,A.jsx)(`h3`,{className:`\r
                  text-xl\r
                  md:text-2xl\r
                  font-extrabold\r
                  mt-2\r
                `,children:`Planning to attend an international exhibition?`}),(0,A.jsx)(`p`,{className:`text-blue-50 mt-1 text-sm`,children:`Let Sarathi NX manage your complete travel requirements.`})]}),(0,A.jsxs)(`a`,{href:`#contact`,className:`\r
                relative\r
                z-10\r
                shrink-0\r
                inline-flex\r
                items-center\r
                gap-2\r
                bg-white\r
                text-[#0057B8]\r
                px-6\r
                py-3\r
                rounded-full\r
                font-bold\r
                hover:bg-blue-50\r
                hover:scale-105\r
                transition-all\r
                duration-300\r
                shadow-lg\r
              `,children:[`Plan Exhibition Travel`,(0,A.jsx)(di,{})]})]})})]})]})}function yh(){return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(Km,{}),(0,A.jsx)(Jm,{}),(0,A.jsx)(nh,{}),(0,A.jsx)(vh,{}),(0,A.jsx)(oh,{}),(0,A.jsx)(ih,{}),(0,A.jsx)(ch,{}),(0,A.jsx)(uh,{}),(0,A.jsx)(fh,{}),(0,A.jsx)(gh,{})]})}function bh(){return(0,A.jsxs)(`main`,{className:`bg-white`,children:[(0,A.jsx)(`section`,{className:`relative bg-[#003DA5] text-white pt-36 pb-24`,children:(0,A.jsx)(`div`,{className:`max-w-7xl mx-auto px-6`,children:(0,A.jsx)($,{children:(0,A.jsxs)(`div`,{className:`max-w-3xl`,children:[(0,A.jsx)(`span`,{className:`text-blue-200 uppercase tracking-[4px] font-semibold text-sm`,children:`About Sarathi NX`}),(0,A.jsxs)(`h1`,{className:`text-4xl md:text-6xl font-bold mt-5 leading-tight`,children:[`Your Trusted Partner for`,(0,A.jsx)(`span`,{className:`block text-blue-200`,children:`Global Business Travel`})]}),(0,A.jsx)(`p`,{className:`mt-6 text-blue-100 text-lg leading-8 max-w-2xl`,children:`We provide reliable and professionally managed travel solutions for businesses, international exhibitions, corporate journeys and global tourism.`})]})})})}),(0,A.jsx)(`section`,{className:`py-24 bg-[#F5F9FF]`,children:(0,A.jsx)(`div`,{className:`max-w-7xl mx-auto px-6`,children:(0,A.jsxs)(`div`,{className:`grid lg:grid-cols-2 gap-16 items-center`,children:[(0,A.jsx)($,{direction:`left`,children:(0,A.jsxs)(`div`,{className:`relative`,children:[(0,A.jsx)(`img`,{src:`/images/about.jpg`,alt:`Sarathi NX Travel`,className:`w-full h-[500px] object-cover rounded-3xl shadow-xl`}),(0,A.jsxs)(`div`,{className:`absolute -bottom-6 -right-6 bg-[#003DA5] text-white rounded-2xl p-6 shadow-xl hidden md:block`,children:[(0,A.jsx)(`p`,{className:`text-3xl font-bold`,children:`2020`}),(0,A.jsx)(`p`,{className:`text-blue-200 mt-1`,children:`Established`})]})]})}),(0,A.jsx)($,{direction:`right`,children:(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`span`,{className:`text-[#003DA5] uppercase tracking-[4px] font-semibold text-sm`,children:`Who We Are`}),(0,A.jsxs)(`h2`,{className:`text-4xl md:text-5xl font-bold text-gray-800 mt-4 leading-tight`,children:[`Making International`,(0,A.jsxs)(`span`,{className:`text-[#003DA5]`,children:[` `,`Travel Simple`]})]}),(0,A.jsx)(`p`,{className:`text-gray-600 leading-8 mt-6`,children:`Sarathi NX Pvt. Ltd. is a professionally managed travel company specializing in international exhibition travel, corporate travel, business travel, MICE, group tours and global tourism.`}),(0,A.jsx)(`p`,{className:`text-gray-600 leading-8 mt-4`,children:`Our team works closely with businesses and travellers to provide seamless travel planning, visa assistance, accommodation and complete destination support.`}),(0,A.jsx)(`div`,{className:`grid sm:grid-cols-2 gap-4 mt-8`,children:[`International Travel Expertise`,`Exhibition Travel Management`,`Corporate Travel Solutions`,`Dedicated Customer Support`].map(e=>(0,A.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,A.jsx)(ii,{className:`text-[#003DA5] mt-1 shrink-0`}),(0,A.jsx)(`span`,{className:`text-gray-700 font-medium`,children:e})]},e))})]})})]})})}),(0,A.jsx)(`section`,{className:`py-24 bg-white`,children:(0,A.jsxs)(`div`,{className:`max-w-7xl mx-auto px-6`,children:[(0,A.jsx)($,{children:(0,A.jsxs)(`div`,{className:`text-center max-w-3xl mx-auto mb-14`,children:[(0,A.jsx)(`span`,{className:`text-[#003DA5] uppercase tracking-[4px] font-semibold text-sm`,children:`Our Purpose`}),(0,A.jsxs)(`h2`,{className:`text-4xl md:text-5xl font-bold text-gray-800 mt-4`,children:[`Driven By`,(0,A.jsxs)(`span`,{className:`text-[#003DA5]`,children:[` `,`Trust & Excellence`]})]}),(0,A.jsx)(`p`,{className:`text-gray-600 mt-5 leading-7`,children:`Our goal is to make every business and international travel experience smooth, efficient and stress-free.`})]})}),(0,A.jsxs)(`div`,{className:`grid md:grid-cols-2 gap-8`,children:[(0,A.jsx)($,{direction:`left`,children:(0,A.jsxs)(`div`,{className:`bg-[#F5F9FF] border border-blue-100 rounded-3xl p-8 md:p-10 h-full`,children:[(0,A.jsx)(`div`,{className:`w-16 h-16 rounded-2xl bg-[#003DA5] text-white flex items-center justify-center text-2xl`,children:(0,A.jsx)(Hr,{})}),(0,A.jsx)(`h3`,{className:`text-2xl font-bold text-gray-800 mt-6`,children:`Our Mission`}),(0,A.jsx)(`p`,{className:`text-gray-600 leading-7 mt-4`,children:`To deliver dependable, personalized and cost-effective travel solutions that help our clients travel with confidence and focus on their business goals.`})]})}),(0,A.jsx)($,{direction:`right`,children:(0,A.jsxs)(`div`,{className:`bg-[#003DA5] text-white rounded-3xl p-8 md:p-10 h-full`,children:[(0,A.jsx)(`div`,{className:`w-16 h-16 rounded-2xl bg-white text-[#003DA5] flex items-center justify-center text-2xl`,children:(0,A.jsx)(Gr,{})}),(0,A.jsx)(`h3`,{className:`text-2xl font-bold mt-6`,children:`Our Vision`}),(0,A.jsx)(`p`,{className:`text-blue-100 leading-7 mt-4`,children:`To become a trusted global travel partner for businesses and travellers by delivering exceptional service, international expertise and long-term relationships.`})]})})]})]})}),(0,A.jsx)(`section`,{className:`py-24 bg-[#F5F9FF]`,children:(0,A.jsxs)(`div`,{className:`max-w-7xl mx-auto px-6`,children:[(0,A.jsx)($,{children:(0,A.jsxs)(`div`,{className:`text-center mb-14`,children:[(0,A.jsx)(`span`,{className:`text-[#003DA5] uppercase tracking-[4px] font-semibold text-sm`,children:`Why Sarathi NX`}),(0,A.jsxs)(`h2`,{className:`text-4xl md:text-5xl font-bold text-gray-800 mt-4`,children:[`Travel With`,(0,A.jsxs)(`span`,{className:`text-[#003DA5]`,children:[` `,`Confidence`]})]})]})}),(0,A.jsx)(`div`,{className:`grid md:grid-cols-2 lg:grid-cols-4 gap-8`,children:[{icon:Gr,title:`Global Network`,text:`International travel support across major business and exhibition destinations.`},{icon:ur,title:`Experienced Team`,text:`A professional team focused on delivering smooth and reliable travel services.`},{icon:vr,title:`Complete Solutions`,text:`Travel, visa, hotel and exhibition support under one roof.`},{icon:Hr,title:`Trusted Partnership`,text:`We build long-term relationships through transparency and dependable service.`}].map((e,t)=>{let n=e.icon;return(0,A.jsx)($,{delay:t*.12,children:(0,A.jsxs)(`div`,{className:`bg-white rounded-2xl p-7 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full`,children:[(0,A.jsx)(`div`,{className:`w-14 h-14 rounded-xl bg-[#EAF2FF] text-[#003DA5] flex items-center justify-center text-2xl`,children:(0,A.jsx)(n,{})}),(0,A.jsx)(`h3`,{className:`text-xl font-bold text-gray-800 mt-6`,children:e.title}),(0,A.jsx)(`p`,{className:`text-gray-600 leading-7 mt-3`,children:e.text})]})},e.title)})})]})}),(0,A.jsx)(`section`,{className:`py-20 bg-[#003DA5] text-white`,children:(0,A.jsx)(`div`,{className:`max-w-5xl mx-auto px-6 text-center`,children:(0,A.jsxs)($,{children:[(0,A.jsx)(`h2`,{className:`text-4xl md:text-5xl font-bold`,children:`Ready to Plan Your Next Journey?`}),(0,A.jsx)(`p`,{className:`text-blue-100 text-lg mt-5 max-w-2xl mx-auto leading-7`,children:`Let our travel experts take care of your business travel, international exhibition or corporate journey.`}),(0,A.jsx)(`a`,{href:`/sarathi-nx-official/#contact`,className:`inline-flex items-center mt-8 bg-white text-[#003DA5] px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105`,children:`Contact Our Team`})]})})})]})}var xh=[{icon:Er,title:`International Exhibition Travel`,description:`Complete travel solutions for businesses attending international exhibitions and trade fairs across the world.`,points:[`Exhibition travel planning`,`Flight & accommodation assistance`,`Group travel coordination`,`Destination support`]},{icon:si,title:`Corporate Travel`,description:`Professional corporate travel management designed around your company's business requirements.`,points:[`Corporate flight bookings`,`Business accommodation`,`Travel itinerary planning`,`Dedicated travel assistance`]},{icon:Gr,title:`Business Travel`,description:`Seamless business travel arrangements that allow you to focus on meetings, networking and business growth.`,points:[`International business trips`,`Customized itineraries`,`Airport & destination assistance`,`Flexible travel solutions`]},{icon:Or,title:`Visa Assistance`,description:`Reliable visa guidance and documentation support for international business and leisure travel.`,points:[`Visa documentation guidance`,`Application assistance`,`Business visa support`,`Travel documentation checklist`]},{icon:Lr,title:`Hotel Booking`,description:`Comfortable accommodation options at carefully selected hotels with competitive rates.`,points:[`Corporate hotel bookings`,`Exhibition-area hotels`,`Group accommodation`,`Special travel requirements`]},{icon:ur,title:`MICE & Group Tours`,description:`Professionally managed group travel, meetings, incentives, conferences and corporate events.`,points:[`Group travel planning`,`Corporate events`,`Meetings & conferences`,`Customized group itineraries`]}];function Sh(){return(0,A.jsxs)(`main`,{className:`bg-white`,children:[(0,A.jsx)(`section`,{className:`relative bg-[#003DA5] text-white pt-36 pb-24`,children:(0,A.jsx)(`div`,{className:`max-w-7xl mx-auto px-6`,children:(0,A.jsx)($,{children:(0,A.jsxs)(`div`,{className:`max-w-4xl`,children:[(0,A.jsx)(`span`,{className:`text-blue-200 uppercase tracking-[4px] font-semibold text-sm`,children:`Our Services`}),(0,A.jsxs)(`h1`,{className:`text-4xl md:text-6xl font-bold mt-5 leading-tight`,children:[`Complete Travel Solutions`,(0,A.jsx)(`span`,{className:`block text-blue-200`,children:`For Your Global Journey`})]}),(0,A.jsx)(`p`,{className:`mt-6 text-blue-100 text-lg leading-8 max-w-3xl`,children:`From international exhibitions and corporate travel to visa assistance and group tours, Sarathi NX provides complete travel support designed around your requirements.`}),(0,A.jsxs)(`a`,{href:`/sarathi-nx-official/#contact`,className:`inline-flex items-center gap-3 mt-8 bg-white text-[#003DA5] px-7 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105`,children:[`Plan Your Trip`,(0,A.jsx)(di,{})]})]})})})}),(0,A.jsx)(`section`,{className:`py-20 bg-[#F5F9FF]`,children:(0,A.jsx)(`div`,{className:`max-w-4xl mx-auto px-6 text-center`,children:(0,A.jsxs)($,{children:[(0,A.jsx)(`span`,{className:`text-[#003DA5] uppercase tracking-[4px] font-semibold text-sm`,children:`What We Offer`}),(0,A.jsxs)(`h2`,{className:`text-4xl md:text-5xl font-bold text-gray-800 mt-4`,children:[`Travel Made`,(0,A.jsxs)(`span`,{className:`text-[#003DA5]`,children:[` `,`Simple & Reliable`]})]}),(0,A.jsx)(`p`,{className:`text-gray-600 leading-8 mt-5`,children:`We understand that every traveller and business has different requirements. Our services are designed to provide convenient, professional and personalized travel assistance from planning to completion.`})]})})}),(0,A.jsx)(`section`,{className:`py-24 bg-white`,children:(0,A.jsx)(`div`,{className:`max-w-7xl mx-auto px-6`,children:(0,A.jsx)(`div`,{className:`grid md:grid-cols-2 lg:grid-cols-3 gap-8`,children:xh.map((e,t)=>{let n=e.icon;return(0,A.jsx)($,{delay:t*.1,children:(0,A.jsxs)(`div`,{className:`group bg-white border border-blue-100 rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full`,children:[(0,A.jsx)(`div`,{className:`w-16 h-16 rounded-2xl bg-[#EAF2FF] text-[#003DA5] flex items-center justify-center text-2xl group-hover:bg-[#003DA5] group-hover:text-white transition-all duration-300`,children:(0,A.jsx)(n,{})}),(0,A.jsx)(`h3`,{className:`text-2xl font-bold text-gray-800 mt-7`,children:e.title}),(0,A.jsx)(`p`,{className:`text-gray-600 leading-7 mt-4`,children:e.description}),(0,A.jsx)(`div`,{className:`space-y-3 mt-6`,children:e.points.map(e=>(0,A.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,A.jsx)(ii,{className:`text-[#003DA5] mt-1 shrink-0`}),(0,A.jsx)(`span`,{className:`text-gray-700 text-sm`,children:e})]},e))}),(0,A.jsxs)(`a`,{href:`/sarathi-nx-official/#contact`,className:`inline-flex items-center gap-2 mt-7 text-[#003DA5] font-semibold hover:gap-3 transition-all`,children:[`Enquire Now`,(0,A.jsx)(di,{className:`text-sm`})]})]})},e.title)})})})}),(0,A.jsx)(`section`,{className:`py-24 bg-[#F5F9FF]`,children:(0,A.jsxs)(`div`,{className:`max-w-7xl mx-auto px-6`,children:[(0,A.jsx)($,{children:(0,A.jsxs)(`div`,{className:`text-center max-w-3xl mx-auto mb-14`,children:[(0,A.jsx)(`span`,{className:`text-[#003DA5] uppercase tracking-[4px] font-semibold text-sm`,children:`Why Choose Us`}),(0,A.jsxs)(`h2`,{className:`text-4xl md:text-5xl font-bold text-gray-800 mt-4`,children:[`One Partner,`,(0,A.jsxs)(`span`,{className:`text-[#003DA5]`,children:[` `,`Complete Support`]})]})]})}),(0,A.jsx)(`div`,{className:`grid md:grid-cols-3 gap-8`,children:[{icon:Gr,title:`Global Travel Network`,text:`Travel support for major international business and exhibition destinations.`},{icon:ur,title:`Experienced Team`,text:`Professional assistance throughout your travel planning and journey.`},{icon:ii,title:`Reliable Service`,text:`Transparent and dependable travel solutions focused on customer satisfaction.`}].map((e,t)=>{let n=e.icon;return(0,A.jsx)($,{delay:t*.15,children:(0,A.jsxs)(`div`,{className:`bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300`,children:[(0,A.jsx)(`div`,{className:`w-16 h-16 mx-auto rounded-full bg-[#003DA5] text-white flex items-center justify-center text-2xl`,children:(0,A.jsx)(n,{})}),(0,A.jsx)(`h3`,{className:`text-xl font-bold text-gray-800 mt-6`,children:e.title}),(0,A.jsx)(`p`,{className:`text-gray-600 leading-7 mt-3`,children:e.text})]})},e.title)})})]})}),(0,A.jsx)(`section`,{className:`py-20 bg-[#003DA5] text-white`,children:(0,A.jsx)(`div`,{className:`max-w-5xl mx-auto px-6 text-center`,children:(0,A.jsxs)($,{children:[(0,A.jsx)(`h2`,{className:`text-4xl md:text-5xl font-bold`,children:`Planning Your Next Business Trip?`}),(0,A.jsx)(`p`,{className:`text-blue-100 text-lg mt-5 max-w-2xl mx-auto leading-7`,children:`Speak with our travel experts and let us create the right travel solution for your requirements.`}),(0,A.jsxs)(`a`,{href:`/sarathi-nx-official/#contact`,className:`inline-flex items-center gap-3 mt-8 bg-white text-[#003DA5] px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105`,children:[`Contact Our Team`,(0,A.jsx)(di,{})]})]})})})]})}var Ch=[{title:`CMEF`,subtitle:`China International Medical Equipment Fair`,location:`Shanghai & Beijing, China`,category:`Medical & Healthcare`,link:`https://www.cmef.com.cn/en`},{title:`MEDICA`,subtitle:`World's Leading Trade Fair for the Medical Sector`,location:`Düsseldorf, Germany`,category:`Medical & Healthcare`,link:`https://www.medica-tradefair.com/`},{title:`ARAB HEALTH`,subtitle:`Leading Healthcare Exhibition in the Middle East`,location:`Dubai, UAE`,category:`Medical & Healthcare`,link:`https://www.worldhealthexpo.com/events/labs/dubai/`},{title:`MEDLAB`,subtitle:`Laboratory & Diagnostics Exhibition`,location:`Dubai, UAE`,category:`Laboratory & Diagnostics`,link:`https://www.worldhealthexpo.com/events/labs/dubai/`},{title:`WELDING & CUTTING`,subtitle:`Beijing Essen Welding & Cutting Fair`,location:`Beijing, China`,category:`Industrial`,link:`#`},{title:`CANTON FAIR`,subtitle:`China Import & Export Fair`,location:`Guangzhou, China`,category:`Trade & Business`,link:`#`},{title:`ITMA ASIA + CITME`,subtitle:`Asia's Leading Textile Machinery Exhibition`,location:`Shanghai, China`,category:`Textile & Machinery`,link:`#`}];function wh(){return(0,A.jsxs)(`main`,{className:`bg-white`,children:[(0,A.jsx)(`section`,{className:`relative bg-[#003DA5] text-white pt-36 pb-24`,children:(0,A.jsx)(`div`,{className:`max-w-7xl mx-auto px-6`,children:(0,A.jsx)($,{children:(0,A.jsxs)(`div`,{className:`max-w-4xl`,children:[(0,A.jsx)(`span`,{className:`text-blue-200 uppercase tracking-[4px] font-semibold text-sm`,children:`International Exhibitions`}),(0,A.jsxs)(`h1`,{className:`text-4xl md:text-6xl font-bold mt-5 leading-tight`,children:[`Explore Leading`,(0,A.jsx)(`span`,{className:`block text-blue-200`,children:`Global Exhibitions`})]}),(0,A.jsx)(`p`,{className:`mt-6 text-blue-100 text-lg leading-8 max-w-3xl`,children:`Discover the world's leading trade fairs and exhibitions. Sarathi NX provides complete travel assistance for businesses attending international exhibitions.`}),(0,A.jsxs)(`a`,{href:`/sarathi-nx-official/#contact`,className:`inline-flex items-center gap-3 mt-8 bg-white text-[#003DA5] px-7 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105`,children:[`Plan Exhibition Travel`,(0,A.jsx)(di,{})]})]})})})}),(0,A.jsx)(`section`,{className:`py-20 bg-[#F5F9FF]`,children:(0,A.jsx)(`div`,{className:`max-w-4xl mx-auto px-6 text-center`,children:(0,A.jsxs)($,{children:[(0,A.jsx)(`span`,{className:`text-[#003DA5] uppercase tracking-[4px] font-semibold text-sm`,children:`Global Opportunities`}),(0,A.jsxs)(`h2`,{className:`text-4xl md:text-5xl font-bold text-gray-800 mt-4`,children:[`Connect With`,(0,A.jsxs)(`span`,{className:`text-[#003DA5]`,children:[` `,`Global Markets`]})]}),(0,A.jsx)(`p`,{className:`mt-5 text-gray-600 leading-8`,children:`International exhibitions provide businesses with valuable opportunities to discover new markets, meet industry leaders, showcase products and build global partnerships.`})]})})}),(0,A.jsx)(`section`,{className:`py-24 bg-white`,children:(0,A.jsx)(`div`,{className:`max-w-7xl mx-auto px-6`,children:(0,A.jsx)(`div`,{className:`grid md:grid-cols-2 lg:grid-cols-3 gap-8`,children:Ch.map((e,t)=>(0,A.jsx)($,{delay:t*.08,children:(0,A.jsxs)(`div`,{className:`group bg-white border border-blue-100 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col`,children:[(0,A.jsxs)(`div`,{className:`bg-[#003DA5] p-7 text-white`,children:[(0,A.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,A.jsx)(`div`,{className:`w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center text-xl`,children:(0,A.jsx)(Gr,{})}),(0,A.jsx)(`span`,{className:`text-xs font-semibold bg-white/15 px-3 py-2 rounded-full`,children:e.category})]}),(0,A.jsx)(`h3`,{className:`text-2xl font-bold mt-6`,children:e.title})]}),(0,A.jsxs)(`div`,{className:`p-7 flex flex-col flex-1`,children:[(0,A.jsx)(`p`,{className:`text-gray-700 font-medium leading-7`,children:e.subtitle}),(0,A.jsxs)(`div`,{className:`flex items-start gap-3 mt-6`,children:[(0,A.jsx)(Mr,{className:`text-[#003DA5] mt-1 shrink-0`}),(0,A.jsx)(`span`,{className:`text-gray-600`,children:e.location})]}),(0,A.jsxs)(`div`,{className:`flex items-center gap-3 mt-4`,children:[(0,A.jsx)(oi,{className:`text-[#003DA5]`}),(0,A.jsx)(`span`,{className:`text-gray-600`,children:`International Exhibition`})]}),(0,A.jsx)(`div`,{className:`mt-auto pt-7`,children:e.link===`#`?(0,A.jsxs)(`a`,{href:`/sarathi-nx-official/#contact`,className:`inline-flex items-center gap-2 text-[#003DA5] font-semibold hover:gap-3 transition-all`,children:[`Enquire Now`,(0,A.jsx)(di,{className:`text-sm`})]}):(0,A.jsxs)(`a`,{href:e.link,target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex items-center gap-2 text-[#003DA5] font-semibold hover:gap-3 transition-all`,children:[`Visit Exhibition`,(0,A.jsx)(di,{className:`text-sm`})]})})]})]})},e.title))})})}),(0,A.jsx)(`section`,{className:`py-24 bg-[#F5F9FF]`,children:(0,A.jsx)(`div`,{className:`max-w-7xl mx-auto px-6`,children:(0,A.jsxs)(`div`,{className:`grid lg:grid-cols-2 gap-14 items-center`,children:[(0,A.jsx)($,{children:(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`span`,{className:`text-[#003DA5] uppercase tracking-[4px] font-semibold text-sm`,children:`Exhibition Travel Support`}),(0,A.jsxs)(`h2`,{className:`text-4xl md:text-5xl font-bold text-gray-800 mt-4 leading-tight`,children:[`We Take Care of Your`,(0,A.jsxs)(`span`,{className:`text-[#003DA5]`,children:[` `,`Complete Journey`]})]}),(0,A.jsx)(`p`,{className:`text-gray-600 leading-8 mt-6`,children:`From flight bookings and hotel reservations to visa assistance and destination support, our team helps businesses travel confidently for international exhibitions.`})]})}),(0,A.jsx)($,{direction:`right`,children:(0,A.jsx)(`div`,{className:`grid sm:grid-cols-2 gap-5`,children:[`Flight Booking`,`Hotel Reservation`,`Visa Assistance`,`Airport Transfers`,`Exhibition Travel`,`Group Coordination`].map(e=>(0,A.jsxs)(`div`,{className:`bg-white rounded-2xl p-5 shadow-md border border-blue-50 flex items-center gap-3`,children:[(0,A.jsx)(`div`,{className:`w-9 h-9 rounded-full bg-[#EAF2FF] text-[#003DA5] flex items-center justify-center`,children:`✓`}),(0,A.jsx)(`span`,{className:`font-medium text-gray-700`,children:e})]},e))})})]})})}),(0,A.jsx)(`section`,{className:`py-20 bg-[#003DA5] text-white`,children:(0,A.jsx)(`div`,{className:`max-w-5xl mx-auto px-6 text-center`,children:(0,A.jsxs)($,{children:[(0,A.jsx)(`h2`,{className:`text-4xl md:text-5xl font-bold`,children:`Planning to Attend an Exhibition?`}),(0,A.jsx)(`p`,{className:`text-blue-100 text-lg mt-5 max-w-2xl mx-auto leading-7`,children:`Tell us about your exhibition and travel requirements. Our team will help you plan your complete journey.`}),(0,A.jsxs)(`a`,{href:`/sarathi-nx-official/#contact`,className:`inline-flex items-center gap-3 mt-8 bg-white text-[#003DA5] px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105`,children:[`Plan Your Exhibition Trip`,(0,A.jsx)(di,{})]})]})})})]})}var Th=[{id:1,title:`International Exhibitions`,category:`Exhibitions`,image:`/sarathi-nx-official/gallery/exhibition-1.jpg`},{id:2,title:`Business Travel`,category:`Business Travel`,image:`/sarathi-nx-official/gallery/business-1.jpg`},{id:3,title:`Corporate Travel`,category:`Corporate`,image:`/sarathi-nx-official/gallery/corporate-1.jpg`},{id:4,title:`Global Exhibitions`,category:`Exhibitions`,image:`/sarathi-nx-official/gallery/exhibition-2.jpg`},{id:5,title:`International Travel`,category:`Travel`,image:`/sarathi-nx-official/gallery/travel-1.jpg`},{id:6,title:`Business Meetings`,category:`Corporate`,image:`/sarathi-nx-official/gallery/business-2.jpg`},{id:7,title:`Global Business`,category:`Business Travel`,image:`/sarathi-nx-official/gallery/business-3.jpg`},{id:8,title:`Travel Experiences`,category:`Travel`,image:`/sarathi-nx-official/gallery/travel-2.jpg`}],Eh=[`All`,`Exhibitions`,`Business Travel`,`Corporate`,`Travel`];function Dh(){let[e,t]=(0,b.useState)(`All`),[n,r]=(0,b.useState)(null),i=e===`All`?Th:Th.filter(t=>t.category===e);return(0,A.jsxs)(`main`,{className:`bg-white`,children:[(0,A.jsx)(`section`,{className:`bg-[#003DA5] text-white pt-36 pb-24`,children:(0,A.jsx)(`div`,{className:`max-w-7xl mx-auto px-6`,children:(0,A.jsx)($,{children:(0,A.jsxs)(`div`,{className:`max-w-4xl`,children:[(0,A.jsx)(`span`,{className:`text-blue-200 uppercase tracking-[4px] font-semibold text-sm`,children:`Our Gallery`}),(0,A.jsxs)(`h1`,{className:`text-4xl md:text-6xl font-bold mt-5 leading-tight`,children:[`Explore Our`,(0,A.jsx)(`span`,{className:`block text-blue-200`,children:`Travel Experiences`})]}),(0,A.jsx)(`p`,{className:`mt-6 text-blue-100 text-lg leading-8 max-w-3xl`,children:`Take a look at our international exhibitions, business travel experiences and corporate travel journeys.`})]})})})}),(0,A.jsx)(`section`,{className:`py-24 bg-[#F5F9FF]`,children:(0,A.jsxs)(`div`,{className:`max-w-7xl mx-auto px-6`,children:[(0,A.jsx)($,{children:(0,A.jsx)(`div`,{className:`flex flex-wrap justify-center gap-3 mb-14`,children:Eh.map(n=>(0,A.jsx)(`button`,{onClick:()=>t(n),className:`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${e===n?`bg-[#003DA5] text-white shadow-lg`:`bg-white text-gray-700 hover:bg-[#EAF2FF] hover:text-[#003DA5]`}`,children:n},n))})}),(0,A.jsx)(`div`,{className:`grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6`,children:i.map((e,t)=>(0,A.jsx)($,{delay:t*.08,children:(0,A.jsxs)(`button`,{type:`button`,onClick:()=>r(e),className:`group relative w-full h-80 rounded-2xl overflow-hidden bg-gray-200 shadow-md hover:shadow-2xl transition-all duration-300`,children:[(0,A.jsx)(`img`,{src:e.image,alt:e.title,className:`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700`}),(0,A.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}),(0,A.jsxs)(`div`,{className:`absolute bottom-0 left-0 right-0 p-5 text-left translate-y-5 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300`,children:[(0,A.jsx)(`p`,{className:`text-blue-200 text-sm font-semibold`,children:e.category}),(0,A.jsx)(`h3`,{className:`text-white text-lg font-bold mt-1`,children:e.title})]}),(0,A.jsx)(`div`,{className:`absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 text-[#003DA5] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`,children:(0,A.jsx)(Jr,{})})]})},e.id))})]})}),(0,A.jsx)(`section`,{className:`py-20 bg-[#003DA5] text-white`,children:(0,A.jsx)(`div`,{className:`max-w-5xl mx-auto px-6 text-center`,children:(0,A.jsxs)($,{children:[(0,A.jsx)(`h2`,{className:`text-4xl md:text-5xl font-bold`,children:`Ready For Your Next Journey?`}),(0,A.jsx)(`p`,{className:`text-blue-100 text-lg mt-5 max-w-2xl mx-auto leading-7`,children:`Let Sarathi NX handle your complete business and exhibition travel requirements.`}),(0,A.jsx)(`a`,{href:`/sarathi-nx-official/#contact`,className:`inline-flex items-center gap-3 mt-8 bg-white text-[#003DA5] px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105`,children:`Plan Your Trip`})]})})}),n&&(0,A.jsxs)(`div`,{className:`fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-6`,onClick:()=>r(null),children:[(0,A.jsx)(`button`,{type:`button`,onClick:()=>r(null),className:`absolute top-6 right-6 w-12 h-12 rounded-full bg-white text-gray-800 flex items-center justify-center text-xl hover:bg-gray-200 transition`,children:(0,A.jsx)(hr,{})}),(0,A.jsxs)(`div`,{className:`max-w-5xl max-h-[85vh]`,onClick:e=>e.stopPropagation(),children:[(0,A.jsx)(`img`,{src:n.image,alt:n.title,className:`max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl`}),(0,A.jsxs)(`div`,{className:`text-center mt-5`,children:[(0,A.jsx)(`h3`,{className:`text-white text-2xl font-bold`,children:n.title}),(0,A.jsx)(`p`,{className:`text-blue-200 mt-1`,children:n.category})]})]})]})]})}function Oh(){return(0,A.jsxs)(`main`,{className:`bg-white`,children:[(0,A.jsx)(`section`,{className:`bg-[#003DA5] text-white pt-36 pb-24`,children:(0,A.jsx)(`div`,{className:`max-w-7xl mx-auto px-6`,children:(0,A.jsx)($,{children:(0,A.jsxs)(`div`,{className:`max-w-4xl`,children:[(0,A.jsx)(`span`,{className:`text-blue-200 uppercase tracking-[4px] font-semibold text-sm`,children:`Contact Us`}),(0,A.jsxs)(`h1`,{className:`text-4xl md:text-6xl font-bold mt-5 leading-tight`,children:[`Let's Plan Your`,(0,A.jsx)(`span`,{className:`block text-blue-200`,children:`Next Journey`})]}),(0,A.jsx)(`p`,{className:`mt-6 text-blue-100 text-lg leading-8 max-w-3xl`,children:`Whether you are planning an international exhibition, corporate trip or business travel, our team is ready to assist you.`})]})})})}),(0,A.jsx)(`section`,{className:`py-20 bg-[#F5F9FF]`,children:(0,A.jsx)(`div`,{className:`max-w-7xl mx-auto px-6`,children:(0,A.jsxs)(`div`,{className:`grid md:grid-cols-2 lg:grid-cols-4 gap-6`,children:[(0,A.jsx)($,{children:(0,A.jsxs)(`a`,{href:`tel:+917666984626`,className:`block bg-white rounded-2xl p-7 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300`,children:[(0,A.jsx)(`div`,{className:`w-14 h-14 rounded-xl bg-[#EAF2FF] text-[#003DA5] flex items-center justify-center text-xl`,children:(0,A.jsx)(Dr,{})}),(0,A.jsx)(`h3`,{className:`font-bold text-xl text-gray-800 mt-5`,children:`Call Us`}),(0,A.jsx)(`p`,{className:`text-gray-600 mt-2`,children:`+91 766 698 4626`})]})}),(0,A.jsx)($,{delay:.1,children:(0,A.jsxs)(`a`,{href:`mailto:info@sarathinx.com`,className:`block bg-white rounded-2xl p-7 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300`,children:[(0,A.jsx)(`div`,{className:`w-14 h-14 rounded-xl bg-[#EAF2FF] text-[#003DA5] flex items-center justify-center text-xl`,children:(0,A.jsx)(Xr,{})}),(0,A.jsx)(`h3`,{className:`font-bold text-xl text-gray-800 mt-5`,children:`Email Us`}),(0,A.jsx)(`p`,{className:`text-gray-600 mt-2 break-all`,children:`info@sarathinx.com`})]})}),(0,A.jsx)($,{delay:.2,children:(0,A.jsxs)(`a`,{href:`https://wa.me/917666984626`,target:`_blank`,rel:`noopener noreferrer`,className:`block bg-white rounded-2xl p-7 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300`,children:[(0,A.jsx)(`div`,{className:`w-14 h-14 rounded-xl bg-[#EAF2FF] text-[#003DA5] flex items-center justify-center text-xl`,children:(0,A.jsx)(ir,{})}),(0,A.jsx)(`h3`,{className:`font-bold text-xl text-gray-800 mt-5`,children:`WhatsApp`}),(0,A.jsx)(`p`,{className:`text-gray-600 mt-2`,children:`Chat With Our Team`})]})}),(0,A.jsx)($,{delay:.3,children:(0,A.jsxs)(`div`,{className:`bg-white rounded-2xl p-7 shadow-md`,children:[(0,A.jsx)(`div`,{className:`w-14 h-14 rounded-xl bg-[#EAF2FF] text-[#003DA5] flex items-center justify-center text-xl`,children:(0,A.jsx)(ei,{})}),(0,A.jsx)(`h3`,{className:`font-bold text-xl text-gray-800 mt-5`,children:`Working Hours`}),(0,A.jsxs)(`p`,{className:`text-gray-600 mt-2 leading-6`,children:[`Mon - Sat`,(0,A.jsx)(`br`,{}),`9:30 AM - 7:00 PM`]})]})})]})})}),(0,A.jsx)(`section`,{className:`py-24 bg-white`,children:(0,A.jsx)(`div`,{className:`max-w-7xl mx-auto px-6`,children:(0,A.jsxs)(`div`,{className:`grid lg:grid-cols-2 gap-14 items-start`,children:[(0,A.jsx)($,{children:(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`span`,{className:`text-[#003DA5] uppercase tracking-[4px] font-semibold text-sm`,children:`Get In Touch`}),(0,A.jsxs)(`h2`,{className:`text-4xl md:text-5xl font-bold text-gray-800 mt-4 leading-tight`,children:[`Tell Us About`,(0,A.jsxs)(`span`,{className:`text-[#003DA5]`,children:[` `,`Your Travel Plans`]})]}),(0,A.jsx)(`p`,{className:`text-gray-600 leading-8 mt-5`,children:`Share your requirements with us and our travel experts will get in touch with you to discuss the best solution for your journey.`}),(0,A.jsxs)(`div`,{className:`mt-10 space-y-7`,children:[(0,A.jsxs)(`div`,{className:`flex gap-4`,children:[(0,A.jsx)(`div`,{className:`w-12 h-12 rounded-xl bg-[#EAF2FF] text-[#003DA5] flex items-center justify-center shrink-0`,children:(0,A.jsx)(Mr,{})}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{className:`font-bold text-gray-800 text-lg`,children:`Our Office`}),(0,A.jsxs)(`p`,{className:`text-gray-600 mt-2 leading-6`,children:[`1st Floor, Office No. 026,`,(0,A.jsx)(`br`,{}),`Crystal Plaza CHS Ltd,`,(0,A.jsx)(`br`,{}),`Station Road, Mira Road East,`,(0,A.jsx)(`br`,{}),`Thane - 401107`]})]})]}),(0,A.jsxs)(`div`,{className:`flex gap-4`,children:[(0,A.jsx)(`div`,{className:`w-12 h-12 rounded-xl bg-[#EAF2FF] text-[#003DA5] flex items-center justify-center shrink-0`,children:(0,A.jsx)(Dr,{})}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{className:`font-bold text-gray-800 text-lg`,children:`Phone`}),(0,A.jsx)(`a`,{href:`tel:+917666984626`,className:`text-gray-600 hover:text-[#003DA5] mt-1 block`,children:`+91 766 698 4626`})]})]}),(0,A.jsxs)(`div`,{className:`flex gap-4`,children:[(0,A.jsx)(`div`,{className:`w-12 h-12 rounded-xl bg-[#EAF2FF] text-[#003DA5] flex items-center justify-center shrink-0`,children:(0,A.jsx)(Xr,{})}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{className:`font-bold text-gray-800 text-lg`,children:`Email`}),(0,A.jsx)(`a`,{href:`mailto:info@sarathinx.com`,className:`text-gray-600 hover:text-[#003DA5] mt-1 block`,children:`info@sarathinx.com`})]})]}),(0,A.jsxs)(`div`,{className:`flex gap-4`,children:[(0,A.jsx)(`div`,{className:`w-12 h-12 rounded-xl bg-[#EAF2FF] text-[#003DA5] flex items-center justify-center shrink-0`,children:(0,A.jsx)(ei,{})}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{className:`font-bold text-gray-800 text-lg`,children:`Working Hours`}),(0,A.jsxs)(`p`,{className:`text-gray-600 mt-1`,children:[`Monday - Saturday`,(0,A.jsx)(`br`,{}),`9:30 AM - 7:00 PM`]})]})]})]})]})}),(0,A.jsx)($,{direction:`right`,children:(0,A.jsxs)(`div`,{className:`bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-blue-100`,children:[(0,A.jsx)(`h3`,{className:`text-2xl font-bold text-gray-800`,children:`Send Us An Enquiry`}),(0,A.jsx)(`p`,{className:`text-gray-500 mt-2 mb-7`,children:`Fill in your details and tell us how we can help.`}),(0,A.jsxs)(`form`,{onSubmit:e=>{e.preventDefault();let t=e.target,n=t.name.value.trim(),r=t.phone.value.trim(),i=t.email.value.trim(),a=t.service.value,o=t.message.value.trim();if(!n||!r||!i||!a||!o){alert(`Please fill in all the fields.`);return}if(!/^[0-9]{10}$/.test(r)){alert(`Please enter a valid 10-digit mobile number.`);return}let s=`
Hello Sarathi NX,

I would like to make a travel enquiry.

Name: ${n}
Mobile: ${r}
Email: ${i}
Service: ${a}

Message:
${o}

Thank you.
    `.trim(),c=`https://wa.me/917666984626?text=${encodeURIComponent(s)}`;window.open(c,`_blank`),t.reset()},className:`space-y-4`,children:[(0,A.jsx)(`input`,{type:`text`,name:`name`,placeholder:`Your Name`,className:`w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:ring-2 focus:ring-[#003DA5]`}),(0,A.jsx)(`input`,{type:`tel`,name:`phone`,placeholder:`Phone Number`,maxLength:`10`,className:`w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:ring-2 focus:ring-[#003DA5]`}),(0,A.jsx)(`input`,{type:`email`,name:`email`,placeholder:`Email Address`,className:`w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:ring-2 focus:ring-[#003DA5]`}),(0,A.jsxs)(`select`,{name:`service`,defaultValue:``,className:`w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:ring-2 focus:ring-[#003DA5]`,children:[(0,A.jsx)(`option`,{value:``,disabled:!0,children:`Select Service`}),(0,A.jsx)(`option`,{value:`International Exhibition Travel`,children:`International Exhibition Travel`}),(0,A.jsx)(`option`,{value:`Corporate Travel`,children:`Corporate Travel`}),(0,A.jsx)(`option`,{value:`Business Travel`,children:`Business Travel`}),(0,A.jsx)(`option`,{value:`Visa Assistance`,children:`Visa Assistance`}),(0,A.jsx)(`option`,{value:`Hotel Booking`,children:`Hotel Booking`}),(0,A.jsx)(`option`,{value:`MICE & Group Tours`,children:`MICE & Group Tours`})]}),(0,A.jsx)(`textarea`,{name:`message`,rows:`5`,placeholder:`Tell us about your travel requirements...`,className:`w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 outline-none resize-none focus:ring-2 focus:ring-[#003DA5]`}),(0,A.jsxs)(`button`,{type:`submit`,className:`w-full flex items-center justify-center gap-3 bg-[#003DA5] hover:bg-[#002B73] text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02]`,children:[`Send Enquiry`,(0,A.jsx)(di,{})]})]})]})})]})})}),(0,A.jsx)(`section`,{className:`bg-[#F5F9FF]`,children:(0,A.jsxs)(`div`,{className:`max-w-7xl mx-auto px-6 py-20`,children:[(0,A.jsx)($,{children:(0,A.jsxs)(`div`,{className:`text-center mb-10`,children:[(0,A.jsx)(`span`,{className:`text-[#003DA5] uppercase tracking-[4px] font-semibold text-sm`,children:`Find Us`}),(0,A.jsx)(`h2`,{className:`text-4xl font-bold text-gray-800 mt-4`,children:`Visit Our Office`}),(0,A.jsx)(`p`,{className:`text-gray-600 mt-4`,children:`Crystal Plaza CHS Ltd, Station Road, Mira Road East, Thane - 401107`})]})}),(0,A.jsx)(`div`,{className:`rounded-3xl overflow-hidden shadow-xl border border-blue-100 h-[400px]`,children:(0,A.jsx)(`iframe`,{title:`Sarathi NX Office Location`,src:`https://www.google.com/maps?q=Crystal+Plaza+CHS+Ltd,+Station+Road,+Mira+Road+East,+Thane+401107&output=embed`,width:`100%`,height:`100%`,style:{border:0},loading:`lazy`,allowFullScreen:!0,referrerPolicy:`no-referrer-when-downgrade`})})]})}),(0,A.jsx)(`section`,{className:`py-20 bg-[#003DA5] text-white`,children:(0,A.jsx)(`div`,{className:`max-w-5xl mx-auto px-6 text-center`,children:(0,A.jsxs)($,{children:[(0,A.jsx)(`h2`,{className:`text-4xl md:text-5xl font-bold`,children:`We Plan. You Travel. We Care.`}),(0,A.jsx)(`p`,{className:`text-blue-100 text-lg mt-5 max-w-2xl mx-auto leading-7`,children:`Your trusted partner for international business, exhibition and corporate travel.`}),(0,A.jsxs)(`div`,{className:`flex flex-wrap justify-center gap-4 mt-8`,children:[(0,A.jsxs)(`a`,{href:`tel:+917666984626`,className:`inline-flex items-center gap-3 bg-white text-[#003DA5] px-7 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105`,children:[(0,A.jsx)(Dr,{}),`Call Now`]}),(0,A.jsxs)(`a`,{href:`https://wa.me/917666984626`,target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex items-center gap-3 border-2 border-white px-7 py-4 rounded-full font-semibold hover:bg-white hover:text-[#003DA5] transition-all duration-300`,children:[(0,A.jsx)(ir,{}),`WhatsApp Us`]})]})]})})})]})}function kh(){return(0,A.jsxs)(`div`,{className:`\r
        fixed\r
        bottom-6\r
        right-5\r
        z-[100]\r
        flex\r
        flex-col\r
        items-center\r
        gap-4\r
      `,children:[(0,A.jsxs)(`div`,{className:`relative`,children:[(0,A.jsx)(`span`,{className:`\r
            absolute\r
            inset-[-5px]\r
            rounded-full\r
            border-2\r
            border-[#25D366]/50\r
            animate-contact-pulse\r
            pointer-events-none\r
          `}),(0,A.jsx)(`span`,{className:`\r
            absolute\r
            inset-[-9px]\r
            rounded-full\r
            border\r
            border-[#25D366]/20\r
            animate-contact-pulse-slow\r
            pointer-events-none\r
          `}),(0,A.jsx)(`a`,{href:`https://wa.me/917666984626?text=Hello%20Sarathi%20NX%2C%20I%20would%20like%20to%20know%20more%20about%20your%20travel%20services.`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Chat with Sarathi NX on WhatsApp`,className:`\r
            relative\r
            z-10\r
            w-14\r
            h-14\r
            rounded-full\r
            bg-[#25D366]\r
            text-white\r
            flex\r
            items-center\r
            justify-center\r
            text-[27px]\r
            shadow-[0_8px_25px_rgba(37,211,102,0.45)]\r
            hover:bg-[#25D366]\r
            hover:scale-110\r
            hover:shadow-[0_10px_35px_rgba(37,211,102,0.65)]\r
            transition-all\r
            duration-300\r
          `,children:(0,A.jsx)(ir,{className:`animate-whatsapp-icon`})})]}),(0,A.jsxs)(`div`,{className:`relative`,children:[(0,A.jsx)(`span`,{className:`\r
            absolute\r
            inset-[-5px]\r
            rounded-full\r
            border-2\r
            border-[#0057B8]/45\r
            animate-contact-pulse\r
            pointer-events-none\r
          `}),(0,A.jsx)(`span`,{className:`\r
            absolute\r
            inset-[-9px]\r
            rounded-full\r
            border\r
            border-[#0057B8]/20\r
            animate-contact-pulse-slow\r
            pointer-events-none\r
          `}),(0,A.jsx)(`a`,{href:`tel:+917666984626`,"aria-label":`Call Sarathi NX`,className:`\r
            relative\r
            z-10\r
            w-14\r
            h-14\r
            rounded-full\r
            bg-[#0057B8]\r
            text-white\r
            flex\r
            items-center\r
            justify-center\r
            text-[22px]\r
            shadow-[0_8px_25px_rgba(0,87,184,0.45)]\r
            hover:bg-[#0057B8]\r
            hover:scale-110\r
            hover:shadow-[0_10px_35px_rgba(0,87,184,0.65)]\r
            transition-all\r
            duration-300\r
          `,children:(0,A.jsx)(Dr,{className:`animate-phone-icon`})})]}),(0,A.jsx)(`style`,{children:`

        /* ==============================================
           WHATSAPP ICON VIBRATION
        ============================================== */

        @keyframes whatsappVibrate {

          0%,
          82%,
          100% {
            transform: rotate(0deg) scale(1);
          }

          84% {
            transform: rotate(-12deg) scale(1.05);
          }

          86% {
            transform: rotate(12deg) scale(1.08);
          }

          88% {
            transform: rotate(-10deg) scale(1.05);
          }

          90% {
            transform: rotate(10deg) scale(1.08);
          }

          92% {
            transform: rotate(-6deg) scale(1.03);
          }

          94% {
            transform: rotate(6deg) scale(1.02);
          }

          96% {
            transform: rotate(0deg) scale(1);
          }

        }


        /* ==============================================
           PHONE ICON VIBRATION
        ============================================== */

        @keyframes phoneVibrate {

          0%,
          82%,
          100% {
            transform: rotate(0deg) scale(1);
          }

          84% {
            transform: rotate(-15deg) scale(1.06);
          }

          86% {
            transform: rotate(15deg) scale(1.09);
          }

          88% {
            transform: rotate(-12deg) scale(1.06);
          }

          90% {
            transform: rotate(12deg) scale(1.09);
          }

          92% {
            transform: rotate(-7deg) scale(1.04);
          }

          94% {
            transform: rotate(7deg) scale(1.02);
          }

          96% {
            transform: rotate(0deg) scale(1);
          }

        }


        /* ==============================================
           OUTER PULSE
        ============================================== */

        @keyframes contactPulse {

          0%,
          70% {
            transform: scale(1);
            opacity: 0.5;
          }

          85% {
            transform: scale(1.25);
            opacity: 0;
          }

          100% {
            transform: scale(1.25);
            opacity: 0;
          }

        }


        /* ==============================================
           SLOW OUTER PULSE
        ============================================== */

        @keyframes contactPulseSlow {

          0%,
          70% {
            transform: scale(1);
            opacity: 0.25;
          }

          90% {
            transform: scale(1.35);
            opacity: 0;
          }

          100% {
            transform: scale(1.35);
            opacity: 0;
          }

        }


        /* ==============================================
           ANIMATION CLASSES
        ============================================== */

        .animate-whatsapp-icon {
          animation: whatsappVibrate 4s ease-in-out infinite;
          transform-origin: center;
        }

        .animate-phone-icon {
          animation: phoneVibrate 4s ease-in-out infinite;
          animation-delay: 2s;
          transform-origin: center;
        }

        .animate-contact-pulse {
          animation: contactPulse 3.5s ease-out infinite;
        }

        .animate-contact-pulse-slow {
          animation: contactPulseSlow 3.5s ease-out infinite;
          animation-delay: 1.2s;
        }


        /* ==============================================
           REDUCE MOTION
        ============================================== */

        @media (prefers-reduced-motion: reduce) {

          .animate-whatsapp-icon,
          .animate-phone-icon,
          .animate-contact-pulse,
          .animate-contact-pulse-slow {
            animation: none;
          }

        }

      `})]})}var Ah=`https://sarathinx.com/api`;function jh(){let e=xt(),[t,n]=(0,b.useState)(``),[r,i]=(0,b.useState)(``),[a,o]=(0,b.useState)(``),[s,c]=(0,b.useState)(!1);return(0,A.jsx)(`div`,{className:`flex min-h-screen items-center justify-center bg-gray-100 px-4`,children:(0,A.jsxs)(`div`,{className:`w-full max-w-md rounded-2xl bg-white p-8 shadow-lg`,children:[(0,A.jsxs)(`div`,{className:`mb-8 text-center`,children:[(0,A.jsx)(`h1`,{className:`text-3xl font-bold text-gray-800`,children:`Admin Login`}),(0,A.jsx)(`p`,{className:`mt-2 text-gray-500`,children:`Sarathi NX Admin Panel`})]}),a&&(0,A.jsx)(`div`,{className:`mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600`,children:a}),(0,A.jsxs)(`form`,{onSubmit:async n=>{n.preventDefault(),o(``),c(!0);try{let n=`${Ah}/admin/login?username=${encodeURIComponent(t)}&password=${encodeURIComponent(r)}`,i=await fetch(n,{method:`POST`}),a=await i.json();if(!i.ok)throw Error(typeof a==`string`?a:a?.message||`Invalid username or password`);if(!a.token)throw Error(`Login successful, but token was not received.`);localStorage.setItem(`adminToken`,a.token),localStorage.setItem(`adminUsername`,a.username||t),e(`/admin`,{replace:!0})}catch(e){console.error(`Admin login error:`,e),o(e.message||`Unable to login. Please try again.`)}finally{c(!1)}},children:[(0,A.jsxs)(`div`,{className:`mb-5`,children:[(0,A.jsx)(`label`,{className:`mb-2 block text-sm font-medium text-gray-700`,children:`Username`}),(0,A.jsx)(`input`,{type:`text`,value:t,onChange:e=>n(e.target.value),placeholder:`Enter username`,autoComplete:`username`,required:!0,disabled:s,className:`w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100 disabled:bg-gray-100`})]}),(0,A.jsxs)(`div`,{className:`mb-6`,children:[(0,A.jsx)(`label`,{className:`mb-2 block text-sm font-medium text-gray-700`,children:`Password`}),(0,A.jsx)(`input`,{type:`password`,value:r,onChange:e=>i(e.target.value),placeholder:`Enter password`,autoComplete:`current-password`,required:!0,disabled:s,className:`w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100 disabled:bg-gray-100`})]}),(0,A.jsx)(`button`,{type:`submit`,disabled:s,className:`w-full rounded-lg bg-teal-600 py-3 font-semibold text-white transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60`,children:s?`Logging in...`:`Login`})]})]})})}var Mh=`https://sarathinx.com/api`;function Nh(){let e=xt(),[t,n]=(0,b.useState)([]),[r,i]=(0,b.useState)(!0),[a,o]=(0,b.useState)(``),[s,c]=(0,b.useState)(``),[l,u]=(0,b.useState)(`All`),[d,f]=(0,b.useState)(null),p=localStorage.getItem(`adminUsername`),m=()=>{localStorage.removeItem(`adminToken`),localStorage.removeItem(`adminUsername`),e(`/admin/login`,{replace:!0})},h=async()=>{i(!0),o(``);try{let e=localStorage.getItem(`adminToken`);if(!e){m();return}let t=await fetch(`${Mh}/enquiries`,{method:`GET`,headers:{Authorization:`Bearer ${e}`,"Content-Type":`application/json`}});if(t.status===401||t.status===403){m();return}if(!t.ok)throw Error(`Failed to fetch enquiries (${t.status})`);let r=await t.json();n(Array.isArray(r)?r:[])}catch(e){console.error(`Error fetching enquiries:`,e),o(`Unable to load enquiries. Please try again.`)}finally{i(!1)}};(0,b.useEffect)(()=>{h()},[]);let g=()=>{m()},_=async e=>{if(window.confirm(`Are you sure you want to delete this enquiry?`))try{let t=localStorage.getItem(`adminToken`);if(!t){m();return}let r=await fetch(`${Mh}/enquiries/${e}`,{method:`DELETE`,headers:{Authorization:`Bearer ${t}`}});if(r.status===401||r.status===403){m();return}if(!r.ok)throw Error(`Failed to delete enquiry (${r.status})`);n(t=>t.filter(t=>t.id!==e)),d&&d.id===e&&f(null)}catch(e){console.error(`Error deleting enquiry:`,e),alert(`Unable to delete enquiry.`)}},v=()=>{if(ee.length===0){alert(`No enquiries available to export.`);return}let e=[[`ID`,`Name`,`Phone`,`Email`,`Service`,`Message`,`Created At`],...ee.map(e=>[e.id??``,e.name??``,e.phone??``,e.email??``,e.service??``,e.message??``,e.createdAt?new Date(e.createdAt).toLocaleString():``])].map(e=>e.map(e=>`"${String(e).replace(/"/g,`""`)}"`).join(`,`)).join(`
`),t=new Blob([e],{type:`text/csv;charset=utf-8;`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`sarathi-nx-enquiries-${new Date().toISOString().slice(0,10)}.csv`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(n)},y=new Date,x=(0,b.useMemo)(()=>t.filter(e=>{if(!e.createdAt)return!1;let t=new Date(e.createdAt);return t.getDate()===y.getDate()&&t.getMonth()===y.getMonth()&&t.getFullYear()===y.getFullYear()}),[t]),S=(0,b.useMemo)(()=>t.filter(e=>{if(!e.createdAt)return!1;let t=new Date(e.createdAt);return t.getMonth()===y.getMonth()&&t.getFullYear()===y.getFullYear()}),[t]),C=(0,b.useMemo)(()=>{let e=t.map(e=>e.service).filter(Boolean);return[`All`,...new Set(e)]},[t]),w=(0,b.useMemo)(()=>{if(t.length===0)return`-`;let e={};t.forEach(t=>{let n=t.service||`Other`;e[n]=(e[n]||0)+1});let n=Object.entries(e).sort((e,t)=>t[1]-e[1]);return n.length>0?n[0][0]:`-`},[t]),ee=(0,b.useMemo)(()=>t.filter(e=>{let t=s.toLowerCase().trim(),n=!t||e.name?.toLowerCase().includes(t)||e.phone?.toLowerCase().includes(t)||e.email?.toLowerCase().includes(t),r=l===`All`||e.service===l;return n&&r}),[t,s,l]),te=(0,b.useMemo)(()=>[...t].sort((e,t)=>{let n=e.createdAt?new Date(e.createdAt).getTime():0;return(t.createdAt?new Date(t.createdAt).getTime():0)-n}).slice(0,5),[t]);return(0,A.jsxs)(`div`,{className:`min-h-screen bg-gray-100`,children:[(0,A.jsx)(`header`,{className:`border-b bg-white shadow-sm`,children:(0,A.jsxs)(`div`,{className:`flex flex-col justify-between gap-4 px-6 py-4 md:flex-row md:items-center`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h1`,{className:`text-2xl font-bold text-gray-800`,children:`Admin Dashboard`}),(0,A.jsx)(`p`,{className:`text-sm text-gray-500`,children:`Manage Sarathi NX enquiries`})]}),(0,A.jsxs)(`div`,{className:`flex items-center gap-3`,children:[p&&(0,A.jsxs)(`div`,{className:`hidden text-right sm:block`,children:[(0,A.jsx)(`p`,{className:`text-xs text-gray-500`,children:`Logged in as`}),(0,A.jsx)(`p`,{className:`font-semibold text-gray-800`,children:p})]}),(0,A.jsx)(`button`,{onClick:h,disabled:r,className:`rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 disabled:opacity-50`,children:r?`Loading...`:`Refresh`}),(0,A.jsx)(`button`,{onClick:g,className:`rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600`,children:`Logout`})]})]})}),(0,A.jsxs)(`main`,{className:`p-6`,children:[(0,A.jsxs)(`div`,{className:`mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4`,children:[(0,A.jsx)(`div`,{className:`rounded-2xl bg-white p-5 shadow-sm`,children:(0,A.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{className:`text-sm text-gray-500`,children:`Total Enquiries`}),(0,A.jsx)(`h2`,{className:`mt-2 text-3xl font-bold text-teal-600`,children:t.length})]}),(0,A.jsx)(`div`,{className:`flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-xl`,children:`📩`})]})}),(0,A.jsx)(`div`,{className:`rounded-2xl bg-white p-5 shadow-sm`,children:(0,A.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{className:`text-sm text-gray-500`,children:`Today's Enquiries`}),(0,A.jsx)(`h2`,{className:`mt-2 text-3xl font-bold text-blue-600`,children:x.length})]}),(0,A.jsx)(`div`,{className:`flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl`,children:`📅`})]})}),(0,A.jsx)(`div`,{className:`rounded-2xl bg-white p-5 shadow-sm`,children:(0,A.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{className:`text-sm text-gray-500`,children:`This Month`}),(0,A.jsx)(`h2`,{className:`mt-2 text-3xl font-bold text-purple-600`,children:S.length})]}),(0,A.jsx)(`div`,{className:`flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-xl`,children:`📊`})]})}),(0,A.jsx)(`div`,{className:`rounded-2xl bg-white p-5 shadow-sm`,children:(0,A.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,A.jsxs)(`div`,{className:`min-w-0`,children:[(0,A.jsx)(`p`,{className:`text-sm text-gray-500`,children:`Popular Service`}),(0,A.jsx)(`h2`,{className:`mt-2 truncate text-lg font-bold text-orange-600`,children:w})]}),(0,A.jsx)(`div`,{className:`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-xl`,children:`⭐`})]})})]}),(0,A.jsxs)(`div`,{className:`mb-6 rounded-2xl bg-white shadow-sm`,children:[(0,A.jsxs)(`div`,{className:`border-b px-6 py-4`,children:[(0,A.jsx)(`h2`,{className:`text-lg font-bold text-gray-800`,children:`Recent Enquiries`}),(0,A.jsx)(`p`,{className:`text-sm text-gray-500`,children:`Latest customer enquiries`})]}),(0,A.jsx)(`div`,{className:`divide-y`,children:te.length===0?(0,A.jsx)(`div`,{className:`p-6 text-center text-gray-500`,children:`No enquiries available.`}):te.map(e=>(0,A.jsxs)(`div`,{className:`flex flex-col gap-3 px-6 py-4 transition hover:bg-gray-50 md:flex-row md:items-center md:justify-between`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{className:`font-semibold text-gray-800`,children:e.name||`Unknown`}),(0,A.jsx)(`p`,{className:`text-sm text-gray-500`,children:e.email||`-`})]}),(0,A.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3`,children:[(0,A.jsx)(`span`,{className:`rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700`,children:e.service||`Other`}),(0,A.jsx)(`span`,{className:`text-xs text-gray-400`,children:e.createdAt?new Date(e.createdAt).toLocaleDateString():`-`}),(0,A.jsx)(`button`,{onClick:()=>f(e),className:`rounded-lg bg-blue-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-600`,children:`View`})]})]},e.id))})]}),(0,A.jsx)(`div`,{className:`mb-6 rounded-2xl bg-white p-5 shadow-sm`,children:(0,A.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 md:grid-cols-3`,children:[(0,A.jsx)(`input`,{type:`text`,placeholder:`Search name, phone or email...`,value:s,onChange:e=>c(e.target.value),className:`rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-teal-500`}),(0,A.jsx)(`select`,{value:l,onChange:e=>u(e.target.value),className:`rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-teal-500`,children:C.map(e=>(0,A.jsx)(`option`,{value:e,children:e},e))}),(0,A.jsx)(`button`,{onClick:v,className:`rounded-lg bg-green-600 px-4 py-3 font-semibold text-white transition hover:bg-green-700`,children:`📥 Export CSV`})]})}),a&&(0,A.jsx)(`div`,{className:`mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600`,children:a}),(0,A.jsxs)(`div`,{className:`overflow-hidden rounded-2xl bg-white shadow-sm`,children:[(0,A.jsxs)(`div`,{className:`border-b px-6 py-4`,children:[(0,A.jsx)(`h2`,{className:`text-lg font-bold text-gray-800`,children:`All Enquiries`}),(0,A.jsxs)(`p`,{className:`text-sm text-gray-500`,children:[ee.length,` enquiries found`]})]}),(0,A.jsx)(`div`,{className:`overflow-x-auto`,children:r?(0,A.jsx)(`div`,{className:`p-10 text-center text-gray-500`,children:`Loading enquiries...`}):ee.length===0?(0,A.jsxs)(`div`,{className:`p-10 text-center text-gray-500`,children:[(0,A.jsx)(`p`,{className:`text-lg font-medium`,children:`No enquiries found`}),(0,A.jsx)(`p`,{className:`mt-1 text-sm`,children:`Try changing your search or service filter.`})]}):(0,A.jsxs)(`table`,{className:`w-full min-w-[1100px] text-left`,children:[(0,A.jsx)(`thead`,{className:`bg-gray-50`,children:(0,A.jsxs)(`tr`,{children:[(0,A.jsx)(`th`,{className:`px-4 py-3 text-sm font-semibold text-gray-600`,children:`ID`}),(0,A.jsx)(`th`,{className:`px-4 py-3 text-sm font-semibold text-gray-600`,children:`Name`}),(0,A.jsx)(`th`,{className:`px-4 py-3 text-sm font-semibold text-gray-600`,children:`Phone`}),(0,A.jsx)(`th`,{className:`px-4 py-3 text-sm font-semibold text-gray-600`,children:`Email`}),(0,A.jsx)(`th`,{className:`px-4 py-3 text-sm font-semibold text-gray-600`,children:`Service`}),(0,A.jsx)(`th`,{className:`px-4 py-3 text-sm font-semibold text-gray-600`,children:`Date`}),(0,A.jsx)(`th`,{className:`px-4 py-3 text-sm font-semibold text-gray-600`,children:`Action`})]})}),(0,A.jsx)(`tbody`,{children:ee.map(e=>(0,A.jsxs)(`tr`,{className:`border-b transition hover:bg-gray-50`,children:[(0,A.jsxs)(`td`,{className:`px-4 py-4 text-sm text-gray-500`,children:[`#`,e.id]}),(0,A.jsx)(`td`,{className:`px-4 py-4 text-sm font-semibold text-gray-800`,children:e.name||`-`}),(0,A.jsx)(`td`,{className:`px-4 py-4 text-sm text-gray-600`,children:e.phone||`-`}),(0,A.jsx)(`td`,{className:`px-4 py-4 text-sm text-gray-600`,children:e.email||`-`}),(0,A.jsx)(`td`,{className:`px-4 py-4`,children:(0,A.jsx)(`span`,{className:`rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700`,children:e.service||`Other`})}),(0,A.jsx)(`td`,{className:`whitespace-nowrap px-4 py-4 text-sm text-gray-500`,children:e.createdAt?new Date(e.createdAt).toLocaleString():`-`}),(0,A.jsx)(`td`,{className:`px-4 py-4`,children:(0,A.jsxs)(`div`,{className:`flex gap-2`,children:[(0,A.jsx)(`button`,{onClick:()=>f(e),className:`rounded-lg bg-blue-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-600`,children:`View`}),(0,A.jsx)(`button`,{onClick:()=>_(e.id),className:`rounded-lg bg-red-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-red-600`,children:`Delete`})]})})]},e.id))})]})})]})]}),d&&(0,A.jsx)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4`,children:(0,A.jsxs)(`div`,{className:`max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl`,children:[(0,A.jsxs)(`div`,{className:`flex items-center justify-between border-b px-6 py-4`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h2`,{className:`text-xl font-bold text-gray-800`,children:`Enquiry Details`}),(0,A.jsxs)(`p`,{className:`text-xs text-gray-500`,children:[`Enquiry #`,d.id]})]}),(0,A.jsx)(`button`,{onClick:()=>f(null),className:`flex h-9 w-9 items-center justify-center rounded-full text-2xl text-gray-500 transition hover:bg-gray-100 hover:text-gray-800`,children:`×`})]}),(0,A.jsxs)(`div`,{className:`space-y-5 p-6`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{className:`mb-1 text-xs font-medium uppercase tracking-wide text-gray-400`,children:`Name`}),(0,A.jsx)(`p`,{className:`font-semibold text-gray-800`,children:d.name||`-`})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{className:`mb-1 text-xs font-medium uppercase tracking-wide text-gray-400`,children:`Phone`}),(0,A.jsx)(`p`,{className:`font-semibold text-gray-800`,children:d.phone||`-`})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{className:`mb-1 text-xs font-medium uppercase tracking-wide text-gray-400`,children:`Email`}),(0,A.jsx)(`p`,{className:`break-all font-semibold text-gray-800`,children:d.email||`-`})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{className:`mb-1 text-xs font-medium uppercase tracking-wide text-gray-400`,children:`Service`}),(0,A.jsx)(`span`,{className:`inline-block rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-700`,children:d.service||`Other`})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{className:`mb-1 text-xs font-medium uppercase tracking-wide text-gray-400`,children:`Message`}),(0,A.jsx)(`div`,{className:`rounded-xl bg-gray-50 p-4 text-sm leading-6 text-gray-700`,children:d.message||`No message provided.`})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{className:`mb-1 text-xs font-medium uppercase tracking-wide text-gray-400`,children:`Submitted At`}),(0,A.jsx)(`p`,{className:`text-sm text-gray-700`,children:d.createdAt?new Date(d.createdAt).toLocaleString():`-`})]})]}),(0,A.jsxs)(`div`,{className:`flex justify-end gap-3 border-t px-6 py-4`,children:[(0,A.jsx)(`button`,{onClick:()=>f(null),className:`rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-900`,children:`Close`}),(0,A.jsx)(`button`,{onClick:()=>_(d.id),className:`rounded-lg bg-red-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600`,children:`Delete`})]})]})})]})}function Ph({children:e}){return localStorage.getItem(`adminToken`)?e:(0,A.jsx)(Wt,{to:`/admin/login`,replace:!0})}function Fh(){let{pathname:e}=vt();return(0,b.useEffect)(()=>{window.scrollTo({top:0,left:0,behavior:`instant`})},[e]),null}function Ih(){return(0,A.jsxs)(Mn,{basename:`/sarathi-nx-official`,children:[(0,A.jsx)(Fh,{}),(0,A.jsx)(_i,{}),(0,A.jsx)(yi,{}),(0,A.jsxs)(qt,{children:[(0,A.jsx)(Gt,{path:`/`,element:(0,A.jsx)(yh,{})}),(0,A.jsx)(Gt,{path:`/flight-air-travel`,element:(0,A.jsx)(Sh,{})}),(0,A.jsx)(Gt,{path:`/hotel-accommodation`,element:(0,A.jsx)(Sh,{})}),(0,A.jsx)(Gt,{path:`/visa-documentation`,element:(0,A.jsx)(Sh,{})}),(0,A.jsx)(Gt,{path:`/trade-fair`,element:(0,A.jsx)(wh,{})}),(0,A.jsx)(Gt,{path:`/premium-holiday-packages`,element:(0,A.jsx)(Sh,{})}),(0,A.jsx)(Gt,{path:`/about-us`,element:(0,A.jsx)(bh,{})}),(0,A.jsx)(Gt,{path:`/contact-us`,element:(0,A.jsx)(Oh,{})}),(0,A.jsx)(Gt,{path:`/about`,element:(0,A.jsx)(bh,{})}),(0,A.jsx)(Gt,{path:`/services`,element:(0,A.jsx)(Sh,{})}),(0,A.jsx)(Gt,{path:`/exhibitions`,element:(0,A.jsx)(wh,{})}),(0,A.jsx)(Gt,{path:`/gallery`,element:(0,A.jsx)(Dh,{})}),(0,A.jsx)(Gt,{path:`/contact`,element:(0,A.jsx)(Oh,{})}),(0,A.jsx)(Gt,{path:`/admin/login`,element:(0,A.jsx)(jh,{})}),(0,A.jsx)(Gt,{path:`/admin`,element:(0,A.jsx)(Ph,{children:(0,A.jsx)(Nh,{})})}),(0,A.jsx)(Gt,{path:`*`,element:(0,A.jsx)(yh,{})})]}),(0,A.jsx)(hh,{}),(0,A.jsx)(kh,{})]})}(0,x.createRoot)(document.getElementById(`root`)).render((0,A.jsx)(b.StrictMode,{children:(0,A.jsx)(Ih,{})}));