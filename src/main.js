// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VeeValidate from 'vee-validate';
import store from './store'
/*if (process.env.NODE_ENV=='development'){
  require('./mock.js')
}*/
import {
  Toast,
  // Loading,
  MessageBox,
  // Message
} from 'mint-ui';

import Mint from 'mint-ui';
import bowser from 'bowser'


Vue.use(Mint);
Vue.config.productionTip = false
Vue.use(Vuex)
const isAccount = {
  getMessage(field, args) {
      // 英文错误提示
      return 'The account must be the correct username or email!'
  },
  validate(value, args) {
    // Returns a Boolean or a Promise.
    let name = /^[A-Za-z0-9]*$/
    let email = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/

    if(email.test(value)||name.test(value)){
      return true
    }else{
      return false
    }

  }
};
VeeValidate.Validator.extend('account', isAccount);
Vue.use(VeeValidate)

Vue.prototype.BASE_DOMAIN = process.env.BASE_DOMAIN
Vue.prototype.$bowser = bowser

window.locale = require('store')

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})

