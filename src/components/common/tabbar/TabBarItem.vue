<template>
	<div class="tab-bar-item" @click="itemClick">
		<div v-if="!isActive" class="icon_img"><slot name="iconImg"></slot></div>
		<div v-else class="icon_img"><slot name="iconImg_active"></slot></div>
		<!-- <div :class="{icon_text: isActive}"><slot name="iconText"></slot> </div> -->
		<div :style="activeStyle "><slot name="iconText"></slot> </div>
	</div>
	
</template>

<script>
export default {
	name: "TabBarItem",
	props: {
		path: String,
		activeColor: {
			type: String,
			default: 'red'
		} 
	},
	data() {
		return {
		}
	},
	computed: {
		isActive(){
			return this.$route.path.indexOf(this.path) !== -1
		},
		activeStyle() {
			return this.isActive? {color: this.activeColor} : {}
		}
	},
	methods: {
		itemClick() {
			this.$router.push(this.path)		
		}
	},
}
</script>

<style scoped>
	.tab-bar-item{
		flex: 1;
		text-align: center;
		height: 49px;
		font-size: 16px;
		
	}
	.icon_img{
		width: 26px;
		height: 26px;
		margin-top: 2px;
		margin-bottom: 2px;
		vertical-align: middle;
	}

	.icon_text{
		color: red;
	}	
	
</style>
