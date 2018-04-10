import request from '../utils/request'
export function loginAction(name, password){
  return request({
    url: '/api/user/login',
    method: 'post',
    data: {
      name,
      password,
      '_csrf': window.axios.defaults.headers.common['csrf-token']
    }
  })
}
export function signUpAction(form){
  return request({
    url: '/api/user/register',
    method: 'post',
    data: {
      name:form.name,
      email:form.email,
      password: form.password,
      invite_code: form.invite_code,
      addresss: form.address
    }
  })
}
export function lotteryAction(form){
  return request({
    url: '/api/game/lottery',
    method: 'post',
    data: {
      id:form.id,
      session: form.session,
    }
  })
}
export function getUserInfoAction(session){
  return request({
    url: '/api/user/info',
    method: 'post',
    data: {
      session: session
    }
  })
}