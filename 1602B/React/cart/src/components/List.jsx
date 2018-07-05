import React from 'react';

export default class List extends React.Component{
    constructor(props){
        super();
        console.log('props：', props);
    }

    render(){
        console.log('props：', this.props);
        return <ul>{
            this.props.list.map((item, index)=>{
                return <li key={index}>
                    <input type="checkbox" checked={item.checked}
                     onChange={()=>{this.props.selectItem(index)}}/>
                    <span>{item.name}</span>
                    <div>
                        <span onClick={()=>{this.props.changeNum(index, '-')}}>-</span>
                        <span>{item.num}</span>
                        <span onClick={()=>{this.props.changeNum(index, '+')}}>+</span>    
                    </div> 
                    <span>${item.price}</span>
                </li>
            })
        }</ul>
    }
}