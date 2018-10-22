//index.js
//获取应用实例
const app = getApp()
import {getList} from '../../api/index.js';
const util = require('../../utils/util');

Page({
  data: {
    list: [],
    page: 1
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onload');
  },
  onShow(){
    console.log('onshow');
    this.getData(1);
  },
  getData(page=1, callback=()=>{}){
    wx.showLoading({title: '拼命加载中'});
    getList(page).then(res=>{
      console.log('res...', res);
      let list = [];
      if (page != 1){
        list = this.data.list;
      }
      res.items.forEach(item=>{
        item.restaurant.image_path = util.joinImg(item.restaurant.image_path);
        list.push(item);
      })
      this.setData({
        list
      }, ()=>{
        wx.hideLoading();
        callback && (typeof callback == 'function') && callback()
      })
    }, err=>{

    })
  },
  onPullDownRefresh(){
    this.setData({
      page: 1
    }, ()=>{
      this.getData(this.data.page, ()=>{
        wx.stopPullDownRefresh();
      });
    })
  },
  onReachBottom(){
    this.setData({
      page: ++this.data.page
    }, ()=>{
      this.getData(this.data.page);
    })
  },
  itemClick(e){
    wx.navigateTo({
      url: `./detial/detail?id=${e.currentTarget.dataset.id}`
    })
  }
})
 