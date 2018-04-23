import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
Vue.use(Vuex)

const state = {
  count: 0,
  logined: false,
  userInfo: {
    name: '',
    email:'',
    deposit: 0,
    money:0,
    id: null,
    invite_code:'',
    playtimes: 0,
    address: '',
  },
  remainingLotteryTimes: 3,
  lottery:{
    times: 3,
    selected:[]
  },
  session: null,
  inviteStatistics:{
    "primary": 0,
    "secondary": 0
  }

}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})