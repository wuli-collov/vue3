<template>
  <a-popover :placement="placement" :trigger="trigger">
    <template #content>
      <a-menu @click="onClick" v-if="type==='menu'">
        <a-menu-item :key="item.key" v-for="item in list">{{ item.name }}</a-menu-item>
      </a-menu>
    </template>
    <slot></slot>
  </a-popover>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type { MenuProps } from 'ant-design-vue';
export default defineComponent({
  name:'popover',
  props:{
    placement:{
      type:String,
      default:'bottom'
    },
    trigger:String,
    type:String,
    list:Array,
  },
  setup(props,context){
    let { attrs, slots, emit } = context;
    const onClick: MenuProps['onClick'] = ({ key }) => {
      emit(key)
    };
    return{
      onClick
    }
  }
})
</script>
<style scoped lang="less">

</style>
