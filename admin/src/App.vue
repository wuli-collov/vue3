<template>
  <router-view v-slot="{Component}">
    <keep-alive>
      <component :is="Component" v-if="$route.meta.keepAlive"></component>
    </keep-alive>
    <component :is="Component" v-if="!$route.meta.keepAlive"></component>
  </router-view>
</template>
<script lang="ts">
import { defineComponent, inject } from "vue";
export default defineComponent({
  setup(){
  }
})
</script>
<style lang="less">
</style>
