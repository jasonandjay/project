import React from 'react';
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
        })
    }

    render(){
        return <div>
            <button onClick={()=>this.click('alert')}>打开alert提示框</button>
            <button onClick={()=>this.click('confirm')}>打开confirm提示框</button>
            <button onClick={()=>this.click('prompt')}>打开prompt提示框</button>
            <Dialog type={this.state.type}></Dialog>
        </div>
    }
}