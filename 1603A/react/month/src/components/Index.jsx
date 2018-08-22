import React, { Component } from 'react'
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import RouterView from '../router/RouterView';
import '../scss/index.css';

class Index extends Component {
    componentDidMount(){
        // if (!this.props.list.length){
            // this.props.initList();
        // }
    }

    render() {
        return <div>
            <header>
                <span onClick={()=>{
                    window.history.back();
                }}>&lt;</span>
                <span>我的提问</span>
            </header>
            <section>
                <NavLink to='/index/replaied'>已回复</NavLink>
                <NavLink to='/index/noreplay'>未回复</NavLink>
            </section>        
            <RouterView routes={this.props.routes}></RouterView>
        </div>
    }
}

const mapStateToProps = state=>{
    return {
        list: state.list
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        initList: ()=>{
            fetch('/data.json')
            .then(res=>res.json())
            .then(body=>{
                console.log('body...', body);
                dispatch({
                    type: 'INIT_LIST',
                    payload: body.list
                })
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);