webpackJsonp([4],{"0Q7q":function(t,e,a){t.exports=a.p+"static/img/red2.png"},"0ayP":function(t,e,a){t.exports=a.p+"static/img/green2.png"},"1ig4":function(t,e,a){t.exports=a.p+"static/img/road.png"},"3f9Z":function(t,e,a){t.exports=a.p+"static/img/red.png"},"5pEm":function(t,e,a){var s=a("L4zZ");e=t.exports=a("UTlt")(!1),e.push([t.i,"#redLight[data-v-763b4dc0]{padding-top:5rem;background:url("+s(a("f3nh"))+") no-repeat 0 0;background-size:100%}#redLight .redRule[data-v-763b4dc0]{background:#000}#redLight .alertIn .row[data-v-763b4dc0]{text-align:center}#redLight .alertIn .startGame[data-v-763b4dc0]{margin:0 auto;width:7.25rem;height:2rem;background:#409eff;color:#fff;background:url("+s(a("erK8"))+") no-repeat 50%;background-size:100% 100%}#redLight .alertIn1[data-v-763b4dc0],#redLight .alertInTwo[data-v-763b4dc0]{width:15.25rem;height:19.6rem;padding-top:5rem}#redLight .alertInTwo .item img[data-v-763b4dc0]{width:3.2rem;height:4.6rem}#redLight .alertInTwo .item .bottom[data-v-763b4dc0]{text-align:center}#redLight .alertInTwo .select[data-v-763b4dc0]{background:#ffb3b3}#redLight .alertInTwo .start[data-v-763b4dc0]{margin:0 auto .5rem;width:100%;height:2.5rem;background:#409eff;color:#fff}#redLight .gameRule[data-v-763b4dc0]{margin-top:1.25rem;padding-top:.5rem;width:100%;text-align:center;border-top:2px solid #ccc}#redLight .endTime[data-v-763b4dc0],#redLight .nowTime[data-v-763b4dc0]{text-align:center}#redLight .endTime[data-v-763b4dc0]{margin-bottom:1.25rem}#redLight .selectLight[data-v-763b4dc0]{padding:2.6rem 1rem}#redLight .lightList[data-v-763b4dc0]{background:url("+s(a("JN6r"))+") no-repeat 0 100%;background-size:100%}#redLight .lightList .item[data-v-763b4dc0]{width:5rem}#redLight .lightList .item .itemIn[data-v-763b4dc0],#redLight .lightList .item img[data-v-763b4dc0]{width:100%}#redLight .lightList .item .top[data-v-763b4dc0]{margin:0 auto .5rem;width:3rem;height:3rem;border-radius:50%}#redLight .lightList .item .top img[data-v-763b4dc0]{width:100%}#redLight .lightList .item .bottom[data-v-763b4dc0]{text-align:center}#redLight .lightList .item .red[data-v-763b4dc0]{background:red}#redLight .lightList .item .green[data-v-763b4dc0]{background:green}#redLight .lightList .item .yellow[data-v-763b4dc0]{background:#ff0}#redLight .lightList .item p[data-v-763b4dc0]{text-align:center;margin-bottom:.5rem;margin-top:.5rem;word-break:break-all}#redLight .lightList2[data-v-763b4dc0]{padding-top:.75rem;height:7.4rem;background:url("+s(a("1ig4"))+") no-repeat 0 0;background-size:100%}#redLight .message[data-v-763b4dc0]{padding:.25rem 0;background:#000}#redLight .redColor[data-v-763b4dc0]{color:red}#redLight .greenColor[data-v-763b4dc0]{color:green}",""])},BYVo:function(t,e,a){"use strict";function s(t){a("Xp86")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("NBDs"),r=a("evgH"),n=a("Z0/y"),o=s,d=n(i.a,r.a,!1,o,"data-v-763b4dc0",null);e.default=d.exports},Hv68:function(t,e,a){"use strict";function s(t){a("z/6h")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("dQAr"),r=a("X/bs"),n=a("Z0/y"),o=s,d=n(i.a,r.a,!1,o,"data-v-02b4b875",null);e.default=d.exports},JN6r:function(t,e,a){t.exports=a.p+"static/img/tree.png"},NBDs:function(t,e,a){"use strict";var s=a("wSez"),i=(a.n(s),a("LOkV")),r=null,n=null;e.a={data:function(){return{alertStyle1:{padding:0,background:"url(./static/img/redLight/redBg.png) no-repeat left top","background-size":"100% 100%"},alertStyle2:{padding:0,background:"url(./static/img/redLight/selectBg.png) no-repeat left top","background-size":"100% 100%"},alertState:1,select:0,message:{dataSourceName:"",dataSourceValue:""},time:0,nowTime:this.Util.dateTime(Date.parse(new Date),"time")}},filters:{times:function(t){return t>60?"00:"+i.a.addZero(parseInt(t/60))+":"+i.a.addZero(t-60):"00:00:"+i.a.addZero(t)}},created:function(){this.getMessage(),this.getNowTime()},methods:{startThisGame:function(){var t=this;this.getMessage();var e=new Date;e.getSeconds()>30?this.time=60-e.getSeconds()+60:this.time=60-e.getSeconds(),r=setInterval(function(){t.time--,t.time%5==0&&t.getMessage(),0==t.time&&(t.$router.push({name:"upLvResult",query:{oid:t.$route.query.oid}}),clearInterval(r))},1e3)},selectThis:function(t){this.select=t},startgame:function(t){var e=this;console.log(t),3==t?this.api.putB({url:"customerOrder/startGame",user:!0,params:{id:this.$route.query.oid,customerSelect:this.select}}).then(function(t){t.successed&&(e.alertState=0,e.startThisGame())}):(this.alertState=0,this.$nextTick(function(){e.alertState=t}))},getMessage:function(){var t=this;this.api.getBn({url:"gameDataSource/getInfo",user:!0}).then(function(e){e.successed&&(t.message=e.returnValue)})},showRule:function(){var t=this;this.alertState=0,this.$nextTick(function(){t.alertState=1})},getNowTime:function(){var t=this;n=setInterval(function(){t.nowTime=t.Util.dateTime(Date.parse(new Date),"time")},1e3)},showBack:function(){var t=this;Object(s.MessageBox)({title:" 提示 ",message:"本次游戏已完成，谢谢参与！",showConfirmButton:!0,showCancelButton:!0,confirmButtonText:"返回首页",cancelButtonText:"查看结果"}).then(function(e){console.log(e),"confirm"===e?t.$router.push({name:"home"}):(console.log("查看结果"),t.$router.push({name:"upLvResult"}))}).catch(function(t){})}},beforeDestroy:function(){r&&clearInterval(r),n&&clearInterval(n)}}},QRKn:function(t,e,a){t.exports=a.p+"static/img/green1.png"},W9J1:function(t,e,a){e=t.exports=a("UTlt")(!1),e.push([t.i,"#upLvResult[data-v-02b4b875]{padding:.75rem .5rem}#upLvResult .pb0[data-v-02b4b875]{padding-bottom:0}#upLvResult .middTip[data-v-02b4b875]{padding:.5rem;margin-top:1rem}#upLvResult .middTip .top[data-v-02b4b875]{padding-top:.5rem;padding-bottom:.5rem;border-top:1px solid #ccc}#upLvResult .middTip .bottom[data-v-02b4b875]{border:1px solid #ccc}#upLvResult .buttons button[data-v-02b4b875]{width:7.5rem;font-size:.7rem}#upLvResult .bottons1[data-v-02b4b875]{padding-top:.5rem;padding-bottom:.5rem;border-top:1px solid #eee}#upLvResult .bottons1 p[data-v-02b4b875]{width:50%;height:100%;text-align:center}",""])},"X/bs":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper",attrs:{id:"upLvResult"}},[2===t.result?[a("p",{staticClass:" color333 pd20 pb0 width100"},[t._v("\n\t\t\t\t预测选择： "),a("span",{staticClass:"colorRed"},[t._v(t._s(0==t.message.customerSelect?"红灯":"绿灯"))])]),t._v(" "),a("p",{staticClass:" color333 pd20 pb0 width100"},[t._v("\n\t\t\t\t游戏结果："),a("span",{staticClass:"colorRed"},[t._v(t._s(0==t.message.gameResult?"红灯":"绿灯"))])]),t._v(" "),a("p",{staticClass:"colorRed pd20 largeFont tc"},[t._v("\n\t\t\t\t恭喜您中奖！\n\t\t\t")]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"buttons flex flex-hsb mb"},[a("mt-button",{attrs:{type:"danger"},on:{click:t.send}},[t._v("存黄金")]),t._v(" "),a("mt-button",{attrs:{type:"danger"}},[t._v("厂商回购")])],1)]:t._e(),t._v(" "),3===t.result?[t._m(0),t._v(" "),a("p",{staticClass:" color333 pd20 pb0 width100"},[t._v("\n\t\t\t\t预测选择： "),a("span",{staticClass:"colorRed"},[t._v(t._s(0==t.message.customerSelect?"红灯":"绿灯"))])]),t._v(" "),a("p",{staticClass:" color333 pd20 pb0 width100"},[t._v("\n\t\t\t\t游戏结果："),a("span",{staticClass:"colorRed"},[t._v(t._s(0==t.message.gameResult?"红灯":"绿灯"))])]),t._v(" "),a("p",{staticClass:"colorRed pd20 largeFont"},[t._v("\n\t\t\t\t升级失败！\n\t\t\t")]),t._v(" "),a("div",{staticClass:"middTip mb"},[a("p",{staticClass:"top"},[t._v("\n\t\t\t\t\t我们会尽快为您购买的商品发货，请注意查收！\n\t\t\t\t")]),t._v(" "),a("div",{staticClass:"bottom smallFont"},[a("p",{staticClass:"pd20 width100"},[t._v("\n\t\t\t\t\t\t购买商品："+t._s(t.message.productName)+"\n\t\t\t\t\t")]),t._v(" "),a("p",{staticClass:"pd20 width100 colorRed"},[t._v("\n\t\t\t\t\t\t单价："+t._s(t.message.productPrice)+"元  \n\t\t\t\t\t\t"),a("span",{staticClass:"color333"},[t._v(" 数量："+t._s(t.message.orderCount)+" ")])])])]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"bottons1 defaultStyle flex flex-hsb mb"},[a("p",{on:{click:t.goHome}},[t._v("\n\t\t\t\t\t返回首页>\n\t\t\t\t")]),t._v(" "),a("p",{on:{click:t.goOrder}},[t._v("\n\t\t\t\t\t查看订单>\n\t\t\t\t")])])]:t._e(),t._v(" "),a("p",{staticClass:" color333 pd20 pb0 width100"},[t._v("\n            本次游戏结果数据\n        ")]),t._v(" "),t.message.gameData?a("div",{staticClass:"flex flex-hlr pd20 pb0"},[a("p",[t._v(t._s(t.message.gameData.dataSourceName)+"："+t._s(t.message.gameData.dataSourceValue))]),t._v(" "),a("p",{staticClass:"colorRed"},[t._v(t._s(t.message.gameData.dataSourceValue.slice(-1)%2==1?"奇数亮红灯":"偶数绿灯亮"))])]):t._e()],2)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:" color333 pd20 pb0 width100"},[t._v("\n\t\t\t\t参与游戏： "),a("span",{staticClass:"color333"},[t._v("超级红绿灯")])])}],r={render:s,staticRenderFns:i};e.a=r},Xp86:function(t,e,a){var s=a("5pEm");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("FIqI")("4b48d5ee",s,!0,{})},dQAr:function(t,e,a){"use strict";var s=a("wSez"),i=(a.n(s),null);e.a={data:function(){return{result:1,message:{stockIndexVo:{stockIndexOneValue:"",stockIndexTowValue:"",stockIndexThreeValue:""}}}},created:function(){var t=this;this.getResult(),i=setInterval(function(){t.getResult()},1e3)},beforeDestroy:function(){i&&clearInterval(i)},methods:{goOrder:function(){this.$router.push({name:"myOrder"})},goHome:function(){this.$router.push({name:"home"})},send:function(){this.$router.push({name:"sendResult",query:{oid:this.$route.query.oid}})},getResult:function(){var t=this;console.log("dddd"),s.Indicator.open(),this.api.getB({url:"customerOrder/getOrderGameResult",params:{id:this.$route.query.oid},user:!0}).then(function(e){s.Indicator.close(),e.successed&&(t.message=e.returnValue,t.result=e.returnValue.gameState,2!=t.result&&3!=t.result||clearInterval(i),console.log(e))})}}}},erK8:function(t,e,a){t.exports=a.p+"static/img/start.png"},evgH:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper",attrs:{id:"redLight"}},[1===t.alertState?s("MessageBox",{staticClass:"redRule",attrs:{hide:!0,instyle:t.alertStyle1}},[t._t("default",[s("div",{staticClass:"alertIn1 alertIn width100 pd20"},[s("h2",{staticClass:"colorRed largeFont row width100"}),t._v(" "),s("h6",{staticClass:"row width100"}),t._v(" "),s("p",[t._v("\n\t\t\t\t\t游戏将实时读取1个金融指数的真实数据。如数据最后一位数字为奇数，则亮红灯；如数据最后一位数字为偶数，则亮绿灯。\n\t\t\t\t")]),t._v(" "),s("br"),t._v(" "),s("p",{staticClass:"width100",staticStyle:{color:"#ff00e4"}},[t._v("\n\t\t\t\t\t游戏开始前玩家预测游戏结束时是哪种颜色的灯，游戏开始后下一个整分钟时间结束（剩余时间不足30秒顺延至下一分钟），如游戏结束时预测准确，则游戏获胜；如预测错误，则游戏失败。\n\t\t\t\t")]),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"startGame largeFont flex-zhong",on:{click:function(e){t.startgame(2)}}})])])],2):t._e(),t._v(" "),2===t.alertState?s("MessageBox",{attrs:{hide:!0,instyle:t.alertStyle2}},[t._t("default",[s("div",{staticClass:"alertIn2 alertIn width100 alertInTwo pd20"},[s("div",{staticClass:"flex flex-hsb width100 mb"},[s("div",{staticClass:"item pd20 red",on:{click:function(e){t.selectThis(0)}}},[s("img",{directives:[{name:"show",rawName:"v-show",value:0==t.select,expression:"select == 0"}],attrs:{src:a("lTog"),alt:""}}),t._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:1==t.select,expression:"select == 1"}],attrs:{src:a("0Q7q"),alt:""}})]),t._v(" "),s("div",{staticClass:"item pd20 green",on:{click:function(e){t.selectThis(1)}}},[s("img",{directives:[{name:"show",rawName:"v-show",value:1==t.select,expression:"select == 1"}],attrs:{src:a("QRKn"),alt:""}}),t._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:0==t.select,expression:"select == 0"}],attrs:{src:a("0ayP"),alt:""}})])]),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"startGame largeFont flex-zhong mb",on:{click:function(e){t.startgame(3)}}}),t._v(" "),s("div",{staticClass:"gameRule",on:{click:t.showRule}},[t._v("\n\t\t\t\t\t游戏规则>\n\t\t\t\t")])])])],2):t._e(),t._v(" "),s("div",{staticClass:"nowTime width100"},[t._v("\n\t\t当前时间："+t._s(t.nowTime)+"\n\t")]),t._v(" "),s("div",{staticClass:"endTime width100 colorRed largeFont"},[t._v("\n\t\t距离结束："+t._s(t._f("times")(t.time))+"\n\t")]),t._v(" "),s("p",{staticClass:"width100 mb selectLight"},[t._v("\n\t\t预测选择："),s("span",{staticClass:"colorRed"},[t._v(t._s(0==t.select?"红灯":"绿灯"))])]),t._v(" "),s("div",{staticClass:"lightList1 lightList flex flex-hsb width100"},[s("div",{staticClass:"item"},[s("div",{staticClass:"itemIn"},[s("img",{directives:[{name:"show",rawName:"v-show",value:t.message.dataSourceValue.slice(-1)%2==1,expression:"message.dataSourceValue.slice(-1)%2==1"}],attrs:{src:a("3f9Z"),alt:""}}),t._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:t.message.dataSourceValue.slice(-1)%2==0,expression:"message.dataSourceValue.slice(-1)%2==0"}],attrs:{src:a("vYJz"),alt:""}})])])]),t._v(" "),s("div",{staticClass:"lightList2 lightList flex flex-hsb width100 mb"},[s("div",{staticClass:"item"},[s("div",{staticClass:"message",class:{redColor:t.message.dataSourceValue.slice(-1)%2==1,greenColor:t.message.dataSourceValue.slice(-1)%2==0}},[s("p",{staticClass:"width100"},[t._v("\n\t\t\t\t\t"+t._s(t.message.dataSourceName)+"\n\t\t\t\t")]),t._v(" "),s("p",{staticClass:"width100"},[t._v("\n\t\t\t\t\t"+t._s(t.message.dataSourceValue)+"\n\t\t\t\t")])])])])],1)},i=[],r={render:s,staticRenderFns:i};e.a=r},f3nh:function(t,e,a){t.exports=a.p+"static/img/bg1.png"},lTog:function(t,e,a){t.exports=a.p+"static/img/red1.png"},vYJz:function(t,e,a){t.exports=a.p+"static/img/green.png"},"z/6h":function(t,e,a){var s=a("W9J1");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("FIqI")("bef11134",s,!0,{})}});