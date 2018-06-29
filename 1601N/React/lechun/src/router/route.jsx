import React,{Fragment} from 'react';
import {
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

export default (props)=>{
    return <Fragment>
        <Switch>{
            props.routes.map((item, index)=>{
                return <Route key={index} path={item.path} render={(...route)=>{
                    if (item.children){
                        return <item.component {...route} childrenRoutes={item.children}/>
                    }else{
                        return <item.component {...route}/>
                    }
                }}/>
            })
        }<Redirect to="/home/main" />
        </Switch>
    </Fragment>
}