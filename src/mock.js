const Mock = require('mockjs')


const Random = Mock.Random;
// mock一组数据
const userInfo = function(e) {
  let res = null
  let code = 200
  if (e==true){
    res  = {'id': 1, 'name': 'name', 'address': 'demo@demo.com', 'invite_code': 'ACDCFG', 'deposit': 100,'session': 'SADSADSADSADSAWQSADSADSASA123'}
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

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock(process.env.BASE_API+'/sign-in', 'post', userInfo(true));
Mock.mock(process.env.BASE_API+'/sign-up', 'post', userInfo(true));

