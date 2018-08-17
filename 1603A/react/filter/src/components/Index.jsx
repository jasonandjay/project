import React, { Component } from 'react'
import {connect} from 'react-redux';
import '../scss/index.css';

class Index extends Component {
    constructor(){
        super();
        this.state = {
            snows: []
        }
    }

    componentDidMount(){
        // 随机下雪花
        setInterval(()=>{
            let x = Math.random()*(window.innerWidth-50);
            let duration = Math.random()*3000+4000;
            let scale = Math.random()*2+1;
            let id = +new Date();
            let snows = this.state.snows;
            snows.push({
                id: id,
                start: false,
                duration,
                x,
                scale
            })
            this.setState({
                snows
            }, ()=>{
                setTimeout(()=>{
                    let snows = this.state.snows;
                    snows.forEach((item)=>{
                        if (item.id == id){
                            item.start = true;
                            this.setState({
                                snows
                            })
                        }
                    })
                }, 10);
            })
        }, 300);
    }

    removeSnow(id){
        let index = this.state.snows.findIndex(item=>item.id==id);
        let snows = this.state.snows;
        snows.splice(index, 1);
        this.setState({
            snows
        })
    }

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
                <div className="snow">{
                    this.state.snows.map((item, index)=>{
                        let style = {
                            left: item.x,
                            transition: `transform ${item.duration}ms linear`
                        }
                        if (item.start){
                            style.transform = `translate3d(0, ${window.innerHeight+100}px, 0)`
                        }
                        return <p key={index} style={style}
                        onTransitionEnd={()=>{
                            // this.removeSnow(item.id);
                        }}>❄</p>
                    })
                }</div>
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