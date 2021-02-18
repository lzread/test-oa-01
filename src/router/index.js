import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/components/Layout'
Vue.use(Router);



export const constantRoutes = [
    {
        path: '/404',
        component: () => import('@/views/error/404'),
        name: '404',
        hidden: true,
        meta: {
            title: '404',
        }
    },
    {
        path: '/login',
        component: () => import('@/views/login/index'),
        name: 'login',
        hidden: true,
        meta: {
            title: '登录',
        }
    },
    {
        path: '',
        component: Layout,
        redirect: '/',
        children: [{
            path: '/',
            component: () => import('@/views/home/index'),
            meta: {
                title: 'dashboard',
            }
        }]
    },

]

const createRouter = () => new Router({
    routes: constantRoutes
})

export const asyncRoutes = [
    { path: '*', redirect: '/404', hidden: true }
]

const router = createRouter()

export default router;






