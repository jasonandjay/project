// 获取城市列表
export let getCityList = ()=>{
    return new Promise((resolve,reject)=>{
        wx.request({
            url: 'https://mock.jasonandjay.com/mock/5b5fc4767a32f77e39e46aba/city/city',
            success:(res)=>{
                resolve(res.data);
            },
            fail:(error)=>{
                reject(error)
            }
        })
    })
}