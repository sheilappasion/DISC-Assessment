import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Router = new VueRouter({ mode: 'history' })

import Page from './index.vue'
import NotFound from './not-found.vue'
import Assessment from './assessment.vue'

Router.addRoutes([
  { 
    path: '/', component: Page,
    children: [
      { path: 'assessment' , component: Assessment }
    ] 
  },
  { path: '*', component: NotFound }
])

export default Router