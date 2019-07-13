/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import List from './views/Testlist.vue'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  base: process.env.BASE_URL,
  routes: [ // 路由配置信息

    //权限定义--------------------------------------
    {
      path: '/shoppingcar',
      name: 'shoppingcar',
      meta: {
        auth: true //为true时当前路由需要权限
      },
      component: () => import('./views/TestShoppingCar.vue')
    },
    {
      path: '/personal',
      name: 'personal',
      meta: {
        auth: true //为true时当前路由需要权限
      },
      component: () => import('./views/TestPersonal.vue')
    },
    {

      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {

      path: '/pay',
      name: 'pay',
      component: () => import('./views/Pay.vue')
    },
    {
      path: '/newuser',
      name: 'newuser',
      component: () => import('./views/Newuser.vue')
    },

    //权限定义-------------------------------------------------
    {
      path: '/home',
      component: Home,
       redirect:'/forecastInfo',
      children: [
        {
          path: '',
          name: 'list',
          component: List
        },
        // {
        //   path: 'catogery',
        //   name: 'catogery',
        //   component: () => import('./views/Catogery.vue')
        // },
        {
          path:'goods',
          name:'goods',
          component:()=>import('./views/Goods.vue')
        }

      ]
    },
    {
      path: '*',
      redirect: '/home'
    },
  ]
})

/*
前端的路由拦截  未登录时无法访问
to 即将访问的路由
from 从哪里来
next 下一步执行

*/
router.beforeEach(function (to, from, next) {
  //获取登陆凭证
  var token = localStorage.getItem('token')
  if (to.meta.auth) { //当前路由需要权限x
    if (token) {
      //已经登陆
      next()
    }else {
      next({
        path: 'login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})



export default router
