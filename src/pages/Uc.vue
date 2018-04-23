<template>
    <div class="uc">
        <Header></Header>
        <div class="uc-panel">
            <div class="info-panel">
                <div class="name">
                    <p><span class="icon"><img src="/static/img/user-icon.png" alt="icon"></span><span class="text-shadow special">User name</span><span>Nobody</span></p>
                </div>
                <div class="wallet">
                    <p><span class="icon"><img src="/static/img/user-icon.png" alt="icon"></span><span class="text-shadow special">My  wallet</span><span>
                        <a href="#" @click="handleModal">Please bind your wallet account.</a></span></p>
                </div>
                <div class="phone">
                    <p><span class="icon"><img src="/static/img/user-icon.png" alt="icon"></span><span class="text-shadow special">My  phone</span><span><a
                            href="#">Please bind your phone number.</a></span></p>
                </div>
                <div class="token">
                    <p>
                        <span class="icon"><img src="/static/img/user-icon.png" alt="icon"></span>
                        <span class="text-shadow special">My  token</span>
                        <span class="amount special">10.000 DCVT</span>
                        <span class="transfer-button">Transfer to Wallet</span>
                        <span class=""><a href="" target="_blank">How to transfer</a></span>
                    </p>
                </div>
            </div>
            <div class="tag-panel">
                <div class="tag-list">
                    <div class="tag special text-center text-shadow fl" @click="switchTag(index)"  v-for="(tag, index) in tags" v-bind:class="{active:(tagIndex==index)}">{{tag.text}}</div>
                </div>
            </div>
<!--            <div class="tag-group fl">
                <div class="tag">Bind your digital wallet</div>
                <div class="tag">Bind your cell phone number</div>
                <div class="tag">Extraction of token</div>
                <div class="tag">The process of token  extraction</div>
            </div>-->

        </div>
        <div class="modal" v-show="showModal">
            <div class="close-panel"></div>
            <div class="form-group">
<!--                <div class="form-panel">
                    <p class="text-shadow special">Extraction of token</p>
                    <div class="h30"></div>
                    <div class="input-group token">
                        <label for="amount"><p class="text-shadow des">Please enter the amount of money you want to pick up the token </p></label>
                        <input type="number" name="amount" step="20" min="20">
                    </div>
                    <div class="input-group">
                        <label for="password"><p class="text-shadow des">Password </p></label>
                        <input type="password" name="password">
                    </div>
                    <button class="submit">Submit</button>
                </div>-->
<!--                <div class="form-panel wallet">
                    <p class="text-shadow special">Bind your digital wallet</p>
                    <div class="h30"></div>
                    <div class="input-group">
                        <label for="amount"><p class="text-shadow des">Metamask digital wallet address </p></label>
                        <input type="text" name="address" v-model="address" readonly>
                    </div>
                    <div class="input-group">
                        <label for="password"><p class="text-shadow des">Password </p></label>
                        <input type="password" name="password" v-model="password">
                    </div>
                    <button class="submit" @click="handleSubmit('wallet')" :disabled="submitIsDisabled">Submit</button>
                </div>-->
                <div class="form-panel phone">
                    <p class="text-shadow special">Bind your cell phone number</p>
                    <div class="h30"></div>
                    <div class="input-group" style="position: relative">
                        <label for="amount"><p class="text-shadow des">Please bind your cell phone number</p></label>
                        <VuePhoneInput :phone="phone" v-on:listen-to-child-event=""></VuePhoneInput>
                        <button class="send-button special" :disabled="this.isDisabled" @click="getCode">{{this.buttonMsg}}</button>
                    </div>
                    <div class="input-group" style="position: relative">
                        <label for="amount"><p class="text-shadow des">Verification Code</p></label>
                        <input type="text" name="verifyCode" placeholder="Verification Code" v-validate="'required|alpha_num'" v-model="verifyCode">
                        <p  v-show="errors.has('verifyCode')" class="error">{{ errors.first('verifyCode') }}</p>
                    </div>
                    <div class="input-group">
                        <label for="password"><p class="text-shadow des">Password </p></label>
                        <input type="password" name="password" v-validate="'required|min:6|max:30'" v-model="password">
                        <p  v-show="errors.has('password')" class="error">{{ errors.first('password') }}</p>
                    </div>
                    <button class="submit" @click="handleSubmit('phone')" :disabled="submitIsDisabled">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Verify from 'vue2-verify'
import Header from '../components/Header'
//import utils from 'intl-tel-input/build/js/utils'
import VuePhoneInput from '../components/IntlTelInput.vue'
import {planet} from "../event";
export default {
    name: 'user-center',
    data () {
        return {
            password: '',
            phone: {
              type: Object,
              code: 93
            },
            amount: '',
            address: web3.currentProvider.publicConfigStore._state.selectedAddress,
            mobile: '',
            buttonMsg:'Send',
            isDisabled: true,
            dialCode: null,
            isValid: false,
            count: 0,
            timer: null,
            isSend: false,
            verifyCode: null,
            submitIsDisabled: false,
            tags:[
              {active:'true',text:"My planet"},
              {active:'false',text:"My equipment"},
              {active:'false',text:"My battleship"},
              {active:'false',text:"My Chests"},
            ],
            tagIndex: 0,
            showModal: false
        }
    },
    components: {
      VuePhoneInput, Header
    },
    mounted(){
/*        $('#phone').intlTelInput({
          initialCountry: 'auto',
          utilsScript: utils,
          geoIpLookup: function(callback) {
            $.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp) {
              var countryCode = (resp && resp.country) ? resp.country : "";
              callback(countryCode);
            });
          }
        })
        let countryData = $('#phone').intlTelInput('getSelectedCountryData')
        let error = $('#phone').intlTelInput('getValidationError')
        this.dialCode = countryData.dialCode
        console.log($('#phone').intlTelInput )*/
    },
    methods:{
      initPhone(){

      },
      switchTag(e){
        this.tagIndex=e
      },
      getCode(){
        let _this = this
        let action = 'verifyPhone'
        let source = _this.mobile
        let e = {
          action: action,
          source: source
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
      handleSubmit: function(event){
        this.submitIsDisabled = true
        switch (event){
          case 'wallet':
            this.updateAddress()
            break;
          case 'token':
            this.getToken()
            break;
          case 'phone':
            this.updatePhone()
            break;
          default:
            break;
        }


      },
      updatePhone(){
        let _this = this
        if(this.isValid == false){
          _this.$toast('The format of the phone is wrong')
          this.submitIsDisabled = false
        }else {
          let form = {
            phone: _this.mobile,
            verify_code: this.verifyCode,
            password: this.password,
            session: locale.get('session')
          }
          this.submitIsDisabled = true

          this.$validator.validateAll().then((result) => {
            if(result){
              this.$store.dispatch('updatePhone',form ).then(res=>{

                this.submitIsDisabled = true

              }).catch(error=>{
                this.submitIsDisabled = false
              })
            }else {
              this.submitIsDisabled = false
            }


          })
        }
      },
      updateAddress(){
        let _this = this
        if(this.address == null||this.address == ''||this.address == undefined){
          _this.$toast('Unlock metamask wallet!')
          this.submitIsDisabled = false
        }else {
          let form = {
            address: _this.address,
            password: this.password,
            session: locale.get('session')
          }
          this.submitIsDisabled = true

          this.$validator.validateAll().then((result) => {
            if(result){
              this.$store.dispatch('updateAddress',form ).then(res=>{

                this.submitIsDisabled = true

              }).catch(error=>{
                this.submitIsDisabled = false
              })
            }else {
              this.submitIsDisabled = false
            }


          })
        }
      },
      getToken(){

      },
      handleModal(){
        this.showModal = true
      }


    },
    watch:{
      phone(){
        console.log(this.phone.number.length)
        if (this.phone.number.length>8){
          this.isDisabled = false
          this.isValid = true
        }else {

        }


      },
      mobile(){
        if (this.mobile.length>=6){
          this.isDisabled = false
          this.isValid = true
        }else {
          this.isDisabled = true
          this.isValid = false
        }


      },
    }
}
</script>

<style scoped lang="scss">
    .uc{
        background: url("/static/img/background-pc.png") no-repeat center;
        background-size: cover;
        width: 100%;
        min-height: 100vh;
        border: 1px solid transparent;
        .uc-panel{
            border-image-source: url(/static/img/uc-panel-bg.png);
            border-image-slice: 0 0 fill;
            border-image-width: 0;
            width: 1000px;
            height: 660px;
            padding: 80px 100px;
            margin: 80px auto;
            .info-panel{
                >div{
                    height: 40px;
                    line-height: 40px;
                    margin-bottom: 10px;
                    font-size: 20px;
                    text-align: left;
                    span:nth-of-type(2){
                        margin-bottom: 40px;
                        width: 220px;
                        display: inline-block;

                    }
                    a{
                        color: #00aeff;
                        text-decoration: underline;
                    }
                    .icon{
                        height: 40px;
                        width: 40px;
                        img{
                            width: 40px;
                            object-fit: cover;
                        }
                    }
                    span.amount{
                        font-size: 25px;
                        width: 300px;
                        display: inline-block;
                    }
                    .transfer-button{
                        display: inline-block;
                        font-size: 18px;
                        line-height: 40px;
                        height: 40px;
                        width: 250px;
                        font-family: special;
                        border-image-source: url(/static/img/transfer-button.png);
                        border-image-slice: 0 0 fill;
                        border-image-width: 0;
                        text-align: center;
                        cursor: pointer;
                    }
                }
            }
            .tag-group{
                margin: 70px 0 70px 80px;
                border-right: 1px solid #eeeeee;
                .tag{
                    border-image-source: url(/static/img/uc-tag-bg.png);
                    border-image-slice: 0 0 fill;
                    border-image-width: 0;
                    width: 390px;
                    height: 55px;
                    padding-top: 20px;
                    font-size: 20px;
                    font-family: special;
                    padding-left: 50px;
                    margin: 17.5px 0px;
                }
            }

        }
    }
    .tag-panel{
        width: calc(100% + 140px);
        height: 600px;
        position: relative;
        margin-left: -70px;
        margin-top: 65px;
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
            width: 25%;
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
    .modal{
        position: fixed;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background-color: #000;
        z-index: 999;
    }
    .form-group{
        width: 600px;
        margin: 100px auto;
        .close-panel{

        }
    }
    .form-panel{
        border-image-source: url(/static/img/form-panel-border.png);
        border-image-slice: 0 0 fill;
        border-image-width: 0;
        width: 460px;
        height: 285px;
        margin: 70px 30px;
        padding: 55px;
        .des{
            font-size: 20px;
            color: #ffffff;
        }
        label{
            display: block;
            margin-bottom: 10px;
        }
        .send-button{
            position: absolute;
            width: 120px;
            max-width: 200px;
            height: calc(3rem - 2px);
            bottom: 0;
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
    }
</style>