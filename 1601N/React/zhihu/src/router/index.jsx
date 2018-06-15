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
    return <Router>
        <div className="container">
            <Route exact path="/" render={()=>{
                return <Redirect to="/tab"/>
            }}/>
            <Route path="/tab" render={()=>{
                return <div className="tab">
                    <div className="content">
                        <Route exact path="/tab/" render={()=>{
                            return <Redirect to="/tab/index"/>
                        }}/>
                        <Route path="/tab/index" component={Index}/>
                        <Route path="/tab/idea" component={Idea}/>
                        <Route path="/tab/university" component={University}/>
                        <Route path="/tab/message" component={Message}/>
                        <Route path="/tab/my" component={My}/>
                    </div>
                    <footer>
                        <Link to="/tab/index">首页</Link>
                        <Link to="/tab/idea">想法</Link>
                        <Link to="/tab/university">大学</Link>
                        <Link to="/tab/message">消息</Link>
                        <Link to="/tab/my">我的</Link>
                    </footer>
                </div>
            }}/>
            <Route path="/attDetail" component={AttDetail}/>
        </div>
    </Router>
}