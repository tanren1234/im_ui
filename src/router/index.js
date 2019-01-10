import Home from '@/views/home/Home'
import Rooms from '@/views/rooms/Rooms'
import Chat from '@/views/home/Chat'
/* eslint-disable  */
export default [
    {
      path: '/',
      component: Home
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    },
    {
      path: '/rooms',
      name: 'Rooms',
      component: Rooms
    }
]
