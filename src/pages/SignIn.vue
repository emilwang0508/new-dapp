<template>
  <div class="sign-panel">
    <div class="container">
      <a href="/#/"><img src="/static/img/logo.png" alt="logo" class="logo"></a>
      <p class="des text-shadow">AAA Space Domination MMO on Ethereum Blockchain</p>
      <div class="form-panel">
        <i><img src="/static/img/form-corner.png" alt=""></i>
        <i><img src="/static/img/form-corner.png" alt=""></i>
        <i><img src="/static/img/form-corner.png" alt=""></i>
        <div class="input-group">
          <label for="email" >Name</label>
          <input type="email" v-model="name" id="email" name="name" v-validate="'required|alpha_dash|min:4|max:30'">
          <p  v-show="errors.has('name')" class="error">{{ errors.first('name') }}</p>

        </div>
        <div class="input-group">
          <label for="password" >Password</label>
          <input type="password" v-model="password" id="password" name="password" v-validate="'required|min:6|max:30'">
          <p  v-show="errors.has('password')" class="error">{{ errors.first('password') }}</p>

        </div>
        <div class="h50"></div>
        <button class="submit"  v-on:click="login">Submit</button>
      </div>
      <p class="text-center text-shadow" style="margin:2rem 0;font-size:1.5rem">if you don't have an account, please <a href="/#/sign-up" style="text-decoration: underline;">register</a></p>

    </div>
  </div>
</template>

<script>
import '../assets/css/main.scss'
import { mapGetters, mapActions } from 'vuex'
import { Toast } from 'mint-ui'

export default {
  name: 'SignIn',
  data () {
    return {
        msg: 'SignIn',
        name: '',
        password: ''
    }
  },
  methods: {
    login: function (event) {
      if (event) {
        this.$validator.validateAll().then((result) => {
          if (result){
            let data = {name: this.name,password: this.password}
            let _this = this
            this.$store.dispatch('login',data)
              .then((res)=>{
                _this.getUserInfo(res.msg.session)
              }).catch((error)=>{

            })
          }
        })

      }
    },
    getUserInfo(session){
      let _this = this
      this.$store.dispatch('getUserInfo',session)
        .then((res)=>{
          _this.$router.push('/')
        }).catch((error)=>{
        Toast(error)
      })
    }
  },
  created(){
    if(this.$store.state.logined === true){
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">


</style>

