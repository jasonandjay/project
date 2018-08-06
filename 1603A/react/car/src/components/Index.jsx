import React, { Component } from 'react'
import axios from 'axios';
import List from './List.jsx';

export default class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: {},
            current: ''
        }
    }

    componentDidMount(){
        // axios.get('https://www.easy-mock.com/mock/5b679bab2dcda0352260ec60/data')
        // .then(res=>{
        //     this.setState({
        //         list: res.data.data,
        //         current: Object.keys(res.data.data)[0]
        //     })
        // })
        fetch('https://www.easy-mock.com/mock/5b679bab2dcda0352260ec60/data', {
            method: 'GET'
        })
        .then(res=>res.json())
        .then(body=>console.log('body', body));
    }
    
    click(item){
        this.setState({
            current: item
        })
    }

    render() {
        return (
            <div>
                <header>条件选车</header>
                <div>
                    <div>{Object.keys(this.state.list).map((item, index)=>{
                        return <li className={item==this.state.current?'active':''} key={index} onClick={()=>this.click(item)}>{item}</li>
                    })}</div>
                    <List list={this.state.list[this.state.current]}></List>
                </div> 
            </div>
        )
    }
}
