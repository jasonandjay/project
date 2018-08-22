import React, { Component } from 'react'
import { connect } from 'react-redux'
import {NavLink, Link} from 'react-router-dom';

class Replaied extends Component {
    render() {
        console.log('replay..', this.props);
        return <div>{
            this.props.list.map((item, index)=>{
                return <li onClick={()=>{
                    this.props.history.push('/detail/'+item.id, {
                        item: item
                    })
                }}>
                    <div>
                        <p>{
                            item.isRead?null:<span>未读</span>
                        }
                        <span>{item.title}</span>
                        </p>
                    </div>
                    <p>
                        <span>￥{item.price}</span>
                        <span>已回复</span>
                        <span>精华</span>
                    </p>
                </li>
            })
        }</div>
    }
}

const mapStateToProps = state=>{
    return {
        list: state.list.filter(item=>item.isReplay)
    }
}

export default connect(mapStateToProps)(Replaied)