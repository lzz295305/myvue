<template>
    <div>
      <h1>这是一个孩子组件</h1>
      <router-link to="/HelloWorld/child/child_a">这是孙子</router-link>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
</template>

<script>
    export default {
        name: "child",
        data(){
          return{
              x:'这是什么吗'
          }
        }
    }
</script>

<style scoped>

</style>
