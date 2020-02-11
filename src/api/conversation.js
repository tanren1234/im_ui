import request from '@/utils/request'

export function conversationLists () {
  return request({
    url: '/api/conversation',
    method: 'get'
  })
}
