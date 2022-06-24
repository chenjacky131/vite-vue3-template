import { createApp } from "vue";
import App from "./App.vue";
import store from '@/store/index';
import router from '@/router/index';

// console.log(import.meta.env)  //读取配置文件
const Instance = createApp(App)
Instance.use(store).use(router).mount("#app");
