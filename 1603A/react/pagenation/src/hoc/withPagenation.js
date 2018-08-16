import React, { Component } from 'react';

export default (WrapComponent)=>{
    class NewComponent extends WrapComponent{
        constructor(props){
            super(props);
            this.state = {...this.state, current: 1}
        }

        click(page){
            if (page > 0){
                this.setState({
                    current: page
                }, ()=>{
                    this.onChange(page);
                })
            }
        }

        render(){
            let len = Math.ceil(this.props.total/this.props.pageSize);
            let arr = [];
            for (let i=1;i<=len;i++){
                arr.push(i);
            }
            return <div>
                {super.render()}
                <section>
                    <span onClick={()=>{
                        this.click(this.state.current-1);
                    }}>上一页</span>{
                        arr.map((item, index)=>{
                            return <span onClick={()=>{
                                this.click(item);
                            }} className={item==this.state.current?'active':''} key={index}>{item}</span> 
                        })   
                    }<span onClick={()=>{
                        this.click(this.state.current+1);
                    }}>下一页</span>
                </section>
            </div>
        }
    }

    NewComponent.defaultProps = {
        total: 500,
        pageSize: 10
    };

    return NewComponent;
}