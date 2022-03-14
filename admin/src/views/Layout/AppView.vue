<template>
  <router-view>
    <template #default="{ Component, route }">
      <keep-alive :include="getCaches">
        <component :is="Component" :key="route.fullPath"/>
      </keep-alive>
    </template>
  </router-view>
</template>
<script lang="ts">
import {defineComponent, computed} from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore()
    const getCaches = computed((): string[] => {
      return store.getters.getCachedViews
    })
    return {
      getCaches
    }
  }
})
</script>
