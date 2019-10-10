<template>
    <div>
        <div class="flex-container" >
            <div class="item-1" @click="showKbordAudio('audio')" v-if="txtstat=='kbord'">
                <img v-bind:src="audio"/>
            </div>
            <div class="item-1" @click="showKbordAudio('kbord')" v-if="txtstat=='audio'">
                <img v-bind:src="kbord"/>
            </div>
            <div class="item-2" v-if="txtstat=='kbord'">
                <x-input v-model="txtmsg"  placeholder="I'm placeholder"></x-input>
            </div>
            <div class="item-2" v-if="txtstat=='audio'">
                <x-button plain>按住 说话</x-button>
            </div>
            <div class="item-3" @click="showPanels('doutu')">
                <img v-bind:src="smile" />
            </div>
            <div class="item-4" v-if="!txtmsg" @click="showPanels('more')" >
                <img v-bind:src="more"  />
            </div>
            <div class="item-4" v-if="!!txtmsg">
                <img v-bind:src="send" />
            </div>
        </div>
        <div id="panels" style="display: flex">
            <div v-if="panelstat=='doutu'">
                <div class="doutures" >
                    <div  class="res" v-for="item in doutu.choosed.assets">
                        <img :class="doutu.choosed.size ||'small'"  :src="item" />
                    </div>
                </div>
                <div class="doutupkg">
                    <div class="pkg" @tap="doutu.choosed=item" v-for="item in doutu.packages">
                        <img :class="item.size || 'small'"  :src="item.icon" />
                    </div>
                </div>
            </div>

            <div v-if="panelstat=='more'" class="plugins">
                <div class="plugin" v-for="item in plugins">
                    <img  :src="item.icon" />
                    <div v-html="item.slot"></div>
                    <p v-text="item.name"></p>

                </div>

            </div>
         </div>
    </div>
</template>
<script>
  import { XInput, XButton } from 'vux'
  export default {
    name: 'ChatSendV1',
    data () {
      return {
        audio: require('@/assets/ali_icon/icon_im_voice.png'),
        kbord: require('@/assets/ali_icon/icon_im_keyboard.png'),
        smile: require('@/assets/ali_icon/icon_im_face.png'),
        more: require('@/assets/ali_icon/icon_im_more.png'),
        send: require('@/assets/ali_icon/icon_send.png'),
        styleInputObject: {
          marginTop: '5px',
          width: '100%'
        },
        txtmsg: '',
        panelstat: 'kbord',
        txtstat: 'kbord',
        doutu: {
          config: {
            'baseurl': '/asset/plugins/doutu/',
            'pkgids': ['mkgif', 'emoj']
          },
          packages: [
            {
              'icon': require('@/assets/doutu/emoj/0.gif'),
              'size': 'small'
            }
          ],
          choosed: {
            'pkgid': 'emoj',
            'assets': [require('@/assets/doutu/emoj/1.gif')],
            'size': 'small'
          }
        },
        plugins: [
          {
            icon: require('@/assets/ali_icon/icon_photo_fill.png'),
            name: '照片',
            id: 'upload',
            slot: '<input accept=\'image/gif,image/jpeg,,image/png\' type=\'file\' onchange=\'upload(this)\' style="width: 64px;height: 64px;position: absolute;opacity: 0;top:0" class="upload_input" />'
          },
          {
            icon: require('@/assets/ali_icon/icon_camera.png'),
            name: '拍照',
            id: 'camera',
            slot: '<input accept=\'image/*\' capture=\'camera\' type=\'file\' onchange=\'upload(this)\' style="width: 64px;height: 64px;position: absolute;opacity: 0;top:0" class="upload_input" />'
          },
          {
            icon: require('@/assets/ali_icon/icon_voipphone.png'),
            name: '语音',
            id: 'audiocall'
          },
          {
            icon: require('@/assets/ali_icon/icon_video_fill.png'),
            name: '视频',
            id: 'videocall'
          },
          {
            icon: require('@/assets/ali_icon/icon_redpacket_fill.png'),
            name: '红包',
            id: 'redpackage'
          },
          {
            icon: require('@/assets/exchange.png'),
            name: '转账',
            id: 'exchange'
          },
          {
            icon: require('@/assets/address.png'),
            name: '地址',
            id: 'address'
          },
          {
            icon: require('@/assets/person.png'),
            name: '名片',
            id: 'person'
          }
        ]
      }
    },
    methods: {
      showPanels: function (plag) {
        if (this.panelstat === plag) {
          this.panelstat = 'kbord'
        } else {
          this.panelstat = plag
        }
      },
      showKbordAudio: function (plag) {
        if (this.txtstat === plag) {
          this.txtstat = 'kbord'
        } else {
          this.txtstat = plag
        }
      }
    },
    components: {
      XInput: XInput,
      XButton: XButton
    }
  }
</script>
<style scoped lang="less">
    .flex-container{
        display:flex;
        flex-direction:row;
        width:100%;
        position: fixed;
        bottom: 0px;
        background-color: #F8F8F8;
        .item-1{
            padding: 5px;
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .item-2{
            margin:auto;
            width: 100%;
            padding: 5px;
            background-color: #FFFFFF;
        }
        .txt{
            margin:auto;
        }
        .item-3{
            padding: 5px;
            margin:auto;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .item-4{
            padding: 5px;
            margin:auto;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        img{
            width: 26px;
            height: 26px;
        }
    }
    #panels{
        background-color: #FFFFFF;
        display: flex;
        position: fixed;
        bottom: 54px;
        border-bottom: 1px solid #eee;
        .doutures{
            flex-direction: row;
            flex-wrap: wrap;
            display: flex;
            img{
                margin: 5px;
            }
        }
        .doutupkg{
            flex-direction: row;
            flex-wrap: wrap;
            display: flex;
            img{
                margin: 5px;
            }
        }
        .plugins{
            flex-direction: row;
            flex-wrap: wrap;
            display: flex;
            .plugin{
                padding: 10px;
                margin-left: 10px;
                margin-right: 10px;
                img{
                    width: 32px;
                }
                p{
                    text-align: center;
                    font-size: 16px;
                }

            }
            .weui-btn_plain-default {
                border: 1px solid #ccc;
            }
        }
    }
    .upload_input{
        display: none!important;
    }
</style>
