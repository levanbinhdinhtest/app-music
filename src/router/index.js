import { createRouter,createWebHistory } from "vue-router";
import TheHome from "@/pages/TheHome.vue";
import TheSearch from "@/pages/TheSearch.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

const routes = [
    {
    path:'/',
    component: DefaultLayout,
    children:
    [
        {
            path:'/',
            name: 'TheHome',
            component: TheHome,
            alias: '/home'
        },
        {
            path:'/search',
            name: 'TheSearch',
            component: TheSearch
        },
        // {
        //     // dua ve page not found
        //     path:"/:pathMath(.*)*",
        //     component: NotFound
        // }
    ]
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes,
    linkActiveClass: "active"
});

export default router;