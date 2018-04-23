<template>
  <div class="index">
      <div class="banner">
          <Header />
          <div class="container">
              <div class="left">
                  <img src="/static/img/logo.png" alt="logo" class="logo">
                  <p class="text-shadow text-center">AAA Space Domination MMO on the Ethereum Blockchain</p>
                  <div class="intro-des">
                      <p>• Every conquestor has three chances to earn supply drops each day!</p>

                      <p>• An equal amount of DCVT earned by your friend
                      each day will also be awarded to you.</p>

                      <p>• If your friend also invites their friends, you will earn 25% of the DCVT earned by friends-of-friends.</p>

                      <p>• DCVT given away this round of bounty airdrop: 1,000,000 Total value: $10M USD</p>

                      <p>• You will get rewarded for the frist 25 friends you
                      invite, and the frist 500 people invited by your
                      friends.</p>
                  </div>
                  <div class="clearfix"></div>
                  <a href="https://youtu.be/8SlrUund6Rc" class="video-link  link" target="_blank"><p class="text-shadow special">Video</p></a>
                  <a href="#" class="coming-link link"><p class="text-shadow special">COMING SOON</p></a>
              </div>
              <div class="right">
                  <Lottery />
              </div>


          </div>


          <div class="h50"></div>
      </div>
      <Rule />
      <Invite :isLogin=isLogin></Invite>
  </div>
</template>

<script>

import Header from '../components/Header'
import Lottery from '../components/Lottery'
import Invite from '../components/Invite'
import Rule from '../components/Rule'
import imgMore from '../../static/img/more.png'
export default {
  name: 'Hello',
  data () {
    return {
        imgMore:imgMore,
        isLogin: false,
    }
  },
  components:{
    Lottery, Invite, Rule, Header
  },
  created(){
    this.isLogin = this.$store.state.logined
    let session = locale.get('session')

    let _this = this
    if (session!==undefined) {
    axios.get(process.env.BASE_API+'/api/_csrf_token_').then((res)=>{
      if (res.status===200&&res.data.code==200){
        let csrf_token = res.data.msg
        window.axios.defaults.headers.common['csrf-token'] = csrf_token;
        window.axios.defaults.headers.common['_csrf'] = csrf_token;
        window.axios.defaults.headers.common['xsrf-token'] = csrf_token;
        window.axios.defaults.headers.common['x-csrf-token'] = csrf_token;
        window.axios.defaults.headers.common['x-xsrf-token'] = csrf_token;
        window.axios.defaults.headers.common['credentials'] = 'same-origin';

          _this.$store.dispatch('inviteStatistics', session)
          _this.$store.dispatch('getUserInfo', session)
          _this.$store.commit('SET_SESSION',session)
        

        
      }

    }).catch((error)=>{

    })
    }




    if ((typeof session)===undefined&&session===undefined){
      return false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    .index{
    .banner{
        position: relative;
        background-image: url(/static/img/background-full.png);
        padding-top: 1px;
        background-size: cover;
        background-position: bottom;
        min-height: 100vh;
        margin-top: -10px;
        z-index: 2;
    .intro-des{
        border-image-source: url(/static/img/banner-des.png);
        border-image-slice: 0 fill;
        border-image-width: 1px;
        width: 635px;
        height: 185px;
        padding: 68px;
    p{
        font-size: 18px;
        padding-bottom: 5px;
    }
    }
    .link{
        position: absolute;
        text-align: center;
        display: inline-block;
        height: 35px;
        width: 80vw;
        max-width: 280px;
        line-height: 22px;
        border-image-source: url(/static/img/video-btn-border.png);
        border-image-slice: 0 0 fill;
        border-image-width: 0px;
        margin: 10px 0;

    }
    .video-link{
        left: 10%;
    }
    .coming-link{
        right: 10%;
    }
    }
    }
</style>
