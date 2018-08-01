// 获取歌曲列表
export let getMusicList = ()=>{
    return new Promise((resolve, reject)=>{
        wx.request({
            url: 'https://mock.jasonandjay.com/mock/5b5fa6de5561566d446a3802/music',
            success: (res)=>{
                resolve(res.data);
            },
            fail: (error)=>{
                reject(error);
            }
        })
    })
}