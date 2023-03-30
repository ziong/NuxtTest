import { createVuetify } from 'vuetify'
import { components } from 'vuetify/components'
import { directives } from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    // ssr: true,
    // components,
    // directives,
    theme: {
        defaultTheme: 'dark'
      }    
  })

  nuxtApp.vueApp.use(vuetify)
})