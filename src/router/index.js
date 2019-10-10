import Home from '@/views/home/Home'
import Rooms from '@/views/rooms/Rooms'
import Chat from '@/views/home/Chat'
import ChatInfo from '@/components/ChatInfo'
import PersonInfo from '@/components/PersonInfo'
import AddContact from '@/views/rooms/AddContact'
import Me from '@/views/me/Me'
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
    },
    {
      path: '/chatInfo',
      name: 'chatInfo',
      component: ChatInfo
    },
    {
      path: '/personInfo',
      name: 'personInfo',
      component: PersonInfo
    },
    {
      path: '/addContact',
      name: 'addContact',
      component: AddContact
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    }
]
