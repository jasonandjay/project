import React from 'react';
import {connect} from 'react-redux';


class List extends React.Component{
    constructor(){
        super();
    }
   
    render(){
       return <div>{
           this.props.list.map((item, index)=>{
               return <li key={index}>{item}</li>
           })
       }</div>
    }
}
const mapStateToProps = (state, ownProps)=>{
    return {
        list: state.list
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
      
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(List)
