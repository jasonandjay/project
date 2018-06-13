import React from 'react';
import {
    NavLink,
    Route
} from 'react-router-dom';

export default  ()=>{
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