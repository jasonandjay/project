var express = require('express');
var WebSocket = require('ws');
var mysql = require('mysql');
var md5 = require('md5');
// 引入mysql
var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'chat_socket'
});

const wss = new WebSocket.Server({ port: 8080 });
// 监听建立连接
wss.on('connection', function(ws){
  ws.on('message', function incoming(message) {
    message = JSON.parse(message);
    switch(message.type){
      case 'login': doLogin(message.payload, message.id, ws); break;
      case 'message': handleMessage(message.payload, message.id, ws);break;
      default: return;
    }

    // console.log('received: ', message);
    // 发送数据给前端
    // ws.send(JSON.stringify({
    //   msg: 'Hello World!'
    // }))
    // 关闭连接
    // setTimeout(()=>{
    //   ws.close();
    // }, 3000);
  });


});

// 处理登陆请求
function doLogin(obj, id, ws){
  console.log('obj...', obj);
  // 判断用户是否已经注册
  connection.query(`select count(*) as length from user where username='${obj.username}'`, function (error, results, fields) {
    if (error) throw error;
    if (results[0].length) {
      // 做登陆操作
      connection.query(`select id from user where username='${obj.username}' and password='${obj.password}'`, function (error, rows, fields) {
        if (error) throw error;
        console.log('rows...', rows);
        if (rows[0].id) {
          // 登陆成功，生成token，定义规则：u+uid+'_'+md5(时间戳)
          let token = `u${rows[0].id}_${md5(+new Date() + 'hello world')}`.substr(0, 16);
          // 插入到数据中
          connection.query(`insert into token (uid, token, create_time) values ('${rows[0].id}','${token}', ${+new Date()})`, function (error, results, fields) {
            if (error) throw error;
            // 把token返回
            ws.send(JSON.stringify({
              id,
              payload: token
            }))
          });
          console.log('token...', token);
        } else {
          ws.close('登陆失败，断开连接');
        }
      });
    } else {
      // 做注册操作
      connection.query(`insert into user (username, password, create_time) values ('${obj.username}','${obj.password}', ${+new Date()})`, function (error, results, fields) {
        if (error) throw error;
        // 不做后续操作
      });
    }
  });
}

// 处理聊天请求
function handleMessage(obj, id, ws){
  const messages = ['亲，我们都是实价销售，利润微薄，不议价的哦！具体优惠政策请进入店铺查看公告，谢谢！',
    '款到发货.您可选三种方式付款：1,到银行填汇款单，2,银行卡转账(柜员机/网转/银行)，3,财付通,任选一！',
    '商品页面中有商品尺寸,面料,码数,付款和邮寄方式,注意事项等详细说明,请细心耐心查看,以免造成不必误会!',
    '亲，此款是特价商品，不再议价，请MM见谅：）',
    '您好，亲，本店利润微薄，单件不议价，不包邮，不抹零，邮费按实际重量收取，谢谢！',
    '请务必带好身份证，不需要拥您有以上的银行卡，只要直接将现金存入银行或者转账即可。',
    '请问哪一件?请发网址或者商品标题,以便我们尽快帮您查询是否有货,谢谢您的配合',
    '好的,慢慢挑,有问题再咨询我们',
    '谢谢您惠顾，如有问题请先跟我联系，别随便恶意评价，我视评价如生命！没有问题是沟通不了的哦'
  ];
  // 随机筛选
  let message = messages[Math.floor(Math.random(0,1)*messages.length)];
  // 关键字回复
  if (obj.text.indexOf('1602e') != -1){
    message = '淡泊明志，宁静致远，团结进取，争创佳绩';
  }else if(obj.text.indexOf('马健') != -1){
    message = 'majian.jpg';
  }else if(obj.text.indexOf('dva') != -1){
    message = 'yay.jpg';
  }

  // setTimeout(()=>{
    ws.send(JSON.stringify({
      id,
      payload: message
    }))
  // }, 5000);
}
console.log('websocket服务监听8080端口...');
