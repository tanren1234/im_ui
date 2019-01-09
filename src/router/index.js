import Home from '@/views/home/Home'
import Rooms from '@/views/rooms/Rooms'
/* eslint-disable  */
export default [
    {
      path: '/',
      component: Home
    },
    {
      path: '/rooms',
      name: 'Rooms',
      component: Rooms
    }
]
