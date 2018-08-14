import React, { Component } from 'react'
import {connect} from 'react-redux';

class Left extends Component {
    render() {
        let {list, countryIndex, provinceIndex} = this.props;
        if (!list.length){
            return null;
        }

        let provinces = list[countryIndex].list;
        return  <aside>{
            provinces.map((item, index)=>{
                return <li key={index} onClick={()=>{
                    this.props.provinceClick(index);    
                }}>{item.name}</li>
            })
        }</aside>
    }
}

const mapStateToProps = (state)=>{
    return state
}

const mapDispatchToProps = (dispatch)=>{
    return {
        provinceClick: (index)=>{
            dispatch({
                type: 'PROVINCE_CLICK',
                payload: index
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Left);