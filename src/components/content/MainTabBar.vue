
<template>
	<div>
		<tab-bar>
		<tab-bar-item path="/home" activeColor="blue">
			<template v-slot:iconImg>
				<img src="@/assets/images/tabbar/home.png" alt="">
			</template>
			<template v-slot:iconImg_active>
				<img src="@/assets/images/tabbar/home_active.png" alt="">
			</template>
			<template v-slot:iconText>
				<div>首页</div>
			</template>			
		</tab-bar-item>
		<tab-bar-item path="/category">
			<template v-slot:iconImg>
				<img src="@/assets/images/tabbar/category.png" alt="">
			</template>
			<template v-slot:iconImg_active>
				<img src="@/assets/images/tabbar/category_active.png" alt="">
			</template>
			<template v-slot:iconText>
				<div>Category</div>
			</template>					
		</tab-bar-item>
		<tab-bar-item path="/cart">
			<template v-slot:iconImg>
				<img src="@/assets/images/tabbar/cart.png" alt="">
			</template>
			<template v-slot:iconImg_active>
				<img src="@/assets/images/tabbar/cart_active.png" alt="">
			</template>
			<template v-slot:iconText>
				<div>Cart</div>
			</template>					
		</tab-bar-item>
		<tab-bar-item path="/profile">
			<template v-slot:iconImg>
				<img src="@/assets/images/tabbar/profile.png" alt="">
			</template>
			<template v-slot:iconImg_active>
				<img src="@/assets/images/tabbar/profile_active.png" alt="">
			</template>
			<template v-slot:iconText>
				<div>Profile</div>
			</template>					
		</tab-bar-item>
	</tab-bar>	
	</div>
</template>

<script>
// @ is an alias to /src
import TabBar from '../common/tabbar/TabBar'
import TabBarItem from '../common/tabbar/TabBarItem.vue'

export default {
	name: "MainTabBar",
	components: {
		TabBar,
		TabBarItem
	}		
}
</script>
