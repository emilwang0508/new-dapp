import * as types from './mutation-types'
import * as api from '../api/index'
import { Toast, MessageBox } from 'mint-ui'
const actions = {
  intiUser({ dispatch }, data) {
    dispatch(types.SET_USER_INFO,data)
  },
  login({commit}, data) {

    return new Promise((resolve, reject)=>{
      api.loginAction(data.name, data.password).then(response => {
        let res = response.data
        console.log(response)
        if(response.status==200&&res.code==200){
          let data = res.msg
 /*         commit(types.SET_USER_INFO, data)
          console.log(data)*/
          commit(types.SET_SESSION, data.session)
          // commit(types.LOGIN)
        }else {
          Toast(res);
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
      api.signUpAction(form).then(response => {
        let res = response.data
        if(res.code==200){
          commit(types.SET_USER_INFO, res.msg)
        }
        resolve(response); }).catch(error => { reject(error) })
    })
  },
  lottery({commit}, data) {
    return new Promise((resolve, reject)=>{
      api.lotteryAction(data).then(response => {
        let res = response.data
        if(res.code==200){
          commit(types.ADD_OVERAGE, res.msg.bonus)
          commit(types.LOTTERY, data.id)
        }
        resolve(response); }).catch(error =>
      { reject(error) })
    })
  },
  getUserInfo({commit}, session) {
    return new Promise((resolve, reject)=>{
      api.getUserInfoAction(session).then(response => {
        let res = response.data
        if(res.code==200){
          commit(types.SET_USER_INFO, res.msg)
          commit(types.LOGIN)
        }
        resolve(response); }).catch(error =>
      { reject(error) })
    })
  },
}
export default actions