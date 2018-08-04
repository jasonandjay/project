import React, { Component } from 'react'
import Dialog from './Dialog';

export default class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            type: ''
        }
    }

    click(type){
        this.setState({
            type
        })
    }

    render() {
        return (
            <div>
                <button onClick={()=>this.click('alert')}>alert弹框</button>
                <button onClick={()=>this.click('confirm')}>confirm弹框</button>
                <button onClick={()=>this.click('prompt')}>prompt弹框</button>
                
                <Dialog type={this.state.type}></Dialog>
            </div>
        )
    }
}
