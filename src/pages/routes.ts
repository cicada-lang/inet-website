import { RouteRecordRaw } from "vue-router"
import PlaygroundPage from "./playground/PlaygroundPage.vue"

export const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/playground" },
  {
    path: "/playground/:encoded?",
    component: PlaygroundPage,
    props: (route) => ({
      encoded: route.params.encoded,
    }),
  },
]
