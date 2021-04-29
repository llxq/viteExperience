<!--
 * @Description: 控件展示区域
 * @version: 1.0
 * @Author: chendf
 * @Date: 2021-04-15 15:24:15
 * @LastEditors: chendf
 * @LastEditTime: 2021-04-15 15:34:03
-->
<template>
    <div class="component-main"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: "component-main",
    setup () {}
})
</script>
<style lang="scss" scoped>
.component-main {
    @extend .wh100p;
    background-color: #fff;
    box-shadow: $design-shadow;
}
</style>