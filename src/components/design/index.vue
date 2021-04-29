<!--
 * @Description: 设计页面
 * @version: 1.0
 * @Author: chendf
 * @Date: 2021-04-10 20:32:01
 * @LastEditors: chendf
 * @LastEditTime: 2021-04-15 15:43:17
-->
<template>
    <div class="senior-design-container">
        <!-- 头部 -->
        <el-header height="45px">
            <seniorDesignHender @save="changeName" @close="close"></seniorDesignHender>
        </el-header>
        <el-container>
            <!-- 左侧控件列表 -->
            <el-aside width="250px">
              <component-list></component-list>
            </el-aside>
            <el-container>
                <!-- 控件布局区域 -->
                <el-main>
                  <component-main></component-main>
                </el-main>
            </el-container>
            <!-- 右侧控件属性 -->
            <el-aside width="250px">
              <component-attrs></component-attrs>
            </el-aside>
        </el-container>
        <!-- 下面控件导航 -->
        <el-footer height="45px">
          <component-nav></component-nav>
        </el-footer>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import seniorDesignHender from '@/components/design/modules/header.vue'
import componentList from '@components/design/modules/component-list.vue'
import componentMain from '@components/design/modules/component.vue'
import componentAttrs from '@components/design/modules/component-attrs.vue'
import componentNav from '@components/design/modules/component-nav.vue'
export default defineComponent({
    name: "index",
    components: {
        seniorDesignHender,
        componentList,
        componentMain,
        componentAttrs,
        componentNav
    },
    setup (props, {emit}) {
        // 修改页面名字
        const changeName = (name: string): void => {
        }

        // 关闭设计页面
        const close = (): void => emit('close')

        return {
            changeName,
            close
        }
    }
})
</script>
<style lang="scss" scoped>
.senior-design-container {
    @extend .wh100p;
    @extend .flex-column;
    & > .el-header {
        line-height: 45px;
    }
    & > .el-container {
      overflow: hidden;
      background-color: $design-bgc;
      padding: 8px;
      .el-aside {
        background-color: $design-bgc;
        padding-right: 8px;
        @extend .wh100p;
      }
      .el-aside:last-child {
        padding-left: 8px;
        padding-right: 0;
      }
    }
}
  </style>