import request from '../utils/request';

// 获取首页数据
export function getIndex() {
  return request('/api/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1540193699076')
}
// 获取排行榜数据
export function getRank() {
  return request('/api/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=1878394554&uin=412640480&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1540209568639')
}
// 获取排行榜详情页数据
export function getDetail() {
  return request('/api/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=4&_=1540257815719')
}
