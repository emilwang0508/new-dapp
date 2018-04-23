<template>
    <div class="uc">
        <Header></Header>
        <div style="width: 1130px;margin: 80px auto 0">
            <a href="/#/" style="text-decoration: underline">Home</a> > <span>User Center</span>
        </div>
        <div class="uc-panel">
            <div class="info-panel">
                <div class="name">
                    <p><span class="icon"><img src="/static/img/user-icon.png" alt="icon"></span><span class="text-shadow special">User name</span><span>{{this.$store.state.userInfo.name}}</span></p>
                </div>
                <div class="wallet">
                    <p><span class="icon"><img src="/static/img/wallet-icon.png" alt="icon"></span><span class="text-shadow special">My  wallet</span><span>
                       <span v-if="this.$store.state.userInfo.address!=='0x0'">{{this.$store.state.userInfo.address}}</span> <a href="#" @click="handleModal('wallet')"  v-else >Please bind your wallet account.</a></span></p>
                </div>
                <div class="phone">
                    <p><span class="icon"><img src="/static/img/phone-icon.png" alt="icon"></span><span class="text-shadow special">My  phone</span>
                        <span>
                            <span v-if="this.$store.state.userInfo.phone!=='0'">{{this.$store.state.userInfo.phone}}</span>
                            <a href="#" @click="handleModal('phone')" v-else>Please bind your phone number.</a>
                        </span>
                    </p>
                </div>
                <div class="token">
                    <p>
                        <span class="icon"><img src="/static/img/token-icon.png" alt="icon"></span>
                        <span class="text-shadow special">My  token</span>
                        <span class="amount special">{{this.$store.state.userInfo.deposit}} DCVT</span>
                        <span class="transfer-button" @click="handleModal('token')">Transfer to Wallet</span>
                        <span class=""><a href="/#/guide" target="_blank">How to transfer</a></span>
                    </p>
                </div>
            </div>
            <div class="tag-panel">
                <div class="tag-list">
                    <div class="tag special text-center text-shadow fl" @click="switchTag(index)"  v-for="(tag, index) in tags" v-bind:class="{active:(tagIndex==index)}">{{tag.text}}</div>
                </div>
                <div class="content-list">
                    <div><p class="text-center" style="padding-top: 200px">You haven't got anything.</p></div>
                </div>
            </div>
        </div>
        <div class="modal" v-show="showModal!==''">
            <div class="close-panel" @click="closeModal"></div>
            <div class="form-group">
                <div class="form-panel"  v-if="showModal=='token'">
                    <p class="text-shadow special">Extraction of token</p>
                    <div class="h30"></div>
                    <div class="input-group token" style="position: relative">
                        <label for="amount"><p class="text-shadow des">Please enter the amount of money you want to pick up the token </p></label>
                        <input type="text" name="amount" step="20" min="20" v-model="amount" style="padding: 0 50px;width: calc(100% - 100px);">
                        <button @click="updateAmount('add')" class="update-amount-btn add-button">+</button>
                        <button @click="updateAmount('sub')" class="update-amount-btn sub-button">-</button>
                    </div>
                    <div class="input-group">
                        <label for="password"><p class="text-shadow des">Password </p></label>
                        <input type="password" name="password" v-model="password">
                    </div>
                    <button class="submit" @click="getToken" :disabled="submitIsDisabled">Submit</button>
                </div>
                <div class="form-panel wallet" v-if="showModal=='wallet'">
                    <p class="text-shadow special">Bind your digital wallet</p>
                    <div class="h30"></div>
                    <div class="input-group">
                        <label for="address"><p class="text-shadow des">Metamask digital wallet address </p></label>
                        <input type="text" name="address" v-model="address" readonly>
                    </div>
                    <div class="input-group">
                        <label for="password"><p class="text-shadow des">Password </p></label>
                        <input type="password" name="password" v-model="password">
                    </div>
                    <button class="submit" @click="handleSubmit('wallet')" :disabled="submitIsDisabled">Submit</button>
                </div>
                <div class="form-panel phone" v-if="showModal=='phone'">
                    <p class="text-shadow special">Bind your mobile phone number</p>
                    <div class="h30"></div>
                    <div class="input-group" style="position: relative">
                        <label for="phone"><p class="text-shadow des">Please bind your cell phone number</p></label>
                        <VuePhoneInput :phone="phone" v-on:listen-to-child-event=""></VuePhoneInput>
                        <button class="send-button special" :disabled="this.isDisabled" @click="getCode">{{this.buttonMsg}}</button>
                    </div>
                    <div class="input-group" style="position: relative">
                        <label for="verifyCode"><p class="text-shadow des">Verification Code</p></label>
                        <input type="text" name="verifyCode" placeholder="Verification Code" v-validate="'required|alpha_num'" v-model="verifyCode">
                        <p  v-show="errors.has('verifyCode')" class="error">{{ errors.first('verifyCode') }}</p>
                    </div>
                    <div class="input-group">
                        <label for="password"><p class="text-shadow des">Password </p></label>
                        <input type="password" name="password" v-validate="'required|min:6|max:30'" v-model="password">
                        <p  v-show="errors.has('password')" class="error">{{ errors.first('password') }}</p>
                    </div>
                    <div class="h50"></div>
                    <button class="submit" @click="handleSubmit('phone')" :disabled="submitIsDisabled">Submit</button>
                </div>
            </div>
        </div>
        <div class="notice" v-show="noticeShow">
            <div class="close-btn" @click="noticeShow=false"></div>
            <p><img src="/static/img/metamask.png" alt="metamask">PLEASE UNLOCK YOUR METAMASK</p>
        </div>
    </div>
</template>

<script>
import Verify from 'vue2-verify'
import Header from '../components/Header'
import {Toast, MessageBox } from 'mint-ui'
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
            amount: 0,
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
            showModal: '',
            transferDisabled: false,//账户禁止
            noticeShow: false
        }
    },
    components: {
      VuePhoneInput, Header
    },
    mounted(){
    },
    methods:{
      initPhone(){

      },
      closeModal(){
        this.$router.push('/uc')
        this.showModal = ''
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

                Toast('Bind successfully!')
                this.showModal = ''
                this.$store.commit('UPDATE_USER_INFO',{key:'phone',value:form.phone})
                this.submitIsDisabled = false
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
          _this.noticeShow = true
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

                Toast('Bind successfully!')
                this.showModal = ''
                this.submitIsDisabled = false
                this.$store.commit('UPDATE_USER_INFO',{key:'address',value:form.address})
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
        let _this = this
        this.submitIsDisabled = true
        let form = {
          address: _this.address,
          password: this.password,
          session: locale.get('session'),
          amount: ""+this.amount,
          action: 'dcvt'
        }
        this.$validator.validateAll().then((result) => {
          if(result){
            this.$store.dispatch('getToken',form ).then(res=>{

              _this.showModal = ''
              Toast('Extract token transaction in progress, please wait for a moment!')
              this.submitIsDisabled = false
            }).catch(error=>{
              this.submitIsDisabled = false

            })
          }else {
            this.submitIsDisabled = false

          }


        })
      },
      handleModal(e){
        if(e=='token'){
          if(this.transferDisabled == true){
            MessageBox.alert('',{message: 'Transfer DCV token to wallet, first bind the mobile number and digital wallet',title: 'Tips',confirmButtonText: 'OK',closeOnClickModal: true})
          }else {
            this.showModal = e
          }
        }else {
          this.showModal = e
        }

      },
      updateAmount(e){
        if(e=='add'){
            this.amount = this.amount + 20
        }else {
          this.amount!==0?this.amount = this.amount - 20:this.amount=0
        }

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
      address(val){
        console.log(val)

      }
    },
    created(){
      let session = locale.get('session')
      let _this = this
      let _address = web3.currentProvider.publicConfigStore._state.selectedAddress
      if(_address===undefined){_this.noticeShow = true}else{ this.noticeShow = false}

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
            if(_this.$store.state.userInfo.phone===0||_this.$store.state.userInfo.addresss=='0x0'){
              _this.transferDisabled = true// 交易禁止
            }else {
              _this.transferDisabled = false //允許交易
            }


          }

        }).catch((error)=>{

        })
      }else{
        _this.$router.push('/')
      }
    },
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
            margin: 0px auto 100px;
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
                        height: 40px;
                        line-height: 40px;
                        display: inline-block;
                        text-overflow: ellipsis;
                        white-space: nowrap;

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
        .close-panel{
            position: absolute;
            width: 100%;
            height: 100%;
            cursor: url(/static/img/closed-btn.png) 2 2, pointer;
        }
    }
    .form-group{
        width: 600px;
        margin: 100px auto;

    }
    .form-panel{
        border-image-source: url(/static/img/form-panel-border.png);
        border-image-slice: 0 0 fill;
        border-image-width: 0;
        width: 460px;
        min-height: 285px;
        margin: 200px 30px;
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
    .notice{
        border-image-source: url(/static/img/notice-bg.png);
        border-image-slice: 0 0 fill;
        border-image-width: 0;
        position: fixed;
        top: 0;
        left: 50%;
        margin-left: -300px;
        width: 600px;
        padding: 20px;
        z-index: 999;
        p{
            font-family: special;
            font-size: 20px;
        }
        .close-btn{
            position: absolute;
            right: 20px;
            z-index: 4;
            cursor: pointer;
            width: 25px;
            height: 25px;
            background: url(/static/img/closed-btn.png) no-repeat center;
        }

    }
    button.update-amount-btn{
        position: absolute;
        bottom: 13px;
        height: 37px;
        border: none;
        width: 37px;
        border-radius: 3px;
    }
    button.add-button{
        left: -1px;
    }
    button.sub-button{
        right: -1px;
    }
</style>