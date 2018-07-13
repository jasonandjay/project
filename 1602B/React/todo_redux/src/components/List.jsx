import React from 'react';
import {connect} from 'react-redux';


class List extends React.Component{
    constructor(){
        super();
    }
   
    render(){
        console.log('props...',this.props);
        return <div>
        <p>
            <span onClick={()=>this.props.changeType('all')}>全部</span>
            <span onClick={()=>this.props.changeType('unfinish')}>未完成</span>
            <span onClick={()=>this.props.changeType('finish')}>已完成</span>       
        </p>
        {
           this.props.list.map((item, index)=>{
               return <li onClick={()=>this.props.click(item.id)} style={{textDecoration:item.finish?'line-through':''}} key={index}>{item.text}</li>
           })
       }</div>
    }
}
const mapStateToProps = (state, ownProps)=>{
    return {
        list: state.list.filter((item)=>{
            if (state.type == 'finish'){
                return item.finish;
            }else if(state.type == 'unfinish'){
                return !item.finish;
            }else{
                return true;
            }
        }),
        type: state.type
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
       click: (index)=>{
            dispatch({
                type: 'CLICK_LIST',
                payload: index
            })
       },
       changeType: (type)=>{
           dispatch({
               type: 'CHANGE_TYPE',
               payload: type
           })
       }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(List)
