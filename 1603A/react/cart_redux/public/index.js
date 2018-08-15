var Mock = require('mockjs');
var fs = require('fs');
Mock.Random.extend({
    title: ()=>Mock.Random.pick(['顶哈顶哈','顶哈点卡啥快递哈家的骄','傲的建设拉动就爱看大家','阿斯利康大家啊看','大家思考的煎熬','了机卡分离迪斯科','飞机的是']),
    name: ()=>Mock.Random.pick(['西瓜','榴莲','葡萄','苹果','橘子','橙子','椰子']),
    price: ()=>Mock.Random.pick([60, 100, 200, 300,400]),
    num: ()=>Mock.Random.pick([60, 100, 200, 300,400])
})


var data = Mock.mock({
    'arr|1-20':[{
        "id|+1":1,
        "num":"@num",
        "name": "@name",
        "price": "@price",
        "isChecked": false
    }]
})

fs.writeFile('./data.json', JSON.stringify(data), ()=>{});
console.log(data);