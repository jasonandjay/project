import React from 'react';
import '../scss/list.css';

// export default class List extends React.Component{
//     constructor(props){
//         super(props);
//     }

//     render(){
//         return <div className="list">{
//             this.props.list.map((item, index)=>{
//                 return <li key={index} className={item.checked?'active':''}>
//                     <input type="checkbox" checked={item.checked} onChange={
//                         e=>this.props.itemSelect(index)
//                     }/>
//                     <span>{item.name}</span>
//                     <div>
//                         <span onClick={()=>this.props.changeNum(index, '+')}>+</span>
//                         <span>{item.num}</span>    
//                         <span onClick={()=>this.props.changeNum(index, '-')}>-</span>
//                     </div>
//                     <span>￥{item.price}</span>
//                 </li>
//             })
//         }</div>;
//     }
// }

export default (props)=>{
    return <div className="list">{
        props.list.map((item, index)=>{
            return <li key={index} className={item.checked?'active':''}>
                <input type="checkbox" checked={item.checked} onChange={
                    e=>props.itemSelect(index)
                }/>
                <span>{item.name}</span>
                <div>
                    <span onClick={()=>props.changeNum(index, '+')}>+</span>
                    <span>{item.num}</span>    
                    <span onClick={()=>props.changeNum(index, '-')}>-</span>
                </div>
                <span>￥{item.price}</span>
            </li>
        })
    }</div>;
}