const express = require('express');
var multipart = require('connect-multiparty');
const app = express();

// 设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "content-type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  
    next();
});
  

// 设置静态文件夹
app.use('/static', express.static('static'));

// 上传接口
app.post('/upload', multipart({
    autoFiles: true,
    uploadDir: 'static/'
  }), (req, res)=>{
    console.log('req...', req.files);
    const data = [];
    Object.keys(req.files).forEach(item=>{
        let file = req.files[item];
        let key = Object.keys(file)[0];
       
        data.push({
            name: item,
            path:  `http://123.206.55.50:11000/${file[key].path}`
        })
    })
    console.log('data...', data);
    res.json({
        code: 1,
        data,
        msg: '上传成功'
    })
})

app.listen(10003, ()=>{
    console.log('我正在监听10003端口....');
})