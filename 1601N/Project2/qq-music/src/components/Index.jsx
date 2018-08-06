import React, { Component } from 'react'
import Swiper from 'swiper/dist/js/swiper.min.js';
import 'swiper/dist/css/swiper.min.css';


export default class Index extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.swiper = new Swiper('.swiper-container', {
            // loop: true,
            autoplay: true,
            on: {
                slideChangeTransitionEnd: function(){
                  console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
                },
              },
        })
    }

    render() {
        return (
            <div>
                <header>
                    <div>
                        <span>我的</span>
                        <span>音乐</span>
                        <span>发现</span> 
                    </div>
                    <p></p>
                </header>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">我的</div>
                        <div className="swiper-slide">音乐</div>
                        <div className="swiper-slide">发现</div>
                    </div>
                </div> 
            </div>
        )
    }
}
