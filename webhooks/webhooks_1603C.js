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
}).listen(10001);
console.log('监听10001端口');

handler.on('error', function (err) {
    console.error('Error:', err.message)
})

handler.on('push', function (event) {
    console.log('Received a push event for %s to %s',
        event.payload.repository.name,
        event.payload.ref);
    run_cmd('sh', ['/home/ubuntu/deploy/deploy_1603C.sh', event.payload.repository.name], function (text) {
        console.log(text)
        // 发送邮件给邮件列表联系人，通知有代码发布了
        sendMials(event);
    });
})

// 封装发送邮件方法
function sendMials(event){
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

    // const receivers = '342690199@qq.com';
    const receivers = `1052577847@qq.com,342690199@qq.com`;


    let commits = ``;
    event.payload.commits.forEach(item=>{
        commits += `<div>
            <p>提交版本：${item.id}</p>
            <p>提交内容：${item.message}</p>
            <p>提交人： ${item.author.email}</p>
            <p>----------------------------</p>
        </div>`;
    })
    // 配置收件人
    let mailOptions = {
        from: '"jason老师👻" <342690199@qq.com>', // sender address
        to: receivers, // list of receivers
        subject: '代码更新通知 ✔', // Subject line
        html: `<header>
		<h4>今日代码仓库更新了</h4>
	</header>
	<section>
		<h4>代码更新记录列表（倒序）</h4>
		<h5>更新时间：${new Date()}</h5>
		<p>----------------------------</p>
		${commits}
		<a href="https://github.com/jasonandjay/project">点击查看</a>
	</section>` // html body
    };
    // 拼接提交记录
    console.log('部署完成，发送邮件通知用户...');
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Message sent: <04ec7731-cc68-1ef6-303c-61b0f796b78f@qq.com>
      });
}