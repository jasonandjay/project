import request from '../utils/request';

export function query() {
  return request('/api/users');
}

// 定义一个socket连接
let socket = null;
let isConnect = false;
let requests = [];
// 缓存数据，处理断线之后要发送的请求
let cacheRequests = [];
// 客户端连接websocket
export function createSocket(){
  // 创建连接
  socket = new WebSocket('ws://localhost:8080');
  // 建立连接
  socket.addEventListener('open', function (event) {
    isConnect = true;
    // 把缓存的请求发出去
    for (let i=0;i<cacheRequests.length;i++){
      socket.send(JSON.stringify(cacheRequests[i]));
    }
    cacheRequests = [];
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
    isConnect = false;
    // socket.send('Hello Server!');
      console.log('websocket closed...');
  });
}

// 统一调用发送socket接口
function sendSocket(obj, callback){
  // 断线情况
  if (!isConnect){
    cacheRequests.push(obj);
    createSocket();
  }else{
    socket.send(JSON.stringify(obj));
  }
}

// 登陆接口
export function doLogin(obj, callback){
  let id = requests.push(callback);
  sendSocket({
    id,
    type: 'login',
    payload: obj
  }, callback);
}

// 发送聊天数据
export function sendMessage(obj, callback){
  let id = requests.push(callback);
  sendSocket({
    id,
    type:'message',
    payload: obj
  }, callback);
}
