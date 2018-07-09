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
    url += `?os=${os}&_=${+new Date()}`;
    return fetch(domain+url);
}

// 获取车型数据
export const getBrandList = ()=>{
    return sendRequest('/v2-car-getMasterBrandList.html')
}

// 获取车系数据
