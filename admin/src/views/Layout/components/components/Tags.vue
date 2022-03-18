<template>
<div class="tags-wrap s-b-s-0 flex flex-align">
  <span class="v-tags-view__item active" v-for="item in 24">
    <span>name</span>
    <span class="close-icon iconfont icon-close "> </span>
  </span>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
  },
  setup(){

    return{

    }
  }
})
</script>
<style scoped lang="less">
.tags-wrap{
  white-space: nowrap;
  width: 0;
  height: 38px;
  overflow-x: auto;
  flex: 1;
}
.close-icon{
  position: absolute;
  right: 4px;
  font-size: 14px;
  display: none;
}
.v-tags-view__item:hover .close-icon{
  display: inline-block;
}
.v-tags-view__item {
  display: inline-block;
  position: relative;
  top: 2px;
  height: 30px;
  padding-right: 25px;
  line-height:30px;
  font-size: 12px;
  cursor: pointer;
  margin-left: 4px;
  box-sizing: border-box;
  padding-left: 15px;
  white-space: nowrap;
  border: 1px solid #d9d9d9;
  position: relative;
}
.v-tags-view__item.active{
  background-color: var(--admin-color-primary);
  color: #ffffff;
}

</style>
