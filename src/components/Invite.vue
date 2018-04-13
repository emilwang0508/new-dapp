<template>
  <div class="invite" id="invite">
      <div class="container" v-if="this.$store.state.logined"  style="max-width: 600px">
          <div class="user-center">
              <img src="/static/img/uc.png" alt="" class="fl">
              <div class="fl">
                  <p class="name">{{this.$store.state.userInfo.name}}</p>
                  <p class="bonus text-shadow">BONUS: {{this.$store.state.userInfo.deposit}}DCVT (={{this.money}} USD) </p>
                  <p class="invited">Friends Invited: {{this.$store.state.inviteStatistics.primary}} / Friends of Friends Joined: {{this.$store.state.inviteStatistics.secondary}}  </p>
              </div>
          </div>
          <div class="clear-fix"></div>
          <p class="text-center text-shadow" style="font-family: special;margin: 2vh 0;font-size:2rem">Invite your friends to <br/>earn free ETH and DCVT</p>
          <p class="text-center" style=" margin: 3vh 0px;color: #999999;font-size: 1.0rem;"><img src="/static/img/question-icon.png" alt="question" style="width: 1rem;margin: 0 5px">Your friends and you earn tokens together.<br/>
              The more friends invited, the more tokens rewarded.</p>



          <div class="code-panel">
              <p>My Invitation Code</p>
              <div class="">
                  {{this.$store.state.userInfo.invite_code}}<div class="copy copy-code" :data-clipboard-text='"I am playing Decentraverse and earning free tokens everyday. Join me and let us earn tokens together! My invite code is\: " +this.$store.state.userInfo.invite_code'  v-on:click="copyContent('.copy-code')" >COPY</div>
              </div>
              <p>Play Decentraverse using this link</p>
              <div class=""><p>{{this.BASE_DOMAIN+'/#/sign-up?code='+this.$store.state.userInfo.invite_code}} </p><div class="copy copy-link" :data-clipboard-text="'I am playing Decentraverse and earning free tokens everyday. Join me and let\'s earn tokens together! My invite code is: '+ this.$store.state.userInfo.invite_code +'. You can use this link to join: '+this.BASE_DOMAIN+'/#/sign-up/'+this.$store.state.userInfo.invite_code" v-on:click="copyContent('.copy-link')">COPY</div></div>


          </div>
          <div class="div" style="height: 9rem;margin: 5vh 0;">
              <div class="qrcode" id="qrcode"></div>
              <img src="/static/img/spaceship.png" alt="spaceship" class="spaceship">
          </div>
          <div class="clear-fix"></div>
          <p class="text-center" style="margin: 2vh 0;font-family: inherit;font-size: 1rem;text-align: left;"><a href="https://discord.gg/McpaHrq" target="_blank"><img src="/static/img/discord.png" alt="discord" style=" width: 25px;margin: 0 10px;float: left;"></a>Join our Discord for occasional airdrops: <a href="https://discord.gg/McpaHrq" target="_blank">discord.gg/McpaHrq</a></p>
          <p class="tips">Share a screenshot of this screen to earn lots of DCVT!</p>
      </div>
      <div class="container" v-else style="max-width: 600px">
          <p class="text-center text-shadow" style="font-family: special;margin: 2vh 0;margin-top: 20vh;font-size:2rem">
              Invite your friends to earn free ETH and DCVT
              <!--Play Decentraverse<br/> Earn FREE ETH and DCVT -->
          </p>
          <p class="text-center" style=" margin: 3vh 0px;color: #999999;font-size: 1.0rem;"><img src="/static/img/question-icon.png" alt="question" style="width: 1rem;margin: 0 5px">Your friends and you earn tokens together.<br/>
              The more friends invited, the more tokens rewarded.</p>
          <img src="/static/img/spaceship.png" alt="spaceship" class="img100" style="margin: 5vh 0;">
          <p class="text-center" style="margin: 2vh 0;font-family: inherit;font-size: 1rem;text-align: left;"><a href="https://discord.gg/McpaHrq" target="_blank"><img src="/static/img/discord.png" alt="discord" style=" width: 25px;margin: 0 10px;float: left;"></a>Join our Discord for occasional airdrops: <a href="https://discord.gg/McpaHrq" target="_blank">discord.gg/McpaHrq</a></p>
      </div>
  </div>
</template>

<script>
    import Clipboard from 'clipboard';
    import { MessageBox } from 'mint-ui'
    import { FloatMul } from '../common'
    import { mapGetters } from 'vuex'
    import QRCode from 'qrcodejs2'
    export default {
      name: 'Invite',
      data () {
        return {
          msg: 'Welcome to Invite',
          invite_code: null,
          invite_link: '',
          isLogin: this.$store.state.logined,
          i:false
        }
      },
      computed: {
        ...mapGetters(['money','logined'])
      },
      watch:{
        logined(newVal,oldVal){



          if (newVal!==false){
            this.$nextTick(function () {
                let qrcodeNode = 'qrcode'
                let qrcode = new QRCode(qrcodeNode, {
                  text:'http://'+this.BASE_DOMAIN+'/#/sign-up/'+this.$store.state.userInfo.invite_code,
                  width: 180,
                  height: 180,
                  colorDark: "#000000",
                  colorLight: "#ffffff"
                });
                console.log(qrcode._oDrawing)
                console.log(qrcode._oDrawing._elImage.currentSrc)
              })
          }
          return newVal
        }
      },
      updated(){
        if(this.$store.state.logined==true){
        let qrcodeNode = document.getElementById("qrcode")
        let qrcode = new QRCode(qrcodeNode, {
          text:'http://'+this.BASE_DOMAIN+'/#/sign-up/'+this.$store.state.userInfo.invite_code,
          width: 180,
          height: 180,
          colorDark: "#000000",
          colorLight: "#ffffff"
        });
        }
      },
      methods:{
        copyContent(dom){
            let clipboard = new Clipboard(dom)
          clipboard.on('success', e => {
            MessageBox.alert('',{message: 'Code copied successfully, share with friends to earn 100% DCVT bonus from their rewards',title: 'Tips',confirmButtonText: 'Confirm'}).then(action=>{

            })
            // 释放内存
            clipboard.destroy()
          })
          clipboard.on('error', e => {
            // 不支持复制
            MessageBox.alert('',{message: 'This browser does not support copy!',title: 'Tips',confirmButtonText: 'Confirm'}).then(action=>{

            })
            // 释放内存
            clipboard.destroy()
          })
        },
      },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
