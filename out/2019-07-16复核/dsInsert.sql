
SET AUTOCOMMIT=0;
BEGIN;

  
-- IB_OM_RULE_INFO insert
INSERT INTO IB_OM_RULE_INFO (RULE_NO,RULE_TYP_CD,HOLI_FLG,RULE_TRI_POSITION,SUIT_CHNL_SCP,SUIT_LPR_SCP,SUIT_ORG_SCP,SUIT_TX_SCP,RULE_COMNT,EFFT_FLG,OPER_TELR_NO,OPER_DT,OPER_RSN) VALUES

("070000","CK","N","1","TE","9999","*,","00201007","无规则说明","1","","2019-07-16","批量新增");
-- IB_OM_CHECKMODE_INFO insert
INSERT INTO IB_OM_CHECKMODE_INFO (RCHK_MODE_ID,RCHK_PSTN_NO,RCHK_LVL_CD,PMIT_PRACT_TELR_RCHK_FLG,RCHK_RSN_CD,REMRK,REMRK_1,APP_NO) VALUES

("CK70000","2","1","2","无","无","无","TE");
-- IB_OM_RULECOND_RLT insert
INSERT INTO IB_OM_RULECOND_RLT (RULE_COND_NO,CMPL_MODE_FLG,OPRTN_RULE_NO) VALUES

("CK70000","0","070000");
  
COMMIT;