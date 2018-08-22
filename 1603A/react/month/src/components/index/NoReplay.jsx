import React, { Component } from 'react'
import { connect } from 'react-redux'
import {NavLink, Link} from 'react-router-dom';

class NoReplay extends Component {
    render() {
        console.log('props..', this.props);
        return <div>{
            this.props.list.map((item, index)=>{
                return <Link key={index} to={{
                    pathname: '/detail/'+item.id,
                    state: item
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
                        <span>未回复</span>
                        <span>精华</span>
                    </p>
                </Link>
            })
        }</div>
    }
}

const mapStateToProps = state=>{
    return {
        list: state.list.filter(item=>!item.isReplay)
    }
}

export default connect(mapStateToProps)(NoReplay)