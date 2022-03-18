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
<style lang="less">
@k:range(300);
each(@k, {
  .border-width-@{value} {
    border-width: (@value * 1px);
    border-color: var(--top-tool-border-color);
  }
  .border-bottom-width-@{value} {
    border: 0;
    border-bottom-width: (@value * 1px);
    border-color: var(--top-tool-border-color);
  }
  .m-r-@{value} {
    margin-right:(@value * 1px);
  }
  .m-b-@{value} {
    margin-bottom:(@value * 1px);
  }
  .m-t-@{value} {
    margin-top:(@value * 1px);
  }
  .m-l-@{value} {
    margin-left:(@value * 1px);
  }
  .w-@{value} {
    width:(@value * 1px);
  }
  .h-@{value} {
    height:(@value * 1px);
  }
  .p-r-@{value} {
    padding-right:(@value * 1px);
  }
  .p-t-@{value} {
    padding-top:(@value * 1px);
  }
  .p-l-@{value} {
    padding-left:(@value * 1px);
  }
  .p-b-@{value} {
    padding-bottom:(@value * 1px);
  }
  .f-s-@{value}{
    font-size:(@value * 1px);
  }
  .flex-@{value}{
    flex:@value
  }

});
.admin-layout__classic{
  display: flex;
}
</style>
