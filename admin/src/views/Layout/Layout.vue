<script lang="ts">
import { useStore } from 'vuex'
import { defineComponent,computed,unref } from 'vue'
import {useDesign} from "@/hooks/useDesign";
import AppView from "@/views/Layout/AppView.vue";
import classic from "@/views/Layout/components/classic.vue";

const handleClickOutside = () => {
  // appStore.setCollapse(true)
}
export default defineComponent({
  name:'Layout',
  components:{AppView,classic},
  setup(){
    const store = useStore()
    const collapse =  computed(() => store.state.collapse) // 菜单折叠
    const layout =  computed(() => store.getters.getLayout)// 布局
    const mobile =  computed(() => store.state.mobile) // 是否是移动端
    const { getPrefixCls } = useDesign()
    const prefixCls = getPrefixCls('layout')
    const renderLayout=()=>{
      switch(unref(layout)){
        case 'classic':
          return 'classic'
        case 'topLeft':
          return 'topLeft'
        case 'top':
          return 'top'
        case 'cutMenu':
          return 'cutMenu'
      }
    }
    return {
      collapse,
      layout,
      mobile,
      prefixCls,
      renderLayout
    }
  }
})
</script>
<template>
  <section :class="[prefixCls,prefixCls+'__'+layout]">
    <component :is="renderLayout()">
      <slot><AppView></AppView></slot>
    </component>
  </section>
</template>
<style>
.admin-layout__classic{
  display: flex;
}
</style>
