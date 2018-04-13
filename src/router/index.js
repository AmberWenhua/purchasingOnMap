import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/login'
import register from '@/components/register'
import forgetpassword from '@/components/forgetpassword'
import meeting from '@/components/meeting'
import announce from '@/components/announce'
import message from '@/components/message'
import my from '@/components/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path:'/meeting',
      name:'meeting',
      component:meeting,
    },
    {
      path:'/announce',
      name:'announce',
      component:announce,
    },
    {
      path:'/message',
      name:'message',
      component:message,
    },
    {
      path:'/my',
      name:'my',
      component:my,
    },
    {
      path:'/login',
      name:'login',
      component:login,
    },
    {
      path:'/register',
      name:'register',
      component:register,
    },
    {
      path:'/forgetpassword',
      name:'forgetpassword',
      component:forgetpassword,
    },
    {
      path: '/',
      component: home
    },

  ]
})
