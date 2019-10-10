<template>
    <section>
    <div>
        <im-header v-bind:middleText="headerText"></im-header>
        <div id="add-contact">
            <search
                    @result-click="resultClick"
                    @on-change="getResult"
                    :results="results"
                    v-model="searchValue"
                    :auto-fixed="false"
                    position="absolute"
                    top="46px"
                    @on-focus="onFocus"
                    @on-cancel="onCancel"
                    @on-submit="onSubmit"
                    ref="search"></search>
            <div id="qrcode" align="center">
                <span>我的二维码名片</span>
                <x-icon type="ios-plus-outline" size="20"></x-icon>
            </div>
            <group>
                <cell title="扫一扫"  inline-desc="扫描二维码名片">
                    <div slot="icon" class="add-person-icon">
                        <img slot="icon" width="20" style="display:block" :src="addPersonIcon">
                    </div>
                </cell>
            </group>
        </div>
    </div>
    </section>
</template>

<script>
  import ImHeader from '@/common/components/ImHeader'
  import { Group, Cell, Search } from 'vux'
  export default {
    name: 'Rooms',
    data () {
      return {
        headerText: '添加联系人',
        addPersonIcon: require('@/assets/ali_icon/icon_addperson.png'),
        searchValue: ''
      }
    },
    components: {
      ImHeader: ImHeader,
      Group: Group,
      Cell: Cell,
      Search: Search
    },
    methods: {
      scanQrcode: function () {
      },
      setFocus () {
        this.$refs.search.setFocus()
      },
      resultClick (item) {
        window.alert('you click the result item: ' + JSON.stringify(item))
      },
      getResult (val) {
        console.log('on-change', val)
      },
      onSubmit () {
        this.$refs.search.setBlur()
        this.$vux.toast.show({
          type: 'text',
          position: 'top',
          text: 'on submit'
        })
      },
      onFocus () {
        console.log('on focus')
      },
      onCancel () {
        console.log('on cancel')
      }
    }
  }
</script>

<style lang="less" scoped>
    #add-contact {
        background-color: #F5F5F5;
        position:fixed;
        overflow-y: scroll;
        top: 46px;
        bottom: 50px;
        width: 100%;
        .add-person-icon {
            border-radius: 8px;
            background-color: #FA9D3B;
            padding: 10px;
            margin-right: 5px;
            img {
                width: 20px;
                height: 20px;
                margin-right: 0;
            }
        }
        #qrcode {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 1rem;
        }
    }

</style>
