<template>
    <div>
        <im-header-chat v-bind:middleText="headerText"></im-header-chat>
        <div id="chat-container">
            <div class="chat-content">
                <ul class="chat-thread">
                    <!--群聊且item.dstid=当前msgcontext.dstid
                    <span v-text="JSON.stringify(msglist)"></span>
                     -->
                    <!--单聊且是他发的item.userid=msgcontext.dstid && 发给我的 item.dstid=myid 或者是我item.userid= myid发的,&&发给他的item.dstid= msgcontext.dstid 我发给他的  -->
                    <li class="chat" :class="item.ismine?'mine':'other'" v-for="item in msglist">
                        <div class="media-avatar">
                            <img class="avatar" :src="item.user.avatar" />
                        </div>
                        <span ></span>
                        <div class="content">
                            <div v-if="item.msg.media==1" v-text="item.msg.content"></div>
                            <img class="pic" v-if="item.msg.media==4" :src="item.msg.url" />
                            <div v-if="item.msg.media==3">
                                <audio :src="item.msg.url" controls="controls" class="audio">
                                </audio>
                            </div>
                            <div v-if="item.msg.media==2">
                                <video :src="item.msg.url" controls="controls" class="video">
                                </video>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <chat-send-v1></chat-send-v1>
    </div>
</template>

<script>
  import ImHeaderChat from '@/common/components/ImHeaderChat'
  import ChatSendV1 from '@/common/components/ChatSendV1'
  import {Flexbox, FlexboxItem} from 'vux'
  export default {
    name: 'Chat',
    data () {
      return {
        headerText: '嘻嘻和他的朋友们',
        avatar: require('@/assets/avater.png'),
        scroll: 'scroll',
        msglist: [
          {
            user: {
              avatar: require('@/assets/avater.png')
            },
            msg: {
              media: 1,
              content: '大声道sad嘻嘻和他的朋友们嘻嘻和他的朋友们嘻嘻和他的朋友们嘻嘻和他的朋友们嘻嘻和他的朋友们嘻嘻和他的朋友们嘻嘻和他的朋友们'
            },
            ismine: true
          },
          {
            user: {
              avatar: require('@/assets/avater.png')
            },
            msg: {
              media: 1,
              content: '大声道sad'
            },
            ismine: false
          },
          {
            user: {
              avatar: require('@/assets/avater.png')
            },
            msg: {
              media: 2,
              url: require('@/assets/audio/example.mp4')
            },
            ismine: false
          },
          {
            user: {
              avatar: require('@/assets/avater.png')
            },
            msg: {
              media: 3,
              url: require('@/assets/audio/horse.ogg')
            },
            ismine: false
          },
          {
            user: {
              avatar: require('@/assets/avater.png')
            },
            msg: {
              media: 4,
              url: require('@/assets/avater.png')
            },
            ismine: false
          }
        ]
      }
    },
    computed: {
    },
    components: {
      ImHeaderChat,
      Flexbox,
      FlexboxItem,
      ChatSendV1
    },
    mounted () {
      this.toggleNav()
      setTimeout(() => {
        const container = this.$el.querySelector('#chat-container')
        if (container) {
          container.scrollTop = container.scrollHeight
        }
      }, 300)
    },
    methods: {
      toggleNav () {
        this.$store.dispatch('toggleNav')
      }
    }
  }
</script>

<style scoped  lang="less">
    #chat-container {
        background-color: #F5F5F5;
        position:fixed;
        overflow-y: scroll;
        top: 46px;
        bottom: 50px;
        width: 100%;
        .chat-content {
            width: 100%;
            height: 100%;
            .chat-thread {
                padding-top: 5px;
            }

            li.chat {
                justify-content: flex-start;
                align-items: flex-start;
                display: flex;
                .media-avatar {
                    overflow: hidden;
                    img{
                        width: 40px;
                        height:40px;
                        border-radius: 50%;
                    }
                }
            }
            li.other{
                flex-direction: row;
                .avatar{
                    margin-left:10px;
                }
                span{
                    border: 10px solid;
                    border-color: transparent #FFFFFF transparent transparent ;
                    margin-top: 10px;
                }
                .content{
                    background-color: #FFFFFF;
                    color: #1C1C1C;
                }
            }
            li.mine{
                flex-direction: row-reverse;
                .avatar{
                    margin-right:10px;
                }
                span{
                    border: 10px solid;
                    border-color: transparent  transparent transparent #32CD32;
                    margin-top: 10px;
                }
                .content{
                    background-color: #32CD32;
                    color: #FFFFFF;
                }
            }
            .content{
                min-width: 60px;
                clear: both;
                display: inline-block;
                padding: 12px 12px 12px 8px;
                margin: 0 0 20px 0;
                font: 14px/16px 'Noto Sans', sans-serif;
                border-radius: 10px;
                max-width: 60%;
                letter-spacing:1px;
                line-height:18px;
                .pic{
                    width: 100%;
                    margin:3px;
                }
                .video {
                    width: 100%;
                    margin:3px;
                }
                .audio{
                    max-width: 100%;
                    margin:3px;
                }
            }
        }
    }
</style>
