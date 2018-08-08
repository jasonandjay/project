import React, { PureComponent } from 'react';
import Swiper from 'swiper/dist/js/swiper.min.js';
import 'swiper/dist/css/swiper.min.css';
import '../../scss/recommend.css';

export default class Recommend extends PureComponent {
    constructor(){
        super();
        this.state = {
            slider: [],
            radioList: []
        }
    }

    componentDidMount(){
        fetch('https://www.easy-mock.com/mock/5af661177138d57c901e916b/request1/recommend')
        .then(res=>res.json())
        .then(body=>{
            console.log(body)
            if (body.code == 0){
                this.setState({
                    slider: body.data.slider,
                    radioList: body.data.radioList
                }, ()=>{
                    new Swiper('.recommend .swiper-container', {
                        loop: true,
                        autoplay: true,
                        pagination: {
                            el: '.swiper-pagination',
                        },
                    })
                })
            }
        })
    }

    render() {
        return (
            <div className="recommend">
                <div className="swiper-container">
                    <div className="swiper-wrapper">{
                        this.state.slider.map((item, index)=>{
                            return  <div className="swiper-slide" key={index}>
                                <a href={item.linkUrl}>
                                    <img src={item.picUrl}/>
                                </a>
                            </div>                           
                        })
                    }</div>
                    <div className="swiper-pagination"></div>
                </div> 
                <h3>电台</h3>
                <section className="radio">{
                    this.state.radioList.map((item, index)=>{
                        return <a key={index}>
                            <img src={item.picUrl}/>
                            <p>{item.Ftitle}</p>
                        </a>
                    })
                }</section>
            </div>
        )
    }
}
