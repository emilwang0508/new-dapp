import request from '../utils/request'
export function loginAction(account, password){
  return request({
    url: '/api/user/login',
    method: 'post',
    data: {
      account:account,
      password:password,
    }
  })
}
export function signUpAction(form){
  return request({
    url: '/api/user/register',
    method: 'post',
    data:form
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
    url: '/api/user/invite_statistics',
    method: 'post',
    data: {
      session: session
    }
  })
}
export function getCodeAction(action,source){
  return request({
    url: '/api/common',
    method: 'post',
    data: {
      action: action,
      source: source
    }
  })
}

export function updatePhone(form){
  return request({
    url: '/api/user/update_phone',
    method: 'post',
    data: {
      session: form.session,
      phone: form.phone,
      password: form.password,
      verify_code: form.verify_code,
    }
  })
}
export function updateAddress(form){
  return request({
    url: '/api/user/update_address',
    method: 'post',
    data: {
      session: form.session,
      address: form.address,
      password: form.password,
    }
  })
}

export function resetPassword(form){
  return request({
    url: '/api/common/reset_password',
    method: 'post',
    data: {
      source: form.source,
      password: form.password,
      verify_code: form.verify_code,
    }
  })
}