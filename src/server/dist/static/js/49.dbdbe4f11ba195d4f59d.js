webpackJsonp([49],{"68xk":function(e,t,i){(e.exports=i("BkJT")(!1)).push([e.i,"",""])},Cq3d:function(e,t,i){var a=i("x6N/");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i("8bSs")("1deb6dca",a,!0)},jQnO:function(e,t,i){var a=i("68xk");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i("8bSs")("3537d74c",a,!0)},lfPn:function(e,t,i){"use strict";var a=i("AA3o"),o=i.n(a);t.a=function e(){o()(this,e),this.data={Brno:"",CurtPage:"",PageSize:"",StartRows:"",BusiOper:"Q"},this.BusiDataKey="sel_dev_rlt",this.TransServiceCode="ib-dbcomm/dbComm"}},nIgM:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("0oES"),o=i("AA3o"),r=i.n(o),s=function e(){r()(this,e),this.data={BusiOper:"A",Brno:"",QueueNum:"",DeviceModel:"",DeviceNum:"",ParamID:"",DevicePwd:"",CloseTime:"",IpAddr:""},this.BusiDataKey="sel_dev_insert",this.TransServiceCode="ib-dbcomm/dbComm"},n=function e(){r()(this,e),this.data={},this.BusiDataKey="sel_que_info1",this.TransServiceCode="ib-dbcomm/dbComm"},u=function e(){r()(this,e),this.data={},this.BusiDataKey="sel_que_info2",this.TransServiceCode="ib-dbcomm/dbComm"},l=function e(){r()(this,e),this.data={BusiOper:"M",ParamID:"",Brno:"",QueueNum:"",DeviceModel:"",DeviceNum:"",DevicePwd:"",CloseTime:"",IpAddr:"",TradeCode:"QueueParam"},this.BusiDataKey="upd_dev_Para",this.TransServiceCode="ib-dbcomm/dbComm"},c=i("pADA"),d=i("syAl"),m=function e(){r()(this,e),this.data={BusiOper:"Q",Brno:""},this.BusiDataKey="sel_queparam",this.TransServiceCode="ib-dbcomm/dbComm"},h=function e(){r()(this,e),this.data={AppNum:"CQ",BusiOper:"Q"},this.BusiDataKey="sel_app_devtype",this.TransServiceCode="ib-dbcomm/dbComm"},p=i("XDsu"),g={props:{option:Object},data:function(){return{loading:!1,devModelList:[],deviceNumList:[],queueParamList:[],form:{brno:"",queueNum:"1",deviceModel:"",deviceNum:"",queueParam:"",queuePwd:""},rules:{brno:[{required:!0,message:"请选择机构编号",trigger:"change"}],deviceModel:[{required:!0,message:"请选择设备型号",trigger:"change"}],deviceNum:[{required:!0,message:"请选择设备编号",trigger:"change"}],queueParam:[{required:!0,message:"请选择排队机参数",trigger:"change"}],queueNum:[{required:!0,message:"请输入排队机编号",trigger:"blur"}],queuePwd:[{required:!0,message:"请输入设备密码",trigger:"blur"}]}}},created:function(){this.defaultList=c.a.objToArray(d.a.get("isDefault")),this.callVoiceList=c.a.objToArray(d.a.get("callVoice")),this.isDplyWaitList=c.a.objToArray(d.a.get("isShow"))},methods:{openUpdate:function(){var e=this;this.loading=!0,this.$nextTick(function(){e.deviceModelLoad(),"2"==e.option.mark?(e.setData(),e.queueParamLoad(),e.devIdBlur(),e.setData()):(e.$refs.form.clearValidate(),e.loading=!1)})},deviceModelLoad:function(){var e=this,t=new h;Object(a.a)(t).then(function(t){e.devModelList=t.RspInfo.Result||[]}).catch(function(t){e.$aui.message.show({type:"warning",message:t.SYS_HEAD.ReturnMessage}),console.error("查询错误",t)})},setData:function(){this.form.brno=this.option.currentRow.Brno,this.form.queueParam=this.option.currentRow.ParamID,this.form.queueNum=this.option.currentRow.QueueNum,this.form.deviceModel=this.option.currentRow.DeviceModel,this.form.queuePwd=this.option.currentRow.DevicePwd,this.form.deviceNum=this.option.currentRow.DeviceNum},closeUpdete:function(){this.$refs.form.resetFields(),this.$refs.form.clearValidate(),this.queueParamList=[]},queueParamLoad:function(){var e=this;this.loading=!0,this.form.queueParam="";var t=new m;t.data.Brno=this.form.brno,Object(a.a)(t).then(function(t){e.loading=!1,e.queueParamList=t.RspInfo.Result||[]}).catch(function(t){e.queueParamList=[],e.$aui.message.show({type:"warning",message:t.SYS_HEAD.ReturnMessage}),e.loading=!1})},ItemUpdate:function(){var e=this;this.$refs.form.validate(function(t){if(t){e.loading=!0;var i="1"==e.option.mark?new n:new u;i.data.Brno=e.form.brno,i.data.ParamID=e.form.queueParam,i.data.QueueNum=e.form.queueNum,i.data.DeviceModel=e.form.deviceModel,i.data.DeviceNum=e.form.deviceNum,Object(a.a)(i).then(function(t){if("000000"==t.SYS_HEAD.ReturnCode){var i="1"==e.option.mark?"排队机编号或设备编号已存在":"设备编号已存在";e.$aui.message.show({type:"warning",message:i}),e.loading=!1}else e.submit()}).catch(function(t){e.$aui.message.show({type:"warning",message:t.SYS_HEAD.ReturnMessage}),e.loading=!1})}})},submit:function(){var e=this,t="1"==this.option.mark?new s:new l;t.data.Brno=this.form.brno,t.data.ParamID=this.form.queueParam,t.data.QueueNum=this.form.queueNum,t.data.DeviceModel=this.form.deviceModel,t.data.DeviceNum=this.form.deviceNum,t.data.DevicePwd=this.form.queuePwd,Object(a.a)(t).then(function(t){var i="1"==e.option.mark?"创建":"修改";e.$aui.message.show({type:"success",message:i+"成功!"}),e.$emit("refreshTable"),e.option.isShow=!1,e.loading=!1}).catch(function(t){e.$aui.message.show({type:"warning",message:t.SYS_HEAD.ReturnMessage}),e.loading=!1})},devIdBlur:function(){var e=this;if(""==this.form.brno)return this.form.deviceModel="",void this.$aui.message.show({type:"warning",message:"请先选择机构号！"});this.loading=!0,this.form.deviceNum="";var t=new p.a;t.data.DeviceModel=this.form.deviceModel,t.data.AscrBranch=this.form.brno,t.data.start=0,t.data.length=99999,t.data.draw=2,Object(a.a)(t).then(function(t){e.deviceNumList=t.RspInfo.pageList||[],e.loading=!1}).catch(function(t){e.$aui.message.show({type:"warning",message:"该型号下没有设备!"}),e.deviceNumList=[],e.loading=!1})}}},f={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("aui-dialog",{attrs:{title:e.option.title,visible:e.option.isShow,width:"800px","close-on-click-modal":!1},on:{"update:visible":function(t){e.$set(e.option,"isShow",t)},show:e.openUpdate,hide:e.closeUpdete}},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[i("aui-card",[i("aui-form",{ref:"form",attrs:{model:e.form,size:"mini",rules:e.rules,"label-width":"140px","label-position":"right"}},[i("aui-row",{attrs:{gutter:40}},[i("aui-col",{attrs:{span:12}},[i("aui-form-item",{attrs:{label:"机构编号:",prop:"brno"}},[i("aui-select",{attrs:{disabled:e.option.isDisabled,filterable:"",placeholder:"请选择机构编号"},on:{change:e.queueParamLoad},model:{value:e.form.brno,callback:function(t){e.$set(e.form,"brno",t)},expression:"form.brno"}},e._l(e.option.branchNum,function(e){return i("aui-option",{key:e.orgno,attrs:{label:e.cname,value:e.orgno,disabled:e.disabled}})}))],1)],1),e._v(" "),i("aui-col",{attrs:{span:12}},[i("aui-form-item",{attrs:{label:"排队机编号:",prop:"queueNum",disabled:"option.isDisabled"}},[i("aui-input",{attrs:{disabled:e.option.isDisabled,picture:"999"},model:{value:e.form.queueNum,callback:function(t){e.$set(e.form,"queueNum",t)},expression:"form.queueNum"}})],1)],1)],1),e._v(" "),i("aui-row",{attrs:{gutter:40}},[i("aui-col",{attrs:{span:12}},[i("aui-form-item",{attrs:{label:"设备型号",prop:"deviceModel"}},[i("aui-select",{attrs:{placeholder:"请选择设备型号"},on:{change:e.devIdBlur},model:{value:e.form.deviceModel,callback:function(t){e.$set(e.form,"deviceModel",t)},expression:"form.deviceModel"}},e._l(e.devModelList,function(e){return i("aui-option",{key:e.DeviceModel,attrs:{label:e.DeviceModel+"-"+e.DeviceType,value:e.DeviceModel,disabled:e.disabled}})}))],1)],1),e._v(" "),i("aui-col",{attrs:{span:12}},[i("aui-form-item",{attrs:{label:"设备编号:",prop:"deviceNum"}},[i("aui-select",{attrs:{placeholder:"请选择设备编号"},model:{value:e.form.deviceNum,callback:function(t){e.$set(e.form,"deviceNum",t)},expression:"form.deviceNum"}},e._l(e.deviceNumList,function(e){return i("aui-option",{key:e.devicenum,attrs:{label:e.devicenum,value:e.devicenum,disabled:e.disabled}})}))],1)],1)],1),e._v(" "),i("aui-row",{attrs:{gutter:40}},[i("aui-col",{attrs:{span:12}},[i("aui-form-item",{attrs:{label:"排队机参数",prop:"queueParam"}},[i("aui-select",{attrs:{placeholder:"请选择排队机参数"},model:{value:e.form.queueParam,callback:function(t){e.$set(e.form,"queueParam",t)},expression:"form.queueParam"}},e._l(e.queueParamList,function(e){return i("aui-option",{key:e.ParamID,attrs:{label:e.ParamID,value:e.ParamID,disabled:e.disabled}})}))],1)],1)],1)],1)],1),e._v(" "),i("aui-row",{staticStyle:{margin:"20px 0","text-align":"right"}},[i("aui-button",{attrs:{size:"mini"},on:{click:function(t){e.option.isShow=!1}}},[e._v("返回")]),e._v(" "),i("aui-button",{attrs:{type:"primary",size:"mini"},on:{click:e.ItemUpdate}},[e._v("确定")])],1)],1)])],1)},staticRenderFns:[]};var b=i("/Xao")(g,f,!1,function(e){i("jQnO")},null,null).exports,v=i("0VOF"),w=function e(){r()(this,e),this.data={Brno:"",DeviceNum:"",DeviceModel:"",ParamID:"",BusiOper:"D"},this.BusiDataKey="del_devpara",this.TransServiceCode="ib-dbcomm/dbComm"},y=i("lfPn"),D={name:"queueInfoManage",components:{selectTree:i("tzsN").a},data:function(){return{currentRow:[],QueryForm:{branchNum:[]},branchNum:[],brnoList:[],defaultMap:{},callVoiceMap:{},isShowMap:{},total:void 0,busiTypeList:[],brnoMap:{},permission:{},loading:!1,isDisabledDel:!1,dialogList:{dialogAdd:b},dialogOptions:{isShow:!1},currentPage:1,pageSize:void 0,rules:{branchNum:[{required:!0,message:"请选择机构编号",trigger:"change"}]}}},created:function(){this.pageSize=d.a.get("PageSize"),this.defaultMap=d.a.get("isDefault"),this.callVoiceMap=d.a.get("callVoice"),this.isShowMap=d.a.get("isShow"),this.queryBranchNum()},watch:{"QueryForm.branchNum":function(e){this.$refs.QueryForm.clearValidate()}},computed:{},methods:{queryBranchNum:function(){var e=this;this.loading=!0;var t=new v.a;t.data.orgno=this.$store.getters.BranchNum,Object(a.a)(t).then(function(t){e.loading=!1,e.branchNum=t.RspInfo.Result||[],e.brnoMap=t.RspInfo.orgMap||{},e.permission=c.a.objArray2Hash(e.branchNum,"orgno"),e.brnoList=c.a.formatTreeData(e.branchNum,"orgno","superno"),e.QueryForm.branchNum.push(e.brnoList[0].orgno)}).catch(function(t){e.loading=!1,e.$aui.message.show({type:"warning",message:t.SYS_HEAD.ReturnMessage}),console.error("查询错误",t)})},dataFormat:function(e,t){if("Brno"==t.property)return e[t.property]+"-"+this.brnoMap[e[t.property]];if("DefaultFlag"==t.property)return this.defaultMap[e[t.property]];if("CallVoice"==t.property){console.log("1");for(var i=e[t.property].split(","),a=0;a<i.length;a++)i[a]=this.callVoiceMap[i[a]];return i.join(",")}return"IsDplyWait"==t.property?this.isShowMap[e[t.property]]:void 0},clickAdd:function(){this.dialogOptions.isShow=!0,this.dialogOptions.title="新增排队机信息",this.dialogOptions.mark="1",this.dialogOptions.isDisabled=!1,this.dialogOptions.branchNum=this.branchNum,this.dialogOptions.busiTypeList=this.busiTypeList},clickUpdate:function(){this.dialogOptions.isShow=!0,this.dialogOptions.title="修改排队机信息",this.dialogOptions.mark="2",this.dialogOptions.isDisabled=!0,this.dialogOptions.currentRow=this.currentRow,this.dialogOptions.branchNum=this.branchNum},checkPermission:function(e){this.permission[this.currentRow.Brno]?e?this.clickUpdate():this.delBut():this.$aui.message.show({type:"warning",message:"权限不足,无法修改！"})},resetForm:function(){this.busiTypeList=[],this.total=0,this.$refs.QueryForm.resetFields()},delBut:function(){var e=this;this.$aui.confirm.show("此操作将永久删除该排队机信息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.orgQueueDel()}).catch(function(){e.$aui.message.show({type:"info",message:"已取消删除"})})},orgQueueDel:function(){var e=this;this.loading=!0;var t=new w;t.data.Brno=this.currentRow.Brno,t.data.DeviceNum=this.currentRow.DeviceNum,t.data.DeviceModel=this.currentRow.DeviceModel,t.data.ParamID=this.currentRow.ParamID,Object(a.a)(t).then(function(t){e.loading=!1,e.$aui.message.show({type:"success",message:"排队机信息删除成功！"}),e.query()}).catch(function(t){e.$aui.message.show({type:"warning",message:t.SYS_HEAD.ReturnMessage}),e.loading=!1,console.log(t)})},query:function(){var e=this;this.$refs.QueryForm.validate(function(t){if(t){e.loading=!0;var i=new y.a;i.data.Brno=e.QueryForm.branchNum[0],i.data.PageSize=e.pageSize+"",i.data.CurtPage=e.currentPage+"",i.data.StartRows=(e.currentPage-1)*e.pageSize+"",Object(a.a)(i).then(function(t){e.loading=!1,e.busiTypeList=t.RspInfo.Result||[],e.total=t.RspInfo.totalNum||0,"0"===e.total&&e.$aui.message.show({type:"warning",message:"无满足条件的记录！"})}).catch(function(t){e.busiTypeList=[],e.total=0,e.loading=!1,e.$aui.message.show({type:"warning",message:"错误信息："+t.SYS_HEAD.ReturnMessage})})}})},handleCurrentChange:function(e){this.currentPage=e,this.query()},selectList:function(e){1==e.length?(this.isDisabledDel=!0,this.currentRow=e[0]):e.length>1?this.$refs.busiTypeList.toggleRowSelection(e[0]):this.isDisabledDel=!1}}},_={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"加载中。。。"}},[i("aui-card",[i("aui-form",{ref:"QueryForm",attrs:{model:e.QueryForm,rules:e.rules,size:"mini","label-position":"top"}},[i("aui-row",{attrs:{gutter:10}},[i("aui-col",{attrs:{lg:4,md:6}},[i("aui-form-item",{attrs:{label:"机构编号",prop:"branchNum"}},[i("select-tree",{staticStyle:{width:"170px"},attrs:{"single-check":!0,props:{id:"orgno",label:"cname",children:"children"},"tree-data":e.brnoList,placeholder:"请选择机构"},model:{value:e.QueryForm.branchNum,callback:function(t){e.$set(e.QueryForm,"branchNum",t)},expression:"QueryForm.branchNum"}})],1)],1),e._v(" "),i("aui-col",{staticClass:"searchBtnMarginTop",attrs:{lg:2,md:3}},[i("aui-button",{attrs:{type:"primary",size:"mini",icon:"aui-icon-search"},on:{click:e.query}},[e._v("查询")])],1),e._v(" "),i("aui-col",{staticClass:"searchBtnMarginTop",attrs:{lg:2,md:3}},[i("aui-button",{attrs:{type:"warning",size:"mini",icon:"aui-icon-refresh"},on:{click:function(t){e.resetForm("QueryForm")}}},[e._v("重置")])],1)],1)],1)],1),e._v(" "),i("aui-card",{staticStyle:{"margin-top":"10px"}},[i("aui-row",[i("aui-col",{attrs:{lg:2,md:3}},[e.btnPermission("Button_Menu_Add")?i("aui-button",{attrs:{type:"primary",icon:"aui-icon-plus",disabled:e.isDisabledDel,size:"mini"},on:{click:e.clickAdd}},[e._v("新增")]):e._e()],1),e._v(" "),i("aui-col",{attrs:{lg:2,md:3}},[e.btnPermission("Button_Menu_Add")?i("aui-button",{attrs:{type:"primary",icon:"aui-icon-edit",disabled:!e.isDisabledDel,size:"mini"},on:{click:function(t){e.checkPermission("1")}}},[e._v("修改")]):e._e()],1),e._v(" "),i("aui-col",{attrs:{lg:2,md:3}},[e.btnPermission("Button_Menu_Edit")?i("aui-button",{attrs:{type:"danger",icon:"aui-icon-delete",disabled:!e.isDisabledDel,size:"mini"},on:{click:function(t){e.checkPermission()}}},[e._v("删除")]):e._e()],1)],1),e._v(" "),i("aui-table",{ref:"busiTypeList",staticClass:"tableMarginTop",staticStyle:{"min-height":"390px"},attrs:{data:e.busiTypeList,border:"","header-row-class-name":"tableHeaderClass"},on:{"selection-change":e.selectList}},[i("aui-table-column",{attrs:{type:"selection",width:"40px"}}),e._v(" "),i("aui-table-column",{attrs:{prop:"Brno",formatter:e.dataFormat,label:"机构编号","min-width":"247px"}}),e._v(" "),i("aui-table-column",{attrs:{prop:"QueueNum",label:"排队机编号","min-width":"147px"}}),e._v(" "),i("aui-table-column",{attrs:{prop:"DeviceModel",label:"设备型号","min-width":"117px"}}),e._v(" "),i("aui-table-column",{attrs:{prop:"DeviceNum",label:"设备编号","min-width":"107px"}}),e._v(" "),i("aui-table-column",{attrs:{prop:"ParamID",label:"排队机参数","min-width":"117px"}})],1),e._v(" "),i("div",{staticStyle:{"text-align":"right","margin-top":"10px"}},[i("aui-pagination",{attrs:{background:"","current-page":e.currentPage,"page-size":10,layout:"total, prev, pager, next, jumper",total:e.total},on:{"current-change":e.handleCurrentChange}})],1)],1)],1),e._v(" "),i("keep-alive",[i(e.dialogList.dialogAdd,{tag:"component",attrs:{option:e.dialogOptions},on:{refreshTable:e.query}})],1)],1)},staticRenderFns:[]};var N=i("/Xao")(D,_,!1,function(e){i("Cq3d")},"data-v-0284aab3",null);t.default=N.exports},"x6N/":function(e,t,i){(e.exports=i("BkJT")(!1)).push([e.i,"",""])}});