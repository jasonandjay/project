import React from 'react';
import {
    NavLink,
} from 'react-router-dom';
import '../scss/tab.css';
import Route from '../router/route';


class Type extends React.Component{
    constructor(){
        super();
    }

    render(){
        return <div className="tab">
            <div>
                <Route routes={this.props.routes}></Route> 
            </div>   

            <footer>
                <NavLink to="/tab/index">首页</NavLink>
                <NavLink to="/tab/idea">想法</NavLink>    
                <NavLink to="/tab/university" replace={true}>大学</NavLink>    
                <NavLink to="/tab/message">消息</NavLink>    
                <NavLink to="/tab/my">我的</NavLink>    
            </footer>   
        </div>
    }
}

export default Type;