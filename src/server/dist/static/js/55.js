webpackJsonp([55],{Fko4:function(t,e,a){var i=a("Zytb");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("8bSs")("528517bb",i,!0)},Zytb:function(t,e,a){(t.exports=a("BkJT")(!1)).push([t.i,"",""])},kPSA:function(t,e,a){var i=a("qRYQ");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("8bSs")("00e92d5d",i,!0)},lhHM:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("0oES"),o=a("syAl"),s=a("ibSb"),r=a("HagK"),n={props:{option:Object},computed:{isShow:{get:function(){return this.option.isShow},set:function(t){this.option.isShow=t}}},data:function(){return{loading:!1,appId:[],form:{REJECTREASON:""},rules:{REJECTREASON:[{required:!1,message:"请填写审批意见",trigger:"blur"}]}}},methods:{initData:function(){this.form.REJECTREASON=""},closeUpdate:function(){this.$refs.form.resetFields(),this.$refs.form.clearValidate()},ItemUpdate:function(){var t=this;this.$refs.form.validate(function(e){if(e){if(t.option.SEALMODELID.length>0){t.loading=!0;var a=new s.a;a.data.SEALTYPE="01",a.data.OPERATETYPE=t.option.mark,a.data.SEALMODELID=t.option.SEALMODELID,a.data.AUDITTYPE=t.option.AUDITTYPE,a.data.REJECTREASON=t.form.REJECTREASON,Object(i.a)(a).then(function(e){t.$emit("refreshTable"),t.loading=!1,t.isShow=!1,t.$aui.message.show({type:"success",message:"审批成功！"})}).catch(function(e){t.loading=!1,t.isShow=!1,t.$aui.message.show({type:"warning",message:"请求失败，错误码:"+e.SYS_HEAD.ReturnCode+"，错误信息："+e.SYS_HEAD.ReturnMessage}),console.log(e)})}if(t.option.BRANCHSEALMODELID.length>0){t.loading=!0;var o=new r.a;o.data.SEALTYPE="01",o.data.OPERATETYPE=t.option.mark,o.data.AUDITTYPE=t.option.BRANCHAUDITTYPE,o.data.SEALMODELID=t.option.BRANCHSEALMODELID,o.data.BRANCH=t.option.BRANCH,o.data.REJECTREASON=t.form.REJECTREASON,Object(i.a)(o).then(function(e){t.$emit("refreshTable"),t.loading=!1,t.isShow=!1,t.$aui.message.show({type:"success",message:"审批成功！"})}).catch(function(e){t.loading=!1,t.isShow=!1,t.$aui.message.show({type:"warning",message:"请求失败，错误码:"+e.SYS_HEAD.ReturnCode+"，错误信息："+e.SYS_HEAD.ReturnMessage}),console.log(e)})}}})}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("aui-dialog",{attrs:{title:t.option.title,visible:t.option.isShow,width:"800px","close-on-click-modal":!1},on:{"update:visible":function(e){t.$set(t.option,"isShow",e)},show:t.initData,close:t.closeUpdate}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[a("aui-card",[a("aui-form",{ref:"form",attrs:{model:t.form,size:"mini",rules:t.rules,"label-width":"140px","label-position":"right"}},[a("aui-row",{attrs:{gutter:40}},[a("aui-col",{attrs:{span:24}},[a("aui-form-item",{attrs:{label:"审批意见:",prop:"REJECTREASON"}},[a("aui-input",{model:{value:t.form.REJECTREASON,callback:function(e){t.$set(t.form,"REJECTREASON",e)},expression:"form.REJECTREASON"}})],1)],1)],1)],1)],1),t._v(" "),a("aui-row",{staticStyle:{margin:"20px 0","text-align":"right"}},[a("aui-button",{attrs:{size:"mini"},on:{click:function(e){t.option.isShow=!1}}},[t._v("返回")]),t._v(" "),a("aui-button",{attrs:{type:"primary",size:"mini"},on:{click:t.ItemUpdate}},[t._v("确定")])],1)],1)])],1)},staticRenderFns:[]};var E=a("/Xao")(n,l,!1,function(t){a("kPSA")},null,null).exports,u=a("FrCs"),D=a("oxV9"),R=a("Mhhh"),A=a("WtST"),T=a("0yaH"),c=a("pADA"),h=a("0VOF"),S=(a("H0cQ"),{data:function(){return{currentRow:[],AUDITTYPE:[],SEALMODELID:[],BRANCHAUDITTYPE:[],BRANCHSEALMODELID:[],BRANCH:[],tableData:[],QueryForm:{busiType:"",status:"1",crtno:"",crtdate:"",approveno:"",aprrovedate:""},busiTypeStatus:"0",status:[{value:"0",label:"待审核"},{value:"1",label:"审核通过待审批"},{value:"2",label:"审核未通过"},{value:"3",label:"审批通过"},{value:"4",label:"审批未通过"},{value:"5",label:"管理员撤销"}],busiTypelist:[{value:"0",label:"式样设计新增"},{value:"1",label:"式样设计停用"},{value:"2",label:"印章管理启用"},{value:"3",label:"印章管理停用"}],busiTypelistFormat:[{value:"00",label:"式样设计新增"},{value:"01",label:"式样设计停用"},{value:"10",label:"印章管理启用"},{value:"11",label:"印章管理停用"}],total:0,loading:!1,checkedPost:!1,checkedBack:!1,dialogList:{sealCheckPage:E,sealView:u.a,sealAdd:D.a},dialogOptions:{isShow:!1},dialogViewOptions:{isShow:!1},dialogSealAddOptions:{isShow:!1},currentPage:1,pageSize:void 0}},created:function(){var t=this;this.pageSize=o.a.get("PageSize"),this.loading=!0;var e=new h.a;e.data.orgno=this.$store.getters.BranchNum,Object(i.a)(e).then(function(e){t.loading=!1,t.brnoMap=e.RspInfo.orgMap||{}}).catch(function(e){t.loading=!1,console.error("查询错误",e)})},watch:{QueryForm:{handler:function(t,e){this.currentPage=1},deep:!0}},computed:{},methods:{checkShow:function(){"00"!=this.currentRow[0].REMARK1&&"01"!=this.currentRow[0].REMARK1||(this.dialogViewOptions.currentRow=this.currentRow,this.dialogViewOptions.isShow=!0,this.dialogViewOptions.title="详情",this.dialogViewOptions.isStop=!1,this.dialogViewOptions.flag="3",this.dialogViewOptions.APPRVSTUSCD=this.currentRow[0].APPRVSTUSCD),"10"!=this.currentRow[0].REMARK1&&"11"!=this.currentRow[0].REMARK1||(this.dialogSealAddOptions.isShow=!0,this.dialogSealAddOptions.operType="4",this.dialogSealAddOptions.currentRow=this.currentRow[0],this.dialogSealAddOptions.brnoMap=this.brnoMap,this.dialogSealAddOptions.title="详情",this.dialogSealAddOptions.flag="3",this.dialogSealAddOptions.APPRVSTUSCD=this.currentRow[0].APPRVSTUSCD)},resetForm:function(t){this.$refs[""+t].resetFields(),this.currentPage=1},changePage:function(t){this.currentPage=t,this.query()},query:function(){this.QueryForm.busiType?"0"==this.QueryForm.busiType||"1"==this.QueryForm.busiType?this.queryStyle():"2"!=this.QueryForm.busiType&&"3"!=this.QueryForm.busiType||this.queryBrno():this.queryStyleBrnoAll()},queryStyle:function(){var t=this;this.loading=!0;var e=new R.a;e.data.SEALTYPE="01","0"==this.QueryForm.busiType&&(e.data.AUDITTYPE="00"),"1"==this.QueryForm.busiType&&(e.data.AUDITTYPE="01"),e.data.APPRVSTUSCD=this.QueryForm.status,e.data.pagerownum=this.pageSize,e.data.currpage=this.currentPage,Object(i.a)(e).then(function(e){if(t.loading=!1,e.RspInfo.struct){for(var a=e.RspInfo.struct||[],i=0;i<a.length;i++){var o=a[i];"00"==o.REMARK1?(o.CRTELLER=o.CRTELLER,o.CRTDATE=o.CRTDATE,o.NEWADDEXMNVRFYTELRNO=o.NEWADDEXMNVRFYTELRNO,o.NEWADDEXMNVRFYDT=o.NEWADDEXMNVRFYDT,o.NEWADDEXMNVRFYSUGSTNCOMNT=o.NEWADDEXMNVRFYSUGSTNCOMNT,o.NEWADDAPPRVTELRNO=o.NEWADDAPPRVTELRNO,o.NEWADDAPPRVDT=o.NEWADDAPPRVDT,o.NEWADDAPPRVSUGSTNCOMNT=o.NEWADDAPPRVSUGSTNCOMNT):"01"==o.REMARK1&&(o.CRTELLER=o.DISUSEOPERTELRNO,o.CRTDATE=o.DISUSEOPERDT,o.NEWADDEXMNVRFYTELRNO=o.DISUSEEXMNVRFYTELRNO,o.NEWADDEXMNVRFYDT=o.DISUSEEXMNVRFYDT,o.NEWADDEXMNVRFYSUGSTNCOMNT=o.DISUSEEXMNVRFYSUGSTNCOMNT,o.NEWADDAPPRVTELRNO=o.DISUSEAPPRVTELRNO,o.NEWADDAPPRVDT=o.DISUSEAPPRVDT,o.NEWADDAPPRVSUGSTNCOMNT=o.DISUSEAPPRVSUGSTNCOMNT)}t.tableData=a,t.total=Number(e.RspInfo.TotalNum||0)}else t.tableData=[],t.total=0,t.$aui.message.show({type:"warning",message:e.SYS_HEAD.ReturnMessage})}).catch(function(e){t.loading=!1,t.tableData=[],t.total=0,t.$aui.message.show({type:"warning",message:"请求失败，错误码:"+e.SYS_HEAD.ReturnCode+"，错误信息："+e.SYS_HEAD.ReturnMessage}),console.log(e)})},queryBrno:function(){var t=this;this.loading=!0;var e=new A.a;e.data.SEALTYPE="01","2"==this.QueryForm.busiType&&(e.data.AUDITTYPE="10"),"3"==this.QueryForm.busiType&&(e.data.AUDITTYPE="11"),e.data.APPRVSTUSCD=this.QueryForm.status,e.data.pagerownum=this.pageSize,e.data.currpage=this.currentPage,Object(i.a)(e).then(function(e){if(t.loading=!1,e.RspInfo.struct){for(var a=e.RspInfo.struct||[],i=0;i<a.length;i++){var o=a[i];o.REMARK1=o.AUDITTYPE,"10"==o.AUDITTYPE?(o.CRTELLER=o.CRTELLER,o.CRTDATE=o.CRTDATE,o.NEWADDEXMNVRFYTELRNO=o.NEWADDEXMNVRFYTELRNO,o.NEWADDEXMNVRFYDT=o.NEWADDEXMNVRFYDT,o.NEWADDEXMNVRFYSUGSTNCOMNT=o.NEWADDEXMNVRFYSUGSTNCOMNT,o.NEWADDAPPRVTELRNO=o.NEWADDAPPRVTELRNO,o.NEWADDAPPRVDT=o.NEWADDAPPRVDT,o.NEWADDAPPRVSUGSTNCOMNT=o.NEWADDAPPRVSUGSTNCOMNT):"11"==o.AUDITTYPE&&(o.CRTELLER=o.DISUSEOPERTELRNO,o.CRTDATE=o.DISUSEOPERDT,o.NEWADDEXMNVRFYTELRNO=o.DISUSEEXMNVRFYTELRNO,o.NEWADDEXMNVRFYDT=o.DISUSEEXMNVRFYDT,o.NEWADDEXMNVRFYSUGSTNCOMNT=o.DISUSEEXMNVRFYSUGSTNCOMNT,o.NEWADDAPPRVTELRNO=o.DISUSEAPPRVTELRNO,o.NEWADDAPPRVDT=o.DISUSEAPPRVDT,o.NEWADDAPPRVSUGSTNCOMNT=o.DISUSEAPPRVSUGSTNCOMNT)}t.tableData=a,t.total=Number(e.RspInfo.TotalNum||0)}else t.tableData=[],t.total=0,t.$aui.message.show({type:"warning",message:e.SYS_HEAD.ReturnMessage})}).catch(function(e){t.loading=!1,t.tableData=[],t.total=0,t.$aui.message.show({type:"warning",message:"请求失败，错误码:"+e.SYS_HEAD.ReturnCode+"，错误信息："+e.SYS_HEAD.ReturnMessage}),console.log(e)})},queryStyleBrnoAll:function(){var t=this;this.loading=!0;var e=new T.a;e.data.APPRVSTUSCD=this.QueryForm.status,e.data.CurtPage=this.currentPage+"",e.data.PageSize=this.pageSize+"",e.data.StartRows=(this.currentPage-1)*this.pageSize+"",Object(i.a)(e).then(function(e){if(t.loading=!1,e.RspInfo.Result){for(var a=e.RspInfo.Result||[],i=0;i<a.length;i++){var o=a[i];o.REMARK1=o.AUDITTYPE,"10"==o.REMARK1||"00"==o.REMARK1?(o.CRTELLER=o.CRTELLER,o.CRTDATE=o.CRTDATE,o.NEWADDEXMNVRFYTELRNO=o.NEWADDEXMNVRFYTELRNO,o.NEWADDEXMNVRFYDT=o.NEWADDEXMNVRFYDT,o.NEWADDEXMNVRFYSUGSTNCOMNT=o.NEWADDEXMNVRFYSUGSTNCOMNT,o.NEWADDAPPRVTELRNO=o.NEWADDAPPRVTELRNO,o.NEWADDAPPRVDT=o.NEWADDAPPRVDT,o.NEWADDAPPRVSUGSTNCOMNT=o.NEWADDAPPRVSUGSTNCOMNT):"11"!=o.REMARK1&&"01"!=o.REMARK1||(o.CRTELLER=o.DISUSEOPERTELRNO,o.CRTDATE=o.DISUSEOPERDT,o.NEWADDEXMNVRFYTELRNO=o.DISUSEEXMNVRFYTELRNO,o.NEWADDEXMNVRFYDT=o.DISUSEEXMNVRFYDT,o.NEWADDEXMNVRFYSUGSTNCOMNT=o.DISUSEEXMNVRFYSUGSTNCOMNT,o.NEWADDAPPRVTELRNO=o.DISUSEAPPRVTELRNO,o.NEWADDAPPRVDT=o.DISUSEAPPRVDT,o.NEWADDAPPRVSUGSTNCOMNT=o.DISUSEAPPRVSUGSTNCOMNT)}t.tableData=a,t.total=Number(e.RspInfo.totalNum||0)}else t.tableData=[],t.total=0,t.$aui.message.show({type:"warning",message:e.SYS_HEAD.ReturnMessage})}).catch(function(e){t.$aui.message.show({type:"warning",message:"请求失败，错误码:"+e.SYS_HEAD.ReturnCode+"，错误信息："+e.SYS_HEAD.ReturnMessage}),t.loading=!1,t.tableData=[],t.total=0,console.error("查询错误",e)})},clickCheckPass:function(){this.dialogOptions.isShow=!0,this.dialogOptions.mark="6",this.dialogOptions.title="审批通过",this.dialogOptions.AUDITTYPE=this.AUDITTYPE,this.dialogOptions.SEALMODELID=this.SEALMODELID,this.dialogOptions.BRANCHAUDITTYPE=this.BRANCHAUDITTYPE,this.dialogOptions.BRANCHSEALMODELID=this.BRANCHSEALMODELID,this.dialogOptions.BRANCH=this.BRANCH},checkCheckRefuse:function(){this.dialogOptions.isShow=!0,this.dialogOptions.mark="7",this.dialogOptions.title="审批拒绝",this.dialogOptions.AUDITTYPE=this.AUDITTYPE,this.dialogOptions.SEALMODELID=this.SEALMODELID,this.dialogOptions.BRANCHAUDITTYPE=this.BRANCHAUDITTYPE,this.dialogOptions.BRANCHSEALMODELID=this.BRANCHSEALMODELID,this.dialogOptions.BRANCH=this.BRANCH},dataFormat1:function(t,e){for(var a=0;a<this.busiTypelistFormat.length;a++)if(this.busiTypelistFormat[a].value==t[e.property])return this.busiTypelistFormat[a].label},dataFormat:function(t,e){for(var a=0;a<this.status.length;a++)if(this.status[a].value==t[e.property])return this.status[a].label},timeFormat:function(t,e){return(t[e.property]+"").length>10?c.a.timestampToTime2(t[e.property]):t[e.property]},handleCurrentChange:function(t){if(this.currentRow=t,t.length>=1){this.checkedPost=1==t.length;var e=0;this.AUDITTYPE=[],this.SEALMODELID=[],this.BRANCHAUDITTYPE=[],this.BRANCHSEALMODELID=[],this.BRANCH=[];for(var a=0;a<t.length;a++)"1"!=t[a].APPRVSTUSCD?e+=1:("00"!=t[a].REMARK1&&"01"!=t[a].REMARK1||(this.AUDITTYPE.push(t[a].REMARK1),this.SEALMODELID.push(t[a].SEALMODELID)),"10"!=t[a].REMARK1&&"11"!=t[a].REMARK1||(this.BRANCHAUDITTYPE.push(t[a].REMARK1),this.BRANCHSEALMODELID.push(t[a].SEALMODELID),this.BRANCH.push(t[a].BRANCH)));this.checkedBack=!(e>0)}else this.AUDITTYPE=[],this.SEALMODELID=[],this.BRANCHAUDITTYPE=[],this.BRANCHSEALMODELID=[],this.BRANCH=[],this.checkedPost=!1,this.checkedBack=!1}}}),N={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{"element-loading-text":"加载中。。。"}},[a("aui-card",[a("aui-form",{ref:"QueryForm",attrs:{model:t.QueryForm,size:"mini","label-position":"top"}},[a("aui-row",{attrs:{gutter:10}},[a("aui-col",{attrs:{lg:4,md:6}},[a("aui-form-item",{attrs:{label:"状态",prop:"status"}},[a("aui-select",{attrs:{filterable:""},model:{value:t.QueryForm.status,callback:function(e){t.$set(t.QueryForm,"status",e)},expression:"QueryForm.status"}},t._l(t.status,function(t){return a("aui-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)],1),t._v(" "),a("aui-col",{attrs:{lg:4,md:6}},[a("aui-form-item",{attrs:{label:"业务名称",prop:"busiType"}},[a("aui-select",{attrs:{filterable:""},model:{value:t.QueryForm.busiType,callback:function(e){t.$set(t.QueryForm,"busiType",e)},expression:"QueryForm.busiType"}},t._l(t.busiTypelist,function(t){return a("aui-option",{key:t.value,attrs:{label:t.value+"-"+t.label,value:t.value}})}))],1)],1)],1)],1)],1),t._v(" "),a("aui-card",{staticStyle:{"margin-top":"10px"}},[a("aui-row",[a("aui-button",{attrs:{type:"primary",size:"mini",icon:"aui-icon-search"},on:{click:t.query}},[t._v("查询")]),t._v(" "),a("aui-button",{attrs:{type:"warning",size:"mini",icon:"aui-icon-refresh"},on:{click:function(e){t.resetForm("QueryForm")}}},[t._v("重置")]),t._v(" "),a("aui-button",{attrs:{type:"primary",size:"mini",disabled:!t.checkedBack},on:{click:t.clickCheckPass}},[t._v("审批通过")]),t._v(" "),a("aui-button",{attrs:{type:"danger",size:"mini",disabled:!t.checkedBack},on:{click:t.checkCheckRefuse}},[t._v("审批不通过")]),t._v(" "),a("aui-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-tickets",disabled:1!=t.currentRow.length},on:{click:t.checkShow}},[t._v("详情")])],1),t._v(" "),a("aui-table",{ref:"table",staticClass:"tableMarginTop",staticStyle:{"min-height":"390px"},attrs:{data:t.tableData,border:"","highlight-current-row":"","header-row-class-name":"tableHeaderClass"},on:{"selection-change":t.handleCurrentChange}},[a("aui-table-column",{attrs:{type:"selection",width:"40px"}}),t._v(" "),a("aui-table-column",{attrs:{prop:"REMARK1",label:"业务名称",formatter:t.dataFormat1}}),t._v(" "),a("aui-table-column",{attrs:{prop:"CRTELLER",label:"操作员"}}),t._v(" "),a("aui-table-column",{attrs:{prop:"CRTDATE",label:"提交日期",formatter:t.timeFormat}}),t._v(" "),a("aui-table-column",{attrs:{prop:"APPRVSTUSCD",label:"状态",formatter:t.dataFormat}}),t._v(" "),a("aui-table-column",{attrs:{prop:"NEWADDEXMNVRFYTELRNO",label:"审核员"}}),t._v(" "),a("aui-table-column",{attrs:{prop:"NEWADDEXMNVRFYDT",label:"审核日期",formatter:t.timeFormat}}),t._v(" "),a("aui-table-column",{attrs:{prop:"NEWADDEXMNVRFYSUGSTNCOMNT",label:"审核意见"}}),t._v(" "),a("aui-table-column",{attrs:{prop:"NEWADDAPPRVTELRNO",label:"审批员"}}),t._v(" "),a("aui-table-column",{attrs:{prop:"NEWADDAPPRVDT",label:"审批日期",formatter:t.timeFormat}}),t._v(" "),a("aui-table-column",{attrs:{prop:"NEWADDAPPRVSUGSTNCOMNT",label:"审批意见"}})],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:this.tableData,expression:"this.tableData"}],staticStyle:{"text-align":"right","margin-top":"20px"}},[a("aui-pagination",{attrs:{"current-page":t.currentPage,background:"","page-size":t.pageSize,layout:"total, prev, pager, next, jumper",total:t.total},on:{"current-change":t.changePage}})],1)],1)],1),t._v(" "),a("keep-alive",[a(t.dialogList.sealCheckPage,{tag:"component",attrs:{option:t.dialogOptions},on:{refreshTable:t.query}})],1),t._v(" "),a("keep-alive",[a(t.dialogList.sealView,{tag:"component",attrs:{option:t.dialogViewOptions},on:{refreshTable:t.query}})],1),t._v(" "),a("keep-alive",[a(t.dialogList.sealAdd,{tag:"component",attrs:{option:t.dialogSealAddOptions},on:{refreshTable:t.query}})],1)],1)},staticRenderFns:[]};var p=a("/Xao")(S,N,!1,function(t){a("Fko4")},"data-v-6fc6b48c",null);e.default=p.exports},qRYQ:function(t,e,a){(t.exports=a("BkJT")(!1)).push([t.i,"",""])}});