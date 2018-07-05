import React from 'react';
import List from './List';

export default class Cart extends React.Component{
    constructor(){
        super();
        this.state = {
            list: [],
            isSelectAll: false,
            price: 0
        }
    }

    // 相当于vue的Mounted
    componentDidMount(){
        fetch('/getData')
        .then(res=>{
            console.log('res...', res);
            return res.json()
        })
        .then(body=>{
            this.setState({list: body});
            // console.log('body...', body);
        })
    }

    // 列表选中点击
    selectItem(ind){
        let list = this.state.list;
        list.forEach((item,index)=>{
            if (index === ind){
                item.checked = !item.checked;
            }
        })
        this.setState({
            list
        }, ()=>{
            this.totalPirce();
        })
    }

    // 列表数量改变
    changeNum(ind, type){
        let list = this.state.list;
        list.forEach((item,index)=>{
            if (index === ind){
                if (type === '+'){
                    item.num += 1;
                }else{
                    if (item.num<1){
                        return;
                    }
                    item.num -= 1;
                }
            }
        })
        this.setState({
            list
        }, ()=>{
            this.totalPirce();
        })
    }

    // 购物车总价计算
    totalPirce(){
        let price = 0;
        this.state.list.forEach(item=>{
            if (item.checked){
                price += item.num*item.price;
            }
        })
        this.setState({
            price
        })
    }

    selectAll(e){
        let list = this.state.list;
        list.forEach(item=>{
            item.checked = e.target.checked;
        })
        this.setState({
            isSelectAll: e.target.checked,
            list
        }, ()=>{
            this.totalPirce();
        })
    }


    render(){
        return <div>
            <List list={this.state.list} 
            selectItem={this.selectItem.bind(this)}
            changeNum={this.changeNum.bind(this)}/>
            <div>
                <input type="checkbox" checked={this.state.isSelectAll} 
                onChange={e=>this.selectAll(e)}/>全选  
                <span>  价格：${this.state.price}</span>
            </div>
        </div>
    }
}