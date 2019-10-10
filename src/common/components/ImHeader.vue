<template>
    <div>
        <x-header :left-options="{backText: backText}" :right-options="{showMore: true}" @on-click-more="showMenus = true">
            {{ middleText }}
        </x-header>
        <div v-transfer-dom>
            <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
        </div>
    </div>
</template>

<script>
  import { XHeader, Actionsheet, TransferDom } from 'vux'
  export default {
    directives: {
      TransferDom
    },
    name: 'ImHeader',
    props: {
      middleText: {
        type: String,
        default: function () {
          return '所有会话'
        }
      },
      backText: {
        type: String,
        default: function () {
          return '返回'
        }
      }
    },
    data () {
      return {
        menus: {
          menu1: 'Take Photo',
          menu2: 'Choose from photos'
        },
        showMenus: false
      }
    },
    components: {
      XHeader,
      Actionsheet
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>
