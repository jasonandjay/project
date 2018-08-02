import React from 'react';

export default class List extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div>{
            this.props.list.map((item, index)=>{
                return <li key={index}>
                    <input type="checkbox" checked={item.checked} onChange={
                        e=>this.props.itemSelect(index)
                    }/>
                    <span>{item.name}</span>
                    <div>
                        <span onClick={()=>this.props.changeNum(index, '+')}>+</span>
                        <span>{item.num}</span>    
                        <span onClick={()=>this.props.changeNum(index, '-')}>-</span>
                    </div>
                    <span>{item.price}</span>
                </li>
            })
        }</div>;
    }
}