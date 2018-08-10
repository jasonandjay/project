import React, { Component, Fragment } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';


// 如何在无状态组件中获取路由信息
const A = (props)=>{
    return <div>{JSON.stringify(props)}</div>
}

// 如何在普通组件中获取路由信息
class B extends Component{
    render(){
        return <div>{JSON.stringify(this.props)}</div>
    }
}

export default class Index extends Component {
    render() {
        return <Router>
            <Fragment>
                {/* switch表示返回匹配的第一个路由 */}
                <Switch>
                    {/* exact表示精准匹配，当path与当前路径一摸一样时才匹配 */}
                    {/* <Route exact path='/' component={()=><h1>我是根路由</h1>}/> */}
                    {/* 占位标签，如果path与当前路径匹配，渲染component */}
                    <Route path='/index/:id?' component={A}/>
                    <Route path='/logistics' component={B}/>
                    <Route path='/cart' component={B}/>
                    <Route path='/taobao' component={()=><h1>我的淘宝</h1>}/>
                    <Route path='/more' component={()=><h1>我是更多</h1>}/>

                    {/* 当route不给path属性时会匹配任意路由 */}
                    {/* <Route component={()=><h1>未匹配的路由</h1>}></Route> */}
                    
                    {/* 当redirect不给from属性时也会匹配任意路由 */}
                    <Redirect exact from="/" to="/index"></Redirect>
                </Switch>
               

                <footer>
                    {/* 导航标签 to属性声明要跳转的路径*/}
                    <Link to="/index/10">首页</Link>
                    <Link to="/logistics?a=1&b=2" replace>物流</Link>
                    <Link to={{
                        pathname: '/cart',
                        data: {a:1,b:2}
                    }}>购物车</Link>
                    <Link to="/taobao" replace>我的淘宝</Link>
                    <Link to="/more">更多</Link>
                    {/* <Redirect exact from="/" to="/index"></Redirect> */}
                </footer>

                <button onClick={()=>{
                    // window.history.go(-1);
                    window.history.back();
                }}>回退</button>
            </Fragment>
        </Router>
            
    }
}
