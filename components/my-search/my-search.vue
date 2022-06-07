<template>
	<view class="my-search-container" :style="{'background-color': bgcolor}" @click="searchBoxHandler">
		<!-- 使用 view 组件模拟 input 输入框的样式 -->
		<view class="my-search-box" :style="{'border-radius': radius + 'px'}">
		<uni-icons type="search" size="17"></uni-icons>
		<text class="placeholder">搜索</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
		// 背景颜色
		bgcolor: {
		type: String,
		default: '#C00000'
		},
		// 圆角尺寸
		radius: {
		type: Number,
		// 单位是 px
		default: 18
		}
		},
		name:"my-search",
		data() {
			return {
				
			};
		},
		methods: {
		// 点击了模拟的 input 输入框
		searchBoxHandler() {
		// 触发外界通过 @click 绑定的 click 事件处理函数
		this.$emit('click')
		}
		}
	}
</script>

<style lang="scss">

</style>