let mix = require('laravel-mix')

mix.setPublicPath('./dist')
mix.ts('./src/app/index.ts', 'app.js')

mix.disableNotifications()
mix.options({ processCssUrls: false })
mix.extract([
  'vue',
  'vue-router'
])

mix.webpackConfig({
  module: {
    rules: [
      { test: /\.pug$/, loader: 'pug-plain-loader' }
    ]
  }
})