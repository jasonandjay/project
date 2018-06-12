import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch
} from 'react-router-dom';
import Com from '../components/com.jsx';
import Login from '../components/login.jsx';

const bg = ({match, location, history})=>{
    return <div>
        {/* <p>{JSON.stringify(match)}</p> */}
        <p>英雄联盟背景故事</p>
    </div>
}

const opera = ({match, location, history})=>{
    return <div>
        {/* <p>{JSON.stringify(match)}</p> */}
         {/* <p>{JSON.stringify(location)}</p> */}
        <p>英雄联盟运营商：腾讯</p>
    </div>
}

const intro = ()=>{
    return <div>
         <ul>
            <li><NavLink to="/intro/top" activeClassName="li-active">Top</NavLink> </li>
            <li><NavLink to="/intro/jungle">Jungle</NavLink> </li>
            <li><NavLink to="/intro/mid">mid</NavLink> </li>
            <li><NavLink to="/intro/ad">ADCarry</NavLink> </li>
            <li><NavLink to="/intro/sup">Support</NavLink> </li>
        </ul>

        <Route path="/intro/:info" component={(props)=>{
            return <p>我是{props.match.params.info}位置</p>
        }}></Route>   
    </div>
}

export default ()=>{
    return <Router>
        <div> 
            <ul>
                <li><Link to="/bg">背景故事</Link> </li>
                <li><Link to={{
                    pathname: '/opera',
                    data: {a:1,b:2}
                }}>运营信息</Link>  </li>
                <li><Link to="/intro">英雄简介</Link></li>
            </ul>

            <Switch>
                <Route exact path="/" component={(props)=>{
                    let timestamp = +new Date();
                    // 写登录逻辑判断
                    if (timestamp%2){
                        // 纯组件组件的return 方式
                        // return bg(props);

                        // 常规组件的return 方式
                        return <Com/>;
                    }else{
                        // return opera(props);
                        return <Login/>;
                    }
                }}></Route>
                <Route path="/bg/:id?" component={bg}></Route>
                <Route path="/opera" component={opera}></Route>
                <Route path="/intro" component={intro}></Route>
             </Switch>
        </div>
    </Router>
}