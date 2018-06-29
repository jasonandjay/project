import {combineReducers} from 'redux';
import login from './login';
import main from './main';

export default combineReducers({
    login,
    main
})