<template>
    <div>
        <im-header></im-header>
        <search :auto-fixed="false"></search>
        <chat-cell></chat-cell>
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
        msg: 'Hello World!'
      }
    }
  }
</script>

<style scoped>

</style>
