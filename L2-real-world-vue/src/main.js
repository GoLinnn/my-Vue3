import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'nprogress/nprogress.css'
// 注册注入。全局
const GStore = reactive({ flashMessage: '' })
// use注册插件
createApp(App).use(store).use(router).provide('GStore', GStore).mount('#app')
