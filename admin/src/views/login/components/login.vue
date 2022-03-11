<template>
  <a-form
      :model="formState"
      name="normal_login"
      class="login-form"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
  >
    <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input v-model:value="formState.username">
        <template #prefix>
          <UserOutlined class="site-form-item-icon" />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.password">
        <template #prefix>
          <LockOutlined class="site-form-item-icon" />
        </template>
      </a-input-password>
    </a-form-item>
    <a-form-item >
      <a-button :disabled="disabled" block type="primary" html-type="submit" class="login-form-button">
        Log in
      </a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts">
import { defineComponent,reactive,computed, inject } from 'vue'
import { useStore } from 'vuex'
import { message } from 'ant-design-vue'
import {useRouter} from 'vue-router'
import urls from '@/apis/api'
interface FormState{
  username:string,
  password:string
}
export default defineComponent({
  setup(){
    const formState = reactive<FormState>({
      username: '',
      password: '',
    })
    const router = useRouter()
    const store = useStore()
    const onFinish = async (values:any)=>{
     const res = await urls.login.login(values)
     if(res.success){
       store.commit('SET_TOKEN',res.data.token)
       router.push({
         path: '/',
       })
       return message.success(res.msg||'success')
     }
      message.error(res.msg||'error')
    }
    const onFinishFailed = (error:any)=>{
      console.log(error)
    }
    const disabled = computed(()=>{
      return !(formState.username && formState.password);
    })
    return{
      formState,
      onFinish,
      onFinishFailed,
      disabled
    }
  }
})
</script>
