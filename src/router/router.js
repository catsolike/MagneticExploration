import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/pages/LoginPage";
import DataPage from "@/pages/DataPage";
import GraphicPage from "@/pages/GraphicPage";

const routes = [
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/',
        component: DataPage
    },
    {
        path: '/graphic',
        component: GraphicPage
    }
]

const router = createRouter(
    {
        routes,
        history: createWebHistory(process.env.BASE_URL)
    }
)

export default router;