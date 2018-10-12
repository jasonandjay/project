// 动态判断域名
const host = /localhost/.test(window.location.host)?'http://baojia-test.chelun.com':'https://baojia.chelun.com';
function sendRequest(url, method = 'GET', data = {}){
    let params = {
        method
    };
    // 判断如果是一个post请求，带上请求体信息
    if (method == 'POST'){
        params.body = JSON.stringify(data);
    }
    // 判断请求查询url是否携带query
    if (url.indexOf('?') == -1){
        url += `?_=${+new Date()}`
    }else{
        url += `&_=${+new Date()}`
    }
    return fetch(host+url, params).then(res=>res.json()).then(body=>body);
}

/**
 *  获取车辆品牌数据
 *  @return promise
 */
export let getBrandList = ()=>{
    return sendRequest('/v2-car-getMasterBrandList.html');
}

/**
 * 获取车系数据
 * @param id 车辆品牌id
 * @return promise
 */
export let getMakeList = (id)=>{
    return sendRequest(`/v2-car-getMakeListByMasterBrandId.html?MasterID=${id}`);
}
/**
 * 获取车系详情
 * @param {*} id 车系id
 * @returns promise
 */
export let getCarInfo = (id)=>{
    return sendRequest(`/v2-car-getInfoAndListById.html?SerialID=${id}`);
}

/**
 * 获取图片列表的接口
 * @param {*} serialId  车系id
 * @param {*} imgId   图片分类id
 * @param {number} [page=1] 分页页码数
 * @param {number} [pageSize=30] 分页每页数量
 * @param {*} carId  车型id
 * @param {*} colorId 颜色id
 * @returns promise
 */
export let getCategoryImgList = (param)=>{
    let search = ``;
    for(let i in param){
        search += `&${i}=${param[i]}`;
    }
    // 补充page与pageSize
    if (!param['Page']){
        search += `&Page=1`;
    }
    if (!param['PageSize']){
        search += `&PageSize=30`;
    }
    return sendRequest(`/v2-car-getCategoryImageList.html?${search.slice(1, search.length)}`);
}
