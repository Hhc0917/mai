webpackJsonp([20],{"/3+K":function(t,e,i){t.exports=i.p+"static/img/receive_title.png"},MQNp:function(t,e,i){"use strict";function s(t){i("QOv2")}Object.defineProperty(e,"__esModule",{value:!0});var r=i("e70l"),n=i("RuYx"),a=i("Aizv"),o=s,c=a(r.a,n.a,!1,o,null,null);e.default=c.exports},QOv2:function(t,e,i){var s=i("tmbZ");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("bUva")("1eb0e74e",s,!0,{})},RuYx:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper",attrs:{id:"ticketList",data:t.loginstate}},[t._m(0),t._v(" "),i("div",{staticClass:"ticket-list"},t._l(t.list,function(e){return i("div",{staticClass:"ticket-item flex flex-hlr flex-sc",class:{nouse:0==e.status,used:1==e.status}},[i("p",{staticClass:"ticket-name"},[i("span",{staticClass:"top"},[t._v(t._s(e.viewName))]),t._v(" "),i("span",{staticClass:"bottom"},[t._v("由 "+t._s(e.publicNumberName)+" 提供")])]),t._v(" "),i("div",{staticClass:"now-btn",on:{click:function(i){t.goGet(e)}}})])}))])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"banner"},[s("img",{attrs:{src:i("/3+K"),alt:""}})])}],n={render:s,staticRenderFns:r};e.a=n},e70l:function(t,e,i){"use strict";e.a={data:function(){return{list:[]}},computed:{loginstate:function(){return this.$store.getters.loginstate>0&&(this.getList(),this.getFirst()),this.$store.getters.loginstate}},methods:{goGet:function(t){0==t.status&&(t.keyword?this.$router.push({path:"/focus",query:{key:t.publicNumberKey,keyword:t.keyword,name:t.publicNumberName,qrCode:this.Util.ifWeixinTrue()?t.codeUrl:null}}):this.$router.push({path:"/focus",query:{key:t.publicNumberKey}}))},getFirst:function(){var t=this;this.api.getBn({url:"coupon/getCoupon",params:{userId:this.User.getMemberId()},headers:{token:this.User.getToken()}}).then(function(e){e.data.successed&&t.list.unshift({viewName:"娃娃机兑换券",status:0,publicNumberName:e.data.returnValue.ghname,keyword:e.data.returnValue.keyword,codeUrl:decodeURI(e.data.returnValue.qrcode_url)})})},getList:function(){var t=this;this.api.getBn({url:"coupon/getList",params:{userId:this.User.getMemberId(),pageSize:50,pageNum:1},headers:{token:this.User.getToken()}}).then(function(e){e.data.successed&&(t.list=e.data.returnValue.list)})}},created:function(){}}},swTl:function(t,e,i){t.exports=i.p+"static/img/receive_coupon2.png"},tDGu:function(t,e,i){t.exports=i.p+"static/img/receive_coupon.gif"},tmbZ:function(t,e,i){var s=i("BCHI");e=t.exports=i("yKCJ")(!1),e.push([t.i,"#ticketList .banner{margin-bottom:1.2rem;width:100%}#ticketList .banner img{width:100%;height:100%}#ticketList .ticket-list{margin:0 auto;width:16.5rem}#ticketList .ticket-item{margin-bottom:1rem;padding-left:1.1rem;padding-right:.8rem;width:16.55rem;height:4rem}#ticketList .ticket-item .ticket-name{font-size:.9rem;color:#fff;font-weight:600}#ticketList .ticket-item .ticket-name .top{display:block;margin-bottom:.4rem;text-indent:.15rem}#ticketList .ticket-item .ticket-name .bottom{display:block;color:#ff8022;padding:.1rem .5rem;background:#fff;font-size:.6rem;border-radius:.9rem}#ticketList .ticket-item .now-btn{width:4rem;height:100%;color:#f60;font-size:.7rem}#ticketList .nouse{background:url("+s(i("tDGu"))+") no-repeat 50%;background-size:contain}#ticketList .nouse .ticket-name .bottom{color:#ff8022}#ticketList .used{background:url("+s(i("swTl"))+") no-repeat 50%;background-size:contain}#ticketList .used .ticket-name .bottom{color:#999}",""])}});