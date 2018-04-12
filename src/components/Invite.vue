<template>
  <div class="invite" id="invite">
      <div class="container" v-if="this.$store.state.logined">
          <div class="user-center">
              <img src="/static/img/uc.png" alt="" class="fl">
              <div class="fl">
                  <p class="name">{{this.$store.state.userInfo.name}}</p>
                  <p class="bonus text-shadow">BONUS: {{this.$store.state.userInfo.deposit}}DCVT (={{this.$store.state.userInfo.deposit*10}} USD) </p>
                  <p class="invited">Friends Invited: {{this.$store.state.inviteStatistics.primary}} / Friends of Friends Joined: {{this.$store.state.inviteStatistics.secondary}}  </p>
              </div>
          </div>
          <div class="clear-fix"></div>
          <p class="text-center text-shadow" style="font-family: special;margin: 2vh 0;font-size:2rem">Play Decentraverse<br/> Earn FREE ETH and DCVT </p>
          <p class="text-center" style="margin: 3vh 0;">Your friends and you earn tokens together.<br/>
              The more friends invited, the more tokens rewarded.</p>
          <div class="des">
              <img src="/static/img/invite-des.png" alt="">
          </div>
          <p class="text-center" style="margin: 2vh 0;">Join our Discord channel for occasional DCVT airdrops: <a href="https://discord.gg/McpaHrq" target="_blank">discord.gg/McpaHrq</a></p>
          <img src="/static/img/spaceship.png" alt="spaceship" class="img100">
          <div class="code-panel">
              <p>My Invitation Code</p>
              <div class="">
                  {{this.$store.state.userInfo.invite_code}}<div class="copy copy-code" :data-clipboard-text='this.$store.state.userInfo.invite_code'  v-on:click="copyContent('.copy-code')" >COPY</div>
              </div>
              <p>Play Decentraverse using this link</p>
              <div class=""><p>{{this.BASE_DOMAIN+'/#/sign-up?code='+this.$store.state.userInfo.invite_code}} </p><div class="copy copy-link" :data-clipboard-text="this.BASE_DOMAIN+'/#/sign-up/'+this.$store.state.userInfo.invite_code" v-on:click="copyContent('.copy-link')">COPY</div></div>
              <p class="tips">Share a screenshot of this screen to earn lots of DCVT!
              </p>
          </div>
      </div>
      <div class="container" v-else>
          <p class="text-center text-shadow" style="font-family: special;margin: 2vh 0;margin-top: 20vh;font-size:2rem">Play Decentraverse<br/> Earn FREE ETH and DCVT </p>
          <p class="text-center" style="margin: 3vh 0;">Your friends and you earn tokens together.<br/>
              The more friends invited, the more tokens rewarded.</p>
          <div class="des">
              <img src="/static/img/invite-des.png" alt="">
          </div>
          <p class="text-center" style="margin: 2vh 0;">Join our Discord channel for occasional DCVT airdrops: <a href="">discord.gg/McpaHrq</a></p>
          <img src="/static/img/spaceship.png" alt="spaceship" class="img100">
      </div>
  </div>
</template>

<script>
    import Clipboard from 'clipboard';
    import { MessageBox } from 'mint-ui'
    export default {
      name: 'Invite',
      data () {
        return {
          msg: 'Welcome to Invite',
          invite_code: null,
          invite_link: '',
          isLogin: this.$store.state.logined
        }
      },
      methods:{
        copyContent(dom){
          console.log(dom)
            let clipboard = new Clipboard(dom)
          clipboard.on('success', e => {
            MessageBox.alert('',{message: 'Copy it successfully and share it with your friends!',title: 'Tips',confirmButtonText: 'Confirm'}).then(action=>{

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
        }
      }
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
