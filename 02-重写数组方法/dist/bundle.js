!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);let r=Array.prototype,o=Object.create(r);function i(t){for(let e=0;e<t.length;e++)f(t[e])}["push","shift","unshift","pop","reverse","sort","splice"].forEach(t=>{o[t]=function(...e){let n,o=r[t].apply(this,e);switch(console.log("我是{}对象中的push,我在这里实现监听"),t){case"push":case"unshift":n=e;break;case"splice":n=e.slice(2)}return n&&i(n),o}});function a(t,e,n){f(n),Object.defineProperty(t,e,{get:()=>n,set(t){t!==n&&f(n=t)}})}var u=class{constructor(t){Array.isArray(t)?(t.__proto__=o,i(t)):this.walk(t)}walk(t){let e=Object.keys(t);for(let n=0;n<e.length;n++){a(t,e[n],t[e[n]])}}};function c(t){t.$optios.data&&function(t){let e=t.$optios.data;t._data="function"==typeof e?e.call(t):e||{};for(let e in t._data)l(t,"_data",e);f(t._data)}(t)}function l(t,e,n){Object.defineProperty(t,n,{get:()=>t[e][n],set:r=>t[e][n]=r})}function f(t){if("object"==typeof t&&null!=t)return new u(t)}function s(t){this._init(t)}s.prototype._init=function(t){this.$optios=t,c(this)};let p=new s({el:"#app",data:()=>({message:"大家好",wife:{name:"angelababy",age:28},arr:[1,2,{name:"赵丽颖"}]})});p.arr.push({hah:"dasd"}),console.log(p)}]);
//# sourceMappingURL=bundle.js.map