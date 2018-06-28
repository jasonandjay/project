import React from 'react';
// 引入类型检查库
import '../scss/list.css';
import {connect} from 'react-redux';

class List extends React.Component{
	constructor(){
		super();
	}

	render(){
		return <div className="list">{
			/**对比vue的v-for，react用map方法遍历数组*/
			this.props.list.map((item, index)=>{
				return <li key={index}>
					<input type="checkbox" checked={this.props.isSelectAll || item.checked}
					onChange={(e)=>{this.props.handleListSelect(item.id)}}/>
					<div className="list_box">
						<p>{item.name}</p>
						<div>
							<span onClick={()=>{
								this.props.handleNumChange(item.id, item.num+1);
							}}>+</span>
							<p>{item.num}</p>
							<span onClick={()=>{
								this.props.handleNumChange(item.id, item.num-1);
							}}>-</span>
						</div>
						<p>￥{item.price}</p>
					</div>
				</li>
			})
		}</div>
	}
}

const mapStatetoProps = (state)=>{
	console.log(state);
	return {
		list: state.list.list,
		isSelectAll: state.list.isSelectAll
	}
}

const mapDispatchtoProps = (dispatch)=>{
	return {
		handleNumChange: (id, num)=>{
			dispatch({
				type: 'CHANGE_NUM',
				text: {id, num}
			})
			dispatch({
				type: 'CHANGE_PRICE'
			})
		},
		handleListSelect: (id)=>{
			dispatch({
				type: 'SELECT_ITEM',
				text: {id}
			})
			dispatch({
				type: 'CHANGE_PRICE'
			})	
			dispatch({
				type: 'SELECT_ALL'
			})
		}
	}
}

export default connect(mapStatetoProps, mapDispatchtoProps)(List)