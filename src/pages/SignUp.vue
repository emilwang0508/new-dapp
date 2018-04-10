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
      <input type="text" v-model="verifyCode">
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

export default {
  name: 'SignUp',
  data () {
    return {
      name:'',
      msg: '',
      email: '',
      password: '',
      code: '',
      verifyCode:'',
    }
  },
  methods:{
    handleSumit: function(event){
      let _this = this
      this.$validator.validateAll().then((result) => {
        if(result){
          const form = {
            name:this.name,
            email:this.email,
            password: this.password,
            invite_code: this.code,
            addresss: this.address,

          }
          this.$store.dispatch('signUp',form )
            .then(res=>{
              _this.$router.push('/')
            })
            .catch(error=>{

            })
        }
      });

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
