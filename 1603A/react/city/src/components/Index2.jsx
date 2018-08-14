import React, { Component, Fragment } from 'react'

import {connect} from 'react-redux';

class Index extends Component {
    componentDidMount(){
        this.props.fetchData();
    }

    render() {
        let {list, countryIndex, provinceIndex} = this.props;
        if (!list.length){
            return null;
        }

        let provinces = list[countryIndex].list;
        let citys = provinces[provinceIndex].list;
        console.log('provinces...', list[countryIndex], citys);
        
        return <div>
            {/* 渲染头部 */}
            <p>{
                list.map((item, index)=>{
                    return <span key={index} onClick={()=>{
                        this.props.countryClick(index);
                    }}>{item.name}</span>
            })}</p>

            {/* 渲染左边 */}
            <aside>{
                provinces.map((item, index)=>{
                    return <li key={index} onClick={()=>{
                        this.props.provinceClick(index);    
                    }}>{item.name}</li>
                })
            }</aside>

            {/* 渲染右边 */}
            <aside>{
                citys.map((item, index)=>{
                    return <p key={index}>{item.name}{
                         item.list.map((value, key)=>{
                             return <span key={key}>{value}</span>
                         })
                    }</p>
                })
            }</aside>
        </div>
    }
}

const mapStateToProps = (state)=>{
    console.warn(state);
    return state
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
        },
        countryClick: (index)=>{
            dispatch({
                type: 'COUNTRY_CLICK',
                payload: index
            })
        },
        provinceClick: (index)=>{
            dispatch({
                type: 'PROVINCE_CLICK',
                payload: index
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);