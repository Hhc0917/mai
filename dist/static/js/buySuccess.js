webpackJsonp([1],{"0Ok0":function(e,t,a){var s=a("Wa2L");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("bUva")("9965fa04",s,!0,{})},"25Mr":function(e,t,a){var s=a("S38b");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("bUva")("3f4e8ac3",s,!0,{})},"6i51":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"width100 flex flex-hlr items",on:{click:function(t){e.goDetail(e.message.id)}}},[a("div",{staticClass:"img"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy.container",value:e.message.image,expression:"message.image",modifiers:{container:!0}}],attrs:{alt:""}}),e._v(" "),1==e.message.isGiveGold?a("div",{staticClass:"item-tip"},[e._v("\n            送黄金\n        ")]):e._e()]),e._v(" "),a("div",{staticClass:"right flex flex-s flex-hlr"},[a("div",{staticClass:"name color333"},[e._v("\n            "+e._s(e.message.productName)+"\n        ")]),e._v(" "),1==e.message.isGiveGold?a("div",{staticClass:"item-send"},[e._v("\n            送价值"+e._s(e.message.giveGoldQuantity)+"元黄金\n        ")]):e._e(),e._v(" "),a("div",{staticClass:"price flex flex-hlr width100"},[a("div",{staticClass:"left colorRed largeFont flex flex-sc"},[e._v("\n                ￥"+e._s(e.message.price)+"\n            ")]),e._v(" "),a("div",{staticClass:"buy"},[e._v("\n                购买\n            ")])])])])},i=[],r={render:s,staticRenderFns:i};t.a=r},AVZy:function(e,t,a){var s=a("eVBx");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("bUva")("50b5f200",s,!0,{})},"E/eF":function(e,t,a){"use strict";var s=a("NtYf"),i=(a.n(s),a("xkaJ"));t.a={data:function(){return{num:10,productDetail:{orderCount:"",productName:""},alertState1:0}},components:{shoppingItem:i.a},created:function(){this.getByOid()},mounted:function(){},methods:{goTrueName:function(){this.$router.push({name:"trueName"})},close1:function(){console.log("ddd"),this.alertState1=0},upLev:function(){var e=this;this.api.getB({url:"customer/getByToken",user:!0}).then(function(t){t.successed&&(1==t.returnValue.identityState?e.$router.push({name:"redLight",query:{oid:e.$route.query.oid}}):e.alertState1=1002)})},sendProd:function(){this.$router.push({name:"myOrder"})},close:function(){this.alertState=0},goHome:function(){this.$router.push({name:"home"})},goOrder:function(){this.$router.push({name:"myOrder"})},getByOid:function(){var e=this;s.Indicator.open(),this.api.getB({url:"customerOrder/getOrderDetail",params:{id:this.$route.query.oid},user:!0}).then(function(t){s.Indicator.close(),t.successed&&(e.productDetail=t.returnValue)})}}}},E11E:function(e,t,a){t=e.exports=a("yKCJ")(!1),t.push([e.i,".items[data-v-0604c93c]{padding:.75rem;border-top:1px solid #f2f2f2;background:#fff}.items .img[data-v-0604c93c]{position:relative;margin:0 auto;width:6.25rem;height:6.25rem;padding:.15rem}.items .img img[data-v-0604c93c]{width:100%;height:100%}.items .img .item-tip[data-v-0604c93c]{position:absolute;left:0;top:0;background:#f6376d;color:#fff;padding:.25rem;border-radius:.25rem}.items .right[data-v-0604c93c]{margin-left:.5rem;width:10rem}.items .right .name[data-v-0604c93c]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.items .right .item-send[data-v-0604c93c]{margin:.75rem 0;width:100%;height:1.5rem;line-height:1.5rem;color:#ffb400}.items .right .buy[data-v-0604c93c]{padding:.375rem .75rem;color:#f6376d;border-radius:.4rem;border:1px solid #f6376d}",""])},HaQX:function(e,t,a){"use strict";function s(e){a("AVZy")}Object.defineProperty(t,"__esModule",{value:!0});var i=a("c6tR"),r=a("Iz49"),n=a("Aizv"),o=s,d=n(i.a,r.a,!1,o,"data-v-510b1611",null);t.default=d.exports},Iz49:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper",attrs:{id:"buySuccess"}},[1==e.sendState?a("h1",{staticClass:"titile colorRed"},[e._v("提货成功！")]):e._e(),e._v(" "),1==e.sendState?a("p",{staticClass:"flex-zhong defaultStyle tip1"},[e._v("我们会尽快为您购买的商品发货，请注意查收！")]):e._e(),e._v(" "),0==e.sendState?a("h1",{staticClass:"titile colorRed"},[e._v("提货失败！")]):e._e(),e._v(" "),0==e.sendState?a("p",{staticClass:"flex-zhong defaultStyle tip1"},[e._v(e._s(e.errCode))]):e._e(),e._v(" "),a("div",{staticClass:"bottons defaultStyle flex flex-hsb mb"},[a("p",{on:{click:e.goHome}},[e._v("\n            返回首页>\n        ")]),e._v(" "),a("p",{on:{click:e.goOrder}},[e._v("\n            查看订单>\n        ")])]),e._v(" "),a("p",{staticClass:"productTit color333 defaultStyle"},[e._v("看看其他商品")]),e._v(" "),a("ul",{staticClass:"list"},[e._l(e.list,function(e,t){return[a("shoppingItem",{attrs:{message:e}})]}),e._v(" "),a("li",{staticClass:"clear"})],2)])},i=[],r={render:s,staticRenderFns:i};t.a=r},S38b:function(e,t,a){t=e.exports=a("yKCJ")(!1),t.push([e.i,"#payCarMonry .sendType[data-v-d537dff8]{position:relative;padding:0 .5rem;width:100%;background:#fff}#payCarMonry .sendType .one[data-v-d537dff8]{padding-top:.5rem;padding-bottom:.5rem;border-bottom:1px solid #ccc}#payCarMonry .sendType .three[data-v-d537dff8],#payCarMonry .sendType .two[data-v-d537dff8]{padding-top:.5rem;padding-bottom:.5rem;padding-right:1.25rem}#payCarMonry .sendType .jiantou[data-v-d537dff8]{position:absolute;right:.5rem;top:2rem;width:1rem;height:5rem;line-height:3rem;text-align:center}#payCarMonry .sendType .jiantou img[data-v-d537dff8]{width:.7rem}#payCarMonry .bottomTabIn[data-v-d537dff8]{padding:.5rem}#payCarMonry .bottomTabIn .buy[data-v-d537dff8]{width:5rem;height:2rem;background:red;color:#fff;border-radius:2rem}#payCarMonry .alertOne[data-v-d537dff8]{width:100%;padding-top:.75rem}#payCarMonry .alertOne input[data-v-d537dff8]{padding:0 .5rem;width:100%;height:2rem;border:1px solid #ccc;border-radius:.25rem}",""])},Wa2L:function(e,t,a){t=e.exports=a("yKCJ")(!1),t.push([e.i,"#buySuccess .defaultStyle[data-v-3477eedd],#buySuccess .titile[data-v-3477eedd]{width:100%;padding:.5rem;background:#fff}#buySuccess .titile[data-v-3477eedd]{text-align:center;font-size:1rem}#buySuccess .item[data-v-3477eedd]{background:#fff;margin:0 auto 1rem;width:17.5rem;border:1px solid #eee;border-radius:.25rem;overflow:hidden;-webkit-box-shadow:0 0 10px 5px #e8e8e8;box-shadow:0 0 10px 5px #e8e8e8}#buySuccess .item .img[data-v-3477eedd]{width:100%;height:6.25rem;background:#ddd}#buySuccess .item .img img[data-v-3477eedd]{width:100%;height:100%}#buySuccess .item .pt0[data-v-3477eedd]{padding-top:0}#buySuccess .bottons[data-v-3477eedd]{position:fixed;left:0;bottom:0;border-top:1px solid #eee}#buySuccess .bottons p[data-v-3477eedd]{width:50%;height:100%;text-align:center}#buySuccess .tip1[data-v-3477eedd]{padding-bottom:2.5rem}#buySuccess .alertOne[data-v-3477eedd]{width:100%;padding-top:.75rem}#buySuccess .alertOne input[data-v-3477eedd]{padding:0 .5rem;width:100%;height:2rem;border:1px solid #ccc;border-radius:.25rem}",""])},bOWH:function(e,t,a){"use strict";t.a={data:function(){return{}},props:["message"],methods:{goDetail:function(e){this.$router.push({name:"productDetail",query:{productId:e}})}},created:function(){},mounted:function(){}}},c6tR:function(e,t,a){"use strict";function s(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}var i=a("NtYf"),r=(a.n(i),a("xkaJ"));t.a={data:function(){return{num:10,sendState:-1,errCode:"",list:[]}},components:{shoppingItem:r.a},created:function(){this.sendProd(),this.getList()},mounted:function(){},methods:{upLev:function(){this.$router.push({name:"redLight"})},getList:function(){var e=this;this.api.getB({url:"product/getListOfRandom"}).then(function(t){if(t.successed){var a;(a=e.list).push.apply(a,s(t.returnValue))}})},sendProd:function(){var e=this;this.api.putB({url:"customerOrder/pickUpGoods",user:!0,params:{id:this.$route.query.oid}}).then(function(t){t.successed?e.sendState=1:(e.sendState=0,e.errCode=t.errorDesc)})},close:function(){this.alertState=0},goHome:function(){this.$router.push({name:"home"})},goOrder:function(){this.$router.push({name:"myOrder"})}}}},eVBx:function(e,t,a){t=e.exports=a("yKCJ")(!1),t.push([e.i,"#buySuccess .defaultStyle[data-v-510b1611],#buySuccess .titile[data-v-510b1611]{width:100%;padding:.5rem;background:#fff}#buySuccess .titile[data-v-510b1611]{text-align:center;font-size:1rem}#buySuccess .item[data-v-510b1611]{background:#fff;margin:0 auto 1rem;width:17.5rem;border:1px solid #eee;border-radius:.25rem;overflow:hidden;-webkit-box-shadow:0 0 10px 5px #e8e8e8;box-shadow:0 0 10px 5px #e8e8e8}#buySuccess .item .img[data-v-510b1611]{width:100%;height:6.25rem;background:#ddd}#buySuccess .item .img img[data-v-510b1611]{width:100%;height:100%}#buySuccess .item .pt0[data-v-510b1611]{padding-top:0}#buySuccess .bottons[data-v-510b1611]{position:fixed;left:0;bottom:0;border-top:1px solid #eee}#buySuccess .bottons p[data-v-510b1611]{width:50%;height:100%;text-align:center}#buySuccess .tip1[data-v-510b1611]{padding-bottom:2.5rem}#buySuccess .alertOne[data-v-510b1611]{width:100%;padding-top:.75rem}#buySuccess .alertOne input[data-v-510b1611]{padding:0 .5rem;width:100%;height:2rem;border:1px solid #ccc;border-radius:.25rem}",""])},nQbS:function(e,t,a){e.exports=a.p+"static/img/game.png"},ocOe:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"payCarMonry"}},[a("div",{staticClass:"sendType mb",on:{click:e.selectAddr}},[e._m(0),e._v(" "),a("div",{staticClass:"two flex flex-hlr"},[a("div",{staticClass:"defaultFont color333"},[e._v("\n                收货人："+e._s(e.defaultMessage.consignee)+"\n            ")]),e._v(" "),a("div",{staticClass:"defaultFont color333"},[e._v("\n                "+e._s(e.defaultMessage.mobile)+"\n            ")])]),e._v(" "),a("div",{staticClass:"three color333 smallFont"},[e._v("\n            收货地址：\n            "+e._s(e.defaultMessage.province)+"\n            "+e._s(e.defaultMessage.city)+"\n            "+e._s(e.defaultMessage.region)+"\n            "+e._s(e.defaultMessage.address)+"\n        ")]),e._v(" "),e._m(1)]),e._v(" "),a("div",{staticClass:"bottomTab"},[a("div",{staticClass:"bottomTabIn flex flex-hlr flex-sc"},[a("p",[e._v("\n                共 "),a("span",{staticClass:"colorRed"},[e._v(" "+e._s(e.$route.query.oid.split(",").length)+" ")]),e._v("件商品\n                 \n                 \n                共 "),a("span",{staticClass:"colorRed"},[e._v(" "+e._s(e.freight.freightAmount)+" ")]),e._v("元\n            ")]),e._v(" "),a("div",{staticClass:"buy flex-zhong",on:{click:e.pay}},[e._v("\n                确定支付\n            ")])])]),e._v(" "),1003===e.alertState?a("MessageBox",{on:{close:e.close}},[e._t("default",[a("p",{staticClass:"alertOne defaultFont color333"},[e._v(" 您的储值账户余额不足，请充值！")]),e._v(" "),a("p",{staticClass:"alertOne defaultFont color333 mb"},[e._v(" 当前余额： "),a("span",{staticClass:"colorRed"},[e._v(e._s(e.userInfo.balance))])]),e._v(" "),a("br"),e._v(" "),a("br"),e._v(" "),a("div",{staticClass:"buttons flex flex-hsb"},[a("mt-button",{attrs:{type:"default",size:"small"},on:{click:e.close}},[e._v("再想想")]),e._v(" "),a("mt-button",{attrs:{type:"primary",size:"small"},on:{click:e.goRecharge}},[e._v("去充值")])],1)])],2):e._e()],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"one flex flex-hlr"},[a("div",{staticClass:"defaultFont color333"},[e._v("\n                配送方式\n            ")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"jiantou flex-zhong"},[s("img",{attrs:{src:a("xMAf"),alt:""}})])}],r={render:s,staticRenderFns:i};t.a=r},s7us:function(e,t,a){"use strict";function s(e){a("0Ok0")}Object.defineProperty(t,"__esModule",{value:!0});var i=a("E/eF"),r=a("tAgT"),n=a("Aizv"),o=s,d=n(i.a,r.a,!1,o,"data-v-3477eedd",null);t.default=d.exports},"t/CA":function(e,t,a){e.exports=a.p+"static/img/send.png"},tAgT:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper",attrs:{id:"buySuccess"}},[a("h1",{staticClass:"titile colorRed"},[e._v("\n        购买成功！\n        "),a("br"),e._v(" "),1==e.productDetail.isGiveGold?a("span",[e._v("恭喜您获得消费送黄金福利！")]):e._e()]),e._v(" "),1==e.productDetail.isGiveGold?a("div",{staticClass:"item",on:{click:e.upLev}},[e._m(0),e._v(" "),a("div",{staticClass:"one-tit defaultStyle color333 largeFont"},[e._v("\n            玩游戏送黄金\n        ")]),e._v(" "),a("p",{staticClass:"pd20 colorRed pt0"},[e._v("\n            成功可获得价值 "+e._s(e.productDetail.giveGoldQuantity)+" 元黄金\n        ")])]):e._e(),e._v(" "),a("div",{staticClass:"item",on:{click:function(t){e.sendProd()}}},[e._m(1),e._v(" "),a("div",{staticClass:"one-tit defaultStyle color333 largeFont"},[e._v("\n            直接提货\n        ")])]),e._v(" "),a("div",{staticClass:"bottons defaultStyle flex flex-sc flex-hsb"},[a("p",{on:{click:e.goHome}},[e._v("\n            返回首页>\n        ")]),e._v(" "),a("p",{on:{click:e.goOrder}},[e._v("\n            查看订单>\n        ")])]),e._v(" "),1002===e.alertState1?a("MessageBox",{on:{close:e.close1}},[e._t("default",[a("p",{staticClass:"alertOne defaultFont color333"},[e._v(" 应国家政策要求，购买商品前请进行实名认证！")]),e._v(" "),a("br"),e._v(" "),a("br"),e._v(" "),a("div",{staticClass:"buttons flex flex-hsb"},[a("mt-button",{attrs:{type:"default",size:"small"},on:{click:e.close1}},[e._v("再想想")]),e._v(" "),a("mt-button",{attrs:{type:"primary",size:"small"},on:{click:e.goTrueName}},[e._v("前去实名")])],1)])],2):e._e()],1)},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"img"},[s("img",{attrs:{src:a("nQbS"),alt:""}})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"img"},[s("img",{attrs:{src:a("t/CA"),alt:""}})])}],r={render:s,staticRenderFns:i};t.a=r},vI62:function(e,t,a){var s=a("E11E");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("bUva")("8806ef84",s,!0,{})},vdCt:function(e,t,a){"use strict";function s(e){a("25Mr")}Object.defineProperty(t,"__esModule",{value:!0});var i=a("vtXG"),r=a("ocOe"),n=a("Aizv"),o=s,d=n(i.a,r.a,!1,o,"data-v-d537dff8",null);t.default=d.exports},vtXG:function(e,t,a){"use strict";var s=a("NtYf");a.n(s);t.a={data:function(){return{defaultMessage:{consignee:""},alertState:0,freight:{},userInfo:{}}},created:function(){this.$route.query.addrId?this.getById():this.getDefault()},methods:{close:function(){this.alertState=0},goRecharge:function(){this.$router.push({name:"recharge"})},pay:function(){var e=this;s.MessageBox.confirm("确定支付？").then(function(t){s.Indicator.open(),e.api.postB({url:"customerOrder/pickUpGoods",params:{customerOrderIds:e.$route.query.oid,deliveryAddressId:e.defaultMessage.id},user:!0}).then(function(t){if(s.Indicator.close(),t.successed)e.Util.myAlert("支付成功"),e.$router.replace({name:"myOrder"});else switch(t.errorCode){case"500":e.Util.myAlert("系统异常，请稍后重试");break;case"1001":e.Util.myAlert(t.errorDesc),e.api.noLogin();break;case"1002":e.alertState=1002;break;case"1003":e.alertState=1003;break;default:e.Util.myAlert(t.errorDesc)}})})},selectAddr:function(){this.$router.push({name:"receiveAddress",query:{oid:this.$route.query.oid,isSelect:1}})},getFreight:function(){var e=this;this.api.putB({url:"customerOrder/getPickUpGoodsInfo",params:{customerOrderIds:this.$route.query.oid,deliveryAddressId:this.defaultMessage.id},user:!0}).then(function(t){s.Indicator.close(),t.successed&&(e.freight=t.returnValue)}).catch(function(){})},getById:function(){var e=this;s.Indicator.open(),this.api.getB({url:"deliveryAddress/getById",params:{id:this.$route.query.addrId},user:!0}).then(function(t){s.Indicator.close(),t.successed&&(e.defaultMessage=t.returnValue,e.getFreight())}).catch(function(){})},getDefault:function(){var e=this;s.Indicator.open(),this.api.getB({url:"deliveryAddress/getDefault",user:!0}).then(function(t){s.Indicator.close(),t.successed&&t.returnValue&&(e.defaultMessage=t.returnValue,e.getFreight())})},getMyInfo:function(){var e=this;this.api.getB({url:"customer/getByToken",user:!0}).then(function(t){t.successed&&(e.userInfo=t.returnValue)})}}}},xMAf:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAWCAMAAAD6gTxzAAAABGdBTUEAALGPC/xhBQAAAFFQTFRFwcvawcvawcvawcvawcvawcvawcvawcvawcvawcvawcvawcvawcvawcvawcvawcvawcvawcvawcvawcvawcvawcvawcvawcvawcvaAAAAwcvalBVc2QAAABp0Uk5T+d6f/vOoKfvYPQ6XugGpTvXkp+5h4oQIGAAGFDLHAAAAYUlEQVQY043RyQ6AIAwEUNz3DRVw/v9DNUaROD0wx3do2qmyqcqL8giiDK5UxgaU4E7dfJThSde+BJ9lIgJGR4R1G/4E9I4IuyOCZpqjSEeMpyV4VTrIny2UI1QoFM3vOAE1WiUBGCdIHgAAAABJRU5ErkJggg=="},xkaJ:function(e,t,a){"use strict";function s(e){a("vI62")}var i=a("bOWH"),r=a("6i51"),n=a("Aizv"),o=s,d=n(i.a,r.a,!1,o,"data-v-0604c93c",null);t.a=d.exports}});