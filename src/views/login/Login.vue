<template>
    <div>
        <div style="width: 100px;height: 100px;margin: 0 auto">
            <p style="text-align: center">登录</p>
        </div>
        <group title="set keyboard=number and is-type=china-mobile">
            <x-input title="手机号码" name="mobile" placeholder="请输入手机号码" v-model="userName" keyboard="number" is-type="china-mobile"></x-input>
        </group>
        <group title="确认输入">
            <x-input title="请输入6位数字" type="text" placeholder="" v-model="userPwd" :min="6" :max="6"></x-input>
        </group>
        <x-button @click.native="login" type="primary">登录</x-button>
    </div>
</template>

<script>
  import { XInput, Group, XButton } from 'vux'
  import { login } from '@/api/login'
  export default {
    components: {
      XInput,
      XButton,
      Group
    },
    name: 'Login',
    data () {
      return {
        userName: '',
        userPwd: '',
        loginType: 'phone'
      }
    },
    methods: {
      login () {
        login(this.userName, this.userPwd, this.loginType).then(response => {
          console.log(response)
          const token = response.data.data.token
          this.$store.dispatch('setToken', token)
          this.$router.push({
            path: '/'
          })
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>

<style scoped>

</style>
