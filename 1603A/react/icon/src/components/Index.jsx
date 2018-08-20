import React, { Component } from 'react'
import '../font/iconfont.css';
import '../scss/index.css';
import {connect} from 'react-redux';

class Index extends Component {
    componentDidMount(){
        this.props.fetchData();
    }

    render() {
        return (
            <div className="index">{
                this.props.list.map((item, index)=>{
                    return  <li key={index}>
                        <i className={`icon iconfont ${item.iconName}`}></i>
                        <span>{item.name}</span>       
                        <div>
                            <i className='icon iconfont icon-cart'></i>
                            <i className='icon iconfont icon-shoucang'></i>
                            <i className='icon iconfont icon-xiazai'></i>
                        </div> 
                    </li>
                })
            }</div>
        )
    }
}

const mapStateToProps = state=>{
    return {
        list: state.index.list
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        fetchData: ()=>{
            fetch('/data.json')
            .then(res=>res.json())
            .then(body=>{
                console.log(body);
                body.arr.forEach(item=>{
                    item.isSelect = false;
                })
                dispatch({
                    type: 'FETCH_DATA',
                    payload: body.arr
                })
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);