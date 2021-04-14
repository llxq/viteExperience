/*
 * @Description: 对token的操作
 * @version: 1.0
 * @Author: chendf
 * @Date: 2021-04-08 11:09:12
 * @LastEditors: chendf
 * @LastEditTime: 2021-04-09 11:50:59
 */
import _ from 'lodash'
import { ElMessageBox } from 'element-plus'
import router from '@router/index'
import { unref } from 'vue'
import { RouteParams } from 'vue-router'

class TokenStorage {
    // test 系统 token
    private token!: string
    // developer 系统 token
    private developerToken!: string
    // 租户id
    private tenantId!: string
    // 获取路由参数
    public get params (): RouteParams {
        return unref(router.currentRoute)?.params
    }

    public confirm: any = _.throttle(() => {
        return ElMessageBox.alert(
            '当前登录会话已过期，请重新登录。', '提示', {
                confirmButtonText: '重新登录',
                type: 'warning'
            }
        )
    }, 3000, { trailing: false })

    // 这个拿到的是 test 系统的 token
    public get getToken (): string {
        if (!this.token) {
            this.token = this.params.token as string
        }
        return this.token
    }

    // 这个拿到的是 developer 的 token
    public get getDevloperToken (): string {
        if (!this.developerToken) {
            this.developerToken = this.params.developerToken as string
        }
        return this.developerToken
    }

    // 获取 tenantId
    public get getTenantId (): string {
        if (!this.tenantId) {
            // 去路由上找tenantId
            this.tenantId = this.params.tenantId as string
        }
        return this.tenantId
    }
}

export default new TokenStorage()