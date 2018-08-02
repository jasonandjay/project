import * as echarts from '../../ec-canvas/echarts';
import geoJson from './mapData.js';
const app = getApp();

function setOption(chart, data) {
  const option = {
    tooltip: {
      trigger: 'item'
    },
    visualMap: {
      min: 0,
      max: 100,
      left: 'left',
      top: 'bottom',
      text: ['高', '低'], // 文本，默认为数值文本
      calculable: true,
      show: false
    },
    // toolbox: {
    //   show: true,
    //   orient: 'vertical',
    //   left: 'right',
    //   top: 'center',
    //   feature: {
    //     saveAsImage: {}
    //   }
    // },
    series: [{
      type: 'map',
      mapType: 'china',
      zoom: 1.2,
      silent: true,
      label: {
        normal: {
          show: false
        },
        emphasis: {
          textStyle: {
            color: '#fff'
          }
        }
      },
      itemStyle: {
        normal: {
          borderColor: '#fff',
          areaColor: '#979797',
        },
        // emphasis: {
        //   areaColor: '#979797',
        //   borderWidth: 0
        // }
      },
      animation: false,
      data: data
    }],

  };
  chart.setOption(option);
}

Page({
  data: {
    ec: {
      lazyLoad: true
    },
    provinces: [],
    cities: [],
    percentage: '',
    isHidden:false
  },

  onLoad: function (option) {
      let data = JSON.parse(option.City);
      let cities = JSON.parse(option.Arr);
    //0—5, 40%
    //5-10, 30%
    //10-20, 15%
    //20-30, 10%
    let calcspeed = data.length * 300;
    var networkBidthWidth = 0;
    if (calcspeed > 0 && calcspeed < 600) {
      networkBidthWidth = Math.round(calcspeed / 20);
    } else if (calcspeed >= 600 && calcspeed < 1024) {
      networkBidthWidth = Math.round((calcspeed - 600) / 21.5) + 30;
    } else if (calcspeed >= 1024 && calcspeed < 5120) {
      networkBidthWidth = Math.round((calcspeed - 1024) / 205) + 50;
    } else if (calcspeed >= 5120 && calcspeed < 10240) {
      networkBidthWidth = Math.round((calcspeed - 5120) / 256) + 70;
    } else if (calcspeed >= 10240) {
      networkBidthWidth = 99;
    }
    
    this.init(data);
    this.setData({
      provinces: data,
      cities: cities,
      percentage: networkBidthWidth
    });
  },
    // 生成图片
    generate(){
        // 地图画布
        // let dpr = 2;
        // wx.canvasGetImageData({
        //     x: 0,
        //     y: 0,
        //     width: 492 * dpr,
        //     height: 618 * dpr,
        //     destWidth: 492 * dpr,
        //     destHeight: 618 * dpr,
        //     canvasId: 'mychart-area',
        //     success: (res) => {
        //         console.log('res.tempFilePath', res.tempFilePath)
        //     },
        //     fail: (err)=>{
        //         console.log('err', err);
        //     }
        // })
        // 完整画布
        let canvas = wx.createCanvasContext('canvas');
        // console.log(canvas.toDataURL());
        // canvas.fillText('陈曼杰', 100, 200);
        canvas.setFillStyle('#0bb5b5');
        canvas.fillRect(0,0,375,667);
        // 绘制用户名
        canvas.setFontSize(26);
        canvas.setFillStyle('#000');
        canvas.setTextAlign('center');
        canvas.fillText('踏足', 187.5, 48);

        // 绘制省区，城市
        canvas.setFontSize(19);
        canvas.setFillStyle('#000');
        canvas.setTextAlign('left');
        canvas.fillText('踏足', 74, 88);
        canvas.fillText('个省区', 138, 88);
        canvas.fillText('个城市', 246, 88);
        canvas.fillText('超越了', 96, 128);
        canvas.fillText('的用户', 220, 128);

        canvas.setFontSize(26);
        canvas.setFillStyle('red');
        canvas.setTextAlign('center');
        canvas.fillText(this.data.provinces.length, 124, 88);
        canvas.fillText(this.data.cities.length, 228, 88);

        canvas.setFontSize(26);
        canvas.setFillStyle('#000');
        canvas.setTextAlign('center');
        canvas.fillText('15%', 187.5, 128);

        // 绘制城市
        canvas.setFontSize(10);
        canvas.setFillStyle('#fff');
        canvas.setTextAlign('left');
        canvas.fillText(this.data.cities.join('  '), 23, 476);

        // 绘制到画布上
        canvas.draw(false, ()=>{
            wx.canvasToTempFilePath({
                x: 0,
                y: 0,
                width: 375,
                height: 667,
                destWidth: 375,
                destHeight: 667,
                canvasId: 'canvas',
                success: function (res) {
                    console.log(res.tempFilePath)
                }
            })
        });
    },
  // 点击按钮后初始化图表
  init: function (e) {
    // 获取组件
    this.ecComponent = this.selectComponent('#mychart-dom-area');
    this.ecComponent.init((canvas, width, height) => {
      // 获取组件的 canvas、width、height 后的回调函数
      // 在这里初始化图表
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      canvas.setChart(chart);
      echarts.registerMap('china', geoJson);
      //处理传过来的data
      let data = [];
      for (var i = 0; i < e.length; i++) {
        let item = {};
        item.value = 10;
        item.name = e[i];
        data = data.concat(item);
      }
      setOption(chart, data);

      // 将图表实例绑定到 this 上，可以在其他成员函数（如 dispose）中访问
      this.chart = chart;

      this.setData({
        isLoaded: true,
        isDisposed: false
      });

      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return chart;
    });
  },

  /**
  * 分享
  */
  onShareAppMessage: function () {
    return {
      title: '你都去过哪些城市？',
      path: 'pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },

});
