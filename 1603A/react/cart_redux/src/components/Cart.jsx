import React from 'react';
import List from './List';
import axios from 'axios';
import '../scss/cart.css';
import { connect } from 'react-redux';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],           // 商品列表
            price: 0,           // 商品总价
            num: 0,             // 选中的商品数量
            isSelectAll: false  // 是否选中全部
        }
    }

    componentDidMount() {
        console.log('props...', this.props);
        this.props.fetchList();
    }

    // 处理商品的选中
    itemSelect(ind) {
        let flag = true;
        let { list } = this.state;
        list.forEach((item, index) => {
            if (index == ind) {
                item.checked = !item.checked;
            }
            if (!item.checked) {
                flag = false;
            }
        })
        this.setState({
            list,
            isSelectAll: flag
        })
    }

    // 处理商品数量改变
    changeNum(ind, type) {
        let { list } = this.state;
        list.forEach((item, index) => {
            if (index == ind) {
                if (type == '+') {
                    item.num++;
                } else {
                    if (item.num > 0) {
                        item.num--;
                    }
                }
            }
        })
        this.setState({
            list
        })
    }

    // 处理全选按钮
    selectAll(value) {
        let { list } = this.state;
        list.forEach((item, index) => {
            item.checked = value;
        });
        this.setState({
            list,
            isSelectAll: value
        })
    }

    // 计算商品总价
    totalPrice() {
        let price = 0;
        this.state.list.forEach((item) => {
            if (item.checked) {
                price += item.num * item.price;
            }
        })
        return price;
    }

    // 计算商品数量
    totalNum() {
        let num = 0;
        this.state.list.forEach((item) => {
            if (item.checked) {
                num += item.num;
            }
        })
        return num;
    }

    render() {
        return <div className="cart">
            <List />
            <footer style={{ fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                    <input id="input" type="checkbox" checked={this.state.isSelectAll} onChange={
                        e => this.selectAll(e.target.checked)
                    } />
                    <label htmlFor="input">全选</label>
                </div>
                <p>数量：{this.totalNum()}</p>
                <p>总价：{this.totalPrice()}</p>
            </footer>
        </div>;
    }
}



// 用connect包裹组件

/** 把redux中state映射成props传递到组件中去
 * @param state redux存储的数据
 * @param ownProps 组件调用时传过来的props
 * @return 返回一个对象
 */
const mapStatetoProps = (state, ownProps) => {
    console.log('state...', state)
    // console.log(ownProps);
    return {}
}

/**
 * 把dispatch操作封装在当前函数里，传递到组件中
 * @param dispatch 
 * @param ownProps 
 * @return 返回一个对象
 */
const mapDispatchtoProps = (dispatch, ownProps) => {
    return {
        fetchList: () => {
            axios.get('https://www.easy-mock.com/mock/5af6599acf64741ceacf1c57/es6/goods')
            .then(res => {
                console.log('res...', res);
                // 触发dispatch
                dispatch({
                    type: 'FETCH_LIST',
                    payload: res.data
                })
            })
        }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Cart)