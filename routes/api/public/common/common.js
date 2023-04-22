const express = require('express');
const router = express.Router();
const path = require("path");

/**
 *@author ZY
 *@date 2022/3/6 17:58
 *@Description:下载表格文件接口
 *@params {name} string 文件名称带有后缀名
 */
/**
 * 下载表格文件接口
 * @route POST /api/public/common/download
 * @group 下载表格文件接口（公共的） - list of download
 * @param {object} query - 请按固定查询规范
 * @returns {object} 200 - An array of Friends info
 * @returns {object} 605 - 请求失败
 * @returns {Error}  default - Unexpected error
 */
router.get("/download",
    async (req, res, next) => {
        try {
            let name = req.query.name
            let url = path.resolve(process.cwd(), `uploads_files/excel/${name}`);
            console.log(url)
            res.download(url)
        } catch (err) {
            console.log('下载文件错误')
            next(err)
        }
    })

module.exports = router;
