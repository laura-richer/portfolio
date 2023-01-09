export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1.0',
      title: 'Laura Richer',
      link: [{ rel: 'icon', type: 'image/png', href: '_nuxt/assets/images/favicon.png' }],
      // meta: [
      //   { name: 'description', content: 'My amazing site.' }
      // ],
    },
  },
  ssr: false,
  css: ['@/scss/global.scss'],
  modules: ['@nuxtjs/apollo'],
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'http://localhost:1337/graphql',
      },
    },
  },
});

console.log('testing');
