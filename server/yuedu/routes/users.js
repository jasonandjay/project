var express = require('express');
var query = require('../db.js');
var router = express.Router();
var {geneToken, getIdFromToken} = require('../utils');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('server yuedu response with ok!');
});

// 手机号登陆功能
router.post('/smsLogin', function(req, res, next) {
  console.log('req...', req.body);
  query('select user.id as id,phone_code.status as status,phone_code.create_time as create_time,code from user,phone_code where phone_code.phone=user.phone and user.phone = ? order by phone_code.create_time desc limit 1', req.body.phone, function(error, results, fields){
    if (error){
      res.json({
        code: -1,
        msg: error.sqlMessage
      })
    }
    console.log('results...', results);
    if (!results[0] || !results[0].create_time){
      res.json({
        code: -2,
        msg: '用户不存在或者没有获取验证码'
      })
    }else{
      if (!results[0].status){
        res.json({
          code: -3,
          msg: '短信验证码已使用过'
        })
      }else if ((+new Date()) - results[0].create_time > 5*60*60*1000){
        res.json({
          code: -4,
          msg: '短信验证码已超出有效期'
        })
      }else if (results[0].code != req.body.code){
        res.json({
          code: -5,
          msg: '短信验证码不正确'
        })
      }else{
        var token = geneToken(results[0].id);
        query('update phone_code set status=0 where create_time=?', results[0].create_time, function(error, results, fields){
          if (error){
            res.json({
              code: -6,
              msg: error.sqlMessage
            })
          }else{
            res.json({
              code: 1,
              data: {token},
              msg: '登陆成功'
            })
          }
        })
      }
    }
  });
})
// 登陆功能
router.post('/login', function(req, res, next) {
  console.log('req.body...', req.body);
  query('select id from user where username=? and password = ?', [req.body.username, req.body.password], function(error, results, fields){
    if (error){
      res.json({
        code: -1,
        msg: error.sqlMessage
      })
    }
    if (!results[0] || !results[0].id){
      res.json({
        code: -2,
        msg: '用户名或密码错误'
      })
    } else{
      var token = geneToken(results[0].id);
      query('insert into token set ?', {uid: results[0].id, token, create_time: +new Date()}, (error, result, fields)=>{
        let uid = results[0].id;
        query('select rolername from roler,user_roler where roler.id=user_roler.rid and user_roler.uid=? and user_roler.status=1', [uid], (error, results, fields)=>{
          if (error){
            res.json({
              code: -1,
              msg: error.sqlMessage
            })
          }
          let roles = results.map(item=>item.rolername);
          if (!roles.length){
            roles = ['staff'];
          }
          res.json({
            code: 1,
            data: {
              auths: roles,
              token
            },
            msg: '用户权限获取成功'
          })
          // console.log('error...', error, results);
        })

        res.json({
          code: 1,
          data: {token},
          msg: '登陆成功'
        })
        // console.log('results...', error, result);
      })

    }
    // console.log('results...', error, results, req.body);
  })
});

// 用户注册
router.post('/register', function(req, res, next){
  query('select id from user where phone = ?', [req.body.phone], function(error, results, fields){
    if (error){
      res.json({
        code: -1,
        msg: error.sqlMessage
      })
    }
    if (results[0] && results[0].id){
      res.json({
        code: -2,
        msg: '该手机号已被注册，请输入您的手机号'
      })
    } else{
      query('insert into user set ?', {
        username: req.body.username,
        password: req.body.password,
        phone: req.body.phone,
        avatar: 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg',
        create_time: +new Date()}, (error, result, fields)=>{
          console.log('result...', result, error);
          if (result.insertId){
            var token = geneToken(result.insertId);
            query('insert into token set ?', {uid: result.insertId, token, create_time: +new Date()}, (error, result, fields)=>{
              if (error){
                res.json({
                  code: -4,
                  msg: error.sqlMessage
                })
              }else{
                res.json({
                  code: 1,
                  data: {token},
                  msg: '注册成功'
                })
              }
              console.log('results...', error, result);
            })
          }else{
            res.json({
              code: -3,
              msg: '注册用户失败'
            })
          }
        console.log('results...', error, result);
      })
    }
    // console.log('results...', error, results, req.body);
  })
});

// 获取用户信息
router.get('/info', (req, res)=>{
  let token =  req.header('X-Token');
  var uid = getIdFromToken(token);
  console.log('token...', token);
  query('select * from user where id = ?', [uid], (error, result, fields)=>{
    if (error){
      res.json({
        code: -1,
        msg: error.sqlMessage
      })
    }else{
      if(result && result.length){
        delete result[0].password;
        query(`select user_roler.uid as uid,rolername, roler.id as rid, access.id as aid, accessname from user_roler, roler, roler_access, access where roler_access.rid = roler.id and roler_access.aid = access.id and user_roler.status=1 and user_roler.rid = roler.id 
        and user_roler.uid = ?`, [uid], function(error, auths, fields){
          // console.log('auth results...', auths);
          if (error){
            res.json({
              code: -2,
              msg: error.sqlMessage
            })
          }
          let rolers = [],
            rolersId = [], 
            access = ['staff'],
            accessId = [1];
          // 获取角色
          auths.map(value=>{
            rolers.push(value.rolername);
            rolersId.push(value.rid);
            access.push(value.accessname);
            accessId.push(value.aid);
          })
          // 获取权限
          result[0].rolers = [...new Set(rolers)];
          result[0].rolersId = [...new Set(rolersId)];
          result[0].access = [...new Set(access)];
          result[0].accessId = [...new Set(accessId)];
          res.json({
            code: 1,
            data: result[0],
            msg: '获取用户信息成功'
          })
        })
      }else{
        res.json({
          code: -2,
          msg: '该用户不存在'
        })
      }
    }
    console.log('results...', error, result);
  })
})

// 更新用户信息
router.post('/update', function(req, res, next){
  let uid = req.header('X-Token') && getIdFromToken(req.header('X-Token'));
  // 支持更新他人信息
  if (req.body.id){
    uid = req.body.id;
  }
  // 更改name字段
  if (req.body.name){
    req.body.username = req.body.name;
    delete req.body.name;
  }
  query('update user set ? where id=?', [req.body, uid], function(error, results, fields){
    console.log('results...', error, req.body);
    if (error){
      res.json({
        code: -1,
        msg: error.sqlMessage
      })
    }
    if (results.affectedRows){
      res.json({
        code: 1,
        data: {},
        msg: '修改用户信息成功'
      })
    }else{
      res.json({
        code: -2,
        msg: '修改用户信息失败'
      })
    }
  })
})

// 发送短信验证码
router.post('/smsCode', function(req, res, next){
  const SMSClient = require('@alicloud/sms-sdk')
  // ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
  const accessKeyId = 'omFtRkaRs3Xu0pTW'
  const secretAccessKey = 'a8LXFS3hXAU3vbtJqjEQh038j7iTDU'
  //初始化sms_client
  let smsClient = new SMSClient({accessKeyId, secretAccessKey})
  //发送短信
  smsClient.sendSMS({
    // '16619932979,18515355836,18811126840,18612262553'
      PhoneNumbers: req.body.phone,
      // 必填:待发送手机号。支持以逗号分隔的形式进行批量调用，批量上限为1000个手机号码,批量调用相对于单条调用及时性稍有延迟,验证码类型的短信推荐使用单条调用的方式；发送国际/港澳台消息时，接收号码格式为：国际区号+号码，如“85200000000”
      SignName: 'jasonandjay',
      // 必填:短信签名-可在短信控制台中找到
      TemplateCode: 'SMS_144457028',
      // 必填:短信模板-可在短信控制台中找到，发送国际/港澳台消息时，请使用国际/港澳台短信模版
      TemplateParam: `{"code":${Math.floor(Math.random()*99999)+100000}}`
      // 可选:模板中的变量替换JSON串,如模板内容为"亲爱的${name},您的验证码为${code}"时。
  }).then(function (response) {
      let {Code}=response
      if (Code === 'OK') {
          //处理返回参数
          console.log(response)
          res.json({
            code: 1,
            msg: '短信发送成功'
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

// 获取用户列表
router.get('/list', async function(req, res, next){
  let sql = '',
      search = [],
      type = req.query.type || 1,
      page = (req.query.page || 1)-1;
  search.push(`type=${type}`)
  if (req.query.search){
    search.push(`username like '%${req.query.search}%'`);
  }
  if (req.query.phone){
    search.push(`phone like '%${req.query.phone}%'`);
  }
  if (search.length){
    sql = `select * from user where ${search.join(' and ')} and status=1 limit ${page*10},10`
  }else{
    sql = `select * from user,user_roler where status=1 limit ${page*10},10`
  }
  query(sql, {}, function(error, results, fields){
    // console.log('list results...', req,query, search, sql, error, results);
    if (error){
      res.json({
        code: -1,
        msg: error.sqlMessage
      })
    }
    // 去掉用户密码
    results.forEach(item=>{
      delete item.password
    })
    // 获取用户的权限
    // 用in语法搜索
    let ids = results.map(item=>item.id);
    console.log('ids...', ids);
    query(`select user_roler.uid as uid,rolername, roler.id as rid, access.id as aid, accessname from user_roler, roler, roler_access, access where roler_access.rid = roler.id and roler_access.aid = access.id and user_roler.status=1 and user_roler.rid = roler.id 
    and user_roler.uid in (?)`, [ids], function(error, auths, fields){
      console.log('auth results...', auths);
      if (error){
        res.json({
          code: -2,
          msg: error.sqlMessage
        })
      }
      results.forEach(item=>{
        delete item.password;
        let rolers = [],
            rolersId = [], 
            access = ['staff'],
            accessId = [1];
        // 获取角色
        auths.map(value=>{
          if (value.uid == item.id){
            rolers.push(value.rolername);
            rolersId.push(value.rid);
            access.push(value.accessname);
            accessId.push(value.aid);
          }
        })
        // 获取权限
        item.rolers = [...new Set(rolers)];
        item.rolersId = [...new Set(rolersId)];
        item.access = [...new Set(access)];
        item.accessId = [...new Set(accessId)];
      })
      res.json({
        code: 1,
        data: {
          list: results
        },
        msg: '获取用户列表成功'
      })
    })
  })
})

// 注销账号
router.delete('/action', function(req, res, next){
  let type = req.body.type || 1,
      status = req.body.status || 0,
      id = req.body.uid;
  console.log('req.body...', req.body);
  if (!id){
    res.json({
      code: -2,
      data: {},
      msg: '缺少需要注销账号的id'
    })
    return;
  }
  query('update user set status=? where id=?', [status, id], function(error, results, fields){
    console.log('results...', error, results);
    if (error){
      res.json({
        code: -1,
        msg: error.sqlMessage
      })
    }
    if (results.affectedRows){
      res.json({
        code: 1,
        data: {},
        msg: `注销${type==1?'普通用户':'员工'}成功`
      })
    }else{
      res.json({
        code: -3,
        data: {},
        msg: `注销${type==1?'普通用户':'员工'}失败`
      })
    }
  })
})

// 分配角色接口
router.put('/action', function(req, res, next){
  // const roler = [{
  //   id: 1,
  //   name: 'admin'
  // },{
  //   id: 2,
  //   name: 'staff'
  // }];
  // if (!req.body.type || req.body.type == 1){
  //   res.json({
  //     code: -2,
  //     data: {},
  //     msg: '分配权限接口只对员工开放'
  //   })
  // }
  // 把权限转化为rids
  let rows = req.body.rolersId.map(item=>{
    return `(${req.body.uid}, ${item}, ${+new Date()})`
  })
  // console.log('rows...', rows.join(','));
  query(`update user_roler set status = 0 where uid = ?`, [req.body.uid], function(error){
    if (error){
      res.json({
        code: -1,
        msg: error.sqlMessage
      })
    }else if(rows.length){
      query(`insert into user_roler (uid, rid, create_time) values ${rows.join(',')}`, [], function(error, results, fields){
        // console.log('results...', error, results);
        if (error){
          res.json({
            code: -1,
            msg: error.sqlMessage
          })
        }
        if (results.affectedRows){
          res.json({
            code: 1,
            data: {},
            msg: '为用户分配角色成功'
          })
        }else{
          res.json({
            code: -2,
            msg: '为用户分配角色失败'
          })
        }
      })
    }else{
      res.json({
        code: 1,
        data: {},
        msg: '为用户分配角色成功'
      })
    }
  })
})

// 用户提交记录
router.get('/commit', function(req, res, next){
  let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let commit = [];
  month.forEach((item, index)=>{
    let grade = [];
    for (let i=0;i<item; i++){
      grade.push({
        date: i+1,
        commit: ~~(Math.random()*12)+3
      })
    }
    commit.push({
      month: index+1,
      commit: grade
    })
  })
  res.json(commit)
})
 
module.exports = router;
