<template>
    <div>
        <router-view></router-view>
        <bottom></bottom>
    </div>
</template>

<script>
  import Bottom from '@/common/components/Bottom'
  export default {
    name: 'MianView',
    mounted () {
      // http://open.otc365test.com/v1/demo/query_price
      if (this.$store.state.app.token) {
        this.initWebSocket(this.$store.state.app.token)
      }
      // this.mockData()
    },
    data () {
      return {
        websock: null,
        timeout: 50000,
        timer: ''
      }
    },
    components: {
      Bottom
    },
    methods: {
      mockData () {
        this.$store.dispatch({
          type: 'appendMessage',
          message: this.item
        })
      },
      initWebSocket (token) {
        let uri = process.env.WEBSOCKET_API
        // 初始化weosocket
        const wsuri = `ws://${uri}/ws?token=${token}`
        this.websock = new WebSocket(wsuri)
        this.websock.onmessage = this.websocketonmessage
        this.websock.onopen = this.websocketonopen
        this.websock.onerror = this.websocketonerror
        this.websock.onclose = this.websocketclose
      },
      websocketonopen () {
        // 连接建立之后执行send方法发送数据
        let that = this
        this.timer = setInterval(function () {
          that.heartCheck()
        }, this.timeout)
      },
      websocketonerror () {
        console.log('连接ws失败')
        // 连接建立失败重连
        // this.initWebSocket()
      },
      websocketonmessage (e) {
        // 数据接收
        console.log(e.data)
        // this.$store.dispatch('appendMessage',e)
        try {
          let data = JSON.parse(e.data)
          if (typeof data === 'object' && data) {
            // 更新会话列表
            this.$store.dispatch({
              type: 'updateConversation',
              conversation: data
            })
            // 更新最新消息
            this.$store.dispatch({
              type: 'appendMessage',
              message: data.last_message
            })
          }
        } catch (e) {
          console.log(e.toString())
        }
      },
      websocketsend (data) {
        this.websock.send(data)
      },
      websocketclose (e) {
        clearInterval(this.timer)
        console.log('断开连接', e)
      },
      heartCheck () {
        console.log('发送心跳')
        this.websocketsend('heart')
      }
    }
  }
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';
    @import '~vux/src/styles/1px.less';
    @import '../assets/css/reset.css';
    body {
        background-color: #ffffff;
    }
</style>
