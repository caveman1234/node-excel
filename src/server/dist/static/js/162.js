webpackJsonp([162],{jAWw:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("syAl"),n={name:"contrastConfigSrc",data:function(){return{url:s.a.get("otherSystemAddress")}},computed:{allURL:function(){return"http://"+this.url+"/eams/forward/eams/contrast/contrastConfigSrc.do"+"?empId="+this.$store.getters.UserNum+"&empNm="+encodeURIComponent(this.$store.getters.UserName)}}},a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{height:"100%"}},[t("iframe",{attrs:{src:this.allURL,frameborder:"0",width:"100%",height:"99%"}})])},staticRenderFns:[]},o=r("/Xao")(n,a,!1,null,null,null);t.default=o.exports}});