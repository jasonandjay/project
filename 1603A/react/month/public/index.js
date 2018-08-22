var Mock = require('mockjs');
var fs = require('fs');
// Mock.Random.extend({
//     title: ()=>Mock.Random.pick(['顶哈顶哈','顶哈点卡啥快递哈家的骄','傲的建设拉动就爱看大家','阿斯利康大家啊看','大家思考的煎熬','了机卡分离迪斯科','飞机的是']),
//     name: ()=>Mock.Random.pick(['西瓜','榴莲','葡萄','苹果','橘子','橙子','椰子']),
//     price: ()=>Mock.Random.pick([60, 100, 200, 300,400])
// })


var data = Mock.mock({
    'list|1-20':[{
        "id|+1":1,
        "title|+1":['的技能法律','实施','开发建设','雷锋精神','亢奋','的麦卢卡','蜂蜜','势力扩','大繁忙的路口','麻烦了','肯定是免费','看什么地方了','肯定是'],
        "content|1": ['的技能法律','实施','开发建设','雷锋精神','亢奋','的麦卢卡','蜂蜜','势力扩','大繁忙的路口','麻烦了','肯定是免费','看什么地方了','肯定是'],
        "price|10-100": 10,
        "isReplay|1-2": true,
        "isRead|1-2": true,
        "name": '@cname'
    }]
})

fs.writeFile('./data.json', JSON.stringify(data), ()=>{});
console.log(data);