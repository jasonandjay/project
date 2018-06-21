import React from 'react';
import store from '../store';
import {connect} from 'react-redux';

class City extends React.Component{
    constructor(){
        super();
    }

    render(){
        let city = this.props.city;
        return <div>{
            city.map((item, index)=>{
                return <span key={index} onClick={()=>this.props.onClick(index)}>{item}</span>
            })
        }</div>
    }
}

// 映射注入的state和ownProps
const mapStatetoProps = (state, ownProps)=>{
    // return {city:state.city, ...ownProps}
    return state
}

const mapDispatchtoProps = dispatch=>{
    return {
        onClick: (id)=>{
            alert(`点击了第${id}个城市`)
        }
    }
}

const mergeProps = (statePorps, dispatchProps, ownProps)=>{
    return Object.assign({}, statePorps, dispatchProps, ownProps)
}

// export default connect(mapStatetoProps, mapDispatchtoProps, mergeProps, option)(City);
export default connect(mapStatetoProps, mapDispatchtoProps)(City);