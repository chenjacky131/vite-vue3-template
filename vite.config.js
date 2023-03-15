import { defineConfig, loadEnv  } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
//  引入html插件插件
import { createHtmlPlugin } from "vite-plugin-html";
//这个配置 为了在html中使用 环境变量
const getViteEnv = (mode, target) => {
  return loadEnv(mode, process.cwd())[target];
};

// https://vitejs.dev/config/
export default ({mode}) => defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      mockPath: "./src/mock/", // 解析，路径可根据实际变动
      localEnabled: true // 此处可以手动设置为true，也可以根据官方文档格式
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/imgs/svg')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
    }),
    createHtmlPlugin({
      inject:{
        data: {
          title: getViteEnv(mode, 'VITE_APP_TITLE')
        }
      }
    })
  ],
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        // 给导入的路径最后加上 ;
        additionalData: `@import "@/assets/styles/preStyle.scss";`
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@c': path.resolve(__dirname, 'src/components'),
      '@a': path.resolve(__dirname, 'src/assets'),
      '@p': path.resolve(__dirname, 'src/pages'),
      '@s': path.resolve(__dirname, 'src/store'),
      '@u': path.resolve(__dirname, 'src/utils'),
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
 },
})
