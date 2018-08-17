import React, { Component } from 'react'
import {connect} from 'react-redux';
import '../scss/index.css';

class Index extends Component {
    render() {
        console.log(this.props);
        // 获取选中的数据
        let select = this.props.list.filter(item=>{
            return item.isSelect;
        })
        console.log('select...', select);
        if (!this.props.isMulti){
            if (select.length){
                select = [select[0]]
            }else{
                select = [];
            }
        }
        return (
            <div>
                <section>
                    <span>搜索条件：</span><div>{
                        select.map((item, index)=>{
                            return <span  className="active" key={index} onClick={()=>{
                                this.props.removeItem(item.id);
                            }}>{item.name}</span>
                        })
                    }</div><span onClick={()=>{
                        this.props.removeAll();
                    }}>清除所有条件</span>
                </section>
                <section>
                    <span>品种</span><div>{
                        this.props.list.map((item, index)=>{
                            return <span key={index} onClick={()=>{
                                this.props.itemClick(index);
                            }} className={item.isSelect?'active':''}>{item.name}</span>
                        })
                    }</div><span onClick={()=>{
                        this.props.changeMulti(this.props.isMulti);
                    }}>{this.props.isMulti?'多选':'单选'}</span>
                </section>  
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return state.index
}

const mapDispatchToProps = (dispatch)=>{
    return {
        itemClick: (index)=>{
            dispatch({
                type: 'ITEM_CLICK',
                payload: index
            })
        },
        removeItem: (index)=>{
            dispatch({
                type: 'REMOVE_ITEM',
                payload: index
            })
        },
        removeAll: ()=>{
            dispatch({
                type: 'REMOVE_ALL'
            })
        },
        changeMulti: (value)=>{
            if (value){
                dispatch({
                    type: 'SINGLE_SELECT'
                })
            }
            dispatch({
                type: 'CHANGE_MULTI'
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);