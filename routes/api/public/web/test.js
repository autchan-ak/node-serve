const express = require('express');
const router = express.Router();
const About = require("../../../../controllers/about.controller");


/**
 * 查询获取ip信息列表
 * @route POST /api/public/web/test/getIp
 * @group 获取ip信息(客户端) - list of sort
 * @param {object} query - 请按固定查询规范
 * @returns {object} 200 - An array of Friends info
 * @returns {object} 605 - 请求失败
 * @returns {Error}  default - Unexpected error
 */
router.get("/getIp", function (req,res,next){
    res.status(200).send({data:'你好'})
});


module.exports = router;
