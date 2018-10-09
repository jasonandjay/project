import request from '../utils/request';

export function query() {
  return request('/api/users');
}

// 定义一个socket连接
let socket = null;
let requests = [];
// 客户端连接websocket
export function createSocket(){
  // 创建连接
  socket = new WebSocket('ws://localhost:8080');
  // 建立连接
  socket.addEventListener('open', function (event) {
    // socket.send('Hello Server!');
      socket.send(JSON.stringify({
          username: '1602E'
      }))
  });

  // 接收到服务端发送的数据
  socket.addEventListener('message', function (event) {
    // socket.send('Hello Server!');
      console.log('received...', event.data);
      // 把字符串转成json
      let data = JSON.parse(event.data);
      // 通过id执行请求回调
      if(data.id){
        requests[data.id-1](data);
      }
  });

  // 连接被关闭
  socket.addEventListener('close', function (event) {
    // socket.send('Hello Server!');
      console.log('websocket closed...');
  });
}

// 登陆接口
export function doLogin(obj, callback){
  let id = requests.push(callback);
  socket.send(JSON.stringify({
    id,
    type: 'login',
    payload: obj
  }))
}
