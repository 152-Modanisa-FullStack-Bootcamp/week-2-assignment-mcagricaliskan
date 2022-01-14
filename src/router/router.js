import VueRouter from "vue-router";
import Vue from "vue";
import Main from "@/views/Main"
import Favorites from "@/views/Favorites"
import Watch from "@/views/Watch"

Vue.use(VueRouter)


const router = new VueRouter({
    mode: "history",
    routes: [
        {path: "/", component: Main},
        {path: "/favorites/:userid", component: Favorites},
        {path: "/watch", component: Watch}
    ]
})

export default router;