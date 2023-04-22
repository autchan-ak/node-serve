const express = require('express');
const router = express.Router();
const proanalysis = require("../../../controllers/analysis_project.controller");

/**
 * 创建关于数据分析项目组
 * @route POST /api/private/proanalysis/create
 * @group 关于数据分析项目组管理 - Operations proanalysis proanalysis
 * @param {string} pro_title - 请输入关于数据分析项目组内容
 * @returns {object} 200 - An array of proanalysis info
 * @returns {object} 605 - 请求失败
 * @returns {Error}  default - Unexpected error
 */

router.post("/create", proanalysis.create);

/**
 * 删除关于数据分析项目组
 * @route POST /api/private/proanalysis/delete
 * @group 关于数据分析项目组管理 - delete of proanalysis
 * @param {number} id - 请输入关于数据分析项目组ID
 * @param {string} authorization - 请输入token
 * @returns {object} 200 - An array of proanalysis info
 * @returns {object} 605 - 请求失败
 * @returns {Error}  default - Unexpected error
 */
router.post("/delete", proanalysis.delete);
/**
 * 查询关于数据分析项目组列表
 * @route POST /api/private/proanalysis/list
 * @group 关于数据分析项目组管理 - list of proanalysis
 * @param {object} query - 请按固定查询规范
 * @returns {object} 200 - An array of proanalysis info
 * @returns {object} 605 - 请求失败
 * @returns {Error}  default - Unexpected error
 */
router.post("/list", proanalysis.findAll);
/**
 * 更新关于数据分析项目组列表
 * @route POST /api/private/proanalysis/update
 * @group 关于数据分析项目组管理 - list of proanalysis
 * @param {string} pro_title - 请输入关于数据分析项目组内容
 * @returns {object} 200 - An array of proanalysis info
 * @returns {object} 605 - 请求失败
 * @returns {Error}  default - Unexpected error
 */
router.post("/update", proanalysis.update);


module.exports = router;
