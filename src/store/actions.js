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

    return new Promise((resolve, reject)=>{
      api.loginAction(data.account, data.password).then(response => {
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
    commit(types.RESET)
  },
  signUp({commit}, form) {

    return new Promise((resolve, reject)=>{
      api.signUpAction(form).then(response => {
        if(response.code==200){
          commit(types.SET_SESSION, response.msg.session)
        }
        resolve(response); }).catch(error => { reject(error) })
    })
  },
  lottery({commit,state}, data) {
    if(state.lottery.selected.indexOf(data.id)<0){
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
    }else{
      return 'Repeat operation';
    }

  },
  getUserInfo({commit}, session) {
    return new Promise((resolve, reject)=>{
      api.getUserInfoAction(session).then(response => {
        if(response.code==200){
          commit(types.SET_USER_INFO, response.msg)
          commit(types.LOGIN)
        }
        resolve(response); }).catch(error =>
        { 
          locale.set('session')
          reject(error) 
        })
    })
  },
  inviteStatistics({commit}, session){
    return new Promise((resolve, reject)=>{
      api.inviteStatistics(session).then(response => {
        if(response.code==200){
          commit(types.SET_INVITE_STATISTICS, response.msg)
          commit(types.LOGIN)
        }
        resolve(response); }).catch(error =>
        { 
          locale.set('session')
          reject(error) 
        })
    })
  },
  getCode({commit}, e){
    return new Promise((resolve, reject)=>{
      api.getCodeAction(e.action, e.source).then(response => {
        if(response.code==200){

        }
        resolve(response); })
        .catch(error =>
        {

        })
    })
  }
}
export default actions