<template>
    <div>
        <im-header v-bind:middleText="headerText"></im-header>
        <div id="chat-container">
            <div class="chat-content">
                <div class="chat-msg">
                    <flexbox :gutter="0">
                        <flexbox-item :span="2">
                            <div class="media-avatar">
                                <a href="#">
                                    <img v-bind:src="avatar" alt="">
                                </a>
                            </div>
                        </flexbox-item>
                        <flexbox-item :span="8">
                            <div class="media-body">
                                <ul>
                                    <li>
                                        <p>Amy</p>
                                    </li>
                                    <li>
                                        在莲花山宫公园。。。。
                                    </li>
                                </ul>
                            </div>
                        </flexbox-item>
                    </flexbox>
                </div>
            </div>
            <div class="chat-send"></div>
        </div>
    </div>
</template>

<script>
  import ImHeader from '@/common/components/ImHeader'
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
      FlexboxItem
    }
  }
</script>

<style scoped  lang="less">
    #chat-container {
        .chat-content {
            width: 100%;
            height: 90%;
            .chat-msg {
                padding: 5px 5px;
            }
        }
    }
</style>
