import * as common from '../common'
import * as types from './mutation-types'
const mutations = {
  [types.SET_USER_INFO](state, data){
    state.userInfo = data
    state.lottery.times = data.playtimes
    state.userInfo.money = math.chain(data.deposit).multiply(10).done()
  },
  [types.LOGIN](state){
    state.logined = true
  },
  [types.LOGOUT](state){
    state.logined = false
    state.session = null
    locale.set('session')
  },
  [types.SET_SESSION](state,data){
    state.session = data
    locale.set('session', data)
  },
  [types.ADD_OVERAGE](state,num){
    state.userInfo.deposit = common.FloatAdd(state.userInfo.deposit, num)
  },
  [types.MINUS_OVERAGE](state,num){

    state.userInfo.deposit = math.chain(state.userInfo.deposit).add("-"+num).done()
  },
  [types.LOTTERY](state, id) {
    state.lottery.selected.push(id)
    state.lottery.times--
  },
  [types.RESET](state) {
    state.count = 0
    state.logined = false
    state.userInfo = {
      name: '',
      email:'',
      deposit: 0,
      money:0,
      id: null,
      invite_code:'',
      playtimes: 0,
      address: '',
    }
    state.remainingLotteryTimes = 3
    state.lottery.times = 3
    state.lottery.selected = []
    state.session = null

  },
  [types.SET_INVITE_STATISTICS](state, data) {
    state.inviteStatistics.primary = data.primary
    state.inviteStatistics.secondary = data.secondary
  },
  [types.UPDATE_USER_INFO](state, data) {
    state.userInfo[data.key] = data.value
  }
}
export default mutations