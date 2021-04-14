/*
 * @Description: 表格分页所需要的方法与属性
 * @version: 1.0
 * @Author: chendf
 * @Date: 2021-04-09 16:26:29
 * @LastEditors: chendf
 * @LastEditTime: 2021-04-09 17:07:34
 */

import { reactive } from 'vue'
import { Pagination } from '@interface'

export default function (): object {
    let pagination: Pagination = reactive({
        currentPage: 1,
        pageSize: 10,
        pageSizes: [10, 20, 30, 50, 100],
        total: 0
    })
    // FIXIM 使用回调是为了当函数触发的时候能调用父组件的查询。有待优化，但是我想不到了。。
    // pageSize 改变时会触发
    function handleSizeChange (pageSize: number, callback: Function): void {
        pagination.pageSize = pageSize
        callback()
    }
    // currentPage 改变时会触发
    function handleCurrentChange (currentPage: number, callback: Function): void {
        pagination.currentPage = currentPage
        callback()
    }
    return {
        pagination,
        handleSizeChange,
        handleCurrentChange
    }
}
