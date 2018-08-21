import React, { Component } from 'react'
import '../font/iconfont.css';
import '../scss/index.css';
import {connect} from 'react-redux';

class Index extends Component {
    constructor(){
        super();
        this.state = {
            active: false
        }
    }


    componentDidMount(){
        this.props.fetchData();
    }

    componentWillReceiveProps(){
        this.setState({
            active: true
        })
    }

    render() {
        console.log('props...', this.props, this.state);
        return (
            <div className="index">{
                this.props.list.map((item, index)=>{
                    return  <li key={index} className={item.isSelect?'active':''}>
                        <i className={`icon iconfont ${item.iconName}`}></i>
                        <span>{item.name}</span>       
                        <div>
                            <i className='icon iconfont icon-cart'
                            onClick={()=>this.props.clickItem(index)}></i>
                            <i className='icon iconfont icon-shoucang'></i>
                            <i className='icon iconfont icon-xiazai'></i>
                        </div> 
                    </li>
                })
            }
            <div className="cart">
                <i className='icon iconfont icon-cart'></i>
                <span className={this.state.active?'active':''}
                onTransitionEnd={()=>{
                    this.setState({
                        active: false
                    })
                }}>{this.props.num}</span>    
            </div> 
            </div>
        )
    }
}

const mapStateToProps = state=>{
    return {
        list: state.index.list,
        num: (()=>{
            let num = 0;
            state.index.list.forEach(item=>{
                item.isSelect && num++;
            })
            return num;
        })()
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
        },
        clickItem: (index)=>{
            dispatch({
                type: 'CLICK_ITEM',
                payload: index
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);