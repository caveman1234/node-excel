webpackJsonp([119],{"/+vL":function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,"\n.type-info-bottom {\n  margin-top: 10px;\n}\n.box {\n  margin-top: 20px;\n  text-align: right;\n}\n.headerClass {\n  background: #f7f7f7 !important;\n}\n.aui-date-editor.aui-input {\n  width: 100% !important;\n}\n.aui-card {\n  overflow: inherit;\n}\n",""])},"7ZRi":function(e,t,a){var r=a("/+vL");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("8bSs")("5543d1e8",r,!0)},kM14:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("lC5x"),o=a.n(r),n=a("J0Oq"),i=a.n(n),s=a("syAl"),l=a("0oES"),u=a("0VOF"),p=a("AA3o"),m=a.n(p),c=function e(){m()(this,e),this.data={BusiOper:"ACE"},this.BusiDataKey="ACE001",this.TransServiceCode="ib-dbcomm/dbComm"},d=a("pADA"),b={components:{selectTree:a("tzsN").a},data:function(){return{level:{1:"1-汇总类",2:"2-自营业数据类"},RptTp:{0:"0-日报",1:"1-月报",2:"2-季报",3:"3-年报"},list1:[],filename:"按客户满意度统计导出",bookType:"xlsx",autoWidth:!0,brnoMap:{},loading:!1,brnoList:[],tableData:[],tableTotal:0,currentPage:1,pageSize:s.a.get("PageSize"),queryForm:{branchId:[],sTime:"",eTime:"",publicType:[],devType:[],title:[]},reportType:[{value:"0",label:"日报"},{value:"1",label:"月报"},{value:"2",label:"季报"},{value:"3",label:"年报"}]}},mounted:function(){this.queryForm.sTime=d.a.getNowTime(29),this.queryForm.eTime=d.a.getNowTime(0),this.queryForm.reportType=this.reportType[0].value,this.initBrno()},methods:{handleDownload:function(){var e=this;a.e(169).then(a.bind(null,"FNRk")).then(function(t){var a=e.list1,r=e.formatJson(["Brno","RptLvl","RptDate","RptTp","TotalCallNum","TotalServNum","TotalAssessNum","VerySatyNum","SatyNum","UnSatyNum","NotAssessNum","NotInitAssessNum","AbanNum","AssessRate","NotInitAssessRate","NotAssessRate","VerySatyRate","SatyRate","UnSatyRate","ServScor","AbanRate"],a);t.export_json_to_excel({header:["机构名称","报表级别","报表日期","报表类型","总叫号数","总服务人数","总评价数","非常满意数","满意数","不满意数","未评价数","未发起评价数","弃号数","评价率","未发起评价率","未评价率","非常满意率","满意率","不满意率","服务分数","弃号率"],data:r,filename:e.filename,autoWidth:e.autoWidth,bookType:e.bookType})})},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return"timestamp"===e?parseTime(t[e]):t[e]})})},dataFormat:function(e,t){return"Brno"==t.property?e[t.property]+"-"+this.brnoMap[e[t.property]]:"RptLvl"==t.property?this.level[e[t.property]]:"RptTp"==t.property?this.RptTp[e[t.property]]:void 0},dateChange:function(){this.queryForm.sTime>this.queryForm.eTime&&(this.$aui.message.show({type:"warning",message:"开始日期不能大于结束日期"}),this.queryForm.sTime=d.a.getNowTime(29),this.queryForm.eTime=d.a.getNowTime(0))},initBrno:function(){var e=this;this.loading=!0;var t=new u.a;t.data.orgno=this.$store.getters.BranchNum,Object(l.a)(t).then(function(t){e.loading=!1,e.brnoList=t.RspInfo.Result||[],e.brnoMap=t.RspInfo.orgMap||{},e.brnoList=d.a.formatTreeData(e.brnoList,"orgno","superno"),e.queryForm.branchId.push(e.brnoList[0].orgno)}).catch(function(t){e.loading=!1,console.error("错误信息",t)})},clearForm:function(e){this.$refs[""+e].resetFields()},queryModel:function(){var e=this;return i()(o.a.mark(function t(){var a,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,(a=new c).data.Brno=e.queryForm.branchId[0],a.data.StartDate=e.queryForm.sTime,a.data.EndDate=e.queryForm.eTime,a.data.RptTp=e.queryForm.reportType,a.data.BusiOper="ACE",a.data.CurtPage=e.currentPage+"",a.data.PageSize=e.pageSize+"",a.data.StartRows=(e.currentPage-1)*e.pageSize+"",t.next=12,Object(l.a)(a);case 12:r=t.sent;try{e.loading=!1,"000000"===r.SYS_HEAD.ReturnCode?(e.tableData=r.RspInfo.data,e.tableTotal=r.RspInfo.TotalRcrdNum):e.$aui.message.show({type:"warning",message:"请求失败，错误码:"+r.SYS_HEAD.ReturnCode+"，错误信息："+r.SYS_HEAD.ReturnMessage})}catch(t){e.loading=!1,console.error(t)}case 14:case"end":return t.stop()}},t,e)}))()},getExcel:function(){var e=this;return i()(o.a.mark(function t(){var a,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,(a=new c).data.Brno=e.queryForm.branchId[0],a.data.StartDate=e.queryForm.sTime,a.data.EndDate=e.queryForm.eTime,a.data.RptTp=e.queryForm.reportType,a.data.BusiOper="ACE",a.data.CurtPage="1",a.data.PageSize="5000000",a.data.StartRows="",t.next=12,Object(l.a)(a);case 12:r=t.sent,e.loading=!1,"000000"==r.SYS_HEAD.ReturnCode?(e.list1=r.RspInfo.data||[],e.handleDownload()):e.$aui.message.show({type:"warning",message:"请求失败，错误码:"+r.SYS_HEAD.ReturnCode+"，错误信息："+r.SYS_HEAD.ReturnMessage});case 15:case"end":return t.stop()}},t,e)}))()},handleSizeChange:function(e){this.pageSize=e,this.queryModel()},handleCurrentChange:function(e){this.currentPage=e,this.queryModel()}}},y={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"customer-buss-form-manage",attrs:{"element-loading-text":"加载中。。。"}},[a("div",[a("aui-card",{staticClass:"type-info-box-card"},[a("aui-form",{ref:"queryForm",attrs:{model:e.queryForm,size:"mini","label-position":"top"}},[a("aui-row",{attrs:{gutter:10}},[a("aui-col",{attrs:{md:6,lg:4}},[a("aui-form-item",{staticClass:"typeInfo-aui-form-item",attrs:{label:"机构编号",prop:"branchId"}},[a("select-tree",{staticStyle:{width:"170px"},attrs:{"single-check":!0,props:{id:"orgno",label:"cname",children:"children"},"tree-data":e.brnoList,placeholder:"请选择机构"},model:{value:e.queryForm.branchId,callback:function(t){e.$set(e.queryForm,"branchId",t)},expression:"queryForm.branchId"}})],1)],1),e._v(" "),a("aui-col",{attrs:{md:6,lg:4}},[a("aui-form-item",{staticClass:"typeInfo-aui-form-item",attrs:{label:"开始日期",prop:"sTime"}},[a("aui-date-picker",{attrs:{"value-format":"yyyyMMdd",type:"date",placeholder:"选择日期"},on:{change:e.dateChange},model:{value:e.queryForm.sTime,callback:function(t){e.$set(e.queryForm,"sTime",t)},expression:"queryForm.sTime"}})],1)],1),e._v(" "),a("aui-col",{attrs:{md:6,lg:4}},[a("aui-form-item",{staticClass:"typeInfo-aui-form-item",attrs:{label:"结束日期",prop:"eTime"}},[a("aui-date-picker",{attrs:{"value-format":"yyyyMMdd",type:"date",placeholder:"选择日期"},on:{change:e.dateChange},model:{value:e.queryForm.eTime,callback:function(t){e.$set(e.queryForm,"eTime",t)},expression:"queryForm.eTime"}})],1)],1),e._v(" "),a("aui-col",{attrs:{md:6,lg:4}},[a("aui-form-item",{staticClass:"typeInfo-aui-form-item",attrs:{label:"报表类型",prop:"reportType"}},[a("aui-select",{attrs:{filterable:""},model:{value:e.queryForm.reportType,callback:function(t){e.$set(e.queryForm,"reportType",t)},expression:"queryForm.reportType"}},e._l(e.reportType,function(e){return a("aui-option",{key:e.value,attrs:{label:e.value+"-"+e.label,value:e.value}})}))],1)],1),e._v(" "),a("aui-col",{staticClass:"searchBtnMarginTop",attrs:{md:3,lg:2}},[a("aui-button",{attrs:{type:"primary",size:"mini",icon:"aui-icon-search"},on:{click:e.queryModel}},[e._v("查询")])],1),e._v(" "),a("aui-col",{staticClass:"searchBtnMarginTop",attrs:{md:3,lg:2}},[e.btnPermission("Button_RunRateRep_Export")?a("aui-button",{staticClass:"b-button",attrs:{type:"primary",size:"mini",icon:"aui-icon-download"},on:{click:e.getExcel}},[e._v("导出")]):e._e()],1)],1)],1)],1),e._v(" "),a("aui-card",{staticClass:"type-info-bottom"},[a("aui-table",{ref:"tableData",staticClass:"tableMarginTop",attrs:{data:e.tableData,"header-row-class-name":"tableHeaderClass",border:""}},[a("aui-table-column",{attrs:{prop:"Brno",formatter:e.dataFormat,label:"机构名称"}}),e._v(" "),a("aui-table-column",{attrs:{prop:"RptLvl",formatter:e.dataFormat,label:"报表级别"}}),e._v(" "),a("aui-table-column",{attrs:{prop:"RptDate",label:"报表日期"}}),e._v(" "),a("aui-table-column",{attrs:{prop:"RptTp",formatter:e.dataFormat,label:"报表类型"}}),e._v(" "),a("aui-table-column",{attrs:{prop:"TotalCallNum",label:"总叫号数"}}),e._v(" "),a("aui-table-column",{attrs:{prop:"TotalServNum",label:"总服务人数"}}),e._v(" "),a("aui-table-column",{attrs:{prop:"TotalAssessNum",label:"总评价数"}}),e._v(" "),a("aui-table-column",{attrs:{prop:"VerySatyNum",label:"非常满意数"}}),e._v(" "),a("aui-table-column",{attrs:{prop:"SatyNum",label:"满意数"}}),e._v(" "),a("aui-table-column",{attrs:{prop:"UnSatyNum",label:"不满意数"}}),e._v(" "),a("aui-table-column",{attrs:{prop:"NotAssessNum",label:"未评价数"}}),e._v(" "),a("aui-table-column",{attrs:{prop:"NotInitAssessNum",label:"未发起评价数"}}),e._v(" "),a("aui-table-column",{attrs:{prop:"AbanNum",label:"弃号数"}}),e._v(" "),a("aui-table-column",{attrs:{prop:"AssessRate",label:"评价率"}}),e._v(" "),a("aui-table-column",{attrs:{prop:"NotInitAssessRate",label:"未发起评价率"}}),e._v(" "),a("aui-table-column",{attrs:{prop:"NotAssessRate",label:"未评价率"}}),e._v(" "),a("aui-table-column",{attrs:{prop:"VerySatyRate",label:"非常满意率"}}),e._v(" "),a("aui-table-column",{attrs:{prop:"SatyRate",label:"满意率"}}),e._v(" "),a("aui-table-column",{attrs:{prop:"UnSatyRate",label:"不满意率"}}),e._v(" "),a("aui-table-column",{attrs:{prop:"ServScor",label:"服务分数"}}),e._v(" "),a("aui-table-column",{attrs:{prop:"AbanRate",label:"弃号率"}})],1),e._v(" "),a("div",{staticClass:"box"},[a("aui-pagination",{attrs:{background:"","current-page":e.currentPage,"page-size":e.pageSize,layout:"total, prev, pager, next, jumper",total:e.tableTotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}})],1)],1)],1)])},staticRenderFns:[]};var g=a("/Xao")(b,y,!1,function(e){a("7ZRi")},null,null);t.default=g.exports}});