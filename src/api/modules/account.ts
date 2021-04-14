/*
 * @Description: 获取用户信息
 * @version: 1.0
 * @Author: chendf
 * @Date: 2021-04-08 16:07:59
 * @LastEditors: chendf
 * @LastEditTime: 2021-04-08 16:36:21
 */

import axios from '@api/axios'
import { AxiosRes } from '@interface'

const baseUrl: string = '/developer-service/api'

// 根据 tenantId 获取token和key
export function getKeyAndToken(tenantId: string): AxiosRes {
  return axios.get(`${baseUrl}/application/simulateLogin?applicationId=${tenantId}`)
}

// 获取用户信息
export function getUserInfo(): AxiosRes {
  return axios.get('/auth-api/oauth/currentUserInfo')
}
