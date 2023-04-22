const express = require('express');
const router = express.Router();
const websiteMessage = require("../../../controllers/website.message.controller");

/**
 * 创建留言信息
 * @route POST /api/private/websiteMessage/create
 * @group 留言管理（管理端） - Operations about websiteMessage
 * @param {string} content.query.required - 请输入留言描述
 * @param {string} email.query.required - 请输入邮箱
 * @returns {object} 200 - An array of websiteMessage info
 * @returns {object} 605 - 请求失败
 * @returns {Error}  default - Unexpected error
 */

router.post("/create", websiteMessage.create);

/**
 * 删除留言信息
 * @route POST /api/private/websiteMessage/delete
 * @group 留言管理（管理端） - delete of websiteMessage
 * @param {number} id - 请输入留言ID
 * @param {string} authorization - 请输入token
 * @returns {object} 200 - An array of websiteMessage info
 * @returns {object} 605 - 请求失败
 * @returns {Error}  default - Unexpected error
 */
router.post("/delete", websiteMessage.delete);
/**
 * 查询留言信息列表
 * @route POST /api/private/websiteMessage/list
 * @group 留言管理（管理端） - list of websiteMessage
 * @param {object} query - 请按固定查询规范
 * @returns {object} 200 - An array of websiteMessage info
 * @returns {object} 605 - 请求失败
 * @returns {Error}  default - Unexpected error
 */
router.post("/list", websiteMessage.findAll);
/**
 * 更新留言信息列表
 * @route POST /api/private/websiteMessage/update
 * @group 留言管理（管理端） - list of websiteMessage
 * @param {string} avatar.query.required - 请输入留言头像地址
 * @param {string} name.query.required - 请输入留言名称
 * @param {string} slogan.query.required - 请输入留言格言
 * @param {string} notice.query.required - 请输入留言通知
 * @param {string} domain - 请输入留言主页
 * @param {string} desc - 请输入留言描述
 * @returns {object} 200 - An array of websiteMessage info
 * @returns {object} 605 - 请求失败
 * @returns {Error}  default - Unexpected error
 */
router.post("/update", websiteMessage.update);


module.exports = router;
