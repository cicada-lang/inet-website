import { RouteRecordRaw } from "vue-router"

export const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/playground" },
  {
    path: "/playground",
    component: () => import("./playground/PlaygroundPage.vue"),
  },
]
