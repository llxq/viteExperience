<!--
 * @Description: 控件属性
 * @version: 1.0
 * @Author: chendf
 * @Date: 2021-04-11 12:39:44
 * @LastEditors: chendf
 * @LastEditTime: 2021-04-15 15:38:47
-->
<template>
    <div class="component-attrs-container"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: "component-attrs",
    setup () {}
})
</script>
<style lang="scss" scoped>
.component-attrs-container {
    @extend .wh100p;
    background-color: #fff;
}
</style>