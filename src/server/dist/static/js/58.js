webpackJsonp([58],{"+fKn":function(t,e,a){var i=a("WgcD");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("8bSs")("483c1314",i,!0)},WgcD:function(t,e,a){(t.exports=a("BkJT")(!1)).push([t.i,"\n.ADupload.avatar-uploader .aui-upload {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.ADupload.avatar-uploader .aui-upload:hover {\n    border-color: #409EFF;\n}\n.ADupload.avatar-uploader .aui-upload .avatar-uploader-icon {\n    font-size: 28px;\n    color: #8c939d;\n    width: 356px;\n    height: 216px;\n    line-height: 216px;\n    text-align: center;\n}\n.ADupload.avatar-uploader .aui-upload .avatar {\n    width: 356px;\n    height: 216px;\n    display: block;\n}\n",""])},gw4v:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("0oES"),o=a("syAl"),s=a("fCv1"),n=a("Zqsi"),r=a("pADA"),l=a("AA3o"),d=a.n(l),u=function t(){d()(this,t),this.data={ProtoName:"",ProtoID:"",FileId:"",FileName:""},this.CommCode="SSParamManage",this.SceneCode="ProtocolUpd",this.TransServiceCode="mg-afaservices-stm/protocolManage"},c=function t(){d()(this,t),this.data={ProtoName:"",FileId:"",FileName:""},this.CommCode="SSParamManage",this.SceneCode="ProtocolAdd",this.TransServiceCode="mg-afaservices-stm/protocolManage"},m={props:{option:Object},data:function(){return{loading:!1,disabled:!1,fileList:[],fileSize:1,absFilePath:"",afaToJSUploadFilePath:"",uploadData:{},upLoadType:["pdf"],imageUrl:"",fileUrl:"",form:{AgmtName:"",fileId:"",fileName:""},rules:{file:[{trigger:"blur",validator:this.picVali}],AgmtName:[{required:!0,message:"请输入协议名称",trigger:"blur"},{require:!1,validator:Object(s.h)(100),trigger:"blur"}]}}},created:function(){var t=this;this.$nextTick(function(){t.fileUrl=o.a.get("uploadFileToABSAddress"),t.absFilePath=o.a.get("absFilePath"),t.afaToJSUploadFilePath=o.a.get("afaToJSUploadFilePath"),t.uploadData.destDir=t.absFilePath})},watch:{},methods:{openUpdate:function(){"2"==this.option.mark?this.setData():this.$refs.form&&(this.form.AgmtName="",this.fileList=[],this.$refs.form.clearValidate())},setData:function(){if(this.imageUrl=this.option.currentRow.FileName,this.form.AgmtName=this.option.currentRow.ProtoName,this.option.currentRow.FileName){var t={};t.name=this.option.currentRow.FileName,this.fileList.push(t)}},picVali:function(t,e,a){""==this.imageUrl?a("协议文档不能为空"):a()},fileChange:function(t){},submitUpload:function(){this.$refs.upload.submit()},handleBeforeUpload:function(t){var e=t.name.substring(t.name.lastIndexOf(".")+1),a=t.size/1024/1024<this.fileSize,i=-1==this.upLoadType.indexOf(e);return i&&this.$aui.message.show.error("上传文件格式错误"),a||this.$aui.message.show.error("上传文件大小不能超过"+this.fileSize+"M"),!i&&a},handleRemove:function(t,e){this.imageUrl="",this.$aui.message.show.error("上传失败")},handleSuccess:function(t,e,a){var o=this;this.imageUrl=e.name,this.loading=!0;var s=new n.a;s.OpType="1",s.FileNm=this.uploadData.destDir+e.name,s.FileNm1=this.afaToJSUploadFilePath,s.Wher="0",s.data.FILE_NAME=e.name,s.data.SysCode="SYS_MG_01",s.data.FILE_UPLOAD_PATH=this.afaToJSUploadFilePath,Object(i.a)(s).then(function(t){o.loading=!1,o.form.fileName=e.name,o.form.fileId=t.RspInfo.FILE_ID,o.$aui.message.show({type:"success",message:"上传成功！文件编号："+o.form.fileId})}).catch(function(t){o.loading=!1,o.fileList=[],o.imageUrl="",o.$aui.message.show({type:"error",message:"上传失败!"+t.SYS_HEAD.ReturnMessage})})},confirm:function(){var t=this;this.$refs.form.validate(function(e){if(e){t.loading=!0;var a="1"==t.option.mark?new c:new u;a.data.ProtoName=t.form.AgmtName,a.data.FileId=t.form.fileId,a.data.FileName=t.form.fileName,"2"==t.option.mark&&(a.data.ProtoID=t.option.currentRow.ProtoID),Object(i.a)(a).then(function(e){t.$emit("refreshTable"),t.option.isShow=!1;var a="1"==t.option.mark?"新增成功":"修改成功";t.$aui.message.show({type:"success",message:a+"!"}),t.loading=!1}).catch(function(e){t.$aui.message.show({type:"error",message:e.SYS_HEAD.ReturnMessage+"!"}),t.loading=!1})}})},closeUpdate:function(){this.disabled=!1,this.fileList=[],this.$refs.upload.clearFiles(),this.$refs.form.resetFields(),this.$refs.form.clearValidate()}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("aui-dialog",{attrs:{title:t.option.title,visible:t.option.isShow,width:"800px","close-on-click-modal":!1},on:{"update:visible":function(e){t.$set(t.option,"isShow",e)},show:t.openUpdate,hide:t.closeUpdate}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[a("aui-card",[a("aui-form",{ref:"form",attrs:{model:t.form,size:"mini",rules:t.rules,"label-width":"140px","label-position":"top"}},[a("aui-row",{attrs:{gutter:40}},[a("aui-col",{attrs:{span:12}},[a("aui-form-item",{attrs:{label:"协议名称:",prop:"AgmtName"}},[a("aui-input",{attrs:{placeholder:"请输入协议名称",disabled:t.option.isDisabled},model:{value:t.form.AgmtName,callback:function(e){t.$set(t.form,"AgmtName",e)},expression:"form.AgmtName"}})],1)],1)],1),t._v(" "),a("aui-row",{attrs:{gutter:40}},[a("aui-col",{attrs:{span:20}},[a("aui-form-item",{attrs:{label:"协议文件",prop:"file"}},[a("aui-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:t.fileUrl,limit:1,"auto-upload":!1,data:t.uploadData,"before-upload":t.handleBeforeUpload,"on-error":t.handleRemove,"on-success":t.handleSuccess,"file-list":t.fileList,accept:".pdf"}},[a("aui-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("选取文件")]),t._v(" "),a("aui-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success"},on:{click:t.submitUpload}},[t._v("上传到服务器")]),t._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v(t._s("仅支持.pdf格式文件，文件大小不超过"+t.fileSize+"M"))])],1)],1)],1)],1)],1)],1),t._v(" "),a("aui-row",{staticStyle:{margin:"20px 0","text-align":"right"}},[a("aui-button",{attrs:{type:"primary",size:"mini"},on:{click:t.confirm}},[t._v(t._s(t.option.button))]),t._v(" "),a("aui-button",{attrs:{size:"mini"},on:{click:function(e){t.option.isShow=!1}}},[t._v("取消")])],1)],1)])],1)},staticRenderFns:[]};var h=a("/Xao")(m,p,!1,function(t){a("+fKn")},null,null).exports,g=function t(){d()(this,t),this.data={ProtoID:""},this.CommCode="SSParamManage",this.SceneCode="ProtocolDel",this.TransServiceCode="mg-afaservices-stm/protocolManage"},f=function t(){d()(this,t),this.data={Page:"",PageNum:"",ProtoName:""},this.CommCode="SSParamManage",this.SceneCode="ProtocolQuey",this.TransServiceCode="mg-afaservices-stm/protocolManage"},v=(a("xcog"),a("QUZ0")),b={components:{},data:function(){return{userName:"",currentRow:[],AgmtForm:{AgmtName:""},total:void 0,tableDataList:[],loading:!1,isDisabledDel:!1,dialogList:{agreementUpdate:h},dialogOptions:{isShow:!1},currentPage:1,pageSize:void 0,rules:{},absFilePath:"",requestAddress:"",afaToJSDownloadFilePath:""}},mounted:function(){var t=this;this.pageSize=o.a.get("PageSize"),this.$nextTick(function(){t.absFilePath=o.a.get("absDownFilePath"),t.requestAddress=o.a.get("viewFileAddress"),t.afaToJSDownloadFilePath=o.a.get("afaToJSDownloadFilePath")})},computed:{},methods:{download:function(t){var e=this;this.loading=!0;var a=new v.a;a.OpType="0",a.FileNm=this.absFilePath,a.FileNm1=this.afaToJSDownloadFilePath,a.data.FILE_ID=t.row.FileId,a.data.FILE_NAME=t.row.FileName,a.data.SysCode="SYS_MG_01",Object(i.a)(a).then(function(t){e.loading=!1;var a=t.RspInfo.fileDownPath;a=a.substring(a.lastIndexOf("/")+1,a.length),e.downloadFile(e.requestAddress+a)}).catch(function(t){e.loading=!1,e.$aui.message.show({type:"warning",message:t.SYS_HEAD.ReturnMessage})})},downloadFile:function(t){if(t)try{window.location.href=t}catch(e){this.$aui.message.show({type:"warning",message:"下载URL出错!"+t})}},dataFormat:function(t,e){return r.a.timeFormat2Date(t[e.property])},clickAdd:function(){this.dialogOptions.isShow=!0,this.dialogOptions.title="新增协议",this.dialogOptions.isDisabled=!1,this.dialogOptions.mark="1",this.dialogOptions.button="新增"},clickUpdate:function(){this.dialogOptions.isShow=!0,this.dialogOptions.title="修改协议",this.dialogOptions.isDisabled=!0,this.dialogOptions.currentRow=this.currentRow,this.dialogOptions.mark="2",this.dialogOptions.button="保存"},checkPermission:function(t){"1"==t?this.clickUpdate():this.delBut()},delBut:function(){var t=this;this.$aui.confirm.show("此操作将永久删除该协议, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.dateDel()}).catch(function(){t.$aui.message.show({type:"info",message:"已取消删除"})})},dateDel:function(){var t=this;this.loading=!0;var e=new g;e.data.ProtoID=this.currentRow.ProtoID,Object(i.a)(e).then(function(e){t.loading=!1,t.$aui.message.show({type:"success",message:"删除成功！"}),t.query()}).catch(function(e){t.$aui.message.show({type:"warning",message:e.SYS_HEAD.ReturnMessage}),t.loading=!1})},query:function(){var t=this;this.loading=!0;var e=new f;e.data.ProtoName=this.AgmtForm.AgmtName,e.data.PageNum=this.pageSize,e.data.Page=this.currentPage,Object(i.a)(e).then(function(e){t.loading=!1,t.tableDataList=e.RspInfo.QueyResult||[],t.total=e.RspInfo.TotalRcdCount||0,t.total&&0!==t.total||(t.$aui.message.show({type:"warning",message:"没有满足条件的记录!"}),t.tableDataList=[])}).catch(function(e){t.loading=!1,t.$aui.message.show({type:"error",message:"请求失败，错误码:"+e.SYS_HEAD.ReturnCode+"，错误信息："+e.SYS_HEAD.ReturnMessage}),t.tableDataList=[]})},handleCurrentChange:function(t){this.currentPage=t,this.query()},selectList:function(t){1==t.length?(this.isDisabledDel=!0,this.currentRow=t[0]):t.length>1?this.$refs.tableDataList.toggleRowSelection(t[0]):this.isDisabledDel=!1}}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{"element-loading-text":"加载中。。。"}},[a("aui-card",[a("aui-form",{ref:"AgmtForm",staticStyle:{overflow:"visible"},attrs:{model:t.AgmtForm,rules:t.rules,size:"mini","label-position":"top"}},[a("aui-row",{attrs:{gutter:10}},[a("aui-col",{attrs:{lg:6,md:6}},[a("aui-form-item",{attrs:{label:"协议名称",prop:"AgmtName"}},[a("aui-input",{attrs:{placeholder:"请输入协议名称"},model:{value:t.AgmtForm.AgmtName,callback:function(e){t.$set(t.AgmtForm,"AgmtName",e)},expression:"AgmtForm.AgmtName"}})],1)],1),t._v(" "),a("aui-col",{staticClass:"searchBtnMarginTop",attrs:{lg:2,md:3}},[a("aui-button",{attrs:{type:"primary",size:"mini",icon:"aui-icon-search"},on:{click:t.query}},[t._v("查询")])],1)],1)],1)],1),t._v(" "),a("aui-card",{staticStyle:{"margin-top":"10px"}},[a("aui-row",[a("aui-col",{attrs:{lg:2,md:3}},[t.btnPermission("Button_Menu_Add")?a("aui-button",{attrs:{type:"primary",icon:"aui-icon-plus",disabled:t.isDisabledDel,size:"mini"},on:{click:t.clickAdd}},[t._v("新增")]):t._e()],1),t._v(" "),a("aui-col",{attrs:{lg:2,md:3}},[t.btnPermission("Button_Menu_Add")?a("aui-button",{attrs:{type:"primary",icon:"aui-icon-edit",disabled:!t.isDisabledDel,size:"mini"},on:{click:function(e){t.checkPermission("1")}}},[t._v("修改")]):t._e()],1),t._v(" "),a("aui-col",{attrs:{lg:2,md:3}},[t.btnPermission("Button_Menu_Edit")?a("aui-button",{attrs:{type:"danger",icon:"aui-icon-delete",disabled:!t.isDisabledDel,size:"mini"},on:{click:function(e){t.checkPermission()}}},[t._v("删除")]):t._e()],1)],1),t._v(" "),a("aui-table",{ref:"tableDataList",staticClass:"tableMarginTop",staticStyle:{"min-height":"390px"},attrs:{data:t.tableDataList,border:"","header-row-class-name":"tableHeaderClass"},on:{"selection-change":t.selectList}},[a("aui-table-column",{attrs:{type:"selection",width:"40px"}}),t._v(" "),a("aui-table-column",{attrs:{prop:"ProtoName",label:"协议名称","min-width":"137px"}}),t._v(" "),a("aui-table-column",{attrs:{prop:"MainDate",label:"导入/修改日期",formatter:t.dataFormat,"min-width":"137px"}}),t._v(" "),a("aui-table-column",{attrs:{prop:"MainUser",label:"操作员","min-width":"107px","show-overflow-tooltip":""}}),t._v(" "),a("aui-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("aui-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.download(e)}}},[t._v("下载")])]}}])})],1),t._v(" "),a("div",{staticStyle:{"text-align":"right","margin-top":"10px"}},[a("aui-pagination",{attrs:{background:"","current-page":t.currentPage,"page-size":10,layout:"total, prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)],1),t._v(" "),a("keep-alive",[a(t.dialogList.agreementUpdate,{tag:"component",attrs:{option:t.dialogOptions},on:{refreshTable:t.query}})],1)],1)},staticRenderFns:[]};var S=a("/Xao")(b,w,!1,function(t){a("k4xE")},"data-v-5e70d216",null);e.default=S.exports},k4xE:function(t,e,a){var i=a("ra0I");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("8bSs")("3b222ff6",i,!0)},ra0I:function(t,e,a){(t.exports=a("BkJT")(!1)).push([t.i,"",""])}});