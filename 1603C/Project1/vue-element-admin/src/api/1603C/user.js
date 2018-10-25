import request from '@/utils/request'

export function getAllUser() {
  return request({
    url: '/allUser',
    method: 'get'
  })
}
