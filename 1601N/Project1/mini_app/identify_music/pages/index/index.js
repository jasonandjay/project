//index.js
//获取应用实例
const app = getApp()
import {getMusicList} from '../../utils/net';

Page({
    data: {
        list: [],
        allList: [],
        index: 1
    },
    click(e){
        console.log('e...', e);
        let index = e.currentTarget.dataset.index;
        // 缓存
        wx.setStorageSync('list', this.data.allList);
        // 路由跳转
        wx.navigateTo({
            // url: '/pages/detail/detail',
            url: '../detail/detail?index='+index,
        })
    },
    onShow(){
        wx.showLoading({
            title: '加载中...'
        })
        getMusicList()
        .then(res=>{
            console.log('res...',res);
            this.setData({
                allList: res.songs,
                list: res.songs.slice(0, 10)
            }, ()=>{
                wx.hideLoading();
            })
        })
    },
    onPullDownRefresh(){
        // 假装在刷新
        wx.showLoading({
            title: '刷新中...'
        })
        setTimeout(()=>{
            wx.hideLoading();
        }, 3000);
    },
    onReachBottom(){
        console.log('拉到低了');
        this.setData({
            index: this.data.index++,
            list: this.data.allList.slice(0, this.data.index*10)
        })
    }
})