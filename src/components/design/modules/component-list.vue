<!--
 * @Description: 控件列表
 * @version: 1.0
 * @Author: chendf
 * @Date: 2021-04-11 12:36:41
 * @LastEditors: chendf
 * @LastEditTime: 2021-04-15 16:39:16
-->

<template>
    <div class="component-list-content">
        <div class="search">
            <el-input v-model="keywords" placeholder="请输入"></el-input>
        </div>
        <div class="component-list">
            <div class="title">控件列表</div>
            <div class="components">
                <div class="component-item" v-for="component in getComponentList(keywords)" :key="component.id">
                    <img class="component-img" :src="component.icon">
                    <span class="component-name">{{component.name}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, Component, computed, ComputedRef } from 'vue'
// 默认图标
import componentIcon from '@/assets/images/component.png'
type ComponentItem = {
    name: string,
    id: string | number,
    type: string,
    icon?: string | any
}
export default defineComponent({
    name: "component-list",
    setup () {
        const keywords: Ref<string> = ref('')
        const componentList: Ref<Array<ComponentItem>> = ref([])

        // 添加测试数据
        for (let i: number = 0; i < 50; i++) componentList.value.push({
            name: `控件-${i + 1}`,
            id: i,
            type: 'input',
            icon: componentIcon
        })

        // 计算展示控件列表
        const getComponentList:ComputedRef = computed(() => (keywords: string): Array<ComponentItem> => componentList.value.filter((f: ComponentItem) => f.name.includes(keywords)))
        return {
            keywords,
            componentList,
            getComponentList
        }
    }
})
</script>
<style lang="scss" scoped>
.component-list-content {
    @extend .wh100p;
    background-color: #fff;
    box-shadow: $design-shadow;
    @extend .flex-column;
    .search {
        width: 100%;
        padding: 10px;
    }
    .component-list {
        padding-top: 10px;
        overflow: auto;
        flex: 1;
        .title {
            padding-bottom: 10px;
            border-bottom: 1px solid #ccc;
        }
        .components {
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            .component- {
                &item {
                    @extend .flex-column;
                    width: 33%;
                    height: 70px;
                    text-align: center;
                    padding: 10px;
                    align-items: center;
                }
                &img {
                    width: 12px;
                    height: 12px;
                    margin-bottom: 15px;
                }
            }
        }
    }
}
</style>