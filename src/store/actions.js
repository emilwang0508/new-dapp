import * as types from './mutation-types'
import { loginAction, signUpAction } from '../api/index'
import { Toast, MessageBox } from 'mint-ui'
const actions = {
  userLogin({ dispatch }, data) {
    dispatch(types.SET_USER_INFO,data)
  },
  login({commit}, data) {

    return new Promise((resolve, reject)=>{
      loginAction(data.email, data.password).then(response => {
        let res = response.data
        if(res.code==200){
          commit(types.SET_USER_INFO, res.msg)
          commit(types.LOGIN)
        }else {
          Toast('错了哦，这是一条错误消息');
        }
        resolve(response); }).catch(
          error => {
            reject(error)
          })
    })
  },
  logout({commit}) {
    commit(types.LOGOUT)
  },
  signUp({commit}, form) {
    return new Promise((resolve, reject)=>{
      signUpAction(form).then(response => {
        let res = response.data
        if(res.code==200){
          commit(types.SET_USER_INFO, res.msg)
          commit(types.LOGIN)
        }
        resolve(response); }).catch(error => { reject(error) })
    })
  }
}
export default actions