import { createApp } from "vue";
import App from "./App.vue";
import store from '@/store/index';

// console.log(import.meta.env)  //读取配置文件
const Instance = createApp(App)
Instance.use(store).mount("#app");
