var xlsx = require('node-xlsx');
var open = require("open");
var axios = require("axios");
var fs = require("fs");
var path = require("path");
var _ = require("underscore");
var config = require("../config");
var utils = require("../utils/index");
var db = require("../db/index");
var excelPath = path.resolve(__dirname,config.srcExcelName);
var workSheets = xlsx.parse(fs.readFileSync(excelPath));
var curWorkSheet = workSheets.find(v => v.name.includes(config.auSheetName)).data;
curWorkSheet = curWorkSheet.filter(row => row.length != 0);
curWorkSheet.slice(1).forEach(curSheetRow => {
  var CMPR_VAL = curSheetRow[11];	 // 比较值
  var VALUE2 = curSheetRow[13];	 // 比较值2
  if(CMPR_VAL === 0){
    curSheetRow[11] = "0";
  }else{
    curSheetRow[11] = String(curSheetRow[11] || "");
  }
  if(VALUE2 === 0){
    curSheetRow[13] = "0";
  }else{
    curSheetRow[13] = String(curSheetRow[13] || "");
  }
});
class Auth {
  constructor(){
    /**
     * uniqSheetData 结构
      {
        funcKey1:[[1,2,3],[4,5,6]],
        funcKey2:[[7,8,9]],
      }
     */
    this.uniqSheetData = _.groupBy(curWorkSheet.slice(1),function(row){
      return row[5];
    })
    this.amtKeywords = "金额超限";// 判断是否金额授权
    this.ruleNoObj = utils.generateNo(config.AU_START_NUM);// 规则号生成函数
    this.condNoObj = utils.generateNo(config.AU_START_NUM);// 条件号生成函数
    this.curDayStr = utils.getCurDateStr(); // 当前日期
    // 规则表
    this.ruleInfoData = [["RULE_NO","RULE_TYP_CD","HOLI_FLG","RULE_TRI_POSITION","SUIT_CHNL_SCP","SUIT_LPR_SCP","SUIT_ORG_SCP","SUIT_TX_SCP","RULE_COMNT","EFFT_FLG","OPER_TELR_NO","OPER_DT","OPER_RSN"]];
    // 条件表
    this.condData = [["OPRTN_COND_NO","DICTRY_NM","OPER_SYM_1","CMPR_VAL","OPER_SYM_2","VALUE2","TRAN_CD","COND_DESCR","OPER_TELR_NO","OPER_DT","OPER_RSN","CMPR_VAL_DATA_DICTRY_FLG","PUB_DICTRY_FLG","DICTRY_DESCR"]];
    // 规则条件映射表
    this.ruleCondData = [["RULE_COND_NO","CMPL_MODE_FLG","OPRTN_RULE_NO"]];
    // 授权模式表
    this.authModeData =[["MODE_NO","AUTH_TYP_CD","AUTH_LVL_CD","REMOTE_AUTH_LVL_CD","AUTH_ORG_TYP_CD","AUTH_ORG_NO","AUTH_PSTN_NO","UGNT_FLG","AUTH_DESCR","HOST_AUTH_FLG","HOST_AUTH_TYP_CD","CNTRTN_AUTH_CENT_NM","CNTRTN_AUTH_LVL_CD","REMRK_1","APP_NO"]];
    this.init();
  }
  
  // 初始化
  init(){
    var uniqFuncKeys = Object.keys(this.uniqSheetData);
    for(var i=0;i<uniqFuncKeys.length;i++){
      var key = uniqFuncKeys[i];
      var sameRuleData = this.uniqSheetData[key];
      var RULE_NO = this.ruleNoObj().padStart(6);
      var OPRTN_COND_NO = "AU" + this.condNoObj().padStart(5);
      // // ----------屏蔽远程授权--begin
      // var isRemoteAuth = this.getAuthType(sameRuleData[0][15]) == "2";
      // if(isRemoteAuth){
      //   continue;
      // }
      // // ----------屏蔽远程授权 --end
      this.generateRuleInfoData(RULE_NO,sameRuleData[0]);
      
      for(var j=0;j<sameRuleData.length;j++){
        var curSheetRow = sameRuleData[j];
        var isAmtCond = curSheetRow[4].includes("金额超限");// 是否金额超限条件
        var isForceCond = (curSheetRow[6] || "0-是").includes("0"); //是否强制条件 0 是 | 1 否
        // 若是金额条件 一个规则对应多个不同的条件 或关系，若非金额条件 一个规则对应同一条件 且关系
        if(isAmtCond){
          // 金额超限条件
          this.generateAmtCondData(RULE_NO,curSheetRow);
        }else{
          // 非金额条件
          this.generateCondData(RULE_NO,OPRTN_COND_NO,curSheetRow);
        }
      }
    }
  }
  // 生成规则表
  generateRuleInfoData(RULE_NO,curSheetRow){
    var RULE_NO = RULE_NO // 规则编号;
    var RULE_TYP_CD = "AU";  // 规则类型代码
    var HOLI_FLG = "N";  // 节假日标志
    var RULE_TRI_POSITION = "1";  // 规则触发位置
    var SUIT_CHNL_SCP = "TE";  // 适用渠道范围
    var SUIT_LPR_SCP = "001";  // 适用法人范围
    var SUIT_ORG_SCP = "*,";  // 适用机构范围
    var SUIT_TX_SCP = curSheetRow[2];  // 适用交易范围---
    var RULE_COMNT = curSheetRow[4];  // 规则说明---
    var EFFT_FLG = "1";  // 生效标志
    var OPER_TELR_NO = "900001";  // 操作柜员号
    var OPER_DT = this.curDayStr;  // 操作时间
    var OPER_RSN = "批量新增";  // 操作原因---
    var curRow = [RULE_NO,RULE_TYP_CD,HOLI_FLG,RULE_TRI_POSITION,SUIT_CHNL_SCP,SUIT_LPR_SCP,SUIT_ORG_SCP,SUIT_TX_SCP,RULE_COMNT,EFFT_FLG,OPER_TELR_NO,OPER_DT,OPER_RSN];
    this.ruleInfoData.push(curRow);
  }
    // 生成条件表
  generateCondData(RULE_NO,OPRTN_COND_NO,curSheetRow){
    var OPRTN_COND_NO = OPRTN_COND_NO;	 // 运营条件编号
    var DICTRY_NM = curSheetRow[8];	 // 字典名称
    var OPER_SYM_1 = curSheetRow[10];	 // 运算符号1
    var CMPR_VAL = curSheetRow[11];	 // 比较值
    var OPER_SYM_2 = curSheetRow[12];	 // 运算符号2
    var VALUE2 = curSheetRow[13];	 // 比较值2
    var TRAN_CD = curSheetRow[2];	 // 交易码
    var COND_DESCR = curSheetRow[4];	 // 条件描述
    var OPER_TELR_NO = "900001";	 // 操作柜员号
    var OPER_DT = this.curDayStr;	 // 操作时间
    var OPER_RSN =  "批量新增";	 // 操作原因
    var CMPR_VAL_DATA_DICTRY_FLG = "1";	 // 比较值数据字典标志
    var PUB_DICTRY_FLG = "0";	 // 公共字典标志
    var DICTRY_DESCR = curSheetRow[9];	 // 字典描述
    var curRow = [OPRTN_COND_NO,DICTRY_NM,OPER_SYM_1,CMPR_VAL,OPER_SYM_2,VALUE2,TRAN_CD,COND_DESCR,OPER_TELR_NO,OPER_DT,OPER_RSN,CMPR_VAL_DATA_DICTRY_FLG,PUB_DICTRY_FLG,DICTRY_DESCR];
    this.condData.push(curRow);
    // 生成规则条件映射表
    this.generateRuleCondData(RULE_NO,OPRTN_COND_NO,curSheetRow);
    // 生成模式表
    this.generateAuthModeData(OPRTN_COND_NO,curSheetRow);
  }
  // 生成规则条件映射表
  generateRuleCondData(RULE_NO,OPRTN_COND_NO,curSheetRow){
    var RULE_COND_NO = OPRTN_COND_NO; // 条件号
    var CMPL_MODE_FLG = (curSheetRow[6] || "1-否").includes("0") ? "0" : "1"; //强制条件 0 是 | 1 否
    var OPRTN_RULE_NO = RULE_NO; // 规则号
    var curRow = [RULE_COND_NO,CMPL_MODE_FLG,OPRTN_RULE_NO];
    // 一个规则对应多个相同条件的时候只需要写一次条件表
    var isExist = this.ruleCondData.find(v => (v[0] == RULE_COND_NO && v[1] == CMPL_MODE_FLG && v[2] == OPRTN_RULE_NO));
    if(isExist) return;
    this.ruleCondData.push(curRow);
  }
  // 生成模式表
  generateAuthModeData(MODE_NO,curSheetRow){
    var isAmtCond = curSheetRow[4].includes("金额超限");
    if(isAmtCond) return;
    var MODE_NO = MODE_NO; // 模式编号
    var AUTH_TYP_CD = this.getAuthType(curSheetRow[15]); // 授权类型代码
    var AUTH_LVL_CD = curSheetRow[16] || 1; // 授权级别代码
    var REMOTE_AUTH_LVL_CD = ""; // 远程授权级别代码
    var AUTH_ORG_TYP_CD = ""; // 授权机构类型代码
    var AUTH_ORG_NO = ""; // 授权机构号
    var AUTH_PSTN_NO = "*"; // 授权岗位编号
    var UGNT_FLG = ""; // 加急标志
    var AUTH_DESCR = curSheetRow[4]; // 授权描述
    var HOST_AUTH_FLG = ""; // 主机授权标志
    var HOST_AUTH_TYP_CD = ""; // 主机授权类型代码
    var CNTRTN_AUTH_CENT_NM = ""; // 集中授权中心名称
    var CNTRTN_AUTH_LVL_CD = ""; // 集中授权级别代码
    var REMRK_1 = curSheetRow[20] ? `${curSheetRow[20]}统计` : "" ; // 备注1
    var APP_NO = ""; // 应用编号
    var curRow = [MODE_NO,AUTH_TYP_CD,AUTH_LVL_CD,REMOTE_AUTH_LVL_CD,AUTH_ORG_TYP_CD,AUTH_ORG_NO,AUTH_PSTN_NO,UGNT_FLG,AUTH_DESCR,HOST_AUTH_FLG,HOST_AUTH_TYP_CD,CNTRTN_AUTH_CENT_NM,CNTRTN_AUTH_LVL_CD,REMRK_1,APP_NO];
    var isExist = this.authModeData.find(v => v[0] == MODE_NO);
    if(isExist) return;
    this.authModeData.push(curRow);
  }
  // 生成金额条件表
  generateAmtCondData(RULE_NO,curSheetRow){
    /**
     * 核心 C端 币种对应关系
     * 
      01	156	币种-人名币
      156	01	币种-人民币
      840	14	币种-美元
      392	27	币种-日元
      978	38	币种-欧元
      036	29	币种-澳大利亚元
      826	12	币种-英镑
      344	13	币种-香港元
      702	18	币种-新加坡元
      124	28	币种-加元
    */
  //  交易类别	金额区间	人脸识别是否通过	授权方式
  //   现金	   [0,5)	   不判断	         不授权
  //   现金	   [5,10)	   是	             不授权
  //   现金	   [5,10)	   否	             远程授权
  //   现金	   [10,+∞)	 不判断	         远程授权
  //   转账	   [0,5)	   不判断	          不授权
  //   转账	   [5,20)	   是	              不授权
  //   转账	   [5,20)	   否	             远程授权
  //   转账	   [20,+∞)	 不判断	         远程授权

    var currencyCond = [
      {
        Ccy:"156",
        name:"币种-人民币",
        // 人脸识别不通过 生成条件  
        cashFaceNotPassedIndex:[0],
        // 现金 授权级别	现金起始金额	现金限制金额
        cash:[
          // [0,	0,	50000],
          [2,	50000,	100000],
          [3,	100000,	500000],
          [4,	500000,	2000000],
          [5,	2000000,	20000000],
          [6,	20000000,	50000000],
          [7,	50000000,	100000000],
          [8,	100000000,	200000000],
          [9,	200000000,	400000000],
        ],
        // 人脸识别不通过 生成条件
        transferFaceNotPassedIndex:[0],
        // 转账 授权级别	现金起始金额	现金限制金额
        transfer:[
          // [0,	0,	        50000],
          [2,	50000,	    200000],
          [3,	200000,	    1000000],
          [4,	1000000,	  4000000],
          [5,	4000000,	  40000000],
          [6,	40000000,	  100000000],
          [7,	100000000,	200000000],
          [8,	200000000,	400000000],
          [9,	400000000,	800000000],
        ]
      },
      // {
      //   Ccy:"840",
      //   name:"币种-美元",
      //   // 人脸识别不通过 生成条件  
      //   cashFaceNotPassedIndex:[],
      //   // 现金 授权级别	现金起始金额	现金限制金额
      //   cash:[
      //     [3,1000,5000],
      //     [4,5000,20000],
      //     [5,20000,200000],
      //     [6,200000,500000],
      //     [7,500000,1000000],
      //     [8,1000000,20000000],
      //     [9,20000000,40000000]
      //   ],
      //   // 人脸识别不通过 生成条件
      //   transferFaceNotPassedIndex:[],
      //   // 转账 授权级别	现金起始金额	现金限制金额
      //   transfer:[
      //     [3,5000,10000],
      //     [4,10000,40000],
      //     [5,40000,400000],
      //     [6,400000,1000000],
      //     [7,1000000,2000000],
      //     [8,2000000,40000000],
      //     [9,40000000,80000000],

      //   ]
      // },
      // {
      //   Ccy:"392",
      //   name:"币种-日元",
      //   // 人脸识别不通过 生成条件  
      //   cashFaceNotPassedIndex:[],
      //   // 现金 授权级别	现金起始金额	现金限制金额
      //   cash:[
      //     [3,100000,500000],
      //     [4,500000,2000000],
      //     [5,2000000,20000000],
      //     [6,20000000,50000000],
      //     [7,50000000,100000000],
      //     [8,100000000,2000000000],
      //     [9,2000000000,4000000000]
      //   ],
      //   // 人脸识别不通过 生成条件
      //   transferFaceNotPassedIndex:[],
      //   // 转账 授权级别	现金起始金额	现金限制金额
      //   transfer:[
      //     [3,500000,1000000],
      //     [4,1000000,1000000],
      //     [5,1000000,40000000],
      //     [6,40000000,100000000],
      //     [7,100000000,200000000],
      //     [8,200000000,4000000000],
      //     [9,4000000000,8000000000]
      //   ]
      // },
      // {
      //   Ccy:"978",
      //   name:"币种-欧元",
      //   // 人脸识别不通过 生成条件  
      //   cashFaceNotPassedIndex:[],
      //   // 现金 授权级别	现金起始金额	现金限制金额
      //   cash:[
      //     [3,1000,5000],
      //     [4,5000,20000],
      //     [5,20000,200000],
      //     [6,200000,500000],
      //     [7,500000,1000000],
      //     [8,1000000,20000000],
      //     [9,20000000,40000000]

      //   ],
      //   // 人脸识别不通过 生成条件
      //   transferFaceNotPassedIndex:[],
      //   // 转账 授权级别	现金起始金额	现金限制金额
      //   transfer:[
      //     [3,5000,10000],
      //     [4,10000,40000],
      //     [5,40000,400000],
      //     [6,400000,1000000],
      //     [7,1000000,2000000],
      //     [8,2000000,40000000],
      //     [9,40000000,80000000]
      //   ]
      // },
      // {
      //   Ccy:"036",
      //   name:"币种-澳大利亚元",
      //   // 人脸识别不通过 生成条件  
      //   cashFaceNotPassedIndex:[],
      //   // 现金 授权级别	现金起始金额	现金限制金额
      //   cash:[
      //     [3,1000,5000],
      //     [4,5000,20000],
      //     [5,20000,200000],
      //     [6,200000,500000],
      //     [7,500000,1000000],
      //     [8,1000000,20000000],
      //     [9,20000000,40000000]
      //   ],
      //   // 人脸识别不通过 生成条件
      //   transferFaceNotPassedIndex:[],
      //   // 转账 授权级别	现金起始金额	现金限制金额
      //   transfer:[
      //     [3,5000,10000],
      //     [4,10000,40000],
      //     [5,40000,400000],
      //     [6,400000,1000000],
      //     [7,1000000,2000000],
      //     [8,2000000,40000000],
      //     [9,40000000,80000000]
      //   ]
      // },
      // {
      //   Ccy:"826",
      //   name:"币种-英镑",
      //   // 人脸识别不通过 生成条件  
      //   cashFaceNotPassedIndex:[],
      //   // 现金 授权级别	现金起始金额	现金限制金额
      //   cash:[
      //     [3,1000,5000],
      //     [4,5000,20000],
      //     [5,20000,200000],
      //     [6,200000,500000],
      //     [7,500000,1000000],
      //     [8,1000000,20000000],
      //     [9,20000000,40000000]
      //   ],
      //   // 人脸识别不通过 生成条件
      //   transferFaceNotPassedIndex:[],
      //   // 转账 授权级别	现金起始金额	现金限制金额
      //   transfer:[
      //     [3,5000,10000],
      //     [4,10000,40000],
      //     [5,40000,400000],
      //     [6,400000,1000000],
      //     [7,1000000,2000000],
      //     [8,2000000,40000000],
      //     [9,40000000,80000000]
      //   ]
      // },
      // {
      //   Ccy:"344",
      //   name:"币种-香港元",
      //   // 人脸识别不通过 生成条件  
      //   cashFaceNotPassedIndex:[],
      //   // 现金 授权级别	现金起始金额	现金限制金额
      //   cash:[
      //     [3,10000,50000],
      //     [4,50000,200000],
      //     [5,200000,2000000],
      //     [6,2000000,5000000],
      //     [7,5000000,10000000],
      //     [8,10000000,200000000],
      //     [9,200000000,400000000]

      //   ],
      //   // 人脸识别不通过 生成条件
      //   transferFaceNotPassedIndex:[],
      //   // 转账 授权级别	现金起始金额	现金限制金额
      //   transfer:[
      //     [3,50000,100000],
      //     [4,100000,400000],
      //     [5,400000,4000000],
      //     [6,4000000,10000000],
      //     [7,10000000,20000000],
      //     [8,20000000,400000000],
      //     [9,400000000,800000000]
      //   ]
      // },
      // {
      //   Ccy:"702",
      //   name:"币种-新加坡元",
      //   // 人脸识别不通过 生成条件  
      //   cashFaceNotPassedIndex:[],
      //   // 现金 授权级别	现金起始金额	现金限制金额
      //   cash:[
      //     [3,1000,5000],
      //     [4,5000,20000],
      //     [5,20000,200000],
      //     [6,200000,500000],
      //     [7,500000,1000000],
      //     [8,1000000,20000000],
      //     [9,20000000,40000000]
      //   ],
      //   // 人脸识别不通过 生成条件
      //   transferFaceNotPassedIndex:[],
      //   // 转账 授权级别	现金起始金额	现金限制金额
      //   transfer:[
      //     [3,5000,10000],
      //     [4,10000,40000],
      //     [5,40000,400000],
      //     [6,400000,1000000],
      //     [7,1000000,2000000],
      //     [8,2000000,40000000],
      //     [9,40000000,80000000]
      //   ]
      // },
      // {
      //   Ccy:"124",
      //   name:"币种-加元",
      //   // 人脸识别不通过 生成条件  
      //   cashFaceNotPassedIndex:[],
      //   // 现金 授权级别	现金起始金额	现金限制金额
      //   cash:[
      //     [3,1000,5000],
      //     [4,5000,20000],
      //     [5,20000,200000],
      //     [6,200000,500000],
      //     [7,500000,1000000],
      //     [8,1000000,20000000],
      //     [9,20000000,40000000]
      //   ],
      //   // 人脸识别不通过 生成条件
      //   transferFaceNotPassedIndex:[],
      //   // 转账 授权级别	现金起始金额	现金限制金额
      //   transfer:[
      //     [3,5000,10000],
      //     [4,10000,40000],
      //     [5,40000,400000],
      //     [6,400000,1000000],
      //     [7,1000000,2000000],
      //     [8,2000000,40000000],
      //     [9,40000000,80000000]
      //   ]
      // },
    ];
    var TnNwSn = curSheetRow[10] || "TnNwSn";
    var txAmt = curSheetRow[8] || "txAmt";
    var Ccy = curSheetRow[12] || "Ccy";
    for(var i=0;i<currencyCond.length;i++){
      var curItem = currencyCond[i];
      for(var j=0;j<curItem.cash.length;j++){
        var cash = curItem.cash;
        var curCondNo = "AU" + this.condNoObj().padStart(5);
        var tnNwSnCond = [ curCondNo,TnNwSn,"==","0","","","","现金支付触发授权","",this.curDayStr,"批量新增","1","0","现金支付" ];
        var txAmtCond = [ curCondNo,txAmt,">=",cash[j][1],"<",cash[j][2],"","金额超限触发授权","",this.curDayStr,"批量新增","1","0","交易金额" ];
        var ccyCond = [ curCondNo,Ccy,  "==",curItem.Ccy,"",  "",       "","币种授权","",this.curDayStr,"批量新增","1","0","币种" ];
        var mode = [curCondNo,"2",cash[j][0],"","","","*","",`${curItem.name},现金,金额在范围【${cash[j][1]}-${cash[j][2]}】内，触发授权`,"","","","","现金金额超限模式",""];
        // 生成条件
        this.generateAmtCondDataInner(tnNwSnCond,curSheetRow);
        this.generateAmtCondDataInner(txAmtCond,curSheetRow);
        this.generateAmtCondDataInner(ccyCond,curSheetRow);
        // 生成模式
        this.generateAmtAuthModeData(mode);
        if(curItem.cashFaceNotPassedIndex.includes(j)){
          // 现金 只有 5w-10w 需要人脸识别规则，转账20w-50w 需要人脸识别规则
          //faceRecognitionRow 人脸识别为 "0" 表示未通过 或未成功 "1" 成功 三个条件且关系 不通过就远程授权
          // 只判断50000,	100000 区间 不通过则判断 金额 和 币种
          var faceReCond = [ curCondNo,"faceRecognition",  "==","0","","","","人脸识别授权","",this.curDayStr,"批量新增","1","0","人脸识别" ];
          // 生成条件
          this.generateAmtCondDataInner(faceReCond,curSheetRow);
        }
        // 生成条件规则关系表
        var RULE_COND_NO = curCondNo;
        var CMPL_MODE_FLG = "1";
        var OPRTN_RULE_NO = RULE_NO;
        var curRow = [RULE_COND_NO,CMPL_MODE_FLG,OPRTN_RULE_NO];
        this.generateAmtCondRuleData(curRow);
      }
      for(var j=0;j<curItem.transfer.length;j++){
        var transfer = curItem.transfer;
        var curCondNo = "AU" + this.condNoObj().padStart(5);
        var tnNwSnCond = [ curCondNo,TnNwSn,"==","1","","","","转账触发授权","",this.curDayStr,"批量新增","1","0","转账标识" ];
        var txAmtCond = [ curCondNo,txAmt,">=",transfer[j][1],"<",transfer[j][2],"","金额超限触发授权","",this.curDayStr,"批量新增","1","0","交易金额" ];
        var ccyCond = [ curCondNo,Ccy,"==",curItem.Ccy,"","","","币种授权","",this.curDayStr,"批量新增","1","0","币种"];
        var mode = [curCondNo,"2",transfer[j][0],"","","","*","",`${curItem.name},转账,金额在范围【${transfer[j][1]}-${transfer[j][2]}】内，触发授权`,"","","","","转账金额超限模式",""];
        // 生成条件
        this.generateAmtCondDataInner(tnNwSnCond,curSheetRow);
        this.generateAmtCondDataInner(txAmtCond,curSheetRow);
        this.generateAmtCondDataInner(ccyCond,curSheetRow);
        // 生成模式
        this.generateAmtAuthModeData(mode);
        if(curItem.transferFaceNotPassedIndex.includes(j)){
          //faceRecognitionRow 人脸识别为 "0" 表示未通过 或未成功 "1" 成功 三个条件且关系 不通过就远程授权
          // 只判断50000,	  200000 区间 不通过则判断 金额 和 币种
          var faceReCond = [ curCondNo,"faceRecognition",  "==","0","","","","人脸识别授权","",this.curDayStr,"批量新增","1","0","人脸识别" ];
          // 生成条件
          this.generateAmtCondDataInner(faceReCond,curSheetRow);
        }
        // 生成条件规则关系表
        var RULE_COND_NO = curCondNo;
        var CMPL_MODE_FLG = "1";
        var OPRTN_RULE_NO = RULE_NO;
        var curRow = [RULE_COND_NO,CMPL_MODE_FLG,OPRTN_RULE_NO];
        this.generateAmtCondRuleData(curRow);
      }
    }
  }
  // 生成金额 条件表
  generateAmtCondDataInner(condRow,curSheetRow){
    var isForceCond = (curSheetRow[6] || "0-是").includes("0"); //是否强制条件 0 是 | 1 否
    if(!isForceCond){
      this.condData.push(condRow);
    }
  }
  // 生成金额 条件规则映射表
  generateAmtCondRuleData(condRule){
    this.ruleCondData.push(condRule);
  }
  // 生成金额 模式表
  generateAmtAuthModeData(modeRow){
    this.authModeData.push(modeRow);
  }
  getAuthType(name){
    name = name || "本地授权";
    //授权模式 AUTH_TYP_CD  "1"->LocalAuth| "2"->RemoteAuth|"3"->DifTermAuth|"4"->CentAuth|5->RemoteAuth LocalAuth|6->CentAuth LocalAuth
    var AUTH_TYP_CD = "1";
    if(name.includes("本地授权")){
      AUTH_TYP_CD = "1";
    }
    if(name.includes("远程授权")){
      AUTH_TYP_CD = "2";
    }
    if(name.includes("异终端授权")){
      AUTH_TYP_CD = "3";
    }
    return AUTH_TYP_CD;
  }
}

var auth = new Auth();

var arr = [
  {tableName:"IB_OM_RULE_INFO",data:auth.ruleInfoData},
  {tableName:"IB_OM_RULECOND_INFO",data:auth.condData},
  {tableName:"IB_OM_RULECOND_RLT",data:auth.ruleCondData},
  {tableName:"IB_OM_AUTHMODE_INFO",data:auth.authModeData}
];
var insertSql = utils.genInsertSql(arr);
var deleteSql = utils.genDeleteSql(arr);
utils.writeToOutDir("authInsert.sql",insertSql,"授权");
utils.writeToOutDir("authDelete.sql",deleteSql,"授权");


db.dbHandler(arr,"授权");



