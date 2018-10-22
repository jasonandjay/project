// 发起网络请求

export let getList = (page) => {
    return new Promise((resolve, reject) => {
        wx.request({
            url: `https://mainsite-restapi.ele.me/pizza/v3/restaurants?offset=${(page-1)*30}&limit=30&latitude=40.040501&longitude=116.298929&extras=%5B%22activities%22%5D&extra_filters=home&keyword=&order_by=0&terminal=weapp&user_id=356827514`, //仅为示例，并非真实的接口地址
            header: {
                'content-type': 'application/json' // 默认值
            },
            success(res) {
                console.log(res.data)
                resolve(res.data);
            },
            fail(res) {
                reject(res);
            }
        })
    })
}