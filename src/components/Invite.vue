<template>
  <div class="invite" id="invite">
      <div class="container" v-if="this.$store.state.logined">
          <div class="user-center">
              <img src="/static/img/uc.png" alt="" class="fl">
              <div class="fl">
                  <p class="name">{{this.$store.state.userInfo.name}}</p>
                  <p class="bonus text-shadow">BONUS: {{this.$store.state.userInfo.deposit}}DCVT (≈{{this.money}} USD) </p>
                  <p class="invited">Friends Invited: {{this.$store.state.inviteStatistics.primary}} / Friends of Friends Joined: {{this.$store.state.inviteStatistics.secondary}}  </p>
              </div>
          </div>
          <div class="clear-fix"></div>
          <div style="position: relative">
              <p class="text-left text-shadow" style="font-family: 'special';margin: 2vh 0;font-size: 50px">Invite your friends to <br/>earn free ETH and DCVT</p>
              <p class="text-left" style=" margin: 3vh 0;color: #999999;font-size: 1.0rem;"><img src="/static/img/question-icon.png" alt="question" style="width: 1rem;margin: 0 5px">
                  Your friends and you earn tokens together.
                  The more friends invited, the more tokens rewarded.</p>
              <div class="intro-des">
                  <p>• Every conquestor has three chances to earn supply drops each day!</p>

                  <p>• An equal amount of DCVT earned by your friend
                      each day will also be awarded to you.</p>

                  <p>• If your friend also invites their friends, you will earn 25% of the DCVT earned by friends-of-friends.</p>

                  <p>• DCVT given away this round of bounty airdrop: 1,000,000 Total value: $10M USD</p>

                  <p>• You will get rewarded for the frist 25 friends you
                      invite, and the frist 500 people invited by your
                      friends.</p>
                  <img src="/static/img/star2.png" alt="star" style="position: absolute;top: -280px;left: 780px;">
              </div>

          </div>

          <div class="clear-fix"></div>
          <div class="left" style="width: 375px">
              <div class="qrcode" id="qrcode"></div>
          </div>
          <div class="right">
              <div class="code-panel">
                  <p>My Invitation Code</p>
                  <div class="">
                      {{this.$store.state.userInfo.invite_code}}<div class="copy copy-code" :data-clipboard-text='"I am playing Decentraverse and earning free tokens everyday. Join me and let us earn tokens together! My invite code is\: " +this.$store.state.userInfo.invite_code'  v-on:click="copyContent('.copy-code')" >COPY</div>
                  </div>
                  <p>Play Decentraverse using this link</p>
                  <div class=""><p>{{this.BASE_DOMAIN+'/#/sign-up/'+this.$store.state.userInfo.invite_code}} </p><div class="copy copy-link" :data-clipboard-text="'I am playing Decentraverse and earning free tokens everyday. Join me and let\'s earn tokens together! My invite code is: '+ this.$store.state.userInfo.invite_code +'. You can use this link to join: https://'+this.BASE_DOMAIN+'/#/sign-up/'+this.$store.state.userInfo.invite_code" v-on:click="copyContent('.copy-link')">COPY</div></div>

              </div>
          </div>

          <div class="div" style="height: 9rem;margin: 5vh 0;">

              <img src="/static/img/spaceship.png" alt="spaceship" class="spaceship">
          </div>
          <div class="clear-fix"></div>
          <p class="text-center" style="margin: 2vh 0;font-family: inherit;font-size: 1.4rem;text-align: left;"><a href="https://discord.gg/McpaHrq" target="_blank"><img src="/static/img/discord.png" alt="discord" style=" width: 27px;margin: 0 10px;float: left;"></a>Join our Discord for occasional airdrops: <a href="https://discord.gg/McpaHrq" target="_blank">discord.gg/McpaHrq</a></p>
          <p class="tips">Share a screenshot of this screen to earn lots of DCVT!</p>
      </div>
      <div class="container" v-else style="max-width: 600px">
          <p class="text-center text-shadow" style="font-family: special;margin: 2vh 0;margin-top: 20vh;font-size:2rem">
              Invite your friends to earn free ETH and DCVT
              <!--Play Decentraverse<br/> Earn FREE ETH and DCVT -->
          </p>
          <p class="text-center" style=" margin: 3vh 0px;color: #999999;font-size: 1.3rem;"><img src="/static/img/question-icon.png" alt="question" style="width: 1rem;margin: 0 5px">Your friends and you earn tokens together.<br/>
              The more friends invited, the more tokens rewarded.</p>
          <img src="/static/img/spaceship.png" alt="spaceship" class="img100" style="margin: 5vh 0;">
          <p class="text-center" style="margin: 2vh 0;font-family: inherit;font-size: 1.4rem;text-align: left;"><a href="https://discord.gg/McpaHrq" target="_blank"><img src="/static/img/discord.png" alt="discord" style=" width: 27px;margin: 0 10px;float: left;"></a>Join our Discord for occasional airdrops: <a href="https://discord.gg/McpaHrq" target="_blank">discord.gg/McpaHrq</a></p>
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
<style scoped lang="scss">
    .invite{
        position: relative;
        min-height: 1125px;
        background-image: url(/static/img/invite-bg.png);
        background-size: cover;
        margin-top: -45px;
        z-index: 2;
        .qrcode,#qrcode{
            width: 160px;
            height: 160px;
            float: left;
            position: relative;
            margin: 5vh auto;
            img{
                width: 100%;
                object-fit: cover;
                display: block;
                position: absolute;
                top: 0;
                left: 0;
            }
        }
        .intro-des {
            position: relative;
            border-image-source: url(/static/img/banner-des.png);
            border-image-slice: 0 fill;
            border-image-width: 1px;
            width: 770px;
            padding: 97px;
            margin-left: -60px;
        p {
            font-size: 18px;
            padding-bottom: 5px;
        }
        }
        .spaceship{
            width: calc(95% - 100px);
            max-width: 237px;
            margin-top: calc(3vh);
            float: right;
        }
        .user-center{
            margin-top: 30px;
        >div{
            width: 80%;
        }
        .name{
            font-family: 'special';
            font-size: 25px;
        }
        .bonus{
            font-size: 20px;
        }
        .invited{
            font-size: 20px;
        }
        }
        .des{
            text-align: center;
        img{
            object-fit: cover;
            width: 100%;
            max-width: 600px;
        }
        }
        .img100{
            width: 100%;
            object-fit: cover;
        }
        .code-panel{
            margin: 5vh auto;
            width: 450px;
        >p{
            font-family: 'special';
            margin-bottom: 5px;
            font-size: 1.5rem;
        }

        >div{

            position: relative;
            height: 50px;
            width: 100%;
            border: 1px solid transparent;
            border-image-source: url(/static/img/code-panel-border.png);
            border-image-slice: 0 fill;
            border-image-width: 0px;
            line-height: 50px;
            text-indent: 8%;
            font-size: 1.5rem;
            margin-bottom: 15px;
        p{
            width: 80%;
            text-overflow: ellipsis;
            overflow: hidden;
            height: 50px;
        }
        .copy{
            position: absolute;
            right: 8%;
            top: 0;
        }
        }
        }
        .tips{
            font-family: "Microsoft YaHei UI";
            font-size: 10px;
            color: #949494;
            bottom: 60px;
            position: absolute;
        }
    }
</style>
