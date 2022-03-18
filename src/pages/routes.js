export const routes = [
    { path: "/", redirect: "/playground" },
    {
        path: "/playground",
        component: () => import("./playground/PlaygroundPage.vue"),
    },
];
