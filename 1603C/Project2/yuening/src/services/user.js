import request from '@/utils/request';

export async function query() {
  return request('/api/users');
}
const host = 'http://169.254.12.68:11111';
export async function queryCurrent() {
  // return request('/api/currentUser');
  return request(`${host}/user/info`);
  // console.log('发起delete请求');
  // return request(`${host}/user/action`, {
  //   method: 'DELETE',
  //   body: {
  //     uid: 1,
  //     type: 2
  //   }
  // })
}
