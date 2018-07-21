import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class List extends React.Component{
    constructor(){
        super();
    }

    render(){
        return <div>{
            this.props.list.map((item, index)=>{
                return <p key={index}>
                    <span>{item.username}</span>    
                    <span>{item.password}</span>    
                    <span onClick={()=>this.props.delete(index)}>X</span>    
                </p>
            })
        }<Link to="/input">返回</Link>
        </div>;
    }
}

const mapStateToProps = state=>{
    return {
        list: state.list
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        delete: (index)=>{
            dispatch({
                type: 'DELETE_LIST',
                payload: index
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);