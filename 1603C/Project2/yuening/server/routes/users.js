var express = require('express');
var router = express.Router();
var query = require('../db.js');
var {geneToken, getIdFromToken} = require('../utils');

// 用户登陆
router.post('/login', function(req, res, next) {
  query('select id from user where username=? and password = ?', [req.body.username, req.body.password], function(error, results, fields){
    if (error){
      res.json({
        code: -1,
        msg: error.sqlMessage
      })
    }
    if (!results[0].id){
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
router.get('/update', function(req, res, next){
  let uid = getIdFromToken(req.header('X-Token'));
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
module.exports = router;
