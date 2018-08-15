import React, { Component } from 'react'
import {connect} from 'react-redux';


class Header extends Component {
    render() {
        console.log('header props...', this.props);
        let {list, countryIndex} = this.props;
        return  <p>{
            list.map((item, index)=>{
                return <span key={index} onClick={()=>{
                    this.props.countryClick(index);
                }}>{item.name}</span>
        })}</p>
    }
}

const mapStateToProps = (state)=>{
    // console.log('state...', state)
    return {
        list: state.list,
        countryIndex: state.countryIndex
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        countryClick: (index)=>{
            dispatch({
                type: 'COUNTRY_CLICK',
                payload: index
            })
            dispatch({
                type: 'PROVINCE_CLICK',
                payload: 0
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);