<template>
    <div id="chat-info">
        <im-header v-bind:backText="backText" v-bind:middleText="middleText"></im-header>
        <div class="chat-info-avatar">
            <flexbox>
                <flexbox-item :span="1/4">
                    <div class="flex-demo" @click="goPersonInfo()">
                        <img :src="avatar" alt="">
                        <span>传电</span>
                    </div>
                </flexbox-item>
                <flexbox-item :span="1/4">
                    <div class="flex-demo-add">
                        <x-icon type="android-add" size="40"></x-icon>
                    </div>
                </flexbox-item>
            </flexbox>
        </div>
        <div class="chat-info-line">
            <div class="m10">
                <cell :title="showChatReordText" is-link></cell>
            </div>

            <group title="" label-width="5.5em" label-margin-right="2em" label-align="justify">
                <x-switch title="消息免打扰"></x-switch>
                <x-switch title="置顶聊天"></x-switch>
                <x-switch title="强提醒"></x-switch>
            </group>
        </div>
    </div>
</template>

<script>
  import { Group, Cell, XSwitch, Flexbox, FlexboxItem } from 'vux'
  import ImHeader from '@/common/components/ImHeader'
  export default {
    name: 'ChatInfo',
    components: {
      ImHeader,
      Cell,
      Group,
      XSwitch,
      Flexbox,
      FlexboxItem
    },
    data () {
      return {
        backText: '聊天信息',
        middleText: '',
        showChatReordText: '查找聊天记录',
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
                display: flex;
                align-items: center;
                border: 1px solid #E4E4E4;
                border-radius: 20%;
                width: 50px;
                svg {
                    width: 50px;
                    height: 50px;
                }
            }
        }
        .chat-info-line {
            background-color: #f5f5f5;
        }
        .m10 {
            margin: 10px 0;
            border-top: 1px solid #D9D9D9;
            border-bottom: 1px solid #D9D9D9;
            background-color: #FFFFFF;

        }
    }

</style>
