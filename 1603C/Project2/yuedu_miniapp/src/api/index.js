import wepy from 'wepy';

// const host = 'http://123.206.55.50';
const host = 'http://127.0.0.1';
function sendRequest(url, data={}, method='GET'){
  return new Promise((resolve, reject)=>{
    wepy.request({
      url,
      data,
      method,
      success(res){
        resolve(res)
      },
      fail(err){
        reject(err)
      }
    })
  })
}

// 获取店铺列表
export let getShopList = ()=>{
  return sendRequest(`${host}:11111/shop/list`);
}

// 转化坐标
export let transformCoords = (lat, lon)=>{
  return sendRequest(`http://api.map.baidu.com/geoconv/v1/?coords=${lon},${lat}&from=1&to=5&ak=kuW8Z5ruzb11LPLuA70gNheiTKkiqao1`)
}

// 转化区域
export let transformRegion = (lat, lon)=>{
  return sendRequest(`http://api.map.baidu.com/geocoder/v2/?callback=cb&location=${lat},${lon}&output=json&pois=1&ak=kuW8Z5ruzb11LPLuA70gNheiTKkiqao1`)
}

// 登陆接口
export let login = (username, password)=>{
  return sendRequest(`${host}:11111/user/login`, {username,password}, 'POST');
}
