import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
	{
		path: '/home',
		name: 'Home',
		component: () => import('../views/Home.vue')
	},
	{
		path: '/category',
		name: 'Category',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/Category.vue')
	},
	{
		path: '/cart',
		name: 'Cart',
		component: () => import('../views/Cart.vue')
	},
	{
		path: '/profile',
		name: 'Profile',
		component: () => import('../views/Profile.vue')
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
