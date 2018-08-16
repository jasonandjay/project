import Mock from 'mockjs';
// const Mock = require('mockjs');

let data = Mock.mock({
    "user|1-10":[{
        'cname': '@cname',
        'id|+1': 1,
        'name|+1': ['香蕉','苹果','橘子','榴莲','山竹'],
        'price|100-1000':100,
        'isChecked|1-2': true
    }]
})


// console.log(data);
export default data;