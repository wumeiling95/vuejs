<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/">首页</router-link>
      <router-link to="/test">Test</router-link>
      <!-- 动态获取参数 -->
      <router-link :to="{name:'/test/test1',params:{username:'ciecheng',age:32}}">子路由1</router-link>
      <router-link to="/test/test2">Test2</router-link>
      <router-link to="/test/testURL/5/zhangsan">testURL</router-link>

          <router-view/>

    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
