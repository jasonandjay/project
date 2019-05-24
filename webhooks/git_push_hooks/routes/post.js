var express = require('express');
var router = express.Router();
const createHandler = require('github-webhook-handler')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 执行部署脚本
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

// WebHooks处理实例
function handlePostHooks(path, req, res){
	const handler = createHandler({
		path: '/1605A',
		secret: 'jasonandjay'
	})
	handler.on('error', function (err) {
		console.error('Error:', err.message)
	})
	handler.on('push', function (event) {
		console.log('Received a push event for %s to %s',
				event.payload.repository.name,
				event.payload.ref);
		// run_cmd('sh', ['/home/ubuntu/deploy/deploy_1603C.sh', event.payload.repository.name], function (text) {
		// 		console.log(text)
		// 		// 发送邮件给邮件列表联系人，通知有代码发布了
		// 		sendMials(event);
		// });
	})
	handler(req, res, function(err){
		console.log('error.., no such location')
		res.statusCode = 404;
		res.send('no such location');
	});
}

// 1605A自动化部署钩子
router.post('/1605A', function (req, res, next) {
    console.log('url...', req.url);
	handlePostHooks('/1605A', req, res);
})

// 1606A自动化部署钩子
router.post('/1606A', function (req, res, next) {
	handlePostHooks('/post/1606A', req, res);
})


module.exports = router;