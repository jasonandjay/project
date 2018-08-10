import React, { Component } from 'react'
import '../scss/index.css';

export default class List extends Component {
    constructor(){
        super();

        let list = [];
        for (let i=1; i<=500; i++){
            list.push(i);
        }
        this.state = {
            list,
            page: 1 //page 属性
        }
    }

    onChange(page){
        this.setState({
            page
        })
    }

    render() {
        console.log(this.state);
        let {page, list} = this.state;
        return (
            <div>{list.slice((page-1)*10, page*10).map((item, index)=>{
                return <p key={index}>{`这是第${item}条数据`}</p>
            })}</div>
        )
    }
}
