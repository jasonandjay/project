import React, { Component } from 'react';
import Cart from './index/Cart';
import List from './index/List';
import {connect} from 'react-redux';

class Index extends Component {
    componentDidMount(){
        this.props.fetchData();
    }
    render() {
        return <div>
            <List></List>
            <Cart></Cart>
        </div>
    }
}


export default connect(null, (dispatch)=>{
    return {
        // fetchData: ()=>{
            // fetch('/data.json')
            // .then(res=>res.json())
            // .then(body=>{
            //     // dispatch({
            //     //     type: 'FETCH_LIST',
            //     //     payload: body.arr
            //     // })

            //     dispatch((dispatch, getState)=>{
            //         console.log('getState...', getState());
            //         setTimeout(()=>{
            //             dispatch({
            //                 type: 'FETCH_LIST',
            //                 payload: body.arr
            //             })
            //         }, 2000);
            //     })
            // })
        // }

        /** redux-thunk版本
         * 目的：处理异步action
         * 支持action的写法有对象变为函数
         * 同时会帮我们注入两个参数dispatch和getState
         * 在异步操作完成之后再触发dispatch操作
         */
        fetchData: ()=>{
            dispatch((dispatch, getState)=>{
                dispatch({
                    type: 'START_FETCH'
                })
                fetch('/data.json')
                .then(res=>res.json())
                .then(body=>{
                    if (body.arr){
                        dispatch({
                            type: 'FETCH_LIST',
                            payload: body.arr
                        })
                    }else{
                        dispatch({
                            type: 'FETCH_FAIL'
                        })
                    }
                    
    
                    // dispatch((dispatch, getState)=>{
                    //     console.log('getState...', getState());
                    //     setTimeout(()=>{
                    //         dispatch({
                    //             type: 'FETCH_LIST',
                    //             payload: body.arr
                    //         })
                    //     }, 2000);
                    // })
                })
            })
        }
    }
})(Index);