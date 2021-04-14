<!--
 * @Description: 
 * @version: 1.0
 * @Author: chendf
 * @Date: 2021-04-07 11:36:15
 * @LastEditors: chendf
 * @LastEditTime: 2021-04-09 15:14:54
-->
<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({ name: 'App' })
</script>

<style lang="scss">
// 下面的样式直接从 developer 复制过来的
  * {
    // 与 element-ui 表格冲突
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: 14px;
  }

  html,
  body,
  #app {
    height: 100%;
    background: #fff;
  }
  /* 滚动条统一样式 */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: transparent;
  }

  /*定义滚动条轨道 内阴影+圆角*/
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: transparent;
  }

  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #e2e2e2;
  }

  /*滑块效果*/
  ::-webkit-scrollbar-thumb:hover {
    border-radius: 5px;
    background: #c8c8c8;
  }
  .has-background {
    ::-webkit-scrollbar-thumb{
      background-color: #c8c8c8;
    }
  }
  #app {
    min-height: 380px;
    font-family: "PingFang SC","Helvetica Neue",Helvetica,"Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #181818;
    /*IE滚动条颜色*/
    scrollbar-face-color: #c8c8c8;
    /*滚动条颜色*/
    scrollbar-highlight-color: #fff;
    scrollbar-3dlight-color: #fff;
    scrollbar-darkshadow-color: #c8c8c8;
    scrollbar-shadow-color: #fff;
    /*滑块边色*/
    scrollbar-arrow-color: #c8c8c8;
    /*箭头颜色*/
    scrollbar-track-color: #fff;

    .tooltip {
      color: #c2c3c4;

      &:hover {
        color: #409EFF;
      }
    }
    .el-input.is-disabled .el-input__inner {
      cursor: pointer;
    }
  }
  .el-dialog {
    border-radius: 4px;
    overflow: hidden;

    .el-dialog__header {
      background: #edeeee;
      padding: 10px 20px;

      .el-dialog__title {
        font-size: 15px;
      }

      .el-dialog__headerbtn {
        top: 10px;
      }

    }
  }
  .el-dialog__wrapper {
    overflow: hidden;
  }
</style>