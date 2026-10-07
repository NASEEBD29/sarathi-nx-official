var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},s=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),c=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},l=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},u=(n,r,o)=>(o=n==null?{}:e(i(n)),l(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n)),d=e=>a.call(e,`module.exports`)?e[`module.exports`]:l(t({},`__esModule`,{value:!0}),e);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var f=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function te(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ne(e,t){return te(e.type,t,e.props)}function re(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ae=/\/+/g;function oe(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function T(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+oe(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ae,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(re(o)&&(o=ne(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ae,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+oe(a,u),c+=se(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+oe(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(T(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var E=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},D={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!re(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=D,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return te(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return te(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=re,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,E)}catch(e){E(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),p=s(((e,t)=>{t.exports=f()})),m=s((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,re());else{var t=n(l);t!==null&&oe(x,t.startTime-e)}}var S=!1,C=-1,w=5,ee=-1;function te(){return g?!0:!(e.unstable_now()-ee<w)}function ne(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&oe(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}}}finally{i?re():S=!1}}}var re;if(typeof y==`function`)re=function(){y(ne)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=ne,re=function(){ae.postMessage(null)}}else re=function(){_(ne,0)};function oe(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,oe(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,re()))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),h=s(((e,t)=>{t.exports=m()})),g=s((e=>{var t=p();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),_=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=s((e=>{var t=h(),n=p(),r=_();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function d(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=d(e),t!==null)return t;e=e.sibling}return null}var f=Object.assign,m=Symbol.for(`react.element`),g=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),te=Symbol.for(`react.suspense_list`),ne=Symbol.for(`react.memo`),re=Symbol.for(`react.lazy`),ie=Symbol.for(`react.activity`),ae=Symbol.for(`react.memo_cache_sentinel`),oe=Symbol.iterator;function T(e){return typeof e!=`object`||!e?null:(e=oe&&e[oe]||e[`@@iterator`],typeof e==`function`?e:null)}var se=Symbol.for(`react.client.reference`);function ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case te:return`SuspenseList`;case ie:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ne:return t=e.displayName||null,t===null?ce(e.type)||`Memo`:t;case re:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}var le=Array.isArray,E=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},de=[],fe=-1;function pe(e){return{current:e}}function me(e){0>fe||(e.current=de[fe],de[fe]=null,fe--)}function O(e,t){fe++,de[fe]=e.current,e.current=t}var he=pe(null),ge=pe(null),_e=pe(null),ve=pe(null);function ye(e,t){switch(O(_e,t),O(ge,e),O(he,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Hd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Hd(t),e=Ud(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}me(he),O(he,e)}function be(){me(he),me(ge),me(_e)}function xe(e){e.memoizedState!==null&&O(ve,e);var t=he.current,n=Ud(t,e.type);t!==n&&(O(ge,e),O(he,n))}function Se(e){ge.current===e&&(me(he),me(ge)),ve.current===e&&(me(ve),$f._currentValue=ue)}var Ce,we;function Te(e){if(Ce===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ce=t&&t[1]||``,we=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ce+e+we}var Ee=!1;function De(e,t){if(!e||Ee)return``;Ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ee=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Te(n):``}function Oe(e,t){switch(e.tag){case 26:case 27:case 5:return Te(e.type);case 16:return Te(`Lazy`);case 13:return e.child!==t&&t!==null?Te(`Suspense Fallback`):Te(`Suspense`);case 19:return Te(`SuspenseList`);case 0:case 15:return De(e.type,!1);case 11:return De(e.type.render,!1);case 1:return De(e.type,!0);case 31:return Te(`Activity`);default:return``}}function ke(e){try{var t=``,n=null;do t+=Oe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ae=Object.prototype.hasOwnProperty,je=t.unstable_scheduleCallback,Me=t.unstable_cancelCallback,Ne=t.unstable_shouldYield,Pe=t.unstable_requestPaint,Fe=t.unstable_now,Ie=t.unstable_getCurrentPriorityLevel,Le=t.unstable_ImmediatePriority,Re=t.unstable_UserBlockingPriority,ze=t.unstable_NormalPriority,Be=t.unstable_LowPriority,Ve=t.unstable_IdlePriority,He=t.log,Ue=t.unstable_setDisableYieldValue,We=null,Ge=null;function Ke(e){if(typeof He==`function`&&Ue(e),Ge&&typeof Ge.setStrictMode==`function`)try{Ge.setStrictMode(We,e)}catch{}}var qe=Math.clz32?Math.clz32:Xe,Je=Math.log,Ye=Math.LN2;function Xe(e){return e>>>=0,e===0?32:31-(Je(e)/Ye|0)|0}var Ze=256,Qe=262144,$e=4194304;function et(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=et(n))):i=et(o):i=et(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=et(n))):i=et(o)):i=et(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function nt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function rt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function it(){var e=$e;return $e<<=1,!($e&62914560)&&($e=4194304),e}function at(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ot(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function st(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-qe(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ct(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ct(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-qe(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function lt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ut(e,t){var n=t&-t;return n=n&42?1:dt(n),(n&(e.suspendedLanes|t))===0?n:0}function dt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ft(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function pt(){var e=D.p;return e===0?(e=window.event,e===void 0?32:hp(e.type)):e}function mt(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var ht=Math.random().toString(36).slice(2),gt=`__reactFiber$`+ht,_t=`__reactProps$`+ht,vt=`__reactContainer$`+ht,yt=`__reactEvents$`+ht,bt=`__reactListeners$`+ht,xt=`__reactHandles$`+ht,St=`__reactResources$`+ht,Ct=`__reactMarker$`+ht;function wt(e){delete e[gt],delete e[_t],delete e[yt],delete e[bt],delete e[xt]}function Tt(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ff(e);e!==null;){if(n=e[gt])return n;e=ff(e)}return t}e=n,n=e.parentNode}return null}function Et(e){if(e=e[gt]||e[vt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Dt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Ot(e){var t=e[St];return t||=e[St]={hoistableStyles:new Map,hoistableScripts:new Map},t}function kt(e){e[Ct]=!0}var At=new Set,jt={};function Mt(e,t){Nt(e,t),Nt(e+`Capture`,t)}function Nt(e,t){for(jt[e]=t,e=0;e<t.length;e++)At.add(t[e])}var Pt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ft={},It={};function Lt(e){return Ae.call(It,e)?!0:Ae.call(Ft,e)?!1:Pt.test(e)?It[e]=!0:(Ft[e]=!0,!1)}function Rt(e,t,n){if(Lt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function zt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Bt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Vt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ht(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ut(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wt(e){if(!e._valueTracker){var t=Ht(e)?`checked`:`value`;e._valueTracker=Ut(e,t,``+e[t])}}function k(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ht(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Gt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Kt=/[\n"\\]/g;function qt(e){return e.replace(Kt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Jt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Vt(t)):e.value!==``+Vt(t)&&(e.value=``+Vt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Xt(e,o,Vt(n)):Xt(e,o,Vt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Vt(s):e.removeAttribute(`name`)}function Yt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Wt(e);return}n=n==null?``:``+Vt(n),t=t==null?n:``+Vt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Wt(e)}function Xt(e,t,n){t===`number`&&Gt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qt(e,t,n){if(t!=null&&(t=``+Vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Vt(n)}function $t(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(le(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Vt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Wt(e)}function en(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function nn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||tn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function rn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&nn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&nn(e,o,t[o])}function an(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var on=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),sn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cn(e){return sn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function ln(){}var un=null;function dn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fn=null,pn=null;function mn(e){var t=Et(e);if(t&&(e=t.stateNode)){var n=e[_t]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Jt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+qt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[_t]||null;if(!a)throw Error(i(90));Jt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&k(r)}break a;case`textarea`:Qt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}}}var hn=!1;function gn(e,t,n){if(hn)return e(t,n);hn=!0;try{return e(t)}finally{if(hn=!1,(fn!==null||pn!==null)&&(xu(),fn&&(t=fn,e=pn,pn=fn=null,mn(t),e)))for(t=0;t<e.length;t++)mn(e[t])}}function _n(e,t){var n=e.stateNode;if(n===null)return null;var r=n[_t]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var vn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),yn=!1;if(vn)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){yn=!0}}),window.addEventListener(`test`,bn,bn),window.removeEventListener(`test`,bn,bn)}catch{yn=!1}var xn=null,Sn=null,Cn=null;function wn(){if(Cn)return Cn;var e,t=Sn,n=t.length,r,i=`value`in xn?xn.value:xn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Cn=i.slice(e,1<r?1-r:void 0)}function Tn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function En(){return!0}function Dn(){return!1}function On(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?En:Dn,this.isPropagationStopped=Dn,this}return f(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=En)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=En)},persist:function(){},isPersistent:En}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},An=On(kn),jn=f({},kn,{view:0,detail:0}),Mn=On(jn),Nn,Pn,Fn,In=f({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Fn&&(Fn&&e.type===`mousemove`?(Nn=e.screenX-Fn.screenX,Pn=e.screenY-Fn.screenY):Pn=Nn=0,Fn=e),Nn)},movementY:function(e){return`movementY`in e?e.movementY:Pn}}),Ln=On(In),Rn=On(f({},In,{dataTransfer:0})),zn=On(f({},jn,{relatedTarget:0})),Bn=On(f({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),Vn=On(f({},kn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Hn=On(f({},kn,{data:0})),Un={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Wn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Gn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gn[e])?!!t[e]:!1}function qn(){return Kn}var Jn=On(f({},jn,{key:function(e){if(e.key){var t=Un[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Tn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Wn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qn,charCode:function(e){return e.type===`keypress`?Tn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Tn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Yn=On(f({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Xn=On(f({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qn})),Zn=On(f({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Qn=On(f({},In,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),$n=On(f({},kn,{newState:0,oldState:0})),er=[9,13,27,32],A=vn&&`CompositionEvent`in window,tr=null;vn&&`documentMode`in document&&(tr=document.documentMode);var nr=vn&&`TextEvent`in window&&!tr,rr=vn&&(!A||tr&&8<tr&&11>=tr),ir=` `,ar=!1;function or(e,t){switch(e){case`keyup`:return er.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function sr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var cr=!1;function lr(e,t){switch(e){case`compositionend`:return sr(t);case`keypress`:return t.which===32?(ar=!0,ir):null;case`textInput`:return e=t.data,e===ir&&ar?null:e;default:return null}}function ur(e,t){if(cr)return e===`compositionend`||!A&&or(e,t)?(e=wn(),Cn=Sn=xn=null,cr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return rr&&t.locale!==`ko`?null:t.data;default:return null}}var dr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!dr[e.type]:t===`textarea`}function pr(e,t,n,r){fn?pn?pn.push(r):pn=[r]:fn=r,t=Dd(t,`onChange`),0<t.length&&(n=new An(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var mr=null,hr=null;function gr(e){bd(e,0)}function _r(e){if(k(Dt(e)))return e}function vr(e,t){if(e===`change`)return t}var yr=!1;if(vn){var br;if(vn){var xr=`oninput`in document;if(!xr){var Sr=document.createElement(`div`);Sr.setAttribute(`oninput`,`return;`),xr=typeof Sr.oninput==`function`}br=xr}else br=!1;yr=br&&(!document.documentMode||9<document.documentMode)}function Cr(){mr&&(mr.detachEvent(`onpropertychange`,wr),hr=mr=null)}function wr(e){if(e.propertyName===`value`&&_r(hr)){var t=[];pr(t,hr,e,dn(e)),gn(gr,t)}}function Tr(e,t,n){e===`focusin`?(Cr(),mr=t,hr=n,mr.attachEvent(`onpropertychange`,wr)):e===`focusout`&&Cr()}function Er(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return _r(hr)}function Dr(e,t){if(e===`click`)return _r(t)}function Or(e,t){if(e===`input`||e===`change`)return _r(t)}function kr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Ar=typeof Object.is==`function`?Object.is:kr;function jr(e,t){if(Ar(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ae.call(t,i)||!Ar(e[i],t[i]))return!1}return!0}function Mr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nr(e,t){var n=Mr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Mr(n)}}function Pr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gt(e.document)}return t}function Ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Lr=vn&&`documentMode`in document&&11>=document.documentMode,Rr=null,zr=null,Br=null,Vr=!1;function Hr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vr||Rr==null||Rr!==Gt(r)||(r=Rr,`selectionStart`in r&&Ir(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Br&&jr(Br,r)||(Br=r,r=Dd(zr,`onSelect`),0<r.length&&(t=new An(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Rr)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Wr={animationend:Ur(`Animation`,`AnimationEnd`),animationiteration:Ur(`Animation`,`AnimationIteration`),animationstart:Ur(`Animation`,`AnimationStart`),transitionrun:Ur(`Transition`,`TransitionRun`),transitionstart:Ur(`Transition`,`TransitionStart`),transitioncancel:Ur(`Transition`,`TransitionCancel`),transitionend:Ur(`Transition`,`TransitionEnd`)},Gr={},Kr={};vn&&(Kr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),`TransitionEvent`in window||delete Wr.transitionend.transition);function qr(e){if(Gr[e])return Gr[e];if(!Wr[e])return e;var t=Wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kr)return Gr[e]=t[n];return e}var Jr=qr(`animationend`),Yr=qr(`animationiteration`),Xr=qr(`animationstart`),Zr=qr(`transitionrun`),Qr=qr(`transitionstart`),$r=qr(`transitioncancel`),ei=qr(`transitionend`),ti=new Map,ni=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ni.push(`scrollEnd`);function ri(e,t){ti.set(e,t),Mt(t,[e])}var ii=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ai=[],oi=0,si=0;function ci(){for(var e=oi,t=si=oi=0;t<e;){var n=ai[t];ai[t++]=null;var r=ai[t];ai[t++]=null;var i=ai[t];ai[t++]=null;var a=ai[t];if(ai[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&di(n,i,a)}}function li(e,t,n,r){ai[oi++]=e,ai[oi++]=t,ai[oi++]=n,ai[oi++]=r,si|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function j(e,t,n,r){return li(e,t,n,r),fi(e)}function ui(e,t){return li(e,null,null,t),fi(e)}function di(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-qe(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function fi(e){if(50<fu)throw fu=0,pu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var pi={};function mi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(e,t,n,r){return new mi(e,t,n,r)}function gi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function M(e,t){var n=e.alternate;return n===null?(n=hi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function _i(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function vi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)gi(e)&&(s=1);else if(typeof e==`string`)s=Wf(e,n,he.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ie:return e=hi(31,n,t,a),e.elementType=ie,e.lanes=o,e;case y:return yi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=hi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=hi(13,n,t,a),e.elementType=ee,e.lanes=o,e;case te:return e=hi(19,n,t,a),e.elementType=te,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ne:s=14;break a;case re:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=hi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function yi(e,t,n,r){return e=hi(7,e,r,t),e.lanes=n,e}function bi(e,t,n){return e=hi(6,e,null,t),e.lanes=n,e}function xi(e){var t=hi(18,null,null,0);return t.stateNode=e,t}function Si(e,t,n){return t=hi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var N=new WeakMap;function Ci(e,t){if(typeof e==`object`&&e){var n=N.get(e);return n===void 0?(t={value:e,source:t,stack:ke(t)},N.set(e,t),t):n}return{value:e,source:t,stack:ke(t)}}var wi=[],Ti=0,Ei=null,Di=0,Oi=[],ki=0,Ai=null,ji=1,Mi=``;function Ni(e,t){wi[Ti++]=Di,wi[Ti++]=Ei,Ei=e,Di=t}function Pi(e,t,n){Oi[ki++]=ji,Oi[ki++]=Mi,Oi[ki++]=Ai,Ai=e;var r=ji;e=Mi;var i=32-qe(r)-1;r&=~(1<<i),n+=1;var a=32-qe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ji=1<<32-qe(t)+i|n<<i|r,Mi=a+e}else ji=1<<a|n<<i|r,Mi=e}function Fi(e){e.return!==null&&(Ni(e,1),Pi(e,1,0))}function Ii(e){for(;e===Ei;)Ei=wi[--Ti],wi[Ti]=null,Di=wi[--Ti],wi[Ti]=null;for(;e===Ai;)Ai=Oi[--ki],Oi[ki]=null,Mi=Oi[--ki],Oi[ki]=null,ji=Oi[--ki],Oi[ki]=null}function Li(e,t){Oi[ki++]=ji,Oi[ki++]=Mi,Oi[ki++]=Ai,ji=t.id,Mi=t.overflow,Ai=e}var P=null,F=null,I=!1,Ri=null,L=!1,zi=Error(i(519));function Bi(e){throw Ki(Ci(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),zi}function Vi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[gt]=e,t[_t]=r,n){case`dialog`:Z(`cancel`,t),Z(`close`,t);break;case`iframe`:case`object`:case`embed`:Z(`load`,t);break;case`video`:case`audio`:for(n=0;n<vd.length;n++)Z(vd[n],t);break;case`source`:Z(`error`,t);break;case`img`:case`image`:case`link`:Z(`error`,t),Z(`load`,t);break;case`details`:Z(`toggle`,t);break;case`input`:Z(`invalid`,t),Yt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Z(`invalid`,t);break;case`textarea`:Z(`invalid`,t),$t(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Nd(t.textContent,n)?(r.popover!=null&&(Z(`beforetoggle`,t),Z(`toggle`,t)),r.onScroll!=null&&Z(`scroll`,t),r.onScrollEnd!=null&&Z(`scrollend`,t),r.onClick!=null&&(t.onclick=ln),t=!0):t=!1,t||Bi(e,!0)}function Hi(e){for(P=e.return;P;)switch(P.tag){case 5:case 31:case 13:L=!1;return;case 27:case 3:L=!0;return;default:P=P.return}}function Ui(e){if(e!==P)return!1;if(!I)return Hi(e),I=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Wd(e.type,e.memoizedProps)),n=!n),n&&F&&Bi(e),Hi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));F=df(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));F=df(e)}else t===27?(t=F,Qd(e.type)?(e=uf,uf=null,F=e):F=t):F=P?lf(e.stateNode.nextSibling):null;return!0}function Wi(){F=P=null,I=!1}function Gi(){var e=Ri;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Ri=null),e}function Ki(e){Ri===null?Ri=[e]:Ri.push(e)}var qi=pe(null),Ji=null,Yi=null;function Xi(e,t,n){O(qi,t._currentValue),t._currentValue=n}function Zi(e){e._currentValue=qi.current,me(qi)}function Qi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function $i(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Qi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Qi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ea(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Ar(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ve.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[$f]:e.push($f))}a=a.return}e!==null&&$i(t,e,n,r),t.flags|=262144}function ta(e){for(e=e.firstContext;e!==null;){if(!Ar(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function na(e){Ji=e,Yi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ra(e){return aa(Ji,e)}function ia(e,t){return Ji===null&&na(e),aa(e,t)}function aa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Yi===null){if(e===null)throw Error(i(308));Yi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Yi=Yi.next=t;return n}var oa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},sa=t.unstable_scheduleCallback,ca=t.unstable_NormalPriority,la={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ua(){return{controller:new oa,data:new Map,refCount:0}}function da(e){e.refCount--,e.refCount===0&&sa(ca,function(){e.controller.abort()})}var fa=null,R=0,pa=0,ma=null;function ha(e,t){if(fa===null){var n=fa=[];R=0,pa=fd(),ma={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return R++,t.then(ga,ga),t}function ga(){if(--R===0&&fa!==null){ma!==null&&(ma.status=`fulfilled`);var e=fa;fa=null,pa=0,ma=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function _a(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var va=E.S;E.S=function(e,t){tu=Fe(),typeof t==`object`&&t&&typeof t.then==`function`&&ha(e,t),va!==null&&va(e,t)};var ya=pe(null);function ba(){var e=ya.current;return e===null?K.pooledCache:e}function xa(e,t){t===null?O(ya,ya.current):O(ya,t.pool)}function Sa(){var e=ba();return e===null?null:{parent:la._currentValue,pool:e}}var Ca=Error(i(460)),wa=Error(i(474)),Ta=Error(i(542)),Ea={then:function(){}};function Da(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Oa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ln,ln),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ma(e),e;default:if(typeof t.status==`string`)t.then(ln,ln);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ma(e),e}throw Aa=t,Ca}}function ka(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Aa=e,Ca):e}}var Aa=null;function ja(){if(Aa===null)throw Error(i(459));var e=Aa;return Aa=null,e}function Ma(e){if(e===Ca||e===Ta)throw Error(i(483))}var Na=null,Pa=0;function Fa(e){var t=Pa;return Pa+=1,Na===null&&(Na=[]),Oa(Na,e,t)}function Ia(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function La(e,t){throw t.$$typeof===m?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ra(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=M(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=bi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===re&&ka(i)===t.type)?(t=a(t,n.props),Ia(t,n),t.return=e,t):(t=vi(n.type,n.key,n.props,null,e.mode,r),Ia(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Si(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=yi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=bi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case g:return n=vi(t.type,t.key,t.props,null,e.mode,n),Ia(n,t),n.return=e,n;case v:return t=Si(t,e.mode,n),t.return=e,t;case re:return t=ka(t),f(e,t,n)}if(le(t)||T(t))return t=yi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Fa(t),n);if(t.$$typeof===C)return f(e,ia(e,t),n);La(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case g:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case re:return n=ka(n),p(e,t,n,r)}if(le(n)||T(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Fa(n),r);if(n.$$typeof===C)return p(e,t,ia(e,n),r);La(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case g:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case re:return r=ka(r),m(e,t,n,r,i)}if(le(r)||T(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Fa(r),i);if(r.$$typeof===C)return m(e,t,n,ia(t,r),i);La(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),I&&Ni(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return I&&Ni(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),I&&Ni(i,h),l}function _(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),I&&Ni(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return I&&Ni(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),I&&Ni(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case g:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===re&&ka(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ia(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=yi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=vi(o.type,o.key,o.props,null,e.mode,c),Ia(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}t(e,r),r=r.sibling}c=Si(o,e.mode,c),c.return=e,e=c}return s(e);case re:return o=ka(o),b(e,r,o,c)}if(le(o))return h(e,r,o,c);if(T(o)){if(l=T(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),_(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Fa(o),c);if(o.$$typeof===C)return b(e,r,ia(e,o),c);La(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=bi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Pa=0;var i=b(e,t,n,r);return Na=null,i}catch(t){if(t===Ca||t===Ta)throw t;var a=hi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var za=Ra(!0),Ba=Ra(!1),Va=!1;function z(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ha(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Wa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=fi(e),di(e,null,n),t}return li(e,r,t,n),fi(e)}function Ga(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}function Ka(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var qa=!1;function Ja(){if(qa){var e=ma;if(e!==null)throw e}}function Ya(e,t,n,r){qa=!1;var i=e.updateQueue;Va=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var p=s.lane&-536870913,m=p!==s.lane;if(m?(J&p)===p:(r&p)===p){p!==0&&p===pa&&(qa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;p=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,p);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,p=typeof h==`function`?h.call(_,d,p):h,p==null)break a;d=f({},d,p);break a;case 2:Va=!0}}p=s.callback,p!==null&&(e.flags|=64,m&&(e.flags|=8192),m=i.callbacks,m===null?i.callbacks=[p]:m.push(p))}else m={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=m,c=d):u=u.next=m,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function Xa(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Za(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Xa(n[e],t)}var Qa=pe(null),$a=pe(0);function eo(e,t){e=Wl,O($a,e),O(Qa,t),Wl=e|t.baseLanes}function to(){O($a,Wl),O(Qa,Qa.current)}function no(){Wl=$a.current,me(Qa),me($a)}var ro=pe(null),io=null;function ao(e){var t=e.alternate;O(uo,uo.current&1),O(ro,e),io===null&&(t===null||Qa.current!==null||t.memoizedState!==null)&&(io=e)}function oo(e){O(uo,uo.current),O(ro,e),io===null&&(io=e)}function so(e){e.tag===22?(O(uo,uo.current),O(ro,e),io===null&&(io=e)):co(e)}function co(){O(uo,uo.current),O(ro,ro.current)}function lo(e){me(ro),io===e&&(io=null),me(uo)}var uo=pe(0);function fo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||of(n)||sf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var B=0,V=null,H=null,po=null,mo=!1,ho=!1,go=!1,_o=0,vo=0,yo=null,bo=0;function xo(){throw Error(i(321))}function So(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ar(e[n],t[n]))return!1;return!0}function Co(e,t,n,r,i,a){return B=a,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?zs:Bs,go=!1,a=n(r,i),go=!1,ho&&(a=To(t,n,r,i)),wo(e),a}function wo(e){E.H=Rs;var t=H!==null&&H.next!==null;if(B=0,po=H=V=null,mo=!1,vo=0,yo=null,t)throw Error(i(300));e===null||rc||(e=e.dependencies,e!==null&&ta(e)&&(rc=!0))}function To(e,t,n,r){V=e;var a=0;do{if(ho&&(yo=null),vo=0,ho=!1,25<=a)throw Error(i(301));if(a+=1,po=H=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}E.H=Vs,o=t(n,r)}while(ho);return o}function Eo(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?Mo(t):t,e=e.useState()[0],(H===null?null:H.memoizedState)!==e&&(V.flags|=1024),t}function Do(){var e=_o!==0;return _o=0,e}function Oo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ko(e){if(mo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}mo=!1}B=0,po=H=V=null,ho=!1,vo=_o=0,yo=null}function U(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return po===null?V.memoizedState=po=e:po=po.next=e,po}function Ao(){if(H===null){var e=V.alternate;e=e===null?null:e.memoizedState}else e=H.next;var t=po===null?V.memoizedState:po.next;if(t!==null)po=t,H=e;else{if(e===null)throw V.alternate===null?Error(i(467)):Error(i(310));H=e,e={memoizedState:H.memoizedState,baseState:H.baseState,baseQueue:H.baseQueue,queue:H.queue,next:null},po===null?V.memoizedState=po=e:po=po.next=e}return po}function jo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mo(e){var t=vo;return vo+=1,yo===null&&(yo=[]),e=Oa(yo,e,t),t=V,(po===null?t.memoizedState:po.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?zs:Bs),e}function No(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Mo(e);if(e.$$typeof===C)return ra(e)}throw Error(i(438,String(e)))}function Po(e){var t=null,n=V.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=V.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=jo(),V.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ae;return t.index++,n}function Fo(e,t){return typeof t==`function`?t(e):t}function Io(e){return Lo(Ao(),H,e)}function Lo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(B&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===pa&&(d=!0);else if((B&p)===p){u=u.next,p===pa&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,V.lanes|=p,Kl|=p;f=u.action,go&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,V.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Ar(o,e.memoizedState)&&(rc=!0,d&&(n=ma,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ro(e){var t=Ao(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Ar(o,t.memoizedState)||(rc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function zo(e,t,n){var r=V,a=Ao(),o=I;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Ar((H||a).memoizedState,n);if(s&&(a.memoizedState=n,rc=!0),a=a.queue,us(Ho.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||po!==null&&po.memoizedState.tag&1){if(r.flags|=2048,as(9,{destroy:void 0},Vo.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||B&127||Bo(r,t,n)}return n}function Bo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t=jo(),V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vo(e,t,n,r){t.value=n,t.getSnapshot=r,Uo(t)&&Wo(e)}function Ho(e,t,n){return n(function(){Uo(t)&&Wo(e)})}function Uo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ar(e,n)}catch{return!0}}function Wo(e){var t=ui(e,2);t!==null&&gu(t,e,2)}function Go(e){var t=U();if(typeof e==`function`){var n=e;if(e=n(),go){Ke(!0);try{n()}finally{Ke(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:e},t}function Ko(e,t,n,r){return e.baseState=n,Lo(e,H,typeof r==`function`?r:Fo)}function qo(e,t,n,r,a){if(Fs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};E.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Jo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Jo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),Yo(e,t,s)}catch(n){Zo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),E.T=a}}else try{a=n(i,r),Yo(e,t,a)}catch(n){Zo(e,t,n)}}function Yo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Xo(e,t,n)},function(n){return Zo(e,t,n)}):Xo(e,t,n)}function Xo(e,t,n){t.status=`fulfilled`,t.value=n,Qo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Jo(e,n)))}function Zo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Qo(t),t=t.next;while(t!==r)}e.action=null}function Qo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function $o(e,t){return t}function es(e,t){if(I){var n=K.formState;if(n!==null){a:{var r=V;if(I){if(F){b:{for(var i=F,a=L;i.nodeType!==8;){if(!a){i=null;break b}if(i=lf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){F=lf(i.nextSibling),r=i.data===`F!`;break a}}Bi(r)}r=!1}r&&(t=n[0])}}return n=U(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$o,lastRenderedState:t},n.queue=r,n=Ms.bind(null,V,r),r.dispatch=n,r=Go(!1),a=Ps.bind(null,V,!1,r.queue),r=U(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=qo.bind(null,V,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ts(e){return ns(Ao(),H,e)}function ns(e,t,n){if(t=Lo(e,t,$o)[0],e=Io(Fo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Mo(t)}catch(e){throw e===Ca?Ta:e}else r=t;t=Ao();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(V.flags|=2048,as(9,{destroy:void 0},rs.bind(null,i,n),null)),[r,a,e]}function rs(e,t){e.action=t}function is(e){var t=Ao(),n=H;if(n!==null)return ns(t,n,e);Ao(),t=t.memoizedState,n=Ao();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function as(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=V.updateQueue,t===null&&(t=jo(),V.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function os(){return Ao().memoizedState}function ss(e,t,n,r){var i=U();V.flags|=e,i.memoizedState=as(1|t,{destroy:void 0},n,r===void 0?null:r)}function cs(e,t,n,r){var i=Ao();r=r===void 0?null:r;var a=i.memoizedState.inst;H!==null&&r!==null&&So(r,H.memoizedState.deps)?i.memoizedState=as(t,a,n,r):(V.flags|=e,i.memoizedState=as(1|t,a,n,r))}function ls(e,t){ss(8390656,8,e,t)}function us(e,t){cs(2048,8,e,t)}function ds(e){V.flags|=4;var t=V.updateQueue;if(t===null)t=jo(),V.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function fs(e){var t=Ao().memoizedState;return ds({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ps(e,t){return cs(4,2,e,t)}function ms(e,t){return cs(4,4,e,t)}function hs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gs(e,t,n){n=n==null?null:n.concat([e]),cs(4,4,hs.bind(null,t,e),n)}function _s(){}function vs(e,t){var n=Ao();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&So(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ys(e,t){var n=Ao();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&So(t,r[1]))return r[0];if(r=e(),go){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r}function bs(e,t,n){return n===void 0||B&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=hu(),V.lanes|=e,Kl|=e,n)}function xs(e,t,n,r){return Ar(n,t)?n:Qa.current===null?!(B&42)||B&1073741824&&!(J&261930)?(rc=!0,e.memoizedState=n):(e=hu(),V.lanes|=e,Kl|=e,t):(e=bs(e,n,r),Ar(e,t)||(rc=!0),e)}function Ss(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};E.T=s,Ps(e,!1,t,n);try{var c=i(),l=E.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ns(e,t,_a(c,r),mu(e)):Ns(e,t,r,mu(e))}catch(n){Ns(e,t,{then:function(){},status:`rejected`,reason:n},mu())}finally{D.p=a,o!==null&&s.types!==null&&(o.types=s.types),E.T=o}}function Cs(){}function ws(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Ts(e).queue;Ss(e,a,t,ue,n===null?Cs:function(){return Es(e),n(r)})}function Ts(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Es(e){var t=Ts(e);t.next===null&&(t=e.alternate.memoizedState),Ns(e,t.next.queue,{},mu())}function Ds(){return ra($f)}function Os(){return Ao().memoizedState}function ks(){return Ao().memoizedState}function As(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=mu();e=Ua(n);var r=Wa(t,e,n);r!==null&&(gu(r,t,n),Ga(r,t,n)),t={cache:ua()},e.payload=t;return}t=t.return}}function js(e,t,n){var r=mu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Fs(e)?Is(t,n):(n=j(e,t,n,r),n!==null&&(gu(n,e,r),Ls(n,t,r)))}function Ms(e,t,n){Ns(e,t,n,mu())}function Ns(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fs(e))Is(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ar(s,o))return li(e,t,i,0),K===null&&ci(),!1}catch{}if(n=j(e,t,i,r),n!==null)return gu(n,e,r),Ls(n,t,r),!0}return!1}function Ps(e,t,n,r){if(r={lane:2,revertLane:fd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Fs(e)){if(t)throw Error(i(479))}else t=j(e,n,r,2),t!==null&&gu(t,e,2)}function Fs(e){var t=e.alternate;return e===V||t!==null&&t===V}function Is(e,t){ho=mo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ls(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}var Rs={readContext:ra,use:No,useCallback:xo,useContext:xo,useEffect:xo,useImperativeHandle:xo,useLayoutEffect:xo,useInsertionEffect:xo,useMemo:xo,useReducer:xo,useRef:xo,useState:xo,useDebugValue:xo,useDeferredValue:xo,useTransition:xo,useSyncExternalStore:xo,useId:xo,useHostTransitionStatus:xo,useFormState:xo,useActionState:xo,useOptimistic:xo,useMemoCache:xo,useCacheRefresh:xo};Rs.useEffectEvent=xo;var zs={readContext:ra,use:No,useCallback:function(e,t){return U().memoizedState=[e,t===void 0?null:t],e},useContext:ra,useEffect:ls,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ss(4194308,4,hs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ss(4194308,4,e,t)},useInsertionEffect:function(e,t){ss(4,2,e,t)},useMemo:function(e,t){var n=U();t=t===void 0?null:t;var r=e();if(go){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=U();if(n!==void 0){var i=n(t);if(go){Ke(!0);try{n(t)}finally{Ke(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=js.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=U();return e={current:e},t.memoizedState=e},useState:function(e){e=Go(e);var t=e.queue,n=Ms.bind(null,V,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:_s,useDeferredValue:function(e,t){return bs(U(),e,t)},useTransition:function(){var e=Go(!1);return e=Ss.bind(null,V,e.queue,!0,!1),U().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=V,a=U();if(I){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Bo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ls(Ho.bind(null,r,o,e),[e]),r.flags|=2048,as(9,{destroy:void 0},Vo.bind(null,r,o,n,t),null),n},useId:function(){var e=U(),t=K.identifierPrefix;if(I){var n=Mi,r=ji;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=_o++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=bo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ds,useFormState:es,useActionState:es,useOptimistic:function(e){var t=U();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ps.bind(null,V,!0,n),n.dispatch=t,[e,t]},useMemoCache:Po,useCacheRefresh:function(){return U().memoizedState=As.bind(null,V)},useEffectEvent:function(e){var t=U(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Bs={readContext:ra,use:No,useCallback:vs,useContext:ra,useEffect:us,useImperativeHandle:gs,useInsertionEffect:ps,useLayoutEffect:ms,useMemo:ys,useReducer:Io,useRef:os,useState:function(){return Io(Fo)},useDebugValue:_s,useDeferredValue:function(e,t){return xs(Ao(),H.memoizedState,e,t)},useTransition:function(){var e=Io(Fo)[0],t=Ao().memoizedState;return[typeof e==`boolean`?e:Mo(e),t]},useSyncExternalStore:zo,useId:Os,useHostTransitionStatus:Ds,useFormState:ts,useActionState:ts,useOptimistic:function(e,t){return Ko(Ao(),H,e,t)},useMemoCache:Po,useCacheRefresh:ks};Bs.useEffectEvent=fs;var Vs={readContext:ra,use:No,useCallback:vs,useContext:ra,useEffect:us,useImperativeHandle:gs,useInsertionEffect:ps,useLayoutEffect:ms,useMemo:ys,useReducer:Ro,useRef:os,useState:function(){return Ro(Fo)},useDebugValue:_s,useDeferredValue:function(e,t){var n=Ao();return H===null?bs(n,e,t):xs(n,H.memoizedState,e,t)},useTransition:function(){var e=Ro(Fo)[0],t=Ao().memoizedState;return[typeof e==`boolean`?e:Mo(e),t]},useSyncExternalStore:zo,useId:Os,useHostTransitionStatus:Ds,useFormState:is,useActionState:is,useOptimistic:function(e,t){var n=Ao();return H===null?(n.baseState=e,[e,n.queue.dispatch]):Ko(n,H,e,t)},useMemoCache:Po,useCacheRefresh:ks};Vs.useEffectEvent=fs;function Hs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:f({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Us={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=mu(),i=Ua(r);i.payload=t,n!=null&&(i.callback=n),t=Wa(e,i,r),t!==null&&(gu(t,e,r),Ga(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=mu(),i=Ua(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Wa(e,i,r),t!==null&&(gu(t,e,r),Ga(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=mu(),r=Ua(n);r.tag=2,t!=null&&(r.callback=t),t=Wa(e,r,n),t!==null&&(gu(t,e,n),Ga(t,e,n))}};function Ws(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(i,a):!0}function Gs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Us.enqueueReplaceState(t,t.state,null)}function Ks(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=f({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function qs(e){ii(e)}function Js(e){console.error(e)}function Ys(e){ii(e)}function Xs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Zs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){return n=Ua(n),n.tag=3,n.payload={element:null},n.callback=function(){Xs(e,t)},n}function $s(e){return e=Ua(e),e.tag=3,e}function ec(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Zs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Zs(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function tc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ea(t,n,a,!0),n=ro.current,n!==null){switch(n.tag){case 31:case 13:return io===null?Ou():n.alternate===null&&Gl===0&&(Gl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ea?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Ku(e,r,a)),!1;case 22:return n.flags|=65536,r===Ea?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Ku(e,r,a)),!1}throw Error(i(435,n.tag))}return Ku(e,r,a),Ou(),!1}if(I)return t=ro.current,t===null?(r!==zi&&(t=Error(i(423),{cause:r}),Ki(Ci(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ci(r,n),a=Qs(e.stateNode,r,a),Ka(e,a),Gl!==4&&(Gl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==zi&&(e=Error(i(422),{cause:r}),Ki(Ci(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ci(o,n),Zl===null?Zl=[o]:Zl.push(o),Gl!==4&&(Gl=2),t===null)return!0;r=Ci(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Qs(n.stateNode,r,e),Ka(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(iu===null||!iu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=$s(a),ec(a,e,n,r),Ka(n,a),!1}n=n.return}while(n!==null);return!1}var nc=Error(i(461)),rc=!1;function ic(e,t,n,r){t.child=e===null?Ba(t,null,n,r):za(t,e.child,n,r)}function ac(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return na(t),r=Co(e,t,n,o,a,i),s=Do(),e!==null&&!rc?(Oo(e,t,i),kc(e,t,i)):(I&&s&&Fi(t),t.flags|=1,ic(e,t,r,i),t.child)}function oc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!gi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,sc(e,t,a,r,i)):(e=vi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Ac(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?jr:n,n(o,r)&&e.ref===t.ref)return kc(e,t,i)}return t.flags|=1,e=M(a,r),e.ref=t.ref,e.return=t,t.child=e}function sc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(jr(a,r)&&e.ref===t.ref)if(rc=!1,t.pendingProps=r=a,Ac(e,i))e.flags&131072&&(rc=!0);else return t.lanes=e.lanes,kc(e,t,i)}return hc(e,t,n,r,i)}function cc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return uc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&xa(t,a===null?null:a.cachePool),a===null?to():eo(t,a),so(t);else return r=t.lanes=536870912,uc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&xa(t,null),to(),co(t)):(xa(t,a.cachePool),eo(t,a),co(t),t.memoizedState=null);return ic(e,t,i,n),t.child}function lc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function uc(e,t,n,r,i){var a=ba();return a=a===null?null:{parent:la._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&xa(t,null),to(),so(t),e!==null&&ea(e,t,r,!0),t.childLanes=i,null}function dc(e,t){return t=wc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function fc(e,t,n){return za(t,e.child,null,n),e=dc(t,t.pendingProps),e.flags|=2,lo(t),t.memoizedState=null,e}function pc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(I){if(r.mode===`hidden`)return e=dc(t,r),t.lanes=536870912,lc(null,e);if(oo(t),(e=F)?(e=af(e,L),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ai===null?null:{id:ji,overflow:Mi},retryLane:536870912,hydrationErrors:null},n=xi(e),n.return=t,t.child=n,P=t,F=null)):e=null,e===null)throw Bi(t);return t.lanes=536870912,null}return dc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(oo(t),a)if(t.flags&256)t.flags&=-257,t=fc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(rc||ea(e,t,n,!1),a=(n&e.childLanes)!==0,rc||a){if(r=K,r!==null&&(s=ut(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ui(e,s),gu(r,e,s),nc;Ou(),t=fc(e,t,n)}else e=o.treeContext,F=lf(s.nextSibling),P=t,I=!0,Ri=null,L=!1,e!==null&&Li(t,e),t=dc(t,r),t.flags|=4096;return t}return e=M(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function mc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function hc(e,t,n,r,i){return na(t),n=Co(e,t,n,r,void 0,i),r=Do(),e!==null&&!rc?(Oo(e,t,i),kc(e,t,i)):(I&&r&&Fi(t),t.flags|=1,ic(e,t,n,i),t.child)}function gc(e,t,n,r,i,a){return na(t),t.updateQueue=null,n=To(t,r,n,i),wo(e),r=Do(),e!==null&&!rc?(Oo(e,t,a),kc(e,t,a)):(I&&r&&Fi(t),t.flags|=1,ic(e,t,n,a),t.child)}function _c(e,t,n,r,i){if(na(t),t.stateNode===null){var a=pi,o=n.contextType;typeof o==`object`&&o&&(a=ra(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Us,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},z(t),o=n.contextType,a.context=typeof o==`object`&&o?ra(o):pi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Hs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Us.enqueueReplaceState(a,a.state,null),Ya(t,r,a,i),Ja(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ks(n,s);a.props=c;var l=a.context,u=n.contextType;o=pi,typeof u==`object`&&u&&(o=ra(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Gs(t,a,r,o),Va=!1;var f=t.memoizedState;a.state=f,Ya(t,r,a,i),Ja(),l=t.memoizedState,s||f!==l||Va?(typeof d==`function`&&(Hs(t,n,d,r),l=t.memoizedState),(c=Va||Ws(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ha(e,t),o=t.memoizedProps,u=Ks(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=pi,typeof l==`object`&&l&&(c=ra(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Gs(t,a,r,c),Va=!1,f=t.memoizedState,a.state=f,Ya(t,r,a,i),Ja();var p=t.memoizedState;o!==d||f!==p||Va||e!==null&&e.dependencies!==null&&ta(e.dependencies)?(typeof s==`function`&&(Hs(t,n,s,r),p=t.memoizedState),(u=Va||Ws(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ta(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,mc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=za(t,e.child,null,i),t.child=za(t,null,n,i)):ic(e,t,n,i),t.memoizedState=a.state,e=t.child):e=kc(e,t,i),e}function vc(e,t,n,r){return Wi(),t.flags|=256,ic(e,t,n,r),t.child}var yc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bc(e){return{baseLanes:e,cachePool:Sa()}}function xc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Sc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(uo.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(I){if(a?ao(t):co(t),(e=F)?(e=af(e,L),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ai===null?null:{id:ji,overflow:Mi},retryLane:536870912,hydrationErrors:null},n=xi(e),n.return=t,t.child=n,P=t,F=null)):e=null,e===null)throw Bi(t);return sf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(co(t),a=t.mode,c=wc({mode:`hidden`,children:c},a),r=yi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=bc(n),r.childLanes=xc(e,s,n),t.memoizedState=yc,lc(null,r)):(ao(t),Cc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(ao(t),t.flags&=-257,t=Tc(e,t,n)):t.memoizedState===null?(co(t),c=r.fallback,a=t.mode,r=wc({mode:`visible`,children:r.children},a),c=yi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,za(t,e.child,null,n),r=t.child,r.memoizedState=bc(n),r.childLanes=xc(e,s,n),t.memoizedState=yc,t=lc(null,r)):(co(t),t.child=e.child,t.flags|=128,t=null);else if(ao(t),sf(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ki({value:r,source:null,stack:null}),t=Tc(e,t,n)}else if(rc||ea(e,t,n,!1),s=(n&e.childLanes)!==0,rc||s){if(s=K,s!==null&&(r=ut(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ui(e,r),gu(s,e,r),nc;of(c)||Ou(),t=Tc(e,t,n)}else of(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,F=lf(c.nextSibling),P=t,I=!0,Ri=null,L=!1,e!==null&&Li(t,e),t=Cc(t,r.children),t.flags|=4096);return t}return a?(co(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=M(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=yi(c,a,n,null),c.flags|=2):c=M(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,lc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=bc(n):(a=c.cachePool,a===null?a=Sa():(l=la._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=xc(e,s,n),t.memoizedState=yc,lc(e.child,r)):(ao(t),n=e.child,e=n.sibling,n=M(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Cc(e,t){return t=wc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function wc(e,t){return e=hi(22,e,null,t),e.lanes=0,e}function Tc(e,t,n){return za(t,e.child,null,n),e=Cc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ec(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qi(e.return,t,n)}function Dc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Oc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=uo.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,O(uo,o),ic(e,t,r,n),r=I?Di:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ec(e,n,t);else if(e.tag===19)Ec(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&fo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Dc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Dc(t,!0,n,null,a,r);break;case`together`:Dc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function kc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ea(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=M(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=M(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ac(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&ta(e)))}function jc(e,t,n){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),Xi(t,la,e.memoizedState.cache),Wi();break;case 27:case 5:xe(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:Xi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,oo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(ao(t),e=kc(e,t,n),e===null?null:e.sibling):Sc(e,t,n):(ao(t),t.flags|=128,null);ao(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(ea(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Oc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(uo,uo.current),r)break;return null;case 22:return t.lanes=0,cc(e,t,n,t.pendingProps);case 24:Xi(t,la,e.memoizedState.cache)}return kc(e,t,n)}function Mc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)rc=!0;else{if(!Ac(e,n)&&!(t.flags&128))return rc=!1,jc(e,t,n);rc=!!(e.flags&131072)}else rc=!1,I&&t.flags&1048576&&Pi(t,Di,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=ka(t.elementType),t.type=e,typeof e==`function`)gi(e)?(r=Ks(e,r),t.tag=1,t=_c(null,t,e,r,n)):(t.tag=0,t=hc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=ac(null,t,e,r,n);break a}if(a===ne){t.tag=14,t=oc(null,t,e,r,n);break a}}throw t=ce(e)||e,Error(i(306,t,``))}}return t;case 0:return hc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ks(r,t.pendingProps),_c(e,t,r,a,n);case 3:a:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ha(e,t),Ya(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Xi(t,la,r),r!==o.cache&&$i(t,[la],n,!0),Ja(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=vc(e,t,r,n);break a}else if(r!==a){a=Ci(Error(i(424)),t),Ki(a),t=vc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(F=lf(e.firstChild),P=t,I=!0,Ri=null,L=!0,n=Ba(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Wi(),r===a){t=kc(e,t,n);break a}ic(e,t,r,n)}t=t.child}return t;case 26:return mc(e,t),e===null?(n=Af(t.type,null,t.pendingProps,null))?t.memoizedState=n:I||(n=t.type,e=t.pendingProps,r=Vd(_e.current).createElement(n),r[gt]=t,r[_t]=e,Fd(r,n,e),kt(r),t.stateNode=r):t.memoizedState=Af(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xe(t),e===null&&I&&(r=t.stateNode=pf(t.type,t.pendingProps,_e.current),P=t,L=!0,a=F,Qd(t.type)?(uf=a,F=lf(r.firstChild)):F=a),ic(e,t,t.pendingProps.children,n),mc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&I&&((a=r=F)&&(r=nf(r,t.type,t.pendingProps,L),r===null?a=!1:(t.stateNode=r,P=t,F=lf(r.firstChild),L=!1,a=!0)),a||Bi(t)),xe(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Wd(a,o)?r=null:s!==null&&Wd(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Co(e,t,Eo,null,null,n),$f._currentValue=a),mc(e,t),ic(e,t,r,n),t.child;case 6:return e===null&&I&&((e=n=F)&&(n=rf(n,t.pendingProps,L),n===null?e=!1:(t.stateNode=n,P=t,F=null,e=!0)),e||Bi(t)),null;case 13:return Sc(e,t,n);case 4:return ye(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=za(t,null,r,n):ic(e,t,r,n),t.child;case 11:return ac(e,t,t.type,t.pendingProps,n);case 7:return ic(e,t,t.pendingProps,n),t.child;case 8:return ic(e,t,t.pendingProps.children,n),t.child;case 12:return ic(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Xi(t,t.type,r.value),ic(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,na(t),a=ra(a),r=r(a),t.flags|=1,ic(e,t,r,n),t.child;case 14:return oc(e,t,t.type,t.pendingProps,n);case 15:return sc(e,t,t.type,t.pendingProps,n);case 19:return Oc(e,t,n);case 31:return pc(e,t,n);case 22:return cc(e,t,n,t.pendingProps);case 24:return na(t),r=ra(la),e===null?(a=ba(),a===null&&(a=K,o=ua(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},z(t),Xi(t,la,a)):((e.lanes&n)!==0&&(Ha(e,t),Ya(t,null,null,n),Ja()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Xi(t,la,r),r!==a.cache&&$i(t,[la],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Xi(t,la,r))),ic(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Nc(e){e.flags|=4}function Pc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Tu())e.flags|=8192;else throw Aa=Ea,wa}else e.flags&=-16777217}function Fc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Gf(t))if(Tu())e.flags|=8192;else throw Aa=Ea,wa}function Ic(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:it(),e.lanes|=t,Xl|=t)}function Lc(e,t){if(!I)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function W(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Rc(e,t,n){var r=t.pendingProps;switch(Ii(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return W(t),null;case 1:return W(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Zi(la),be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ui(t)?Nc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Gi())),W(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Nc(t),o===null?(W(t),Pc(t,a,null,r,n)):(W(t),Fc(t,o))):o?o===e.memoizedState?(W(t),t.flags&=-16777217):(Nc(t),W(t),Fc(t,o)):(e=e.memoizedProps,e!==r&&Nc(t),W(t),Pc(t,a,e,r,n)),null;case 27:if(Se(t),n=_e.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return W(t),null}e=he.current,Ui(t)?Vi(t,e):(e=pf(a,r,n),t.stateNode=e,Nc(t))}return W(t),null;case 5:if(Se(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return W(t),null}if(o=he.current,Ui(t))Vi(t,o);else{var s=Vd(_e.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[gt]=t,o[_t]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Fd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Nc(t)}}return W(t),Pc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=_e.current,Ui(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=P,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[gt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Nd(e.nodeValue,n)),e||Bi(t,!0)}else e=Vd(e).createTextNode(r),e[gt]=t,t.stateNode=e}return W(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ui(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[gt]=t}else Wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),e=!1}else n=Gi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(lo(t),t):(lo(t),null);if(t.flags&128)throw Error(i(558))}return W(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ui(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[gt]=t}else Wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),a=!1}else a=Gi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(lo(t),t):(lo(t),null)}return lo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ic(t,t.updateQueue),W(t),null);case 4:return be(),e===null&&Cd(t.stateNode.containerInfo),W(t),null;case 10:return Zi(t.type),W(t),null;case 19:if(me(uo),r=t.memoizedState,r===null)return W(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null)if(a)Lc(r,!1);else{if(Gl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=fo(e),o!==null){for(t.flags|=128,Lc(r,!1),e=o.updateQueue,t.updateQueue=e,Ic(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)_i(n,e),n=n.sibling;return O(uo,uo.current&1|2),I&&Ni(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Fe()>nu&&(t.flags|=128,a=!0,Lc(r,!1),t.lanes=4194304)}else{if(!a)if(e=fo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Ic(t,e),Lc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!I)return W(t),null}else 2*Fe()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,a=!0,Lc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(W(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Fe(),e.sibling=null,n=uo.current,O(uo,a?n&1|2:n&1),I&&Ni(t,r.treeForkCount),e);case 22:case 23:return lo(t),no(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(W(t),t.subtreeFlags&6&&(t.flags|=8192)):W(t),n=t.updateQueue,n!==null&&Ic(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&me(ya),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Zi(la),W(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function zc(e,t){switch(Ii(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zi(la),be(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Se(t),null;case 31:if(t.memoizedState!==null){if(lo(t),t.alternate===null)throw Error(i(340));Wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(lo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(uo),null;case 4:return be(),null;case 10:return Zi(t.type),null;case 22:case 23:return lo(t),no(),e!==null&&me(ya),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Zi(la),null;case 25:return null;default:return null}}function Bc(e,t){switch(Ii(t),t.tag){case 3:Zi(la),be();break;case 26:case 27:case 5:Se(t);break;case 4:be();break;case 31:t.memoizedState!==null&&lo(t);break;case 13:lo(t);break;case 19:me(uo);break;case 10:Zi(t.type);break;case 22:case 23:lo(t),no(),e!==null&&me(ya);break;case 24:Zi(la)}}function Vc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){X(t,t.return,e)}}function Hc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){X(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){X(t,t.return,e)}}function Uc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Za(t,n)}catch(t){X(e,e.return,t)}}}function Wc(e,t,n){n.props=Ks(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){X(e,t,n)}}function Gc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){X(e,t,n)}}function Kc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){X(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){X(e,t,n)}else n.current=null}function qc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){X(e,e.return,t)}}function Jc(e,t,n){try{var r=e.stateNode;Id(r,e.type,n,t),r[_t]=t}catch(t){X(e,e.return,t)}}function Yc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qd(e.type)||e.tag===4}function Xc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Yc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ln));else if(r!==4&&(r===27&&Qd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Qd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Fd(t,r,n),t[gt]=e,t[_t]=n}catch(t){X(e,e.return,t)}}var el=!1,tl=!1,nl=!1,rl=typeof WeakSet==`function`?WeakSet:Set,il=null;function al(e,t){if(e=e.containerInfo,zd=cp,e=Fr(e),Ir(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Bd={focusedElem:e,selectionRange:n},cp=!1,il=t;il!==null;)if(t=il,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,il=e;else for(;il!==null;){switch(t=il,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ks(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){X(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)tf(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:tf(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,il=e;break}il=t.return}}function ol(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Vc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){X(n,n.return,e)}else{var i=Ks(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){X(n,n.return,e)}}r&64&&Uc(n),r&512&&Gc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Za(e,t)}catch(e){X(n,n.return,e)}}break;case 27:t===null&&r&4&&$c(n);case 26:case 5:xl(e,n),t===null&&r&4&&qc(n),r&512&&Gc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Yu.bind(null,n),cf(e,n))));break;case 22:if(r=n.memoizedState!==null||el,!r){t=t!==null&&t.memoizedState!==null||tl,i=el;var a=tl;el=r,(tl=t)&&!a?Cl(e,n,!!(n.subtreeFlags&8772)):xl(e,n),el=i,tl=a}break;case 30:break;default:xl(e,n)}}function sl(e){var t=e.alternate;t!==null&&(e.alternate=null,sl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&wt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var cl=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount==`function`)try{Ge.onCommitFiberUnmount(We,n)}catch{}switch(n.tag){case 26:tl||Kc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:tl||Kc(n,t);var r=cl,i=ll;Qd(n.type)&&(cl=n.stateNode,ll=!1),ul(e,t,n),mf(n.stateNode),cl=r,ll=i;break;case 5:tl||Kc(n,t);case 6:if(r=cl,i=ll,cl=null,ul(e,t,n),cl=r,ll=i,cl!==null)if(ll)try{(cl.nodeType===9?cl.body:cl.nodeName===`HTML`?cl.ownerDocument.body:cl).removeChild(n.stateNode)}catch(e){X(n,t,e)}else try{cl.removeChild(n.stateNode)}catch(e){X(n,t,e)}break;case 18:cl!==null&&(ll?(e=cl,$d(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Pp(e)):$d(cl,n.stateNode));break;case 4:r=cl,i=ll,cl=n.stateNode.containerInfo,ll=!0,ul(e,t,n),cl=r,ll=i;break;case 0:case 11:case 14:case 15:Hc(2,n,t),tl||Hc(4,n,t),ul(e,t,n);break;case 1:tl||(Kc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Wc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:tl=(r=tl)||n.memoizedState!==null,ul(e,t,n),tl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Pp(e)}catch(e){X(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Pp(e)}catch(e){X(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new rl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new rl),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Xu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Qd(c.type)){cl=c.stateNode,ll=!1;break a}break;case 5:cl=c.stateNode,ll=!1;break a;case 3:case 4:cl=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(cl===null)throw Error(i(160));dl(o,s,a),cl=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Hc(3,e,e.return),Vc(3,e),Hc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(tl||n===null||Kc(n,n.return)),r&64&&el&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(tl||n===null||Kc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[Ct]||o[gt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Fd(o,r,n),o[gt]=e,kt(o),r=o;break a;case`link`:var s=Hf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Fd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Hf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Fd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[gt]=e,kt(o),r=o}e.stateNode=r}else Uf(a,e.type,e.stateNode);else e.stateNode=Lf(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Jc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Uf(a,e.type,e.stateNode):Lf(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(tl||n===null||Kc(n,n.return)),n!==null&&r&4&&Jc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(tl||n===null||Kc(n,n.return)),e.flags&32){a=e.stateNode;try{en(a,``)}catch(t){X(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Jc(e,a,n===null?a:n.memoizedProps)),r&1024&&(nl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){X(e,e.return,t)}}break;case 3:if(Vf=null,a=_l,_l=_f(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pp(t.containerInfo)}catch(t){X(e,e.return,t)}nl&&(nl=!1,bl(e));break;case 4:r=_l,_l=_f(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Fe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=el,d=tl;if(el=u||a,tl=d||l,gl(t,e),tl=d,el=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||el||tl||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){X(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){X(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?ef(m,!0):ef(l.stateNode,!1)}catch(e){X(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Yc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Qc(e,Xc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(en(o,``),n.flags&=-33),Qc(e,Xc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Zc(e,Xc(e),s);break;default:throw Error(i(161))}}catch(t){X(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ol(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Hc(4,t,t.return),Sl(t);break;case 1:Kc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Wc(t,t.return,n),Sl(t);break;case 27:mf(t.stateNode);case 26:case 5:Kc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Vc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){X(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Xa(c[i],s)}catch(e){X(r,r.return,e)}}n&&o&64&&Uc(a),Gc(a,a.return);break;case 27:$c(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&qc(a),Gc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),Gc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&da(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Vc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){X(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Vc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Kf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=_f(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Hc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Hc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;il!==null;){var n=il;switch(n.tag){case 0:case 11:case 15:Hc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:da(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,il=r;else a:for(n=e;il!==null;){r=il;var i=r.sibling,a=r.return;if(sl(r),r===n){il=null;break a}if(i!==null){i.return=a,il=i;break a}il=a}}}var Rl={getCacheForType:function(e){var t=ra(la),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ra(la).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,au=0,ou=null,su=null,cu=0,lu=0,uu=null,du=null,fu=0,pu=null;function mu(){return G&2&&J!==0?J&-J:E.T===null?pt():fd()}function hu(){if(Yl===0)if(!(J&536870912)||I){var e=Qe;Qe<<=1,!(Qe&3932160)&&(Qe=262144),Yl=e}else Yl=536870912;return e=ro.current,e!==null&&(e.flags|=32),Yl}function gu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Cu(e,0),bu(e,J,Yl,!1)),ot(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(ql|=n),Gl===4&&bu(e,J,Yl,!1)),id(e))}function _u(e,t,n){if(G&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||nt(e,t),a=r?ju(e,t):ku(e,t,!0),o=r;do{if(a===0){Hl&&!r&&bu(e,t,0,!1);break}if(n=e.current.alternate,o&&!yu(n)){a=ku(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Cu(c,s).flags|=256),s=ku(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,ql|=o,a=4;break a}o=Ql,Ql=a,o!==null&&(Ql===null?Ql=o:Ql.push.apply(Ql,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Cu(e,0),bu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:bu(r,t,Yl,!Vl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=eu+300-Fe(),10<a)){if(bu(r,t,Yl,!Vl),tt(r,0,!0)!==0)break a;cu=t,r.timeoutHandle=qd(vu.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Vl,o,`Throttled`,-0,0),a);break a}vu(r,n,Ql,ru,$l,t,Yl,ql,Xl,Vl,o,null,-0,0)}break}while(1);id(e)}function vu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ln},Ml(t,a,d);var m=(a&62914560)===a?eu-Fe():(a&4194048)===a?tu-Fe():0;if(m=Jf(d,m),m!==null){cu=a,e.cancelPendingCommit=m(Ru.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),bu(e,a,o,!l);return}}Ru(e,t,a,n,r,i,o,s,c)}function yu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ar(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-qe(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ct(e,n,t)}function xu(){return G&6?!0:(ad(0,!1),!1)}function Su(){if(q!==null){if(Y===0)var e=q.return;else e=q,Yi=Ji=null,ko(e),Na=null,Pa=0,e=q;for(;e!==null;)Bc(e.alternate,e),e=e.return;q=null}}function Cu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Jd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),cu=0,Su(),K=e,q=n=M(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=nt(e,t),Ul=!1,Xl=Yl=Jl=ql=Kl=Gl=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-qe(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,ci(),n}function wu(e,t){V=null,E.H=Rs,t===Ca||t===Ta?(t=ja(),Y=3):t===wa?(t=ja(),Y=4):Y=t===nc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(Gl=1,Xs(e,Ci(t,e.current)))}function Tu(){var e=ro.current;return e===null?!0:(J&4194048)===J?io===null:(J&62914560)===J||J&536870912?e===io:!1}function Eu(){var e=E.H;return E.H=Rs,e===null?Rs:e}function Du(){var e=E.A;return E.A=Rl,e}function Ou(){Gl=4,Vl||(J&4194048)!==J&&ro.current!==null||(Hl=!0),!(Kl&134217727)&&!(ql&134217727)||K===null||bu(K,J,Yl,!1)}function ku(e,t,n){var r=G;G|=2;var i=Eu(),a=Du();(K!==e||J!==t)&&(ru=null,Cu(e,t)),t=!1;var o=Gl;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:Su(),o=6;break a;case 3:case 2:case 9:case 6:ro.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Fu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Fu(e,s,c,l)}}Au(),o=Gl;break}catch(t){wu(e,t)}while(1);return t&&e.shellSuspendCounter++,Yi=Ji=null,G=r,E.H=i,E.A=a,q===null&&(K=null,J=0,ci()),o}function Au(){for(;q!==null;)Nu(q)}function ju(e,t){var n=G;G|=2;var r=Eu(),a=Du();K!==e||J!==t?(ru=null,nu=Fe()+500,Cu(e,t)):Hl=nt(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Fu(e,t,o,1);break;case 2:case 9:if(Da(o)){Y=0,Bl=null,Pu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),id(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:Da(o)?(Y=0,Bl=null,Pu(t)):(Y=0,Bl=null,Fu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Gf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Iu(u))}break b}}Y=0,Bl=null,Fu(e,t,o,5);break;case 6:Y=0,Bl=null,Fu(e,t,o,6);break;case 8:Su(),Gl=6;break a;default:throw Error(i(462))}}Mu();break}catch(t){wu(e,t)}while(1);return Yi=Ji=null,E.H=r,E.A=a,G=n,q===null?(K=null,J=0,ci(),Gl):0}function Mu(){for(;q!==null&&!Ne();)Nu(q)}function Nu(e){var t=Mc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Iu(e):q=t}function Pu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=gc(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=gc(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:ko(t);default:Bc(n,t),t=q=_i(t,Wl),t=Mc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Iu(e):q=t}function Fu(e,t,n,r){Yi=Ji=null,ko(t),Na=null,Pa=0;var i=t.return;try{if(tc(e,i,t,n,J)){Gl=1,Xs(e,Ci(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;Gl=1,Xs(e,Ci(n,e.current)),q=null;return}t.flags&32768?(I||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=ro.current,r!==null&&r.tag===13&&(r.flags|=16384))),Lu(t,e)):Iu(t)}function Iu(e){var t=e;do{if(t.flags&32768){Lu(t,Vl);return}e=t.return;var n=Rc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);Gl===0&&(Gl=5)}function Lu(e,t){do{var n=zc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);Gl=6,q=null}function Ru(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Uu();while(au!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=si,st(e,n,o,s,c,l),e===K&&(q=K=null,J=0),su=t,ou=e,cu=n,lu=o,uu=a,du=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Zu(ze,function(){return Wu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=E.T,E.T=null,a=D.p,D.p=2,s=G,G|=4;try{al(e,t,n)}finally{G=s,D.p=a,E.T=r}}au=1,zu(),Bu(),Vu()}}function zu(){if(au===1){au=0;var e=ou,t=su,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=G;G|=4;try{vl(t,e);var a=Bd,o=Fr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Pr(s.ownerDocument.documentElement,s)){if(c!==null&&Ir(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Nr(s,h),v=Nr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}cp=!!zd,Bd=zd=null}finally{G=i,D.p=r,E.T=n}}e.current=t,au=2}}function Bu(){if(au===2){au=0;var e=ou,t=su,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=G;G|=4;try{ol(e,t.alternate,t)}finally{G=i,D.p=r,E.T=n}}au=3}}function Vu(){if(au===4||au===3){au=0,Pe();var e=ou,t=su,n=cu,r=du;t.subtreeFlags&10256||t.flags&10256?au=5:(au=0,su=ou=null,Hu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),ft(n),t=t.stateNode,Ge&&typeof Ge.onCommitFiberRoot==`function`)try{Ge.onCommitFiberRoot(We,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=E.T,i=D.p,D.p=2,E.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{E.T=t,D.p=i}}cu&3&&Uu(),id(e),i=e.pendingLanes,n&261930&&i&42?e===pu?fu++:(fu=0,pu=e):fu=0,ad(0,!1)}}function Hu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,da(t)))}function Uu(){return zu(),Bu(),Vu(),Wu()}function Wu(){if(au!==5)return!1;var e=ou,t=lu;lu=0;var n=ft(cu),r=E.T,a=D.p;try{D.p=32>n?32:n,E.T=null,n=uu,uu=null;var o=ou,s=cu;if(au=0,su=ou=null,cu=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,ad(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot==`function`)try{Ge.onPostCommitFiberRoot(We,o)}catch{}return!0}finally{D.p=a,E.T=r,Hu(e,t)}}function Gu(e,t,n){t=Ci(n,t),t=Qs(e.stateNode,t,2),e=Wa(e,t,2),e!==null&&(ot(e,2),id(e))}function X(e,t,n){if(e.tag===3)Gu(e,e,n);else for(;t!==null;){if(t.tag===3){Gu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Ci(n,e),n=$s(2),r=Wa(t,n,2),r!==null&&(ec(n,r,t,e),ot(r,2),id(r));break}}t=t.return}}function Ku(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=qu.bind(null,e,t,n),t.then(e,e))}function qu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(Gl===4||Gl===3&&(J&62914560)===J&&300>Fe()-eu?!(G&2)&&Cu(e,0):Jl|=n,Xl===J&&(Xl=0)),id(e)}function Ju(e,t){t===0&&(t=it()),e=ui(e,t),e!==null&&(ot(e,t),id(e))}function Yu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ju(e,n)}function Xu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Ju(e,n)}function Zu(e,t){return je(e,t)}var Qu=null,$u=null,ed=!1,td=!1,nd=!1,rd=0;function id(e){e!==$u&&e.next===null&&($u===null?Qu=$u=e:$u=$u.next=e),td=!0,ed||(ed=!0,dd())}function ad(e,t){if(!nd&&td){nd=!0;do for(var n=!1,r=Qu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-qe(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ud(r,a))}else a=J,a=tt(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||nt(r,a)||(n=!0,ud(r,a));r=r.next}while(n);nd=!1}}function od(){sd()}function sd(){td=ed=!1;var e=0;rd!==0&&Kd()&&(e=rd);for(var t=Fe(),n=null,r=Qu;r!==null;){var i=r.next,a=cd(r,t);a===0?(r.next=null,n===null?Qu=i:n.next=i,i===null&&($u=n)):(n=r,(e!==0||a&3)&&(td=!0)),r=i}au!==0&&au!==5||ad(e,!1),rd!==0&&(rd=0)}function cd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-qe(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=rt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=tt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Me(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||nt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Me(r),ft(n)){case 2:case 8:n=Re;break;case 32:n=ze;break;case 268435456:n=Ve;break;default:n=ze}return r=ld.bind(null,e),n=je(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Me(r),e.callbackPriority=2,e.callbackNode=null,2}function ld(e,t){if(au!==0&&au!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Uu()&&e.callbackNode!==n)return null;var r=J;return r=tt(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(_u(e,r,t),cd(e,Fe()),e.callbackNode!=null&&e.callbackNode===n?ld.bind(null,e):null)}function ud(e,t){if(Uu())return null;_u(e,t,!0)}function dd(){Xd(function(){G&6?je(Le,od):sd()})}function fd(){if(rd===0){var e=pa;e===0&&(e=Ze,Ze<<=1,!(Ze&261888)&&(Ze=256)),rd=e}return rd}function pd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:cn(``+e)}function md(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function hd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=pd((i[_t]||null).action),o=r.submitter;o&&(t=(t=o[_t]||null)?pd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new An(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(rd!==0){var e=o?md(i,o):new FormData(i);ws(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?md(i,o):new FormData(i),ws(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var gd=0;gd<ni.length;gd++){var _d=ni[gd];ri(_d.toLowerCase(),`on`+(_d[0].toUpperCase()+_d.slice(1)))}ri(Jr,`onAnimationEnd`),ri(Yr,`onAnimationIteration`),ri(Xr,`onAnimationStart`),ri(`dblclick`,`onDoubleClick`),ri(`focusin`,`onFocus`),ri(`focusout`,`onBlur`),ri(Zr,`onTransitionRun`),ri(Qr,`onTransitionStart`),ri($r,`onTransitionCancel`),ri(ei,`onTransitionEnd`),Nt(`onMouseEnter`,[`mouseout`,`mouseover`]),Nt(`onMouseLeave`,[`mouseout`,`mouseover`]),Nt(`onPointerEnter`,[`pointerout`,`pointerover`]),Nt(`onPointerLeave`,[`pointerout`,`pointerover`]),Mt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Mt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Mt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Mt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var vd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),yd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(vd));function bd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}}}}function Z(e,t){var n=t[yt];n===void 0&&(n=t[yt]=new Set);var r=e+`__bubble`;n.has(r)||(wd(t,e,2,!1),n.add(r))}function xd(e,t,n){var r=0;t&&(r|=4),wd(n,e,r,t)}var Sd=`_reactListening`+Math.random().toString(36).slice(2);function Cd(e){if(!e[Sd]){e[Sd]=!0,At.forEach(function(t){t!==`selectionchange`&&(yd.has(t)||xd(t,!1,e),xd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sd]||(t[Sd]=!0,xd(`selectionchange`,!1,t))}}function wd(e,t,n,r){switch(hp(t)){case 2:var i=lp;break;case 8:i=up;break;default:i=dp}n=i.bind(null,t,n,e),i=void 0,!yn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Td(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Tt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}gn(function(){var r=a,i=dn(n),s=[];a:{var c=ti.get(e);if(c!==void 0){var l=An,u=e;switch(e){case`keypress`:if(Tn(n)===0)break a;case`keydown`:case`keyup`:l=Jn;break;case`focusin`:u=`focus`,l=zn;break;case`focusout`:u=`blur`,l=zn;break;case`beforeblur`:case`afterblur`:l=zn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Ln;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Rn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Xn;break;case Jr:case Yr:case Xr:l=Bn;break;case ei:l=Zn;break;case`scroll`:case`scrollend`:l=Mn;break;case`wheel`:l=Qn;break;case`copy`:case`cut`:case`paste`:l=Vn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Yn;break;case`toggle`:case`beforetoggle`:l=$n}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=_n(m,p),g!=null&&d.push(Ed(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==un&&(u=n.relatedTarget||n.fromElement)&&(Tt(u)||u[vt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Tt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Ln,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Yn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Dt(l),h=u==null?c:Dt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Tt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Od,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&kd(s,c,l,d,!1),u!==null&&f!==null&&kd(s,f,u,d,!0)}}a:{if(c=r?Dt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=vr;else if(fr(c))if(yr)v=Or;else{v=Er;var y=Tr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&an(r.elementType)&&(v=vr):v=Dr;if(v&&=v(e,r)){pr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Xt(c,`number`,c.value)}switch(y=r?Dt(r):window,e){case`focusin`:(fr(y)||y.contentEditable===`true`)&&(Rr=y,zr=r,Br=null);break;case`focusout`:Br=zr=Rr=null;break;case`mousedown`:Vr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Vr=!1,Hr(s,n,i);break;case`selectionchange`:if(Lr)break;case`keydown`:case`keyup`:Hr(s,n,i)}var b;if(A)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else cr?or(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(rr&&n.locale!==`ko`&&(cr||x!==`onCompositionStart`?x===`onCompositionEnd`&&cr&&(b=wn()):(xn=i,Sn=`value`in xn?xn.value:xn.textContent,cr=!0)),y=Dd(r,x),0<y.length&&(x=new Hn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=sr(n),b!==null&&(x.data=b)))),(b=nr?lr(e,n):ur(e,n))&&(x=Dd(r,`onBeforeInput`),0<x.length&&(y=new Hn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),hd(s,e,r,n,i)}bd(s,t)})}function Ed(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Dd(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=_n(e,n),i!=null&&r.unshift(Ed(e,i,a)),i=_n(e,t),i!=null&&r.push(Ed(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Od(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function kd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=_n(n,a),l!=null&&o.unshift(Ed(n,l,c))):i||(l=_n(n,a),l!=null&&o.push(Ed(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ad=/\r\n?/g,jd=/\u0000|\uFFFD/g;function Md(e){return(typeof e==`string`?e:``+e).replace(Ad,`
`).replace(jd,``)}function Nd(e,t){return t=Md(t),Md(e)===t}function Q(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||en(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&en(e,``+r);break;case`className`:zt(e,`class`,r);break;case`tabIndex`:zt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:zt(e,n,r);break;case`style`:rn(e,r,o);break;case`data`:if(t!==`object`){zt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&Q(e,t,`name`,a.name,a,null),Q(e,t,`formEncType`,a.formEncType,a,null),Q(e,t,`formMethod`,a.formMethod,a,null),Q(e,t,`formTarget`,a.formTarget,a,null)):(Q(e,t,`encType`,a.encType,a,null),Q(e,t,`method`,a.method,a,null),Q(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`onScroll`:r!=null&&Z(`scroll`,e);break;case`onScrollEnd`:r!=null&&Z(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=cn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Z(`beforetoggle`,e),Z(`toggle`,e),Rt(e,`popover`,r);break;case`xlinkActuate`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Rt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=on.get(n)||n,Rt(e,n,r))}}function Pd(e,t,n,r,a,o){switch(n){case`style`:rn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?en(e,r):(typeof r==`number`||typeof r==`bigint`)&&en(e,``+r);break;case`onScroll`:r!=null&&Z(`scroll`,e);break;case`onScrollEnd`:r!=null&&Z(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!jt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[_t]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Rt(e,n,r)}}}function Fd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Z(`error`,e),Z(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Q(e,t,o,s,n,null)}}a&&Q(e,t,`srcSet`,n.srcSet,n,null),r&&Q(e,t,`src`,n.src,n,null);return;case`input`:Z(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Q(e,t,r,d,n,null)}}Yt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Z(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Q(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Zt(e,!!r,n,!0):Zt(e,!!r,t,!1);return;case`textarea`:for(s in Z(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Q(e,t,s,c,n,null)}$t(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Q(e,t,l,r,n,null)}return;case`dialog`:Z(`beforetoggle`,e),Z(`toggle`,e),Z(`cancel`,e),Z(`close`,e);break;case`iframe`:case`object`:Z(`load`,e);break;case`video`:case`audio`:for(r=0;r<vd.length;r++)Z(vd[r],e);break;case`image`:Z(`error`,e),Z(`load`,e);break;case`details`:Z(`toggle`,e);break;case`embed`:case`source`:case`link`:Z(`error`,e),Z(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Q(e,t,u,r,n,null)}return;default:if(an(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Pd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Q(e,t,c,r,n,null))}function Id(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Q(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Q(e,t,p,m,r,f)}}Jt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Q(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Q(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Zt(e,!!n,n?[]:``,!1):Zt(e,!!n,t,!0)):Zt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Q(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Q(e,t,s,a,r,o)}Qt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Q(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Q(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Q(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Q(e,t,u,p,r,m)}return;default:if(an(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Pd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Pd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Q(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Q(e,t,f,p,r,m)}function Ld(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Rd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Ld(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Ld(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var zd=null,Bd=null;function Vd(e){return e.nodeType===9?e:e.ownerDocument}function Hd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Ud(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Wd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gd=null;function Kd(){var e=window.event;return e&&e.type===`popstate`?e!==Gd&&(Gd=e,!0):(Gd=null,!1)}var qd=typeof setTimeout==`function`?setTimeout:void 0,Jd=typeof clearTimeout==`function`?clearTimeout:void 0,Yd=typeof Promise==`function`?Promise:void 0,Xd=typeof queueMicrotask==`function`?queueMicrotask:Yd===void 0?qd:function(e){return Yd.resolve(null).then(e).catch(Zd)};function Zd(e){setTimeout(function(){throw e})}function Qd(e){return e===`head`}function $d(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Pp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)mf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,mf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Ct]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&mf(e.ownerDocument.body);n=i}while(n);Pp(t)}function ef(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function tf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:tf(n),wt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function nf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[Ct])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lf(e.nextSibling),e===null)break}return null}function rf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lf(e.nextSibling),e===null))return null;return e}function af(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lf(e.nextSibling),e===null))return null;return e}function of(e){return e.data===`$?`||e.data===`$~`}function sf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var uf=null;function df(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function ff(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pf(e,t,n){switch(t=Vd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function mf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);wt(e)}var hf=new Map,gf=new Set;function _f(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var vf=D.d;D.d={f:yf,r:bf,D:Cf,C:wf,L:Tf,m:Ef,X:Of,S:Df,M:kf};function yf(){var e=vf.f(),t=xu();return e||t}function bf(e){var t=Et(e);t!==null&&t.tag===5&&t.type===`form`?Es(t):vf.r(e)}var xf=typeof document>`u`?null:document;function Sf(e,t,n){var r=xf;if(r&&typeof t==`string`&&t){var i=qt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),gf.has(i)||(gf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Fd(t,`link`,e),kt(t),r.head.appendChild(t)))}}function Cf(e){vf.D(e),Sf(`dns-prefetch`,e,null)}function wf(e,t){vf.C(e,t),Sf(`preconnect`,e,t)}function Tf(e,t,n){vf.L(e,t,n);var r=xf;if(r&&e&&t){var i=`link[rel="preload"][as="`+qt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+qt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+qt(n.imageSizes)+`"]`)):i+=`[href="`+qt(e)+`"]`;var a=i;switch(t){case`style`:a=jf(e);break;case`script`:a=Ff(e)}hf.has(a)||(e=f({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),hf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Mf(a))||t===`script`&&r.querySelector(If(a))||(t=r.createElement(`link`),Fd(t,`link`,e),kt(t),r.head.appendChild(t)))}}function Ef(e,t){vf.m(e,t);var n=xf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+qt(r)+`"][href="`+qt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Ff(e)}if(!hf.has(a)&&(e=f({rel:`modulepreload`,href:e},t),hf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(If(a)))return}r=n.createElement(`link`),Fd(r,`link`,e),kt(r),n.head.appendChild(r)}}}function Df(e,t,n){vf.S(e,t,n);var r=xf;if(r&&e){var i=Ot(r).hoistableStyles,a=jf(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Mf(a)))s.loading=5;else{e=f({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=hf.get(a))&&zf(e,n);var c=o=r.createElement(`link`);kt(c),Fd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Rf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Of(e,t){vf.X(e,t);var n=xf;if(n&&e){var r=Ot(n).hoistableScripts,i=Ff(e),a=r.get(i);a||(a=n.querySelector(If(i)),a||(e=f({src:e,async:!0},t),(t=hf.get(i))&&Bf(e,t),a=n.createElement(`script`),kt(a),Fd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t){vf.M(e,t);var n=xf;if(n&&e){var r=Ot(n).hoistableScripts,i=Ff(e),a=r.get(i);a||(a=n.querySelector(If(i)),a||(e=f({src:e,async:!0,type:`module`},t),(t=hf.get(i))&&Bf(e,t),a=n.createElement(`script`),kt(a),Fd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Af(e,t,n,r){var a=(a=_e.current)?_f(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=jf(n.href),n=Ot(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=jf(n.href);var o=Ot(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Mf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),hf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},hf.set(e,n),o||Pf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Ff(n),n=Ot(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function jf(e){return`href="`+qt(e)+`"`}function Mf(e){return`link[rel="stylesheet"][`+e+`]`}function Nf(e){return f({},e,{"data-precedence":e.precedence,precedence:null})}function Pf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Fd(t,`link`,n),kt(t),e.head.appendChild(t))}function Ff(e){return`[src="`+qt(e)+`"]`}function If(e){return`script[async]`+e}function Lf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+qt(n.href)+`"]`);if(r)return t.instance=r,kt(r),r;var a=f({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),kt(r),Fd(r,`style`,a),Rf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=jf(n.href);var o=e.querySelector(Mf(a));if(o)return t.state.loading|=4,t.instance=o,kt(o),o;r=Nf(n),(a=hf.get(a))&&zf(r,a),o=(e.ownerDocument||e).createElement(`link`),kt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Fd(o,`link`,r),t.state.loading|=4,Rf(o,n.precedence,e),t.instance=o;case`script`:return o=Ff(n.src),(a=e.querySelector(If(o)))?(t.instance=a,kt(a),a):(r=n,(a=hf.get(o))&&(r=f({},n),Bf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),kt(a),Fd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Rf(r,n.precedence,e));return t.instance}function Rf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Bf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Vf=null;function Hf(e,t,n){if(Vf===null){var r=new Map,i=Vf=new Map;i.set(n,r)}else i=Vf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Ct]||a[gt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Uf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Wf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Gf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Kf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=jf(r.href),a=t.querySelector(Mf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Yf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,kt(a);return}a=t.ownerDocument||t,r=Nf(r),(i=hf.get(i))&&zf(r,i),a=a.createElement(`link`),kt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Fd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Yf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var qf=0;function Jf(e,t){return e.stylesheets&&e.count===0&&Zf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Zf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&qf===0&&(qf=62500*Rd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Zf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>qf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Yf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Zf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xf=null;function Zf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xf=new Map,t.forEach(Qf,e),Xf=null,Yf.call(e))}function Qf(e,t){if(!(t.state.loading&4)){var n=Xf.get(e);if(n)var r=n.get(null);else{n=new Map,Xf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Yf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var $f={$$typeof:C,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function ep(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=at(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=at(0),this.hiddenUpdates=at(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function tp(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ep(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=hi(3,null,null,t),e.current=a,a.stateNode=e,t=ua(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},z(a),e}function np(e){return e?(e=pi,e):pi}function rp(e,t,n,r,i,a){i=np(i),r.context===null?r.context=i:r.pendingContext=i,r=Ua(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Wa(e,r,t),n!==null&&(gu(n,e,t),Ga(n,e,t))}function ip(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ap(e,t){ip(e,t),(e=e.alternate)&&ip(e,t)}function op(e){if(e.tag===13||e.tag===31){var t=ui(e,67108864);t!==null&&gu(t,e,67108864),ap(e,67108864)}}function sp(e){if(e.tag===13||e.tag===31){var t=mu();t=dt(t);var n=ui(e,t);n!==null&&gu(n,e,t),ap(e,t)}}var cp=!0;function lp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,dp(e,t,n,r)}finally{D.p=a,E.T=i}}function up(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,dp(e,t,n,r)}finally{D.p=a,E.T=i}}function dp(e,t,n,r){if(cp){var i=fp(r);if(i===null)Td(e,t,r,pp,n),wp(e,r);else if(Ep(i,e,t,n,r))r.stopPropagation();else if(wp(e,r),t&4&&-1<Cp.indexOf(e)){for(;i!==null;){var a=Et(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=et(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-qe(o);s.entanglements[1]|=c,o&=~c}id(a),!(G&6)&&(nu=Fe()+500,ad(0,!1))}}break;case 31:case 13:s=ui(a,2),s!==null&&gu(s,a,2),xu(),ap(a,2)}if(a=fp(r),a===null&&Td(e,t,r,pp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Td(e,t,r,null,n)}}function fp(e){return e=dn(e),mp(e)}var pp=null;function mp(e){if(pp=null,e=Tt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return pp=e,null}function hp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ie()){case Le:return 2;case Re:return 8;case ze:case Be:return 32;case Ve:return 268435456;default:return 32}default:return 32}}var gp=!1,_p=null,vp=null,yp=null,bp=new Map,xp=new Map,Sp=[],Cp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function wp(e,t){switch(e){case`focusin`:case`focusout`:_p=null;break;case`dragenter`:case`dragleave`:vp=null;break;case`mouseover`:case`mouseout`:yp=null;break;case`pointerover`:case`pointerout`:bp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:xp.delete(t.pointerId)}}function Tp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Et(t),t!==null&&op(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ep(e,t,n,r,i){switch(t){case`focusin`:return _p=Tp(_p,e,t,n,r,i),!0;case`dragenter`:return vp=Tp(vp,e,t,n,r,i),!0;case`mouseover`:return yp=Tp(yp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return bp.set(a,Tp(bp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,xp.set(a,Tp(xp.get(a)||null,e,t,n,r,i)),!0}return!1}function Dp(e){var t=Tt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,mt(e.priority,function(){sp(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,mt(e.priority,function(){sp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Op(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);un=r,n.target.dispatchEvent(r),un=null}else return t=Et(n),t!==null&&op(t),e.blockedOn=n,!1;t.shift()}return!0}function kp(e,t,n){Op(e)&&n.delete(t)}function Ap(){gp=!1,_p!==null&&Op(_p)&&(_p=null),vp!==null&&Op(vp)&&(vp=null),yp!==null&&Op(yp)&&(yp=null),bp.forEach(kp),xp.forEach(kp)}function jp(e,n){e.blockedOn===n&&(e.blockedOn=null,gp||(gp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Ap)))}var Mp=null;function Np(e){Mp!==e&&(Mp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Mp===e&&(Mp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(mp(r||n)===null)continue;break}var a=Et(n);a!==null&&(e.splice(t,3),t-=3,ws(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Pp(e){function t(t){return jp(t,e)}_p!==null&&jp(_p,e),vp!==null&&jp(vp,e),yp!==null&&jp(yp,e),bp.forEach(t),xp.forEach(t);for(var n=0;n<Sp.length;n++){var r=Sp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Sp.length&&(n=Sp[0],n.blockedOn===null);)Dp(n),n.blockedOn===null&&Sp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[_t]||null;if(typeof a==`function`)o||Np(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[_t]||null)s=o.formAction;else if(mp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Np(n)}}}function Fp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Ip(e){this._internalRoot=e}Lp.prototype.render=Ip.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;rp(n,mu(),e,t,null,null)},Lp.prototype.unmount=Ip.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rp(e.current,2,null,e,null,null),xu(),t[vt]=null}};function Lp(e){this._internalRoot=e}Lp.prototype.unstable_scheduleHydration=function(e){if(e){var t=pt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Sp.length&&t!==0&&t<Sp[n].priority;n++);Sp.splice(n,0,e),n===0&&Dp(e)}};var Rp=n.version;if(Rp!==`19.2.8`)throw Error(i(527,Rp,`19.2.8`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:d(e),e=e===null?null:e.stateNode,e};var zp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Bp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bp.isDisabled&&Bp.supportsFiber)try{We=Bp.inject(zp),Ge=Bp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=qs,s=Js,c=Ys;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=tp(e,1,!1,null,null,n,r,null,o,s,c,Fp),e[vt]=t.current,Cd(e),new Ip(t)}})),y=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=v()})),b=u(p(),1),x=y(),S=`modulepreload`,C=function(e){return`/`+e},w={},ee=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=C(t,n),t=s(t),t in w)return;w[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:S,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},te=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,ne=/^[\\/]{2}/;function re(e,t){return t+e.replace(/\\/g,`/`)}var ie=`popstate`;function ae(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function oe(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return E(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:D(t)}return de(t,n,null,e)}function T(e,t){if(e===!1||e==null)throw Error(t)}function se(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function ce(){return Math.random().toString(36).substring(2,10)}function le(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function E(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?ue(t):t,state:n,key:t&&t.key||r||ce(),mask:i}}function D({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function ue(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function de(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=ae(e)?e:E(h.location,e,t);n&&n(r,e),l=u()+1;let d=le(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=ae(e)?e:E(h.location,e,t);n&&n(r,e),l=u();let i=le(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return fe(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(ie,d),c=e,()=>{i.removeEventListener(ie,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function fe(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),T(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:D(t);return i=i.replace(/ $/,`%20`),!n&&ne.test(i)&&(i=r+i),new URL(i,r)}function pe(e,t,n=`/`){return me(e,t,n,!1)}function me(e,t,n,r,i){let a=Me((typeof t==`string`?ue(t):t).pathname||`/`,n);if(a==null)return null;let o=i??O(e),s=null,c=je(a);for(let e=0;s==null&&e<o.length;++e)s=De(o[e],c,r);return s}function O(e){let t=he(e);return _e(t),t}function he(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;T(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Be([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(T(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),he(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:Te(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=Ae(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of ge(e.path))a(e,t,!0,n)}),t}function ge(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=ge(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function _e(e){e.sort((e,t)=>e.score===t.score?Ee(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var ve=/^:[\w-]+$/,ye=3,be=2,xe=1,Se=10,Ce=-2,we=e=>e===`*`;function Te(e,t){let n=e.split(`/`),r=n.length;return n.some(we)&&(r+=Ce),t&&(r+=be),n.filter(e=>!we(e)).reduce((e,t)=>e+(ve.test(t)?ye:t===``?xe:Se),r)}function Ee(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function De(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?ke(u,l,s.matcher,s.compiledParams):Oe(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=Oe({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Be([a,d.pathname]),pathnameBase:He(Be([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=Be([a,d.pathnameBase]))}return o}function Oe(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ae(e.path,e.caseSensitive,e.end);return ke(e,t,n,r)}function ke(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return e[t]=n&&!i?void 0:(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Ae(e,t=!1,n=!0){se(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function je(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return se(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Me(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function Ne(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?ue(e):e,a;return n?(n=ze(n),a=n.startsWith(`/`)?Pe(n.substring(1),`/`):Pe(n,t)):a=t,{pathname:a,search:Ue(r),hash:We(i)}}function Pe(e,t){let n=Ve(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Fe(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ie(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Le(e){let t=Ie(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Re(e,t,n,r=!1){let i;typeof e==`string`?i=ue(e):(i={...e},T(!i.pathname||!i.pathname.includes(`?`),Fe(`?`,`pathname`,`search`,i)),T(!i.pathname||!i.pathname.includes(`#`),Fe(`#`,`pathname`,`hash`,i)),T(!i.search||!i.search.includes(`#`),Fe(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Ne(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var ze=e=>e.replace(/[\\/]{2,}/g,`/`),Be=e=>ze(e.join(`/`)),Ve=e=>e.replace(/\/+$/,``),He=e=>Ve(e).replace(/^\/*/,`/`),Ue=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,We=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Ge=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Ke(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function qe(e){return Be(e.map(e=>e.route.path).filter(Boolean))||`/`}var Je=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Ye(e,t){let n=e;if(typeof n!=`string`||!te.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Je)try{let e=new URL(window.location.href),r=ne.test(n)?new URL(re(n,e.protocol)):new URL(n),a=Me(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{se(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Xe=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(Xe);var Ze=[`GET`,...Xe];new Set(Ze);var Qe=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function $e(e){try{return Qe.includes(new URL(e).protocol)}catch{return!1}}var et=b.createContext(null);et.displayName=`DataRouter`;var tt=b.createContext(null);tt.displayName=`DataRouterState`;var nt=b.createContext(!1);function rt(){return b.useContext(nt)}var it=b.createContext({isTransitioning:!1});it.displayName=`ViewTransition`;var at=b.createContext(new Map);at.displayName=`Fetchers`;var ot=b.createContext(null);ot.displayName=`Await`;var st=b.createContext(null);st.displayName=`Navigation`;var ct=b.createContext(null);ct.displayName=`Location`;var lt=b.createContext({outlet:null,matches:[],isDataRoute:!1});lt.displayName=`Route`;var ut=b.createContext(null);ut.displayName=`RouteError`;var dt=`REACT_ROUTER_ERROR`,ft=`REDIRECT`,pt=`ROUTE_ERROR_RESPONSE`;function mt(e){if(e.startsWith(`${dt}:${ft}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function ht(e){if(e.startsWith(`${dt}:${pt}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Ge(t.status,t.statusText,t.data)}catch{}}function gt(e,{relative:t}={}){T(_t(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=b.useContext(st),{hash:i,pathname:a,search:o}=Ct(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Be([n,a])),r.createHref({pathname:s,search:o,hash:i})}function _t(){return b.useContext(ct)!=null}function vt(){return T(_t(),`useLocation() may be used only in the context of a <Router> component.`),b.useContext(ct).location}var yt=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function bt(e){b.useContext(st).static||b.useLayoutEffect(e)}function xt(){let{isDataRoute:e}=b.useContext(lt);return e?Bt():St()}function St(){T(_t(),`useNavigate() may be used only in the context of a <Router> component.`);let e=b.useContext(et),{basename:t,navigator:n}=b.useContext(st),{matches:r}=b.useContext(lt),{pathname:i}=vt(),a=JSON.stringify(Le(r)),o=b.useRef(!1);return bt(()=>{o.current=!0}),b.useCallback((r,s={})=>{if(se(o.current,yt),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Re(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Be([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}b.createContext(null);function Ct(e,{relative:t}={}){let{matches:n}=b.useContext(lt),{pathname:r}=vt(),i=JSON.stringify(Le(n));return b.useMemo(()=>Re(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function wt(e,t){return Tt(e,t)}function Tt(e,t,n){T(_t(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=b.useContext(st),{matches:i}=b.useContext(lt),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Ht(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=vt(),d;if(t){let e=typeof t==`string`?ue(t):t;T(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):pe(e,{pathname:p});se(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),se(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Mt(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Be([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Be([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?b.createElement(ct.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function Et(){let e=zt(),t=Ke(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=b.createElement(b.Fragment,null,b.createElement(`p`,null,`💿 Hey developer 👋`),b.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,b.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,b.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),b.createElement(b.Fragment,null,b.createElement(`h2`,null,`Unexpected Application Error!`),b.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?b.createElement(`pre`,{style:i},n):null,o)}var Dt=b.createElement(Et,null),Ot=class extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=ht(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:b.createElement(lt.Provider,{value:this.props.routeContext},b.createElement(ut.Provider,{value:e,children:this.props.component}));return this.context?b.createElement(At,{error:e},t):t}};Ot.contextType=nt;var kt=new WeakMap;function At({children:e,error:t}){let{basename:n}=b.useContext(st);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=mt(t.digest);if(e){let r=kt.get(t);if(r)throw r;let i=Ye(e.location,n),a=i.absoluteURL||i.to;if($e(a))throw Error(`Invalid redirect location`);if(Je&&!kt.get(t))if(i.isExternal||e.reloadDocument)window.location.href=a;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw kt.set(t,n),n}return b.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${a}`})}}return e}function jt({routeContext:e,match:t,children:n}){let r=b.useContext(et);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),b.createElement(lt.Provider,{value:e},n)}function Mt(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);T(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:qe(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||Dt,o&&(s<0&&c===0?(Ht(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?b.createElement(n.route.Component,null):n.route.element?n.route.element:e,b.createElement(jt,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?b.createElement(Ot,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function Nt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Pt(e){let t=b.useContext(et);return T(t,Nt(e)),t}function Ft(e){let t=b.useContext(tt);return T(t,Nt(e)),t}function It(e){let t=b.useContext(lt);return T(t,Nt(e)),t}function Lt(e){let t=It(e),n=t.matches[t.matches.length-1];return T(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Rt(){return Lt(`useRouteId`)}function zt(){let e=b.useContext(ut),t=Ft(`useRouteError`),n=Lt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Bt(){let{router:e}=Pt(`useNavigate`),t=Lt(`useNavigate`),n=b.useRef(!1);return bt(()=>{n.current=!0}),b.useCallback(async(r,i={})=>{se(n.current,yt),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Vt={};function Ht(e,t,n){!t&&!Vt[e]&&(Vt[e]=!0,se(!1,n))}b.memo(Ut);function Ut({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return Tt(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function Wt({to:e,replace:t,state:n,relative:r}){T(_t(),`<Navigate> may be used only in the context of a <Router> component.`);let{static:i}=b.useContext(st);se(!i,`<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);let{matches:a}=b.useContext(lt),{pathname:o}=vt(),s=xt(),c=Re(e,Le(a),o,r===`path`),l=JSON.stringify(c);return b.useEffect(()=>{s(JSON.parse(l),{replace:t,state:n,relative:r})},[s,l,r,t,n]),null}function k(e){T(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Gt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){T(!_t(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=b.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=ue(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=b.useMemo(()=>{let e=Me(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return se(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:b.createElement(st.Provider,{value:c},b.createElement(ct.Provider,{children:t,value:h}))}function Kt({children:e,location:t}){return wt(qt(e),t)}b.Component;function qt(e,t=[]){let n=[];return b.Children.forEach(e,(e,r)=>{if(!b.isValidElement(e))return;let i=[...t,r];if(e.type===b.Fragment){n.push.apply(n,qt(e.props.children,i));return}T(e.type===k,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),T(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=qt(e.props.children,i)),n.push(a)}),n}var Jt=`get`,Yt=`application/x-www-form-urlencoded`;function Xt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Zt(e){return Xt(e)&&e.tagName.toLowerCase()===`button`}function Qt(e){return Xt(e)&&e.tagName.toLowerCase()===`form`}function $t(e){return Xt(e)&&e.tagName.toLowerCase()===`input`}function en(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function tn(e,t){return e.button===0&&(!t||t===`_self`)&&!en(e)}var nn=null;function rn(){if(nn===null)try{new FormData(document.createElement(`form`),0),nn=!1}catch{nn=!0}return nn}var an=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function on(e){return e!=null&&!an.has(e)?(se(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Yt}"`),null):e}function sn(e,t){let n,r,i,a,o;if(Qt(e)){let o=e.getAttribute(`action`);r=o?Me(o,t):null,n=e.getAttribute(`method`)||Jt,i=on(e.getAttribute(`enctype`))||Yt,a=new FormData(e)}else if(Zt(e)||$t(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Me(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Jt,i=on(e.getAttribute(`formenctype`))||on(o.getAttribute(`enctype`))||Yt,a=new FormData(o,e),!rn()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Xt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Jt,r=null,i=Yt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);function cn(e,t){if(e===!1||e==null)throw Error(t)}function ln(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return i.pathname=n?i.pathname.endsWith(`/`)?`${i.pathname}_.${r}`:`${i.pathname}.${r}`:i.pathname===`/`?`_root.${r}`:t&&Me(i.pathname,t)===`/`?`${Ve(t)}/_root.${r}`:`${Ve(i.pathname)}.${r}`,i}async function un(e,t){if(e.id in t)return t[e.id];try{let n=await ee(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function dn(e){return e!=null&&typeof e.page==`string`}function fn(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function pn(e,t,n){return vn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await un(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(fn).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function mn(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function hn(e,t,{includeHydrateFallback:n}={}){return gn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function gn(e){return[...new Set(e)]}function _n(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function vn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!dn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(_n(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function yn(){let e=b.useContext(et);return cn(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function bn(){let e=b.useContext(tt);return cn(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var xn=b.createContext(void 0);xn.displayName=`FrameworkContext`;function Sn(){let e=b.useContext(xn);return cn(e,`You must render this element inside a <HydratedRouter> element`),e}function Cn(e,t){let n=b.useContext(xn),[r,i]=b.useState(!1),[a,o]=b.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=b.useRef(null);b.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),b.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:wn(s,p),onBlur:wn(c,m),onMouseEnter:wn(l,p),onMouseLeave:wn(u,m),onTouchStart:wn(d,p)}]:[a,f,{}]:[!1,f,{}]}function wn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Tn({page:e,...t}){let n=rt(),{nonce:r}=Sn(),{router:i}=yn(),a=b.useMemo(()=>pe(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),n?b.createElement(Dn,{page:e,matches:a,...t}):b.createElement(On,{page:e,matches:a,...t})):null}function En(e){let{manifest:t,routeModules:n}=Sn(),[r,i]=b.useState([]);return b.useEffect(()=>{let r=!1;return pn(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function Dn({page:e,matches:t,...n}){let r=vt(),{future:i}=Sn(),{basename:a}=yn(),o=b.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=ln(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return b.createElement(b.Fragment,null,o.map(e=>b.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function On({page:e,matches:t,...n}){let r=vt(),{future:i,manifest:a,routeModules:o}=Sn(),{basename:s}=yn(),{loaderData:c,matches:l}=bn(),u=b.useMemo(()=>mn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=b.useMemo(()=>mn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=b.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=ln(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=b.useMemo(()=>hn(d,a),[d,a]),m=En(d);return b.createElement(b.Fragment,null,f.map(e=>b.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>b.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>b.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function kn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}b.Component;var An=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{An&&(window.__reactRouterVersion=`7.18.2`)}catch{}function jn({basename:e,children:t,useTransitions:n,window:r}){let i=b.useRef();i.current??=oe({window:r,v5Compat:!0});let a=i.current,[o,s]=b.useState({action:a.action,location:a.location}),c=b.useCallback(e=>{n===!1?s(e):b.startTransition(()=>s(e))},[n]);return b.useLayoutEffect(()=>a.listen(c),[a,c]),b.createElement(Gt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}var Mn=b.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=b.useContext(st),v=typeof l==`string`&&te.test(l),y=Ye(l,h);l=y.to;let x=gt(l,{relative:r}),S=vt(),C=null;if(o){let e=Re(o,[],S.mask?S.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Be([h,e.pathname])),C=g.createHref(e)}let[w,ee,ne]=Cn(n,p),re=Ln(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function ie(t){e&&e(t),t.defaultPrevented||re(t)}let ae=!(y.isExternal||i),oe=b.createElement(`a`,{...p,...ne,href:(ae?C:void 0)||y.absoluteURL||x,onClick:ae?ie:e,ref:kn(m,ee),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return w&&!v?b.createElement(b.Fragment,null,oe,b.createElement(Tn,{page:x})):oe});Mn.displayName=`Link`;var Nn=b.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=Ct(a,{relative:c.relative}),d=vt(),f=b.useContext(tt),{navigator:p,basename:m}=b.useContext(st),h=f!=null&&Hn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=Me(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,x=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,S=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),C={isActive:x,isPending:S,isTransitioning:h},w=x?e:void 0,ee;ee=typeof n==`function`?n(C):[n,x?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let te=typeof i==`function`?i(C):i;return b.createElement(Mn,{...c,"aria-current":w,className:ee,ref:l,style:te,to:a,viewTransition:o},typeof s==`function`?s(C):s)});Nn.displayName=`NavLink`;var Pn=b.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Jt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=b.useContext(st),g=Bn(),_=Vn(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&te.test(s);return b.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?b.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});Pn.displayName=`Form`;function Fn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function In(e){let t=b.useContext(et);return T(t,Fn(e)),t}function Ln(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=xt(),d=vt(),f=Ct(e,{relative:o});return b.useCallback(p=>{if(tn(p,t)){p.preventDefault();let t=n===void 0?D(d)===D(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?b.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Rn=0,zn=()=>`__${String(++Rn)}__`;function Bn(){let{router:e}=In(`useSubmit`),{basename:t}=b.useContext(st),n=Rt(),r=e.fetch,i=e.navigate;return b.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=sn(e,t);if(a.navigate===!1){let e=a.fetcherKey||zn();await r(e,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync})}else await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Vn(e,{relative:t}={}){let{basename:n}=b.useContext(st),r=b.useContext(lt);T(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...Ct(e||`.`,{relative:t})},o=vt();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Be([n,a.pathname])),D(a)}function Hn(e,{relative:t}={}){let n=b.useContext(it);T(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=In(`useViewTransitionState`),i=Ct(e,{relative:t});if(!n.isTransitioning)return!1;let a=Me(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Me(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Oe(i.pathname,o)!=null||Oe(i.pathname,a)!=null}var Un={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Wn=b.createContext&&b.createContext(Un),Gn=[`attr`,`size`,`title`];function Kn(e,t){if(e==null)return{};var n,r,i=qn(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function qn(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Jn(){return Jn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jn.apply(null,arguments)}function Yn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Xn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Yn(Object(n),!0).forEach(function(t){Zn(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Yn(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Zn(e,t,n){return(t=Qn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Qn(e){var t=$n(e,`string`);return typeof t==`symbol`?t:t+``}function $n(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function er(e){return e&&e.map((e,t)=>b.createElement(e.tag,Xn({key:t},e.attr),er(e.child)))}function A(e){return t=>b.createElement(tr,Jn({attr:Xn({},e.attr)},t),er(e.child))}function tr(e){var t=t=>{var n=e.attr,r=e.size,i=e.title,a=Kn(e,Gn),o=r||t.size||`1em`,s;return t.className&&(s=t.className),e.className&&(s=(s?s+` `:``)+e.className),b.createElement(`svg`,Jn({stroke:`currentColor`,fill:`currentColor`,strokeWidth:`0`},t.attr,n,a,{className:s,style:Xn(Xn({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:`http://www.w3.org/2000/svg`}),i&&b.createElement(`title`,null,i),e.children)};return Wn===void 0?t(Un):b.createElement(Wn.Consumer,null,e=>t(e))}function nr(e){return A({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z`},child:[]}]})(e)}function rr(e){return A({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z`},child:[]}]})(e)}function ir(e){return A({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z`},child:[]}]})(e)}function ar(e){return A({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z`},child:[]}]})(e)}function or(e){return A({tag:`svg`,attr:{viewBox:`0 0 488 512`},child:[{tag:`path`,attr:{d:`M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z`},child:[]}]})(e)}function sr(e){return A({tag:`svg`,attr:{viewBox:`0 0 320 512`},child:[{tag:`path`,attr:{d:`M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z`},child:[]}]})(e)}function cr(e){return A({tag:`svg`,attr:{viewBox:`0 0 416 512`},child:[{tag:`path`,attr:{d:`M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z`},child:[]}]})(e)}function lr(e){return A({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z`},child:[]}]})(e)}function ur(e){return A({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z`},child:[]}]})(e)}function dr(e){return A({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z`},child:[]}]})(e)}function fr(e){return A({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M575.7 280.8C547.1 144.5 437.3 62.6 320 49.9V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v17.9C138.3 62.6 29.5 144.5.3 280.8c-2.2 10.1 8.5 21.3 18.7 11.4 52-55 107.7-52.4 158.6 37 5.3 9.5 14.9 8.6 19.7 0 20.2-35.4 44.9-73.2 90.7-73.2 58.5 0 88.2 68.8 90.7 73.2 4.8 8.6 14.4 9.5 19.7 0 51-89.5 107.1-91.4 158.6-37 10.3 10 20.9-1.3 18.7-11.4zM256 301.7V432c0 8.8-7.2 16-16 16-7.8 0-13.2-5.3-15.1-10.7-5.9-16.7-24.1-25.4-40.8-19.5-16.7 5.9-25.4 24.2-19.5 40.8 11.2 31.9 41.6 53.3 75.4 53.3 44.1 0 80-35.9 80-80V301.6c-9.1-7.9-19.8-13.6-32-13.6-12.3.1-22.4 4.8-32 13.7z`},child:[]}]})(e)}function pr(e){return A({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M115.38 136.9l102.11 37.18c35.19-81.54 86.21-144.29 139-173.7-95.88-4.89-188.78 36.96-248.53 111.8-6.69 8.4-2.66 21.05 7.42 24.72zm132.25 48.16l238.48 86.83c35.76-121.38 18.7-231.66-42.63-253.98-7.4-2.7-15.13-4-23.09-4-58.02.01-128.27 69.17-172.76 171.15zM521.48 60.5c6.22 16.3 10.83 34.6 13.2 55.19 5.74 49.89-1.42 108.23-18.95 166.98l102.62 37.36c10.09 3.67 21.31-3.43 21.57-14.17 2.32-95.69-41.91-187.44-118.44-245.36zM560 447.98H321.06L386 269.5l-60.14-21.9-72.9 200.37H16c-8.84 0-16 7.16-16 16.01v32.01C0 504.83 7.16 512 16 512h544c8.84 0 16-7.17 16-16.01v-32.01c0-8.84-7.16-16-16-16z`},child:[]}]})(e)}function mr(e){return A({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M631.2 96.5L436.5 0C416.4 27.8 371.9 47.2 320 47.2S223.6 27.8 203.5 0L8.8 96.5c-7.9 4-11.1 13.6-7.2 21.5l57.2 114.5c4 7.9 13.6 11.1 21.5 7.2l56.6-27.7c10.6-5.2 23 2.5 23 14.4V480c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V226.3c0-11.8 12.4-19.6 23-14.4l56.6 27.7c7.9 4 17.5.8 21.5-7.2L638.3 118c4-7.9.8-17.6-7.1-21.5z`},child:[]}]})(e)}function hr(e){return A({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z`},child:[]}]})(e)}function gr(e){return A({tag:`svg`,attr:{viewBox:`0 0 352 512`},child:[{tag:`path`,attr:{d:`M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z`},child:[]}]})(e)}function _r(e){return A({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M128 160h320v192H128V160zm400 96c0 26.51 21.49 48 48 48v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96c26.51 0 48-21.49 48-48s-21.49-48-48-48v-96c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48v96c-26.51 0-48 21.49-48 48zm-48-104c0-13.255-10.745-24-24-24H120c-13.255 0-24 10.745-24 24v208c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V152z`},child:[]}]})(e)}function vr(e){return A({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z`},child:[]}]})(e)}function yr(e){return A({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z`},child:[]}]})(e)}function br(e){return A({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M128 480h256V80c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v400zm64-384h128v32H192V96zm320 80v256c0 26.5-21.5 48-48 48h-48V128h48c26.5 0 48 21.5 48 48zM96 480H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h48v352z`},child:[]}]})(e)}function xr(e){return A({tag:`svg`,attr:{viewBox:`0 0 384 512`},child:[{tag:`path`,attr:{d:`M336 160H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h16v16c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-16h128v16c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-16h16c26.51 0 48-21.49 48-48V208c0-26.51-21.49-48-48-48zm-16 216c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h240c4.42 0 8 3.58 8 8v16zm0-96c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h240c4.42 0 8 3.58 8 8v16zM144 48h96v80h48V48c0-26.51-21.49-48-48-48h-96c-26.51 0-48 21.49-48 48v80h48V48z`},child:[]}]})(e)}function Sr(e){return A({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z`},child:[]}]})(e)}function Cr(e){return A({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M32 512h448v-64H32v64zm384-256h-66.56c-16.26 0-29.44-13.18-29.44-29.44v-9.46c0-27.37 8.88-53.41 21.46-77.72 9.11-17.61 12.9-38.39 9.05-60.42-6.77-38.78-38.47-70.7-77.26-77.45C212.62-9.04 160 37.33 160 96c0 14.16 3.12 27.54 8.69 39.58C182.02 164.43 192 194.7 192 226.49v.07c0 16.26-13.18 29.44-29.44 29.44H96c-53.02 0-96 42.98-96 96v32c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-32c0-53.02-42.98-96-96-96z`},child:[]}]})(e)}function wr(e){return A({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M431.98 448.01l-47.97.05V416h-128v32.21l-47.98.05c-8.82.01-15.97 7.16-15.98 15.99l-.05 31.73c-.01 8.85 7.17 16.03 16.02 16.02l223.96-.26c8.82-.01 15.97-7.16 15.98-15.98l.04-31.73c.01-8.85-7.17-16.03-16.02-16.02zM585.2 26.74C582.58 11.31 568.99 0 553.06 0H86.93C71 0 57.41 11.31 54.79 26.74-3.32 369.16.04 348.08.03 352c-.03 17.32 14.29 32 32.6 32h574.74c18.23 0 32.51-14.56 32.59-31.79.02-4.08 3.35 16.95-54.76-325.47zM259.83 64h120.33l9.77 96H250.06l9.77-96zm-75.17 256H71.09L90.1 208h105.97l-11.41 112zm16.29-160H98.24l16.29-96h96.19l-9.77 96zm32.82 160l11.4-112h149.65l11.4 112H233.77zm195.5-256h96.19l16.29 96H439.04l-9.77-96zm26.06 256l-11.4-112H549.9l19.01 112H455.33z`},child:[]}]})(e)}function Tr(e){return A({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M496.616 372.639l70.012-70.012c16.899-16.9 9.942-45.771-12.836-53.092L512 236.102V96c0-17.673-14.327-32-32-32h-64V24c0-13.255-10.745-24-24-24H248c-13.255 0-24 10.745-24 24v40h-64c-17.673 0-32 14.327-32 32v140.102l-41.792 13.433c-22.753 7.313-29.754 36.173-12.836 53.092l70.012 70.012C125.828 416.287 85.587 448 24 448c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24 61.023 0 107.499-20.61 143.258-59.396C181.677 487.432 216.021 512 256 512h128c39.979 0 74.323-24.568 88.742-59.396C508.495 491.384 554.968 512 616 512c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24-60.817 0-101.542-31.001-119.384-75.361zM192 128h256v87.531l-118.208-37.995a31.995 31.995 0 0 0-19.584 0L192 215.531V128z`},child:[]}]})(e)}function Er(e){return A({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z`},child:[]}]})(e)}function Dr(e){return A({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M416 320h-96c-17.6 0-32-14.4-32-32s14.4-32 32-32h96s96-107 96-160-43-96-96-96-96 43-96 96c0 25.5 22.2 63.4 45.3 96H320c-52.9 0-96 43.1-96 96s43.1 96 96 96h96c17.6 0 32 14.4 32 32s-14.4 32-32 32H185.5c-16 24.8-33.8 47.7-47.3 64H416c52.9 0 96-43.1 96-96s-43.1-96-96-96zm0-256c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM96 256c-53 0-96 43-96 96s96 160 96 160 96-107 96-160-43-96-96-96zm0 128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z`},child:[]}]})(e)}function Or(e){return A({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z`},child:[]}]})(e)}function kr(e){return A({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M480 192H365.71L260.61 8.06A16.014 16.014 0 0 0 246.71 0h-65.5c-10.63 0-18.3 10.17-15.38 20.39L214.86 192H112l-43.2-57.6c-3.02-4.03-7.77-6.4-12.8-6.4H16.01C5.6 128-2.04 137.78.49 147.88L32 256 .49 364.12C-2.04 374.22 5.6 384 16.01 384H56c5.04 0 9.78-2.37 12.8-6.4L112 320h102.86l-49.03 171.6c-2.92 10.22 4.75 20.4 15.38 20.4h65.5c5.74 0 11.04-3.08 13.89-8.06L365.71 320H480c35.35 0 96-28.65 96-64s-60.65-64-96-64z`},child:[]}]})(e)}function Ar(e){return A({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M624 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM80.55 341.27c6.28 6.84 15.1 10.72 24.33 10.71l130.54-.18a65.62 65.62 0 0 0 29.64-7.12l290.96-147.65c26.74-13.57 50.71-32.94 67.02-58.31 18.31-28.48 20.3-49.09 13.07-63.65-7.21-14.57-24.74-25.27-58.25-27.45-29.85-1.94-59.54 5.92-86.28 19.48l-98.51 49.99-218.7-82.06a17.799 17.799 0 0 0-18-1.11L90.62 67.29c-10.67 5.41-13.25 19.65-5.17 28.53l156.22 98.1-103.21 52.38-72.35-36.47a17.804 17.804 0 0 0-16.07.02L9.91 230.22c-10.44 5.3-13.19 19.12-5.57 28.08l76.21 82.97z`},child:[]}]})(e)}function jr(e){return A({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M624 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM44.81 205.66l88.74 80a62.607 62.607 0 0 0 25.47 13.93l287.6 78.35c26.48 7.21 54.56 8.72 81 1.36 29.67-8.27 43.44-21.21 47.25-35.71 3.83-14.5-1.73-32.71-23.37-54.96-19.28-19.82-44.35-32.79-70.83-40l-97.51-26.56L282.8 30.22c-1.51-5.81-5.95-10.35-11.66-11.91L206.05.58c-10.56-2.88-20.9 5.32-20.71 16.44l47.92 164.21-102.2-27.84-27.59-67.88c-1.93-4.89-6.01-8.57-11.02-9.93L52.72 64.75c-10.34-2.82-20.53 5-20.72 15.88l.23 101.78c.19 8.91 6.03 17.34 12.58 23.25z`},child:[]}]})(e)}function Mr(e){return A({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z`},child:[]}]})(e)}function Nr(e){return A({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M129.62 176h39.09c1.49-27.03 6.54-51.35 14.21-70.41-27.71 13.24-48.02 39.19-53.3 70.41zm0 32c5.29 31.22 25.59 57.17 53.3 70.41-7.68-19.06-12.72-43.38-14.21-70.41h-39.09zM224 286.69c7.69-7.45 20.77-34.42 23.43-78.69h-46.87c2.67 44.26 15.75 71.24 23.44 78.69zM200.57 176h46.87c-2.66-44.26-15.74-71.24-23.43-78.69-7.7 7.45-20.78 34.43-23.44 78.69zm64.51 102.41c27.71-13.24 48.02-39.19 53.3-70.41h-39.09c-1.49 27.03-6.53 51.35-14.21 70.41zM416 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h352c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32zm-80 416H112c-8.8 0-16-7.2-16-16s7.2-16 16-16h224c8.8 0 16 7.2 16 16s-7.2 16-16 16zm-112-96c-70.69 0-128-57.31-128-128S153.31 64 224 64s128 57.31 128 128-57.31 128-128 128zm41.08-214.41c7.68 19.06 12.72 43.38 14.21 70.41h39.09c-5.28-31.22-25.59-57.17-53.3-70.41z`},child:[]}]})(e)}function Pr(e){return A({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z`},child:[]}]})(e)}function Fr(e){return A({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M167.02 309.34c-40.12 2.58-76.53 17.86-97.19 72.3-2.35 6.21-8 9.98-14.59 9.98-11.11 0-45.46-27.67-55.25-34.35C0 439.62 37.93 512 128 512c75.86 0 128-43.77 128-120.19 0-3.11-.65-6.08-.97-9.13l-88.01-73.34zM457.89 0c-15.16 0-29.37 6.71-40.21 16.45C213.27 199.05 192 203.34 192 257.09c0 13.7 3.25 26.76 8.73 38.7l63.82 53.18c7.21 1.8 14.64 3.03 22.39 3.03 62.11 0 98.11-45.47 211.16-256.46 7.38-14.35 13.9-29.85 13.9-45.99C512 20.64 486 0 457.89 0z`},child:[]}]})(e)}function Ir(e){return A({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M416 48v416c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V48c0-26.51 21.49-48 48-48h224c26.51 0 48 21.49 48 48zm96 58v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42V88h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zM30 376h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6z`},child:[]}]})(e)}function Lr(e){return A({tag:`svg`,attr:{viewBox:`0 0 384 512`},child:[{tag:`path`,attr:{d:`M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z`},child:[]}]})(e)}function Rr(e){return A({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zm0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z`},child:[]}]})(e)}function zr(e){return A({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z`},child:[]}]})(e)}function Br(e){return A({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z`},child:[]}]})(e)}function Vr(e){return A({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M475.115 163.781L336 252.309v-68.28c0-18.916-20.931-30.399-36.885-20.248L160 252.309V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h464c13.255 0 24-10.745 24-24V184.029c0-18.917-20.931-30.399-36.885-20.248z`},child:[]}]})(e)}function Hr(e){return A({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M560 64c8.84 0 16-7.16 16-16V16c0-8.84-7.16-16-16-16H16C7.16 0 0 7.16 0 16v32c0 8.84 7.16 16 16 16h15.98v384H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h240v-80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v80h240c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16h-16V64h16zm-304 44.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zm0 96c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zm-128-96c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zM179.2 256h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8zM192 384c0-53.02 42.98-96 96-96s96 42.98 96 96H192zm256-140.8c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-96c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4z`},child:[]}]})(e)}function Ur(e){return A({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z`},child:[]}]})(e)}function Wr(e){return A({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z`},child:[]}]})(e)}function Gr(e){return A({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z`},child:[]}]})(e)}function Kr(e){return A({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M480 288c0-80.25-49.28-148.92-119.19-177.62L320 192V80a16 16 0 0 0-16-16h-96a16 16 0 0 0-16 16v112l-40.81-81.62C81.28 139.08 32 207.75 32 288v64h448zm16 96H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z`},child:[]}]})(e)}function qr(e){return A({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z`},child:[]}]})(e)}function Jr(e){return A({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z`},child:[]}]})(e)}function Yr(e){return A({tag:`svg`,attr:{viewBox:`0 0 496 512`},child:[{tag:`path`,attr:{d:`M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z`},child:[]}]})(e)}function Xr(e){return A({tag:`svg`,attr:{viewBox:`0 0 496 512`},child:[{tag:`path`,attr:{d:`M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm-11.34 240.23c-2.89 4.82-8.1 7.77-13.72 7.77h-.31c-4.24 0-8.31 1.69-11.31 4.69l-5.66 5.66c-3.12 3.12-3.12 8.19 0 11.31l5.66 5.66c3 3 4.69 7.07 4.69 11.31V304c0 8.84-7.16 16-16 16h-6.11c-6.06 0-11.6-3.42-14.31-8.85l-22.62-45.23c-2.44-4.88-8.95-5.94-12.81-2.08l-19.47 19.46c-3 3-7.07 4.69-11.31 4.69H50.81C49.12 277.55 48 266.92 48 256c0-110.28 89.72-200 200-200 21.51 0 42.2 3.51 61.63 9.82l-50.16 38.53c-5.11 3.41-4.63 11.06.86 13.81l10.83 5.41c5.42 2.71 8.84 8.25 8.84 14.31V216c0 4.42-3.58 8-8 8h-3.06c-3.03 0-5.8-1.71-7.15-4.42-1.56-3.12-5.96-3.29-7.76-.3l-17.37 28.95zM408 358.43c0 4.24-1.69 8.31-4.69 11.31l-9.57 9.57c-3 3-7.07 4.69-11.31 4.69h-15.16c-4.24 0-8.31-1.69-11.31-4.69l-13.01-13.01a26.767 26.767 0 0 0-25.42-7.04l-21.27 5.32c-1.27.32-2.57.48-3.88.48h-10.34c-4.24 0-8.31-1.69-11.31-4.69l-11.91-11.91a8.008 8.008 0 0 1-2.34-5.66v-10.2c0-3.27 1.99-6.21 5.03-7.43l39.34-15.74c1.98-.79 3.86-1.82 5.59-3.05l23.71-16.89a7.978 7.978 0 0 1 4.64-1.48h12.09c3.23 0 6.15 1.94 7.39 4.93l5.35 12.85a4 4 0 0 0 3.69 2.46h3.8c1.78 0 3.35-1.18 3.84-2.88l4.2-14.47c.5-1.71 2.06-2.88 3.84-2.88h6.06c2.21 0 4 1.79 4 4v12.93c0 2.12.84 4.16 2.34 5.66l11.91 11.91c3 3 4.69 7.07 4.69 11.31v24.6z`},child:[]}]})(e)}function Zr(e){return A({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z`},child:[]}]})(e)}function Qr(e){return A({tag:`svg`,attr:{viewBox:`0 0 384 512`},child:[{tag:`path`,attr:{d:`M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z`},child:[]}]})(e)}function $r(e){return A({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z`},child:[]}]})(e)}function ei(e){return A({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z`},child:[]}]})(e)}function ti(e){return A({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z`},child:[]}]})(e)}function ni(e){return A({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z`},child:[]}]})(e)}function ri(e){return A({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M160 224v64h320v-64c0-35.3 28.7-64 64-64h32c0-53-43-96-96-96H160c-53 0-96 43-96 96h32c35.3 0 64 28.7 64 64zm416-32h-32c-17.7 0-32 14.3-32 32v96H128v-96c0-17.7-14.3-32-32-32H64c-35.3 0-64 28.7-64 64 0 23.6 13 44 32 55.1V432c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-16h384v16c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V311.1c19-11.1 32-31.5 32-55.1 0-35.3-28.7-64-64-64z`},child:[]}]})(e)}function ii(e){return A({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M288 130.54V112h16c8.84 0 16-7.16 16-16V80c0-8.84-7.16-16-16-16h-96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h16v18.54C115.49 146.11 32 239.18 32 352h448c0-112.82-83.49-205.89-192-221.46zM496 384H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z`},child:[]}]})(e)}function ai(e){return A({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z`},child:[]}]})(e)}function oi(e){return A({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z`},child:[]}]})(e)}function si(e){return A({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z`},child:[]}]})(e)}function ci(e){return A({tag:`svg`,attr:{viewBox:`0 0 384 512`},child:[{tag:`path`,attr:{d:`M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm121.2 231.8l-143 141.8c-4.7 4.7-12.3 4.6-17-.1l-82.6-83.3c-4.7-4.7-4.6-12.3.1-17L99.1 285c4.7-4.7 12.3-4.6 17 .1l46 46.4 106-105.2c4.7-4.7 12.3-4.6 17 .1l28.2 28.4c4.7 4.8 4.6 12.3-.1 17z`},child:[]}]})(e)}function li(e){return A({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z`},child:[]}]})(e)}function j(e){return A({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z`},child:[]}]})(e)}function ui(e){return A({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z`},child:[]}]})(e)}function di(e){return A({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z`},child:[]}]})(e)}function fi(e){return A({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z`},child:[]}]})(e)}function pi(e){return A({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z`},child:[]}]})(e)}function mi(e){return A({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z`},child:[]}]})(e)}function hi(e){return A({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z`},child:[]}]})(e)}function gi(e){return A({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z`},child:[]}]})(e)}function M(e){return A({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z`},child:[]}]})(e)}function _i(e){return A({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M12.971 352h32.394C67.172 454.735 181.944 512 288 512c106.229 0 220.853-57.38 242.635-160h32.394c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0l-67.029 67.029c-7.56 7.56-2.206 20.485 8.485 20.485h35.146c-20.29 54.317-84.963 86.588-144.117 94.015V256h52c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-52v-5.47c37.281-13.178 63.995-48.725 64-90.518C384.005 43.772 341.605.738 289.37.01 235.723-.739 192 42.525 192 96c0 41.798 26.716 77.35 64 90.53V192h-52c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h52v190.015c-58.936-7.399-123.82-39.679-144.117-94.015h35.146c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0L4.485 331.515C-3.074 339.074 2.28 352 12.971 352zM288 64c17.645 0 32 14.355 32 32s-14.355 32-32 32-32-14.355-32-32 14.355-32 32-32z`},child:[]}]})(e)}function vi(e){return A({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M466.27 286.69C475.04 271.84 480 256 480 236.85c0-44.015-37.218-85.58-85.82-85.58H357.7c4.92-12.81 8.85-28.13 8.85-46.54C366.55 31.936 328.86 0 271.28 0c-61.607 0-58.093 94.933-71.76 108.6-22.747 22.747-49.615 66.447-68.76 83.4H32c-17.673 0-32 14.327-32 32v240c0 17.673 14.327 32 32 32h64c14.893 0 27.408-10.174 30.978-23.95 44.509 1.001 75.06 39.94 177.802 39.94 7.22 0 15.22.01 22.22.01 77.117 0 111.986-39.423 112.94-95.33 13.319-18.425 20.299-43.122 17.34-66.99 9.854-18.452 13.664-40.343 8.99-62.99zm-61.75 53.83c12.56 21.13 1.26 49.41-13.94 57.57 7.7 48.78-17.608 65.9-53.12 65.9h-37.82c-71.639 0-118.029-37.82-171.64-37.82V240h10.92c28.36 0 67.98-70.89 94.54-97.46 28.36-28.36 18.91-75.63 37.82-94.54 47.27 0 47.27 32.98 47.27 56.73 0 39.17-28.36 56.72-28.36 94.54h103.99c21.11 0 37.73 18.91 37.82 37.82.09 18.9-12.82 37.81-22.27 37.81 13.489 14.555 16.371 45.236-5.21 65.62zM88 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z`},child:[]}]})(e)}function yi(e){return A({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z`},child:[]}]})(e)}function bi(e){return A({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z`},child:[]}]})(e)}function xi(e){return A({tag:`svg`,attr:{viewBox:`0 0 320 512`},child:[{tag:`path`,attr:{d:`M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z`},child:[]}]})(e)}var Si=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),N=s(((e,t)=>{t.exports=Si()}))();function Ci(){return(0,N.jsx)(`header`,{className:`\r
        w-full\r
        h-[58px]\r
        bg-[#03182B]\r
        text-white\r
        border-b\r
        border-white/10\r
      `,children:(0,N.jsx)(`div`,{className:`\r
          w-full\r
          max-w-[1600px]\r
          mx-auto\r
          h-full\r
          px-5\r
          sm:px-7\r
          lg:px-10\r
          xl:px-12\r
          2xl:px-4\r
        `,children:(0,N.jsxs)(`div`,{className:`\r
            h-full\r
            flex\r
            items-center\r
            justify-between\r
            gap-6\r
          `,children:[(0,N.jsxs)(`div`,{className:`\r
              flex\r
              items-center\r
              min-w-0\r
            `,children:[(0,N.jsxs)(`a`,{href:`tel:+917666984626`,className:`\r
                flex\r
                items-center\r
                gap-[10px]\r
                whitespace-nowrap\r
                text-white\r
                hover:text-white\r
                transition-colors\r
                duration-200\r
              `,children:[(0,N.jsx)(Mr,{className:`\r
                  shrink-0\r
                  text-[#8BC63E]\r
                  text-[18px]\r
                `}),(0,N.jsx)(`span`,{className:`\r
                  text-[13px]\r
                  sm:text-[14px]\r
                  font-medium\r
                  tracking-[0.1px]\r
                `,children:`+91 766 698 4626`})]}),(0,N.jsx)(`span`,{className:`\r
                mx-5\r
                h-[28px]\r
                w-px\r
                bg-white/20\r
              `}),(0,N.jsxs)(`a`,{href:`tel:+918657867181`,className:`\r
                hidden\r
                sm:flex\r
                items-center\r
                gap-[10px]\r
                whitespace-nowrap\r
                text-white\r
                transition-colors\r
                duration-200\r
              `,children:[(0,N.jsx)(rr,{className:`\r
                  shrink-0\r
                  text-[#8BC63E]\r
                  text-[21px]\r
                `}),(0,N.jsx)(`span`,{className:`\r
                  text-[13px]\r
                  sm:text-[14px]\r
                  font-medium\r
                  tracking-[0.1px]\r
                `,children:`+91 865 786 7181`})]}),(0,N.jsx)(`span`,{className:`\r
                hidden\r
                lg:block\r
                mx-5\r
                h-[28px]\r
                w-px\r
                bg-white/20\r
              `}),(0,N.jsxs)(`a`,{href:`mailto:sajid@sarathinx.com`,className:`\r
                hidden\r
                lg:flex\r
                items-center\r
                gap-[10px]\r
                whitespace-nowrap\r
                text-white\r
                transition-colors\r
                duration-200\r
              `,children:[(0,N.jsx)(ni,{className:`\r
                  shrink-0\r
                  text-[#8BC63E]\r
                  text-[20px]\r
                `}),(0,N.jsx)(`span`,{className:`\r
                  text-[14px]\r
                  font-medium\r
                `,children:`sajid@sarathinx.com`})]})]}),(0,N.jsxs)(`div`,{className:`\r
              flex\r
              items-center\r
              shrink-0\r
            `,children:[(0,N.jsx)(`span`,{className:`\r
                hidden\r
                md:block\r
                mr-4\r
                text-[14px]\r
                font-normal\r
                text-white/90\r
                whitespace-nowrap\r
              `,children:`Connect Us :`}),(0,N.jsx)(`a`,{href:`https://www.instagram.com/sarathi_nx_travel/`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Instagram`,className:`\r
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
              `,children:(0,N.jsx)(ar,{className:`\r
                  text-white\r
                  text-[18px]\r
                `})}),(0,N.jsx)(`a`,{href:`#`,"aria-label":`LinkedIn`,className:`\r
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
              `,children:(0,N.jsx)(bi,{className:`\r
                  text-white\r
                  text-[17px]\r
                `})}),(0,N.jsx)(`a`,{href:`#`,"aria-label":`Facebook`,className:`\r
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
              `,children:(0,N.jsx)(xi,{className:`\r
                  text-white\r
                  text-[17px]\r
                `})}),(0,N.jsx)(`a`,{href:`#`,"aria-label":`X`,className:`\r
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
              `,children:(0,N.jsx)(yi,{className:`\r
                  text-white\r
                  text-[16px]\r
                `})})]})]})})})}var wi=[{id:1,title:`Home`,href:`/`},{id:2,title:`Flight & Air Travel`,href:`/flight-air-travel`},{id:3,title:`Hotel & Accommodation`,href:`/hotel-accommodation`},{id:4,title:`Visa & Documentation`,href:`/visa-documentation`},{id:5,title:`Trade Fair`,href:`/trade-fair`},{id:6,title:`Premium Holiday Packages`,href:`/premium-holiday-packages`},{id:7,title:`About Us`,href:`/about-us`},{id:8,title:`Contact Us`,href:`/contact-us`},{id:9,title:`More Service`,href:`#`}];function Ti(){let[e,t]=(0,b.useState)(!1),[n,r]=(0,b.useState)(!1),i=wi.filter(e=>e.title!==`More Service`),a=[{title:`Business & Corporate Travel`,href:`/business-corporate-travel`,icon:pi},{title:`MICE & Exhibition Travel`,href:`/mice-exhibition-travel`,icon:qr},{title:`Travel Insurance`,href:`/travel-insurance`,icon:Er},{title:`Transfer & Car Rental`,href:`/transfer-car-rental`,icon:ui},{title:`Cruise & Ferry Booking`,href:`/cruise-ferry-booking`,icon:Tr},{title:`Group & Customized Tours`,href:`/group-customized-tours`,icon:lr}],o=(e=``)=>{let t=e.toLowerCase();return t.includes(`home`)?Ur:t.includes(`flight`)||t.includes(`air`)?kr:t.includes(`hotel`)||t.includes(`accommodation`)?Hr:t.includes(`visa`)||t.includes(`documentation`)?Nr:t.includes(`trade`)||t.includes(`fair`)||t.includes(`exhibition`)?qr:t.includes(`holiday`)||t.includes(`package`)?pr:t.includes(`about`)?lr:t.includes(`contact`)?Mr:yr};return(0,b.useEffect)(()=>{let e=()=>{window.innerWidth>=1024&&(t(!1),r(!1))};return window.addEventListener(`resize`,e),()=>{window.removeEventListener(`resize`,e)}},[]),(0,b.useEffect)(()=>(document.body.style.overflow=e?`hidden`:``,()=>{document.body.style.overflow=``}),[e]),(0,N.jsxs)(`nav`,{className:`\r
        relative\r
        z-[100]\r
\r
        w-full\r
\r
        bg-[#F5F7F2]\r
\r
        border-b\r
        border-[#03182B]/10\r
\r
        shadow-[0_4px_18px_rgba(3,24,43,0.10)]\r
      `,children:[(0,N.jsx)(`div`,{className:`\r
          w-full\r
          max-w-[1600px]\r
          mx-auto\r
\r
          px-4\r
          sm:px-5\r
          lg:px-6\r
          xl:px-7\r
        `,children:(0,N.jsxs)(`div`,{className:`\r
            h-[78px]\r
\r
            flex\r
            items-center\r
          `,children:[(0,N.jsx)(`div`,{className:`\r
              shrink-0\r
\r
              w-[260px]\r
              sm:w-[285px]\r
              lg:w-[310px]\r
              xl:w-[340px]\r
\r
              h-full\r
\r
              flex\r
              items-center\r
\r
              pr-6\r
              xl:pr-8\r
            `,children:(0,N.jsx)(Nn,{to:`/`,end:!0,onClick:()=>{t(!1),r(!1)},className:`\r
                flex\r
                items-center\r
\r
                w-full\r
                h-full\r
              `,children:(0,N.jsx)(`img`,{src:`/sarathi-logo.png`,alt:`Sarathi NX`,className:`\r
                  block\r
\r
                  w-auto\r
                  h-auto\r
\r
                  max-w-full\r
                  max-h-[150px]\r
\r
                  object-contain\r
\r
                  object-left\r
                `})})}),(0,N.jsxs)(`div`,{className:`\r
              hidden\r
              lg:flex\r
\r
              flex-1\r
              min-w-0\r
\r
              h-full\r
\r
              items-stretch\r
            `,children:[i.map(e=>{let t=o(e.title);return(0,N.jsx)(`div`,{className:`\r
                    relative\r
\r
                    h-full\r
\r
                    min-w-0\r
\r
                    border-l\r
                    border-[#03182B]/10\r
\r
                    flex\r
                    items-center\r
                    justify-center\r
                  `,children:(0,N.jsx)(Nn,{to:e.href,end:e.href===`/`,className:`\r
                      group\r
\r
                      relative\r
\r
                      h-full\r
                      w-full\r
\r
                      flex\r
                      flex-col\r
\r
                      items-center\r
                      justify-center\r
\r
                      gap-[5px]\r
\r
                      px-4\r
                      xl:px-5\r
\r
                      text-center\r
                    `,children:({isActive:n})=>(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(t,{className:`
                            shrink-0

                            text-[25px]
                            xl:text-[27px]

                            transition-colors
                            duration-200

                            ${n?`text-[#76A82D]`:`text-[#668F2C]`}

                            group-hover:text-[#76A82D]
                          `}),(0,N.jsx)(`span`,{className:`
                            block

                            w-full

                            text-[9px]
                            xl:text-[10px]
                            2xl:text-[11px]

                            font-semibold

                            leading-[1.25]

                            whitespace-nowrap

                            transition-colors
                            duration-200

                            ${n?`text-[#03182B]`:`text-[#33495A]`}

                            group-hover:text-[#03182B]
                          `,children:e.title}),(0,N.jsx)(`span`,{className:`
                            absolute

                            bottom-[8px]

                            left-1/2
                            -translate-x-1/2

                            h-[3px]

                            rounded-full

                            bg-[#8BC63E]

                            transition-all
                            duration-200

                            ${n?`w-[42px]`:`w-0 group-hover:w-[32px]`}
                          `})]})})},e.id)}),(0,N.jsxs)(`div`,{className:`\r
                relative\r
\r
                shrink-0\r
\r
                w-[125px]\r
                xl:w-[135px]\r
\r
                h-full\r
\r
                border-l\r
                border-[#03182B]/10\r
\r
                flex\r
                items-center\r
                justify-center\r
              `,onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[(0,N.jsxs)(`button`,{type:`button`,onClick:()=>r(e=>!e),className:`\r
                  group\r
\r
                  relative\r
\r
                  h-full\r
                  w-full\r
\r
                  flex\r
                  flex-col\r
\r
                  items-center\r
                  justify-center\r
\r
                  gap-[5px]\r
\r
                  px-4\r
                `,children:[(0,N.jsx)(yr,{className:`\r
                    text-[25px]\r
                    xl:text-[27px]\r
\r
                    text-[#668F2C]\r
\r
                    group-hover:text-[#76A82D]\r
\r
                    transition-colors\r
                    duration-200\r
                  `}),(0,N.jsxs)(`span`,{className:`\r
                    flex\r
                    items-center\r
\r
                    gap-1\r
\r
                    text-[9px]\r
                    xl:text-[10px]\r
                    2xl:text-[11px]\r
\r
                    font-semibold\r
\r
                    leading-[1.2]\r
\r
                    text-[#33495A]\r
\r
                    group-hover:text-[#03182B]\r
\r
                    whitespace-nowrap\r
                  `,children:[`More Service`,(0,N.jsx)(li,{className:`
                      text-[7px]

                      transition-transform
                      duration-200

                      ${n?`rotate-180`:``}
                    `})]}),(0,N.jsx)(`span`,{className:`
                    absolute

                    bottom-[8px]

                    left-1/2
                    -translate-x-1/2

                    h-[3px]

                    rounded-full

                    bg-[#8BC63E]

                    transition-all
                    duration-200

                    ${n?`w-[48px]`:`w-0 group-hover:w-[36px]`}
                  `})]}),(0,N.jsxs)(`div`,{className:`
                  absolute

                  top-[calc(100%+1px)]
                  right-0

                  w-[315px]

                  overflow-hidden

                  rounded-b-[6px]

                  bg-[#FFFFFF]

                  border
                  border-[#03182B]/10

                  shadow-[0_22px_55px_rgba(3,24,43,0.18)]

                  transition-all
                  duration-200

                  ${n?`opacity-100 translate-y-0 visible pointer-events-auto`:`opacity-0 -translate-y-2 invisible pointer-events-none`}
                `,children:[(0,N.jsxs)(`div`,{className:`\r
                    px-5\r
                    py-4\r
\r
                    border-b\r
                    border-[#03182B]/10\r
\r
                    bg-[#F5F7F2]\r
                  `,children:[(0,N.jsx)(`p`,{className:`\r
                      m-0\r
\r
                      text-[12px]\r
\r
                      uppercase\r
                      tracking-[1.2px]\r
\r
                      font-bold\r
\r
                      text-[#668F2C]\r
                    `,children:`More Services`}),(0,N.jsx)(`p`,{className:`\r
                      mt-1\r
\r
                      text-[11px]\r
\r
                      text-[#536474]\r
                    `,children:`Explore our additional travel services`})]}),(0,N.jsx)(`div`,{className:`py-2`,children:a.map(e=>{let n=e.icon;return(0,N.jsxs)(Nn,{to:e.href,onClick:()=>{r(!1),t(!1)},className:`\r
                          group\r
\r
                          flex\r
                          items-center\r
\r
                          gap-3\r
\r
                          w-full\r
\r
                          px-5\r
                          py-[13px]\r
\r
                          text-[#33495A]\r
\r
                          transition-all\r
                          duration-200\r
\r
                          hover:bg-[#8BC63E]/10\r
                          hover:text-[#03182B]\r
                        `,children:[(0,N.jsx)(`span`,{className:`\r
                            shrink-0\r
\r
                            w-[32px]\r
                            h-[32px]\r
\r
                            rounded-full\r
\r
                            flex\r
                            items-center\r
                            justify-center\r
\r
                            bg-[#8BC63E]/10\r
\r
                            border\r
                            border-[#8BC63E]/20\r
\r
                            group-hover:bg-[#8BC63E]/20\r
                          `,children:(0,N.jsx)(n,{className:`\r
                              text-[13px]\r
\r
                              text-[#668F2C]\r
\r
                              group-hover:text-[#527C20]\r
                            `})}),(0,N.jsx)(`span`,{className:`\r
                            min-w-0\r
\r
                            text-[12px]\r
                            xl:text-[13px]\r
\r
                            font-semibold\r
\r
                            leading-[1.35]\r
\r
                            whitespace-normal\r
                          `,children:e.title})]},e.title)})})]})]})]}),(0,N.jsx)(`div`,{className:`\r
              lg:hidden\r
\r
              ml-auto\r
\r
              flex\r
              items-center\r
            `,children:(0,N.jsx)(`button`,{type:`button`,onClick:()=>{t(e=>!e),r(!1)},"aria-label":`Toggle Menu`,"aria-expanded":e,className:`\r
                w-[42px]\r
                h-[42px]\r
\r
                flex\r
                items-center\r
                justify-center\r
\r
                rounded-[4px]\r
\r
                border\r
                border-[#668F2C]\r
\r
                bg-[#8BC63E]/5\r
\r
                text-[#668F2C]\r
\r
                text-[18px]\r
\r
                transition-all\r
                duration-200\r
\r
                hover:bg-[#8BC63E]/10\r
              `,children:e?(0,N.jsx)(gr,{}):(0,N.jsx)(hi,{})})})]})}),(0,N.jsx)(`div`,{className:`
          lg:hidden

          absolute

          top-full
          left-0
          right-0

          z-[110]

          bg-[#F5F7F2]

          border-t
          border-[#03182B]/10

          shadow-[0_20px_45px_rgba(3,24,43,0.18)]

          transition-all
          duration-300

          ${e?`opacity-100 visible`:`opacity-0 invisible pointer-events-none`}
        `,children:(0,N.jsxs)(`div`,{className:`\r
            max-h-[calc(100vh-78px)]\r
\r
            overflow-y-auto\r
\r
            overscroll-contain\r
\r
            px-3\r
            py-3\r
          `,children:[i.map(e=>{let n=o(e.title);return(0,N.jsxs)(Nn,{to:e.href,end:e.href===`/`,onClick:()=>{t(!1),r(!1)},className:({isActive:e})=>`
                  flex
                  items-center

                  gap-4

                  min-h-[52px]

                  px-4
                  py-3

                  rounded-[4px]

                  border-b
                  border-[#03182B]/10

                  ${e?`text-[#527C20] bg-[#8BC63E]/10`:`text-[#33495A] hover:text-[#527C20] hover:bg-[#8BC63E]/5`}
                `,children:[(0,N.jsx)(n,{className:`\r
                    text-[18px]\r
                    shrink-0\r
                  `}),(0,N.jsx)(`span`,{className:`\r
                    text-[13px]\r
                    font-semibold\r
\r
                    leading-[1.3]\r
                  `,children:e.title})]},e.id)}),(0,N.jsxs)(`button`,{type:`button`,onClick:()=>r(e=>!e),className:`\r
              w-full\r
\r
              min-h-[54px]\r
\r
              flex\r
              items-center\r
              justify-between\r
\r
              px-4\r
              py-3\r
\r
              text-[#33495A]\r
\r
              border-b\r
              border-[#03182B]/10\r
            `,children:[(0,N.jsxs)(`span`,{className:`\r
                flex\r
                items-center\r
                gap-4\r
              `,children:[(0,N.jsx)(yr,{className:`\r
                  text-[18px]\r
                  shrink-0\r
\r
                  text-[#668F2C]\r
                `}),(0,N.jsx)(`span`,{className:`\r
                  text-[13px]\r
                  font-semibold\r
                `,children:`More Service`})]}),(0,N.jsx)(li,{className:`
                text-[9px]

                transition-transform

                ${n?`rotate-180`:``}
              `})]}),(0,N.jsx)(`div`,{className:`
              overflow-hidden

              transition-all
              duration-300

              ${n?`max-h-[500px] opacity-100`:`max-h-0 opacity-0`}
            `,children:(0,N.jsx)(`div`,{className:`\r
                mt-2\r
                mb-1\r
                mx-1\r
\r
                rounded-[5px]\r
\r
                bg-white\r
\r
                border\r
                border-[#03182B]/10\r
\r
                overflow-hidden\r
              `,children:a.map(e=>{let n=e.icon;return(0,N.jsxs)(Nn,{to:e.href,onClick:()=>{t(!1),r(!1)},className:`\r
                      flex\r
                      items-center\r
\r
                      gap-3\r
\r
                      min-h-[52px]\r
\r
                      px-4\r
                      py-3\r
\r
                      border-b\r
                      border-[#03182B]/10\r
\r
                      last:border-b-0\r
\r
                      text-[#33495A]\r
\r
                      hover:text-[#527C20]\r
                      hover:bg-[#8BC63E]/10\r
\r
                      transition-colors\r
                      duration-200\r
                    `,children:[(0,N.jsx)(`span`,{className:`\r
                        shrink-0\r
\r
                        w-[30px]\r
                        h-[30px]\r
\r
                        rounded-full\r
\r
                        flex\r
                        items-center\r
                        justify-center\r
\r
                        bg-[#8BC63E]/10\r
                      `,children:(0,N.jsx)(n,{className:`\r
                          text-[12px]\r
\r
                          text-[#668F2C]\r
                        `})}),(0,N.jsx)(`span`,{className:`\r
                        text-[12px]\r
\r
                        font-semibold\r
\r
                        leading-[1.35]\r
                      `,children:e.title})]},e.title)})})})]})})]})}var Ei=(0,b.createContext)({});function Di(e){let t=(0,b.useRef)(null);return t.current===null&&(t.current=e()),t.current}var Oi=typeof window<`u`?b.useLayoutEffect:b.useEffect,ki=(0,b.createContext)(null);function Ai(e,t){e.indexOf(t)===-1&&e.push(t)}function ji(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var Mi=(e,t,n)=>n>t?t:n<e?e:n,Ni={},Pi=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Fi=e=>typeof e==`object`&&!!e,Ii=e=>/^0[^.\s]+$/u.test(e);function Li(e){let t;return()=>(t===void 0&&(t=e()),t)}var P=e=>e,F=(...e)=>e.reduce((e,t)=>n=>t(e(n))),I=(e,t,n)=>{let r=t-e;return r?(n-e)/r:1},Ri=class{constructor(){this.subscriptions=[]}add(e){return Ai(this.subscriptions,e),()=>ji(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},L=e=>e*1e3,zi=e=>e/1e3,Bi=(e,t)=>t?1e3/t*e:0,Vi=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Hi=1e-7,Ui=12;function Wi(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=Vi(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>Hi&&++s<Ui);return o}function Gi(e,t,n,r){if(e===t&&n===r)return P;let i=t=>Wi(t,0,1,e,n);return e=>e===0||e===1?e:Vi(i(e),t,r)}var Ki=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,qi=e=>t=>1-e(1-t),Ji=Gi(.33,1.53,.69,.99),Yi=qi(Ji),Xi=Ki(Yi),Zi=e=>e>=1?1:(e*=2)<1?.5*Yi(e):.5*(2-2**(-10*(e-1))),Qi=e=>1-Math.sin(Math.acos(e)),$i=qi(Qi),ea=Ki(Qi),ta=Gi(.42,0,1,1),na=Gi(0,0,.58,1),ra=Gi(.42,0,.58,1),ia=e=>Array.isArray(e)&&typeof e[0]!=`number`,aa=e=>Array.isArray(e)&&typeof e[0]==`number`,oa={linear:P,easeIn:ta,easeInOut:ra,easeOut:na,circIn:Qi,circInOut:ea,circOut:$i,backIn:Yi,backInOut:Xi,backOut:Ji,anticipate:Zi},sa=e=>typeof e==`string`,ca=e=>{if(aa(e)){e.length;let[t,n,r,i]=e;return Gi(t,n,r,i)}return sa(e)?(oa[e],`${e}`,oa[e]):e},la=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`];function ua(e){let t=new Set,n=new Set,r=!1,i=!1,a=new WeakSet,o={delta:0,timestamp:0,isProcessing:!1};function s(t){a.has(t)&&(c.schedule(t),e()),t(o)}let c={schedule:(e,i=!1,o=!1)=>{let s=o&&r?t:n;return i&&a.add(e),s.add(e),e},cancel:e=>{n.delete(e),a.delete(e)},process:e=>{if(o=e,r){i=!0;return}r=!0;let a=t;t=n,n=a,t.forEach(s),t.clear(),r=!1,i&&(i=!1,c.process(e))}};return c}var da=40;function fa(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=la.reduce((e,t)=>(e[t]=ua(a),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=Ni.useManualTiming,o=a?i.timestamp:performance.now();n=!1,a||(i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,da),1)),i.timestamp=o,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:la.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<la.length;t++)o[la[t]].cancel(e)},state:i,steps:o}}var{schedule:R,cancel:pa,state:ma,steps:ha}=fa(typeof requestAnimationFrame<`u`?requestAnimationFrame:P,!0),ga;function _a(){ga=void 0}var va={now:()=>(ga===void 0&&va.set(ma.isProcessing||Ni.useManualTiming?ma.timestamp:performance.now()),ga),set:e=>{ga=e,queueMicrotask(_a)}},ya=e=>t=>typeof t==`string`&&t.startsWith(e),ba=ya(`--`),xa=ya(`var(--`),Sa=e=>xa(e)?Ca.test(e.split(`/*`)[0].trim()):!1,Ca=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function wa(e){return typeof e==`string`&&e.split(`/*`)[0].includes(`var(--`)}var Ta={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},Ea={...Ta,transform:e=>Mi(0,1,e)},Da={...Ta,default:1},Oa=e=>Math.round(e*1e5)/1e5,ka=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Aa(e){return e==null}var ja=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Ma=(e,t)=>n=>!!(typeof n==`string`&&ja.test(n)&&n.startsWith(e)||t&&!Aa(n)&&Object.prototype.hasOwnProperty.call(n,t)),Na=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(ka);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},Pa=e=>Mi(0,255,e),Fa={...Ta,transform:e=>Math.round(Pa(e))},Ia={test:Ma(`rgb`,`red`),parse:Na(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+Fa.transform(e)+`, `+Fa.transform(t)+`, `+Fa.transform(n)+`, `+Oa(Ea.transform(r))+`)`};function La(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var Ra={test:Ma(`#`),parse:La,transform:Ia.transform},za=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Ba=za(`deg`),Va=za(`%`),z=za(`px`),Ha=za(`vh`),Ua=za(`vw`),Wa={...Va,parse:e=>Va.parse(e)/100,transform:e=>Va.transform(e*100)},Ga={test:Ma(`hsl`,`hue`),parse:Na(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+Va.transform(Oa(t))+`, `+Va.transform(Oa(n))+`, `+Oa(Ea.transform(r))+`)`},Ka={test:e=>Ia.test(e)||Ra.test(e)||Ga.test(e),parse:e=>Ia.test(e)?Ia.parse(e):Ga.test(e)?Ga.parse(e):Ra.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?Ia.transform(e):Ga.transform(e),getAnimatableNone:e=>{let t=Ka.parse(e);return t.alpha=0,Ka.transform(t)}},qa=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Ja(e){return isNaN(e)&&typeof e==`string`&&(e.match(ka)?.length||0)+(e.match(qa)?.length||0)>0}var Ya=`number`,Xa=`color`,Za=`var`,Qa=`var(`,$a="${}",eo=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function to(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(eo,e=>(Ka.test(e)?(r.color.push(a),i.push(Xa),n.push(Ka.parse(e))):e.startsWith(Qa)?(r.var.push(a),i.push(Za),n.push(e)):(r.number.push(a),i.push(Ya),n.push(parseFloat(e))),++a,$a)).split($a),indexes:r,types:i}}function no(e){return to(e).values}function ro({split:e,types:t}){let n=e.length;return r=>{let i=``;for(let a=0;a<n;a++)if(i+=e[a],r[a]!==void 0){let e=t[a];i+=e===Ya?Oa(r[a]):e===Xa?Ka.transform(r[a]):r[a]}return i}}function io(e){return ro(to(e))}var ao=e=>typeof e==`number`?0:Ka.test(e)?Ka.getAnimatableNone(e):e,oo=(e,t)=>typeof e==`number`?t?.trim().endsWith(`/`)?e:0:ao(e);function so(e){let t=to(e);return ro(t)(t.values.map((e,n)=>oo(e,t.split[n])))}var co={test:Ja,parse:no,createTransformer:io,getAnimatableNone:so};function lo(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function uo({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=lo(s,r,e+1/3),a=lo(s,r,e),o=lo(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function fo(e,t){return n=>n>0?t:e}var B=(e,t,n)=>e+(t-e)*n,V=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},H=[Ra,Ia,Ga],po=e=>H.find(t=>t.test(e));function mo(e){let t=po(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===Ga&&(n=uo(n)),n}var ho=(e,t)=>{let n=mo(e),r=mo(t);if(!n||!r)return fo(e,t);let i={...n};return e=>(i.red=V(n.red,r.red,e),i.green=V(n.green,r.green,e),i.blue=V(n.blue,r.blue,e),i.alpha=B(n.alpha,r.alpha,e),Ia.transform(i))},go=new Set([`none`,`hidden`]);function _o(e,t){return go.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function vo(e,t){return n=>B(e,t,n)}function yo(e){return typeof e==`number`?vo:typeof e==`string`?Sa(e)?fo:Ka.test(e)?ho:Co:Array.isArray(e)?bo:typeof e==`object`?Ka.test(e)?ho:xo:fo}function bo(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>yo(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function xo(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=yo(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function So(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]],s=e.values[o]??0;n[i]=s,r[a]++}return n}var Co=(e,t)=>{let n=co.createTransformer(t),r=to(e),i=to(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?go.has(e)&&!i.values.length||go.has(t)&&!r.values.length?_o(e,t):F(bo(So(r,i),i.values),n):(`${e}${t}`,fo(e,t))};function wo(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?B(e,t,n):yo(e)(e,t)}var To=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>R.update(t,e),stop:()=>pa(t),now:()=>ma.isProcessing?ma.timestamp:va.now()}},Eo=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},Do=2e4;function Oo(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function ko(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(Oo(r),Do);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:zi(i)}}var U={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Ao(e,t){return e*Math.sqrt(1-t*t)}var jo=12;function Mo(e,t,n){let r=n;for(let n=1;n<jo;n++)r-=e(r)/t(r);return r}var No=.001;function Po({duration:e=U.duration,bounce:t=U.bounce,velocity:n=U.velocity,mass:r=U.mass}){let i,a;U.maxDuration;let o=1-t;o=Mi(U.minDamping,U.maxDamping,o),e=Mi(U.minDuration,U.maxDuration,zi(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=Ao(t,o),c=Math.exp(-i);return No-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=Ao(t**2,o);return(-i(t)+No>0?-1:1)*((a-s)*c)/l}):(i=t=>-.001+Math.exp(-t*e)*((t-n)*e+1),a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=Mo(i,a,s);if(e=L(e),isNaN(c))return{stiffness:U.stiffness,damping:U.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var Fo=[`duration`,`bounce`],Io=[`stiffness`,`damping`,`mass`];function Lo(e,t){return t.some(t=>e[t]!==void 0)}function Ro(e){let t={velocity:U.velocity,stiffness:U.stiffness,damping:U.damping,mass:U.mass,isResolvedFromDuration:!1,...e};if(!Lo(e,Io)&&Lo(e,Fo))if(t.velocity=0,e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*Mi(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:U.mass,stiffness:i,damping:a}}else{let n=Po({...e,velocity:0});t={...t,...n,mass:U.mass},t.isResolvedFromDuration=!0}return t}function zo(e=U.visualDuration,t=U.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=Ro({...n,velocity:-zi(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=zi(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?U.restSpeed.granular:U.restSpeed.default,i||=v?U.restDelta.granular:U.restDelta.default;let y,b,x,S,C,w;if(h<1)x=Ao(_,h),S=(m+h*_*g)/x,y=e=>{let t=Math.exp(-h*_*e);return o-t*(S*Math.sin(x*e)+g*Math.cos(x*e))},C=h*_*S+g*x,w=h*_*g-S*x,b=e=>Math.exp(-h*_*e)*(C*Math.sin(x*e)+w*Math.cos(x*e));else if(h===1){y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);let e=m+_*g;b=t=>Math.exp(-_*t)*(_*e*t-m)}else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e};let t=(m+h*_*g)/e,n=h*_*t-g*e,r=h*_*g-t*e;b=t=>{let i=Math.exp(-h*_*t),a=Math.min(e*t,300);return i*(n*Math.sinh(a)+r*Math.cosh(a))}}let ee={calculatedDuration:p&&d||null,velocity:e=>L(b(e)),next:e=>{if(!p&&h<1){let t=Math.exp(-h*_*e),n=Math.sin(x*e),a=Math.cos(x*e),c=o-t*(S*n+g*a),l=L(t*(C*n+w*a));return s.done=Math.abs(l)<=r&&Math.abs(o-c)<=i,s.value=s.done?o:c,s}let t=y(e);if(p)s.done=e>=d;else{let n=L(b(e));s.done=Math.abs(n)<=r&&Math.abs(o-t)<=i}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(Oo(ee),Do),t=Eo(t=>ee.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return ee}zo.applyToOptions=e=>{let t=ko(e,100,zo);return e.ease=t.ease,e.duration=L(t.duration),e.type=`keyframes`,e};var Bo=5;function Vo(e,t,n){let r=Math.max(t-Bo,0);return Bi(n-e(r),t-r)}function Ho({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=zo({keyframes:[f.value,m(f.value)],velocity:Vo(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function Uo(e,t,n){let r=[],i=n||Ni.mix||wo,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=F(Array.isArray(t)?t[n]||P:t,a)),r.push(a)}return r}function Wo(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=Uo(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=I(e[r],e[r+1],n);return s[r](i)};return n?t=>l(Mi(e[0],e[a-1],t)):l}function Go(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=I(0,t,r);e.push(B(n,1,i))}}function Ko(e){let t=[0];return Go(t,e.length-1),t}function qo(e,t){return e.map(e=>e*t)}function Jo(e,t){return e.map(()=>t||ra).splice(0,e.length-1)}function Yo({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=ia(r)?r.map(ca):ca(r),a={done:!1,value:t[0]},o=Wo(qo(n&&n.length===t.length?n:Ko(t),e),t,{ease:Array.isArray(i)?i:Jo(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var Xo=e=>e!==null;function Zo(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(Xo),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var Qo={decay:Ho,inertia:Ho,tween:Yo,keyframes:Yo,spring:zo};function $o(e){typeof e.type==`string`&&(e.type=Qo[e.type])}var es=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},ts=e=>e/100,ns=class extends es{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==va.now()&&this.tick(va.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;$o(e);let{type:t=Yo,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||Yo;s!==Yo&&typeof o[0]!=`number`&&(this.mixKeyframes=F(ts,wo(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=Oo(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.currentTime=this.holdTime===null?t:this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=Mi(0,1,n)*o}let b;_?(this.delayState.value=l[0],b=this.delayState):b=y.next(v),i&&!_&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==Ho&&(b.value=Zo(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return zi(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+zi(e)}get time(){return zi(this.currentTime)}set time(e){e=L(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state=`paused`,this.holdTime=e,this.tick(e))}getGeneratorVelocity(){let e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);let t=this.generator.next(e).value;return Vo(e=>this.generator.next(e).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(va.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=zi(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=To,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(va.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function rs(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var is=e=>e*180/Math.PI,as=e=>ss(is(Math.atan2(e[1],e[0]))),os={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:as,rotateZ:as,skewX:e=>is(Math.atan(e[1])),skewY:e=>is(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},ss=e=>(e%=360,e<0&&(e+=360),e),cs=as,ls=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),us=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),ds={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:ls,scaleY:us,scale:e=>(ls(e)+us(e))/2,rotateX:e=>ss(is(Math.atan2(e[6],e[5]))),rotateY:e=>ss(is(Math.atan2(-e[2],e[0]))),rotateZ:cs,rotate:cs,skewX:e=>is(Math.atan(e[4])),skewY:e=>is(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function fs(e){return+!!e.includes(`scale`)}function ps(e,t){if(!e||e===`none`)return fs(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=ds,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=os,i=t}if(!i)return fs(t);let a=r[t],o=i[1].split(`,`).map(hs);return typeof a==`function`?a(o):o[a]}var ms=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return ps(n,t)};function hs(e){return parseFloat(e.trim())}var gs=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],_s=new Set([...gs,`pathRotation`]),vs=e=>e===Ta||e===z,ys=new Set([`x`,`y`,`z`]),bs=gs.filter(e=>!ys.has(e));function xs(e){let t=[];return bs.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(+!!n.startsWith(`scale`)))}),t}var Ss={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>ps(t,`x`),y:(e,{transform:t})=>ps(t,`y`)};Ss.translateX=Ss.x,Ss.translateY=Ss.y;var Cs=new Set,ws=!1,Ts=!1,Es=!1;function Ds(){if(Ts){let e=Array.from(Cs).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=xs(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}Ts=!1,ws=!1,Cs.forEach(e=>e.complete(Es)),Cs.clear()}function Os(){Cs.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Ts=!0)})}function ks(){Es=!0,Os(),Ds(),Es=!1}var As=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(Cs.add(this),ws||(ws=!0,R.read(Os),R.resolveKeyframes(Ds))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}rs(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Cs.delete(this)}cancel(){this.state===`scheduled`&&(Cs.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},js=e=>e.startsWith(`--`);function Ms(e,t,n){js(t)?e.style.setProperty(t,n):e.style[t]=n}var Ns={};function Ps(e,t){let n=Li(e);return()=>Ns[t]??n()}var Fs=Ps(()=>window.ScrollTimeline!==void 0,`scrollTimeline`),Is=Ps(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),Ls=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Rs={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:Ls([0,.65,.55,1]),circOut:Ls([.55,0,1,.45]),backIn:Ls([.31,.01,.66,-.59]),backOut:Ls([.33,1.53,.69,.99])};function zs(e,t){if(e)return typeof e==`function`?Is()?Eo(e,t):`ease-out`:aa(e)?Ls(e):Array.isArray(e)?e.map(e=>zs(e,t)||Rs.easeOut):Rs[e]}function Bs(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=zs(s,i);Array.isArray(d)&&(u.easing=d);let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};return l&&(f.pseudoElement=l),e.animate(u,f)}function Vs(e){return typeof e==`function`&&`applyToOptions`in e}function Hs({type:e,...t}){return Vs(e)&&Is()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var Us=class extends es{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=Hs(e);this.animation=Bs(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=Zo(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(e),Ms(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e!==`idle`&&e!==`finished`&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return zi(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+zi(e)}get time(){return zi(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=L(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&Fs()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),P):r(this)}},Ws={anticipate:Zi,backInOut:Xi,circInOut:ea};function Gs(e){return e in Ws}function Ks(e){typeof e.ease==`string`&&Gs(e.ease)&&(e.ease=Ws[e.ease])}var qs=10,Js=class extends Us{constructor(e){Ks(e),$o(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new ns({...a,autoplay:!1}),s=Math.max(qs,va.now()-this.startTime),c=Mi(0,qs,s-qs),l=o.sample(s).value,{name:u}=this.options;i&&u&&Ms(i,u,l),t.setWithVelocity(o.sample(Math.max(0,s-c)).value,l,c),o.stop()}},Ys=(e,t)=>t!==`zIndex`&&!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(co.test(e)||e===`0`)&&!e.startsWith(`url(`));function Xs(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function Zs(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=Ys(i,t),s=Ys(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:Xs(e)||(n===`spring`||Vs(n))&&r}function Qs(e){e.duration=0,e.type=`keyframes`}var $s=new Set([`opacity`,`clipPath`,`filter`,`transform`,`backgroundColor`]),ec=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function tc(e){for(let t=0;t<e.length;t++)if(typeof e[t]==`string`&&ec.test(e[t]))return!0;return!1}var nc=new Set([`color`,`backgroundColor`,`outlineColor`,`fill`,`stroke`,`borderColor`,`borderTopColor`,`borderRightColor`,`borderBottomColor`,`borderLeftColor`]),rc=Li(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function ic(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o,keyframes:s}=e,c=t?.owner?.current;if(!(c instanceof HTMLElement)&&!(c instanceof SVGElement))return!1;let{onUpdate:l,transformTemplate:u}=t.owner.getProps();return rc()&&n&&($s.has(n)||nc.has(n)&&tc(s))&&(n!==`transform`||!u)&&!l&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var ac=40,oc=class extends es{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=va.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u},f=l?.KeyframeResolver||As;this.keyframeResolver=new f(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=va.now();let u=!0;Zs(e,i,a,o)||(u=!1,(Ni.instantAnimations||!s)&&l?.(Zo(e,n,t)),e[0]=e[e.length-1],Qs(n),n.repeat=0);let d={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>ac?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},f=u&&!c&&ic(d),p=d.motionValue?.owner?.current,m;if(f)try{m=new Js({...d,element:p})}catch{m=new ns(d)}else m=new ns(d);m.finished.then(()=>{this.notifyFinished()}).catch(P),this.pendingTimeline&&=(this.stopTimeline=m.attachTimeline(this.pendingTimeline),void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),ks()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function sc(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var cc=30,lc=e=>!isNaN(parseFloat(e)),uc={current:void 0},dc=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=va.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=va.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=lc(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new Ri);let n=this.events[e].add(t);return e===`change`?()=>{n(),R.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return uc.current&&uc.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=va.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>cc)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,cc);return Bi(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function fc(e,t){return new dc(e,t)}function pc(e,t){if(e?.inherit&&t){let{inherit:n,...r}=e;return{...t,...r}}return e}function mc(e,t){let n=e?.[t]??e?.default??e;return n===e?n:pc(n,e)}var hc={type:`spring`,stiffness:500,damping:25,restSpeed:10},gc=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),_c={type:`keyframes`,duration:.8},vc={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},yc=(e,{keyframes:t})=>t.length>2?_c:_s.has(e)?e.startsWith(`scale`)?gc(t[1]):hc:vc,bc=new Set([`when`,`delay`,`delayChildren`,`staggerChildren`,`staggerDirection`,`repeat`,`repeatType`,`repeatDelay`,`from`,`elapsed`]);function xc(e){for(let t in e)if(!bc.has(t))return!0;return!1}var Sc=(e,t,n,r={},i,a)=>o=>{let s=mc(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=L(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};xc(s)||Object.assign(u,yc(e,u)),u.duration&&=L(u.duration),u.repeatDelay&&=L(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(Qs(u),u.delay===0&&(d=!0)),(Ni.instantAnimations||Ni.skipAnimations||i?.shouldSkipAnimations||s.skipAnimations)&&(d=!0,Qs(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=Zo(u.keyframes,s);if(e!==void 0){R.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new ns(u):new oc(u)},Cc=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function wc(e){let t=Cc.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function Tc(e,t,n=1){`${e}`;let[r,i]=wc(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return Pi(e)?parseFloat(e):e}return Sa(i)?Tc(i,t,n+1):i}function Ec(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function Dc(e,t,n,r){if(typeof t==`function`){let[i,a]=Ec(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=Ec(r);t=t(n===void 0?e.custom:n,i,a)}return t}function Oc(e,t,n){let r=e.getProps();return Dc(r,t,n===void 0?r.custom:n,e)}var kc=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...gs]),Ac=e=>Array.isArray(e);function jc(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,fc(n))}function Mc(e){return Ac(e)?e[e.length-1]||0:e}function Nc(e,t){let{transitionEnd:n={},transition:r={},...i}=Oc(e,t)||{};i={...i,...n};for(let t in i)jc(e,t,Mc(i[t]))}var Pc=e=>!!(e&&e.getVelocity);function Fc(e){return!!(Pc(e)&&e.add)}function Ic(e,t){let n=e.getValue(`willChange`);if(Fc(n))return n.add(t);if(!n&&Ni.WillChange){let n=new Ni.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function Lc(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var W=`data-`+Lc(`framerAppearId`);function Rc(e){return e.props[W]}function zc({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Bc(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:o,...s}=t,c=e.getDefaultTransition();a=a?pc(a,c):c;let l=a?.reduceMotion,u=a?.skipAnimations;r&&(a=r);let d=[],f=i&&e.animationState&&e.animationState.getState()[i],p=a?.path;p&&p.animateVisualElement(e,s,a,n,d);for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||f&&zc(f,t))continue;let o={delay:n,...mc(a||{},t)};u&&(o.skipAnimations=!0);let c=r.get();if(c!==void 0&&!r.isAnimating()&&!Array.isArray(i)&&i===c&&!o.velocity){R.update(()=>r.set(i));continue}let p=!1;if(window.MotionHandoffAnimation){let n=Rc(e);if(n){let e=window.MotionHandoffAnimation(n,t,R);e!==null&&(o.startTime=e,p=!0)}}Ic(e,t);let m=l??e.shouldReduceMotion;r.start(Sc(t,r,i,m&&kc.has(t)?{type:!1}:o,e,p));let h=r.animation;h&&d.push(h)}if(o){let t=()=>R.update(()=>{o&&Nc(e,o)});d.length?Promise.all(d).then(t):t()}return d}function Vc(e,t,n={}){let r=Oc(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(Bc(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return Hc(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}return Promise.all([a(),o(n.delay)])}function Hc(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(Vc(c,t,{...o,delay:n+(typeof r==`function`?0:r)+sc(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function Uc(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>Vc(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=Vc(e,t,n);else{let i=typeof t==`function`?Oc(e,t,n.custom):t;r=Promise.all(Bc(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var Wc={test:e=>e===`auto`,parse:e=>e},Gc=e=>t=>t.test(e),Kc=[Ta,z,Va,Ba,Ua,Ha,Wc],qc=e=>Kc.find(Gc(e));function Jc(e){return typeof e==`number`?e===0:e===null||e===`none`||e===`0`||Ii(e)}var Yc=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function Xc(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(ka)||[];if(!r)return e;let i=n.replace(r,``),a=+!!Yc.has(t);return r!==n&&(a*=100),t+`(`+a+i+`)`}var Zc=/\b([a-z-]*)\(.*?\)/gu,Qc={...co,getAnimatableNone:e=>{let t=e.match(Zc);return t?t.map(Xc).join(` `):e}},$c={...co,getAnimatableNone:e=>{let t=co.parse(e);return co.createTransformer(e)(t.map(e=>typeof e==`number`?0:typeof e==`object`?{...e,alpha:1}:e))}},el={...Ta,transform:Math.round},tl={borderWidth:z,borderTopWidth:z,borderRightWidth:z,borderBottomWidth:z,borderLeftWidth:z,borderRadius:z,borderTopLeftRadius:z,borderTopRightRadius:z,borderBottomRightRadius:z,borderBottomLeftRadius:z,width:z,maxWidth:z,height:z,maxHeight:z,top:z,right:z,bottom:z,left:z,inset:z,insetBlock:z,insetBlockStart:z,insetBlockEnd:z,insetInline:z,insetInlineStart:z,insetInlineEnd:z,padding:z,paddingTop:z,paddingRight:z,paddingBottom:z,paddingLeft:z,paddingBlock:z,paddingBlockStart:z,paddingBlockEnd:z,paddingInline:z,paddingInlineStart:z,paddingInlineEnd:z,margin:z,marginTop:z,marginRight:z,marginBottom:z,marginLeft:z,marginBlock:z,marginBlockStart:z,marginBlockEnd:z,marginInline:z,marginInlineStart:z,marginInlineEnd:z,fontSize:z,backgroundPositionX:z,backgroundPositionY:z,rotate:Ba,pathRotation:Ba,rotateX:Ba,rotateY:Ba,rotateZ:Ba,scale:Da,scaleX:Da,scaleY:Da,scaleZ:Da,skew:Ba,skewX:Ba,skewY:Ba,distance:z,translateX:z,translateY:z,translateZ:z,x:z,y:z,z,perspective:z,transformPerspective:z,opacity:Ea,originX:Wa,originY:Wa,originZ:z,zIndex:el,fillOpacity:Ea,strokeOpacity:Ea,numOctaves:el},nl={...tl,color:Ka,backgroundColor:Ka,outlineColor:Ka,fill:Ka,stroke:Ka,borderColor:Ka,borderTopColor:Ka,borderRightColor:Ka,borderBottomColor:Ka,borderLeftColor:Ka,filter:Qc,WebkitFilter:Qc,mask:$c,WebkitMask:$c},rl=e=>nl[e],il=new Set([Qc,$c]);function al(e,t){let n=rl(e);return il.has(n)||(n=co),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var ol=new Set([`auto`,`none`,`0`]);function sl(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!ol.has(t)&&to(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=al(n,i)}var cl=class extends As{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),Sa(r))){let i=Tc(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!kc.has(n)||e.length!==2)return;let[r,i]=e,a=qc(r),o=qc(i);if(wa(r)!==wa(i)&&Ss[n]){this.needsMeasurement=!0;return}if(a!==o)if(vs(a)&&vs(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else Ss[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||Jc(e[t]))&&n.push(t);n.length&&sl(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ss[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=Ss[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}},ll=[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomRightRadius`,`borderBottomLeftRadius`];function ul(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var dl=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function fl(e){return Fi(e)&&`offsetHeight`in e&&!(`ownerSVGElement`in e)}var{schedule:pl,cancel:ml}=fa(queueMicrotask,!1),hl={x:!1,y:!1};function gl(){return hl.x||hl.y}function _l(e){return e===`x`||e===`y`?hl[e]?null:(hl[e]=!0,()=>{hl[e]=!1}):hl.x||hl.y?null:(hl.x=hl.y=!0,()=>{hl.x=hl.y=!1})}function vl(e,t){let n=ul(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function yl(e){return!(e.pointerType===`touch`||gl())}function bl(e,t,n={}){let[r,i,a]=vl(e,n);return r.forEach(e=>{let n=!1,r=!1,a,o=()=>{e.removeEventListener(`pointerleave`,u)},s=e=>{a&&=(a(e),void 0),o()},c=e=>{n=!1,window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),r&&(r=!1,s(e))},l=()=>{n=!0,window.addEventListener(`pointerup`,c,i),window.addEventListener(`pointercancel`,c,i)},u=e=>{if(e.pointerType!==`touch`){if(n){r=!0;return}s(e)}};e.addEventListener(`pointerenter`,n=>{if(!yl(n))return;r=!1;let o=t(e,n);typeof o==`function`&&(a=o,e.addEventListener(`pointerleave`,u,i))},i),e.addEventListener(`pointerdown`,l,i)}),a}var xl=(e,t)=>t?e===t||xl(e,t.parentElement):!1,Sl=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,Cl=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function wl(e){return Cl.has(e.tagName)||e.isContentEditable===!0}var Tl=new Set([`INPUT`,`SELECT`,`TEXTAREA`]);function El(e){return Tl.has(e.tagName)||e.isContentEditable===!0}var Dl=new WeakSet;function Ol(e){return t=>{t.key===`Enter`&&e(t)}}function kl(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var Al=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=Ol(()=>{if(Dl.has(n))return;kl(n,`down`);let e=Ol(()=>{kl(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>kl(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function jl(e){return Sl(e)&&!gl()}var Ml=new WeakSet;function Nl(e,t,n={}){let[r,i,a]=vl(e,n),o=e=>{let r=e.currentTarget;if(!jl(e)||Ml.has(e))return;Dl.add(r),n.stopPropagation&&Ml.add(e);let a=t(r,e),o={...i,capture:!0},s=(e,t)=>{window.removeEventListener(`pointerup`,c,o),window.removeEventListener(`pointercancel`,l,o),Dl.has(r)&&Dl.delete(r),jl(e)&&typeof a==`function`&&a(e,{success:t})},c=e=>{s(e,r===window||r===document||n.useGlobalTarget||xl(r,e.target))},l=e=>{s(e,!1)};window.addEventListener(`pointerup`,c,o),window.addEventListener(`pointercancel`,l,o)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),fl(e)&&(e.addEventListener(`focus`,e=>Al(e,i)),!wl(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function Pl(e){return Fi(e)&&`ownerSVGElement`in e}var Fl=new WeakMap,Il,Ll=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+`Size`]:Pl(r)&&`getBBox`in r?r.getBBox()[t]:r[n],Rl=Ll(`inline`,`width`,`offsetWidth`),zl=Ll(`block`,`height`,`offsetHeight`);function G({target:e,borderBoxSize:t}){Fl.get(e)?.forEach(n=>{n(e,{get width(){return Rl(e,t)},get height(){return zl(e,t)}})})}function K(e){e.forEach(G)}function q(){typeof ResizeObserver>`u`||(Il=new ResizeObserver(K))}function J(e,t){Il||q();let n=ul(e);return n.forEach(e=>{let n=Fl.get(e);n||(n=new Set,Fl.set(e,n)),n.add(t),Il?.observe(e)}),()=>{n.forEach(e=>{let n=Fl.get(e);n?.delete(t),n?.size||Il?.unobserve(e)})}}var Y=new Set,Bl;function Vl(){Bl=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};Y.forEach(t=>t(e))},window.addEventListener(`resize`,Bl)}function Hl(e){return Y.add(e),Bl||Vl(),()=>{Y.delete(e),!Y.size&&typeof Bl==`function`&&(window.removeEventListener(`resize`,Bl),Bl=void 0)}}function Ul(e,t){return typeof e==`function`?Hl(e):J(e,t)}var Wl={value:null,addProjectionMetrics:null};function Gl(e){return Pl(e)&&e.tagName===`svg`}var Kl=[...Kc,Ka,co],ql=e=>Kl.find(Gc(e)),Jl=()=>({translate:0,scale:1,origin:0,originPoint:0}),Yl=()=>({x:Jl(),y:Jl()}),Xl=()=>({min:0,max:0}),Zl=()=>({x:Xl(),y:Xl()}),Ql=new WeakMap;function $l(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function eu(e){return typeof e==`string`||Array.isArray(e)}var tu=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],nu=[`initial`,...tu];function ru(e){return $l(e.animate)||nu.some(t=>eu(e[t]))}function iu(e){return!!(ru(e)||e.variants)}function au(e,t,n){for(let r in t){let i=t[r],a=n[r];if(Pc(i))e.addValue(r,i);else if(Pc(a))e.addValue(r,fc(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,fc(t===void 0?i:t,{owner:e}))}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var ou={current:null},su={current:!1},cu=typeof window<`u`;function lu(){if(su.current=!0,cu)if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>ou.current=e.matches;e.addEventListener(`change`,t),t()}else ou.current=!1}var uu=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],du={};function fu(e){du=e}function pu(){return du}var mu=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=As,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=va.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,R.render(this.render,!1,!0))};let{latestValues:c,renderState:l}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=ru(t),this.isVariantNode=iu(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:u,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];c[e]!==void 0&&Pc(t)&&t.set(c[e])}}mount(e){if(this.hasBeenMounted)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];this.current=e,Ql.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(su.current||lu(),this.shouldReduceMotion=ou.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),pa(this.notifyUpdate),pa(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&$s.has(e)&&this.current instanceof HTMLElement){let{factory:n,keyframes:r,times:i,ease:a,duration:o}=t.accelerate,s=new Us({element:this.current,name:e,keyframes:r,times:i,ease:a,duration:L(o)}),c=n(s);this.valueSubscriptions.set(e,()=>{c(),s.cancel()});return}let n=_s.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&R.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in du){let t=du[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Zl()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<uu.length;t++){let n=uu[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=au(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=fc(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(Pi(n)||Ii(n))?n=parseFloat(n):!ql(n)&&co.test(t)&&(n=al(e,t)),this.setBaseTarget(e,Pc(n)?n.get():n)),Pc(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=Dc(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!Pc(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Ri),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){pl.render(this.render)}},hu=class extends mu{constructor(){super(...arguments),this.KeyframeResolver=cl}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;Pc(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},gu=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function _u({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function vu({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function yu(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function bu(e){return e===void 0||e===1}function xu({scale:e,scaleX:t,scaleY:n}){return!bu(e)||!bu(t)||!bu(n)}function Su(e){return xu(e)||Cu(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Cu(e){return wu(e.x)||wu(e.y)}function wu(e){return e&&e!==`0%`}function Tu(e,t,n){return n+t*(e-n)}function Eu(e,t,n,r,i){return i!==void 0&&(e=Tu(e,i,r)),Tu(e,n,r)+t}function Du(e,t=0,n=1,r,i){e.min=Eu(e.min,t,n,r,i),e.max=Eu(e.max,t,n,r,i)}function Ou(e,{x:t,y:n}){Du(e.x,t.translate,t.scale,t.originPoint),Du(e.y,n.translate,n.scale,n.originPoint)}var ku=.999999999999,Au=1.0000000000001;function ju(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(Mu(e.x,-a.scroll.offset.x),Mu(e.y,-a.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Ou(e,o)),r&&Su(a.latestValues)&&Fu(e,a.latestValues,a.layout?.layoutBox))}t.x<Au&&t.x>ku&&(t.x=1),t.y<Au&&t.y>ku&&(t.y=1)}function Mu(e,t){e.min+=t,e.max+=t}function Nu(e,t,n,r,i=.5){Du(e,t,n,B(e.min,e.max,i),r)}function Pu(e,t){return typeof e==`string`?parseFloat(e)/100*(t.max-t.min):e}function Fu(e,t,n){let r=n??e;Nu(e.x,Pu(t.x,r.x),t.scaleX,t.scale,t.originX),Nu(e.y,Pu(t.y,r.y),t.scaleY,t.scale,t.originY)}function Iu(e,t){return _u(yu(e.getBoundingClientRect(),t))}function Lu(e,t,n){let r=Iu(e,n),{scroll:i}=t;return i&&(Mu(r.x,i.offset.x),Mu(r.y,i.offset.y)),r}var Ru={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},zu=gs.length;function Bu(e,t,n){let r=``,i=!0;for(let a=0;a<zu;a++){let o=gs[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===+!!o.startsWith(`scale`);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=dl(s,tl[o]);if(!c){i=!1;let t=Ru[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}let a=e.pathRotation;return a&&(i=!1,r+=`rotate(${dl(a,tl.pathRotation)}) `),r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function Vu(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(_s.has(e)){o=!0;continue}if(ba(e)){i[e]=n;continue}{let t=dl(n,tl[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=Bu(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function Hu(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function Uu(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var Wu={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`)if(z.test(e))e=parseFloat(e);else return e;return`${Uu(e,t.target.x)}% ${Uu(e,t.target.y)}%`}},Gu={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=co.parse(e);if(i.length>5)return r;let a=co.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=B(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},X={borderRadius:{...Wu,applyTo:[...ll]},borderTopLeftRadius:Wu,borderTopRightRadius:Wu,borderBottomLeftRadius:Wu,borderBottomRightRadius:Wu,boxShadow:Gu};function Ku(e,{layout:t,layoutId:n}){return _s.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!X[e]||e===`opacity`)}function qu(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(Pc(r[t])||i&&Pc(i[t])||Ku(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function Ju(e){return window.getComputedStyle(e)}var Yu=class extends hu{constructor(){super(...arguments),this.type=`html`,this.renderInstance=Hu}mount(e){e.style,super.mount(e)}readValueFromInstance(e,t){if(_s.has(t))return this.projection?.isProjecting?fs(t):ms(e,t);{let n=Ju(e),r=(ba(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Iu(e,t)}build(e,t,n){Vu(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return qu(e,t,n)}},Xu={offset:`stroke-dashoffset`,array:`stroke-dasharray`},Zu={offset:`strokeDashoffset`,array:`strokeDasharray`};function Qu(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?Xu:Zu;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var $u=[`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function ed(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(Vu(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox);for(let e of $u)d[e]!==void 0&&(f[e]=d[e],delete d[e]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&Qu(d,i,a,o,!1)}var td=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),nd=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function rd(e,t,n,r){Hu(e,t,void 0,r);for(let n in t.attrs)e.setAttribute(td.has(n)?n:Lc(n),t.attrs[n])}function id(e,t,n){let r=qu(e,t,n);for(let n in e)if(Pc(e[n])||Pc(t[n])){let t=gs.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var ad=class extends hu{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=Zl}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(_s.has(t)){let e=rl(t);return e&&e.default||0}return t=td.has(t)?t:Lc(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return id(e,t,n)}build(e,t,n){ed(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){rd(e,t,n,r)}mount(e){this.isSVGTag=nd(e.tagName),super.mount(e)}},od=nu.length;function sd(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&sd(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<od;n++){let r=nu[n],i=e.props[r];(eu(i)||i===!1)&&(t[r]=i)}return t}function cd(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var ld=[...tu].reverse(),ud=tu.length;function dd(e){return t=>Promise.all(t.map(({animation:t,options:n})=>Uc(e,t,n)))}function fd(e){let t=dd(e),n=hd(),r=!0,i=!1,a=t=>(n,r)=>{let i=Oc(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function o(n){t=n(e)}function s(o){let{props:s}=e,c=sd(e.parent)||{},l=[],u=new Set,d={},f=1/0;for(let t=0;t<ud;t++){let p=ld[t],m=n[p],h=s[p]===void 0?c[p]:s[p],g=eu(h),_=p===o?m.isActive:null;_===!1&&(f=t);let v=h===c[p]&&h!==s[p]&&g;if(v&&(r||i)&&e.manuallyAnimateOnMount&&(v=!1),m.protectedKeys={...d},!m.isActive&&_===null||!h&&!m.prevProp||$l(h)||typeof h==`boolean`)continue;if(p===`exit`&&m.isActive&&_!==!0){m.prevResolvedValues&&(d={...d,...m.prevResolvedValues});continue}let y=pd(m.prevProp,h),b=y||p===o&&m.isActive&&!v&&g||t>f&&g,x=!1,S=Array.isArray(h)?h:[h],C=S.reduce(a(p),{});_===!1&&(C={});let{prevResolvedValues:w={}}=m,ee={...w,...C},te=t=>{b=!0,u.has(t)&&(x=!0,u.delete(t)),m.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in ee){let t=C[e],n=w[e];if(d.hasOwnProperty(e))continue;let r=!1;r=Ac(t)&&Ac(n)?!cd(t,n)||y:t!==n,r?t==null?u.add(e):te(e):t!==void 0&&u.has(e)?te(e):m.protectedKeys[e]=!0}m.prevProp=h,m.prevResolvedValues=C,m.isActive&&(d={...d,...C}),(r||i)&&e.blockInitialAnimation&&(b=!1);let ne=v&&y;b&&(!ne||x)&&l.push(...S.map(t=>{let n={type:p};if(typeof t==`string`&&(r||i)&&!ne&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=Oc(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=sc(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(u.size){let t={};if(typeof s.initial!=`boolean`){let n=Oc(e,Array.isArray(s.initial)?s.initial[0]:s.initial);n&&n.transition&&(t.transition=n.transition)}u.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),l.push({animation:t})}let p=!!l.length;return r&&(s.initial===!1||s.initial===s.animate)&&!e.manuallyAnimateOnMount&&(p=!1),r=!1,i=!1,p?t(l):Promise.resolve()}function c(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=s(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:s,setActive:c,setAnimateFunction:o,getState:()=>n,reset:()=>{n=hd(),i=!0}}}function pd(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!cd(t,e):!1}function md(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function hd(){return{animate:md(!0),whileInView:md(),whileHover:md(),whileTap:md(),whileDrag:md(),whileFocus:md(),exit:md()}}function gd(e,t){e.min=t.min,e.max=t.max}function _d(e,t){gd(e.x,t.x),gd(e.y,t.y)}function vd(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var yd=.9999,bd=1.0001,Z=-.01,xd=.01;function Sd(e){return e.max-e.min}function Cd(e,t,n){return Math.abs(e-t)<=n}function wd(e,t,n,r=.5){e.origin=r,e.originPoint=B(t.min,t.max,e.origin),e.scale=Sd(n)/Sd(t),e.translate=B(n.min,n.max,e.origin)-e.originPoint,(e.scale>=yd&&e.scale<=bd||isNaN(e.scale))&&(e.scale=1),(e.translate>=Z&&e.translate<=xd||isNaN(e.translate))&&(e.translate=0)}function Td(e,t,n,r){wd(e.x,t.x,n.x,r?r.originX:void 0),wd(e.y,t.y,n.y,r?r.originY:void 0)}function Ed(e,t,n,r=0){e.min=(r?B(n.min,n.max,r):n.min)+t.min,e.max=e.min+Sd(t)}function Dd(e,t,n,r){Ed(e.x,t.x,n.x,r?.x),Ed(e.y,t.y,n.y,r?.y)}function Od(e,t,n,r=0){let i=r?B(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+Sd(t)}function kd(e,t,n,r){Od(e.x,t.x,n.x,r?.x),Od(e.y,t.y,n.y,r?.y)}function Ad(e,t,n,r,i){return e-=t,e=Tu(e,1/n,r),i!==void 0&&(e=Tu(e,1/i,r)),e}function jd(e,t=0,n=1,r=.5,i,a=e,o=e){if(Va.test(t)&&(t=parseFloat(t),t=B(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=B(a.min,a.max,r);e===a&&(s-=t),e.min=Ad(e.min,t,n,s,i),e.max=Ad(e.max,t,n,s,i)}function Md(e,t,[n,r,i],a,o){jd(e,t[n],t[r],t[i],t.scale,a,o)}var Nd=[`x`,`scaleX`,`originX`],Q=[`y`,`scaleY`,`originY`];function Pd(e,t,n,r){Md(e.x,t,Nd,n?n.x:void 0,r?r.x:void 0),Md(e.y,t,Q,n?n.y:void 0,r?r.y:void 0)}function Fd(e){return e.translate===0&&e.scale===1}function Id(e){return Fd(e.x)&&Fd(e.y)}function Ld(e,t){return e.min===t.min&&e.max===t.max}function Rd(e,t){return Ld(e.x,t.x)&&Ld(e.y,t.y)}function zd(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Bd(e,t){return zd(e.x,t.x)&&zd(e.y,t.y)}function Vd(e){return Sd(e.x)/Sd(e.y)}function Hd(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function Ud(e){return[e(`x`),e(`y`)]}function Wd(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,pathRotation:i,rotateX:a,rotateY:o,skewX:s,skewY:c}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotate(${i}deg) `),a&&(r+=`rotateX(${a}deg) `),o&&(r+=`rotateY(${o}deg) `),s&&(r+=`skewX(${s}deg) `),c&&(r+=`skewY(${c}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var Gd=ll.length,Kd=e=>typeof e==`string`?parseFloat(e):e,qd=e=>typeof e==`number`||z.test(e);function Jd(e,t,n,r,i,a){i?(e.opacity=B(0,n.opacity??1,Xd(r)),e.opacityExit=B(t.opacity??1,0,Zd(r))):a&&(e.opacity=B(t.opacity??1,n.opacity??1,r));for(let i=0;i<Gd;i++){let a=ll[i],o=Yd(t,a),s=Yd(n,a);(o!==void 0||s!==void 0)&&(o||=0,s||=0,o===0||s===0||qd(o)===qd(s)?(e[a]=Math.max(B(Kd(o),Kd(s),r),0),(Va.test(s)||Va.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=B(t.rotate||0,n.rotate||0,r))}function Yd(e,t){return e[t]===void 0?e.borderRadius:e[t]}var Xd=Qd(0,.5,$i),Zd=Qd(.5,.95,P);function Qd(e,t,n){return r=>r<e?0:r>t?1:n(I(e,t,r))}function $d(e,t,n){let r=Pc(e)?e:fc(e);return r.start(Sc(``,r,t,n)),r.animation}function ef(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}var tf=(e,t)=>e.depth-t.depth,nf=class{constructor(){this.children=[],this.isDirty=!1}add(e){Ai(this.children,e),this.isDirty=!0}remove(e){ji(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(tf),this.isDirty=!1,this.children.forEach(e)}};function rf(e,t){let n=va.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(pa(r),e(a-t))};return R.setup(r,!0),()=>pa(r)}function af(e){return Pc(e)?e.get():e}var of=class{constructor(){this.members=[]}add(e){Ai(this.members,e);for(let t=this.members.length-1;t>=0;t--){let n=this.members[t];if(n===e||n===this.lead||n===this.prevLead)continue;let r=n.instance;(!r||r.isConnected===!1)&&!n.snapshot&&(ji(this.members,n),n.unmount())}e.scheduleRender()}remove(e){if(ji(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){let e=this.members[t];if(e.isPresent!==!1&&e.instance?.isConnected!==!1)return this.promote(e),!0}return!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.updateSnapshot(),e.scheduleRender();let{layoutDependency:r}=n.options,{layoutDependency:i}=e.options;(r===void 0||r!==i)&&(e.resumeFrom=n,t&&(n.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}},sf={hasAnimatedSinceResize:!0,hasEverUpdated:!1},cf={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},lf=[``,`X`,`Y`,`Z`],uf=1e3,df=0;function ff(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function pf(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=Rc(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,R,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&pf(r)}function mf({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=df++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Wl.value&&(cf.nodes=cf.calculatedTargetDeltas=cf.calculatedProjections=0),this.nodes.forEach(_f),this.nodes.forEach(Ef),this.nodes.forEach(Df),this.nodes.forEach(vf),Wl.addProjectionMetrics&&Wl.addProjectionMetrics(cf)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new nf)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new Ri),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=Pl(t)&&!Gl(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;R.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=rf(i,250),sf.hasAnimatedSinceResize&&(sf.hasAnimatedSinceResize=!1,this.nodes.forEach(Tf)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||Pf,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!Bd(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...mc(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l,t.path)}else t||Tf(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),pa(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Of),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&pf(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,(typeof t.latestValues.x==`string`||typeof t.latestValues.y==`string`)&&(t.isLayoutDirty=!0),t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){let e=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),e&&this.nodes.forEach(xf),this.nodes.forEach(bf);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Sf);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Cf),this.nodes.forEach(wf),this.nodes.forEach(hf),this.nodes.forEach(gf)):this.nodes.forEach(Sf),this.clearAllSnapshots();let e=va.now();ma.delta=Mi(0,1e3/60,e-ma.timestamp),ma.timestamp=e,ma.isProcessing=!0,ha.update.process(ma),ha.preRender.process(ma),ha.render.process(ma),ma.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,pl.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(yf),this.sharedNodes.forEach(kf)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,R.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){R.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Sd(this.snapshot.measuredBox.x)&&!Sd(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||=Zl(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!Id(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||Su(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),Rf(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return Zl();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Bf))){let{scroll:e}=this.root;e&&(Mu(t.x,e.offset.x),Mu(t.y,e.offset.y))}return t}removeElementScroll(e){let t=Zl();if(_d(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&_d(t,e),Mu(t.x,i.offset.x),Mu(t.y,i.offset.y))}return t}applyTransform(e,t=!1,n){let r=n||Zl();_d(r,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];!t&&n.options.layoutScroll&&n.scroll&&n!==n.root&&(Mu(r.x,-n.scroll.offset.x),Mu(r.y,-n.scroll.offset.y)),Su(n.latestValues)&&Fu(r,n.latestValues,n.layout?.layoutBox)}return Su(this.latestValues)&&Fu(r,this.latestValues,this.layout?.layoutBox),r}removeTransform(e){let t=Zl();_d(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!Su(n.latestValues))continue;let r;n.instance&&(xu(n.latestValues)&&n.updateSnapshot(),r=Zl(),_d(r,n.measurePageBox())),Pd(t,n.latestValues,n.snapshot?.layoutBox,r)}return Su(this.latestValues)&&Pd(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ma.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=ma.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Zl(),this.targetWithTransforms=Zl()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Dd(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):_d(this.target,this.layout.layoutBox),Ou(this.target,this.targetDelta)):_d(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),Wl.value&&cf.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||xu(this.parent.latestValues)||Cu(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Zl(),this.relativeTargetOrigin=Zl(),kd(this.relativeTargetOrigin,t,n,this.options.layoutAnchor||void 0),_d(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===ma.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;_d(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;ju(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=Zl());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(vd(this.prevProjectionDelta.x,this.projectionDelta.x),vd(this.prevProjectionDelta.y,this.projectionDelta.y)),Td(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!Hd(this.projectionDelta.x,this.prevProjectionDelta.x)||!Hd(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),Wl.value&&cf.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Yl(),this.projectionDelta=Yl(),this.projectionDeltaWithTransform=Yl()}setAnimationOrigin(e,t=!1,n){let r=this.snapshot,i=r?r.latestValues:{},a={...this.latestValues},o=Yl();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let s=Zl(),c=(r?r.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),u=!l||l.members.length<=1,d=!!(c&&!u&&this.options.crossfade===!0&&!this.path.some(Nf));this.animationProgress=0;let f,p=n?.interpolateProjection(e);this.mixTargetDelta=t=>{let n=t/1e3,r=p?.(n);r?(o.x.translate=r.x,o.x.scale=B(e.x.scale,1,n),o.x.origin=e.x.origin,o.x.originPoint=e.x.originPoint,o.y.translate=r.y,o.y.scale=B(e.y.scale,1,n),o.y.origin=e.y.origin,o.y.originPoint=e.y.originPoint):(Af(o.x,e.x,n),Af(o.y,e.y,n)),this.setTargetDelta(o),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(kd(s,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),Mf(this.relativeTarget,this.relativeTargetOrigin,s,n),f&&Rd(this.relativeTarget,f)&&(this.isProjectionDirty=!1),f||=Zl(),_d(f,this.relativeTarget)),c&&(this.animationValues=a,Jd(a,i,this.latestValues,n,d,u)),r&&r.rotate!==void 0&&(this.animationValues||=a,this.animationValues.pathRotation=r.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(pa(this.pendingAnimation),void 0),this.pendingAnimation=R.update(()=>{sf.hasAnimatedSinceResize=!0,this.motionValue||=fc(0),this.motionValue.jump(0,!1),this.currentAnimation=$d(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(uf),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(!(!t||!n||!r)){if(this!==e&&this.layout&&r&&zf(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||Zl();let t=Sd(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=Sd(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}_d(t,n),Fu(t,i),Td(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new of),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return!e||e.lead===this}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&ff(`z`,e,r,this.animationValues);for(let t=0;t<lf.length;t++)ff(`rotate${lf[t]}`,e,r,this.animationValues),ff(`skew${lf[t]}`,e,r,this.animationValues);e.render();for(let t in r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=af(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=af(t?.pointerEvents)||``),this.hasProjected&&!Su(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=Wd(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,e.opacity=r.animationValues?r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit;for(let t in X){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=X[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?af(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(bf),this.root.sharedNodes.clear()}}}function hf(e){e.updateLayout()}function gf(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;if(i===`size`)Ud(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=Sd(r);r.min=n[e].min,r.max=r.min+i});else if(i===`x`||i===`y`){let e=i===`x`?`y`:`x`;gd(a?t.measuredBox[e]:t.layoutBox[e],n[e])}else zf(i,t.layoutBox,n)&&Ud(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=Sd(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=Yl();Td(o,n,t.layoutBox);let s=Yl();a?Td(s,e.applyTransform(r,!0),t.measuredBox):Td(s,n,t.layoutBox);let c=!Id(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=e.options.layoutAnchor||void 0,s=Zl();kd(s,t.layoutBox,i.layoutBox,o);let c=Zl();kd(c,n,a.layoutBox,o),Bd(s,c)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=c,e.relativeTargetOrigin=s,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function _f(e){Wl.value&&cf.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function vf(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function yf(e){e.clearSnapshot()}function bf(e){e.clearMeasurements()}function xf(e){e.isLayoutDirty=!0,e.updateLayout()}function Sf(e){e.isLayoutDirty=!1}function Cf(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function wf(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function Tf(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Ef(e){e.resolveTargetDelta()}function Df(e){e.calcProjection()}function Of(e){e.resetSkewAndRotation()}function kf(e){e.removeLeadSnapshot()}function Af(e,t,n){e.translate=B(t.translate,0,n),e.scale=B(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function jf(e,t,n,r){e.min=B(t.min,n.min,r),e.max=B(t.max,n.max,r)}function Mf(e,t,n,r){jf(e.x,t.x,n.x,r),jf(e.y,t.y,n.y,r)}function Nf(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var Pf={duration:.45,ease:[.4,0,.1,1]},Ff=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),If=Ff(`applewebkit/`)&&!Ff(`chrome/`)?Math.round:P;function Lf(e){e.min=If(e.min),e.max=If(e.max)}function Rf(e){Lf(e.x),Lf(e.y)}function zf(e,t,n){return e===`position`||e===`preserve-aspect`&&!Cd(Vd(t),Vd(n),.2)}function Bf(e){return e!==e.root&&e.scroll?.wasRoot}var Vf=mf({attachResizeListener:(e,t)=>ef(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),Hf={current:void 0},Uf=mf({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Hf.current){let e=new Vf({});e.mount(window),e.setOptions({layoutScroll:!0}),Hf.current=e}return Hf.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),Wf=(0,b.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function Gf(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function Kf(...e){return t=>{let n=!1,r=e.map(e=>{let r=Gf(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():Gf(e[t],null)}}}}function qf(...e){return b.useCallback(Kf(...e),e)}var Jf=class extends b.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(fl(t)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){let e=t.offsetParent,n=fl(e)&&e.offsetWidth||0,r=fl(e)&&e.offsetHeight||0,i=getComputedStyle(t),a=this.props.sizeRef.current;a.height=parseFloat(i.height),a.width=parseFloat(i.width),a.top=t.offsetTop,a.left=t.offsetLeft,a.right=n-a.width-a.left,a.bottom=r-a.height-a.top,a.direction=i.direction}return null}componentDidUpdate(){}render(){return this.props.children}};function Yf({children:e,isPresent:t,anchorX:n,anchorY:r,root:i,pop:a}){let o=(0,b.useId)(),s=(0,b.useRef)(null),c=(0,b.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:`ltr`}),{nonce:l}=(0,b.useContext)(Wf),u=qf(s,a===!1?void 0:e.props?.ref??e?.ref);return(0,b.useInsertionEffect)(()=>{let{width:e,height:u,top:d,left:f,right:p,bottom:m,direction:h}=c.current;if(t||a===!1||!s.current||!e||!u)return;let g=h===`rtl`,_=n===`left`?g?`right: ${p}`:`left: ${f}`:g?`left: ${f}`:`right: ${p}`,v=r===`bottom`?`bottom: ${m}`:`top: ${d}`;s.current.dataset.motionPopId=o;let y=document.createElement(`style`);l&&(y.nonce=l);let b=i??document.head;return b.appendChild(y),y.sheet&&y.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${u}px !important;
            ${_}px !important;
            ${v}px !important;
          }
        `),()=>{s.current?.removeAttribute(`data-motion-pop-id`),b.contains(y)&&b.removeChild(y)}},[t]),(0,N.jsx)(Jf,{isPresent:t,childRef:s,sizeRef:c,pop:a,children:a===!1?e:b.cloneElement(e,{ref:u})})}var Xf=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:s,anchorY:c,root:l})=>{let u=Di(Zf),d=(0,b.useId)(),f=(0,b.useRef)(n),p=(0,b.useRef)(r);Oi(()=>{f.current=n,p.current=r});let m=!0,h=(0,b.useMemo)(()=>(m=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{u.set(e,!0);for(let e of u.values())if(!e)return;r&&r()},register:e=>(u.set(e,!1),()=>{u.delete(e),!f.current&&!u.size&&p.current?.()})}),[n,u,r]);return a&&m&&(h={...h}),(0,b.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[n]),b.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),e=(0,N.jsx)(Yf,{pop:o===`popLayout`,isPresent:n,anchorX:s,anchorY:c,root:l,children:e}),(0,N.jsx)(ki.Provider,{value:h,children:e})};function Zf(){return new Map}function Qf(e=!0){let t=(0,b.useContext)(ki);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,b.useId)();(0,b.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,b.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var $f=e=>e.key||``;function ep(e){let t=[];return b.Children.forEach(e,e=>{(0,b.isValidElement)(e)&&t.push(e)}),t}var tp=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a=`sync`,propagate:o=!1,anchorX:s=`left`,anchorY:c=`top`,root:l})=>{let[u,d]=Qf(o),f=(0,b.useMemo)(()=>ep(e),[e]),p=o&&!u?[]:f.map($f),m=(0,b.useRef)(!0),h=(0,b.useRef)(f),g=Di(()=>new Map),_=(0,b.useRef)(new Set),[v,y]=(0,b.useState)(f),[x,S]=(0,b.useState)(f);Oi(()=>{m.current=!1,h.current=f;for(let e=0;e<x.length;e++){let t=$f(x[e]);p.includes(t)?(g.delete(t),_.current.delete(t)):g.get(t)!==!0&&g.set(t,!1)}},[x,p.length,p.join(`-`)]);let C=[];if(f!==v){let e=[...f];for(let t=0;t<x.length;t++){let n=x[t],r=$f(n);p.includes(r)||(e.splice(t,0,n),C.push(n))}return a===`wait`&&C.length&&(e=C),S(ep(e)),y(f),null}let{forceRender:w}=(0,b.useContext)(Ei);return(0,N.jsx)(N.Fragment,{children:x.map(e=>{let v=$f(e),y=o&&!u?!1:f===x||p.includes(v);return(0,N.jsx)(Xf,{isPresent:y,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,root:l,onExitComplete:y?void 0:()=>{if(_.current.has(v))return;if(g.has(v))_.current.add(v),g.set(v,!0);else return;let e=!0;g.forEach(t=>{t||(e=!1)}),e&&(w?.(),S(h.current),o&&d?.(),r&&r())},anchorX:s,anchorY:c,children:e},v)})})},np=(0,b.createContext)({strict:!1}),rp={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},ip=!1;function ap(){if(ip)return;let e={};for(let t in rp)e[t]={isEnabled:e=>rp[t].some(t=>!!e[t])};fu(e),ip=!0}function op(){return ap(),pu()}function sp(e){let t=op();for(let n in e)t[n]={...t[n],...e[n]};fu(t)}var cp=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`));function lp(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||cp.has(e)}var up=c({default:()=>dp}),dp,fp=o((()=>{throw dp={},Error(`Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?`)})),pp=e=>!lp(e);function mp(e){typeof e==`function`&&(pp=t=>t.startsWith(`on`)?!lp(t):e(t))}try{mp((fp(),d(up)).default)}catch{}function hp(e,t,n){let r={};for(let i in e)(i!==`values`||typeof e.values!=`object`)&&(Pc(e[i])||(pp(i)||n===!0&&lp(i)||!t&&!lp(i)||e.draggable&&i.startsWith(`onDrag`))&&(r[i]=e[i]));return r}var gp=(0,b.createContext)({});function _p(e,t){if(ru(e)){let{initial:t,animate:n}=e;return{initial:t===!1||eu(t)?t:void 0,animate:eu(n)?n:void 0}}return e.inherit===!1?{}:t}function vp(e){let{initial:t,animate:n}=_p(e,(0,b.useContext)(gp));return(0,b.useMemo)(()=>({initial:t,animate:n}),[yp(t),yp(n)])}function yp(e){return Array.isArray(e)?e.join(` `):e}var bp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function xp(e,t,n){for(let r in t)!Pc(t[r])&&!Ku(r,n)&&(e[r]=t[r])}function Sp({transformTemplate:e},t){return(0,b.useMemo)(()=>{let n=bp();return Vu(n,t,e),Object.assign({},n.vars,n.style)},[t])}function Cp(e,t){let n=e.style||{},r={};return xp(r,n,e),Object.assign(r,Sp(e,t)),r}function wp(e,t){let n={},r=Cp(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var Tp=()=>({...bp(),attrs:{}});function Ep(e,t,n,r){let i=(0,b.useMemo)(()=>{let n=Tp();return ed(n,t,nd(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};xp(t,e.style,e),i.style={...t,...i.style}}return i}var Dp=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function Op(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(Dp.indexOf(e)>-1||/[A-Z]/u.test(e))}function kp(e,t,n,{latestValues:r},i,a=!1,o){let s=(o??Op(e)?Ep:wp)(t,r,i,e),c=hp(t,typeof e==`string`,a),l=e===b.Fragment?{}:{...c,...s,ref:n},{children:u}=t,d=(0,b.useMemo)(()=>Pc(u)?u.get():u,[u]);return(0,b.createElement)(e,{...l,children:d})}function Ap({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:jp(n,r,i,e),renderState:t()}}function jp(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=af(a[e]);let{initial:o,animate:s}=e,c=ru(e),l=iu(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!$l(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=Dc(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var Mp=e=>(t,n)=>{let r=(0,b.useContext)(gp),i=(0,b.useContext)(ki),a=()=>Ap(e,t,r,i);return n?a():Di(a)},Np=Mp({scrapeMotionValuesFromProps:qu,createRenderState:bp}),Pp=Mp({scrapeMotionValuesFromProps:id,createRenderState:Tp}),Fp=Symbol.for(`motionComponentSymbol`);function Ip(e,t,n){let r=(0,b.useRef)(n);(0,b.useInsertionEffect)(()=>{r.current=n});let i=(0,b.useRef)(null);return(0,b.useCallback)(n=>{n&&e.onMount?.(n),t&&(n?t.mount(n):t.unmount());let a=r.current;if(typeof a==`function`)if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n);else a&&(a.current=n)},[t])}var Lp=(0,b.createContext)({});function Rp(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function zp(e,t,n,r,i,a){let{visualElement:o}=(0,b.useContext)(gp),s=(0,b.useContext)(np),c=(0,b.useContext)(ki),l=(0,b.useContext)(Wf),u=l.reducedMotion,d=l.skipAnimations,f=(0,b.useRef)(null),p=(0,b.useRef)(!1);r||=s.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:a}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));let m=f.current,h=(0,b.useContext)(Lp);m&&!m.projection&&i&&(m.type===`html`||m.type===`svg`)&&Bp(f.current,n,i,h);let g=(0,b.useRef)(!1);(0,b.useInsertionEffect)(()=>{m&&g.current&&m.update(n,c)});let _=n[W],v=(0,b.useRef)(!!_&&typeof window<`u`&&!window.MotionHandoffIsComplete?.(_)&&window.MotionHasOptimisedAnimation?.(_));return Oi(()=>{p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),v.current&&m.animationState&&m.animationState.animateChanges())}),(0,b.useEffect)(()=>{m&&(!v.current&&m.animationState&&m.animationState.animateChanges(),v.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(_)}),!1),m.enteringChildren=void 0)}),m}function Bp(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutAnchor:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:Vp(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&Rp(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:d,layoutScroll:c,layoutRoot:l,layoutAnchor:u})}function Vp(e){if(e)return e.options.allowProjection===!1?Vp(e.parent):e.projection}function Hp(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&sp(r);let a=n?n===`svg`:Op(e),o=a?Pp:Np;function s(n,s){let c,l={...(0,b.useContext)(Wf),...n,layoutId:Up(n)},{isStatic:u}=l,d=vp(n),f=o(n,u);if(!u&&typeof window<`u`){Wp(l,r);let t=Gp(l);c=t.MeasureLayout,d.visualElement=zp(e,f,l,i,t.ProjectionNode,a)}return(0,N.jsxs)(gp.Provider,{value:d,children:[c&&d.visualElement?(0,N.jsx)(c,{visualElement:d.visualElement,...l}):null,kp(e,n,Ip(f,d.visualElement,s),f,u,t,a)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,b.forwardRef)(s);return c[Fp]=e,c}function Up({layoutId:e}){let t=(0,b.useContext)(Ei).id;return t&&e!==void 0?t+`-`+e:e}function Wp(e,t){(0,b.useContext)(np).strict}function Gp(e){let{drag:t,layout:n}=op();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function Kp(e,t){if(typeof Proxy>`u`)return Hp;let n=new Map,r=(n,r)=>Hp(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,Hp(a,void 0,e,t)),n.get(a))})}var qp=(e,t)=>t.isSVG??Op(e)?new ad(t):new Yu(t,{allowProjection:e!==b.Fragment}),Jp=class extends gu{constructor(e){super(e),e.animationState||=fd(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();$l(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},Yp=0,Xp={animation:{Feature:Jp},exit:{Feature:class extends gu{constructor(){super(...arguments),this.id=Yp++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;if(e&&n===!1){if(this.isExitComplete){let{initial:e,custom:t}=this.node.getProps();if(typeof e==`string`||typeof e==`object`&&e&&!Array.isArray(e)){let n=Oc(this.node,e,t);if(n){let{transition:e,transitionEnd:t,...r}=n;for(let e in r)this.node.getValue(e)?.jump(r[e])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive(`exit`,!1);this.isExitComplete=!1;return}let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function Zp(e){return{point:{x:e.pageX,y:e.pageY}}}var Qp=e=>t=>Sl(t)&&e(t,Zp(t));function $p(e,t,n,r){return ef(e,t,Qp(n),r)}var em=({current:e})=>e?e.ownerDocument.defaultView:null,tm=(e,t)=>Math.abs(e-t);function nm(e,t){let n=tm(e.x,t.x),r=tm(e.y,t.y);return Math.sqrt(n**2+r**2)}var rm=new Set([`auto`,`scroll`]),im=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=am(this.lastRawMoveEventInfo,this.transformPagePoint));let e=sm(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=nm(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=ma;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastRawMoveEventInfo=t,this.lastMoveEventInfo=am(t,this.transformPagePoint),R.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=sm(e.type===`pointercancel`?this.lastMoveEventInfo:am(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!Sl(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=am(Zp(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=ma;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,sm(s,this.history));let d={passive:!0,capture:!0};this.removeListeners=F($p(this.contextWindow,`pointermove`,this.handlePointerMove,d),$p(this.contextWindow,`pointerup`,this.handlePointerUp,d),$p(this.contextWindow,`pointercancel`,this.handlePointerUp,d)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(rm.has(e.overflowX)||rm.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.addEventListener(`scroll`,this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};(i.x!==0||i.y!==0)&&(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),R.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),pa(this.updatePoint)}};function am(e,t){return t?{point:t(e.point)}:e}function om(e,t){return{x:e.x-t.x,y:e.y-t.y}}function sm({point:e},t){return{point:e,delta:om(e,lm(t)),offset:om(e,cm(t)),velocity:um(t,.1)}}function cm(e){return e[0]}function lm(e){return e[e.length-1]}function um(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=lm(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>L(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>L(t)*2&&(r=e[1]);let a=zi(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function dm(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?B(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?B(n,e,r.max):Math.min(e,n)),e}function fm(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function pm(e,{top:t,left:n,bottom:r,right:i}){return{x:fm(e.x,n,i),y:fm(e.y,t,r)}}function mm(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function hm(e,t){return{x:mm(e.x,t.x),y:mm(e.y,t.y)}}function gm(e,t){let n=.5,r=Sd(e),i=Sd(t);return i>r?n=I(t.min,t.max-r,e.min):r>i&&(n=I(e.min,e.max-i,t.min)),Mi(0,1,n)}function _m(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var vm=.35;function ym(e=vm){return e===!1?e=0:e===!0&&(e=vm),{x:bm(e,`left`,`right`),y:bm(e,`top`,`bottom`)}}function bm(e,t,n){return{min:xm(e,t),max:xm(e,n)}}function xm(e,t){return typeof e==`number`?e:e[t]||0}var Sm=new WeakMap,Cm=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Zl(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t&&this.snapToCursor(Zp(e).point),this.stopAnimation()},a=(e,t)=>{let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=_l(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ud(e=>{let t=this.getAxisMotionValue(e).get()||0;if(Va.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=Sd(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&R.update(()=>i(e,t),!1,!0),Ic(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=Dm(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&R.update(()=>a(e,t),!1,!0)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{let{dragSnapToOrigin:e}=this.getProps();(e||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:l}=this.getProps();this.panSession=new im(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:em(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&R.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!Em(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=dm(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&Rp(e)?this.constraints||=this.resolveRefConstraints():this.constraints=e&&n?pm(n.layoutBox,e):!1,this.elastic=ym(t),r!==this.constraints&&!Rp(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&Ud(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=_m(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Rp(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;r.root&&(r.root.scroll=void 0,r.root.updateScroll());let i=Lu(n,r.root,this.visualElement.getTransformPagePoint()),a=hm(r.layout.layoutBox,i);if(t){let e=t(vu(a));this.hasMutatedConstraints=!!e,e&&(a=_u(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=Ud(o=>{if(!Em(o,t,this.currentDirection))return;let c=s&&s[o]||{};(a===!0||a===o)&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return Ic(this.visualElement,e),n.start(Sc(e,n,0,t,this.visualElement,!1))}stopAnimation(){Ud(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`;return this.visualElement.getProps()[t]||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){Ud(t=>{let{drag:n}=this.getProps();if(!Em(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-B(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Rp(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};Ud(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=gm({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),Ud(t=>{if(!Em(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(B(i,a,r[t]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;Sm.set(this.visualElement,this);let e=this.visualElement.current,t=$p(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&El(i);n&&r&&!a&&this.start(t)}),n,r=()=>{let{dragConstraints:t}=this.getProps();Rp(t)&&t.current&&(this.constraints=this.resolveRefConstraints(),n||=Tm(e,t.current,()=>this.scalePositionWithinConstraints()))},{projection:i}=this.visualElement,a=i.addEventListener(`measure`,r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),R.read(r);let o=ef(window,`resize`,()=>this.scalePositionWithinConstraints()),s=i.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(Ud(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{o(),t(),a(),s&&s(),n&&n()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=vm,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function wm(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function Tm(e,t,n){let r=Ul(e,wm(n)),i=Ul(t,wm(n));return()=>{r(),i()}}function Em(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Dm(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var Om=class extends gu{constructor(e){super(e),this.removeGroupControls=P,this.removeListeners=P,this.controls=new Cm(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||P}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},km=e=>(t,n)=>{e&&R.update(()=>e(t,n),!1,!0)},Am=class extends gu{constructor(){super(...arguments),this.removePointerDownListener=P}onPointerDown(e){this.session=new im(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:em(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:km(e),onStart:km(t),onMove:km(n),onEnd:(e,t)=>{delete this.session,r&&R.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=$p(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},jm=!1,Mm=class extends b.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),jm&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),sf.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),jm=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||R.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{visualElement:e,layoutAnchor:t}=this.props,{projection:n}=e;n&&(n.options.layoutAnchor=t,n.root.didUpdate(),pl.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;jm=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function Nm(e){let[t,n]=Qf(),r=(0,b.useContext)(Ei);return(0,N.jsx)(Mm,{...e,layoutGroup:r,switchLayoutGroup:(0,b.useContext)(Lp),isPresent:t,safeToRemove:n})}var Pm={pan:{Feature:Am},drag:{Feature:Om,ProjectionNode:Uf,MeasureLayout:Nm}};function Fm(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&R.postRender(()=>i(t,Zp(t)))}var Im=class extends gu{mount(){let{current:e}=this.node;e&&(this.unmount=bl(e,(e,t)=>(Fm(this.node,t,`Start`),e=>Fm(this.node,e,`End`))))}unmount(){}},Lm=class extends gu{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=F(ef(this.node.current,`focus`,()=>this.onFocus()),ef(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function Rm(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&R.postRender(()=>i(t,Zp(t)))}var zm=class extends gu{mount(){let{current:e}=this.node;if(!e)return;let{globalTapTarget:t,propagate:n}=this.node.props;this.unmount=Nl(e,(e,t)=>(Rm(this.node,t,`Start`),(e,{success:t})=>Rm(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:t,stopPropagation:n?.tap===!1})}unmount(){}},Bm=new WeakMap,Vm=new WeakMap,Hm=e=>{let t=Bm.get(e.target);t&&t(e)},Um=e=>{e.forEach(Hm)};function Wm({root:e,...t}){let n=e||document;Vm.has(n)||Vm.set(n,{});let r=Vm.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Um,{root:e,...t})),r[i]}function Gm(e,t,n){let r=Wm(t);return Bm.set(e,n),r.observe(e),()=>{Bm.delete(e),r.unobserve(e)}}var Km={some:0,all:1},qm=class extends gu{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:Km[r]},o=e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)};this.stopObserver=Gm(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(Jm(e,t))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}};function Jm({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var Ym={inView:{Feature:qm},tap:{Feature:zm},focus:{Feature:Lm},hover:{Feature:Im}},Xm={layout:{ProjectionNode:Uf,MeasureLayout:Nm}},Zm=Kp({...Xp,...Ym,...Pm,...Xm},qp),Qm=`/assets/hero1-BZsBXZMe.jpg`,$m=`/assets/hero2-CRzjRoNn.jpg`,eh=`/assets/hero3-DcQwUmb4.jpg`;function th(){let[e,t]=(0,b.useState)(0),n=[{image:Qm,eyebrow:`Your Global Travel Partner`,title:[`Seamless Journeys,`,`Limitless Possibilities.`],description:[`Business Travel`,`Exhibition Travel`,`Global Tourism`],position:`left`,imageFit:`cover`},{image:$m,eyebrow:`Travel Beyond Boundaries`,title:[`Discover More.`,`Travel Better.`],description:[`International Travel`,`Business Travel`,`Premium Experiences`],position:`center`,shift:20,imageFit:`cover`},{image:eh,eyebrow:`Your Journey, Our Expertise`,title:[`Wherever You Go,`,`We Are With You.`],description:[`Corporate Travel`,`Global Tourism`,`Complete Travel Support`],position:`center`,shift:35,imageFit:`cover`}],r=n[e],i=r.position===`center`;return(0,b.useEffect)(()=>{let e=setInterval(()=>{t(e=>(e+1)%n.length)},7e3);return()=>clearInterval(e)},[n.length]),(0,N.jsxs)(`section`,{id:`home`,className:`\r
        relative\r
        w-full\r
        overflow-hidden\r
\r
       h-[550px]\r
sm:h-[570px]\r
md:h-[600px]\r
lg:h-[625px]\r
xl:h-[645px]\r
\r
\r
        bg-[#03182B]\r
      `,children:[(0,N.jsx)(tp,{mode:`wait`,children:(0,N.jsxs)(Zm.div,{className:`\r
            absolute\r
            inset-0\r
\r
            w-full\r
            h-full\r
\r
            overflow-hidden\r
\r
            bg-[#03182B]\r
          `,initial:{opacity:0,scale:1.01},animate:{opacity:1,scale:1},exit:{opacity:0},transition:{duration:.9,ease:`easeInOut`},children:[(0,N.jsx)(`img`,{src:r.image,alt:`Sarathi NX Travel`,className:`\r
              absolute\r
              inset-0\r
\r
              w-full\r
              h-full\r
\r
              object-cover\r
              object-center\r
\r
              select-none\r
            `}),(0,N.jsx)(`div`,{className:`\r
              absolute\r
              inset-0\r
\r
              bg-[#03182B]/20\r
\r
              pointer-events-none\r
            `}),!i&&(0,N.jsx)(`div`,{className:`\r
                absolute\r
                inset-0\r
\r
                bg-gradient-to-r\r
\r
                from-[#03182B]/90\r
                via-[#03182B]/55\r
                to-transparent\r
\r
                pointer-events-none\r
              `}),i&&(0,N.jsx)(`div`,{className:`\r
                absolute\r
                inset-0\r
\r
                bg-gradient-to-r\r
\r
                from-[#03182B]/25\r
                via-transparent\r
                to-[#03182B]/25\r
\r
                pointer-events-none\r
              `}),(0,N.jsx)(`div`,{className:`\r
              absolute\r
              inset-x-0\r
              bottom-0\r
\r
              h-[150px]\r
\r
              bg-gradient-to-t\r
              from-[#03182B]/70\r
              to-transparent\r
\r
              pointer-events-none\r
            `})]},e)}),(0,N.jsx)(`div`,{className:`
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
        `,children:(0,N.jsx)(tp,{mode:`wait`,children:(0,N.jsxs)(Zm.div,{initial:{opacity:0,x:i?0:-35,y:i?20:0},animate:{opacity:1,x:0,y:0},exit:{opacity:0,x:i?0:-20,y:10},transition:{duration:.7,ease:`easeOut`},className:`
              w-full

              ${i?`max-w-[720px]`:`max-w-[650px]`}

              ${i&&r.shift===20?`translate-x-0 lg:translate-x-[20px]`:``}

              ${i&&r.shift===35?`translate-x-0 lg:translate-x-[35px]`:``}
            `,children:[(0,N.jsx)(Zm.p,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.1,duration:.5},className:`\r
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
              `,children:r.eyebrow}),(0,N.jsx)(Zm.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.18,duration:.65,ease:`easeOut`},className:`\r
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
              `,children:r.title.map((e,t)=>(0,N.jsx)(`span`,{className:`block`,children:e},t))}),(0,N.jsx)(Zm.div,{initial:{width:0,opacity:0},animate:{width:i?130:150,opacity:1},transition:{delay:.4,duration:.65},className:`
                relative

                h-[2px]

                mt-5

                bg-[#9CCB42]

                ${i?`mx-auto`:``}
              `,children:(0,N.jsx)(`span`,{className:`
                  absolute

                  top-1/2
                  -translate-y-1/2

                  w-[7px]
                  h-[7px]

                  rounded-full

                  bg-[#9CCB42]

                  ${i?`left-[-3px]`:`right-[-3px]`}
                `})}),(0,N.jsx)(Zm.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.52,duration:.6},className:`
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
              `,children:r.description.map((e,t)=>(0,N.jsxs)(`div`,{className:`\r
                      flex\r
                      items-center\r
                    `,children:[(0,N.jsx)(`span`,{children:e}),t<r.description.length-1&&(0,N.jsx)(`span`,{className:`\r
                          mx-3\r
\r
                          text-[#9CCB42]\r
                        `,children:`|`})]},e))})]},`content-${e}`)})}),(0,N.jsx)(`div`,{className:`\r
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
        `,children:n.map((n,r)=>(0,N.jsx)(`button`,{type:`button`,onClick:()=>t(r),"aria-label":`Go to slide ${r+1}`,className:`
              h-[4px]

              rounded-full

              transition-all
              duration-300

              ${e===r?`w-[30px] bg-[#9CCB42]`:`w-[7px] bg-white/60 hover:bg-white`}
            `},r))})]})}function $({children:e,delay:t=0,direction:n=`up`}){return(0,N.jsx)(Zm.div,{initial:{opacity:0,...{up:{y:40,x:0},down:{y:-40,x:0},left:{y:0,x:-40},right:{y:0,x:40}}[n]},whileInView:{opacity:1,x:0,y:0},viewport:{once:!0,amount:.2},transition:{duration:.7,delay:t,ease:`easeOut`},children:e})}var nh=`/assets/about-BlbohDcX.jpg`;function rh(){return(0,N.jsxs)(`section`,{id:`about`,className:`\r
        relative\r
        py-12\r
        md:py-16\r
        lg:py-20\r
        bg-white\r
        overflow-hidden\r
      `,children:[(0,N.jsx)(`div`,{className:`\r
          absolute\r
          -top-32\r
          -left-32\r
          w-80\r
          h-80\r
          rounded-full\r
          bg-[#0057B8]/5\r
          blur-3xl\r
          pointer-events-none\r
        `}),(0,N.jsx)(`div`,{className:`\r
          absolute\r
          -bottom-32\r
          -right-32\r
          w-96\r
          h-96\r
          rounded-full\r
          bg-[#fc6602]/5\r
          blur-3xl\r
          pointer-events-none\r
        `}),(0,N.jsx)(`div`,{className:`\r
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
        `}),(0,N.jsx)(`div`,{className:`max-w-7xl mx-auto px-6 relative z-10`,children:(0,N.jsxs)(`div`,{className:`\r
            grid\r
            lg:grid-cols-2\r
            gap-12\r
            lg:gap-16\r
            items-center\r
          `,children:[(0,N.jsx)($,{direction:`left`,children:(0,N.jsxs)(`div`,{className:`\r
                relative\r
                max-w-xl\r
                mx-auto\r
                lg:max-w-none\r
                w-full\r
                px-2\r
                sm:px-4\r
                lg:px-0\r
              `,children:[(0,N.jsx)(`div`,{className:`\r
                  absolute\r
                  -inset-4\r
                  rounded-[2.5rem]\r
                  bg-gradient-to-br\r
                  from-[#0057B8]/10\r
                  via-transparent\r
                  to-[#fc6602]/10\r
                  blur-xl\r
                  pointer-events-none\r
                `}),(0,N.jsx)(`div`,{className:`\r
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
                `}),(0,N.jsx)(`div`,{className:`\r
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
                `}),(0,N.jsxs)(`div`,{className:`\r
                  relative\r
                  overflow-hidden\r
                  rounded-[2rem]\r
                  bg-white\r
                  border\r
                  border-white\r
                  shadow-[0_25px_65px_rgba(0,87,184,0.18)]\r
                `,children:[(0,N.jsx)(`img`,{src:nh,alt:`Sarathi NX Travel`,className:`\r
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
                  `}),(0,N.jsx)(`div`,{className:`\r
                    absolute\r
                    inset-0\r
                    bg-gradient-to-t\r
                    from-[#031B4E]/75\r
                    via-[#003D8F]/10\r
                    to-transparent\r
                    pointer-events-none\r
                  `}),(0,N.jsx)(`div`,{className:`\r
                    absolute\r
                    top-0\r
                    left-0\r
                    right-0\r
                    h-24\r
                    bg-gradient-to-b\r
                    from-white/20\r
                    to-transparent\r
                    pointer-events-none\r
                  `}),(0,N.jsxs)(`div`,{className:`\r
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
                  `,children:[(0,N.jsx)(`span`,{className:`\r
                      w-2\r
                      h-2\r
                      rounded-full\r
                      bg-[#fc6602]\r
                    `}),`Sarathi NX`]}),(0,N.jsx)(`div`,{className:`\r
                    absolute\r
                    left-5\r
                    right-5\r
                    bottom-5\r
                    sm:left-6\r
                    sm:right-6\r
                    sm:bottom-6\r
                  `,children:(0,N.jsxs)(`div`,{className:`\r
                      flex\r
                      items-end\r
                      justify-between\r
                      gap-4\r
                    `,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{className:`\r
                          text-[#fc6602]\r
                          text-[10px]\r
                          sm:text-xs\r
                          font-bold\r
                          uppercase\r
                          tracking-[2.5px]\r
                          mb-1\r
                        `,children:`We Plan. You Travel. We Care.`}),(0,N.jsxs)(`h3`,{className:`\r
                          text-white\r
                          text-xl\r
                          sm:text-2xl\r
                          md:text-3xl\r
                          font-extrabold\r
                          leading-tight\r
                        `,children:[`Travel Beyond`,(0,N.jsx)(`br`,{}),`Boundaries`]})]}),(0,N.jsx)(`div`,{className:`\r
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
                      `,children:(0,N.jsx)(Xr,{className:`\r
                          text-white\r
                          text-lg\r
                        `})})]})})]}),(0,N.jsx)(Zm.div,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},whileHover:{y:-5,scale:1.02},transition:{duration:.3},className:`\r
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
                `,children:(0,N.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,N.jsx)(`div`,{className:`\r
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
                    `,children:`NX`}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{className:`\r
                        text-2xl\r
                        sm:text-3xl\r
                        md:text-4xl\r
                        font-black\r
                        leading-none\r
                      `,children:`2012`}),(0,N.jsx)(`p`,{className:`\r
                        text-blue-100\r
                        text-[10px]\r
                        sm:text-xs\r
                        md:text-sm\r
                        mt-1\r
                      `,children:`Travel Legacy`})]})]})})]})}),(0,N.jsx)(`div`,{children:(0,N.jsxs)($,{direction:`right`,children:[(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`flex items-center gap-[10px] mb-[7px]`,children:[(0,N.jsx)(`span`,{className:`\r
                block\r
                w-[49px]\r
                h-[2px]\r
                bg-gradient-to-r\r
                from-[#0057B8]\r
                to-[#F16A24]\r
              `}),(0,N.jsx)(`span`,{className:`\r
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
              `,children:`Who we are`}),(0,N.jsx)(`span`,{className:`\r
                block\r
                w-[49px]\r
                h-[2px]\r
                bg-gradient-to-r\r
                from-[#F16A24]\r
                to-[#0057B8]\r
              `})]})}),(0,N.jsxs)(`h3`,{className:`\r
                  text-3xl\r
                  md:text-4xl\r
                  lg:text-[42px]\r
                  font-extrabold\r
                  text-gray-800\r
                  leading-[1.15]\r
                  tracking-tight\r
                `,children:[`Your Trusted Partner`,(0,N.jsx)(`span`,{className:`\r
                    block\r
                    mt-1\r
                    bg-gradient-to-r\r
                    from-[#fc6602]\r
                    via-[#fc6602]\r
                    to-[#0057B8]\r
                    bg-clip-text\r
                    text-transparent\r
                  `,children:`For Every Journey`})]}),(0,N.jsxs)(`div`,{className:`\r
                  flex\r
                  items-center\r
                  gap-2\r
                  mt-5\r
                `,children:[(0,N.jsx)(`span`,{className:`\r
                    w-14\r
                    h-[3px]\r
                    rounded-full\r
                    bg-[#0057B8]\r
                  `}),(0,N.jsx)(`span`,{className:`\r
                    w-7\r
                    h-[3px]\r
                    rounded-full\r
                    bg-[#fc6602]\r
                  `}),(0,N.jsx)(`span`,{className:`\r
                    w-2\r
                    h-2\r
                    rounded-full\r
                    bg-[#fc6602]\r
                  `})]}),(0,N.jsx)(`p`,{className:`\r
                  mt-6\r
                  text-gray-600\r
                  leading-7\r
                  text-sm\r
                  md:text-base\r
                `,children:`Sarathi NX Pvt. Ltd. is a professionally established travel company with a journey that began in 2012 and was formally incorporated in 2020. We operate across the full spectrum of travel, serving both individual travellers and businesses with diverse travel requirements.`}),(0,N.jsx)(`p`,{className:`\r
                  mt-4\r
                  text-gray-600\r
                  leading-7\r
                  text-sm\r
                  md:text-base\r
                `,children:`Our expertise spans Domestic & International Travel, Holiday Packages, Group Tours, Global Tourism, International Exhibitions, Business & Corporate Travel, and MICE. We also manage the essential travel components that bring these journeys together, including Flights, Hotels, Visas, Transfers, Travel Insurance, and related travel services.`}),(0,N.jsx)(`p`,{className:`\r
                  mt-4\r
                  text-gray-600\r
                  leading-7\r
                  text-sm\r
                  md:text-base\r
                `,children:`From an international trade exhibition and corporate delegation to a family holiday, group journey, or a trip to a new destination, Sarathi NX manages travel across purposes, destinations, and scales.`}),(0,N.jsx)(`p`,{className:`\r
                  mt-4\r
                  text-gray-600\r
                  leading-7\r
                  text-sm\r
                  md:text-base\r
                `,children:`With a broad service portfolio and a global outlook, we aim to be the single travel partner clients can rely on for journeys that extend beyond boundaries.`}),(0,N.jsxs)(`div`,{className:`\r
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
                `,children:[(0,N.jsx)(`div`,{className:`\r
                    absolute\r
                    left-0\r
                    top-0\r
                    bottom-0\r
                    w-1\r
                    bg-gradient-to-b\r
                    from-[#0057B8]\r
                    to-[#fc6602]\r
                  `}),(0,N.jsxs)(`div`,{className:`\r
                    flex\r
                    flex-col\r
                    sm:flex-row\r
                    sm:items-center\r
                    sm:justify-between\r
                    gap-3\r
                    pl-4\r
                    pr-1\r
                  `,children:[(0,N.jsxs)(`h3`,{className:`\r
                      text-base\r
                      md:text-lg\r
                      font-extrabold\r
                      text-[#0057B8]\r
                      leading-tight\r
                    `,children:[`We Plan.`,(0,N.jsxs)(`span`,{className:`text-[#fc6602]`,children:[` `,`You Travel.`]}),(0,N.jsxs)(`span`,{className:`text-[#0057B8]`,children:[` `,`We Care.`]})]}),(0,N.jsx)($,{delay:.5,children:(0,N.jsxs)(Zm.a,{href:`/sarathi-nx-official/about`,whileHover:{y:-2},whileTap:{scale:.98},className:`\r
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
                      `,children:[`Discover More`,(0,N.jsx)(`span`,{className:`\r
                          w-6\r
                          h-6\r
                          rounded-full\r
                          bg-white/20\r
                          flex\r
                          items-center\r
                          justify-center\r
                          group-hover:bg-white/30\r
                          transition-all\r
                        `,children:(0,N.jsx)(M,{className:`\r
                            text-[10px]\r
                            group-hover:translate-x-1\r
                            transition-transform\r
                          `})})]})})]})]})]})})]})})]})}var ih=`/assets/flight-D7qCfbdo.jpeg`,ah=`/assets/bussnies-SpPz8lwp.jpg`,oh=`/assets/corporateTravel-YobpDL-w.jpg`,sh=`/assets/visa-zPQ_ww41.jpg`,ch=`/assets/mice-BtJF_GLF.jpg`,lh=`/assets/group-PpGXxdUV.jpg`,uh=[{icon:Ar,title:`Flights & Air Travel`,shortTitle:`Flights & Air Travel`,description:`Book domestic and international flights with reliable travel planning, flexible options and professional assistance for a smooth journey.`,image:ih},{icon:Hr,title:`Hotels & Accommodation`,shortTitle:`Hotels & Accommodation`,description:`Find comfortable and convenient accommodation options carefully selected around your destination, budget and travel requirements.`,image:`/assets/hotel-DViEoHGq.jpg`},{icon:Nr,title:`Visa & Travel Documentation`,shortTitle:`Visa & Travel Documentation`,description:`Get professional guidance with visa applications, documentation requirements and other essential travel formalities.`,image:sh},{icon:Er,title:`Travel Insurance & Forex`,shortTitle:`Travel Insurance & Forex`,description:`Travel with greater confidence through travel insurance assistance and convenient foreign exchange support for your journey.`,image:`/assets/globalTourisam-CI27OiQJ.jpg`},{icon:ui,title:`Transfers & Car Rentals`,shortTitle:`Transfers & Car Rentals`,description:`Arrange airport transfers, private transportation and car rentals for convenient and comfortable travel at your destination.`,image:ah},{icon:pr,title:`Domestic & International Holidays`,shortTitle:`Domestic & International Holidays`,description:`Explore memorable destinations with thoughtfully planned holiday packages, customized itineraries, hotels and complete travel support.`,image:lh},{icon:Tr,title:`Cruise & Ferry Bookings`,shortTitle:`Cruise & Ferry Bookings`,description:`Plan your cruise and ferry journeys with booking assistance and travel arrangements designed for a comfortable experience.`,image:`/assets/otherInternationalTradeFairs-AvEJEuYA.jpg`},{icon:pi,title:`Business & Corporate Travel`,shortTitle:`Business & Corporate Travel`,description:`Make every business trip simple and efficient with carefully planned flights, hotels, transfers and personalized corporate travel support.`,image:oh},{icon:fi,title:`MICE & Exhibition Travel`,shortTitle:`MICE & Exhibition Travel`,description:`From meetings and conferences to exhibitions and incentive programs, we manage professional travel arrangements with complete attention to detail.`,image:ch},{icon:lr,title:`Group & Customized Tours`,shortTitle:`Group & Customized Tours`,description:`Enjoy well-organized group journeys and customized tours with personalized itineraries, accommodation, transportation and complete travel assistance.`,image:lh}];function dh(){let[e,t]=(0,b.useState)(0);(0,b.useEffect)(()=>{let e=setInterval(()=>{t(e=>(e+1)%uh.length)},4500);return()=>clearInterval(e)},[]);let n=uh[e],r=n.icon;return(0,N.jsx)(`section`,{id:`services`,className:`\r
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
      `,children:(0,N.jsxs)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6`,children:[(0,N.jsxs)(`div`,{className:`text-center mb-7 sm:mb-8`,children:[(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`flex items-center justify-center gap-2 sm:gap-[10px] mb-[7px]`,children:[(0,N.jsx)(`span`,{className:`\r
                  block\r
                  w-8\r
                  sm:w-[49px]\r
                  h-[2px]\r
                  bg-gradient-to-r\r
                  from-[#0057B8]\r
                  to-[#F16A24]\r
                `}),(0,N.jsx)(`span`,{className:`\r
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
                `,children:`Our Services`}),(0,N.jsx)(`span`,{className:`\r
                  block\r
                  w-8\r
                  sm:w-[49px]\r
                  h-[2px]\r
                  bg-gradient-to-r\r
                  from-[#F16A24]\r
                  to-[#0057B8]\r
                `})]})}),(0,N.jsx)($,{delay:.05,children:(0,N.jsxs)(`h2`,{className:`\r
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
              `,children:[`Complete Travel`,` `,(0,N.jsx)(`span`,{className:`\r
                  bg-gradient-to-r\r
                  from-[#0057B8]\r
                  via-[#1454D8]\r
                  to-[#F16A24]\r
                  bg-clip-text\r
                  text-transparent\r
                `,children:`Solutions.`})]})}),(0,N.jsx)(`p`,{className:`\r
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
            `,children:`From international exhibitions and corporate journeys to visas, hotels and group tours, we take care of every important detail so you can travel with confidence.`})]}),(0,N.jsxs)(`div`,{className:`\r
            grid\r
            grid-cols-1\r
            lg:grid-cols-[270px_1fr]\r
            gap-4\r
            lg:gap-5\r
            items-stretch\r
          `,children:[(0,N.jsxs)(`div`,{className:`\r
              bg-white\r
              rounded-2xl\r
              border\r
              border-gray-100\r
              shadow-lg\r
              overflow-hidden\r
              lg:h-[500px]\r
              flex\r
              flex-col\r
            `,children:[(0,N.jsxs)(`div`,{className:`\r
                px-4\r
                sm:px-5\r
                py-4\r
                shrink-0\r
                bg-gradient-to-r\r
                from-[#0057B8]\r
                via-[#0057B8]\r
                to-[#fc6602]\r
                text-white\r
              `,children:[(0,N.jsx)(`p`,{className:`\r
                  text-[10px]\r
                  sm:text-xs\r
                  uppercase\r
                  tracking-[1.5px]\r
                  sm:tracking-[2px]\r
                  text-blue-100\r
                  font-semibold\r
                `,children:`What We Offer`}),(0,N.jsx)(`h3`,{className:`text-base sm:text-lg font-bold mt-1`,children:`Our Services`})]}),(0,N.jsx)(`div`,{className:`\r
                p-2\r
                flex-1\r
                overflow-y-auto\r
                overscroll-contain\r
                [scrollbar-width:thin]\r
                [scrollbar-color:#0057B8_transparent]\r
              `,children:uh.map((n,r)=>{let i=n.icon;return(0,N.jsxs)(`button`,{type:`button`,onClick:()=>t(r),className:`
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
                    `,children:[(0,N.jsx)(`span`,{className:`
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
                      `,children:(0,N.jsx)(i,{className:`text-sm`})}),(0,N.jsx)(`span`,{className:`
                        text-xs
                        sm:text-sm
                        font-semibold
                        leading-5

                        ${e===r?`text-white`:`text-gray-600`}
                      `,children:n.shortTitle})]},n.title)})})]}),(0,N.jsx)(`div`,{className:`\r
              relative\r
              h-[420px]\r
              sm:h-[450px]\r
              md:h-[480px]\r
              lg:h-[500px]\r
              min-w-0\r
            `,children:(0,N.jsx)(tp,{mode:`wait`,children:(0,N.jsx)(Zm.div,{initial:{opacity:0,rotateY:-12,x:30},animate:{opacity:1,rotateY:0,x:0},exit:{opacity:0,rotateY:12,x:-30},transition:{duration:.55,ease:`easeInOut`},className:`h-full`,children:(0,N.jsxs)(`div`,{className:`\r
                    relative\r
                    h-full\r
                    rounded-2xl\r
                    overflow-hidden\r
                    shadow-xl\r
                    group\r
                  `,children:[(0,N.jsx)(Zm.img,{src:n.image,alt:n.title,className:`\r
                      absolute\r
                      inset-0\r
                      w-full\r
                      h-full\r
                      object-cover\r
                      transition-transform\r
                      duration-700\r
                      group-hover:scale-105\r
                    `,initial:{scale:1.08},animate:{scale:1},transition:{duration:4.5,ease:`easeOut`}},n.image),(0,N.jsx)(`div`,{className:`absolute inset-0 bg-black/35`}),(0,N.jsx)(`div`,{className:`\r
                      absolute\r
                      inset-0\r
                      bg-gradient-to-r\r
                      from-black/85\r
                      via-black/55\r
                      to-black/15\r
                    `}),(0,N.jsx)(`div`,{className:`\r
                      absolute\r
                      inset-0\r
                      bg-gradient-to-tr\r
                      from-[#0057B8]/30\r
                      via-transparent\r
                      to-[#fc6602]/25\r
                    `}),(0,N.jsx)(`div`,{className:`\r
                      absolute\r
                      inset-x-0\r
                      bottom-0\r
                      h-2/3\r
                      bg-gradient-to-t\r
                      from-black/75\r
                      via-black/20\r
                      to-transparent\r
                    `}),(0,N.jsx)(`div`,{className:`\r
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
                    `}),(0,N.jsxs)(`div`,{className:`\r
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
                    `,children:[(0,N.jsx)(`div`,{className:`\r
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
                      `,children:(0,N.jsx)(r,{})}),(0,N.jsx)(`span`,{className:`\r
                        text-[#fc6602]\r
                        text-[10px]\r
                        sm:text-xs\r
                        font-bold\r
                        uppercase\r
                        tracking-[1.5px]\r
                        sm:tracking-[2px]\r
                      `,children:`Sarathi NX`}),(0,N.jsx)(`h3`,{className:`\r
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
                      `,children:n.title}),(0,N.jsx)(`p`,{className:`\r
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
                      `,children:n.description}),(0,N.jsxs)(`div`,{className:`\r
                        flex\r
                        flex-wrap\r
                        items-center\r
                        gap-3\r
                        sm:gap-4\r
                        mt-4\r
                        sm:mt-5\r
                      `,children:[(0,N.jsxs)(`a`,{href:`#contact`,className:`\r
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
                        `,children:[`Explore Service`,(0,N.jsx)(M,{className:`\r
                            text-xs\r
                            sm:text-sm\r
                            transition-transform\r
                            duration-300\r
                            group-hover/explore:translate-x-1\r
                          `})]}),(0,N.jsxs)(`div`,{className:`\r
                          flex\r
                          items-center\r
                          gap-2\r
                          text-[11px]\r
                          sm:text-xs\r
                          md:text-sm\r
                          text-white/90\r
                        `,children:[(0,N.jsx)(`span`,{className:`\r
                            w-2\r
                            h-2\r
                            rounded-full\r
                            bg-[#fc6602]\r
                            shadow-[0_0_10px_rgba(252,102,2,0.9)]\r
                          `}),`Professional Travel Assistance`]})]}),(0,N.jsx)(`div`,{className:`flex gap-1.5 sm:gap-2 mt-4 sm:mt-5`,children:uh.map((n,r)=>(0,N.jsx)(`button`,{type:`button`,onClick:()=>t(r),"aria-label":`Show service ${r+1}`,className:`
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
                          `},r))})]})]})},e)})})]})]})})}var fh=[{number:`01`,icon:kr,title:`Transparent Pricing`,desc:`Honest pricing with no hidden charges.`},{number:`02`,icon:Gr,title:`Dedicated Travel Consultants`,desc:`Personalized guidance for every journey.`},{number:`03`,icon:Yr,title:`Worldwide Network`,desc:`Reliable global travel partnerships.`},{number:`04`,icon:Nr,title:`Fast Visa Assistance`,desc:`Quick and hassle-free visa support.`},{number:`05`,icon:qr,title:`Personalized Travel Solutions`,desc:`Travel plans tailored to your needs.`},{number:`06`,icon:si,title:`24/7 Customer Support`,desc:`Assistance whenever you need us.`}];function ph(){return(0,N.jsx)(`section`,{id:`why-choose-us`,className:`\r
        relative\r
        w-full\r
        overflow-hidden\r
        bg-[#f8f9fc]\r
        py-[10px]\r
        md:py-[14px]\r
      `,children:(0,N.jsxs)(`div`,{className:`\r
          relative\r
          z-10\r
          w-full\r
          max-w-[1240px]\r
          mx-auto\r
          px-5\r
          md:px-6\r
        `,children:[(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`\r
              flex\r
              items-center\r
              justify-center\r
              gap-[10px]\r
              mb-[7px]\r
            `,children:[(0,N.jsx)(`span`,{className:`\r
                block\r
                w-[49px]\r
                h-[2px]\r
                bg-gradient-to-r\r
                from-[#0057B8]\r
                to-[#F16A24]\r
              `}),(0,N.jsx)(`span`,{className:`\r
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
              `,children:`WHY CHOOSE SARATHI NX`}),(0,N.jsx)(`span`,{className:`\r
                block\r
                w-[49px]\r
                h-[2px]\r
                bg-gradient-to-r\r
                from-[#F16A24]\r
                to-[#0057B8]\r
              `})]})}),(0,N.jsx)($,{delay:.05,children:(0,N.jsxs)(`h2`,{className:`\r
              text-center\r
              font-extrabold\r
              tracking-[-1.8px]\r
              leading-[1.02]\r
              text-[42px]\r
              sm:text-[46px]\r
              md:text-[52px]\r
              lg:text-[58px]\r
              text-[#071B41]\r
            `,children:[`Travel With`,` `,(0,N.jsx)(`span`,{className:`\r
                bg-gradient-to-r\r
                from-[#0057B8]\r
                via-[#1454D8]\r
                to-[#F16A24]\r
                bg-clip-text\r
                text-transparent\r
              `,children:`Confidence.`})]})}),(0,N.jsx)($,{delay:.08,children:(0,N.jsxs)(`div`,{className:`\r
              flex\r
              flex-wrap\r
              items-center\r
              justify-center\r
              gap-[9px]\r
              mt-[9px]\r
              text-center\r
            `,children:[(0,N.jsx)(`span`,{className:`\r
                text-[17px]\r
                md:text-[20px]\r
                font-bold\r
                leading-none\r
                text-[#E76624]\r
              `,children:`End-to-End Travel Solutions`}),(0,N.jsx)(`span`,{className:`\r
                text-[17px]\r
                md:text-[20px]\r
                font-bold\r
                leading-none\r
                text-[#19396D]\r
              `,children:`|`}),(0,N.jsx)(`span`,{className:`\r
                text-[17px]\r
                md:text-[20px]\r
                font-bold\r
                leading-none\r
                text-[#19396D]\r
              `,children:`Complete travel management under one roof.`})]})}),(0,N.jsx)($,{delay:.1,children:(0,N.jsxs)(`p`,{className:`\r
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
            `,children:[`From business travel and international exhibitions to visas, hotels and complete travel management,`,(0,N.jsx)(`br`,{className:`hidden md:block`}),`Sarathi NX ensures a smooth, reliable and hassle-free journey.`]})}),(0,N.jsx)(`div`,{className:`\r
            grid\r
            grid-cols-1\r
            sm:grid-cols-2\r
            lg:grid-cols-6\r
            gap-[12px]\r
            w-full\r
          `,children:fh.map((e,t)=>{let n=e.icon;return(0,N.jsx)($,{delay:.12+t*.04,children:(0,N.jsxs)(Zm.div,{whileHover:{y:-4},transition:{type:`spring`,stiffness:300,damping:22},className:`\r
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
                  `,children:[(0,N.jsx)(`div`,{className:`\r
                      absolute\r
                      top-0\r
                      left-0\r
                      w-[58px]\r
                      h-[3px]\r
                      rounded-br-full\r
                      bg-[#0057B8]\r
                    `}),(0,N.jsx)(`div`,{className:`\r
                      absolute\r
                      top-[18px]\r
                      right-[13px]\r
                      text-[22px]\r
                      leading-none\r
                      font-extrabold\r
                      tracking-[-1px]\r
                      text-[#F1F3F7]\r
                      select-none\r
                    `,children:e.number}),(0,N.jsx)(`div`,{className:`pt-[18px] pl-[25px]`,children:(0,N.jsxs)(`div`,{className:`\r
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
                      `,children:[(0,N.jsx)(`div`,{className:`\r
                          absolute\r
                          inset-0\r
                          bg-[radial-gradient(circle_at_28%_25%,rgba(255,255,255,0.25),transparent_30%)]\r
                        `}),(0,N.jsx)(n,{className:`\r
                          relative\r
                          z-10\r
                          text-white\r
                          text-[31px]\r
                        `})]})}),(0,N.jsxs)(`div`,{className:`\r
                      px-[25px]\r
                      pt-[20px]\r
                    `,children:[(0,N.jsx)(`h3`,{className:`\r
                        max-w-[155px]\r
                        min-h-[47px]\r
                        text-[17px]\r
                        md:text-[18px]\r
                        font-extrabold\r
                        leading-[1.25]\r
                        tracking-[-0.25px]\r
                        text-[#102C61]\r
                      `,children:e.title}),(0,N.jsx)(`div`,{className:`\r
                        mt-[11px]\r
                        mb-[14px]\r
                        w-[34px]\r
                        h-[2px]\r
                        rounded-full\r
                        bg-[#F1783B]\r
                      `}),(0,N.jsx)(`p`,{className:`\r
                        max-w-[160px]\r
                        text-[12px]\r
                        md:text-[13px]\r
                        leading-[1.55]\r
                        font-normal\r
                        text-[#303846]\r
                      `,children:e.desc})]}),(0,N.jsx)(`div`,{className:`\r
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
                    `,children:(0,N.jsx)(n,{className:`\r
                        text-[50px]\r
                        opacity-80\r
                      `})}),(0,N.jsx)(`div`,{className:`\r
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
                    `})]})},e.title)})})]})})}var mh=[{title:`Medical, Healthcare & Pharmaceuticals`,image:`/assets/healthcare-DzyAUpmq.jpg`,icon:Wr},{title:`Agriculture, Food & Beverage`,image:`/assets/agriculture-Bi2Xu7XO.jpg`,icon:cr},{title:`Automotive & Mobility`,image:`/assets/automotive-CE2r4N4A.jpg`,icon:ui},{title:`Beauty, Cosmetics & Personal Care`,image:`/assets/beautyCosmetics-BI7sXhTU.jpg`,icon:Fr},{title:`Construction, Building & Architecture`,image:`/assets/construction-Chmhg1V0.jpg`,icon:Kr},{title:`Industrial Manufacturing & Machinery`,image:`/assets/industrialManufacturing-CzgU-uGW.jpg`,icon:Vr},{title:`Electronics, Electrical & Semiconductors`,image:`/assets/electronics-DhPlTQLs.jpg`,icon:Ir},{title:`Information Technology & AI`,image:`/assets/technologyAI-6fUKiN4s.jpg`,icon:Br},{title:`Energy & Renewable Energy`,image:`/assets/renewableEnergy-DNKI5uw-.jpg`,icon:wr},{title:`Metal, Steel & Engineering`,image:`/assets/metalSteel-BxfzI-ik.jpg`,icon:oi},{title:`Packaging, Printing & Publishing`,image:`/assets/packagingPrinting-DJ6EaTt7.jpg`,icon:Vr},{title:`Textiles, Apparel & Fashion`,image:`/assets/textile-C6q53Nrc.jpg`,icon:mr},{title:`Furniture, Interior & Home Living`,image:`/assets/furnitureInterior-CT0whbFw.jpg`,icon:ri},{title:`Jewellery, Watches & Gifts`,image:`/assets/jewellery-d8Lzxwmh.jpg`,icon:Zr},{title:`Tourism, Hospitality & Leisure`,image:`/assets/tourismHospitality-CfEqV6Oa.jpg`,icon:Ar},{title:`Logistics & Transportation`,image:`/assets/logisticsTransportation-BSnlitQd.jpg`,icon:hr},{title:`Environment & Green Technology`,image:`/assets/environmentGreenTech-DQMVnXlF.jpg`,icon:zr},{title:`Plastics, Rubber & Materials`,image:`/assets/plasticsRubber-CNgnLsmm.jpg`,icon:Vr},{title:`Education, Licensing & Business Services`,image:`/assets/educationBusiness-CrDkQHQA.jpg`,icon:Jr},{title:`Optics & Precision Technology`,image:`/assets/opticsPrecision-UPPJhscw.jpg`,icon:$r}];function hh(){let[e,t]=(0,b.useState)(!1),n=[...mh,...mh];return(0,N.jsxs)(`section`,{id:`industries`,className:`\r
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
      `,children:[(0,N.jsx)(`div`,{className:`\r
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
        `}),(0,N.jsx)(`div`,{className:`\r
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
        `}),(0,N.jsxs)(`div`,{className:`relative`,children:[(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`\r
              flex\r
              items-center\r
              justify-center\r
              gap-[6px]\r
              sm:gap-[8px]\r
              md:gap-[10px]\r
              mb-[7px]\r
              px-4\r
            `,children:[(0,N.jsx)(`span`,{className:`\r
                block\r
                w-[28px]\r
                sm:w-[38px]\r
                md:w-[49px]\r
                h-[2px]\r
                bg-gradient-to-r\r
                from-[#0057B8]\r
                to-[#F16A24]\r
                shrink-0\r
              `}),(0,N.jsx)(`span`,{className:`\r
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
              `,children:`Industries We Serve`}),(0,N.jsx)(`span`,{className:`\r
                block\r
                w-[28px]\r
                sm:w-[38px]\r
                md:w-[49px]\r
                h-[2px]\r
                bg-gradient-to-r\r
                from-[#F16A24]\r
                to-[#0057B8]\r
                shrink-0\r
              `})]})}),(0,N.jsx)($,{delay:.05,children:(0,N.jsxs)(`h2`,{className:`\r
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
            `,children:[`Travel Solutions For`,` `,(0,N.jsx)(`span`,{className:`\r
                bg-gradient-to-r\r
                from-[#0057B8]\r
                via-[#1454D8]\r
                to-[#F16A24]\r
                bg-clip-text\r
                text-transparent\r
              `,children:`Every Industry.`})]})}),(0,N.jsx)($,{delay:.1,children:(0,N.jsx)(`p`,{className:`\r
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
            `,children:`From healthcare and pharmaceuticals to manufacturing and technology, Sarathi NX provides reliable business travel solutions for professionals across diverse industries.`})}),(0,N.jsxs)(`div`,{className:`\r
            relative\r
            mt-8\r
            sm:mt-10\r
            md:mt-12\r
            overflow-hidden\r
            w-full\r
          `,onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:[(0,N.jsx)(`div`,{className:`\r
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
            `}),(0,N.jsx)(`div`,{className:`\r
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
            `}),(0,N.jsx)(Zm.div,{className:`\r
              flex\r
              gap-3\r
              sm:gap-4\r
              md:gap-5\r
              w-max\r
              px-3\r
              sm:px-4\r
            `,animate:{x:e?void 0:[`0%`,`-50%`]},transition:{x:{duration:55,ease:`linear`,repeat:1/0}},children:n.map((e,t)=>{let n=e.icon;return(0,N.jsxs)(Zm.div,{whileHover:{y:-7,scale:1.02},transition:{duration:.25},className:`\r
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
                  `,children:[(0,N.jsx)(`img`,{src:e.image,alt:e.title,className:`\r
                      absolute\r
                      inset-0\r
                      w-full\r
                      h-full\r
                      object-cover\r
                      transition-transform\r
                      duration-700\r
                      ease-out\r
                      group-hover:scale-110\r
                    `}),(0,N.jsx)(`div`,{className:`\r
                      absolute\r
                      inset-0\r
                      bg-gradient-to-t\r
                      from-black/90\r
                      via-black/40\r
                      to-black/5\r
                    `}),(0,N.jsx)(`div`,{className:`\r
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
                    `}),(0,N.jsx)(`div`,{className:`\r
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
                    `}),(0,N.jsx)(`div`,{className:`\r
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
                    `,children:(0,N.jsx)(n,{className:`text-sm sm:text-base`})}),(0,N.jsxs)(`div`,{className:`\r
                      absolute\r
                      inset-x-0\r
                      bottom-0\r
                      p-4\r
                      sm:p-5\r
                      z-20\r
                    `,children:[(0,N.jsx)(`h3`,{className:`\r
                        text-base\r
                        sm:text-lg\r
                        md:text-xl\r
                        font-extrabold\r
                        text-white\r
                        leading-[1.15]\r
                        max-w-[240px]\r
                      `,children:e.title}),(0,N.jsx)(`div`,{className:`\r
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
                      `}),(0,N.jsxs)(`a`,{href:`#contact`,className:`\r
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
                      `,children:[`Explore Industry`,(0,N.jsx)(M,{className:`\r
                          text-[9px]\r
                          sm:text-[10px]\r
                          group-hover:translate-x-1\r
                          transition-transform\r
                        `})]})]}),(0,N.jsx)(`div`,{className:`\r
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
                    `})]},`${e.title}-${t}`)})})]}),(0,N.jsx)($,{delay:.2,children:(0,N.jsx)(`div`,{className:`flex justify-center mt-6 sm:mt-7 px-4`,children:(0,N.jsxs)(`div`,{className:`\r
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
              `,children:[(0,N.jsx)(Xr,{className:`text-[#0057B8] shrink-0`}),`Connecting Industries Globally`]})})}),(0,N.jsx)($,{delay:.3,children:(0,N.jsxs)(`div`,{className:`\r
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
            `,children:[(0,N.jsx)(`div`,{className:`\r
                absolute\r
                -right-16\r
                -top-16\r
                w-36\r
                h-36\r
                sm:w-40\r
                sm:h-40\r
                rounded-full\r
                bg-white/10\r
              `}),(0,N.jsx)(`div`,{className:`\r
                absolute\r
                -left-16\r
                -bottom-16\r
                w-32\r
                h-32\r
                sm:w-36\r
                sm:h-36\r
                rounded-full\r
                bg-white/10\r
              `}),(0,N.jsxs)(`div`,{className:`\r
                relative\r
                z-10\r
                text-center\r
                md:text-left\r
              `,children:[(0,N.jsxs)(`div`,{className:`flex items-center justify-center md:justify-start gap-2`,children:[(0,N.jsx)(Xr,{className:`text-blue-100`}),(0,N.jsx)(`p`,{className:`\r
                    text-blue-100\r
                    uppercase\r
                    tracking-[1.5px]\r
                    sm:tracking-[2px]\r
                    text-[10px]\r
                    sm:text-xs\r
                    font-bold\r
                  `,children:`Global Business Travel`})]}),(0,N.jsx)(`h3`,{className:`\r
                  text-lg\r
                  sm:text-xl\r
                  md:text-2xl\r
                  font-extrabold\r
                  mt-2\r
                  leading-tight\r
                `,children:`Your Industry. Our Global Travel Expertise.`}),(0,N.jsx)(`p`,{className:`text-blue-50 mt-1 text-xs sm:text-sm`,children:`Let Sarathi NX take care of your business travel requirements.`})]}),(0,N.jsxs)(`a`,{href:`#contact`,className:`\r
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
              `,children:[`Talk To Our Experts`,(0,N.jsx)(M,{})]})]})})]})]})}var gh=`/assets/gallery1-CyUWSFfF.jpg`,_h=`/assets/gallery2-CZV2DA3F.jpg`,vh=[{id:1,name:`Rahul Sharma`,company:`ABC Technologies`,review:`Sarathi NX managed our international exhibition trip professionally. Everything was perfectly organized.`,rating:5},{id:2,name:`Priya Verma`,company:`XYZ Industries`,review:`Excellent support for visa processing and hotel bookings. Highly recommended.`,rating:5},{id:3,name:`Amit Patel`,company:`Global Exports`,review:`Professional team with excellent customer service. Looking forward to future collaborations.`,rating:5}];function yh(){let e=[vh,vh,vh];return(0,N.jsxs)(`section`,{id:`testimonials`,className:`\r
        relative\r
        py-10\r
        md:py-12\r
        bg-[#F5F9FF]\r
        overflow-hidden\r
      `,children:[(0,N.jsx)(`div`,{className:`\r
          absolute\r
          -top-24\r
          -left-24\r
          w-64\r
          h-64\r
          bg-[#0057B8]/5\r
          rounded-full\r
          blur-3xl\r
          pointer-events-none\r
        `}),(0,N.jsx)(`div`,{className:`\r
          absolute\r
          -bottom-24\r
          -right-24\r
          w-72\r
          h-72\r
          bg-[#fc6602]/5\r
          rounded-full\r
          blur-3xl\r
          pointer-events-none\r
        `}),(0,N.jsxs)(`div`,{className:`relative`,children:[(0,N.jsxs)(Zm.div,{initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.6},className:`\r
            text-center\r
            px-6\r
            mb-8\r
          `,children:[(0,N.jsxs)(`div`,{className:`flex items-center justify-center gap-[10px] mb-[7px]`,children:[(0,N.jsx)(`span`,{className:`\r
                block\r
                w-[49px]\r
                h-[2px]\r
                bg-gradient-to-r\r
                from-[#0057B8]\r
                to-[#F16A24]\r
              `}),(0,N.jsx)(`span`,{className:`\r
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
              `,children:`Client Reviews`}),(0,N.jsx)(`span`,{className:`\r
                block\r
                w-[49px]\r
                h-[2px]\r
                bg-gradient-to-r\r
                from-[#F16A24]\r
                to-[#0057B8]\r
              `})]}),(0,N.jsxs)(`h2`,{className:`\r
              text-center\r
              font-extrabold\r
              tracking-[-1.8px]\r
              leading-[1.02]\r
              text-[48px]\r
              md:text-[52px]\r
              lg:text-[58px]\r
              text-[#071B41]\r
            `,children:[`What Our`,` `,(0,N.jsx)(`span`,{className:`\r
                bg-gradient-to-r\r
                from-[#0057B8]\r
                via-[#1454D8]\r
                to-[#F16A24]\r
                bg-clip-text\r
                text-transparent\r
              `,children:`Clients Say.`})]}),(0,N.jsx)(`p`,{className:`\r
              max-w-[970px]\r
              mx-auto\r
              mt-[12px]\r
              text-center\r
              text-[16px]\r
              leading-[1.55]\r
              font-normal\r
              text-[#303846]\r
            `,children:`Trusted by professionals and businesses for reliable international exhibitions, corporate travel and global business journeys.`})]}),(0,N.jsx)(Zm.div,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.08},className:`\r
            flex\r
            justify-center\r
            px-6\r
            mb-8\r
          `,children:(0,N.jsxs)(`div`,{className:`\r
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
            `,children:[(0,N.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,N.jsx)(`div`,{className:`\r
                  w-8\r
                  h-8\r
                  rounded-full\r
                  bg-gray-50\r
                  flex\r
                  items-center\r
                  justify-center\r
                `,children:(0,N.jsx)(or,{className:`text-[#4285F4] text-sm`})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{className:`font-bold text-gray-800 text-xs`,children:`Client Reviews`}),(0,N.jsx)(`div`,{className:`flex gap-0.5 mt-0.5`,children:[1,2,3,4,5].map(e=>(0,N.jsx)(Sr,{className:`text-[#FBBF24] text-[9px]`},e))})]})]}),(0,N.jsx)(`div`,{className:`hidden md:block w-px h-7 bg-gray-200`}),(0,N.jsxs)(`div`,{className:`text-center`,children:[(0,N.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,N.jsx)(`span`,{className:`text-xl font-extrabold text-gray-800`,children:`5.0`}),(0,N.jsx)(Sr,{className:`text-[#FBBF24] text-sm`})]}),(0,N.jsx)(`p`,{className:`text-[10px] text-gray-400`,children:`Client satisfaction`})]}),(0,N.jsx)(`div`,{className:`hidden md:block w-px h-7 bg-gray-200`}),(0,N.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,N.jsx)(j,{className:`text-[#0057B8] text-sm`}),(0,N.jsx)(`span`,{className:`text-xs font-semibold text-gray-600`,children:`Trusted Experiences`})]})]})}),(0,N.jsxs)(`div`,{className:`\r
            relative\r
            w-full\r
            overflow-hidden\r
          `,children:[(0,N.jsx)(`div`,{className:`\r
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
            `}),(0,N.jsx)(`div`,{className:`\r
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
            `}),(0,N.jsx)(`div`,{className:`\r
              testimonials-marquee\r
              flex\r
              w-max\r
              hover:[animation-play-state:paused]\r
            `,children:e.map((e,t)=>(0,N.jsx)(`div`,{className:`\r
                  flex\r
                  shrink-0\r
                  w-max\r
                `,children:e.map((e,n)=>{let r=e.name?.split(` `).map(e=>e[0]).join(``).slice(0,2).toUpperCase();return(0,N.jsx)(`div`,{className:`\r
                        shrink-0\r
                        w-[300px]\r
                        sm:w-[340px]\r
                        md:w-[370px]\r
                        pr-3\r
                      `,children:(0,N.jsxs)(Zm.div,{whileHover:{y:-5},transition:{duration:.3},className:`\r
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
                        `,children:[(0,N.jsx)(`div`,{className:`\r
                            absolute\r
                            top-0\r
                            left-5\r
                            right-5\r
                            h-[3px]\r
                            bg-gradient-to-r\r
                            from-[#F16A24]\r
                            to-[#0057B8]\r
                            rounded-b-full\r
                          `}),(0,N.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,N.jsx)(`div`,{className:`\r
                              w-9\r
                              h-9\r
                              rounded-xl\r
                              bg-[#FFF2EA]\r
                              flex\r
                              items-center\r
                              justify-center\r
                              group-hover:bg-[#0057B8]\r
                              transition-colors\r
                            `,children:(0,N.jsx)(Or,{className:`\r
                                text-[#F16A24]\r
                                group-hover:text-white\r
                                text-sm\r
                                transition-colors\r
                              `})}),(0,N.jsxs)(`div`,{className:`\r
                              flex\r
                              items-center\r
                              gap-1\r
                              text-[10px]\r
                              text-gray-400\r
                            `,children:[(0,N.jsx)(j,{className:`text-[#0057B8]`}),`Verified Client`]})]}),(0,N.jsxs)(`div`,{className:`flex items-center gap-1 mt-3`,children:[[...Array(e.rating)].map((e,t)=>(0,N.jsx)(Sr,{className:`text-[#FBBF24] text-xs`},t)),(0,N.jsxs)(`span`,{className:`text-[10px] text-gray-400 ml-1`,children:[e.rating,`.0`]})]}),(0,N.jsxs)(`p`,{className:`\r
                            text-gray-600\r
                            leading-6\r
                            text-[13px]\r
                            mt-3\r
                            line-clamp-3\r
                          `,children:[`"`,e.review,`"`]}),(0,N.jsxs)(`div`,{className:`\r
                            flex\r
                            items-center\r
                            gap-1.5\r
                            text-[10px]\r
                            text-gray-400\r
                            mt-3\r
                          `,children:[(0,N.jsx)(vi,{}),`Helpful experience`]}),(0,N.jsx)(`div`,{className:`\r
                            border-t\r
                            border-gray-100\r
                            mt-3\r
                            pt-3\r
                          `,children:(0,N.jsxs)(`div`,{className:`flex items-center gap-2.5`,children:[(0,N.jsx)(`div`,{className:`\r
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
                              `,children:r}),(0,N.jsxs)(`div`,{className:`min-w-0`,children:[(0,N.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,N.jsx)(`h3`,{className:`\r
                                    font-bold\r
                                    text-gray-800\r
                                    text-sm\r
                                    truncate\r
                                  `,children:e.name}),(0,N.jsx)(j,{className:`\r
                                    text-[#0057B8]\r
                                    text-[9px]\r
                                    flex-shrink-0\r
                                  `})]}),(0,N.jsx)(`p`,{className:`\r
                                  text-[#0057B8]\r
                                  text-xs\r
                                  font-medium\r
                                  truncate\r
                                `,children:e.company})]})]})}),(0,N.jsx)(`div`,{className:`\r
                            absolute\r
                            inset-0\r
                            rounded-2xl\r
                            border-2\r
                            border-transparent\r
                            group-hover:border-[#0057B8]/10\r
                            pointer-events-none\r
                            transition-all\r
                          `})]})},`${t}-${e.id}-${n}`)})},`testimonial-set-${t}`))})]})]}),(0,N.jsx)(`style`,{children:`
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

        `})]})}var bh=`/assets/world-map-DOTEf1o3.png`;function xh(){let[e,t]=(0,b.useState)({name:``,phone:``,email:``,service:``,message:``}),[n,r]=(0,b.useState)(!1),[i,a]=(0,b.useState)(``),[o,s]=(0,b.useState)(``),[c,l]=(0,b.useState)(null),u=e=>{let{name:n,value:r}=e.target;t(e=>({...e,[n]:r})),a(``),s(``)},d=e=>{let n=e.target.value.replace(/[^a-zA-Z\s.'-]/g,``).slice(0,100);t(e=>({...e,name:n})),a(``),s(``)},f=e=>{let n=e.target.value.replace(/\D/g,``).slice(0,10);t(e=>({...e,phone:n})),a(``),s(``)},p=()=>{let t=e.name.trim(),n=e.phone.trim(),r=e.email.trim(),i=e.service.trim(),a=e.message.trim();return!t||!n||!r||!i||!a?`Please fill in all the required fields.`:/^[a-zA-Z\s.'-]+$/.test(t)?/^[0-9]{10}$/.test(n)?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)?a.length<5?`Please enter a little more detail in your message.`:``:`Please enter a valid email address.`:`Please enter a valid 10-digit mobile number.`:`Please enter a valid name using letters only.`},m=async n=>{n.preventDefault(),a(``),s(``),l(null);let i=p();if(i){s(i);return}r(!0);try{let n={name:e.name.trim(),phone:e.phone.trim(),email:e.email.trim(),service:e.service.trim(),message:e.message.trim()};console.log(`Sending enquiry:`,n);let r=await fetch(`https://www.sarathinx.com/api/enquiries`,{method:`POST`,headers:{"Content-Type":`application/json`,Accept:`application/json`},body:JSON.stringify(n)});if(console.log(`API Status:`,r.status),!r.ok){let e=``;try{let t=await r.json();e=t?.message||t?.error||``}catch{}throw r.status===400?Error(e||`Invalid enquiry details. Please check your information.`):r.status===401?Error(`You are not authorized to submit this enquiry.`):r.status===403?Error(`Enquiry submission is blocked by the server. Please check the backend security configuration.`):r.status===404?Error(`Enquiry API was not found. Please check the backend URL.`):r.status>=500?Error(`Server error. Please try again after some time.`):Error(e||`Server returned ${r.status}.`)}let i=null;try{i=await r.json()}catch{i=null}console.log(`Enquiry saved successfully:`,i),l(n),a(`Thank you! Your enquiry has been submitted successfully. Our team will contact you shortly.`),t({name:``,phone:``,email:``,service:``,message:``})}catch(e){console.error(`Enquiry submission error:`,e),e instanceof TypeError&&e.message===`Failed to fetch`?s(`Unable to connect to the server. Please make sure the Spring Boot backend is running on port 8080.`):s(e?.message||`Unable to submit enquiry. Please try again.`)}finally{r(!1)}},h=()=>{if(!c)return;let e=`
Hello Sarathi NX,

I have submitted a travel enquiry through your website.

Name: ${c.name}
Mobile: ${c.phone}
Email: ${c.email}
Interested In: ${c.service}

Message:
${c.message}

Thank you.
    `.trim(),t=`https://wa.me/917666984626?text=${encodeURIComponent(e)}`;window.open(t,`_blank`,`noopener,noreferrer`)},g=[{icon:Mr,label:`CALL US`,content:(0,N.jsxs)(`div`,{className:`flex flex-wrap items-center gap-x-3 gap-y-1`,children:[(0,N.jsx)(`a`,{href:`tel:+917666984626`,className:`hover:text-[#fc6602] transition-colors`,children:`+91 766 698 4626`}),(0,N.jsx)(`span`,{className:`hidden sm:inline text-white/40`,children:`|`}),(0,N.jsx)(`a`,{href:`tel:+918657867181`,className:`hover:text-[#fc6602] transition-colors`,children:`+91 865 786 7181`})]})},{icon:ni,label:`EMAIL US`,content:(0,N.jsx)(`a`,{href:`mailto:sajid@sarathinx.com`,className:`hover:text-[#fc6602] transition-colors break-all`,children:`sajid@sarathinx.com`})},{icon:Lr,label:`OUR OFFICE`,content:(0,N.jsxs)(`div`,{className:`leading-5`,children:[`1st Floor, Office No. 026, Crystal Plaza CHS Ltd,`,(0,N.jsx)(`br`,{}),`Station Road, Mira Road East, Thane - 401107`]})},{icon:si,label:`WORKING HOURS`,content:(0,N.jsxs)(`div`,{className:`flex flex-wrap items-center gap-x-3 gap-y-1`,children:[(0,N.jsx)(`span`,{children:`Monday - Saturday`}),(0,N.jsx)(`span`,{className:`hidden sm:inline text-white/40`,children:`|`}),(0,N.jsx)(`span`,{className:`text-white/85`,children:`9:30 AM - 7:00 PM`})]})}],_=[{icon:ai,title:`Expert Assistance`,text:`Dedicated travel experts to assist you 24/7`},{icon:Xr,title:`Global Support`,text:`Worldwide network & trusted partners`},{icon:Er,title:`Reliable Service`,text:`Prompt, reliable & transparent solutions`},{icon:vr,title:`Customer First`,text:`Your journey is our priority`}];return(0,N.jsxs)(`section`,{id:`contact`,className:`\r
        relative\r
        overflow-hidden\r
        bg-[#F5F8FC]\r
        py-14\r
        md:py-16\r
        lg:py-20\r
      `,children:[(0,N.jsx)(`div`,{className:`\r
          absolute\r
          -top-32\r
          -left-32\r
          w-96\r
          h-96\r
          rounded-full\r
          bg-blue-100/40\r
          blur-3xl\r
          pointer-events-none\r
        `}),(0,N.jsx)(`div`,{className:`\r
          absolute\r
          -bottom-32\r
          -right-32\r
          w-96\r
          h-96\r
          rounded-full\r
          bg-orange-100/40\r
          blur-3xl\r
          pointer-events-none\r
        `}),(0,N.jsxs)(`div`,{className:`relative z-10 max-w-7xl mx-auto px-5 md:px-8`,children:[(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`text-center max-w-3xl mx-auto mb-8 md:mb-10`,children:[(0,N.jsxs)(`div`,{className:`flex items-center justify-center gap-[10px] mb-[7px]`,children:[(0,N.jsx)(`span`,{className:`\r
                  block\r
                  w-[49px]\r
                  h-[2px]\r
                  bg-gradient-to-r\r
                  from-[#0057B8]\r
                  to-[#F16A24]\r
                `}),(0,N.jsx)(`span`,{className:`\r
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
                `,children:`CONTACT US`}),(0,N.jsx)(`span`,{className:`\r
                  block\r
                  w-[49px]\r
                  h-[2px]\r
                  bg-gradient-to-r\r
                  from-[#F16A24]\r
                  to-[#0057B8]\r
                `})]}),(0,N.jsxs)(`h2`,{className:`\r
                text-center\r
                font-extrabold\r
                tracking-[-1.8px]\r
                leading-[1.02]\r
                text-[42px]\r
                sm:text-[46px]\r
                md:text-[52px]\r
                lg:text-[58px]\r
                text-[#071B41]\r
              `,children:[`Let's Plan Your`,` `,(0,N.jsx)(`span`,{className:`\r
                  bg-gradient-to-r\r
                  from-[#0057B8]\r
                  via-[#1454D8]\r
                  to-[#F16A24]\r
                  bg-clip-text\r
                  text-transparent\r
                `,children:`Journey.`})]}),(0,N.jsxs)(`div`,{className:`\r
                flex\r
                flex-wrap\r
                items-center\r
                justify-center\r
                gap-[10px]\r
                mt-[10px]\r
                text-center\r
              `,children:[(0,N.jsx)(`span`,{className:`\r
                  text-[18px]\r
                  md:text-[20px]\r
                  font-bold\r
                  leading-none\r
                  text-[#E76624]\r
                `,children:`Expert Travel Assistance`}),(0,N.jsx)(`span`,{className:`\r
                  text-[18px]\r
                  md:text-[20px]\r
                  font-bold\r
                  leading-none\r
                  text-[#19396D]\r
                `,children:`|`}),(0,N.jsx)(`span`,{className:`\r
                  text-[18px]\r
                  md:text-[20px]\r
                  font-bold\r
                  leading-none\r
                  text-[#19396D]\r
                `,children:`Let's make your journey simple.`})]}),(0,N.jsx)(`p`,{className:`\r
                max-w-[850px]\r
                mx-auto\r
                mt-[14px]\r
                text-center\r
                text-[15px]\r
                md:text-[16px]\r
                leading-[1.55]\r
                font-normal\r
                text-[#40516D]\r
              `,children:`Planning an exhibition, business trip or corporate journey? Talk to our travel experts and let us take care of the details.`})]})}),(0,N.jsxs)(`div`,{className:`\r
            grid\r
            lg:grid-cols-[1.215fr_1.045fr]\r
            gap-5\r
            lg:gap-6\r
            items-stretch\r
          `,children:[(0,N.jsx)($,{direction:`left`,children:(0,N.jsxs)(`div`,{className:`\r
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
              `,children:[(0,N.jsx)(`img`,{src:bh,alt:``,"aria-hidden":`true`,className:`\r
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
                `}),(0,N.jsx)(`div`,{className:`\r
                  absolute\r
                  -top-20\r
                  -right-20\r
                  w-48\r
                  h-48\r
                  rounded-full\r
                  bg-white/[0.04]\r
                  pointer-events-none\r
                `}),(0,N.jsx)(`div`,{className:`\r
                  absolute\r
                  -bottom-24\r
                  -left-20\r
                  w-56\r
                  h-56\r
                  rounded-full\r
                  bg-[#fc6602]/10\r
                  pointer-events-none\r
                `}),(0,N.jsxs)(`div`,{className:`relative z-10 h-full flex flex-col`,children:[(0,N.jsxs)(`div`,{className:`mb-6`,children:[(0,N.jsxs)(`div`,{className:`flex items-center gap-2 mb-3`,children:[(0,N.jsx)(Pr,{className:`\r
                        text-[#fc6602]\r
                        text-lg\r
                        rotate-[-10deg]\r
                      `}),(0,N.jsx)(`span`,{className:`\r
                        uppercase\r
                        tracking-[2.5px]\r
                        text-[11px]\r
                        md:text-xs\r
                        font-bold\r
                        text-[#fc6602]\r
                      `,children:`We're Here To Help`})]}),(0,N.jsxs)(`h3`,{className:`\r
                      text-3xl\r
                      md:text-4xl\r
                      font-extrabold\r
                      leading-[1.15]\r
                      max-w-md\r
                    `,children:[`Connect With Our`,(0,N.jsx)(`br`,{}),`Travel Experts`]}),(0,N.jsx)(`div`,{className:`\r
                      mt-4\r
                      w-20\r
                      h-[3px]\r
                      bg-gradient-to-r\r
                      from-[#fc6602]\r
                      to-transparent\r
                    `}),(0,N.jsx)(`p`,{className:`\r
                      mt-4\r
                      text-sm\r
                      md:text-base\r
                      text-white/85\r
                      leading-6\r
                      max-w-xl\r
                    `,children:`Get expert assistance for exhibitions, corporate trips, business travel and visa support.`})]}),(0,N.jsx)(`div`,{className:`space-y-2.5`,children:g.map((e,t)=>{let n=e.icon;return(0,N.jsxs)(`div`,{className:`\r
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
                        `,children:[(0,N.jsx)(`div`,{className:`\r
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
                          `,children:(0,N.jsx)(n,{className:`text-base md:text-lg`})}),(0,N.jsxs)(`div`,{className:`\r
                            min-w-0\r
                            text-[13px]\r
                            md:text-sm\r
                            leading-5\r
                          `,children:[(0,N.jsx)(`p`,{className:`\r
                              text-[#fc6602]\r
                              text-[10px]\r
                              md:text-[11px]\r
                              uppercase\r
                              tracking-wide\r
                              font-bold\r
                              mb-0.5\r
                            `,children:e.label}),(0,N.jsx)(`div`,{className:`font-medium text-white`,children:e.content})]})]},t)})}),(0,N.jsxs)(`a`,{href:`https://wa.me/917666984626`,target:`_blank`,rel:`noopener noreferrer`,className:`\r
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
                  `,children:[(0,N.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,N.jsx)(`div`,{className:`\r
                        w-10\r
                        h-10\r
                        rounded-full\r
                        bg-[#25D366]\r
                        flex\r
                        items-center\r
                        justify-center\r
                        shadow-lg\r
                      `,children:(0,N.jsx)(rr,{className:`text-xl text-white`})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{className:`font-bold text-sm`,children:`Chat with us on WhatsApp`}),(0,N.jsx)(`p`,{className:`text-[11px] text-white/85`,children:`Quick responses for your travel queries`})]})]}),(0,N.jsx)(M,{className:`\r
                      text-white\r
                      group-hover:translate-x-1\r
                      transition-transform\r
                    `})]})]})]})}),(0,N.jsx)($,{direction:`right`,children:(0,N.jsxs)(`div`,{className:`\r
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
              `,children:[(0,N.jsxs)(`div`,{className:`\r
                  flex\r
                  items-start\r
                  justify-between\r
                  gap-4\r
                  mb-7\r
                `,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`span`,{className:`\r
                      uppercase\r
                      tracking-[2.5px]\r
                      text-[11px]\r
                      font-bold\r
                      text-[#fc6602]\r
                    `,children:`Send An Enquiry`}),(0,N.jsx)(`h3`,{className:`\r
                      text-2xl\r
                      md:text-[30px]\r
                      font-extrabold\r
                      text-[#0A2144]\r
                      mt-1.5\r
                      leading-tight\r
                    `,children:`Tell Us About Your Trip`}),(0,N.jsx)(`p`,{className:`\r
                      text-gray-500\r
                      text-xs\r
                      md:text-sm\r
                      mt-2\r
                      leading-5\r
                      max-w-[430px]\r
                    `,children:`Share your requirements and our team will get back to you.`})]}),(0,N.jsx)(`div`,{className:`\r
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
                  `,children:(0,N.jsx)(Pr,{className:`text-lg rotate-[-8deg]`})})]}),i&&(0,N.jsxs)(`div`,{className:`\r
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
                  `,children:[(0,N.jsx)(j,{className:`\r
                      text-green-600\r
                      mt-0.5\r
                      shrink-0\r
                    `}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{className:`\r
                        text-sm\r
                        font-bold\r
                        text-green-700\r
                      `,children:`Enquiry Submitted`}),(0,N.jsx)(`p`,{className:`\r
                        mt-0.5\r
                        text-xs\r
                        leading-5\r
                        text-green-700\r
                      `,children:i})]})]}),o&&(0,N.jsxs)(`div`,{className:`\r
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
                  `,children:[(0,N.jsx)(ti,{className:`\r
                      text-red-600\r
                      mt-0.5\r
                      shrink-0\r
                    `}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{className:`\r
                        text-sm\r
                        font-bold\r
                        text-red-700\r
                      `,children:`Submission Failed`}),(0,N.jsx)(`p`,{className:`\r
                        mt-0.5\r
                        text-xs\r
                        leading-5\r
                        text-red-700\r
                      `,children:o})]})]}),(0,N.jsxs)(`form`,{onSubmit:m,className:`space-y-4`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`label`,{className:`\r
                      block\r
                      text-[11px]\r
                      font-bold\r
                      text-[#182B49]\r
                      mb-1.5\r
                    `,children:`Full Name`}),(0,N.jsxs)(`div`,{className:`relative`,children:[(0,N.jsx)(ur,{className:`\r
                        absolute\r
                        left-4\r
                        top-1/2\r
                        -translate-y-1/2\r
                        text-[#52637C]\r
                        text-sm\r
                        pointer-events-none\r
                      `}),(0,N.jsx)(`input`,{type:`text`,name:`name`,value:e.name,onChange:d,required:!0,autoComplete:`name`,maxLength:100,placeholder:`Enter your name`,className:`\r
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
                      `})]})]}),(0,N.jsxs)(`div`,{className:`\r
                    grid\r
                    sm:grid-cols-[0.85fr_1.15fr]\r
                    gap-3\r
                  `,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`label`,{className:`\r
                        block\r
                        text-[11px]\r
                        font-bold\r
                        text-[#182B49]\r
                        mb-1.5\r
                      `,children:`Phone Number`}),(0,N.jsxs)(`div`,{className:`relative`,children:[(0,N.jsx)(Mr,{className:`\r
                          absolute\r
                          left-4\r
                          top-1/2\r
                          -translate-y-1/2\r
                          text-[#52637C]\r
                          text-sm\r
                          pointer-events-none\r
                        `}),(0,N.jsx)(`input`,{type:`tel`,name:`phone`,value:e.phone,onChange:f,required:!0,inputMode:`numeric`,pattern:`[0-9]{10}`,maxLength:10,minLength:10,autoComplete:`tel`,placeholder:`10-digit mobile`,className:`\r
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
                        `})]})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`label`,{className:`\r
                        block\r
                        text-[11px]\r
                        font-bold\r
                        text-[#182B49]\r
                        mb-1.5\r
                      `,children:`Email Address`}),(0,N.jsxs)(`div`,{className:`relative`,children:[(0,N.jsx)(ni,{className:`\r
                          absolute\r
                          left-4\r
                          top-1/2\r
                          -translate-y-1/2\r
                          text-[#52637C]\r
                          text-sm\r
                          pointer-events-none\r
                        `}),(0,N.jsx)(`input`,{type:`email`,name:`email`,value:e.email,onChange:u,required:!0,autoComplete:`email`,placeholder:`Enter your email`,className:`\r
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
                        `})]})]})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`label`,{className:`\r
                      block\r
                      text-[11px]\r
                      font-bold\r
                      text-[#182B49]\r
                      mb-1.5\r
                    `,children:`Service Required`}),(0,N.jsxs)(`div`,{className:`relative`,children:[(0,N.jsx)(yr,{className:`\r
                        absolute\r
                        left-4\r
                        top-1/2\r
                        -translate-y-1/2\r
                        text-[#52637C]\r
                        text-sm\r
                        pointer-events-none\r
                        z-10\r
                      `}),(0,N.jsxs)(`select`,{name:`service`,value:e.service,onChange:u,required:!0,className:`\r
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
                      `,children:[(0,N.jsx)(`option`,{value:``,disabled:!0,children:`Select a service`}),(0,N.jsx)(`option`,{value:`International Exhibition Travel`,children:`International Exhibition Travel`}),(0,N.jsx)(`option`,{value:`Corporate Travel`,children:`Corporate Travel`}),(0,N.jsx)(`option`,{value:`Business Travel`,children:`Business Travel`}),(0,N.jsx)(`option`,{value:`Visa Assistance`,children:`Visa Assistance`}),(0,N.jsx)(`option`,{value:`Hotel Booking`,children:`Hotel Booking`}),(0,N.jsx)(`option`,{value:`Group Tours`,children:`Group Tours`})]}),(0,N.jsx)(`span`,{className:`\r
                        pointer-events-none\r
                        absolute\r
                        right-4\r
                        top-1/2\r
                        -translate-y-1/2\r
                        text-[#40516D]\r
                      `,children:`▾`})]})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`label`,{className:`\r
                      block\r
                      text-[11px]\r
                      font-bold\r
                      text-[#182B49]\r
                      mb-1.5\r
                    `,children:`Message`}),(0,N.jsxs)(`div`,{className:`relative`,children:[(0,N.jsx)(ai,{className:`\r
                        absolute\r
                        left-4\r
                        top-4\r
                        text-[#52637C]\r
                        text-sm\r
                        pointer-events-none\r
                      `}),(0,N.jsx)(`textarea`,{name:`message`,value:e.message,onChange:u,required:!0,rows:5,maxLength:1e3,placeholder:`Tell us about your travel requirements...`,className:`\r
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
                      `})]})]}),(0,N.jsx)(`button`,{type:`submit`,disabled:n,className:`\r
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
                  `,children:n?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`span`,{className:`\r
                          w-4\r
                          h-4\r
                          border-2\r
                          border-white/30\r
                          border-t-white\r
                          rounded-full\r
                          animate-spin\r
                        `}),(0,N.jsx)(`span`,{children:`Submitting...`})]}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`span`,{children:`Send Enquiry`}),(0,N.jsx)(Pr,{className:`\r
                          text-sm\r
                          rotate-[-8deg]\r
                          group-hover:translate-x-2\r
                          group-hover:-translate-y-1\r
                          transition-transform\r
                          duration-500\r
                        `})]})}),c&&!n&&(0,N.jsxs)(`button`,{type:`button`,onClick:h,className:`\r
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
                    `,children:[(0,N.jsx)(rr,{className:`\r
                        text-lg\r
                        group-hover:scale-110\r
                        transition-transform\r
                      `}),(0,N.jsx)(`span`,{children:`Continue on WhatsApp`}),(0,N.jsx)(M,{className:`\r
                        text-xs\r
                        group-hover:translate-x-1\r
                        transition-transform\r
                      `})]})]})]})})]}),(0,N.jsx)($,{children:(0,N.jsx)(`div`,{className:`\r
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
            `,children:(0,N.jsx)(`div`,{className:`\r
                grid\r
                grid-cols-1\r
                sm:grid-cols-2\r
                lg:grid-cols-4\r
              `,children:_.map((e,t)=>{let n=e.icon;return(0,N.jsxs)(`div`,{className:`
                      flex
                      items-center
                      gap-4
                      px-3
                      md:px-5
                      py-3
                      ${t===_.length-1?``:`lg:border-r border-gray-200`}
                    `,children:[(0,N.jsx)(`div`,{className:`\r
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
                      `,children:(0,N.jsx)(n,{className:`text-lg`})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h4`,{className:`\r
                          text-sm\r
                          font-extrabold\r
                          text-[#0A3A82]\r
                        `,children:e.title}),(0,N.jsx)(`p`,{className:`\r
                          mt-1\r
                          text-xs\r
                          md:text-[13px]\r
                          text-gray-600\r
                          leading-5\r
                          max-w-[190px]\r
                        `,children:e.text})]})]},t)})})})})]}),(0,N.jsx)(`style`,{children:`

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

      `})]})}var Sh=[{title:`Home`,href:`/`},{title:`About Us`,href:`/about`},{title:`Services`,href:`/services`},{title:`Exhibitions`,href:`/exhibitions`},{title:`Gallery`,href:`/gallery`},{title:`Contact Us`,href:`/contact`}],Ch=[`Flights & Air Travel`,`Hotels & Accommodation`,`Visa & Travel Documentation`,`Travel Insurance & Forex`,`Transfers & Car Rentals`,`Domestic & International Holidays`,`Cruise & Ferry Bookings`,`Business & Corporate Travel`,`MICE & Exhibition Travel`,`Group & Customized Tours`];function wh(){return(0,N.jsxs)(`footer`,{className:`\r
        relative\r
        overflow-hidden\r
        bg-[#031B4E]\r
        text-white\r
        rounded-t-[24px]\r
      `,children:[(0,N.jsxs)(`div`,{className:`\r
          absolute\r
          inset-0\r
          pointer-events-none\r
          overflow-hidden\r
        `,children:[(0,N.jsx)(`div`,{className:`\r
            absolute\r
            -left-32\r
            -bottom-32\r
            w-[450px]\r
            h-[450px]\r
            rounded-full\r
            bg-[#0057B8]/20\r
            blur-3xl\r
          `}),(0,N.jsx)(`div`,{className:`\r
            absolute\r
            right-[-160px]\r
            top-[-160px]\r
            w-[420px]\r
            h-[420px]\r
            rounded-full\r
            bg-[#0057B8]/10\r
            blur-3xl\r
          `}),(0,N.jsx)(`div`,{className:`\r
            absolute\r
            left-[-60px]\r
            bottom-[-180px]\r
            w-[550px]\r
            h-[550px]\r
            rounded-full\r
            border\r
            border-[#0057B8]/20\r
          `}),(0,N.jsx)(`div`,{className:`\r
            absolute\r
            left-[10px]\r
            bottom-[-130px]\r
            w-[450px]\r
            h-[450px]\r
            rounded-full\r
            border\r
            border-[#fc6602]/15\r
          `}),(0,N.jsx)(`div`,{className:`\r
            absolute\r
            left-[70px]\r
            bottom-[-80px]\r
            w-[340px]\r
            h-[340px]\r
            rounded-full\r
            border\r
            border-white/[0.04]\r
          `}),(0,N.jsx)(`div`,{className:`\r
            absolute\r
            left-[50px]\r
            bottom-[25px]\r
            w-[450px]\r
            h-[160px]\r
            border-t\r
            border-[#fc6602]/20\r
            rounded-[50%]\r
            rotate-[-12deg]\r
          `}),(0,N.jsx)(`div`,{className:`\r
            absolute\r
            left-[80px]\r
            bottom-[50px]\r
            w-[390px]\r
            h-[130px]\r
            border-t\r
            border-[#0057B8]/30\r
            rounded-[50%]\r
            rotate-[8deg]\r
          `})]}),(0,N.jsx)(`div`,{className:`\r
          relative\r
          z-10\r
          max-w-[1450px]\r
          mx-auto\r
          px-6\r
          md:px-10\r
          lg:px-14\r
          py-8\r
          md:py-9\r
        `,children:(0,N.jsxs)(`div`,{className:`\r
            grid\r
            grid-cols-1\r
            sm:grid-cols-2\r
            lg:grid-cols-[1.3fr_0.8fr_1.15fr_1.35fr]\r
            gap-y-8\r
            lg:gap-y-0\r
          `,children:[(0,N.jsxs)(`div`,{className:`\r
              pr-0\r
              lg:pr-8\r
              pb-8\r
              lg:pb-0\r
            `,children:[(0,N.jsx)(Mn,{to:`/`,className:`\r
                inline-flex\r
                items-center\r
                justify-center\r
                bg-white\r
                rounded-xl\r
                px-4\r
                py-3\r
                shadow-[0_8px_24px_rgba(0,0,0,0.18)]\r
                hover:-translate-y-1\r
                transition-all\r
                duration-300\r
              `,children:(0,N.jsx)(`img`,{src:`/sarathi-logo.png`,alt:`Sarathi NX`,className:`\r
                  w-44\r
                  md:w-48\r
                  h-auto\r
                  object-contain\r
                `})}),(0,N.jsx)(`h3`,{className:`\r
                mt-5\r
                text-lg\r
                md:text-xl\r
                font-extrabold\r
                text-white\r
              `,children:`We Plan. You Travel. We Care.`}),(0,N.jsxs)(`div`,{className:`mt-3 flex items-center gap-1`,children:[(0,N.jsx)(`span`,{className:`w-8 h-[3px] rounded-full bg-[#fc6602]`}),(0,N.jsx)(`span`,{className:`w-4 h-[3px] rounded-full bg-[#0057B8]`})]}),(0,N.jsx)(`p`,{className:`\r
                mt-4\r
                max-w-[350px]\r
                text-gray-300\r
                text-sm\r
                leading-5.5\r
              `,children:`Sarathi NX Pvt. Ltd. is a professionally managed travel company specializing in international exhibition travel, business travel, corporate travel, MICE, group tours and global tourism.`}),(0,N.jsxs)(`div`,{className:`mt-5`,children:[(0,N.jsx)(`h4`,{className:`text-sm font-bold text-white mb-3`,children:`Follow Us`}),(0,N.jsxs)(`div`,{className:`flex items-center gap-2.5`,children:[(0,N.jsx)(`a`,{href:`#`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Facebook`,className:`\r
                    w-9\r
                    h-9\r
                    rounded-full\r
                    bg-[#1877F2]\r
                    flex\r
                    items-center\r
                    justify-center\r
                    text-white\r
                    shadow-md\r
                    hover:-translate-y-1\r
                    hover:scale-110\r
                    transition-all\r
                    duration-300\r
                  `,children:(0,N.jsx)(sr,{className:`text-sm`})}),(0,N.jsx)(`a`,{href:`https://www.instagram.com/sarathi_nx_travel/`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Instagram`,className:`\r
                    w-9\r
                    h-9\r
                    rounded-full\r
                    bg-gradient-to-br\r
                    from-[#F58529]\r
                    via-[#DD2A7B]\r
                    to-[#515BD4]\r
                    flex\r
                    items-center\r
                    justify-center\r
                    text-white\r
                    shadow-md\r
                    hover:-translate-y-1\r
                    hover:scale-110\r
                    transition-all\r
                    duration-300\r
                  `,children:(0,N.jsx)(ar,{className:`text-sm`})}),(0,N.jsx)(`a`,{href:`#`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`LinkedIn`,className:`\r
                    w-9\r
                    h-9\r
                    rounded-full\r
                    bg-[#0A66C2]\r
                    flex\r
                    items-center\r
                    justify-center\r
                    text-white\r
                    shadow-md\r
                    hover:-translate-y-1\r
                    hover:scale-110\r
                    transition-all\r
                    duration-300\r
                  `,children:(0,N.jsx)(ir,{className:`text-sm`})}),(0,N.jsx)(`a`,{href:`#`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`YouTube`,className:`\r
                    w-9\r
                    h-9\r
                    rounded-full\r
                    bg-[#FF0000]\r
                    flex\r
                    items-center\r
                    justify-center\r
                    text-white\r
                    shadow-md\r
                    hover:-translate-y-1\r
                    hover:scale-110\r
                    transition-all\r
                    duration-300\r
                  `,children:(0,N.jsx)(nr,{className:`text-sm`})}),(0,N.jsx)(`a`,{href:`https://wa.me/917666984626?text=Hello%20Sarathi%20NX%2C%20I%20would%20like%20to%20know%20more%20about%20your%20travel%20services.`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`WhatsApp`,className:`\r
                    w-9\r
                    h-9\r
                    rounded-full\r
                    bg-[#25D366]\r
                    flex\r
                    items-center\r
                    justify-center\r
                    text-white\r
                    shadow-md\r
                    hover:-translate-y-1\r
                    hover:scale-110\r
                    transition-all\r
                    duration-300\r
                  `,children:(0,N.jsx)(rr,{className:`text-sm`})})]})]})]}),(0,N.jsxs)(`div`,{className:`\r
              lg:border-l\r
              lg:border-white/15\r
              px-0\r
              sm:px-6\r
              lg:px-8\r
              pb-8\r
              lg:pb-0\r
            `,children:[(0,N.jsx)(`h3`,{className:`text-lg font-extrabold text-white`,children:`Quick Links`}),(0,N.jsxs)(`div`,{className:`flex items-center gap-1 mt-3 mb-4`,children:[(0,N.jsx)(`span`,{className:`w-7 h-[3px] rounded-full bg-[#fc6602]`}),(0,N.jsx)(`span`,{className:`w-4 h-[3px] rounded-full bg-[#0057B8]`})]}),(0,N.jsx)(`ul`,{className:`space-y-2.5`,children:Sh.map(e=>(0,N.jsx)(`li`,{children:(0,N.jsxs)(Mn,{to:e.href,className:`\r
                      group\r
                      flex\r
                      items-center\r
                      gap-2.5\r
                      text-gray-300\r
                      text-sm\r
                      hover:text-white\r
                      transition-all\r
                      duration-300\r
                    `,children:[(0,N.jsx)(M,{className:`\r
                        text-[#fc6602]\r
                        text-[10px]\r
                        group-hover:translate-x-1\r
                        transition-transform\r
                      `}),(0,N.jsx)(`span`,{children:e.title})]})},e.title))})]}),(0,N.jsxs)(`div`,{className:`\r
              lg:border-l\r
              lg:border-white/15\r
              px-0\r
              sm:px-6\r
              lg:px-7\r
              pb-8\r
              lg:pb-0\r
            `,children:[(0,N.jsx)(`h3`,{className:`text-lg font-extrabold text-white`,children:`Our Services`}),(0,N.jsxs)(`div`,{className:`flex items-center gap-1 mt-3 mb-4`,children:[(0,N.jsx)(`span`,{className:`w-7 h-[3px] rounded-full bg-[#fc6602]`}),(0,N.jsx)(`span`,{className:`w-4 h-[3px] rounded-full bg-[#0057B8]`})]}),(0,N.jsx)(`ul`,{className:`space-y-2`,children:Ch.map(e=>(0,N.jsx)(`li`,{children:(0,N.jsxs)(Mn,{to:`/services`,className:`\r
                      group\r
                      flex\r
                      items-start\r
                      gap-2.5\r
                      text-gray-300\r
                      text-[13px]\r
                      hover:text-white\r
                      transition-all\r
                      duration-300\r
                    `,children:[(0,N.jsx)(M,{className:`\r
                        text-[#fc6602]\r
                        text-[9px]\r
                        mt-1\r
                        shrink-0\r
                        group-hover:translate-x-1\r
                        transition-transform\r
                      `}),(0,N.jsx)(`span`,{children:e})]})},e))})]}),(0,N.jsxs)(`div`,{className:`\r
              lg:border-l\r
              lg:border-white/15\r
              px-0\r
              sm:px-6\r
              lg:px-7\r
              xl:px-8\r
              min-w-0\r
            `,children:[(0,N.jsx)(`h3`,{className:`text-lg font-extrabold text-white`,children:`Contact Us`}),(0,N.jsxs)(`div`,{className:`flex items-center gap-1 mt-3 mb-5`,children:[(0,N.jsx)(`span`,{className:`w-7 h-[3px] rounded-full bg-[#fc6602]`}),(0,N.jsx)(`span`,{className:`w-4 h-[3px] rounded-full bg-[#0057B8]`})]}),(0,N.jsxs)(`div`,{className:`space-y-4`,children:[(0,N.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,N.jsx)(`div`,{className:`\r
                    w-10\r
                    h-10\r
                    shrink-0\r
                    rounded-full\r
                    border\r
                    border-[#fc6602]/40\r
                    bg-white/[0.03]\r
                    flex\r
                    items-center\r
                    justify-center\r
                  `,children:(0,N.jsx)(Lr,{className:`text-[#fc6602] text-sm`})}),(0,N.jsx)(`div`,{className:`min-w-0 flex-1`,children:(0,N.jsxs)(`p`,{className:`\r
                      text-gray-300\r
                      text-[13px]\r
                      leading-5\r
                    `,children:[`1st Floor, Office No. 026, Crystal Plaza CHS Ltd,`,(0,N.jsx)(`br`,{}),`Station Road, Mira Road East, Thane - 401107`]})})]}),(0,N.jsx)(`div`,{className:`h-px bg-white/10`}),(0,N.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,N.jsx)(`div`,{className:`\r
                    w-10\r
                    h-10\r
                    shrink-0\r
                    rounded-full\r
                    border\r
                    border-[#fc6602]/40\r
                    bg-white/[0.03]\r
                    flex\r
                    items-center\r
                    justify-center\r
                  `,children:(0,N.jsx)(Mr,{className:`text-[#fc6602] text-sm`})}),(0,N.jsxs)(`div`,{className:`space-y-1 pt-1`,children:[(0,N.jsx)(`a`,{href:`tel:+917666984626`,className:`\r
                      block\r
                      text-gray-300\r
                      text-sm\r
                      hover:text-white\r
                      transition\r
                    `,children:`+91 766 698 4626`}),(0,N.jsx)(`a`,{href:`tel:+918657867181`,className:`\r
                      block\r
                      text-gray-300\r
                      text-sm\r
                      hover:text-white\r
                      transition\r
                    `,children:`+91 865 786 7181`})]})]}),(0,N.jsx)(`div`,{className:`h-px bg-white/10`}),(0,N.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,N.jsx)(`div`,{className:`\r
                    w-10\r
                    h-10\r
                    shrink-0\r
                    rounded-full\r
                    border\r
                    border-[#fc6602]/40\r
                    bg-white/[0.03]\r
                    flex\r
                    items-center\r
                    justify-center\r
                  `,children:(0,N.jsx)(ni,{className:`text-[#fc6602] text-sm`})}),(0,N.jsx)(`a`,{href:`mailto:sajid@sarathinx.com`,className:`\r
                    text-gray-300\r
                    text-sm\r
                    hover:text-white\r
                    transition\r
                    break-all\r
                    pt-2\r
                  `,children:`sajid@sarathinx.com`})]})]})]})]})}),(0,N.jsx)(`div`,{className:`\r
          relative\r
          z-10\r
          mx-4\r
          md:mx-8\r
          lg:mx-auto\r
          max-w-[1350px]\r
          border\r
          border-white/15\r
          rounded-xl\r
          bg-[#06265F]/70\r
          backdrop-blur-sm\r
          mb-0\r
        `,children:(0,N.jsxs)(`div`,{className:`\r
            grid\r
            grid-cols-1\r
            md:grid-cols-3\r
            items-center\r
          `,children:[(0,N.jsx)(`div`,{className:`\r
              px-5\r
              md:px-6\r
              py-3.5\r
              text-center\r
              md:text-left\r
              border-b\r
              md:border-b-0\r
              md:border-r\r
              border-white/15\r
            `,children:(0,N.jsx)(`p`,{className:`text-gray-300 text-xs md:text-sm`,children:`© 2020 Sarathi NX Pvt. Ltd. All Rights Reserved.`})}),(0,N.jsxs)(`div`,{className:`\r
              px-5\r
              md:px-6\r
              py-3.5\r
              flex\r
              items-center\r
              justify-center\r
              gap-3\r
              border-b\r
              md:border-b-0\r
              md:border-r\r
              border-white/15\r
            `,children:[(0,N.jsx)(`div`,{className:`\r
                w-9\r
                h-9\r
                rounded-full\r
                flex\r
                items-center\r
                justify-center\r
                bg-[#fc6602]/10\r
                border\r
                border-[#fc6602]/30\r
                shrink-0\r
              `,children:(0,N.jsx)(Gr,{className:`text-[#fc6602] text-sm`})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{className:`text-gray-300 text-[11px]`,children:`Need Help? Call Us`}),(0,N.jsxs)(`div`,{className:`\r
                  flex\r
                  flex-wrap\r
                  items-center\r
                  gap-2\r
                  mt-0.5\r
                  text-xs\r
                  font-bold\r
                  text-white\r
                `,children:[(0,N.jsx)(`a`,{href:`tel:+917666984626`,className:`hover:text-[#fc6602] transition`,children:`+91 766 698 4626`}),(0,N.jsx)(`span`,{className:`text-gray-500`,children:`|`}),(0,N.jsx)(`a`,{href:`tel:+918657867181`,className:`hover:text-[#fc6602] transition`,children:`+91 865 786 7181`})]})]})]}),(0,N.jsxs)(`div`,{className:`\r
              px-5\r
              md:px-6\r
              py-3.5\r
              flex\r
              items-center\r
              justify-center\r
              gap-3\r
            `,children:[(0,N.jsx)(Pr,{className:`text-[#fc6602] text-base`}),(0,N.jsx)(`span`,{className:`\r
                text-[#60A5FA]\r
                text-xs\r
                md:text-sm\r
                font-semibold\r
              `,children:`We Plan. You Travel. We Care.`})]})]})}),(0,N.jsx)(`div`,{className:`h-3`})]})}function Th(){let[e,t]=(0,b.useState)(!1);return(0,b.useEffect)(()=>{let e=()=>{t(window.scrollY>400)};return window.addEventListener(`scroll`,e),()=>window.removeEventListener(`scroll`,e)},[]),e?(0,N.jsx)(`button`,{onClick:()=>{window.scrollTo({top:0,behavior:`smooth`})},"aria-label":`Back to top`,className:`fixed bottom-24 right-6 z-100 w-12 h-12 rounded-full bg-[#0F766E] text-white flex items-center justify-center shadow-xl hover:bg-[#115E59] hover:scale-110 transition-all duration-300`,children:(0,N.jsx)(gi,{})}):null}var Eh=[{title:`CMEF`,description:`China International Medical Equipment Fair connecting global healthcare technology and medical equipment leaders.`,location:`Shanghai & Beijing, China`,image:`/assets/cmef-RyyrA3-w.jpg`,link:`https://www.cmef.com.cn/en`,external:!0},{title:`MEDICA`,description:`World's leading trade fair for the medical sector, bringing together healthcare professionals and innovators.`,location:`Düsseldorf, Germany`,image:`/assets/medica-D7yFIo1U.jpg`,link:`https://www.medica-tradefair.com/`,external:!0},{title:`ARAB HEALTH`,description:`One of the largest healthcare exhibitions in the Middle East featuring global medical technology and solutions.`,location:`Dubai, UAE`,image:`/assets/arabHealth-Cxm5Lz1g.jpg`,link:`https://www.worldhealthexpo.com/events/labs/dubai/`,external:!0},{title:`WELDING & CUTTING`,description:`Beijing Essen Welding & Cutting Fair showcasing advanced welding, cutting and industrial technologies.`,location:`Beijing, China`,image:`/assets/welding-DrgIvwoJ.jpg`,link:`#`,external:!1},{title:`MEDLAB`,description:`A leading laboratory and diagnostics exhibition connecting professionals with the latest healthcare technologies.`,location:`Dubai, UAE`,image:`/assets/medlab-CvxsVjL2.jpg`,link:`https://www.worldhealthexpo.com/events/labs/dubai/`,external:!0},{title:`CANTON FAIR`,description:`China Import & Export Fair connecting international buyers with manufacturers and suppliers from China.`,location:`Guangzhou, China`,image:`/assets/cantonFair-Cfn21lBq.jpg`,link:`#`,external:!1},{title:`ITMA ASIA + CITME`,description:`Asia's leading textile machinery exhibition showcasing innovative textile and garment manufacturing technologies.`,location:`Shanghai, China`,image:`/assets/itma-DDC9jpnX.jpg`,link:`#`,external:!1},{title:`OTHER INTERNATIONAL TRADE FAIRS`,description:`We manage travel for various international exhibitions worldwide.`,location:`International Exhibitions Worldwide`,image:`/assets/otherInternationalTradeFairs-BwHzuEcx.jpg`,link:`/exhibitions`,external:!1}],Dh=[...Eh,...Eh];function Oh(){return(0,N.jsxs)(`section`,{id:`exhibitions`,className:`\r
        relative\r
        py-16\r
        md:py-20\r
        bg-gradient-to-b\r
        from-white\r
        via-[#F8FBFF]\r
        to-white\r
        overflow-hidden\r
      `,children:[(0,N.jsx)(`div`,{className:`\r
          absolute\r
          top-10\r
          -left-24\r
          w-72\r
          h-72\r
          bg-[#0057B8]/5\r
          rounded-full\r
          blur-3xl\r
          pointer-events-none\r
        `}),(0,N.jsx)(`div`,{className:`\r
          absolute\r
          bottom-10\r
          -right-24\r
          w-72\r
          h-72\r
          bg-[#fc6602]/5\r
          rounded-full\r
          blur-3xl\r
          pointer-events-none\r
        `}),(0,N.jsxs)(`div`,{className:`relative max-w-7xl mx-auto px-6`,children:[(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`flex items-center justify-center gap-[10px] mb-[7px]`,children:[(0,N.jsx)(`span`,{className:`\r
                block\r
                w-[49px]\r
                h-[2px]\r
                bg-gradient-to-r\r
                from-[#0057B8]\r
                to-[#F16A24]\r
              `}),(0,N.jsx)(`span`,{className:`\r
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
              `,children:`International Exhibitions`}),(0,N.jsx)(`span`,{className:`\r
                block\r
                w-[49px]\r
                h-[2px]\r
                bg-gradient-to-r\r
                from-[#F16A24]\r
                to-[#0057B8]\r
              `})]})}),(0,N.jsx)($,{delay:.05,children:(0,N.jsxs)(`h2`,{className:`\r
              text-center\r
              font-extrabold\r
              tracking-[-1.8px]\r
              leading-[1.02]\r
              text-[48px]\r
              md:text-[52px]\r
              lg:text-[58px]\r
              text-[#071B41]\r
            `,children:[`Your Gateway to`,` `,(0,N.jsx)(`span`,{className:`\r
                bg-gradient-to-r\r
                from-[#0057B8]\r
                via-[#1454D8]\r
                to-[#F16A24]\r
                bg-clip-text\r
                text-transparent\r
              `,children:`Global Exhibitions`})]})}),(0,N.jsx)($,{delay:.1,children:(0,N.jsx)(`p`,{className:`\r
              text-center\r
              max-w-3xl\r
              mx-auto\r
              mt-5\r
              text-gray-600\r
              leading-7\r
              text-sm\r
              md:text-base\r
            `,children:`Discover leading international exhibitions and trade fairs with complete travel assistance from Sarathi NX. We make your business journey simple, comfortable and stress-free.`})}),(0,N.jsxs)(`div`,{className:`\r
            relative\r
            mt-10\r
            w-full\r
            overflow-hidden\r
            py-5\r
          `,children:[(0,N.jsx)(`div`,{className:`\r
              absolute\r
              left-0\r
              top-0\r
              bottom-0\r
              w-16\r
              md:w-24\r
              z-20\r
              pointer-events-none\r
              bg-gradient-to-r\r
              from-[#F8FBFF]\r
              to-transparent\r
            `}),(0,N.jsx)(`div`,{className:`\r
              absolute\r
              right-0\r
              top-0\r
              bottom-0\r
              w-16\r
              md:w-24\r
              z-20\r
              pointer-events-none\r
              bg-gradient-to-l\r
              from-[#F8FBFF]\r
              to-transparent\r
            `}),(0,N.jsx)(`div`,{className:`exhibition-marquee`,children:Dh.map((e,t)=>(0,N.jsxs)(Zm.div,{whileHover:{scale:1.05,y:-8},transition:{duration:.35,ease:`easeOut`},className:`\r
                  exhibition-card\r
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
                  shrink-0\r
                  w-[85vw]\r
                  sm:w-[420px]\r
                  md:w-[calc((100vw-72px)/2)]\r
                  lg:w-[390px]\r
                  xl:w-[400px]\r
                `,children:[(0,N.jsx)(`div`,{className:`\r
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
                  `}),(0,N.jsxs)(`div`,{className:`\r
                    relative\r
                    h-[205px]\r
                    overflow-hidden\r
                  `,children:[(0,N.jsx)(`img`,{src:e.image,alt:e.title,className:`\r
                      w-full\r
                      h-full\r
                      object-cover\r
                      transition-transform\r
                      duration-700\r
                      ease-out\r
                      group-hover:scale-110\r
                    `}),(0,N.jsx)(`div`,{className:`\r
                      absolute\r
                      inset-0\r
                      bg-gradient-to-t\r
                      from-black/75\r
                      via-black/20\r
                      to-transparent\r
                    `}),(0,N.jsx)(`div`,{className:`\r
                      absolute\r
                      inset-0\r
                      bg-gradient-to-tr\r
                      from-[#0057B8]/20\r
                      via-transparent\r
                      to-[#fc6602]/20\r
                      opacity-70\r
                    `}),(0,N.jsxs)(`div`,{className:`\r
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
                    `,children:[(0,N.jsx)(`div`,{className:`\r
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
                      `,children:(0,N.jsx)(Lr,{})}),(0,N.jsx)(`span`,{className:`drop-shadow-md`,children:e.location})]})]}),(0,N.jsxs)(`div`,{className:`\r
                    relative\r
                    p-6\r
                    md:p-7\r
                    flex\r
                    flex-col\r
                    flex-1\r
                  `,children:[(0,N.jsx)(`div`,{className:`\r
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
                    `}),(0,N.jsxs)(`div`,{className:`relative z-10`,children:[(0,N.jsxs)(`div`,{className:`\r
                        inline-flex\r
                        items-center\r
                        gap-2\r
                        text-[11px]\r
                        font-bold\r
                        uppercase\r
                        tracking-[1.5px]\r
                        text-[#0057B8]\r
                        mb-2\r
                      `,children:[(0,N.jsx)(`span`,{className:`\r
                          w-5\r
                          h-[2px]\r
                          bg-gradient-to-r\r
                          from-[#0057B8]\r
                          to-[#fc6602]\r
                          rounded-full\r
                        `}),`International Event`]}),(0,N.jsx)(`h3`,{className:`\r
                        text-xl\r
                        md:text-2xl\r
                        font-extrabold\r
                        text-gray-800\r
                        leading-tight\r
                        group-hover:text-[#0057B8]\r
                        transition-colors\r
                        duration-300\r
                      `,children:e.title}),(0,N.jsx)(`p`,{className:`\r
                        mt-3\r
                        text-gray-600\r
                        text-sm\r
                        leading-6\r
                        line-clamp-3\r
                      `,children:e.description})]}),(0,N.jsxs)(`div`,{className:`\r
                      relative\r
                      z-10\r
                      mt-auto\r
                      pt-6\r
                      flex\r
                      items-center\r
                      justify-between\r
                      gap-3\r
                    `,children:[(0,N.jsxs)(`div`,{className:`\r
                        flex\r
                        items-center\r
                        gap-2\r
                        text-gray-400\r
                        text-xs\r
                        font-medium\r
                      `,children:[(0,N.jsx)(di,{}),(0,N.jsx)(`span`,{children:`Global Exhibition`})]}),(0,N.jsxs)(`a`,{href:e.link,target:e.external?`_blank`:void 0,rel:e.external?`noopener noreferrer`:void 0,onClick:t=>{e.link===`#`&&t.preventDefault()},className:`\r
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
                      `,children:[`Explore`,(0,N.jsx)(M,{className:`\r
                          text-[10px]\r
                          transition-transform\r
                          duration-300\r
                          group-hover/explore:translate-x-1\r
                        `})]})]})]})]},`${e.title}-${t}`))})]})]}),(0,N.jsx)(`style`,{children:`

        /* ================================================
           CONTINUOUS RUNNING ANIMATION
        ================================================ */

        @keyframes exhibitionMarquee {

          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }

        }


        .exhibition-marquee {

          display: flex;

          align-items: stretch;

          gap: 24px;

          width: max-content;

          animation:
            exhibitionMarquee
            45s
            linear
            infinite;

          will-change: transform;

        }


        /* ================================================
           PAUSE WHEN CURSOR IS ON ANY CARD
        ================================================ */

        .exhibition-marquee:has(.exhibition-card:hover) {

          animation-play-state: paused;

        }


        /* ================================================
           CARD HOVER
        ================================================ */

        .exhibition-card {

          transition:
            box-shadow 0.4s ease,
            border-color 0.4s ease;

        }


        .exhibition-card:hover {

          border-color: rgba(0, 87, 184, 0.18);

        }


        /* ================================================
           MOBILE
        ================================================ */

        @media (max-width: 640px) {

          .exhibition-marquee {

            gap: 16px;

            animation-duration: 38s;

          }

        }


        /* ================================================
           TABLET
        ================================================ */

        @media (min-width: 641px) and (max-width: 1023px) {

          .exhibition-marquee {

            gap: 20px;

            animation-duration: 42s;

          }

        }


        /* ================================================
           REDUCED MOTION
        ================================================ */

        @media (prefers-reduced-motion: reduce) {

          .exhibition-marquee {

            animation-play-state: paused;

          }

        }

      `})]})}function kh(){return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(th,{}),(0,N.jsx)(rh,{}),(0,N.jsx)(dh,{}),(0,N.jsx)(Oh,{}),(0,N.jsx)(hh,{}),(0,N.jsx)(ph,{}),(0,N.jsx)(yh,{}),(0,N.jsx)(xh,{}),(0,N.jsx)(Th,{})]})}var Ah=[{icon:Xr,number:`01`,title:`Global Reach`,text:`Travel assistance for international destinations, exhibitions and business journeys.`},{icon:lr,number:`02`,title:`Expert Team`,text:`Professional travel experts who understand the requirements of business travellers.`},{icon:xr,number:`03`,title:`Complete Support`,text:`Flights, hotels, visas and destination support managed through one trusted partner.`},{icon:qr,number:`04`,title:`Trusted Service`,text:`Transparent communication and dependable assistance throughout your journey.`}],jh=[{icon:Ar,title:`International Travel`},{icon:fi,title:`Exhibition Travel`},{icon:Nr,title:`Visa Assistance`},{icon:Hr,title:`Hotel & Accommodation`}];function Mh(){return(0,N.jsxs)(`main`,{className:`bg-white overflow-hidden`,children:[(0,N.jsxs)(`section`,{className:`relative h-[420px] sm:h-[440px] md:h-[480px] overflow-hidden`,children:[(0,N.jsx)(`img`,{src:`https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=90`,alt:`International Travel`,className:`\r
            absolute\r
            inset-0\r
            w-full\r
            h-full\r
            object-cover\r
            object-center\r
          `}),(0,N.jsx)(`div`,{className:`\r
            absolute\r
            inset-0\r
            bg-gradient-to-r\r
            from-[#041d3d]/90\r
            via-[#073b70]/65\r
            to-[#073b70]/10\r
          `}),(0,N.jsx)(`div`,{className:`\r
            absolute\r
            bottom-0\r
            left-0\r
            right-0\r
            h-28\r
            bg-gradient-to-t\r
            from-black/30\r
            to-transparent\r
          `}),(0,N.jsx)(`div`,{className:`\r
            relative\r
            z-10\r
            max-w-[1280px]\r
            mx-auto\r
            px-5\r
            sm:px-8\r
            lg:px-10\r
            pt-20\r
            sm:pt-24\r
            md:pt-28\r
          `,children:(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`max-w-[700px]`,children:[(0,N.jsxs)(`div`,{className:`flex items-center gap-3 mb-4`,children:[(0,N.jsx)(`span`,{className:`w-9 h-[2px] bg-orange-500`}),(0,N.jsx)(`span`,{className:`\r
                    text-white\r
                    text-[10px]\r
                    sm:text-xs\r
                    md:text-sm\r
                    font-bold\r
                    tracking-[2.5px]\r
                    uppercase\r
                  `,children:`About Sarathi NX`})]}),(0,N.jsxs)(`h1`,{className:`\r
                  text-white\r
                  text-3xl\r
                  sm:text-4xl\r
                  md:text-5xl\r
                  lg:text-[58px]\r
                  font-extrabold\r
                  leading-[1.05]\r
                  drop-shadow-xl\r
                `,children:[`Connecting You`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{className:`text-orange-500`,children:`To The World.`})]}),(0,N.jsx)(`p`,{className:`\r
                  mt-4\r
                  text-white/90\r
                  text-sm\r
                  md:text-base\r
                  leading-6\r
                  max-w-[590px]\r
                `,children:`Sarathi NX is a professionally managed travel company providing reliable solutions for international business travel, exhibitions, corporate journeys and holidays.`}),(0,N.jsxs)(`a`,{href:`/sarathi-nx-official/#contact`,className:`\r
                  inline-flex\r
                  items-center\r
                  gap-2.5\r
                  mt-5\r
                  bg-orange-500\r
                  hover:bg-orange-600\r
                  text-white\r
                  px-5\r
                  py-2.5\r
                  rounded-full\r
                  text-sm\r
                  font-semibold\r
                  shadow-lg\r
                  transition-all\r
                  duration-300\r
                  hover:-translate-y-1\r
                `,children:[`Talk To Our Experts`,(0,N.jsx)(`span`,{className:`\r
                    w-6\r
                    h-6\r
                    rounded-full\r
                    bg-white\r
                    text-orange-500\r
                    flex\r
                    items-center\r
                    justify-center\r
                  `,children:(0,N.jsx)(M,{className:`text-[9px]`})})]})]})})}),(0,N.jsx)(`div`,{className:`absolute bottom-0 left-0 right-0 z-20`,children:(0,N.jsx)(`div`,{className:`\r
              max-w-[1280px]\r
              mx-auto\r
              px-4\r
              sm:px-8\r
              lg:px-10\r
            `,children:(0,N.jsx)(`div`,{className:`\r
                bg-white/95\r
                backdrop-blur-md\r
                rounded-t-[22px]\r
                shadow-[0_-8px_25px_rgba(0,0,0,0.14)]\r
                grid\r
                grid-cols-2\r
                md:grid-cols-4\r
                divide-x\r
                divide-gray-200\r
                overflow-hidden\r
              `,children:[{value:`Global`,label:`Travel Network`},{value:`360°`,label:`Travel Support`},{value:`24/7`,label:`Customer Assistance`},{value:`One`,label:`Trusted Partner`}].map(e=>(0,N.jsxs)(`div`,{className:`py-3 px-3 text-center`,children:[(0,N.jsx)(`p`,{className:`\r
                      text-lg\r
                      md:text-xl\r
                      font-extrabold\r
                      text-[#103a6d]\r
                    `,children:e.value}),(0,N.jsx)(`p`,{className:`\r
                      mt-0.5\r
                      text-[9px]\r
                      md:text-[11px]\r
                      text-gray-500\r
                      font-medium\r
                      uppercase\r
                      tracking-wide\r
                    `,children:e.label})]},e.label))})})})]}),(0,N.jsx)(`section`,{className:`py-20 md:py-28 bg-white`,children:(0,N.jsx)(`div`,{className:`\r
            max-w-[1280px]\r
            mx-auto\r
            px-5\r
            sm:px-8\r
            lg:px-10\r
          `,children:(0,N.jsxs)(`div`,{className:`\r
              grid\r
              lg:grid-cols-[0.9fr_1.1fr]\r
              gap-12\r
              lg:gap-20\r
              items-center\r
            `,children:[(0,N.jsx)($,{direction:`left`,children:(0,N.jsxs)(`div`,{className:`relative`,children:[(0,N.jsx)(`div`,{className:`\r
                    absolute\r
                    -left-5\r
                    -top-5\r
                    w-24\r
                    h-24\r
                    bg-orange-100\r
                    rounded-2xl\r
                    -z-0\r
                  `}),(0,N.jsx)(`img`,{src:`https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=85`,alt:`Travel planning`,className:`\r
                    relative\r
                    z-10\r
                    w-full\r
                    h-[420px]\r
                    md:h-[500px]\r
                    object-cover\r
                    rounded-[28px]\r
                    shadow-2xl\r
                  `}),(0,N.jsxs)(`div`,{className:`\r
                    absolute\r
                    z-20\r
                    bottom-6\r
                    -right-3\r
                    md:-right-7\r
                    bg-[#103a6d]\r
                    text-white\r
                    rounded-2xl\r
                    px-6\r
                    py-5\r
                    shadow-xl\r
                  `,children:[(0,N.jsx)(`p`,{className:`text-3xl font-extrabold`,children:`NX`}),(0,N.jsx)(`p`,{className:`text-blue-100 text-xs mt-1`,children:`Your Travel Partner`})]})]})}),(0,N.jsx)($,{direction:`right`,children:(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`span`,{className:`\r
                    text-orange-500\r
                    text-xs\r
                    md:text-sm\r
                    font-bold\r
                    tracking-[3px]\r
                    uppercase\r
                  `,children:`Who We Are`}),(0,N.jsxs)(`h2`,{className:`\r
                    mt-3\r
                    text-3xl\r
                    md:text-5xl\r
                    font-bold\r
                    text-[#12385f]\r
                    leading-tight\r
                  `,children:[`Travel Expertise`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{className:`text-[#1556bd]`,children:`You Can Rely On.`})]}),(0,N.jsx)(`p`,{className:`\r
                    mt-6\r
                    text-gray-600\r
                    leading-8\r
                    text-sm\r
                    md:text-base\r
                  `,children:`Sarathi NX Pvt. Ltd. is a professionally managed travel company focused on making international travel simpler, more organized and more reliable.`}),(0,N.jsx)(`p`,{className:`\r
                    mt-4\r
                    text-gray-600\r
                    leading-8\r
                    text-sm\r
                    md:text-base\r
                  `,children:`From business exhibitions and corporate journeys to leisure holidays, we coordinate the essential parts of your travel so you can focus on what matters most.`}),(0,N.jsx)(`div`,{className:`grid sm:grid-cols-2 gap-x-8 gap-y-4 mt-8`,children:[`International Travel Expertise`,`Exhibition Travel Management`,`Corporate Travel Solutions`,`Visa & Documentation Support`,`Hotel & Accommodation`,`Dedicated Travel Assistance`].map(e=>(0,N.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,N.jsx)(j,{className:`\r
                          text-[#1556bd]\r
                          mt-1\r
                          shrink-0\r
                        `}),(0,N.jsx)(`span`,{className:`\r
                          text-gray-700\r
                          text-sm\r
                          font-medium\r
                        `,children:e})]},e))})]})})]})})}),(0,N.jsx)(`section`,{className:`py-20 md:py-24 bg-[#f5f8fc]`,children:(0,N.jsxs)(`div`,{className:`\r
            max-w-[1280px]\r
            mx-auto\r
            px-5\r
            sm:px-8\r
            lg:px-10\r
          `,children:[(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`max-w-[700px]`,children:[(0,N.jsx)(`span`,{className:`\r
                  text-orange-500\r
                  text-xs\r
                  md:text-sm\r
                  font-bold\r
                  tracking-[3px]\r
                  uppercase\r
                `,children:`What We Do`}),(0,N.jsxs)(`h2`,{className:`\r
                  mt-3\r
                  text-3xl\r
                  md:text-5xl\r
                  font-bold\r
                  text-[#12385f]\r
                `,children:[`Everything You Need,`,(0,N.jsxs)(`span`,{className:`text-[#1556bd]`,children:[` `,`Under One Roof.`]})]})]})}),(0,N.jsx)(`div`,{className:`\r
              grid\r
              grid-cols-1\r
              sm:grid-cols-2\r
              lg:grid-cols-4\r
              gap-5\r
              mt-12\r
            `,children:jh.map((e,t)=>{let n=e.icon;return(0,N.jsx)($,{delay:t*.08,children:(0,N.jsxs)(`div`,{className:`\r
                      group\r
                      bg-white\r
                      rounded-2xl\r
                      p-7\r
                      border\r
                      border-gray-100\r
                      shadow-sm\r
                      hover:shadow-xl\r
                      hover:-translate-y-2\r
                      transition-all\r
                      duration-300\r
                    `,children:[(0,N.jsx)(`div`,{className:`\r
                        w-14\r
                        h-14\r
                        rounded-2xl\r
                        bg-blue-50\r
                        text-[#1556bd]\r
                        flex\r
                        items-center\r
                        justify-center\r
                        text-xl\r
                        group-hover:bg-[#1556bd]\r
                        group-hover:text-white\r
                        transition-all\r
                        duration-300\r
                      `,children:(0,N.jsx)(n,{})}),(0,N.jsx)(`h3`,{className:`\r
                        mt-6\r
                        text-lg\r
                        font-bold\r
                        text-[#12385f]\r
                      `,children:e.title}),(0,N.jsx)(`div`,{className:`\r
                        mt-5\r
                        w-8\r
                        h-[2px]\r
                        bg-orange-500\r
                        group-hover:w-14\r
                        transition-all\r
                        duration-300\r
                      `})]})},e.title)})})]})}),(0,N.jsx)(`section`,{className:`py-20 md:py-28 bg-white`,children:(0,N.jsxs)(`div`,{className:`\r
            max-w-[1100px]\r
            mx-auto\r
            px-5\r
            sm:px-8\r
          `,children:[(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`text-center max-w-[750px] mx-auto`,children:[(0,N.jsx)(`span`,{className:`\r
                  text-orange-500\r
                  text-xs\r
                  md:text-sm\r
                  font-bold\r
                  tracking-[3px]\r
                  uppercase\r
                `,children:`Our Purpose`}),(0,N.jsxs)(`h2`,{className:`\r
                  mt-3\r
                  text-3xl\r
                  md:text-5xl\r
                  font-bold\r
                  text-[#12385f]\r
                `,children:[`Built On Trust.`,(0,N.jsxs)(`span`,{className:`text-[#1556bd]`,children:[` `,`Driven By Service.`]})]}),(0,N.jsx)(`p`,{className:`mt-5 text-gray-600 leading-7`,children:`We believe great travel begins with careful planning, transparent communication and genuine customer support.`})]})}),(0,N.jsxs)(`div`,{className:`\r
              grid\r
              md:grid-cols-2\r
              gap-6\r
              mt-12\r
            `,children:[(0,N.jsx)($,{direction:`left`,children:(0,N.jsxs)(`div`,{className:`\r
                  relative\r
                  overflow-hidden\r
                  rounded-[26px]\r
                  bg-[#f3f7fc]\r
                  border\r
                  border-blue-100\r
                  p-8\r
                  md:p-10\r
                `,children:[(0,N.jsx)(`div`,{className:`\r
                    absolute\r
                    -right-10\r
                    -top-10\r
                    w-36\r
                    h-36\r
                    rounded-full\r
                    bg-blue-100/60\r
                  `}),(0,N.jsx)(`div`,{className:`\r
                    relative\r
                    w-14\r
                    h-14\r
                    rounded-2xl\r
                    bg-[#1556bd]\r
                    text-white\r
                    flex\r
                    items-center\r
                    justify-center\r
                    text-xl\r
                  `,children:(0,N.jsx)(qr,{})}),(0,N.jsx)(`h3`,{className:`\r
                    mt-7\r
                    text-2xl\r
                    font-bold\r
                    text-[#12385f]\r
                  `,children:`Our Mission`}),(0,N.jsx)(`p`,{className:`\r
                    mt-4\r
                    text-gray-600\r
                    leading-7\r
                    text-sm\r
                    md:text-base\r
                  `,children:`To provide dependable, personalized and efficient travel solutions that make every journey easier and allow our clients to travel with confidence.`})]})}),(0,N.jsx)($,{direction:`right`,children:(0,N.jsxs)(`div`,{className:`\r
                  relative\r
                  overflow-hidden\r
                  rounded-[26px]\r
                  bg-[#103a6d]\r
                  text-white\r
                  p-8\r
                  md:p-10\r
                `,children:[(0,N.jsx)(`div`,{className:`\r
                    absolute\r
                    -right-10\r
                    -top-10\r
                    w-36\r
                    h-36\r
                    rounded-full\r
                    bg-white/10\r
                  `}),(0,N.jsx)(`div`,{className:`\r
                    relative\r
                    w-14\r
                    h-14\r
                    rounded-2xl\r
                    bg-white\r
                    text-[#1556bd]\r
                    flex\r
                    items-center\r
                    justify-center\r
                    text-xl\r
                  `,children:(0,N.jsx)(Xr,{})}),(0,N.jsx)(`h3`,{className:`\r
                    mt-7\r
                    text-2xl\r
                    font-bold\r
                  `,children:`Our Vision`}),(0,N.jsx)(`p`,{className:`\r
                    mt-4\r
                    text-blue-100\r
                    leading-7\r
                    text-sm\r
                    md:text-base\r
                  `,children:`To become a trusted global travel partner known for professional service, international expertise and long-lasting client relationships.`})]})})]})]})}),(0,N.jsx)(`section`,{className:`py-20 md:py-24 bg-[#f5f8fc]`,children:(0,N.jsxs)(`div`,{className:`\r
            max-w-[1280px]\r
            mx-auto\r
            px-5\r
            sm:px-8\r
            lg:px-10\r
          `,children:[(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`text-center`,children:[(0,N.jsx)(`span`,{className:`\r
                  text-orange-500\r
                  text-xs\r
                  md:text-sm\r
                  font-bold\r
                  tracking-[3px]\r
                  uppercase\r
                `,children:`Why Sarathi NX`}),(0,N.jsxs)(`h2`,{className:`\r
                  mt-3\r
                  text-3xl\r
                  md:text-5xl\r
                  font-bold\r
                  text-[#12385f]\r
                `,children:[`A Better Way To`,(0,N.jsxs)(`span`,{className:`text-[#1556bd]`,children:[` `,`Travel.`]})]})]})}),(0,N.jsx)(`div`,{className:`\r
              grid\r
              grid-cols-1\r
              sm:grid-cols-2\r
              lg:grid-cols-4\r
              gap-6\r
              mt-12\r
            `,children:Ah.map((e,t)=>{let n=e.icon;return(0,N.jsx)($,{delay:t*.08,children:(0,N.jsxs)(`div`,{className:`\r
                      group\r
                      bg-white\r
                      rounded-2xl\r
                      p-7\r
                      h-full\r
                      border\r
                      border-gray-100\r
                      shadow-sm\r
                      hover:shadow-xl\r
                      transition-all\r
                      duration-300\r
                    `,children:[(0,N.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,N.jsx)(`div`,{className:`\r
                          w-14\r
                          h-14\r
                          rounded-2xl\r
                          bg-[#eaf2ff]\r
                          text-[#1556bd]\r
                          flex\r
                          items-center\r
                          justify-center\r
                          text-xl\r
                          group-hover:bg-[#1556bd]\r
                          group-hover:text-white\r
                          transition-all\r
                        `,children:(0,N.jsx)(n,{})}),(0,N.jsx)(`span`,{className:`\r
                          text-gray-200\r
                          text-3xl\r
                          font-black\r
                        `,children:e.number})]}),(0,N.jsx)(`h3`,{className:`\r
                        mt-7\r
                        text-xl\r
                        font-bold\r
                        text-[#12385f]\r
                      `,children:e.title}),(0,N.jsx)(`p`,{className:`\r
                        mt-3\r
                        text-gray-600\r
                        text-sm\r
                        leading-6\r
                      `,children:e.text})]})},e.title)})})]})}),(0,N.jsxs)(`section`,{className:`\r
          relative\r
          py-20\r
          md:py-24\r
          bg-[#06376b]\r
          overflow-hidden\r
        `,children:[(0,N.jsx)(`div`,{className:`\r
            absolute\r
            -left-20\r
            -top-20\r
            w-64\r
            h-64\r
            rounded-full\r
            border\r
            border-white/10\r
          `}),(0,N.jsx)(`div`,{className:`\r
            absolute\r
            -right-20\r
            -bottom-28\r
            w-80\r
            h-80\r
            rounded-full\r
            border\r
            border-white/10\r
          `}),(0,N.jsx)(`div`,{className:`\r
            relative\r
            z-10\r
            max-w-[850px]\r
            mx-auto\r
            px-5\r
            sm:px-8\r
            text-center\r
          `,children:(0,N.jsxs)($,{children:[(0,N.jsx)(`span`,{className:`\r
                text-orange-400\r
                text-xs\r
                md:text-sm\r
                font-bold\r
                tracking-[3px]\r
                uppercase\r
              `,children:`Let's Travel Together`}),(0,N.jsxs)(`h2`,{className:`\r
                mt-4\r
                text-3xl\r
                md:text-5xl\r
                font-bold\r
                text-white\r
                leading-tight\r
              `,children:[`Your Journey Starts`,(0,N.jsx)(`br`,{}),`With The Right Partner.`]}),(0,N.jsx)(`p`,{className:`\r
                mt-5\r
                text-blue-100\r
                text-sm\r
                md:text-lg\r
                leading-7\r
                max-w-2xl\r
                mx-auto\r
              `,children:`Whether it is business travel, an international exhibition or your next holiday, our team is ready to help you plan it.`}),(0,N.jsxs)(`a`,{href:`/sarathi-nx-official/#contact`,className:`\r
                inline-flex\r
                items-center\r
                gap-2.5\r
                mt-7\r
                bg-white\r
                text-[#103a6d]\r
                px-6\r
                py-3\r
                rounded-full\r
                text-sm\r
                font-bold\r
                shadow-xl\r
                hover:bg-orange-500\r
                hover:text-white\r
                transition-all\r
                duration-300\r
                hover:-translate-y-1\r
              `,children:[`Contact Our Team`,(0,N.jsx)(M,{className:`text-xs`})]})]})})]})]})}var Nh=`/assets/flight-D7qCfbdo.jpeg`,Ph=[{icon:Ar,title:`International Flight Booking`,description:`Reliable international flight booking solutions for business travellers, exhibition visitors and corporate groups.`,points:[`International flight reservations`,`Flexible travel options`,`Group flight coordination`,`Complete itinerary assistance`]},{icon:fi,title:`Corporate Travel`,description:`Professional corporate travel solutions designed around your company's schedule, budget and business requirements.`,points:[`Corporate flight bookings`,`Business travel planning`,`Customized itineraries`,`Dedicated travel assistance`]},{icon:Xr,title:`Business Travel`,description:`Smooth and well-planned business journeys that allow you to focus on meetings, networking and growing your business.`,points:[`International business trips`,`Customized travel plans`,`Airport assistance`,`Flexible travel solutions`]},{icon:Nr,title:`Visa Assistance`,description:`Professional guidance for visa documentation and application requirements for your international journey.`,points:[`Documentation guidance`,`Application assistance`,`Business visa support`,`Travel document checklist`]},{icon:Hr,title:`Hotel Booking`,description:`Comfortable and convenient accommodation options near airports, exhibition venues and business destinations.`,points:[`Corporate hotel bookings`,`Exhibition-area hotels`,`Group accommodation`,`Special stay requirements`]},{icon:lr,title:`MICE & Group Travel`,description:`Complete group travel management for meetings, incentives, conferences, exhibitions and corporate events.`,points:[`Group travel planning`,`Corporate events`,`Meetings & conferences`,`Customized group itineraries`]}],Fh=[{icon:Xr,title:`Global Travel Network`,text:`Travel support across major international business, exhibition and corporate destinations.`},{icon:Gr,title:`Dedicated Assistance`,text:`Our team stays connected with you throughout the planning process and your journey.`},{icon:xr,title:`Complete Travel Support`,text:`Flights, hotels, visas and group travel solutions managed under one roof.`},{icon:j,title:`Reliable Service`,text:`Professional and transparent travel solutions focused on convenience and customer satisfaction.`}];function Ih(){return(0,N.jsxs)(`main`,{className:`bg-white overflow-hidden`,children:[(0,N.jsxs)(`section`,{className:`\r
          relative\r
          h-[350px]\r
          sm:h-[380px]\r
          md:h-[410px]\r
          lg:h-[430px]\r
          overflow-hidden\r
          bg-[#dce6f0]\r
        `,children:[(0,N.jsx)(`img`,{src:Nh,alt:`Flight and Air Travel`,className:`\r
            absolute\r
            inset-0\r
            w-full\r
            h-full\r
            object-cover\r
            object-center\r
          `}),(0,N.jsx)(`div`,{className:`\r
            absolute\r
            inset-0\r
            bg-gradient-to-r\r
            from-[#062f5f]/90\r
            via-[#073e76]/60\r
            to-[#073e76]/10\r
          `}),(0,N.jsx)(`div`,{className:`\r
            absolute\r
            inset-x-0\r
            bottom-0\r
            h-32\r
            bg-gradient-to-t\r
            from-black/35\r
            to-transparent\r
          `}),(0,N.jsx)(`div`,{className:`\r
            relative\r
            z-10\r
            h-full\r
            max-w-[1280px]\r
            mx-auto\r
            px-5\r
            sm:px-8\r
            lg:px-10\r
            flex\r
            items-center\r
            -translate-y-10\r
            sm:-translate-y-9\r
            md:-translate-y-8\r
            lg:-translate-y-7\r
          `,children:(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`max-w-[600px]`,children:[(0,N.jsxs)(`div`,{className:`flex items-center gap-3 mb-2`,children:[(0,N.jsx)(`span`,{className:`w-9 md:w-11 h-[2px] bg-orange-500`}),(0,N.jsx)(`span`,{className:`\r
                    text-white\r
                    text-[10px]\r
                    sm:text-xs\r
                    md:text-sm\r
                    font-bold\r
                    tracking-[2.5px]\r
                    md:tracking-[3px]\r
                  `,children:`FLIGHT & AIR TRAVEL`})]}),(0,N.jsxs)(`h1`,{className:`\r
                  text-white\r
                  text-3xl\r
                  sm:text-4xl\r
                  md:text-5xl\r
                  lg:text-[54px]\r
                  font-extrabold\r
                  leading-[1.02]\r
                  drop-shadow-lg\r
                `,children:[`Fly Smarter.`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{className:`text-orange-500`,children:`Travel Better.`})]}),(0,N.jsx)(`p`,{className:`\r
                  mt-3\r
                  md:mt-3.5\r
                  text-white\r
                  text-sm\r
                  sm:text-base\r
                  md:text-[17px]\r
                  leading-6\r
                  md:leading-6\r
                  max-w-[520px]\r
                  drop-shadow-md\r
                `,children:`Complete flight and travel solutions for business, corporate and international travellers. From booking to destination support, we make your journey simple.`}),(0,N.jsxs)(`a`,{href:`/sarathi-nx-official/#contact`,className:`\r
                  inline-flex\r
                  items-center\r
                  gap-2.5\r
                  mt-3.5\r
                  md:mt-4\r
                  px-5\r
                  md:px-6\r
                  py-2\r
                  md:py-2.5\r
                  rounded-full\r
                  bg-orange-500\r
                  hover:bg-orange-600\r
                  text-white\r
                  text-sm\r
                  md:text-[15px]\r
                  font-semibold\r
                  shadow-xl\r
                  transition-all\r
                  duration-300\r
                  hover:-translate-y-1\r
                `,children:[`Plan Your Journey`,(0,N.jsx)(`span`,{className:`\r
                    w-6\r
                    h-6\r
                    md:w-7\r
                    md:h-7\r
                    rounded-full\r
                    bg-white\r
                    text-orange-500\r
                    flex\r
                    items-center\r
                    justify-center\r
                  `,children:(0,N.jsx)(M,{className:`text-[9px] md:text-[10px]`})})]})]})})}),(0,N.jsx)(`div`,{className:`absolute bottom-0 left-0 right-0 z-20`,children:(0,N.jsx)(`div`,{className:`max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-10`,children:(0,N.jsx)(`div`,{className:`\r
                bg-white/95\r
                backdrop-blur-md\r
                rounded-t-2xl\r
                md:rounded-t-[24px]\r
                shadow-[0_-6px_25px_rgba(0,0,0,0.12)]\r
                px-4\r
                md:px-6\r
                py-3\r
                md:py-4\r
              `,children:(0,N.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-3`,children:[(0,N.jsxs)(`div`,{className:`\r
                    flex\r
                    items-center\r
                    justify-center\r
                    sm:justify-start\r
                    gap-3\r
                    py-2\r
                    sm:py-1\r
                  `,children:[(0,N.jsx)(`div`,{className:`\r
                      w-9\r
                      h-9\r
                      md:w-10\r
                      md:h-10\r
                      rounded-full\r
                      bg-blue-50\r
                      text-[#0754bd]\r
                      flex\r
                      items-center\r
                      justify-center\r
                      text-base\r
                      md:text-lg\r
                      shrink-0\r
                    `,children:(0,N.jsx)(Ar,{})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h4`,{className:`text-[#153764] font-bold text-xs md:text-sm`,children:`Global Flights`}),(0,N.jsx)(`p`,{className:`text-[#153764] text-[10px] md:text-xs mt-0.5`,children:`Worldwide Connections`})]})]}),(0,N.jsxs)(`div`,{className:`\r
                    flex\r
                    items-center\r
                    justify-center\r
                    sm:justify-start\r
                    gap-3\r
                    py-2\r
                    sm:py-1\r
                    sm:border-l\r
                    border-gray-200\r
                    sm:pl-6\r
                  `,children:[(0,N.jsx)(`div`,{className:`\r
                      w-9\r
                      h-9\r
                      md:w-10\r
                      md:h-10\r
                      rounded-full\r
                      bg-blue-50\r
                      text-[#0754bd]\r
                      flex\r
                      items-center\r
                      justify-center\r
                      text-base\r
                      md:text-lg\r
                      shrink-0\r
                    `,children:(0,N.jsx)(Xr,{})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h4`,{className:`text-[#153764] font-bold text-xs md:text-sm`,children:`International Travel`}),(0,N.jsx)(`p`,{className:`text-[#153764] text-[10px] md:text-xs mt-0.5`,children:`Business & Leisure`})]})]}),(0,N.jsxs)(`div`,{className:`\r
                    flex\r
                    items-center\r
                    justify-center\r
                    sm:justify-start\r
                    gap-3\r
                    py-2\r
                    sm:py-1\r
                    sm:border-l\r
                    border-gray-200\r
                    sm:pl-6\r
                  `,children:[(0,N.jsx)(`div`,{className:`\r
                      w-9\r
                      h-9\r
                      md:w-10\r
                      md:h-10\r
                      rounded-full\r
                      bg-blue-50\r
                      text-[#0754bd]\r
                      flex\r
                      items-center\r
                      justify-center\r
                      text-base\r
                      md:text-lg\r
                      shrink-0\r
                    `,children:(0,N.jsx)(Gr,{})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h4`,{className:`text-[#153764] font-bold text-xs md:text-sm`,children:`Dedicated Support`}),(0,N.jsx)(`p`,{className:`text-[#153764] text-[10px] md:text-xs mt-0.5`,children:`Travel Assistance`})]})]})]})})})})]}),(0,N.jsx)(`section`,{className:`py-14 md:py-18 lg:py-20 bg-white`,children:(0,N.jsx)(`div`,{className:`\r
            max-w-[850px]\r
            mx-auto\r
            px-5\r
            sm:px-8\r
            text-center\r
          `,children:(0,N.jsxs)($,{children:[(0,N.jsx)(`span`,{className:`\r
                text-orange-500\r
                text-xs\r
                md:text-sm\r
                font-bold\r
                tracking-[2.5px]\r
                uppercase\r
              `,children:`Our Travel Services`}),(0,N.jsxs)(`h2`,{className:`\r
                mt-3\r
                text-3xl\r
                md:text-4xl\r
                lg:text-[42px]\r
                font-bold\r
                text-[#102f59]\r
                leading-tight\r
              `,children:[`Everything You Need for`,(0,N.jsxs)(`span`,{className:`text-[#1556bd]`,children:[` `,`Seamless Travel`]})]}),(0,N.jsx)(`p`,{className:`\r
                mt-5\r
                text-gray-600\r
                text-sm\r
                md:text-base\r
                leading-7\r
              `,children:`Whether you are travelling for an international exhibition, corporate meeting or business trip, our team takes care of the important details so you can travel with confidence.`})]})})}),(0,N.jsx)(`section`,{className:`py-14 md:py-18 lg:py-20 bg-[#f6f9fd]`,children:(0,N.jsxs)(`div`,{className:`\r
            max-w-[1280px]\r
            mx-auto\r
            px-5\r
            sm:px-8\r
            lg:px-10\r
          `,children:[(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`text-center max-w-[760px] mx-auto`,children:[(0,N.jsx)(`span`,{className:`\r
                  text-orange-500\r
                  text-xs\r
                  md:text-sm\r
                  font-bold\r
                  tracking-[2.5px]\r
                  uppercase\r
                `,children:`What We Do`}),(0,N.jsx)(`h2`,{className:`\r
                  mt-2\r
                  text-3xl\r
                  md:text-4xl\r
                  font-bold\r
                  text-[#102f59]\r
                `,children:`Complete Travel Solutions`})]})}),(0,N.jsx)(`div`,{className:`\r
              mt-10\r
              md:mt-12\r
              grid\r
              grid-cols-1\r
              sm:grid-cols-2\r
              lg:grid-cols-3\r
              gap-6\r
              md:gap-7\r
            `,children:Ph.map((e,t)=>{let n=e.icon;return(0,N.jsx)($,{delay:t*.05,children:(0,N.jsxs)(`article`,{className:`\r
                      group\r
                      bg-white\r
                      border\r
                      border-gray-200\r
                      rounded-2xl\r
                      p-6\r
                      md:p-7\r
                      h-full\r
                      flex\r
                      flex-col\r
                      shadow-sm\r
                      hover:shadow-[0_18px_45px_rgba(15,70,140,0.13)]\r
                      hover:-translate-y-1\r
                      transition-all\r
                      duration-300\r
                    `,children:[(0,N.jsx)(`div`,{className:`\r
                        w-14\r
                        h-14\r
                        rounded-2xl\r
                        bg-[#eaf2ff]\r
                        text-[#1556bd]\r
                        flex\r
                        items-center\r
                        justify-center\r
                        text-xl\r
                        group-hover:bg-[#1556bd]\r
                        group-hover:text-white\r
                        transition-all\r
                        duration-300\r
                      `,children:(0,N.jsx)(n,{})}),(0,N.jsx)(`h3`,{className:`\r
                        mt-5\r
                        md:mt-6\r
                        text-xl\r
                        font-bold\r
                        text-[#17375f]\r
                        group-hover:text-[#1556bd]\r
                        transition-colors\r
                      `,children:e.title}),(0,N.jsx)(`p`,{className:`\r
                        mt-3\r
                        text-gray-600\r
                        text-sm\r
                        leading-6\r
                      `,children:e.description}),(0,N.jsx)(`div`,{className:`mt-5 space-y-3`,children:e.points.map(e=>(0,N.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,N.jsx)(j,{className:`\r
                              text-[#1556bd]\r
                              mt-1\r
                              text-sm\r
                              shrink-0\r
                            `}),(0,N.jsx)(`span`,{className:`text-gray-700 text-sm`,children:e})]},e))}),(0,N.jsxs)(`a`,{href:`/sarathi-nx-official/#contact`,className:`\r
                        inline-flex\r
                        items-center\r
                        gap-2\r
                        mt-auto\r
                        pt-6\r
                        text-[#1556bd]\r
                        font-semibold\r
                        text-sm\r
                        hover:gap-3\r
                        transition-all\r
                      `,children:[`Enquire Now`,(0,N.jsx)(M,{className:`text-xs`})]})]})},e.title)})})]})}),(0,N.jsx)(`section`,{className:`py-14 md:py-18 lg:py-20 bg-white`,children:(0,N.jsxs)(`div`,{className:`\r
            max-w-[1280px]\r
            mx-auto\r
            px-5\r
            sm:px-8\r
            lg:px-10\r
          `,children:[(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`text-center max-w-[760px] mx-auto`,children:[(0,N.jsx)(`span`,{className:`\r
                  text-orange-500\r
                  text-xs\r
                  md:text-sm\r
                  font-bold\r
                  tracking-[2.5px]\r
                  uppercase\r
                `,children:`Why Choose Us`}),(0,N.jsxs)(`h2`,{className:`\r
                  mt-2\r
                  text-3xl\r
                  md:text-4xl\r
                  font-bold\r
                  text-[#102f59]\r
                `,children:[`Your Journey,`,(0,N.jsxs)(`span`,{className:`text-[#1556bd]`,children:[` `,`Our Responsibility`]})]}),(0,N.jsx)(`p`,{className:`\r
                  mt-4\r
                  text-gray-600\r
                  text-sm\r
                  md:text-base\r
                  leading-7\r
                `,children:`We combine travel expertise, personalized service and international destination knowledge to make every journey more convenient.`})]})}),(0,N.jsx)(`div`,{className:`\r
              mt-10\r
              md:mt-12\r
              grid\r
              grid-cols-1\r
              sm:grid-cols-2\r
              lg:grid-cols-4\r
              gap-5\r
              md:gap-6\r
            `,children:Fh.map((e,t)=>{let n=e.icon;return(0,N.jsx)($,{delay:t*.07,children:(0,N.jsxs)(`div`,{className:`\r
                      h-full\r
                      bg-[#f6f9fd]\r
                      border\r
                      border-gray-100\r
                      rounded-2xl\r
                      p-6\r
                      md:p-7\r
                      text-center\r
                      hover:bg-white\r
                      hover:shadow-lg\r
                      transition-all\r
                      duration-300\r
                    `,children:[(0,N.jsx)(`div`,{className:`\r
                        w-14\r
                        h-14\r
                        mx-auto\r
                        rounded-full\r
                        bg-[#1556bd]\r
                        text-white\r
                        flex\r
                        items-center\r
                        justify-center\r
                        text-xl\r
                      `,children:(0,N.jsx)(n,{})}),(0,N.jsx)(`h3`,{className:`\r
                        mt-5\r
                        text-lg\r
                        font-bold\r
                        text-[#17375f]\r
                      `,children:e.title}),(0,N.jsx)(`p`,{className:`\r
                        mt-3\r
                        text-gray-600\r
                        text-sm\r
                        leading-6\r
                      `,children:e.text})]})},e.title)})})]})}),(0,N.jsxs)(`section`,{className:`\r
          relative\r
          py-16\r
          md:py-20\r
          lg:py-24\r
          bg-[#063b73]\r
          overflow-hidden\r
        `,children:[(0,N.jsx)(`div`,{className:`\r
            absolute\r
            -top-24\r
            -right-24\r
            w-72\r
            h-72\r
            rounded-full\r
            bg-blue-400/10\r
          `}),(0,N.jsx)(`div`,{className:`\r
            absolute\r
            -bottom-32\r
            -left-20\r
            w-80\r
            h-80\r
            rounded-full\r
            bg-orange-400/10\r
          `}),(0,N.jsx)(`div`,{className:`\r
            relative\r
            z-10\r
            max-w-[850px]\r
            mx-auto\r
            px-5\r
            sm:px-8\r
            text-center\r
          `,children:(0,N.jsxs)($,{children:[(0,N.jsx)(`span`,{className:`\r
                text-orange-400\r
                text-xs\r
                md:text-sm\r
                font-bold\r
                tracking-[2.5px]\r
                uppercase\r
              `,children:`Ready to Travel?`}),(0,N.jsxs)(`h2`,{className:`\r
                mt-3\r
                text-3xl\r
                sm:text-4xl\r
                md:text-5xl\r
                font-bold\r
                text-white\r
                leading-tight\r
              `,children:[`Let's Plan Your`,(0,N.jsxs)(`span`,{className:`text-orange-400`,children:[` `,`Next Journey`]})]}),(0,N.jsx)(`p`,{className:`\r
                mt-5\r
                text-blue-100\r
                text-base\r
                md:text-lg\r
                leading-7\r
                max-w-2xl\r
                mx-auto\r
              `,children:`Tell us about your travel requirements and our team will help you create a smooth, comfortable and well-planned journey.`}),(0,N.jsxs)(`a`,{href:`/sarathi-nx-official/#contact`,className:`\r
                inline-flex\r
                items-center\r
                gap-3\r
                mt-7\r
                md:mt-8\r
                bg-white\r
                text-[#063b73]\r
                px-7\r
                md:px-8\r
                py-3.5\r
                rounded-full\r
                font-semibold\r
                text-sm\r
                md:text-base\r
                hover:bg-orange-50\r
                transition-all\r
                duration-300\r
                hover:-translate-y-1\r
                shadow-lg\r
              `,children:[`Contact Our Team`,(0,N.jsx)(M,{className:`text-sm`})]})]})})]})]})}var Lh=`/assets/tredfair-RS1vBazm.jpg`,Rh=[{title:`CMEF 2026`,subtitle:`China International Medical Equipment Fair`,location:`Shanghai, China`,date:`21 - 24 October 2026`,price:`₹1,24,500`,image:Lh,link:`https://www.cmef.com.cn/en`},{title:`MEDICA 2026`,subtitle:`World Forum for Medicine`,location:`Düsseldorf, Germany`,date:`16 - 19 November 2026`,price:`₹1,35,000`,image:Lh,link:`https://www.medica-tradefair.com/`},{title:`ARAB HEALTH 2027`,subtitle:`Healthcare Exhibition & Medical Conference`,location:`Dubai, UAE`,date:`January 2027`,price:`Coming Soon`,image:Lh,link:`#`},{title:`MEDLAB 2027`,subtitle:`Laboratory & Diagnostics Exhibition`,location:`Dubai, UAE`,date:`February 2027`,price:`Coming Soon`,image:Lh,link:`#`},{title:`CANTON FAIR 2026`,subtitle:`China Import and Export Fair`,location:`Guangzhou, China`,date:`October 2026`,price:`₹1,12,000`,image:Lh,link:`https://www.cantonfair.org.cn/`},{title:`WELDING & CUTTING 2026`,subtitle:`Beijing Essen Welding & Cutting Fair`,location:`Beijing, China`,date:`November 2026`,price:`Coming Soon`,image:Lh,link:`#`},{title:`ITMA ASIA + CITME 2026`,subtitle:`International Textile Machinery Exhibition`,location:`Shanghai, China`,date:`20 - 24 November 2026`,price:`₹1,15,000`,image:Lh,link:`#`},{title:`CHINA GLASS 2027`,subtitle:`China International Glass Industrial Exhibition`,location:`Shanghai, China`,date:`April 2027`,price:`Coming Soon`,image:Lh,link:`#`}],zh=[Lh,gh,_h];function Bh(){return(0,N.jsxs)(`main`,{className:`bg-white overflow-hidden`,children:[(0,N.jsxs)(`section`,{className:`\r
          relative\r
          min-h-[460px]\r
          md:min-h-[500px]\r
          overflow-hidden\r
          bg-[#dfe7ef]\r
        `,children:[(0,N.jsx)(`img`,{src:Lh,alt:`International Trade Fair`,className:`\r
            absolute\r
            inset-0\r
            w-full\r
            h-full\r
            object-cover\r
            object-center\r
          `}),(0,N.jsx)(`div`,{className:`\r
            absolute\r
            inset-0\r
            bg-gradient-to-r\r
            from-[#052f62]/65\r
            via-[#073b73]/35\r
            to-transparent\r
          `}),(0,N.jsx)(`div`,{className:`\r
            absolute\r
            inset-x-0\r
            bottom-0\r
            h-28\r
            bg-gradient-to-t\r
            from-black/35\r
            to-transparent\r
          `}),(0,N.jsx)(`div`,{className:`\r
            relative\r
            z-10\r
            max-w-[1280px]\r
            mx-auto\r
            px-5\r
            sm:px-8\r
            lg:px-10\r
            pt-16\r
            md:pt-20\r
          `,children:(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`max-w-[570px]`,children:[(0,N.jsxs)(`div`,{className:`flex items-center gap-3 mb-4`,children:[(0,N.jsx)(`span`,{className:`w-10 h-[2px] bg-orange-500`}),(0,N.jsx)(`span`,{className:`\r
                    text-white\r
                    text-xs\r
                    md:text-sm\r
                    font-bold\r
                    tracking-[3px]\r
                  `,children:`INTERNATIONAL EXHIBITIONS`})]}),(0,N.jsxs)(`h1`,{className:`\r
                  text-white\r
                  text-4xl\r
                  sm:text-5xl\r
                  md:text-6xl\r
                  lg:text-[62px]\r
                  font-extrabold\r
                  leading-[1.05]\r
                  drop-shadow-lg\r
                `,children:[`Explore Leading`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{className:`text-orange-500`,children:`Global Exhibitions`})]}),(0,N.jsx)(`p`,{className:`\r
                  mt-5\r
                  text-white\r
                  text-base\r
                  md:text-lg\r
                  leading-7\r
                  max-w-[510px]\r
                  drop-shadow-md\r
                `,children:`Discover the world's leading trade fairs and exhibitions. We provide complete travel assistance for businesses attending international exhibitions.`}),(0,N.jsxs)(`a`,{href:`#exhibitions`,className:`\r
                  inline-flex\r
                  items-center\r
                  gap-2\r
                  mt-5\r
                  bg-orange-500\r
                  hover:bg-orange-600\r
                  text-white\r
                  font-semibold\r
                  px-5\r
                  py-2\r
                  rounded-full\r
                  shadow-lg\r
                  transition-all\r
                  duration-300\r
                  hover:-translate-y-1\r
                `,children:[`Plan Exhibition Travel`,(0,N.jsx)(`span`,{className:`\r
                    w-7\r
                    h-7\r
                    rounded-full\r
                    bg-white\r
                    text-orange-500\r
                    flex\r
                    items-center\r
                    justify-center\r
                  `,children:(0,N.jsx)(M,{className:`text-[10px]`})})]})]})})}),(0,N.jsx)(`div`,{className:`absolute bottom-0 left-0 right-0 z-20`,children:(0,N.jsx)(`div`,{className:`max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-10`,children:(0,N.jsx)(`div`,{className:`\r
                bg-white/95\r
                backdrop-blur-sm\r
                rounded-t-[26px]\r
                px-5\r
                md:px-8\r
                py-4\r
                shadow-[0_-8px_30px_rgba(0,0,0,0.12)]\r
              `,children:(0,N.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-3`,children:[(0,N.jsxs)(`div`,{className:`\r
                    flex\r
                    items-center\r
                    justify-center\r
                    sm:justify-start\r
                    gap-4\r
                    py-2\r
                  `,children:[(0,N.jsx)(`div`,{className:`\r
                      w-10\r
                      h-10\r
                      rounded-full\r
                      bg-blue-50\r
                      text-[#0754bd]\r
                      flex\r
                      items-center\r
                      justify-center\r
                      text-lg\r
                    `,children:(0,N.jsx)(kr,{})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h4`,{className:`text-[#153764] font-bold text-sm`,children:`End-to-End`}),(0,N.jsx)(`p`,{className:`text-[#153764] text-xs`,children:`Travel Support`})]})]}),(0,N.jsxs)(`div`,{className:`\r
                    flex\r
                    items-center\r
                    justify-center\r
                    sm:justify-start\r
                    gap-4\r
                    py-2\r
                    sm:border-l\r
                    border-gray-200\r
                    sm:pl-8\r
                  `,children:[(0,N.jsx)(`div`,{className:`\r
                      w-10\r
                      h-10\r
                      rounded-full\r
                      bg-blue-50\r
                      text-[#0754bd]\r
                      flex\r
                      items-center\r
                      justify-center\r
                      text-lg\r
                    `,children:(0,N.jsx)(Yr,{})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h4`,{className:`text-[#153764] font-bold text-sm`,children:`Global Exhibition`}),(0,N.jsx)(`p`,{className:`text-[#153764] text-xs`,children:`Expertise`})]})]}),(0,N.jsxs)(`div`,{className:`\r
                    flex\r
                    items-center\r
                    justify-center\r
                    sm:justify-start\r
                    gap-4\r
                    py-2\r
                    sm:border-l\r
                    border-gray-200\r
                    sm:pl-8\r
                  `,children:[(0,N.jsx)(`div`,{className:`\r
                      w-10\r
                      h-10\r
                      rounded-full\r
                      bg-blue-50\r
                      text-[#0754bd]\r
                      flex\r
                      items-center\r
                      justify-center\r
                      text-lg\r
                    `,children:(0,N.jsx)(Er,{})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h4`,{className:`text-[#153764] font-bold text-sm`,children:`Seamless & Hassle-free`}),(0,N.jsx)(`p`,{className:`text-[#153764] text-xs`,children:`Experience`})]})]})]})})})})]}),(0,N.jsx)(`section`,{id:`exhibitions`,className:`py-14 md:py-20 bg-white`,children:(0,N.jsxs)(`div`,{className:`max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10`,children:[(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`text-center max-w-[800px] mx-auto`,children:[(0,N.jsx)(`span`,{className:`\r
                  text-orange-500\r
                  text-xs\r
                  md:text-sm\r
                  font-bold\r
                  tracking-[2.5px]\r
                  uppercase\r
                `,children:`Upcoming Trade Fairs`}),(0,N.jsx)(`h2`,{className:`\r
                  mt-2\r
                  text-3xl\r
                  md:text-4xl\r
                  font-bold\r
                  text-[#102f59]\r
                `,children:`Explore Leading Exhibitions`}),(0,N.jsx)(`p`,{className:`\r
                  mt-4\r
                  text-gray-600\r
                  text-sm\r
                  md:text-base\r
                  leading-7\r
                `,children:`Explore the world's most important exhibitions and international trade fairs. Plan your business journey with complete travel, accommodation and visa assistance.`})]})}),(0,N.jsx)(`div`,{className:`\r
              mt-12\r
              grid\r
              grid-cols-1\r
              sm:grid-cols-2\r
              lg:grid-cols-3\r
              gap-7\r
            `,children:Rh.map((e,t)=>(0,N.jsx)($,{delay:t*.04,children:(0,N.jsxs)(`article`,{className:`\r
                    group\r
                    bg-white\r
                    border\r
                    border-gray-200\r
                    rounded-xl\r
                    overflow-hidden\r
                    h-full\r
                    flex\r
                    flex-col\r
                    shadow-sm\r
                    hover:shadow-xl\r
                    hover:-translate-y-1\r
                    transition-all\r
                    duration-300\r
                  `,children:[(0,N.jsxs)(`div`,{className:`\r
                      relative\r
                      w-full\r
                      h-[215px]\r
                      overflow-hidden\r
                    `,children:[(0,N.jsx)(`img`,{src:e.image,alt:e.title,className:`\r
                        w-full\r
                        h-full\r
                        object-cover\r
                        group-hover:scale-105\r
                        transition-transform\r
                        duration-500\r
                      `}),(0,N.jsx)(`div`,{className:`\r
                        absolute\r
                        inset-0\r
                        bg-gradient-to-t\r
                        from-black/40\r
                        to-transparent\r
                      `}),(0,N.jsx)(`span`,{className:`\r
                        absolute\r
                        top-4\r
                        left-4\r
                        bg-white\r
                        text-[#1556bd]\r
                        px-3\r
                        py-1.5\r
                        rounded-full\r
                        text-[11px]\r
                        font-bold\r
                        shadow\r
                      `,children:`TRADE FAIR`})]}),(0,N.jsxs)(`div`,{className:`p-5 flex flex-col flex-1`,children:[(0,N.jsx)(`h3`,{className:`\r
                        text-xl\r
                        font-bold\r
                        leading-6\r
                        text-[#17375f]\r
                        group-hover:text-[#1556bd]\r
                        transition-colors\r
                      `,children:e.title}),(0,N.jsx)(`p`,{className:`\r
                        mt-2\r
                        text-sm\r
                        leading-5\r
                        text-gray-500\r
                        min-h-[40px]\r
                      `,children:e.subtitle}),(0,N.jsxs)(`div`,{className:`\r
                        mt-5\r
                        flex\r
                        items-center\r
                        gap-3\r
                        text-sm\r
                        text-gray-600\r
                      `,children:[(0,N.jsx)(`span`,{className:`\r
                          w-8\r
                          h-8\r
                          rounded-full\r
                          bg-blue-50\r
                          text-[#1556bd]\r
                          flex\r
                          items-center\r
                          justify-center\r
                          shrink-0\r
                        `,children:(0,N.jsx)(di,{className:`text-xs`})}),(0,N.jsx)(`span`,{children:e.date})]}),(0,N.jsxs)(`div`,{className:`\r
                        mt-2\r
                        flex\r
                        items-center\r
                        gap-3\r
                        text-sm\r
                        text-gray-600\r
                      `,children:[(0,N.jsx)(`span`,{className:`\r
                          w-8\r
                          h-8\r
                          rounded-full\r
                          bg-orange-50\r
                          text-orange-500\r
                          flex\r
                          items-center\r
                          justify-center\r
                          shrink-0\r
                        `,children:(0,N.jsx)(Lr,{className:`text-xs`})}),(0,N.jsx)(`span`,{children:e.location})]}),(0,N.jsxs)(`div`,{className:`\r
                        mt-5\r
                        pt-4\r
                        border-t\r
                        border-gray-100\r
                      `,children:[(0,N.jsx)(`span`,{className:`\r
                          block\r
                          text-xs\r
                          text-gray-400\r
                          mb-1\r
                        `,children:`Package Starting From`}),(0,N.jsx)(`span`,{className:`\r
                          text-xl\r
                          font-bold\r
                          text-[#17375f]\r
                        `,children:e.price})]}),(0,N.jsxs)(`div`,{className:`mt-5 flex gap-3`,children:[e.link===`#`?(0,N.jsx)(`button`,{type:`button`,className:`\r
                            flex-1\r
                            border\r
                            border-gray-300\r
                            text-gray-500\r
                            py-2.5\r
                            rounded-md\r
                            text-sm\r
                            font-semibold\r
                          `,children:`Read More`}):(0,N.jsx)(`a`,{href:e.link,target:`_blank`,rel:`noopener noreferrer`,className:`\r
                            flex-1\r
                            text-center\r
                            border\r
                            border-[#1556bd]\r
                            text-[#1556bd]\r
                            hover:bg-[#1556bd]\r
                            hover:text-white\r
                            py-2.5\r
                            rounded-md\r
                            text-sm\r
                            font-semibold\r
                            transition-all\r
                            duration-300\r
                          `,children:`Read More`}),(0,N.jsx)(`a`,{href:`#contact`,className:`\r
                          flex-1\r
                          text-center\r
                          bg-orange-500\r
                          hover:bg-orange-600\r
                          text-white\r
                          py-2.5\r
                          rounded-md\r
                          text-sm\r
                          font-semibold\r
                          transition-colors\r
                          duration-300\r
                        `,children:`Enquire Now`})]})]})]})},e.title))})]})}),(0,N.jsxs)(`section`,{className:`\r
          py-14\r
          md:py-20\r
          bg-[#f6f9fd]\r
          overflow-hidden\r
        `,children:[(0,N.jsx)(`div`,{className:`\r
            max-w-[1280px]\r
            mx-auto\r
            px-5\r
            sm:px-8\r
            lg:px-10\r
          `,children:(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`\r
                text-center\r
                max-w-[750px]\r
                mx-auto\r
              `,children:[(0,N.jsx)(`span`,{className:`\r
                  text-orange-500\r
                  text-xs\r
                  md:text-sm\r
                  font-bold\r
                  tracking-[2.5px]\r
                  uppercase\r
                `,children:`Our Exhibition Journeys`}),(0,N.jsx)(`h2`,{className:`\r
                  mt-2\r
                  text-3xl\r
                  md:text-4xl\r
                  font-bold\r
                  text-[#102f59]\r
                `,children:`Successful Corporate Journeys`}),(0,N.jsx)(`p`,{className:`\r
                  mt-3\r
                  text-gray-500\r
                  text-sm\r
                  md:text-base\r
                `,children:`Supporting businesses across leading international exhibitions.`})]})})}),(0,N.jsx)(`div`,{className:`\r
            mt-10\r
            relative\r
            w-full\r
            overflow-hidden\r
          `,children:(0,N.jsx)(`div`,{className:`\r
              flex\r
              w-max\r
              gap-5\r
              trade-marquee\r
            `,children:[...zh,...zh].map((e,t)=>(0,N.jsx)(`div`,{className:`\r
                    w-[280px]\r
                    sm:w-[330px]\r
                    lg:w-[390px]\r
                    h-[200px]\r
                    rounded-2xl\r
                    overflow-hidden\r
                    shrink-0\r
                    shadow-md\r
                  `,children:(0,N.jsx)(`img`,{src:e,alt:`Exhibition journey ${t+1}`,className:`\r
                      w-full\r
                      h-full\r
                      object-cover\r
                    `})},t))})})]}),(0,N.jsx)(`style`,{children:`
        @keyframes tradeMarquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .trade-marquee {
          animation: tradeMarquee 35s linear infinite;
        }

        .trade-marquee:hover {
          animation-play-state: paused;
        }
      `})]})}var Vh=[{id:1,title:`International Exhibitions`,category:`Exhibitions`,image:`/sarathi-nx-official/gallery/exhibition-1.jpg`},{id:2,title:`Business Travel`,category:`Business Travel`,image:`/sarathi-nx-official/gallery/business-1.jpg`},{id:3,title:`Corporate Travel`,category:`Corporate`,image:`/sarathi-nx-official/gallery/corporate-1.jpg`},{id:4,title:`Global Exhibitions`,category:`Exhibitions`,image:`/sarathi-nx-official/gallery/exhibition-2.jpg`},{id:5,title:`International Travel`,category:`Travel`,image:`/sarathi-nx-official/gallery/travel-1.jpg`},{id:6,title:`Business Meetings`,category:`Corporate`,image:`/sarathi-nx-official/gallery/business-2.jpg`},{id:7,title:`Global Business`,category:`Business Travel`,image:`/sarathi-nx-official/gallery/business-3.jpg`},{id:8,title:`Travel Experiences`,category:`Travel`,image:`/sarathi-nx-official/gallery/travel-2.jpg`}],Hh=[`All`,`Exhibitions`,`Business Travel`,`Corporate`,`Travel`];function Uh(){let[e,t]=(0,b.useState)(`All`),[n,r]=(0,b.useState)(null),i=e===`All`?Vh:Vh.filter(t=>t.category===e);return(0,N.jsxs)(`main`,{className:`bg-white`,children:[(0,N.jsx)(`section`,{className:`bg-[#003DA5] text-white pt-36 pb-24`,children:(0,N.jsx)(`div`,{className:`max-w-7xl mx-auto px-6`,children:(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`max-w-4xl`,children:[(0,N.jsx)(`span`,{className:`text-blue-200 uppercase tracking-[4px] font-semibold text-sm`,children:`Our Gallery`}),(0,N.jsxs)(`h1`,{className:`text-4xl md:text-6xl font-bold mt-5 leading-tight`,children:[`Explore Our`,(0,N.jsx)(`span`,{className:`block text-blue-200`,children:`Travel Experiences`})]}),(0,N.jsx)(`p`,{className:`mt-6 text-blue-100 text-lg leading-8 max-w-3xl`,children:`Take a look at our international exhibitions, business travel experiences and corporate travel journeys.`})]})})})}),(0,N.jsx)(`section`,{className:`py-24 bg-[#F5F9FF]`,children:(0,N.jsxs)(`div`,{className:`max-w-7xl mx-auto px-6`,children:[(0,N.jsx)($,{children:(0,N.jsx)(`div`,{className:`flex flex-wrap justify-center gap-3 mb-14`,children:Hh.map(n=>(0,N.jsx)(`button`,{onClick:()=>t(n),className:`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${e===n?`bg-[#003DA5] text-white shadow-lg`:`bg-white text-gray-700 hover:bg-[#EAF2FF] hover:text-[#003DA5]`}`,children:n},n))})}),(0,N.jsx)(`div`,{className:`grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6`,children:i.map((e,t)=>(0,N.jsx)($,{delay:t*.08,children:(0,N.jsxs)(`button`,{type:`button`,onClick:()=>r(e),className:`group relative w-full h-80 rounded-2xl overflow-hidden bg-gray-200 shadow-md hover:shadow-2xl transition-all duration-300`,children:[(0,N.jsx)(`img`,{src:e.image,alt:e.title,className:`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700`}),(0,N.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}),(0,N.jsxs)(`div`,{className:`absolute bottom-0 left-0 right-0 p-5 text-left translate-y-5 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300`,children:[(0,N.jsx)(`p`,{className:`text-blue-200 text-sm font-semibold`,children:e.category}),(0,N.jsx)(`h3`,{className:`text-white text-lg font-bold mt-1`,children:e.title})]}),(0,N.jsx)(`div`,{className:`absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 text-[#003DA5] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`,children:(0,N.jsx)(ei,{})})]})},e.id))})]})}),(0,N.jsx)(`section`,{className:`py-20 bg-[#003DA5] text-white`,children:(0,N.jsx)(`div`,{className:`max-w-5xl mx-auto px-6 text-center`,children:(0,N.jsxs)($,{children:[(0,N.jsx)(`h2`,{className:`text-4xl md:text-5xl font-bold`,children:`Ready For Your Next Journey?`}),(0,N.jsx)(`p`,{className:`text-blue-100 text-lg mt-5 max-w-2xl mx-auto leading-7`,children:`Let Sarathi NX handle your complete business and exhibition travel requirements.`}),(0,N.jsx)(`a`,{href:`/sarathi-nx-official/#contact`,className:`inline-flex items-center gap-3 mt-8 bg-white text-[#003DA5] px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105`,children:`Plan Your Trip`})]})})}),n&&(0,N.jsxs)(`div`,{className:`fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-6`,onClick:()=>r(null),children:[(0,N.jsx)(`button`,{type:`button`,onClick:()=>r(null),className:`absolute top-6 right-6 w-12 h-12 rounded-full bg-white text-gray-800 flex items-center justify-center text-xl hover:bg-gray-200 transition`,children:(0,N.jsx)(gr,{})}),(0,N.jsxs)(`div`,{className:`max-w-5xl max-h-[85vh]`,onClick:e=>e.stopPropagation(),children:[(0,N.jsx)(`img`,{src:n.image,alt:n.title,className:`max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl`}),(0,N.jsxs)(`div`,{className:`text-center mt-5`,children:[(0,N.jsx)(`h3`,{className:`text-white text-2xl font-bold`,children:n.title}),(0,N.jsx)(`p`,{className:`text-blue-200 mt-1`,children:n.category})]})]})]})]})}function Wh(){let[e,t]=(0,b.useState)({name:``,phone:``,email:``,service:``,message:``}),[n,r]=(0,b.useState)(!1),[i,a]=(0,b.useState)(``),[o,s]=(0,b.useState)(``),[c,l]=(0,b.useState)(null),u=e=>{let{name:n,value:r}=e.target;t(e=>({...e,[n]:r})),a(``),s(``)},d=e=>{let n=e.target.value.replace(/[^a-zA-Z\s.'-]/g,``).slice(0,100);t(e=>({...e,name:n})),a(``),s(``)},f=e=>{let n=e.target.value.replace(/\D/g,``).slice(0,10);t(e=>({...e,phone:n})),a(``),s(``)},p=()=>{let t=e.name.trim(),n=e.phone.trim(),r=e.email.trim(),i=e.service.trim(),a=e.message.trim();return!t||!n||!r||!i||!a?`Please fill in all the required fields.`:/^[a-zA-Z\s.'-]+$/.test(t)?/^[0-9]{10}$/.test(n)?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)?a.length<5?`Please enter a little more detail in your message.`:``:`Please enter a valid email address.`:`Please enter a valid 10-digit mobile number.`:`Please enter a valid name using letters only.`},m=async n=>{n.preventDefault(),a(``),s(``),l(null);let i=p();if(i){s(i);return}r(!0);try{let n={name:e.name.trim(),phone:e.phone.trim(),email:e.email.trim(),service:e.service.trim(),message:e.message.trim()};console.log(`Sending enquiry:`,n);let r=await fetch(`https://www.sarathinx.com/api/enquiries`,{method:`POST`,headers:{"Content-Type":`application/json`,Accept:`application/json`},body:JSON.stringify(n)});if(console.log(`API Status:`,r.status),!r.ok){let e=``;try{let t=await r.json();e=t?.message||t?.error||``}catch{}throw r.status===400?Error(e||`Invalid enquiry details. Please check your information.`):r.status===401?Error(`You are not authorized to submit this enquiry.`):r.status===403?Error(`Enquiry submission is blocked by the server. Please check the backend security configuration.`):r.status===404?Error(`Enquiry API was not found. Please check the backend URL.`):r.status>=500?Error(`Server error. Please try again after some time.`):Error(e||`Server returned ${r.status}.`)}let i=null;try{i=await r.json()}catch{i=null}console.log(`Enquiry saved successfully:`,i),l(n),a(`Thank you! Your enquiry has been submitted successfully. Our team will contact you shortly.`),t({name:``,phone:``,email:``,service:``,message:``})}catch(e){console.error(`Enquiry submission error:`,e),e instanceof TypeError&&e.message===`Failed to fetch`?s(`Unable to connect to the server. Please make sure the Spring Boot backend is running and the API is accessible.`):s(e?.message||`Unable to submit enquiry. Please try again.`)}finally{r(!1)}},h=()=>{if(!c)return;let e=`
Hello Sarathi NX,

I have submitted a travel enquiry through your website.

Name: ${c.name}
Mobile: ${c.phone}
Email: ${c.email}
Interested In: ${c.service}

Message:
${c.message}

Thank you.
    `.trim(),t=`https://wa.me/917666984626?text=${encodeURIComponent(e)}`;window.open(t,`_blank`,`noopener,noreferrer`)},g=[{icon:Mr,label:`CALL US`,content:(0,N.jsxs)(`div`,{className:`flex flex-wrap items-center gap-x-3 gap-y-1`,children:[(0,N.jsx)(`a`,{href:`tel:+917666984626`,className:`hover:text-[#fc6602] transition-colors`,children:`+91 766 698 4626`}),(0,N.jsx)(`span`,{className:`hidden sm:inline text-white/40`,children:`|`}),(0,N.jsx)(`a`,{href:`tel:+918657867181`,className:`hover:text-[#fc6602] transition-colors`,children:`+91 865 786 7181`})]})},{icon:ni,label:`EMAIL US`,content:(0,N.jsx)(`a`,{href:`mailto:sajid@sarathinx.com`,className:`hover:text-[#fc6602] transition-colors break-all`,children:`sajid@sarathinx.com`})},{icon:Lr,label:`OUR OFFICE`,content:(0,N.jsxs)(`div`,{className:`leading-5`,children:[`1st Floor, Office No. 026, Crystal Plaza CHS Ltd,`,(0,N.jsx)(`br`,{}),`Station Road, Mira Road East, Thane - 401107`]})},{icon:si,label:`WORKING HOURS`,content:(0,N.jsxs)(`div`,{className:`flex flex-wrap items-center gap-x-3 gap-y-1`,children:[(0,N.jsx)(`span`,{children:`Monday - Saturday`}),(0,N.jsx)(`span`,{className:`hidden sm:inline text-white/40`,children:`|`}),(0,N.jsx)(`span`,{className:`text-white/85`,children:`9:30 AM - 7:00 PM`})]})}],_=[{icon:ai,title:`Expert Assistance`,text:`Dedicated travel experts to assist you 24/7`},{icon:Xr,title:`Global Support`,text:`Worldwide network & trusted partners`},{icon:Er,title:`Reliable Service`,text:`Prompt, reliable & transparent solutions`},{icon:vr,title:`Customer First`,text:`Your journey is our priority`}];return(0,N.jsxs)(`main`,{className:`bg-white overflow-hidden`,children:[(0,N.jsxs)(`section`,{className:`\r
          relative\r
          min-h-[350px]\r
          md:min-h-[400px]\r
          lg:min-h-[420px]\r
          overflow-hidden\r
        `,children:[(0,N.jsx)(`img`,{src:`https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=90`,alt:`Travel Contact`,className:`\r
            absolute\r
            inset-0\r
            w-full\r
            h-full\r
            object-cover\r
            object-center\r
          `}),(0,N.jsx)(`div`,{className:`\r
            absolute\r
            inset-0\r
            bg-gradient-to-r\r
            from-[#041d3d]/95\r
            via-[#073b70]/80\r
            to-[#073b70]/30\r
          `}),(0,N.jsx)(`div`,{className:`\r
            relative\r
            z-10\r
            max-w-[1280px]\r
            mx-auto\r
            px-5\r
            sm:px-8\r
            lg:px-10\r
            py-24\r
            md:py-28\r
            lg:py-30\r
          `,children:(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`max-w-[760px]`,children:[(0,N.jsxs)(`div`,{className:`flex items-center gap-3 mb-3 md:mb-4`,children:[(0,N.jsx)(`span`,{className:`w-10 md:w-12 h-[2px] bg-orange-500`}),(0,N.jsx)(`span`,{className:`\r
                    text-white\r
                    text-[11px]\r
                    md:text-xs\r
                    font-bold\r
                    uppercase\r
                    tracking-[2.5px]\r
                  `,children:`Contact Sarathi NX`})]}),(0,N.jsxs)(`h1`,{className:`\r
                  text-white\r
                  text-3xl\r
                  sm:text-4xl\r
                  md:text-5xl\r
                  lg:text-[56px]\r
                  font-extrabold\r
                  leading-[1.05]\r
                `,children:[`Let's Plan Your`,` `,(0,N.jsx)(`span`,{className:`text-orange-500`,children:`Next Journey.`})]}),(0,N.jsx)(`p`,{className:`\r
                  mt-4\r
                  text-white/90\r
                  text-sm\r
                  md:text-base\r
                  lg:text-[17px]\r
                  leading-6\r
                  md:leading-7\r
                  max-w-[620px]\r
                `,children:`Tell us about your travel requirements and let our experts create a smooth, reliable and personalized travel solution for you.`}),(0,N.jsxs)(`div`,{className:`flex flex-wrap gap-3 mt-6`,children:[(0,N.jsxs)(`a`,{href:`#enquiry`,className:`\r
                    inline-flex\r
                    items-center\r
                    gap-2.5\r
                    bg-orange-500\r
                    hover:bg-orange-600\r
                    text-white\r
                    px-5\r
                    py-3\r
                    md:px-6\r
                    md:py-3.5\r
                    rounded-full\r
                    text-sm\r
                    md:text-base\r
                    font-semibold\r
                    shadow-xl\r
                    transition-all\r
                    duration-300\r
                    hover:-translate-y-1\r
                  `,children:[`Send An Enquiry`,(0,N.jsx)(M,{className:`text-xs md:text-sm`})]}),(0,N.jsxs)(`a`,{href:`https://wa.me/917666984626`,target:`_blank`,rel:`noopener noreferrer`,className:`\r
                    inline-flex\r
                    items-center\r
                    gap-2.5\r
                    border\r
                    md:border-2\r
                    border-white/80\r
                    text-white\r
                    px-5\r
                    py-3\r
                    md:px-6\r
                    md:py-3.5\r
                    rounded-full\r
                    text-sm\r
                    md:text-base\r
                    font-semibold\r
                    hover:bg-white\r
                    hover:text-[#103a6d]\r
                    transition-all\r
                    duration-300\r
                  `,children:[(0,N.jsx)(rr,{}),`WhatsApp Us`]})]})]})})}),(0,N.jsx)(`div`,{className:`\r
            absolute\r
            bottom-[-1px]\r
            left-0\r
            right-0\r
            h-8\r
            md:h-10\r
            bg-white\r
            rounded-t-[50%]\r
            scale-x-110\r
          `})]}),(0,N.jsx)(`section`,{className:`relative z-20 -mt-2 pb-20 bg-white`,children:(0,N.jsx)(`div`,{className:`\r
            max-w-[1180px]\r
            mx-auto\r
            px-5\r
            sm:px-8\r
            lg:px-10\r
          `,children:(0,N.jsxs)(`div`,{className:`\r
              grid\r
              grid-cols-1\r
              sm:grid-cols-2\r
              lg:grid-cols-4\r
              gap-5\r
            `,children:[(0,N.jsx)($,{children:(0,N.jsxs)(`a`,{href:`tel:+917666984626`,className:`\r
                  group\r
                  block\r
                  bg-white\r
                  border\r
                  border-gray-100\r
                  rounded-2xl\r
                  p-6\r
                  shadow-lg\r
                  hover:shadow-2xl\r
                  hover:-translate-y-2\r
                  transition-all\r
                  duration-300\r
                `,children:[(0,N.jsx)(`div`,{className:`\r
                    w-14\r
                    h-14\r
                    rounded-2xl\r
                    bg-blue-50\r
                    text-[#1556bd]\r
                    flex\r
                    items-center\r
                    justify-center\r
                    text-xl\r
                    group-hover:bg-[#1556bd]\r
                    group-hover:text-white\r
                    transition-all\r
                  `,children:(0,N.jsx)(Mr,{})}),(0,N.jsx)(`h3`,{className:`mt-5 text-lg font-bold text-[#12385f]`,children:`Call Us`}),(0,N.jsx)(`p`,{className:`mt-2 text-gray-600 text-sm`,children:`+91 766 698 4626`})]})}),(0,N.jsx)($,{delay:.08,children:(0,N.jsxs)(`a`,{href:`mailto:sajid@sarathinx.com`,className:`\r
                  group\r
                  block\r
                  bg-white\r
                  border\r
                  border-gray-100\r
                  rounded-2xl\r
                  p-6\r
                  shadow-lg\r
                  hover:shadow-2xl\r
                  hover:-translate-y-2\r
                  transition-all\r
                  duration-300\r
                `,children:[(0,N.jsx)(`div`,{className:`\r
                    w-14\r
                    h-14\r
                    rounded-2xl\r
                    bg-blue-50\r
                    text-[#1556bd]\r
                    flex\r
                    items-center\r
                    justify-center\r
                    text-xl\r
                    group-hover:bg-[#1556bd]\r
                    group-hover:text-white\r
                    transition-all\r
                  `,children:(0,N.jsx)(ni,{})}),(0,N.jsx)(`h3`,{className:`mt-5 text-lg font-bold text-[#12385f]`,children:`Email Us`}),(0,N.jsx)(`p`,{className:`mt-2 text-gray-600 text-sm break-all`,children:`sajid@sarathinx.com`})]})}),(0,N.jsx)($,{delay:.16,children:(0,N.jsxs)(`a`,{href:`https://wa.me/917666984626`,target:`_blank`,rel:`noopener noreferrer`,className:`\r
                  group\r
                  block\r
                  bg-white\r
                  border\r
                  border-gray-100\r
                  rounded-2xl\r
                  p-6\r
                  shadow-lg\r
                  hover:shadow-2xl\r
                  hover:-translate-y-2\r
                  transition-all\r
                  duration-300\r
                `,children:[(0,N.jsx)(`div`,{className:`\r
                    w-14\r
                    h-14\r
                    rounded-2xl\r
                    bg-green-50\r
                    text-green-600\r
                    flex\r
                    items-center\r
                    justify-center\r
                    text-xl\r
                    group-hover:bg-green-600\r
                    group-hover:text-white\r
                    transition-all\r
                  `,children:(0,N.jsx)(rr,{})}),(0,N.jsx)(`h3`,{className:`mt-5 text-lg font-bold text-[#12385f]`,children:`WhatsApp`}),(0,N.jsx)(`p`,{className:`mt-2 text-gray-600 text-sm`,children:`Chat With Our Team`})]})}),(0,N.jsx)($,{delay:.24,children:(0,N.jsxs)(`div`,{className:`\r
                  bg-white\r
                  border\r
                  border-gray-100\r
                  rounded-2xl\r
                  p-6\r
                  shadow-lg\r
                `,children:[(0,N.jsx)(`div`,{className:`\r
                    w-14\r
                    h-14\r
                    rounded-2xl\r
                    bg-orange-50\r
                    text-orange-500\r
                    flex\r
                    items-center\r
                    justify-center\r
                    text-xl\r
                  `,children:(0,N.jsx)(si,{})}),(0,N.jsx)(`h3`,{className:`mt-5 text-lg font-bold text-[#12385f]`,children:`Working Hours`}),(0,N.jsxs)(`p`,{className:`mt-2 text-gray-600 text-sm leading-6`,children:[`Monday - Saturday`,(0,N.jsx)(`br`,{}),`9:30 AM - 7:00 PM`]})]})})]})})}),(0,N.jsxs)(`section`,{id:`enquiry`,className:`\r
          relative\r
          overflow-hidden\r
          bg-[#F5F8FC]\r
          py-14\r
          md:py-16\r
          lg:py-20\r
        `,children:[(0,N.jsx)(`div`,{className:`\r
            absolute\r
            -top-32\r
            -left-32\r
            w-96\r
            h-96\r
            rounded-full\r
            bg-blue-100/40\r
            blur-3xl\r
            pointer-events-none\r
          `}),(0,N.jsx)(`div`,{className:`\r
            absolute\r
            -bottom-32\r
            -right-32\r
            w-96\r
            h-96\r
            rounded-full\r
            bg-orange-100/40\r
            blur-3xl\r
            pointer-events-none\r
          `}),(0,N.jsxs)(`div`,{className:`relative z-10 max-w-7xl mx-auto px-5 md:px-8`,children:[(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`text-center max-w-3xl mx-auto mb-8 md:mb-10`,children:[(0,N.jsxs)(`div`,{className:`flex items-center justify-center gap-[10px] mb-[7px]`,children:[(0,N.jsx)(`span`,{className:`\r
                    block\r
                    w-[49px]\r
                    h-[2px]\r
                    bg-gradient-to-r\r
                    from-[#0057B8]\r
                    to-[#F16A24]\r
                  `}),(0,N.jsx)(`span`,{className:`\r
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
                  `,children:`CONTACT US`}),(0,N.jsx)(`span`,{className:`\r
                    block\r
                    w-[49px]\r
                    h-[2px]\r
                    bg-gradient-to-r\r
                    from-[#F16A24]\r
                    to-[#0057B8]\r
                  `})]}),(0,N.jsxs)(`h2`,{className:`\r
                  text-center\r
                  font-extrabold\r
                  tracking-[-1.8px]\r
                  leading-[1.02]\r
                  text-[42px]\r
                  sm:text-[46px]\r
                  md:text-[52px]\r
                  lg:text-[58px]\r
                  text-[#071B41]\r
                `,children:[`Let's Plan Your`,` `,(0,N.jsx)(`span`,{className:`\r
                    bg-gradient-to-r\r
                    from-[#0057B8]\r
                    via-[#1454D8]\r
                    to-[#F16A24]\r
                    bg-clip-text\r
                    text-transparent\r
                  `,children:`Journey.`})]}),(0,N.jsxs)(`div`,{className:`\r
                  flex\r
                  flex-wrap\r
                  items-center\r
                  justify-center\r
                  gap-[10px]\r
                  mt-[10px]\r
                  text-center\r
                `,children:[(0,N.jsx)(`span`,{className:`\r
                    text-[18px]\r
                    md:text-[20px]\r
                    font-bold\r
                    leading-none\r
                    text-[#E76624]\r
                  `,children:`Expert Travel Assistance`}),(0,N.jsx)(`span`,{className:`\r
                    text-[18px]\r
                    md:text-[20px]\r
                    font-bold\r
                    leading-none\r
                    text-[#19396D]\r
                  `,children:`|`}),(0,N.jsx)(`span`,{className:`\r
                    text-[18px]\r
                    md:text-[20px]\r
                    font-bold\r
                    leading-none\r
                    text-[#19396D]\r
                  `,children:`Let's make your journey simple.`})]}),(0,N.jsx)(`p`,{className:`\r
                  max-w-[850px]\r
                  mx-auto\r
                  mt-[14px]\r
                  text-center\r
                  text-[15px]\r
                  md:text-[16px]\r
                  leading-[1.55]\r
                  font-normal\r
                  text-[#40516D]\r
                `,children:`Planning an exhibition, business trip or corporate journey? Talk to our travel experts and let us take care of the details.`})]})}),(0,N.jsxs)(`div`,{className:`\r
              grid\r
              lg:grid-cols-[1.215fr_1.045fr]\r
              gap-5\r
              lg:gap-6\r
              items-stretch\r
            `,children:[(0,N.jsx)($,{direction:`left`,children:(0,N.jsxs)(`div`,{className:`\r
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
                `,children:[(0,N.jsx)(`img`,{src:bh,alt:``,"aria-hidden":`true`,className:`\r
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
                  `}),(0,N.jsx)(`div`,{className:`\r
                    absolute\r
                    -top-20\r
                    -right-20\r
                    w-48\r
                    h-48\r
                    rounded-full\r
                    bg-white/[0.04]\r
                    pointer-events-none\r
                  `}),(0,N.jsx)(`div`,{className:`\r
                    absolute\r
                    -bottom-24\r
                    -left-20\r
                    w-56\r
                    h-56\r
                    rounded-full\r
                    bg-[#fc6602]/10\r
                    pointer-events-none\r
                  `}),(0,N.jsxs)(`div`,{className:`relative z-10 h-full flex flex-col`,children:[(0,N.jsxs)(`div`,{className:`mb-6`,children:[(0,N.jsxs)(`div`,{className:`flex items-center gap-2 mb-3`,children:[(0,N.jsx)(Pr,{className:`\r
                          text-[#fc6602]\r
                          text-lg\r
                          rotate-[-10deg]\r
                        `}),(0,N.jsx)(`span`,{className:`\r
                          uppercase\r
                          tracking-[2.5px]\r
                          text-[11px]\r
                          md:text-xs\r
                          font-bold\r
                          text-[#fc6602]\r
                        `,children:`We're Here To Help`})]}),(0,N.jsxs)(`h3`,{className:`\r
                        text-3xl\r
                        md:text-4xl\r
                        font-extrabold\r
                        leading-[1.15]\r
                        max-w-md\r
                      `,children:[`Connect With Our`,(0,N.jsx)(`br`,{}),`Travel Experts`]}),(0,N.jsx)(`div`,{className:`\r
                        mt-4\r
                        w-20\r
                        h-[3px]\r
                        bg-gradient-to-r\r
                        from-[#fc6602]\r
                        to-transparent\r
                      `}),(0,N.jsx)(`p`,{className:`\r
                        mt-4\r
                        text-sm\r
                        md:text-base\r
                        text-white/85\r
                        leading-6\r
                        max-w-xl\r
                      `,children:`Get expert assistance for exhibitions, corporate trips, business travel and visa support.`})]}),(0,N.jsx)(`div`,{className:`space-y-2.5`,children:g.map((e,t)=>{let n=e.icon;return(0,N.jsxs)(`div`,{className:`\r
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
                          `,children:[(0,N.jsx)(`div`,{className:`\r
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
                            `,children:(0,N.jsx)(n,{className:`text-base md:text-lg`})}),(0,N.jsxs)(`div`,{className:`\r
                              min-w-0\r
                              text-[13px]\r
                              md:text-sm\r
                              leading-5\r
                            `,children:[(0,N.jsx)(`p`,{className:`\r
                                text-[#fc6602]\r
                                text-[10px]\r
                                md:text-[11px]\r
                                uppercase\r
                                tracking-wide\r
                                font-bold\r
                                mb-0.5\r
                              `,children:e.label}),(0,N.jsx)(`div`,{className:`font-medium text-white`,children:e.content})]})]},t)})}),(0,N.jsxs)(`a`,{href:`https://wa.me/917666984626`,target:`_blank`,rel:`noopener noreferrer`,className:`\r
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
                    `,children:[(0,N.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,N.jsx)(`div`,{className:`\r
                          w-10\r
                          h-10\r
                          rounded-full\r
                          bg-[#25D366]\r
                          flex\r
                          items-center\r
                          justify-center\r
                          shadow-lg\r
                        `,children:(0,N.jsx)(rr,{className:`text-xl text-white`})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{className:`font-bold text-sm`,children:`Chat with us on WhatsApp`}),(0,N.jsx)(`p`,{className:`text-[11px] text-white/85`,children:`Quick responses for your travel queries`})]})]}),(0,N.jsx)(M,{className:`\r
                        text-white\r
                        group-hover:translate-x-1\r
                        transition-transform\r
                      `})]})]})]})}),(0,N.jsx)($,{direction:`right`,children:(0,N.jsxs)(`div`,{className:`\r
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
                `,children:[(0,N.jsxs)(`div`,{className:`\r
                    flex\r
                    items-start\r
                    justify-between\r
                    gap-4\r
                    mb-7\r
                  `,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`span`,{className:`\r
                        uppercase\r
                        tracking-[2.5px]\r
                        text-[11px]\r
                        font-bold\r
                        text-[#fc6602]\r
                      `,children:`Send An Enquiry`}),(0,N.jsx)(`h3`,{className:`\r
                        text-2xl\r
                        md:text-[30px]\r
                        font-extrabold\r
                        text-[#0A2144]\r
                        mt-1.5\r
                        leading-tight\r
                      `,children:`Tell Us About Your Trip`}),(0,N.jsx)(`p`,{className:`\r
                        text-gray-500\r
                        text-xs\r
                        md:text-sm\r
                        mt-2\r
                        leading-5\r
                        max-w-[430px]\r
                      `,children:`Share your requirements and our team will get back to you.`})]}),(0,N.jsx)(`div`,{className:`\r
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
                    `,children:(0,N.jsx)(Pr,{className:`text-lg rotate-[-8deg]`})})]}),i&&(0,N.jsxs)(`div`,{className:`\r
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
                    `,children:[(0,N.jsx)(j,{className:`\r
                        text-green-600\r
                        mt-0.5\r
                        shrink-0\r
                      `}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{className:`\r
                          text-sm\r
                          font-bold\r
                          text-green-700\r
                        `,children:`Enquiry Submitted`}),(0,N.jsx)(`p`,{className:`\r
                          mt-0.5\r
                          text-xs\r
                          leading-5\r
                          text-green-700\r
                        `,children:i})]})]}),o&&(0,N.jsxs)(`div`,{className:`\r
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
                    `,children:[(0,N.jsx)(ti,{className:`\r
                        text-red-600\r
                        mt-0.5\r
                        shrink-0\r
                      `}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{className:`\r
                          text-sm\r
                          font-bold\r
                          text-red-700\r
                        `,children:`Submission Failed`}),(0,N.jsx)(`p`,{className:`\r
                          mt-0.5\r
                          text-xs\r
                          leading-5\r
                          text-red-700\r
                        `,children:o})]})]}),(0,N.jsxs)(`form`,{onSubmit:m,className:`space-y-4`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`label`,{className:`\r
                        block\r
                        text-[11px]\r
                        font-bold\r
                        text-[#182B49]\r
                        mb-1.5\r
                      `,children:`Full Name`}),(0,N.jsxs)(`div`,{className:`relative`,children:[(0,N.jsx)(ur,{className:`\r
                          absolute\r
                          left-4\r
                          top-1/2\r
                          -translate-y-1/2\r
                          text-[#52637C]\r
                          text-sm\r
                          pointer-events-none\r
                        `}),(0,N.jsx)(`input`,{type:`text`,name:`name`,value:e.name,onChange:d,required:!0,autoComplete:`name`,maxLength:100,placeholder:`Enter your name`,className:`\r
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
                        `})]})]}),(0,N.jsxs)(`div`,{className:`\r
                      grid\r
                      sm:grid-cols-[0.85fr_1.15fr]\r
                      gap-3\r
                    `,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`label`,{className:`\r
                          block\r
                          text-[11px]\r
                          font-bold\r
                          text-[#182B49]\r
                          mb-1.5\r
                        `,children:`Phone Number`}),(0,N.jsxs)(`div`,{className:`relative`,children:[(0,N.jsx)(Mr,{className:`\r
                            absolute\r
                            left-4\r
                            top-1/2\r
                            -translate-y-1/2\r
                            text-[#52637C]\r
                            text-sm\r
                            pointer-events-none\r
                          `}),(0,N.jsx)(`input`,{type:`tel`,name:`phone`,value:e.phone,onChange:f,required:!0,inputMode:`numeric`,pattern:`[0-9]{10}`,maxLength:10,minLength:10,autoComplete:`tel`,placeholder:`10-digit mobile`,className:`\r
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
                          `})]})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`label`,{className:`\r
                          block\r
                          text-[11px]\r
                          font-bold\r
                          text-[#182B49]\r
                          mb-1.5\r
                        `,children:`Email Address`}),(0,N.jsxs)(`div`,{className:`relative`,children:[(0,N.jsx)(ni,{className:`\r
                            absolute\r
                            left-4\r
                            top-1/2\r
                            -translate-y-1/2\r
                            text-[#52637C]\r
                            text-sm\r
                            pointer-events-none\r
                          `}),(0,N.jsx)(`input`,{type:`email`,name:`email`,value:e.email,onChange:u,required:!0,autoComplete:`email`,placeholder:`Enter your email`,className:`\r
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
                          `})]})]})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`label`,{className:`\r
                        block\r
                        text-[11px]\r
                        font-bold\r
                        text-[#182B49]\r
                        mb-1.5\r
                      `,children:`Service Required`}),(0,N.jsxs)(`div`,{className:`relative`,children:[(0,N.jsx)(yr,{className:`\r
                          absolute\r
                          left-4\r
                          top-1/2\r
                          -translate-y-1/2\r
                          text-[#52637C]\r
                          text-sm\r
                          pointer-events-none\r
                          z-10\r
                        `}),(0,N.jsxs)(`select`,{name:`service`,value:e.service,onChange:u,required:!0,className:`\r
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
                        `,children:[(0,N.jsx)(`option`,{value:``,disabled:!0,children:`Select a service`}),(0,N.jsx)(`option`,{value:`International Exhibition Travel`,children:`International Exhibition Travel`}),(0,N.jsx)(`option`,{value:`Corporate Travel`,children:`Corporate Travel`}),(0,N.jsx)(`option`,{value:`Business Travel`,children:`Business Travel`}),(0,N.jsx)(`option`,{value:`Visa Assistance`,children:`Visa Assistance`}),(0,N.jsx)(`option`,{value:`Hotel Booking`,children:`Hotel Booking`}),(0,N.jsx)(`option`,{value:`Group Tours`,children:`Group Tours`})]}),(0,N.jsx)(`span`,{className:`\r
                          pointer-events-none\r
                          absolute\r
                          right-4\r
                          top-1/2\r
                          -translate-y-1/2\r
                          text-[#40516D]\r
                        `,children:`▾`})]})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`label`,{className:`\r
                        block\r
                        text-[11px]\r
                        font-bold\r
                        text-[#182B49]\r
                        mb-1.5\r
                      `,children:`Message`}),(0,N.jsxs)(`div`,{className:`relative`,children:[(0,N.jsx)(ai,{className:`\r
                          absolute\r
                          left-4\r
                          top-4\r
                          text-[#52637C]\r
                          text-sm\r
                          pointer-events-none\r
                        `}),(0,N.jsx)(`textarea`,{name:`message`,value:e.message,onChange:u,required:!0,rows:5,maxLength:1e3,placeholder:`Tell us about your travel requirements...`,className:`\r
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
                        `})]})]}),(0,N.jsx)(`button`,{type:`submit`,disabled:n,className:`\r
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
                    `,children:n?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`span`,{className:`\r
                            w-4\r
                            h-4\r
                            border-2\r
                            border-white/30\r
                            border-t-white\r
                            rounded-full\r
                            animate-spin\r
                          `}),(0,N.jsx)(`span`,{children:`Submitting...`})]}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`span`,{children:`Send Enquiry`}),(0,N.jsx)(Pr,{className:`\r
                            text-sm\r
                            rotate-[-8deg]\r
                            group-hover:translate-x-2\r
                            group-hover:-translate-y-1\r
                            transition-transform\r
                            duration-500\r
                          `})]})}),c&&!n&&(0,N.jsxs)(`button`,{type:`button`,onClick:h,className:`\r
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
                      `,children:[(0,N.jsx)(rr,{className:`\r
                          text-lg\r
                          group-hover:scale-110\r
                          transition-transform\r
                        `}),(0,N.jsx)(`span`,{children:`Continue on WhatsApp`}),(0,N.jsx)(M,{className:`\r
                          text-xs\r
                          group-hover:translate-x-1\r
                          transition-transform\r
                        `})]})]})]})})]}),(0,N.jsx)($,{children:(0,N.jsx)(`div`,{className:`\r
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
              `,children:(0,N.jsx)(`div`,{className:`\r
                  grid\r
                  grid-cols-1\r
                  sm:grid-cols-2\r
                  lg:grid-cols-4\r
                `,children:_.map((e,t)=>{let n=e.icon;return(0,N.jsxs)(`div`,{className:`
                        flex
                        items-center
                        gap-4
                        px-3
                        md:px-5
                        py-3
                        ${t===_.length-1?``:`lg:border-r border-gray-200`}
                      `,children:[(0,N.jsx)(`div`,{className:`\r
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
                        `,children:(0,N.jsx)(n,{className:`text-lg`})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h4`,{className:`\r
                            text-sm\r
                            font-extrabold\r
                            text-[#0A3A82]\r
                          `,children:e.title}),(0,N.jsx)(`p`,{className:`\r
                            mt-1\r
                            text-xs\r
                            md:text-[13px]\r
                            text-gray-600\r
                            leading-5\r
                            max-w-[190px]\r
                          `,children:e.text})]})]},t)})})})})]}),(0,N.jsx)(`style`,{children:`

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

        `})]}),(0,N.jsx)(`section`,{className:`py-20 md:py-24 bg-white`,children:(0,N.jsxs)(`div`,{className:`\r
            max-w-[1280px]\r
            mx-auto\r
            px-5\r
            sm:px-8\r
            lg:px-10\r
          `,children:[(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`text-center max-w-[700px] mx-auto mb-10`,children:[(0,N.jsx)(`span`,{className:`\r
                  text-orange-500\r
                  text-xs\r
                  md:text-sm\r
                  font-bold\r
                  uppercase\r
                  tracking-[3px]\r
                `,children:`Find Us`}),(0,N.jsx)(`h2`,{className:`\r
                  mt-3\r
                  text-3xl\r
                  md:text-5xl\r
                  font-bold\r
                  text-[#12385f]\r
                `,children:`Visit Our Office`}),(0,N.jsx)(`p`,{className:`mt-4 text-gray-600 text-sm md:text-base`,children:`Crystal Plaza CHS Ltd, Station Road, Mira Road East, Thane - 401107`})]})}),(0,N.jsx)(`div`,{className:`\r
              rounded-[28px]\r
              overflow-hidden\r
              shadow-xl\r
              border\r
              border-gray-100\r
              h-[350px]\r
              md:h-[450px]\r
            `,children:(0,N.jsx)(`iframe`,{title:`Sarathi NX Office Location`,src:`https://www.google.com/maps?q=Crystal+Plaza+CHS+Ltd,+Station+Road,+Mira+Road+East,+Thane+401107&output=embed`,width:`100%`,height:`100%`,style:{border:0},loading:`lazy`,allowFullScreen:!0,referrerPolicy:`no-referrer-when-downgrade`})})]})}),(0,N.jsxs)(`section`,{className:`\r
          relative\r
          py-20\r
          md:py-24\r
          bg-[#06376b]\r
          overflow-hidden\r
        `,children:[(0,N.jsx)(`div`,{className:`\r
            absolute\r
            -left-24\r
            -top-24\r
            w-72\r
            h-72\r
            rounded-full\r
            border\r
            border-white/10\r
          `}),(0,N.jsx)(`div`,{className:`\r
            absolute\r
            -right-24\r
            -bottom-32\r
            w-96\r
            h-96\r
            rounded-full\r
            border\r
            border-white/10\r
          `}),(0,N.jsx)(`div`,{className:`\r
            relative\r
            z-10\r
            max-w-[850px]\r
            mx-auto\r
            px-5\r
            text-center\r
          `,children:(0,N.jsxs)($,{children:[(0,N.jsx)(`span`,{className:`\r
                text-orange-400\r
                text-xs\r
                md:text-sm\r
                font-bold\r
                uppercase\r
                tracking-[3px]\r
              `,children:`Sarathi NX`}),(0,N.jsxs)(`h2`,{className:`\r
                mt-4\r
                text-3xl\r
                md:text-5xl\r
                font-bold\r
                text-white\r
                leading-tight\r
              `,children:[`We Plan.`,(0,N.jsx)(`br`,{}),`You Travel. We Care.`]}),(0,N.jsx)(`p`,{className:`\r
                mt-5\r
                text-blue-100\r
                text-sm\r
                md:text-lg\r
                leading-7\r
                max-w-2xl\r
                mx-auto\r
              `,children:`Your trusted partner for international business, exhibition, corporate and holiday travel.`}),(0,N.jsxs)(`div`,{className:`flex flex-wrap justify-center gap-4 mt-8`,children:[(0,N.jsxs)(`a`,{href:`tel:+917666984626`,className:`\r
                  inline-flex\r
                  items-center\r
                  gap-3\r
                  bg-white\r
                  text-[#103a6d]\r
                  px-7\r
                  py-4\r
                  rounded-full\r
                  font-semibold\r
                  hover:bg-orange-500\r
                  hover:text-white\r
                  transition-all\r
                  duration-300\r
                `,children:[(0,N.jsx)(Mr,{}),`Call Now`]}),(0,N.jsxs)(`a`,{href:`https://wa.me/917666984626`,target:`_blank`,rel:`noopener noreferrer`,className:`\r
                  inline-flex\r
                  items-center\r
                  gap-3\r
                  border-2\r
                  border-white\r
                  text-white\r
                  px-7\r
                  py-4\r
                  rounded-full\r
                  font-semibold\r
                  hover:bg-white\r
                  hover:text-[#103a6d]\r
                  transition-all\r
                  duration-300\r
                `,children:[(0,N.jsx)(rr,{}),`WhatsApp Us`]})]})]})})]})]})}var Gh=`/assets/hotel-DViEoHGq.jpg`,Kh=[{icon:Hr,title:`Corporate Hotel Booking`,description:`Comfortable and professionally selected hotels for business travellers, corporate teams and executives.`,points:[`Business-friendly hotels`,`Flexible accommodation options`,`Corporate stay arrangements`,`Special travel requirements`]},{icon:Lr,title:`Exhibition Area Hotels`,description:`Stay close to your exhibition or trade fair venue with carefully selected accommodation options.`,points:[`Hotels near exhibition centres`,`Easy venue access`,`Convenient transportation`,`Location-based hotel selection`]},{icon:lr,title:`Group Accommodation`,description:`Complete accommodation planning for corporate groups, exhibition teams and business delegations.`,points:[`Group room coordination`,`Multiple-room bookings`,`Corporate group stays`,`Customized accommodation plans`]},{icon:Xr,title:`International Accommodation`,description:`Hotel arrangements across major international business and exhibition destinations.`,points:[`Worldwide hotel options`,`International destinations`,`Business travel assistance`,`Destination-specific support`]},{icon:mi,title:`Comfortable Stays`,description:`We help you find accommodation that matches your location, comfort, schedule and travel requirements.`,points:[`Quality accommodation`,`Convenient locations`,`Comfort-focused options`,`Personalized hotel selection`]},{icon:ii,title:`Travel Stay Assistance`,description:`From selecting the right property to coordinating your stay, our team supports you throughout.`,points:[`Hotel selection assistance`,`Booking coordination`,`Check-in support`,`Travel stay guidance`]}],qh=[{icon:Lr,title:`Prime Locations`,text:`Hotel options selected around exhibition venues, business districts, airports and important city locations.`},{icon:Hr,title:`Curated Hotels`,text:`We help identify accommodation based on comfort, location, convenience and your travel requirements.`},{icon:lr,title:`Group Expertise`,text:`Professional coordination for corporate teams, exhibition groups and business delegations.`},{icon:j,title:`Hassle-Free Planning`,text:`One team to coordinate your accommodation requirements along with your complete travel plans.`}];function Jh(){return(0,N.jsxs)(`main`,{className:`bg-white overflow-hidden`,children:[(0,N.jsxs)(`section`,{className:`\r
          relative\r
          h-[350px]\r
          sm:h-[380px]\r
          md:h-[410px]\r
          lg:h-[430px]\r
          overflow-hidden\r
          bg-[#dce5ed]\r
        `,children:[(0,N.jsx)(`img`,{src:Gh,alt:`Hotel and Accommodation`,className:`\r
            absolute\r
            inset-0\r
            w-full\r
            h-full\r
            object-cover\r
            object-center\r
          `}),(0,N.jsx)(`div`,{className:`\r
            absolute\r
            inset-0\r
            bg-gradient-to-r\r
            from-[#062f5f]/90\r
            via-[#073e76]/60\r
            to-[#073e76]/10\r
          `}),(0,N.jsx)(`div`,{className:`\r
            absolute\r
            inset-x-0\r
            bottom-0\r
            h-32\r
            bg-gradient-to-t\r
            from-black/35\r
            to-transparent\r
          `}),(0,N.jsx)(`div`,{className:`\r
            relative\r
            z-10\r
            h-full\r
            max-w-[1280px]\r
            mx-auto\r
            px-5\r
            sm:px-8\r
            lg:px-10\r
            flex\r
            items-center\r
            -translate-y-10\r
            sm:-translate-y-9\r
            md:-translate-y-8\r
            lg:-translate-y-7\r
          `,children:(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`max-w-[600px]`,children:[(0,N.jsxs)(`div`,{className:`flex items-center gap-3 mb-2`,children:[(0,N.jsx)(`span`,{className:`w-9 md:w-11 h-[2px] bg-orange-500`}),(0,N.jsx)(`span`,{className:`\r
                    text-white\r
                    text-[10px]\r
                    sm:text-xs\r
                    md:text-sm\r
                    font-bold\r
                    tracking-[2.5px]\r
                    md:tracking-[3px]\r
                  `,children:`HOTEL & ACCOMMODATION`})]}),(0,N.jsxs)(`h1`,{className:`\r
                  text-white\r
                  text-3xl\r
                  sm:text-4xl\r
                  md:text-5xl\r
                  lg:text-[54px]\r
                  font-extrabold\r
                  leading-[1.02]\r
                  drop-shadow-lg\r
                `,children:[`Stay Comfortably.`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{className:`text-orange-500`,children:`Travel Confidently.`})]}),(0,N.jsx)(`p`,{className:`\r
                  mt-3\r
                  md:mt-3.5\r
                  text-white\r
                  text-sm\r
                  sm:text-base\r
                  md:text-[17px]\r
                  leading-6\r
                  md:leading-6\r
                  max-w-[520px]\r
                  drop-shadow-md\r
                `,children:`Carefully planned accommodation for business trips, international exhibitions, corporate travel and group journeys — with comfort, convenience and location in mind.`}),(0,N.jsxs)(`a`,{href:`/sarathi-nx-official/#contact`,className:`\r
                  inline-flex\r
                  items-center\r
                  gap-2.5\r
                  mt-3.5\r
                  md:mt-4\r
                  px-5\r
                  md:px-6\r
                  py-2\r
                  md:py-2.5\r
                  rounded-full\r
                  bg-orange-500\r
                  hover:bg-orange-600\r
                  text-white\r
                  text-sm\r
                  md:text-[15px]\r
                  font-semibold\r
                  shadow-xl\r
                  transition-all\r
                  duration-300\r
                  hover:-translate-y-1\r
                `,children:[`Find Your Stay`,(0,N.jsx)(`span`,{className:`\r
                    w-6\r
                    h-6\r
                    md:w-7\r
                    md:h-7\r
                    rounded-full\r
                    bg-white\r
                    text-orange-500\r
                    flex\r
                    items-center\r
                    justify-center\r
                  `,children:(0,N.jsx)(M,{className:`text-[9px] md:text-[10px]`})})]})]})})}),(0,N.jsx)(`div`,{className:`absolute bottom-0 left-0 right-0 z-20`,children:(0,N.jsx)(`div`,{className:`max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-10`,children:(0,N.jsx)(`div`,{className:`\r
                bg-white/95\r
                backdrop-blur-md\r
                rounded-t-2xl\r
                md:rounded-t-[24px]\r
                shadow-[0_-6px_25px_rgba(0,0,0,0.12)]\r
                px-4\r
                md:px-6\r
                py-3\r
                md:py-4\r
              `,children:(0,N.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-3`,children:[(0,N.jsxs)(`div`,{className:`\r
                    flex\r
                    items-center\r
                    justify-center\r
                    sm:justify-start\r
                    gap-3\r
                    py-2\r
                    sm:py-1\r
                  `,children:[(0,N.jsx)(`div`,{className:`\r
                      w-9\r
                      h-9\r
                      md:w-10\r
                      md:h-10\r
                      rounded-full\r
                      bg-blue-50\r
                      text-[#0754bd]\r
                      flex\r
                      items-center\r
                      justify-center\r
                      text-base\r
                      md:text-lg\r
                      shrink-0\r
                    `,children:(0,N.jsx)(Hr,{})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h4`,{className:`text-[#153764] font-bold text-xs md:text-sm`,children:`Quality Hotels`}),(0,N.jsx)(`p`,{className:`text-[#153764] text-[10px] md:text-xs mt-0.5`,children:`Carefully Selected`})]})]}),(0,N.jsxs)(`div`,{className:`\r
                    flex\r
                    items-center\r
                    justify-center\r
                    sm:justify-start\r
                    gap-3\r
                    py-2\r
                    sm:py-1\r
                    sm:border-l\r
                    border-gray-200\r
                    sm:pl-6\r
                  `,children:[(0,N.jsx)(`div`,{className:`\r
                      w-9\r
                      h-9\r
                      md:w-10\r
                      md:h-10\r
                      rounded-full\r
                      bg-blue-50\r
                      text-[#0754bd]\r
                      flex\r
                      items-center\r
                      justify-center\r
                      text-base\r
                      md:text-lg\r
                      shrink-0\r
                    `,children:(0,N.jsx)(Lr,{})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h4`,{className:`text-[#153764] font-bold text-xs md:text-sm`,children:`Prime Locations`}),(0,N.jsx)(`p`,{className:`text-[#153764] text-[10px] md:text-xs mt-0.5`,children:`Near Venues & Business Hubs`})]})]}),(0,N.jsxs)(`div`,{className:`\r
                    flex\r
                    items-center\r
                    justify-center\r
                    sm:justify-start\r
                    gap-3\r
                    py-2\r
                    sm:py-1\r
                    sm:border-l\r
                    border-gray-200\r
                    sm:pl-6\r
                  `,children:[(0,N.jsx)(`div`,{className:`\r
                      w-9\r
                      h-9\r
                      md:w-10\r
                      md:h-10\r
                      rounded-full\r
                      bg-blue-50\r
                      text-[#0754bd]\r
                      flex\r
                      items-center\r
                      justify-center\r
                      text-base\r
                      md:text-lg\r
                      shrink-0\r
                    `,children:(0,N.jsx)(lr,{})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h4`,{className:`text-[#153764] font-bold text-xs md:text-sm`,children:`Group Stays`}),(0,N.jsx)(`p`,{className:`text-[#153764] text-[10px] md:text-xs mt-0.5`,children:`Corporate & Exhibition Teams`})]})]})]})})})})]}),(0,N.jsx)(`section`,{className:`py-14 md:py-18 lg:py-20 bg-white`,children:(0,N.jsx)(`div`,{className:`\r
            max-w-[850px]\r
            mx-auto\r
            px-5\r
            sm:px-8\r
            text-center\r
          `,children:(0,N.jsxs)($,{children:[(0,N.jsx)(`span`,{className:`\r
                text-orange-500\r
                text-xs\r
                md:text-sm\r
                font-bold\r
                tracking-[2.5px]\r
                uppercase\r
              `,children:`Accommodation Solutions`}),(0,N.jsxs)(`h2`,{className:`\r
                mt-3\r
                text-3xl\r
                md:text-4xl\r
                lg:text-[42px]\r
                font-bold\r
                text-[#102f59]\r
              `,children:[`The Right Stay for`,(0,N.jsxs)(`span`,{className:`text-[#1556bd]`,children:[` `,`Every Journey`]})]}),(0,N.jsx)(`p`,{className:`\r
                mt-5\r
                text-gray-600\r
                text-sm\r
                md:text-base\r
                leading-7\r
              `,children:`Whether you are attending an international exhibition, travelling for business or managing accommodation for a corporate group, we help you find a stay that fits your plans.`})]})})}),(0,N.jsx)(`section`,{className:`py-14 md:py-18 lg:py-20 bg-[#f6f9fd]`,children:(0,N.jsxs)(`div`,{className:`\r
            max-w-[1280px]\r
            mx-auto\r
            px-5\r
            sm:px-8\r
            lg:px-10\r
          `,children:[(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`text-center max-w-[760px] mx-auto`,children:[(0,N.jsx)(`span`,{className:`\r
                  text-orange-500\r
                  text-xs\r
                  md:text-sm\r
                  font-bold\r
                  tracking-[2.5px]\r
                  uppercase\r
                `,children:`Our Accommodation Services`}),(0,N.jsx)(`h2`,{className:`\r
                  mt-2\r
                  text-3xl\r
                  md:text-4xl\r
                  font-bold\r
                  text-[#102f59]\r
                `,children:`Accommodation Made Simple`}),(0,N.jsx)(`p`,{className:`\r
                  mt-4\r
                  text-gray-600\r
                  text-sm\r
                  md:text-base\r
                `,children:`From individual business stays to large corporate groups, our accommodation services are designed around your travel requirements.`})]})}),(0,N.jsx)(`div`,{className:`\r
              mt-10\r
              md:mt-12\r
              grid\r
              grid-cols-1\r
              sm:grid-cols-2\r
              lg:grid-cols-3\r
              gap-6\r
              md:gap-7\r
            `,children:Kh.map((e,t)=>{let n=e.icon;return(0,N.jsx)($,{delay:t*.05,children:(0,N.jsxs)(`article`,{className:`\r
                      group\r
                      bg-white\r
                      border\r
                      border-gray-200\r
                      rounded-2xl\r
                      p-6\r
                      md:p-7\r
                      h-full\r
                      flex\r
                      flex-col\r
                      shadow-sm\r
                      hover:shadow-[0_18px_45px_rgba(15,70,140,0.13)]\r
                      hover:-translate-y-1\r
                      transition-all\r
                      duration-300\r
                    `,children:[(0,N.jsx)(`div`,{className:`\r
                        w-14\r
                        h-14\r
                        rounded-2xl\r
                        bg-[#eaf2ff]\r
                        text-[#1556bd]\r
                        flex\r
                        items-center\r
                        justify-center\r
                        text-xl\r
                        group-hover:bg-[#1556bd]\r
                        group-hover:text-white\r
                        transition-all\r
                        duration-300\r
                      `,children:(0,N.jsx)(n,{})}),(0,N.jsx)(`h3`,{className:`\r
                        mt-5\r
                        md:mt-6\r
                        text-xl\r
                        font-bold\r
                        text-[#17375f]\r
                        group-hover:text-[#1556bd]\r
                        transition-colors\r
                      `,children:e.title}),(0,N.jsx)(`p`,{className:`\r
                        mt-3\r
                        text-gray-600\r
                        text-sm\r
                        leading-6\r
                      `,children:e.description}),(0,N.jsx)(`div`,{className:`mt-5 space-y-3`,children:e.points.map(e=>(0,N.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,N.jsx)(j,{className:`\r
                              text-[#1556bd]\r
                              mt-1\r
                              text-sm\r
                              shrink-0\r
                            `}),(0,N.jsx)(`span`,{className:`text-gray-700 text-sm`,children:e})]},e))}),(0,N.jsxs)(`a`,{href:`/sarathi-nx-official/#contact`,className:`\r
                        inline-flex\r
                        items-center\r
                        gap-2\r
                        mt-auto\r
                        pt-6\r
                        text-[#1556bd]\r
                        font-semibold\r
                        text-sm\r
                        hover:gap-3\r
                        transition-all\r
                      `,children:[`Enquire Now`,(0,N.jsx)(M,{className:`text-xs`})]})]})},e.title)})})]})}),(0,N.jsx)(`section`,{className:`py-16 md:py-20 bg-white`,children:(0,N.jsx)(`div`,{className:`\r
            max-w-[1100px]\r
            mx-auto\r
            px-5\r
            sm:px-8\r
          `,children:(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`\r
                rounded-[28px]\r
                bg-[#063b73]\r
                overflow-hidden\r
                relative\r
              `,children:[(0,N.jsx)(`div`,{className:`\r
                  absolute\r
                  -right-24\r
                  -top-24\r
                  w-72\r
                  h-72\r
                  rounded-full\r
                  bg-blue-400/10\r
                `}),(0,N.jsxs)(`div`,{className:`\r
                  relative\r
                  z-10\r
                  grid\r
                  md:grid-cols-2\r
                  gap-8\r
                  p-8\r
                  md:p-12\r
                `,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`span`,{className:`\r
                      text-orange-400\r
                      text-xs\r
                      font-bold\r
                      tracking-[2px]\r
                      uppercase\r
                    `,children:`Business & Exhibition Stays`}),(0,N.jsxs)(`h2`,{className:`\r
                      mt-3\r
                      text-3xl\r
                      md:text-4xl\r
                      font-bold\r
                      text-white\r
                      leading-tight\r
                    `,children:[`Stay Close.`,(0,N.jsx)(`br`,{}),`Save Time.`,(0,N.jsx)(`br`,{}),`Travel Better.`]}),(0,N.jsx)(`p`,{className:`\r
                      mt-4\r
                      text-blue-100\r
                      text-sm\r
                      md:text-base\r
                      leading-7\r
                    `,children:`We understand how important location is during business trips and exhibitions. Our team helps you plan accommodation around your schedule, venue and travel requirements.`})]}),(0,N.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-4`,children:[(0,N.jsxs)(`div`,{className:`\r
                      bg-white/10\r
                      border\r
                      border-white/10\r
                      rounded-2xl\r
                      p-5\r
                    `,children:[(0,N.jsx)(fi,{className:`text-orange-400 text-2xl`}),(0,N.jsx)(`h3`,{className:`text-white font-bold mt-4`,children:`Exhibition Venues`}),(0,N.jsx)(`p`,{className:`text-blue-100 text-sm mt-2 leading-6`,children:`Convenient hotel options close to major exhibition and trade fair venues.`})]}),(0,N.jsxs)(`div`,{className:`\r
                      bg-white/10\r
                      border\r
                      border-white/10\r
                      rounded-2xl\r
                      p-5\r
                    `,children:[(0,N.jsx)(kr,{className:`text-orange-400 text-2xl`}),(0,N.jsx)(`h3`,{className:`text-white font-bold mt-4`,children:`Airport Access`}),(0,N.jsx)(`p`,{className:`text-blue-100 text-sm mt-2 leading-6`,children:`Accommodation options with convenient airport connectivity.`})]}),(0,N.jsxs)(`div`,{className:`\r
                      bg-white/10\r
                      border\r
                      border-white/10\r
                      rounded-2xl\r
                      p-5\r
                    `,children:[(0,N.jsx)(lr,{className:`text-orange-400 text-2xl`}),(0,N.jsx)(`h3`,{className:`text-white font-bold mt-4`,children:`Group Stays`}),(0,N.jsx)(`p`,{className:`text-blue-100 text-sm mt-2 leading-6`,children:`Coordinated accommodation for business teams and corporate groups.`})]}),(0,N.jsxs)(`div`,{className:`\r
                      bg-white/10\r
                      border\r
                      border-white/10\r
                      rounded-2xl\r
                      p-5\r
                    `,children:[(0,N.jsx)(Hr,{className:`text-orange-400 text-2xl`}),(0,N.jsx)(`h3`,{className:`text-white font-bold mt-4`,children:`Comfortable Hotels`}),(0,N.jsx)(`p`,{className:`text-blue-100 text-sm mt-2 leading-6`,children:`Options selected around your comfort, schedule and requirements.`})]})]})]})]})})})}),(0,N.jsx)(`section`,{className:`py-16 md:py-20 bg-[#f6f9fd]`,children:(0,N.jsxs)(`div`,{className:`\r
            max-w-[1280px]\r
            mx-auto\r
            px-5\r
            sm:px-8\r
            lg:px-10\r
          `,children:[(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`text-center max-w-[760px] mx-auto`,children:[(0,N.jsx)(`span`,{className:`\r
                  text-orange-500\r
                  text-xs\r
                  md:text-sm\r
                  font-bold\r
                  tracking-[2.5px]\r
                  uppercase\r
                `,children:`Why Choose Us`}),(0,N.jsxs)(`h2`,{className:`\r
                  mt-2\r
                  text-3xl\r
                  md:text-4xl\r
                  font-bold\r
                  text-[#102f59]\r
                `,children:[`More Than Just a`,(0,N.jsxs)(`span`,{className:`text-[#1556bd]`,children:[` `,`Hotel Booking`]})]})]})}),(0,N.jsx)(`div`,{className:`\r
              mt-10\r
              md:mt-12\r
              grid\r
              grid-cols-1\r
              sm:grid-cols-2\r
              lg:grid-cols-4\r
              gap-5\r
              md:gap-6\r
            `,children:qh.map((e,t)=>{let n=e.icon;return(0,N.jsx)($,{delay:t*.07,children:(0,N.jsxs)(`div`,{className:`\r
                      h-full\r
                      bg-white\r
                      border\r
                      border-gray-100\r
                      rounded-2xl\r
                      p-6\r
                      md:p-7\r
                      text-center\r
                      shadow-sm\r
                      hover:shadow-lg\r
                      transition-all\r
                      duration-300\r
                    `,children:[(0,N.jsx)(`div`,{className:`\r
                        w-14\r
                        h-14\r
                        mx-auto\r
                        rounded-full\r
                        bg-[#1556bd]\r
                        text-white\r
                        flex\r
                        items-center\r
                        justify-center\r
                        text-xl\r
                      `,children:(0,N.jsx)(n,{})}),(0,N.jsx)(`h3`,{className:`\r
                        mt-5\r
                        text-lg\r
                        font-bold\r
                        text-[#17375f]\r
                      `,children:e.title}),(0,N.jsx)(`p`,{className:`\r
                        mt-3\r
                        text-gray-600\r
                        text-sm\r
                        leading-6\r
                      `,children:e.text})]})},e.title)})})]})}),(0,N.jsxs)(`section`,{className:`\r
          relative\r
          py-16\r
          md:py-20\r
          lg:py-24\r
          bg-[#063b73]\r
          overflow-hidden\r
        `,children:[(0,N.jsx)(`div`,{className:`\r
            absolute\r
            -top-24\r
            -right-20\r
            w-72\r
            h-72\r
            rounded-full\r
            bg-blue-400/10\r
          `}),(0,N.jsx)(`div`,{className:`\r
            absolute\r
            -bottom-32\r
            -left-20\r
            w-80\r
            h-80\r
            rounded-full\r
            bg-orange-400/10\r
          `}),(0,N.jsx)(`div`,{className:`\r
            relative\r
            z-10\r
            max-w-[850px]\r
            mx-auto\r
            px-5\r
            sm:px-8\r
            text-center\r
          `,children:(0,N.jsxs)($,{children:[(0,N.jsx)(`span`,{className:`\r
                text-orange-400\r
                text-xs\r
                md:text-sm\r
                font-bold\r
                tracking-[2.5px]\r
                uppercase\r
              `,children:`Plan Your Stay`}),(0,N.jsxs)(`h2`,{className:`\r
                mt-3\r
                text-3xl\r
                md:text-5xl\r
                font-bold\r
                text-white\r
              `,children:[`Your Next Trip Deserves`,(0,N.jsxs)(`span`,{className:`text-orange-400`,children:[` `,`the Right Stay`]})]}),(0,N.jsx)(`p`,{className:`\r
                mt-5\r
                text-blue-100\r
                text-base\r
                md:text-lg\r
                leading-7\r
                max-w-2xl\r
                mx-auto\r
              `,children:`Tell us your destination, travel dates and accommodation requirements. Our team will help you plan a comfortable and convenient stay.`}),(0,N.jsxs)(`a`,{href:`/sarathi-nx-official/#contact`,className:`\r
                inline-flex\r
                items-center\r
                gap-3\r
                mt-7\r
                md:mt-8\r
                bg-white\r
                text-[#063b73]\r
                px-7\r
                md:px-8\r
                py-3.5\r
                rounded-full\r
                font-semibold\r
                text-sm\r
                md:text-base\r
                hover:bg-orange-50\r
                transition-all\r
                duration-300\r
                hover:-translate-y-1\r
                shadow-lg\r
              `,children:[`Enquire for Accommodation`,(0,N.jsx)(M,{className:`text-sm`})]})]})})]})]})}var Yh=`/assets/visa-zPQ_ww41.jpg`,Xh=[{icon:Nr,title:`Business Visa Assistance`,description:`Professional guidance for business travellers attending meetings, exhibitions, conferences and corporate events.`,points:[`Business visa documentation`,`Application guidance`,`Invitation letter guidance`,`Travel document checklist`]},{icon:Qr,title:`Documentation Support`,description:`We help you understand and prepare the documents required for your international visa application.`,points:[`Document requirement guidance`,`Application form assistance`,`Supporting document checklist`,`Document organization`]},{icon:Xr,title:`International Visa Support`,description:`Visa assistance for travellers visiting international destinations for business, exhibitions and other travel purposes.`,points:[`Destination-specific guidance`,`International travel support`,`Visa process information`,`Application preparation`]},{icon:ci,title:`Application Assistance`,description:`Step-by-step assistance to help you understand the visa application process and required formalities.`,points:[`Application form guidance`,`Document verification support`,`Appointment guidance`,`Application preparation`]},{icon:dr,title:`Corporate Visa Support`,description:`Dedicated visa assistance for companies, executives and teams travelling internationally for business.`,points:[`Corporate traveller support`,`Employee travel documentation`,`Group visa coordination`,`Business travel assistance`]},{icon:Cr,title:`Travel Documentation`,description:`Complete guidance for important travel documents required before your international journey.`,points:[`Passport guidance`,`Visa documentation`,`Invitation documents`,`Travel paperwork checklist`]}],Zh=[{icon:ci,title:`Clear Guidance`,text:`Understand the documentation and application requirements before starting your visa process.`},{icon:dr,title:`Professional Support`,text:`Get assistance from our travel team throughout your documentation preparation.`},{icon:Xr,title:`International Destinations`,text:`Support for business and travel requirements across major international destinations.`},{icon:j,title:`Organized Process`,text:`A structured approach helps keep your application documents organized and ready.`}];function Qh(){return(0,N.jsxs)(`main`,{className:`bg-white overflow-hidden`,children:[(0,N.jsxs)(`section`,{className:`\r
          relative\r
          min-h-[480px]\r
          md:min-h-[510px]\r
          overflow-hidden\r
          bg-[#dce5ed]\r
        `,children:[(0,N.jsx)(`img`,{src:Yh,alt:`Visa and Documentation Assistance`,className:`\r
            absolute\r
            inset-0\r
            w-full\r
            h-full\r
            object-cover\r
            object-center\r
          `}),(0,N.jsx)(`div`,{className:`\r
            absolute\r
            inset-0\r
            bg-gradient-to-r\r
            from-[#062f5f]/80\r
            via-[#073e76]/45\r
            to-transparent\r
          `}),(0,N.jsx)(`div`,{className:`\r
            absolute\r
            inset-x-0\r
            bottom-0\r
            h-36\r
            bg-gradient-to-t\r
            from-black/30\r
            to-transparent\r
          `}),(0,N.jsx)(`div`,{className:`\r
            relative\r
            z-10\r
            max-w-[1280px]\r
            mx-auto\r
            px-5\r
            sm:px-8\r
            lg:px-10\r
            pt-20\r
            md:pt-24\r
            pb-28\r
          `,children:(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`max-w-[680px]`,children:[(0,N.jsxs)(`div`,{className:`flex items-center gap-3 mb-4`,children:[(0,N.jsx)(`span`,{className:`w-10 h-[2px] bg-orange-500`}),(0,N.jsx)(`span`,{className:`\r
                    text-white\r
                    text-xs\r
                    md:text-sm\r
                    font-bold\r
                    tracking-[3px]\r
                  `,children:`VISA & DOCUMENTATION`})]}),(0,N.jsxs)(`h1`,{className:`\r
                  text-white\r
                  text-4xl\r
                  sm:text-5xl\r
                  md:text-6xl\r
                  lg:text-[60px]\r
                  font-extrabold\r
                  leading-[1.04]\r
                  drop-shadow-lg\r
                `,children:[`Travel With`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{className:`text-orange-500`,children:`Confidence.`})]}),(0,N.jsx)(`p`,{className:`\r
                  mt-5\r
                  text-white\r
                  text-sm\r
                  md:text-base\r
                  lg:text-lg\r
                  leading-7\r
                  max-w-[570px]\r
                  drop-shadow-md\r
                `,children:`Reliable visa and documentation assistance for international business travel, exhibitions, corporate visits and global journeys.`}),(0,N.jsxs)(`a`,{href:`/sarathi-nx-official/#contact`,className:`\r
                  inline-flex\r
                  items-center\r
                  gap-2.5\r
                  mt-6\r
                  px-6\r
                  py-2.5\r
                  rounded-full\r
                  bg-orange-500\r
                  hover:bg-orange-600\r
                  text-white\r
                  text-sm\r
                  md:text-base\r
                  font-semibold\r
                  shadow-xl\r
                  transition-all\r
                  duration-300\r
                  hover:-translate-y-1\r
                `,children:[`Get Visa Assistance`,(0,N.jsx)(`span`,{className:`\r
                    w-7\r
                    h-7\r
                    rounded-full\r
                    bg-white\r
                    text-orange-500\r
                    flex\r
                    items-center\r
                    justify-center\r
                  `,children:(0,N.jsx)(M,{className:`text-[10px]`})})]})]})})}),(0,N.jsx)(`div`,{className:`absolute bottom-0 left-0 right-0 z-20`,children:(0,N.jsx)(`div`,{className:`max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-10`,children:(0,N.jsx)(`div`,{className:`\r
                bg-white/95\r
                backdrop-blur-md\r
                rounded-t-[26px]\r
                shadow-[0_-8px_30px_rgba(0,0,0,0.12)]\r
                px-5\r
                md:px-8\r
                py-3\r
              `,children:(0,N.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-3`,children:[(0,N.jsxs)(`div`,{className:`\r
                    flex\r
                    items-center\r
                    justify-center\r
                    sm:justify-start\r
                    gap-3\r
                    py-2.5\r
                  `,children:[(0,N.jsx)(`div`,{className:`\r
                      w-10\r
                      h-10\r
                      rounded-full\r
                      bg-blue-50\r
                      text-[#0754bd]\r
                      flex\r
                      items-center\r
                      justify-center\r
                      text-lg\r
                      shrink-0\r
                    `,children:(0,N.jsx)(Nr,{})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h4`,{className:`text-[#153764] font-bold text-sm`,children:`Visa Assistance`}),(0,N.jsx)(`p`,{className:`text-[#153764] text-xs mt-0.5`,children:`Professional Guidance`})]})]}),(0,N.jsxs)(`div`,{className:`\r
                    flex\r
                    items-center\r
                    justify-center\r
                    sm:justify-start\r
                    gap-3\r
                    py-2.5\r
                    sm:border-l\r
                    border-gray-200\r
                    sm:pl-8\r
                  `,children:[(0,N.jsx)(`div`,{className:`\r
                      w-10\r
                      h-10\r
                      rounded-full\r
                      bg-blue-50\r
                      text-[#0754bd]\r
                      flex\r
                      items-center\r
                      justify-center\r
                      text-lg\r
                      shrink-0\r
                    `,children:(0,N.jsx)(Qr,{})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h4`,{className:`text-[#153764] font-bold text-sm`,children:`Documentation`}),(0,N.jsx)(`p`,{className:`text-[#153764] text-xs mt-0.5`,children:`Organized Support`})]})]}),(0,N.jsxs)(`div`,{className:`\r
                    flex\r
                    items-center\r
                    justify-center\r
                    sm:justify-start\r
                    gap-3\r
                    py-2.5\r
                    sm:border-l\r
                    border-gray-200\r
                    sm:pl-8\r
                  `,children:[(0,N.jsx)(`div`,{className:`\r
                      w-10\r
                      h-10\r
                      rounded-full\r
                      bg-blue-50\r
                      text-[#0754bd]\r
                      flex\r
                      items-center\r
                      justify-center\r
                      text-lg\r
                      shrink-0\r
                    `,children:(0,N.jsx)(Xr,{})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h4`,{className:`text-[#153764] font-bold text-sm`,children:`Global Destinations`}),(0,N.jsx)(`p`,{className:`text-[#153764] text-xs mt-0.5`,children:`International Travel`})]})]})]})})})})]}),(0,N.jsx)(`section`,{className:`py-16 md:py-20 bg-white`,children:(0,N.jsx)(`div`,{className:`\r
            max-w-[850px]\r
            mx-auto\r
            px-5\r
            sm:px-8\r
            text-center\r
          `,children:(0,N.jsxs)($,{children:[(0,N.jsx)(`span`,{className:`\r
                text-orange-500\r
                text-xs\r
                md:text-sm\r
                font-bold\r
                tracking-[2.5px]\r
                uppercase\r
              `,children:`Visa Support`}),(0,N.jsxs)(`h2`,{className:`\r
                mt-3\r
                text-3xl\r
                md:text-4xl\r
                lg:text-[42px]\r
                font-bold\r
                text-[#102f59]\r
              `,children:[`Your Documents,`,(0,N.jsxs)(`span`,{className:`text-[#1556bd]`,children:[` `,`Handled With Care`]})]}),(0,N.jsx)(`p`,{className:`\r
                mt-5\r
                text-gray-600\r
                text-sm\r
                md:text-base\r
                leading-7\r
              `,children:`International travel often requires careful preparation. Our visa and documentation assistance helps you understand the requirements and prepare your travel documents in an organized and convenient way.`})]})})}),(0,N.jsx)(`section`,{className:`py-16 md:py-20 bg-[#f6f9fd]`,children:(0,N.jsxs)(`div`,{className:`\r
            max-w-[1280px]\r
            mx-auto\r
            px-5\r
            sm:px-8\r
            lg:px-10\r
          `,children:[(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`text-center max-w-[760px] mx-auto`,children:[(0,N.jsx)(`span`,{className:`\r
                  text-orange-500\r
                  text-xs\r
                  md:text-sm\r
                  font-bold\r
                  tracking-[2.5px]\r
                  uppercase\r
                `,children:`Our Visa Services`}),(0,N.jsx)(`h2`,{className:`\r
                  mt-2\r
                  text-3xl\r
                  md:text-4xl\r
                  font-bold\r
                  text-[#102f59]\r
                `,children:`Complete Documentation Support`}),(0,N.jsx)(`p`,{className:`\r
                  mt-4\r
                  text-gray-600\r
                  text-sm\r
                  md:text-base\r
                  leading-7\r
                `,children:`From business visa assistance to travel documentation, we help make your international travel preparation simpler and more organized.`})]})}),(0,N.jsx)(`div`,{className:`\r
              mt-12\r
              grid\r
              grid-cols-1\r
              sm:grid-cols-2\r
              lg:grid-cols-3\r
              gap-7\r
            `,children:Xh.map((e,t)=>{let n=e.icon;return(0,N.jsx)($,{delay:t*.05,children:(0,N.jsxs)(`article`,{className:`\r
                      group\r
                      bg-white\r
                      border\r
                      border-gray-200\r
                      rounded-2xl\r
                      p-7\r
                      h-full\r
                      flex\r
                      flex-col\r
                      shadow-sm\r
                      hover:shadow-[0_18px_45px_rgba(15,70,140,0.13)]\r
                      hover:-translate-y-1\r
                      transition-all\r
                      duration-300\r
                    `,children:[(0,N.jsx)(`div`,{className:`\r
                        w-14\r
                        h-14\r
                        rounded-2xl\r
                        bg-[#eaf2ff]\r
                        text-[#1556bd]\r
                        flex\r
                        items-center\r
                        justify-center\r
                        text-xl\r
                        group-hover:bg-[#1556bd]\r
                        group-hover:text-white\r
                        transition-all\r
                        duration-300\r
                      `,children:(0,N.jsx)(n,{})}),(0,N.jsx)(`h3`,{className:`\r
                        mt-6\r
                        text-xl\r
                        font-bold\r
                        text-[#17375f]\r
                        group-hover:text-[#1556bd]\r
                        transition-colors\r
                      `,children:e.title}),(0,N.jsx)(`p`,{className:`\r
                        mt-3\r
                        text-gray-600\r
                        text-sm\r
                        leading-6\r
                      `,children:e.description}),(0,N.jsx)(`div`,{className:`mt-5 space-y-3`,children:e.points.map(e=>(0,N.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,N.jsx)(j,{className:`\r
                              text-[#1556bd]\r
                              mt-1\r
                              text-sm\r
                              shrink-0\r
                            `}),(0,N.jsx)(`span`,{className:`text-gray-700 text-sm`,children:e})]},e))}),(0,N.jsxs)(`a`,{href:`/sarathi-nx-official/#contact`,className:`\r
                        inline-flex\r
                        items-center\r
                        gap-2\r
                        mt-auto\r
                        pt-6\r
                        text-[#1556bd]\r
                        font-semibold\r
                        text-sm\r
                        hover:gap-3\r
                        transition-all\r
                      `,children:[`Enquire Now`,(0,N.jsx)(M,{className:`text-xs`})]})]})},e.title)})})]})}),(0,N.jsx)(`section`,{className:`py-16 md:py-20 bg-white`,children:(0,N.jsx)(`div`,{className:`\r
            max-w-[1100px]\r
            mx-auto\r
            px-5\r
            sm:px-8\r
          `,children:(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`\r
                rounded-[28px]\r
                bg-[#063b73]\r
                overflow-hidden\r
                relative\r
              `,children:[(0,N.jsx)(`div`,{className:`\r
                  absolute\r
                  -right-24\r
                  -top-24\r
                  w-72\r
                  h-72\r
                  rounded-full\r
                  bg-blue-400/10\r
                `}),(0,N.jsxs)(`div`,{className:`\r
                  relative\r
                  z-10\r
                  grid\r
                  md:grid-cols-2\r
                  gap-10\r
                  p-8\r
                  md:p-12\r
                `,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`span`,{className:`\r
                      text-orange-400\r
                      text-xs\r
                      font-bold\r
                      tracking-[2px]\r
                      uppercase\r
                    `,children:`Prepare Before You Travel`}),(0,N.jsxs)(`h2`,{className:`\r
                      mt-3\r
                      text-3xl\r
                      md:text-4xl\r
                      font-bold\r
                      text-white\r
                      leading-tight\r
                    `,children:[`Keep Your`,(0,N.jsx)(`br`,{}),`Documents Ready.`]}),(0,N.jsx)(`p`,{className:`\r
                      mt-4\r
                      text-blue-100\r
                      text-sm\r
                      md:text-base\r
                      leading-7\r
                    `,children:`Every destination can have different visa and documentation requirements. Our team helps you understand what needs to be prepared for your trip.`}),(0,N.jsxs)(`a`,{href:`/sarathi-nx-official/#contact`,className:`\r
                      inline-flex\r
                      items-center\r
                      gap-2\r
                      mt-7\r
                      text-white\r
                      font-semibold\r
                      text-sm\r
                      hover:gap-3\r
                      transition-all\r
                    `,children:[`Speak With Our Team`,(0,N.jsx)(M,{className:`text-xs`})]})]}),(0,N.jsx)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-4`,children:[`Valid Passport`,`Visa Application`,`Invitation Documents`,`Travel Itinerary`,`Accommodation Details`,`Supporting Documents`].map(e=>(0,N.jsxs)(`div`,{className:`\r
                        flex\r
                        items-center\r
                        gap-3\r
                        bg-white/10\r
                        border\r
                        border-white/10\r
                        rounded-xl\r
                        px-4\r
                        py-4\r
                      `,children:[(0,N.jsx)(j,{className:`text-orange-400 shrink-0`}),(0,N.jsx)(`span`,{className:`text-white text-sm`,children:e})]},e))})]})]})})})}),(0,N.jsx)(`section`,{className:`py-16 md:py-20 bg-[#f6f9fd]`,children:(0,N.jsxs)(`div`,{className:`\r
            max-w-[1280px]\r
            mx-auto\r
            px-5\r
            sm:px-8\r
            lg:px-10\r
          `,children:[(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`text-center max-w-[760px] mx-auto`,children:[(0,N.jsx)(`span`,{className:`\r
                  text-orange-500\r
                  text-xs\r
                  md:text-sm\r
                  font-bold\r
                  tracking-[2.5px]\r
                  uppercase\r
                `,children:`Why Choose Us`}),(0,N.jsxs)(`h2`,{className:`\r
                  mt-2\r
                  text-3xl\r
                  md:text-4xl\r
                  font-bold\r
                  text-[#102f59]\r
                `,children:[`Visa Preparation,`,(0,N.jsxs)(`span`,{className:`text-[#1556bd]`,children:[` `,`Made Easier`]})]})]})}),(0,N.jsx)(`div`,{className:`\r
              mt-12\r
              grid\r
              grid-cols-1\r
              sm:grid-cols-2\r
              lg:grid-cols-4\r
              gap-6\r
            `,children:Zh.map((e,t)=>{let n=e.icon;return(0,N.jsx)($,{delay:t*.07,children:(0,N.jsxs)(`div`,{className:`\r
                      h-full\r
                      bg-white\r
                      border\r
                      border-gray-100\r
                      rounded-2xl\r
                      p-7\r
                      text-center\r
                      shadow-sm\r
                      hover:shadow-lg\r
                      transition-all\r
                      duration-300\r
                    `,children:[(0,N.jsx)(`div`,{className:`\r
                        w-14\r
                        h-14\r
                        mx-auto\r
                        rounded-full\r
                        bg-[#1556bd]\r
                        text-white\r
                        flex\r
                        items-center\r
                        justify-center\r
                        text-xl\r
                      `,children:(0,N.jsx)(n,{})}),(0,N.jsx)(`h3`,{className:`\r
                        mt-5\r
                        text-lg\r
                        font-bold\r
                        text-[#17375f]\r
                      `,children:e.title}),(0,N.jsx)(`p`,{className:`\r
                        mt-3\r
                        text-gray-600\r
                        text-sm\r
                        leading-6\r
                      `,children:e.text})]})},e.title)})})]})}),(0,N.jsxs)(`section`,{className:`\r
          relative\r
          py-20\r
          md:py-24\r
          bg-[#063b73]\r
          overflow-hidden\r
        `,children:[(0,N.jsx)(`div`,{className:`\r
            absolute\r
            -top-24\r
            -right-20\r
            w-72\r
            h-72\r
            rounded-full\r
            bg-blue-400/10\r
          `}),(0,N.jsx)(`div`,{className:`\r
            absolute\r
            -bottom-32\r
            -left-20\r
            w-80\r
            h-80\r
            rounded-full\r
            bg-orange-400/10\r
          `}),(0,N.jsx)(`div`,{className:`\r
            relative\r
            z-10\r
            max-w-[850px]\r
            mx-auto\r
            px-5\r
            sm:px-8\r
            text-center\r
          `,children:(0,N.jsxs)($,{children:[(0,N.jsx)(`span`,{className:`\r
                text-orange-400\r
                text-xs\r
                md:text-sm\r
                font-bold\r
                tracking-[2.5px]\r
                uppercase\r
              `,children:`Start Your Application`}),(0,N.jsxs)(`h2`,{className:`\r
                mt-3\r
                text-3xl\r
                md:text-5xl\r
                font-bold\r
                text-white\r
              `,children:[`Planning an International`,(0,N.jsxs)(`span`,{className:`text-orange-400`,children:[` `,`Business Trip?`]})]}),(0,N.jsx)(`p`,{className:`\r
                mt-5\r
                text-blue-100\r
                text-base\r
                md:text-lg\r
                leading-7\r
                max-w-2xl\r
                mx-auto\r
              `,children:`Let our travel team help you understand the visa and documentation requirements for your upcoming journey.`}),(0,N.jsxs)(`a`,{href:`/sarathi-nx-official/#contact`,className:`\r
                inline-flex\r
                items-center\r
                gap-3\r
                mt-8\r
                bg-white\r
                text-[#063b73]\r
                px-8\r
                py-3.5\r
                rounded-full\r
                font-semibold\r
                hover:bg-orange-50\r
                transition-all\r
                duration-300\r
                hover:-translate-y-1\r
                shadow-lg\r
              `,children:[`Contact Our Team`,(0,N.jsx)(M,{className:`text-sm`})]})]})})]})]})}var $h=[{title:`Dubai Luxury Escape`,location:`Dubai, UAE`,duration:`5 Nights / 6 Days`,price:`Starting from ₹59,999`,image:`https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85`,description:`Experience the luxury, entertainment and iconic attractions of Dubai with a carefully planned holiday package.`,highlights:[`Luxury hotel stay`,`Dubai city tour`,`Desert safari`,`Airport transfers`]},{title:`Maldives Premium Escape`,location:`Maldives`,duration:`4 Nights / 5 Days`,price:`Starting from ₹74,999`,image:`https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85`,description:`Relax in the tropical paradise of Maldives with beautiful beaches, premium accommodation and unforgettable experiences.`,highlights:[`Beach resort stay`,`Daily breakfast`,`Island transfers`,`Leisure activities`]},{title:`Singapore Holiday`,location:`Singapore`,duration:`5 Nights / 6 Days`,price:`Starting from ₹64,999`,image:`https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=85`,description:`Discover Singapore's modern skyline, attractions, shopping and vibrant city life with a comfortable holiday itinerary.`,highlights:[`Premium hotel`,`City sightseeing`,`Universal Studios`,`Airport transfers`]},{title:`Switzerland Scenic Escape`,location:`Switzerland`,duration:`7 Nights / 8 Days`,price:`Starting from ₹1,49,999`,image:`https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=85`,description:`Enjoy breathtaking Alpine landscapes, charming towns and unforgettable European experiences.`,highlights:[`Premium accommodation`,`Swiss scenic train`,`Mountain excursions`,`Sightseeing tours`]},{title:`Bali Premium Retreat`,location:`Bali, Indonesia`,duration:`5 Nights / 6 Days`,price:`Starting from ₹49,999`,image:`https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=85`,description:`A relaxing tropical holiday combining beaches, culture, nature and premium experiences in Bali.`,highlights:[`Premium resort stay`,`Bali sightseeing`,`Temple visits`,`Private transfers`]},{title:`Paris & Europe Escape`,location:`Paris, France`,duration:`6 Nights / 7 Days`,price:`Starting from ₹1,29,999`,image:`https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85`,description:`Explore the romance, architecture and culture of Paris with a beautifully curated European holiday.`,highlights:[`Central hotel stay`,`Paris city tour`,`Iconic landmarks`,`Airport transfers`]}];function eg(){return(0,N.jsxs)(`main`,{className:`bg-white overflow-hidden`,children:[(0,N.jsxs)(`section`,{className:`\r
          relative\r
          h-[430px]\r
          sm:h-[450px]\r
          md:h-[480px]\r
          overflow-hidden\r
        `,children:[(0,N.jsx)(`img`,{src:`https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2000&q=90`,alt:`Premium Holiday Packages`,className:`\r
            absolute\r
            inset-0\r
            w-full\r
            h-full\r
            object-cover\r
            object-center\r
          `}),(0,N.jsx)(`div`,{className:`\r
            absolute\r
            inset-0\r
            bg-gradient-to-r\r
            from-[#071f3d]/85\r
            via-[#0b315c]/55\r
            to-transparent\r
          `}),(0,N.jsx)(`div`,{className:`\r
            absolute\r
            inset-x-0\r
            bottom-0\r
            h-28\r
            bg-gradient-to-t\r
            from-black/35\r
            to-transparent\r
          `}),(0,N.jsx)(`div`,{className:`\r
            relative\r
            z-10\r
            max-w-[1280px]\r
            mx-auto\r
            px-5\r
            sm:px-8\r
            lg:px-10\r
            pt-20\r
            md:pt-24\r
          `,children:(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`max-w-[680px]`,children:[(0,N.jsxs)(`div`,{className:`flex items-center gap-3 mb-3`,children:[(0,N.jsx)(`span`,{className:`w-9 h-[2px] bg-orange-500`}),(0,N.jsx)(`span`,{className:`\r
                    text-white\r
                    text-[10px]\r
                    md:text-xs\r
                    font-bold\r
                    tracking-[2.5px]\r
                  `,children:`PREMIUM HOLIDAY PACKAGES`})]}),(0,N.jsxs)(`h1`,{className:`\r
                  text-white\r
                  text-3xl\r
                  sm:text-4xl\r
                  md:text-5xl\r
                  lg:text-[58px]\r
                  font-extrabold\r
                  leading-[1.03]\r
                  drop-shadow-xl\r
                `,children:[`Holidays Made`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{className:`text-orange-500`,children:`Extraordinary.`})]}),(0,N.jsx)(`p`,{className:`\r
                  mt-4\r
                  text-white/90\r
                  text-sm\r
                  md:text-base\r
                  leading-6\r
                  max-w-[550px]\r
                `,children:`Discover beautifully curated holiday experiences with premium stays, unforgettable destinations and personalized travel arrangements.`}),(0,N.jsxs)(`a`,{href:`/sarathi-nx-official/#contact`,className:`\r
                  inline-flex\r
                  items-center\r
                  gap-2\r
                  mt-5\r
                  bg-orange-500\r
                  hover:bg-orange-600\r
                  text-white\r
                  px-5\r
                  py-2.5\r
                  rounded-full\r
                  text-sm\r
                  font-semibold\r
                  shadow-lg\r
                  transition-all\r
                  duration-300\r
                  hover:-translate-y-1\r
                `,children:[`Explore Packages`,(0,N.jsx)(`span`,{className:`\r
                    w-6\r
                    h-6\r
                    rounded-full\r
                    bg-white\r
                    text-orange-500\r
                    flex\r
                    items-center\r
                    justify-center\r
                  `,children:(0,N.jsx)(M,{className:`text-[10px]`})})]})]})})}),(0,N.jsx)(`div`,{className:`absolute bottom-0 left-0 right-0 z-20`,children:(0,N.jsx)(`div`,{className:`max-w-[1280px] mx-auto px-3 sm:px-6 lg:px-10`,children:(0,N.jsx)(`div`,{className:`\r
                bg-white/95\r
                backdrop-blur-md\r
                rounded-t-[22px]\r
                shadow-[0_-8px_25px_rgba(0,0,0,0.12)]\r
                px-4\r
                md:px-6\r
                py-3\r
              `,children:(0,N.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-3`,children:[(0,N.jsxs)(`div`,{className:`\r
                    flex\r
                    items-center\r
                    justify-center\r
                    sm:justify-start\r
                    gap-3\r
                    py-2\r
                  `,children:[(0,N.jsx)(`div`,{className:`\r
                      w-9\r
                      h-9\r
                      rounded-full\r
                      bg-orange-50\r
                      text-orange-500\r
                      flex\r
                      items-center\r
                      justify-center\r
                      text-base\r
                    `,children:(0,N.jsx)(pr,{})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h4`,{className:`text-[#153764] font-bold text-xs`,children:`Handpicked Holidays`}),(0,N.jsx)(`p`,{className:`text-gray-500 text-[10px] mt-0.5`,children:`Curated Experiences`})]})]}),(0,N.jsxs)(`div`,{className:`\r
                    flex\r
                    items-center\r
                    justify-center\r
                    sm:justify-start\r
                    gap-3\r
                    py-2\r
                    sm:border-l\r
                    border-gray-200\r
                    sm:pl-6\r
                  `,children:[(0,N.jsx)(`div`,{className:`\r
                      w-9\r
                      h-9\r
                      rounded-full\r
                      bg-blue-50\r
                      text-[#1556bd]\r
                      flex\r
                      items-center\r
                      justify-center\r
                      text-base\r
                    `,children:(0,N.jsx)(Hr,{})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h4`,{className:`text-[#153764] font-bold text-xs`,children:`Premium Stays`}),(0,N.jsx)(`p`,{className:`text-gray-500 text-[10px] mt-0.5`,children:`Comfortable Accommodation`})]})]}),(0,N.jsxs)(`div`,{className:`\r
                    flex\r
                    items-center\r
                    justify-center\r
                    sm:justify-start\r
                    gap-3\r
                    py-2\r
                    sm:border-l\r
                    border-gray-200\r
                    sm:pl-6\r
                  `,children:[(0,N.jsx)(`div`,{className:`\r
                      w-9\r
                      h-9\r
                      rounded-full\r
                      bg-blue-50\r
                      text-[#1556bd]\r
                      flex\r
                      items-center\r
                      justify-center\r
                      text-base\r
                    `,children:(0,N.jsx)(Ar,{})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h4`,{className:`text-[#153764] font-bold text-xs`,children:`Complete Travel`}),(0,N.jsx)(`p`,{className:`text-gray-500 text-[10px] mt-0.5`,children:`From Planning To Return`})]})]})]})})})})]}),(0,N.jsx)(`section`,{className:`py-16 md:py-20 bg-white`,children:(0,N.jsx)(`div`,{className:`max-w-[850px] mx-auto px-5 sm:px-8 text-center`,children:(0,N.jsxs)($,{children:[(0,N.jsx)(`span`,{className:`\r
                text-orange-500\r
                text-xs\r
                md:text-sm\r
                font-bold\r
                tracking-[2.5px]\r
                uppercase\r
              `,children:`Discover The World`}),(0,N.jsxs)(`h2`,{className:`\r
                mt-3\r
                text-3xl\r
                md:text-4xl\r
                lg:text-[42px]\r
                font-bold\r
                text-[#102f59]\r
              `,children:[`Your Dream Holiday,`,(0,N.jsxs)(`span`,{className:`text-[#1556bd]`,children:[` `,`Beautifully Planned`]})]}),(0,N.jsx)(`p`,{className:`\r
                mt-5\r
                text-gray-600\r
                text-sm\r
                md:text-base\r
                leading-7\r
              `,children:`Whether you are looking for a relaxing beach escape, an exciting city break or an unforgettable international journey, our holiday packages are designed to make every moment of your trip special.`})]})})}),(0,N.jsx)(`section`,{className:`py-16 md:py-20 bg-[#f6f9fd]`,children:(0,N.jsxs)(`div`,{className:`\r
            max-w-[1280px]\r
            mx-auto\r
            px-5\r
            sm:px-8\r
            lg:px-10\r
          `,children:[(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`text-center max-w-[760px] mx-auto`,children:[(0,N.jsx)(`span`,{className:`\r
                  text-orange-500\r
                  text-xs\r
                  md:text-sm\r
                  font-bold\r
                  tracking-[2.5px]\r
                  uppercase\r
                `,children:`Our Holiday Collection`}),(0,N.jsxs)(`h2`,{className:`\r
                  mt-2\r
                  text-3xl\r
                  md:text-4xl\r
                  font-bold\r
                  text-[#102f59]\r
                `,children:[`Explore Our`,(0,N.jsxs)(`span`,{className:`text-[#1556bd]`,children:[` `,`Premium Packages`]})]}),(0,N.jsx)(`p`,{className:`mt-4 text-gray-600 leading-7`,children:`Choose your destination and let us take care of the details.`})]})}),(0,N.jsx)(`div`,{className:`\r
              mt-12\r
              grid\r
              grid-cols-1\r
              md:grid-cols-2\r
              lg:grid-cols-3\r
              gap-7\r
            `,children:$h.map((e,t)=>(0,N.jsx)($,{delay:t*.06,children:(0,N.jsxs)(`article`,{className:`\r
                    group\r
                    bg-white\r
                    rounded-2xl\r
                    overflow-hidden\r
                    border\r
                    border-gray-100\r
                    shadow-sm\r
                    hover:shadow-[0_20px_50px_rgba(15,70,140,0.15)]\r
                    transition-all\r
                    duration-300\r
                    hover:-translate-y-2\r
                    h-full\r
                    flex\r
                    flex-col\r
                  `,children:[(0,N.jsxs)(`div`,{className:`relative h-[245px] overflow-hidden`,children:[(0,N.jsx)(`img`,{src:e.image,alt:e.title,className:`\r
                        w-full\r
                        h-full\r
                        object-cover\r
                        group-hover:scale-105\r
                        transition-transform\r
                        duration-700\r
                      `}),(0,N.jsx)(`div`,{className:`\r
                        absolute\r
                        inset-0\r
                        bg-gradient-to-t\r
                        from-black/60\r
                        via-transparent\r
                        to-transparent\r
                      `}),(0,N.jsxs)(`div`,{className:`\r
                        absolute\r
                        bottom-4\r
                        left-5\r
                        flex\r
                        items-center\r
                        gap-2\r
                        text-white\r
                        text-sm\r
                        font-medium\r
                      `,children:[(0,N.jsx)(Lr,{className:`text-orange-400`}),e.location]}),(0,N.jsxs)(`div`,{className:`\r
                        absolute\r
                        top-4\r
                        right-4\r
                        bg-white\r
                        rounded-full\r
                        px-3\r
                        py-1.5\r
                        flex\r
                        items-center\r
                        gap-1\r
                        shadow-lg\r
                      `,children:[(0,N.jsx)(Sr,{className:`text-orange-400 text-xs`}),(0,N.jsx)(`span`,{className:`text-[#17375f] text-xs font-bold`,children:`Premium`})]})]}),(0,N.jsxs)(`div`,{className:`p-6 flex flex-col flex-1`,children:[(0,N.jsx)(`h3`,{className:`\r
                        text-xl\r
                        font-bold\r
                        text-[#17375f]\r
                        group-hover:text-[#1556bd]\r
                        transition-colors\r
                      `,children:e.title}),(0,N.jsxs)(`div`,{className:`\r
                        mt-3\r
                        flex\r
                        items-center\r
                        gap-2\r
                        text-gray-500\r
                        text-sm\r
                      `,children:[(0,N.jsx)(di,{className:`text-[#1556bd]`}),e.duration]}),(0,N.jsx)(`p`,{className:`\r
                        mt-4\r
                        text-gray-600\r
                        text-sm\r
                        leading-6\r
                      `,children:e.description}),(0,N.jsx)(`div`,{className:`mt-5 space-y-2.5`,children:e.highlights.map(e=>(0,N.jsxs)(`div`,{className:`flex items-center gap-2.5`,children:[(0,N.jsx)(j,{className:`\r
                              text-[#1556bd]\r
                              text-xs\r
                            `}),(0,N.jsx)(`span`,{className:`text-gray-700 text-sm`,children:e})]},e))}),(0,N.jsxs)(`div`,{className:`\r
                        mt-auto\r
                        pt-6\r
                        flex\r
                        items-end\r
                        justify-between\r
                        gap-4\r
                      `,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{className:`text-gray-400 text-xs`,children:`Package Price`}),(0,N.jsx)(`p`,{className:`\r
                            text-[#17375f]\r
                            font-bold\r
                            text-lg\r
                            mt-1\r
                          `,children:e.price})]}),(0,N.jsx)(`a`,{href:`/sarathi-nx-official/#contact`,className:`\r
                          w-11\r
                          h-11\r
                          rounded-full\r
                          bg-[#1556bd]\r
                          text-white\r
                          flex\r
                          items-center\r
                          justify-center\r
                          hover:bg-orange-500\r
                          transition-colors\r
                          duration-300\r
                        `,"aria-label":`Enquire about ${e.title}`,children:(0,N.jsx)(M,{className:`text-sm`})})]})]})]})},e.title))})]})}),(0,N.jsx)(`section`,{className:`py-16 md:py-20 bg-white`,children:(0,N.jsx)(`div`,{className:`\r
            max-w-[1150px]\r
            mx-auto\r
            px-5\r
            sm:px-8\r
          `,children:(0,N.jsxs)(`div`,{className:`\r
              rounded-[30px]\r
              overflow-hidden\r
              bg-[#063b73]\r
              relative\r
            `,children:[(0,N.jsx)(`div`,{className:`\r
                absolute\r
                -right-24\r
                -top-24\r
                w-80\r
                h-80\r
                rounded-full\r
                bg-blue-400/10\r
              `}),(0,N.jsxs)(`div`,{className:`\r
                relative\r
                z-10\r
                grid\r
                md:grid-cols-2\r
                gap-10\r
                p-8\r
                md:p-12\r
              `,children:[(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`span`,{className:`\r
                      text-orange-400\r
                      text-xs\r
                      font-bold\r
                      tracking-[2px]\r
                      uppercase\r
                    `,children:`More Than A Holiday`}),(0,N.jsxs)(`h2`,{className:`\r
                      mt-3\r
                      text-3xl\r
                      md:text-4xl\r
                      font-bold\r
                      text-white\r
                      leading-tight\r
                    `,children:[`We Create`,(0,N.jsx)(`br`,{}),`Travel Memories.`]}),(0,N.jsx)(`p`,{className:`\r
                      mt-5\r
                      text-blue-100\r
                      text-sm\r
                      md:text-base\r
                      leading-7\r
                      max-w-lg\r
                    `,children:`Our team takes care of the important details so you can spend more time enjoying your destination.`}),(0,N.jsxs)(`a`,{href:`/sarathi-nx-official/#contact`,className:`\r
                      inline-flex\r
                      items-center\r
                      gap-2\r
                      mt-7\r
                      text-white\r
                      font-semibold\r
                      text-sm\r
                      hover:gap-3\r
                      transition-all\r
                    `,children:[`Plan Your Holiday`,(0,N.jsx)(M,{className:`text-xs`})]})]})}),(0,N.jsx)(`div`,{className:`grid grid-cols-2 gap-4`,children:[{number:`01`,title:`Curated`,text:`Carefully designed itineraries`},{number:`02`,title:`Comfortable`,text:`Quality stays and transfers`},{number:`03`,title:`Flexible`,text:`Packages around your needs`},{number:`04`,title:`Supported`,text:`Travel assistance throughout`}].map(e=>(0,N.jsxs)(`div`,{className:`\r
                      bg-white/10\r
                      border\r
                      border-white/10\r
                      rounded-2xl\r
                      p-5\r
                    `,children:[(0,N.jsx)(`span`,{className:`\r
                        text-orange-400\r
                        font-bold\r
                        text-sm\r
                      `,children:e.number}),(0,N.jsx)(`h3`,{className:`\r
                        mt-3\r
                        text-white\r
                        font-bold\r
                      `,children:e.title}),(0,N.jsx)(`p`,{className:`\r
                        mt-2\r
                        text-blue-100\r
                        text-xs\r
                        leading-5\r
                      `,children:e.text})]},e.number))})]})]})})}),(0,N.jsx)(`section`,{className:`\r
          py-20\r
          md:py-24\r
          bg-[#f6f9fd]\r
        `,children:(0,N.jsx)(`div`,{className:`\r
            max-w-[850px]\r
            mx-auto\r
            px-5\r
            sm:px-8\r
            text-center\r
          `,children:(0,N.jsxs)($,{children:[(0,N.jsx)(`span`,{className:`\r
                text-orange-500\r
                text-xs\r
                md:text-sm\r
                font-bold\r
                tracking-[2.5px]\r
                uppercase\r
              `,children:`Your Next Escape Awaits`}),(0,N.jsxs)(`h2`,{className:`\r
                mt-3\r
                text-3xl\r
                md:text-5xl\r
                font-bold\r
                text-[#102f59]\r
              `,children:[`Ready To Plan Your`,(0,N.jsxs)(`span`,{className:`text-[#1556bd]`,children:[` `,`Dream Holiday?`]})]}),(0,N.jsx)(`p`,{className:`\r
                mt-5\r
                text-gray-600\r
                text-base\r
                md:text-lg\r
                leading-7\r
                max-w-2xl\r
                mx-auto\r
              `,children:`Tell us where you want to go and we will help you create a holiday experience around your travel style, preferences and budget.`}),(0,N.jsxs)(`a`,{href:`/sarathi-nx-official/#contact`,className:`\r
                inline-flex\r
                items-center\r
                gap-3\r
                mt-8\r
                bg-[#1556bd]\r
                hover:bg-[#0d438f]\r
                text-white\r
                px-8\r
                py-4\r
                rounded-full\r
                font-semibold\r
                shadow-lg\r
                transition-all\r
                duration-300\r
                hover:-translate-y-1\r
              `,children:[`Start Planning`,(0,N.jsx)(M,{})]})]})})})]})}function tg(){return(0,N.jsxs)(`div`,{className:`\r
        fixed\r
        bottom-6\r
        right-5\r
        z-[100]\r
        flex\r
        flex-col\r
        items-center\r
        gap-4\r
      `,children:[(0,N.jsxs)(`div`,{className:`relative`,children:[(0,N.jsx)(`span`,{className:`\r
            absolute\r
            inset-[-5px]\r
            rounded-full\r
            border-2\r
            border-[#25D366]/50\r
            animate-contact-pulse\r
            pointer-events-none\r
          `}),(0,N.jsx)(`span`,{className:`\r
            absolute\r
            inset-[-9px]\r
            rounded-full\r
            border\r
            border-[#25D366]/20\r
            animate-contact-pulse-slow\r
            pointer-events-none\r
          `}),(0,N.jsx)(`a`,{href:`https://wa.me/917666984626?text=Hello%20Sarathi%20NX%2C%20I%20would%20like%20to%20know%20more%20about%20your%20travel%20services.`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Chat with Sarathi NX on WhatsApp`,className:`\r
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
          `,children:(0,N.jsx)(rr,{className:`animate-whatsapp-icon`})})]}),(0,N.jsxs)(`div`,{className:`relative`,children:[(0,N.jsx)(`span`,{className:`\r
            absolute\r
            inset-[-5px]\r
            rounded-full\r
            border-2\r
            border-[#0057B8]/45\r
            animate-contact-pulse\r
            pointer-events-none\r
          `}),(0,N.jsx)(`span`,{className:`\r
            absolute\r
            inset-[-9px]\r
            rounded-full\r
            border\r
            border-[#0057B8]/20\r
            animate-contact-pulse-slow\r
            pointer-events-none\r
          `}),(0,N.jsx)(`a`,{href:`tel:+917666984626`,"aria-label":`Call Sarathi NX`,className:`\r
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
          `,children:(0,N.jsx)(Mr,{className:`animate-phone-icon`})})]}),(0,N.jsx)(`style`,{children:`

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

      `})]})}var ng=`https://sarathinx.com/api`;function rg(){let e=xt(),[t,n]=(0,b.useState)(``),[r,i]=(0,b.useState)(``),[a,o]=(0,b.useState)(``),[s,c]=(0,b.useState)(!1);return(0,N.jsx)(`div`,{className:`flex min-h-screen items-center justify-center bg-gray-100 px-4`,children:(0,N.jsxs)(`div`,{className:`w-full max-w-md rounded-2xl bg-white p-8 shadow-lg`,children:[(0,N.jsxs)(`div`,{className:`mb-8 text-center`,children:[(0,N.jsx)(`h1`,{className:`text-3xl font-bold text-gray-800`,children:`Admin Login`}),(0,N.jsx)(`p`,{className:`mt-2 text-gray-500`,children:`Sarathi NX Admin Panel`})]}),a&&(0,N.jsx)(`div`,{className:`mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600`,children:a}),(0,N.jsxs)(`form`,{onSubmit:async n=>{n.preventDefault(),o(``),c(!0);try{let n=`${ng}/admin/login?username=${encodeURIComponent(t)}&password=${encodeURIComponent(r)}`,i=await fetch(n,{method:`POST`}),a=await i.json();if(!i.ok)throw Error(typeof a==`string`?a:a?.message||`Invalid username or password`);if(!a.token)throw Error(`Login successful, but token was not received.`);localStorage.setItem(`adminToken`,a.token),localStorage.setItem(`adminUsername`,a.username||t),e(`/admin`,{replace:!0})}catch(e){console.error(`Admin login error:`,e),o(e.message||`Unable to login. Please try again.`)}finally{c(!1)}},children:[(0,N.jsxs)(`div`,{className:`mb-5`,children:[(0,N.jsx)(`label`,{className:`mb-2 block text-sm font-medium text-gray-700`,children:`Username`}),(0,N.jsx)(`input`,{type:`text`,value:t,onChange:e=>n(e.target.value),placeholder:`Enter username`,autoComplete:`username`,required:!0,disabled:s,className:`w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100 disabled:bg-gray-100`})]}),(0,N.jsxs)(`div`,{className:`mb-6`,children:[(0,N.jsx)(`label`,{className:`mb-2 block text-sm font-medium text-gray-700`,children:`Password`}),(0,N.jsx)(`input`,{type:`password`,value:r,onChange:e=>i(e.target.value),placeholder:`Enter password`,autoComplete:`current-password`,required:!0,disabled:s,className:`w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100 disabled:bg-gray-100`})]}),(0,N.jsx)(`button`,{type:`submit`,disabled:s,className:`w-full rounded-lg bg-teal-600 py-3 font-semibold text-white transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60`,children:s?`Logging in...`:`Login`})]})]})})}var ig=`https://sarathinx.com/api`;function ag(){let e=xt(),[t,n]=(0,b.useState)([]),[r,i]=(0,b.useState)(!0),[a,o]=(0,b.useState)(``),[s,c]=(0,b.useState)(``),[l,u]=(0,b.useState)(`All`),[d,f]=(0,b.useState)(null),p=localStorage.getItem(`adminUsername`),m=()=>{localStorage.removeItem(`adminToken`),localStorage.removeItem(`adminUsername`),e(`/admin/login`,{replace:!0})},h=async()=>{i(!0),o(``);try{let e=localStorage.getItem(`adminToken`);if(!e){m();return}let t=await fetch(`${ig}/enquiries`,{method:`GET`,headers:{Authorization:`Bearer ${e}`,"Content-Type":`application/json`}});if(t.status===401||t.status===403){m();return}if(!t.ok)throw Error(`Failed to fetch enquiries (${t.status})`);let r=await t.json();n(Array.isArray(r)?r:[])}catch(e){console.error(`Error fetching enquiries:`,e),o(`Unable to load enquiries. Please try again.`)}finally{i(!1)}};(0,b.useEffect)(()=>{h()},[]);let g=()=>{m()},_=async e=>{if(window.confirm(`Are you sure you want to delete this enquiry?`))try{let t=localStorage.getItem(`adminToken`);if(!t){m();return}let r=await fetch(`${ig}/enquiries/${e}`,{method:`DELETE`,headers:{Authorization:`Bearer ${t}`}});if(r.status===401||r.status===403){m();return}if(!r.ok)throw Error(`Failed to delete enquiry (${r.status})`);n(t=>t.filter(t=>t.id!==e)),d&&d.id===e&&f(null)}catch(e){console.error(`Error deleting enquiry:`,e),alert(`Unable to delete enquiry.`)}},v=()=>{if(ee.length===0){alert(`No enquiries available to export.`);return}let e=[[`ID`,`Name`,`Phone`,`Email`,`Service`,`Message`,`Created At`],...ee.map(e=>[e.id??``,e.name??``,e.phone??``,e.email??``,e.service??``,e.message??``,e.createdAt?new Date(e.createdAt).toLocaleString():``])].map(e=>e.map(e=>`"${String(e).replace(/"/g,`""`)}"`).join(`,`)).join(`
`),t=new Blob([e],{type:`text/csv;charset=utf-8;`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`sarathi-nx-enquiries-${new Date().toISOString().slice(0,10)}.csv`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(n)},y=new Date,x=(0,b.useMemo)(()=>t.filter(e=>{if(!e.createdAt)return!1;let t=new Date(e.createdAt);return t.getDate()===y.getDate()&&t.getMonth()===y.getMonth()&&t.getFullYear()===y.getFullYear()}),[t]),S=(0,b.useMemo)(()=>t.filter(e=>{if(!e.createdAt)return!1;let t=new Date(e.createdAt);return t.getMonth()===y.getMonth()&&t.getFullYear()===y.getFullYear()}),[t]),C=(0,b.useMemo)(()=>{let e=t.map(e=>e.service).filter(Boolean);return[`All`,...new Set(e)]},[t]),w=(0,b.useMemo)(()=>{if(t.length===0)return`-`;let e={};t.forEach(t=>{let n=t.service||`Other`;e[n]=(e[n]||0)+1});let n=Object.entries(e).sort((e,t)=>t[1]-e[1]);return n.length>0?n[0][0]:`-`},[t]),ee=(0,b.useMemo)(()=>t.filter(e=>{let t=s.toLowerCase().trim(),n=!t||e.name?.toLowerCase().includes(t)||e.phone?.toLowerCase().includes(t)||e.email?.toLowerCase().includes(t),r=l===`All`||e.service===l;return n&&r}),[t,s,l]),te=(0,b.useMemo)(()=>[...t].sort((e,t)=>{let n=e.createdAt?new Date(e.createdAt).getTime():0;return(t.createdAt?new Date(t.createdAt).getTime():0)-n}).slice(0,5),[t]);return(0,N.jsxs)(`div`,{className:`min-h-screen bg-gray-100`,children:[(0,N.jsx)(`header`,{className:`border-b bg-white shadow-sm`,children:(0,N.jsxs)(`div`,{className:`flex flex-col justify-between gap-4 px-6 py-4 md:flex-row md:items-center`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h1`,{className:`text-2xl font-bold text-gray-800`,children:`Admin Dashboard`}),(0,N.jsx)(`p`,{className:`text-sm text-gray-500`,children:`Manage Sarathi NX enquiries`})]}),(0,N.jsxs)(`div`,{className:`flex items-center gap-3`,children:[p&&(0,N.jsxs)(`div`,{className:`hidden text-right sm:block`,children:[(0,N.jsx)(`p`,{className:`text-xs text-gray-500`,children:`Logged in as`}),(0,N.jsx)(`p`,{className:`font-semibold text-gray-800`,children:p})]}),(0,N.jsx)(`button`,{onClick:h,disabled:r,className:`rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 disabled:opacity-50`,children:r?`Loading...`:`Refresh`}),(0,N.jsx)(`button`,{onClick:g,className:`rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600`,children:`Logout`})]})]})}),(0,N.jsxs)(`main`,{className:`p-6`,children:[(0,N.jsxs)(`div`,{className:`mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4`,children:[(0,N.jsx)(`div`,{className:`rounded-2xl bg-white p-5 shadow-sm`,children:(0,N.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{className:`text-sm text-gray-500`,children:`Total Enquiries`}),(0,N.jsx)(`h2`,{className:`mt-2 text-3xl font-bold text-teal-600`,children:t.length})]}),(0,N.jsx)(`div`,{className:`flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-xl`,children:`📩`})]})}),(0,N.jsx)(`div`,{className:`rounded-2xl bg-white p-5 shadow-sm`,children:(0,N.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{className:`text-sm text-gray-500`,children:`Today's Enquiries`}),(0,N.jsx)(`h2`,{className:`mt-2 text-3xl font-bold text-blue-600`,children:x.length})]}),(0,N.jsx)(`div`,{className:`flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl`,children:`📅`})]})}),(0,N.jsx)(`div`,{className:`rounded-2xl bg-white p-5 shadow-sm`,children:(0,N.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{className:`text-sm text-gray-500`,children:`This Month`}),(0,N.jsx)(`h2`,{className:`mt-2 text-3xl font-bold text-purple-600`,children:S.length})]}),(0,N.jsx)(`div`,{className:`flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-xl`,children:`📊`})]})}),(0,N.jsx)(`div`,{className:`rounded-2xl bg-white p-5 shadow-sm`,children:(0,N.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,N.jsxs)(`div`,{className:`min-w-0`,children:[(0,N.jsx)(`p`,{className:`text-sm text-gray-500`,children:`Popular Service`}),(0,N.jsx)(`h2`,{className:`mt-2 truncate text-lg font-bold text-orange-600`,children:w})]}),(0,N.jsx)(`div`,{className:`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-xl`,children:`⭐`})]})})]}),(0,N.jsxs)(`div`,{className:`mb-6 rounded-2xl bg-white shadow-sm`,children:[(0,N.jsxs)(`div`,{className:`border-b px-6 py-4`,children:[(0,N.jsx)(`h2`,{className:`text-lg font-bold text-gray-800`,children:`Recent Enquiries`}),(0,N.jsx)(`p`,{className:`text-sm text-gray-500`,children:`Latest customer enquiries`})]}),(0,N.jsx)(`div`,{className:`divide-y`,children:te.length===0?(0,N.jsx)(`div`,{className:`p-6 text-center text-gray-500`,children:`No enquiries available.`}):te.map(e=>(0,N.jsxs)(`div`,{className:`flex flex-col gap-3 px-6 py-4 transition hover:bg-gray-50 md:flex-row md:items-center md:justify-between`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{className:`font-semibold text-gray-800`,children:e.name||`Unknown`}),(0,N.jsx)(`p`,{className:`text-sm text-gray-500`,children:e.email||`-`})]}),(0,N.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3`,children:[(0,N.jsx)(`span`,{className:`rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700`,children:e.service||`Other`}),(0,N.jsx)(`span`,{className:`text-xs text-gray-400`,children:e.createdAt?new Date(e.createdAt).toLocaleDateString():`-`}),(0,N.jsx)(`button`,{onClick:()=>f(e),className:`rounded-lg bg-blue-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-600`,children:`View`})]})]},e.id))})]}),(0,N.jsx)(`div`,{className:`mb-6 rounded-2xl bg-white p-5 shadow-sm`,children:(0,N.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 md:grid-cols-3`,children:[(0,N.jsx)(`input`,{type:`text`,placeholder:`Search name, phone or email...`,value:s,onChange:e=>c(e.target.value),className:`rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-teal-500`}),(0,N.jsx)(`select`,{value:l,onChange:e=>u(e.target.value),className:`rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-teal-500`,children:C.map(e=>(0,N.jsx)(`option`,{value:e,children:e},e))}),(0,N.jsx)(`button`,{onClick:v,className:`rounded-lg bg-green-600 px-4 py-3 font-semibold text-white transition hover:bg-green-700`,children:`📥 Export CSV`})]})}),a&&(0,N.jsx)(`div`,{className:`mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600`,children:a}),(0,N.jsxs)(`div`,{className:`overflow-hidden rounded-2xl bg-white shadow-sm`,children:[(0,N.jsxs)(`div`,{className:`border-b px-6 py-4`,children:[(0,N.jsx)(`h2`,{className:`text-lg font-bold text-gray-800`,children:`All Enquiries`}),(0,N.jsxs)(`p`,{className:`text-sm text-gray-500`,children:[ee.length,` enquiries found`]})]}),(0,N.jsx)(`div`,{className:`overflow-x-auto`,children:r?(0,N.jsx)(`div`,{className:`p-10 text-center text-gray-500`,children:`Loading enquiries...`}):ee.length===0?(0,N.jsxs)(`div`,{className:`p-10 text-center text-gray-500`,children:[(0,N.jsx)(`p`,{className:`text-lg font-medium`,children:`No enquiries found`}),(0,N.jsx)(`p`,{className:`mt-1 text-sm`,children:`Try changing your search or service filter.`})]}):(0,N.jsxs)(`table`,{className:`w-full min-w-[1100px] text-left`,children:[(0,N.jsx)(`thead`,{className:`bg-gray-50`,children:(0,N.jsxs)(`tr`,{children:[(0,N.jsx)(`th`,{className:`px-4 py-3 text-sm font-semibold text-gray-600`,children:`ID`}),(0,N.jsx)(`th`,{className:`px-4 py-3 text-sm font-semibold text-gray-600`,children:`Name`}),(0,N.jsx)(`th`,{className:`px-4 py-3 text-sm font-semibold text-gray-600`,children:`Phone`}),(0,N.jsx)(`th`,{className:`px-4 py-3 text-sm font-semibold text-gray-600`,children:`Email`}),(0,N.jsx)(`th`,{className:`px-4 py-3 text-sm font-semibold text-gray-600`,children:`Service`}),(0,N.jsx)(`th`,{className:`px-4 py-3 text-sm font-semibold text-gray-600`,children:`Date`}),(0,N.jsx)(`th`,{className:`px-4 py-3 text-sm font-semibold text-gray-600`,children:`Action`})]})}),(0,N.jsx)(`tbody`,{children:ee.map(e=>(0,N.jsxs)(`tr`,{className:`border-b transition hover:bg-gray-50`,children:[(0,N.jsxs)(`td`,{className:`px-4 py-4 text-sm text-gray-500`,children:[`#`,e.id]}),(0,N.jsx)(`td`,{className:`px-4 py-4 text-sm font-semibold text-gray-800`,children:e.name||`-`}),(0,N.jsx)(`td`,{className:`px-4 py-4 text-sm text-gray-600`,children:e.phone||`-`}),(0,N.jsx)(`td`,{className:`px-4 py-4 text-sm text-gray-600`,children:e.email||`-`}),(0,N.jsx)(`td`,{className:`px-4 py-4`,children:(0,N.jsx)(`span`,{className:`rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700`,children:e.service||`Other`})}),(0,N.jsx)(`td`,{className:`whitespace-nowrap px-4 py-4 text-sm text-gray-500`,children:e.createdAt?new Date(e.createdAt).toLocaleString():`-`}),(0,N.jsx)(`td`,{className:`px-4 py-4`,children:(0,N.jsxs)(`div`,{className:`flex gap-2`,children:[(0,N.jsx)(`button`,{onClick:()=>f(e),className:`rounded-lg bg-blue-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-600`,children:`View`}),(0,N.jsx)(`button`,{onClick:()=>_(e.id),className:`rounded-lg bg-red-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-red-600`,children:`Delete`})]})})]},e.id))})]})})]})]}),d&&(0,N.jsx)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4`,children:(0,N.jsxs)(`div`,{className:`max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl`,children:[(0,N.jsxs)(`div`,{className:`flex items-center justify-between border-b px-6 py-4`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h2`,{className:`text-xl font-bold text-gray-800`,children:`Enquiry Details`}),(0,N.jsxs)(`p`,{className:`text-xs text-gray-500`,children:[`Enquiry #`,d.id]})]}),(0,N.jsx)(`button`,{onClick:()=>f(null),className:`flex h-9 w-9 items-center justify-center rounded-full text-2xl text-gray-500 transition hover:bg-gray-100 hover:text-gray-800`,children:`×`})]}),(0,N.jsxs)(`div`,{className:`space-y-5 p-6`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{className:`mb-1 text-xs font-medium uppercase tracking-wide text-gray-400`,children:`Name`}),(0,N.jsx)(`p`,{className:`font-semibold text-gray-800`,children:d.name||`-`})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{className:`mb-1 text-xs font-medium uppercase tracking-wide text-gray-400`,children:`Phone`}),(0,N.jsx)(`p`,{className:`font-semibold text-gray-800`,children:d.phone||`-`})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{className:`mb-1 text-xs font-medium uppercase tracking-wide text-gray-400`,children:`Email`}),(0,N.jsx)(`p`,{className:`break-all font-semibold text-gray-800`,children:d.email||`-`})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{className:`mb-1 text-xs font-medium uppercase tracking-wide text-gray-400`,children:`Service`}),(0,N.jsx)(`span`,{className:`inline-block rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-700`,children:d.service||`Other`})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{className:`mb-1 text-xs font-medium uppercase tracking-wide text-gray-400`,children:`Message`}),(0,N.jsx)(`div`,{className:`rounded-xl bg-gray-50 p-4 text-sm leading-6 text-gray-700`,children:d.message||`No message provided.`})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{className:`mb-1 text-xs font-medium uppercase tracking-wide text-gray-400`,children:`Submitted At`}),(0,N.jsx)(`p`,{className:`text-sm text-gray-700`,children:d.createdAt?new Date(d.createdAt).toLocaleString():`-`})]})]}),(0,N.jsxs)(`div`,{className:`flex justify-end gap-3 border-t px-6 py-4`,children:[(0,N.jsx)(`button`,{onClick:()=>f(null),className:`rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-900`,children:`Close`}),(0,N.jsx)(`button`,{onClick:()=>_(d.id),className:`rounded-lg bg-red-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600`,children:`Delete`})]})]})})]})}function og({children:e}){return localStorage.getItem(`adminToken`)?e:(0,N.jsx)(Wt,{to:`/admin/login`,replace:!0})}function sg(){let{pathname:e}=vt();return(0,b.useEffect)(()=>{window.scrollTo({top:0,left:0,behavior:`instant`})},[e]),null}function cg(){let e=`917666984626`;return(0,N.jsxs)(`main`,{className:`bg-white overflow-hidden`,children:[(0,N.jsxs)(`section`,{className:`relative h-[400px] sm:h-[420px] md:h-[440px] overflow-hidden`,children:[(0,N.jsx)(`img`,{src:`https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=90`,alt:`Business and corporate travel`,className:`\r
            absolute\r
            inset-0\r
            w-full\r
            h-full\r
            object-cover\r
            object-center\r
          `}),(0,N.jsx)(`div`,{className:`\r
            absolute\r
            inset-0\r
            bg-gradient-to-r\r
            from-[#041d3d]/95\r
            via-[#073b70]/80\r
            to-[#073b70]/20\r
          `}),(0,N.jsx)(`div`,{className:`\r
            relative\r
            z-10\r
            max-w-[1280px]\r
            h-full\r
            mx-auto\r
            px-5\r
            sm:px-8\r
            lg:px-10\r
            flex\r
            items-center\r
            pt-8\r
            md:pt-10\r
          `,children:(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`max-w-[760px]`,children:[(0,N.jsxs)(`div`,{className:`flex items-center gap-3 mb-3`,children:[(0,N.jsx)(`span`,{className:`w-10 h-[2px] bg-orange-500`}),(0,N.jsx)(`span`,{className:`\r
                    text-white\r
                    text-[10px]\r
                    sm:text-xs\r
                    md:text-sm\r
                    font-bold\r
                    uppercase\r
                    tracking-[2.5px]\r
                  `,children:`Business & Corporate Travel`})]}),(0,N.jsxs)(`h1`,{className:`\r
                  text-white\r
                  text-3xl\r
                  sm:text-4xl\r
                  md:text-5xl\r
                  lg:text-[58px]\r
                  font-extrabold\r
                  leading-[1.04]\r
                `,children:[`Travel For`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{className:`text-orange-500`,children:`Business. Made Simple.`})]}),(0,N.jsx)(`p`,{className:`\r
                  mt-4\r
                  text-white/90\r
                  text-sm\r
                  md:text-base\r
                  leading-6\r
                  md:leading-7\r
                  max-w-[620px]\r
                `,children:`Smart, reliable and professionally managed business travel solutions designed around your schedule, comfort and business priorities.`}),(0,N.jsxs)(`div`,{className:`flex flex-wrap gap-3 mt-5`,children:[(0,N.jsxs)(`a`,{href:`#enquiry`,className:`\r
                    inline-flex\r
                    items-center\r
                    gap-2.5\r
                    bg-orange-500\r
                    hover:bg-orange-600\r
                    text-white\r
                    px-5\r
                    py-3\r
                    rounded-full\r
                    text-sm\r
                    font-semibold\r
                    shadow-xl\r
                    transition-all\r
                    duration-300\r
                    hover:-translate-y-1\r
                  `,children:[`Plan Business Travel`,(0,N.jsx)(M,{className:`text-xs`})]}),(0,N.jsxs)(`a`,{href:`https://wa.me/${e}`,target:`_blank`,rel:`noopener noreferrer`,className:`\r
                    inline-flex\r
                    items-center\r
                    gap-2.5\r
                    border\r
                    border-white/80\r
                    text-white\r
                    px-5\r
                    py-3\r
                    rounded-full\r
                    text-sm\r
                    font-semibold\r
                    hover:bg-white\r
                    hover:text-[#103a6d]\r
                    transition-all\r
                    duration-300\r
                  `,children:[(0,N.jsx)(rr,{}),`WhatsApp Us`]})]})]})})}),(0,N.jsx)(`div`,{className:`\r
            absolute\r
            bottom-[-1px]\r
            left-0\r
            right-0\r
            h-7\r
            bg-white\r
            rounded-t-[50%]\r
            scale-x-110\r
          `})]}),(0,N.jsx)(`section`,{className:`py-12 md:py-14 bg-white`,children:(0,N.jsx)(`div`,{className:`\r
            max-w-[1180px]\r
            mx-auto\r
            px-5\r
            sm:px-8\r
          `,children:(0,N.jsxs)(`div`,{className:`\r
              grid\r
              lg:grid-cols-2\r
              gap-8\r
              lg:gap-12\r
              items-center\r
            `,children:[(0,N.jsx)($,{direction:`left`,children:(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`span`,{className:`\r
                    text-orange-500\r
                    text-[10px]\r
                    md:text-xs\r
                    font-bold\r
                    uppercase\r
                    tracking-[2.5px]\r
                  `,children:`Corporate Travel Solutions`}),(0,N.jsxs)(`h2`,{className:`\r
                    mt-2.5\r
                    text-2xl\r
                    md:text-4xl\r
                    font-extrabold\r
                    text-[#12385f]\r
                    leading-tight\r
                  `,children:[`Your Business Moves Fast.`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{className:`text-[#1556bd]`,children:`Your Travel Should Too.`})]}),(0,N.jsx)(`p`,{className:`\r
                    mt-4\r
                    text-gray-600\r
                    text-sm\r
                    md:text-base\r
                    leading-7\r
                  `,children:`From a quick business trip to a multi-city corporate itinerary, Sarathi NX takes care of the travel details so your team can stay focused on what matters.`}),(0,N.jsx)(`p`,{className:`\r
                    mt-3\r
                    text-gray-600\r
                    text-sm\r
                    md:text-base\r
                    leading-7\r
                  `,children:`We combine practical planning, responsive support and personalized service to make corporate travel smooth from departure to return.`}),(0,N.jsxs)(`div`,{className:`\r
                    mt-5\r
                    flex\r
                    items-center\r
                    gap-2.5\r
                    text-[#1556bd]\r
                    text-sm\r
                    font-bold\r
                  `,children:[(0,N.jsx)(j,{className:`text-orange-500 shrink-0`}),`Professional travel assistance at every step`]})]})}),(0,N.jsx)($,{direction:`right`,children:(0,N.jsxs)(`div`,{className:`\r
                  relative\r
                  rounded-[22px]\r
                  overflow-hidden\r
                  shadow-xl\r
                `,children:[(0,N.jsx)(`img`,{src:`https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85`,alt:`Corporate meeting`,className:`\r
                    w-full\r
                    h-[280px]\r
                    md:h-[320px]\r
                    object-cover\r
                  `}),(0,N.jsx)(`div`,{className:`\r
                    absolute\r
                    bottom-4\r
                    left-4\r
                    right-4\r
                    bg-[#06376b]/95\r
                    backdrop-blur-sm\r
                    rounded-xl\r
                    p-3.5\r
                    text-white\r
                  `,children:(0,N.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,N.jsx)(`div`,{className:`\r
                        w-10\r
                        h-10\r
                        rounded-lg\r
                        bg-orange-500\r
                        flex\r
                        items-center\r
                        justify-center\r
                        shrink-0\r
                      `,children:(0,N.jsx)(pi,{})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{className:`font-bold text-sm`,children:`Corporate Travel Support`}),(0,N.jsx)(`p`,{className:`text-xs text-blue-100 mt-0.5`,children:`Planned around your business schedule`})]})]})})]})})]})})}),(0,N.jsx)(`section`,{className:`py-12 md:py-14 bg-[#f5f8fc]`,children:(0,N.jsxs)(`div`,{className:`\r
            max-w-[1180px]\r
            mx-auto\r
            px-5\r
            sm:px-8\r
          `,children:[(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`\r
                text-center\r
                max-w-2xl\r
                mx-auto\r
                mb-7\r
                md:mb-9\r
              `,children:[(0,N.jsx)(`span`,{className:`\r
                  text-orange-500\r
                  text-[10px]\r
                  md:text-xs\r
                  font-bold\r
                  uppercase\r
                  tracking-[2.5px]\r
                `,children:`What We Handle`}),(0,N.jsx)(`h2`,{className:`\r
                  mt-2\r
                  text-2xl\r
                  md:text-4xl\r
                  font-extrabold\r
                  text-[#12385f]\r
                `,children:`Built Around Your Business`}),(0,N.jsx)(`p`,{className:`\r
                  mt-2.5\r
                  text-sm\r
                  text-gray-600\r
                `,children:`Practical travel solutions that help corporate travellers save time and travel with confidence.`})]})}),(0,N.jsx)(`div`,{className:`\r
              grid\r
              sm:grid-cols-2\r
              lg:grid-cols-4\r
              gap-4\r
            `,children:[{icon:Ar,title:`Flight Management`,text:`Efficient flight planning with schedules and routes aligned to your business itinerary.`},{icon:Hr,title:`Business Hotels`,text:`Comfortable and strategically located hotel options for productive business trips.`},{icon:dr,title:`Executive Support`,text:`Dedicated assistance for executives, professionals and corporate travellers.`},{icon:si,title:`Time Efficient`,text:`We coordinate the details so you can focus on meetings and business priorities.`}].map((e,t)=>{let n=e.icon;return(0,N.jsx)($,{delay:t*.08,children:(0,N.jsxs)(`div`,{className:`\r
                      h-full\r
                      bg-white\r
                      rounded-xl\r
                      p-4.5\r
                      md:p-5\r
                      border\r
                      border-gray-100\r
                      shadow-md\r
                      hover:-translate-y-1.5\r
                      hover:shadow-xl\r
                      transition-all\r
                      duration-300\r
                    `,children:[(0,N.jsx)(`div`,{className:`\r
                        w-11\r
                        h-11\r
                        rounded-xl\r
                        bg-blue-50\r
                        text-[#1556bd]\r
                        flex\r
                        items-center\r
                        justify-center\r
                        text-lg\r
                      `,children:(0,N.jsx)(n,{})}),(0,N.jsx)(`h3`,{className:`\r
                        mt-4\r
                        text-base\r
                        font-bold\r
                        text-[#12385f]\r
                      `,children:e.title}),(0,N.jsx)(`p`,{className:`\r
                        mt-2\r
                        text-xs\r
                        md:text-sm\r
                        text-gray-600\r
                        leading-5.5\r
                      `,children:e.text})]})},e.title)})})]})}),(0,N.jsx)(`section`,{className:`py-12 md:py-14`,children:(0,N.jsx)(`div`,{className:`\r
            max-w-[1100px]\r
            mx-auto\r
            px-5\r
            sm:px-8\r
          `,children:(0,N.jsxs)(`div`,{className:`\r
              grid\r
              lg:grid-cols-[0.85fr_1.15fr]\r
              gap-8\r
              lg:gap-10\r
              items-center\r
            `,children:[(0,N.jsx)($,{direction:`left`,children:(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`span`,{className:`\r
                    text-orange-500\r
                    text-[10px]\r
                    md:text-xs\r
                    font-bold\r
                    uppercase\r
                    tracking-[2.5px]\r
                  `,children:`Complete Assistance`}),(0,N.jsxs)(`h2`,{className:`\r
                    mt-2.5\r
                    text-2xl\r
                    md:text-4xl\r
                    font-extrabold\r
                    text-[#12385f]\r
                    leading-tight\r
                  `,children:[`One Partner For`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{className:`text-[#1556bd]`,children:`Every Detail.`})]}),(0,N.jsx)(`p`,{className:`\r
                    mt-4\r
                    text-gray-600\r
                    text-sm\r
                    leading-6.5\r
                  `,children:`Whether you are travelling alone or coordinating travel for a team, our experts can manage the essential parts of your itinerary.`})]})}),(0,N.jsx)($,{direction:`right`,children:(0,N.jsx)(`div`,{className:`\r
                  grid\r
                  sm:grid-cols-2\r
                  gap-2.5\r
                `,children:[`Domestic & international business travel`,`Corporate flight and hotel arrangements`,`Executive travel assistance`,`Visa and travel documentation support`,`Airport transfers and ground transportation`,`Multi-city business itineraries`].map(e=>(0,N.jsxs)(`div`,{className:`\r
                      flex\r
                      items-start\r
                      gap-2.5\r
                      p-3.5\r
                      rounded-xl\r
                      bg-[#f5f8fc]\r
                      border\r
                      border-blue-50\r
                    `,children:[(0,N.jsx)(j,{className:`\r
                        text-orange-500\r
                        mt-0.5\r
                        shrink-0\r
                        text-sm\r
                      `}),(0,N.jsx)(`span`,{className:`\r
                        text-xs\r
                        md:text-sm\r
                        font-medium\r
                        text-[#243b5a]\r
                        leading-5\r
                      `,children:e})]},e))})})]})})}),(0,N.jsx)(`section`,{className:`py-12 md:py-14 bg-[#06376b]`,children:(0,N.jsxs)(`div`,{className:`\r
            max-w-[1100px]\r
            mx-auto\r
            px-5\r
            sm:px-8\r
          `,children:[(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`\r
                text-center\r
                text-white\r
                mb-7\r
                md:mb-9\r
              `,children:[(0,N.jsx)(`span`,{className:`\r
                  text-orange-400\r
                  text-[10px]\r
                  md:text-xs\r
                  font-bold\r
                  uppercase\r
                  tracking-[2.5px]\r
                `,children:`Simple Process`}),(0,N.jsx)(`h2`,{className:`\r
                  mt-2\r
                  text-2xl\r
                  md:text-4xl\r
                  font-extrabold\r
                `,children:`From Planning To Take-Off`})]})}),(0,N.jsx)(`div`,{className:`\r
              grid\r
              md:grid-cols-3\r
              gap-4\r
            `,children:[{number:`01`,title:`Share Your Plan`,text:`Tell us your destination, dates, travellers and business requirements.`},{number:`02`,title:`We Build Your Itinerary`,text:`Our team coordinates flights, hotels, transfers and required travel services.`},{number:`03`,title:`Travel With Confidence`,text:`Receive professional assistance throughout your business journey.`}].map((e,t)=>(0,N.jsx)($,{delay:t*.1,children:(0,N.jsxs)(`div`,{className:`\r
                    h-full\r
                    rounded-xl\r
                    bg-white/[0.08]\r
                    border\r
                    border-white/10\r
                    p-5\r
                    md:p-6\r
                    text-white\r
                    hover:bg-white/[0.12]\r
                    transition-all\r
                    duration-300\r
                  `,children:[(0,N.jsx)(`span`,{className:`\r
                      text-orange-400\r
                      text-2xl\r
                      font-extrabold\r
                    `,children:e.number}),(0,N.jsx)(`h3`,{className:`\r
                      mt-3\r
                      text-lg\r
                      font-bold\r
                    `,children:e.title}),(0,N.jsx)(`p`,{className:`\r
                      mt-2\r
                      text-blue-100\r
                      leading-6\r
                      text-xs\r
                      md:text-sm\r
                    `,children:e.text})]})},e.number))})]})}),(0,N.jsx)(`section`,{id:`enquiry`,className:`\r
          py-12\r
          md:py-14\r
          bg-[#f5f8fc]\r
        `,children:(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`\r
              max-w-[900px]\r
              mx-auto\r
              px-5\r
              text-center\r
            `,children:[(0,N.jsx)(`span`,{className:`\r
                text-orange-500\r
                text-[10px]\r
                md:text-xs\r
                font-bold\r
                uppercase\r
                tracking-[2.5px]\r
              `,children:`Ready To Travel?`}),(0,N.jsxs)(`h2`,{className:`\r
                mt-2.5\r
                text-2xl\r
                md:text-4xl\r
                font-extrabold\r
                text-[#12385f]\r
                leading-tight\r
              `,children:[`Let Us Plan Your Next`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{className:`text-[#1556bd]`,children:`Business Journey.`})]}),(0,N.jsx)(`p`,{className:`\r
                mt-3\r
                text-gray-600\r
                text-sm\r
                max-w-xl\r
                mx-auto\r
                leading-6\r
              `,children:`Share your travel requirements with our team and get a personalized business travel solution.`}),(0,N.jsxs)(`div`,{className:`\r
                flex\r
                flex-wrap\r
                justify-center\r
                gap-3\r
                mt-5\r
              `,children:[(0,N.jsxs)(`a`,{href:`tel:+917666984626`,className:`\r
                  inline-flex\r
                  items-center\r
                  gap-2.5\r
                  bg-[#06376b]\r
                  text-white\r
                  px-5\r
                  py-3\r
                  rounded-full\r
                  text-sm\r
                  font-semibold\r
                  hover:bg-[#1556bd]\r
                  transition-all\r
                `,children:[(0,N.jsx)(Mr,{}),`Call Us`]}),(0,N.jsxs)(`a`,{href:`https://wa.me/${e}`,target:`_blank`,rel:`noopener noreferrer`,className:`\r
                  inline-flex\r
                  items-center\r
                  gap-2.5\r
                  bg-[#25D366]\r
                  text-white\r
                  px-5\r
                  py-3\r
                  rounded-full\r
                  text-sm\r
                  font-semibold\r
                  hover:bg-[#1ebe5d]\r
                  transition-all\r
                `,children:[(0,N.jsx)(rr,{}),`WhatsApp Us`]})]})]})})})]})}function lg(){let e=`917666984626`,t=[{icon:fi,title:`Exhibition Travel`,text:`Complete travel coordination for exhibitors, delegates and business visitors.`},{icon:lr,title:`Group Coordination`,text:`Organized travel solutions for teams, associations and corporate groups.`},{icon:Hr,title:`Hotel Planning`,text:`Accommodation options selected around exhibition venues and business schedules.`},{icon:Xr,title:`Global Destinations`,text:`Travel assistance for major international business and exhibition destinations.`}];return(0,N.jsxs)(`main`,{className:`bg-white overflow-hidden`,children:[(0,N.jsxs)(`section`,{className:`relative min-h-[440px] md:min-h-[500px] overflow-hidden`,children:[(0,N.jsx)(`img`,{src:`https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2200&q=90`,alt:`MICE and exhibition travel`,className:`\r
            absolute\r
            inset-0\r
            w-full\r
            h-full\r
            object-cover\r
            object-center\r
          `}),(0,N.jsx)(`div`,{className:`\r
            absolute\r
            inset-0\r
            bg-gradient-to-r\r
            from-[#031b3a]/95\r
            via-[#063b73]/80\r
            to-[#063b73]/20\r
          `}),(0,N.jsx)(`div`,{className:`\r
            relative\r
            z-10\r
            max-w-[1280px]\r
            mx-auto\r
            px-5\r
            sm:px-8\r
            lg:px-10\r
            pt-28\r
            md:pt-32\r
          `,children:(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`max-w-[760px]`,children:[(0,N.jsxs)(`div`,{className:`flex items-center gap-3 mb-4`,children:[(0,N.jsx)(`span`,{className:`w-10 h-[2px] bg-orange-500`}),(0,N.jsx)(`span`,{className:`\r
                    text-white\r
                    text-[11px]\r
                    md:text-xs\r
                    font-bold\r
                    uppercase\r
                    tracking-[2.5px]\r
                  `,children:`MICE & Exhibition Travel`})]}),(0,N.jsxs)(`h1`,{className:`\r
                  text-white\r
                  text-4xl\r
                  sm:text-5xl\r
                  md:text-6xl\r
                  lg:text-[62px]\r
                  font-extrabold\r
                  leading-[1.02]\r
                `,children:[`Take Your Business`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{className:`text-orange-500`,children:`To The World.`})]}),(0,N.jsx)(`p`,{className:`\r
                  mt-5\r
                  text-white/90\r
                  text-sm\r
                  md:text-base\r
                  leading-7\r
                  max-w-[650px]\r
                `,children:`Seamless travel support for exhibitions, trade fairs, conferences, incentives and corporate groups across the world.`}),(0,N.jsxs)(`div`,{className:`flex flex-wrap gap-3 mt-6`,children:[(0,N.jsxs)(`a`,{href:`#enquiry`,className:`\r
                    inline-flex\r
                    items-center\r
                    gap-2.5\r
                    bg-orange-500\r
                    hover:bg-orange-600\r
                    text-white\r
                    px-6\r
                    py-3.5\r
                    rounded-full\r
                    font-semibold\r
                    text-sm\r
                    shadow-xl\r
                    transition-all\r
                    duration-300\r
                    hover:-translate-y-1\r
                  `,children:[`Plan Exhibition Travel`,(0,N.jsx)(M,{className:`text-xs`})]}),(0,N.jsxs)(`a`,{href:`https://wa.me/${e}`,target:`_blank`,rel:`noopener noreferrer`,className:`\r
                    inline-flex\r
                    items-center\r
                    gap-2.5\r
                    border-2\r
                    border-white/80\r
                    text-white\r
                    px-6\r
                    py-3.5\r
                    rounded-full\r
                    font-semibold\r
                    text-sm\r
                    hover:bg-white\r
                    hover:text-[#103a6d]\r
                    transition-all\r
                    duration-300\r
                  `,children:[(0,N.jsx)(rr,{}),`WhatsApp Us`]})]})]})})}),(0,N.jsx)(`div`,{className:`\r
            absolute\r
            bottom-[-1px]\r
            left-0\r
            right-0\r
            h-9\r
            bg-white\r
            rounded-t-[50%]\r
            scale-x-110\r
          `})]}),(0,N.jsx)(`section`,{className:`py-12 md:py-14 bg-white`,children:(0,N.jsx)(`div`,{className:`max-w-[1180px] mx-auto px-5 sm:px-8`,children:(0,N.jsxs)(`div`,{className:`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center`,children:[(0,N.jsx)($,{direction:`left`,children:(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`span`,{className:`\r
                    text-orange-500\r
                    text-[11px]\r
                    md:text-xs\r
                    font-bold\r
                    uppercase\r
                    tracking-[2.5px]\r
                  `,children:`Exhibition Travel Specialists`}),(0,N.jsxs)(`h2`,{className:`\r
                    mt-3\r
                    text-3xl\r
                    md:text-4xl\r
                    lg:text-[46px]\r
                    font-extrabold\r
                    text-[#12385f]\r
                    leading-[1.08]\r
                  `,children:[`Your Event Is Important.`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{className:`text-[#1556bd]`,children:`So Is Every Detail.`})]}),(0,N.jsx)(`p`,{className:`\r
                    mt-4\r
                    text-gray-600\r
                    text-sm\r
                    md:text-base\r
                    leading-7\r
                    max-w-[590px]\r
                  `,children:`International exhibitions and trade events require careful coordination. From flights and hotels to visas and transfers, we help bring the entire journey together.`}),(0,N.jsx)(`div`,{className:`mt-5 space-y-2.5`,children:[`Travel planned around event dates`,`Support for individual and group travellers`,`Practical destination and accommodation guidance`].map(e=>(0,N.jsxs)(`div`,{className:`\r
                        flex\r
                        gap-3\r
                        items-start\r
                        text-sm\r
                        text-gray-700\r
                      `,children:[(0,N.jsx)(j,{className:`\r
                          text-orange-500\r
                          mt-0.5\r
                          shrink-0\r
                        `}),(0,N.jsx)(`span`,{children:e})]},e))})]})}),(0,N.jsx)($,{direction:`right`,children:(0,N.jsxs)(`div`,{className:`\r
                  relative\r
                  rounded-[22px]\r
                  overflow-hidden\r
                  shadow-xl\r
                `,children:[(0,N.jsx)(`img`,{src:`https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&w=1400&q=85`,alt:`International business exhibition`,className:`\r
                    w-full\r
                    h-[280px]\r
                    md:h-[330px]\r
                    object-cover\r
                  `}),(0,N.jsx)(`div`,{className:`\r
                    absolute\r
                    bottom-4\r
                    left-4\r
                    right-4\r
                    bg-[#06376b]/95\r
                    backdrop-blur-sm\r
                    rounded-xl\r
                    p-4\r
                    text-white\r
                  `,children:(0,N.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,N.jsx)(`div`,{className:`\r
                        w-10\r
                        h-10\r
                        rounded-lg\r
                        bg-orange-500\r
                        flex\r
                        items-center\r
                        justify-center\r
                        shrink-0\r
                      `,children:(0,N.jsx)(fi,{})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{className:`font-bold text-sm`,children:`Exhibition Travel Support`}),(0,N.jsx)(`p`,{className:`text-xs text-blue-100 mt-0.5`,children:`Planned around your event schedule`})]})]})})]})})]})})}),(0,N.jsx)(`section`,{className:`py-12 md:py-14 bg-[#f5f8fc]`,children:(0,N.jsxs)(`div`,{className:`max-w-[1180px] mx-auto px-5 sm:px-8`,children:[(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`text-center max-w-2xl mx-auto mb-8`,children:[(0,N.jsx)(`span`,{className:`\r
                  text-orange-500\r
                  text-[11px]\r
                  font-bold\r
                  uppercase\r
                  tracking-[2.5px]\r
                `,children:`Complete Travel Support`}),(0,N.jsx)(`h2`,{className:`\r
                  mt-2\r
                  text-3xl\r
                  md:text-4xl\r
                  font-extrabold\r
                  text-[#12385f]\r
                `,children:`Everything Around Your Event`}),(0,N.jsx)(`p`,{className:`mt-3 text-sm text-gray-600`,children:`Practical travel solutions designed around your exhibition, conference or corporate event.`})]})}),(0,N.jsx)(`div`,{className:`grid sm:grid-cols-2 lg:grid-cols-4 gap-4`,children:t.map((e,t)=>{let n=e.icon;return(0,N.jsx)($,{delay:t*.07,children:(0,N.jsxs)(`div`,{className:`\r
                      h-full\r
                      bg-white\r
                      rounded-2xl\r
                      p-5\r
                      border\r
                      border-gray-100\r
                      shadow-md\r
                      hover:-translate-y-1.5\r
                      hover:shadow-xl\r
                      transition-all\r
                      duration-300\r
                    `,children:[(0,N.jsx)(`div`,{className:`\r
                        w-11\r
                        h-11\r
                        rounded-xl\r
                        bg-blue-50\r
                        text-[#1556bd]\r
                        flex\r
                        items-center\r
                        justify-center\r
                        text-lg\r
                      `,children:(0,N.jsx)(n,{})}),(0,N.jsx)(`h3`,{className:`\r
                        mt-4\r
                        text-base\r
                        font-bold\r
                        text-[#12385f]\r
                      `,children:e.title}),(0,N.jsx)(`p`,{className:`\r
                        mt-2\r
                        text-xs\r
                        md:text-[13px]\r
                        text-gray-600\r
                        leading-5\r
                      `,children:e.text})]})},e.title)})})]})}),(0,N.jsx)(`section`,{className:`py-12 md:py-14 bg-white`,children:(0,N.jsx)(`div`,{className:`max-w-[1100px] mx-auto px-5 sm:px-8`,children:(0,N.jsxs)(`div`,{className:`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center`,children:[(0,N.jsx)($,{direction:`left`,children:(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`span`,{className:`\r
                    text-orange-500\r
                    text-[11px]\r
                    font-bold\r
                    uppercase\r
                    tracking-[2.5px]\r
                  `,children:`What We Arrange`}),(0,N.jsxs)(`h2`,{className:`\r
                    mt-3\r
                    text-3xl\r
                    md:text-4xl\r
                    lg:text-[46px]\r
                    font-extrabold\r
                    text-[#12385f]\r
                    leading-[1.08]\r
                  `,children:[`One Smooth Journey.`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{className:`text-[#1556bd]`,children:`One Reliable Partner.`})]}),(0,N.jsx)(`p`,{className:`\r
                    mt-4\r
                    text-sm\r
                    md:text-base\r
                    text-gray-600\r
                    leading-7\r
                    max-w-[470px]\r
                  `,children:`From individual delegates to complete corporate groups, we coordinate the essential travel arrangements around your event.`})]})}),(0,N.jsx)($,{direction:`right`,children:(0,N.jsx)(`div`,{className:`grid sm:grid-cols-2 gap-2.5`,children:[`Exhibition and business travel planning`,`Group flight coordination`,`Hotel accommodation near venues`,`Visa assistance and documentation guidance`,`Airport transfers and local transportation`,`Pre-travel coordination for delegates`].map(e=>(0,N.jsxs)(`div`,{className:`\r
                      flex\r
                      gap-2.5\r
                      p-3.5\r
                      bg-[#f5f8fc]\r
                      rounded-xl\r
                      border\r
                      border-blue-50\r
                    `,children:[(0,N.jsx)(j,{className:`\r
                        text-orange-500\r
                        mt-0.5\r
                        shrink-0\r
                        text-sm\r
                      `}),(0,N.jsx)(`span`,{className:`\r
                        text-xs\r
                        md:text-[13px]\r
                        text-[#243b5a]\r
                        font-medium\r
                        leading-5\r
                      `,children:e})]},e))})})]})})}),(0,N.jsxs)(`section`,{id:`enquiry`,className:`\r
          relative\r
          py-12\r
          md:py-14\r
          bg-[#06376b]\r
          text-white\r
          overflow-hidden\r
        `,children:[(0,N.jsx)(`div`,{className:`\r
            absolute\r
            -left-24\r
            -top-24\r
            w-64\r
            h-64\r
            rounded-full\r
            border\r
            border-white/10\r
          `}),(0,N.jsx)(`div`,{className:`\r
            absolute\r
            -right-24\r
            -bottom-28\r
            w-72\r
            h-72\r
            rounded-full\r
            border\r
            border-white/10\r
          `}),(0,N.jsx)(`div`,{className:`relative z-10 max-w-[900px] mx-auto px-5 text-center`,children:(0,N.jsxs)($,{children:[(0,N.jsx)(fi,{className:`\r
                text-orange-400\r
                text-3xl\r
                mx-auto\r
              `}),(0,N.jsx)(`h2`,{className:`\r
                mt-3\r
                text-3xl\r
                md:text-4xl\r
                lg:text-5xl\r
                font-extrabold\r
                leading-tight\r
              `,children:`Planning Your Next Exhibition?`}),(0,N.jsx)(`p`,{className:`\r
                mt-3\r
                text-blue-100\r
                text-sm\r
                md:text-base\r
                leading-6\r
                max-w-2xl\r
                mx-auto\r
              `,children:`Let our travel team handle the logistics while you focus on your business, meetings and exhibition goals.`}),(0,N.jsxs)(`div`,{className:`flex flex-wrap justify-center gap-3 mt-6`,children:[(0,N.jsxs)(`a`,{href:`tel:+917666984626`,className:`\r
                  inline-flex\r
                  items-center\r
                  gap-2\r
                  bg-white\r
                  text-[#06376b]\r
                  px-6\r
                  py-3\r
                  rounded-full\r
                  font-bold\r
                  text-sm\r
                  hover:bg-orange-500\r
                  hover:text-white\r
                  transition-all\r
                  duration-300\r
                `,children:[(0,N.jsx)(Mr,{}),`Call Us`]}),(0,N.jsxs)(`a`,{href:`https://wa.me/${e}`,target:`_blank`,rel:`noopener noreferrer`,className:`\r
                  inline-flex\r
                  items-center\r
                  gap-2\r
                  bg-[#25D366]\r
                  text-white\r
                  px-6\r
                  py-3\r
                  rounded-full\r
                  font-bold\r
                  text-sm\r
                  hover:bg-[#1ebe5d]\r
                  transition-all\r
                  duration-300\r
                `,children:[(0,N.jsx)(rr,{}),`WhatsApp Us`,(0,N.jsx)(M,{className:`text-xs`})]})]})]})})]})]})}function ug(){let e=`https://wa.me/917666984626`;return(0,N.jsxs)(`main`,{className:`overflow-hidden bg-white`,children:[(0,N.jsxs)(`section`,{className:`relative min-h-[400px] overflow-hidden md:min-h-[460px]`,children:[(0,N.jsx)(`img`,{src:`https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=2200&q=90`,alt:`Travel insurance`,className:`absolute inset-0 h-full w-full object-cover`}),(0,N.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-r from-[#041d3d]/95 via-[#073b70]/80 to-[#073b70]/25`}),(0,N.jsx)(`div`,{className:`relative z-10 mx-auto max-w-[1280px] px-5 pt-24 sm:px-8 md:pt-28 lg:px-10`,children:(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`max-w-[700px]`,children:[(0,N.jsxs)(`div`,{className:`mb-3 flex items-center gap-2`,children:[(0,N.jsx)(`span`,{className:`h-[2px] w-8 bg-orange-500`}),(0,N.jsx)(`span`,{className:`text-[10px] font-bold uppercase tracking-[2.5px] text-white sm:text-xs`,children:`Travel Insurance`})]}),(0,N.jsxs)(`h1`,{className:`text-3xl font-extrabold leading-[1.05] text-white sm:text-4xl md:text-5xl lg:text-[58px]`,children:[`Travel With`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{className:`text-orange-500`,children:`Greater Confidence.`})]}),(0,N.jsx)(`p`,{className:`mt-4 max-w-[600px] text-sm leading-6 text-white/90 md:text-base`,children:`Travel insurance guidance designed to provide financial protection against eligible travel-related risks.`}),(0,N.jsxs)(`div`,{className:`mt-5 flex flex-wrap gap-2.5`,children:[(0,N.jsxs)(`a`,{href:`#enquiry`,className:`inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-orange-600 hover:-translate-y-0.5`,children:[`Get Assistance`,(0,N.jsx)(M,{className:`text-xs`})]}),(0,N.jsxs)(`a`,{href:e,target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex items-center gap-2 rounded-full border border-white/70 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-[#103a6d]`,children:[(0,N.jsx)(rr,{}),`WhatsApp`]})]})]})})}),(0,N.jsx)(`div`,{className:`absolute bottom-[-1px] left-0 right-0 h-7 scale-x-110 rounded-t-[50%] bg-white`})]}),(0,N.jsx)(`section`,{className:`py-12 md:py-16`,children:(0,N.jsx)(`div`,{className:`mx-auto max-w-[1180px] px-5 sm:px-8`,children:(0,N.jsxs)(`div`,{className:`grid items-center gap-8 lg:grid-cols-2 lg:gap-12`,children:[(0,N.jsx)($,{direction:`left`,children:(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`span`,{className:`text-[10px] font-bold uppercase tracking-[2.5px] text-orange-500 sm:text-xs`,children:`Protect Your Journey`}),(0,N.jsxs)(`h2`,{className:`mt-2 text-3xl font-extrabold leading-tight text-[#12385f] md:text-4xl lg:text-5xl`,children:[`Because A Good Trip`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{className:`text-[#1556bd]`,children:`Should Feel Secure.`})]}),(0,N.jsx)(`p`,{className:`mt-4 text-sm leading-7 text-gray-600 md:text-base`,children:`Unexpected situations can happen even when every part of a trip has been carefully planned. Travel insurance can help reduce the financial impact of eligible events.`}),(0,N.jsx)(`div`,{className:`mt-5 rounded-xl border border-blue-50 bg-[#f5f8fc] p-4`,children:(0,N.jsxs)(`div`,{className:`flex gap-3`,children:[(0,N.jsx)(Er,{className:`mt-1 shrink-0 text-xl text-[#1556bd]`}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{className:`text-sm font-bold text-[#12385f]`,children:`Guidance Before You Travel`}),(0,N.jsx)(`p`,{className:`mt-1 text-xs leading-5 text-gray-600 sm:text-sm`,children:`Understand available options and choose suitable travel protection for your journey.`})]})]})})]})}),(0,N.jsx)($,{direction:`right`,children:(0,N.jsxs)(`div`,{className:`relative overflow-hidden rounded-[22px] shadow-xl`,children:[(0,N.jsx)(`img`,{src:`https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=1400&q=85`,alt:`Traveller preparing for a journey`,className:`h-[300px] w-full object-cover sm:h-[350px]`}),(0,N.jsx)(`div`,{className:`absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/95 text-[#1556bd] shadow-lg`,children:(0,N.jsx)(fr,{})})]})})]})})}),(0,N.jsx)(`section`,{className:`bg-[#f5f8fc] py-12 md:py-16`,children:(0,N.jsxs)(`div`,{className:`mx-auto max-w-[1180px] px-5 sm:px-8`,children:[(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`mb-8 text-center`,children:[(0,N.jsx)(`span`,{className:`text-[10px] font-bold uppercase tracking-[2.5px] text-orange-500 sm:text-xs`,children:`Travel Protection`}),(0,N.jsx)(`h2`,{className:`mt-2 text-3xl font-extrabold text-[#12385f] md:text-4xl lg:text-5xl`,children:`Protection For The Unexpected`})]})}),(0,N.jsx)(`div`,{className:`grid gap-4 sm:grid-cols-2 lg:grid-cols-4`,children:[[Wr,`Medical Emergencies`,`Guidance for unexpected medical situations during your journey.`],[kr,`Travel Disruptions`,`Coverage options for eligible delays, cancellations and interruptions.`],[br,`Baggage Protection`,`Insurance options covering eligible baggage-related situations.`],[Xr,`Worldwide Travel`,`Travel insurance options for international journeys and destinations.`]].map(([e,t,n],r)=>(0,N.jsx)($,{delay:r*.08,children:(0,N.jsxs)(`div`,{className:`h-full rounded-xl border border-gray-100 bg-white p-5 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl`,children:[(0,N.jsx)(`div`,{className:`flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-lg text-[#1556bd]`,children:(0,N.jsx)(e,{})}),(0,N.jsx)(`h3`,{className:`mt-4 text-base font-bold text-[#12385f]`,children:t}),(0,N.jsx)(`p`,{className:`mt-2 text-sm leading-5 text-gray-600`,children:n})]})},t))})]})}),(0,N.jsx)(`section`,{className:`py-12 md:py-16`,children:(0,N.jsx)(`div`,{className:`mx-auto max-w-[1100px] px-5 sm:px-8`,children:(0,N.jsxs)(`div`,{className:`grid items-center gap-8 lg:grid-cols-2 lg:gap-12`,children:[(0,N.jsx)($,{direction:`left`,children:(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`span`,{className:`text-[10px] font-bold uppercase tracking-[2.5px] text-orange-500 sm:text-xs`,children:`What We Assist With`}),(0,N.jsxs)(`h2`,{className:`mt-2 text-3xl font-extrabold text-[#12385f] md:text-4xl lg:text-5xl`,children:[`Travel Protection,`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{className:`text-[#1556bd]`,children:`Made Easier.`})]}),(0,N.jsx)(`p`,{className:`mt-4 max-w-lg text-sm leading-7 text-gray-600`,children:`Get practical guidance before your journey so you can choose suitable travel protection with confidence.`})]})}),(0,N.jsx)($,{direction:`right`,children:(0,N.jsx)(`div`,{className:`grid gap-2.5 sm:grid-cols-2`,children:[`International travel insurance guidance`,`Domestic travel insurance options`,`Medical emergency coverage options`,`Baggage and travel disruption protection`,`Policy selection assistance`,`Pre-travel insurance guidance`].map(e=>(0,N.jsxs)(`div`,{className:`flex items-start gap-2.5 rounded-xl bg-[#f5f8fc] p-3.5`,children:[(0,N.jsx)(j,{className:`mt-0.5 shrink-0 text-orange-500`}),(0,N.jsx)(`span`,{className:`text-sm font-medium leading-5 text-[#243b5a]`,children:e})]},e))})})]})})}),(0,N.jsx)(`section`,{id:`enquiry`,className:`bg-[#06376b] py-12 text-white md:py-16`,children:(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`mx-auto max-w-[850px] px-5 text-center`,children:[(0,N.jsx)(Er,{className:`mx-auto text-3xl text-orange-400`}),(0,N.jsx)(`h2`,{className:`mt-3 text-3xl font-extrabold md:text-4xl lg:text-5xl`,children:`Protect Your Next Journey`}),(0,N.jsx)(`p`,{className:`mx-auto mt-3 max-w-xl text-sm leading-6 text-blue-100 md:text-base`,children:`Speak with our travel team about insurance options for your upcoming trip.`}),(0,N.jsxs)(`a`,{href:e,target:`_blank`,rel:`noopener noreferrer`,className:`mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[#1ebe5d]`,children:[(0,N.jsx)(rr,{}),`Get Assistance On WhatsApp`]})]})})})]})}function dg(){let e=`917666984626`,t=[{icon:jr,title:`Airport Transfers`,text:`Convenient airport pickup and drop arrangements for a smoother arrival and departure.`},{icon:dr,title:`Chauffeur Services`,text:`Comfortable chauffeur-driven transportation for business and personal travel.`},{icon:ui,title:`Car Rental`,text:`Vehicle solutions for individuals, families, executives and groups.`},{icon:lr,title:`Group Transfers`,text:`Transportation coordination for meetings, events, tours and group movements.`}];return(0,N.jsxs)(`main`,{className:`bg-white overflow-hidden`,children:[(0,N.jsxs)(`section`,{className:`relative min-h-[430px] md:min-h-[500px] overflow-hidden`,children:[(0,N.jsx)(`img`,{src:`https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2200&q=90`,alt:`Transfer and car rental`,className:`absolute inset-0 w-full h-full object-cover object-center`}),(0,N.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-r from-[#031b3a]/95 via-[#073b70]/80 to-[#073b70]/20`}),(0,N.jsx)(`div`,{className:`relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 pt-28 md:pt-32 pb-20`,children:(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`max-w-[720px]`,children:[(0,N.jsxs)(`div`,{className:`flex items-center gap-3 mb-3`,children:[(0,N.jsx)(`span`,{className:`w-10 h-[2px] bg-orange-500`}),(0,N.jsx)(`span`,{className:`text-white text-[11px] md:text-xs font-bold uppercase tracking-[2.5px]`,children:`Transfer & Car Rental`})]}),(0,N.jsxs)(`h1`,{className:`text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]`,children:[`Get There`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{className:`text-orange-500`,children:`Comfortably.`})]}),(0,N.jsx)(`p`,{className:`mt-4 text-white/90 text-sm md:text-base leading-6 max-w-[600px]`,children:`Reliable ground transportation for airport transfers, corporate travel, exhibitions, holidays and group journeys.`}),(0,N.jsxs)(`div`,{className:`flex flex-wrap gap-3 mt-6`,children:[(0,N.jsxs)(`a`,{href:`#enquiry`,className:`inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-full text-sm font-semibold shadow-lg transition-all hover:-translate-y-1`,children:[`Arrange A Transfer`,(0,N.jsx)(M,{className:`text-xs`})]}),(0,N.jsxs)(`a`,{href:`https://wa.me/${e}`,target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex items-center gap-2 border border-white/80 text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-white hover:text-[#103a6d] transition-all`,children:[(0,N.jsx)(rr,{}),`WhatsApp Us`]})]})]})})}),(0,N.jsx)(`div`,{className:`absolute bottom-[-1px] left-0 right-0 h-8 bg-white rounded-t-[50%] scale-x-110`})]}),(0,N.jsx)(`section`,{className:`py-16 md:py-20`,children:(0,N.jsx)(`div`,{className:`max-w-[1180px] mx-auto px-5 sm:px-8`,children:(0,N.jsxs)(`div`,{className:`grid lg:grid-cols-2 gap-10 items-center`,children:[(0,N.jsx)($,{direction:`left`,children:(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`span`,{className:`text-orange-500 text-xs font-bold uppercase tracking-[3px]`,children:`Ground Transportation`}),(0,N.jsxs)(`h2`,{className:`mt-3 text-3xl md:text-5xl font-extrabold text-[#12385f] leading-tight`,children:[`From Arrival To`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{className:`text-[#1556bd]`,children:`Final Destination.`})]}),(0,N.jsx)(`p`,{className:`mt-5 text-gray-600 leading-7`,children:`A well-planned transfer can make the difference between a stressful arrival and a smooth start. We help coordinate practical transportation based on your itinerary.`}),(0,N.jsx)(`div`,{className:`mt-6 grid sm:grid-cols-2 gap-3`,children:[`Airport transfers`,`Private transportation`,`Corporate travel`,`Group movements`].map(e=>(0,N.jsxs)(`div`,{className:`flex gap-2 items-center`,children:[(0,N.jsx)(j,{className:`text-orange-500 text-sm`}),(0,N.jsx)(`span`,{className:`text-sm text-gray-700`,children:e})]},e))})]})}),(0,N.jsx)($,{direction:`right`,children:(0,N.jsx)(`div`,{className:`rounded-[24px] overflow-hidden shadow-2xl`,children:(0,N.jsx)(`img`,{src:`https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1400&q=85`,alt:`Luxury travel vehicle`,className:`w-full h-[360px] object-cover`})})})]})})}),(0,N.jsx)(`section`,{className:`py-16 bg-[#f5f8fc]`,children:(0,N.jsxs)(`div`,{className:`max-w-[1180px] mx-auto px-5 sm:px-8`,children:[(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`text-center mb-10`,children:[(0,N.jsx)(`span`,{className:`text-orange-500 text-xs font-bold uppercase tracking-[3px]`,children:`Our Transportation Services`}),(0,N.jsx)(`h2`,{className:`mt-2 text-3xl md:text-5xl font-extrabold text-[#12385f]`,children:`Travel The Way You Need`})]})}),(0,N.jsx)(`div`,{className:`grid sm:grid-cols-2 lg:grid-cols-4 gap-4`,children:t.map((e,t)=>{let n=e.icon;return(0,N.jsx)($,{delay:t*.08,children:(0,N.jsxs)(`div`,{className:`bg-white rounded-2xl p-5 border border-gray-100 shadow-lg h-full hover:-translate-y-2 transition-all`,children:[(0,N.jsx)(`div`,{className:`w-12 h-12 rounded-xl bg-blue-50 text-[#1556bd] flex items-center justify-center text-lg`,children:(0,N.jsx)(n,{})}),(0,N.jsx)(`h3`,{className:`mt-4 text-lg font-bold text-[#12385f]`,children:e.title}),(0,N.jsx)(`p`,{className:`mt-2 text-sm text-gray-600 leading-6`,children:e.text})]})},e.title)})})]})}),(0,N.jsx)(`section`,{className:`py-16`,children:(0,N.jsx)(`div`,{className:`max-w-[1050px] mx-auto px-5 sm:px-8`,children:(0,N.jsx)($,{children:(0,N.jsx)(`div`,{className:`bg-[#06376b] rounded-[24px] p-6 md:p-8 text-white`,children:(0,N.jsxs)(`div`,{className:`grid md:grid-cols-2 gap-8 items-center`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`span`,{className:`text-orange-400 text-xs font-bold uppercase tracking-[3px]`,children:`Flexible Transportation`}),(0,N.jsx)(`h2`,{className:`mt-3 text-3xl md:text-4xl font-extrabold`,children:`Built Around Your Itinerary`}),(0,N.jsx)(`p`,{className:`mt-3 text-blue-100 leading-6 text-sm md:text-base`,children:`Tell us where you need to go, when you need to arrive and how many people are travelling. We will help coordinate the transportation.`})]}),(0,N.jsx)(`div`,{className:`grid sm:grid-cols-2 gap-2.5`,children:[`Airport pickup and drop`,`Point-to-point transfers`,`Chauffeur-driven cars`,`Corporate transportation`,`Event and exhibition transfers`,`Group transportation`].map(e=>(0,N.jsxs)(`div`,{className:`flex gap-2 items-start bg-white/10 rounded-xl p-3`,children:[(0,N.jsx)(j,{className:`text-orange-400 mt-1 text-sm shrink-0`}),(0,N.jsx)(`span`,{className:`text-sm text-white/90`,children:e})]},e))})]})})})})}),(0,N.jsx)(`section`,{id:`enquiry`,className:`py-16 bg-[#f5f8fc]`,children:(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`max-w-[900px] mx-auto px-5 text-center`,children:[(0,N.jsx)(ui,{className:`text-[#1556bd] text-3xl mx-auto`}),(0,N.jsx)(`h2`,{className:`mt-4 text-3xl md:text-5xl font-extrabold text-[#12385f]`,children:`Need A Reliable Transfer?`}),(0,N.jsx)(`p`,{className:`mt-4 text-gray-600 text-sm md:text-base`,children:`Share your travel details and let our team help arrange your transportation.`}),(0,N.jsxs)(`a`,{href:`https://wa.me/${e}`,target:`_blank`,rel:`noopener noreferrer`,className:`mt-6 inline-flex items-center gap-3 bg-[#25D366] text-white px-7 py-3.5 rounded-full font-bold hover:bg-[#1ebe5d] transition-all`,children:[(0,N.jsx)(rr,{}),`Enquire On WhatsApp`]})]})})})]})}function fg(){let e=`917666984626`;return(0,N.jsxs)(`main`,{className:`bg-white overflow-hidden`,children:[(0,N.jsxs)(`section`,{className:`relative min-h-[430px] md:min-h-[500px] overflow-hidden`,children:[(0,N.jsx)(`img`,{src:`https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=2200&q=90`,alt:`Cruise and ferry booking`,className:`absolute inset-0 w-full h-full object-cover object-center`}),(0,N.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-r from-[#031b3a]/95 via-[#063b73]/80 to-[#063b73]/20`}),(0,N.jsx)(`div`,{className:`relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 pt-28 md:pt-32 pb-20`,children:(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`max-w-[720px]`,children:[(0,N.jsxs)(`div`,{className:`flex items-center gap-3 mb-3`,children:[(0,N.jsx)(`span`,{className:`w-10 h-[2px] bg-orange-500`}),(0,N.jsx)(`span`,{className:`text-white text-[11px] md:text-xs font-bold uppercase tracking-[2.5px]`,children:`Cruise & Ferry Booking`})]}),(0,N.jsxs)(`h1`,{className:`text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]`,children:[`Your Next Adventure`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{className:`text-orange-500`,children:`Starts At Sea.`})]}),(0,N.jsx)(`p`,{className:`mt-4 text-white/90 text-sm md:text-base leading-6 max-w-[600px]`,children:`Discover memorable cruise and ferry journeys with travel planning support from booking to boarding and beyond.`}),(0,N.jsxs)(`div`,{className:`flex flex-wrap gap-3 mt-6`,children:[(0,N.jsxs)(`a`,{href:`#enquiry`,className:`inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-full text-sm font-semibold shadow-lg transition-all hover:-translate-y-1`,children:[`Plan A Cruise`,(0,N.jsx)(M,{className:`text-xs`})]}),(0,N.jsxs)(`a`,{href:`https://wa.me/${e}`,target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex items-center gap-2 border border-white/80 text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-white hover:text-[#103a6d] transition-all`,children:[(0,N.jsx)(rr,{}),`WhatsApp Us`]})]})]})})}),(0,N.jsx)(`div`,{className:`absolute bottom-[-1px] left-0 right-0 h-8 bg-white rounded-t-[50%] scale-x-110`})]}),(0,N.jsx)(`section`,{className:`py-16 md:py-20`,children:(0,N.jsx)(`div`,{className:`max-w-[1180px] mx-auto px-5 sm:px-8`,children:(0,N.jsxs)(`div`,{className:`grid lg:grid-cols-2 gap-10 items-center`,children:[(0,N.jsx)($,{direction:`left`,children:(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`span`,{className:`text-orange-500 text-xs font-bold uppercase tracking-[3px]`,children:`Cruise Travel Made Easy`}),(0,N.jsxs)(`h2`,{className:`mt-3 text-3xl md:text-5xl font-extrabold text-[#12385f] leading-tight`,children:[`More Than A Booking.`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{className:`text-[#1556bd]`,children:`A Complete Journey.`})]}),(0,N.jsx)(`p`,{className:`mt-5 text-gray-600 leading-7`,children:`A cruise holiday often involves more than simply reaching the port. Flights, hotels, transfers, cabins and schedules all need to work together.`}),(0,N.jsx)(`p`,{className:`mt-3 text-gray-600 leading-7`,children:`We help coordinate these travel elements so your sea journey begins smoothly.`})]})}),(0,N.jsx)($,{direction:`right`,children:(0,N.jsx)(`div`,{className:`rounded-[24px] overflow-hidden shadow-2xl`,children:(0,N.jsx)(`img`,{src:`https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=1400&q=85`,alt:`Cruise ship at sea`,className:`w-full h-[360px] object-cover`})})})]})})}),(0,N.jsx)(`section`,{className:`py-16 bg-[#f5f8fc]`,children:(0,N.jsxs)(`div`,{className:`max-w-[1180px] mx-auto px-5 sm:px-8`,children:[(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`text-center mb-10`,children:[(0,N.jsx)(`span`,{className:`text-orange-500 text-xs font-bold uppercase tracking-[3px]`,children:`Our Cruise Services`}),(0,N.jsx)(`h2`,{className:`mt-2 text-3xl md:text-5xl font-extrabold text-[#12385f]`,children:`Plan Every Part Of The Journey`})]})}),(0,N.jsx)(`div`,{className:`grid sm:grid-cols-2 lg:grid-cols-4 gap-4`,children:[{icon:Tr,title:`Cruise Booking`,text:`Explore cruise options and plan your sailing around your preferred itinerary.`},{icon:_r,title:`Ferry Booking`,text:`Ferry travel assistance for destinations where sea connections are part of the journey.`},{icon:mi,title:`Cabin & Stay`,text:`Guidance on accommodation options for your cruise and related travel plans.`},{icon:Xr,title:`Complete Journey`,text:`Coordinate cruise travel with flights, hotels, transfers and other arrangements.`}].map((e,t)=>{let n=e.icon;return(0,N.jsx)($,{delay:t*.08,children:(0,N.jsxs)(`div`,{className:`bg-white rounded-2xl p-5 border border-gray-100 shadow-lg h-full hover:-translate-y-2 transition-all`,children:[(0,N.jsx)(`div`,{className:`w-12 h-12 rounded-xl bg-blue-50 text-[#1556bd] flex items-center justify-center text-lg`,children:(0,N.jsx)(n,{})}),(0,N.jsx)(`h3`,{className:`mt-4 text-lg font-bold text-[#12385f]`,children:e.title}),(0,N.jsx)(`p`,{className:`mt-2 text-sm text-gray-600 leading-6`,children:e.text})]})},e.title)})})]})}),(0,N.jsx)(`section`,{className:`py-16`,children:(0,N.jsx)(`div`,{className:`max-w-[1050px] mx-auto px-5 sm:px-8`,children:(0,N.jsxs)(`div`,{className:`grid lg:grid-cols-2 gap-10 items-center`,children:[(0,N.jsx)($,{direction:`left`,children:(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`span`,{className:`text-orange-500 text-xs font-bold uppercase tracking-[3px]`,children:`Complete Coordination`}),(0,N.jsxs)(`h2`,{className:`mt-3 text-3xl md:text-5xl font-extrabold text-[#12385f]`,children:[`From Port`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{className:`text-[#1556bd]`,children:`To Port.`})]}),(0,N.jsx)(`p`,{className:`mt-4 text-gray-600 leading-7`,children:`Make your cruise planning easier by bringing the important travel arrangements together in one itinerary.`})]})}),(0,N.jsx)($,{direction:`right`,children:(0,N.jsx)(`div`,{className:`grid sm:grid-cols-2 gap-3`,children:[`Cruise itinerary assistance`,`Cabin selection guidance`,`Ferry booking assistance`,`Pre- and post-cruise hotels`,`Flight and transfer coordination`,`Customized cruise travel planning`].map(e=>(0,N.jsxs)(`div`,{className:`flex gap-3 p-4 rounded-xl bg-[#f5f8fc] border border-blue-50`,children:[(0,N.jsx)(j,{className:`text-orange-500 mt-1 shrink-0`}),(0,N.jsx)(`span`,{className:`text-sm font-medium text-[#243b5a]`,children:e})]},e))})})]})})}),(0,N.jsx)(`section`,{id:`enquiry`,className:`py-16 bg-[#06376b] text-white`,children:(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`max-w-[900px] mx-auto px-5 text-center`,children:[(0,N.jsx)(_i,{className:`text-orange-400 text-3xl mx-auto`}),(0,N.jsx)(`h2`,{className:`mt-4 text-3xl md:text-5xl font-extrabold`,children:`Ready To Set Sail?`}),(0,N.jsx)(`p`,{className:`mt-4 text-blue-100 max-w-2xl mx-auto leading-6 text-sm md:text-base`,children:`Tell us where you want to go and let our team help create a cruise or ferry travel plan around your journey.`}),(0,N.jsxs)(`a`,{href:`https://wa.me/${e}`,target:`_blank`,rel:`noopener noreferrer`,className:`mt-6 inline-flex items-center gap-3 bg-[#25D366] text-white px-7 py-3.5 rounded-full font-bold hover:bg-[#1ebe5d] transition-all`,children:[(0,N.jsx)(rr,{}),`Plan Your Journey`]})]})})})]})}function pg(){let e=`917666984626`;return(0,N.jsxs)(`main`,{className:`bg-white overflow-hidden`,children:[(0,N.jsxs)(`section`,{className:`relative min-h-[400px] md:min-h-[450px] overflow-hidden`,children:[(0,N.jsx)(`img`,{src:`https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2200&q=90`,alt:`Group and customized tours`,className:`absolute inset-0 w-full h-full object-cover`}),(0,N.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-r from-[#031b3a]/95 via-[#073b70]/75 to-[#073b70]/20`}),(0,N.jsx)(`div`,{className:`relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 py-24 md:py-28`,children:(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`max-w-[720px]`,children:[(0,N.jsxs)(`div`,{className:`flex items-center gap-3 mb-3`,children:[(0,N.jsx)(`span`,{className:`w-9 h-[2px] bg-orange-500`}),(0,N.jsx)(`span`,{className:`text-white text-[10px] md:text-xs font-bold uppercase tracking-[2.5px]`,children:`Group & Customized Tours`})]}),(0,N.jsxs)(`h1`,{className:`text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]`,children:[`Your Trip.`,` `,(0,N.jsx)(`span`,{className:`text-orange-500`,children:`Your Way.`})]}),(0,N.jsx)(`p`,{className:`mt-4 text-white/90 text-sm md:text-base leading-6 max-w-[620px]`,children:`Personalized holiday and group travel experiences designed around the people, places and moments that matter to you.`}),(0,N.jsxs)(`div`,{className:`flex flex-wrap gap-3 mt-5`,children:[(0,N.jsxs)(`a`,{href:`#enquiry`,className:`inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-full text-sm font-semibold shadow-lg transition-all hover:-translate-y-1`,children:[`Customize My Trip`,(0,N.jsx)(M,{className:`text-xs`})]}),(0,N.jsxs)(`a`,{href:`https://wa.me/${e}`,target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex items-center gap-2 border border-white/80 text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-white hover:text-[#103a6d] transition-all`,children:[(0,N.jsx)(rr,{}),`WhatsApp Us`]})]})]})})}),(0,N.jsx)(`div`,{className:`absolute bottom-[-1px] left-0 right-0 h-7 bg-white rounded-t-[50%] scale-x-110`})]}),(0,N.jsx)(`section`,{className:`py-14 md:py-18`,children:(0,N.jsx)(`div`,{className:`max-w-[1180px] mx-auto px-5 sm:px-8`,children:(0,N.jsxs)(`div`,{className:`grid lg:grid-cols-2 gap-10 items-center`,children:[(0,N.jsx)($,{direction:`left`,children:(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`span`,{className:`text-orange-500 text-xs font-bold uppercase tracking-[3px]`,children:`Travel Your Way`}),(0,N.jsxs)(`h2`,{className:`mt-3 text-3xl md:text-5xl font-extrabold text-[#12385f] leading-tight`,children:[`No Two Travellers`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{className:`text-[#1556bd]`,children:`Need The Same Trip.`})]}),(0,N.jsx)(`p`,{className:`mt-5 text-gray-600 leading-7`,children:`A customized tour gives you the flexibility to decide where you go, how long you stay and what experiences you include.`}),(0,N.jsx)(`p`,{className:`mt-3 text-gray-600 leading-7`,children:`From family holidays and friend groups to corporate getaways, we shape the trip around your requirements.`}),(0,N.jsxs)(`div`,{className:`mt-5 flex flex-wrap gap-2`,children:[(0,N.jsx)(`span`,{className:`px-4 py-2 rounded-full bg-blue-50 text-[#1556bd] text-sm font-semibold`,children:`Flexible`}),(0,N.jsx)(`span`,{className:`px-4 py-2 rounded-full bg-orange-50 text-orange-600 text-sm font-semibold`,children:`Personalized`}),(0,N.jsx)(`span`,{className:`px-4 py-2 rounded-full bg-blue-50 text-[#1556bd] text-sm font-semibold`,children:`Group Friendly`})]})]})}),(0,N.jsx)($,{direction:`right`,children:(0,N.jsx)(`div`,{className:`rounded-[24px] overflow-hidden shadow-2xl`,children:(0,N.jsx)(`img`,{src:`https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=85`,alt:`Friends travelling together`,className:`w-full h-[350px] object-cover`})})})]})})}),(0,N.jsx)(`section`,{className:`py-14 bg-[#f5f8fc]`,children:(0,N.jsxs)(`div`,{className:`max-w-[1180px] mx-auto px-5 sm:px-8`,children:[(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`text-center mb-9`,children:[(0,N.jsx)(`span`,{className:`text-orange-500 text-xs font-bold uppercase tracking-[3px]`,children:`Our Tour Services`}),(0,N.jsx)(`h2`,{className:`mt-2 text-3xl md:text-5xl font-extrabold text-[#12385f]`,children:`Designed Around You`})]})}),(0,N.jsx)(`div`,{className:`grid sm:grid-cols-2 lg:grid-cols-4 gap-4`,children:[{icon:Dr,title:`Customized Itineraries`,text:`Trips designed around your destinations, duration, interests and budget.`},{icon:lr,title:`Group Tours`,text:`Travel coordination for families, friends, corporate teams and groups.`},{icon:Hr,title:`Stay & Transport`,text:`Accommodation and transportation planned as part of your itinerary.`},{icon:Rr,title:`Destination Planning`,text:`Practical guidance to help you make the most of your destinations.`}].map((e,t)=>{let n=e.icon;return(0,N.jsx)($,{delay:t*.08,children:(0,N.jsxs)(`div`,{className:`bg-white rounded-2xl p-5 border border-gray-100 shadow-md h-full hover:-translate-y-2 transition-all`,children:[(0,N.jsx)(`div`,{className:`w-12 h-12 rounded-xl bg-blue-50 text-[#1556bd] flex items-center justify-center text-lg`,children:(0,N.jsx)(n,{})}),(0,N.jsx)(`h3`,{className:`mt-4 text-lg font-bold text-[#12385f]`,children:e.title}),(0,N.jsx)(`p`,{className:`mt-2 text-sm text-gray-600 leading-6`,children:e.text})]})},e.title)})})]})}),(0,N.jsx)(`section`,{className:`py-14`,children:(0,N.jsx)(`div`,{className:`max-w-[1100px] mx-auto px-5 sm:px-8`,children:(0,N.jsxs)(`div`,{className:`grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-center`,children:[(0,N.jsx)($,{direction:`left`,children:(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`span`,{className:`text-orange-500 text-xs font-bold uppercase tracking-[3px]`,children:`Perfect For`}),(0,N.jsxs)(`h2`,{className:`mt-3 text-3xl md:text-5xl font-extrabold text-[#12385f]`,children:[`Every Kind Of`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{className:`text-[#1556bd]`,children:`Traveller.`})]}),(0,N.jsx)(`p`,{className:`mt-4 text-gray-600 leading-7`,children:`Whether it is a family vacation, friends' getaway or organized group, we shape the itinerary around your needs.`})]})}),(0,N.jsx)($,{direction:`right`,children:(0,N.jsx)(`div`,{className:`grid sm:grid-cols-2 gap-3`,children:[`Family holidays`,`Friends & group vacations`,`Corporate group travel`,`Customized international tours`,`Customized domestic tours`,`Special occasion trips`].map(e=>(0,N.jsxs)(`div`,{className:`flex gap-3 p-3.5 rounded-xl bg-[#f5f8fc] border border-blue-50`,children:[(0,N.jsx)(j,{className:`text-orange-500 mt-1 shrink-0`}),(0,N.jsx)(`span`,{className:`text-sm font-medium text-[#243b5a]`,children:e})]},e))})})]})})}),(0,N.jsx)(`section`,{className:`py-14 bg-[#06376b]`,children:(0,N.jsxs)(`div`,{className:`max-w-[1100px] mx-auto px-5 sm:px-8`,children:[(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`text-center text-white mb-9`,children:[(0,N.jsx)(`span`,{className:`text-orange-400 text-xs font-bold uppercase tracking-[3px]`,children:`How It Works`}),(0,N.jsx)(`h2`,{className:`mt-2 text-3xl md:text-5xl font-extrabold`,children:`From Your Idea To Your Itinerary`})]})}),(0,N.jsx)(`div`,{className:`grid md:grid-cols-3 gap-4`,children:[{number:`01`,title:`Tell Us Your Idea`,text:`Share your destination, dates, group size and travel preferences.`},{number:`02`,title:`We Customize It`,text:`Our team builds a practical itinerary around your preferences.`},{number:`03`,title:`Enjoy The Journey`,text:`Travel confidently with your major arrangements coordinated.`}].map((e,t)=>(0,N.jsx)($,{delay:t*.1,children:(0,N.jsxs)(`div`,{className:`h-full p-6 rounded-2xl bg-white/[0.08] border border-white/10 text-white`,children:[(0,N.jsx)(`span`,{className:`text-orange-400 text-2xl font-extrabold`,children:e.number}),(0,N.jsx)(`h3`,{className:`mt-4 text-lg font-bold`,children:e.title}),(0,N.jsx)(`p`,{className:`mt-2 text-blue-100 text-sm leading-6`,children:e.text})]})},e.number))})]})}),(0,N.jsx)(`section`,{id:`enquiry`,className:`py-14 bg-[#f5f8fc]`,children:(0,N.jsx)($,{children:(0,N.jsxs)(`div`,{className:`max-w-[900px] mx-auto px-5 text-center`,children:[(0,N.jsx)(Xr,{className:`text-[#1556bd] text-3xl mx-auto`}),(0,N.jsx)(`h2`,{className:`mt-4 text-3xl md:text-5xl font-extrabold text-[#12385f]`,children:`Let's Build Your Perfect Trip`}),(0,N.jsx)(`p`,{className:`mt-4 text-gray-600 max-w-2xl mx-auto leading-7`,children:`Tell us about your destination, group and travel preferences. We will help turn your idea into a practical itinerary.`}),(0,N.jsxs)(`a`,{href:`https://wa.me/${e}`,target:`_blank`,rel:`noopener noreferrer`,className:`mt-6 inline-flex items-center gap-3 bg-[#25D366] text-white px-7 py-3.5 rounded-full font-bold hover:bg-[#1ebe5d] transition-all`,children:[(0,N.jsx)(rr,{}),`Start Planning On WhatsApp`]})]})})})]})}function mg(){return(0,N.jsxs)(jn,{children:[(0,N.jsx)(sg,{}),(0,N.jsx)(Ci,{}),(0,N.jsx)(Ti,{}),(0,N.jsxs)(Kt,{children:[(0,N.jsx)(k,{path:`/`,element:(0,N.jsx)(kh,{})}),(0,N.jsx)(k,{path:`/flight-air-travel`,element:(0,N.jsx)(Ih,{})}),(0,N.jsx)(k,{path:`/hotel-accommodation`,element:(0,N.jsx)(Jh,{})}),(0,N.jsx)(k,{path:`/visa-documentation`,element:(0,N.jsx)(Qh,{})}),(0,N.jsx)(k,{path:`/trade-fair`,element:(0,N.jsx)(Bh,{})}),(0,N.jsx)(k,{path:`/premium-holiday-packages`,element:(0,N.jsx)(eg,{})}),(0,N.jsx)(k,{path:`/about-us`,element:(0,N.jsx)(Mh,{})}),(0,N.jsx)(k,{path:`/contact-us`,element:(0,N.jsx)(Wh,{})}),(0,N.jsx)(k,{path:`/business-corporate-travel`,element:(0,N.jsx)(cg,{})}),(0,N.jsx)(k,{path:`/mice-exhibition-travel`,element:(0,N.jsx)(lg,{})}),(0,N.jsx)(k,{path:`/travel-insurance`,element:(0,N.jsx)(ug,{})}),(0,N.jsx)(k,{path:`/transfer-car-rental`,element:(0,N.jsx)(dg,{})}),(0,N.jsx)(k,{path:`/cruise-ferry-booking`,element:(0,N.jsx)(fg,{})}),(0,N.jsx)(k,{path:`/group-customized-tours`,element:(0,N.jsx)(pg,{})}),(0,N.jsx)(k,{path:`/about`,element:(0,N.jsx)(Mh,{})}),(0,N.jsx)(k,{path:`/services`,element:(0,N.jsx)(Ih,{})}),(0,N.jsx)(k,{path:`/exhibitions`,element:(0,N.jsx)(Bh,{})}),(0,N.jsx)(k,{path:`/gallery`,element:(0,N.jsx)(Uh,{})}),(0,N.jsx)(k,{path:`/contact`,element:(0,N.jsx)(Wh,{})}),(0,N.jsx)(k,{path:`/admin/login`,element:(0,N.jsx)(rg,{})}),(0,N.jsx)(k,{path:`/admin`,element:(0,N.jsx)(og,{children:(0,N.jsx)(ag,{})})}),(0,N.jsx)(k,{path:`*`,element:(0,N.jsx)(kh,{})})]}),(0,N.jsx)(wh,{}),(0,N.jsx)(tg,{})]})}(0,x.createRoot)(document.getElementById(`root`)).render((0,N.jsx)(b.StrictMode,{children:(0,N.jsx)(mg,{})}));