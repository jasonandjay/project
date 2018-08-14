import {combineReducers} from 'redux';
import cart from './reducer/cart';
import list from './reducer/list';


// 导出合并后的reducer
// 合并之后访问会多一层，先访问外层模块名，再访问模块内部属性
// isSelectAll: state.cart.isSelectAll
// list：state.list.list
export default combineReducers({
    cart,
    list
})