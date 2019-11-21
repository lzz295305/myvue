<template>
  <div>
    <div>vue-resource</div>
    <p>-------------------------------</p>
  </div>
</template>

<script>
    export default {
        name: "index6",
        data(){
            return{
            }
        },
        methods(){
            this.$http.get('/someUrl').then(response =>{
                console.log(response.body);
            },response => {

            });

        }
    }
</script>

<style scoped>

</style>
