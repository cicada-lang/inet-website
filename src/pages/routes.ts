import { RouteRecordRaw } from "vue-router"

export const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/playground" },
  {
    path: "/playground/:encoded?",
    component: () => import("./playground/PlaygroundPage.vue"),
    props: (route) => ({
      encoded: route.params.encoded,
    }),
  },
]
