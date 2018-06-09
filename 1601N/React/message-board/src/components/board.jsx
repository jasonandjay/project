import React from 'react';
import { findDOMNode } from 'react-dom';
import List from './list.jsx';
import '../scss/board.css';
import axios from 'axios';

export default class Board extends React.Component{
    // 参数传参props，可以在cosntructor里直接访问props
    constructor(props){
        super(props);
        this.state = {
            list: [],
            content: '默认内容', 
            name: ''   
        }
    }

    componentDidMount(){
        let list = window.localStorage.getItem('list');
        if (list){
            list = JSON.parse(list)
        }else{
            list = []
        }
        this.setState({list});

        console.log(this.refs.div, this.refs.list);
        console.log(findDOMNode(this.refs.list));
        
        // 引入axios
        // axios.get('https://www.easy-mock.com/mock/5af6599acf64741ceacf1c57/es6/carBrand').
        //     then(res=>console.log('res...', res));
        // 引用fetch
        fetch('https://www.easy-mock.com/mock/5af6599acf64741ceacf1c57/es6/carBrand', {
            // 可选请求配置项
            methods: 'POST',
            
            // body: JSON.stringify(data)
        }).then(res=>{
            // console.log('res...', res.json());
            res.json().then(body=>{
                console.log('body...', body)
            })
        })
        fetch('http://localhost:3000/', {
            credentials: "include"
        })
    }

    submit(){
        if (this.state.content.length < 10){
            alert('留言内容必须大于十个字');
            return;
        }
        if (!this.state.name){
            alert('请输入你的姓名');
            return;
        }
        let timestamp = +new Date();
        // let list = this.state.list;
        // list.push({timestamp, content:this.state.content, name:this.state.name});
        // this.setState({
        //     list
        // })
        this.setState({
            list: [...this.state.list, {timestamp, content:this.state.content, name:this.state.name}]
        }, ()=>{
            window.localStorage.setItem('list', JSON.stringify(this.state.list))
        })
    }

    render(){
        return <div className="board">
            <h3>高端单机留言板</h3>
            <List list={this.state.list} ref="list"/>
            <div className="content" ref="div">
                <textarea 
                onPaste={(e)=>{console.log('触发了paste操作', e.target.value)}}
                value={this.state.content} onChange={e=>this.setState({content:e.target.value})} cols="30" rows="10" placeholder="留言内容"></textarea>
                <div>
                    <input value={this.state.name} onChange={e=>this.setState({name:e.target.value})} type="text" placeholder="请输入你的姓名"/>
                    <button onClick={this.submit.bind(this)}>发布留言</button>
                </div>
            </div>
        </div>
    }
}