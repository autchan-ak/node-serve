/**
 *@author ZY
 *@date 2023/2/7
 *@Description:白名单路由 可以绕过权限
*/

const whitelist = [
    "GET /api/private/files/findOne", //文件管理-下载
    "POST /api/private/roles/one", //角色详情
];

module.exports= whitelist
