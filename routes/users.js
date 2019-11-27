var express = require('express');
var router = express.Router();
var models = require('../models')

//引入SQL模块
var SQLURL = require('../models/sql')

/* GET models listing. */
router.get('/getUserInfo', function(req, res) { 
  var param = req.query;
  if (param.userAccount) {
    models.get(SQLURL.getUserInfo, [param.userAccount], res)
  } else {
    res.send({code: 0, msg: '请完善信息'})
  }
  
});

router.post('/updateUserInfo', function(req, res) {
  var param = req.body;
  if (param.userName == null || param.userId == null) {
    res.send({code: 0, msg: '请完善信息'})
    return;
  }
  models.update(SQLURL.updateUserInfo, [param.userName, param.userId], res)
  
});

module.exports = router;