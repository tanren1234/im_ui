<template>
    <div>
        <im-header></im-header>
        <search :auto-fixed="false"></search>
        <div v-for="item in getConversations">
            <chat-cell v-bind:item="item"></chat-cell>
        </div>
    </div>
</template>

<script>
  import { Search } from 'vux'
  import ChatCell from '@/components/ChatCell'
  import ImHeader from '@/common/components/ImHeader'
  import { conversationLists } from '@/api/conversation'
  export default {
    name: 'Home',
    components: {
      ChatCell,
      Search,
      ImHeader
    },
    data () {
      return {
        conversationLists: [
          {
            id: 1,
            type: 2,
            last_message: {
              id: 2,
              content: 'Hello',
              type: 'text',
              sender: {
                name: 'fafawlp000002'
              }
            },
            groups: {
              id: 2,
              name: '群组',
              creator: 1,
              users: []
            },
            users: [],
            num: 23,
            time: '02:33'
          },
          {
            id: 2,
            type: 1,
            last_message: {
              id: 2,
              content: 'Hello123',
              type: 'text',
              sender: {
                name: 'qweasda'
              }
            },
            groups: [],
            users: {
              id: 2,
              name: 'fafawlp',
              phone: '13048901611',
              avatar: require('@/assets/avater.png')

            },
            num: 99,
            time: '12:29'
          }
        ],
        timer: ''
      }
    },
    computed: {
      getConversations () {
        return this.$store.getters.getConversations
      }
    },
    mounted () {
      this.toggleNav()
      this.mockData()
      // this.$store.dispatch({
      //  type: 'updateConversation',
      //  conversation: this.conversationLists[0]
      // })
      // this.timer = setInterval(this.mockData, 2000)
    },
    methods: {
      toggleNav () {
        this.$store.dispatch('toggleNavInit')
      },
      mockData () {
        conversationLists().then(response => {
          this.$store.dispatch({
            type: 'setConversation',
            conversation: response.data.data.data
          })
        }).catch(error => {
          console.log(error)
        })
      }
    },
    beforeDestroy () {
      clearInterval(this.timer)
    }
  }
</script>

<style scoped>

</style>
