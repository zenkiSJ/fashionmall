<template>
	<div class="nav_bar">
		<div class="left"><slot name="leftNav"></slot></div>
		<div class="middle"><slot name="middleNav"></slot></div>
		<div class="right"><slot name="rightNav"></slot></div>
	</div>
</template>

<script>
export default {
	name: "NavBar"
}
</script>

<style scopted>
	.nav_bar {
		display: flex;
		height: 44px;
		line-height: 44px;
		text-align: center;
		box-shadow: 0 1px 1px rgba( 100, 100, 100, .1);
	}

	.left, .right {
		width: 60px;
		/* background-color: red; */
	}

	.middle {
		flex: 1;
	}
</style>
