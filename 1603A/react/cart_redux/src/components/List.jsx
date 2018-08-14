import React from 'react';
import '../scss/list.css';
import {connect} from 'react-redux';

class List extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log('list props...', this.props);
        return <div className="list">{
            this.props.list.map((item, index)=>{
                return <li key={index} className={item.checked?'active':''}>
                    <input type="checkbox" checked={item.checked} onChange={
                        e=>this.props.itemSelect(index)
                    }/>
                    <span>{item.name}</span>
                    <div>
                        <span onClick={()=>this.props.changeNum(index, '+')}>+</span>
                        <span>{item.num}</span>    
                        <span onClick={()=>this.props.changeNum(index, '-')}>-</span>
                    </div>
                    <span>￥{item.price}</span>
                </li>
            })
        }</div>;
        // console.log('list props...', this.props);
        // return null;
    }
}

// 用connect包裹组件

/** 把redux中state映射成props传递到组件中去
 * @param state redux存储的数据
 * @param ownProps 组件调用时传过来的props
 * @return 返回一个对象
 */
const mapStatetoProps = (state, ownProps) => {
    return {
        list: state.list
    }
}

/**
 * 把dispatch操作封装在当前函数里，传递到组件中
 * @param dispatch 
 * @param ownProps 
 * @return 返回一个对象
 */
const mapDispatchtoProps = (dispatch, ownProps) => {
   return {
        itemSelect: (index)=>{
            dispatch({
                type: 'ITEM_SELECT',
                payload: index
            })
        },
        changeNum: ()=>{

        }
   }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(List)