import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({

	meta: {
		title: 'Nuxt 3',
		link: [{ rel: 'icon', type: 'png', href: '/favicon.png' }],
		meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],

	},

	css: ['@/assets/main.scss'],

	// buildModules: ['@nuxtjs/sanity/module'],

})
