const express = require('express');
const router = express.Router();
const Message = require("../../../../controllers/message.controller");

/**
 * 创建私信信息
 * @route POST /api/public/web/message/create
 * @group 私信管理（客户端） - Operations about message
 * @param {string} content.query.required - 请输入私信描述
 * @param {string} email.query.required - 请输入邮箱
 * @returns {object} 200 - An array of message info
 * @returns {object} 605 - 请求失败
 * @returns {Error}  default - Unexpected error
 */

router.post("/create", Message.create);


module.exports = router;
