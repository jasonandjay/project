import React from 'react';
import store from '../store';

export default class City extends React.Component{
    constructor(){
        super();
    }

    render(){
        console.log('city...', store.getState().city);
        let city = store.getState().city;
        // return null;
        return <div>{
            city.map((item, index)=>{
                return <span key={index}>{item}</span>
            })
        }</div>
    }
}