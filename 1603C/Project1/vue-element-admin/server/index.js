const express = require('express');
const SMSClient = require('@alicloud/sms-sdk');
const bodyParser = require('body-parser');
const md5 = require('md5');
let app = express();

// 引入mysql
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : '1603c'
});



app.all('*', function(req, res, next) {
    console.log(req.header('X-Token'))
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "content-type");
    res.header("Access-Control-Allow-Headers", "X-Token");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  // res.header("Content-Type", "application/json;charset=utf-8");

  // token前置拦截检测
    var token = req.header('X-Token');
    if(!token) {
      res.json({
        code: -10,
        msg: '无效的token'
      })
    } else{
      // res.json({

      // })
    }


    next();
});

app.get('/', (req, res) => {
    res.send('hello world');
})

// 发送短信验证码
app.post('/sendSMS', bodyParser.json(), async (req, res) => {
    console.log('req.body...', req.body);
    try{
        let {result, code} = await sendSMS(req.body.phone);
        if (result == -1){
            res.json({
                code: -1,
                msg: '发送短信验证码失败'
            })
        }
        // 把code存入数据库中
        connection.query(`insert into phone_code (phone, code, create_time) values(${req.body.phone}, ${code}, ${+ new Date()})`, function (error, results, fields) {
            console.log('result...', results);
            if (results.insertId){
                res.json({
                    code: 1,
                    msg: '发送短信成功'
                })
            }else{
                res.json({
                    code: -2,
                    msg: '短信验证码存入数据库失败'
                })
            }
        })
    }catch{
        res.json({
            code: -1,
            msg: '发送短信验证码失败'
        })
    }
});

// 登陆接口
app.post('/login', bodyParser.json(),  (req, res)=>{
    let {username,password,phone, code} = req.body;
    console.log('req.body...', req.body);
    // 查询手机号是否注册过
    connection.query(`select count(*) as num from user where username="${username}"`, function (error, results, fields) {
        if (error) throw error;

        console.log('The solution is: ', results[0].solution);
        console.log('result...', results);
        if (results[0].num){
            // 查询到数据，做登陆操作
            connection.query(`select id from user where username="${username}" and password="${password}"`, function (error, results, fields) {
                if (!results[0] || !results[0].id) {
                    res.json({
                        code: -1,
                        data: {},
                        msg: '登陆失败，用户名或密码验证失败'
                    })
                }else{
                    // 生成登陆态存到数据库中，后续验证要使用
                    let token = `u${results[0].id}_${md5(+new Date()+'hello world')}`.slice(0,16);
                    connection.query(`insert into token (token, uid, create_time) values("${token}", "${results[0].id}", ${+ new Date()})`, function (error, result, fields) {
                        if (result.insertId){
                             // 生成登陆态之后获取用户的权限
                            connection.query(`select access.accessname from user,roler,access,user_roler,roler_access where user.id=user_roler.uid and
                            user_roler.rid = roler.id and roler.id = roler_access.rid and roler_access.aid = access.id and user.id = ${results[0].id} group by access.accessname`, function (error, results, fields) {
                                console.log('results...', results);
                                let access = results.map(item=>item.accessname);
                                res.json({
                                    code: 1,
                                    data: {
                                        token,
                                        access
                                    },
                                    msg: '登陆成功'
                                })
                            })
                        }else{
                            res.json({
                                code: -4,
                                data: {},
                                msg: 'token生成失败'
                            })
                        }
                    })
                }
            })
        }else{
          res.json({
            code: -5,
            data: {},
            msg: '该用户不存在'
          })
            // 做注册操作
            // connection.query(`insert into user (username, password, phone, create_time) values("${username}", "${password}", ${phone}, ${+ new Date()})`, function (error, results, fields) {
            //     console.log('result...', results);
            //     if (results.insertId){
            //         res.json({
            //             code: 1,
            //             data: {},
            //             msg: '注册成功'
            //         })
            //     }else{
            //         res.json({
            //             code: -1,
            //             data: {},
            //             msg: '注册失败'
            //         })
            //     }
            // })
        }
    });
})

function sendSMS(phone) {
    // ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
    const accessKeyId = 'omFtRkaRs3Xu0pTW'
    const secretAccessKey = 'a8LXFS3hXAU3vbtJqjEQh038j7iTDU'
    //初始化sms_client
    let smsClient = new SMSClient({
        accessKeyId,
        secretAccessKey
    })
    // 随机生成的验证码
    let code = Math.floor(Math.random()*899999)+100000;
    //发送短信
    return smsClient.sendSMS({
        PhoneNumbers: phone,
        // 必填: 待发送手机号。 支持以逗号分隔的形式进行批量调用， 批量上限为1000个手机号码,
        // 批量调用相对于单条调用及时性稍有延迟,
        // 验证码类型的短信推荐使用单条调用的方式； 发送国际 / 港澳台消息时， 接收号码格式为： 国际区号 + 号码， 如“ 85200000000”
        SignName: 'jasonandjay',
        // 必填: 短信签名 - 可在短信控制台中找到
        TemplateCode: 'SMS_144457028',
        // 必填: 短信模板 - 可在短信控制台中找到， 发送国际 / 港澳台消息时， 请使用国际 / 港澳台短信模版
        TemplateParam: `{"code":${code}}`
        // 可选: 模板中的变量替换JSON串,
        // 如模板内容为 "亲爱的${name},您的验证码为${code}" 时。
    }).then(function (res) {
        let {
            Code
        } = res
        if (Code === 'OK') {
            //处理返回参数
            return {
                result: 1,
                code
           }
        }
        return {
            result: -1,
            code
        };
    }, function (err) {
        console.log(err)
    })
}

//获取所有学生的名单
app.get('/allUser', (req, res) => {
  connection.query(`select * from user`, function (error, results, fields) {
      res.json({
          code: 1,
          data: results,
          msg: ''
      })
  })
})

app.listen(10002, () => {
    console.log('正在监听10001端口');
});
