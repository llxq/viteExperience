<!--
 * @Description: 高级页面设计列表
 * @version: 1.0
 * @Author: chendf
 * @Date: 2021-04-09 13:53:37
 * @LastEditors: chendf
 * @LastEditTime: 2021-04-12 14:12:24
-->
<template>
    <div class="senior-design-list-content">
        <div class="operation">
            <el-row :gutter="24">
                <el-col class="search-senior-page" :span="12">
                    <el-input class="default-search-input" v-model="keyWord" placeholder="请输入页面名称"></el-input>
                    <el-button class="default-search-button">查询</el-button>
                </el-col>
                <el-col class="create-senior-page" :span="12">
                    <el-button type="primary" @click="create">新建</el-button>
                </el-col>
            </el-row>
        </div>
        <div class="table-list default-table-content">
            <!-- 表格 -->
            <el-table :data="tableData">
                <el-table-column
                    style="width: 100%"
                    v-for="col in columns"
                    :key="col.prop"
                    :prop="col.prop"
                    :label="col.label"
                    align="center">
                </el-table-column>
                <el-table-column label="操作" align="center" width="180">
                    <template #default="scope">
                        <el-button type="text" @click="editRow(scope.row)">编辑</el-button>
                        <el-button type="text" @click="editRow(scope.row)">预览</el-button>
                        <el-dropdown class="preview-button">
                            <i class="fa fa-chevron-circle-down"></i>
                            <template #dropdown>
                                <el-dropdown-item>
                                    <el-button type="text">删除</el-button>
                                </el-dropdown-item>
                            </template>
                        </el-dropdown>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页 -->
            <redcat-pagination
                @size-change="val => handleSizeChange(val, getTableData)"
                @current-change="val => handleCurrentChange(val, getTableData)"
                layout="total, sizes, prev, pager, next, jumper"
                :pagination="pagination">
            </redcat-pagination>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Ref, ref, toRefs } from '@vue/reactivity'
import { Columns } from '@interface'
import usePagination from '@mixins/usePagination'

// 表格数据接口
interface TableData {
    // 页面名称
    name: string,
    // 创建人
    createdBy: string,
    // 创建时间
    createdDate: string,
    // 更新人
    lastModifiedBy: string,
    // 更新时间
    lastModifiedDate: string,
    // id
    id: string
}

// 测试数据
const testData = {name: '名字', createdBy: '创建人', createdDate: '2021-03-16 11:23:17', lastModifiedBy: '修改人', lastModifiedDate: '2021-03-16 11:23:17', id: '123456'}

export default defineComponent({
    name: "senior-design-list",
    setup (props, {emit}) {
        const pagination: object = usePagination()
        let keyWord: Ref<string> = ref('')
        const columns: Ref<Columns[]> = ref([        
            {prop: 'name', label: '名称'},
            {prop: 'createdBy', label: '创建人'},
            {prop: 'createdDate', label: '创建时间'},
            {prop: 'lastModifiedBy', label: '更新人'},
            {prop: 'lastModifiedDate', label: '更新时间'}
        ])
        let tableData: Ref<TableData[]> = ref([])
        // 查询
        function getTableData (): void {
            // TODO 加一个测试数据
            tableData.value.push(testData)
        }
        // 新建
        function create (): void {
            emit('createOrUpdate')
        }
        getTableData()
        return {
            ...toRefs(pagination),
            keyWord,
            columns,
            tableData,
            getTableData,
            create
        }
    }  
})
</script>
<style lang="scss" scoped>
    $deep: '/deep/';
    .senior-design-list-content {
        padding-top: 8px;
        height: 100%;
        @extend .flex-column;
        .operation {
            padding: 0 10px 10px 20px;
            width: 100%;
            height: 36px;
            box-sizing: border-box;
            flex-shrink: 0;
            .search-senior-page {
                .el-button {
                    margin-left: 20px;
                }
            }
            .create-senior-page {
                text-align: right;
            }
            .el-row {
                width: 100%;
            }
        }
        .table-list {
            flex: 1;
        }
    }
</style>
