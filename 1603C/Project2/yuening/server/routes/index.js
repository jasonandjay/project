var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('恭喜你发现彩蛋：服务启动成功!!!');
});

module.exports = router;
