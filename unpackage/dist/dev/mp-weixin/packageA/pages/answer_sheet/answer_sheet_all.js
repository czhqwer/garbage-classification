(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["packageA/pages/answer_sheet/answer_sheet_all"],{90:function(n,e,t){"use strict";(function(n){var e=t(3);t(25);e(t(24));var r=e(t(91));wx.__webpack_require_UNI_MP_PLUGIN__=t,n(r.default)}).call(this,t(1)["createPage"])},91:function(n,e,t){"use strict";t.r(e);var r=t(92),u=t(94);for(var a in u)["default"].indexOf(a)<0&&function(n){t.d(e,n,(function(){return u[n]}))}(a);t(96);var o,i=t(34),c=Object(i["default"])(u["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],o);c.options.__file="packageA/pages/answer_sheet/answer_sheet_all.vue",e["default"]=c.exports},92:function(n,e,t){"use strict";t.r(e);var r=t(93);t.d(e,"render",(function(){return r["render"]})),t.d(e,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(e,"components",(function(){return r["components"]}))},93:function(n,e,t){"use strict";var r;t.r(e),t.d(e,"render",(function(){return u})),t.d(e,"staticRenderFns",(function(){return o})),t.d(e,"recyclableRender",(function(){return a})),t.d(e,"components",(function(){return r}));try{r={uniSection:function(){return t.e("uni_modules/uni-section/components/uni-section/uni-section").then(t.bind(null,155))},uniRate:function(){return t.e("uni_modules/uni-rate/components/uni-rate/uni-rate").then(t.bind(null,190))},uniCard:function(){return t.e("uni_modules/uni-card/components/uni-card/uni-card").then(t.bind(null,162))},uniDataCheckbox:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox")]).then(t.bind(null,197))}}}catch(i){if(-1===i.message.indexOf("Cannot find module")||-1===i.message.indexOf(".vue"))throw i;console.error(i.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var u=function(){var n=this,e=n.$createElement,t=(n._self._c,n.countStart()),r=n.__map(n.questionData,(function(e,t){var r=n.__get_orig(e),u=n.getChoose(e.rightAnswer);return{$orig:r,m1:u}}));n.$mp.data=Object.assign({},{$root:{m0:t,l0:r}})},a=!1,o=[];u._withStripped=!0},94:function(n,e,t){"use strict";t.r(e);var r=t(95),u=t.n(r);for(var a in r)["default"].indexOf(a)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(a);e["default"]=u.a},95:function(n,e,t){"use strict";(function(n){var r=t(3);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=r(t(29)),a=r(t(31)),o={data:function(){return{questionData:[]}},onLoad:function(n){this.getAnswer(n.examId)},methods:{getAnswer:function(n){var e=this;return(0,a.default)(u.default.mark((function t(){var r;return u.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$myRequest({url:"/user/getAnswerByExamId?examId="+n});case 2:r=t.sent,e.questionData=r.data.data;case 4:case"end":return t.stop()}}),t)})))()},countStart:function(){for(var n=0,e=0;e<this.questionData.length;e++)this.questionData[e].rightAnswer==this.questionData[e].userAnswer&&n++;return n},getChoose:function(n){switch(n){case 0:return"A";case 1:return"B";case 2:return"C";case 3:return"D"}},clickReturn:function(){n.navigateBack({url:"/pages/study/study"})}}};e.default=o}).call(this,t(1)["default"])},96:function(n,e,t){"use strict";t.r(e);var r=t(97),u=t.n(r);for(var a in r)["default"].indexOf(a)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(a);e["default"]=u.a},97:function(n,e,t){}},[[90,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/packageA/pages/answer_sheet/answer_sheet_all.js.map