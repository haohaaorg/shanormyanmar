const mix = require('laravel-mix');

mix.scripts([
'node_modules/ml-classify-text/lib/index.js',
'index.js'],
'public/dist/som.min.js')

mix.copy('public/dist/som.min.js','dist/som.min.js')