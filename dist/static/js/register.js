webpackJsonp([16],{"8zp9":function(t,e,i){"use strict";function o(t){i("N1o7")}Object.defineProperty(e,"__esModule",{value:!0});var a=i("z9S9"),r=i("FxG2"),n=i("Z0/y"),s=o,l=n(a.a,r.a,!1,s,"data-v-856b7f30",null);e.default=l.exports},FxG2:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper",attrs:{id:"register"}},[i("div",{staticClass:"content"},[i("h3",[t._v("注册")]),t._v(" "),i("div",{staticClass:"list flex flex-s"},[i("label",{staticClass:"border-item flex",attrs:{for:"userName"}},[i("i",{staticClass:"iconfont icon-shoujihao"}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],attrs:{type:"text",name:"userName",placeholder:"手机号",id:"userName"},domProps:{value:t.mobile},on:{input:function(e){e.target.composing||(t.mobile=e.target.value)}}})]),t._v(" "),i("label",{staticClass:"border-item flex",attrs:{for:"code"}},[i("i",{staticClass:"iconfont icon-yanzhengma"}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],attrs:{type:"text",name:"userName",placeholder:"短信验证码",id:"code"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}}),t._v(" "),"获取验证码"===t.cutdown?i("div",{staticClass:"get-code",on:{click:t.getCode}},[t._v(t._s(t.cutdown))]):i("div",{staticClass:"get-code get-code-gray"},[t._v(t._s(t.cutdown))])]),t._v(" "),i("label",{staticClass:"border-item flex",attrs:{for:"password"}},[i("i",{staticClass:"iconfont icon-mima1"}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.pw,expression:"pw"}],attrs:{type:"password",name:"userName",placeholder:"密码",id:"password"},domProps:{value:t.pw},on:{input:function(e){e.target.composing||(t.pw=e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"button"},[i("button",{staticClass:"login",attrs:{type:"button",name:"button"},on:{click:t.register}},[t._v("注册")])]),t._v(" "),i("div",{staticClass:"flex fu"},[i("div",{staticClass:"item flex flex-sc"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.agree,expression:"agree"}],staticClass:"my-choekbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.agree)?t._i(t.agree,null)>-1:t.agree},on:{change:function(e){var i=t.agree,o=e.target,a=!!o.checked;if(Array.isArray(i)){var r=t._i(i,null);o.checked?r<0&&(t.agree=i.concat([null])):r>-1&&(t.agree=i.slice(0,r).concat(i.slice(r+1)))}else t.agree=a}}}),t._v(" "),i("span",{staticClass:"agrement"},[t._v("我同意《用户协议》")])]),t._v(" "),i("router-link",{staticClass:"item",attrs:{to:"/login"}},[t._v("\n                \t已注册去登录\n            ")])],1)])])},a=[],r={render:o,staticRenderFns:a};e.a=r},N1o7:function(t,e,i){var o=i("cf2j");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i("FIqI")("699b7036",o,!0,{})},cf2j:function(t,e,i){e=t.exports=i("UTlt")(!1),e.push([t.i,'#register[data-v-856b7f30]{background:#efefef}#register .content[data-v-856b7f30]{top:0;bottom:40px}#register .content h3[data-v-856b7f30]{width:100%;height:60px;text-align:center;font-size:20px;color:#666;line-height:60px;font-weight:400}#register .content .list[data-v-856b7f30]{width:100%;padding:0 15px;margin-bottom:27px}#register .content .list .border-item[data-v-856b7f30]{width:100%;padding:9px 0 9px 18px;background:#fff;margin-bottom:1px}#register .content .list .border-item i[data-v-856b7f30]{font-size:25px;color:#ff740d;line-height:34px;margin-right:12px}#register .content .list .border-item input[data-v-856b7f30]{border:0;outline:none;display:block;padding-left:0;height:34px;color:#111;vertical-align:middle;font-size:14px;line-height:34px}#register .content .list .border-item input[data-v-856b7f30]::-webkit-input-placeholder{color:#d2d2d2;font-size:15px}#register .content .list label[data-v-856b7f30]:nth-child(2){position:relative}#register .content .list label:nth-child(2) .get-code[data-v-856b7f30]{position:absolute;top:15px;width:100px;height:25px;right:5px;z-index:2;line-height:25px;text-align:center;border-left:1px solid #ddd;color:#ff740d;font-size:13px;background:#fff}#register .content .list label:nth-child(2) .get-code-gray[data-v-856b7f30]{border-left:1px solid #ddd;color:#cecece}#register .content .button[data-v-856b7f30]{width:100%;padding:0 15px}#register .content .button .login[data-v-856b7f30]{width:100%;height:40px;border:none;font-size:16px;color:#fff;border-radius:5px;background:#e62e36}#register .content .fu[data-v-856b7f30]{margin-top:22px;padding:0 15px;width:100%;height:20px}#register .content .fu .item[data-v-856b7f30]{display:block;width:50%;height:100%;color:#666;font-size:12px}#register .content .fu .item .my-choekbox[data-v-856b7f30]{position:relative;width:20px;height:20px;-webkit-appearance:none;outline:none}#register .content .fu .item .my-choekbox[data-v-856b7f30]:before{content:"";display:block;width:20px;height:20px;border:1px solid #ccc;border-radius:50%;background:#fff}#register .content .fu .item .my-choekbox[data-v-856b7f30]:after{content:"";position:absolute;top:26%;left:26%;display:block;width:14px;height:6px;border-left:1px solid #ff740d;border-bottom:1px solid #ff740d;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}#register .content .fu .item .my-choekbox[data-v-856b7f30]:checked:after{opacity:1}#register .content .fu a[data-v-856b7f30]{text-align:right}',""])},z9S9:function(t,e,i){"use strict";var o=i("wSez");i.n(o);e.a={data:function(){return{mobile:"",pw:"",code:"",agree:!0,cutdown:"获取验证码"}},methods:{getCode:function(){/^1[3|4|5|7|8]\d{9}$/.test(this.mobile)?o.Indicator.open():this.Util.myAlert("手机号码格式不正确")},register:function(){console.log("mobile:",this.mobile,"pw:",this.pw,"code:",this.code,"agree:",this.agree),/^1[3|4|5|7|8]\d{9}$/.test(this.mobile)?0===this.code.length?this.Util.myAlert("请输入验证码"):this.pw.length>16||this.pw.length<6?this.Util.myAlert("请输入6-16位密码"):this.agree||this.Util.myAlert("请同意用户协议"):this.Util.myAlert("手机号码格式不正确")}},created:function(){},mounted:function(){}}}});