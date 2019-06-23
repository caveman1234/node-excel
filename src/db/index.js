
var chalk = require('chalk');
var axios = require("axios");
var config = require("../config");
var getConnection = require("./connection.js");


var exeInsert = function(tableName,excelData){
  return new Promise(async (resolve,reject) => {
    var tableFields = excelData[0].map(field => {
      return `\`${field}\``
    }).join(",");
    var sqlStr = `INSERT INTO ${tableName}( ${tableFields} ) VALUES ?`;
    var values = excelData.slice(1);
    var conn = await getConnection();
    conn.query(sqlStr,[values],(err,ret,fields) => {
      if(err){
        console.log(chalk.red(`插入 - ${tableName} - 失败`));
        reject();
      }else{
        console.log(chalk.green(`插入 - ${tableName} - 成功`));
        resolve();
      }
    })
  });
}

var exeDelete = function(tableName,excelData){
  return new Promise(async (resolve,reject) => {
    var values = excelData.slice(1).map(row => {
      return `"${row[0]}"`;
    }).join(",");
    var sqlStr = `DELETE FROM ${tableName} WHERE ${excelData[0][0]} IN ( ${values} )`;
    var conn = await getConnection();
    conn.query(sqlStr,(err,ret,fields) => {
      if(err){
        console.log(chalk.red(`删除 - ${tableName} - 失败`));
        reject();
      }else{
        console.log(chalk.green(`删除 - ${tableName} - 成功`));
        resolve();
      }
    })
  });
}

var refreshCache = function(url,desc){
  return new Promise((resolve,reject) => {
    console.log(chalk.yellow(`开始刷新${desc}缓存`));
    axios.get(url)
      .then(res => {
        console.log(chalk.yellow(`刷新${desc}缓存成功${JSON.stringify(res.data)}`));
        resolve(res);
      })
      .catch(res => {
        console.log(chalk.yellow(`刷新${desc}缓存失败${JSON.stringify(res.data)}`));
        reject(res);
      })
  });
}

var dbHandler = async function(arr,type){
  console.log(chalk.red(type));
  var deleteAll = arr.map(item => exeDelete(item.tableName,item.data));
  await Promise.all(deleteAll);
  var insertAll = arr.map(item => exeInsert(item.tableName,item.data));
  await Promise.all(insertAll);
  refreshCache(config.refreshRedisUrlDev,"DEV");
  refreshCache(config.refreshRedisUrlSit,"SIT");
}

module.exports = {
  exeInsert,
  exeDelete,
  dbHandler,
  refreshCache
}



