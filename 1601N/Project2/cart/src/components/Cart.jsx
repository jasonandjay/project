import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchList} from '../redux/actions';
import List from './List';

class Cart extends Component {
    componentDidMount(){
        console.log(this.props);
        this.props.fetchList();
    }

    render() {
        return (
            <div>
                我是购物车
                <List></List>
            </div>
        )
    }
}

// mapStatetoProps
const mapStatetoProps = (state, ownProps)=>{
    console.log('state...', state);
    return {

    }
}

// mapDispatchtoProps
const mapDispatchtoProps = (dispatch, ownProps)=>{
    return {
        fetchList: ()=>{
            // 去easy-mock拉取数据
            fetch('/index.json')
            .then(res=>res.json())
            .then(body=>{
                console.log(body)
                dispatch(fetchList(body));
            })
        }
    }
}

/** mergeProps 合并props
 * @param stateProps   mapStatetoProps的返回值
 * @param dispatchProps mapDispatchtoProps的返回值
 * @param ownProps     组件调用时传进来的props
 * @return {...stateProps, ...dispatchProps, ...ownProps}
 */
const mergeProps = (stateProps, dispatchProps, ownProps)=>{
    return  {...stateProps, ...dispatchProps, ...ownProps}
}

// options
const options = {
    pure: true
}
export default connect(mapStatetoProps, mapDispatchtoProps, mergeProps, options)(Cart)