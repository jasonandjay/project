import React, { Component } from 'react'

export default class Detail extends Component {
    constructor(){
        super();
        this.state = {
            item: ''
        }
    }

    componentDidMount(){
        let item = this.props.location.item;
        if (item){
            window.localStorage.setItem('detail', JSON.stringify(this.props.location.item))
        }else{
            item = window.localStorage.getItem('detail');
        }
        this.setState({
            item
        })
    }

    render() {
        return (
            <div>
                {JSON.stringify(this.state.item)}
            </div>
        )
    }
}
