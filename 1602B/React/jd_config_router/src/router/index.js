import React,{Fragment} from 'react';
import {
    HashRouter as Router,
    Link,
    NavLink,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import '../scss/router.css';
import Type from '../components/type';

const Index = (props)=>{
    let path = props.match.path;
    return <p>我是{
        path=='/index'?'首页':
        path=='/type'?'分类':
        path=='/discover'?'发现':
        path=="/cart"?'购物车':'我的'
    }</p>
}



export default ()=>{
            // 包裹根元素，决定路由方式：hash 还是 Browser
    return <Router>
        {/*  空标签，占位使用，为了解决部分标签只能有一个child element */}
        <Fragment>
            {/* 包裹要渲染的路由区域 */}
            <div>
                <Switch>
                     {/* 路由匹配标签，匹配到pth就会渲染，两种渲染方式 component 和 render */}
                    <Route path="/index" component={Index}></Route>
                    <Route path="/type" component={Type}></Route>  
                    <Route path="/discover" component={Index}></Route>  
                    <Route path="/cart" component={Index}></Route>                 
                    <Route path="/my" component={Index}></Route>  
        
                    <Redirect to="/index"></Redirect>
                </Switch>
            </div> 

            <footer>
                {/* Link标签，用于路由跳转 to属性*/}
                <NavLink activeClassName="active" to="/index">首页</NavLink>
                <NavLink to="/type">分类</NavLink>    
                <NavLink to="/discover">发现</NavLink>    
                <NavLink to="/cart">购物车</NavLink>    
                <NavLink to="/my">我的</NavLink>    
            </footer>     
        </Fragment> 
    </Router>
}
