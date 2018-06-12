import React from "react";
import axios from "axios"
export default class Handerbar extends React.Component{
    constructor (){
        super();
        this.state = ({
            list : null
        })
    }

    componentDidMount () {
        let list = null;
        let that = this;
        axios.get("https://www.easy-mock.com/mock/5b1f65de01b782772b84e987/example/list").then((dat)=>{
            list = dat.data
        }).then(()=>{
            that.setState({
                list  
            })
        })
        
    }

    render() {
        return <div className="header">
            {this.state.list}
        </div>
    }
}