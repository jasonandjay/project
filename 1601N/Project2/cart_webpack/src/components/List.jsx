import React, { Component } from 'react';
import {connect} from 'react-redux';
import { itemClick } from '../redux/actions';

class List extends Component {
    render() {
        return (
            <div>{
                this.props.list.map((item, index)=>{
                    return <li key={index}>
                        <input type="checkbox" value={item.isChecked} onChange={()=>{
                            this.props.itemClick(index)
                        }}/>
                        <span>{item.name}</span>
                        <span>￥{item.price}</span>
                        <div>
                            <span>+</span>
                            <span>{item.num}</span>
                            <span>-</span>    
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
            dispatch(itemClick(index))
        }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(List)