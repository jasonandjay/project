//index.js
//获取应用实例
const app = getApp()
import {getMusicList} from '../../utils/net';

Page({
    data: {
        list: [],
        allList: [],
        index: 1,   //当前已加载页数
        current: 0, //当前播放音乐
        precent: 0, //当前音乐播放进度
        answer: [], //存放正确答案
        myAnswer: [], //存放我的答案
        currentAnswer: {},  //存放当前歌曲的选择答案
        nameList: [], //歌名列表
        
        playList: [{
            name: '离人愁',
            src: 'http://dl.stream.qqmusic.qq.com/C400004Vu4VV0ngOtb.m4a?vkey=D4E432DE90AD16A68C950207E705A2D5266E3D51D6D0D3BA3CB57589D0C1C01920017CFDB7E6D53B08C89C3F7126EC85F61B2FA7201D57DC&guid=7661326472&uin=0&fromtag=66'
        }, {
            name: 'welcome to the show',
            src: 'http://dl.stream.qqmusic.qq.com/C400002qj6jT13BiaS.m4a?vkey=2ABCB70897F37C382E6D2371355A151B4DCAB1364A2BC50CF77F0441C4114637D17CCF407ADA288FC8F5A4E1D69ED1CA510F90E70C9E6A79&guid=7661326472&uin=0&fromtag=66'
        }, {
            name: 'IF YOU',
            src: 'http://dl.stream.qqmusic.qq.com/C400000GDzSZ0yAEB9.m4a?vkey=B81BDD7256B089BE4B85583140E9C08DFDE25B0BF14402A706322BB3011D8A7512381A3DC311E6D45669FFDE55E3DF15A4D93E32E043D8B2&guid=7661326472&uin=0&fromtag=66'
        }, {
            name: 'PLANET',
            src: 'http://dl.stream.qqmusic.qq.com/C400000VOBAv1zQol0.m4a?vkey=B24257B9399CC4B6BECDA39C627F46A44DA87814D1456584BC532325B79D2DAA9B46DFFCC58E3147E60724AACE6ABD07C74E3EBBA1777544&guid=7661326472&uin=0&fromtag=66'
        }, {
            name: 'THAT GIRL',
            src: 'http://dl.stream.qqmusic.qq.com/C400003BRo9h4Suyp8.m4a?vkey=A545AB209B634EF5983BCF1C71FCF0497AC7877B391E5746C36355DCB7D6C6922B97D3D89144827A1302C4FF969FCBD564B345ADD61FD45B&guid=7661326472&uin=0&fromtag=66'
        }, {
            name: '吻别',
            src: 'http://dl.stream.qqmusic.qq.com/C400004RDW5Q2ol2jj.m4a?vkey=4F35E74031E3D963E57062EBF3508B51B422FBB79D4857E2A040FD2CAB00F2E3F1EB9230327FF86D1FBA8B79967D5A8CE763680C3AD192E8&guid=7661326472&uin=0&fromtag=66'
        }, {
            name: '我真的受伤了',
            src: 'http://dl.stream.qqmusic.qq.com/C400002SK5Zc4WJFax.m4a?vkey=C4D92A39EE179D8FE1159D8EB03BDE2F3703B6BEBA2AE2B619E795769896F2076CA01A854F3E6E6D2C2D5589DC5A03EF51E7FB50C492C67B&guid=7661326472&uin=0&fromtag=66'
        }, {
            name: '她来听我的演唱会',
            src: 'http://dl.stream.qqmusic.qq.com/C400003tPJTH40g6Zu.m4a?vkey=83E376BDC7F7C016B486BB9F15197C8F63EB91BE633263D7ADD1378A036792BD5FA541AE6E9B6ACB274A1CCD8DE60F4F138C0C5A7DB16028&guid=7661326472&uin=0&fromtag=66'
        }, {
            name: '如果这都不算爱',
            src: 'http://dl.stream.qqmusic.qq.com/C400001vkidL3kKTDX.m4a?vkey=2DC67197AB7347481E9E77EED7A3C6B0FE6F7467D145AF9C64EEFAFCE27056F8EFD4113E0405242EF93CCE31FE242CBF66457221DA62C702&guid=7661326472&uin=0&fromtag=66'
        }, {
            name: '慢慢',
            src: 'http://dl.stream.qqmusic.qq.com/C4000015H75B1NvYzl.m4a?vkey=F047E3C3CBA6F5B6036A37A71E53D098FF29A46BE9E0A1E47CAAD98F7224220A39C112136A38553B8DDB103813F4AA25A6E63939F65A85B0&guid=7661326472&uin=0&fromtag=66'
        }]
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
        // wx.navigateTo({
        //     url: '/pages/web/web'
        // })

        // wx.authorize({
        //     scope: 'scope.userInfo',
        //     success() {
        //         // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
                wx.getUserInfo({
                    success: res=>{
                        console.log('res..', res);
                    }  
                })
            // },
            // fail(err){
                // console.log('err..', err);
            // }
        // })

        // 随机播放音乐
        this.list = this.randomList('src');
        this.play(this.list[this.data.current]);
        this.setData({
            nameList: this.randomList('name'),
        })

        // wx.showLoading({
        //     title: '加载中...'
        // })
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
    play(src){
        console.log('src...', src);
        if (this.audio){
            this.audio.destroy();
        }
        this.audio = wx.createInnerAudioContext();
        this.audio.src = src;
        let duration = 0,
            start = 0;
        this.audio.autoplay = true
        this.audio.onPlay(() => {
            console.log('开始播放');
            let inter = setInterval(() => {
                duration = this.audio.duration;
                if (duration) {
                    clearInterval(inter);
                    start = (Math.random() * (duration - 10));
                    this.audio.seek(start);
                    let precentInter = setInterval(() => {
                        this.setData({
                            precent: this.data.precent + 0.1
                        });
                        if (this.data.precent >= 100) {
                            clearInterval(precentInter);
                        }
                    }, 10)
                }
            }, 10);
        })
        this.audio.onTimeUpdate(() => {
            let time = this.audio.currentTime;
            if (duration && time > start) {
                if (time > start + 10) {
                    this.audio.stop();
                    if (this.data.current == 9){
                        // 判断猜歌结果
                        let right = 0;
                        for (let i=0,len=this.data.answer.length;i<len;i++){
                            if (this.data.answer[i] == this.data.myAnswer[i]){
                                right++;
                            }
                        }
                        wx.showToast({
                            title: (right/10)*100+'%'
                        })
                        return;
                    }
                    if (this.data.myAnswer.length == this.data.current){
                        this.setData({
                            myAnswer: this.data.myAnswer.concat(''), 
                        })
                    }
                    this.setData({
                        current: this.data.current+1,
                        nameList: this.randomList('name'),
                        currentAnswer: {},
                        precent: 0
                    }, ()=>{
                        this.play(this.list[this.data.current]);
                    })
                }
            }
        })
        this.audio.onError(error => {
            console.log('error...', error);
        })
    },
    clickAnswer(e){
        let name = e.currentTarget.dataset.name,
            index = e.currentTarget.dataset.index;
        // console.log('e..', name);
        if (this.data.myAnswer.length == this.data.current){
            this.setData({
                myAnswer: this.data.myAnswer.concat(name),
                currentAnswer: {
                    index,
                    type: name==this.data.answer[this.data.current]?'primary':'warn'
                }
            })
        }
        console.log('answer:', this.data.myAnswer);
    },
    randomList(type){
        let list = [...this.data.playList],
            newList = [];
        let answer = [];
        for (let i=0,len=list.length; i<len; i++){
            let index = Math.floor(Math.random() * list.length);
            // console.log('list...', list);
            newList.push(list[index][type]);
            if (type == 'src'){
                answer.push(list[index].name);
            }
            list.splice(index,1);
        }
        if (type == 'src'){
            this.setData({
                answer
            })
        }
        return newList;
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