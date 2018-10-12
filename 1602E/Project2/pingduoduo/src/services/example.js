import request from '../utils/request';

export function query() {
  return request('/api/users');
}
// 获取秒杀
export function miaosha(){
  return request('/wxapp/backend/subject_list?pdduid=3872656134&xcx=20161201&xcx_version=v2.2.7.1&scene_id=1089&anti_content=3aceJxjZAACfwYmxkQgTgLiZCBOAeJUBkXGNDkjI3MzYwtzQyMzM0tDQ0MLXUNTY3MjcyNTI2MDAwMGLsZ0dgbG1DdTNT0ZWBkzmBgZGJgZMxkA54MMrQ%253D%253D')
}
