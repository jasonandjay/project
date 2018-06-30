import React from 'react';
import Header from './main/Header';
import Content from './main/Content';
import {connect} from 'react-redux';
import {Spin} from 'antd';
import Route from '../../router/route';
import 'antd/lib/spin/style/css';

class Main extends React.Component{
    constructor(){
        super()
    }

    componentDidMount(){
        this.props.fetchData();
    }

    render(){
        console.log('list...', this.props.list);
        if (this.props.loading){
            return <Spin/>
        }
        // 获取顶部导航
        let navList = [];
        this.props.list.forEach((item)=>{
            navList.push(item.navName);
        })

        return <div className="main">
            <Header navList={navList}>
                <p>我是header组件里面的P标签</p>
            </Header>
            <Route routes={this.props.childrenRoutes}></Route>
        </div>
    }
}


const mapStoP = (state)=>{
    console.log('state...', state);
    return {
        loading: state.main.loading,
        list: state.main.list
    }
}
const mapDtoP = (dispatch)=>{
    return {
        fetchData: ()=>{
            dispatch((dispatch, getState)=>{
                // thunk逻辑
                dispatch({
                    type: 'LOADING',
                    text: true
                })
                fetch('https://www.easy-mock.com/mock/5b07e9e47bebfe1c7e53d33e/example_copy/lechun')
                    .then(res=>{
                        res.json().then(body=>{
                            dispatch({
                                type: 'LOADING',
                                text: false
                            });
                            body.forEach((item,index)=>{
                                item.items && item.items.forEach((value,key)=>{
                                    value.id = index+'_'+key;
                                    value.num = 0;
                                })
                            })
                            dispatch({
                                type: 'INIT_DATA',
                                text: body
                            })
                        })
                    })
            })
        }
    }
}

export default connect(mapStoP, mapDtoP)(Main)