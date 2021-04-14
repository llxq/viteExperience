/*
 * @Description: 加载全局控件
 * @version: 1.0
 * @Author: chendf
 * @Date: 2021-04-09 16:51:00
 * @LastEditors: chendf
 * @LastEditTime: 2021-04-09 17:40:39
 */
import { App, Component } from 'vue'

interface GolbComponentType {
    name: string,
    component: Component
}

const files: Record<string, {[key: string]: Component}> = import.meta.globEager("/src/components/golbComponents/*.vue")

const fileLists: Array<GolbComponentType> = []

Object.keys(files).forEach((c: string) => fileLists.push({
    name: files[c].default.name as string,
    component: files[c].default as Component
}))

export default (app: App): void => {
    fileLists.forEach((c: {[key: string]: any}) => app.component(c.name, c.component))
}