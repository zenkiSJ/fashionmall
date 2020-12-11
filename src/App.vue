<template>
  <div id="nav">
	<main-tab-bar></main-tab-bar>
  </div>
  <router-view/>
</template>

<script>
import MainTabBar from './components/content/MainTabBar'

export default {
	name: 'App',
	components: {
		MainTabBar
	}
}
</script>

<style>
	/* @import "@asset/css/base.css"; */
</style>
