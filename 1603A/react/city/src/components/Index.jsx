import React, { Component, Fragment } from 'react'
import Header from './Header';
import Right from './Right';
import Left from './Left';


import {connect} from 'react-redux';

class Index extends Component {
    componentDidMount(){
        this.props.fetchData();
    }

    render() {
        return <Fragment>
            <Header></Header>
            <div>
                <Left></Left>   
                <Right></Right>  
            </div>
        </Fragment>
    }
}

const mapStateToProps = (state)=>{
    return {}
}

const mapDispatchToProps = (dispatch)=>{
    return {
        fetchData: ()=>{
            fetch('/index.json')
            .then(res=>res.json())
            .then(body=>{
                console.log(body);
                dispatch({
                    type: 'INITIAL_LIST',
                    payload: body
                })
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);