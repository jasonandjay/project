import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

export default (props)=>{
    return <Switch>
        {
            props.routes.map((item, index)=>{
                return <Route key={index} path={item.path} render={(props)=>{
                    if (item.children){
                        return <item.component {...props} routes={item.children}/>
                    }else{
                        return <item.component {...props}/>
                    }
                }}></Route>
            })
        }
        <Redirect exact from="/" to="/tab"></Redirect>
    </Switch>
}