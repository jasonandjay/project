var express = require('express');
var router = express.Router();
var query = require('../db.js');
var {geneToken, getIdFromToken} = require('../utils');

const roler = [{
  id: 1,
  name: 'admin'
},{
  id: 2,
  name: 'staff'
}];
// 用户登陆
router.post('/login', function(req, res, next) {
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

        // res.json({
        //   code: 1,
        //   data: {token},
        //   msg: '登陆成功'
        // })
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
              // console.log('results...', error, result);
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

// 获取权限
router.get('/authority', function(req, res, next){
  let uid = req.query.token.split('_')[0].replace('u', '');
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
        auths: roles
      },
      msg: '用户权限获取成功'
    })
    // console.log('error...', error, results);
  })
})

// 获取用户信息
router.get('/info', function(req, res, next){
  let token = req.header('X-Token') || "u1_2bcd04c8fb211080e031a4e9cee58";
  let uid = getIdFromToken(token);

  query('select * from user where id=?', uid, function(error, results, fields){
    if (error){
      res.json({
        code: -1,
        msg: error.sqlMessage
      })
    }
    console.log('results...', results, uid);
    res.json({
      code: 1,
      data: results[0],
      msg: '获取用户信息成功'
    })
  })
})

// 更新用户信息
router.post('/update', function(req, res, next){
  let uid = getIdFromToken(req.header('X-Token'));
  req.body.username = req.body.name;
  delete req.body.name;
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
function getAuths(id){
  return new Promise((resolve, reject)=>{
    query('select rid from user_roler where uid=? and status=1', id, function(error, results, fields){
      console.log('rid results...', error, results);
      resolve(results);
      // if (error){
      //   res.json({
      //     code: -1,
      //     msg: error.sqlMessage
      //   })
      // }
    })
  })
}
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
    sql = `select * from user where ${search.join(' and ')} limit ${page*10},10`
  }else{
    sql = `select * from user,user_roler limit ${page*10},10`
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
    if (type == 2){
      // results.forEach(async item=>{
      //   delete item.password
      //   item.auths = await getAuths(item.id);
      //   console.log('item.auths...', item.auths);
      //   // item.auths
      // })

      // 用promise做多次连接处理
      // let promises = results.map(item=>getAuths(item.id));
      // Promise.all(promises).then(body=>{
      //   console.log('auth results...', body);
      //   results.forEach((item, index)=>{
      //     delete item.password;
      //     item.auths = ['staff'];
      //     if (body[index] && body[index].length){
      //       item.auths = body[index].map(item=>{
      //         console.log('item...', item);
      //         return roler[item.rid-1].name
      //       })
      //     }
      //   })
      //   res.json({
      //     code: 1,
      //     data: {
      //       list: results
      //     },
      //     msg: '获取用户列表成功'
      //   })
      // }).catch(err=>{
      //   console.log('err...', err);
      // })

      // 用in语法搜索
      let ids = results.map(item=>item.id);
      console.log('ids...', ids);
      query('select uid,rid from user_roler where status=1 and uid in (?)', [ids], function(error, auths, fields){
        console.log('auth results...', auths);
        results.forEach(item=>{
          delete item.password;
          // 获取权限
          item.auths = auths.map(value=>{
            if (value.uid == item.id){
              return roler[value.rid-1].name;
            }
          })
          if (!item.auths || !item.auths.length || !item.auths[0]){
            item.auths = ['staff'];
          }
        })
        res.json({
          code: 1,
          data: {
            list: results
          },
          msg: '获取用户列表成功'
        })
      })
    }else{
      res.json({
        code: 1,
        data: {
          list: results
        },
        msg: '获取用户列表成功'
      })
    }
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
  query('update user set status=? where id=? and type=?', [status, id, type], function(error, results, fields){
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

// 分配权限接口
router.put('/action', function(req, res, next){
  if (!req.body.type || req.body.type == 1){
    res.json({
      code: -2,
      data: {},
      msg: '分配权限接口只对员工开放'
    })
  }
  // 把权限转化为rids
  let rids = req.body.auths.map(item=>{
    let rid = 0;
    roler.forEach(value=>{
      if (value.name == item){
        rid = value.id;
      }
    })
    return rid;
  })
  let values = [];
  rids.forEach(item=>{
    values.push({
      uid: req.body.uid,
      rid: item,
      status: 1,
      create_time: +new Date()
    })
  })
  console.log('values..', rids, values);
  query('update user_roler set status=0 where uid=?', req.body.uid, function(){});
  query('insert into user_roler set ?', values, function(error, results, fields){
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
        msg: '为用户分配权限成功'
      })
    }else{
      res.json({
        code: -2,
        msg: '为用户分配权限失败'
      })
    }
  })
})
module.exports = router;
