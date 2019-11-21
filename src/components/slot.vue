<template>
<div>
  <div>slot插槽测试</div>
  <slot>

  </slot>
<p>我是最底部</p>
  <slot name="button"></slot>
</div>
</template>

<script>
    export default {
        name: "slot"
    }
</script>

<style scoped>

</style>
