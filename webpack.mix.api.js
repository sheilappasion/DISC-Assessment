let mix = require('laravel-mix')
const node_externals = require('webpack-node-externals')

mix.disableNotifications()
mix.setPublicPath('./dist')
mix.ts('./src/api/index.ts', 'api.js')

mix.webpackConfig({
  externals: [node_externals({
    modulesDir: "./node_modules"
  })]
})