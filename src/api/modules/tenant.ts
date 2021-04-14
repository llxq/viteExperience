/*
 * @Description: 租户相关接口
 * @version: 1.0
 * @Author: chendf
 * @Date: 2021-04-08 15:42:48
 * @LastEditors: chendf
 * @LastEditTime: 2021-04-08 17:36:28
 */

import axios from '@api/axios'
import { SearchParams, AxiosRes } from '@interface'

const baseUrl: string = '/developer-service/api'

// 根据 tenantId 获取应用信息
export function getApplicationByApplicationId(tenantId: string): AxiosRes {
  const params: SearchParams = {
    index: 1,
    size: -1,
    filters: {
      applicationId: tenantId
    }
  }
  return axios.get(`${baseUrl}/application/findApplications`, { params })
}
