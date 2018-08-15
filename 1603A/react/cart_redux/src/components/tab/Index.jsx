import React, { Component } from 'react';
import Cart from './index/Cart';
import List from './index/List';
import {connect} from 'react-redux';

class Index extends Component {
    componentDidMount(){
        this.props.fetchData();
    }
    render() {
        return <div>
            <List></List>
            <Cart></Cart>
        </div>
    }
}


export default connect(null, (dispatch)=>{
    return {
        fetchData: ()=>{
            fetch('/data.json')
            .then(res=>res.json())
            .then(body=>{
                dispatch({
                    type: 'FETCH_LIST',
                    payload: body.arr
                })
            })
        }
    }
})(Index);