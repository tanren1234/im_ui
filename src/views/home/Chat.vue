<template>
    <div>
        <im-header v-bind:middleText="headerText"></im-header>
        <div id="chat-container">
            <div class="chat-content">
                <div class="chat-msg">
                    <flexbox :gutter="0" style="align-items: flex-start">
                        <flexbox-item :span="2" style="margin-top: 10px !important;">
                            <div class="media-avatar">
                                    <img v-bind:src="avatar" alt="">
                            </div>
                        </flexbox-item>
                        <flexbox-item :span="8">
                            <div class="media-body">
                                <div class="media-arrow">

                                </div>
                                <div class="media-left back-color-other">
                                    <div class="media-title">
                                        Amy
                                    </div>
                                    <div class="media-content">
                                        在莲花山宫公园。。。。 在莲花山宫公园。。。。 在莲花山宫公园。。。。 在莲花山宫公园。。。。 在莲花山宫公园。。。。 在莲花山宫公园。。。。
                                    </div>
                                </div>

                            </div>
                        </flexbox-item>
                    </flexbox>
                </div>
                <div class="chat-msg">
                    <flexbox :gutter="0" style="align-items: flex-start">
                        <flexbox-item :span="2" >

                        </flexbox-item>
                        <flexbox-item :span="8">
                            <div class="media-body">
                                <div class="media-arrow">

                                </div>
                                <div class="media-right back-color-me">
                                    <div class="media-title">
                                        Amy
                                    </div>
                                    <div class="media-content " style="text-align: left">
                                        在莲花山宫公园。。。。 在莲花山宫公园。。。
                                    </div>
                                </div>

                            </div>
                        </flexbox-item>
                        <flexbox-item :span="2" style="margin-top: 10px !important;">
                            <div class="media-avatar" >
                                <img v-bind:src="avatar" alt="">
                            </div>
                        </flexbox-item>
                    </flexbox>
                </div>
            </div>
            <chat-send></chat-send>
        </div>
    </div>
</template>

<script>
  import ImHeader from '@/common/components/ImHeader'
  import ChatSend from '@/common/components/ChatSend'
  import {Flexbox, FlexboxItem} from 'vux'
  export default {
    name: 'Chat',
    data () {
      return {
        headerText: '嘻嘻和他的朋友们',
        avatar: require('@/assets/avater.png')
      }
    },
    components: {
      ImHeader,
      Flexbox,
      FlexboxItem,
      ChatSend
    }
  }
</script>

<style scoped  lang="less">
    #chat-container {
        background-color: #FFF1F1;
        position:fixed;
        overflow: auto;
        top: 46px;
        bottom: 50px;
        width: 100%;
        .chat-content {
            width: 100%;
            height: 100%;
            .chat-msg {
                padding: 5px 5px;
                .media-avatar {
                    margin: 0 auto;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    overflow: hidden;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .media-body {
                    position: relative;
                    font-size: 12px;
                    margin: 10px 5px;
                    .media-left {
                         padding: 3px 12px;
                         text-align: left;
                         border-radius: 20px 5px 20px 5px;
                     }
                    .media-left:after {
                        content: "";
                        position: absolute;
                        border-style: solid;
                        border-color: #FFFFFF transparent transparent;
                        border-width: 15px 0 0 15px;
                        left: -14px;
                        top: 20px;
                    }
                    .media-right {
                        padding: 3px 12px;
                        color: #fff;
                        text-align: right;
                        background-color: #FF6B6D;
                        border-radius: 5px 20px 5px 20px;
                    }
                    .media-right:after {
                        content: "";
                        position: absolute;
                        border-style: solid;
                        border-color: #FF6B6D transparent transparent;
                        border-width: 15px 15px 0 15px;
                        right: -14px;
                        top: 20px;
                    }
                    .media-content {
                        padding: 2px 0 2px 0;
                    }
                }
            }
        }
        .back-color-me {
            background-color:  #FF6B6D;
            color: #FFFFFF;
        }
        .back-color-other {
            background-color: #ffffff;
            color: #1C1C1C;
        }
    }
</style>
