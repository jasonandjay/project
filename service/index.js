const express = require('express');
var multipart = require('connect-multiparty');
var request = require('request');
var query = require('./db.js');
var base64Img = require('base64-img');
var md5 = require('md5');
const app = express();

// 设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "content-type,X-Token");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  
    next();
});
  
// body解析
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// 设置静态文件夹
app.use('/static', express.static('static'));

// 上传接口
app.post('/upload', multipart({
    autoFiles: true,
    uploadDir: 'static/'
  }), (req, res)=>{
    console.log('req...', req.files);
    const data = [];
    Object.keys(req.files).forEach(item=>{
        let file = req.files[item];
        let key = Object.keys(file)[0];
       
        data.push({
            name: item,
            path:  `http://123.206.55.50:11000/${file[key].path}`
        })
    })
    console.log('data...', data);
    res.json({
        code: 1,
        data,
        msg: '上传成功'
    })
})
// base64上传
app.post('/upload_base64', (req, res)=>{
    var filepath = base64Img.imgSync(req.body.base64, './static', md5(req.body.base64).slice(0, 24)).replace('\\', '/');
    res.json({
        code: 1,
        data: {
            path:  `http://123.206.55.50:11000/${filepath}`
        },
        msg: '上传成功'
    })
})
// 代理转发接口
app.get('/api', (req, res)=>{
	console.log('req...', req.query)
	request(req.query.url, function (error, response, body) {
    /*判断请求是否成功*/
    if (!error && response.statusCode == 200) {
	      	/*把字符串转换为json*/
	      	var data = JSON.parse(body);
	      	/*返回数据*/
	      	res.json(data);
	    }
 	});
})

// 发送短信验证码的接口
// 发送短信验证码
app.post('/smsCode', function(req, res, next){
    const SMSClient = require('@alicloud/sms-sdk')
    // ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
    const accessKeyId = 'omFtRkaRs3Xu0pTW'
    const secretAccessKey = 'a8LXFS3hXAU3vbtJqjEQh038j7iTDU'
    //初始化sms_client
    let smsClient = new SMSClient({accessKeyId, secretAccessKey})
    // 生成短信验证码
    let code = Math.floor(Math.random()*99999)+100000;
    //发送短信
    smsClient.sendSMS({
      // '16619932979,18515355836,18811126840,18612262553'
        PhoneNumbers: req.body.phone,
        // 必填:待发送手机号。支持以逗号分隔的形式进行批量调用，批量上限为1000个手机号码,批量调用相对于单条调用及时性稍有延迟,验证码类型的短信推荐使用单条调用的方式；发送国际/港澳台消息时，接收号码格式为：国际区号+号码，如“85200000000”
        SignName: 'jasonandjay',
        // 必填:短信签名-可在短信控制台中找到
        TemplateCode: 'SMS_144457028',
        // 必填:短信模板-可在短信控制台中找到，发送国际/港澳台消息时，请使用国际/港澳台短信模版
        TemplateParam: `{"code":${code}}`
        // 可选:模板中的变量替换JSON串,如模板内容为"亲爱的${name},您的验证码为${code}"时。
    }).then(function (response) {
        let {Code}=response
        if (Code === 'OK') {
            //处理返回参数
            console.log(response)
        
             // 把code存入数据库中
            query(`insert into phone_code (phone, code, create_time) values(${req.body.phone}, ${code}, ${+ new Date()})`, function (error, results, fields) {
                console.log('result...', results);
                if (results.insertId) {
                    res.json({
                        code: 1,
                        msg: '发送短信成功'
                    })
                } else {
                    res.json({
                        code: -4,
                        msg: '短信验证码存入数据库失败'
                    })
                }
            })
        }else{
            res.json({
                code: -3,
                msg: '阿里云发送短信验证码失败'
            })
        }
    }, function (err) {
        console.log(err)
        res.json({
          code: -2,
          msg: err.data && err.data.Message
        })
    })
  })
app.listen(11000, ()=>{
    console.log('我正在监听11000端口....');
})
