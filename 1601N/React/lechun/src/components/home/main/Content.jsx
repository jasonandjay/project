import React from 'react';
import {connect} from 'react-redux';
import '../../../scss/content.css';

class Content extends React.Component{
    constructor(){
        super()
    }
    render(){
        let id = this.props['0'].match.params.id;
        if (!this.props.list[id] || !this.props.list[id].items.length){
            return null;
        }
       
        let list = this.props.list[id] && this.props.list[id].items;
        return <div className="content">{
            list.map((item, index)=>{
                return <li key={index}>
                    <img src={item.picSmall}/>
                    <p>{item.proTitle}</p> 
                    <p>{item.proSummary}</p>
                    <div className="wrap">
                        <span>￥{item.salePrice}/{item.productUnit}</span>
                        <div>{
                            item.num?<div>
                                <span onClick={()=>this.props.changeNum('ADD_NUM', id, index)}>+</span>
                                <span>{item.num}</span>
                                <span onClick={()=>this.props.changeNum('SUB_NUM', id, index)}>-</span>
                            </div>: <img onClick={()=>this.props.changeNum('ADD_NUM', id, index)} className="cart-icon" src="https://m.lechun.cc/images/icon/icon-sku-cart.png"/>
                        }</div>    
                    </div> 
                </li>
            })   
        }</div>
    }
}

const mapStoP = (state, ownProps)=>{
    return {
        list: state.main.list,
        ...ownProps
    }
}
const mapDtoP = (dispatch)=>{
    return {
        changeNum: (type, tid, pid)=>{
            dispatch({
                type: type,
                text: {
                    tid,
                    pid
                }
            })
        }
    }
}

export default connect(mapStoP, mapDtoP)(Content)