import React from 'react';
import '../scss/music.css';
import Lrc from './Lrc';

export default class Music extends React.Component{
    constructor(){
        super();
        this.state = {
            songList: [],
            current: 0,
            playState: true,
            progress: 0  //进度
        }
        this.rect = {}  // 存放进度条的位置信息
    }

    componentDidMount(){
        fetch('https://www.easy-mock.com/mock/5af6599acf64741ceacf1c57/es6/musicList')
        .then(res=>{
            return res.json();
        })
        .then(body=>{
            console.log('body', body);
            this.setState({
                songList: body.songs
            })
            this.rect = this.refs.line.getBoundingClientRect();
        })
    }

    play(){
        console.log(this.refs.audio);
        if (this.state.playState){
            this.refs.audio.pause();
        }else{
            this.refs.audio.play();
        }
        this.setState({
            playState: !this.state.playState
        })
    }

    // 上一首
    prev(){
        this.refs.audio.pause();
        this.setState({
            playState: true,
            current: (this.state.current-1+this.state.songList.length)%(this.state.songList.length)
        }, ()=>{
            this.refs.audio.play();
        })
    }

    // 下一首
    next(){
        this.refs.audio.pause();
        this.setState({
            playState: true,
            current: (this.state.current+1)%(this.state.songList.length)
        }, ()=>{
            this.refs.audio.play();
        })
    }

    // 播放期间实时更新进度
    timeUpdate(){
        let progress = this.refs.audio.currentTime/this.refs.audio.duration*100;
        // console.log('time..', this.refs.audio.currentTime, this.refs.audio.duration, progress+'%');
        this.setState({
            progress
        })
    }

    // 格式化时间
    formTime(time){
        let min = Math.floor(time/60)+'',
            sec = Math.floor(time%60)+'';
        return min.padStart(2, 0)+':'+sec.padStart(2, 0);
    }

    // 触摸进度条
    touchStart(){
        console.log('开始触摸滚动条');
        this.refs.audio.pause();
    }

    // 移动进度条
    touchMove(e){
        // console.log('touchmove...', e.touches[0], this.rect);
        let offset = (e.touches[0].clientX - this.rect.left);
        console.log('offset...', offset, offset/this.rect.width);
        let progress = Math.floor((offset/this.rect.width)*100);
        if (progress>100){
            progress = 100;
        }else if(progress<0){
            progress = 0;
        }
        this.setState({
            progress
        });
        this.refs.audio.currentTime = this.refs.audio.duration*offset/this.rect.width;
    }

    // 离开进度条
    touchEnd(){
        this.refs.audio.play();
    }

    render(){
        if (!this.state.songList.length){
            return null;
        }
        let song = this.state.songList[this.state.current];
        return <div className="music">
            <div className="info">
                <audio ref="audio" src={song.src} autoPlay
                    onTimeUpdate={()=>this.timeUpdate()}
                ></audio>
                <p>{song.title}</p>
                <img src={song.image} className={this.state.playState?'active':''}/>  
                <div className="progress">
                    <span>{this.refs.audio && this.formTime(this.refs.audio.currentTime)}</span>
                    <div
                        ref="line"
                        onTouchStart={()=>this.touchStart()}
                        onTouchMove={(e)=>this.touchMove(e)}
                        onTouchEnd={()=>this.touchEnd()}
                    >   
                        <div>
                            <span style={{width: this.state.progress+'%'}}></span>
                        </div>
                    </div>
                    <span>{this.refs.audio && this.formTime(this.refs.audio.duration)}</span>
                </div> 
                <div className="action">
                    <button onClick={()=>this.prev()}>上一首</button>
                    <button onClick={()=>this.play()}>{this.state.playState?'暂停':'播放'}</button>
                    <button onClick={()=>this.next()}>下一首</button>
                </div>
            </div>
            <Lrc time={this.refs.audio && this.refs.audio.currentTime*1000}/>
            <ul>{
                this.state.songList.map((item, index)=>{
                    return <li key={index} className={this.state.current==index?'active':''}>
                        <img src={item.image} alt=""/>
                        <div>
                            <p style={{WebkitBoxOrient: 'vertical'}}>{item.title}</p>
                            <p>{item.author}</p>
                        </div>
                    </li>
                })
            }</ul>
        </div>;
    }
}