import Vue from 'vue'
import Taro from '@tarojs/taro'

import './app.less'

import "./colorui/main.css";
import "./colorui/icon.css";

import basics from "./pages/basics/home.vue";
import components from "./pages/component/home.vue";
import plugin from "./pages/plugin/home.vue";
import cuCustom from './colorui/components/cu-custom.vue'

Vue.component('basics',basics)
Vue.component('components',components)
Vue.component('plugin',plugin)
Vue.component('cu-custom',cuCustom)

// Vue.config.productionTip = false

const App = {
  mounted () {
    if (process.env.TARO_ENV === 'weapp') {
      // Taro.cloud.init()
			Taro.getSystemInfo({
				success: function(e) {
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					};
					// #endif

					// // #ifdef MP-WEIXIN || MP-QQ
					// Vue.prototype.StatusBar = e.statusBarHeight;
					// let capsule = wx.getMenuButtonBoundingClientRect();
					// if (capsule) {
					// 	Vue.prototype.Custom = capsule;
					// 	// Vue.prototype.capsuleSafe = uni.rpx2px(750) - capsule.left + uni.rpx2px(750) - capsule.right;
					// 	Vue.prototype.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
					// } else {
					// 	Vue.prototype.CustomBar = e.statusBarHeight + 50;
					// }
					// // #endif


					// // #ifdef MP-ALIPAY
					// Vue.prototype.StatusBar = e.statusBarHeight;
					// Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// // #endif
				}
			})

			Vue.prototype.ColorList = [{
					title: '嫣红',
					name: 'red',
					color: '#e54d42'
				},
				{
					title: '桔橙',
					name: 'orange',
					color: '#f37b1d'
				},
				{
					title: '明黄',
					name: 'yellow',
					color: '#fbbd08'
				},
				{
					title: '橄榄',
					name: 'olive',
					color: '#8dc63f'
				},
				{
					title: '森绿',
					name: 'green',
					color: '#39b54a'
				},
				{
					title: '天青',
					name: 'cyan',
					color: '#1cbbb4'
				},
				{
					title: '海蓝',
					name: 'blue',
					color: '#0081ff'
				},
				{
					title: '姹紫',
					name: 'purple',
					color: '#6739b6'
				},
				{
					title: '木槿',
					name: 'mauve',
					color: '#9c26b0'
				},
				{
					title: '桃粉',
					name: 'pink',
					color: '#e03997'
				},
				{
					title: '棕褐',
					name: 'brown',
					color: '#a5673f'
				},
				{
					title: '玄灰',
					name: 'grey',
					color: '#8799a3'
				},
				{
					title: '草灰',
					name: 'gray',
					color: '#aaaaaa'
				},
				{
					title: '墨黑',
					name: 'black',
					color: '#333333'
				},
				{
					title: '雅白',
					name: 'white',
					color: '#ffffff'
				},
			]
    }
  },
  onShow (options) {
    // console.log('App Show')
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
}

export default App
