// pages/discover.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    circular: true,
    interval: 5000,
    duration: 1000
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.mapCtx = wx.createMapContext('myMap')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 获取定位
    wx.getLocation({
      type: 'gcj02',
      success: res=>{
        console.log('res...', res);
      }
    })

    // 获取canvas实例
    let canvas = wx.createCanvasContext("canvas");
    this.canvas = canvas;
    
    // 绘制吴彦祖
    canvas.drawImage('../../assets/timg.png', 0,0,750,975,0,0,375,487);
    canvas.draw();
    canvas.save();
  },
  selectImg(){
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res)=>{
        // tempFilePath可以作为img标签的src属性显示图片
        console.log('选择了一张图片', res.tempFilePaths);
        const tempFilePaths = res.tempFilePaths
        this.canvas.drawImage(res.tempFilePaths[0], 100,100,100,120);
        this.canvas.draw(true);
      }
    })
  },
  saveImg(){
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: 750,
      height: 975,
      destWidth: 750,
      destHeight: 975,
      canvasId: 'canvas',
      success(res) {
        console.log(res.tempFilePath)
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success(res) {
              console.log('res...', res);
          },
          fail(err) {
              console.log('err...', err);
          }
        })
      }
  })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function(res){
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation({
      latitude:40.0396220000,
      longitude:116.2994380000,
    })
  },
  translateMarker: function() {
    this.mapCtx.translateMarker({
      markerId: 0,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude:40.0396220000,
        longitude:116.2994380000,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function() {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude:40.0396220000,
        longitude:116.2994380000,
      }]
    })
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
    return {
      title: '发现页转发',
      path: '/pages/index/index',
      imageUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540522235&di=7cbe26b96eecfe2319616fb64ca13c37&imgtype=jpg&er=1&src=http%3A%2F%2F07imgmini.eastday.com%2Fmobile%2F20180914%2F20180914191639_971c57c66b2167ab18af26a9ecd05daf_1.jpeg'
    }
  }
})