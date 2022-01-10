import VueRouter from "vue-router";
import Vue from "vue";
import VideoHomePage from "@/views/videohomepage"


Vue.use(VueRouter)


const router = new VueRouter({
    mode: "history",
    routes: [
        {path: "/", component: VideoHomePage},
    ]
})

export default router;