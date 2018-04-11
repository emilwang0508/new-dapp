<template>
  <div class="index">
      <div class="banner">
          <Header />
          <img src="/static/img/logo.png" alt="logo" class="logo">
          <p class="text-shadow text-center">AAA Space Domination MMO on Ethereum Blockchain</p>
          <a href="/#/intro" class="button-more"><img :src=imgMore alt="button-more"></a>
          <Lottery />
          <div class="h50"></div>
      </div>
      <Rule />
      <Invite :isLogin=isLogin></Invite>
  </div>
</template>

<script>
import '../assets/css/main.scss'
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
    let session = localStore.get('session')
    if ((typeof session)===undefined||session===undefined||session==='undefined'){
        return false
    }
    if (session === null||session === 'null'||session === ''){
      return false
    }

    axios.get(process.env.BASE_API+'/api/_csrf_token_').then((res)=>{
      if (res.status==200){
        let csrf_token = res.data.msg
        window.axios.defaults.headers.common['csrf-token'] = csrf_token;
        window.axios.defaults.headers.common['_csrf'] = csrf_token;
        window.axios.defaults.headers.common['xsrf-token'] = csrf_token;
        window.axios.defaults.headers.common['x-csrf-token'] = csrf_token;
        window.axios.defaults.headers.common['x-xsrf-token'] = csrf_token;
        window.axios.defaults.headers.common['credentials'] = 'same-origin';
        this.$store.dispatch('inviteStatistics', session)
        this.$store.dispatch('getUserInfo', session)
        this.$store.commit('SET_SESSION',session)
      }
    }).catch((error)=>{

    })



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
