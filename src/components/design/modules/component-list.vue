<!--
 * @Description: 控件列表
 * @version: 1.0
 * @Author: chendf
 * @Date: 2021-04-11 12:36:41
 * @LastEditors: chendf
 * @LastEditTime: 2021-04-12 16:23:25
-->

<template>
    <div class="component-list-content">
        <div class="search">
            <el-input v-model="keywords" placeholder="请输入"></el-input>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
export default defineComponent({
    name: "component-list",
    setup () {
        const keywords: Ref<string> = ref('')
        return {
            keywords
        }
    }
})
</script>
<style lang="scss" scoped></style>