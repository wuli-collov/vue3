<template>
  <popover placement="bottom" type="menu" :list="list">
    <div class="flex bb p-l-10 p-r-10 p-t-1 header-hover flex align-center cursor h-full">
      <a-avatar :src="userAvatar" :size="24">{{ userName?userName[0]:'' }}</a-avatar>
      <span class="m-l-8">{{ userName }}</span>
    </div>
  </popover>
</template>
<script lang="ts">
import popover from "@/components/comom/popover";
import { defineComponent,computed } from 'vue'
import { useStore } from 'vuex'
interface ListType {
  name:String,
  key:String
}
export default defineComponent({
  name:'userInfo',
  components:{popover},
  setup(){
    const store = useStore()
    const userName = computed(()=>store.state.user.userName)
    const userAvatar = computed(()=>store.state.user.userAvatar)
    const list:Array<ListType>=[
      {name:'修改密码',key:'updatePwd'},
      {name:'退出登录',key:'logOut'},
    ]
    return{
      list,
      userName,
      userAvatar
    }
  },
})
</script>
