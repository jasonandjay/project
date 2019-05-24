const router = require('koa-router')()
const createHandler = require('github-webhook-handler')

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
function handlePostHooks(path, ctx){
	const handler = createHandler({
		path: path,
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
	let {req, res} = ctx;
	// console.log('req...', req);
	// console.log('res...', res);
	handler(req, ctx.res, function(err){
		console.log('error.., no such location')
		// ctx.request.statusCode = 404;
		// ctx.body('no such location');
	});
}
// 添加路由前缀
router.prefix('/post')

// 1605A自动化部署钩子
router.post('/1605A', function (ctx, next) {
	handlePostHooks('/post/1605A', ctx);
})

// 1606A自动化部署钩子
router.post('/1606A', function (ctx, next) {
	handlePostHooks('/post/1606A', ctx);
})

router.get('/', function (ctx, next) {
  ctx.body = 'this is a post/bar response'
})

module.exports = router
