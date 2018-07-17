import React from 'react';
import Header from './header';

export default (props)=>{
    console.log(props.location.item);
    let item = props.location.item;
    return <div>
        <Header/>
        <img src={item.img}/>
        <p>{item.name}</p>
        <p>
            <span>￥{item.price}</span>
            <span>降价通知</span>   
        </p>
    </div>
}