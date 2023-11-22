import Dashboard from "@/views/Dashboard.vue";
import Signin from "@/views/Signin.vue";
import Signup from "@/views/Signup.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useUserStore } from "@/stores/user.ts";

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
});

/** 
 * Router gaurd to check is someone going to dashboard without user auth
 */
router.beforeEach((to) => {
    const store = useUserStore();
    if(to.path == "/") {
        const user = store.getUser;

        if(!user.value) {
            return "/login"
        }

        return true;
    }

    return true;
})