import React from 'react';
import Filter from './Filter';
import {connect} from 'react-redux';

class Index extends React.Component{
    constructor(){
        super();
    }

    componentDidMount(){
        this.props.init();
    }

    render(){
        return <div>
            <Filter/>
            <table>
                <thead>
                    <tr>
                        <td>车次</td>
                        <td>出发站到达站</td>
                        <td>出发时间到达时间</td>
                        <td>历时</td>
                        <td>商务座</td>
                        <td>一等座</td>
                        <td>二等座</td>
                        <td>高级软卧</td>
                        <td>软卧</td>
                        <td>动软</td>
                        <td>硬卧</td>
                        <td>无座</td>
                        <td>备注</td>
                    </tr>
                </thead>
                <tbody>{
                    this.props.list.map((item, index)=>{
                        return <tr key={index}>
                            <td>{item.car}</td>
                            <td>{item.goback[1]}</td>
                            <td>{item.time[1]}</td>
                            <td>{item.all_time[0]}</td>
                            <td> - </td>
                            <td> - </td>
                            <td> - </td>
                            <td> - </td>
                            <td> - </td>
                            <td> - </td>
                            <td> - </td>
                            <td> - </td>
                            <td> - </td>
                        </tr>
                    })
                }</tbody>
            </table>
        </div>;
    }
}
const mapStateToProps = (state)=>{
    let list = [];
    let filter = [];
    // 获取所有选中的筛选条件
    state.filter.forEach(item=>{
        if (item.isChecked){
            filter.push(item.name)
        }
    })
    // 获取符合筛选条件的车次
    let array = state.list.filter(item=>{
        return  filter.indexOf(item.name) != -1
    })
    // 拼接二级数组
    array.forEach(item=>{
        list = list.concat(item.data);
    })
    return {
        list
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        init: ()=>{
            fetch('/data/data.json')
            .then(res=>res.json())
            .then(body=>{
                console.log(body);
                dispatch({
                    type: 'INIT_FILTER',
                    payload: body.cart.map(item=>{
                        return {
                            isChecked: true,
                            name: item.name
                        }
                    })
                });
                dispatch({
                    type: 'INIT_LIST',
                    payload: body.cart
                })
            })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
