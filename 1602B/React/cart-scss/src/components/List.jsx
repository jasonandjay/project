import React from 'react';
import PropTypes from 'prop-types';
import Fragment from './Fragemnt';
import "../scss/list.css";

export default class List extends React.Component{
    constructor(props){
        super();
        console.log('props：', props);
    }
    static func(){
        return 'Hello World';
    }
    render(){
        console.log('props：', this.props);
        return <Fragment><ul className="list">{
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
        }{this.props.children}</ul></Fragment>
    }
}

List.propTypes = {
    list: PropTypes.array.isRequired
}

List.defaultProps = {
    list: [{
        name: '西瓜',
        num: 1000,
        checked: false,
        price: 1000
    }]
}