import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import RouterView from '../../router/RouterView';
import '../../scss/hot.css';
import WihAd from '../../hoc/widthAd';

class Hot extends Component {
    constructor(props){
        super(props);
        this.state = {
            city: ''
        }
    }

    location(){
        // fetch('http://ip.chinaz.com/getip.aspx')
        // .then(res=>res.json())
        // .then(body=>{
        //     console.log(body);
        // })
        let script = document.createElement('script');
        script.src = 'http://pv.sohu.com/cityjson?ie=utf-8';
        document.body.appendChild(script);
        script.onload = ()=>{
            this.setState({
                city: window.returnCitySN.cname
            })
        }
    }

    render() {
        return (
            <div className="hot">
                <header>
                    <span onClick={()=>this.location()}>定位: {this.state.city}</span>    
                    <NavLink to='/tab/hot/current'>正在热映</NavLink>
                    <NavLink to='/tab/hot/next'>即将上映</NavLink>
                </header>
                <section>
                    <RouterView routes={this.props.routes}></RouterView>
                </section>
            </div>
        )
    }
}

export default WihAd(Hot);