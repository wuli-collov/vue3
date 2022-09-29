<template>
<div class="tags-wrap s-b-s-0 flex flex-align" id="scrollTag">
  <span class="v-tags-view__item" :ref="doms" v-for="(item,index) in list" @click="toChoose(index)">
    <span>{{ index }}</span>
    <span class="close-icon iconfont icon-close" @click.stop="remove(index)"> </span>
  </span>
</div>
</template>
<script lang="ts">
import { defineComponent,ref,computed } from 'vue'
import {scrollIntoView} from '@/hooks/useScroll'
import { useStore } from 'vuex'
export default defineComponent({
  components: {
  },
  setup(){
    const arr= ref([])
    const doms = (el: HTMLElement) => {
      // 断言为HTMLElement类型的数组
      (arr.value as Array<HTMLElement>).push(el);
    };
    const store = useStore()
    /*选择数据*/
    const toChoose = function (index:number){
      let ele = arr.value[index]
      scrollIntoView(ele)
    }
    /*获取*/
    const list = computed(()=>store.state.user.tags)
    /*删除*/
    const remove = function (index:number){
      store.dispatch('removeTag',index)
    }
    return{
      list,
      remove,
      doms,
      toChoose
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
  top: 2px;
  position: relative;
  user-select: none;
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
  top: 2px;
  height: 30px;
  padding-right: 25px;
  line-height:30px;
  font-size: 12px;
  margin-left: 4px;
  box-sizing: border-box;
  padding-left: 15px;
  white-space: nowrap;
  border: 1px solid #d9d9d9;
  position: relative;
  cursor:pointer;
}
.v-tags-view__item.active{
  background-color: var(--elcolor-primary);
  color: #ffffff;
}

</style>
