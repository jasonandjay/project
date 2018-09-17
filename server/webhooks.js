var http = require('http')
var createHandler = require('github-webhook-handler')
var nodemailer = require('nodemailer');

var handler = createHandler({
    path: '/',
    secret: 'jasonandjay'
})
// 上面的 secret 保持和 GitHub 后台设置的一致

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

http.createServer(function (req, res) {
    // 自动化部署代码
    handler(req, res, function (err) {
        res.statusCode = 404
        res.end('no such location')
    })

    // 发送邮件给邮件列表联系人，通知有代码发布了
     // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        // host: 'qq',
        service: 'qq',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: '342690199@qq.com', // generated ethereal user
            pass: 'dkheisqxisqqcabd' // generated ethereal password
        }
    });

    // 配置收件人
    let mailOptions = {
        from: '"jason老师👻" <342690199@qq.com>', // sender address
        to: '304126063@qq.com, 342690199@qq.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>' // html body
    };
    console.log('部署完成，发送邮件通知用户...');
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Message sent: <04ec7731-cc68-1ef6-303c-61b0f796b78f@qq.com>
      });
}).listen(10000)

handler.on('error', function (err) {
    console.error('Error:', err.message)
})

handler.on('push', function (event) {
    console.log('Received a push event for %s to %s',
        event.payload.repository.name,
        event.payload.ref);
    run_cmd('sh', ['/home/ubuntu/deploy/1602E/chenmanjie/deploy.sh', event.payload.repository.name], function (text) {
        console.log(text)
    });
})