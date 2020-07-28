import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const About = () => {
  return import(/* webpackChunkName: "about" */ '../views/About.vue')
}
const Main = () => {
  return import(/* webpackChunkName: "main" */ '../components/Main.vue')
}
const Campaign = () => {
  return import(/* webpackChunkName: "Campaign" */ '../components/Campaigns.vue')
}
const Today = () => {
  return import(/* webpackChunkName: "Today" */ '../components/Today.vue')
}
const Support = () => {
  return import(/* webpackChunkName: "Support" */ '../components/Support.vue')
}
const Find = () => {
  return import(/* webpackChunkName: "Find" */ '../components/Find.vue')
}
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/main',
    name: 'main',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Main
  }, 
  {
    path: '/campaign',
    name: 'campaign',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Campaign
  }, 
  {
    path: '/today',
    name: 'Today',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Today
  }, 
  {
    path: '/support',
    name: 'Support',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Support
  }, 
  {
    path: '/find',
    name: 'Find',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Find
  }, 
  {
    path: '/*',
    redirect: {name:'Home'},
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router