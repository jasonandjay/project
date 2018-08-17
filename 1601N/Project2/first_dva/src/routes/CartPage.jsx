import React, { Component } from 'react'
import style from './CartPage.css';
import {query} from '../services/example';
import {connect} from 'dva';

class Cart extends Component {
    constructor(){
        super();
        this.state = {
            list: []
        };
    }
    componentDidMount(){
        // query()
        // .then(data=>{
        //     console.log('data...', data);
        //     this.setState({
        //         list: data.data.user
        //     })
        // })
        this.props.fetchData();
    }
    render() {
        return (
            <div className={style.header}>
                购物车页面
                <ul>{this.props.list.map((item, index)=>{
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


const mapStateToProps = (state)=>{
    console.log('state...', state);
    return {
        list: state.cart.list
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        fetchData: ()=>{
            // query()
            // .then(data=>{
            //     console.log('data11111...', data);
            //    dispatch({
            //        type: 'cart/fetchList',
            //        payload: data.data.user
            //    })
            // })
            // 触发action的时候一定要带上模块的名字
            // dispatch({
            //     type: 'cart/fetchDataAsync',
            //     payload: 100
            // })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)