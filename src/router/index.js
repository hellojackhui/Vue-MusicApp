import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Search from 'components/search/search'
import Singer from 'components/singer/singer'
import Rank from 'components/rank/rank'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/',
      redirect: '/recommend'
    }
  ]
})
