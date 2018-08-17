import {combineReducers} from 'redux';
import cart from './cart';
import my from './my';

export default combineReducers({
    cart,
    my
})