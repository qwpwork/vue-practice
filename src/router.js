import Vue from 'vue'
import Router from 'vue-router'


import HomePage from './components/PageIndex'
import PageNotFound from './components/PageNotFound'
import Exposition from './components/PageExposition'
import Publications from './components/PagePublications'
import SampleStorage from './components/PageSampleStorage'

//DEV IMPORTS

import SiteHat from './components/SiteHat'
import ComponentsList from './components/PageComponentsList'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: HomePage
    },
    {
      path: '/publications',
      name: 'publications',
      component: Publications
    },
    {
      path: '/exposition',
      name: 'exposition',
      component: Exposition
    },
    {
      path: '/samplestorage',
      name: 'samplestorage',
      component: SampleStorage
    },

    //dev urls!
    {
      path: '/componentslist',
      name: 'componentslist',
      component: ComponentsList
    },
    {
      path: '/header',
      name: 'header',
      component: SiteHat
    },
    //end of dev urls!

    {
      path: '*',
      name: 'pagenotfound',
      component: PageNotFound
    }
  ]
})
