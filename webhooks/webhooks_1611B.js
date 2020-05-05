var http = require('http')
var createHandler = require('github-webhook-handler')

// 上面的 secret 保持和 GitHub 后台设置的一致
var handler = createHandler({
    path: '/',
    secret: 'jasonandjay'
})

function run_cmd(cmd, args, callback) {
    var spawn = require('child_process').spawn;
    var child = spawn(cmd, args);
    var resp = "";

    child.stdout.on('data', function (buffer) {
        resp += buffer.toString();
    });
    child.stdout.on('end', function () {
        callback(resp)
    });
}

// 起服务，把请求交给handle处理
http.createServer(function (req, res) {
    console.log('接收到请求...');
    // 自动化部署代码
    handler(req, res, function (err) {
        res.statusCode = 404
        res.end('no such location')
    })
}).listen(10005);
console.log('监听10004端口....');

// 当请求出错的时候
handler.on('error', function (err) {
    console.error('Error:', err.message)
})

// 监听到webhooks的push事件
handler.on('push', function (event) {
    console.log('Received a push event for %s to %s',
        event.payload.repository.name,
        event.payload.ref);
    run_cmd('sh', ['/home/ubuntu/deploy/deploy_1609B.sh', event.payload.repository.name], function (text) {
        console.log(text)
        // 发送邮件给邮件列表联系人，通知有代码发布了
        // sendMials(event);
    });
})