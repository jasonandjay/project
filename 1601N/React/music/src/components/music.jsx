import React from 'react';
import Lyrac from './lyrac.jsx';
import '../scss/music.css';


export default class Music extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // 歌曲列表
            songs: [],
            // 播放到第几首歌曲
            current: 0,
            // 播放状态，ture表示播放，false表示暂停
            playState: false,
            // 播放时间
            currentTime: '00:00',
            // 播放毫秒数
            currentMs: 0,
            // 总时长
            duration: '03:45',
            // 播放进度
            progress: '0%',
            // 滑动的位置
            tochRect: {

            }
        };
        this.audio = null;
    }

    componentDidMount(){
        fetch('https://www.easy-mock.com/mock/5af6599acf64741ceacf1c57/es6/musicList')
        .then(res=>{
            res.json().then(body=>{
                console.log('body...', body);
                this.setState({
                    songs: body.songs
                }, ()=>{
                    // setInterval(()=>{
                    //     this.setState({
                    //         current: this.state.current+1
                    //     })
                    // }, 100)
                    let rect = this.refs.touch.getBoundingClientRect();
                    this.setState({
                        touchRect:{
                            left: rect.left,
                            right: rect.right
                        }
                    })
                })
            })
        })
       
    }

    play(){
        // if (this.audio){
        //     console.log('this.audio...', this.audio);
        //     this.refs.audio.play();
        //     // this.audio.play();
        // }
        if (this.audio){
            if (this.state.playState){
                this.refs.audio.pause();
            }else{
                this.refs.audio.play();
            }
            console.log(this.refs.audio.currentTime);
            this.setState({
                playState: !this.state.playState,
                duration: this.formatTime(this.refs.audio.duration)
            })
        }
    }

    timeUpdate(e){
        // console.log('e...', e);
        this.setState({
            currentTime: this.formatTime(this.refs.audio.currentTime),
            currentMs: this.refs.audio.currentTime,
            progress: Math.floor(this.refs.audio.currentTime/this.refs.audio.duration*100)+'%'
        })

    }

    formatTime(sec){
        // 把秒数向上取整
        sec = Math.round(sec);
        let min = Math.floor(sec/60)+'';
        sec = sec%60+'';
        return min.padStart(2,'0')+':'+sec.padStart(2, '0')
    }

    touchStart(){
        this.refs.audio.pause();
    }

    touchMove(e){
        let pageX = e.touches[0].pageX;
        console.log(pageX, this.state.touchRect);
        if (pageX < this.state.touchRect.left || pageX > this.state.touchRect.right){
            return null;
        }else{
            this.setState({
                progress: Math.floor((pageX - this.state.touchRect.left) / (this.state.touchRect.right-this.state.touchRect.left)*100)+'%'
            })    
        }
    }

    touchEnd(){
        // 更改播放进度
        let start = this.refs.audio.duration*(parseInt(this.state.progress)/100);
        this.refs.audio.currentTime = start;
        this.setState({
            currentTime: this.formatTime(start)
        }, ()=>{
            this.refs.audio.play();
        })
        console.log('start...', start)
    }

    // 上一曲
    prev(){
        this.refs.audio.pause();
        this.setState({
            current: (this.state.current-1+this.state.songs.length)%this.state.songs.length
        }, ()=>{
            this.refs.audio.play();
        })
    }

    next(){
        this.refs.audio.pause();
        this.setState({
            current: (this.state.current+1)%this.state.songs.length
        }, ()=>{
            this.refs.audio.play();
        })
    }

    render(){
        if (!this.state.songs.length){
            return null;
        }
        let song = this.state.songs[this.state.current];
        this.audio = <audio src={song.src} loop ref="audio"
                        onTimeUpdate={this.timeUpdate.bind(this)}></audio>

        return <div className="music">
            {this.audio}
            <p>{`${song.title} - ${song.author}` }</p>
            <img src={song.image} className={this.state.playState?'active':''}/>
            <div className="progress">
                <span>{this.state.currentTime}</span>
                <div ref="touch"
                onTouchStart={this.touchStart.bind(this)}
                onTouchMove={this.touchMove.bind(this)}
                onTouchEnd={this.touchEnd.bind(this)}>
                    <span style={{width: this.state.progress}}></span>
                </div>
                <span>{this.state.duration}</span>
            </div>
            <div className="control">
                <button onClick={this.prev.bind(this)}>上一曲</button>
                <button onClick={this.play.bind(this)}>{this.state.playState?'暂停':'播放'}</button>
                <button onClick={this.next.bind(this)}>下一曲</button>
            </div>
            <Lyrac currentMs={this.state.currentMs}/>
            <div className="list">{
                this.state.songs.map((item,index)=>{
                    return <li key={index}>
                        <img src={item.image}/>
                        <div>
                            <p>{item.title}</p>
                            <p>{item.author}</p>
                        </div>
                    </li>
                })
            }</div>
        </div>
    }
}