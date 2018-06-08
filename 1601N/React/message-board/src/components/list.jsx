import React from 'react';
import PropType from 'prop-types';
import '../scss/list.css';

export default class List extends React.Component{
    // 参数传参props，可以在cosntructor里直接访问props
    constructor(props){
        super(props);
        console.log('props...', props);
        this.state = {
            timestamp: 0
        }
    }

    /**
     * 格式化时间戳
     * @param {时间戳} timestamp
     * @return YYYY-MM-DD HH:MM:SS 
     */
    formatTime(timestamp){
        let date = new Date(timestamp);
        let year = date.getFullYear()+'';
        let month = date.getMonth()+1+'';
        let day = date.getDay()+'';
        let hour = date.getHours()+'';
        let min = date.getMinutes()+'';
        let second = date.getSeconds()+'';
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}
         ${hour.padStart(2, '0')}:${min.padStart(2, '0')}:${second.padStart(2, '0')}`
    }

    shouldComponentUpdate(nextProps, nextState){
        // console.log('props..', nextProps, 'state...', nextState, nextProps.list === this.props.list);
        // if (nextProps.list !== this.props.list){
            return true;
        // }
        // return false;
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                timestamp: +new Date()
            })
        }, 1000);
    }

    animStart(e){
        // console.log('anim start...', e);
    }
    animEnd(e){
        // console.log('anim end...', e);
    }
    animIntera(e){
        // console.log('anim inter...', e);
    }

    render(){
        return <div className="list">
            <ul>{
                this.props.list.map((item, index)=>{
                    return <li key={index}
                    onAnimationStart={(e)=>{
                        this.animStart(e);
                    }}
                    onAnimationEnd={(e)=>{
                        this.animEnd(e);
                    }}
                    onAnimationIteration={(e)=>{
                        this.animIntera(e);
                    }}>
                        <p>
                            <span>{item.name}</span>
                            <span>{this.formatTime(item.timestamp)}</span>
                        </p>
                        <p
                            onCopy={()=>console.log('触发了copy操作')}
                            onCut={()=>console.log('触发了cut操作')}
                        >{item.content}</p>
                    </li>
                })
            }</ul>
            <p>{this.state.timestamp}</p>
        </div>
    }
}

List.propTypes = {    
    list: PropType.array.isRequired
}