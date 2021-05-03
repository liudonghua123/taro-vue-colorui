<template>
	<view class="page">
		<scroll-view scroll-y>
			<cu-custom bgImage="https://image.weilanwl.com/color2.0/plugin/cjkz2329.jpg">
				<block slot="content">
					<image src="../../static/cjkz.png" mode="aspectFill" style="width: 240rpx;height: 60rpx;"></image>
				</block>
			</cu-custom>
			<view class="cu-card">
				<view class="cu-item bg-img shadow-blur" :style="[{backgroundImage:'url('+item.img+')'}]" @tap="toChild" :data-url="item.url"
				 v-for="(item,index) in list" :key="index">
					<view class="cardTitle">
						{{item.title}}
					</view>
				</view>
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "plugin",
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				list: [{
						title: '索引列表',
						img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
						url: '../plugin/indexes'
					},
					{
						title: '微动画',
						img: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
						url: '../plugin/animation'
					},
					{
						title: '全屏抽屉',
						img: 'https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg',
						url: '../plugin/drawer'
					},
					{
						title: '垂直导航',
						img: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
						url: '../plugin/verticalnav'
					}
				]
			};
		},
		methods: {
			toChild(e) {
				wx.navigateTo({
					url: e.currentTarget.dataset.url
				})
			},
		},
	}
</script>

<style>
	.page {
		height: 100vh;
	}

	.cardTitle {
		color: #fff;
		padding: 90rpx 60rpx;
		font-size: 40rpx;
		font-weight: 300;
		transform: skew(-10deg, 0deg);
		position: relative;
		text-shadow: 0px 0px 6rpx rgba(0, 0, 0, 0.3)
	}

	.cardTitle::before {
		content: "";
		position: absolute;
		width: 60rpx;
		height: 6rpx;
		border-radius: 20rpx;
		background-color: #fff;
		display: block;
		top: 60rpx;
		left: 50rpx;
		transform: skew(10deg, 0deg);
	}

	.cardTitle::after {
		content: "";
		position: absolute;
		width: 140rpx;
		border-radius: 6rpx;
		height: 24rpx;
		background-color: #fff;
		display: block;
		bottom: 76rpx;
		left: 90rpx;
		transform: skew(10deg, 0deg);
		opacity: 0.1;
	}
</style>
