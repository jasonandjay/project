import React from 'react';
// 引入类型检查库
import PropTypes from 'prop-types';
import '../scss/list.css';
import {connect} from 'react-redux';
import {
	changeNum,
	selectItem
} from '../actions/actions';

class List extends React.Component{
	constructor(){
		super();
		this.state = {
			showInput: true
		}
	}

	// 对比vue组件生命周期的mounted
	componentDidMount(){
		console.log('this.props...', this.props);
	}

	componentWillReceiveProps(props){
		console.log('props...', props);
	}

	render(){
		return <div className="list">{
			/**对比vue的v-for，react用map方法遍历数组*/
			this.props.list.map((item, index)=>{
				return <li key={index}>
					<input type="checkbox" checked={item.checked}
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

// prop类型检查
List.propTypes = {
	list: PropTypes.array
}

// prop默认值
List.defaultProps = {
  	isSelectAll: true
};

const mapStatetoProps = (state)=>{
	console.log(state);
	return {
		list: state.list.list
	}
}

const mapDispatchtoProps = (dispatch)=>{
	return {
		handleNumChange: (id, num)=>dispatch(changeNum({id, num})),
		handleListSelect: (id)=>dispatch(selectItem({id}))
	}
}

export default connect(mapStatetoProps, mapDispatchtoProps)(List)