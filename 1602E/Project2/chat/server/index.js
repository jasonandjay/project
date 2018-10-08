const WebSocket = require('ws');
 
const wss = new WebSocket.Server({ port: 8080 });

// 监听连接事件
wss.on('connection', function connection(ws) {
  ws.on('handshake', function(message){
    console.log('handshake: %s', message);
  });
  ws.on('message', function incoming(message) {
    message = JSON.parse(message);
    console.log('received: ', message);
    ws.close();
  });
  ws.on('open', function open(data){
    console.log('open data...', data);
  });
  ws.send('something');
});
console.log('websocket服务正在监听8080端口....');