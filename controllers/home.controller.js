const db = require("../models");
const logger = require("../utils/utils.logger");
const DAO = require("../dao/DAO");
const MSG = db.message;
const COMMENTS = db.comments;
const Article = db.article;
const sequelize = db.sequelize;
const {Op} = require("sequelize");

function queryCountAll(model) {
    return new Promise((resolve, reject) => {
        model.findAndCountAll({
            where: {
                [Op.and]: [
                    sequelize.where(
                        sequelize.fn('DATE', sequelize.col('createdAt')), // 表对应的字段
                        sequelize.literal('CURRENT_DATE')
                    )
                ]
            },
        }).then(data => {
            resolve(data)
        }).catch(err => {
            reject(err)
        })
    })
}

function queryCountViews(model, col) {
    return new Promise((resolve, reject) => {
        //SELECT SUM(viewsCount) AS viewsCount FROM mg_articles
        model.findAll({
            attributes: [[sequelize.literal(`SUM(${col})`), col]],
        }).then(data => {
            resolve(data)
        }).catch(err => {
            reject(err)
        })
    })
}

let msg = queryCountAll(MSG).then(r => {
    return r
})
let com = queryCountAll(COMMENTS).then(c => {
    return c
})
let viewsCount = queryCountViews(Article, 'viewsCount').then(d => {
    return d
})
let commentsCount = queryCountViews(Article, 'commentsCount').then(dc => {
    return dc
})
// 查询当天留言信息,评论信息
exports.queryNowMsgAndComments = (req, res) => {
    try {
        Promise.all([msg, com, viewsCount, commentsCount]).then(e => {
            res.status(200).sendResultAto({
                message: e[0],
                comments: e[1],
                viewCounts: e[2][0].viewsCount || 0,
                commentsCount: e[3][0].commentsCount || 0
            }, 200, '查询成功')
        }).catch(err => {
            res.status(500).sendResultAto('查询失败', 500, err)
        })
    } catch {

    }
};



