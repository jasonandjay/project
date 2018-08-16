import React, { Component } from 'react'
import '../scss/index.css';

export default class Index extends Component {
    constructor(){
        super();
        let list = [];
        for (let i=1; i<=500; i++){
            list.push(i);
        }
        this.state = {
            list,
            page: 1
        }
    }
    
    onChange(page){
        this.setState({
            page
        })
    }

    render() {
        let {pageSize} = this.props;
        let {list, page} = this.state;
        console.log('state...', this.state);
        let arr = list.slice((page-1)*pageSize, page*pageSize);
        console.log('arr', arr);
        return (
            <div>{
                arr.map((item, index)=>{
                    return <p key={index}>当前是第{item}条数据</p>    
                })
            }</div>
        )
    }
}
