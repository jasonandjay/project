import React from 'react';
import Lrc from './Lrc';

export default class Index extends React.Component{
    constructor(){
        super();
        this.state = {
            time: 0
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                time: this.state.time + 10
            })
        }, 10)
    }

    render(){
        return <div>
            <Lrc time={this.state.time}></Lrc>
        </div>;
    }
}