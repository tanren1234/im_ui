import request from '@/utils/request'

export function sendMessageUser (userId, data) {
  return request({
    url: 'api/message/' + userId,
    method: 'post',
    data: data
  })
}

export function sendMessageGroup (groupId) {
  return request({
    url: 'api/message_group/' + groupId,
    method: 'post'
  })
}

export function messageLists (conversationId = 0) {
  return request({
    url: '/api/message/' + conversationId,
    method: 'get'
  })
}

export function test () {
  return request({
    url: 'http://127.0.0.1/open-api-v1/demo/query_price',
    method: 'get'
  })
}
