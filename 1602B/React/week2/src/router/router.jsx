import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';

export default (props)=>{
    return  <Switch>{
        props.routes.map((item, index)=>{
            return <Route exact path={item.path} key={index} render={(location)=>{
                if (item.redirect){
                    return <Redirect to={item.redirect}/>
                }else if (item.children){
                    return <item.component {...location} routes={item.children}/>
                }else{
                    return <item.component {...location}/>
                }
            }}></Route>
        })  
        }
        {/* <Redirect from="/" exact to="/list"></Redirect> */}
    </Switch>
}