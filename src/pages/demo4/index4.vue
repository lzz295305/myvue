<template>
      <div>
        状态管理vuex
              <div>------------------</div>
      <div>{{msg}}</div>
        <button @click="change">change</button>
      </div>
</template>

<script>
    export default {
        name: "index4",
        data(){
            return{
                msg:'123',
            }
        },
        methods:{
            change(){
                //vuex取数据
                //this.msg = this.$store.state.count;
                this.msg = this.$store.state.num;
                //修改公共数据
                this.$store.dispatch('increment',100000);
            }
        }
    }
</script>

<style scoped>

</style>
