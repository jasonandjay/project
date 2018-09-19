var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var md5 = require('md5');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: '1602e'
});

app.use(bodyParser.json());
// 设置跨域访问
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "content-type");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  // res.header("Content-Type", "application/json;charset=utf-8");

  next();
});


// 获取权限接口
app.get('/permission', (req, res)=>{
  let id = req.query.id;
  console.log('id...', id);
});
// 登陆接口
app.post('/login', (req, res) => {
  console.log(req.body);
  if (!req.body.username || !req.body.password) {
    res.json({
      code: -1,
      msg: '修改后再来'
    })
  } else {
    // 判断用户是否已经注册
    connection.query(`select count(*) as length from user where username='${req.body.username}'`, function (error, results, fields) {
      if (error) throw error;
      if (results[0].length) {
        // 做登陆操作
        connection.query(`select id from user where username='${req.body.username}' and password='${req.body.password}'`, function (error, rows, fields) {
          if (error) throw error;
          console.log('rows...', rows);
          if (rows[0].id) {
            res.json({
              code: 0,
              data: {
                id: rows[0].id
              },
              msg: '登陆成功'
            })
          } else {
            res.json({
              code: -2,
              msg: '登陆失败'
            })
          }
        });
      } else {
        // 做注册操作
        connection.query(`insert into user (username, password, create_time) values ('${req.body.username}','${req.body.password}', ${+new Date()})`, function (error, results, fields) {
          if (error) throw error;
          res.json({
            code: 0,
            msg: '新建用户成功'
          })
        });
      }
	});
	// connection.query(`delete from user where username='${req.body.username}' and password='${req.body.password}'`, function (error, results, fields) {
	// 	if (error) throw error;
	// 	console.log('delete result...', results);
	// 	if (results.affectedRows){
	// 		res.json({
	// 		  code: 0,
	// 		  msg: '删除成功'
	// 		})
	// 	}else{
	// 		res.json({
	// 	  	  code: 0,
	// 		  msg: '删除失败'
	// 		})
	// 	}
	//   });
  }
  // connection.query('select * from user', function (error, results, fields) {
  // if (error) throw error;
  // console.log('The solution is: ', results);
  // });
  // connection.query(`insert into user (username, password, create_time) values ("chenmanjie","123456", ${+new Date()}),("chenmanjie2","123456", ${+new Date()})`, function (error, results, fields) {
  //   if (error) throw error;
  //   console.log('The solution is: ', results);
  // });

});

console.log('开始监听10001端口');
app.listen(10001);


/**
 *  数据库基础操作
 *  增删改查
 *  查询语句：
 *    select * from user where id = 1
 *  插入语句：
 *    insert into user (username, password, create_time) values ("chenmanjie","123456", ${+new Date()}),("chenmanjie2","123456", ${+new Date()})
 *	修改语句
 *	  update user set create_time=${10000000},username='${req.body.username}007' where username='${req.body.username} and password='${req.body.password}'
 *	删除语句
 *	  delete from user where username='${req.body.username}' and password='${req.body.password}'
 */
