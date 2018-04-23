<template>
  <div class="sign-panel">
    <div class="container">
      <a href="/#/"><img src="/static/img/logo.png" alt="logo" class="logo"></a>
      <p class="des text-shadow text-center">AAA Space Domination MMO on the Ethereum Blockchain</p>
      <div class="form-panel">
        <i><img src="/static/img/form-corner.png" alt=""></i>
        <i><img src="/static/img/form-corner.png" alt=""></i>
        <i><img src="/static/img/form-corner.png" alt=""></i>
        <div class="input-group">
          <label for="account" >Account</label>
          <input type="account" v-model="account" id="email" name="account" v-validate="'required|account|min:4|max:30'" placeholder="Enter your email or name">
          <p  v-show="errors.has('account')" class="error">{{ errors.first('account') }}</p>

        </div>
        <div class="input-group">
          <label for="password" >Password</label>
          <input type="password" v-model="password" id="password" name="password" v-validate="'required|min:6|max:30'"  placeholder="Enter your password">
          <p  v-show="errors.has('password')" class="error">{{ errors.first('password') }}</p>

        </div>
        <div class="h30"></div>
        <button class="submit"  v-on:click="login" :disabled="this.submitIsDisabled">Submit</button>
      </div>
      <p class="text-center text-shadow" style="margin:2rem 0;font-size:1.5rem">if you don't have an account, please <a href="/#/sign-up" style="text-decoration: underline;">register</a></p>

    </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import { Toast } from 'mint-ui'

export default {
  name: 'SignIn',
  data () {
    return {
        msg: 'SignIn',
        account: '',
        password: '',
        submitIsDisabled: false
    }
  },
  methods: {
    login: function (event) {
      this.submitIsDisabled = true
      let _this = this
      if (event) {
        this.$validator.validateAll().then((result) => {
          if (result){
            let data = {account: this.account,password: this.password}
            let _this = this
            this.$store.dispatch('login',data)
              .then((res)=>{
                _this.getUserInfo(res.msg.session)
                _this.submitIsDisabled = true
              }).catch((error)=>{
                if (error)
                  _this.submitIsDisabled = false
            })
          }
        })

      }
    },
    getUserInfo(session){
      let _this = this
      this.$store.dispatch('getUserInfo',session)
        .then((res)=>{
          _this.$router.push('/bounty')
          document.documentElement.scrollTop  = 0
          window.pageYOffset  = 0
          document.body.scrollTop  = 0
        }).catch((error)=>{
        Toast(error)
      })
    }
  },
  created(){
    if(this.$store.state.logined === true){
      this.$router.push('/bounty')
    }
  },
  mounted(){
    var _iframe = document.getElementsByName('intercom-launcher-frame')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">


</style>

