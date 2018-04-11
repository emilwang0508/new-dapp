import * as types from './mutation-types'
import * as api from '../api/index'
import { Toast, MessageBox } from 'mint-ui'
const actions = {
  intiUser({ dispatch }, data) {
    dispatch(types.SET_USER_INFO,data)
  },
  setSession({commit} ,data) {
    commit(types.SET_SESSION, data)
  },
  login({commit}, data) {
    this.setCsrfToken
    return new Promise((resolve, reject)=>{
      api.loginAction(data.name, data.password).then(response => {
        if(response.code==200){
          let data = response.msg
          commit(types.SET_SESSION, data.session)
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
    this.setCsrfToken
    return new Promise((resolve, reject)=>{
      api.signUpAction(form).then(response => {
        console.log(response)
        if(response.code==200){
          commit(types.SET_SESSION, response.msg.session)
        }
        resolve(response); }).catch(error => { reject(error) })
    })
  },
  lottery({commit}, data) {
    this.setCsrfToken
    return new Promise((resolve, reject)=>{
      api.lotteryAction(data).then(response => {
        if(response.code==200){
          commit(types.ADD_OVERAGE, response.msg.bonus)
          commit(types.LOTTERY, data.id)
        }
        resolve(response); }).catch(error =>
      {
        reject(error)

      })
    })
  },
  getUserInfo({commit}, session) {
    this.setCsrfToken
    return new Promise((resolve, reject)=>{
      api.getUserInfoAction(session).then(response => {
        if(response.code==200){
          commit(types.SET_USER_INFO, response.msg)
          commit(types.LOGIN)
        }
        resolve(response); }).catch(error =>
      { reject(error) })
    })
  },
  setCsrfToken({commit}){

  }
}
export default actions