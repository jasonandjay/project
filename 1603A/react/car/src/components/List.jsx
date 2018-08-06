import React from 'react';
// 把图片当模块引入，直接赋值给src即可
// import img from '../car.jpg';

export default (props)=>{
    if (!props.list){
        return null;
    }
    
    return <div>{
        props.list.map((item, index)=>{
            return <li key={index}>
                <img src="/car.jpg"/>
                <p>{item.title}</p>
                <p>{item.price}</p>
            </li>
        })
    }</div>
}