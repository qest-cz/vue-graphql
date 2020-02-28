export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
      }
    ]
  },
  loading: { color: '#fff' },
  css: ['~/styles/global.scss'],
  plugins: [],
  buildModules: ['@nuxt/typescript-build'],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/apollo',
    'nuxt-vue-material'
  ],
  axios: {},
  build: {
    build: {
      hotMiddleware: {
        client: {
          overlay: false
        }
      },
      babel: {
        plugins: [
          ['@babel/plugin-proposal-decorators', { legacy: true }],
          ['@babel/plugin-proposal-class-properties', { loose: true }]
        ]
      }
    }
  },
  apollo: {
    clientConfigs: {
      default: '@/plugins/apollo-config.ts',
      browser: {
        httpEndpoint: 'http://localhost:4000'
      }
    }
  },
  vueMaterial: {
    theme: 'default-dark'
  }
}
