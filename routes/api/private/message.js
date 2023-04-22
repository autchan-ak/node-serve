const express = require('express');
const router = express.Router();
const Message = require("../../../controllers/message.controller");

/**
 * 创建私信信息
 * @route POST /api/private/message/create
 * @group 私信管理 - Operations about message
 * @param {string} content.query.required - 请输入私信描述
 * @param {string} email.query.required - 请输入邮箱
 * @returns {object} 200 - An array of message info
 * @returns {object} 605 - 请求失败
 * @returns {Error}  default - Unexpected error
 */

router.post("/create", Message.create);

/**
 * 删除私信信息
 * @route POST /api/private/message/delete
 * @group 私信管理 - delete of message
 * @param {number} id - 请输入私信ID
 * @param {string} authorization - 请输入token
 * @returns {object} 200 - An array of message info
 * @returns {object} 605 - 请求失败
 * @returns {Error}  default - Unexpected error
 */
router.post("/delete", Message.delete);
/**
 * 查询私信信息列表
 * @route POST /api/private/message/list
 * @group 私信管理 - list of message
 * @param {object} query - 请按固定查询规范
 * @returns {object} 200 - An array of message info
 * @returns {object} 605 - 请求失败
 * @returns {Error}  default - Unexpected error
 */
router.post("/list", Message.findAll);
/**
 * 更新私信信息列表
 * @route POST /api/private/message/update
 * @group 私信管理 - list of message
 * @param {string} siteName.query.required - 请输入私信名称
 * @param {string} content.query.required - 请输入私信描述
 * @param {string} email.query.required - 请输入私信邮箱
 * @param {string} path.query.required - 请输入私信连接
 * @returns {object} 200 - An array of message info
 * @returns {object} 605 - 请求失败
 * @returns {Error}  default - Unexpected error
 */
router.post("/update", Message.update);

/**
 * 回复私信信息
 * @route POST /api/private/message/replyMsg
 * @group 私信管理 - list of message
 * @param {string} email.query.required - 请输入回复邮箱
 * @param {string} content.query.required - 请输入私信描述
 * @returns {object} 200 - An array of message info
 * @returns {object} 605 - 请求失败
 * @returns {Error}  default - Unexpected error
 */
router.post("/replyMsg", Message.replyMsg);


module.exports = router;
