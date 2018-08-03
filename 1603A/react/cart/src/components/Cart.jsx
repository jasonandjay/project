import React from 'react';
import List from './List';
import axios from 'axios';
import '../scss/cart.css';

export default class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list: [],           // 商品列表
            price: 0,           // 商品总价
            num: 0,             // 选中的商品数量
            isSelectAll: false  // 是否选中全部
        }
    }

    componentDidMount(){
        axios.get('https://www.easy-mock.com/mock/5af6599acf64741ceacf1c57/es6/goods')
        .then(res=>{
            this.setState({
                list: res.data
            })
        })
    }

    // 处理商品的选中
    itemSelect(ind){
        let flag = true;
        let {list} = this.state;
        list.forEach((item, index)=>{
            if (index == ind){
                item.checked = !item.checked;
            }
            if (!item.checked){
                flag = false;
            }
        })
        this.setState({
            list,
            isSelectAll: flag
        })
    }

    // 处理商品数量改变
    changeNum(ind, type){
        let {list} = this.state;
        list.forEach((item, index)=>{
            if (index == ind){
                if (type == '+'){
                    item.num++;
                }else{
                    if (item.num>0){
                        item.num--;
                    }
                }
            }
        })
        this.setState({
            list
        })
    }

    // 处理全选按钮
    selectAll(value){
        let {list} = this.state;
        list.forEach((item, index)=>{
            item.checked = value;
        });
        this.setState({
            list,
            isSelectAll: value
        })
    }

    // 计算商品总价
    totalPrice(){
        let price = 0;
        this.state.list.forEach((item)=>{
            if (item.checked){
                price += item.num*item.price;
            }
        })
        return price;
    }

    // 计算商品数量
    totalNum(){
        let num = 0;
        this.state.list.forEach((item)=>{
            if (item.checked){
                num += item.num;
            }
        })
        return num;
    }

    render(){
        return <div className="cart">
            <List list={this.state.list}
                itemSelect={this.itemSelect.bind(this)}
                changeNum={this.changeNum.bind(this)}/>
            <footer style={{fontSize:20, display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <div>
                    <input id="input" type="checkbox" checked={this.state.isSelectAll} onChange={
                        e=>this.selectAll(e.target.checked)
                    }/>
                    <label htmlFor="input">全选</label>
                </div>
                <p>数量：{this.totalNum()}</p>
                <p>总价：{this.totalPrice()}</p>
            </footer>
        </div>;
    }
}