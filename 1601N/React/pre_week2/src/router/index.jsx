import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'; 
import List from '../components/List';
import Detail from '../components/Detail';

export default ()=>{
    return <Router>
        <div>
            <Switch>
                <Route path="/detail" component={Detail}/>
                <Route path="/" component={List}/>
            </Switch>
        </div>
    </Router>
}