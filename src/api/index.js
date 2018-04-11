import request from '../utils/request'
export function loginAction(name, password){
  return request({
    url: '/api/user/login',
    method: 'post',
    data: {
      name:name,
      password:password,
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
      card_id: form.id,
      session: form.session,
    }
  })
}
export function getUserInfoAction(session){
  return request({
    url: '/api/user/user_info',
    method: 'post',
    data: {
      session: session
    }
  })
}
export function inviteStatistics(session){
  return request({
    url: '/api/user/user_info',
    method: 'post',
    data: {
      session: session
    }
  })
}