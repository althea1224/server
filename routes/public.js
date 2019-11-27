var express = require('express');
var router = express.Router();
var models = require('../models')

//引入SQL模块
var SQLURL = require('../models/sql')

/* GET models listing. */
router.get('/getBankList', function(req, res) {
  var param = req.query;
  if (param.id) {
    models.get(SQLURL.getBankById, [param.id], res)
  } else {
    models.get(SQLURL.getBankList, null, res)
  }
});

module.exports = router;