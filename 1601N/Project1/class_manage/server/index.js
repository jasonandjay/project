var express = require('express');
var app = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : '1601N'
});

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    res.send('hello world');
});
  

// 登陆接口
app.post('/login', urlencodedParser, (req, res)=>{
    console.log('req...', req.body);
    // 获取该用户名的数量
    // connection.query(`select count(*) from user where username = ${body.username}`, function(err, rows, fields) {
    //     if (err) throw err;
    //     console.log('The solution is: ', rows);
    // });   
})


app.get('/list', (req, res)=>{
    // connection.connect();

    // 查询语句
    connection.query('select *,id, username,password from user', function(err, rows, fields) {
        if (err) throw err;
        console.log('The solution is: ', rows);
    });

    // 插入语句
    connection.query('insert into user (username, password, phone, birthday) values("chenmanjie", 123456, 13133809344, 3131231)',
    (err, rows, fields)=>{
        console.log('rows...', rows);
    })

    // 修改语句
    connection.query('update user set username="xiaochen" where username="chenmanjie"', (err, rows, fields)=>{
        console.log('rows...', rows);
    });

    //删除语句
    connection.query('delete from user where id<3', (err, rows, fields)=>{
        console.log('rows...', rows);
    });


    // connection.end();
    res.end('111');
});

app.listen(9000);

console.log('启动服务...');