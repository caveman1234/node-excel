webpackJsonp([74],{"52SQ":function(t,e,i){var a=i("CUw2");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("8bSs")("30457386",a,!0)},CUw2:function(t,e,i){(t.exports=i("BkJT")(!1)).push([t.i,"",""])},"PH+k":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("pADA"),s=i("0oES"),r=i("tzsN"),o=i("syAl"),n=i("fCv1"),u=i("AA3o"),l=i.n(u),c=function t(){l()(this,t),this.data={BusiOper:"A",Brno:"",BsIDTp:"3",BsName:"",BsAttr:"",BsStatus:"",Message:""},this.BusiDataKey="add_TP_BSTP",this.TransServiceCode="ib-dbcomm/dbComm"},m=function t(){l()(this,t),this.data={BusiOper:"M",Brno:"",BsID:"",BsName:"",BsAttr:"",BsStatus:"",Message:""},this.BusiDataKey="mod_TP_BSTP",this.TransServiceCode="ib-dbcomm/dbComm"},d=function t(){l()(this,t),this.data={},this.BusiDataKey="sel_tp_bstp_a",this.TransServiceCode="ib-dbcomm/dbComm"},p=function t(){l()(this,t),this.data={},this.BusiDataKey="sel_tp_bstp_m",this.TransServiceCode="ib-dbcomm/dbComm"},h=function t(){l()(this,t),this.data={BusiOper:"Q",Brno:"",BsIDTp:"3",CurtPage:"",PageSize:"",StartRows:""},this.BusiDataKey="sel_TP_BSTP_Common",this.TransServiceCode="ib-dbcomm/dbComm"},b={components:{selectTree:r.a},props:{option:Object},data:function(){return{loading:!1,appId:[],busiTypeList:[],busiStatusList:[],form:{ruleType:"",ruleName:"",dese:"",brno:[],ruleId:"",busiStatus:""},rules:{brno:[{type:"array",required:!0,message:"请选择机构编号",trigger:"change"}],busiType:[{required:!0,message:"请选择业务类型",trigger:"change"}],busiName:[{required:!0,message:"请输入业务名称",trigger:"blur"},{validator:n.l,trigger:"blur"},{validator:Object(n.h)(30),trigger:"blur"}],busiStatus:[{required:!0,message:"请选择业务状态",trigger:"change"}],busiId:[{required:!0,message:"请输入业务Id",trigger:"blur"}]}}},created:function(){this.busiStatusList=a.a.objToArray(o.a.get("Status")),this.busiTypeList=a.a.objToArray(o.a.get("BsAttr1"))},methods:{openUpdate:function(){var t=this;"2"==this.option.mark?this.$nextTick(function(){t.setData()}):this.$refs.form&&this.$refs.form.clearValidate()},setData:function(){this.form.brno.push(this.option.currentRow.Brno),this.form.busiName=this.option.currentRow.BsName,this.form.busiType=this.option.currentRow.BsAttr,this.form.busiId=this.option.currentRow.BsID,this.form.busiStatus=this.option.currentRow.BsStatus},closeUpdete:function(){this.$refs.form.resetFields(),this.$refs.form.clearValidate()},busiTypeNameCheck:function(){var t=this,e="1"==this.option.mark?new d:new p;e.data.BsID=this.form.busiId,e.data.BsName=this.form.busiName,e.data.BsAttr=this.form.busiType,e.data.Brno=this.form.brno[0],Object(s.a)(e).then(function(e){e.RspInfo.Result?(t.$aui.message.show({type:"warning",message:"业务名称已存在!"}),t.loading=!1):t.submit()}).catch(function(e){return t.$aui.message.show({type:"warning",message:e.SYS_HEAD.ReturnMessage+"!"}),t.loading=!1,!1})},submit:function(){var t=this,e="1"==this.option.mark?new c:new m;e.data.Brno=this.form.brno[0],e.data.BsAttr=this.form.busiType,e.data.BsName=this.form.busiName,e.data.BsID=this.form.busiId,e.data.BsStatus=this.form.busiStatus,Object(s.a)(e).then(function(e){t.$emit("refreshTable"),t.option.isShow=!1;var i="1"==t.option.mark?"创建":"修改";t.$aui.message.show({type:"success",message:i+"成功!"}),t.loading=!1}).catch(function(e){t.$aui.message.show({type:"warning",message:e.SYS_HEAD.ReturnMessage+"!"}),t.loading=!1})},ItemUpdate:function(){var t=this;this.$refs.form.validate(function(e){if(!e)return t.$aui.message.show({type:"warning",message:"请输入合法的数据！"}),!1;t.loading=!0,t.busiTypeNameCheck()})}}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("aui-dialog",{attrs:{title:t.option.title,visible:t.option.isShow,width:"800px","close-on-click-modal":!1},on:{"update:visible":function(e){t.$set(t.option,"isShow",e)},show:t.openUpdate,hide:t.closeUpdete}},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[i("aui-card",[i("aui-form",{ref:"form",attrs:{model:t.form,size:"mini",rules:t.rules,"label-width":"140px","label-position":"right"}},[i("aui-row",{attrs:{gutter:40}},[i("aui-col",{attrs:{span:12}},[i("aui-form-item",{attrs:{label:"机构编号:",prop:"brno"}},[i("select-tree",{staticStyle:{width:"170px"},attrs:{"single-check":!0,props:{id:"orgno",label:"cname",children:"children"},"tree-data":t.option.branchNum,placeholder:"请选择机构",disabled:t.option.isDisabled},model:{value:t.form.brno,callback:function(e){t.$set(t.form,"brno",e)},expression:"form.brno"}})],1)],1),t._v(" "),i("aui-col",{attrs:{span:12}},[i("aui-form-item",{attrs:{label:"业务分类:",prop:"busiType"}},[i("aui-select",{attrs:{placeholder:"请选择规则类型"},model:{value:t.form.busiType,callback:function(e){t.$set(t.form,"busiType",e)},expression:"form.busiType"}},t._l(t.busiTypeList,function(t){return i("aui-option",{key:t.value,attrs:{label:t.label,value:t.value,disabled:t.disabled}})}))],1)],1)],1),t._v(" "),i("aui-row",{attrs:{gutter:40}},[i("aui-col",{attrs:{span:12}},[t.option.isDisabled?i("aui-form-item",{attrs:{label:"业务ID:",prop:"busiId"}},[i("aui-input",{attrs:{disabled:!0},model:{value:t.form.busiId,callback:function(e){t.$set(t.form,"busiId",e)},expression:"form.busiId"}})],1):t._e()],1),t._v(" "),i("aui-col",{attrs:{span:12}},[i("aui-form-item",{attrs:{label:"业务名称:",prop:"busiName"}},[i("aui-input",{attrs:{placeholder:"请输入业务名称"},model:{value:t.form.busiName,callback:function(e){t.$set(t.form,"busiName",e)},expression:"form.busiName"}})],1)],1)],1),t._v(" "),i("aui-row",{attrs:{gutter:40}},[i("aui-col",{attrs:{span:12}},[i("aui-form-item",{attrs:{label:"业务状态",prop:"busiStatus"}},[i("aui-select",{attrs:{placeholder:"请选择业务状态"},model:{value:t.form.busiStatus,callback:function(e){t.$set(t.form,"busiStatus",e)},expression:"form.busiStatus"}},t._l(t.busiStatusList,function(t){return i("aui-option",{key:t.value,attrs:{label:t.label,value:t.value,disabled:t.disabled}})}))],1)],1)],1)],1)],1),t._v(" "),i("aui-row",{staticStyle:{margin:"20px 0","text-align":"right"}},[i("aui-button",{attrs:{size:"mini"},on:{click:function(e){t.option.isShow=!1}}},[t._v("返回")]),t._v(" "),i("aui-button",{attrs:{type:"primary",size:"mini"},on:{click:t.ItemUpdate}},[t._v("确定")])],1)],1)])],1)},staticRenderFns:[]};var f=i("/Xao")(b,g,!1,function(t){i("cecr")},null,null).exports,y=i("0VOF"),v=i("2JIZ"),w={name:"busiTypeManage",components:{selectTree:r.a},data:function(){return{currentRow:[],QueryForm:{branchNum:[]},branchNum:[],brnoList:[],busiStatusMap:{},busiAttrMap:{},total:void 0,busiTypeList:[],brnoMap:{},permission:{},loading:!1,isDisabledDel:!1,dialogList:{busiTypeAdd:f},dialogOptions:{isShow:!1},currentPage:1,pageSize:void 0,rules:{branchNum:[{required:!0,message:"请选择机构编号",trigger:"change"}]}}},created:function(){this.pageSize=o.a.get("PageSize"),this.busiStatusMap=o.a.get("Status"),this.busiAttrMap=o.a.get("BsAttr1"),this.queryBranchNum()},watch:{"QueryForm.branchNum":function(t){this.currentPage=1}},computed:{},methods:{queryBranchNum:function(){var t=this;this.loading=!0;var e=new y.a;e.data.orgno=this.$store.getters.BranchNum,Object(s.a)(e).then(function(e){t.loading=!1,t.brnoMap=e.RspInfo.orgMap||{},t.branchNum=e.RspInfo.Result||[],t.permission=a.a.objArray2Hash(t.branchNum,"orgno"),t.brnoList=a.a.formatTreeData(t.branchNum,"orgno","superno"),t.QueryForm.branchNum.push(t.brnoList[0].orgno)}).catch(function(e){t.loading=!1,t.$aui.message.show({type:"warning",message:e.SYS_HEAD.ReturnMessage}),console.error("查询错误",e)})},dataFormat:function(t,e){return"Brno"==e.property?t[e.property]+"-"+t.BrName:"BsStatus"==e.property?this.busiStatusMap[t[e.property]]:"BsAttr"==e.property?this.busiAttrMap[t[e.property]]:void 0},clickAdd:function(){this.dialogOptions.isShow=!0,this.dialogOptions.title="新增业务类型",this.dialogOptions.mark="1",this.dialogOptions.isDisabled=!1,this.dialogOptions.branchNum=this.brnoList},clickUpdate:function(){this.dialogOptions.isShow=!0,this.dialogOptions.title="修改业务类型",this.dialogOptions.mark="2",this.dialogOptions.isDisabled=!0,this.dialogOptions.currentRow=this.currentRow,this.dialogOptions.branchNum=this.brnoList},checkPermission:function(t){this.permission[this.currentRow.Brno]?t?this.clickUpdate():"BS0001"!==this.currentRow.BsID&&"BS0002"!==this.currentRow.BsID&&"BS0003"!==this.currentRow.BsID?this.delBut():this.$aui.message.show({type:"warning",message:"基础数据,无法删除！"}):this.$aui.message.show({type:"warning",message:"权限不足,无法修改！"})},resetForm:function(){this.busiTypeList=[],this.total=0,this.$refs.QueryForm.resetFields()},delBut:function(){var t=this;this.$aui.confirm.show("此操作将永久删除该业务类型, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.busiTypeDel()}).catch(function(){t.$aui.message.show({type:"info",message:"已取消删除"})})},busiTypeDel:function(){var t=this;this.loading=!0;var e=new v.a;e.data.Brno=this.currentRow.Brno,e.data.BsID=this.currentRow.BsID,Object(s.a)(e).then(function(e){t.loading=!1,t.$aui.message.show({type:"success",message:"业务类型删除成功！"}),t.currentPage=1,t.query()}).catch(function(e){t.$aui.message.show({type:"warning",message:e.SYS_HEAD.ReturnMessage}),t.loading=!1,console.log(e)})},query:function(){var t=this;this.$refs.QueryForm.validate(function(e){if(e){t.loading=!0;var i=new h;i.data.Brno=t.QueryForm.branchNum[0],i.data.PageSize=t.pageSize+"",i.data.CurtPage=t.currentPage+"",i.data.StartRows=(t.currentPage-1)*t.pageSize+"",Object(s.a)(i).then(function(e){t.loading=!1,t.busiTypeList=e.RspInfo.Result||[],t.total=e.RspInfo.totalNum||0,"0"===t.total&&t.$aui.message.show({type:"warning",message:"无满足条件的记录！"})}).catch(function(e){t.$aui.message.show({type:"warning",message:"请求失败，错误码:"+e.SYS_HEAD.ReturnCode+"，错误信息："+e.SYS_HEAD.ReturnMessage}),t.loading=!1,console.log(e)})}})},handleCurrentChange:function(t){this.currentPage=t,this.query()},selectList:function(t){1==t.length?(this.isDisabledDel=!0,this.currentRow=t[0]):t.length>1?this.$refs.busiTypeList.toggleRowSelection(t[0]):this.isDisabledDel=!1}}},B={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{"element-loading-text":"加载中。。。"}},[i("aui-card",[i("aui-form",{ref:"QueryForm",attrs:{model:t.QueryForm,rules:t.rules,size:"mini","label-position":"top"}},[i("aui-row",{attrs:{gutter:10}},[i("aui-col",{attrs:{lg:4,md:6}},[i("aui-form-item",{attrs:{label:"机构编号",prop:"branchNum"}},[i("select-tree",{staticStyle:{width:"170px"},attrs:{"single-check":!0,props:{id:"orgno",label:"cname",children:"children"},"tree-data":t.brnoList,placeholder:"请选择机构"},model:{value:t.QueryForm.branchNum,callback:function(e){t.$set(t.QueryForm,"branchNum",e)},expression:"QueryForm.branchNum"}})],1)],1),t._v(" "),i("aui-col",{staticClass:"searchBtnMarginTop",attrs:{lg:2,md:3}},[i("aui-button",{attrs:{type:"primary",size:"mini",icon:"aui-icon-search"},on:{click:t.query}},[t._v("查询")])],1),t._v(" "),i("aui-col",{staticClass:"searchBtnMarginTop",attrs:{lg:2,md:3}},[i("aui-button",{attrs:{type:"warning",size:"mini",icon:"aui-icon-refresh"},on:{click:function(e){t.resetForm("QueryForm")}}},[t._v("重置")])],1)],1)],1)],1),t._v(" "),i("aui-card",{staticStyle:{"margin-top":"10px"}},[i("aui-row",[i("aui-col",{attrs:{lg:2,md:3}},[t.btnPermission("Button_Menu_Add")?i("aui-button",{attrs:{type:"primary",icon:"aui-icon-plus",disabled:t.isDisabledDel,size:"mini"},on:{click:t.clickAdd}},[t._v("新增")]):t._e()],1),t._v(" "),i("aui-col",{attrs:{lg:2,md:3}},[t.btnPermission("Button_Menu_Add")?i("aui-button",{attrs:{type:"primary",icon:"aui-icon-edit",disabled:!t.isDisabledDel,size:"mini"},on:{click:function(e){t.checkPermission("1")}}},[t._v("修改")]):t._e()],1),t._v(" "),i("aui-col",{attrs:{lg:2,md:3}},[t.btnPermission("Button_Menu_Edit")?i("aui-button",{attrs:{type:"danger",icon:"aui-icon-delete",disabled:!t.isDisabledDel,size:"mini"},on:{click:function(e){t.checkPermission()}}},[t._v("删除")]):t._e()],1)],1),t._v(" "),i("aui-table",{ref:"busiTypeList",staticClass:"tableMarginTop",staticStyle:{"min-height":"390px"},attrs:{data:t.busiTypeList,border:"","header-row-class-name":"tableHeaderClass"},on:{"selection-change":t.selectList}},[i("aui-table-column",{attrs:{type:"selection",width:"40px"}}),t._v(" "),i("aui-table-column",{attrs:{prop:"Brno",formatter:t.dataFormat,label:"机构编号","min-width":"247px"}}),t._v(" "),i("aui-table-column",{attrs:{prop:"BsID",label:"业务ID","min-width":"107px"}}),t._v(" "),i("aui-table-column",{attrs:{prop:"BsName",label:"业务名称","min-width":"107px"}}),t._v(" "),i("aui-table-column",{attrs:{prop:"BsAttr",formatter:t.dataFormat,label:"业务分类","min-width":"107px"}}),t._v(" "),i("aui-table-column",{attrs:{prop:"BsStatus",formatter:t.dataFormat,label:"业务状态","min-width":"107px"}})],1),t._v(" "),i("div",{staticStyle:{"text-align":"right","margin-top":"10px"}},[i("aui-pagination",{attrs:{background:"","current-page":t.currentPage,"page-size":t.pageSize,layout:"total, prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)],1),t._v(" "),i("keep-alive",[i(t.dialogList.busiTypeAdd,{tag:"component",attrs:{option:t.dialogOptions},on:{refreshTable:t.query}})],1)],1)},staticRenderFns:[]};var S=i("/Xao")(w,B,!1,function(t){i("52SQ")},"data-v-0e86e5a4",null);e.default=S.exports},cecr:function(t,e,i){var a=i("xEXW");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("8bSs")("881c878a",a,!0)},xEXW:function(t,e,i){(t.exports=i("BkJT")(!1)).push([t.i,"",""])}});