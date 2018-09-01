var Mock = require('mockjs');
var fs = require('fs');

var data = Mock.mock({
    'list|1-20':[{
        "id|+1":1,  // 每一次加1，1为初始值
        "name|+1":['苹果','香蕉','车厘子','山竹','榴莲','蓝莓','普通','牛油果'],
        // "content|1": ['的技能法律','实施','开发建设','雷锋精神','亢奋','的麦卢卡','蜂蜜','势力扩','大繁忙的路口','麻烦了','肯定是免费','看什么地方了','肯定是'],
        "price|10-100": 10, 
        "num|1-10": 1,
        "isSelect|1-2": true
        // "isReplay|1-2": true,   
        // "isRead|1-2": true,
        // "name": '@cname'
    }]
})

fs.writeFile('./data.json', JSON.stringify(data), ()=>{});
// console.log(data);