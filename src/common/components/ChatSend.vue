<template>
    <div id="send-box">
        <div id="voice">
            <button class="bottom-cell-send">voice</button>
        </div>
        <div id="send-input">
            <input class="bottom-cell-send" id="m" autocomplete="off" />
        </div>
        <div id="emoji">
            <button class="bottom-cell-send">emoji</button>
        </div>
        <div id="send-btn">
            <button class="bottom-cell-send">Send</button>
        </div>
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
    #send-box {
        align-items:baseline;
        background: #000;
        // padding: 3px 0;
        position: fixed;
        display: flex;
        bottom: 0;
        width: 100%;
        input { border: 0;width: 100%; padding: 10px; margin-right: 0.5%; }
        button {background: rgb(130, 224, 255); border: none; padding: 10px; }
        #voice {
            flex:1;
        }
        #send-input {
            flex:10;
        }
        #emoji {
            flex:1;
        }
        #send-btn {
            flex:1;
        }
        .bottom-cell-send {
            width: 100%;
        }
    }
</style>
