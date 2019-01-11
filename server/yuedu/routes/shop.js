var express = require('express');
var router = express.Router();
var query = require('../db.js');

// 获取店铺列表
router.get('/list', function(req, res, next) {
  let sql = 'select * from shop order by id desc';
  if (req.query.city){
    sql += ` where city= ${req.query.city}`
  }
  query(sql, {}, function(error, results, fields){
      // console.log('results...', error, results);
      if (error){
        res.json({
          code: -1,
          msg: error.sqlMessage
        })
      }
      res.json({
        code: 1,
        data: {
          list: results
        },
        msg: '店铺列表获取成功'
      })
  })
});

// 新增店铺
router.post('/insert', function(req, res, next){
  // console.log('req...', req.body);
  req.body.create_time = +new Date();
  query('insert into shop set ?', req.body, function(error, results, fields){
    console.log('results...', error, results);
    if (results.insertId){
      res.json({
        code: 1,
        data: {},
        msg: '新增店铺成功'
      })
    }else{
      res.json({
        code: -1,
        msg: '新增店铺失败'
      })
    }
  })
});

// 修改店铺
router.post('/update', function(req, res, next){
  query('update shop set ? where id=?', [req.body, req.query.sid], function(error, results, fields){
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
        msg: '修改店铺信息成功'
      })
    }else{
      res.json({
        code: -2,
        msg: '修改店铺信息失败'
      })
    }
  })
});

// 关闭店铺
router.get('/close', function(req, res, next){
  query('update shop set status=2 where id=?', req.query.sid, function(error, results, fields){
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
        msg: '关闭店铺成功'
      })
    }else{
      res.json({
        code: -2,
        msg: '关闭店铺失败'
      })
    }
  })
});

// 搜索店铺
router.get('/search', function(req, res, next){
  query(`select * from shop where name like '%${req.query.search}%'`, {}, function(error, results, fields){
    console.log('search results...', error, results);
    if (error){
      res.json({
        code: -1,
        msg: error.sqlMessage
      })
    }
    res.json({
      code: 1,
      data: {
        list: results
      },
      msg: '搜索店铺成功'
    })
  })
});

module.exports = router;
