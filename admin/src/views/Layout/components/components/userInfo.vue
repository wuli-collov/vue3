<template>
  <div class="user">
    <a-avatar style="background-color: #f56a00" :size="24">A</a-avatar>
    <span class="name">Archer</span>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  setup(){
    return{

    }
  }
})
</script>
<style scoped lang="less">
  .user{
    display: flex;
    .name{
      margin-left: 8px;
    }
  }
</style>
