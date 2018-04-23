<template>
  <div class="sign-panel">
    <div class="container">
        <a href="/#/"><img src="/static/img/logo.png" alt="logo" class="logo"></a>
        <p class="des text-shadow text-center">AAA Space Domination MMO on the Ethereum Blockchain</p>
        <div class="form-panel">
            <i><img src="/static/img/form-corner.png" alt=""></i>
            <i><img src="/static/img/form-corner.png" alt=""></i>
            <i><img src="/static/img/form-corner.png" alt=""></i>
            <div class="tag-list">
                <div class="tag special text-center text-shadow fl" @click="switchTag(index)"  v-for="(tag, index) in tags" v-bind:class="{active:(tagIndex==index)}">{{tag.text}}</div>
            </div>
            <div class="clear-fix"></div>
            <div class="h50"></div>
            <div class="h30"></div>
            <div class="input-group" style="position: relative"  v-if="tagIndex=='0'">
                <label for="account" >Account</label>
                <input type="email" v-model="account" id="account" name="account" v-validate="'required|email'" placeholder="Enter your email">
                <button class="send-button special" :disabled="this.isDisabled" @click="getCode">{{this.buttonMsg}}</button>
                <p  v-show="errors.has('account')" class="error">{{ errors.first('account') }}</p>

            </div>
            <div class="input-group" style="position: relative" v-else>
                <label for="account" >Account<br></label>
                <VuePhoneInput :phone="phone" v-on:listen-to-child-event=""></VuePhoneInput>
                <button class="send-button special" :disabled="this.isDisabled" @click="getCode">{{this.buttonMsg}}</button>
                <p  v-show="errors.has('phone')" class="error">{{ errors.first('phone') }}</p>

            </div>
            <div class="input-group">
              <label for="account" >Verify Code</label>
              <input type="account" v-model="verifyCode" id="verifyCode" name="verifyCode" v-validate="'required|alpha_num|min:4|max:30'" placeholder="Check your email or SMS">
              <p  v-show="errors.has('verifyCode')" class="error">{{ errors.first('verifyCode') }}</p>

            </div>
            <div class="input-group">
              <label for="password" >New Password</label>
              <input type="password" v-model="password" id="password" name="password" v-validate="'required|min:6|max:30'"  placeholder="Enter your password">
              <p  v-show="errors.has('password')" class="error">{{ errors.first('password') }}</p>

            </div>
            <div class="h30"></div>
            <button class="submit"  v-on:click="handleSubmit" :disabled="this.submitIsDisabled">Submit</button>
        </div>
      <p class="text-center text-shadow" style="margin:2rem 0;font-size:1.5rem">if you don't have an account, please <a href="/#/sign-up" style="text-decoration: underline;">register</a></p>

    </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import { Toast } from 'mint-ui'
import VuePhoneInput from '../components/IntlTelInput.vue'
import * as api from '../api'
export default {
  name: 'ResetPwd',
  data () {
    return {
        msg: 'SignIn',
        account: '',
        phone:{
          type: Object,
          code: 93,
        },
        buttonMsg:'Send',
        panel:'phone',
        mobile:'',
        password: '',
        verifyCode: '',
        submitIsDisabled: false,
        isDisabled: true,
        timer: null,
        isValid: false,
        count: 0,
        tags:[
          {active:'true',text:"Use Email"},
          {active:'false',text:"Use Mobile Phone Number"},
        ],
        tagIndex: 0,

    }
  },
  methods: {
    handleSubmit: function (event) {
      this.submitIsDisabled = true
      let _this = this
      if (event) {
        this.$validator.validateAll().then((result) => {
          if (result){
            let data = {source: this.account||this.mobile,password: this.password,verify_code: this.verifyCode}
            let _this = this
            api.resetPassword(data).then((res)=>{
              this.submitIsDisabled = true
              _this.$router.push('sign-in')
            }).catch((error)=>{
              this.submitIsDisabled = false
            })
          }else {
            this.submitIsDisabled = false
          }
        })

      }
    },
    getCode(ele){
      let _this = this
      let e
        (_this.tagIndex=='1')
          ?
          e = {
            action :'verifyPhone',
            source: _this.mobile
          }

        : e = {
            action:'verifyEmail',
            source: _this.account
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
                this.buttonMsg = 'Send'
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
    switchTag(e){
      this.tagIndex=e
    }
  },
  created(){
    if(this.$store.state.logined === true){
      this.$router.push('/')
    }
  },
  mounted(){

  },
  components:{
    VuePhoneInput
  },
  watch:{
    mobile(){
      if (this.mobile.length>=6){
        this.isDisabled = false
        this.isValid = true
      }else {
        this.isDisabled = true
        this.isValid = false
      }


    },
    account(){
      this.$validator.validate('account').then((res)=>{
        (res==true)?this.isDisabled = false:this.isDisabled = true
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .send-button{
        position: absolute;
        width: 120px;
        max-width: 200px;
        height: calc(3rem - 2px);
        top: 16px;
        right: -2px;
        border: 1px solid transparent;
        font-family: 'special';
        background-color: #264091;
        border-radius: 3px;
        font-size: 1.5rem;
        color: #fff;
    }
    .send-button:disabled,.send-button.disabled{
        background-color: #eeeeee;
        color: #000000;
        cursor: not-allowed;
    }
    .intl-phone-input{
        width: 100%;
        input{
            height: 38px!important;
        }
    }
    .tag-list{
        display: block;
        height: 60px;
        width: calc(100%);
        position: absolute;
        top: 0;
        left: 0;
        .tag{
            border-image-source: url(/static/img/tag.png);
            border-image-slice: 0 0 fill;
            border-image-width: 0;
            width: 50%;
            height: 60px;
            font-family: special;
            color: #999;
            line-height: 60px;
            cursor: pointer;
        }
        .tag.active{
            border-image-source: url(/static/img/tag-active.png);
            border-image-slice: 0 0 fill;
            border-image-width: 0;
            height: 60px;
            color: #ffffff;
        }
    }
</style>

