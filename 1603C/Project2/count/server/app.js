var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// 支持跨域
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "content-type,X-Token");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

  // 动态判断域名，设置access-control-allow-origin
  // let origin = req.header('origin');
  // const whiteList = ['a.com', 'b.com', 'c.com', 'd.com'];
  // if (whiteList.indexOf(origin) !== -1){
  //   res.header("Access-Control-Allow-Origin", origin);
  // }

  // token前置拦截检测
  // var token = req.header('X-Token');
  // if(!token) {
  //   res.json({
  //     code: -10,
  //     msg: '无效的token'
  //   })
  // } else{
  //   // res.json({

  //   // })
  // }
  next();
});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(8888, ()=>{
  console.log('正在监听8888端口...');
});
// module.exports = app;
