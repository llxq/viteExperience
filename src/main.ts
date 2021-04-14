/*
 * @Description: 配置
 * @version: 1.0
 * @Author: chendf
 * @Date: 2021-04-07 11:36:15
 * @LastEditors: chendf
 * @LastEditTime: 2021-04-12 16:42:12
 */
import { createApp, App } from 'vue'
import AppVue from './App.vue'
import router from './router/index'
// 导入axios
import axios from '@/api/axios'
// 导入接口
import $http from '@/api/index'

// 配置element-plus按需引入
import elementPlusComponent from './elementPlus/index'
// element-plus message
// element-plus 汉化。element-plus默认是英文
import { ElMessage, locale } from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'
locale(lang)

// 导入 font-awesome
import 'font-awesome/css/font-awesome.min.css'

// 增加全局控件
import golbComponents from '@components/golbComponents/index'

// 导入全局自定义指令
import GolobDirective from './directive/index'

const app: App<Element> = createApp(AppVue)

// 挂载 element-plus 控件
elementPlusComponent(app)

// 挂载全局控件
golbComponents(app)

// 注册全局自定义指令
GolobDirective(app)

app.use(router)


// 挂载全局变量
app.config.globalProperties.$axios = axios
app.config.globalProperties.$http = $http
app.config.globalProperties.$message = ElMessage
app.config.globalProperties.$ELEMENT = {
    size: 'mini',
    zIndex: 2021,
    locale: lang
}


app.mount('#app')
