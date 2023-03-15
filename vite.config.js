import { defineConfig, loadEnv  } from 'vite'
import viteImagemin from 'vite-plugin-imagemin'
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
    }),
    viteImagemin({
      gifsicle: { // gif图片压缩
        optimizationLevel: 3, // 选择1到3之间的优化级别
        interlaced: false, // 隔行扫描gif进行渐进式渲染
        // colors: 2 // 将每个输出GIF中不同颜色的数量减少到num或更少。数字必须介于2和256之间。
      },
      optipng: { // png
        optimizationLevel: 7, // 选择0到7之间的优化级别
      },
      mozjpeg: {// jpeg
        quality: 20, // 压缩质量，范围从0(最差)到100(最佳)。
      },
      pngquant: {// png
        quality: [0.8, 0.9], // Min和max是介于0(最差)到1(最佳)之间的数字，类似于JPEG。达到或超过最高质量所需的最少量的颜色。如果转换导致质量低于最低质量，图像将不会被保存。
        speed: 4, // 压缩速度，1(强力)到11(最快)
      },
      svgo: { // svg压缩
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
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
