// 组件
<template>
<div>
    <h1>{{ $store.state.count }}</h1>
    <h1>{{computedcount}}</h1>
    <button @click="$store.commit('add')">add</button>
    <button @click="$store.commit('reduce')">reduce</button>
</div>
 
</template>

<script>
import store from '@/vuex/store.js'
export default {
    store,
    computed: {
        computedcount(){
            return this.$store.state.count
        }
    }
}
</script>

<style>

</style>
