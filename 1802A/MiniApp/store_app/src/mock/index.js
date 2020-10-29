const Mock = require('better-mock/dist/mock.mp.js')

const {Random} = Mock;

// Mock书架数据
export let mockBookList = function(){
    return Mock.mock({
        "list|100-300": [{
            id: "@id",
            img: Random.image('100x200'),
            title: Random.ctitle(20),
            desc: Random.cword(30, 50),
            read:  Random.natural(10, 1000),
            favor:  Random.natural(10, 1000),
            share:  Random.natural(10, 1000)
        }]
    })
}

// Mock二维码
export let mockScanCode = function(){
    return Mock.mock({
        "scanSrc": Random.image('300x300')
    })
}

// Mock订单数据
export let mockOrderList = function(){
    return Mock.mock({
        "list|100-300": [{
            id: "@id",
            img: Random.image('100x200'),
            title: Random.ctitle(20),
            desc: Random.cword(30, 50),
            price: Random.natural(300, 1000),
            num:  Random.natural(10, 1000),
            discount: Random.natural(10, 200)
        }]
    })
}