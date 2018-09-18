import React from "react";
import { Switch , Icon , Badge , message } from 'antd';
import "../common/style/home.css";
import "../common/react-iconfont/iconfont.css";
import Swiper from "swiper/dist/js/swiper.min.js";
import "swiper/dist/css/swiper.min.css";
import Wode from "./wode.jsx";
import Yinyue from "./yinyue.jsx";
import Faxian from "./faxian.jsx";
import 'antd/dist/antd.css';
import store from '../store';
import {connect} from 'react-redux';
import IScroll from 'iscroll/build/iscroll-probe';
class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:["我的","音乐馆","发现"],
            mySwiper:null,
            show:false,
            transform:'translate3d(-100%,0,0)',
            pageX:false,
            pageY:false,
            tage:null,
            num:0,
            coll:0,
            hide:false,
            ionts:false,
            autoplays:false,
            allTimes:"00:00",
            allTimez:0,
            srclist:[],
            footuser:"",
            footname:"",
            footurl:"",
            imgurl:"",
            imageurl:"",
            dl:false,
            lengths:0,
            mo:0,
            yi:0,
            sp:0
        }
        this.pr={
            text:[
                {
                    footuser:"我们说好的",
                    footname:"苏立生",
                    footurl:"http://fs.w.kugou.com/201808282031/55384fc486993073e2a55dd6ac6390d6/G130/M02/1C/07/IocBAFo81guANL84ADm3LRA-tpU398.mp3",
                    footusers:"我们说好的(Live)",
                    imgurl:"http://singerimg.kugou.com/uploadpic/softhead/400/20170103/20170103155643293.jpg",
                    imageurl:"",
                    id:0
                },
                {
                    footuser:"散了吧",
                    footname:"苏立生",
                    footurl:"http://fs.w.kugou.com/201808282020/c8f336e8f8363c434625d6ea4b5c66bf/G119/M08/0E/18/F4cBAFpPRRKAJJNZAEHKLY7-mFw986.mp3",
                    footusers:"散了吧(Live)",
                    imgurl:"http://singerimg.kugou.com/uploadpic/softhead/400/20170103/20170103155643293.jpg",
                    imageurl:"",
                    id:1
                }
                ,
                {
                    footuser:" Faded",
                    footname:"Alan Walker",
                    footurl:"http://fs.w.kugou.com/201808300731/6e97ae20f1324330d80228cfd8415b41/G052/M04/19/07/FJQEAFZWxMSAbdi-ADPyIZwJRM0272.mp3",
                    footusers:" Faded(Live)",
                    imgurl:"http://imge.kugou.com/stdmusic/20160909/20160909070813252392.jpg",
                    imageurl:"",
                    id:2
                }
                ,
                {
                    footuser:"你就不要想起我",
                    footname:"赵骏",
                    footurl:"http://fs.w.kugou.com/201808300732/bb942c495d4f06ea1a2e8d8b9d165559/G081/M05/13/1F/kQ0DAFg4K1CAGL-1ADI6kI4N9BY625.mp3",
                    footusers:"你就不要想起我 (Live)",
                    imgurl:"http://singerimg.kugou.com/uploadpic/softhead/400/20161118/20161118112130584.jpg",
                    imageurl:"",
                    id:3
                }
                ,
                {
                    footuser:"归来",
                    footname:"满江",
                    footurl:"http://fs.w.kugou.com/201808300732/9a1cd569cc231dc5d8b41e6f01a59ca3/G055/M08/1F/13/dw0DAFbI8_yAWv-PADH4trSc1iQ211.mp3",
                    footusers:"归来(Live)",
                    imgurl:"http://singerimg.kugou.com/uploadpic/softhead/400/20140624/20140624183436214938.jpg",
                    imageurl:"",
                    id:4
                },
                {
                    footuser:"杨二爷 - 灵魂战曲DJ (DJ杨二爷版)",
                    footname:"杨二爷",
                    footurl:"http://fs.w.kugou.com/201808300733/239b804c83f96b90b7e501226f5cd566/G038/M03/08/1B/Zg0DAFYkaWWAQt5tAC5-eQeBIAM327.mp3",
                    footusers:"杨二爷 - 灵魂战曲DJ (DJ杨二爷版)",
                    imgurl:"http://imge.kugou.com/stdmusic/20160907/20160907185640721571.jpg",
                    imageurl:"",
                    id:5
                },
                {
                    footuser:"故事与她 (DJ版)",
                    footname:"Deepmaniak",
                    footurl:"http://fs.w.kugou.com/201808300734/9b35659f6bd2c1545de03dca3776392b/G122/M05/0D/1B/GocBAFo_09CAVJOyADcVZSRabxk736.mp3",
                    footusers:"故事与她 (DJ版)",
                    imgurl:"http://imge.kugou.com/stdmusic/20180111/20180111001750856211.jpg",
                    imageurl:"",
                    id:6
                },
                {
                    footuser:"演员",
                    footname:"薛之谦",
                    footurl:"http://fs.w.kugou.com/201808300726/8da88c4180c08386de181b53a466fc9f/G123/M01/13/1D/uw0DAFqox3OAWe0UAD_HxYp_Ivc469.mp3",
                    footusers:"演员(Live)",
                    imgurl:"http://imge.kugou.com/stdmusic/20150605/20150605091116796204.jpg",
                    imageurl:"",
                    id:7
                },
                {
                    footuser:"再见只是陌生人",
                    footname:"庄心妍",
                    footurl:"http://fs.w.kugou.com/201808291351/fc093800fc34acaad0c13224b74843cb/G044/M0A/16/07/bA0DAFYgoRSAQHpcAD178KGWJ6Y782.mp3",
                    footusers:"再见只是陌生人(Live)",
                    imgurl:"http://imge.kugou.com/stdmusic/20151009/20151009114732126775.jpg",
                    imageurl:"",
                    id:8
                },
                {
                    footuser:"正义之道",
                    footname:"黄渤",
                    footurl:"http://fs.w.kugou.com/201808291405/2d039cf3614350aa1541ebbb43a2ed89/G014/M06/16/07/Tg0DAFUOS0SAJjemADRYUeWTn6w814.mp3",
                    footusers:"正义之道(Live)",
                    imgurl:"http://singerimg.kugou.com/uploadpic/softhead/400/20171123/20171123205247376.jpg",
                    imageurl:"",
                    id:9
                },
                {
                    footuser:"差一步(DJ)",
                    footname:"承力",
                    footurl:"http://fs.w.kugou.com/201808291407/071a84036e9927de4835a38d0233683e/G130/M02/0B/0D/YpQEAFpCA6uAWZQbAFCvi0zmGzM062.mp3",
                    footusers:"差一步(Live)",
                    imgurl:"http://imge.kugou.com/stdmusic/20171226/20171226161324851936.jpg",
                    imageurl:"",
                    id:10
                },
                {
                    footuser:"体面 (DJ咚鼓Remix)",
                    footname:"98K ",
                    footurl:"http://fs.w.kugou.com/201808291409/e7dbeed6f3f105e379695bb977d5cabc/G122/M06/13/17/ug0DAFpYT8mAdcfbACof2LoG9JM099.mp3",
                    footusers:"体面Remix",
                    imgurl:"http://imge.kugou.com/stdmusic/20180116/20180116004806309667.jpg",
                    imageurl:"",
                    id:11
                },
                {
                    footuser:"不如我们重新来过",
                    footname:"曾轶可",
                    footurl:"http://fs.w.kugou.com/201808291411/8ed5c35636fa7f72382733f27e2c310e/G122/M09/0A/14/GocBAFofkzqAEgu8AD8MtasDVcA299.mp3",
                    footusers:"不如我们重新来过(Live)",
                    imgurl:"http://imge.kugou.com/stdmusic/20171130/20171130131426643255.jpg",
                    imageurl:"",
                    id:12
                },
                {
                    footuser:"出神入化之火花 (Remix)",
                    footname:"7妹",
                    footurl:"http://fs.w.kugou.com/201808291415/dde3fdc3a0533ab5e32efe34bb5b7a01/G085/M01/0F/13/NZQEAFh3EOOAekrZADaYTnFV-E8462.mp3",
                    footusers:"初心(Live)",
                    imgurl:"http://imge.kugou.com/stdmusic/20170317/20170317092342871305.jpg",
                    imageurl:"",
                    id:13
                },
                {
                    footuser:"你拿的住我吗",
                    footname:"Sami & Sasha",
                    footurl:"http://fs.w.kugou.com/201808291420/0ff118c99d8bea5ec40dbc8df847d78c/G011/M03/00/08/Sw0DAFUJgA6ALjSvADoVbuheNOA540.mp3",
                    footusers:"Mash Up潮牌电音酒吧(Live)",
                    imgurl:"http://imge.kugou.com/stdmusic/20170423/20170423123721673393.jpg",
                    imageurl:"",
                    id:14
                },
                {
                    footuser:"魔鬼中的天使",
                    footname:"大壮",
                    footurl:"http://isure.stream.qqmusic.qq.com/C400001IEKIl3satar.m4a?vkey=9E391C4DF9058500A985FB06C1ACD0AA3A5EB1242E17A4446B0F4D8CAA56BCF08E03F9A6BD06F2CD4AB0AC4DDE10B0B03E596C085C6C229E&guid=3128271412&uin=834321724&fromtag=66",
                    footusers:"魔鬼中的天使(Live)",
                    imgurl:"https://y.gtimg.cn/music/photo_new/T002R300x300M000003y0E3q4Qe5Pu.jpg?max_age=2592000",
                    imageurl:"",
                    id:15
                },
                {
                    footuser:"铃声",
                    footname:"大壮",
                    footurl:"http://fs.w.kugou.com/201808291959/c49311570b3544fbdfef81cdf0e9e587/G048/M0A/1D/17/cA0DAFYMR6aIKPxbAAIUogzfC2MAAAIIgEB7MIAAhS6857.mp3",
                    footusers:"铃声(Live)",
                    imgurl:"https://y.gtimg.cn/music/photo_new/T002R300x300M000003y0E3q4Qe5Pu.jpg?max_age=2592000",
                    imageurl:"",
                    id:16
                }
            ]
        }
    }
    componentDidMount(){
       let that=this //在Swiper实例中找不到this,所以在外找到this并赋值
       let mySwiper = new Swiper(".swiper-container", {//Swiper实例
            effect : 'coverflow',
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar'
              },
            on: {
                slideChangeTransitionStart: function(e){ //通过Swiper的index控制nav的样式状态
                    let count =this.activeIndex //Swiper的index
                    that.props.lists(count);//这里需要一个全局数据来支撑,我们通过react-redux来实现
                }
              }
          }); 
          let srclist=this.state.srclist
          let srclists=[]
          let num=this.state.num
          this.pr.text.map((item,index)=>{
              if(item.id===num){
                  this.gong(item)
                  this.xuan(item)
              }
              srclists.push(item.footurl)
          })
          let vLen = srclists.length; 
          let lengths=this.state.length
          lengths=vLen
          srclist=srclists
           this.setState({
                mySwiper,
                srclist,
                lengths
           });
           mySwiper.slideTo(1,0,false) //显示初始页在下标1
    }  
    indexCD(){ //点击出现侧边功能页
        let transform=this.state.transform
        transform="translate3d(0%,0,0)"
        this.setState({
            transform
        })
    }
      onChange(checked) {
       
      }
      goole(){//点击侧边功能页消失
        let transform =this.state.transform
        transform="translate3d(-100%,0,0)"
        this.setState({
            transform
        })
      }
      onshow(checked){
      }
      onhide(){
      }
      tou(event){ //获取手指摁下的位置
          let tage=this.state.tage
          tage=event.touches[0]
          this.setState({
            tage
          })
      }
      mou(event){ 
        let thou=event.touches[0] //获取手指移动的位置
        let coll=thou.pageX-this.state.tage.pageX //获取手指摁下减去手指移动的位置
        if(coll<0){
            this.refs.cd.style=`transform:translate3d(${coll}px,0,0)`
        }
        this.setState({
            coll
        })
      }
      end(event){
          let int=parseInt(this.state.coll)  //手指离开时要做的操作
          let  transform =this.state.transform
            if(int<-100){ 
                transform="translate3d(-100%, 0, 0)"
                this.setState({
                    transform
                })
            }else{
                transform="translate3d(0%, 0, 0)"
                this.setState({
                    transform
                })
            }
      }
      exit(){
          let show=this.state.show
          show=!show
          this.setState({
            show
          })
      }
      dl(){
        let ionts=this.state.ionts
        ionts=true
       this.setState({
           ionts
       })
      }
      iont(){
        let ionts=this.state.ionts
        ionts=false
       this.setState({
           ionts
       })
      }
      bo(){
        let au=this.refs.au
        au.play()
        this.auto()
        let srclists=[]
        let num=this.state.num
        this.pr.text.map((item,index)=>{
            if(item.id==num){
                this.gong(item)
                this.xuan(item)
            }
            setTimeout(()=>{
                srclists.push(item.footurl)
            },0)
        })
      }
      auto(){
        let autoplays = this.state.autoplays
        autoplays=!autoplays
        this.setState({
            autoplays
        })
      }
      tin(){
          this.refs.au.pause();
          this.auto()
          window.clearInterval(this.set)
      }
      shangyi(){
        let num=this.state.num
        let autoplays = this.state.autoplays
        autoplays=true
        if(num>0){
            num--
            this.pr.text.map((item,index)=>{
                if(item.id==num){  
                    let au=this.refs.au
                    au.src=item.footurl  
                    this.gong(item)
                    this.xuan(item)
                }
            })
            this.setState({
                num,
                autoplays
            })
        }
      }
      xiayi(){
        let num=this.state.num
        let autoplays = this.state.autoplays
        autoplays=true
        if(num<(this.pr.text.length-1)){
            num++
            this.pr.text.map((item,index)=>{
                if(item.id==num){ 
                    let au=this.refs.au
                    au.src=item.footurl  
                    this.gong(item)
                    this.xuan(item)
                }
            })
            this.setState({
                num,
                autoplays
            })
        }else{
            num=0;
        }
      }
      xuan(item){
        let footuser=this.state.footuser
        let footname=this.state.footname
        let footurl=this.state.footurl
        let footusers=this.state.footusers
        let imgurl=this.state.imgurl
        footuser=item.footuser
        footname=item.footname
        footurl=item.footurl
        footusers=item.footusers
        imgurl=item.imgurl
        this.setState({
            footuser,
            footname,
            footurl,
            footusers,
            imgurl
        })
      }
      miao(){
        let sp=this.state.sp
        this.set=setInterval(()=>{
             let corr=this.refs.au.currentTime
             let allTimez=this.state.allTimez
             let time=this.refs.au.duration
             let widths = this.refs.b&&this.refs.b.offsetWidth;
             let speed = widths/time;
             sp=(corr*speed)
             if(this.refs.em) this.refs.em.style.left = (corr*speed-10)+'px';
             if(this.refs.i) this.refs.i.style.width = (corr*speed+10)+'px';
             let minutez=parseInt(corr / 60);
             if(minutez<10){
                 minutez="0"+minutez
             }
             let secondz = parseInt(corr % 60)
             if(secondz<10){
                 secondz="0"+secondz
             }
             else{
                 secondz=secondz
             }
             let allTimezz=""+minutez+""+":"+""+secondz+""
             allTimez=allTimezz
             this.setState({
                 allTimez,
                 sp
             })
           },1000) 
      }
      fen(){
        let time = 0;
        let timer = setInterval(()=>{
            time=this.refs.au.duration;
            if(time){
                clearInterval(timer)
                let time=this.refs.au.duration
                let minute=parseInt(time / 60)
                if(minute<10){
                    minute="0"+minute
                }
                let second = parseInt(time % 60)
                if(second<10){
                    second="0"+second
                }
                let allTime=""+minute+""+":"+""+second+""
                let allTimes=this.state.allTimes
                allTimes=allTime
                this.setState({
                    allTimes
                })   
            }
        }, 1)
      }
      gong(item){
        let au=this.refs.au
        au.play();
        let autoplays = this.state.autoplays
        autoplays=!autoplays;
        this.miao()
        this.fen()
        let lists=setInterval(()=>{
            let list=this.state.srclist
            if(list){
                clearInterval(lists)
                let list=this.state.srclist
                let vLen = (this.state.lengths-1);
                let num=this.state.num;
                let that=this
                let autoplays = this.state.autoplays    
                au.addEventListener('ended',function(){
                    num++;
                    that.pr.text.map((item,index)=>{ 
                        if(item.id==num){
                            au.src = list[num]  
                            that.xuan(item)
                            that.fen()
                            au.play()
                        }
                        // if(num >= vLen){  
                        //     console.log(this,that,num)     
                        //     num=0 //重新循环播放 
                        //     au.src = list[num]  
                        //     that.xuan(item)
                        //     au.play()
                        //     autoplays=true
                        // }
                    })
                    that.setState({
                        num
                    })
                },false);
            }
        },1)
        
          this.setState({
            autoplays
        })
      }
      list(){
          let pageY=this.state.pageY
          pageY=true
          this.setState({
            pageY
          })
      }
      guan(){
        let pageY=this.state.pageY
        pageY=false
        this.setState({
          pageY
        })
      }
      texts(indexs){
          let nums =indexs
          let num=this.state.num
          num=nums
          let autoplays = this.state.autoplays
          autoplays=true
        let pageX=this.state.pageX;
          this.pr.text.map((item,index)=>{
              if(item.id==num){
                  pageX=true
                  let au=this.refs.au
                  au.src=item.footurl
                  this.gong(item)
                  this.xuan(item)
              }
          })
          this.setState({
            pageX,
            num,
            autoplays
          })
      }
      emb(event){
        let mo=this.state.mo
        mo=event.touches[0]
        this.refs.au.pause();
        clearInterval(this.set)
        let autoplays = this.state.autoplays
        autoplays=false
        this.setState({
            mo,
            autoplays   
        })
      }
      emm(event){
        let thou=event.touches[0] 
        let yi=thou.pageX-this.state.mo.pageX 
        clearInterval(this.set)
        if(yi>=0){
            let sp=this.state.sp
            let allTimez=this.state.allTimez
            sp=yi
            let minutez=parseInt(sp / 60);
            if(minutez<10){
                minutez="0"+minutez
            }
            let secondz = parseInt(sp % 60)
            if(secondz<10){
                secondz="0"+secondz
            }
            else{
                secondz=secondz
            }
            let allTimezz=""+minutez+""+":"+""+secondz+""
            allTimez=allTimezz
            this.refs.em.style.left=sp+"px"
            this.refs.i.style.width=sp+"px"
            this.setState({
                yi,
                sp,
                allTimez
            })
        }else{
            null
        }
        
      }
      eme(event){
        let autoplays = this.state.autoplays
        autoplays=true
        let sp=this.state.sp
        this.refs.au.currentTime=sp
        this.refs.em.style.left=sp+"px"
        this.refs.i.style.width=sp+"px"
        this.refs.au.play()
        this.fen()
        this.setState({
            autoplays,
            sp
        })
      }
    render(){
        let wode=this.props.wode
        let swiper = this.state.mySwiper;
        return <div className="index">
            <header>
                <div className="index-top">
                    <i className="icon iconfont icon-gengduo3" onClick={(e)=>{this.indexCD()}}></i>
                    <div className="index-centent">
                        {
                            this.state.list.map((item,index)=>{
                                return <span onClick={(e)=>{this.props.lists(index, swiper)}} key={index} className={index==wode?'action':null}>{item}</span>
                            })
                        }
                    </div>
                    <i className="icon iconfont icon-add1"></i>
                </div>
                <div className="index-bottom">
                    <div className="bottom">
                       <i className="icon iconfont icon-search_light"></i> 搜索 
                    </div>  
                </div>
            </header>
            <section ref="index">
                <div className="swiper-container sect">
                <div className="swiper-pagination"></div>
                    <div className="swiper-wrapper" ref='slides'>
                        <div className="swiper-slide"><Wode></Wode></div>
                        <div className="swiper-slide"><Yinyue></Yinyue></div>
                        <div className="swiper-slide"><Faxian></Faxian></div>
                    </div>
                </div>
            </section>
            <footer>
                <dl onClick={(e)=>{this.dl()}}>
                    <dt><img src={this.state.imgurl} alt="" className={this.state.autoplays?'active':'boo'}/></dt>
                    <dd>
                        <b>{this.state.footuser}</b>
                        <span>{this.state.footname}</span>
                    </dd>
                </dl>
                <li>
                    {    this.state.autoplays?
                        <i className="icon iconfont icon-stop" onClick={(e)=>{this.tin()}}></i>:
                        <i className="icon iconfont icon-video"  onClick={(e)=>{this.bo()}}></i>
                    }
                    <i className="icon iconfont icon-swticonyinle2" onClick={(e)=>{this.list()}}></i>
                </li>
            </footer>
            
            <div className="index-CD" style={this.state} >
                <div className="hi" onClick={(e)=>{this.goole()}}></div>
                <div className="cd" style={this.state} onTouchStart={this.tou.bind(this)} onTouchMove={this.mou.bind(this)} onTouchEnd={(e)=>{this.end()}} ref="cd">
                    <div className="cd-q"></div>
                    <div className="cd-aa">
                            <div className="cd-a">
                                <li>
                                    <b>个性装扮</b>
                                    <span>默认套装</span>
                                </li>
                                <li>
                                    <b>消息中心</b>
                                    <Badge count={4} style={{ backgroundColor: 'red', color: '#fff' }} />
                                </li>
                                <li>
                                    <b>免流量服务</b>
                                    <span>网卡听歌免流量</span>
                                </li>
                            </div>
                            <div className="cd-b">
                                <li>
                                    <b>定时关闭</b>
                                    <Switch defaultChecked onChange={(e)=>{this.onshow()}} defaultChecked={false} checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross" />} checked={this.state.show?true:false}/>
                                </li>
                                <li>
                                    <b>仅Wi-Fi联网</b>
                                    <Switch defaultChecked onChange={(e)=>{this.onhide()}} defaultChecked={false} checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross" />}/>
                                </li>
                                <li>
                                    <b>流量提醒</b>
                                    <Switch defaultChecked onChange={(e)=>{this.onChange()}} defaultChecked checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross" />}/>
                                </li>
                                <p>听歌偏好</p>
                            </div>
                            <div className="cd-c">
                                <b>微云音乐网盘</b>
                                <b>导入外部歌单</b>
                                <b>清理空间</b>
                                <b>帮助与反馈</b>
                                <b>关于QQ音乐</b>
                            </div>
                            <div className="cd-d">
                                <b>精品应用推荐</b>
                                <ul>
                                    <li><a href="http://kg.qq.com/"> <b><img src={require("../common/imgs/K.png")} alt=""/></b><span>全民K歌</span></a></li>
                                    <li><a href="http://maoyan.com/"> <b><img src={require("../common/imgs/mao.png")} alt=""/></b><span>猫眼电影</span></a></li>
                                    <li><a href="https://qzone.qq.com/"><b><img src={require("../common/imgs/QQ.png")} alt=""/></b><span>QQ空间</span></a></li>
                                    <li><a href="http://www.duokan.com/"><b><img src={require("../common/imgs/duo.png")} alt=""/></b><span>多看阅读</span></a></li>
                                </ul>
                            </div>
                        </div>
                    <div className="cd-e">
                        <b><i className="icon iconfont icon-settings_light"></i> 设置</b>
                        <b onClick={(e)=>{this.exit()}}><i className="icon iconfont icon-back_android"></i> 退出登录/关闭</b>
                    </div> 
                </div> 
            </div>
                <div  className={this.state.ionts?"odd":"dl"}>
                       <div className="zz">
                                <div className="zz-head">
                                    <i className="icon iconfont icon-unfold" onClick={(e)=>{this.iont()}}></i>
                                    <marquee behavior="alternate" scrollamount="5" direction="right"><span><img src={require("../common/imgs/wave.gif")} alt=""/> {this.state.footuser}</span></marquee>
                                    <i className="icon iconfont icon-moreandroid"></i>
                                </div>
                                <div className="zz-cont">
                                    <h6>—— {this.state.footname} ——</h6>
                                    <p>
                                        <span>标准 <i className="icon iconfont icon-unfold"></i></span>
                                        <span>音效 <b>off</b></span>
                                    </p>
                                    <li><img src={this.state.imgurl} alt="" className={this.state.autoplays?'active':'boo'}/></li>
                                    <h5>暂无歌词</h5>
                                </div>
                                <div className="zz-foot">
                                    <div className="foot-top">
                                        <span>{this.state.allTimez}</span>
                                        <b ref="b"><em ref="em" onTouchStart={this.emb.bind(this)} onTouchMove={this.emm.bind(this)} onTouchEnd={(e)=>{this.eme()}}></em><i ref="i"></i></b>
                                        <span>{this.state.allTimes}</span>
                                    </div>
                                    <div className="foot-cont">
                                        <i className="icon iconfont icon-bofangye-caozuolan-suijibofang"></i>
                                        <div className="cont">
                                            <i className="icon iconfont icon-shangyiqu" onClick={(e)=>{this.shangyi()}}></i>
                                            {    this.state.autoplays?
                                                <i className="icon iconfont icon-stop" onClick={(e)=>{this.tin()}}></i>:
                                                <i className="icon iconfont icon-video" onClick={(e)=>{this.bo()}}></i>
                                            }
                                            <i className="icon iconfont icon-shangyiqu1" onClick={(e)=>{this.xiayi()}}></i>
                                        </div>
                                        <i className="icon iconfont icon-swticonyinle2" onClick={(e)=>{this.list()}}></i>
                                    </div>
                                    <div className="foot-bot">
                                        <i className="icon iconfont icon-like"></i>
                                        <i className="icon iconfont icon-down"></i>
                                        <i className="icon iconfont icon-change"></i>
                                        <i className="icon iconfont icon-comment_light"></i>
                                    </div> 
                                </div>  
                            </div>
            </div>
            <div className={this.state.pageY?"listsd":"listse"}>
                
            <ul className="uls">
                <h2>
                    <span>
                        <i className="icon iconfont icon-bofangye-caozuolan-suijibofang"></i>
                        <b>顺序播放({this.state.lengths}首)</b>
                    </span>
                    <span>
                        <i className="icon iconfont icon-down"></i>
                        <i className="icon iconfont icon-light"></i>
                        <i className="icon iconfont icon-delete"></i>
                    </span>
                </h2>
                <div className="de">
                {
                    this.pr.text.map((item,index)=>{
                        return <li key={index} onClick={(e)=>{this.texts(index)}} className={index==this.state.num?"action":null}>
                            <b><em></em> {item.footuser}</b> <span>{item.footname}</span>
                        </li>
                    })
                }
                </div>
                <div className="guan" onClick={(e)=>{this.guan()}}>
                    关闭
                </div>
                
            </ul>
        </div>
       
        <audio src="http://fs.w.kugou.com/201808282031/55384fc486993073e2a55dd6ac6390d6/G130/M02/1C/07/IocBAFo81guANL84ADm3LRA-tpU398.mp3" ref="au"></audio>  
        </div>
    }
}
const mapStateToProps=(state)=>{
    return{
        wode:state.wode
    }
}
const hang=(dispatch)=>{
    return {
        lists:(index, swiper)=>{
            dispatch({type:'count',text:index});
           swiper && swiper.slideTo(index,0,false)
        }
    }
}
export default connect(mapStateToProps,hang )(App)