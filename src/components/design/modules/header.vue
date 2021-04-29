<!--
 * @Description: 设计页面头部
 * @version: 1.0
 * @Author: chendf
 * @Date: 2021-04-12 10:59:14
 * @LastEditors: chendf
 * @LastEditTime: 2021-04-12 14:57:18
-->
<template>
    <div class="senior-design-header flex-between">
        <el-breadcrumb separator="">
            <el-breadcrumb-item>高级页面设计</el-breadcrumb-item>
            <el-breadcrumb-item>
                <i class="el-icon-arrow-right"></i>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
                <div v-if="!show" class="name-show">
                    <span>{{ name ?? '未命名' }}</span>
                    <span class="el-icon-edit-outline" @click="openEditInput"></span>
                </div>
                <div v-else class="name-edit">
                    <el-input
                        v-focus
                        v-select
                        v-model="editName"
                        placeholder="请输入"
                        clearable
                        @keydown.esc="show = !show"
                        @keydown.enter="saveName"></el-input>
                </div>
            </el-breadcrumb-item>
        </el-breadcrumb>
        <div class="operation">
            <el-button class="default-save-button" @click="close">关闭</el-button>
            <el-button class="default-save-button" type="primary">保存</el-button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue'
import proxy from '@mixins/useGetGlobalProperties'
export default defineComponent({
    name: "header",
    props: {
        // 表单名字
        name: {
            type: String
        }
    },
    setup (props, {emit}) {
        const globProp: Record<string, any> | undefined = proxy()
        const editName: Ref<string> = ref(props.name ?? '')
        const show: Ref<boolean> = ref(false)
        
        // 打开输入名字框
        const openEditInput = (): void => {
            editName.value = props.name ?? ''
            show.value = true
        }
        
        // 保存名字
        const saveName = ():void => {
            if (editName.value === '') return globProp?.$message('页面名称不能为空')
            emit('save', editName.value)
            show.value = false
        }

        // 关闭
        const close = (): void => emit('close')

        return {
            editName,
            show,
            openEditInput,
            saveName,
            close
        }
    }
})
</script>
<style lang="scss" scoped>
    .senior-design-header {
        height: 100%;
        .el-breadcrumb {
            width: 50%;
            height: 100%;
            line-height: 45px;
            #{$deep} {
                .el-breadcrumb__separator {
                    margin: 0 6px;
                }
                .el-breadcrumb__inner {
                    color: #606266;
                    font-size: 15px;
                    font-weight: 700;
                }
                .el-icon-edit-outline {
                    vertical-align: middle;
                    margin-left: 10px;
                    color: #409eff;
                    cursor: pointer;
                }
                .name-edit {
                    width: 136px;
                }
            }
        }
        .operation {
            .el-button {
                margin-right: 15px;
                margin-left: 0;
            }
        }
    }
</style>