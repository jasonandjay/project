import React from 'react';
// import Swiper from 'swiper/dist/js/swiper.js';

export default class Lyrac extends React.Component{
    constructor(props){
        super(props);
        this.swiper = null;
        this.state = {
            current: 0,
            time: [],
            text: [],
            lrc: `[ti:广东爱情故事]	
            [ar:广东雨神]	
            [al:]	
            [by:果果1314]
            [00:00.00]广东雨神 - 广东爱情故事
            [00:03.00]词：广东雨神
            [00:05.00]曲：广东雨神
            [00:07.00]歌词编辑：果果
            [00:09.00]QQ:765708831
            [00:12.00]爱歌词网：www.22lrc.com
            [00:15.00]
            [00:18.34]安静地离去
            [00:21.04]和孤单一起
            [00:25.88]拥挤的回忆时间抹去
            [00:32.44]人在广东已经漂泊十年
            [00:35.67]有时也怀念当初一起
            [00:37.86]经已改变
            [00:40.31]让这天空将你我相连
            [00:43.73]怀念你走了云的天空还任性
            [00:50.95]是否它相信在乎
            [00:52.36]反而容易放弃
            [00:55.29]非要最后一无所有
            [00:58.53]才无所畏惧
            [01:00.61]
            [01:08.37]我知道好多时候
            [01:11.49]爱一个人是没任何理由的
            [01:15.46]你同其他女子不一样的
            [01:18.06]你从来都不问我钟意你吗
            [01:21.11]反而我成日都问你
            [01:24.03]你究竟钟意我吗
            [01:25.70]
            [01:33.46]笑的多一些改变要彻底
            [01:40.35]直面这世界真假游戏
            [01:47.54]人在广东已经漂泊十年
            [01:51.02]有时也怀念当初一起
            [01:52.80]经已改变
            [01:54.96]让这天空将你我相连
            [01:58.72]怀念你走了云的天空还任性
            [02:05.86]是否它相信下一次的相遇
            [02:10.15]就算最后一无所有
            [02:13.68]也无所畏惧
            [02:15.96]
            [02:18.34]相信你就如当初一起
            [02:21.43]行过广东这十年幸福走了
            [02:27.85]唏嘘感慨那当初
            [02:33.31]相信你哪怕坚强
            [02:36.00]是假装出勇敢的面具
            [02:40.62]也不能少活得精彩的勇气
            [02:47.87]人在广东已经漂泊十年
            [02:50.99]有时也怀念当初一起
            [02:53.11]经已改变
            [02:55.30]让这天空将你我相连
            [02:58.71]怀念你走了云的天空
            [03:04.18]还任性是否它相信
            [03:07.11]下一次的相遇
            [03:10.25]就算最后一无所有
            [03:13.56]也无所畏惧
            [03:18.02]就算最后一无所有
            [03:20.85]也无所畏惧
            [03:23.79]
            [00:90.90]LRC歌词大全：www.90lrc.cn             
            `
        }
    }

    componentDidMount(){
        // 通过换行符\n，分离每一句歌词
        let lists = this.state.lrc.split('\n');
        // console.log('lists...', lists, lists[0]);
        // 创建两个数组分别存放歌词开始时间和歌词文本
        let time = [], text = [];
        lists.forEach(item=>{
            // 把每一行歌词通过]转化为数组
            let arr = item.trim().split(']');
            // console.log(item, arr.length, arr[0]);
            // 通过arr[1]过滤掉不合理的歌词
            if (arr.length ===2 && arr[1]){
                //把时间追加到数组中
                arr[0] = arr[0].replace('[', '').replace('.', ':');
                let nums = arr[0].split(':');
                // console.log(nums);
                // 计算歌词开始时间节点
                let ms = nums[0]*60000+nums[1]*1000+nums[2]*10;
                time.push(ms);
                //把歌词追加到数组中
                text.push(arr[1]);
            }
        })
        this.setState({
            time,
            text
        }, ()=>{
            // console.log(window.Swiper)
            this.swiper = new window.Swiper('.swiper-container',{
                // autoplay: true,
                direction: 'vertical'
            });
            // // 初始化滚动时间戳
            // let starTime = +new Date();
            // // 语音播放类
            // let speech = new SpeechSynthesisUtterance();
            // // this.refs.audio.play();
            // setInterval(()=>{
            //     // 开始时间段
            //     let duration = +new Date() - starTime;
            //     // 判断当前时间段滚动到第几句歌词
            //     if (duration > this.state.time[this.state.current+1]){
            //         this.setState({
            //             current: this.state.current+1
            //         }, ()=>{
            //             // 滚动歌词
            //             this.swiper.slideNext();
            //             // speech.text = this.state.text[this.state.current]
            //             // window.speechSynthesis.speak(speech);
            //         })
            //     }
            // }, 100);
        })
        console.log(time[1], text[1]);
    }

    componentWillReceiveProps(props){
        console.log('props...', props);
        // 把当前进度转化为毫秒
        let duration = props.currentMs*1000;
        // console.log(duration, this.state.time);
        if (duration > this.state.time[this.state.current+1]){
            this.setState({
                current: this.state.current+1
            }, ()=>{
                // 滚动歌词
                this.swiper.slideNext();
                // speech.text = this.state.text[this.state.current]
                // window.speechSynthesis.speak(speech);
            })
        }
    }

    render(){
        return <div>
            <div style={{height:30}} className="swiper-container">
                <div className="swiper-wrapper">{ 
                    this.state.text.map((item, index)=>{
                        return  <div className="swiper-slide" key={index}>
                        <p>{item}</p>
                    </div>
                    })
                }</div>
            </div>
        </div>
    }
}