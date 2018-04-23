import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 状态
const state = {
    count:0
}

//改变
const mutations = {
    add(state){
        state.count++;
    },
    reduce(state){
        state.count--;
    }
}

//导出
export default new Vuex.Store({
    state,
    mutations
    
})