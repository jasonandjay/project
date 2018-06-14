import React from 'react';
import {
    HashRouter as Router,
    Route,
    Redirect,
    Link
} from 'react-router-dom';
import Index from '../components/Index.jsx';
import Idea from '../components/Idea.jsx';
import University from '../components/University';
import Message from '../components/Message';
import My from '../components/My';
import AttDetail from '../components/index/AttDetail';
import '../scss/router.css';

export default ()=>{
    console.log(window.location);
    let showFooter = true;
    let hash = window.location.hash;
    let indexRoute = ['#/index', '#/idea', '#/university', '#/message', '#/my'];
    if (indexRoute.indexOf(hash) != -1){
        showFooter = true;
    }else{
        showFooter = false;
    }
    return <Router>
        <div className="container">{
            showFooter?<div className="content">
                <Route exact path="/" render={()=>{
                    return <Redirect to="/index"/>
                }}/>
                <Route path="/index" component={Index}/>
                <Route path="/idea" component={Idea}/>
                <Route path="/university" component={University}/>
                <Route path="/message" component={Message}/>
                <Route path="/my" component={My}/>
            </div>:null}{
            showFooter?<footer>
                <Link to="/index">首页</Link>
                <Link to="/idea">想法</Link>
                <Link to="/university">大学</Link>
                <Link to="/message">消息</Link>
                <Link to="/my">我的</Link>
            </footer>:null}{
            showFooter?<div>
                <Route path="/attDetail" component={AttDetail}/>
            </div>:null
        }</div>
    </Router>
}