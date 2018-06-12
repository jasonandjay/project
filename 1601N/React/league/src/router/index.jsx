import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';
import Info from '../components/info.jsx';

const index = ({match, location})=>{
    return <div>
        <p>{JSON.stringify(match)}</p>
        <p>英雄联盟信息信息简介</p>
    </div>
}

const opera = ({match, location})=>{
    return <div>
        <p>{JSON.stringify(match)}</p>
        <p>{JSON.stringify(location)}</p>
        <p>{JSON.stringify(location.data)}</p>
        <p>腾讯公司</p>
    </div>
}

const bg = ({match, location})=>{
    return <div>
            <p>{JSON.stringify(match)}</p>
            <p>{JSON.stringify(location)}</p>
            <h1>英雄联盟</h1>
            <h2>《英雄联盟》是由Riot Games开发及发行的一款多人在线战术
            擂台游戏，游戏为免费模式进行并提供付费道具服务。该游戏是受到
            《魔兽争霸III：冰封王座》中的DotA模式启发而诞生，且至今仍不断
            定期更新</h2>
        </div>   
}

const intro = ()=>{
    return <div>
        <Link to="/intro/top">Top</Link>
        <Link to="/intro/jungle">Jungle</Link>
        <Link to="">Mid</Link>
        <Link to="">ADCarry</Link>
        <Link to="">Sup</Link>

        {/* <Route path="/intro/:info" component={heroInfo}></Route>  */}
        <Route path="/intro/:info" component={Info}></Route>   
    </div>
}

const heroInfo = (props)=>{
    return <div>
        <p>{JSON.stringify(props.match)}</p>
        <p>{props.match.params.info}</p>
    </div>
}

export default ()=>{
    return <Router>
        <div>
            <Link to="/bg/1?a=1&b=2">背景故事</Link>
            <Link to={{
                pathname: '/opera',
                data: {a:1,b:2}
            }}>运营信息</Link>
            <Link to="/intro">英雄简介</Link>

            <Switch>
                <Route exact path="/" component={index}></Route>
                <Route path="/bg/:id?" component={bg}
                onEnter={()=>{
                    console.log('进入路由')
                }}
                onLeave={()=>{
                    console.log('离开路由')
                }}></Route>
                <Route path="/opera" component={opera}></Route>
                <Route path="/intro" component={intro}></Route>
            </Switch>
           
            {/* <Route path="/bg" component={bg}></Route> */}
        </div>
    </Router>
}