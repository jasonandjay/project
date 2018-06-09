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
            lrc: `[ti:体面]	
            [ar:于文文]	
            [al:电影《前任3：再见前任》插曲]	
            [by:果果1314]	
            
            [00:00.00]于文文 - 体面
            [00:02.00]电影《前任3：再见前任》插曲
            [00:04.00]作词：唐恬
            [00:06.00]作曲：于文文
            [00:08.00]演唱：于文文
            [00:10.00]编曲：郑楠
            [00:12.00]和声&和声设计：于文文
            [00:14.00]]歌词编辑：果果
            [00:16.00]QQ:765708831
            [00:18.00]爱歌词网：www.22lrc.com
            [00:20.00]
            [00:23.00]别堆砌怀念让剧情变得狗血
            [00:34.03]深爱了多年又何必毁了经典
            [00:42.92]都已成年不拖不欠
            [00:48.67]浪费时间是我情愿
            [00:54.28]像谢幕的演员
            [00:57.79]眼看着灯光熄灭
            [01:05.43]来不及再轰轰烈烈
            [01:11.15]就保留告别的尊严
            [01:16.79]我爱你不后悔
            [01:20.36]也尊重故事结尾
            [01:28.13]分手应该体面
            [01:31.39]谁都不要说抱歉
            [01:35.06]何来亏欠
            [01:37.23]我敢给就敢心碎
            [01:40.83]镜头前面是
            [01:42.99]从前的我们在喝彩
            [01:47.15]流着泪声嘶力竭
            [01:50.83]离开也很体面
            [01:53.86]才没辜负这些年
            [01:57.62]爱得热烈
            [01:59.51]认真付出的画面
            [02:03.33]别让执念毁掉了昨天
            [02:07.99]我爱过你利落干脆
            [02:12.48]
            [02:35.42]最熟悉的街主角却换了人演
            [02:46.95]我哭到哽咽
            [02:48.99]心再痛就当破茧
            [02:55.73]来不及再轰轰烈烈
            [03:01.35]就保留告别的尊严
            [03:06.99]我爱你不后悔
            [03:10.92]也尊重故事结尾
            [03:18.39]分手应该体面
            [03:21.52]谁都不要说抱歉
            [03:25.31]何来亏欠
            [03:27.12]我敢给就敢心碎
            [03:30.88]镜头前面是
            [03:33.13]从前的我们在喝彩
            [03:36.83]流着泪声嘶力竭
            [03:41.01]离开也很体面
            [03:43.92]才没辜负这些年爱得热烈
            [03:49.79]认真付出的画面
            [03:53.54]别让执念毁掉了昨天
            [03:58.26]我爱过你利落干脆
            [04:04.20]再见不负遇见
            [04:11.08]
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
            // 初始化滚动时间戳
            let starTime = +new Date();
            // 语音播放类
            let speech = new SpeechSynthesisUtterance();
            // this.refs.audio.play();
            setInterval(()=>{
                // 开始时间段
                let duration = +new Date() - starTime;
                // 判断当前时间段滚动到第几句歌词
                if (duration > this.state.time[this.state.current+1]){
                    this.setState({
                        current: this.state.current+1
                    }, ()=>{
                        // 滚动歌词
                        this.swiper.slideNext();
                        speech.text = this.state.text[this.state.current]
                        window.speechSynthesis.speak(speech);
                    })
                }
            }, 100);
        })
        console.log(time[1], text[1]);
    }

    render(){
        return <div>
            <audio autoPlay controls>
                <source src="../mm.mp3"/>
            </audio>
            <div className="swiper-container">
                <div className="swiper-wrapper">{ 
                    this.state.text.map((item, index)=>{
                        return  <p className="swiper-slide" key={index}>{item}</p>
                    })
                }</div>
            </div>
        </div>
    }
}