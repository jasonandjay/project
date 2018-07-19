import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import '../scss/index.css';
import Loading from './common/loading';

class Cart extends React.Component{
    constructor(){
        super()
    }

    componentDidMount(){
        this.props.updateList();
    }

    render(){
        if (!this.props.isLogin){
            return <Redirect to="/login"/>
        }
       
        return <div>
            <ul className="list">{
                this.props.list.map((item, index)=>{
                    return <li key={index}>
                        <input type="checkbox" checked={item.isSell} onClick={()=>this.props.selectItem(index)}/>
                        <span>{item.name}</span>
                        <div>
                            <span onClick={()=>this.props.changeNum(index, '+')}>+</span>
                            <span>{item.num}</span>
                            <span onClick={()=>this.props.changeNum(index, '-')}>-</span>    
                        </div>
                        <p>价格：￥{item.price}</p>
                    </li>   
                })
            }</ul>
            <div className="info">
                <label>全选</label>
                <input onChange={(e)=>this.props.selectAll(e.target.checked)} checked={this.props.isSelectAll} type="checkbox"/>
                <span>总价:{this.props.price}</span>
            </div>
            {this.props.loading?<Loading/>:null}
        </div>
    }
}


const mapStateToProps = (state)=>{
    console.log('state...', state);
    return {
        loading: state.cart.loading,
        isLogin: state.login.isLogin,
        list: state.cart.list,
        price: state.cart.price,
        isSelectAll: state.cart.isSelectAll
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        // updateList: ()=>{
        //     fetch('https://www.easy-mock.com/mock/5af9069b113f91088393ac5f/example/carshop')
        //     .then(res=>{
        //         return res.json();
        //     })
        //     .then(body=>{
        //         console.log('body...', body);
        //         dispatch({
        //             type: 'UPDATE_LIST',
        //             payload: body.data.list
        //         })
        //     })
        // },
        updateList: ()=>{
            dispatch((dispatch, getState)=>{
                console.log('state........', getState());
                dispatch({type: 'CHANGE_LOADING',payload:true});
                fetch('https://www.easy-mock.com/mock/5af9069b113f91088393ac5f/example/carshop')
                .then(res=>{
                    return res.json();
                })
                .then(body=>{
                    console.log('body...', body);
                    setTimeout(()=>{
                        dispatch({type: 'CHANGE_LOADING',payload:false});
                    }, 2000);
                    dispatch({
                        type: 'UPDATE_LIST',
                        payload: body.data.list
                    })
                })
            })
        },
        selectItem: (index)=>{
            dispatch({
                type: 'SELECT_ITEM',
                payload: index
            })
            dispatch({type: 'TOTAL_PRICE'})
        },
        changeNum: (index, type)=>{
            dispatch({
                type: 'CHANGE_NUM',
                payload: {
                    index,
                    type
                }
            })
            dispatch({type: 'TOTAL_PRICE'})
        },
        selectAll: (val)=>{
            dispatch({type: 'SELECT_ALL'});
            dispatch({type: 'SELECT_ALL_ITEM', payload:val})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);