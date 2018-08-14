import React, { Component } from 'react'
import {connect} from 'react-redux';

class Index extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>{
                    this.props.add();
                }}>+</button>
                <span>{this.props.num}</span>
                <button onClick={()=>{
                    this.props.sub();
                }}>-</button>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps)=>{
    console.log('state...', state);
    return {
        num: state.num
    }
}

const mapDispatchToProps = (dispatch, ownProps)=>{
    return {
        add: ()=>{
            dispatch({
                type: 'ADD'
            })
        },
        sub: ()=>{
            dispatch({
                type: 'SUB'
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);