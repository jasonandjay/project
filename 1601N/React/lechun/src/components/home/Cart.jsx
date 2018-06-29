import React from 'react';
import '../../scss/cart.css';

export default class Home extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div className="cart" onClick={this.props.hideCart}>
            <p>我是购物车</p>
        </div>
    }
}