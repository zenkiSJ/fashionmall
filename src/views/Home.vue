<template>
  <div class="home">
	<navbar class="nav_home">
		<template v-slot:middleNav>
			购物街
		</template>
	</navbar>
  	<h2>Home Page</h2>    
  </div>
</template>

<script>
import Navbar from '../components/common/navbar/Navbar.vue'

export default {
  name: 'Home',
  components: {
	Navbar
  }  
}
</script>

<style scoped>
	.nav_home {
		background-color:pink;
		color: aliceblue;
	}
</style>
