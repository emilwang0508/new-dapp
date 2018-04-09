import router from '../router'
import store from '../store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { MessageBox } from 'mint-ui'
import {getName, getToken} from "@/utils/auth"; // 验权


const whiteList = ['/login', '/regist']; // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start();
  if (whiteList.indexOf(to.path) !== -1) {
    next();
  } else {
    if (getToken()==="true") {
      next();
      NProgress.done()
    } else {
      next({path: '/login'});
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})