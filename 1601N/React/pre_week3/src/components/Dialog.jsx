import React from 'react';

export default class Chart extends React.Component{
    constructor(){
        super()
        this.state = {
            isShow: true
        }
    }

    click(){
        window.sessionStorage.setItem('pre_week3_dialog', 'true');
        this.setState({
            isShow: true
        })
    }

    componentDidMount(){
        let isShow = window.sessionStorage.getItem('pre_week3_dialog');
        this.setState({
            isShow
        })
    }

    render(){
        if (this.state.isShow){
            return null;
        }
        return <div onClick={this.click.bind(this)}>  
            <p>我是弹框</p>
        </div>
    }
}