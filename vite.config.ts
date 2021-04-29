/*
 * @Description: vite基础配置
 * @version: 1.0
 * @Author: chendf
 * @Date: 2021-04-07 11:36:15
 * @LastEditors: chendf
 * @LastEditTime: 2021-04-23 18:53:08
 */
// https://vitejs.dev/config/
// 中文文档：https://www.pipipi.net/vite/
import type { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// dotenv 是一个零依赖的模块，它能将环境变量中的变量从 .env 文件加载到 process.env 中
// @ts-ignore
import dotenv from 'dotenv'
// 因为vite本身已经按需导入了组件库，所以只有样式是不按需导入的，所以只需按需导入样式即可。
import styleImport from 'vite-plugin-style-import'

const path = require('path')
const fs = require('fs')

const resolve: Function = (src: string): any => {
  return path.join(__dirname, src)
}

try {
  // 根据环境变量加载环境变量文件
  const file = dotenv.parse(fs.readFileSync(`.env.${process.env.NODE_ENV}`))
  // 根据获取的key给对应的环境变量赋值
  for (const key in (file as object)) {
    process.env[key] = file[key]
  }
} catch (e) {
  console.error(e)
}

const config: UserConfig = {
  // 生产环境打包路径。就是webpack的assetsPath
  base: '/',
  build: {
    // 打包路径
    outDir: 'dist'
  },
  // 为window增加全局变量
  define: {
    'redcatApp': {}
  },
  plugins: [
    vue(),
    // vite-plugin-style-import
    // 按需导入element-plus样式文件
    styleImport({
      libs: [{
        libraryName: 'element-plus',
        resolveStyle: (name: string) => {
          // 因为控件名字是带上了 el- 开头的，所以需要从 第三个字符串开始截取
          const componentName: string = name.slice(3)
          return `element-plus/packages/theme-chalk/src/${componentName}.scss`;
        },
        // 保证文件是否存在，文件不存在导入不会报错
        ensureStyleFile: true,
        esModule: true
      }]
    })
  ],
  resolve: {
    // 配置别名
    alias: {
      '@': resolve('./src'),
      '@components': resolve('./src/components'),
      '@utils': resolve('./src/utils'),
      '@router': resolve('./src/router'),
      '@api': resolve('./src/api'),
      '@interface': resolve('./src/interface/index.ts'),
      '@http': resolve('./src/api/index.ts'),
      '@mixins': resolve('./src/mixins')
    }
  },
  // 一个典型的用例对 optimizeDeps.include 或 optimizeDeps.exclude 是当你有一个不能直接在源码中发现的导入时。例如，导入可能是插件转换的结果。这意味着 Vite 无法在初始扫描时发现导入 —— 它只能在浏览器请求文件并进行转换后发现它。这将导致服务器在启动后立即重新打包。
  // 这样 vite 在执行 runOptimize 的时候中会使用 roolup 对 lodash 包重新编译，将编译成符合 esm 模块规范的新的包放入 node_modules 下的 .vite_opt_cache 中，然后配合 resolver 对 lodash 的导入进行处理：使用编译后的包内容代替原来 lodash 的包的内容，这样就解决了 vite 中不能使用 cjs 包的问题，这部分代码在  depOptimizer.ts 里。
  optimizeDeps: {
    include: ['lodash', 'qs', 'element-plus/lib/locale/lang/zh-cn']
  },
  // server服务
  server: {
    // 默认是 3000 端口
    port: Number(process.env.VITE_APP_PORT) || 3000,
    // 不默认打开浏览器
    open: false,
    proxy: {
      '^/.*-api': {
        target: process.env.VITE_APP_PROXY_URL,
        changeOrigin: true
      },
      '/developer-service': {
        target: process.env.VITE_APP_PROXY_DEVLOPER_URL,
        secure: false,
        changeOrigin: true,
      },
    }
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        // 引入 index.scss 这样就可以在全局中使用 index.scss中预定义的变量了
        // ！！注意 一定要加上后面的 ; 
        additionalData: '@import "./src/assets/scss/index.scss";'
      }
    }
  }
}


export default config
