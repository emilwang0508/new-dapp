import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../pages/HelloWorld'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Intro from '../pages/Intro'

Vue.use(Router)


// typeof this.$bowser.mobile!==undefined&&this.$bowser.mobile==true
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