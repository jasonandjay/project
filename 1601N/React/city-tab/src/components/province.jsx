import React from 'react';
import store from '../store';

export default class Province extends React.Component{
    constructor(){
        super();
    }

    click(index){
        store.dispatch({
            type: 'CLICK_INDEX',
            text: index
        })

        store.dispatch({
            type: 'CHANGE_CITY',
            text: this.province[index].list
        })
    }

    render(){
        let province = this.province = store.getState().province.province;
        let curIndex  = store.getState().province.index;
        // return null;
        return <div>
            <ul>{
                province.map((item, index)=>{
                    return <li onClick={()=>this.click(index)} className={index===curIndex?'active':''} key={index}>{item.name}</li>
                })
            }</ul>
        </div>
    }
}