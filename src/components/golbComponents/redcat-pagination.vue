<!--
 * @Description: 。。。
 * @version: 1.0
 * @Author: chendf
 * @Date: 2021-04-09 16:49:25
 * @LastEditors: chendf
 * @LastEditTime: 2021-04-10 19:58:01
-->
<template>
    <!-- 分页 -->
    <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagination.currentPage"
        :page-sizes="pagination.pageSizes"
        :page-size="pagination.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pagination.total">
    </el-pagination>
</template>

<script lang="ts">
import { defineComponent, PropType} from 'vue'
import { Pagination } from '@interface'

export default defineComponent({
    name: 'redcat-pagination',
    props: {
        pagination: {
            type: Object as PropType<Pagination>,
            required: true
        }
    },
    setup (props, { emit }) {
        function handleCurrentChange (val: number): void {
            emit('handleCurrentChange', val)
        }

        function handleSizeChange (val: number): void {
            emit('handleSizeChange', val)
        }

        return {
            handleCurrentChange,
            handleSizeChange
        }
    }  
})
</script>
<style lang='scss' scoped></style>