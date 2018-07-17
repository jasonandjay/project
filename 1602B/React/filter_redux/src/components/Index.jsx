import React from 'react';
import {connect} from 'react-redux';
import '../scss/index.css';

class Index extends React.Component{
    constructor(){
        super();
    }

    render(){
        console.log(this.props);
        return <div>
            <ul>
                <li>搜索条件：</li>{
                    this.props.select.map((item, index)=>{
                        return <li key={index} onClick={()=>this.props.subSelect('SUB_SELECT', item)}>{item}</li>
                    })
                }<li onClick={()=>this.props.clear()}>清楚所有条件</li>
            </ul>
            <ul>
                <li>品种：</li>{
                    this.props.list.map((item, index)=>{
                        return <li key={index} className={this.props.select.indexOf(item)==-1?'': 'active'} onClick={()=>this.props.addSelect('ADD_SELECT', item)}>{item}</li>
                    })
                }<li>多选: <input type="checkbox" checked={this.props.flag} onChange={()=>this.props.changeFlag()}/></li>
            </ul>
        </div>
    }
}

/** 把state映射成props
 * @param state redux中存储的数据
 * @param ownProps 组件调用传递的props
 * @return {} 返回一个对象
 */
const mapStateToProps = (state, ownProps)=>{
    return state;
}

/** 利用dispatch封装方法并把方法映射成props
 * @param disptach redux中触发action的方法
 * @param ownProps 组件调用传递的props
 * @return {} 返回一个对象
 */
const mapDispatchToProps = (dispatch, ownProps)=>{
    return {
        addSelect: (type, payload)=>dispatch({type, payload}),
        subSelect: (type, payload)=>dispatch({type, payload}),
        changeFlag: ()=>dispatch({type: 'SWITCH'}),
        clear: ()=>dispatch({type: 'CLEAR'})
    }
}

/** 合并props
 * @param stateProps mapStateToProps的返回值
 * @param dispatchProps mapDispatchToProps的返回值
 * @param ownprops 组件调用时传递的props
 * @return {} 合并后的props
 */
const mergeProps = (stateProps, dispatchProps, ownProps)=>{
    return {...stateProps, ...dispatchProps, ...ownProps}
}

/** connect配置
 * pure:true true表示reduce需要深拷贝, false表示reduce需要浅拷贝
 */
const options = {
    pure: true
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps, options)(Index);