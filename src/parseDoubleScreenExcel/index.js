
var xlsx = require('node-xlsx');
var fs = require("fs");
var path = require("path");
var config = require("../config");
var utils = require("../parseAuthExcel/utils");
var _ = require("underscore");
var generateSql = require("./generateSql");

var excelPath = path.resolve(__dirname,config.doubleSrceenExcelName);
var workSheets = xlsx.parse(fs.readFileSync(excelPath));
var doubleScreenWorkSheet = workSheets.find(v => v.name === '双屏确认').data;
var doubleScreenFieldsWorkSheet = workSheets.find(v => v.name === '双屏确认字段信息').data;
doubleScreenWorkSheet = doubleScreenWorkSheet.filter(row => row.length !== 0);
doubleScreenFieldsWorkSheet = doubleScreenFieldsWorkSheet.filter(row => row.length !== 0);
class DoubleScreen {
  constructor(){
    this.startRuleNoFun = utils.generateNo(30000);// 规则号
    this.startCondNoFun = utils.generateNo(30000);// 条件号
    /**
     * uniqSheetData 结构
      {
        funcKey1:[[1,2,3],[4,5,6]],
        funcKey2:[[7,8,9]],
      }
     */
    this.uniqSheetData =  _.groupBy(doubleScreenWorkSheet.slice(1),function(row){
      return row[7] + "_" + row[17];
    })
    // 双屏字段表
    this.uniqSheetFieldsData =  _.groupBy(doubleScreenFieldsWorkSheet.slice(1),function(row){
      return row[0] + "_" + row[5];
    })
    // 规则表 IB_OM_RULE_INFO
    this.ruleInfoData = [["RULE_NO","RULE_TYP_CD","HOLI_FLG","RULE_TRI_POSITION","SUIT_CHNL_SCP","SUIT_LPR_SCP","SUIT_ORG_SCP","SUIT_TX_SCP","RULE_COMNT","EFFT_FLG","OPER_TELR_NO","OPER_TM","OPER_RSN"]];
    // 条件表 IB_OM_RULECOND_INFO
    this.condData = [["OPRTN_COND_NO","DICTRY_NM","OPER_SYM_1","CMPR_VAL","OPER_SYM_2","VALUE2","TRAN_CD","COND_DESC","OPER_TELR_NO","OPER_TM","OPER_RSN","CMPR_VAL_DATA_DICTRY_FLG","PUB_DICTRY_FLG","DICTRY_DESC"]];
    // 规则条件映射表 IB_OM_RULECOND_RLT
    this.ruleCondData = [["RULE_COND_NO","CMPL_MODE_FLG","OPRTN_RULE_NO"]];
    // 双屏字段表 TE_PARA_OUTCABINETCFG_INFO
    this.doubleScreenField = [["TRAN_CD","BUNDRY_INDCT_HEDLN_NM","SCRN_NO","SCRN_SORT_SER_NO","BUNDRY_INDCT_NM","GT_VAL_SCP_CD","KEY_GET_VAL","ENTR_NM","STUS_CD","REMRK_1"]];
    this.init();
  }
  init(){
    var uniqSheetDataKeys = Object.keys(this.uniqSheetData);
    uniqSheetDataKeys.forEach((key,index) => {
      // 同一条件数据 
      var data = this.uniqSheetData[key];
      var RULE_NO_OBJ = this.startRuleNoFun();
      var OPRTN_COND_NO_OBJ = this.startCondNoFun();
      var RULE_NO = RULE_NO_OBJ.padStart(6);
      var OPRTN_COND_NO = "DS" + OPRTN_COND_NO_OBJ.padStart(5);
      for(var i=0;i<data.length;i++){
        var curSheetRow = data[i];
        // 生成规则
        this.generateRuleInfoData(RULE_NO,curSheetRow);
        // 是否强制条件
        var isForceCond = curSheetRow[8].includes("强制双屏确认");
        if(!isForceCond){
          // 如果不是强制条件则不生成条件表
          // 生成条件表
          this.generateCondData(OPRTN_COND_NO,curSheetRow);
        }
      }
      // 生成规则条件映射表
      this.generateRuleCondData(RULE_NO,OPRTN_COND_NO,isForceCond);
    });
    // 生成双屏字段表
    this.generateDsFields();
  }
  // 生成规则表
  generateRuleInfoData(RULE_NO,curSheetRow){
    var RULE_NO = RULE_NO;
    var RULE_TYP_CD = "DS";
    var HOLI_FLG = "N";
    var RULE_TRI_POSITION = "1";
    var SUIT_CHNL_SCP = "TE";
    var SUIT_LPR_SCP = "001";
    var SUIT_ORG_SCP = curSheetRow[6];
    var SUIT_TX_SCP = curSheetRow[7];
    var RULE_COMNT = curSheetRow[16];
    var EFFT_FLG = "1";
    var OPER_TELR_NO = "";
    var OPER_TM = "";
    var OPER_RSN = "批量新增";
    var curRow = [RULE_NO,RULE_TYP_CD,HOLI_FLG,RULE_TRI_POSITION,SUIT_CHNL_SCP,SUIT_LPR_SCP,SUIT_ORG_SCP,SUIT_TX_SCP,RULE_COMNT,EFFT_FLG,OPER_TELR_NO,OPER_TM,OPER_RSN];
    this.ruleInfoData.push(curRow);
  }
  // 生成条件表
  generateCondData(OPRTN_COND_NO,curSheetRow){
    var OPRTN_COND_NO = OPRTN_COND_NO ;
    var DICTRY_NM = curSheetRow[9] ;
    var OPER_SYM_1 = curSheetRow[12] ;
    var CMPR_VAL = curSheetRow[13] ;
    var OPER_SYM_2 = curSheetRow[14] ;
    var VALUE2 = curSheetRow[15] ;
    var TRAN_CD = curSheetRow[7] ;
    var COND_DESC = curSheetRow[8] ;
    var OPER_TELR_NO = "" ;
    var OPER_TM = "" ;
    var OPER_RSN = "批量新增" ;
    var CMPR_VAL_DATA_DICTRY_FLG = "1" ;
    var PUB_DICTRY_FLG = "0" ;
    var DICTRY_DESC = "" ;  
    var curRow = [OPRTN_COND_NO,DICTRY_NM,OPER_SYM_1,CMPR_VAL,OPER_SYM_2,VALUE2,TRAN_CD,COND_DESC,OPER_TELR_NO,OPER_TM,OPER_RSN,CMPR_VAL_DATA_DICTRY_FLG,PUB_DICTRY_FLG,DICTRY_DESC];
    this.condData.push(curRow);
  }
  // 生成规则条件映射表
  generateRuleCondData(RULE_NO,OPRTN_COND_NO,isForceCond){
    var RULE_COND_NO = OPRTN_COND_NO;
    var CMPL_MODE_FLG = isForceCond ? "0" : "1";
    var OPRTN_RULE_NO = RULE_NO;
    var curRow = [RULE_COND_NO,CMPL_MODE_FLG,OPRTN_RULE_NO];
    this.ruleCondData.push(curRow);
  }
  // 生成双屏字段表
  generateDsFields(){
    var keys = Object.keys(this.uniqSheetFieldsData);
    keys.forEach((key,index) => {
      var data = this.uniqSheetFieldsData[key];
      for(var i=0;i<data.length;i++){
        var row = data[i];
        var TRAN_CD = row[0]; //交易码
        var BUNDRY_INDCT_HEDLN_NM = row[1]; //界面显示标题名称
        var SCRN_NO = row[5]; //屏幕编号
        var SCRN_SORT_SER_NO = row[2]; //屏幕排列序号
        var BUNDRY_INDCT_NM = row[3]; //界面显示名称
        var GT_VAL_SCP_CD = "0"; //取值范围代码 0 变量 2 固定值
        var KEY_GET_VAL = ""; //KEY取值
        var ENTR_NM = row[4]; //条目名称
        var STUS_CD = "1"; //状态代码 1 生效
        var REMRK_1 = ""; //备注1
        var curRow = [TRAN_CD,BUNDRY_INDCT_HEDLN_NM,SCRN_NO,SCRN_SORT_SER_NO,BUNDRY_INDCT_NM,GT_VAL_SCP_CD,KEY_GET_VAL,ENTR_NM,STUS_CD,REMRK_1];
        this.doubleScreenField.push(curRow);
      }
    });
  }
}









var doubleScreen = new DoubleScreen();
debugger
// var buffer = xlsx.build([
//   {name: "规则IB_OM_RULE_INFO", data: doubleScreen.ruleInfoData},
//   {name: "条件IB_OM_RULECOND_INFO", data: doubleScreen.condData},
//   {name: "规则条件映射IB_OM_RULECOND_RLT", data: doubleScreen.ruleCondData},
//   {name: "双屏字段表TE_PARA_OUTCABINETCFG_INFO", data: doubleScreen.authModeData},
// ]); 


var sqlParams = [
  {tableName:"IB_OM_RULE_INFO",data:doubleScreen.ruleInfoData},
  {tableName:"IB_OM_RULECOND_INFO",data:doubleScreen.condData},
  {tableName:"IB_OM_RULECOND_RLT",data:doubleScreen.ruleCondData},
  {tableName:"TE_PARA_OUTCABINETCFG_INFO",data:doubleScreen.doubleScreenField}
];

generateSql.generateInsertSql(`dsInsert_${utils.getCurDateStr()}.sql`,sqlParams);

generateSql.generateDeleteSql(`dsDel_${utils.getCurDateStr()}.sql`,sqlParams);







