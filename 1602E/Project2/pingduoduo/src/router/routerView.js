import React from 'react';
import {Switch, Redirect, Route} from 'dva/router';

export default (props)=>{
  return <Switch>{
    props.routes.map((item, index)=>{
      console.log(item.path);
      return <Route path={item.path} key={index} render={(props)=>{
        if (item.children){
          return <item.component {...props} routes={item.children}></item.component>
        }else{
          return <item.component {...props}></item.component>
        }
      }}></Route>
    })
  }<Redirect from="/" exact to="/tab/index"></Redirect>
  }</Switch>
}
