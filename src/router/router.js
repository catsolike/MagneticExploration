import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/pages/LoginPage";
import DataPage from '@/pages/DataPage';

const routes = [
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/',
        component: DataPage
    },
]

const router = createRouter(
    {
        routes,
        history: createWebHistory(process.env.BASE_URL)
    }
)

export default router;