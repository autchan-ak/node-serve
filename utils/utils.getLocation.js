/**
 *@author ZY
 *@date 2023/2/13
 *@Description:解析ip地址
*/
let request = require('request');
const getPublicIP = require('./utils.ip')
let headers = {
    "Content-Type": "application/json;charset=UTF-8",
    "X-Bce-Signature": "AppCode/0658cf6ba73046d39b52b5288f6c956b",
};
let options = {
    method: 'POST',
    headers: headers,
};
exports.getIpAddress=(req,option)=> {
   return new Promise((resolve, reject) => {
       request(
           `https://ipaddquery.api.bdymkt.com/ip/query?ip=${getPublicIP(req)}`,
           options,
           function (error, response, body) {
               if (error !== null) {
                   console.log('error:', error);
                   reject(error)
                   return;
               }
               resolve(JSON.parse(body).code === 200 ? JSON.parse(body).data.region + '-' + JSON.parse(body).data.city : '未知')
           })
   })
}

