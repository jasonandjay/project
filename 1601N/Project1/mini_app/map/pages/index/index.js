// index.js

const app = getApp()
import { getCityList } from '../../utils/data.js';

let typeArr = []

Page({
    data:{
        cityData:[],
        subData:[],
        typeArr:[],
        showArr:[],
        indId:100000
    },
    onShow(){
        wx.showLoading({
            title: '加载中...',
        })
        getCityList()
        .then(res=>{
            this.setData({
                cityData:res,
                subData: res[this.data.indId].child
            },()=>{
                wx.hideLoading();
            })
        })
    },
    click(e){
        this.setData({
            subData: e.currentTarget.dataset.item.child,
            indId: e.currentTarget.dataset.ind
        })
    },
    subClick(e) {
        if (typeArr.indexOf(e.currentTarget.dataset.ind)==-1){
            typeArr.push(e.currentTarget.dataset.ind)
        }else{
            typeArr.splice(typeArr.indexOf(e.currentTarget.dataset.ind),1)
        }
        this.setData({
            typeArr
        })
        let ind = e.currentTarget.dataset.ind
        let subData = this.data.subData;
        let cityData = this.data.cityData;
        subData.num=0
        // cityData[this.data.indId].child[ind].num=0
        subData[ind].clickType = !subData[ind].clickType
        cityData[this.data.indId].child = subData;
        for (let ind in cityData[this.data.indId].child){
            if(cityData[this.data.indId].child[ind].clickType){
                subData.num++
            }
        }
        this.setData({
            subData,
            cityData
        })
    },
    btnCli(){
        let cityData = this.data.cityData;
        let subData = this.data.subData;
        let showArr = [];
        let showCity = [];
        for(let ind in cityData){
            for(let i in cityData[ind].child){
                if (cityData[ind].child[i].clickType){
                    showArr.push(cityData[ind].child[i].name)
                    if (showCity.indexOf(cityData[ind].name) == -1){
                        showCity.push(cityData[ind].name)
                    }
                }
            }
        }
        if (showArr.length>=1){
            let cityNum = 0;
            if(showCity[0]=='热门'){
                for (let ind in this.data.cityData[100000].child){
                    if (this.data.cityData[100000].child[ind].clickType){
                        cityNum++;
                        showCity.push(this.data.cityData[100000].child[ind].name)
                    }
                }
                showCity.splice(showCity.indexOf('热门'),1)
            }
            let Arr = JSON.stringify(showArr);
            let City = JSON.stringify(showCity);
            wx.navigateTo({
                url: '../map/index?Arr=' + Arr + '&City=' + City+'&cityNum='+cityNum,
            })
        }else{
            wx.showToast({
                title: '请选择城市',
                icon: 'none',
                duration: 2000
            })
        }
    }
        
})