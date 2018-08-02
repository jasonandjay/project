import React from 'react';
import { setInterval } from 'timers';
import Child from './Child';

export default class Index extends React.Component{
    constructor(props){
        super(props);
        // 初始化state
        this.state = {
            msg: 'hello world',
            index: 0,
            showTip: 1,
            list: [1,2,3,4,5,6,7,8,9,10],
            obj: {
                msg: '123'
            }
        };
    }

    // 组件挂在完成之后触发的生命周期
    componentDidMount(){
        // setInterval(()=>{
            /** 修改state的唯一方法
             * @param 要修改的数据
             * @param 修改完成之后的回调函数
             */
            let {obj} = this.state;
            obj.msg = 456;

            this.setState({
                index: this.state.index+1,
                obj 
            }, ()=>{
                console.log(this.state.index);
            })
        // }, 1000);
    }

    click(e){
        console.log(this);
        console.log(e, e.target, e.currentTarget);
        alert('触发了点击事件');
        // 阻止事件默认行为
        e.preventDefault();
        // 阻止事件冒泡
        e.stopPropagation();
    }

    divClick(e){
        console.log('div...', e);
    }

    updateList(list){
        this.setState({
            list: this.state.list.concat(list)
        })    
    }
    
    // 绘制组件函数
    render(){
        return <div onClick={(e)=>this.divClick(e)}>
            <h3>{this.state.msg}{this.state.index}</h3>
            <a href="http://www.baidu.com" onClick={(e)=>this.click(e, 123, 456)}>
                <span>点击我</span>
            {this.state.obj.msg}</a>
            {this.state.showTip!=1?this.state.showTip!=2?this.state.showTip!=3?<p>我不是3</p>:<p>我是3</p>:null:null}
           
            <Child list={this.state.list} updateList={this.updateList.bind(this)}>
                {this.state.list.map((item, index)=>{
                    return <li key={index}>{item}</li>
                })}
            </Child>
        </div> 
    }
}