<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Git Out</h2>
    <router-link to="/HelloWorld/child">child</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to My World !'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
