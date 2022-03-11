<script lang="ts">
import { useStore } from 'vuex'
import { defineComponent,computed } from 'vue'
/**/
const handleClickOutside = () => {
  // appStore.setCollapse(true)
}
export default defineComponent({
  name:'Layout',
  setup(){
    const store = useStore()
    const collapse =  computed(() => store.state.collapse) // 菜单折叠
    const layout =  computed(() => store.getters.getLayout)// 布局
    const mobile =  computed(() => store.state.mobile) // 是否是移动端
    const prefixCls=''
    return {
      collapse,
      layout,
      mobile,
      prefixCls,
    }
  }
})
</script>
<template>
  <section :class="[prefixCls,prefixCls+'__'+layout]">

  </section>
</template>
