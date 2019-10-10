<template>
    <div id="me">
        <im-header :middleText="headerText"></im-header>
        <div id="info">
            <flexbox>
                <flexbox-item :span="3">
                    <div class="flex-demo">
                        <img  style="display:block;max-width: 100%" :src="addPersonIcon">
                    </div>
                </flexbox-item>
                <flexbox-item :span="9">
                    <div class="flex-demo">
                        <p>Join</p>
                        <p>手机号：18373873100</p>
                    </div>
                </flexbox-item>
            </flexbox>
        </div>
        <group>
            <cell title="设置" is-link>
                <div slot="icon" class="add-person-icon">
                    <img slot="icon" width="20" style="display:block" :src="groupIcon">
                </div>
            </cell>
            <cell title="表情" is-link>
                <div slot="icon" class="group-icon">
                    <img slot="icon" width="20" style="display:block" :src="groupIcon">
                </div>
            </cell>
        </group>
    </div>
</template>

<script>
  import ImHeader from '@/common/components/ImHeader'
  import { Flexbox, FlexboxItem, Group, Cell } from 'vux'
  export default {
    name: 'Me',
    data () {
      return {
        headerText: '个人中心',
        addPersonIcon: require('@/assets/avater.png'),
        groupIcon: require('@/assets/ali_icon/icon_group.png'),
        searchValue: ''
      }
    },
    components: {
      Flexbox,
      FlexboxItem,
      ImHeader,
      Group,
      Cell
    }
  }
</script>

<style scoped>

</style>
