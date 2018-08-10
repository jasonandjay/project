import React, { Component } from 'react'
import Header from './Header';
import {NavLink} from 'react-router-dom';

export default class List extends Component {
    constructor(){
        super();
        this.state = {
            list: []
        }
    }

    componentDidMount(){
        fetch('/getList')
        .then(res=>res.json())
        .then(body=>{
            console.log(body);
            this.setState({
                list: body.arr
            })
        })
    }

    render() {
        return (
            <div>
                <Header>酒水饮料</Header>
                <section>{
                    this.state.list.map((item, index)=>{
                        return <NavLink to={`/detail?id=${item.id}`} key={index}>
                            <img src={item.img} alt=""/>
                            <span>{item.name}</span>
                            <span>￥{item.price}</span>
                        </NavLink>   
                    })
                }</section>
            </div>
        )
    }
}
