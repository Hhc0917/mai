webpackJsonp([28],{"4CgY":function(e,t,o){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.a={data:function(){return{}},created:function(){console.log(this.$route.path);var e=this.$route.path;if(e.indexOf("access_token")>-1){var t=e.indexOf("access_token"),o=e.slice(t);console.log(o);var c=o.slice(o.indexOf("=")+1,o.indexOf("&"));console.log(t,c,void 0===c?"undefined":n(c));var i=JSON.stringify(window.location.href),r=i.slice(1,i.indexOf(":"))+"://"+window.location.host,s=r+"?state=bd&access_token="+c;location.replace(s)}},methods:{}}},Ocyn:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("h1",[e._v("404")])},c=[],i={render:n,staticRenderFns:c};t.a=i},c5Mg:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("4CgY"),c=o("Ocyn"),i=o("Aizv"),r=i(n.a,c.a,!1,null,null,null);t.default=r.exports}});