import request from '@/utils/request'
export function login(data) {
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
}
export function getInfo(id) {
    return request({
        url: `/user/getInfo/${id}`,
        method: 'get'
    });
}

export function getUsers(query) {
    return request({
        url: `/user/getUsers`,
        method: 'get',
        params: query
    })
}

/**
 * 新增用户
 * @param {Object} data 用户信息
 */
export function addUser(data) {
    return request({
        url: '/user/addUser',
        method: 'post',
        data
    })
}

/**
 * 编辑用户
 * @param {Object} data 用户信息
 */
export function updateUser(data) {
    return request({
        url: '/user/updateUser',
        method: 'post',
        data
    })
}