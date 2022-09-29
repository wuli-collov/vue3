<template>
  <router-view v-slot="{Component}">
    <keep-alive>
      <component :is="Component" v-if="$route.meta.keepAlive"></component>
    </keep-alive>
    <component :is="Component" v-if="!$route.meta.keepAlive"></component>
  </router-view>
</template>
<script lang="ts">
import { defineComponent, inject,onMounted } from "vue";
import {useStore} from 'vuex'
export default defineComponent({
  setup(){
    const store = useStore()
    onMounted(()=>{
      store.commit('setCssVarTheme')
    })
  }
})
</script>
<style lang="less">
</style>
