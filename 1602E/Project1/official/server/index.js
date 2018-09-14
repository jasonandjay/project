let express = require('express');
let bodyParser = require('body-parser');
let app = express();
// 短信验证码的依赖
const SMSClient = require('@alicloud/sms-sdk')

// 使用中间件bodyParse，解析参数
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))
// 设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "content-type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    // res.header("Content-Type", "application/json;charset=utf-8");

    next();
});

// parse application/json
// app.use(bodyParser.json())
app.use(bodyParser.text())

// 网站测试
app.get('/', (req, res)=>{
    res.end('hello world!');
})


// 开发一个发送短信验证码的功能
app.post('/getCapture', (req, res)=>{
    console.log('req.body...', req.body);
    req.body = JSON.parse(req.body);
    let phone = req.body.phone;
    if (!/^1[3,4,5,7,8,9]\d{9}$/.test(phone)){
        res.json({
            code: -1,
            msg: '回去改，改对再来'
        });
    }
    console.log('phone...', phone);
    sendSMS(phone, (data)=>{
        if (data.code === 'OK'){
            res.json({
                code: 1,
                msg: '短信发送成功'
            })
        }else{
            res.json({
                code: 0,
                msg:data.Message
            })
        }
    })
});

let sendSMS = (phone, callback)=>{
    // ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
    const accessKeyId = 'omFtRkaRs3Xu0pTW'
    const secretAccessKey = 'a8LXFS3hXAU3vbtJqjEQh038j7iTDU'
    //初始化sms_client
    let smsClient = new SMSClient({accessKeyId, secretAccessKey})
    //生成一个code
    let code = Math.floor(Math.random(0,1)*899999)+100000;
    //发送短信
    smsClient.sendSMS({
        PhoneNumbers: phone,    //必填:待发送手机号。支持以逗号分隔的形式进行批量调用，批量上限为1000个手机号码,批量调用相对于单条调用及时性稍有延迟,验证码类型的短信推荐使用单条调用的方式；发送国际/港澳台消息时，接收号码格式为00+国际区号+号码，如“0085200000000”
        SignName: 'jasonandjay', //必填:短信签名-可在短信控制台中找到
        TemplateCode: 'SMS_144457028',    //必填:短信模板-可在短信控制台中找到，发送国际/港澳台消息时，请使用国际/港澳台短信模版
        TemplateParam: `{"code":${code}}`   //可选:模板中的变量替换JSON串,如模板内容为"亲爱的${name},您的验证码为${code}"时。
    }).then(function (res) {
        let {Code}=res
        if (Code === 'OK') {
            //处理返回参数
            console.log(res)
        }
        callback(res);
    }, function (err) {
        console.log(err)
        callback(err);
    })
}
app.listen(8080);
console.log('开始监听端口8080');
