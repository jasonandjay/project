import React from 'react';
import '../scss/lrc.css';

export default class Lrc extends React.Component{
    constructor(){
        super();
        this.state = {
            timeList: [],
            lrcList: [],
            current: 0,
            lrc: `[ar:王北车]
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
        }
        this.swiper = null;
    }

    componentDidMount(){
        // 处理歌词
        let timeList = [],
            lrcList = [];
        let arr = this.state.lrc.split('\n');
        arr.forEach(item=>{
            let arr = item.split(']');
            console.log('arr..', arr, arr[1]);
            // 过滤掉异常过词
            if (arr[1]){
                // 处理时间
                let time = arr[0].split('[')[1].replace('.', ':');
                let timeArr = time.split(':');
                
                // 把时间转化为毫秒
                timeList.push(timeArr[0]*60000 + timeArr[1]*1000 + timeArr[2]*10)
                lrcList.push(arr[1]);
            }
        });
        console.log(timeList, lrcList);
        this.setState({
            timeList,
            lrcList
        }, ()=>{
            this.swiper = new window.Swiper('.swiper-container', {
                // autoplay: true,
                direction: 'vertical'
            })
        })
    }

    // 当接收到新的props时会触发的生命周期
    componentWillReceiveProps(nextProps){
        console.log('time...', this.props.time, this.state.timeList)
        if (nextProps.time > this.state.timeList[this.state.current+1]){
            this.setState({
                current: this.state.current+1,
            }, ()=>{
                this.swiper.slideNext();
                let speech = new SpeechSynthesisUtterance();
                speech.text = this.state.lrcList[this.state.current];
                // window.speechSynthesis.speak(speech);
            })
        }

    }

    render(){
        // console.log('time...', this.props.time);
        return <div className="lrc">
            <div className="swiper-container">
                <div className="swiper-wrapper">{
                    this.state.lrcList.map((item, index)=>{
                        return  <div className="swiper-slide" key={index}>{item}</div>
                    })
                }</div>
            </div>
        </div>;
    }
}