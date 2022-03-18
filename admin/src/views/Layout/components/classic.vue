<template>
  <div class="auto h-screen s-b-s" :class="[collapsed?'':'w-200']"><Menu mode="inline" theme="dark" ref="myMenu"></Menu></div>
  <div class="flex-1">
    <div class="header flex align-center border-bottom-width-1 border-solid">
      <div @click="toggleCollapsed" class="header-hover h-full bb cursor flex align-center center m-r-12 w-48">
        <MenuUnfoldOutlined v-if="collapsed" />
        <MenuFoldOutlined v-else />
      </div>
      <breadcrumb style="flex: 1"></breadcrumb>
      <userInfo></userInfo>
    </div>
    <div class="tag-bar">
      <tagsView></tagsView>
    </div>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import {defineComponent,ref,provide} from 'vue'
import Menu from './components/Menu.vue'
import userInfo from './components/userInfo.vue'
import tagsView from "@/views/Layout/components/components/tagsView.vue";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons-vue';
import breadcrumb from "@/views/Layout/components/components/breadcrumb.vue";
export default defineComponent({
  components:{
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    userInfo,
    Menu,
    breadcrumb,
    tagsView
  },
  setup(){
    const collapsed = ref(false)
    const myMenu = ref(null)
    provide('collapsed',collapsed)
    const toggleCollapsed=()=>{
      collapsed.value=!collapsed.value
      let obj = myMenu.value||{toggleCollapsed(){}}
      if(myMenu.value){
        obj.toggleCollapsed()
      }
    }
    provide('toggleCollapsed',toggleCollapsed)

    return{
      myMenu,
      collapsed,
      toggleCollapsed
    }
  }
})
</script>
<style scoped lang="less">
.header{
  height: var(--logo-height);
}
</style>
