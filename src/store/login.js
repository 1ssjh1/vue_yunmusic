//求和相关的配置
export default {
    namespaced: true,
    actions: {

        updateIsLogin: function(state, value) {
            state.isLogin = true
        },
        updateToken: function(state, value) {
            state.token = value
            localStorage.setItem('token', state.token)
        },
        updateUser: function(state, value) {
            state.user = value
        }
    },
    mutations: {

    },
    state: {
        token: "",
        user: {}, //用户信息
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    },
}