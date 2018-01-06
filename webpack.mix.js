let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  // .js('resources/assets/js/app.js', 'public/js')
  .scripts([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/mustache/mustache.min.js',
    'resources/assets/js/modularJS/pubsub.js',
    'resources/assets/js/modularJS/stats.js',
    'resources/assets/js/modularJS/people.js',
  ], 'public/js/modularJS.js')
  .scripts([
    'node_modules/pusher-js/dist/web/pusher.min.js',
    'resources/assets/js/pusher/script.js',
  ], 'public/js/pusher.js')
  .scripts([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/select2/dist/js/select2.min.js',
    'node_modules/select2/dist/js/i18n/pt-BR.js',
    'resources/assets/js/appSelect2.js',
  ], 'public/js/bundleSelect2.js')
  .styles('node_modules/select2/dist/css/select2.min.css', 'public/css/bundleSelect2.css')
  .sourceMaps()
  .styles('resources/assets/css/modularJS.css', 'public/css/modularJS.css')
  .scripts('resources/assets/js/appTinyMCE.js', 'public/js/appTinyMCE.js')
  .scripts('resources/assets/js/appChangeDom.js', 'public/js/appChangeDom.js')
  .copyDirectory('node_modules/tinymce', 'public/plugins/tinymce')
  .sass('resources/assets/sass/app.scss', 'public/css')
  .disableNotifications()
  .browserSync('localhost:8000');

