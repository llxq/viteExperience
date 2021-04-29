/*
 * @Description:
 * @version: 1.0
 * @Author: chendf
 * @Date: 2021-04-08 15:44:03
 * @LastEditors: chendf
 * @LastEditTime: 2021-04-22 16:33:33
 */

// 租户信息
import * as tenant from './modules/tenant'
// 用户信息
import * as account from './modules/account'

interface HttpType {
  [key: string]: Function
}

const $http: HttpType = {
  ...tenant,
  ...account
}

export default $http
