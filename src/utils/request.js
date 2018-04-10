import axios from 'axios'
import { Toast, MessageBox } from 'mint-ui'
import store from '../store'


// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000                  // 请求超时时间
});

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
window.axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS, PUT, PATCH, DELETE';
window.axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'X-Requested-With,content-type';
window.axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true;
window.axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
window.axios.defaults.headers.common['credentials'] = 'same-origin';

/*axios.get(process.env.BASE_API+'/api/_csrf_token_').then((res)=>{
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

})*/

// respone拦截器
service.interceptors.response.use(

  response => {
    /**
     * code为非200是抛错 可结合自己业务进行修改
     */
    const res = response.data;
    //const res = response;
    if (res.code !== '200' && res.code !== 200) {
      if (res.code === '4001' || res.code === 4001) {
/*        MessageBox.confirm('用户名或密码错误，请重新登录', '重新登录', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('FedLogOut').then(() => {
            location.reload()// 为了重新实例化vue-router对象 避免bug
          })
        })*/
      }
      if (res.code === '4009' || res.code === 4009) {
/*        MessageBox.confirm('该用户名已存在，请重新注册！', '重新注册', {
          confirmButtonText: '重新注册',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('FedLogOut').then(() => {
            location.reload()// 为了重新实例化vue-router对象 避免bug
          })
        })*/
      }
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
/*    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    });*/
    return Promise.reject(error)
  }
)

export default service