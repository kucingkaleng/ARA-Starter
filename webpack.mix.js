const mix = require('laravel-mix')
require('laravel-mix-purgecss')

mix.react('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')
  .webpackConfig({
    output: {
      chunkFilename: 'js/[chunkhash].js?id=[chunkhash]',
    }
  })

if (mix.inProduction()) {
  mix.version()
  .purgeCss({
    extensions: [
      'html',
      'js',
      'php',
      'jsx'
    ]
  })
}