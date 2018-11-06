import request from '../utils/request';

//获取番剧数据
export function series(rid) {
  // return request(`/api/x/web-interface/ranking/region?rid=${rid}&day=7&jsonp=jsonp`);
  return request(`http://169.254.91.193:8888/api?url=${encodeURIComponent(`https://api.bilibili.com/x/web-interface/ranking/region?rid=${rid}&day=7&jsonp=jsonp`)}`)
}
