// 获取歌曲列表
export let getMusicList = ()=>{
    return new Promise((resolve, reject)=>{
        wx.request({
            url: 'https://www.easy-mock.com/mock/5af6599acf64741ceacf1c57/es6/musicList',
            success: (res)=>{
                resolve(res.data);
            },
            fail: (error)=>{
                reject(error);
            }
        })
    })
}