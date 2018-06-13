import React from 'react';
import {
    HashRouter as Router,
    Route,
    Redirect,
    Link
} from 'react-router-dom';
import Gallery from '../components/Gallery.jsx';
import '../scss/index.css';

export default ()=>{
    return <Router>
        <div>
            <div>
                <Route exact path="/" render={()=>{
                    return <Link to="/gallery">Visit the Gallery.</Link>
                }}/>
                <Route path="/gallery" component={Gallery}></Route>
                {/* <Route path="/img/:id" render={()=>{
                    return <Redirect to="/gallery"/>
                }}></Route> */}
            </div>
            {/* <Route path="/img/:id?" redner={(match)=>{
                return <div class="mask">
                    <h3></h3>
                    <div></div>
                </div>
            }}></Route>            */}
        </div>
    </Router>
}