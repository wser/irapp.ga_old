webpackJsonp([5],{"4Jzr":function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,".player[data-v-2916207a]{text-align:center;margin-top:100px;font-family:sans-serif}",""])},"7nir":function(t,e,r){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"player"},[e("h1",[this._v("#"+this._s(this.number))]),e("h2",[this._v(this._s(this.name))])])};n._withStripped=!0;var a={render:n,staticRenderFns:[]};e.a=a},"9VH/":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("sU3F"),a=r("7nir"),s=!1;var i=function(t){s||r("arE2")},u=r("VU/8")(n.a,a.a,!1,i,"data-v-2916207a",null);u.options.__file="pages\\index\\_id.vue",e.default=u.exports},arE2:function(t,e,r){var n=r("4Jzr");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r("rjj0")("7134dc09",n,!1,{sourceMap:!1})},sU3F:function(t,e,r){"use strict";e.a={validate:function(t){var e=t.params;return!isNaN(+e.id)},asyncData:function(t){var e=t.params,r=t.env,n=t.error,a=r.users.find(function(t){return String(t.id)===e.id});return a||n({message:"User not found",statusCode:404})},head:function(){return{title:this.name}}}}});