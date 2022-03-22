<template>
  <div class="flex align-center border-bottom-width-1 border-solid h-45" ref="tagView">
    <div class="scroll-left cursor w-34 h-34 flex align-center center border-width-1 border-solid" @click="toScroll(tag,'left')"> <left-outlined /></div>
    <Tags ref="tag"></Tags>
    <div class="scroll-right cursor w-34 h-34 flex align-center center border-width-1 border-solid" @click="toScroll(tag,'right')"><right-outlined /></div>
  </div>
</template>
<script lang="ts">
import { LeftOutlined,RightOutlined } from '@ant-design/icons-vue';
import Tags from './Tags.vue'
import { defineComponent,ref,onMounted ,Ref} from 'vue'
import {scroll,DirectionType,mouse} from '@/hooks/useScroll'
export default defineComponent({
  components:{LeftOutlined,RightOutlined,Tags},
  setup(){
    const tag = ref(null)
    const tagView = ref(null)
    const toScroll=function (elm:any,dir:DirectionType){
      let el  = elm.$el as HTMLElement
      scroll(el,dir)
    }
    onMounted(()=>{
      let elm =(tag.value  as any).$el
      let tagEl =(tag.value  as any).$el
      mouse(tagEl,elm)
    })
    return{
      tag,
      tagView,
      toScroll,
    }
  }
})
</script>
<style scoped lang="less">

</style>
