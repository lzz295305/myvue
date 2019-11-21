<template>
    <div>
      <div>Slot插槽</div>
      <div>--------------------</div>
      <slots>
        <div>123</div>
        <div>1456</div>
        <p slot="button">666</p>
        <p slot="button">999</p>
      </slots>
    </div>
</template>

<script>
    import slots from '@/components/slot.vue';
    export default {
        name: "index5",
        data(){
            return{

            }
        },
        components:{
            slots
        }
    }
</script>

<style scoped>

</style>
