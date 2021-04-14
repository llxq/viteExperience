/*
 * @Description: 按需引入element-plus
 * @version: 1.0
 * @Author: chendf
 * @Date: 2021-04-08 10:28:47
 * @LastEditors: chendf
 * @LastEditTime: 2021-04-12 14:13:10
 */

// 导入element-plus样式
import 'element-plus/packages/theme-chalk/src/base.scss'
import { App } from 'vue'

// ??? 想不明白为啥同一个组件下的子组件还要手动引入。。比如 ELTable 与 ELTableColumn。
import {
    ElButton,
    ElInput,
    ElRow,
    ElCol,
    ElTable,
    ElTableColumn,
    ElDropdown,
    ElDropdownItem,
    ElIcon,
    ElPagination,
    ElContainer,
    ElHeader,
    ElMain,
    ElFooter,
    ElAside,
    ElBreadcrumb,
    ElBreadcrumbItem
 } from 'element-plus'
const components = [
    ElButton,
    ElInput,
    ElRow,
    ElCol,
    ElTable,
    ElTableColumn,
    ElDropdown,
    ElDropdownItem,
    ElIcon,
    ElPagination,
    ElContainer,
    ElHeader,
    ElMain,
    ElFooter,
    ElAside,
    ElBreadcrumb,
    ElBreadcrumbItem
]
export default (app: App): void => {
    // 挂载按需导入的控件
    components.forEach((component: any) => app.component(component.name, component))
}