// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "assets/css/main.css"
  ],
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Roboto: true,
      Montserrat: {
        wght: [500],
      },
      "Playfair Display": {
        wght: [500],
      }
    }
  },
  app: {
    head: {
      title: 'Inbound and Outbound Form Hasanuddin University',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/logo-unhas.png' }]
    },
  }
})
