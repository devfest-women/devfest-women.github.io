import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'DevFest Women TokyoはIT業界において、ダイバーシティとインクルージョンに興味のある方のためのテクノロジーカンファレンスです。' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'DevFest Women Tokyo 2019' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://www.devfest-women.com/' },
      { hid: 'og:title', property: 'og:title', content: 'DevFest Women Tokyo 2019' },
      { hid: 'og:description', property: 'og:description', content: 'DevFest Women TokyoはIT業界において、ダイバーシティとインクルージョンに興味のある方のためのテクノロジーカンファレンスです。' },
      { hid: 'og:image', property: 'og:image', content: 'assets/images/ogp.png' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@wtmtokyo' },
      { name: 'twitter:title', content: 'DevFest Women Tokyo 2019' },
      { name: 'twitter:description', content: 'DevFest Women TokyoはIT業界において、ダイバーシティとインクルージョンに興味のある方のためのテクノロジーカンファレンスです。' },
      { name: 'twitter:image', content: 'assets/images/ogp.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
,
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '##000000' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/vuetify',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    theme: {
      primary: colors.blue.darken2,
      accent: colors.grey.darken3,
      secondary: colors.amber.darken3,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
