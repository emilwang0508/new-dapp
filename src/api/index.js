import request from '../utils/request'
export function loginAction(email, password){
  return request({
    url: '/sign-in',
    method: 'post',
    data: {
      email,
      password
    }
  })
}
export function signUpAction(form){
  return request({
    url: '/sign-up',
    method: 'post',
    data: {
      name:form.email,
      password: form.password,
      invite_code: form.code,
      addresss: form.code
    }
  })
}