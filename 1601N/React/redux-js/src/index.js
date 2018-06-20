import store from './store';
import {addNum, subNum, addList, clearList} from './actions';

console.log(store.getState());


let unSubscribe = store.subscribe(()=>{
    console.log(store.getState());
})
// 利用dispatch做出更改
store.dispatch(addNum(10));
store.dispatch({
    type: 'SUB_NUM',
    text: 10
});

store.dispatch(addNum(20));
store.dispatch(addNum(30));

// unSubscribe();

store.dispatch(subNum(10));
store.dispatch(subNum(20));
store.dispatch(subNum(30));

store.dispatch(addList({name: '刘畅'}));
store.dispatch(clearList({}));

let num = [1,2,3,4,5,6,7,8,9,10].reduce((a, b)=>{
    console.log(a, b);
    return a+b
})

// console.log(num);
