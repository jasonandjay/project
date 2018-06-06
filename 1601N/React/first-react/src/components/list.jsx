import React from 'react';
import PropTypes from 'prop-types';

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
					<input type="checkbox" checked={this.props.isSelectAll || item.checked}
					onChange={(e)=>{this.props.handleListSelect(item.id, e.target.checked)}}/>
					<div>
						<p>{item.name}</p>
						<div>
							<span onClick={()=>{
								this.props.handleNumChange(item.id, '+');
							}}>+</span>
							<p>{item.num}</p>
							<span onClick={()=>{
								this.props.handleNumChange(item.id, '-');
							}}>-</span>
						</div>
						<p>{item.price}</p>
					</div>
				</li>
			})
		}</div>
	}
}


List.propTypes = {
	list: PropTypes.array
}

List.defaultProps = {
  	isSelectAll: false
};