import React, { Component } from 'react'
import Lrc from './Lrc';
import { WSAETIMEDOUT } from 'constants';

export default class Music extends Component {
    constructor(){
        super();
        this.state = {
            time: 0
        }
    }

    componentDidMount(){
        let start = +new Date();
        setInterval(()=>{
            let cur = +new Date();
            this.setState({
                time: cur - start
            })
        }, 100);
    }

    render() {
        return <div>
            <Lrc time={this.state.time}></Lrc>
        </div>
    }
}