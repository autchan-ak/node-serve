
const db = require("../models");
const logger = require("../utils/utils.logger");
const DAO = require("../dao/DAO");
const {sendMailer} = require("../utils/utils.nodemailer");
const websiteMessage = db.websiteMessage;
const getPublicIP = require('../utils/utils.ip')
const sequelize = db.sequelize;
const {Op} = require("sequelize");
let request = require('request');
let headers = {
    "Content-Type": "application/json;charset=UTF-8",
    "X-Bce-Signature": "AppCode/0658cf6ba73046d39b52b5288f6c956b",
};
let options = {
    method: 'POST',
    headers: headers,
};
// Create and Save a new websiteMessage
exports.create = (req, res) => {
    const pm = req.body;
    // 请求验证
    // if (!pm.email) return res.sendResult({data: '', code: 605, message: "留言邮箱不能为空！"})
    // if (!pm.content) return res.sendResult({data: '', code: 605, message: "留言描述不能为空！"})
    // Create a websiteMessage
    const newWebsiteMessage = {
        nickname: '',
        img: pm.img,
        email: pm.email,
        status: false,
        isAdmin: pm.isAdmin,
        content: pm.content,
    };
    request(
        `https://ipaddquery.api.bdymkt.com/ip/query?ip=${getPublicIP(req)}`,
        options,
        function (error, response, body) {
            if (error !== null) {
                console.log('error:', error);
                logger.error(`访客ip地址解析错误：${getPublicIP(req)} : ${req.method} ${req.url}`)
                return;
            }
            console.log('****', body)
            newWebsiteMessage.nickname =  JSON.parse(body).code === 200 ? JSON.parse(body).data.country + '-' + JSON.parse(body).data.region + '-' + JSON.parse(body).data.city : JSON.parse(body).msg,
                DAO.create(websiteMessage, newWebsiteMessage, data => {
                    res.sendResult(data)
                    //留言成功后 发送言邮件通知
                    // let p = {
                    //     email: '1840354092@qq.com',
                    //     content: `您收到了一份留言：${pm.content},-----快去查看`
                    // }
                    // sendMailer(p).then(info => {
                    //     res.sendResult(data)
                    // })
                })
        })
};

// Retrieve all websiteMessage from the database.
exports.findAll = (req, res) => {
    const pm = req.body;

    //按天数
    // pm.group = 'nickname'
    // websiteMessage.findAndCountAll({
    //     group:['createdAt']
    // }).then(list=>{
    //     console.log(list)
    //     res.sendResultAto(list)
    // })

    DAO.list(websiteMessage, pm, list => {
        res.sendResult(list)
    })
};

// Find a single websiteMessage with an id
exports.findOne = (req, res) => {
    const pm = req.body;
    DAO.findOne(websiteMessage, pm, data => {
        res.sendResult(data)
    })
};

// Update a websiteMessage by the id in the request
exports.update = (req, res) => {
    const pm = req.body;
    // 请求验证
    if (!pm.id) return res.sendResult({data: '', code: 605, message: "ID不能为空！"})
    DAO.update(websiteMessage, pm, {id: pm.id}, data => {
        logger.debug(`${req.method} ${req.baseUrl + req.path} *** 参数：${JSON.stringify(pm)}; 响应：${JSON.stringify(data)}`);
        res.sendResult(data)
    })

};

// Delete a websiteMessage with the specified id in the request
exports.delete = (req, res) => {
    const pm = req.body;
    // 请求验证
    if (!pm.id) return res.sendResult({data: '', code: 605, message: "ID不能为空！"})
    DAO.delete(websiteMessage, {id: pm.id}, data => {
        logger.debug(`${req.method} ${req.baseUrl + req.path} *** 参数：${JSON.stringify(pm)}; 响应：${JSON.stringify(data)}`);
        res.sendResult(data)
    })
};

// 回复留言
exports.replyMsg = (req, res) => {
    const pm = req.body;
    sendMailer({email: pm.email, content: pm.content}).then(info => {
        //去修改状态
        // pm.status = true
        websiteMessage.update({status: true}, {
            where: {
                id: pm.id
            }
        }).then(_info => {
            res.status(200).sendResultAto(info, 200, '回复成功！')
        })
    }).catch(err => {
        res.status(500).sendResultAto(err, 605, '回复失败！')
    })

};

