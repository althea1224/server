/*
    数据增删改查模块封装
    req.query 解析GET请求中的参数 包含在路由中每个查询字符串参数属性的对象，如果没有则为{}
    req.params 包含映射到指定的路线“参数”属性的对象,如果有route/user/：name，那么“name”属性可作为req.params.name
    req.body通常用来解析POST请求中的数据
     +req.query.id 可以将id转为整数
 */

//引入mysql
const mysql = require('mysql');
//引入mysql连接配置
const mysqlconfig = require('./mysql');
//引入连接池配置
const poolextend = require('./poolextend')
//使用连接池，提升性能
const pool = mysql.createPool(poolextend({}, mysqlconfig));
var Index = {
    //查询所有数据
    get: function(url, req, res) {
        pool.getConnection(function(err, connection) {
            connection.query(url, req, (err, result) => {
                if (result) {
                    res.send({code: 1, msg: '成功', data: result})
                } else {
                    es.send({code: 0, msg: '失败'})
                }
                connection.release();
            })
        });
    },
    update: function(url, req, res) {
        pool.getConnection(function(err, connection) {
            connection.query(url, req, function(err, result) {
                if (result.affectedRows > 0) {
                    res.send({code: 1, msg: '成功'})
                } else {
                    res.send({code: 0, msg: '失败'})
                }
                connection.release();
            });
        });
    },


}

module.exports = Index;