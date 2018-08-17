import React, { Component } from 'react'
import {connect} from 'react-redux';

class List extends Component {
    render() {
        console.log(this.props);
        return (
            <div>{
                this.props.list.map((item, index)=>{
                    return <li key={index}>
                        <input type="checkbox" checked={item.isChecked} onChange={()=>{
                            this.props.itemClick(index)
                        }}/>
                        <span>{item.name}</span>
                        <span>￥{item.price}</span>
                        <span>数量：{item.num}</span>
                    </li>
                })
            }</div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        list: state.cart.list
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        itemClick: (index)=>{
            dispatch({
                type: 'ITEM_CLICK',
                payload: index
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(List);