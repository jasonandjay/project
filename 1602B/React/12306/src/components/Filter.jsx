import React from 'react';
import {connect} from 'react-redux';

class Filter extends React.Component{
    render(){
        return <div>{
            this.props.filter.map((item, index)=>{
                return <li key={index}>
                    <input id={'input'+index} type="checkbox" checked={item.isChecked} onChange={
                        ()=>this.props.clickFilter(index)
                    }/>  
                    <label htmlFor={'input'+index}>{item.name}</label> 
                </li>
            })
        }</div>;
    }
}

const mapStateToProps = (state)=>{
    return {
        filter: state.filter
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        clickFilter: (index)=>{
            dispatch({
                type: 'CLICK_FILTER',
                payload: index
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
