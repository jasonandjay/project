// pages/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      uploadImg: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function (options) {
      let canvas = this.canvas =  wx.createCanvasContext('canvas');
      canvas.drawImage('/assets/image/timg.jpg', 0, 0, 700, 1070, 0, 0, 375, 558);
    //   canvas.draw();
  },
    upload(){
        wx.chooseImage({
            count: 1, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: (res)=>{
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                var tempFilePaths = res.tempFilePaths
                console.log('res...', res);
                this.setData({
                    uploadImg: tempFilePaths[0]
                })
                this.canvas.drawImage(tempFilePaths[0], 0, 0, 200, 200, 140, 60, 50, 50);
                this.canvas.draw(true, ()=>{
                    wx.canvasToTempFilePath({
                        x: 0,
                        y: 0,
                        width: 375,
                        height: 558,
                        destWidth: 375,
                        destHeight: 558,
                        canvasId: 'canvas',
                        success: function (res) {
                            console.log(res.tempFilePath)
                            wx.authorize({
                                scope: 'scope.writePhotosAlbum',
                                success: ()=>{
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
                        fail: (err)=>{
                            console.log('err..', err);
                        }
                    })
                });
                // 把图片转化成数据
                // wx.getImageInfo({
                //     src: 'images/a.jpg',
                //     success: function (res) {
                //         console.log(res.width)
                //         console.log(res.height)
                //     }
                // })
            }
        })
    },
    preview(){
        wx.previewImage({
            current: this.data.uploadImg, // 当前显示图片的http链接
            urls: [this.data.uploadImg] // 需要预览的图片http链接列表
        })
    },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})