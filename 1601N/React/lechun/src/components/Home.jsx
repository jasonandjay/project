import React from 'react';
import {NavLink} from 'react-router-dom';
import Route from '../router/route.jsx';
import Cart from './home/Cart.jsx';
import '../scss/home.css';


export default class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            showCart: false
        }
    }

    hideCart(){
        this.setState({
            showCart: false
        })
    }

    render(){
        return <div className="home">
            <Route routes={this.props.childrenRoutes}/>
            <footer>
                <NavLink to="/home/main">主页</NavLink>
                <div onClick={()=>this.setState({showCart:true})}>
                    <span>购物袋</span>
                </div>
                <NavLink to="/home/my">我的</NavLink>
            </footer>
            {this.state.showCart?<Cart hideCart={this.hideCart.bind(this)}/>:null}
        </div>
    }
}