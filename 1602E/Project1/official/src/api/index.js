const sendRequest = (url, method = 'GET', body = {})=>{
    // 处理url,添加时间戳，保证每次请求不会被缓存
    if (/\?/.test(url)){
        url += '&_='+(+new Date());
    }else{
        url += '?_='+(+new Date());
    }
    let params = {method};
    // 判断请求是否属于post请求
    if (method == 'POST'){
        params.body = JSON.stringify(body);
    }
    return fetch(url, params).then(res=>res.json());
}
// 获取车辆列表
export let getBrandList = ()=>{
    return sendRequest('https://baojia.chelun.com/v2-car-getMasterBrandList.html');
}