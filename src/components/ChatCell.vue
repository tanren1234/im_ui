<template>
    <div>
        <div class="chat-cell vux-1px-b" @click="goChat()">
            <flexbox :gutter="0">
                <flexbox-item :span="2">
                    <div class="chat-left">
                        <div class="chat-left-img">
                            <img v-bind:src="currentValue.avatar" alt="">
                        </div>
                    </div>
                </flexbox-item>
                <flexbox-item :span="8">
                    <div class="chat-content">
                        <p class="chat-content-title">
                            {{ currentValue.title }}
                        </p>
                        <p class="chat-content-describe">
                            {{ currentValue.describe }}
                        </p>
                    </div>
                </flexbox-item>
                <flexbox-item :span="2">
                    <div class="chat-right">
                        <p class="chat-right-time">
                            {{ currentValue.time }}
                        </p>
                        <p class="chat-right-num">
                            <badge v-if="currentValue.num" v-text="currentValue.num+'+'"></badge>
                        </p>
                    </div>
                </flexbox-item>
            </flexbox>
        </div>
    </div>
</template>

<script>
  import {Flexbox, FlexboxItem, Badge} from 'vux'

  export default {
    name: 'ChatCell',
    props: {
      item: {
        type: Object,
        default: function () {
          return {
            avatar: require('@/assets/avater.png'),
            title: '喜瑞斯',
            describe: '周6去哪里踏青啊？',
            num: 99,
            time: '12:29'
          }
        },
        required: false
      }
    },
    data () {
      return {
        currentValue: this.item
      }
    },
    methods: {
      goChat () {
        this.$router.push({ name: 'chat' })
      }
    },
    components: {
      Flexbox,
      FlexboxItem,
      Badge
    }
  }
</script>

<style scoped lang="less">
    .flex-demo {
        text-align: center;
        color: #fff;
        background-color: #20b907;
        border-radius: 4px;
        background-clip: padding-box;
    }

    .chat-cell {
        padding: 10px 0;
        .chat-left {
            width: 80%;
            height: 100%;
            margin: 0 auto;
            .chat-left-img {
                display: inline-block;
                width: 40px;
                height: 40px;
                background: #eee;
                border-radius: 50%;
                overflow: hidden;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .chat-content {
            p {
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }
            .chat-content-title {
                font-size: 18px;
                font-weight: 500;
            }
            .chat-content-describe {
                color: #999;
            }
        }
        .chat-right {
            display: flex;
            flex-direction: column;
            height: 52.69px;
            .chat-right-time {
                flex: 1;
            }
            .chat-right-num {
                flex: 1;
            }
        }
    }
</style>
