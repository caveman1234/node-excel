webpackJsonp([87],{"+akD":function(t,e,a){"use strict";var r=a("AA3o");a.n(r)},NmAe:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("0oES"),n=a("tzsN"),o=(a("+akD"),a("Luip"),a("syAl")),i=a("AA3o"),s=a.n(i),l=function t(){s()(this,t),this.data={BranchNum:"",BranchNumF:"",BranchName:"",BranchAttr:"",BranchState:"",length:"10",start:"0",draw:"1",AssoCate:"07"},this.CommCode="IBUserPermissionsManagement",this.SceneCode="NearbyDotQueryC",this.TransServiceCode="mg-afaservices-upm/nearbyDotQueryC"},c=function t(){s()(this,t),this.data={BranchNum:"",BranchNumF:"",Notel:"",AssoCate:"07",AssoInfo:""},this.CommCode="IBUserPermissionsManagement",this.SceneCode="NearbyDotCreat",this.TransServiceCode="mg-afaservices-upm/nearbyDotCreat"},u={props:{createData:Object},components:{selectTree:n.a},data:function(){return{loading:!1,currentPage:1,pageSize:void 0,total:0,enumBrnoProp:[],enumBrnoState:[],branchname:"",branchnum:"",brnoProp:[],brnoState:[],tableDateList:[],queryForm:{brnoState:"",brnoProp:"",brnoName:"",brnoNum:""},isShowDocAdd:!1,nearbyDoc:[{value:"0",label:"添加附近网点"}],brno:[],nearbyDocAdd:{centerDoc:"",nearbyDoc:[],distance:"",brno:""},rules:{distance:[{required:!0,message:"请输入距离！",trigger:"blur"}]}}},created:function(){this.pageSize=o.a.get("PageSize"),this.brnoProp=o.a.get("brnoProp"),this.brnoState=o.a.get("brnoState"),this.enumBrnoProp=this.enumDate(this.brnoProp),this.enumBrnoState=this.enumDate(this.brnoState),console.log(this.enumBrnoProp)},methods:{enumDate:function(t){var e=[];return t.forEach(function(t){e[t.value]=t.label}),e},propFormat:function(t,e){return this.enumBrnoProp[t[e.property]]},stateFormat:function(t,e){return this.enumBrnoState[t[e.property]]},returnDate:function(){this.isShowDocAdd=!1,this.nearbyDoc[1]={value:this.branchnum,label:this.branchname},this.nearbyDocAdd.nearbyDoc=this.branchnum},getParamID:function(t,e){this.branchnum=e.branchnum,this.branchname=e.branchname},openArea:function(){this.nearbyDocAdd.centerDoc=this.$store.getters.BranchName,this.nearbyDocAdd.brno=this.$store.getters.BranchNum},handleCurrentChangeTable:function(t){},handleCurrentChange:function(t){this.currentPage=t,this.initList()},clearForm:function(t){this.$refs[""+t].resetFields()},nearbyDocChange:function(t){"0"==t&&(this.isShowDocAdd=!0,this.nearbyDocAdd.nearbyDoc="")},closeArea:function(){this.$refs.nearbyDocAdd.resetFields(),this.$refs.nearbyDocAdd.clearValidate(),this.nearbyDoc=[{value:"0",label:"添加附近网点"}],this.branchnum=""},openNearByDoc:function(){this.$refs.queryForm&&this.$refs.queryForm.resetFields(),this.initList()},initList:function(){var t=this;this.loading=!0;var e=new l;e.data.BranchNumF=this.queryForm.brnoNum,e.data.BranchNum=this.$store.getters.BranchNum,e.data.BranchName=this.queryForm.brnoName,e.data.BranchAttr=this.queryForm.brnoProp,e.data.BranchState=this.queryForm.brnoState,e.data.start=(this.currentPage-1)*this.pageSize,e.data.length=this.pageSize,Object(r.a)(e).then(function(e){t.total=e.RspInfo.recordsTotal?e.RspInfo.recordsTotal:0,t.tableDateList=[],t.loading=!1,t.tableDateList=e.RspInfo.pageList}).catch(function(e){t.loading=!1,t.$aui.message.show({type:"success",message:e.SYS_HEAD.ReturnMessage+"!"})})},addArea:function(){var t=this;this.$refs.nearbyDocAdd.validate(function(e){if(e){t.loading=!0;var a=new c;a.data.BranchNum=t.$store.getters.BranchNum,a.data.BranchNumF=t.nearbyDocAdd.nearbyDoc,a.data.Notel=t.nearbyDocAdd.distance,a.data.AssoInfo=t.nearbyDocAdd.nearbyDoc,Object(r.a)(a).then(function(e){t.$aui.message.show({type:"success",message:"附近网点新建成功"}),t.createData.isShow=!1,t.$emit("refreshTable"),t.loading=!1}).catch(function(e){t.loading=!1,t.$aui.message.show({type:"success",message:e.SYS_HEAD.ReturnMessage+"!"}),console.log(e)})}})}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("aui-dialog",{attrs:{visible:t.createData.isShow,width:"700px",title:t.createData.title,"close-on-click-modal":!1},on:{"update:visible":function(e){t.$set(t.createData,"isShow",e)},show:t.openArea,hide:t.closeArea}},[a("aui-card",{staticStyle:{overflow:"visible"}},[a("aui-form",{ref:"nearbyDocAdd",attrs:{size:"mini",model:t.nearbyDocAdd,inline:"",rules:t.rules,"label-width":"100px","label-position":"right"}},[a("aui-row",{attrs:{gutter:10}},[a("aui-col",{attrs:{span:12}},[a("aui-form-item",{attrs:{label:"中心网点:",prop:"centerDoc"}},[a("aui-input",{attrs:{placeholder:"请输入中心网点",disabled:!0},model:{value:t.nearbyDocAdd.centerDoc,callback:function(e){t.$set(t.nearbyDocAdd,"centerDoc",e)},expression:"nearbyDocAdd.centerDoc"}})],1)],1),t._v(" "),a("aui-col",{attrs:{span:12}},[a("aui-form-item",{attrs:{prop:"nearbyDoc",label:"附近网点:"}},[a("aui-select",{attrs:{filterable:"","allow-create":"","default-first-option":""},on:{change:t.nearbyDocChange},model:{value:t.nearbyDocAdd.nearbyDoc,callback:function(e){t.$set(t.nearbyDocAdd,"nearbyDoc",e)},expression:"nearbyDocAdd.nearbyDoc"}},t._l(t.nearbyDoc,function(t){return a("aui-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)],1),t._v(" "),a("aui-col",{attrs:{span:12}},[a("aui-form-item",{attrs:{label:"距离:",prop:"distance"}},[a("aui-input",{attrs:{placeholder:"请输入中心网点"},model:{value:t.nearbyDocAdd.distance,callback:function(e){t.$set(t.nearbyDocAdd,"distance",e)},expression:"nearbyDocAdd.distance"}})],1)],1),t._v(" "),a("aui-col",{attrs:{span:12}},[a("aui-form-item",{attrs:{label:"机构号:",prop:"brno"}},[a("aui-input",{attrs:{placeholder:"机构号",disabled:!0},model:{value:t.nearbyDocAdd.brno,callback:function(e){t.$set(t.nearbyDocAdd,"brno",e)},expression:"nearbyDocAdd.brno"}})],1)],1)],1)],1)],1),t._v(" "),a("aui-row",{staticStyle:{margin:"20px 0","text-align":"right"}},[a("aui-button",{attrs:{size:"mini"},on:{click:function(e){t.createData.isShow=!1}}},[t._v("取消")]),t._v(" "),a("aui-button",{attrs:{type:"primary",size:"mini"},on:{click:t.addArea}},[t._v("确认")])],1)],1),t._v(" "),a("aui-dialog",{attrs:{visible:t.isShowDocAdd,width:"900px",title:"添加附近网点","close-on-click-modal":!1},on:{"update:visible":function(e){t.isShowDocAdd=e},show:t.openNearByDoc}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[a("aui-card",{staticStyle:{overflow:"visible"}},[a("aui-form",{ref:"queryForm",attrs:{size:"mini",model:t.queryForm,inline:"","label-width":"100px","label-position":"right"}},[a("aui-row",{attrs:{gutter:10}},[a("aui-col",{attrs:{span:6}},[a("aui-form-item",{attrs:{label:"机构号:",prop:"brnoNum"}},[a("aui-input",{attrs:{placeholder:"请输入机构号"},model:{value:t.queryForm.brnoNum,callback:function(e){t.$set(t.queryForm,"brnoNum",e)},expression:"queryForm.brnoNum"}})],1)],1),t._v(" "),a("aui-col",{attrs:{span:6}},[a("aui-form-item",{attrs:{label:"机构名称:",prop:"brnoName"}},[a("aui-input",{attrs:{placeholder:"请输入机构名称"},model:{value:t.queryForm.brnoName,callback:function(e){t.$set(t.queryForm,"brnoName",e)},expression:"queryForm.brnoName"}})],1)],1),t._v(" "),a("aui-col",{attrs:{span:6}},[a("aui-form-item",{attrs:{prop:"brnoProp",label:"机构属性:"}},[a("aui-select",{attrs:{"allow-create":"","default-first-option":""},model:{value:t.queryForm.brnoProp,callback:function(e){t.$set(t.queryForm,"brnoProp",e)},expression:"queryForm.brnoProp"}},t._l(t.brnoProp,function(t){return a("aui-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)],1),t._v(" "),a("aui-col",{attrs:{span:6}},[a("aui-form-item",{attrs:{prop:"brnoState",label:"机构状态:"}},[a("aui-select",{attrs:{"allow-create":"","default-first-option":""},model:{value:t.queryForm.brnoState,callback:function(e){t.$set(t.queryForm,"brnoState",e)},expression:"queryForm.brnoState"}},t._l(t.brnoState,function(t){return a("aui-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)],1)],1),t._v(" "),a("aui-button",{attrs:{type:"primary",size:"mini",icon:"aui-icon-search"},on:{click:t.initList}},[t._v("查询")]),t._v(" "),a("aui-button",{attrs:{type:"warning",size:"mini",icon:"aui-icon-refresh"},on:{click:function(e){t.clearForm("queryForm")}}},[t._v("重置")])],1)],1),t._v(" "),a("aui-card",{staticStyle:{"margin-top":"10px"}},[a("aui-table",{ref:"tableDateList",staticClass:"tableMarginTop",attrs:{data:t.tableDateList,border:"","max-height":"300",width:"100%","header-row-class-name":"tableHeaderClass","highlight-current-row":""},on:{"selection-change":t.handleCurrentChangeTable}},[a("aui-table-column",{attrs:{width:"50px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("aui-radio",{attrs:{label:e.row.branchnum},nativeOn:{change:function(a){t.getParamID(e,e.row)}},model:{value:t.branchnum,callback:function(e){t.branchnum=e},expression:"branchnum"}},[t._v(t._s(null))])]}}])}),t._v(" "),a("aui-table-column",{attrs:{prop:"branchnum",label:"机构号","min-width":"107px"}}),t._v(" "),a("aui-table-column",{attrs:{prop:"branchname",label:"机构名称","min-width":"107px"}}),t._v(" "),a("aui-table-column",{attrs:{prop:"branchattr",label:"机构属性","min-width":"107px",formatter:t.propFormat}}),t._v(" "),a("aui-table-column",{attrs:{prop:"personinchargecontactphone",label:"机构联系人电话","min-width":"107px"}}),t._v(" "),a("aui-table-column",{attrs:{prop:"brandContactsName",label:"机构负责人","min-width":"107px"}}),t._v(" "),a("aui-table-column",{attrs:{prop:"branchaddr",label:"机构地址","min-width":"107px"}}),t._v(" "),a("aui-table-column",{attrs:{prop:"branchstate",label:"机构状态","min-width":"107px",formatter:t.stateFormat}}),t._v(" "),a("aui-table-column",{attrs:{prop:"trafficinfo",label:"交通信息","min-width":"107px"}})],1),t._v(" "),a("div",{staticStyle:{"text-align":"right","margin-top":"20px"}},[a("aui-pagination",{attrs:{background:"","current-page":t.currentPage,"page-size":t.pageSize,layout:"total, prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1),t._v(" "),a("aui-row",{staticStyle:{margin:"20px 0","text-align":"right"}},[a("aui-button",{attrs:{size:"mini"},on:{click:function(e){t.isShowDocAdd=!1}}},[t._v("取消")]),t._v(" "),a("aui-button",{attrs:{type:"primary",size:"mini"},on:{click:t.returnDate}},[t._v("确认")])],1)],1)])],1)},staticRenderFns:[]},b=a("/Xao")(u,m,!1,null,null,null).exports,d=function t(){s()(this,t),this.data={BranchNum:"",AssoInfo:"",AssoCate:"07"},this.CommCode="IBUserPermissionsManagement",this.SceneCode="NearbyDotDelete",this.TransServiceCode="mg-afaservices-upm/nearbyDotDelete"},h=function t(){s()(this,t),this.data={BranchNum:"",BranchNumF:"",BranchName:"",BranchAttr:"",BranchState:"",length:"10",start:"0",draw:"1",AssoCate:"07"},this.CommCode="IBUserPermissionsManagement",this.SceneCode="NearbyDotQuery",this.TransServiceCode="mg-afaservices-upm/nearbyDotQuery"},p={components:{selectTree:n.a},data:function(){return{total:0,pageSize:void 0,enumBrnoProp:[],enumBrnoState:[],currentPage:1,tableDateList:[],brnoState:[],brnoProp:[],brnoList:[],queryForm:{brnoState:"",brnoProp:"",brnoName:"",brnoList:""},currentRow:[],loading:!1,dialogList:{createNearbyDot:b},dialogOptions:{isShow:!1}}},created:function(){this.pageSize=o.a.get("PageSize"),this.brnoProp=o.a.get("brnoProp"),this.brnoState=o.a.get("brnoState"),this.enumBrnoProp=this.enumDate(this.brnoProp),this.enumBrnoState=this.enumDate(this.brnoState),console.log(this.enumBrnoProp),this.tableQuery()},methods:{enumDate:function(t){var e=[];return t.forEach(function(t){e[t.value]=t.label}),e},propFormat:function(t,e){return this.enumBrnoProp[t[e.property]]},stateFormat:function(t,e){return this.enumBrnoState[t[e.property]]},handleCurrentChange:function(t){this.currentPage=t,this.tableQuery()},handleCurrentChangeTable:function(t){console.log(t),this.currentRow=t},clearForm:function(t){this.$refs[""+t].resetFields()},refreshTable:function(){this.tableQuery()},tableQuery:function(){var t=this;this.loading=!0;var e=new h;e.data.BranchNum=this.$store.getters.BranchNum,e.data.BranchNumF=this.queryForm.brnoList,e.data.BranchName=this.queryForm.brnoName,e.data.BranchAttr=this.queryForm.brnoProp,e.data.BranchState=this.queryForm.brnoState,e.data.start=(this.currentPage-1)*this.pageSize,e.data.length=this.pageSize,Object(r.a)(e).then(function(e){t.total=e.RspInfo.recordsTotal?e.RspInfo.recordsTotal:0,t.tableDateList=[],t.loading=!1,t.tableDateList=e.RspInfo.pageList}).catch(function(e){t.loading=!1,t.$aui.message.show({type:"success",message:e.SYS_HEAD.ReturnMessage+"!"})})},sureDel:function(){var t=this;this.loading=!0;var e=new d;e.data.AssoInfo=this.currentRow[0].branchnum,e.data.BranchNum=this.$store.getters.BranchNum,Object(r.a)(e).then(function(e){t.$aui.message.show({type:"success",message:"附近网点删除成功!"}),t.refreshTable(),t.loading=!1}).catch(function(e){t.loading=!1,t.$aui.message.show({type:"success",message:e.SYS_HEAD.ReturnMessage+"!"}),t.$aui.message.show({type:"info",message:e.SYS_HEAD.ReturnMessage})})},nearbyDotAdd:function(){this.dialogOptions.isShow=!0,this.dialogOptions.title="新增附近网点",this.dialogOptions.symbol="1"},delNearByDot:function(){var t=this;this.$aui.confirm.show("此操作将永久删除该附近网点, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.sureDel()}).catch(function(){t.$aui.message.show({type:"info",message:"已取消删除"})})}}},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"branch-manage",attrs:{"element-loading-text":"加载中。。。"}},[a("aui-card",[a("aui-form",{ref:"queryForm",attrs:{model:t.queryForm,size:"mini","label-position":"top"}},[a("aui-row",{attrs:{gutter:10}},[a("aui-col",{attrs:{lg:4,md:6}},[a("aui-form-item",{attrs:{label:"机构号",prop:"brnoList"}},[a("aui-input",{attrs:{placeholder:"请输入机构号"},model:{value:t.queryForm.brnoList,callback:function(e){t.$set(t.queryForm,"brnoList",e)},expression:"queryForm.brnoList"}})],1)],1),t._v(" "),a("aui-col",{attrs:{lg:4,md:6}},[a("aui-form-item",{attrs:{label:"机构中文名称",prop:"brnoName"}},[a("aui-input",{attrs:{placeholder:"请输入机构中文名称"},model:{value:t.queryForm.brnoName,callback:function(e){t.$set(t.queryForm,"brnoName",e)},expression:"queryForm.brnoName"}})],1)],1),t._v(" "),a("aui-col",{attrs:{lg:4,md:6}},[a("aui-form-item",{attrs:{label:"机构属性",prop:"brnoProp"}},[a("aui-select",{attrs:{placeholder:"请选择机构属性"},model:{value:t.queryForm.brnoProp,callback:function(e){t.$set(t.queryForm,"brnoProp",e)},expression:"queryForm.brnoProp"}},t._l(t.brnoProp,function(t){return a("aui-option",{key:t.value,attrs:{label:t.label,value:t.value,disabled:t.disabled}})}))],1)],1),t._v(" "),a("aui-col",{attrs:{lg:4,md:6}},[a("aui-form-item",{attrs:{label:"机构状态",prop:"brnoState"}},[a("aui-select",{attrs:{placeholder:"请选择机构状态"},model:{value:t.queryForm.brnoState,callback:function(e){t.$set(t.queryForm,"brnoState",e)},expression:"queryForm.brnoState"}},t._l(t.brnoState,function(t){return a("aui-option",{key:t.value,attrs:{label:t.label,value:t.value,disabled:t.disabled}})}))],1)],1),t._v(" "),a("aui-col",{staticClass:"searchBtnMarginTop",attrs:{lg:2,md:3}},[a("aui-button",{staticClass:"searchBtnMarginTop",attrs:{type:"primary",size:"mini",icon:"aui-icon-search"},on:{click:t.tableQuery}},[t._v("查询")])],1),t._v(" "),a("aui-col",{staticClass:"searchBtnMarginTop",attrs:{lg:2,md:3}},[a("aui-button",{staticClass:"searchBtnMarginTop",attrs:{type:"warning",size:"mini",icon:"aui-icon-refresh"},on:{click:function(e){t.clearForm("queryForm")}}},[t._v("重置")])],1)],1)],1)],1),t._v(" "),a("aui-card",{staticStyle:{"margin-top":"10px"}},[a("aui-row",[a("aui-col",{attrs:{lg:2,md:3}},[t.btnPermission("Button_DevBrand_Add")?a("aui-button",{attrs:{type:"primary",size:"mini",icon:"aui-icon-plus"},on:{click:function(e){t.nearbyDotAdd()}}},[t._v("新增")]):t._e()],1),t._v(" "),a("aui-col",{attrs:{lg:2,md:3}},[t.btnPermission("Button_DevBrand_Add")?a("aui-button",{attrs:{type:"danger",size:"mini",icon:"aui-icon-plus",disabled:1!=t.currentRow.length},on:{click:function(e){t.delNearByDot()}}},[t._v("删除")]):t._e()],1)],1),t._v(" "),a("aui-table",{ref:"tableDateList",staticClass:"tableMarginTop",attrs:{data:t.tableDateList,border:"","max-height":"400",width:"100%","header-row-class-name":"tableHeaderClass","highlight-current-row":""},on:{"selection-change":t.handleCurrentChangeTable}},[a("aui-table-column",{attrs:{type:"selection",width:"40px"}}),t._v(" "),a("aui-table-column",{attrs:{prop:"branchnum",label:"机构号","min-width":"107px",fixed:""}}),t._v(" "),a("aui-table-column",{attrs:{prop:"branchname",label:"机构名称","min-width":"107px"}}),t._v(" "),a("aui-table-column",{attrs:{prop:"branchattr",label:"机构属性","min-width":"107px",formatter:t.propFormat}}),t._v(" "),a("aui-table-column",{attrs:{prop:"personinchargecontactphone",label:"机构联系人电话","min-width":"107px"}}),t._v(" "),a("aui-table-column",{attrs:{prop:"brandContactsName",label:"机构负责人","min-width":"107px"}}),t._v(" "),a("aui-table-column",{attrs:{prop:"branchaddr",label:"机构地址","min-width":"107px"}}),t._v(" "),a("aui-table-column",{attrs:{prop:"branchstate",label:"机构状态","min-width":"107px",formatter:t.stateFormat}}),t._v(" "),a("aui-table-column",{attrs:{prop:"ss",label:"距离","min-width":"107px"}})],1),t._v(" "),a("div",{staticStyle:{"text-align":"right","margin-top":"20px"}},[a("aui-pagination",{attrs:{background:"","current-page":t.currentPage,"page-size":t.pageSize,layout:"total, prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1),t._v(" "),a("keep-alive",[a(t.dialogList.createNearbyDot,{tag:"component",attrs:{createData:t.dialogOptions},on:{refreshTable:t.refreshTable}})],1)],1)},staticRenderFns:[]};var f=a("/Xao")(p,g,!1,function(t){a("o7Wj")},null,null);e.default=f.exports},o7Wj:function(t,e,a){var r=a("xM5s");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("8bSs")("03467d13",r,!0)},xM5s:function(t,e,a){(t.exports=a("BkJT")(!1)).push([t.i,"\n.cardStyle {\n  margin: 5px 0;\n}\n.listEdit {\n  text-align: right;\n}\n.listEdit a {\n    margin: 5px;\n}\n.demo-table-expand .aui-form-item {\n  margin-bottom: 0;\n}\n",""])}});