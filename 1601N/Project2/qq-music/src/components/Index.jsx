import React, { Component } from 'react'
import Swiper from 'swiper/dist/js/swiper.min.js';
import 'swiper/dist/css/swiper.min.css';
import '../scss/index.css';
import Recommend from './index/Recommend';
import withAd from './hoc/withAd.jsx';


class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            current: 0, // 表示当前选择tab， 0表示我的，1表示音乐，2 表示发现
            play: true, // true表示播放，false表示暂停
        }
    }

    componentDidMount(){
        let that = this;
        this.swiper = new Swiper('.wrap.swiper-container', {
            // loop: true,
            // autoplay: true,
            on: {
                slideChangeTransitionEnd: function(){
                    that.setState({
                        current: this.activeIndex
                    })
                },
              },
        })
        // 拉取排行榜数据
    }

    render() {
        let {current, play} = this.state;
        return (
            <div className="index">
                <header>
                    <div>
                        <span className={current==0?'active':''}>推荐</span>
                        <span className={current==1?'active':''}>排行榜</span>
                        <span className={current==2?'active':''}>搜索</span> 
                    </div>
                    <p>搜索</p>
                </header>
                <div className="swiper-container wrap">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            {/* 推荐页面 */}
                            <Recommend />
                        </div>
                        <div className="swiper-slide">
                            {/* 排行榜 */}
                        </div>
                        <div className="swiper-slide">
                            {/* 搜索 */}
                        </div>
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

export default withAd(Index, {
    position: 'top',
    background: '#31c27c'
});