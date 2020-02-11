import request from '@/utils/request'

export function login (userName, userPwd, loginType) {
  let loginName = loginType === 'phone' ? 'phone' : 'name'
  return request({
    url: 'api/login',
    method: 'post',
    data: {
      [loginName]: userName,
      password: userPwd,
      login_type: loginType
    }
  })
}

export function refreshTokenApi (auth) {
  return request({
    url: '/refresh/token',
    method: 'post',
    data: {
      auth
    }
  })
}
