import React, { Component } from 'react'
import {connect} from 'react-redux';
import List from './List';
import Index from './Index';

class Cart extends Component {
    componentDidMount(){
        this.props.fetchList();
    }

    totalNum(){
        let num = 0
        this.props.list.forEach((item, index)=>{
            if (item.isChecked){
                num += item.num;
            }
        })
        return num;
    }

    totalPrice(){
        let price = 0
        this.props.list.forEach((item, index)=>{
            if (item.isChecked){
                price += item.num*item.price;
            }
        })
        return price;
    }

    render() {
        console.log('props...', this.props);
        return (
            <div>
                我是购物车
                <Index></Index>
                <List></List>
                <p>
                    <span>数量：{this.totalNum()}</span>
                    <span>总价：{this.totalPrice()}</span>
                </p>
            </div>
        )
    }
}

/**
 * 把redux中的state映射成props传递到组件中去
 * @param {*} state 
 * @param {*} ownProps 
 * @return 返回需要的state
 */
const mapStateToPorps = (state, ownProps)=>{
    console.log('state...', state);
    return {
        list: state.list.list
    }
}

/**
 * 把dispatch操作封在函数里，把函数传递到组件中直接调用
 * @param {*} dispatch 
 * @param {*} ownProps 
 */
const mapDispatchToProps = (dispatch, ownProps)=>{
    return {
        fetchList: ()=>{
            // 同步dispatch的写法
            // fetch('/index.json')
            // .then(res=>res.json())
            // .then(body=>{
            //     dispatch({
            //         type: 'FETCH_LIST',
            //         payload: body
            //     })
            // })

            // 用了redux-thunk之后异步dispatch的写法
            // redux-thunk支持用函数的写法来写action,同时会帮我们注入两个参数
            // dispatch用来发生action，getState用来获取state
            dispatch((dispatch, getState)=>{
                console.log('getState...', getState());
                dispatch({
                    type: 'FETCH_LIST_START',
                    // payload: body
                })
                fetch('/index.json')
                .then(res=>res.json())
                .then(body=>{
                    dispatch({
                        type: 'FETCH_LIST',
                        payload: body
                    })
                })
            })
        }
    }
}

export default connect(mapStateToPorps, mapDispatchToProps)(Cart);