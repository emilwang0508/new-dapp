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
Vue.use(Mint);
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VeeValidate)
/*// Vue.use(Loading);

// Vue.use(Message);
Vue.use(Toast);
Vue.use(MessageBox);*/

Vue.prototype.BASE_DOMAIN = 'http://127.0.0.1'
window.localStore = require('store')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
