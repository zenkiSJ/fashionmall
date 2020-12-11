<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script>
import MainTabBar from './components/content/MainTabBar'
export default {
	
}
</script>

<style>
	/* @import "@asset/css/base.css"; */
</style>
