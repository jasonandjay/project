import React, { Component } from 'react'
import {connect} from 'react-redux';

class Cart extends Component {
    totalNum(){
        let num = 0;
        this.props.list.forEach((item, index)=>{
            if (item.isChecked){
                num += item.num;
            }
        })
        return num;
    }

    totalPrice(){
        let num = 0;
        this.props.list.forEach((item, index)=>{
            if (item.isChecked){
                num += item.num*item.price;
            }
        })
        return num;
    }
    render() {
        return (
            <div>
                <p>
                    总数： {this.totalNum()}
                </p>
                <p>
                    总价： {this.totalPrice()}
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        list: state.cart.list
    }
}

export default connect(mapStateToProps)(Cart);