// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "~/assets/web/assets/mobirise-icons2/mobirise2.css",
    "~/assets/bootstrap/css/bootstrap.min.css",
    "~/assets/bootstrap/css/bootstrap-grid.min.css",
    "~/assets/bootstrap/css/bootstrap-reboot.min.css",
    "~/assets/dropdown/css/style.css",
    "~/assets/socicon/css/styles.css",
    "~/assets/theme/css/style.css",
    "~/assets/mobirise/css/mbr-additional.css?v=IjZ8hm",
  ],
  modules:[
    '@nuxt/content',
    'nuxt-aos'
  ],
  content: {
    highlight: {
        theme: {
            default: "one-dark-pro",
            dark: "github-dark",
        },
    },
},
});
