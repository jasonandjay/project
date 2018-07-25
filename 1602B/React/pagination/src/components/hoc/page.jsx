import React from 'react';
import '../../scss/page.css';

export default (WrapComponent)=>{
    class Component extends WrapComponent{
        constructor(props){
            super(props);
            // this.state = {
                // current: 1
            // }
            this.state = {...this.state, current: 1};
            console.log('state...', this.state);
        }

        clickPage(page, type){
            if (type == '+'){
                // 下一页
                if (page != this.pageNum){
                    page++;
                }
            }else if(type == '-'){
                // 上一页
                if (page != 1){
                    page--;
                }
            }else{
                // 页码跳转
            }
            this.setState({
                current: page
            }, ()=>{
                this.pageChange(page);
            })
        }

        render(){
            let pageNum = this.pageNum =  Math.ceil(this.props.total/this.props.pageSize);
            let pageArray = [];
            for (let i=1;i<=pageNum;i++){
                pageArray.push(i);
            }
            return <div className='page'>
                {super.render()}
                <div className="list">
                    <span onClick={()=>this.clickPage(this.state.current, '-')}>上一页</span>{
                        pageArray.map((item, index)=>{
                            return <span className={this.state.current==index+1?'active':''} key={index}
                                onClick={()=>this.clickPage(item)}>{item}</span>
                        })
                    }<span  onClick={()=>this.clickPage(this.state.current, '+')}>下一页</span>
                </div>
            </div> 
        }
    }

    Component.defaultProps = {
        total: 100,
        pageSize: 10
    }

    return Component;
}