// 动态判断请求域名
const domain = /localhost/ig.test(window.location.host)?'http://baojia-test.chelun.com':'https://baojia.chelun.com';

// 填充请求参数
function sendRequest(url){
    let ua = navigator.userAgent,
        os = '';
    // 添加系统参数
    if ((/iPhone|iPad/ig).test(ua)){
        os = 'ios';
    }else{
        os = 'android';
    }
    let char = '?';
    if (/\?/.test(url)){
        char = '&';
    }
    url += `${char}os=${os}&_=${+new Date()}`;
    return fetch(domain+url);
}

// 获取车型数据
export const getBrandList = ()=>{
    return sendRequest('/v2-car-getMasterBrandList.html')
}

// 获取车系数据


// 获取车系图片
export const getImgList = ()=>{
    return sendRequest('/v2-car-getImageList.html?SerialID=2593');
}

// 获取车系目录图片
export const getCategoryImageList = (id, page)=>{
    return sendRequest(`/v2-car-getCategoryImageList.html?SerialID=2593&ImageID=${id}&Page=${page}&PageSize=30`)
}