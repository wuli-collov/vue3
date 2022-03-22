<template>
  <Highlight :keys="keys">
     i'm a student
  </Highlight>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Highlight from "@/components/comom/Highlight.vue";
export default defineComponent({
  setup(){
    const keys = ['student']
    return{
      keys,
    }
  },
  components:{Highlight},
})
</script>
<style scoped lang="less">

</style>
