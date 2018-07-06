import React from 'react';
import '../scss/lrc.css';

export default class Lrc extends React.Component{
    constructor(){
        super();
        this.state = {
            timeList: [],
            lrcList: [],
            current: 0,
            lrc: `
            ti:i love you]
[ar:celine dion ]
[by:]
[00:17.50]I must be crazy now
[00:22.50]Maybe I dream too much
[00:26.50]But when I think of you
[00:29.50]I long to feel your touch
[00:34.50]To whisper in your ear
[00:38.50]Words that are old as time
[00:42.50]Words only you would hear
[00:45.50]If only you were mine
[00:49.50]I wish I could go back to the very first day I saw you
[00:57.50]Should've made my move when you looked in my eyes
[01:05.50]'Cause by now I know that you'd feel the way that I do
[01:13.50]And I'd whisper these words as you'd lie here by my side
[01:20.50]I love you, please say
[01:30.50]You love me too, these three words
[01:39.50]They could change our lives forever
[01:46.50]And I promise you that we will always be together
[01:52.50]Till the end of time
[02:10.50]So today, I finally find the courage deep inside
[02:14.50]Just to walk right up to your door
[02:19.50]But my body can't move when I finally get to it
[02:22.50]Just like a thousand times before
[02:26.50]Then without a word he handed me this letter
[02:34.50]Read I hope this finds the way into your heart, it said
[02:43.50]I love you, please say
[02:51.50]You love me too, these three words
[03:01.50]They could change our lives forever
[03:07.50]And I promise you that we will always be together
[03:13.50]Till the end of time
[03:21.50]Well maybe I, I need a little love yeah
[03:30.50]And maybe I, I need a little care
[03:35.50]And maybe I, maybe you, maybe you, maybe you
[03:38.50]Oh you need somebody just to hold you
[03:45.50]If you do, just reach out and I'll be there
[03:55.50]I love you, please say
[04:01.50]You love me too
[04:02.50]Please say you love me too
[04:05.50]Till the end of time
[04:08.50]These three words
[04:10.50]They could change our lives forever
[04:16.50]And I promise you that we will always be together
[04:23.50]Oh, I love you
[04:30.50]Please say you love me too
[04:39.50]Please please
[04:41.50]Say you love me too
[04:44.50]Till the end of time
[04:49.50]My baby
[04:53.50]Together, together, forever
[04:58.50]Till the end of time
[05:00.50]I love you
[05:08.50]I will be your light
[05:11.50]Shining bright`
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
    componentWillReceiveProps(){
        if (this.props.time > this.state.timeList[this.state.current+1]){
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