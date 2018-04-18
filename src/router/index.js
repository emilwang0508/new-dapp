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
      }
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
      }
    ]
  })

}
/*
export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
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
        }
    ]
})
*/
export default router