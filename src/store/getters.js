const getters = {
    user_id: state => state.user.id,
    token: state => state.user.token,
    name: state => state.user.name,
    roles: state => state.user.roles,
    permission_routes: state => state.permission.routes
}

export default getters
