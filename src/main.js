import { createApp } from "vue";
import App from "./App.vue";
import store from '@/store/index';  //  加载vuex
import router from '@/router/index';  //  加载路由
import '@/assets/styles/nprogress.scss'; //  加载自定义的进度条颜色
import 'virtual:svg-icons-register' // 引入注册脚本
import SvgIcon from '@c/SvgIcon.vue' // 引入组件
// console.log(import.meta.env)  //读取配置文件
const Instance = createApp(App)
Instance.component('svg-icon', SvgIcon)
Instance.use(store).use(router).mount("#app");
