import React from 'react';

export default class List extends React.Component{
	constructor(){
		super();
	}

	// 对比vue组件生命周期的mounted
	componentDidMount(){
		console.log('this.props...', this.props);
	}

	render(){
		return <div>{
			/**对比vue的v-for，react用map方法遍历数组*/
			this.props.list.map((item, index)=>{
				return <li key={index}>
					<input type="checkbox" checked={this.props.isSelectAll}/>
					<div>
						<p>{item.name}</p>
						<p>{item.num}</p>
						<p>{item.price}</p>
					</div>
				</li>
			})
		}</div>
	}
}
