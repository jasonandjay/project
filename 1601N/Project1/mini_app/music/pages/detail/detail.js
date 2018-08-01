// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      info: {}
  },

    onLoad: function (options) {
       console.log('options...', options);
       this.index = options.index;
    },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      let list = wx.getStorageSync('list');
      console.log('list..', list[this.index]);
      this.setData({
          info: list[this.index]
      })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})