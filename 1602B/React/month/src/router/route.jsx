import React from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

export default (props)=>{
    return <Switch>{
            props.routes.map((item, index)=>{
                return <Route path={item.path} key={index} render={(location)=>{
                    if (item.children){
                        return <item.component {...location} routes={item.children}/>
                    }else{
                        return <item.component {...location}/>
                    }
                }}></Route>
            })
        }
        <Redirect exact from="/" to="/input"></Redirect>
    </Switch>
}