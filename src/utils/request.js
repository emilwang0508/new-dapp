import axios from 'axios'
import {Toast} from 'mint-ui'
import store from '../store'


// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 30000                  // 请求超时时间
});

window.axios = require('axios');
window.axios.defaults.headers.post['withCredentials'] = true
window.axios.defaults.withCredentials = true


let get_csrf = axios.get(process.env.BASE_API+'/api/_csrf_token_').then((res)=>{
  if (res.status==200){
    let csrf_token = res.data.msg
    window.axios.defaults.headers.common['csrf-token'] = csrf_token;
    window.axios.defaults.headers.common['_csrf'] = csrf_token;
    window.axios.defaults.headers.common['xsrf-token'] = csrf_token;
    window.axios.defaults.headers.common['x-csrf-token'] = csrf_token;
    window.axios.defaults.headers.common['x-xsrf-token'] = csrf_token;
    window.axios.defaults.headers.common['credentials'] = 'same-origin';
  }
}).catch((error)=>{

})
get_csrf
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
window.axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS, PUT, PATCH, DELETE';
window.axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'X-Requested-With,content-type';
window.axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true;
window.axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
window.axios.defaults.headers.common['credentials'] = 'same-origin';




// respone拦截器
service.interceptors.response.use(
/*  config=>{
    return config
  },*/
  response => {
    /**
     * code为非200是抛错 可结合自己业务进行修改
     */

    const res = response.data;
    //const res = response;
    if (res.code !== '200' && res.code !== 200) {
      let code = res.code
      // Toast('11111111111111111111')
      switch (code){
        case 100:
          Toast('missing parameter!!!')
          break;
        case 101:
          Toast('login timeout!!!')
          break;
        case 102:
          Toast('bonus over!!!')
          break;
        case 103:
          Toast('over limit!!!')
          break;
        case 404:
          Toast('unknow error!!!')
          break;
        case 501:
          Toast('error invite code!!!')
          break;
        case 502:
          Toast('name or email exist!!!')
          break;
        case 503:
          Toast('wrong login info!!!')
          break;
        case 504:
          Toast('wrong password!!!')
          break;
        case 505:
          Toast('session error!!!')
          break;
        default:
          Toast('error')
          break;
      }
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    Toast(error)
    return Promise.reject(error)
  }
)

export default service