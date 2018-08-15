import React, { Component } from 'react'
import {connect} from 'react-redux';

class Left extends Component {
    componentDidMount(){
        let i = 0;
        setInterval(()=>{
            this.props.updateList(i++);
        }, 1000);
    }
    render() {
        console.log('props...', this.props);
        let {list, countryIndex, provinceIndex} = this.props;
        if (!list.length){
            return null;
        }

        let provinces = list[countryIndex].list;
        return  <aside>{
            provinces.map((item, index)=>{
                return <li key={index} onClick={()=>{
                    this.props.provinceClick(index);    
                }}>{item.name}</li>
            })
        }</aside>
    }
}

const mapStateToProps = (state)=>{
    return state
}

const mapDispatchToProps = (dispatch)=>{
    return {
        provinceClick: (index)=>{
            dispatch({
                type: 'PROVINCE_CLICK',
                payload: index
            })
        },
        updateList: (list)=>{
            dispatch({
                type: 'UPDATE_LIST',
                payload: list
            })
        }
    }
}

/**
 * 合并props
 * @param stateProps  是mapStateToProps的返回值
 * @param dispatchProps 是mapDispatchToProps的返回值
 * @param ownProps 是调用时传入的props
 */ 
const mergeProps = (stateProps, dispatchProps, ownProps)=>{
    return {...stateProps, ...dispatchProps, ...ownProps};
    return {
        stateProps,
        dispatchProps,
        ownProps
    }
}

/**
 * 可选配置项
 * pure: 表示state需要深拷贝才会响应
 */
const options = {
    pure: false
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps, options)(Left);