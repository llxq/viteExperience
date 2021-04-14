/*
 * @Description: 常用接口
 * @version: 1.0
 * @Author: chendf
 * @Date: 2021-04-08 15:57:45
 * @LastEditors: chendf
 * @LastEditTime: 2021-04-12 16:42:44
 */

import { AxiosResponse } from 'axios'
import {Ref, DefineComponent} from 'vue'

// 查询
export interface SearchParams {
    index: number,
    size: number,
    filters?: {[key: string]: any}
}

// axios返回类型
export type AxiosRes = Promise<AxiosResponse<any>> 

// obj
export interface Obj {
    [key: string]: any
}

// 表格列字段
export interface Columns {
    prop: string,
    label: string
}

// 分页参数
export interface Pagination {
    currentPage: number,
    pageSize: number,
    pageSizes: number[],
    total: number
}

// 自定义控件类型
export type CustComponentRef = Ref<Nullable<DefineComponent>>