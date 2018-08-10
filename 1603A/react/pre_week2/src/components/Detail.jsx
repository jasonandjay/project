import React, { Component } from 'react'
import Header from './Header';

export default class Detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            item: {}
        }
    }
    componentDidMount(){
        let search = this.props.location.search.slice(1);
        fetch(`/getDetail${this.props.location.search}`)
        .then(res=>res.json())
        .then(body=>{
            console.log(body);
            this.setState({
                item: body
            })
        })

        fetch('/data.json')
        .then(res=>res.json())
        .then(body=>{
            console.log(body);
        })
    }
    render() {
        console.log(this.props.location);
       
        return (
            <div>
                <Header>商品详情</Header>
                <section>
                    <img src={this.state.item.img} alt=""/>
                    <p>{this.state.item.name}</p>
                    <p>￥{this.state.item.price}</p>
                </section>
            </div>
        )
    }
}
