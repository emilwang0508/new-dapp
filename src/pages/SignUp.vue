<template>
<div class="sign-panel ">
  <div class="container">
    <a href="/#/"><img src="/static/img/logo.png" alt="logo" class="logo"></a>
    <p class="des text-shadow">AAA Space Domination MMO on Ethereum Blockchain</p>
    <div class="form-panel">
      <i><img src="/static/img/form-corner.png" alt=""></i>
      <i><img src="/static/img/form-corner.png" alt=""></i>
      <i><img src="/static/img/form-corner.png" alt=""></i>
      <div class="input-group">
      <label for="name" >Name</label>
        <input type="text" v-model="name" v-validate="'required|alpha_dash|min:4|max:30'" name="name">
        <p  v-show="errors.has('name')" class="error">{{ errors.first('name') }}</p>
      </div>
      <div class="input-group">
      <label for="email" >Email</label>
        <input type="email" v-model="email" name="email" v-validate="'required|email'">
        <p  v-show="errors.has('email')" class="error">{{ errors.first('email') }}</p>
      </div>
      <div class="input-group">
      <label for="password" >Password</label>
      <input type="password" v-model="password" name="password" v-validate="'required|min:6|max:30'">
        <p  v-show="errors.has('password')" class="error">{{ errors.first('password') }}</p>
      </div>
      <div class="input-group">
      <label for="code" >Invitation code</label>
      <input type="text" v-model="code">
      </div>
      <div class="input-group verifyCode">
      <label for="verifyCode" >Verification Code</label>
      <!--<input type="text" v-model="verifyCode">-->
        <Verify :type="3" :barSize="{width:'100%',height:'40px'}"  explain="slide to right" @success="verify('success')"  @error="verify('error')"></Verify>
      </div>
      <div class="h50"></div>
      <button class="submit" v-on:click="handleSumit">Submit</button>
    </div>
    <p class="text-center text-shadow">I already have an account, please <a href="/#/sign-in">login</a></p>
    <div class="h50"></div>
  </div>
</div>
</template>

<script>
import '../assets/css/main.scss'
import { mapGetters, mapActions } from 'vuex'
import Verify from 'vue2-verify'

export default {
  name: 'SignUp',
  data () {
    return {
      name:'',
      msg: '',
      email: '',
      password: '',
      code: '',
      isVerified: false,
    }
  },
  components:{
    Verify
  },
  methods:{
    handleSumit: function(event){
      let _this = this
      if(this.isVerified == false){
        _this.$toast('Verification code verification failed')
      }else {
        let form
        (this.code=='')?
        form = {
          name:this.name,
          email:this.email,
          password: this.password,
          addresss: this.address,
        }:
          form = {
            name:this.name,
            email:this.email,
            password: this.password,
            invite_code: this.code,
            addresss: this.address,
          }
        this.$validator.validateAll().then((result) => {
          if(result){

            this.$store.dispatch('signUp',form )
              .then(res=>{
                console.log(res.msg.session)
                _this.getUserInfo(res.msg.session)

              })
              .catch(error=>{

              })
          }
        });
      }
    },
    verify(e){
      if (e=='success'){
        this.isVerified = true
      }else{
        this.isVerified = false
      }
    }
    ,getUserInfo(session){
      let _this = this
      this.$store.dispatch('getUserInfo',session)
        .then((res)=>{
          _this.$router.push('/')
        }).catch((error)=>{

      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
