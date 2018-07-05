import React from 'react';
import "../scss/list.css";

export default (props)=>{
    return <ul className="list">{
        props.list.map((item, index)=>{
            return <li key={index}>
                <input type="checkbox" checked={item.checked}
                 onChange={()=>{props.selectItem(index)}}/>
                <span>{item.name}</span>
                <div>
                    <span onClick={()=>{props.changeNum(index, '-')}}>-</span>
                    <span>{item.num}</span>
                    <span onClick={()=>{props.changeNum(index, '+')}}>+</span>    
                </div> 
                <span>${item.price}</span>
            </li>
        })
    }{props.children}</ul>
}