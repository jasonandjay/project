var WebSocket = require('ws');
var mysql = require('mysql');
var md5 = require('md5');
// 引入mysql
var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '1601n',
  database: '1603c'
});


// 自动回复术语
const autoReplies = ["你好，我去秒几个人，很快回来。",
  "2.我去后山和黑山老妖研究吃唐僧的事，有事回来再说。",
  "3.你终于来啦，我找你N年了，去火星干什么了？我现在去冥王星，回头跟你说个事，别走开啊",
  "4.您所呼叫的用户尚未安装QQ……",
  "5.你呼叫的人现在不在，当你听到硬盘“咔”的一声，请对着鼠标留言，谢谢……",
  "6.主人不在。到哪儿去了？就……就是不告诉你!真要找的话，请按住电脑power键4秒钟后留言……",
  "7.该用户没有回应，可能用户忙，请稍候再试。或按Ctrl+Alt+Del返回。",
  "8.自省中，稍后再说...",
  "9.DD你现在连接到的是海狼的冰箱，放入食物后请断线，谢谢合作。"
]

// 创建一个websocket服务,监听8080端口
const wss = new WebSocket.Server({port: 8080});
// 监听建立连接
wss.on('connection', function (ws) {
  ws.on('message', function incoming(message) {
    let messgaeObj = JSON.parse(message);
    switch (messgaeObj.type) {
      case 'login': doLogin(messgaeObj, ws); break;
      default: {
        // 收到消息之后,广播出去
        wss.clients.forEach(function each(client) {
          console.log(client._id);
          if (client !== ws && client.readyState === WebSocket.OPEN) {
            messgaeObj.pos = 1;
            client.send(JSON.stringify(messgaeObj));
          }
        });
        // 判断是否需要自动回复消息
        if (messgaeObj.content.indexOf('1603C') != -1){
          wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
              client.send(JSON.stringify({
                ind: messgaeObj.ind,
                name: 'QQ小冰',
                pos: 1,
                con_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541751438067&di=2f648d63409c560cbd26b6d6781a9ea8&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Fface%2F9d8a68e017039f1c715e7f4adf498774f6b2d5e1.jpg',
                time: "昨天",
                con: "",
                content: autoReplies[Math.floor(Math.random()*9)]
              }));
            }
          });
        }
      }
    }
    console.log('message...', message);



    // setInterval(()=>{
    //   ws.send(message);
    // }, 1000);

    // message = JSON.parse(message);
    // switch(message.type){
    //   case 'login': doLogin(message.payload, message.id, ws); break;
    //   case 'message': handleMessage(message.payload, message.id, ws);break;
    //   default: return;
    // }

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
function doLogin({username, password, id, type}, ws) {
  connection.query(`select id,avatar from user where username='${username}' and password='${password}'`, function (error, rows, fields) {
    if (error) throw error;
    console.log('rows...', rows);
    if (rows[0] && rows[0].id) {
      ws._id = rows[0].id;
      // 登陆成功，生成token，定义规则：u+uid+'_'+md5(时间戳)
      let token = `u${rows[0].id}_${md5(+new Date() + 'hello world')}`.substr(0, 16);
      ws.send(JSON.stringify({
        id,
        type,
        token,
        username,
        avatar: rows[0].avatar || 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541426364167&di=3ff5894441d036c6c7fb77887a98f3a7&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2015-02-07%2F235606623.jpg'
      }))
    } else {
      ws.send(JSON.stringify({
        id,
        type,
        code: -1,
        msg: '登陆失败',
        data: {}
      }))
    }
  })
}
