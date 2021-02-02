import request from '@/utils/request'

/**
 * 角色列表
 * @param {*} query 
 */
export function getRoles(query) {
  return request({
    url: '/role/getRoles',
    method: 'get',
    params: query
  })
}

/**
 * 新增角色
 * @param {*} data 
 */
export function addRole(data) {
  return request({
    url: '/role/addRole',
    method: 'post',
    data
  })
}

/**
 * 编辑角色
 * @param {*} data 
 */
export function updateRole(data) {
  return request({
    url: '/role/updateRole',
    method: 'post',
    data
  })
}

/**
 * 删除角色
 * @param {*} id 
 */
export function deleteRole(id) {
  return request({
    url: `/role/deleteRole/${id}`,
    method: 'post'
  })
}


/**
 * 新增用户和角色的关联
 * @param {Object} data
 */
export function addUserRole(data) {
  return request({
    url: '/user/addUserRole',
    method: 'post',
    data
  })
}

/**
 * 删除用户和角色的关联
 * @param {*} data 
 */
export function deleteUserRole(data) {
  return request({
    url: `/user/deleteUserRole`,
    method: 'post',
    data
  })
}

/**
 * 根据角色 ID 获取用户列表
 * @param {Number} role_id
 */
export function getUserByRoleId(role_id) {
  return request({
    url: `/user/getUserByRoleId/${role_id}`,
    method: 'get'
  })
}

/**
 * 根据角色 ID 获取相关的菜单
 * @param {*} role_id 
 */
export function getRoleMenu(role_id) {
  return request({
    url: `/role/getRoleMenu/${role_id}`,
    method: 'get'
  })
}

/**
 * 添加角色与菜单的关联
 * @param {*} role_id 
 * @param {*} data 
 */
export function addRoleMenuBatch(role_id, data) {
  return request({
    url: `/role/addRoleMenuBatch/${role_id}`,
    method: 'post',
    data
  })
}
