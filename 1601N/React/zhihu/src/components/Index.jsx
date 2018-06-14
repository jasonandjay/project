import React from 'react';
import '../scss/index.css';
import Attention from './index/Attention.jsx';
import Commend from './index/Commend.jsx';
import Hot from './index/Hot.jsx';
 
export default class Gallery extends React.Component{
    constructor(){
        super()
        this.state = {
            current: 0,
            loadMore: false
        }
        this.types = ['关注','推荐','热点'];
        // 下拉请求状态，防止请求没返回的时候多次触发
        this.isLoading = false;
    }

    tabClick(current){
        this.setState({
            current
        })
    }

    finishLoad(){
        this.isLoading = false;
        this.setState({
            loadMore: false
        })
    }

    scroll(e){
        // console.log(e);
        if (this.isLoading){
            return;
        }
        let rect = e.target.getBoundingClientRect();
        let childRect = e.target.children[0].getBoundingClientRect();
        console.log(childRect);
        if (e.target.scrollTop > (childRect.height - rect.height - 40)){
            this.isLoading = true;
            console.log('加载下一页数据');
            // ajax请求数据
            this.setState({loadMore: true})
        }
    }

    render(){
        let content = this.state.current==2?<Hot />:this.state.current==1?<Commend/>:<Attention loadMore={this.state.loadMore} finishLoad={this.finishLoad.bind(this)} />;
        return <div className="index">
            <header>{
                this.types.map((item, index)=>{
                    return <span className={index==this.state.current?'active':null} onClick={()=>{this.tabClick(index)}} key={index}>{item}</span>
                })
            }</header>
            <div  onScroll={this.scroll.bind(this)}>{content}</div>
        </div>
    }
}