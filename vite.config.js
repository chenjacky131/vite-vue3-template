import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        // 给导入的路径最后加上 ;
        additionalData: '@import "./src/assets/variable.scss";',
      },
    },
  },
  resolve: {
    "@": path.resolve(__dirname, "./src"),
  },
});
