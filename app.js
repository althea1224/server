var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var publicRouter = require('./routes/public');

var app = express();

// 解析以 application/json 和 application/x-www-form-urlencoded 提交的数据
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 允许所有跨域请求
// app.all('*', function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   res.header('Access-Control-Allow-Methods', '*');
//   res.header('Content-Type', 'application/json;charset=utf-8');
//   next();
// });


app.use(logger('dev'));

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/common', publicRouter);


module.exports = app;
