import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/components/Layout'
Vue.use(Router);


export default new Router({

    routes: [
        {
            path: '/login',
            component: () => import('@/views/login/index'),
            name: 'login',
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
                    title: '首页',
                }
            }]
        },
        {
            path: '',
            component: Layout,
            children: [{
                path:'/work/notice',
                component: () => import('@/views/work/notice/index'),
                name:'notice',
                meta: {
                    title: '公告',
                }
            }]
        }
    ]

});








