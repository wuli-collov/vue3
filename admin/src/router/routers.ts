import { RouteRecordRaw } from "vue-router";
import Layout from "@/views/Layout/Layout.vue";

export const constRouter:Array<RouteRecordRaw>=[
    {
        path: "/login",
        name: "login",
        component: () =>
            import("../views/login/index.vue"),
    },
    {
        path: "/",
        name: "Home",
        component: Layout,
    },
    {
        path: "/about",
        name: "About",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
]
export const asyncRoutes:Array<RouteRecordRaw>=[
    {
        path: "/user",
        name: "Home",
        component: () =>import(/* webpackChunkName: "about" */ "../views/user/index.vue")
    },
]
export default class router {
}
