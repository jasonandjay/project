import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';

export default class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
    }

    changeText(text){
        console.log(text);
        this.setState({
            text
        })
    }

    submit(){
        // vue获取ref
        // this.$refs.input
        // react获取ref
        console.log(this.refs.input.value);
        this.setState({
            text: this.refs.input.value
        })

        // console.log(this.refs.child);

        // console.log(findDOMNode(this.refs.child));
        let dom = findDOMNode(this.refs.child);
        dom.style.background = 'blue';
        console.log(dom.innerHTML);
    }

    shouldComponentUpdate(nextProps, nextState){
        if (nextState.text == '销毁'){
            return true;
        }else{
            return false;
        }
    }

    render() {
        return (
            <div>
                <div>
                    {/* 受控组件的写法 */}
                    {/* <input type="text" value={this.state.text} onChange={(e)=>this.changeText(e.target.value)}/> */}
                    
                    {/* 直接访问dom的写法 */}
                    <input type="text" ref="input"/>
                    <button onClick={()=>this.submit()}>执行命令</button>
                </div>
                {this.state.text=='销毁'?null:<Child ref="child"/>}
            </div>
        )
    }
}

class Child extends React.Component{
    render(){
        return <div style={{background:'red',width:'100%',height:300}}>我是一个即将被销毁的小元素</div>       
    }
}

// const Child  = ()=>{
    // return <div style={{background:'red',width:'100%',height:300}}>我是一个即将被销毁的小元素</div>  
// }
