import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Router = new VueRouter({ mode: 'history' })

import Page from './index.vue'
import NotFound from './not-found.vue'

Router.addRoutes([
  { path: '/', component: Page },
  { path: '*', component: NotFound }
])

export default Router