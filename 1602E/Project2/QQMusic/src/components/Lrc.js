import React from 'react';
import lrc from '../assets/lrc';
import { Carousel, Icon } from 'antd';

export default class Lrc extends React.PureComponent{
  constructor(){
    super();
    this.state = {
      texts: [],
      times: [],
      current: 0
    };
  }
  componentDidMount(){
    // 初始化操作
    let arrs = lrc.split('\n');
    let texts = [], times = [];
    arrs.forEach(item=>{
      let items = item.split(']');
      if (items[1]){
        // 把时间放到times里面
        let text = items[1];
        let time = this.formatTime(items[0].replace('[',''));
        // 判断一句歌词对应两个时间
        if (items[2]){
          let time = this.formatTime(items[1].replace('[',''));
          text = items[2];
          times.push(time);
          texts.push({
            time,
            text
          })
        }
        times.push(time);
        texts.push({
          time,
          text
        })
      }
    })
    // 按照升序把歌词和时间排序
    texts.sort((a,b)=>a.time-b.time);
    times.sort((a,b)=>a-b);
    console.log(arrs, texts, times);
    this.setState({
      times,
      texts
    })
  }
  formatTime(time){
    let arrs = time.split(':');
    return arrs[0]*60*1000+arrs[1]*1000;
  }
  componentWillReceiveProps(nextProps, nextState){
    let current = 0;
    for (let i=0,len=this.state.times.length; i<len; i++){
      if (this.state.times[i] > nextProps.currentTime*1000){
        console.log(this.state.times[i], nextProps.currentTime*1000)
        current = i-1;
        break;
      }
    }
    if (current < 0) current = 0;
    this.refs.swiper.goTo(current);
  }
  render(){
    return  <Carousel ref="swiper" speed="300" vertical="true">{
      this.state.texts.map((item, index)=>{
        return <p key={index}>{item.text}</p>
      })
    }</Carousel>;
  }
};
