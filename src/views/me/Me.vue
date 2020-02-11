<template>
    <div id="me">
        <im-header :middleText="headerText"></im-header>
        <div id="info">
            <flexbox>
                <flexbox-item :span="3">
                    <div class="flex-demo">
                        <img  style="display:block;max-width: 100%" :src="userInfo.avatar">
                    </div>
                </flexbox-item>
                <flexbox-item :span="9">
                    <div class="flex-demo">
                        <p>{{ userInfo.name }}</p>
                        <p>手机号：{{ userInfo.phone }}</p>
                    </div>
                </flexbox-item>
            </flexbox>
        </div>
        <group>
            <cell title="设置" is-link>

            </cell>
            <cell title="表情" is-link>

            </cell>
        </group>
    </div>
</template>

<script>
  import ImHeader from '@/common/components/ImHeader'
  import { Flexbox, FlexboxItem, Group, Cell } from 'vux'
  import { userInfo } from '@/api/user'
  export default {
    name: 'Me',
    data () {
      return {
        headerText: '个人中心',
        addPersonIcon: require('@/assets/avater.png'),
        groupIcon: require('@/assets/ali_icon/icon_group.png'),
        searchValue: '',
        userInfo: {}
      }
    },
    mounted () {
      this.getUserInfo()
    },
    methods: {
      getUserInfo () {
        userInfo().then(res => {
          if (res.data.code === 200) {
            this.userInfo = res.data.data
          } else {
            console.log(res.data.msg)
          }
        }).catch(err => {
          console.log(err)
        })
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
    #info {
        padding: 10px;
    }
</style>
