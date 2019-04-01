<template>
    <div>
        <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">{{ middleText }}</x-header>
    </div>
</template>

<script>
  import { XHeader } from 'vux'
  export default {
    name: 'ImHeader',
    props: {
      middleText: {
        type: String,
        default: function () {
          return '所有会话'
        }
      }
    },
    data () {
      return {
        menus: {
          menu1: 'Take Photo',
          menu2: 'Choose from photos'
        },
        showMenus: false,
        middleText: this.middleText
      }
    },
    components: {
      XHeader
    }
  }
</script>

<style scoped>

</style>
