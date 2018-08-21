import React, { Component } from 'react'
import Swiper from 'swiper/dist/js/swiper.min.js'
import 'swiper/dist/css/swiper.min.css'
import '../scss/lrc.css';

const lrc = `[ar:王北车]
[al:陷阱]
[by:]
[offset:0]
[00:00.37]陷阱 - 王北车
[00:01.37]词：石锦秋
[00:02.15]曲：石锦秋
[00:02.96]编曲：胜屿/隔路人乐队
[00:04.87]混音：吕晓菲
[00:05.95]吉他：齐成刚
[00:07.02]和声：胜屿
[00:31.31]一封信两年都没动笔
[00:38.02]三个字过了几个四季
[00:44.73]你是有多想逃避 来不及问问你
[00:51.13]我已经错过相爱的日期
[00:58.35]那天你消失在人海里
[01:04.89]你的背影沉默得让人恐惧
[01:11.79]你说的那些问题 我回答得很坚定
[01:18.60]偏偏那个时候我最想你
[01:23.35]我不曾爱过你 我自己骗自己
[01:30.46]已经给你写了信 又被我丢进海里
[01:36.97]我不曾爱过你 我自己骗自己
[01:44.01]明明觉得自己很冷静
[01:47.77]却还掉入我自己的陷阱
[02:05.90]那天你消失在人海里
[02:12.58]你的背影沉默得让人恐惧
[02:19.32]你说的那些问题 我回答得很坚定
[02:26.26]偏偏那个时候我最想你
[02:31.00]我不曾爱过你 我自己骗自己
[02:38.06]已经给你写了信 又被我丢进海里
[02:44.52]我不曾爱过你 我自己骗自己
[02:51.57]明明觉得自己很冷静
[02:55.32]却还掉入我自己的陷阱
[03:03.39]一个人在夜里想的太多
[03:09.98]离开我你的生活不再寂寞
[03:18.36]我不曾爱过你 我自己骗自己
[03:25.36]已经给你写了信 又被我丢进海里
[03:31.79]我不曾爱过你
[03:38.52]我不曾爱过你 我自己骗自己
[03:45.68]已经给你写了信 又被我丢进海里
[03:52.11]我不曾爱过你 我自己骗自己
[03:59.16]明明觉得自己很冷静
[04:02.89]却还掉入我自己的陷阱`
export default class Lrc extends Component {
    constructor(){
        super();
        this.state = {
            times: [],      // 歌词分离出来的时间数组
            texts: [],      // 歌词分离出来的文本数组
            current: 0,     // 当前显示歌词的下标
        }
    }

    componentDidMount(){
        // 解析歌词
        let rows = lrc.split('\n'),
            times = [],
            texts = [];
        console.log(rows);
        rows.forEach((item, index)=>{
            let arr = item.split(']');
            let time = arr[0].replace('[', '');
            let text = arr[1];

            // 过滤掉非法的歌词
            if (text){
                times.push(this.formatTime(time));
                texts.push(text);
            }
        })
        console.log(times,'\n', texts);
        this.setState({
            times,
            texts
        }, ()=>{
            this.swiper = new Swiper('.swiper-container',{
                // autoplay: true,
                direction: 'vertical',
                slidesPerView: 3,
                spaceBetween: 10
            })
        })
    }

    formatTime(str){
        str = str.split(':');
        return str[0]*60000+str[1]*1000;
    }

    componentWillReceiveProps(nextProps){
        // console.log('time...', nextProps.time);
        // 只需要判断当前时间是否大于下一句歌词的时间
        if (nextProps.time > this.state.times[this.state.current+1]){
            this.setState({
                current: this.state.current+1
            }, ()=>{
                // 用swiper滚动歌词
                this.swiper.slideTo(this.state.current);
                
                // 初始化语言库
                let speech = new SpeechSynthesisUtterance();
                speech.text = this.state.texts[this.state.current];
                window.speechSynthesis.speak(speech);
            })
        }
    }


    render() {
        return <div className="lrc">
            <div className="swiper-container">
                <div className="swiper-wrapper">{
                    this.state.texts.map((item,index)=>{
                        return <div className="swiper-slide" key={index}>
                            <p>{item}</p>   
                        </div>
                    })
                }
                </div>
            </div>
        </div>
    }
}
