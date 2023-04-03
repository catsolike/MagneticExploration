import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/pages/LoginPage";
import GraphicPage from "@/pages/GraphicPage";
import TestPage from '@/pages/TestPage';
import ServerTest from '@/pages/ServerTest';
// import TestGraph from '@/pages/TestGraph';

const routes = [
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/',
        component: ServerTest
        // component: TestGraph
    },
    {
        path: '/graphic',
        component: GraphicPage
    },
    // {
    //     path: '/dp',
    //     component: DataPage
    // },
    // {
    //     path: '/servertest',
    //     component: ServerTest
    // },
    {
        path: '/test',
        component: TestPage
    },

]

const router = createRouter(
    {
        routes,
        history: createWebHistory(process.env.BASE_URL)
    }
)

export default router;