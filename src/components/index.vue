<!--
 * @Description: 高级设计页面主页
 * @version: 1.0
 * @Author: chendf
 * @Date: 2021-04-08 13:41:59
 * @LastEditors: chendf
 * @LastEditTime: 2021-04-22 16:28:21
-->
<template>
    <!-- 高级页面设计列表 -->
    <seniorDesignList ref="seniorDesingListRef" v-show="!designData.visible" @createOrUpdate="createOrUpdate"></seniorDesignList>
    <!-- 设计页面 -->
    <seniorDesign
        v-show="designData.visible"
        @close="closeDesign">
    </seniorDesign>
</template>

<script lang='ts'>
import { Ref, ref, unref, onMounted, onBeforeMount, defineComponent, reactive } from 'vue'
import tokenStorage from '@utils/tokenStorage/index'
import $http from '@http'
import seniorDesignList from '@components/seniorDesignList/index.vue'
import seniorDesign from '@components/design/index.vue'
import { Obj, CustComponentRef } from '@interface'
import UUID from '@utils/uuid/index'

interface DesignData {
    visible: boolean,
    // TODO 类型记得修改
    data: any
}

export default defineComponent({
    name: 'index',
    components: {
        seniorDesignList,
        seniorDesign
    },
    setup () {
        // 拿到 tenantId
        const tenantId: Ref<string> = ref(tokenStorage.getTenantId)
        // 拿到 token
        const token: Ref<string> = ref(tokenStorage.getToken)
        // 拿到 developerToken
        const developerToken: Ref<string> = ref(tokenStorage.getDevloperToken)
        // 获取的应用信息
        const application:Ref<Obj> = ref({})
        // 用户信息
        const userInfo:Ref<Obj> = ref({})
        // 是否展示
        const designData: DesignData = reactive({
            visible: true,
            data: {}
        })
        // 列表ref
        const seniorDesingListRef: CustComponentRef = ref(null)

        onBeforeMount(async () => {
            // 获取应用信息
            await $http.getApplicationByApplicationId(unref(tenantId)).then((res: any) => {
                application.value = res?.data?.items[0] ?? {}
            })
            // 获取用户信息
            await $http.getUserInfo().then((res: any) => {
                userInfo.value = res?.data ?? {}
            })
        })
        onMounted(() => {
            // 页面加载完成
        })
        
        // 新建或者编辑 TODO 类型未定 所以暂时为 any
        const createOrUpdate = (params?: any): void => {
            designData.visible = true
        }

        // 关闭设计页面
        const closeDesign = (): void => {
            designData.visible = false
            seniorDesingListRef.value?.getTableData?.()
        }
        
        return {
            tenantId,
            token,
            application,
            developerToken,
            userInfo,
            designData,
            seniorDesingListRef,
            createOrUpdate,
            closeDesign
        }
    }
})
</script>
<style lang='scss' scoped></style>