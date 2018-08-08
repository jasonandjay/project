import React, { Component } from 'react'
import Swiper from 'swiper/dist/js/swiper.min.js';
import 'swiper/dist/css/swiper.min.css';
import '../scss/index.css';

export default class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            current: 0, // 表示当前选择tab， 0表示我的，1表示音乐，2 表示发现
            play: true, // true表示播放，false表示暂停
        }
    }

    componentDidMount(){
        let that = this;
        this.swiper = new Swiper('.swiper-container', {
            // loop: true,
            autoplay: true,
            on: {
                slideChangeTransitionEnd: function(){
                    that.setState({
                        current: this.activeIndex
                    })
                },
              },
        })
    }

    render() {
        let {current, play} = this.state;
        return (
            <div className="index">
                <header>
                    <div>
                        <span className={current==0?'active':''}>我的</span>
                        <span className={current==1?'active':''}>音乐</span>
                        <span className={current==2?'active':''}>发现</span> 
                    </div>
                    <p>搜索</p>
                </header>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">我的</div>
                        <div className="swiper-slide">音乐</div>
                        <div className="swiper-slide">发现</div>
                    </div>
                </div> 
                <footer>
                    {/* <image src={}/> */}
                    <p>
                        <span>歌名</span>
                        <span>歌手</span>
                    </p>
                    <span className={play?'control active':'control'}></span>
                    {/* image    */}
                </footer>
            </div>
        )
    }
}
