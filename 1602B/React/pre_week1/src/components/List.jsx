import React from 'react';
import PropTypes from 'prop-types';
import Fragment from './Fragemnt';
import "../scss/list.css";

export default class List extends React.PureComponent{
    constructor(props){
        super();
        console.log('props：', props);
        this.state = {
            time: ''
        }
    }
    static func(){
        return 'Hello World';
    }

     // 组件是否需要更新
    // shouldComponentUpdate(nextProps, nextState){
        // console.log('nextProps...', nextProps,
        //             'this.props...', this.props,
        //             'nextState...', nextState,
        //             'this.state...', this.state);

        // console.log(this.props.list, nextProps.list, this.props.list===nextProps.list);
        // return this.props.list.length != nextProps.list.length;
        // return true;
    // }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({   
                time: (new Date()).toString()
            });
        }, 1000);
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
        }{this.props.children}</ul>
         <p>当前时间： {this.state.time}</p>
        </Fragment>
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