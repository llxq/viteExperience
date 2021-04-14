# redcat-app

> redcat design platform web application

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:3001
npm run dev

# build for production with minification
npm run build
```

For a detailed explanation on how things work, check out the [guide](https://vitejs.dev/) and [docs for vue3](https://v3.vuejs.org/api/).

## Plugin Usage

- axios:  基于 promise 的 HTTP 库 [http://www.axios-js.com/]
- lodash: JavaScript 实用工具库 [https://www.lodashjs.com/]
- typsScript: [文档](https://www.tslang.cn/docs/handbook/declaration-files/introduction.html)
- vue3：[文档](https://v3.vuejs.org/api/)
- vite：[文档](https://vitejs.dev/)
- element-plus: [文档](https://element-plus.gitee.io/#/zh-CN)

## Setup 代理配置

```javascript
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
```

## 环境变量配置

```js
    // test系统代理配置
    VITE_APP_PROXY_URL = https://8854.rc-dev-test.ywsoftware.cn:9443
    // developer代理配置
    VITE_APP_PROXY_DEVLOPER_URL = https://developer.rc-dev-test.ywsoftware.cn:9443
    // 端口配置
    VITE_APP_PORT = 3001
```
