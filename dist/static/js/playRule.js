webpackJsonp([27],{JFkK:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrapper",attrs:{id:"playRule"}},[e("div",{staticClass:"content"},[e("p",{staticClass:"small-tit"},[t._v("Instructions")]),t._v(" "),e("h2",{staticClass:"big-tit"},[t._v("玩法说明")]),t._v(" "),e("div",{staticClass:"play-list"},t._l(t.data,function(a,i){return e("div",{staticClass:"play-item"},[e("p",{staticClass:"play-item-tit",on:{click:function(a){t.changeState(i)}}},[t._v("\n                    "+t._s(i+1)+"."+t._s(a.tit)+"\n                ")]),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:i==t.openIdx,expression:"index==openIdx"}],staticClass:"play-item-detail",domProps:{innerHTML:t._s(a.message)}})])}))])])},n=[],s={render:i,staticRenderFns:n};a.a=s},WYSN:function(t,a,e){a=t.exports=e("yKCJ")(!1),a.push([t.i,"#playRule[data-v-4678d7a9]{top:0;bottom:0}#playRule .content[data-v-4678d7a9]{top:0;bottom:0;background:#fff}#playRule #rule[data-v-4678d7a9]{width:100%;height:100%}#playRule .small-tit[data-v-4678d7a9]{padding:0 25px;padding-top:30px;font-family:BrandonText-Bold;font-size:14px;color:#c1cbda}#playRule .big-tit[data-v-4678d7a9]{padding:0 25px;font-family:PingFangSC-Semibold;font-size:24px;color:#303439;margin-bottom:30px}#playRule .play-list[data-v-4678d7a9]{width:100%;padding:1px 0}#playRule .play-item[data-v-4678d7a9]{width:100%;height:auto}#playRule .play-item-tit[data-v-4678d7a9]{padding:0 25px;width:100%;height:62px;font-size:14px;line-height:62px;color:#303439;border-top:1px solid #f8fafd;border-bottom:1px solid #f8fafd}#playRule .play-item-detail[data-v-4678d7a9]{padding:20px 25px;color:#9ea8b5;line-height:27px;font-size:14px}",""])},eMgF:function(t,a,e){var i=e("WYSN");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("bUva")("0baf089e",i,!0,{})},sSeW:function(t,a,e){"use strict";function i(t){e("eMgF")}Object.defineProperty(a,"__esModule",{value:!0});var n=e("wPOJ"),s=e("JFkK"),d=e("Aizv"),l=i,o=d(n.a,s.a,!1,l,"data-v-4678d7a9",null);a.default=o.exports},wPOJ:function(t,a,e){"use strict";a.a={data:function(){return{openIdx:0,data:[{tit:"如何开始游戏",message:"如您选择的是空闲设备：<br />直接点击“开始游戏”，进入游戏<br />如您选择的是游戏中设备：<br />您可以等待等待期间您可观看他人的游玩过程，并可进行弹幕评论。<br />"},{tit:"如何控制娃娃机",message:"和中国大陆目前最流行的娃娃机玩法一致。<br />① 按住画面中的左右与前后键来移动，下爪键来控制爪子。<br />② 您还可以点击切换视角按钮，来切换摄像头画面，显示娃娃机的正面或者侧面，以方便调整爪子的位置。<br />③ 从指定洞口掉落即可获得奖品。<br />"},{tit:"如何获得奖品",message:"① 在“我的收货地址”页面添加物流信息。<br />② 抓中的奖品会显示在“我获得的奖品”页面，选择您想要快递的奖品并点按“申请发货”按钮。<br />③ 在生成的订单页面检查信息无误后点按“确认订单”。<br />④ 静静地等待您的奖品发货吧！<br />"}]}},methods:{changeState:function(t){this.openIdx=t}},mounted:function(){}}}});