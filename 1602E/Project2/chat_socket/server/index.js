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
console.log('websocket服务监听8080端口...');
