webpackJsonp([122],{"5jNb":function(e,a,t){var r=t("GRrA");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t("8bSs")("64f085f3",r,!0)},GRrA:function(e,a,t){(e.exports=t("BkJT")(!1)).push([e.i,"\n.type-info-bottom {\n  margin-top: 10px;\n}\n.box {\n  margin-top: 20px;\n  text-align: right;\n}\n.headerClass {\n  background: #f7f7f7 !important;\n}\n.aui-date-editor.aui-input {\n  width: 100% !important;\n}\n.aui-card {\n  overflow: inherit;\n}\n",""])},OGJc:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=t("lC5x"),n=t.n(r),i=t("J0Oq"),o=t.n(i),s=t("syAl"),l=t("tzsN"),u=t("0oES"),m=t("AA3o"),c=t.n(m),d=function e(){c()(this,e),this.data={startTime:"20180101",endTime:"20181231",devType:"",brandId:"",devNum:""},this.TransServiceCode="AT_ATM_Trade_Lack"},p=t("A8CQ"),f=t("pADA"),b=t("0VOF"),y=t("n6OB"),v=t("mydf"),g=(t("1qf8"),{name:"boot-rate-form-manage",components:{selectTree:l.a},data:function(){return{loading:!1,deviceTypeSpinner:[],brno:[],brandSpinner:[],tableData:[],tableTotal:0,currentPage:1,pageSize:s.a.get("PageSize"),queryForm:{branchId:"34060000",terminalNum:"",devBrand:[],devType:"atm",sTime:"",eTime:""}}},created:function(){this.initList()},mounted:function(){this.queryForm.sTime=f.a.getNowTime(90),this.queryForm.eTime=f.a.getNowTime(0)},methods:{initList:function(){var e=this;this.getBranchList();var a=new y.a;Object(u.a)(a).then(function(a){e.deviceTypeSpinner=a.RspInfo.Result||[],e.deviceTypeSpinner.unshift({DataKeyVal:"",Meaning:""})}).catch(function(e){console.error("查询错误",e)});var t=new v.a;t.data.BrandName=void 0,t.data.BrandShortName=void 0,t.QueryPageNo=1,t.QueryRowNum=99999,Object(u.a)(t).then(function(a){e.brandSpinner=a.RspInfo.brandinfolist||[],e.brandSpinner.unshift({brandId:"",brandName:""})}).catch(function(e){console.error("查询错误",e)})},getBranchList:function(){var e=this;this.loading=!0;var a=new b.a;a.data.branchLevel="2",Object(u.a)(a).then(function(a){e.loading=!1,e.brno=a.RspInfo&&a.RspInfo.resultSet||[],e.queryForm.branchId=e.brno[1].branchNum}).catch(function(a){e.loading=!1,console.error("查询错误",a)})},clearForm:function(e){this.$refs[""+e].resetFields()},queryModel:function(){var e=this;return o()(n.a.mark(function a(){var t,r;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e.loading=!0,(t=new d).data.brandId=e.queryForm.devBrand[0]?e.queryForm.devBrand.join(""):"",t.data.devType=e.queryForm.devType,t.data.devNum=e.queryForm.terminalNum,t.data.startTime=e.queryForm.sTime,t.data.endTime=e.queryForm.eTime,a.next=9,Object(u.a)(t);case 9:r=a.sent,e.loading=!1,console.log(r),"000000"==r.SYS_HEAD.ReturnCode?(e.tableData=r.RspInfo.resultSet,console.log(e.tableData)):e.$aui.message.show({type:"warning",message:"请求失败，错误码:"+r.SYS_HEAD.ReturnCode+"，错误信息："+r.SYS_HEAD.ReturnMessage});case 13:case"end":return a.stop()}},a,e)}))()},getExcel:function(){var e=this;return o()(n.a.mark(function a(){var t,r;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e.loading=!0,(t=new p.a).data.branchNo=e.queryForm.branchId.join(","),t.data.startTime=e.queryForm.sTime,t.data.endTime=e.queryForm.eTime,a.next=7,Object(u.a)(t);case 7:r=a.sent,e.loading=!1,"000000"==r.SYS_HEAD.ReturnCode?e.downloadFile(r.RspInfo.fileName):e.$aui.message.show({type:"warning",message:"请求失败，错误码:"+r.SYS_HEAD.ReturnCode+"，错误信息："+r.SYS_HEAD.ReturnMessage});case 10:case"end":return a.stop()}},a,e)}))()},handleSizeChange:function(){this.queryModel()},handleCurrentChange:function(){this.queryModel()}}}),h={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"out-of-paper-cash-form-manage",attrs:{"element-loading-text":"加载中。。。"}},[t("div",[t("aui-card",{staticClass:"type-info-box-card"},[t("aui-form",{ref:"queryForm",attrs:{model:e.queryForm,size:"mini","label-position":"top"}},[t("aui-row",{attrs:{gutter:10}},[t("aui-col",{attrs:{md:6,lg:4}},[t("aui-form-item",{staticClass:"typeInfo-aui-form-item",attrs:{label:"设备品牌",prop:"devBrand"}},[t("aui-cascader",{attrs:{name:"",options:e.brandSpinner,props:{value:"brandId",label:"brandName"}},model:{value:e.queryForm.devBrand,callback:function(a){e.$set(e.queryForm,"devBrand",a)},expression:"queryForm.devBrand"}})],1)],1),e._v(" "),t("aui-col",{attrs:{lg:4,md:6}},[t("aui-form-item",{staticClass:"typeInfo-aui-form-item",attrs:{label:"设备类型",prop:"devType"}},[t("aui-select",{attrs:{placeholder:"请选择设备类型"},model:{value:e.queryForm.devType,callback:function(a){e.$set(e.queryForm,"devType",a)},expression:"queryForm.devType"}},e._l(e.deviceTypeSpinner,function(e){return t("aui-option",{key:e.DataKeyVal,attrs:{label:e.DataKeyVal+"-"+e.Meaning,value:e.DataKeyVal,disabled:e.disabled}})}))],1)],1),e._v(" "),t("aui-col",{attrs:{md:6,lg:4}},[t("aui-form-item",{staticClass:"typeInfo-aui-form-item",attrs:{label:"终端编号",prop:"terminalNum"}},[t("aui-input",{model:{value:e.queryForm.terminalNum,callback:function(a){e.$set(e.queryForm,"terminalNum",a)},expression:"queryForm.terminalNum"}})],1)],1),e._v(" "),t("aui-col",{attrs:{md:6,lg:4}},[t("aui-form-item",{staticClass:"typeInfo-aui-form-item",attrs:{label:"开始日期",prop:"sTime"}},[t("aui-date-picker",{attrs:{"value-format":"yyyyMMdd",type:"date",placeholder:"选择日期"},model:{value:e.queryForm.sTime,callback:function(a){e.$set(e.queryForm,"sTime",a)},expression:"queryForm.sTime"}})],1)],1),e._v(" "),t("aui-col",{attrs:{md:6,lg:4}},[t("aui-form-item",{staticClass:"typeInfo-aui-form-item",attrs:{label:"结束日期",prop:"eTime"}},[t("aui-date-picker",{attrs:{"value-format":"yyyyMMdd",type:"date",placeholder:"选择日期"},model:{value:e.queryForm.eTime,callback:function(a){e.$set(e.queryForm,"eTime",a)},expression:"queryForm.eTime"}})],1)],1),e._v(" "),t("aui-col",{staticClass:"searchBtnMarginTop",attrs:{md:3,lg:2}},[t("aui-button",{attrs:{type:"primary",size:"mini",icon:"aui-icon-search"},on:{click:e.queryModel}},[e._v("查询")])],1),e._v(" "),t("aui-col",{staticClass:"searchBtnMarginTop",attrs:{md:3,lg:2}},[t("aui-button",{attrs:{type:"warning",size:"mini",icon:"aui-icon-refresh"},on:{click:function(a){e.clearForm("queryForm")}}},[e._v("重置")])],1)],1)],1)],1),e._v(" "),t("aui-card",{staticClass:"type-info-bottom"},[t("aui-table",{ref:"tableData",staticClass:"tableMarginTop",attrs:{data:e.tableData,"header-row-class-name":"tableHeaderClass",border:""}},[t("aui-table-column",{attrs:{prop:"分行名称",label:"分行名称"}}),e._v(" "),t("aui-table-column",{attrs:{prop:"支行名称",label:"支行名称"}}),e._v(" "),t("aui-table-column",{attrs:{prop:"网点名称",label:"网点名称"}}),e._v(" "),t("aui-table-column",{attrs:{prop:"设备号",label:"设备编号"}}),e._v(" "),t("aui-table-column",{attrs:{prop:"安装地址",label:"安装地址"}}),e._v(" "),t("aui-table-column",{attrs:{prop:"设备品牌",label:"设备品牌"}}),e._v(" "),t("aui-table-column",{attrs:{prop:"设备类型",label:"设备类型"}}),e._v(" "),t("aui-table-column",{attrs:{prop:"缺钞次数",label:"缺钞次数"}}),e._v(" "),t("aui-table-column",{attrs:{prop:"凭条打印机缺纸次数",label:"凭条打印机缺纸次数"}}),e._v(" "),t("aui-table-column",{attrs:{prop:"日志打印机缺纸次数",label:"日志打印机缺纸次数"}})],1)],1)],1)])},staticRenderFns:[]};var T=t("/Xao")(g,h,!1,function(e){t("5jNb")},null,null);a.default=T.exports}});