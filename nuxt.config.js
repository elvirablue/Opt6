export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Opt6',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
      '@/assets/scss/style.scss'
  ],
  styleResources: {
      scss: [
          '@/assets/scss/_variables.scss',
          '@/assets/scss/_mixins.scss'
      ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
      '@/plugins/mixins',
      '@/plugins/main',
      '@/plugins/floating',
      '@/plugins/draggable'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
      { path: '~/components/atoms', prefix: 'Atoms' },
      { path: '~/components/molecules', prefix: 'Molecules' },
      { path: '~/components/organisms', prefix: 'Organisms' }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
      '@nuxtjs/style-resources',
      '@nuxtjs/svg'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
      //'nuxt-svgo'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
