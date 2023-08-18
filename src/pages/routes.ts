import { RouteRecordRaw } from 'vue-router'
import Home from './home/Home.vue'
import Playground from './playground/Playground.vue'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  {
    path: '/playground/:encoded?',
    component: Playground,
    props: (route) => ({ encoded: route.params.encoded }),
  },
]
