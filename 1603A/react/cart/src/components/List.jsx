import React from 'react';
import PropTypes from 'prop-types';
import '../scss/list.css';

export default class List extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
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
    }
}

// 类型检查
List.propTypes = {
    list: PropTypes.number
}

// 默认值
List.defaultProps = {
    list: [
        {
          "name": "榴莲",
          "price": 100,
          "num": 1,
          "checked": false
        },
        {
          "name": "百香果",
          "price": 50,
          "num": 1,
          "checked": false
        },
        {
          "name": "车厘子",
          "price": 200,
          "num": 1,
          "checked": false
        },
        {
          "name": "山竹",
          "price": 300,
          "num": 1,
          "checked": false
        }
      ]
}

// export default (props)=>{
//     return <div className="list">{
//         props.list.map((item, index)=>{
//             return <li key={index} className={item.checked?'active':''}>
//                 <input type="checkbox" checked={item.checked} onChange={
//                     e=>props.itemSelect(index)
//                 }/>
//                 <span>{item.name}</span>
//                 <div>
//                     <span onClick={()=>props.changeNum(index, '+')}>+</span>
//                     <span>{item.num}</span>    
//                     <span onClick={()=>props.changeNum(index, '-')}>-</span>
//                 </div>
//                 <span>￥{item.price}</span>
//             </li>
//         })
//     }</div>;
// }