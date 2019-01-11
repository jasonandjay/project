var md5 = require('md5');
var query = require('../db.js');
var request = require('request');
var md5 = require('md5');

// 快递鸟的参数
const merchantId = '1402616';
const APIKey = '8e760a17-49bb-4353-92e6-0583b9fdda0d';
const SHIP_OBJECT = {
	SF: "顺丰速运",
	HTKY: "百世快递",
	ZTO: "中通快递",
	STO: "申通快递",
	YTO: "圆通速递",
	YD: "韵达速递",
	YZPY: "邮政快递包裹",
	EMS: "EMS",
	HHTT: "天天快递",
	JD: "京东快递",
	UC: "优速快递",
	DBL: "德邦快递",
	ZJS: "宅急送",
};
// 从token获取id
function getIdFromToken(token){
  return token.split('_')[0].replace('u', '');
}
// 生成token
function geneToken(uid){
  return `u${uid}_${md5(+new Date()+'login')}`.slice(0, 32);
}
// 生成订单号
function geneOrderNu(uid){
  reurn `${uid}${md5(+new Date()+'order')}`.slice(0, 20);
}
// 校验token有效期
function isExpire(create_time, expire = 7*24*60*60*1000){
  let now = +new Date();
  return now - create_time > expire;
}
// 校验token是否有效
function checkToken(token, res, next){
  let id = token.split('_')[0].replace('u','');
  query('select token,status,create_time from token where uid=? order by create_time desc limit 1', [id], function(error, results, fields){
    console.log(error, results, fields);
    if (error){
      res.json({
        code: -1,
        msg: error.sqlMessage
      })
    }
    if (!results.length || results[0].status == 0 || results[0].token != token){
      res.json({
        code: -2,
        msg: '无效的token'
      })
    }else if(isExpire(results[0].create_time)){
      res.json({
        code: -3,
        msg: 'token已过期'
      })
    }else{
      next()
    }
  })
}
// 快递信息查询
function getShip(shipCode, logisticCode, callback){
  let param = JSON.stringify({
    "OrderCode": "",
    "ShipperCode": shipCode,
    "LogisticCode": logisticCode
  });
  request.post({url:'http://api.kdniao.com/Ebusiness/EbusinessOrderHandle.aspx',
    form: {
      RequestData: encodeURIComponent(param),
      EBusinessID: merchantId,
      RequestType: 1002,
      DataType: 2,
      DataSign: encodeURIComponent(new Buffer(md5(param+APIKey)).toString('base64'))
    }}, function(err,response,body){
      // console.log('ship info...', err, body)
      // res.json(JSON.parse(body));
      callback(JSON.parse(body));
  })
}
module.exports = {
  geneToken,
  geneOrderNu,
  checkToken,
  getShip,
  getIdFromToken
}
