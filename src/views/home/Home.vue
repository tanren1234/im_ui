<template>
    <div>
        <im-header></im-header>
        <search :auto-fixed="false"></search>
        <div v-for="item in items">
            <chat-cell v-bind:item="item"></chat-cell>
        </div>
    </div>
</template>

<script>
  import { Search } from 'vux'
  import ChatCell from '@/components/ChatCell'
  import ImHeader from '@/common/components/ImHeader'
  export default {
    name: 'Home',
    components: {
      ChatCell,
      Search,
      ImHeader
    },
    data () {
      return {
        items: [
          {
            avatar: require('@/assets/avater.png'),
            title: '喜瑞斯1',
            describe: '周6去哪里踏青啊？',
            num: 99,
            time: '12:29'
          },
          {
            avatar: require('@/assets/avater.png'),
            title: '喜瑞斯2',
            describe: '周6去哪里踏青啊？',
            num: 0,
            time: '12:29'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
