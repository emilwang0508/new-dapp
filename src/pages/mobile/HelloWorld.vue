<template>
  <div class="index">
      <div class="banner">
          <Header />
          <img src="/static/img/logo.png" alt="logo" class="logo">
          <p class="text-shadow text-center">AAA Space Domination MMO on the Ethereum Blockchain</p>
          <a href="/#/intro" class="button-more"><img :src=imgMore alt="button-more"></a>
          <Lottery />
          <div class="h50"></div>
      </div>
      <Rule />
      <Invite :isLogin=isLogin></Invite>
  </div>
</template>

<script>

import Header from '../../components/mobile/Header'
import Lottery from '../../components/mobile/Lottery'
import Invite from '../../components/mobile/Invite'
import Rule from '../../components/mobile/Rule'
import imgMore from '../../../static/img/more.png'
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
