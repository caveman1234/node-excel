webpackJsonp([19],{"69sD":function(e,t,a){"use strict";var i=a("AA3o"),o=a.n(i);t.a=function e(){o()(this,e),this.data={DeviceModel:"",ModuleId:"",ModuleName:""},this.CommCode="IBDeviceManagement",this.SceneCode="DevModuleCreat",this.TransServiceCode="mg-afaservices-dev/devModuleCreat"}},"7eeX":function(e,t,a){var i=a("NT5/");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("8bSs")("56ee47ce",i,!0)},"9P/c":function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,"",""])},DXId:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("3cXf"),o=a.n(i),d=a("0oES"),n=a("pADA"),l=a("69sD"),s=a("Sl6y"),r=(a("mydf"),a("n6OB")),u={data:function(){return{moduleState:[{label:"0-停用",value:"0"},{label:"1-启用",value:"1"}],loading:!1,devBrandInfoList:[],devModuleList:[],devModuleMap:{},addModule:{devModel:"",moduleId:"",moduleName:"",moduleState:""},rules:{devModel:[{required:!0,message:"请选择设备型号",trigger:"change"}],moduleId:[{required:!0,message:"请输入模块编号",trigger:"blur"}],moduleName:[{required:!0,message:"请输入模块名称",trigger:"blur"}]}}},created:function(){},methods:{initDate:function(){var e=this;this.loading=!0;var t=new r.a;t.data.DataKey="DeviceModule",Object(d.a)(t).then(function(t){e.loading=!1,e.devModuleList=t.RspInfo.Result||[],e.devModuleMap=n.a.objArray2Hash(e.devModuleList,"DataKeyVal")}).catch(function(t){e.loading=!1,console.error("查询错误",t)})},openCreate:function(){this.initDate(),"2"==this.createModel.devForm&&this.updateDate()},updateDate:function(){this.addModule.moduleId=this.createModel.currentRow.moduleid,this.addModule.devModel=this.createModel.currentRow.devicemodel,this.addModule.moduleName=this.createModel.currentRow.modulename,this.addModule.moduleState=this.createModel.currentRow.modulestate},modelAdd:function(){var e=this;this.$refs.addModule.validate(function(t){if(!t)return e.loading=!1,e.$aui.message.show({type:"warning",message:"请输入合法的数据！"}),!1;e.loading=!0;var a="1"==e.createModel.devForm?new l.a:new s.a;a.data.ModuleId=e.addModule.moduleId,a.data.DeviceModel=e.addModule.devModel,a.data.ModuleName=e.devModuleMap[e.addModule.moduleId].Meaning,e.createModel.state&&(a.data.ModuleState=e.addModule.moduleState),Object(d.a)(a).then(function(t){var a="1"==e.createModel.devForm?"创建":"修改";e.$aui.message.show({type:"success",message:"设备模块"+a+"成功!"}),e.loading=!1,e.isShow=!1,e.$emit("refreshTableModel")}).catch(function(t){e.loading=!1,e.$aui.message.show({type:"warning",message:t.SYS_HEAD.ReturnMessage+"!"}),console.log(t)})})},clearForm:function(e){this.$refs.addModule.clearValidate(),this.$refs.addModule.resetFields()}},props:{createModel:Object},computed:{isShow:{get:function(){return this.createModel.isShow},set:function(e){this.createModel.isShow=e}}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("aui-dialog",{attrs:{title:e.createModel.title,visible:e.isShow,width:"700px","close-on-click-modal":!1},on:{"update:visible":function(t){e.isShow=t},show:e.openCreate,hide:e.clearForm}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[a("aui-card",[a("aui-form",{ref:"addModule",attrs:{model:e.addModule,"label-width":"100px",rules:e.rules,size:"mini","label-position":"left"}},[a("aui-row",{attrs:{gutter:20}},[a("aui-col",{attrs:{span:12}},[a("aui-form-item",{attrs:{label:"设备型号:",prop:"devModel"}},[a("aui-select",{attrs:{disabled:e.createModel.isDisabled,filterable:"",placeholder:"请选择设备类型"},model:{value:e.addModule.devModel,callback:function(t){e.$set(e.addModule,"devModel",t)},expression:"addModule.devModel"}},e._l(e.createModel.deviceTypeSpinner,function(e){return a("aui-option",{key:e.devicemodel,attrs:{label:e.devicemodel+"-"+e.devicetype,value:e.devicemodel,disabled:e.disabled}})}))],1)],1),e._v(" "),a("aui-col",{attrs:{span:12}},[a("aui-form-item",{attrs:{label:"模块编号:",prop:"moduleId"}},[a("aui-select",{attrs:{disabled:e.createModel.isDisabled,filterable:"",placeholder:"请选择设备模块"},model:{value:e.addModule.moduleId,callback:function(t){e.$set(e.addModule,"moduleId",t)},expression:"addModule.moduleId"}},e._l(e.devModuleList,function(e){return a("aui-option",{key:e.DataKeyVal,attrs:{label:e.DataKeyVal+"-"+e.Meaning,value:e.DataKeyVal}})}))],1)],1)],1),e._v(" "),a("aui-row",{attrs:{gutter:20}},[a("aui-col",{attrs:{span:12}},[e.createModel.state?a("aui-form-item",{attrs:{label:"模块状态:",prop:"moduleState"}},[a("aui-select",{model:{value:e.addModule.moduleState,callback:function(t){e.$set(e.addModule,"moduleState",t)},expression:"addModule.moduleState"}},e._l(e.moduleState,function(e){return a("aui-option",{key:e.value,attrs:{label:e.label,value:e.value,disabled:e.disabled}})}))],1):e._e()],1)],1)],1)],1),e._v(" "),a("aui-row",{staticStyle:{margin:"10px 0","text-align":"right"}},[a("aui-button",{attrs:{size:"mini"},on:{click:function(t){e.isShow=!1}}},[e._v("取消")]),e._v(" "),a("aui-button",{attrs:{type:"primary",size:"mini"},on:{click:e.modelAdd}},[e._v("确认")])],1)],1)])},staticRenderFns:[]};var h=a("/Xao")(u,c,!1,function(e){a("uLP2")},"data-v-7ad485f2",null).exports,m=a("syAl"),v={props:{optionModel:Object},data:function(){return{total:0,modelInfoList:[],pageSize:void 0,currentPage:1,checkedUser:void 0,isDisabledDel:void 0,enum:{0:"0-停用",1:"1-启用"}}},created:function(){this.modelInfoList=this.optionModel.devModelList,this.total=this.optionModel.total,this.enumModule=this.optionModel.enumModule,this.pageSize=m.a.get("PageSize")},beforeUpdate:function(){this.checkedUser=!1,this.isDisabledDel=!1,this.modelInfoList=this.optionModel.devModelList,this.total=this.optionModel.total,this.enumModule=this.optionModel.enumModule},methods:{dataFormat:function(e,t){return this.enum[e[t.property]]},handleCurrentChangeTable:function(e){this.$emit("rowDate",e),1==e.length?(this.checkedUser=!0,this.isDisabledDel=!0):e.length>1?(this.checkedUser=!1,this.isDisabledDel=!0):(this.checkedUser=!1,this.isDisabledDel=!1),this.$emit("isEnabled",this.checkedUser,this.isDisabledDel)},handleCurrentChange:function(e){this.$emit("returnCurrentPage",e)}}},p={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{"visible.sync":"true"}},[a("aui-table",{ref:"modelInfoList",staticClass:"tableMarginTop",attrs:{data:e.modelInfoList,border:"","header-row-class-name":"tableHeaderClass"},on:{"selection-change":e.handleCurrentChangeTable}},[a("aui-table-column",{attrs:{type:"selection",width:"40px"}}),e._v(" "),a("aui-table-column",{attrs:{prop:"devicemodel",label:"设备型号"}}),e._v(" "),a("aui-table-column",{attrs:{prop:"moduleid",label:"模块编号"}}),e._v(" "),a("aui-table-column",{attrs:{prop:"modulename",label:"模块名称"}})],1),e._v(" "),a("div",{staticStyle:{"text-align":"right","margin-top":"20px"}},[a("aui-pagination",{attrs:{background:"","current-page":e.currentPage,"page-size":e.pageSize,layout:"total, prev, pager, next, jumper",total:e.total},on:{"current-change":e.handleCurrentChange}})],1)],1)},staticRenderFns:[]};var g=a("/Xao")(v,p,!1,function(e){a("rkVc")},"data-v-eda6f170",null).exports,M=a("zdBp"),f=a("nUJi"),b=a("nbRB"),y={data:function(){return{devModuleId:"",devForm:[],devModule:[],devBrand:[],pageSize:void 0,currentRow:[],devModuleMgrQueryForm:{moduleId:"",devForm:[],devModel:"",brandId:""},deviceTypeSpinner:[],dialogList:{createModel:h,listDevModel:g},dialogOptionsCreate:{isShow:!1,devForm:""},dialogOptionsMod:{isShow:!1,currentRow:[]},dialogOptionsListGS:{devModelList:[]},loading:!1,currentPage:1,checkedUser:!1,isDisabledDel:!1,checkedModPad:!1,isDisabledDelPad:!1}},created:function(){var e=this,t=new M.a;Object(d.a)(t).then(function(t){e.deviceTypeSpinner=t.RspInfo.pageList||[]}).catch(function(e){console.error("查询错误",e)}),this.pageSize=m.a.get("PageSize")},watch:{devModuleMgrQueryForm:{handler:function(e,t){this.currentPage=1},deep:!0}},methods:{changePage:function(e){this.currentPage=e,this.moduleQuery()},addModel:function(e){this.dialogOptionsCreate.isShow=!0,this.dialogOptionsCreate.devForm=e,this.dialogOptionsCreate.title="新增模块",this.dialogOptionsCreate.isDisabled=!1,this.dialogOptionsCreate.state=!1,this.dialogOptionsCreate.deviceTypeSpinner=JSON.parse(o()(this.deviceTypeSpinner))},updateModel:function(e){this.dialogOptionsCreate.isShow=!0,this.dialogOptionsCreate.devForm=e,this.dialogOptionsCreate.title="修改模块",this.dialogOptionsCreate.isDisabled=!0,this.dialogOptionsCreate.state=!0,this.dialogOptionsCreate.currentRow=this.currentRow},rowDate:function(e){var t=this;this.currentRow=e[0],this.devModuleId="",e.forEach(function(e){t.devModuleId=t.devModuleId+e.moduleid+","}),this.devModuleId=this.devModuleId.slice(0,this.devModuleId.length-1)},isEnabled:function(e,t){this.checkedUser=e,this.isDisabledDel=t},isEnabledPad:function(e,t){this.checkedModPad=e,this.isDisabledDelPad=t},sureDel:function(){var e=this;this.loading=!0;var t=new f.a;t.data.DeviceModel=this.currentRow.devicemodel,t.data.ModuleId=this.devModuleId,Object(d.a)(t).then(function(t){e.loading=!1,e.$aui.message.show({type:"success",message:"设备型号删除成功!"}),e.moduleQuery()}).catch(function(t){e.loading=!1,e.$aui.message.show({type:"info",message:t.SYS_HEAD.ReturnMessage})})},delModelClick:function(){var e=this;this.$aui.confirm.show("此操作将永久删除该设备模块, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.sureDel()}).catch(function(){e.$aui.message.show({type:"info",message:"已取消删除"})})},clearForm:function(e){this.$refs[""+e].resetFields()},handleCurrentChange:function(e){this.currentPage=e},moduleQuery:function(){var e=this;this.loading=!0,this.dialogOptionsListGS.devModelList=[];var t=new b.a;t.data.DeviceModel=this.devModuleMgrQueryForm.devModel,t.data.ModuleId=this.devModuleMgrQueryForm.moduleId,t.data.start=(this.currentPage-1)*this.pageSize,t.data.length=this.pageSize,t.QueryPageNo=this.currentPage,t.QueryRowNum=this.pageSize,Object(d.a)(t).then(function(t){var a=t.RspInfo.recordsTotal?t.RspInfo.recordsTotal:0;e.$set(e.dialogOptionsListGS,"total",a),e.loading=!1,e.dialogOptionsListGS.devModelList=t.RspInfo.pageList}).catch(function(t){e.$set(e.dialogOptionsListGS,"total",0),e.$aui.message.show({type:"success",message:t.SYS_HEAD.ReturnMessage+"!"}),e.loading=!1})}}},w={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"dev-model-manage",attrs:{"element-loading-text":"加载中。。。"}},[a("aui-card",[a("aui-form",{ref:"devModuleMgrQueryForm",attrs:{model:e.devModuleMgrQueryForm,size:"mini","label-position":"top"}},[a("aui-row",{attrs:{gutter:10}},[a("aui-col",{attrs:{lg:4,md:6}},[a("aui-form-item",{staticClass:"typeInfo-aui-form-item",attrs:{label:"设备型号",prop:"devModel"}},[a("aui-select",{attrs:{filterable:"",placeholder:"请选择设备类型"},model:{value:e.devModuleMgrQueryForm.devModel,callback:function(t){e.$set(e.devModuleMgrQueryForm,"devModel",t)},expression:"devModuleMgrQueryForm.devModel"}},e._l(e.deviceTypeSpinner,function(e){return a("aui-option",{key:e.devicemodel,attrs:{label:e.devicemodel+"-"+e.devicetype,value:e.devicemodel,disabled:e.disabled}})}))],1)],1),e._v(" "),a("aui-col",{attrs:{lg:4,md:6}},[a("aui-form-item",{staticClass:"typeInfo-aui-form-item",attrs:{label:"模块编号",prop:"moduleId"}},[a("aui-input",{attrs:{placeholder:"请输入模块编号"},model:{value:e.devModuleMgrQueryForm.moduleId,callback:function(t){e.$set(e.devModuleMgrQueryForm,"moduleId",t)},expression:"devModuleMgrQueryForm.moduleId"}})],1)],1),e._v(" "),a("aui-col",{staticClass:"searchBtnMarginTop",attrs:{lg:2,md:3}},[a("aui-button",{attrs:{type:"primary",size:"mini",icon:"aui-icon-search",loading:e.loading},on:{click:e.moduleQuery}},[e._v("查询")])],1),e._v(" "),a("aui-col",{staticClass:"searchBtnMarginTop",attrs:{lg:2,md:3}},[a("aui-button",{attrs:{type:"warning",size:"mini",icon:"aui-icon-refresh"},on:{click:function(t){e.clearForm("devModuleMgrQueryForm")}}},[e._v("重置")])],1)],1)],1)],1),e._v(" "),a("aui-card",{staticStyle:{"margin-top":"10px","min-height":"500px"}},[a("keep-alive",[a(e.dialogList.listDevModel,{tag:"component",attrs:{optionModel:e.dialogOptionsListGS},on:{returnCurrentPage:e.changePage,rowDate:e.rowDate,isEnabled:e.isEnabled}})],1)],1),e._v(" "),a("keep-alive",[a(e.dialogList.createModel,{tag:"component",attrs:{createModel:e.dialogOptionsCreate},on:{refreshTableModel:e.moduleQuery}})],1)],1)},staticRenderFns:[]};var S=a("/Xao")(y,w,!1,function(e){a("7eeX")},"data-v-47c9cad3",null);t.default=S.exports},"NT5/":function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,"\n.el-table__body-wrapper[data-v-47c9cad3] {\n  overflow: hidden !important;\n}\n.dialog-text[data-v-47c9cad3] {\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  color: red;\n  font-size: 18px;\n}\n.listEdit[data-v-47c9cad3] {\n  text-align: right;\n}\n.listEdit a[data-v-47c9cad3] {\n    margin: 5px;\n}\n.demo-table-expand .aui-form-item[data-v-47c9cad3] {\n  margin-bottom: 5px;\n}\n.editClass input.el-input__inner[data-v-47c9cad3] {\n  border: none;\n  background: rgba(0, 0, 0, 0) !important;\n}\n.fade-enter-active[data-v-47c9cad3],\n.fade-leave-active[data-v-47c9cad3] {\n  -webkit-transition: opacity 0.6s;\n  transition: opacity 0.6s;\n}\n.fade-enter[data-v-47c9cad3],\n.fade-leave-to[data-v-47c9cad3] {\n  opacity: 0;\n}\n",""])},Sl6y:function(e,t,a){"use strict";var i=a("AA3o"),o=a.n(i);t.a=function e(){o()(this,e),this.data={DeviceModel:"",ModuleId:"",ModuleName:""},this.CommCode="IBDeviceManagement",this.SceneCode="DevModuleUpdate",this.TransServiceCode="mg-afaservices-dev/devModuleUpdate"}},elRe:function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,"\n.modelBox[data-v-7ad485f2] {\n  height: 125px;\n  overflow: auto;\n}\n.modelBox[data-v-7ad485f2]::-webkit-scrollbar {\n  display: none;\n}\n.content[data-v-7ad485f2] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.aui-checkbox[data-v-7ad485f2] {\n  margin-left: 5px;\n}\n",""])},nUJi:function(e,t,a){"use strict";var i=a("AA3o"),o=a.n(i);t.a=function e(){o()(this,e),this.data={DeviceModel:"",ModuleId:""},this.CommCode="IBDeviceManagement",this.SceneCode="DevModuleDelete",this.TransServiceCode="mg-afaservices-dev/devModuleDelete"}},nbRB:function(e,t,a){"use strict";var i=a("AA3o"),o=a.n(i);t.a=function e(){o()(this,e),this.data={DeviceModel:"",ModuleId:"",length:"99999",start:"0",draw:"2"},this.CommCode="IBDeviceManagement",this.SceneCode="DevModuleQuery",this.TransServiceCode="mg-afaservices-dev/devModuleQuery"}},rkVc:function(e,t,a){var i=a("9P/c");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("8bSs")("5c2f3997",i,!0)},uLP2:function(e,t,a){var i=a("elRe");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("8bSs")("441b3e11",i,!0)}});