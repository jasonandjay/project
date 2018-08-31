import React from "react";
import "../common/react-iconfont/iconfont.css";
import "../common/style/wode.css";
import Swiper from "swiper/dist/js/swiper.min.js";
import "swiper/dist/css/swiper.min.css";
import IScroll from 'iscroll/build/iscroll-probe';
import axios from "axios"
export default class Wode extends React.Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
        // fetch("").then(res=>{
        //     res.json().then(body=>{
        //         console.log(body)
        //     })
        // })
    }
    componentDidMount(){
        let add=new IScroll(".wode",{
            scrollY:true,
            scrollX:false,
            fadeScrollbars:true,
            probeType:3
        })
    }
    render(){
        return <div className="wode" ref="wode">
                <div className="wode-iscroll">
                <div className="wode-login">
                    <div className="login-top">
                        <span><img src={require("../common/imgs/1.jpg")} alt=""/></span>
                        <span>啊张！</span>
                        <span><img src={require("../common/imgs/svip_g.png")} alt=""/></span>
                    </div>
                    <div className="login-bottom">
                        <li>
                            <span><i className="icon iconfont icon-huo"></i> 活动中心</span>
                            <b>今日听歌38分钟</b>
                        </li>
                        |
                        <li>
                            <span><i className="icon iconfont icon-vip1"></i> 会员中心</span>
                            <b>千万专属曲库任性享</b>
                        </li>
                    </div>
                </div>
                <div className="login-list">
                    <li><i className="icon iconfont icon-musicfill"></i><b>本地音乐</b><span>7</span></li>
                    <li><i className="icon iconfont icon-down_light"></i><b>下载音乐</b><span>0</span></li>
                    <li><i className="icon iconfont icon-time "></i><b>最近播放</b><span>200</span></li>
                    <li><i className="icon iconfont icon-like"></i><b>我喜欢</b><span>130</span></li>
                    <li><i className="icon iconfont icon-tubiaozhizuomoban"></i><b>已购音乐</b><span>0</span></li>
                    <li><i className="icon iconfont icon-footprint"></i><b>跑步电台</b><span>0</span></li>
                </div>
                <div className="login-bot">
                    <h3><span>自建歌单 </span>|<span> 收藏歌单</span></h3>
                    <div className="login-text">
                        <h2><span>4 个 歌 单</span><b><i className="icon iconfont icon-add"></i><i className="icon iconfont icon-sortlight"></i></b></h2>
                        <li>
                            <dl>
                                <dt><img src={require('../common/imgs/1.png')} alt=""/></dt>
                                <dd>
                                    <span>朵</span>
                                    <b>9首</b>
                                </dd>
                            </dl>
                            <i className="icon iconfont icon-right"></i>
                        </li>
                        <li>
                            <dl>
                                <dt><img src={require('../common/imgs/2.png')} alt=""/></dt>
                                <dd>
                                    <span>朵</span>
                                    <b>16首</b>
                                </dd>
                            </dl>
                            <i className="icon iconfont icon-right"></i>
                        </li>
                        <li>
                            <dl>
                                <dt><img src={require('../common/imgs/3.png')} alt=""/></dt>
                                <dd>
                                    <span>花</span>
                                    <b>2首</b>
                                </dd>
                            </dl>
                            <i className="icon iconfont icon-right"></i>
                        </li>
                        <li>
                            <dl>
                                <dt><img src={require('../common/imgs/4.png')} alt=""/></dt>
                                <dd>
                                    <span>开</span>
                                    <b>13首</b>
                                </dd>
                            </dl>
                            <i className="icon iconfont icon-right"></i>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    }
}