import request from '../util/request'

// 获取书籍列表
export let getBookList = ()=>{
    return request.get('/bookList');
}