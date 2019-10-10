<template>
    <section>
    <div>
        <im-header-contact v-bind:middleText="headerText"></im-header-contact>
        <div id="contact">
            <group>
                <cell title="新的朋友" @click.native="goAddContact()">
                    <div slot="icon" class="add-person-icon">
                        <img slot="icon" width="20" style="display:block" :src="addPersonIcon">
                    </div>
                </cell>
                <cell title="群聊">
                    <div slot="icon" class="group-icon">
                        <img slot="icon" width="20" style="display:block" :src="groupIcon">
                    </div>
                </cell>
            </group>

            <group :title="items.tag" v-for="items in contactList" :key="items.tag">
                <cell :title="user.name"  v-for="(user, uk) in items.users" :key="uk" @click.native="goPersonInfo()">
                    <img slot="icon" width="20" style="display:block;margin-right:5px;" :src="user.img">
                </cell>
            </group>
        </div>
    </div>
    </section>
</template>

<script>
  import ImHeaderContact from '@/common/components/ImHeaderContact'
  import { Group, Cell, CellBox } from 'vux'
  export default {
    name: 'Rooms',
    data () {
      return {
        headerText: '',
        addPersonIcon: require('@/assets/ali_icon/icon_addperson.png'),
        groupIcon: require('@/assets/ali_icon/icon_group.png'),
        contactList: [
          {
            tag: 'A',
            users: [
              {
                img: 'https://sinacloud.net/vue-wechat/images/headers/baiqian.jpg',
                name: '张飞'
              },
              {
                img: 'https://sinacloud.net/vue-wechat/images/headers/baiqian.jpg',
                name: '刘备'
              },
              {
                img: 'https://sinacloud.net/vue-wechat/images/headers/baiqian.jpg',
                name: '赵云'
              }
            ]
          },
          {
            tag: 'B',
            users: [
              {
                img: 'https://sinacloud.net/vue-wechat/images/headers/baiqian.jpg',
                name: '关羽'
              }
            ]
          },
          {
            tag: 'C',
            users: [
              {
                img: 'https://sinacloud.net/vue-wechat/images/headers/baiqian.jpg',
                name: '曹操'
              },
              {
                img: 'https://sinacloud.net/vue-wechat/images/headers/baiqian.jpg',
                name: '曹丕'
              },
              {
                img: 'https://sinacloud.net/vue-wechat/images/headers/baiqian.jpg',
                name: '曹植'
              }
            ]
          }
        ]
      }
    },
    components: {
      ImHeaderContact: ImHeaderContact,
      Group: Group,
      Cell: Cell,
      CellBox: CellBox
    },
    methods: {
      goPersonInfo: function () {
        this.$router.push({name: 'personInfo'})
      },
      goAddContact: function () {
        this.$router.push({name: 'addContact'})
      }
    }
  }
</script>

<style lang="less" scoped>
    #contact {
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
        .group-icon {
            border-radius: 8px;
            background-color: #09BB07;
            padding: 10px;
            margin-right: 5px;
            img {
                width: 20px;
                height: 20px;
            }
        }
        img {
            border-radius: 8px;
            width: 40px;
            height: 40px;
        }
    }

</style>
