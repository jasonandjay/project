import React, { Component } from 'react'
import './home.css'

class Home extends Component {
    state = {
        data:[]
    }
    render() {
        return (
            <div className="home">
               {
                   this.state.data.map((item,index)=>{
                        return(
                            <div key={item.id}>
                                <h4><img src={item.img_url} alt=""/><span>{item.tit}</span></h4>
                                <p>{item.text}</p>
                            </div>
                        )
                   })
               }
            </div>
        )
    }
    componentDidMount(){
        fetch("/data/data.json").then(res=>res.json()).then(res=>{
            console.log(res)
            this.setState({
                data:res
            })
        })
    }
}

export default Home
