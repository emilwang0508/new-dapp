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
  },
  [types.SET_SESSION](state,data){
    state.session = data
  },
  [types.ADD_OVERAGE](state,num){
    state.userInfo.deposit = common.FloatAdd(state.userInfo.deposit, num)
  },
  [types.LOTTERY](state, id) {
    state.lottery.selected.push(id)
    state.lottery.times--
  }
}
export default mutations