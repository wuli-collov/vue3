<template>
  <a-menu
      class="menu-wrap"
      :mode="mode"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      :inline-collapsed="collapsed"
      :theme="theme"
  >
    <a-menu-item key="1">
      <template #icon>
        <PieChartOutlined />
      </template>
      <span>Option 1</span>
    </a-menu-item>
    <a-menu-item key="2">
      <template #icon>
        <DesktopOutlined />
      </template>
      <span>Option 2</span>
    </a-menu-item>
    <a-menu-item key="3">
      <template #icon>
        <InboxOutlined />
      </template>
      <span>Option 3</span>
    </a-menu-item>
    <a-sub-menu key="sub1">
      <template #icon>
        <MailOutlined />
      </template>
      <template #title>Navigation One</template>
      <a-menu-item key="5">Option 5</a-menu-item>
      <a-menu-item key="6">Option 6</a-menu-item>
      <a-menu-item key="7">Option 7</a-menu-item>
      <a-menu-item key="8">Option 8</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>
<script>
import { defineComponent,reactive,toRefs,watch,inject } from 'vue'
export default defineComponent({
  props:['mode','theme'],
  setup(){
    const state = reactive({
      openKeys:[],
      selectedKeys:[],
      preOpenKeys:[],
    })
    const collapsed = inject('collapsed')
    const toggleCollapsed = () => {
      state.openKeys = state.collapsed ? [] : state.preOpenKeys;
    };
    watch(() => state.openKeys, (_val, oldVal) => {
      state.preOpenKeys = oldVal;
    });
    return{
      ...toRefs(state),
      collapsed,
      toggleCollapsed
    }
  }
})
</script>
<style>
.menu-wrap{
  width: 100%;
  height: 100%;
}
</style>
