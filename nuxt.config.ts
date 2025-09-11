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
        { rel: 'icon', type: 'image/png', href: '/avatar.png' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap' }
      ]
    }
  }
})
