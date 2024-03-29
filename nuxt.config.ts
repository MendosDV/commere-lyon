// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/cloudinary",
  ],
  css: [
    "bootstrap/dist/css/bootstrap.css",
    "@fortawesome/fontawesome-svg-core/styles.css"
  ]
})
