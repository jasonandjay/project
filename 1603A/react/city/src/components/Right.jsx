import React, { Component } from 'react'
import {connect} from 'react-redux';

class Right extends Component {
    render() {
        let {list, countryIndex, provinceIndex} = this.props;
        if (!list.length){
            return null;
        }

        let provinces = list[countryIndex].list;
        let citys = provinces[provinceIndex].list;
        return  <aside>{
            citys.map((item, index)=>{
                return <p key={index}>{item.name}{
                     item.list.map((value, key)=>{
                         return <span key={key}>{value}</span>
                     })
                }</p>
            })
        }</aside>
    }
}

const mapStateToProps = (state)=>{
    return state
}

export default connect(mapStateToProps)(Right);