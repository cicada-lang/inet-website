import { RouteRecordRaw } from 'vue-router'
import PageNotFound from './errors/PageNotFound.vue'
import Home from './home/Home.vue'
import Playground from './playground/Playground.vue'
import Settings from './settings/Settings.vue'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/settings', component: Settings },
  {
    path: '/playground/:encoded?',
    component: Playground,
    props: (route) => ({ encoded: route.params.encoded }),
  },
  { path: '/:pathMatch(.*)', component: PageNotFound },
]
