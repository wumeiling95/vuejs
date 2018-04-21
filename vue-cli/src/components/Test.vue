<template>
<div>
    <h1 class="hw">hello</h1>
    <h1>{{msg}}</h1> 
    <router-view />
</div>
</template>
<script>
export default({
  data(){
      return {
          msg:'这是测试组件'
      }
  }
})
</script>
<style scoped>
.hw{
    background-color: red;
}
</style>

