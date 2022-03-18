export const routes = [
    { path: "/", redirect: "/playground" },
    {
        path: "/playground/:encoded?",
        component: () => import("./playground/PlaygroundPage.vue"),
        props: (route) => ({
            encoded: route.params.encoded,
        }),
    },
];
