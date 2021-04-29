/*
 * @Description: 获取全局的 globalProperties
 * @version: 1.0
 * @Author: chendf
 * @Date: 2021-04-12 14:46:05
 * @LastEditors: chendf
 * @LastEditTime: 2021-04-22 16:11:04
 */

import { getCurrentInstance } from 'vue'
export default function (): Record<string, any> | undefined {
    return getCurrentInstance()?.appContext?.config?.globalProperties
}