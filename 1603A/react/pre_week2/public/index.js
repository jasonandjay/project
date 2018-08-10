var Mock = require('mockjs');
var fs = require('fs');
Mock.Random.extend({
    title: ()=>Mock.Random.pick(['顶哈顶哈','顶哈点卡啥快递哈家的骄','傲的建设拉动就爱看大家','阿斯利康大家啊看','大家思考的煎熬','了机卡分离迪斯科','飞机的是']),
    name: ()=>Mock.Random.pick(['可口可乐','矿泉水','特仑苏','咖啡','奶粉','绿茶','椰子']),
    price: ()=>Mock.Random.pick([60, 100, 200, 300,400])
})


var data = Mock.mock({
    'arr|1-20':[{
        "id|+1":1,
        "name": "@name",
        "price": "@price",
        "img": 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3744558029,2096519144&fm=27&gp=0.jpg'
    }]
})

fs.writeFile('./data.json', JSON.stringify(data), ()=>{});
console.log(data);