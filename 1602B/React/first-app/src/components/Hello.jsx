import React from 'react';

export default class Hello extends React.Component{
    constructor(){
        super();
        this.state = {
            msg: 'Hello World',
            showH3: false
        }
    }

    click(){
        // alert('点击了H2');
        this.setState({
            showH3: true
        }, ()=>{
            console.info('完成了showH3的更新');
        });
        console.log('this..', this);
    }

    render(){
        return <div>
                 <h2 onClick={()=>this.click()}>{this.state.msg}</h2>
                 {this.state.showH3?<h3>我是H3</h3>:null}
            </div>
       
    }
}
