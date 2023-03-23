// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    server: {
      hmr: {
        protocol: "wss",
        clientPort: 443,
        path: "hmr/",
      },
    },
  },

  /*
    axios: {
    baseURL: 'http://example.com',
    browserBaseURL: 'http://localhost:3000',
  },
  */
});