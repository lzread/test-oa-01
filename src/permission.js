import router from './router'
import Cookies from 'js-cookie'
import store from './store'
import getPageTitle from '@/utils/get-page-title'
const whiteList = ['/login']
router.beforeEach(async (to, from, next) => {

    document.title = getPageTitle(to.meta.title)
    
    const hasToken = Cookies.get('token') //获取 token 来判断是否登录
    if (hasToken) {

        if (to.path === '/login') {

            //如果已经登录，再次访问登录页面，直接跳转到首页
            next({ path: '/' })

        } else {

            const hasRoles = store.getters.roles && store.getters.roles.length > 0;

            if (hasRoles) {
                next()
            } else {
                const { roles } = await store.dispatch('user/getInfo');
                const serverRouter = await store.dispatch('user/getMenus');
                console.log(serverRouter)
                const accessRoutes = await store.dispatch('permission/generateRoutes', { roles, serverRouter });
                router.addRoutes(accessRoutes);
                next({ ...to, replace: true })

            }
        }

    } else {

        if (whiteList.indexOf(to.path) !== -1) {

            //继续执行
            next()

        } else {

            //跳转到登录页面
            next(`/login`)

        }

    }
})