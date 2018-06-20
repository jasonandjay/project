import React,{ Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

class Router extends Component{
    render(){
        return(
            <Switch>
            {
                this.props.routes.map((item,index)=>{
                    return <Route path={item.path} render={(location)=>{
                        if(item.children){
                            return <item.component {...location} childRoutes={item.children} />
                        }else{
                            return <item.component {...location} />
                        }
                    }} key={item.id}></Route>
                })    
            }
            </Switch> 
        )
    }
}
export default Router
