var express = require('express');
var router = express.Router();
var query = require('../db.js');

// 物品列表
router.get('/list', function(req, res, next) {
  let page = (req.query.page || 1)-1;
  query(`select * from goods where sid=? limit ${page*10},10`, req.query.sid, function(error, results, fields){
    console.log('results...', req,query, error);
    if (error){
      res.json({
        code: -1,
        msg: error.sqlMessage
      })
    }
    // 计算余量
    results.forEach(item=>{
      item.remain = item.num - item.rent - item.returning;
    })
    res.json({
      code: 1,
      data: {
        list: results
      },
      msg: '获取物品列表成功'
    })
  })
});

// 新增物品
router.post('/add', function(req, res, next){
  query('insert into goods set ?', req.body, function(error, results, fields){
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
        msg: '新增物品成功'
      })
    }else{
      res.json({
        code: -2,
        msg: '新增物品失败'
      })
    }
  })
})

// 更新物品
router.post('/update', function(req, res, next){
  query('update goods set ? where sid = ?', [req.body, req.query.gid], function(error, results, fields){
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
        msg: '更新物品成功'
      })
    }else{
      res.json({
        code: -2,
        msg: '更新物品失败'
      })
    }
  })
})

// 下架物品
router.get('/close', function(req, res, next){
  let status = parseInt(req.query.status || 0);
  query('update goods set status=? where sid = ?', [status, req.query.gid], function(error, results, fields){
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
        msg: `${status?'上架':'下架'}物品成功`
      })
    }else{
      res.json({
        code: -2,
        msg: `${status?'上架':'下架'}物品成功`
      })
    }
  })
})

module.exports = router;
