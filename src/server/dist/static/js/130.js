webpackJsonp([130],{K3CF:function(e,a,r){(e.exports=r("BkJT")(!1)).push([e.i,"\n.type-info-bottom {\n  margin-top: 10px;\n}\n.box {\n  margin-top: 20px;\n  text-align: right;\n}\n.headerClass {\n  background: #f7f7f7 !important;\n}\n.aui-date-editor.aui-input {\n  width: 100% !important;\n}\n.aui-card {\n  overflow: inherit;\n}\n",""])},NKuQ:function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=r("lC5x"),o=r.n(t),l=r("J0Oq"),n=r.n(l),i=r("syAl"),s=r("tzsN"),u=r("0oES"),c=r("AA3o"),m=r.n(c),y=function e(){m()(this,e),this.data={startTime:"",endTime:"",summarizeLevel:"",timeDurationType:"",unitRange:"",displayVar:"",orderDirection:""},this.TransServiceCode="AT_ATM_Trade_Trend"},d=r("A8CQ"),b=r("pADA"),h=r("0VOF"),p={name:"boot-rate-form-manage",components:{selectTree:s.a},data:function(){return{flagArr:[{value:"1",label:"本行取款笔数"},{value:"2",label:"他行取款笔数"},{value:"3",label:"本行存款笔数"},{value:"4",label:"他行存款笔数"},{value:"5",label:"本行转账笔数"},{value:"6",label:"他行转账笔数"},{value:"7",label:"本行取款金额"},{value:"8",label:"他行取款金额"},{value:"9",label:"本行存款金额"},{value:"10",label:"他行存款金额"},{value:"11",label:"本行转账金额"},{value:"12",label:"他行转账金额"},{value:"13",label:"总金额"},{value:"14",label:"总笔数"}],loading:!1,brno:[],tableData:[],tableTotal:0,currentPage:1,pageSize:i.a.get("PageSize"),queryForm:{branchId:"34060000",branchLevel:["2"],showType:["0"],title:"1",cycle:["1"],sTime:"",eTime:""},chartData3:{columns:["开始时间","金额/笔数"],rows:[{"开始时间":"20180101","金额/笔数":"1"}]},chartSettings3:{},chartExtend3:{series:{barGap:"-100%",barWidth:30},tooltip:{axisPointer:{type:"shadow"}}},grid:{}}},created:function(){this.initList()},mounted:function(){this.queryForm.sTime=b.a.getNowTime(0).substr(0,4),this.queryForm.eTime=b.a.getNowTime(0)},methods:{initList:function(){this.getBranchList()},getBranchList:function(){var e=this;this.loading=!0;var a=new h.a;a.data.branchLevel=this.queryForm.branchLevel.join(""),Object(u.a)(a).then(function(a){e.loading=!1,e.brno=a.RspInfo&&a.RspInfo.resultSet||[],e.queryForm.branchId=e.brno[1].branchNum}).catch(function(a){e.loading=!1,console.error("查询错误",a)})},formatter:function(e,a){console.log(e,a)},clearForm:function(e){this.$refs[""+e].resetFields()},queryModel:function(){var e=this;return n()(o.a.mark(function a(){var r,t,l,n,i;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e.loading=!0,(r=new y).data.summarizeLevel=e.queryForm.branchLevel.join(""),r.data.timeDurationType=e.queryForm.cycle.join(""),r.data.unitRange=[e.queryForm.branchId],r.data.displayVar=e.queryForm.title,r.data.orderDirection="0",r.data.startTime=e.queryForm.sTime+("5"==e.queryForm.cycle?"01":"4"==e.queryForm.cycle||"3"==e.queryForm.cycle||"2"==e.queryForm.cycle||"1"==e.queryForm.cycle?"0101":""),r.data.endTime=e.queryForm.sTime+("5"==e.queryForm.cycle?"31":"4"==e.queryForm.cycle||"3"==e.queryForm.cycle||"2"==e.queryForm.cycle||"1"==e.queryForm.cycle?"1231":""),a.next=11,Object(u.a)(r);case 11:if(t=a.sent,e.loading=!1,"000000"==t.SYS_HEAD.ReturnCode){for(i in console.log(t.RspInfo.resultSet),l=t.RspInfo.resultSet,n={},l)n=l[i];e.tableData=n["汇总数据"],e.chartData3.rows=n["汇总数据"]}else e.$aui.message.show({type:"warning",message:"请求失败，错误码:"+t.SYS_HEAD.ReturnCode+"，错误信息："+t.SYS_HEAD.ReturnMessage});case 14:case"end":return a.stop()}},a,e)}))()},getExcel:function(){var e=this;return n()(o.a.mark(function a(){var r,t;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e.loading=!0,(r=new d.a).data.branchNo=e.queryForm.branchId.join(","),r.data.startTime=e.queryForm.sTime,r.data.endTime=e.queryForm.eTime,a.next=7,Object(u.a)(r);case 7:t=a.sent,e.loading=!1,"000000"==t.SYS_HEAD.ReturnCode?e.downloadFile(t.RspInfo.fileName):e.$aui.message.show({type:"warning",message:"请求失败，错误码:"+t.SYS_HEAD.ReturnCode+"，错误信息："+t.SYS_HEAD.ReturnMessage});case 10:case"end":return a.stop()}},a,e)}))()},handleSizeChange:function(){this.queryModel()},handleCurrentChange:function(){this.queryModel()}},watch:{"queryForm.cycle":function(e){var a=b.a.getNowTime(0);this.queryForm.sTime=1==e||2==e||3==e||4==e?a.substr(0,4):5==e?a.substr(0,6):""},"queryForm.branchLevel":function(){this.getBranchList()}}},f={render:function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"boot-rate-form-manage",attrs:{"element-loading-text":"加载中。。。"}},[r("div",[r("aui-card",{staticClass:"type-info-box-card"},[r("aui-form",{ref:"queryForm",attrs:{model:e.queryForm,size:"mini","label-position":"top"}},[r("aui-row",{attrs:{gutter:10}},[r("aui-col",{attrs:{md:6,lg:4}},[r("aui-form-item",{staticClass:"typeInfo-aui-form-item",attrs:{label:"机构层级",prop:"branchLevel"}},[r("aui-cascader",{attrs:{name:"",options:[{value:"2",label:"分行"},{value:"3",label:"支行"},{value:"4",label:"网点"}]},model:{value:e.queryForm.branchLevel,callback:function(a){e.$set(e.queryForm,"branchLevel",a)},expression:"queryForm.branchLevel"}})],1)],1),e._v(" "),r("aui-col",{attrs:{lg:4,md:6}},[r("aui-form-item",{attrs:{label:"机构编号 必输 根据选择层级",prop:"branchId"}},[r("aui-select",{attrs:{filterable:"",placeholder:"请选择所属机构号"},model:{value:e.queryForm.branchId,callback:function(a){e.$set(e.queryForm,"branchId",a)},expression:"queryForm.branchId"}},e._l(e.brno,function(e){return r("aui-option",{key:e.branchNum,attrs:{label:e.branchNum+"-"+e.branchName,value:e.branchNum}})}))],1)],1),e._v(" "),r("aui-col",{attrs:{md:6,lg:4}},[r("aui-form-item",{staticClass:"typeInfo-aui-form-item",attrs:{label:"显示变量",prop:"title"}},[r("aui-select",{attrs:{placeholder:"请选择"},model:{value:e.queryForm.title,callback:function(a){e.$set(e.queryForm,"title",a)},expression:"queryForm.title"}},e._l(e.flagArr,function(e){return r("aui-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),r("aui-col",{attrs:{md:6,lg:4}},[r("aui-form-item",{staticClass:"typeInfo-aui-form-item",attrs:{label:"时间分割周期",prop:"cycle"}},[r("aui-cascader",{attrs:{name:"",options:[{value:"1",label:"年"},{value:"2",label:"半年"},{value:"3",label:"季度"},{value:"4",label:"月"},{value:"5",label:"日"}]},model:{value:e.queryForm.cycle,callback:function(a){e.$set(e.queryForm,"cycle",a)},expression:"queryForm.cycle"}})],1)],1),e._v(" "),r("aui-col",{attrs:{md:6,lg:4}},[r("aui-form-item",{staticClass:"typeInfo-aui-form-item",attrs:{label:"选择日期",prop:"sTime"}},[r("aui-date-picker",{attrs:{"value-format":"5"==e.queryForm.cycle?"yyyyMM":"4"==e.queryForm.cycle||"3"==e.queryForm.cycle||"2"==e.queryForm.cycle||"1"==e.queryForm.cycle?"yyyy":"",type:"5"==e.queryForm.cycle?"month":"4"==e.queryForm.cycle||"3"==e.queryForm.cycle||"2"==e.queryForm.cycle||"1"==e.queryForm.cycle?"year":"",placeholder:"选择日期"},model:{value:e.queryForm.sTime,callback:function(a){e.$set(e.queryForm,"sTime",a)},expression:"queryForm.sTime"}})],1)],1),e._v(" "),r("aui-col",{staticClass:"searchBtnMarginTop",attrs:{md:3,lg:2}},[r("aui-button",{attrs:{type:"primary",size:"mini",icon:"aui-icon-search"},on:{click:e.queryModel}},[e._v("查询")])],1),e._v(" "),r("aui-col",{staticClass:"searchBtnMarginTop",attrs:{md:3,lg:2}},[r("aui-button",{attrs:{type:"warning",size:"mini",icon:"aui-icon-refresh"},on:{click:function(a){e.clearForm("queryForm")}}},[e._v("重置")])],1)],1)],1)],1),e._v(" "),r("aui-card",{staticClass:"type-info-bottom"},[r("ve-histogram",{attrs:{data:e.chartData3,settings:e.chartSettings3,extend:e.chartExtend3,grid:e.grid}}),e._v(" "),r("aui-table",{ref:"tableData",staticClass:"tableMarginTop",attrs:{data:e.tableData,"header-row-class-name":"tableHeaderClass",border:""}},[r("aui-table-column",{attrs:{prop:"开始时间",label:"开始时间"}}),e._v(" "),r("aui-table-column",{attrs:{prop:"金额/笔数",label:"金额/笔数"}})],1)],1)],1)])},staticRenderFns:[]};var v=r("/Xao")(p,f,!1,function(e){r("RMhs")},null,null);a.default=v.exports},RMhs:function(e,a,r){var t=r("K3CF");"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);r("8bSs")("fea9df12",t,!0)}});