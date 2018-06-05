import React from 'react';
import List from './list.jsx';

export default class Chart extends React.Component{
	constructor(){
		super();
		// 对比我们vue的data
		this.state = {
			isSelectAll: true,
			list: [{
				name: '西红柿',
				price: 100,
				num: 0
			},{
				name: '西瓜',
				price: 200,
				num: 0
			},{
				name: '西葫芦',
				price: 300,
				num: 0
			}]
		}
	}

	handleSelect(e){
		// console.log(e.target.value);
		// 对比vue中数据修改
		// this.isSelectAll = false;
		this.setState({
			isSelectAll: e.target.checked
		}, ()=>{
			console.log('数据修改完成...', this.state)
		})
	}

	render(){
		return <div>
			{/**对比Vue的props传递*/}
			<List list={this.state.list} isSelectAll={this.state.isSelectAll}/>
			<div>
				<input type="checkbox" checked={this.state.isSelectAll} onChange={(e)=>this.handleSelect(e)}/>全选
				<p>价格: $100</p>
			</div>
		</div>
	}
}
