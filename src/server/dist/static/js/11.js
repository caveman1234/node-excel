webpackJsonp([11],{"/fKS":function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,"\n.content[data-v-1149a5f8] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.require[data-v-1149a5f8] {\n  color: red;\n}\n.dialog-text[data-v-1149a5f8] {\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  color: red;\n  font-size: 18px;\n}\n.role[data-v-1149a5f8] {\n  width: 95%;\n  border: 1px solid #eee;\n  border-radius: 4px;\n  height: 290px;\n}\n.role .roleHeader[data-v-1149a5f8] {\n    color: #606266;\n    font-weight: 500;\n    font-size: 14px;\n    background: #f5f7fa;\n    height: 42px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding: 9px;\n    overflow-y: auto;\n}\n.aui-dialog__body[data-v-1149a5f8] {\n  padding: 20px;\n  padding-top: 10px;\n}\n.aui-card[data-v-1149a5f8] {\n  overflow: inherit;\n}\n",""])},D6TH:function(e,t,a){"use strict";var i=a("AA3o"),n=a.n(i);t.a=function e(){n()(this,e),this.data={Brno:"",BusiOper:"Q",CurtPage:1,PageSize:99999,StartRows:0,QueueTpID:""},this.BusiDataKey="selQueueTp1",this.TransServiceCode="ib-dbcomm/dbComm"}},JpTi:function(e,t,a){var i=a("codS");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("8bSs")("19b770f7",i,!0)},LBDg:function(e,t,a){"use strict";var i=a("AA3o"),n=a.n(i);t.a=function e(){n()(this,e),this.data={DataKey:"DICT",BusiOper:"Q",DataKeyVal:"",CurtPage:"1",PageSize:"99999",StartRows:"4"},this.BusiDataKey="sel_t_datadict",this.TransServiceCode="ib-dbcomm/dbComm"}},R6n5:function(e,t,a){var i=a("u0O4");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("8bSs")("e57b1c26",i,!0)},Unwb:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("0oES"),n=a("pADA"),o=a("syAl"),r=a("fCv1"),s=(a("LBDg"),a("AA3o")),u=a.n(s),l=function e(){u()(this,e),this.data={Brno:"",QueueTpId:"",WaitNumThreshold:"",WaitTimeThreshold:"",BusiOper:"A",TransCode:"QueMonMgr"},this.BusiDataKey="add_queMonitor",this.TransServiceCode="ib-dbcomm/dbComm"},d=function e(){u()(this,e),this.data={Brno:"",QueueTpId:"",CurtPage:"",PageSize:"",StartRows:"",BusiOper:"Q"},this.BusiDataKey="sel_queMonitor",this.TransServiceCode="ib-dbcomm/dbComm"},c=function e(){u()(this,e),this.data={Brno:"",QueueTpId:"",WaitNumThreshold:"",WaitTimeThreshold:"",BusiOper:"M",TransCode:"QueMonMgr"},this.BusiDataKey="Mod_queMonitor",this.TransServiceCode="ib-dbcomm/dbComm"},p=(a("96Uj"),function e(){u()(this,e),this.data={Brno:"",BusiOper:"Q",CurtPage:1,PageSize:99999,StartRows:0,QueueTpID:""},this.BusiDataKey="selQueueTp2",this.TransServiceCode="ib-dbcomm/dbComm"}),h=function e(){u()(this,e),this.data={CacheId:"cq_qm_queuemon_info"},this.BusiDataKey="upd_cache",this.TransServiceCode="ib-dbcomm/dbComm"},m={name:"",data:function(){return{loading:!1,queueTpIdList:[],form:{waitTimeThreshold:0,waitNumThreshold:0,queueTpId:"",brno:""},rules:{brno:[{required:!0,message:"请选择机构编号",trigger:"change"}],queueTpId:[{required:!0,message:"请选择队列类型ID",trigger:"change"}],waitNumThreshold:[{required:!0,message:"队列人数预警阈值不能为空",trigger:"blur"},{validator:r.f,trigger:"blur"}],waitTimeThreshold:[{required:!0,message:"队列等待时间预警阈值不能为空",trigger:"blur"},{validator:r.f,trigger:"blur"}]}}},props:{option:Object},components:{},computed:{isShow:{get:function(){return this.option.isShow},set:function(e){this.option.isShow=e}}},created:function(){},methods:{queryQueueTpId:function(){var e=this;this.loading=!0,this.form.queueTpId="";var t=new p;t.data.Brno=this.form.brno,t.data.CurtPage=1,t.data.PageSize=99999,t.data.StartRows=0,Object(i.a)(t).then(function(t){console.log("======",t),e.queueTpIdList=t.RspInfo.Result||[],e.loading=!1}).catch(function(t){e.loading=!1,e.queueTpIdList=[],e.$aui.message.show({type:"warning",message:t.SYS_HEAD.ReturnMessage}),console.error("查询错误",t)})},queryData:function(){var e=this;this.$refs.form.validate(function(t){if(t)if("1"==e.option.mark){e.loading=!0;var a=new d;a.data.Brno=e.form.brno,a.data.QueueTpId=e.form.queueTpId,Object(i.a)(a).then(function(t){e.loading=!1,t.RspInfo.Result?e.$aui.message.show({type:"warning",message:"该数据已存在!"}):e.commit()}).catch(function(t){e.loading=!1,e.$aui.message.show({type:"error",message:t.SYS_HEAD.ReturnMessage})})}else e.commit()})},commit:function(){var e=this,t=new h;Object(i.a)(t),this.loading=!0;var a="1"==this.option.mark?new l:new c;a.data.Brno=this.form.brno;var n=this.form.queueTpId.split("-");a.data.QueueTpId=n[0],a.data.QueueTpName=n[1],a.data.WaitNumThreshold=this.form.waitNumThreshold,a.data.WaitTimeThreshold=this.form.waitTimeThreshold,Object(i.a)(a).then(function(t){console.log("---------- ",t);var a="1"==e.option.mark?"创建":"修改";e.$aui.message.show({type:"success",message:a+"成功！"}),e.$emit("refreshTable"),e.isShow=!1,e.loading=!1}).catch(function(t){e.$aui.message.show({type:"warning",message:"新增失败!"+t.SYS_HEAD.ReturnMessage}),e.loading=!1})},openCreate:function(){var e=this;this.$nextTick(function(){"2"==e.option.mark?e.setData():(e.$refs.form.clearValidate(),e.$refs.form.resetFields())})},setData:function(){this.form.brno=this.option.currentRow.Brno,this.queryQueueTpId(),this.form.queueTpId=this.option.currentRow.QueueTpId,this.form.waitNumThreshold=this.option.currentRow.WaitNumThreshold,this.form.waitTimeThreshold=this.option.currentRow.WaitTimeThreshold},closeUser:function(){this.$refs.form.resetFields(),this.$refs.form.clearValidate()},addType:function(){this.option.isShow=!1,this.$refs.form.clearValidate()}}},g={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("aui-dialog",{attrs:{title:e.option.title,visible:e.isShow,width:"890px","close-on-click-modal":!1,center:""},on:{hide:e.closeUser,"update:visible":function(t){e.isShow=t},show:e.openCreate}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[a("div",{staticClass:"content"},[a("aui-card",[a("aui-form",{ref:"form",attrs:{size:"mini",model:e.form,rules:e.rules,inline:"","label-width":"140px","label-position":"right"}},[a("aui-row",{attrs:{gutter:10}},[a("aui-col",{attrs:{span:12}},[a("aui-form-item",{attrs:{label:"机构编号:",prop:"brno"}},[a("aui-select",{attrs:{disabled:e.option.isDisabled,filterable:"",placeholder:"请选择机构编号"},on:{change:e.queryQueueTpId},model:{value:e.form.brno,callback:function(t){e.$set(e.form,"brno",t)},expression:"form.brno"}},e._l(e.option.branchNum,function(e){return a("aui-option",{key:e.orgno,attrs:{label:e.cname,value:e.orgno,disabled:e.disabled}})}))],1)],1),e._v(" "),a("aui-col",{attrs:{span:12}},[a("aui-form-item",{attrs:{prop:"queueTpId",label:"队列类型ID"}},[a("aui-select",{attrs:{disabled:e.option.isDisabled,filterable:"",placeholder:"请选择队列类型ID"},model:{value:e.form.queueTpId,callback:function(t){e.$set(e.form,"queueTpId",t)},expression:"form.queueTpId"}},e._l(e.queueTpIdList,function(e){return a("aui-option",{key:e.QueueTpID,attrs:{label:e.QueueTpID+"-"+e.QueueTpName,value:e.QueueTpID+"-"+e.QueueTpName,disabled:e.disabled}})}))],1)],1),e._v(" "),a("aui-col",{attrs:{span:12}},[a("aui-form-item",{attrs:{prop:"waitNumThreshold",label:"队列人数预警阈值"}},[a("aui-input-number",{attrs:{min:1,max:999},model:{value:e.form.waitNumThreshold,callback:function(t){e.$set(e.form,"waitNumThreshold",e._n(t))},expression:"form.waitNumThreshold"}})],1)],1),e._v(" "),a("aui-col",{attrs:{span:12}},[a("aui-form-item",{attrs:{prop:"waitTimeThreshold",label:"队列等待时间预警阈值"}},[a("aui-input-number",{attrs:{min:1,max:999},model:{value:e.form.waitTimeThreshold,callback:function(t){e.$set(e.form,"waitTimeThreshold",e._n(t))},expression:"form.waitTimeThreshold"}})],1)],1)],1)],1)],1),e._v(" "),a("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[a("aui-button",{attrs:{type:"primary",size:"mini"},on:{click:e.queryData}},[e._v("确认")]),e._v(" "),a("aui-button",{attrs:{size:"mini"},on:{click:e.addType}},[e._v("取消")])],1)],1)])])],1)},staticRenderFns:[]};var f=a("/Xao")(m,g,!1,function(e){a("R6n5")},"data-v-015f9dd0",null).exports,b=function e(){u()(this,e),this.data={Brno:"",QueueTpID:"",CustGrd:"",WaitTime:"",BusiOper:"A"},this.BusiDataKey="ins_queMoitorExt",this.TransServiceCode="ib-dbcomm/dbComm"},v=function e(){u()(this,e),this.data={Brno:"",QueueTpId:"",CurtPage:"",PageSize:"",StartRows:"",BusiOper:"Q"},this.BusiDataKey="sel_queMoitorExt",this.TransServiceCode="ib-dbcomm/dbComm"},w={name:"",data:function(){return{BusinessList:[],AppNumList:[],loading:!1,form:{brno:"",queueTpId:"",custGrd:"",WaitTime:""},rules:{brno:[{required:!0,message:"机构号不能为空",trigger:"blur"}],queueTpId:[{required:!0,message:"队列类型ID不能为空",trigger:"blur"}],custGrd:[{required:!0,message:"请选择客户综合评级",trigger:"change"}],WaitTime:[{required:!0,message:"等待时间不能为空",trigger:"blur"},{validator:r.f,trigger:"blur"}]}}},props:{option:Object},components:{},computed:{isShow:{get:function(){return this.option.isShow},set:function(e){this.option.isShow=e}}},created:function(){},methods:{add:function(){var e=this;this.$refs.form.validate(function(t){if(t){e.loading=!0;var a=new v;a.data.Brno=e.form.brno,a.data.QueueTpID=e.form.queueTpId,a.data.CustGrd=e.form.custGrd,a.data.CurtPage=1,a.data.PageSize=1,a.data.StartRows=0,Object(i.a)(a).then(function(t){null!=t.RspInfo.Result?(e.$aui.message.show({type:"warning",message:"数据已存在!"}),e.loading=!1):e.add1()})}else e.loading=!1,e.$aui.message.show({type:"warning",message:"请输入合法数据!"})})},add1:function(){var e=this,t=new b;t.data.Brno=this.form.brno,t.data.QueueTpID=this.form.queueTpId,t.data.CustGrd=this.form.custGrd,t.data.WaitTime=this.form.WaitTime,Object(i.a)(t).then(function(t){e.isShow=!1,e.loading=!1,e.$aui.message.show({type:"success",message:"新增成功!"}),e.$emit("refreshTable")}).catch(function(t){e.$aui.message.show({type:"warning",message:"新增失败!"+t.SYS_HEAD.ReturnMessage}),e.loading=!1})},openCreate:function(){this.loading=!0,this.$refs.form&&this.$refs.form.clearValidate(),this.form.brno=this.option.currentRow[0].Brno,this.form.queueTpId=this.option.currentRow[0].QueueTpId,this.loading=!1},closeUser:function(){void 0!=this.$refs.form&&(this.$refs.form.resetFields(),this.$refs.form.clearValidate()),this.$emit("refreshTable")},addType:function(){this.option.isShow=!1,this.$refs.form.clearValidate()}}},T={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("aui-dialog",{attrs:{title:"队列监控子表新增",visible:e.isShow,width:"890px","close-on-click-modal":!1,center:""},on:{hide:e.closeUser,"update:visible":function(t){e.isShow=t},show:e.openCreate}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[a("div",{staticClass:"content"},[a("aui-card",[a("aui-form",{ref:"form",attrs:{size:"mini",model:e.form,rules:e.rules,inline:"","label-width":"140px","label-position":"right"}},[a("aui-row",{attrs:{gutter:10}},[a("aui-col",{attrs:{lg:6,md:12}},[a("aui-form-item",{attrs:{prop:"brno",label:"机构编号"}},[a("aui-input",{attrs:{disabled:!0,placeholder:"请输入机构编号"},model:{value:e.form.brno,callback:function(t){e.$set(e.form,"brno",t)},expression:"form.brno"}})],1)],1),e._v(" "),a("aui-col",{attrs:{lg:6,md:12}},[a("aui-form-item",{attrs:{prop:"queueTpId",label:"队列类型ID"}},[a("aui-input",{attrs:{disabled:!0,placeholder:"请输入队列类型ID"},model:{value:e.form.queueTpId,callback:function(t){e.$set(e.form,"queueTpId",t)},expression:"form.queueTpId"}})],1)],1),e._v(" "),a("aui-col",{attrs:{lg:6,md:12}},[a("aui-form-item",{attrs:{label:"客户综合评级:",prop:"custGrd"}},[a("aui-select",{attrs:{filterable:"",placeholder:"请选择客户综合评级"},model:{value:e.form.custGrd,callback:function(t){e.$set(e.form,"custGrd",t)},expression:"form.custGrd"}},e._l(e.option.custGrdList,function(e){return a("aui-option",{key:e.DataKeyVal,attrs:{label:e.DataKeyVal+"-"+e.Meaning,value:e.DataKeyVal,disabled:e.disabled}})}))],1)],1),e._v(" "),a("aui-col",{attrs:{lg:6,md:12}},[a("aui-form-item",{attrs:{prop:"WaitTime",label:"等待时间"}},[a("aui-input",{attrs:{picture:"999",placeholder:"请输入等待时间"},model:{value:e.form.WaitTime,callback:function(t){e.$set(e.form,"WaitTime",t)},expression:"form.WaitTime"}})],1)],1)],1)],1)],1),e._v(" "),a("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[a("aui-button",{attrs:{size:"mini"},on:{click:e.addType}},[e._v("取消")]),e._v(" "),a("aui-button",{attrs:{type:"primary",size:"mini"},on:{click:e.add}},[e._v("确认")])],1)],1)])])],1)},staticRenderFns:[]};var y=a("/Xao")(w,T,!1,function(e){a("waUj")},"data-v-6676b6d1",null).exports,x=function e(){u()(this,e),this.data={Brno:"",QueueTpId:"",CustGrd:"",WaitTime:"",BusiOper:"M"},this.BusiDataKey="Mod_queMoitorExt",this.TransServiceCode="ib-dbcomm/dbComm"},S={name:"",data:function(){return{loading:!1,form:{brno:"",queueTpId:"",custGrd:"",WaitTime:""},rules:{brno:[{required:!0,message:"机构号不能为空",trigger:"blur"}],queueTpId:[{required:!0,message:"队列类型ID不能为空",trigger:"blur"}],custGrd:[{required:!0,message:"请选择客户综合评级",trigger:"change"}],WaitTime:[{required:!0,message:"等待时间不能为空",trigger:"blur"},{validator:r.f,trigger:"blur"}]}}},props:{optionUpdate:Object},computed:{isShow:{get:function(){return this.optionUpdate.isShow},set:function(e){this.optionUpdate.isShow=e}}},methods:{openUpdate:function(){var e=this;this.$nextTick(function(){e.form.brno=e.optionUpdate.currentRow[0].Brno,e.form.queueTpId=e.optionUpdate.currentRow[0].QueueTpID,e.form.custGrd=e.optionUpdate.currentRow[0].CustGrd,e.form.WaitTime=e.optionUpdate.currentRow[0].WaitTime})},cancleUserMod:function(){this.optionUpdate.isShow=!1,this.$refs.form.clearValidate()},closeUserMod:function(){this.$refs.form.clearValidate()},confirm:function(){var e=this;this.$refs.form.validate(function(t){if(!t)return e.$aui.message.show({type:"warning",message:"请输入合法数据!"}),!1;var a=new x;a.data.Brno=e.form.brno,a.data.QueueTpId=e.form.queueTpId,a.data.CustGrd=e.form.custGrd,a.data.WaitTime=e.form.WaitTime,Object(i.a)(a).then(function(t){e.loading=!1,e.$aui.message.show({type:"success",message:"修改成功!"}),e.optionUpdate.isShow=!1,e.$emit("refreshTable")}).catch(function(t){e.loading=!1})})}}},I={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("aui-dialog",{attrs:{title:"队列监控字表修改",visible:e.isShow,width:"800px","close-on-click-modal":!1},on:{"update:visible":function(t){e.isShow=t},hide:e.closeUserMod,show:e.openUpdate}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[a("aui-card",[a("aui-form",{ref:"form",attrs:{size:"mini",model:e.form,rules:e.rules,inline:"","label-width":"120px","label-position":"right"}},[a("aui-row",{attrs:{gutter:10}},[a("aui-col",{attrs:{lg:6,md:12}},[a("aui-form-item",{attrs:{prop:"brno",label:"机构编号"}},[a("aui-input",{attrs:{disabled:!0,placeholder:"请输入机构编号"},model:{value:e.form.brno,callback:function(t){e.$set(e.form,"brno",t)},expression:"form.brno"}})],1)],1),e._v(" "),a("aui-col",{attrs:{lg:6,md:12}},[a("aui-form-item",{attrs:{prop:"queueTpId",label:"队列类型ID"}},[a("aui-input",{attrs:{disabled:!0,placeholder:"请输入队列类型ID"},model:{value:e.form.queueTpId,callback:function(t){e.$set(e.form,"queueTpId",t)},expression:"form.queueTpId"}})],1)],1),e._v(" "),a("aui-col",{attrs:{lg:6,md:12}},[a("aui-form-item",{attrs:{label:"客户综合评级:",prop:"custGrd"}},[a("aui-select",{attrs:{disabled:!0,filterable:"",placeholder:"请选择客户综合评级"},model:{value:e.form.custGrd,callback:function(t){e.$set(e.form,"custGrd",t)},expression:"form.custGrd"}},e._l(e.optionUpdate.custGrdList,function(e){return a("aui-option",{key:e.DataKeyVal,attrs:{label:e.DataKeyVal+"-"+e.Meaning,value:e.DataKeyVal,disabled:e.disabled}})}))],1)],1),e._v(" "),a("aui-col",{attrs:{lg:6,md:12}},[a("aui-form-item",{attrs:{prop:"WaitTime",label:"等待时间"}},[a("aui-input-number",{attrs:{min:1,max:999,placeholder:"请输入等待时间"},model:{value:e.form.WaitTime,callback:function(t){e.$set(e.form,"WaitTime",t)},expression:"form.WaitTime"}})],1)],1)],1)],1)],1),e._v(" "),a("div",{staticStyle:{"text-align":"right",margin:"20px 0"}},[a("aui-button",{attrs:{size:"mini"},on:{click:e.cancleUserMod}},[e._v("取消")]),e._v(" "),a("aui-button",{attrs:{type:"primary",size:"mini"},on:{click:e.confirm}},[e._v("确认")])],1)],1)])],1)},staticRenderFns:[]};var D=a("/Xao")(S,I,!1,function(e){a("JpTi")},"data-v-31fca314",null).exports,_=a("B+2e"),R=function e(){u()(this,e),this.data={Brno:"",QueueTpID:"",CustGrd:"",WaitTime:"",BusiOper:"D"},this.BusiDataKey="del_queMoitorExt",this.TransServiceCode="ib-dbcomm/dbComm"},q={name:"",data:function(){return{loading:!1,pageSize:void 0,currentPage:1,currentRow:[],tableData:[],Total:0,custGrdMap:{},dialogList:{addbusinessTypeDialog:y,update:D},dialogOptions:{custGrdList:[],isShow:!1},dialogOptionsupdate:{isShow:!1,currentRow:[],custGrdList:[]}}},props:{option:Object},computed:{isShow:{get:function(){return this.option.isShow},set:function(e){this.option.isShow=e}}},methods:{openUpdate:function(){this.pageSize=o.a.get("PageSize"),this.custGrdLoad(),this.Qrychannel()},custGrdLoad:function(){var e=this;this.loading=!0;var t=new _.a;t.data.DataKey="CustGrd",Object(i.a)(t).then(function(t){e.loading=!1;var a=t.RspInfo.Result||[];e.dialogOptions.custGrdList=a,e.dialogOptionsupdate.custGrdList=a,e.custGrdMap=n.a.objArray2Hash(a,"DataKeyVal")}).catch(function(t){e.loading=!1,e.$aui.message.show.error(t.SYS_HEAD.ReturnMessage)})},Qrychannel:function(){var e=this;this.loading=!0;var t=new v;t.data.Brno=this.option.currentRow[0].Brno,t.data.QueueTpID=this.option.currentRow[0].QueueTpId,t.data.CurtPage=this.currentPage,t.data.PageSize=this.pageSize,t.data.StartRows=(this.currentPage-1)*this.pageSize,Object(i.a)(t).then(function(t){e.loading=!1,e.tableData=t.RspInfo.Result||[],e.Total=t.RspInfo.totalNum||0}).catch(function(t){e.loading=!1,e.tableData=[],e.Total=0,e.$aui.message.show.error(t.SYS_HEAD.ReturnMessage)})},dataFormat:function(e,t){return"Brno"==t.property?e[t.property]+"-"+this.option.brnoMap:"QueueTpID"==t.property?e[t.property]+"-"+this.option.queueTpName:"CustGrd"==t.property?e[t.property]+"-"+this.custGrdMap[e[t.property]].Meaning:void 0},createRole:function(){this.dialogOptions.isShow=!0,this.dialogOptions.currentRow=this.option.currentRow},updateRole:function(){this.dialogOptionsupdate.isShow=!0,this.dialogOptionsupdate.currentRow=this.currentRow},handleCurrentChange:function(e){this.currentRow=e},cancleUserMod:function(){this.option.isShow=!1},changePage:function(e){this.currentPage=e,this.Qrychannel()},closeUserMod:function(){this.tableData=[]},delUser:function(){var e=this;this.$aui.confirm.show("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.Del()}).catch(function(){e.$aui.message.show({type:"info",message:"已取消删除"})})},Del:function(){var e=this;this.loading=!0;var t=new R;t.data.Brno=this.currentRow[0].Brno,t.data.QueueTpID=this.currentRow[0].QueueTpID,t.data.CustGrd=this.currentRow[0].CustGrd,t.data.WaitTime=this.currentRow[0].WaitTime,Object(i.a)(t).then(function(t){e.loading=!1,e.$aui.message.show({type:"success",message:"删除成功!"}),e.Qrychannel()}).catch(function(t){e.$aui.message.show({type:"warning",message:"删除失败!"}),e.loading=!1})}}},Q={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("aui-dialog",{attrs:{title:"队列监控配置子表",visible:e.isShow,width:"1000px","close-on-click-modal":!1},on:{"update:visible":function(t){e.isShow=t},hide:e.closeUserMod,show:e.openUpdate}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[a("aui-card",[a("aui-button",{attrs:{type:"primary",size:"mini",icon:"aui-icon-plus"},on:{click:e.createRole}},[e._v("新增")]),e._v(" "),a("aui-button",{attrs:{type:"primary",size:"mini",icon:"aui-icon-edit",disabled:1!=e.currentRow.length},on:{click:e.updateRole}},[e._v("修改")]),e._v(" "),a("aui-button",{attrs:{type:"danger",size:"mini",icon:"aui-icon-delete",disabled:1!=e.currentRow.length},on:{click:e.delUser}},[e._v("删除")]),e._v(" "),a("aui-button",{attrs:{type:"primary",size:"mini"},on:{click:e.cancleUserMod}},[e._v("取消")])],1),e._v(" "),a("aui-card",{staticStyle:{"margin-top":"10px"}},[a("aui-table",{ref:"table",staticClass:"tableMarginTop",staticStyle:{"min-height":"390px"},attrs:{data:e.tableData,border:"","highlight-current-row":"","header-row-class-name":"tableHeaderClass"},on:{"selection-change":e.handleCurrentChange}},[a("aui-table-column",{attrs:{type:"selection",width:"40px"}}),e._v(" "),a("aui-table-column",{attrs:{prop:"Brno",formatter:e.dataFormat,label:"机构号"}}),e._v(" "),a("aui-table-column",{attrs:{prop:"QueueTpID",formatter:e.dataFormat,label:"队列类型ID"}}),e._v(" "),a("aui-table-column",{attrs:{prop:"CustGrd",formatter:e.dataFormat,label:"客户综合评级"}}),e._v(" "),a("aui-table-column",{attrs:{prop:"WaitTime",label:"等待时间"}})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:this.tableData,expression:"this.tableData"}],staticStyle:{"text-align":"right","margin-top":"20px"}},[a("aui-pagination",{attrs:{"current-page":e.currentPage,background:"","page-size":e.pageSize,layout:"total, prev, pager, next, jumper",total:e.Total},on:{"current-change":e.changePage}})],1)],1)],1)]),e._v(" "),a("keep-alive",[a(e.dialogList.addbusinessTypeDialog,{tag:"component",attrs:{option:e.dialogOptions},on:{refreshTable:e.Qrychannel}})],1),e._v(" "),a("keep-alive",[a(e.dialogList.update,{tag:"component",attrs:{optionUpdate:e.dialogOptionsupdate},on:{refreshTable:e.Qrychannel}})],1)],1)},staticRenderFns:[]};var k=a("/Xao")(q,Q,!1,function(e){a("mhbd")},"data-v-1149a5f8",null).exports,B=a("tzsN"),C=function e(){u()(this,e),this.data={Brno:"",QueueTpId:"",BusiOper:"D",TransCode:"QueMonMgr"},this.BusiDataKey="del_queue",this.TransServiceCode="ib-dbcomm/dbComm"},$=a("0VOF"),O=a("D6TH"),M={name:"queueMoniterManage",components:{selectTree:B.a},data:function(){return{PreserveFlag:[],pageSize:void 0,branchNum:[],brnoList:[],queueTpIdList:[],brnoMap:{},queueTpMap:{},QueryForm:{branchNum:[],queueTpId:""},dialogList:{addbusinessTypeDialog:f,channel:k},currentRow:[],currentPage:1,totalRcrdNum:0,tableData:[],loading:!1,total:0,startDialogVisible:!1,checkedUser:!1,isDisabledDel:!1,dialogOptions:{isShow:!1,branchNum:[]},dialogOptionschannel:{isShow:!1,currentRow:[],brnoMap:"",isDisabled:!1},dialogOptionsupdateUser:{isShow:!1,currentRow:[]},rules:{branchNum:[{required:!0,message:"请选择机构编号",trigger:"change"}]}}},watch:{"QueryForm.branchNum":function(){this.currentPage=1,this.queryQueueTpId()},"QueryForm.queueTpId":function(){this.currentPage=1}},computed:{},created:function(){this.pageSize=o.a.get("PageSize"),this.queryBranchNum(),this.queryQueueTp()},methods:{queryBranchNum:function(){var e=this;this.loading=!0;var t=new $.a;t.data.orgno=this.$store.getters.BranchNum,Object(i.a)(t).then(function(t){e.loading=!1,e.branchNum=t.RspInfo.Result||[],e.brnoMap=t.RspInfo.orgMap||{},e.permission=n.a.objArray2Hash(e.branchNum,"orgno"),e.brnoList=n.a.formatTreeData(e.branchNum,"orgno","superno"),e.QueryForm.branchNum.push(e.brnoList[0].orgno)}).catch(function(t){e.loading=!1,e.$aui.message.show({type:"warning",message:t.SYS_HEAD.ReturnMessage}),console.error("查询错误",t)})},queryQueueTp:function(){var e=this,t=new d;t.data.BusiOper="Q3",t.BusiDataKey="sel_queue",t.data.CurtPage=1,t.data.PageSize=99999,t.data.StartRows=0,t.data.QueueTpId=void 0,Object(i.a)(t).then(function(t){var a=t.RspInfo.Result||[];e.queueTpMap=n.a.objArray2Hash(a,"QueueTpID")}).catch(function(t){e.queueTpMap={},e.$aui.message.show({type:"warning",message:t.SYS_HEAD.ReturnMessage})})},queryQueueTpId:function(){var e=this;if(this.QueryForm.queueTpId="",this.QueryForm.branchNum[0]){this.loading=!0;var t=new O.a;t.data.Brno=this.QueryForm.branchNum[0],Object(i.a)(t).then(function(t){e.loading=!1,e.queueTpIdList=t.RspInfo.Result||[]}).catch(function(t){e.queueTpIdList=[],e.$aui.message.show({type:"warning",message:t.SYS_HEAD.ReturnMessage}),e.loading=!1,console.error("查询错误",t)})}else this.queueTpIdList=[]},dataFormat:function(e,t){return"Brno"==t.property?e[t.property]+"-"+e.BrName:"QueueTpId"==t.property?e[t.property]+(this.queueTpMap[e[t.property]]?"-"+this.queueTpMap[e[t.property]].QueueTpName:""):void 0},checkPermission:function(e){this.permission[this.currentRow[0].Brno]?1==e?this.updateRole():2==e?this.Seetable():this.delUser():this.$aui.message.show({type:"warning",message:"权限不足,无法修改！"})},businesstypeList:function(){var e=this;this.$refs.QueryForm.validate(function(t){if(t){e.loading=!0;var a=new d;a.data.Brno=e.QueryForm.branchNum[0],a.data.QueueTpId=e.QueryForm.queueTpId,a.data.CurtPage=e.currentPage,a.data.PageSize=e.pageSize,a.data.StartRows=(e.currentPage-1)*e.pageSize,Object(i.a)(a).then(function(t){e.loading=!1,e.tableData=t.RspInfo.Result||[],e.totalRcrdNum=t.RspInfo.totalNum||0}).catch(function(t){e.totalRcrdNum=0,e.tableData=[],e.loading=!1,e.$aui.message.show({type:"warning",message:t.SYS_HEAD.ReturnMessage})})}})},changePage:function(e){this.currentPage=e,this.businesstypeList()},refreshTable:function(){this.businesstypeList()},Seetable:function(){this.dialogOptionschannel.isShow=!0,this.dialogOptionschannel.currentRow=this.currentRow,this.dialogOptionschannel.brnoMap=this.brnoMap[this.currentRow[0].Brno],this.dialogOptionschannel.queueTpName=this.queueTpMap[this.currentRow[0].QueueTpId]?this.queueTpMap[this.currentRow[0].QueueTpId].QueueTpName:this.currentRow[0].QueueTpId,this.dialogOptionschannel.isDisabled=!0},delUser:function(){var e=this;this.$aui.confirm.show("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.Del()}).catch(function(){e.$aui.message.show({type:"info",message:"已取消删除"})})},createRole:function(){this.dialogOptions.isShow=!0,this.dialogOptions.mark="1",this.dialogOptions.title="新增队列预警参数",this.dialogOptions.isDisabled=!1,this.dialogOptions.branchNum=this.branchNum},updateRole:function(){this.dialogOptions.isShow=!0,this.dialogOptions.mark="2",this.dialogOptions.currentRow=this.currentRow[0],this.dialogOptions.title="修改队列预警参数",this.dialogOptions.isDisabled=!0,this.dialogOptions.branchNum=this.branchNum},Del:function(){var e=this,t=new h;Object(i.a)(t),this.loading=!0;var a=new C;a.data.Brno=this.currentRow[0].Brno,a.data.QueueTpId=this.currentRow[0].QueueTpId,Object(i.a)(a).then(function(t){e.loading=!1,e.$aui.message.show({type:"success",message:"删除成功!"}),e.currentPage=1,e.businesstypeList()}).catch(function(t){e.$aui.message.show({type:"success",message:"删除失败!"}),e.loading=!1})},handleCurrentChange:function(e){this.currentRow=e,1==e.length?this.isDisabledDel=!0:e.length>1?this.$refs.table.toggleRowSelection(e[0]):this.isDisabledDel=!1}}},N={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"加载中。。。"}},[a("aui-card",{staticStyle:{overflow:"visible"}},[a("aui-form",{ref:"QueryForm",attrs:{model:e.QueryForm,size:"mini",rules:e.rules,"label-position":"top"}},[a("aui-row",{attrs:{gutter:10}},[a("aui-col",{attrs:{lg:4,md:6}},[a("aui-form-item",{attrs:{label:"机构编号",prop:"branchNum"}},[a("select-tree",{staticStyle:{width:"170px"},attrs:{"single-check":!0,props:{id:"orgno",label:"cname",children:"children"},"tree-data":e.brnoList,placeholder:"请选择机构"},model:{value:e.QueryForm.branchNum,callback:function(t){e.$set(e.QueryForm,"branchNum",t)},expression:"QueryForm.branchNum"}})],1)],1),e._v(" "),a("aui-col",{attrs:{lg:4,md:6}},[a("aui-form-item",{attrs:{label:"队列类型ID",prop:"queueTpId"}},[a("aui-select",{attrs:{clearable:"",filterable:"",placeholder:"请选择队列类型ID"},model:{value:e.QueryForm.queueTpId,callback:function(t){e.$set(e.QueryForm,"queueTpId",t)},expression:"QueryForm.queueTpId"}},e._l(e.queueTpIdList,function(e){return a("aui-option",{key:e.QueueTpID,attrs:{label:e.QueueTpID+"-"+e.QueueTpName,value:e.QueueTpID,disabled:e.disabled}})}))],1)],1),e._v(" "),a("aui-col",{staticClass:"searchBtnMarginTop",attrs:{lg:4,md:6}},[a("aui-button",{attrs:{type:"primary",icon:"aui-icon-search",loading:e.loading,size:"mini"},on:{click:e.businesstypeList}},[e._v("查询")])],1)],1)],1)],1),e._v(" "),a("aui-card",{staticStyle:{"margin-top":"10px"}},[a("aui-row",{attrs:{gutter:10}},[e.btnPermission("Button_User_Add")?a("aui-col",{attrs:{lg:2,md:3}},[a("aui-button",{attrs:{type:"primary",icon:"aui-icon-plus",size:"mini",disabled:0!=e.currentRow.length},on:{click:e.createRole}},[e._v("新增")])],1):e._e(),e._v(" "),e.btnPermission("Button_User_Edit")?a("aui-col",{attrs:{lg:2,md:3}},[a("aui-button",{attrs:{type:"primary",size:"mini",icon:"aui-icon-edit",disabled:1!=e.currentRow.length},on:{click:function(t){e.checkPermission(1)}}},[e._v("修改")])],1):e._e(),e._v(" "),e.btnPermission("Button_User_Delete")?a("aui-col",{attrs:{lg:2,md:3}},[a("aui-button",{attrs:{type:"danger",size:"mini",icon:"aui-icon-delete",disabled:1!=e.currentRow.length},on:{click:function(t){e.checkPermission()}}},[e._v("删除")])],1):e._e()],1),e._v(" "),a("aui-table",{ref:"table",staticClass:"tableMarginTop",staticStyle:{"min-height":"390px"},attrs:{data:e.tableData,border:"","highlight-current-row":"","header-row-class-name":"tableHeaderClass"},on:{"selection-change":e.handleCurrentChange}},[a("aui-table-column",{attrs:{type:"selection",width:"40px"}}),e._v(" "),a("aui-table-column",{attrs:{prop:"Brno",formatter:e.dataFormat,label:"机构编号","min-width":"167px"}}),e._v(" "),a("aui-table-column",{attrs:{prop:"QueueTpId",formatter:e.dataFormat,label:"队列类型ID","min-width":"167px"}}),e._v(" "),a("aui-table-column",{attrs:{prop:"WaitNumThreshold",label:"队列人数预警阈值"}}),e._v(" "),a("aui-table-column",{attrs:{prop:"WaitTimeThreshold",label:"队列等待时间预警阈值"}})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:this.tableData,expression:"this.tableData"}],staticStyle:{"text-align":"right","margin-top":"20px"}},[a("aui-pagination",{attrs:{"current-page":e.currentPage,background:"","page-size":e.pageSize,layout:"total, prev, pager, next, jumper",total:e.totalRcrdNum},on:{"current-change":e.changePage}})],1)],1),e._v(" "),a("keep-alive",[a(e.dialogList.addbusinessTypeDialog,{tag:"component",attrs:{option:e.dialogOptions},on:{refreshTable:e.businesstypeList}})],1),e._v(" "),a("keep-alive",[a(e.dialogList.channel,{tag:"component",attrs:{option:e.dialogOptionschannel},on:{refreshTable:e.businesstypeList}})],1)],1)},staticRenderFns:[]};var z=a("/Xao")(M,N,!1,function(e){a("y7Lb")},"data-v-0a3ee72c",null);t.default=z.exports},codS:function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,"\n.content[data-v-31fca314] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.require[data-v-31fca314] {\n  color: red;\n}\n.dialog-text[data-v-31fca314] {\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  color: red;\n  font-size: 18px;\n}\n.role[data-v-31fca314] {\n  width: 95%;\n  border: 1px solid #eee;\n  border-radius: 4px;\n  height: 290px;\n}\n.role .roleHeader[data-v-31fca314] {\n    color: #606266;\n    font-weight: 500;\n    font-size: 14px;\n    background: #f5f7fa;\n    height: 42px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding: 9px;\n    overflow-y: auto;\n}\n.el-dialog__body[data-v-31fca314] {\n  padding: 20px;\n  padding-top: 10px;\n}\n.aui-card[data-v-31fca314] {\n  overflow: inherit;\n}\n",""])},jjPr:function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,"\n.content[data-v-6676b6d1] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.require[data-v-6676b6d1] {\n  color: red;\n}\n.dialog-text[data-v-6676b6d1] {\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  color: red;\n  font-size: 18px;\n}\n.role[data-v-6676b6d1] {\n  width: 95%;\n  border: 1px solid #eee;\n  border-radius: 4px;\n  height: 290px;\n}\n.role .roleHeader[data-v-6676b6d1] {\n    color: #606266;\n    font-weight: 500;\n    font-size: 14px;\n    background: #f5f7fa;\n    height: 42px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding: 9px;\n    overflow-y: auto;\n}\n.aui-card[data-v-6676b6d1] {\n  overflow: inherit;\n}\n",""])},mhbd:function(e,t,a){var i=a("/fKS");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("8bSs")("8b203eba",i,!0)},u0O4:function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,"/* .dialog {\n  padding: 15px;\n  height: 600px;\n} */\n.content[data-v-015f9dd0] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.require[data-v-015f9dd0] {\n  color: red;\n}\n.dialog-text[data-v-015f9dd0] {\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  color: red;\n  font-size: 18px;\n}\n.role[data-v-015f9dd0] {\n  width: 95%;\n  border: 1px solid #eee;\n  border-radius: 4px;\n  height: 290px;\n}\n.role .roleHeader[data-v-015f9dd0] {\n    color: #606266;\n    font-weight: 500;\n    font-size: 14px;\n    background: #f5f7fa;\n    height: 42px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding: 9px;\n    overflow-y: auto;\n}\n.aui-card[data-v-015f9dd0] {\n  overflow: inherit;\n}\n",""])},waUj:function(e,t,a){var i=a("jjPr");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("8bSs")("6988711e",i,!0)},y6lx:function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,'\n.selectTree[data-v-0a3ee72c] {\n  min-width: 150px;\n}\n.text[data-v-0a3ee72c] {\n  font-size: 14px;\n}\n.item[data-v-0a3ee72c] {\n  margin-bottom: 18px;\n}\n.dialog-text[data-v-0a3ee72c] {\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  color: red;\n}\n.clearfix[data-v-0a3ee72c]:before,\n.clearfix[data-v-0a3ee72c]:after {\n  display: table;\n  content: "";\n}\n.clearfix[data-v-0a3ee72c]:after {\n  clear: both;\n}\n.aui-card[data-v-0a3ee72c] {\n  width: 100%;\n}\n.aui-form-item[data-v-0a3ee72c] {\n  margin-left: 30px;\n}\n.aui-form-item1[data-v-0a3ee72c] {\n  margin-left: 10px;\n}\n.box2-button[data-v-0a3ee72c] {\n  width: 80px;\n}\n.aui-card[data-v-0a3ee72c] {\n  overflow: inherit;\n}\n',""])},y7Lb:function(e,t,a){var i=a("y6lx");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("8bSs")("72b296c1",i,!0)}});