webpackJsonp([18],{"+LyJ":function(t,a,e){a=t.exports=e("UTlt")(!1),a.push([t.i,"#layout[data-v-569486e3]{margin:0 auto;width:18.75rem;position:relative}.footer-wrapper[data-v-569486e3]{height:2.5rem}.pd40[data-v-569486e3]{padding-top:40px}#bottomBar[data-v-569486e3]{position:fixed;left:0;right:0;bottom:0;margin:auto;width:18.75rem;height:2.5rem;background:#fff}#bottomBar .bottomBar-item[data-v-569486e3]{width:50%;height:100%;text-align:center;border-top:1px solid #f0f1f2;font-size:.7rem;color:#337ab7}#bottomBar .bottomBar-item p[data-v-569486e3]{width:100%}#bottomBar .bottomBar-item .icon[data-v-569486e3]{height:1.25rem}#bottomBar .bottomBar-item .icon i[data-v-569486e3]{font-size:1.25rem}#bottomBar .bottomBar-item .txt[data-v-569486e3]{height:1.25rem;line-height:1.25rem}#bottomBar .high[data-v-569486e3]{display:none}#bottomBar .gray[data-v-569486e3]{display:inline-block}#bottomBar .router-link-active[data-v-569486e3]{color:#d0ac76}",""])},IYAG:function(t,a,e){"use strict";function o(t){e("d3HN")}Object.defineProperty(a,"__esModule",{value:!0});var i=e("x1N+"),r=e("YC1n"),s=e("Z0/y"),n=o,c=s(i.a,r.a,!1,n,"data-v-569486e3",null);a.default=c.exports},YC1n:function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:{pd40:!t.$route.meta.hideHeader},attrs:{id:"layout"}},[t.$route.meta.hideHeader?t._e():e("mt-header",{staticStyle:{"z-index":"10"},attrs:{fixed:"",title:t.$route.meta.name}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.$route.meta.showBack,expression:"$route.meta.showBack"}],attrs:{slot:"left"},slot:"left"},[e("mt-button",{attrs:{icon:"back"},on:{click:t.goBack}},[t._v("返回")])],1),t._v(" "),t.$route.meta.tabRight?e("mt-button",{attrs:{slot:"right"},on:{click:t.clickRightBar},slot:"right"},[t._v("\n                "+t._s(t.$route.meta.tabRight)+"\n            ")]):t._e()],1),t._v(" "),e("router-view"),t._v(" "),t.$route.meta.showBottomTab?e("div",{staticClass:"footer-wrapper"},[e("div",{staticClass:"flex flex-h",attrs:{id:"bottomBar"}},[e("router-link",{staticClass:"bottomBar-item col",attrs:{to:{name:"home"},tag:"div"}},[e("p",{staticClass:"icon"},[e("i",{staticClass:"iconfont icon-shouye"})]),t._v(" "),e("p",{staticClass:"txt"},[t._v("首页")])]),t._v(" "),e("router-link",{staticClass:"bottomBar-item col",attrs:{to:{name:"shopping"},tag:"div"}},[e("p",{staticClass:"icon"},[e("i",{staticClass:"iconfont icon-dianpu"})]),t._v(" "),e("p",{staticClass:"txt"},[t._v("商城")])]),t._v(" "),e("router-link",{staticClass:"bottomBar-item col",attrs:{to:{name:"my"},tag:"div"}},[e("p",{staticClass:"icon"},[e("i",{staticClass:"iconfont icon-wode"})]),t._v(" "),e("p",{staticClass:"txt"},[t._v("我的")])])],1)]):t._e()],1)},i=[],r={render:o,staticRenderFns:i};a.a=r},d3HN:function(t,a,e){var o=e("+LyJ");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e("FIqI")("74c151d1",o,!0,{})},"x1N+":function(t,a,e){"use strict";a.a={name:"layout",data:function(){return{}},computed:{rightBarFun:function(){return this.$store.getters.rightBarFun}},methods:{goBack:function(){this.$router.go(-1)},clickRightBar:function(){this.rightBarFun()}},created:function(){var t=this.$route.query;this.Storage.setItem("urlMessage",t)},mounted:function(){}}}});