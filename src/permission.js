import router from './router'
import Cookies from 'js-cookie'
import store from './store'

const whiteList = ['/login']
router.beforeEach(async (to, from, next) => {
    const hasToken = Cookies.get('token') //获取 token 来判断是否登录
    if (hasToken) {

        if (to.path === '/login') {

            //如果已经登录，再次访问登录页面，直接跳转到首页
            next({ path: '/' })

        } else {

            //继续执行
            const {roles} = await store.dispatch('user/getInfo');
            console.log(roles)
            next()
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