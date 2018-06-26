import {combineReducers} from 'redux';
import list from './list';
import chart from './chart';

export default combineReducers({
    list,
    chart
})