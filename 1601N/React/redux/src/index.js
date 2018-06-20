import store from './stores';
import {
    addNum,
    subNum,
    addList,
    clearList
} from './actions';

// 打印初始状态
console.log(store.getState())

// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)

// 发起一系列 action修改num
store.dispatch(addNum(1))
store.dispatch(addNum(2))
store.dispatch(addNum(3))
store.dispatch(addNum(4))
store.dispatch(subNum(1))
store.dispatch(subNum(2))
store.dispatch(subNum(3))
store.dispatch(subNum(4))

// 发起一系列 action修改list
store.dispatch(addList({name:'刘畅'}))
store.dispatch(addList({name:'瑞文',slogo:'断剑重铸之日,骑士归来之时'}))
store.dispatch(clearList())

// 停止监听 state 更新
unsubscribe();

