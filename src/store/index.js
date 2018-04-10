import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
Vue.use(Vuex)

const state = {
  count: 0,
  logined: false,
  userInfo: null,
  remainingLotteryTimes: 3,
  lottery:{
    times: 3,
    selected:[]
  },
  session: null
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})