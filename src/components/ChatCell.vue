<template>
    <div>
        <div class="chat-cell vux-1px-b">
            <flexbox :gutter="0">
                <flexbox-item :span="2">
                    <div class="chat-left">
                        <div class="chat-left-img">
                            <img src="@/assets/avater.png" alt="">
                        </div>
                    </div>
                </flexbox-item>
                <flexbox-item :span="8">
                    <div class="chat-content">
                        <p class="chat-content-title">
                            飞翔企鹅和朋友们
                        </p>
                        <p class="chat-content-describe">
                            周6去哪里踏青啊？
                        </p>
                    </div>
                </flexbox-item>
                <flexbox-item :span="2">
                    <div class="chat-right">
                        <p class="chat-right-time">
                            10:59
                        </p>
                        <p class="chat-right-num">
                            <badge text="99+"></badge>
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
    }
</style>
