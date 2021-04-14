/*
 * @Description: 自定义指令
 * @version: 1.0
 * @Author: chendf
 * @Date: 2021-04-12 14:03:32
 * @LastEditors: chendf
 * @LastEditTime: 2021-04-12 14:27:09
 */

import { App, nextTick } from 'vue'
const GolobDirective = ((app: App) => {
    // v-focus 自动聚焦
    app.directive('focus', {
        mounted: async (el: HTMLElement) => {
            // 为了防止数据未即使更新。
            await nextTick()
            // elementplus的文本框。是嵌套了一个文本框。。
            el instanceof HTMLInputElement ? el.focus() : el.querySelector('input')?.focus()
        }
    })

    // v-input-select 自动选中 (目前支持的是文本框内容自动选中)
    app.directive('input-select', {
        mounted: async (el: HTMLElement) => {
            // 为了防止数据未即使更新。
            await nextTick()
            // elementplus的文本框。是嵌套了一个文本框。。
            el instanceof HTMLInputElement ? el.select() : el.querySelector('input')?.select()
        }
    })
})

export default GolobDirective