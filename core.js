!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=34)}([function(e,t,n){"use strict";n.r(t),n.d(t,"__extends",(function(){return o})),n.d(t,"__assign",(function(){return i})),n.d(t,"__rest",(function(){return a})),n.d(t,"__decorate",(function(){return s})),n.d(t,"__param",(function(){return c})),n.d(t,"__metadata",(function(){return u})),n.d(t,"__awaiter",(function(){return f})),n.d(t,"__generator",(function(){return l})),n.d(t,"__exportStar",(function(){return p})),n.d(t,"__values",(function(){return h})),n.d(t,"__read",(function(){return d})),n.d(t,"__spread",(function(){return b})),n.d(t,"__spreadArrays",(function(){return g})),n.d(t,"__await",(function(){return v})),n.d(t,"__asyncGenerator",(function(){return y})),n.d(t,"__asyncDelegator",(function(){return _})),n.d(t,"__asyncValues",(function(){return m})),n.d(t,"__makeTemplateObject",(function(){return w})),n.d(t,"__importStar",(function(){return S})),n.d(t,"__importDefault",(function(){return O}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function o(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function s(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}function c(e,t){return function(n,r){t(n,r,e)}}function u(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function f(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n((function(t){t(e.value)})).then(a,s)}c((r=r.apply(e,t||[])).next())}))}function l(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}function p(e,t){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}function h(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}}function d(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function b(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(d(arguments[t]));return e}function g(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)r[o]=i[a];return r}function v(e){return this instanceof v?(this.v=e,this):new v(e)}function y(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),i=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){i.push([e,t,n,r])>1||s(e,t)}))})}function s(e,t){try{(n=o[e](t)).value instanceof v?Promise.resolve(n.value.v).then(c,u):f(i[0][2],n)}catch(e){f(i[0][3],e)}var n}function c(e){s("next",e)}function u(e){s("throw",e)}function f(e,t){e(t),i.shift(),i.length&&s(i[0][0],i[0][1])}}function _(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:v(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function m(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=h(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,o,(t=e[n](t)).done,t.value)}))}}}function w(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function S(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function O(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";var r=n(5),o=n(18),i=Object.prototype.toString;function a(e){return"[object Array]"===i.call(e)}function s(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===i.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),a(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isBuffer:o,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:c,isStream:function(e){return s(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:u,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],n);return t},deepMerge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]="object"==typeof n?e({},n):n}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],n);return t},extend:function(e,t,n){return u(t,(function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(e,t){if(!e)throw a(t)},a=function(e){return new Error("Firebase Database ("+o.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},s=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):55296==(64512&o)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++r)),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],o=0;o<e.length;o+=3){var i=e[o],a=o+1<e.length,s=a?e[o+1]:0,c=o+2<e.length,u=c?e[o+2]:0,f=i>>2,l=(3&i)<<4|s>>4,p=(15&s)<<2|u>>6,h=63&u;c||(h=64,a||(p=64)),r.push(n[f],n[l],n[p],n[h])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(s(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){var i=e[n++];t[r++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){var a=((7&o)<<18|(63&(i=e[n++]))<<12|(63&(s=e[n++]))<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(1023&a))}else{i=e[n++];var s=e[n++];t[r++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],o=0;o<e.length;){var i=n[e.charAt(o++)],a=o<e.length?n[e.charAt(o)]:0,s=++o<e.length?n[e.charAt(o)]:64,c=++o<e.length?n[e.charAt(o)]:64;if(++o,null==i||null==a||null==s||null==c)throw Error();var u=i<<2|a>>4;if(r.push(u),64!==s){var f=a<<4&240|s>>2;if(r.push(f),64!==c){var l=s<<6&192|c;r.push(l)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},u=function(e){try{return c.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&(e[n]=f(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var l=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))}return e.prototype.wrapCallback=function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}},e}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var h="FirebaseError",d=function(e){function t(n,r){var o=e.call(this,r)||this;return o.code=n,o.name=h,Object.setPrototypeOf(o,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,b.prototype.create),o}return r.__extends(t,e),t}(Error),b=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=t[0]||{},o=this.service+"/"+e,i=this.errors[e],a=i?g(i,r):"Error",s=this.serviceName+": "+a+" ("+o+").",c=new d(o,s),u=0,f=Object.keys(r);u<f.length;u++){var l=f[u];"_"!==l.slice(-1)&&(l in c&&console.warn('Overwriting FirebaseError base field "'+l+'" can cause unexpected behavior.'),c[l]=r[l])}return c},e}();function g(e,t){return e.replace(v,(function(e,n){var r=t[n];return null!=r?r.toString():"<"+n+"?>"}))}var v=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e){return JSON.parse(e)}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _=function(e){var t={},n={},r={},o="";try{var i=e.split(".");t=y(u(i[0])||""),n=y(u(i[1])||""),o=i[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:o}};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var m=function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}return e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(r=16;r<80;r++){var o=n[r-3]^n[r-8]^n[r-14]^n[r-16];n[r]=4294967295&(o<<1|o>>>31)}var i,a,s=this.chain_[0],c=this.chain_[1],u=this.chain_[2],f=this.chain_[3],l=this.chain_[4];for(r=0;r<80;r++){r<40?r<20?(i=f^c&(u^f),a=1518500249):(i=c^u^f,a=1859775393):r<60?(i=c&u|f&(c|u),a=2400959708):(i=c^u^f,a=3395469782);o=(s<<5|s>>>27)+i+l+a+n[r]&4294967295;l=f,f=u,u=4294967295&(c<<30|c>>>2),c=s,s=o}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=0,o=this.buf_,i=this.inbuf_;r<t;){if(0===i)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(o[i]=e.charCodeAt(r),++r,++i===this.blockSize){this.compress_(o),i=0;break}}else for(;r<t;)if(o[i]=e[r],++r,++i===this.blockSize){this.compress_(o),i=0;break}}this.inbuf_=i,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);var r=0;for(n=0;n<5;n++)for(var o=24;o>=0;o-=8)e[r]=this.chain_[n]>>o&255,++r;return e},e}();var w=function(){function e(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(n)})).catch((function(e){n.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,n){var r,o=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;for(var n=0,r=t;n<r.length;n++){var o=r[n];if(o in e&&"function"==typeof e[o])return!0}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=S),void 0===r.error&&(r.error=S),void 0===r.complete&&(r.complete=S);var i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{o.finalError?r.error(o.finalError):r.complete()}catch(e){}})),this.observers.push(r),i},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function S(){}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t,n){var r="";switch(t){case 1:r=n?"first":"First";break;case 2:r=n?"second":"Second";break;case 3:r=n?"third":"Third";break;case 4:r=n?"fourth":"Fourth";break;default:throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?")}var o=e+" failed: ";return o+=r+" argument "}t.CONSTANTS=o,t.Deferred=l,t.ErrorFactory=b,t.FirebaseError=d,t.Sha1=m,t.assert=i,t.assertionError=a,t.async=function(e,t){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];Promise.resolve(!0).then((function(){e.apply(void 0,n)})).catch((function(e){t&&t(e)}))}},t.base64=c,t.base64Decode=u,t.base64Encode=function(e){var t=s(e);return c.encodeByteArray(t,!0)},t.contains=
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.createSubscribe=function(e,t){var n=new w(e,t);return n.subscribe.bind(n)},t.decode=_,t.deepCopy=
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){return f(void 0,e)},t.deepExtend=f,t.errorPrefix=O,t.getUA=p,t.isAdmin=function(e){var t=_(e).claims;return"object"==typeof t&&!0===t.admin},t.isBrowser=function(){return"object"==typeof self&&self.self===self},t.isEmpty=function(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0},t.isMobileCordova=function(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(p())},t.isNode=function(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(e){return!1}},t.isNodeSdk=function(){return!0===o.NODE_CLIENT||!0===o.NODE_ADMIN},t.isReactNative=function(){return"object"==typeof navigator&&"ReactNative"===navigator.product},t.isValidFormat=function(e){var t=_(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},t.isValidTimestamp=function(e){var t=_(e).claims,n=Math.floor((new Date).getTime()/1e3),r=0,o=0;return"object"==typeof t&&(t.hasOwnProperty("nbf")?r=t.nbf:t.hasOwnProperty("iat")&&(r=t.iat),o=t.hasOwnProperty("exp")?t.exp:r+86400),!!n&&!!r&&!!o&&n>=r&&n<=o},t.issuedAtTime=function(e){var t=_(e).claims;return"object"==typeof t&&t.hasOwnProperty("iat")?t.iat:null},t.jsonEval=y,t.map=function(e,t,n){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=t.call(n,e[o],o,e));return r}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,t.querystring=function(e){for(var t=[],n=function(e,n){Array.isArray(n)?n.forEach((function(n){t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))})):t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))},r=0,o=Object.entries(e);r<o.length;r++){var i=o[r];n(i[0],i[1])}return t.length?"&"+t.join("&"):""},t.querystringDecode=function(e){var t={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var n=e.split("=");t[n[0]]=n[1]}})),t},t.safeGet=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0},t.stringLength=function(e){for(var t=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t},t.stringToByteArray=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var o=e.charCodeAt(r);if(o>=55296&&o<=56319){var a=o-55296;r++,i(r<e.length,"Surrogate pair missing trail surrogate."),o=65536+(a<<10)+(e.charCodeAt(r)-56320)}o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):o<65536?(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},t.stringify=function(e){return JSON.stringify(e)},t.validateArgCount=function(e,t,n,r){var o;if(r<t?o="at least "+t:r>n&&(o=0===n?"none":"no more than "+n),o)throw new Error(e+" failed: Was called with "+r+(1===r?" argument.":" arguments.")+" Expects "+o+".")},t.validateCallback=function(e,t,n,r){if((!r||n)&&"function"!=typeof n)throw new Error(O(e,t,r)+"must be a valid function.")},t.validateContextObject=function(e,t,n,r){if((!r||n)&&("object"!=typeof n||null===n))throw new Error(O(e,t,r)+"must be a valid context object.")}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,t.validateNamespace=function(e,t,n,r){if((!r||n)&&"string"!=typeof n)throw new Error(O(e,t,r)+"must be a valid firebase namespace.")}}).call(this,n(14))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(0),i=n(2),a=n(15),s=((r={})["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",r["bad-app-name"]="Illegal App name: '{$appName}",r["duplicate-app"]="Firebase App named '{$appName}' already exists",r["app-deleted"]="Firebase App named '{$appName}' already deleted",r["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",r),c=new i.ErrorFactory("app","Firebase",s),u="[DEFAULT]",f=function(){function e(e,t,n){var r=this;this.firebase_=n,this.isDeleted_=!1,this.services_={},this.tokenListeners_=[],this.analyticsEventRequests_=[],this.name_=t.name,this.automaticDataCollectionEnabled_=t.automaticDataCollectionEnabled||!1,this.options_=i.deepCopy(e);var o=this;this.INTERNAL={getUid:function(){return null},getToken:function(){return Promise.resolve(null)},addAuthTokenListener:function(e){r.tokenListeners_.push(e),setTimeout((function(){return e(null)}),0)},removeAuthTokenListener:function(e){r.tokenListeners_=r.tokenListeners_.filter((function(t){return t!==e}))},analytics:{logEvent:function(){o.analyticsEventRequests_.push(arguments)}}}}return Object.defineProperty(e.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(e){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!0,configurable:!0}),e.prototype.delete=function(){var e=this;return new Promise((function(t){e.checkDestroyed_(),t()})).then((function(){e.firebase_.INTERNAL.removeApp(e.name_);for(var t=[],n=0,r=Object.keys(e.services_);n<r.length;n++)for(var o=r[n],i=0,a=Object.keys(e.services_[o]);i<a.length;i++){var s=a[i];t.push(e.services_[o][s])}return Promise.all(t.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))})).then((function(){e.isDeleted_=!0,e.services_={}}))},e.prototype._getService=function(e,t){if(void 0===t&&(t=u),this.checkDestroyed_(),this.services_[e]||(this.services_[e]={}),!this.services_[e][t]){var n=t!==u?t:void 0,r=this.firebase_.INTERNAL.factories[e](this,this.extendApp.bind(this),n);this.services_[e][t]=r}return this.services_[e][t]},e.prototype._removeServiceInstance=function(e,t){void 0===t&&(t=u),this.services_[e]&&this.services_[e][t]&&delete this.services_[e][t]},e.prototype.extendApp=function(e){if(i.deepExtend(this,e),e.INTERNAL){if(e.INTERNAL.addAuthTokenListener){for(var t=0,n=this.tokenListeners_;t<n.length;t++){var r=n[t];this.INTERNAL.addAuthTokenListener(r)}this.tokenListeners_=[]}if(e.INTERNAL.analytics){for(var o=0,a=this.analyticsEventRequests_;o<a.length;o++){var s=a[o];this.INTERNAL.analytics.logEvent.apply(void 0,s)}this.analyticsEventRequests_=[]}}},e.prototype.checkDestroyed_=function(){if(this.isDeleted_)throw c.create("app-deleted",{appName:this.name_})},e}();f.prototype.name&&f.prototype.options||f.prototype.delete||console.log("dc");var l="7.5.0",p=new a.Logger("@firebase/app");
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
if(i.isBrowser()&&void 0!==self.firebase){p.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");var h=self.firebase.SDK_VERSION;h&&h.indexOf("LITE")>=0&&p.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}var d=
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function e(){var t=
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){var t={},n={},r={},o={__esModule:!0,initializeApp:function(n,r){void 0===r&&(r={});if("object"!=typeof r||null===r){r={name:r}}var a=r;void 0===a.name&&(a.name=u);var s=a.name;if("string"!=typeof s||!s)throw c.create("bad-app-name",{appName:String(s)});if(i.contains(t,s))throw c.create("duplicate-app",{appName:s});var l=new e(n,a,o);return t[s]=l,f(l,"create"),l},app:a,apps:null,SDK_VERSION:l,INTERNAL:{registerService:function(t,u,f,l,h){void 0===h&&(h=!1);if(n[t])return p.debug("There were multiple attempts to register service "+t+"."),o[t];n[t]=u,l&&(r[t]=l,s().forEach((function(e){l("create",e)})));function d(e){if(void 0===e&&(e=a()),"function"!=typeof e[t])throw c.create("invalid-app-argument",{appName:t});return e[t]()}void 0!==f&&i.deepExtend(d,f);return o[t]=d,e.prototype[t]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var r=this._getService.bind(this,t);return r.apply(this,h?e:[])},d},removeApp:function(e){f(t[e],"delete"),delete t[e]},factories:n,useAsService:h}};function a(e){if(e=e||u,!i.contains(t,e))throw c.create("no-app",{appName:e});return t[e]}function s(){return Object.keys(t).map((function(e){return t[e]}))}function f(e,t){for(var o=0,i=Object.keys(n);o<i.length;o++){var a=h(e,i[o]);if(null===a)return;r[a]&&r[a](t,e)}}function h(e,t){return"serverAuth"===t?null:t}return(o.default=o,Object.defineProperty(o,"apps",{get:s}),a.App=e,o)}(f);return t.INTERNAL=o.__assign(o.__assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){i.deepExtend(t,e)},createSubscribe:i.createSubscribe,ErrorFactory:i.ErrorFactory,deepExtend:i.deepExtend}),t}(),b=d.initializeApp;d.initializeApp=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return i.isNode()&&p.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      '),b.apply(void 0,e)};var g=d;t.default=g,t.firebase=g},function(e,t,n){"use strict";var r,o=(r=n(3))&&"object"==typeof r&&"default"in r?r.default:r;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */e.exports=o},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";var r=n(1);function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))})))})),i=a.join("&")}if(i){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";(function(t){var r=n(1),o=n(24),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,c={adapter:(void 0!==t&&"[object process]"===Object.prototype.toString.call(t)?s=n(9):"undefined"!=typeof XMLHttpRequest&&(s=n(9)),s),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(i)})),e.exports=c}).call(this,n(23))},function(e,t,n){"use strict";var r=n(1),o=n(25),i=n(6),a=n(27),s=n(28),c=n(10);e.exports=function(e){return new Promise((function(t,u){var f=e.data,l=e.headers;r.isFormData(f)&&delete l["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",d=e.auth.password||"";l.Authorization="Basic "+btoa(h+":"+d)}if(p.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?a(p.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:n,config:e,request:p};o(t,u,r),p=null}},p.onabort=function(){p&&(u(c("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){u(c("Network Error",e,null,p)),p=null},p.ontimeout=function(){u(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var b=n(29),g=(e.withCredentials||s(e.url))&&e.xsrfCookieName?b.read(e.xsrfCookieName):void 0;g&&(l[e.xsrfHeaderName]=g)}if("setRequestHeader"in p&&r.forEach(l,(function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete l[t]:p.setRequestHeader(t,e)})),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),u(e),p=null)})),void 0===f&&(f=null),p.send(f)}))}},function(e,t,n){"use strict";var r=n(26);e.exports=function(e,t,n,o,i){var a=new Error(e);return r(a,t,n,o,i)}},function(e,t,n){"use strict";var r=n(1);e.exports=function(e,t){t=t||{};var n={};return r.forEach(["url","method","params","data"],(function(e){void 0!==t[e]&&(n[e]=t[e])})),r.forEach(["headers","auth","proxy"],(function(o){r.isObject(t[o])?n[o]=r.deepMerge(e[o],t[o]):void 0!==t[o]?n[o]=t[o]:r.isObject(e[o])?n[o]=r.deepMerge(e[o]):void 0!==e[o]&&(n[o]=e[o])})),r.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],(function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])})),n}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){!function(e){"use strict";function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function r(e,t,r){var o,i=new Promise((function(i,a){n(o=e[t].apply(e,r)).then(i,a)}));return i.request=o,i}function o(e,t,n){var o=r(e,t,n);return o.then((function(e){if(e)return new f(e,o.request)}))}function i(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function a(e,t,n,o){o.forEach((function(o){o in n.prototype&&(e.prototype[o]=function(){return r(this[t],o,arguments)})}))}function s(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return this[t][r].apply(this[t],arguments)})}))}function c(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return o(this[t],r,arguments)})}))}function u(e){this._index=e}function f(e,t){this._cursor=e,this._request=t}function l(e){this._store=e}function p(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function h(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new p(n)}function d(e){this._db=e}i(u,"_index",["name","keyPath","multiEntry","unique"]),a(u,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),c(u,"_index",IDBIndex,["openCursor","openKeyCursor"]),i(f,"_cursor",["direction","key","primaryKey","value"]),a(f,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(f.prototype[e]=function(){var t=this,r=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,r),n(t._request).then((function(e){if(e)return new f(e,t._request)}))}))})})),l.prototype.createIndex=function(){return new u(this._store.createIndex.apply(this._store,arguments))},l.prototype.index=function(){return new u(this._store.index.apply(this._store,arguments))},i(l,"_store",["name","keyPath","indexNames","autoIncrement"]),a(l,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),c(l,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),s(l,"_store",IDBObjectStore,["deleteIndex"]),p.prototype.objectStore=function(){return new l(this._tx.objectStore.apply(this._tx,arguments))},i(p,"_tx",["objectStoreNames","mode"]),s(p,"_tx",IDBTransaction,["abort"]),h.prototype.createObjectStore=function(){return new l(this._db.createObjectStore.apply(this._db,arguments))},i(h,"_db",["name","version","objectStoreNames"]),s(h,"_db",IDBDatabase,["deleteObjectStore","close"]),d.prototype.transaction=function(){return new p(this._db.transaction.apply(this._db,arguments))},i(d,"_db",["name","version","objectStoreNames"]),s(d,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[l,u].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),r=n[n.length-1],o=this._store||this._index,i=o[e].apply(o,n.slice(0,-1));i.onsuccess=function(){r(i.result)}})}))})),[u,l].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,r=[];return new Promise((function(o){n.iterateCursor(e,(function(e){e?(r.push(e.value),void 0===t||r.length!=t?e.continue():o(r)):o(r)}))}))})})),e.openDb=function(e,t,n){var o=r(indexedDB,"open",[e,t]),i=o.request;return i&&(i.onupgradeneeded=function(e){n&&n(new h(i.result,e.oldVersion,i.transaction))}),o.then((function(e){return new d(e)}))},e.deleteDb=function(e){return r(indexedDB,"deleteDatabase",[e])},Object.defineProperty(e,"__esModule",{value:!0})}(t)},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function r(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)r[o]=i[a];return r}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */n.r(t),n.d(t,"LogLevel",(function(){return o})),n.d(t,"Logger",(function(){return c})),n.d(t,"setLogLevel",(function(){return u}));var o,i=[];!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(o||(o={}));var a=o.INFO,s=function(e,t){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];if(!(t<e.logLevel)){var a=(new Date).toISOString();switch(t){case o.DEBUG:case o.VERBOSE:console.log.apply(console,r(["["+a+"]  "+e.name+":"],n));break;case o.INFO:console.info.apply(console,r(["["+a+"]  "+e.name+":"],n));break;case o.WARN:console.warn.apply(console,r(["["+a+"]  "+e.name+":"],n));break;case o.ERROR:console.error.apply(console,r(["["+a+"]  "+e.name+":"],n));break;default:throw new Error("Attempted to log a message with an invalid logType (value: "+t+")")}}},c=function(){function e(e){this.name=e,this._logLevel=a,this._logHandler=s,i.push(this)}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in o))throw new TypeError("Invalid value assigned to `logLevel`");this._logLevel=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!0,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,r([this,o.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,r([this,o.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,r([this,o.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,r([this,o.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,r([this,o.ERROR],e))},e}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(e){i.forEach((function(t){t.logLevel=e}))}},function(e,t,n){e.exports=n(17)},function(e,t,n){"use strict";var r=n(1),o=n(5),i=n(19),a=n(11);function s(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var c=s(n(8));c.Axios=i,c.create=function(e){return s(a(c.defaults,e))},c.Cancel=n(12),c.CancelToken=n(32),c.isCancel=n(7),c.all=function(e){return Promise.all(e)},c.spread=n(33),e.exports=c,e.exports.default=c},function(e,t){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},function(e,t,n){"use strict";var r=n(1),o=n(6),i=n(20),a=n(21),s=n(11);function c(e){this.defaults=e,this.interceptors={request:new i,response:new i}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method=e.method?e.method.toLowerCase():"get";var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,o){return this.request(r.merge(o||{},{method:e,url:t,data:n}))}})),e.exports=c},function(e,t,n){"use strict";var r=n(1);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},function(e,t,n){"use strict";var r=n(1),o=n(22),i=n(7),a=n(8),s=n(30),c=n(31);function u(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return u(e),e.baseURL&&!s(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return u(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(u(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,n){"use strict";var r=n(1);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,u=[],f=!1,l=-1;function p(){f&&c&&(f=!1,c.length?u=c.concat(u):l=-1,u.length&&h())}function h(){if(!f){var e=s(p);f=!0;for(var t=u.length;t;){for(c=u,u=[];++l<t;)c&&c[l].run();l=-1,t=u.length}c=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function b(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new d(e,t)),1!==u.length||f||s(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=b,o.addListener=b,o.once=b,o.off=b,o.removeListener=b,o.removeAllListeners=b,o.emit=b,o.prependListener=b,o.prependOnceListener=b,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(1);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},function(e,t,n){"use strict";var r=n(10);e.exports=function(e,t,n){var o=n.config.validateStatus;!o||o(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,n){"use strict";var r=n(1),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,a={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},function(e,t,n){"use strict";var r=n(1);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){"use strict";var r=n(1);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,a){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(12);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";n.r(t);var r,o=n(4),i=n(3),a=n.n(i),s=n(0),c=n(2),u=n(13),f=1e4,l="w:0.3.6",p="FIS_v2",h="https://firebaseinstallations.googleapis.com/v1",d=36e5,b=((r={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',r["not-registered"]="Firebase Installation is not registered.",r["installation-not-found"]="Firebase Installation not found.",r["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',r["app-offline"]="Could not process request. Application offline.",r["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",r),g=new c.ErrorFactory("installations","Installations",b);function v(e){return e instanceof c.FirebaseError&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e){var t,n;if(!e||!e.options)throw _("App Configuration");if(!e.name)throw _("App Name");try{for(var r=Object(s.__values)(["projectId","apiKey","appId"]),o=r.next();!o.done;o=r.next()){var i=o.value;if(!e.options[i])throw _(i)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function _(e){return g.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(e){var t=e.projectId;return h+"/projects/"+t+"/installations"}function w(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}function S(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r;return Object(s.__generator)(this,(function(o){switch(o.label){case 0:return[4,t.json()];case 1:return n=o.sent(),r=n.error,[2,g.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})]}}))}))}function O(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function k(e,t){var n=t.refreshToken,r=O(e);return r.append("Authorization",function(e){return p+" "+e}
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n)),r}function T(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t;return Object(s.__generator)(this,(function(n){switch(n.label){case 0:return[4,e()];case 1:return(t=n.sent()).status>=500&&t.status<600?[2,e()]:[2,t]}}))}))}function j(e,t){var n=t.fid;return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,r,o,i,a,c;return Object(s.__generator)(this,(function(s){switch(s.label){case 0:return t=m(e),r=O(e),o={fid:n,authVersion:p,appId:e.appId,sdkVersion:l},i={method:"POST",headers:r,body:JSON.stringify(o)},[4,T((function(){return fetch(t,i)}))];case 1:return(a=s.sent()).ok?[4,a.json()]:[3,3];case 2:return c=s.sent(),[2,{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:w(c.authToken)}];case 3:return[4,S("Create Installation",a)];case 4:throw s.sent()}}))}))}
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e){return new Promise((function(t){setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var N=/^[cdef][\w-]{21}$/,A="";function D(){try{var e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;var t=function(e){return(t=e,btoa(String.fromCharCode.apply(String,Object(s.__spread)(t))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);return N.test(t)?t:A}catch(e){return A}}var C,x="firebase-installations-database",I=1,P="firebase-installations-store",R=null;function M(){return R||(R=Object(u.openDb)(x,I,(function(e){switch(e.oldVersion){case 0:e.createObjectStore(P)}}))),R}function L(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r,o;return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return n=U(e),[4,M()];case 1:return r=i.sent(),[4,(o=r.transaction(P,"readwrite")).objectStore(P).put(t,n)];case 2:return i.sent(),[4,o.complete];case 3:return i.sent(),[2,t]}}))}))}function F(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n,r;return Object(s.__generator)(this,(function(o){switch(o.label){case 0:return t=U(e),[4,M()];case 1:return n=o.sent(),[4,(r=n.transaction(P,"readwrite")).objectStore(P).delete(t)];case 2:return o.sent(),[4,r.complete];case 3:return o.sent(),[2]}}))}))}function B(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r,o,i,a,c;return Object(s.__generator)(this,(function(s){switch(s.label){case 0:return n=U(e),[4,M()];case 1:return r=s.sent(),o=r.transaction(P,"readwrite"),[4,(i=o.objectStore(P)).get(n)];case 2:return a=s.sent(),void 0!==(c=t(a))?[3,4]:[4,i.delete(n)];case 3:return s.sent(),[3,6];case 4:return[4,i.put(c,n)];case 5:s.sent(),s.label=6;case 6:return[4,o.complete];case 7:return s.sent(),[2,c]}}))}))}function U(e){return e.appName+"!"+e.appId}
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n,r;return Object(s.__generator)(this,(function(o){switch(o.label){case 0:return[4,B(e,(function(n){var r=function(e){return K(e||{fid:D(),registrationStatus:0})}(n),o=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){var n=Promise.reject(g.create("app-offline"));return{installationEntry:t,registrationPromise:n}}var r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},o=function(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r;return Object(s.__generator)(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,7]),[4,j(e,t)];case 1:return n=o.sent(),[2,L(e,n)];case 2:return v(r=o.sent())&&409===r.serverCode?[4,F(e)]:[3,4];case 3:return o.sent(),[3,6];case 4:return[4,L(e,{fid:t.fid,registrationStatus:0})];case 5:o.sent(),o.label=6;case 6:throw r;case 7:return[2]}}))}))}(e,r);return{installationEntry:r,registrationPromise:o}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:q(e)}:{installationEntry:t}}(e,r);return t=o.registrationPromise,o.installationEntry}))];case 1:return(n=o.sent()).fid!==A?[3,3]:(r={},[4,t]);case 2:return[2,(r.installationEntry=o.sent(),r)];case 3:return[2,{installationEntry:n,registrationPromise:t}]}}))}))}function q(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n,r,o;return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return[4,W(e)];case 1:t=i.sent(),i.label=2;case 2:return 1!==t.registrationStatus?[3,5]:[4,E(100)];case 3:return i.sent(),[4,W(e)];case 4:return t=i.sent(),[3,2];case 5:return 0!==t.registrationStatus?[3,7]:[4,V(e)];case 6:return n=i.sent(),r=n.installationEntry,(o=n.registrationPromise)?[2,o]:[2,r];case 7:return[2,t]}}))}))}function W(e){return B(e,(function(e){if(!e)throw g.create("installation-not-found");return K(e)}))}function K(e){return 1===(t=e).registrationStatus&&t.registrationTime+f<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}function H(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r,o,i,a,c;return Object(s.__generator)(this,(function(s){switch(s.label){case 0:return n=function(e,t){var n=t.fid;return m(e)+"/"+n+"/authTokens:generate"}
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t),r=k(e,t),o={installation:{sdkVersion:l}},i={method:"POST",headers:r,body:JSON.stringify(o)},[4,T((function(){return fetch(n,i)}))];case 1:return(a=s.sent()).ok?[4,a.json()]:[3,3];case 2:return c=s.sent(),[2,w(c)];case 3:return[4,S("Generate Auth Token",a)];case 4:throw s.sent()}}))}))}function z(e,t){return void 0===t&&(t=!1),Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r,o;return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return[4,B(e,(function(r){if(!$(r))throw g.create("not-registered");var o=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+d}(e)}(o))return r;if(1===o.requestStatus)return n=function(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r;return Object(s.__generator)(this,(function(o){switch(o.label){case 0:return[4,G(e)];case 1:n=o.sent(),o.label=2;case 2:return 1!==n.authToken.requestStatus?[3,5]:[4,E(100)];case 3:return o.sent(),[4,G(e)];case 4:return n=o.sent(),[3,2];case 5:return 0===(r=n.authToken).requestStatus?[2,z(e,t)]:[2,r]}}))}))}(e,t),r;if(!navigator.onLine)throw g.create("app-offline");var i=function(e){var t={requestStatus:1,requestTime:Date.now()};return Object(s.__assign)(Object(s.__assign)({},e),{authToken:t})}(r);return n=function(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r,o;return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return i.trys.push([0,3,,8]),[4,H(e,t)];case 1:return n=i.sent(),o=Object(s.__assign)(Object(s.__assign)({},t),{authToken:n}),[4,L(e,o)];case 2:return i.sent(),[2,n];case 3:return!v(r=i.sent())||401!==r.serverCode&&404!==r.serverCode?[3,5]:[4,F(e)];case 4:return i.sent(),[3,7];case 5:return o=Object(s.__assign)(Object(s.__assign)({},t),{authToken:{requestStatus:0}}),[4,L(e,o)];case 6:i.sent(),i.label=7;case 7:throw r;case 8:return[2]}}))}))}(e,i),i}))];case 1:return r=i.sent(),n?[4,n]:[3,3];case 2:return o=i.sent(),[3,4];case 3:o=r.authToken,i.label=4;case 4:return[2,o]}}))}))}function G(e){return B(e,(function(e){if(!$(e))throw g.create("not-registered");var t,n=e.authToken;return 1===(t=n).requestStatus&&t.requestTime+f<Date.now()?Object(s.__assign)(Object(s.__assign)({},e),{authToken:{requestStatus:0}}):e}))}function $(e){return void 0!==e&&2===e.registrationStatus}function J(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t;return Object(s.__generator)(this,(function(n){switch(n.label){case 0:return[4,V(e)];case 1:return(t=n.sent().registrationPromise)?[4,t]:[3,3];case 2:n.sent(),n.label=3;case 3:return[2]}}))}))}
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r,o,i;return Object(s.__generator)(this,(function(a){switch(a.label){case 0:return n=function(e,t){var n=t.fid;return m(e)+"/"+n}
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t),r=k(e,t),o={method:"DELETE",headers:r},[4,T((function(){return fetch(n,o)}))];case 1:return(i=a.sent()).ok?[3,3]:[4,S("Delete Installation",i)];case 2:throw a.sent();case 3:return[2]}}))}))}a.a.INTERNAL.registerService("installations",(function(e){return y(e),{app:e,getId:function(){
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return function(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n,r,o;return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return[4,V(t=y(e))];case 1:return n=i.sent(),r=n.installationEntry,(o=n.registrationPromise)?o.catch(console.error):z(t).catch(console.error),[2,r.fid]}}))}))}
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)},getToken:function(t){return function(e,t){return void 0===t&&(t=!1),Object(s.__awaiter)(this,void 0,void 0,(function(){var n;return Object(s.__generator)(this,(function(r){switch(r.label){case 0:return[4,J(n=y(e))];case 1:return r.sent(),[4,z(n,t)];case 2:return[2,r.sent().token]}}))}))}(e,t)},delete:function(){return function(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n;return Object(s.__generator)(this,(function(r){switch(r.label){case 0:return[4,B(t=y(e),(function(e){if(!e||0!==e.registrationStatus)return e}))];case 1:if(!(n=r.sent()))return[3,6];if(1!==n.registrationStatus)return[3,2];throw g.create("delete-pending-registration");case 2:if(2!==n.registrationStatus)return[3,6];if(navigator.onLine)return[3,3];throw g.create("app-offline");case 3:return[4,X(t,n)];case 4:return r.sent(),[4,F(t)];case 5:r.sent(),r.label=6;case 6:return[2]}}))}))}
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}}}));var Y,Q=((C={})["only-available-in-window"]="This method is available in a Window context.",C["only-available-in-sw"]="This method is available in a service worker context.",C["should-be-overriden"]="This method should be overriden by extended classes.",C["bad-sender-id"]="Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp().",C["permission-default"]="The required permissions were not granted and dismissed instead.",C["permission-blocked"]="The required permissions were not granted and blocked instead.",C["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",C["notifications-blocked"]="Notifications have been blocked.",C["failed-serviceworker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",C["sw-registration-expected"]="A service worker registration was the expected input.",C["get-subscription-failed"]="There was an error when trying to get any existing Push Subscriptions.",C["invalid-saved-token"]="Unable to access details of the saved token.",C["sw-reg-redundant"]="The service worker being used for push was made redundant.",C["token-subscribe-failed"]="A problem occured while subscribing the user to FCM: {$errorInfo}",C["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",C["token-unsubscribe-failed"]="A problem occured while unsubscribing the user from FCM: {$errorInfo}",C["token-update-failed"]="A problem occured while updating the user from FCM: {$errorInfo}",C["token-update-no-token"]="FCM returned no token when updating the user to push.",C["use-sw-before-get-token"]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",C["invalid-delete-token"]="You must pass a valid token into deleteToken(), i.e. the token from getToken().",C["delete-token-not-found"]="The deletion attempt for token could not be performed as the token was not found.",C["delete-scope-not-found"]="The deletion attempt for service worker scope could not be performed as the scope was not found.",C["bg-handler-function-expected"]="The input to setBackgroundMessageHandler() must be a function.",C["no-window-client-to-msg"]="An attempt was made to message a non-existant window client.",C["unable-to-resubscribe"]="There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$errorInfo}",C["no-fcm-token-for-resubscribe"]="Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.",C["failed-to-delete-token"]="Unable to delete the currently saved token.",C["no-sw-in-reg"]="Even though the service worker registration was successful, there was a problem accessing the service worker itself.",C["bad-scope"]="The service worker scope must be a string with at least one character.",C["bad-vapid-key"]="The public VAPID key is not a Uint8Array with 65 bytes.",C["bad-subscription"]="The subscription must be a valid PushSubscription.",C["bad-token"]="The FCM Token used for storage / lookup was not a valid token string.",C["failed-delete-vapid-key"]="The VAPID key could not be deleted.",C["invalid-public-vapid-key"]="The public VAPID key must be a string.",C["use-public-key-before-get-token"]="The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",C["public-vapid-key-decryption-failed"]="The public VAPID key did not equal 65 bytes when decrypted.",C),Z=new c.ErrorFactory("messaging","Messaging",Q),ee=new Uint8Array([4,51,148,247,223,161,235,177,220,3,162,94,21,113,219,72,211,46,237,237,178,52,219,183,71,58,12,143,196,204,225,111,60,140,132,223,171,182,102,62,242,12,212,139,254,227,249,118,47,20,28,99,8,106,111,45,177,26,149,176,206,55,192,156,110]),te="https://fcmregistrations.googleapis.com/v1";
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ne(e,t){if(null==e||null==t)return!1;if(e===t)return!0;if(e.byteLength!==t.byteLength)return!1;for(var n=new DataView(e),r=new DataView(t),o=0;o<e.byteLength;o++)if(n.getUint8(o)!==r.getUint8(o))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(e){return function(e){var t=new Uint8Array(e);return btoa(String.fromCharCode.apply(String,Object(s.__spread)(t)))}(e).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e){e.PUSH_MSG_RECEIVED="push-msg-received",e.NOTIFICATION_CLICKED="notification-clicked"}(Y||(Y={}));var oe=function(){function e(){}return e.prototype.getToken=function(e,t,n){return Object(s.__awaiter)(this,void 0,void 0,(function(){var r,o,i,a,c,u;return Object(s.__generator)(this,(function(s){switch(s.label){case 0:return[4,ae(e)];case 1:r=s.sent(),o=se(t,n),i={method:"POST",headers:r,body:JSON.stringify(o)},s.label=2;case 2:return s.trys.push([2,5,,6]),[4,fetch(ie(e),i)];case 3:return[4,s.sent().json()];case 4:return a=s.sent(),[3,6];case 5:throw c=s.sent(),Z.create("token-subscribe-failed",{errorInfo:c});case 6:if(a.error)throw u=a.error.message,Z.create("token-subscribe-failed",{errorInfo:u});if(!a.token)throw Z.create("token-subscribe-no-token");return[2,a.token]}}))}))},e.prototype.updateToken=function(e,t,n,r){return Object(s.__awaiter)(this,void 0,void 0,(function(){var o,i,a,c,u,f;return Object(s.__generator)(this,(function(s){switch(s.label){case 0:return[4,ae(t)];case 1:o=s.sent(),i=se(n,r),a={method:"PATCH",headers:o,body:JSON.stringify(i)},s.label=2;case 2:return s.trys.push([2,5,,6]),[4,fetch(ie(t)+"/"+e.fcmToken,a)];case 3:return[4,s.sent().json()];case 4:return c=s.sent(),[3,6];case 5:throw u=s.sent(),Z.create("token-update-failed",{errorInfo:u});case 6:if(c.error)throw f=c.error.message,Z.create("token-update-failed",{errorInfo:f});if(!c.token)throw Z.create("token-update-no-token");return[2,c.token]}}))}))},e.prototype.deleteToken=function(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r,o,i,a;return Object(s.__generator)(this,(function(s){switch(s.label){case 0:return[4,ae(e)];case 1:n=s.sent(),r={method:"DELETE",headers:n},s.label=2;case 2:return s.trys.push([2,5,,6]),[4,fetch(ie(e)+"/"+t.fcmToken,r)];case 3:return[4,s.sent().json()];case 4:if((o=s.sent()).error)throw i=o.error.message,Z.create("token-unsubscribe-failed",{errorInfo:i});return[3,6];case 5:throw a=s.sent(),Z.create("token-unsubscribe-failed",{errorInfo:a});case 6:return[2]}}))}))},e}();function ie(e){return te+"/projects/"+e.options.projectId+"/registrations"}function ae(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t;return Object(s.__generator)(this,(function(n){switch(n.label){case 0:return[4,e.installations().getToken()];case 1:return t=n.sent(),[2,new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.options.apiKey,"x-goog-firebase-installations-auth":"FIS "+t})]}}))}))}function se(e,t){var n=re(e.getKey("p256dh")),r=re(e.getKey("auth")),o={web:{endpoint:e.endpoint,p256dh:n,auth:r}};return ne(t.buffer,ee.buffer)||(o.web.applicationPubKey=re(t)),o}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),r=new Uint8Array(n.length),o=0;o<n.length;++o)r[o]=n.charCodeAt(o);return r}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue="undefined",fe="fcm_token_object_Store";function le(e){var t=indexedDB.open(ue);t.onerror=function(e){},t.onsuccess=function(n){!function(e,t){if(e.objectStoreNames.contains(fe)){var n=e.transaction(fe).objectStore(fe),r=new oe,o=n.openCursor();o.onerror=function(e){console.warn("Unable to cleanup old IDB.",e)},o.onsuccess=function(){var n=o.result;if(n){var i=n.value;r.deleteToken(t,i),n.continue()}else e.close(),indexedDB.deleteDatabase(ue)}}}(t.result,e)}}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe=function(){function e(){this.dbPromise=null}return e.prototype.get=function(e){return this.createTransaction((function(t){return t.get(e)}))},e.prototype.getIndex=function(e,t){return this.createTransaction((function(n){return n.index(e).get(t)}))},e.prototype.put=function(e){return this.createTransaction((function(t){return t.put(e)}),"readwrite")},e.prototype.delete=function(e){return this.createTransaction((function(t){return t.delete(e)}),"readwrite")},e.prototype.closeDatabase=function(){return Object(s.__awaiter)(this,void 0,void 0,(function(){return Object(s.__generator)(this,(function(e){switch(e.label){case 0:return this.dbPromise?[4,this.dbPromise]:[3,2];case 1:e.sent().close(),this.dbPromise=null,e.label=2;case 2:return[2]}}))}))},e.prototype.createTransaction=function(e,t){return void 0===t&&(t="readonly"),Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r,o,i;return Object(s.__generator)(this,(function(a){switch(a.label){case 0:return[4,this.getDb()];case 1:return n=a.sent(),r=n.transaction(this.objectStoreName,t),o=r.objectStore(this.objectStoreName),[4,he(e(o))];case 2:return i=a.sent(),[2,new Promise((function(e,t){r.oncomplete=function(){e(i)},r.onerror=function(){t(r.error)}}))]}}))}))},e.prototype.getDb=function(){var e=this;return this.dbPromise||(this.dbPromise=new Promise((function(t,n){var r=indexedDB.open(e.dbName,e.dbVersion);r.onsuccess=function(){t(r.result)},r.onerror=function(){e.dbPromise=null,n(r.error)},r.onupgradeneeded=function(t){return e.onDbUpgrade(r,t)}}))),this.dbPromise},e}();function he(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de=function(e){function t(t){var n=e.call(this)||this;return n.app=t,n.dbName="fcm_token_details_db",n.dbVersion=4,n.objectStoreName="fcm_token_object_Store",n}return Object(s.__extends)(t,e),t.prototype.onDbUpgrade=function(e,t){var n=e.result;switch(t.oldVersion){case 0:(o=n.createObjectStore(this.objectStoreName,{keyPath:"swScope"})).createIndex("fcmSenderId","fcmSenderId",{unique:!1}),o.createIndex("fcmToken","fcmToken",{unique:!0});case 1:le(this.app);case 2:var r=(o=e.transaction.objectStore(this.objectStoreName)).openCursor();r.onsuccess=function(){var e=r.result;if(e){var t=e.value,n=Object(s.__assign)({},t);t.createTime||(n.createTime=Date.now()),"string"==typeof t.vapidKey&&(n.vapidKey=ce(t.vapidKey)),"string"==typeof t.auth&&(n.auth=ce(t.auth).buffer),"string"==typeof t.auth&&(n.p256dh=ce(t.p256dh).buffer),"string"==typeof t.fcmPushSet&&delete n.fcmPushSet,e.update(n),e.continue()}};break;case 3:var o,i=(o=e.transaction.objectStore(this.objectStoreName)).openCursor();i.onsuccess=function(){var e=i.result;if(e){var t=e.value,n=Object(s.__assign)({},t);"string"==typeof t.fcmPushSet&&delete n.fcmPushSet,e.update(n),e.continue()}}}},t.prototype.getTokenDetailsFromToken=function(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){return Object(s.__generator)(this,(function(t){if(!e)throw Z.create("bad-token");return be({fcmToken:e}),[2,this.getIndex("fcmToken",e)]}))}))},t.prototype.getTokenDetailsFromSWScope=function(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){return Object(s.__generator)(this,(function(t){if(!e)throw Z.create("bad-scope");return be({swScope:e}),[2,this.get(e)]}))}))},t.prototype.saveTokenDetails=function(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){return Object(s.__generator)(this,(function(t){if(!e.swScope)throw Z.create("bad-scope");if(!e.vapidKey)throw Z.create("bad-vapid-key");if(!e.endpoint||!e.auth||!e.p256dh)throw Z.create("bad-subscription");if(!e.fcmSenderId)throw Z.create("bad-sender-id");if(!e.fcmToken)throw Z.create("bad-token");return be(e),[2,this.put(e)]}))}))},t.prototype.deleteToken=function(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t;return Object(s.__generator)(this,(function(n){switch(n.label){case 0:return"string"!=typeof e||0===e.length?[2,Promise.reject(Z.create("invalid-delete-token"))]:[4,this.getTokenDetailsFromToken(e)];case 1:if(!(t=n.sent()))throw Z.create("delete-token-not-found");return[4,this.delete(t.swScope)];case 2:return n.sent(),[2,t]}}))}))},t}(pe);function be(e){if(e.fcmToken&&("string"!=typeof e.fcmToken||0===e.fcmToken.length))throw Z.create("bad-token");if(e.swScope&&("string"!=typeof e.swScope||0===e.swScope.length))throw Z.create("bad-scope");if(e.vapidKey&&(!(e.vapidKey instanceof Uint8Array)||65!==e.vapidKey.length))throw Z.create("bad-vapid-key");if(e.endpoint&&("string"!=typeof e.endpoint||0===e.endpoint.length))throw Z.create("bad-subscription");if(e.auth&&!(e.auth instanceof ArrayBuffer))throw Z.create("bad-subscription");if(e.p256dh&&!(e.p256dh instanceof ArrayBuffer))throw Z.create("bad-subscription");if(e.fcmSenderId&&("string"!=typeof e.fcmSenderId||0===e.fcmSenderId.length))throw Z.create("bad-sender-id")}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.dbName="fcm_vapid_details_db",t.dbVersion=1,t.objectStoreName="fcm_vapid_object_Store",t}return Object(s.__extends)(t,e),t.prototype.onDbUpgrade=function(e){e.result.createObjectStore(this.objectStoreName,{keyPath:"swScope"})},t.prototype.getVapidFromSWScope=function(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t;return Object(s.__generator)(this,(function(n){switch(n.label){case 0:if("string"!=typeof e||0===e.length)throw Z.create("bad-scope");return[4,this.get(e)];case 1:return[2,(t=n.sent())?t.vapidKey:void 0]}}))}))},t.prototype.saveVapidDetails=function(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n;return Object(s.__generator)(this,(function(r){if("string"!=typeof e||0===e.length)throw Z.create("bad-scope");if(null===t||65!==t.length)throw Z.create("bad-vapid-key");return n={swScope:e,vapidKey:t},[2,this.put(n)]}))}))},t.prototype.deleteVapidDetails=function(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t;return Object(s.__generator)(this,(function(n){switch(n.label){case 0:return[4,this.getVapidFromSWScope(e)];case 1:if(!(t=n.sent()))throw Z.create("delete-scope-not-found");return[4,this.delete(e)];case 2:return n.sent(),[2,t]}}))}))},t}(pe),ve=function(){function e(e){var t=this;if(this.app=e,this.vapidDetailsModel=new ge,this.subscriptionManager=new oe,!e.options.messagingSenderId||"string"!=typeof e.options.messagingSenderId)throw Z.create("bad-sender-id");this.INTERNAL={delete:function(){return t.delete()}},this.tokenDetailsModel=new de(e)}return e.prototype.getToken=function(){return Object(s.__awaiter)(this,void 0,void 0,(function(){var e,t,n,r,o;return Object(s.__generator)(this,(function(i){switch(i.label){case 0:if("denied"===(e=this.getNotificationPermission_()))throw Z.create("notifications-blocked");return"granted"!==e?[2,null]:[4,this.getSWRegistration_()];case 1:return t=i.sent(),[4,this.getPublicVapidKey_()];case 2:return n=i.sent(),[4,this.getPushSubscription(t,n)];case 3:return r=i.sent(),[4,this.tokenDetailsModel.getTokenDetailsFromSWScope(t.scope)];case 4:return(o=i.sent())?[2,this.manageExistingToken(t,r,n,o)]:[2,this.getNewToken(t,r,n)]}}))}))},e.prototype.manageExistingToken=function(e,t,n,r){return Object(s.__awaiter)(this,void 0,void 0,(function(){return Object(s.__generator)(this,(function(o){switch(o.label){case 0:return function(e,t,n){if(!n.vapidKey||!ne(t.buffer,n.vapidKey.buffer))return!1;var r=e.endpoint===n.endpoint,o=ne(e.getKey("auth"),n.auth),i=ne(e.getKey("p256dh"),n.p256dh);return r&&o&&i}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,n,r)?Date.now()<r.createTime+6048e5?[2,r.fcmToken]:[2,this.updateToken(e,t,n,r)]:[3,1];case 1:return[4,this.deleteTokenFromDB(r.fcmToken)];case 2:return o.sent(),[2,this.getNewToken(e,t,n)];case 3:return[2]}}))}))},e.prototype.updateToken=function(e,t,n,r){return Object(s.__awaiter)(this,void 0,void 0,(function(){var o,i,a;return Object(s.__generator)(this,(function(s){switch(s.label){case 0:return s.trys.push([0,4,,6]),[4,this.subscriptionManager.updateToken(r,this.app,t,n)];case 1:return o=s.sent(),i={swScope:e.scope,vapidKey:n,fcmSenderId:this.app.options.messagingSenderId,fcmToken:o,createTime:Date.now(),endpoint:t.endpoint,auth:t.getKey("auth"),p256dh:t.getKey("p256dh")},[4,this.tokenDetailsModel.saveTokenDetails(i)];case 2:return s.sent(),[4,this.vapidDetailsModel.saveVapidDetails(e.scope,n)];case 3:return s.sent(),[2,o];case 4:return a=s.sent(),[4,this.deleteToken(r.fcmToken)];case 5:throw s.sent(),a;case 6:return[2]}}))}))},e.prototype.getNewToken=function(e,t,n){return Object(s.__awaiter)(this,void 0,void 0,(function(){var r,o;return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return[4,this.subscriptionManager.getToken(this.app,t,n)];case 1:return r=i.sent(),o={swScope:e.scope,vapidKey:n,fcmSenderId:this.app.options.messagingSenderId,fcmToken:r,createTime:Date.now(),endpoint:t.endpoint,auth:t.getKey("auth"),p256dh:t.getKey("p256dh")},[4,this.tokenDetailsModel.saveTokenDetails(o)];case 2:return i.sent(),[4,this.vapidDetailsModel.saveVapidDetails(e.scope,n)];case 3:return i.sent(),[2,r]}}))}))},e.prototype.deleteToken=function(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n;return Object(s.__generator)(this,(function(r){switch(r.label){case 0:return[4,this.deleteTokenFromDB(e)];case 1:return r.sent(),[4,this.getSWRegistration_()];case 2:return(t=r.sent())?[4,t.pushManager.getSubscription()]:[3,4];case 3:if(n=r.sent())return[2,n.unsubscribe()];r.label=4;case 4:return[2,!0]}}))}))},e.prototype.deleteTokenFromDB=function(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t;return Object(s.__generator)(this,(function(n){switch(n.label){case 0:return[4,this.tokenDetailsModel.deleteToken(e)];case 1:return t=n.sent(),[4,this.subscriptionManager.deleteToken(this.app,t)];case 2:return n.sent(),[2]}}))}))},e.prototype.getPushSubscription=function(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n;return Object(s.__generator)(this,(function(r){switch(r.label){case 0:return[4,e.pushManager.getSubscription()];case 1:return(n=r.sent())?[2,n]:[2,e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:t})]}}))}))},e.prototype.requestPermission=function(){throw Z.create("only-available-in-window")},e.prototype.useServiceWorker=function(e){throw Z.create("only-available-in-window")},e.prototype.usePublicVapidKey=function(e){throw Z.create("only-available-in-window")},e.prototype.onMessage=function(e,t,n){throw Z.create("only-available-in-window")},e.prototype.onTokenRefresh=function(e,t,n){throw Z.create("only-available-in-window")},e.prototype.setBackgroundMessageHandler=function(e){throw Z.create("only-available-in-sw")},e.prototype.delete=function(){return Object(s.__awaiter)(this,void 0,void 0,(function(){return Object(s.__generator)(this,(function(e){switch(e.label){case 0:return[4,Promise.all([this.tokenDetailsModel.closeDatabase(),this.vapidDetailsModel.closeDatabase()])];case 1:return e.sent(),[2]}}))}))},e.prototype.getNotificationPermission_=function(){return Notification.permission},e.prototype.getTokenDetailsModel=function(){return this.tokenDetailsModel},e.prototype.getVapidDetailsModel=function(){return this.vapidDetailsModel},e.prototype.getSubscriptionManager=function(){return this.subscriptionManager},e}();var ye=function(e){function t(t){var n=e.call(this,t)||this;return n.bgMessageHandler=null,self.addEventListener("push",(function(e){n.onPush(e)})),self.addEventListener("pushsubscriptionchange",(function(e){n.onSubChange(e)})),self.addEventListener("notificationclick",(function(e){n.onNotificationClick(e)})),n}return Object(s.__extends)(t,e),t.prototype.onPush=function(e){e.waitUntil(this.onPush_(e))},t.prototype.onSubChange=function(e){e.waitUntil(this.onSubChange_(e))},t.prototype.onNotificationClick=function(e){e.waitUntil(this.onNotificationClick_(e))},t.prototype.onPush_=function(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n,r,o,i,a;return Object(s.__generator)(this,(function(s){switch(s.label){case 0:if(!e.data)return[2];try{t=e.data.json()}catch(e){return[2]}return[4,this.hasVisibleClients_()];case 1:return s.sent()?[2,this.sendMessageToWindowClients_(t)]:(n=this.getNotificationData_(t))?(r=n.title||"",[4,this.getSWRegistration_()]):[3,3];case 2:return o=s.sent(),i=n.actions,a=Notification.maxActions,i&&a&&i.length>a&&console.warn("This browser only supports "+a+" actions.The remaining actions will not be displayed."),[2,o.showNotification(r,n)];case 3:return this.bgMessageHandler?[4,this.bgMessageHandler(t)]:[3,5];case 4:return s.sent(),[2];case 5:return[2]}}))}))},t.prototype.onSubChange_=function(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var e,t,n,r;return Object(s.__generator)(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,this.getSWRegistration_()];case 1:return e=o.sent(),[3,3];case 2:throw t=o.sent(),Z.create("unable-to-resubscribe",{errorInfo:t});case 3:return o.trys.push([3,5,,8]),[4,e.pushManager.getSubscription()];case 4:return o.sent(),[3,8];case 5:return n=o.sent(),[4,this.getTokenDetailsModel().getTokenDetailsFromSWScope(e.scope)];case 6:if(!(r=o.sent()))throw n;return[4,this.deleteToken(r.fcmToken)];case 7:throw o.sent(),n;case 8:return[2]}}))}))},t.prototype.onNotificationClick_=function(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n,r,o;return Object(s.__generator)(this,(function(i){switch(i.label){case 0:if(!(e.notification&&e.notification.data&&e.notification.data.FCM_MSG))return[2];if(e.action)return[2];if(e.stopImmediatePropagation(),e.notification.close(),!(t=e.notification.data.FCM_MSG).notification)return[2];if(!(n=t.fcmOptions&&t.fcmOptions.link||t.notification.click_action)){if(!(t.data&&"google.c.a.c_id"in t.data))return[2];n=self.location.origin}return[4,this.getWindowClient_(n)];case 1:return(r=i.sent())?[3,4]:[4,self.clients.openWindow(n)];case 2:return r=i.sent(),[4,(a=3e3,new Promise((function(e){setTimeout(e,a)})))];case 3:return i.sent(),[3,6];case 4:return[4,r.focus()];case 5:r=i.sent(),i.label=6;case 6:return r?(delete t.notification,delete t.fcmOptions,o=me(Y.NOTIFICATION_CLICKED,t),[2,this.attemptToMessageClient_(r,o)]):[2]}var a;
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}))}))},t.prototype.getNotificationData_=function(e){var t;if(e&&"object"==typeof e.notification){var n=Object(s.__assign)({},e.notification);return n.data=Object(s.__assign)(Object(s.__assign)({},e.notification.data),((t={}).FCM_MSG=e,t)),n}},t.prototype.setBackgroundMessageHandler=function(e){if(!e||"function"!=typeof e)throw Z.create("bg-handler-function-expected");this.bgMessageHandler=e},t.prototype.getWindowClient_=function(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n,r,o;return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return t=new URL(e,self.location.href).href,[4,_e()];case 1:for(n=i.sent(),r=null,o=0;o<n.length;o++)if(new URL(n[o].url,self.location.href).href===t){r=n[o];break}return[2,r]}}))}))},t.prototype.attemptToMessageClient_=function(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){return Object(s.__generator)(this,(function(n){if(!e)throw Z.create("no-window-client-to-msg");return e.postMessage(t),[2]}))}))},t.prototype.hasVisibleClients_=function(){return Object(s.__awaiter)(this,void 0,void 0,(function(){return Object(s.__generator)(this,(function(e){switch(e.label){case 0:return[4,_e()];case 1:return[2,e.sent().some((function(e){return"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")}))]}}))}))},t.prototype.sendMessageToWindowClients_=function(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n,r=this;return Object(s.__generator)(this,(function(o){switch(o.label){case 0:return[4,_e()];case 1:return t=o.sent(),n=me(Y.PUSH_MSG_RECEIVED,e),[4,Promise.all(t.map((function(e){return r.attemptToMessageClient_(e,n)})))];case 2:return o.sent(),[2]}}))}))},t.prototype.getSWRegistration_=function(){return Object(s.__awaiter)(this,void 0,void 0,(function(){return Object(s.__generator)(this,(function(e){return[2,self.registration]}))}))},t.prototype.getPublicVapidKey_=function(){return Object(s.__awaiter)(this,void 0,void 0,(function(){var e,t;return Object(s.__generator)(this,(function(n){switch(n.label){case 0:return[4,this.getSWRegistration_()];case 1:if(!(e=n.sent()))throw Z.create("sw-registration-expected");return[4,this.getVapidDetailsModel().getVapidFromSWScope(e.scope)];case 2:return null==(t=n.sent())?[2,ee]:[2,t]}}))}))},t}(ve);function _e(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function me(e,t){return{firebaseMessagingType:e,firebaseMessagingData:t}}var we=function(e){function t(t){var n=e.call(this,t)||this;return n.registrationToUse=null,n.publicVapidKeyToUse=null,n.messageObserver=null,n.tokenRefreshObserver=null,n.onMessageInternal=Object(c.createSubscribe)((function(e){n.messageObserver=e})),n.onTokenRefreshInternal=Object(c.createSubscribe)((function(e){n.tokenRefreshObserver=e})),n.setupSWMessageListener_(),n}return Object(s.__extends)(t,e),t.prototype.requestPermission=function(){return Object(s.__awaiter)(this,void 0,void 0,(function(){var e;return Object(s.__generator)(this,(function(t){switch(t.label){case 0:return"granted"===this.getNotificationPermission_()?[2]:[4,Notification.requestPermission()];case 1:if("granted"===(e=t.sent()))return[2];throw"denied"===e?Z.create("permission-blocked"):Z.create("permission-default")}}))}))},t.prototype.useServiceWorker=function(e){if(!(e instanceof ServiceWorkerRegistration))throw Z.create("sw-registration-expected");if(null!=this.registrationToUse)throw Z.create("use-sw-before-get-token");this.registrationToUse=e},t.prototype.usePublicVapidKey=function(e){if("string"!=typeof e)throw Z.create("invalid-public-vapid-key");if(null!=this.publicVapidKeyToUse)throw Z.create("use-public-key-before-get-token");var t=ce(e);if(65!==t.length)throw Z.create("public-vapid-key-decryption-failed");this.publicVapidKeyToUse=t},t.prototype.onMessage=function(e,t,n){return"function"==typeof e?this.onMessageInternal(e,t,n):this.onMessageInternal(e)},t.prototype.onTokenRefresh=function(e,t,n){return"function"==typeof e?this.onTokenRefreshInternal(e,t,n):this.onTokenRefreshInternal(e)},t.prototype.waitForRegistrationToActivate_=function(e){var t=e.installing||e.waiting||e.active;return new Promise((function(n,r){if(t)if("activated"!==t.state)if("redundant"!==t.state){var o=function(){if("activated"===t.state)n(e);else{if("redundant"!==t.state)return;r(Z.create("sw-reg-redundant"))}t.removeEventListener("statechange",o)};t.addEventListener("statechange",o)}else r(Z.create("sw-reg-redundant"));else n(e);else r(Z.create("no-sw-in-reg"))}))},t.prototype.getSWRegistration_=function(){var e=this;return this.registrationToUse?this.waitForRegistrationToActivate_(this.registrationToUse):(this.registrationToUse=null,navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"}).catch((function(e){throw Z.create("failed-serviceworker-registration",{browserErrorMessage:e.message})})).then((function(t){return e.waitForRegistrationToActivate_(t).then((function(){return e.registrationToUse=t,t.update(),t}))})))},t.prototype.getPublicVapidKey_=function(){return Object(s.__awaiter)(this,void 0,void 0,(function(){return Object(s.__generator)(this,(function(e){return this.publicVapidKeyToUse?[2,this.publicVapidKeyToUse]:[2,ee]}))}))},t.prototype.setupSWMessageListener_=function(){var e=this;navigator.serviceWorker.addEventListener("message",(function(t){if(t.data&&t.data.firebaseMessagingType&&t.data.firebaseMessagingData){var n=t.data,r=n.firebaseMessagingType,o=n.firebaseMessagingData;e.messageObserver&&e.messageObserver.next(o);var i=o.data;if(i&&"google.c.a.c_id"in i&&"1"===i["google.c.a.e"]){var a=function(e){switch(e){case Y.NOTIFICATION_CLICKED:return"notification_open";case Y.PUSH_MSG_RECEIVED:return"notification_foreground";default:throw new Error}}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);e.app.INTERNAL.analytics.logEvent(a,{message_name:i["google.c.a.c_l"],message_id:i["google.c.a.c_id"],message_time:i["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)})}}}),!1)},t}(ve);function Se(){return self&&"ServiceWorkerGlobalScope"in self?"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey"):navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}!function(e){var t={isSupported:Se};e.INTERNAL.registerService("messaging",(function(e){if(!Se())throw Z.create("unsupported-browser");return self&&"ServiceWorkerGlobalScope"in self?new ye(e):new we(e)}),t)}(a.a);const Oe=n(16).default;o.initializeApp({apiKey:"AIzaSyAgG-s2QFWlIYCNCP9vaL95LcW4_mUmBb4",authDomain:"fcm-test-c6dba.firebaseapp.com",databaseURL:"https://fcm-test-c6dba.firebaseio.com",projectId:"fcm-test-c6dba",storageBucket:"fcm-test-c6dba.appspot.com",messagingSenderId:"347541004446",appId:"1:347541004446:web:4814bedf595d34a0841b8f",measurementId:"G-7ZNX0TFC1W"});const ke=o.messaging();ke.usePublicVapidKey("BKanYTXSO5QlJOsp9WA1xmPtA4wqxlMrdAG6Y-F_0JE9jmeIILPX7G_eV6udN59d71GJFXM9685-Mn66XBkgS_g"),ke.onMessage(e=>{const t=e.data.title,n=e.data.url,r={body:e.data.body,icon:e.data.icon};let o=new Notification(t,r);o.onclick=function(e){o.close(),e.preventDefault(),window.open(n,"_blank")}});const Te=()=>{Notification.requestPermission().then(e=>{"granted"===e?(console.log("Notification permission granted."),je(),ke.onTokenRefresh(()=>{je()})):console.log("Unable to get permission to notify.")}).catch(e=>{console.log("Error occured while requesting permission ",e)})},je=()=>{ke.getToken().then(e=>{e?((e,t)=>{Oe.post("https://whispering-ridge-16979.herokuapp.com/api/v1/registerUser",{topic:e,registrationToken:t}).then(e=>{console.log("User has been registered")}).catch(e=>{console.log(e)})})(Topic,e):(Te(),console.log("No Instance ID token available. Request permission to generate one."))}).catch(e=>{console.log("Error retrieving Instance ID token. ",e)})};Te()}]);