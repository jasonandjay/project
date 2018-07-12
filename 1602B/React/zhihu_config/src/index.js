import React, {Fragment} from 'react';
import Route from './router/route';
import ReactDOM from 'react-dom';
// import Router from './router/index';
import {
    HashRouter as Router,
    NavLink,
} from 'react-router-dom';
import config from './router/router.config.js';
import './scss/router.css';


ReactDOM.render(<Router>
     {/*  空标签，占位使用，为了解决部分标签只能有一个child element */}
     <Fragment>
            {/* 包裹要渲染的路由区域 */}
            <Route routes={config.routes}></Route>   

            <footer>
                {/* Link标签，用于路由跳转 to属性*/}
                <NavLink activeClassName="active" to="/index">首页</NavLink>
                <NavLink to="/type">分类</NavLink>    
                <NavLink to="/discover" replace={true}>发现</NavLink>    
                <NavLink to="/cart">购物车</NavLink>    
                <NavLink to="/my">我的</NavLink>    
            </footer>     
        </Fragment> 
</Router>  , document.getElementById('root'));