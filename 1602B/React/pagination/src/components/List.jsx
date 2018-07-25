import React from 'react';
import page from './hoc/page';

class List extends React.Component{
    constructor(props){
        super();
        let allList = [];
        for (let i=1;i<=500;i++){
            allList.push(i);
        }
        console.log('props...', props, allList.slice(0, props.pageSize));
        this.state= {
            allList,
            list: allList.slice(0, props.pageSize)
        }
    }

    pageChange(page){
        console.log('当前是第多少页...', page);
        let {pageSize} = this.props;
        this.setState({
            list: this.state.allList.slice((page-1)*pageSize, page*pageSize)
        })
    }

    render(){
        console.log(this);
        if (!this.state.list){
            return null;
        }
        return <div>{
            this.state.list.map((item, index)=>{
                return <p key={index}>我是第{item}条数据</p>    
            })
        }</div>
    }
}

export default page(List);