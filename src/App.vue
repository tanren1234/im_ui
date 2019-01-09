<template>
  <div id="app">
    <router-view></router-view>
    <bottom></bottom>
  </div>
</template>

<script>
  import Bottom from '@/common/components/Bottom'
  export default {
    name: 'app',
    components: {
      Bottom
    }
  }
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
body {
  background-color: #ffffff;
}
</style>
