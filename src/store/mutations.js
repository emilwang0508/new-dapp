import Vue  from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

import * as types from './mutation-types'
const mutations = {
  [types.SET_USER_INFO](state, data){
    state.userInfo = data
  },
  [types.LOGIN](state){
    state.logined = true
  },
  [types.LOGOUT](state){
    state.logined = false
  }
}
export default mutations