import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import Header from '../components/Header.jsx';
import Index from '../components/Index.jsx';
import Boild from '../components/Boild.jsx';


export default ()=>{
    return <Router>
        <div>
            <Header/>
            <Switch>
                <Route path="/boild" component={Boild}/>
                <Route component={Index}/>
            </Switch>
        </div>
    </Router>
}