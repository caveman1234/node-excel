webpackJsonp([35],{"2UKG":function(t,a,e){"use strict";var o=e("AA3o"),i=e.n(o);a.a=function t(){i()(this,t),this.data={BusiOper:"Q",AppNum:"",RoleNum:""},this.BusiDataKey="QueryMutualExclRole",this.TransServiceCode="ib-dbcomm/dbComm"}},G1kU:function(t,a,e){var o=e("i6sG");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e("8bSs")("2679faec",o,!0)},"X0f+":function(t,a,e){var o=e("j9jV");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e("8bSs")("4dd2a698",o,!0)},YUCW:function(t,a,e){"use strict";var o=e("AA3o"),i=e.n(o);a.a=function t(){i()(this,t),this.data={OperType:"M",AppNum:"",RoleNum:"",RoleName:"",RoleClass:"",LegalPersonNum:"",LegalPersonName:"",MutualExclRole:"",EffeDate:"",ExpiDate:"",SortNum:"",RoleStatus:""},this.CommCode="IBUserPermissionsManagement",this.SceneCode="RoleInfoMaint",this.TransServiceCode="mg-afaservices-upm/roleInfoMaint"}},YqgK:function(t,a,e){"use strict";var o=e("AA3o");e.n(o)},hGtK:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=e("aA9S"),i=e.n(o),r=e("a3Yh"),n=e.n(r),s=(e("2UKG"),e("2TkI"),e("0VOF")),l=(e("YqgK"),e("pADA")),u=e("0oES"),c=e("fCv1"),p=e("syAl"),d=e("tzsN"),_=(e("YUCW"),e("O99E"),e("AA3o")),m=e.n(_),f=function t(){m()(this,t),this.data={},this.CommCode="MOProduct",this.SceneCode="PrdModForMg",this.TransServiceCode="mo-afaservices-prd/prdModForMg"},b=function t(){m()(this,t),this.data={},this.CommCode="MOProduct",this.SceneCode="PrdDetailQry",this.TransServiceCode="mo-afaservices-prd/prdDetailQry"},h={components:{selectTree:d.a},name:"roleInfoManage",data:function(){var t;return{productStatues:[{typeId:"1",typeName:"1-上架"},{typeId:"0",typeName:"2-下架"}],productTypes:{1:"存款产品",2:"贷款产品",3:"理财产品",4:"保险产品"},fileUploadUrl:"",dialogLoading:!1,dialogShow:!1,loading:!1,lcvisible:!1,ckvisible:!1,dkvisible:!1,bxvisible:!1,treeList:[],busiInfo:{},newProductData:(t={ID:"",PROD_SORT:"",PROD_OL:"",PICT_FILE_PATH1:"",BuyLink:"1",PrdType:"",DEAL_REMRK:"",RECOM_PROD_FLAG:""},n()(t,"PrdType",""),n()(t,"ORG_NO",[]),n()(t,"INDSTL_CD",""),n()(t,"PROD_NM",""),t),CKTableData:[],rules:{PROD_OL:[{required:!0,message:"请选择产品状态",trigger:"change"}],PROD_SORT:[{required:!0,message:"请输入产品排序",trigger:"blur"},{validator:c.f,trigger:"blur"}],BuyLink:[{required:!0,message:"请选择购买类型",trigger:"blur"}],ORG_NO:[{type:"array",required:!0,message:"请选择所属机构",trigger:"change"}],PICT_FILE_PATH1:[{required:!0,message:"请输入渠道地址",trigger:"blur"}],RECOM_PROD_FLAG:[{required:!0,message:"请选择是否推荐",trigger:"blur"}],DEAL_REMRK:[{validator:c.l,trigger:"blur"},{validator:Object(c.h)(100),trigger:"blur"}]}}},props:{option:Object},computed:{isShow:{get:function(){return this.option.isShow},set:function(t){this.option.isShow=t}}},methods:{handleChange1:function(t){},tree:function(){},handleBeforeUpload:function(){},handleRemove:function(){this.$aui.message.show.error("上传失败")},handleSuccess:function(t,a,e){this.newProductData.PICT_FILE_PATH=this.newProductData.INDSTL_CD+"/"+a.name,this.$aui.message.show({type:"success",message:"上传成功!"}),this.dialogShow=!1},openUpdate:function(){var t=this;this.$nextTick(function(){t.setDate(),t.fileUploadUrl=p.a.get("ADImgFileUploadAddress")+"_"+t.newProductData.INDSTL_CD,t.option.isDetail&&t.quyBusiInfo()})},quyBusiInfo:function(){var t=this;this.loading=!0;var a=new b;a.data.INDSTL_CD=this.newProductData.INDSTL_CD,a.data.PrdType=this.newProductData.PrdType,Object(u.a)(a).then(function(a){t.loading=!1,t.busiInfo=a.RspInfo.PrdDetail[0],t.CKTableData=a.RspInfo.PrdDetail}).catch(function(a){t.loading=!1,t.$aui.message.show({type:"error",message:a.SYS_HEAD.ReturnMessage})})},setDate:function(){this.treeList=this.option.brnoList;var t=i()({},this.option.currentRow[0]);this.newProductData.INDSTL_CD=t.INDSTL_CD,this.newProductData.PROD_NM=t.PROD_NM,this.newProductData.ORG_NO.push(t.ORG_NO),this.newProductData.ID=t.ID,this.newProductData.PROD_SORT=t.PROD_SORT,this.newProductData.PROD_OL=t.PROD_OL,this.newProductData.PICT_FILE_PATH1=t.PICT_FILE_PATH1,this.newProductData.DEAL_REMRK=t.DEAL_REMRK,this.newProductData.RECOM_PROD_FLAG=t.RECOM_PROD_FLAG,this.newProductData.PICT_FILE_PATH=t.PICT_FILE_PATH,this.newProductData.PrdType=t.PRD_TYPE},cancleUserMod:function(){this.option.isShow=!1},closeUserMod:function(){this.dialogShow=!1,this.$refs.newProductData.resetFields(),this.$refs.newProductData.clearValidate()},userMod:function(){var t=this;this.$refs.newProductData.validate(function(a){if(a){t.loading=!0;var e=new f;e.data=i()({},t.newProductData),e.data.ORG_NO=e.data.ORG_NO[0],Object(u.a)(e).then(function(a){t.loading=!1,t.$aui.message.show({type:"success",message:"修改成功!"}),t.$emit("refreshTable"),t.option.isShow=!1}).catch(function(a){t.loading=!1,t.$aui.message.show({type:"error",message:a.SYS_HEAD.ReturnMessage})})}})}}},g={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("aui-dialog",{attrs:{title:t.option.title,visible:t.isShow,width:"800px","close-on-click-modal":!1},on:{"update:visible":function(a){t.isShow=a},hide:t.closeUserMod,show:t.openUpdate}},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[e("aui-card",[e("div",{attrs:{slot:"header"},slot:"header"},[e("span",{staticStyle:{"font-size":"20px"}},[t._v("概要信息")])]),t._v(" "),e("aui-form",{ref:"newProductData",attrs:{size:"mini",model:t.newProductData,rules:t.rules,"label-width":"120px","label-position":"right"}},[e("aui-row",{attrs:{gutter:10}},[e("aui-col",{attrs:{span:12}},[e("aui-form-item",{attrs:{prop:"INDSTL_CD",label:"产品编号:"}},[e("span",[t._v(t._s(t.newProductData.INDSTL_CD))])])],1),t._v(" "),e("aui-col",{attrs:{span:12}},[e("aui-form-item",{attrs:{prop:"PROD_NM",label:"产品名称:"}},[e("span",[t._v(t._s(t.newProductData.PROD_NM))])])],1),t._v(" "),e("aui-col",{attrs:{span:12}},[e("aui-form-item",{attrs:{prop:"PrdType",label:"产品类型:"}},[e("span",[t._v(t._s(t.productTypes[t.newProductData.PrdType]))])])],1),t._v(" "),e("aui-col",{attrs:{span:12}},[e("aui-form-item",{attrs:{prop:"PROD_OL",label:"产品状态:"}},[e("aui-select",{attrs:{placeholder:"请选择产品状态",disabled:t.option.isDetail},model:{value:t.newProductData.PROD_OL,callback:function(a){t.$set(t.newProductData,"PROD_OL",a)},expression:"newProductData.PROD_OL"}},t._l(t.productStatues,function(t){return e("aui-option",{key:t.typeId,attrs:{label:t.typeId+"-"+t.typeName,value:t.typeId}})}))],1)],1),t._v(" "),e("aui-col",{attrs:{span:12}},[e("aui-form-item",{attrs:{prop:"PROD_SORT",label:"产品排序:"}},[e("aui-input-number",{attrs:{mix:1,max:999,disabled:t.option.isDetail},model:{value:t.newProductData.PROD_SORT,callback:function(a){t.$set(t.newProductData,"PROD_SORT",a)},expression:"newProductData.PROD_SORT"}})],1)],1),t._v(" "),e("aui-col",{attrs:{span:12}},[e("aui-form-item",{attrs:{prop:"PICT_FILE_PATH",label:"图片位置:"}},[e("aui-input",{staticStyle:{width:"70%"},attrs:{disabled:!0},model:{value:t.newProductData.PICT_FILE_PATH,callback:function(a){t.$set(t.newProductData,"PICT_FILE_PATH",a)},expression:"newProductData.PICT_FILE_PATH"}}),t._v(" "),t.option.isDetail?t._e():e("aui-button",{staticStyle:{width:"25%"},attrs:{type:"primary",size:"mini"},on:{click:function(a){t.dialogShow=!0}}},[t._v("上传")])],1)],1),t._v(" "),e("aui-col",{attrs:{span:12}},[e("aui-form-item",{attrs:{prop:"BuyLink",label:"购买方式"}},[e("aui-radio",{attrs:{label:"1",border:"",disabled:t.option.isDetail},model:{value:t.newProductData.BuyLink,callback:function(a){t.$set(t.newProductData,"BuyLink",a)},expression:"newProductData.BuyLink"}},[t._v("手机银行")])],1)],1),t._v(" "),e("aui-col",{attrs:{span:12}},[e("aui-form-item",{attrs:{prop:"ORG_NO",label:"所属机构"}},[e("select-tree",{staticStyle:{width:"170px"},attrs:{"single-check":!0,props:{id:"orgno",label:"cname",children:"children"},"tree-data":t.treeList,placeholder:"请选择机构",disabled:t.option.isDetail},model:{value:t.newProductData.ORG_NO,callback:function(a){t.$set(t.newProductData,"ORG_NO",a)},expression:"newProductData.ORG_NO"}})],1)],1),t._v(" "),e("aui-col",{attrs:{span:12}},[e("aui-form-item",{attrs:{prop:"PICT_FILE_PATH1",label:"渠道地址:"}},[e("aui-input",{attrs:{disabled:t.option.isDetail},model:{value:t.newProductData.PICT_FILE_PATH1,callback:function(a){t.$set(t.newProductData,"PICT_FILE_PATH1",a)},expression:"newProductData.PICT_FILE_PATH1"}})],1)],1),t._v(" "),e("aui-col",{attrs:{span:12}},[e("aui-form-item",{attrs:{prop:"RECOM_PROD_FLAG",label:"是否推荐:"}},[t.option.isDetail&&"1"!=t.newProductData.RECOM_PROD_FLAG?t._e():e("aui-radio",{attrs:{label:"1",border:""},model:{value:t.newProductData.RECOM_PROD_FLAG,callback:function(a){t.$set(t.newProductData,"RECOM_PROD_FLAG",a)},expression:"newProductData.RECOM_PROD_FLAG"}},[t._v("推荐")]),t._v(" "),t.option.isDetail&&"0"!=t.newProductData.RECOM_PROD_FLAG?t._e():e("aui-radio",{attrs:{label:"0",border:""},model:{value:t.newProductData.RECOM_PROD_FLAG,callback:function(a){t.$set(t.newProductData,"RECOM_PROD_FLAG",a)},expression:"newProductData.RECOM_PROD_FLAG"}},[t._v("不推荐")])],1)],1),t._v(" "),e("aui-col",{attrs:{span:24}},[e("aui-form-item",{attrs:{prop:"DEAL_REMRK",label:"备注:"}},[e("aui-input",{attrs:{type:"textarea",resize:"none",autosize:{minRows:2,maxRows:2},readonly:t.option.isDetail},model:{value:t.newProductData.DEAL_REMRK,callback:function(a){t.$set(t.newProductData,"DEAL_REMRK",a)},expression:"newProductData.DEAL_REMRK"}})],1)],1)],1)],1),t._v(" "),t.option.isDetail?t._e():e("div",{staticStyle:{"text-align":"right",margin:"20px 0"}},[e("aui-button",{attrs:{size:"mini"},on:{click:t.cancleUserMod}},[t._v("返回")]),t._v(" "),e("aui-button",{attrs:{type:"primary",size:"mini"},on:{click:t.userMod}},[t._v("保存")])],1)],1),t._v(" "),e("aui-dialog",{attrs:{title:"图片上传",visible:t.dialogShow,width:"30%","close-on-click-modal":!1,"append-to-body":""},on:{"update:visible":function(a){t.dialogShow=a}}},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.dialogLoading,expression:"dialogLoading"}]},[e("aui-upload",{ref:"upload",staticClass:"upload-demo",attrs:{drag:"",action:t.fileUploadUrl,"before-upload":t.handleBeforeUpload,"on-error":t.handleRemove,"on-success":t.handleSuccess}},[e("i",{staticClass:"el-icon-upload avatar-uploader-icon"}),t._v(" "),e("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),e("em",[t._v("点击上传")])]),t._v(" "),e("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png文件，且不超过500kb")])])],1)]),t._v(" "),"3"==t.newProductData.PrdType&&t.option.isDetail?e("aui-card",[e("div",{attrs:{slot:"header"},slot:"header"},[e("span",{staticStyle:{"font-size":"20px"}},[t._v("业务信息")])]),t._v(" "),e("aui-form",{ref:"busiInfo",attrs:{size:"mini",model:t.busiInfo,rules:t.rules,"label-width":"120px","label-position":"right"}},[e("aui-row",{attrs:{gutter:10}},[e("aui-col",{attrs:{span:12}},[e("aui-form-item",{attrs:{prop:"CHREM_PROD_KIND_CD",label:"业务类型:"}},[e("span",[t._v(t._s(t.busiInfo.CHREM_PROD_KIND_CD))])])],1),t._v(" "),e("aui-col",{attrs:{span:12}},[e("aui-form-item",{attrs:{prop:"INVST_PERIOD",label:"存续期:"}},[e("span",[t._v(t._s(t.busiInfo.INVST_PERIOD))])])],1)],1),t._v(" "),e("aui-row",{attrs:{gutter:10}},[e("aui-col",{attrs:{span:12}},[e("aui-form-item",{attrs:{prop:"START_SALE_AMT",label:"起购金额:"}},[e("span",[t._v(t._s(t.busiInfo.START_SALE_AMT))])])],1),t._v(" "),e("aui-col",{attrs:{span:12}},[e("aui-form-item",{attrs:{prop:"EXPCT_ANULZD_GAINS_RT",label:"预期收益:"}},[e("span",[t._v(t._s(t.busiInfo.EXPCT_ANULZD_GAINS_RT))])])],1)],1),t._v(" "),e("aui-row",{attrs:{gutter:10}},[e("aui-col",{attrs:{span:24}},[e("aui-form-item",{attrs:{prop:"CHREM_PROD_RSG_PRD",label:"募集期间:"}},[e("span",[t._v(t._s(t.busiInfo.CHREM_PROD_RSG_PRD))])])],1)],1),t._v(" "),e("aui-row",{attrs:{gutter:10}},[e("aui-col",{attrs:{span:12}},[e("aui-form-item",{attrs:{prop:"INVALID_TM",label:"产品到期日:"}},[e("span",[t._v(t._s(t.busiInfo.INVALID_TM))])])],1),t._v(" "),e("aui-col",{attrs:{span:12}},[e("aui-form-item",{attrs:{prop:"PROD_RISK_LVL",label:"风险等级:"}},[e("span",[t._v(t._s(t.busiInfo.PROD_RISK_LVL))])])],1)],1),t._v(" "),e("aui-row",{attrs:{gutter:10}},[e("aui-col",{attrs:{span:24}},[e("aui-form-item",{attrs:{prop:"AGMT_FILE_NM",label:"产品协议书:"}},[e("aui-input",{attrs:{type:"textarea",resize:"none",autosize:{minRows:2,maxRows:4},readonly:!0},model:{value:t.busiInfo.AGMT_FILE_NM,callback:function(a){t.$set(t.busiInfo,"AGMT_FILE_NM",a)},expression:"busiInfo.AGMT_FILE_NM"}})],1)],1)],1)],1)],1):t._e(),t._v(" "),"1"==t.newProductData.PrdType&&t.option.isDetail?e("aui-card",[e("div",{attrs:{slot:"header"},slot:"header"},[e("span",{staticStyle:{"font-size":"20px"}},[t._v("业务信息")])]),t._v(" "),e("aui-table",{ref:"table",staticClass:"tableMarginTop",attrs:{data:t.CKTableData,border:"","highlight-current-row":"","header-row-class-name":""},on:{"selection-change":t.tree}},[e("aui-table-column",{attrs:{prop:"DPST_PERIOD",label:"期限"}}),t._v(" "),e("aui-table-column",{attrs:{prop:"INTRT",label:"年利率"}}),t._v(" "),e("aui-table-column",{attrs:{prop:"MIN_DPSIT_AMT",label:"存入金额(元)"}}),t._v(" "),e("aui-table-column",{attrs:{prop:"productLX",label:"到期利息(元)"}})],1)],1):t._e(),t._v(" "),"2"==t.newProductData.PrdType&&t.option.isDetail?e("aui-card",[e("div",{attrs:{slot:"header"},slot:"header"},[e("span",{staticStyle:{"font-size":"20px"}},[t._v("业务信息")])]),t._v(" "),e("aui-form",{ref:"busiInfo",attrs:{size:"mini",model:t.busiInfo,rules:t.rules,"label-width":"120px","label-position":"right"}},[e("aui-row",{attrs:{gutter:10}},[e("aui-col",{attrs:{span:12}},[e("aui-form-item",{attrs:{prop:"LN_PERIOD",label:"贷款期限:"}},[e("span",[t._v(t._s(t.busiInfo.LN_PERIOD))])])],1),t._v(" "),e("aui-col",{attrs:{span:12}},[e("aui-form-item",{attrs:{prop:"LN_QTA",label:"贷款额度:"}},[e("span",[t._v(t._s(t.busiInfo.LN_QTA))])])],1)],1),t._v(" "),e("aui-row",{attrs:{gutter:10}},[e("aui-col",{attrs:{span:24}},[e("aui-form-item",{attrs:{prop:"LN_OBJECT",label:"贷款对象:"}},[e("aui-input",{attrs:{type:"textarea",resize:"none",autosize:{minRows:2,maxRows:4},readonly:!0},model:{value:t.busiInfo.LN_OBJECT,callback:function(a){t.$set(t.busiInfo,"LN_OBJECT",a)},expression:"busiInfo.LN_OBJECT"}})],1)],1)],1),t._v(" "),e("aui-row",{attrs:{gutter:10}},[e("aui-col",{attrs:{span:24}},[e("aui-form-item",{attrs:{prop:"APPLY_COND_COMNT",label:"贷款条件:"}},[e("aui-input",{attrs:{type:"textarea",resize:"none",autosize:{minRows:2,maxRows:4},readonly:!0},model:{value:t.busiInfo.APPLY_COND_COMNT,callback:function(a){t.$set(t.busiInfo,"APPLY_COND_COMNT",a)},expression:"busiInfo.APPLY_COND_COMNT"}})],1)],1)],1)],1)],1):t._e(),t._v(" "),"4"==t.newProductData.PrdType&&t.option.isDetail?e("aui-card",[e("div",{attrs:{slot:"header"},slot:"header"},[e("span",{staticStyle:{"font-size":"20px"}},[t._v("业务信息")])]),t._v(" "),e("aui-form",{ref:"busiInfo",attrs:{size:"mini",model:t.busiInfo,rules:t.rules,"label-width":"120px","label-position":"right"}},[e("aui-row",{attrs:{gutter:10}},[e("aui-col",{attrs:{span:12}},[e("aui-form-item",{attrs:{prop:"ORG_NM",label:"发行公司:"}},[e("span",[t._v(t._s(t.busiInfo.ORG_NM))])])],1),t._v(" "),e("aui-col",{attrs:{span:12}},[e("aui-form-item",{attrs:{prop:"PROD_TYP_CD",label:"产品类型:"}},[e("span",[t._v(t._s(t.busiInfo.PROD_TYP_CD))])])],1)],1),t._v(" "),e("aui-row",{attrs:{gutter:10}},[e("aui-col",{attrs:{span:12}},[e("aui-form-item",{attrs:{prop:"START_SALE_AMT",label:"购买金额:"}},[e("span",[t._v(t._s(t.busiInfo.START_SALE_AMT))])])],1),t._v(" "),e("aui-col",{attrs:{span:12}},[e("aui-form-item",{attrs:{prop:"INSNT_AGE1",label:"投保年龄:"}},[e("span",[t._v(t._s(t.busiInfo.INSNT_AGE1))])])],1)],1),t._v(" "),e("aui-row",{attrs:{gutter:10}},[e("aui-col",{attrs:{span:12}},[e("aui-form-item",{attrs:{prop:"PROD_RISK_LVL",label:"产品风险等级:"}},[e("span",[t._v(t._s(t.busiInfo.PROD_RISK_LVL))])])],1),t._v(" "),e("aui-col",{attrs:{span:12}},[e("aui-form-item",{attrs:{prop:"PAY_FEE_MANR_CD",label:"缴费方式:"}},[e("span",[t._v(t._s(t.busiInfo.PAY_FEE_MANR_CD))])])],1)],1),t._v(" "),e("aui-row",{attrs:{gutter:10}},[e("aui-col",{attrs:{span:12}},[e("aui-form-item",{attrs:{prop:"PAY_FEE_STDD_NM",label:"缴费标准:"}},[e("span",[t._v(t._s(t.busiInfo.PAY_FEE_STDD_NM))])])],1),t._v(" "),e("aui-col",{attrs:{span:12}},[e("aui-form-item",{attrs:{prop:"INS_PERIOD",label:"保险期限:"}},[e("span",[t._v(t._s(t.busiInfo.INS_PERIOD))])])],1)],1),t._v(" "),e("aui-row",{attrs:{gutter:10}},[e("aui-col",{attrs:{span:24}},[e("aui-form-item",{attrs:{prop:"AGMT_FILE_NM",label:"产品协议书:"}},[e("aui-input",{attrs:{type:"textarea",resize:"none",autosize:{minRows:2,maxRows:4},readonly:!0},model:{value:t.busiInfo.AGMT_FILE_NM,callback:function(a){t.$set(t.busiInfo,"AGMT_FILE_NM",a)},expression:"busiInfo.AGMT_FILE_NM"}})],1)],1)],1)],1)],1):t._e()],1)])],1)},staticRenderFns:[]};var v=e("/Xao")(h,g,!1,function(t){e("X0f+")},"data-v-662ca57e",null).exports,P=function t(){m()(this,t),this.data={currpage:"",pagenum:"",Brno:"",PrdType:"",PrdName:""},this.CommCode="MOProduct",this.SceneCode="PrdQryForMg",this.TransServiceCode="mo-afaservices-prd/prdQryForMg"},D={name:"product-manage",components:{selectTree:d.a},data:function(){return{loading:!1,brnoList:[],form:{branchNum:[],productType:"1",productName:"",productFlag:""},productTypeMap:{},productFlag:[{value:"1",label:"1-推荐"},{value:"2",label:"2-不推荐"}],productTypeList:[{typeId:"1",typeName:"1-存款产品"},{typeId:"2",typeName:"2-贷款产品"},{typeId:"3",typeName:"3-理财产品"},{typeId:"4",typeName:"4-保险产品"}],pageSize:void 0,currentRow:[],currentPage:1,totalRcrdNum:0,tableData:[],dialogList:{updateProduct:v},dialogOption:{isShow:!1,currentRow:[],title:"",isAdd:!0},rules:{productType:[{required:!0,message:"请选择产品类型",trigger:"change"}],branchNum:[{required:!0,type:"array",message:"请选择机构",trigger:"change"}]}}},computed:{},mounted:function(){this.pageSize=p.a.get("PageSize"),this.productTypeMap=l.a.objArray2Hash(this.productTypeList,"typeId"),this.queryBranchNum(),this.form.branchNum.push(this.$store.getters.BranchNum)},created:function(){},methods:{queryBranchNum:function(){var t=this;this.loading=!0;var a=new s.a;a.data.orgno=this.$store.getters.BranchNum,Object(u.a)(a).then(function(a){t.loading=!1,t.brnoList=a.RspInfo.Result||[],t.brnoMap=a.RspInfo.orgMap||{},t.brnoList=l.a.formatTreeData(t.brnoList,"orgno","superno")}).catch(function(a){t.loading=!1,t.$aui.message.show.error(a.SYS_HEAD.ReturnMessage)})},queryProductList:function(){var t=this;this.$refs.form.validate(function(a){if(a){t.loading=!0;var e=new P;e.data.pagenum=t.pageSize,e.data.currpage=t.currentPage,e.data.Brno=t.form.branchNum[0]||"",e.data.PrdType=t.form.productType,e.data.PrdName=t.form.productName,e.data.RecomPrdFlag=t.form.productFlag,Object(u.a)(e).then(function(a){t.loading=!1,a.RspInfo.PrdInfoList?(t.tableData=a.RspInfo.PrdInfoList||[],t.totalRcrdNum=a.RspInfo.TotalRowNum||0):t.$aui.message.show.warning("无满足条件记录")}).catch(function(a){t.tableData=[],t.totalRcrdNum=0,t.loading=!1,t.$aui.message.show.error(a.SYS_HEAD.ReturnMessage)})}})},changePage:function(t){},handleCurrentChange:function(t){this.currentRow=t},dataFormat:function(t,a){return"PROD_OL"===a.property?"1"==t[a.property]?"1-上架":"0"==t[a.property]?"2-下架":t[a.property]:"PRD_TYPE"===a.property?this.productTypeMap[t[a.property]]?this.productTypeMap[t[a.property]].typeName:t[a.property]:"RECOM_PROD_FLAG"===a.property?"1"==t[a.property]?"1-推荐":"0"==t[a.property]?"0-不推荐":t[a.property]:void 0},resetForm:function(){this.$refs.form.resetFields(),this.$refs.form.clearValidate(),this.tableData=[],this.currentPage=1},updateProduct:function(){this.dialogOption.isShow=!0,this.dialogOption.title="修改产品",this.dialogOption.isDetail=!1,this.dialogOption.currentRow=this.currentRow,this.dialogOption.brnoList=this.brnoList},detailProduct:function(){this.dialogOption.isShow=!0,this.dialogOption.title="产品详情",this.dialogOption.isDetail=!0,this.dialogOption.currentRow=this.currentRow,this.dialogOption.brnoList=this.brnoList}}},R={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{"element-loading-text":"加载中。。。"}},[e("aui-card",{staticStyle:{overflow:"visible"}},[e("aui-form",{ref:"form",attrs:{model:t.form,size:"mini","label-position":"top",rules:t.rules}},[e("aui-row",{attrs:{gutter:10}},[e("aui-col",{attrs:{lg:4,md:6}},[e("aui-form-item",{attrs:{label:"适用机构",prop:"branchNum"}},[e("select-tree",{staticStyle:{width:"170px"},attrs:{"single-check":!0,props:{id:"orgno",label:"cname",children:"children"},"tree-data":t.brnoList,placeholder:"请选择机构"},model:{value:t.form.branchNum,callback:function(a){t.$set(t.form,"branchNum",a)},expression:"form.branchNum"}})],1)],1),t._v(" "),e("aui-col",{attrs:{lg:4,md:6}},[e("aui-form-item",{attrs:{label:"产品类型",prop:"productType"}},[e("aui-select",{attrs:{placeholder:"请选择产品类型"},model:{value:t.form.productType,callback:function(a){t.$set(t.form,"productType",a)},expression:"form.productType"}},t._l(t.productTypeList,function(t){return e("aui-option",{key:t.typeId,attrs:{label:t.typeName,value:t.typeId}})}))],1)],1),t._v(" "),e("aui-col",{attrs:{lg:4,md:6}},[e("aui-form-item",{attrs:{label:"产品名称",prop:"productName"}},[e("aui-input",{attrs:{placeholder:"请输入产品名称"},model:{value:t.form.productName,callback:function(a){t.$set(t.form,"productName",a)},expression:"form.productName"}})],1)],1),t._v(" "),e("aui-col",{attrs:{lg:4,md:6}},[e("aui-form-item",{attrs:{label:"是否推荐",prop:"productFlag"}},[e("aui-select",{attrs:{placeholder:"请选择是否推荐"},model:{value:t.form.productFlag,callback:function(a){t.$set(t.form,"productFlag",a)},expression:"form.productFlag"}},t._l(t.productFlag,function(t){return e("aui-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)],1),t._v(" "),e("aui-col",{staticClass:"searchBtnMarginTop",attrs:{lg:2,md:3}},[e("aui-button",{attrs:{type:"primary",icon:"aui-icon-search",loading:t.loading,size:"mini"},on:{click:t.queryProductList}},[t._v("查询")])],1),t._v(" "),e("aui-col",{staticClass:"searchBtnMarginTop",attrs:{lg:2,md:3}},[e("aui-button",{attrs:{type:"warning",size:"mini",icon:"aui-icon-refresh"},on:{click:function(a){t.resetForm("form")}}},[t._v("重置")])],1)],1)],1)],1),t._v(" "),e("aui-card",{staticStyle:{"margin-top":"10px"}},[e("aui-row",{attrs:{gutter:10}},[e("aui-col",{attrs:{lg:2,md:3}},[e("aui-button",{attrs:{type:"primary",size:"mini",icon:"aui-icon-edit",disabled:1!=t.currentRow.length},on:{click:t.updateProduct}},[t._v("修改")])],1),t._v(" "),e("aui-col",{attrs:{lg:2,md:3}},[e("aui-button",{attrs:{type:"primary",size:"mini",icon:"aui-icon-info",disabled:1!=t.currentRow.length},on:{click:t.detailProduct}},[t._v("详情")])],1)],1),t._v(" "),e("aui-table",{ref:"table",staticClass:"tableMarginTop",staticStyle:{"min-height":"390px"},attrs:{data:t.tableData,border:"","highlight-current-row":"","header-row-class-name":"tableHeaderClass"},on:{"selection-change":t.handleCurrentChange}},[e("aui-table-column",{attrs:{type:"selection",width:"40px"}}),t._v(" "),e("aui-table-column",{attrs:{prop:"INDSTL_CD",label:"产品编号"}}),t._v(" "),e("aui-table-column",{attrs:{prop:"PROD_NM",label:"产品名称"}}),t._v(" "),e("aui-table-column",{attrs:{prop:"PRD_TYPE",formatter:t.dataFormat,label:"产品类型"}}),t._v(" "),e("aui-table-column",{attrs:{prop:"PROD_OL",formatter:t.dataFormat,label:"状态"}}),t._v(" "),e("aui-table-column",{attrs:{prop:"PROD_SORT",label:"排序"}}),t._v(" "),e("aui-table-column",{attrs:{prop:"PICT_FILE_PATH",label:"图片位置"}}),t._v(" "),e("aui-table-column",{attrs:{prop:"ORG_NO",label:"所属机构"}}),t._v(" "),e("aui-table-column",{attrs:{prop:"RECOM_PROD_FLAG",formatter:t.dataFormat,label:"是否推荐"}}),t._v(" "),e("aui-table-column",{attrs:{prop:"MATN_DT",label:"维护时间"}})],1),t._v(" "),e("div",{staticStyle:{"text-align":"right","margin-top":"20px"}},[e("aui-pagination",{attrs:{"current-page":t.currentPage,background:"","page-size":t.pageSize,layout:"total, prev, pager, next, jumper",total:t.totalRcrdNum},on:{"current-change":t.changePage}})],1)],1),t._v(" "),e("keep-alive",[e(t.dialogList.updateProduct,{tag:"component",attrs:{option:t.dialogOption},on:{refreshTable:t.queryProductList}})],1)],1)},staticRenderFns:[]};var w=e("/Xao")(D,R,!1,function(t){e("G1kU")},"data-v-08b485f2",null);a.default=w.exports},i6sG:function(t,a,e){(t.exports=e("BkJT")(!1)).push([t.i,'\n.selectTree[data-v-08b485f2] {\n  min-width: 150px;\n}\n.text[data-v-08b485f2] {\n  font-size: 14px;\n}\n.item[data-v-08b485f2] {\n  margin-bottom: 18px;\n}\n.dialog-text[data-v-08b485f2] {\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  color: red;\n}\n.clearfix[data-v-08b485f2]:before,\n.clearfix[data-v-08b485f2]:after {\n  display: table;\n  content: "";\n}\n.clearfix[data-v-08b485f2]:after {\n  clear: both;\n}\n.aui-card[data-v-08b485f2] {\n  width: 100%;\n}\n.aui-form-item[data-v-08b485f2] {\n  margin-left: 30px;\n}\n.aui-form-item1[data-v-08b485f2] {\n  margin-left: 10px;\n}\n.box2-button[data-v-08b485f2] {\n  width: 80px;\n}\n.aui-card[data-v-08b485f2] {\n  overflow: inherit;\n}\n',""])},j9jV:function(t,a,e){(t.exports=e("BkJT")(!1)).push([t.i,"\n.content[data-v-662ca57e] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.require[data-v-662ca57e] {\n  color: red;\n}\n.dialog-text[data-v-662ca57e] {\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  color: red;\n  font-size: 18px;\n}\n.role[data-v-662ca57e] {\n  width: 95%;\n  border: 1px solid #eee;\n  border-radius: 4px;\n  height: 290px;\n}\n.role .roleHeader[data-v-662ca57e] {\n    color: #606266;\n    font-weight: 500;\n    font-size: 14px;\n    background: #f5f7fa;\n    height: 42px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding: 9px;\n    overflow-y: auto;\n}\n.el-dialog__body[data-v-662ca57e] {\n  padding: 20px;\n  padding-top: 10px;\n}\n.aui-card[data-v-662ca57e] {\n  overflow: inherit;\n}\n.avatar-uploader-icon[data-v-662ca57e] {\n  font-size: 28px;\n  color: #8c939d;\n  width: 78px;\n  height: 78px;\n  line-height: 178px;\n  text-align: center;\n}\n",""])}});