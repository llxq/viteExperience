/*
 * @Description: 路由配置
 * @version: 1.0
 * @Author: chendf
 * @Date: 2021-04-07 14:14:41
 * @LastEditors: chendf
 * @LastEditTime: 2021-04-09 11:02:29
 */

import { createRouter, createWebHistory, Router, RouteRecordRaw, RouteLocationNormalized } from 'vue-router'

// 页面的路由
const routes: RouteRecordRaw[] = [
    {
        // developer 的 租户id 和 token
        path: '/:tenantId/:token/:developerToken',
        name: 'index',
        component: () => import('@components/index.vue'),
        meta: {
            title: '高级页面设计'
        }
    },
    // 全部都不匹配的话，返回404页面
    // 路由匹配从上到下，如果都不匹配的话返回404
    {
        path: '/:catchAll(.*)',
        name: 'notFound',
        component: () => import('@components/notFind/404.vue'),
        meta: {
            title: '出错啦'
        }
    }
]

// 新版本的 vue-router 需要使用 createRouter 来创建路由
const router: Router = createRouter({
    // 指定路由的模式，此处使用的是 history
    history: createWebHistory(),
    // 路由地址
    routes
})

// 增加title
router.beforeEach((to: RouteLocationNormalized) => {
    const title: string | unknown = to.meta.title
    if (title) document.title = title as string
})

export default router