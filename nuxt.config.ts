// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: ['@prisma/nuxt'],
  devtools: { enabled: true },
  prisma: {
    autoSetupPrisma: true,
    installStudio: false,
    installCLI: false,
    installClient: false
  },
  vite: {
    resolve: {
      alias: {
        '.prisma/client/index-browser': './node_modules/.prisma/client/index-browser.js',
      },
    },
  },
})
