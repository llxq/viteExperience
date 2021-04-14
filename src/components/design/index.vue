<!--
 * @Description: 设计页面
 * @version: 1.0
 * @Author: chendf
 * @Date: 2021-04-10 20:32:01
 * @LastEditors: chendf
 * @LastEditTime: 2021-04-12 16:59:19
-->
<template>
    <div class="senior-design-container">
        <!-- 头部 -->
        <el-header height="45px">
            <seniorDesignHender @save="changeName" @close="close"></seniorDesignHender>
        </el-header>
        <el-container>
            <!-- 左侧控件列表 -->
            <el-aside width="200px">
              <component-list></component-list>
            </el-aside>
            <el-container>
                <!-- 控件布局区域 -->
                <el-main>Main</el-main>
            </el-container>
            <!-- 右侧控件属性 -->
            <el-aside width="200px">Aside</el-aside>
        </el-container>
        <!-- 下面控件导航 -->
        <el-footer>Footer</el-footer>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import seniorDesignHender from '@/components/design/modules/header.vue'
import componentList from '@/components/design/modules/component-list.vue'
export default defineComponent({
    name: "index",
    components: {
        seniorDesignHender,
        componentList
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
    .el-header {
        line-height: 45px;
    }
}
 .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  </style>