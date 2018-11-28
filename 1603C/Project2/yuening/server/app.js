var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var {checkToken} = require('./utils');

// 引入路由
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var shopRouter = require('./routes/shop');
var orderRouter = require('./routes/order');
var goodsRouter = require('./routes/goods');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

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

  next();
  // token前置拦截检测
  // const whiteList = ['/user/login', '/user/register'];
  // var token = req.header('X-Token');
  // if (whiteList.indexOf(req.path) != -1){
  //   next();
  // }else{
  //   if(!token) {
  //     res.json({
  //       code: -10,
  //       msg: '无效的token'
  //     })
  //   } else{
  //     checkToken(token, res, next)
  //   }
  // }
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/shop', shopRouter);
app.use('/order', orderRouter);
app.use('/goods', goodsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.json({
    code: -999,
    msg: '请求的接口不存在'
  })
});

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.listen(11111, ()=>{
  console.log('正在监听11111端口，快点来啊...');
});
