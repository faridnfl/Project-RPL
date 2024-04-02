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
  }
})
