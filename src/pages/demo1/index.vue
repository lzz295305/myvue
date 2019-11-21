<template>
    <div>
      hello world!
      <div>-------------------------</div>
      <div>列表渲染</div>
      <ul>
        <li v-for="x in items">
          {{x.name}}
        </li>
      </ul>
      <div>列表渲染第二种
        <ul>
          <li v-for="(value,index) in items">
            {{index+1}}.{{value}}
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li v-for="(value,key) in obj">
            {{key}}.{{value}}
          </li>
        </ul>
      </div>
      <button @click="toURL">跳转页面</button>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
               items:[
                   {name:'张三'},
                   {name:'四十'}
               ],
                obj:{
                   name:'万物',
                    age:'23',
                }
            }
        },
        methods:{
            toURL(){
                this.$router.push({path:'demo2'})
            }
        }
    }
</script>

<style scoped>
*{
  list-style: none;
}
</style>
