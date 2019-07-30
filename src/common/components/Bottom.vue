<template>
    <div id="bottom" v-if="isShow">
        <tabbar>
            <tabbar-item selected link="/"  badge="2">
                <img slot="icon" src="@/assets/demo/icon_nav_button.png">
                <span slot="label">Message</span>
            </tabbar-item>
            <tabbar-item show-dot link="/rooms">
                <img slot="icon" src="@/assets/demo/icon_nav_msg.png">
                <span slot="label">Rooms</span>
            </tabbar-item>
            <tabbar-item  link="/mail">
                <img slot="icon" src="@/assets/demo/icon_nav_article.png">
                <span slot="label">MailLists</span>
            </tabbar-item>
            <tabbar-item>
                <img slot="icon" src="@/assets/demo/icon_nav_cell.png">
                <span slot="label">Me</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vux'
  export default {
    name: 'Bottom',
    components: {
      Tabbar,
      TabbarItem
    },
    data () {
      return {
      }
    },
    computed: {
      isShow () {
        return this.$store.state.app.isShowBottomNav
      }
    },
    methods: {
    }
  }
</script>

<style scoped lang="less">
    #bottom{
        display: block;
    }
</style>
