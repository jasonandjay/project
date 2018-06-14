import React from 'react';
import '../scss/index.css';
import Attention from './index/Attention.jsx';
import Commend from './index/Commend.jsx';
import Hot from './index/Hot.jsx';
 
export default class Gallery extends React.Component{
    constructor(){
        super()
        this.state = {
            current: 0  
        }
        this.types = ['关注','推荐','热点']
    }

    tabClick(current){
        this.setState({
            current
        })
    }

    render(){
        let content = this.state.current==2?<Hot />:this.state.current==1?<Commend/>:<Attention/>;
        return <div className="index">
            <header>{
                this.types.map((item, index)=>{
                    return <span className={index==this.state.current?'active':null} onClick={()=>{this.tabClick(index)}} key={index}>{item}</span>
                })
            }</header>
            <div>{content}</div>
        </div>
    }
}