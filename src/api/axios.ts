/*
 * @Description: axios基础配置
 * @version: 1.0
 * @Author: chendf
 * @Date: 2021-04-08 10:15:04
 * @LastEditors: chendf
 * @LastEditTime: 2021-04-09 10:51:40
 */

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import qs from 'qs'
import { ElMessage } from 'element-plus'
import tokenStorage from '@utils/tokenStorage/index'
// import router from '@router/index'

const vueAxios:AxiosInstance = axios.create()

// 处理登录失效
function disposeLogonFailure (): void {
    // TODO 登录失效要干啥呢。。。
}

// 处理失败情况

// 使用qs处理参数
vueAxios.defaults.paramsSerializer = (params: any): string => qs.stringify(params, {arrayFormat: 'brackets'})

// 拦截请求，加上token
vueAxios.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
    const token:string = tokenStorage.getToken
    const developerToken = tokenStorage.getDevloperToken
    // 如果token不存在，则代表当前登录失效了
    if (token && developerToken) {
        // 这个认证是给 test 系统用的
        config.headers.Authorization = `bearer ${token}`
        // 这个 token 是给 developer 用的
        config.headers.token = developerToken
    } else {
        // 登录失效
        disposeLogonFailure()
    }

    const ossUrl: string = sessionStorage.getItem('ossDownloadUrl') || ''
    config.withCredentials = !!((<string>config.url).includes(ossUrl)) // 请求阿里云时不配置携带cookie信息
    
    // 将url后面凭借的参数转码
    config.url = decodeURI(config.url as string)
    return config
}, (error: any): Promise<never> => Promise.reject(error))

// 拦截返回，判断返回状态（添加响应拦截器）
vueAxios.interceptors.response.use((config: AxiosResponse): AxiosResponse | Promise<never> => {
    // 处理接口成功了，但是有code返回的
    const data: any = config.data && typeof config.data !== 'string' ? JSON.stringify(config.data) : config.data
    if ([400, 401, 404, 500].some(s => data.includes(`code=${s}`))) {
        // 成功也有401的情况
        if (data.includes('code=401')) {
            // 登录失败处理
            disposeLogonFailure()
        }
        return Promise.reject(config.data)
    }
    return config
}, (error: any): Promise<never> => {
    // 先检查是否禁用拦截器，再检查错误请求的类型.
    if (!error.config.disableInterceptors) {
        if ([400, 401, 404, 500].includes(error.response.status)) {
            let message: any
            // 判断返回类型是否为文件流 (使用developer判断文件流方法。。。)
            if (error.response.data.type && JSON.stringify(error.response.data) === '{}') {
                const reader: FileReader = new FileReader()
                reader.addEventListener('loadend', function () {
                    ElMessage({
                        showClose: true,
                        message: JSON.parse(reader.result as string).message || '系统异常，请稍候重试！',
                        type: 'error'
                    })
                })
                reader.readAsText(error.response.data, 'utf-8')
              } else {
                if (error.response.status !== 500) {
                  message = error.response.data.message
                }
                if (error.response.status === 401) {
                  // 处理401
                  disposeLogonFailure()
                } else {
                  ElMessage({
                    showClose: true,
                    message: message || '系统异常，请稍候重试！',
                    type: 'error'
                  })
                }
              }
        }
    }
    // 返回 response 里的错误信息
    return Promise.reject(error)
})

export default vueAxios