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
const host = /localhost:8080/ig.test(window.location.host)?'http://baojia.chelun.com':
            'https://baojia.chelun.com';

// 获取品牌列表
export let getBrandList = ()=>{
    return sendRequest(`${host}/v2-car-getMasterBrandList.html`);
}

// 获取车系列表
export let getMakeList = (id)=>{
    return sendRequest(`${host}/v2-car-getMakeListByMasterBrandId.html?MasterID=${id}`)
}

// 获取车系详情
export let getDetailList = (id)=>{
    return sendRequest(`${host}/v2-car-getInfoAndListById.html?SerialID=${id}`)
}
