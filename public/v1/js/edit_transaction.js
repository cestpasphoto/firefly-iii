/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js":
/*!********************************************************************!*\
  !*** ./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js ***!
  \********************************************************************/
/***/ ((module) => {

!function(A,t){ true?module.exports=t():0}(window,function(){return function(A){var t={};function e(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return A[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=A,e.c=t,e.d=function(A,t,n){e.o(A,t)||Object.defineProperty(A,t,{enumerable:!0,get:n})},e.r=function(A){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},e.t=function(A,t){if(1&t&&(A=e(A)),8&t)return A;if(4&t&&"object"==typeof A&&A&&A.__esModule)return A;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:A}),2&t&&"string"!=typeof A)for(var i in A)e.d(n,i,function(t){return A[t]}.bind(null,i));return n},e.n=function(A){var t=A&&A.__esModule?function(){return A.default}:function(){return A};return e.d(t,"a",t),t},e.o=function(A,t){return Object.prototype.hasOwnProperty.call(A,t)},e.p="/dist/",e(e.s=6)}([function(A,t,e){var n=e(8);"string"==typeof n&&(n=[[A.i,n,""]]),n.locals&&(A.exports=n.locals);(0,e(4).default)("7ec05f6c",n,!1,{})},function(A,t,e){var n=e(10);"string"==typeof n&&(n=[[A.i,n,""]]),n.locals&&(A.exports=n.locals);(0,e(4).default)("3453d19d",n,!1,{})},function(A,t,e){"use strict";A.exports=function(A){var t=[];return t.toString=function(){return this.map(function(t){var e=function(A,t){var e=A[1]||"",n=A[3];if(!n)return e;if(t&&"function"==typeof btoa){var i=(r=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),a=n.sources.map(function(A){return"/*# sourceURL="+n.sourceRoot+A+" */"});return[e].concat(a).concat([i]).join("\n")}var r;return[e].join("\n")}(t,A);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},t.i=function(A,e){"string"==typeof A&&(A=[[null,A,""]]);for(var n={},i=0;i<this.length;i++){var a=this[i][0];null!=a&&(n[a]=!0)}for(i=0;i<A.length;i++){var r=A[i];null!=r[0]&&n[r[0]]||(e&&!r[2]?r[2]=e:e&&(r[2]="("+r[2]+") and ("+e+")"),t.push(r))}},t}},function(A,t){A.exports="data:application/vnd.ms-fontobject;base64,aAUAAMQEAAABAAIAAAAAAAAAAAAAAAAAAAABAJABAAAAAExQAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAUdPJHwAAAAAAAAAAAAAAAAAAAAAAAA4AaQBjAG8AbQBvAG8AbgAAAA4AUgBlAGcAdQBsAGEAcgAAABYAVgBlAHIAcwBpAG8AbgAgADEALgAwAAAADgBpAGMAbwBtAG8AbwBuAAAAAAAAAQAAAAsAgAADADBPUy8yDxIFrAAAALwAAABgY21hcBdW0okAAAEcAAAAVGdhc3AAAAAQAAABcAAAAAhnbHlmpZ+jMAAAAXgAAAD8aGVhZA/FmAgAAAJ0AAAANmhoZWEHgAPIAAACrAAAACRobXR4EgABvgAAAtAAAAAcbG9jYQCSAOIAAALsAAAAEG1heHAACQAfAAAC/AAAACBuYW1lmUoJ+wAAAxwAAAGGcG9zdAADAAAAAASkAAAAIAADA4ABkAAFAAACmQLMAAAAjwKZAswAAAHrADMBCQAAAAAAAAAAAAAAAAAAAAEQAAAAAAAAAAAAAAAAAAAAAEAAAOkCA8D/wABAA8AAQAAAAAEAAAAAAAAAAAAAACAAAAAAAAMAAAADAAAAHAABAAMAAAAcAAMAAQAAABwABAA4AAAACgAIAAIAAgABACDpAv/9//8AAAAAACDpAP/9//8AAf/jFwQAAwABAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAVgEBA74CgQAcAAABMhceARcWFwcmJy4BJyYjIgYHFyERFzY3PgE3NgIWSkNDbykpF2QQIB9VMzQ5P3AtnP6AmB0iIkspKAJVFxhSODlCIDMrKz4REislmgGAmhkVFBwICAABANYAgQMqAtUACwAAAQcXBycHJzcnNxc3Ayru7jzu7jzu7jzu7gKZ7u487u487u487u4AAQCSAIEDgAK9AAUAACUBFwEnNwGAAcQ8/gDuPPkBxDz+AO48AAAAAAEAAAAAAAAfydNRXw889QALBAAAAAAA1nUqGwAAAADWdSobAAAAAAO+AtUAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAA74AAQAAAAAAAAAAAAAAAAAAAAcEAAAAAAAAAAAAAAACAAAABAAAVgQAANYEAACSAAAAAAAKABQAHgBQAGoAfgABAAAABwAdAAEAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEABwAAAAEAAAAAAAIABwBgAAEAAAAAAAMABwA2AAEAAAAAAAQABwB1AAEAAAAAAAUACwAVAAEAAAAAAAYABwBLAAEAAAAAAAoAGgCKAAMAAQQJAAEADgAHAAMAAQQJAAIADgBnAAMAAQQJAAMADgA9AAMAAQQJAAQADgB8AAMAAQQJAAUAFgAgAAMAAQQJAAYADgBSAAMAAQQJAAoANACkaWNvbW9vbgBpAGMAbwBtAG8AbwBuVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwaWNvbW9vbgBpAGMAbwBtAG8AbwBuaWNvbW9vbgBpAGMAbwBtAG8AbwBuUmVndWxhcgBSAGUAZwB1AGwAYQByaWNvbW9vbgBpAGMAbwBtAG8AbwBuRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="},function(A,t,e){"use strict";function n(A,t){for(var e=[],n={},i=0;i<t.length;i++){var a=t[i],r=a[0],o={id:A+":"+i,css:a[1],media:a[2],sourceMap:a[3]};n[r]?n[r].parts.push(o):e.push(n[r]={id:r,parts:[o]})}return e}e.r(t),e.d(t,"default",function(){return g});var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},r=i&&(document.head||document.getElementsByTagName("head")[0]),o=null,s=0,u=!1,c=function(){},d=null,l="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function g(A,t,e,i){u=e,d=i||{};var r=n(A,t);return f(r),function(t){for(var e=[],i=0;i<r.length;i++){var o=r[i];(s=a[o.id]).refs--,e.push(s)}t?f(r=n(A,t)):r=[];for(i=0;i<e.length;i++){var s;if(0===(s=e[i]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete a[s.id]}}}}function f(A){for(var t=0;t<A.length;t++){var e=A[t],n=a[e.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](e.parts[i]);for(;i<e.parts.length;i++)n.parts.push(v(e.parts[i]));n.parts.length>e.parts.length&&(n.parts.length=e.parts.length)}else{var r=[];for(i=0;i<e.parts.length;i++)r.push(v(e.parts[i]));a[e.id]={id:e.id,refs:1,parts:r}}}}function B(){var A=document.createElement("style");return A.type="text/css",r.appendChild(A),A}function v(A){var t,e,n=document.querySelector("style["+l+'~="'+A.id+'"]');if(n){if(u)return c;n.parentNode.removeChild(n)}if(p){var i=s++;n=o||(o=B()),t=C.bind(null,n,i,!1),e=C.bind(null,n,i,!0)}else n=B(),t=function(A,t){var e=t.css,n=t.media,i=t.sourceMap;n&&A.setAttribute("media",n);d.ssrId&&A.setAttribute(l,t.id);i&&(e+="\n/*# sourceURL="+i.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");if(A.styleSheet)A.styleSheet.cssText=e;else{for(;A.firstChild;)A.removeChild(A.firstChild);A.appendChild(document.createTextNode(e))}}.bind(null,n),e=function(){n.parentNode.removeChild(n)};return t(A),function(n){if(n){if(n.css===A.css&&n.media===A.media&&n.sourceMap===A.sourceMap)return;t(A=n)}else e()}}var m,h=(m=[],function(A,t){return m[A]=t,m.filter(Boolean).join("\n")});function C(A,t,e,n){var i=e?"":n.css;if(A.styleSheet)A.styleSheet.cssText=h(t,i);else{var a=document.createTextNode(i),r=A.childNodes;r[t]&&A.removeChild(r[t]),r.length?A.insertBefore(a,r[t]):A.appendChild(a)}}},function(A,t,e){"use strict";var n=Array.isArray,i=Object.keys,a=Object.prototype.hasOwnProperty;A.exports=function A(t,e){if(t===e)return!0;if(t&&e&&"object"==typeof t&&"object"==typeof e){var r,o,s,u=n(t),c=n(e);if(u&&c){if((o=t.length)!=e.length)return!1;for(r=o;0!=r--;)if(!A(t[r],e[r]))return!1;return!0}if(u!=c)return!1;var d=t instanceof Date,l=e instanceof Date;if(d!=l)return!1;if(d&&l)return t.getTime()==e.getTime();var p=t instanceof RegExp,g=e instanceof RegExp;if(p!=g)return!1;if(p&&g)return t.toString()==e.toString();var f=i(t);if((o=f.length)!==i(e).length)return!1;for(r=o;0!=r--;)if(!a.call(e,f[r]))return!1;for(r=o;0!=r--;)if(!A(t[s=f[r]],e[s]))return!1;return!0}return t!=t&&e!=e}},function(A,t,e){A.exports=e(14)},function(A,t,e){"use strict";var n=e(0);e.n(n).a},function(A,t,e){(A.exports=e(2)(!0)).push([A.i,".ti-tag-input[data-v-108f4f13] {\n  background-color: transparent;\n  color: inherit;\n  border: none;\n  padding: 0px;\n  margin: 0px;\n  display: flex;\n  top: 0px;\n  position: absolute;\n  width: 100%;\n  line-height: inherit;\n}\n.ti-tag-input[data-v-108f4f13]::-ms-clear {\n  display: none;\n}\ninput[data-v-108f4f13]:focus {\n  outline: none;\n}\ninput[disabled][data-v-108f4f13] {\n  background-color: transparent;\n}\n","",{version:3,sources:["C:/Users/johan/dev/vue-tags-input/vue-tags-input/C:/Users/johan/dev/vue-tags-input/vue-tags-input/tag-input.vue"],names:[],mappings:"AAAA;EACE,8BAA8B;EAC9B,eAAe;EACf,aAAa;EACb,aAAa;EACb,YAAY;EACZ,cAAc;EACd,SAAS;EACT,mBAAmB;EACnB,YAAY;EACZ,qBAAqB;CAAE;AAEzB;EACE,cAAc;CAAE;AAElB;EACE,cAAc;CAAE;AAElB;EACE,8BAA8B;CAAE",file:"tag-input.vue?vue&type=style&index=0&id=108f4f13&lang=css&scoped=true&",sourcesContent:[".ti-tag-input {\n  background-color: transparent;\n  color: inherit;\n  border: none;\n  padding: 0px;\n  margin: 0px;\n  display: flex;\n  top: 0px;\n  position: absolute;\n  width: 100%;\n  line-height: inherit; }\n\n.ti-tag-input::-ms-clear {\n  display: none; }\n\ninput:focus {\n  outline: none; }\n\ninput[disabled] {\n  background-color: transparent; }\n"],sourceRoot:""}])},function(A,t,e){"use strict";var n=e(1);e.n(n).a},function(A,t,e){t=A.exports=e(2)(!0);var n=e(11),i=n(e(3)),a=n(e(3)+"#iefix"),r=n(e(12)),o=n(e(13));t.push([A.i,"@font-face {\n  font-family: 'icomoon';\n  src: url("+i+");\n  src: url("+a+') format("embedded-opentype"), url('+r+') format("truetype"), url('+o+') format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n[class^="ti-icon-"][data-v-61d92e31], [class*=" ti-icon-"][data-v-61d92e31] {\n  font-family: \'icomoon\' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.ti-icon-check[data-v-61d92e31]:before {\n  content: "\\e902";\n}\n.ti-icon-close[data-v-61d92e31]:before {\n  content: "\\e901";\n}\n.ti-icon-undo[data-v-61d92e31]:before {\n  content: "\\e900";\n}\nul[data-v-61d92e31] {\n  margin: 0px;\n  padding: 0px;\n  list-style-type: none;\n}\n*[data-v-61d92e31], *[data-v-61d92e31]:before, *[data-v-61d92e31]:after {\n  box-sizing: border-box;\n}\ninput[data-v-61d92e31]:focus {\n  outline: none;\n}\ninput[disabled][data-v-61d92e31] {\n  background-color: transparent;\n}\n.vue-tags-input[data-v-61d92e31] {\n  max-width: 450px;\n  position: relative;\n  background-color: #fff;\n}\ndiv.vue-tags-input.disabled[data-v-61d92e31] {\n  opacity: 0.5;\n}\ndiv.vue-tags-input.disabled *[data-v-61d92e31] {\n    cursor: default;\n}\n.ti-input[data-v-61d92e31] {\n  border: 1px solid #ccc;\n  display: flex;\n  padding: 4px;\n  flex-wrap: wrap;\n}\n.ti-tags[data-v-61d92e31] {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  line-height: 1em;\n}\n.ti-tag[data-v-61d92e31] {\n  background-color: #5C6BC0;\n  color: #fff;\n  border-radius: 2px;\n  display: flex;\n  padding: 3px 5px;\n  margin: 2px;\n  font-size: .85em;\n}\n.ti-tag[data-v-61d92e31]:focus {\n    outline: none;\n}\n.ti-tag .ti-content[data-v-61d92e31] {\n    display: flex;\n    align-items: center;\n}\n.ti-tag .ti-tag-center[data-v-61d92e31] {\n    position: relative;\n}\n.ti-tag span[data-v-61d92e31] {\n    line-height: .85em;\n}\n.ti-tag span.ti-hidden[data-v-61d92e31] {\n    padding-left: 14px;\n    visibility: hidden;\n    height: 0px;\n    white-space: pre;\n}\n.ti-tag .ti-actions[data-v-61d92e31] {\n    margin-left: 2px;\n    display: flex;\n    align-items: center;\n    font-size: 1.15em;\n}\n.ti-tag .ti-actions i[data-v-61d92e31] {\n      cursor: pointer;\n}\n.ti-tag[data-v-61d92e31]:last-child {\n    margin-right: 4px;\n}\n.ti-tag.ti-invalid[data-v-61d92e31], .ti-tag.ti-tag.ti-deletion-mark[data-v-61d92e31] {\n    background-color: #e54d42;\n}\n.ti-new-tag-input-wrapper[data-v-61d92e31] {\n  display: flex;\n  flex: 1 0 auto;\n  padding: 3px 5px;\n  margin: 2px;\n  font-size: .85em;\n}\n.ti-new-tag-input-wrapper input[data-v-61d92e31] {\n    flex: 1 0 auto;\n    min-width: 100px;\n    border: none;\n    padding: 0px;\n    margin: 0px;\n}\n.ti-new-tag-input[data-v-61d92e31] {\n  line-height: initial;\n}\n.ti-autocomplete[data-v-61d92e31] {\n  border: 1px solid #ccc;\n  border-top: none;\n  position: absolute;\n  width: 100%;\n  background-color: #fff;\n  z-index: 20;\n}\n.ti-item > div[data-v-61d92e31] {\n  cursor: pointer;\n  padding: 3px 6px;\n  width: 100%;\n}\n.ti-selected-item[data-v-61d92e31] {\n  background-color: #5C6BC0;\n  color: #fff;\n}\n',"",{version:3,sources:["C:/Users/johan/dev/vue-tags-input/vue-tags-input/C:/Users/johan/dev/vue-tags-input/vue-tags-input/vue-tags-input.scss"],names:[],mappings:"AAAA;EACE,uBAAuB;EACvB,mCAA8C;EAC9C,+JAAuM;EACvM,oBAAoB;EACpB,mBAAmB;CAAE;AAEvB;EACE,kCAAkC;EAClC,YAAY;EACZ,mBAAmB;EACnB,oBAAoB;EACpB,qBAAqB;EACrB,qBAAqB;EACrB,eAAe;EACf,oCAAoC;EACpC,mCAAmC;CAAE;AAEvC;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;CAAE;AAE1B;EACE,uBAAuB;CAAE;AAE3B;EACE,cAAc;CAAE;AAElB;EACE,8BAA8B;CAAE;AAElC;EACE,iBAAiB;EACjB,mBAAmB;EACnB,uBAAuB;CAAE;AAE3B;EACE,aAAa;CAAE;AACf;IACE,gBAAgB;CAAE;AAEtB;EACE,uBAAuB;EACvB,cAAc;EACd,aAAa;EACb,gBAAgB;CAAE;AAEpB;EACE,cAAc;EACd,gBAAgB;EAChB,YAAY;EACZ,iBAAiB;CAAE;AAErB;EACE,0BAA0B;EAC1B,YAAY;EACZ,mBAAmB;EACnB,cAAc;EACd,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;CAAE;AACnB;IACE,cAAc;CAAE;AAClB;IACE,cAAc;IACd,oBAAoB;CAAE;AACxB;IACE,mBAAmB;CAAE;AACvB;IACE,mBAAmB;CAAE;AACvB;IACE,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;CAAE;AACrB;IACE,iBAAiB;IACjB,cAAc;IACd,oBAAoB;IACpB,kBAAkB;CAAE;AACpB;MACE,gBAAgB;CAAE;AACtB;IACE,kBAAkB;CAAE;AACtB;IACE,0BAA0B;CAAE;AAEhC;EACE,cAAc;EACd,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;CAAE;AACnB;IACE,eAAe;IACf,iBAAiB;IACjB,aAAa;IACb,aAAa;IACb,YAAY;CAAE;AAElB;EACE,qBAAqB;CAAE;AAEzB;EACE,uBAAuB;EACvB,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,uBAAuB;EACvB,YAAY;CAAE;AAEhB;EACE,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;CAAE;AAEhB;EACE,0BAA0B;EAC1B,YAAY;CAAE",file:"vue-tags-input.scss?vue&type=style&index=0&id=61d92e31&lang=scss&scoped=true&",sourcesContent:['@font-face {\n  font-family: \'icomoon\';\n  src: url("./assets/fonts/icomoon.eot?7grlse");\n  src: url("./assets/fonts/icomoon.eot?7grlse#iefix") format("embedded-opentype"), url("./assets/fonts/icomoon.ttf?7grlse") format("truetype"), url("./assets/fonts/icomoon.woff?7grlse") format("woff");\n  font-weight: normal;\n  font-style: normal; }\n\n[class^="ti-icon-"], [class*=" ti-icon-"] {\n  font-family: \'icomoon\' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.ti-icon-check:before {\n  content: "\\e902"; }\n\n.ti-icon-close:before {\n  content: "\\e901"; }\n\n.ti-icon-undo:before {\n  content: "\\e900"; }\n\nul {\n  margin: 0px;\n  padding: 0px;\n  list-style-type: none; }\n\n*, *:before, *:after {\n  box-sizing: border-box; }\n\ninput:focus {\n  outline: none; }\n\ninput[disabled] {\n  background-color: transparent; }\n\n.vue-tags-input {\n  max-width: 450px;\n  position: relative;\n  background-color: #fff; }\n\ndiv.vue-tags-input.disabled {\n  opacity: 0.5; }\n  div.vue-tags-input.disabled * {\n    cursor: default; }\n\n.ti-input {\n  border: 1px solid #ccc;\n  display: flex;\n  padding: 4px;\n  flex-wrap: wrap; }\n\n.ti-tags {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  line-height: 1em; }\n\n.ti-tag {\n  background-color: #5C6BC0;\n  color: #fff;\n  border-radius: 2px;\n  display: flex;\n  padding: 3px 5px;\n  margin: 2px;\n  font-size: .85em; }\n  .ti-tag:focus {\n    outline: none; }\n  .ti-tag .ti-content {\n    display: flex;\n    align-items: center; }\n  .ti-tag .ti-tag-center {\n    position: relative; }\n  .ti-tag span {\n    line-height: .85em; }\n  .ti-tag span.ti-hidden {\n    padding-left: 14px;\n    visibility: hidden;\n    height: 0px;\n    white-space: pre; }\n  .ti-tag .ti-actions {\n    margin-left: 2px;\n    display: flex;\n    align-items: center;\n    font-size: 1.15em; }\n    .ti-tag .ti-actions i {\n      cursor: pointer; }\n  .ti-tag:last-child {\n    margin-right: 4px; }\n  .ti-tag.ti-invalid, .ti-tag.ti-tag.ti-deletion-mark {\n    background-color: #e54d42; }\n\n.ti-new-tag-input-wrapper {\n  display: flex;\n  flex: 1 0 auto;\n  padding: 3px 5px;\n  margin: 2px;\n  font-size: .85em; }\n  .ti-new-tag-input-wrapper input {\n    flex: 1 0 auto;\n    min-width: 100px;\n    border: none;\n    padding: 0px;\n    margin: 0px; }\n\n.ti-new-tag-input {\n  line-height: initial; }\n\n.ti-autocomplete {\n  border: 1px solid #ccc;\n  border-top: none;\n  position: absolute;\n  width: 100%;\n  background-color: #fff;\n  z-index: 20; }\n\n.ti-item > div {\n  cursor: pointer;\n  padding: 3px 6px;\n  width: 100%; }\n\n.ti-selected-item {\n  background-color: #5C6BC0;\n  color: #fff; }\n'],sourceRoot:""}])},function(A,t,e){"use strict";A.exports=function(A){return"string"!=typeof A?A:(/^['"].*['"]$/.test(A)&&(A=A.slice(1,-1)),/["'() \t\n]/.test(A)?'"'+A.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':A)}},function(A,t){A.exports="data:font/ttf;base64,AAEAAAALAIAAAwAwT1MvMg8SBawAAAC8AAAAYGNtYXAXVtKJAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZqWfozAAAAF4AAAA/GhlYWQPxZgIAAACdAAAADZoaGVhB4ADyAAAAqwAAAAkaG10eBIAAb4AAALQAAAAHGxvY2EAkgDiAAAC7AAAABBtYXhwAAkAHwAAAvwAAAAgbmFtZZlKCfsAAAMcAAABhnBvc3QAAwAAAAAEpAAAACAAAwOAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpAgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6QL//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAFYBAQO+AoEAHAAAATIXHgEXFhcHJicuAScmIyIGBxchERc2Nz4BNzYCFkpDQ28pKRdkECAfVTM0OT9wLZz+gJgdIiJLKSgCVRcYUjg5QiAzKys+ERIrJZoBgJoZFRQcCAgAAQDWAIEDKgLVAAsAAAEHFwcnByc3JzcXNwMq7u487u487u487u4Cme7uPO7uPO7uPO7uAAEAkgCBA4ACvQAFAAAlARcBJzcBgAHEPP4A7jz5AcQ8/gDuPAAAAAABAAAAAAAAH8nTUV8PPPUACwQAAAAAANZ1KhsAAAAA1nUqGwAAAAADvgLVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAO+AAEAAAAAAAAAAAAAAAAAAAAHBAAAAAAAAAAAAAAAAgAAAAQAAFYEAADWBAAAkgAAAAAACgAUAB4AUABqAH4AAQAAAAcAHQABAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGljb21vb24AaQBjAG8AbQBvAG8AblZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGljb21vb24AaQBjAG8AbQBvAG8Abmljb21vb24AaQBjAG8AbQBvAG8AblJlZ3VsYXIAUgBlAGcAdQBsAGEAcmljb21vb24AaQBjAG8AbQBvAG8AbkZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="},function(A,t){A.exports="data:font/woff;base64,d09GRgABAAAAAAUQAAsAAAAABMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIFrGNtYXAAAAFoAAAAVAAAAFQXVtKJZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAPwAAAD8pZ+jMGhlYWQAAALAAAAANgAAADYPxZgIaGhlYQAAAvgAAAAkAAAAJAeAA8hobXR4AAADHAAAABwAAAAcEgABvmxvY2EAAAM4AAAAEAAAABAAkgDibWF4cAAAA0gAAAAgAAAAIAAJAB9uYW1lAAADaAAAAYYAAAGGmUoJ+3Bvc3QAAATwAAAAIAAAACAAAwAAAAMDgAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QIDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkC//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQBWAQEDvgKBABwAAAEyFx4BFxYXByYnLgEnJiMiBgcXIREXNjc+ATc2AhZKQ0NvKSkXZBAgH1UzNDk/cC2c/oCYHSIiSykoAlUXGFI4OUIgMysrPhESKyWaAYCaGRUUHAgIAAEA1gCBAyoC1QALAAABBxcHJwcnNyc3FzcDKu7uPO7uPO7uPO7uApnu7jzu7jzu7jzu7gABAJIAgQOAAr0ABQAAJQEXASc3AYABxDz+AO48+QHEPP4A7jwAAAAAAQAAAAAAAB/J01FfDzz1AAsEAAAAAADWdSobAAAAANZ1KhsAAAAAA74C1QAAAAgAAgAAAAAAAAABAAADwP/AAAAEAAAAAAADvgABAAAAAAAAAAAAAAAAAAAABwQAAAAAAAAAAAAAAAIAAAAEAABWBAAA1gQAAJIAAAAAAAoAFAAeAFAAagB+AAEAAAAHAB0AAQAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},function(A,t,e){"use strict";e.r(t);var n=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"vue-tags-input",class:[{"ti-disabled":A.disabled},{"ti-focus":A.focused}]},[e("div",{staticClass:"ti-input"},[A.tagsCopy?e("ul",{staticClass:"ti-tags"},[A._l(A.tagsCopy,function(t,n){return e("li",{key:n,staticClass:"ti-tag",class:[{"ti-editing":A.tagsEditStatus[n]},t.tiClasses,t.classes,{"ti-deletion-mark":A.isMarked(n)}],style:t.style,attrs:{tabindex:"0"},on:{click:function(e){return A.$emit("tag-clicked",{tag:t,index:n})}}},[e("div",{staticClass:"ti-content"},[A.$scopedSlots["tag-left"]?e("div",{staticClass:"ti-tag-left"},[A._t("tag-left",null,{tag:t,index:n,edit:A.tagsEditStatus[n],performSaveEdit:A.performSaveTag,performDelete:A.performDeleteTag,performCancelEdit:A.cancelEdit,performOpenEdit:A.performEditTag,deletionMark:A.isMarked(n)})],2):A._e(),A._v(" "),e("div",{ref:"tagCenter",refInFor:!0,staticClass:"ti-tag-center"},[A.$scopedSlots["tag-center"]?A._e():e("span",{class:{"ti-hidden":A.tagsEditStatus[n]},on:{click:function(t){return A.performEditTag(n)}}},[A._v(A._s(t.text))]),A._v(" "),A.$scopedSlots["tag-center"]?A._e():e("tag-input",{attrs:{scope:{edit:A.tagsEditStatus[n],maxlength:A.maxlength,tag:t,index:n,validateTag:A.createChangedTag,performCancelEdit:A.cancelEdit,performSaveEdit:A.performSaveTag}}}),A._v(" "),A._t("tag-center",null,{tag:t,index:n,maxlength:A.maxlength,edit:A.tagsEditStatus[n],performSaveEdit:A.performSaveTag,performDelete:A.performDeleteTag,performCancelEdit:A.cancelEdit,validateTag:A.createChangedTag,performOpenEdit:A.performEditTag,deletionMark:A.isMarked(n)})],2),A._v(" "),A.$scopedSlots["tag-right"]?e("div",{staticClass:"ti-tag-right"},[A._t("tag-right",null,{tag:t,index:n,edit:A.tagsEditStatus[n],performSaveEdit:A.performSaveTag,performDelete:A.performDeleteTag,performCancelEdit:A.cancelEdit,performOpenEdit:A.performEditTag,deletionMark:A.isMarked(n)})],2):A._e()]),A._v(" "),e("div",{staticClass:"ti-actions"},[A.$scopedSlots["tag-actions"]?A._e():e("i",{directives:[{name:"show",rawName:"v-show",value:A.tagsEditStatus[n],expression:"tagsEditStatus[index]"}],staticClass:"ti-icon-undo",on:{click:function(t){return A.cancelEdit(n)}}}),A._v(" "),A.$scopedSlots["tag-actions"]?A._e():e("i",{directives:[{name:"show",rawName:"v-show",value:!A.tagsEditStatus[n],expression:"!tagsEditStatus[index]"}],staticClass:"ti-icon-close",on:{click:function(t){return A.performDeleteTag(n)}}}),A._v(" "),A.$scopedSlots["tag-actions"]?A._t("tag-actions",null,{tag:t,index:n,edit:A.tagsEditStatus[n],performSaveEdit:A.performSaveTag,performDelete:A.performDeleteTag,performCancelEdit:A.cancelEdit,performOpenEdit:A.performEditTag,deletionMark:A.isMarked(n)}):A._e()],2)])}),A._v(" "),e("li",{staticClass:"ti-new-tag-input-wrapper"},[e("input",A._b({ref:"newTagInput",staticClass:"ti-new-tag-input",class:[A.createClasses(A.newTag,A.tags,A.validation,A.isDuplicate)],attrs:{placeholder:A.placeholder,maxlength:A.maxlength,disabled:A.disabled,type:"text",size:"1"},domProps:{value:A.newTag},on:{keydown:[function(t){return A.performAddTags(A.filteredAutocompleteItems[A.selectedItem]||A.newTag,t)},function(t){return t.type.indexOf("key")||8===t.keyCode?A.invokeDelete(t):null},function(t){return t.type.indexOf("key")||9===t.keyCode?A.performBlur(t):null},function(t){return t.type.indexOf("key")||38===t.keyCode?A.selectItem(t,"before"):null},function(t){return t.type.indexOf("key")||40===t.keyCode?A.selectItem(t,"after"):null}],paste:A.addTagsFromPaste,input:A.updateNewTag,blur:function(t){return A.$emit("blur",t)},focus:function(t){A.focused=!0,A.$emit("focus",t)},click:function(t){!A.addOnlyFromAutocomplete&&(A.selectedItem=null)}}},"input",A.$attrs,!1))])],2):A._e()]),A._v(" "),A._t("between-elements"),A._v(" "),A.autocompleteOpen?e("div",{staticClass:"ti-autocomplete",on:{mouseout:function(t){A.selectedItem=null}}},[A._t("autocomplete-header"),A._v(" "),e("ul",A._l(A.filteredAutocompleteItems,function(t,n){return e("li",{key:n,staticClass:"ti-item",class:[t.tiClasses,t.classes,{"ti-selected-item":A.isSelected(n)}],style:t.style,on:{mouseover:function(t){!A.disabled&&(A.selectedItem=n)}}},[A.$scopedSlots["autocomplete-item"]?A._t("autocomplete-item",null,{item:t,index:n,performAdd:function(t){return A.performAddTags(t,void 0,"autocomplete")},selected:A.isSelected(n)}):e("div",{on:{click:function(e){return A.performAddTags(t,void 0,"autocomplete")}}},[A._v("\n          "+A._s(t.text)+"\n        ")])],2)}),0),A._v(" "),A._t("autocomplete-footer")],2):A._e()],2)};n._withStripped=!0;var i=e(5),a=e.n(i),r=function(A){return JSON.parse(JSON.stringify(A))},o=function(A,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3?arguments[3]:void 0;void 0===A.text&&(A={text:A});var i=function(A,t){return t.filter(function(t){var e=A.text;return"string"==typeof t.rule?!new RegExp(t.rule).test(e):t.rule instanceof RegExp?!t.rule.test(e):"[object Function]"==={}.toString.call(t.rule)?t.rule(A):void 0}).map(function(A){return A.classes})}(A,e),a=function(A,t){for(var e=0;e<A.length;){if(t(A[e],e,A))return e;e++}return-1}(t,function(t){return t===A}),o=r(t),s=-1!==a?o.splice(a,1)[0]:r(A);return(n?n(o,s):-1!==o.map(function(A){return A.text}).indexOf(s.text))&&i.push("ti-duplicate"),0===i.length?i.push("ti-valid"):i.push("ti-invalid"),i},s=function(A){void 0===A.text&&(A={text:A});for(var t=r(A),e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return t.tiClasses=o.apply(void 0,[A].concat(n)),t},u=function(A){for(var t=arguments.length,e=new Array(t>1?t-1:0),n=1;n<t;n++)e[n-1]=arguments[n];return A.map(function(t){return s.apply(void 0,[t,A].concat(e))})},c=function(){var A=this,t=A.$createElement,e=A._self._c||t;return A.scope.edit?e("input",{directives:[{name:"model",rawName:"v-model",value:A.scope.tag.text,expression:"scope.tag.text"}],staticClass:"ti-tag-input",attrs:{maxlength:A.scope.maxlength,type:"text",size:"1"},domProps:{value:A.scope.tag.text},on:{input:[function(t){t.target.composing||A.$set(A.scope.tag,"text",t.target.value)},function(t){return A.scope.validateTag(A.scope.index,t)}],blur:function(t){return A.scope.performCancelEdit(A.scope.index)},keydown:function(t){return A.scope.performSaveEdit(A.scope.index,t)}}}):A._e()};c._withStripped=!0;var d={name:"TagInput",props:{scope:{type:Object}}};e(7);function l(A,t,e,n,i,a,r,o){var s,u="function"==typeof A?A.options:A;if(t&&(u.render=t,u.staticRenderFns=e,u._compiled=!0),n&&(u.functional=!0),a&&(u._scopeId="data-v-"+a),r?(s=function(A){(A=A||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(A=__VUE_SSR_CONTEXT__),i&&i.call(this,A),A&&A._registeredComponents&&A._registeredComponents.add(r)},u._ssrRegister=s):i&&(s=o?function(){i.call(this,this.$root.$options.shadowRoot)}:i),s)if(u.functional){u._injectStyles=s;var c=u.render;u.render=function(A,t){return s.call(t),c(A,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,s):[s]}return{exports:A,options:u}}var p=l(d,c,[],!1,null,"108f4f13",null);p.options.__file="vue-tags-input/tag-input.vue";var g=p.exports,f=function(A){return!A.some(function(A){var t=!A.text;t&&console.warn('Missing property "text"',A);var e=!1;return A.classes&&(e="string"!=typeof A.classes),e&&console.warn('Property "classes" must be type of string',A),t||e})},B=function(A){return!A.some(function(A){if("number"==typeof A){var t=isFinite(A)&&Math.floor(A)===A;return t||console.warn("Only numerics are allowed for this prop. Found:",A),!t}if("string"==typeof A){var e=/\W|[a-z]|!\d/i.test(A);return e||console.warn("Only alpha strings are allowed for this prop. Found:",A),!e}return console.warn("Only numeric and string values are allowed. Found:",A),!1})},v={value:{type:String,default:"",required:!0},tags:{type:Array,default:function(){return[]},validator:f},autocompleteItems:{type:Array,default:function(){return[]},validator:f},allowEditTags:{type:Boolean,default:!1},autocompleteFilterDuplicates:{default:!0,type:Boolean},addOnlyFromAutocomplete:{type:Boolean,default:!1},autocompleteMinLength:{type:Number,default:1},autocompleteAlwaysOpen:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:"Add Tag"},addOnKey:{type:Array,default:function(){return[13]},validator:B},saveOnKey:{type:Array,default:function(){return[13]},validator:B},maxTags:{type:Number},maxlength:{type:Number},validation:{type:Array,default:function(){return[]},validator:function(A){return!A.some(function(A){var t=!A.rule;t&&console.warn('Property "rule" is missing',A);var e=A.rule&&("string"==typeof A.rule||A.rule instanceof RegExp||"[object Function]"==={}.toString.call(A.rule));e||console.warn("A rule must be type of string, RegExp or function. Found:",JSON.stringify(A.rule));var n=!A.classes;n&&console.warn('Property "classes" is missing',A);var i=A.type&&"string"!=typeof A.type;return i&&console.warn('Property "type" must be type of string. Found:',A),!e||t||n||i})}},separators:{type:Array,default:function(){return[";"]},validator:function(A){return!A.some(function(A){var t="string"!=typeof A;return t&&console.warn("Separators must be type of string. Found:",A),t})}},avoidAddingDuplicates:{type:Boolean,default:!0},addOnBlur:{type:Boolean,default:!0},isDuplicate:{type:Function,default:null},addFromPaste:{type:Boolean,default:!0},deleteOnBackspace:{default:!0,type:Boolean}};function m(A){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(A){return typeof A}:function(A){return A&&"function"==typeof Symbol&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A})(A)}var h={name:"VueTagsInput",components:{TagInput:g},props:v,data:function(){return{newTag:null,tagsCopy:null,tagsEditStatus:null,deletionMark:null,deletionMarkTime:null,selectedItem:null,focused:null}},computed:{autocompleteOpen:function(){return!!this.autocompleteAlwaysOpen||null!==this.newTag&&this.newTag.length>=this.autocompleteMinLength&&this.filteredAutocompleteItems.length>0&&this.focused},filteredAutocompleteItems:function(){var A=this,t=this.autocompleteItems.map(function(t){return s(t,A.tags,A.validation,A.isDuplicate)});return this.autocompleteFilterDuplicates?t.filter(this.duplicateFilter):t}},methods:{createClasses:o,getSelectedIndex:function(A){var t=this.filteredAutocompleteItems,e=this.selectedItem,n=t.length-1;if(0!==t.length)return null===e?0:"before"===A&&0===e?n:"after"===A&&e===n?0:"after"===A?e+1:e-1},selectDefaultItem:function(){this.addOnlyFromAutocomplete&&this.filteredAutocompleteItems.length>0?this.selectedItem=0:this.selectedItem=null},selectItem:function(A,t){A.preventDefault(),this.selectedItem=this.getSelectedIndex(t)},isSelected:function(A){return this.selectedItem===A},isMarked:function(A){return this.deletionMark===A},invokeDelete:function(){var A=this;if(this.deleteOnBackspace&&!(this.newTag.length>0)){var t=this.tagsCopy.length-1;null===this.deletionMark?(this.deletionMarkTime=setTimeout(function(){return A.deletionMark=null},1e3),this.deletionMark=t):this.performDeleteTag(t)}},addTagsFromPaste:function(){var A=this;this.addFromPaste&&setTimeout(function(){return A.performAddTags(A.newTag)},10)},performEditTag:function(A){var t=this;this.allowEditTags&&(this._events["before-editing-tag"]||this.editTag(A),this.$emit("before-editing-tag",{index:A,tag:this.tagsCopy[A],editTag:function(){return t.editTag(A)}}))},editTag:function(A){this.allowEditTags&&(this.toggleEditMode(A),this.focus(A))},toggleEditMode:function(A){this.allowEditTags&&!this.disabled&&this.$set(this.tagsEditStatus,A,!this.tagsEditStatus[A])},createChangedTag:function(A,t){var e=this.tagsCopy[A];e.text=t?t.target.value:this.tagsCopy[A].text,this.$set(this.tagsCopy,A,s(e,this.tagsCopy,this.validation,this.isDuplicate))},focus:function(A){var t=this;this.$nextTick(function(){var e=t.$refs.tagCenter[A].querySelector("input.ti-tag-input");e&&e.focus()})},quote:function(A){return A.replace(/([()[{*+.$^\\|?])/g,"\\$1")},cancelEdit:function(A){this.tags[A]&&(this.tagsCopy[A]=r(s(this.tags[A],this.tags,this.validation,this.isDuplicate)),this.$set(this.tagsEditStatus,A,!1))},hasForbiddingAddRule:function(A){var t=this;return A.some(function(A){var e=t.validation.find(function(t){return A===t.classes});return!!e&&e.disableAdd})},createTagTexts:function(A){var t=this,e=new RegExp(this.separators.map(function(A){return t.quote(A)}).join("|"));return A.split(e).map(function(A){return{text:A}})},performDeleteTag:function(A){var t=this;this._events["before-deleting-tag"]||this.deleteTag(A),this.$emit("before-deleting-tag",{index:A,tag:this.tagsCopy[A],deleteTag:function(){return t.deleteTag(A)}})},deleteTag:function(A){this.disabled||(this.deletionMark=null,clearTimeout(this.deletionMarkTime),this.tagsCopy.splice(A,1),this._events["update:tags"]&&this.$emit("update:tags",this.tagsCopy),this.$emit("tags-changed",this.tagsCopy))},noTriggerKey:function(A,t){var e=-1!==this[t].indexOf(A.keyCode)||-1!==this[t].indexOf(A.key);return e&&A.preventDefault(),!e},performAddTags:function(A,t,e){var n=this;if(!(this.disabled||t&&this.noTriggerKey(t,"addOnKey"))){var i=[];"object"===m(A)&&(i=[A]),"string"==typeof A&&(i=this.createTagTexts(A)),(i=i.filter(function(A){return A.text.trim().length>0})).forEach(function(A){A=s(A,n.tags,n.validation,n.isDuplicate),n._events["before-adding-tag"]||n.addTag(A,e),n.$emit("before-adding-tag",{tag:A,addTag:function(){return n.addTag(A,e)}})})}},duplicateFilter:function(A){return this.isDuplicate?!this.isDuplicate(this.tagsCopy,A):!this.tagsCopy.find(function(t){return t.text===A.text})},addTag:function(A){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"new-tag-input",n=this.filteredAutocompleteItems.map(function(A){return A.text});this.addOnlyFromAutocomplete&&-1===n.indexOf(A.text)||this.$nextTick(function(){return t.maxTags&&t.maxTags<=t.tagsCopy.length?t.$emit("max-tags-reached",A):t.avoidAddingDuplicates&&!t.duplicateFilter(A)?t.$emit("adding-duplicate",A):void(t.hasForbiddingAddRule(A.tiClasses)||(t.$emit("input",""),t.tagsCopy.push(A),t._events["update:tags"]&&t.$emit("update:tags",t.tagsCopy),"autocomplete"===e&&t.$refs.newTagInput.focus(),t.$emit("tags-changed",t.tagsCopy)))})},performSaveTag:function(A,t){var e=this,n=this.tagsCopy[A];this.disabled||t&&this.noTriggerKey(t,"addOnKey")||0!==n.text.trim().length&&(this._events["before-saving-tag"]||this.saveTag(A,n),this.$emit("before-saving-tag",{index:A,tag:n,saveTag:function(){return e.saveTag(A,n)}}))},saveTag:function(A,t){if(this.avoidAddingDuplicates){var e=r(this.tagsCopy),n=e.splice(A,1)[0];if(this.isDuplicate?this.isDuplicate(e,n):-1!==e.map(function(A){return A.text}).indexOf(n.text))return this.$emit("saving-duplicate",t)}this.hasForbiddingAddRule(t.tiClasses)||(this.$set(this.tagsCopy,A,t),this.toggleEditMode(A),this._events["update:tags"]&&this.$emit("update:tags",this.tagsCopy),this.$emit("tags-changed",this.tagsCopy))},tagsEqual:function(){var A=this;return!this.tagsCopy.some(function(t,e){return!a()(t,A.tags[e])})},updateNewTag:function(A){var t=A.target.value;this.newTag=t,this.$emit("input",t)},initTags:function(){this.tagsCopy=u(this.tags,this.validation,this.isDuplicate),this.tagsEditStatus=r(this.tags).map(function(){return!1}),this._events["update:tags"]&&!this.tagsEqual()&&this.$emit("update:tags",this.tagsCopy)},blurredOnClick:function(A){this.$el.contains(A.target)||this.$el.contains(document.activeElement)||this.performBlur(A)},performBlur:function(){this.addOnBlur&&this.focused&&this.performAddTags(this.newTag),this.focused=!1}},watch:{value:function(A){this.addOnlyFromAutocomplete||(this.selectedItem=null),this.newTag=A},tags:{handler:function(){this.initTags()},deep:!0},autocompleteOpen:"selectDefaultItem"},created:function(){this.newTag=this.value,this.initTags()},mounted:function(){this.selectDefaultItem(),document.addEventListener("click",this.blurredOnClick)},destroyed:function(){document.removeEventListener("click",this.blurredOnClick)}},C=(e(9),l(h,n,[],!1,null,"61d92e31",null));C.options.__file="vue-tags-input/vue-tags-input.vue";var E=C.exports;e.d(t,"VueTagsInput",function(){return E}),e.d(t,"createClasses",function(){return o}),e.d(t,"createTag",function(){return s}),e.d(t,"createTags",function(){return u}),e.d(t,"TagInput",function(){return g}),E.install=function(A){return A.component(E.name,E)},"undefined"!=typeof window&&window.Vue&&window.Vue.use(E);t.default=E}])});
//# sourceMappingURL=vue-tags-input.js.map

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");
var transitionalDefaults = __webpack_require__(/*! ../defaults/transitional */ "./node_modules/axios/lib/defaults/transitional.js");
var Cancel = __webpack_require__(/*! ../cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      var transitional = config.transitional || transitionalDefaults;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(
        timeoutErrorMessage,
        config,
        transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function(cancel) {
        if (!request) {
          return;
        }
        reject(!cancel || (cancel && cancel.type) ? new Cancel('canceled') : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults/index.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
axios.VERSION = (__webpack_require__(/*! ./env/data */ "./node_modules/axios/lib/env/data.js").version);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ "./node_modules/axios/lib/helpers/isAxiosError.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports["default"] = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;

  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;

  // eslint-disable-next-line func-names
  this.promise.then(function(cancel) {
    if (!token._listeners) return;

    var i;
    var l = token._listeners.length;

    for (i = 0; i < l; i++) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });

  // eslint-disable-next-line func-names
  this.promise.then = function(onfulfilled) {
    var _resolve;
    // eslint-disable-next-line func-names
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);

    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };

    return promise;
  };

  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Subscribe to the cancel signal
 */

CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }

  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};

/**
 * Unsubscribe from the cancel signal
 */

CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var validator = __webpack_require__(/*! ../helpers/validator */ "./node_modules/axios/lib/helpers/validator.js");

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(configOrUrl, config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof configOrUrl === 'string') {
    config = config || {};
    config.url = configOrUrl;
  } else {
    config = configOrUrl || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults/index.js");
var Cancel = __webpack_require__(/*! ../cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new Cancel('canceled');
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  var mergeMap = {
    'url': valueFromConfig2,
    'method': valueFromConfig2,
    'data': valueFromConfig2,
    'baseURL': defaultToConfig2,
    'transformRequest': defaultToConfig2,
    'transformResponse': defaultToConfig2,
    'paramsSerializer': defaultToConfig2,
    'timeout': defaultToConfig2,
    'timeoutMessage': defaultToConfig2,
    'withCredentials': defaultToConfig2,
    'adapter': defaultToConfig2,
    'responseType': defaultToConfig2,
    'xsrfCookieName': defaultToConfig2,
    'xsrfHeaderName': defaultToConfig2,
    'onUploadProgress': defaultToConfig2,
    'onDownloadProgress': defaultToConfig2,
    'decompress': defaultToConfig2,
    'maxContentLength': defaultToConfig2,
    'maxBodyLength': defaultToConfig2,
    'transport': defaultToConfig2,
    'httpAgent': defaultToConfig2,
    'httpsAgent': defaultToConfig2,
    'cancelToken': defaultToConfig2,
    'socketPath': defaultToConfig2,
    'responseEncoding': defaultToConfig2,
    'validateStatus': mergeDirectKeys
  };

  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults/index.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults/index.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/defaults/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ../helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");
var enhanceError = __webpack_require__(/*! ../core/enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");
var transitionalDefaults = __webpack_require__(/*! ./transitional */ "./node_modules/axios/lib/defaults/transitional.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ../adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ../adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: transitionalDefaults,

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw enhanceError(e, this, 'E_JSON_PARSE');
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),

/***/ "./node_modules/axios/lib/defaults/transitional.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/defaults/transitional.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};


/***/ }),

/***/ "./node_modules/axios/lib/env/data.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/env/data.js ***!
  \********************************************/
/***/ ((module) => {

module.exports = {
  "version": "0.26.1"
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return utils.isObject(payload) && (payload.isAxiosError === true);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/validator.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/validator.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var VERSION = (__webpack_require__(/*! ../env/data */ "./node_modules/axios/lib/env/data.js").version);

var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};

/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')));
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new TypeError('options must be an object');
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError('option ' + opt + ' must be ' + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error('Unknown option ' + opt);
    }
  }
}

module.exports = {
  assertOptions: assertOptions,
  validators: validators
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return Array.isArray(val);
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return toString.call(val) === '[object FormData]';
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return toString.call(val) === '[object URLSearchParams]';
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/AccountSelect.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/AccountSelect.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    inputName: String,
    inputDescription: String,
    index: Number,
    transactionType: String,
    error: Array,
    accountName: {
      type: String,
      "default": ''
    },
    accountTypeFilters: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    defaultAccountTypeFilters: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      accountAutoCompleteURI: null,
      name: null,
      trType: this.transactionType,
      target: null,
      inputDisabled: false,
      allowedTypes: this.accountTypeFilters,
      defaultAllowedTypes: this.defaultAccountTypeFilters
    };
  },
  ready: function ready() {
    // console.log('ready(): this.name = this.accountName (' + this.accountName + ')');
    this.name = this.accountName;
  },
  mounted: function mounted() {
    this.target = this.$refs.input;
    this.updateACURI(this.allowedTypes.join(','));
    // console.log('mounted(): this.name = this.accountName (' + this.accountName + ')');
    this.name = this.accountName;
    this.triggerTransactionType();
  },
  watch: {
    transactionType: function transactionType() {
      this.triggerTransactionType();
    },
    accountName: function accountName() {
      // console.log('AccountSelect watch accountName!');
      this.name = this.accountName;
    },
    accountTypeFilters: function accountTypeFilters() {
      var types = this.accountTypeFilters.join(',');
      if (0 === this.accountTypeFilters.length) {
        types = this.defaultAccountTypeFilters.join(',');
      }
      this.updateACURI(types);
    }
  },
  methods: {
    aSyncFunction: function aSyncFunction(query, done) {
      axios.get(this.accountAutoCompleteURI + query).then(function (res) {
        done(res.data);
      })["catch"](function (err) {
        // any error handler
      });
    },
    betterHighlight: function betterHighlight(item) {
      var inputValue = this.$refs.input.value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
      var escapedName = this.escapeHtml(item.name_with_balance);
      return escapedName.replace(new RegExp("" + inputValue, 'i'), '<b>$&</b>');
    },
    escapeHtml: function escapeHtml(string) {
      var entityMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;',
        '`': '&#x60;',
        '=': '&#x3D;'
      };
      return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap(s) {
        return entityMap[s];
      });
    },
    updateACURI: function updateACURI(types) {
      this.accountAutoCompleteURI = document.getElementsByTagName('base')[0].href + 'api/v1/autocomplete/accounts' + '?types=' + types + '&query=';
      // console.log('Auto complete URI is now ' + this.accountAutoCompleteURI);
    },
    hasError: function hasError() {
      return this.error.length > 0;
    },
    triggerTransactionType: function triggerTransactionType() {
      // console.log('On triggerTransactionType(' + this.inputName + ')');
      if (null === this.name) {
        // console.log('this.name is NULL.');
      }
      if (null === this.transactionType) {
        // console.log('Transaction type is NULL.');
        return;
      }
      if ('' === this.transactionType) {
        // console.log('Transaction type is "".');
        return;
      }
      this.inputDisabled = false;
      if (this.transactionType.toString() !== '' && this.index > 0) {
        if (this.transactionType.toString().toLowerCase() === 'transfer') {
          this.inputDisabled = true;
          // TODO needs to copy value from very first input.

          return;
        }
        if (this.transactionType.toString().toLowerCase() === 'withdrawal' && this.inputName.substr(0, 6).toLowerCase() === 'source') {
          // TODO also clear value?
          this.inputDisabled = true;
          return;
        }
        if (this.transactionType.toString().toLowerCase() === 'deposit' && this.inputName.substr(0, 11).toLowerCase() === 'destination') {
          // TODO also clear value?
          this.inputDisabled = true;
        }
      }
    },
    selectedItem: function selectedItem(e) {
      // console.log('In SelectedItem()');
      if (typeof this.name === 'undefined') {
        // console.log('Is undefined');
        return;
      }
      if (typeof this.name === 'string') {
        // console.log('Is a string.');
        //this.trType = null;
        this.$emit('clear:value');
      }
      // emit the fact that the user selected a type of account
      // (influencing the destination)
      // console.log('Is some object maybe:');
      // console.log(this.name);
      this.$emit('select:account', this.name);
    },
    clearSource: function clearSource(e) {
      // console.log('clearSource()');
      //props.value = '';
      this.name = '';
      // some event?
      this.$emit('clear:value');
    },
    handleEnter: function handleEnter(e) {
      // TODO feels sloppy. Can be removed.
      if (e.keyCode === 13) {
        //e.preventDefault();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/Amount.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/Amount.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Amount",
  props: ['source', 'destination', 'transactionType', 'value', 'error'],
  data: function data() {
    return {
      sourceAccount: this.source,
      destinationAccount: this.destination,
      type: this.transactionType
    };
  },
  methods: {
    handleInput: function handleInput(e) {
      this.$emit('input', this.$refs.amount.value);
    },
    clearAmount: function clearAmount() {
      this.$refs.amount.value = '';
      this.$emit('input', this.$refs.amount.value);
      // some event?
      this.$emit('clear:amount');
    },
    hasError: function hasError() {
      return this.error.length > 0;
    },
    changeData: function changeData() {
      //console.log('Triggered amount changeData()');
      var transactionType = this.transactionType;
      // reset of all are empty:
      if (!transactionType && !this.source.name && !this.destination.name) {
        $(this.$refs.cur).text('');
        return;
      }
      if (null === transactionType) {
        transactionType = '';
      }
      if ('' === transactionType && '' !== this.source.currency_name) {
        $(this.$refs.cur).text(this.source.currency_name);
        return;
      }
      if ('' === transactionType && '' !== this.destination.currency_name) {
        $(this.$refs.cur).text(this.destination.currency_name);
        return;
      }
      // for normal transactions, the source leads the currency
      if (transactionType.toLowerCase() === 'withdrawal' || transactionType.toLowerCase() === 'reconciliation' || transactionType.toLowerCase() === 'transfer') {
        $(this.$refs.cur).text(this.source.currency_name);
        return;
      }
      // for deposits, the destination leads the currency
      // but source must not be a liability
      if (transactionType.toLowerCase() === 'deposit' && !('debt' === this.source.type.toLowerCase() || 'loan' === this.source.type.toLowerCase() || 'mortgage' === this.source.type.toLowerCase())) {
        $(this.$refs.cur).text(this.destination.currency_name);
      }
      // for deposits, the destination leads the currency
      // unless source is liability, then source leads:
      if (transactionType.toLowerCase() === 'deposit' && ('debt' === this.source.type.toLowerCase() || 'loan' === this.source.type.toLowerCase() || 'mortgage' === this.source.type.toLowerCase())) {
        $(this.$refs.cur).text(this.source.currency_name);
      }
    }
  },
  watch: {
    source: function source() {
      // console.log('amount: watch source triggered');
      this.changeData();
    },
    value: function value() {
      // console.log('amount: value changed');
    },
    destination: function destination() {
      // console.log('amount: watch destination triggered');
      this.changeData();
    },
    transactionType: function transactionType() {
      // console.log('amount: watch transaction type triggered');
      this.changeData();
    }
  },
  mounted: function mounted() {
    // console.log('amount: mounted');
    this.changeData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/Bill.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/Bill.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Bill",
  props: {
    transactionType: String,
    value: {
      type: [String, Number],
      "default": 0
    },
    error: Array,
    no_bill: String
  },
  mounted: function mounted() {
    // console.log('bill: mounted');
    this.loadBills();
  },
  data: function data() {
    var _this$value;
    return {
      selected: (_this$value = this.value) !== null && _this$value !== void 0 ? _this$value : 0,
      bills: []
    };
  },
  watch: {
    value: function value() {
      // console.log('bill: value changed to ' + this.value);
      this.selected = this.value;
    }
  },
  methods: {
    // Fixes edit change bill not updating on every browser
    signalChange: function signalChange(e) {
      this.$emit('input', this.$refs.bill.value);
    },
    handleInput: function handleInput(e) {
      this.$emit('input', this.$refs.bill.value);
    },
    hasError: function hasError() {
      return this.error.length > 0;
    },
    loadBills: function loadBills() {
      var _this = this;
      var URI = document.getElementsByTagName('base')[0].href + 'api/v1/autocomplete/bills?limit=1337';
      axios.get(URI, {}).then(function (res) {
        _this.bills = [{
          name: _this.no_bill,
          id: 0
        }];
        for (var key in res.data) {
          if (res.data.hasOwnProperty(key) && /^0$|^[1-9]\d*$/.test(key) && key <= 4294967294) {
            var current = res.data[key];
            if (current.active) {
              _this.bills.push(res.data[key]);
            }
          }
        }
        _this.bills.sort(function (a, b) {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/Budget.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/Budget.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Budget",
  props: {
    transactionType: String,
    value: {
      type: [String, Number],
      "default": 0
    },
    error: Array,
    no_budget: String
  },
  mounted: function mounted() {
    this.loadBudgets();
  },
  data: function data() {
    var _this$value;
    return {
      selected: (_this$value = this.value) !== null && _this$value !== void 0 ? _this$value : 0,
      budgets: []
    };
  },
  watch: {
    value: function value() {
      // console.log('budget: value changed to ' + this.value);
      this.selected = this.value;
    }
  },
  methods: {
    // Fixes edit change budget not updating on every browser
    signalChange: function signalChange(e) {
      this.$emit('input', this.$refs.budget.value);
    },
    handleInput: function handleInput(e) {
      this.$emit('input', this.$refs.budget.value);
    },
    hasError: function hasError() {
      return this.error.length > 0;
    },
    loadBudgets: function loadBudgets() {
      var _this = this;
      var URI = document.getElementsByTagName('base')[0].href + 'api/v1/autocomplete/budgets?limit=1337';
      axios.get(URI, {}).then(function (res) {
        _this.budgets = [{
          name: _this.no_budget,
          id: 0
        }];
        for (var key in res.data) {
          if (res.data.hasOwnProperty(key) && /^0$|^[1-9]\d*$/.test(key) && key <= 4294967294) {
            _this.budgets.push(res.data[key]);
          }
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/Category.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/Category.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Category",
  props: {
    value: String,
    inputName: String,
    error: Array,
    accountName: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      categoryAutoCompleteURI: null,
      name: null,
      target: null,
      acKey: null
    };
  },
  ready: function ready() {
    this.name = this.accountName;
    this.acKey = 'name';
  },
  mounted: function mounted() {
    this.target = this.$refs.input;
    this.categoryAutoCompleteURI = document.getElementsByTagName('base')[0].href + "api/v1/autocomplete/categories?query=";
  },
  methods: {
    hasError: function hasError() {
      return this.error.length > 0;
    },
    betterHighlight: function betterHighlight(item) {
      var inputValue = this.$refs.input.value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
      var escapedName = this.escapeHtml(item.name);
      return escapedName.replace(new RegExp("" + inputValue, 'i'), '<b>$&</b>');
    },
    aSyncFunction: function aSyncFunction(query, done) {
      axios.get(this.categoryAutoCompleteURI + query).then(function (res) {
        done(res.data);
      })["catch"](function (err) {
        // any error handler
      });
    },
    escapeHtml: function escapeHtml(string) {
      var entityMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;',
        '`': '&#x60;',
        '=': '&#x3D;'
      };
      return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap(s) {
        return entityMap[s];
      });
    },
    handleInput: function handleInput(e) {
      if (typeof this.$refs.input.value === 'string') {
        this.$emit('input', this.$refs.input.value);
        return;
      }
      this.$emit('input', this.$refs.input.value.name);
    },
    clearCategory: function clearCategory() {
      //props.value = '';
      this.name = '';
      this.$refs.input.value = '';
      this.$emit('input', this.$refs.input.value);
      // some event?
      this.$emit('clear:category');
    },
    selectedItem: function selectedItem(e) {
      if (typeof this.name === 'undefined') {
        return;
      }
      // emit the fact that the user selected a type of account
      // (influencing the destination)
      this.$emit('select:category', this.name);
      if (typeof this.name === 'string') {
        this.$emit('input', this.name);
        return;
      }
      this.$emit('input', this.name.name);
    },
    handleEnter: function handleEnter(e) {
      // TODO feels sloppy
      if (e.keyCode === 13) {
        //e.preventDefault();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/CustomAttachments.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/CustomAttachments.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CustomAttachments",
  props: {
    title: String,
    name: String,
    error: Array
  },
  mounted: function mounted() {
    // window.addEventListener('paste', e => {
    //   this.$refs.input.files = e.clipboardData.files;
    // });
  },
  methods: {
    clearAtt: function clearAtt() {
      this.$refs.input.value = '';
    },
    hasError: function hasError() {
      return this.error.length > 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/CustomDate.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/CustomDate.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CustomDate",
  props: {
    value: String,
    title: String,
    name: String,
    error: Array
  },
  methods: {
    handleInput: function handleInput(e) {
      this.$emit('input', this.$refs.date.value);
    },
    hasError: function hasError() {
      return this.error.length > 0;
    },
    clearDate: function clearDate() {
      //props.value = '';
      this.name = '';
      this.$refs.date.value = '';
      this.$emit('input', this.$refs.date.value);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/CustomString.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/CustomString.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CustomString",
  props: {
    title: String,
    name: String,
    value: String,
    error: Array
  },
  methods: {
    handleInput: function handleInput(e) {
      this.$emit('input', this.$refs.str.value);
    },
    clearField: function clearField() {
      //props.value = '';
      this.name = '';
      this.$refs.str.value = '';
      this.$emit('input', this.$refs.str.value);
    },
    hasError: function hasError() {
      return this.error.length > 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/CustomTextarea.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/CustomTextarea.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CustomTextarea",
  props: {
    title: String,
    name: String,
    value: String,
    error: Array
  },
  data: function data() {
    return {
      textValue: this.value
    };
  },
  methods: {
    handleInput: function handleInput(e) {
      this.$emit('input', this.$refs.str.value);
    },
    hasError: function hasError() {
      return this.error.length > 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/CustomTransactionFields.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/CustomTransactionFields.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CustomTransactionFields",
  props: ['value', 'error'],
  mounted: function mounted() {
    this.getPreference();
  },
  data: function data() {
    return {
      customInterestDate: null,
      fields: [{
        "interest_date": false,
        "book_date": false,
        "process_date": false,
        "due_date": false,
        "payment_date": false,
        "invoice_date": false,
        "internal_reference": false,
        "notes": false,
        "attachments": false,
        "external_url": false
      }]
    };
  },
  computed: {
    // TODO this seems to be a pretty weird way of doing it.
    dateComponent: function dateComponent() {
      return 'custom-date';
    },
    stringComponent: function stringComponent() {
      return 'custom-string';
    },
    attachmentComponent: function attachmentComponent() {
      return 'custom-attachments';
    },
    textareaComponent: function textareaComponent() {
      return 'custom-textarea';
    },
    uriComponent: function uriComponent() {
      return 'custom-uri';
    }
  },
  methods: {
    handleInput: function handleInput(e) {
      this.$emit('input', this.value);
    },
    getPreference: function getPreference() {
      var _this = this;
      // Vue.component('custom-date', (resolve) => {
      //      console.log('loaded');
      //  });

      var url = document.getElementsByTagName('base')[0].href + 'api/v1/preferences/transaction_journal_optional_fields';
      axios.get(url).then(function (response) {
        _this.fields = response.data.data.attributes.data;
      })["catch"](function () {
        return console.warn('Oh. Something went wrong loading custom transaction fields.');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/CustomUri.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/CustomUri.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CustomString",
  props: {
    title: String,
    name: String,
    value: String,
    error: Array
  },
  methods: {
    handleInput: function handleInput(e) {
      this.$emit('input', this.$refs.uri.value);
    },
    clearField: function clearField() {
      this.name = '';
      this.$refs.uri.value = '';
      this.$emit('input', this.$refs.uri.value);
    },
    hasError: function hasError() {
      return this.error.length > 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/EditTransaction.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/EditTransaction.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "EditTransaction",
  props: {
    groupId: Number
  },
  mounted: function mounted() {
    // console.log('EditTransaction: mounted()');
    this.getGroup();
  },
  ready: function ready() {
    // console.log('EditTransaction: ready()');
  },
  methods: {
    positiveAmount: function positiveAmount(amount) {
      if (amount < 0) {
        return amount * -1;
      }
      return amount;
    },
    roundNumber: function roundNumber(amount, decimals) {
      var multiplier = Math.pow(10, decimals);
      return Math.round(amount * multiplier) / multiplier;
    },
    selectedSourceAccount: function selectedSourceAccount(index, model) {
      if (typeof model === 'string') {
        // cant change types, only name.
        // also clear ID
        this.transactions[index].source_account.id = null;
        this.transactions[index].source_account.name = model;
        return;
      }
      this.transactions[index].source_account = {
        id: model.id,
        name: model.name,
        type: model.type,
        currency_id: model.currency_id,
        currency_name: model.currency_name,
        currency_code: model.currency_code,
        currency_decimal_places: model.currency_decimal_places,
        allowed_types: this.transactions[index].source_account.allowed_types
      };
    },
    selectedDestinationAccount: function selectedDestinationAccount(index, model) {
      if (typeof model === 'string') {
        // cant change types, only name.
        // also clear ID
        this.transactions[index].destination_account.id = null;
        this.transactions[index].destination_account.name = model;
        return;
      }
      this.transactions[index].destination_account = {
        id: model.id,
        name: model.name,
        type: model.type,
        currency_id: model.currency_id,
        currency_name: model.currency_name,
        currency_code: model.currency_code,
        currency_decimal_places: model.currency_decimal_places,
        allowed_types: this.transactions[index].destination_account.allowed_types
      };
    },
    clearSource: function clearSource(index) {
      // reset source account:
      this.transactions[index].source_account = {
        id: 0,
        name: '',
        type: '',
        currency_id: 0,
        currency_name: '',
        currency_code: '',
        currency_decimal_places: 2,
        allowed_types: this.transactions[index].source_account.allowed_types
      };
      // if there is a destination model, reset the types of the source
      // by pretending we selected it again.
      if (this.transactions[index].destination_account) {
        this.selectedDestinationAccount(index, this.transactions[index].destination_account);
      }
    },
    setTransactionType: function setTransactionType(type) {
      if (null !== type) {
        this.transactionType = type;
      }
    },
    deleteTransaction: function deleteTransaction(index, event) {
      event.preventDefault();
      this.transactions.splice(index, 1);
    },
    clearDestination: function clearDestination(index) {
      // console.log('clearDestination(' + index + ')');
      // reset destination account:
      // console.log('Destination allowed types first:');
      // console.log(this.transactions[index].destination_account.allowed_types);
      this.transactions[index].destination_account = {
        id: 0,
        name: '',
        type: '',
        currency_id: 0,
        currency_name: '',
        currency_code: '',
        currency_decimal_places: 2,
        allowed_types: this.transactions[index].destination_account.allowed_types
      };
      // reset destination allowed account types.
      //this.transactions[index].source_account.allowed_types = [];

      // if there is a source model, reset the types of the destination
      // by pretending we selected it again.
      if (this.transactions[index].source_account) {
        this.selectedSourceAccount(index, this.transactions[index].source_account);
      }

      // console.log('Destination allowed types after:');
      // console.log(this.transactions[index].destination_account.allowed_types);
    },
    getGroup: function getGroup() {
      var _this = this;
      // console.log('EditTransaction: getGroup()');
      var page = window.location.href.split('/');
      var groupId = parseInt(page[page.length - 1]);
      var uri = './api/v1/transactions/' + groupId;
      // console.log(uri);

      // fill in transactions array.
      axios.get(uri).then(function (response) {
        _this.processIncomingGroup(response.data.data);
      })["catch"](function (error) {
        console.error('Some error when getting axios');
        console.error(error);
      });
    },
    processIncomingGroup: function processIncomingGroup(data) {
      // console.log('EditTransaction: processIncomingGroup()');
      this.group_title = data.attributes.group_title;
      var transactions = data.attributes.transactions.reverse();
      for (var key in transactions) {
        if (transactions.hasOwnProperty(key) && /^0$|^[1-9]\d*$/.test(key) && key <= 4294967294) {
          var transaction = transactions[key];
          this.processIncomingGroupRow(transaction);
        }
      }
    },
    ucFirst: function ucFirst(string) {
      if (typeof string === 'string') {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      return null;
    },
    processIncomingGroupRow: function processIncomingGroupRow(transaction) {
      //console.log('EditTransaction: processIncomingGroupRow()');
      this.setTransactionType(transaction.type);
      if (true === transaction.reconciled) {
        this.isReconciled = true;
      }
      var newTags = [];
      for (var key in transaction.tags) {
        if (transaction.tags.hasOwnProperty(key) && /^0$|^[1-9]\d*$/.test(key) && key <= 4294967294) {
          newTags.push({
            text: transaction.tags[key],
            tiClasses: []
          });
        }
      }
      // console.log('source allowed types for a ' + transaction.type);
      //console.log(window.expectedSourceTypes.source[transaction.type]);
      // console.log(window.expectedSourceTypes.source[this.ucFirst(transaction.type)]);
      // console.log('destination allowed types for a ' + transaction.type);
      // console.log(window.expectedSourceTypes.destination[this.ucFirst(transaction.type)]);
      if (typeof window.expectedSourceTypes === 'undefined') {
        console.error('window.expectedSourceTypes is unexpectedly empty.');
      }
      var result = {
        transaction_journal_id: transaction.transaction_journal_id,
        description: transaction.description,
        date: transaction.date.substring(0, 16),
        amount: this.roundNumber(this.positiveAmount(transaction.amount), transaction.currency_decimal_places),
        category: transaction.category_name,
        errors: {
          source_account: [],
          destination_account: [],
          description: [],
          amount: [],
          date: [],
          budget_id: [],
          bill_id: [],
          foreign_amount: [],
          category: [],
          piggy_bank: [],
          tags: [],
          // custom fields:
          custom_errors: {
            interest_date: [],
            book_date: [],
            process_date: [],
            due_date: [],
            payment_date: [],
            invoice_date: [],
            internal_reference: [],
            notes: [],
            attachments: [],
            external_url: []
          }
        },
        budget: transaction.budget_id,
        bill: transaction.bill_id,
        tags: newTags,
        custom_fields: {
          interest_date: transaction.interest_date,
          book_date: transaction.book_date,
          process_date: transaction.process_date,
          due_date: transaction.due_date,
          payment_date: transaction.payment_date,
          invoice_date: transaction.invoice_date,
          internal_reference: transaction.internal_reference,
          notes: transaction.notes,
          external_url: transaction.external_url
        },
        foreign_amount: {
          amount: this.roundNumber(this.positiveAmount(transaction.foreign_amount), transaction.foreign_currency_decimal_places),
          currency_id: transaction.foreign_currency_id
        },
        source_account: {
          id: transaction.source_id,
          name: transaction.source_name,
          type: transaction.source_type,
          currency_id: transaction.currency_id,
          currency_name: transaction.currency_name,
          currency_code: transaction.currency_code,
          currency_decimal_places: transaction.currency_decimal_places,
          allowed_types: window.expectedSourceTypes.source[this.ucFirst(transaction.type)]
        },
        destination_account: {
          id: transaction.destination_id,
          name: transaction.destination_name,
          type: transaction.destination_type,
          currency_id: transaction.currency_id,
          currency_name: transaction.currency_name,
          currency_code: transaction.currency_code,
          currency_decimal_places: transaction.currency_decimal_places,
          allowed_types: window.expectedSourceTypes.destination[this.ucFirst(transaction.type)]
        }
      };
      if (null === transaction.foreign_amount) {
        result.foreign_amount.amount = '';
      }
      this.transactions.push(result);
    },
    limitSourceType: function limitSourceType(type) {
      // let i;
      // for (i = 0; i < this.transactions.length; i++) {
      //     this.transactions[i].source_account.allowed_types = [type];
      // }
    },
    limitDestinationType: function limitDestinationType(type) {
      // let i;
      // for (i = 0; i < this.transactions.length; i++) {
      //     this.transactions[i].destination_account.allowed_types = [type];
      // }
    },
    convertData: function convertData() {
      var data = {
        'apply_rules': this.applyRules,
        'fire_webhooks': this.fireWebhooks,
        'transactions': []
      };
      var transactionType;
      var firstSource;
      var firstDestination;
      if (this.transactions.length > 1) {
        data.group_title = this.group_title;
      }

      // get transaction type from first transaction
      transactionType = this.transactionType ? this.transactionType.toLowerCase() : 'invalid';

      // if the transaction type is invalid, might just be that we can deduce it from
      // the presence of a source or destination account
      firstSource = this.transactions[0].source_account.type;
      firstDestination = this.transactions[0].destination_account.type;
      if ('invalid' === transactionType && ['Asset account', 'Loan', 'Debt', 'Mortgage'].includes(firstSource)) {
        //console.log('Assumed this is a withdrawal.');
        transactionType = 'withdrawal';
      }
      if ('invalid' === transactionType && ['Asset account', 'Loan', 'Debt', 'Mortgage'].includes(firstDestination)) {
        //console.log('Assumed this is a deposit.');
        transactionType = 'deposit';
      }

      // get currency from first transaction. overrule the rest
      var currencyId = this.transactions[0].source_account.currency_id;
      if ('deposit' === transactionType) {
        currencyId = this.transactions[0].destination_account.currency_id;
      }
      console.log('Overruled currency ID to ' + currencyId);
      for (var key in this.transactions) {
        if (this.transactions.hasOwnProperty(key) && /^0$|^[1-9]\d*$/.test(key) && key <= 4294967294) {
          data.transactions.push(this.convertDataRow(this.transactions[key], key, transactionType, currencyId));
        }
      }
      //console.log(data);

      return data;
    },
    convertDataRow: function convertDataRow(row, index, transactionType, currencyId) {
      var tagList = [];
      var foreignAmount = null;
      var foreignCurrency = null;
      var currentArray;
      var sourceId;
      var sourceName;
      var destId;
      var destName;
      var date;
      sourceId = row.source_account.id;
      sourceName = row.source_account.name;
      destId = row.destination_account.id;
      destName = row.destination_account.name;

      // depends on the transaction type, where we get the currency.
      // if ('withdrawal' === transactionType || 'transfer' === transactionType) {
      //   row.currency_id = row.source_account.currency_id;
      //   console.log('Overruled currency ID to ' + row.currency_id);
      // }
      // if ('deposit' === transactionType) {
      //   row.currency_id = row.destination_account.currency_id;
      //   console.log('Overruled currency ID to ' + row.currency_id);
      // }

      row.currency_id = currencyId;
      console.log('Final currency ID = ' + currencyId);
      date = row.date;
      if (index > 0) {
        date = this.transactions[0].date;
      }

      // if type is 'withdrawal' and destination is empty, cash withdrawal.
      if (transactionType === 'withdrawal' && '' === destName) {
        destId = window.cashAccountId;
      }

      // if type is 'deposit' and source is empty, cash deposit.
      if (transactionType === 'deposit' && '' === sourceName) {
        sourceId = window.cashAccountId;
      }

      // if index is over 0 and type is withdrawal or transfer, take source from index 0.
      if (index > 0 && (transactionType.toLowerCase() === 'withdrawal' || transactionType.toLowerCase() === 'transfer')) {
        sourceId = this.transactions[0].source_account.id;
        sourceName = this.transactions[0].source_account.name;
      }

      // if index is over 0 and type is deposit or transfer, take destination from index 0.
      if (index > 0 && (transactionType.toLowerCase() === 'deposit' || transactionType.toLowerCase() === 'transfer')) {
        destId = this.transactions[0].destination_account.id;
        destName = this.transactions[0].destination_account.name;
      }
      tagList = [];
      foreignAmount = '0';
      // loop tags
      for (var tagKey in row.tags) {
        if (row.tags.hasOwnProperty(tagKey) && /^0$|^[1-9]\d*$/.test(tagKey) && tagKey <= 4294967294) {
          tagList.push(row.tags[tagKey].text);
        }
      }
      // set foreign currency info:
      if (typeof row.foreign_amount.amount !== 'undefined' && row.foreign_amount.amount.toString() !== '' && parseFloat(row.foreign_amount.amount) !== .00) {
        foreignAmount = row.foreign_amount.amount;
        foreignCurrency = row.foreign_amount.currency_id;
      }
      if (foreignCurrency === row.currency_id) {
        foreignAmount = null;
        foreignCurrency = null;
      }

      // correct some id's
      if (0 === destId) {
        destId = null;
      }
      if (0 === sourceId) {
        sourceId = null;
      }

      // parse amount, if amount has exactly one comma:
      // solves issues with some locales.
      if (1 === (String(row.amount).match(/\,/g) || []).length) {
        row.amount = String(row.amount).replace(',', '.');
      }
      currentArray = {
        transaction_journal_id: row.transaction_journal_id,
        type: transactionType,
        date: date,
        amount: row.amount,
        description: row.description,
        source_id: sourceId,
        source_name: sourceName,
        destination_id: destId,
        destination_name: destName,
        category_name: row.category,
        interest_date: row.custom_fields.interest_date,
        book_date: row.custom_fields.book_date,
        process_date: row.custom_fields.process_date,
        due_date: row.custom_fields.due_date,
        payment_date: row.custom_fields.payment_date,
        invoice_date: row.custom_fields.invoice_date,
        internal_reference: row.custom_fields.internal_reference,
        external_url: row.custom_fields.external_url,
        notes: row.custom_fields.notes,
        tags: tagList
      };
      // always submit foreign amount info.
      currentArray.foreign_amount = foreignAmount;
      currentArray.foreign_currency_id = foreignCurrency;

      // only submit currency ID when not 0:
      if (0 !== row.currency_id && null !== row.currency_id) {
        currentArray.currency_id = row.currency_id;
      }

      // set budget id and piggy ID.
      currentArray.budget_id = parseInt(row.budget);
      if (parseInt(row.bill) > 0) {
        currentArray.bill_id = parseInt(row.bill);
      }
      if (0 === parseInt(row.bill)) {
        currentArray.bill_id = null;
      }
      if (parseInt(row.piggy_bank) > 0) {
        currentArray.piggy_bank_id = parseInt(row.piggy_bank);
      }
      if (this.isReconciled && !this.storeAsNew) {
        // drop content from array:
        delete currentArray.source_id;
        delete currentArray.source_name;
        delete currentArray.destination_id;
        delete currentArray.destination_name;
        delete currentArray.amount;
        delete currentArray.foreign_amount;
        delete currentArray.foreign_currency_id;
        delete currentArray.currency_id;
        currentArray.reconciled = true;
      }
      return currentArray;
    },
    submit: function submit(e) {
      var _this2 = this;
      var button = $('#submitButton');
      button.prop("disabled", true);
      var page = window.location.href.split('/');
      var groupId = parseInt(page[page.length - 1]);
      var uri = './api/v1/transactions/' + groupId + '?_token=' + document.head.querySelector('meta[name="csrf-token"]').content;
      var method = 'PUT';
      if (this.storeAsNew) {
        // other links.
        uri = './api/v1/transactions?_token=' + document.head.querySelector('meta[name="csrf-token"]').content;
        method = 'POST';
      }
      var data = this.convertData();

      //axios.put(uri, data)
      axios({
        method: method,
        url: uri,
        data: data
      }).then(function (response) {
        if (0 === _this2.collectAttachmentData(response)) {
          var _response$data$data$a;
          var title = (_response$data$data$a = response.data.data.attributes.group_title) !== null && _response$data$data$a !== void 0 ? _response$data$data$a : response.data.data.attributes.transactions[0].description;
          _this2.redirectUser(response.data.data.id, title);
        }
      })["catch"](function (error) {
        // give user errors things back.
        // something something render errors.
        _this2.parseErrors(error.response.data);
        // something.
      });
      if (e) {
        e.preventDefault();
      }
      button.removeAttr('disabled');
    },
    redirectUser: function redirectUser(groupId, title) {
      if (this.returnAfter) {
        this.setDefaultErrors();
        // do message if update or new:
        if (this.storeAsNew) {
          this.success_message = this.$t('firefly.transaction_new_stored_link', {
            ID: groupId,
            title: this.escapeHtml(title)
          });
          this.error_message = '';
        } else {
          this.success_message = this.$t('firefly.transaction_updated_link', {
            ID: groupId,
            title: this.escapeHtml(title)
          });
          this.error_message = '';
        }
      } else {
        if (this.storeAsNew) {
          window.location.href = window.previousUrl + '?transaction_group_id=' + groupId + '&message=created';
        } else {
          window.location.href = window.previousUrl + '?transaction_group_id=' + groupId + '&message=updated';
        }
      }
    },
    collectAttachmentData: function collectAttachmentData(response) {
      var _this3 = this;
      // console.log('Now incollectAttachmentData()');
      var groupId = response.data.data.id;

      // array of all files to be uploaded:
      var toBeUploaded = [];

      // array with all file data.
      var fileData = [];

      // all attachments
      var attachments = $('input[name="attachments[]"]');

      // loop over all attachments, and add references to this array:
      for (var key in attachments) {
        if (attachments.hasOwnProperty(key) && /^0$|^[1-9]\d*$/.test(key) && key <= 4294967294) {
          for (var fileKey in attachments[key].files) {
            if (attachments[key].files.hasOwnProperty(fileKey) && /^0$|^[1-9]\d*$/.test(fileKey) && fileKey <= 4294967294) {
              // include journal thing.

              var transactions = response.data.data.attributes.transactions.reverse();
              toBeUploaded.push({
                journal: transactions[key].transaction_journal_id,
                file: attachments[key].files[fileKey]
              });
            }
          }
        }
      }
      var count = toBeUploaded.length;
      // console.log('Found ' + toBeUploaded.length + ' attachments.');

      // loop all uploads.
      var _loop = function _loop(_key) {
        if (toBeUploaded.hasOwnProperty(_key) && /^0$|^[1-9]\d*$/.test(_key) && _key <= 4294967294) {
          // create file reader thing that will read all of these uploads
          (function (f, i, theParent) {
            var fileReader = new FileReader();
            fileReader.onloadend = function (evt) {
              if (evt.target.readyState === FileReader.DONE) {
                // DONE == 2
                fileData.push({
                  name: toBeUploaded[_key].file.name,
                  journal: toBeUploaded[_key].journal,
                  content: new Blob([evt.target.result])
                });
                if (fileData.length === count) {
                  theParent.uploadFiles(fileData, groupId);
                }
              }
            };
            fileReader.readAsArrayBuffer(f.file);
          })(toBeUploaded[_key], _key, _this3);
        }
      };
      for (var _key in toBeUploaded) {
        _loop(_key);
      }
      return count;
    },
    uploadFiles: function uploadFiles(fileData, groupId) {
      var _this4 = this;
      var count = fileData.length;
      var uploads = 0;
      var _loop2 = function _loop2(key) {
        if (fileData.hasOwnProperty(key) && /^0$|^[1-9]\d*$/.test(key) && key <= 4294967294) {
          // console.log('Creating attachment #' + key);
          // axios thing, + then.
          var uri = './api/v1/attachments';
          var data = {
            filename: fileData[key].name,
            attachable_type: 'TransactionJournal',
            attachable_id: fileData[key].journal
          };
          axios.post(uri, data).then(function (response) {
            // console.log('Created attachment #' + key);
            // console.log('Uploading attachment #' + key);
            var uploadUri = './api/v1/attachments/' + response.data.data.id + '/upload';
            axios.post(uploadUri, fileData[key].content).then(function (secondResponse) {
              // console.log('Uploaded attachment #' + key);
              uploads++;
              if (uploads === count) {
                // finally we can redirect the user onwards.
                // console.log('FINAL UPLOAD');
                _this4.redirectUser(groupId, null);
              }
              // console.log('Upload complete!');
              return true;
            })["catch"](function (error) {
              console.error('Could not upload file.');
              console.error(error);
              uploads++;
              _this4.error_message = 'Could not upload attachment: ' + error;
              if (uploads === count) {
                _this4.redirectUser(groupId, null);
              }
              // console.error(error);
              return false;
            });
          })["catch"](function (error) {
            console.error('Could not create upload.');
            console.error(error);
            uploads++;
            if (uploads === count) {
              // finally we can redirect the user onwards.
              // console.log('FINAL UPLOAD');
              _this4.redirectUser(groupId, null);
            }
            // console.log('Upload complete!');
            return false;
          });
        }
      };
      for (var key in fileData) {
        _loop2(key);
      }
    },
    escapeHtml: function escapeHtml(string) {
      var entityMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;',
        '`': '&#x60;',
        '=': '&#x3D;'
      };
      return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap(s) {
        return entityMap[s];
      });
    },
    addTransaction: function addTransaction(e) {
      this.transactions.push({
        transaction_journal_id: 0,
        description: "",
        date: "",
        amount: "",
        category: "",
        piggy_bank: 0,
        errors: {
          source_account: [],
          destination_account: [],
          description: [],
          amount: [],
          date: [],
          budget_id: [],
          bill_id: [],
          foreign_amount: [],
          category: [],
          piggy_bank: [],
          tags: [],
          // custom fields:
          custom_errors: {
            interest_date: [],
            book_date: [],
            process_date: [],
            due_date: [],
            payment_date: [],
            invoice_date: [],
            internal_reference: [],
            notes: [],
            attachments: [],
            external_url: []
          }
        },
        budget: 0,
        bill: 0,
        tags: [],
        custom_fields: {
          "interest_date": "",
          "book_date": "",
          "process_date": "",
          "due_date": "",
          "payment_date": "",
          "invoice_date": "",
          "internal_reference": "",
          "notes": "",
          "attachments": [],
          "external_url": ""
        },
        foreign_amount: {
          amount: "",
          currency_id: 0
        },
        source_account: {
          id: 0,
          name: "",
          type: "",
          currency_id: 0,
          currency_name: '',
          currency_code: '',
          currency_decimal_places: 2,
          allowed_types: []
        },
        destination_account: {
          id: 0,
          name: "",
          type: "",
          currency_id: 0,
          currency_name: '',
          currency_code: '',
          currency_decimal_places: 2,
          allowed_types: []
        }
      });
      var count = this.transactions.length;
      // console.log('Transactions length = ' + count);
      // also set accounts from previous entry, if present.
      if (this.transactions.length > 1) {
        // console.log('Adding split.');
        this.transactions[count - 1].source_account = this.transactions[count - 2].source_account;
        this.transactions[count - 1].destination_account = this.transactions[count - 2].destination_account;
        this.transactions[count - 1].date = this.transactions[count - 2].date;
      }
      // console.log('Transactions length now = ' + this.transactions.length);

      if (e) {
        e.preventDefault();
      }
    },
    parseErrors: function parseErrors(errors) {
      this.setDefaultErrors();
      this.error_message = "";
      if (errors.message.length > 0) {
        this.error_message = this.$t('firefly.errors_submission');
      } else {
        this.error_message = '';
      }
      var transactionIndex;
      var fieldName;
      for (var key in errors.errors) {
        if (errors.errors.hasOwnProperty(key)) {
          if (key === 'group_title') {
            this.group_title_errors = errors.errors[key];
          }
          if (key !== 'group_title') {
            // lol dumbest way to explode "transactions.0.something" ever.
            transactionIndex = parseInt(key.split('.')[1]);
            fieldName = key.split('.')[2];
            // set error in this object thing.
            switch (fieldName) {
              case 'amount':
              case 'date':
              case 'budget_id':
              case 'bill_id':
              case 'description':
              case 'tags':
                this.transactions[transactionIndex].errors[fieldName] = errors.errors[key];
                break;
              case 'external_url':
                //console.log('Found ext error in field "' + fieldName + '": ' + errors.errors[key]);
                this.transactions[transactionIndex].errors.custom_errors[fieldName] = errors.errors[key];
                break;
              case 'source_name':
              case 'source_id':
                this.transactions[transactionIndex].errors.source_account = this.transactions[transactionIndex].errors.source_account.concat(errors.errors[key]);
                break;
              case 'destination_name':
              case 'destination_id':
                this.transactions[transactionIndex].errors.destination_account = this.transactions[transactionIndex].errors.destination_account.concat(errors.errors[key]);
                break;
              case 'foreign_amount':
              case 'foreign_currency_id':
                this.transactions[transactionIndex].errors.foreign_amount = this.transactions[transactionIndex].errors.foreign_amount.concat(errors.errors[key]);
                break;
            }

            // unique some things
            this.transactions[transactionIndex].errors.source_account = Array.from(new Set(this.transactions[transactionIndex].errors.source_account));
            this.transactions[transactionIndex].errors.destination_account = Array.from(new Set(this.transactions[transactionIndex].errors.destination_account));
          }
        }
      }
    },
    setDefaultErrors: function setDefaultErrors() {
      for (var key in this.transactions) {
        if (this.transactions.hasOwnProperty(key) && /^0$|^[1-9]\d*$/.test(key) && key <= 4294967294) {
          this.transactions[key].errors = {
            source_account: [],
            destination_account: [],
            description: [],
            amount: [],
            date: [],
            budget_id: [],
            bill_id: [],
            foreign_amount: [],
            category: [],
            piggy_bank: [],
            tags: [],
            // custom fields:
            custom_errors: {
              interest_date: [],
              book_date: [],
              process_date: [],
              due_date: [],
              payment_date: [],
              invoice_date: [],
              internal_reference: [],
              notes: [],
              attachments: [],
              external_url: []
            }
          };
        }
      }
    }
  },
  data: function data() {
    return {
      applyRules: true,
      fireWebhooks: true,
      group: this.groupId,
      error_message: "",
      isReconciled: false,
      success_message: "",
      transactions: [],
      group_title: "",
      returnAfter: false,
      storeAsNew: false,
      transactionType: null,
      group_title_errors: [],
      resetButtonDisabled: true
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/ForeignAmountSelect.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/ForeignAmountSelect.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ForeignAmountSelect",
  props: ['source', 'destination', 'transactionType', 'value', 'error', 'no_currency', 'title'],
  mounted: function mounted() {
    this.liability = false;
    this.loadCurrencies();
  },
  data: function data() {
    return {
      currencies: [],
      enabledCurrencies: [],
      exclude: null,
      // liability overrules the drop down list if the source or dest is a liability
      liability: false
    };
  },
  watch: {
    source: function source() {
      //console.log('ForeignAmountSelect watch source');
      this.changeData();
    },
    destination: function destination() {
      //console.log('ForeignAmountSelect watch destination');
      this.changeData();
    },
    transactionType: function transactionType() {
      //console.log('ForeignAmountSelect watch transaction type (is now ' + this.transactionType + ')');
      this.changeData();
    }
  },
  methods: {
    clearAmount: function clearAmount() {
      this.$refs.amount.value = '';
      this.$emit('input', this.$refs.amount.value);
      // some event?
      this.$emit('clear:amount');
    },
    hasError: function hasError() {
      //console.log('ForeignAmountSelect hasError');
      return this.error.length > 0;
    },
    handleInput: function handleInput(e) {
      //console.log('ForeignAmountSelect handleInput');
      var obj = {
        amount: this.$refs.amount.value,
        currency_id: this.$refs.currency_select.value
      };
      // console.log(obj);
      this.$emit('input', obj);
    },
    changeData: function changeData() {
      // console.log('ForeignAmountSelect changeData');
      this.enabledCurrencies = [];
      var destType = this.destination.type ? this.destination.type.toLowerCase() : 'invalid';
      var srcType = this.source.type ? this.source.type.toLowerCase() : 'invalid';
      var tType = this.transactionType ? this.transactionType.toLowerCase() : 'invalid';
      var liabilities = ['loan', 'debt', 'mortgage'];
      var sourceIsLiability = liabilities.indexOf(srcType) !== -1;
      var destIsLiability = liabilities.indexOf(destType) !== -1;

      // console.log(srcType + ' (source) is a liability: ' + sourceIsLiability);
      // console.log(destType + ' (dest) is a liability: ' + destIsLiability);

      if (tType === 'transfer' || destIsLiability || sourceIsLiability) {
        // console.log('Source is liability OR dest is liability, OR transfer. Lock list on currency of destination.');
        // console.log('Length of currencies is ' + this.currencies.length);
        // console.log(this.currencies);
        this.liability = true;
        // lock dropdown list on on currencyID of destination.
        for (var key in this.currencies) {
          if (this.currencies.hasOwnProperty(key) && /^0$|^[1-9]\d*$/.test(key) && key <= 4294967294) {
            // console.log('this.currencies[key].id = ' + this.currencies[key].id);
            // console.log('this.destination.currency_id = ' + this.destination.currency_id);
            if (parseInt(this.currencies[key].id) === parseInt(this.destination.currency_id)) {
              this.enabledCurrencies.push(this.currencies[key]);
            }
          }
        }
        // console.log('Enabled currencies length is now ' + this.enabledCurrencies.length);
        return;
      }

      // if type is withdrawal, list all but skip the source account ID.
      if (tType === 'withdrawal' && this.source && false === sourceIsLiability) {
        for (var _key in this.currencies) {
          if (this.currencies.hasOwnProperty(_key) && /^0$|^[1-9]\d*$/.test(_key) && _key <= 4294967294) {
            if (this.source.currency_id !== this.currencies[_key].id) {
              this.enabledCurrencies.push(this.currencies[_key]);
            }
          }
        }
        return;
      }

      // if type is deposit, list all but skip the source account ID.
      if (tType === 'deposit' && this.destination) {
        for (var _key2 in this.currencies) {
          if (this.currencies.hasOwnProperty(_key2) && /^0$|^[1-9]\d*$/.test(_key2) && _key2 <= 4294967294) {
            if (this.destination.currency_id !== this.currencies[_key2].id) {
              this.enabledCurrencies.push(this.currencies[_key2]);
            }
          }
        }
        return;
      }
      for (var _key3 in this.currencies) {
        if (this.currencies.hasOwnProperty(_key3) && /^0$|^[1-9]\d*$/.test(_key3) && _key3 <= 4294967294) {
          this.enabledCurrencies.push(this.currencies[_key3]);
        }
      }
    },
    loadCurrencies: function loadCurrencies() {
      // reset list of currencies:
      this.currencies = [{
        id: 0,
        attributes: {
          name: this.no_currency,
          enabled: true
        }
      }];
      this.enabledCurrencies = [{
        attributes: {
          name: this.no_currency,
          enabled: true
        },
        id: 0
      }];
      this.getCurrencies(1);
    },
    getCurrencies: function getCurrencies(page) {
      var _this = this;
      // console.log('loadCurrencies on page ' + page);
      var url = document.getElementsByTagName('base')[0].href + "api/v1/currencies?page=" + page;
      axios.get(url, {}).then(function (res) {
        for (var key in res.data.data) {
          if (res.data.data.hasOwnProperty(key) && /^0$|^[1-9]\d*$/.test(key) && key <= 4294967294) {
            if (res.data.data[key].attributes.enabled) {
              // console.log(res.data.data[key].attributes);
              _this.currencies.push(res.data.data[key]);
              _this.enabledCurrencies.push(res.data.data[key]);
            }
          }
        }
        if (res.data.meta.pagination.current_page < res.data.meta.pagination.total_pages) {
          _this.getCurrencies(res.data.meta.pagination.current_page + 1);
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/GroupDescription.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/GroupDescription.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['error', 'value', 'index'],
  name: "GroupDescription",
  methods: {
    hasError: function hasError() {
      return this.error.length > 0;
    },
    handleInput: function handleInput(e) {
      this.$emit('input', this.$refs.descr.value);
    },
    clearField: function clearField() {
      //props.value = '';
      this.name = '';
      this.$refs.descr.value = '';
      this.$emit('input', this.$refs.descr.value);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/PiggyBank.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/PiggyBank.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PiggyBank",
  props: ['value', 'transactionType', 'error', 'no_piggy_bank'],
  mounted: function mounted() {
    this.loadPiggies();
  },
  data: function data() {
    return {
      piggies: []
    };
  },
  methods: {
    handleInput: function handleInput(e) {
      this.$emit('input', this.$refs.piggy.value);
    },
    hasError: function hasError() {
      return this.error.length > 0;
    },
    loadPiggies: function loadPiggies() {
      var _this = this;
      var URI = document.getElementsByTagName('base')[0].href + "api/v1/autocomplete/piggy-banks-with-balance?limit=1337";
      axios.get(URI, {}).then(function (res) {
        var tempList = {
          0: {
            group: {
              title: _this.$t('firefly.default_group_title_name')
            },
            piggies: [{
              name_with_balance: _this.no_piggy_bank,
              id: 0
            }]
          }
        };
        for (var key in res.data) {
          if (res.data.hasOwnProperty(key) && /^0$|^[1-9]\d*$/.test(key) && key <= 4294967294) {
            // add to temp list
            var currentPiggy = res.data[key];
            if (currentPiggy.objectGroup) {
              var groupOrder = currentPiggy.objectGroup.order;
              if (!tempList[groupOrder]) {
                tempList[groupOrder] = {
                  group: {
                    title: currentPiggy.objectGroup.title
                  },
                  piggies: []
                };
              }
              tempList[groupOrder].piggies.push({
                name_with_balance: currentPiggy.name_with_balance,
                id: currentPiggy.id
              });
            }
            if (!currentPiggy.objectGroup) {
              // add to empty one:
              tempList[0].piggies.push({
                name_with_balance: currentPiggy.name_with_balance,
                id: currentPiggy.id
              });
            }
            //console.log(currentPiggy);
            _this.piggies.push(res.data[key]);
          }
        }
        var ordered = {};
        Object.keys(tempList).sort().forEach(function (key) {
          var groupName = tempList[key].group.title;
          ordered[groupName] = tempList[key];
        });
        // final list:

        _this.piggies = ordered;
        // console.log(ordered);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/StandardDate.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/StandardDate.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['error', 'value', 'index'],
  name: "StandardDate",
  methods: {
    hasError: function hasError() {
      return this.error.length > 0;
    },
    handleInput: function handleInput(e) {
      this.$emit('input', this.$refs.date.value);
    },
    clearDate: function clearDate() {
      //props.value = '';
      this.name = '';
      this.$refs.date.value = '';
      this.$emit('input', this.$refs.date.value);
      // some event?
      this.$emit('clear:date');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/Tags.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/Tags.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Tags",
  components: {
    VueTagsInput: (_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_1___default())
  },
  props: ['value', 'error'],
  data: function data() {
    return {
      tag: '',
      autocompleteItems: [],
      debounce: null,
      tags: this.value
    };
  },
  watch: {
    'tag': 'initItems'
  },
  methods: {
    update: function update(newTags) {
      console.log('update', newTags);
      this.autocompleteItems = [];
      this.tags = newTags;
      this.$emit('input', this.tags);
    },
    clearTags: function clearTags() {
      console.log('clearTags');
      this.tags = [];
      this.$emit('input', this.tags);
    },
    hasError: function hasError() {
      return this.error.length > 0;
    },
    initItems: function initItems() {
      var _this = this;
      console.log('Now in initItems');
      if (this.tag.length < 2) {
        return;
      }
      var url = document.getElementsByTagName('base')[0].href + "api/v1/autocomplete/tags?query=".concat(this.tag);
      clearTimeout(this.debounce);
      this.debounce = setTimeout(function () {
        axios__WEBPACK_IMPORTED_MODULE_0___default().get(url).then(function (response) {
          _this.autocompleteItems = response.data.map(function (a) {
            return {
              text: a.tag
            };
          });
        })["catch"](function () {
          return console.warn('Oh. Something went wrong loading tags.');
        });
      }, 600);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/TransactionDescription.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/TransactionDescription.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['error', 'value', 'index'],
  name: "TransactionDescription",
  mounted: function mounted() {
    this.target = this.$refs.descr;
    this.descriptionAutoCompleteURI = document.getElementsByTagName('base')[0].href + "api/v1/autocomplete/transactions?query=";
    this.$refs.descr.focus();
  },
  components: {},
  data: function data() {
    return {
      descriptionAutoCompleteURI: null,
      name: null,
      description: null,
      target: null
    };
  },
  methods: {
    aSyncFunction: function aSyncFunction(query, done) {
      axios.get(this.descriptionAutoCompleteURI + query).then(function (res) {
        done(res.data);
      })["catch"](function (err) {
        // any error handler
      });
    },
    betterHighlight: function betterHighlight(item) {
      var inputValue = this.$refs.descr.value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
      var escapedName = this.escapeHtml(item.description);
      return escapedName.replace(new RegExp("" + inputValue, 'i'), '<b>$&</b>');
    },
    escapeHtml: function escapeHtml(string) {
      var entityMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;',
        '`': '&#x60;',
        '=': '&#x3D;'
      };
      return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap(s) {
        return entityMap[s];
      });
    },
    search: function search(input) {
      return ['ab', 'cd'];
    },
    hasError: function hasError() {
      return this.error.length > 0;
    },
    clearDescription: function clearDescription() {
      //props.value = '';
      this.description = '';
      this.$refs.descr.value = '';
      this.$emit('input', this.$refs.descr.value);
      // some event?
      this.$emit('clear:description');
    },
    handleInput: function handleInput(e) {
      this.$emit('input', this.$refs.descr.value);
    },
    handleEnter: function handleEnter(e) {
      // TODO feels sloppy

      if (e.keyCode === 13) {
        //e.preventDefault();
      }
    },
    selectedItem: function selectedItem(e) {
      if (typeof this.name === 'undefined') {
        return;
      }
      if (typeof this.name === 'string') {
        return;
      }
      this.$refs.descr.value = this.name.description;
      this.$emit('input', this.$refs.descr.value);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/TransactionType.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/TransactionType.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    source: String,
    destination: String,
    type: String
  },
  methods: {
    changeValue: function changeValue() {
      if (this.source && this.destination) {
        var transactionType = '';
        if (window.accountToTypes[this.source]) {
          if (window.accountToTypes[this.source][this.destination]) {
            transactionType = window.accountToTypes[this.source][this.destination];
          } else {
            console.warn('User selected an impossible destination.');
          }
        } else {
          console.warn('User selected an impossible source.');
        }
        if ('' !== transactionType) {
          this.transactionType = transactionType;
          this.sentence = this.$t('firefly.you_create_' + transactionType.toLowerCase());

          // Must also emit a change to set ALL sources and destinations to this particular type.
          this.$emit('act:limitSourceType', this.source);
          this.$emit('act:limitDestinationType', this.destination);
        }
      } else {
        this.sentence = '';
        this.transactionType = '';
      }
      // emit event how cool is that.
      this.$emit('set:transactionType', this.transactionType);
    }
  },
  data: function data() {
    return {
      transactionType: this.type,
      sentence: ''
    };
  },
  watch: {
    source: function source() {
      this.changeValue();
    },
    destination: function destination() {
      this.changeValue();
    }
  },
  name: "TransactionType"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/AccountSelect.vue?vue&type=template&id=be9f63f4":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/AccountSelect.vue?vue&type=template&id=be9f63f4 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group",
    "class": {
      "has-error": _vm.hasError()
    }
  }, [_c("div", {
    staticClass: "col-sm-12 text-sm"
  }, [_vm._v("\n    " + _vm._s(_vm.inputDescription) + "\n  ")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-12"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    ref: "input",
    staticClass: "form-control",
    attrs: {
      spellcheck: "false",
      "data-index": _vm.index,
      disabled: _vm.inputDisabled,
      name: _vm.inputName,
      placeholder: _vm.inputDescription,
      title: _vm.inputDescription,
      autocomplete: "off",
      "data-role": "input",
      type: "text"
    },
    on: {
      keypress: _vm.handleEnter,
      submit: function submit($event) {
        $event.preventDefault();
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "input-group-btn"
  }, [_c("button", {
    staticClass: "btn btn-default",
    attrs: {
      tabIndex: "-1",
      type: "button"
    },
    on: {
      click: _vm.clearSource
    }
  }, [_c("i", {
    staticClass: "fa fa-trash-o"
  })])])]), _vm._v(" "), _c("typeahead", {
    attrs: {
      "async-function": _vm.aSyncFunction,
      "open-on-empty": true,
      "open-on-focus": true,
      target: _vm.target,
      "item-key": "name_with_balance"
    },
    on: {
      input: _vm.selectedItem
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function fn(props) {
        return _vm._l(props.items, function (item, index) {
          return _c("li", {
            "class": {
              active: props.activeIndex === index
            }
          }, [_c("a", {
            attrs: {
              role: "button"
            },
            on: {
              click: function click($event) {
                return props.select(item);
              }
            }
          }, [_c("span", {
            domProps: {
              innerHTML: _vm._s(_vm.betterHighlight(item))
            }
          })])]);
        });
      }
    }]),
    model: {
      value: _vm.name,
      callback: function callback($$v) {
        _vm.name = $$v;
      },
      expression: "name"
    }
  }), _vm._v(" "), _vm._l(this.error, function (error) {
    return _c("ul", {
      staticClass: "list-unstyled"
    }, [_c("li", {
      staticClass: "text-danger"
    }, [_vm._v(_vm._s(error))])]);
  })], 2)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/Amount.vue?vue&type=template&id=77eddc2b":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/Amount.vue?vue&type=template&id=77eddc2b ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group",
    "class": {
      "has-error": _vm.hasError()
    }
  }, [_c("div", {
    staticClass: "col-sm-8 col-sm-offset-4 text-sm"
  }, [_vm._v("\n    " + _vm._s(_vm.$t("firefly.amount")) + "\n  ")]), _vm._v(" "), _c("label", {
    ref: "cur",
    staticClass: "col-sm-4 control-label"
  }), _vm._v(" "), _c("div", {
    staticClass: "col-sm-8"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    ref: "amount",
    staticClass: "form-control",
    attrs: {
      spellcheck: "false",
      title: _vm.$t("firefly.amount"),
      autocomplete: "off",
      name: "amount[]",
      step: "any",
      type: "number",
      placeholder: _vm.$t("firefly.amount")
    },
    domProps: {
      value: _vm.value
    },
    on: {
      input: _vm.handleInput
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "input-group-btn"
  }, [_c("button", {
    staticClass: "btn btn-default",
    attrs: {
      tabIndex: "-1",
      type: "button"
    },
    on: {
      click: _vm.clearAmount
    }
  }, [_c("i", {
    staticClass: "fa fa-trash-o"
  })])])])]), _vm._v(" "), _vm._l(this.error, function (error) {
    return _c("ul", {
      staticClass: "list-unstyled"
    }, [_c("li", {
      staticClass: "text-danger"
    }, [_vm._v(_vm._s(error))])]);
  })], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/Bill.vue?vue&type=template&id=f18f59cc":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/Bill.vue?vue&type=template&id=f18f59cc ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return typeof this.transactionType === "undefined" || this.transactionType === "withdrawal" || this.transactionType === "Withdrawal" || this.transactionType === "" || null === this.transactionType ? _c("div", {
    staticClass: "form-group",
    "class": {
      "has-error": _vm.hasError()
    }
  }, [_c("div", {
    staticClass: "col-sm-12 text-sm"
  }, [_vm._v("\n    " + _vm._s(_vm.$t("firefly.bill")) + "\n  ")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-12"
  }, [this.bills.length > 0 ? _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selected,
      expression: "selected"
    }],
    ref: "bill",
    staticClass: "form-control",
    attrs: {
      title: _vm.$t("firefly.bill"),
      name: "bill[]"
    },
    on: {
      input: _vm.handleInput,
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.selected = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.signalChange]
    }
  }, _vm._l(this.bills, function (cBill) {
    return _c("option", {
      attrs: {
        label: cBill.name
      },
      domProps: {
        value: cBill.id
      }
    }, [_vm._v(_vm._s(cBill.name) + "\n      ")]);
  }), 0) : _vm._e(), _vm._v(" "), this.bills.length === 1 ? _c("p", {
    staticClass: "help-block",
    domProps: {
      innerHTML: _vm._s(_vm.$t("firefly.no_bill_pointer"))
    }
  }) : _vm._e(), _vm._v(" "), _vm._l(this.error, function (error) {
    return _c("ul", {
      staticClass: "list-unstyled"
    }, [_c("li", {
      staticClass: "text-danger"
    }, [_vm._v(_vm._s(error))])]);
  })], 2)]) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/Budget.vue?vue&type=template&id=b88a06d0":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/Budget.vue?vue&type=template&id=b88a06d0 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return typeof this.transactionType === "undefined" || this.transactionType === "withdrawal" || this.transactionType === "Withdrawal" || this.transactionType === "" || null === this.transactionType ? _c("div", {
    staticClass: "form-group",
    "class": {
      "has-error": _vm.hasError()
    }
  }, [_c("div", {
    staticClass: "col-sm-12 text-sm"
  }, [_vm._v("\n    " + _vm._s(_vm.$t("firefly.budget")) + "\n  ")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-12"
  }, [this.budgets.length > 0 ? _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selected,
      expression: "selected"
    }],
    ref: "budget",
    staticClass: "form-control",
    attrs: {
      title: _vm.$t("firefly.budget"),
      name: "budget[]"
    },
    on: {
      input: _vm.handleInput,
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.selected = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.signalChange]
    }
  }, _vm._l(this.budgets, function (cBudget) {
    return _c("option", {
      attrs: {
        label: cBudget.name
      },
      domProps: {
        value: cBudget.id
      }
    }, [_vm._v(_vm._s(cBudget.name) + "\n      ")]);
  }), 0) : _vm._e(), _vm._v(" "), this.budgets.length === 1 ? _c("p", {
    staticClass: "help-block",
    domProps: {
      innerHTML: _vm._s(_vm.$t("firefly.no_budget_pointer"))
    }
  }) : _vm._e(), _vm._v(" "), _vm._l(this.error, function (error) {
    return _c("ul", {
      staticClass: "list-unstyled"
    }, [_c("li", {
      staticClass: "text-danger"
    }, [_vm._v(_vm._s(error))])]);
  })], 2)]) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/Category.vue?vue&type=template&id=5e272311":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/Category.vue?vue&type=template&id=5e272311 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group",
    "class": {
      "has-error": _vm.hasError()
    }
  }, [_c("div", {
    staticClass: "col-sm-12 text-sm"
  }, [_vm._v("\n    " + _vm._s(_vm.$t("firefly.category")) + "\n  ")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-12"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    ref: "input",
    staticClass: "form-control",
    attrs: {
      spellcheck: "false",
      autocomplete: "off",
      "data-role": "input",
      name: "category[]",
      type: "text",
      placeholder: _vm.$t("firefly.category"),
      title: _vm.$t("firefly.category")
    },
    domProps: {
      value: _vm.value
    },
    on: {
      input: _vm.handleInput,
      keypress: _vm.handleEnter,
      submit: function submit($event) {
        $event.preventDefault();
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "input-group-btn"
  }, [_c("button", {
    staticClass: "btn btn-default",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.clearCategory
    }
  }, [_c("i", {
    staticClass: "fa fa-trash-o"
  })])])]), _vm._v(" "), _c("typeahead", {
    ref: "typea",
    attrs: {
      "async-function": _vm.aSyncFunction,
      "open-on-empty": true,
      "open-on-focus": true,
      target: _vm.target,
      "item-key": "name"
    },
    on: {
      input: _vm.selectedItem
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function fn(props) {
        return _vm._l(props.items, function (item, index) {
          return _c("li", {
            "class": {
              active: props.activeIndex === index
            }
          }, [_c("a", {
            attrs: {
              role: "button"
            },
            on: {
              click: function click($event) {
                return props.select(item);
              }
            }
          }, [_c("span", {
            domProps: {
              innerHTML: _vm._s(_vm.betterHighlight(item))
            }
          })])]);
        });
      }
    }]),
    model: {
      value: _vm.name,
      callback: function callback($$v) {
        _vm.name = $$v;
      },
      expression: "name"
    }
  }), _vm._v(" "), _vm._l(this.error, function (error) {
    return _c("ul", {
      staticClass: "list-unstyled"
    }, [_c("li", {
      staticClass: "text-danger"
    }, [_vm._v(_vm._s(error))])]);
  })], 2)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/CustomAttachments.vue?vue&type=template&id=75bc1a7c":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/CustomAttachments.vue?vue&type=template&id=75bc1a7c ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group",
    "class": {
      "has-error": _vm.hasError()
    }
  }, [_c("div", {
    staticClass: "col-sm-12 text-sm"
  }, [_vm._v("\n    " + _vm._s(_vm.title) + "\n  ")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-12"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    ref: "input",
    staticClass: "form-control",
    attrs: {
      spellcheck: "false",
      name: _vm.name,
      placeholder: _vm.title,
      title: _vm.title,
      autocomplete: "off",
      multiple: "multiple",
      type: "file"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "input-group-btn"
  }, [_c("button", {
    staticClass: "btn btn-default",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.clearAtt
    }
  }, [_c("i", {
    staticClass: "fa fa-trash-o"
  })])])]), _vm._v(" "), _vm._l(this.error, function (error) {
    return _c("ul", {
      staticClass: "list-unstyled"
    }, [_c("li", {
      staticClass: "text-danger"
    }, [_vm._v(_vm._s(error))])]);
  })], 2)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/CustomDate.vue?vue&type=template&id=14f6b992":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/CustomDate.vue?vue&type=template&id=14f6b992 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group",
    "class": {
      "has-error": _vm.hasError()
    }
  }, [_c("div", {
    staticClass: "col-sm-12 text-sm"
  }, [_vm._v("\n    " + _vm._s(_vm.title) + "\n  ")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-12"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    ref: "date",
    staticClass: "form-control",
    attrs: {
      name: _vm.name,
      placeholder: _vm.title,
      spellcheck: "false",
      title: _vm.title,
      autocomplete: "off",
      type: "date"
    },
    domProps: {
      value: _vm.value ? _vm.value.substr(0, 10) : ""
    },
    on: {
      input: _vm.handleInput
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "input-group-btn"
  }, [_c("button", {
    staticClass: "btn btn-default",
    attrs: {
      tabIndex: "-1",
      type: "button"
    },
    on: {
      click: _vm.clearDate
    }
  }, [_c("i", {
    staticClass: "fa fa-trash-o"
  })])])]), _vm._v(" "), _vm._l(this.error, function (error) {
    return _c("ul", {
      staticClass: "list-unstyled"
    }, [_c("li", {
      staticClass: "text-danger"
    }, [_vm._v(_vm._s(error))])]);
  })], 2)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/CustomString.vue?vue&type=template&id=73a9dd75":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/CustomString.vue?vue&type=template&id=73a9dd75 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group",
    "class": {
      "has-error": _vm.hasError()
    }
  }, [_c("div", {
    staticClass: "col-sm-12 text-sm"
  }, [_vm._v("\n    " + _vm._s(_vm.title) + "\n  ")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-12"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    ref: "str",
    staticClass: "form-control",
    attrs: {
      name: _vm.name,
      placeholder: _vm.title,
      spellcheck: "false",
      title: _vm.title,
      autocomplete: "off",
      type: "text"
    },
    domProps: {
      value: _vm.value
    },
    on: {
      input: _vm.handleInput
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "input-group-btn"
  }, [_c("button", {
    staticClass: "btn btn-default",
    attrs: {
      tabIndex: "-1",
      type: "button"
    },
    on: {
      click: _vm.clearField
    }
  }, [_c("i", {
    staticClass: "fa fa-trash-o"
  })])])]), _vm._v(" "), _vm._l(this.error, function (error) {
    return _c("ul", {
      staticClass: "list-unstyled"
    }, [_c("li", {
      staticClass: "text-danger"
    }, [_vm._v(_vm._s(error))])]);
  })], 2)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/CustomTextarea.vue?vue&type=template&id=18b655c4":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/CustomTextarea.vue?vue&type=template&id=18b655c4 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group",
    "class": {
      "has-error": _vm.hasError()
    }
  }, [_c("div", {
    staticClass: "col-sm-12 text-sm"
  }, [_vm._v("\n    " + _vm._s(_vm.title) + "\n  ")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-12"
  }, [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.textValue,
      expression: "textValue"
    }],
    ref: "str",
    staticClass: "form-control",
    attrs: {
      name: _vm.name,
      placeholder: _vm.title,
      title: _vm.title,
      autocomplete: "off",
      rows: "8"
    },
    domProps: {
      value: _vm.textValue
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.textValue = $event.target.value;
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _vm._l(this.error, function (error) {
    return _c("ul", {
      staticClass: "list-unstyled"
    }, [_c("li", {
      staticClass: "text-danger"
    }, [_vm._v(_vm._s(error))])]);
  })], 2)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/CustomTransactionFields.vue?vue&type=template&id=0f4148fa":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/CustomTransactionFields.vue?vue&type=template&id=0f4148fa ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("p", {
    staticClass: "help-block",
    domProps: {
      innerHTML: _vm._s(_vm.$t("firefly.hidden_fields_preferences"))
    }
  }), _vm._v(" "), this.fields.interest_date ? _c(_vm.dateComponent, {
    tag: "component",
    attrs: {
      error: _vm.error.interest_date,
      name: "interest_date[]",
      title: _vm.$t("form.interest_date")
    },
    model: {
      value: _vm.value.interest_date,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "interest_date", $$v);
      },
      expression: "value.interest_date"
    }
  }) : _vm._e(), _vm._v(" "), this.fields.book_date ? _c(_vm.dateComponent, {
    tag: "component",
    attrs: {
      error: _vm.error.book_date,
      name: "book_date[]",
      title: _vm.$t("form.book_date")
    },
    model: {
      value: _vm.value.book_date,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "book_date", $$v);
      },
      expression: "value.book_date"
    }
  }) : _vm._e(), _vm._v(" "), this.fields.process_date ? _c(_vm.dateComponent, {
    tag: "component",
    attrs: {
      error: _vm.error.process_date,
      name: "process_date[]",
      title: _vm.$t("form.process_date")
    },
    model: {
      value: _vm.value.process_date,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "process_date", $$v);
      },
      expression: "value.process_date"
    }
  }) : _vm._e(), _vm._v(" "), this.fields.due_date ? _c(_vm.dateComponent, {
    tag: "component",
    attrs: {
      error: _vm.error.due_date,
      name: "due_date[]",
      title: _vm.$t("form.due_date")
    },
    model: {
      value: _vm.value.due_date,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "due_date", $$v);
      },
      expression: "value.due_date"
    }
  }) : _vm._e(), _vm._v(" "), this.fields.payment_date ? _c(_vm.dateComponent, {
    tag: "component",
    attrs: {
      error: _vm.error.payment_date,
      name: "payment_date[]",
      title: _vm.$t("form.payment_date")
    },
    model: {
      value: _vm.value.payment_date,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "payment_date", $$v);
      },
      expression: "value.payment_date"
    }
  }) : _vm._e(), _vm._v(" "), this.fields.invoice_date ? _c(_vm.dateComponent, {
    tag: "component",
    attrs: {
      error: _vm.error.invoice_date,
      name: "invoice_date[]",
      title: _vm.$t("form.invoice_date")
    },
    model: {
      value: _vm.value.invoice_date,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "invoice_date", $$v);
      },
      expression: "value.invoice_date"
    }
  }) : _vm._e(), _vm._v(" "), this.fields.internal_reference ? _c(_vm.stringComponent, {
    tag: "component",
    attrs: {
      error: _vm.error.internal_reference,
      name: "internal_reference[]",
      title: _vm.$t("form.internal_reference")
    },
    model: {
      value: _vm.value.internal_reference,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "internal_reference", $$v);
      },
      expression: "value.internal_reference"
    }
  }) : _vm._e(), _vm._v(" "), this.fields.attachments ? _c(_vm.attachmentComponent, {
    tag: "component",
    attrs: {
      error: _vm.error.attachments,
      name: "attachments[]",
      title: _vm.$t("firefly.attachments")
    },
    model: {
      value: _vm.value.attachments,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "attachments", $$v);
      },
      expression: "value.attachments"
    }
  }) : _vm._e(), _vm._v(" "), this.fields.external_url ? _c(_vm.uriComponent, {
    tag: "component",
    attrs: {
      error: _vm.error.external_url,
      name: "external_url[]",
      title: _vm.$t("firefly.external_url")
    },
    model: {
      value: _vm.value.external_url,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "external_url", $$v);
      },
      expression: "value.external_url"
    }
  }) : _vm._e(), _vm._v(" "), this.fields.notes ? _c(_vm.textareaComponent, {
    tag: "component",
    attrs: {
      error: _vm.error.notes,
      name: "notes[]",
      title: _vm.$t("firefly.notes")
    },
    model: {
      value: _vm.value.notes,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "notes", $$v);
      },
      expression: "value.notes"
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/CustomUri.vue?vue&type=template&id=f0ff6b90":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/CustomUri.vue?vue&type=template&id=f0ff6b90 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group",
    "class": {
      "has-error": _vm.hasError()
    }
  }, [_c("div", {
    staticClass: "col-sm-12 text-sm"
  }, [_vm._v("\n    " + _vm._s(_vm.title) + "\n  ")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-12"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    ref: "uri",
    staticClass: "form-control",
    attrs: {
      name: _vm.name,
      placeholder: _vm.title,
      spellcheck: "false",
      title: _vm.title,
      autocomplete: "off",
      type: "url"
    },
    domProps: {
      value: _vm.value
    },
    on: {
      input: _vm.handleInput
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "input-group-btn"
  }, [_c("button", {
    staticClass: "btn btn-default",
    attrs: {
      tabIndex: "-1",
      type: "button"
    },
    on: {
      click: _vm.clearField
    }
  }, [_c("i", {
    staticClass: "fa fa-trash-o"
  })])])]), _vm._v(" "), _vm._l(this.error, function (error) {
    return _c("ul", {
      staticClass: "list-unstyled"
    }, [_c("li", {
      staticClass: "text-danger"
    }, [_vm._v(_vm._s(error))])]);
  })], 2)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/EditTransaction.vue?vue&type=template&id=16510831":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/EditTransaction.vue?vue&type=template&id=16510831 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("form", {
    staticClass: "form-horizontal",
    attrs: {
      id: "store",
      "accept-charset": "UTF-8",
      action: "#",
      enctype: "multipart/form-data",
      method: "POST"
    }
  }, [_c("input", {
    attrs: {
      name: "_token",
      type: "hidden",
      value: "xxx"
    }
  }), _vm._v(" "), _vm.error_message !== "" ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12"
  }, [_c("div", {
    staticClass: "alert alert-danger alert-dismissible",
    attrs: {
      role: "alert"
    }
  }, [_c("button", {
    staticClass: "close",
    attrs: {
      "data-dismiss": "alert",
      type: "button",
      "aria-label": _vm.$t("firefly.close")
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])]), _vm._v(" "), _c("strong", [_vm._v(_vm._s(_vm.$t("firefly.flash_error")))]), _vm._v(" " + _vm._s(_vm.error_message) + "\n            ")])])]) : _vm._e(), _vm._v(" "), _vm.isReconciled ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12"
  }, [_c("div", {
    staticClass: "alert alert-warning",
    attrs: {
      role: "alert"
    }
  }, [_c("strong", [_vm._v(_vm._s(_vm.$t("firefly.flash_warning")))]), _vm._v(" " + _vm._s(_vm.$t("firefly.is_reconciled_fields_dropped")) + "\n            ")])])]) : _vm._e(), _vm._v(" "), _vm.success_message !== "" ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12"
  }, [_c("div", {
    staticClass: "alert alert-success alert-dismissible",
    attrs: {
      role: "alert"
    }
  }, [_c("button", {
    staticClass: "close",
    attrs: {
      "data-dismiss": "alert",
      type: "button",
      "aria-label": _vm.$t("firefly.close")
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])]), _vm._v(" "), _c("strong", [_vm._v(_vm._s(_vm.$t("firefly.flash_success")))]), _vm._v(" "), _c("span", {
    domProps: {
      innerHTML: _vm._s(_vm.success_message)
    }
  })])])]) : _vm._e(), _vm._v(" "), _c("div", _vm._l(_vm.transactions, function (transaction, index) {
    return _c("div", {
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col-lg-12"
    }, [_c("div", {
      staticClass: "box"
    }, [_c("div", {
      staticClass: "box-header with-border"
    }, [_c("h3", {
      staticClass: "box-title splitTitle"
    }, [_vm.transactions.length > 1 ? _c("span", [_vm._v(_vm._s(_vm.$t("firefly.single_split")) + " " + _vm._s(index + 1) + " / " + _vm._s(_vm.transactions.length))]) : _vm._e(), _vm._v(" "), _vm.transactions.length === 1 ? _c("span", [_vm._v(_vm._s(_vm.$t("firefly.transaction_journal_information")))]) : _vm._e()]), _vm._v(" "), _vm.transactions.length > 1 ? _c("div", {
      staticClass: "box-tools pull-right"
    }, [_c("button", {
      staticClass: "btn btn-xs btn-danger",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.deleteTransaction(index, $event);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-trash"
    })])]) : _vm._e()]), _vm._v(" "), _c("div", {
      staticClass: "box-body"
    }, [_c("div", {
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col-lg-4"
    }, [_vm.transactionType.toLowerCase() !== "reconciliation" ? _c("transaction-description", {
      attrs: {
        error: transaction.errors.description,
        index: index
      },
      model: {
        value: transaction.description,
        callback: function callback($$v) {
          _vm.$set(transaction, "description", $$v);
        },
        expression: "transaction.description"
      }
    }) : _vm._e(), _vm._v(" "), _vm.transactionType.toLowerCase() !== "reconciliation" ? _c("account-select", {
      attrs: {
        accountName: transaction.source_account.name,
        accountTypeFilters: transaction.source_account.allowed_types,
        error: transaction.errors.source_account,
        index: index,
        transactionType: _vm.transactionType,
        inputName: "source[]",
        inputDescription: _vm.$t("firefly.source_account")
      },
      on: {
        "clear:value": function clearValue($event) {
          return _vm.clearSource(index);
        },
        "select:account": function selectAccount($event) {
          return _vm.selectedSourceAccount(index, $event);
        }
      }
    }) : _vm._e(), _vm._v(" "), _vm.transactionType.toLowerCase() === "reconciliation" ? _c("div", {
      staticClass: "form-group"
    }, [_c("div", {
      staticClass: "col-sm-12"
    }, [_c("p", {
      staticClass: "form-control-static",
      attrs: {
        id: "ffInput_source"
      }
    }, [_c("em", [_vm._v("\n                                                " + _vm._s(_vm.$t("firefly.source_account_reconciliation")) + "\n                                            ")])])])]) : _vm._e(), _vm._v(" "), _vm.transactionType.toLowerCase() !== "reconciliation" ? _c("account-select", {
      attrs: {
        accountName: transaction.destination_account.name,
        accountTypeFilters: transaction.destination_account.allowed_types,
        error: transaction.errors.destination_account,
        index: index,
        transactionType: _vm.transactionType,
        inputName: "destination[]",
        inputDescription: _vm.$t("firefly.destination_account")
      },
      on: {
        "clear:value": function clearValue($event) {
          return _vm.clearDestination(index);
        },
        "select:account": function selectAccount($event) {
          return _vm.selectedDestinationAccount(index, $event);
        }
      }
    }) : _vm._e(), _vm._v(" "), _vm.transactionType.toLowerCase() === "reconciliation" ? _c("div", {
      staticClass: "form-group"
    }, [_c("div", {
      staticClass: "col-sm-12"
    }, [_c("p", {
      staticClass: "form-control-static",
      attrs: {
        id: "ffInput_dest"
      }
    }, [_c("em", [_vm._v("\n                                                " + _vm._s(_vm.$t("firefly.destination_account_reconciliation")) + "\n                                            ")])])])]) : _vm._e(), _vm._v(" "), _c("standard-date", {
      attrs: {
        error: transaction.errors.date,
        index: index
      },
      model: {
        value: transaction.date,
        callback: function callback($$v) {
          _vm.$set(transaction, "date", $$v);
        },
        expression: "transaction.date"
      }
    }), _vm._v(" "), index === 0 ? _c("div", [_c("transaction-type", {
      attrs: {
        destination: transaction.destination_account.type,
        source: transaction.source_account.type
      },
      on: {
        "set:transactionType": function setTransactionType($event) {
          return _vm.setTransactionType($event);
        },
        "act:limitSourceType": function actLimitSourceType($event) {
          return _vm.limitSourceType($event);
        },
        "act:limitDestinationType": function actLimitDestinationType($event) {
          return _vm.limitDestinationType($event);
        }
      }
    })], 1) : _vm._e()], 1), _vm._v(" "), _c("div", {
      staticClass: "col-lg-4"
    }, [_c("amount", {
      attrs: {
        destination: transaction.destination_account,
        error: transaction.errors.amount,
        index: index,
        source: transaction.source_account,
        transactionType: _vm.transactionType
      },
      model: {
        value: transaction.amount,
        callback: function callback($$v) {
          _vm.$set(transaction, "amount", $$v);
        },
        expression: "transaction.amount"
      }
    }), _vm._v(" "), _vm.transactionType.toLowerCase() !== "reconciliation" ? _c("foreign-amount", {
      attrs: {
        destination: transaction.destination_account,
        error: transaction.errors.foreign_amount,
        no_currency: _vm.$t("firefly.none_in_select_list"),
        source: transaction.source_account,
        transactionType: _vm.transactionType,
        title: _vm.$t("form.foreign_amount")
      },
      model: {
        value: transaction.foreign_amount,
        callback: function callback($$v) {
          _vm.$set(transaction, "foreign_amount", $$v);
        },
        expression: "transaction.foreign_amount"
      }
    }) : _vm._e()], 1), _vm._v(" "), _c("div", {
      staticClass: "col-lg-4"
    }, [_c("budget", {
      attrs: {
        error: transaction.errors.budget_id,
        no_budget: _vm.$t("firefly.none_in_select_list"),
        transactionType: _vm.transactionType
      },
      model: {
        value: transaction.budget,
        callback: function callback($$v) {
          _vm.$set(transaction, "budget", $$v);
        },
        expression: "transaction.budget"
      }
    }), _vm._v(" "), _c("category", {
      attrs: {
        error: transaction.errors.category,
        transactionType: _vm.transactionType
      },
      model: {
        value: transaction.category,
        callback: function callback($$v) {
          _vm.$set(transaction, "category", $$v);
        },
        expression: "transaction.category"
      }
    }), _vm._v(" "), _c("tags", {
      attrs: {
        error: transaction.errors.tags,
        tags: transaction.tags,
        transactionType: _vm.transactionType
      },
      model: {
        value: transaction.tags,
        callback: function callback($$v) {
          _vm.$set(transaction, "tags", $$v);
        },
        expression: "transaction.tags"
      }
    }), _vm._v(" "), _c("bill", {
      attrs: {
        error: transaction.errors.bill_id,
        no_bill: _vm.$t("firefly.none_in_select_list"),
        transactionType: _vm.transactionType
      },
      model: {
        value: transaction.bill,
        callback: function callback($$v) {
          _vm.$set(transaction, "bill", $$v);
        },
        expression: "transaction.bill"
      }
    }), _vm._v(" "), _c("custom-transaction-fields", {
      attrs: {
        error: transaction.errors.custom_errors
      },
      model: {
        value: transaction.custom_fields,
        callback: function callback($$v) {
          _vm.$set(transaction, "custom_fields", $$v);
        },
        expression: "transaction.custom_fields"
      }
    })], 1)])]), _vm._v(" "), _vm.transactions.length - 1 === index && _vm.transactionType.toLowerCase() !== "reconciliation" ? _c("div", {
      staticClass: "box-footer"
    }, [_c("button", {
      staticClass: "btn btn-default",
      attrs: {
        type: "button"
      },
      on: {
        click: _vm.addTransaction
      }
    }, [_vm._v(_vm._s(_vm.$t("firefly.add_another_split")) + "\n                        ")])]) : _vm._e()])])]);
  }), 0), _vm._v(" "), _vm.transactions.length > 1 ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-6 col-md-6 col-sm-12 col-xs-12"
  }, [_c("div", {
    staticClass: "box"
  }, [_c("div", {
    staticClass: "box-header with-border"
  }, [_c("h3", {
    staticClass: "box-title"
  }, [_vm._v("\n                        " + _vm._s(_vm.$t("firefly.split_transaction_title")) + "\n                    ")])]), _vm._v(" "), _c("div", {
    staticClass: "box-body"
  }, [_c("group-description", {
    attrs: {
      error: _vm.group_title_errors
    },
    model: {
      value: _vm.group_title,
      callback: function callback($$v) {
        _vm.group_title = $$v;
      },
      expression: "group_title"
    }
  })], 1)])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-6 col-md-6 col-sm-12 col-xs-12"
  }, [_c("div", {
    staticClass: "box"
  }, [_c("div", {
    staticClass: "box-header with-border"
  }, [_c("h3", {
    staticClass: "box-title"
  }, [_vm._v("\n                        " + _vm._s(_vm.$t("firefly.submission")) + "\n                    ")])]), _vm._v(" "), _c("div", {
    staticClass: "box-body"
  }, [_c("div", {
    staticClass: "checkbox"
  }, [_c("label", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.returnAfter,
      expression: "returnAfter"
    }],
    attrs: {
      name: "return_after",
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.returnAfter) ? _vm._i(_vm.returnAfter, null) > -1 : _vm.returnAfter
    },
    on: {
      change: function change($event) {
        var $$a = _vm.returnAfter,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.returnAfter = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.returnAfter = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.returnAfter = $$c;
        }
      }
    }
  }), _vm._v("\n                            " + _vm._s(_vm.$t("firefly.after_update_create_another")) + "\n                        ")])]), _vm._v(" "), null !== _vm.transactionType && _vm.transactionType.toLowerCase() !== "reconciliation" ? _c("div", {
    staticClass: "checkbox"
  }, [_c("label", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.storeAsNew,
      expression: "storeAsNew"
    }],
    attrs: {
      name: "store_as_new",
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.storeAsNew) ? _vm._i(_vm.storeAsNew, null) > -1 : _vm.storeAsNew
    },
    on: {
      change: function change($event) {
        var $$a = _vm.storeAsNew,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.storeAsNew = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.storeAsNew = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.storeAsNew = $$c;
        }
      }
    }
  }), _vm._v("\n                            " + _vm._s(_vm.$t("firefly.store_as_new")) + "\n                        ")])]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "box-footer"
  }, [_c("div", {
    staticClass: "btn-group"
  }, [_c("button", {
    staticClass: "btn btn-success",
    attrs: {
      id: "submitButton"
    },
    on: {
      click: _vm.submit
    }
  }, [_vm._v(_vm._s(_vm.$t("firefly.update_transaction")) + "\n                        ")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-6 col-md-6 col-sm-12 col-xs-12"
  }, [_c("div", {
    staticClass: "box"
  }, [_c("div", {
    staticClass: "box-header with-border"
  }, [_c("h3", {
    staticClass: "box-title"
  }, [_vm._v("\n                        " + _vm._s(_vm.$t("firefly.submission_options")) + "\n                    ")])]), _vm._v(" "), _c("div", {
    staticClass: "box-body"
  }, [_c("div", {
    staticClass: "checkbox"
  }, [_c("label", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applyRules,
      expression: "applyRules"
    }],
    attrs: {
      name: "apply_rules",
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.applyRules) ? _vm._i(_vm.applyRules, null) > -1 : _vm.applyRules
    },
    on: {
      change: function change($event) {
        var $$a = _vm.applyRules,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.applyRules = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.applyRules = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.applyRules = $$c;
        }
      }
    }
  }), _vm._v("\n                            " + _vm._s(_vm.$t("firefly.apply_rules_checkbox")) + "\n                        ")])]), _vm._v(" "), _c("div", {
    staticClass: "checkbox"
  }, [_c("label", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.fireWebhooks,
      expression: "fireWebhooks"
    }],
    attrs: {
      name: "fire_webhooks",
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.fireWebhooks) ? _vm._i(_vm.fireWebhooks, null) > -1 : _vm.fireWebhooks
    },
    on: {
      change: function change($event) {
        var $$a = _vm.fireWebhooks,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.fireWebhooks = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.fireWebhooks = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.fireWebhooks = $$c;
        }
      }
    }
  }), _vm._v("\n                            " + _vm._s(_vm.$t("firefly.fire_webhooks_checkbox")) + "\n\n                        ")])])])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/ForeignAmountSelect.vue?vue&type=template&id=c4b5d0b6":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/ForeignAmountSelect.vue?vue&type=template&id=c4b5d0b6 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return this.enabledCurrencies.length >= 1 ? _c("div", {
    staticClass: "form-group",
    "class": {
      "has-error": _vm.hasError()
    }
  }, [_c("div", {
    staticClass: "col-sm-8 col-sm-offset-4 text-sm"
  }, [_vm._v("\n    " + _vm._s(_vm.$t("form.foreign_amount")) + "\n  ")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-4"
  }, [_c("select", {
    ref: "currency_select",
    staticClass: "form-control",
    attrs: {
      name: "foreign_currency[]"
    },
    on: {
      input: _vm.handleInput
    }
  }, _vm._l(this.enabledCurrencies, function (currency) {
    return _c("option", {
      attrs: {
        label: currency.attributes.name
      },
      domProps: {
        selected: parseInt(_vm.value.currency_id) === parseInt(currency.id),
        value: currency.id
      }
    }, [_vm._v("\n        " + _vm._s(currency.attributes.name) + "\n      ")]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-8"
  }, [_c("div", {
    staticClass: "input-group"
  }, [this.enabledCurrencies.length > 0 ? _c("input", {
    ref: "amount",
    staticClass: "form-control",
    attrs: {
      placeholder: this.title,
      title: this.title,
      autocomplete: "off",
      name: "foreign_amount[]",
      step: "any",
      type: "number"
    },
    domProps: {
      value: _vm.value.amount
    },
    on: {
      input: _vm.handleInput
    }
  }) : _vm._e(), _vm._v(" "), _c("span", {
    staticClass: "input-group-btn"
  }, [_c("button", {
    staticClass: "btn btn-default",
    attrs: {
      tabIndex: "-1",
      type: "button"
    },
    on: {
      click: _vm.clearAmount
    }
  }, [_c("i", {
    staticClass: "fa fa-trash-o"
  })])])]), _vm._v(" "), _vm._l(this.error, function (error) {
    return _c("ul", {
      staticClass: "list-unstyled"
    }, [_c("li", {
      staticClass: "text-danger"
    }, [_vm._v(_vm._s(error))])]);
  })], 2)]) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/GroupDescription.vue?vue&type=template&id=7425a390":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/GroupDescription.vue?vue&type=template&id=7425a390 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group",
    "class": {
      "has-error": _vm.hasError()
    }
  }, [_c("div", {
    staticClass: "col-sm-12 text-sm"
  }, [_vm._v("\n    " + _vm._s(_vm.$t("firefly.split_transaction_title")) + "\n  ")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-12"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    ref: "descr",
    staticClass: "form-control",
    attrs: {
      spellcheck: "false",
      autocomplete: "off",
      name: "group_title",
      type: "text",
      placeholder: _vm.$t("firefly.split_transaction_title"),
      title: _vm.$t("firefly.split_transaction_title")
    },
    domProps: {
      value: _vm.value
    },
    on: {
      input: _vm.handleInput
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "input-group-btn"
  }, [_c("button", {
    staticClass: "btn btn-default",
    attrs: {
      tabIndex: "-1",
      type: "button"
    },
    on: {
      click: _vm.clearField
    }
  }, [_c("i", {
    staticClass: "fa fa-trash-o"
  })])])]), _vm._v(" "), _vm.error.length === 0 ? _c("p", {
    staticClass: "help-block"
  }, [_vm._v("\n      " + _vm._s(_vm.$t("firefly.split_transaction_title_help")) + "\n    ")]) : _vm._e(), _vm._v(" "), _vm._l(this.error, function (error) {
    return _c("ul", {
      staticClass: "list-unstyled"
    }, [_c("li", {
      staticClass: "text-danger"
    }, [_vm._v(_vm._s(error))])]);
  })], 2)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/PiggyBank.vue?vue&type=template&id=9d63c24e":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/PiggyBank.vue?vue&type=template&id=9d63c24e ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return typeof this.transactionType !== "undefined" ? _c("div", {
    staticClass: "form-group",
    "class": {
      "has-error": _vm.hasError()
    }
  }, [_c("div", {
    staticClass: "col-sm-12 text-sm"
  }, [_vm._v("\n    " + _vm._s(_vm.$t("firefly.piggy_bank")) + "\n\n  ")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-12"
  }, [_c("select", {
    ref: "piggy",
    staticClass: "form-control",
    attrs: {
      name: "piggy_bank[]"
    },
    on: {
      input: _vm.handleInput
    }
  }, _vm._l(this.piggies, function (option, key) {
    return _c("optgroup", {
      attrs: {
        label: key
      }
    }, _vm._l(option.piggies, function (piggy) {
      return _c("option", {
        attrs: {
          label: piggy.name_with_balance
        },
        domProps: {
          value: piggy.id
        }
      }, [_vm._v("\n          " + _vm._s(piggy.name_with_balance) + "\n        ")]);
    }), 0);
  }), 0), _vm._v(" "), _vm._l(this.error, function (error) {
    return _c("ul", {
      staticClass: "list-unstyled"
    }, [_c("li", {
      staticClass: "text-danger"
    }, [_vm._v(_vm._s(error))])]);
  })], 2)]) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/StandardDate.vue?vue&type=template&id=73fe3e1e":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/StandardDate.vue?vue&type=template&id=73fe3e1e ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group",
    "class": {
      "has-error": _vm.hasError()
    }
  }, [_c("div", {
    staticClass: "col-sm-12 text-sm"
  }, [_vm._v("\n    " + _vm._s(_vm.$t("firefly.date")) + "\n  ")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-12"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    ref: "date",
    staticClass: "form-control",
    attrs: {
      disabled: _vm.index > 0,
      autocomplete: "off",
      name: "date[]",
      type: "datetime-local",
      placeholder: _vm.$t("firefly.date"),
      title: _vm.$t("firefly.date")
    },
    domProps: {
      value: _vm.value
    },
    on: {
      input: _vm.handleInput
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "input-group-btn"
  }, [_c("button", {
    staticClass: "btn btn-default",
    attrs: {
      tabIndex: "-1",
      type: "button"
    },
    on: {
      click: _vm.clearDate
    }
  }, [_c("i", {
    staticClass: "fa fa-trash-o"
  })])])]), _vm._v(" "), _vm._l(this.error, function (error) {
    return _c("ul", {
      staticClass: "list-unstyled"
    }, [_c("li", {
      staticClass: "text-danger"
    }, [_vm._v(_vm._s(error))])]);
  })], 2)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/Tags.vue?vue&type=template&id=25b60a2c":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/Tags.vue?vue&type=template&id=25b60a2c ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group",
    "class": {
      "has-error": _vm.hasError()
    }
  }, [_c("div", {
    staticClass: "col-sm-12 text-sm"
  }, [_vm._v("\n    " + _vm._s(_vm.$t("firefly.tags")) + "\n  ")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-12"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("vue-tags-input", {
    staticClass: "force-background-tags-input",
    attrs: {
      "add-only-from-autocomplete": false,
      "autocomplete-items": _vm.autocompleteItems,
      tags: _vm.tags,
      title: _vm.$t("firefly.tags"),
      placeholder: _vm.$t("firefly.tags")
    },
    on: {
      "tags-changed": _vm.update
    },
    model: {
      value: _vm.tag,
      callback: function callback($$v) {
        _vm.tag = $$v;
      },
      expression: "tag"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "input-group-btn"
  }, [_c("button", {
    staticClass: "btn btn-default",
    attrs: {
      tabIndex: "-1",
      type: "button"
    },
    on: {
      click: _vm.clearTags
    }
  }, [_c("i", {
    staticClass: "fa fa-trash-o"
  })])])], 1)]), _vm._v(" "), _vm._l(this.error, function (error) {
    return _c("ul", {
      staticClass: "list-unstyled"
    }, [_c("li", {
      staticClass: "text-danger"
    }, [_vm._v(_vm._s(error))])]);
  })], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/TransactionDescription.vue?vue&type=template&id=540cd511":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/TransactionDescription.vue?vue&type=template&id=540cd511 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group",
    "class": {
      "has-error": _vm.hasError()
    }
  }, [_c("div", {
    staticClass: "col-sm-12 text-sm"
  }, [_vm._v("\n    " + _vm._s(_vm.$t("firefly.description")) + "\n  ")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-12"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    ref: "descr",
    staticClass: "form-control",
    attrs: {
      spellcheck: "false",
      title: _vm.$t("firefly.description"),
      autocomplete: "off",
      name: "description[]",
      type: "text",
      placeholder: _vm.$t("firefly.description")
    },
    domProps: {
      value: _vm.value
    },
    on: {
      input: _vm.handleInput,
      keypress: _vm.handleEnter,
      submit: function submit($event) {
        $event.preventDefault();
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "input-group-btn"
  }, [_c("button", {
    staticClass: "btn btn-default",
    attrs: {
      tabIndex: "-1",
      type: "button"
    },
    on: {
      click: _vm.clearDescription
    }
  }, [_c("i", {
    staticClass: "fa fa-trash-o"
  })])])]), _vm._v(" "), _c("typeahead", {
    attrs: {
      "async-function": _vm.aSyncFunction,
      "open-on-empty": true,
      "open-on-focus": true,
      target: _vm.target,
      "item-key": "description"
    },
    on: {
      input: _vm.selectedItem
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function fn(props) {
        return _vm._l(props.items, function (item, index) {
          return _c("li", {
            "class": {
              active: props.activeIndex === index
            }
          }, [_c("a", {
            attrs: {
              role: "button"
            },
            on: {
              click: function click($event) {
                return props.select(item);
              }
            }
          }, [_c("span", {
            domProps: {
              innerHTML: _vm._s(_vm.betterHighlight(item))
            }
          })])]);
        });
      }
    }]),
    model: {
      value: _vm.name,
      callback: function callback($$v) {
        _vm.name = $$v;
      },
      expression: "name"
    }
  }), _vm._v(" "), _vm._l(this.error, function (error) {
    return _c("ul", {
      staticClass: "list-unstyled"
    }, [_c("li", {
      staticClass: "text-danger"
    }, [_vm._v(_vm._s(error))])]);
  })], 2)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/TransactionType.vue?vue&type=template&id=3f0e7af5":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/TransactionType.vue?vue&type=template&id=3f0e7af5 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group"
  }, [_c("div", {
    staticClass: "col-sm-12"
  }, [_vm.sentence !== "" ? _c("label", {
    staticClass: "control-label text-info"
  }, [_vm._v("\n      " + _vm._s(_vm.sentence) + "\n    ")]) : _vm._e()])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/assets/js/bootstrap.js":
/*!******************************************!*\
  !*** ./resources/assets/js/bootstrap.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/*
 * bootstrap.js
 * Copyright (c) 2019 james@firefly-iii.org
 *
 * This file is part of Firefly III (https://github.com/firefly-iii).
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

/*
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');
if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/***/ }),

/***/ "./resources/assets/js/i18n.js":
/*!*************************************!*\
  !*** ./resources/assets/js/i18n.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
 * i18n.js
 * Copyright (c) 2020 james@firefly-iii.org
 *
 * This file is part of Firefly III (https://github.com/firefly-iii).
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

// Create VueI18n instance with options
module.exports = new vuei18n({
  locale: document.documentElement.lang,
  // set locale
  fallbackLocale: 'en',
  messages: {
    'bg': __webpack_require__(/*! ./locales/bg.json */ "./resources/assets/js/locales/bg.json"),
    'ca-es': __webpack_require__(/*! ./locales/ca.json */ "./resources/assets/js/locales/ca.json"),
    'cs': __webpack_require__(/*! ./locales/cs.json */ "./resources/assets/js/locales/cs.json"),
    'da': __webpack_require__(/*! ./locales/da.json */ "./resources/assets/js/locales/da.json"),
    'de': __webpack_require__(/*! ./locales/de.json */ "./resources/assets/js/locales/de.json"),
    'el': __webpack_require__(/*! ./locales/el.json */ "./resources/assets/js/locales/el.json"),
    'en': __webpack_require__(/*! ./locales/en.json */ "./resources/assets/js/locales/en.json"),
    'en-us': __webpack_require__(/*! ./locales/en.json */ "./resources/assets/js/locales/en.json"),
    'en-gb': __webpack_require__(/*! ./locales/en-gb.json */ "./resources/assets/js/locales/en-gb.json"),
    'es': __webpack_require__(/*! ./locales/es.json */ "./resources/assets/js/locales/es.json"),
    'fi': __webpack_require__(/*! ./locales/fi.json */ "./resources/assets/js/locales/fi.json"),
    'fr': __webpack_require__(/*! ./locales/fr.json */ "./resources/assets/js/locales/fr.json"),
    'hu': __webpack_require__(/*! ./locales/hu.json */ "./resources/assets/js/locales/hu.json"),
    'id': __webpack_require__(/*! ./locales/id.json */ "./resources/assets/js/locales/id.json"),
    'it': __webpack_require__(/*! ./locales/it.json */ "./resources/assets/js/locales/it.json"),
    'ja': __webpack_require__(/*! ./locales/ja.json */ "./resources/assets/js/locales/ja.json"),
    'ko': __webpack_require__(/*! ./locales/ko.json */ "./resources/assets/js/locales/ko.json"),
    'nb': __webpack_require__(/*! ./locales/nb.json */ "./resources/assets/js/locales/nb.json"),
    'nl': __webpack_require__(/*! ./locales/nl.json */ "./resources/assets/js/locales/nl.json"),
    'nn': __webpack_require__(/*! ./locales/nn.json */ "./resources/assets/js/locales/nn.json"),
    'pl': __webpack_require__(/*! ./locales/pl.json */ "./resources/assets/js/locales/pl.json"),
    'pt-br': __webpack_require__(/*! ./locales/pt-br.json */ "./resources/assets/js/locales/pt-br.json"),
    'pt-pt': __webpack_require__(/*! ./locales/pt.json */ "./resources/assets/js/locales/pt.json"),
    'pt': __webpack_require__(/*! ./locales/pt.json */ "./resources/assets/js/locales/pt.json"),
    'ro': __webpack_require__(/*! ./locales/ro.json */ "./resources/assets/js/locales/ro.json"),
    'ru': __webpack_require__(/*! ./locales/ru.json */ "./resources/assets/js/locales/ru.json"),
    'sk': __webpack_require__(/*! ./locales/sk.json */ "./resources/assets/js/locales/sk.json"),
    'sl': __webpack_require__(/*! ./locales/sl.json */ "./resources/assets/js/locales/sl.json"),
    'sr': __webpack_require__(/*! ./locales/sl.json */ "./resources/assets/js/locales/sl.json"),
    'sv': __webpack_require__(/*! ./locales/sv.json */ "./resources/assets/js/locales/sv.json"),
    'tr': __webpack_require__(/*! ./locales/tr.json */ "./resources/assets/js/locales/tr.json"),
    'uk': __webpack_require__(/*! ./locales/uk.json */ "./resources/assets/js/locales/uk.json"),
    'vi': __webpack_require__(/*! ./locales/vi.json */ "./resources/assets/js/locales/vi.json"),
    'zh': __webpack_require__(/*! ./locales/zh-cn.json */ "./resources/assets/js/locales/zh-cn.json"),
    'zh-tw': __webpack_require__(/*! ./locales/zh-tw.json */ "./resources/assets/js/locales/zh-tw.json"),
    'zh-cn': __webpack_require__(/*! ./locales/zh-cn.json */ "./resources/assets/js/locales/zh-cn.json")
  }
});

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./resources/assets/js/components/transactions/AccountSelect.vue":
/*!***********************************************************************!*\
  !*** ./resources/assets/js/components/transactions/AccountSelect.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AccountSelect_vue_vue_type_template_id_be9f63f4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountSelect.vue?vue&type=template&id=be9f63f4 */ "./resources/assets/js/components/transactions/AccountSelect.vue?vue&type=template&id=be9f63f4");
/* harmony import */ var _AccountSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountSelect.vue?vue&type=script&lang=js */ "./resources/assets/js/components/transactions/AccountSelect.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccountSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountSelect_vue_vue_type_template_id_be9f63f4__WEBPACK_IMPORTED_MODULE_0__.render,
  _AccountSelect_vue_vue_type_template_id_be9f63f4__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/transactions/AccountSelect.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/transactions/Amount.vue":
/*!****************************************************************!*\
  !*** ./resources/assets/js/components/transactions/Amount.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Amount_vue_vue_type_template_id_77eddc2b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Amount.vue?vue&type=template&id=77eddc2b */ "./resources/assets/js/components/transactions/Amount.vue?vue&type=template&id=77eddc2b");
/* harmony import */ var _Amount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Amount.vue?vue&type=script&lang=js */ "./resources/assets/js/components/transactions/Amount.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Amount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Amount_vue_vue_type_template_id_77eddc2b__WEBPACK_IMPORTED_MODULE_0__.render,
  _Amount_vue_vue_type_template_id_77eddc2b__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/transactions/Amount.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/transactions/Bill.vue":
/*!**************************************************************!*\
  !*** ./resources/assets/js/components/transactions/Bill.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Bill_vue_vue_type_template_id_f18f59cc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bill.vue?vue&type=template&id=f18f59cc */ "./resources/assets/js/components/transactions/Bill.vue?vue&type=template&id=f18f59cc");
/* harmony import */ var _Bill_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bill.vue?vue&type=script&lang=js */ "./resources/assets/js/components/transactions/Bill.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Bill_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Bill_vue_vue_type_template_id_f18f59cc__WEBPACK_IMPORTED_MODULE_0__.render,
  _Bill_vue_vue_type_template_id_f18f59cc__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/transactions/Bill.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/transactions/Budget.vue":
/*!****************************************************************!*\
  !*** ./resources/assets/js/components/transactions/Budget.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Budget_vue_vue_type_template_id_b88a06d0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Budget.vue?vue&type=template&id=b88a06d0 */ "./resources/assets/js/components/transactions/Budget.vue?vue&type=template&id=b88a06d0");
/* harmony import */ var _Budget_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Budget.vue?vue&type=script&lang=js */ "./resources/assets/js/components/transactions/Budget.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Budget_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Budget_vue_vue_type_template_id_b88a06d0__WEBPACK_IMPORTED_MODULE_0__.render,
  _Budget_vue_vue_type_template_id_b88a06d0__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/transactions/Budget.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/transactions/Category.vue":
/*!******************************************************************!*\
  !*** ./resources/assets/js/components/transactions/Category.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Category_vue_vue_type_template_id_5e272311__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Category.vue?vue&type=template&id=5e272311 */ "./resources/assets/js/components/transactions/Category.vue?vue&type=template&id=5e272311");
/* harmony import */ var _Category_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Category.vue?vue&type=script&lang=js */ "./resources/assets/js/components/transactions/Category.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Category_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Category_vue_vue_type_template_id_5e272311__WEBPACK_IMPORTED_MODULE_0__.render,
  _Category_vue_vue_type_template_id_5e272311__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/transactions/Category.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/transactions/CustomAttachments.vue":
/*!***************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/CustomAttachments.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomAttachments_vue_vue_type_template_id_75bc1a7c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomAttachments.vue?vue&type=template&id=75bc1a7c */ "./resources/assets/js/components/transactions/CustomAttachments.vue?vue&type=template&id=75bc1a7c");
/* harmony import */ var _CustomAttachments_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomAttachments.vue?vue&type=script&lang=js */ "./resources/assets/js/components/transactions/CustomAttachments.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomAttachments_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomAttachments_vue_vue_type_template_id_75bc1a7c__WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomAttachments_vue_vue_type_template_id_75bc1a7c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/transactions/CustomAttachments.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/transactions/CustomDate.vue":
/*!********************************************************************!*\
  !*** ./resources/assets/js/components/transactions/CustomDate.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomDate_vue_vue_type_template_id_14f6b992__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomDate.vue?vue&type=template&id=14f6b992 */ "./resources/assets/js/components/transactions/CustomDate.vue?vue&type=template&id=14f6b992");
/* harmony import */ var _CustomDate_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomDate.vue?vue&type=script&lang=js */ "./resources/assets/js/components/transactions/CustomDate.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomDate_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomDate_vue_vue_type_template_id_14f6b992__WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomDate_vue_vue_type_template_id_14f6b992__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/transactions/CustomDate.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/transactions/CustomString.vue":
/*!**********************************************************************!*\
  !*** ./resources/assets/js/components/transactions/CustomString.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomString_vue_vue_type_template_id_73a9dd75__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomString.vue?vue&type=template&id=73a9dd75 */ "./resources/assets/js/components/transactions/CustomString.vue?vue&type=template&id=73a9dd75");
/* harmony import */ var _CustomString_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomString.vue?vue&type=script&lang=js */ "./resources/assets/js/components/transactions/CustomString.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomString_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomString_vue_vue_type_template_id_73a9dd75__WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomString_vue_vue_type_template_id_73a9dd75__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/transactions/CustomString.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/transactions/CustomTextarea.vue":
/*!************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/CustomTextarea.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomTextarea_vue_vue_type_template_id_18b655c4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomTextarea.vue?vue&type=template&id=18b655c4 */ "./resources/assets/js/components/transactions/CustomTextarea.vue?vue&type=template&id=18b655c4");
/* harmony import */ var _CustomTextarea_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomTextarea.vue?vue&type=script&lang=js */ "./resources/assets/js/components/transactions/CustomTextarea.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomTextarea_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomTextarea_vue_vue_type_template_id_18b655c4__WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomTextarea_vue_vue_type_template_id_18b655c4__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/transactions/CustomTextarea.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/transactions/CustomTransactionFields.vue":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/CustomTransactionFields.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomTransactionFields_vue_vue_type_template_id_0f4148fa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomTransactionFields.vue?vue&type=template&id=0f4148fa */ "./resources/assets/js/components/transactions/CustomTransactionFields.vue?vue&type=template&id=0f4148fa");
/* harmony import */ var _CustomTransactionFields_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomTransactionFields.vue?vue&type=script&lang=js */ "./resources/assets/js/components/transactions/CustomTransactionFields.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomTransactionFields_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomTransactionFields_vue_vue_type_template_id_0f4148fa__WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomTransactionFields_vue_vue_type_template_id_0f4148fa__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/transactions/CustomTransactionFields.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/transactions/CustomUri.vue":
/*!*******************************************************************!*\
  !*** ./resources/assets/js/components/transactions/CustomUri.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomUri_vue_vue_type_template_id_f0ff6b90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomUri.vue?vue&type=template&id=f0ff6b90 */ "./resources/assets/js/components/transactions/CustomUri.vue?vue&type=template&id=f0ff6b90");
/* harmony import */ var _CustomUri_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomUri.vue?vue&type=script&lang=js */ "./resources/assets/js/components/transactions/CustomUri.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomUri_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomUri_vue_vue_type_template_id_f0ff6b90__WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomUri_vue_vue_type_template_id_f0ff6b90__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/transactions/CustomUri.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/transactions/EditTransaction.vue":
/*!*************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/EditTransaction.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditTransaction_vue_vue_type_template_id_16510831__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditTransaction.vue?vue&type=template&id=16510831 */ "./resources/assets/js/components/transactions/EditTransaction.vue?vue&type=template&id=16510831");
/* harmony import */ var _EditTransaction_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditTransaction.vue?vue&type=script&lang=js */ "./resources/assets/js/components/transactions/EditTransaction.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditTransaction_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditTransaction_vue_vue_type_template_id_16510831__WEBPACK_IMPORTED_MODULE_0__.render,
  _EditTransaction_vue_vue_type_template_id_16510831__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/transactions/EditTransaction.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/transactions/ForeignAmountSelect.vue":
/*!*****************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/ForeignAmountSelect.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ForeignAmountSelect_vue_vue_type_template_id_c4b5d0b6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForeignAmountSelect.vue?vue&type=template&id=c4b5d0b6 */ "./resources/assets/js/components/transactions/ForeignAmountSelect.vue?vue&type=template&id=c4b5d0b6");
/* harmony import */ var _ForeignAmountSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForeignAmountSelect.vue?vue&type=script&lang=js */ "./resources/assets/js/components/transactions/ForeignAmountSelect.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ForeignAmountSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ForeignAmountSelect_vue_vue_type_template_id_c4b5d0b6__WEBPACK_IMPORTED_MODULE_0__.render,
  _ForeignAmountSelect_vue_vue_type_template_id_c4b5d0b6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/transactions/ForeignAmountSelect.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/transactions/GroupDescription.vue":
/*!**************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/GroupDescription.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GroupDescription_vue_vue_type_template_id_7425a390__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GroupDescription.vue?vue&type=template&id=7425a390 */ "./resources/assets/js/components/transactions/GroupDescription.vue?vue&type=template&id=7425a390");
/* harmony import */ var _GroupDescription_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupDescription.vue?vue&type=script&lang=js */ "./resources/assets/js/components/transactions/GroupDescription.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GroupDescription_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _GroupDescription_vue_vue_type_template_id_7425a390__WEBPACK_IMPORTED_MODULE_0__.render,
  _GroupDescription_vue_vue_type_template_id_7425a390__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/transactions/GroupDescription.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/transactions/PiggyBank.vue":
/*!*******************************************************************!*\
  !*** ./resources/assets/js/components/transactions/PiggyBank.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PiggyBank_vue_vue_type_template_id_9d63c24e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PiggyBank.vue?vue&type=template&id=9d63c24e */ "./resources/assets/js/components/transactions/PiggyBank.vue?vue&type=template&id=9d63c24e");
/* harmony import */ var _PiggyBank_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PiggyBank.vue?vue&type=script&lang=js */ "./resources/assets/js/components/transactions/PiggyBank.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PiggyBank_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PiggyBank_vue_vue_type_template_id_9d63c24e__WEBPACK_IMPORTED_MODULE_0__.render,
  _PiggyBank_vue_vue_type_template_id_9d63c24e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/transactions/PiggyBank.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/transactions/StandardDate.vue":
/*!**********************************************************************!*\
  !*** ./resources/assets/js/components/transactions/StandardDate.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StandardDate_vue_vue_type_template_id_73fe3e1e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StandardDate.vue?vue&type=template&id=73fe3e1e */ "./resources/assets/js/components/transactions/StandardDate.vue?vue&type=template&id=73fe3e1e");
/* harmony import */ var _StandardDate_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StandardDate.vue?vue&type=script&lang=js */ "./resources/assets/js/components/transactions/StandardDate.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StandardDate_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _StandardDate_vue_vue_type_template_id_73fe3e1e__WEBPACK_IMPORTED_MODULE_0__.render,
  _StandardDate_vue_vue_type_template_id_73fe3e1e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/transactions/StandardDate.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/transactions/Tags.vue":
/*!**************************************************************!*\
  !*** ./resources/assets/js/components/transactions/Tags.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tags_vue_vue_type_template_id_25b60a2c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tags.vue?vue&type=template&id=25b60a2c */ "./resources/assets/js/components/transactions/Tags.vue?vue&type=template&id=25b60a2c");
/* harmony import */ var _Tags_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tags.vue?vue&type=script&lang=js */ "./resources/assets/js/components/transactions/Tags.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tags_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tags_vue_vue_type_template_id_25b60a2c__WEBPACK_IMPORTED_MODULE_0__.render,
  _Tags_vue_vue_type_template_id_25b60a2c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/transactions/Tags.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/transactions/TransactionDescription.vue":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/TransactionDescription.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TransactionDescription_vue_vue_type_template_id_540cd511__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TransactionDescription.vue?vue&type=template&id=540cd511 */ "./resources/assets/js/components/transactions/TransactionDescription.vue?vue&type=template&id=540cd511");
/* harmony import */ var _TransactionDescription_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransactionDescription.vue?vue&type=script&lang=js */ "./resources/assets/js/components/transactions/TransactionDescription.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TransactionDescription_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TransactionDescription_vue_vue_type_template_id_540cd511__WEBPACK_IMPORTED_MODULE_0__.render,
  _TransactionDescription_vue_vue_type_template_id_540cd511__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/transactions/TransactionDescription.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/transactions/TransactionType.vue":
/*!*************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/TransactionType.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TransactionType_vue_vue_type_template_id_3f0e7af5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TransactionType.vue?vue&type=template&id=3f0e7af5 */ "./resources/assets/js/components/transactions/TransactionType.vue?vue&type=template&id=3f0e7af5");
/* harmony import */ var _TransactionType_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransactionType.vue?vue&type=script&lang=js */ "./resources/assets/js/components/transactions/TransactionType.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TransactionType_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TransactionType_vue_vue_type_template_id_3f0e7af5__WEBPACK_IMPORTED_MODULE_0__.render,
  _TransactionType_vue_vue_type_template_id_3f0e7af5__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/transactions/TransactionType.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/transactions/AccountSelect.vue?vue&type=script&lang=js":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/AccountSelect.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AccountSelect.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/AccountSelect.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/transactions/Amount.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/Amount.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Amount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Amount.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/Amount.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Amount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/transactions/Bill.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/Bill.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bill_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Bill.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/Bill.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bill_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/transactions/Budget.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/Budget.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Budget_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Budget.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/Budget.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Budget_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/transactions/Category.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/Category.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Category.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/Category.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/transactions/CustomAttachments.vue?vue&type=script&lang=js":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/CustomAttachments.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomAttachments_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomAttachments.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/CustomAttachments.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomAttachments_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/transactions/CustomDate.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/CustomDate.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomDate_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomDate.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/CustomDate.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomDate_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/transactions/CustomString.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/CustomString.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomString_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomString.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/CustomString.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomString_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/transactions/CustomTextarea.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/CustomTextarea.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomTextarea_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomTextarea.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/CustomTextarea.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomTextarea_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/transactions/CustomTransactionFields.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/CustomTransactionFields.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomTransactionFields_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomTransactionFields.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/CustomTransactionFields.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomTransactionFields_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/transactions/CustomUri.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/CustomUri.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomUri_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomUri.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/CustomUri.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomUri_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/transactions/EditTransaction.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/EditTransaction.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditTransaction_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditTransaction.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/EditTransaction.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditTransaction_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/transactions/ForeignAmountSelect.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/ForeignAmountSelect.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForeignAmountSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ForeignAmountSelect.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/ForeignAmountSelect.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForeignAmountSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/transactions/GroupDescription.vue?vue&type=script&lang=js":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/GroupDescription.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupDescription_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GroupDescription.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/GroupDescription.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupDescription_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/transactions/PiggyBank.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/PiggyBank.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PiggyBank_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PiggyBank.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/PiggyBank.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PiggyBank_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/transactions/StandardDate.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/StandardDate.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StandardDate_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StandardDate.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/StandardDate.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StandardDate_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/transactions/Tags.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/Tags.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tags_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tags.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/Tags.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tags_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/transactions/TransactionDescription.vue?vue&type=script&lang=js":
/*!********************************************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/TransactionDescription.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionDescription_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TransactionDescription.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/TransactionDescription.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionDescription_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/transactions/TransactionType.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/TransactionType.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionType_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TransactionType.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/TransactionType.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionType_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/transactions/AccountSelect.vue?vue&type=template&id=be9f63f4":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/AccountSelect.vue?vue&type=template&id=be9f63f4 ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSelect_vue_vue_type_template_id_be9f63f4__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSelect_vue_vue_type_template_id_be9f63f4__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSelect_vue_vue_type_template_id_be9f63f4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AccountSelect.vue?vue&type=template&id=be9f63f4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/AccountSelect.vue?vue&type=template&id=be9f63f4");


/***/ }),

/***/ "./resources/assets/js/components/transactions/Amount.vue?vue&type=template&id=77eddc2b":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/Amount.vue?vue&type=template&id=77eddc2b ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Amount_vue_vue_type_template_id_77eddc2b__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Amount_vue_vue_type_template_id_77eddc2b__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Amount_vue_vue_type_template_id_77eddc2b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Amount.vue?vue&type=template&id=77eddc2b */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/Amount.vue?vue&type=template&id=77eddc2b");


/***/ }),

/***/ "./resources/assets/js/components/transactions/Bill.vue?vue&type=template&id=f18f59cc":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/Bill.vue?vue&type=template&id=f18f59cc ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Bill_vue_vue_type_template_id_f18f59cc__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Bill_vue_vue_type_template_id_f18f59cc__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Bill_vue_vue_type_template_id_f18f59cc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Bill.vue?vue&type=template&id=f18f59cc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/Bill.vue?vue&type=template&id=f18f59cc");


/***/ }),

/***/ "./resources/assets/js/components/transactions/Budget.vue?vue&type=template&id=b88a06d0":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/Budget.vue?vue&type=template&id=b88a06d0 ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Budget_vue_vue_type_template_id_b88a06d0__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Budget_vue_vue_type_template_id_b88a06d0__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Budget_vue_vue_type_template_id_b88a06d0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Budget.vue?vue&type=template&id=b88a06d0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/Budget.vue?vue&type=template&id=b88a06d0");


/***/ }),

/***/ "./resources/assets/js/components/transactions/Category.vue?vue&type=template&id=5e272311":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/Category.vue?vue&type=template&id=5e272311 ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_5e272311__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_5e272311__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_5e272311__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Category.vue?vue&type=template&id=5e272311 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/Category.vue?vue&type=template&id=5e272311");


/***/ }),

/***/ "./resources/assets/js/components/transactions/CustomAttachments.vue?vue&type=template&id=75bc1a7c":
/*!*********************************************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/CustomAttachments.vue?vue&type=template&id=75bc1a7c ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomAttachments_vue_vue_type_template_id_75bc1a7c__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomAttachments_vue_vue_type_template_id_75bc1a7c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomAttachments_vue_vue_type_template_id_75bc1a7c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomAttachments.vue?vue&type=template&id=75bc1a7c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/CustomAttachments.vue?vue&type=template&id=75bc1a7c");


/***/ }),

/***/ "./resources/assets/js/components/transactions/CustomDate.vue?vue&type=template&id=14f6b992":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/CustomDate.vue?vue&type=template&id=14f6b992 ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomDate_vue_vue_type_template_id_14f6b992__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomDate_vue_vue_type_template_id_14f6b992__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomDate_vue_vue_type_template_id_14f6b992__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomDate.vue?vue&type=template&id=14f6b992 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/CustomDate.vue?vue&type=template&id=14f6b992");


/***/ }),

/***/ "./resources/assets/js/components/transactions/CustomString.vue?vue&type=template&id=73a9dd75":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/CustomString.vue?vue&type=template&id=73a9dd75 ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomString_vue_vue_type_template_id_73a9dd75__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomString_vue_vue_type_template_id_73a9dd75__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomString_vue_vue_type_template_id_73a9dd75__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomString.vue?vue&type=template&id=73a9dd75 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/CustomString.vue?vue&type=template&id=73a9dd75");


/***/ }),

/***/ "./resources/assets/js/components/transactions/CustomTextarea.vue?vue&type=template&id=18b655c4":
/*!******************************************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/CustomTextarea.vue?vue&type=template&id=18b655c4 ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomTextarea_vue_vue_type_template_id_18b655c4__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomTextarea_vue_vue_type_template_id_18b655c4__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomTextarea_vue_vue_type_template_id_18b655c4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomTextarea.vue?vue&type=template&id=18b655c4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/CustomTextarea.vue?vue&type=template&id=18b655c4");


/***/ }),

/***/ "./resources/assets/js/components/transactions/CustomTransactionFields.vue?vue&type=template&id=0f4148fa":
/*!***************************************************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/CustomTransactionFields.vue?vue&type=template&id=0f4148fa ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomTransactionFields_vue_vue_type_template_id_0f4148fa__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomTransactionFields_vue_vue_type_template_id_0f4148fa__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomTransactionFields_vue_vue_type_template_id_0f4148fa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomTransactionFields.vue?vue&type=template&id=0f4148fa */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/CustomTransactionFields.vue?vue&type=template&id=0f4148fa");


/***/ }),

/***/ "./resources/assets/js/components/transactions/CustomUri.vue?vue&type=template&id=f0ff6b90":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/CustomUri.vue?vue&type=template&id=f0ff6b90 ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomUri_vue_vue_type_template_id_f0ff6b90__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomUri_vue_vue_type_template_id_f0ff6b90__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomUri_vue_vue_type_template_id_f0ff6b90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomUri.vue?vue&type=template&id=f0ff6b90 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/CustomUri.vue?vue&type=template&id=f0ff6b90");


/***/ }),

/***/ "./resources/assets/js/components/transactions/EditTransaction.vue?vue&type=template&id=16510831":
/*!*******************************************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/EditTransaction.vue?vue&type=template&id=16510831 ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditTransaction_vue_vue_type_template_id_16510831__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditTransaction_vue_vue_type_template_id_16510831__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditTransaction_vue_vue_type_template_id_16510831__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditTransaction.vue?vue&type=template&id=16510831 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/EditTransaction.vue?vue&type=template&id=16510831");


/***/ }),

/***/ "./resources/assets/js/components/transactions/ForeignAmountSelect.vue?vue&type=template&id=c4b5d0b6":
/*!***********************************************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/ForeignAmountSelect.vue?vue&type=template&id=c4b5d0b6 ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ForeignAmountSelect_vue_vue_type_template_id_c4b5d0b6__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ForeignAmountSelect_vue_vue_type_template_id_c4b5d0b6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ForeignAmountSelect_vue_vue_type_template_id_c4b5d0b6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ForeignAmountSelect.vue?vue&type=template&id=c4b5d0b6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/ForeignAmountSelect.vue?vue&type=template&id=c4b5d0b6");


/***/ }),

/***/ "./resources/assets/js/components/transactions/GroupDescription.vue?vue&type=template&id=7425a390":
/*!********************************************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/GroupDescription.vue?vue&type=template&id=7425a390 ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupDescription_vue_vue_type_template_id_7425a390__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupDescription_vue_vue_type_template_id_7425a390__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupDescription_vue_vue_type_template_id_7425a390__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GroupDescription.vue?vue&type=template&id=7425a390 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/GroupDescription.vue?vue&type=template&id=7425a390");


/***/ }),

/***/ "./resources/assets/js/components/transactions/PiggyBank.vue?vue&type=template&id=9d63c24e":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/PiggyBank.vue?vue&type=template&id=9d63c24e ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PiggyBank_vue_vue_type_template_id_9d63c24e__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PiggyBank_vue_vue_type_template_id_9d63c24e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PiggyBank_vue_vue_type_template_id_9d63c24e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PiggyBank.vue?vue&type=template&id=9d63c24e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/PiggyBank.vue?vue&type=template&id=9d63c24e");


/***/ }),

/***/ "./resources/assets/js/components/transactions/StandardDate.vue?vue&type=template&id=73fe3e1e":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/StandardDate.vue?vue&type=template&id=73fe3e1e ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StandardDate_vue_vue_type_template_id_73fe3e1e__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StandardDate_vue_vue_type_template_id_73fe3e1e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StandardDate_vue_vue_type_template_id_73fe3e1e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StandardDate.vue?vue&type=template&id=73fe3e1e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/StandardDate.vue?vue&type=template&id=73fe3e1e");


/***/ }),

/***/ "./resources/assets/js/components/transactions/Tags.vue?vue&type=template&id=25b60a2c":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/Tags.vue?vue&type=template&id=25b60a2c ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tags_vue_vue_type_template_id_25b60a2c__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tags_vue_vue_type_template_id_25b60a2c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tags_vue_vue_type_template_id_25b60a2c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tags.vue?vue&type=template&id=25b60a2c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/Tags.vue?vue&type=template&id=25b60a2c");


/***/ }),

/***/ "./resources/assets/js/components/transactions/TransactionDescription.vue?vue&type=template&id=540cd511":
/*!**************************************************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/TransactionDescription.vue?vue&type=template&id=540cd511 ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionDescription_vue_vue_type_template_id_540cd511__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionDescription_vue_vue_type_template_id_540cd511__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionDescription_vue_vue_type_template_id_540cd511__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TransactionDescription.vue?vue&type=template&id=540cd511 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/TransactionDescription.vue?vue&type=template&id=540cd511");


/***/ }),

/***/ "./resources/assets/js/components/transactions/TransactionType.vue?vue&type=template&id=3f0e7af5":
/*!*******************************************************************************************************!*\
  !*** ./resources/assets/js/components/transactions/TransactionType.vue?vue&type=template&id=3f0e7af5 ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionType_vue_vue_type_template_id_3f0e7af5__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionType_vue_vue_type_template_id_3f0e7af5__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionType_vue_vue_type_template_id_3f0e7af5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TransactionType.vue?vue&type=template&id=3f0e7af5 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/transactions/TransactionType.vue?vue&type=template&id=3f0e7af5");


/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/assets/js/locales/bg.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/bg.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"firefly":{"welcome_back":"Какво се случва?","flash_error":"Грешка!","flash_warning":"Внимание!","flash_success":"Успех!","close":"Затвори","select_dest_account":"Please select or type a valid destination account name","select_source_account":"Please select or type a valid source account name","split_transaction_title":"Описание на разделена транзакция","errors_submission":"There was something wrong with your submission. Please check out the errors below.","split":"Раздели","single_split":"Раздел","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Транзакция #{ID}(\\"{title}\\")</a> беше записана.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> has been stored.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") has been updated.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Транзакция #{ID}</a> (\\"{title}\\") беше обновена.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Транзакция #{ID}</a> беше записана.","transaction_journal_information":"Информация за транзакция","submission_options":"Submission options","apply_rules_checkbox":"Apply rules","fire_webhooks_checkbox":"Fire webhooks","no_budget_pointer":"Изглежда все още нямате бюджети. Трябва да създадете някои на страницата <a href=\\"budgets\\"> Бюджети </a>. Бюджетите могат да ви помогнат да следите разходите си.","no_bill_pointer":"Изглежда все още нямате сметки. Трябва да създадете някои на страницата <a href=\\"bills\\"> Сметки </a>. Сметките могат да ви помогнат да следите разходите си.","source_account":"Разходна сметка","hidden_fields_preferences":"Можете да активирате повече опции за транзакции във вашите <a href=\\"preferences\\">настройки</a>.","destination_account":"Приходна сметка","add_another_split":"Добавяне на друг раздел","submission":"Изпращане","stored_journal":"Успешно създадена нова транзакция \\":description\\"","create_another":"След съхраняването се върнете тук, за да създадете нова.","reset_after":"Изчистване на формуляра след изпращане","submit":"Потвърди","amount":"Сума","date":"Дата","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Етикети","no_budget":"(без бюджет)","no_bill":"(няма сметка)","category":"Категория","attachments":"Прикачени файлове","notes":"Бележки","external_url":"Външен URL адрес","update_transaction":"Обнови транзакцията","after_update_create_another":"След обновяването се върнете тук, за да продължите с редакцията.","store_as_new":"Съхранете като нова транзакция, вместо да я актуализирате.","split_title_help":"Ако създадете разделена транзакция, трябва да има глобално описание за всички раздели на транзакцията.","none_in_select_list":"(нищо)","no_piggy_bank":"(без касичка)","description":"Описание","split_transaction_title_help":"Ако създадете разделена транзакция, трябва да има глобално описание за всички раздели на транзакцията.","destination_account_reconciliation":"Не може да редактирате приходната сметка на транзакция за съгласуване.","source_account_reconciliation":"Не може да редактирате разходната сметка на транзакция за съгласуване.","budget":"Бюджет","bill":"Сметка","you_create_withdrawal":"Създавате теглене.","you_create_transfer":"Създавате прехвърляне.","you_create_deposit":"Създавате депозит.","edit":"Промени","delete":"Изтрий","name":"Име","profile_whoops":"Опаааа!","profile_something_wrong":"Нещо се обърка!","profile_try_again":"Нещо се обърка. Моля, опитайте отново.","profile_oauth_clients":"OAuth клиенти","profile_oauth_no_clients":"Не сте създали клиенти на OAuth.","profile_oauth_clients_header":"Клиенти","profile_oauth_client_id":"ИД (ID) на клиент","profile_oauth_client_name":"Име","profile_oauth_client_secret":"Тайна","profile_oauth_create_new_client":"Създай нов клиент","profile_oauth_create_client":"Създай клиент","profile_oauth_edit_client":"Редактирай клиент","profile_oauth_name_help":"Нещо, което вашите потребители ще разпознаят и ще се доверят.","profile_oauth_redirect_url":"Линк на препратката","profile_oauth_clients_external_auth":"If you\'re using an external authentication provider like Authelia, OAuth Clients will not work. You can use Personal Access Tokens only.","profile_oauth_redirect_url_help":"URL адрес за обратно извикване на оторизацията на вашето приложение.","profile_authorized_apps":"Удостоверени приложения","profile_authorized_clients":"Удостоверени клиенти","profile_scopes":"Сфери","profile_revoke":"Анулирай","profile_personal_access_tokens":"Персонални маркери за достъп","profile_personal_access_token":"Персонален маркер за достъп","profile_personal_access_token_explanation":"Това е новия ви персонален маркер за достъп. Това е единственият път, когато ще бъде показан, така че не го губете! Вече можете да използвате този маркер, за да отправяте заявки към API.","profile_no_personal_access_token":"Не сте създали никакви лични маркери за достъп.","profile_create_new_token":"Създай нов маркер","profile_create_token":"Създай маркер","profile_create":"Създай","profile_save_changes":"Запазване на промените","default_group_title_name":"(без група)","piggy_bank":"Касичка","profile_oauth_client_secret_title":"Тайна на клиента","profile_oauth_client_secret_expl":"Това е новата ви \\"тайна на клиента\\". Това е единственият път, когато ще бъде показана, така че не го губете! Вече можете да използвате този маркер, за да отправяте заявки към API.","profile_oauth_confidential":"Поверително","profile_oauth_confidential_help":"Изисквайте клиента да се удостоверява с тайна. Поверителните клиенти могат да притежават идентификационни данни по защитен начин, без да ги излагат на неоторизирани страни. Публичните приложения, като например десктопа или JavaScript SPA приложения, не могат да пазят тайни по сигурен начин.","multi_account_warning_unknown":"В зависимост от вида на транзакцията която създавате, източникът и / или целевата сметка на следващите разделяния може да бъде променена от това което е дефинирано в първото разделение на транзакцията.","multi_account_warning_withdrawal":"Имайте предвид, че разходна сметка на следващите разделяния ще бъде тази която е дефинирана в първия раздел на тегленето.","multi_account_warning_deposit":"Имайте предвид, че приходната сметка на следващите разделяния ще бъде тази която е дефинирана в първия раздел на депозита.","multi_account_warning_transfer":"Имайте предвид, че приходната + разходната сметка на следващите разделяния ще бъде тази която е дефинирана в първия раздел на прехвърлянето.","webhook_trigger_STORE_TRANSACTION":"After transaction creation","webhook_trigger_UPDATE_TRANSACTION":"After transaction update","webhook_trigger_DESTROY_TRANSACTION":"After transaction delete","webhook_response_TRANSACTIONS":"Transaction details","webhook_response_ACCOUNTS":"Account details","webhook_response_none_NONE":"No details","webhook_delivery_JSON":"JSON","actions":"Действия","meta_data":"Мета данни","webhook_messages":"Webhook message","inactive":"Неактивно","no_webhook_messages":"There are no webhook messages","inspect":"Inspect","create_new_webhook":"Create new webhook","webhooks":"Webhooks","webhook_trigger_form_help":"Indicate on what event the webhook will trigger","webhook_response_form_help":"Indicate what the webhook must submit to the URL.","webhook_delivery_form_help":"Which format the webhook must deliver data in.","webhook_active_form_help":"The webhook must be active or it won\'t be called.","edit_webhook_js":"Edit webhook \\"{title}\\"","webhook_was_triggered":"The webhook was triggered on the indicated transaction. Please wait for results to appear.","view_message":"View message","view_attempts":"View failed attempts","message_content_title":"Webhook message content","message_content_help":"This is the content of the message that was sent (or tried) using this webhook.","attempt_content_title":"Webhook attempts","attempt_content_help":"These are all the unsuccessful attempts of this webhook message to submit to the configured URL. After some time, Firefly III will stop trying.","no_attempts":"There are no unsuccessful attempts. That\'s a good thing!","webhook_attempt_at":"Attempt at {moment}","logs":"Logs","response":"Response","visit_webhook_url":"Visit webhook URL","reset_webhook_secret":"Reset webhook secret"},"form":{"url":"URL","active":"Активен","interest_date":"Падеж на лихва","title":"Заглавие","book_date":"Дата на осчетоводяване","process_date":"Дата на обработка","due_date":"Дата на падеж","foreign_amount":"Сума във валута","payment_date":"Дата на плащане","invoice_date":"Дата на фактура","internal_reference":"Вътрешна референция","webhook_response":"Response","webhook_trigger":"Trigger","webhook_delivery":"Delivery"},"list":{"active":"Активен ли е?","trigger":"Задействане","response":"Отговор","delivery":"Delivery","url":"URL адрес","secret":"Тайна"},"config":{"html_language":"bg","date_time_fns":"MMMM do, yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/ca.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/ca.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"firefly":{"welcome_back":"Què està passant?","flash_error":"Error!","flash_warning":"Atenció!","flash_success":"Èxit!","close":"Tancar","select_dest_account":"Please select or type a valid destination account name","select_source_account":"Please select or type a valid source account name","split_transaction_title":"Descripció de la transacció dividida","errors_submission":"Hi ha hagut un error amb el teu enviament. Per favor, revisa els errors de sota.","split":"Dividir","single_split":"Divisió","transaction_stored_link":"La <a href=\\"transactions/show/{ID}\\">Transacció #{ID} (\\"{title}\\")</a> s\'ha desat.","webhook_stored_link":"S\'ha desat <a href=\\"webhooks/show/{ID}\\">el Webook #{ID} (\\"{title}\\")</a> correctament.","webhook_updated_link":"S\'ha actualitzat el <a href=\\"webhooks/show/{ID}\\">Webook #{ID}</a> (\\"{title}\\").","transaction_updated_link":"La <a href=\\"transactions/show/{ID}\\">transacció#{ID}</a> (\\"{title}\\") s\'ha actualitzat.","transaction_new_stored_link":"La <a href=\\"transactions/show/{ID}\\">Transacció #{ID}</a> s\'ha desat.","transaction_journal_information":"Informació de la transacció","submission_options":"Opcions de tramesa","apply_rules_checkbox":"Aplicar regles","fire_webhooks_checkbox":"Disparar webhooks","no_budget_pointer":"Sembla que encara no tens cap pressupost. N\'hauries de crear alguns a la pàgina de <a href=\\"budgets\\">pressuposts</a>. Els pressupostos et poden ajudar a fer el seguiment de les teves despeses.","no_bill_pointer":"Sembla que encara no tens cap factura. N\'hauries de crear alguna a la pàgina de <a href=\\"bills\\">factures</a>. Les factures et poden ajudar a fer el seguiment de les teves despeses.","source_account":"Compte d\'origen","hidden_fields_preferences":"Pots habilitar més opcions de transacció a la <a href=\\"preferences\\">configuració</a>.","destination_account":"Compte de destí","add_another_split":"Afegeix una nova divisió","submission":"Enviament","stored_journal":"S\'ha creat la retirada \\":description\\" satisfactòriament","create_another":"Després de guardar, torna ací per crear-ne un altre.","reset_after":"Reiniciar el formulari després d\'enviar","submit":"Enviar","amount":"Import","date":"Data","is_reconciled_fields_dropped":"Com aquesta transacció està reconciliada, no podràs actualitzar els comptes, ni les quantitats.","tags":"Etiquetes","no_budget":"(cap pressupost)","no_bill":"(cap factura)","category":"Categoria","attachments":"Adjunts","notes":"Notes","external_url":"URL extern","update_transaction":"Actualitzar transacció","after_update_create_another":"Després d\'actualitzar, torna ací per a seguir editant.","store_as_new":"Desa com a una nova transacció, en comptes d\'actualitzar.","split_title_help":"Si crees una transacció dividida, ha d\'haver una descripció global per a totes les divisions de la transacció.","none_in_select_list":"(cap)","no_piggy_bank":"(sense guardiola)","description":"Descripció","split_transaction_title_help":"Si crees una transacció dividida, ha d\'haver una descripció global per a totes les divisions de la transacció.","destination_account_reconciliation":"No pots editar el compte de destí d\'una transacció de reconciliació.","source_account_reconciliation":"No pots editar el compte d\'origen d\'una transacció de consolidació.","budget":"Pressupost","bill":"Factura","you_create_withdrawal":"Estàs creant una retirada.","you_create_transfer":"Estàs creant una transferència.","you_create_deposit":"Estàs creant un ingrés.","edit":"Editar","delete":"Eliminar","name":"Nom","profile_whoops":"Vaja!","profile_something_wrong":"Alguna cosa ha sortit malament!","profile_try_again":"Alguna cosa ha anat malament. Si us plau, prova de nou.","profile_oauth_clients":"Clients OAuth","profile_oauth_no_clients":"No has creat cap client OAuth.","profile_oauth_clients_header":"Clients","profile_oauth_client_id":"ID de Client","profile_oauth_client_name":"Nom","profile_oauth_client_secret":"Secret","profile_oauth_create_new_client":"Crear client nou","profile_oauth_create_client":"Crear client","profile_oauth_edit_client":"Editar client","profile_oauth_name_help":"Alguna cosa que els teus usuaris reconeixeran i hi confiaran.","profile_oauth_redirect_url":"URL de redirecció","profile_oauth_clients_external_auth":"Si estàs fent servir un proveïdor extern d\'autentificació com Authelia, els Clients OAuth no funcionaran. Sols pots fer servir Tokens d\'Accés Personal.","profile_oauth_redirect_url_help":"L\'URL de crida de retorn de la teva aplicació.","profile_authorized_apps":"Aplicacions autoritzades","profile_authorized_clients":"Clients autoritzats","profile_scopes":"Àmbits","profile_revoke":"Revocar","profile_personal_access_tokens":"Testimoni d\'accés personal","profile_personal_access_token":"Testimoni d\'accés personal","profile_personal_access_token_explanation":"Aquest és el teu nou testimoni d\'accés personal. És l\'únic cop que es mostrarà, així que no el perdis! Ara ja pots utilitzar aquest testimoni per fer crides a l\'API.","profile_no_personal_access_token":"No has creat cap testimoni d\'accés personal.","profile_create_new_token":"Crear nou testimoni","profile_create_token":"Crear testimoni","profile_create":"Crear","profile_save_changes":"Desar els canvis","default_group_title_name":"(no agrupades)","piggy_bank":"Guardiola","profile_oauth_client_secret_title":"Secret del client","profile_oauth_client_secret_expl":"Aquest és el teu nou secret de client. És l\'únic cop que es mostrarà, així que no el perdis! Ara ja pots utilitzar aquest secret per fer crides a l\'API.","profile_oauth_confidential":"Confidencial","profile_oauth_confidential_help":"Requerir el client d\'autenticar-se amb un secret. Els clients confidencials poden mantenir credencials de forma segura sense exposar-les a parts no autoritzades. Les aplicacions públiques, com les d\'escriptori o SPA de JavaScript, no poden guardar secrets de forma segura.","multi_account_warning_unknown":"Depenent del tipus de transacció que creïs, el compte d\'origen i/o el de destí de divisions posteriors pot ser anul·lada pel que es defineix en la primera divisió de la transacció.","multi_account_warning_withdrawal":"Tingues en compte que el compte d\'origen de divisions posteriors serà anul·lat pel que es troba definit a la primera divisió de la retirada.","multi_account_warning_deposit":"Tingues en compte que el compte de destí de divisions posteriors serà anul·lat pel que es troba definit a la primera divisió del dipòsit.","multi_account_warning_transfer":"Tingues en compte que el compte d\'origen + destí de divisions posteriors serà anul·lat pel que es troba definit a la primera divisió de la transferència.","webhook_trigger_STORE_TRANSACTION":"Després de crear la transacció","webhook_trigger_UPDATE_TRANSACTION":"Després d\'actualitzar la transacció","webhook_trigger_DESTROY_TRANSACTION":"Després d\'eliminar la transacció","webhook_response_TRANSACTIONS":"Detalls de la transacció","webhook_response_ACCOUNTS":"Detalls del compte","webhook_response_none_NONE":"Sense detalls","webhook_delivery_JSON":"JSON","actions":"Accions","meta_data":"Meta dades","webhook_messages":"Missatge del webhook","inactive":"Inactiu","no_webhook_messages":"No hi ha missatges webhook","inspect":"Inspeccionar","create_new_webhook":"Crear nou webhook","webhooks":"Webhooks","webhook_trigger_form_help":"Indicar quin esdeveniment activarà el webhook","webhook_response_form_help":"Indicar què ha d\'enviar el webhook a l\'URL.","webhook_delivery_form_help":"En quin format ha d\'entregar les dades el webhook.","webhook_active_form_help":"El wehook ha d\'estar actiu o no es cridarà.","edit_webhook_js":"Editar webhook \\"{title}\\"","webhook_was_triggered":"El webhook ha sigut cridat a la transacció indicada. Per favor, espera a que apareguen els resultats.","view_message":"Veure el missatge","view_attempts":"Veure intents fallits","message_content_title":"Contingut del missatge del webhook","message_content_help":"Aquest és el contingut del missatge que s\'ha enviat (o s\'ha intentat) utilitzant aquest webhook.","attempt_content_title":"Intents de webhook","attempt_content_help":"Aquests han estat tots els intents sense èxit d\'enviar el missatge del webhook a l\'URL configurat. Després de cert temps, Firefly III deixarà de provar-ho.","no_attempts":"No hi ha hagut intents sense èxit. Això és bon senyal!","webhook_attempt_at":"Intent de {moment}","logs":"Registres","response":"Resposta","visit_webhook_url":"Visitar l\'URL del webhook","reset_webhook_secret":"Reiniciar el secret del webhook"},"form":{"url":"URL","active":"Actiu","interest_date":"Data d\'interès","title":"Títol","book_date":"Data de registre","process_date":"Data de processament","due_date":"Data de venciment","foreign_amount":"Import estranger","payment_date":"Data de pagament","invoice_date":"Data de facturació","internal_reference":"Referència interna","webhook_response":"Resposta","webhook_trigger":"Activador","webhook_delivery":"Lliurament"},"list":{"active":"Està actiu?","trigger":"Activador","response":"Resposta","delivery":"Lliurament","url":"URL","secret":"Secret"},"config":{"html_language":"ca","date_time_fns":"D [de/d\'] MMMM yyyy [a les] HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/cs.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/cs.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"firefly":{"welcome_back":"Jak to jde?","flash_error":"Chyba!","flash_warning":"Varování!","flash_success":"Úspěšně dokončeno!","close":"Zavřít","select_dest_account":"Please select or type a valid destination account name","select_source_account":"Please select or type a valid source account name","split_transaction_title":"Popis rozúčtování","errors_submission":"There was something wrong with your submission. Please check out the errors below.","split":"Rozdělit","single_split":"Rozdělit","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID} (\\"{title}\\")</a> has been stored.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> byl uložen.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") byl aktualizován.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID}</a> (\\"{title}\\") has been updated.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID}</a> has been stored.","transaction_journal_information":"Informace o transakci","submission_options":"Submission options","apply_rules_checkbox":"Apply rules","fire_webhooks_checkbox":"Fire webhooks","no_budget_pointer":"Zdá se, že ještě nemáte žádné rozpočty. Měli byste některé vytvořit na <a href=\\"budgets\\">rozpočty</a>-. Rozpočty vám mohou pomoci sledovat výdaje.","no_bill_pointer":"Zdá se, že ještě nemáte žádné účty. Měli byste některé vytvořit na <a href=\\"bills\\">účtech</a>. Účty vám mohou pomoci sledovat výdaje.","source_account":"Zdrojový účet","hidden_fields_preferences":"You can enable more transaction options in your <a href=\\"preferences\\">preferences</a>.","destination_account":"Cílový účet","add_another_split":"Přidat další rozúčtování","submission":"Submission","stored_journal":"Úspěšně vytvořena nová transakce „:description“","create_another":"After storing, return here to create another one.","reset_after":"Reset form after submission","submit":"Odeslat","amount":"Částka","date":"Datum","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Štítky","no_budget":"(žádný rozpočet)","no_bill":"(no bill)","category":"Kategorie","attachments":"Přílohy","notes":"Poznámky","external_url":"Externí URL adresa","update_transaction":"Aktualizovat transakci","after_update_create_another":"After updating, return here to continue editing.","store_as_new":"Store as a new transaction instead of updating.","split_title_help":"Pokud vytvoříte rozúčtování, je třeba, aby zde byl celkový popis pro všechna rozúčtování dané transakce.","none_in_select_list":"(žádné)","no_piggy_bank":"(žádná pokladnička)","description":"Popis","split_transaction_title_help":"If you create a split transaction, there must be a global description for all splits of the transaction.","destination_account_reconciliation":"Cílový účet odsouhlasené transakce nelze upravit.","source_account_reconciliation":"Nemůžete upravovat zdrojový účet srovnávací transakce.","budget":"Rozpočet","bill":"Účet","you_create_withdrawal":"You\'re creating a withdrawal.","you_create_transfer":"You\'re creating a transfer.","you_create_deposit":"You\'re creating a deposit.","edit":"Upravit","delete":"Odstranit","name":"Název","profile_whoops":"Omlouváme se, tohle nějak nefunguje","profile_something_wrong":"Something went wrong!","profile_try_again":"Something went wrong. Please try again.","profile_oauth_clients":"OAuth Clients","profile_oauth_no_clients":"Zatím jste nevytvořili OAuth klienty.","profile_oauth_clients_header":"Klienti","profile_oauth_client_id":"ID zákazníka","profile_oauth_client_name":"Jméno","profile_oauth_client_secret":"Tajný klíč","profile_oauth_create_new_client":"Vytvořit nového klienta","profile_oauth_create_client":"Vytvořit klienta","profile_oauth_edit_client":"Upravit klienta","profile_oauth_name_help":"Something your users will recognize and trust.","profile_oauth_redirect_url":"Přesměrovat URL adresu","profile_oauth_clients_external_auth":"If you\'re using an external authentication provider like Authelia, OAuth Clients will not work. You can use Personal Access Tokens only.","profile_oauth_redirect_url_help":"Your application\'s authorization callback URL.","profile_authorized_apps":"Authorized applications","profile_authorized_clients":"Autorizovaní klienti","profile_scopes":"Scopes","profile_revoke":"Revoke","profile_personal_access_tokens":"Personal Access Tokens","profile_personal_access_token":"Personal Access Token","profile_personal_access_token_explanation":"Here is your new personal access token. This is the only time it will be shown so don\'t lose it! You may now use this token to make API requests.","profile_no_personal_access_token":"You have not created any personal access tokens.","profile_create_new_token":"Vytvořit nový token","profile_create_token":"Vytvořit token","profile_create":"Vytvořit","profile_save_changes":"Uložit změny","default_group_title_name":"(neseskupeno)","piggy_bank":"Pokladnička","profile_oauth_client_secret_title":"Client Secret","profile_oauth_client_secret_expl":"Here is your new client secret. This is the only time it will be shown so don\'t lose it! You may now use this secret to make API requests.","profile_oauth_confidential":"Confidential","profile_oauth_confidential_help":"Require the client to authenticate with a secret. Confidential clients can hold credentials in a secure way without exposing them to unauthorized parties. Public applications, such as native desktop or JavaScript SPA applications, are unable to hold secrets securely.","multi_account_warning_unknown":"Depending on the type of transaction you create, the source and/or destination account of subsequent splits may be overruled by whatever is defined in the first split of the transaction.","multi_account_warning_withdrawal":"Keep in mind that the source account of subsequent splits will be overruled by whatever is defined in the first split of the withdrawal.","multi_account_warning_deposit":"Keep in mind that the destination account of subsequent splits will be overruled by whatever is defined in the first split of the deposit.","multi_account_warning_transfer":"Keep in mind that the source + destination account of subsequent splits will be overruled by whatever is defined in the first split of the transfer.","webhook_trigger_STORE_TRANSACTION":"Po vytvoření transakce","webhook_trigger_UPDATE_TRANSACTION":"Po aktualizaci transakce","webhook_trigger_DESTROY_TRANSACTION":"Po odstranění transakce","webhook_response_TRANSACTIONS":"Podrobnosti transakce","webhook_response_ACCOUNTS":"Podrobnosti účtu","webhook_response_none_NONE":"Žádné detaily","webhook_delivery_JSON":"JSON","actions":"Akce","meta_data":"Metadata","webhook_messages":"Zpráva webhooku","inactive":"Neaktivní","no_webhook_messages":"Neexistují žádné zprávy webhooku","inspect":"Prozkoumat","create_new_webhook":"Vytvořit nový webhook","webhooks":"Webhooky","webhook_trigger_form_help":"Určit, na kterou událost se spustí webhook","webhook_response_form_help":"Určit, co musí webhook odeslat do URL.","webhook_delivery_form_help":"V jakém formátu musí webhook posílat data.","webhook_active_form_help":"Webhook musí být aktivní, nebo nebude zavolán.","edit_webhook_js":"Upravit webhook \\"{title}\\"","webhook_was_triggered":"Webhook byl spuštěn na určené transakci. Prosím počkejte, než se objeví výsledky.","view_message":"Zobrazit zprávu","view_attempts":"Zobrazit neúspěšné pokusy","message_content_title":"Obsah zprávy webhooku","message_content_help":"Toto je obsah zprávy, která byla odeslána (nebo vyzkoušena) pomocí tohoto webhooku.","attempt_content_title":"Pokusy webhooku","attempt_content_help":"To vše jsou neúspěšné pokusy této zpravy webhooku o odeslání na nakonfigurovanou URL. Po nějaké době, Firefly III přestane zkoušet odesílat zprávu.","no_attempts":"Nebyly nalezeny žádné neúspěšné pokusy. To je dobrá věc!","webhook_attempt_at":"Attempt at {moment}","logs":"Logy","response":"Odpověď","visit_webhook_url":"Navštívit URL webhooku","reset_webhook_secret":"Restartovat tajný klíč webhooku"},"form":{"url":"URL","active":"Aktivní","interest_date":"Úrokové datum","title":"Název","book_date":"Datum rezervace","process_date":"Datum zpracování","due_date":"Datum splatnosti","foreign_amount":"Částka v cizí měně","payment_date":"Datum zaplacení","invoice_date":"Datum vystavení","internal_reference":"Interní reference","webhook_response":"Response","webhook_trigger":"Spouštěč","webhook_delivery":"Delivery"},"list":{"active":"Aktivní?","trigger":"Trigger","response":"Response","delivery":"Delivery","url":"URL","secret":"Secret"},"config":{"html_language":"cs","date_time_fns":"MMMM do, yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/da.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/da.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"firefly":{"welcome_back":"Hvad spiller?","flash_error":"Fejl!","flash_warning":"Advarsel!","flash_success":"Succes!","close":"Luk","select_dest_account":"Please select or type a valid destination account name","select_source_account":"Please select or type a valid source account name","split_transaction_title":"Description of the split transaction","errors_submission":"There was something wrong with your submission. Please check out the errors below.","split":"Opdel","single_split":"Opdel","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID} (\\"{title}\\")</a> has been stored.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> has been stored.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") has been updated.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID}</a> (\\"{title}\\") has been updated.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID}</a> has been stored.","transaction_journal_information":"Transaction information","submission_options":"Submission options","apply_rules_checkbox":"Apply rules","fire_webhooks_checkbox":"Fire webhooks","no_budget_pointer":"Det ser ud til, at du ikke har oprettet budgetter endnu. Du burde oprette nogle på <a href=\\"/budgets\\">budgetsiden</a>. Budgetter kan hjælpe dig med at holde styr på udgifter.","no_bill_pointer":"Du synes ikke at have nogen regninger endnu. Du bør oprette nogle på <a href=\\"bills\\">regninger</a>-siden. Regninger kan hjælpe dig med at holde styr på udgifterne.","source_account":"Kildekonto","hidden_fields_preferences":"You can enable more transaction options in your <a href=\\"preferences\\">preferences</a>.","destination_account":"Destinationskonto","add_another_split":"Add another split","submission":"Submission","stored_journal":"Successfully created new transaction \\":description\\"","create_another":"After storing, return here to create another one.","reset_after":"Reset form after submission","submit":"Submit","amount":"Beløb","date":"Date","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Etiketter","no_budget":"(no budget)","no_bill":"(no bill)","category":"Kategori","attachments":"Vedhæftninger","notes":"Noter","external_url":"Ekstern URL","update_transaction":"Opdater transaktion","after_update_create_another":"After updating, return here to continue editing.","store_as_new":"Store as a new transaction instead of updating.","split_title_help":"If you create a split transaction, there must be a global description for all splits of the transaction.","none_in_select_list":"(ingen)","no_piggy_bank":"(ingen opsparing)","description":"Description","split_transaction_title_help":"If you create a split transaction, there must be a global description for all splits of the transaction.","destination_account_reconciliation":"Du kan ikke redigere destinationskontoen på en afstemningstransaktion.","source_account_reconciliation":"Du kan ikke redigere kildekontoen på en afstemningstransaktion.","budget":"Budget","bill":"Regning","you_create_withdrawal":"You\'re creating a withdrawal.","you_create_transfer":"You\'re creating a transfer.","you_create_deposit":"You\'re creating a deposit.","edit":"Rediger","delete":"Slet","name":"Name","profile_whoops":"Hovsa!","profile_something_wrong":"Noget gik galt!","profile_try_again":"Noget gik galt. Forsøg venligst igen.","profile_oauth_clients":"OAuth Klienter","profile_oauth_no_clients":"Du har ikke oprettet nogen OAuth klienter.","profile_oauth_clients_header":"Klienter","profile_oauth_client_id":"Klient ID","profile_oauth_client_name":"Navn","profile_oauth_client_secret":"Hemmelighed","profile_oauth_create_new_client":"Opret ny klient","profile_oauth_create_client":"Opret klient","profile_oauth_edit_client":"Rediger klient","profile_oauth_name_help":"Noget dine brugere vil genkende og stole på.","profile_oauth_redirect_url":"Omdirigerings-URL","profile_oauth_clients_external_auth":"If you\'re using an external authentication provider like Authelia, OAuth Clients will not work. You can use Personal Access Tokens only.","profile_oauth_redirect_url_help":"Din autoriserings callback URL.","profile_authorized_apps":"Autoriserede programmer","profile_authorized_clients":"Autoriserede klienter","profile_scopes":"Anvendelsesområde","profile_revoke":"Tilbagekald","profile_personal_access_tokens":"Personlige Adgangstokens","profile_personal_access_token":"Personligt Adgangstoken","profile_personal_access_token_explanation":"Her er dit nye personlige adgangstoken. Dette er den eneste gang det vil blive vist, så mist det ikke! Du kan nu bruge dette token til at foretage API-anmodninger.","profile_no_personal_access_token":"Du har ikke oprettet en personlig adgangstoken.","profile_create_new_token":"Opret nyt token","profile_create_token":"Opret token","profile_create":"Opret","profile_save_changes":"Gem ændringer","default_group_title_name":"(ungrouped)","piggy_bank":"Sparegris","profile_oauth_client_secret_title":"Klient Hemmelighed","profile_oauth_client_secret_expl":"Her er din nye klient hemmelighed. Dette er den eneste tid, den vil blive vist, så mist det ikke! Du kan nu bruge denne hemmelighed til at lave API-anmodninger.","profile_oauth_confidential":"Fortroligt","profile_oauth_confidential_help":"Kræver klienten at godkende med en hemmelighed. Fortrolige klienter kan holde legitimationsoplysninger på en sikker måde uden at udsætte dem for uautoriserede parter. Offentlige applikationer, såsom native desktop eller JavaScript SPA applikationer, er ikke i stand til at holde hemmeligheder sikkert.","multi_account_warning_unknown":"Afhængigt af hvilken type transaktion du opretter kan kilden og/eller destinationskontoen for efterfølgende opsplitninger tilsidesættes, uanset hvad der er defineret i den første opdeling af transaktionen.","multi_account_warning_withdrawal":"Husk, at kildekontoen for efterfølgende opdelinger vil blive overstyret af hvad der er defineret i den første opdeling af tilbagetrækningen.","multi_account_warning_deposit":"Husk, at destinationskontoen for efterfølgende opdelinger vil blive tilsidesat af hvad der er defineret i den første opsplitning af depositummet.","multi_account_warning_transfer":"Husk på, at kilden + destination konto for efterfølgende opdelinger vil blive overstyret af hvad der er defineret i den første opdeling af overførslen.","webhook_trigger_STORE_TRANSACTION":"Efter oprettelse af transaktion","webhook_trigger_UPDATE_TRANSACTION":"Efter opdatering af transaktion","webhook_trigger_DESTROY_TRANSACTION":"Efter sletning af transaktion","webhook_response_TRANSACTIONS":"Transaktionsdetaljer","webhook_response_ACCOUNTS":"Kontodetaljer","webhook_response_none_NONE":"Ingen detaljer","webhook_delivery_JSON":"JSON","actions":"Handlinger","meta_data":"Meta data","webhook_messages":"Webhook-besked","inactive":"Inactive","no_webhook_messages":"Der er ingen webhook-beskeder","inspect":"Inspect","create_new_webhook":"Opret ny webhook","webhooks":"Webhooks","webhook_trigger_form_help":"Indicate on what event the webhook will trigger","webhook_response_form_help":"Indicate what the webhook must submit to the URL.","webhook_delivery_form_help":"Hvilket format webhook skal levere data i.","webhook_active_form_help":"Webhooken skal være aktiv, ellers vil den ikke blive kaldt.","edit_webhook_js":"Rediger webhook \\"{title}\\"","webhook_was_triggered":"The webhook was triggered on the indicated transaction. Please wait for results to appear.","view_message":"Vis besked","view_attempts":"Vis mislykkede forsøg","message_content_title":"Webhook-beskedindhold","message_content_help":"This is the content of the message that was sent (or tried) using this webhook.","attempt_content_title":"Webhook-forsøg","attempt_content_help":"These are all the unsuccessful attempts of this webhook message to submit to the configured URL. After some time, Firefly III will stop trying.","no_attempts":"Der er ingen mislykkede forsøg. Det er en god ting!","webhook_attempt_at":"Attempt at {moment}","logs":"Logs","response":"Svar","visit_webhook_url":"Besøg webhook-URL","reset_webhook_secret":"Nulstil webhook-hemmelighed"},"form":{"url":"URL","active":"Aktiv","interest_date":"Rentedato","title":"Titel","book_date":"Bogføringsdato","process_date":"Behandlingsdato","due_date":"Forfaldsdato","foreign_amount":"Fremmed beløb","payment_date":"Betalingsdato","invoice_date":"Fakturadato","internal_reference":"Intern reference","webhook_response":"Svar","webhook_trigger":"Udløser","webhook_delivery":"Levering"},"list":{"active":"Aktiv?","trigger":"Udløser","response":"Svar","delivery":"Delivery","url":"URL","secret":"Hemmelighed"},"config":{"html_language":"da","date_time_fns":"MMMM gør, yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/de.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/de.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"firefly":{"welcome_back":"Überblick","flash_error":"Fehler!","flash_warning":"Achtung!","flash_success":"Geschafft!","close":"Schließen","select_dest_account":"Bitte einen gültigen Zielkontonamen auswählen oder eingeben","select_source_account":"Bitte einen gültigen Quellkontonamen auswählen oder eingeben","split_transaction_title":"Beschreibung der Splittbuchung","errors_submission":"Bei Ihren Eingaben stimmt etwas nicht. Bitte überprüfen Sie die unten stehenden Fehler.","split":"Teilen","single_split":"Teilen","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Buchung #{ID} (\\"{title}\\")</a> wurde gespeichert.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> wurde gespeichert.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") wurde aktualisiert.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Die Buchung #{ID}</a> (\\"{title}\\") wurde aktualisiert.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Buchung #{ID}</a> wurde gespeichert.","transaction_journal_information":"Transaktionsinformationen","submission_options":"Übermittlungsoptionen","apply_rules_checkbox":"Regeln anwenden","fire_webhooks_checkbox":"Webhooks abfeuern","no_budget_pointer":"Sie scheinen noch keine Budgets festgelegt zu haben. Sie sollten einige davon auf der Seite <a href=\\"budgets\\">Budgets</a> anlegen. Budgets können Ihnen dabei helfen, den Überblick über die Ausgaben zu behalten.","no_bill_pointer":"Sie scheinen noch keine Rechnungen zu haben. Sie sollten einige auf der Seite <a href=\\"bills\\">Rechnungen</a> erstellen. Anhand der Rechnungen können Sie den Überblick über Ihre Ausgaben behalten.","source_account":"Quellkonto","hidden_fields_preferences":"Sie können weitere Buchungsoptionen in Ihren <a href=\\"preferences\\">Einstellungen</a> aktivieren.","destination_account":"Zielkonto","add_another_split":"Eine weitere Aufteilung hinzufügen","submission":"Übermittlung","stored_journal":"Neue Überweisung \\":description\\" erfolgreich erstellt","create_another":"Nach dem Speichern hierher zurückkehren, um ein weiteres zu erstellen.","reset_after":"Formular nach der Übermittlung zurücksetzen","submit":"Absenden","amount":"Betrag","date":"Datum","is_reconciled_fields_dropped":"Da diese Buchung abgeglichen ist, können Sie weder die Konten noch den/die Betrag/Beträge aktualisieren.","tags":"Schlagwörter","no_budget":"(kein Budget)","no_bill":"(keine Belege)","category":"Kategorie","attachments":"Anhänge","notes":"Notizen","external_url":"Externe URL","update_transaction":"Buchung aktualisieren","after_update_create_another":"Nach dem Aktualisieren hierher zurückkehren, um weiter zu bearbeiten.","store_as_new":"Als neue Buchung speichern statt zu aktualisieren.","split_title_help":"Wenn Sie eine Splittbuchung anlegen, muss es eine eindeutige Beschreibung für alle Aufteilungen der Buchhaltung geben.","none_in_select_list":"(Keine)","no_piggy_bank":"(kein Sparschwein)","description":"Beschreibung","split_transaction_title_help":"Wenn Sie eine Splittbuchung anlegen, muss es eine eindeutige Beschreibung für alle Aufteilungen der Buchung geben.","destination_account_reconciliation":"Sie können das Zielkonto einer Kontenausgleichsbuchung nicht bearbeiten.","source_account_reconciliation":"Sie können das Quellkonto einer Kontenausgleichsbuchung nicht bearbeiten.","budget":"Budget","bill":"Rechnung","you_create_withdrawal":"Sie haben eine Ausgabe erstellt.","you_create_transfer":"Sie erstellen eine Umbuchung.","you_create_deposit":"Sie haben eine Einnahme erstellt.","edit":"Bearbeiten","delete":"Löschen","name":"Name","profile_whoops":"Huch!","profile_something_wrong":"Ein Problem ist aufgetreten!","profile_try_again":"Ein Problem ist aufgetreten. Bitte versuchen Sie es erneut.","profile_oauth_clients":"OAuth-Clients","profile_oauth_no_clients":"Sie haben noch keine OAuth-Clients erstellt.","profile_oauth_clients_header":"Clients","profile_oauth_client_id":"Client-ID","profile_oauth_client_name":"Name","profile_oauth_client_secret":"Geheimnis","profile_oauth_create_new_client":"Neuen Client erstellen","profile_oauth_create_client":"Client erstellen","profile_oauth_edit_client":"Client bearbeiten","profile_oauth_name_help":"Etwas das Ihre Nutzer erkennen und dem sie vertrauen.","profile_oauth_redirect_url":"Weiterleitungs-URL","profile_oauth_clients_external_auth":"Wenn Sie einen externen Authentifizierungsanbieter wie Authelia verwenden, funktionieren OAuth Clients nicht. Sie können ausschließlich persönliche Zugriffstoken verwenden.","profile_oauth_redirect_url_help":"Die Authorisierungs-Callback-URL Ihrer Anwendung.","profile_authorized_apps":"Autorisierte Anwendungen","profile_authorized_clients":"Autorisierte Clients","profile_scopes":"Bereiche","profile_revoke":"Widerrufen","profile_personal_access_tokens":"Persönliche Zugangs-Tokens","profile_personal_access_token":"Persönlicher Zugangs-Token","profile_personal_access_token_explanation":"Hier ist Ihr neuer persönlicher Zugangsschlüssel. Dies ist das einzige Mal, dass er angezeigt wird, also verlieren Sie ihn nicht! Sie können diesen Token jetzt verwenden, um API-Anfragen zu stellen.","profile_no_personal_access_token":"Sie haben keine persönlichen Zugangsschlüssel erstellt.","profile_create_new_token":"Neuen Schlüssel erstellen","profile_create_token":"Schlüssel erstellen","profile_create":"Erstellen","profile_save_changes":"Änderungen speichern","default_group_title_name":"(ohne Gruppierung)","piggy_bank":"Sparschwein","profile_oauth_client_secret_title":"Client Secret","profile_oauth_client_secret_expl":"Hier ist Ihr neuer persönlicher Zugangsschlüssel. Dies ist das einzige Mal, dass er angezeigt wird, also verlieren Sie ihn nicht! Sie können diesen Token jetzt verwenden, um API-Anfragen zu stellen.","profile_oauth_confidential":"Vertraulich","profile_oauth_confidential_help":"Der Client muss sich mit einem Secret authentifizieren. Vertrauliche Clients können die Anmeldedaten speichern, ohne diese unautorisierten Akteuren mitzuteilen. Öffentliche Anwendungen wie native Desktop- oder JavaScript-SPA-Anwendungen können Geheimnisse nicht sicher speichern.","multi_account_warning_unknown":"Abhängig von der Art der Buchung, die Sie anlegen, kann das Quell- und/oder Zielkonto nachfolgender Aufteilungen durch das überschrieben werden, was in der ersten Aufteilung der Buchung definiert wurde.","multi_account_warning_withdrawal":"Bedenken Sie, dass das Quellkonto nachfolgender Aufteilungen von dem, was in der ersten Aufteilung der Abhebung definiert ist, außer Kraft gesetzt wird.","multi_account_warning_deposit":"Bedenken Sie, dass das Zielkonto nachfolgender Aufteilungen von dem, was in der ersten Aufteilung der Einnahmen definiert ist, außer Kraft gesetzt wird.","multi_account_warning_transfer":"Bedenken Sie, dass das Quell- und Zielkonto nachfolgender Aufteilungen durch das, was in der ersten Aufteilung der Übertragung definiert ist, außer Kraft gesetzt wird.","webhook_trigger_STORE_TRANSACTION":"Nach Erstellen einer Buchung","webhook_trigger_UPDATE_TRANSACTION":"Nach Aktualisierung einer Buchung","webhook_trigger_DESTROY_TRANSACTION":"Nach dem Löschen einer Buchung","webhook_response_TRANSACTIONS":"Buchungsdetails","webhook_response_ACCOUNTS":"Kontodetails","webhook_response_none_NONE":"Keine Daten","webhook_delivery_JSON":"JSON","actions":"Aktionen","meta_data":"Metadaten","webhook_messages":"Webhook-Nachricht","inactive":"Inaktiv","no_webhook_messages":"Es gibt keine Webhook Nachrichten","inspect":"Überprüfen","create_new_webhook":"Neuen Webhook erstellen","webhooks":"Webhooks","webhook_trigger_form_help":"Geben Sie an, bei welchem Ereignis der Webhook ausgelöst werden soll","webhook_response_form_help":"Geben Sie an, was der Webhook an die URL senden soll.","webhook_delivery_form_help":"In welchem Format der Webhook Daten liefern muss.","webhook_active_form_help":"Der Webhook muss aktiv sein oder wird nicht aufgerufen.","edit_webhook_js":"Webhook \\"{title} \\" bearbeiten","webhook_was_triggered":"Der Webhook wurde für die angezeigte Transaktion ausgelöst. Bitte warten Sie, bis die Ergebnisse erscheinen.","view_message":"Nachricht anzeigen","view_attempts":"Gescheiterte Versuche anzeigen","message_content_title":"Webhook Nachrichteninhalt","message_content_help":"Dies ist der Inhalt der Nachricht, die mit diesem Webhook gesendet (oder zu Senden versucht) wurde.","attempt_content_title":"Webhook Versuche","attempt_content_help":"Dies sind alle erfolglosen Versuche dieser Webhook-Nachricht, an die konfigurierte URL zu senden. Nach einiger Zeit wird es Firefly III nicht mehr versuchen.","no_attempts":"Es gibt keine erfolglosen Versuche. Das ist eine gute Sache!","webhook_attempt_at":"Versuch bei {moment}","logs":"Protokolle","response":"Antwort","visit_webhook_url":"Webhook-URL besuchen","reset_webhook_secret":"Webhook Secret zurücksetzen"},"form":{"url":"URL","active":"Aktiv","interest_date":"Zinstermin","title":"Titel","book_date":"Buchungsdatum","process_date":"Bearbeitungsdatum","due_date":"Fälligkeitstermin","foreign_amount":"Ausländischer Betrag","payment_date":"Zahlungsdatum","invoice_date":"Rechnungsdatum","internal_reference":"Interne Referenz","webhook_response":"Antwort","webhook_trigger":"Auslöser","webhook_delivery":"Zustellung"},"list":{"active":"Aktiv?","trigger":"Auslöser","response":"Antwort","delivery":"Zustellung","url":"URL","secret":"Secret"},"config":{"html_language":"de","date_time_fns":"dd. MMM. yyyy um HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/el.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/el.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"firefly":{"welcome_back":"Τι παίζει;","flash_error":"Σφάλμα!","flash_warning":"Προσοχή!","flash_success":"Επιτυχία!","close":"Κλείσιμο","select_dest_account":"Please select or type a valid destination account name","select_source_account":"Please select or type a valid source account name","split_transaction_title":"Περιγραφή της συναλλαγής με διαχωρισμό","errors_submission":"There was something wrong with your submission. Please check out the errors below.","split":"Διαχωρισμός","single_split":"Διαχωρισμός","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Η συναλλαγή #{ID} (\\"{title}\\")</a> έχει αποθηκευτεί.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> έχει αποθηκευτεί.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Το Webhook #{ID}</a> (\\"{title}\\") έχει ενημερωθεί.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Η συναλλαγή #{ID}</a> (\\"{title}\\") έχει ενημερωθεί.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Η συναλλαγή #{ID}</a> έχει αποθηκευτεί.","transaction_journal_information":"Πληροφορίες συναλλαγής","submission_options":"Submission options","apply_rules_checkbox":"Apply rules","fire_webhooks_checkbox":"Ενεργοποίηση των webhook","no_budget_pointer":"Φαίνεται πως δεν έχετε ορίσει προϋπολογισμούς ακόμη. Πρέπει να δημιουργήσετε κάποιον στη σελίδα <a href=\\"budgets\\">προϋπολογισμών</a>. Οι προϋπολογισμοί σας βοηθούν να επιβλέπετε τις δαπάνες σας.","no_bill_pointer":"Φαίνεται πως δεν έχετε ορίσει πάγια έξοδα ακόμη. Πρέπει να δημιουργήσετε κάποιο στη σελίδα <a href=\\"bills\\">πάγιων εξόδων</a>. Τα πάγια έξοδα σας βοηθούν να επιβλέπετε τις δαπάνες σας.","source_account":"Λογαριασμός προέλευσης","hidden_fields_preferences":"Μπορείτε να ενεργοποιήσετε περισσότερες επιλογές συναλλαγών στις <a href=\\"/preferences\\">προτιμήσεις</a>.","destination_account":"Λογαριασμός προορισμού","add_another_split":"Προσθήκη ενός ακόμα διαχωρισμού","submission":"Υποβολή","stored_journal":"Δημιουργήθηκε επιτυχώς η νέα συναλλαγή \\":description\\"","create_another":"Μετά την αποθήκευση, επιστρέψτε εδώ για να δημιουργήσετε ακόμη ένα.","reset_after":"Επαναφορά φόρμας μετά την υποβολή","submit":"Υποβολή","amount":"Ποσό","date":"Ημερομηνία","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Ετικέτες","no_budget":"(χωρίς προϋπολογισμό)","no_bill":"(χωρίς πάγιο έξοδο)","category":"Κατηγορία","attachments":"Συνημμένα","notes":"Σημειώσεις","external_url":"Εξωτερικό URL","update_transaction":"Ενημέρωση συναλλαγής","after_update_create_another":"Μετά την ενημέρωση, επιστρέψτε εδώ για να συνεχίσετε την επεξεργασία.","store_as_new":"Αποθήκευση ως νέα συναλλαγή αντί για ενημέρωση.","split_title_help":"Εάν δημιουργήσετε μια διαχωρισμένη συναλλαγή, πρέπει να υπάρχει μια καθολική περιγραφή για όλους τους διαχωρισμούς της συναλλαγής.","none_in_select_list":"(τίποτα)","no_piggy_bank":"(χωρίς κουμπαρά)","description":"Περιγραφή","split_transaction_title_help":"Εάν δημιουργήσετε μια διαχωρισμένη συναλλαγή, πρέπει να υπάρχει μια καθολική περιγραφή για όλους τους διαχωρισμούς της συναλλαγής.","destination_account_reconciliation":"Δεν μπορείτε να τροποποιήσετε τον λογαριασμό προορισμού σε μια συναλλαγή τακτοποίησης.","source_account_reconciliation":"Δεν μπορείτε να τροποποιήσετε τον λογαριασμό προέλευσης σε μια συναλλαγή τακτοποίησης.","budget":"Προϋπολογισμός","bill":"Πάγιο έξοδο","you_create_withdrawal":"Δημιουργείτε μια ανάληψη.","you_create_transfer":"Δημιουργείτε μια μεταφορά.","you_create_deposit":"Δημιουργείτε μια κατάθεση.","edit":"Επεξεργασία","delete":"Διαγραφή","name":"Όνομα","profile_whoops":"Ούπς!","profile_something_wrong":"Κάτι πήγε στραβά!","profile_try_again":"Κάτι πήγε στραβά. Παρακαλώ προσπαθήστε ξανά.","profile_oauth_clients":"Πελάτες OAuth","profile_oauth_no_clients":"Δεν έχετε δημιουργήσει πελάτες OAuth.","profile_oauth_clients_header":"Πελάτες","profile_oauth_client_id":"Αναγνωριστικό πελάτη","profile_oauth_client_name":"Όνομα","profile_oauth_client_secret":"Μυστικό","profile_oauth_create_new_client":"Δημιουργία νέου πελάτη","profile_oauth_create_client":"Δημιουργία πελάτη","profile_oauth_edit_client":"Επεξεργασία πελάτη","profile_oauth_name_help":"Κάτι που οι χρήστες σας θα αναγνωρίζουν και θα εμπιστεύονται.","profile_oauth_redirect_url":"URL ανακατεύθυνσης","profile_oauth_clients_external_auth":"If you\'re using an external authentication provider like Authelia, OAuth Clients will not work. You can use Personal Access Tokens only.","profile_oauth_redirect_url_help":"To authorization callback URL της εφαρμογής σας.","profile_authorized_apps":"Εξουσιοδοτημένες εφαρμογές","profile_authorized_clients":"Εξουσιοδοτημένοι πελάτες","profile_scopes":"Πεδία εφαρμογής","profile_revoke":"Ανάκληση","profile_personal_access_tokens":"Διακριτικά προσωπικής πρόσβασης","profile_personal_access_token":"Διακριτικά προσωπικής πρόσβασης","profile_personal_access_token_explanation":"Εδώ είναι το νέο διακριτικό προσωπικής πρόσβασης. Αυτή είναι η μόνη φορά που θα εμφανιστεί, οπότε μη το χάσετε! Μπορείτε να χρησιμοποιείτε αυτό το διακριτικό για να κάνετε κλήσεις API.","profile_no_personal_access_token":"Δεν έχετε δημιουργήσει προσωπικά διακριτικά πρόσβασης.","profile_create_new_token":"Δημιουργία νέου διακριτικού","profile_create_token":"Δημιουργία διακριτικού","profile_create":"Δημιουργία","profile_save_changes":"Αποθήκευση αλλαγών","default_group_title_name":"(χωρίς ομάδα)","piggy_bank":"Κουμπαράς","profile_oauth_client_secret_title":"Μυστικό Πελάτη","profile_oauth_client_secret_expl":"Εδώ είναι το νέο σας μυστικό πελάτη. Αυτή είναι η μόνη φορά που θα σας εμφανιστεί, οπότε μην το χάσετε! Μπορείτε να το χρησιμοποιείτε για να κάνετε αιτήματα API.","profile_oauth_confidential":"Εμπιστευτικό","profile_oauth_confidential_help":"Απαιτήστε από το πρόγραμμα πελάτη να πραγματοποιήσει έλεγχο ταυτότητας με ένα μυστικό. Οι έμπιστοι πελάτες μπορούν να διατηρούν διαπιστευτήρια με ασφαλή τρόπο χωρίς να τα εκθέτουν σε μη εξουσιοδοτημένα μέρη. Οι δημόσιες εφαρμογές, όπως οι εγγενείς εφαρμογές για επιτραπέζιους υπολογιστές ή JavaScript SPA, δεν μπορούν να κρατήσουν μυστικά με ασφάλεια.","multi_account_warning_unknown":"Ανάλογα με τον τύπο της συναλλαγής που δημιουργείτε, ο λογαριασμός προέλευσης ή/και προορισμού των επόμενων διαχωρισμών ενδέχεται να παρακαμφθεί από αυτό που ορίζεται στο πρώτο διαχωρισμό της συναλλαγής.","multi_account_warning_withdrawal":"Λάβετε υπόψη ότι ο λογαριασμός προέλευσης των επόμενων διαχωρισμών θα υπερισχύσει αυτού του πρώτου διαχωρισμού της ανάληψης.","multi_account_warning_deposit":"Λάβετε υπόψη ότι ο λογαριασμός προορισμού των επόμενων διαχωρισμών θα υπερισχύσει αυτού του πρώτου διαχωρισμού της κατάθεσης.","multi_account_warning_transfer":"Λάβετε υπόψη ότι ο λογαριασμός προέλευσης και προορισμού των επόμενων διαχωρισμών θα υπερισχύσει αυτού του πρώτου διαχωρισμού της μεταφοράς.","webhook_trigger_STORE_TRANSACTION":"Μετά τη δημιουργία συναλλαγής","webhook_trigger_UPDATE_TRANSACTION":"Μετά την ενημέρωση της συναλλαγής","webhook_trigger_DESTROY_TRANSACTION":"Μετά τη διαγραφή συναλλαγής","webhook_response_TRANSACTIONS":"Λεπτομέρειες συναλλαγής","webhook_response_ACCOUNTS":"Πληροφορίες λογαριασμού","webhook_response_none_NONE":"Δεν υπάρχουν λεπτομέρειες","webhook_delivery_JSON":"JSON","actions":"Ενέργειες","meta_data":"Μετα-δεδομένα","webhook_messages":"Μήνυμα Webhook","inactive":"Ανενεργό","no_webhook_messages":"Δεν υπάρχουν μηνύματα webhook","inspect":"Έλεγχος","create_new_webhook":"Δημιουργία νέου webhook","webhooks":"Webhooks","webhook_trigger_form_help":"Επιλέξτε που θα ενεργοποιηθεί το webhook","webhook_response_form_help":"Υποδείξτε τι πρέπει να υποβάλει το webhook στη διεύθυνση URL.","webhook_delivery_form_help":"Ποια μορφή πρέπει να παραδώσει δεδομένα στο webhook.","webhook_active_form_help":"Το webhook πρέπει να είναι ενεργό αλλιώς δεν θα κληθεί.","edit_webhook_js":"Επεξεργασία webhook \\"{title}\\"","webhook_was_triggered":"Το webhook ενεργοποιήθηκε στην επιλεγμένη συναλλαγή. Παρακαλώ περιμένετε να εμφανιστούν τα αποτελέσματα.","view_message":"Προβολή μηνύματος","view_attempts":"Προβολή αποτυχημένων προσπαθειών","message_content_title":"Περιεχόμενο μηνύματος Webhook","message_content_help":"Αυτό είναι το περιεχόμενο του μηνύματος που στάλθηκε (ή δοκιμάστηκε) χρησιμοποιώντας αυτό το webhook.","attempt_content_title":"Προσπάθειες Webhook","attempt_content_help":"Αυτές είναι όλες οι ανεπιτυχείς προσπάθειες αυτού του μηνύματος webhook για υποβολή στην ρυθμισμένη διεύθυνση URL. Μετά από κάποιο χρονικό διάστημα, το Firefly III θα σταματήσει να προσπαθεί.","no_attempts":"Δεν υπάρχουν ανεπιτυχείς προσπάθειες. Αυτό είναι καλό!","webhook_attempt_at":"Προσπάθεια στο {moment}","logs":"Αρχεία καταγραφής (Logs)","response":"Απόκριση","visit_webhook_url":"Επισκεφθείτε το URL του webhook","reset_webhook_secret":"Επαναφορά μυστικού webhook"},"form":{"url":"Διεύθυνση URL","active":"Ενεργό","interest_date":"Ημερομηνία τοκισμού","title":"Τίτλος","book_date":"Ημερομηνία εγγραφής","process_date":"Ημερομηνία επεξεργασίας","due_date":"Ημερομηνία προθεσμίας","foreign_amount":"Ποσό σε ξένο νόμισμα","payment_date":"Ημερομηνία πληρωμής","invoice_date":"Ημερομηνία τιμολόγησης","internal_reference":"Εσωτερική αναφορά","webhook_response":"Απόκριση","webhook_trigger":"Ενεργοποίηση","webhook_delivery":"Παράδοση"},"list":{"active":"Είναι ενεργό;","trigger":"Ενεργοποίηση","response":"Απόκριση","delivery":"Παράδοση","url":"Διεύθυνση URL","secret":"Μυστικό"},"config":{"html_language":"el","date_time_fns":"do MMMM yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/en-gb.json":
/*!************************************************!*\
  !*** ./resources/assets/js/locales/en-gb.json ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"firefly":{"welcome_back":"What\'s playing?","flash_error":"Error!","flash_warning":"Warning!","flash_success":"Success!","close":"Close","select_dest_account":"Please select or type a valid destination account name","select_source_account":"Please select or type a valid source account name","split_transaction_title":"Description of the split transaction","errors_submission":"There was something wrong with your submission. Please check out the errors below.","split":"Split","single_split":"Split","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID} (\\"{title}\\")</a> has been stored.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> has been stored.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") has been updated.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID}</a> (\\"{title}\\") has been updated.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID}</a> has been stored.","transaction_journal_information":"Transaction information","submission_options":"Submission options","apply_rules_checkbox":"Apply rules","fire_webhooks_checkbox":"Fire webhooks","no_budget_pointer":"You seem to have no budgets yet. You should create some on the <a href=\\"budgets\\">budgets</a>-page. Budgets can help you keep track of expenses.","no_bill_pointer":"You seem to have no bills yet. You should create some on the <a href=\\"bills\\">bills</a>-page. Bills can help you keep track of expenses.","source_account":"Source account","hidden_fields_preferences":"You can enable more transaction options in your <a href=\\"preferences\\">preferences</a>.","destination_account":"Destination account","add_another_split":"Add another split","submission":"Submission","stored_journal":"Successfully created new transaction \\":description\\"","create_another":"After storing, return here to create another one.","reset_after":"Reset form after submission","submit":"Submit","amount":"Amount","date":"Date","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Tags","no_budget":"(no budget)","no_bill":"(no bill)","category":"Category","attachments":"Attachments","notes":"Notes","external_url":"External URL","update_transaction":"Update transaction","after_update_create_another":"After updating, return here to continue editing.","store_as_new":"Store as a new transaction instead of updating.","split_title_help":"If you create a split transaction, there must be a global description for all splits of the transaction.","none_in_select_list":"(none)","no_piggy_bank":"(no piggy bank)","description":"Description","split_transaction_title_help":"If you create a split transaction, there must be a global description for all splits of the transaction.","destination_account_reconciliation":"You can\'t edit the destination account of a reconciliation transaction.","source_account_reconciliation":"You can\'t edit the source account of a reconciliation transaction.","budget":"Budget","bill":"Bill","you_create_withdrawal":"You\'re creating a withdrawal.","you_create_transfer":"You\'re creating a transfer.","you_create_deposit":"You\'re creating a deposit.","edit":"Edit","delete":"Delete","name":"Name","profile_whoops":"Whoops!","profile_something_wrong":"Something went wrong!","profile_try_again":"Something went wrong. Please try again.","profile_oauth_clients":"OAuth Clients","profile_oauth_no_clients":"You have not created any OAuth clients.","profile_oauth_clients_header":"Clients","profile_oauth_client_id":"Client ID","profile_oauth_client_name":"Name","profile_oauth_client_secret":"Secret","profile_oauth_create_new_client":"Create New Client","profile_oauth_create_client":"Create Client","profile_oauth_edit_client":"Edit Client","profile_oauth_name_help":"Something your users will recognize and trust.","profile_oauth_redirect_url":"Redirect URL","profile_oauth_clients_external_auth":"If you\'re using an external authentication provider like Authelia, OAuth Clients will not work. You can use Personal Access Tokens only.","profile_oauth_redirect_url_help":"Your application\'s authorization callback URL.","profile_authorized_apps":"Authorized applications","profile_authorized_clients":"Authorized clients","profile_scopes":"Scopes","profile_revoke":"Revoke","profile_personal_access_tokens":"Personal Access Tokens","profile_personal_access_token":"Personal Access Token","profile_personal_access_token_explanation":"Here is your new personal access token. This is the only time it will be shown so don\'t lose it! You may now use this token to make API requests.","profile_no_personal_access_token":"You have not created any personal access tokens.","profile_create_new_token":"Create new token","profile_create_token":"Create token","profile_create":"Create","profile_save_changes":"Save changes","default_group_title_name":"(ungrouped)","piggy_bank":"Piggy bank","profile_oauth_client_secret_title":"Client Secret","profile_oauth_client_secret_expl":"Here is your new client secret. This is the only time it will be shown so don\'t lose it! You may now use this secret to make API requests.","profile_oauth_confidential":"Confidential","profile_oauth_confidential_help":"Require the client to authenticate with a secret. Confidential clients can hold credentials in a secure way without exposing them to unauthorized parties. Public applications, such as native desktop or JavaScript SPA applications, are unable to hold secrets securely.","multi_account_warning_unknown":"Depending on the type of transaction you create, the source and/or destination account of subsequent splits may be overruled by whatever is defined in the first split of the transaction.","multi_account_warning_withdrawal":"Keep in mind that the source account of subsequent splits will be overruled by whatever is defined in the first split of the withdrawal.","multi_account_warning_deposit":"Keep in mind that the destination account of subsequent splits will be overruled by whatever is defined in the first split of the deposit.","multi_account_warning_transfer":"Keep in mind that the source + destination account of subsequent splits will be overruled by whatever is defined in the first split of the transfer.","webhook_trigger_STORE_TRANSACTION":"After transaction creation","webhook_trigger_UPDATE_TRANSACTION":"After transaction update","webhook_trigger_DESTROY_TRANSACTION":"After transaction delete","webhook_response_TRANSACTIONS":"Transaction details","webhook_response_ACCOUNTS":"Account details","webhook_response_none_NONE":"No details","webhook_delivery_JSON":"JSON","actions":"Actions","meta_data":"Meta data","webhook_messages":"Webhook message","inactive":"Inactive","no_webhook_messages":"There are no webhook messages","inspect":"Inspect","create_new_webhook":"Create new webhook","webhooks":"Webhooks","webhook_trigger_form_help":"Indicate on what event the webhook will trigger","webhook_response_form_help":"Indicate what the webhook must submit to the URL.","webhook_delivery_form_help":"Which format the webhook must deliver data in.","webhook_active_form_help":"The webhook must be active or it won\'t be called.","edit_webhook_js":"Edit webhook \\"{title}\\"","webhook_was_triggered":"The webhook was triggered on the indicated transaction. Please wait for results to appear.","view_message":"View message","view_attempts":"View failed attempts","message_content_title":"Webhook message content","message_content_help":"This is the content of the message that was sent (or tried) using this webhook.","attempt_content_title":"Webhook attempts","attempt_content_help":"These are all the unsuccessful attempts of this webhook message to submit to the configured URL. After some time, Firefly III will stop trying.","no_attempts":"There are no unsuccessful attempts. That\'s a good thing!","webhook_attempt_at":"Attempt at {moment}","logs":"Logs","response":"Response","visit_webhook_url":"Visit webhook URL","reset_webhook_secret":"Reset webhook secret"},"form":{"url":"URL","active":"Active","interest_date":"Interest date","title":"Title","book_date":"Book date","process_date":"Processing date","due_date":"Due date","foreign_amount":"Foreign amount","payment_date":"Payment date","invoice_date":"Invoice date","internal_reference":"Internal reference","webhook_response":"Response","webhook_trigger":"Trigger","webhook_delivery":"Delivery"},"list":{"active":"Is active?","trigger":"Trigger","response":"Response","delivery":"Delivery","url":"URL","secret":"Secret"},"config":{"html_language":"en-gb","date_time_fns":"MMMM do, yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/en.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/en.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"firefly":{"welcome_back":"What\'s playing?","flash_error":"Error!","flash_warning":"Warning!","flash_success":"Success!","close":"Close","select_dest_account":"Please select or type a valid destination account name","select_source_account":"Please select or type a valid source account name","split_transaction_title":"Description of the split transaction","errors_submission":"There was something wrong with your submission. Please check out the errors below.","split":"Split","single_split":"Split","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID} (\\"{title}\\")</a> has been stored.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> has been stored.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") has been updated.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID}</a> (\\"{title}\\") has been updated.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID}</a> has been stored.","transaction_journal_information":"Transaction information","submission_options":"Submission options","apply_rules_checkbox":"Apply rules","fire_webhooks_checkbox":"Fire webhooks","no_budget_pointer":"You seem to have no budgets yet. You should create some on the <a href=\\"budgets\\">budgets</a>-page. Budgets can help you keep track of expenses.","no_bill_pointer":"You seem to have no bills yet. You should create some on the <a href=\\"bills\\">bills</a>-page. Bills can help you keep track of expenses.","source_account":"Source account","hidden_fields_preferences":"You can enable more transaction options in your <a href=\\"preferences\\">preferences</a>.","destination_account":"Destination account","add_another_split":"Add another split","submission":"Submission","stored_journal":"Successfully created new transaction \\":description\\"","create_another":"After storing, return here to create another one.","reset_after":"Reset form after submission","submit":"Submit","amount":"Amount","date":"Date","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Tags","no_budget":"(no budget)","no_bill":"(no bill)","category":"Category","attachments":"Attachments","notes":"Notes","external_url":"External URL","update_transaction":"Update transaction","after_update_create_another":"After updating, return here to continue editing.","store_as_new":"Store as a new transaction instead of updating.","split_title_help":"If you create a split transaction, there must be a global description for all splits of the transaction.","none_in_select_list":"(none)","no_piggy_bank":"(no piggy bank)","description":"Description","split_transaction_title_help":"If you create a split transaction, there must be a global description for all splits of the transaction.","destination_account_reconciliation":"You can\'t edit the destination account of a reconciliation transaction.","source_account_reconciliation":"You can\'t edit the source account of a reconciliation transaction.","budget":"Budget","bill":"Bill","you_create_withdrawal":"You\'re creating a withdrawal.","you_create_transfer":"You\'re creating a transfer.","you_create_deposit":"You\'re creating a deposit.","edit":"Edit","delete":"Delete","name":"Name","profile_whoops":"Whoops!","profile_something_wrong":"Something went wrong!","profile_try_again":"Something went wrong. Please try again.","profile_oauth_clients":"OAuth Clients","profile_oauth_no_clients":"You have not created any OAuth clients.","profile_oauth_clients_header":"Clients","profile_oauth_client_id":"Client ID","profile_oauth_client_name":"Name","profile_oauth_client_secret":"Secret","profile_oauth_create_new_client":"Create New Client","profile_oauth_create_client":"Create Client","profile_oauth_edit_client":"Edit Client","profile_oauth_name_help":"Something your users will recognize and trust.","profile_oauth_redirect_url":"Redirect URL","profile_oauth_clients_external_auth":"If you\'re using an external authentication provider like Authelia, OAuth Clients will not work. You can use Personal Access Tokens only.","profile_oauth_redirect_url_help":"Your application\'s authorization callback URL.","profile_authorized_apps":"Authorized applications","profile_authorized_clients":"Authorized clients","profile_scopes":"Scopes","profile_revoke":"Revoke","profile_personal_access_tokens":"Personal Access Tokens","profile_personal_access_token":"Personal Access Token","profile_personal_access_token_explanation":"Here is your new personal access token. This is the only time it will be shown so don\'t lose it! You may now use this token to make API requests.","profile_no_personal_access_token":"You have not created any personal access tokens.","profile_create_new_token":"Create new token","profile_create_token":"Create token","profile_create":"Create","profile_save_changes":"Save changes","default_group_title_name":"(ungrouped)","piggy_bank":"Piggy bank","profile_oauth_client_secret_title":"Client Secret","profile_oauth_client_secret_expl":"Here is your new client secret. This is the only time it will be shown so don\'t lose it! You may now use this secret to make API requests.","profile_oauth_confidential":"Confidential","profile_oauth_confidential_help":"Require the client to authenticate with a secret. Confidential clients can hold credentials in a secure way without exposing them to unauthorized parties. Public applications, such as native desktop or JavaScript SPA applications, are unable to hold secrets securely.","multi_account_warning_unknown":"Depending on the type of transaction you create, the source and/or destination account of subsequent splits may be overruled by whatever is defined in the first split of the transaction.","multi_account_warning_withdrawal":"Keep in mind that the source account of subsequent splits will be overruled by whatever is defined in the first split of the withdrawal.","multi_account_warning_deposit":"Keep in mind that the destination account of subsequent splits will be overruled by whatever is defined in the first split of the deposit.","multi_account_warning_transfer":"Keep in mind that the source + destination account of subsequent splits will be overruled by whatever is defined in the first split of the transfer.","webhook_trigger_STORE_TRANSACTION":"After transaction creation","webhook_trigger_UPDATE_TRANSACTION":"After transaction update","webhook_trigger_DESTROY_TRANSACTION":"After transaction delete","webhook_response_TRANSACTIONS":"Transaction details","webhook_response_ACCOUNTS":"Account details","webhook_response_none_NONE":"No details","webhook_delivery_JSON":"JSON","actions":"Actions","meta_data":"Meta data","webhook_messages":"Webhook message","inactive":"Inactive","no_webhook_messages":"There are no webhook messages","inspect":"Inspect","create_new_webhook":"Create new webhook","webhooks":"Webhooks","webhook_trigger_form_help":"Indicate on what event the webhook will trigger","webhook_response_form_help":"Indicate what the webhook must submit to the URL.","webhook_delivery_form_help":"Which format the webhook must deliver data in.","webhook_active_form_help":"The webhook must be active or it won\'t be called.","edit_webhook_js":"Edit webhook \\"{title}\\"","webhook_was_triggered":"The webhook was triggered on the indicated transaction. Please wait for results to appear.","view_message":"View message","view_attempts":"View failed attempts","message_content_title":"Webhook message content","message_content_help":"This is the content of the message that was sent (or tried) using this webhook.","attempt_content_title":"Webhook attempts","attempt_content_help":"These are all the unsuccessful attempts of this webhook message to submit to the configured URL. After some time, Firefly III will stop trying.","no_attempts":"There are no unsuccessful attempts. That\'s a good thing!","webhook_attempt_at":"Attempt at {moment}","logs":"Logs","response":"Response","visit_webhook_url":"Visit webhook URL","reset_webhook_secret":"Reset webhook secret"},"form":{"url":"URL","active":"Active","interest_date":"Interest date","title":"Title","book_date":"Book date","process_date":"Processing date","due_date":"Due date","foreign_amount":"Foreign amount","payment_date":"Payment date","invoice_date":"Invoice date","internal_reference":"Internal reference","webhook_response":"Response","webhook_trigger":"Trigger","webhook_delivery":"Delivery"},"list":{"active":"Is active?","trigger":"Trigger","response":"Response","delivery":"Delivery","url":"URL","secret":"Secret"},"config":{"html_language":"en","date_time_fns":"MMMM do, yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/es.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/es.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"firefly":{"welcome_back":"¿Qué está pasando?","flash_error":"¡Error!","flash_warning":"¡Advertencia!","flash_success":"¡Operación correcta!","close":"Cerrar","select_dest_account":"Please select or type a valid destination account name","select_source_account":"Please select or type a valid source account name","split_transaction_title":"Descripción de la transacción dividida","errors_submission":"Hubo un problema con su envío. Por favor, compruebe los siguientes errores.","split":"Separar","single_split":"División","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">La transacción #{ID} (\\"{title}\\")</a> ha sido almacenada.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">El webhook #{ID} (\\"{title}\\")</a> ha sido almacenado.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">El webhook #{ID} (\\"{title}\\")</a> ha sido actualizado.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">La transacción #{ID}</a> (\\"{title}\\") ha sido actualizada.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">La transacción #{ID}</a> ha sido guardada.","transaction_journal_information":"Información de transacción","submission_options":"Opciones de envío","apply_rules_checkbox":"Aplicar reglas","fire_webhooks_checkbox":"Disparar webhooks","no_budget_pointer":"Parece que aún no tienes presupuestos. Debes crear algunos en la página <a href=\\"budgets\\">presupuestos</a>. Los presupuestos pueden ayudarle a realizar un seguimiento de los gastos.","no_bill_pointer":"Parece que aún no tienes facturas. Deberías crear algunas en la página de <a href=\\"bills\\">facturas</a>. Las facturas pueden ayudarte a llevar un seguimiento de los gastos.","source_account":"Cuenta origen","hidden_fields_preferences":"Puede habilitar más opciones de transacción en sus <a href=\\"preferences\\">ajustes </a>.","destination_account":"Cuenta destino","add_another_split":"Añadir otra división","submission":"Envío","stored_journal":"Nueva transacción creada exitosamente \\":description\\"","create_another":"Después de guardar, vuelve aquí para crear otro.","reset_after":"Restablecer formulario después del envío","submit":"Enviar","amount":"Cantidad","date":"Fecha","is_reconciled_fields_dropped":"Debido a que esta transacción está reconciliada, no podrá actualizar las cuentas, ni las cantidades.","tags":"Etiquetas","no_budget":"(sin presupuesto)","no_bill":"(sin factura)","category":"Categoria","attachments":"Archivos adjuntos","notes":"Notas","external_url":"URL externa","update_transaction":"Actualizar transacción","after_update_create_another":"Después de actualizar, vuelve aquí para continuar editando.","store_as_new":"Almacenar como una nueva transacción en lugar de actualizar.","split_title_help":"Si crea una transacción dividida, debe haber una descripción global para todos los fragmentos de la transacción.","none_in_select_list":"(ninguno)","no_piggy_bank":"(sin hucha)","description":"Descripción","split_transaction_title_help":"Si crea una transacción dividida, debe existir una descripción global para todas las divisiones de la transacción.","destination_account_reconciliation":"No puedes editar la cuenta de destino de una transacción de reconciliación.","source_account_reconciliation":"No puedes editar la cuenta de origen de una transacción de reconciliación.","budget":"Presupuesto","bill":"Factura","you_create_withdrawal":"Está creando un gasto.","you_create_transfer":"Está creando una transferencia.","you_create_deposit":"Está creando un ingreso.","edit":"Editar","delete":"Eliminar","name":"Nombre","profile_whoops":"¡Ups!","profile_something_wrong":"¡Algo salió mal!","profile_try_again":"Algo salió mal. Por favor, vuelva a intentarlo.","profile_oauth_clients":"Clientes de OAuth","profile_oauth_no_clients":"No ha creado ningún cliente OAuth.","profile_oauth_clients_header":"Clientes","profile_oauth_client_id":"ID del cliente","profile_oauth_client_name":"Nombre","profile_oauth_client_secret":"Secreto","profile_oauth_create_new_client":"Crear un Nuevo Cliente","profile_oauth_create_client":"Crear Cliente","profile_oauth_edit_client":"Editar Cliente","profile_oauth_name_help":"Algo que sus usuarios reconocerán y confiarán.","profile_oauth_redirect_url":"Redirigir URL","profile_oauth_clients_external_auth":"Si está utilizando un proveedor de autenticación externo como Authelia, los clientes OAuth no funcionarán. Sólo puede utilizar tokens de acceso personal.","profile_oauth_redirect_url_help":"La URL de devolución de autorización de su aplicación.","profile_authorized_apps":"Aplicaciones autorizadas","profile_authorized_clients":"Clientes autorizados","profile_scopes":"Ámbitos","profile_revoke":"Revocar","profile_personal_access_tokens":"Tokens de acceso personal","profile_personal_access_token":"Token de acceso personal","profile_personal_access_token_explanation":"Aquí está su nuevo token de acceso personal. Esta es la única vez que se mostrará así que ¡no lo pierda! Ahora puede usar este token para hacer solicitudes de la API.","profile_no_personal_access_token":"No ha creado ningún token de acceso personal.","profile_create_new_token":"Crear nuevo token","profile_create_token":"Crear token","profile_create":"Crear","profile_save_changes":"Guardar cambios","default_group_title_name":"(sin agrupación)","piggy_bank":"Hucha","profile_oauth_client_secret_title":"Secreto del Cliente","profile_oauth_client_secret_expl":"Aquí está su nuevo secreto de cliente. Esta es la única vez que se mostrará así que no lo pierda! Ahora puede usar este secreto para hacer solicitudes de API.","profile_oauth_confidential":"Confidencial","profile_oauth_confidential_help":"Requerir que el cliente se autentifique con un secreto. Los clientes confidenciales pueden mantener las credenciales de forma segura sin exponerlas a partes no autorizadas. Las aplicaciones públicas, como aplicaciones de escritorio nativo o SPA de JavaScript, no pueden guardar secretos de forma segura.","multi_account_warning_unknown":"Dependiendo del tipo de transacción que cree, la cuenta de origen y/o destino de divisiones posteriores puede ser anulada por lo que se define en la primera división de la transacción.","multi_account_warning_withdrawal":"Tenga en cuenta que la cuenta de origen de las divisiones posteriores será anulada por lo que se defina en la primera división del gasto.","multi_account_warning_deposit":"Tenga en cuenta que la cuenta de destino de las divisiones posteriores será anulada por lo que se defina en la primera división del retiro.","multi_account_warning_transfer":"Tenga en cuenta que la cuenta de origen + destino de divisiones posteriores será anulada por lo que se defina en la primera división de la transferencia.","webhook_trigger_STORE_TRANSACTION":"Después de crear la transacción","webhook_trigger_UPDATE_TRANSACTION":"Después de actualizar la transacción","webhook_trigger_DESTROY_TRANSACTION":"Después de eliminar la transacción","webhook_response_TRANSACTIONS":"Detalles de la transacción","webhook_response_ACCOUNTS":"Detalles de la cuenta","webhook_response_none_NONE":"Sin detalles","webhook_delivery_JSON":"JSON","actions":"Acciones","meta_data":"Meta Datos","webhook_messages":"Mensaje de Webhook","inactive":"Inactivo","no_webhook_messages":"No hay mensajes webhook","inspect":"Inspeccionar","create_new_webhook":"Crear un nuevo webhook","webhooks":"Webhooks","webhook_trigger_form_help":"Indica en qué evento se activará el webhook","webhook_response_form_help":"Indique lo que el webhook debe enviar a la URL.","webhook_delivery_form_help":"En qué formato debe entregar los datos el webhook.","webhook_active_form_help":"El webhook debe estar activo o no será llamado.","edit_webhook_js":"Editar webhook \\"{title}\\"","webhook_was_triggered":"El disparador se activó en la transacción indicada. Por favor, espere a que aparezcan los resultados.","view_message":"Ver mensaje","view_attempts":"Ver intentos fallidos","message_content_title":"Contenido del mensaje del webhook","message_content_help":"Este es el contenido del mensaje que se envió (o se intentó) usando este webhook.","attempt_content_title":"Intentos de webhook","attempt_content_help":"Estos son todos los intentos fallidos de enviar este mensaje de webhook a la URL configurada. Después de algún tiempo, Firefly III dejará de intentarlo.","no_attempts":"No hay intentos fallidos. ¡Eso es bueno!","webhook_attempt_at":"Intento a las {moment}","logs":"Registros","response":"Respuesta","visit_webhook_url":"Visita la URL del webhook","reset_webhook_secret":"Restablecer secreto del webhook"},"form":{"url":"URL","active":"Activo","interest_date":"Fecha de interés","title":"Título","book_date":"Fecha de registro","process_date":"Fecha de procesamiento","due_date":"Fecha de vencimiento","foreign_amount":"Cantidad extranjera","payment_date":"Fecha de pago","invoice_date":"Fecha de la factura","internal_reference":"Referencia interna","webhook_response":"Respuesta","webhook_trigger":"Disparador","webhook_delivery":"Entrega"},"list":{"active":"¿Está Activo?","trigger":"Disparador","response":"Respuesta","delivery":"Entrega","url":"URL","secret":"Secreto"},"config":{"html_language":"es","date_time_fns":"El MMMM hacer, yyyy a las HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/fi.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/fi.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"firefly":{"welcome_back":"Mitä kuuluu?","flash_error":"Virhe!","flash_warning":"Varoitus!","flash_success":"Valmista tuli!","close":"Sulje","select_dest_account":"Please select or type a valid destination account name","select_source_account":"Please select or type a valid source account name","split_transaction_title":"Jaetun tapahtuman kuvaus","errors_submission":"There was something wrong with your submission. Please check out the errors below.","split":"Jaa","single_split":"Jako","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Tapahtuma #{ID} (\\"{title}\\")</a> on tallennettu.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> has been stored.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") has been updated.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Tapahtuma #{ID}</a> (\\"{title}\\") on päivitetty.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Tapahtuma #{ID}</a> on tallennettu.","transaction_journal_information":"Tapahtumatiedot","submission_options":"Submission options","apply_rules_checkbox":"Apply rules","fire_webhooks_checkbox":"Fire webhooks","no_budget_pointer":"Sinulla ei näytä olevan vielä budjetteja. Sinun pitäisi luoda joitakin <a href=\\"budgets\\">budjetit</a>-sivulla. Budjetit auttavat sinua pitämään kirjaa kuluista.","no_bill_pointer":"Sinulla ei näytä olevan vielä laskuja. Sinun pitäisi luoda joitakin <a href=\\"bills\\">laskut</a>-sivulla. Laskut auttavat sinua pitämään kirjaa kuluista.","source_account":"Lähdetili","hidden_fields_preferences":"Voit ottaa käyttöön lisää tapahtumavalintoja <a href=\\"preferences\\">asetuksissa</a>.","destination_account":"Kohdetili","add_another_split":"Lisää tapahtumaan uusi osa","submission":"Vahvistus","stored_journal":"Loit onnistuneesti uuden tapahtuman \\":description\\"","create_another":"Tallennuksen jälkeen, palaa takaisin luomaan uusi tapahtuma.","reset_after":"Tyhjennä lomake lähetyksen jälkeen","submit":"Vahvista","amount":"Summa","date":"Päivämäärä","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Tägit","no_budget":"(ei budjettia)","no_bill":"(ei laskua)","category":"Kategoria","attachments":"Liitteet","notes":"Muistiinpanot","external_url":"Ulkoinen URL","update_transaction":"Päivitä tapahtuma","after_update_create_another":"Päivityksen jälkeen, palaa takaisin jatkamaan muokkausta.","store_as_new":"Tallenna uutena tapahtumana päivityksen sijaan.","split_title_help":"Jos luot jaetun tapahtuman, kokonaisuudelle tarvitaan nimi.","none_in_select_list":"(ei mitään)","no_piggy_bank":"(ei säästöpossu)","description":"Kuvaus","split_transaction_title_help":"Jos luot jaetun tapahtuman, kokonaisuudelle tarvitaan nimi.","destination_account_reconciliation":"Et voi muokata täsmäytystapahtuman kohdetiliä.","source_account_reconciliation":"Et voi muokata täsmäytystapahtuman lähdetiliä.","budget":"Budjetti","bill":"Lasku","you_create_withdrawal":"Olet luomassa nostoa.","you_create_transfer":"Olet luomassa siirtoa.","you_create_deposit":"Olet luomassa talletusta.","edit":"Muokkaa","delete":"Poista","name":"Nimi","profile_whoops":"Hupsis!","profile_something_wrong":"Jokin meni vikaan!","profile_try_again":"Jokin meni vikaan. Yritä uudelleen.","profile_oauth_clients":"OAuth Asiakkaat","profile_oauth_no_clients":"Et ole luonut yhtään OAuth-asiakasta.","profile_oauth_clients_header":"Asiakasohjelmat","profile_oauth_client_id":"Asiakastunnus","profile_oauth_client_name":"Nimi","profile_oauth_client_secret":"Salaisuus","profile_oauth_create_new_client":"Luo Uusi Asiakas","profile_oauth_create_client":"Luo Asiakas","profile_oauth_edit_client":"Muokkaa asiakasta","profile_oauth_name_help":"Jotain käyttäjillesi tuttua ja luotettavaa.","profile_oauth_redirect_url":"URL:n uudelleenohjaus","profile_oauth_clients_external_auth":"If you\'re using an external authentication provider like Authelia, OAuth Clients will not work. You can use Personal Access Tokens only.","profile_oauth_redirect_url_help":"Sovelluksesi valtuutuksen callback URL.","profile_authorized_apps":"Valtuutetut sovellukset","profile_authorized_clients":"Valtuutetut asiakkaat","profile_scopes":"Aihepiirit","profile_revoke":"Peruuta","profile_personal_access_tokens":"Henkilökohtaiset Käyttöoikeuskoodit","profile_personal_access_token":"Henkilökohtainen Käyttöoikeuskoodi","profile_personal_access_token_explanation":"Tässä on uusi henkilökohtainen pääsytunnuksesi. Tämä on ainoa kerta, kun se näytetään, joten älä hävitä sitä! Voit nyt käyttää tätä tunnusta tehdäksesi API-pyyntöjä.","profile_no_personal_access_token":"Et ole luonut henkilökohtaisia käyttöoikeustunnuksia.","profile_create_new_token":"Luo uusi tunnus","profile_create_token":"Luo tunnus","profile_create":"Luo","profile_save_changes":"Tallenna muutokset","default_group_title_name":"(ryhmittelemättömät)","piggy_bank":"Säästöpossu","profile_oauth_client_secret_title":"Asiakkaan salausavain (Client secret)","profile_oauth_client_secret_expl":"Tässä on uusi asiakkaan salausavaimesi. Tämä on ainoa kerta kun se näytetään, joten älä hukkaa sitä! Voit nyt käyttää tätä avainta tehdäksesi API komentoja.","profile_oauth_confidential":"Luottamuksellinen","profile_oauth_confidential_help":"Vaadi asiakasta tunnistautumaan salausavaimella. Luotettavat asiakkaat pystyvät ylläpitämään käyttäjätunnuksia turvallisella tavalla paljastamatta niitä luvattomille osapuolille. Julkiset sovellukset, kuten natiivi työpöytä tai JavaScript SPA sovellukset, eivät pysty pitämään salausavaimia tietoturvallisesti.","multi_account_warning_unknown":"Riippuen luomasi tapahtuman tyypistä, myöhempien jaotteluiden lähde- ja/tai kohdetilin tyyppi voidaan kumota sen mukaan, mitä on määritelty tapahtuman ensimmäisessä jaossa.","multi_account_warning_withdrawal":"Muista, että myöhempien jakojen lähdetili määräytyy noston ensimmäisen jaon määritysten mukaan.","multi_account_warning_deposit":"Muista, että myöhempien jakojen kohdetili määräytyy talletuksen ensimmäisen jaon määritysten mukaan.","multi_account_warning_transfer":"Muista, että myöhempien jakojen lähde- ja kohdetili määräytyvät ensimmäisen jaon määritysten mukaan.","webhook_trigger_STORE_TRANSACTION":"After transaction creation","webhook_trigger_UPDATE_TRANSACTION":"After transaction update","webhook_trigger_DESTROY_TRANSACTION":"After transaction delete","webhook_response_TRANSACTIONS":"Transaction details","webhook_response_ACCOUNTS":"Account details","webhook_response_none_NONE":"No details","webhook_delivery_JSON":"JSON","actions":"Toiminnot","meta_data":"Metatieto","webhook_messages":"Webhook message","inactive":"Ei aktiivinen","no_webhook_messages":"There are no webhook messages","inspect":"Inspect","create_new_webhook":"Create new webhook","webhooks":"Webhookit","webhook_trigger_form_help":"Indicate on what event the webhook will trigger","webhook_response_form_help":"Indicate what the webhook must submit to the URL.","webhook_delivery_form_help":"Which format the webhook must deliver data in.","webhook_active_form_help":"The webhook must be active or it won\'t be called.","edit_webhook_js":"Edit webhook \\"{title}\\"","webhook_was_triggered":"The webhook was triggered on the indicated transaction. Please wait for results to appear.","view_message":"View message","view_attempts":"View failed attempts","message_content_title":"Webhook message content","message_content_help":"This is the content of the message that was sent (or tried) using this webhook.","attempt_content_title":"Webhook attempts","attempt_content_help":"These are all the unsuccessful attempts of this webhook message to submit to the configured URL. After some time, Firefly III will stop trying.","no_attempts":"There are no unsuccessful attempts. That\'s a good thing!","webhook_attempt_at":"Attempt at {moment}","logs":"Logs","response":"Response","visit_webhook_url":"Visit webhook URL","reset_webhook_secret":"Reset webhook secret"},"form":{"url":"URL-osoite","active":"Aktiivinen","interest_date":"Korkopäivä","title":"Otsikko","book_date":"Kirjauspäivä","process_date":"Käsittelypäivä","due_date":"Eräpäivä","foreign_amount":"Ulkomaan summa","payment_date":"Maksupäivä","invoice_date":"Laskun päivämäärä","internal_reference":"Sisäinen viite","webhook_response":"Response","webhook_trigger":"Trigger","webhook_delivery":"Delivery"},"list":{"active":"Aktiivinen?","trigger":"Trigger","response":"Response","delivery":"Delivery","url":"URL","secret":"Secret"},"config":{"html_language":"fi","date_time_fns":"MMMM do, yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/fr.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/fr.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"firefly":{"welcome_back":"Quoi de neuf ?","flash_error":"Erreur !","flash_warning":"Attention !","flash_success":"Super !","close":"Fermer","select_dest_account":"Please select or type a valid destination account name","select_source_account":"Please select or type a valid source account name","split_transaction_title":"Description de l\'opération séparée","errors_submission":"Certaines informations ne sont pas correctes dans votre formulaire. Veuillez vérifier les erreurs ci-dessous.","split":"Séparation","single_split":"Séparation unique","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">L\'opération n°{ID} (\\"{title}\\")</a> a été enregistrée.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Le Webhook #{ID} (\\"{title}\\")</a> a été enregistré.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Le webhook #{ID}</a> (\\"{title}\\") a été mis à jour.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">L\'opération n°{ID}</a> (\\"{title}\\") a été mise à jour.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">L\'opération n°{ID}</a> a été enregistrée.","transaction_journal_information":"Informations sur l\'opération","submission_options":"Options de soumission","apply_rules_checkbox":"Appliquer les règles","fire_webhooks_checkbox":"Lancer les webhooks","no_budget_pointer":"Vous semblez n’avoir encore aucun budget. Vous devriez en créer un sur la page des <a href=\\"budgets\\">budgets</a>. Les budgets peuvent vous aider à garder une trace des dépenses.","no_bill_pointer":"Vous semblez n\'avoir encore aucune facture. Vous devriez en créer une sur la page <a href=\\"bills\\">factures</a>-. Les factures peuvent vous aider à garder une trace des dépenses.","source_account":"Compte source","hidden_fields_preferences":"Vous pouvez activer plus d\'options d\'opérations dans vos <a href=\\"preferences\\">paramètres</a>.","destination_account":"Compte de destination","add_another_split":"Ajouter une autre fraction","submission":"Soumission","stored_journal":"Opération \\":description\\" créée avec succès","create_another":"Après enregistrement, revenir ici pour en créer un nouveau.","reset_after":"Réinitialiser le formulaire après soumission","submit":"Soumettre","amount":"Montant","date":"Date","is_reconciled_fields_dropped":"Comme cette opération est rapprochée, vous ne pourrez pas modifier les comptes, ni le(s) montant(s).","tags":"Tags","no_budget":"(pas de budget)","no_bill":"(aucune facture)","category":"Catégorie","attachments":"Pièces jointes","notes":"Notes","external_url":"URL externe","update_transaction":"Mettre à jour l\'opération","after_update_create_another":"Après la mise à jour, revenir ici pour continuer l\'édition.","store_as_new":"Enregistrer comme une nouvelle opération au lieu de mettre à jour.","split_title_help":"Si vous créez une opération séparée, il doit y avoir une description globale pour chaque fraction de l\'opération.","none_in_select_list":"(aucun)","no_piggy_bank":"(aucune tirelire)","description":"Description","split_transaction_title_help":"Si vous créez une opération séparée, il doit y avoir une description globale pour chaque fraction de l\'opération.","destination_account_reconciliation":"Vous ne pouvez pas modifier le compte de destination d\'une opération de rapprochement.","source_account_reconciliation":"Vous ne pouvez pas modifier le compte source d\'une opération de rapprochement.","budget":"Budget","bill":"Facture","you_create_withdrawal":"Vous saisissez une dépense.","you_create_transfer":"Vous saisissez un transfert.","you_create_deposit":"Vous saisissez un dépôt.","edit":"Modifier","delete":"Supprimer","name":"Nom","profile_whoops":"Oups !","profile_something_wrong":"Une erreur s\'est produite !","profile_try_again":"Une erreur s’est produite. Merci d’essayer à nouveau.","profile_oauth_clients":"Clients OAuth","profile_oauth_no_clients":"Vous n’avez pas encore créé de client OAuth.","profile_oauth_clients_header":"Clients","profile_oauth_client_id":"Identifiant","profile_oauth_client_name":"Nom","profile_oauth_client_secret":"Secret","profile_oauth_create_new_client":"Créer un nouveau client","profile_oauth_create_client":"Créer un client","profile_oauth_edit_client":"Modifier le client","profile_oauth_name_help":"Quelque chose que vos utilisateurs reconnaîtront et qui inspirera confiance.","profile_oauth_redirect_url":"URL de redirection","profile_oauth_clients_external_auth":"Si vous utilisez un fournisseur d\'authentification externe comme Authelia, les clients OAuth ne fonctionneront pas. Vous ne pouvez utiliser que des jetons d\'accès personnel.","profile_oauth_redirect_url_help":"URL de callback de votre application.","profile_authorized_apps":"Applications autorisées","profile_authorized_clients":"Clients autorisés","profile_scopes":"Permissions","profile_revoke":"Révoquer","profile_personal_access_tokens":"Jetons d\'accès personnels","profile_personal_access_token":"Jeton d\'accès personnel","profile_personal_access_token_explanation":"Voici votre nouveau jeton d’accès personnel. Ceci est la seule fois où vous pourrez le voir, ne le perdez pas ! Vous pouvez dès à présent utiliser ce jeton pour lancer des requêtes avec l’API.","profile_no_personal_access_token":"Vous n’avez pas encore créé de jeton d’accès personnel.","profile_create_new_token":"Créer un nouveau jeton","profile_create_token":"Créer un jeton","profile_create":"Créer","profile_save_changes":"Enregistrer les modifications","default_group_title_name":"(Sans groupement)","piggy_bank":"Tirelire","profile_oauth_client_secret_title":"Secret du client","profile_oauth_client_secret_expl":"Voici votre nouveau secret de client. C\'est la seule fois qu\'il sera affiché, donc ne le perdez pas ! Vous pouvez maintenant utiliser ce secret pour faire des requêtes d\'API.","profile_oauth_confidential":"Confidentiel","profile_oauth_confidential_help":"Exiger que le client s\'authentifie avec un secret. Les clients confidentiels peuvent détenir des informations d\'identification de manière sécurisée sans les exposer à des tiers non autorisés. Les applications publiques, telles que les applications de bureau natif ou les SPA JavaScript, ne peuvent pas tenir des secrets en toute sécurité.","multi_account_warning_unknown":"Selon le type d\'opération que vous créez, le(s) compte(s) source et/ou de destination des séparations suivantes peuvent être remplacés par celui de la première séparation de l\'opération.","multi_account_warning_withdrawal":"Gardez en tête que le compte source des séparations suivantes peut être remplacé par celui de la première séparation de la dépense.","multi_account_warning_deposit":"Gardez en tête que le compte de destination des séparations suivantes peut être remplacé par celui de la première séparation du dépôt.","multi_account_warning_transfer":"Gardez en tête que les comptes source et de destination des séparations suivantes peuvent être remplacés par ceux de la première séparation du transfert.","webhook_trigger_STORE_TRANSACTION":"Après la création de l\'opération","webhook_trigger_UPDATE_TRANSACTION":"Après la mise à jour de l\'opération","webhook_trigger_DESTROY_TRANSACTION":"Après la suppression de l\'opération","webhook_response_TRANSACTIONS":"Détails de l\'opération","webhook_response_ACCOUNTS":"Détails du compte","webhook_response_none_NONE":"Aucun détail","webhook_delivery_JSON":"JSON","actions":"Actions","meta_data":"Métadonnées","webhook_messages":"Message webhook","inactive":"Inactif","no_webhook_messages":"Il n\'y a pas de messages webhook","inspect":"Inspecter","create_new_webhook":"Créer un nouveau webhook","webhooks":"Webhooks","webhook_trigger_form_help":"Indique sur quel événement le webhook va se déclencher","webhook_response_form_help":"Indiquer ce que le webhook doit envoyer à l\'URL.","webhook_delivery_form_help":"Le format dans lequel le webhook doit fournir des données.","webhook_active_form_help":"Le webhook doit être actif, sinon il ne sera pas appelé.","edit_webhook_js":"Modifier le webhook \\"{title}\\"","webhook_was_triggered":"Le webhook a été déclenché sur l\'opération indiquée. Veuillez attendre que les résultats apparaissent.","view_message":"Afficher le message","view_attempts":"Voir les tentatives échouées","message_content_title":"Contenu du message webhook","message_content_help":"Il s\'agit du contenu du message qui a été envoyé (ou essayé) avec ce webhook.","attempt_content_title":"Tentatives de webhook","attempt_content_help":"Ce sont toutes les tentatives infructueuses de ce message webhook à envoyer à l\'URL configurée. Après un certain temps, Firefly III cessera d\'essayer.","no_attempts":"Il n\'y a pas de tentatives infructueuses. C\'est une bonne chose !","webhook_attempt_at":"Tentative à {moment}","logs":"Journaux","response":"Réponse","visit_webhook_url":"Visiter l\'URL du webhook","reset_webhook_secret":"Réinitialiser le secret du webhook"},"form":{"url":"Liens","active":"Actif","interest_date":"Date de valeur (intérêts)","title":"Titre","book_date":"Date d\'enregistrement","process_date":"Date de traitement","due_date":"Échéance","foreign_amount":"Montant en devise étrangère","payment_date":"Date de paiement","invoice_date":"Date de facturation","internal_reference":"Référence interne","webhook_response":"Réponse","webhook_trigger":"Déclencheur","webhook_delivery":"Distribution"},"list":{"active":"Actif ?","trigger":"Déclencheur","response":"Réponse","delivery":"Distribution","url":"URL","secret":"Secret"},"config":{"html_language":"fr","date_time_fns":"do MMMM, yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/hu.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/hu.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"firefly":{"welcome_back":"Mi a helyzet?","flash_error":"Hiba!","flash_warning":"Figyelmeztetés!","flash_success":"Siker!","close":"Bezárás","select_dest_account":"Please select or type a valid destination account name","select_source_account":"Please select or type a valid source account name","split_transaction_title":"Felosztott tranzakció leírása","errors_submission":"Hiba történt a beküldés során. Kérlek javítsd az alábbi hibákat.","split":"Felosztás","single_split":"Felosztás","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID} (\\"{title}\\")</a> mentve.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> eltárolva.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") frissítve.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID}</a> (\\"{title}\\") has been updated.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID}</a> mentve.","transaction_journal_information":"Tranzakciós információk","submission_options":"Submission options","apply_rules_checkbox":"Apply rules","fire_webhooks_checkbox":"Fire webhooks","no_budget_pointer":"Úgy tűnik, még nincsenek költségkeretek. Költségkereteket a <a href=\\"budgets\\">költségkeretek</a> oldalon lehet létrehozni. A költségkeretek segítenek nyomon követni a költségeket.","no_bill_pointer":"Úgy tűnik, még nincsenek költségkeretek. Költségkereteket a <a href=\\"bills\\">költségkeretek</a> oldalon lehet létrehozni. A költségkeretek segítenek nyomon követni a költségeket.","source_account":"Forrás számla","hidden_fields_preferences":"A <a href=\\"preferences\\">beállításokban</a> több mező is engedélyezhető.","destination_account":"Célszámla","add_another_split":"Másik felosztás hozzáadása","submission":"Feliratkozás","stored_journal":"\\":description\\" új tranzakció sikeresen létrehozva","create_another":"A tárolás után térjen vissza ide új létrehozásához.","reset_after":"Űrlap törlése a beküldés után","submit":"Beküldés","amount":"Összeg","date":"Dátum","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Címkék","no_budget":"(nincs költségkeret)","no_bill":"(no bill)","category":"Kategória","attachments":"Mellékletek","notes":"Megjegyzések","external_url":"External URL","update_transaction":"Tranzakció frissítése","after_update_create_another":"A frissítés után térjen vissza ide a szerkesztés folytatásához.","store_as_new":"Tárolás új tranzakcióként frissítés helyett.","split_title_help":"Felosztott tranzakció létrehozásakor meg kell adni egy globális leírást a tranzakció összes felosztása részére.","none_in_select_list":"(nincs)","no_piggy_bank":"(nincs malacpersely)","description":"Leírás","split_transaction_title_help":"Felosztott tranzakció létrehozásakor meg kell adni egy globális leírást a tranzakció összes felosztása részére.","destination_account_reconciliation":"Nem lehet szerkeszteni egy egyeztetett tranzakció célszámláját.","source_account_reconciliation":"Nem lehet szerkeszteni egy egyeztetett tranzakció forrásszámláját.","budget":"Költségkeret","bill":"Számla","you_create_withdrawal":"Egy költség létrehozása.","you_create_transfer":"Egy átutalás létrehozása.","you_create_deposit":"Egy bevétel létrehozása.","edit":"Szerkesztés","delete":"Törlés","name":"Név","profile_whoops":"Hoppá!","profile_something_wrong":"Hiba történt!","profile_try_again":"Hiba történt. Kérjük, próbálja meg újra.","profile_oauth_clients":"OAuth kliensek","profile_oauth_no_clients":"Nincs létrehozva egyetlen OAuth kliens sem.","profile_oauth_clients_header":"Kliensek","profile_oauth_client_id":"Kliens ID","profile_oauth_client_name":"Megnevezés","profile_oauth_client_secret":"Titkos kód","profile_oauth_create_new_client":"Új kliens létrehozása","profile_oauth_create_client":"Kliens létrehozása","profile_oauth_edit_client":"Kliens szerkesztése","profile_oauth_name_help":"Segítség, hogy a felhasználók tudják mihez kapcsolódik.","profile_oauth_redirect_url":"Átirányítási URL","profile_oauth_clients_external_auth":"If you\'re using an external authentication provider like Authelia, OAuth Clients will not work. You can use Personal Access Tokens only.","profile_oauth_redirect_url_help":"Az alkalmazásban használt autentikációs URL.","profile_authorized_apps":"Engedélyezett alkalmazások","profile_authorized_clients":"Engedélyezett kliensek","profile_scopes":"Hatáskörök","profile_revoke":"Visszavonás","profile_personal_access_tokens":"Személyes hozzáférési tokenek","profile_personal_access_token":"Személyes hozzáférési token","profile_personal_access_token_explanation":"Here is your new personal access token. This is the only time it will be shown so don\'t lose it! You may now use this token to make API requests.","profile_no_personal_access_token":"Nincs létrehozva egyetlen személyes hozzáférési token sem.","profile_create_new_token":"Új token létrehozása","profile_create_token":"Token létrehozása","profile_create":"Létrehozás","profile_save_changes":"Módosítások mentése","default_group_title_name":"(nem csoportosított)","piggy_bank":"Malacpersely","profile_oauth_client_secret_title":"Kliens titkos kódja","profile_oauth_client_secret_expl":"Ez a kliens titkos kódja. Ez az egyetlen alkalom, amikor meg van jelenítve, ne hagyd el! Ezzel a kóddal végezhetsz API hívásokat.","profile_oauth_confidential":"Bizalmas","profile_oauth_confidential_help":"Titkos kód használata a kliens bejelentkezéséhez. Bizonyos kliensek biztonságosan tudnak hitelesítő adatokat tárolni, anélkül hogy jogosulatlan fél hozzáférhetne. Nyilvános kliensek, például mint asztali vagy JavaScript SPA alkalmazások nem tudnak biztonságosan titkos kódot tárolni.","multi_account_warning_unknown":"Depending on the type of transaction you create, the source and/or destination account of subsequent splits may be overruled by whatever is defined in the first split of the transaction.","multi_account_warning_withdrawal":"Keep in mind that the source account of subsequent splits will be overruled by whatever is defined in the first split of the withdrawal.","multi_account_warning_deposit":"Keep in mind that the destination account of subsequent splits will be overruled by whatever is defined in the first split of the deposit.","multi_account_warning_transfer":"Keep in mind that the source + destination account of subsequent splits will be overruled by whatever is defined in the first split of the transfer.","webhook_trigger_STORE_TRANSACTION":"Tranzakció létrehozása után","webhook_trigger_UPDATE_TRANSACTION":"Tranzakció frissítése után","webhook_trigger_DESTROY_TRANSACTION":"Tranzakció törlése után","webhook_response_TRANSACTIONS":"Tranzakció részletei","webhook_response_ACCOUNTS":"Számlaadatok","webhook_response_none_NONE":"Nincsenek részletek","webhook_delivery_JSON":"JSON","actions":"Műveletek","meta_data":"Metaadat","webhook_messages":"Webhook üzenet","inactive":"Inaktív","no_webhook_messages":"Nincsenek webhook üzenetek","inspect":"Vizsgálat","create_new_webhook":"Új webhook létrehozása","webhooks":"Webhook-ok","webhook_trigger_form_help":"Adja meg, hogy a webhook-ot milyen eseményre indítja el","webhook_response_form_help":"Adja meg, hogy a webhook mit küldjön az URL-re.","webhook_delivery_form_help":"Milyen formátumban kézbesítse a webhook az adatokat.","webhook_active_form_help":"A webhook-nak aktívnak kell lennie, különben nem fogják meghívni.","edit_webhook_js":"Webhook \\"{title}\\" módosítása","webhook_was_triggered":"A webhook a jelzett tranzakciónál aktiválódott. Kérem, várjon az eredmények megjelítésére.","view_message":"Üzenet megtekintése","view_attempts":"Sikertelen kísérletek megjelenítése","message_content_title":"Webhook üzenet tartalma","message_content_help":"Az üzenet tartalma amit a webhook küldött (vagy kísérelt meg küldeni).","attempt_content_title":"Webhook kísérletek","attempt_content_help":"Az összes sikertelenül küldött webhook üzenet a beállított URL-re. Idővel a Firefly III felhagy a próbálkozással.","no_attempts":"Nincsenek sikertelen kísérletek. Nagyon jó!","webhook_attempt_at":"Kísérlet {moment}-kor","logs":"Naplók","response":"Válasz","visit_webhook_url":"Webhook URL meglátogatása","reset_webhook_secret":"Webhook titok visszaállítása"},"form":{"url":"URL","active":"Aktív","interest_date":"Kamatfizetési időpont","title":"Cím","book_date":"Könyvelés dátuma","process_date":"Feldolgozás dátuma","due_date":"Lejárati időpont","foreign_amount":"Külföldi összeg","payment_date":"Fizetés dátuma","invoice_date":"Számla dátuma","internal_reference":"Belső hivatkozás","webhook_response":"Response","webhook_trigger":"Trigger","webhook_delivery":"Delivery"},"list":{"active":"Aktív?","trigger":"Trigger","response":"Response","delivery":"Delivery","url":"URL","secret":"Secret"},"config":{"html_language":"hu","date_time_fns":"MMMM do, yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/id.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/id.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"firefly":{"welcome_back":"Apa yang sedang dimainkan?","flash_error":"Kesalahan!","flash_warning":"PERINGATAN!","flash_success":"Keberhasilan!","close":"Dekat","select_dest_account":"Please select or type a valid destination account name","select_source_account":"Please select or type a valid source account name","split_transaction_title":"Description of the split transaction","errors_submission":"There was something wrong with your submission. Please check out the errors below.","split":"Pisah","single_split":"Pisah","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID} (\\"{title}\\")</a> has been stored.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> has been stored.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") has been updated.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID}</a> (\\"{title}\\") has been updated.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID}</a> has been stored.","transaction_journal_information":"Informasi transaksi","submission_options":"Submission options","apply_rules_checkbox":"Apply rules","fire_webhooks_checkbox":"Fire webhooks","no_budget_pointer":"Anda tampaknya belum memiliki anggaran. Anda harus membuat beberapa di halaman-<a href=\\"budgets\\">anggaran</a>. Anggaran dapat membantu anda melacak pengeluaran.","no_bill_pointer":"Anda tampaknya belum memiliki tagihan. Anda harus membuat beberapa di halaman-<a href=\\"bills\\">tagihan</a>. Tagihan dapat membantu anda melacak pengeluaran.","source_account":"Akun sumber","hidden_fields_preferences":"You can enable more transaction options in your <a href=\\"preferences\\">preferences</a>.","destination_account":"Akun tujuan","add_another_split":"Tambahkan perpecahan lagi","submission":"Submission","stored_journal":"Berhasil membuat transaksi baru \\":description\\"","create_another":"After storing, return here to create another one.","reset_after":"Reset form after submission","submit":"Menyerahkan","amount":"Jumlah","date":"Tanggal","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Tag","no_budget":"(no budget)","no_bill":"(no bill)","category":"Kategori","attachments":"Lampiran","notes":"Notes","external_url":"URL luar","update_transaction":"Update transaction","after_update_create_another":"After updating, return here to continue editing.","store_as_new":"Store as a new transaction instead of updating.","split_title_help":"If you create a split transaction, there must be a global description for all splits of the transaction.","none_in_select_list":"(tidak ada)","no_piggy_bank":"(tidak ada celengan)","description":"Deskripsi","split_transaction_title_help":"If you create a split transaction, there must be a global description for all splits of the transaction.","destination_account_reconciliation":"You can\'t edit the destination account of a reconciliation transaction.","source_account_reconciliation":"Anda tidak dapat mengedit akun sumber dari transaksi rekonsiliasi.","budget":"Anggaran","bill":"Tagihan","you_create_withdrawal":"You\'re creating a withdrawal.","you_create_transfer":"You\'re creating a transfer.","you_create_deposit":"You\'re creating a deposit.","edit":"Edit","delete":"Menghapus","name":"Nama","profile_whoops":"Whoops!","profile_something_wrong":"Something went wrong!","profile_try_again":"Something went wrong. Please try again.","profile_oauth_clients":"OAuth Clients","profile_oauth_no_clients":"You have not created any OAuth clients.","profile_oauth_clients_header":"Clients","profile_oauth_client_id":"Client ID","profile_oauth_client_name":"Name","profile_oauth_client_secret":"Secret","profile_oauth_create_new_client":"Create New Client","profile_oauth_create_client":"Create Client","profile_oauth_edit_client":"Edit Client","profile_oauth_name_help":"Something your users will recognize and trust.","profile_oauth_redirect_url":"Redirect URL","profile_oauth_clients_external_auth":"If you\'re using an external authentication provider like Authelia, OAuth Clients will not work. You can use Personal Access Tokens only.","profile_oauth_redirect_url_help":"Your application\'s authorization callback URL.","profile_authorized_apps":"Authorized applications","profile_authorized_clients":"Authorized clients","profile_scopes":"Scopes","profile_revoke":"Revoke","profile_personal_access_tokens":"Personal Access Tokens","profile_personal_access_token":"Personal Access Token","profile_personal_access_token_explanation":"Here is your new personal access token. This is the only time it will be shown so don\'t lose it! You may now use this token to make API requests.","profile_no_personal_access_token":"You have not created any personal access tokens.","profile_create_new_token":"Create new token","profile_create_token":"Create token","profile_create":"Create","profile_save_changes":"Save changes","default_group_title_name":"(ungrouped)","piggy_bank":"Celengan","profile_oauth_client_secret_title":"Client Secret","profile_oauth_client_secret_expl":"Here is your new client secret. This is the only time it will be shown so don\'t lose it! You may now use this secret to make API requests.","profile_oauth_confidential":"Confidential","profile_oauth_confidential_help":"Require the client to authenticate with a secret. Confidential clients can hold credentials in a secure way without exposing them to unauthorized parties. Public applications, such as native desktop or JavaScript SPA applications, are unable to hold secrets securely.","multi_account_warning_unknown":"Depending on the type of transaction you create, the source and/or destination account of subsequent splits may be overruled by whatever is defined in the first split of the transaction.","multi_account_warning_withdrawal":"Keep in mind that the source account of subsequent splits will be overruled by whatever is defined in the first split of the withdrawal.","multi_account_warning_deposit":"Keep in mind that the destination account of subsequent splits will be overruled by whatever is defined in the first split of the deposit.","multi_account_warning_transfer":"Keep in mind that the source + destination account of subsequent splits will be overruled by whatever is defined in the first split of the transfer.","webhook_trigger_STORE_TRANSACTION":"After transaction creation","webhook_trigger_UPDATE_TRANSACTION":"After transaction update","webhook_trigger_DESTROY_TRANSACTION":"After transaction delete","webhook_response_TRANSACTIONS":"Transaction details","webhook_response_ACCOUNTS":"Account details","webhook_response_none_NONE":"No details","webhook_delivery_JSON":"JSON","actions":"Tindakan","meta_data":"Data meta","webhook_messages":"Webhook message","inactive":"Tidak-aktif","no_webhook_messages":"There are no webhook messages","inspect":"Inspect","create_new_webhook":"Create new webhook","webhooks":"Webhooks","webhook_trigger_form_help":"Indicate on what event the webhook will trigger","webhook_response_form_help":"Indicate what the webhook must submit to the URL.","webhook_delivery_form_help":"Which format the webhook must deliver data in.","webhook_active_form_help":"The webhook must be active or it won\'t be called.","edit_webhook_js":"Edit webhook \\"{title}\\"","webhook_was_triggered":"The webhook was triggered on the indicated transaction. Please wait for results to appear.","view_message":"View message","view_attempts":"View failed attempts","message_content_title":"Webhook message content","message_content_help":"This is the content of the message that was sent (or tried) using this webhook.","attempt_content_title":"Webhook attempts","attempt_content_help":"These are all the unsuccessful attempts of this webhook message to submit to the configured URL. After some time, Firefly III will stop trying.","no_attempts":"There are no unsuccessful attempts. That\'s a good thing!","webhook_attempt_at":"Attempt at {moment}","logs":"Logs","response":"Response","visit_webhook_url":"Visit webhook URL","reset_webhook_secret":"Reset webhook secret"},"form":{"url":"URL","active":"Aktif","interest_date":"Tanggal bunga","title":"Judul","book_date":"Tanggal buku","process_date":"Tanggal pemrosesan","due_date":"Batas tanggal terakhir","foreign_amount":"Jumlah asing","payment_date":"Tanggal pembayaran","invoice_date":"Tanggal faktur","internal_reference":"Referensi internal","webhook_response":"Response","webhook_trigger":"Trigger","webhook_delivery":"Delivery"},"list":{"active":"Aktif?","trigger":"Trigger","response":"Response","delivery":"Delivery","url":"URL","secret":"Secret"},"config":{"html_language":"id","date_time_fns":"do MMMM yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/it.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/it.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"firefly":{"welcome_back":"La tua situazione finanziaria","flash_error":"Errore!","flash_warning":"Avviso!","flash_success":"Successo!","close":"Chiudi","select_dest_account":"Please select or type a valid destination account name","select_source_account":"Please select or type a valid source account name","split_transaction_title":"Descrizione della transazione suddivisa","errors_submission":"Errore durante l\'invio. Controlla gli errori segnalati qui sotto.","split":"Dividi","single_split":"Divisione","transaction_stored_link":"La <a href=\\"transactions/show/{ID}\\">transazione #{ID} (\\"{title}\\")</a> è stata salvata.","webhook_stored_link":"Il <a href=\\"webhooks/show/{ID}\\">webhook #{ID} (\\"{title}\\")</a> è stato archiviato.","webhook_updated_link":"Il <a href=\\"webhooks/show/{ID}\\">webhook #{ID} (\\"{title}\\")</a> è stato aggiornato.","transaction_updated_link":"La <a href=\\"transactions/show/{ID}\\">transazione #{ID}</a> (\\"{title}\\") è stata aggiornata.","transaction_new_stored_link":"La <a href=\\"transactions/show/{ID}\\">transazione #{ID}</a> è stata salvata.","transaction_journal_information":"Informazioni transazione","submission_options":"Opzioni di invio","apply_rules_checkbox":"Applica le regole","fire_webhooks_checkbox":"Esegui webhook","no_budget_pointer":"Sembra che tu non abbia ancora dei budget. Dovresti crearne alcuni nella pagina dei <a href=\\"budgets\\">budget</a>. I budget possono aiutarti a tenere traccia delle spese.","no_bill_pointer":"Sembra che tu non abbia ancora delle bollette. Dovresti crearne alcune nella pagina delle <a href=\\"bills\\">bollette</a>. Le bollette possono aiutarti a tenere traccia delle spese.","source_account":"Conto di origine","hidden_fields_preferences":"Puoi abilitare maggiori opzioni per le transazioni nelle tue <a href=\\"preferences\\">impostazioni</a>.","destination_account":"Conto destinazione","add_another_split":"Aggiungi un\'altra divisione","submission":"Invio","stored_journal":"Nuova transazione \\":description\\" creata correttamente","create_another":"Dopo il salvataggio, torna qui per crearne un\'altra.","reset_after":"Resetta il modulo dopo l\'invio","submit":"Invia","amount":"Importo","date":"Data","is_reconciled_fields_dropped":"Poiché questa transazione è riconciliata, non potrai aggiornare i conti, né gli importi.","tags":"Etichette","no_budget":"(nessun budget)","no_bill":"(nessuna bolletta)","category":"Categoria","attachments":"Allegati","notes":"Note","external_url":"URL esterno","update_transaction":"Aggiorna transazione","after_update_create_another":"Dopo l\'aggiornamento, torna qui per continuare la modifica.","store_as_new":"Salva come nuova transazione invece di aggiornarla.","split_title_help":"Se crei una transazione suddivisa è necessario che ci sia una descrizione globale per tutte le suddivisioni della transazione.","none_in_select_list":"(nessuna)","no_piggy_bank":"(nessun salvadanaio)","description":"Descrizione","split_transaction_title_help":"Se crei una transazione suddivisa, è necessario che ci sia una descrizione globale per tutte le suddivisioni della transazione.","destination_account_reconciliation":"Non è possibile modificare il conto di destinazione di una transazione di riconciliazione.","source_account_reconciliation":"Non puoi modificare il conto di origine di una transazione di riconciliazione.","budget":"Budget","bill":"Bolletta","you_create_withdrawal":"Stai creando un prelievo.","you_create_transfer":"Stai creando un trasferimento.","you_create_deposit":"Stai creando un deposito.","edit":"Modifica","delete":"Elimina","name":"Nome","profile_whoops":"Oops!","profile_something_wrong":"Qualcosa non ha funzionato!","profile_try_again":"Qualcosa non ha funzionato. Riprova.","profile_oauth_clients":"Client OAuth","profile_oauth_no_clients":"Non hai creato nessun client OAuth.","profile_oauth_clients_header":"Client","profile_oauth_client_id":"ID client","profile_oauth_client_name":"Nome","profile_oauth_client_secret":"Segreto","profile_oauth_create_new_client":"Crea nuovo client","profile_oauth_create_client":"Crea client","profile_oauth_edit_client":"Modifica client","profile_oauth_name_help":"Qualcosa di cui i tuoi utenti potranno riconoscere e fidarsi.","profile_oauth_redirect_url":"URL di reindirizzamento","profile_oauth_clients_external_auth":"Se stai utilizzando un fornitore di autenticazione esterno come Authelia, i client di OAuth non funzioneranno. Puoi utilizzare soltanto i Token d\'Accesso Personale.","profile_oauth_redirect_url_help":"L\'URL di callback dell\'autorizzazione della tua applicazione.","profile_authorized_apps":"Applicazioni autorizzate","profile_authorized_clients":"Client autorizzati","profile_scopes":"Ambiti","profile_revoke":"Revoca","profile_personal_access_tokens":"Token di acceso personale","profile_personal_access_token":"Token di acceso personale","profile_personal_access_token_explanation":"Ecco il tuo nuovo token di accesso personale. Questa è l\'unica volta che ti viene mostrato per cui non perderlo! Da adesso puoi utilizzare questo token per effettuare delle richieste API.","profile_no_personal_access_token":"Non hai creato alcun token di accesso personale.","profile_create_new_token":"Crea nuovo token","profile_create_token":"Crea token","profile_create":"Crea","profile_save_changes":"Salva modifiche","default_group_title_name":"(non in un gruppo)","piggy_bank":"Salvadanaio","profile_oauth_client_secret_title":"Segreto del client","profile_oauth_client_secret_expl":"Ecco il segreto del nuovo client. Questa è l\'unica occasione in cui viene mostrato pertanto non perderlo! Ora puoi usare questo segreto per effettuare delle richieste alle API.","profile_oauth_confidential":"Riservato","profile_oauth_confidential_help":"Richiede al client di autenticarsi con un segreto. I client riservati possono conservare le credenziali in modo sicuro senza esporle a soggetti non autorizzati. Le applicazioni pubbliche, come le applicazioni desktop native o JavaScript SPA, non sono in grado di conservare i segreti in modo sicuro.","multi_account_warning_unknown":"A seconda del tipo di transazione che hai creato, il conto di origine e/o destinazione delle successive suddivisioni può essere sovrascritto da qualsiasi cosa sia definita nella prima suddivisione della transazione.","multi_account_warning_withdrawal":"Ricorda che il conto di origine delle successive suddivisioni verrà sovrascritto da quello definito nella prima suddivisione del prelievo.","multi_account_warning_deposit":"Ricorda che il conto di destinazione delle successive suddivisioni verrà sovrascritto da quello definito nella prima suddivisione del deposito.","multi_account_warning_transfer":"Ricorda che il conto di origine e il conto di destinazione delle successive suddivisioni verranno sovrascritti da quelli definiti nella prima suddivisione del trasferimento.","webhook_trigger_STORE_TRANSACTION":"Dopo aver creato la transazione","webhook_trigger_UPDATE_TRANSACTION":"Dopo aver aggiornato la transazione","webhook_trigger_DESTROY_TRANSACTION":"Dopo aver eliminato la transazione","webhook_response_TRANSACTIONS":"Dettagli transazione","webhook_response_ACCOUNTS":"Dettagli conto","webhook_response_none_NONE":"Nessun dettaglio","webhook_delivery_JSON":"JSON","actions":"Azioni","meta_data":"Meta dati","webhook_messages":"Messaggio Webhook","inactive":"Disattivo","no_webhook_messages":"Non ci sono messaggi webhook","inspect":"Ispeziona","create_new_webhook":"Crea nuovo webhook","webhooks":"Webhook","webhook_trigger_form_help":"Indica quale evento attiverà il webhook","webhook_response_form_help":"Indica cosa il webhook deve inviare all\'URL.","webhook_delivery_form_help":"In quale formato il webhook deve fornire i dati.","webhook_active_form_help":"Il webhook deve essere attivo o non verrà chiamato.","edit_webhook_js":"Modifica webhook \\"{title}\\"","webhook_was_triggered":"Il webhook è stato attivato sulla transazione indicata. Si prega di attendere che i risultati appaiano.","view_message":"Visualizza messaggio","view_attempts":"Visualizza tentativi falliti","message_content_title":"Contenuto del messaggio Webhook","message_content_help":"Questo è il contenuto del messaggio che è stato inviato (o ha tentato) utilizzando questo webhook.","attempt_content_title":"Tentativi del Webhook","attempt_content_help":"Questi sono tutti i tentativi falliti di questo messaggio webhook da inviare all\'URL configurato. Dopo qualche tempo, Firefly III smetterà di provare.","no_attempts":"Non ci sono tentativi falliti. È una buona cosa!","webhook_attempt_at":"Tentativo a {moment}","logs":"Log","response":"Risposta","visit_webhook_url":"Visita URL webhook","reset_webhook_secret":"Reimposta il segreto del webhook"},"form":{"url":"URL","active":"Attivo","interest_date":"Data di valuta","title":"Titolo","book_date":"Data contabile","process_date":"Data elaborazione","due_date":"Data scadenza","foreign_amount":"Importo estero","payment_date":"Data pagamento","invoice_date":"Data fatturazione","internal_reference":"Riferimento interno","webhook_response":"Risposta","webhook_trigger":"Trigger","webhook_delivery":"Consegna"},"list":{"active":"Attivo","trigger":"Trigger","response":"Risposta","delivery":"Consegna","url":"URL","secret":"Segreto"},"config":{"html_language":"it","date_time_fns":"do MMMM yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/ja.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/ja.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"firefly":{"welcome_back":"概要","flash_error":"エラー！","flash_warning":"警告！","flash_success":"成功しました！","close":"閉じる","select_dest_account":"Please select or type a valid destination account name","select_source_account":"Please select or type a valid source account name","split_transaction_title":"分割取引の概要","errors_submission":"There was something wrong with your submission. Please check out the errors below.","split":"分割","single_split":"分割","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">取引 #{ID}「{title}」</a> が保存されました。","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> が保存されました。","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> が更新されました。","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">取引 #{ID}「{title}」</a> が更新されました。","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">取引 #{ID}</a> が保存されました。","transaction_journal_information":"取引情報","submission_options":"送信オプション","apply_rules_checkbox":"ルールを適用","fire_webhooks_checkbox":"Webhookを実行","no_budget_pointer":"まだ予算を立てていないようです。<a href=\\"/budgets\\">予算</a>ページで作成してください。予算は支出の把握に役立ちます。","no_bill_pointer":"まだ請求がないようです。<a href=\\"/budgets\\">請求</a>ページで作成してください。請求は支出の把握に役立ちます。","source_account":"引き出し口座","hidden_fields_preferences":"<a href=\\"preferences\\">設定</a> で追加の取引オプションを有効にできます。","destination_account":"預け入れ口座","add_another_split":"別の分割を追加","submission":"送信","stored_journal":"取引「:description」を作成しました","create_another":"保存後に戻り作成を続ける。","reset_after":"送信後にフォームをリセット","submit":"送信","amount":"金額","date":"日付","is_reconciled_fields_dropped":"この取引は照合済みのため、口座や金額を更新することはできません。","tags":"タグ","no_budget":"(予算なし)","no_bill":"(請求なし)","category":"カテゴリ","attachments":"添付ファイル","notes":"備考","external_url":"外部 URL","update_transaction":"取引を更新","after_update_create_another":"保存後に戻って編集を続ける。","store_as_new":"更新せず新しい取引として保存する。","split_title_help":"分割取引を作成する場合、取引のすべての分割の包括的な概要が必要です。","none_in_select_list":"(なし)","no_piggy_bank":"(貯金箱がありません)","description":"概要","split_transaction_title_help":"分割取引を作成する場合、取引のすべての分割の包括的な概要が必要です。","destination_account_reconciliation":"預け入れ口座の取引照合を編集することはできません。","source_account_reconciliation":"引き出し口座の取引照合を編集することはできません。","budget":"予算","bill":"請求","you_create_withdrawal":"出金を作成しています。","you_create_transfer":"送金を作成しています。","you_create_deposit":"入金を作成しています。","edit":"編集","delete":"削除","name":"名称","profile_whoops":"おっと！","profile_something_wrong":"何か問題が発生しました！","profile_try_again":"問題が発生しました。もう一度やり直してください。","profile_oauth_clients":"OAuthクライアント","profile_oauth_no_clients":"OAuthクライアントを作成していません。","profile_oauth_clients_header":"クライアント","profile_oauth_client_id":"クライアント ID","profile_oauth_client_name":"名前","profile_oauth_client_secret":"シークレット","profile_oauth_create_new_client":"新しいクライアントを作成","profile_oauth_create_client":"クライアントを作成","profile_oauth_edit_client":"クライアントの編集","profile_oauth_name_help":"ユーザーが認識、信頼するものです。","profile_oauth_redirect_url":"リダイレクト URL","profile_oauth_clients_external_auth":"Autheliaのような外部認証プロバイダを使用している場合、OAuth クライアントは動作しません。パーソナルアクセストークンのみを使用できます。","profile_oauth_redirect_url_help":"アプリケーションの認証コールバック URL です。","profile_authorized_apps":"認証済みアプリケーション","profile_authorized_clients":"認証済みクライアント","profile_scopes":"スコープ","profile_revoke":"無効にする","profile_personal_access_tokens":"パーソナルアクセストークン","profile_personal_access_token":"個人アクセストークン","profile_personal_access_token_explanation":"新しいパーソナルアクセストークンです。 これは一度しか表示されないので、失くさないでください！このシークレットにより API リクエストを実行できます。","profile_no_personal_access_token":"パーソナルアクセストークンは作成されていません。","profile_create_new_token":"新しいトークンを作成","profile_create_token":"トークンを作成","profile_create":"作成","profile_save_changes":"変更を保存","default_group_title_name":"(グループなし)","piggy_bank":"貯金箱","profile_oauth_client_secret_title":"クライアントシークレット","profile_oauth_client_secret_expl":"新しいクライアントシークレットです。 これは一度しか表示されないので、失くさないでください！このシークレットにより API リクエストを実行できます。","profile_oauth_confidential":"機密","profile_oauth_confidential_help":"クライアントにシークレットを使って認証することを要求します。内々のクライアントは、許可されていない者に公開することなく、認証情報を安全な方法で保持できます。 ネイティブデスクトップや JavaScript SPAアプリケーションなどのパブリックアプリケーションは、シークレットを安全に保持することはできません。","multi_account_warning_unknown":"作成する取引の種類に応じて、続く分割の引き出し口座や預け入れ口座は、取引の最初の分割で定義されているものによって覆される可能性があります。","multi_account_warning_withdrawal":"続く分割の引き出し口座は、出金の最初の分割の定義によって覆されることに注意してください。","multi_account_warning_deposit":"続く分割の預け入れ口座は、送金の最初の分割の定義によって覆されることに注意してください。","multi_account_warning_transfer":"続く分割の預け入れ口座と引き出し口座は、送金の最初の分割の定義によって覆されることに注意してください。","webhook_trigger_STORE_TRANSACTION":"取引作成後","webhook_trigger_UPDATE_TRANSACTION":"取引更新後","webhook_trigger_DESTROY_TRANSACTION":"取引削除後","webhook_response_TRANSACTIONS":"取引詳細","webhook_response_ACCOUNTS":"口座詳細","webhook_response_none_NONE":"詳細なし","webhook_delivery_JSON":"JSON","actions":"操作","meta_data":"メタデータ","webhook_messages":"Webhookメッセージ","inactive":"非アクティブ","no_webhook_messages":"Webhookメッセージはありません","inspect":"詳細確認","create_new_webhook":"Webhookを作成","webhooks":"Webhook","webhook_trigger_form_help":"Webhookがトリガーするイベントです","webhook_response_form_help":"WebhookがURLに送信するものです。","webhook_delivery_form_help":"Webhookがデータを配信するフォーマットです。","webhook_active_form_help":"Webhookは有効である必要があります。でなければ呼び出されません。","edit_webhook_js":"Webhook「{title}」を編集","webhook_was_triggered":"指定された取引でWebhookがトリガーされました。結果が表示されるまでお待ちください。","view_message":"メッセージを見る","view_attempts":"失敗した試行の表示","message_content_title":"Webhookメッセージの内容","message_content_help":"このWebhookを使用して送信（または送信試行）されたメッセージの内容です。","attempt_content_title":"Webhookの試行","attempt_content_help":"設定されたURLに送信するWebhookメッセージの試みはすべて失敗しました。しばらくするとFirefly IIIは試行を停止します。","no_attempts":"失敗した試行はありません。これは良いことです！","webhook_attempt_at":"{moment} に試行","logs":"ログ","response":"レスポンス","visit_webhook_url":"WebhookのURLを開く","reset_webhook_secret":"Webhookのシークレットをリセット"},"form":{"url":"URL","active":"有効","interest_date":"利息日","title":"タイトル","book_date":"記帳日","process_date":"処理日","due_date":"期日","foreign_amount":"外貨金額","payment_date":"引き落とし日","invoice_date":"領収書発行日","internal_reference":"内部参照","webhook_response":"レスポンス","webhook_trigger":"トリガー","webhook_delivery":"配信"},"list":{"active":"有効","trigger":"トリガー","response":"レスポンス","delivery":"配信","url":"URL","secret":"シークレット"},"config":{"html_language":"ja","date_time_fns":"yyyy年MMMM月do日 HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/ko.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/ko.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"firefly":{"welcome_back":"무슨 일이죠?","flash_error":"오류!","flash_warning":"경고!","flash_success":"성공!","close":"닫기","select_dest_account":"Please select or type a valid destination account name","select_source_account":"Please select or type a valid source account name","split_transaction_title":"분할 거래에 대한 설명","errors_submission":"There was something wrong with your submission. Please check out the errors below.","split":"나누기","single_split":"나누기","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">거래 #{ID} (\\"{title}\\")</a>가 저장되었습니다.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">웹훅 #{ID} (\\"{title}\\")</a>이 저장되었습니다.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">웹훅 #{ID}</a> (\\"{title}\\")이 업데이트 되었습니다.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">거래 #{ID}</a> (\\"{title}\\") 이 업데이트 되었습니다.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">거래 #{ID}</a>가 저장되었습니다.","transaction_journal_information":"거래 정보","submission_options":"제출 옵션","apply_rules_checkbox":"규칙 적용","fire_webhooks_checkbox":"웹훅 실행","no_budget_pointer":"예산이 아직 없는 것 같습니다. <a href=\\"budgets\\">예산</a> 페이지에서 예산을 만들어야 합니다. 예산은 지출을 추적하는데 도움이 됩니다.","no_bill_pointer":"청구서가 아직 없는 것 같습니다. <a href=\\"bills\\">청구서</a> 페이지에서 청구서를 만들어야 합니다. 청구서는 비용을 추적하는 데 도움이 됩니다.","source_account":"소스 계정","hidden_fields_preferences":"<a href=\\"preferences\\">환경설정</a>에서 더 많은 거래 옵션을 활성화할 수 있습니다.","destination_account":"대상 계정","add_another_split":"다른 분할 추가","submission":"제출","stored_journal":"새로운 \\":description\\" 거래 생성 성공","create_another":"저장후 이 페이지로 돌아와 다른 것을 만듭니다.","reset_after":"제출 후 양식 재설정","submit":"제출","amount":"금액","date":"날짜","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"태그","no_budget":"(예산 없음)","no_bill":"(청구서 없음)","category":"카테고리","attachments":"첨부 파일","notes":"노트","external_url":"외부 URL","update_transaction":"거래 업데이트","after_update_create_another":"업데이트 후 여기로 돌아와서 수정을 계속합니다.","store_as_new":"업데이트하는 대신 새 거래로 저장합니다.","split_title_help":"분할 거래를 생성하는 경우 거래의 모든 분할에 대한 전체 설명이 있어야 합니다.","none_in_select_list":"(없음)","no_piggy_bank":"(저금통 없음)","description":"설명","split_transaction_title_help":"분할 거래를 생성하는 경우 거래의 모든 분할에 대한 전체 설명이 있어야 합니다.","destination_account_reconciliation":"조정 거래의 대상 계정은 편집할 수 없습니다.","source_account_reconciliation":"조정 거래의 소스 계정은 편집할 수 없습니다.","budget":"예산","bill":"청구서","you_create_withdrawal":"출금을 생성하고 있습니다.","you_create_transfer":"전송을 생성하고 있습니다.","you_create_deposit":"입금을 생성하고 있습니다.","edit":"수정","delete":"삭제","name":"이름","profile_whoops":"이런!","profile_something_wrong":"문제가 발생했습니다!","profile_try_again":"문제가 발생했습니다. 다시 시도해주세요.","profile_oauth_clients":"OAuth 클라이언트","profile_oauth_no_clients":"OAuth 클라이언트를 만들지 않았습니다.","profile_oauth_clients_header":"클라이언트","profile_oauth_client_id":"클라이언트 ID","profile_oauth_client_name":"이름","profile_oauth_client_secret":"시크릿","profile_oauth_create_new_client":"새로운 클라이언트 만들기","profile_oauth_create_client":"클라이언트 만들기","profile_oauth_edit_client":"클라이언트 수정","profile_oauth_name_help":"사용자가 인지하고 신뢰할 수 있는 것.","profile_oauth_redirect_url":"리디렉션 URL","profile_oauth_clients_external_auth":"Authelia와 같은 외부 인증 제공업체를 사용하는 경우 OAuth 클라이언트가 작동하지 않습니다. 개인 액세스 토큰만 사용할 수 있습니다.","profile_oauth_redirect_url_help":"애플리케이션의 인증 콜백 URL입니다.","profile_authorized_apps":"인증된 애플리케이션","profile_authorized_clients":"인증된 클라이언트","profile_scopes":"범위","profile_revoke":"취소","profile_personal_access_tokens":"개인 액세스 토큰","profile_personal_access_token":"개인 액세스 토큰","profile_personal_access_token_explanation":"다음은 새 개인용 액세스 토큰입니다. 이번 한 번만 표시되니 놓치지 마세요! 이제 이 토큰을 사용하여 API 요청을 할 수 있습니다.","profile_no_personal_access_token":"개인 액세스 토큰을 생성하지 않았습니다.","profile_create_new_token":"새로운 토큰 만들기","profile_create_token":"토큰 생성","profile_create":"생성","profile_save_changes":"변경사항 저장","default_group_title_name":"(그룹화 해제)","piggy_bank":"저금통","profile_oauth_client_secret_title":"클라이언트 시크릿","profile_oauth_client_secret_expl":"다음은 새 클라이언트 암호입니다. 이번 한 번만 표시되니 놓치지 마세요! 이제 이 비밀 번호를 사용하여 API 요청을 할 수 있습니다.","profile_oauth_confidential":"비밀","profile_oauth_confidential_help":"클라이언트가 시크릿으로 인증하도록 요구합니다. 기밀 클라이언트는 권한이 없는 사람에게 자격 증명을 노출하지 않고 안전한 방식으로 자격 증명을 보관할 수 있습니다. 기본 데스크톱 또는 JavaScript SPA 애플리케이션과 같은 공개 애플리케이션은 시크릿을 안전하게 보관할 수 없습니다.","multi_account_warning_unknown":"생성한 거래 유형에 따라 뒤따르는 분할의 소스 및/또는 대상 계정은 대상 계정 거래의 첫 번째 분할에 정의된 내용에 따라 무시될 수 있습니다.","multi_account_warning_withdrawal":"뒤따르는 분할의 소스 계정은 첫 번째 출금 분할에 정의된 내용에 따라 재정의된다는 점에 유의하시기 바랍니다.","multi_account_warning_deposit":"뒤따르는 분할의 대상 계정은 첫 번째 입금 분할에 정의된 내용에 따라 재정의된다는 점에 유의하시기 바랍니다.","multi_account_warning_transfer":"뒤따르는 분할의 소스 + 대상 계정은 첫 번째 이체 분할에 정의된 내용에 따라 재정의된다는 점에 유의하시기 바랍니다.","webhook_trigger_STORE_TRANSACTION":"거래 생성 이후","webhook_trigger_UPDATE_TRANSACTION":"거래 업데이트 이후","webhook_trigger_DESTROY_TRANSACTION":"거래 삭제 이후","webhook_response_TRANSACTIONS":"거래 세부 정보","webhook_response_ACCOUNTS":"계정 정보","webhook_response_none_NONE":"상세정보 없음","webhook_delivery_JSON":"JSON","actions":"액션","meta_data":"메타데이터","webhook_messages":"웹훅 메시지","inactive":"비활성화","no_webhook_messages":"웹훅 메시지 없음","inspect":"검사","create_new_webhook":"웹훅 만들기","webhooks":"웹훅","webhook_trigger_form_help":"웹훅이 트리거할 이벤트를 표시합니다","webhook_response_form_help":"웹훅이 URL에 제출해야 하는 내용을 표시합니다.","webhook_delivery_form_help":"웹훅이 데이터를 전달해야 하는 형식입니다.","webhook_active_form_help":"웹훅이 활성화되어 있어야 하며 그렇지 않으면 호출되지 않습니다.","edit_webhook_js":"\\"{title}\\" 웹훅 수정","webhook_was_triggered":"표시된 거래에서 웹훅이 트리거되었습니다. 결과가 나타날 때까지 기다려주세요.","view_message":"메시지 보기","view_attempts":"실패한 시도 보기","message_content_title":"웹훅 메시지 내용","message_content_help":"이 웹훅을 사용하여 전송된(또는 시도한) 메시지의 내용입니다.","attempt_content_title":"웹훅 시도","attempt_content_help":"구성된 URL에 제출하려는 이 웹훅 메시지의 모든 실패한 시도입니다. 잠시 후 Firefly III가 시도를 중지합니다.","no_attempts":"실패한 시도가 없습니다. 좋은 일이네요!","webhook_attempt_at":"{moment}에 시도","logs":"로그","response":"응답","visit_webhook_url":"웹훅 URL 방문","reset_webhook_secret":"웹훅 시크릿 재설정"},"form":{"url":"URL","active":"활성","interest_date":"이자 날짜","title":"제목","book_date":"예약일","process_date":"처리일","due_date":"기한","foreign_amount":"외화 금액","payment_date":"결제일","invoice_date":"청구서 날짜","internal_reference":"내부 참조","webhook_response":"응답","webhook_trigger":"트리거","webhook_delivery":"전달"},"list":{"active":"활성 상태입니까?","trigger":"트리거","response":"응답","delivery":"전달","url":"URL","secret":"Secret"},"config":{"html_language":"ko","date_time_fns":"YYYY년 M월 D일 HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/nb.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/nb.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"firefly":{"welcome_back":"Hvordan går det?","flash_error":"Feil!","flash_warning":"Advarsel!","flash_success":"Suksess!","close":"Lukk","select_dest_account":"Please select or type a valid destination account name","select_source_account":"Please select or type a valid source account name","split_transaction_title":"Beskrivelse av den splittende transaksjon","errors_submission":"There was something wrong with your submission. Please check out the errors below.","split":"Del opp","single_split":"Del opp","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaksjon #{ID} (\\"{title}\\")</a> har blitt lagret.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> er lagret.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") er oppdatert.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Transaksjon #{ID} (\\"{title}\\")</a> har blitt oppdatert.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaksjon #{ID}</a> har blitt lagret.","transaction_journal_information":"Transaksjonsinformasjon","submission_options":"Alternativer for innsending","apply_rules_checkbox":"Bruk regler","fire_webhooks_checkbox":"Fire webhooks","no_budget_pointer":"Det ser ikke ut til at du har noen budsjetter ennå. Du bør opprette noen på <a href=\\"/budgets\\">budsjett</a>-siden. Budsjetter kan hjelpe deg med å holde oversikt over utgifter.","no_bill_pointer":"Det ser ut til at du ikke har noen regninger ennå. Du bør opprette noen på <a href=\\"bills\\">regninger</a>-side. Regninger kan hjelpe deg med å holde oversikt over utgifter.","source_account":"Kildekonto","hidden_fields_preferences":"You can enable more transaction options in your <a href=\\"preferences\\">preferences</a>.","destination_account":"Destinasjonskonto","add_another_split":"Legg til en oppdeling til","submission":"Innlevering","stored_journal":"Opprettet ny transaksjon \\":description\\"","create_another":"Gå tilbake hit etter lagring for å opprette en ny.","reset_after":"Nullstill skjema etter innsending","submit":"Send inn","amount":"Beløp","date":"Dato","is_reconciled_fields_dropped":"Fordi denne transaksjonen er avstemt, vil du ikke kunne oppdatere kontoene eller beløpene.","tags":"Tagger","no_budget":"(ingen budsjett)","no_bill":"(ingen regning)","category":"Kategori","attachments":"Vedlegg","notes":"Notater","external_url":"Ekstern URL","update_transaction":"Oppdater transaksjonen","after_update_create_another":"Gå tilbake hit etter oppdatering, for å fortsette å redigere.","store_as_new":"Lagre som en ny transaksjon istedenfor å oppdatere.","split_title_help":"Hvis du oppretter en splittet transaksjon, må du ha en global beskrivelse for alle deler av transaksjonen.","none_in_select_list":"(ingen)","no_piggy_bank":"(ingen sparegriser)","description":"Beskrivelse","split_transaction_title_help":"Hvis du oppretter en splittet transaksjon, må du ha en hoved beskrivelse for alle deler av transaksjonen.","destination_account_reconciliation":"Du kan ikke redigere kildekontoen for en avstemmingstransaksjon.","source_account_reconciliation":"Du kan ikke redigere kildekontoen for en avstemmingstransaksjon.","budget":"Budsjett","bill":"Regning","you_create_withdrawal":"Du lager et uttak.","you_create_transfer":"Du lager en overføring.","you_create_deposit":"Du lager en innskud.","edit":"Rediger","delete":"Slett","name":"Navn","profile_whoops":"Whoops!","profile_something_wrong":"Noe gikk galt!","profile_try_again":"Noe gikk galt. Prøv på nytt.","profile_oauth_clients":"OAuth klienter","profile_oauth_no_clients":"Du har ikke opprettet noen OAuth klienter.","profile_oauth_clients_header":"Klienter","profile_oauth_client_id":"Klient-ID","profile_oauth_client_name":"Navn","profile_oauth_client_secret":"Secret","profile_oauth_create_new_client":"Opprett Ny Klient","profile_oauth_create_client":"Opprett Klient","profile_oauth_edit_client":"Rediger Klient","profile_oauth_name_help":"Noe brukerne dine vil gjenkjenne og stole på.","profile_oauth_redirect_url":"Videresendings-URL","profile_oauth_clients_external_auth":"Hvis du bruker en ekstern autentiseringsleverandør, som Authelia, vil ikke OAuth klienter fungere. Du kan bare bruke personlige tilgangstokener.","profile_oauth_redirect_url_help":"Programmets tilbakekallingslenke til din adresse.","profile_authorized_apps":"Dine autoriserte applikasjoner","profile_authorized_clients":"Autoriserte klienter","profile_scopes":"Omfang","profile_revoke":"Tilbakekall","profile_personal_access_tokens":"Personlig tilgangsnøkkel (Tokens)","profile_personal_access_token":"Personlig tilgangsnøkkel (Token)","profile_personal_access_token_explanation":"Her er din nye klient \\"secret\\". Dette er den eneste tiden det blir vist så ikke mister den! Du kan nå bruke denne token til å lage API-forespørsler.","profile_no_personal_access_token":"Du har ikke opprettet noen personlig tilgangsnøkkel (tokens).","profile_create_new_token":"Opprette nytt token","profile_create_token":"Opprett token","profile_create":"Opprett","profile_save_changes":"Lagre endringer","default_group_title_name":"(ikke gruppert)","piggy_bank":"Sparegris","profile_oauth_client_secret_title":"Klient hemmilghet","profile_oauth_client_secret_expl":"Her er din nye klient hemmelighet. Dette er den eneste tiden det blir vist så ikke mister den! Du kan nå bruke denne hemmeligheten til å lage API-forespørsler.","profile_oauth_confidential":"Konfidensiell","profile_oauth_confidential_help":"Krev at klienten godkjenner med en \\"secret\\". Konfidensielle klienter kan holde legitimasjon på en sikker måte uten å utsette dem for uautoriserte parter. Offentlige programmer, som skrivebord eller JavaScript SPA-programmer, kan ikke holde secret \\"sikret\\".","multi_account_warning_unknown":"Avhengig av hvilken type transaksjon du oppretter, Kilden og/eller destinasjonskonto for etterfølgende delinger kan overstyres av det som er definert i transaksjonens første del.","multi_account_warning_withdrawal":"Husk at kildekontoen for etterfølgende oppsplitting skal overlates av hva som defineres i den første delen av uttrekket.","multi_account_warning_deposit":"Husk at mottakerkontoen for etterfølgende oppsplitting skal overstyres av det som er definert i den første delen av depositumet.","multi_account_warning_transfer":"Husk at kildens pluss destinasjonskonto med etterfølgende oppdeling overstyres av det som er definert i en første del av overføringen.","webhook_trigger_STORE_TRANSACTION":"Etter transaksjons opprettelse","webhook_trigger_UPDATE_TRANSACTION":"Etter transaksjons oppdatering","webhook_trigger_DESTROY_TRANSACTION":"Etter transaksjons sletting","webhook_response_TRANSACTIONS":"Transaksjonsdetaljer","webhook_response_ACCOUNTS":"Kontodetaljer","webhook_response_none_NONE":"Ingen detaljer","webhook_delivery_JSON":"JSON","actions":"Handlinger","meta_data":"Metadata","webhook_messages":"Webhook melding","inactive":"Inaktiv","no_webhook_messages":"Ingen Webhook meldinger","inspect":"Inspiser","create_new_webhook":"Opprett ny Webhook","webhooks":"Webhooks","webhook_trigger_form_help":"Hvilken hendelse skal Webhook utløse","webhook_response_form_help":"Hva skal Webhook sende til URL.","webhook_delivery_form_help":"Hvilket format skal Webhook sende data i.","webhook_active_form_help":"Webhook må aktiveres for å virke.","edit_webhook_js":"Rediger Webhook \\"{title}\\"","webhook_was_triggered":"Webhook ble trigget på den angitte transaksjonen. Vennligst vent på resultatet.","view_message":"Vis melding","view_attempts":"Vis mislykkede forsøk","message_content_title":"Webhook meldingsinnhold","message_content_help":"Dette er innholdet av meldingen som ble sendt (eller forsøkt sendt) med denne Webhook.","attempt_content_title":"Webhook forsøk","attempt_content_help":"Dette er alle mislykkede forsøk på denne webhook-meldingen som sendes til den konfigurerte URL-en. Etter en tid vil Firefly III slutte å prøve.","no_attempts":"Det er ingen mislykkede forsøk. Det er god ting!","webhook_attempt_at":"Forsøk på {moment}","logs":"Logger","response":"Respons","visit_webhook_url":"Besøk URL til webhook","reset_webhook_secret":"Tilbakestill Webhook nøkkel"},"form":{"url":"Nettadresse","active":"Aktiv","interest_date":"Rentedato","title":"Tittel","book_date":"Bokføringsdato","process_date":"Prosesseringsdato","due_date":"Forfallsdato","foreign_amount":"Utenlandske beløp","payment_date":"Betalingsdato","invoice_date":"Fakturadato","internal_reference":"Intern referanse","webhook_response":"Respons","webhook_trigger":"Utløser","webhook_delivery":"Levering"},"list":{"active":"Er aktiv?","trigger":"Utløser","response":"Respons","delivery":"Levering","url":"Nettadresse","secret":"Hemmelighet"},"config":{"html_language":"nb","date_time_fns":"do MMMM, yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/nl.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/nl.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"firefly":{"welcome_back":"Hoe staat het er voor?","flash_error":"Fout!","flash_warning":"Waarschuwing!","flash_success":"Gelukt!","close":"Sluiten","select_dest_account":"Please select or type a valid destination account name","select_source_account":"Please select or type a valid source account name","split_transaction_title":"Beschrijving van de gesplitste transactie","errors_submission":"Er ging iets mis. Check de errors.","split":"Splitsen","single_split":"Split","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Transactie #{ID} (\\"{title}\\")</a> is opgeslagen.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} ({title})</a> is opgeslagen.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} ({title})</a> is geüpdatet.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Transactie #{ID}</a> (\\"{title}\\") is geüpdatet.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Transactie #{ID}</a> is opgeslagen.","transaction_journal_information":"Transactieinformatie","submission_options":"Inzending opties","apply_rules_checkbox":"Regels toepassen","fire_webhooks_checkbox":"Webhooks starten","no_budget_pointer":"Je hebt nog geen budgetten. Maak er een aantal op de <a href=\\"budgets\\">budgetten</a>-pagina. Met budgetten kan je je uitgaven beter bijhouden.","no_bill_pointer":"Je hebt nog geen contracten. Maak er een aantal op de <a href=\\"bills\\">contracten</a>-pagina. Met contracten kan je je uitgaven beter bijhouden.","source_account":"Bronrekening","hidden_fields_preferences":"Je kan meer transactieopties inschakelen in je <a href=\\"preferences\\">instellingen</a>.","destination_account":"Doelrekening","add_another_split":"Voeg een split toe","submission":"Indienen","stored_journal":"Nieuw transactie \\":description\\" opgeslagen","create_another":"Terug naar deze pagina voor een nieuwe transactie.","reset_after":"Reset formulier na opslaan","submit":"Invoeren","amount":"Bedrag","date":"Datum","is_reconciled_fields_dropped":"Omdat deze transactie al is afgestemd, kan je het bedrag noch de rekeningen wijzigen.","tags":"Tags","no_budget":"(geen budget)","no_bill":"(geen contract)","category":"Categorie","attachments":"Bijlagen","notes":"Notities","external_url":"Externe URL","update_transaction":"Update transactie","after_update_create_another":"Na het opslaan terug om door te gaan met wijzigen.","store_as_new":"Opslaan als nieuwe transactie ipv de huidige bij te werken.","split_title_help":"Als je een gesplitste transactie maakt, moet er een algemene beschrijving zijn voor alle splitsingen van de transactie.","none_in_select_list":"(geen)","no_piggy_bank":"(geen spaarpotje)","description":"Omschrijving","split_transaction_title_help":"Als je een gesplitste transactie maakt, moet er een algemene beschrijving zijn voor alle splitsingen van de transactie.","destination_account_reconciliation":"Je kan de doelrekening van een afstemming niet wijzigen.","source_account_reconciliation":"Je kan de bronrekening van een afstemming niet wijzigen.","budget":"Budget","bill":"Contract","you_create_withdrawal":"Je maakt een uitgave.","you_create_transfer":"Je maakt een overschrijving.","you_create_deposit":"Je maakt inkomsten.","edit":"Wijzig","delete":"Verwijder","name":"Naam","profile_whoops":"Oeps!","profile_something_wrong":"Er is iets mis gegaan!","profile_try_again":"Er is iets misgegaan. Probeer het nogmaals.","profile_oauth_clients":"OAuth Clients","profile_oauth_no_clients":"Je hebt nog geen OAuth-clients aangemaakt.","profile_oauth_clients_header":"Clients","profile_oauth_client_id":"Client ID","profile_oauth_client_name":"Naam","profile_oauth_client_secret":"Secret","profile_oauth_create_new_client":"Nieuwe client aanmaken","profile_oauth_create_client":"Client aanmaken","profile_oauth_edit_client":"Client bewerken","profile_oauth_name_help":"Iets dat je gebruikers herkennen en vertrouwen.","profile_oauth_redirect_url":"Redirect-URL","profile_oauth_clients_external_auth":"Als je een externe verificatieprovider zoals Authelia gebruikt, dan zullen OAuth Clients niet werken. Je kan alleen persoonlijke toegangstokens gebruiken.","profile_oauth_redirect_url_help":"De authorisatie-callback-url van jouw applicatie.","profile_authorized_apps":"Geautoriseerde toepassingen","profile_authorized_clients":"Geautoriseerde clients","profile_scopes":"Scopes","profile_revoke":"Intrekken","profile_personal_access_tokens":"Persoonlijke toegangstokens","profile_personal_access_token":"Persoonlijk toegangstoken","profile_personal_access_token_explanation":"Hier is je nieuwe persoonlijke toegangstoken. Dit is de enige keer dat deze getoond wordt dus verlies deze niet! Je kan deze toegangstoken gebruiken om API-aanvragen te maken.","profile_no_personal_access_token":"Je hebt nog geen persoonlijke toegangstokens aangemaakt.","profile_create_new_token":"Nieuwe token aanmaken","profile_create_token":"Token aanmaken","profile_create":"Creër","profile_save_changes":"Aanpassingen opslaan","default_group_title_name":"(ongegroepeerd)","piggy_bank":"Spaarpotje","profile_oauth_client_secret_title":"Client secret","profile_oauth_client_secret_expl":"Hier is je nieuwe client secret. Dit is de enige keer dat deze getoond wordt dus verlies deze niet! Je kan dit secret gebruiken om API-aanvragen te maken.","profile_oauth_confidential":"Vertrouwelijk","profile_oauth_confidential_help":"Dit vinkje is bedoeld voor applicaties die geheimen kunnen bewaren. Applicaties zoals sommige desktop-apps en Javascript apps kunnen dit niet. In zo\'n geval haal je het vinkje weg.","multi_account_warning_unknown":"Afhankelijk van het type transactie wordt de bron- en/of doelrekening overschreven door wat er in de eerste split staat.","multi_account_warning_withdrawal":"De bronrekening wordt overschreven door wat er in de eerste split staat.","multi_account_warning_deposit":"De doelrekening wordt overschreven door wat er in de eerste split staat.","multi_account_warning_transfer":"De bron + doelrekening wordt overschreven door wat er in de eerste split staat.","webhook_trigger_STORE_TRANSACTION":"Na het maken van een transactie","webhook_trigger_UPDATE_TRANSACTION":"Na het updaten van een transactie","webhook_trigger_DESTROY_TRANSACTION":"Na het verwijderen van een transactie","webhook_response_TRANSACTIONS":"Transactiedetails","webhook_response_ACCOUNTS":"Rekeningdetails","webhook_response_none_NONE":"Geen details","webhook_delivery_JSON":"JSON","actions":"Acties","meta_data":"Metagegevens","webhook_messages":"Webhook-bericht","inactive":"Niet actief","no_webhook_messages":"Er zijn geen webhook-berichten","inspect":"Inspecteren","create_new_webhook":"Maak nieuwe webhook","webhooks":"Webhooks","webhook_trigger_form_help":"Geef aan bij welke gebeurtenis de webhook afgaat","webhook_response_form_help":"Geef aan wat de webhook mee moet sturen.","webhook_delivery_form_help":"Geef aan welk dataformaat gebruikt moet worden.","webhook_active_form_help":"De webhook moet actief zijn anders doet-ie het niet.","edit_webhook_js":"Webhook \\"{title}\\" wijzigen","webhook_was_triggered":"De webhook is getriggerd op de aangegeven transactie. Het resultaat zie je zometeen.","view_message":"Bekijk bericht","view_attempts":"Bekijk mislukte pogingen","message_content_title":"Inhoud van webhook-bericht","message_content_help":"Dit is de inhoud van het bericht dat verzonden was (of niet) met behulp van deze webhook.","attempt_content_title":"Webhookpogingen","attempt_content_help":"Dit zijn alle mislukte pogingen van de webhook om data te versturen. Na een paar keer stopt Firefly III met proberen.","no_attempts":"Er zijn geen mislukte pogingen. Lekker toch?","webhook_attempt_at":"Poging op {moment}","logs":"Logboeken","response":"Reactie","visit_webhook_url":"Bezoek URL van webhook","reset_webhook_secret":"Reset webhook-geheim"},"form":{"url":"URL","active":"Actief","interest_date":"Rentedatum","title":"Titel","book_date":"Boekdatum","process_date":"Verwerkingsdatum","due_date":"Vervaldatum","foreign_amount":"Bedrag in vreemde valuta","payment_date":"Betalingsdatum","invoice_date":"Factuurdatum","internal_reference":"Interne verwijzing","webhook_response":"Reactie","webhook_trigger":"Trigger","webhook_delivery":"Bericht"},"list":{"active":"Actief?","trigger":"Trigger","response":"Reactie","delivery":"Bericht","url":"URL","secret":"Geheim"},"config":{"html_language":"nl","date_time_fns":"d MMMM yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/nn.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/nn.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"firefly":{"welcome_back":"Korleis går det?","flash_error":"Feil!","flash_warning":"Advarsel!","flash_success":"Suksess!","close":"Lukk","select_dest_account":"Please select or type a valid destination account name","select_source_account":"Please select or type a valid source account name","split_transaction_title":"Beskrivinga av den splitta transaksjonen","errors_submission":"There was something wrong with your submission. Please check out the errors below.","split":"Del opp","single_split":"Del opp","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaksjon #{ID} (\\"{title}\\")</a> har vorte lagra.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> er lagra.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") er oppdatert.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Transaksjon #{ID} (\\"{title}\\")</a> har vorte oppdatert.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaksjon #{ID}</a> har vorte lagra.","transaction_journal_information":"Transaksjonsinformasjon","submission_options":"Alternativer for innsending","apply_rules_checkbox":"Bruk reglar","fire_webhooks_checkbox":"Fire webhooks","no_budget_pointer":"Det ser ikkje ut til at du har budsjett enda. Du bør oppretta nokon på <a href=\\"/budgets\\">budsjett</a>-sida. Budsjett kan hjelpa deg med å halda oversikt over utgifter.","no_bill_pointer":"Det ser ut til at du ikkje har nokon rekningar enda. Du bør oppretta nokon på <a href=\\"bills\\">rekningar</a>-side. Rekningar kan hjelpa deg med å holde oversikt over utgifter.","source_account":"Kjeldekonto","hidden_fields_preferences":"You can enable more transaction options in your <a href=\\"preferences\\">preferences</a>.","destination_account":"Målkonto","add_another_split":"Legg til ein oppdeling til","submission":"Submission","stored_journal":"Opprettet ny transaksjon \\":description\\"","create_another":"Gå tilbake hit etter lagring for å oppretta ein ny.","reset_after":"Nullstill skjema etter innsending","submit":"Send inn","amount":"Beløp","date":"Dato","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Nøkkelord","no_budget":"(ingen budsjett)","no_bill":"(ingen rekning)","category":"Kategori","attachments":"Vedlegg","notes":"Notat","external_url":"Ekstern URL","update_transaction":"Oppdater transaksjonen","after_update_create_another":"Gå tilbake hit etter oppdatering, for å fortsetja å redigera.","store_as_new":"Lagra som ein ny transaksjon istedenfor å oppdatera.","split_title_help":"Om du oppretter ein splittet transaksjon, må du ha ein global beskriving for alle deler av transaksjonen.","none_in_select_list":"(ingen)","no_piggy_bank":"(ingen sparegriser)","description":"Beskriving","split_transaction_title_help":"Om du oppretter ein splittet transaksjon, må du ha ein hoved beskriving for alle deler av transaksjonen.","destination_account_reconciliation":"Du kan ikkje redigera kildekontoen for ein avstemmingstransaksjon.","source_account_reconciliation":"Du kan ikkje redigera kildekontoen for ein avstemmingstransaksjon.","budget":"Budsjett","bill":"Rekning","you_create_withdrawal":"Du lager eit uttak.","you_create_transfer":"Du lager ein overføring.","you_create_deposit":"Du lager ein innskud.","edit":"Rediger","delete":"Slett","name":"Namn","profile_whoops":"Oisann!","profile_something_wrong":"Noko gjekk gale!","profile_try_again":"Noko gjekk gale. Prøv på nytt.","profile_oauth_clients":"OAuth klienter","profile_oauth_no_clients":"Du har ikkje oppretta nokon OAuth klienter.","profile_oauth_clients_header":"Klienter","profile_oauth_client_id":"Klient-ID","profile_oauth_client_name":"Namn","profile_oauth_client_secret":"Hemmelegheit","profile_oauth_create_new_client":"Opprett Ny Klient","profile_oauth_create_client":"Opprett Klient","profile_oauth_edit_client":"Rediger Klient","profile_oauth_name_help":"Noko brukarane dine vil gjenkjenne og stole på.","profile_oauth_redirect_url":"Videresendings-URL","profile_oauth_clients_external_auth":"Om du brukar ein ekstern autentiseringsleverandør som Authelia, vil ikkje OAuth klientar fungera. Du kan berre bruka personlege tilgangsnøklar.","profile_oauth_redirect_url_help":"Programmets tilbakekallingslenkje for autorisering.","profile_authorized_apps":"Dine autoriserte applikasjoner","profile_authorized_clients":"Autoriserte klienter","profile_scopes":"Omfang","profile_revoke":"Tilbakekall","profile_personal_access_tokens":"Personleg tilgangsnøkkel","profile_personal_access_token":"Personleg tilgangsnøkkel","profile_personal_access_token_explanation":"Her er din nye personlege tilgangsnøkkel. Dette er den einaste gongen han vert vist så ikkje mist han! Du kan no bruka tilgangsnøkkelen til å laga API-spørsmål.","profile_no_personal_access_token":"Du har ikkje oppretta personlege tilgangsnøklar.","profile_create_new_token":"Opprette nytt token","profile_create_token":"Opprett token","profile_create":"Opprett","profile_save_changes":"Lagra endringer","default_group_title_name":"(ikkje gruppert)","piggy_bank":"Sparegris","profile_oauth_client_secret_title":"Klient Hemmelegheit","profile_oauth_client_secret_expl":"Her er din nye klienthemmelegheit. Dette er den einaste gongen han vert vist så ikkje mist han! Du kan bruka denne hemmeligheita til å laga API-spørsmål.","profile_oauth_confidential":"Konfidensiell","profile_oauth_confidential_help":"Krev at klienten godkjenner med ein hemmelegheit. Konfidensielle klienter kan halde legitimasjon på ein sikker måte uten å utsette dei for uautoriserte parter. Offentlige programmer, som skrivebord eller JavaScript SPA-programmer er ikkje istand til å halda hemmelegheiter sikra.","multi_account_warning_unknown":"Avhengig av kva type transaksjon du opprettar, Kjelde og/eller målkonto for etterfølgande delingar kan overstyrast av det som er definert i transaksjonens første del.","multi_account_warning_withdrawal":"Husk at kildekontoen for etterfølgende oppsplitting skal overlates av kva som defineres i den første delen av uttrekket.","multi_account_warning_deposit":"Husk at mottakerkontoen for etterfølgende oppsplitting skal overstyres av det som er definert i den første delen av depositumet.","multi_account_warning_transfer":"Husk at kildens pluss destinasjonskonto med etterfølgende oppdeling overstyres av det som er definert i ein første del av overføringen.","webhook_trigger_STORE_TRANSACTION":"Etter transaksjons opprettelse","webhook_trigger_UPDATE_TRANSACTION":"Etter transaksjons oppdatering","webhook_trigger_DESTROY_TRANSACTION":"Etter transaksjons sletting","webhook_response_TRANSACTIONS":"Transaksjonsdetaljer","webhook_response_ACCOUNTS":"Kontodetaljer","webhook_response_none_NONE":"Ingen detaljer","webhook_delivery_JSON":"JSON","actions":"Handlinger","meta_data":"Metadata","webhook_messages":"Webhook melding","inactive":"Inaktiv","no_webhook_messages":"Ingen Webhook meldingar","inspect":"Inspiser","create_new_webhook":"Opprett ny Webhook","webhooks":"Webhooks","webhook_trigger_form_help":"Kva for ei hending skal Webhook utløysa","webhook_response_form_help":"Kva skal Webhook må senda til URL.","webhook_delivery_form_help":"Kva format skal Webhook sende data i.","webhook_active_form_help":"Webhook må aktiverast for å fungera.","edit_webhook_js":"Rediger Webhook \\"{title}\\"","webhook_was_triggered":"Webhook vart trigget på den angitte transaksjonen. Ver venleg å vent på resultatet.","view_message":"Vis melding","view_attempts":"Vis mislykkede forsøk","message_content_title":"Webhook meldingsinnhold","message_content_help":"Dette er innhaldet av meldinga som vart sendt (eller forsøkt sendt) med denne Webhook.","attempt_content_title":"Webhook forsøk","attempt_content_help":"Dette er alle mislykkede forsøk på denne webhook-meldinga som vert sendt til den konfigurerte URL-en. Etter ein tid vil Firefly III slutta å prøve.","no_attempts":"Det er ingen mislykkede forsøk. Det er god ting!","webhook_attempt_at":"Forsøk på {moment}","logs":"Logger","response":"Respons","visit_webhook_url":"Besøk URL til webhook","reset_webhook_secret":"Tilbakestill Webhook hemmelegheit"},"form":{"url":"Nettadresse","active":"Aktiv","interest_date":"Rentedato","title":"Tittel","book_date":"Bokføringsdato","process_date":"Prosesseringsdato","due_date":"Forfallsdato","foreign_amount":"Utenlandske beløp","payment_date":"Betalingsdato","invoice_date":"Fakturadato","internal_reference":"Intern referanse","webhook_response":"Respons","webhook_trigger":"Utløser","webhook_delivery":"Levering"},"list":{"active":"Er aktiv?","trigger":"Utløser","response":"Respons","delivery":"Levering","url":"Nettadresse","secret":"Hemmelegheit"},"config":{"html_language":"nn","date_time_fns":"do MMMM, yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/pl.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/pl.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"firefly":{"welcome_back":"Co jest grane?","flash_error":"Błąd!","flash_warning":"Ostrzeżenie!","flash_success":"Sukces!","close":"Zamknij","select_dest_account":"Please select or type a valid destination account name","select_source_account":"Please select or type a valid source account name","split_transaction_title":"Opis podzielonej transakcji","errors_submission":"Coś poszło nie tak w czasie zapisu. Proszę, sprawdź błędy poniżej.","split":"Podziel","single_split":"Podział","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Transakcja #{ID} (\\"{title}\\")</a> została zapisana.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> został zapisany.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") został zaktualizowany.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Transakcja #{ID}</a> (\\"{title}\\") została zaktualizowana.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Transakcja #{ID}</a> została zapisana.","transaction_journal_information":"Informacje o transakcji","submission_options":"Opcje zapisu","apply_rules_checkbox":"Zastosuj reguły","fire_webhooks_checkbox":"Uruchom webhooki","no_budget_pointer":"Wygląda na to, że nie masz jeszcze budżetów. Powinieneś utworzyć kilka na stronie <a href=\\"budgets\\">budżetów</a>. Budżety mogą Ci pomóc śledzić wydatki.","no_bill_pointer":"Wygląda na to, że nie masz jeszcze rachunków. Powinieneś utworzyć kilka na stronie <a href=\\"bills\\">rachunków</a>. Rachunki mogą Ci pomóc śledzić wydatki.","source_account":"Konto źródłowe","hidden_fields_preferences":"Możesz włączyć więcej opcji transakcji w swoich <a href=\\"preferences\\">ustawieniach</a>.","destination_account":"Konto docelowe","add_another_split":"Dodaj kolejny podział","submission":"Zapisz","stored_journal":"Pomyślnie utworzono nową transakcję \\":description\\"","create_another":"Po zapisaniu wróć tutaj, aby utworzyć kolejny.","reset_after":"Wyczyść formularz po zapisaniu","submit":"Prześlij","amount":"Kwota","date":"Data","is_reconciled_fields_dropped":"Ponieważ ta transakcja jest uzgodniona, nie będziesz w stanie zaktualizować ani kont, ani kwot.","tags":"Tagi","no_budget":"(brak budżetu)","no_bill":"(brak rachunku)","category":"Kategoria","attachments":"Załączniki","notes":"Notatki","external_url":"Zewnętrzny adres URL","update_transaction":"Zaktualizuj transakcję","after_update_create_another":"Po aktualizacji wróć tutaj, aby kontynuować edycję.","store_as_new":"Zapisz jako nową zamiast aktualizować.","split_title_help":"Podzielone transakcje muszą posiadać globalny opis.","none_in_select_list":"(żadne)","no_piggy_bank":"(brak skarbonki)","description":"Opis","split_transaction_title_help":"Jeśli tworzysz podzieloną transakcję, musi ona posiadać globalny opis dla wszystkich podziałów w transakcji.","destination_account_reconciliation":"Nie możesz edytować konta docelowego transakcji uzgadniania.","source_account_reconciliation":"Nie możesz edytować konta źródłowego transakcji uzgadniania.","budget":"Budżet","bill":"Rachunek","you_create_withdrawal":"Tworzysz wydatek.","you_create_transfer":"Tworzysz przelew.","you_create_deposit":"Tworzysz wpłatę.","edit":"Modyfikuj","delete":"Usuń","name":"Nazwa","profile_whoops":"Uuuups!","profile_something_wrong":"Coś poszło nie tak!","profile_try_again":"Coś poszło nie tak. Spróbuj ponownie.","profile_oauth_clients":"Klienci OAuth","profile_oauth_no_clients":"Nie utworzyłeś żadnych klientów OAuth.","profile_oauth_clients_header":"Klienci","profile_oauth_client_id":"ID klienta","profile_oauth_client_name":"Nazwa","profile_oauth_client_secret":"Sekretny klucz","profile_oauth_create_new_client":"Utwórz nowego klienta","profile_oauth_create_client":"Utwórz klienta","profile_oauth_edit_client":"Edytuj klienta","profile_oauth_name_help":"Coś, co Twoi użytkownicy będą rozpoznawać i ufać.","profile_oauth_redirect_url":"Przekierowanie URL","profile_oauth_clients_external_auth":"Jeśli używasz zewnętrznego dostawcy uwierzytelniania, takiego jak Authelia, klienci OAuth nie będą działać. Możesz używać tylko osobistych tokenów dostępu.","profile_oauth_redirect_url_help":"Adres URL wywołania zwrotnego autoryzacji aplikacji.","profile_authorized_apps":"Autoryzowane aplikacje","profile_authorized_clients":"Autoryzowani klienci","profile_scopes":"Zakresy","profile_revoke":"Unieważnij","profile_personal_access_tokens":"Osobiste tokeny dostępu","profile_personal_access_token":"Osobisty token dostępu","profile_personal_access_token_explanation":"Oto twój nowy osobisty token dostępu. Jest to jedyny raz, gdy zostanie wyświetlony, więc nie zgub go! Możesz teraz użyć tego tokenu, aby wykonać zapytania API.","profile_no_personal_access_token":"Nie utworzyłeś żadnych osobistych tokenów.","profile_create_new_token":"Utwórz nowy token","profile_create_token":"Utwórz token","profile_create":"Utwórz","profile_save_changes":"Zapisz zmiany","default_group_title_name":"(bez grupy)","piggy_bank":"Skarbonka","profile_oauth_client_secret_title":"Sekret klienta","profile_oauth_client_secret_expl":"Oto twój nowy sekret klienta. Jest to jedyny raz, gdy zostanie wyświetlony, więc nie zgub go! Możesz teraz użyć tego sekretu, aby wykonać zapytania API.","profile_oauth_confidential":"Poufne","profile_oauth_confidential_help":"Wymagaj od klienta uwierzytelnienia za pomocą sekretu. Poufni klienci mogą przechowywać poświadczenia w bezpieczny sposób bez narażania ich na dostęp przez nieuprawnione strony. Publiczne aplikacje, takie jak natywne aplikacje desktopowe lub JavaScript SPA, nie są w stanie bezpiecznie trzymać sekretów.","multi_account_warning_unknown":"W zależności od rodzaju transakcji, którą tworzysz, konto źródłowe i/lub docelowe kolejnych podziałów może zostać ustawione na konto zdefiniowane w pierwszym podziale transakcji.","multi_account_warning_withdrawal":"Pamiętaj, że konto źródłowe kolejnych podziałów zostanie ustawione na konto zdefiniowane w pierwszym podziale wypłaty.","multi_account_warning_deposit":"Pamiętaj, że konto docelowe kolejnych podziałów zostanie ustawione na konto zdefiniowane w pierwszym podziale wpłaty.","multi_account_warning_transfer":"Pamiętaj, że konta źródłowe i docelowe kolejnych podziałów zostaną ustawione na konto zdefiniowane w pierwszym podziale transferu.","webhook_trigger_STORE_TRANSACTION":"Po utworzeniu transakcji","webhook_trigger_UPDATE_TRANSACTION":"Po zmodyfikowaniu transakcji","webhook_trigger_DESTROY_TRANSACTION":"Po usunięciu transakcji","webhook_response_TRANSACTIONS":"Szczegóły transakcji","webhook_response_ACCOUNTS":"Szczegóły konta","webhook_response_none_NONE":"Brak szczegółów","webhook_delivery_JSON":"JSON","actions":"Akcje","meta_data":"Metadane","webhook_messages":"Wiadomość webhook\'a","inactive":"Nieaktywne","no_webhook_messages":"Brak wiadomości webhook","inspect":"Zbadaj","create_new_webhook":"Utwórz nowy webhook","webhooks":"Webhooki","webhook_trigger_form_help":"Wskaż zdarzenie do wyzwolenia webhook\'a","webhook_response_form_help":"Wskaż, co webhook musi przesłać do adresu URL.","webhook_delivery_form_help":"W jakim formacie webhook musi dostarczać dane.","webhook_active_form_help":"Webhook musi być aktywny lub nie zostanie wywołany.","edit_webhook_js":"Edytuj webhook \\"{title}\\"","webhook_was_triggered":"Webhook został uruchomiony na wskazanej transakcji. Poczekaj na wyniki.","view_message":"Podgląd wiadomości","view_attempts":"Podgląd nieudanych prób","message_content_title":"Treść wiadomości webhook\'a","message_content_help":"To jest zawartość wiadomości, która została wysłana (lub próbowano wysłać) za pomocą tego webhooka.","attempt_content_title":"Próby dostępu do webhook","attempt_content_help":"To są wszystkie nieudane próby przesłania tej wiadomości webhooka do skonfigurowanego adresu URL. Po pewnym czasie Firefly III przestanie próbować.","no_attempts":"Nie ma nieudanych prób. To dobrze!","webhook_attempt_at":"Próba o {moment}","logs":"Logi","response":"Odpowiedź","visit_webhook_url":"Odwiedź adres URL webhooka","reset_webhook_secret":"Resetuj sekret webhooka"},"form":{"url":"URL","active":"Aktywny","interest_date":"Data odsetek","title":"Tytuł","book_date":"Data księgowania","process_date":"Data przetworzenia","due_date":"Termin realizacji","foreign_amount":"Kwota zagraniczna","payment_date":"Data płatności","invoice_date":"Data faktury","internal_reference":"Wewnętrzny numer","webhook_response":"Odpowiedź","webhook_trigger":"Wyzwalacz","webhook_delivery":"Doręczenie"},"list":{"active":"Jest aktywny?","trigger":"Wyzwalacz","response":"Odpowiedź","delivery":"Doręczenie","url":"URL","secret":"Sekret"},"config":{"html_language":"pl","date_time_fns":"do MMMM yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/pt-br.json":
/*!************************************************!*\
  !*** ./resources/assets/js/locales/pt-br.json ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"firefly":{"welcome_back":"O que está acontecendo?","flash_error":"Erro!","flash_warning":"Atenção!","flash_success":"Sucesso!","close":"Fechar","select_dest_account":"Please select or type a valid destination account name","select_source_account":"Please select or type a valid source account name","split_transaction_title":"Descrição da transação dividida","errors_submission":"Algo deu errado com seu envio. Por favor, verifique os erros abaixo.","split":"Dividir","single_split":"Divisão","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Transação #{ID} (\\"{title}\\")</a> foi salva.","webhook_stored_link":"<a href=\\"transactions/show/{ID}\\">Webhooh #{ID} (\\"{title}\\")</a> foi salva.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") foi atualizado.","transaction_updated_link":"A <a href=\\"transactions/show/{ID}\\">Transação #{ID}</a> (\\"{title}\\") foi atualizada.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Transação #{ID}</a> foi salva.","transaction_journal_information":"Informação da transação","submission_options":"Opções de envio","apply_rules_checkbox":"Aplicar regras","fire_webhooks_checkbox":"Acionar webhooks","no_budget_pointer":"Parece que você ainda não tem orçamentos. Você deve criar alguns na página de <a href=\\"budgets\\">orçamentos</a>. Orçamentos podem ajudá-lo a manter o controle das despesas.","no_bill_pointer":"Parece que você ainda não tem faturas. Você deve criar algumas em <a href=\\"bills\\">faturas</a>. Faturas podem ajudar você a manter o controle de despesas.","source_account":"Conta origem","hidden_fields_preferences":"Você pode habilitar mais opções de transação em suas <a href=\\"preferences\\">preferências</a>.","destination_account":"Conta destino","add_another_split":"Adicionar outra divisão","submission":"Envio","stored_journal":"Transação \\":description\\" incluída com sucesso","create_another":"Depois de armazenar, retorne aqui para criar outro.","reset_after":"Limpar o formulário após o envio","submit":"Enviar","amount":"Valor","date":"Data","is_reconciled_fields_dropped":"Como a transação está reconciliada, você não pode atualizar as contas, nem o(s) valor(es).","tags":"Tags","no_budget":"(sem orçamento)","no_bill":"(sem fatura)","category":"Categoria","attachments":"Anexos","notes":"Notas","external_url":"URL externa","update_transaction":"Atualizar transação","after_update_create_another":"Depois de atualizar, retorne aqui para continuar editando.","store_as_new":"Armazene como uma nova transação em vez de atualizar.","split_title_help":"Se você criar uma transação dividida, é necessário haver uma descrição global para todas as partes da transação.","none_in_select_list":"(nenhum)","no_piggy_bank":"(nenhum cofrinho)","description":"Descrição","split_transaction_title_help":"Se você criar uma transação dividida, deve haver uma descrição global para todas as partes da transação.","destination_account_reconciliation":"Você não pode editar a conta destino de uma transação de reconciliação.","source_account_reconciliation":"Você não pode editar a conta de origem de uma transação de reconciliação.","budget":"Orçamento","bill":"Fatura","you_create_withdrawal":"Você está criando uma saída.","you_create_transfer":"Você está criando uma transferência.","you_create_deposit":"Você está criando uma entrada.","edit":"Editar","delete":"Apagar","name":"Nome","profile_whoops":"Ops!","profile_something_wrong":"Alguma coisa deu errado!","profile_try_again":"Algo deu errado. Por favor tente novamente.","profile_oauth_clients":"Clientes OAuth","profile_oauth_no_clients":"Você não criou nenhum cliente OAuth.","profile_oauth_clients_header":"Clientes","profile_oauth_client_id":"ID do Cliente","profile_oauth_client_name":"Nome","profile_oauth_client_secret":"Segredo","profile_oauth_create_new_client":"Criar um novo cliente","profile_oauth_create_client":"Criar um cliente","profile_oauth_edit_client":"Editar cliente","profile_oauth_name_help":"Alguma coisa que seus usuários vão reconhecer e identificar.","profile_oauth_redirect_url":"URL de redirecionamento","profile_oauth_clients_external_auth":"Se você estiver usando um provedor de autenticação externo, como Authelia, clientes OAuth (como apps) não funcionarão. Você só poderá usar Tokens de Acesso Pessoal.","profile_oauth_redirect_url_help":"A URL de retorno da sua solicitação de autorização.","profile_authorized_apps":"Aplicativos autorizados","profile_authorized_clients":"Clientes autorizados","profile_scopes":"Escopos","profile_revoke":"Revogar","profile_personal_access_tokens":"Tokens de acesso pessoal","profile_personal_access_token":"Token de acesso pessoal","profile_personal_access_token_explanation":"Aqui está seu novo token de acesso pessoal. Esta é a única vez que ela será mostrada então não perca! Agora você pode usar esse token para fazer solicitações de API.","profile_no_personal_access_token":"Você não criou nenhum token de acesso pessoal.","profile_create_new_token":"Criar novo token","profile_create_token":"Criar token","profile_create":"Criar","profile_save_changes":"Salvar alterações","default_group_title_name":"(não agrupado)","piggy_bank":"Cofrinho","profile_oauth_client_secret_title":"Segredo do cliente","profile_oauth_client_secret_expl":"Aqui está o seu novo segredo de cliente. Esta é a única vez que ela será mostrada, então não o perca! Agora você pode usar este segredo para fazer requisições de API.","profile_oauth_confidential":"Confidencial","profile_oauth_confidential_help":"Exige que o cliente se autentique com um segredo. Clientes confidenciais podem manter credenciais de forma segura sem expô-las à partes não autorizadas. Aplicações públicas, como aplicações de área de trabalho nativas ou JavaScript SPA, são incapazes de manter segredos com segurança.","multi_account_warning_unknown":"Dependendo do tipo de transação que você criar, a conta de origem e/ou de destino das divisões subsequentes pode ser sobrescrita pelo que estiver definido na primeira divisão da transação.","multi_account_warning_withdrawal":"Tenha em mente que a conta de origem das divisões subsequentes será sobrescrita pelo que estiver definido na primeira divisão da saída.","multi_account_warning_deposit":"Tenha em mente que a conta de destino das divisões subsequentes será sobrescrita pelo que estiver definido na primeira divisão da entrada.","multi_account_warning_transfer":"Tenha em mente que a conta de origem + de destino das divisões subsequentes serão sobrescritas pelo que for definido na primeira divisão da transferência.","webhook_trigger_STORE_TRANSACTION":"Após criação da transação","webhook_trigger_UPDATE_TRANSACTION":"Após atualização da transação","webhook_trigger_DESTROY_TRANSACTION":"Após exclusão da transação","webhook_response_TRANSACTIONS":"Detalhes da transação","webhook_response_ACCOUNTS":"Detalhes da conta","webhook_response_none_NONE":"Sem detalhes","webhook_delivery_JSON":"JSON","actions":"Ações","meta_data":"Meta dados","webhook_messages":"Mensagem do webhook","inactive":"Inativo","no_webhook_messages":"Não há mensagens de webhook","inspect":"Inspecionar","create_new_webhook":"Criar novo webhook","webhooks":"Webhooks","webhook_trigger_form_help":"Indica em que evento o webhook será acionado","webhook_response_form_help":"Indica o que o webhook deve enviar para a URL.","webhook_delivery_form_help":"Em que formato o webhook deverá entregar os dados.","webhook_active_form_help":"O webhook deverá estar ativo ou não será chamado.","edit_webhook_js":"Editar webhook \\"{title}\\"","webhook_was_triggered":"O webhook foi acionado na transação indicada. Por favor, aguarde os resultados aparecerem.","view_message":"Ver mensagem","view_attempts":"Ver tentativas que falharam","message_content_title":"Conteúdo da mensagem do webhook","message_content_help":"Este é o conteúdo da mensagem enviada (ou a tentativa) usando este webhook.","attempt_content_title":"Tentativas do webhook","attempt_content_help":"Estas são todas as tentativas mal sucedidas do webhook enviar mensagem para a URL configurada. Depois de algum tempo, Firefly III parará de tentar.","no_attempts":"Não há tentativas mal sucedidas. Esta é uma coisa boa!","webhook_attempt_at":"Tentativa em {moment}","logs":"Registros","response":"Resposta","visit_webhook_url":"Acesse a URL do webhook","reset_webhook_secret":"Redefinir chave do webhook"},"form":{"url":"URL","active":"Ativo","interest_date":"Data do juros","title":"Título","book_date":"Data de lançamento","process_date":"Data de processamento","due_date":"Data de vencimento","foreign_amount":"Montante em moeda estrangeira","payment_date":"Data de pagamento","invoice_date":"Data da Fatura","internal_reference":"Referência interna","webhook_response":"Resposta","webhook_trigger":"Gatilho","webhook_delivery":"Entrega"},"list":{"active":"Está ativo?","trigger":"Gatilho","response":"Resposta","delivery":"Entrega","url":"URL","secret":"Chave"},"config":{"html_language":"pt-br","date_time_fns":"dd \'de\' MMMM \'de\' yyyy, \'às\' HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/pt.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/pt.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"firefly":{"welcome_back":"Painel de controlo","flash_error":"Erro!","flash_warning":"Aviso!","flash_success":"Sucesso!","close":"Fechar","select_dest_account":"Please select or type a valid destination account name","select_source_account":"Please select or type a valid source account name","split_transaction_title":"Descrição da transação dividida","errors_submission":"Algo correu mal com o envio dos dados. Por favor verifique e corrija os erros abaixo.","split":"Dividir","single_split":"Divisão","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">A transação #{ID} (\\"{title}\\")</a> foi guardada.","webhook_stored_link":"<a href=\\"transactions/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> foi guardado.","webhook_updated_link":"<a href=\\"transactions/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> foi guardado.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">A transação #{ID}</a> (\\"{title}\\") foi atualizada.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">A transação#{ID}</a> foi guardada.","transaction_journal_information":"Informação da transação","submission_options":"Opções de submissão","apply_rules_checkbox":"Aplicar regras","fire_webhooks_checkbox":"Ativar webhooks","no_budget_pointer":"Parece que ainda não tem orçamentos. Pode criá-los na página de <a href=\\"budgets\\">orçamentos</a>. Os orçamentos podem ajudá-lo a controlar as despesas.","no_bill_pointer":"Parece que ainda não tem encargos. Pode criá-los na página de <a href=\\"bills\\">encargos</a>. Os Encargos podem ajudá-lo a controlar as despesas.","source_account":"Conta de origem","hidden_fields_preferences":"Pode ativar mais opções de transações nas suas <a href=\\"preferences\\">preferências</a>.","destination_account":"Conta de destino","add_another_split":"Adicionar outra divisão","submission":"Submissão","stored_journal":"Inserida a transação \\":description\\" com sucesso","create_another":"Depois de guardar, voltar aqui para criar outra.","reset_after":"Reiniciar o formulário após o envio","submit":"Guardar","amount":"Montante","date":"Data","is_reconciled_fields_dropped":"Como esta transação está reconciliada, não pode atualizar as contas, nem os montantes.","tags":"Etiquetas","no_budget":"(sem orçamento)","no_bill":"(sem encargo)","category":"Categoria","attachments":"Anexos","notes":"Notas","external_url":"URL Externo","update_transaction":"Atualizar transação","after_update_create_another":"Após atualizar, regresse aqui para continuar a editar.","store_as_new":"Guarde como nova transação em vez de atualizar.","split_title_help":"Se criar uma transação dividida, deve haver uma descrição global para todas as partes da transação.","none_in_select_list":"(nenhum)","no_piggy_bank":"(nenhum mealheiro)","description":"Descrição","split_transaction_title_help":"Se criar uma transação dividida, deve haver uma descrição global para todas as partes da transação.","destination_account_reconciliation":"Não pode editar a conta de destino de uma transação de reconciliação.","source_account_reconciliation":"Não pode editar a conta de origem de uma transação de reconciliação.","budget":"Orçamento","bill":"Encargo","you_create_withdrawal":"Está a criar um levantamento.","you_create_transfer":"Está a criar uma transferência.","you_create_deposit":"Está a criar um depósito.","edit":"Editar","delete":"Eliminar","name":"Nome","profile_whoops":"Oops!","profile_something_wrong":"Algo correu mal!","profile_try_again":"Algo correu mal. Por favor, tente novamente.","profile_oauth_clients":"Clientes OAuth","profile_oauth_no_clients":"Não criou nenhum cliente OAuth.","profile_oauth_clients_header":"Clientes","profile_oauth_client_id":"ID do Cliente","profile_oauth_client_name":"Nome","profile_oauth_client_secret":"Segredo","profile_oauth_create_new_client":"Criar Novo Cliente","profile_oauth_create_client":"Criar Cliente","profile_oauth_edit_client":"Editar Cliente","profile_oauth_name_help":"Algo que os utilizadores reconheçam e confiem.","profile_oauth_redirect_url":"URL de redirecionamento","profile_oauth_clients_external_auth":"Se estivar a usar um provedor de autenticação externo, como o Authelia, os clientes OAuth não funcionarão. Só pode usar Tokens de Acesso Pessoal.","profile_oauth_redirect_url_help":"URL de callback de autorização da aplicação.","profile_authorized_apps":"Aplicações autorizadas","profile_authorized_clients":"Clientes autorizados","profile_scopes":"Contextos","profile_revoke":"Revogar","profile_personal_access_tokens":"Tokens de acesso pessoal","profile_personal_access_token":"Token de acesso pessoal","profile_personal_access_token_explanation":"Aqui está o seu novo token de acesso pessoal. Esta é a única vez que será mostrado, portanto, não o perca! Pode usá-lo para fazer pedidos à API.","profile_no_personal_access_token":"Ainda não criou tokens de acesso pessoal.","profile_create_new_token":"Criar novo token","profile_create_token":"Criar token","profile_create":"Criar","profile_save_changes":"Guardar alterações","default_group_title_name":"(não agrupado)","piggy_bank":"Mealheiro","profile_oauth_client_secret_title":"Segredo do cliente","profile_oauth_client_secret_expl":"Aqui está o seu segredo de cliente. Apenas estará visível uma vez, portanto não o perca! Pode agora utilizar este segredo para fazer pedidos à API.","profile_oauth_confidential":"Confidencial","profile_oauth_confidential_help":"Exigir que o cliente se autentique com um segredo. Clientes confidenciais podem manter credenciais de forma segura sem as expor a terceiros não autorizados. Aplicações públicas, tais como aplicações desktop nativas ou JavaScript SPA, são incapazes de garantir a segurança dos segredos.","multi_account_warning_unknown":"Dependendo do tipo de transação que criar, a conta de origem e/ou destino de subsequentes divisões pode ser sobrescrita pelo que estiver definido na primeira divisão da transação.","multi_account_warning_withdrawal":"Tenha presente que a conta de origem de divisões subsequentes será sobrescrita pelo que estiver definido na primeira divisão do levantamento.","multi_account_warning_deposit":"Tenha presente que a conta de destino de divisões subsequentes será sobrescrita pelo que estiver definida na primeira divisão do depósito.","multi_account_warning_transfer":"Tenha presenta que a conta de origem + destino de divisões subsequentes serão sobrescritas pelo que estiver definido na primeira divisão da transferência.","webhook_trigger_STORE_TRANSACTION":"Após criar transação","webhook_trigger_UPDATE_TRANSACTION":"Após atualizar transação","webhook_trigger_DESTROY_TRANSACTION":"Após eliminar transação","webhook_response_TRANSACTIONS":"Detalhes da transação","webhook_response_ACCOUNTS":"Detalhes da conta","webhook_response_none_NONE":"Sem dados","webhook_delivery_JSON":"JSON","actions":"Ações","meta_data":"Meta dados","webhook_messages":"Mensagem do webhook","inactive":"Inativo","no_webhook_messages":"Não existem mensagens novas","inspect":"Inspecionar","create_new_webhook":"Criar um novo webhook","webhooks":"Webhooks","webhook_trigger_form_help":"Indicar em que evento o webhook será a acionado","webhook_response_form_help":"Indicar o que o webhook deve submeter para o URL.","webhook_delivery_form_help":"Em que formato deve o webhook entregar os dados.","webhook_active_form_help":"O webhook deve ser ativado ou não será acionado.","edit_webhook_js":"Editar webhook \\":title\\"","webhook_was_triggered":"O webhook foi acionado na transação indicada. Por favor, aguarde que os resultados surjam.","view_message":"Ver mensagem","view_attempts":"Ver tentativas falhadas","message_content_title":"Conteúdo da mensagem do webhook","message_content_help":"Este é o conteúdo da mensagem que foi enviada (ou se tentou enviar) usando este webhook.","attempt_content_title":"Tentativas de webhook","attempt_content_help":"Estas são todas as tentativas falhadas de envio desta mensagem webhook para o URL configurado. Após algum tempo, o Firefly vai deixar de tentar.","no_attempts":"Não há tentativas falhadas. Isso é bom!","webhook_attempt_at":"Tentativa em {moment}","logs":"Logs","response":"Respostas","visit_webhook_url":"Ir para URL do webhook","reset_webhook_secret":"Redefinir segredo webhook"},"form":{"url":"URL","active":"Ativo","interest_date":"Data de juros","title":"Título","book_date":"Data de registo","process_date":"Data de processamento","due_date":"Data de vencimento","foreign_amount":"Montante estrangeiro","payment_date":"Data de pagamento","invoice_date":"Data da fatura","internal_reference":"Referência interna","webhook_response":"Resposta","webhook_trigger":"Gatilho","webhook_delivery":"Entrega"},"list":{"active":"Esta ativo?","trigger":"Gatilho","response":"Resposta","delivery":"Entrega","url":"URL","secret":"Segredo"},"config":{"html_language":"pt","date_time_fns":"DO [de] MMMM YYYY, @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/ro.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/ro.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"firefly":{"welcome_back":"Ce se redă?","flash_error":"Eroare!","flash_warning":"Avertizare!","flash_success":"Succes!","close":"Închide","select_dest_account":"Please select or type a valid destination account name","select_source_account":"Please select or type a valid source account name","split_transaction_title":"Descrierea tranzacției divizate","errors_submission":"There was something wrong with your submission. Please check out the errors below.","split":"Împarte","single_split":"Împarte","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Tranzacția #{ID} (\\"{title}\\")</a> a fost stocată.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> a fost stocat.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") a fost actualizat.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Tranzacția #{ID}</a> (\\"{title}\\") a fost actualizată.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Tranzacția #{ID}</a> a fost stocată.","transaction_journal_information":"Informații despre tranzacții","submission_options":"Submission options","apply_rules_checkbox":"Apply rules","fire_webhooks_checkbox":"Fire webhooks","no_budget_pointer":"Se pare că nu aveți încă bugete. Ar trebui să creați câteva pe pagina <a href=\\"/budgets\\">bugete</a>. Bugetele vă pot ajuta să țineți evidența cheltuielilor.","no_bill_pointer":"Se pare că nu aveți încă facturi. Ar trebui să creați unele pe pagina <a href=\\"bills\\">facturi</a>. Facturile vă pot ajuta să țineți evidența cheltuielilor.","source_account":"Contul sursă","hidden_fields_preferences":"Puteți activa mai multe opțiuni de tranzacție în <a href=\\"preferences\\">preferințele</a> dvs.","destination_account":"Contul de destinație","add_another_split":"Adăugați o divizare","submission":"Transmitere","stored_journal":"A fost creată cu succes o tranzacție nouă \\":description\\"","create_another":"După stocare, reveniți aici pentru a crea alta.","reset_after":"Resetați formularul după trimitere","submit":"Trimite","amount":"Sumă","date":"Dată","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Etichete","no_budget":"(nici un buget)","no_bill":"(fără factură)","category":"Categorie","attachments":"Atașamente","notes":"Notițe","external_url":"URL extern","update_transaction":"Actualizați tranzacția","after_update_create_another":"După actualizare, reveniți aici pentru a continua editarea.","store_as_new":"Stocați ca o tranzacție nouă în loc să actualizați.","split_title_help":"Dacă creați o tranzacție divizată, trebuie să existe o descriere globală pentru toate diviziunile tranzacției.","none_in_select_list":"(nici unul)","no_piggy_bank":"(nicio pușculiță)","description":"Descriere","split_transaction_title_help":"Dacă creați o tranzacție divizată, trebuie să existe o descriere globală pentru toate diviziunile tranzacției.","destination_account_reconciliation":"Nu puteți edita contul de destinație al unei tranzacții de reconciliere.","source_account_reconciliation":"Nu puteți edita contul sursă al unei tranzacții de reconciliere.","budget":"Buget","bill":"Factură","you_create_withdrawal":"Creezi o retragere.","you_create_transfer":"Creezi un transfer.","you_create_deposit":"Creezi un depozit.","edit":"Editează","delete":"Șterge","name":"Nume","profile_whoops":"Hopaa!","profile_something_wrong":"A apărut o eroare!","profile_try_again":"A apărut o problemă. Încercați din nou.","profile_oauth_clients":"Clienți OAuth","profile_oauth_no_clients":"Nu ați creat niciun client OAuth.","profile_oauth_clients_header":"Clienți","profile_oauth_client_id":"ID Client","profile_oauth_client_name":"Nume","profile_oauth_client_secret":"Secret","profile_oauth_create_new_client":"Creare client nou","profile_oauth_create_client":"Creare client","profile_oauth_edit_client":"Editare client","profile_oauth_name_help":"Ceva ce utilizatorii vor recunoaște și vor avea încredere.","profile_oauth_redirect_url":"Redirectioneaza URL","profile_oauth_clients_external_auth":"If you\'re using an external authentication provider like Authelia, OAuth Clients will not work. You can use Personal Access Tokens only.","profile_oauth_redirect_url_help":"URL-ul de retroapelare al aplicației dvs.","profile_authorized_apps":"Aplicațiile dvs autorizate","profile_authorized_clients":"Clienți autorizați","profile_scopes":"Domenii","profile_revoke":"Revocați","profile_personal_access_tokens":"Token de acces personal","profile_personal_access_token":"Token de acces personal","profile_personal_access_token_explanation":"Aici este noul dvs. token de acces personal. Este singura dată când va fi afișat așa că nu îl pierde! Acum poți folosi acest token pentru a face cereri API.","profile_no_personal_access_token":"Nu aţi creat nici un token personal de acces.","profile_create_new_token":"Crează un nou token","profile_create_token":"Crează token","profile_create":"Crează","profile_save_changes":"Salvează modificările","default_group_title_name":"(negrupat)","piggy_bank":"Pușculiță","profile_oauth_client_secret_title":"Secret client","profile_oauth_client_secret_expl":"Aici este noul tău cod secret de client. Este singura dată când va fi afișat așa că nu îl pierzi! Acum poți folosi acest cod pentru a face cereri API.","profile_oauth_confidential":"Confidenţial","profile_oauth_confidential_help":"Solicitați clientului să se autentifice cu un secret. Clienții confidențiali pot păstra acreditările într-un mod securizat fără a le expune unor părți neautorizate. Aplicațiile publice, cum ar fi aplicațiile native desktop sau JavaScript SPA, nu pot păstra secretele în siguranță.","multi_account_warning_unknown":"În funcție de tipul de tranzacție pe care o creați, contul sursei și/sau destinației fracționărilor ulterioare poate fi depășit cu orice se definește în prima împărțire a tranzacției.","multi_account_warning_withdrawal":"Reţineţi faptul că sursa scindărilor ulterioare va fi anulată de orice altceva definit în prima împărţire a retragerii.","multi_account_warning_deposit":"Țineți cont de faptul că destinația scindărilor ulterioare va fi depășită cu orice se definește la prima împărțire a depozitului.","multi_account_warning_transfer":"Reţineţi faptul că contul sursei + destinaţia fracţionărilor ulterioare va fi anulat de orice se defineşte în prima împărţire a transferului.","webhook_trigger_STORE_TRANSACTION":"După crearea tranzacției","webhook_trigger_UPDATE_TRANSACTION":"După actualizarea tranzacției","webhook_trigger_DESTROY_TRANSACTION":"După ștergerea tranzacției","webhook_response_TRANSACTIONS":"Detaliile tranzacției","webhook_response_ACCOUNTS":"Detalii cont","webhook_response_none_NONE":"Fara detalii","webhook_delivery_JSON":"JSON","actions":"Acțiuni","meta_data":"Date meta","webhook_messages":"Mesaj Webhook","inactive":"Inactiv","no_webhook_messages":"Nu există mesaje webhook","inspect":"Inspectați","create_new_webhook":"Creare webhook nou","webhooks":"Webhook-uri","webhook_trigger_form_help":"Indicați despre ce eveniment va declanșa webhook","webhook_response_form_help":"Indicați ce trebuie să trimită webhook la URL.","webhook_delivery_form_help":"Care format trebuie să furnizeze datele webhook.","webhook_active_form_help":"Webhook-ul trebuie să fie activ sau nu va fi apelat.","edit_webhook_js":"Editare webhook\\"{title}\\"","webhook_was_triggered":"Webhook-ul a fost declanșat pe tranzacția indicată. Așteptați ca rezultatele să apară.","view_message":"Vizualizați mesajul","view_attempts":"Vizualizare încercări eșuate","message_content_title":"Conținutul mesajului Webhook","message_content_help":"Acesta este conținutul mesajului care a fost trimis (sau a încercat) folosind acest webhook.","attempt_content_title":"Încercări Webhook","attempt_content_help":"Acestea sunt toate încercările nereușite ale acestui mesaj webhook de a remite la adresa URL configurată. După un anumit timp, Firefly III va înceta să mai încerce.","no_attempts":"Nu există încercări nereușite. E un lucru bun!","webhook_attempt_at":"Încercare la {moment}","logs":"Jurnale","response":"Răspuns","visit_webhook_url":"Vizitaţi URL-ul webhook","reset_webhook_secret":"Resetare secret webhook"},"form":{"url":"URL","active":"Activ","interest_date":"Data de interes","title":"Titlu","book_date":"Rezervă dată","process_date":"Data procesării","due_date":"Data scadentă","foreign_amount":"Sumă străină","payment_date":"Data de plată","invoice_date":"Data facturii","internal_reference":"Referință internă","webhook_response":"Răspuns","webhook_trigger":"Declanșator","webhook_delivery":"Livrare"},"list":{"active":"Este activ?","trigger":"Declanșator","response":"Răspuns","delivery":"Livrare","url":"URL","secret":"Secret"},"config":{"html_language":"ro","date_time_fns":"MMMM do yyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/ru.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/ru.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"firefly":{"welcome_back":"Что происходит с моими финансами?","flash_error":"Ошибка!","flash_warning":"Предупреждение!","flash_success":"Успешно!","close":"Закрыть","select_dest_account":"Please select or type a valid destination account name","select_source_account":"Please select or type a valid source account name","split_transaction_title":"Описание разделённой транзакции","errors_submission":"С вашей публикацией произошла ошибка. Пожалуйста, проверьте ошибки ниже.","split":"Разделить","single_split":"Разделённая транзакция","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Транзакция #{ID} (\\"{title}\\")</a> сохранена.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Веб-хук #{ID} (\\"{title}\\")</a> сохранен.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Веб-хук #{ID} (\\"{title}\\")</a> обновлен.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Транзакция #{ID}</a> (\\"{title}\\") обновлена.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Транзакция #{ID}</a> сохранена.","transaction_journal_information":"Информация о транзакции","submission_options":"Опции отправки","apply_rules_checkbox":"Применить правила","fire_webhooks_checkbox":"Fire webhooks","no_budget_pointer":"Похоже, у вас пока нет бюджетов. Вы должны создать их на странице <a href=\\"budgets\\">Бюджеты</a>. Бюджеты могут помочь вам отслеживать расходы.","no_bill_pointer":"Похоже, у вас пока нет счетов на оплату. Вы должны создать их на странице <a href=\\"bills\\">Счета на оплату</a>. Счета на оплату могут помочь вам отслеживать расходы.","source_account":"Счёт-источник","hidden_fields_preferences":"Вы можете включить больше параметров транзакции в <a href=\\"preferences\\">настройках</a>.","destination_account":"Счёт назначения","add_another_split":"Добавить еще одну часть","submission":"Отправить","stored_journal":"Новая транзакция \\":description\\" успешно создана","create_another":"После сохранения вернуться сюда и создать ещё одну аналогичную запись.","reset_after":"Сбросить форму после отправки","submit":"Подтвердить","amount":"Сумма","date":"Дата","is_reconciled_fields_dropped":"Поскольку эта транзакция сверена, вы не сможете обновить счета, ни сумму(ы).","tags":"Метки","no_budget":"(вне бюджета)","no_bill":"(нет счёта на оплату)","category":"Категория","attachments":"Вложения","notes":"Заметки","external_url":"Внешний URL-адрес","update_transaction":"Обновить транзакцию","after_update_create_another":"После обновления вернитесь сюда, чтобы продолжить редактирование.","store_as_new":"Сохранить как новую транзакцию вместо обновления.","split_title_help":"Если вы создаёте разделённую транзакцию, то должны указать общее описание дле всех её составляющих.","none_in_select_list":"(нет)","no_piggy_bank":"(нет копилки)","description":"Описание","split_transaction_title_help":"Если вы создаёте разделённую транзакцию, то должны указать общее описание для всех её составляющих.","destination_account_reconciliation":"Вы не можете редактировать счёт назначения для сверяемой транзакции.","source_account_reconciliation":"Вы не можете редактировать счёт-источник для сверяемой транзакции.","budget":"Бюджет","bill":"Счёт к оплате","you_create_withdrawal":"Вы создаёте расход.","you_create_transfer":"Вы создаёте перевод.","you_create_deposit":"Вы создаёте доход.","edit":"Изменить","delete":"Удалить","name":"Название","profile_whoops":"Ууупс!","profile_something_wrong":"Что-то пошло не так!","profile_try_again":"Произошла ошибка. Пожалуйста, попробуйте снова.","profile_oauth_clients":"Клиенты OAuth","profile_oauth_no_clients":"У вас пока нет клиентов OAuth.","profile_oauth_clients_header":"Клиенты","profile_oauth_client_id":"ID клиента","profile_oauth_client_name":"Название","profile_oauth_client_secret":"Секретный ключ","profile_oauth_create_new_client":"Создать нового клиента","profile_oauth_create_client":"Создать клиента","profile_oauth_edit_client":"Изменить клиента","profile_oauth_name_help":"Что-то, что ваши пользователи знают, и чему доверяют.","profile_oauth_redirect_url":"URL редиректа","profile_oauth_clients_external_auth":"Если вы используете внешний поставщик аутентификации, например Authelia, клиенты OAuth не будут работать. Вы можете использовать только персональные токены доступа.","profile_oauth_redirect_url_help":"URL обратного вызова для вашего приложения.","profile_authorized_apps":"Авторизованные приложения","profile_authorized_clients":"Авторизованные клиенты","profile_scopes":"Разрешения","profile_revoke":"Отключить","profile_personal_access_tokens":"Персональные Access Tokens","profile_personal_access_token":"Персональный Access Token","profile_personal_access_token_explanation":"Вот ваш новый персональный токен доступа. Он будет показан вам только сейчас, поэтому не потеряйте его! Теперь вы можете использовать этот токен, чтобы делать запросы по API.","profile_no_personal_access_token":"Вы не создали ни одного персонального токена доступа.","profile_create_new_token":"Создать новый токен","profile_create_token":"Создать токен","profile_create":"Создать","profile_save_changes":"Сохранить изменения","default_group_title_name":"(без группировки)","piggy_bank":"Копилка","profile_oauth_client_secret_title":"Ключ клиента","profile_oauth_client_secret_expl":"Вот ваш новый ключ клиента. Он будет показан вам только сейчас, поэтому не потеряйте его! Теперь вы можете использовать этот ключ, чтобы делать запросы по API.","profile_oauth_confidential":"Конфиденциальный","profile_oauth_confidential_help":"Требовать, чтобы клиент аутентифицировался с секретным ключом. Конфиденциальные клиенты могут хранить учётные данные в надёжном виде, защищая их от несанкционированного доступа. Публичные приложения, такие как обычный рабочий стол или приложения JavaScript SPA, не могут надёжно хранить ваши ключи.","multi_account_warning_unknown":"В зависимости от типа транзакции, которую вы создаёте, счёт-источник и/или счёт назначения следующих частей разделённой транзакции могут быть заменены теми, которые указаны для первой части транзакции.","multi_account_warning_withdrawal":"Имейте в виду, что счёт-источник в других частях разделённой транзакции будет таким же, как в первой части расхода.","multi_account_warning_deposit":"Имейте в виду, что счёт назначения в других частях разделённой транзакции будет таким же, как в первой части дохода.","multi_account_warning_transfer":"Имейте в виду, что счёт-источник и счёт назначения в других частях разделённой транзакции будут такими же, как в первой части перевода.","webhook_trigger_STORE_TRANSACTION":"После создания транзакции","webhook_trigger_UPDATE_TRANSACTION":"После обновления транзакции","webhook_trigger_DESTROY_TRANSACTION":"После удаления транзакции","webhook_response_TRANSACTIONS":"Детали операции","webhook_response_ACCOUNTS":"Сведения об учетной записи","webhook_response_none_NONE":"Нет подробных сведений","webhook_delivery_JSON":"JSON","actions":"Действия","meta_data":"Расширенные данные","webhook_messages":"Сообщение вебхука","inactive":"Неактивный","no_webhook_messages":"Нет сообщений от вебхуков","inspect":"Проинспектировать","create_new_webhook":"Создать новый вебхук","webhooks":"Веб-хуки","webhook_trigger_form_help":"Укажите, на каких событиях будет срабатывать веб-хук","webhook_response_form_help":"Укажите, что веб-хук должен отправить на URL.","webhook_delivery_form_help":"В каком формате должны быть загружены данные веб-хука.","webhook_active_form_help":"Веб-хук должен быть активным или он не будет вызван.","edit_webhook_js":"Редактировать вебхук \\"{title}\\"","webhook_was_triggered":"Веб-хук сработал на указанную транзакцию. Пожалуйста, дождитесь появления результатов.","view_message":"Просмотр сообщения","view_attempts":"Просмотр неудачных попыток","message_content_title":"Содержимое сообщения webhook","message_content_help":"Это содержимое сообщения, которое было отправлено (или попробовало) с помощью этого веб-хука.","attempt_content_title":"Попытки веб-хука","attempt_content_help":"Это все неудачные попытки отправки этого веб-хук сообщения на указанный URL. Через некоторое время Firefly III прекратит попытки.","no_attempts":"Нет неудачных попыток. Это хорошо!","webhook_attempt_at":"Попытка в {moment}","logs":"Логи","response":"Ответ","visit_webhook_url":"Посетить URL вебхука","reset_webhook_secret":"Сбросить секрет webhook"},"form":{"url":"Ссылка","active":"Активный","interest_date":"Дата начисления процентов","title":"Заголовок","book_date":"Дата бронирования","process_date":"Дата обработки","due_date":"Срок оплаты","foreign_amount":"Сумма в иностранной валюте","payment_date":"Дата платежа","invoice_date":"Дата выставления счёта","internal_reference":"Внутренняя ссылка","webhook_response":"Ответ","webhook_trigger":"События","webhook_delivery":"Доставка"},"list":{"active":"Активен?","trigger":"Событие","response":"Ответ","delivery":"Доставка","url":"Ссылка","secret":"Секрет"},"config":{"html_language":"ru","date_time_fns":"Do MMMM yyyy, @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/sk.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/sk.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"firefly":{"welcome_back":"Ako to ide?","flash_error":"Chyba!","flash_warning":"Varovanie!","flash_success":"Hotovo!","close":"Zavrieť","select_dest_account":"Please select or type a valid destination account name","select_source_account":"Please select or type a valid source account name","split_transaction_title":"Popis rozúčtovania","errors_submission":"There was something wrong with your submission. Please check out the errors below.","split":"Rozúčtovať","single_split":"Rozúčtovať","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Transakcia #{ID} (\\"{title}\\")</a> bola uložená.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> has been stored.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") has been updated.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Transakcia #{ID}</a> (\\"{title}\\") bola upravená.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Transakcia #{ID}</a> bola uložená.","transaction_journal_information":"Informácie o transakcii","submission_options":"Submission options","apply_rules_checkbox":"Apply rules","fire_webhooks_checkbox":"Fire webhooks","no_budget_pointer":"Zdá sa, že zatiaľ nemáte žiadne rozpočty. Na stránke <a href=\\"/budgets\\">rozpočty</a> by ste si nejaké mali vytvoriť. Rozpočty môžu pomôcť udržať prehľad vo výdavkoch.","no_bill_pointer":"Zdá sa, že zatiaľ nemáte žiadne účty. Na stránke <a href=\\"/bills\\">účty</a> by ste mali nejaké vytvoriť. Účty môžu pomôcť udržať si prehľad vo výdavkoch.","source_account":"Zdrojový účet","hidden_fields_preferences":"Viac možností transakcií môžete povoliť vo svojich <a href=\\"/preferences\\">nastaveniach</a>.","destination_account":"Cieľový účet","add_another_split":"Pridať ďalšie rozúčtovanie","submission":"Odoslanie","stored_journal":"Nová transakcia „:description“ bola vytvorená","create_another":"Po uložení sa vrátiť späť sem a vytvoriť ďalší.","reset_after":"Po odoslaní vynulovať formulár","submit":"Odoslať","amount":"Suma","date":"Dátum","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Štítky","no_budget":"(žiadny rozpočet)","no_bill":"(žiadny účet)","category":"Kategória","attachments":"Prílohy","notes":"Poznámky","external_url":"Externá URL","update_transaction":"Upraviť transakciu","after_update_create_another":"Po aktualizácii sa vrátiť späť a pokračovať v úpravách.","store_as_new":"Namiesto aktualizácie uložiť ako novú transakciu.","split_title_help":"Ak vytvoríte rozúčtovanie transakcie, je potrebné, aby ste určili všeobecný popis pre všetky rozúčtovania danej transakcie.","none_in_select_list":"(žiadne)","no_piggy_bank":"(žiadna pokladnička)","description":"Popis","split_transaction_title_help":"Ak vytvoríte rozúčtovanú transakciu, musí existovať globálny popis všetkých rozúčtovaní transakcie.","destination_account_reconciliation":"Nemôžete upraviť cieľový účet zúčtovacej transakcie.","source_account_reconciliation":"Nemôžete upraviť zdrojový účet zúčtovacej transakcie.","budget":"Rozpočet","bill":"Účet","you_create_withdrawal":"Vytvárate výber.","you_create_transfer":"Vytvárate prevod.","you_create_deposit":"Vytvárate vklad.","edit":"Upraviť","delete":"Odstrániť","name":"Názov","profile_whoops":"Ajaj!","profile_something_wrong":"Niečo sa pokazilo!","profile_try_again":"Niečo sa pokazilo. Prosím, skúste znova.","profile_oauth_clients":"OAuth klienti","profile_oauth_no_clients":"Zatiaľ ste nevytvorili žiadneho OAuth klienta.","profile_oauth_clients_header":"Klienti","profile_oauth_client_id":"ID klienta","profile_oauth_client_name":"Meno/Názov","profile_oauth_client_secret":"Tajný kľúč","profile_oauth_create_new_client":"Vytvoriť nového klienta","profile_oauth_create_client":"Vytvoriť klienta","profile_oauth_edit_client":"Upraviť klienta","profile_oauth_name_help":"Niečo, čo vaši použivatelia poznajú a budú tomu dôverovať.","profile_oauth_redirect_url":"URL presmerovania","profile_oauth_clients_external_auth":"If you\'re using an external authentication provider like Authelia, OAuth Clients will not work. You can use Personal Access Tokens only.","profile_oauth_redirect_url_help":"Spätná URL pre overenie autorizácie vašej aplikácie.","profile_authorized_apps":"Povolené aplikácie","profile_authorized_clients":"Autorizovaní klienti","profile_scopes":"Rozsahy","profile_revoke":"Odvolať","profile_personal_access_tokens":"Osobné prístupové tokeny","profile_personal_access_token":"Osobný prístupový token","profile_personal_access_token_explanation":"Toto je váš nový osobný prístupový token. Toto je jediný raz, kedy sa zobrazí - nestraťte ho! Odteraz ho môžete používať pre prístup k API.","profile_no_personal_access_token":"Ešte ste nevytvorili žiadne osobné prístupové tokeny.","profile_create_new_token":"Vytvoriť nový token","profile_create_token":"Vytvoriť token","profile_create":"Vytvoriť","profile_save_changes":"Uložiť zmeny","default_group_title_name":"(nezoskupené)","piggy_bank":"Pokladnička","profile_oauth_client_secret_title":"Tajný kľúč klienta","profile_oauth_client_secret_expl":"Toto je váš tajný kľúč klienta. Toto je jediný raz, kedy sa zobrazí - nestraťte ho! Odteraz môžete tento tajný kľúč používať pre prístup k API.","profile_oauth_confidential":"Dôverné","profile_oauth_confidential_help":"Vyžadujte od klienta autentifikáciu pomocou tajného kľúča. Dôverní klienti môžu uchovávať poverenia bezpečným spôsobom bez toho, aby boli vystavení neoprávneným stranám. Verejné aplikácie, ako napríklad natívna pracovná plocha alebo aplikácie Java SPA, nedokážu tajné kľúče bezpečne uchovať.","multi_account_warning_unknown":"V závislosti od typu vytvorenej transakcie, môže byť zdrojový a/alebo cieľový účet následných rozúčtovaní prepísaný údajmi v prvom rozdelení transakcie.","multi_account_warning_withdrawal":"Majte na pamäti, že zdrojový bankový účet následných rozúčtovaní bude prepísaný tým, čo je definované v prvom rozdelení výberu.","multi_account_warning_deposit":"Majte na pamäti, že zdrojový bankový účet následných rozúčtovaní bude prepísaný tým, čo je definované v prvom rozúčtovaní vkladu.","multi_account_warning_transfer":"Majte na pamäti, že zdrojový a cieľový bankový účet následných rozúčtovaní bude prepísaný tým, čo je definované v prvom rozúčtovaní prevodu.","webhook_trigger_STORE_TRANSACTION":"After transaction creation","webhook_trigger_UPDATE_TRANSACTION":"After transaction update","webhook_trigger_DESTROY_TRANSACTION":"After transaction delete","webhook_response_TRANSACTIONS":"Transaction details","webhook_response_ACCOUNTS":"Account details","webhook_response_none_NONE":"No details","webhook_delivery_JSON":"JSON","actions":"Akcie","meta_data":"Metadata","webhook_messages":"Webhook message","inactive":"Neaktívne","no_webhook_messages":"There are no webhook messages","inspect":"Inspect","create_new_webhook":"Create new webhook","webhooks":"Webhooky","webhook_trigger_form_help":"Indicate on what event the webhook will trigger","webhook_response_form_help":"Indicate what the webhook must submit to the URL.","webhook_delivery_form_help":"Which format the webhook must deliver data in.","webhook_active_form_help":"The webhook must be active or it won\'t be called.","edit_webhook_js":"Edit webhook \\"{title}\\"","webhook_was_triggered":"The webhook was triggered on the indicated transaction. Please wait for results to appear.","view_message":"View message","view_attempts":"View failed attempts","message_content_title":"Webhook message content","message_content_help":"This is the content of the message that was sent (or tried) using this webhook.","attempt_content_title":"Webhook attempts","attempt_content_help":"These are all the unsuccessful attempts of this webhook message to submit to the configured URL. After some time, Firefly III will stop trying.","no_attempts":"There are no unsuccessful attempts. That\'s a good thing!","webhook_attempt_at":"Attempt at {moment}","logs":"Logs","response":"Response","visit_webhook_url":"Visit webhook URL","reset_webhook_secret":"Reset webhook secret"},"form":{"url":"URL","active":"Aktívne","interest_date":"Úrokový dátum","title":"Názov","book_date":"Dátum rezervácie","process_date":"Dátum spracovania","due_date":"Dátum splatnosti","foreign_amount":"Suma v cudzej mene","payment_date":"Dátum úhrady","invoice_date":"Dátum vystavenia","internal_reference":"Interná referencia","webhook_response":"Response","webhook_trigger":"Trigger","webhook_delivery":"Delivery"},"list":{"active":"Aktívne?","trigger":"Trigger","response":"Response","delivery":"Delivery","url":"URL","secret":"Secret"},"config":{"html_language":"sk","date_time_fns":"MMMM do, yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/sl.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/sl.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"firefly":{"welcome_back":"Kaj vse se dogaja?","flash_error":"Napaka!","flash_warning":"Opozorilo!","flash_success":"Uspelo je!","close":"Zapri","select_dest_account":"Please select or type a valid destination account name","select_source_account":"Please select or type a valid source account name","split_transaction_title":"Opis razdeljene transakcije","errors_submission":"Nekaj je bilo narobe z vašo oddajo. Preverite spodnje napake.","split":"Razdeli","single_split":"Razdeli","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Transakcija št. #{ID} (\\"{title}\\")</a> je bila shranjena.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> je bil shranjen.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") je bil posodobljen.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Transakcija št. #{ID}</a> (\\"{title}\\") je bila posodobljena.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Transakcija št. #{ID}</a> je bila shranjena.","transaction_journal_information":"Informacije o transakciji","submission_options":"Možnosti oddaje","apply_rules_checkbox":"Uporabite pravila","fire_webhooks_checkbox":"Sprožite Webhooke","no_budget_pointer":"Zdi se, da še nimate proračuna. Ustvarite jih nekaj na strani <a href=\\"budgets\\">proračuni</a>. Proračuni vam lahko pomagajo spremljati stroške.","no_bill_pointer":"Zdi se, da še nimate računov. Ustvarite jih na strani <a href=\\"bills\\">računi</a>. Računi vam lahko pomagajo spremljati stroške.","source_account":"Izvorni račun","hidden_fields_preferences":"Več možnosti transakcije lahko omogočite v <a href=\\"preferences\\">nastavitvah</a>.","destination_account":"Ciljni račun","add_another_split":"Dodaj še eno razdelitev","submission":"Predložitev","stored_journal":"Nova transakcija \\":description\\" je uspešno ustvarjena","create_another":"Po shranjevanju se vrnite sem, da ustvarite še enega.","reset_after":"Po predložitvi ponastavite obrazec","submit":"Potrdite","amount":"Znesek","date":"Datum","is_reconciled_fields_dropped":"Ker je ta transakcija usklajena, ne boste mogli posodobiti računov niti zneskov.","tags":"Oznake","no_budget":"(brez proračuna)","no_bill":"(ni računa)","category":"Kategorija","attachments":"Priloge","notes":"Opombe","external_url":"Zunanji URL","update_transaction":"Posodobi transakcije","after_update_create_another":"Po posodobitvi se vrnite sem za nadaljevanje urejanja.","store_as_new":"Shranite kot novo transakcijo namesto posodabljanja.","split_title_help":"Če ustvarite razdeljeno transakcijo, mora obstajati globalni opis za vse dele transakcije.","none_in_select_list":"(brez)","no_piggy_bank":"(brez hranilnika)","description":"Opis","split_transaction_title_help":"Če ustvarite razdeljeno transakcijo, mora obstajati globalni opis za vse razdelitve transakcije.","destination_account_reconciliation":"Pri usklajevalni transakciji ni možno urejati ciljnega računa.","source_account_reconciliation":"Pri usklajevalni transakciji ni možno urejati izvornega računa.","budget":"Proračun","bill":"Račun","you_create_withdrawal":"Ustvarjate odliv.","you_create_transfer":"Ustvarjate prenos.","you_create_deposit":"Ustvarjaš priliv.","edit":"Uredi","delete":"Izbriši","name":"Ime","profile_whoops":"Ups!","profile_something_wrong":"Nekaj je šlo narobe!","profile_try_again":"Nekaj ​​je šlo narobe. Prosim poskusite znova.","profile_oauth_clients":"Odjemalci OAuth","profile_oauth_no_clients":"Ustvarili niste še nobenega odjemalca OAuth.","profile_oauth_clients_header":"Odjemalci","profile_oauth_client_id":"Client ID","profile_oauth_client_name":"Ime","profile_oauth_client_secret":"Skrivna koda","profile_oauth_create_new_client":"Ustvari novega odjemalca","profile_oauth_create_client":"Ustvari odjemalca","profile_oauth_edit_client":"Urejanje odjemalca","profile_oauth_name_help":"Nekaj, kar bodo vaši uporabniki prepoznali in mu zaupali.","profile_oauth_redirect_url":"URL preusmeritve","profile_oauth_clients_external_auth":"Če uporabljate zunanjega ponudnika preverjanja pristnosti, kot je Authelia, odjemalci OAuth ne bodo delovali. Uporabljate lahko samo osebne žetone za dostop.","profile_oauth_redirect_url_help":"URL povratnega klica avtorizacije vaše aplikacije.","profile_authorized_apps":"Pooblaščene aplikacije","profile_authorized_clients":"Pooblaščeni odjemalci","profile_scopes":"Področja","profile_revoke":"Odvzemi dostop","profile_personal_access_tokens":"Osebni dostopni žetoni","profile_personal_access_token":"Osebni dostopni žeton","profile_personal_access_token_explanation":"Tukaj je vaš novi žeton za osebni dostop. To je edini čas, da bo prikazan, zato ga ne izgubite! Od zdaj naprej lahko uporabite ta žeton za pošiljanje zahtev API.","profile_no_personal_access_token":"Niste ustvarili nobenih osebnih žetonov za dostop.","profile_create_new_token":"Ustvari nov žeton","profile_create_token":"Ustvari žeton","profile_create":"Ustvari","profile_save_changes":"Shrani spremembe","default_group_title_name":"(nezdruženo)","piggy_bank":"Dodaj hranilnik","profile_oauth_client_secret_title":"Skrivna koda odjemalca","profile_oauth_client_secret_expl":"Tukaj je skrivna koda vašega odjemalca. To je edini čas, da bo prikazana, zato je ne izgubite! Zdaj lahko uporabite to skrivno kodo za pošiljanje zahtev API.","profile_oauth_confidential":"Zaupno","profile_oauth_confidential_help":"Od odjemalca zahtevajte avtentikacijo s skrivno kodo. Zaupni odjemalci imajo lahko poverilnice na varen način, ne da bi jih izpostavili nepooblaščenim osebam. Javne aplikacije, kot so izvorne namizne aplikacije ali aplikacije JavaScript SPA, ne morejo varno hraniti skrivnih kod.","multi_account_warning_unknown":"Odvisno od vrste transakcije, ki jo ustvarite, lahko izvorni in/ali ciljni račun poznejših razdelitev preglasi tisto, kar je definirano v prvi razdelitvi transakcije.","multi_account_warning_withdrawal":"Upoštevajte, da bo izvorni račun poznejših razdelitev preglasilo tisto, kar je definirano v prvi razdelitvi odliva.","multi_account_warning_deposit":"Upoštevajte, da bo ciljni račun poznejših delitev preglasilo tisto, kar je opredeljeno v prvi delitvi priliva.","multi_account_warning_transfer":"Upoštevajte, da bo izvorni + ciljni račun poznejših razdelitev preglasilo tisto, kar je definirano v prvi razdelitvi prenosa.","webhook_trigger_STORE_TRANSACTION":"Po ustvarjanju transakcije","webhook_trigger_UPDATE_TRANSACTION":"Po posodabljanju transakcije","webhook_trigger_DESTROY_TRANSACTION":"Po brisanju transakcije","webhook_response_TRANSACTIONS":"Podrobnosti transakcije","webhook_response_ACCOUNTS":"Podrobnosti računa","webhook_response_none_NONE":"Ni podrobnosti","webhook_delivery_JSON":"JSON","actions":"Dejanja","meta_data":"Meta podatki","webhook_messages":"Webhook sporočilo","inactive":"Neaktivno","no_webhook_messages":"Tukaj ni webhook sporočil","inspect":"Preglejte","create_new_webhook":"Ustvari nov webhook","webhooks":"Webhooks","webhook_trigger_form_help":"Navedite, ob katerem dogodku se bo sprožil webhook","webhook_response_form_help":"Navedite, kaj mora webhook poslati po URL-ju.","webhook_delivery_form_help":"V kateri obliki mora webhook dostaviti podatke.","webhook_active_form_help":"Webhook mora biti aktiven, sicer ne bo poklican.","edit_webhook_js":"Uredi webhook \\"{title}\\"","webhook_was_triggered":"Webhook je bil sprožen ob navedeni transakciji. Počakajte, da se prikažejo rezultati.","view_message":"Poglej sporočilo","view_attempts":"Ogled neuspelih poskusov","message_content_title":"Vsebina sporočila Webhook","message_content_help":"To je vsebina sporočila, ki je bilo poslano (ali poskuseno) s tem webhookom.","attempt_content_title":"Poskusi Webhook","attempt_content_help":"To so vsi neuspešni poskusi pošiljanja tega sporočila webhook na konfigurirani URL. Čez nekaj časa bo Firefly III nehal poskušati.","no_attempts":"Ni neuspešnih poskusov. To je dobra stvar!","webhook_attempt_at":"Poskus ob {moment}","logs":"Dnevniki","response":"Odziv","visit_webhook_url":"Obiščite URL webhooka","reset_webhook_secret":"Ponastavi skrivno kodo webhooka"},"form":{"url":"URL","active":"Aktivno","interest_date":"Datum obresti","title":"Naslov","book_date":"Datum knjiženja","process_date":"Datum obdelave","due_date":"Datum zapadlosti","foreign_amount":"Tuj znesek","payment_date":"Datum plačila","invoice_date":"Datum računa","internal_reference":"Notranji sklic","webhook_response":"Odziv","webhook_trigger":"Sprožilec","webhook_delivery":"Dostava"},"list":{"active":"Aktiviran?","trigger":"Sprožilec","response":"Odziv","delivery":"Dostava","url":"URL","secret":"Skrivnost"},"config":{"html_language":"sl","date_time_fns":"MMMM do, yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/sv.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/sv.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"firefly":{"welcome_back":"Vad spelas?","flash_error":"Fel!","flash_warning":"Varning!","flash_success":"Slutförd!","close":"Stäng","select_dest_account":"Please select or type a valid destination account name","select_source_account":"Please select or type a valid source account name","split_transaction_title":"Beskrivning av delad transaktion","errors_submission":"There was something wrong with your submission. Please check out the errors below.","split":"Dela","single_split":"Dela","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaktion #{ID} (\\"{title}\\")</a> sparades.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> has been stored.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") has been updated.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Transaktion #{ID}</a> (\\"{title}\\") uppdaterades.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaktion #{ID}</a> sparades.","transaction_journal_information":"Transaktionsinformation","submission_options":"Submission options","apply_rules_checkbox":"Apply rules","fire_webhooks_checkbox":"Fire webhooks","no_budget_pointer":"Du verkar inte ha några budgetar än. Du bör skapa några på <a href=\\"budgets\\">budgetar</a>-sidan. Budgetar kan hjälpa dig att hålla reda på utgifter.","no_bill_pointer":"Du verkar inte ha några räkningar ännu. Du bör skapa några på <a href=\\"bills\\">räkningar</a>-sidan. Räkningar kan hjälpa dig att hålla reda på utgifter.","source_account":"Källkonto","hidden_fields_preferences":"Du kan aktivera fler transaktionsalternativ i dina <a href=\\"preferences\\">inställningar</a>.","destination_account":"Till konto","add_another_split":"Lägga till en annan delning","submission":"Inskickning","stored_journal":"Skapade ny transaktion \\":description\\"","create_another":"Efter sparat, återkom hit för att skapa ytterligare en.","reset_after":"Återställ formulär efter inskickat","submit":"Skicka","amount":"Belopp","date":"Datum","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Etiketter","no_budget":"(ingen budget)","no_bill":"(ingen räkning)","category":"Kategori","attachments":"Bilagor","notes":"Noteringar","external_url":"Extern URL","update_transaction":"Uppdatera transaktion","after_update_create_another":"Efter uppdaterat, återkom hit för att fortsätta redigera.","store_as_new":"Spara en ny transaktion istället för att uppdatera.","split_title_help":"Om du skapar en delad transaktion måste det finnas en global beskrivning för alla delningar av transaktionen.","none_in_select_list":"(Ingen)","no_piggy_bank":"(ingen spargris)","description":"Beskrivning","split_transaction_title_help":"Om du skapar en delad transaktion måste det finnas en global beskrivning för alla delningar av transaktionen.","destination_account_reconciliation":"Du kan inte redigera destinationskontot för en avstämningstransaktion.","source_account_reconciliation":"Du kan inte redigera källkontot för en avstämningstransaktion.","budget":"Budget","bill":"Nota","you_create_withdrawal":"Du skapar ett uttag.","you_create_transfer":"Du skapar en överföring.","you_create_deposit":"Du skapar en insättning.","edit":"Redigera","delete":"Ta bort","name":"Namn","profile_whoops":"Hoppsan!","profile_something_wrong":"Något gick fel!","profile_try_again":"Något gick fel. Försök igen.","profile_oauth_clients":"OAuth klienter","profile_oauth_no_clients":"Du har inte skapat några OAuth klienter.","profile_oauth_clients_header":"Klienter","profile_oauth_client_id":"Klient ID","profile_oauth_client_name":"Namn","profile_oauth_client_secret":"Hemlighet","profile_oauth_create_new_client":"Skapa ny klient","profile_oauth_create_client":"Skapa klient","profile_oauth_edit_client":"Redigera klient","profile_oauth_name_help":"Något som dina användare kommer att känna igen och lita på.","profile_oauth_redirect_url":"Omdirigera URL","profile_oauth_clients_external_auth":"If you\'re using an external authentication provider like Authelia, OAuth Clients will not work. You can use Personal Access Tokens only.","profile_oauth_redirect_url_help":"Din applikations auktorisering callback URL.","profile_authorized_apps":"Auktoriserade applikationer","profile_authorized_clients":"Auktoriserade klienter","profile_scopes":"Omfattningar","profile_revoke":"Återkalla","profile_personal_access_tokens":"Personliga åtkomst-Tokens","profile_personal_access_token":"Personlig åtkomsttoken","profile_personal_access_token_explanation":"Här är din nya personliga tillgångs token. Detta är den enda gången det kommer att visas så förlora inte det! Du kan nu använda denna token för att göra API-förfrågningar.","profile_no_personal_access_token":"Du har inte skapat några personliga åtkomsttokens.","profile_create_new_token":"Skapa ny token","profile_create_token":"Skapa token","profile_create":"Skapa","profile_save_changes":"Spara ändringar","default_group_title_name":"(ogrupperad)","piggy_bank":"Spargris","profile_oauth_client_secret_title":"Klienthemlighet","profile_oauth_client_secret_expl":"Här är din nya klient hemlighet. Detta är den enda gången det kommer att visas så förlora inte det! Du kan nu använda denna hemlighet för att göra API-förfrågningar.","profile_oauth_confidential":"Konfidentiell","profile_oauth_confidential_help":"Kräv att klienten autentiserar med en hemlighet. Konfidentiella klienter kan hålla autentiseringsuppgifter på ett säkert sätt utan att utsätta dem för obehöriga parter. Publika applikationer, som skrivbord eller JavaScript-SPA-applikationer, kan inte hålla hemligheter på ett säkert sätt.","multi_account_warning_unknown":"Beroende på vilken typ av transaktion du skapar, källan och/eller destinationskontot för efterföljande delningar kan åsidosättas av vad som än definieras i den första delningen av transaktionen.","multi_account_warning_withdrawal":"Tänk på att källkontot för efterföljande uppdelningar kommer att upphävas av vad som än definieras i den första uppdelningen av uttaget.","multi_account_warning_deposit":"Tänk på att destinationskontot för efterföljande uppdelningar kommer att styras av vad som än definieras i den första uppdelningen av insättningen.","multi_account_warning_transfer":"Tänk på att käll + destinationskonto av efterföljande delningar kommer att styras av vad som definieras i den första uppdelningen av överföringen.","webhook_trigger_STORE_TRANSACTION":"Efter skapande av transaktion","webhook_trigger_UPDATE_TRANSACTION":"After transaction update","webhook_trigger_DESTROY_TRANSACTION":"After transaction delete","webhook_response_TRANSACTIONS":"Transaktionsdetaljer","webhook_response_ACCOUNTS":"Kontodetaljer","webhook_response_none_NONE":"Inga detaljer","webhook_delivery_JSON":"JSON","actions":"Åtgärder","meta_data":"Metadata","webhook_messages":"Webhook message","inactive":"Inaktiv","no_webhook_messages":"There are no webhook messages","inspect":"Inspektera","create_new_webhook":"Create new webhook","webhooks":"Webhookar","webhook_trigger_form_help":"Indicate on what event the webhook will trigger","webhook_response_form_help":"Indicate what the webhook must submit to the URL.","webhook_delivery_form_help":"Which format the webhook must deliver data in.","webhook_active_form_help":"The webhook must be active or it won\'t be called.","edit_webhook_js":"Edit webhook \\"{title}\\"","webhook_was_triggered":"The webhook was triggered on the indicated transaction. Please wait for results to appear.","view_message":"Visa meddelande","view_attempts":"View failed attempts","message_content_title":"Webhook message content","message_content_help":"This is the content of the message that was sent (or tried) using this webhook.","attempt_content_title":"Webhook attempts","attempt_content_help":"These are all the unsuccessful attempts of this webhook message to submit to the configured URL. After some time, Firefly III will stop trying.","no_attempts":"There are no unsuccessful attempts. That\'s a good thing!","webhook_attempt_at":"Attempt at {moment}","logs":"Loggar","response":"Svar","visit_webhook_url":"Visit webhook URL","reset_webhook_secret":"Reset webhook secret"},"form":{"url":"Länk","active":"Aktiv","interest_date":"Räntedatum","title":"Titel","book_date":"Bokföringsdatum","process_date":"Behandlingsdatum","due_date":"Förfallodatum","foreign_amount":"Utländskt belopp","payment_date":"Betalningsdatum","invoice_date":"Fakturadatum","internal_reference":"Intern referens","webhook_response":"Response","webhook_trigger":"Utlösare","webhook_delivery":"Delivery"},"list":{"active":"Är aktiv?","trigger":"Utlösare","response":"Svar","delivery":"Leverans","url":"URL","secret":"Hemlighet"},"config":{"html_language":"sv","date_time_fns":"MMMM do, yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/tr.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/tr.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"firefly":{"welcome_back":"Neler oluyor?","flash_error":"Hata!","flash_warning":"Uyarı!","flash_success":"Başarılı!","close":"Kapat","select_dest_account":"Please select or type a valid destination account name","select_source_account":"Please select or type a valid source account name","split_transaction_title":"Description of the split transaction","errors_submission":"There was something wrong with your submission. Please check out the errors below.","split":"Böl","single_split":"Böl","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">İşlem #{ID} (\\"{title}\\")</a> saklı olmuştur.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> has been stored.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") has been updated.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID}</a> (\\"{title}\\") has been updated.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">İşlem #{ID}</a>saklı olmuştur.","transaction_journal_information":"İşlem Bilgileri","submission_options":"Submission options","apply_rules_checkbox":"Apply rules","fire_webhooks_checkbox":"Fire webhooks","no_budget_pointer":"Henüz bütçeniz yok gibi görünüyor. <a href=\\"budgets\\">bütçeler</a> sayfasında biraz oluşturmalısınız. Bütçeler, giderleri takip etmenize yardımcı olabilir.","no_bill_pointer":"Henüz faturanız yok gibi görünüyor. <a href=\\"bills\\">faturalar</a> sayfasında biraz oluşturmalısınız. Faturalar, harcamaları takip etmenize yardımcı olabilir.","source_account":"Kaynak hesap","hidden_fields_preferences":"You can enable more transaction options in your <a href=\\"preferences\\">preferences</a>.","destination_account":"Hedef hesap","add_another_split":"Başka bir bölme ekle","submission":"Submission","stored_journal":"\\":description\\" Yeni işlem başarıyla oluşturuldu","create_another":"After storing, return here to create another one.","reset_after":"Reset form after submission","submit":"Gönder","amount":"Miktar","date":"Tarih","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Etiketler","no_budget":"(bütçe yok)","no_bill":"(hayır bill)","category":"Kategori","attachments":"Ekler","notes":"Notlar","external_url":"Harici URL","update_transaction":"Update transaction","after_update_create_another":"After updating, return here to continue editing.","store_as_new":"Store as a new transaction instead of updating.","split_title_help":"If you create a split transaction, there must be a global description for all splits of the transaction.","none_in_select_list":"(Yok)","no_piggy_bank":"(kumbara bankası yok)","description":"Açıklama","split_transaction_title_help":"If you create a split transaction, there must be a global description for all splits of the transaction.","destination_account_reconciliation":"Bir mutabakat işleminin hedef hesabını düzenleyemezsiniz.","source_account_reconciliation":"Bir mutabakat işleminin kaynak hesabını düzenleyemezsiniz.","budget":"Bütçe","bill":"Fatura","you_create_withdrawal":"You\'re creating a withdrawal.","you_create_transfer":"You\'re creating a transfer.","you_create_deposit":"You\'re creating a deposit.","edit":"Düzenle","delete":"Sil","name":"İsim","profile_whoops":"Hoppala!","profile_something_wrong":"Bir şeyler ters gitti!","profile_try_again":"Bir şeyler yanlış gitti. Lütfen tekrar deneyin.","profile_oauth_clients":"OAuth Clients","profile_oauth_no_clients":"You have not created any OAuth clients.","profile_oauth_clients_header":"Clients","profile_oauth_client_id":"Client ID","profile_oauth_client_name":"Name","profile_oauth_client_secret":"Secret","profile_oauth_create_new_client":"Create New Client","profile_oauth_create_client":"Müşteri Oluştur","profile_oauth_edit_client":"İstemciyi Düzenle","profile_oauth_name_help":"Kullanıcılarınızın tanıyacağı ve güveneceği bir şey.","profile_oauth_redirect_url":"URL\'yi yönlendir","profile_oauth_clients_external_auth":"If you\'re using an external authentication provider like Authelia, OAuth Clients will not work. You can use Personal Access Tokens only.","profile_oauth_redirect_url_help":"Uygulamanızın yetkilendirme geri arama URL\'si.","profile_authorized_apps":"Yetkili uygulamalar","profile_authorized_clients":"Yetkili müşteriler","profile_scopes":"Kapsamalar","profile_revoke":"İptal etmek","profile_personal_access_tokens":"Kişisel Erişim Belirteçleri","profile_personal_access_token":"Kişisel Erişim Belirteci","profile_personal_access_token_explanation":"İşte yeni kişisel erişim belirteciniz. Bu gösterilecek tek zaman, bu yüzden onu kaybetme! Artık API istekleri yapmak için bu belirtecini kullanabilirsiniz.","profile_no_personal_access_token":"Herhangi bir kişisel erişim belirteci oluşturmadınız.","profile_create_new_token":"Yeni belirteç oluştur","profile_create_token":"Belirteç oluştur","profile_create":"Belirteç oluşturma","profile_save_changes":"Değişiklikleri kaydet","default_group_title_name":"(ungrouped)","piggy_bank":"Kumbara","profile_oauth_client_secret_title":"Müşteri Sırrı","profile_oauth_client_secret_expl":"İşte yeni müşteri sırrın. Bu gösterilecek tek zaman, bu yüzden onu kaybetme! Artık API istekleri yapmak için bu sırrı kullanabilirsiniz.","profile_oauth_confidential":"Gizli","profile_oauth_confidential_help":"İstemcinin bir sır ile kimlik doğrulaması yapmasını isteyin. Gizli müşteriler, kimlik bilgilerini yetkisiz taraflara ifşa etmeden güvenli bir şekilde saklayabilir. Yerel masaüstü veya JavaScript SPA uygulamaları gibi genel uygulamalar sırları güvenli bir şekilde saklayamaz.","multi_account_warning_unknown":"Oluşturduğunuz işlemin türüne bağlı olarak, sonraki bölünmelerin kaynak ve / veya hedef hesabı, işlemin ilk bölünmesinde tanımlanan her şey tarafından geçersiz kılınabilir.","multi_account_warning_withdrawal":"Sonraki bölünmelerin kaynak hesabının, geri çekilmenin ilk bölünmesinde tanımlanan herhangi bir şey tarafından reddedileceğini unutmayın.","multi_account_warning_deposit":"Sonraki bölünmelerin hedef hesabının, mevduatın ilk bölünmesinde tanımlanan herhangi bir şey tarafından iptal edileceğini unutmayın.","multi_account_warning_transfer":"Sonraki bölünmelerin kaynak + hedef hesabının, aktarımın ilk bölünmesinde tanımlanan her şey tarafından geçersiz kılınacağını unutmayın.","webhook_trigger_STORE_TRANSACTION":"After transaction creation","webhook_trigger_UPDATE_TRANSACTION":"After transaction update","webhook_trigger_DESTROY_TRANSACTION":"After transaction delete","webhook_response_TRANSACTIONS":"Transaction details","webhook_response_ACCOUNTS":"Account details","webhook_response_none_NONE":"No details","webhook_delivery_JSON":"JSON","actions":"Eylemler","meta_data":"Meta veri","webhook_messages":"Webhook message","inactive":"Etkisiz","no_webhook_messages":"There are no webhook messages","inspect":"Inspect","create_new_webhook":"Create new webhook","webhooks":"Web kancaları","webhook_trigger_form_help":"Indicate on what event the webhook will trigger","webhook_response_form_help":"Indicate what the webhook must submit to the URL.","webhook_delivery_form_help":"Which format the webhook must deliver data in.","webhook_active_form_help":"The webhook must be active or it won\'t be called.","edit_webhook_js":"Edit webhook \\"{title}\\"","webhook_was_triggered":"The webhook was triggered on the indicated transaction. Please wait for results to appear.","view_message":"View message","view_attempts":"View failed attempts","message_content_title":"Webhook message content","message_content_help":"This is the content of the message that was sent (or tried) using this webhook.","attempt_content_title":"Webhook attempts","attempt_content_help":"These are all the unsuccessful attempts of this webhook message to submit to the configured URL. After some time, Firefly III will stop trying.","no_attempts":"There are no unsuccessful attempts. That\'s a good thing!","webhook_attempt_at":"Attempt at {moment}","logs":"Logs","response":"Response","visit_webhook_url":"Visit webhook URL","reset_webhook_secret":"Reset webhook secret"},"form":{"url":"URL","active":"Aktif","interest_date":"Faiz tarihi","title":"Başlık","book_date":"Kitap Tarihi","process_date":"İşlem tarihi","due_date":"Bitiş Tarihi","foreign_amount":"Foreign amount","payment_date":"Ödeme Tarihi","invoice_date":"Fatura Tarihi","internal_reference":"Dahili referans","webhook_response":"Response","webhook_trigger":"Trigger","webhook_delivery":"Delivery"},"list":{"active":"Aktif mi?","trigger":"Trigger","response":"Response","delivery":"Delivery","url":"URL","secret":"Secret"},"config":{"html_language":"tr","date_time_fns":"MMMM do, yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/uk.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/uk.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"firefly":{"welcome_back":"Що в гаманці?","flash_error":"Помилка!","flash_warning":"Увага!","flash_success":"Успішно!","close":"Закрити","select_dest_account":"Please select or type a valid destination account name","select_source_account":"Please select or type a valid source account name","split_transaction_title":"Description of the split transaction","errors_submission":"There was something wrong with your submission. Please check out the errors below.","split":"Розділити","single_split":"Розділити","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID} (\\"{title}\\")</a> has been stored.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Вебхук #{ID} (\\"{title}\\")</a> був збережений.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Вебхук #{ID}</a> (\\"{title}\\") був оновлений.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID}</a> (\\"{title}\\") has been updated.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID}</a> has been stored.","transaction_journal_information":"Transaction information","submission_options":"Submission options","apply_rules_checkbox":"Застосувати правила","fire_webhooks_checkbox":"Fire webhooks","no_budget_pointer":"Здається, не створили жодного бюджету. Створіть один на сторінці <a href=\\"budgets\\">бюджетів</a>. Бюджети можуть допомогти вам стежити за витратами.","no_bill_pointer":"У вас, здається, ще немає рахунків до сплати. Створіть кілька на сторінці <a href=\\"bills\\">рахунків</a>. Рахунки можуть допомогти вам стежити за витратами.","source_account":"Вихідний рахунок","hidden_fields_preferences":"You can enable more transaction options in your <a href=\\"preferences\\">preferences</a>.","destination_account":"Рахунок призначення","add_another_split":"Add another split","submission":"Submission","stored_journal":"Successfully created new transaction \\":description\\"","create_another":"After storing, return here to create another one.","reset_after":"Reset form after submission","submit":"Підтвердити","amount":"Сума","date":"Дата","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Теги","no_budget":"(поза бюджетом)","no_bill":"(no bill)","category":"Category","attachments":"Вкладення","notes":"Notes","external_url":"Зовнішній URL","update_transaction":"Update transaction","after_update_create_another":"After updating, return here to continue editing.","store_as_new":"Store as a new transaction instead of updating.","split_title_help":"If you create a split transaction, there must be a global description for all splits of the transaction.","none_in_select_list":"(немає)","no_piggy_bank":"(немає скарбнички)","description":"Опис","split_transaction_title_help":"If you create a split transaction, there must be a global description for all splits of the transaction.","destination_account_reconciliation":"Ви не можете редагувати операції погодження, рахунку призначення.","source_account_reconciliation":"Ви не можете редагувати операції звірки, рахунка джерела.","budget":"Budget","bill":"Рахунок","you_create_withdrawal":"You\'re creating a withdrawal.","you_create_transfer":"You\'re creating a transfer.","you_create_deposit":"You\'re creating a deposit.","edit":"Редагувати","delete":"Видалити","name":"Name","profile_whoops":"Лишенько!","profile_something_wrong":"Щось пішло не так!","profile_try_again":"Щось пішло не так. Будь ласка, спробуйте ще раз.","profile_oauth_clients":"Клієнти OAuth","profile_oauth_no_clients":"Ви не створили жодних клієнтів OAuth.","profile_oauth_clients_header":"Клієнти","profile_oauth_client_id":"ID клієнта","profile_oauth_client_name":"Ім\'я","profile_oauth_client_secret":"Секретний ключ","profile_oauth_create_new_client":"Створити нового клієнта","profile_oauth_create_client":"Створити клієнта","profile_oauth_edit_client":"Редагувати клієнта","profile_oauth_name_help":"Щось, що ваші користувачі впізнають і довірятимуть.","profile_oauth_redirect_url":"URL-адреса перенаправлення","profile_oauth_clients_external_auth":"Якщо ви використовуєте стороннього постачальника автентифікації, наприклад Authelia, клієнти OAuth не працюватимуть. Ви можете використовувати лише особисті токени доступу.","profile_oauth_redirect_url_help":"Зовнішній URL для авторизації додатка.","profile_authorized_apps":"Авторизовані додатки","profile_authorized_clients":"Авторизовані клієнти","profile_scopes":"Області застосування","profile_revoke":"Відкликати","profile_personal_access_tokens":"Токени особистого доступу","profile_personal_access_token":"Токен персонального доступу","profile_personal_access_token_explanation":"Ось ваш новий особистий токен. Це єдиний раз, коли він буде показаний, тому не втрачайте його! Тепер ви можете використовувати цей токен для надсилання запитів API.","profile_no_personal_access_token":"Ви не створили особистих токенів доступу.","profile_create_new_token":"Створити новий токен","profile_create_token":"Створити токен","profile_create":"Створити","profile_save_changes":"Зберегти зміни","default_group_title_name":"(ungrouped)","piggy_bank":"Скарбничка","profile_oauth_client_secret_title":"Секретний ключ клієнта","profile_oauth_client_secret_expl":"Ось новий секретний ключ клієнта. Це єдиний раз, коли він буде показаний, тому не втрачайте його! Тепер ви можете використовувати цей секретний ключ для надсилання запитів API.","profile_oauth_confidential":"Конфіденційно","profile_oauth_confidential_help":"Вимагайте від клієнта автентифікації за допомогою секретного ключа. Конфіденційні клієнти можуть безпечно зберігати облікові дані, без надання їх неавторизованим особам. Публічні додатки, такі як native desktop програми або програми JavaScript SPA, не можуть надійно зберігати секрети.","multi_account_warning_unknown":"Залежно від типу транзакції, яку ви створюєте, вихідним і/або цільовим рахунком наступних поділів може бути рахунок, визначений у першому поділі транзакції.","multi_account_warning_withdrawal":"Зауважте, що вихідним рахунком для наступних розподілів буде встановлено рахунок, визначений у першому розподілі виплат.","multi_account_warning_deposit":"Зауважте, що цільовим рахунком для наступних розподілів буде встановлено рахунок, визначений у першому розподілі депозиту.","multi_account_warning_transfer":"Зауважте, що облікові записи джерела та призначення наступних поділів буде встановлено на рахунок, визначений у першому поділі переказу.","webhook_trigger_STORE_TRANSACTION":"Після створення операції","webhook_trigger_UPDATE_TRANSACTION":"Після оновлення операції","webhook_trigger_DESTROY_TRANSACTION":"Після видалення операції","webhook_response_TRANSACTIONS":"Деталі операції","webhook_response_ACCOUNTS":"Дані рахунку","webhook_response_none_NONE":"Немає даних","webhook_delivery_JSON":"JSON","actions":"Дії","meta_data":"Мета-дані","webhook_messages":"Повідомлення веб-хука","inactive":"Inactive","no_webhook_messages":"Повідомлення відсутні","inspect":"Дослідити","create_new_webhook":"Створити новий веб-хук","webhooks":"Веб-гаки","webhook_trigger_form_help":"Укажіть, за якої події запускатиметься вебхук","webhook_response_form_help":"Укажіть, що веб-хук має передати в URL-адресу.","webhook_delivery_form_help":"У якому форматі веб-хук має надавати дані.","webhook_active_form_help":"Веб-хук має бути активним, інакше його не буде викликано.","edit_webhook_js":"Редагувати веб-хук \\"{title}\\"","webhook_was_triggered":"Вебхук був запущений в зазначеній транзакції. Будь ласка, зачекайте на отримання результатів.","view_message":"Переглянути повідомлення","view_attempts":"Переглянути невдалі спроби","message_content_title":"Вміст веб-хук повідомлення","message_content_help":"Це вміст повідомлення, яке було надіслано (або зроблено спробу) за допомогою цього вебхука.","attempt_content_title":"Спроби веб-хуку","attempt_content_help":"Це всі невдалі спроби цього повідомлення вебхуку надіслати налаштовану URL-адресу. Через деякий час Firefly III припинить спроби.","no_attempts":"Безуспішних спроб нема. Це добре!","webhook_attempt_at":"Спроба {moment}","logs":"Журнали","response":"Відповідь","visit_webhook_url":"Відвідайте URL-адресу веб-хуку","reset_webhook_secret":"Відновити сікрет веб-хука"},"form":{"url":"URL-адреса","active":"Активно","interest_date":"Дата нарахування відсотків","title":"Назва","book_date":"Дата бронювання","process_date":"Дата опрацювання","due_date":"Дата закінчення","foreign_amount":"Іноземна сума","payment_date":"Дата оплати","invoice_date":"Дата рахунку-фактури","internal_reference":"Внутрішнє посилання","webhook_response":"Відповідь","webhook_trigger":"Тригер","webhook_delivery":"Доставка"},"list":{"active":"Чи активний?","trigger":"Тригер","response":"Відповідь","delivery":"Доставка","url":"URL-адреса","secret":"Секрет"},"config":{"html_language":"uk","date_time_fns":"MMMM do, yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/vi.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/vi.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"firefly":{"welcome_back":"Chào mừng trở lại?","flash_error":"Lỗi!","flash_warning":"Cảnh báo!","flash_success":"Thành công!","close":"Đóng","select_dest_account":"Please select or type a valid destination account name","select_source_account":"Please select or type a valid source account name","split_transaction_title":"Mô tả giao dịch tách","errors_submission":"There was something wrong with your submission. Please check out the errors below.","split":"Chia ra","single_split":"Chia ra","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Giao dịch #{ID} (\\"{title}\\")</a> đã được lưu trữ.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> đã được lưu trữ.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") đã được cập nhật.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID}</a> (\\"{title}\\") has been updated.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\"> Giao dịch #{ID}</a> đã được lưu trữ.","transaction_journal_information":"Thông tin giao dịch","submission_options":"Submission options","apply_rules_checkbox":"Apply rules","fire_webhooks_checkbox":"Fire webhooks","no_budget_pointer":"Dường như bạn chưa có ngân sách. Bạn nên tạo vài cái tại trang <a href=\\"budgets\\">ngân sách</a>-. Ngân sách có thể giúp bạn theo dõi chi tiêu.","no_bill_pointer":"Dường như bạn chưa có hóa đơn. Bạn nên tạo vài cái tại trang <a href=\\"bills\\">hóa đơn</a>-. Hóa đơn có thể giúp bạn theo dõi chi tiêu.","source_account":"Nguồn tài khoản","hidden_fields_preferences":"You can enable more transaction options in your <a href=\\"preferences\\">preferences</a>.","destination_account":"Tài khoản đích","add_another_split":"Thêm một phân chia khác","submission":"Gửi","stored_journal":"Tạo thành công giao dịch mới \\":description\\"","create_another":"Sau khi lưu trữ, quay trở lại đây để tạo một cái khác.","reset_after":"Đặt lại mẫu sau khi gửi","submit":"Gửi","amount":"Số tiền","date":"Ngày","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Nhãn","no_budget":"(không có ngân sách)","no_bill":"(no bill)","category":"Danh mục","attachments":"Tệp đính kèm","notes":"Ghi chú","external_url":"URL bên ngoài","update_transaction":"Cập nhật giao dịch","after_update_create_another":"Sau khi cập nhật, quay lại đây để tiếp tục chỉnh sửa.","store_as_new":"Lưu trữ như một giao dịch mới thay vì cập nhật.","split_title_help":"Nếu bạn tạo một giao dịch phân tách, phải có một mô tả toàn cầu cho tất cả các phân chia của giao dịch.","none_in_select_list":"(Trống)","no_piggy_bank":"(chưa có heo đất)","description":"Sự miêu tả","split_transaction_title_help":"Nếu bạn tạo một giao dịch phân tách, phải có một mô tả toàn cầu cho tất cả các phân chia của giao dịch.","destination_account_reconciliation":"Bạn không thể chỉnh sửa tài khoản đích của giao dịch đối chiếu.","source_account_reconciliation":"Bạn không thể chỉnh sửa tài khoản nguồn của giao dịch đối chiếu.","budget":"Ngân sách","bill":"Hóa đơn","you_create_withdrawal":"Bạn đang tạo một <strong>rút tiền</strong>.","you_create_transfer":"Bạn đang tạo một <strong>chuyển khoản</strong>.","you_create_deposit":"Bạn đang tạo một <strong>tiền gửi</strong>.","edit":"Sửa","delete":"Xóa","name":"Tên","profile_whoops":"Rất tiếc!","profile_something_wrong":"Có lỗi xảy ra!","profile_try_again":"Xảy ra lỗi. Vui lòng thử lại.","profile_oauth_clients":"OAuth Clients","profile_oauth_no_clients":"Bạn đã không tạo ra bất kỳ OAuth clients nào.","profile_oauth_clients_header":"Clients","profile_oauth_client_id":"Client ID","profile_oauth_client_name":"Tên","profile_oauth_client_secret":"Mã bí mật","profile_oauth_create_new_client":"Tạo mới Client","profile_oauth_create_client":"Tạo Client","profile_oauth_edit_client":"Sửa Client","profile_oauth_name_help":"Một cái gì đó người dùng của bạn sẽ nhận ra và tin tưởng.","profile_oauth_redirect_url":"URL chuyển tiếp","profile_oauth_clients_external_auth":"If you\'re using an external authentication provider like Authelia, OAuth Clients will not work. You can use Personal Access Tokens only.","profile_oauth_redirect_url_help":"URL gọi lại ủy quyền của ứng dụng của bạn.","profile_authorized_apps":"Uỷ quyền ứng dụng","profile_authorized_clients":"Client ủy quyền","profile_scopes":"Phạm vi","profile_revoke":"Thu hồi","profile_personal_access_tokens":"Mã truy cập cá nhân","profile_personal_access_token":"Mã truy cập cá nhân","profile_personal_access_token_explanation":"Đây là mã thông báo truy cập cá nhân mới của bạn. Đây là lần duy nhất nó sẽ được hiển thị vì vậy đừng đánh mất nó! Bây giờ bạn có thể sử dụng mã thông báo này để thực hiện API.","profile_no_personal_access_token":"Bạn chưa tạo bất kỳ mã thông báo truy cập cá nhân nào.","profile_create_new_token":"Tạo mã mới","profile_create_token":"Tạo mã","profile_create":"Tạo","profile_save_changes":"Lưu thay đổi","default_group_title_name":"(chưa nhóm)","piggy_bank":"Heo đất","profile_oauth_client_secret_title":"Client Secret","profile_oauth_client_secret_expl":"Here is your new client secret. This is the only time it will be shown so don\'t lose it! You may now use this secret to make API requests.","profile_oauth_confidential":"Confidential","profile_oauth_confidential_help":"Require the client to authenticate with a secret. Confidential clients can hold credentials in a secure way without exposing them to unauthorized parties. Public applications, such as native desktop or JavaScript SPA applications, are unable to hold secrets securely.","multi_account_warning_unknown":"Depending on the type of transaction you create, the source and/or destination account of subsequent splits may be overruled by whatever is defined in the first split of the transaction.","multi_account_warning_withdrawal":"Keep in mind that the source account of subsequent splits will be overruled by whatever is defined in the first split of the withdrawal.","multi_account_warning_deposit":"Keep in mind that the destination account of subsequent splits will be overruled by whatever is defined in the first split of the deposit.","multi_account_warning_transfer":"Keep in mind that the source + destination account of subsequent splits will be overruled by whatever is defined in the first split of the transfer.","webhook_trigger_STORE_TRANSACTION":"Sau khi tạo giao dịch","webhook_trigger_UPDATE_TRANSACTION":"Sau khi cập nhật giao dịch","webhook_trigger_DESTROY_TRANSACTION":"Sau khi xóa giao dịch","webhook_response_TRANSACTIONS":"Chi tiết giao dịch","webhook_response_ACCOUNTS":"Chi tiết tài khoản","webhook_response_none_NONE":"Không có chi tiết","webhook_delivery_JSON":"JSON","actions":"Hành động","meta_data":"Meta data","webhook_messages":"Tin nhắn webhook","inactive":"Không hoạt động","no_webhook_messages":"Không có tin nhắn webhook","inspect":"Kiểm tra","create_new_webhook":"Tạo webhook mới","webhooks":"Webhooks","webhook_trigger_form_help":"Chọn loại sự kiện nào webhook sẽ kích hoạt","webhook_response_form_help":"Chọn URL nào webhook sẽ gửi thông tin.","webhook_delivery_form_help":"Loại định dạng webhook gửi dữ liệu vào.","webhook_active_form_help":"Webhook phải được kích hoạt hoặc nó sẽ được gọi.","edit_webhook_js":"Sửa webhook \\"{title}\\"","webhook_was_triggered":"Webhook sẽ kích hoạt trên những giao dịch này. Xin đợi một lúc để kết quả hiện ra.","view_message":"Xem tin nhắn","view_attempts":"Xem những lần thử lỗi","message_content_title":"Nội dung tin nhắn webhook","message_content_help":"Đây là nội dung của tin nhắn đã được gửi (hay đã thử) bằng những webhook này.","attempt_content_title":"Các lần thử webhook","attempt_content_help":"Đây là tất cả những lần thử gửi các tin nhắn webhook đến URL chỉ định nhưng không thành công. Sau một khoảng thời gian Firefly III sẽ dừng thử.","no_attempts":"Không có lần thử không thành công nào. Thật là tốt!","webhook_attempt_at":"Thử lúc {moment}","logs":"Nhật ký","response":"Đáp lại","visit_webhook_url":"Đi đến webhook URL","reset_webhook_secret":"Cài lại khóa webhook"},"form":{"url":"URL","active":"Hành động","interest_date":"Ngày lãi","title":"Tiêu đề","book_date":"Ngày đặt sách","process_date":"Ngày xử lý","due_date":"Ngày đáo hạn","foreign_amount":"Ngoại tệ","payment_date":"Ngày thanh toán","invoice_date":"Ngày hóa đơn","internal_reference":"Tài liệu tham khảo nội bộ","webhook_response":"Đáp lại","webhook_trigger":"Kích hoạt","webhook_delivery":"Phân phối"},"list":{"active":"Đang hoạt động?","trigger":"Kích hoạt","response":"Đáp lại","delivery":"Phân phối","url":"URL","secret":"Mã bí mật"},"config":{"html_language":"vi","date_time_fns":"d MMMM yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/zh-cn.json":
/*!************************************************!*\
  !*** ./resources/assets/js/locales/zh-cn.json ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"firefly":{"welcome_back":"今天理财了吗？","flash_error":"错误！","flash_warning":"警告！","flash_success":"成功！","close":"关闭","select_dest_account":"Please select or type a valid destination account name","select_source_account":"Please select or type a valid source account name","split_transaction_title":"拆分交易的描述","errors_submission":"您的提交有误，请查看下面输出的错误信息。","split":"拆分","single_split":"拆分","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">交易 #{ID} (“{title}”)</a> 已保存。","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">推送 #{ID} (\\"{title}\\")</a> 已保存.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">推送 #{ID}</a> (\\"{title}\\") 已更新.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">交易 #{ID}</a> (“{title}”) 已更新。","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">交易 #{ID}</a> 已保存。","transaction_journal_information":"交易信息","submission_options":"提交选项","apply_rules_checkbox":"应用规则","fire_webhooks_checkbox":"触发 webhook","no_budget_pointer":"您还没有预算，您应该在<a href=\\"budgets\\">预算页面</a>进行创建。预算可以帮助您追踪支出。","no_bill_pointer":"您还没有账单，您应该在<a href=\\"bills\\">账单页面</a>进行创建。账单可以帮助您追踪支出。","source_account":"来源账户","hidden_fields_preferences":"您可以在<a href=\\"preferences\\">偏好设定</a>中启用更多交易选项。","destination_account":"目标账户","add_another_split":"增加另一笔拆分","submission":"提交","stored_journal":"成功创建新交易“:description”","create_another":"保存后，返回此页面以创建新记录","reset_after":"提交后重置表单","submit":"提交","amount":"金额","date":"日期","is_reconciled_fields_dropped":"这笔交易已经对账，您无法更新账户，也无法更新金额。","tags":"标签","no_budget":"(无预算)","no_bill":"(无账单)","category":"分类","attachments":"附件","notes":"备注","external_url":"外部链接","update_transaction":"更新交易","after_update_create_another":"更新后，返回此页面继续编辑。","store_as_new":"保存为新交易而不是更新此交易。","split_title_help":"如果您创建了一笔拆分交易，必须有一个所有拆分的全局描述。","none_in_select_list":"(空)","no_piggy_bank":"(无存钱罐)","description":"描述","split_transaction_title_help":"如果您创建了一笔拆分交易，必须有一个所有拆分的全局描述。","destination_account_reconciliation":"您不能编辑对账交易的目标账户","source_account_reconciliation":"您不能编辑对账交易的来源账户。","budget":"预算","bill":"账单","you_create_withdrawal":"您正在创建一笔支出","you_create_transfer":"您正在创建一笔转账","you_create_deposit":"您正在创建一笔收入","edit":"编辑","delete":"删除","name":"名称","profile_whoops":"很抱歉！","profile_something_wrong":"发生错误！","profile_try_again":"发生错误，请稍后再试。","profile_oauth_clients":"OAuth 客户端","profile_oauth_no_clients":"您尚未创建任何 OAuth 客户端。","profile_oauth_clients_header":"客户端","profile_oauth_client_id":"客户端 ID","profile_oauth_client_name":"名称","profile_oauth_client_secret":"密钥","profile_oauth_create_new_client":"创建新客户端","profile_oauth_create_client":"创建客户端","profile_oauth_edit_client":"编辑客户端","profile_oauth_name_help":"您的用户可以识别并信任的信息","profile_oauth_redirect_url":"跳转网址","profile_oauth_clients_external_auth":"如果您正在使用如 Authelia 的外部身份验证提供商，OAuth 客户端将无法工作。您只能使用个人访问令牌。","profile_oauth_redirect_url_help":"您的应用程序的授权回调网址","profile_authorized_apps":"已授权应用","profile_authorized_clients":"已授权客户端","profile_scopes":"范围","profile_revoke":"撤消","profile_personal_access_tokens":"个人访问令牌","profile_personal_access_token":"个人访问令牌","profile_personal_access_token_explanation":"请妥善保存您的新个人访问令牌，此令牌仅会在这里展示一次。您现在已可以使用此令牌进行 API 请求。","profile_no_personal_access_token":"您还没有创建个人访问令牌。","profile_create_new_token":"创建新令牌","profile_create_token":"创建令牌","profile_create":"创建","profile_save_changes":"保存更改","default_group_title_name":"(未分组)","piggy_bank":"存钱罐","profile_oauth_client_secret_title":"客户端密钥","profile_oauth_client_secret_expl":"请妥善保存您的新客户端的密钥，此密钥仅会在这里展示一次。您现在已可以使用此密钥进行 API 请求。","profile_oauth_confidential":"使用加密","profile_oauth_confidential_help":"要求客户端使用密钥进行认证。加密客户端可以安全储存凭据且不将其泄露给未授权方，而公共应用程序（例如本地计算机或 JavaScript SPA 应用程序）无法保证凭据的安全性。","multi_account_warning_unknown":"根据您创建的交易类型，后续拆分的来源和/或目标账户可能被交易的首笔拆分的配置所覆盖。","multi_account_warning_withdrawal":"请注意，后续拆分的来源账户将会被支出的首笔拆分的配置所覆盖。","multi_account_warning_deposit":"请注意，后续拆分的目标账户将会被收入的首笔拆分的配置所覆盖。","multi_account_warning_transfer":"请注意，后续拆分的来源和目标账户将会被转账的首笔拆分的配置所覆盖。","webhook_trigger_STORE_TRANSACTION":"交易创建后","webhook_trigger_UPDATE_TRANSACTION":"交易更新后","webhook_trigger_DESTROY_TRANSACTION":"交易删除后","webhook_response_TRANSACTIONS":"交易详情","webhook_response_ACCOUNTS":"账户详情","webhook_response_none_NONE":"无详细信息","webhook_delivery_JSON":"JSON","actions":"操作","meta_data":"后设资料","webhook_messages":"Webhook 消息","inactive":"已停用","no_webhook_messages":"没有 Webhook 消息","inspect":"检查","create_new_webhook":"创建新 Webhook","webhooks":"Webhooks","webhook_trigger_form_help":"推送事件发生时的触发条件","webhook_response_form_help":"推送必须提交给URL的内容","webhook_delivery_form_help":"推送采用哪种格式发送数据","webhook_active_form_help":"Webhook 必须是激活状态，否则不会被调用。","edit_webhook_js":"编辑 webhook “{title}”","webhook_was_triggered":"在指定的交易中触发了推送，请等待显示结果","view_message":"查看消息","view_attempts":"查看失败的尝试","message_content_title":"Webhook 消息内容","message_content_help":"这是使用推送发送（或尝试）的消息内容","attempt_content_title":"Webhook 尝试","attempt_content_help":"这是提交至配置网址的webhook消息的所有失败请求，一段时间后，Firefly III 将停止尝试。","no_attempts":"所有尝试均已成功完成。好极了！","webhook_attempt_at":"尝试于 {moment}","logs":"日志","response":"响应","visit_webhook_url":"访问 webhook URL","reset_webhook_secret":"重置 webhook 密钥"},"form":{"url":"网址","active":"启用","interest_date":"利息日期","title":"标题","book_date":"登记日期","process_date":"处理日期","due_date":"到期日","foreign_amount":"外币金额","payment_date":"付款日期","invoice_date":"发票日期","internal_reference":"内部引用","webhook_response":"响应内容","webhook_trigger":"触发条件","webhook_delivery":"发送格式"},"list":{"active":"是否启用？","trigger":"触发条件","response":"答复","delivery":"交付","url":"网址","secret":"密钥"},"config":{"html_language":"zh-cn","date_time_fns":"YYYY年M月D日 HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/zh-tw.json":
/*!************************************************!*\
  !*** ./resources/assets/js/locales/zh-tw.json ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"firefly":{"welcome_back":"What\'s playing?","flash_error":"錯誤！","flash_warning":"警告！","flash_success":"成功！","close":"關閉","select_dest_account":"Please select or type a valid destination account name","select_source_account":"Please select or type a valid source account name","split_transaction_title":"拆分交易的描述","errors_submission":"There was something wrong with your submission. Please check out the errors below.","split":"分割","single_split":"拆分","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID} (\\"{title}\\")</a> has been stored.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> has been stored.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") has been updated.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID}</a> (\\"{title}\\") has been updated.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID}</a> has been stored.","transaction_journal_information":"交易資訊","submission_options":"Submission options","apply_rules_checkbox":"Apply rules","fire_webhooks_checkbox":"Fire webhooks","no_budget_pointer":"You seem to have no budgets yet. You should create some on the <a href=\\"budgets\\">budgets</a>-page. Budgets can help you keep track of expenses.","no_bill_pointer":"You seem to have no bills yet. You should create some on the <a href=\\"bills\\">bills</a>-page. Bills can help you keep track of expenses.","source_account":"來源帳戶","hidden_fields_preferences":"You can enable more transaction options in your <a href=\\"preferences\\">preferences</a>.","destination_account":"目標帳戶","add_another_split":"增加拆分","submission":"Submission","stored_journal":"已成功建立新交易 “:description”","create_another":"After storing, return here to create another one.","reset_after":"Reset form after submission","submit":"送出","amount":"金額","date":"日期","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"標籤","no_budget":"(無預算)","no_bill":"(no bill)","category":"分類","attachments":"附加檔案","notes":"備註","external_url":"External URL","update_transaction":"Update transaction","after_update_create_another":"After updating, return here to continue editing.","store_as_new":"Store as a new transaction instead of updating.","split_title_help":"若您建立一筆拆分交易，須有一個有關交易所有拆分的整體描述。","none_in_select_list":"(空)","no_piggy_bank":"(無小豬撲滿)","description":"描述","split_transaction_title_help":"If you create a split transaction, there must be a global description for all splits of the transaction.","destination_account_reconciliation":"You can\'t edit the destination account of a reconciliation transaction.","source_account_reconciliation":"You can\'t edit the source account of a reconciliation transaction.","budget":"預算","bill":"帳單","you_create_withdrawal":"You\'re creating a withdrawal.","you_create_transfer":"You\'re creating a transfer.","you_create_deposit":"You\'re creating a deposit.","edit":"編輯","delete":"刪除","name":"名稱","profile_whoops":"Whoops!","profile_something_wrong":"Something went wrong!","profile_try_again":"Something went wrong. Please try again.","profile_oauth_clients":"OAuth Clients","profile_oauth_no_clients":"You have not created any OAuth clients.","profile_oauth_clients_header":"Clients","profile_oauth_client_id":"Client ID","profile_oauth_client_name":"Name","profile_oauth_client_secret":"Secret","profile_oauth_create_new_client":"Create New Client","profile_oauth_create_client":"Create Client","profile_oauth_edit_client":"Edit Client","profile_oauth_name_help":"Something your users will recognize and trust.","profile_oauth_redirect_url":"Redirect URL","profile_oauth_clients_external_auth":"If you\'re using an external authentication provider like Authelia, OAuth Clients will not work. You can use Personal Access Tokens only.","profile_oauth_redirect_url_help":"Your application\'s authorization callback URL.","profile_authorized_apps":"Authorized applications","profile_authorized_clients":"Authorized clients","profile_scopes":"Scopes","profile_revoke":"Revoke","profile_personal_access_tokens":"Personal Access Tokens","profile_personal_access_token":"Personal Access Token","profile_personal_access_token_explanation":"Here is your new personal access token. This is the only time it will be shown so don\'t lose it! You may now use this token to make API requests.","profile_no_personal_access_token":"You have not created any personal access tokens.","profile_create_new_token":"Create new token","profile_create_token":"Create token","profile_create":"Create","profile_save_changes":"Save changes","default_group_title_name":"(ungrouped)","piggy_bank":"小豬撲滿","profile_oauth_client_secret_title":"Client Secret","profile_oauth_client_secret_expl":"Here is your new client secret. This is the only time it will be shown so don\'t lose it! You may now use this secret to make API requests.","profile_oauth_confidential":"Confidential","profile_oauth_confidential_help":"Require the client to authenticate with a secret. Confidential clients can hold credentials in a secure way without exposing them to unauthorized parties. Public applications, such as native desktop or JavaScript SPA applications, are unable to hold secrets securely.","multi_account_warning_unknown":"Depending on the type of transaction you create, the source and/or destination account of subsequent splits may be overruled by whatever is defined in the first split of the transaction.","multi_account_warning_withdrawal":"Keep in mind that the source account of subsequent splits will be overruled by whatever is defined in the first split of the withdrawal.","multi_account_warning_deposit":"Keep in mind that the destination account of subsequent splits will be overruled by whatever is defined in the first split of the deposit.","multi_account_warning_transfer":"Keep in mind that the source + destination account of subsequent splits will be overruled by whatever is defined in the first split of the transfer.","webhook_trigger_STORE_TRANSACTION":"在交易建立後","webhook_trigger_UPDATE_TRANSACTION":"在交易更新後","webhook_trigger_DESTROY_TRANSACTION":"在交易刪除後","webhook_response_TRANSACTIONS":"交易詳情","webhook_response_ACCOUNTS":"帳號詳情","webhook_response_none_NONE":"No details","webhook_delivery_JSON":"JSON","actions":"操作","meta_data":"中繼資料","webhook_messages":"Webhook message","inactive":"未啟用","no_webhook_messages":"There are no webhook messages","inspect":"檢查","create_new_webhook":"Create new webhook","webhooks":"Webhooks","webhook_trigger_form_help":"Indicate on what event the webhook will trigger","webhook_response_form_help":"Indicate what the webhook must submit to the URL.","webhook_delivery_form_help":"Which format the webhook must deliver data in.","webhook_active_form_help":"The webhook must be active or it won\'t be called.","edit_webhook_js":"Edit webhook \\"{title}\\"","webhook_was_triggered":"The webhook was triggered on the indicated transaction. Please wait for results to appear.","view_message":"查看訊息","view_attempts":"View failed attempts","message_content_title":"Webhook message content","message_content_help":"This is the content of the message that was sent (or tried) using this webhook.","attempt_content_title":"Webhook attempts","attempt_content_help":"These are all the unsuccessful attempts of this webhook message to submit to the configured URL. After some time, Firefly III will stop trying.","no_attempts":"There are no unsuccessful attempts. That\'s a good thing!","webhook_attempt_at":"Attempt at {moment}","logs":"紀錄日誌","response":"回覆","visit_webhook_url":"Visit webhook URL","reset_webhook_secret":"Reset webhook secret"},"form":{"url":"URL","active":"啟用","interest_date":"利率日期","title":"標題","book_date":"登記日期","process_date":"處理日期","due_date":"到期日","foreign_amount":"外幣金額","payment_date":"付款日期","invoice_date":"發票日期","internal_reference":"內部參考","webhook_response":"Response","webhook_trigger":"Trigger","webhook_delivery":"Delivery"},"list":{"active":"是否啟用？","trigger":"觸發器","response":"回應","delivery":"Delivery","url":"URL","secret":"Secret"},"config":{"html_language":"zh-tw","date_time_fns":"YYYY年 M月 D日 dddd 於 HH:mm:ss"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************************************!*\
  !*** ./resources/assets/js/edit_transaction.js ***!
  \*************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_transactions_CustomAttachments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/transactions/CustomAttachments */ "./resources/assets/js/components/transactions/CustomAttachments.vue");
/* harmony import */ var _components_transactions_EditTransaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/transactions/EditTransaction */ "./resources/assets/js/components/transactions/EditTransaction.vue");
/* harmony import */ var _components_transactions_CustomDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/transactions/CustomDate */ "./resources/assets/js/components/transactions/CustomDate.vue");
/* harmony import */ var _components_transactions_CustomString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/transactions/CustomString */ "./resources/assets/js/components/transactions/CustomString.vue");
/* harmony import */ var _components_transactions_CustomTextarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/transactions/CustomTextarea */ "./resources/assets/js/components/transactions/CustomTextarea.vue");
/* harmony import */ var _components_transactions_StandardDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/transactions/StandardDate */ "./resources/assets/js/components/transactions/StandardDate.vue");
/* harmony import */ var _components_transactions_GroupDescription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/transactions/GroupDescription */ "./resources/assets/js/components/transactions/GroupDescription.vue");
/* harmony import */ var _components_transactions_TransactionDescription__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/transactions/TransactionDescription */ "./resources/assets/js/components/transactions/TransactionDescription.vue");
/* harmony import */ var _components_transactions_CustomTransactionFields__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/transactions/CustomTransactionFields */ "./resources/assets/js/components/transactions/CustomTransactionFields.vue");
/* harmony import */ var _components_transactions_PiggyBank__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/transactions/PiggyBank */ "./resources/assets/js/components/transactions/PiggyBank.vue");
/* harmony import */ var _components_transactions_Tags__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/transactions/Tags */ "./resources/assets/js/components/transactions/Tags.vue");
/* harmony import */ var _components_transactions_Category__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/transactions/Category */ "./resources/assets/js/components/transactions/Category.vue");
/* harmony import */ var _components_transactions_Amount__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/transactions/Amount */ "./resources/assets/js/components/transactions/Amount.vue");
/* harmony import */ var _components_transactions_ForeignAmountSelect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/transactions/ForeignAmountSelect */ "./resources/assets/js/components/transactions/ForeignAmountSelect.vue");
/* harmony import */ var _components_transactions_TransactionType__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/transactions/TransactionType */ "./resources/assets/js/components/transactions/TransactionType.vue");
/* harmony import */ var _components_transactions_AccountSelect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/transactions/AccountSelect */ "./resources/assets/js/components/transactions/AccountSelect.vue");
/* harmony import */ var _components_transactions_Budget__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/transactions/Budget */ "./resources/assets/js/components/transactions/Budget.vue");
/* harmony import */ var _components_transactions_CustomUri__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/transactions/CustomUri */ "./resources/assets/js/components/transactions/CustomUri.vue");
/* harmony import */ var _components_transactions_Bill__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/transactions/Bill */ "./resources/assets/js/components/transactions/Bill.vue");
/*
 * edit_transactions.js
 * Copyright (c) 2019 james@firefly-iii.org
 *
 * This file is part of Firefly III (https://github.com/firefly-iii).
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */





















/**
 * First we will load Axios via bootstrap.js
 * jquery and bootstrap-sass preloaded in app.js
 * vue, uiv and vuei18n are in app_vue.js
 */

__webpack_require__(/*! ./bootstrap */ "./resources/assets/js/bootstrap.js");

// components for create and edit transactions.
Vue.component('budget', _components_transactions_Budget__WEBPACK_IMPORTED_MODULE_16__["default"]);
Vue.component('bill', _components_transactions_Bill__WEBPACK_IMPORTED_MODULE_18__["default"]);
Vue.component('custom-date', _components_transactions_CustomDate__WEBPACK_IMPORTED_MODULE_2__["default"]);
Vue.component('custom-string', _components_transactions_CustomString__WEBPACK_IMPORTED_MODULE_3__["default"]);
Vue.component('custom-attachments', _components_transactions_CustomAttachments__WEBPACK_IMPORTED_MODULE_0__["default"]);
Vue.component('custom-textarea', _components_transactions_CustomTextarea__WEBPACK_IMPORTED_MODULE_4__["default"]);
Vue.component('custom-uri', _components_transactions_CustomUri__WEBPACK_IMPORTED_MODULE_17__["default"]);
Vue.component('standard-date', _components_transactions_StandardDate__WEBPACK_IMPORTED_MODULE_5__["default"]);
Vue.component('group-description', _components_transactions_GroupDescription__WEBPACK_IMPORTED_MODULE_6__["default"]);
Vue.component('transaction-description', _components_transactions_TransactionDescription__WEBPACK_IMPORTED_MODULE_7__["default"]);
Vue.component('custom-transaction-fields', _components_transactions_CustomTransactionFields__WEBPACK_IMPORTED_MODULE_8__["default"]);
Vue.component('piggy-bank', _components_transactions_PiggyBank__WEBPACK_IMPORTED_MODULE_9__["default"]);
Vue.component('tags', _components_transactions_Tags__WEBPACK_IMPORTED_MODULE_10__["default"]);
Vue.component('category', _components_transactions_Category__WEBPACK_IMPORTED_MODULE_11__["default"]);
Vue.component('amount', _components_transactions_Amount__WEBPACK_IMPORTED_MODULE_12__["default"]);
Vue.component('foreign-amount', _components_transactions_ForeignAmountSelect__WEBPACK_IMPORTED_MODULE_13__["default"]);
Vue.component('transaction-type', _components_transactions_TransactionType__WEBPACK_IMPORTED_MODULE_14__["default"]);
Vue.component('account-select', _components_transactions_AccountSelect__WEBPACK_IMPORTED_MODULE_15__["default"]);
Vue.component('edit-transaction', _components_transactions_EditTransaction__WEBPACK_IMPORTED_MODULE_1__["default"]);
var i18n = __webpack_require__(/*! ./i18n */ "./resources/assets/js/i18n.js");
var props = {};
var app = new Vue({
  i18n: i18n,
  el: "#edit_transaction",
  render: function render(createElement) {
    return createElement(_components_transactions_EditTransaction__WEBPACK_IMPORTED_MODULE_1__["default"], {
      props: props
    });
  }
});
})();

/******/ })()
;