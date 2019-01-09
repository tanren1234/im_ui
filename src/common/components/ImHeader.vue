<template>
    <div>
        <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">所有会话</x-header>
    </div>
</template>

<script>
  import { XHeader } from 'vux'
  export default {
    name: 'ImHeader',
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
      XHeader
    }
  }
</script>

<style scoped>

</style>
