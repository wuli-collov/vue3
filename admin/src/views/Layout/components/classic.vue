<template>
  <div class="left" :class="[collapsed?'':'collapsed']"><Menu mode="inline" theme="dark" ref="myMenu"></Menu></div>
  <div class="right">
    <div class="header">
      <div @click="toggleCollapsed" class="toggle">
        <MenuUnfoldOutlined v-if="collapsed" />
        <MenuFoldOutlined v-else />
      </div>
      <breadcrumb style="flex: 1"></breadcrumb>
      <userInfo></userInfo>
    </div>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import {defineComponent,ref,provide} from 'vue'
import Menu from './components/Menu.vue'
import userInfo from './components/userInfo.vue'
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
    breadcrumb
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
.left{
  height: 100vh;
  overflow: auto;
}
.collapsed{
  width: 200px;
}
.left::-webkit-scrollbar {
  width: 4px;
  height: 8px;
  background: #ffffff;
}
.left::-webkit-scrollbar-thumb {
  background: #ffffff;
  border-radius: 100px;
}
.right{
  flex: 1;
}
.header{
  display: flex;
  align-items: center;
}
.toggle{
  width: 48px;
  box-sizing: border-box;
  padding: 1px 10px 0;
  cursor: pointer;
  &:hover{
    background-color: var(--top-header-hover-color);
  }
}
</style>
