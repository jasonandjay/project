var mysql=require("mysql");

// 创建连接池
// var pool = mysql.createPool({
//     host: '127.0.0.1',
//     user: 'root',
//     password: '',
//     database: 'yuening',
//     port: 3306
// });
var pool = mysql.createPool({
  host: '123.206.55.50',
  user: 'root',
  password: '1601n',
  database: 'yuening',
  port: 3306
});

// 连接公用方法
var query=function(sql,options,callback){
    pool.getConnection(function(err,conn){
        if(err){
            callback(err,null,null);
        }else{
            conn.query(sql,options,function(err,results,fields){
                //释放连接
                conn.release();
                //事件驱动回调
                callback(err,results,fields);
            });
        }
    });
};

module.exports=query;
