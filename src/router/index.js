import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import(/*webpackChunkName: "home" */ '../views/Home.vue')
const Portfolio = () => import(/*webpackChunkName: "portfolio" */ '../components/portfolio/Portfolio.vue')
const Stocks = () => import(/*webpackChunkName: "stock" */ '../components/stock/Stocks.vue')

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio //Ações do Usuário
  },
  {
    path: '/stocks',
    name: 'Stocks',
    component: Stocks //Açoes cadastwadas no sistema
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
