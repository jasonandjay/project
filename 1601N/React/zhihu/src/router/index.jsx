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
import '../scss/router.css';

export default ()=>{
    return <Router>
        <div className="container">
            <div>
                <Route exact path="/" render={()=>{
                    return <Redirect to="/index"/>
                }}/>
                <Route path="/index" component={Index}/>
                <Route path="/idea" component={Idea}/>
                <Route path="/university" component={University}/>
                <Route path="/message" component={Message}/>
                <Route path="/my" component={My}/>
            </div>
            <footer>
                <Link to="/index">首页</Link>
                <Link to="/idea">想法</Link>
                <Link to="/university">大学</Link>
                <Link to="/message">消息</Link>
                <Link to="/my">我的</Link>
            </footer>
        </div>
    </Router>
}