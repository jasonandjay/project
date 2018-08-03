var Mock = require('mockjs');
var Random = Mock.Random;


Mock.Random.extend({
    title: (data) => Mock.Random.pick(['什么是绝对地址和相对地址？', '角度来讲奥地利卡机', '法斯蒂夫送发票四平','帕拉丁帕拉丁怕']),
    money: (data) => Mock.Random.pick(['￥20', '￥30','$10','$90','$1000']),
    smallTitle: (data) => Mock.Random.pick(['已回复','未回复']),
    headerTitle: (data) => Mock.Random.pick(['未读','已读']),
    Detail: (data) => Mock.Random.pick(['山东矿机福克斯的','江苏省付款时间段可视对讲独','守空房速度快放假水电费说','考试凤娇的咖啡机扣水电','费开发速度快双卡双待凤娇科技打的上课肯定是放假看电视剧发大水口是咖啡机的看法康师傅加速度快放假的首付款就看风景的的咖啡机的的疯狂的减肥'])
})
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        "id": "@increment",
        "title": "@title",
        "money": "@money",
        "smallTitle": "@smallTitle",
        "headerTitle": "@headerTitle",
        "Detail":"@Detail"
    }]
})
console.log(data);