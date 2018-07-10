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

const Index = (props)=>{
    let path = props.match.path;
    return <p>我是{
        path=='/index'?'首页':
        path=='/logistics'?'物流':
        path=='/cart'?'购物车':
        path=="/taobao"?'淘宝':'更多'
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
                    <Route path="/logistics" component={Index}></Route>  
                    <Route path="/cart" component={Index}></Route>  
                    <Route path="/taobao" component={Index}></Route>                 
                    <Route path="/more" component={Index}></Route>  
                    {/* exact关键字，表示精准匹配 */}
                    {/* <Route path="/" render={
                        ()=>{
                            // Redirect标签，用于路由重定向，from 和 to属性
                            return  <Redirect to="/index"></Redirect>
                        }
                    }></Route> */}
                    {/* <Redirect to="/more"></Redirect> */}
                    <Route component={Index}></Route>
                </Switch>
            </div> 

            <footer>
                {/* Link标签，用于路由跳转 to属性*/}
                <NavLink activeClassName="active1" to="/index">首页</NavLink>
                <NavLink to="/logistics">物流</NavLink>    
                <NavLink to="/cart">购物车</NavLink>    
                <NavLink to="/taobao">我的淘宝</NavLink>    
                <NavLink to="/more">更多</NavLink>    
            </footer>     
        </Fragment> 
    </Router>
}
