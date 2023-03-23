import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/pages/LoginPage";
import DataPage from "@/pages/DataPage";
import GraphicPage from "@/pages/GraphicPage";
import test from '@/pages/test';

const routes = [
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/',
        component: test
    },
    {
        path: '/graphic',
        component: GraphicPage
    },
    {
        path: '/dp',
        component: DataPage
    }
]

const router = createRouter(
    {
        routes,
        history: createWebHistory(process.env.BASE_URL)
    }
)

export default router;