webpackJsonp([101],{HqBN:function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,"\n.type-info-bottom {\n  margin-top: 10px;\n}\n.box {\n  margin-top: 20px;\n  text-align: right;\n}\n.aui-date-editor.aui-input {\n  width: 100% !important;\n}\n.aui-card {\n  overflow: inherit;\n}\n",""])},TEnt:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("lC5x"),i=a.n(r),o=a("J0Oq"),n=a.n(o),s=a("syAl"),u=a("0oES"),l=a("0VOF"),c=a("pADA"),m=a("tzsN"),d=a("n6OB"),p=a("AA3o"),g=a.n(p),h=function e(){g()(this,e),this.data={OrgNo:"",EquipType:"",StartDate:"",EndDate:"",Page:"",PageNum:""},this.CommCode="IBDeviceInfoManage",this.SceneCode="ClearMachInfoQuey",this.TransServiceCode="mg-afaservices-rpt/cleanMachineInfo"},y={components:{selectTree:m.a},data:function(){return{loading:!1,brno:[],list1:[],deviceTypeList:[],filename:"清机情况信息查询导出",bookType:"xlsx",autoWidth:!0,brnoList:[],tableData:[],brnoMap:{},tableTotal:void 0,currentPage:1,pageSize:s.a.get("PageSize"),queryForm:{branchId:[],sTime:"",eTime:"",devType:void 0},devType:[],rules:{branchId:[{required:!0,message:"请选择机构",trigger:"change"}],sTime:[{required:!0,message:"请输入开始时间",trigger:"change"}],eTime:[{required:!0,message:"请输入结束时间",trigger:"change"}]},pickerOptionsStart:{disabledDate:function(e){(new Date).getTime();return e.getTime()>Date.now()}}}},mounted:function(){this.queryForm.sTime=c.a.getNowTime(29),this.queryForm.eTime=c.a.getNowTime(0),this.initBrno(),this.initDevType()},watch:{queryForm:{handler:function(e,t){this.currentPage=1},deep:!0}},methods:{initDevType:function(){var e=this,t=new d.a;Object(u.a)(t).then(function(t){e.deviceTypeList=t.RspInfo.Result||[]}).catch(function(e){console.error("查询错误",e)})},handleDownload:function(){var e=this;a.e(169).then(a.bind(null,"FNRk")).then(function(t){var a=e.list1,r=e.formatJson(["OrgNo","EquipNo","EquipType","ClearCardNum","ClearUkeyNum","AddCardNum","AddUkeyNum"],a);t.export_json_to_excel({header:["机构名称","设备编号","设备类型","清机次数","清盾次数","加卡数量","加盾数量"],data:r,filename:e.filename,autoWidth:e.autoWidth,bookType:e.bookType})})},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return"timestamp"===e?parseTime(t[e]):t[e]})})},dataFormat:function(e,t){if("OrgNo"==t.property&&e[t.property])return e[t.property]+"-"+this.brnoMap[e[t.property]]},dataFormat1:function(e,t){for(var a=0;a<this.deviceTypeList.length;a++)if(this.deviceTypeList[a].DataKeyVal==e[t.property])return this.deviceTypeList[a].DataKeyVal+"-"+this.deviceTypeList[a].Meaning},dateChange:function(){this.queryForm.sTime>this.queryForm.eTime?(this.$aui.message.show({type:"warning",message:"开始日期不能大于结束日期"}),this.queryForm.sTime=c.a.getNowTime(29),this.queryForm.eTime=c.a.getNowTime(0)):this.queryForm.sTime<c.a.getNowTime(365)&&(this.$aui.message.show({type:"warning",message:"开始日期不能超过当日前12个月"}),this.queryForm.sTime=c.a.getNowTime(365))},initBrno:function(){var e=this;this.loading=!0;var t=new l.a;t.data.orgno=this.$store.getters.BranchNum,Object(u.a)(t).then(function(t){e.loading=!1,e.brnoList=t.RspInfo.Result||[],e.brnoMap=t.RspInfo.orgMap||{},e.brnoList=c.a.formatTreeData(e.brnoList,"orgno","superno"),e.queryForm.branchId.push(e.brnoList[0].orgno)}).catch(function(t){e.loading=!1,console.error("错误信息",t)})},clearForm:function(e){this.$refs[""+e].clearValidate(),this.$refs[""+e].resetFields(),this.queryForm.sTime=c.a.getNowTime(29),this.queryForm.eTime=c.a.getNowTime(0),this.queryForm.branchId.push(this.brnoList[0].orgno)},queryModel:function(){var e=this;this.$refs.queryForm.validate(function(t){if(t){e.loading=!0;var a=new h;a.data.OrgNo=e.queryForm.branchId[0],a.data.EquipType=e.queryForm.devType,a.data.StartDate=e.queryForm.sTime,a.data.EndDate=e.queryForm.eTime,a.data.Page=e.currentPage,a.data.PageNum=e.pageSize,Object(u.a)(a).then(function(t){e.loading=!1,console.log("---------------------",t),e.tableData=t.RspInfo.Result||[],e.tableTotal=t.RspInfo.TotalRcdCount||0,"0"==e.tableTotal&&e.$aui.message.show({type:"warning",message:"无满足条件的记录"})}).catch(function(t){e.loading=!1,e.tableData=[],e.tableTotal=0,e.$aui.message.show({type:"error",message:"请求失败，错误码:"+response.SYS_HEAD.ReturnCode+"，错误信息："+response.SYS_HEAD.ReturnMessage})})}})},getExcel:function(){var e=this;return n()(i.a.mark(function t(){var a,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,(a=new h).data.OrgNo=e.queryForm.branchId[0],a.data.EquipType=e.queryForm.devType,a.data.StartDate=e.queryForm.sTime,a.data.EndDate=e.queryForm.eTime,a.data.Page="1",a.data.PageNum="5000000",t.next=10,Object(u.a)(a);case 10:r=t.sent,e.loading=!1,"000000"==r.SYS_HEAD.ReturnCode?(e.list1=r.RspInfo.Result||[],e.handleDownload()):e.$aui.message.show({type:"error",message:"请求失败，错误码:"+r.SYS_HEAD.ReturnCode+"，错误信息："+r.SYS_HEAD.ReturnMessage});case 13:case"end":return t.stop()}},t,e)}))()},handleSizeChange:function(e){this.pageSize=e,this.queryModel()},handleCurrentChange:function(e){this.currentPage=e,this.queryModel()}}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"customer-buss-form-manage",attrs:{"element-loading-text":"加载中。。。"}},[a("div",[a("aui-card",{staticClass:"type-info-box-card"},[a("aui-form",{ref:"queryForm",attrs:{model:e.queryForm,rules:e.rules,size:"mini","label-position":"top"}},[a("aui-row",{attrs:{gutter:10}},[a("aui-col",{attrs:{md:6,lg:4}},[a("aui-form-item",{staticClass:"typeInfo-aui-form-item",attrs:{label:"机构编号",prop:"branchId"}},[a("select-tree",{staticStyle:{width:"170px"},attrs:{"single-check":!0,props:{id:"orgno",label:"cname",children:"children"},"tree-data":e.brnoList,placeholder:"请选择机构"},model:{value:e.queryForm.branchId,callback:function(t){e.$set(e.queryForm,"branchId",t)},expression:"queryForm.branchId"}})],1)],1),e._v(" "),a("aui-col",{attrs:{md:6,lg:4}},[a("aui-form-item",{staticClass:"typeInfo-aui-form-item",attrs:{label:"设备类型",prop:"devType"}},[a("aui-select",{attrs:{filterable:"",placeholder:"请选择设备类型"},model:{value:e.queryForm.devType,callback:function(t){e.$set(e.queryForm,"devType",t)},expression:"queryForm.devType"}},e._l(e.deviceTypeList,function(e){return a("aui-option",{key:e.DataKeyVal,attrs:{label:e.DataKeyVal+"-"+e.Meaning,value:e.DataKeyVal,disabled:e.disabled}})}))],1)],1),e._v(" "),a("aui-col",{attrs:{md:6,lg:4}},[a("aui-form-item",{staticClass:"typeInfo-aui-form-item",attrs:{label:"开始日期",prop:"sTime"}},[a("aui-date-picker",{attrs:{"value-format":"yyyyMMdd",type:"date",placeholder:"选择日期","picker-options":e.pickerOptionsStart},on:{change:e.dateChange},model:{value:e.queryForm.sTime,callback:function(t){e.$set(e.queryForm,"sTime",t)},expression:"queryForm.sTime"}})],1)],1),e._v(" "),a("aui-col",{attrs:{md:6,lg:4}},[a("aui-form-item",{staticClass:"typeInfo-aui-form-item",attrs:{label:"结束日期",prop:"eTime"}},[a("aui-date-picker",{attrs:{"value-format":"yyyyMMdd",type:"date",placeholder:"选择日期","picker-options":e.pickerOptionsStart},on:{change:e.dateChange},model:{value:e.queryForm.eTime,callback:function(t){e.$set(e.queryForm,"eTime",t)},expression:"queryForm.eTime"}})],1)],1),e._v(" "),a("aui-col",{staticClass:"searchBtnMarginTop",attrs:{md:3,lg:2}},[a("aui-button",{attrs:{type:"primary",size:"mini",icon:"aui-icon-search"},on:{click:e.queryModel}},[e._v("查询")])],1),e._v(" "),a("aui-col",{staticClass:"searchBtnMarginTop",attrs:{md:3,lg:2}},[a("aui-button",{attrs:{type:"warning",size:"mini",icon:"aui-icon-refresh"},on:{click:function(t){e.clearForm("queryForm")}}},[e._v("重置")])],1),e._v(" "),a("aui-col",{staticClass:"searchBtnMarginTop",attrs:{md:3,lg:2}},[e.btnPermission("Button_RunRateRep_Export")?a("aui-button",{staticClass:"b-button",attrs:{type:"primary",size:"mini",icon:"aui-icon-download"},on:{click:e.getExcel}},[e._v("导出")]):e._e()],1)],1)],1)],1),e._v(" "),a("aui-card",{staticClass:"type-info-bottom"},[a("aui-table",{ref:"tableData",staticClass:"tableMarginTop",attrs:{data:e.tableData,"header-row-class-name":"tableHeaderClass",border:""}},[a("aui-table-column",{attrs:{prop:"OrgNo",formatter:e.dataFormat,label:"机构名称"}}),e._v(" "),a("aui-table-column",{attrs:{prop:"EquipNo",label:"设备编号"}}),e._v(" "),a("aui-table-column",{attrs:{prop:"EquipType",label:"设备类型",formatter:e.dataFormat1}}),e._v(" "),a("aui-table-column",{attrs:{prop:"ClearCardNum",label:"清卡次数"}}),e._v(" "),a("aui-table-column",{attrs:{prop:"ClearUkeyNum",label:"清盾次数"}}),e._v(" "),a("aui-table-column",{attrs:{prop:"AddCardNum",label:"加卡数量"}}),e._v(" "),a("aui-table-column",{attrs:{prop:"AddUkeyNum",label:"加盾数量"}})],1),e._v(" "),a("div",{staticClass:"box"},[a("aui-pagination",{attrs:{background:"","current-page":e.currentPage,"page-size":e.pageSize,layout:"total, prev, pager, next, jumper",total:e.tableTotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}})],1)],1)],1)])},staticRenderFns:[]};var b=a("/Xao")(y,f,!1,function(e){a("ePK7")},null,null);t.default=b.exports},ePK7:function(e,t,a){var r=a("HqBN");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("8bSs")("d3cdcc52",r,!0)}});