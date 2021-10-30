import Vue from 'vue'
import Router from 'vue-router'
import Good from '@/components/goods/goods'
import Ratings from '@/components/ratings/ratings'
import Seller from '@/components/seller/seller'

Vue.use(Router)

var routes = [
  {
    path: '/',
    // name: 'goods',
    // component: Good
    redirect: '/goods'
  },
  {
    path: '/goods',
    name: 'goods',
    component: Good
  },
  {
    path: '/ratings',
    name: 'ratings',
    component: Ratings
  },
  {
    path: '/seller',
    name: 'seller',
    component: Seller
  }
]

var router = new Router({
  mode: 'history',
  routes: routes
})

export default router
