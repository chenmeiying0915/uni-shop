
// #ifndef VUE3
import Vue from 'vue'
import App from './App'

//导入网络请求的包
import {$http} from '@escook/request-miniprogram'

//把网络请求的包'@escook/request-miniprogram'中的$http挂载到uni.$http上，
//相当于自定义一个属性
//之后就可以使用uni.$http来发起网络请求了
uni.$http = $http

//配置请求的【根路径】
//有了根路径，才可以直接写下面这个地址
//const res = await uni.$http.get('/api/public/v1/home/swiperdata')
$http.baseUrl = 'https://www.uinav.com'
//配置请求拦截器
$http.beforeRequest = function(options){
	uni.showLoading({
		title:'数据加载中……'
	})
}

// 配置响应拦截器：请求完成之后做一些事情
$http.afterRequest = function () {
	//用uni这个对象去调用hideLoading()这个方法
	uni.hideLoading()
}

// 封装的展示消息提示的方法
uni.$showMsg = function (title = '数据加载失败！', duration = 1500) {
	uni.showToast({
		title,
		duration,
		icon: 'none',
	})
}

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif