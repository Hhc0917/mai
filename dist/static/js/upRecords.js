webpackJsonp([16],{"FHp+":function(t,e,s){"use strict";function r(t){s("O7Ft")}Object.defineProperty(e,"__esModule",{value:!0});var i=s("WbNn"),a=s("zhTs"),n=s("Z0/y"),o=r,l=n(i.a,a.a,!1,o,"data-v-69178e95",null);e.default=l.exports},O7Ft:function(t,e,s){var r=s("zHmE");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);s("FIqI")("53628898",r,!0,{})},WbNn:function(t,e,s){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,s=Array(t.length);e<t.length;e++)s[e]=t[e];return s}return Array.from(t)}var i=s("wSez");s.n(i);e.a={data:function(){return{list:[],loading:!1,noMore:!1,pageNum:1}},created:function(){},methods:{getList:function(){var t=this;this.loading=!0,this.api.getBn({url:"customerOrder/getUpOrderList",params:{pageNum:this.pageNum,pageSize:6},user:!0}).then(function(e){if(e.successed){var s;(s=t.list).push.apply(s,r(e.returnValue.list)),e.returnValue.list.length<6?t.noMore=!0:(t.pageNum++,t.loading=!1)}else t.Util.myAlert("获取列表失败，请稍后重试")}).catch(function(){i.Indicator.close()})}}}},zHmE:function(t,e,s){e=t.exports=s("UTlt")(!1),e.push([t.i,"#upRecords .row[data-v-69178e95]{padding:.5rem;width:100%;background:#fff;margin-bottom:1px}#upRecords .row div[data-v-69178e95]{text-align:center}#upRecords .row .one[data-v-69178e95]{width:30%}#upRecords .row .two[data-v-69178e95]{width:20%}#upRecords .row .three[data-v-69178e95]{width:30%}#upRecords .row .four[data-v-69178e95]{width:20%}#upRecords .tit[data-v-69178e95]{background:#ddd}",""])},zhTs:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper",attrs:{id:"upRecords"}},[s("div",{ref:"wrapper",staticClass:"lists width100 page-infinite-wrapper"},[s("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.getList,expression:"getList"}],ref:"roolist",staticClass:"list width100 page-infinite-list",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"60"}},[t._m(0),t._v(" "),t._l(t.list,function(e){return s("li",{staticClass:"row flex"},[s("div",{staticClass:"one"},[t._v("\n                    "+t._s(e.upgradeTime)+"\n                ")]),t._v(" "),s("div",{staticClass:"two"},[t._v("\n                    "+t._s(e.orderCount)+"\n                ")]),t._v(" "),s("div",{staticClass:"three"},[t._v("\n                    "+t._s(e.productName)+"\n                ")]),t._v(" "),s("div",{staticClass:"four"},[t._v("\n                    "+t._s(2==e.upgradeState?"成功":"失败")+"\n                ")])])})],2)]),t._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:!t.noMore,expression:"!noMore"}],staticClass:"noMore flex-zhong"},[s("mt-spinner",{attrs:{type:"snake"}})],1),t._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:t.noMore,expression:"noMore"}],staticClass:"noMore"},[t._v("没有更多数据了")])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"row flex tit"},[s("div",{staticClass:"one"},[t._v("\n                    升级时间\n                ")]),t._v(" "),s("div",{staticClass:"two"},[t._v("\n                    订单数量\n                ")]),t._v(" "),s("div",{staticClass:"three"},[t._v("\n                    商品名称\n                ")]),t._v(" "),s("div",{staticClass:"four"},[t._v("\n                    状态\n                ")])])}],a={render:r,staticRenderFns:i};e.a=a}});