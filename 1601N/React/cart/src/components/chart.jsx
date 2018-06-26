import React from 'react';
import List from './list.jsx';
import '../scss/chart.css';

export default class Chart extends React.Component{
	constructor(){
		super();
		// 对比我们vue的data
		this.state = {
			isSelectAll: false,
			price: 0,
			list: [{
				id: 0,
				checked: false,
				name: '西红柿',
				price: 100,
				num: 1
			},{
				id: 1,
				checked: false,
				name: '西瓜',
				price: 200,
				num: 1
			},{
				id: 2,
				checked: false,
				name: '西葫芦',
				price: 300,
				num: 1
			}]
		}
	}

	componentDidMount(){
		setTimeout(()=>{
			let list = this.state.list;
			list.push({
				id: 3,
				checked: false,
				name: '西柚',
				price: 500,
				num: 100
			})
			this.setState({
				list
			})
			console.log('refs...', this.refs);
		}, 1000);
	} 

	handleSelect(e){
		// console.log(e.target.value);
		// 对比vue中数据修改
		// this.isSelectAll = false;
		let list = this.state.list;
		list.forEach(item=>{
			item.checked = e.target.checked;
		})

		this.setState({
			isSelectAll: e.target.checked,
			list
		}, ()=>{
			console.log('数据修改完成...', this.state);
			this.handlePriceChange();
		})
	}

	// 处理列表元素的选中与取消
	handleListSelect(id, checked){
		console.log(this);
		let list = this.state.list;
		list[id].checked = checked;
		// 判断列表全选之后
		let isSelectAll = true;
		list.forEach(item=>{
			if (!item.checked){
				isSelectAll = false;
				return;
			}
		})
		this.setState({
			list,
			isSelectAll
		}, ()=>{
			this.handlePriceChange();
		})
	}

	// 处理列表元素数量的改变
	handleNumChange(id, type){
		let list = this.state.list;
		if (type === '+'){
			list[id].num++;
		}else if(type === '-'){
			if (list[id].num === 1){
				return;
			}
			list[id].num--;
		}
		this.setState({
			list
		}, ()=>{
			this.handlePriceChange();
		})
	}

	// 处理价格改变
	handlePriceChange(){
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

	refCb(){
		console.log('argument', arguments);
	}

	render(){
		return <div className="box">
			{/**对比Vue的props传递*/}
			<List list={this.state.list} ref={this.refCb} isSelectAll={this.state.isSelectAll}
			handleListSelect={this.handleListSelect.bind(this)}
			handleNumChange={this.handleNumChange.bind(this)}/>
			<div className="box_price">
				<input type="checkbox" checked={this.state.isSelectAll} onChange={(e)=>this.handleSelect(e)}/>全选
				<p>价格: ${this.state.price}</p>
			</div>
		</div>
	}
}