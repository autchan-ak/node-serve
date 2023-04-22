//模型创建 https://www.sequelize.com.cn/core-concepts/model-basics#%E5%AD%97%E7%AC%A6%E4%B8%B2

//站点信息
module.exports = (sequelize, Sequelize) => {
    return sequelize.define("website",
        {
            id: {
                type: Sequelize.UUID,
                notNull: true,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV4 // 或 DataTypes.UUIDV1
            },
            avatar: {
                type: Sequelize.STRING,
                notNull: true,
                notEmpty: true,
                comment: '站点主头像',
            },
            name: {
                type: Sequelize.STRING,
                notNull: true,
                notEmpty: true,
                comment: '站点名称',
            },
            slogan: {
                type: Sequelize.STRING,
                notNull: true,
                notEmpty: true,
                comment: '站点格言',
            },
            domain: {
                type: Sequelize.STRING,
                comment: '站点主页',
            },
            notice: {
                type: Sequelize.STRING,
                comment: '站点通知',
            },
            desc: {
                type: Sequelize.STRING,
                comment: '站点描述',
            },
            wallpaper: {
                type: Sequelize.STRING,
                defaultValue: 'https://s1.ax1x.com/2020/05/23/YxaLMq.jpg',
                comment: '站点大背景图',
            },
            isNewYear:{
                type: Sequelize.BOOLEAN,
                comment: '是否新年',
                defaultValue: false
            },
            globalStyle: {
                type: Sequelize.STRING,
                comment: '站点全局样式：公祭日置灰等',
            },
        }, {
            tableName: 'mg_website'
        });
};
