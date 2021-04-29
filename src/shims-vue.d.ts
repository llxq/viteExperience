/**
 * shims-vue.d.ts作用
 * 为了 ts 做的适配定义文件，因为.vue文件不是一个常规的文件类型，ts 不能识别，加这一段是告诉 ts vue 文件是什么类型
 * 文档：https://www.tslang.cn/docs/handbook/declaration-files/introduction.html
 */
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 增加类型 (为了处理类型可能为null的，统一定义)
// Nullable<string> = string | null
declare type Nullable<T> = T | null;

// 定义类型
declare interface Window {
    msCrypto: Crypto,
    new(): Crypto
}
