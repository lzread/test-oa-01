import { login, getInfo } from '@/api/user'
import { getMenus } from '@/api/menu'
import Cookies from 'js-cookie'

const state = {
    id: Cookies.get('id'),
    token: Cookies.get('token'),
    name: "",
    roles: [],
    serverRouter: []
}

const mutations = {
    SET_ID: (state, id) => {
        state.id = id;
    },
    SET_TOKEN: (state, token) => {
        state.token = token;
    },
    SET_NAME: (state, name) => {
        state.name = name;
    },
    SET_ROLES: (state, roles) => {
        state.roles = roles;
    },
    SET_SERVER_ROUTER: (state, serverRouter) => {
        state.serverRouter = serverRouter;
    },
}

const actions = {
    // 用户登录
    login({ commit }, userInfo) {
        const { username, password } = userInfo
        return new Promise((resolve, reject) => {
            login({ username: username.trim(), password: password }).then(response => {
                const { data } = response

                commit('SET_ID', data.id)
                commit('SET_TOKEN', data.token)

                Cookies.set('id', data.id)
                Cookies.set('token', data.token)

                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    getInfo({ commit, state }) {
        return new Promise((resolve, reject) => {
            getInfo(state.id).then(response => {

                const { data } = response;

                if (!data) {
                    reject('验证失败')
                }

                const { roles, realname } = data;

                commit('SET_ROLES', roles);
                commit('SET_NAME', realname);

                resolve(data);


            }).catch(error => {
                reject(error)
            })
        })

    },
    logout({ commit }) {
        return new Promise((resolve) => {
            commit('SET_TOKEN', []);
            commit('SET_ID', []);
            Cookies.remove('token');
            Cookies.remove('id');
            resolve()
        })
    },
    getMenus({ commit }) {
        return new Promise((resolve, reject) => {
            getMenus().then(response => {
                const { data } = response
                commit('SET_SERVER_ROUTER', data);
                resolve(data)
            }).catch(error => {
                reject(error)
            })
        })
    }

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}