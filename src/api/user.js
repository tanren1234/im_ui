import request from '@/utils/request'

export function userInfo () {
  return request({
    url: '/api/user',
    method: 'get'
  })
}
