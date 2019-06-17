import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'



Vue.use(VueRouter)




const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/About/:name',
    name: 'About',
    component: About
  }]
})

export default router
