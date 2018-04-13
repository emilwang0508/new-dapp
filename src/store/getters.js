import { FloatMul } from '../common'
const getters = {
  logined: state => state.logined,
  money: state => FloatMul(state.userInfo.deposit, 10),
  lottery: state => state.lottery
}

export default getters