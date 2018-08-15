import {takeEvery, takeLatest} from 'redux-saga';
import {call, put, apply} from 'redux-saga/effects';

// action处理函数
function *handle(){
    let data = yield apply(this, request, ['/index.json']);
    console.log('data...', data);
    yield put({type: 'FETCH_LIST', payload: data});
}

// action监听函数
function * watch(){
    yield takeLatest('FETCH_SAGA', handle);
} 

// 发送ajax请求
function request(url){
    return fetch(url)
    .then(res=>res.json())
    .then(body=>body)
}

// saga入口文件
export default function * (){
    yield watch()
}
