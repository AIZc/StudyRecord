/*
* vuex 最核心的管理对象模块
* */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/*
* 相当与data的对象,
* 包含n个可变的数据
* */
const state = {
    count: 1 // 初始化状态数据
}


/*
* 一个包含n个用于直接更新状态数据方法的对象
* */
const mutations = {
    increment(state) {
        state.count++
    },
    decrement(state) {
        state.count--
    },
}

/*
* 一个包含n个用于间接更新状态数据方法的对象
* */
const actions = {
    incrementIfOdd({commit,state}) {
        if (state.count%2===1){
            commit('increment')
        }
    },
    incrementAsync({commit}) {
        setTimeout(()=>{
            commit('increment')
        },1000)
    }
}
const getters = {
    evenOrOdd(state){
        return state.count % 2 === 1 ? '奇数':'偶数'
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})