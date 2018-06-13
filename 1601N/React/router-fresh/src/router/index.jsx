import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
    Link
} from 'react-router-dom';
import Index from '../components/index.jsx';
import '../scss/index.css';


const common = ({match})=>{
    return <p>这是{match.path.replace('/','')}页面</p>
}

export default ()=>(
    <Router>
        <div className="router">
            <div>
                <Switch>
                    <Route exact path="/" render={()=>{
                        return <Redirect to="/index"/>
                    }}></Route>
                    <Route path="/index" component={Index}></Route>
                    <Route path="/vip" component={common}></Route>
                    <Route path="/chart" component={common}></Route>
                    <Route path="/my" component={common}></Route>
                </Switch>
                <footer>
                    <Link to="/index">首页</Link>
                    <Link to="/vip">会员+</Link>
                    <Link to="/chart">购物车</Link>
                    <Link to="/my">我的</Link>
                </footer>
            </div>
            {/* <Route path="/index/:id" render={({match})=>{
                let id = match.params.id;
                return <div class="loading">{id}</div>
            }}></Route>          */}
        </div>
    </Router>
)