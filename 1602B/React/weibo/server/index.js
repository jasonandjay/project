var express = require('express');
var app = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'weibo'
});


var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// 解析cookie
app.use(cookieParser())
// 设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "content-type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    // res.header("Content-Type", "application/json;charset=utf-8");

    next();
});


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    res.send('hello world');
});
  

// 登陆接口
app.post('/login', jsonParser, (req, res)=>{
    console.log('req...', req.body);
    // 获取该用户名的数量
    connection.query(`select count(*) as num from user where username = ?`,[req.body.username], function(err, rows, fields) {
        if (err) throw err;
        if (rows[0].num){
            connection.query(`select count(*) as num,id from user where username = ? and password = ?`,[req.body.username, req.body.password], (err, rows, fields)=>{
                // console.log(rows);  
                if (rows[0].num == 1){
                    res.cookie('isLogin2222', 'true');
                    res.json({
                        code: 0,
                        id: rows[0].id,
                        msg: '登陆成功'
                    })
                }else{
                    res.json({
                        code: -2,
                        msg: '登陆失败'
                    })
                }
            })
        }else{
            // 创建新用户代码
            // connection.query(`insert into user (username, password, created) values('${req.body.username}', '${req.body.password}', ${+ new Date()})`, (err, rows, fields)=>{
            //     console.log(rows, );
            //     if (rows.insertId){
            //         res.json({
            //             code: 0,
            //             msg: '新增成功'
            //         })
            //     }else{
            //         res.json({
            //             code: -1,
            //             msg: '新建用户失败'
            //         })
            //     }
            // })
            res.json({
                code: -2,
                msg: '不允许创建新用户'
            })
        }
    });   
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

app.listen(10000);

console.log('启动服务...');