import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import App from './App.vue'
import FullArticle from './views/FullArticle.vue'
import NewsPage from './views/NewsPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/news',
      name: 'news',
      component: NewsPage
    },
    {
      path: '/news/:id',
      name: 'news',
      component: FullArticle
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    }
    //{
    //  path: 'about',
    //  name: 'about',
    //  component: About
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
     // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    //}

  ]
})
