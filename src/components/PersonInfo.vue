<template>
    <div id="chat-info">
        <im-header v-bind:middleText="middleText"></im-header>
        <div class="chat-info-avatar">
            <flexbox>
                <flexbox-item :span="1/4">
                    <div class="flex-demo">
                        <img :src="avatar" alt="">
                        <span></span>
                    </div>
                </flexbox-item>
                <flexbox-item :span="1/2">
                    <div class="flex-demo-add">
                        <h4>阿萨德</h4>
                        <p>昵称：大声道</p>
                        <p>手机：12345678</p>
                    </div>
                </flexbox-item>
            </flexbox>
        </div>
        <div class="chat-info-line">
            <div class="m10">
                <cell :title="showChatReordText" is-link></cell>
            </div>

            <group class="send-btn-group" title="" label-width="5.5em" label-margin-right="2em" label-align="justify">
                <x-button type="primary" link="/chat"><i class="btn-send-msg-icon"></i>发消息</x-button>
                <x-button type="default" link="/chat" ><i class="btn-send-video-icon"></i>音视频通话</x-button>
            </group>
        </div>
    </div>
</template>

<script>
  import { Group, Cell, Flexbox, FlexboxItem, XButton } from 'vux'
  import ImHeader from '@/common/components/ImHeader'
  export default {
    name: 'PersonInfo',
    components: {
      ImHeader,
      Cell,
      Group,
      XButton,
      Flexbox,
      FlexboxItem
    },
    data () {
      return {
        middleText: '个人信息',
        showChatReordText: '设置备注和标签',
        avatar: require('@/assets/avater.png')
      }
    },
    mounted () {
    },
    methods: {
      goPersonInfo: function () {
        this.$router.push({name: 'personInfo'})
      }
    }
  }
</script>

<style lang="less" scoped>
    #chat-info {
        .chat-info-avatar {
            img{
                width: 50px;
                height: 50px;
                border-radius: 20%;
            }
            .flex-demo {
                display: flex;
                align-items: center;
                flex-direction: column;
                padding-top: 10px;
                font-size: 14px;
                color: #666;
            }
            .flex-demo-add {
                padding-top: 10px;
                p {
                    font-size: 14px;
                }
            }
        }
        .chat-info-line {
            .send-btn-group{
                padding-top: 40px;
                width: 90%;
                margin: 0 auto;
            }
            .btn-send-msg-icon {
                width: 20px;
                height: 20px;
                display: inline-block;
                vertical-align: middle;
                background: transparent url('~@/assets/ali_icon/icon_message.png') no-repeat;
                background-size: 100%;
                margin-right: 5px;
            }
            .btn-send-video-icon{
                width: 20px;
                height: 20px;
                display: inline-block;
                vertical-align: middle;
                background: transparent url('~@/assets/ali_icon/icon_video.png') no-repeat;
                background-size: 100%;
                margin-right: 5px;
            }
        }
        .m10 {
            margin: 10px 0;
            border-top: 1px solid #D9D9D9;
            border-bottom: 1px solid #D9D9D9;
            background-color: #FFFFFF;

        }
    }

</style>
