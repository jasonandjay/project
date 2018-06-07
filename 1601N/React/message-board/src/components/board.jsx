import React from 'react';
import List from './list.jsx';
import '../scss/board.css';

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
        this.setState({
            list: [...this.state.list, {timestamp, content:this.state.content, name:this.state.name}]
        }, ()=>{
            window.localStorage.setItem('list', JSON.stringify(this.state.list))
        })
    }

    render(){
        return <div className="board">
            <h3>高端单机留言板</h3>
            <List list={this.state.list}/>
            <div className="content">
                <textarea value={this.state.content} onChange={e=>this.setState({content:e.target.value})} cols="30" rows="10" placeholder="留言内容"></textarea>
                <div>
                    <input value={this.state.name} onChange={e=>this.setState({name:e.target.value})} type="text" placeholder="请输入你的姓名"/>
                    <button onClick={this.submit.bind(this)}>发布留言</button>
                </div>
            </div>
        </div>
    }
}