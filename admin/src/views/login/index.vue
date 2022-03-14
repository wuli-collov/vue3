<template>
  <div class="login-bg">
    <div class="login-content">
      <Login></Login>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent ,provide} from "vue";
import Login from "@/views/login/components/login.vue";
export default defineComponent({
  name: "Home",
  components:{Login},
  setup(){
  }
});
</script>
<style scoped lang="less">
.login-bg{
  width: 100%;
  height: 100vh;
  background: url("../../assets/images/login-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-content{
    background: #ffffff;
    width: 430px;
    padding: 48px;
    box-sizing: border-box;
  }
}
</style>
