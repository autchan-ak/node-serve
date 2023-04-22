const express = require('express');
const router = express.Router();
const websiteMessage = require("../../../../controllers/website.message.controller");

/**
 * 创建留言信息
 * @route POST /api/public/web/websiteMessage/create
 * @group 博客留言（客户端） - create of websiteMessage
 * @param {string} content.query.required - 请输入留言描述
 * @param {string} email.query.required - 请输入邮箱
 * @returns {object} 200 - An array of websiteMessage info
 * @returns {object} 605 - 请求失败
 * @returns {Error}  default - Unexpected error
 */

router.post("/create", websiteMessage.create);

/**
 * 查询留言信息列表
 * @route POST /api/public/web/websiteMessage/list
 * @group 博客留言（客户端） - list of websiteMessage
 * @param {object} query - 请按固定查询规范
 * @returns {object} 200 - An array of websiteMessage info
 * @returns {object} 605 - 请求失败
 * @returns {Error}  default - Unexpected error
 */
router.post("/list", websiteMessage.findAll);


module.exports = router;
