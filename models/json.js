//封装接受模版
var json = function(res, result) {
    if (typeof result === 'undefined') {
        res.json({
            code: '0',
            msg: '失败',
        })
    } else {
        res.json({
            code: '200',
            msg: '成功',
            data: result.data || {}
        })
    } 
}
module.exports = json;
