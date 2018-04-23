import { FloatMul } from '../common'
const getters = {
  logined: state => state.logined,
  money: state => state.userInfo.money,
  lottery: state => state.lottery
}

export default getters