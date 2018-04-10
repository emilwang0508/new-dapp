const Mock = require('mockjs')


const Random = Mock.Random;
const name = Mock.mock('@name');
const email = Mock.mock('@EMAIL()')
const deposit = Mock.mock({
  "number|0-10000000000.1-3": 1
})

const csrf = 'AWQE1231SA21ASDMFLKFVJFDOGUSADASD'
// mock一组数据
const userBase = function(e) {
  let res = null
  let code = 200
  if (e==true){
    res  = {'id': 1, 'name': name, 'email':email,'session': 'SADSADSADSADSAWQSADSADSASA123'}
    code = 200
  }else{
    res  = 'sadasdsadsa'
    code = 100
  }

  return {
      code:code,
      msg: res
  }
}
const userInfo = function(e) {
  let res = null
  let code = 200
  if (e==true){
    res  = {'id': 1, 'name': name, 'email':email,'address': 'xxxxx', 'invite_code': 'ACDCFG', 'deposit': deposit.number,'session': 'SADSADSADSADSAWQSADSADSASA123'}
    code = 200
  }else{
    res  = 'sadasdsadsa'
    code = 100
  }

  return {
    code: code,
    data:{
      code:code,
      msg: res
    }

  }
}

const lotteryRes = function (e) {
  let res = null
  let code = 200
  if (e==true){
    res =    { "bonus": 0.7}
  }else {
    res =    { "bonus": 0.7}
  }
  return {
    code: code,
    data:{
      code:code,
      msg: res
    }

  }
}

const csrfRes = function () {
  return {
      code:200,
      msg: 'wqey9fhU-BOhxX2msrEYG9s4DdJgltqIusIA'
  }
}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock(process.env.BASE_API+'/api/user/login', 'post', userBase(true));
Mock.mock(process.env.BASE_API+'/api/user/info', 'post', userInfo(true));
Mock.mock(process.env.BASE_API+'/sign-up', 'post', userInfo(true));
Mock.mock(process.env.BASE_API+'/lottery', 'post', lotteryRes(true));
Mock.mock(process.env.BASE_API+'/api/_csrf_token_', 'get', csrfRes);

