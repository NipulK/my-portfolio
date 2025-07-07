import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'], // ✅ Register Tailwind CSS file

  app: {
    head: {
      title: 'Nipul Kanishka | Portfolio',
      meta: [
        { name: 'description', content: 'My personal portfolio website built with Nuxt 3.' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css' }
      ]
    }
  }
})
