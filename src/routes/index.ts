import Dashboard from "@/views/Dashboard.vue";
import Signin from "@/views/Signin.vue";
import Signup from "@/views/Signup.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: Dashboard
    }, 
    {
        path: "/login",
        component: Signin
    },
    {
        path: "/register",
        component: Signup
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})