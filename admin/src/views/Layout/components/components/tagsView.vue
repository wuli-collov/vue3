<template>
  <div class="flex align-center border-bottom-width-1 border-solid h-45">
    <div class="scroll-left cursor w-34 h-34 flex align-center center border-width-1 border-solid"> <left-outlined /></div>
    <Tags></Tags>
    <div class="scroll-right cursor w-34 h-34 flex align-center center border-width-1 border-solid"><right-outlined /></div>
  </div>
</template>
<script lang="ts">
import { LeftOutlined,RightOutlined } from '@ant-design/icons-vue';
import Tags from './Tags.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components:{LeftOutlined,RightOutlined,Tags},
  setup(){

    return{

    }
  }
})
</script>
<style scoped lang="less">

</style>
