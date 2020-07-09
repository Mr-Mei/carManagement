import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/error',
    name: 'Error',
    component: () => import('@/views/Error.vue')
  },
  {
    path: '/',
    redirect: '/login',
    name: 'Home',
    component: () => import('@/components/Home.vue'),
    children: [
      {
        path: 'automobileInfMng',
        name: 'AutomobileInfMng',
        component: () => import('@/views/AutomobileInfMng.vue'),
        meta: {
          keepAlive: true // 需要缓存
        }
      },
      {
        path: 'automobileBrandMng',
        name: 'AutomobileBrandMng',
        component: () => import('@/views/AutomobileBrandMng'),
        meta: {
          keepAlive: true // 需要缓存
        }
      },
      {
        path: 'stockManage',
        name: 'StockMng',
        component: resolve => require(['@/views/StockMng'], resolve),
        meta: {
          keepAlive: true // 需要缓存
        }
      },
      {
        path: 'Dashboard',
        name: 'Dashboard',
        component: resolve => require(['@/views/Dashboard'], resolve),
        meta: {
          keepAlive: true // 需要缓存
        }
      }
    ]
  },
  {
    path: '*',
    redirect: '/error'
  }
]

const router = new VueRouter({
  routes
})

export default router
