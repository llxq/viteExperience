/*
 * @Description: 自定义指令
 * @version: 1.0
 * @Author: chendf
 * @Date: 2021-04-12 14:03:32
 * @LastEditors: chendf
 * @LastEditTime: 2021-04-22 15:38:44
 */

import { App, nextTick } from 'vue'
const GolobDirective = ((app: App) => {
    // v-focus 自动聚焦。对于非文本框聚焦使用 v-focus:1
    app.directive('focus', {
        mounted: async (el: HTMLElement, { arg }) => {
            // 为了防止数据未即使更新。
            await nextTick()
            // 对于非文本框聚焦（使用了 contenteditable ）的直接聚焦即可
            if (arg) el.focus?.()
            else {
                // elementplus的文本框。是嵌套了一个文本框。。
                el instanceof HTMLInputElement ? el.focus() : el.querySelector('input')?.focus()
            }
        }
    })

    // v-select 自动选中。对于非文本框请使用 v-select:1
    app.directive('select', {
        mounted: async (el: HTMLElement, { arg }) => {
            // 为了防止数据未即使更新。
            await nextTick()
            if (arg) el
            // elementplus的文本框。是嵌套了一个文本框。。
            el instanceof HTMLInputElement ? el.select() : el.querySelector('input')?.select()
        }
    })
})

export default GolobDirective