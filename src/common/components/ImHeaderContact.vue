<template>
    <div>
        <x-header :left-options="{showBack: false}">
            <span slot="left">通讯录</span>
            <x-icon @click="showMenusAsd" slot="right" type="ios-plus-outline" size="30" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
        </x-header>
    </div>
</template>

<script>
  import { XHeader, Actionsheet, TransferDom } from 'vux'
  export default {
    directives: {
      TransferDom
    },
    name: 'ImHeaderContact',
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
      }
    },
    components: {
      XHeader,
      Actionsheet
    },
    methods: {
      showMenusAsd: function () {
        this.$router.push({name: 'chatInfo'})
      }
    }
  }
</script>

<style scoped>

</style>
