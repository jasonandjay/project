import React from 'react';

export default class Dialog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isShow: false
        }
    }

    componentWillReceiveProps(){
        this.setState({
            isShow:true
        })
    }

    render(){
        if (!this.state.isShow){
            return null;
        }
        return <div>{
            this.props.type==='alert'?'alert':this.props.type==='confirm'?'confirm':'prompt'
        }</div>
    }
}