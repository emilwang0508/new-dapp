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
        <div class="verify-code-panel">
          <input type="email" v-model="email" name="email" v-validate="'required|email'" placeholder="Enter your email">
          <button class="send-button special" :disabled="this.isDisabled" @click="getCode">{{this.buttonMsg}}</button>
          <p  v-show="errors.has('email')" class="error">{{ errors.first('email') }}</p>
        </div>
      </div>
      <div class="input-group">
        <label for="code">Email Verify code</label>
            <input type="text" v-model="verifyCode" placeholder="Enter verification code" v-validate="'required|alpha_num'" name="verifyCode">
            <p  v-show="errors.has('verifyCode')" class="error">{{ errors.first('verifyCode') }}</p>
      </div>
      <div class="input-group">
      <label for="password" >Password</label>
        <input type="password" v-model="password" name="password" v-validate="'required|min:6|max:30'" placeholder="Enter your password">
        <p  v-show="errors.has('password')" class="error">{{ errors.first('password') }}</p>
      </div>
      <div class="input-group">
      <label for="code" >Invitation code</label>
      <input type="text" v-model="code">
      </div>

      <div class="input-group verifyCode">
      <label for="verifyCode">Verification Code</label>
        <Verify :type="3" :barSize="{width:'100%',height:'40px'}"  explain="slide to right" @success="verify('success')"  @error="verify('error')"></Verify>
      </div>
      <div class="h50"></div>
      <button class="submit" v-on:click="handleSumit">Submit</button>
    </div>
    <p class="text-center text-shadow" style="margin:2rem 0;font-size:1.5rem">I already have an account, please <a href="/#/sign-in" style="text-decoration: underline;">login</a></p>
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
      isDisabled: false,
      msg: '',
      email: '',
      password: '',
      code: this.$route.params.code,
      verifyCode: '',
      isSend: false,
      buttonMsg:'Get Code',
      timer: null,
      count: 0,
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
          verify_code: this.verifyCode,
          password: this.password,
          addresss: this.address,
        }:
          form = {
            name:this.name,
            email:this.email,
            password: this.password,
            verify_code: this.verifyCode,
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
    },
    getCode(ele){
      console.log(this.$el)
      let _this = this
      let action = 'verifyEmail'
      let source = _this.email
      let e = {
        action: 'verifyEmail',
        source: _this.email
      }
      this.$store.dispatch('getCode', e)
        .then((res)=>{
          _this.isSend = true
          const TIME_COUNT = 60
          if (!this.timer){
            this.count = TIME_COUNT;
            this.timer = setInterval(() => {
              if (this.count > 0 && this.count <= TIME_COUNT) {
                this.count--;
                this.buttonMsg = this.count + ' s'
                this.isDisabled = true
                //更改内容
              } else {
                //更改内容
                this.buttonMsg = 'Get Code'
                clearInterval(this.timer);
                this.timer = null;
                this.isDisabled = false
              }
            }, 1000)
          }

        })
        .catch((error)=>{

        })
    },
  },
  watch:{
    email(val,oldVal){
      this.$validator.validate('email').then((res)=>{
        (res==true)?this.isDisabled = false:this.isDisabled = true
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
