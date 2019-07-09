<template>

        <div id="send-box">
            <span class="item t1">语音</span>
            <span class="item t2">输入框</span>
            <span class="item t3">表情</span>
            <span class="item t4">发送</span>
        </div>

</template>
<script>
  export default {
    name: 'ChatSend',
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>
<style scoped lang="less">
    #send-box{
        display: flex;
        background-color: #eee;
        .item {
            flex: 1;
        }
        .item.t1{
            flex: 0 0 10%;
            background-color: blue;
        }
        .item.t2{
            flex: 0 0 70%;
            background-color: #666;
        }
        .item.t3{
            flex: 0 0 10%;
            background-color: red;
        }
        .item.t4{
            background-color: #999;
            flex: 0 0 10%;
        }
    }

</style>
