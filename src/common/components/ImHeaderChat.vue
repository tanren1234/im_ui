<template>
    <div>
        <x-header>
            {{ middleText }}
            <x-icon @click="showMenusAsd" slot="right" type="ios-person" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
        </x-header>
    </div>
</template>

<script>
  import { XHeader, Actionsheet, TransferDom } from 'vux'
  export default {
    directives: {
      TransferDom
    },
    name: 'ImHeaderChat',
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
