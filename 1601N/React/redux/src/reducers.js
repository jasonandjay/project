import { combineReducers } from 'redux'
import {
    ADD_NUM,
    SUB_NUM,
    ADD_LIST,
    CLEAR_LIST
} from './actionTypes';

let initialState = {
    num: 0,
    list: []
}

function changeNum(state = initialState.num, action) {
    switch (action.type) {
        case ADD_NUM:
            return state += action.text
        case SUB_NUM:
            return state -= action.text
        default:
            return state
    }
}

function changeList(state = initialState.list, action) {
    switch (action.type) {
        case ADD_LIST:
            return [...state, action.text];
        case CLEAR_LIST:
            return []
        default:
            return state
    }
}
export default combineReducers({
    num: changeNum,
    list: changeList
})