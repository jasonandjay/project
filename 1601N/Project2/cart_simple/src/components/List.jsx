import React, { Component } from 'react';
import {connect} from 'react-redux';

class List extends Component {
    render() {
        return (
            <div>{
                this.props.list.map((item, index)=>{
                    return <li key={index}>
                        <input type="checkbox" checked={item.isChecked} onChange={()=>{
                            this.props.itemClick(index);
                        }}/>
                        <span>{item.name}</span>
                        <span>￥{item.price}</span>
                        <div>
                            <span onClick={()=>{
                                this.props.numClick(index, 'ADD_NUM');
                            }}>+</span>
                            <span>{item.num}</span>
                            <span onClick={()=>{
                                this.props.numClick(index, 'SUB_NUM');
                            }}>-</span>    
                        </div>
                    </li>
                })
            }</div>
        )
    }
}


// mapStatetoProps
const mapStatetoProps = (state, ownProps)=>{
    console.log('state...', state);
    return {
        list: state.list
    }
}

// mapDispatchtoProps
const mapDispatchtoProps = (dispatch, ownProps)=>{
    return {
        itemClick: (index)=>{
            dispatch({
                type: 'ITEM_CLICK',
                payload: index
            })
        },
        numClick: (index, type)=>{
            dispatch({
                type,
                payload: index
            })
        }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(List)