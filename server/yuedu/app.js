var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 引入路由
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var shopRouter = require('./routes/shop');
var orderRouter = require('./routes/order');
var goodsRouter = require('./routes/goods');

var app = express();

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

// 日志处理
app.use(logger('dev'));
// body解析
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// cookie解析
app.use(cookieParser());

// 设置public文件夹为静态资源，不需要通过路由解析
app.use(express.static(path.join(__dirname, 'public')));

// 设置路由转发
app.use('/', indexRouter);
app.use('/users', usersRouter);
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

app.listen(15000, ()=>{
  console.log('正在监听15000端口...');
});
