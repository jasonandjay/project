import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    NavLink,
    Switch
} from 'react-router-dom';
import Loadable from 'react-loadable';


import Com from '../components/com.jsx';
import Login from '../components/login.jsx';

// import bg from '../components/bg.jsx';
// import opera from '../components/opera.jsx';
// import intro from '../components/intro.jsx';

const Bg = Loadable({
    loader: ()=>import('../components/bg.jsx'),
    loading: ()=>{return null}
})

const opera = Loadable({
    loader: ()=>import('../components/opera.jsx'),
    loading: ()=>{return null}
})

const intro = Loadable({
    loader: ()=>import('../components/intro.jsx'),
    loading: ()=>{return null}
})



// const bg = ({match, location, history})=>{
//     return <div>
//         {/* <p>{JSON.stringify(match)}</p> */}
//         <p>英雄联盟背景故事</p>
//     </div>
// }

// const opera = ({match, location, history})=>{
//     return <div>
//         {/* <p>{JSON.stringify(match)}</p> */}
//          {/* <p>{JSON.stringify(location)}</p> */}
//         <p>英雄联盟运营商：腾讯</p>
//     </div>
// }

// const intro = ()=>{
//     return <div>
//          <ul>
//             <li><NavLink to="/intro/top" activeClassName="li-active">Top</NavLink> </li>
//             <li><NavLink to="/intro/jungle">Jungle</NavLink> </li>
//             <li><NavLink to="/intro/mid">mid</NavLink> </li>
//             <li><NavLink to="/intro/ad">ADCarry</NavLink> </li>
//             <li><NavLink to="/intro/sup">Support</NavLink> </li>
//         </ul>

//         <Route path="/intro/:info" component={(props)=>{
//             return <p>我是{props.match.params.info}位置</p>
//         }}></Route>   
//     </div>
// }

fetch('/login', {

}).then(res=>{
    res.json().then(body=>{
        console.log('body...', body);
    })
})

export default ()=>{
    return <Router>
        <div> 
            <ul>
                <li><Link to="/bg/100">背景故事</Link> </li>
                <li><Link to={{
                    pathname: '/opera',
                    data: {a:1,b:2}
                }} replace={true}>运营信息</Link>  </li>
                <li><Link to="/intro">英雄简介</Link></li>
            </ul>

            <Switch>
                <Route exact={true} path="/" component={(props)=>{
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
                {/* 可以同时匹配/bg 和 /bg/100 */}
                <Route path="/bg/:id?" render={()=>{
                    // return <Redirect to="/opera"/>
                    return <Bg />
                }}></Route> 
                <Route path="/opera" component={opera}></Route>
                <Route path="/intro" component={intro}></Route>
             </Switch>
        </div>
    </Router>
}