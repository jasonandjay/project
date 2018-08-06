import React, { Component } from 'react'

export default class Dialog extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: false
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            show: true,
            obj: {
                arr: [{
                    name: '1603A'
                }]
            }
        })
    }
    
    hide(value){
        // value && console.log(value);
        if (value == 'true'){
            console.log(true);
        }else if(value == 'false'){
            console.log(false);
        }else if(value == 'value'){
            console.log(this.refs.input.value);
        }
        this.setState({
            show: false
        })
    }

    render() {
        if (!this.state.show){
            return null;
        }
        const alert = <div>
                <p>我是alert弹框</p>
                <button onClick={()=>this.hide()}>确定</button>
            </div>
        
        const confirm = <div>
                <p>我是confirm弹框</p>
                <button onClick={()=>this.hide('true')}>确定</button>
                <button onClick={()=>this.hide('false')}>取消</button>
            </div>

        const prompt = <div>
                <p>请输入你的手机号</p>
                <input type="text" ref="input"/>
                <button onClick={()=>this.hide('value')}>确定</button>
                <button onClick={()=>this.hide()}>取消</button>
            </div>


        return (
            <div>{
                this.props.type == 'alert'?alert:
                this.props.type == 'confirm'?confirm: 
                this.props.type == 'prompt'?prompt: null
            }</div>
        )
    }
}

