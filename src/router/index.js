import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../pages/HelloWorld'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

Vue.use(Router)

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
        }
    ]
})
