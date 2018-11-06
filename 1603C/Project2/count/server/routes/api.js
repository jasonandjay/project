var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log('req.query', req.query.url);
  request(req.query.url, function (error, response, body) {
    /*判断请求是否成功*/
    if (!error && response.statusCode == 200) {
      /*把字符串转换为json*/
      var data = JSON.parse(body);
      /*返回数据*/
      res.json(data);
    }
  });
});

module.exports = router;






