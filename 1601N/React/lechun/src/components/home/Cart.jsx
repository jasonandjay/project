import React from 'react';
import '../../scss/cart.css';
import {connect} from 'react-redux';

class Cart extends React.Component{
    constructor(){
        super()
    }
    render(){
        console.log('props...', this.props);
        let num = 0, price = 0;
        this.props.list.forEach(item=>{
            num += item.num;
            price += item.num*item.salePrice;
        })
        return <div className="cart" onClick={(e)=>{
            if (e.target === e.currentTarget){
                this.props.hideCart();
            }
        }}><ul>
            {this.props.list.map((item,index)=>{
                return <li key={index}>
                    <p>{item.proTitle}</p>
                    <div>
                        <span onClick={(e)=>{
                            // e.preventDefault();
                            // e.stopPropagation();
                            // e.nativeEvent.stopImmediatePropagation();
                            this.props.changeNum('ADD_NUM', item.id.split('_')[0], item.id.split('_')[1])}
                        }>+</span>
                        <span>{item.num}</span>
                        <span onClick={(e)=>{
                            // e.preventDefault();
                            // e.stopPropagation();
                            // e.nativeEvent.stopImmediatePropagation();
                            this.props.changeNum('SUB_NUM', item.id.split('_')[0], item.id.split('_')[1])
                        }}>-</span>
                    </div>
                </li>
            })}
            <p>
                <span>数量：{num}  </span>
                <span>价格：￥{price.toFixed(2)}</span>
            </p>
            </ul>
        </div>
    }
}

const mapStoP = (state)=>{
    let list = [];
    state.main.list.map(item=>{
        let newItems = item.items.filter(value=>{
            return value.num>0;
        })
        list = list.concat(newItems);
    })

    return {
        list
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

export default connect(mapStoP, mapDtoP)(Cart)