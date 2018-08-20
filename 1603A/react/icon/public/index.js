var Mock = require('mockjs');
var fs = require('fs');



var data = Mock.mock({
    'arr|18':[{
        "name|+1": ['新浪','微信','上升','密码','二维码','链接','点赞','返回8','返回7','返回6','返回5','更多','收藏选中','收藏','返回1','返回2','返回3','返回4'],
        "iconName|+1": ['icon-xinlang','icon-weixin','icon-shangsheng','icon-mima','icon-erweima','icon-lianjie','icon-dianzan','icon-fanhui8','icon-fanhui7',
        'icon-fanhui6','icon-fanhui5','icon-gengduo','icon-shoucangxuanzhong','icon-shoucang','icon-fanhui1','icon-fanhui2','icon-fanhui3','icon-fanhui4'],
    }]
})

fs.writeFile('./data.json', JSON.stringify(data), ()=>{});
console.log(data);