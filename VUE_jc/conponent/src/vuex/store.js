/*
* vuex 最核心的管理对象模块
* */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)
/*
* 相当与data的对象,
* 包含n个可变的数据
* */
const state = {
    firstView: true, // 是否显示第一个界面
    loading: false, // 是否正在请求加载中
    users: [], // 所有匹配的用户列表
    errorMsg: '', // 需要显示的错误提示信息
}

/*
* 一个包含n个用于直接更新状态数据方法的对象
* */
const mutations = {
    requesting(state) {
        state.firstView = false
        state.loading = true
    },
    req_success(state,users) {
        state.loading = false
        state.users = users
    },
    req_error(state,errorMsg){
        state.loading = false
        state.errorMsg = errorMsg
    }

}

/*
* 一个包含n个用于间接更新状态数据方法的对象
* */
const actions = {
    async search({commit},searchName) {
        commit('requesting')
        try {
            const response = await axios('/gh/search/users', {params: {q: searchName}})
            // 如果成功, 更新状态数据(成功)
            const result = response.data
            const users = result.items.map(item => ({
                username: item.login,
                url: item.html_url,
                avatar_url: item.avatar_url
            }))
            commit("req_success",{users})
        } catch (error) { // 如果失败, 更新状态数据(失败)
            commit("req_error",{error:error.message})
        }
    }
}
const getters = {}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})