import { combineReducers } from 'redux';
import login from './reducer/login';
import cart from './reducer/cart';

export default combineReducers({
    login,
    cart
})