import { createApp } from "vue";
import App from "./App.vue";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import router from "./router";
import './router/permission'
import store from "@/store/index";
// @ts-ignore
import Mock from 'mockjs'
import "./mock/index"
// 引入全局样式
import '@/styles/index.less'

createApp(App).use(Antd).use(Mock).use(store).use(router).mount("#app");
