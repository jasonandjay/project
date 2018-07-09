import React from 'react';
import {findDOMNode } from 'react-dom';
import Dialog from './Dialog';

export default class Index extends React.Component{
    constructor(){
        super();
        this.state = {
            type: ''
        }
    }

    click(type){
        this.setState({
            type
        }, ()=>{
            console.log(findDOMNode(this.refs.dialog));
        })
    }

    componentDidMount(){
        console.log('refs...', this.refs.alert, this.refs.dialog)
       
    }

    render(){
        return <div>
            <button ref="alert" onClick={()=>this.click('alert')}>打开alert提示框</button>
            <button onClick={()=>this.click('confirm')}>打开confirm提示框</button>
            <button onClick={()=>this.click('prompt')}>打开prompt提示框</button>
            <Dialog ref="dialog" type={this.state.type}></Dialog>
        </div>
    }
}