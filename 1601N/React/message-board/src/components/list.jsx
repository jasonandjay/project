import React from 'react';
import '../scss/list.css';

export default class List extends React.Component{
    // 参数传参props，可以在cosntructor里直接访问props
    constructor(props){
        super(props);
        console.log('props...', props);
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

    render(){
        return <div className="list">
            <ul>{
                this.props.list.map((item, index)=>{
                    return <li key={index}>
                        <p>
                            <span>{item.name}</span>
                            <span>{this.formatTime(item.timestamp)}</span>
                        </p>
                        <p>{item.content}</p>
                    </li>
                })
            }</ul>
        </div>
    }
}