import Vue from 'vue'
import Router from 'vue-router'
import bowser from 'bowser'
import HelloWorld from '../pages/HelloWorld'
import MIndex from '../pages/mobile/HelloWorld'
import SignIn from '../pages/SignIn'
import MSignIn from '../pages/mobile/SignIn'
import SignUp from '../pages/SignUp'
import MSignUp from '../pages/mobile/SignUp'
import Intro from '../pages/Intro'
import Uc from '../pages/Uc'
import MUc from '../pages/mobile/Uc'
import ResetPwd from '../pages/ResetPwd'
import Guide from '../pages/Guide'


Vue.use(Router)
let router
if(bowser.mobile!==undefined&&bowser.mobile==true){
  router = new Router({
    routes: [
      {
        path: '/',
        name: 'HelloWorld',
        component: MIndex
      },
      {
        path: '/sign-in',
        name: 'SignIn',
        component: MSignIn
      },
      {
        path: '/sign-up',
        name: 'SignUp',
        component: MSignUp
      },
      {
        path: '/intro',
        name: 'Intro',
        component: Intro
      },
      {
        path: '/sign-up/:code',
        name: 'SignUpWithCode',
        component: SignUp
      },
      {
        path: '/guide',
        name: 'Guide',
        component: Guide
      },
      {
        path: '/uc',
        name: 'UserCenter',
        component: MUc
      },
    ]
  })

}else {
  router = new Router({
    routes: [
      {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
      },
      {
        path: '/reset-password',
        name: 'ResetPwd',
        component: ResetPwd
      },
      {
        path: '/sign-in',
        name: 'SignIn',
        component: SignIn
      },
      {
        path: '/sign-up',
        name: 'SignUp',
        component: SignUp
      },
      {
        path: '/intro',
        name: 'Intro',
        component: Intro
      },
      {
        path: '/sign-up/:code',
        name: 'SignUpWithCode',
        component: SignUp
      },
      {
        path: '/uc',
        name: 'UserCenter',
        component: Uc
      },
      ,
      {
        path: '/guide',
        name: 'Guide',
        component: Guide
      }
    ]
  })

}
export default router