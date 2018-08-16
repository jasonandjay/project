import React, { Component } from 'react'
import style from './CartPage.css';
import {query} from '../services/example';

export default class Cart extends Component {
    constructor(){
        super();
        this.state = {
            list: []
        };
    }
    componentDidMount(){
        query()
        .then(data=>{
            console.log('data...', data);
            this.setState({
                list: data.data.user
            })
        })

    }
    render() {
        return (
            <div className={style.header}>
                购物车页面
                <ul>{this.state.list.map((item, index)=>{
                    return <li key={index}>
                        <span>{item.cname}</span>
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                        <span>{item.isChecked}</span>
                    </li>
                })}</ul>  
            </div>
        )
    }
}
