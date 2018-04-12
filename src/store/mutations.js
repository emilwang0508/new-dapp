import * as common from '../common'
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
    state.session = null
    localStore.set('session') 
  },
  [types.SET_SESSION](state,data){
    state.session = data
    localStore.set('session', data)
  },
  [types.ADD_OVERAGE](state,num){
    state.userInfo.deposit = common.FloatAdd(state.userInfo.deposit, num)
  },
  [types.LOTTERY](state, id) {
    state.lottery.selected.push(id)
    state.lottery.times--
  },
  [types.RESET](state) {
    state.count = 0
    state.logined = false
    state.userInfo = null
    state.remainingLotteryTimes = 3
    state.lottery.times = 3
    state.lottery.selected = []
    state.session = null

  },
  [types.SET_INVITE_STATISTICS](state, data) {
    state.inviteStatistics.primary = data.primary
    state.inviteStatistics.secondary = data.secondary
  }
}
export default mutations