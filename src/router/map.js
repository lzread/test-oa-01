const routerComponentsMap = {
    "system": () => import('@/components/Layout'),
    "users": () => import('@/views/system/users/index'),
    "menus": () => import('@/views/system/menus/index'),
    "roles": () => import('@/views/system/roles/index'),
    "department": () => import('@/views/system/department/index'),
    "work": () => import('@/components/Layout'),
    "notice": () => import('@/views/work/notice/index')

}

export default routerComponentsMap